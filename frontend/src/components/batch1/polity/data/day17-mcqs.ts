
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

export const DAY17_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 9: DPSP (30 Questions)
    // ==========================================
    {
        id: 1,
        question: "The Directive Principles of State Policy are enumerated in which Part of the Constitution?",
        options: ["Part III", "Part IV", "Part V", "Part IVA"],
        correctAnswer: 1,
        explanation: "Part IV (Articles 36 to 51).",
        subtopic: "9.1"
    },
    {
        id: 2,
        question: "The concept of DPSP was borrowed from the constitution of:",
        options: ["USA", "Canada", "Ireland", "USSR"],
        correctAnswer: 2,
        explanation: "Ireland (Irish Constitution), which borrowed it from Spain.",
        subtopic: "9.1"
    },
    {
        id: 3,
        question: "Article 40 organizes:",
        options: ["Agriculture", "Village Panchayats", "Uniform Civil Code", "Judiciary"],
        correctAnswer: 1,
        explanation: "Organization of Village Panchayats.",
        subtopic: "9.2"
    },
    {
        id: 4,
        question: "Which of the following is NOT a Gandhian Principle?",
        options: ["Organization of Village Panchayats", "Promotion of Cottage Industries", "Uniform Civil Code", "Prohibition of intoxicating drinks"],
        correctAnswer: 2,
        explanation: "Uniform Civil Code (Art 44) is a Liberal-Intellectual Principle.",
        subtopic: "9.2"
    },
    {
        id: 5,
        question: "Article 39A (Equal Justice and Free Legal Aid) was added by:",
        options: ["42nd Amendment", "44th Amendment", "86th Amendment", "97th Amendment"],
        correctAnswer: 0,
        explanation: "42nd Amendment Act, 1976.",
        subtopic: "9.1"
    },
    {
        id: 6,
        question: "Which Article deals with Uniform Civil Code?",
        options: ["Article 44", "Article 45", "Article 43", "Article 46"],
        correctAnswer: 0,
        explanation: "Article 44.",
        subtopic: "9.2"
    },
    {
        id: 7,
        question: "DPSP are:",
        options: ["Justiciable", "Non-justiciable", "Legally enforceable", "None of these"],
        correctAnswer: 1,
        explanation: "Non-justiciable (Article 37).",
        subtopic: "9.1"
    },
    {
        id: 8,
        question: "In which case did SC rule that 'Indian Constitution is founded on the bedrock of balance between FR and DPSP'?",
        options: ["Kesavananda Bharati", "Minerva Mills", "Golaknath", "Maneka Gandhi"],
        correctAnswer: 1,
        explanation: "Minerva Mills case (1980).",
        subtopic: "9.4"
    },
    {
        id: 9,
        question: "Article 51 promotes:",
        options: ["International Peace and Security", "Internal Security", "Trade", "Human Rights"],
        correctAnswer: 0,
        explanation: "Promotion of international peace and security.",
        subtopic: "9.2"
    },
    {
        id: 10,
        question: "Which Amendment added provision for 'Promotion of Co-operative Societies' (Art 43B)?",
        options: ["97th Amendment", "86th Amendment", "73rd Amendment", "74th Amendment"],
        correctAnswer: 0,
        explanation: "97th Amendment Act, 2011.",
        subtopic: "9.1"
    },
    {
        id: 11,
        question: "Protection of monuments and places of national importance is in Article:",
        options: ["49", "48", "48A", "50"],
        correctAnswer: 0,
        explanation: "Article 49.",
        subtopic: "9.2"
    },
    {
        id: 12,
        question: "Article 50 deals with:",
        options: ["Separation of Judiciary from Executive", "Separation of Power", "Check and Balance", "Independence of Judiciary"],
        correctAnswer: 0,
        explanation: "Separation of Judiciary from Executive in public services of the State.",
        subtopic: "9.2"
    },
    {
        id: 13,
        question: "Who described DPSP as the 'Novel Feature' of Indian Constitution?",
        options: ["B.R. Ambedkar", "Granville Austin", "K.T. Shah", "B.N. Rau"],
        correctAnswer: 0,
        explanation: "Dr. B.R. Ambedkar.",
        subtopic: "9.1"
    },
    {
        id: 14,
        question: "Article 45 originally dealt with:",
        options: ["Free and compulsory education for all children until 14 years", "Early childhood care", "Minority education", "Higher education"],
        correctAnswer: 0,
        explanation: "Original Art 45 provided for free/compulsory education up to 14 years. After 86th Amd (Art 21A), Art 45 now deals with Early Childhood Care (0-6 years).",
        subtopic: "9.3"
    },
    {
        id: 15,
        question: "Provision for Maternity Relief is in Article:",
        options: ["41", "42", "43", "44"],
        correctAnswer: 1,
        explanation: "Article 42 (Just and humane conditions of work and maternity relief).",
        subtopic: "9.2"
    },
    {
        id: 16,
        question: "Economic Justice as an objective is provided in:",
        options: ["Preamble and FR", "Preamble and DPSP", "FR and DPSP", "Preamble only"],
        correctAnswer: 1,
        explanation: "Preamble and DPSP.",
        subtopic: "9.1"
    },
    {
        id: 17,
        question: "Article 48A (Protection of Environment) was added by:",
        options: ["42nd Amendment", "44th Amendment", "86th Amendment", "91st Amendment"],
        correctAnswer: 0,
        explanation: "42nd Amendment Act, 1976.",
        subtopic: "9.1"
    },
    {
        id: 18,
        question: "Which Article deals with Living Wage for workers?",
        options: ["43", "41", "42", "43A"],
        correctAnswer: 0,
        explanation: "Article 43.",
        subtopic: "9.2"
    },
    {
        id: 19,
        question: "To raise the level of nutrition and standard of living is Article:",
        options: ["47", "46", "45", "48"],
        correctAnswer: 0,
        explanation: "Article 47.",
        subtopic: "9.2"
    },
    {
        id: 20,
        question: "DPSP are similar to the 'Instrument of Instructions' under:",
        options: ["GOI Act 1935", "GOI Act 1919", "Indian Councils Act 1909", "Independence Act 1947"],
        correctAnswer: 0,
        explanation: "GOI Act 1935.",
        subtopic: "9.1"
    },

    // ==========================================
    // CHAPTER 10: FUNDAMENTAL DUTIES (20 Questions)
    // ==========================================
    {
        id: 21,
        question: "Fundamental Duties were incorporated in the Constitution in:",
        options: ["1975", "1976", "1978", "1979"],
        correctAnswer: 1,
        explanation: "1976 (42nd Amendment Act).",
        subtopic: "10.1"
    },
    {
        id: 22,
        question: "Fundamental Duties are contained in:",
        options: ["Part IV", "Part IVA", "Part III", "Part V"],
        correctAnswer: 1,
        explanation: "Part IVA, Article 51A.",
        subtopic: "10.1"
    },
    {
        id: 23,
        question: "The 11th Fundamental Duty (Education) was added by:",
        options: ["86th Amendment", "42nd Amendment", "44th Amendment", "89th Amendment"],
        correctAnswer: 0,
        explanation: "86th Amendment Act, 2002.",
        subtopic: "10.1"
    },
    {
        id: 24,
        question: "Which committee recommended Fundamental Duties?",
        options: ["Verma Committee", "Swaran Singh Committee", "Sarkaria Commission", "Balwant Rai Mehta Committee"],
        correctAnswer: 1,
        explanation: "Swaran Singh Committee (1976).",
        subtopic: "10.1"
    },
    {
        id: 25,
        question: "Which of the following is NOT a Fundamental Duty?",
        options: ["To respect National Flag", "To defend country", "To vote in elections", "To safeguard public property"],
        correctAnswer: 2,
        explanation: "Voting is not a Fundamental Duty (Though recommended).",
        subtopic: "10.1"
    },
    {
        id: 26,
        question: "The duty to 'develop scientific temper' is mentioned in:",
        options: ["Art 51A(h)", "Art 51A(g)", "Art 51A(a)", "Art 51A(b)"],
        correctAnswer: 0,
        explanation: "Article 51A(h).",
        subtopic: "10.2"
    },
    {
        id: 27,
        question: "Fundamental Duties are applicable to:",
        options: ["Citizens only", "Foreigners only", "Both", "State only"],
        correctAnswer: 0,
        explanation: "Fundamental Duties are confined to Citizens only.",
        subtopic: "10.2"
    },
    {
        id: 28,
        question: "To protect and improve the natural environment is a:",
        options: ["DPSP only", "Fundamental Duty only", "Both DPSP and FD", "Consumer Right"],
        correctAnswer: 2,
        explanation: "It is both a DPSP (Art 48A) and a Fundamental Duty (Art 51A(g)).",
        subtopic: "10.2"
    },
    {
        id: 29,
        question: "Fundamental Duties were inspired by which Constitution?",
        options: ["USA", "USSR", "Japan", "Germany"],
        correctAnswer: 1,
        explanation: "USSR (Soviet Union).",
        subtopic: "10.1"
    },
    {
        id: 30,
        question: "Verma Committee (1999) was appointed to?",
        options: ["Identify legal provisions for FDs", "Suggest new FDs", "Review DPSP", "Review Preamble"],
        correctAnswer: 0,
        explanation: "Identify existence of legal provisions for implementation of Fundamental Duties.",
        subtopic: "10.3"
    },
    {
        id: 31,
        question: "Is paying taxes a Fundamental Duty in India?",
        options: ["Yes", "No", "Under Article 265", "Only for rich"],
        correctAnswer: 1,
        explanation: "No. Swaran Singh Committee recommended it, but it was not accepted.",
        subtopic: "10.1"
    },
    {
        id: 32,
        question: "Protecting the sovereignty, unity and integrity of India is Duty:",
        options: ["51A(c)", "51A(a)", "51A(b)", "51A(d)"],
        correctAnswer: 0,
        explanation: "Article 51A(c).",
        subtopic: "10.2"
    },
    {
        id: 33,
        question: "To strive towards excellence in all spheres of individual and collective activity is Duty:",
        options: ["51A(j)", "51A(i)", "51A(h)", "51A(k)"],
        correctAnswer: 0,
        explanation: "Article 51A(j).",
        subtopic: "10.2"
    },
    {
        id: 34,
        question: "Direct enforcement of Fundamental Duties is available via:",
        options: ["Writ", "Suit", "None", "Police"],
        correctAnswer: 2,
        explanation: "No direct enforcement in Constitution.",
        subtopic: "10.2"
    },
    {
        id: 35,
        question: "Prevention of Insults to National Honour Act was passed in:",
        options: ["1971", "1976", "1950", "1980"],
        correctAnswer: 0,
        explanation: "1971. (Identified by Verma Committee).",
        subtopic: "10.3"
    },
    {
        id: 36,
        question: "To cherish and follow the noble ideals which inspired our national struggle for freedom is:",
        options: ["Legal Duty", "Ethical Duty", "Fundamental Duty", "Political Duty"],
        correctAnswer: 2,
        explanation: "Fundamental Duty (Art 51A(b)).",
        subtopic: "10.2"
    },
    {
        id: 37,
        question: "How many Fundamental Duties are there currently?",
        options: ["10", "11", "12", "9"],
        correctAnswer: 1,
        explanation: "11.",
        subtopic: "10.1"
    },
    {
        id: 38,
        question: "Fundamental Duties serve as a warning against:",
        options: ["Anti-social activities", "Govt power", "Judicial overreach", "Police"],
        correctAnswer: 0,
        explanation: "Warning to citizens against anti-national and anti-social activities.",
        subtopic: "10.2"
    },
    {
        id: 39,
        question: "Which country represents the only democratic constitution with list of duties (besides India)?",
        options: ["Japan", "USA", "UK", "Canada"],
        correctAnswer: 0,
        explanation: "Japan. (Most western democracies don't have duties).",
        subtopic: "10.1"
    },
    {
        id: 40,
        question: "Civil rights are given to specific:",
        options: ["Citizens only", "Persons (Citizens + Foreigners)", "Minorities", "Govt"],
        correctAnswer: 0,
        explanation: "Duties are correlative to Rights. Fundamental Duties refer to obligations of Citizens.",
        subtopic: "10.2"
    },
    // Random / Mixed Revisions (41-60)
    { id: 41, question: "Uniform Civil Code state?", options: ["Goa", "Kerala", "Sikkim", "Nagaland"], correctAnswer: 0, subtopic: "9.2" },
    { id: 42, question: "Panchayat Article?", options: ["40", "41", "42", "43"], correctAnswer: 0, subtopic: "9.2" },
    { id: 43, question: "Separation of Judiciary Article?", options: ["50", "49", "51", "48"], correctAnswer: 0, subtopic: "9.2" },
    { id: 44, question: "International Peace Article?", options: ["51", "50", "49", "48"], correctAnswer: 0, subtopic: "9.2" },
    { id: 45, question: "Right to Work Article?", options: ["41", "42", "43", "40"], correctAnswer: 0, subtopic: "9.2" },
    { id: 46, question: "Maternity Relief Article?", options: ["42", "41", "43", "44"], correctAnswer: 0, subtopic: "9.2" },
    { id: 47, question: "Living Wage Article?", options: ["43", "42", "41", "44"], correctAnswer: 0, subtopic: "9.2" },
    { id: 48, question: "UCC Article?", options: ["44", "43", "42", "41"], correctAnswer: 0, subtopic: "9.2" },
    { id: 49, question: "Compulsory Education (Early Child) Article?", options: ["45", "44", "46", "47"], correctAnswer: 0, subtopic: "9.2" },
    { id: 50, question: "SC/ST Interests Article?", options: ["46", "45", "47", "48"], correctAnswer: 0, subtopic: "9.2" },
    { id: 51, question: "Public Health Article?", options: ["47", "46", "48", "49"], correctAnswer: 0, subtopic: "9.2" },
    { id: 52, question: "Agriculture & Animal Husbandry Article?", options: ["48", "47", "49", "50"], correctAnswer: 0, subtopic: "9.2" },
    { id: 53, question: "Environment forest wildlife Article?", options: ["48A", "48", "47", "46"], correctAnswer: 0, subtopic: "9.2" },
    { id: 54, question: "Monuments binding Article?", options: ["49", "48", "50", "51"], correctAnswer: 0, subtopic: "9.2" },
    { id: 55, question: "Participation of workers in management Article?", options: ["43A", "43", "42", "41"], correctAnswer: 0, subtopic: "9.2" },
    { id: 56, question: "Cooperative Societies Article?", options: ["43B", "43A", "43", "40"], correctAnswer: 0, subtopic: "9.2" },
    { id: 57, question: "Minerva Mills case year?", options: ["1980", "1973", "1976", "1978"], correctAnswer: 0, subtopic: "9.4" },
    { id: 58, question: "Champakam Dorairajan case year?", options: ["1951", "1950", "1952", "1960"], correctAnswer: 0, subtopic: "9.4" },
    { id: 59, question: "Golaknath Case year?", options: ["1967", "1973", "1951", "1980"], correctAnswer: 0, subtopic: "9.4" },
    { id: 60, question: "Swaran Singh Committee year?", options: ["1976", "1975", "1974", "1978"], correctAnswer: 0, subtopic: "10.1" }
];

export default DAY17_MCQS;
