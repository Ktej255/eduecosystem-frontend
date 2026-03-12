import { ContentItem } from "../../../types";

export const civilServiceIntegrity: ContentItem = {
    id: "case-study-integrity",
    title: "Case Study: The Honest Officer",
    readTime: "15 mins",
    sections: [
        {
            heading: "Scenario",
            content: `
        <p class="mb-4">
          You are a District Magistrate in a flood-prone district. A massive flood relief fund has been sanctioned. The local MLA, who belongs to the ruling party, approaches you with a list of "beneficiaries" who are actually his party workers and not flood victims. He subtly threatens that your transfer is due and non-cooperation could lead to a "punishment posting" in a remote area. Your wife is critically ill and needs treatment in the city hospital where you are currently posted.
        </p>
      `
        },
        {
            heading: "Dilemmas",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Personal vs Professional:</strong> Care for sick wife vs Duty to the public.</li>
          <li><strong>Political Pressure vs Integrity:</strong> Succumbing to MLA vs Following the rules.</li>
          <li><strong>Short-term Gain vs Long-term Conscience:</strong> Avoiding transfer vs Guilt of corruption.</li>
        </ul>
      `
        },
        {
            heading: "Course of Action",
            content: `
        <p class="mb-2"><strong>Recommended Steps:</strong></p>
        <ol class="list-decimal pl-5 mb-4 space-y-2">
          <li><strong>Verify the List:</strong> Politely inform the MLA that you will process the list after standard verification procedures.</li>
          <li><strong>Transparency:</strong> Publish the list of actual beneficiaries on the district website to ensure public scrutiny.</li>
          <li><strong>Documentation:</strong> Keep a record of all communications (if possible) or ensure all orders are in writing.</li>
          <li><strong>Personal Resilience:</strong> Prepare for the transfer mentally; integrity is non-negotiable. Request medical leave if transfer is issued, citing wife's condition on humanitarian grounds.</li>
        </ol>
      `
        }
    ],
    summary: "A classic case study testing the conflict between personal interest conservation and public duty.",
    source: "UPSC Previous Year Case Studies",
    tags: ["Case Study", "Integrity", "Corruption"]
};
