import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch37-l1-q1",
        "question": "The Consumer Protection Act, 2019 replaced which earlier legislation?",
        "options": ["Consumer Protection Act, 1956", "Consumer Protection Act, 1986", "Sale of Goods Act, 1930", "Competition Act, 2002"],
        "correctAnswerIndex": 1,
        "explanation": "The Consumer Protection Act, 2019 replaced the Consumer Protection Act, 1986, which had been the primary consumer protection law for over three decades."
    },
    {
        "id": "ch37-l1-q2",
        "question": "The Consumer Protection Act, 2019 came into force on:",
        "options": ["1st January 2020", "20th July 2020", "15th March 2020", "26th January 2020"],
        "correctAnswerIndex": 1,
        "explanation": "The Consumer Protection Act, 2019 was notified and came into force on 20th July 2020, providing enhanced consumer protection with new-age mechanisms."
    },
    {
        "id": "ch37-l1-q3",
        "question": "The three-tier consumer dispute redressal machinery under the Consumer Protection Act, 2019 consists of:",
        "options": ["Lok Adalat, District Court, High Court", "District Commission, State Commission, and National Commission (NCDRC)", "Gram Nyayalaya, Sessions Court, Supreme Court", "Consumer Forum, Arbitration Tribunal, Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The three-tier structure consists of: District Consumer Disputes Redressal Commission, State Consumer Disputes Redressal Commission, and National Consumer Disputes Redressal Commission (NCDRC)."
    },
    {
        "id": "ch37-l1-q4",
        "question": "Under the Consumer Protection Act, 2019, the District Commission has jurisdiction over complaints where the value of goods or services and compensation claimed does not exceed:",
        "options": ["Rs. 20 lakh", "Rs. 50 lakh", "Rs. 1 crore", "Rs. 5 crore"],
        "correctAnswerIndex": 2,
        "explanation": "The District Commission handles complaints where the value does not exceed Rs. 1 crore. This was increased from Rs. 20 lakh under the 1986 Act to improve access at the district level."
    },
    {
        "id": "ch37-l1-q5",
        "question": "The State Consumer Disputes Redressal Commission handles complaints where the value exceeds Rs. 1 crore but does not exceed:",
        "options": ["Rs. 5 crore", "Rs. 10 crore", "Rs. 50 crore", "Unlimited"],
        "correctAnswerIndex": 1,
        "explanation": "The State Commission handles complaints where the value exceeds Rs. 1 crore but does not exceed Rs. 10 crore."
    },
    {
        "id": "ch37-l1-q6",
        "question": "The National Consumer Disputes Redressal Commission (NCDRC) handles complaints where the value exceeds:",
        "options": ["Rs. 1 crore", "Rs. 5 crore", "Rs. 10 crore", "Rs. 50 crore"],
        "correctAnswerIndex": 2,
        "explanation": "NCDRC handles complaints where the value of goods or services paid as consideration exceeds Rs. 10 crore."
    },
    {
        "id": "ch37-l1-q7",
        "question": "Who heads the National Consumer Disputes Redressal Commission (NCDRC)?",
        "options": ["The Chief Justice of India", "A person who is or has been a Judge of the Supreme Court", "The Law Minister", "The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The NCDRC is presided over by a person who is or has been a Judge of the Supreme Court, appointed by the Central Government."
    },
    {
        "id": "ch37-l1-q8",
        "question": "The State Consumer Disputes Redressal Commission is headed by:",
        "options": ["A person who is or has been a Judge of a High Court", "The Chief Minister", "The Governor", "A retired District Judge only"],
        "correctAnswerIndex": 0,
        "explanation": "The State Commission is headed by a person who is or has been a Judge of a High Court, appointed by the State Government."
    },
    {
        "id": "ch37-l1-q9",
        "question": "The District Consumer Disputes Redressal Commission is presided over by:",
        "options": ["A retired High Court Judge", "A person who is or has been or is qualified to be a District Judge", "The District Collector", "The Chief Judicial Magistrate"],
        "correctAnswerIndex": 1,
        "explanation": "The District Commission is presided over by a person who is or has been or is qualified to be a District Judge."
    },
    {
        "id": "ch37-l1-q10",
        "question": "An appeal against the order of the District Commission lies to:",
        "options": ["The High Court", "The State Commission", "The Supreme Court", "NCDRC directly"],
        "correctAnswerIndex": 1,
        "explanation": "Appeals from the District Commission go to the State Commission. The appellate hierarchy is: District → State → National → Supreme Court."
    },
    {
        "id": "ch37-l1-q11",
        "question": "An appeal against the order of NCDRC lies to:",
        "options": ["The High Court", "No appeal is possible", "The Supreme Court within 30 days", "The President of India"],
        "correctAnswerIndex": 2,
        "explanation": "Appeals from NCDRC lie to the Supreme Court within 30 days from the date of the order."
    },
    {
        "id": "ch37-l1-q12",
        "question": "The Central Consumer Protection Authority (CCPA) was established under:",
        "options": ["Consumer Protection Act, 1986", "Consumer Protection Act, 2019", "Competition Act, 2002", "FSSAI Act, 2006"],
        "correctAnswerIndex": 1,
        "explanation": "CCPA is a new regulatory body established under the Consumer Protection Act, 2019 to regulate matters relating to violation of consumer rights, unfair trade practices, and misleading advertisements."
    },
    {
        "id": "ch37-l1-q13",
        "question": "The concept of 'product liability' was introduced in Indian consumer law by:",
        "options": ["Consumer Protection Act, 1986", "Consumer Protection Act, 2019", "Sale of Goods Act, 1930", "Indian Contract Act, 1872"],
        "correctAnswerIndex": 1,
        "explanation": "Product liability is a new concept introduced by the CPA 2019, making manufacturers, product sellers, and product service providers liable for any harm caused to consumers by defective products or deficiency in services."
    },
    {
        "id": "ch37-l1-q14",
        "question": "Under 'product liability' provisions, who can be held liable for harm caused by a defective product?",
        "options": ["Only the manufacturer", "Only the seller", "Product manufacturer, product seller, and product service provider", "Only the government"],
        "correctAnswerIndex": 2,
        "explanation": "Under Chapter VI of CPA 2019, all three — the product manufacturer, the product seller, and the product service provider — can be held liable for harm caused by defective products."
    },
    {
        "id": "ch37-l1-q15",
        "question": "The CCPA has the power to:",
        "options": ["Recall products and order refund", "Impose penalties for misleading advertisements", "File class action complaints", "All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "CCPA has wide powers including ordering recall of unsafe goods, reimbursement of price, imposing penalties for misleading advertisements, and filing class action complaints."
    },
    {
        "id": "ch37-l1-q16",
        "question": "The Consumer Protection Act, 2019 recognizes how many consumer rights?",
        "options": ["4", "6", "8", "10"],
        "correctAnswerIndex": 1,
        "explanation": "Section 2(9) recognizes 6 consumer rights: Right to safety, Right to be informed, Right to choose, Right to be heard, Right to seek redressal, and Right to consumer awareness/education."
    },
    {
        "id": "ch37-l1-q17",
        "question": "A consumer complaint under the CPA 2019 must be filed within:",
        "options": ["30 days from cause of action", "1 year from cause of action", "2 years from the date on which the cause of action arose", "5 years from purchase"],
        "correctAnswerIndex": 2,
        "explanation": "Under Section 69, a consumer complaint must be filed within 2 years from the date on which the cause of action arose. The Commission may condone delay if there is sufficient cause."
    },
    {
        "id": "ch37-l1-q18",
        "question": "The concept of 'unfair contract' was introduced for the first time in Indian consumer law by:",
        "options": ["Indian Contract Act, 1872", "Consumer Protection Act, 1986", "Consumer Protection Act, 2019", "Competition Act, 2002"],
        "correctAnswerIndex": 2,
        "explanation": "The concept of 'unfair contract' [Section 2(46)] was newly introduced by CPA 2019, addressing one-sided or exploitative contract terms imposed on consumers."
    },
    {
        "id": "ch37-l1-q19",
        "question": "The Consumer Protection Act, 2019 explicitly covers:",
        "options": ["Only offline purchases from physical stores", "Only online purchases", "Both offline and online transactions including e-commerce", "Only government procurement"],
        "correctAnswerIndex": 2,
        "explanation": "The CPA 2019 explicitly extends to all modes of transactions including offline, online, teleshopping, direct selling, and multi-level marketing."
    },
    {
        "id": "ch37-l1-q20",
        "question": "The Consumer Protection (E-Commerce) Rules, 2020 regulate:",
        "options": ["Traditional retail shops only", "E-commerce entities and their duties and liabilities towards consumers", "Stock market transactions", "Government departments only"],
        "correctAnswerIndex": 1,
        "explanation": "These rules specifically regulate e-commerce entities (both marketplace and inventory models), mandating transparency, grievance redressal mechanisms, and seller accountability."
    },
    {
        "id": "ch37-l1-q21",
        "question": "Who heads the Central Consumer Protection Authority (CCPA)?",
        "options": ["A retired Supreme Court Judge", "A Chief Commissioner appointed by the Central Government", "The Law Minister", "The Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "CCPA is headed by a Chief Commissioner and has not more than two other Commissioners, all appointed by the Central Government."
    },
    {
        "id": "ch37-l1-q22",
        "question": "The Central Consumer Protection Council is headed by:",
        "options": ["The Prime Minister", "The Minister in charge of Consumer Affairs in the Central Government", "The Chief Justice of India", "The President of India"],
        "correctAnswerIndex": 1,
        "explanation": "The Central Consumer Protection Council is an advisory body headed by the Minister in charge of Consumer Affairs in the Central Government [Section 3]."
    },
    {
        "id": "ch37-l1-q23",
        "question": "'Deficiency in service' under the Consumer Protection Act means:",
        "options": ["Providing excellent service", "Any fault, imperfection, shortcoming, or inadequacy in the quality, nature, or manner of performance of service", "Overcharging for premium quality", "Delayed billing only"],
        "correctAnswerIndex": 1,
        "explanation": "Section 2(11) defines 'deficiency' as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required to be maintained by law or under a contract."
    },
    {
        "id": "ch37-l1-q24",
        "question": "The National Consumer Helpline number in India is:",
        "options": ["100", "1800-11-4000 (toll-free)", "112", "108"],
        "correctAnswerIndex": 1,
        "explanation": "The National Consumer Helpline (NCH) number is 1800-11-4000 (toll-free), operated by the Department of Consumer Affairs to provide guidance and register consumer grievances."
    },
    {
        "id": "ch37-l1-q25",
        "question": "Under CPA 2019, complaints can be filed by:",
        "options": ["Only the individual consumer who purchased the goods", "The consumer, any recognized consumer association, or the Central/State Government", "Only through a lawyer", "Only by the manufacturer"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 35, complaints can be filed by: the consumer, any recognized consumer association, one or more consumers with similar interest (class action), or the Central/State Government."
    },
    {
        "id": "ch37-l1-q26",
        "question": "A consumer complaint can be filed:",
        "options": ["Only in person at the Commission office", "In person, by post, or through electronic mode (online filing)", "Only through a registered advocate", "Only at the national level (NCDRC)"],
        "correctAnswerIndex": 1,
        "explanation": "The CPA 2019 allows filing of complaints through multiple modes — in person, by post, or through electronic means — making the process more accessible."
    },
    {
        "id": "ch37-l1-q27",
        "question": "The Consumer Commission (District/State/National) has the powers of:",
        "options": ["A criminal court for sentencing", "A civil court for the purpose of summoning witnesses, examining under oath, and discovery and production of documents", "A military tribunal", "A legislative body"],
        "correctAnswerIndex": 1,
        "explanation": "Consumer Commissions have the powers of a civil court under the CPC for procedural matters including summoning, examining witnesses, and requiring document production."
    },
    {
        "id": "ch37-l1-q28",
        "question": "The CPA 2019 provides for mediation as an alternative dispute resolution mechanism. Mediation must be completed within:",
        "options": ["15 days", "30 days", "3 months extendable by 1 month", "6 months"],
        "correctAnswerIndex": 2,
        "explanation": "Chapter V provides for mediation. The mediation must be completed within 3 months, extendable by 1 month with the consent of the parties."
    },
    {
        "id": "ch37-l1-q29",
        "question": "Which of the following goods are NOT covered under the Consumer Protection Act, 2019?",
        "options": ["Goods purchased for personal use from an online platform", "Services availed from a hospital", "Goods purchased for commercial resale purpose", "Food items purchased from a restaurant"],
        "correctAnswerIndex": 2,
        "explanation": "Goods purchased exclusively for the purpose of resale or for commercial purpose are NOT covered, as the purchaser is not a 'consumer'. However, goods bought for self-employment/earning livelihood are covered."
    },
    {
        "id": "ch37-l1-q30",
        "question": "The maximum penalty for a 'false or misleading advertisement' for the first offence under CPA 2019 is:",
        "options": ["Rs. 1 lakh", "Rs. 10 lakh", "Rs. 50 lakh", "Rs. 1 crore"],
        "correctAnswerIndex": 1,
        "explanation": "For the first offence of false/misleading advertisement, CCPA can impose a penalty of up to Rs. 10 lakh. For subsequent offences, the penalty can extend up to Rs. 50 lakh."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch37-l2-q1",
        "question": "Consider the following innovations introduced by CPA 2019 over CPA 1986:\\n1. Product liability provisions\\n2. Central Consumer Protection Authority (CCPA)\\n3. Provisions for unfair contracts\\n4. Mediation as an ADR mechanism\\nWhich of the above were NEW introductions in CPA 2019?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "2 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four were new introductions in CPA 2019. The 1986 Act did not have product liability, CCPA, unfair contract provisions, or a structured mediation framework for consumer disputes."
    },
    {
        "id": "ch37-l2-q2",
        "question": "Assertion (A): The CPA 2019 is more relevant in the digital age than CPA 1986.\\nReason (R): CPA 2019 explicitly covers e-commerce transactions, online services, and provides for electronic filing of complaints.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct and R explains A. The explicit coverage of e-commerce, online transactions, and electronic complaint filing makes CPA 2019 significantly more relevant to the digital economy."
    },
    {
        "id": "ch37-l2-q3",
        "question": "Under product liability, a 'product manufacturer' can be held liable if:\\n1. The product contains a manufacturing defect.\\n2. The product is defective in design.\\n3. There is a deviation from manufacturing specifications.\\n4. The product does not conform to the express warranty.\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "1 only"],
        "correctAnswerIndex": 2,
        "explanation": "Under Section 84, a product manufacturer is liable for all four: manufacturing defect, design defect, deviation from specifications, and failure to conform to express warranty."
    },
    {
        "id": "ch37-l2-q4",
        "question": "The CCPA has an 'Investigation Wing' headed by a Director-General. This wing can:",
        "options": ["Only receive complaints passively", "Conduct inquiry or investigation into consumer rights violations, unfair trade practices, and false/misleading advertisements", "Pass final judicial orders binding on courts", "Arrest offenders and prosecute them"],
        "correctAnswerIndex": 1,
        "explanation": "The Investigation Wing conducts inquiries and investigations and submits findings to the CCPA for further action. It does not pass judicial orders but supports CCPA's regulatory function."
    },
    {
        "id": "ch37-l2-q5",
        "question": "Compare the pecuniary jurisdiction changes from CPA 1986 to CPA 2019:\\n1. District Commission: Rs. 20 lakh → Rs. 1 crore\\n2. State Commission: Rs. 20 lakh to Rs. 1 crore → Rs. 1 crore to Rs. 10 crore\\n3. National Commission: Above Rs. 1 crore → Above Rs. 10 crore\\nWhich of the above correctly describe the jurisdiction enhancement?",
        "options": ["1 only", "1 and 2 only", "1, 2 and 3", "2 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three correctly describe the significant enhancement in pecuniary jurisdiction under CPA 2019, designed to increase access at the district level and reduce the burden on higher commissions."
    },
    {
        "id": "ch37-l2-q6",
        "question": "Under the CPA 2019, the liability of an 'endorser' of a misleading advertisement includes:",
        "options": ["No liability at all — only the manufacturer is responsible", "The endorser can be penalized if they did not exercise due diligence to verify the truthfulness of the claims in the advertisement", "Only criminal liability with mandatory imprisonment", "Liability only if the endorser is a government official"],
        "correctAnswerIndex": 1,
        "explanation": "Section 21 makes endorsers (including celebrities) liable for misleading advertisements unless they can prove they exercised due diligence to verify that the claims were truthful."
    },
    {
        "id": "ch37-l2-q7",
        "question": "Which of the following statements about Consumer Protection Councils under CPA 2019 is correct?",
        "options": ["They are quasi-judicial bodies that hear consumer complaints", "They are advisory bodies established at Central, State, and District levels to promote and protect consumer rights", "They impose penalties on manufacturers", "They function as appellate bodies"],
        "correctAnswerIndex": 1,
        "explanation": "Consumer Protection Councils (Sections 3-8) are advisory bodies at three levels. They do not adjudicate disputes — that function belongs to Consumer Commissions."
    },
    {
        "id": "ch37-l2-q8",
        "question": "The CPA 2019 defines 'unfair trade practice' to include:\\n1. False representation about quality or standard of goods/services\\n2. Publishing any advertisement for sale of goods at a bargain price when there is no intention to offer them at that price\\n3. Offering gifts or prizes with the intention of not providing them\\nWhich of the above are included?",
        "options": ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are included in the definition of unfair trade practice under Section 2(47), which comprehensively covers deceptive, misleading, and unfair business practices."
    },
    {
        "id": "ch37-l2-q9",
        "question": "Under the CPA 2019, if mediation results in a settlement between parties:",
        "options": ["The settlement has no legal value", "The settlement is recorded by the Consumer Commission and has the effect of an order/decree of the Commission", "The settlement can be challenged in any court without restriction", "The parties must still go through a full trial"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 81, a settlement reached through mediation is recorded by the Consumer Commission and has the same effect as an order of the Commission, making it enforceable."
    },
    {
        "id": "ch37-l2-q10",
        "question": "The 'product liability action' under CPA 2019 can be brought by:",
        "options": ["Only the person who directly purchased the defective product", "Any person who has been injured or has suffered damage due to a defective product, regardless of whether they purchased it or not", "Only the government on behalf of citizens", "Only a registered consumer association"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 83, a product liability action can be brought by any person who suffers injury or property damage due to a defective product, even if they were not the purchaser (e.g., a bystander)."
    },
    {
        "id": "ch37-l2-q11",
        "question": "Under the Consumer Protection (E-Commerce) Rules, 2020, e-commerce entities must:",
        "options": ["Only display the price of goods", "Display seller details, country of origin, return/refund policy, establish a grievance redressal mechanism, and appoint a grievance officer", "Operate only within one state", "Only sell goods manufactured in India"],
        "correctAnswerIndex": 1,
        "explanation": "The E-Commerce Rules mandate comprehensive disclosures including seller details, product origin, return/refund policies, grievance officer appointment, and prohibition of manipulative practices."
    },
    {
        "id": "ch37-l2-q12",
        "question": "Match the following levels of Consumer Commission with the officer heading them:\\nA. District Commission → 1. Sitting/retired SC Judge\\nB. State Commission → 2. Person qualified to be District Judge\\nC. NCDRC → 3. Sitting/retired HC Judge\\nSelect the correct answer:",
        "options": ["A-2, B-3, C-1", "A-3, B-2, C-1", "A-1, B-2, C-3", "A-2, B-1, C-3"],
        "correctAnswerIndex": 0,
        "explanation": "District Commission → qualified District Judge (2); State Commission → HC Judge (3); NCDRC → SC Judge (1)."
    },
    {
        "id": "ch37-l2-q13",
        "question": "Under CPA 2019, the penalty for manufacture or sale of adulterated goods resulting in death is:",
        "options": ["Fine only", "Imprisonment not less than 7 years, extendable to life imprisonment, and fine not less than Rs. 10 lakh", "Community service only", "Cancellation of license only"],
        "correctAnswerIndex": 1,
        "explanation": "Section 90 prescribes severe penalties for adulteration causing death: minimum 7 years imprisonment (extendable to life imprisonment) and minimum Rs. 10 lakh fine."
    },
    {
        "id": "ch37-l2-q14",
        "question": "The concept of 'reverse burden of proof' in product liability under CPA 2019 means:",
        "options": ["The consumer must prove everything without any assistance", "In certain cases, the burden shifts to the manufacturer/seller to prove that the product was not defective at the time of delivery", "No proof is necessary from either party", "Only the court can determine liability without evidence"],
        "correctAnswerIndex": 1,
        "explanation": "In product liability cases, the manufacturer/seller may be required to demonstrate that the product was not defective when delivered, shifting the traditional burden of proof from the consumer."
    },
    {
        "id": "ch37-l2-q15",
        "question": "Statement I: CCPA can issue safety notices regarding goods or services.\\nStatement II: CCPA can order recall of unsafe goods or withdrawal of unsafe services from the market.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. CCPA has the power to issue safety notices, order product recalls, and direct withdrawal of unsafe services to protect consumer safety."
    },
    {
        "id": "ch37-l2-q16",
        "question": "A 'class action complaint' under CPA 2019 can be filed by:",
        "options": ["Only one consumer individually", "One or more consumers on behalf of numerous consumers sharing a common interest in the same complaint", "Only the government", "Only a registered NGO"],
        "correctAnswerIndex": 1,
        "explanation": "Section 35(1)(c) allows one or more consumers having the same interest to file a complaint on behalf of numerous consumers (class action), enabling collective redressal."
    },
    {
        "id": "ch37-l2-q17",
        "question": "Under CPA 2019, the Commission can direct all of the following remedies EXCEPT:",
        "options": ["Removal of defect from goods", "Replacement of defective goods", "Criminal imprisonment of the manufacturer for first-time deficiencies", "Compensation for loss or suffering caused to the consumer"],
        "correctAnswerIndex": 2,
        "explanation": "Consumer Commissions can order removal of defects, replacement, refund, compensation, and discontinuance of unfair practices. Criminal imprisonment is prescribed only for specific serious offences (like adulteration), not routine service deficiencies."
    },
    {
        "id": "ch37-l2-q18",
        "question": "The Consumer Protection (Direct Selling) Rules, 2021 require direct selling entities to:",
        "options": ["Operate without any registration", "Register with DPIIT, comply with product labeling requirements, provide a complaint mechanism, and prohibit pyramid schemes", "Sell only through physical stores", "Avoid all consumer protection obligations"],
        "correctAnswerIndex": 1,
        "explanation": "The Direct Selling Rules 2021 mandate registration with DPIIT, compliance with consumer protection standards, prohibition of pyramid/money circulation schemes, and establishment of proper complaint mechanisms."
    },
    {
        "id": "ch37-l2-q19",
        "question": "For unfair contracts, the CPA 2019 defines them as contracts where terms:",
        "options": ["Are equally favorable to both parties", "Require excessive security deposits, impose disproportionate penalties, impose unreasonable charges, or allow unilateral termination without reasonable cause", "Are negotiated transparently", "Only involve government contracts"],
        "correctAnswerIndex": 1,
        "explanation": "Section 2(46) defines unfair contracts as those with terms that are one-sided, manifestly against the consumer's interest — including excessive security deposits, disproportionate penalties, and unilateral termination clauses."
    },
    {
        "id": "ch37-l2-q20",
        "question": "Orders of the Consumer Commission are enforced:",
        "options": ["Only through persuasion", "As decrees of a civil court — non-compliance can lead to attachment and sale of property or imprisonment", "Through police action only", "They have no enforcement mechanism"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 72, orders of the Consumer Commission are executed as decrees of a civil court, meaning non-compliance can attract penalties including attachment of property, detention in civil prison, etc."
    },
    {
        "id": "ch37-l2-q21",
        "question": "The Selection Committee for appointing the President of NCDRC includes:",
        "options": ["Only the Law Minister", "The Chief Justice of India or his nominee as Chairperson, along with other prescribed members", "Only the Prime Minister", "District Judges from all states"],
        "correctAnswerIndex": 1,
        "explanation": "The Selection Committee includes the CJI or a nominee SC Judge as Chairperson, along with the Secretary of Consumer Affairs and other members prescribed under the Act."
    },
    {
        "id": "ch37-l2-q22",
        "question": "In the context of misleading advertisements, the CPA 2019 can impose on the endorser (for first offence):",
        "options": ["No penalty — endorsers are never liable", "Penalty up to Rs. 10 lakh", "Only a warning", "Mandatory imprisonment for 3 years"],
        "correctAnswerIndex": 1,
        "explanation": "For the first offence of endorsing a misleading advertisement, CCPA can impose a penalty up to Rs. 10 lakh on the endorser. For subsequent offences, it can go up to Rs. 50 lakh and a ban on endorsement for up to 3 years."
    },
    {
        "id": "ch37-l2-q23",
        "question": "Under CPA 2019, the Commission can review its own orders:",
        "options": ["Under no circumstances whatsoever", "When there is an error apparent on the face of the record", "Anytime it wishes, without any limitation", "Only if directed by the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has the power of review where there is an error apparent on the face of the record, similar to the review jurisdiction of civil courts under Order XLVII of CPC."
    },
    {
        "id": "ch37-l2-q24",
        "question": "The CPA 2019 provides for 'e-commerce' entities of two types under the E-Commerce Rules. These are:",
        "options": ["Domestic and international entities", "Marketplace e-commerce entity and inventory-based e-commerce entity", "Online and offline entities", "Government and private entities"],
        "correctAnswerIndex": 1,
        "explanation": "The Rules recognize two models: marketplace e-commerce entity (connects buyers and sellers) and inventory-based e-commerce entity (owns inventory and sells directly to consumers)."
    },
    {
        "id": "ch37-l2-q25",
        "question": "The Consumer Welfare Fund is used for:",
        "options": ["Paying judges' salaries", "Providing financial assistance for consumer protection activities, research, and education", "Military expenditure", "Highway construction"],
        "correctAnswerIndex": 1,
        "explanation": "The Consumer Welfare Fund supports consumer awareness campaigns, research, education programs, and activities aimed at promoting consumer protection."
    },
    {
        "id": "ch37-l2-q26",
        "question": "Which of the following is NOT a ground for a product liability claim under CPA 2019?",
        "options": ["Manufacturing defect", "Design defect", "Failure to provide adequate instructions or warnings", "Normal wear and tear after the stated product life"],
        "correctAnswerIndex": 3,
        "explanation": "Product liability covers manufacturing defects, design defects, and failure to warn/instruct. Normal wear and tear after the stated product life is not a ground for liability."
    },
    {
        "id": "ch37-l2-q27",
        "question": "The territorial jurisdiction of Consumer Commissions is determined by:",
        "options": ["Only the place where the goods were manufactured", "Where the opposite party resides or carries on business, where the cause of action arose, or where the complainant resides (with permission)", "Only at the NCDRC in Delhi", "Where the consumer wishes, without any restriction"],
        "correctAnswerIndex": 1,
        "explanation": "Jurisdiction is determined by the location where the opposite party resides/works, where the cause of action arose, or with permission, where the complainant resides."
    },
    {
        "id": "ch37-l2-q28",
        "question": "The concept of 'misleading advertisement' under CPA 2019 includes:",
        "options": ["Only false descriptions of products", "Any advertisement that gives false description, creates a false impression by concealment, makes false promises, or is likely to mislead consumers about the nature/quality of the product", "Only television advertisements", "Only print media advertisements"],
        "correctAnswerIndex": 1,
        "explanation": "Section 2(28) broadly defines misleading advertisements to cover false descriptions, creation of false impressions through concealment, deceptive promises, and any content likely to mislead consumers."
    },
    {
        "id": "ch37-l2-q29",
        "question": "Under CPA 2019, if a complainant can prove 'deficiency in service', the Commission can award:",
        "options": ["Only the return of consideration paid", "Compensation for any loss or injury suffered due to negligence, removal of deficiency, and/or refund of charges paid", "Only a written apology", "Only cancellation of the service provider's license"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission can award comprehensive relief including compensation, removal of deficiency, refund, and can also direct discontinuance of unfair practice."
    },
    {
        "id": "ch37-l2-q30",
        "question": "The concept of 'spurious goods' under CPA 2019 refers to:",
        "options": ["Genuine goods sold at a discount", "Goods that are falsely claimed to be a genuine product, or are imitations or counterfeits of genuine products", "Products that have expired", "Premium luxury goods"],
        "correctAnswerIndex": 1,
        "explanation": "Section 2(41) defines spurious goods as goods falsely claimed to be genuine or manufactured under a spurious brand name, covering counterfeits, imitations, and misrepresented products."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch37-l3-q1",
        "question": "Consider the following statements about the evolution of consumer protection in India:\\n1. CPA 1986 established the three-tier consumer redressal system.\\n2. CPA 2019 introduced product liability for the first time.\\n3. CPA 2019 expanded the definition of 'consumer' to include online transactions.\\n4. CPA 1986 had comprehensive provisions for e-commerce.\\nWhich of the above are correct?",
        "options": ["1, 2 and 3 only", "1 and 2 only", "All four", "1, 2, 3 and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 2, and 3 are correct. Statement 4 is incorrect — CPA 1986 did NOT have provisions for e-commerce as digital commerce barely existed when it was enacted."
    },
    {
        "id": "ch37-l3-q2",
        "question": "Assertion (A): The CPA 2019 makes celebrity endorsers liable for misleading advertisements.\\nReason (R): The Act recognizes that celebrity endorsements significantly influence consumer purchasing decisions, creating a duty of due diligence on the endorser.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct and R explains A. The rationale for endorser liability is precisely that celebrities wield significant influence over consumer choices, justifying the requirement of due diligence."
    },
    {
        "id": "ch37-l3-q3",
        "question": "Statement I: The District Consumer Commission can hear appeals from the State Commission.\\nStatement II: The NCDRC has appellate jurisdiction over orders of the State Commission.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 2,
        "explanation": "Statement I is incorrect — the District Commission cannot hear appeals from the State Commission (appeals flow upward, not downward). Statement II is correct — NCDRC hears appeals from State Commissions."
    },
    {
        "id": "ch37-l3-q4",
        "question": "Under CPA 2019, the liability of a 'product seller' arises in all of the following circumstances EXCEPT:",
        "options": ["The seller exercised substantial control over the design, testing, manufacturing, or packaging of the product", "The seller altered or modified the product resulting in the defect", "The seller made an express warranty independent of the manufacturer", "The seller merely sold a sealed product from the manufacturer without any alteration, modification, or express warranty"],
        "correctAnswerIndex": 3,
        "explanation": "Under Section 85, a product seller who merely sells a sealed product without exercising control over design/manufacturing, making alterations, or providing independent warranties is not liable. Liability attaches when the seller has active involvement."
    },
    {
        "id": "ch37-l3-q5",
        "question": "Consider the following about CCPA's powers compared to Consumer Commissions:\\n1. CCPA is a regulatory body; Consumer Commissions are quasi-judicial bodies.\\n2. CCPA can take suo motu action; Consumer Commissions act only on complaints.\\n3. CCPA deals with systemic issues (misleading ads, product recalls); Commissions deal with individual disputes.\\nWhich of the above correctly describe the distinction?",
        "options": ["1 only", "1 and 3 only", "1, 2 and 3", "2 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three correctly distinguish between CCPA (regulatory, suo motu, systemic) and Consumer Commissions (quasi-judicial, complaint-based, individual disputes). This dual structure provides comprehensive consumer protection."
    },
    {
        "id": "ch37-l3-q6",
        "question": "In the case of medical negligence complaints before consumer commissions, the Supreme Court in Indian Medical Association v. V.P. Shantha (1995) held that:",
        "options": ["Medical services are entirely excluded from consumer protection", "Medical services rendered by hospitals/doctors for consideration constitute 'service' under the Consumer Protection Act and are covered by it", "Only government hospitals are covered", "Only private hospitals above a certain budget are covered"],
        "correctAnswerIndex": 1,
        "explanation": "This landmark judgment brought medical services within the ambit of consumer protection law, holding that medical practitioners providing services for consideration are covered under 'service' in the CPA."
    },
    {
        "id": "ch37-l3-q7",
        "question": "Under the CPA 2019, if the Commission finds that a complaint has been filed frivolously or vexatiously, it can:",
        "options": ["Simply dismiss the complaint", "Dismiss the complaint and impose a penalty of up to Rs. 10,000 on the complainant for frivolous complaint and up to Rs. 25,000 for vexatious complaint", "Imprison the complainant", "Transfer the case to the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Section 76 provides for penalties for frivolous or vexatious complaints to prevent misuse of the consumer redressal mechanism."
    },
    {
        "id": "ch37-l3-q8",
        "question": "Consider the following statements about 'unfair contracts' under CPA 2019:\\n1. An unfair contract can be declared null and void by the State Commission or NCDRC.\\n2. The District Commission also has jurisdiction over unfair contract complaints.\\n3. Only government contracts can be challenged as unfair.\\nSelect the correct answer:",
        "options": ["1 only", "1 and 2 only", "1 and 3 only", "1, 2 and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is correct — only the State Commission (for goods/services up to Rs. 10 crore) and NCDRC (above Rs. 10 crore) can adjudicate unfair contract complaints. Statement 2 is incorrect — District Commission does NOT have jurisdiction. Statement 3 is incorrect — any contract with a consumer can be challenged."
    },
    {
        "id": "ch37-l3-q9",
        "question": "Assertion (A): The penalty structure under CPA 2019 for selling adulterated/spurious goods is significantly more severe than under CPA 1986.\\nReason (R): The 2019 Act introduces criminal penalties including imprisonment (up to life imprisonment for causing death) to deter serious violations.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. CPA 2019 significantly enhanced penalties — from mere compensation under the 1986 Act to criminal imprisonment including life imprisonment for fatal adulteration."
    },
    {
        "id": "ch37-l3-q10",
        "question": "The CPA 2019 recognizes the concept of 'product service provider' under product liability. This covers:",
        "options": ["Only manufacturers", "Only sellers", "A person who provides any service in respect of a product, including testing, installation, maintenance, or transportation", "Only the end consumer"],
        "correctAnswerIndex": 2,
        "explanation": "Section 2(37) defines 'product service provider' as any person who provides services related to a product, thus extending product liability beyond just manufacturers and sellers."
    },
    {
        "id": "ch37-l3-q11",
        "question": "Consider the following about the scope of 'consumer' under CPA 2019:\\n1. A person buying goods for personal use is a consumer.\\n2. A person buying goods for commercial resale is a consumer.\\n3. A person who avails telecom services is a consumer.\\n4. A person buying goods for self-employment is a consumer.\\nWhich of the above are correct?",
        "options": ["1 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 1, 3, and 4 are correct. Statement 2 is incorrect — goods bought exclusively for resale or commercial purpose (other than self-employment) are excluded from the definition of 'consumer'."
    },
    {
        "id": "ch37-l3-q12",
        "question": "In Spring Meadows Hospital v. Harjol Ahluwalia (1998), the Supreme Court held regarding consumer disputes involving medical services:",
        "options": ["Hospitals can never be held liable for medical negligence", "Hospitals are vicariously liable for the negligence of their doctors and staff, and the complainant need not be the patient — legal representatives can file complaints", "Only government hospitals can be challenged", "Medical negligence claims must go to criminal courts, not consumer commissions"],
        "correctAnswerIndex": 1,
        "explanation": "The SC expanded consumer protection in medical negligence — establishing vicarious liability of hospitals and allowing dependents/legal representatives to file complaints."
    },
    {
        "id": "ch37-l3-q13",
        "question": "Statement I: Consumer Commissions under CPA 2019 have the power to punish for contempt.\\nStatement II: Non-compliance with an order of the Consumer Commission is punishable with imprisonment or fine.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 2,
        "explanation": "Statement I is incorrect — Consumer Commissions do not have inherent contempt powers like courts. Statement II is correct — Section 72 provides penalties for non-compliance with orders."
    },
    {
        "id": "ch37-l3-q14",
        "question": "The CPA 2019 introduces 'mediation' in consumer disputes. Which of the following is correct about consumer mediation?\\n1. Mediation is mandatory before filing a complaint.\\n2. The Commission can refer a dispute to mediation with the consent of parties.\\n3. A mediated settlement has the effect of an order of the Commission.\\n4. Mediation must be completed within 3 months, extendable by 1 month.\\nSelect the correct answer:",
        "options": ["2, 3 and 4 only", "1, 2, 3 and 4", "1 and 3 only", "2 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 2, 3, and 4 are correct. Statement 1 is incorrect — mediation is not mandatory; it is referred by the Commission with the consent of both parties."
    },
    {
        "id": "ch37-l3-q15",
        "question": "In the context of e-commerce regulation under CPA 2019, which of the following practices are prohibited?\\n1. Manipulating the price of goods or services to gain unreasonable profit\\n2. Discriminating between consumers of the same class\\n3. Falsely representing or advertising any product that is not genuine\\n4. Refusing to take back defective goods sold online\\nSelect the correct answer:",
        "options": ["1 and 3 only", "1, 2 and 3 only", "1, 2, 3 and 4", "2 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four practices are prohibited under the Consumer Protection (E-Commerce) Rules, 2020. E-commerce entities must ensure fair dealing, genuine product representation, and proper return/refund mechanisms."
    },
    {
        "id": "ch37-l3-q16",
        "question": "The landmark UN Guidelines for Consumer Protection (1985, revised 2015) influenced Indian consumer protection law by:",
        "options": ["Having no impact on Indian law", "Providing the framework for consumer rights (safety, information, choice, redressal, education) that were adopted in both CPA 1986 and CPA 2019", "Replacing Indian domestic consumer law entirely", "Applying only to international trade disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The UN Guidelines significantly influenced the formulation of consumer rights in Indian law. The six consumer rights recognized in CPA 2019 are aligned with the UN framework."
    },
    {
        "id": "ch37-l3-q17",
        "question": "In the Lucknow Development Authority v. M.K. Gupta (1994) case, the Supreme Court expanded consumer protection by holding:",
        "options": ["Government agencies cannot be held liable for service deficiencies", "Government/statutory authorities providing services to citizens (like development authorities, housing boards) fall within the definition of 'service' and are covered under consumer protection law", "Only private companies are covered under consumer law", "Consumer commissions have no jurisdiction over government bodies"],
        "correctAnswerIndex": 1,
        "explanation": "This landmark case brought government agencies and statutory authorities (providing services like housing, water supply, etc.) within the ambit of consumer protection, significantly expanding the scope of the law."
    },
    {
        "id": "ch37-l3-q18",
        "question": "Consider the following about the differences between CPA 1986 and CPA 2019:\\n1. CPA 1986 had no provision for product liability; CPA 2019 has a dedicated chapter.\\n2. CPA 1986 did not cover e-commerce; CPA 2019 explicitly covers it.\\n3. Both Acts have identical pecuniary jurisdictions for consumer commissions.\\n4. CPA 2019 introduced CCPA as a new regulatory body not present in CPA 1986.\\nWhich of the above are correct?",
        "options": ["1, 2 and 4 only", "1 and 2 only", "1, 2, 3 and 4", "All four"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 2, and 4 are correct. Statement 3 is incorrect — the pecuniary jurisdictions were significantly enhanced in CPA 2019 (District: Rs. 20L to Rs. 1Cr, State: Rs. 1Cr to Rs. 10Cr)."
    },
    {
        "id": "ch37-l3-q19",
        "question": "The 'product liability' provision under CPA 2019 differs from general tort law principles because:",
        "options": ["It requires proof of negligence in all cases", "It introduces elements of strict liability — the manufacturer can be held liable for defective products even without proof of negligence in certain circumstances", "It applies only to government products", "It eliminates all manufacturer liability"],
        "correctAnswerIndex": 1,
        "explanation": "Product liability under CPA 2019 incorporates elements of strict liability, meaning in certain cases (like manufacturing defects), the manufacturer can be held liable without the consumer having to prove specific negligence."
    },
    {
        "id": "ch37-l3-q20",
        "question": "Assertion (A): The CPA 2019 is described as a comprehensive consumer protection legislation for the digital age.\\nReason (R): It addresses modern challenges including product liability, e-commerce regulation, misleading digital advertisements, unfair contracts in online transactions, and provides for electronic filing of complaints and mediation.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R comprehensively explaining A. The multiple digital-age provisions (e-commerce rules, online filing, product liability, endorser accountability) make CPA 2019 a comprehensive modern consumer law."
    },
    {
        "id": "ch37-l3-q21",
        "question": "In the matter of housing/real estate disputes, which of the following is correct about consumer commission jurisdiction after RERA 2016?\\n1. RERA authorities have concurrent jurisdiction with consumer commissions.\\n2. The Supreme Court held that consumer remedies are not barred by RERA.\\n3. RERA completely replaces consumer commission jurisdiction for real estate.\\nSelect the correct answer:",
        "options": ["1 and 2 only", "3 only", "1 only", "1, 2 and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The Supreme Court (in Imperia Structures Ltd. v. Anil Patni, 2020) held that RERA and CPA remedies are concurrent — homebuyers can approach either RERA or consumer commissions. Statement 3 is incorrect."
    },
    {
        "id": "ch37-l3-q22",
        "question": "Under the CPA 2019, a manufacturer's defense in a product liability action can include:\\n1. The product was manufactured in compliance with mandatory statutory standards.\\n2. The product was not defective at the time of delivery.\\n3. The defect arose due to the consumer's misuse of the product contrary to instructions.\\nWhich of the above can serve as valid defenses?",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three are potential defenses under Section 87: compliance with mandatory standards, non-defectiveness at delivery, and consumer misuse contrary to provided instructions/warnings."
    },
    {
        "id": "ch37-l3-q23",
        "question": "The CPA 2019's penalty structure for manufacturing/selling spurious goods follows a graded approach based on harm caused. The correct ascending order of severity is:",
        "options": ["Injury causing death > Grievous hurt > No injury", "No injury > Grievous hurt > Injury causing death", "All offences carry the same penalty", "Only fines are prescribed, no imprisonment"],
        "correctAnswerIndex": 1,
        "explanation": "Section 90 prescribes graded penalties: for spurious goods not causing injury (imprisonment up to 1 year + fine up to Rs. 3 lakh), grievous hurt (up to 7 years + up to Rs. 5 lakh), and death (minimum 7 years, up to life imprisonment + minimum Rs. 10 lakh)."
    },
    {
        "id": "ch37-l3-q24",
        "question": "Consider the following about the filing of consumer complaints in the digital age:\\n1. Complaints can be filed electronically under CPA 2019.\\n2. The CONFONET (Consumer Forum Network) connects all consumer commissions.\\n3. The e-Daakhil portal enables online filing of consumer complaints.\\nWhich of the above are correct?",
        "options": ["1 only", "1 and 3 only", "1, 2 and 3", "2 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three are correct. CPA 2019 mandates electronic filing capability, CONFONET provides case monitoring and management, and e-Daakhil is the dedicated platform for online filing of consumer complaints."
    },
    {
        "id": "ch37-l3-q25",
        "question": "In Nizam's Institute of Medical Sciences v. Prasanth S. Dhananka (2009), the Supreme Court held regarding medical negligence claims before consumer commissions:",
        "options": ["Consumer commissions cannot hear medical negligence cases at all", "Medical professionals can be held liable only for gross negligence, not for every error of judgment; the standard of care must be assessed based on the circumstances and the medical practitioner's skill level", "All medical errors automatically amount to negligence", "Only the Medical Council of India can adjudicate medical negligence"],
        "correctAnswerIndex": 1,
        "explanation": "The SC established the nuanced test for medical negligence — distinguishing between errors of judgment (not liable) and gross negligence (liable), applying the Bolam test adapted to Indian conditions."
    },
    {
        "id": "ch37-l3-q26",
        "question": "Statement I: The CPA 2019 applies to goods and services purchased through cross-border e-commerce platforms.\\nStatement II: Indian consumers can file complaints against foreign e-commerce entities that sell goods/services to Indian consumers.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. CPA 2019 and the E-Commerce Rules cover all e-commerce transactions including cross-border ones. Indian consumers can seek redressal against any entity providing goods/services to consumers in India."
    },
    {
        "id": "ch37-l3-q27",
        "question": "The establishment of Consumer Protection Councils at Central, State, and District levels serves which primary purpose?",
        "options": ["Adjudicating consumer disputes as courts of first instance", "Serving as advisory bodies to promote and protect consumer rights through policy recommendations and consumer education", "Acting as appellate bodies hearing appeals from consumer commissions", "Enforcing criminal penalties against manufacturers"],
        "correctAnswerIndex": 1,
        "explanation": "Consumer Protection Councils are purely advisory bodies — they promote consumer rights awareness, suggest policy measures, and review consumer protection mechanisms. They do NOT adjudicate disputes or act as appellate bodies."
    },
    {
        "id": "ch37-l3-q28",
        "question": "Consider the following developments in consumer protection:\\n1. Indian Medical Association v. V.P. Shantha (1995) — Medical services covered\\n2. Lucknow Development Authority v. M.K. Gupta (1994) — Government services covered\\n3. CPA 2019 — E-commerce and product liability coverage\\n4. Consumer Protection (E-Commerce) Rules (2020) — Digital marketplace regulation\\nThe correct chronological order is:",
        "options": ["2 → 1 → 3 → 4", "1 → 2 → 3 → 4", "3 → 4 → 1 → 2", "4 → 3 → 2 → 1"],
        "correctAnswerIndex": 0,
        "explanation": "Correct order: Lucknow Dev. Authority (1994) → IMA v. V.P. Shantha (1995) → CPA 2019 → E-Commerce Rules (2020). This shows the progressive expansion of consumer protection scope."
    },
    {
        "id": "ch37-l3-q29",
        "question": "Assertion (A): The Consumer Protection Act, 2019 provides for both civil and criminal remedies for consumer grievances.\\nReason (R): While consumer commissions provide civil redressal (compensation, replacement, refund), the Act also prescribes criminal penalties (imprisonment and fine) for specific serious offences like manufacture/sale of adulterated or spurious goods.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The dual remedy structure — civil redressal through commissions and criminal penalties for serious offences — provides comprehensive consumer protection."
    },
    {
        "id": "ch37-l3-q30",
        "question": "Which of the following best describes the overall impact of CPA 2019 on India's consumer protection framework?",
        "options": ["It merely renamed the 1986 Act without substantial changes", "It transformed the framework by significantly enhancing pecuniary jurisdiction, introducing product liability, establishing CCPA as a regulator, covering e-commerce, providing mediation, enabling electronic filing, and imposing endorser liability — creating a comprehensive modern consumer protection regime", "It reduced consumer rights compared to CPA 1986", "It only addressed offline consumer transactions"],
        "correctAnswerIndex": 1,
        "explanation": "CPA 2019 represents a paradigm shift — from the basic framework of CPA 1986 to a comprehensive, technology-aware, globally aligned consumer protection regime addressing the challenges of the digital economy."
    }
];

export const CHAPTER_37_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
