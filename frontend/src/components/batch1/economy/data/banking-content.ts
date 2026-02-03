export const BANKING_CONTENT = {
    title: "Banking & Monetary Policy",
    description: "RBI's Monetary Policy Framework, Banking Reforms, and Digital Currency.",
    sections: [
        {
            id: 'monetary-policy',
            title: "Monetary Policy Tools",
            content: `
### Quantitative Tools
- **Repo Rate**: Rate at which RBI lends to banks (Short term). Higher Repo = Costlier Loans = Lower Inflation.
- **Reverse Repo**: Rate at which RBI borrows from banks.
- **CRR (Cash Reserve Ratio)**: % of deposits banks must keep with RBI (Cash only, no interest).
- **SLR (Statutory Liquidity Ratio)**: % of deposits banks must keep with themselves (Gold, Cash, Gov Bonds).

### Qualitative Tools
- **Moral Suasion**: RBI persuading banks to follow guidelines.
- **Margin Requirements**: Loan-to-Value ratio adjustments.
            `
        },
        {
            id: 'npa-crisis',
            title: "NPA & Insolvency",
            content: `
### Non-Performing Assets (NPA)
- A loan becomes NPA if interest/principal is overdue for **90 days**.
- **Twin Balance Sheet Problem**: Stressed corporates + Stressed Banks.

### IBC 2016 (Insolvency and Bankruptcy Code)
- Time-bound resolution process (330 days max).
- **NCLT**: Adjudicating authority for companies.
- **DRT**: Adjudicating authority for individuals.
            `
        },
        {
            id: 'digital-banking',
            title: "Digital Banking & CBDC",
            content: `
### CBDC (e-Rupee)
- **Central Bank Digital Currency**: Legal tender in digital form issued by RBI.
- **Wholesale (e₹-W)**: For interbank settlement.
- **Retail (e₹-R)**: For common users (P2P, P2M).

### Neo-Banks
- 100% digital banks with no physical branches (e.g., razorpayx, jupiter - usually partnered with traditional banks).
            `
        }
    ]
};
