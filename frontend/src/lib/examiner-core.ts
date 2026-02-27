import { getSRSData } from '@/components/batch1/polity/revision/srs-engine';
import { getChapterReports } from '@/lib/report-persistence';

export type VulnerabilityProfile = {
    chapterId: number;
    title: string;
    riskScore: number;
    trapType: 'concept_confusion' | 'memory_fade' | 'overconfidence_bias' | 'speed_error';
    examinerNote: string;
};

const CHAPTER_MAP: Record<number, string> = {
    1: 'Historical Background',
    2: 'Making of the Constitution',
    3: 'Salient Features',
    10: 'Amendment of Constitution',
    20: 'President',
    22: 'Prime Minister',
    23: 'Central Council of Ministers'
};

export async function computeStudentVulnerabilities(): Promise<{ profiles: VulnerabilityProfile[], analyzedCards: number, overallRisk: number }> {
    try {
        const srsCardsRaw = await getSRSData();
        const pastReports = await getChapterReports('polity');

        const srsCards = Object.values(srsCardsRaw);
        const vulns: VulnerabilityProfile[] = [];

        let totalRiskSum = 0;
        let cardsAnalyzed = 0;

        const chapterIds = new Set([...srsCards.map(c => c.chapterId), ...pastReports.map(r => r.chapterId)]);

        chapterIds.forEach(id => {
            const chCards = srsCards.filter(c => c.chapterId === id);
            const chReports = pastReports.filter(r => r.chapterId === id);

            if (chCards.length === 0 && chReports.length === 0) return;

            cardsAnalyzed += chCards.length;

            const avgEase = chCards.length > 0 ? (chCards.reduce((acc, c) => acc + c.easeFactor, 0) / chCards.length) : 0;
            const lowEaseCount = chCards.filter(c => c.easeFactor <= 1.5).length;

            const avgAccuracy = chReports.length > 0 ? (chReports.reduce((acc, r) => acc + r.accuracy, 0) / chReports.length) : 0;

            let riskScore = 0;
            let trapType: VulnerabilityProfile['trapType'] = 'concept_confusion';
            let examinerNote = '';

            if (avgAccuracy > 80 && avgEase < 2.0 && chCards.length > 0) {
                riskScore = Math.min(100, 40 + (lowEaseCount * 10));
                trapType = 'overconfidence_bias';
                examinerNote = "Student aces standard tests but forgets nuance rapidly. Trap them via 'NOT correct' or minor factual twists.";
            } else if (avgAccuracy > 0 && avgAccuracy < 50) {
                riskScore = Math.max(70, 100 - avgAccuracy);
                trapType = 'concept_confusion';
                examinerNote = "Fundamental misunderstanding. Use options containing superficially plausable but constitutionally inaccurate definitions.";
            } else if (chCards.some(c => new Date(c.dueDate) < new Date())) {
                riskScore = 80;
                trapType = 'memory_fade';
                examinerNote = "Knowledge is decaying. Target specific Articles and Schedules they haven't reviewed recently.";
            } else {
                riskScore = 15;
                trapType = 'speed_error';
                examinerNote = "Topic mastered. Only vulnerable to poorly worded questions or severe time pressure.";
            }

            if (riskScore > 30) {
                totalRiskSum += riskScore;
                vulns.push({
                    chapterId: id,
                    title: CHAPTER_MAP[id] || `Chapter ${id}`,
                    riskScore,
                    trapType,
                    examinerNote
                });
            }
        });

        vulns.sort((a, b) => b.riskScore - a.riskScore);

        return {
            profiles: vulns.slice(0, 5),
            analyzedCards: cardsAnalyzed,
            overallRisk: vulns.length > 0 ? Math.round(totalRiskSum / vulns.length) : 0
        };

    } catch (e) {
        console.error("Failed to compile Examiner Data", e);
        return { profiles: [], analyzedCards: 0, overallRisk: 0 };
    }
}
