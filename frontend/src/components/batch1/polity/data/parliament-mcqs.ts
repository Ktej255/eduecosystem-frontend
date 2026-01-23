import { MCQ } from './mcq-utils';

export const PARLIAMENT_MCQS: MCQ[] = [
    // Topic 1: Organisation & Composition
    {
        id: '22.1.1.1_1',
        subtopicId: '22.1.1.1',
        question: 'According to the Constitution of India, which of the following statements regarding the composition of the Rajya Sabha is incorrect?',
        options: [
            'The maximum strength of the Rajya Sabha is fixed at 250.',
            'The representatives of states in the Rajya Sabha are elected by the elected members of state legislative assemblies.',
            'The Fourth Schedule of the Constitution deals with the allocation of seats in the Rajya Sabha to the states and union territories.',
            'All union territories have representation in the Rajya Sabha as per the allocation of seats based on population.'
        ],
        correctIndex: 3,
        explanation: 'Not all UTs are represented; the text states: "Out of the eight union territories, only three... have representation in Rajya Sabha."',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.1.1_2',
        subtopicId: '22.1.1.1',
        question: 'With reference to the nomination of members to the Rajya Sabha, consider the following statements: 1. The President nominates 12 members. 2. The American Senate has no nominated members. 3. The nominated members must have special knowledge in art, literature, science, and social service.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'All three statements are explicitly found in the text.',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.2_1',
        subtopicId: '22.1.2',
        question: 'Consider the following statements regarding the System of Elections to the Lok Sabha: 1. The Constitution has adopted proportional representation. 2. The 61st Amendment reduced voting age to 18. 3. The 87th Amendment provided for delimitation based on 2001 census.',
        options: [
            '1 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 1,
        explanation: 'Statement 1 is incorrect; the Constitution adopted "Territorial Representation" for Lok Sabha, not proportional.',
        difficulty: 'Moderate'
    },

    // Topic 2: Duration
    {
        id: '22.1.3.1_1',
        subtopicId: '22.1.3.1',
        question: 'Which of the following statements is true regarding the term of office for members of the Rajya Sabha?',
        options: [
            'The Constitution fixes the term of office as six years.',
            'The Constitution has not fixed the term of office; it was left to the Parliament to determine.',
            'One-third of its members retire every year.',
            'Retiring members are not eligible for re-nomination.'
        ],
        correctIndex: 1,
        explanation: 'The text explicitly says: "The Constitution has not fixed the term of office... and left it to the Parliament."',
        difficulty: 'Tough'
    },
    {
        id: '22.1.3.2_1',
        subtopicId: '22.1.3.2',
        question: 'With respect to the duration of the Lok Sabha: 1. President can dissolve it anytime. 2. Term can be extended during emergency for one year at a time. 3. Extension cannot continue beyond six months after emergency ceases.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'All statements are correct as per the "Duration of Lok Sabha" section.',
        difficulty: 'Moderate'
    },

    // Topic 3: Membership
    {
        id: '22.1.4.2_1',
        subtopicId: '22.1.4.2',
        question: 'Who is the final authority to decide whether a member of Parliament has become subject to any of the disqualifications (other than defection)?',
        options: [
            'The Speaker of the Lok Sabha',
            'The President of India, according to the opinion of the Election Commission',
            'The Supreme Court of India',
            'The President of India, according to the opinion of the Supreme Court'
        ],
        correctIndex: 1,
        explanation: 'The President\'s decision is final, but he "should obtain the opinion of the election commission and act accordingly".',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.4.2_2',
        subtopicId: '22.1.4.2',
        question: 'A person shall be disqualified if he holds any \'office of profit\'. Which is an exception explicitly stated in the text?',
        options: [
            'Office of a Minister',
            'Office of the Mayor',
            'Chairman of a public trust',
            'Director of a private company'
        ],
        correctIndex: 0,
        explanation: 'The text lists disqualifications but notes: "except that of a minister or any other office exempted by Parliament".',
        difficulty: 'Easy'
    },
    {
        id: '22.1.4.3_1',
        subtopicId: '22.1.4.3',
        question: 'Regarding vacating seats due to Double Membership, which is legally correct?',
        options: [
            'If elected to both Houses, Lok Sabha seat becomes vacant if choice not intimated in 10 days.',
            'If a sitting member of one House is elected to the other, his seat in the first House becomes vacant.',
            'If elected to two seats in a House, he can retain both.',
            'If elected to both Parliament and State Legislature, State seat becomes vacant if he does not resign Parliament within 14 days.'
        ],
        correctIndex: 1,
        explanation: 'Statement A is wrong; Rajya Sabha seat becomes vacant. Statement D is wrong; Parliament seat becomes vacant.',
        difficulty: 'Tough'
    },

    // Topic 4: Presiding Officers
    {
        id: '22.2.1.2_1',
        subtopicId: '22.2.1.2',
        question: 'Regarding removal of Speaker of Lok Sabha: 1. Removed by resolution passed by majority of all then members. 2. Requires 14 days notice. 3. Speaker can vote in the first instance.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'The text confirms effective majority, 14 days notice, and the right to vote in the first instance.',
        difficulty: 'Moderate'
    },
    {
        id: '22.2.1.3_1',
        subtopicId: '22.2.1.3',
        question: 'Which statement accurately describes the independence of the Speaker\'s office?',
        options: [
            'Salaries are subject to annual vote.',
            'Removed by simple majority.',
            'Conduct cannot be discussed except on substantive motion.',
            'Has a casting vote in every instance.'
        ],
        correctIndex: 2,
        explanation: 'Salaries are charged (not voted), removal requires effective majority, casting vote is only for ties.',
        difficulty: 'Easy'
    },

    // Topic 5: Leaders
    {
        id: '22.3.3_1',
        subtopicId: '22.3.3',
        question: 'Regarding the office of the \'Whip\', which statement is derived directly from the text?',
        options: [
            'Mentioned in Rules of Procedure.',
            'Established by Parliamentary Statute of 1952.',
            'Based neither on Constitution nor Rules, but on conventions.',
            'Cannot be disqualified for defying whip if Speaker permits.'
        ],
        correctIndex: 2,
        explanation: 'The Whip is mentioned neither in the Constitution, nor Rules, nor Statute, but is based on conventions.',
        difficulty: 'Moderate'
    },

    // Topic 6: Sessions
    {
        id: '22.4.2_1',
        subtopicId: '22.4.2',
        question: 'Compare Adjournment and Prorogation: 1. Adjournment terminates sitting not session. 2. Prorogation terminates both. 3. Adjournment done by President. 4. Prorogation does not affect pending business. Correct statements?',
        options: [
            '1, 2, and 4 only',
            '1 and 2 only',
            '2, 3, and 4 only',
            '1, 3, and 4 only'
        ],
        correctIndex: 0,
        explanation: 'Statement 3 is incorrect; Adjournment is done by presiding officer, Prorogation by President.',
        difficulty: 'Moderate'
    },
    {
        id: '22.4.5_1',
        subtopicId: '22.4.5',
        question: 'Which of the following bills does not lapse on dissolution of Lok Sabha?',
        options: [
            'Bill passed by LS pending in RS.',
            'Bill not passed by two Houses if President notified joint sitting before dissolution.',
            'Bill pending in LS.',
            'Bill passed by both Houses returned by President.'
        ],
        correctIndex: 1,
        explanation: 'A bill does not lapse if the President has notified a joint sitting before dissolution.',
        difficulty: 'Moderate'
    },
    {
        id: '22.4.6_1',
        subtopicId: '22.4.6',
        question: 'What constitutes a \'Quorum\'?',
        options: [
            'One-tenth excluding Presiding Officer.',
            'One-tenth including Presiding Officer.',
            '50 in LS and 25 in RS.',
            'One-third of members present.'
        ],
        correctIndex: 1,
        explanation: 'The Constitution fixes quorum as one-tenth of total membership, including the presiding officer.',
        difficulty: 'Easy'
    },

    // Topic 7: Devices
    {
        id: '22.5.1_1',
        subtopicId: '22.5.1',
        question: 'Regarding Question Hour: 1. Starred requires oral answer + supplementaries. 2. Unstarred requires written answer + no supplementaries. 3. Short Notice is <10 days + oral.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'All definitions provided are strictly accurate as per the "Question Hour" section.',
        difficulty: 'Easy'
    },
    {
        id: '22.5.2_1',
        subtopicId: '22.5.2',
        question: 'Which statement correctly describes \'Zero Hour\'?',
        options: [
            'Mentioned in Rules of Procedure.',
            'Starts after Question Hour, lasts until agenda taken up.',
            'Available only to Ministers.',
            'Introduced in 1952.'
        ],
        correctIndex: 1,
        explanation: 'Zero Hour is an Indian innovation from 1962, not in Rules, and fills the gap between Question Hour and the agenda.',
        difficulty: 'Easy'
    },
    {
        id: '22.5.3_1',
        subtopicId: '22.5.3',
        question: 'Which motion needs support of 50 members and draws attention to urgent public importance?',
        options: [
            'Privilege Motion',
            'Calling Attention Motion',
            'Adjournment Motion',
            'Censure Motion'
        ],
        correctIndex: 2,
        explanation: 'Adjournment Motion. Calling Attention Motion does not require the support of 50 members.',
        difficulty: 'Moderate'
    },
    {
        id: '22.5.3_2',
        subtopicId: '22.5.3',
        question: 'Censure vs No-Confidence: 1. Censure need not state ground, No-Confidence must. 2. Censure against individual, No-Confidence against entire Council. 3. Censure passed = Council need not resign.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 1,
        explanation: 'Statement 1 is reversed; Censure motion must state the grounds, whereas No-Confidence motion need not state grounds.',
        difficulty: 'Moderate'
    },

    // Topic 8: Legislative Procedure
    {
        id: '22.6.1.2_1',
        subtopicId: '22.6.1.2',
        question: 'At which stage does "clause-by-clause consideration" take place?',
        options: [
            'First Reading',
            'Stage of General Discussion',
            'Committee Stage',
            'Consideration Stage'
        ],
        correctIndex: 3,
        explanation: 'Clause-by-clause discussion and voting happen during the Consideration Stage of the Second Reading.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.2_1',
        subtopicId: '22.6.2',
        question: 'Regarding Money Bills, which is strictly INCORRECT?',
        options: [
            'Introduced only in Lok Sabha on President recommendation.',
            'Rajya Sabha cannot reject or amend.',
            'Deemed passed if RS holds for >14 days.',
            'President can return for reconsideration.'
        ],
        correctIndex: 3,
        explanation: 'The President cannot return a Money Bill for reconsideration. He can only give assent or withhold assent.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.4_1',
        subtopicId: '22.6.4',
        question: 'Who presides over a Joint Sitting in absence of Speaker and Deputy Speaker?',
        options: [
            'Chairman of Rajya Sabha',
            'Deputy Chairman of Rajya Sabha',
            'Member nominated by President',
            'Leader of the House'
        ],
        correctIndex: 1,
        explanation: 'If Speaker and Deputy Speaker are absent, the Deputy Chairman presides. The Chairman of Rajya Sabha never presides over a joint sitting.',
        difficulty: 'Moderate'
    },

    // Topic 9: Budget
    {
        id: '22.7.3_1',
        subtopicId: '22.7.3',
        question: 'Correct order of budget enactment stages:',
        options: [
            'Presentation -> General Discussion -> Voting -> Scrutiny -> Approp -> Finance',
            'Presentation -> General Discussion -> Scrutiny by Committees -> Voting -> Approp -> Finance',
            'Presentation -> Scrutiny -> General Discussion -> Voting -> Finance -> Approp',
            'Presentation -> General Discussion -> Scrutiny -> Voting -> Finance -> Approp'
        ],
        correctIndex: 1,
        explanation: 'The correct order is: Presentation -> General Discussion -> Scrutiny by Departmental Committees -> Voting on Demands for Grants -> Passing of Appropriation Bill -> Passing of Finance Bill.',
        difficulty: 'Moderate'
    },
    {
        id: '22.7.4_1',
        subtopicId: '22.7.4',
        question: 'Match Grants: 1. Special purpose outside current service 2. Spent in excess 3. Unexpected demand/blank cheque',
        options: [
            '1-Exceptional, 2-Excess, 3-Vote of Credit',
            '1-Vote of Credit, 2-Excess, 3-Exceptional',
            '1-Exceptional, 2-Vote of Credit, 3-Excess',
            '1-Excess, 2-Exceptional, 3-Vote of Credit'
        ],
        correctIndex: 0,
        explanation: 'Vote of Credit = blank cheque; Exceptional Grant = special purpose; Excess Grant = spent in excess.',
        difficulty: 'Moderate'
    },
    {
        id: '22.7.3_2',
        subtopicId: '22.7.3',
        question: 'Cut Motions: 1. Policy Cut = Re 1 (Disapproval). 2. Economy Cut = Specified Amount. 3. Token Cut = Rs 100.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'All definitions are strictly correct.',
        difficulty: 'Easy'
    },
    {
        id: '22.7.3_3',
        subtopicId: '22.7.3',
        question: 'Which statement regarding Appropriation Bill is correct?',
        options: [
            'No amendment varying amount/destination of grant allowed.',
            'Becomes Act after passing LS only.',
            'Vote on account passed after Appropriation Bill.',
            'Authorizes expenditure from Contingency Fund.'
        ],
        correctIndex: 0,
        explanation: 'No amendment can be proposed which will have the effect of varying the amount or altering the destination of any grant.',
        difficulty: 'Moderate'
    },

    // Topic 10: Rajya Sabha
    {
        id: '22.10.2_1',
        subtopicId: '22.10.2',
        question: 'Rajya Sabha has Unequal Status with Lok Sabha in: 1. Money Bills 2. Approval of Ordinances 3. Voting on Demands 4. Removal of Council of Ministers',
        options: [
            '1 and 4 only',
            '1, 3, and 4 only',
            '2 and 3 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 1,
        explanation: 'Approval of ordinances requires assent of both Houses (Equal status). In Money Bills, Voting on Grants, and No-Confidence, RS is unequal.',
        difficulty: 'Moderate'
    },
    {
        id: '22.10.3_1',
        subtopicId: '22.10.3',
        question: 'Special Powers of Rajya Sabha: 1. Authorize State List law (Art 249). 2. Create All-India Services (Art 312). 3. Initiate removal of Vice-President.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'All three are special powers exclusive to Rajya Sabha.',
        difficulty: 'Easy'
    },

    // Topic 11: Privileges
    {
        id: '22.11.1_1',
        subtopicId: '22.11.1',
        question: 'Which falls under \'Collective Privileges\'? 1. Publication rights. 2. Exclude strangers. 3. Freedom from arrest. 4. Punish for breach.',
        options: [
            '1, 2, and 3 only',
            '1, 2, and 4 only',
            '2, 3, and 4 only',
            '1, 3, and 4 only'
        ],
        correctIndex: 1,
        explanation: 'Freedom from arrest is an Individual Privilege, not Collective.',
        difficulty: 'Moderate'
    },
    {
        id: '22.11.2_1',
        subtopicId: '22.11.2',
        question: 'Regarding Individual Privilege of freedom from arrest: 1. Applies 40 days before/after session. 2. Applies to civil, criminal, and preventive detention. 3. Exempt from jury service.',
        options: [
            '1 only',
            '1 and 3 only',
            '2 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 1,
        explanation: 'Privilege applies only to civil cases, NOT criminal or preventive detention.',
        difficulty: 'Moderate'
    },

    // Topic 12: Sovereignty
    {
        id: '22.12.2_1',
        subtopicId: '22.12.2',
        question: 'Factors limiting sovereignty of Indian Parliament: 1. Written Constitution. 2. Federal System. 3. Judicial Review. 4. Fundamental Rights.',
        options: [
            '1 and 3 only',
            '2 and 4 only',
            '1, 2, and 3 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All four factors limit the sovereignty of the Indian Parliament.',
        difficulty: 'Easy'
    },

    // Advanced / Specific Topics
    {
        id: '22.6.3_1',
        subtopicId: '22.6.3',
        question: 'Financial Bill (I) vs (II): 1. FB(I) has Art 110 + others. 2. FB(II) expenditure from Consolidated Fund but NO Art 110 matters. 3. Both introduced only in LS. 4. Joint sitting allowed for both.',
        options: [
            '1, 2, and 4 only',
            '1 and 2 only',
            '2, 3, and 4 only',
            '1, 3, and 4 only'
        ],
        correctIndex: 0,
        explanation: 'Statement 3 incorrect. FB(II) can be introduced in either House.',
        difficulty: 'Tough'
    },
    {
        id: '22.5.3_3',
        subtopicId: '22.5.3',
        question: 'Closure Motions: 1. Simple (sufficiently discussed). 2. Compartments (grouped). 3. Kangaroo (skip to important). 4. Guillotine (undiscussed voted).',
        options: [
            '1-d, 2-c, 3-a, 4-b',
            '1-d, 2-b, 3-a, 4-c',
            '1-c, 2-a, 3-b, 4-d',
            '1-b, 2-c, 3-d, 4-a'
        ],
        correctIndex: 0,
        explanation: 'Matching descriptions are correct in Option A.',
        difficulty: 'Moderate'
    },
    {
        id: '22.5.9_1',
        subtopicId: '22.5.9',
        question: 'Youth Parliament: Incorrect statement?',
        options: [
            'Started on recommendation of Whips Conference.',
            'Acquaint youth with procedures.',
            'Ministry of Parliamentary Affairs provides training.',
            'Statutory body established by Act of 1992.'
        ],
        correctIndex: 3,
        explanation: 'It is not a statutory body; it is a scheme.',
        difficulty: 'Easy'
    },
    {
        id: '22.5.3_4',
        subtopicId: '22.5.3',
        question: 'Substantive vs Substitute Motion: 1. Substantive is self-contained (e.g. Impeachment). 2. Substitute replaces original. 3. Substitute supersedes original.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'All definitions correct.',
        difficulty: 'Moderate'
    },
    {
        id: '22.9_1',
        subtopicId: '22.9',
        question: 'Which is NOT a factor for ineffectiveness of parliamentary control?',
        options: [
            'Delegated legislation.',
            'Frequent use of guillotine.',
            'Increased size of Parliament.',
            'Lack of strong opposition.'
        ],
        correctIndex: 2,
        explanation: 'Increased size is not listed as a factor. Time, technical nature, delegated legislation, guillotine are.',
        difficulty: 'Easy'
    },
    {
        id: '22.9_2',
        subtopicId: '22.9',
        question: 'Definition of Delegated Legislation:',
        options: [
            'Laws by State Legislatures on Concurrent list.',
            'Executive rules without approval.',
            'Detailed rules by Executive within framework of parent law.',
            'Emergency legislation.'
        ],
        correctIndex: 2,
        explanation: 'Detailed rules made by Executive within framework of parent law.',
        difficulty: 'Easy'
    },
    {
        id: '22.5.3_5',
        subtopicId: '22.5.3',
        question: 'Adjournment Motion restrictions. Cannot be moved if: 1. >1 matter. 2. Privilege question. 3. Sub-judice. 4. Revives discussion.',
        options: [
            '1, 2, and 3 only',
            '2, 3, and 4 only',
            '1 and 4 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All are valid restrictions.',
        difficulty: 'Moderate'
    },
    {
        id: '22.6.1_1',
        subtopicId: '22.6.1',
        question: 'Public vs Private Bill incorrect statement:',
        options: [
            'Public by Minister, Private by Member.',
            'Public reflects govt policies, Private reflects opposition stand.',
            'Public 7 days notice, Private 1 month.',
            'Public defeat = resignation, Private defeat = no implication.'
        ],
        correctIndex: 1,
        explanation: 'Private bill reflects opposition stand generally, but can be introduced by ruling party MP. However, this is the best choice among options as others are strict rules.',
        difficulty: 'Moderate'
    },
    {
        id: '22.5.8_1',
        subtopicId: '22.5.8',
        question: 'Resolutions: 1. All are substantive motions. 2. Every resolution is motion, not all motions resolutions. 3. Statutory Resolution only by Minister.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 0,
        explanation: 'Statutory Resolution can be moved by private member also.',
        difficulty: 'Moderate'
    },
    {
        id: '22.5.3_6',
        subtopicId: '22.5.3',
        question: 'Motion of Thanks: Correct statement?',
        options: [
            'Thanks Speaker.',
            'Follows President address at first session of every year.',
            'Must be passed or govt defeated.',
            'Not open to amendments.'
        ],
        correctIndex: 2,
        explanation: 'Defeat of Motion of Thanks amounts to defeat of government.',
        difficulty: 'Moderate'
    },
    {
        id: '22.5.3_7',
        subtopicId: '22.5.3',
        question: 'Dilatory Motion purpose:',
        options: [
            'Demand detailed discussion.',
            'Delay progress of business.',
            'Cut short debate.',
            'Supersede original.'
        ],
        correctIndex: 1,
        explanation: 'Intended to retard or delay progress.',
        difficulty: 'Easy'
    },
    {
        id: '22.2.4_1',
        subtopicId: '22.2.4',
        question: 'Speaker Pro Tem: 1. Last Speaker vacates before first meeting. 2. President appoints senior-most. 3. President administers oath. 4. Temporary office.',
        options: [
            '1, 2, and 3 only',
            '2, 3, and 4 only',
            '1, 3, and 4 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All statements correct.',
        difficulty: 'Easy'
    },
    {
        id: '22.2.3_1',
        subtopicId: '22.2.3',
        question: 'Difference between Panel of Chairpersons (LS) and Vice-Chairpersons (RS)?',
        options: [
            'Chairpersons nominated, Vice-Chairpersons elected.',
            'Chairpersons cannot preside if office vacant.',
            'No difference.',
            'Different numbers.'
        ],
        correctIndex: 1,
        explanation: 'Crucial: Panel members cannot preside if the office is vacant (resignation/death). Only if absent.',
        difficulty: 'Tough'
    },
    {
        id: '22.7.5_1',
        subtopicId: '22.7.5',
        question: 'Match Funds: 1. Consolidated 2. Public Account 3. Contingency',
        options: [
            '1-c, 2-b, 3-a',
            '1-c, 2-a, 3-b',
            '1-b, 2-c, 3-a',
            '1-a, 2-b, 3-c'
        ],
        correctIndex: 0,
        explanation: 'Consolidated=Law needed (c); Public Account=Executive action (b); Contingency=President disposal (a).',
        difficulty: 'Moderate'
    },
    {
        id: '22.4.9_1',
        subtopicId: '22.4.9',
        question: 'Rights of Ministers & Attorney General:',
        options: [
            'Right to speak in either House.',
            'Entitled to vote in House they are not member of.',
            'AG can be committee member, Minister cannot if not MP.',
            'Minister from RS can vote only in LS.'
        ],
        correctIndex: 0,
        explanation: 'Both have right to speak/participate in either House. Neither can vote in house they don\'t belong to.',
        difficulty: 'Easy'
    },
    {
        id: '22.4.8_1',
        subtopicId: '22.4.8',
        question: 'Language in Parliament: 1. Hindi/English. 2. Presiding officer can permit mother tongue. 3. English continued by 1963 Act.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 3,
        explanation: 'All statements correct.',
        difficulty: 'Easy'
    },
    {
        id: '22.1.4.4_1',
        subtopicId: '22.1.4.4',
        question: 'Penalty of Rs 500/day for sitting/voting applies EXCEPT when?',
        options: [
            'Before oath.',
            'Known disqualification.',
            'Prohibited by law.',
            'Defying whip.'
        ],
        correctIndex: 3,
        explanation: 'Defying whip leads to disqualification (10th sched), but not the specific Rs 500 constitutionally prescribed penalty definition.',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.4.3_2',
        subtopicId: '22.1.4.3',
        question: 'Resignation acceptance: 1. Effective immediately. 2. Bound to accept. 3. Can refuse if not voluntary/genuine. 4. Needs Leader countersign.',
        options: [
            '1', '2', '3', '4'
        ],
        correctIndex: 2,
        explanation: 'Speaker/Chairman can refuse if satisfied it is not voluntary/genuine.',
        difficulty: 'Moderate'
    },
    {
        id: '22.4.5_2',
        subtopicId: '22.4.5',
        question: 'Lapsing of Bills: Which one lapses?',
        options: [
            'Passed by both, pending assent.',
            'Returned by President.',
            'Pending in RS, not passed by LS.',
            'Passed by LS, pending in RS.'
        ],
        correctIndex: 3,
        explanation: 'Passed by LS and pending in RS lapses. Others do not.',
        difficulty: 'Moderate'
    },
    {
        id: '22.6.4_2',
        subtopicId: '22.6.4',
        question: 'Joint Sitting Procedure: 1. Governed by LS Rules. 2. Quorum 1/10th of joint members. 3. Chairman RS presides if Speaker absent.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 0,
        explanation: 'Chairman RS NEVER presides. Deputy Chairman presides if Speaker/Deputy Speaker absent.',
        difficulty: 'Moderate'
    },
    {
        id: '22.2.1.3_2',
        subtopicId: '22.2.1.3',
        question: 'Speaker Independence specific provisions: 1. Conduct not discussed. 2. High precedence (7th). 3. Salary fixed by President.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 0,
        explanation: 'Salary fixed by Parliament, not President.',
        difficulty: 'Moderate'
    },
    {
        id: '22.2.8_1',
        subtopicId: '22.2.8',
        question: 'Secretariat of Parliament correct statement:',
        options: [
            'Separate staff, no common posts.',
            'Regulated by President.',
            'Headed by Secretary-General (permanent).',
            'Appointed by President.'
        ],
        correctIndex: 2,
        explanation: 'Headed by Secretary-General. Presiding officer appoints, Parliament regulates.',
        difficulty: 'Moderate'
    },
    {
        id: '22.3.2_1',
        subtopicId: '22.3.2',
        question: 'Leader of Opposition: 1. Statutory recognition 1977. 2. Salary = Cabinet Minister. 3. Mentioned in Constitution.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1 and 3 only',
            '1, 2, and 3'
        ],
        correctIndex: 0,
        explanation: 'Not mentioned in Constitution.',
        difficulty: 'Easy'
    },
    {
        id: '22.7.2_1',
        subtopicId: '22.7.2',
        question: 'Charged Expenditure does NOT include:',
        options: [
            'Salaries Chairman RS.',
            'Salaries High Court Judges.',
            'Pensions High Court Judges.',
            'Debt charges.'
        ],
        correctIndex: 1,
        explanation: 'HC Judges salaries = State Consolidated Fund. Pensions = Centre Consolidated Fund.',
        difficulty: 'Tough'
    },
    {
        id: '22.7.3_4',
        subtopicId: '22.7.3',
        question: 'Voting on Demands for Grants:',
        options: [
            'Presented to both Houses.',
            'Exclusive privilege of Lok Sabha.',
            'Voted after Appropriation Bill.',
            'Motion to increase allowed.'
        ],
        correctIndex: 1,
        explanation: 'Exclusive to LS. Cannot increase amount.',
        difficulty: 'Easy'
    },
    {
        id: '22.5.4_1',
        subtopicId: '22.5.4',
        question: 'Point of Order: 1. Procedural breach. 2. Interpretation of Rules. 3. Suspends proceedings. 4. Extraordinary device.',
        options: [
            '1 and 2 only',
            '2, 3, and 4 only',
            '1, 2, and 4 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All Correct.',
        difficulty: 'Moderate'
    },
    {
        id: '22.5.7_1',
        subtopicId: '22.5.7',
        question: 'Special Mention in Rajya Sabha:',
        options: [
            'Equivalent to Zero Hour.',
            'Raise matters not points of order/questions.',
            'Motion of thanks.',
            'Ministers only.'
        ],
        correctIndex: 1,
        explanation: 'Equivalent to Rule 377 in LS.',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.4.2_3',
        subtopicId: '22.1.4.2',
        question: '10th Sched Independent Member disqualified if:',
        options: [
            'Joins any party.',
            'Votes against direction.',
            'Absent 60 days.',
            'Appointed Minister.'
        ],
        correctIndex: 0,
        explanation: 'Independent joins any party = disqualified.',
        difficulty: 'Easy'
    },
    {
        id: '22.1.4.2_4',
        subtopicId: '22.1.4.2',
        question: 'Nominated Member disqualified if joins party:',
        options: [
            'Immediately.',
            'After 6 months.',
            'Any time.',
            'Only opposition.'
        ],
        correctIndex: 1,
        explanation: 'Grace period of 6 months.',
        difficulty: 'Easy'
    },
    {
        id: '22.2.6_1',
        subtopicId: '22.2.6',
        question: 'Removal of Deputy Chairman RS requires:',
        options: [
            'Simple majority present.',
            'Effective Majority (all then members).',
            'Special majority 2/3.',
            'Total membership majority.'
        ],
        correctIndex: 1,
        explanation: 'Effective majority.',
        difficulty: 'Moderate'
    },
    {
        id: '22.12.1_1',
        subtopicId: '22.12.1',
        question: 'Difference India vs British: 1. Elected vs Hereditary Head. 2. Sovereign vs Not Sovereign Parliament. 3. PM Lower House only (UK) vs Either (India). 4. Minister must be MP (UK) vs 6 months (India).',
        options: [
            '1, 2, and 3 only',
            '2, 3, and 4 only',
            '1 and 4 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All are differences.',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.2.2_1',
        subtopicId: '22.1.2.2',
        question: 'Readjustment (Art 82): 1. Parliament determines authority. 2. 42nd Amd froze seats till 2000. 3. 84th Amd extended to 2026. 4. 87th Amd used 2001 census.',
        options: [
            '1, 2, and 3 only',
            '2, 3, and 4 only',
            '1, 3, and 4 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All correct.',
        difficulty: 'Tough'
    },
    {
        id: '22.1.2.1_1',
        subtopicId: '22.1.2.1',
        question: 'Why Territorial Representation vs Proportional?',
        options: [
            'PR complex/illiterate voters + creates instability.',
            'PR unsuited to parliamentary.',
            'Connection voter-rep.',
            'All of above.'
        ],
        correctIndex: 0,
        explanation: 'Primary reasons: Complexity and Instability.',
        difficulty: 'Moderate'
    },
    {
        id: '22.8.5_1',
        subtopicId: '22.8.5',
        question: 'Judicial Functions of Parliament include: 1. Impeach President. 2. Remove VP. 3. Remove Judges. 4. Punish contempt.',
        options: [
            '1, 2, and 3 only',
            '2, 3, and 4 only',
            '1 and 4 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All are judicial functions.',
        difficulty: 'Easy'
    },
    {
        id: '22.8.6_1',
        subtopicId: '22.8.6',
        question: 'Electoral Functions: 1. President. 2. VP. 3. Speaker/Dy Speaker. 4. Dy Chairman.',
        options: [
            '1 and 2 only',
            '2 and 3 only',
            '1, 2, and 3 only',
            '1, 2, 3, and 4'
        ],
        correctIndex: 3,
        explanation: 'All are electoral functions.',
        difficulty: 'Easy'
    },
    {
        id: '22.11.4_1',
        subtopicId: '22.11.4',
        question: 'Sources of Privileges: 1. Constitution. 2. Statutes. 3. Rules. 4. Conventions. 5. Judicial Interp.',
        options: [
            '1, 2, 3, 4',
            '2, 3, 4, 5',
            '1, 3, 5',
            '1, 2, 3, 4, 5'
        ],
        correctIndex: 3,
        explanation: 'All 5 are sources.',
        difficulty: 'Moderate'
    },
    {
        id: '22.6.1.2_2',
        subtopicId: '22.6.1.2',
        question: 'Second Reading Committee Stage involves:',
        options: [
            'General discussion.',
            'Clause-by-clause by House.',
            'Thorough exam by Select/Joint Committee.',
            'Voting.'
        ],
        correctIndex: 2,
        explanation: 'Committee stage = detailed exam by committee.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.1.4_1',
        subtopicId: '22.6.1.4',
        question: 'Options for Second House: 1. Pass no amd. 2. Pass with amd. 3. Reject. 4. Keep pending.',
        options: [
            '1, 2, 3',
            '2, 3, 4',
            '1, 4',
            '1, 2, 3, 4'
        ],
        correctIndex: 3,
        explanation: 'All options available.',
        difficulty: 'Easy'
    },
    {
        id: '22.1.4.3_3',
        subtopicId: '22.1.4.3',
        question: 'Double Membership (RPA 1951): Elected to both, fail to intimate in 10 days?',
        options: [
            'LS vacant.',
            'RS vacant.',
            'Both vacant.',
            'Disqualified.'
        ],
        correctIndex: 1,
        explanation: 'RS seat becomes vacant.',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.4.3_4',
        subtopicId: '22.1.4.3',
        question: 'Sitting LS member elected to RS?',
        options: [
            'Retain 14 days.',
            'LS vacant immediately.',
            'Resign RS 10 days.',
            'Hold both.'
        ],
        correctIndex: 1,
        explanation: 'First house (LS) seat vacant immediately.',
        difficulty: 'Moderate'
    },
    {
        id: '22.10.3_2',
        subtopicId: '22.10.3',
        question: 'Parliament legislate State List (Art 249)?',
        options: [
            'RS resolution 2/3 present.',
            'National Emergency.',
            'Joint Request.',
            'Treaties.'
        ],
        correctIndex: 0,
        explanation: 'Art 249 is specifically RS resolution.',
        difficulty: 'Easy'
    },
    {
        id: '22.10.3_3',
        subtopicId: '22.10.3',
        question: 'Art 249 Resolution validity: 1. Max 1 year. 2. Renew 1 year at time. 3. Law expires 6 months after.',
        options: [
            '1 and 2',
            '2 and 3',
            '1 and 3',
            '1, 2, 3'
        ],
        correctIndex: 3,
        explanation: 'All Correct.',
        difficulty: 'Moderate'
    },
    {
        id: '22.10.3_4',
        subtopicId: '22.10.3',
        question: 'Art 252 (States Request) law amendment:',
        options: [
            'Applies all states auto.',
            'States can amend.',
            'Only Parliament can amend.',
            'RS Special majority needed.'
        ],
        correctIndex: 2,
        explanation: 'Once passed under 252, states lose power. Only Parliament can amend/repeal.',
        difficulty: 'Tough'
    },
    {
        id: '22.4.5_3',
        subtopicId: '22.4.5',
        question: 'Lame-Duck Session?',
        options: [
            'Last session before dissolution.',
            'First session after election.',
            'Last session of existing LS after new elected.',
            'No quorum session.'
        ],
        correctIndex: 2,
        explanation: 'Session of old LS *after* new one elected.',
        difficulty: 'Easy'
    },
    {
        id: '22.4.5_4',
        subtopicId: '22.4.5',
        question: 'Who are Lame-Ducks?',
        options: [
            'Retiring RS.',
            'Existing LS members not re-elected.',
            'Ministers lost confidence.',
            'Nominated.'
        ],
        correctIndex: 1,
        explanation: 'Outgoing members not returning.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.1.5_1',
        subtopicId: '22.6.1.5',
        question: 'President Assent alternatives (Art 111) NOT included:',
        options: [
            'Give Annual.',
            'Withhold.',
            'Return.',
            'Refer to Supreme Court.'
        ],
        correctIndex: 3,
        explanation: 'refer to SC is Art 143.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.4_3',
        subtopicId: '22.6.4',
        question: 'Joint Sitting NOT allowed for:',
        options: [
            'Money Bills.',
            'Money + Const Amd.',
            'Const Amd + Fin Bill I.',
            'Money + Const Amd + Fin Bill I.'
        ],
        correctIndex: 1,
        explanation: 'No Joint Sitting for Money Bills or Constitutional Amendments.',
        difficulty: 'Moderate'
    },
    {
        id: '22.6.1.3_1',
        subtopicId: '22.6.1.3',
        question: 'Third Reading confined to:',
        options: [
            'Clause by clause.',
            'Accept/Reject whole bill, no amendments.',
            'General discussion.',
            'Scrutiny.'
        ],
        correctIndex: 1,
        explanation: 'Pass or fail, no amendments allowed.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.2_2',
        subtopicId: '22.6.2',
        question: 'Money Bill decision final authority:',
        options: [
            'President.',
            'Chairman RS.',
            'Speaker LS.',
            'Finance Minister.'
        ],
        correctIndex: 2,
        explanation: 'Speaker decision final.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.3_2',
        subtopicId: '22.6.3',
        question: 'Financial Bill (II) unique requirement:',
        options: [
            'No RS intro.',
            'President rec for intro.',
            'President rec for consideration.',
            'Speaker certificate.'
        ],
        correctIndex: 2,
        explanation: 'Note: Intro per se doesnt need rec, but *consideration* needs President recommendation.',
        difficulty: 'Tough'
    },
    {
        id: '22.2.1.2_2',
        subtopicId: '22.2.1.2',
        question: 'Speaker Quasi-judicial/Admin functions: 1. Appoints Chairmen of committees. 2. Chairman of Business Advisory/Rules/General Purpose. 3. Decides Defection. 4. Certifies Money Bill.',
        options: [
            '1, 2, 3',
            '2, 3, 4',
            '1, 3',
            '1, 2, 3, 4'
        ],
        correctIndex: 3,
        explanation: 'Requirement 4 Certifies Money Bill - Required for transmission to RS AND President.',
        difficulty: 'Moderate'
    },
    {
        id: '22.6.3_3',
        subtopicId: '22.6.3',
        question: 'Match President Rec: 1. Ordinary 2. Money 3. Fin I 4. Fin II',
        options: [
            '1-d, 2-c, 3-a, 4-b',
            '1-d, 2-a, 3-c, 4-b',
            '1-b, 2-c, 3-a, 4-d',
            '1-a, 2-b, 3-c, 4-d'
        ],
        correctIndex: 0,
        explanation: 'Ord=None; Money=Intro+Cons; FI=Intro; FII=Cons.',
        difficulty: 'Tough'
    },
    {
        id: '22.6.3_4',
        subtopicId: '22.6.3',
        question: 'Common Money & Fin Bill I:',
        options: [
            'Intro either house.',
            'Intro only on Pres Rec.',
            'RS can reject.',
            'Moved consideration LS only.'
        ],
        correctIndex: 1,
        explanation: 'Both need Pres Rec for intro.',
        difficulty: 'Moderate'
    },
    {
        id: '22.7.5_2',
        subtopicId: '22.7.5',
        question: 'Vote on Account purpose:',
        options: [
            'Emergency spend.',
            'Function till Approp Bill passed (2 months).',
            'Unexpected demand.',
            'Vote charged exp.'
        ],
        correctIndex: 1,
        explanation: 'Grant in advance pending full budget.',
        difficulty: 'Easy'
    },
    {
        id: '22.6.2_3',
        subtopicId: '22.6.2',
        question: 'Finance Bill correct:',
        options: [
            'Expenditure proposals.',
            'Taxation proposals.',
            'Passed within 14 days.',
            'Not money bill conditions.'
        ],
        correctIndex: 1,
        explanation: 'Finance Bill = Taxation/Income side.',
        difficulty: 'Easy'
    },
    {
        id: '22.1.4.3_5',
        subtopicId: '22.1.4.3',
        question: 'Elected to 2 state legislatures, no resignation?',
        options: [
            'Remote parliament seat.',
            'All state seats vacant.',
            'Disqualified 5 years.',
            'President decides.'
        ],
        correctIndex: 1,
        explanation: 'All seats vacant.',
        difficulty: 'Moderate'
    },
    {
        id: '22.1.4.3_6',
        subtopicId: '22.1.4.3',
        question: 'Double Membership (Parl + State): Seat in Parl vacant if not resigned state within?',
        options: [
            '10 days',
            '14 days',
            '30 days',
            '6 months'
        ],
        correctIndex: 1,
        explanation: '14 days.',
        difficulty: 'Easy'
    },
    {
        id: '22.5.5_1',
        subtopicId: '22.5.5',
        question: 'Half-an-hour discussion: 1. Elucidation of fact. 2. 3 days/week. 3. No formal motion/voting.',
        options: [
            '1 and 2',
            '2 and 3',
            '1 and 3',
            '1, 2, 3'
        ],
        correctIndex: 3,
        explanation: 'All correct.',
        difficulty: 'Moderate'
    },
    {
        id: '22.5.6_1',
        subtopicId: '22.5.6',
        question: 'Short Duration Discussion:',
        options: [
            'Formal motion.',
            'Speaker allots 2 days/week.',
            '1991 reforms.',
            'More than half hour.'
        ],
        correctIndex: 1,
        explanation: '2 days a week allotted.',
        difficulty: 'Easy'
    },
    {
        id: '22.1.2.2_2',
        subtopicId: '22.1.2.2',
        question: '84th vs 87th Amd Delimitation:',
        options: [
            '84-1991, 87-2001.',
            '84 increased, 87 redist.',
            '84 froze 2026, 87 changed basis to 2001 census.',
            'Both A and C.'
        ],
        correctIndex: 3,
        explanation: 'Froze number (84th), but allowed remixing boundaries based on 1991 (84th) then 2001 (87th).',
        difficulty: 'Tough'
    }
];
