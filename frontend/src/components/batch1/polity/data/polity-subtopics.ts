export interface SubTopic {
    id: string;
    label: string;
    children?: SubTopic[];
}

export const CHAPTER_SUBTOPICS: Record<number, SubTopic[]> = {
    1: [
        { id: '1.1', label: 'Company Rule (1773-1858)' },
        { id: '1.2', label: 'Crown Rule (1858-1947)' },
        { id: '1.3', label: 'Independence Act 1947' }
    ],
    2: [
        { id: '2.1', label: 'Composition of Constituent Assembly' },
        { id: '2.2', label: 'Working of the Assembly' },
        { id: '2.3', label: 'Committees of Constituent Assembly' },
        { id: '2.4', label: 'Enactment & Enforcement' }
    ],
    3: [
        { id: '3.1', label: 'Salient Features Overview' },
        { id: '3.2', label: 'Schedules of Constitution' },
        { id: '3.3', label: 'Borrowed Features (Sources)' }
    ],
    7: [
        { id: '7.1', label: 'Meaning and Significance' },
        { id: '7.2', label: 'Constitutional Provisions (Art 5-11)' },
        { id: '7.3', label: 'Citizenship Act, 1955' },
        { id: '7.4', label: 'Loss of Citizenship' },
        { id: '7.5', label: 'Single Citizenship Concept' },
        { id: '7.6', label: 'Overseas Citizenship of India (OCI)' }
    ],
    8: [
        { id: '8.1', label: 'Features of Fundamental Rights' },
        { id: '8.2', label: 'Definition of State (Art 12)' },
        { id: '8.3', label: 'Laws Inconsistent with FR (Art 13)' },
        { id: '8.4', label: 'Right to Equality (Art 14-18)' },
        { id: '8.5', label: 'Right to Freedom (Art 19-22)' },
        { id: '8.6', label: 'Right against Exploitation (Art 23-24)' },
        { id: '8.7', label: 'Right to Freedom of Religion (Art 25-28)' },
        { id: '8.8', label: 'Cultural and Educational Rights (Art 29-30)' },
        { id: '8.9', label: 'Right to Constitutional Remedies (Art 32)' },
        { id: '8.10', label: 'Writs—Types and Scope' }
    ],
    9: [
        { id: '9.1', label: 'Features of DPSP' },
        { id: '9.2', label: 'Classification of Principles' },
        { id: '9.3', label: 'Socialistic Principles' },
        { id: '9.4', label: 'Gandhian Principles' },
        { id: '9.5', label: 'Liberal-Intellectual Principles' },
        { id: '9.6', label: 'Conflict between FR and DPSP' }
    ],
    10: [
        { id: '10.1', label: 'Swaran Singh Committee Recommendations' },
        { id: '10.2', label: 'List of Fundamental Duties' },
        { id: '10.3', label: 'Features of Fundamental Duties' },
        { id: '10.4', label: 'Criticism and Significance' },
        { id: '10.5', label: 'Verma Committee Observations' }
    ],
    11: [
        { id: '11.1', label: 'Procedure for Amendment (Art 368)' },
        { id: '11.2', label: 'Simple Majority' },
        { id: '11.3', label: 'Special Majority' },
        { id: '11.4', label: 'Special Majority + Ratification of States' },
        { id: '11.5', label: 'Criticism of Amendment Procedure' }
    ],
    12: [
        { id: '12.1', label: 'Emergence of Basic Structure' },
        { id: '12.2', label: 'Kesavananda Bharati Case (1973)' },
        { id: '12.3', label: 'Elements of Basic Structure List' }
    ],
    13: [
        { id: '13.1', label: 'Features of Parliamentary Govt' },
        { id: '13.2', label: 'Features of Presidential Govt' },
        { id: '13.3', label: 'Merits of Parliamentary System' },
        { id: '13.4', label: 'Reasons for Adopting Parliamentary System' }
    ],
    14: [
        { id: '14.1', label: 'Federal vs Unitary Features' },
        { id: '14.2', label: 'Critical Evaluation of Federal System' },
        { id: '14.3', label: 'Unitary Bias of the Indian Constitution' }
    ],
    15: [
        { id: '15.1', label: 'Legislative Relations' },
        { id: '15.2', label: 'Administrative Relations' },
        { id: '15.3', label: 'Financial Relations' },
        { id: '15.4', label: 'Sarkaria Commission Recommendations' },
        { id: '15.5', label: 'Punchhi Commission Observations' }
    ],
    16: [
        { id: '16.1', label: 'Inter-State Water Disputes' },
        { id: '16.2', label: 'Inter-State Councils' },
        { id: '16.3', label: 'Zonal Councils' },
        { id: '16.4', label: 'Inter-State Trade and Commerce' }
    ],
    17: [
        { id: '17.1', label: 'National Emergency (Art 352)' },
        { id: '17.2', label: 'President’s Rule (Art 356)' },
        { id: '17.3', label: 'Financial Emergency (Art 360)' },
        { id: '17.4', label: 'Criticism of Emergency Provisions' }
    ],
    18: [
        { id: '18.1', label: 'Election and Qualifications' },
        { id: '18.2', label: 'Term, Impeachment, and Vacancy' },
        { id: '18.3', label: 'Powers and Functions (Executive, Legislative)' },
        { id: '18.4', label: 'Veto Power of the President' },
        { id: '18.5', label: 'Ordinance-Making Power (Art 123)' },
        { id: '18.6', label: 'Pardoning Power (Art 72)' }
    ],
    19: [
        { id: '19.1', label: 'Election and Qualifications' },
        { id: '19.2', label: 'Term and Removal' },
        { id: '19.3', label: 'Powers and Functions' },
        { id: '19.4', label: 'Comparison with American Vice-President' }
    ],
    20: [
        { id: '20.1', label: 'Appointment and Oath' },
        { id: '20.2', label: 'Role as Head of Government' },
        { id: '20.3', label: 'Relationship with President (Art 78)' },
        { id: '20.4', label: 'Powers and Functions' }
    ],
    21: [
        { id: '21.1', label: 'Composition (Cabinet, MoS, Deputy)' },
        { id: '21.2', label: 'Collective Responsibility (Art 75)' },
        { id: '21.3', label: 'Cabinet Committees' },
        { id: '21.4', label: 'Kitchen Cabinet' }
    ],
    22: [
        {
            id: '22.1', label: 'Organisation of Parliament (Composition)', children: [
                {
                    id: '22.1.1', label: 'Composition of the Two Houses', children: [
                        { id: '22.1.1.1', label: 'Composition of Rajya Sabha' },
                        { id: '22.1.1.2', label: 'Composition of Lok Sabha' }
                    ]
                },
                {
                    id: '22.1.2', label: 'System of Elections to Lok Sabha', children: [
                        { id: '22.1.2.1', label: 'Territorial Constituencies' },
                        { id: '22.1.2.2', label: 'Readjustment after each Census' },
                        { id: '22.1.2.3', label: 'Reservation of Seats for SCs and STs' },
                        { id: '22.1.2.4', label: 'Proportional Representation not Adopted' }
                    ]
                },
                {
                    id: '22.1.3', label: 'Duration of Two Houses', children: [
                        { id: '22.1.3.1', label: 'Duration of Rajya Sabha' },
                        { id: '22.1.3.2', label: 'Duration of Lok Sabha' }
                    ]
                },
                {
                    id: '22.1.4', label: 'Membership of Parliament', children: [
                        { id: '22.1.4.1', label: 'Qualifications' },
                        { id: '22.1.4.2', label: 'Disqualifications (Defection, etc.)' },
                        { id: '22.1.4.3', label: 'Vacation of Seats' },
                        { id: '22.1.4.4', label: 'Oath or Affirmation' },
                        { id: '22.1.4.5', label: 'Salaries and Allowances' }
                    ]
                }
            ]
        },
        {
            id: '22.2', label: 'Presiding Officers of Parliament', children: [
                {
                    id: '22.2.1', label: 'Speaker of Lok Sabha', children: [
                        { id: '22.2.1.1', label: 'Election and Tenure' },
                        { id: '22.2.1.2', label: 'Role, Powers and Functions' },
                        { id: '22.2.1.3', label: 'Independence and Impartiality' }
                    ]
                },
                { id: '22.2.2', label: 'Deputy Speaker of Lok Sabha' },
                { id: '22.2.3', label: 'Panel of Chairpersons of Lok Sabha' },
                { id: '22.2.4', label: 'Speaker Pro Tem' },
                { id: '22.2.5', label: 'Chairman of Rajya Sabha' },
                { id: '22.2.6', label: 'Deputy Chairman of Rajya Sabha' },
                { id: '22.2.7', label: 'Panel of Vice-Chairpersons of Rajya Sabha' },
                { id: '22.2.8', label: 'Secretariat of Parliament' }
            ]
        },
        {
            id: '22.3', label: 'Leaders in Parliament', children: [
                { id: '22.3.1', label: 'Leader of the House' },
                { id: '22.3.2', label: 'Leader of the Opposition' },
                { id: '22.3.3', label: 'Whip' }
            ]
        },
        {
            id: '22.4', label: 'Sessions of Parliament', children: [
                { id: '22.4.1', label: 'Summoning' },
                { id: '22.4.2', label: 'Adjournment' },
                { id: '22.4.3', label: 'Adjournment Sine Die' },
                { id: '22.4.4', label: 'Prorogation' },
                { id: '22.4.5', label: 'Dissolution' },
                { id: '22.4.6', label: 'Quorum' },
                { id: '22.4.7', label: 'Voting in House' },
                { id: '22.4.8', label: 'Language in Parliament' },
                { id: '22.4.9', label: 'Rights of Ministers and Attorney General' }
            ]
        },
        {
            id: '22.5', label: 'Devices of Parliamentary Proceedings', children: [
                { id: '22.5.1', label: 'Question Hour' },
                { id: '22.5.2', label: 'Zero Hour' },
                { id: '22.5.3', label: 'Motions' },
                { id: '22.5.4', label: 'Point of Order' },
                { id: '22.5.5', label: 'Half-an-Hour Discussion' },
                { id: '22.5.6', label: 'Short Duration Discussion' },
                { id: '22.5.7', label: 'Special Mention' },
                { id: '22.5.8', label: 'Resolutions' },
                { id: '22.5.9', label: 'Youth Parliament' }
            ]
        },
        {
            id: '22.6', label: 'Legislative Procedure in Parliament', children: [
                {
                    id: '22.6.1', label: 'Ordinary Bills', children: [
                        { id: '22.6.1.1', label: 'First Reading' },
                        { id: '22.6.1.2', label: 'Second Reading' },
                        { id: '22.6.1.3', label: 'Third Reading' },
                        { id: '22.6.1.4', label: 'Bill in the Second House' },
                        { id: '22.6.1.5', label: 'Assent of the President' }
                    ]
                },
                { id: '22.6.2', label: 'Money Bills' },
                { id: '22.6.3', label: 'Financial Bills (Type I and Type II)' },
                { id: '22.6.4', label: 'Joint Sitting of Two Houses' }
            ]
        },
        {
            id: '22.7', label: 'Budget in Parliament', children: [
                { id: '22.7.1', label: 'Constitutional Provisions' },
                { id: '22.7.2', label: 'Charged Expenditure' },
                { id: '22.7.3', label: 'Stages in Enactment' },
                { id: '22.7.4', label: 'Grants' },
                { id: '22.7.5', label: 'Funds' }
            ]
        },
        {
            id: '22.8', label: 'Multifunctional Role of Parliament', children: [
                { id: '22.8.1', label: 'Legislative Functions' },
                { id: '22.8.2', label: 'Executive Functions' },
                { id: '22.8.3', label: 'Financial Functions' },
                { id: '22.8.4', label: 'Constituent Functions' },
                { id: '22.8.5', label: 'Judicial Functions' },
                { id: '22.8.6', label: 'Electoral Functions' }
            ]
        },
        { id: '22.9', label: 'Ineffectiveness of Parliamentary Control' },
        {
            id: '22.10', label: 'Position of Rajya Sabha', children: [
                { id: '22.10.1', label: 'Equal Status with Lok Sabha' },
                { id: '22.10.2', label: 'Unequal Status with Lok Sabha' },
                { id: '22.10.3', label: 'Special Powers of Rajya Sabha' }
            ]
        },
        {
            id: '22.11', label: 'Parliamentary Privileges', children: [
                { id: '22.11.1', label: 'Collective Privileges' },
                { id: '22.11.2', label: 'Individual Privileges' },
                { id: '22.11.3', label: 'Breach of Privilege' },
                { id: '22.11.4', label: 'Sources of Privileges' }
            ]
        },
        {
            id: '22.12', label: 'Sovereignty of Parliament', children: [
                { id: '22.12.1', label: 'Comparison with British Parliament' },
                { id: '22.12.2', label: 'Limitations on Sovereignty' }
            ]
        }
    ],
    23: [
        { id: '23.1', label: 'Financial Committees (PAC, Estimates, CPU)' },
        { id: '23.2', label: 'Departmental Standing Committees (24 DSCs)' },
        { id: '23.3', label: 'Committees to Inquire and Scrutinize' },
        { id: '23.4', label: 'Committees Relating to Day-to-Day Business' },
        { id: '23.5', label: 'House Keeping and Consultative Committees' }
    ],
    24: [
        { id: '24.1', label: 'Parliamentary Forums' },
        { id: '24.2', label: 'Parliamentary Groups' }
    ],
    26: [
        { id: '26.1', label: 'Organization and Appointment of Judges (Collegium System)' },
        { id: '26.2', label: 'Qualifications, Oath, Tenure, Removal' },
        { id: '26.3', label: 'Jurisdiction and Powers (Original, Writ, Appellate, Advisory)' },
        { id: '26.4', label: 'Judicial Review and Activism' }
    ],
    34: [
        { id: '34.1', label: 'Organization and Appointment (Comparision with SC)' },
        { id: '34.2', label: 'Jurisdiction and Powers (Writ, Appellate, Supervisory)' }
    ],
    35: [
        { id: '35.1', label: 'Subordinate Courts Structure (District Judges)' },
        { id: '35.2', label: 'NALSA and Lok Adalats' }
    ],
    36: [
        { id: '36.1', label: 'Organization of State Legislature (Unicameral/Bicameral)' },
        { id: '36.2', label: 'Creation and Abolition of Legislative Council (Art 169)' },
        { id: '36.3', label: 'Composition of Assembly and Council' },
        { id: '36.4', label: 'Presiding Officers (Speaker, Chairman)' },
        { id: '36.5', label: 'Legislative Procedure (Comparison with Parliament)' },
        { id: '36.6', label: 'Powers and Privileges' }
    ],
    32: [
        { id: '32.1', label: 'Appointment by Governor' },
        { id: '32.2', label: 'Powers and Functions' },
        { id: '32.3', label: 'Relationship with Governor' }
    ],
    33: [
        { id: '33.1', label: 'Composition and Appointment' },
        { id: '33.2', label: 'Collective Responsibility (Art 164)' }
    ],
    31: [
        { id: '31.1', label: 'Appointment and Conditions of Office' },
        { id: '31.2', label: 'Powers and Functions (Executive, Legislative)' },
        { id: '31.3', label: 'Veto Power of the Governor' },
        { id: '31.4', label: 'Ordinance-Making Power (Art 213)' },
        { id: '31.5', label: 'Pardoning Power (Art 161)' },
        { id: '31.6', label: 'Constitutional Position compared to President' }
    ]
};
