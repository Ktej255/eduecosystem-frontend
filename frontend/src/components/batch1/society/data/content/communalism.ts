import { ContentItem } from "../../../types";

export const communalism: ContentItem = {
    id: "communalism",
    title: "Communalism",
    readTime: "20 mins",
    sections: [
        {
            heading: "Definition",
            content: `
        <p class="mb-4">
          Communalism is a political ideology that prioritizes the interests of a religious community over the wider nation, often leading to inter-religious conflict.
        </p>
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
            <strong>Bipan Chandra's View:</strong> Communalism is the belief that people who follow the same religion have common secular interests (political, economic, social) which are different from other religions.
        </div>
      `
        },
        {
            heading: "Stages of Communalism",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Mild Communalism:</strong> Belief that same religion = same secular interests.</li>
          <li><strong>Moderate Communalism:</strong> Belief that secular interests of different religions are dissimilar and divergent.</li>
          <li><strong>Extreme Communalism:</strong> Belief that interests are mutually incompatible and antagonistic.</li>
        </ul>
      `
        },
        {
            heading: "Causes and Impact",
            content: `
        <p class="mb-2"><strong>Causes:</strong> Legacy of Partition, Vote Bank Politics, Socio-economic disparities, and Media sensationalism.</p>
        <p class="mb-2"><strong>Impact:</strong> Riots, Ghettoization, Threat to Unity and Integrity.</p>
      `
        }
    ],
    summary: "An analysis of communalism as a major threat to Indian society, its evolution, and the need for secular ethics.",
    source: "RAM Ahuja / NCERT Sociology",
    tags: ["Society", "Communalism", "Social Issues"]
};
