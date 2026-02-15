import { ContentItem } from "../../../types";

export const inflationIndices: ContentItem = {
    id: "inflation-indices",
    title: "Inflation: Concepts & Indices",
    readTime: "25 mins",
    sections: [
        {
            heading: "Understanding Inflation",
            content: `
        <p class="mb-4">
          Inflation is a general rise in the price level of an economy over a period of time. It reduces the purchasing power of money.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-red-50 p-4 rounded border border-red-200">
                <strong>Demand-Pull Inflation:</strong>
                <p class="text-sm mt-1">"Too much money chasing too few goods." Caused by increased money supply or government spending.</p>
            </div>
            <div class="bg-orange-50 p-4 rounded border border-orange-200">
                <strong>Cost-Push Inflation:</strong>
                <p class="text-sm mt-1">Caused by an increase in production costs (e.g., oil prices, wages).</p>
            </div>
        </div>
      `
        },
        {
            heading: "WPI vs CPI",
            content: `
        <table class="w-full text-sm text-left border-collapse border border-slate-300 mb-4">
            <thead>
                <tr class="bg-slate-100">
                    <th class="border border-slate-300 p-2">Feature</th>
                    <th class="border border-slate-300 p-2">WPI (Wholesale Price Index)</th>
                    <th class="border border-slate-300 p-2">CPI (Consumer Price Index)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-slate-300 p-2"><strong>Focus</strong></td>
                    <td class="border border-slate-300 p-2">Prices at wholesale level (bulk)</td>
                    <td class="border border-slate-300 p-2">Prices paid by end consumers</td>
                </tr>
                <tr>
                    <td class="border border-slate-300 p-2"><strong>Components</strong></td>
                    <td class="border border-slate-300 p-2">Goods only (Services excluded)</td>
                    <td class="border border-slate-300 p-2">Goods + Services (Health, Edu)</td>
                </tr>
                <tr>
                    <td class="border border-slate-300 p-2"><strong>Published By</strong></td>
                    <td class="border border-slate-300 p-2">Office of Economic Advisor (Ministry of Commerce)</td>
                    <td class="border border-slate-300 p-2">NSO (Ministry of Statistics - MOSPI)</td>
                </tr>
                 <tr>
                    <td class="border border-slate-300 p-2"><strong>Base Year</strong></td>
                    <td class="border border-slate-300 p-2">2011-12</td>
                    <td class="border border-slate-300 p-2">2012</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            heading: "Headline vs Core Inflation",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Headline Inflation:</strong> Total inflation within an economy, including commodities such as food and energy prices which tend to be more volatile.</li>
          <li><strong>Core Inflation:</strong> Headline Inflation minus Food and Fuel prices. It reflects the long-term trend.</li>
        </ul>
      `
        }
    ],
    summary: "Comprehensive guide to understanding inflation, measuring it via WPI/CPI, and distinguishing between different types of price rise.",
    source: "RBI Bulletins / MoSPI Reports",
    tags: ["Economy", "Inflation", "CPI", "WPI"]
};
