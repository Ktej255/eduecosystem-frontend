export type FlowNodeType = 'start' | 'question' | 'action' | 'end_success' | 'end_fail';

export interface FlowNode {
    id: string;
    text: string;
    type: FlowNodeType;
    options?: { label: string; nextId: string }[];
    note?: string;
}

export const MONEY_BILL_FLOW: Record<string, FlowNode> = {
    'start': {
        id: 'start',
        text: 'A Bill is introduced in the Parliament. Is it a Money Bill?',
        type: 'question',
        options: [
            { label: 'Yes, claims to be Money Bill', nextId: 'speaker_check' },
            { label: 'No, it is an Ordinary Bill', nextId: 'ordinary_path' }
        ]
    },
    'ordinary_path': { id: 'ordinary_path', text: 'Redirect to Ordinary Bill Flow...', type: 'end_fail' },

    'speaker_check': {
        id: 'speaker_check',
        text: 'Who certifies it as a Money Bill?',
        type: 'question',
        options: [
            { label: 'The Speaker of Lok Sabha', nextId: 'ls_pass' },
            { label: 'The Finance Minister', nextId: 'wrong_minister' }
        ],
        note: 'Article 110(3): The decision of the Speaker is final.'
    },
    'wrong_minister': { id: 'wrong_minister', text: '❌ Incorrect. Only the Speaker has this power.', type: 'end_fail' },

    'ls_pass': {
        id: 'ls_pass',
        text: 'Lok Sabha passes the bill. Where does it go next?',
        type: 'action',
        options: [
            { label: 'To Rajya Sabha', nextId: 'rs_role' }
        ]
    },

    'rs_role': {
        id: 'rs_role',
        text: 'The Rajya Sabha receives the bill. What can they do?',
        type: 'question',
        options: [
            { label: 'Reject it', nextId: 'rs_reject_error' },
            { label: 'Amend it', nextId: 'rs_amend_error' },
            { label: 'Return with recommendations', nextId: 'rs_recommend' },
            { label: 'Withhold for > 14 days', nextId: 'deemed_pass' }
        ]
    },
    'rs_reject_error': { id: 'rs_reject_error', text: '❌ Trap! Rajya Sabha CANNOT reject a Money Bill.', type: 'end_fail' },
    'rs_amend_error': { id: 'rs_amend_error', text: '❌ Trap! Rajya Sabha CANNOT amend a Money Bill.', type: 'end_fail' },

    'rs_recommend': {
        id: 'rs_recommend',
        text: 'RS returns it with recommendations. Does LS have to accept them?',
        type: 'question',
        options: [
            { label: 'Yes, mandatory', nextId: 'ls_mandatory_error' },
            { label: 'No, LS can reject all', nextId: 'president_stage' }
        ]
    },
    'ls_mandatory_error': { id: 'ls_mandatory_error', text: '❌ Incorrect. Lok Sabha has absolute power to accept or reject.', type: 'end_fail' },

    'deemed_pass': { id: 'deemed_pass', text: '✅ Deemed Passed by both Houses!', type: 'end_success', note: 'If RS takes no action for 14 days, it is considered passed.' },

    'president_stage': {
        id: 'president_stage',
        text: 'Bill reaches the President. What are his options?',
        type: 'question',
        options: [
            { label: 'Give Assent', nextId: 'act_born' },
            { label: 'Withhold Assent', nextId: 'bill_dead' },
            { label: 'Return for Reconsideration', nextId: 'president_return_error' }
        ]
    },
    'act_born': { id: 'act_born', text: '✅ The Bill becomes an Act!', type: 'end_success' },
    'bill_dead': { id: 'bill_dead', text: '❌ The Bill ends (Absolute Veto).', type: 'end_fail' },
    'president_return_error': { id: 'president_return_error', text: '❌ Trap! President CANNOT return a Money Bill for reconsideration.', type: 'end_fail' }
};

export const ANTI_DEFECTION_FLOW: Record<string, FlowNode> = {
    'start': {
        id: 'start',
        text: 'An elected member acts against the party. What did they do?',
        type: 'question',
        options: [
            { label: 'Voluntarily gave up membership', nextId: 'disqualified_direct' },
            { label: 'Voted against Party Whip', nextId: 'whip_check' },
            { label: 'Independent member joined a party', nextId: 'disqualified_ind' },
            { label: 'Nominated member joined a party', nextId: 'nominated_check' }
        ]
    },
    'disqualified_direct': { id: 'disqualified_direct', text: '❌ Disqualified! (Ravi Naik Case: Conduct matters)', type: 'end_fail' },
    'disqualified_ind': { id: 'disqualified_ind', text: '❌ Disqualified! Independents cannot join any party.', type: 'end_fail' },

    'whip_check': {
        id: 'whip_check',
        text: 'Did the party condone (forgive) the vote within 15 days?',
        type: 'question',
        options: [
            { label: 'Yes', nextId: 'saved' },
            { label: 'No', nextId: 'disqualified_whip' }
        ]
    },
    'saved': { id: 'saved', text: '✅ Safe! No Disqualification.', type: 'end_success' },
    'disqualified_whip': { id: 'disqualified_whip', text: '❌ Disqualified for defying the Whip.', type: 'end_fail' },

    'nominated_check': {
        id: 'nominated_check',
        text: 'When did the Nominated member join?',
        type: 'question',
        options: [
            { label: 'Within 6 months of taking seat', nextId: 'saved_nom' },
            { label: 'After 6 months', nextId: 'disqualified_nom' }
        ]
    },
    'saved_nom': { id: 'saved_nom', text: '✅ Safe! Nominated members have 6 months to decide.', type: 'end_success' },
    'disqualified_nom': { id: 'disqualified_nom', text: '❌ Disqualified! Cannot join after expiry of 6 months.', type: 'end_fail' }
};
