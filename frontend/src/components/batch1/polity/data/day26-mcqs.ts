
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

export const DAY26_MCQS: MCQ[] = [
    // ==========================================
    // LOKPAL (30 Questions)
    // ==========================================
    {
        id: 1,
        question: "Lokpal and Lokayuktas Act was passed in:",
        options: ["2013", "2011", "2014", "2005"],
        correctAnswer: 0,
        explanation: "2013.",
        subtopic: "62.1"
    },
    {
        id: 2,
        question: "Total members in Lokpal excluding Chairperson?",
        options: ["Max 8", "Max 4", "Max 10", "Max 6"],
        correctAnswer: 0,
        explanation: "Maximum 8 members.",
        subtopic: "62.1"
    },
    {
        id: 3,
        question: "Percentage of Judicial Members in Lokpal?",
        options: ["Minimum 50%", "Maximum 50%", "Minimum 33%", "No limit"],
        correctAnswer: 0,
        explanation: "Not less than 50% of the members shall be Judicial Members.",
        subtopic: "62.1"
    },
    {
        id: 4,
        question: "Who is the Chairperson of the Lokpal Selection Committee?",
        options: ["President", "Prime Minister", "CJI", "Speaker"],
        correctAnswer: 1,
        explanation: "Prime Minister.",
        subtopic: "62.1"
    },
    {
        id: 5,
        question: "Eminent Jurist in Selection Committee is nominated by?",
        options: ["President", "PM", "CJI", "Committee itself"],
        correctAnswer: 0,
        explanation: "President (on recommendation of the other 4 members).",
        subtopic: "62.1"
    },
    {
        id: 6,
        question: "Term of Lokpal Chairperson/Members?",
        options: ["5 years / 70 age", "5 years / 65 age", "6 years / 65 age", "3 years / 70 age"],
        correctAnswer: 0,
        explanation: "5 years or 70 years of age.",
        subtopic: "62.1"
    },
    {
        id: 7,
        question: "Can Lokpal investigate PM?",
        options: ["Yes, with exceptions", "No, never", "Only after demission", "Only personal matters"],
        correctAnswer: 0,
        explanation: "Yes, except matters relating to international relations, external and internal security, public order, atomic energy and space.",
        subtopic: "62.2"
    },
    {
        id: 8,
        question: "To investigate PM, how much majority of Lokpal bench is needed?",
        options: ["2/3rd", "Simple Majority", "3/4th", "Unanimous"],
        correctAnswer: 0,
        explanation: "At least two-thirds of the members of the Lokpal must approve such inquiry.",
        subtopic: "62.2"
    },
    {
        id: 9,
        question: "Who removes Lokpal Chairperson?",
        options: ["President", "Parliament", "Supreme Court", "Committee"],
        correctAnswer: 0,
        explanation: "President (after SC inquiry on reference by President).",
        subtopic: "62.1"
    },
    {
        id: 10,
        question: "Reference for removal can be made by President on petition signed by?",
        options: ["At least 100 MPs", "PM", "Cabinet", "Any citizen"],
        correctAnswer: 0,
        explanation: "At least 100 Members of Parliament.",
        subtopic: "62.1"
    },
    {
        id: 11,
        question: "Is there reservation in Lokpal membership?",
        options: ["Yes, min 50% for SC/ST/OBC/Women/Minorities", "No", "Only for Women", "Only for SC/ST"],
        correctAnswer: 0,
        explanation: "Minimum 50% of members shall be from amongst SC, ST, OBC, Minorities and Women.",
        subtopic: "62.1"
    },
    {
        id: 12,
        question: "Search Committee to assist Selection Committee has how many members?",
        options: ["At least 7", "At least 5", "Exactly 3", "Only 1"],
        correctAnswer: 0,
        explanation: "At least 7 members.",
        subtopic: "62.1"
    },
    {
        id: 13,
        question: "Salary of Lokpal Chairperson is equivalent to?",
        options: ["CJI", "SC Judge", "Cabinet Secretary", "PM"],
        correctAnswer: 0,
        explanation: "Chief Justice of India.",
        subtopic: "62.1"
    },
    {
        id: 14,
        question: "Jurisdiction of Lokpal covers?",
        options: ["Group A, B, C and D officers", "Only Group A", "Only Ministers", "Only MP"],
        correctAnswer: 0,
        explanation: "Yes, it covers all categories of public servants (Group A, B, C, D).",
        subtopic: "62.2"
    },
    {
        id: 15,
        question: "Can Lokpal take suo motu cognizance?",
        options: ["No", "Yes", "In rare cases", "If directed by Court"],
        correctAnswer: 0,
        explanation: "Act does not explicitly empower suo motu. It acts on 'complaint'.",
        subtopic: "62.2"
    },
    {
        id: 16,
        question: "First Lokpal of India?",
        options: ["P.C. Ghose", "Dipak Misra", "Ranjan Gogoi", "H.L. Dattu"],
        correctAnswer: 0,
        explanation: "Pinaki Chandra Ghose.",
        subtopic: "62.1"
    },
    {
        id: 17,
        question: "Time limit for preliminary inquiry by Lokpal?",
        options: ["90 days (extendable to 180)", "30 days", "60 days", "1 year"],
        correctAnswer: 0,
        explanation: "90 days (extendable by another 90 days).",
        subtopic: "62.2"
    },
    {
        id: 18,
        question: "Lokpal has powers of?",
        options: ["Civil Court", "Criminal Court", "High Court", "Police Station"],
        correctAnswer: 0,
        explanation: "Civil Court.",
        subtopic: "62.2"
    },
    {
        id: 19,
        question: "Can Lokpal attach property?",
        options: ["Yes, provisionally", "No", "Only after conviction", "Only cash"],
        correctAnswer: 0,
        explanation: "Yes, power to provisionally attach assets of corrupt public servants.",
        subtopic: "62.2"
    },
    {
        id: 20,
        question: "Does Lokpal have its own Inquiry Wing?",
        options: ["Yes", "No", "Uses CBI only", "Uses Police only"],
        correctAnswer: 0,
        explanation: "Yes, Act mandates Inquiry Wing and Prosecution Wing.",
        subtopic: "62.2"
    },
    { id: 21, question: "Who bears expenses of Lokpal?", options: ["Consolidated Fund of India", "Contingency Fund", "Dept of Personnel", "Ministry of Law"], correctAnswer: 0, subtopic: "62.1" },
    { id: 22, question: "Can Lokpal punish for false complaints?", options: ["Yes", "No", "Only Court can", "Only fine"], correctAnswer: 0, subtopic: "62.2" }, // Yes, imprisonment up to 1 year and fine.
    { id: 23, question: "Institutions fully funded by Govt under Lokpal?", options: ["Yes", "No", "Only if notified", "Partially"], correctAnswer: 0, subtopic: "62.2" },
    { id: 24, question: "NGOs receiving foreign donation > 10 Lakhs under Lokpal?", options: ["Yes", "No", "Only > 1 Cr", "Not covered"], correctAnswer: 0, subtopic: "62.2" },
    { id: 25, question: "Is Lokpal a constitutional body?", options: ["No", "Yes", "Quasi-judicial", "None"], correctAnswer: 0, subtopic: "62.1" },
    { id: 26, question: "Can Lokpal transfer CBI officers investigating a case?", options: ["No, without Lokpal approval", "Yes", "Govt power", "CBI Director power"], correctAnswer: 0, subtopic: "62.2" }, // Investigating officers cannot be transferred without Lokpal approval.
    { id: 27, question: "Term 'Ombudsman' originated in?", options: ["Sweden", "Norway", "UK", "France"], correctAnswer: 0, subtopic: "62.1" }, // 1809
    { id: 28, question: "First ARC (1966) recommended?", options: ["Lokpal & Lokayukta", "CBI", "CVC", "NHRC"], correctAnswer: 0, subtopic: "62.1" },
    { id: 29, question: "Does Lokpal cover Judiciary?", options: ["No", "Yes", "Only Lower Judiciary", "Only HC"], correctAnswer: 0, subtopic: "62.2" },
    { id: 30, question: "Is Armed Forces under Lokpal?", options: ["No", "Yes", "Partially", "Only corruption"], correctAnswer: 0, subtopic: "62.2" },

    // ==========================================
    // LOKAYUKTA (30 Questions)
    // ==========================================
    {
        id: 31,
        question: "Which state passed Lokayukta Act first?",
        options: ["Odisha", "Maharashtra", "Rajasthan", "UP"],
        correctAnswer: 0,
        explanation: "Odisha (1970). But Maharashtra established it first in 1971.",
        subtopic: "62.3"
    },
    {
        id: 32,
        question: "Which state established Lokayukta first?",
        options: ["Maharashtra", "Odisha", "Bihar", "Karnataka"],
        correctAnswer: 0,
        explanation: "Maharashtra (1971).",
        subtopic: "62.3"
    },
    {
        id: 33,
        question: "Lokayukta is appointed by?",
        options: ["Governor", "CM", "President", "Chief Justice of HC"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "62.3"
    },
    {
        id: 34,
        question: "Appointment usually requires consultation with?",
        options: ["CJ of HC & Leader of Opposition", "CM only", "President", "Speaker"],
        correctAnswer: 0,
        explanation: "Chief Justice of High Court and Leader of Opposition in State Assembly.",
        subtopic: "62.3"
    },
    {
        id: 35,
        question: "Lokpal Act 2013 mandates states to establish Lokayukta within?",
        options: ["1 year", "6 months", "2 years", "3 years"],
        correctAnswer: 0,
        explanation: "1 year from commencement of Act (Section 63).",
        subtopic: "62.3"
    },
    {
        id: 36,
        question: "Does Lokayukta jurisdiction include CM?",
        options: ["Varies by State", "Yes always", "No never", "Only in UTs"],
        correctAnswer: 0,
        explanation: "Varies. Included in HP, AP, MP, Gujarat. Excluded in Maharashtra, Rajasthan, UP.",
        subtopic: "62.3"
    },
    {
        id: 37,
        question: "Tenure of Lokayukta consists of?",
        options: ["5 years / 65 or 70 (varies)", "Fixed 5 years", "Fixed 6 years", "No fixed term"],
        correctAnswer: 0,
        explanation: "Varies by state acts. Usually 5 years or 65/70 years.",
        subtopic: "62.3"
    },
    {
        id: 38,
        question: "Is Up-Lokayukta appointed in states?",
        options: ["Yes", "No", "Lokayukta decides", "Only in large states"],
        correctAnswer: 0,
        explanation: "Yes, many states have Upa-Lokayuktas.",
        subtopic: "62.3"
    },
    {
        id: 39,
        question: "Lokayukta presents annual report to?",
        options: ["Governor", "CM", "State Legislature", "High Court"],
        correctAnswer: 0,
        explanation: "Governor (who acts on advice of State Ministers? No, who lays it before state legislature).",
        subtopic: "62.3"
    },
    {
        id: 40,
        question: "Are recommendations of Lokayukta binding?",
        options: ["Advisory usually", "Binding", "Mandatory", "Final"],
        correctAnswer: 0,
        explanation: "Advisory/Recommendatory in most states.",
        subtopic: "62.3"
    },
    { id: 41, question: "Karnataka Lokayukta is considered?", options: ["Very Strong", "Weak", "Advisory", "Defunct"], correctAnswer: 0, subtopic: "62.3" },
    { id: 42, question: "Can Lokayukta take suo motu action?", options: ["Varies (Karnataka/UP yes)", "No", "Never", "Only on referral"], correctAnswer: 0, subtopic: "62.3" },
    { id: 43, question: "Removal of Lokayukta generally by?", options: ["Governor/President (varies)", "CM", "HC", "Speaker"], correctAnswer: 0, subtopic: "62.3" },
    { id: 44, question: "Qualification for Lokayukta generally?", options: ["Judicial background", "IAS", "Politician", "Social Worker"], correctAnswer: 0, subtopic: "62.3" },
    { id: 45, question: "Does Lokayukta cover Ministers?", options: ["Yes (mostly)", "No", "Only Cabinet", "Only Junior"], correctAnswer: 0, subtopic: "62.3" },
    { id: 46, question: "Can Lokayukta investigate MLAs?", options: ["Yes (mostly)", "No", "Only in session", "With Speaker permission"], correctAnswer: 0, subtopic: "62.3" },
    { id: 47, question: "State with no Lokayukta Act yet?", options: ["Available in most now", "Tamil Nadu", "Kerala", "None"], correctAnswer: 0, subtopic: "62.3" }, // Most have passed.
    { id: 48, question: "Is Lokayukta eligible for reappointment?", options: ["Generally No", "Yes", "Once", "Twice"], correctAnswer: 0, subtopic: "62.3" },
    { id: 49, question: "Lokayukta deals with?", options: ["Corruption and Maladministration", "Only Corruption", "Only Grievance", "None"], correctAnswer: 0, subtopic: "62.3" },
    { id: 50, question: "Can Lokayukta initiate prosecution?", options: ["Yes (in some states)", "No", "Only Police", "Only CBI"], correctAnswer: 0, subtopic: "62.3" },
    { id: 51, question: "Does Lokayukta have independent investigation machinery?", options: ["Varies (Karnataka yes)", "No", "Depends on Police", "Uses CBI"], correctAnswer: 0, subtopic: "62.3" },
    { id: 52, question: "Lokayukta salary charges on?", options: ["Consolidated Fund of State", "Union Fund", "Voted", "Grant"], correctAnswer: 0, subtopic: "62.3" },
    { id: 53, question: "Does Act 2013 prescribe structure of Lokayukta?", options: ["No, left to States", "Yes", "Partially", "Only tenure"], correctAnswer: 0, subtopic: "62.3" },
    { id: 54, question: "Who nominates Governor for Lokayukta advice?", options: ["Council of Ministers", "President", "PM", "None"], correctAnswer: 0, subtopic: "62.3" },
    { id: 55, question: "Can Lokayukta investigate former CMs?", options: ["Yes", "No", "Only sitting", "Only if permitted"], correctAnswer: 0, subtopic: "62.3" },
    { id: 56, question: "Judicial Members in Lokpal Selection Committee?", options: ["CJI or his nominee", "AG", "Law Minister", "None"], correctAnswer: 0, subtopic: "62.1" },
    { id: 57, question: "Lokpal Bill first introduced in?", options: ["1968", "1971", "1980", "2011"], correctAnswer: 0, subtopic: "62.1" },
    { id: 58, question: "Term 'Lokpal' coined by?", options: ["L.M. Singhvi", "Ambedkar", "Nehru", "Gandhi"], correctAnswer: 0, subtopic: "62.1" },
    { id: 59, question: "Are local bodies under Lokayukta?", options: ["Yes (mostly)", "No", "Only Mayors", "Only CEOs"], correctAnswer: 0, subtopic: "62.3" },
    { id: 60, question: "Is Lokpal a multi-member body?", options: ["Yes", "No", "Single", "Double"], correctAnswer: 0, subtopic: "62.1" }
];

export default DAY26_MCQS;
