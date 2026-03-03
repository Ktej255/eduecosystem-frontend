import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch3-l1-q1",
        "question": "The Indian Constitution is the longest written constitution in the world. At the time of its adoption, it originally contained how many Articles and Schedules?",
        "options": ["395 Articles and 8 Schedules", "395 Articles and 12 Schedules", "448 Articles and 8 Schedules", "448 Articles and 12 Schedules"],
        "correctAnswerIndex": 0,
        "explanation": "When adopted on November 26, 1949, the Constitution had 395 Articles divided into 22 Parts and 8 Schedules. It has since grown to about 470+ Articles and 12 Schedules."
    },
    {
        "id": "ch3-l1-q2",
        "question": "Article 13 of the Indian Constitution provides for the doctrine of:",
        "options": ["Separation of powers", "Judicial review", "Parliamentary sovereignty", "Federal supremacy"],
        "correctAnswerIndex": 1,
        "explanation": "Article 13 declares that all laws inconsistent with or in derogation of the Fundamental Rights shall be void. This is the constitutional basis for judicial review."
    },
    {
        "id": "ch3-l1-q3",
        "question": "The concept of 'Procedure Established by Law' used in Article 21 of the Indian Constitution was borrowed from the constitution of:",
        "options": ["United States of America", "United Kingdom", "Japan", "France"],
        "correctAnswerIndex": 2,
        "explanation": "The phrase 'procedure established by law' was borrowed from the Japanese Constitution, unlike 'due process of law' used in the American Constitution."
    },
    {
        "id": "ch3-l1-q4",
        "question": "Which Article of the Constitution declares that India shall be a 'Union of States'?",
        "options": ["Article 1", "Article 2", "Article 3", "Article 4"],
        "correctAnswerIndex": 0,
        "explanation": "Article 1 specifically states: 'India, that is Bharat, shall be a Union of States.' The word 'Union' was preferred over 'Federation' to indicate the indestructible nature of the Union."
    },
    {
        "id": "ch3-l1-q5",
        "question": "The concept of Directive Principles of State Policy was borrowed from the Constitution of:",
        "options": ["Canada", "Ireland", "Australia", "South Africa"],
        "correctAnswerIndex": 1,
        "explanation": "The Directive Principles of State Policy in Part IV (Articles 36-51) were borrowed from the Irish Constitution of 1937."
    },
    {
        "id": "ch3-l1-q6",
        "question": "Article 368 of the Constitution deals with:",
        "options": ["The power of Parliament to amend the Constitution", "Emergency provisions", "Appointment of the President", "Fundamental duties"],
        "correctAnswerIndex": 0,
        "explanation": "Article 368 in Part XX deals with the power of Parliament to amend the Constitution and the procedure thereof."
    },
    {
        "id": "ch3-l1-q7",
        "question": "The Preamble to the Indian Constitution was amended by which Constitutional Amendment Act?",
        "options": ["1st Amendment Act, 1951", "42nd Amendment Act, 1976", "44th Amendment Act, 1978", "It has never been amended"],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment Act, 1976 added three words to the Preamble: 'Socialist', 'Secular', and 'Integrity'."
    },
    {
        "id": "ch3-l1-q8",
        "question": "Which Part of the Constitution deals with the Fundamental Rights of citizens?",
        "options": ["Part II", "Part III", "Part IV", "Part IV-A"],
        "correctAnswerIndex": 1,
        "explanation": "Part III (Articles 12 to 35) deals with Fundamental Rights. It is often called the 'Magna Carta of India'."
    },
    {
        "id": "ch3-l1-q9",
        "question": "The Residuary Powers of legislation under the Indian Constitution are vested in:",
        "options": ["State Legislatures", "The Parliament (Centre)", "Both Centre and States equally", "The Judiciary"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 248 and Entry 97 of the Union List, the residuary power of legislation belongs to the Parliament. This was borrowed from the Canadian Constitution."
    },
    {
        "id": "ch3-l1-q10",
        "question": "The idea of incorporating Fundamental Duties in the Indian Constitution was recommended by:",
        "options": ["Santhanam Committee", "Swaran Singh Committee", "Sarkaria Commission", "Rajamannar Committee"],
        "correctAnswerIndex": 1,
        "explanation": "The Swaran Singh Committee (1976) recommended the inclusion of Fundamental Duties. They were added by the 42nd Amendment Act, 1976."
    },
    {
        "id": "ch3-l1-q11",
        "question": "Article 32, described by Dr. B.R. Ambedkar as 'the heart and soul of the Constitution', provides for:",
        "options": ["Right to equality", "Right to freedom of religion", "Right to constitutional remedies", "Cultural and educational rights"],
        "correctAnswerIndex": 2,
        "explanation": "Article 32 provides the Right to Constitutional Remedies — the right to approach the Supreme Court directly for enforcement of Fundamental Rights through writs."
    },
    {
        "id": "ch3-l1-q12",
        "question": "The concept of Single Citizenship in India was borrowed from:",
        "options": ["United States of America", "British Constitution", "French Constitution", "Canadian Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "India adopted Single Citizenship from the British Constitution. Unlike the US, which has dual citizenship (federal and state), India provides only one citizenship."
    },
    {
        "id": "ch3-l1-q13",
        "question": "Which Schedule of the Indian Constitution contains provisions for the administration of Scheduled Areas and Scheduled Tribes?",
        "options": ["Fourth Schedule", "Fifth Schedule", "Sixth Schedule", "Seventh Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Fifth Schedule deals with the administration and control of Scheduled Areas and Scheduled Tribes in states other than the four northeastern states."
    },
    {
        "id": "ch3-l1-q14",
        "question": "The Seventh Schedule of the Constitution divides legislative subjects into:",
        "options": ["Two Lists", "Three Lists", "Four Lists", "Five Lists"],
        "correctAnswerIndex": 1,
        "explanation": "The Seventh Schedule contains three lists — Union List (97+1 subjects), State List (66 subjects), and Concurrent List (47 subjects) — for distribution of legislative powers between Centre and States."
    },
    {
        "id": "ch3-l1-q15",
        "question": "Article 352 of the Constitution deals with:",
        "options": ["Proclamation of National Emergency", "Failure of constitutional machinery in States (President's Rule)", "Financial Emergency", "Dissolution of State Legislature"],
        "correctAnswerIndex": 0,
        "explanation": "Article 352 empowers the President to proclaim a National Emergency when the security of India or any part thereof is threatened by war, external aggression, or armed rebellion."
    },
    {
        "id": "ch3-l1-q16",
        "question": "The concept of an independent and integrated judicial system in India was primarily borrowed from:",
        "options": ["British Constitution", "American Constitution", "Canadian Constitution", "Government of India Act, 1935"],
        "correctAnswerIndex": 0,
        "explanation": "India's single integrated judicial hierarchy (Supreme Court → High Courts → Subordinate Courts) was adapted from the British system, ensuring uniformity in administration of both union and state laws."
    },
    {
        "id": "ch3-l1-q17",
        "question": "Which Part of the Constitution contains the Directive Principles of State Policy?",
        "options": ["Part III", "Part IV", "Part IV-A", "Part V"],
        "correctAnswerIndex": 1,
        "explanation": "Part IV (Articles 36 to 51) contains the Directive Principles of State Policy, which are non-justiciable guidelines for the State in policy-making."
    },
    {
        "id": "ch3-l1-q18",
        "question": "The concept of 'Fundamental Rights enforceable by courts' (justiciable rights) was borrowed from:",
        "options": ["British Bill of Rights, 1689", "American Bill of Rights (US Constitution)", "French Declaration of Rights, 1789", "Universal Declaration of Human Rights, 1948"],
        "correctAnswerIndex": 1,
        "explanation": "The concept of justiciable Fundamental Rights was borrowed from the American Bill of Rights (first ten amendments to the US Constitution)."
    },
    {
        "id": "ch3-l1-q19",
        "question": "Which Article of the Constitution abolishes the practice of 'Untouchability' in India?",
        "options": ["Article 14", "Article 15", "Article 16", "Article 17"],
        "correctAnswerIndex": 3,
        "explanation": "Article 17 abolishes 'untouchability' and forbids its practice in any form. The enforcement of any disability arising out of untouchability is a punishable offence."
    },
    {
        "id": "ch3-l1-q20",
        "question": "The provision for three types of emergencies in the Indian Constitution — National Emergency, State Emergency, and Financial Emergency — was primarily derived from:",
        "options": ["US Constitution", "Government of India Act, 1935", "Weimar Constitution of Germany", "Both B and C"],
        "correctAnswerIndex": 3,
        "explanation": "Emergency provisions were derived from the GOI Act, 1935 (especially Section 93 for state emergencies) and the Weimar Constitution of Germany (suspension of fundamental rights during emergency)."
    },
    {
        "id": "ch3-l1-q21",
        "question": "The Tenth Schedule of the Constitution, dealing with Anti-Defection provisions, was added by which Amendment?",
        "options": ["44th Amendment Act, 1978", "52nd Amendment Act, 1985", "61st Amendment Act, 1989", "73rd Amendment Act, 1992"],
        "correctAnswerIndex": 1,
        "explanation": "The Tenth Schedule was added by the 52nd Amendment Act, 1985 to curb the menace of political defections. It was later modified by the 91st Amendment Act, 2003."
    },
    {
        "id": "ch3-l1-q22",
        "question": "The Constitution of India provides for a Parliamentary form of government rather than a Presidential form. This system was primarily borrowed from:",
        "options": ["France", "United Kingdom", "Canada", "Australia"],
        "correctAnswerIndex": 1,
        "explanation": "The Parliamentary system (Westminster model) — including the institution of PM, Council of Ministers, Cabinet government, bicameral Parliament, and dissolution of Lok Sabha — was borrowed from the UK."
    },
    {
        "id": "ch3-l1-q23",
        "question": "Which Article of the Constitution provides for the establishment of the Finance Commission?",
        "options": ["Article 270", "Article 275", "Article 280", "Article 300A"],
        "correctAnswerIndex": 2,
        "explanation": "Article 280 provides for the establishment of a Finance Commission every five years (or earlier) to recommend distribution of net proceeds of taxes between Centre and States."
    },
    {
        "id": "ch3-l1-q24",
        "question": "The concept of Advisory Jurisdiction of the Supreme Court under Article 143 was borrowed from:",
        "options": ["British Constitution", "American Constitution", "Canadian Constitution", "Irish Constitution"],
        "correctAnswerIndex": 2,
        "explanation": "The Advisory Jurisdiction of the Supreme Court (power of President to seek SC opinion on legal/constitutional questions) was borrowed from the Canadian Constitution."
    },
    {
        "id": "ch3-l1-q25",
        "question": "Which Article of the Constitution declares Hindi in Devanagari script as the Official Language of the Union?",
        "options": ["Article 340", "Article 343", "Article 350", "Article 351"],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(1) declares: 'The official language of the Union shall be Hindi in Devanagari script.'"
    },
    {
        "id": "ch3-l1-q26",
        "question": "The idea of 'Republic' in the Preamble signifies that:",
        "options": ["India has a hereditary head of state", "The head of state (President) is an elected representative, not a hereditary ruler", "India is a possession of the British Crown", "The judiciary is the supreme authority"],
        "correctAnswerIndex": 1,
        "explanation": "Republic means the head of state is elected directly or indirectly by the people, not a hereditary monarch. The President of India is indirectly elected."
    },
    {
        "id": "ch3-l1-q27",
        "question": "Part XIV-A of the Constitution, dealing with Tribunals (Articles 323A and 323B), was added by:",
        "options": ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "73rd Amendment Act, 1992", "86th Amendment Act, 2002"],
        "correctAnswerIndex": 0,
        "explanation": "The 42nd Amendment Act, 1976 added Part XIV-A containing Articles 323A (Administrative Tribunals) and 323B (Tribunals for Other Matters)."
    },
    {
        "id": "ch3-l1-q28",
        "question": "The Election Commission of India is a constitutional body established under Article:",
        "options": ["315", "320", "324", "330"],
        "correctAnswerIndex": 2,
        "explanation": "Article 324 vests the superintendence, direction, and control of elections — including preparation of electoral rolls and conduct of elections — in the Election Commission."
    },
    {
        "id": "ch3-l1-q29",
        "question": "Which Article of the Constitution provides that the executive power of the Union shall be vested in the President?",
        "options": ["Article 52", "Article 53", "Article 60", "Article 74"],
        "correctAnswerIndex": 1,
        "explanation": "Article 53(1) provides that the executive power of the Union shall be vested in the President and shall be exercised by him either directly or through officers subordinate to him."
    },
    {
        "id": "ch3-l1-q30",
        "question": "The Indian Constitution has been described as 'quasi-federal' by:",
        "options": ["Granville Austin", "K.C. Wheare", "D.D. Basu", "B.R. Ambedkar"],
        "correctAnswerIndex": 1,
        "explanation": "K.C. Wheare described the Indian Constitution as 'quasi-federal' — 'a unitary state with subsidiary federal features rather than a federal state with subsidiary unitary features.'"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch3-l2-q1",
        "question": "Consider the following statements about the Indian Constitution:\n1. It establishes India as a Sovereign Socialist Secular Democratic Republic.\n2. The words 'Socialist' and 'Secular' were part of the original Preamble adopted in 1949.\n3. The Preamble can be amended under Article 368.\nWhich of the statements given above is/are correct?",
        "options": ["1 and 3 only", "1 only", "2 and 3 only", "1, 2 and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 2 is incorrect. 'Socialist' and 'Secular' were added by the 42nd Amendment (1976), not present in the original Preamble. Statements 1 and 3 are correct — the Preamble was amended (Kesavananda Bharati)."
    },
    {
        "id": "ch3-l2-q2",
        "question": "Match the following constitutional features with their sources:\nA. Parliamentary system → 1. Australia\nB. Concurrent List → 2. UK\nC. Directive Principles → 3. Canada\nD. Federation with strong Centre → 4. Ireland\nSelect the correct answer:",
        "options": ["A-2, B-1, C-4, D-3", "A-2, B-3, C-4, D-1", "A-1, B-2, C-3, D-4", "A-3, B-1, C-2, D-4"],
        "correctAnswerIndex": 0,
        "explanation": "Parliamentary system → UK (2); Concurrent List → Australia (1); DPSPs → Ireland (4); Federation with strong Centre → Canada (3)."
    },
    {
        "id": "ch3-l2-q3",
        "question": "With reference to Article 13, consider the following statements:\n1. It provides that laws in force before the commencement of the Constitution, insofar as they are inconsistent with Fundamental Rights, shall be void.\n2. The State shall not make any law that takes away or abridges Fundamental Rights.\n3. Article 13 uses the term 'law' which includes ordinances, orders, bye-laws, rules, and regulations.\nWhich of the statements given above is/are correct?",
        "options": ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. Article 13(1) deals with pre-constitutional laws, 13(2) with post-constitutional laws, and 13(3) defines 'law' broadly."
    },
    {
        "id": "ch3-l2-q4",
        "question": "Assertion (A): India has a single integrated judicial system despite being a federal country.\nReason (R): The Supreme Court can hear appeals from any High Court in the country on both constitutional and civil/criminal matters.\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. The integrated hierarchy (SC → HC → Subordinate Courts) makes the system unified. The appellate jurisdiction of SC over all courts confirms and explains this integration."
    },
    {
        "id": "ch3-l2-q5",
        "question": "Which of the following features of the Indian Constitution are borrowed from the Government of India Act, 1935?\n1. Federal scheme\n2. Office of Governor\n3. Emergency provisions\n4. Concept of Fundamental Rights\nSelect the correct answer:",
        "options": ["1, 2 and 3 only", "1 and 3 only", "2 and 4 only", "1, 2, 3 and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Features 1, 2, and 3 were borrowed from the GOI Act, 1935. Fundamental Rights were borrowed from the American Bill of Rights, not the 1935 Act."
    },
    {
        "id": "ch3-l2-q6",
        "question": "Consider the following statements about the 42nd Amendment Act, 1976:\n1. It is often called a 'mini-Constitution' because of its wide-ranging changes.\n2. It added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble.\n3. It curtailed the power of judicial review.\n4. It added Fundamental Duties under Part IV-A.\nWhich of the above statements are correct?",
        "options": ["1, 2 and 4 only", "1, 2, 3 and 4", "1 and 2 only", "2, 3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four statements are correct. The 42nd Amendment made sweeping changes including Preamble modification, curtailing judicial review (later restored by 43rd and 44th Amendments), and adding Fundamental Duties."
    },
    {
        "id": "ch3-l2-q7",
        "question": "The concept of 'Basic Structure Doctrine' established by the Supreme Court means:",
        "options": ["Parliament cannot amend any provision of the Constitution", "Parliament can amend any provision but cannot alter the basic structure or framework", "Only the President can amend the basic structure", "The basic structure can be changed only through a national referendum"],
        "correctAnswerIndex": 1,
        "explanation": "The Basic Structure Doctrine (Kesavananda Bharati, 1973) holds that while Parliament has wide power to amend the Constitution under Article 368, it cannot destroy or alter the basic structure."
    },
    {
        "id": "ch3-l2-q8",
        "question": "Which of the following correctly describes the difference between Part III (Fundamental Rights) and Part IV (Directive Principles)?\n1. Part III is justiciable; Part IV is non-justiciable.\n2. Part III imposes negative obligations on the State; Part IV imposes positive obligations.\n3. Part III protects individual liberty; Part IV promotes social welfare.\nSelect the correct answer:",
        "options": ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements correctly distinguish Fundamental Rights (justiciable, negative, individual-centric) from DPSPs (non-justiciable, positive, welfare-oriented)."
    },
    {
        "id": "ch3-l2-q9",
        "question": "The Constitution of India is described as 'rigid' as well as 'flexible'. This is because:",
        "options": ["Some provisions can be amended by simple majority, while others require a special majority or special majority plus ratification by states", "The Constitution can only be amended by a special majority", "The Constitution cannot be amended at all", "Only Fundamental Rights require special majority"],
        "correctAnswerIndex": 0,
        "explanation": "India's amendment process has three tiers: simple majority (like creation of states), special majority (most provisions), and special majority + ratification by half the state legislatures (federal provisions)."
    },
    {
        "id": "ch3-l2-q10",
        "question": "Granville Austin described the Indian Constitution as:",
        "options": ["A purely legal document", "First and foremost a social document with its provisions designed to advance the socio-economic goals", "A revolutionary Marxist manifesto", "A carbon copy of the British Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "Granville Austin described it as 'first and foremost a social document' with the majority of its provisions aimed at furthering the goals of socio-economic revolution."
    },
    {
        "id": "ch3-l2-q11",
        "question": "Under Article 368, which of the following require ratification by legislatures of not less than half the states in addition to special majority?\n1. Manner of election of the President\n2. Extent of the executive power of Centre and States\n3. Provisions relating to Supreme Court and High Courts\n4. Any of the Lists in the Seventh Schedule\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 4 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four require ratification by half the states as they relate to federal provisions. Article 368(2) specifically lists these provisions."
    },
    {
        "id": "ch3-l2-q12",
        "question": "The Preamble to the Indian Constitution derives its authority from:",
        "options": ["The British Parliament", "The people of India as expressed through the Constituent Assembly", "The Supreme Court of India", "The President of India"],
        "correctAnswerIndex": 1,
        "explanation": "The phrase 'We, the People of India' signifies that the Constitution derives its authority from the sovereign people of India, who adopted and enacted it through the Constituent Assembly."
    },
    {
        "id": "ch3-l2-q13",
        "question": "Which of the following was NOT a recommendation of the Swaran Singh Committee (1976)?",
        "options": ["Inclusion of a chapter on Fundamental Duties", "Right to property should remain a Fundamental Right", "The Preamble should be amended to include 'Socialist' and 'Secular'", "Tribunals should be established for administrative disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The Swaran Singh Committee recommended removal of the Right to Property from Fundamental Rights. It was later moved to Article 300A (legal right) by the 44th Amendment, 1978."
    },
    {
        "id": "ch3-l2-q14",
        "question": "Consider the following about the 'Rule of Law' as applicable in India:\n1. Equality before law (Article 14)\n2. No one is above the law\n3. The Constitution is the supreme law\nWhich of the above are elements of Rule of Law in India?",
        "options": ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are elements of Rule of Law as applicable in India. Article 14 guarantees equality before law, no person is above the law (including government), and the Constitution is the supreme law."
    },
    {
        "id": "ch3-l2-q15",
        "question": "Article 51A (Part IV-A) provides for 11 Fundamental Duties. The 11th Fundamental Duty regarding education of children was added by:",
        "options": ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "86th Amendment Act, 2002", "93rd Amendment Act, 2005"],
        "correctAnswerIndex": 2,
        "explanation": "The 86th Amendment Act, 2002 added the 11th Fundamental Duty [Art 51A(k)] — 'to provide opportunities for education to children between 6 and 14 years.'"
    },
    {
        "id": "ch3-l2-q16",
        "question": "The Indian Constitution borrows the concept of 'Republic' and 'Liberty, Equality, Fraternity' from:",
        "options": ["American Revolution and British Constitution", "French Revolution by way of French Constitution", "Russian Revolution", "Glorious Revolution of England"],
        "correctAnswerIndex": 1,
        "explanation": "The ideals of Liberty, Equality, and Fraternity in the Preamble were derived from the French Revolution. Dr. Ambedkar specially emphasized these ideals."
    },
    {
        "id": "ch3-l2-q17",
        "question": "Which of the following constitutional provisions came into effect immediately on November 26, 1949 (before the full commencement on January 26, 1950)?",
        "options": ["Fundamental Rights", "Citizenship, Elections, Provisional Parliament provisions", "Emergency Provisions", "Supreme Court provisions"],
        "correctAnswerIndex": 1,
        "explanation": "Articles relating to citizenship (5-9), elections (324), provisional parliament (379-380), and temporary provisions (392-393) came into force immediately on November 26, 1949."
    },
    {
        "id": "ch3-l2-q18",
        "question": "The Indian Constitution is often called the 'bag of borrowings'. However, Dr. Ambedkar defended it by saying:",
        "options": ["India should have drafted a completely original Constitution", "No one holds any patent rights in the fundamental ideas of a Constitution", "Borrowing weakens a Constitution", "Only Western constitutions should be followed"],
        "correctAnswerIndex": 1,
        "explanation": "Dr. Ambedkar justified the borrowing: 'One likes to ask whether there can be anything new in a Constitution... The only new thing, if any, that could be said to be part of a constitution... is the form and manner in which they are arranged.'"
    },
    {
        "id": "ch3-l2-q19",
        "question": "Under the Indian Constitution, the power of judicial review is available to:",
        "options": ["Only the Supreme Court", "Both the Supreme Court and the High Courts", "Only the High Courts", "All courts including subordinate courts"],
        "correctAnswerIndex": 1,
        "explanation": "Both the Supreme Court (under Articles 13, 32, and 136) and High Courts (under Articles 226 and 227) have the power of judicial review. The SC has broader scope."
    },
    {
        "id": "ch3-l2-q20",
        "question": "Identify the INCORRECT pair from the following constitutional borrowings:",
        "options": ["Federal scheme — Government of India Act, 1935", "Emergency Provisions — Weimar Constitution of Germany", "Concurrent List — Australian Constitution", "Fundamental Duties — Canadian Constitution"],
        "correctAnswerIndex": 3,
        "explanation": "Fundamental Duties were borrowed from the Soviet Constitution (USSR), not the Canadian Constitution. All other pairs are correct."
    },
    {
        "id": "ch3-l2-q21",
        "question": "The concept of 'Sovereign' in the Preamble implies:",
        "options": ["India is subject to the control of the Commonwealth", "India is not a dominion of or subject to any external authority — it is internally and externally sovereign", "The Parliament is sovereign", "The President is sovereign"],
        "correctAnswerIndex": 1,
        "explanation": "Sovereignty means India has supreme power over its internal and external affairs, free from any external control or interference."
    },
    {
        "id": "ch3-l2-q22",
        "question": "Article 395 of the Constitution provides for:",
        "options": ["Power of Parliament to make laws", "Repeal of the Indian Independence Act 1947 and the Government of India Act 1935", "Emergency provisions", "Fundamental duties"],
        "correctAnswerIndex": 1,
        "explanation": "Article 395 repealed the Indian Independence Act, 1947, and the Government of India Act, 1935 (as adapted), establishing the new constitutional framework."
    },
    {
        "id": "ch3-l2-q23",
        "question": "The Election Commission of India was established on:",
        "options": ["26th January, 1950", "25th January, 1950", "15th August, 1947", "26th November, 1949"],
        "correctAnswerIndex": 1,
        "explanation": "The Election Commission was established on January 25, 1950 — one day before the Constitution came into full force — to prepare for the first general elections."
    },
    {
        "id": "ch3-l2-q24",
        "question": "Which of the following is a constitutional body (established by the Constitution) and NOT a statutory or executive body?",
        "options": ["NITI Aayog", "National Human Rights Commission", "Finance Commission", "National Development Council"],
        "correctAnswerIndex": 2,
        "explanation": "The Finance Commission is a constitutional body established under Article 280. NITI Aayog is an executive body, NHRC is a statutory body, and NDC was an executive body."
    },
    {
        "id": "ch3-l2-q25",
        "question": "The Constitution of India was adopted on November 26, 1949 but came into full force on January 26, 1950. January 26 was chosen because:",
        "options": ["It was Mahatma Gandhi's birthday", "It was the date of the Dandi March", "It was the anniversary of the 'Purna Swaraj' (Complete Independence) resolution of 1929", "It was the date India became a member of the UN"],
        "correctAnswerIndex": 2,
        "explanation": "January 26, 1950 was chosen because on January 26, 1930, the INC had celebrated 'Purna Swaraj Day' (Independence Day) based on the Lahore Session resolution of December 1929."
    },
    {
        "id": "ch3-l2-q26",
        "question": "The concept of a Uniform Civil Code under Article 44 is placed under:",
        "options": ["Part III (Fundamental Rights)", "Part IV (Directive Principles)", "Part IV-A (Fundamental Duties)", "Part XIV (Services under the Union and States)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 44, which directs the State to endeavor to secure a Uniform Civil Code for citizens throughout India, is a Directive Principle under Part IV."
    },
    {
        "id": "ch3-l2-q27",
        "question": "Which of the following Articles was added to Part III by the 1st Amendment Act, 1951 to save land reform laws from judicial review?",
        "options": ["Article 19(1)(g)", "Article 31A", "Article 31B and Ninth Schedule", "Both B and C"],
        "correctAnswerIndex": 3,
        "explanation": "The 1st Amendment (1951) added both Article 31A (saving certain laws from FR challenge) and Article 31B with the Ninth Schedule (placing specific laws beyond judicial review)."
    },
    {
        "id": "ch3-l2-q28",
        "question": "The Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex, or place of birth under:",
        "options": ["Article 14", "Article 15", "Article 16", "Articles 15 and 16 both"],
        "correctAnswerIndex": 3,
        "explanation": "Article 15 prohibits discrimination by the State on grounds of religion, race, caste, sex, or place of birth. Article 16 provides equality of opportunity in public employment and prohibits discrimination on similar grounds."
    },
    {
        "id": "ch3-l2-q29",
        "question": "The Constitution provides for the creation of new states and alteration of boundaries of existing states under Article 3. This can be done by:",
        "options": ["A special majority of Parliament plus ratification by all affected states", "An ordinary Act of Parliament after obtaining the views (not consent) of the affected state legislature", "Only by a Constitutional Amendment under Article 368", "By the President's order without Parliamentary approval"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 3, Parliament can alter state boundaries by a simple law. The President refers the bill to the affected state legislature for its views, but Parliament is not bound by them."
    },
    {
        "id": "ch3-l2-q30",
        "question": "Under the Indian Constitution, the power to create new All-India Services is vested in:",
        "options": ["The President of India", "The Parliament by law if Rajya Sabha passes a resolution supported by not less than two-thirds of members present and voting", "The UPSC", "The State Legislatures collectively"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 312, Parliament may by law provide for the creation of one or more All-India Services common to the Union and States, if the Rajya Sabha passes a resolution by a two-thirds majority declaring it necessary in the national interest."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch3-l3-q1",
        "question": "Consider the following statements regarding the 'Basic Structure Doctrine':\n1. It was first propounded in the Kesavananda Bharati case (1973).\n2. The Supreme Court provided an exhaustive and final list of basic structure elements.\n3. It limits Parliament's amending power under Article 368.\n4. It has been reaffirmed in the Minerva Mills case (1980).\nWhich of the statements given above are correct?",
        "options": ["1, 3 and 4 only", "1 and 3 only", "1, 2, 3 and 4", "2 and 4 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 3, and 4 are correct. Statement 2 is incorrect — the SC never provided a final/exhaustive list; the basic structure has been elaborated case by case over decades."
    },
    {
        "id": "ch3-l3-q2",
        "question": "Assertion (A): The Indian Constitution is described as 'quasi-federal' by K.C. Wheare.\nReason (R): Although the Constitution establishes a federal structure with division of powers, it tilts heavily in favor of the Centre through provisions like single citizenship, integrated judiciary, emergency powers, All-India Services, and Governor's appointment by the Centre.\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct and R correctly explains A. The unitary features like single citizenship, All-India Services, emergency powers, and centrally appointed Governors demonstrate why India is called quasi-federal."
    },
    {
        "id": "ch3-l3-q3",
        "question": "In the Golaknath case (1967), the Supreme Court held that Parliament could not amend Fundamental Rights. This was later overruled by which landmark case?",
        "options": ["Sajjan Singh v. State of Rajasthan (1965)", "Shankari Prasad v. Union of India (1951)", "Kesavananda Bharati v. State of Kerala (1973)", "Minerva Mills v. Union of India (1980)"],
        "correctAnswerIndex": 2,
        "explanation": "The Kesavananda Bharati case (1973) overruled Golaknath by a narrow 7:6 majority, holding that Parliament CAN amend any part of the Constitution including FRs, but cannot destroy the basic structure."
    },
    {
        "id": "ch3-l3-q4",
        "question": "Consider the following landmark judgments:\n1. Berubari Union case (1960) — Preamble is NOT part of the Constitution.\n2. Kesavananda Bharati case (1973) — Preamble IS part of the Constitution.\n3. LIC v. Consumer Education and Research Centre (1995) — Preamble cannot be amended.\nWhich of the above statements are correct?",
        "options": ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. The Berubari case held the Preamble is not part of the Constitution, which was overruled by Kesavananda Bharati. Statement 3 is incorrect — the Preamble CAN be amended (as done by the 42nd Amendment) subject to basic structure."
    },
    {
        "id": "ch3-l3-q5",
        "question": "The Maneka Gandhi v. Union of India (1978) case revolutionized Article 21 by:",
        "options": ["Restricting the scope of Article 21 to physical detention only", "Interpreting 'procedure established by law' to mean the procedure must be right, just, and fair (effectively reading in 'due process of law')", "Declaring Article 21 as non-justiciable", "Holding that Article 21 does not apply to non-citizens"],
        "correctAnswerIndex": 1,
        "explanation": "The Maneka Gandhi case transformed Article 21 by introducing the concept of substantive due process — the procedure established by law must be just, fair, and reasonable, not merely a procedure prescribed by enacted law."
    },
    {
        "id": "ch3-l3-q6",
        "question": "Which of the following have been identified as elements of the 'Basic Structure' of the Constitution through various Supreme Court judgments?\n1. Supremacy of the Constitution\n2. Republican and democratic form of government\n3. Secular character of the Constitution\n4. Separation of powers between legislature, executive, and judiciary\n5. Federal character of the Constitution\nSelect the correct answer:",
        "options": ["1, 2 and 3 only", "1, 3 and 4 only", "1, 2, 3, 4 and 5", "2, 4 and 5 only"],
        "correctAnswerIndex": 2,
        "explanation": "All five have been identified as basic structure elements through judgments including Kesavananda Bharati, Minerva Mills, S.R. Bommai, and others."
    },
    {
        "id": "ch3-l3-q7",
        "question": "In the S.R. Bommai v. Union of India (1994) case, the Supreme Court held that:",
        "options": ["President's Rule under Article 356 is not subject to judicial review", "Secularism is a basic feature of the Constitution and President's Rule is subject to judicial review", "States have absolute autonomy under the federal structure", "The Governor's report is final and binding for imposing President's Rule"],
        "correctAnswerIndex": 1,
        "explanation": "The S.R. Bommai case (9-judge bench) was a landmark ruling that established secularism as part of the basic structure and made President's Rule under Article 356 subject to judicial review."
    },
    {
        "id": "ch3-l3-q8",
        "question": "Statement I: The 44th Amendment Act (1978) is often described as the 'corrective amendment' to the 42nd Amendment Act.\nStatement II: The 44th Amendment restored the right to approach the Supreme Court under Article 32 during National Emergency and removed the Right to Property from Fundamental Rights.\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. The 44th Amendment (1978) reversed many controversial changes of the 42nd Amendment — it restored judicial review, made President's Rule provisions more stringent, and moved Right to Property to Article 300A (legal right)."
    },
    {
        "id": "ch3-l3-q9",
        "question": "Consider the following pairs:\n1. Writ of Habeas Corpus → Against unlawful detention\n2. Writ of Mandamus → Ordering a public official to perform duty\n3. Writ of Certiorari → Quashing the order of a lower court\n4. Writ of Quo Warranto → Questioning the legal authority of a person holding public office\n5. Writ of Prohibition → Preventing a lower court from exceeding jurisdiction\nWhich of the above pairs are correctly matched?",
        "options": ["1, 2 and 3 only", "1, 3 and 5 only", "2, 4 and 5 only", "1, 2, 3, 4 and 5"],
        "correctAnswerIndex": 3,
        "explanation": "All five pairs are correctly matched. These five writs can be issued by the Supreme Court under Article 32 and High Courts under Article 226."
    },
    {
        "id": "ch3-l3-q10",
        "question": "In the Minerva Mills v. Union of India (1980) case, the Supreme Court struck down clauses of the 42nd Amendment because:",
        "options": ["They attempted to confer unlimited amending power on Parliament by excluding judicial review of constitutional amendments", "They made Directive Principles superior to all Fundamental Rights", "Both A and B", "Neither A nor B"],
        "correctAnswerIndex": 2,
        "explanation": "The SC struck down Section 4 (giving primacy to DPSPs over all FRs) and Section 55 (barring judicial review of amendments) of the 42nd Amendment as they destroyed the basic structure."
    },
    {
        "id": "ch3-l3-q11",
        "question": "Assertion (A): India has a 'written' and 'enacted' Constitution.\nReason (R): Besides the written text, constitutional conventions, judicial interpretations, and parliamentary practices also form part of the working Constitution of India.\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
        "correctAnswerIndex": 1,
        "explanation": "Both are correct but R does not explain A. A deals with the formal written nature, while R describes additional sources of constitutional law that supplement (not define) the written document."
    },
    {
        "id": "ch3-l3-q12",
        "question": "Which of the following Constitutional Amendment Acts is/are correctly matched?\n1. 1st Amendment (1951) → Added Ninth Schedule\n2. 42nd Amendment (1976) → Added Fundamental Duties\n3. 52nd Amendment (1985) → Added anti-defection law (Tenth Schedule)\n4. 73rd Amendment (1992) → Added Panchayati Raj provisions\nSelect the correct answer:",
        "options": ["1, 2 and 3 only", "1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four are correctly matched: 1st Amendment → Ninth Schedule; 42nd → Fundamental Duties (Part IV-A); 52nd → Tenth Schedule; 73rd → Part IX (Panchayats)."
    },
    {
        "id": "ch3-l3-q13",
        "question": "The doctrine of 'Colourable Legislation' in constitutional law means:",
        "options": ["The State legislature can legislate on any subject even if it falls under the Union List", "A legislature cannot do indirectly what it cannot do directly — a law may appear to be on an authorized subject but in substance relates to an unauthorized subject", "All legislation must pass through both Houses of Parliament", "Only the Supreme Court can determine the constitutionality of a law"],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine of colourable legislation means if a legislature lacks competence on a particular subject, it cannot legislate on it indirectly by disguising it under an authorized subject. 'What cannot be done directly cannot be done indirectly.'"
    },
    {
        "id": "ch3-l3-q14",
        "question": "In the I.R. Coelho v. State of Tamil Nadu (2007) case, the Supreme Court held that:",
        "options": ["Laws placed in the Ninth Schedule are entirely immune from judicial review", "Even laws placed in the Ninth Schedule can be challenged if they violate the basic structure of the Constitution", "The Ninth Schedule was unconstitutional", "Parliament can add any law to the Ninth Schedule without limit"],
        "correctAnswerIndex": 1,
        "explanation": "The I.R. Coelho case (9-judge bench, 2007) held that laws placed in the Ninth Schedule after April 24, 1973 (date of Kesavananda Bharati judgment) can be subjected to judicial review if they violate the basic structure."
    },
    {
        "id": "ch3-l3-q15",
        "question": "Consider the following pairs of Schedules:\n1. First Schedule → Territories of States and Union Territories\n2. Second Schedule → Provisions for Salaries and Allowances\n3. Third Schedule → Forms of Oaths and Affirmations\n4. Fourth Schedule → Allocation of Seats in Rajya Sabha\nWhich of the above are correctly matched?",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "2 and 4 only", "1, 3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correctly matched: First Schedule → States and UTs; Second Schedule → Salaries/Emoluments; Third Schedule → Oaths; Fourth Schedule → Rajya Sabha allocation."
    },
    {
        "id": "ch3-l3-q16",
        "question": "The 'Doctrine of Eclipse' as applicable under Article 13 of the Constitution means:",
        "options": ["Pre-constitutional laws inconsistent with Fundamental Rights are void ab initio (dead)", "Pre-constitutional laws inconsistent with Fundamental Rights are overshadowed (eclipsed) but not dead; they can revive if the relevant Fundamental Right is amended or removed", "Post-constitutional laws inconsistent with Fundamental Rights are merely eclipsed", "The judiciary has no power to review pre-constitutional laws"],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Eclipse (Bhikaji Narain Dhakras case, 1955) applies to pre-constitutional laws — they become dormant (eclipsed) but not void ab initio. They can revive if the conflicting FR is amended."
    },
    {
        "id": "ch3-l3-q17",
        "question": "Which of the following statements about the 91st Amendment Act, 2003 is/are correct?\n1. It limited the size of the Council of Ministers to not more than 15% of the total strength of the lower house.\n2. It strengthened the anti-defection law by removing the exception for one-third splits.\nSelect the correct answer:",
        "options": ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both are correct. The 91st Amendment (2003) limited Council of Ministers size (Art 75 and 164) and amended the Tenth Schedule to remove the provision allowing splits of 1/3rd members — now only a merger involving 2/3rds of the party is recognized."
    },
    {
        "id": "ch3-l3-q18",
        "question": "The 'Doctrine of Harmonious Construction' in constitutional interpretation requires:",
        "options": ["Giving primacy to Fundamental Rights over all other provisions", "Interpreting constitutional provisions in a manner that gives effect to all provisions rather than rendering any provision redundant or void", "Strict literal interpretation of every Article", "The judiciary to defer to the executive's interpretation always"],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Harmonious Construction requires courts to interpret provisions so that effect is given to all parts of the Constitution. In Re Kerala Education Bill (1958), the SC emphasized that no provision should be rendered redundant."
    },
    {
        "id": "ch3-l3-q19",
        "question": "In the Waman Rao v. Union of India (1981) case, the Supreme Court drew a significant line regarding the Ninth Schedule. What was this ruling?",
        "options": ["All laws in the Ninth Schedule are valid regardless of when they were placed", "Laws placed in the Ninth Schedule on or after April 24, 1973 (date of Kesavananda judgment) are open to challenge on grounds of violation of basic structure", "The Ninth Schedule was declared unconstitutional", "Only laws related to land reform can be placed in the Ninth Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Waman Rao case drew the 'cut-off date' line — laws placed in the Ninth Schedule after April 24, 1973 (Kesavananda Bharati) are subject to judicial review for basic structure violations."
    },
    {
        "id": "ch3-l3-q20",
        "question": "Assertion (A): The Constitution of India is both federal and unitary depending on circumstances.\nReason (R): During normal times, the Constitution functions as a federal system with distribution of powers, but during emergencies (Article 352/356), it transforms into a virtually unitary system with enhanced central authority.\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct and R explains A. During National Emergency, Parliament can legislate on State List subjects, Fundamental Rights can be suspended, and financial provisions can be altered — effectively creating a unitary system."
    },
    {
        "id": "ch3-l3-q21",
        "question": "The Constituent Assembly debated whether India's Constitution should follow 'Procedure Established by Law' or 'Due Process of Law' in Article 21. Which members argued in favor of 'Due Process of Law' and why was it ultimately rejected?",
        "options": ["Alladi Krishnaswami Ayyar favored due process; rejected because the judiciary might obstruct social reform legislation", "B.N. Rau favored due process after visiting the US; rejected because framers feared it might give the judiciary too much power to block socio-economic legislation", "Jawaharlal Nehru favored due process; rejected because of lack of trained judges", "K.M. Munshi favored due process; rejected because the British opposed it"],
        "correctAnswerIndex": 1,
        "explanation": "B.N. Rau initially favored 'due process' after his visit to the US. However, after discussions with Justice Felix Frankfurter who cautioned against its rigidity, the framers chose 'procedure established by law' to prevent the judiciary from blocking progressive social legislation."
    },
    {
        "id": "ch3-l3-q22",
        "question": "Consider the following statements about the relationship between Fundamental Rights and Directive Principles:\n1. In Champakam Dorairajan v. State of Madras (1951), the SC held that FRs prevail over DPSPs.\n2. Through the 25th Amendment (1971), Article 31C was added giving primacy to Articles 39(b) and 39(c) over Articles 14 and 19.\n3. The 42nd Amendment tried to extend Article 31C to cover all DPSPs over all FRs.\n4. In Minerva Mills (1980), the SC struck down the 42nd Amendment's extension of Article 31C.\nWhich of the above are correct?",
        "options": ["1 and 2 only", "1, 2 and 4 only", "1, 2, 3 and 4", "2, 3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correct chronologically: Champakam established FR primacy → 25th Amendment added Art 31C for specific DPSPs → 42nd Amendment extended it to all DPSPs → Minerva Mills struck down the extension."
    },
    {
        "id": "ch3-l3-q23",
        "question": "The Eleventh Schedule (added by the 73rd Amendment, 1992) contains how many subjects that may be entrusted to Panchayats?",
        "options": ["18", "29", "20", "33"],
        "correctAnswerIndex": 1,
        "explanation": "The Eleventh Schedule contains 29 functional items (subjects) that may be entrusted to Panchayats by state legislatures, including agriculture, land improvement, education, health, etc."
    },
    {
        "id": "ch3-l3-q24",
        "question": "In the NJAC case (Supreme Court Advocates-on-Record Association v. Union of India, 2015), the Supreme Court:",
        "options": ["Upheld the 99th Amendment establishing the National Judicial Appointments Commission", "Struck down the 99th Amendment and the NJAC Act as unconstitutional for violating the basic structure (judicial independence)", "Created a new collegium system from scratch", "Held that Parliament alone should appoint judges"],
        "correctAnswerIndex": 1,
        "explanation": "The 4:1 majority struck down the 99th Amendment and NJAC Act as they impaired judicial independence, which is part of the basic structure. The collegium system was restored."
    },
    {
        "id": "ch3-l3-q25",
        "question": "Which of the following correctly represents the timeline of the evolution of the amending power controversy?\n1. Shankari Prasad (1951) — Parliament can amend FRs\n2. Sajjan Singh (1965) — Reaffirmed Shankari Prasad\n3. Golaknath (1967) — Parliament cannot amend FRs\n4. 24th Amendment (1971) — Expressly gave Parliament power to amend FRs\n5. Kesavananda Bharati (1973) — Parliament can amend FRs but not basic structure",
        "options": ["1, 2, 3, 4, 5", "1, 3, 5 only", "2, 4, 5 only", "1, 2, 4, 5 only"],
        "correctAnswerIndex": 0,
        "explanation": "The complete chronological evolution: Shankari Prasad (1951) → Sajjan Singh (1965) → Golaknath (1967) → 24th Amendment (1971) → Kesavananda Bharati (1973). All five entries are correct and in order."
    },
    {
        "id": "ch3-l3-q26",
        "question": "Article 142 empowers the Supreme Court to:",
        "options": ["Pass any decree or order necessary for doing complete justice in any cause or matter pending before it", "Remove the President", "Dissolve Parliament", "Amend the Constitution"],
        "correctAnswerIndex": 0,
        "explanation": "Article 142 gives the Supreme Court plenary jurisdiction to pass any order necessary for doing complete justice. This has been used in landmark cases including the Bhopal Gas Tragedy compensation and the Ayodhya verdict."
    },
    {
        "id": "ch3-l3-q27",
        "question": "The distinction between 'laws in force' (pre-constitutional) and 'post-constitutional laws' under Article 13 creates two separate doctrines. Identify them:",
        "options": ["Doctrine of Eclipse (pre-constitutional) and Doctrine of Severability (post-constitutional)", "Doctrine of Pith and Substance and Doctrine of Colourable Legislation", "Doctrine of Waiver and Doctrine of Laches", "Doctrine of Necessity and Doctrine of Proportionality"],
        "correctAnswerIndex": 0,
        "explanation": "Doctrine of Eclipse applies to pre-constitutional laws (they are eclipsed but not dead). Doctrine of Severability applies to post-constitutional laws (only the unconstitutional part is void; the remaining valid part survives if severable)."
    },
    {
        "id": "ch3-l3-q28",
        "question": "In the Indira Nehru Gandhi v. Raj Narain (1975) case, the Supreme Court identified which of the following as an element of the basic structure?",
        "options": ["Right to free speech", "Free and fair elections", "Right to property", "Right to travel abroad"],
        "correctAnswerIndex": 1,
        "explanation": "In this landmark case, the SC struck down clause (4) of Article 329A (inserted by 39th Amendment) and identified 'free and fair elections' as part of the basic structure of the Constitution."
    },
    {
        "id": "ch3-l3-q29",
        "question": "The 'Doctrine of Prospective Overruling' was first applied by the Supreme Court in:",
        "options": ["Golaknath v. State of Punjab (1967)", "Kesavananda Bharati v. State of Kerala (1973)", "Maneka Gandhi v. Union of India (1978)", "Minerva Mills v. Union of India (1980)"],
        "correctAnswerIndex": 0,
        "explanation": "In the Golaknath case (1967), the SC for the first time applied the American doctrine of 'prospective overruling' — the ruling that Parliament cannot amend FRs was to apply only prospectively and would not affect past amendments."
    },
    {
        "id": "ch3-l3-q30",
        "question": "Consider the following statements about the evolution of Article 21 interpretation:\n1. A.K. Gopalan v. State of Madras (1950) — Article 21 was given a narrow, literal interpretation.\n2. Maneka Gandhi v. Union of India (1978) — The procedure under Article 21 must be right, just, and fair.\n3. Olga Tellis v. Bombay Municipal Corporation (1985) — Right to livelihood was read into Article 21.\nWhich of the above statements are correct?",
        "options": ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct and represent the progressive expansion of Article 21: from narrow literal reading (Gopalan) to due process requirement (Maneka Gandhi) to inclusion of right to livelihood (Olga Tellis). This evolution transformed Article 21 into the most dynamic provision of the Constitution."
    }
];

export const CHAPTER_3_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
