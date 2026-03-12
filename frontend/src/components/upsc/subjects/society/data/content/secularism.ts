import { ContentItem } from "../../../types";

export const secularism: ContentItem = {
    id: "secularism",
    title: "Secularism",
    readTime: "25 mins",
    sections: [
        {
            heading: "Meaning of Secularism",
            content: `
        <h3 class="text-lg font-semibold mb-2">Western vs Indian Concept</h3>
        <p class="mb-4">
          <strong>Western Concept:</strong> Strict separation of State and Religion (Negative Secularism).
        </p>
        <p class="mb-4">
          <strong>Indian Concept:</strong> "Sarva Dharma Sambhav" - Equal respect for all religions. The State is not anti-religion but maintains a principled distance. It can interfere to reform religion (e.g., banning Triple Talaq).
        </p>
      `
        },
        {
            heading: "Constitutional Provisions",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Preamble:</strong> The word "Secular" was added by the 42nd Amendment (1976).</li>
          <li><strong>Article 25-28:</strong> Fundamental Right to Freedom of Religion.</li>
          <li><strong>Article 44:</strong> Uniform Civil Code (Directive Principle).</li>
        </ul>
      `
        },
        {
            heading: "Challenges to Secularism",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Politicization of Religion:</strong> Use of religious symbols for electoral gains.</li>
          <li><strong>Pseudo-Secularism:</strong> Accusations of minority appeasement vs majoritarianism.</li>
          <li><strong>Communal Violence:</strong> Frequent riots undermining the secular fabric.</li>
        </ul>
      `
        }
    ],
    summary: "Exploring the unique Indian model of secularism, its constitutional mandate, and the contemporary challenges it faces.",
    source: "Indian Constitution / Supreme Court Judgments (SR Bommai Case)",
    tags: ["Society", "Secularism", "Polity"]
};
