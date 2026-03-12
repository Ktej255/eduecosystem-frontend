import { ContentItem } from "../../../types";

export const corruptionEfficiencyCase: ContentItem = {
    id: "case-study-corruption",
    title: "Case Study: Corruption vs Efficiency",
    readTime: "20 mins",
    sections: [
        {
            heading: "The Situation",
            content: `
        <p class="mb-4">
          You are a newly appointed District Collector in a backward district. You notice that your subordinate, a Tehsildar, is extremely efficient. He clears files quickly, manages land records well, and is popular among the local politicians.
        </p>
        <p class="mb-4">
          However, you receive credible anonymous complaints that he takes bribes for expediting work. He never delays work, but "speed money" is an open secret. The district has a history of slow administration, and his efficiency is a relief to many, despite the cost.
        </p>
        <p class="mb-4"><strong>Dilemma:</strong> Do you take action against an efficient officer and risk stalling development work, or ignore the corruption for the greater good of efficiency?</strong></p>
      `
        },
        {
            heading: "Analysis",
            content: `
        <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
            <strong>Key Values at Conflict:</strong>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Efficiency & Effectiveness</li>
                <li>Probity & Integrity</li>
                <li>Public Trust</li>
            </ul>
        </div>
      `
        },
        {
            heading: "Possible Courses of Action",
            content: `
        <h3 class="text-lg font-semibold mb-2">Option 1: Ignore the corruption</h3>
        <p class="mb-2 text-sm">Merit: Work continues smoothly. Demerit: Erodes moral fabric, sets bad precedent, illegal.</p>
        
        <h3 class="text-lg font-semibold mb-2">Option 2: Transfer him immediately</h3>
        <p class="mb-2 text-sm">Merit: Immediate stop to corruption. Demerit: Passes the problem to another district, doesn't solve the root cause.</p>

        <h3 class="text-lg font-semibold mb-2">Option 3: Investigate and prosecute while strengthening systems</h3>
        <p class="mb-2 text-sm"><strong>Recommended.</strong> Initiate a vigilance inquiry. Simultaneously, digitize land records and implement a "First-In-First-Out" system for file clearance to reduce discretion.</p>
      `
        },
        {
            heading: "Conclusion",
            content: `
        <p>Efficiency without integrity is dangerous. A corrupt efficient officer does more harm to the system in the long run by normalizing corruption. The goal of administration is not just *doing* things, but doing things *right*.</p>
      `
        }
    ],
    summary: "A classic administrative dilemma exploring the trade-off between procedural efficiency and moral integrity.",
    source: "UPSC Previous Year Question (Adapted)",
    tags: ["Ethics", "Case Study", "Corruption"]
};
