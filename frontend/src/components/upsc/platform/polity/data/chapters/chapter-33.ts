import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch33-l1-q1",
        "question": "Which articles in Part VI of the Constitution deal with the organization, composition, duration, officers, and procedures of the state legislature?",
        "options": ["Articles 153 to 167","Articles 168 to 212","Articles 214 to 231","Articles 239 to 241"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 168 to 212 in Part VI of the Constitution deal with the organisation, composition, duration, officers, procedures, privileges, powers and so on of the state legislature."
    },
    {
        "id": "ch33-l1-q2",
        "question": "How many states in India currently have a bicameral legislature?",
        "options": ["5","6","7","8"],
        "correctAnswerIndex": 1,
        "explanation": "At present, only six states have two Houses (bicameral). These are Andhra Pradesh, Telangana, Uttar Pradesh, Bihar, Maharashtra and Karnataka."
    },
    {
        "id": "ch33-l1-q3",
        "question": "In a state with a bicameral legislature, the legislature consists of the Governor, the Legislative Council (Vidhan Parishad), and the:",
        "options": ["Zila Parishad","Legislative Assembly (Vidhan Sabha)","Gram Sabha","Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "In the states having a bicameral system, the state legislature consists of the governor, the legislative council and the legislative assembly."
    },
    {
        "id": "ch33-l1-q4",
        "question": "Under Article 169, who has the power to abolish or create a State Legislative Council?",
        "options": ["The Governor","The State Legislative Assembly","The Parliament","The President"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution provides for the abolition or creation of legislative councils in states. Accordingly, the Parliament can abolish a legislative council (where it already exists) or create it (where it does not exist)..."
    },
    {
        "id": "ch33-l1-q5",
        "question": "For the Parliament to act under Article 169 to create or abolish a Legislative Council, what must the concerned State Legislative Assembly do first?",
        "options": ["Pass a resolution by a simple majority.","Pass a resolution by a special majority.","Obtain the Governor","Send an advisory request to the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "...if the legislative assembly of the concerned state passes a resolution to that effect. Such a specific resolution must be passed by the state assembly by a special majority..."
    },
    {
        "id": "ch33-l1-q6",
        "question": "Is the law made by Parliament under Article 169 for the creation or abolition of a Legislative Council considered an amendment to the Constitution under Article 368?",
        "options": ["Yes, it requires ratification by half the states.","Yes, it requires a special majority in Parliament.","No, it is passed like an ordinary piece of legislation (i.e., by simple majority).","No, it does not require Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "This Act of Parliament is not to be deemed as an amendment of the Constitution for the purposes of Article 368 and is passed like an ordinary piece of legislation (ie, by simple majority)."
    },
    {
        "id": "ch33-l1-q7",
        "question": "The maximum strength of a State Legislative Assembly is fixed by the Constitution at:",
        "options": ["300 members","400 members","500 members","545 members"],
        "correctAnswerIndex": 2,
        "explanation": "Its maximum strength is fixed at 500 and minimum strength at 60."
    },
    {
        "id": "ch33-l1-q8",
        "question": "The minimum strength of a State Legislative Assembly is generally fixed at 60. However, which of the following states has an Assembly with fewer than 60 members?",
        "options": ["Kerala","Sikkim","Haryana","Punjab"],
        "correctAnswerIndex": 1,
        "explanation": "However, in case of Arunachal Pradesh, Sikkim and Goa, the minimum number is fixed at 30 and in case of Mizoram and Nagaland, it is 40 and 46 respectively."
    },
    {
        "id": "ch33-l1-q9",
        "question": "Which Constitutional Amendment Act discontinued the provision for the nomination of one Anglo-Indian member by the Governor to the State Legislative Assembly?",
        "options": ["99th Amendment Act","100th Amendment Act","103rd Amendment Act","104th Amendment Act (2019)"],
        "correctAnswerIndex": 3,
        "explanation": "The 104th Amendment Act of 2019 did away with the provision for nomination of one member of the Anglo-Indian community to the State Legislative Assembly by the Governor."
    },
    {
        "id": "ch33-l1-q10",
        "question": "The maximum strength of the State Legislative Council is fixed at what proportion of the total strength of the state",
        "options": ["One-half","One-third","One-fourth","One-sixth"],
        "correctAnswerIndex": 1,
        "explanation": "The maximum strength of the council is fixed at one-third of the total strength of the assembly and the minimum strength is fixed at 40."
    },
    {
        "id": "ch33-l1-q11",
        "question": "What is the absolute minimum strength fixed for a State Legislative Council?",
        "options": ["30","40","50","60"],
        "correctAnswerIndex": 1,
        "explanation": "The maximum strength of the council is fixed at one-third of the total strength of the assembly and the minimum strength is fixed at 40."
    },
    {
        "id": "ch33-l1-q12",
        "question": "In the composition of the Legislative Council, what fraction of the total members are elected by the members of local bodies in the state, like municipalities and district boards?",
        "options": ["1/3","1/6","1/12","1/2"],
        "correctAnswerIndex": 0,
        "explanation": "Of the total number of members of a legislative council: 1/3 are elected by the members of local bodies in the state like municipalities, district boards, etc."
    },
    {
        "id": "ch33-l1-q13",
        "question": "What fraction of the members of the Legislative Council are elected by graduates of three years",
        "options": ["1/3","1/6","1/12","1/4"],
        "correctAnswerIndex": 2,
        "explanation": "1/12 are elected by graduates of three years’ standing and residing within the state..."
    },
    {
        "id": "ch33-l1-q14",
        "question": "What fraction of the members of the Legislative Council are nominated by the Governor?",
        "options": ["1/3","1/6","1/12","1/4"],
        "correctAnswerIndex": 1,
        "explanation": "The remaining 1/6 are nominated by the governor from amongst persons who have a special knowledge or practical experience of literature, science, art, cooperative movement and social service."
    },
    {
        "id": "ch33-l1-q15",
        "question": "What is the normal term of the Legislative Assembly?",
        "options": ["4 years","5 years","6 years","It is a permanent body."],
        "correctAnswerIndex": 1,
        "explanation": "Like the Lok Sabha, the legislative assembly is not a continuing chamber. Its normal term is five years from the date of its first meeting after the general elections."
    },
    {
        "id": "ch33-l1-q16",
        "question": "During a National Emergency, the term of the State Legislative Assembly can be extended by Parliament by law for one year at a time. However, this extension cannot continue beyond a period of ______ after the emergency has ceased to operate.",
        "options": ["One month","Three months","Six months","One year"],
        "correctAnswerIndex": 2,
        "explanation": "However, this extension cannot continue beyond a period of six months after the emergency has ceased to operate."
    },
    {
        "id": "ch33-l1-q17",
        "question": "The Legislative Council is a permanent body and not subject to dissolution. What proportion of its members retire on the expiration of every second year?",
        "options": ["One-half","One-third","One-fourth","One-sixth"],
        "correctAnswerIndex": 1,
        "explanation": "Like the Rajya Sabha, the legislative council is a continuing chamber, that is, it is a permanent body and is not subject to dissolution. But, one-third of its members retire on the expiration of every second year."
    },
    {
        "id": "ch33-l1-q18",
        "question": "What is the minimum age prescribed by the Constitution for a person to be chosen as a member of the State Legislative Assembly?",
        "options": ["21 years","25 years","30 years","35 years"],
        "correctAnswerIndex": 1,
        "explanation": "He must be not less than 30 years of age in the case of the legislative council and not less than 25 years of age in the case of the legislative assembly."
    },
    {
        "id": "ch33-l1-q19",
        "question": "What is the minimum age prescribed for becoming a member of the State Legislative Council?",
        "options": ["25 years","30 years","35 years","21 years"],
        "correctAnswerIndex": 1,
        "explanation": "He must be not less than 30 years of age in the case of the legislative council..."
    },
    {
        "id": "ch33-l1-q20",
        "question": "Under the Representation of the People Act (1951), a person to be elected to the legislative council or assembly must be:",
        "options": ["A graduate from a recognized university.","An elector for an assembly constituency in the concerned state.","A native resident of the specific district they are contesting from.","A registered member of a recognized political party."],
        "correctAnswerIndex": 1,
        "explanation": "A person to be elected to the legislative council must be an elector for an assembly constituency in the concerned state... Similarly, a person to be elected to the legislative assembly must be an elector for an assembly constituency in the concerned state."
    },
    {
        "id": "ch33-l1-q21",
        "question": "On the question of whether a member has become subject to any of the standard disqualifications (e.g., holding an office of profit, unsound mind), whose decision is final?",
        "options": ["The High Court","The Speaker / Chairman","The Governor","The Election Commission of India"],
        "correctAnswerIndex": 2,
        "explanation": "On the question whether a member has become subject to any of the above disqualifications, the governor’s decision is final. However, he should obtain the opinion of the Election Commission and act accordingly."
    },
    {
        "id": "ch33-l1-q22",
        "question": "The question of disqualification under the Tenth Schedule (Anti-Defection Law) is decided by the:",
        "options": ["Governor","Election Commission","Presiding Officer of the House (Speaker/Chairman)","High Court"],
        "correctAnswerIndex": 2,
        "explanation": "The question of disqualification under the Tenth Schedule is decided by the Chairman in the case of legislative council and Speaker in the case of legislative assembly (and not by the governor)."
    },
    {
        "id": "ch33-l1-q23",
        "question": "Members of the state legislature take their oath or affirmation before the:",
        "options": ["Chief Justice of High Court","Governor","Speaker / Chairman","Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Every member of either House of state legislature, before taking his seat, has to make and subscribe an oath or affirmation before the governor or some person appointed by him for this purpose."
    },
    {
        "id": "ch33-l1-q24",
        "question": "If a member of the State Legislature is absent from all meetings for a continuous period without the permission of the House, the House can declare his seat vacant. What is this period?",
        "options": ["30 days","60 days","90 days","6 months"],
        "correctAnswerIndex": 1,
        "explanation": "A House of the state legislature can declare the seat of a member vacant if he absents himself from all its meetings for a period of sixty days without its permission."
    },
    {
        "id": "ch33-l1-q25",
        "question": "How is the Speaker of the Legislative Assembly elected?",
        "options": ["Elected by the people directly.","Appointed by the Governor.","Elected by the Assembly itself from amongst its members.","Nominated by the Chief Minister."],
        "correctAnswerIndex": 2,
        "explanation": "The Speaker is elected by the assembly itself from amongst its members."
    },
    {
        "id": "ch33-l1-q26",
        "question": "To whom does the Speaker of the Legislative Assembly address his resignation letter?",
        "options": ["The Governor","The Chief Minister","The Deputy Speaker","The President"],
        "correctAnswerIndex": 2,
        "explanation": "Usually, the Speaker remains in office during the life of the assembly. However, he vacates his office earlier... if he resigns by writing to the deputy speaker."
    },
    {
        "id": "ch33-l1-q27",
        "question": "The Speaker of the Legislative Assembly can be removed by a resolution passed by a majority of all the then members of the assembly. Such a resolution can be moved only after giving how many days",
        "options": ["7 days","10 days","14 days","30 days"],
        "correctAnswerIndex": 2,
        "explanation": "...if he is removed by a resolution passed by a majority of all the then members of the assembly. Such a resolution can be moved only after giving 14 days’ advance notice."
    },
    {
        "id": "ch33-l1-q28",
        "question": "Who decides the question of whether a bill is a Money Bill or not in the State Legislature?",
        "options": ["The Governor","The Speaker of the Legislative Assembly","The Chairman of the Legislative Council","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "He (the Speaker) decides whether a bill is a Money Bill or not and his decision on this question is final."
    },
    {
        "id": "ch33-l1-q29",
        "question": "The quorum to constitute a meeting of either House of the state legislature is:",
        "options": ["One-tenth of the total number of members of the House, regardless of the minimum.","Ten members or one-tenth of the total number of members of the House (including the presiding officer), whichever is greater.","Fifty members.","One-third of the total number of members."],
        "correctAnswerIndex": 1,
        "explanation": "Quorum is the minimum number of members required to be present... It is ten members or one-tenth of the total number of members of the House (including the presiding officer), whichever is greater."
    },
    {
        "id": "ch33-l1-q30",
        "question": "According to the Constitution, the maximum gap between two sessions of the state legislature cannot exceed:",
        "options": ["3 months","4 months","6 months","1 year"],
        "correctAnswerIndex": 2,
        "explanation": "The governor from time to time summons each House of state legislature to meet. The maximum gap between two sessions of state legislature cannot be more than six months."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch33-l2-q1",
        "question": "In the Union Parliament, a legislative deadlock between the Lok Sabha and Rajya Sabha over an ordinary bill is resolved through a Joint Sitting (Article 108). What is the mechanism for resolving a similar deadlock between the Legislative Assembly and Legislative Council in a state?",
        "options": ["A Joint Sitting presided over by the Speaker of the Assembly.","A Joint Sitting presided over by the Governor.","There is no provision for a Joint Sitting in the state legislature.","The Governor decides the matter in his discretion."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not provide for the mechanism of joint sitting of both the Houses to resolve the disagreement between them over a bill in the state legislature."
    },
    {
        "id": "ch33-l2-q2",
        "question": "When an Ordinary Bill passed by the Legislative Assembly is rejected by the Legislative Council, or the Council makes amendments not acceptable to the Assembly, what is the Assembly",
        "options": ["It must appeal to the Governor to mediate.","The Bill completely lapses and must be reintroduced in the next session.","The Assembly can pass the bill again. If passed a second time (with or without the Council","It must call for a Joint Committee of both Houses."],
        "correctAnswerIndex": 2,
        "explanation": "If the council rejects the bill... the assembly may pass the bill again and transmit the same to the council. If the council rejects the bill again, or passes it with amendments not acceptable to the assembly... the bill is deemed to have been passed by both the Houses in the form in which it was passed by the assembly for the second time."
    },
    {
        "id": "ch33-l2-q3",
        "question": "For what maximum period can the State Legislative Council delay or withhold an Ordinary Bill (originating in the Assembly) when it receives the bill for the FIRST time?",
        "options": ["14 days","1 month","3 months","6 months"],
        "correctAnswerIndex": 2,
        "explanation": "The council must pass the bill or return the bill with amendments or withhold the bill within three months. Therefore, the maximum period for which the council can delay a bill in the first instance is three months."
    },
    {
        "id": "ch33-l2-q4",
        "question": "If the Assembly passes the ordinary bill for a second time and sends it to the Council, and the Council again rejects it or takes no action, what is the maximum further delay the Council can impose in this SECOND instance?",
        "options": ["14 days","1 month","3 months","6 months"],
        "correctAnswerIndex": 1,
        "explanation": "If the council... takes no action on it for one month, the bill is deemed to have been passed... Therefore, the maximum period for which the council can delay the bill in the second instance is one month."
    },
    {
        "id": "ch33-l2-q5",
        "question": "Based on the constitutional provisions, what is the ABSOLUTE MAXIMUM period for which a State Legislative Council can delay the passage of an Ordinary Bill passed by the Assembly?",
        "options": ["14 days","3 months","4 months","6 months"],
        "correctAnswerIndex": 2,
        "explanation": "The ultimate power of passing an ordinary bill is vested in the assembly. At the most, the council can detain or delay the bill for a period of four months—three months in the first instance and one month in the second instance."
    },
    {
        "id": "ch33-l2-q6",
        "question": "Can an Ordinary Bill originate in the State Legislative Council?",
        "options": ["No, ordinary bills must originate in the Assembly.","Yes, but if it is rejected by the Assembly, the bill becomes dead. There is no mechanism for the Council to overcome the Assembly","Yes, and if rejected by the Assembly, the Governor resolves the deadlock.","Only bills related to education or local bodies can originate in the Council."],
        "correctAnswerIndex": 1,
        "explanation": "A bill which originated in the council and was sent to the assembly, if rejected by the assembly, the bill ends and becomes dead."
    },
    {
        "id": "ch33-l2-q7",
        "question": "Regarding Money Bills, how much time does the Legislative Council have to return the bill (with or without recommendations) to the Legislative Assembly?",
        "options": ["7 days","14 days","30 days","3 months"],
        "correctAnswerIndex": 1,
        "explanation": "The legislative council has restricted powers with regard to a Money Bill. It cannot reject or amend a Money Bill. It can only make recommendations... within 14 days."
    },
    {
        "id": "ch33-l2-q8",
        "question": "If the Legislative Council makes recommendations on a Money Bill, what is the constitutional obligation of the Legislative Assembly?",
        "options": ["The Assembly must accept all recommendations.","The Assembly must call a joint sitting if it rejects them.","The Assembly can either accept or reject all or any of the recommendations, and the bill is deemed passed in the form the Assembly decides.","The Assembly must refer the recommendations to the Governor."],
        "correctAnswerIndex": 2,
        "explanation": "The assembly can either accept or reject all or any of the recommendations of the council. In either case, the bill is deemed to have been passed by both the Houses."
    },
    {
        "id": "ch33-l2-q9",
        "question": "Before giving his decision on the disqualification of a member of the state legislature (under Article 192), the Governor must obtain the opinion of which constitutional body and act according to it?",
        "options": ["The State High Court","The Supreme Court of India","The Election Commission of India","The Chief Minister and the Cabinet"],
        "correctAnswerIndex": 2,
        "explanation": "On the question whether a member is subject to any of the above disqualifications, the governor’s decision is final. However, he should obtain the opinion of the Election Commission and act accordingly."
    },
    {
        "id": "ch33-l2-q10",
        "question": "If a person is unfortunately elected to both the Parliament and the State Legislature, what happens if he doesn",
        "options": ["His seat in the State Legislature becomes automatically vacant.","His seat in the Parliament becomes empty after 14 days, as per the Prohibition of Simultaneous Membership Rules (1950).","He draws salary from both but votes only in Parliament.","The Governor decides which seat he retains."],
        "correctAnswerIndex": 1,
        "explanation": "If a person is elected to both the Parliament and the state legislature, his seat in the Parliament becomes vacant if he does not resign his seat in the state legislature within 14 days, according to the Prohibition of Simultaneous Membership Rules (1950)."
    },
    {
        "id": "ch33-l2-q11",
        "question": "The Constitution explicitly guarantees complete freedom of speech in the State Legislature. Which of the following is true regarding this privilege?",
        "options": ["A member cannot be sued in any court for anything said or any vote given by him in the legislature.","This freedom is absolute and exempts members from the anti-defection law.","This freedom allows members to discuss the conduct of High Court judges freely.","It only applies to Cabinet Ministers."],
        "correctAnswerIndex": 0,
        "explanation": "No member is liable to any proceedings in any court for anything said or any vote given by him in the legislature or its committees."
    },
    {
        "id": "ch33-l2-q12",
        "question": "During a session of the state legislature, a member enjoys freedom from arrest in which type of cases?",
        "options": ["Both civil and criminal cases.","Criminal cases only.","Civil cases only, extending 40 days before the session, during the session, and 40 days after the session ends.","Preventive detention cases."],
        "correctAnswerIndex": 2,
        "explanation": "They cannot be arrested during the session of the state legislature and 40 days before the beginning and 40 days after the end of the session. This privilege is available only in civil cases and not in criminal cases or preventive detention cases."
    },
    {
        "id": "ch33-l2-q13",
        "question": "Does the State Legislature possess the punitive power to punish its own members as well as outsiders for breach of its privileges or",
        "options": ["Yes, it has the power to punish by reprimand, admonition, or imprisonment.","No, only the Supreme Court can punish for contempt.","It can punish its own members but not outsiders.","It can only impose a financial fine up to Rs. 10,000."],
        "correctAnswerIndex": 0,
        "explanation": "It can punish members as well as outsiders for breach of its privileges or its contempt by reprimand, admonition or imprisonment."
    },
    {
        "id": "ch33-l2-q14",
        "question": "While Hindi or English is generally used for transacting business in the State Legislature, how can a member address the House in their native/",
        "options": ["It is completely banned by the Constitution.","They must provide a written translation to every member 24 hours in advance.","The presiding officer (Speaker/Chairman) can permit a member to address the House in his mother tongue.","The Governor must issue a special language ordinance."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution has declared the official language(s) of the state or Hindi or English, to be the languages for transacting business in the state legislature. However, the presiding officer can permit a member to address the House in his mother-tongue."
    },
    {
        "id": "ch33-l2-q15",
        "question": "Why is the Legislative Council often characterized politically as a",
        "options": ["Because it sits for fewer days than the Assembly.","Because it is primarily focused on delaying tactics, possessing no constitutional absolute veto power to defeat legislation passed by the popular Assembly.","Because it only deals with administrative rules, not laws.","Because its resolutions are non-binding."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the Rajya Sabha which has equal power with Lok Sabha in ordinary bills, the Legislative Council is subordinate. The ultimate power lies with the Assembly. The Council can only delay the bill for a maximum of 4 months. Hence it is seen merely as a"
    },
    {
        "id": "ch33-l2-q16",
        "question": "In which of the following matters does the Legislative Council enjoy equal status and power with the Legislative Assembly?",
        "options": ["Voting on Demands for Grants.","Passing a No-Confidence Motion against the Council of Ministers.","Selection of Ministers (including the Chief Minister) and approval of ordinances issued by the Governor.","Passing a resolution for the creation or abolition of the Legislative Council itself."],
        "correctAnswerIndex": 2,
        "explanation": "Equal status with Assembly: Introduction and passage of ordinary bills... Approval of ordinances issued by the governor... Selection of ministers including the chief minister. However, unequal in Money bills, Demands for grants, Resolution of abolition/creation, No-confidence motion, Presidential election."
    },
    {
        "id": "ch33-l2-q17",
        "question": "The state Council of Ministers is collectively responsible strictly to the Legislative Assembly. As a direct consequence of this:",
        "options": ["Ministers cannot speak in the Legislative Council.","The Legislative Council cannot introduce a No-Confidence Motion against the government.","The Legislative Council cannot even discuss the state budget.","The Chief Minister must always be an MLA, never an MLC."],
        "correctAnswerIndex": 1,
        "explanation": "A no-confidence motion cannot be introduced in the council. This is because the council of ministers is collectively responsible only to the assembly. However, the council can discuss the policies and activities of the government."
    },
    {
        "id": "ch33-l2-q18",
        "question": "Can the members of the State Legislative Council participate in the election of the President of India and the representatives of the state in the Rajya Sabha?",
        "options": ["Yes, they participate in both.","No, they participate in the Presidential election but not Rajya Sabha elections.","No, they do not participate in either election.","They participate only if the state assembly passes a special resolution allowing them."],
        "correctAnswerIndex": 2,
        "explanation": "The council has no effective say in the ratification of a constitutional amendment bill... Also, the council does not participate in the election of the president of India and representatives of the state in the Rajya Sabha."
    },
    {
        "id": "ch33-l2-q19",
        "question": "A unique provision regarding the Speaker of the Legislative Assembly ensures continuity when the Assembly is dissolved. According to this rule:",
        "options": ["The Speaker resigns the moment the Assembly is dissolved.","The Speaker continues to hold office for exactly 6 months post-dissolution.","The Speaker does not vacate his office on dissolution but continues until immediately before the first meeting of the newly elected Assembly.","The Governor temporarily assumes the role of the Speaker."],
        "correctAnswerIndex": 2,
        "explanation": "As provided by the Constitution, the Speaker of the last assembly vacates his office immediately before the first meeting of the newly-elected assembly."
    },
    {
        "id": "ch33-l2-q20",
        "question": "How does the",
        "options": ["The Council Chairman has no casting vote in a tie.","The Council Chairman is appointed by the Governor.","The Council Chairman is actually a member of the House (the Council) and is elected by the Council from amongst its members, whereas the Rajya Sabha Chairman is not a member of the Rajya Sabha.","The Council Chairman is always the Chief Minister by default."],
        "correctAnswerIndex": 2,
        "explanation": "The Chairman of the Legislative Council is elected by the council itself from amongst its members. The Vice-President of India is the ex-officio Chairman of the Rajya Sabha, and he is not a member of the House."
    },
    {
        "id": "ch33-l2-q21",
        "question": "When a resolution for the removal of the Speaker is under consideration of the Legislative Assembly, what is the Speaker",
        "options": ["He retains the right to preside but cannot speak.","He cannot preside over the sitting of the House, but he has the right to speak, take part in proceedings, and can vote in the FIRST instance (but not a casting vote in a tie).","He must leave the Assembly building until the vote is over.","He can vote only if there is a tie."],
        "correctAnswerIndex": 1,
        "explanation": "As provided by the Constitution... when a resolution for his removal is under consideration... he cannot preside at the sitting of the House... but he has the right to speak and take part in the proceedings... and is entitled to vote in the first instance, though not in the case of an equality of votes."
    },
    {
        "id": "ch33-l2-q22",
        "question": "Under the Rules of Assembly, the Speaker nominates a",
        "options": ["To act as advisors to the Chief Minister.","To preside over the House when the office of both Speaker and Deputy Speaker are vacant (due to death or resignation).","To preside over the Assembly only when both the Speaker and Deputy Speaker are ABSENT from a sitting.","To lead the parliamentary committees."],
        "correctAnswerIndex": 2,
        "explanation": "Under the Rules of Assembly, the Speaker nominates from amongst the members a panel of chairmen. Any one of them can preside over the assembly in the absence of the Speaker or the Deputy Speaker... It must be emphasised here that a member of the panel of chairmen cannot preside over the assembly, when the office of the Speaker or the Deputy Speaker is vacant. During such time, the governor"
    },
    {
        "id": "ch33-l2-q23",
        "question": "Assertion (A): The Parliament can abolish a State Legislative Council without needing a formal Constitutional Amendment under Article 368.\\nReason (R): Article 169 explicitly states that a law providing for the abolition or creation of a council shall not be deemed to be an amendment of the Constitution for the purposes of Article 368.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Article 169 explicitly exempts the creation/abolition of the Council from the rigorous procedures of Article 368, treating it as an ordinary law requiring just a simple majority in Parliament."
    },
    {
        "id": "ch33-l2-q24",
        "question": "Assertion (A): The Legislative Council effectively acts merely as an advisory body rather than a powerful co-equal house regarding Ordinary Bills.\\nReason (R): The ultimate power of passing an ordinary bill is vested in the Assembly, and the Council",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Because the Assembly can just pass the bill a second time, overpowering the Council"
    },
    {
        "id": "ch33-l2-q25",
        "question": "What is the consequence of the dissolution of the State Legislative Assembly on an Ordinary Bill passed by the Assembly but currently pending in the Legislative Council?",
        "options": ["The bill does not lapse; a new Assembly can resume it.","The bill is deemed passed and goes to the Governor.","The bill lapses completely.","The bill is automatically transferred to the President."],
        "correctAnswerIndex": 2,
        "explanation": "A bill passed by the legislative assembly but pending in the council lapses on the dissolution of the assembly."
    },
    {
        "id": "ch33-l2-q26",
        "question": "Consider a bill that originated in the Legislative Council and is pending there. It has NOT yet been passed by the Legislative Assembly. Does this bill lapse when the Legislative Assembly is dissolved?",
        "options": ["Yes, all bills related to the state lapse.","No, a bill pending in the council which has not been passed by the assembly does not lapse.","Yes, because the Council cannot make laws alone.","It lapses only if it involves finance."],
        "correctAnswerIndex": 1,
        "explanation": "A bill pending in the legislative council which has not been passed by the legislative assembly does not lapse on the dissolution of the assembly."
    },
    {
        "id": "ch33-l2-q27",
        "question": "A bill passed by both Houses in a bicameral state is sent to the Governor for assent. While the bill is pending the Governor",
        "options": ["It lapses, and the incoming government must pass it again.","It does not lapse; the Governor can still give assent, and it becomes an Act.","It is automatically returned to the newly formed Assembly.","It is reserved for the President by default."],
        "correctAnswerIndex": 1,
        "explanation": "A bill passed by both Houses (or unicameral assembly) but pending assent of the governor or the president does not lapse."
    },
    {
        "id": "ch33-l2-q28",
        "question": "A bill passed by the state legislature has been returned by either the Governor or the President directing the House to reconsider it. During this period, the Assembly is dissolved. Does the bill lapse?",
        "options": ["Yes, it lapses.","No, it does not lapse.","Only if it was returned by the President.","Only if it carries financial implications."],
        "correctAnswerIndex": 1,
        "explanation": "A bill passed by the assembly (or both Houses) but returned by the president for reconsideration of house (or houses) does not lapse."
    },
    {
        "id": "ch33-l2-q29",
        "question": "What is the meaning of",
        "options": ["Suspending the work in a sitting for a specified time (e.g., hours or days).","Terminating a sitting of the state legislature for an indefinite period without naming a day for reassembly.","The formal end of a session by the Governor.","The dissolution of the Assembly before its 5-year term."],
        "correctAnswerIndex": 1,
        "explanation": "Adjournment sine die means terminating a sitting of the state legislature for an indefinite period... the House is adjourned without naming a day for reassembly. The power of adjournment as well as adjournment sine die lies with the presiding officer."
    },
    {
        "id": "ch33-l2-q30",
        "question": "If a State Legislative Assembly is dissolved, what happens to the State Legislative Council in that bicameral state?",
        "options": ["It is also dissolved automatically.","It is suspended temporarily until a new Assembly is elected.","It continues to exist as a permanent body, though its legislative output is paused until the new Assembly arrives.","It assumes the executive powers of the state."],
        "correctAnswerIndex": 2,
        "explanation": "The legislative council is a continuing chamber... it is a permanent body and is not subject to dissolution. It remains intact even when the Assembly is dissolved."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch33-l3-q1",
        "question": "In recent years, State Assemblies (e.g., West Bengal, Odisha) have passed resolutions under Article 169 to create a Legislative Council. What is the constitutional validity of Parliament",
        "options": ["Once the State Assembly passes the resolution by special majority, Parliament is constitutionally obligated to enact the law creating the Council immediately.","Parliament must create the Council but can delay it for up to one year.","The creation of the Council is entirely at the discretion of Parliament. Even if the Assembly passes the resolution, Parliament is NOT constitutionally bound to enact the law.","The President can issue an ordinance to bypass Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "Article 169 says Parliament"
    },
    {
        "id": "ch33-l3-q2",
        "question": "Analyse the constitutional prerequisite for the abolition of a State Legislative Council. Can the Union Parliament proactively pass a law to abolish a State",
        "options": ["Yes, under its overriding powers in Article 3.","Yes, but only during the operation of a National Emergency.","No, the passing of a resolution by the State Assembly by a special majority is a mandatory constitutional prerequisite under Article 169.","Yes, if the Governor recommends it citing financial crisis."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament cannot act unilaterally to abolish or create a Council under normal circumstances. The power is triggered *only* after the concerned State Legislative Assembly passes a resolution requesting it."
    },
    {
        "id": "ch33-l3-q3",
        "question": "Evaluate the role of the Speaker under the Tenth Schedule (Anti-Defection Law) in light of the Supreme Court",
        "options": ["The Speaker is immune from Judicial Review and can delay the decision on disqualification indefinitely to protect the ruling government.","The Speaker has no jurisdiction; the Election Commission must decide defection cases.","While the Speaker is the primary tribunal, the Supreme Court ruled they must decide disqualification petitions within a","(normally interpreted as 3 months), and failure to do so allows the Court to intervene and set a deadline.","Only the High Court can force a Speaker to make a decision quickly."],
        "correctAnswerIndex": 2,
        "explanation": "In the Keisham Meghachandra Singh case (2020) and reiterated during the Maharashtra crisis, the SC ruled that the Speaker acting as a tribunal cannot sit on disqualification petitions forever. A"
    },
    {
        "id": "ch33-l3-q4",
        "question": "Consider the constitutional dilemma addressed in the",
        "options": ["He retains full power to disqualify members who try to vote against him.","He is constitutionally barred from deciding disqualification petitions under the Tenth Schedule until he first clears the floor test on his own removal motion.","He can disqualify only the opposition members.","He must refer all cases to the Governor immediately."],
        "correctAnswerIndex": 1,
        "explanation": "The SC in Nabam Rebia held that it would be constitutionally impermissible for a Speaker to adjudicate upon disqualification petitions while a resolution for his own removal is pending. This prevents a Speaker from maliciously disqualifying the very MLAs who intend to vote him out, thereby manipulating the majority."
    },
    {
        "id": "ch33-l3-q5",
        "question": "Examine the legislative deadlock procedure uniquely applicable to the Indian States. An Ordinary Bill is passed by the Assembly and sent to the Council. The Council takes absolutely NO action and keeps the bill pending for 4 months. What is the constitutional status of this Bill?",
        "options": ["The Bill completely lapses.","The Bill triggers an automatic Joint Sitting mechanism.","The Assembly can pass the Bill for a SECOND time and transmit it. After that, if the Council takes no action for a further ONE month, the Bill is deemed passed by both Houses.","The Governor must use his discretionary power to sign it."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the Union Parliament where 6 months of inaction triggers a joint sitting, in the state, if the Council sits on a bill for 3 months (the first instance limit), the Assembly can simply pass it again. If the Council sits on it again for 1 month, the Constitution explicitly states the bill is"
    },
    {
        "id": "ch33-l3-q6",
        "question": "In a bicameral state, a significant Ordinary Bill originates in the Legislative Council and is successfully passed there. It is then transmitted to the Legislative Assembly, which overwhelmingly votes to REJECT the bill entirely. What happens to the bill?",
        "options": ["The Council can re-pass the bill to override the Assembly.","The Bill dies immediately. There is no constitutional mechanism for the Council to overcome the Assembly","The Governor refers it to the President.","The Chief Minister must cast a deciding vote."],
        "correctAnswerIndex": 1,
        "explanation": "The asymmetric power is heavily skewed toward the Assembly. While the Assembly can blast past the Council"
    },
    {
        "id": "ch33-l3-q7",
        "question": "Apply the Lily Thomas judgment logic to a sitting MLA. An MLA is convicted of a criminal offense and sentenced to 2 years in prison. The MLA immediately appeals to a higher court, and the higher court explicitly",
        "options": ["The MLA remains disqualified because the initial conviction acts instantly.","Because the conviction itself (not just the jail sentence) is stayed by an appellate court, the disqualification under the RPA 1951 is suspended, and the MLA can continue as a member and attend the Assembly.","The MLA must resign and contest a by-election while out on bail.","Only the Speaker can permit the MLA to attend."],
        "correctAnswerIndex": 1,
        "explanation": "Conviction of 2+ years causes instant disqualification based on RPA Sec 8 (Lily Thomas). However, if a higher court explicitly stays the *finding of guilt* (the conviction), the legal cause of the disqualification ceases to exist temporarily, restoring the member"
    },
    {
        "id": "ch33-l3-q8",
        "question": "Under Article 192, if an MLA starts holding an",
        "options": ["No, Article 192 makes the Governor","Yes, the decision can be challenged in constitutional courts (High Court/Supreme Court) not on the merits of the opinion, but strictly on grounds of procedural irregularity, mala fide intent, or violation of principles of natural justice.","Only the Supreme Court can review it under original jurisdiction.","Yes, but only if the Assembly passes a resolution allowing the review."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 192 states the Governor"
    },
    {
        "id": "ch33-l3-q9",
        "question": "Evaluate the monumental impact of the",
        "options": ["It established that MLAs enjoy absolute immunity from prosecution in bribery cases related to voting in the House.","It overturned the 1998 PV Narasimha Rao verdict, declaring that parliamentary privilege/immunity (Article 105/194) does NOT protect MPs or MLAs from criminal prosecution if they take a bribe in connection with a speech or a vote in the Legislature.","It restricted the bribery immunity only to Cabinet Ministers.","It allowed bribery investigations only if the Speaker authorizes them."],
        "correctAnswerIndex": 1,
        "explanation": "This is a landmark 2024 ruling. The 7-judge bench unanimously ruled that bribery is a crime occurring outside the constitutional umbrella of"
    },
    {
        "id": "ch33-l3-q10",
        "question": "During the customary",
        "options": ["No, the Governor","s words in the House.","Yes, the Speaker is the ultimate master of the House","s approved text.","Only the Chief Minister can command an expunction.","Only the High Court can order the records altered."],
        "correctAnswerIndex": 0,
        "explanation": "This issue flared up in Tamil Nadu (2023) and Kerala. The SC historically views the Governor"
    },
    {
        "id": "ch33-l3-q11",
        "question": "Assertion (A): The State Legislative Council is structurally vastly inferior to the Rajya Sabha in the Indian constitutional scheme.\\nReason (R): Unlike the Rajya Sabha, the Legislative Council has no mechanism of Joint Sitting to resolve deadlocks over ordinary bills, and its very existence relies on the mercy of the State Assembly (Article 169).\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The Rajya Sabha can force a joint sitting, can veto constitutional amendments, and has special powers (Art 249/312). The Legislative Council has none of these; it can only delay ordinary bills by 4 months, and the Assembly can pass a resolution to abolish it entirely."
    },
    {
        "id": "ch33-l3-q12",
        "question": "Assertion (A): A Bill originating in the State Legislative Assembly, passed by it, and subsequently pending in the Legislative Council does NOT lapse upon the dissolution of the Assembly.\\nReason (R): The Legislative Council is a permanent, continuing chamber and is not subject to dissolution.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion A is FALSE. A bill passed by the Assembly and pending in the Council *lapses* when the Assembly dissolves. It doesn"
    },
    {
        "id": "ch33-l3-q13",
        "question": "Under Article 171, the Governor nominates one-sixth (1/6th) of the members of the Legislative Council. What specific category of",
        "options": ["Literature","Science","Art and Social Service","Cooperative Movement"],
        "correctAnswerIndex": 3,
        "explanation": "The President nominates 12 members to Rajya Sabha for Literature, Science, Art, and Social Service (LSAS). The Governor nominates 1/6th to the State Council for Literature, Science, Art, Cooperative Movement, and Social Service. The inclusion of"
    },
    {
        "id": "ch33-l3-q14",
        "question": "To be an elector in the",
        "options": ["One year and resident in any state.","Three years and residing within the state.","Five years and employed in the state government.","There is no time limit; recent graduates can vote."],
        "correctAnswerIndex": 1,
        "explanation": "Article 171(3)(b) states: 1/12th are elected by electorates consisting of persons residing in the State who have been for at least three years graduates of any University in the territory of India."
    },
    {
        "id": "ch33-l3-q15",
        "question": "The Governor is constitutionally mandated to address the State Legislature under Article 176 (",
        "options": ["Whenever a state budget is presented.","Only at the commencement of the first session after each general election to the Assembly.","At the commencement of the first session after each general election to the Legislative Assembly AND at the commencement of the first session of each year.","Whenever the ruling party changes its Chief Minister."],
        "correctAnswerIndex": 2,
        "explanation": "Article 176: The Governor shall address the legislative assembly (or both Houses assembled together) at the commencement of the first session after each general election to the legislative assembly and at the commencement of the first session of each year."
    },
    {
        "id": "ch33-l3-q16",
        "question": "Examine the intersection of State and Union Executives. If a sitting Member of a State Legislative Assembly (MLA) is invited by the Prime Minister and appointed as a Union Cabinet Minister at the Centre, what is the constitutional validity?",
        "options": ["It is illegal. A state legislator can never be a Union Minister.","It is valid. The MLA can hold both the state assembly seat and the Union Ministerial post indefinitely.","It is valid, but the MLA must get elected as a Member of Parliament (Lok Sabha or Rajya Sabha) within six months to continue as a Union Minister.","The MLA must resign his assembly seat exactly 14 days before taking the central oath."],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 75(5), anyone can become a Union Minister for 6 months. Therefore, an MLA can be sworn in at the centre. However, they must secure an MP seat within 6 months. Once they win an MP seat, the simultaneous membership rules (14 days) will kick in, forcing them to resign the MLA seat to keep the MP seat."
    },
    {
        "id": "ch33-l3-q17",
        "question": "Does the Chairman of the State Legislative Council have a",
        "options": ["No, he only has a casting vote in the event of an equality of votes.","Yes, he is entitled to vote in the first instance (like an ordinary member) when a resolution for his own REMOVAL from the office of Chairman is under consideration.","Yes, on Constitutional Amendment Bills.","Only when the Governor gives special permission."],
        "correctAnswerIndex": 1,
        "explanation": "Normally, the presiding officer (Speaker/Chairman) only casts a deciding vote to break a tie (casting vote). However, under Article 185(2), when his own removal is being debated, he is stripped of presiding powers but gains the right to vote in the first instance (though he loses the casting vote in a tie)."
    },
    {
        "id": "ch33-l3-q18",
        "question": "The 91st Constitutional Amendment (2003) restricted the size of the State Council of Ministers to 15% of the Assembly",
        "options": ["Yes, the 91st Amendment limits it to 15%.","No, the Legislative Council has no maximum limit.","No amendment was needed; Article 171 inherently restricts the maximum strength of the Council to one-third (33.3%) of the total strength of the State Legislative Assembly, and the minimum to 40.","Yes, the 104th Amendment capped the Council at 100 members."],
        "correctAnswerIndex": 2,
        "explanation": "The size of the cabinet is limited to 15% of the Assembly, but the size of the Legislative Council itself is limited to 1/3rd (approx 33%) of the Assembly strength. This prevents states from building massive, expensive upper houses just to park defeated politicians."
    },
    {
        "id": "ch33-l3-q19",
        "question": "In the State Legislative Council, who acts as the adjudicating authority to decide whether an MLC has incurred disqualification under the Tenth Schedule (Defection)?",
        "options": ["The Governor.","The Speaker of the Legislative Assembly.","The Chairman of the Legislative Council.","The Chief Justice of the State High Court."],
        "correctAnswerIndex": 2,
        "explanation": "The Tenth Schedule empowers the"
    },
    {
        "id": "ch33-l3-q20",
        "question": "Can a State High Court completely stop the Speaker of the Assembly from conducting internal legislative proceedings (like a vote or a debate) arguing that the internal procedure is irregular?",
        "options": ["Yes, under its Writ Jurisdiction (Article 226).","No. Article 212 explicitly prohibits courts from inquiring into the validity of any proceedings in the Legislature merely on the ground of any alleged",".","Only the Supreme Court can issue such a Writ.","Yes, but only if the Chief Minister requests it."],
        "correctAnswerIndex": 1,
        "explanation": "Article 212 creates a firewall between the legislature and the judiciary. A court cannot stop a vote just because the Speaker didn"
    },
    {
        "id": "ch33-l3-q21",
        "question": "Which Schedule of the Constitution contains the forms of Oath or Affirmation for a member of a State Legislature?",
        "options": ["Second Schedule","Third Schedule","Sixth Schedule","Tenth Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Third Schedule contains the forms of oaths or affirmations for various constitutional offices, including Union Ministers, MPs, Supreme Court Judges, CAG, State Ministers, MLAs/MLCs, and High Court Judges."
    },
    {
        "id": "ch33-l3-q22",
        "question": "If a Bill passed by the State Legislature is reserved by the Governor for the consideration of the President, and the President subsequently returns the Bill directing the State Legislature to reconsider it, what is the mandatory time frame for reconsideration?",
        "options": ["14 days","1 month","3 months","6 months"],
        "correctAnswerIndex": 3,
        "explanation": "Article 201: The House or Houses shall reconsider the Bill accordingly within a period of six months from the date of receipt of such message. (Note: The President is not bound to give assent even if the state legislature passes it again)."
    },
    {
        "id": "ch33-l3-q23",
        "question": "During a session of the Legislative Assembly, the attendance drops drastically, and the Speaker notes that the quorum (1/10th of strength or 10 members) is missing. What is the Speaker",
        "options": ["To impose a fine on absent members.","To pass all pending bills unilaterally.","It shall be the duty of the Speaker either to adjourn the House or to suspend the meeting until there is a quorum.","To request the Governor to dissolve the House."],
        "correctAnswerIndex": 2,
        "explanation": "If there is no quorum, the presiding officer is constitutionally mandated to not conduct any business. They must either adjourn the House (terminate the sitting) or suspend it (pause for twenty minutes, ringing the quorum bell to herd members in)."
    },
    {
        "id": "ch33-l3-q24",
        "question": "Analyze the privileges of a Cabinet Minister who is a member of the Legislative Council (MLC). Can this minister enter the Legislative Assembly during the debate on the State Budget?",
        "options": ["No, an MLC cannot cross the floor into the Assembly under any circumstances.","Yes, they can enter, participate fully in the debate, answer questions, and defend the budget, but they CANNOT cast a vote when the Assembly votes on the Demands for Grants.","Yes, being a Cabinet Minister grants them full voting rights in both houses.","They can only sit in the visitor"],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 grants ministers the right to speak in both Houses, breaking down the physical boundary between the chambers for the executive. However, core democratic principle restricts the right to *vote* strictly to the chamber where they were actually elected/nominated."
    },
    {
        "id": "ch33-l3-q25",
        "question": "Who decides the salaries and allowances of the Speaker and the Deputy Speaker of the State Legislative Assembly?",
        "options": ["The Governor of the State.","The Chief Minister.","The Parliament of India.","The State Legislature by law."],
        "correctAnswerIndex": 3,
        "explanation": "Article 186: There shall be paid to the Speaker and the Deputy Speaker... such salaries and allowances as may be respectively fixed by the Legislature of the State by law. These salaries are charged on the Consolidated Fund of the State."
    },
    {
        "id": "ch33-l3-q26",
        "question": "Which of the following Indian states currently possesses the largest Legislative Council in terms of total membership?",
        "options": ["Maharashtra","Bihar","Uttar Pradesh","Karnataka"],
        "correctAnswerIndex": 2,
        "explanation": "Uttar Pradesh has the largest Legislative Council (100 members), corresponding to its massive Legislative Assembly (403 members). (Maharashtra is 78, Bihar/Karnataka are 75)."
    },
    {
        "id": "ch33-l3-q27",
        "question": "Under Article 187, the Constitution mandates a profound separation of powers relating to the bureaucratic support system of the legislature. Which of the following is true regarding this?",
        "options": ["The Legislature is supported by the State Civil Services directly controlled by the Chief Secretary.","The House or each House of the State Legislature shall have a separate secretarial staff, ensuring the Assembly Secretariat is independent of the Executive government.","The Governor provides personal staff to run the legislature.","The Parliament provides a combined secretariat for all states."],
        "correctAnswerIndex": 1,
        "explanation": "Article 187 ensures the independence of the legislative branch. The Assembly and Council have their own independent secretariats, accountable to the Speaker/Chairman respectively, not to the Chief Minister or bureaucratic executive (though common posts can be created)."
    },
    {
        "id": "ch33-l3-q28",
        "question": "A rare constitutional crisis occurs: Both the Speaker and the Deputy Speaker of a State Assembly tragically pass away simultaneously. While the offices are vacant, who performs the duties of the Speaker?",
        "options": ["The Chief Minister appoints an interim Speaker.","The Chairman of the Legislative Council taking over Assembly functions.","Such member of the Assembly as the Governor may appoint for the purpose.","The eldest member of the Assembly automatically takes over."],
        "correctAnswerIndex": 2,
        "explanation": "Article 180(1): While the office of Speaker is vacant, the duties of the office shall be performed by the Deputy Speaker or, if the office of Deputy Speaker is also vacant, by such member of the Assembly as the Governor may appoint for the purpose (often acting as Speaker Pro Tem)."
    },
    {
        "id": "ch33-l3-q29",
        "question": "In parliamentary procedure, what is the crucial distinction between",
        "options": ["They are exact synonyms.","Adjournment sine die terminates the sitting for an indefinite period (done by the Speaker), whereas Prorogation not only terminates a sitting but also terminates the entire Session of the House (done by the Governor).","Prorogation dissolves the Assembly entirely.","Adjournment sine die is illegal."],
        "correctAnswerIndex": 1,
        "explanation": "The Speaker merely pauses the work of the House infinitely (adjournment sine die). A few days later, the Governor issues a formal notification of"
    },
    {
        "id": "ch33-l3-q30",
        "question": "If the term of a State Legislative Assembly is about to end normally, does the Governor have to formally dissolve it under Article 174(2)(b)?",
        "options": ["Yes, without formal dissolution by the Governor, the Assembly continues.","No, the Assembly stands automatically dissolved on the expiration of its term of 5 years (unless extended during an emergency).","Only the President can dissolve it at the end of the term.","Only the Election Commission can dissolve it."],
        "correctAnswerIndex": 1,
        "explanation": "Dissolution ends the life of the existing House. This can happen in two ways: 1) Automatic dissolution on the expiry of its tenure (five years). 2) Whenever the governor decides to dissolve the House prematurely based on the CM"
    }
];

export const CHAPTER_33_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
