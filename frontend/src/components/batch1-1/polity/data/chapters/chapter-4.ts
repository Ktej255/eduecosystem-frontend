import { LevelData, ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 4)
const LEVEL_1_QUESTIONS = [
    {
        question: "The American Constitution was the first to begin with a Preamble. The term 'Preamble' refers to the:",
        options: ["Conclusion or summary of the Constitution.", "Introduction or preface to the Constitution.", "The main body of the Constitution.", "The amendments to the Constitution."],
        correctAnswerIndex: 1,
        explanation: "The term 'Preamble' refers to the introduction or preface to the Constitution."
    },
    {
        question: "Who called the Preamble the \"Identity Card of the Constitution\"?",
        options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "N.A. Palkhivala", "K.M. Munshi"],
        correctAnswerIndex: 2,
        explanation: "N.A. Palkhivala, an eminent jurist and constitutional expert, called the Preamble the 'Identity Card of the Constitution'."
    },
    {
        question: "The Preamble to the Indian Constitution is based on the 'Objectives Resolution', drafted and moved by:",
        options: ["Dr. Rajendra Prasad", "Pandit Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Vallabhbhai Patel"],
        correctAnswerIndex: 1,
        explanation: "It was drafted and moved by Pandit Jawaharlal Nehru on December 13, 1946."
    },
    {
        question: "The Preamble has been amended only once so far, in 1976, by the 42nd Constitutional Amendment Act, which added three new words:",
        options: ["Sovereign, Democratic, Republic", "Socialist, Secular, Integrity", "Liberty, Equality, Fraternity", "Justice, Social, Economic"],
        correctAnswerIndex: 1,
        explanation: "The 42nd Amendment added the words 'Socialist', 'Secular', and 'Integrity'."
    },
    {
        question: "The Preamble reveals four ingredients or components. Which of the following is NOT one of them?",
        options: ["Source of authority of the Constitution.", "Nature of Indian State.", "Objectives of the Constitution.", "Definition of Fundamental Rights."],
        correctAnswerIndex: 3,
        explanation: "The Preamble does not define Fundamental Rights; that is done in Part III."
    },
    {
        question: "According to the Preamble, the Constitution derives its authority from:",
        options: ["The British Parliament", "The Constituent Assembly", "The People of India", "The Supreme Court of India"],
        correctAnswerIndex: 2,
        explanation: "The Preamble states 'We, the People of India... do hereby Adopt, Enact and Give to ourselves this Constitution', deriving authority from the people."
    },
    {
        question: "The word 'Sovereign' implies that India is:",
        options: ["A dependency of the British Empire.", "A dominion of the British Empire.", "Neither a dependency nor a dominion of any other nation, but an independent state.", "A state under the protection of the UN."],
        correctAnswerIndex: 2,
        explanation: "Sovereign means India is an independent state, not subject to any external authority."
    },
    {
        question: "India's membership of the Commonwealth of Nations and the United Nations:",
        options: ["Limits India's sovereignty.", "Makes India a dominion of the UK.", "In no way constitutes a limitation on her sovereignty.", "Makes the British Crown the head of the Indian State."],
        correctAnswerIndex: 2,
        explanation: "These memberships do not affect India's sovereignty."
    },
    {
        question: "The Indian brand of Socialism is 'Democratic Socialism' and not 'Communistic Socialism'. Democratic Socialism aims to end poverty, ignorance, disease, and inequality of opportunity through:",
        options: ["Violent revolution.", "Complete nationalization of all means of production.", "Mixed economy where both public and private sectors co-exist.", "Abolition of private property."],
        correctAnswerIndex: 2,
        explanation: "Democratic Socialism involves a 'mixed economy'."
    },
    {
        question: "The term 'Secular' was added by the 42nd Constitutional Amendment Act of 1976. However, the Supreme Court said in 1974 that although the words were not there, there can be no doubt that the Constitution-makers wanted to establish such a state. This is reflected in Articles:",
        options: ["14 to 18", "19 to 22", "25 to 28", "29 to 30"],
        correctAnswerIndex: 2,
        explanation: "Articles 25 to 28 guarantee the fundamental right to freedom of religion."
    },
    {
        question: "The Indian Constitution embodies the ______ concept of secularism, i.e., all religions in our country (irrespective of their strength) have the same status and support from the state.",
        options: ["Negative", "Positive", "Neutral", "Western"],
        correctAnswerIndex: 1,
        explanation: "India follows the 'Positive' concept of secularism."
    },
    {
        question: "The term 'Democratic' is used in the Preamble in the broader sense embracing not only political democracy but also:",
        options: ["Social and economic democracy.", "Cultural and religious democracy.", "Military and strategic democracy.", "Educational and technological democracy."],
        correctAnswerIndex: 0,
        explanation: "It embraces political, social, and economic democracy."
    },
    {
        question: "\"Democracy is really a form of government which will be known as parliamentary democracy.\" Who said this in the Constituent Assembly?",
        options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "K.M. Munshi", "Sir Alladi Krishnaswami Ayyar"],
        correctAnswerIndex: 1,
        explanation: "Dr. B.R. Ambedkar."
    },
    {
        question: "Direct Democracy has four devices. Which of the following is NOT one of them?",
        options: ["Referendum", "Initiative", "Recall", "Veto"],
        correctAnswerIndex: 3,
        explanation: "Veto is not a direct democracy device; Plebiscite is the fourth one."
    },
    {
        question: "The term 'Republic' in our Preamble indicates that India has:",
        options: ["A hereditary head called the King or Queen.", "An elected head called the President.", "A Prime Minister as the head of the state.", "A Governor-General appointed by the British."],
        correctAnswerIndex: 1,
        explanation: "A Republic has an elected head of state (the President in India's case)."
    },
    {
        question: "A Republic also means two more things: vesting of political sovereignty in the people and:",
        options: ["The absence of any privileged class.", "The presence of a strong military.", "The suppression of minority rights.", "The rule of a single party."],
        correctAnswerIndex: 0,
        explanation: "Republic implies absence of any privileged class (like aristocracy)."
    },
    {
        question: "The ideal of Justice—social, economic, and political—has been taken from the:",
        options: ["French Revolution", "Russian Revolution (1917)", "American Revolution", "Irish Constitution"],
        correctAnswerIndex: 1,
        explanation: "Taken from the Russian Revolution (1917)."
    },
    {
        question: "Social Justice denotes the equal treatment of all citizens without any social distinction based on caste, colour, race, religion, sex and so on. It involves the absence of:",
        options: ["Privileges being extended to any particular section.", "Opportunities for the poor.", "Fundamental Rights.", "Judicial Review."],
        correctAnswerIndex: 0,
        explanation: "Social justice means absence of privileges to any section."
    },
    {
        question: "'Economic Justice' eliminates inequalities in wealth, income, and property. A combination of social justice and economic justice denotes what is known as:",
        options: ["Distributive Justice", "Political Justice", "Legal Justice", "Natural Justice"],
        correctAnswerIndex: 0,
        explanation: "Social + Economic Justice = Distributive Justice."
    },
    {
        question: "The ideals of Liberty, Equality, and Fraternity in our Preamble have been taken from the:",
        options: ["Russian Revolution", "French Revolution (1789–1799)", "American Civil War", "Glorious Revolution"],
        correctAnswerIndex: 1,
        explanation: "Taken from the French Revolution."
    },
    {
        question: "Liberty meant in the Preamble is not absolute but:",
        options: ["Restricted", "Qualified", "Unlimited", "Temporary"],
        correctAnswerIndex: 1,
        explanation: "Liberty is qualified, meaning it is subject to reasonable restrictions."
    },
    {
        question: "Equality means the absence of special privileges to any section of the society, and the provision of adequate opportunities for all individuals without any discrimination. Which Article abolishes 'untouchability'?",
        options: ["Article 14", "Article 16", "Article 17", "Article 18"],
        correctAnswerIndex: 2,
        explanation: "Article 17 abolishes Untouchability."
    },
    {
        question: "Which Article ensures 'Political Equality' by providing that no person is to be declared ineligible for inclusion in electoral rolls on grounds of religion, race, caste or sex?",
        options: ["Article 325", "Article 326", "Article 15", "Article 16"],
        correctAnswerIndex: 0,
        explanation: "Article 325."
    },
    {
        question: "'Fraternity' means a sense of brotherhood. The Constitution promotes this feeling by the system of:",
        options: ["Dual Citizenship", "Single Citizenship", "Reservation", "Federalism"],
        correctAnswerIndex: 1,
        explanation: "Single Citizenship promotes fraternity."
    },
    {
        question: "The Preamble declares that fraternity has to assure two things: the dignity of the individual and the:",
        options: ["Unity and Integrity of the nation.", "Progress and Prosperity of the nation.", "Security and Defense of the nation.", "Liberty and Equality of the nation."],
        correctAnswerIndex: 0,
        explanation: "Fraternity assures: Dignity of the individual and the Unity and Integrity of the nation."
    },
    {
        question: "The word 'Integrity' was added to the Preamble by the:",
        options: ["24th Amendment Act", "42nd Amendment Act", "44th Amendment Act", "86th Amendment Act"],
        correctAnswerIndex: 1,
        explanation: "Added by the 42nd Amendment Act (1976)."
    },
    {
        question: "Who described the Preamble as the \"Horoscope of our Sovereign Democratic Republic\"?",
        options: ["Pandit Thakur Das Bhargava", "K.M. Munshi", "Sir Ernest Barker", "M. Hidayatullah"],
        correctAnswerIndex: 1,
        explanation: "K.M. Munshi described it as the 'Horoscope'."
    },
    {
        question: "Who called the Preamble the \"Key-note\" to the Constitution?",
        options: ["Sir Ernest Barker", "Sir Alladi Krishnaswami Ayyar", "Dr. B.R. Ambedkar", "Jawaharlal Nehru"],
        correctAnswerIndex: 0,
        explanation: "Sir Ernest Barker."
    },
    {
        question: "Sir Ernest Barker was so moved by the text of the Preamble that he quoted it at the opening of his popular book:",
        options: ["Principles of Social and Political Theory", "The Spirit of Laws", "The Law of the Constitution", "Modern Democracies"],
        correctAnswerIndex: 0,
        explanation: "Principles of Social and Political Theory (1951)."
    },
    {
        question: "In the Berubari Union case (1960), the Supreme Court opined that:",
        options: ["The Preamble is an integral part of the Constitution.", "The Preamble is NOT a part of the Constitution.", "The Preamble can override the specific provisions of the Constitution.", "The Preamble is the source of power to the legislature."],
        correctAnswerIndex: 1,
        explanation: "SC opined that Preamble is NOT a part of the Constitution."
    },
    {
        question: "In the Kesavananda Bharati case (1973), the Supreme Court rejected the earlier opinion and held that:",
        options: ["The Preamble is an integral part of the Constitution.", "The Preamble is not a part of the Constitution.", "The Preamble cannot be amended.", "The Preamble is superior to Fundamental Rights."],
        correctAnswerIndex: 0,
        explanation: "SC held that Preamble IS an integral part of the Constitution."
    },
    {
        question: "In the LIC of India case (1995), the Supreme Court again held that the Preamble is:",
        options: ["An integral part of the Constitution.", "Not a part of the Constitution.", "Just an introduction.", "A separate entity."],
        correctAnswerIndex: 0,
        explanation: "Reiterated that it is an integral part."
    },
    {
        question: "Two things should be noted about the Preamble: 1. It is neither a source of power to legislature nor a prohibition upon the powers of legislature. 2. It is:",
        options: ["Justiciable (enforceable in courts).", "Non-justiciable (not enforceable in courts).", "Mandatory.", "Binding on the President."],
        correctAnswerIndex: 1,
        explanation: "It is non-justiciable."
    },
    {
        question: "The Supreme Court held that the Preamble can be amended under Article 368, subject to the condition that:",
        options: ["The amendment is passed by a special majority.", "The 'Basic Features' or 'Fundamental Features' of the Constitution as contained in the Preamble cannot be altered.", "The President gives his assent.", "It is ratified by half of the states."],
        correctAnswerIndex: 1,
        explanation: "It can be amended, but 'Basic Features' cannot be altered."
    },
    {
        question: "The Preamble states the date of adoption of the Constitution as:",
        options: ["26th January, 1950", "15th August, 1947", "26th November, 1949", "26th January, 1930"],
        correctAnswerIndex: 2,
        explanation: "26th November, 1949."
    }
];

