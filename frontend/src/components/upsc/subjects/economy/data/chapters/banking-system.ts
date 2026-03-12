import { ContentItem } from "../../../types";

export const bankingSystem: ContentItem = {
    id: "banking-system",
    title: "Indian Banking System",
    readTime: "25 mins",
    sections: [
        {
            heading: "Overview",
            content: `
        <p class="mb-4">
          The Indian banking system is a robust network of financial institutions regulated by the Reserve Bank of India (RBI). It plays a crucial role in mobilizing savings and channeling them into productive investments.
        </p>
      `
        },
        {
            heading: "Reserve Bank of India (RBI)",
            content: `
        <h3 class="text-lg font-semibold mb-2">Role and Functions</h3>
        <p class="mb-2">Established in 1935 under the RBI Act, 1934, RBI is the central bank of the country.</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Issuer of Currency:</strong> Sole authority to issue currency notes (except one rupee note/coins).</li>
          <li><strong>Banker to Government:</strong> Manages government accounts and public debt.</li>
          <li><strong>Banker's Bank:</strong> Regulates commercial banks and acts as lender of last resort.</li>
          <li><strong>Controller of Credit:</strong> Uses monetary policy tools to manage inflation and growth.</li>
        </ul>
      `
        },
        {
            heading: "Monetary Policy Tools",
            content: `
        <h3 class="text-lg font-semibold mb-2">Quantitative Tools</h3>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Repo Rate:</strong> Rate at which RBI lends to banks for short term. Current indicative: 6.5%.</li>
          <li><strong>Reverse Repo Rate:</strong> Rate at which RBI borrows from banks.</li>
          <li><strong>CRR (Cash Reserve Ratio):</strong> Portion of deposits banks must keep with RBI in cash.</li>
          <li><strong>SLR (Statutory Liquidity Ratio):</strong> Portion of deposits banks must maintain in liquid assets (gold, govt securities).</li>
        </ul>
      `
        },
        {
            heading: "Scheduled Commercial Banks (SCBs)",
            content: `
        <h3 class="text-lg font-semibold mb-2">Structure</h3>
        <p class="mb-2">Banks listed in the 2nd Schedule of RBI Act, 1934.</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Public Sector Banks (PSBs):</strong> Govt holds majority stake (e.g., SBI, PNB).</li>
          <li><strong>Private Sector Banks:</strong> Majority stake by private individuals (e.g., HDFC, ICICI).</li>
          <li><strong>Foreign Banks:</strong> Incorporated outside India but operating branches here.</li>
          <li><strong>Regional Rural Banks (RRBs):</strong> Created for rural credit, sponsored by PSBs.</li>
        </ul>
      `
        }
    ],
    summary: "Comprehensive overview of RBI functions, monetary policy tools, and the structure of commercial banking in India.",
    source: "NCERT Macroeconomics / RBI Website",
    tags: ["Economy", "Banking", "RBI", "Monetary Policy"]
};
