
export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
    level?: string;
    topic?: string;
    chapter?: string;
    subtopic?: string;
}

export const DAY19_MCQS: MCQ[] = [
    // ==========================================
    // SPSC (15 Questions)
    // ==========================================
    {
        id: 1,
        question: "Chairman of State Public Service Commission is appointed by:",
        options: ["President", "Governor", "CM", "UPSC Chairman"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "38.2"
    },
    {
        id: 2,
        question: "Chairman of SPSC can be removed by:",
        options: ["Governor", "President", "Parliament", "High Court"],
        correctAnswer: 1,
        explanation: "President (Not Governor).",
        subtopic: "38.2"
    },
    {
        id: 3,
        question: "Retirement age of SPSC member is:",
        options: ["60 years", "62 years", "65 years", "58 years"],
        correctAnswer: 1,
        explanation: "62 years (Raised from 60 by 41st Amendment). UPSC is 65.",
        subtopic: "38.2"
    },
    {
        id: 4,
        question: "SPSC Annual Report is submitted to:",
        options: ["State Legislature", "Governor", "President", "UPSC"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "38.2"
    },
    {
        id: 5,
        question: "Joint State Public Service Commission (JSPSC) members are appointed by:",
        options: ["Governors of concerned states", "President", "UPSC", "Parliament"],
        correctAnswer: 1,
        explanation: "President (JSPSC is a statutory body created by Parliament).",
        subtopic: "38.2"
    },
    {
        id: 6,
        question: "Can SPSC be consulted for reservation in appointments?",
        options: ["Yes", "No", "Only for SCs", "Only for STs"],
        correctAnswer: 1,
        explanation: "No (Same as UPSC, exempt under Art 320(4)).",
        subtopic: "38.2"
    },
    {
        id: 7,
        question: "Salaries of SPSC members are charged on:",
        options: ["Consolidated Fund of India", "Consolidated Fund of State", "Grants", "Public Account"],
        correctAnswer: 1,
        explanation: "Consolidated Fund of State.",
        subtopic: "38.2"
    },
    {
        id: 8,
        question: "Who determines the strength of SPSC?",
        options: ["Constitution", "Parliament", "Governor", "President"],
        correctAnswer: 2,
        explanation: "Governor (Constitution does not specify).",
        subtopic: "38.2"
    },
    {
        id: 9,
        question: "Can an SPSC member be reappointed to the same office?",
        options: ["Yes", "No", "Only once", "With Governor permission"],
        correctAnswer: 1,
        explanation: "No. Ineligible for reappointment to same office.",
        subtopic: "38.2"
    },
    {
        id: 10,
        question: "SPSC Chairman is eligible for appointment as:",
        options: ["Governor only", "Chairman/Member of UPSC or Chairman of other SPSC", "MLA", "None"],
        correctAnswer: 1,
        explanation: "Chairman/Member of UPSC or Chairman of any other SPSC.",
        subtopic: "38.2"
    },
    {
        id: 11,
        question: "Grounds for removal of SPSC member are:",
        options: ["Different from UPSC", "Same as UPSC", "Decided by State Leg", "None"],
        correctAnswer: 1,
        explanation: "Same as UPSC members (Misbehavior, Insolvency etc). Inquiry by SC.",
        subtopic: "38.2"
    },
    {
        id: 12,
        question: "Who appoints acting Chairman of SPSC?",
        options: ["Governor", "President", "CM", "Chief Justice of HC"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "38.2"
    },
    {
        id: 13,
        question: "JSPSC submits report to:",
        options: ["President", "Governors of all concerned states", "UPSC", "Parliament"],
        correctAnswer: 1,
        explanation: "Governors of all concerned states (who lay it before respective legislatures).",
        subtopic: "38.2"
    },
    {
        id: 14,
        question: "Jurisdiction of SPSC can be extended by:",
        options: ["State Legislature", "Parliament", "Governor", "President"],
        correctAnswer: 0,
        explanation: "State Legislature Act.",
        subtopic: "38.2"
    },
    {
        id: 15,
        question: "Which Act established Public Service Commission for the first time in India?",
        options: ["GOI Act 1919", "GOI Act 1935", "Indian Councils Act 1892", "Regulating Act 1773"],
        correctAnswer: 0,
        explanation: "GOI Act 1919 (Central PSC set up in 1926). GOI Act 1935 established Federal and Provincial PSCs.",
        subtopic: "38.2"
    },

    // ==========================================
    // FINANCE COMMISSION (15 Questions)
    // ==========================================
    {
        id: 16,
        question: "Article 280 deals with:",
        options: ["Election Commission", "Finance Commission", "Planning Commission", "GST Council"],
        correctAnswer: 1,
        explanation: "Finance Commission.",
        subtopic: "22.1"
    },
    {
        id: 17,
        question: "Finance Commission is constituted by:",
        options: ["Parliament", "PM", "President", "Finance Minister"],
        correctAnswer: 2,
        explanation: "President (Every 5th year or earlier).",
        subtopic: "22.1"
    },
    {
        id: 18,
        question: "Chairman of Finance Commission must have:",
        options: ["Experience in public affairs", "Judicial background", "Economics PhD", "Accountancy"],
        correctAnswer: 0,
        explanation: "Having experience in public affairs.",
        subtopic: "22.1"
    },
    {
        id: 19,
        question: "Who determines qualifications of FC members?",
        options: ["President", "Parliament", "Constitution", "UPSC"],
        correctAnswer: 1,
        explanation: "Parliament (Finance Commission Act, 1951).",
        subtopic: "22.1"
    },
    {
        id: 20,
        question: "Basic function of Finance Commission?",
        options: ["Prepare Budget", "Distribution of tax proceeds between Centre and States", "Control Inflation", "Audit accounts"],
        correctAnswer: 1,
        explanation: "Recommend distribution of net proceeds of taxes between Centre and States.",
        subtopic: "22.1"
    },
    {
        id: 21,
        question: "FC Report is submitted to:",
        options: ["PM", "FM", "President", "Parliament directly"],
        correctAnswer: 2,
        explanation: "President.",
        subtopic: "22.1"
    },
    {
        id: 22,
        question: "Is FC a permanent body?",
        options: ["Yes", "No", "Ad-hoc", "Statutory"],
        correctAnswer: 1,
        explanation: "No, constituted every 5 years.",
        subtopic: "22.1"
    },
    {
        id: 23,
        question: "15th Finance Commission Chairman:",
        options: ["Y.V. Reddy", "N.K. Singh", "Vijay Kelkar", "C. Rangarajan"],
        correctAnswer: 1,
        explanation: "N.K. Singh.",
        subtopic: "22.1"
    },
    {
        id: 24,
        question: "Grants-in-aid to states (Art 275) are recommended by:",
        options: ["NITI Aayog", "Finance Commission", "Home Ministry", "President"],
        correctAnswer: 1,
        explanation: "Finance Commission.",
        subtopic: "22.1"
    },
    {
        id: 25,
        question: "FC recommendations are:",
        options: ["Binding", "Advisory", "Mandatory", "Judicial orders"],
        correctAnswer: 1,
        explanation: "Advisory in nature.",
        subtopic: "22.1"
    },
    {
        id: 26,
        question: "Who recommends measures to augment Consolidated Fund of State for Panchayats?",
        options: ["State Finance Commission", "Central Finance Commission", "NITI Aayog", "RBI"],
        correctAnswer: 1,
        explanation: "Central FC recommends measures based on report of SFC.",
        subtopic: "22.1"
    },
    {
        id: 27,
        question: "First Finance Commission Chairman:",
        options: ["K.C. Neogy", "K. Santhanam", "Chanda", "Rajamannar"],
        correctAnswer: 0,
        explanation: "K.C. Neogy (1951).",
        subtopic: "22.1"
    },
    {
        id: 28,
        question: "Members of FC are eligible for reappointment?",
        options: ["Yes", "No", "Only Chairman", "Never"],
        correctAnswer: 0,
        explanation: "Yes.",
        subtopic: "22.1"
    },
    {
        id: 29,
        question: "Who appoints members of SFC?",
        options: ["Governor", "President", "CM", "Parliament"],
        correctAnswer: 0,
        explanation: "Governor (Article 243I).",
        subtopic: "39.1"
    },
    {
        id: 30,
        question: "FC consists of Chairman and ___ members.",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "Four other members.",
        subtopic: "22.1"
    },

    // ==========================================
    // NATIONAL COMMISSIONS (NCSC/ST/BC) (30 Questions)
    // ==========================================
    {
        id: 31,
        question: "NCSC is established under Article:",
        options: ["338", "338A", "338B", "340"],
        correctAnswer: 0,
        explanation: "Article 338.",
        subtopic: "39.2"
    },
    {
        id: 32,
        question: "NCST was separated from NCSC by:",
        options: ["65th Amendment", "89th Amendment", "91st Amendment", "42nd Amendment"],
        correctAnswer: 1,
        explanation: "89th Constitutional Amendment Act, 2003.",
        subtopic: "39.2"
    },
    {
        id: 33,
        question: "NCBC granted constitutional status by:",
        options: ["101st Amendment", "102nd Amendment", "103rd Amendment", "104th Amendment"],
        correctAnswer: 1,
        explanation: "102nd Constitutional Amendment Act, 2018.",
        subtopic: "39.2"
    },
    {
        id: 34,
        question: "Who appoints Chairperson of NCSC?",
        options: ["President", "PM", "Social Justice Minister", "Chief Justice"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "39.2"
    },
    {
        id: 35,
        question: "Reports of NCSC are submitted to:",
        options: ["Parliament", "President", "Minister", "SC/ST Welfare Committee"],
        correctAnswer: 1,
        explanation: "President (who lays it before Parliament).",
        subtopic: "39.2"
    },
    {
        id: 36,
        question: "Powers of NCSC/NCST while investigating:",
        options: ["Criminal Court", "Civil Court", "High Court", "Police"],
        correctAnswer: 1,
        explanation: "Powers of a Civil Court (summoning, discovery of documents etc).",
        subtopic: "39.2"
    },
    {
        id: 37,
        question: "Article 338B deals with:",
        options: ["NCST", "NCSC", "NCBC", "Linguistic Officer"],
        correctAnswer: 2,
        explanation: "National Commission for Backward Classes (NCBC).",
        subtopic: "39.2"
    },
    {
        id: 38,
        question: "Article 350B deals with:",
        options: ["Special Officer for Linguistic Minorities", "Official Language", "Hindi language", "None"],
        correctAnswer: 0,
        explanation: "Special Officer for Linguistic Minorities.",
        subtopic: "39.3"
    },
    {
        id: 39,
        question: "Special Officer for Linguistic Minorities is appointed by:",
        options: ["President", "Governor", "PM", "Home Minister"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "39.3"
    },
    {
        id: 40,
        question: "The first National Commission for SCs and STs (pre-split) was set up in:",
        options: ["1978", "1990", "1992", "1987"],
        correctAnswer: 1,
        explanation: "Statutory commission in 1990 (65th Amendment conferred constitutional status). 1978 was non-statutory.",
        subtopic: "39.2"
    },
    {
        id: 41,
        question: "Who determines the service conditions of NCSC members?",
        options: ["Parliament", "President", "Commission Chairman", "Minister"],
        correctAnswer: 1,
        explanation: "President.",
        subtopic: "39.2"
    },
    {
        id: 42,
        question: "Composition of NCSC?",
        options: ["Chair + Vice-Chair + 3 Members", "Chair + 4 Members", "Chair + 2 Members", "Single Member"],
        correctAnswer: 0,
        explanation: "Chairperson, Vice-Chairperson and 3 other Members.",
        subtopic: "39.2"
    },
    {
        id: 43,
        question: "NCST has separate powers regarding:",
        options: ["Minor forest produce", "Reservation", "Atrocities", "Scholarships"],
        correctAnswer: 0,
        explanation: "Relief/Rehab of displaced STs, Minor forest produce ownership rights etc.",
        subtopic: "39.2"
    },
    {
        id: 44,
        question: "Article 340 deals with appointment of:",
        options: ["Backward Classes Commission", "SC Commission", "ST Commission", "Language Commission"],
        correctAnswer: 0,
        explanation: "Commission to investigate conditions of Backward Classes (e.g. Mandal Commission).",
        subtopic: "39.2"
    },
    {
        id: 45,
        question: "Who appoints the Article 340 Commission?",
        options: ["President", "Parliament", "PM", "SC"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "39.2"
    },
    {
        id: 46,
        question: "Kaka Kalelkar Commission (1953) was associated with:",
        options: ["Backward Classes", "States Reorg", "Finance", "Center-State"],
        correctAnswer: 0,
        explanation: "First Backward Classes Commission.",
        subtopic: "39.2"
    },
    {
        id: 47,
        question: "Special Officer for Linguistic Minorities Commissioner is also called:",
        options: ["Commissioner for Linguistic Minorities", "Language Officer", "Minority Head", "None"],
        correctAnswer: 0,
        explanation: "Commissioner for Linguistic Minorities (CLM).",
        subtopic: "39.3"
    },
    {
        id: 48,
        question: "Does the Constitution specify the strength of NCSC?",
        options: ["Yes", "No, President decides", "No, Parliament decides", "Fixed at 5"],
        correctAnswer: 0,
        explanation: "Yes, 'Chairperson, Vice-Chairperson and three other Members' is mentioned in amended Art 338.",
        subtopic: "39.2"
    },
    {
        id: 49,
        question: "Tenure of NCSC members is typically:",
        options: ["3 years", "5 years", "6 years", "Pleasure"],
        correctAnswer: 0,
        explanation: "3 years.",
        subtopic: "39.2"
    },
    {
        id: 50,
        question: "Which Ministry is the nodal ministry for NCSC?",
        options: [" Ministry of Social Justice and Empowerment", "Tribal Affairs", "Home", "HRD"],
        correctAnswer: 0,
        explanation: "Ministry of Social Justice and Empowerment.",
        subtopic: "39.2"
    },
    { id: 51, question: "Nodal Ministry for NCST?", options: ["Tribal Affairs", "Social Justice", "Home", "Culture"], correctAnswer: 0, subtopic: "39.2" },
    { id: 52, question: "Nodal Ministry for NCBC?", options: ["Social Justice & Empowerment", "Home", "Minority Affairs", "Personnel"], correctAnswer: 0, subtopic: "39.2" },
    { id: 53, question: "Nodal Ministry for Linguistic Minorities?", options: ["Minority Affairs", "Home", "Education", "Culture"], correctAnswer: 0, subtopic: "39.3" },
    { id: 54, question: "Does NCSC inquire into Anglo-Indian community safeguards?", options: ["Yes", "No", "Separately", "Only if President asks"], correctAnswer: 0, subtopic: "39.2" }, // Art 338(10)
    { id: 55, question: "Can NCSC punish guilty officials?", options: ["Yes", "No", "Recommend only", "Fine only"], correctAnswer: 2, subtopic: "39.2" },
    { id: 56, question: "105th Amendment (2021) related to?", options: ["State List of OBCs", "EWS", "GST", "Women"], correctAnswer: 0, subtopic: "39.2" },
    { id: 57, question: "Indra Sawhney judgment mandated permanent statutory body for:", options: ["Backward Classes", "SC", "ST", "Women"], correctAnswer: 0, subtopic: "39.2" },
    { id: 58, question: "Article 342A deals with:", options: ["Central List of SEBCs", "State List", "SC List", "ST List"], correctAnswer: 0, subtopic: "39.2" },
    { id: 59, question: "Annual Reports of NCSC regarding a State are sent to:", options: ["Governor", "President", "CM", "Speaker"], correctAnswer: 0, subtopic: "39.2" },
    { id: 60, question: "Is NCBC recommendations binding?", options: ["No, Advisory", "Yes", "On States only", "On Centre only"], correctAnswer: 0, subtopic: "39.2" }
];

export default DAY19_MCQS;
