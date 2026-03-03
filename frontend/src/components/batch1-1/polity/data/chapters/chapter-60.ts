import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch60-l1-q1",
        "question": "The National Commission for Protection of Child Rights (NCPCR) was established under:",
        "options": ["The Constitution of India", "Commissions for Protection of Child Rights (CPCR) Act, 2005", "Right to Education Act, 2009", "Juvenile Justice Act, 2015"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR was established under the CPCR Act, 2005 as a statutory body to protect child rights."
    },
    {
        "id": "ch60-l1-q2",
        "question": "NCPCR was constituted on:",
        "options": ["5th March 2007", "26th January 2006", "15th August 2007", "1st January 2005"],
        "correctAnswerIndex": 0,
        "explanation": "NCPCR was constituted on 5th March 2007 under the CPCR Act, 2005."
    },
    {
        "id": "ch60-l1-q3",
        "question": "The NCPCR consists of:",
        "options": ["A Chairperson and 3 members", "A Chairperson and 6 members (total 7)", "A Chairperson and 10 members", "Only a Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 3, NCPCR consists of a Chairperson and 6 members appointed by the Central Government."
    },
    {
        "id": "ch60-l1-q4",
        "question": "The Chairperson of NCPCR is appointed by:",
        "options": ["The President of India", "The Central Government", "The Supreme Court", "The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairperson is appointed by the Central Government and must be a person of eminence who has done outstanding work for promoting the welfare of children."
    },
    {
        "id": "ch60-l1-q5",
        "question": "Under the CPCR Act, a child is defined as a person below the age of:",
        "options": ["14 years", "16 years", "18 years", "21 years"],
        "correctAnswerIndex": 2,
        "explanation": "Section 2(b) defines child as a person who has not completed 18 years of age."
    },
    {
        "id": "ch60-l1-q6",
        "question": "The term of office of the Chairperson and members of NCPCR is:",
        "options": ["5 years or until age of 65", "3 years or until age of 65, whichever is earlier", "6 years", "4 years"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairperson and members hold office for 3 years or until age 65, whichever is earlier."
    },
    {
        "id": "ch60-l1-q7",
        "question": "NCPCR monitors the implementation of which key legislation?",
        "options": ["Companies Act, 2013", "POCSO Act, 2012 and Right to Education (RTE) Act, 2009", "Income Tax Act, 1961", "Consumer Protection Act, 2019"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR is the designated authority to monitor implementation of POCSO Act, 2012 and RTE Act, 2009."
    },
    {
        "id": "ch60-l1-q8",
        "question": "The constitutional basis for child rights protection in India includes:",
        "options": ["Article 14 only", "Articles 15(3), 21A, 24, 39(e), 39(f), and 45", "Article 370 only", "Article 356 only"],
        "correctAnswerIndex": 1,
        "explanation": "Multiple constitutional provisions protect children: 15(3) special provisions, 21A right to education, 24 prohibition of child labour, 39(e)(f) protection from exploitation, 45 early childhood care."
    },
    {
        "id": "ch60-l1-q9",
        "question": "NCPCR has the powers of a civil court for:",
        "options": ["Sentencing offenders", "Summoning witnesses, requiring document production, receiving evidence on affidavit, and examining witnesses", "Imposing fines and imprisonment", "Passing enforceable decrees"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 14, NCPCR has civil court powers for inquiry purposes including summoning, document production, and affidavit evidence."
    },
    {
        "id": "ch60-l1-q10",
        "question": "Which of the following is NOT a function of NCPCR?",
        "options": ["Examining safeguards for child rights under existing laws", "Recommending remedial measures for child protection", "Directly prosecuting offenders in criminal courts", "Looking into complaints of violation of child rights"],
        "correctAnswerIndex": 2,
        "explanation": "NCPCR does not have prosecutorial powers. It examines, recommends, investigates, and advises but cannot directly prosecute."
    },
    {
        "id": "ch60-l1-q11",
        "question": "State Commissions for Protection of Child Rights (SCPCRs) are established under:",
        "options": ["State legislation only", "The CPCR Act, 2005 itself", "The Constitution", "RTE Act, 2009"],
        "correctAnswerIndex": 1,
        "explanation": "Section 17 of the CPCR Act provides for establishment of SCPCRs by State Governments."
    },
    {
        "id": "ch60-l1-q12",
        "question": "NCPCR submits its annual report to:",
        "options": ["The Supreme Court", "The Central Government, which lays it before Parliament", "The NHRC", "The President directly"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 16, NCPCR submits annual reports to the Central Government which presents them to Parliament."
    },
    {
        "id": "ch60-l1-q13",
        "question": "Article 21A of the Constitution provides for:",
        "options": ["Right to life only", "Right to free and compulsory education for children aged 6-14 years", "Right to property", "Right to privacy"],
        "correctAnswerIndex": 1,
        "explanation": "Article 21A (inserted by 86th Amendment, 2002) makes education a fundamental right for children aged 6-14 years."
    },
    {
        "id": "ch60-l1-q14",
        "question": "The POCSO Act, 2012 deals with:",
        "options": ["Child labour prohibition", "Protection of children from sexual offences including sexual assault, harassment, and pornography", "Child marriage prevention", "Child adoption regulations"],
        "correctAnswerIndex": 1,
        "explanation": "POCSO provides a comprehensive framework to protect children from sexual assault, sexual harassment, and pornography offences."
    },
    {
        "id": "ch60-l1-q15",
        "question": "NCPCR can take up cases suo motu when:",
        "options": ["Never", "When it notices child rights violations requiring action, even without a formal complaint", "Only when directed by the PM", "Only when directed by courts"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR can take suo motu cognizance of matters relating to child rights violations and initiate appropriate action."
    },
    {
        "id": "ch60-l1-q16",
        "question": "Article 24 of the Indian Constitution provides:",
        "options": ["Right to education", "Prohibition of employment of children below 14 years in factories, mines, and hazardous employment", "Right to food", "Right to shelter"],
        "correctAnswerIndex": 1,
        "explanation": "Article 24 prohibits employment of children below 14 in factories, mines, or any hazardous employment. It is a fundamental right."
    },
    {
        "id": "ch60-l1-q17",
        "question": "The Juvenile Justice (Care and Protection of Children) Act, 2015 replaced:",
        "options": ["CPCR Act, 2005", "Juvenile Justice Act, 2000", "Child Labour Act, 1986", "POCSO Act, 2012"],
        "correctAnswerIndex": 1,
        "explanation": "The JJ Act, 2015 replaced the JJ Act, 2000, introducing provisions for children in conflict with law and children in need of care and protection."
    },
    {
        "id": "ch60-l1-q18",
        "question": "Under JJ Act 2015, a Juvenile Justice Board (JJB) must include:",
        "options": ["Only judges", "A Metropolitan/Judicial Magistrate and two social workers (at least one woman)", "Only police officers", "Only child psychologists"],
        "correctAnswerIndex": 1,
        "explanation": "Section 4 mandates JJB to include a Metropolitan or Judicial Magistrate and two social workers, of whom at least one shall be a woman."
    },
    {
        "id": "ch60-l1-q19",
        "question": "The Child Labour (Prohibition and Regulation) Amendment Act, 2016 prohibits:",
        "options": ["All child labour without exception", "Employment of children below 14 in all occupations (with family enterprise exceptions) and adolescents (14-18) in hazardous occupations", "Only factory labour", "Only mining labour"],
        "correctAnswerIndex": 1,
        "explanation": "The 2016 amendment prohibits employment of all children below 14 (except in family enterprises) and adolescents 14-18 in hazardous occupations."
    },
    {
        "id": "ch60-l1-q20",
        "question": "NCPCR is headquartered at:",
        "options": ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        "correctAnswerIndex": 2,
        "explanation": "NCPCR is headquartered in New Delhi."
    },
    {
        "id": "ch60-l1-q21",
        "question": "The Right of Children to Free and Compulsory Education (RTE) Act came into force on:",
        "options": ["1st April 2010", "26th January 2010", "15th August 2009", "1st January 2011"],
        "correctAnswerIndex": 0,
        "explanation": "The RTE Act, 2009 came into force on 1st April 2010, making education a fundamental right for children 6-14."
    },
    {
        "id": "ch60-l1-q22",
        "question": "Under RTE Act, private unaided schools must reserve what percentage of seats for disadvantaged children?",
        "options": ["10%", "25%", "33%", "50%"],
        "correctAnswerIndex": 1,
        "explanation": "Section 12(1)(c) mandates 25% reservation in entry-level classes in private unaided schools for children from weaker and disadvantaged sections."
    },
    {
        "id": "ch60-l1-q23",
        "question": "The Prohibition of Child Marriage Act, 2006 sets the minimum age of marriage at:",
        "options": ["16 for girls, 18 for boys", "18 for girls, 21 for boys", "18 for both", "21 for both"],
        "correctAnswerIndex": 1,
        "explanation": "The Act prescribes minimum marriage age of 18 for girls and 21 for boys. Child marriages are voidable at the option of the contracting party who was a child."
    },
    {
        "id": "ch60-l1-q24",
        "question": "NCPCR's GHAR (Go Home and Re-Unite) portal is designed for:",
        "options": ["Tourist accommodation", "Digital monitoring and tracking of children in institutional care, facilitating restoration and repatriation", "Government housing schemes", "Railway station management"],
        "correctAnswerIndex": 1,
        "explanation": "GHAR portal enables digital tracking of children in institutional care and facilitates their restoration to families or repatriation."
    },
    {
        "id": "ch60-l1-q25",
        "question": "The UN Convention on the Rights of the Child (UNCRC) was ratified by India in:",
        "options": ["1989", "1992", "2000", "2005"],
        "correctAnswerIndex": 1,
        "explanation": "India ratified UNCRC on 11th December 1992. The CPCR Act 2005 and NCPCR were established to fulfill India's UNCRC obligations."
    },
    {
        "id": "ch60-l1-q26",
        "question": "Article 39(e) of the Constitution directs the State to ensure:",
        "options": ["Equal pay for equal work", "That the tender age of children is not abused and citizens are not forced into unsuitable vocations", "Free legal aid", "Right to property"],
        "correctAnswerIndex": 1,
        "explanation": "Article 39(e) is a DPSP directing protection of children from exploitation and abuse of their tender age."
    },
    {
        "id": "ch60-l1-q27",
        "question": "Article 39(f) of the Constitution directs:",
        "options": ["Children to work in factories", "That children are given opportunities to develop in a healthy manner with freedom and dignity", "Compulsory military service", "Children to pay taxes"],
        "correctAnswerIndex": 1,
        "explanation": "Article 39(f) mandates opportunities for healthy development of children in conditions of freedom, dignity, and protection from exploitation."
    },
    {
        "id": "ch60-l1-q28",
        "question": "NCPCR's complaint handling includes which channels?",
        "options": ["Only postal complaints", "Online portal, email, post, telephone helpline, and in-person visits", "Only court referrals", "Only police referrals"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR accepts complaints through multiple channels to maximize accessibility for reporting child rights violations."
    },
    {
        "id": "ch60-l1-q29",
        "question": "The National Policy for Children was adopted in:",
        "options": ["1974 (revised in 2013)", "1990", "2000", "2010"],
        "correctAnswerIndex": 0,
        "explanation": "The first National Policy for Children was adopted in 1974 and was revised comprehensively in 2013."
    },
    {
        "id": "ch60-l1-q30",
        "question": "Which helpline number is designated as the child helpline in India?",
        "options": ["100", "1098 (Childline)", "112", "108"],
        "correctAnswerIndex": 1,
        "explanation": "1098 is the Childline number — a 24/7 toll-free emergency helpline for children in distress."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch60-l2-q1",
        "question": "Consider the following about NCPCR:\\n1. It is a constitutional body.\\n2. It is a statutory body under the CPCR Act, 2005.\\n3. It monitors implementation of POCSO and RTE Acts.\\n4. It has civil court powers for investigation.\\nWhich are correct?",
        "options": ["1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4", "2 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 2, 3, and 4 are correct. Statement 1 is incorrect — NCPCR is statutory, not constitutional."
    },
    {
        "id": "ch60-l2-q2",
        "question": "Assertion (A): The 86th Constitutional Amendment (2002) was a milestone for child rights.\\nReason (R): It inserted Article 21A making free and compulsory education a fundamental right for children aged 6-14 and modified Article 45 to provide early childhood care.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 86th Amendment added Art 21A (education as FR) and modified Art 45 (early childhood care up to 6 years)."
    },
    {
        "id": "ch60-l2-q3",
        "question": "Match the following legislation with their focus area:\\nA. POCSO Act - Sexual offences against children\\nB. JJ Act - Juvenile delinquency and child care\\nC. Child Labour Act - Child labour\\nD. RTE Act - Right to education\\nCorrect match:",
        "options": ["A-Sexual offences, B-Juvenile justice, C-Child labour, D-Education", "A-Child labour, B-Education, C-Juvenile justice, D-Sexual offences", "A-Education, B-Child labour, C-Sexual offences, D-Juvenile justice", "A-Juvenile justice, B-Sexual offences, C-Education, D-Child labour"],
        "correctAnswerIndex": 0,
        "explanation": "POCSO deals with sexual offences; JJ Act with juvenile justice and child care; Child Labour Act with child labour; RTE with education."
    },
    {
        "id": "ch60-l2-q4",
        "question": "Under POCSO Act, 2012 (amended 2019), the punishment for penetrative sexual assault on a child below 16 years is:",
        "options": ["Minimum 5 years", "Minimum 10 years imprisonment, extendable to life imprisonment", "Maximum 3 years only", "Only fine"],
        "correctAnswerIndex": 1,
        "explanation": "The 2019 amendment enhanced penalties — penetrative sexual assault on children below 16 attracts minimum 10 years, extendable to life imprisonment."
    },
    {
        "id": "ch60-l2-q5",
        "question": "The principle of 'best interest of the child' recognized in JJ Act, 2015 means:",
        "options": ["The parent's interest takes priority", "All decisions regarding a child must prioritize the child's physical, emotional, intellectual, and social development", "Economic interests of the state prevail", "Educational interests alone matter"],
        "correctAnswerIndex": 1,
        "explanation": "Section 3(iv) of JJ Act establishes that the best interest of the child shall be the primary consideration in all actions concerning children."
    },
    {
        "id": "ch60-l2-q6",
        "question": "Statement I: POCSO Act provides for establishment of Special Courts for trial of sexual offences against children.\\nStatement II: The identity of the child victim cannot be disclosed under POCSO.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Section 28 mandates Special Courts, and Section 23 prohibits disclosure of the child victim's identity."
    },
    {
        "id": "ch60-l2-q7",
        "question": "NCPCR's role in monitoring child labour includes:\\n1. Inspecting workplaces\\n2. Recommending prosecution of violators\\n3. Tracking rescued children's rehabilitation\\n4. Advising policy reforms\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR's child labour monitoring encompasses all four — inspections, prosecution recommendations, rehabilitation tracking, and policy advice."
    },
    {
        "id": "ch60-l2-q8",
        "question": "The JJ Act, 2015 introduced which significant change regarding children aged 16-18 years alleged to have committed heinous offences?",
        "options": ["They are automatically tried as adults", "The JJB may, after preliminary assessment, transfer them to a Children's Court to be tried as adults", "They are released without trial", "They face same punishment as adults in all cases"],
        "correctAnswerIndex": 1,
        "explanation": "Section 15 allows JJB to preliminarily assess if a child 16-18 accused of a heinous offence has the mental/physical capacity to commit it, and may transfer to Children's Court."
    },
    {
        "id": "ch60-l2-q9",
        "question": "Assertion (A): India has one of the most comprehensive child rights legal frameworks globally.\\nReason (R): India has enacted POCSO, JJ Act, RTE Act, Child Labour Act, PCMA, and established NCPCR and SCPCRs.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The multiple legislation and institutional framework demonstrates comprehensive child rights protection."
    },
    {
        "id": "ch60-l2-q10",
        "question": "Under the RTE Act, the pupil-teacher ratio prescribed for primary schools is:",
        "options": ["1:20", "1:30", "1:40", "1:50"],
        "correctAnswerIndex": 1,
        "explanation": "The RTE Act prescribes a pupil-teacher ratio of 1:30 for primary schools and 1:35 for upper primary schools."
    },
    {
        "id": "ch60-l2-q11",
        "question": "The CPCR Act mandates that among the 6 members of NCPCR, at least:\\n1. Two shall be women\\n2. One from SC and one from ST\\n3. All must be retired judges\\nWhich are correct?",
        "options": ["1 and 2 only", "1 only", "1, 2 and 3", "3 only"],
        "correctAnswerIndex": 0,
        "explanation": "The Act mandates at least 2 women members and representation from SC and ST. Members are not required to be retired judges."
    },
    {
        "id": "ch60-l2-q12",
        "question": "NCPCR's MASI (Monitoring App for Seamless Inspection) is used for:",
        "options": ["Medical college inspection", "Real-time monitoring and inspection of Child Care Institutions (CCIs) to ensure compliance with JJ Act", "Airport security monitoring", "School examination monitoring"],
        "correctAnswerIndex": 1,
        "explanation": "MASI enables digital inspection and monitoring of CCIs, tracking compliance with JJ Act standards for children in institutional care."
    },
    {
        "id": "ch60-l2-q13",
        "question": "The difference between 'child in conflict with law' and 'child in need of care and protection' under JJ Act is:",
        "options": ["There is no difference", "A child in conflict with law is alleged to have committed an offence; a child in need of care and protection is a vulnerable child requiring state intervention", "Both face criminal prosecution", "Both are treated identically"],
        "correctAnswerIndex": 1,
        "explanation": "JJ Act distinguishes: children in conflict with law (alleged offenders, handled by JJB) and children in need of care (vulnerable, handled by Child Welfare Committees)."
    },
    {
        "id": "ch60-l2-q14",
        "question": "Child Welfare Committees (CWCs) under JJ Act consist of:",
        "options": ["Only judges", "A Chairperson and 4 members (at least one woman and one expert on children)", "Only police officers", "Only social workers"],
        "correctAnswerIndex": 1,
        "explanation": "Section 27 provides for CWC with a Chairperson and 4 members including at least one woman and one expert on child matters."
    },
    {
        "id": "ch60-l2-q15",
        "question": "NCPCR's role under RTE Act includes monitoring:\\n1. School infrastructure compliance\\n2. No-detention policy implementation\\n3. 25% reservation in private schools\\n4. Teacher qualification standards\\nSelect the correct answer:",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "2 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR monitors all aspects of RTE implementation including infrastructure, policies, reservation compliance, and teacher standards."
    },
    {
        "id": "ch60-l2-q16",
        "question": "The Integrated Child Protection Scheme (ICPS), now part of Mission Vatsalya, provides:",
        "options": ["Only financial assistance", "A comprehensive framework including institutional care, foster care, sponsorship, and after-care programs", "Only adoption services", "Only education support"],
        "correctAnswerIndex": 1,
        "explanation": "Mission Vatsalya (formerly ICPS) provides comprehensive child protection through institutional care, non-institutional care, emergency outreach, and training."
    },
    {
        "id": "ch60-l2-q17",
        "question": "Under POCSO Act, which of the following is a non-contact sexual offence?",
        "options": ["Penetrative sexual assault", "Sexual harassment including showing pornography to a child or using a child for pornographic purposes", "Aggravated penetrative sexual assault", "Physical assault"],
        "correctAnswerIndex": 1,
        "explanation": "POCSO covers both contact offences (sexual assault) and non-contact offences (showing pornography, online harassment, using children for pornographic purposes)."
    },
    {
        "id": "ch60-l2-q18",
        "question": "Assertion (A): The UNCRC's four core principles guide NCPCR's functioning.\\nReason (R): These principles are: non-discrimination, best interest of the child, right to survival and development, and right to be heard.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCPCR's functioning reflects UNCRC's four core principles which guide all child rights interventions."
    },
    {
        "id": "ch60-l2-q19",
        "question": "The adoption of children in India is regulated by:",
        "options": ["Only religious personal laws", "JJ Act, 2015 and CARA (Central Adoption Resource Authority) guidelines, along with HAMA 1956 for Hindus", "Only POCSO Act", "Only RTE Act"],
        "correctAnswerIndex": 1,
        "explanation": "Adoption is governed by JJ Act (secular adoption for all), CARA guidelines, and Hindu Adoption and Maintenance Act 1956 for Hindus."
    },
    {
        "id": "ch60-l2-q20",
        "question": "The e-Baal Nidan portal developed by NCPCR is:",
        "options": ["A gaming platform for children", "An online complaint management system for receiving and tracking complaints related to child rights violations", "An educational website", "A health monitoring system"],
        "correctAnswerIndex": 1,
        "explanation": "e-Baal Nidan is NCPCR's online complaint management portal for receiving, tracking, and resolving complaints of child rights violations."
    },
    {
        "id": "ch60-l2-q21",
        "question": "Under JJ Act 2015, the maximum period a child in conflict with law can be sent to a Special Home is:",
        "options": ["1 year", "3 years", "Until age 21", "Life imprisonment"],
        "correctAnswerIndex": 1,
        "explanation": "Section 18 provides that the maximum period of stay in a Special Home is 3 years."
    },
    {
        "id": "ch60-l2-q22",
        "question": "The POCSO Act's 'mandatory reporting' provision means:",
        "options": ["Reporting is optional", "Any person with knowledge of a sexual offence against a child must report it; failure to report is punishable", "Only police can report", "Only parents can report"],
        "correctAnswerIndex": 1,
        "explanation": "Section 19 mandates reporting of known/suspected sexual offences against children. Section 21 penalizes failure to report."
    },
    {
        "id": "ch60-l2-q23",
        "question": "Statement I: NCPCR can recommend prosecution against establishments employing child labour.\\nStatement II: NCPCR can directly impose fines on such establishments.\\nSelect the correct answer:",
        "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 1,
        "explanation": "Statement I is correct — NCPCR can recommend prosecution. Statement II is incorrect — NCPCR cannot directly impose fines."
    },
    {
        "id": "ch60-l2-q24",
        "question": "NCPCR and State Commissions (SCPCRs) differ in that:",
        "options": ["NCPCR handles Central Government matters while SCPCRs handle state-level matters", "They are identical in jurisdiction", "NCPCR only handles POCSO cases", "SCPCRs handle only education matters"],
        "correctAnswerIndex": 0,
        "explanation": "NCPCR handles matters within Central Government jurisdiction including union territories, while SCPCRs address child rights in their respective states."
    },
    {
        "id": "ch60-l2-q25",
        "question": "The Childline 1098 service provides:",
        "options": ["Only telephone counseling", "24/7 toll-free emergency helpline for children in distress, providing rescue, rehabilitation referral, and child protection linkage", "Only adoption services", "Only educational guidance"],
        "correctAnswerIndex": 1,
        "explanation": "Childline 1098 provides 24/7 emergency support for children, connecting them to rescue services, shelter, medical care, and protection mechanisms."
    },
    {
        "id": "ch60-l2-q26",
        "question": "Under POCSO, the burden of proof regarding consent:",
        "options": ["Is on the prosecution as in regular cases", "Is shifted — the Special Court shall presume the absence of consent when the accused is prosecuted", "Is on the child victim", "Does not apply"],
        "correctAnswerIndex": 1,
        "explanation": "Section 29 creates a presumption against the accused — the court presumes the accused committed the offence unless proved otherwise."
    },
    {
        "id": "ch60-l2-q27",
        "question": "NCPCR's monitoring of Child Care Institutions (CCIs) under JJ Act includes ensuring:",
        "options": ["Only food quality", "Adequate infrastructure, trained staff, maintenance of registers, child safety, and rehabilitation programs", "Only security measures", "Only educational activities"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR comprehensively monitors CCIs covering physical infrastructure, staffing, safety protocols, rehabilitation, and documentation."
    },
    {
        "id": "ch60-l2-q28",
        "question": "The PM CARES for Children scheme (launched during COVID-19) provides:",
        "options": ["Only education support", "Free education, health insurance, Rs 10 lakh corpus at age 23, and monthly stipend for children who lost parents to COVID-19", "Only financial compensation", "Only orphanage placement"],
        "correctAnswerIndex": 1,
        "explanation": "PM CARES for Children provides comprehensive support for COVID orphans. NCPCR monitors implementation."
    },
    {
        "id": "ch60-l2-q29",
        "question": "The concept of 'child-friendly courts' under POCSO involves:",
        "options": ["Regular court proceedings only", "In-camera trials, not exposing child to accused, support persons, child-friendly questioning, and completing trial within 1 year", "Military tribunal for children", "Online courts only"],
        "correctAnswerIndex": 1,
        "explanation": "POCSO mandates child-friendly trial procedures — in-camera proceedings, screen separation, support persons, simplified questioning, and speedy trial."
    },
    {
        "id": "ch60-l2-q30",
        "question": "NCPCR's interaction with international frameworks includes:\\n1. Monitoring India's compliance with UNCRC\\n2. Reporting on Optional Protocols to UNCRC\\n3. Coordinating with UNICEF on child rights programs\\nWhich are correct?",
        "options": ["1 only", "1 and 3 only", "1, 2 and 3", "2 only"],
        "correctAnswerIndex": 2,
        "explanation": "NCPCR engages with all three — monitoring UNCRC compliance, reporting on Optional Protocols, and coordinating with UNICEF."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch60-l3-q1",
        "question": "Consider the constitutional provisions for child protection:\\n1. Article 15(3) — Special provisions for children\\n2. Article 21A — Right to education (6-14 years)\\n3. Article 24 — Prohibition of child labour in hazardous employment\\n4. Article 39(e)(f) — Protection from exploitation\\n5. Article 45 — Early childhood care (0-6 years)\\nWhich are correctly stated?",
        "options": ["1, 2 and 3 only", "1, 2, 3, 4 and 5", "2 and 3 only", "4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five are correctly stated constitutional provisions forming the framework for child rights in India."
    },
    {
        "id": "ch60-l3-q2",
        "question": "Assertion (A): The JJ Act 2015 provoked controversy by allowing trial of 16-18 year olds as adults for heinous offences.\\nReason (R): The provision was introduced following the Nirbhaya case where a minor accused could not be tried under adult criminal law.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Nirbhaya case highlighted the gap — the juvenile accused received only 3 years under the old JJ Act, prompting the transfer provision."
    },
    {
        "id": "ch60-l3-q3",
        "question": "Statement I: The RTE Act's no-detention policy (Section 16) was amended in 2019 to allow states to hold back students in Classes 5 and 8.\\nStatement II: NCPCR had expressed concerns about learning outcomes under the absolute no-detention policy.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 2019 amendment gave states the option to conduct examinations in Classes 5 and 8 and detain students, addressing quality concerns."
    },
    {
        "id": "ch60-l3-q4",
        "question": "In Sampurna Behura v. Union of India (2018), the Supreme Court directed regarding child rights:",
        "options": ["Children have no special rights", "All states must constitute functional CWCs and JJBs in every district, and set up Special Courts under POCSO", "Children should be tried as adults", "Child labour should be legalized"],
        "correctAnswerIndex": 1,
        "explanation": "The SC directed all states to ensure functional CWCs, JJBs, and Special Courts in every district — reinforcing the institutional framework NCPCR monitors."
    },
    {
        "id": "ch60-l3-q5",
        "question": "NCPCR's challenges in enforcing child rights include:\\n1. Advisory nature of recommendations\\n2. Inadequate staffing and resources\\n3. Poor implementation at grassroots level\\n4. Lack of community awareness\\nWhich are recognized challenges?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are well-documented challenges that limit effective child rights protection despite the comprehensive legal framework."
    },
    {
        "id": "ch60-l3-q6",
        "question": "The POCSO (Amendment) Act, 2019 introduced:\\n1. Death penalty for aggravated penetrative sexual assault on children below 12\\n2. Enhanced minimum punishments for various offences\\n3. Penalties for child pornography\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2 and 3", "2 and 3 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "The 2019 amendment introduced all three — death penalty provision, enhanced punishments, and specific penalties for child pornography."
    },
    {
        "id": "ch60-l3-q7",
        "question": "Arrange the following child rights legislation chronologically:\\n1. Children Act, 1960\\n2. Child Labour Act, 1986\\n3. UNCRC Ratification, 1992\\n4. JJ Act, 2000\\n5. CPCR Act, 2005\\n6. RTE Act, 2009\\n7. POCSO Act, 2012\\n8. JJ Act, 2015\\nThe correct order is:",
        "options": ["1, 2, 3, 4, 5, 6, 7, 8", "2, 1, 3, 4, 5, 6, 7, 8", "1, 3, 2, 4, 5, 6, 7, 8", "3, 1, 2, 4, 5, 6, 7, 8"],
        "correctAnswerIndex": 0,
        "explanation": "Correct chronological order reflecting the progressive development of child rights law in India."
    },
    {
        "id": "ch60-l3-q8",
        "question": "Assertion (A): NCPCR has recommended making Aadhaar-based tracking mandatory for children in institutional care.\\nReason (R): Digital tracking helps prevent trafficking, illegal adoption, and ensures proper monitoring of children in CCIs.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Digital tracking through Aadhaar and portals like GHAR helps prevent trafficking and ensures accountability in child care institutions."
    },
    {
        "id": "ch60-l3-q9",
        "question": "The intersection of NCPCR's mandate with Internet Safety for children involves:\\n1. Monitoring online child exploitation\\n2. Recommending age-verification for social media\\n3. Advocating for cyber safety education\\n4. Coordinating with CERT-In on child-related threats\\nWhich are part of NCPCR's evolving mandate?",
        "options": ["1 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four reflect NCPCR's expanding role in the digital age — addressing online exploitation, social media safety, cyber education, and cybersecurity coordination."
    },
    {
        "id": "ch60-l3-q10",
        "question": "Statement I: India ratified the Hague Convention on Inter-country Adoption in 2003.\\nStatement II: CARA ensures compliance with its principles for inter-country adoptions under NCPCR's oversight.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India ratified the Hague Convention in 2003, and CARA ensures compliance for inter-country adoptions."
    },
    {
        "id": "ch60-l3-q11",
        "question": "In Bachpan Bachao Andolan v. Union of India (2011), the Supreme Court directed:",
        "options": ["Child labour is acceptable in family enterprises", "The government must identify, release, and rehabilitate all children working in circuses", "Only adults should work in circuses", "Children can work if they consent"],
        "correctAnswerIndex": 1,
        "explanation": "The SC directed rescue and rehabilitation of children from circuses, reinforcing the framework that NCPCR monitors."
    },
    {
        "id": "ch60-l3-q12",
        "question": "NCPCR's role in disaster management for children includes:",
        "options": ["No role during disasters", "Ensuring child-specific needs in disaster response — rescue of separated children, anti-trafficking measures, education continuity, and psychosocial support", "Only financial assistance", "Only media reporting"],
        "correctAnswerIndex": 1,
        "explanation": "During disasters, NCPCR ensures child-specific interventions including rescue, anti-trafficking measures, continued education, and mental health support."
    },
    {
        "id": "ch60-l3-q13",
        "question": "Consider the 'principle of fresh start' under JJ Act 2015:\\n1. A child who completed the prescribed process has the right to a fresh start.\\n2. Records are destroyed/sealed to prevent stigma.\\n3. This principle applies only to petty offences.\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect — the fresh start principle applies to all categories of offences once the child completes the prescribed process."
    },
    {
        "id": "ch60-l3-q14",
        "question": "Assertion (A): NCPCR has faced criticism for sometimes prioritizing ideological positions over child welfare.\\nReason (R): As a government-appointed body, NCPCR's independence can be influenced by the political orientation of appointees.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The political appointment process has raised concerns about independence, similar to criticisms faced by other statutory commissions."
    },
    {
        "id": "ch60-l3-q15",
        "question": "The SDGs relevant to NCPCR's mandate include:\\n1. SDG 4 — Quality Education\\n2. SDG 5 — Gender Equality (girl children)\\n3. SDG 8 — Decent Work (elimination of child labour)\\n4. SDG 16 — Peace, Justice and Strong Institutions\\nWhich are correct?",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "4 only", "1, 3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four SDGs are relevant — education (4), gender equality for girls (5), ending child labour (8), and access to justice for children (16)."
    },
    {
        "id": "ch60-l3-q16",
        "question": "The right of a child to be heard (UNCRC Article 12) is reflected in Indian law through:",
        "options": ["No provision exists", "JJ Act provisions for child's opinion in adoption/custody, POCSO's child-friendly procedures, and CWC proceedings", "Only in family courts", "Only in Supreme Court proceedings"],
        "correctAnswerIndex": 1,
        "explanation": "Multiple Indian laws reflect the child's right to be heard — JJ Act, POCSO, and CWC proceedings."
    },
    {
        "id": "ch60-l3-q17",
        "question": "Statement I: NCPCR monitors compliance with the 25% reservation under RTE Section 12(1)(c) in private schools.\\nStatement II: The SC in Society for Unaided Private Schools v. UoI (2012) upheld this provision's constitutional validity.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCPCR monitors RTE compliance and the SC upheld Section 12(1)(c) as constitutional."
    },
    {
        "id": "ch60-l3-q18",
        "question": "NCPCR's approach to child marriage covers:\\n1. Monitoring implementation of PCMA 2006\\n2. Coordinating with district administration\\n3. Tracking rescued children's rehabilitation\\n4. Advocating for stricter penalties\\nWhich are part of NCPCR's role?",
        "options": ["1 only", "1 and 2 only", "1, 2, 3 and 4", "4 only"],
        "correctAnswerIndex": 2,
        "explanation": "NCPCR's comprehensive approach covers all four — monitoring, coordination, rehabilitation tracking, and policy advocacy."
    },
    {
        "id": "ch60-l3-q19",
        "question": "Assertion (A): The CPCR Act provides NCPCR with both preventive and reactive mandates.\\nReason (R): NCPCR both proactively reviews laws/policies and reactively investigates complaints.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCPCR's dual mandate includes proactive review of laws and reactive investigation of violations."
    },
    {
        "id": "ch60-l3-q20",
        "question": "In Independent Thought v. Union of India (2017), the Supreme Court held:",
        "options": ["Child marriage is constitutional", "Sexual intercourse with a wife below 18 years is rape, striking down the marital rape exception for minor wives", "Marital rape exception applies to all ages", "Child marriage law is unconstitutional"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that the marital rape exception for minor wives (15-18) was unconstitutional, aligning with the age of consent (18) and POCSO Act."
    },
    {
        "id": "ch60-l3-q21",
        "question": "The TrackChild portal serves to:",
        "options": ["Track school attendance only", "Create a comprehensive database of missing and found children, linking police records with child welfare data for reunification", "Monitor child health", "Track vaccination records"],
        "correctAnswerIndex": 1,
        "explanation": "TrackChild maintains a database of missing/found children, connecting police, railway, and child welfare data for tracing and reunification."
    },
    {
        "id": "ch60-l3-q22",
        "question": "Statement I: NCPCR has recommended mandatory background checks for persons working with children.\\nStatement II: POCSO mandates reporting of known sexual offences against children.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCPCR advocates preventive measures (background checks) and POCSO mandates reporting (Sections 19/21)."
    },
    {
        "id": "ch60-l3-q23",
        "question": "Challenges in child rights protection in India include:\\n1. Comprehensive legal framework but patchy implementation\\n2. Many districts lack functional CWCs and JJBs\\n3. Low conviction rates under POCSO\\n4. Persistent child labour in informal sectors\\nWhich are recognized?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are well-documented challenges — implementation gaps, institutional vacancies, low POCSO conviction rates, and persistent informal child labour."
    },
    {
        "id": "ch60-l3-q24",
        "question": "The concept of 'diversion' in juvenile justice means:",
        "options": ["Sending children to adult prisons", "Redirecting children away from formal justice towards community-based rehabilitation, especially for petty offences", "Ignoring child offences", "Transferring cases to higher courts"],
        "correctAnswerIndex": 1,
        "explanation": "Diversion channels children towards community-based programs and reformative approaches, away from formal criminal justice."
    },
    {
        "id": "ch60-l3-q25",
        "question": "Assertion (A): NCPCR's mandate is broad enough to address cyberbullying and online exploitation of children.\\nReason (R): Section 13's language covering 'deprivation of child rights' is sufficiently broad for digital-age challenges.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The broad statutory language allows NCPCR to address contemporary challenges including online child exploitation and cyberbullying."
    },
    {
        "id": "ch60-l3-q26",
        "question": "The relationship between NCPCR and NHRC regarding child rights is:",
        "options": ["They have no relationship", "NHRC has general human rights jurisdiction; NCPCR has specific child-focused mandate — they coordinate with complementary jurisdictions", "NCPCR reports to NHRC", "NHRC has replaced NCPCR"],
        "correctAnswerIndex": 1,
        "explanation": "NHRC covers all human rights while NCPCR specializes in child rights. They have overlapping but complementary jurisdictions."
    },
    {
        "id": "ch60-l3-q27",
        "question": "NCPCR's COVID-19 pandemic role included:\\n1. Tracking orphaned children\\n2. Monitoring PM CARES for Children scheme\\n3. Ensuring education continuity\\n4. Preventing child trafficking during lockdown\\nWhich functions did NCPCR perform?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCPCR was actively involved in all four areas during COVID-19."
    },
    {
        "id": "ch60-l3-q28",
        "question": "The principle of 'restitutive justice' in child rights means:",
        "options": ["Punishing children severely", "Focusing on rehabilitation and reintegration rather than purely punitive measures", "Ignoring the offence", "Only financial compensation"],
        "correctAnswerIndex": 1,
        "explanation": "Restitutive justice prioritizes the child's rehabilitation and reintegration, consistent with UNCRC principles and JJ Act's reformative approach."
    },
    {
        "id": "ch60-l3-q29",
        "question": "Consider the comprehensive child protection ecosystem:\\n1. Legal framework — POCSO, JJ Act, RTE, Child Labour Act\\n2. Institutional — NCPCR, SCPCRs, CWCs, JJBs\\n3. Administrative — Childline, Mission Vatsalya, GHAR portal\\n4. Judicial — Special Courts, JJBs\\nWhich components correctly represent this ecosystem?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four represent the comprehensive ecosystem: legal (protective laws), institutional (commissions/committees), administrative (programs/portals), and judicial (specialized courts)."
    },
    {
        "id": "ch60-l3-q30",
        "question": "Statement I: The CPCR Act, POCSO, JJ Act, RTE, and Child Labour Act form an integrated child protection framework monitored by NCPCR.\\nStatement II: NCPCR serves as the nodal body connecting legislation with institutions (CWCs, JJBs) and programs (Childline, Mission Vatsalya).\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCPCR serves as the connecting institution between laws, specialized bodies, and government programs for comprehensive child protection."
    }
];

export const CHAPTER_60_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
