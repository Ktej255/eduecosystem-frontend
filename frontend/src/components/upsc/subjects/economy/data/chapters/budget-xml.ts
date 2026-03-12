import { ContentItem } from "../../../types";

export const budgetAnalysis: ContentItem = {
    id: "budget-analysis",
    title: "Union Budget: Analysis & Key Terms",
    readTime: "30 mins",
    sections: [
        {
            heading: "Constitutional Provisions",
            content: `
        <p class="mb-4">
          The term "Budget" is not mentioned in the Constitution. It is referred to as the <strong>Annual Financial Statement</strong> under <strong>Article 112</strong>.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Article 113:</strong> Procedure in Parliament with respect to estimates.</li>
          <li><strong>Article 114:</strong> Appropriation Bill (No money can be withdrawn from Consolidated Fund without this).</li>
          <li><strong>Article 110:</strong> Money Bill definition.</li>
        </ul>
      `
        },
        {
            heading: "Components of Budget",
            content: `
        <h3 class="text-lg font-semibold mb-2">Revenue vs Capital Budget</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-slate-50 p-4 rounded border border-slate-200">
                <strong>Revenue Budget:</strong>
                <ul class="list-disc pl-5 mt-2 text-sm">
                    <li>Revenue Receipts (Tax + Non-Tax)</li>
                    <li>Revenue Expenditure (Salaries, Subsidies, Interest Payments)</li>
                    <li><em>Does not create assets or reduce liabilities.</em></li>
                </ul>
            </div>
            <div class="bg-slate-50 p-4 rounded border border-slate-200">
                <strong>Capital Budget:</strong>
                <ul class="list-disc pl-5 mt-2 text-sm">
                    <li>Capital Receipts (Loans, Disinvestment)</li>
                    <li>Capital Expenditure (Infra, Machinery)</li>
                    <li><em>Creates assets or reduces liabilities.</em></li>
                </ul>
            </div>
        </div>
      `
        },
        {
            heading: "Deficits Explained",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Fiscal Deficit:</strong> Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts). Indicates total borrowing requirements.</li>
          <li><strong>Revenue Deficit:</strong> Revenue Expenditure - Revenue Receipts. Indicates borrowing for consumption.</li>
          <li><strong>Primary Deficit:</strong> Fiscal Deficit - Interest Payments. Indicates borrowing requirement excluding past debt servicing.</li>
        </ul>
      `
        },
        {
            heading: "Latest Budget Trends (2025-26)",
            content: `
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-4">
            <strong>Focus Areas:</strong> Green Growth, Youth Power, Inclusive Development (Saptarishi).
        </div>
        <p class="mb-2"><strong>Capex Push:</strong> Evaluating the 33% increase in capital expenditure outlay.</p>
        <p class="mb-2"><strong>Fiscal Glide Path:</strong> Aiming to bring Fiscal Deficit below 4.5% of GDP by 2025-26.</p>
      `
        }
    ],
    summary: "A deep dive into the Annual Financial Statement, understanding the accounting of government finances, types of deficits, and the strategic direction of the latest Union Budget.",
    source: "Ministry of Finance / PRS Legislative Research",
    tags: ["Economy", "Budget", "Fiscal Policy"]
};
