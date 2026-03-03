import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch95-l1-q1",
        "question": "Which doctrine is used to determine the true nature of a law when it seems to encroach upon a subject in another list?",
        "options": ["Doctrine of Eclipse.","Doctrine of Pith and Substance.","Doctrine of Severability.","Doctrine of Colorable Legislation."],
        "correctAnswerIndex": 1,
        "explanation": "Pith and Substance looks at the"
    },
    {
        "id": "ch95-l1-q2",
        "question": "The phrase",
        "options": ["Doctrine of Pith and Substance.","Doctrine of Colorable Legislation.","Doctrine of Territorial Nexus.","Doctrine of Pleasure."],
        "correctAnswerIndex": 1,
        "explanation": "Colorable legislation is used when a legislature tries to hide its lack of power behind a different label."
    },
    {
        "id": "ch95-l1-q3",
        "question": "Which doctrine allows the court to strike down only the",
        "options": ["Doctrine of Severability.","Doctrine of Eclipse.","Doctrine of Harmony.","None."],
        "correctAnswerIndex": 0,
        "explanation": "If the valid part can stand alone, it is"
    },
    {
        "id": "ch95-l1-q4",
        "question": "The",
        "options": ["Post-constitutional laws.","Pre-constitutional laws that are inconsistent with Fundamental Rights.","Foreign laws.","All laws."],
        "correctAnswerIndex": 1,
        "explanation": "Such laws are not dead, but stay"
    },
    {
        "id": "ch95-l1-q5",
        "question": "The",
        "options": ["Article 14.","Article 245.","Article 356.","Article 370."],
        "correctAnswerIndex": 1,
        "explanation": "It allows a state to tax a person/object outside its boundary if there is a"
    },
    {
        "id": "ch95-l1-q6",
        "question": "Which doctrine requires that the provisions of a statute should be read to avoid conflict between various parts of the same law or constitution?",
        "options": ["Doctrine of Harmonious Construction.","Doctrine of Pleasure.","Doctrine of Pith and Substance.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Harmony ensures that no part of the constitution is rendered useless."
    },
    {
        "id": "ch95-l1-q7",
        "question": "The",
        "options": ["Yes.","No, as held by the SC in Behram Khurshid case.","Only for rich people.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Indian courts do not allow citizens to"
    },
    {
        "id": "ch95-l1-q8",
        "question": "The",
        "options": ["Military services only.","Civil Services (Article 310).","Cabinet ministers.","Private employees."],
        "correctAnswerIndex": 1,
        "explanation": "Civil servants hold office during the"
    },
    {
        "id": "ch95-l1-q9",
        "question": "Which doctrine is used when the motive of a legislature is irrelevant, but its",
        "options": ["Colorable Legislation.","Pith and Substance.","Severability.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Colorable legislation checks if the legislature is"
    },
    {
        "id": "ch95-l1-q10",
        "question": "The",
        "options": ["Lying in court.","Undue delay in approaching the court for relief (Article 32/226).","Lack of evidence.","None."],
        "correctAnswerIndex": 1,
        "explanation": "If a person sleeps over their rights for too long, the court may refuse to help them."
    },
    {
        "id": "ch95-l1-q11",
        "question": "Which doctrine says that when the Centre and State make laws on a concurrent subject and they conflict, the Central law prevails?",
        "options": ["Repugnancy (Article 254).","Territorial Nexus.","Colorable Legislation.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Repugnancy settles the hierarchy in the Concurrent List."
    },
    {
        "id": "ch95-l1-q12",
        "question": "The",
        "options": ["Golak Nath case.","Kesavananda Bharati case.","Minerva Mills.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It restricts the amending power of the Parliament."
    },
    {
        "id": "ch95-l1-q13",
        "question": "The",
        "options": ["Do anything.","Pass laws on","matters that are necessary to make the main law effective.","Fire the opposition.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Every power to legislate includes the power to make it work"
    },
    {
        "id": "ch95-l1-q14",
        "question": "Which doctrine is based on the maxim",
        "options": ["Doctrine of Harmony.","Doctrine of Liberal Interpretation.","Doctrine of Severability.","Both 1 and 2."],
        "correctAnswerIndex": 3,
        "explanation": "Interpretation should favor the validity and usefulness of a statute."
    },
    {
        "id": "ch95-l1-q15",
        "question": "The",
        "options": ["Of the same kind/nature.","Different kind.","Equal power.","None."],
        "correctAnswerIndex": 0,
        "explanation": "General words following specific words should be interpreted in the same category."
    },
    {
        "id": "ch95-l1-q16",
        "question": "Wait. Which doctrine is most used by the SC to resolve conflicts between entries in the Seventh Schedule?",
        "options": ["Pith and Substance.","Colorable Legislation.","Severeability.","None."],
        "correctAnswerIndex": 0,
        "explanation": "It prevents legislative overlapping from killing the law."
    },
    {
        "id": "ch95-l1-q17",
        "question": "The",
        "options": ["A matter once decided by a competent court cannot be reopened by the same parties.","Judges should retire.","Law is supreme.","None."],
        "correctAnswerIndex": 0,
        "explanation": "It ensures"
    },
    {
        "id": "ch95-l1-q18",
        "question": "Which doctrine supports the idea that the Constitution must be interpreted as a",
        "options": ["Strict Interpretation.","Progressive/Liberal Interpretation.","Colorable Legislation.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The constitution should adapt to the"
    },
    {
        "id": "ch95-l1-q19",
        "question": "The",
        "options": ["The State cannot be sued for its official acts (now mostly discarded in human rights cases).","The King can do no wrong.","Only the State can sue.","None."],
        "correctAnswerIndex": 0,
        "explanation": "In modern India, sovereign immunity is very limited in scope."
    },
    {
        "id": "ch95-l1-q20",
        "question": "Wait. Which doctrine is used to determine if an individual piece of evidence is admissible?",
        "options": ["Doctrine of Relevance.","Doctrine of Necessity.","Both.","Actually, these are part of Evidence Law (not purely Constitutional doctrines), but the Constitution uses","for emergency power."],
        "correctAnswerIndex": 3,
        "explanation": "Necessity justifies actions that might otherwise be unlawful in extreme crises."
    },
    {
        "id": "ch95-l1-q21",
        "question": "The",
        "options": ["A person hopes for a job.","The state behaves in a way that gives a person a reasonable expectation of a certain procedure or benefit.","Everyone expects a holiday.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It is a part of"
    },
    {
        "id": "ch95-l1-q22",
        "question": "Which doctrine is associated with the",
        "options": ["Harmonious Construction.","Strict/Literal Interpretation.","Pith and Substance.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court first looks at the exact words used in the statute."
    },
    {
        "id": "ch95-l1-q23",
        "question": "The",
        "options": ["Fundamental Duties.","Fundamental Rights (Article 19).","DPSP.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Rights are not absolute and can be restricted in the interest of"
    },
    {
        "id": "ch95-l1-q24",
        "question": "Wait. In which case was the",
        "options": ["State of Bombay vs R.M.D. Chamarbaugwala (1957).","Keshvananda Bharati.","SR Bommai.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The nexus between the gambling and the taxing state was found sufficient."
    },
    {
        "id": "ch95-l1-q25",
        "question": "The",
        "options": ["The court must follow its earlier decisions.","Parliament is supreme.","The President is always right.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This ensures consistency and predictability in law."
    },
    {
        "id": "ch95-l1-q26",
        "question": "Which doctrine allows the President to fire a civil servant without a formal inquiry in special cases (Sec 311)?",
        "options": ["Doctrine of Pleasure.","Doctrine of Necessity.","Doctrine of Absolute power.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Art 311 provides safeguards but the"
    },
    {
        "id": "ch95-l1-q27",
        "question": "Wait. Does the",
        "options": ["Yes.","No, only to the","that is overshadowed by the Fundamental Right.","Only for tax laws.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Like a physical eclipse, only the covered part is darkened."
    },
    {
        "id": "ch95-l1-q28",
        "question": "The",
        "options": ["The judgment applies only to future cases, not past ones.","The judgment changes the past.","The judgment is valid for one day.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This was famously used in the"
    },
    {
        "id": "ch95-l1-q29",
        "question": "Which doctrine is used when two different statutes seem to cover the same",
        "options": ["Harmony.","Repugnancy.","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Harmony first, then Repugnancy (hierarchy) if conflict is unavoidable."
    },
    {
        "id": "ch95-l1-q30",
        "question": "The",
        "options": ["Courts should not interfere in purely political matters (rarely used in India).","PM is not answerable.","Elections are above the court.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Indian courts are more proactive and less likely to use this American doctrine."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch95-l2-q1",
        "question": "The",
        "options": ["American Constitution.","Canadian Constitution.","British Common Law.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It was first applied by the Privy Council in cases from Canada and later adopted in India."
    },
    {
        "id": "ch95-l2-q2",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Judiciary checks the"
    },
    {
        "id": "ch95-l2-q3",
        "question": "Which doctrine was used in the",
        "options": ["Doctrine of Pith and Substance.","Doctrine of Severability (The court only looked at the specific section allowing non-disclosure of grounds).","Doctrine of Eclipse.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court in 1950 held that only the offending part should be challenged, not the whole act."
    },
    {
        "id": "ch95-l2-q4",
        "question": "In the",
        "options": ["The law must be re-passed by Parliament.","The law","and becomes enforceable automatically from the date of the amendment.","The law remains dead.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The law was merely"
    },
    {
        "id": "ch95-l2-q5",
        "question": "Wait. Which doctrine is expressed by the maxim",
        "options": ["Doctrine of Pleasure.","Not a constitutional doctrine, but used in Law of Trusts/Torts. In Constitution,","is the equivalent.","Doctrine of Laches.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional law focuses more on"
    },
    {
        "id": "ch95-l2-q6",
        "question": "The",
        "options": ["Part IV (DPSP).","Parliamentary Privileges (Art 105/194).","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "The court tries to give effect to both competing provisions without sacrificing either."
    },
    {
        "id": "ch95-l2-q7",
        "question": "In",
        "options": ["Pith and Substance.","Colorable Legislation.","Harmony.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Legislature attempted to do indirectly what it couldn"
    },
    {
        "id": "ch95-l2-q8",
        "question": "The",
        "options": ["Imaginary.","Real, sufficient and not illusory.","Only for one day.","None."],
        "correctAnswerIndex": 1,
        "explanation": "As seen in Tata Iron & Steel case, the sale of goods produced in one state but sold in another qualifies for taxing nexus."
    },
    {
        "id": "ch95-l2-q9",
        "question": "Which doctrine implies that the power of sub-delegation must be explicitly mentioned in the parent act?",
        "options": ["Delegatus non potest delegare (A delegate cannot further delegate).","Doctrine of Pleasure.","Pith and Substance.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This is a key principle of Delegated Legislation and Constitutional law."
    },
    {
        "id": "ch95-l2-q10",
        "question": "The",
        "options": ["The President.","The Chief Justice.","Actually, it is often used to justify","acts that save the system from collapse (e.g., in J&K or Punjab cases).","None."],
        "correctAnswerIndex": 2,
        "explanation": "Salus Populi Suprema Lex (Welfare of the people is the supreme law) is the foundation of this doctrine."
    },
    {
        "id": "ch95-l2-q11",
        "question": "Wait. In which case did the SC hold that",
        "options": ["Kesavananda case.","Minerva Mills case (1980).","Golak Nath case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This is a direct application of the Doctrine of Harmonious Construction."
    },
    {
        "id": "ch95-l2-q12",
        "question": "The",
        "options": ["The encroachment is significant.","The law is squarely within the","of the legislature","The motive is to help people.","None."],
        "correctAnswerIndex": 0,
        "explanation": "If the encroachment is more than"
    },
    {
        "id": "ch95-l2-q13",
        "question": "Which doctrine prevents the",
        "options": ["Doctrine of Limited Power (Basic Structure).","Pith and Substance.","Territorial Nexus.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Under Art 368, the power to amend is not the power to destroy."
    },
    {
        "id": "ch95-l2-q14",
        "question": "Regarding",
        "options": ["Yes.","No.","Only for tax laws.","None."],
        "correctAnswerIndex": 0,
        "explanation": "If the offending part can be separated from the rest, the rest survives."
    },
    {
        "id": "ch95-l2-q15",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Finality is necessary for the sanctity of judicial decisions."
    },
    {
        "id": "ch95-l2-q16",
        "question": "The",
        "options": ["Article 14 (Protection against arbitrary firing).","Article 25.","Article 32.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Even the President"
    },
    {
        "id": "ch95-l2-q17",
        "question": "Wait. Which doctrine is the opposite of",
        "options": ["Purposive Interpretation.","Liberal Interpretation.","Progressive Interpretation.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "These allow the court to look at the"
    },
    {
        "id": "ch95-l2-q18",
        "question": "The",
        "options": ["The PM says no.","There is an overriding",".","The person is not a citizen.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Individual expectation must yield to larger social welfare."
    },
    {
        "id": "ch95-l2-q19",
        "question": "Which doctrine is associated with",
        "options": ["Doctrine of Repugnancy.","Doctrine of Pith and Substance.","Doctrine of Colorable Legislation.","None."],
        "correctAnswerIndex": 0,
        "explanation": "It solves the"
    },
    {
        "id": "ch95-l2-q20",
        "question": "The",
        "options": ["Because banks are rich.","Because the power to penalize is","(supportive) to the main power of regulating banks.","Because the PM decided so.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Power without the means to enforce it is toothless."
    },
    {
        "id": "ch95-l2-q21",
        "question": "Wait. In which case did the SC use the",
        "options": ["M.S.M. Sharma vs Krishna Sinha (Searchlight case, 1959).","Puttaswamy case.","Indra Gandhi case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The court held that special provisions (privileges) must be read in a way that respects general rights (free speech)."
    },
    {
        "id": "ch95-l2-q22",
        "question": "What is the result when",
        "options": ["The whole law is struck down.","The whole law is saved.","Only the CM can decide.","None."],
        "correctAnswerIndex": 0,
        "explanation": "As seen in R.M.D. Chamarbaugwala Case."
    },
    {
        "id": "ch95-l2-q23",
        "question": "The",
        "options": ["Taxation laws.","Criminal laws.","Both.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Any exercise of state power can be checked via this doctrine."
    },
    {
        "id": "ch95-l2-q24",
        "question": "Assertion (A): The",
        "options": ["Both A and R are false.","A is false but R is a true explanation of the confusion.","A is true.","None."],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch95-l2-q25",
        "question": "Wait. Which doctrine is most associated with",
        "options": ["Doctrine of Judicial Review.","Doctrine of Eclipse.","Doctrine of Severability.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Art 13 is the bedrock of the judiciary"
    },
    {
        "id": "ch95-l2-q26",
        "question": "The",
        "options": ["Emergency.","Conflicts of laws between different systems (e.g., in private international law or when a person moves states).","Cabinet appointments.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch95-l2-q27",
        "question": "Regarding",
        "options": ["Everyone must be treated exactly same.","Likes must be treated alike, and the classification must have a","to the object of the law.","Only rich people are one class.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Classification is necessary for governance, but it must be fair."
    },
    {
        "id": "ch95-l2-q28",
        "question": "Wait. Which doctrine is used when the motive of a person while being",
        "options": ["Doctrine of Malafide.","Pith and Substance.","None.","Actually, this is a part of","linked to Article 14."],
        "correctAnswerIndex": 3,
        "explanation": "Arbitrariness (Malafide) is the sworn enemy of Article 14."
    },
    {
        "id": "ch95-l2-q29",
        "question": "The",
        "options": ["Suicide pact.","Straight-jacket that prevents effective governance.","Bible.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Legislature must have some"
    },
    {
        "id": "ch95-l2-q30",
        "question": "The",
        "options": ["Constitution is old.","Fundamental Rights are not",", meaning they don","Constitution changes every day.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Pre-constitutional acts are governed by the law existing at that time (unless inconsistent and eclipsed)."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch95-l3-q1",
        "question": "Analyze the",
        "options": ["By looking at the title only.","By looking at the","of the enactment, its object, scope and the effect of its provisions rather than individual lines.","By asking the PM.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Pith and Substance is about identifying the"
    },
    {
        "id": "ch95-l3-q2",
        "question": "The",
        "options": ["Article 245 only.","Article 246 (distribution of legislative subjects).","Article 248 (residuary powers).","None."],
        "correctAnswerIndex": 1,
        "explanation": "It checks if the legislature has"
    },
    {
        "id": "ch95-l3-q3",
        "question": "In",
        "options": ["It doesn","The law","for non-citizens (to whom the FR might not apply), but stays","for citizens (to whom the FR applies).","Law is dead for both.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Eclipse allows the"
    },
    {
        "id": "ch95-l3-q4",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Nexus doesn"
    },
    {
        "id": "ch95-l3-q5",
        "question": "In",
        "options": ["Doctrine of Pleasure.","Doctrine of Judicial Review (as part of Basic Structure) overriding the","consent requirement of the Delhi Special Police Establishment Act.","Doctrine of Pith and Substance.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional powers of the higher judiciary cannot be limited by ordinary statutes (Consent rule)."
    },
    {
        "id": "ch95-l3-q6",
        "question": "The",
        "options": ["Maneka Gandhi case.","R.M.D. Chamarbaugwala Case (1957).","K.S. Puttaswamy case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Chamarbaugwala is the"
    },
    {
        "id": "ch95-l3-q7",
        "question": "Evaluate the",
        "options": ["FR are supreme.","DPSP are supreme.","To give","effect to one would destroy the","of the whole constitution; thus, DPSP must be implemented","destroying the FRs.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Harmony isn"
    },
    {
        "id": "ch95-l3-q8",
        "question": "In the",
        "options": ["Profession wins.","Sleep (Health) is a","and","right; professional liberty does not include","Both are banned.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Fundamental rights are not"
    },
    {
        "id": "ch95-l3-q9",
        "question": "Analysis of",
        "options": ["The PM says so.","The legislature provides a","in the act itself, rather than leaving it as a",".","The service is military.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Essential legislative function cannot be delegated (must define policy)."
    },
    {
        "id": "ch95-l3-q10",
        "question": "The",
        "options": ["Tax cases.","Cases involving","victims or","citizens who were unaware of their rights (Art 32 context).","Corporate cases.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Social context is considered while deciding if delay is"
    },
    {
        "id": "ch95-l3-q11",
        "question": "Wait. In which case did the SC use the",
        "options": ["Election Commission of India vs Ashok Kumar (2000).","Actually, it is used for","delays or","(e.g., in Gujarat assembly dissolution cases).","Indra Sawhney.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Necessity ensures the"
    },
    {
        "id": "ch95-l3-q12",
        "question": "Which doctrine forbids a legislature from trying to",
        "options": ["Doctrine of Pith and Substance.","Doctrine of Res-extra-commercium (regarding moral regulation).","Doctrine of Strict Entrustment.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Pith and Substance is also a"
    },
    {
        "id": "ch95-l3-q13",
        "question": "In the",
        "options": ["Yes.","No, Parliament can later pass a law","that specific state law (Art 254-2 proviso).","Requires SC approval.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Central supremacy remains reserved in the concurrent field even with assent."
    },
    {
        "id": "ch95-l3-q14",
        "question": "Analyze",
        "options": ["Too complicated.","Because Equality is not for the","alone but a","to behave justly in a republic.","People are poor.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Obligations of the state (as per Art 14) are non-negotiable."
    },
    {
        "id": "ch95-l3-q15",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The constitution is the"
    },
    {
        "id": "ch95-l3-q16",
        "question": "The",
        "options": ["State is never liable.","The","immunity of the British times cannot be used to deny","for the violation of fundamental rights by state officials.","State is only liable for money.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch95-l3-q17",
        "question": "Wait. Which doctrine is most used to check the",
        "options": ["Doctrine of Proportionality (as seen in the Aadhaar Case and Internet Shutdown case).","Pith and Substance.","None.","Actually, it"],
        "correctAnswerIndex": 0,
        "explanation": "Proportionality checks if the"
    },
    {
        "id": "ch95-l3-q18",
        "question": "Review",
        "options": ["Never.","Yes, under the exceptions of Art 311(2) (in the interest of state security, or when an inquiry is not reasonably practicable).","Only for corruption.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Security of tenure is balanced with the safety of the state."
    },
    {
        "id": "ch95-l3-q19",
        "question": "The",
        "options": ["Presumption of Ignorance.","Presumption of","(that the people who gave the power also gave the means to use it correctly).","Presumption of Dictatorship.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Grant of a power (like making a law on"
    },
    {
        "id": "ch95-l3-q20",
        "question": "In",
        "options": ["Because they didn","Because","does not provide the state with a","to disregard fundamental rights without revealing the","(orders) for the same.","Because it","None."],
        "correctAnswerIndex": 1,
        "explanation": "Security is important, but"
    },
    {
        "id": "ch95-l3-q21",
        "question": "Wait. In which case was the",
        "options": ["State of Kerala vs K.G. Madhavan Pillai (1988).","Maneka Gandhi case.","Kesavananda Bharti case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "It"
    },
    {
        "id": "ch95-l3-q22",
        "question": "Critically analyze",
        "options": ["No.","Yes, for","or for being based on","(B.P. Singhal vs UoI).","Only for governors.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Even the highest executive discretion is not completely immune to judicial oversight in India."
    },
    {
        "id": "ch95-l3-q23",
        "question": "Analysis of",
        "options": ["Yes.","No, it is","and void.","Only for the PM","None."],
        "correctAnswerIndex": 1,
        "explanation": "States have power for"
    },
    {
        "id": "ch95-l3-q24",
        "question": "How is the",
        "options": ["It doesn","Arguments in court focused on whether the","(Art 367) used was a","exercise of power to bypass Art 370.","It was a split.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This shows how old doctrines are used in every modern constitutional crisis."
    },
    {
        "id": "ch95-l3-q25",
        "question": "The",
        "options": ["Narrow.","Broad and Plenary (full).","Confusing.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court assumes that a field of legislation includes all its sub-fields."
    },
    {
        "id": "ch95-l3-q26",
        "question": "Wait. Which case held that",
        "options": ["Kasturi Lal vs State of UP (which initially upheld immunity).","State of Rajasthan vs Vidhyawati (which first criticized immunity).","Saheli vs Commissioner of Police.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "The law has evolved from Vidhyawati (state as a business) to Saheli (compensation irrespective of nature of act)."
    },
    {
        "id": "ch95-l3-q27",
        "question": "Evaluate",
        "options": ["Part III and Art 368.","Part IX and Art 243.","Part IV and Part VI.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The court tried to balance the"
    },
    {
        "id": "ch95-l3-q28",
        "question": "Does",
        "options": ["No.","Yes, as","derived from the existing text of Art 14, 19, or 21 (e.g., Right to Information).","Only for children.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This leads to"
    },
    {
        "id": "ch95-l3-q29",
        "question": "Who is the",
        "options": ["The Parliament.","The Supreme Court of India.","The President.","The Public."],
        "correctAnswerIndex": 1,
        "explanation": "Under Art 141 and 142, the SC"
    },
    {
        "id": "ch95-l3-q30",
        "question": "Final Conclusion: Which doctrine stands as the",
        "options": ["Pith and Substance.","Doctrine of Basic Structure.","Doctrine of Pleasure.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It controls the amending power and preserves the foundational identity of the nation."
    }
];

export const CHAPTER_95_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
