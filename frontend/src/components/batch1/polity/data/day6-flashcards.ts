// Day 6 Flashcards - Batch 1, 5-6 PM Evening Session
// Topic: Fundamental Rights (Chapter 8) - Part 1
// Articles 12-21: Introduction, Right to Equality, Right to Freedom (Part 1)
// Based on M. Laxmikanth's Indian Polity

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY6_FLASHCARDS: Flashcard[] = [
    // ========== INTRODUCTION & FEATURES ==========

    {
        id: 'd6-fr-intro-1',
        front: 'Where are the Fundamental Rights enshrined in the Indian Constitution?',
        back: 'Part III of the Constitution (Articles 12 to 35).\n\nThe framers derived inspiration from the Constitution of USA (Bill of Rights). Part III is described as the Magna Carta of India.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-intro-2',
        front: 'What are the SIX Fundamental Rights currently guaranteed by the Constitution?',
        back: '1. Right to Equality (Articles 14-18)\n2. Right to Freedom (Articles 19-22)\n3. Right against Exploitation (Articles 23-24)\n4. Right to Freedom of Religion (Articles 25-28)\n5. Cultural and Educational Rights (Articles 29-30)\n6. Right to Constitutional Remedies (Article 32)\n\nNote: Right to Property (Article 31) was deleted by 44th Amendment Act, 1978.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-intro-3',
        front: 'What happened to the Right to Property?',
        back: 'The Right to Property was deleted from the list of Fundamental Rights by the 44th Amendment Act, 1978.\n\nIt is now a legal right under Article 300-A in Part XII of the Constitution.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-features-1',
        front: 'What are the key features of Fundamental Rights?',
        back: '1. Some available only to citizens, others to all persons\n2. Not absolute but qualified - State can impose reasonable restrictions\n3. Available against arbitrary action of the State\n4. Some negative (limit State), some positive (confer privileges)\n5. Justiciable - courts can enforce them\n6. Defended by Supreme Court\n7. Can be amended but not affecting \'basic structure\'\n8. Can be suspended during National Emergency (except Articles 20 & 21)',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-features-2',
        front: 'Which Fundamental Rights can NOT be suspended even during a National Emergency?',
        back: 'Rights guaranteed by Articles 20 and 21:\n\n• Article 20: Protection in respect of conviction for offences\n• Article 21: Protection of life and personal liberty\n\nThese are non-suspendable under any circumstances.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-features-3',
        front: 'When are the six rights under Article 19 automatically suspended?',
        back: 'Only when emergency is declared on grounds of:\n• War, OR\n• External aggression (External Emergency)\n\nThey are NOT automatically suspended on the ground of armed rebellion (Internal Emergency).',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== FUNDAMENTAL RIGHTS OF FOREIGNERS ==========

    {
        id: 'd6-fr-foreigners-1',
        front: 'Which Fundamental Rights are available ONLY to citizens and NOT to foreigners?',
        back: '1. Prohibition of discrimination (Article 15)\n2. Equality of opportunity in public employment (Article 16)\n3. Six freedoms under Article 19\n4. Protection of language, script and culture of minorities (Article 29)\n5. Right of minorities to establish and administer educational institutions (Article 30)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-foreigners-2',
        front: 'Which Fundamental Rights are available to BOTH citizens and foreigners?',
        back: '1. Equality before law (Article 14)\n2. Protection in conviction for offences (Article 20)\n3. Protection of life and personal liberty (Article 21)\n4. Right to elementary education (Article 21A)\n5. Protection against arrest and detention (Article 22)\n6. Prohibition of human trafficking and forced labour (Article 23)\n7. Prohibition of child labour (Article 24)\n8. Freedom of religion (Articles 25, 26, 27, 28)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== DEFINITION OF STATE (Article 12) ==========

    {
        id: 'd6-fr-state-1',
        front: 'What is the definition of "State" under Article 12?',
        back: 'The State includes:\n1. Government and Parliament of India (Union executive & legislature)\n2. Government and Legislature of States (State executive & legislature)\n3. All local authorities (municipalities, panchayats, district boards, etc.)\n4. All other authorities (statutory or non-statutory like LIC, ONGC, SAIL, etc.)\n\nEven private bodies working as instruments of the State fall within this definition.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== ARTICLE 13 - JUDICIAL REVIEW ==========

    {
        id: 'd6-fr-art13-1',
        front: 'What does Article 13 declare?',
        back: 'Article 13 declares that all laws inconsistent with or in derogation of any Fundamental Rights shall be VOID.\n\nIt provides for the doctrine of judicial review, conferred on:\n• Supreme Court (Article 32)\n• High Courts (Article 226)',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art13-2',
        front: 'What does the term "law" include under Article 13?',
        back: '1. Permanent laws enacted by Parliament or State Legislatures\n2. Temporary laws like ordinances (President/Governor)\n3. Statutory instruments (delegated legislation) - orders, bye-laws, rules, regulations, notifications\n4. Non-legislative sources - customs or usage having force of law\n\nNote: Constitutional amendment is NOT a law under Article 13.',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd6-fr-art13-3',
        front: 'Can a Constitutional Amendment be challenged under Article 13?',
        back: 'Article 13 declares that a constitutional amendment is NOT a law.\n\nHOWEVER, in Kesavananda Bharati case (1973), the Supreme Court held that a Constitutional Amendment CAN be challenged if it violates a fundamental right that forms part of the \'basic structure\' of the Constitution.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== RIGHT TO EQUALITY (Articles 14-18) ==========

    {
        id: 'd6-fr-art14-1',
        front: 'What does Article 14 guarantee?',
        back: 'Article 14: Equality before law AND Equal protection of laws within India.\n\n• "Equality before law" - British origin (negative concept)\n  - Absence of special privileges\n  - Equal subjection to ordinary law\n  - No person above the law\n\n• "Equal protection of laws" - American origin (positive concept)\n  - Equal treatment under equal circumstances\n  - Like should be treated alike',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art14-2',
        front: 'What is the "Rule of Law" as propounded by A.V. Dicey?',
        back: 'A.V. Dicey\'s Rule of Law has THREE elements:\n\n1. Absence of arbitrary power - no punishment except for breach of law\n2. Equality before the law - equal subjection of all citizens to ordinary law\n3. Primacy of rights of the individual - Constitution results from individual rights defined by courts\n\nIn India, elements 1 & 2 apply, but NOT element 3 (Constitution is the source of rights in India).',
        category: 'concept',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art14-3',
        front: 'What is the Supreme Court\'s ruling on "Rule of Law"?',
        back: 'The Supreme Court held that "Rule of Law" as embodied in Article 14 is a \'BASIC FEATURE\' of the Constitution.\n\nHence, it CANNOT be destroyed even by a Constitutional Amendment.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art14-exceptions',
        front: 'What are the EXCEPTIONS to equality before law (Article 14)?',
        back: '1. President & Governor immunities (Article 361)\n2. Parliamentary proceedings immunity - newspapers/radio/TV (Article 361-A)\n3. MPs immunity for statements in Parliament (Article 105)\n4. MLAs immunity for statements in Legislature (Article 194)\n5. Article 31-C - laws implementing certain DPSPs\n6. Foreign sovereigns, ambassadors, diplomats\n7. UNO and its agencies',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art361-1',
        front: 'What immunities do the President and Governor enjoy under Article 361?',
        back: '1. Not answerable to any court for exercise of powers/duties\n2. No criminal proceedings during term of office\n3. No process for arrest/imprisonment during term\n4. No civil proceedings for personal acts without 2 months\' notice\n\nThese immunities apply during the term of office.',
        category: 'article',
        source: 'Fundamental Rights'
    },

    // ========== ARTICLE 15 - PROHIBITION OF DISCRIMINATION ==========

    {
        id: 'd6-fr-art15-1',
        front: 'What does Article 15 prohibit?',
        back: 'Article 15: The State shall NOT discriminate against any citizen on grounds ONLY of:\n• Religion\n• Race\n• Caste\n• Sex\n• Place of birth\n\nThe word "only" means discrimination on other grounds is NOT prohibited.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art15-2',
        front: 'What does Article 15(2) provide?',
        back: 'Article 15(2): No citizen shall be subjected to any disability, liability, restriction or condition regarding:\n(a) Access to shops, public restaurants, hotels, places of public entertainment\n(b) Use of wells, tanks, bathing ghats, roads, places of public resort\n\nIMPORTANT: This applies to BOTH State and private individuals (unlike Art 15(1) which applies only to State).',
        category: 'article',
        source: 'Fundamental Rights'
    },
    {
        id: 'd6-fr-art15-exceptions',
        front: 'What are the FOUR exceptions to Article 15 (non-discrimination)?',
        back: '1. Special provisions for women and children (Article 15(3))\n2. Special provisions for socially and educationally backward classes, SCs, STs (Article 15(4)) - added by 1st Amendment, 1951\n3. Special provisions for backward classes, SCs, STs in educational institutions including private (Article 15(5)) - added by 93rd Amendment, 2005\n4. Special provisions for Economically Weaker Sections (EWS) - up to 10% reservation (Article 15(6)) - added by 103rd Amendment, 2019',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-obc-education',
        front: 'What is the significance of the 93rd Amendment Act of 2005?',
        back: '93rd Amendment Act, 2005:\n• Added Article 15(5)\n• Allows special provisions for socially and educationally backward classes, SCs, STs regarding admission to educational institutions\n• Includes PRIVATE educational institutions (aided or unaided)\n• EXCLUDES minority educational institutions\n\nLed to Central Educational Institutions (Reservation in Admission) Act, 2006 providing 27% quota for OBCs in central institutions.',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd6-fr-creamy-layer',
        front: 'What is the "Creamy Layer" concept for OBCs?',
        back: 'Creamy Layer = Advanced sections among OBCs who are EXCLUDED from reservation benefits.\n\nIncludes children of:\n1. Constitutional post holders (President, VP, Judges, etc.)\n2. Group A/B Officers in government/PSUs\n3. Colonels and above in armed forces\n4. Professionals (doctors, lawyers, engineers, etc.)\n5. Persons in trade, business, industry\n6. Large agricultural landholders\n7. Persons with gross annual income > ₹8 lakh\n\nThe ceiling was ₹1 lakh in 1993, revised to ₹8 lakh in 2017.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-ews-reservation',
        front: 'What is the EWS reservation under the 103rd Amendment Act, 2019?',
        back: '103rd Amendment Act, 2019:\n• Added Articles 15(6) and 16(6)\n• Provides up to 10% reservation for Economically Weaker Sections (EWS)\n• Applies to educational institutions AND public employment\n• IN ADDITION to existing reservations\n\nEWS Eligibility:\n• Family income below ₹8 lakh per year\n• Not covered under SC, ST, OBC reservations\n• Land/property limits apply',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== ARTICLE 16 - EQUALITY OF OPPORTUNITY ==========

    {
        id: 'd6-fr-art16-1',
        front: 'What does Article 16 guarantee?',
        back: 'Article 16: Equality of opportunity for all citizens in matters of employment or appointment to any office under the State.\n\nNo citizen can be discriminated against on grounds ONLY of:\n• Religion\n• Race\n• Caste\n• Sex\n• Descent\n• Place of birth\n• Residence',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art16-exceptions',
        front: 'What are the exceptions to Article 16 (equality in public employment)?',
        back: '1. Parliament can prescribe RESIDENCE requirement for certain jobs (Article 16(3))\n2. Reservation for backward classes not adequately represented (Article 16(4))\n3. Reservation in PROMOTIONS for SCs/STs with consequential seniority (Article 16(4A)) - 77th & 85th Amendments\n4. Carry-forward of unfilled reserved vacancies (Article 16(4B)) - 81st Amendment, 2000\n5. Religious qualification for religious institutions (Article 16(5))\n6. Up to 10% reservation for EWS (Article 16(6)) - 103rd Amendment, 2019',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-mandal-1',
        front: 'What was the Mandal Commission?',
        back: 'Mandal Commission (Second Backward Classes Commission):\n• Set up in 1979 by Morarji Desai Government\n• Chairman: B.P. Mandal (MP)\n• Under Article 340 of the Constitution\n• Submitted report in 1980\n• Identified 3,743 castes as socially and educationally backward (52% of population)\n• Recommended 27% reservation for OBCs in government jobs\n\nImplemented in 1990 by V.P. Singh Government.',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-mandal-2',
        front: 'What were the key rulings in the Indra Sawhney case (1992)?',
        back: 'Indra Sawhney case (1992) - The Mandal Case:\n\n1. Upheld 27% OBC reservation with conditions\n2. Creamy layer among OBCs must be EXCLUDED\n3. NO reservation in promotions - only initial appointments\n4. Total reservation should NOT exceed 50%\n5. Carry-forward rule valid but within 50% limit\n6. Permanent statutory body for OBC complaints (led to NCBC)\n7. No relaxation in qualifying marks for promotion reservations',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-mandal-amendments',
        front: 'Which Constitutional Amendments nullified Supreme Court rulings on reservations?',
        back: '1. 77th Amendment (1995): Reservation in promotions for SCs/STs (Article 16(4A))\n2. 81st Amendment (2000): Carry-forward of backlog vacancies (Article 16(4B))\n3. 82nd Amendment (2000): Relaxation in qualifying marks for SCs/STs in promotions (Article 335)\n4. 85th Amendment (2001): Consequential seniority in promotion reservation\n5. 76th Amendment (1994): Placed Tamil Nadu Reservations Act (69% reservation) in 9th Schedule',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== ARTICLE 17 - ABOLITION OF UNTOUCHABILITY ==========

    {
        id: 'd6-fr-art17-1',
        front: 'What does Article 17 provide?',
        back: 'Article 17: Abolishes "untouchability" and forbids its practice in any form.\n\nEnforcement of any disability arising out of untouchability is an OFFENCE punishable by law.\n\nImplemented through Protection of Civil Rights Act, 1955 (earlier called Untouchability (Offences) Act, 1955).',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art17-2',
        front: 'What is the scope of "untouchability" under Article 17?',
        back: 'The term is NOT defined in Constitution or the Act.\n\nAs per Mysore High Court:\n• Not untouchability in literal/grammatical sense\n• Refers to the PRACTICE as developed historically in the country\n• Social disabilities imposed on certain classes by reason of birth in certain castes\n• Does NOT cover social boycott of individuals or exclusion from religious services\n\nArticle 17 is available against PRIVATE individuals (not just State).',
        category: 'concept',
        source: 'Fundamental Rights'
    },

    // ========== ARTICLE 18 - ABOLITION OF TITLES ==========

    {
        id: 'd6-fr-art18-1',
        front: 'What does Article 18 provide regarding titles?',
        back: 'Article 18 - Abolition of Titles:\n\n1. State cannot confer titles (except military or academic)\n2. Indian citizen cannot accept title from foreign state\n3. Foreigner holding office under State needs President\'s consent for foreign title\n4. No one holding office under State can accept present/emolument from foreign state without President\'s consent\n\nBans hereditary titles like Maharaja, Raj Bahadur, Rai Saheb, Dewan Bahadur, etc.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art18-2',
        front: 'Are National Awards like Bharat Ratna and Padma Awards valid under Article 18?',
        back: 'In Balaji Raghavan case (1995), the Supreme Court upheld the constitutional validity of National Awards.\n\nRulings:\n• Bharat Ratna, Padma Vibhushan, Padma Bhushan, Padma Sri are NOT "titles" under Article 18\n• Article 18 prohibits only HEREDITARY titles of nobility\n• They should NOT be used as suffixes or prefixes to names\n• If used as suffix/prefix, awards should be forfeited\n\nAwards instituted in 1954, discontinued 1977-1980, revived by Indira Gandhi.',
        category: 'fact',
        source: 'Fundamental Rights'
    },

    // ========== RIGHT TO FREEDOM - ARTICLE 19 ==========

    {
        id: 'd6-fr-art19-1',
        front: 'What are the SIX freedoms guaranteed under Article 19?',
        back: 'Article 19 guarantees to all CITIZENS:\n\n1. Freedom of speech and expression\n2. Freedom to assemble peaceably and without arms\n3. Freedom to form associations or unions or co-operative societies\n4. Freedom to move freely throughout India\n5. Freedom to reside and settle in any part of India\n6. Freedom to practice any profession or carry on any occupation, trade or business\n\nOriginally 7 rights - Right to property was deleted by 44th Amendment, 1978.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art19-speech',
        front: 'What does Freedom of Speech and Expression include?',
        back: 'Freedom of speech and expression includes:\n1. Right to propagate views (circulation)\n2. Freedom of the press\n3. Freedom of commercial advertisements\n4. Right against tapping of telephonic conversation\n5. Right to telecast (no govt monopoly)\n6. Right against bundh by political parties\n7. Right to know about government activities\n8. Freedom of silence\n9. Right against pre-censorship\n10. Right to demonstration/picketing (NOT strike)\n11. Right to fly national flag\n12. Right to know antecedents of election candidates\n13. Right to access internet',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art19-restrictions',
        front: 'What are the grounds for restricting Freedom of Speech and Expression?',
        back: 'Article 19(2) - Restrictions on speech and expression:\n\n1. Sovereignty and integrity of India (16th Amendment, 1963)\n2. Security of the State\n3. Friendly relations with foreign states (1st Amendment, 1951)\n4. Public order (1st Amendment, 1951)\n5. Decency or morality\n6. Contempt of court\n7. Defamation\n8. Incitement to an offence (1st Amendment, 1951)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art19-assembly',
        front: 'What does Freedom of Assembly include and its restrictions?',
        back: 'Freedom of Assembly (Article 19(1)(b)):\n• Right to hold public meetings, demonstrations, processions\n• Must be PEACEFUL and WITHOUT ARMS\n• On public land only\n• Does NOT include right to strike\n\nRestrictions (Article 19(3)):\n1. Sovereignty and integrity of India\n2. Public order\n\nSection 144 CrPC allows magistrate to restrain assembly if risk of public disturbance.',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd6-fr-art19-association',
        front: 'What does Freedom of Association include?',
        back: 'Freedom of Association (Article 19(1)(c)):\n• Right to form political parties, companies, societies, clubs, trade unions\n• Right to START and CONTINUE association\n• Includes NEGATIVE right - not to form or join\n\nRestrictions (Article 19(4)):\n1. Sovereignty and integrity of India\n2. Public order\n3. Morality\n\nNOTE: Right to RECOGNITION of association is NOT a fundamental right.\nTrade unions have NO guaranteed right to strike or collective bargaining.',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd6-fr-art19-movement',
        front: 'What are the two dimensions of Freedom of Movement?',
        back: 'Two dimensions:\n1. Internal (Article 19) - Right to move inside the country\n2. External (Article 21) - Right to move out of country and return\n\nArticle 19(1)(d) protects ONLY internal movement.\n\nRestrictions (Article 19(5)):\n1. Interests of general public\n2. Protection of interests of Scheduled Tribes\n\nEntry to tribal areas can be restricted to protect their culture, customs, and properties.',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd6-fr-art19-profession',
        front: 'What does Freedom of Profession/Trade include and its restrictions?',
        back: 'Freedom of Profession (Article 19(1)(g)):\n• Right to practice any profession\n• Right to carry on any occupation, trade or business\n• Covers all means of earning livelihood\n\nRestrictions (Article 19(6)):\n1. Interests of general public\n2. Professional/technical qualifications requirement\n3. State monopoly in trade/business/industry\n\nDoes NOT include immoral professions (trafficking) or dangerous activities (harmful drugs).',
        category: 'fact',
        source: 'Fundamental Rights'
    },
    {
        id: 'd6-fr-anuradha-bhasin',
        front: 'What did the Supreme Court rule in the Anuradha Bhasin case (2020)?',
        back: 'Anuradha Bhasin case (2020):\n\n• Freedom to practice profession/trade/business over INTERNET enjoys constitutional protection under Article 19(1)(g)\n• Restrictions must conform to Article 19(6) including test of proportionality\n• Indefinite suspension of internet services is IMPERMISSIBLE\n• Must follow Temporary Suspension of Telecom Services (Public Emergency or Public Safety) Rules, 2017',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== ARTICLE 20 - PROTECTION AGAINST CONVICTION ==========

    {
        id: 'd6-fr-art20-1',
        front: 'What are the THREE protections under Article 20?',
        back: 'Article 20 - Protection against arbitrary punishment:\n\n1. No ex-post-facto law - Cannot be convicted except for violation of law in force at time of act; no greater penalty than prescribed at time of act\n\n2. No double jeopardy - Cannot be prosecuted and punished for same offence more than once\n\n3. No self-incrimination - Accused cannot be compelled to be witness against himself\n\nAvailable to citizens, foreigners, and legal persons.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art20-2',
        front: 'What are the limitations of protection under Article 20?',
        back: 'Limitations:\n\n1. Ex-post-facto law:\n   • Applies only to CRIMINAL laws (not civil/tax laws)\n   • Prohibits only conviction/sentence, not trial\n   • Not available for preventive detention\n\n2. Double jeopardy:\n   • Available only before courts/judicial tribunals\n   • NOT before departmental/administrative authorities\n\n3. Self-incrimination:\n   • Extends to oral and documentary evidence\n   • Does NOT extend to thumb impression, blood specimen, body exhibition\n   • Only for criminal proceedings',
        category: 'fact',
        source: 'Fundamental Rights'
    },

    // ========== ARTICLE 21 - RIGHT TO LIFE ==========

    {
        id: 'd6-fr-art21-1',
        front: 'What does Article 21 guarantee?',
        back: 'Article 21: No person shall be deprived of life or personal liberty except according to PROCEDURE ESTABLISHED BY LAW.\n\nAvailable to both citizens and non-citizens.\n\n"Procedure established by law" is different from "due process of law" (American concept).',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art21-gopalan',
        front: 'What was the Supreme Court\'s interpretation of Article 21 in the Gopalan case (1950)?',
        back: 'Gopalan case (1950) - NARROW interpretation:\n\n• Protection under Article 21 available only against ARBITRARY EXECUTIVE action\n• NOT against arbitrary LEGISLATIVE action\n• State can deprive life/liberty based on ANY law\n• Validity of law cannot be questioned as unreasonable, unfair or unjust\n• "Personal liberty" means only liberty relating to person or body\n\nThis interpretation was OVERRULED in Maneka case (1978).',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art21-maneka',
        front: 'What was the Supreme Court\'s interpretation of Article 21 in the Maneka case (1978)?',
        back: 'Maneka case (1978) - WIDER interpretation:\n\n• Overruled Gopalan case\n• Law must prescribe procedure that is REASONABLE, FAIR and JUST\n• Procedure must conform to "natural justice" principles\n• Introduced American "DUE PROCESS OF LAW" concept\n• Protection against BOTH arbitrary executive AND legislative action\n• "Right to life" includes right to live with HUMAN DIGNITY\n• "Personal liberty" has widest amplitude',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art21-rights',
        front: 'What rights have been declared as part of Article 21 (Right to Life)?',
        back: 'Rights under Article 21 include:\n1. Right to live with human dignity\n2. Right to decent environment (pollution-free)\n3. Right to livelihood\n4. Right to privacy (K.S. Puttaswamy, 2017)\n5. Right to shelter\n6. Right to health\n7. Right to free education up to 14 years\n8. Right to free legal aid\n9. Right to speedy trial\n10. Right to travel abroad\n11. Right against bonded labour\n12. Right to die with dignity - passive euthanasia (Common Cause, 2018)\n13. Right to access internet\n14. Right against climate change effects',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art21-important-cases',
        front: 'What are the landmark cases expanding Article 21?',
        back: 'Landmark cases:\n\n1. Satwant Singh (1967) - Right to travel abroad\n2. M.H. Hoskot (1978) - Right to free legal aid\n3. Hussainara Khatoon (1979) - Right to speedy trial\n4. Francis Coralie Mullin (1981) - Right to live with dignity\n5. Olga Tellis (1985) - Right to livelihood\n6. Parmanand Katara (1989) - Right to emergency medical aid\n7. Shantistar Builders (1990) - Right to shelter\n8. K.S. Puttaswamy (2017) - Right to privacy\n9. Common Cause (2018) - Right to die with dignity',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },

    // ========== ARTICLE 21A - RIGHT TO EDUCATION ==========

    {
        id: 'd6-fr-art21a-1',
        front: 'What does Article 21A provide?',
        back: 'Article 21A: State shall provide FREE and COMPULSORY education to all children of age 6 to 14 years.\n\nAdded by 86th Constitutional Amendment Act, 2002.\n\nMakes only ELEMENTARY education a Fundamental Right (not higher or professional education).\n\nCame into force on April 1, 2010 along with RTE Act, 2009.',
        category: 'article',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-art21a-2',
        front: 'What changes did the 86th Amendment Act (2002) make?',
        back: '86th Amendment Act, 2002:\n\n1. Added Article 21A - Right to education for ages 6-14\n\n2. Changed Article 45 (DPSP) - Now reads: \'State shall endeavour to provide early childhood care and education for all children until they complete age of 6 years\'\n\n3. Added Fundamental Duty under Article 51A(k) - Duty of every citizen to provide opportunities for education to child/ward between 6-14 years',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-unnikrishnan',
        front: 'What was held in the Unni Krishnan case (1993)?',
        back: 'Unni Krishnan case (1993):\n\n• Recognized Fundamental Right to primary education under Article 21\n• Every child has right to FREE education until age 14\n• After 14, right to education subject to economic capacity of State\n\nOverruled Mohini Jain case (1992) which had declared fundamental right to education up to any level including professional education.',
        category: 'fact',
        source: 'Fundamental Rights'
    },

    // ========== SUMMARY CARDS FOR DAY 6 ==========

    {
        id: 'd6-fr-summary-1',
        front: 'Summarize Articles 14-18 (Right to Equality) at a glance.',
        back: 'RIGHT TO EQUALITY:\n\n• Art 14: Equality before law + Equal protection of laws\n• Art 15: Prohibition of discrimination (religion, race, caste, sex, place of birth)\n• Art 16: Equality of opportunity in public employment\n• Art 17: Abolition of untouchability\n• Art 18: Abolition of titles',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    },
    {
        id: 'd6-fr-summary-2',
        front: 'Summarize Articles 19-21A at a glance.',
        back: 'RIGHT TO FREEDOM (Part 1):\n\n• Art 19: Six freedoms - speech, assembly, association, movement, residence, profession\n• Art 20: Protection against conviction (ex-post-facto, double jeopardy, self-incrimination)\n• Art 21: Protection of life and personal liberty\n• Art 21A: Right to education (6-14 years)',
        category: 'fact',
        source: 'Fundamental Rights',
        highlight: true
    }
];

export default DAY6_FLASHCARDS;
