import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch10-l1-q1",
        "question": "In the original Constitution of India (1950), which of the following were included regarding Fundamental Rights and Duties?",
        "options": ["Both Fundamental Rights and Fundamental Duties were included.","Only Fundamental Duties were included, but not Fundamental Rights.","Only Fundamental Rights were included, but not Fundamental Duties.","Neither Fundamental Rights nor Fundamental Duties were included."],
        "correctAnswerIndex": 2,
        "explanation": "Though the rights and duties of the citizens are correlative and inseparable, the original constitution contained only the fundamental rights and not the fundamental duties."
    },
    {
        "id": "ch10-l1-q2",
        "question": "The Fundamental Duties in the Indian Constitution are inspired by the Constitution of which former country?",
        "options": ["USA","USSR","Ireland","Britain"],
        "correctAnswerIndex": 1,
        "explanation": "The Fundamental Duties in the Indian Constitution are inspired by the Constitution of erstwhile USSR. Notably, none of the Constitutions of major democratic countries like USA, Canada, France, etc. specifically contain a list of duties."
    },
    {
        "id": "ch10-l1-q3",
        "question": "Which committee recommended the inclusion of a separate chapter on Fundamental Duties in the Constitution?",
        "options": ["Santhanam Committee","Swaran Singh Committee","Verma Committee","Kothari Commission"],
        "correctAnswerIndex": 1,
        "explanation": "In 1976, the Congress Party set up the Sardar Swaran Singh Committee to make recommendations about fundamental duties."
    },
    {
        "id": "ch10-l1-q4",
        "question": "During which national event was the Swaran Singh Committee set up to recommend Fundamental Duties?",
        "options": ["During the Indo-Pak War of 1971","During the internal emergency (1975–1977)","During the framing of the Constitution in 1949","During the Kargil War in 1999"],
        "correctAnswerIndex": 1,
        "explanation": "The Swaran Singh Committee was set up in 1976 during the operation of the internal emergency (1975–1977) to make recommendations and stress that citizens must be conscious of their duties."
    },
    {
        "id": "ch10-l1-q5",
        "question": "Which Constitutional Amendment Act added the Fundamental Duties to the Constitution?",
        "options": ["24th Amendment Act, 1971","42nd Amendment Act, 1976","44th Amendment Act, 1978","86th Amendment Act, 2002"],
        "correctAnswerIndex": 1,
        "explanation": "The Congress Government at Centre accepted the recommendations and enacted the 42nd Constitutional Amendment Act in 1976, which added a new Part IVA containing the Fundamental Duties."
    },
    {
        "id": "ch10-l1-q6",
        "question": "In which Part and Article of the Constitution are the Fundamental Duties specified?",
        "options": ["Part IV, Article 51","Part IVA, Article 51A","Part V, Article 52","Part III, Article 35A"],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment added a new part, namely, Part IVA to the Constitution. It consists of only one Article, that is, Article 51A which specifies a code of ten fundamental duties."
    },
    {
        "id": "ch10-l1-q7",
        "question": "How many Fundamental Duties were originally added by the 42nd Amendment Act in 1976?",
        "options": ["Eight","Ten","Eleven","Twelve"],
        "correctAnswerIndex": 1,
        "explanation": "Though the Swaran Singh Committee suggested the incorporation of eight Fundamental Duties, the 42nd Constitutional Amendment Act (1976) included ten Fundamental Duties."
    },
    {
        "id": "ch10-l1-q8",
        "question": "Which of the following recommendations of the Swaran Singh Committee was NOT accepted and thus not incorporated in the Constitution?",
        "options": ["To abide by the Constitution and respect its ideals.","To uphold and protect the sovereignty of India.","Penalty or punishment for non-compliance with or refusal to observe any of the duties.","To defend the country and render national service."],
        "correctAnswerIndex": 2,
        "explanation": "The Swaran Singh Committee recommended penalty/punishment for non-compliance and making duty to pay taxes a duty. Neither punishment nor duty to pay taxes was accepted by the Congress Party."
    },
    {
        "id": "ch10-l1-q9",
        "question": "Currently, what is the total number of Fundamental Duties listed under Article 51A?",
        "options": ["Ten","Eleven","Twelve","Thirteen"],
        "correctAnswerIndex": 1,
        "explanation": "Originally ten in 1976, one more Fundamental Duty was added in 2002. Currently, there are eleven fundamental duties in Article 51A."
    },
    {
        "id": "ch10-l1-q10",
        "question": "Which Constitutional Amendment Act added the eleventh Fundamental Duty?",
        "options": ["44th Amendment Act, 1978","73rd Amendment Act, 1992","86th Amendment Act, 2002","97th Amendment Act, 2011"],
        "correctAnswerIndex": 2,
        "explanation": "The 86th Constitutional Amendment Act, 2002 added the 11th fundamental duty regarding education for children."
    },
    {
        "id": "ch10-l1-q11",
        "question": "The eleventh Fundamental Duty mandates who to provide opportunities for education to a child or ward between the ages of six and fourteen years?",
        "options": ["The State","The Central Government","The parent or guardian","Local panchayats"],
        "correctAnswerIndex": 2,
        "explanation": "Article 51A(k) states:"
    },
    {
        "id": "ch10-l1-q12",
        "question": "According to Article 51A(a), it is the duty of every citizen of India to abide by the Constitution and respect its ideals and institutions, the National Flag, and the:",
        "options": ["National Emblem","National Anthem","National Song","Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "Article 51A(a): to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem."
    },
    {
        "id": "ch10-l1-q13",
        "question": "Article 51A(b) prescribes the duty to cherish and follow the noble ideals that inspired what?",
        "options": ["The framing of the Constitution","The national struggle for freedom","The economic development of India","The establishment of democracy"],
        "correctAnswerIndex": 1,
        "explanation": "Article 51A(b): to cherish and follow the noble ideals that inspired the national struggle for freedom."
    },
    {
        "id": "ch10-l1-q14",
        "question": "Article 51A(c) says it is the duty to uphold and protect the sovereignty, unity, and what else of India?",
        "options": ["Democracy","Republic","Integrity","Fraternity"],
        "correctAnswerIndex": 2,
        "explanation": "Article 51A(c): to uphold and protect the sovereignty, unity and integrity of India."
    },
    {
        "id": "ch10-l1-q15",
        "question": "Which of the following is a Fundamental Duty under Article 51A(d)?",
        "options": ["To pay taxes regularly.","To defend the country and render national service when called upon to do so.","To vote in every national election.","To promote international peace."],
        "correctAnswerIndex": 1,
        "explanation": "Article 51A(d): to defend the country and render national service when called upon to do so."
    },
    {
        "id": "ch10-l1-q16",
        "question": "Under Article 51A(e), citizens must promote harmony and the spirit of common brotherhood and renounce practices derogatory to the dignity of:",
        "options": ["The elderly","Women","Minorities","The Armed Forces"],
        "correctAnswerIndex": 1,
        "explanation": "Article 51A(e): to promote harmony and the spirit of common brotherhood... and to renounce practices derogatory to the dignity of women."
    },
    {
        "id": "ch10-l1-q17",
        "question": "Article 51A(f) states it is a duty to value and preserve the rich heritage of the country",
        "options": ["Economic wealth","Natural environment","Composite culture","Scientific achievements"],
        "correctAnswerIndex": 2,
        "explanation": "Article 51A(f): to value and preserve the rich heritage of the country’s composite culture."
    },
    {
        "id": "ch10-l1-q18",
        "question": "Which Fundamental Duty directs citizens to",
        "options": ["Article 51A(e)","Article 51A(f)","Article 51A(g)","Article 51A(h)"],
        "correctAnswerIndex": 2,
        "explanation": "Article 51A(g): to protect and improve the natural environment including forests, lakes, rivers and wildlife and to have compassion for living creatures."
    },
    {
        "id": "ch10-l1-q19",
        "question": "Article 51A(h) instructs citizens to develop humanism, the spirit of inquiry and reform, and what else?",
        "options": ["Scientific temper","Religious tolerance","Political awareness","Physical fitness"],
        "correctAnswerIndex": 0,
        "explanation": "Article 51A(h): to develop scientific temper, humanism and the spirit of inquiry and reform."
    },
    {
        "id": "ch10-l1-q20",
        "question": "Which duty requires citizens to safeguard public property and to abjure violence?",
        "options": ["Article 51A(g)","Article 51A(h)","Article 51A(i)","Article 51A(j)"],
        "correctAnswerIndex": 2,
        "explanation": "Article 51A(i): to safeguard public property and to abjure violence."
    },
    {
        "id": "ch10-l1-q21",
        "question": "According to Article 51A(j), citizens should strive towards excellence in all spheres of individual and collective activity, so that the nation constantly rises to higher levels of:",
        "options": ["Income and wealth","Endeavour and achievement","Military power","International influence"],
        "correctAnswerIndex": 1,
        "explanation": "Article 51A(j): to strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement."
    },
    {
        "id": "ch10-l1-q22",
        "question": "Are the Fundamental Duties applicable to foreigners living in India?",
        "options": ["Yes, they apply universally to all people in India.","No, the Fundamental Duties are confined to citizens only.","Yes, but only the duty to pay taxes.","Yes, except for diplomats."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike some Fundamental Rights which extend to all persons whether citizens or foreigners, the Fundamental Duties are confined to citizens only and do not extend to foreigners."
    },
    {
        "id": "ch10-l1-q23",
        "question": "Like the Directive Principles of State Policy, what is the legal nature of the Fundamental Duties?",
        "options": ["They are fully justiciable and automatically enforced by the Supreme Court.","They are non-justiciable; the Constitution does not provide for their direct enforcement by courts.","They are enforced directly by the Executive without needing legislation.","They are legally binding only on government employees."],
        "correctAnswerIndex": 1,
        "explanation": "Like the Directive Principles, the fundamental duties are non-justiciable. The Constitution does not provide for their direct enforcement by the courts."
    },
    {
        "id": "ch10-l1-q24",
        "question": "Even though Fundamental Duties are non-justiciable, can Parliament enforce them through legislation?",
        "options": ["No, Parliament is forbidden from making laws to enforce non-justiciable duties.","Yes, there is not legal sanction against their violation explicitly in the Constitution, but Parliament is free to enforce them by suitable legislation.","Yes, but only after receiving permission from the Supreme Court.","No, only state legislatures can enforce them."],
        "correctAnswerIndex": 1,
        "explanation": "Moreover, there is no legal sanction against their violation. However, the Parliament is free to enforce them by suitable legislation."
    },
    {
        "id": "ch10-l1-q25",
        "question": "Which of the following is categorized as a",
        "options": ["Cherishing the noble ideals of the freedom struggle.","Respecting the Constitution, National Flag, and National Anthem.","Having compassion for living creatures.","Developing humanism."],
        "correctAnswerIndex": 1,
        "explanation": "Some of them are moral duties while others are civic duties. For instance, cherishing noble ideals of freedom struggle is a moral precept, while respecting the Constitution, National Flag and National Anthem is a civic duty."
    },
    {
        "id": "ch10-l1-q26",
        "question": "Critics of the Fundamental Duties often point out that the list is not exhaustive. Which of the following duties did the Swaran Singh Committee recommend but was left OUT of the Constitution?",
        "options": ["Duty to vote","Duty to protect wildlife","Duty to pay taxes","Duty to family planning"],
        "correctAnswerIndex": 2,
        "explanation": "Critics note the list is not exhaustive... duty to cast vote, pay taxes, family planning etc are not covered. Specifically, the duty to pay taxes was recommended by Swaran Singh Committee but not included."
    },
    {
        "id": "ch10-l1-q27",
        "question": "In 1999, the Government of India set up a committee to operationalize the suggestions to teach Fundamental Duties to the citizens. Who headed this committee?",
        "options": ["Sardar Swaran Singh","Justice J.S. Verma","L.M. Singhvi","Santhanam"],
        "correctAnswerIndex": 1,
        "explanation": "The Verma Committee on Fundamental Duties of the Citizens (1999) identified the existence of legal provisions for the implementation of some of the Fundamental Duties."
    },
    {
        "id": "ch10-l1-q28",
        "question": "According to the Verma Committee (1999), which existing Act penalizes disrespect to the National Flag and National Anthem?",
        "options": ["The Indian Penal Code, 1860","The Prevention of Insults to National Honour Act, 1971","The Unlawful Activities (Prevention) Act, 1967","The Representation of the People Act, 1951"],
        "correctAnswerIndex": 1,
        "explanation": "The Verma Committee noted: The Prevention of Insults to National Honour Act (1971) prevents disrespect to the Constitution of India, the National Flag and the National Anthem."
    },
    {
        "id": "ch10-l1-q29",
        "question": "Why did the framers of the original Constitution NOT include Fundamental Duties?",
        "options": ["They forgot to incorporate them during the drafting process.","They believed that duties were implicit in the Constitution and the rights inherently carried responsibilities, negating the need for a separate list.","The British government strictly forbade the inclusion of duties.","There wasn"],
        "correctAnswerIndex": 1,
        "explanation": "The framers did not feel it necessary to incorporate the fundamental duties because they believed that the duties of the citizens are already implicit in the Constitution, woven into the rights."
    },
    {
        "id": "ch10-l1-q30",
        "question": "Who famously observed that",
        "options": ["H.R. Gokhale","Indira Gandhi","Jawaharlal Nehru","Morarji Desai"],
        "correctAnswerIndex": 1,
        "explanation": "Indira Gandhi, the then Prime Minister, justified the inclusion of fundamental duties arguing that their inclusion would help to strengthen democracy. She said,"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch10-l2-q1",
        "question": "Consider the constitutional status of Fundamental Duties in Part IVA. How did the Swaran Singh Committee initially envision their enforcement, contrary to what was finally adopted in the 42nd Amendment?",
        "options": ["The Committee suggested making them justiciable directly through Article 32.","The Committee recommended that Parliament should impose by law a penalty or punishment for any non-compliance with or refusal to observe any of the duties.","The Committee strictly advised against any legal sanctions, arguing duties must remain purely moral.","The Committee suggested giving the President unilateral power to punish citizens who ignore duties."],
        "correctAnswerIndex": 1,
        "explanation": "The Swaran Singh Committee practically suggested making duties a hybrid of moral and legal obligations by explicitly recommending that Parliament should have the power to impose a penalty or punishment for non-compliance. This recommendation, however, was rejected by the Congress government."
    },
    {
        "id": "ch10-l2-q2",
        "question": "Assertion (A): A law made by Parliament imposing a penalty for the non-observance of a Fundamental Duty cannot be challenged in a court on the ground of infringement of Fundamental Rights.\\nReason (R): The Swaran Singh Committee",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. The Swaran Singh Committee DID recommend that no law imposing such a penalty shall be called in question in any court on the ground of infringement of Fundamental Rights. However, this sweeping recommendation was REJECTED by the government and is NOT in the Constitution. Therefore, any penal law regarding duties CAN be tested against Fundamental Rights."
    },
    {
        "id": "ch10-l2-q3",
        "question": "Examine the correlation between Fundamental Rights and Fundamental Duties. The Supreme Court has ruled that Fundamental Duties can be used constitutionally to:",
        "options": ["Automatically restrict a citizen","Determine the constitutional validity of a law. If a law seeks to give effect to a duty, it may be considered","under Article 14 or 19.","Dismiss state governments under Article 356.","Suspend habeas corpus during peacetime."],
        "correctAnswerIndex": 1,
        "explanation": "In 1992, the SC ruled that in determining the constitutional validity of any law, if a court finds that the law in question seeks to give effect to a fundamental duty, it may consider such law to be"
    },
    {
        "id": "ch10-l2-q4",
        "question": "In the context of Article 51A, classify the following duty:",
        "options": ["A civic duty, because it requires active state funding to enforce.","A moral duty, because it appeals to the internal values and historical consciousness of the citizen rather than a strict legal/state-oriented obligation.","A justiciable duty, enforceable via the National Green Tribunal.","Neither; it is a Directive Principle mistakenly placed in Part IVA."],
        "correctAnswerIndex": 1,
        "explanation": "According to Laxmikanth, the duties are categorized into moral and civic. Cherishing noble ideals or valuing our rich heritage are moral precepts, relying on the conscience of the citizen. Respecting the National Flag or Constitution (which have specific penal laws attached) are civic duties."
    },
    {
        "id": "ch10-l2-q5",
        "question": "Consider the constitutional scope of the Fundamental Duties. Why is the list in Article 51A heavily criticized by legal experts as being non-exhaustive?",
        "options": ["Because it does not include duties toward the United Nations.","Because it omits several vital civic obligations universally expected in democracies, such as casting a vote, paying taxes, or family planning.","Because it failed to include the duty to protect historical monuments.","Because it does not impose duties on state legislatures."],
        "correctAnswerIndex": 1,
        "explanation": "Critics highlight that the list is not exhaustive as it does not cover other important duties like casting vote, paying taxes, family planning, etc. In fact, the Swaran Singh Committee explicitly recommended the duty to pay taxes, which was rejected."
    },
    {
        "id": "ch10-l2-q6",
        "question": "The Justice Verma Committee (1999) on Fundamental Duties extensively documented existing legal provisions that implement Article 51A. Which of the following laws was cited as operationalizing the duty",
        "options": ["The Protection of Civil Rights Act (1955).","The Representation of the People Act (1951).","The Prevention of Insults to National Honour Act (1971).","The Unlawful Activities (Prevention) Act (1967)."],
        "correctAnswerIndex": 2,
        "explanation": "The Verma Committee noted that The Prevention of Insults to National Honour Act (1971) prevents disrespect to the Constitution of India, the National Flag, and the National Anthem, thereby legally enforcing Article 51A(a)."
    },
    {
        "id": "ch10-l2-q7",
        "question": "Article 51A(g) directs citizens to protect and improve the natural environment, including forests, lakes, rivers, and wildlife. According to the Verma Committee, which of the following is an existing penal law that actually enforces this specific fundamental duty?",
        "options": ["The Indian Forest Act (1927) and the Wildlife (Protection) Act (1972).","The Right to Information Act (2005).","The Forest Rights Act (2006).","The Land Acquisition Act (1894)."],
        "correctAnswerIndex": 0,
        "explanation": "The Verma Committee cited several acts, including the Wildlife (Protection) Act (1972) which prohibits trade in rare species, and the Forest (Conservation) Act (1980), which check indiscriminate deforestation. These effectively give legal teeth to the duty mentioned in 51A(g)."
    },
    {
        "id": "ch10-l2-q8",
        "question": "Assertion (A): The Fundamental Duties found in Part IVA are legally binding on all persons residing within the territory of India.\\nReason (R): Fundamental Rights, Directive Principles, and Fundamental Duties form a comprehensive code for all inhabitants—citizens and aliens alike—to ensure national integrity.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. Unlike some Fundamental Rights (like Art 14 or 21) which apply to all persons, Fundamental Duties are expressly confined to CITIZENS ONLY and do not extend to foreigners. The very first line of Article 51A says:"
    },
    {
        "id": "ch10-l2-q9",
        "question": "Which of the following Fundamental Duties specifically aims to eradicate practices like untouchability, casteism, and dowry through structural and social reform initiated by citizens?",
        "options": ["Article 51A(a): To abide by the Constitution.","Article 51A(e): To promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities.","Article 51A(h): To develop scientific temper.","Article 51A(c): To uphold sovereignty and integrity."],
        "correctAnswerIndex": 1,
        "explanation": "Article 51A(e) appeals to the citizenry to promote harmony and brotherhood transcending religious, linguistic, and regional/sectional diversities. This implicitly calls for the eradication of entrenched prejudices like casteism and communalism to build a unified fraternity."
    },
    {
        "id": "ch10-l2-q10",
        "question": "Examine the language of the Fundamental Duties. Critics argue that they suffer from a major linguistic defect which makes their legal enforcement practically impossible without further elaboration. What is this defect?",
        "options": ["They are exclusively written in Sanskrit.","They use vague, ambiguous, and archaic terms (e.g.,",",",",",") that are difficult for an average citizen to define precisely.","They frequently contradict the Fundamental Rights explicitly.","They are too precise, leaving no room for judicial interpretation."],
        "correctAnswerIndex": 1,
        "explanation": "Critics note that some of the duties are vague, ambiguous, and difficult to be understood by the common man. Words like"
    },
    {
        "id": "ch10-l2-q11",
        "question": "Consider the duty under Article 51A(d):",
        "options": ["Article 51A(d) repealed Article 23(2).","Article 51A(d) makes the State","Article 51A(d) places a moral/civic obligation on the citizen, which provides the philosophical and constitutional justification for the State to actually enact a law imposing compulsory service under Article 23(2).","Article 51A(d) applies only to the military, while Article 23(2) applies only to civilians."],
        "correctAnswerIndex": 2,
        "explanation": "Article 23(2) allows the State to impose compulsory national service (an exception to forced labor). Article 51A(d) creates the reciprocal duty for the citizen to render that service when called. They are complementary; the duty justifies the State"
    },
    {
        "id": "ch10-l2-q12",
        "question": "The Verma Committee (1999) noted that the Representation of People Act (1951) acts as an enforcement mechanism for several Fundamental Duties. In what specific way does the RPA (1951) enforce the duties of promoting harmony and secularism?",
        "options": ["By making voting mandatory for all citizens.","By providing for the disqualification of members of Parliament or state legislature for indulging in corrupt practice, including soliciting votes on the ground of religion or promoting enmity between different classes.","By reserving 33% of seats in Parliament for minorities.","By forcing all political parties to merge into a single national front."],
        "correctAnswerIndex": 1,
        "explanation": "The Verma Committee observed that the RPA (1951) disqualifies MPs/MLAs for corrupt practices, which explicitly includes seeking votes on the grounds of religion or promoting enmity between classes. This legally enforces the duty in Article 51A(e)—promoting harmony and common brotherhood."
    },
    {
        "id": "ch10-l2-q13",
        "question": "Article 51A(f) mandates the preservation of India",
        "options": ["The Right to Information Act, 2005.","The Ancient Monuments and Archaeological Sites and Remains Act, 1958.","The Copyright Act, 1957.","The Special Marriage Act, 1954."],
        "correctAnswerIndex": 1,
        "explanation": "To give teeth to the duty of preserving the rich heritage of the country"
    },
    {
        "id": "ch10-l2-q14",
        "question": "In the 86th Amendment Act (2002), Article 51A(k) was added, making it a duty to provide opportunities for education. This duty was added concurrently with which other significant constitutional changes?",
        "options": ["The addition of Article 21A (Fundamental Right to Education) and the amendment of Article 45 (DPSP regarding early childhood care).","The repeal of Article 29 and 30 (Minority educational rights).","The introduction of the 10th Schedule (Anti-Defection Law).","The passing of the Right to Education (RTE) Act, 2009 simultaneously."],
        "correctAnswerIndex": 0,
        "explanation": "The 86th Amendment (2002) was a comprehensive package for education: It made elementary education a justiciable Fundamental Right (Art 21A), changed the DPSP in Art 45 (shifting focus to 0-6 years), and added the 11th Fundamental Duty (Art 51A(k)) for parents/guardians to provide opportunities."
    },
    {
        "id": "ch10-l2-q15",
        "question": "Which of the following Fundamental Duties was NOT part of the original Constitutional package added in 1976 during the Emergency?",
        "options": ["To safeguard public property and to abjure violence.","To provide opportunities for education to a child or ward between the age of six and fourteen years.","To uphold and protect the sovereignty, unity and integrity of India.","To develop the scientific temper, humanism and the spirit of inquiry and reform."],
        "correctAnswerIndex": 1,
        "explanation": "The duty to provide educational opportunities (Article 51A(k)) was added much later, in 2002, by the 86th Constitutional Amendment Act. All the other options were part of the original 10 duties inserted in 1976 by the 42nd Amendment."
    },
    {
        "id": "ch10-l2-q16",
        "question": "Assertion (A): The Fundamental Duties serve as a reminder to the citizens that while enjoying their rights, they should also be conscious of duties they owe to their country, society, and fellow citizens.\\nReason (R): The Indian Constitution follows the Universal Declaration of Human Rights model exactly, treating rights and duties as legally symmetrical and equally enforceable without specific legislation.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is true (this is the philosophical basis described by the SC and textbooks). Reason R is false; rights and duties are NOT legally symmetrical in India. Rights (Part III) are directly enforceable and justiciable; Duties (Part IVA) are non-justiciable and require specific parliamentary legislation to be penalised."
    },
    {
        "id": "ch10-l2-q17",
        "question": "Which Fundamental Duty is often invoked by the Supreme Court when hearing Public Interest Litigations (PILs) regarding the failure of municipalities to clear garbage or prevent industrial pollution in rivers?",
        "options": ["Article 51A(a): To respect the Constitution.","Article 51A(g): To protect and improve the natural environment.","Article 51A(c): To uphold sovereignty.","Article 51A(d): To defend the country."],
        "correctAnswerIndex": 1,
        "explanation": "Article 51A(g) ("
    },
    {
        "id": "ch10-l2-q18",
        "question": "According to H.R. Gokhale (former Law Minister), what was the primary political rationale for adding the chapter on Fundamental Duties during the Emergency in 1976?",
        "options": ["To align the Constitution strictly with the United States Constitution.","Because in post-independence India, people laid absolute emphasis on rights while demonstrating a lack of respect for their civic duties and national institutions.","To automatically override all Fundamental Rights of the opposition parties.","To pave the way for a transition to a purely communist state."],
        "correctAnswerIndex": 1,
        "explanation": "H.R. Gokhale stated that post-independence, people laid all emphasis on rights but forgot their duties. The insertion of Part IVA was meant to remedy this imbalance and serve as a constant reminder that citizens must observe certain basic norms of democratic conduct."
    },
    {
        "id": "ch10-l2-q19",
        "question": "In the context of protecting weaker sections, how does Article 51A(e) specifically address the status of women in society?",
        "options": ["It mandates 33% reservation for women in Parliament.","It directs the State to provide equal pay for equal work.","It obligates citizens to",".","It makes the practice of dowry a capital offense."],
        "correctAnswerIndex": 2,
        "explanation": "Article 51A(e) explicitly enjoins citizens to promote harmony... AND"
    },
    {
        "id": "ch10-l2-q20",
        "question": "Which political party heavily criticized the inclusion of Fundamental Duties in 1976, although they chose NOT to remove them when they came to power leading to the 44th Amendment in 1978?",
        "options": ["The Indian National Congress","The Communist Party of India (Marxist)","The Janata Party","The Swatantra Party"],
        "correctAnswerIndex": 2,
        "explanation": "The Janata Party strongly opposed the 42nd Amendment (1976) during the Emergency. However, when the Morarji Desai-led Janata government passed the 43rd and 44th Amendments to undo the Emergency excesses, they chose NOT to annul Part IVA, implicitly acknowledging the utility and harmlessness of the Fundamental Duties."
    },
    {
        "id": "ch10-l2-q21",
        "question": "The duty to",
        "options": ["The non-violent Independence movement led by Mahatma Gandhi.","Rampant communal riots, Naxalite violence, and destruction of public property during strikes and bandhs.","India","The need to ban the possession of all civilian firearms."],
        "correctAnswerIndex": 1,
        "explanation": "The mandate to"
    },
    {
        "id": "ch10-l2-q22",
        "question": "Which of the following legal doctrines is NOT associated with the non-justiciable nature of Part IVA (Fundamental Duties)?",
        "options": ["They cannot be enforced by the issuance of a Writ of Mandamus.","Their violation alone does not automatically constitute a criminal offense without a backing statute.","The Supreme Court can strike down any parliamentary law that attempts to enforce them.","The courts can use them as an interpretative tool to resolve ambiguities in statutes."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court will NOT strike down a law attempting to enforce a duty. In fact, Parliament is absolutely free to enact laws to penalize the violation of duties (e.g., Flag Code, Wildlife Act). Statements A, B, and D are true characteristics of their non-justiciable nature."
    },
    {
        "id": "ch10-l2-q23",
        "question": "Article 51A(h) urges the development of",
        "options": ["Funding space exploration (ISRO).","Promoting superstitions, black magic, or irrational orthodox practices via state-sponsored education.","Establishing the National Research Foundation.","Encouraging students to debate historical events."],
        "correctAnswerIndex": 1,
        "explanation": "Promoting superstition or black magic directly contradicts the"
    },
    {
        "id": "ch10-l2-q24",
        "question": "Consider the constitutional structure: Part III (Fundamental Rights), Part IV (Directive Principles), Part IVA (Fundamental Duties). What does the addition of Part IVA primarily signify regarding the maturation of the Indian constitutional state?",
        "options": ["A shift from a democratic state to a totalitarian state.","A realization that the state","rights (FRs) must be balanced with the citizens","The complete failure of the Fundamental Rights framework.","An alignment with the capitalist ideologies of the Western bloc."],
        "correctAnswerIndex": 1,
        "explanation": "Part IVA was added to complete the constitutional framework. It signifies that rights are not absolute but come with a reciprocal responsibility; a healthy democracy requires citizens not just to claim rights from the state (FRs) or demand welfare (DPSPs), but to actively contribute to national well-being and social harmony."
    },
    {
        "id": "ch10-l2-q25",
        "question": "The Verma Committee observed that the Unlawful Activities (Prevention) Act, 1967 (UAPA) provides teeth to which specific Fundamental Duty?",
        "options": ["Article 51A(f) (composite culture).","Article 51A(c) (uphold sovereignty, unity and integrity of India).","Article 51A(h) (scientific temper).","Article 51A(j) (excellence in all spheres)."],
        "correctAnswerIndex": 1,
        "explanation": "The UAPA (1967) was specifically enacted to combat organizations and individuals involved in activities that threaten the sovereignty and territorial integrity of India. Thus, it serves as the strict penal enforcement of the duty mentioned in Article 51A(c)."
    },
    {
        "id": "ch10-l2-q26",
        "question": "Which of the following is NOT a Fundamental Duty listed in the Constitution of India?",
        "options": ["To safeguard public property.","To promote international peace and security.","To defend the country when called upon.","To develop humanism."],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch10-l2-q27",
        "question": "The duty",
        "options": ["Only military expenditure.","Only space exploration.","Arts, sports, science, international competitions, and recognizing citizens with awards like Bharat Ratna or Padma Shri.","Only religious propagation."],
        "correctAnswerIndex": 2,
        "explanation": "Because citizens have a duty to strive for excellence so the nation rises to"
    },
    {
        "id": "ch10-l2-q28",
        "question": "Assertion (A): The Fundamental Duties were incorporated during the Emergency to suppress the democratic protests led by Jayaprakash Narayan.\\nReason (R): The Swaran Singh Committee argued that citizens were abusing their freedoms, necessitating a constitutional reminder of their duties to the nation.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are historically true. The Indira Gandhi government, facing the massive JP movement (which they termed anti-national/anarchic), used the internal Emergency to set up the Swaran Singh Committee. The explicit rationale was to remind protesting citizens that their democratic rights were subject to their duties to maintain national order and sovereignty."
    },
    {
        "id": "ch10-l2-q29",
        "question": "Does the Constitution mandate the State to proactively *educate* citizens about their Fundamental Duties?",
        "options": ["Yes, Article 51A contains an explicit clause directing schools to teach it.","No, the Constitution is silent on the mechanism; but the Justice Verma Committee strongly recommended making citizens aware of these duties through education and media.","Yes, the 86th Amendment made it a Fundamental Right to be taught Duties.","No, and the Supreme Court has barred the State from spending money on teaching Duties."],
        "correctAnswerIndex": 1,
        "explanation": "The text of Article 51A merely lists the duties. It does not contain a specific mandate on HOW to enforce or teach them. However, judicial activism and committees like the Verma Committee (1999) strongly recommended incorporating them in school curricula and widespread media campaigns to operationalize them."
    },
    {
        "id": "ch10-l2-q30",
        "question": "Which feature makes the Indian Constitution",
        "options": ["Unlike India, Western democracies rely strictly on unwritten duties and refuse to enact penal laws.","Major Western democratic constitutions generally do not contain an exhaustive codified list of duties of citizens, relying instead on statutory laws and civic traditions.","Western democracies strictly place duties in their Preambles.","Western democracies allow foreigners to be bound by civic duties, unlike India."],
        "correctAnswerIndex": 1,
        "explanation": "As noted in Laxmikanth, none of the Constitutions of major democratic countries like USA, Canada, France, Germany, Australia, etc. specifically contain a list of duties of citizens. They focus on rights, leaving duties to be derived from ordinary laws. The socialist countries (like the USSR) were the primary models for including a specific chapter on duties."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch10-l3-q1",
        "question": "Consider the interplay between Article 51A (Fundamental Duties) and Article 21 (Right to Life) as established by the Supreme Court in the landmark M.C. Mehta vs. Union of India (Kanpur Tanneries) case. How does the Court utilize Part IVA in environmental jurisprudence?",
        "options": ["The Court ruled that Article 51A(g) is a direct, enforceable command that overrides Article 21, allowing immediate closure of polluting industries without due process.","The Court interpreted the citizen","to protect and improve the natural environment","The Court declared that because duties are non-justiciable, they cannot be used to interpret Fundamental Rights like Article 21.","The Court held that Article 51A only applies to the State"],
        "correctAnswerIndex": 1,
        "explanation": "In cases like M.C. Mehta, the Supreme Court masterfully linked Part IVA with Part III. It ruled that the duty of citizens to protect the environment (51A(g)) imposes a concomitant obligation on the State to enforce this protection, thereby reading the right to a healthy environment directly into the Right to Life (Article 21)."
    },
    {
        "id": "ch10-l3-q2",
        "question": "In the AIIMS Students Union vs. AIIMS (2001) case, a 3-judge bench of the Supreme Court made a profound observation regarding the constitutional status of Fundamental Duties compared to Fundamental Rights. What was the crux of this observation?",
        "options": ["Fundamental Duties must always yield to Fundamental Rights in cases of irreconcilable conflict.","Fundamental Duties are not legally enforceable, making Rights the singular pillar of the Constitution.","Fundamental Duties are","in Part IVA, and though not enforceable by a writ of mandamus, they provide vital guidance for interpreting the Constitution, balancing rights, and cannot be ignored by the courts.","Fundamental Duties are superior to Fundamental Rights and can be used to suspend Rights during national emergencies."],
        "correctAnswerIndex": 2,
        "explanation": "The SC categorically stated that though duties are not explicitly enforceable by writs (unlike Part III), they are a vital aid for constitutional interpretation. The court emphasized that Rights and Duties are fundamentally balanced; one cannot claim absolute rights without acknowledging the reciprocal duties to the nation."
    },
    {
        "id": "ch10-l3-q3",
        "question": "Examine the National Anthem controversy in Shyam Narayan Chouksey v. Union of India (2016-2018). The Supreme Court initially mandated standing for the National Anthem in cinemas under Article 51A(a). However, it later modified this order. What is the current, settled legal position deriving from this case regarding the *enforceability* of 51A(a) through judicial edict alone?",
        "options": ["The Supreme Court maintained the strict mandate, ruling that Article 51A(a) empowers the Court to create new criminal offenses for disrespect.","The Court modified its stance, ruling that while respecting the Anthem is a duty, compelling citizens to stand in cinemas via a judicial order overreaches; enforcement requires specific executive/legislative action (like amending the Prevention of Insults to National Honour Act).","The Court ruled the National Anthem is entirely optional and Article 51A(a) is void.","The Court held that only government officials are bound by Article 51A(a)."],
        "correctAnswerIndex": 1,
        "explanation": "The SC initially (2016) ordered mandatory playing and standing in cinemas relying heavily on Art 51A(a). However, in 2018, it modified the order, recognizing that"
    },
    {
        "id": "ch10-l3-q4",
        "question": "Assertion (A): The Constitution allows Parliament to enact a law that penalizes the non-performance of ANY of the eleven Fundamental Duties.\\nReason (R): The Swaran Singh Committee’s recommendation giving Parliament absolute immunity from judicial review for laws penalizing the breach of Fundamental Duties was rejected by the 42nd Amendment.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 1,
        "explanation": "Both statements are true, but R does not fully explain A. Parliament CAN enact a law penalizing non-performance (Assertion A is true, e.g., Flag Code). The Swaran Singh committee DID recommend judicial immunity for such laws, which the government rejected (Reason R is true). However, the reason Parliament can penalize is based on its inherent sovereign legislative power, not merely the rejection of the immunity clause."
    },
    {
        "id": "ch10-l3-q5",
        "question": "Consider Article 51A(b):",
        "options": ["It conflicts directly with the Right to Equality under Article 14.","The","is not a legally defined event in the Constitution.","The phrase","is highly subjective, politically malleable, and lacks a definitive, codified consensus, making it nearly impossible to translate into precise penal statutes.","It requires citizens to actively join political parties."],
        "correctAnswerIndex": 2,
        "explanation": "This highlights the primary criticism of Part IVA. Many duties (like 51A(b)) are moral precepts woven in poetic but legally vague language. What constitutes a"
    },
    {
        "id": "ch10-l3-q6",
        "question": "Article 51A(f) mandates citizens",
        "options": ["They are contradictory; Article 51A(f) seeks to homogenize culture while Articles 29/30 seek to isolate minorities.","They are complementary; while Articles 29/30 protect specific minority scripts/cultures as rights, Article 51A(f) places a duty on ALL citizens to value this resulting diverse mosaic (the composite whole) as a shared national heritage.","Article 51A(f) supersedes Articles 29 and 30 in cases regarding educational institutions.","The Supreme Court has ruled that","only refers to the majority religion"],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch10-l3-q7",
        "question": "In the context of the Swaran Singh Committee recommendations, what was the underlying political ideology that drove the Congress government (during the Emergency) to feel the absolute necessity of adding Part IVA?",
        "options": ["A shift toward classical laissez-faire capitalism where the State minimizes its role.","A desire to strictly emulate the unwritten constitutional conventions of the United Kingdom.","The belief, largely inspired by the socialist Soviet model, that the State was facing an existential threat from citizens asserting","democratic rights without acknowledging their socio-political obligations to the State","A requirement stipulated by the United Nations to receive international aid."],
        "correctAnswerIndex": 2,
        "explanation": "The Emergency was characterized by extreme state centralization and suspension of civil liberties. The Indira Gandhi government, facing massive protests, felt that citizens were treating rights as"
    },
    {
        "id": "ch10-l3-q8",
        "question": "Which of the following is a direct, practical consequence of the non-justiciable nature of Fundamental Duties, as interpreted by the judiciary?",
        "options": ["If a citizen flagrantly violates a Fundamental Duty, they automatically lose their citizenship.","A citizen cannot seek a writ of mandamus from the Supreme Court under Article 32 to compel another citizen or the State to perform a Fundamental Duty.","The Parliament is constitutionally barred from enacting any laws that relate to the subjects mentioned in Part IVA.","The President can issue an ordinance to enforce duties without Parliamentary approval."],
        "correctAnswerIndex": 1,
        "explanation": "Because they are non-justiciable (like Directive Principles), they lack direct legal enforceability through the courts. Therefore, you cannot approach the Supreme Court strictly asking for a writ (like Mandamus) to force a citizen to, say,"
    },
    {
        "id": "ch10-l3-q9",
        "question": "The duty to",
        "options": ["He vehemently opposed any mention of duties, stating Indians possessed inherent civic sense.","He argued that explicit duties were only necessary for marginalized communities.","He believed duties were implicitly woven into the fabric of the rights themselves and enforcing explicit duties would dilute the absolute nature of the Fundamental Rights being granted.","He wanted duties to override all Fundamental Rights from the inception."],
        "correctAnswerIndex": 2,
        "explanation": "Ambedkar and the framers felt that rights intrinsically carry correlative duties. To explicitly codify strong duties (especially penal ones) within the rights chapter would give the State a dangerous tool to arbitrarily restrict those crucial foundational rights. They preferred leaving civic obligations to ordinary law."
    },
    {
        "id": "ch10-l3-q10",
        "question": "Examine the 86th Amendment Act of 2002. It altered Part III, Part IV, and Part IVA simultaneously. Which of the following correctly outlines this trifecta of changes regarding education?",
        "options": ["Art 21A (Right for 0-6 years); Art 45 (Duty for 6-14 years); Art 51A(k)(DPSP for universities).","Art 21A (Right for 6-14 years); Art 45 (DPSP for 0-6 years); Art 51A(k) (Parent","Art 21A (Parent","Art 21A (DPSP for universities); Art 45 (Parent"],
        "correctAnswerIndex": 1,
        "explanation": "The trifecta: 1. Part III: Inserted Art 21A (Fundamental Right to free/compulsory education for children aged 6 to 14). 2. Part IV: Substituted Art 45 (State DPSP to provide early childhood care up to age 6). 3. Part IVA: Added Art 51A(k) (Fundamental Duty of the parent/guardian to provide educational opportunities to their child aged 6 to 14)."
    },
    {
        "id": "ch10-l3-q11",
        "question": "In the Bijoe Emmanuel vs. State of Kerala (1986) case regarding students belonging to the Jehovah",
        "options": ["The Court ruled that the duty under 51A(a) to respect the National Anthem automatically overrides religious freedoms under Article 25, compelling the students to sing.","The Court held that Article 51A(a) was unconstitutional as it violated the basic structure.","The Court ruled that standing respectfully during the Anthem fulfills the duty to","under 51A(a) and the Prevention of Insults to National Honour Act; forcing them to sing against their sincerely held religious beliefs violates Article 19(1)(a) and Article 25.","The Court expelled the students, stating that duties apply equally to children without exception."],
        "correctAnswerIndex": 2,
        "explanation": "A landmark judgment. The SC ruled that the children (who stood respectfully in silence but refused to sing due to deep religious convictions) did not commit any offense under the 1971 Act, nor did they violate the duty under 51A(a). The Court upheld their Right to Freedom of Speech (to remain silent) and Freedom of Religion (Art 25), proving that duties do not extinguish deeply held constitutional rights when respect is otherwise demonstrated."
    },
    {
        "id": "ch10-l3-q12",
        "question": "Consider the Verma Committee (1999) observation regarding the enforcement of the duty to",
        "options": ["Filing a direct writ of Mandamus under Article 32 citing only Article 51A(g).","Invoking the original jurisdiction of the Supreme Court under Article 131.","Utilizing Public Interest Litigation (PIL) under Article 32/226 to seek enforcement of Article 21, supplemented conceptually by Article 51A(g).","Filing a private criminal complaint under the Indian Penal Code for treason."],
        "correctAnswerIndex": 2,
        "explanation": "Because duties (51A) are non-justiciable, a citizen cannot file a writ citing ONLY a duty. The most powerful tool has been the PIL. Activists (like M.C. Mehta) file PILs alleging a violation of the Right to Life (Art 21) due to pollution, and courts use the State"
    },
    {
        "id": "ch10-l3-q13",
        "question": "Article 51A(e) directs citizens to",
        "options": ["The Dowry Prohibition Act, 1961.","The Commission of Sati (Prevention) Act, 1987.","The Protection of Women from Domestic Violence Act, 2005.","The Hindu Succession (Amendment) Act, 2005."],
        "correctAnswerIndex": 1,
        "explanation": "The Commission of Sati (Prevention) Act (1987) was passed to strictly criminalize the glorification and practice of Sati. The constitutional validity and moral imperative for such severe legislation against a claimed"
    },
    {
        "id": "ch10-l3-q14",
        "question": "Assertion (A): The Fundamental Duties were heavily inspired by the socialist constitutions, particularly that of the erstwhile USSR.\\nReason (R): Socialist constitutions traditionally emphasize that the citizen",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Indira Gandhi"
    },
    {
        "id": "ch10-l3-q15",
        "question": "If Parliament enacts a law compelling all citizens between the ages of 18 and 21 to undergo mandatory military training, citing Article 51A(d) (",
        "options": ["The law would be struck down immediately as Article 51A is non-justiciable.","The State would defend it by stating that Article 51A(d) constitutes a","on Article 19 freedoms and perfectly aligns with the explicit exception in Article 23(2) allowing compulsory service for public purposes.","The State would argue that the Military Act automatically suspends Part III of the Constitution.","The State would claim that the President has absolute decree power over 18-21 year olds."],
        "correctAnswerIndex": 1,
        "explanation": "A law enforcing a duty is constitutional. Article 23(2) explicitly allows the state to impose compulsory service for public purposes. Furthermore, courts use duties to determine"
    },
    {
        "id": "ch10-l3-q16",
        "question": "The duty to",
        "options": ["Article 14 (Right to Equality).","Article 21 (Right to Life).","Article 25 (Right to freedom of religion and free profession, practice and propagation of religion).","Article 32 (Constitutional Remedies)."],
        "correctAnswerIndex": 2,
        "explanation": "Article 25 grants the freedom to practice and propagate religion. However, when"
    },
    {
        "id": "ch10-l3-q17",
        "question": "Which feature of the Fundamental Duties structurally differentiates them the most from the Directive Principles of State Policy?",
        "options": ["DPSPs are legally enforceable; Duties are not.","DPSPs are addressed to the State (executive/legislature) guiding governance; Duties are addressed directly to the individual citizens prescribing behavioral norms.","DPSPs can amend the Constitution; Duties cannot.","DPSPs were added by amendment; Duties were in the original constitution."],
        "correctAnswerIndex": 1,
        "explanation": "The primary structural difference is the target audience. DPSPs (Part IV) instruct the STATE on what policies to pursue for a welfare society. Fundamental Duties (Part IVA) instruct the CITIZEN on their obligations to the nation and society."
    },
    {
        "id": "ch10-l3-q18",
        "question": "The Swaran Singh Committee made several radical recommendations that the Congress government ultimately rejected. Which of the following rejected recommendations would have fundamentally altered the power dynamic between the Judiciary and the Parliament regarding Fundamental Rights?",
        "options": ["The recommendation to abolish the Supreme Court entirely.","The recommendation that any law imposing a penalty for violating a Fundamental Duty could NOT be questioned in any court on the ground of infringement of any Fundamental Right.","The recommendation to make the President the absolute head of the Judiciary.","The recommendation to allow states to write their own Fundamental Duties."],
        "correctAnswerIndex": 1,
        "explanation": "Had this recommendation been accepted, Parliament could have passed an extreme law (e.g., jailing someone indefinitely without trial for"
    },
    {
        "id": "ch10-l3-q19",
        "question": "Consider the constitutional amendment process. If the current Government wished to add a 12th Fundamental Duty to Article 51A (e.g.,",
        "options": ["A simple majority in both houses.","A special majority of Parliament (2/3rd members present and voting + absolute majority of the total membership) in both houses.","A special majority of Parliament AND ratification by half of the State Legislatures.","Only an executive order by the President is required."],
        "correctAnswerIndex": 1,
        "explanation": "Amending Part IVA (Fundamental Duties) requires a Special Majority under Article 368. It DOES NOT require ratification by half the states, because it does not affect the federal structure of the Constitution (like the election of the President, Supreme Court powers, or the 7th Schedule lists would)."
    },
    {
        "id": "ch10-l3-q20",
        "question": "In constitutional philosophy, What is the concept of",
        "options": ["It is the belief that a Republic must have an elected monarch; Part IVA ensures the President","It emphasizes that true liberty is not just freedom from state interference (negative rights), but requires citizens to actively participate in public life and uphold civic virtues/duties for the common good; Part IVA codifies these virtues.","It is the doctrine that only taxpayers should vote; Part IVA enforces tax collection.","It advocates for the complete subjugation of the individual to the state apparatus."],
        "correctAnswerIndex": 1,
        "explanation": "Civic Republicanism (contrasting with strict liberalism) argues that a healthy democracy survives only when citizens possess"
    }
];

export const CHAPTER_10_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
