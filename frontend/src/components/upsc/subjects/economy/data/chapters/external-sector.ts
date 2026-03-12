import { ContentItem } from "../../../types";

export const externalSector: ContentItem = {
    id: "external-sector",
    title: "External Sector: BoP & Forex",
    readTime: "25 mins",
    sections: [
        {
            heading: "Balance of Payments (BoP)",
            content: `
        <p class="mb-4">
          BoP is a systematic record of all economic transactions between residents of a country and the rest of the world. It consists of:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
                <strong>Current Account:</strong>
                <ul class="list-disc pl-5 mt-2 text-sm">
                    <li>Goods Trade (Exports/Imports)</li>
                    <li>Services Trade (IT, Tourism)</li>
                    <li>Remittances</li>
                </ul>
            </div>
            <div class="bg-indigo-50 p-4 rounded border border-indigo-200">
                <strong>Capital Account:</strong>
                <ul class="list-disc pl-5 mt-2 text-sm">
                    <li>Foreign Investments (FDI, FPI)</li>
                    <li>External Commercial Borrowings (ECB)</li>
                    <li>NRI Deposits</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            heading: "Foreign Exchange (Forex) Reserves",
            content: `
        <p class="mb-2">Managed by RBI. Components include:</p>
        <ol class="list-decimal pl-5 mb-4 space-y-2">
            <li>Foreign Currency Assets (FCA) - Largest component.</li>
            <li>Gold.</li>
            <li>SDR (Special Drawing Rights) - IMF's currency.</li>
            <li>Reserve Tranche Position (RTP) with IMF.</li>
        </ol>
      `
        },
        {
            heading: "Exchange Rate Regimes",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Fixed Exchange Rate:</strong> Pegged to another currency (e.g., Gold Standard).</li>
          <li><strong>Floating Exchange Rate:</strong> Determined by market forces of demand and supply.</li>
          <li><strong>Managed Float (Dirty Float):</strong> RBI intervenes to reduce volatility (India follows this).</li>
        </ul>
      `
        }
    ],
    summary: "An overview of India's external economic relations, understanding the components of BoP, and the management of foreign exchange.",
    source: "RBI Annual Report / Economic Survey",
    tags: ["Economy", "BoP", "Forex", "FDI"]
};
