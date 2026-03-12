export interface MainsTemplate {
    id: string;
    topic: string;
    description: string;
    intro: string;
    bodyPoints: { title: string; content: string }[];
    conclusion: string;
    keywords: string[];
    judgements: string[];
    articles: string[];
}

export const MAINS_TEMPLATES: MainsTemplate[] = [
    {
        id: 'federalism',
        topic: 'Centre-State Relations (Federalism)',
        description: 'Use for questions on Federalism, Centre-State disputes, Governor\'s role (generic), or Fiscal Federalism.',
        intro: 'K.C. Wheare described the Indian Constitution as "Quasi-Federal". While Article 1 describes India as a "Union of States", the Supreme Court in the S.R. Bommai case (1994) declared Federalism as part of the Basic Structure, emphasizing that states are not mere appendages of the Centre.',
        bodyPoints: [
            { title: 'Legislative Friction', content: ' encroachment by Centre on State List subjects via Concurrent List (Article 246).' },
            { title: 'Role of Governor', content: 'Often acts as an agent of the Centre rather than a constitutional head (Article 163).' },
            { title: 'Fiscal Dependence', content: 'States\' reliance on GST compensation and devolution (Article 280 - Finance Commission).' }
        ],
        conclusion: 'To realize the vision of "Cooperative Federalism" (NITI Aayog), the recommendations of the Sarkaria and Punchhi Commissions must be implemented in letter and spirit. A strong Union requires strong States.',
        keywords: ['Quasi-Federal', 'Cooperative Federalism', 'Fiscal Federalism', 'Asymmetric Federalism', 'Unitary Bias'],
        judgements: ['S.R. Bommai Case (1994)', 'Shamsher Singh Case (1974)'],
        articles: ['Article 1', 'Article 246', 'Article 263 (Inter-State Council)', 'Article 280']
    },
    {
        id: 'secularism',
        topic: 'Secularism (Indian vs Western)',
        description: 'Use for questions on Uniform Civil Code (UCC), Religious Freedom, or Communalism.',
        intro: 'Unlike the Western concept of "Negative Secularism" (strict separation of Church and State), Indian Secularism is "Positive" (Sarva Dharma Sambhav). It implies that the State has no religion of its own but treats all religions with equal respect (Article 25-28).',
        bodyPoints: [
            { title: 'Principled Distance', content: 'The State interferes only to removie social evils (e.g., Triple Talaq, Sabarimala) - Rajeev Bhargava\'s theory.' },
            { title: 'Constitutional Mandate', content: 'Preamble (42nd Amendment) and Fundamental Rights (Art 25-30) protect religious freedom alongside minority rights.' },
            { title: 'Challenges', content: 'Vote bank politics and communal violence threaten the secular fabric.' }
        ],
        conclusion: 'Indian Secularism is not a passive attitude but an active commitment to pluralism. As held in the S.R. Bommai case, Secularism is a Basic Feature of the Constitution that forms the bedrock of India\'s unity in diversity.',
        keywords: ['Principled Distance', 'Sarva Dharma Sambhav', 'Positive Secularism', 'Minority Rights', 'Unified Diversity'],
        judgements: ['S.R. Bommai Case (1994)', 'Sabarimala Case (2018)'],
        articles: ['Article 25', 'Article 26', 'Article 44 (UCC)', 'Article 30']
    },
    {
        id: 'basic-structure',
        topic: 'Basic Structure Doctrine',
        description: 'Use for questions on Judicial Review, NJAC, or Constitutional Amendments.',
        intro: 'The Basic Structure Doctrine, evolved by the Supreme Court in the landmark Kesavananda Bharati case (1973), acts as a check on the amending power of the Parliament (Article 368). It limits the majoritarian power to alter the core identity of the Constitution.',
        bodyPoints: [
            { title: 'Judicial Innovation', content: 'It is a judicial invention to protect the Constitution from authoritarian alterations (Minerva Mills case).' },
            { title: 'Fluid Definitions', content: 'The SC has deliberately kept it open-ended, adding features like Judicial Review, Rule of Law, and Federalism over time.' },
            { title: 'Balance of Power', content: 'It maintains the delicate balance between Parliamentary Sovereignty and Judicial Supremacy.' }
        ],
        conclusion: 'The Basic Structure Doctrine serves as the "Pole Star" of interpretation. It ensures that while the Constitution is a living document, its soul remains immortal and inviolable.',
        keywords: ['Constitutional Identity', 'Limited Amending Power', 'Judicial Review', 'Living Document', 'Constitutional Mortality'],
        judgements: ['Kesavananda Bharati (1973)', 'Minerva Mills (1980)', 'I.R. Coelho Case (2007)'],
        articles: ['Article 13', 'Article 368']
    },
    {
        id: 'governor',
        topic: 'Role of Governor (Office of Profit vs Dignity)',
        description: 'Use for questions on Governor\'s discretionary powers, President\'s Rule, or hung assemblies.',
        intro: 'The Governor is envisaged as the "Linchpin" of the constitutional apparatus in the State (Article 153). The Supreme Court continues to remind that it is a High Constitutional Office and not an employment under the Central Government (Hargovind Pant case).',
        bodyPoints: [
            { title: 'Discretionary Abuse', content: 'Misuse of Article 356 (President\'s Rule) and Article 200 (Reservation of Bills).' },
            { title: 'Appointment Issues', content: 'Lack of neutral criteria and security of tenure leads to politicization.' },
            { title: 'Federal Friction', content: 'Acting as an agent of the Centre in Opposition-ruled states.' }
        ],
        conclusion: 'To restore dignity to the office, the recommendations of the Punchhi Commission (fixed tenure, impeachment process) must be considered. The Governor should be a "Constitutional Sentinel", not a "Political Agent".',
        keywords: ['Constitutional Sentinel', 'Linchpin', 'Dual Role', 'Discretionary Power', 'Federal Bridge'],
        judgements: ['Nabam Rebia Case (2016)', 'B.P. Singhal Case (2010)'],
        articles: ['Article 153', 'Article 163', 'Article 200', 'Article 356']
    },
    {
        id: 'judicial-activism',
        topic: 'Judicial Activism vs Overreach',
        description: 'Use for questions on PIL, Executive inaction, or Separation of Powers.',
        intro: 'Judicial Activism refers to the proactive role played by the judiciary in protecting the rights of citizens and promoting justice (Article 142). However, the line between "Activism" (desirable) and "Overreach" (intrusion) is thin.',
        bodyPoints: [
            { title: 'Vacuum Filling', content: 'The Judiciary often steps in due to Executive inaction or Legislative policy paralysis (e.g., Vishaka Guidelines).' },
            { title: 'Separation of Powers', content: 'Overreach violates the Basic Structure doctrine of Separation of Powers (Article 50).' },
            { title: 'Accountability', content: 'Unelected judges taking over policy functions lacks democratic accountability.' }
        ],
        conclusion: 'While Judicial Activism is a necessary medicine for a failing system, it should not become a daily diet. As Justice J.S. Verma noted, "Judicial Activism must be practiced with Judicial Restraint" to preserve the constitutional balance.',
        keywords: ['Separation of Powers', 'Checks and Balances', 'Complete Justice', 'Policy Paralysis', 'Typhoon of PILs'],
        judgements: ['Vishaka vs State of Rajasthan', 'Bandhua Mukti Morcha Case'],
        articles: ['Article 32', 'Article 142', 'Article 50', 'Article 21']
    }
];
