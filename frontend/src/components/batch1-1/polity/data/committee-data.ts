export type CommitteeType = 'PAC' | 'ESTIMATES' | 'COPU';

export interface CommitteeFact {
    id: string;
    text: string;
    committee: CommitteeType;
}

export const COMMITTEE_DATA: CommitteeFact[] = [
    // --- PUBLIC ACCOUNTS COMMITTEE (PAC) ---
    { id: 'pac_1', text: 'Chairman is traditionally from the Opposition Party (since 1967).', committee: 'PAC' },
    { id: 'pac_2', text: 'Examines the reports of the CAG.', committee: 'PAC' },
    { id: 'pac_3', text: 'Total 22 Members (15 Lok Sabha + 7 Rajya Sabha).', committee: 'PAC' },
    { id: 'pac_4', text: 'Known as the "Post-Mortem" Committee.', committee: 'PAC' },

    // --- ESTIMATES COMMITTEE ---
    { id: 'est_1', text: 'Largest Committee with 30 Members.', committee: 'ESTIMATES' },
    { id: 'est_2', text: 'All members are from Lok Sabha only. No Rajya Sabha representation.', committee: 'ESTIMATES' },
    { id: 'est_3', text: 'Chairman is always from the Ruling Party.', committee: 'ESTIMATES' },
    { id: 'est_4', text: 'Described as a "Continuous Economy Committee".', committee: 'ESTIMATES' },

    // --- COMMITTEE ON PUBLIC UNDERTAKINGS (CoPU) ---
    { id: 'copu_1', text: 'Created in 1964 on recommendation of Krishna Menon Committee.', committee: 'COPU' },
    { id: 'copu_2', text: 'Examines reports and accounts of PSUs (LIC, Air India, etc).', committee: 'COPU' },
    { id: 'copu_3', text: 'Total 22 Members (15 LS + 7 RS) - Same as PAC.', committee: 'COPU' },
    { id: 'copu_4', text: 'Cannot examine day-to-day administration of PSUs.', committee: 'COPU' }
];

export const COMMITTEE_INFO = {
    PAC: { title: 'Public Accounts Comm.', color: 'bg-blue-100 border-blue-500 text-blue-900' },
    ESTIMATES: { title: 'Estimates Comm.', color: 'bg-green-100 border-green-500 text-green-900' },
    COPU: { title: 'Public Undertakings', color: 'bg-orange-100 border-orange-500 text-orange-900' }
};
