import { MCQ } from '../RevisionRegistry';

export const CHAPTER_50_MCQS: MCQ[] = [
    {
        id: 1,

        question: "Regarding CAG, which is strictly correct?\n1. Holds office during pleasure of President.\n2. Eligible for further office to ensure continuity.\n3. Administrative expenses charged on Consolidated Fund of India.\n4. Constitution has not prescribed qualifications.",
        options: [
            "1, 2, and 3 only",
            "3 and 4 only",
            "1 and 4 only",
            "2, 3, and 4 only"
        ],
        correctAnswer: 1,
        explanation: "1 is incorrect (Tenure security). 2 is incorrect (Ban on further office). 3 and 4 are correct.",
        difficulty: "medium"
    },
    {
        id: 2,

        question: "Regarding removal of CAG, consider:\n1. Removed by President at any time.\n2. Removed only by process identical to SC Judge.\n3. Governor can remove for state audits.\n4. Removed by simple majority.",
        options: [
            "1 only",
            "2 only",
            "3 only",
            "4 only"
        ],
        correctAnswer: 1,
        explanation: "CAG Removal requires special majority in Parliament, same as SC Judge. Governor has no power.",
        difficulty: "easy"
    },
    {
        id: 3,

        question: "CAG audits accounts related to expenditure from:",
        options: [
            "Consolidated Fund of India & States.",
            "Contingency Fund of India & States.",
            "Public Account of India & States.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "Mandate covers all these funds.",
        difficulty: "easy"
    },
    {
        id: 4,

        question: "Which is NOT one of the 3 Audit Reports submitted by CAG?",
        options: [
            "Audit report on appropriation accounts",
            "Audit report on finance accounts",
            "Audit report on PPP projects",
            "Audit report on public undertakings"
        ],
        correctAnswer: 2,
        explanation: "CAG submits reports on Appropriation, Finance, and Public Undertakings. PPP is not a constitutional category.",
        difficulty: "medium"
    },
    {
        id: 5,

        question: "Article 150 deals with:",
        options: [
            "Audit of Local Bodies.",
            "Form of accounts of Centre and States.",
            "Legal advice to Finance Minister.",
            "Directions to RBI."
        ],
        correctAnswer: 1,
        explanation: "President prescribes the form of accounts on advice of CAG (Art 150).",
        difficulty: "hard"
    },
    {
        id: 6,

        question: "What does 'Propriety Audit' imply?",
        options: [
            "Checking rules and regulations.",
            "Examining wisdom, faithfulness, and economy of expenditure.",
            "Checking authority of sanction.",
            "Verifying math."
        ],
        correctAnswer: 1,
        explanation: "Propriety appeals to 'wisdom' and 'economy' beyond just legal regularity.",
        difficulty: "medium"
    },
    {
        id: 7,

        question: "Why is 'Comptroller' a misnomer in India?",
        options: [
            "No power to audit states.",
            "No power to control issue of money; only audits after expenditure.",
            "Cannot audit secret service.",
            "Not a Cabinet member."
        ],
        correctAnswer: 1,
        explanation: "In UK, CAG controls money release. In India, he is only an Auditor.",
        difficulty: "easy"
    },
    {
        id: 8,

        question: "Match Audit Nature to Body:\n1. Direct/Total Audit\n2. Supplementary Audit\n3. Private Audit (No CAG)\n\n(a) LIC, RBI\n(b) ONGC, DVC\n(c) Central Warehousing Corp",
        options: [
            "1-(b), 2-(c), 3-(a)",
            "1-(a), 2-(b), 3-(c)",
            "1-(c), 2-(a), 3-(b)",
            "1-(b), 2-(a), 3-(c)"
        ],
        correctAnswer: 0,
        explanation: "ONGC = Total; CWC = Supplementary; RBI/LIC = Private only.",
        difficulty: "hard"
    },
    {
        id: 9,

        question: "Limitation regarding 'Secret Service Expenditure':",
        options: [
            "No authority to audit at all.",
            "Cannot call for particulars; must accept certificate.",
            "needs CJI permission.",
            "Audited by Parliament committee."
        ],
        correctAnswer: 1,
        explanation: "CAG cannot ask for details of how secret service money was spent, accepts executive certificate.",
        difficulty: "medium"
    }
];

export default CHAPTER_50_MCQS;
