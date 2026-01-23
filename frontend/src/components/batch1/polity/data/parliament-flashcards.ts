import { FlexibleFlashcard } from '@/components/batch1-1/pomodoro/CycleFlashcards';

export const PARLIAMENT_FLASHCARDS: FlexibleFlashcard[] = [
    // Topic 1: Organisation & Composition
    {
        id: 'fc_22.1.1.1_1',
        subtopicId: '22.1.1.1',
        question: 'Compare Rajya Sabha and Lok Sabha regarding their Representation basis.',
        answer: 'Rajya Sabha: Represents States and UTs (Federal character). Election is indirect by MLAs. Seats allocated by Schedule 4 (Population basis).\n\nLok Sabha: Represents People of India. Election is direct (Universal Adult Franchise). Territorial representation.'
    },
    {
        id: 'fc_22.1.1.1_2',
        subtopicId: '22.1.1.1',
        question: 'What are the 4 distinct categories of fields for Nomination to Rajya Sabha? Is there any difference for Legislative Council?',
        answer: 'Rajya Sabha (4 fields): Art, Literature, Science, Social Service.\n\nLegislative Council (5 fields): The above 4 + Cooperative Movement.'
    },
    {
        id: 'fc_22.1.2_1',
        subtopicId: '22.1.2',
        question: 'Why did India adopt Territorial Representation over Proportional Representation for Lok Sabha? (2 Key Reasons)',
        answer: '1. Complexity: PR is too complicated for illiterate voters.\n2. Instability: PR tends to multiply parties and leads to unstable coalition governments.'
    },

    // Topic 2: Duration
    {
        id: 'fc_22.1.3_1',
        subtopicId: '22.1.3.1',
        question: 'Does the Constitution fix the term of Rajya Sabha members? Explain.',
        answer: 'No. The Constitution says RS is a permanent body. It left the term of members to be determined by Parliament. The RPA, 1951 fixed it at 6 years.'
    },
    {
        id: 'fc_22.1.3_2',
        subtopicId: '22.1.3.2',
        question: 'What are the strict conditions for extending the term of Lok Sabha during an Emergency?',
        answer: '1. Can be extended by Law of Parliament.\n2. 1 year at a time.\n3. Cannot continue beyond 6 months after Emergency ceases.'
    },

    // Topic 3: Disqualifications
    {
        id: 'fc_22.1.4.2_1',
        subtopicId: '22.1.4.2',
        question: 'Who decides questions of disqualification (other than defection)? Is the advice binding?',
        answer: 'Decision by: President of India.\nConsultation: Must obtain opinion of Election Commission.\nBinding: Yes, he must act according to such opinion.'
    },
    {
        id: 'fc_22.1.4.2_2',
        subtopicId: '22.1.4.2',
        question: 'Compare Disqualification under 10th Schedule for: 1. Independent Member vs 2. Nominated Member.',
        answer: 'Independent: Disqualified if joins ANY political party.\nNominated: Disqualified if joins any party AFTER 6 months (Safe within 6 months).'
    },
    {
        id: 'fc_22.1.4.3_1',
        subtopicId: '22.1.4.3',
        question: 'Double Membership Scenarios: 1. Elected to both Houses? 2. Sitting member elected to other? 3. Elected to Parl + State Leg?',
        answer: '1. Both Houses: Must intimate in 10 days, else RS seat vacant.\n2. Sitting Member: First house seat vacant.\n3. Parl + State: Default Parl seat vacant after 14 days unless State seat resigned.'
    },

    // Topic 4: Presiding Officers
    {
        id: 'fc_22.2.1_1',
        subtopicId: '22.2.1.2',
        question: 'Removal of Speaker: 1. Majority Type? 2. Advance Notice? 3. Can he vote?',
        answer: '1. Majority: Effective Majority (Majority of all then members).\n2. Notice: 14 Days.\n3. Vote: Yes, in the first instance (not casting vote) during removal proceedings.'
    },
    {
        id: 'fc_22.2.1_2',
        subtopicId: '22.2.1.3',
        question: 'List 3 special provisions ensuring Independence of Speaker.',
        answer: '1. Security of Tenure (Removal by Effective Majority).\n2. Expenses charged on Consolidated Fund (Non-votable).\n3. Conduct cannot be discussed/criticized except on substantive motion.'
    },
    {
        id: 'fc_22.2.6_1',
        subtopicId: '22.2.6',
        question: 'Who presides over Joint Sitting in order of precedence?',
        answer: '1. Speaker of LS.\n2. Deputy Speaker of LS.\n3. Deputy Chairman of RS.\n(Note: Chairman of RS NEVER presides).'
    },

    // Topic 6: Sessions & Devices
    {
        id: 'fc_22.4.2_1',
        subtopicId: '22.4.2',
        question: 'Differentiate Adjournment vs Prorogation (4 Points).',
        answer: '1. Termination: Adj terminates sitting; Prorogation terminates session.\n2. Scope: Adj for hours/days; Prorogation ends business.\n3. Authority: Adj by Presiding Officer; Prorogation by President.\n4. Bills: Prorogation does NOT lapse bills (unlike UK).'
    },
    {
        id: 'fc_22.4.5_1',
        subtopicId: '22.4.5',
        question: 'Lapsing of Bills on Dissolution: Does a bill pending in Rajya Sabha lapse?',
        answer: 'It depends:\n- If passed by LS and pending in RS -> LAPSES.\n- If originated in RS and NOT passed by LS -> DOES NOT LAPSE.'
    },
    {
        id: 'fc_22.5.2_1',
        subtopicId: '22.5.2',
        question: 'What is Zero Hour? Is it mentioned in Rules?',
        answer: 'Not in Rules. Indian innovation (1962). Time gap between Question Hour and Agenda. Anyone can raise matters without prior notice.'
    },
    {
        id: 'fc_22.5.3_1',
        subtopicId: '22.5.3',
        question: 'Compare Censure Motion vs No-Confidence Motion (Grounds, Scope, Effect).',
        answer: '1. Grounds: Censure needs reason; No-Confidence no reason needed.\n2. Scope: Censure against Minister/Council; No-Confidence against whole Council only.\n3. Effect: Censure = Scolding (No resignation); No-Confidence = Must Resign.'
    },
    {
        id: 'fc_22.5.3_2',
        subtopicId: '22.5.3',
        question: 'Restrictions on Adjournment Motion (List 3).',
        answer: '1. One definite matter of urgent public importance.\n2. No question of privilege.\n3. Not sub-judice.\n4. No revival of discussion.'
    },

    // Topic 8: Legislative Procedure
    {
        id: 'fc_22.6.2_1',
        subtopicId: '22.6.2',
        question: 'Money Bill: 1. Certification? 2. RS Powers? 3. President Powers?',
        answer: '1. Certification: By Speaker (Final).\n2. RS Powers: Can only recommend (14 days limit). Cannot amend/reject.\n3. President: Assent or Withhold. NO Return for reconsideration.'
    },
    {
        id: 'fc_22.6.3_1',
        subtopicId: '22.6.3',
        question: 'Diff between Financial Bill (I) and (II) regarding "Joint Sitting" and "President Recommendation".',
        answer: 'Recommendation:\n- FB(I): Required for Introduction.\n- FB(II): Required for Consideration stage.\n\nJoint Sitting:\n- Allowed for BOTH FB(I) and FB(II).'
    },
    {
        id: 'fc_22.6.4_1',
        subtopicId: '22.6.4',
        question: 'Joint Sitting is NOT available for which two types of bills?',
        answer: '1. Money Bills.\n2. Constitutional Amendment Bills.'
    },

    // Topic 9: Budget
    {
        id: 'fc_22.7.3_1',
        subtopicId: '22.7.3',
        question: 'Enactment of Budget - Stage Order (6 Stages).',
        answer: '1. Presentation.\n2. General Discussion.\n3. Scrutiny by Dept Committees.\n4. Voting on Demands (LS only).\n5. Appropriation Bill.\n6. Finance Bill.'
    },
    {
        id: 'fc_22.7.3_2',
        subtopicId: '22.7.3',
        question: 'Define the 3 Cut Motions: Policy, Economy, Token.',
        answer: 'Policy Cut: Reduce to Re 1 (Disapproval of policy).\nEconomy Cut: Reduce by specific amount (Economy possible).\nToken Cut: Reduce by Rs 100 (Specific grievance).'
    },
    {
        id: 'fc_22.7.4_1',
        subtopicId: '22.7.4',
        question: 'What is a "Vote of Credit"?',
        answer: 'It is a blank cheque given to the Executive for meeting an unexpected demand whose magnitude and indefinite character cannot be stated in budget details (War/Emergency).'
    },

    // Topic 10: Position of Rajya Sabha
    {
        id: 'fc_22.10.3_1',
        subtopicId: '22.10.3',
        question: 'List the 3 Special Exclusive Powers of Rajya Sabha.',
        answer: '1. Art 249: Authorize Parliament to make law on State List.\n2. Art 312: Create new All-India Services.\n3. Art 67: Initiate removal of Vice-President.'
    },

    // Topic 11: Privileges
    {
        id: 'fc_22.11.2_1',
        subtopicId: '22.11.2',
        question: 'Freedom from Arrest: 1. Phase? 2. Cases Covered? 3. Cases Excluded?',
        answer: '1. Phase: 40 days before and after session.\n2. Covered: Civil Cases only.\n3. Excluded: Criminal Cases and Preventive Detention.'
    },

    // Topic 12: Sovereignty
    {
        id: 'fc_22.12.1_1',
        subtopicId: '22.12.1',
        question: 'Art 122: What specifically are Courts prohibited from inquiring into?',
        answer: 'Courts cannot inquire into the validity of any proceedings in Parliament on the ground of any alleged "irregularity of procedure".'
    },

    // New Topics: 106th Amendment & New Parliament
    {
        id: 'fc_22.1.2_106th_1',
        subtopicId: '22.1.2',
        question: 'Nari Shakti Vandan Adhiniyam (106th Amd): 1. Quantum? 2. Which Houses? 3. Duration?',
        answer: '1. Quantum: 1/3rd seats.\n2. Houses: Lok Sabha, State Assemblies, Delhi Assembly (Not RS/Councils).\n3. Duration: 15 years (subject to extension).'
    },
    {
        id: 'fc_22.1_NewParl_1',
        subtopicId: '22.1',
        question: 'New Parliament Themes: Lok Sabha vs Rajya Sabha.',
        answer: 'Lok Sabha: Peacock Theme (National Bird).\nRajya Sabha: Lotus Theme (National Flower).'
    },

    // Advanced & Miscellaneous
    {
        id: 'fc_22.3.3_1',
        subtopicId: '22.3.3',
        question: 'What is the consequence of defying a Party Whip?',
        answer: 'Disqualification under 10th Schedule (Anti-Defection Law). Exception: If 2/3rd members merge with another party.'
    },
    {
        id: 'fc_22.5.9_1',
        subtopicId: '22.5.9',
        question: 'Who has the power of Expunction? What happens to expunged words?',
        answer: 'Power: Presiding Officer only (Speaker/Chairman).\nEffect: They are removed from the official record and cannot be reported by media (protected by privilege).'
    },
    {
        id: 'fc_22.4.9_1',
        subtopicId: '22.4.9',
        question: 'Rights of Attorney General in Parliament.',
        answer: 'Right to speak and participate in proceedings of Both Houses and Joint Sittings and any Committee he is named in.\nRestrictions: NO Right to Vote.'
    }
];
