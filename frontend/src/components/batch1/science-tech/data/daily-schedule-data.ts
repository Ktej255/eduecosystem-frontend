import { SCI_TECH_SYLLABUS, SciTechTopic } from "./scitech-schedule-data";

export interface SciTechDay {
    day: number;
    title: string;
    topicId: string;
    subtopics: string[];
    description: string;
    category: string;
}

// Helper to flatten syllabus into days
const generateSchedule = (): SciTechDay[] => {
    const schedule: SciTechDay[] = [];
    let currentDay = 1;

    SCI_TECH_SYLLABUS.forEach((topic) => {
        // Distribute subtopics across the allocated days
        const subtopicsPerDay = Math.ceil(topic.subtopics.length / topic.days);

        for (let i = 0; i < topic.days; i++) {
            const startIdx = i * subtopicsPerDay;
            const daySubtopics = topic.subtopics.slice(startIdx, startIdx + subtopicsPerDay);

            // If we run out of subtopics but still have days allocated (e.g. revision/practice day), handle it
            const desc = daySubtopics.length > 0
                ? `Focus on: ${daySubtopics.join(", ")}`
                : "Revision and consolidation of concepts.";

            schedule.push({
                day: currentDay,
                title: `${topic.title} - Part ${i + 1}`,
                topicId: topic.id,
                subtopics: daySubtopics,
                description: desc,
                category: topic.category
            });
            currentDay++;
        }
    });

    return schedule;
};

export const SCI_TECH_SCHEDULE = generateSchedule();
