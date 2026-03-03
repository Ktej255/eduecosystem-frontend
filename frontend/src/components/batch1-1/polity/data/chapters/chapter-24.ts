import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch24-l1-q1",
        "question": "What is a Parliamentary Committee?",
        "options": ["Any committee comprising members of Parliament.","A committee that is appointed or elected by the House or nominated by the Speaker/Chairman.","A committee that works closely with the President.","A committee formed by the ruling party."],
        "correctAnswerIndex": 1,
        "explanation": "A parliamentary committee means a committee that... Is appointed or elected by the House or nominated by the Speaker / Chairman... Works under the direction of the Speaker / Chairman... Presents its report to the House or to the Speaker / Chairman... Has a secretariat provided by the Lok Sabha / Rajya Sabha."
    },
    {
        "id": "ch24-l1-q2",
        "question": "Under whose direction does a Parliamentary Committee work?",
        "options": ["The Prime Minister","The President of India","The Speaker / Chairman of the House","The Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "A parliamentary committee... Works under the direction of the Speaker / Chairman."
    },
    {
        "id": "ch24-l1-q3",
        "question": "What are the two broad classifications of Parliamentary Committees?",
        "options": ["Standing Committees and Ad Hoc Committees","Financial Committees and Administrative Committees","Lok Sabha Committees and Rajya Sabha Committees","Statutory Committees and Non-Statutory Committees"],
        "correctAnswerIndex": 0,
        "explanation": "Broadly, parliamentary committees are of two kinds—Standing Committees and Ad Hoc Committees. The former are permanent... The latter are temporary..."
    },
    {
        "id": "ch24-l1-q4",
        "question": "Which of the following describes Standing Committees?",
        "options": ["They are temporary and cease to exist after completing their task.","They are appointed by the President during emergencies.","They are permanent (constituted every year or periodically) and work on a continuous basis.","They are composed only of Ministers."],
        "correctAnswerIndex": 2,
        "explanation": "The former [Standing Committees] are permanent (constituted every year or periodically) and work on a continuous basis."
    },
    {
        "id": "ch24-l1-q5",
        "question": "Which category do the Public Accounts Committee, Estimates Committee, and Committee on Public Undertakings fall under?",
        "options": ["Ad hoc Committees","Financial Committees","Departmental Standing Committees","Committees to Inquire"],
        "correctAnswerIndex": 1,
        "explanation": "Financial Committees (a) Public Accounts Committee (b) Estimates Committee (c) Committee on Public Undertakings"
    },
    {
        "id": "ch24-l1-q6",
        "question": "When was the Public Accounts Committee first set up?",
        "options": ["1919","1921","1947","1950"],
        "correctAnswerIndex": 1,
        "explanation": "This committee was set up first in 1921 under the provisions of the Government of India Act of 1919 and has since been in existence."
    },
    {
        "id": "ch24-l1-q7",
        "question": "What is the total membership of the Public Accounts Committee presently?",
        "options": ["15 members","20 members","22 members","30 members"],
        "correctAnswerIndex": 2,
        "explanation": "At present, it consists of 22 members (15 from the Lok Sabha and 7 from the Rajya Sabha)."
    },
    {
        "id": "ch24-l1-q8",
        "question": "How are the members of the Public Accounts Committee elected?",
        "options": ["Nominated by the President","Elected by the Parliament entirely from the ruling party","Elected by the Parliament every year from amongst its members according to the principle of proportional representation by means of the single transferable vote","Directly elected by the public"],
        "correctAnswerIndex": 2,
        "explanation": "The members are elected by the Parliament every year from amongst its members according to the principle of proportional representation by means of the single transferable vote."
    },
    {
        "id": "ch24-l1-q9",
        "question": "Can a minister be elected as a member of the Public Accounts Committee?",
        "options": ["Yes, invariably","Yes, if nominated by the Speaker","No","Only the Finance Minister"],
        "correctAnswerIndex": 2,
        "explanation": "A minister cannot be elected as a member of the committee."
    },
    {
        "id": "ch24-l1-q10",
        "question": "Since 1967, what convention has developed regarding the chairman of the Public Accounts Committee?",
        "options": ["The chairman is always the Speaker of the Lok Sabha.","The chairman is selected invariably from the ruling party.","The chairman is selected invariably from the Opposition.","The oldest member of the committee becomes the chairman."],
        "correctAnswerIndex": 2,
        "explanation": "However, since 1967 a convention has developed whereby the chairman of the committee is selected invariably from the Opposition."
    },
    {
        "id": "ch24-l1-q11",
        "question": "What is the primary function of the Public Accounts Committee?",
        "options": ["To draft the union budget.","To examine the annual audit reports of the Comptroller and Auditor General of India (CAG).","To decide the allocation of funds to state governments.","To appoint the Finance Commission."],
        "correctAnswerIndex": 1,
        "explanation": "The function of the committee is to examine the annual audit reports of the Comptroller and Auditor General of India (CAG), which are laid before the Parliament by the President."
    },
    {
        "id": "ch24-l1-q12",
        "question": "Who acts as a",
        "options": ["The Prime Minister","The Speaker of the Lok Sabha","The Comptroller and Auditor General of India (CAG)","The Finance Secretary"],
        "correctAnswerIndex": 2,
        "explanation": "In the fulfillment of the above functions, the committee is assisted by the CAG. In fact, the CAG acts as a guide, friend and philosopher of the committee."
    },
    {
        "id": "ch24-l1-q13",
        "question": "When was the first Estimates Committee in the post-independence era constituted?",
        "options": ["1947","1950","1952","1956"],
        "correctAnswerIndex": 1,
        "explanation": "The origin of this committee can be traced to the standing financial committee set up in 1921. The first Estimates Committee in the post-independence era was constituted in 1950 on the recommendation of John Mathai, the then finance minister."
    },
    {
        "id": "ch24-l1-q14",
        "question": "What is the membership strength of the Estimates Committee?",
        "options": ["22 members (15 from LS and 7 from RS)","30 members (all from Lok Sabha)","45 members (30 from LS and 15 from RS)","15 members (all from Rajya Sabha)"],
        "correctAnswerIndex": 1,
        "explanation": "Originally, it had 25 members but in 1956 its membership was raised to 30. All the thirty members are from Lok Sabha only. The Rajya Sabha has no representation in this committee."
    },
    {
        "id": "ch24-l1-q15",
        "question": "From which House are the members of the Estimates Committee drawn?",
        "options": ["Lok Sabha only","Rajya Sabha only","Both Lok Sabha and Rajya Sabha","Nominated by the President"],
        "correctAnswerIndex": 0,
        "explanation": "All the thirty members are from Lok Sabha only. The Rajya Sabha has no representation in this committee."
    },
    {
        "id": "ch24-l1-q16",
        "question": "Who appoints the chairman of the Estimates Committee?",
        "options": ["The Prime Minister","The President","The Speaker","The Chairman of Rajya Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "The chairman of the committee is appointed by the Speaker from amongst its members..."
    },
    {
        "id": "ch24-l1-q17",
        "question": "What is the primary function of the Estimates Committee?",
        "options": ["To audit government accounts post-expenditure.","To suggest","in public expenditure by examining the estimates included in the budget.","To approve or reject the annual budget.","To investigate administrative corruption."],
        "correctAnswerIndex": 1,
        "explanation": "The function of the committee is to examine the estimates included in the budget and suggest ‘economies’ in public expenditure."
    },
    {
        "id": "ch24-l1-q18",
        "question": "On whose recommendation was the Committee on Public Undertakings created in 1964?",
        "options": ["Santhanam Committee","Krishna Menon Committee","John Mathai Committee","Mandal Commission"],
        "correctAnswerIndex": 1,
        "explanation": "This committee was created in 1964 on the recommendation of the Krishna Menon Committee."
    },
    {
        "id": "ch24-l1-q19",
        "question": "What is the current membership of the Committee on Public Undertakings?",
        "options": ["15 members (10 LS, 5 RS)","22 members (15 LS, 7 RS)","30 members (all LS)","45 members"],
        "correctAnswerIndex": 1,
        "explanation": "Originally, it had 15 members (10 from the Lok Sabha and 5 from the Rajya Sabha). However, in 1974, its membership was raised to 22 (15 from the Lok Sabha and 7 from the Rajya Sabha)."
    },
    {
        "id": "ch24-l1-q20",
        "question": "From which House can the chairman of the Committee on Public Undertakings be appointed?",
        "options": ["Only from the Lok Sabha","Only from the Rajya Sabha","From either House","They are usually an outside expert"],
        "correctAnswerIndex": 0,
        "explanation": "The chairman of the committee is appointed by the Speaker from amongst its members who are drawn from the Lok Sabha only. Thus, the members of the committee who are from the Rajya Sabha cannot be appointed as the chairman."
    },
    {
        "id": "ch24-l1-q21",
        "question": "Can the Committee on Public Undertakings examine matters of major government policy as distinct from business or commercial functions of the public undertakings?",
        "options": ["Yes, absolutely.","No, the committee is not to examine and investigate... matters of major government policy as distinct from business or commercial functions of the public undertakings.","Yes, if directed by the President.","Yes, but only for navratna companies."],
        "correctAnswerIndex": 1,
        "explanation": "The committee is not to examine and investigate any of the following: (i) matters of major government policy as distinct from business or commercial functions of the public undertakings..."
    },
    {
        "id": "ch24-l1-q22",
        "question": "When was the system of Departmental Standing Committees (DSCs) instituted?",
        "options": ["1950","1989","1993","2004"],
        "correctAnswerIndex": 2,
        "explanation": "On the recommendation of the Rules Committee of the Lok Sabha, 17 Departmentally-Related Standing Committees (DRSCs) were set up in the Parliament in 1993."
    },
    {
        "id": "ch24-l1-q23",
        "question": "Currently, how many Departmental Standing Committees (DSCs) exist?",
        "options": ["17","20","24","30"],
        "correctAnswerIndex": 2,
        "explanation": "In 2004, seven more such committees were setup, thus increasing their number from 17 to 24."
    },
    {
        "id": "ch24-l1-q24",
        "question": "What is the main objective of the Departmental Standing Committees?",
        "options": ["To audit all state governments.","To ensure day-to-day administration of ministries.","To secure more accountability of the Executive (i.e., the Council of Ministers) to the Parliament, particularly financial accountability.","To conduct elections for the Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "The main objective of the standing committees is to secure more accountability of the Executive (i.e., the Council of Ministers) to the Parliament, particularly financial accountability."
    },
    {
        "id": "ch24-l1-q25",
        "question": "How many members does each Departmental Standing Committee consist of?",
        "options": ["21","31","45","50"],
        "correctAnswerIndex": 1,
        "explanation": "Each standing committee consists of 31 members (21 from Lok Sabha and 10 from Rajya Sabha)."
    },
    {
        "id": "ch24-l1-q26",
        "question": "Do the recommendations of the Departmental Standing Committees have a binding nature on Parliament?",
        "options": ["Yes, they are absolute laws.","No, they are highly regarded but are advisory in nature.","Yes, unless vetoed by the President.","Yes, but only the financial ones."],
        "correctAnswerIndex": 1,
        "explanation": "However, it should be noted that the recommendations of these committees are advisory in nature and hence not binding on the Parliament."
    },
    {
        "id": "ch24-l1-q27",
        "question": "Which committee specifically considers matters of procedure and conduct of business in the House?",
        "options": ["Committee on Privileges","Rules Committee","Business Advisory Committee","Committee on Petitions"],
        "correctAnswerIndex": 1,
        "explanation": "Rules Committee: This committee considers the matters of procedure and conduct of business in the House and recommends necessary amendments or additions to the rules of the House."
    },
    {
        "id": "ch24-l1-q28",
        "question": "Who acts as the ex-officio chairman of the Rules Committee in the Lok Sabha?",
        "options": ["The Prime Minister","The Minister of Parliamentary Affairs","The Speaker","A member of the opposition"],
        "correctAnswerIndex": 2,
        "explanation": "The Lok Sabha committee consists of 15 members including the Speaker as its ex-officio chairman."
    },
    {
        "id": "ch24-l1-q29",
        "question": "What does the Committee on Privileges examine?",
        "options": ["It examines the privileges of the Prime Minister.","It investigates the financial privileges of states.","The functions of this committee are semi-judicial in nature. It examines the cases of breach of privileges of the House and its members and recommends appropriate action.","It handles international diplomatic privileges."],
        "correctAnswerIndex": 2,
        "explanation": "Committee on Privileges: The functions of this committee are semi-judicial in nature. It examines the cases of breach of privileges of the House and its members and recommends appropriate action."
    },
    {
        "id": "ch24-l1-q30",
        "question": "Which committee examines bills to ensure that the rules regarding the formulation of bye-laws and regulations by the executive are being properly followed?",
        "options": ["Committee on Subordinate Legislation","Committee on Assurances","Business Advisory Committee","Committee on Petitions"],
        "correctAnswerIndex": 0,
        "explanation": "Committee on Subordinate Legislation: This committee examines and reports to the House whether the powers to make regulations, rules, sub-rules and bye-laws delegated by the Parliament or conferred by the Constitution to the Executive are being properly exercised by it."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch24-l2-q1",
        "question": "Consider the constitutional and functional necessity of Parliamentary Committees in India. Given that the Parliament meets for roughly 70-80 days a year, what is the primary structural reason the committee system is indispensable?",
        "options": ["Because the Supreme Court mandated their creation to oversee the executive.","Because committees are the only bodies allowed to introduce Constitutional Amendments.","Because the Parliament is too unwieldy a body (over 700 members) and lacks the time and technical expertise to scrutinize complex legislative drafts, thousands of pages of budget demands, and detailed administrative actions effectively on the floor of the House.","Because they act as the electoral college for the Vice-President."],
        "correctAnswerIndex": 2,
        "explanation": "The floor of the House is for grand political debate. It is terrible for detailed technical scrutiny. The 24/7 complex functioning of a modern state means Parliament simply cannot read every line of a 500-page telecom bill or audit report. Committees act as Parliament"
    },
    {
        "id": "ch24-l2-q2",
        "question": "Analyze the composition of the Public Accounts Committee (PAC) and the Estimates Committee (EC). What fundamental difference in their composition reflects their differing scopes regarding state representation?",
        "options": ["PAC includes members from State Legislatures; EC does not.","PAC has 30 members exclusively from Lok Sabha; EC has 22 from both Houses.","PAC (22 members) includes 7 members from the Rajya Sabha reflecting the Upper House","Both contain equal numbers from Lok Sabha and Rajya Sabha."],
        "correctAnswerIndex": 2,
        "explanation": "The composition mirrors constitutional power. The Lok Sabha has exclusive power over voting on the Budget (Estimates). Thus, the committee scrutinizing those estimates (EC) is 100% from Lok Sabha. But once the money is spent, auditing the accounts (PAC) is a matter of general parliamentary oversight, hence the Rajya Sabha is included."
    },
    {
        "id": "ch24-l2-q3",
        "question": "What is the crucial, established convention regarding the Chairmanship of the Public Accounts Committee (PAC) that enhances its credibility as an independent auditor of the government?",
        "options": ["The Chairman is always a retired Supreme Court Judge.","The Chairman is appointed directly by the President.","Since 1967, by unbroken convention, the Chairman of the PAC is always a senior member selected from the Opposition, ensuring that the critical audit of the ruling party","The Chairman is always the ruling party"],
        "correctAnswerIndex": 2,
        "explanation": "If the ruling party checked its own homework, the audit would be suspect. By giving the PAC chairmanship to the opposition, Parliament ensures aggressive, motivated scrutiny of the executive"
    },
    {
        "id": "ch24-l2-q4",
        "question": "Consider the relationship between the Comptroller and Auditor General (CAG) and the Public Accounts Committee (PAC). Which of the following statements inaccurately describes their synergy?",
        "options": ["The CAG","s investigations.","The CAG sits with the PAC during its hearings to assist in questioning bureaucrats.","The PAC has the power to instruct the CAG to alter or suppress findings in the audit reports before they are presented to Parliament.","The CAG translates highly technical accounting jargon into actionable points for the politician members of the PAC."],
        "correctAnswerIndex": 2,
        "explanation": "The CAG is an independent constitutional authority (Art 148), not a subservient employee of the PAC. The PAC cannot dictate what the CAG audits or reports. The CAG acts as an independent"
    },
    {
        "id": "ch24-l2-q5",
        "question": "Differentiate between the timing and focus of the Public Accounts Committee (PAC) and the Estimates Committee (EC).",
        "options": ["PAC examines policy before the budget is passed; EC examines policy after the budget is passed.","The PAC conducts a","examination of public expenditure (how money WAS spent), while the EC examines the current budget estimates to suggest alternative policies to bring about","in future administration (how money SHOULD be spent efficiently).","PAC deals only with defense outlays; EC deals with all other ministries.","Both committees perform identical audits simultaneously to double-check the figures."],
        "correctAnswerIndex": 1,
        "explanation": "PAC = Post-mortem. The money is gone; was it spent legally? EC = Continuous economy check. Is the government"
    },
    {
        "id": "ch24-l2-q6",
        "question": "Examine a critical limitation of the Estimates Committee",
        "options": ["It cannot submit a report to the Speaker.","It cannot question the policy underlying the estimates; its mandate is limited to suggesting economies and improvements in organization *within the framework* of the policy already approved by Parliament.","It cannot call any civil servants as witnesses.","It cannot publish its findings in English."],
        "correctAnswerIndex": 1,
        "explanation": "If Parliament policy says"
    },
    {
        "id": "ch24-l2-q7",
        "question": "Regarding the",
        "options": ["COPU analyzes their accounts based on CAG reports, but specifically examines them in the context of commercial autonomy and sound business principles, expressly avoiding interference in their day-to-day administration or major government policy.","COPU is the only committee with the power to sell loss-making PSUs.","COPU replaces the Board of Directors of the PSU during the audit.","COPU has no jurisdiction over financial matters, only labor disputes."],
        "correctAnswerIndex": 0,
        "explanation": "PSUs are meant to run like businesses, not rigid government departments. COPU checks if they are commercially viable and efficient based on CAG commercial audits. But if it micro-manages day-to-day decisions (like who to hire for a specific project), it destroys the very autonomy vital for business success."
    },
    {
        "id": "ch24-l2-q8",
        "question": "What was the profound procedural shift brought about by the introduction of the",
        "options": ["It allowed the Rajya Sabha to vote on the budget.","It replaced the Finance Minister","It introduced a multi-week recess *after* the general budget discussion. During this recess, the 24 DSCs take the detailed","of all ministries offline for in-depth, closed-door scrutiny before Parliament formally votes on them, ending the era of blindly passing complex budgets.","It transferred the power of passing the budget from Parliament to the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "Before 1993, the Lok Sabha debated the Budget for a few days and then passed thousands of crores via the Guillotine without scrutiny. Now, Parliament hits"
    },
    {
        "id": "ch24-l2-q9",
        "question": "Consider the composition rule for almost all major Parliamentary Committees (like PAC, EC, COPU, and DSCs) regarding Ministers. Why is it a universally applied rule that a Minister cannot be a member of these scrutinizing committees?",
        "options": ["Because ministers are too busy running the country.","Because ministers are technically not Members of Parliament.","It enforces the core principle of accountability. Since these committees exist to scrutinize and evaluate the actions of the Executive (the Ministers and their departments), allowing a Minister to sit on the committee would be a direct conflict of interest, akin to the accused sitting on the jury.","Because the President forbids it."],
        "correctAnswerIndex": 2,
        "explanation": "The legislature checks the executive. The committees act on behalf of the legislature. If the Defense Minister sits on the Standing Committee on Defense, the committee cannot aggressively or neutrally investigate a defense procurement scandal. The separation is vital for independent oversight."
    },
    {
        "id": "ch24-l2-q10",
        "question": "Analyze the operational nature of",
        "options": ["Because cameras are allowed inside.","Because their meetings are held in closed-door, confidential sessions where members are not playing to the media gallery, allowing them to focus on technical realities and question bureaucrats objectively rather than attacking political rivals.","Because only members from the ruling party are allowed to speak.","Because they are chaired by Supreme Court judges."],
        "correctAnswerIndex": 1,
        "explanation": "Cameras and public galleries ruin nuanced debate in Parliament. In a committee room, an opposition MP and a ruling party MP often unite to grill a bureaucrat over why a road isn"
    },
    {
        "id": "ch24-l2-q11",
        "question": "Examine the",
        "options": ["It drafts all laws before they go to Parliament.","It judges unconstitutional amendments.","Parliament passes skeleton","and delegates massive power to the Executive to draft the detailed rules. This committee acts as the watchdog, ensuring the Executive does not exceed its delegated authority or bypass the spirit of the parent act while drafting these","laws.","It vetoes state laws."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament passes an IT Act saying"
    },
    {
        "id": "ch24-l2-q12",
        "question": "What is the primary function of the",
        "options": ["To provide insurance to government employees.","To ensure the government stays in power for 5 years.","To meticulously track all the promises, assurances, and undertakings given by Ministers on the floor of the House during debates or Question Hour, and report on whether they have been implemented within a reasonable time, thereby preventing ministers from making empty promises to escape immediate pressure.","To audit the Reserve Bank"],
        "correctAnswerIndex": 2,
        "explanation": "During a heated debate, a Minister might say,"
    },
    {
        "id": "ch24-l2-q13",
        "question": "Assertion (A): The recommendations of the Departmental Standing Committees (DSCs) regarding Bills are binding on the government.\\nReason (R): Because the DSCs possess the ultimate legislative veto power over any bill originating in their respective ministries.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are false. DSC recommendations are strictly"
    },
    {
        "id": "ch24-l2-q14",
        "question": "Consider the",
        "options": ["The Prime Minister.","The Minister of Parliamentary Affairs.","The Speaker of the Lok Sabha, as the ultimate authority controlling the proceedings and timetable of the House.","The Leader of the Opposition."],
        "correctAnswerIndex": 2,
        "explanation": "The BAC is the traffic controller of Parliament. Since the Speaker is the master of the House, it makes sense that the Speaker chairs the committee that decides how the precious hours of the session are divided between competing bills and motions."
    },
    {
        "id": "ch24-l2-q15",
        "question": "How does the",
        "options": ["It functions identically to a Supreme Court bench, sentencing MPs to prison.","It functions in a","capacity. It investigates the facts of the alleged breach (like a minister leaking a report or an outsider insulting the House), examines witnesses, and recommends a penalty to the House, but the final power to punish (or reprimand) rests solely with the House via a vote.","It only deals with the financial privileges of ministers.","It determines the constitutional validity of laws."],
        "correctAnswerIndex": 1,
        "explanation": "The Privileges Committee acts like an investigative grand jury. If an MP is caught taking cash for questions, the committee holds hearings. It concludes"
    },
    {
        "id": "ch24-l2-q16",
        "question": "Which parliamentary mechanism handles complaints directly from the general public regarding grievances of general public importance?",
        "options": ["The Public Accounts Committee.","The Committee on Petitions. It receives petitions on bills pending before the House or on any matter of general public interest, providing a direct link between the electorate and the Parliament.","The Rules Committee.","The Business Advisory Committee."],
        "correctAnswerIndex": 1,
        "explanation": "Citizens can directly petition Parliament regarding administrative failures or legislative gaps (e.g., poor railway safety). The Committee on Petitions investigates these, often demanding answers from the relevant ministries, acting as a crucial grievance redressal mechanism outside the executive."
    },
    {
        "id": "ch24-l2-q17",
        "question": "Differentiate between a",
        "options": ["Select committees deal with finance; Joint committees with administration.","A Select Committee is formed from members of a SINGLE House (e.g., Lok Sabha only) to scrutinize a bill originating there. A Joint Committee involves members from BOTH Houses (usually in a 2:1 ratio of LS:RS) to scrutinize a particularly important or contentious bill together.","Select Committees are permanent; Joint Committees are temporary.","Only the President can form a Joint Committee."],
        "correctAnswerIndex": 1,
        "explanation": "If a complex bill (like the Data Protection Bill or JPC on telecom scams) needs massive scrutiny before passing, it is referred to a committee."
    },
    {
        "id": "ch24-l2-q18",
        "question": "Which of the following is considered a",
        "options": ["The Estimates Committee","The Committee on Public Undertakings (COPU)","The Business Advisory Committee of the Lok Sabha","The Rules Committee of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "A joint committee has members from both houses. Both the PAC (15+7) and COPU (15+7) are technically joint committees in composition (though not always called that historically). The Estimates Committee is ONLY Lok Sabha (30). Business and Rules committees exist separately independently for each house."
    },
    {
        "id": "ch24-l2-q19",
        "question": "What specific limitation applies to the Public Accounts Committee (PAC) regarding",
        "options": ["It cannot intervene in the administration during the active execution of a project.","It cannot investigate defense expenditure.","It cannot examine the accounts of state governments.","It cannot ask questions of Class I officers."],
        "correctAnswerIndex": 0,
        "explanation": "The PAC examines the autopsy, it does not perform the surgery. It cannot tell a ministry *while they are building a bridge*,"
    },
    {
        "id": "ch24-l2-q20",
        "question": "If a member of a Parliamentary Committee leaks confidential proceedings or draft reports to the media before they are formally presented to the House, what parliamentary offense has been committed?",
        "options": ["Espionage.","Contempt of Court.","A serious Breach of Privilege. Committee proceedings are strictly confidential until presented to the House; leaking them undermines the House","Defamation."],
        "correctAnswerIndex": 2,
        "explanation": "Committees act on behalf of the House. The House is the sovereign. It is a fundamental parliamentary rule that the House must be the first to know the committee"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch24-l3-q1",
        "question": "Analyze the foundational relationship between the Comptroller and Auditor General (CAG) and the Public Accounts Committee (PAC). While the PAC is completely dependent on the CAG’s audit reports to initiate its investigations, in what scenario does the PAC legally instruct the CAG regarding its auditing duties?",
        "options": ["When the PAC demands a special audit of a defense procurement scandal, the CAG is constitutionally bound to instantly cease other audits and comply.","The PAC, as a parliamentary body, has no legal authority to issue binding instructions or mandate specific audits to the CAG; the CAG","The PAC can instruct the CAG to audit secret service funds.","The PAC chairperson signs the CAG"],
        "correctAnswerIndex": 1,
        "explanation": "This tests the separation of powers. The PAC is a committee of politicians. The CAG is an independent constitutional auditor. While they work symbiotically (CAG provides the ammunition, PAC fires it at the executive), the PAC cannot dictate the CAG"
    },
    {
        "id": "ch24-l3-q2",
        "question": "Consider the constitutional paradox of the",
        "options": ["Because the EC only examines the accounts after the financial year ends.","Because the EC is not permitted to submit its report until the next Lok Sabha is elected.","Because it examines the massive estimates continuously throughout the financial year, usually long AFTER Parliament has already voted and passed the",". Therefore, its recommendations for","can only influence the NEXT year","Because the EC"],
        "correctAnswerIndex": 2,
        "explanation": "This is the primary weakness of the EC. It has 30 members and thousands of pages of budget to review. Parliament passes the budget by May. The EC spends the whole year analyzing one or two ministries"
    },
    {
        "id": "ch24-l3-q3",
        "question": "Evaluate the jurisdictional overlap and distinction between the Estimates Committee (EC) and the Committee on Public Undertakings (COPU). If the government allocates ₹10,000 crore to recapitalize a staggering Public Sector Bank (PSU) in the annual budget, which committee has the primary mandate to scrutinize the *efficiency* of that bank",
        "options": ["The Estimates Committee, because it deals with all budgetary allocations.","The Public Accounts Committee, because it audits all government spending.","The Committee on Public Undertakings (COPU), because COPU was specifically carved out (in 1964) to exclusively handle the reports and accounts of Public Undertakings, specifically to completely remove PSUs from the purview of the PAC and the EC.","The Departmental Standing Committee on Finance."],
        "correctAnswerIndex": 2,
        "explanation": "Before 1964, PAC and EC handled PSUs. It was a mess. PSUs are commercial entities. Krishna Menon argued they need a specialized, business-minded committee. Therefore, COPU was created. Once COPU takes over a PSU (like LIC, SBI, or ONGC), the PAC and EC are strictly barred from investigating that specific entity, preventing double-jeopardy."
    },
    {
        "id": "ch24-l3-q4",
        "question": "Assertion (A): The creation of the Departmental Standing Committees (DSCs) in 1993 fundamentally diluted the power of the Estimates Committee (EC).\\nReason (R): Because the DSCs now conduct a mandatory, rapid, pre-vote scrutiny of the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. Before 1993, the EC was the only body looking at estimates, but it worked too slowly (post-facto). The DSCs revolutionized Parliament. During the budget recess, the 24 DSCs instantly analyze *all* demands while the budget is paused, creating a real-time impact. This inevitably overlapping function has reduced the EC"
    },
    {
        "id": "ch24-l3-q5",
        "question": "Analyze the",
        "options": ["The rule is instantly struck down and becomes legally void.","The Supreme Court automatically registers a suo motu case.","There is no immediate legal invalidation. The committee submits an advisory report to Parliament highlighting the executive overreach. It is then up to the House (or a citizen filing a Writ in a High Court) to actively annul or strike down the rule.","The President must dismiss the responsible Secretary."],
        "correctAnswerIndex": 2,
        "explanation": "Parliamentary Committees are investigative and advisory, not judicial. They bark, but they don"
    },
    {
        "id": "ch24-l3-q6",
        "question": "Consider the unique role of the",
        "options": ["It overlaps completely, conducting financial audits of all women-centric welfare schemes.","It has the power to veto the budgets of the PAC and EC.","It reviews the reports of the National Commission for Women and explicitly examines the measures taken by the Union Government (including reviewing the findings of PAC/EC if they pertain to women","It functions purely as a judicial tribunal for gender discrimination."],
        "correctAnswerIndex": 2,
        "explanation": "Created in 1997, it"
    },
    {
        "id": "ch24-l3-q7",
        "question": "If the government introduces a highly contentious",
        "options": ["A JPC report is legally binding on the Lok Sabha; a DSC report is not.","A JPC must include the Prime Minister; a DSC cannot.","A JPC is an","committee specifically created by a motion adopted by one House and agreed to by the other for this single bill, dissolving once its report is submitted. A DSC is a permanent","committee assigned to a specific ministry.","A JPC cannot call public witnesses; a DSC must call them."],
        "correctAnswerIndex": 2,
        "explanation": "This tests the fundamental architecture. DSCs are permanent fixtures (Standing). If a telecom bill comes, it goes to the IT DSC. But sometimes a bill is so politically radioactive (like the JPC on Bofors or the Stock Market Scams) that Parliament says"
    },
    {
        "id": "ch24-l3-q8",
        "question": "Evaluate the",
        "options": ["Because it can force ministers to resign if they give wrong answers.","Because it audits the financial expenses of running the Question Hour.","During heated debates, ministers frequently pacify angry MPs by making spontaneous promises (","or","). This committee acts as the institutional memory, systematically tracking every verbal promise logged in the parliamentary proceedings and formally hounding the Ministry until it is fulfilled, preventing the executive from using empty rhetoric as an escape hatch.","Because it writes the questions for the opposition MPs."],
        "correctAnswerIndex": 2,
        "explanation": "Accountability dies when promises are forgotten. In the chaos of Parliament, a minister"
    },
    {
        "id": "ch24-l3-q9",
        "question": "Consider the composition of the Departmental Standing Committees (DSCs) - 21 from Lok Sabha and 10 from Rajya Sabha (31 total). Why is this specific 2:1 numerical ratio universally maintained across almost all joint parliamentary committees?",
        "options": ["Because it was mandated by a Supreme Court ruling in 1993.","Because the Constitution explicitly dictates this ratio in Article 118 for all committees.","It reflects the approximate numerical strength of the two Houses of Parliament (Lok Sabha ~543, Rajya Sabha ~245). Maintaining this proportional representation ensures that the political balance of power determined by the electorate (in the Lok Sabha) dominates the committee","It ensures that opposition members always form precisely one-third of the committee."],
        "correctAnswerIndex": 2,
        "explanation": "Committees are miniature parliaments. If a committee had equal RS and LS members, the RS would possess disproportionate power relative to its size. The 2:1 ratio (roughly 545:245) ensures that if the ruling party has a massive majority in the LS but lacks numbers in the RS, that exact political arithmetic is mirrored in the vote counts within the closed committee room."
    },
    {
        "id": "ch24-l3-q10",
        "question": "Identify the critical distinction between the",
        "options": ["The BAC decides the financial budget; the Rules Committee decides the administrative budget.","The BAC manages the day-to-day timetable and agenda (how many hours to debate a specific bill today); the Rules Committee considers long-term structural amendments to the overarching","that govern how the House fundamentally operates.","The BAC is chaired by the PM; the Rules Committee by the Speaker.","Both are identical committees but for different Houses."],
        "correctAnswerIndex": 1,
        "explanation": "BAC is tactical; Rules Committee is constitutional/strategic. The BAC meets every week to say"
    },
    {
        "id": "ch24-l3-q11",
        "question": "Assertion (A): A Minister",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. If an MP is sitting on the PAC investigating a scam, and the PM suddenly makes them a Minister of State, they must instantly resign from the PAC. You cannot be the audited (Executive) and the auditor (Legislature) simultaneously."
    },
    {
        "id": "ch24-l3-q12",
        "question": "Evaluate the role of the",
        "options": ["Petitions must be accompanied by a ₹10,000 filing fee.","Petitions can only be submitted by state Chief Ministers.","A petition must be presented or physically introduced exclusively by an elected Member of Parliament in the House, ensuring an initial level of political filtering and","before the committee takes cognizance of the grievance.","The Supreme Court must pre-approve the petition."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike filing an RTI or a court case, you cannot directly mail a petition to the Lok Sabha Secretariat and demand action. You must convince an MP that your cause (e.g., protesting a new railway alignment) has merit. The MP then stands in the House and formally"
    },
    {
        "id": "ch24-l3-q13",
        "question": "In the context of the",
        "options": ["The committee can only impose a financial fine up to ₹1000.","The committee requires the President","A civil court judges based on codified IPC laws of defamation. The Privileges Committee judges based on uncodified, historically derived",". If it finds the article impedes the dignity of the House, it acts both as investigator and recommender of penal action (like summoning the editor to the bar of the House for a reprimand or even imprisonment).","The committee has no jurisdiction over non-members (outsiders)."],
        "correctAnswerIndex": 2,
        "explanation": "This is the terrifying (to journalists) power of Parliamentary Privilege. Parliament has its own quasi-judicial power. If an editor insults the House, the Privileges Committee summons them. If found guilty of"
    },
    {
        "id": "ch24-l3-q14",
        "question": "Consider the",
        "options": ["Because Private Members cannot introduce bills in the Rajya Sabha.","Because the Vice-President single-handedly decides the agenda.","In the Lok Sabha, this specific committee classifies Private Bills (A or B based on importance) and allocates debate time. In the Rajya Sabha, this identical functional role is subsumed and performed by the more general","of the Rajya Sabha.","Because Private Members"],
        "correctAnswerIndex": 2,
        "explanation": "A structural quirk. The Lok Sabha has a dedicated committee (15 members, usually chaired by the Deputy Speaker) to handle the flood of Private Members"
    },
    {
        "id": "ch24-l3-q15",
        "question": "What is the primary objective of the",
        "options": ["To draft general statements of foreign policy.","To audit the general administrative expenses of the Prime Minister","It functions as a residual","advisory body for the Presiding Officer. It considers and advises on matters concerning the affairs of the House that do not specifically fall within the jurisdiction of any other parliamentary committee.","To manage the general elections of the Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "Parliamentary rules cannot predict everything. If a strange issue arises—like updating the security protocols for the Parliament building, or providing iPads to MPs—it doesn"
    },
    {
        "id": "ch24-l3-q16",
        "question": "Analyze the",
        "options": ["It must translate the entire report into all 22 scheduled languages.","It must debate the policy merits of the regulatory body on the floor.","It investigates the procedural compliance: Was there an unreasonable delay in laying the report? If so, is the Minister","It audits the financial accounts included in the report."],
        "correctAnswerIndex": 2,
        "explanation": "Statutes require the government to deposit ("
    },
    {
        "id": "ch24-l3-q17",
        "question": "Which feature of the",
        "options": ["DSCs are broadcast live on national television to embarrass the government.","DSCs only interact with the Prime Minister, never the bureaucrats.","While Question Hour involves aggressive, highly-politicized questioning of MINISTERS on the floor, DSCs hold closed-door, highly technical interrogations of the top BUREAUCRATS (Secretaries) of the ministries, focusing on administrative realities rather than political rhetoric.","DSCs have the power to arrest bureaucrats."],
        "correctAnswerIndex": 2,
        "explanation": "Question Hour is political theater. The Minister gives a pre-written answer. In a DSC room, the Minister usually isn"
    },
    {
        "id": "ch24-l3-q18",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is the classic definition of PAC"
    },
    {
        "id": "ch24-l3-q19",
        "question": "How does the",
        "options": ["It has the direct legal power to expel an MP.","It approves holidays for the Speaker.","Article 101(4) states the House may declare a seat vacant if an MP is absent for 60 unpermitted days. This committee manages that process by examining applications for leave of absence from members and recommending to the House whether the leave should be granted, thus stalling the 60-day constitutional clock.","It manages the pensions of retired MPs."],
        "correctAnswerIndex": 2,
        "explanation": "If you don"
    },
    {
        "id": "ch24-l3-q20",
        "question": "Summarize the overarching democratic intent behind establishing the complex network of",
        "options": ["To provide extra salaries and allowances to MPs.","To weaken the power of the Prime Minister","To transition the Indian Parliament from a mere","that rubber-stamps executive decisions, into a","that utilizes continuous, specialized, and non-partisan micro-scrutiny to assert sustained democratic control over an increasingly complex and dominant bureaucratic executive.","To replace the Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "The"
    }
];

export const CHAPTER_24_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
