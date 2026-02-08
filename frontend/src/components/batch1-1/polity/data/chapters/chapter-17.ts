import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 17)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch17-l1-q1",
        question: "The Emergency provisions are contained in Part ______ of the Constitution.",
        options: ["Part XVI", "Part XVII", "Part XVIII", "Part XX"],
        correctAnswerIndex: 2,
        explanation: "Emergency provisions are in Part XVIII."
    },
    {
        id: "ch17-l1-q2",
        question: "The Emergency provisions are contained in Articles:",
        options: ["352 to 360", "350 to 360", "352 to 356", "360 to 368"],
        correctAnswerIndex: 0,
        explanation: "Articles 352 to 360 contain the Emergency provisions."
    },
    {
        id: "ch17-l1-q3",
        question: "The rationale behind the incorporation of these provisions is to safeguard the:",
        options: ["Sovereignty, unity, integrity and security of the country.", "Democratic political system.", "Constitution.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All are rationales for Emergency provisions."
    },
    {
        id: "ch17-l1-q4",
        question: "During an Emergency, the federal structure converts into a ______ one without a formal amendment of the Constitution.",
        options: ["Unitary", "Confederal", "Quasi-federal", "Rigid"],
        correctAnswerIndex: 0,
        explanation: "Emergency converts the federal structure into a unitary one."
    },
    {
        id: "ch17-l1-q5",
        question: "Under Article 352, the President can declare a national emergency when the security of India or a part of it is threatened by:",
        options: ["War or external aggression only.", "Armed rebellion only.", "War, external aggression or armed rebellion.", "Internal disturbance."],
        correctAnswerIndex: 2,
        explanation: "War, external aggression, or armed rebellion are grounds for National Emergency."
    },
    {
        id: "ch17-l1-q6",
        question: "The phrase \"Armed Rebellion\" was inserted in the Constitution to replace \"Internal Disturbance\" by the:",
        options: ["38th Amendment Act, 1975", "42nd Amendment Act, 1976", "44th Amendment Act, 1978", "46th Amendment Act, 1982"],
        correctAnswerIndex: 2,
        explanation: "44th Amendment Act, 1978 introduced 'Armed Rebellion'."
    },
    {
        id: "ch17-l1-q7",
        question: "The President can declare a national emergency even before the actual occurrence of war or external aggression if he is satisfied that there is an imminent danger.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, imminent danger is sufficient."
    },
    {
        id: "ch17-l1-q8",
        question: "The 42nd Amendment Act (1976) enabled the President to limit the operation of a National Emergency to:",
        options: ["The whole of India only.", "A specified part of India.", "Only border states.", "Only Union Territories."],
        correctAnswerIndex: 1,
        explanation: "President can limit Emergency to a specified part of India."
    },
    {
        id: "ch17-l1-q9",
        question: "The President can proclaim a national emergency only after receiving a written recommendation from the:",
        options: ["Prime Minister.", "Cabinet (Prime Minister and other Cabinet Ministers).", "Council of Ministers.", "Parliament."],
        correctAnswerIndex: 1,
        explanation: "Written recommendation from the Cabinet is mandatory."
    },
    {
        id: "ch17-l1-q10",
        question: "The proclamation of National Emergency must be approved by both the Houses of Parliament within ______ from the date of its issue.",
        options: ["One month", "Two months", "Six months", "One year"],
        correctAnswerIndex: 0,
        explanation: "Must be approved within one month."
    },
    {
        id: "ch17-l1-q11",
        question: "If the proclamation is issued when the Lok Sabha has been dissolved, it must be approved by the Rajya Sabha, and then by the reconstituted Lok Sabha within ______ from its first sitting.",
        options: ["14 days", "30 days", "60 days", "6 months"],
        correctAnswerIndex: 1,
        explanation: "Within 30 days from the first sitting of the reconstituted Lok Sabha."
    },
    {
        id: "ch17-l1-q12",
        question: "Once approved by both Houses, the Emergency continues for:",
        options: ["6 months.", "1 year.", "Indefinitely.", "3 years."],
        correctAnswerIndex: 0,
        explanation: "It continues for 6 months."
    },
    {
        id: "ch17-l1-q13",
        question: "It can be extended for an indefinite period with an approval of the Parliament for every:",
        options: ["6 months.", "1 year.", "2 years.", "3 years."],
        correctAnswerIndex: 0,
        explanation: "Can be extended every 6 months indefinitely."
    },
    {
        id: "ch17-l1-q14",
        question: "Every resolution approving the proclamation or its continuance must be passed by either House of Parliament by a:",
        options: ["Simple Majority.", "Special Majority.", "Absolute Majority.", "Effective Majority."],
        correctAnswerIndex: 1,
        explanation: "Special Majority is required."
    },
    {
        id: "ch17-l1-q15",
        question: "A proclamation of emergency may be revoked by the President at any time by a subsequent proclamation. Does such a revocation require Parliamentary approval?",
        options: ["Yes.", "No."],
        correctAnswerIndex: 1,
        explanation: "Revocation does not require Parliamentary approval."
    },
    {
        id: "ch17-l1-q16",
        question: "The 44th Amendment Act (1978) provided that if the Lok Sabha passes a resolution disapproving the continuation of National Emergency, the President:",
        options: ["May revoke it.", "Must revoke it.", "Can seek Supreme Court's opinion.", "Can ignore it."],
        correctAnswerIndex: 1,
        explanation: "The President must revoke it."
    },
    {
        id: "ch17-l1-q17",
        question: "During a National Emergency, the Centre becomes entitled to give executive directions to a State on:",
        options: ["Certain specified matters.", "'Any' matter.", "Only security matters.", "Only financial matters."],
        correctAnswerIndex: 1,
        explanation: "Centre can give directions on 'any' matter."
    },
    {
        id: "ch17-l1-q18",
        question: "During a National Emergency, the Parliament becomes empowered to make laws on any subject mentioned in the:",
        options: ["Union List.", "State List.", "Concurrent List.", "Residuary List."],
        correctAnswerIndex: 1,
        explanation: "Parliament can make laws on State List subjects."
    },
    {
        id: "ch17-l1-q19",
        question: "While a proclamation of National Emergency is in operation, the President can modify the constitutional distribution of revenues between the Centre and the States.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, President can modify revenue distribution."
    },
    {
        id: "ch17-l1-q20",
        question: "While a proclamation of National Emergency is in operation, the life of the Lok Sabha may be extended beyond its normal term for a period of:",
        options: ["Six months at a time.", "One year at a time.", "Two years at a time.", "Three years at a time."],
        correctAnswerIndex: 1,
        explanation: "Can be extended by one year at a time."
    },
    {
        id: "ch17-l1-q21",
        question: "Article 358 deals with the suspension of the Fundamental Rights guaranteed by:",
        options: ["Article 14.", "Article 19.", "Article 21.", "Article 32."],
        correctAnswerIndex: 1,
        explanation: "Article 358 suspends Article 19."
    },
    {
        id: "ch17-l1-q22",
        question: "Article 358 suspends Fundamental Rights automatically when the emergency is declared on the ground of:",
        options: ["War or External Aggression only.", "Armed Rebellion only.", "Both (a) and (b).", "Internal Disturbance."],
        correctAnswerIndex: 0,
        explanation: "War or External Aggression only."
    },
    {
        id: "ch17-l1-q23",
        question: "Article 359 empowers the President to suspend the right to move any court for the enforcement of Fundamental Rights except:",
        options: ["Article 14 and 19.", "Article 20 and 21.", "Article 19 and 21.", "Article 21 and 22."],
        correctAnswerIndex: 1,
        explanation: "Article 20 and 21 cannot be suspended."
    },
    {
        id: "ch17-l1-q24",
        question: "Article 356 empowers the President to issue a proclamation if he is satisfied that a situation has arisen in which the government of a state cannot be carried on in accordance with the provisions of the Constitution. This is popularly known as:",
        options: ["State Emergency.", "Constitutional Emergency.", "President's Rule.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All are names for Article 356 Emergency."
    },
    {
        id: "ch17-l1-q25",
        question: "Article 365 says that whenever a state fails to comply with or to give effect to any direction from the Centre, it shall be lawful for the President to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the Constitution.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, Article 365 validates President's Rule for non-compliance."
    },
    {
        id: "ch17-l1-q26",
        question: "A proclamation imposing President's Rule must be approved by both the Houses of Parliament within ______ from the date of its issue.",
        options: ["One month.", "Two months.", "Six months.", "One year."],
        correctAnswerIndex: 1,
        explanation: "Must be approved within two months."
    },
    {
        id: "ch17-l1-q27",
        question: "If approved by both Houses, the President's Rule continues for:",
        options: ["6 months.", "1 year.", "3 years.", "Indefinitely."],
        correctAnswerIndex: 0,
        explanation: "Continues for 6 months."
    },
    {
        id: "ch17-l1-q28",
        question: "The maximum period for which President's Rule can be extended (with Parliamentary approval every 6 months) is:",
        options: ["1 year.", "2 years.", "3 years.", "5 years."],
        correctAnswerIndex: 2,
        explanation: "Maximum period is 3 years."
    },
    {
        id: "ch17-l1-q29",
        question: "To extend President's Rule beyond one year, two conditions must be fulfilled: a National Emergency should be in operation, and:",
        options: ["The Supreme Court must certify it.", "The Election Commission must certify that general elections to the legislative assembly cannot be held.", "The Governor must recommend it.", "All political parties must agree."],
        correctAnswerIndex: 1,
        explanation: "EC certification is required for extension beyond 1 year."
    },
    {
        id: "ch17-l1-q30",
        question: "Under President's Rule, the President dismisses the:",
        options: ["State Legislative Assembly.", "State Council of Ministers headed by the Chief Minister.", "Governor.", "High Court Judges."],
        correctAnswerIndex: 1,
        explanation: "President dismisses the State Council of Ministers."
    },
    {
        id: "ch17-l1-q31",
        question: "Under President's Rule, the State Legislative Assembly is either suspended or dissolved by the:",
        options: ["Governor.", "President.", "Parliament.", "Chief Justice."],
        correctAnswerIndex: 1,
        explanation: "President suspends or dissolves the Assembly."
    },
    {
        id: "ch17-l1-q32",
        question: "Article 360 empowers the President to proclaim a Financial Emergency if he is satisfied that a situation has arisen due to which the ______ of India or any part of its territory is threatened.",
        options: ["Financial stability or credit.", "Security.", "Law and order.", "Currency value."],
        correctAnswerIndex: 0,
        explanation: "Financial stability or credit."
    },
    {
        id: "ch17-l1-q33",
        question: "A proclamation declaring Financial Emergency must be approved by both the Houses of Parliament within:",
        options: ["One month.", "Two months.", "Six months.", "One year."],
        correctAnswerIndex: 1,
        explanation: "Must be approved within two months."
    },
    {
        id: "ch17-l1-q34",
        question: "Once approved by both Houses, the Financial Emergency continues:",
        options: ["For 6 months.", "For 1 year.", "Indefinitely till it is revoked.", "For 3 years."],
        correctAnswerIndex: 2,
        explanation: "Continues indefinitely till revoked."
    },
    {
        id: "ch17-l1-q35",
        question: "During Financial Emergency, the President can issue directions for the reduction of salaries and allowances of:",
        options: ["All classes of persons serving the Union.", "Judges of the Supreme Court and High Courts.", "Persons serving the State.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Can reduce salaries of all listed categories."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        id: "ch17-l2-q1",
        question: "Before the 44th Amendment, a proclamation of National Emergency could be approved by Parliament by a:",
        options: ["Simple Majority.", "Special Majority.", "Absolute Majority.", "Consensus."],
        correctAnswerIndex: 0,
        explanation: "Originally it was Simple Majority."
    },
    {
        id: "ch17-l2-q2",
        question: "The 44th Amendment mandated that the President can proclaim a National Emergency only after receiving a written recommendation from the Cabinet. This was done to:",
        options: ["Empower the Prime Minister further.", "Prevent the Prime Minister from taking a unilateral decision (as happened in 1975).", "Ensure the President's satisfaction is final.", "Reduce the role of Parliament."],
        correctAnswerIndex: 1,
        explanation: "To prevent PM's unilateral decision."
    },
    {
        id: "ch17-l2-q3",
        question: "The 44th Amendment substituted the word \"Internal Disturbance\" with \"Armed Rebellion\". Why?",
        options: ["\"Internal Disturbance\" was too vague and susceptible to misuse.", "\"Armed Rebellion\" covers all forms of protest.", "To align with International Law.", "To include economic disturbances."],
        correctAnswerIndex: 0,
        explanation: "'Internal Disturbance' was vague and misused."
    },
    {
        id: "ch17-l2-q4",
        question: "The 44th Amendment restricted the scope of Article 358. Now, Article 19 is suspended only if the National Emergency is declared on the ground of:",
        options: ["War or External Aggression.", "Armed Rebellion.", "Internal Disturbance.", "Financial Instability."],
        correctAnswerIndex: 0,
        explanation: "Only on grounds of War or External Aggression."
    },
    {
        id: "ch17-l2-q5",
        question: "The 44th Amendment provided that Article 20 and 21 cannot be suspended even during a National Emergency. This means:",
        options: ["The right to move court for their enforcement remains alive.", "The State cannot make laws violating them.", "Habeas Corpus is available.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these implications follow."
    },
    {
        id: "ch17-l2-q6",
        question: "Article 358 suspends Fundamental Rights under Article 19 automatically. Article 359 empowers the President to suspend:",
        options: ["The Fundamental Rights themselves.", "The enforcement of Fundamental Rights (Right to move court).", "The Constitution.", "The Judiciary."],
        correctAnswerIndex: 1,
        explanation: "Article 359 suspends the enforcement of FRs."
    },
    {
        id: "ch17-l2-q7",
        question: "Article 358 operates only in case of External Emergency (War/External Aggression). Article 359 operates in case of:",
        options: ["External Emergency only.", "Internal Emergency only.", "Both External and Internal Emergency.", "Financial Emergency only."],
        correctAnswerIndex: 2,
        explanation: "Article 359 operates in both External and Internal Emergency."
    },
    {
        id: "ch17-l2-q8",
        question: "Article 358 extends to the entire country. Article 359 may extend to:",
        options: ["The entire country or a part of it.", "Only the border states.", "Only the capital.", "Only the state under President's Rule."],
        correctAnswerIndex: 0,
        explanation: "Can extend to the entire country or a part of it."
    },
    {
        id: "ch17-l2-q9",
        question: "When an order is made under Article 359 suspending the enforcement of certain rights, are the laws made by the State inconsistent with those rights valid?",
        options: ["Yes, but only during the emergency.", "No, they are void ab initio.", "Yes, permanently.", "Only if approved by the Supreme Court."],
        correctAnswerIndex: 0,
        explanation: "Yes, valid but only during the emergency."
    },
    {
        id: "ch17-l2-q10",
        question: "The suspension of enforcement under Article 359 requires:",
        options: ["A Presidential Order specifying the rights.", "Automatic suspension.", "Parliamentary approval for each right.", "Judicial permission."],
        correctAnswerIndex: 0,
        explanation: "Requires a Presidential Order specifying the rights."
    },
    {
        id: "ch17-l2-q11",
        question: "A resolution for disapproval of the continuation of National Emergency (added by 44th Amendment) must be passed by the Lok Sabha by:",
        options: ["Simple Majority.", "Special Majority.", "Absolute Majority.", "Two-thirds present and voting."],
        correctAnswerIndex: 0,
        explanation: "Disapproval resolution requires Simple Majority."
    },
    {
        id: "ch17-l2-q12",
        question: "In contrast, a resolution for approval or continuance of National Emergency must be passed by:",
        options: ["Simple Majority.", "Special Majority.", "Absolute Majority.", "Consensus."],
        correctAnswerIndex: 1,
        explanation: "Approval requires Special Majority."
    },
    {
        id: "ch17-l2-q13",
        question: "To introduce a resolution for disapproval in the Lok Sabha, a notice signed by at least ______ of the total members must be given to the Speaker/President.",
        options: ["One-tenth (1/10).", "One-fifth (1/5).", "One-third (1/3).", "Fifty members."],
        correctAnswerIndex: 0,
        explanation: "One-tenth of total members."
    },
    {
        id: "ch17-l2-q14",
        question: "If the Lok Sabha stands dissolved, the proclamation of National Emergency survives until 30 days from the first sitting of the reconstituted Lok Sabha, provided:",
        options: ["The Rajya Sabha has approved it.", "The President has approved it.", "The Prime Minister certifies it.", "The Supreme Court stays it."],
        correctAnswerIndex: 0,
        explanation: "Rajya Sabha must have approved it."
    },
    {
        id: "ch17-l2-q15",
        question: "In the S.R. Bommai case (1994), the Supreme Court held that the proclamation of President's Rule is:",
        options: ["Subject to Judicial Review.", "Not subject to Judicial Review.", "A political question beyond courts.", "Final and binding."],
        correctAnswerIndex: 0,
        explanation: "It is subject to Judicial Review."
    },
    {
        id: "ch17-l2-q16",
        question: "The Court in Bommai case held that if the proclamation is struck down as unconstitutional:",
        options: ["The dismissed State Government cannot be revived.", "The dismissed State Government and dissolved Assembly can be revived/restored.", "Fresh elections must be held immediately.", "The Governor is removed."],
        correctAnswerIndex: 1,
        explanation: "Government and Assembly can be revived."
    },
    {
        id: "ch17-l2-q17",
        question: "The burden of proof to justify the imposition of President's Rule lies on:",
        options: ["The Centre (Union of India).", "The State Government.", "The Governor.", "The Petitioner."],
        correctAnswerIndex: 0,
        explanation: "Burden of proof lies on the Centre."
    },
    {
        id: "ch17-l2-q18",
        question: "Can the President dissolve the State Legislative Assembly before the Parliament approves the proclamation of President's Rule?",
        options: ["Yes, he has the power.", "No, he can only suspend the Assembly. Dissolution is allowed only after Parliamentary approval.", "Yes, on Governor's recommendation.", "Yes, if the CM resigns."],
        correctAnswerIndex: 1,
        explanation: "No, he can only suspend. Dissolution requires Parliamentary approval."
    },
    {
        id: "ch17-l2-q19",
        question: "Which of the following is considered a \"Proper Ground\" for imposing President's Rule according to the Bommai judgment?",
        options: ["Hung Assembly (No party can form government).", "Maladministration in the state.", "The party in power in the state suffering a massive defeat in Lok Sabha elections.", "Internal disturbances not amounting to failure of constitutional machinery."],
        correctAnswerIndex: 0,
        explanation: "Hung Assembly is a proper ground."
    },
    {
        id: "ch17-l2-q20",
        question: "\"Secularism\" was held to be a Basic Feature in Bommai case. Therefore, if a State Government acts against secular politics:",
        options: ["It can be dismissed under Article 356.", "It cannot be dismissed.", "It is a matter of freedom of religion.", "The High Court should intervene."],
        correctAnswerIndex: 0,
        explanation: "It can be dismissed under Article 356."
    },
    {
        id: "ch17-l2-q21",
        question: "Has a Financial Emergency ever been declared in India?",
        options: ["Yes, in 1991.", "Yes, in 2008.", "No, never.", "Yes, in 1975."],
        correctAnswerIndex: 2,
        explanation: "No, never declared."
    },
    {
        id: "ch17-l2-q22",
        question: "Once approved by Parliament, Financial Emergency continues indefinitely. This means:",
        options: ["It requires repeated Parliamentary approval every 6 months.", "It does not require repeated Parliamentary approval.", "It lapses after 3 years.", "It lapses when the financial crisis is over."],
        correctAnswerIndex: 1,
        explanation: "Does not require repeated Parliamentary approval."
    },
    {
        id: "ch17-l2-q23",
        question: "The resolution approving Financial Emergency can be passed by:",
        options: ["Simple Majority.", "Special Majority.", "Absolute Majority.", "Two-thirds majority."],
        correctAnswerIndex: 0,
        explanation: "Passed by Simple Majority."
    },
    {
        id: "ch17-l2-q24",
        question: "Article 355 imposes a duty on the Centre to ensure that the government of every State is carried on in accordance with the provisions of the Constitution. This article is the basis for:",
        options: ["Article 356.", "Article 352.", "Article 360.", "Article 365."],
        correctAnswerIndex: 0,
        explanation: "It is the basis for Article 356."
    },
    {
        id: "ch17-l2-q25",
        question: "The \"38th Amendment Act\" (1975) made the declaration of National Emergency non-justiciable. This provision was deleted by:",
        options: ["42nd Amendment Act.", "44th Amendment Act.", "46th Amendment Act.", "Minerva Mills judgment."],
        correctAnswerIndex: 1,
        explanation: "Deleted by 44th Amendment Act."
    },
    {
        id: "ch17-l2-q26",
        question: "Which Emergency has an outer limit of 3 years for its operation?",
        options: ["National Emergency.", "President's Rule (Article 356).", "Financial Emergency.", "None."],
        correctAnswerIndex: 1,
        explanation: "President's Rule has an outer limit of 3 years."
    },
    {
        id: "ch17-l2-q27",
        question: "Assertion (A): The President can suspend the enforcement of Article 20 and 21 during a National Emergency. Reason (R): Article 359 empowers the President to suspend the enforcement of any Fundamental Right. Select the correct answer:",
        options: ["Both A and R are true.", "A is true, R is false.", "A is false, R is true.", "Both A and R are false (44th Amendment prohibits suspension of 20 & 21)."],
        correctAnswerIndex: 3,
        explanation: "Both are false."
    },
    {
        id: "ch17-l2-q28",
        question: "In case of National Emergency on grounds of \"War\", the Fundamental Rights under Article 19 are:",
        options: ["Automatically suspended.", "Suspended by a Presidential Order.", "Not suspended.", "Suspended only in border states."],
        correctAnswerIndex: 0,
        explanation: "Automatically suspended (Article 358)."
    },
    {
        id: "ch17-l2-q29",
        question: "Under President's Rule, the Parliament can delegate the power to make laws for the State to:",
        options: ["The President (who may further delegate it).", "The Governor.", "The Chief Secretary.", "The High Court."],
        correctAnswerIndex: 0,
        explanation: "Delegated to the President."
    },
    {
        id: "ch17-l2-q30",
        question: "Effect on Lok Sabha vs State Assembly Tenure:",
        options: ["National Emergency can extend Lok Sabha tenure; President's Rule dissolves State Assembly.", "National Emergency dissolves Lok Sabha; President's Rule extends State Assembly.", "Both affect tenure identically.", "Neither affects tenure."],
        correctAnswerIndex: 0,
        explanation: "National Emergency extends LS tenure; President's Rule dissolves Assembly."
    }
];

// Level 3: The UPSC Prelims 2026 Simulation (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        id: "ch17-l3-q1",
        question: "In the context of the Manipur Crisis (2023-24), the Centre reportedly invoked Article 355. This article imposes a duty on the Union to protect States against \"External Aggression\" and \"Internal Disturbance\". Does invoking Article 355 automatically lead to President's Rule (Article 356)?",
        options: ["Yes, they are two steps of the same process.", "No, Article 355 is a \"Duty\" clause that allows the Centre to take necessary steps (like deploying forces or giving directions) without dismissing the State Government.", "Yes, but only if the Governor recommends it.", "No, Article 355 applies only to External Aggression."],
        correctAnswerIndex: 1,
        explanation: "Article 355 is a duty clause, not automatic President's Rule."
    },
    {
        id: "ch17-l3-q2",
        question: "If the State Government fails to comply with the directions given by the Centre under Article 355 (to control internal disturbance):",
        options: ["The Centre can invoke Article 365, declaring that the State government cannot be carried on in accordance with the Constitution, which then validates the imposition of President's Rule under Article 356.", "The Centre can dissolve the Assembly immediately.", "The Supreme Court takes over the administration.", "The Governor becomes the real executive."],
        correctAnswerIndex: 0,
        explanation: "Non-compliance invokes Article 365, leading to Article 356."
    },
    {
        id: "ch17-l3-q3",
        question: "The \"Unified Command\" established in Manipur, headed by a Security Advisor appointed by the Centre, effectively placed the law and order machinery under Central control. This is an example of:",
        options: ["De-facto application of Article 355/356 powers without a formal proclamation.", "Unconstitutional interference.", "Cooperative Federalism.", "Zonal Council mechanism."],
        correctAnswerIndex: 0,
        explanation: "De-facto application of Article 355 powers."
    },
    {
        id: "ch17-l3-q4",
        question: "In the Shiv Sena Case (2023), the Supreme Court clarified the Governor's power to call for a \"Floor Test\". It held that:",
        options: ["The Governor can call for a floor test merely because of an internal split/rebellion within the ruling party.", "The Governor cannot call for a floor test based solely on internal party disputes; there must be objective material showing the government has lost the majority in the House.", "The Governor has absolute discretion.", "The Floor Test is not subject to judicial review."],
        correctAnswerIndex: 1,
        explanation: "Governor needs objective material, not just internal party disputes."
    },
    {
        id: "ch17-l3-q5",
        question: "If a \"Floor Test\" is delayed by the Speaker, can the Governor intervene?",
        options: ["Yes, the Governor can direct the Assembly to be summoned for a floor test immediately (Nabam Rebia case).", "No, the Speaker is supreme within the House.", "Only if the President permits.", "Only if the Opposition Leader requests."],
        correctAnswerIndex: 0,
        explanation: "Yes, Governor can direct Assembly summons for floor test."
    },
    {
        id: "ch17-l3-q6",
        question: "The S.R. Bommai Guidelines (1994) regarding the Dissolution of the Legislative Assembly under Article 356 state that:",
        options: ["The President can dissolve the Assembly immediately after the proclamation.", "The President can only suspend the Assembly initially. Dissolution is allowed only after the Parliament has approved the proclamation.", "The Governor can dissolve it before recommending President's Rule.", "The Supreme Court must approve dissolution."],
        correctAnswerIndex: 1,
        explanation: "Dissolution only after Parliamentary approval."
    },
    {
        id: "ch17-l3-q7",
        question: "Several States (like Punjab, Kerala) have high Debt-to-GSDP ratios. Can the President declare a Financial Emergency (Article 360) in a specific State?",
        options: ["Yes, Article 360 allows declaration for \"any part of the territory of India\" if its financial stability is threatened.", "No, Financial Emergency can only be declared for the whole of India.", "Yes, but only with the consent of the State.", "No, only the Governor can declare it."],
        correctAnswerIndex: 0,
        explanation: "Yes, for any part of the territory of India."
    },
    {
        id: "ch17-l3-q8",
        question: "If Financial Emergency is declared in a State:",
        options: ["The Centre can issue directions to the State to observe canons of financial propriety.", "The President can ask the State to reserve all Money Bills for his consideration.", "Salaries of State employees can be reduced.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All listed consequences follow."
    },
    {
        id: "ch17-l3-q9",
        question: "In the Kerala vs Union of India suit (2024), the Centre argued that unchecked State borrowing threatens \"National Financial Stability\". This argument aligns with the rationale of:",
        options: ["Article 360 (though not invoked).", "Article 293(3) (Borrowing restrictions).", "Both (a) and (b).", "FRBM Act only."],
        correctAnswerIndex: 2,
        explanation: "Aligns with Article 360 rationale and Article 293(3)."
    },
    {
        id: "ch17-l3-q10",
        question: "The ground \"War or External Aggression\" (Article 352). In the age of cyber-warfare, if a foreign entity cripples India's banking and power grid, can National Emergency be declared?",
        options: ["Yes, \"External Aggression\" is interpreted broadly to include non-kinetic attacks threatening security.", "No, it requires physical armed forces crossing the border.", "Only \"Internal Disturbance\" applies.", "Only \"Armed Rebellion\" applies."],
        correctAnswerIndex: 0,
        explanation: "External Aggression is interpreted broadly."
    },
    {
        id: "ch17-l3-q11",
        question: "The 44th Amendment (1978) requires the \"Cabinet\" to recommend National Emergency in writing. The \"Cabinet\" is defined in:",
        options: ["Article 74.", "Article 75.", "Article 352 itself (Explanation).", "It is not defined in the Constitution (Convention)."],
        correctAnswerIndex: 2,
        explanation: "Defined in Article 352 (Explanation)."
    },
    {
        id: "ch17-l3-q12",
        question: "During a National Emergency, the \"Life of Lok Sabha\" can be extended by law of Parliament for:",
        options: ["One year at a time, indefinitely.", "Six months at a time.", "Two years at a time.", "One year at a time, up to a maximum of 3 years."],
        correctAnswerIndex: 0,
        explanation: "One year at a time, indefinitely (but max 6 months after emergency ends)."
    },
    {
        id: "ch17-l3-q13",
        question: "Can the Supreme Court strike down a proclamation of National Emergency on the ground of \"Mala fides\" (Bad faith)?",
        options: ["Yes, the satisfaction of the President is subject to judicial review (Minerva Mills case).", "No, it is a political question.", "Only if Parliament disapproves it.", "Only if Fundamental Rights are violated."],
        correctAnswerIndex: 0,
        explanation: "Yes, subject to judicial review (Minerva Mills case)."
    },
    {
        id: "ch17-l3-q14",
        question: "A \"Proclamation of Revocation\" (ending the emergency) requires:",
        options: ["Parliamentary approval.", "Cabinet recommendation.", "Neither; the President can issue it at any time on his own (or on advice of PM).", "Supreme Court order."],
        correctAnswerIndex: 2,
        explanation: "President can revoke at any time, no approval needed."
    },
    {
        id: "ch17-l3-q15",
        question: "If the Lok Sabha passes a resolution disapproving the continuance of National Emergency (under Article 352(8)):",
        options: ["The President shall revoke the proclamation.", "The President may revoke it.", "It goes to Rajya Sabha for approval.", "It goes to the Supreme Court."],
        correctAnswerIndex: 0,
        explanation: "President shall revoke it."
    },
    {
        id: "ch17-l3-q16",
        question: "Assertion (A): The 44th Amendment Act, 1978, eliminated \"Internal Disturbance\" as a ground for National Emergency. Reason (R): The term was considered too vague and was misused during the 1975 Emergency to suppress political dissent; \"Armed Rebellion\" sets a higher threshold. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R explains A."
    },
    {
        id: "ch17-l3-q17",
        question: "Assertion (A): Under Article 356, the Legislative Assembly of a State is not dissolved immediately. Reason (R): The Supreme Court in S.R. Bommai case held that the dissolution of the Assembly is irreversible, and thus should happen only after Parliament approves the proclamation. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R explains A."
    },
    {
        id: "ch17-l3-q18",
        question: "The \"Internet Shutdown\" in J&K (2019) was challenged. The Supreme Court in Anuradha Bhasin case held that:",
        options: ["Internet access is a Fundamental Right under Article 19.", "Suspension of internet indefinitely is impermissible; orders must be temporary and subject to review.", "Section 144 CrPC cannot be used to suppress democratic expression.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All points were held in Anuradha Bhasin case."
    },
    {
        id: "ch17-l3-q19",
        question: "Can the President issue an Ordinance to amend the Constitution during a National Emergency?",
        options: ["Yes.", "No, Constitutional Amendment is a constituent power, not a legislative power (Article 368 vs 123).", "Yes, but only for Fundamental Rights.", "Yes, if Parliament is not in session."],
        correctAnswerIndex: 1,
        explanation: "No, Ordinance cannot amend Constitution."
    },
    {
        id: "ch17-l3-q20",
        question: "The \"Disturbed Areas Act\" (AFSPA) is often confused with Emergency. AFSPA is:",
        options: ["A form of Martial Law under Article 34.", "A statutory law empowering armed forces in specific areas; it is not a proclamation of Emergency under Article 352.", "A precursor to Article 356.", "A state law."],
        correctAnswerIndex: 1,
        explanation: "AFSPA is a statutory law, not Emergency proclamation."
    },
    {
        id: "ch17-l3-q21",
        question: "If President's Rule is imposed in a State, the Parliament can delegate the power to make laws for the State to the President. The President can further delegate this power to:",
        options: ["The Governor.", "The Advisor to the Governor.", "Any other authority specified by him.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Can delegate to any authority specified by him."
    },
    {
        id: "ch17-l3-q22",
        question: "The \"Maximum Period\" of President's Rule is 3 years. However, in the case of Punjab (1987-1992), it was extended beyond 3 years by:",
        options: ["Supreme Court order.", "Constitutional Amendment Acts (59th, 64th, 67th, 68th).", "Election Commission order.", "Presidential Order."],
        correctAnswerIndex: 1,
        explanation: "Extended by Constitutional Amendments."
    },
    {
        id: "ch17-l3-q23",
        question: "The \"Union of India\" vs \"State of ...\" disputes. Article 355 acts as a justification for the Centre to:",
        options: ["Deploy Central Forces (CRPF/CISF) in a State suo motu (without State request) to protect central property or during disturbances.", "Take over the State police.", "Dismiss the CM.", "Arrest the CM."],
        correctAnswerIndex: 0,
        explanation: "Justifies suo motu deployment of Central Forces."
    },
    {
        id: "ch17-l3-q24",
        question: "In Rameshwar Prasad vs Union of India (2006) - Bihar Assembly Dissolution case - the Supreme Court declared the dissolution unconstitutional but:",
        options: ["Did not restore the Assembly because elections had already been notified (Doctrine of Fait Accompli).", "Restored the Assembly immediately.", "Ordered the Governor to pay compensation.", "Removed the Governor."],
        correctAnswerIndex: 0,
        explanation: "Did not restore Assembly due to Fait Accompli."
    },
    {
        id: "ch17-l3-q25",
        question: "The suspension of \"Habeas Corpus\" during the 1975 Emergency was upheld by the SC in ADM Jabalpur case. This judgment was effectively overruled by:",
        options: ["44th Amendment Act (making Art 21 non-suspendable).", "K.S. Puttaswamy judgment (Privacy case) - explicitly overruling ADM Jabalpur.", "Both (a) and (b).", "Maneka Gandhi case."],
        correctAnswerIndex: 2,
        explanation: "Overruled by both 44th Amendment and Puttaswamy case."
    },
    {
        id: "ch17-l3-q26",
        question: "\"Martial Law\" (Article 34) vs \"National Emergency\" (Article 352).",
        options: ["Martial Law affects only Fundamental Rights; National Emergency affects Centre-State relations, revenues, and rights.", "Martial Law suspends the government; National Emergency does not necessarily suspend the government.", "Martial Law is imposed in a specific area; National Emergency can be whole country.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All are valid distinctions."
    },
    {
        id: "ch17-l3-q27",
        question: "Can a State Government challenge the imposition of President's Rule in the Supreme Court?",
        options: ["Yes, under Article 131 (Original Jurisdiction).", "Yes, under Article 32.", "Yes, under Article 226 (High Court) or 136 (SC).", "No, only the dismissed CM can challenge it personally."],
        correctAnswerIndex: 0,
        explanation: "Yes, under Article 131."
    },
    {
        id: "ch17-l3-q28",
        question: "The President's satisfaction under Article 356 is:",
        options: ["Subjective satisfaction based on Cabinet advice.", "Objective satisfaction based on \"Relevant Material\" (Governor's report etc.).", "Absolute.", "Non-justiciable."],
        correctAnswerIndex: 1,
        explanation: "Objective satisfaction based on relevant material."
    },
    {
        id: "ch17-l3-q29",
        question: "If the Parliament fails to approve the proclamation of President's Rule within 2 months:",
        options: ["It lapses, and the dismissed State Government revives automatically.", "It continues for another 2 months.", "Fresh elections are held.", "The President re-issues it."],
        correctAnswerIndex: 0,
        explanation: "It lapses and government revives."
    },
    {
        id: "ch17-l3-q30",
        question: "Which is the only Article of the Constitution that has been amended to include the word \"Cabinet\"?",
        options: ["Article 74.", "Article 75.", "Article 352.", "Article 356."],
        correctAnswerIndex: 2,
        explanation: "Article 352."
    }
];

export const CHAPTER_17_LEVELS: ChapterLevelData = {
    topicId: 17,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 17",
            questions: LEVEL_1_QUESTIONS
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge",
            questions: LEVEL_2_QUESTIONS
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context",
            questions: LEVEL_3_QUESTIONS
        }
    ]
};
