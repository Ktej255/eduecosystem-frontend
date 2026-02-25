import { useMemo } from 'react';
import { useBatch2Events } from './useBatch2Events';
import { SkillProgress } from '../sadhana/data/sadhana-data';

export function useSadhanaSkillTracker() {
    const { events } = useBatch2Events();

    const skillProgress = useMemo(() => {
        const progressMap: Record<string, SkillProgress> = {};

        const initializeOrGet = (skillId: string): SkillProgress => {
            if (!progressMap[skillId]) {
                progressMap[skillId] = {
                    skillId,
                    maturity: 'Sapling',
                    points: 0,
                    lastPracticed: null
                };
            }
            return progressMap[skillId];
        };

        const addPoints = (skillId: string, points: number, timestamp: string) => {
            const skill = initializeOrGet(skillId);
            skill.points += points;

            if (!skill.lastPracticed || new Date(timestamp) > new Date(skill.lastPracticed)) {
                skill.lastPracticed = timestamp;
            }

            if (skill.points >= 100) {
                skill.maturity = 'Orchard';
            } else if (skill.points >= 30) {
                skill.maturity = 'Tree';
            }
        };

        // Process all events sequentially to build skill states
        events.forEach(event => {

            // 1. Digital Mala events -> Build Focus (Dharana) and Devotion (Bhakti)
            if (event.type === 'mala_round_done') {
                const duration = event.data?.duration || 5;
                addPoints('dharana', duration * 2, event.timestamp); // 2 points per minute of Japa

                if (event.data?.mode === 'mansika' || event.data?.mode === 'immersive') {
                    addPoints('bhakti', 5, event.timestamp); // Bonus for deep internal modes
                }
            }

            // 2. Dinacharya Dashboard events -> Build Discipline (Tapas)
            if (event.type === 'dinacharya_step_done') {
                addPoints('tapas', 2, event.timestamp);

                // If it's Brahma Muhurta waking (step 1 usually)
                if (event.data?.stepId === 1) {
                    addPoints('tapas', 5, event.timestamp); // High value for waking up early
                }
            }

            // 3. Sadhana Session -> Builds Ritual Design and Mantra Phonetics
            if (event.type === 'sadhana_session_done') {
                const phases = event.data?.phasesCompleted || [];
                if (phases.includes('invocation')) {
                    addPoints('ritual-design', 5, event.timestamp);
                }
                if (phases.includes('core')) {
                    addPoints('mantra-phonetics', 5, event.timestamp);
                }
                // General discipline for completing a full sitting
                addPoints('tapas', 10, event.timestamp);
            }

            // 4. Upanishad Completion -> Builds Self-Inquiry (Atma-Bodha)
            if (event.type === 'upanishad_session_completed') {
                addPoints('atma-bodha', 15, event.timestamp);
            }

            // 5. Journaling -> Builds Honesty (Satya) and Visualization (Dhyana)
            if (event.type === 'journal_entry_saved') {
                addPoints('satya', 5, event.timestamp);
                addPoints('visualization-dhyana', 5, event.timestamp); // Reflection builds the habit of steady observation

                // If gunas are tracked in the journal
                if (event.gunas) {
                    if (event.gunas.sattva > 60) addPoints('santosha', 5, event.timestamp); // Contentment for high sattva
                    if (event.gunas.rajas > 50 || event.gunas.tamas > 50) addPoints('vairagya', 5, event.timestamp); // Detachment tracking when agitated or dull
                }
            }

            // 6. Mudra Practice -> Builds Mudra Precision
            if (event.type === 'mudra_practiced') {
                addPoints('mudra-precision', 5, event.timestamp);
            }

            // 7. Patrasadana -> Builds Ritual Setup
            if (event.type === 'patrasadana_checked') {
                addPoints('ritual-setup', 10, event.timestamp);
            }

            // 8. Sankalpa Signing -> Builds Sankalpa Management
            if (event.type === 'sankalpa_signed') {
                addPoints('sankalpa-management', 15, event.timestamp);
            }

            // 9. Schedule Rigor Check (Brahma Muhurta Adherence)
            if (event.type === 'sadhana_session_done') {
                const sessionDate = new Date(event.timestamp);
                const hour = sessionDate.getHours();
                // Brahma Muhurta is roughly 4:00 AM to 6:00 AM for this purpose
                if (hour >= 4 && hour < 6) {
                    addPoints('schedule-rigor', 10, event.timestamp);
                }
            }

            // 10. Spiritual Quotient Test
            if (event.type === 'sq_test_completed') {
                addPoints('atma-bodha', 20, event.timestamp);
            }

        });

        return Object.values(progressMap);
    }, [events]);

    return {
        skillProgress
    };
}