// Level 2: The Conceptual Bridge
const LEVEL_2_QUESTIONS = [
    {
        question: "\"The Preamble is non-justiciable.\" This implies that:",
        options: ["Its provisions cannot be enforced in courts of law.", "It cannot be amended by the Parliament.", "It is superior to Fundamental Rights.", "It is not a part of the Constitution."],
        correctAnswerIndex: 0,
        explanation: "Non-justiciable means it cannot be enforced by courts."
    },
    {
        question: "Despite being non-justiciable, the Supreme Court has held that the Preamble plays a vital role in:",
        options: ["Overriding the provisions of the Constitution in case of ambiguity.", "Interpreting the provisions of the Constitution where the language is ambiguous.", "Restricting the power of the Parliament to amend the Constitution.", "Empowering the President to declare an emergency."],
        correctAnswerIndex: 1,
        explanation: "It aids in interpreting ambiguous provisions."
    },
    {
        question: "The phrase \"We, the People of India\" in the Preamble emphasizes the concept of:",
        options: ["Parliamentary Sovereignty", "Popular Sovereignty", "Legal Sovereignty", "Executive Sovereignty"],
        correctAnswerIndex: 1,
        explanation: "It emphasizes Popular Sovereignty."
    },
    {
        question: "The \"Sovereignty\" mentioned in the Preamble is political sovereignty. Who holds the legal sovereignty in India?",
        options: ["The People of India", "The Constitution of India", "The Supreme Court of India", "The Parliament of India"],
        correctAnswerIndex: 1,
        explanation: "The Constitution of India holds legal sovereignty."
    },
    {
        question: "\"Socialism\" in the Preamble is often described as a \"blend of Marxism and Gandhism, leaning heavily towards Gandhism.\" This means:",
        options: ["It advocates for the complete abolition of private property.", "It aims for a classless society through violent struggle.", "It focuses on the welfare of the people and the removal of inequality through democratic means.", "It promotes state ownership of all industries."],
        correctAnswerIndex: 2,
        explanation: "It focuses on welfare and removal of inequality democratically."
    },
    {
        question: "In the Berubari Union case (1960), the Supreme Court's opinion that the Preamble is \"not a part of the Constitution\" was based on the fact that:",
        options: ["It was not debated in the Constituent Assembly.", "It was not voted upon in the Constituent Assembly.", "It is not a source of substantive power.", "It was adopted after the rest of the Constitution was enacted."],
        correctAnswerIndex: 2,
        explanation: "It was based on the view that it's not a source of substantive power."
    },
    {
        question: "The Kesavananda Bharati case (1973) overruled the Berubari judgment. The Court held that the Preamble is an integral part of the Constitution because:",
        options: ["It was adopted by the Constituent Assembly in the same manner as other parts.", "The motion \"The Preamble stands part of the Constitution\" was adopted.", "It reflects the basic structure of the Constitution.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All arguments supported the view that it is an integral part."
    },
    {
        question: "The \"Basic Structure Doctrine\" limits the amending power of the Parliament. Can the Preamble itself be amended?",
        options: ["No, the Preamble is unamendable.", "Yes, but only the parts that do not form the 'Basic Features'.", "Yes, completely, without any restriction.", "Only with the consent of the United Nations."],
        correctAnswerIndex: 1,
        explanation: "It can be amended, subject to the Basic Structure doctrine."
    },
    {
        question: "The insertion of the word \"Secular\" by the 42nd Amendment was criticized by some as unnecessary because:",
        options: ["India was already a secular state as per Articles 25-28.", "The concept of secularism is Western and not applicable to India.", "It would lead to minority appeasement.", "It would restrict the freedom of religion."],
        correctAnswerIndex: 0,
        explanation: "It was argued that Articles 25-28 already established secularism."
    },
    {
        question: "\"Economic Justice\" in the Preamble is directed to be achieved through:",
        options: ["Fundamental Rights (Part III) only.", "Directive Principles of State Policy (Part IV) only.", "Both Part III and Part IV.", "The Preamble itself."],
        correctAnswerIndex: 2,
        explanation: "Achieved through both Part III and Part IV."
    },
    {
        question: "\"Liberty of thought, expression, belief, faith and worship.\" This sequence is significant. Which Article of the Constitution primarily guarantees these liberties?",
        options: ["Article 14", "Article 19", "Article 21", "Article 25"],
        correctAnswerIndex: 1,
        explanation: "Article 19 guarantees Freedom of Speech (thought/expression) and Art 25 (belief/faith/worship)."
    },
    {
        question: "The \"Equality of Status and of Opportunity\" mentioned in the Preamble is ensured by which set of Articles?",
        options: ["Articles 14-18", "Articles 19-22", "Articles 23-24", "Articles 25-28"],
        correctAnswerIndex: 0,
        explanation: "Articles 14-18 (Right to Equality)."
    },
    {
        question: "\"Fraternity\" cannot be achieved without:",
        options: ["Social Justice", "Economic Justice", "Liberty and Equality", "Political Justice"],
        correctAnswerIndex: 2,
        explanation: "Dr. Ambedkar said Liberty and Equality are essential for Fraternity."
    },
    {
        question: "Dr. Ambedkar stated that \"Liberty, Equality and Fraternity\" form a union of trinity because:",
        options: ["They are derived from the French Revolution.", "To divorce one from the other is to defeat the very purpose of democracy.", "They are the three pillars of the Constitution.", "They are mentioned in the UN Charter."],
        correctAnswerIndex: 1,
        explanation: "To divorce one from the other defeats the purpose of democracy."
    },
    {
        question: "The word \"Republic\" implies that the Head of State is elected. In India, the President is elected indirectly. This contrasts with the UK where the Head of State is:",
        options: ["Elected directly.", "Hereditary.", "Nominated by the Parliament.", "Selected by the Judiciary."],
        correctAnswerIndex: 1,
        explanation: "In the UK, the Head of State (Monarch) is hereditary."
    },
    {
        question: "The Preamble of the Indian Constitution is different from the Preamble of the US Constitution in that:",
        options: ["The US Preamble is justiciable.", "The Indian Preamble is much longer and detailed.", "The Indian Preamble mentions \"Socialist\" and \"Secular\".", "Both (b) and (c)."],
        correctAnswerIndex: 3,
        explanation: "Indian Preamble is longer and explicitly mentions Socialist/Secular."
    },
    {
        question: "Which of the following is NOT an objective of the Constitution as declared in the Preamble?",
        options: ["Justice", "Liberty", "Equality", "Federalism"],
        correctAnswerIndex: 3,
        explanation: "Federalism is a feature, not an objective declared in the Preamble."
    },
    {
        question: "The Preamble does not mention which date?",
        options: ["Date of Adoption (26 Nov 1949).", "Date of Commencement (26 Jan 1950).", "It mentions both.", "It mentions neither."],
        correctAnswerIndex: 1,
        explanation: "It mentions only the Date of Adoption (26 Nov 1949)."
    },
    {
        question: "\"Dignity of the Individual\" is assured by the Constitution through:",
        options: ["Fundamental Rights.", "Directive Principles of State Policy.", "Fundamental Duties.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Assured by FRs, DPSPs, and FDs."
    },
    {
        question: "The Preamble is often referred to as a \"Political Horoscope\" because:",
        options: ["It predicts the future of the nation.", "It outlines the nature of the state and the objectives it seeks to achieve.", "It was drafted by astrologers.", "It is based on planetary positions."],
        correctAnswerIndex: 1,
        explanation: "It outlines the philosophy and future direction (objectives) of the state."
    },
    {
        question: "Assertion (A): The Preamble is the key to the understanding of the mind of the makers of the Constitution. Reason (R): It embodies the basic philosophy and fundamental values on which the Constitution is based.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "R explains why A is true."
    },
    {
        question: "Assertion (A): India is a Sovereign state. Reason (R): India can acquire a foreign territory or cede a part of its territory in favor of a foreign state.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "The power to acquire/cede territory is an essential attribute of sovereignty."
    },
    {
        question: "Assertion (A): The Preamble is not enforceable in a court of law. Reason (R): The Preamble does not grant any power to the legislature or the executive.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Lack of substantive power contributes to its non-justiciability."
    },
    {
        question: "\"Unity and Integrity of the Nation\" embraces both:",
        options: ["Psychological and Territorial dimensions.", "Social and Economic dimensions.", "Political and Religious dimensions.", "Internal and External dimensions."],
        correctAnswerIndex: 0,
        explanation: "It covers both territorial (integrity) and psychological (unity) dimensions."
    },
    {
        question: "The phrase \"assuring the dignity of the individual\" was added to the Preamble:",
        options: ["By the 42nd Amendment.", "By the 44th Amendment.", "It was present in the original Constitution.", "It is not in the Preamble."],
        correctAnswerIndex: 2,
        explanation: "It was present in the original Preamble."
    },
    {
        question: "If a law violates the \"Basic Structure\" of the Constitution (e.g., Secularism), the Supreme Court can strike it down. The source of this \"Basic Structure\" concept is primarily found in:",
        options: ["The Fundamental Rights alone.", "The Directive Principles alone.", "The Preamble read with other parts of the Constitution.", "The Ninth Schedule."],
        correctAnswerIndex: 2,
        explanation: "The Preamble contains the grand noble vision which constitutes the Basic Structure."
    },
    {
        question: "The \"Socialist\" goal of the Preamble is to be achieved through:",
        options: ["Establishing a Communist state.", "Implementation of Directive Principles like Article 39(b) and 39(c).", "Abolishing all private sector banks.", "Providing free food to everyone."],
        correctAnswerIndex: 1,
        explanation: "Achieved through DPSPs promoting equitable distribution of resources."
    },
    {
        question: "\"Distributive Justice\" is a combination of:",
        options: ["Social Justice and Political Justice.", "Economic Justice and Political Justice.", "Social Justice and Economic Justice.", "Liberty and Equality."],
        correctAnswerIndex: 2,
        explanation: "Social + Economic Justice = Distributive Justice."
    },
    {
        question: "The Preamble serves as a guide to the interpretation of the Constitution when:",
        options: ["The text of the Constitution is clear and unambiguous.", "The text of the Constitution is vague or has more than one meaning.", "The Government wants to bypass a provision.", "The President wants to dissolve the Lok Sabha."],
        correctAnswerIndex: 1,
        explanation: "It aids interpretation when the text is ambiguous."
    },
    {
        question: "Which of the following statements is correct regarding the adoption of the Preamble?",
        options: ["It was adopted before the Constitution was drafted.", "It was adopted after the entire Constitution was enacted to ensure conformity.", "It was adopted simultaneously with the Fundamental Rights.", "It was never formally adopted."],
        correctAnswerIndex: 1,
        explanation: "It was adopted last to ensure it conformed to the Constitution."
    }
];

// Level 3: The UPSC Simulation
const LEVEL_3_QUESTIONS = [
    {
        question: "In the context of the government's aggressive push for privatization (e.g., Air India, LIC IPO) and the \"Minimum Government, Maximum Governance\" policy, critics argue this dilutes the \"Socialist\" credential of the Preamble. The Supreme Court's stance (post-1991 reforms) has been that:",
        options: ["The word \"Socialist\" in the Preamble is now redundant and should be removed.", "\"Socialism\" in the Indian context does not mean state ownership of all resources but aims at \"distributive justice\" and ending poverty, which can be achieved through a mixed economy.", "Privatization of Public Sector Undertakings (PSUs) is unconstitutional as it violates the Preamble.", "The Preamble only binds the Legislature, not the Executive's economic policy."],
        correctAnswerIndex: 1,
        explanation: "SC held that socialism means distributive justice, not necessarily state ownership."
    },
    {
        question: "The \"Right to Property\" was removed as a Fundamental Right, but the Preamble still guarantees \"Economic Justice\". In 2024, the Supreme Court in the Property Rights Case (interpreting Article 300A) held that:",
        options: ["The state has absolute power to acquire private property for any \"public purpose\" without fair compensation.", "The \"authority of law\" to deprive a person of property must be \"just, fair and reasonable,\" linking Article 300A back to the \"Justice\" and \"Dignity\" clauses of the Preamble.", "Economic Justice is a Directive Principle and cannot be enforced against private property acquisition.", "Adverse possession is the only way to claim economic justice."],
        correctAnswerIndex: 1,
        explanation: "Authority of law must be just, fair, and reasonable."
    },
    {
        question: "The \"Freebies Culture\" (Revadi Culture) debate in elections is often linked to the \"Socialist\" directive. The Election Commission and Supreme Court are deliberating whether:",
        options: ["Promising freebies violates the \"Free and Fair Elections\" basic structure.", "It fulfills the Preamble's objective of \"Economic Justice\" and \"Equality of Status\".", "It creates an uneven playing field, violating Article 14.", "All of the above arguments are part of the constitutional debate."],
        correctAnswerIndex: 3,
        explanation: "All arguments are part of the ongoing debate."
    },
    {
        question: "With the implementation of the Uniform Civil Code (UCC) in states like Uttarakhand (2024), the interpretation of \"Secular\" in the Preamble is under focus. The \"Positive Secularism\" of India implies that:",
        options: ["The State must have no role in religious practices (Western model).", "The State can reform personal laws to ensure \"Fraternity\" and \"Dignity of the Individual\" (e.g., gender equality), even if it touches upon religious practices.", "The State must support all religions equally by funding their schools.", "The Preamble's \"Secular\" word prohibits any Uniform Civil Code."],
        correctAnswerIndex: 1,
        explanation: "Positive secularism allows reform for dignity and fraternity."
    },
    {
        question: "The Citizenship Amendment Act (CAA) Rules notified in 2024 faced challenges for violating the \"Secular\" basic structure. The counter-argument relying on the Preamble's \"Sovereign\" status is that:",
        options: ["A Sovereign state has the absolute right to define who its citizens are and to classify aliens.", "Sovereignty allows the state to adopt a state religion.", "The Preamble's \"Secular\" clause applies only to citizens, not to aliens or refugees.", "The Preamble is not a source of power, so it cannot restrict the CAA."],
        correctAnswerIndex: 0,
        explanation: "Sovereign state has the right to define citizenship."
    },
    {
        question: "The \"Places of Worship Act, 1991\" is often cited as a statutory reflection of the Preamble's \"Secular\" value. In the context of the Gyanvapi Mosque and Mathura disputes (2024-25), the Supreme Court has held that:",
        options: ["The Act is absolute and bars any judicial inquiry into the character of a place of worship.", "The \"ascertainment of the religious character\" of a place is not barred by the Act; only the \"conversion\" is barred.", "The Preamble's secularism does not apply to pre-1947 disputes.", "The Act itself is unconstitutional."],
        correctAnswerIndex: 1,
        explanation: "Ascertainment of character is not barred."
    },
    {
        question: "The \"Right to be Forgotten\" (part of the Data Protection Act 2023 discourse) is derived from the \"Liberty of thought and expression\" and \"Dignity of the Individual\". However, it conflicts with:",
        options: ["The \"Right to Information\" (derived from Freedom of Speech).", "The \"Justice\" (Social and Political) clause which requires transparency in public records (e.g., court verdicts).", "The \"Fraternity\" clause.", "Both (a) and (b)."],
        correctAnswerIndex: 3,
        explanation: "It conflicts with RTI and open justice."
    },
    {
        question: "The \"Fraternity\" clause in the Preamble was specifically cited by the Supreme Court in the Kaushal Kishore judgment (2023) regarding Hate Speech by Ministers. The Court linked Fraternity to:",
        options: ["The duty of the state to prevent hate speech that destroys the dignity of individuals.", "The absolute freedom of speech of Ministers.", "The concept of \"Collective Responsibility\" only.", "The \"Unity and Integrity\" clause only."],
        correctAnswerIndex: 0,
        explanation: "Hate speech destroys dignity and fraternity."
    },
    {
        question: "\"Dignity of the Individual\" has been expanded by the Supreme Court in recent years to include:\n1. The Right to Privacy (Puttaswamy case).\n2. The Right to choose a life partner (Hadiya case).\n3. The Right to die with dignity (Passive Euthanasia - Common Cause case).",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3,
        explanation: "All are included under Dignity."
    },
    {
        question: "The \"Basic Structure Doctrine\" is heavily reliant on the Preamble. In the NJAC case (2015), the Supreme Court struck down the amendment primarily to protect which value mentioned/implied in the Preamble?",
        options: ["Sovereignty of the People.", "Justice (Independence of Judiciary as a prerequisite for Rule of Law).", "Socialist pattern of society.", "Republic nature of the state."],
        correctAnswerIndex: 1,
        explanation: "Independence of Judiciary is essential for 'Justice' and Rule of Law."
    },
    {
        question: "The \"Preamble Controversy\" (2023) regarding the distribution of the original Constitution (without 'Socialist' and 'Secular') raised a technical constitutional question: Does the \"Original Constitution\" still exist legally?",
        options: ["No, only the amended text is the legal Constitution.", "Yes, the original text is a historical document, but the legal Constitution includes all amendments.", "The 42nd Amendment was declared void, so the original text is valid.", "The Preamble cannot be amended, so the original text is the only valid one."],
        correctAnswerIndex: 1,
        explanation: "The legal Constitution includes all amendments; original is historical."
    },
    {
        question: "\"We, the People of India... give to ourselves this Constitution.\" This phrase establishes \"Popular Sovereignty.\" How does this reconcile with the fact that the Constituent Assembly was indirectly elected?",
        options: ["It is a legal fiction; the Assembly was accepted as representing the people's will.", "The first General Election (1951-52) on the basis of adult franchise ratified the Constitution retrospectively.", "The Supreme Court in Kesavananda Bharati held that the \"legal sovereignty\" lies with the Constitution, but \"political sovereignty\" remains with the people.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All points help reconcile the indirect election with popular sovereignty."
    },
    {
        question: "Comparing the Indian Preamble with the French Constitution's Preamble, both emphasize \"Liberty, Equality, Fraternity.\" However, the Indian Preamble is unique in explicitly linking Fraternity to:",
        options: ["The Unity and Integrity of the Nation.", "The Secular nature of the state.", "The Socialist goal.", "The Justice delivery system."],
        correctAnswerIndex: 0,
        explanation: "Fraternity assures the Unity and Integrity of the Nation."
    },
    {
        question: "The \"Republic\" nature of India was tested when the question of \"Commonwealth Membership\" arose in 1949. Nehru justified it by stating:",
        options: ["The King is the Head of the Commonwealth, but not the Head of the Indian State.", "It is an \"extralegal\" arrangement that does not affect India's sovereignty.", "Allegiance to the Crown is only symbolic for Commonwealth relations, not for domestic governance.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All were parts of Nehru's justification."
    },
    {
        question: "The \"Social Justice\" objective of the Preamble is constitutionally realized through \"Affirmative Action\" (Reservation). The recent EWS Reservation (103rd Amendment) challenge argued that it violates the \"Basic Structure\" by:",
        options: ["Excluding SCs/STs/OBCs from the EWS quota (violating Equality Code).", "Using \"economic criteria\" alone (which was previously rejected).", "Exceeding the 50% ceiling (violating the efficiency of administration).", "All of the above arguments were raised."],
        correctAnswerIndex: 3,
        explanation: "All arguments were raised against EWS quota."
    },
    {
        question: "\"Justice, social, economic and political.\" Why is \"Political\" justice placed last in this sequence?",
        options: ["Because political justice is less important.", "Because without social and economic justice, political justice (one man, one vote) is meaningless (Dr. Ambedkar's view).", "Because it was alphabetically arranged.", "Because political justice was already achieved by the Independence Act."],
        correctAnswerIndex: 1,
        explanation: "Ambedkar believed political equality is meaningless without social/economic equality."
    },
    {
        question: "The Preamble secures to all citizens \"Liberty of thought, expression, belief, faith and worship.\" This corresponds directly to which specific Fundamental Rights?",
        options: ["Articles 19 and 21.", "Articles 19 and 25-28.", "Articles 14 and 19.", "Articles 25 and 32."],
        correctAnswerIndex: 1,
        explanation: "Article 19 (Thought/Expression) and Articles 25-28 (Belief/Faith/Worship)."
    },
    {
        question: "\"Equality of status and of opportunity.\" The term \"Status\" here refers to:",
        options: ["Financial status (wealth).", "Social status (abolition of caste hierarchy and titles).", "Political status (holding office).", "International status."],
        correctAnswerIndex: 1,
        explanation: "Equality of Status refers to social equality (abolition of caste/titles)."
    },
    {
        question: "Assertion (A): The Preamble is a part of the Constitution. Reason (R): A motion was adopted by the Constituent Assembly stating, \"The Preamble stands part of the Constitution.\"",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "The motion adoption is the historical fact making it part of the Constitution."
    },
    {
        question: "The date \"26th November, 1949\" in the Preamble marks the enactment of the Constitution. However, the Preamble itself came into force on:",
        options: ["26th November, 1949.", "26th January, 1950 (along with the rest of the Constitution).", "It has no date of commencement.", "It came into force after the first elections."],
        correctAnswerIndex: 1,
        explanation: "Preamble was enacted last but came into force on Jan 26, 1950."
    },
    {
        question: "In the Sengol controversy (New Parliament), the government emphasized the \"Transfer of Power.\" Constitutional experts argued that the Preamble reflects a different source of power. What is the distinction?",
        options: ["Sengol represents \"Divine Right\" or \"Dynastic Transfer,\" whereas the Preamble represents \"Popular Sovereignty.\"", "Sengol represents \"Legal Sovereignty,\" whereas Preamble represents \"Political Sovereignty.\"", "There is no conflict; both represent the same thing.", "The Preamble recognizes the transfer of power from the British Crown."],
        correctAnswerIndex: 0,
        explanation: "Sengol implies divine/dynastic right; Preamble implies Popular Sovereignty."
    },
    {
        question: "The \"Democracy Index\" reports often downgrade India citing \"Democratic Backsliding.\" The government rejects these citing the Preamble's \"Democratic\" mandate which is upheld by:",
        options: ["Regular and periodic elections (Election Commission).", "Independent Judiciary.", "Vibrant Civil Society.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All are pillars upholding the democratic mandate."
    },
    {
        question: "The \"Integrity\" of the nation is protected by restrictions on Fundamental Rights. Which Constitutional Amendment made \"Sovereignty and Integrity of India\" a ground for restricting Freedom of Speech (Article 19(2))?",
        options: ["1st Amendment (1951)", "16th Amendment (1963)", "42nd Amendment (1976)", "44th Amendment (1978)"],
        correctAnswerIndex: 1,
        explanation: "16th Amendment (1963) added Sovereignty and Integrity as a restriction."
    },
    {
        question: "The \"Idea of India\" as reflected in the Preamble is essentially:",
        options: ["A Civilizational State (based on ancient culture).", "A Nation-State (based on European model).", "A Constitutional State (based on the values of the Constitution).", "A Religious State."],
        correctAnswerIndex: 2,
        explanation: "Identity is defined by the Constitution (Values of Preamble)."
    },
    {
        question: "\"Liberty is not a license.\" This concept from the Preamble is reflected in:",
        options: ["The existence of \"Reasonable Restrictions\" on Fundamental Rights.", "The absolute nature of Fundamental Rights.", "The Directive Principles.", "The Emergency Provisions."],
        correctAnswerIndex: 0,
        explanation: "Liberty is qualified by reasonable restrictions."
    },
    {
        question: "The \"Socialist\" goal in the Preamble was recently tested in the Supreme Court judgment on 'Equal Pay for Equal Work'. The Court held that:",
        options: ["It is a Fundamental Right under Article 14, read with the Preamble's Socialist goal and Article 39(d).", "It is only a Directive Principle and not enforceable.", "It applies only to permanent employees, not contractual ones.", "Private companies are exempt from this principle."],
        correctAnswerIndex: 0,
        explanation: "It is implied in Art 14 read with Preamble and Art 39(d)."
    },
    {
        question: "The Preamble uses the word \"people\" (\"We, the People\"). However, Fundamental Rights use \"Person\" (Art 14) and \"Citizen\" (Art 15, 16, 19). This distinction implies:",
        options: ["The Preamble is broader than Fundamental Rights.", "Sovereignty resides in the \"People\" (collective), while rights belong to \"Persons/Citizens\" (individual).", "Aliens are not part of \"We, the People.\"", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Distinction between collective sovereignty and individual rights."
    },
    {
        question: "In the Bommai case (1994), the Supreme Court held that \"Secularism\" is a basic feature. It further stated that:",
        options: ["Politics and religion must be strictly mixed.", "Political parties cannot seek votes in the name of religion.", "State governments can be dismissed (Article 356) if they act against the secular ideal.", "Both (b) and (c)."],
        correctAnswerIndex: 3,
        explanation: "Bommai case held that secularism is basic structure and misuse of religion is ground for dismissal."
    },
    {
        question: "The \"Union of Trinity\" (Liberty, Equality, Fraternity) concept was originally articulated by Dr. Ambedkar in:",
        options: ["His speech moving the Draft Constitution (Nov 1948).", "His concluding speech in the Constituent Assembly (Nov 25, 1949).", "The Objectives Resolution debate.", "His resignation speech."],
        correctAnswerIndex: 1,
        explanation: "In his concluding speech."
    },
    {
        question: "Assertion (A): The Preamble is the \"soul\" of the Constitution. Reason (R): It contains the \"basic structure\" of the Constitution.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "It is the soul because it contains the basic structure/philosophy."
    }
];

export const CHAPTER_4_LEVELS: ChapterLevelData = {
    topicId: 4,
    levels: [
        {
            levelId: 1,
            title: "Text-Book Stickler",
            description: "Direct Recall. Mastering the Facts.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch4-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "Conceptual Bridge",
            description: "Understanding the 'Why' and 'How'.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch4-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation",
            description: "Complex Scenarios & Statement-based Qs.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch4-l3-q${i + 1}` }))
        }
    ]
};
