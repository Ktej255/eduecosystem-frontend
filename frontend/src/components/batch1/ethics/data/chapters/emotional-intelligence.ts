import { ContentItem } from "../../../types";

export const emotionalIntelligence: ContentItem = {
    id: "emotional-intelligence",
    title: "Emotional Intelligence in Administration",
    readTime: "25 mins",
    sections: [
        {
            heading: "What is Emotional Intelligence?",
            content: `
        <p class="mb-4">
          Emotional Intelligence (EI) is the ability to identify, use, understand, and manage emotions in positive ways to relieve stress, communicate effectively, empathize with others, overcome challenges, and defuse conflict.
        </p>
        <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
            <strong>Goleman's Model (5 Components):</strong>
            <ol class="list-decimal pl-5 mt-2 space-y-1">
                <li>Self-Awareness</li>
                <li>Self-Regulation</li>
                <li>Motivation</li>
                <li>Empathy</li>
                <li>Social Skills</li>
            </ol>
        </div>
      `
        },
        {
            heading: "Utility in Administration",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Decision Making:</strong> Prevents impulsive decisions driven by anger or anxiety (e.g., during riots).</li>
          <li><strong>Conflict Resolution:</strong> Helps in understanding the grievance of the other party (e.g., land acquisition protests).</li>
          <li><strong>Motivation:</strong> Inspiring subordinates and maintaining morale in difficult conditions.</li>
          <li><strong>Stress Management:</strong> Handling political pressure and public scrutiny.</li>
        </ul>
      `
        },
        {
            heading: "Developing EI",
            content: `
        <p class="mb-2"><strong>Strategies:</strong></p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
            <li>Practice mindfulness and self-reflection.</li>
            <li>Seek feedback from colleagues.</li>
            <li>Observe body language.</li>
            <li>Active listening.</li>
        </ul>
      `
        }
    ],
    summary: "An exploration of Emotional Intelligence as a critical skill for civil servants, moving beyond IQ to EQ for effective governance.",
    source: "Daniel Goleman / 2nd ARC Report",
    tags: ["Ethics", "Emotional Intelligence", "Administration"]
};
