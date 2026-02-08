import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 10)
const LEVEL_1_QUESTIONS = [
    {
        question: "The original Constitution of India (1950) contained:",
        options: ["Fundamental Rights only.", "Fundamental Duties only.", "Both Fundamental Rights and Fundamental Duties.", "Neither Fundamental Rights nor Fundamental Duties."],
        correctAnswerIndex: 0, // a) Fundamental Rights only
        explanation: "Original Constitution contained only Fundamental Rights, not Duties."
    },
    {
        question: "The fundamental duties were added to the Constitution by the:",
        options: ["24th Amendment Act, 1971", "42nd Amendment Act, 1976", "44th Amendment Act, 1978", "86th Amendment Act, 2002"],
        correctAnswerIndex: 1, // b) 42nd Amendment
        explanation: "42nd Amendment Act, 1976."
    },
    {
        question: "The fundamental duties in the Indian Constitution are inspired by the Constitution of:",
        options: ["USA", "Canada", "USSR (now Russia)", "Ireland"],
        correctAnswerIndex: 2, // c) USSR
        explanation: "Inspired by the Constitution of USSR."
    },
    {
        question: "Which committee recommended the inclusion of a separate chapter on fundamental duties in the Constitution?",
        options: ["Verma Committee", "Sarkaria Commission", "Swaran Singh Committee", "Ram Nandan Committee"],
        correctAnswerIndex: 2, // c) Swaran Singh Committee
        explanation: "Swaran Singh Committee."
    },
    {
        question: "The Swaran Singh Committee was set up in 1976 by the:",
        options: ["Janata Party Government.", "Congress Party Government.", "Supreme Court.", "Law Commission."],
        correctAnswerIndex: 1, // b) Congress Party
        explanation: "Congress Party Government."
    },
    {
        question: "The Swaran Singh Committee recommended the incorporation of how many fundamental duties?",
        options: ["8", "10", "11", "12"],
        correctAnswerIndex: 0, // a) 8
        explanation: "Recommended 8 duties."
    },
    {
        question: "The 42nd Amendment Act (1976) included a new Part in the Constitution, which is:",
        options: ["Part III-A", "Part IV-A", "Part IX-A", "Part XIV-A"],
        correctAnswerIndex: 1, // b) Part IV-A
        explanation: "Part IV-A."
    },
    {
        question: "This new Part IV-A consists of only one Article, which is:",
        options: ["Article 51", "Article 51-A", "Article 39-A", "Article 43-A"],
        correctAnswerIndex: 1, // b) Article 51-A
        explanation: "Article 51-A."
    },
    {
        question: "Originally (in 1976), the list of fundamental duties contained:",
        options: ["8 duties", "10 duties", "11 duties", "12 duties"],
        correctAnswerIndex: 1, // b) 10 duties
        explanation: "Originally 10 duties."
    },
    {
        question: "According to Article 51-A, it shall be the duty of every citizen of India to abide by the Constitution and respect its ideals and institutions, the:",
        options: ["Parliament and State Legislatures.", "National Flag and the National Anthem.", "President and the Prime Minister.", "Supreme Court and High Courts."],
        correctAnswerIndex: 1, // b) National Flag and Anthem
        explanation: "National Flag and the National Anthem."
    },
    {
        question: "It is a duty to cherish and follow the noble ideals that inspired our:",
        options: ["Religious leaders.", "National struggle for freedom.", "Constitution makers.", "Social reformers."],
        correctAnswerIndex: 1, // b) National struggle
        explanation: "National struggle for freedom."
    },
    {
        question: "It is a duty to uphold and protect the:",
        options: ["Sovereignty, Unity and Integrity of India.", "Sovereignty, Socialism and Secularism of India.", "Liberty, Equality and Fraternity.", "Justice, Social and Economic."],
        correctAnswerIndex: 0, // a) Sovereignty, Unity and Integrity
        explanation: "Sovereignty, Unity and Integrity of India."
    },
    {
        question: "It is a duty to defend the country and render national service when:",
        options: ["Ordered by the President.", "Called upon to do so.", "There is a war.", "There is a natural calamity."],
        correctAnswerIndex: 1, // b) Called upon
        explanation: "When called upon to do so."
    },
    {
        question: "It is a duty to promote harmony and the spirit of common brotherhood amongst all the people of India transcending:",
        options: ["Religious, linguistic and regional or sectional diversities.", "Caste, creed and color.", "Political ideologies.", "Economic status."],
        correctAnswerIndex: 0, // a) Religious, linguistic...
        explanation: "Religious, linguistic and regional or sectional diversities."
    },
    {
        question: "It is a duty to renounce practices derogatory to the:",
        options: ["Dignity of women.", "Dignity of the individual.", "Unity of the nation.", "Culture of India."],
        correctAnswerIndex: 0, // a) Dignity of women
        explanation: "Dignity of women."
    },
    {
        question: "It is a duty to value and preserve the rich heritage of our:",
        options: ["Composite culture.", "Ancient history.", "Religious traditions.", "Scientific achievements."],
        correctAnswerIndex: 0, // a) Composite culture
        explanation: "Composite culture."
    },
    {
        question: "It is a duty to protect and improve the natural environment including forests, lakes, rivers and wild life, and to have:",
        options: ["Respect for animals.", "Compassion for living creatures.", "Scientific temper.", "Humanism."],
        correctAnswerIndex: 1, // b) Compassion
        explanation: "Compassion for living creatures."
    },
    {
        question: "It is a duty to develop the scientific temper, humanism and the spirit of:",
        options: ["Inquiry and reform.", "Nationalism and patriotism.", "Tolerance and peace.", "Sacrifice and service."],
        correctAnswerIndex: 0, // a) Inquiry and reform
        explanation: "Inquiry and reform."
    },
    {
        question: "It is a duty to safeguard public property and to:",
        options: ["Abjure violence.", "Follow traffic rules.", "Pay taxes.", "Vote in elections."],
        correctAnswerIndex: 0, // a) Abjure violence
        explanation: "Abjure violence."
    },
    {
        question: "It is a duty to strive towards excellence in all spheres of:",
        options: ["Individual and collective activity.", "Educational and professional activity.", "Political and social activity.", "Economic and industrial activity."],
        correctAnswerIndex: 0, // a) Individual and collective
        explanation: "Individual and collective activity."
    },
    {
        question: "The 11th Fundamental Duty was added by the:",
        options: ["82nd Amendment Act, 2000", "84th Amendment Act, 2001", "86th Amendment Act, 2002", "91st Amendment Act, 2003"],
        correctAnswerIndex: 2, // c) 86th Amendment
        explanation: "86th Amendment Act, 2002."
    },
    {
        question: "The 11th duty (51-A(k)) is to provide opportunities for education to his child or ward between the age of:",
        options: ["0 and 6 years.", "6 and 14 years.", "6 and 18 years.", "14 and 18 years."],
        correctAnswerIndex: 1, // b) 6 and 14 years
        explanation: "6 and 14 years."
    },
    {
        question: "Features and Significance: The Fundamental Duties are confined to:",
        options: ["Citizens only.", "Foreigners only.", "Both citizens and foreigners.", "Only government servants."],
        correctAnswerIndex: 0, // a) Citizens only
        explanation: "Citizens only."
    },
    {
        question: "Like the Directive Principles, the fundamental duties are:",
        options: ["Justiciable.", "Non-justiciable.", "Mandatory.", "Enforceable by writs."],
        correctAnswerIndex: 1, // b) Non-justiciable
        explanation: "Non-justiciable."
    },
    {
        question: "The Swaran Singh Committee suggested that Parliament may provide for the imposition of:",
        options: ["Taxes for non-performance of duties.", "Penalty or punishment for non-compliance with duties.", "Social boycott for violation of duties.", "Compulsory military service."],
        correctAnswerIndex: 1, // b) Penalty or punishment
        explanation: "Penalty or punishment for non-compliance."
    },
    {
        question: "Did the Congress Government (in 1976) accept the Swaran Singh Committee's recommendation regarding penalty/punishment?",
        options: ["Yes, fully.", "No, it did not incorporate this provision in the Constitution.", "Yes, but only for certain duties.", "Yes, but left it to the Judiciary."],
        correctAnswerIndex: 1, // b) No
        explanation: "No, it did not incorporate this provision."
    },
    {
        question: "Another recommendation of the Swaran Singh Committee which was NOT accepted was the duty to:",
        options: ["Pay taxes.", "Vote in elections.", "Follow family planning.", "Both (a) and (b)."],
        correctAnswerIndex: 0, // a) Pay taxes
        explanation: "Duty to pay taxes was recommended but not accepted."
    },
    {
        question: "The Verma Committee on Fundamental Duties of Citizens (1999) identified the existence of:",
        options: ["Legal provisions for the implementation of some of the Fundamental Duties.", "Constitutional provisions for enforcing all duties.", "Lack of any legal provisions.", "Need for new duties."],
        correctAnswerIndex: 0, // a) Legal provisions exists
        explanation: "Existence of legal provisions."
    },
    {
        question: "Legal Provisions: The Prevention of Insults to National Honour Act (1971) prevents disrespect to:",
        options: ["The Constitution of India.", "The National Flag.", "The National Anthem.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "Constitution, Flag, and Anthem."
    },
    {
        question: "The Protection of Civil Rights Act (1955) provides for punishments for offences related to:",
        options: ["Caste and religion.", "Untouchability.", "Gender discrimination.", "Regionalism."],
        correctAnswerIndex: 1, // b) Untouchability
        explanation: "Untouchability."
    },
    {
        question: "The Unlawful Activities (Prevention) Act (1967) provides for the declaration of a communal organization as an unlawful association. This relates to the duty to:",
        options: ["Uphold sovereignty, unity and integrity.", "Protect environment.", "Safeguard public property.", "Develop scientific temper."],
        correctAnswerIndex: 0, // a) Sovereignty, unity and integrity
        explanation: "Sovereignty, unity and integrity."
    },
    {
        question: "The Representation of People Act (1951) provides for disqualification of members of Parliament/State Legislature for indulging in:",
        options: ["Corrupt practices.", "Promoting enmity between different groups on grounds of religion, race, etc.", "Both (a) and (b).", "Neither (a) nor (b)."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Both corrupt practices and promoting enmity."
    },
    {
        question: "The Wildlife (Protection) Act of 1972 prohibits:",
        options: ["Trade in rare and endangered species.", "Hunting of all animals.", "Fishing in rivers.", "Keeping pets."],
        correctAnswerIndex: 0, // a) Trade in rare and endangered species
        explanation: "Trade in rare and endangered species."
    },
    {
        question: "The Forest (Conservation) Act of 1980 checks:",
        options: ["Deforestation and diversion of forest land for non-forest purposes.", "Afforestation.", "Social forestry.", "Agro-forestry."],
        correctAnswerIndex: 0, // a) Deforestation
        explanation: "Deforestation and diversion."
    },
    {
        question: "The fundamental duties serve as a reminder to the citizens that while enjoying their rights, they should also be conscious of duties they owe to:",
        options: ["Their family.", "Their country, their society and their fellow citizens.", "The government.", "The world."],
        correctAnswerIndex: 1, // b) Country, society, citizens
        explanation: "Their country, their society and their fellow citizens."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        question: "Nature & Enforcement: Fundamental Duties are non-justiciable. This means:",
        options: ["A citizen cannot be punished for violating them directly under the Constitution.", "Parliament cannot make laws to enforce them.", "Courts cannot take cognizance of them while interpreting laws.", "They are merely moral suggestions with no legal value."],
        correctAnswerIndex: 0, // a) Cannot be punished directly under Constitution
        explanation: "Cannot be punished directly under the Constitution (needs statutory backing)."
    },
    {
        question: "However, the Parliament is free to enforce Fundamental Duties by:",
        options: ["Suitable legislation.", "Executive order.", "Constitutional Amendment only.", "Judicial Review."],
        correctAnswerIndex: 0, // a) Suitable legislation
        explanation: "Suitable legislation."
    },
    {
        question: "In the AIIMS Students Union vs AIIMS (2001) case, the Supreme Court held that Fundamental Duties are:",
        options: ["Fundamental to the governance of the country (like DPSP).", "Equally important as Fundamental Rights.", "Not enforceable at all.", "Only for government servants."],
        correctAnswerIndex: 1, // b) Equally important
        explanation: "Equally important as Fundamental Rights."
    },
    {
        question: "The \"Verma Committee\" (1999) on Fundamental Duties identified the existence of legal provisions for the implementation of some of the Fundamental Duties. Which of the following acts implements the duty to \"renounce practices derogatory to the dignity of women\"?",
        options: ["The Protection of Women from Domestic Violence Act, 2005.", "The Indian Penal Code (IPC).", "The Dowry Prohibition Act, 1961.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All (IPC, Dowry Act, DV Act) implement this duty."
    },
    {
        question: "The duty to \"safeguard public property and to abjure violence\" is legally enforced by:",
        options: ["The Prevention of Damage to Public Property Act, 1984.", "The Unlawful Activities (Prevention) Act, 1967.", "The National Security Act, 1980.", "The Disaster Management Act, 2005."],
        correctAnswerIndex: 0, // a) Prevention of Damage to Public Property Act
        explanation: "The Prevention of Damage to Public Property Act, 1984."
    },
    {
        question: "Rights vs Duties Relationship: \"Rights and Duties are correlative and inseparable.\" This implies that:",
        options: ["For every right, there is a corresponding duty.", "A citizen cannot claim rights if he does not perform duties.", "Duties are superior to rights.", "Rights are superior to duties."],
        correctAnswerIndex: 0, // a) Correlative
        explanation: "For every right, there is a corresponding duty."
    },
    {
        question: "Unlike Fundamental Rights, which are available to all persons (citizens and foreigners), Fundamental Duties are confined to:",
        options: ["Citizens only.", "Foreigners only.", "Both citizens and foreigners.", "Only voters."],
        correctAnswerIndex: 0, // a) Citizens only
        explanation: "Citizens only."
    },
    {
        question: "The inclusion of Fundamental Duties in the Constitution was criticized by some on the ground that:",
        options: ["They are superfluous because they are already performed by people generally.", "Some duties are vague and difficult to understand (e.g., \"noble ideals\", \"scientific temper\").", "They are non-justiciable and hence toothless.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All are valid criticisms."
    },
    {
        question: "The inclusion of Fundamental Duties aligns the Indian Constitution with the Constitutions of:",
        options: ["Western democracies (USA, Canada, France, etc.).", "Socialist countries (USSR, Vietnam, etc.).", "Monarchies.", "Theocratic states."],
        correctAnswerIndex: 1, // b) Socialist countries
        explanation: "Socialist countries (Democratic constitutions usually don't have duties)."
    },
    {
        question: "Can a court refuse to issue a writ for the enforcement of a Fundamental Right if the petitioner has violated a Fundamental Duty?",
        options: ["Yes, the court can refuse relief (Doctrine of Clean Hands).", "No, Fundamental Rights are absolute.", "No, Duties are non-justiciable.", "Yes, but only in case of Article 32."],
        correctAnswerIndex: 0, // a) Clean Hands
        explanation: "Yes, under the invocation of Art 51A (Ranganath Mishra case Logic / Clean Hands)."
    },
    {
        question: "Swaran Singh vs Verma Committee: The Swaran Singh Committee recommended a separate chapter on Fundamental Duties. It also suggested that:",
        options: ["Failure to comply with duties should be punishable by law.", "Such punishment should not be questioned in any court.", "Duty to pay taxes should be a Fundamental Duty.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All were recommended."
    },
    {
        question: "Which of the above recommendations (Q11) was accepted by the Congress Government and incorporated into the 42nd Amendment?",
        options: ["Punishment for non-compliance.", "Bar on judicial review of punishment.", "Duty to pay taxes.", "None of the above."],
        correctAnswerIndex: 3, // d) None
        explanation: "None were accepted."
    },
    {
        question: "The Verma Committee (1999) was set up to:",
        options: ["Suggest new Fundamental Duties.", "Operationalize the suggestions to teach Fundamental Duties to citizens.", "Remove Fundamental Duties.", "Make Duties justiciable."],
        correctAnswerIndex: 1, // b) Operationalize
        explanation: "Operationalize suggestions to teach/implement."
    },
    {
        question: "The Verma Committee recommended that:",
        options: ["January 3rd be observed as \"Fundamental Duties Day\".", "Duties should be taught in schools and colleges.", "Media should propagate duties.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All were recommended."
    },
    {
        question: "Specific Duties Analysis: \"To value and preserve the rich heritage of our composite culture.\" This duty (Article 51-A(f)) draws inspiration from:",
        options: ["The ancient Indian tradition of \"Vasudhaiva Kutumbakam\".", "The secular fabric of the nation.", "The diversity of India.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All concepts align."
    },
    {
        question: "\"To protect and improve the natural environment.\" This duty (Article 51-A(g)) imposes an obligation on:",
        options: ["The State (under Article 48A).", "The Citizens (under Article 51-A(g)).", "Both the State and the Citizens.", "Only the Forest Department."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Both State (48A) and Citizens (51A-g)."
    },
    {
        question: "\"To develop the scientific temper, humanism and the spirit of inquiry and reform.\" This duty (Article 51-A(h)) is particularly significant in combating:",
        options: ["Superstition and blind faith.", "Religious fundamentalism.", "Social evils.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "Combats all listed regressive practices."
    },
    {
        question: "\"To strive towards excellence in all spheres of individual and collective activity.\" This duty (Article 51-A(j)) aims at:",
        options: ["Personal success only.", "Raising the nation to higher levels of endeavor and achievement.", "Economic growth only.", "Sports achievements only."],
        correctAnswerIndex: 1, // b) Raising nation
        explanation: "Raising the nation to higher levels of endeavor and achievement."
    },
    {
        question: "The duty to \"provide opportunities for education to his child or ward\" (Article 51-A(k)) was added to complement:",
        options: ["Article 21-A (Right to Education).", "Article 45 (Early Childhood Care).", "Both (a) and (b).", "Neither."],
        correctAnswerIndex: 0, // a) Article 21-A
        explanation: "Article 21-A."
    },
    {
        question: "Comparative & Analytical: Which of the following is NOT a Fundamental Duty?",
        options: ["To cast vote in elections.", "To pay taxes.", "To follow family planning.", "All of the above are not Fundamental Duties."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "None are FDs."
    },
    {
        question: "The Japanese Constitution is one of the few democratic constitutions that contains a list of duties. One such duty is:",
        options: ["To work.", "To vote.", "To speak truth.", "To meditate."],
        correctAnswerIndex: 0, // a) To work
        explanation: "To work."
    },
    {
        question: "In the M.C. Mehta case (1988), the Supreme Court directed the Central Government to introduce compulsory teaching of ______ in all educational institutions, invoking Article 51-A(g).",
        options: ["Yoga.", "Environment.", "Sanskrit.", "Moral Science."],
        correctAnswerIndex: 1, // b) Environment
        explanation: "Environment."
    },
    {
        question: "The \"Prevention of Insults to National Honour Act, 1971\" was enacted before the insertion of Fundamental Duties in 1976. This shows that:",
        options: ["Duties existed in statutory form even before constitutional recognition.", "The Act was unconstitutional.", "The Act was retrospective.", "The Swaran Singh Committee merely codified existing laws."],
        correctAnswerIndex: 0, // a) Existed in statutory form
        explanation: "Duties existed in statutory form."
    },
    {
        question: "Assertion (A): Fundamental Duties are not enforceable by writs. Reason (R): They are duties of citizens, not the State. Writs are issued against the State for violation of Rights.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "The phrase \"Composite Culture\" in Article 51-A(f) refers to:",
        options: ["Hindu Culture only.", "The synthesis of various cultural streams that have enriched India.", "Western Culture.", "Vedic Culture."],
        correctAnswerIndex: 1, // b) Synthesis
        explanation: "Synthesis of various cultural streams."
    },
    {
        question: "\"National Service\" under Article 51-A(d) implies:",
        options: ["Joining the Army.", "Joining the Civil Services.", "Rendering service when called upon during emergencies or war.", "Social work."],
        correctAnswerIndex: 2, // c) When called upon
        explanation: "When called upon during emergencies/war."
    },
    {
        question: "The Fundamental Duties help the courts in:",
        options: ["Defining the scope of Fundamental Rights.", "Determining the constitutional validity of a law.", "Interpreting the Preamble.", "Appointing judges."],
        correctAnswerIndex: 1, // b) Constitutional validity
        explanation: "Determining constitutional validity (reasonable restrictions)."
    },
    {
        question: "If a law seeks to give effect to a Fundamental Duty, the court may consider such law to be:",
        options: ["\"Reasonable\" in relation to Article 14 or 19.", "Unconstitutional.", "Void.", "Mandatory."],
        correctAnswerIndex: 0, // a) Reasonable
        explanation: "Reasonable."
    },
    {
        question: "The \"Flag Code of India, 2002\" governs the display of the National Flag. It is:",
        options: ["A statute (Act of Parliament).", "An executive instruction/code combined with statutory provisions.", "A Constitutional Amendment.", "A Judicial Order."],
        correctAnswerIndex: 1, // b) Executive instruction
        explanation: "Executive code with statutory backing (Emblems Act)."
    },
    {
        question: "Which Fundamental Duty is often cited in cases related to \"Cow Slaughter\"?",
        options: ["51-A(g) - Compassion for living creatures.", "51-A(f) - Heritage.", "51-A(e) - Harmony.", "51-A(i) - Public Property."],
        correctAnswerIndex: 0, // a) 51-A(g)
        explanation: "Compassion for living creatures."
    }
];

// Level 3: The UPSC Simulation 2026 (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        question: "Theme: Legal Enforcement & Justiciability (Recent Trends)\nIn 2024, the Supreme Court heard a PIL seeking to make Fundamental Duties mandatory. The Court's observation reiterated the Ranganath Mishra Judgment (2003), stating that:",
        options: ["Fundamental Duties should be enforced by a new law immediately.", "Legal and social sanctions can be used to create a comprehensive code for duties, but they remain non-justiciable under the Constitution unless Parliament legislates.", "Duties are superior to Rights and must be enforced by Police.", "Duties are only for government servants."],
        correctAnswerIndex: 1, // b) Legal and social sanctions...
        explanation: "Non-justiciable unless Parliament legislates."
    },
    {
        question: "The \"Prevention of Damage to Public Property Act, 1984\" implements Article 51-A(i). In the context of the Farmers' Protests and CAProtests, the Supreme Court laid down guidelines for:",
        options: ["Recovering damages from protesters who destroy public property (apportioning liability).", "Making leaders of the protest personally liable.", "Banning all protests that cause damage.", "Both (a) and (b)."],
        correctAnswerIndex: 3, // d) Both
        explanation: "Liability of protesters and leaders."
    },
    {
        question: "The Justice J.S. Verma Committee (1999) identified existing legal provisions for duties. Which of the following duties is NOT backed by a specific criminal statute in India?",
        options: ["To respect the National Flag (Prevention of Insults to National Honour Act).", "To protect wildlife (Wildlife Protection Act).", "To develop scientific temper and spirit of inquiry.", "To renounce practices derogatory to the dignity of women (IPC/BNS)."],
        correctAnswerIndex: 2, // c) Scientific temper
        explanation: "No specific statute for Scientific Temper (apart from local superstition laws)."
    },
    {
        question: "Theme: Environment & Climate Duty (Art 51-A(g))\nThe \"Great Indian Bustard Case\" (2024) linked the Right to be free from adverse effects of climate change (Article 21) with the Fundamental Duty (Article 51-A(g)). This implies that:",
        options: ["Citizens have a duty to not oppose renewable energy projects (like solar power lines).", "The State's duty to protect the environment (Article 48A) and Citizen's duty (51-A(g)) together create a \"Public Trust\" obligation on the government.", "The duty is only for citizens, not corporations.", "Article 51-A(g) overrides the right to development."],
        correctAnswerIndex: 1, // b) Public Trust
        explanation: "Creates Public Trust obligation."
    },
    {
        question: "\"Carbon Footprint\" and Individual Duty: Can a court issue a writ of mandamus against a private citizen for failing to protect the environment (Article 51-A(g))?",
        options: ["Yes, under the Polluter Pays Principle.", "No, writs are generally issued against the State; however, courts can enforce statutory duties (like waste management rules) against individuals.", "Yes, Fundamental Duties are directly enforceable.", "No, environmental protection is only the State's job."],
        correctAnswerIndex: 1, // b) No writs against private individuals generally
        explanation: "Writs usually against State, but statutory duties enforceable."
    },
    {
        question: "Theme: Scientific Temper & Education (Art 51-A(h), (k))\nThe \"Anti-Superstition Laws\" (e.g., in Maharashtra, Karnataka) are statutory implementations of Article 51-A(h) (Scientific Temper). A challenge to these laws often cites:",
        options: ["Article 25 (Right to Religion and rituals).", "Article 26 (Right of denominations to manage affairs).", "Article 29 (Right to conserve culture).", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "Challenges cite 25, 26, 29."
    },
    {
        question: "The National Education Policy (NEP) 2020 emphasizes \"Constitutional Values\". This aligns with Article 51-A(k) (Education opportunity) and 51-A(a) (Respect ideals). Critics argue that the \"saffronization\" allegation conflicts with the duty to:",
        options: ["Cherish and follow noble ideals of freedom struggle (Secularism).", "Develop scientific temper.", "Preserve composite culture.", "All of the above are grounds of debate."],
        correctAnswerIndex: 3, // d) All
        explanation: "All are debate grounds."
    },
    {
        question: "Theme: Composite Culture & Heritage (Art 51-A(f))\nThe Archaeological Survey of India (ASI) excavations (e.g., Rakhigarhi, Gyanvapi) are often debated. The Fundamental Duty to \"value and preserve the rich heritage of our composite culture\" (51-A(f)):",
        options: ["Mandates the restoration of all ancient temples.", "Supports the \"Places of Worship Act, 1991\" which freezes the status of religious places to preserve the \"composite\" character as it existed on Aug 15, 1947.", "Applies only to Vedic culture.", "Is irrelevant to legal disputes."],
        correctAnswerIndex: 1, // b) Supports Places of Worship Act
        explanation: "Supports Places of Worship Act and composite character."
    },
    {
        question: "\"Composite Culture\" was interpreted by the Supreme Court in the Ismail Faruqui case (Ayodhya, 1994) to mean:",
        options: ["A culture where all religions have equal right to propagate.", "A synthesis of Sanskriti and Tehzeeb, reflecting the secular ethos.", "A culture dominated by the majority.", "A culture defined by the State."],
        correctAnswerIndex: 1, // b) Synthesis
        explanation: "Synthesis reflecting secular ethos."
    },
    {
        question: "Theme: Sovereignty & Integrity (Art 51-A(c))\nThe \"Unlawful Activities (Prevention) Act\" (UAPA) primarily enforces the duty to \"uphold and protect the sovereignty, unity and integrity of India.\" A person can be designated a \"terrorist\" under UAPA if they:",
        options: ["Advocate the secession of any part of India (violating 51-A(c)).", "Disrespect the National Flag (violating 51-A(a)).", "Fail to vote (violating civic duty).", "Criticize the government."],
        correctAnswerIndex: 0, // a) Secession
        explanation: "Advocating secession violates 51-A(c) and UAPA."
    },
    {
        question: "\"Sedition\" (Section 124A IPC/BNS) vs Duty to Respect Institutions. The Law Commission (2023) recommended retaining Sedition to protect:",
        options: ["The Government established by law.", "The Unity and Integrity of India (Article 51-A(c)).", "The Image of the Prime Minister.", "The Directive Principles."],
        correctAnswerIndex: 1, // b) Unity and Integrity
        explanation: "Unity and Integrity of India."
    },
    {
        question: "Theme: Nationalism vs Constitutionalism (Art 51-A(a))\nIn the National Anthem Case (Bijoe Emmanuel), the Supreme Court held that expulsion of Jehovah's Witness children for not singing the anthem violated Article 19(1)(a) and 25. How did the Court interpret Article 51-A(a)?",
        options: ["It held that the duty to \"respect\" the anthem does not compel one to \"sing\" it, provided they stand respectfully.", "It held that Article 51-A(a) makes singing mandatory for all citizens.", "It held that Article 51-A cannot override Article 25.", "Both (a) and (c)."],
        correctAnswerIndex: 0, // a) Respect != Sing
        explanation: "Respect means standing, not necessarily singing."
    },
    {
        question: "The \"Cinema Hall Anthem Order\" (2016) by the Supreme Court (later modified) relied on Article 51-A(a). The modification in 2018 stated that:",
        options: ["Playing the anthem is mandatory in all cinema halls.", "Playing the anthem is optional/directory, not mandatory.", "People need not stand up if they are eating.", "Foreigners must also stand."],
        correctAnswerIndex: 1, // b) Optional/directory
        explanation: "Made optional."
    },
    {
        question: "Theme: Women & Dignity (Art 51-A(e))\nThe \"Marital Rape Exception\" debate involves Article 51-A(e) (Renounce practices derogatory to dignity of women). Petitioners argue that:",
        options: ["The exception is a \"practice\" that treats women as property, derogatory to their dignity.", "Fundamental Duties can be used to interpret Fundamental Rights (Article 21 - Dignity).", "The State has a duty to remove this exception.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All arguments used."
    },
    {
        question: "\"Triple Talaq\" was struck down in Shayara Bano case (2017). Justice Kurian Joseph cited Article 51-A(e) to state that:",
        options: ["Practices derogatory to women cannot be protected as \"Essential Religious Practices\" under Article 25.", "Personal laws are not subject to Fundamental Duties.", "Triple Talaq is good for social harmony.", "Parliament must legislate."],
        correctAnswerIndex: 0, // a) Not ERP
        explanation: "Practices derogatory to women cannot be ERP."
    },
    {
        question: "Assertion (A): The Fundamental Duties are not self-executory. Reason (R): A law is required for their enforcement; they cannot be enforced by writs directly against citizens.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Assertion (A): Fundamental Duties help in determining the constitutionality of a law. Reason (R): If a law promotes a Fundamental Duty, it is considered \"reasonable\" under Article 14 or 19.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Theme: Miscellaneous\nWhich of the following committees was specifically set up to \"operationalize\" Fundamental Duties?",
        options: ["Swaran Singh Committee (1976).", "Verma Committee (1999).", "Venkatachalam Commission (2002).", "Punchhi Commission (2007)."],
        correctAnswerIndex: 1, // b) Verma Committee
        explanation: "Verma Committee."
    },
    {
        question: "The \"Right to Education Act, 2009\" imposes a duty on parents to send children to school. This statutory duty mirrors the Constitutional Duty under:",
        options: ["Article 51-A(k).", "Article 21-A.", "Article 45.", "Article 46."],
        correctAnswerIndex: 0, // a) 51-A(k)
        explanation: "Article 51-A(k)."
    },
    {
        question: "\"Tax Evasion\" is often linked to the lack of a Fundamental Duty to pay taxes. The Swaran Singh Committee recommended it, but it was rejected because:",
        options: ["It was considered too harsh.", "Most Indians were too poor to pay taxes.", "Sufficient laws (Income Tax Act) already existed.", "It would violate Article 19(1)(g)."],
        correctAnswerIndex: 2, // c) Sufficient laws
        explanation: "Sufficient laws existed (fear of harassment was also a reason, but C is the standard answer)."
    },
    {
        question: "In the Hinsa Virodhak Sangh vs Mirzapur Moti Kuresh Jamat (2008) case regarding closure of slaughterhouses during Jain festivals, the Supreme Court relied on:",
        options: ["Article 51-A(g) (Compassion for living creatures).", "Article 19(1)(g) (Right to trade).", "Article 25 (Religious freedom).", "Article 48 (Cow slaughter)."],
        correctAnswerIndex: 0, // a) 51-A(g)
        explanation: "Relied on 51-A(g)."
    },
    {
        question: "The \"Flag Code of India\" was amended in 2002 to allow citizens to hoist the flag on all days. This right was recognized as part of:",
        options: ["Article 19(1)(a) (Freedom of Expression) read with Article 51-A(a) (Duty to respect).", "Article 21.", "Article 14.", "Statutory right only."],
        correctAnswerIndex: 0, // a) 19(1)(a)
        explanation: "19(1)(a) read with 51-A(a)."
    },
    {
        question: "The \"Pledge\" recited in schools (\"India is my country...\") reflects which Fundamental Duties?",
        options: ["51-A(a) (Constitution), (c) (Sovereignty), (e) (Brotherhood).", "51-A(k) (Education).", "51-A(g) (Environment).", "All of the above."],
        correctAnswerIndex: 0, // a)
        explanation: "Reflects brotherhood, sovereignty, etc."
    },
    {
        question: "\"Animal Welfare Board of India\" is a statutory body. Its functioning is guided by:",
        options: ["Article 51-A(g).", "Article 48.", "Article 48A.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Guided by all."
    },
    {
        question: "The duty to \"defend the country\" (Article 51-A(d)) implies:",
        options: ["Conscription (Compulsory military service) is constitutional if Parliament enacts a law.", "Every citizen is automatically a soldier.", "Citizens can keep private armies.", "Citizens must pay a defense tax."],
        correctAnswerIndex: 0, // a) Conscription is constitutional
        explanation: "Conscription is constitutional."
    },
    {
        question: "Which Fundamental Duty is unique in that it was added much later than the others?",
        options: ["51-A(a)", "51-A(k)", "51-A(g)", "51-A(e)"],
        correctAnswerIndex: 1, // b) 51-A(k)
        explanation: "51-A(k) added in 2002."
    },
    {
        question: "The concept of \"Constitutional Morality\" emphasized by the Supreme Court includes adherence to:",
        options: ["Fundamental Rights only.", "Fundamental Duties only.", "The core values of the Constitution including Rights, Duties, and Preamble.", "Social morality."],
        correctAnswerIndex: 2, // c) Core values
        explanation: "Core values including Rights and Duties."
    },
    {
        question: "Can a foreigner be punished for disrespecting the Indian National Flag in India?",
        options: ["Yes, under the Prevention of Insults to National Honour Act (which applies to \"whoever\" within India).", "No, Fundamental Duties apply only to citizens.", "No, they have diplomatic immunity.", "Yes, but only deported."],
        correctAnswerIndex: 0, // a) Yes
        explanation: "Act applies to 'whoever' within India."
    },
    {
        question: "The \"Scientific Temper\" duty (51-A(h)) is often cited against:",
        options: ["Astrology courses in universities.", "Witch-hunting.", "Magic remedies advertisements.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Cited against all."
    },
    {
        question: "In the Ranganath Mishra case, the Supreme Court directed the Centre to:",
        options: ["Enact a comprehensive law for duties.", "Implement the Verma Committee recommendations to spread awareness.", "Make voting mandatory.", "Amend the Constitution to add more duties."],
        correctAnswerIndex: 1, // b) Implement Verma Committee
        explanation: "Implement Verma Committee recommendations."
    }
];

export const CHAPTER_10_LEVELS: ChapterLevelData = {
    topicId: 10,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 10: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch10-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch10-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch10-l3-q${i + 1}` }))
        }
    ]
};
