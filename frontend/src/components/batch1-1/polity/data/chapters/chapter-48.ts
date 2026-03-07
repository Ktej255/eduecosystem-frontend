import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch48-l1-q1",
        "question": "Which Article of the Constitution provides for the National Commission for Scheduled Castes (NCSC)?",
        "options": ["Article 330","Article 338","Article 338A","Article 340"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338 provides for the National Commission for Scheduled Castes."
    },
    {
        "id": "ch48-l1-q2",
        "question": "The National Commission for Scheduled Castes is a which type of body?",
        "options": ["Statutory Body","Constitutional Body","Executive Body","NGO"],
        "correctAnswerIndex": 1,
        "explanation": "It is established directly under Article 338 of the Constitution."
    },
    {
        "id": "ch48-l1-q3",
        "question": "Before the 89th Constitutional Amendment (2003), there was a single commission for:",
        "options": ["SCs and BCs","SCs and STs","SCs and Women","SCs and Linguistic Minorities"],
        "correctAnswerIndex": 1,
        "explanation": "There was a combined National Commission for Scheduled Castes and Scheduled Tribes."
    },
    {
        "id": "ch48-l1-q4",
        "question": "The NCSC consists of a Chairman, a Vice-Chairman and how many other members?",
        "options": ["One other member","Three other members","Five other members","Ten other members"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission consists of a Chairman, a Vice-Chairman and three other members."
    },
    {
        "id": "ch48-l1-q5",
        "question": "Who appoints the Chairman and members of the NCSC?",
        "options": ["The Prime Minister","The President of India","The Speaker of Lok Sabha","The Union Home Minister"],
        "correctAnswerIndex": 1,
        "explanation": "They are appointed by the President by warrant under his hand and seal."
    },
    {
        "id": "ch48-l1-q6",
        "question": "The conditions of service and tenure of office of NCSC members are determined by:",
        "options": ["The Parliament","The President of India","The Constitution","The Ministry of Social Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The President determines the conditions of service and tenure of office."
    },
    {
        "id": "ch48-l1-q7",
        "question": "The primary function of NCSC is to investigate and monitor matters relating to:",
        "options": ["Foreign Policy","Safeguards provided for Scheduled Castes under the Constitution or any law","Border disputes","Financial markets"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission"
    },
    {
        "id": "ch48-l1-q8",
        "question": "To whom does the NCSC submit its annual report?",
        "options": ["The Parliament","The President of India","The Prime Minister","The Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "It presents an annual report to the President of India."
    },
    {
        "id": "ch48-l1-q9",
        "question": "While investigating a matter, the NCSC has all the powers of which of the following?",
        "options": ["A Criminal Court","A Civil Court","A High Court","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "It has the powers of a civil court for summoning, examining on oath, and receiving evidence."
    },
    {
        "id": "ch48-l1-q10",
        "question": "The 89th Constitutional Amendment Act came into force in which year?",
        "options": ["2002","2003","2004","2005"],
        "correctAnswerIndex": 2,
        "explanation": "The amendment was passed in 2003 but came into effect in 2004."
    },
    {
        "id": "ch48-l1-q11",
        "question": "Until 2018, the NCSC was also required to discharge similar functions with respect to which other community?",
        "options": ["Scheduled Tribes","Other Backward Classes (OBCs)","Women","Religious Minorities"],
        "correctAnswerIndex": 1,
        "explanation": "Before the 102nd Amdt, NCSC handled OBC safeguards since there was no separate constitutional commission for them."
    },
    {
        "id": "ch48-l1-q12",
        "question": "Besides SCs, the NCSC also currently investigates and monitors safeguards for which community?",
        "options": ["OBCs","Anglo-Indian Community","STs","Religious Minorities"],
        "correctAnswerIndex": 1,
        "explanation": "As per Article 338(10), it also protects the safeguards provided to Anglo-Indians."
    },
    {
        "id": "ch48-l1-q13",
        "question": "The President is required to lay the NCSC report before which body?",
        "options": ["The Supreme Court","The Parliament","The NITI Aayog","The Cabinet"],
        "correctAnswerIndex": 1,
        "explanation": "The President lays the report and the memorandum of action taken before the Parliament."
    },
    {
        "id": "ch48-l1-q14",
        "question": "Does the NCSC have the power to stay a government order?",
        "options": ["Yes","No, it only makes recommendations","Only for state governments","Only during elections"],
        "correctAnswerIndex": 1,
        "explanation": "Wait. Actually, while it has court-like powers for evidence, it is an advisory body; it"
    },
    {
        "id": "ch48-l1-q15",
        "question": "Which ministry is primarily associated with the administration of NCSC",
        "options": ["Ministry of Home Affairs","Ministry of Social Justice and Empowerment","Ministry of Tribal Affairs","Ministry of Minority Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "NCSC falls under the purview of Social Justice and Empowerment ministry."
    },
    {
        "id": "ch48-l1-q16",
        "question": "The office of NCSC is located in:",
        "options": ["Mumbai","New Delhi","Kolkata","Chennai"],
        "correctAnswerIndex": 1,
        "explanation": "Its headquarters is in New Delhi."
    },
    {
        "id": "ch48-l1-q17",
        "question": "If a report relates to a",
        "options": ["The Chief Minister","The Governor of the State","The State High Court","The DGP"],
        "correctAnswerIndex": 1,
        "explanation": "The President sends it to the Governor, who then lays it before the State Legislature."
    },
    {
        "id": "ch48-l1-q18",
        "question": "The main objective of NCSC",
        "options": ["Tax evasion","Atrocities and discrimination against Scheduled Castes","Illegal migration","Pollution in rivers"],
        "correctAnswerIndex": 1,
        "explanation": "Safeguarding the rights and lives of SCs from atrocities is a core mission."
    },
    {
        "id": "ch48-l1-q19",
        "question": "Can the NCSC take",
        "options": ["No, only if the victim applies","Yes, it has the power to take notice on its own","Only if the President allows","Only if the Supreme Court orders"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission can initiate investigations on its own notice."
    },
    {
        "id": "ch48-l1-q20",
        "question": "Is the Union Government required to consult the NCSC on major policy matters affecting SCs?",
        "options": ["No","Yes, Article 338(9) makes it mandatory","Only during a National Emergency","Only if the opposition demands"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution mandates that the Union and every State government shall consult the Commission on major policy matters."
    },
    {
        "id": "ch48-l1-q21",
        "question": "Which Constitutional Amendment provided for a single",
        "options": ["Original Constitution of 1950","42nd Amendment","65th Amendment","89th Amendment"],
        "correctAnswerIndex": 0,
        "explanation": "Originally, Art 338 provided for a Special Officer for SCs and STs."
    },
    {
        "id": "ch48-l1-q22",
        "question": "The",
        "options": ["A single Commissioner","A Multi-member National Commission for SCs and STs","The NITI Aayog","A Committee of Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "It upgraded the office to a high-level multi-member commission."
    },
    {
        "id": "ch48-l1-q23",
        "question": "Can a member of NCSC be re-appointed?",
        "options": ["Yes, for a second term.","No, once only.","Only for the Chairman post.","Only after a 10-year gap."],
        "correctAnswerIndex": 0,
        "explanation": "Members are eligible for a maximum of two terms."
    },
    {
        "id": "ch48-l1-q24",
        "question": "The term of office for NCSC members is usually how many years?",
        "options": ["2 years","3 years","5 years","6 years"],
        "correctAnswerIndex": 1,
        "explanation": "The President has specified a 3-year term by rules."
    },
    {
        "id": "ch48-l1-q25",
        "question": "Does NCSC have a the power to issue a summond to any person?",
        "options": ["Yes","No","Only to government servants","Only to SC members"],
        "correctAnswerIndex": 0,
        "explanation": "Being a quasi-judicial body with powers of a civil court, it can summon any person from any part of India."
    },
    {
        "id": "ch48-l1-q26",
        "question": "Which of the following is NOT a duty of NCSC?",
        "options": ["Investigating specific complaints.","Participating in the planning process for socio-economic development of SCs.","Conducting elections for SC reserved seats.","Making recommendations for effective implementation of safeguards."],
        "correctAnswerIndex": 2,
        "explanation": "Elections are conducted by the Election Commission (Art 324)."
    },
    {
        "id": "ch48-l1-q27",
        "question": "Before the formation of",
        "options": ["UPSC","NCSC","NCST","Ministry of External Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "NCSC had the additional responsibility for OBCs and Anglo-Indians."
    },
    {
        "id": "ch48-l1-q28",
        "question": "The",
        "options": ["They had no work.","To provide focused attention on the unique problems of STs compared to SCs.","To reduce the salary of the Chairman.","Because the building was too small."],
        "correctAnswerIndex": 1,
        "explanation": "Geographically, culturally, and socially, STs have distinct issues requiring specific expertise."
    },
    {
        "id": "ch48-l1-q29",
        "question": "The Chairman of NCSC has the rank of a:",
        "options": ["Cabinet Minister of the Union","Minister of State","Secretary to the Govt of India","Governor"],
        "correctAnswerIndex": 0,
        "explanation": "The Chairman is given the rank/status of a Union Cabinet Minister."
    },
    {
        "id": "ch48-l1-q30",
        "question": "The Vice-Chairman of NCSC has the rank of a:",
        "options": ["Cabinet Minister","Minister of State","Secretary","Additional Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-Chairman is given the rank of a Minister of State."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch48-l2-q1",
        "question": "The 89th Constitutional Amendment Act (2003) is famous for which of the following?",
        "options": ["Abolishing the SC and ST commissions.","Bifurcating the combined National Commission for SCs and STs into two separate bodies (NCSC under Art 338 and NCST under Art 338A).","Making the NCSC report directly to the Supreme Court.","Giving the NCSC power to arrest individuals."],
        "correctAnswerIndex": 1,
        "explanation": "This was done to ensure focused and specialized handling of the distinct problems of both communities."
    },
    {
        "id": "ch48-l2-q2",
        "question": "Assertion (A): The NCSC has the powers of a Civil Court while investigating any matter.\\nReason (R): It can summon any person from any part of India and examine him on oath.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "To fulfill its investigatory mandate (quasi-judicial), it is legally equipped with standard court-like procedural powers."
    },
    {
        "id": "ch48-l2-q3",
        "question": "Why was the",
        "options": ["Because OBCs were no longer backward.","Because a separate constitutional body, the National Commission for Backward Classes (NCBC), was created by the 102nd Amendment.","Because NCSC was too busy.","Because the Supreme Court abolished the OBC category."],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment Act added Article 338B, giving NCBC constitutional status and taking over OBC functions from NCSC."
    },
    {
        "id": "ch48-l2-q4",
        "question": "The NCSC report contains a",
        "options": ["The Commission itself.","The Union or State Government (depending on the recommendation).","The President of India.","The Chief Justice of India."],
        "correctAnswerIndex": 1,
        "explanation": "This creates transparency and accountability by forcing the executive to publicly justify their decision to the legislature."
    },
    {
        "id": "ch48-l2-q5",
        "question": "Which of the following is correct regarding the",
        "options": ["NCSC has no role for Anglo-Indians.","NCSC is constitutionally required to discharge the same functions for Anglo-Indians as it does for SCs (Art 338(10)).","There is a separate National Commission for Anglo-Indians.","Only the UPSC deals with Anglo-Indian rights."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338(10) extends all protections and commission duties to"
    },
    {
        "id": "ch48-l2-q6",
        "question": "What does",
        "options": ["NCSC prepares the entire budget for SC areas.","The Commission must be involved in the conceptualization of socio-economic development schemes by both the Union and State governments.","The Commission can fire the Planning Minister.","The Commission only checks the final spend."],
        "correctAnswerIndex": 1,
        "explanation": "This proactive role ensures that SC interests are integrated into development planning at the start."
    },
    {
        "id": "ch48-l2-q7",
        "question": "When the President lays the report before the Parliament, it must include an ATR. What is ATR?",
        "options": ["Annual Tax Return.","Action Taken Report.","Automatic Transfer of Resources.","Anti-Terrorist Regulation."],
        "correctAnswerIndex": 1,
        "explanation": "It details the steps taken on recommendations and gives reasons for non-compliance (memorandum)."
    },
    {
        "id": "ch48-l2-q8",
        "question": "Can the Governor of a state reject the NCSC report after it is laid before the state legislature?",
        "options": ["No, the report is for information and recommendation; the state legislature/executive decides.","Yes, the Governor has a veto.","Only if the President agrees.","Only if the High Court agrees."],
        "correctAnswerIndex": 0,
        "explanation": "The Commission"
    },
    {
        "id": "ch48-l2-q9",
        "question": "The NCSC is which type of body in its operation of civil court powers?",
        "options": ["Purely executive.","Quasi-judicial.","Legislative.","Purely advisory with no procedural powers."],
        "correctAnswerIndex": 1,
        "explanation": "It performs some judicial functions (summoning, evidence) without being a full court."
    },
    {
        "id": "ch48-l2-q10",
        "question": "A member of NCSC can be removed by the President for:",
        "options": ["Insolvency.","Unsoundness of mind declared by a court.","Holding an office of profit.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Standard grounds for removal of constitutional/statutory body members apply."
    },
    {
        "id": "ch48-l2-q11",
        "question": "Is the Union Government mandated to consult NCSC on a bill modifying the SC list?",
        "options": ["No.","Yes, under Article 338(9) regarding",".","Only if the bill is for South India.","Only if the Supreme Court orders so."],
        "correctAnswerIndex": 1,
        "explanation": "Any major change in the status or definition of SCs falls under the mandatory consultation clause."
    },
    {
        "id": "ch48-l2-q12",
        "question": "Before the 65th Amendment (1990), who handled these functions?",
        "options": ["NITI Aayog.","A Special Officer (Commissioner for SCs and STs).","The Union Home Secretary.","The Chief Justice of India."],
        "correctAnswerIndex": 1,
        "explanation": "The change from a single officer to a multi-member commission was to provide more weight and diversified expertise."
    },
    {
        "id": "ch48-l2-q13",
        "question": "If a recommendation involves a matter under a",
        "options": ["Order the state CM to obey.","Forward it to the Governor of the state.","Ask the High Court to enforce it.","Ignore it."],
        "correctAnswerIndex": 1,
        "explanation": "This follows the federal protocol (Art 338(7))."
    },
    {
        "id": "ch48-l2-q14",
        "question": "The term",
        "options": ["The President uses a magic wand.","The appointment is of a high constitutional status made directly by the President.","The appointment is made by a local police officer.","The appointment is temporary."],
        "correctAnswerIndex": 1,
        "explanation": "It signifies the importance of the office (similar to Governors and Judges)."
    },
    {
        "id": "ch48-l2-q15",
        "question": "Does NCSC handle the implementation of the",
        "options": ["No, only the police do.","Yes, it monitors implementation and investigates specific cases of failure by authorities.","Only for the police officers","Only during national holidays."],
        "correctAnswerIndex": 1,
        "explanation": "Monitoring the legal and social safeguards provided by laws is its primary duty."
    },
    {
        "id": "ch48-l2-q16",
        "question": "A",
        "options": ["The number of mountains.","The concentration of SC population in that state/region.","The Governor","The size of the state only."],
        "correctAnswerIndex": 1,
        "explanation": "The commission has several regional offices across India to reach victims effectively."
    },
    {
        "id": "ch48-l2-q17",
        "question": "Which of the following describes the",
        "options": ["Its reports can be used as a coaster for tea.","Its findings are authoritative but not legally binding on the courts or government departments.","It can only give advice about the weather.","It must be obeyed by the President."],
        "correctAnswerIndex": 1,
        "explanation": "Similar to NHRC or UPSC, its power is"
    },
    {
        "id": "ch48-l2-q18",
        "question": "Can a person from the General category be the Chairman of NCSC?",
        "options": ["No, custom and the merit of representation ensure the Chairman is from the SC community.","Yes.","Only if they are a former CJI.","Only if no SC member is available."],
        "correctAnswerIndex": 0,
        "explanation": "By convention and the spirit of the"
    },
    {
        "id": "ch48-l2-q19",
        "question": "The",
        "options": ["The Prime Minister.","The President of India.","The Union Home Minister.","The Speaker of Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338(3) mentions"
    },
    {
        "id": "ch48-l2-q20",
        "question": "What is the relation between NCSC and the Scheduled Tribes? (After 2004)",
        "options": ["NCSC continues to handle STs.","NCSC has no jurisdiction over STs (handled by NCST).","NCSC handles STs only in J&K.","NCSC handles STs if they live in cities."],
        "correctAnswerIndex": 1,
        "explanation": "The bifurcation is complete; NCST handles ST-specific issues under Article 338A."
    },
    {
        "id": "ch48-l2-q21",
        "question": "",
        "options": ["Any court or office.","Only from the PMO.","Private companies only.","Foreign embassies."],
        "correctAnswerIndex": 0,
        "explanation": "This allows for verification of government actions through official records."
    },
    {
        "id": "ch48-l2-q22",
        "question": "Does NCSC deal with complaints of",
        "options": ["Yes, it is a Constitutional safeguard (Art 17) it must monitor.","No, that","Only if it happens in a school.","Only for children."],
        "correctAnswerIndex": 0,
        "explanation": "Article 17 abolition is a key safeguard that NCSC oversees implementation for."
    },
    {
        "id": "ch48-l2-q23",
        "question": "Is NCSC required to coordinate with the National Human Rights Commission (NHRC)?",
        "options": ["No.","Yes, as many SC atrocities are also human rights violations, they often share data or refer cases.","Only during a war.","Only if the UN orders."],
        "correctAnswerIndex": 1,
        "explanation": "Functional synergy exists among the various commissions guarding rights."
    },
    {
        "id": "ch48-l2-q24",
        "question": "The",
        "options": ["The Governor","The office of","for SCs and STs.","The Supreme Court","The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "It was the first major step toward an institutional commission model."
    },
    {
        "id": "ch48-l2-q25",
        "question": "Which Article provides that the Union and State governments MUST consult the NCSC on major policy matters?",
        "options": ["Article 338(1)","Article 338(5)","Article 338(9)","Article 339"],
        "correctAnswerIndex": 2,
        "explanation": "Article 338(9) is the specific clause for mandatory consultation."
    },
    {
        "id": "ch48-l2-q26",
        "question": "The 102nd Amendment significantly reduced the",
        "options": ["Taking away the Anglo-Indian function.","Taking away the Other Backward Classes (OBC) function (now with NCBC).","Taking away investigation powers.","Closing its regional offices."],
        "correctAnswerIndex": 1,
        "explanation": "OBCs got their own dedicated constitutional commission, allowing NCSC to focus solely on SCs (and Anglo-Indians)."
    },
    {
        "id": "ch48-l2-q27",
        "question": "Can NCSC summon a High Court Judge as a witness?",
        "options": ["Yes, if required for investigation.","No, judges have immunity.","Only with the CJI","Only for private matters."],
        "correctAnswerIndex": 0,
        "explanation": "The civil court powers are broad, though practiced with high procedural decorum."
    },
    {
        "id": "ch48-l2-q28",
        "question": "The NCSC annual report is",
        "options": ["Because it is too long to read.","Because it is laid before the Parliament and subjected to public scrutiny and democratic accountability.","Because the Chairman is a friend of the PM.","Because it is printed on gold paper."],
        "correctAnswerIndex": 1,
        "explanation": "The political cost of ignoring a constitutional body"
    },
    {
        "id": "ch48-l2-q29",
        "question": "If a vacancy exists in the post of",
        "options": ["Yes (quorum rules and Art 338(10) logic).","No.","Only if the Chairman agrees.","Only if the President nominates an acting VC."],
        "correctAnswerIndex": 0,
        "explanation": "The commission is a continuing body."
    },
    {
        "id": "ch48-l2-q30",
        "question": "The",
        "options": ["Socialist planning.","Empowerment-based governance where beneficiaries have a voice through their commission.","Dictatorship.","Bureaucratic delay."],
        "correctAnswerIndex": 1,
        "explanation": "It ensures"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch48-l3-q1",
        "question": "Analyze the",
        "options": ["The policy/act is automatically void and unconstitutional.","It is a procedural irregularity that can be challenged in the Supreme Court as a violation of a specific constitutional mandate.","The Chairman of NCSC can fire the Minister.","The policy is delayed by 10 years."],
        "correctAnswerIndex": 1,
        "explanation": "While it doesn"
    },
    {
        "id": "ch48-l3-q2",
        "question": "The",
        "options": ["Scheduled Tribes.","Other Backward Classes (OBCs).","Anglo-Indians.","Both 1 and 2."],
        "correctAnswerIndex": 1,
        "explanation": "Before 2018, NCSC handled OBCs under its residual power (Art 338(10)). After 2018, Article 338B created a separate commission (NCBC) for them."
    },
    {
        "id": "ch48-l3-q3",
        "question": "In the context of NCSC",
        "options": ["1, 2 and 3 only","2, 3 and 4 only","1 and 2 only","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission performs"
    },
    {
        "id": "ch48-l3-q4",
        "question": "Article 338(3) uses the term",
        "options": ["Prime Minister and Cabinet Ministers.","Judges of High Court and Supreme Court, Comptroller and Auditor General, and Governors.","Election Commissioners and UPSC members.","Only the Vice-President."],
        "correctAnswerIndex": 1,
        "explanation": "It signifies that these are extremely high offices of the state, distinct from routine civil service appointments."
    },
    {
        "id": "ch48-l3-q5",
        "question": "Identify the",
        "options": ["It still protects the Anglo-Indian community.","It protects the LGBTQ+ community.","It protects the linguistic minorities.","It has no residual functions."],
        "correctAnswerIndex": 0,
        "explanation": "Article 338(10) continues to include the Anglo-Indian community under the NCSC"
    },
    {
        "id": "ch48-l3-q6",
        "question": "The 65th Amendment (1990) changed the",
        "options": ["Because the Special Officer was always an Englishman.","Because a multi-member body allows for diverse representation and broader collective wisdom in reviewing complex social issues.","Because the Parliament voted on it.","Because the commission members are elected by the public."],
        "correctAnswerIndex": 1,
        "explanation": "It reduced the dependency on a single individual"
    },
    {
        "id": "ch48-l3-q7",
        "question": "Regarding NCSC",
        "options": ["It directs the Ministry of Finance to allocate 20% budget to SCs.","It participates in and advises on the planning process of socio-economic development of Scheduled Castes.","It prepares the Five-Year Plans for the entire country.","It only reviews the spending after 10 years."],
        "correctAnswerIndex": 1,
        "explanation": "This is a proactive and consultative role designed to integrate SC-specific needs into general public policy."
    },
    {
        "id": "ch48-l3-q8",
        "question": "The National Commission for Scheduled Castes is often criticized as a",
        "options": ["It doesn","Its findings are","and it lacks the power to enforce its decisions or punish perpetrators directly.","It has no office in New Delhi.","The Chairman is not a powerful person."],
        "correctAnswerIndex": 1,
        "explanation": "A common critique of constitutional/statutory commissions in India is the gap between their investigative powers and their enforcement capabilities."
    },
    {
        "id": "ch48-l3-q9",
        "question": "Compare Article 338 (NCSC) and Article 339 (Control of the Union over the administration of Scheduled Areas). Which describes their interaction?",
        "options": ["They are the same.","338 is about","through a commission; 339 is about","of the Union to give directions to states for SC/ST welfare.","339 has been abolished.","NCSC controls the President under Art 339."],
        "correctAnswerIndex": 1,
        "explanation": "They are complementary; one provides oversight (NCSC), while the other provides the executive"
    },
    {
        "id": "ch48-l3-q10",
        "question": "The NCSC report",
        "options": ["The salary of the Chairman.","Reasons for non-acceptance of recommendations, ensuring high political accountability.","The number of visitors to the commission.","The weather during the investigation."],
        "correctAnswerIndex": 1,
        "explanation": "Publicly justifying the rejection of a constitutional body"
    },
    {
        "id": "ch48-l3-q11",
        "question": "Consider NCSC",
        "options": ["Anglo-Indians have their own commission.","NCSC handles Anglo-Indian community concerns as per Article 338(10).","Anglo-Indians have no constitutional safeguards anymore.","Only the Speaker of Lok Sabha handles them."],
        "correctAnswerIndex": 1,
        "explanation": "Wait. Let"
    },
    {
        "id": "ch48-l3-q12",
        "question": "The 89th Constitutional Amendment (2003) bifurcated the commission. Why was the date of implementation 2004?",
        "options": ["Because the Parliament forgot about it.","Administrative setup and rules for the two new separate commissions (NCSC and NCST) required time.","Because there were no buildings.","Because the President was on vacation."],
        "correctAnswerIndex": 1,
        "explanation": "Major structural changes in constitutional bodies require considerable administrative preparation."
    },
    {
        "id": "ch48-l3-q13",
        "question": "In the context of",
        "options": ["He fires the CM if the report is bad.","He lays it before the State Legislature along with a memorandum of action taken/reasons for non-acceptance.","He sends it to the High Court for a verdict.","He keeps it in his personal library."],
        "correctAnswerIndex": 1,
        "explanation": "This mirrors the procedure at the Union level, ensuring state-level accountability."
    },
    {
        "id": "ch48-l3-q14",
        "question": "The",
        "options": ["The Ombudsman.","The Commissioner for SCs and STs.","The Protector of Dalits.","The High Commissioner."],
        "correctAnswerIndex": 1,
        "explanation": "This was the single-individual office provided by the original Constitution."
    },
    {
        "id": "ch48-l3-q15",
        "question": "Does NCSC have any",
        "options": ["Yes.","No, it can only suggest laws and monitor existing ones.","Only for SC-reserved constituencies.","Only in the North-East."],
        "correctAnswerIndex": 1,
        "explanation": "The Commission is an executive and quasi-judicial investigative body; law-making remains with the legislatures."
    },
    {
        "id": "ch48-l3-q16",
        "question": "Analyze the",
        "options": ["Appointment by President by warrant.","Budget charged on the Consolidated Fund (Wait, are they?).","Tenure and service conditions determined by the President (and not just cabinet).","Both 1 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "Constitutional foundations (Art 338) and Presidential appointment provide a layer of protection from routine political whims."
    },
    {
        "id": "ch48-l3-q17",
        "question": "If a government department refuses to provide a public record (Art 338(8)(d)) to NCSC, what can the Commission do?",
        "options": ["It can charge the head of the department with contempt as a civil court.","It can call the Prime Minister.","It can file a case in the Supreme Court.","It can only wait."],
        "correctAnswerIndex": 0,
        "explanation": "Exercising its civil court powers, it can enforce the production of documents."
    },
    {
        "id": "ch48-l3-q18",
        "question": "Which of the following is the",
        "options": ["Property rights of rich SC people.","Education (reservations in admissions) and Employment (reservation in recruitment and promotions).","Space travel rights.","Right to eat at five-star hotels."],
        "correctAnswerIndex": 1,
        "explanation": "Compliance with reservation policy is a major pillar of SC constitutional safeguards."
    },
    {
        "id": "ch48-l3-q19",
        "question": "The 102nd Amendment significantly changed NCSC by adding which Article for another body?",
        "options": ["Article 338A.","Article 338B (NCBC).","Article 340.","Article 341."],
        "correctAnswerIndex": 1,
        "explanation": "Art 338B institutionalized the constitutional status for the Backward Classes commission."
    },
    {
        "id": "ch48-l3-q20",
        "question": "Can a person with",
        "options": ["Yes, if they are an eminent person from the community with a track record of service.","No, only retired MPs can be chairmen.","Only retired judges can be chairmen.","Only active ministers."],
        "correctAnswerIndex": 0,
        "explanation": "The President"
    },
    {
        "id": "ch48-l3-q21",
        "question": "The NCSC report is",
        "options": ["No. It means the government must","the commission before deciding, though it","obey","Yes, it is a paradox.","It means the commission","It means the government must consult the commission only after passing the law."],
        "correctAnswerIndex": 0,
        "explanation": "Consultation is a procedural requirement; compliance is a substantive choice. The"
    },
    {
        "id": "ch48-l3-q22",
        "question": "Analyze the impact of NCSC using its",
        "options": ["It conducts its own parallel trial in its office.","It monitors the progress of cases, summons investigation officers for updates, and ensures that the","Act is correctly invoked.","It fires the police officer on the spot.","It gives early bail to the accused."],
        "correctAnswerIndex": 1,
        "explanation": "It provides a constitutional oversight layer over the executive and police functioning to prevent bias/apathy."
    },
    {
        "id": "ch48-l3-q23",
        "question": "Which Constitutional Amendment (by bill number) introduced the provision for a multi-member commission (65th)?",
        "options": ["62nd Bill.","68th Bill.","75th Bill.","101st Bill."],
        "correctAnswerIndex": 0,
        "explanation": "The 65th Amendment Act (90) came from the 62nd Amendment Bill (89)."
    },
    {
        "id": "ch48-l3-q24",
        "question": "In the context of",
        "options": ["It abolished the NCSC.","It ended the reservation of seats in Lok Sabha/Assemblies for Anglo-Indians, but their community safeguards (monitored by NCSC) remain in Art 338(10).","It made Anglo-Indians as Scheduled Castes.","It gave Anglo-Indians their own state."],
        "correctAnswerIndex": 1,
        "explanation": "Political representation ended, but cultural/safeguard monitoring by the commission continues."
    },
    {
        "id": "ch48-l3-q25",
        "question": "The term",
        "options": ["Abolition of Untouchability (Art 17).","Protection of Life and Liberty (Art 21) specifically in the context of atrocities.","Educational and Economic interests (Art 46).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "NCSC monitors a wide spectrum of constitutional protections."
    },
    {
        "id": "ch48-l3-q26",
        "question": "The",
        "options": ["Removed by the PM.","Removed by the President for proven misbehaviour after an inquiry (similar to other high offices).","Removed by the Chairman.","Removed by a vote in the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional safeguards for the body itself ensure it cannot be easily subverted."
    },
    {
        "id": "ch48-l3-q27",
        "question": "The NCSC report",
        "options": ["Judicial.","Legislative and Public.","Financial.","International."],
        "correctAnswerIndex": 1,
        "explanation": "It brings the government"
    },
    {
        "id": "ch48-l3-q28",
        "question": "Analyze the",
        "options": ["Yes.","No, the procedure is free and accessible to the common person to ensure social justice reach.","Only for companies.","Only if the complainant is rich."],
        "correctAnswerIndex": 1,
        "explanation": "Accessibility is a key design feature of human rights and community Commissions."
    },
    {
        "id": "ch48-l3-q29",
        "question": "Regarding NCSC",
        "options": ["The law becomes invalid.","The government must explain the rejection to the Parliament, which provides the opposition and public a chance to critique the policy.","The government is fined.","The Chairman can stay the law for 5 years."],
        "correctAnswerIndex": 1,
        "explanation": "Accountability through transparency (Art 338(6)/(7))."
    },
    {
        "id": "ch48-l3-q30",
        "question": "The National Commission for Scheduled Castes is symbolic of which Preamble value?",
        "options": ["Liberty.","Justice (Social, Economic and Political).","Sovereignty.","Secularism."],
        "correctAnswerIndex": 1,
        "explanation": "The body is specifically designed to deliver Social Justice as promised in the Preamble."
    }
];

export const CHAPTER_48_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
