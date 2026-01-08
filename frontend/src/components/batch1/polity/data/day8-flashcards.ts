// Day 8 Flashcards - Batch 1, 5-6 PM Evening Session
// Topic: Fundamental Rights (Chapter 8) - Part 3
// Articles 31-35: Right to Constitutional Remedies, Writs, Armed Forces, Martial Law, Exceptions
// Based on M. Laxmikanth's Indian Polity

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY8_FLASHCARDS: Flashcard[] = [
    // ========== RIGHT TO CONSTITUTIONAL REMEDIES (Article 32) ==========

    {
        id: 'd8-fr-art32-1',
        front: 'What did Dr. Ambedkar say about Article 32?',
        back: 'Dr. Ambedkar called Article 32 the MOST IMPORTANT article of the Constitution:\n\n"An Article without which this constitution would be a nullity. It is the VERY SOUL of the Constitution and the VERY HEART of it."\n\nThe Supreme Court has ruled that Article 32 is a BASIC FEATURE of the Constitution - cannot be abridged even by amendment.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art32-2',
        front: 'What are the FOUR provisions of Article 32?',
        back: 'Article 32 contains FOUR provisions:\n\n1. Right to move Supreme Court for enforcement of FRs is GUARANTEED\n\n2. SC has power to issue directions, orders, WRITS (habeas corpus, mandamus, prohibition, certiorari, quo-warranto)\n\n3. Parliament can empower ANY OTHER COURT to issue writs (but not prejudice SC powers)\n\n4. Right to move SC cannot be SUSPENDED except during National Emergency (Article 359)',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art32-3',
        front: 'What is the purpose and scope of Article 32?',
        back: 'Purpose of Article 32:\n• Guaranteed, effective, expeditious, inexpensive and SUMMARY remedy for protection of FRs\n\nScope:\n• ONLY Fundamental Rights can be enforced (not statutory, customary, or other constitutional rights)\n• Violation of FR is SINE QUA NON (essential condition)\n• Cannot determine questions not involving FRs\n• Cannot challenge constitutionality of law unless it directly infringes FRs',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art32-jurisdiction',
        front: 'How does Article 32 jurisdiction compare with Article 226?',
        back: 'SC jurisdiction under Article 32 is:\n• ORIGINAL but not EXCLUSIVE\n• CONCURRENT with HC jurisdiction under Article 226\n\nAggrieved party can move:\n• Either High Court (Article 226), OR\n• Directly to Supreme Court (Article 32)\n\nSince Article 32 is itself a Fundamental Right, alternate remedy is no bar. However, SC has ruled: First approach the High Court if relief available there.',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== WRITS - TYPES AND SCOPE ==========

    {
        id: 'd8-fr-writs-intro',
        front: 'What are the FIVE writs that can be issued under Articles 32 and 226?',
        back: 'The FIVE writs:\n\n1. HABEAS CORPUS ("to have the body")\n2. MANDAMUS ("we command")\n3. PROHIBITION ("to forbid")\n4. CERTIORARI ("to be certified")\n5. QUO-WARRANTO ("by what authority")\n\nBorrowed from English law where called "PREROGATIVE WRITS" (issued in exercise of King\'s prerogative - "fountain of justice").',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-writs-difference',
        front: 'What are the THREE differences between SC writ jurisdiction (Art 32) and HC writ jurisdiction (Art 226)?',
        back: 'Differences:\n\n1. SCOPE:\n   • SC: Only for enforcement of FRs (NARROWER)\n   • HC: For FRs AND any other purpose/legal right (WIDER)\n\n2. TERRITORIAL:\n   • SC: Throughout India (WIDER)\n   • HC: Only within territorial jurisdiction (NARROWER)\n\n3. DISCRETION:\n   • SC: Cannot refuse (Article 32 is itself a FR)\n   • HC: Discretionary, may refuse (Article 226)',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-writ-habeas',
        front: 'What is the writ of HABEAS CORPUS?',
        back: 'HABEAS CORPUS ("to have the body"):\n\n• Order to produce detained person before court\n• Court examines cause and LEGALITY of detention\n• Sets person FREE if detention is ILLEGAL\n• BULWARK of individual liberty against arbitrary detention\n\nCan be issued against:\n• Public authorities AND private individuals\n\nNOT issued when:\n• Detention is lawful\n• Contempt of legislature/court\n• Detention by competent court\n• Outside court\'s jurisdiction',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-writ-mandamus',
        front: 'What is the writ of MANDAMUS?',
        back: 'MANDAMUS ("we command"):\n\n• Command to public official to PERFORM official duties he/she has failed or refused to perform\n• Can be issued against public body, corporation, inferior court, tribunal, government\n\nCANNOT be issued:\n(a) Against PRIVATE individual/body\n(b) To enforce departmental instructions without statutory force\n(c) When duty is DISCRETIONARY (not mandatory)\n(d) To enforce CONTRACTUAL obligation\n(e) Against President of India or Governors',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-writ-prohibition',
        front: 'What is the writ of PROHIBITION?',
        back: 'PROHIBITION ("to forbid"):\n\n• Issued by HIGHER court to LOWER court/tribunal\n• To PREVENT exceeding jurisdiction or usurping jurisdiction\n• Directs INACTIVITY (unlike mandamus which directs activity)\n• PREVENTIVE in nature\n\nCan be issued ONLY against:\n• Judicial authorities\n• Quasi-judicial authorities\n\nNOT available against:\n• Administrative authorities',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-writ-certiorari',
        front: 'What is the writ of CERTIORARI?',
        back: 'CERTIORARI ("to be certified/informed"):\n\n• Issued by HIGHER court to LOWER court/tribunal\n• To QUASH the order already passed\n• Grounds: Excess of jurisdiction or lack of jurisdiction\n• CURATIVE in nature (issued AFTER final order)\n\nDifference from Prohibition:\n• Prohibition: BEFORE final order (prevents)\n• Certiorari: AFTER final order (quashes)\n\nCan be issued against:\n• Judicial, quasi-judicial AND administrative authorities (SC ruling)',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-writ-quo-warranto',
        front: 'What is the writ of QUO-WARRANTO?',
        back: 'QUO-WARRANTO ("by what authority"):\n\n• Court enquires into LEGALITY of claim to PUBLIC OFFICE\n• Prevents ILLEGAL USURPATION of public office\n\nCan be issued ONLY for:\n• SUBSTANTIVE public office\n• Of PERMANENT character\n• Created by STATUTE or CONSTITUTION\n\nCANNOT be issued for:\n• Ministerial office\n• Private office\n\nUnique feature: Can be sought by ANY PUBLIC-MINDED PERSON (not just aggrieved person)',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-writs-comparison',
        front: 'Compare Prohibition and Certiorari writs.',
        back: 'PROHIBITION vs CERTIORARI:\n\nSimilarities:\n• Both are JURISDICTIONAL writs\n• Both issued by higher court to lower court/tribunal\n\nDifferences:\n\nPROHIBITION:\n• Issued BEFORE final order\n• PREVENTIVE (stops proceedings)\n• Only against judicial/quasi-judicial\n\nCERTIORARI:\n• Issued AFTER final order\n• CURATIVE (quashes order)\n• Against judicial, quasi-judicial AND administrative',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== ARTICLE 33 - ARMED FORCES ==========

    {
        id: 'd8-fr-art33-1',
        front: 'What does Article 33 provide regarding Armed Forces?',
        back: 'Article 33: Empowers PARLIAMENT to restrict or abrogate FRs of:\n\n• Members of armed forces\n• Para-military forces\n• Police forces\n• Intelligence agencies\n• Analogous forces\n\nObjective: Proper discharge of duties and maintenance of discipline.\n\nPower conferred ONLY on Parliament, NOT state legislatures.\nLaw cannot be challenged on ground of contravention of FRs.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art33-2',
        front: 'What laws have been made under Article 33?',
        back: 'Laws made under Article 33:\n\n1. Army Act, 1950\n2. Navy Act, 1950\n3. Air Force Act, 1950\n4. Police Forces (Restriction of Rights) Act, 1966\n5. Border Security Force Act\n\nRestrictions imposed on:\n• Freedom of speech\n• Right to form associations\n• Right to be members of trade unions/political parties\n• Right to communicate with press\n• Right to attend public meetings/demonstrations',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd8-fr-art33-3',
        front: 'Who are included in "members of armed forces" under Article 33?',
        back: '"Members of armed forces" includes:\n\n• Combatants, AND\n• Non-combatants such as:\n  - Barbers\n  - Carpenters\n  - Mechanics\n  - Cooks\n  - Chowkidars\n  - Bootmakers\n  - Tailors\n\nA law under Article 33 can also exclude COURT MARTIAL from writ jurisdiction of SC and HCs for enforcement of FRs.',
        category: 'fact',
        source: 'Fundamental Rights'
    },

    // ========== ARTICLE 34 - MARTIAL LAW ==========

    {
        id: 'd8-fr-art34-1',
        front: 'What does Article 34 provide regarding Martial Law?',
        back: 'Article 34: Restrictions on FRs while MARTIAL LAW is in force.\n\nProvisions:\n1. Parliament can INDEMNIFY any government servant or person for acts done for maintenance/restoration of order\n2. Parliament can VALIDATE any sentence, punishment, forfeiture or act done under martial law\n\nAct of Indemnity CANNOT be challenged on ground of contravention of FRs.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art34-2',
        front: 'What is Martial Law?',
        back: 'MARTIAL LAW (from English common law):\n\n• NOT defined in Constitution\n• Literally means "MILITARY RULE"\n• Civil administration run by military authorities\n• According to their own rules (outside ordinary law)\n• Implies SUSPENSION of ordinary law\n• Government by military tribunals\n• Different from "military law" (applicable to armed forces only)\n\nNo express provision authorizing declaration - IMPLICIT in Article 34.',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art34-3',
        front: 'When and why is Martial Law imposed?',
        back: 'When imposed:\n• War\n• Invasion\n• Insurrection\n• Rebellion\n• Riot\n• Violent resistance to law\n\nJustification:\n• To repel force by force\n• For maintaining or restoring order\n\nPowers of military:\n• Impose restrictions on civilian rights\n• Punish civilians\n• Even condemn to death\n\nSC held: Martial law does NOT ipso facto suspend writ of habeas corpus.',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd8-fr-martial-vs-emergency',
        front: 'What are the differences between Martial Law and National Emergency?',
        back: 'MARTIAL LAW vs NATIONAL EMERGENCY:\n\n| Martial Law | National Emergency |\n|-------------|--------------------|\n| Affects only FRs | Affects FRs, Centre-State relations, revenue, legislative powers, Parliament tenure |\n| Suspends government & courts | Continues government & courts |\n| For breakdown of law & order | Only for war, external aggression, armed rebellion |\n| In specific area | Whole country or part |\n| Implicit in Constitution | Explicit, detailed provision |',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== ARTICLE 35 - EFFECTING FUNDAMENTAL RIGHTS ==========

    {
        id: 'd8-fr-art35-1',
        front: 'What does Article 35 provide?',
        back: 'Article 35: Power to make certain laws vests ONLY in Parliament (not state legislatures).\n\nPurpose: UNIFORMITY throughout India.\n\nParliament alone can make laws for:\n1. Residence requirement for employment (Article 16)\n2. Empowering other courts to issue writs (Article 32)\n3. Restricting FRs of armed forces, police (Article 33)\n4. Indemnifying acts during martial law (Article 34)\n5. Punishment for untouchability (Article 17)\n6. Punishment for human trafficking & forced labour (Article 23)',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== RIGHT TO PROPERTY (Article 300A) ==========

    {
        id: 'd8-fr-property-1',
        front: 'What was the original position of Right to Property?',
        back: 'Originally, Right to Property was a FUNDAMENTAL RIGHT under Part III:\n\n• Article 19(1)(f): Right to acquire, hold and dispose of property (for citizens)\n• Article 31: Right against deprivation of property (for all persons)\n\nArticle 31 required:\n(a) Public purpose for acquisition\n(b) Payment of compensation\n\nMost CONTROVERSIAL right - led to confrontations between SC and Parliament.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-property-2',
        front: 'What is the present position of Right to Property?',
        back: 'Present Position (after 44th Amendment, 1978):\n\n• Article 19(1)(f) and Article 31 REPEALED from Part III\n• New Article 300A inserted in Part XII\n• Now a LEGAL RIGHT/CONSTITUTIONAL RIGHT (not Fundamental Right)\n• NOT part of basic structure\n\nArticle 300A: "No person shall be deprived of his property save by authority of law"',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-property-3',
        front: 'What are the implications of Right to Property as a legal right?',
        back: 'Implications of legal right (vs Fundamental Right):\n\n1. Can be curtailed/modified by ORDINARY law of Parliament (no constitutional amendment needed)\n\n2. Protects against EXECUTIVE action but NOT against LEGISLATIVE action\n\n3. Cannot directly move SC under Article 32; must move HC under Article 226\n\n4. NO guaranteed right to compensation for acquisition/requisition',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-property-4',
        front: 'In which TWO cases is compensation still guaranteed for property acquisition?',
        back: 'Compensation still GUARANTEED in:\n\n1. Acquisition of property of MINORITY EDUCATIONAL INSTITUTION (Article 30)\n   - Added by 44th Amendment, 1978\n\n2. Acquisition of land held by person under PERSONAL CULTIVATION within STATUTORY CEILING LIMITS (Article 31A)\n   - Added by 17th Amendment, 1964',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== EXCEPTIONS TO FUNDAMENTAL RIGHTS (31A, 31B, 31C) ==========

    {
        id: 'd8-fr-art31a-1',
        front: 'What does Article 31A provide?',
        back: 'Article 31A: Saving of Laws Providing for Acquisition of Estates, etc.\n\nSaves FIVE categories of laws from challenge under Articles 14 and 19:\n\n1. Acquisition of ESTATES and related rights\n2. Taking over MANAGEMENT of properties\n3. AMALGAMATION of corporations\n4. Extinguishment of rights of DIRECTORS/SHAREHOLDERS\n5. Extinguishment of MINING LEASES\n\nState law needs President\'s ASSENT for immunity.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art31b-1',
        front: 'What does Article 31B provide?',
        back: 'Article 31B: Validation of Certain Acts and Regulations.\n\nSaves acts/regulations in NINTH SCHEDULE from being challenged on ground of contravention of ANY Fundamental Right.\n\nScope WIDER than Article 31A:\n• 31A: Saves from Articles 14 & 19 only\n• 31B: Saves from ALL Fundamental Rights\n\nOriginally 13 entries (1951); now 282 entries.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art31b-2',
        front: 'What is the judicial review position for Ninth Schedule laws?',
        back: 'Judicial Review of Ninth Schedule:\n\n1. Kesavananda Bharati (1973): 9th Schedule laws open to challenge if violative of BASIC STRUCTURE\n\n2. Waman Rao (1980): Laws included AFTER April 24, 1973 valid only if they don\'t damage basic structure\n\n3. I.R. Coelho (2007):\n   • NO blanket immunity from judicial review\n   • Judicial review is BASIC FEATURE\n   • Laws after April 24, 1973 can be challenged if they violate Articles 14, 15, 19, 21 or basic structure',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art31c-1',
        front: 'What does Article 31C provide?',
        back: 'Article 31C (25th Amendment, 1971): Saving of laws giving effect to certain DPSPs.\n\nOriginal TWO provisions:\n(a) Laws implementing Article 39(b) or 39(c) not void for violating Articles 14 or 19\n(b) Law declaring it is for such policy cannot be questioned in court\n\nKesavananda Bharati (1973):\n• Provision (b) declared UNCONSTITUTIONAL (judicial review is basic feature)\n• Provision (a) held VALID',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-art31c-2',
        front: 'What happened to Article 31C after the 42nd Amendment?',
        back: '42nd Amendment (1976):\n• Extended Article 31C to protect laws implementing ANY Directive Principle (not just 39(b) or 39(c))\n\nMinerva Mills case (1980):\n• SC declared this extension UNCONSTITUTIONAL and INVALID\n• Article 31C reverted to original scope (only Articles 39(b) and 39(c))\n\nState law needs President\'s ASSENT for immunity under Article 31C.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== CRITICISM OF FUNDAMENTAL RIGHTS ==========

    {
        id: 'd8-fr-criticism-1',
        front: 'What are the main criticisms of Fundamental Rights?',
        back: 'CRITICISMS:\n\n1. EXCESSIVE LIMITATIONS - Rights given with one hand, taken with other\n2. NO SOCIAL/ECONOMIC RIGHTS - Only political rights (no right to work, social security, rest, leisure)\n3. NO CLARITY - Vague terms like "public order", "reasonable restriction"\n4. NO PERMANENCY - Can be curtailed by Parliament (e.g., property right abolished)\n5. SUSPENSION during Emergency (except Arts 20 & 21)\n6. EXPENSIVE REMEDY - Judicial process costly for common man\n7. PREVENTIVE DETENTION - Article 22 gives arbitrary powers to State\n8. NO CONSISTENT PHILOSOPHY (Ivor Jennings)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-criticism-2',
        front: 'What did critics say about Fundamental Rights?',
        back: 'Critics\' remarks:\n\n• Jaspat Roy Kapoor: "Chapter should be renamed \'Limitations on Fundamental Rights\'"\n\n• Sir Ivor Jennings:\n  - "Constitution of India is a PARADISE FOR LAWYERS"\n  - "FRs based on NO CONSISTENT PHILOSOPHY"\n  - "Thread of 19th century liberalism, relics of British opposition, desire for social reform"',
        category: 'fact',
        source: 'Fundamental Rights'
    },

    // ========== SIGNIFICANCE OF FUNDAMENTAL RIGHTS ==========

    {
        id: 'd8-fr-significance',
        front: 'What is the significance of Fundamental Rights?',
        back: 'SIGNIFICANCE of Fundamental Rights:\n\n1. BEDROCK of democratic system\n2. Material and moral PROTECTION of man\n3. BULWARK of individual liberty\n4. Facilitate RULE OF LAW\n5. PROTECT minorities and weaker sections\n6. Strengthen SECULAR fabric\n7. CHECK absoluteness of government authority\n8. Foundation of SOCIAL EQUALITY and JUSTICE\n9. Ensure DIGNITY and respect of individuals\n10. Facilitate PARTICIPATION in political/administrative process',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== RIGHTS OUTSIDE PART III ==========

    {
        id: 'd8-fr-outside-1',
        front: 'What are the important Rights Outside Part III?',
        back: 'Constitutional/Legal Rights (Non-Fundamental):\n\n1. Article 265 (Part XII): No tax without authority of law\n\n2. Article 300A (Part XII): No deprivation of property without authority of law\n\n3. Article 301 (Part XIII): Freedom of trade, commerce and intercourse throughout India\n\n4. Article 326 (Part XV): Adult suffrage for Lok Sabha and State Assembly elections',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-outside-2',
        front: 'How are Rights Outside Part III different from Fundamental Rights?',
        back: 'Difference from Fundamental Rights:\n\nBoth are JUSTICIABLE, but:\n\n• FUNDAMENTAL RIGHTS:\n  - Aggrieved can directly move SC under Article 32\n  - Article 32 is itself a FR\n\n• RIGHTS OUTSIDE PART III:\n  - Cannot use Article 32\n  - Must move HC by ordinary suit or under Article 226 (writ jurisdiction)\n  - No direct access to SC for enforcement',
        category: 'concept',
        source: 'Fundamental Rights'
    },

    // ========== SUMMARY CARDS FOR DAY 8 ==========

    {
        id: 'd8-fr-summary-1',
        front: 'Summarize the FIVE writs at a glance.',
        back: 'FIVE WRITS:\n\n1. HABEAS CORPUS: "To have the body" - against unlawful detention (vs public & private)\n\n2. MANDAMUS: "We command" - to perform public duty (NOT vs private, President, Governors)\n\n3. PROHIBITION: "To forbid" - prevent exceeding jurisdiction (only vs judicial/quasi-judicial)\n\n4. CERTIORARI: "To be certified" - quash order (vs judicial, quasi-judicial, administrative)\n\n5. QUO-WARRANTO: "By what authority" - question public office (any person can seek)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-summary-2',
        front: 'Summarize Articles 33, 34, 35 at a glance.',
        back: 'SPECIAL PROVISIONS:\n\n• ARTICLE 33: Parliament can restrict FRs of armed forces, police, intelligence agencies\n\n• ARTICLE 34: Martial Law - Parliament can indemnify and validate acts during martial law\n\n• ARTICLE 35: Only Parliament can make laws for:\n  - Residence requirement (Art 16)\n  - Empowering other courts for writs (Art 32)\n  - Restricting FRs of forces (Art 33)\n  - Martial law indemnity (Art 34)\n  - Punishment for untouchability (Art 17)\n  - Punishment for forced labour (Art 23)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-summary-3',
        front: 'Summarize Articles 31A, 31B, 31C (Exceptions) at a glance.',
        back: 'EXCEPTIONS TO FUNDAMENTAL RIGHTS:\n\n• ARTICLE 31A: Saves land reform laws from Arts 14 & 19 (5 categories)\n\n• ARTICLE 31B: Saves Ninth Schedule laws from ALL FRs (282 entries)\n\n• ARTICLE 31C: Saves laws implementing DPSPs 39(b) & 39(c) from Arts 14 & 19\n\nJudicial Review:\n• Laws after April 24, 1973 can be challenged if they violate basic structure (I.R. Coelho case)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd8-fr-amendments-summary',
        front: 'List the important Constitutional Amendments related to Right to Property.',
        back: 'Property-related Amendments:\n\n• 1st (1951): Added Articles 31A, 31B, 9th Schedule\n• 4th (1955): Modified compensation provisions\n• 7th (1956): Reorganization adjustments\n• 17th (1964): Added compensation for personal cultivation land\n• 25th (1971): Added Article 31C\n• 39th (1975): Protected certain laws from judicial review\n• 40th (1976): Added more entries to 9th Schedule\n• 42nd (1976): Extended Article 31C scope (later struck down)\n• 44th (1978): ABOLISHED Right to Property as FR',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    }
];

export default DAY8_FLASHCARDS;
