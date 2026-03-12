import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch5-l1-q1",
        "question": "Which of the following countries was the first to begin its Constitution with a Preamble?",
        "options": ["Great Britain","India","United States of America","France"],
        "correctAnswerIndex": 2,
        "explanation": "The American Constitution was the first to begin with a Preamble. Many countries, including India, followed this practice."
    },
    {
        "id": "ch5-l1-q2",
        "question": "Who called the Preamble the",
        "options": ["Dr. B.R. Ambedkar","N.A. Palkhivala","K.M. Munshi","Jawaharlal Nehru"],
        "correctAnswerIndex": 1,
        "explanation": "N.A. Palkhivala, an eminent jurist and constitutional expert, called the Preamble the"
    },
    {
        "id": "ch5-l1-q3",
        "question": "The Preamble to the Indian Constitution is based on the",
        "options": ["Dr. Rajendra Prasad","Jawaharlal Nehru","Sardar Vallabhbhai Patel","Dr. B.R. Ambedkar"],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble to the Indian Constitution is based on the"
    },
    {
        "id": "ch5-l1-q4",
        "question": "How many times has the Preamble to the Constitution of India been amended so far?",
        "options": ["Never","Only once","Twice","Thrice"],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble has been amended only once so far, in 1976, by the 42nd Constitutional Amendment Act."
    },
    {
        "id": "ch5-l1-q5",
        "question": "Which three new words were added to the Preamble by the 42nd Constitutional Amendment Act (1976)?",
        "options": ["Sovereign, Democratic, Republic","Socialist, Secular, Integrity","Liberty, Equality, Fraternity","Justice, Liberty, Equality"],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Constitutional Amendment Act (1976) added three new words—Socialist, Secular and Integrity—to the Preamble."
    },
    {
        "id": "ch5-l1-q6",
        "question": "According to the Preamble, what is the source of authority of the Constitution?",
        "options": ["The Parliament of India","The President of India","The Constituent Assembly","The People of India"],
        "correctAnswerIndex": 3,
        "explanation": "The Preamble states that the Constitution derives its authority from the people of India ("
    },
    {
        "id": "ch5-l1-q7",
        "question": "What is the date of adoption of the Constitution as stipulated in the Preamble?",
        "options": ["January 26, 1950","August 15, 1947","November 26, 1949","December 9, 1946"],
        "correctAnswerIndex": 2,
        "explanation": "The Preamble stipulates November 26, 1949, as the date of adoption of the Indian Constitution."
    },
    {
        "id": "ch5-l1-q8",
        "question": "The word",
        "options": ["A dominion of the British Commonwealth","A dependency of a foreign power","An independent state with no authority above it","A protectorate state"],
        "correctAnswerIndex": 2,
        "explanation": "The word"
    },
    {
        "id": "ch5-l1-q9",
        "question": "Although India became a sovereign republic in 1950, it continued its full membership of the Commonwealth of Nations. Who was declared the head of the Commonwealth?",
        "options": ["The President of India","The Prime Minister of India","The British Crown","The Secretary-General of the UN"],
        "correctAnswerIndex": 2,
        "explanation": "In 1949, India declared the continuation of her full membership of the Commonwealth of Nations and accepted the British Crown as the head of the Commonwealth."
    },
    {
        "id": "ch5-l1-q10",
        "question": "The Indian brand of socialism as reflected in the Preamble is primarily a:",
        "options": ["Communistic Socialism","State Socialism","Democratic Socialism","Marxist Socialism"],
        "correctAnswerIndex": 2,
        "explanation": "The Indian brand of socialism is a"
    },
    {
        "id": "ch5-l1-q11",
        "question": "Democratic socialism as adopted by India believes in a:",
        "options": ["Mixed economy","Complete nationalization of all means of production","Abolition of private property","Laissez-faire (free market) economy"],
        "correctAnswerIndex": 0,
        "explanation": "Democratic socialism holds faith in a"
    },
    {
        "id": "ch5-l1-q12",
        "question": "The term",
        "options": ["The State is completely anti-religion.","The State has its own official religion.","All religions have the same status and support from the state.","The State strictly separates religion from all public affairs without any intervention."],
        "correctAnswerIndex": 2,
        "explanation": "The Indian Constitution embodies the positive concept of secularism, i.e., all religions in our country (irrespective of their strength) have the same status and support from the state."
    },
    {
        "id": "ch5-l1-q13",
        "question": "The Preamble uses the term",
        "options": ["Direct Democracy","Presidential Democracy","Representative Parliamentary Democracy","Participatory Democracy"],
        "correctAnswerIndex": 2,
        "explanation": "The Indian Constitution provides for a representative parliamentary democracy under which the executive is responsible to the legislature for all its policies and actions."
    },
    {
        "id": "ch5-l1-q14",
        "question": "Which of the following is NOT a device of Direct Democracy?",
        "options": ["Referendum","Initiative","Recall","Electoral College"],
        "correctAnswerIndex": 3,
        "explanation": "Direct democracy has four devices—Referendum, Initiative, Recall and Plebiscite. Electoral College is used in representative indirect democracy (like electing the US or Indian President)."
    },
    {
        "id": "ch5-l1-q15",
        "question": "The term",
        "options": ["An elected head called the President.","A hereditary monarch as the head of state.","A Prime Minister who holds absolute power.","A government controlled completely by religious leaders."],
        "correctAnswerIndex": 0,
        "explanation": "A republic means that the head of the state is always elected directly or indirectly for a fixed period. In India, the President is elected indirectly for 5 years."
    },
    {
        "id": "ch5-l1-q16",
        "question": "The ideal of",
        "options": ["Social Justice","Economic Justice","Political Justice","Religious Justice"],
        "correctAnswerIndex": 3,
        "explanation": "The Preamble embraces three distinct forms of justice: social, economic and political, secured through various provisions of Fundamental Rights and Directive Principles."
    },
    {
        "id": "ch5-l1-q17",
        "question": "The combination of Social Justice and Economic Justice in the Indian Constitution denotes what is popularly known as:",
        "options": ["Distributive Justice","Retributive Justice","Corrective Justice","Procedural Justice"],
        "correctAnswerIndex": 0,
        "explanation": "A combination of social justice and economic justice denotes what is known as"
    },
    {
        "id": "ch5-l1-q18",
        "question": "From which historical event has the ideal of",
        "options": ["The French Revolution (1789)","The Russian Revolution (1917)","The American War of Independence","The Industrial Revolution"],
        "correctAnswerIndex": 1,
        "explanation": "The ideal of justice—social, economic and political—has been taken from the Russian Revolution (1917)."
    },
    {
        "id": "ch5-l1-q19",
        "question": "The ideals of",
        "options": ["The Russian Revolution","The French Revolution","The American Declaration of Independence","The Irish Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The ideals of liberty, equality and fraternity in our Preamble have been taken from the French Revolution (1789-1799)."
    },
    {
        "id": "ch5-l1-q20",
        "question": "The Preamble guarantees the",
        "options": ["Movement, Residence, and Profession","Thought, Expression, Belief, Faith and Worship","Life and Personal Liberty","Speech and Assembly"],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble secures to all citizens of India liberty of thought, expression, belief, faith and worship, through their Fundamental Rights."
    },
    {
        "id": "ch5-l1-q21",
        "question": "According to the Preamble,",
        "options": ["Income and Wealth","Status and Opportunity","Results and Outcomes","Property and Taxation"],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble secures to all citizens of India equality of status and opportunity. This provision embraces three dimensions of equality—civic, political and economic."
    },
    {
        "id": "ch5-l1-q22",
        "question": "The term",
        "options": ["Strict Legal Equality","Brotherhood","Religious Harmony","Absolute Liberty"],
        "correctAnswerIndex": 1,
        "explanation": "Fraternity means a sense of brotherhood. The Constitution promotes this feeling of fraternity by the system of single citizenship."
    },
    {
        "id": "ch5-l1-q23",
        "question": "According to the Preamble, Fraternity has to assure two things. One is the",
        "options": ["The dignity of the individual","The sovereignty of the Parliament","The economic equality of citizens","The supremacy of the Constitution"],
        "correctAnswerIndex": 0,
        "explanation": "The Preamble declares that fraternity has to assure two things—the dignity of the individual and the unity and integrity of the nation."
    },
    {
        "id": "ch5-l1-q24",
        "question": "Who among the following Constitutional Assembly members commented that the Preamble expresses",
        "options": ["K.M. Munshi","Sir Alladi Krishnaswami Iyer","Dr. B.R. Ambedkar","Pandit Thakur Das Bhargava"],
        "correctAnswerIndex": 1,
        "explanation": "Sir Alladi Krishnaswami Iyer said,"
    },
    {
        "id": "ch5-l1-q25",
        "question": "Who described the Preamble as the",
        "options": ["Pandit Thakur Das Bhargava","Ernest Barker","K.M. Munshi","M. Hidayatullah"],
        "correctAnswerIndex": 2,
        "explanation": "According to K.M. Munshi, a member of the Drafting Committee of the Constituent Assembly, the Preamble is the"
    },
    {
        "id": "ch5-l1-q26",
        "question": "Which English political scientist called the Preamble a",
        "options": ["Ivor Jennings","Granville Austin","Sir Ernest Barker","K.C. Wheare"],
        "correctAnswerIndex": 2,
        "explanation": "Sir Ernest Barker, a distinguished English political scientist, paid a glowing tribute to the political wisdom of the authors of the Preamble and described it as the"
    },
    {
        "id": "ch5-l1-q27",
        "question": "In which of the following cases did the Supreme Court specifically opine that",
        "options": ["Berubari Union case (1960)","Golaknath case (1967)","Kesavananda Bharati case (1973)","LIC of India case (1995)"],
        "correctAnswerIndex": 0,
        "explanation": "In the Berubari Union case (1960), the Supreme Court specifically opined that Preamble is not a part of the Constitution."
    },
    {
        "id": "ch5-l1-q28",
        "question": "In which landmark case did the Supreme Court reverse its earlier verdict and hold that",
        "options": ["Minerva Mills case","Kesavananda Bharati case (1973)","S.R. Bommai case","Maneka Gandhi case"],
        "correctAnswerIndex": 1,
        "explanation": "In the Kesavananda Bharati case (1973), the Supreme Court rejected the earlier opinion and held that Preamble is a part of the Constitution."
    },
    {
        "id": "ch5-l1-q29",
        "question": "With regard to the legal status of the Preamble, which of the following is correct?",
        "options": ["It is a source of power to legislature and a prohibition upon the powers of legislature.","It is legally enforceable in the courts of law.","It is non-justiciable, that is, its provisions are not enforceable in courts of law.","It overrides the express provisions of Fundamental Rights."],
        "correctAnswerIndex": 2,
        "explanation": "The Preamble is neither a source of power to legislature nor a prohibition upon the powers of legislature. It is non-justiciable (not enforceable in courts of law)."
    },
    {
        "id": "ch5-l1-q30",
        "question": "Can the Preamble be amended under Article 368 of the Constitution?",
        "options": ["No, because it is not a part of the Constitution.","Yes, it can be amended, subject to the condition that no amendment is done to the",".","Yes, it can be amended to entirely alter its fundamental nature.","No, it was frozen permanently by the Kesavananda Bharati case."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court in Kesavananda Bharati case (1973) held that the Preamble can be amended, subject to the condition that no amendment is done to the"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch5-l2-q1",
        "question": "Why did the Constituent Assembly enact the Preamble *after* the entire Constitution was already enacted?",
        "options": ["Because the Supreme Court mandated it to be done chronologically last.","To ensure that the Preamble was in strict conformity with the Constitution as adopted.","Because Jawaharlal Nehru moved the Objectives Resolution at the very end of the sessions.","To allow the British Parliament a final review before its passage."],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble was enacted after the rest of the Constitution was already enacted to ensure that it was in conformity with the Constitution as adopted by the Assembly."
    },
    {
        "id": "ch5-l2-q2",
        "question": "Consider the constitutional interpretation of the word",
        "options": ["Yes, because UN resolutions are legally binding on the Indian Parliament.","Yes, because the UN Charter supersedes the Indian Constitution.","No, because the membership is extra-constitutional and does not restrict India","No, but India must seek UN approval before amending its fundamental rights."],
        "correctAnswerIndex": 2,
        "explanation": "Membership of UNO or the Commonwealth does not constitute a limitation on India"
    },
    {
        "id": "ch5-l2-q3",
        "question": "The Supreme Court in 1997 observed that the Indian brand of socialism aims primarily to:",
        "options": ["Eliminate the private sector entirely and nationalize banks.","End inequality of income, and achieve a completely egalitarian communist society.","End poverty, ignorance, disease, and inequality of opportunity.","Adopt the structural tenets of Marxism and Leninism strictly."],
        "correctAnswerIndex": 2,
        "explanation": "In 1997, the Supreme Court stated that"
    },
    {
        "id": "ch5-l2-q4",
        "question": "According to Dr. B.R. Ambedkar,",
        "options": ["A system that strictly separates wealth creation from state control.","A way of life which recognizes liberty, equality, and fraternity as the principles of life.","A democracy where only socially disadvantaged classes have the franchise.","A system where all religions play an equal role in governance."],
        "correctAnswerIndex": 1,
        "explanation": "Dr. B.R. Ambedkar defined"
    },
    {
        "id": "ch5-l2-q5",
        "question": "How does the Indian concept of",
        "options": ["India has a bicameral legislature, while Britain does not.","In India, the head of state is elected (directly/indirectly) for a fixed tenure, while Britain has a hereditary monarch.","India requires the head of government to be from the upper house.","In India, sovereign power rests solely with the judiciary rather than the monarch."],
        "correctAnswerIndex": 1,
        "explanation": "The term"
    },
    {
        "id": "ch5-l2-q6",
        "question": "The Preamble talks about",
        "options": ["Article 14 (Equality before law) and Article 15 (No discrimination)","Article 17 (Abolition of Untouchability) and Article 18 (Abolition of Titles)","Directive Principle Article 39 (equal pay for equal work)","None of the above; Fundamental Rights only ensure civic and political equality."],
        "correctAnswerIndex": 2,
        "explanation": "Fundamental Rights primarily ensure civic equality (Articles 14-18). Economic equality is promoted heavily by Directive Principles like Article 39 (securing equal right to an adequate means of livelihood and equal pay for equal work)."
    },
    {
        "id": "ch5-l2-q7",
        "question": "The concept of",
        "options": ["It is absolute for the majority religion but restricted for minorities.","It is restricted solely by the religious texts of the majority.","It is not absolute but qualified, operating within limits and reasonable restrictions mentioned in the Fundamental Rights.","It only applies to speech and not to belief or faith."],
        "correctAnswerIndex": 2,
        "explanation": "Liberty as conceived by the Preamble or Fundamental Rights is not absolute but qualified. It has to be enjoyed within the reasonable restrictions specified in the Constitution."
    },
    {
        "id": "ch5-l2-q8",
        "question": "Assertion (A): The Preamble itself cannot be enforced in a court of law to claim a substantive right (e.g., claiming",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. The Preamble is non-justiciable; you cannot directly file a writ petition solely citing a violation of the Preamble"
    },
    {
        "id": "ch5-l2-q9",
        "question": "During the Kesavananda Bharati case (1973), what was the fundamental constitutional dispute regarding the Preamble",
        "options": ["Whether the Preamble, being a part of the Constitution, could be amended under Article 368 to completely rewrite its ideals.","Whether the Supreme Court had the power to rewrite the Preamble independently.","Whether the Preamble was adopted by the Constituent Assembly properly in 1949.","Whether the Preamble could be suspended during an Emergency."],
        "correctAnswerIndex": 0,
        "explanation": "The dispute was whether the Preamble, if recognized as part of the Constitution, could be amended under Article 368. The Court held it CAN be amended, but subject to NOT destroying the"
    },
    {
        "id": "ch5-l2-q10",
        "question": "Consider the relationship between the Preamble and the rest of the Constitution:\\n1. Where there is ambiguity in a specific article, the interpretation of the Preamble can be used as an interpretative tool to guide the courts.\\n2. In a direct, irreconcilable conflict between a specific constitutional provision and the Preamble, the Preamble",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is correct (The Preamble is a guiding light for interpretation). Statement 2 is incorrect; if there is a direct express provision in the Constitution, it prevails over the general principles of the Preamble."
    },
    {
        "id": "ch5-l2-q11",
        "question": "",
        "options": ["Article 19 (Speech) and Article 51A(a) (Respecting National Flag)","Article 14 (Equality) and Article 51A(b) (Following noble ideals)","Article 17 (Abolition of Untouchability) and Article 51A(e) (Renouncing practices derogatory to the dignity of women)","Article 21 (Life) and Article 51A(g) (Protecting environment)"],
        "correctAnswerIndex": 2,
        "explanation": "The dignity of the individual is structurally upheld via Article 17 (abolition of untouchability) and Part IVA Article 51A(e), which mandates renouncing practices derogatory to the dignity of women, fostering true fraternity."
    },
    {
        "id": "ch5-l2-q12",
        "question": "According to the Supreme Court in the LIC of India case (1995), what was its renewed stand on the Preamble?",
        "options": ["It overturned Kesavananda Bharati, ruling it is NOT a part of the Constitution.","It reiterated that the Preamble is an integral part of the Constitution.","It ruled that only the","word should be removed.","It stated that the Preamble is superior to Part III of the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "In the LIC of India case (1995), the Supreme Court once again held that the Preamble is an integral part of the Constitution, reaffirming its Kesavananda stance."
    },
    {
        "id": "ch5-l2-q13",
        "question": "Match the ideals in the Preamble with their operational mechanism in the Constitution:\\nList-I\\nA. Political Justice\\nB. Civic Equality\\nC. Economic Justice\\nD. Fraternity\\n\\nList-II\\n1. Universal Adult Franchise & Articles 325, 326\\n2. Articles 14 to 18\\n3. Directive Principles (Article 39)\\n4. Single Citizenship\\n\\nCode (A-B-C-D):",
        "options": ["1-2-3-4","2-1-4-3","3-4-1-2","1-3-2-4"],
        "correctAnswerIndex": 0,
        "explanation": "Political justice is ensured via adult franchise (Art 325/326). Civic equality via Fundamental Rights (Art 14-18). Economic justice via DPSP (Art 39). Fraternity via single citizenship."
    },
    {
        "id": "ch5-l2-q14",
        "question": "Assertion (A): The word",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. The Supreme Court observed (1997) that the Constitution envisions a social, economic, and political egalitarian order. Dr. Ambedkar"
    },
    {
        "id": "ch5-l2-q15",
        "question": "Consider the phrase",
        "options": ["The establishment of the Inter-State Council.","The provision of a single Constitution for both Centre and States (except J&K historically).","Article 1 describing India as a","rather than a Federation.","The division of powers in the 7th Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "Article 1 defines India as a"
    },
    {
        "id": "ch5-l2-q16",
        "question": "What was the significance of the Berubari Union Case (1960) regarding the interpretation of the Preamble?",
        "options": ["It was the first time the Supreme Court read the","doctrine into the Preamble.","The Court ruled that while the Preamble shows the general purposes behind several provisions, it is not a part of the Constitution and therefore has no substantive power.","The Court ruled that the Preamble could be amended freely by Parliament.","It mandated the addition of the word","to the Preamble."],
        "correctAnswerIndex": 1,
        "explanation": "In Berubari (1960), the Supreme Court held that the Preamble is a key to the minds of the makers but specifically opined it was NOT part of the Constitution. This was later reversed in 1973."
    },
    {
        "id": "ch5-l2-q17",
        "question": "The term",
        "options": ["Distributive Justice","Political Justice","Social Justice","Economic Justice"],
        "correctAnswerIndex": 2,
        "explanation": "Social justice denotes equal treatment of all citizens without any social distinction based on caste, colour, race, religion, sex and so on... essentially eliminating privileges to specific classes."
    },
    {
        "id": "ch5-l2-q18",
        "question": "In the sequence of words used in the Preamble, which comes first: Justice, Liberty, Equality, or Fraternity?",
        "options": ["Liberty","Equality","Justice","Fraternity"],
        "correctAnswerIndex": 2,
        "explanation": "The exact sequence is: JUSTICE, social, economic and political; LIBERTY of thought, expression...; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY..."
    },
    {
        "id": "ch5-l2-q19",
        "question": "The philosophical vision of the Constitution, as encapsulated by the Preamble, draws heavily from",
        "options": ["Mahatma Gandhi","Sardar Patel","Jawaharlal Nehru","Dr. Rajendra Prasad"],
        "correctAnswerIndex": 2,
        "explanation": "Pandit Jawaharlal Nehru, while moving the Objectives Resolution in December 1946, eloquently described it as a declaration, a firm resolve, a pledge, and a dedication."
    },
    {
        "id": "ch5-l2-q20",
        "question": "How does the Supreme Court",
        "options": ["It makes the Preamble legally enforceable in the High Courts via Article 226.","It grants Parliament the power to bypass Fundamental Rights based on the Preamble","It does not alter its enforceability; the Preamble remains non-justiciable and cannot override direct provisions.","It elevates the Preamble to supersede the Directive Principles of State Policy."],
        "correctAnswerIndex": 2,
        "explanation": "Even though it is recognized as a part of the Constitution, the SC clarified that it remains non-justiciable, it doesn"
    },
    {
        "id": "ch5-l2-q21",
        "question": "With reference to the Preamble, what does the expression",
        "options": ["That sovereignty is shared equally between the Centre and the States.","That popular sovereignty is vested in the people of India as a whole, rather than in the Parliament or the states individually.","That India recognizes the sovereignty of the British monarch till 1950.","That only land-owning adults possess sovereign powers."],
        "correctAnswerIndex": 1,
        "explanation": "The opening words emphasize the concept of"
    },
    {
        "id": "ch5-l2-q22",
        "question": "Consider the phrase",
        "options": ["The abolition of the caste system entirely in private functions.","The opening of all public offices to every citizen without any discrimination based on hereditary titles or status.","The mandatory requirement for every citizen to undergo military service.","The equalization of all wealth and property."],
        "correctAnswerIndex": 1,
        "explanation": "A republic means (1) an elected head of state, and (2) vesting of political sovereignty in the people and absence of any privileged class (hence all public offices being open to every citizen without discrimination)."
    },
    {
        "id": "ch5-l2-q23",
        "question": "What is the structural difference between the",
        "options": ["The French Revolution only pushed for legal justice, while the Russian Revolution envisioned political justice.","The French Revolution inspired the ideals of Liberty, Equality, Fraternity; while the Russian Revolution inspired the detailed concept of Social, Economic, and Political Justice.","Both revolutions contributed exactly the same concepts of justice to the Indian Constitution.","The Russian Revolution only inspired","while the rest is French."],
        "correctAnswerIndex": 1,
        "explanation": "The ideals of Liberty, Equality, and Fraternity are specifically traced to the French Revolution, whereas the trinity of Social, Economic, and Political Justice is profoundly inspired by the Russian Revolution."
    },
    {
        "id": "ch5-l2-q24",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true and correctly linked. Liberty is not absolute; it is qualified and legally balanced against the security and order of the state through reasonable restrictions."
    },
    {
        "id": "ch5-l2-q25",
        "question": "The word",
        "options": ["The need to assert psychological and territorial integration against regional, linguistic, and secessionist demands.","The need to fight financial corruption and uphold integrity in public office.","The necessity to integrate Sikkim to the Indian Union.","To legitimize the integration of Princely states retroactively."],
        "correctAnswerIndex": 0,
        "explanation": "The phrase was expanded to"
    },
    {
        "id": "ch5-l2-q26",
        "question": "Which Articles of the Constitution explicitly ensure",
        "options": ["Articles 14 and 15","Articles 325 and 326","Articles 17 and 18","Articles 39(a) and 39(d)"],
        "correctAnswerIndex": 1,
        "explanation": "Political equality is secured via Article 325 (no person is to be declared ineligible for inclusion in electoral rolls on grounds of religion, race, caste or sex) and Article 326 (elections to the Lok Sabha and state assemblies to be on the basis of adult suffrage)."
    },
    {
        "id": "ch5-l2-q27",
        "question": "Though",
        "options": ["The Five Year Plans","The Directive Principles of State Policy (Part IV)","The preamble","Fraternity","The fundamental right to property"],
        "correctAnswerIndex": 1,
        "explanation": "Even before 1976, the Constitution had socialist content within the Directive Principles of State Policy, attempting to establish economic justice and egalitarian structures."
    },
    {
        "id": "ch5-l2-q28",
        "question": "The adoption date",
        "options": ["Yes, the entire Constitution came into operation immediately.","No, only the Preamble came into force, while the rest was deferred to Jan 26, 1950.","No, only certain provisions relating to citizenship, elections, provisional parliament, and temporary provisions came into force immediately (Article 394).","No, the Constitution only came into force after the first general elections in 1951."],
        "correctAnswerIndex": 2,
        "explanation": "While adopted on Nov 26, 1949, only articles related to citizenship (5-9), elections (324), provisional parliament (379), etc., came into force immediately. The major part commenced on Jan 26, 1950 (the"
    },
    {
        "id": "ch5-l2-q29",
        "question": "When evaluating the legal enforceability of the Preamble, which of the following analogous documents does it closely resemble in terms of judicial standing?",
        "options": ["The Fundamental Rights (Part III)","The Directive Principles of State Policy (Part IV)","The Seventh Schedule (List of subjects)","The Civil Procedure Code"],
        "correctAnswerIndex": 1,
        "explanation": "Like the Directive Principles (Part IV), the Preamble is non-justiciable. It guides the state and courts but cannot be directly enforced in a court of law to assert a substantive legal right."
    },
    {
        "id": "ch5-l2-q30",
        "question": "In the context of the Preamble, what was the primary rationale given by the Supreme Court in Kesavananda Bharati for allowing its amendment?",
        "options": ["Since the Preamble is NOT a part of the Constitution, Article 368 applies freely to it.","Since the Preamble IS a part of the Constitution, it is subject to the amending power of Article 368, provided basic features are not destroyed.","Parliament holds absolute sovereign power overriding the basic structure.","The President can amend the Preamble unilaterally through an ordinance."],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that because the Preamble was debated, voted on, and adopted by the Constituent Assembly in the same manner as other parts, it IS a part of the Constitution. Therefore, it can be amended under Article 368, barring the destruction of its"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch5-l3-q1",
        "question": "Consider the constitutional doctrine relating to the Preamble:\\n1. In the S.R. Bommai case (1994), the Supreme Court reiterated that",
        "options": ["1 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 2 is incorrect; the Preamble is non-justiciable and NEVER an independent source of power (it"
    },
    {
        "id": "ch5-l3-q2",
        "question": "With reference to the ideals of",
        "options": ["Liberty and Equality are mathematically contradictory; absolute liberty destroys equality.","Equality without liberty would kill individual initiative, and liberty without equality would produce the supremacy of the few over the many.","Liberty is an absolute right under Part III, while Equality is merely a discretionary directive under Part IV.","Liberty belongs to the political sphere, whereas Equality belongs strictly to the economic sphere."],
        "correctAnswerIndex": 1,
        "explanation": "Dr. Ambedkar stated:"
    },
    {
        "id": "ch5-l3-q3",
        "question": "The",
        "options": ["The mandatory nationalization of all heavy industries and banks.","A system striving to end poverty, ignorance, disease, and inequality of opportunity.","A system guaranteeing universal basic income independently of taxation.","The election of corporate boards directly by factory workers."],
        "correctAnswerIndex": 1,
        "explanation": "The SC defined social and economic democracy (democratic socialism) as a blend aimed specifically at ending poverty, ignorance, disease, and inequality of opportunity, rather than strict Marxist nationalization."
    },
    {
        "id": "ch5-l3-q4",
        "question": "Consider the amendment of the Preamble in 1976. Why did the Constituent Assembly originally choose NOT to include the word",
        "options": ["Because the British Parliament refused to ratify a socialist constitution.","Because Dr. Ambedkar believed the Constitution should only lay down the machinery of government, not dictate the socio-economic structure, leaving that choice to the people.","Because India was receiving massive financial aid from the capitalist USA at the time.","Because the word","inherently violates the Fundamental Right to Freedom of Religion."],
        "correctAnswerIndex": 1,
        "explanation": "Dr. Ambedkar argued against tying the Constitution to a specific economic ideology (like socialism), stating that the policy of the state, how society should be organized economically, must be left to the people to decide according to time and circumstances."
    },
    {
        "id": "ch5-l3-q5",
        "question": "Match the following judicial observations regarding the Preamble to the jurist or constitutional body that made them:\\nList-I\\nA.",
        "options": ["2-1-4-3","1-2-3-4","2-1-3-4","4-3-2-1"],
        "correctAnswerIndex": 0,
        "explanation": "Palkhivala (Identity card), Munshi (Horoscope), Berubari (Key to minds but not a part), Kesavananda (Basic Structure)."
    },
    {
        "id": "ch5-l3-q6",
        "question": "Examine the phrase",
        "options": ["By ensuring all citizens receive equal representation in the Rajya Sabha.","By the abolition of untouchability (Art 17) and the abolition of titles (Art 18) to remove artificial social hierarchies.","By mandating equal pay for equal work.","By guaranteeing free legal aid to all citizens."],
        "correctAnswerIndex": 1,
        "explanation": "Equality of"
    },
    {
        "id": "ch5-l3-q7",
        "question": "In contemporary constitutional debates regarding",
        "options": ["The Preamble grants absolute freedom of religion overriding the state","The Preamble","Liberty of belief, faith and worship","The Preamble mandates a Uniform Civil Code, which Article 25 directly opposes.","The Preamble restricts religious freedom strictly to personal prayer, while Article 25 expands it to public domains."],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble promises"
    },
    {
        "id": "ch5-l3-q8",
        "question": "Assertion (A): The phrase",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Assertion is completely false. The Constitution was NOT ratified by a direct national referendum; it was adopted by the Constituent Assembly acting on behalf of the people. Reason is theoretically debatable but factually irrelevant because India exercises representative sovereignty, not direct democratic ratification."
    },
    {
        "id": "ch5-l3-q9",
        "question": "The term",
        "options": ["The vesting of political sovereignty in a single individual.","The constitutional guarantee of a two-party system.","The absence of any privileged class, resulting in all public offices being thrown open to all citizens without any discrimination.","The absolute separation of the religious authority from the State"],
        "correctAnswerIndex": 2,
        "explanation": "A"
    },
    {
        "id": "ch5-l3-q10",
        "question": "With respect to the amendment of the Preamble in the Kesavananda Bharati case, what was the nuanced distinction made by the Supreme Court regarding",
        "options": ["The entire Preamble is unamendable because every single word is a basic feature.","The Preamble can be amended under Article 368, but the fundamental features/basic structure elements contained within it (like Sovereign, Democratic, Republic, Secular) cannot be destroyed.","The Preamble can only be amended if a new Constituent Assembly is convened.","The power to amend the Preamble lies exclusively with the Supreme Court through judicial review."],
        "correctAnswerIndex": 1,
        "explanation": "The SC held the Preamble can be amended, but the"
    },
    {
        "id": "ch5-l3-q11",
        "question": "During recent debates around the",
        "options": ["A strict command economy model that the New Economic Policy violates.","An archaic term that holds no legal or interpretative value post-1991.","An approach aimed at providing a","and",", which can coexist with market mechanisms.","A mandate to completely nationalize the agricultural sector."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court (e.g., in Excel Wear, Nakara cases) defined Indian socialism as a blend aiming to provide a decent standard of living and security, not rigid nationalization. Thus, the LPG policies do not legally violate the Preamble"
    },
    {
        "id": "ch5-l3-q12",
        "question": "Which of the following constitutional provisions most directly operationalizes the Preamble",
        "options": ["Article 15 (Prohibition of discrimination)","Article 23 (Prohibition of traffic in human beings and forced labour)","Article 29 (Protection of interests of minorities)","Article 324 (Superintendence of elections)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 23 prohibits begar, forced labour, and traffic in human beings—practices that fundamentally violate the"
    },
    {
        "id": "ch5-l3-q13",
        "question": "Consider the philosophical shift in the 42nd Amendment. By adding",
        "options": ["The economic recession of the 1970s.","The psychological and territorial threat posed by secessionist and regional movements.","The diplomatic integration of Sikkim.","The need to integrate public sector undertakings."],
        "correctAnswerIndex": 1,
        "explanation": "The word"
    },
    {
        "id": "ch5-l3-q14",
        "question": "The Preamble is declared to be",
        "options": ["The Supreme Court cannot use it to interpret ambiguous provisions of the Constitution.","It cannot be relied upon to restrict the sweeping legislative powers of Parliament unconditionally.","Citizens cannot file a petition in a court solely to enforce the ideals contained in it, as it does not grant substantive rights or powers.","It is immune from judicial review and cannot be referenced in court judgments."],
        "correctAnswerIndex": 2,
        "explanation": "Non-justiciable means it cannot be enforced in a court of law. It implies that the Preamble cannot be the sole basis for a legal claim; it acts merely as a guiding light for interpretation."
    },
    {
        "id": "ch5-l3-q15",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. American liberty was initially conceived in almost absolute terms (later shaped by judicial police powers), whereas Indian liberty (Article 19-22) is constitutionally qualified by explicitly stated"
    },
    {
        "id": "ch5-l3-q16",
        "question": "With reference to",
        "options": ["The provision of a bicameral legislature.","The existence of an independent judiciary.","The system of single citizenship.","The separation of powers."],
        "correctAnswerIndex": 2,
        "explanation": "While the US federalism promotes dual citizenship (allegiance to the State and the Centre), India adopted"
    },
    {
        "id": "ch5-l3-q17",
        "question": "The",
        "options": ["Sovereign Independent Republic","Liberty of thought, expression, belief, faith, and worship","Adequate safeguards for minorities","The word","and its assurance of national unity"],
        "correctAnswerIndex": 3,
        "explanation": "The concept of"
    },
    {
        "id": "ch5-l3-q18",
        "question": "In the context of the Preamble, consider the philosophical shift from a",
        "options": ["The Judiciary, by striking down unequal contracts.","The Executive and Legislature, guided by the Directive Principles of State Policy.","The Election Commission, by ensuring fair campaign financing.","The Finance Commission, by devolving funds uniformly to all states."],
        "correctAnswerIndex": 1,
        "explanation": "Economic justice (distributive justice) is non-justiciable and falls primarily on the Executive and Legislature to implement through policies guided by the Directive Principles (Part IV)."
    },
    {
        "id": "ch5-l3-q19",
        "question": "In 2024, debates resurfaced about removing the words",
        "options": ["Yes, Parliament can remove them using a special majority under Article 368.","Yes, because these words were added during an Emergency and lack original constituent legitimacy.","No, because the Supreme Court has declared","as an unalterable basic feature of the Constitution.","No, because the Preamble is entirely immune to any amendment whatsoever."],
        "correctAnswerIndex": 2,
        "explanation": "Since S.R. Bommai (1994), the SC has affirmed"
    },
    {
        "id": "ch5-l3-q20",
        "question": "The words",
        "options": ["The Constitution of the Fifth French Republic","The Constitution of the United States of America","The Charter of the United Nations","Both B and C"],
        "correctAnswerIndex": 3,
        "explanation": "The US Constitution begins with"
    },
    {
        "id": "ch5-l3-q21",
        "question": "Consider the mechanism through which the ideals of the Preamble act upon the fundamental rights. If an administrative action violates the principle of",
        "options": ["The Preamble directly.","Article 16 of the Constitution, which operationalizes this preamble ideal.","The Directive Principles of State Policy.","The doctrine of unalienable rights."],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble is non-justiciable. You cannot sue relying on the Preamble. The ideal of"
    },
    {
        "id": "ch5-l3-q22",
        "question": "The term",
        "options": ["International treaties require a unanimous vote in the UN General Assembly to apply to India.","Under Article 253, Parliament must pass an implementing legislation to give effect to an international treaty domestically.","The Supreme Court must ratify every international treaty before it affects Indian citizens.","State Governments have a veto over the implementation of any international treaty within their territory."],
        "correctAnswerIndex": 1,
        "explanation": "India follows a dualist system. An international treaty does not automatically become domestic law. Parliament must enact a law under Article 253 to implement treaty obligations, ensuring democratic sovereign control."
    },
    {
        "id": "ch5-l3-q23",
        "question": "Which term in the Preamble inherently negates the theory of",
        "options": ["Sovereign","Secular","Republic","Fraternity"],
        "correctAnswerIndex": 2,
        "explanation": "The term"
    },
    {
        "id": "ch5-l3-q24",
        "question": "During recent debates, some argue that adding",
        "options": ["The words are merely ornamental and have no interpretive value.","The words made explicit what was already implicitly present within the Constitution","The additions illegally altered the basic structure but are tolerated due to the passage of time.","The additions created an irreconcilable conflict with the fundamental right to property."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court noted (e.g., in SR Bommai) that secularism and socialism were already inherent in the original Constitution"
    },
    {
        "id": "ch5-l3-q25",
        "question": "Dr. B.R. Ambedkar heavily emphasized",
        "options": ["The establishment of strong centrally located public sector units.","The constitution of a common All-India Services (IAS/IPS).","The mandate of","under Article 51A(e) to promote harmony transcending religious, linguistic, and regional diversities.","The prohibition of concurrent jurisdiction in criminal law."],
        "correctAnswerIndex": 2,
        "explanation": "Article 51A(e) explicitly operationalizes"
    },
    {
        "id": "ch5-l3-q26",
        "question": "What is the primary difference in meaning between",
        "options": ["Social justice deals exclusively with caste reservations, while economic justice deals with taxation.","Social justice means removing inequalities based on social status (caste, religion, sex), whereas Economic justice involves eliminating glaring inequalities in wealth, income, and property.","Social justice is justiciable, whereas Economic justice is non-justiciable.","Social justice applies to citizens, whereas Economic justice applies to both citizens and aliens."],
        "correctAnswerIndex": 1,
        "explanation": "Social justice focuses on equal treatment regardless of birth-based social distinctions. Economic justice focuses on the non-discrimination on economic factors and the elimination of wealth/income disparities."
    },
    {
        "id": "ch5-l3-q27",
        "question": "Assertion (A): The Preamble is not a source of power to the legislature, nor is it a source of prohibition upon its powers.\\nReason (R): The Preamble is an introductory philosophical statement, not an operative part containing substantive law.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. As established in Kesavananda Bharati, while it is part of the constitution, it is merely introductory. Substantive powers to legislate, or prohibitions (like Part III), are found in the operative articles, not the Preamble."
    },
    {
        "id": "ch5-l3-q28",
        "question": "The",
        "options": ["The Doctrine of Severability","The Doctrine of Reasonable Classification","The Test of Reasonableness under Article 19","The Doctrine of Eclipse"],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch5-l3-q29",
        "question": "The Preamble uses the word",
        "options": ["","means Law,","means Order.","","means People,","means Rule.","","means Nation,","means State.","","means Freedom,","means Choice."],
        "correctAnswerIndex": 1,
        "explanation": "The term is derived from the Greek words"
    },
    {
        "id": "ch5-l3-q30",
        "question": "In the 1993 S.R. Bommai Case, the Supreme Court used the Preamble heavily to justify a consequential political action. What was this action?",
        "options": ["The nullification of the 42nd Amendment","The upholding of the dismissal of state governments that failed to protect the secular fabric of the nation.","The establishment of the National Human Rights Commission.","The privatization of core public sector industries."],
        "correctAnswerIndex": 1,
        "explanation": "In Bommai (1994), the SC upheld the dismissal of BJP governments in MP, Rajasthan, and HP following the Babri Masjid demolition, arguing that Secularism is a basic feature, and any state government actively subverting it could be dismissed under Article 356."
    }
];

export const CHAPTER_5_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
