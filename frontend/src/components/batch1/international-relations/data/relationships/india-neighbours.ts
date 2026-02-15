import { ContentItem } from "../../../types";

export const indiaNeighbours: ContentItem = {
    id: "india-neighbours",
    title: "India's Neighbourhood First Policy",
    readTime: "30 mins",
    sections: [
        {
            heading: "Overview of Policy",
            content: `
        <p class="mb-4">
          India's "Neighbourhood First" policy focuses on peaceful relations and collaborative synergistic development with its South Asian neighbours. It is based on the Gujral Doctrine: non-reciprocal concessions to smaller neighbours.
        </p>
      `
        },
        {
            heading: "India - Bangladesh",
            content: `
        <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 mb-4">
            <strong>Key Areas of Cooperation:</strong>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Connectivity:</strong> Maitri Sethu, restoring pre-1965 rail links.</li>
                <li><strong>Energy:</strong> Maitree Super Thermal Power Project.</li>
                <li><strong>Border:</strong> Land Boundary Agreement (2015) solved enclave issues.</li>
            </ul>
        </div>
        <p class="mb-2 text-sm text-red-600"><strong>Challenges:</strong> Teesta Water Sharing, Illegal Migration (NRC/CAA concerns).</p>
      `
        },
        {
            heading: "India - Nepal",
            content: `
        <p class="mb-2">An open border relationship based on "Roti-Beti" (familial) ties.</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Hydropower:</strong> Pancheshwar Multipurpose Project.</li>
          <li><strong>Crisis:</strong> 2015 Blockade and the new map controversy (Kalapani-Limpiyadhura).</li>
        </ul>
      `
        },
        {
            heading: "India - Sri Lanka",
            content: `
        <p class="mb-2"><strong>Economic Crisis Support:</strong> India provided $4Bn+ aid during 2022 crisis.</p>
        <p class="mb-2"><strong>Strategic:</strong> Countering Chinese influence (Hambantota Port).</p>
        <p class="mb-2"><strong>Fishermen Issue:</strong> Recurring conflict over Katchatheevu island and maritime boundaries.</p>
      `
        }
    ],
    summary: "Comprehensive analysis of India's relations with immediate neighbours, focusing on connectivity, security, and the challenges of Chinese influence.",
    source: "MEA Annual Report / IDSA",
    tags: ["IR", "Neighbourhood", "Bangladesh", "Nepal", "Sri Lanka"]
};
