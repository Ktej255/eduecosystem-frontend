import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch69-l1-q1",
        "question": "Which country is known for having an",
        "options": ["USA.","United Kingdom (UK).","Japan.","Canada."],
        "correctAnswerIndex": 1,
        "explanation": "The UK constitution is not codified into a single document."
    },
    {
        "id": "ch69-l1-q2",
        "question": "The concept of",
        "options": ["UK.","USA.","Canada.","Japan."],
        "correctAnswerIndex": 2,
        "explanation": "India adopted the"
    },
    {
        "id": "ch69-l1-q3",
        "question": "Which country",
        "options": ["UK.","USA (1789).","France.","India."],
        "correctAnswerIndex": 1,
        "explanation": "The US Constitution set the template for written democratic constitutions."
    },
    {
        "id": "ch69-l1-q4",
        "question": "The",
        "options": ["UK.","USA.","India.","Japan."],
        "correctAnswerIndex": 1,
        "explanation": "The US system creates a sharp division between the Executive, Legislature, and Judiciary."
    },
    {
        "id": "ch69-l1-q5",
        "question": "In the UK, which body is considered",
        "options": ["The Monarch.","The Supreme Court.","The Parliament.","The Prime Minister."],
        "correctAnswerIndex": 2,
        "explanation": "Parliamentary Sovereignty is a bedrock principle of the UK system."
    },
    {
        "id": "ch69-l1-q6",
        "question": "Which country has a",
        "options": ["USA.","UK.","France.","Japan."],
        "correctAnswerIndex": 2,
        "explanation": "The 1958 Constitution of the Fifth Republic created this hybrid model."
    },
    {
        "id": "ch69-l1-q7",
        "question": "The",
        "options": ["Germany.","Japan.","Canada.","France."],
        "correctAnswerIndex": 0,
        "explanation": "Germany"
    },
    {
        "id": "ch69-l1-q8",
        "question": "Which country",
        "options": ["Germany.","Japan.","Canada.","USA."],
        "correctAnswerIndex": 1,
        "explanation": "Japan"
    },
    {
        "id": "ch69-l1-q9",
        "question": "The",
        "options": ["USA.","United Kingdom.","France.","Japan."],
        "correctAnswerIndex": 1,
        "explanation": "It limited the power of the King and established the Rule of Law."
    },
    {
        "id": "ch69-l1-q10",
        "question": "Which country has a",
        "options": ["UK.","Japan.","USA.","Canada."],
        "correctAnswerIndex": 2,
        "explanation": "In the US, person is a citizen of both their state and the nation."
    },
    {
        "id": "ch69-l1-q11",
        "question": "Wait. Which country",
        "options": ["Canada.","UK.","France.","USA."],
        "correctAnswerIndex": 1,
        "explanation": "The House of Lords consists of life peers, bishops, and hereditary peers."
    },
    {
        "id": "ch69-l1-q12",
        "question": "The",
        "options": ["UK.","USA.","France (Declaration of Rights).","Germany."],
        "correctAnswerIndex": 1,
        "explanation": "The first 10 amendments to the US constitution form the Bill of Rights."
    },
    {
        "id": "ch69-l1-q13",
        "question": "In France, the",
        "options": ["Declaring war.","Judging the","of laws before they are promulgated.","Appointing the PM.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It performs a"
    },
    {
        "id": "ch69-l1-q14",
        "question": "The",
        "options": ["Germany.","Japan.","Canada.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Japan"
    },
    {
        "id": "ch69-l1-q15",
        "question": "Which country",
        "options": ["USA.","France.","India.","Canada."],
        "correctAnswerIndex": 1,
        "explanation": "French secularism involves absolute separation and no public display of religion."
    },
    {
        "id": "ch69-l1-q16",
        "question": "The",
        "options": ["Japan.","Germany.","France.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Bundestag is the lower house (direct) and Bundesrat (representation of states)."
    },
    {
        "id": "ch69-l1-q17",
        "question": "Wait. Which country is a",
        "options": ["USA.","France.","Canada.","Both 2 and 3."],
        "correctAnswerIndex": 2,
        "explanation": "Canada is a Commonwealth realm and recognizes the British monarch as the Head of State."
    },
    {
        "id": "ch69-l1-q18",
        "question": "The",
        "options": ["UK.","USA.","France.","India."],
        "correctAnswerIndex": 1,
        "explanation": "The US President has pocket veto and suspensive veto powers."
    },
    {
        "id": "ch69-l1-q19",
        "question": "In which country can the",
        "options": ["USA.","India.","UK.","Canada."],
        "correctAnswerIndex": 0,
        "explanation": "The US Senate has equal power with the House of Representatives in most matters, unlike the Rajya Sabha or House of Lords."
    },
    {
        "id": "ch69-l1-q20",
        "question": "The",
        "options": ["China.","Japan.","South Korea.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It was replaced by the modern democratic constitution in 1947."
    },
    {
        "id": "ch69-l1-q21",
        "question": "Which country follows a",
        "options": ["UK.","USA.","Germany.","Canada."],
        "correctAnswerIndex": 1,
        "explanation": "The US system prioritizes"
    },
    {
        "id": "ch69-l1-q22",
        "question": "Wait. Which country",
        "options": ["UK.","France.","India.","USA."],
        "correctAnswerIndex": 1,
        "explanation": "France uses referendums for major policy changes or constitutional amendments."
    },
    {
        "id": "ch69-l1-q23",
        "question": "The",
        "options": ["Germany.","Japan.","Canada.","USA."],
        "correctAnswerIndex": 0,
        "explanation": "The Federal Chancellor of Germany is equivalent to a Prime Minister."
    },
    {
        "id": "ch69-l1-q24",
        "question": "Which country has a",
        "options": ["USA.","UK.","Actually, all major powers mentioned in this chapter (UK, USA, France, Japan, Germany, Canada) have BICAMERAL parliaments.","India."],
        "correctAnswerIndex": 2,
        "explanation": "Bicameralism is the standard for major world democracies."
    },
    {
        "id": "ch69-l1-q25",
        "question": "The",
        "options": ["Australia.","Canada.","New Zealand.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Prior to this, Canada had to request the UK parliament for certain amendments."
    },
    {
        "id": "ch69-l1-q26",
        "question": "The",
        "options": ["USA.","United Kingdom.","France.","None."],
        "correctAnswerIndex": 1,
        "explanation": "UK laws must be general and apply equally to all citizens including the state."
    },
    {
        "id": "ch69-l1-q27",
        "question": "Wait. Which country",
        "options": ["USA.","India.","France.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "This is a common feature in both Presidential and Parliamentary systems."
    },
    {
        "id": "ch69-l1-q28",
        "question": "Which country uses a",
        "options": ["USA.","UK.","Germany.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Germany balances free market with strong social protections."
    },
    {
        "id": "ch69-l1-q29",
        "question": "The",
        "options": ["God of Japan.","Symbol of the State and the Unity of the People.","Head of the Army.","Chief Justice."],
        "correctAnswerIndex": 1,
        "explanation": "The Emperor has no"
    },
    {
        "id": "ch69-l1-q30",
        "question": "Which country follows the",
        "options": ["UK.","USA.","Canada.","Both 1 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "Canada, being a former colony, adopted the British Westminster model."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch69-l2-q1",
        "question": "The UK constitution is often described as",
        "options": ["There are no laws in the UK.","The laws of the constitution are not separate from ordinary laws and there is no special","process (Flexible constitution).","The King can change any law.","None."],
        "correctAnswerIndex": 1,
        "explanation": "A simple act of parliament can change the"
    },
    {
        "id": "ch69-l2-q2",
        "question": "Assertion (A): The US Senate is more powerful than the Indian Rajya Sabha.\\nReason (R): The US Senate has equal powers with the House of Representatives in passing money bills and also has exclusive powers like confirming treaties and high appointments.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The US Senate is widely considered the most powerful"
    },
    {
        "id": "ch69-l2-q3",
        "question": "In France, the",
        "options": ["President and PM living in the same house.","President and the majority in the National Assembly (and thus the PM) belonging to opposing political camps.","A coalition between three parties.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Cohabitation tests the"
    },
    {
        "id": "ch69-l2-q4",
        "question": "The",
        "options": ["The President agrees.","They have already elected a","by a majority vote.","The Chancellor commits a crime.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This prevents"
    },
    {
        "id": "ch69-l2-q5",
        "question": "Wait. Which country uses a",
        "options": ["USA.","UK.","Germany (Mixed-Member Proportional Representation).","Canada."],
        "correctAnswerIndex": 2,
        "explanation": "Germany combines"
    },
    {
        "id": "ch69-l2-q6",
        "question": "In Japan, the",
        "options": ["House of Councillors.","House of Representatives (Lower House).","Both houses equally.","Only the Emperor."],
        "correctAnswerIndex": 1,
        "explanation": "Like most parliamentary systems, the executive survives at the will of the lower house."
    },
    {
        "id": "ch69-l2-q7",
        "question": "The",
        "options": ["Some provinces (like Quebec) have special status/rights to protect their identity.","The centre has no power.","The Senate is elected.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Quebec"
    },
    {
        "id": "ch69-l2-q8",
        "question": "Which country",
        "options": ["USA.","UK.","India and Germany (to a limited extent for execution of federal laws).","None, only India does this."],
        "correctAnswerIndex": 2,
        "explanation": "Germany"
    },
    {
        "id": "ch69-l2-q9",
        "question": "In the UK, the",
        "options": ["Ruling party.","Official Opposition Party.","Judiciary.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It prepares the opposition to take charge of ministries"
    },
    {
        "id": "ch69-l2-q10",
        "question": "The",
        "options": ["Simple majority.","Two-thirds majority in both houses.","Three-fourths majority.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This check prevents the President from being an absolute monarch in the legislative field."
    },
    {
        "id": "ch69-l2-q11",
        "question": "Wait. Which country does",
        "options": ["USA.","Canada (added later in 1982 as the Charter of Rights).","Japan.","France."],
        "correctAnswerIndex": 1,
        "explanation": "Canada relied on"
    },
    {
        "id": "ch69-l2-q12",
        "question": "The",
        "options": ["Currency.","Human Dignity (Art 1) and the Federal/Democratic nature of the state.","Names of the states.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This is the German equivalent of the"
    },
    {
        "id": "ch69-l2-q13",
        "question": "In France, the President is elected through which method?",
        "options": ["Indirect election (like India).","Direct election (Two-round system).","Appointment by the Assembly.","None."],
        "correctAnswerIndex": 1,
        "explanation": "If no candidate gets 50% in the first round, a runoff between the top two is held."
    },
    {
        "id": "ch69-l2-q14",
        "question": "The",
        "options": ["4 years.","6 years (with half retiring every 3 years).","5 years.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This is very similar to the Indian Rajya Sabha"
    },
    {
        "id": "ch69-l2-q15",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This contrasts with the UK/India where AG is a legal advisor (non-cabinet)."
    },
    {
        "id": "ch69-l2-q16",
        "question": "Wait. Which country",
        "options": ["UK.","Japan.","USA (Art V).","France."],
        "correctAnswerIndex": 2,
        "explanation": "The US constitution has been amended only 27 times in over 230 years."
    },
    {
        "id": "ch69-l2-q17",
        "question": "In Canada, the",
        "options": ["Provinces (States).","Federal Government (Centre).","Both.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Like India, Canada has a centripetal federalism (strong centre)."
    },
    {
        "id": "ch69-l2-q18",
        "question": "The",
        "options": ["1947.","2009.","1215.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This was done to formally separate the judiciary from the legislature (House of Lords)."
    },
    {
        "id": "ch69-l2-q19",
        "question": "Which country has a",
        "options": ["India.","USA (Senate).","Germany.","Canada."],
        "correctAnswerIndex": 1,
        "explanation": "Every US state has 2 senators, making small states very powerful."
    },
    {
        "id": "ch69-l2-q20",
        "question": "The",
        "options": ["There are no courts.","Disputes between citizens and the state are handled by a separate system of courts (Council of State) rather than ordinary courts.","The President is the judge.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It is based on the idea that state administration needs specialized judicial oversight."
    },
    {
        "id": "ch69-l2-q21",
        "question": "Wait. In which country can the",
        "options": ["USA.","United Kingdom.","Canada.","India."],
        "correctAnswerIndex": 1,
        "explanation": "In the UK,"
    },
    {
        "id": "ch69-l2-q22",
        "question": "The",
        "options": ["States only execute (administer) the laws made by the Centre.","States make all laws.","The President is supreme.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Central legislates on most subjects, and states provide the administrative machinery."
    },
    {
        "id": "ch69-l2-q23",
        "question": "Who is the",
        "options": ["The Chancellor.","The Federal President.","The King.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The President has mostly ceremonial functions (like the Indian President)."
    },
    {
        "id": "ch69-l2-q24",
        "question": "Which country follows the",
        "options": ["UK.","USA.","Japan.","France."],
        "correctAnswerIndex": 1,
        "explanation": "The 5th and 14th amendments of the US Constitution protect life, liberty, and property via the Due Process clause."
    },
    {
        "id": "ch69-l2-q25",
        "question": "The",
        "options": ["Germany.","Japan.","Canada.","None."],
        "correctAnswerIndex": 1,
        "explanation": "LDP has been the"
    },
    {
        "id": "ch69-l2-q26",
        "question": "Assertion (A): Unlike India, the US President can be",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Strict separation ensures a fixed executive term unless crime is proven."
    },
    {
        "id": "ch69-l2-q27",
        "question": "Wait. Which country has a",
        "options": ["USA.","Canada (The","Clause - Section 33).","Germany.","Japan."],
        "correctAnswerIndex": 1,
        "explanation": "This allows a province/parliament to pass a law"
    },
    {
        "id": "ch69-l2-q28",
        "question": "The",
        "options": ["It is part of the Army.","It is a specialized court solely for constitutional disputes, separate from the ordinary supreme court of appeal.","It is elected by the people.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It ensures"
    },
    {
        "id": "ch69-l2-q29",
        "question": "Which country",
        "options": ["Germany.","Japan.","France.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch69-l2-q30",
        "question": "The",
        "options": ["USA.","India.","UK.","Actually, in most systems (UK, India, France), the Lower House has the final say and there is no joint sitting for money matters."],
        "correctAnswerIndex": 3,
        "explanation": "Money bills are the"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch69-l3-q1",
        "question": "Analyze the",
        "options": ["Because the King says so.","Because they represent the","and the","would collapse without them (e.g., the convention that the Monarch must assent to a bill).","Because they are old.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Conventions fill the gap between the"
    },
    {
        "id": "ch69-l3-q2",
        "question": "Critically compare",
        "options": ["No difference.","In the US, the SC can strike down an","as unconstitutional; in the UK, the SC can only interpret it or issue a","(under HRA 1998) without striking it down.","The UK has no Supreme Court.","None."],
        "correctAnswerIndex": 1,
        "explanation": "UK courts cannot"
    },
    {
        "id": "ch69-l3-q3",
        "question": "The",
        "options": ["To help the Chancellor.","To ensure that the total number of seats a party gets is strictly","to its share of the Second Vote, even if it wins more direct seats.","To increase the size of the house indefinitely.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This maintains the"
    },
    {
        "id": "ch69-l3-q4",
        "question": "In France, Article 16 of the Constitution gives the President",
        "options": ["It is same.","France","The PM must sign it first.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch69-l3-q5",
        "question": "Analysis of",
        "options": ["They ignored the constitution.","By interpreting","as an inherent right of any state that is NOT excluded by the renunciation of","war.","They changed the text.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Strategic ambiguity and judicial restraint have allowed the SDF to exist under Art 9."
    },
    {
        "id": "ch69-l3-q6",
        "question": "Critically evaluate the",
        "options": ["Yes.","No, it does NOT apply to","(voting),",", or",".","Only to the budget.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It allows a temporary suspension of certain rights only, balancing"
    },
    {
        "id": "ch69-l3-q7",
        "question": "Assertion (A): Unlike India, the US Constitution does not have a separate",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "DPSP is a feature of"
    },
    {
        "id": "ch69-l3-q8",
        "question": "In the UK, the",
        "options": ["Prime Minister.","Lord Chancellor (who was previously a judge, a speaker, and a minister simultaneously).","The Queen.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It removed the Lord Chancellor"
    },
    {
        "id": "ch69-l3-q9",
        "question": "How does",
        "options": ["It is same.","In the US, the Federal govt has its own field offices (Parallel administration); in Germany, federal laws are mostly","by the State bureaucracies (Integrated administration).","Germany has no states.","None."],
        "correctAnswerIndex": 1,
        "explanation": "German federalism is described as"
    },
    {
        "id": "ch69-l3-q10",
        "question": "Analysis of",
        "options": ["Because the judges are old.","Because of the","by the people (referendum) and the strong","tradition of adherence to law as passed by the Diet.","Because they follow the US.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court rarely strikes down laws, preferring"
    },
    {
        "id": "ch69-l3-q11",
        "question": "Wait. Which country is a",
        "options": ["India.","France.","Germany.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The French President has a"
    },
    {
        "id": "ch69-l3-q12",
        "question": "Evaluate the",
        "options": ["To prevent small parties from winning.","To prevent","that led to the collapse of the Weimar Republic.","To save money.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It ensures that only"
    },
    {
        "id": "ch69-l3-q13",
        "question": "In the US, the",
        "options": ["The President.","The States respectively, or to the people.","The Supreme Court.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This is the source of"
    },
    {
        "id": "ch69-l3-q14",
        "question": "Analysis of",
        "options": ["Because it is too small.","Because its members are","by the Governor-General (on PM advice) rather than",", leading to a","that makes it hesitant to oppose the House of Commons.","Because they have no budget.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Appointment vs Election is the key to its perceived weakness."
    },
    {
        "id": "ch69-l3-q15",
        "question": "Assertion (A): The UK does not have a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "HRA 1998 changed the"
    },
    {
        "id": "ch69-l3-q16",
        "question": "In France,",
        "options": ["Constitutional Morality.","National Sovereignty (Sovereignty resides in the Nation).","Rule of the PM.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Transference of power from the"
    },
    {
        "id": "ch69-l3-q17",
        "question": "Wait. Which country uses",
        "options": ["UK.","USA.","Japan.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch69-l3-q18",
        "question": "Evaluate",
        "options": ["Only can delay.","It has an","(cannot be overridden by the Bundestag).","No power.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The states (via Bundesrat) have a"
    },
    {
        "id": "ch69-l3-q19",
        "question": "In Japan, the",
        "options": ["House of Councillors.","House of Representatives (after a joint committee/failure to agree).","The Emperor decides.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The Lower House has supremacy in choosing the executive."
    },
    {
        "id": "ch69-l3-q20",
        "question": "Critically analyze",
        "options": ["Procedure Established by Law.","Due Process of Law (judiciary checks both the","and the","or","of the law itself).","They are identical.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Due process is a"
    },
    {
        "id": "ch69-l3-q21",
        "question": "Wait. Which country is known for the",
        "options": ["UK.","USA.","France (Conseil Constitutionnel).","None."],
        "correctAnswerIndex": 2,
        "explanation": "It"
    },
    {
        "id": "ch69-l3-q22",
        "question": "Analysis of",
        "options": ["USA.","Germany (Basic Law).","India.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It allows the state to"
    },
    {
        "id": "ch69-l3-q23",
        "question": "In Canada, how are",
        "options": ["Elected by people.","Appointed by the Federal Governor-General (on PM","By the provinces.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch69-l3-q24",
        "question": "The",
        "options": ["Makes it stronger.","Makes it","as legislators don","s Anti-defection law).","No impact.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Absence of"
    },
    {
        "id": "ch69-l3-q25",
        "question": "Who is the",
        "options": ["George Washington.","Thomas Jefferson.","James Madison.","Abraham Lincoln."],
        "correctAnswerIndex": 2,
        "explanation": "Madison"
    },
    {
        "id": "ch69-l3-q26",
        "question": "Wait. Which country follows",
        "options": ["India.","USA.","Germany.","All of the above."],
        "correctAnswerIndex": 1,
        "explanation": "US has a dual judiciary system; India has an integrated one."
    },
    {
        "id": "ch69-l3-q27",
        "question": "Evaluate",
        "options": ["No affect.","It allowed EU law to","over UK law (Factortame case), necessitating","to fully restore the old sovereignty.","Abolished the UK crown.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Membership of a supra-national body (EU) was seen as a"
    },
    {
        "id": "ch69-l3-q28",
        "question": "In France, who appoints the Prime Minister?",
        "options": ["The people.","The President (but usually from the majority party in the National Assembly).","The Speaker.","None."],
        "correctAnswerIndex": 1,
        "explanation": "President"
    },
    {
        "id": "ch69-l3-q29",
        "question": "Does the",
        "options": ["Yes.","No, Article 81 gives the","of Japan the power of final constitutional review.","Only for the military.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Japan followed the US model of"
    },
    {
        "id": "ch69-l3-q30",
        "question": "Final Analysis: Which constitution serves as the",
        "options": ["USA.","Germany (social state principle) and Ireland (DPSP).","UK.","Japan."],
        "correctAnswerIndex": 1,
        "explanation": "India combined the German/Irish"
    }
];

export const CHAPTER_69_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
