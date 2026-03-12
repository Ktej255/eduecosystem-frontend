import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch44-l1-q1",
        "question": "Under Article 352, the President can declare a National Emergency when the security of India or a part of it is threatened by war, external aggression, or:",
        "options": ["Internal disturbance.","Armed rebellion.","Financial crisis.","Political instability."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution empowers the President to declare a National Emergency under Article 352 on the grounds of war, external aggression, or armed rebellion."
    },
    {
        "id": "ch44-l1-q2",
        "question": "The term \\",
        "options": ["42nd Amendment.","44th Amendment.","52nd Amendment.","24th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent misuse of the vague term"
    },
    {
        "id": "ch44-l1-q3",
        "question": "Can the President proclaim a National Emergency even before the actual occurrence of war or armed rebellion?",
        "options": ["No, only after the event has occurred.","Yes, if he is satisfied that there is an",".","Only with the prior approval of the Supreme Court.","Only if the neighboring countries declare war first."],
        "correctAnswerIndex": 1,
        "explanation": "The President can issue a proclamation of emergency before the actual occurrence of war or armed rebellion if he is satisfied that there is an imminent danger thereof."
    },
    {
        "id": "ch44-l1-q4",
        "question": "Can a proclamation of National Emergency be limited to a specific part of India?",
        "options": ["Yes, it can be restricted to a specific part of India.","No, it must always apply to the whole of India.","Only during a Financial Emergency.","Only if the State Legislature requests it."],
        "correctAnswerIndex": 0,
        "explanation": "The 42nd Amendment Act of 1976 enabled the President to limit the operation of a National Emergency to a specified part of India, rather than the whole country."
    },
    {
        "id": "ch44-l1-q5",
        "question": "The 38th Amendment Act (1975) made the President",
        "options": ["44th Amendment / Minerva Mills Case.","42nd Amendment / Kesavananda Bharati Case.","73rd Amendment / S.R. Bommai Case.","91st Amendment / Waman Rao Case."],
        "correctAnswerIndex": 0,
        "explanation": "The 44th Amendment (1978) deleted the provision making the President"
    },
    {
        "id": "ch44-l1-q6",
        "question": "The proclamation of emergency must be approved by both Houses of Parliament within ______ from the date of its issue.",
        "options": ["One month.","Two months.","Six months.","15 days."],
        "correctAnswerIndex": 0,
        "explanation": "Originally two months, the 44th Amendment Act reduced the period for parliamentary approval of a National Emergency proclamation to just one month."
    },
    {
        "id": "ch44-l1-q7",
        "question": "Originally, the period for approval of an emergency proclamation was two months. It was reduced to one month by the:",
        "options": ["42nd Amendment.","44th Amendment.","24th Amendment.","86th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment Act of 1978 reduced the time limit for parliamentary approval from two months to one month to tighten legislative control over the emergency power."
    },
    {
        "id": "ch44-l1-q8",
        "question": "If the Lok Sabha is dissolved at the time of proclamation, how long does the proclamation survive after the first sitting of the newly elected Lok Sabha (provided the Rajya Sabha has approved it)?",
        "options": ["15 days.","30 days.","60 days.","90 days."],
        "correctAnswerIndex": 1,
        "explanation": "If the Lok Sabha is dissolved, the proclamation survives until 30 days from the first sitting of the newly reconstituted Lok Sabha, provided the Rajya Sabha has in the meantime approved it."
    },
    {
        "id": "ch44-l1-q9",
        "question": "Once approved by Parliament, a National Emergency continues for ______ at a time.",
        "options": ["6 months.","1 year.","3 years.","Indefinitely."],
        "correctAnswerIndex": 0,
        "explanation": "After parliamentary approval, an emergency continues for six months and can be extended indefinitely with the approval of Parliament for every six months."
    },
    {
        "id": "ch44-l1-q10",
        "question": "Is there a maximum limit on how long a National Emergency can be extended through repeated parliamentary approval?",
        "options": ["3 years.","5 years.","No maximum limit.","10 years."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike President"
    },
    {
        "id": "ch44-l1-q11",
        "question": "Every resolution approving the proclamation of emergency or its continuance must be passed by a:",
        "options": ["Simple majority.","Special majority (Majority of total membership + 2/3rd present and voting).","Absolute majority.","Consensus."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment introduced the safeguard that approving an emergency requires a special majority in Parliament, ensuring broad consensus."
    },
    {
        "id": "ch44-l1-q12",
        "question": "The President can revoke a proclamation of emergency at any time by a subsequent proclamation. Does this revocation require parliamentary approval?",
        "options": ["Yes, it must be approved by both Houses.","Yes, but only by the Lok Sabha.","No, parliamentary approval is not required for revocation.","Yes, it requires a special majority."],
        "correctAnswerIndex": 2,
        "explanation": "A proclamation of emergency may be revoked by the President at any time by a subsequent proclamation. Such a revocation does not require any parliamentary approval."
    },
    {
        "id": "ch44-l1-q13",
        "question": "The President must revoke the National Emergency if the ______ passes a resolution by a simple majority disapproving its continuance.",
        "options": ["Rajya Sabha.","Lok Sabha.","Both Houses.","State Legislatures."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment mandated that the President must revoke the proclamation if the Lok Sabha passes a resolution disapproving its continuation by a simple majority."
    },
    {
        "id": "ch44-l1-q14",
        "question": "A",
        "options": ["1/10th.","1/4th.","1/2.","2/3rd."],
        "correctAnswerIndex": 0,
        "explanation": "If one-tenth (1/10th) of the total number of members of the Lok Sabha give a written notice to the Speaker, a special sitting of the House must be held within 14 days to consider disapproving the emergency."
    },
    {
        "id": "ch44-l1-q15",
        "question": "During a National Emergency, the Centre becomes entitled to give executive directions to a state on:",
        "options": ["Only Union List matters.","Any matter (the executive power of the Centre extends to any matter).","Only financial matters.","Only defense matters."],
        "correctAnswerIndex": 1,
        "explanation": "During a National Emergency, the executive power of the Centre extends to directing any state regarding the manner in which its executive power is to be exercised, essentially overriding the state"
    },
    {
        "id": "ch44-l1-q16",
        "question": "The Parliament becomes empowered to make laws on any subject mentioned in the State List. These laws become inoperative ______ after the emergency has ceased to operate.",
        "options": ["Immediately.","After 6 months.","After 1 year.","After 3 months."],
        "correctAnswerIndex": 1,
        "explanation": "Laws made by Parliament on State List subjects during a National Emergency become inoperative six months after the emergency attains its end."
    },
    {
        "id": "ch44-l1-q17",
        "question": "Can the President modify the constitutional distribution of revenues between the Centre and the States during a National Emergency?",
        "options": ["No, the financial distribution remains untouched.","Yes, under Article 354, the President can modify the normal distribution of revenues.","Only with the approval of all State Chief Ministers.","Only the Finance Commission can do this."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 354, while a National Emergency is in operation, the President can modify the constitutional distribution of revenues between the Union and the States."
    },
    {
        "id": "ch44-l1-q18",
        "question": "The life of the Lok Sabha can be extended by a law of Parliament beyond its normal term for ______ at a time during an emergency.",
        "options": ["6 months.","1 year.","2 years.","5 years."],
        "correctAnswerIndex": 1,
        "explanation": "During a National Emergency, the life of the Lok Sabha may be extended beyond its normal term (five years) by a law of Parliament for one year at a time."
    },
    {
        "id": "ch44-l1-q19",
        "question": "Article 358 deals with the suspension of Fundamental Rights guaranteed by Article:",
        "options": ["14.","19.","21.","32."],
        "correctAnswerIndex": 1,
        "explanation": "Article 358 of the Constitution explicitly provides for the suspension of the six Fundamental Rights guaranteed by Article 19 during a National Emergency."
    },
    {
        "id": "ch44-l1-q20",
        "question": "Under Article 358, the six Fundamental Rights under Article 19 are automatically suspended as soon as the emergency is proclaimed on the grounds of:",
        "options": ["War or External Aggression.","Armed Rebellion.","Internal Disturbance.","Financial crisis."],
        "correctAnswerIndex": 0,
        "explanation": "As per the 44th Amendment, Article 19 rights are automatically suspended only when an emergency is declared on grounds of war or external aggression (not armed rebellion)."
    },
    {
        "id": "ch44-l1-q21",
        "question": "Are the rights under Article 19 suspended if the National Emergency is proclaimed on the ground of",
        "options": ["Yes, they are automatically suspended like in a war.","No, they cannot be suspended for armed rebellion (as per the 44th Amendment).","Only if the President passes a specific order.","Only in the states where the rebellion is occurring."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment restricted the scope of Article 358, clarifying that the six fundamental rights under Article 19 cannot be suspended if the emergency is on the grounds of"
    },
    {
        "id": "ch44-l1-q22",
        "question": "Article 359 empowers the President to suspend the right to move any court for the enforcement of Fundamental Rights. Does this automatically suspend the rights themselves?",
        "options": ["Yes, the rights are temporarily deleted.","No, it only suspends their","in a court of law.","Yes, for all citizens.","No, it only affects non-citizens."],
        "correctAnswerIndex": 1,
        "explanation": "Article 359 does not suspend the Fundamental Rights themselves; it merely suspends the right to move the courts to enforce them. The rights theoretically exist, but there is no legal remedy if they are violated."
    },
    {
        "id": "ch44-l1-q23",
        "question": "The 44th Amendment Act specified that the President cannot suspend the right to move the court for the enforcement of Fundamental Rights guaranteed by Articles:",
        "options": ["19 and 20.","20 and 21.","14 and 17.","25 and 26."],
        "correctAnswerIndex": 1,
        "explanation": "A major safeguard introduced by the 44th Amendment is that the President cannot, under Article 359, suspend the enforcement of Articles 20 (protection against conviction) and 21 (right to life and personal liberty)."
    },
    {
        "id": "ch44-l1-q24",
        "question": "Which article suspends the Fundamental Rights under Article 19 automatically for the",
        "options": ["Article 358.","Article 359.","Article 352.","Article 365."],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 358, the suspension of Article 19 is automatic and lasts for the entire duration of the National Emergency (if declared for external reasons)."
    },
    {
        "id": "ch44-l1-q25",
        "question": "Which article allows the President to suspend the enforcement of rights for a",
        "options": ["Article 358.","Article 359.","Article 356.","Article 360."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Article 358, which is automatic and for the whole duration, Article 359 requires a specific Presidential Order, which can limit the suspension of enforcement to a shorter duration or a specific region."
    },
    {
        "id": "ch44-l1-q26",
        "question": "How many times has a National Emergency been proclaimed in India so far?",
        "options": ["1.","2.","3.","4."],
        "correctAnswerIndex": 2,
        "explanation": "National Emergency has been proclaimed three times in India: in 1962 (China war), 1971 (Pakistan war), and 1975 (Internal Disturbance)."
    },
    {
        "id": "ch44-l1-q27",
        "question": "The first proclamation of National Emergency was issued in 1962 due to:",
        "options": ["The Indo-Pak war.","Chinese aggression in NEFA (Arunachal Pradesh).","Internal disturbance.","Armed rebellion in Nagaland."],
        "correctAnswerIndex": 1,
        "explanation": "The first emergency was proclaimed in October 1962 on account of Chinese aggression in the North-East Frontier Agency (NEFA) and remained in force till January 1968."
    },
    {
        "id": "ch44-l1-q28",
        "question": "The second proclamation of National Emergency was issued in 1971 during the war with:",
        "options": ["China.","Pakistan.","Bangladesh.","Sri Lanka."],
        "correctAnswerIndex": 1,
        "explanation": "The second emergency was declared in December 1971 in the wake of the war with Pakistan over the liberation of Bangladesh."
    },
    {
        "id": "ch44-l1-q29",
        "question": "The third proclamation of National Emergency was issued in 1975 on the ground of:",
        "options": ["Armed rebellion.","Internal disturbance.","External aggression.","War."],
        "correctAnswerIndex": 1,
        "explanation": "The controversial 1975 emergency was proclaimed on the vague ground of"
    },
    {
        "id": "ch44-l1-q30",
        "question": "Which committee was appointed to investigate the circumstances that led to the declaration of the 1975 emergency?",
        "options": ["Shah Commission.","Sarkaria Commission.","Verma Committee.","Swaran Singh Committee."],
        "correctAnswerIndex": 0,
        "explanation": "The Janata Party government, which came to power in 1977, appointed the Shah Commission to inquire into the circumstances, abuses, and excesses connected with the 1975 emergency."
    },
    {
        "id": "ch44-l1-q31",
        "question": "Before 1978, the President could proclaim an emergency on the oral advice of the Prime Minister. Now, Article 352(3) requires a \\",
        "options": ["The Prime Minister alone.","The Union Cabinet (PM + other ministers of cabinet rank).","The Council of Ministers.","The Speaker of the Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent a single individual from unilaterally imposing an emergency, the 44th Amendment mandated that the President can only act after the Union Cabinet (ministers of cabinet rank) officially recommends it in writing."
    },
    {
        "id": "ch44-l1-q32",
        "question": "Why was the parliamentary approval majority for a National Emergency changed from",
        "options": ["To make it easier for the government to handle crises.","To ensure that such a drastic measure has broad political support and cannot be misused by a thin majority.","Because the Supreme Court mandated it in a ruling.","To force a joint sitting of both Houses."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch44-l1-q33",
        "question": "A resolution for the disapproval of an emergency requires only a",
        "options": ["Because the Lok Sabha is functionally the only House that matters.","To provide a quicker, unhindered constitutional","to terminate an emergency once the immediate crisis has passed.","Because the President requested this specific loophole.","It was a drafting error in the 44th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution deliberately creates an asymmetric hurdle: it is extremely difficult to start/continue an emergency (special majority in both Houses) but deliberately easy to end it (simple majority in the directly elected Lok Sabha)."
    },
    {
        "id": "ch44-l1-q34",
        "question": "During a National Emergency, the State Governments are:",
        "options": ["Dismissed immediately.","Suspended indefinitely.","Allowed to continue, but they are brought under the complete executive control and direction of the Centre.","Given enhanced financial powers."],
        "correctAnswerIndex": 2,
        "explanation": "Crucially, unlike President"
    },
    {
        "id": "ch44-l1-q35",
        "question": "When Parliament makes a law on a State List subject during a National Emergency, does the State Legislature lose its concurrent power to make laws on that same subject?",
        "options": ["Yes, its legislative power is entirely suspended.","No, but in case of a conflict, the Parliamentary law prevails (Article 251).","Only if the President issues a separate, gazetted order.","Only in states sharing an international border."],
        "correctAnswerIndex": 1,
        "explanation": "The legislative power of a state parliament is not suspended. However, the constitutional distribution is overridden by the doctrine of repugnancy (Article 251): if the state and centre make conflicting laws on the same subject, the central law prevails."
    },
    {
        "id": "ch44-l1-q36",
        "question": "If the term of the Lok Sabha is extended by one year during an emergency, and the emergency ends two months later, how long does the extended Lok Sabha legally survive?",
        "options": ["For the remaining 10 months of the extended year.","For a maximum of 6 months from the exact date the emergency ceased to operate.","It is dissolved immediately by the President.","Until the next Republic Day."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional extension is not an absolute annual guarantee. Regardless of the one-year extension granted, the extended Lok Sabha cannot continue for more than six months after the emergency has formally ended."
    },
    {
        "id": "ch44-l1-q37",
        "question": "Regarding fundamental rights, Article 358 is",
        "options": ["Article 358 requires a separate Parliamentary resolution.","Article 359 requires the President to specifically promulgate a separate order detailing which enforcement rights are being suspended.","Article 358 applies strictly to border skirmishes.","Article 359 applies exclusively to foreign nationals."],
        "correctAnswerIndex": 1,
        "explanation": "Article 358 operates on autopilot: the moment an external emergency is declared, Article 19 vanishes. Conversely, Article 359 does absolutely nothing until the President consciously issues a separate executive order explicitly listing the rights whose enforcement is suspended."
    },
    {
        "id": "ch44-l1-q38",
        "question": "Can the President suspend Article 20 (Protection in respect of conviction for offences) during a National Emergency?",
        "options": ["Yes, if it","No, the 44th Amendment explicitly prohibits the suspension of the enforcement of Articles 20 and 21 under any circumstances."],
        "correctAnswerIndex": 1,
        "explanation": "As the ultimate firewall against state tyranny, the 44th Amendment completely sterilized the President"
    },
    {
        "id": "ch44-l1-q39",
        "question": "Under Article 358, laws made during an emergency that are inconsistent with Article 19 are constitutionally protected from challenge. However, this protection applies only if:",
        "options": ["The law expressly contains a recital declaring that it is made in relation to the emergency.","The law was unanimously passed by a 2/3rd majority.","The Supreme Court pre-approves it.","The law solely targets military personnel."],
        "correctAnswerIndex": 0,
        "explanation": "To prevent the government from slipping completely unrelated, dictatorial laws past the courts during a crisis, the 44th Amendment required that any law seeking protection from Article 19 MUST explicitly state on its face that it is connected to the emergency."
    },
    {
        "id": "ch44-l1-q40",
        "question": "The suspension of the enforcement of rights under a Presidential Order (Article 359) can be applied to:",
        "options": ["The whole of India.","Any specific part of India.","Both (a) and (b).","Only the capital territory."],
        "correctAnswerIndex": 2,
        "explanation": "A Presidential Order under Article 359 is highly flexible territorially; it can blanket the entire nation or be surgically restricted to a specific geographical zone experiencing heavy conflict."
    },
    {
        "id": "ch44-l1-q41",
        "question": "If the Lok Sabha passes a resolution for the",
        "options": ["The President is acting within his constitutional discretion.","The President has committed gross unconstitutional impropriety, as the revocation is mandatorily binding upon him.","The matter must be escalated to the Rajya Sabha.","The Prime Minister must break the tie."],
        "correctAnswerIndex": 1,
        "explanation": "The phrasing introduced by the 44th Amendment is unambiguous:"
    },
    {
        "id": "ch44-l1-q42",
        "question": "During a National Emergency, can the Parliament extend the legislative life of a State Assembly?",
        "options": ["No, only the Governor can do that.","Yes, for one year at a time, for any length of time (subject to the 6-month cessation rule)."],
        "correctAnswerIndex": 1,
        "explanation": "Mirroring its power to extend its own life, Parliament possesses the sheer concurrent authority during an emergency to legally extend the tenure of state legislative assemblies by one year at a time."
    },
    {
        "id": "ch44-l1-q43",
        "question": "Article 354 allows the President to modify the financial distribution of revenues between the Centre and States. Does this order need Parliamentary oversight?",
        "options": ["No, it is an absolute executive decree.","Yes, it must be laid before both Houses of Parliament as soon as possible."],
        "correctAnswerIndex": 1,
        "explanation": "While granting the President massive fiscal emergency powers, Article 354 still insists on legislative transparency, mandating that any such financial modification order must be presented to Parliament."
    },
    {
        "id": "ch44-l1-q44",
        "question": "In the infamous ADM Jabalpur (Habeas Corpus) case (1976), the SC ruled an arrested person had no legal remedy during the emergency. How was this structurally",
        "options": ["By the 42nd Amendment.","By the 44th Amendment explicitly making Article 21 completely non-suspendable under any emergency.","By the 73rd Amendment.","By an independent Act of Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "The ADM Jabalpur ruling represents the dark nadir of the Indian judiciary. The 44th Amendment structurally bullet-proofed the Constitution against a repeat by ensuring Article 21 (Life and Liberty) can never be suspended by Article 359."
    },
    {
        "id": "ch44-l1-q45",
        "question": "In the Minerva Mills case (1980), the Supreme Court cemented that the proclamation of a National Emergency can be directly challenged in a court on the ground of:",
        "options": ["Malafides (bad faith).","That the proclamation was based on wholly extraneous and irrelevant facts.","Both (a) and (b).","Emergency proclamations remain absolutely non-justiciable."],
        "correctAnswerIndex": 2,
        "explanation": "Minerva Mills shattered the illusion of absolute executive immunity. The court held that if an emergency is declared maliciously (malafide) or based on absurdly irrelevant facts (wholly extraneous), the judiciary can strike it down."
    },
    {
        "id": "ch44-l1-q46",
        "question": "The 42nd Amendment enabled the President to limit the operation of a National Emergency to a specified",
        "options": ["Isolating and controlling a localized armed rebellion (like in the North-East) without disrupting the entire country","Saving central exchequer money.","Punishing a specific rogue opposition-led state.","Bypassing the Lok Sabha"],
        "correctAnswerIndex": 0,
        "explanation": "Before 1976, an emergency was an"
    },
    {
        "id": "ch44-l1-q47",
        "question": "If an emergency is proclaimed strictly for the boundary State of Manipur, can the Parliament make restrictive laws for the State of Kerala (which is not under an emergency)?",
        "options": ["No, never.","Yes, the 42nd Amendment specifically allowed Parliament to make laws for a non-emergency state if the security of the emergency-struck area is threatened by activities in that outer state."],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment included a powerful"
    },
    {
        "id": "ch44-l1-q48",
        "question": "Assertion (A): Article 358 possesses a wider territorial scope than Article 359. Reason (R): Article 358 automatically blankets the entire territory of India, whereas Article 359 can be surgically restricted to a specific part.",
        "options": ["Both A and R are true, and R is the correct explanation.","Both A and R are true, but R is not the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This is a core distinction. The moment Article 358 triggers, the six freedoms of Article 19 are wiped out across the entire country simultaneously. Conversely, the President can geofence an Article 359 order strictly to a conflict zone."
    },
    {
        "id": "ch44-l1-q49",
        "question": "Assertion (A): The 1975 emergency is classified as",
        "options": ["Both A and R are true, and R explains A.","Both A and R are true, but R does not explain A.","A is true, but R is false.","A is false."],
        "correctAnswerIndex": 0,
        "explanation": "Constitutional classification depends strictly on the invoked ground. 1962 and 1971 were external security threats (War/Aggression), making them"
    },
    {
        "id": "ch44-l1-q50",
        "question": "Is the Rajya Sabha",
        "options": ["No, the Rajya Sabha is functionally irrelevant in emergencies.","Yes, the Rajya Sabha MUST approve it within the initial 1-month window to keep the proclamation legally alive until the new Lok Sabha is formed."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution abhors a vacuum. If the Lok Sabha dissolves, the Rajya Sabha acts as the solitary constitutional sentry. If the upper house fails to approve it within the mandatory 30 days, the emergency dies instantly."
    },
    {
        "id": "ch44-l1-q51",
        "question": "How does a National Emergency contrast with President",
        "options": ["In National Emergency, it is dissolved; in President","In a National Emergency, it continues to physically function and legislate; in President"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 352, the state continues operating, albeit subordinate to Central directions. Under Article 356, the state"
    },
    {
        "id": "ch44-l1-q52",
        "question": "In a National Emergency, the relationship of the Centre with ALL states changes. In a localized President",
        "options": ["Only the specific state operating under the proclamation.","All neighboring contiguous states.","Only the Union Territories.","The entire country."],
        "correctAnswerIndex": 0,
        "explanation": "Article 352 is a nationwide federal shift. Article 356 is a highly targeted, localized constitutional quarantine applied strictly to the singular state demonstrating democratic failure."
    },
    {
        "id": "ch44-l1-q53",
        "question": "Which Article is described by constitutional scholars as the unique",
        "options": ["Article 352.","Article 356.","Article 360.","Article 368."],
        "correctAnswerIndex": 0,
        "explanation": "Article 352 is structurally brilliant: it allows the Indian state to seamlessly morph from a peacetime federal structure into a highly centralized unitary command during a crisis, reverting without needing formal constitutional amendments."
    },
    {
        "id": "ch44-l1-q54",
        "question": "If the President issues a blanket order under Article 359 suspending Article 32 (Right to Constitutional Remedies through the Supreme Court):",
        "options": ["The High Courts can theoretically still issue writs under their wider Article 226 powers, unless the Presidential Order explicitly prohibits them as well.","The High Courts automatically lose all writ jurisdictions globally.","The Armed Forces assume all judicial duties.","The state governments can veto the order."],
        "correctAnswerIndex": 0,
        "explanation": "Article 32 is a gateway specifically to the Supreme Court. While a vaguely drafted Article 359 order might block Article 32, a citizen might still approach a High Court via Article 226, unless the Presidential Order meticulously bars all judicial enforcement."
    },
    {
        "id": "ch44-l1-q55",
        "question": "What is the currently valid constitutional ground for declaring a",
        "options": ["Internal Disturbance.","Armed Rebellion.","Civil War.","General Strike."],
        "correctAnswerIndex": 1,
        "explanation": "Following the 44th Amendment in 1978, the incredibly vague phrase"
    },
    {
        "id": "ch44-l1-q56",
        "question": "Does the term",
        "options": ["No, it explicitly refers only to the Prime Minister and other Ministers of Cabinet Rank.","Yes, it encompasses the entire Council of Ministers."],
        "correctAnswerIndex": 0,
        "explanation": "Article 352 is the ONLY place in the original Constitution where the word"
    },
    {
        "id": "ch44-l1-q57",
        "question": "Which specific Article deals directly with the",
        "options": ["Article 358.","Article 359.","Article 352.","Article 355."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 358 deals exclusively and automatically with Article 19, Article 359 is the broader mechanism that empowers the President to issue specific orders suspending the judicial ENFORCEMENT of any other constitutional right."
    },
    {
        "id": "ch44-l1-q58",
        "question": "If the President dictates an executive order under Article 359 to paralyze fundamental rights, that order must constitutionally be:",
        "options": ["Laid before both Houses of Parliament as soon as may be.","Kept secret in the Ministry of Defence.","Approved solely by the NITI Aayog.","Reviewed by the Governor."],
        "correctAnswerIndex": 0,
        "explanation": "Despite being an enormous grant of dictatorial executive power, the President"
    },
    {
        "id": "ch44-l1-q59",
        "question": "During an emergency, if the Union Parliament heavily drafts laws concerning pure State List subjects, and the emergency ends smoothly, those laws:",
        "options": ["Instantly evaporate the day the emergency drops.","Will remain functionally operative for exactly six months, after which they automatically cease to have effect to the extent of their incompetency.","Become permanent central statutes."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution provides a six-month"
    },
    {
        "id": "ch44-l1-q60",
        "question": "Can a state move the Supreme Court to legally contest the sheer proclamation of a National Emergency?",
        "options": ["Yes, under the original jurisdiction of Article 131 if it feels its federal rights are being malafidely usurped.","No, emergency powers are utterly beyond the realm of federal judicial challenge."],
        "correctAnswerIndex": 0,
        "explanation": "Post-Minerva Mills, a state is not legally defenseless. If a Union government maliciously declares an emergency simply to terrorize or subvert states, an aggrieved state can invoke Article 131 to challenge the vires of the proclamation in the Supreme Court."
    },
    {
        "id": "ch44-l1-q61",
        "question": "In the context of the Minerva Mills case (1980), which of the following statements best describes the scope of Judicial Review over a proclamation under Article 352?",
        "options": ["The court can examine the sufficiency of the material on which the President based his satisfaction.","The court can only examine if the satisfaction was based on malafides or wholly irrelevant grounds.","The proclamation is a","and is completely outside the jurisdiction of the courts.","The court must wait for the Parliament to approve the proclamation before reviewing it."],
        "correctAnswerIndex": 1,
        "explanation": "While declaring that emergency proclamations are not immune to judicial scrutiny, the Supreme Court severely restricted its own interference: courts cannot weigh the"
    },
    {
        "id": "ch44-l1-q62",
        "question": "If a National Emergency is proclaimed on the ground of",
        "options": ["No, Article 19 is automatically suspended.","Yes. Article 358 (automatic suspension of Art 19) only triggers during","emergencies (War/External Aggression), not","ones (Armed Rebellion).","Only if the President specifically mentions it in his order under Article 359.","Only in the Union Territories."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment defanged Article 358"
    },
    {
        "id": "ch44-l1-q63",
        "question": "Article 355 imposes a duty on the Union to protect States against",
        "options": ["Article 355 is merely suggestive, while 352 is binding.","Article 355 can be invoked to deploy central paramilitary forces to a state to assist local police without declaring a sweeping, structural emergency under Article 352.","Article 352 transforms the entire federal structure, while Article 355 requires the Governor","There is no difference; they trigger simultaneously."],
        "correctAnswerIndex": 1,
        "explanation": "As clarified by the Sarkaria Commission, Article 355 acts as a constitutional"
    },
    {
        "id": "ch44-l1-q64",
        "question": "During a National Emergency, can the Union Government",
        "options": ["No,","strictly remains a State List subject (Entry 2) and the Centre cannot interfere.","Yes. Under Article 353, the sweeping executive power of the Union to give binding directions extends to",", effectively subjugating the State"],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional architecture of Article 353 obliterates federal boundaries during a crisis. The Union"
    },
    {
        "id": "ch44-l1-q65",
        "question": "When a Presidential Order is issued under Article 359, it",
        "options": ["They are temporarily excised and deleted from the Constitution.","They remain alive in the constitutional text, but any dictatorial law or executive action grossly inconsistent with them cannot be structurally challenged in court during that specific temporal window.","They are legally shifted to the Directive Principles.","They continue to be enforceable by the Supreme Court but paralyzed in High Courts."],
        "correctAnswerIndex": 1,
        "explanation": "Article 359 does not repeal the rights. It acts as an impenetrable procedural shield preventing citizens from actually accessing the legal machinery (Writs/Courts) to complain about a blatant violation committed by the State until the order expires."
    },
    {
        "id": "ch44-l1-q66",
        "question": "The landmark Makhan Singh vs. State of Punjab case clarified that the",
        "options": ["Exclusively restricted to Article 32 (Supreme Court jurisdiction).","Only Article 226 (High Court jurisdiction).","Any court or tribunal for the enforcement of the specified rights, encompassing both Art 32 and Art 226 globally.","Only the district and subordinate courts."],
        "correctAnswerIndex": 2,
        "explanation": "To ensure absolute executive supremacy during martial-like conditions, the Supreme Court ruled that an Article 359 blanket order paralyzes the entire judicial hierarchy, blocking the enforcement of named rights in the Supreme Court, High Courts, and all inferior tribunals simultaneously."
    },
    {
        "id": "ch44-l1-q67",
        "question": "If the Union Parliament enacts a law on a State List subject during a National Emergency, and the State legislature defiantly passes a conflicting law on the very same subject:",
        "options": ["The State law is void from its inception for lack of legislative competence.","The State legislature retains competence, so its law is validly born, but the Parliamentary law constitutionally prevails in case of repugnancy under Article 251.","The Governor must act as an arbiter to decide which law to apply.","The State law is only valid if it receives Presidential assent over the parliamentary law."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Canada, where provincial powers are wiped out, Article 250 empowers Parliament concurrently without suspending the State"
    },
    {
        "id": "ch44-l1-q68",
        "question": "During a National Emergency, the President can unilaterally modify the complex constitutional distribution of fiscal revenues (Articles 268 to 279). Such an extreme financial order:",
        "options": ["Automatically expires the exact moment the emergency ends.","Can legally persist until the end of the financial year in which the emergency officially ceases to operate.","Must be ratified by at least half of the State Legislatures to prevent fiscal extortion.","Is an absolute executive prerogative immune to any parliamentary oversight whatsoever."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent chaotic mid-year fiscal shocks and budget collapse in the states, Article 354 states that while a Presidential order altering the financial flow is tied to the emergency, it possesses the inertia to functionally operate until the closure of that specific fiscal financial year, even if the emergency ends sooner."
    },
    {
        "id": "ch44-l1-q69",
        "question": "If the Lok Sabha is unfortunately dissolved when a National Emergency is in force, and the 6-month extension period is imminently about to expire, who is constitutionally empowered to authorize its further survival?",
        "options": ["The assertive action of the President, via an absolute ordinance.","The continuous, solitary vigilance of the Rajya Sabha alone, which can unilaterally approve its continuance until the new Lok Sabha is constituted.","The Chief Justice of India acting as the constitutional custodian.","The emergency automatically and irreversibly lapses."],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha"
    },
    {
        "id": "ch44-l1-q70",
        "question": "A resolution for",
        "options": ["Technically grant more veto power to the indirectly elected Rajya Sabha.","Establish an","—making it exceptionally difficult for an authoritarian executive to start an emergency, but remarkably easy for the people","Favour a ruling party managing a coalition.","Avoid the intervention of the President"],
        "correctAnswerIndex": 1,
        "explanation": "Following the trauma of 1975, the Constitution was rewired to be highly hostile to emergencies. The high special-majority threshold acts as a massive lock preventing casual imposition, while the low simple-majority exit acts as a rapid-release fail-safe solely controlled by the directly elected lower house."
    },
    {
        "id": "ch44-l1-q71",
        "question": "Assertion (A): The 44th Amendment Act legally transformed the National Emergency mechanism into a",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The 38th Amendment (1975) was designed to paralyze the courts by sealing the President"
    },
    {
        "id": "ch44-l1-q72",
        "question": "Can the democratic tenure of a State Legislative Assembly be extended multiple times sequentially during a prolonged National Emergency?",
        "options": ["No, only once.","Yes, for precise increments of one year at a time, for any unlimited number of years, strictly provided the emergency itself aggressively remains in operational force.","Only with the express, formal consent of the Governor acting on the Chief Minister","Only for a combined, absolute maximum total of 3 cumulative years."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution places no absolute sunset cap during an active crisis. Parliament can theoretically extend a state assembly’s life again and again, year after year, so long as it is done in one-year legal increments and the National Emergency itself has not been revoked."
    },
    {
        "id": "ch44-l1-q73",
        "question": "Which of the following describes the sweeping, brutal legal consequence of the automatic suspension of Article 19 specifically triggered beneath Article 358?",
        "options": ["The State is instantly freed from the constitutional obligation to respect Art 19 while furiously manufacturing new laws or initiating draconian executive action.","Any dictatorial law structurally crafted during this time is magically immunized and remains permanently valid even decades after the emergency ends.","Only the macroscopic Union Government is legally freed from Art 19 restraints, not the vulnerable State Governments.","The Supreme Court can still arbitrarily issue commanding writs for Art 19 utilizing its","."],
        "correctAnswerIndex": 0,
        "explanation": "Article 358 effectively functions as an"
    },
    {
        "id": "ch44-l1-q74",
        "question": "If the President aggressively issues a subsequent, sweeping proclamation of emergency while the previous one is stubbornly already in active force (e.g., overlapping the 1971 external emergency with the 1975 internal emergency):",
        "options": ["The vastly older, first one is automatically, legally revoked by implication.","Both chillingly operate simultaneously side-by-side (a mechanism violently affirmed by the infamous 38th Amendment).","The reckless second one is inherently, fundamentally unconstitutional.","The Parliament must logically merge them into one singular, unified crisis act."],
        "correctAnswerIndex": 1,
        "explanation": "The 38th Amendment (1975) specifically clarified that the President wields the power to declare multiple, overlapping emergencies on differing constitutional grounds (e.g., War vs. Internal Disturbance), allowing them to operate concurrently in independent legal spheres."
    },
    {
        "id": "ch44-l1-q75",
        "question": "In the ADM Jabalpur case, Justice H.R. Khanna",
        "options": ["Article 21 is exclusively the sole, absolute repository of the right to life.","Even in the total, terrifying absence of Article 21","The all-powerful President","The drastic emergency itself should never, under any circumstances, be declared."],
        "correctAnswerIndex": 1,
        "explanation": "Justice Khanna immortally argued that the right to life is not a"
    },
    {
        "id": "ch44-l1-q76",
        "question": "Under Article 359, the President can suspend the right to move any court for the enforcement of",
        "options": ["No, the Supreme Court","Yes. The suspension of the right to enforce specifically named fundamental rights structurally paralyzes Article 32 regarding those named rights, acting as an impenetrable procedural barrier."],
        "correctAnswerIndex": 1,
        "explanation": "The mechanism is deviously powerful: Article 359 does not delete the substantive right (like Speech/Religion), but by suspending the"
    },
    {
        "id": "ch44-l1-q77",
        "question": "During an aggressive National Emergency, the invisible",
        "options": ["Is strictly limited to the domestic borders of the constituent States.","Extends forcefully to the entire sovereign territory of India, utterly regardless of the rigid legislative divisions encoded in the Seventh Schedule."],
        "correctAnswerIndex": 1,
        "explanation": "A National Emergency acts as a federal bulldozer. The Union"
    },
    {
        "id": "ch44-l1-q78",
        "question": "If an antagonistic State Government blatantly and willfully refuses to follow a lawful executive direction issued by the Union during a raging National Emergency, what is the most constitutionally direct, severe consequence?",
        "options": ["The defiant Chief Minister is immediately criminally arrested for treason.","Article 365 can be instantaneously invoked, creating an unassailable presumption that the State","s Rule (Article 356).","The rebellious State","The Union Cabinet forcefully occupies the State"],
        "correctAnswerIndex": 1,
        "explanation": "Article 365 is the ultimate Central"
    },
    {
        "id": "ch44-l1-q79",
        "question": "The critical",
        "options": ["Exclusively by the President acting on prime ministerial advice.","The Speaker of the Lok Sabha (if the resilient House is actively in session) or the President (if the House is unfortunately prorogued/not in session).","The Prime Minister holding the majority.","The Leader of the Opposition holding shadows."],
        "correctAnswerIndex": 1,
        "explanation": "To bypass executive stonewalling, the 44th Amendment created an independent trigger mechanism. If the Parliament is running, the Speaker is bound to summon the special sitting. If Parliament is shut, the rebellious MPs bypass the PM and petition the President directly, who is bound to summon it within 14 days."
    },
    {
        "id": "ch44-l1-q80",
        "question": "Does the devastating",
        "options": ["Yes, its collective life is arbitrarily extended by 1 year identical to the Lok Sabha.","No, it is an indestructible, permanent body; its members"],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha is designed as the"
    },
    {
        "id": "ch44-l1-q81",
        "question": "The rigorous",
        "options": ["An absolute 2/3rd of the total membership of the House.","An absolute majority of the total membership (more than 50%) PLUS a 2/3rd super-majority of the members actually present and voting.","A simple majority of both houses jammed together in a joint sitting.","An absolute majority of the Lok Sabha entirely ignoring the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "This dual-lock threshold is extremely difficult to achieve. It prevents a government from exploiting a sparsely attended parliament. The ruling party must physically haul in at least 50% of its base, AND simultaneously secure a 2/3rd super-majority of all members sitting in the chamber."
    },
    {
        "id": "ch44-l1-q82",
        "question": "Which specific Article acts as the chilling",
        "options": ["Article 352.","Article 358.","Article 359.","Article 355."],
        "correctAnswerIndex": 1,
        "explanation": "Article 358 is an automatic guillotine. The exact second a National Emergency is declared citing"
    },
    {
        "id": "ch44-l1-q83",
        "question": "In which tumultuous year was the highly subjective, controversial ground of",
        "options": ["1962.","1971.","1975.","1991."],
        "correctAnswerIndex": 2,
        "explanation": "Indira Gandhi controversially cited the vague"
    },
    {
        "id": "ch44-l1-q84",
        "question": "Can the all-powerful Union Parliament ruthlessly pass a terrifying",
        "options": ["Yes, the emergency overrides all peacetime criminal jurisprudence.","No. Because the 44th Amendment rendered Article 20 categorically non-suspendable, the constitutional shield explicitly banning retrospective criminal convictions remains utterly impenetrable, even during war."],
        "correctAnswerIndex": 1,
        "explanation": "Article 20 contains the absolute prohibition against"
    },
    {
        "id": "ch44-l1-q85",
        "question": "Which specific constitutional Article deals with the catastrophic",
        "options": ["Article 352.","Article 356.","Article 360.","Article 365."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356, infamously known as"
    },
    {
        "id": "ch44-l1-q86",
        "question": "Is the prestigious",
        "options": ["Yes, as all fiscal matters are forcibly centralized.","No, the institution survives intact, but its critical revenue-sharing recommendations can be drastically modified or halted by a decisive President"],
        "correctAnswerIndex": 1,
        "explanation": "The Finance Commission as a constitutional body is not erased. However, the normal peacetime formula transferring wealth to the states is temporarily circumvented; the President assumes extraordinary fiscal powers under Article 354 to hoard Union resources for the crisis effort."
    },
    {
        "id": "ch44-l1-q87",
        "question": "The notorious 38th Amendment Act (1975) shockingly allowed the President to issue",
        "options": ["Still menacingly in force in the constitutional text today.","Gloriously repealed and annihilated by the 44th Amendment in 1978."],
        "correctAnswerIndex": 0,
        "explanation": "Fascinatingly, while the 44th Amendment rolled back many horrors of the 38th/42nd Amendments, this specific provision survived. The President still legally possesses the constitutional capability to declare distinct emergencies (e.g., one for war, another overlapping one for armed rebellion in a different zone)."
    },
    {
        "id": "ch44-l1-q88",
        "question": "Which landmark judicial case courageously established the immortal doctrine that",
        "options": ["The massive Kesavananda Bharati case.","The expansive Justice K.S. Puttaswamy case (Right to Privacy).","The Minerva Mills case.","The Waman Rao case."],
        "correctAnswerIndex": 1,
        "explanation": "In 2017, the legendary nine-judge bench in the Puttaswamy case formally and expressly overruled the disastrous ADM Jabalpur judgment. It declared that life and personal liberty are primordial, inalienable human rights that exist entirely independent of the written text of Article 21."
    },
    {
        "id": "ch44-l1-q89",
        "question": "If the President dictates a terrifying order under Article 359 suspending right enforcement, but it is blatantly not formally laid before Parliament for scrutiny:",
        "options": ["The order is instantaneously constitutionally void.","The order technically remains chillingly valid, but the Union Government is guilty of a grave procedural irregularity and political breach of faith.","The President faces immediate, mandatory impeachment.","The order mathematically ceases to violently operate after an exact 30-day window."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 359 commands that the order"
    },
    {
        "id": "ch44-l1-q90",
        "question": "How many consecutive years can a state",
        "options": ["National Emergency has a 3-year cap; President","President","s assembly extensions possess zero constitutional maximum theoretical limit.","Both possess a strict 1-year threshold.","Neither process affects state assemblies."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 356 (President"
    },
    {
        "id": "ch44-l1-q91",
        "question": "Which of the following Articles of the Constitution of India deal with the composition, appointment, and removal of members of the UPSC?",
        "options": ["Articles 315 to 323","Articles 324 to 329","Articles 308 to 314","Articles 280 to 285"],
        "correctAnswerIndex": 0,
        "explanation": "Articles 315 to 323 in Part XIV of the Constitution deal comprehensively with the Union Public Service Commission and State Public Service Commissions — covering their establishment, composition, appointment, removal, functions, and independence."
    },
    {
        "id": "ch44-l1-q92",
        "question": "The Chairman and other members of the Union Public Service Commission are appointed by:",
        "options": ["The Prime Minister","The Chief Justice of India","The President of India","The Parliament by a simple majority"],
        "correctAnswerIndex": 2,
        "explanation": "Article 316(1) provides that the Chairman and other members of the UPSC shall be appointed by the President of India. No consultation with any other constitutional authority is mandated for this appointment."
    },
    {
        "id": "ch44-l1-q93",
        "question": "The Constitution does NOT fix the maximum strength of the UPSC. It is left to the discretion of:",
        "options": ["The Parliament","The Chief Justice of India","The President","The Chairman of the UPSC"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not prescribe a fixed number of members for the UPSC. Article 316 leaves it to the President to determine the strength. However, it mandates that at least half of the members should be persons who have held office for at least ten years under the Government."
    },
    {
        "id": "ch44-l1-q94",
        "question": "A member of the UPSC holds office for a term of:",
        "options": ["5 years or until the age of 62","6 years or until the age of 65, whichever is earlier","6 years or until the age of 70","5 years or until the age of 65"],
        "correctAnswerIndex": 1,
        "explanation": "A member of the UPSC holds office for a term of 6 years or until the age of 65 years, whichever is earlier. This is provided under Article 316(2). They can resign at any time by addressing their resignation to the President."
    },
    {
        "id": "ch44-l1-q95",
        "question": "Regarding the qualifications for the members of the UPSC, the Constitution stipulates that:",
        "options": ["All members must be retired IAS officers","At least half of the members should be persons who have held office for at least ten years under the Government of India or a State Government","No specific qualifications are mentioned except for the Chairman","Members must be eminent jurists or academics"],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(1) mandates that as nearly as may be one-half of the members of the UPSC should be persons who at the date of their appointment have held office for at least ten years under the Government. This ensures a blend of experience."
    },
    {
        "id": "ch44-l1-q96",
        "question": "The conditions of service of the Chairman and members of the UPSC are determined by:",
        "options": ["The Parliament","The Cabinet Secretary","The President","The Constitution itself"],
        "correctAnswerIndex": 2,
        "explanation": "Article 318 provides that the President may make regulations determining the conditions of service of the Chairman and members of the UPSC. These regulations must be laid before each House of Parliament."
    },
    {
        "id": "ch44-l1-q97",
        "question": "To whom does a member of the UPSC address their resignation?",
        "options": ["The Chief Justice of India","The Prime Minister","The President","The Chairman of the UPSC"],
        "correctAnswerIndex": 2,
        "explanation": "A member of the UPSC can resign at any time by addressing their resignation to the President (Article 316). The resignation takes effect from the date on which it is accepted by the President."
    },
    {
        "id": "ch44-l1-q98",
        "question": "The expenses of the UPSC, including salaries and allowances, are:",
        "options": ["Voted by the Lok Sabha annually","Charged on the Consolidated Fund of India","Paid from the Contingency Fund of India","Decided by the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The expenses of the UPSC are"
    },
    {
        "id": "ch44-l1-q99",
        "question": "The UPSC presents its annual report on its performance to:",
        "options": ["The Parliament","The President","The Prime Minister","The Ministry of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323(1) requires the UPSC to present its annual report to the President. The President then causes the report to be laid before each House of Parliament, along with a memorandum explaining the cases where the UPSC"
    },
    {
        "id": "ch44-l1-q100",
        "question": "The Chairman of the UPSC, upon ceasing to hold office, is:",
        "options": ["Eligible for re-appointment to the same post","Eligible for employment as a Governor of a state","Ineligible for further employment under the Government of India or a State","Eligible to become the Chief Election Commissioner"],
        "correctAnswerIndex": 2,
        "explanation": "Article 319 provides that the Chairman of the UPSC, on ceasing to hold office, is ineligible for further employment either under the Government of India or under the Government of a State. This strict bar ensures post-retirement independence."
    },
    {
        "id": "ch44-l1-q101",
        "question": "The President can appoint an",
        "options": ["When the office of the Chairman falls vacant","When the Chairman is unable to perform his duties due to absence or any other reason","When the Chairman is under suspension pending a Supreme Court inquiry","Both (a) and (b)"],
        "correctAnswerIndex": 3,
        "explanation": "Article 316(1A) provides that the President can appoint a senior member of the UPSC as Acting Chairman when the office of the Chairman is vacant or when the Chairman is unable to perform his duties."
    },
    {
        "id": "ch44-l1-q102",
        "question": "The removal of a member of the UPSC on the ground of",
        "options": ["A Committee of Parliament","The Supreme Court of India","The Central Vigilance Commission","The President himself"],
        "correctAnswerIndex": 1,
        "explanation": "Article 317(1) provides that the President can remove a UPSC member for"
    },
    {
        "id": "ch44-l1-q103",
        "question": "A member of the UPSC (other than the Chairman) is eligible for appointment as:",
        "options": ["The Chairman of a State Public Service Commission","The Chairman of the UPSC","Both (a) and (b)","Neither (a) nor (b)"],
        "correctAnswerIndex": 2,
        "explanation": "Article 319 provides that a member of the UPSC (other than Chairman) is eligible for appointment as (a) the Chairman of the UPSC itself, or (b) the Chairman of a State PSC. However, they are ineligible for any other government employment."
    },
    {
        "id": "ch44-l1-q104",
        "question": "The UPSC is described as the",
        "options": ["Controlling the training of civil servants","Recruitment to All-India Services and Central Services Group A and B","Deciding the pay scales of bureaucrats","Cadre management of the IAS"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC"
    },
    {
        "id": "ch44-l1-q105",
        "question": "Who handles the",
        "options": ["Ministry of Home Affairs","Ministry of Personnel (Department of Personnel and Training - DoPT)","NITI Aayog","The Cabinet Secretariat"],
        "correctAnswerIndex": 1,
        "explanation": "The Department of Personnel and Training (DoPT) under the Ministry of Personnel handles cadre management, classification of services, training, and career management of civil servants. The UPSC"
    },
    {
        "id": "ch44-l1-q106",
        "question": "Is the advice given by the Supreme Court regarding the removal of a UPSC member binding on the President?",
        "options": ["No, it is purely advisory","Yes, it is binding on the President","It is binding only if concurred by the Prime Minister","It is subject to the approval of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court"
    },
    {
        "id": "ch44-l1-q107",
        "question": "Which of the following falls under the definition of",
        "options": ["Being interested in any contract or agreement made by the Government of India","Participating in the profits of a company in a manner common with other members","Both (a) and (b)","Neither (a) nor (b)"],
        "correctAnswerIndex": 2,
        "explanation": "Article 317(3) defines"
    },
    {
        "id": "ch44-l1-q108",
        "question": "The UPSC is NOT consulted on which of the following matters?",
        "options": ["Methods of recruitment to civil services","Disciplinary matters affecting a person serving under the Government","While making reservations of appointments in favour of any backward class of citizens","Principles to be followed in making promotions and transfers"],
        "correctAnswerIndex": 2,
        "explanation": "Article 320(4) specifically exempts the UPSC from being consulted on matters related to reservation of appointments for backward classes. This ensures that the executive retains full discretion over affirmative action policies."
    },
    {
        "id": "ch44-l1-q109",
        "question": "Can the Parliament extend the functions of the UPSC?",
        "options": ["No, the functions are fixed by the Constitution","Yes, by an act of Parliament","Only with the prior consent of the President","Only during a National Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 empowers Parliament to confer additional functions on the UPSC. This can include functions related to any local authority, body corporate, or public institution as Parliament may specify by law."
    },
    {
        "id": "ch44-l1-q110",
        "question": "If the Government does not follow the advice of the UPSC in a specific matter:",
        "options": ["The decision becomes null and void","The President must explain the reasons for non-acceptance in a memorandum to Parliament","The Chairman of UPSC can move the Supreme Court","The concerned official can claim damages in a civil court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323(1) requires the President to lay the UPSC"
    },
    {
        "id": "ch44-l1-q111",
        "question": "The President can remove a UPSC member on the following grounds WITHOUT a Supreme Court inquiry:",
        "options": ["Misbehaviour only","Insolvency, engagement in paid employment, or infirmity of mind or body","Corruption","Political bias"],
        "correctAnswerIndex": 1,
        "explanation": "Article 317(2) allows the President to remove a UPSC member directly (without SC inquiry) if the member: (a) is adjudged an insolvent, (b) engages in any paid employment outside the duties of office, or (c) is unfit due to infirmity of mind or body."
    },
    {
        "id": "ch44-l1-q112",
        "question": "Which Article provides for a",
        "options": ["Article 315","Article 315(2)","Article 320","Article 323"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(2) provides for the creation of a Joint State Public Service Commission (JSPSC) by an Act of Parliament, on the request of the concerned state legislatures. The Chairman and members are appointed by the President."
    },
    {
        "id": "ch44-l1-q113",
        "question": "The UPSC can be requested to serve the needs of a State if:",
        "options": ["The Governor of the state requests it and the President approves","The Prime Minister directs it","The state legislature passes a resolution","The Chief Minister requests the CJI"],
        "correctAnswerIndex": 0,
        "explanation": "Article 315(4) provides that the UPSC can serve the needs of a State if the Governor requests it and the President approves. This is typically done for states that do not have a properly functioning SPSC."
    },
    {
        "id": "ch44-l1-q114",
        "question": "The UPSC must be consulted on all matters relating to:",
        "options": ["Plans for economic development","Methods of recruitment to civil services and civil posts","The Union Budget allocation","Foreign policy decisions"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(3) mandates that the UPSC shall be consulted on (a) methods of recruitment, (b) principles for appointments and promotions, (c) disciplinary matters, and (d) claims for reimbursement of legal expenses by civil servants."
    },
    {
        "id": "ch44-l1-q115",
        "question": "The UPSC",
        "options": ["Judicial review of the UPSC","Parliamentary scrutiny and accountability of the government","The UPSC","The promotion of all recommended candidates"],
        "correctAnswerIndex": 1,
        "explanation": "The memorandum requirement ensures that Parliament is informed whenever the Government departs from UPSC advice, promoting transparency and accountability. This is a democratic check on the executive"
    },
    {
        "id": "ch44-l1-q116",
        "question": "The Chairman and members of the UPSC are NOT eligible for re-appointment to the same office. This provision:",
        "options": ["Weakens the UPSC","Strengthens the independence of UPSC members by removing the incentive to please the Government for re-appointment","Is a recent change introduced in 2023","Applies only to the Chairman, not members"],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(3) prohibits re-appointment of UPSC members, including the Chairman. This is a critical independence safeguard — by ensuring no member can be re-appointed, it removes the temptation to act in a manner favorable to the Government to secure a second term."
    },
    {
        "id": "ch44-l1-q117",
        "question": "The",
        "options": ["Assisting States in framing schemes of joint recruitment if requested","Serving the needs of a state on the request of the Governor with the President","Both (a) and (b)","Neither (a) nor (b)"],
        "correctAnswerIndex": 2,
        "explanation": "Article 315(4) allows the UPSC to serve state needs on Governor"
    },
    {
        "id": "ch44-l1-q118",
        "question": "The role of the UPSC has been affected by the emergence of which body in disciplinary matters?",
        "options": ["Central Bureau of Investigation (CBI)","Central Vigilance Commission (CVC)","Lokpal","National Human Rights Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The CVC, established in 1964 (statutory status in 2003), has taken over a significant advisory role in disciplinary matters involving corruption, which was previously in the UPSC"
    },
    {
        "id": "ch44-l1-q119",
        "question": "The President can exclude certain posts and services from the purview of the UPSC. These exclusion regulations must be:",
        "options": ["Approved by the Supreme Court","Laid before each House of Parliament for at least 14 days","Signed by the CJI","Voted on by the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(4) allows the President to make regulations excluding posts/services from UPSC consultation. However, Article 320(5) mandates that these regulations must be laid before each House of Parliament for at least 14 days, during which they can be modified or annulled."
    },
    {
        "id": "ch44-l1-q120",
        "question": "The UPSC conducts which of the following examinations?",
        "options": ["Civil Services Examination (CSE) only","CSE, Combined Defence Services (CDS), Engineering Services, and Indian Forest Service examinations among others","Only examinations for Class-IV government employees","Only the IAS examination"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC conducts multiple recruitment examinations including the Civil Services Examination (CSE), Combined Defence Services (CDS), Engineering Services Examination (ESE), Indian Forest Service (IFS), National Defence Academy (NDA), Combined Medical Services, and others."
    },
    {
        "id": "ch44-l1-q121",
        "question": "The Constitution mandates that at least half of the UPSC members should have held office for at least ten years under the Government. The period of service computed for this purpose includes service under:",
        "options": ["Only the Central Government","Both the Central Government and State Governments","Only the IAS cadre","Only the judiciary"],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(1) specifies that the ten-year service requirement can be fulfilled by service under either the Government of India or the Government of a State. This ensures that members with both central and state-level administrative experience are represented."
    },
    {
        "id": "ch44-l1-q122",
        "question": "The UPSC",
        "options": ["The Government is legally bound to follow every recommendation of the UPSC","The Government is not legally bound to accept the UPSC","The UPSC","The UPSC can compel the Government to follow its recommendations through the courts"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC is advisory — its recommendations are not binding. However, Article 323 requires the Government to explain cases where the advice was not followed in a memorandum laid before Parliament. This creates accountability but not legal compulsion."
    },
    {
        "id": "ch44-l1-q123",
        "question": "A key distinction between the removal of a UPSC Chairman and the removal of a High Court Judge is:",
        "options": ["Both are removed by the same process — impeachment by Parliament","The UPSC Chairman is removed by the President after a Supreme Court inquiry (Article 317), while a High Court Judge is removed by the President on an address passed by both Houses of Parliament (Article 217/124)","The UPSC Chairman can be removed by the PM, while a Judge requires Parliament","There is no distinction; both processes are identical"],
        "correctAnswerIndex": 1,
        "explanation": "The removal processes differ: UPSC members are removed by the President after a SC inquiry under Article 317. High Court/SC Judges are removed via a parliamentary address (impeachment) under Articles 124/217. The UPSC process is executive-judicial, while the judicial removal is purely parliamentary."
    },
    {
        "id": "ch44-l1-q124",
        "question": "The UPSC must be consulted on claims for reimbursement of legal expenses incurred by a civil servant. This function falls under which category?",
        "options": ["Recruitment function","Advisory function under Article 320(3)(d)","Quasi-judicial function","Legislative function"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(3)(d) specifically requires the UPSC to be consulted on claims by civil servants for reimbursement of legal expenses incurred in defending proceedings instituted against them in their official capacity. This is an advisory function."
    },
    {
        "id": "ch44-l1-q125",
        "question": "The",
        "options": ["It violates Article 315","It undermines the","upheld by the UPSC and raises concerns about transparency, reservation compliance, and political patronage in appointments to key positions","It was declared unconstitutional by the Supreme Court","It was introduced by the UPSC itself"],
        "correctAnswerIndex": 1,
        "explanation": "While the lateral entry scheme involves the UPSC, critics argue it bypasses the rigorous CSE process, does not apply reservation provisions, and may open the door to politically-influenced appointments. The scheme was paused in 2024 after significant controversy over the lack of reservation."
    },
    {
        "id": "ch44-l1-q126",
        "question": "The UPSC conducts examinations for recruitment. Can the Government exclude certain posts from the UPSC",
        "options": ["No, all government posts must go through the UPSC","Yes, the President can make regulations excluding posts from UPSC consultation, but these must be laid before Parliament","Only the Supreme Court can authorize exclusions","Only during a National Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(4) allows the President to make regulations specifying matters in which the UPSC need not be consulted, but Article 320(5) requires these regulations to be laid before each House of Parliament for at least 14 days, during which they may be modified or annulled."
    },
    {
        "id": "ch44-l1-q127",
        "question": "How does the",
        "options": ["Both are constitutional bodies","The UPSC is a constitutional body (Articles 315-323), while the SSC is a non-constitutional, statutory body created by executive resolution — it conducts recruitment for Group C and erstwhile Group D posts","The SSC is superior to the UPSC","The SSC is a subsidiary of the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC has constitutional status under Part XIV. The SSC was created by an executive resolution in 1975 and handles Group C recruitment, while the UPSC handles Group A and Group B (gazetted) recruitment. The SSC has no constitutional protection for its independence."
    },
    {
        "id": "ch44-l1-q128",
        "question": "The concept of",
        "options": ["Article 315","Article 312","Article 320","Article 324"],
        "correctAnswerIndex": 1,
        "explanation": "Article 312 empowers Parliament to create new All India Services (beyond IAS, IPS, IFS) if the Rajya Sabha passes a resolution supported by not less than two-thirds of the members present and voting. The UPSC then conducts the recruitment for these services."
    },
    {
        "id": "ch44-l1-q129",
        "question": "The",
        "options": ["Abolition of the UPSC","Strengthening the UPSC by giving it more teeth — including making its recommendations on disciplinary matters binding, and reforming the examination system to test aptitude rather than rote learning","Replacing the UPSC with a computerized system","Merging the UPSC with the Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The 2nd ARC (under Veerappa Moily) recommended making UPSC recommendations binding in disciplinary cases, reforming the CSE pattern to focus on aptitude and analytical skills, and strengthening the UPSC"
    },
    {
        "id": "ch44-l1-q130",
        "question": "The UPSC is consulted on disciplinary matters affecting All India Services officers. At what level does the UPSC typically become involved?",
        "options": ["For all minor penalties","Only for major penalties like dismissal, removal, or compulsory retirement of All India Services and Group A Central Services officers","For every workplace complaint","Only on reference by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC is consulted in disciplinary cases involving major penalties (dismissal, removal, compulsory retirement, reduction in rank) for All India Services and Group A Central Services officers. Minor penalties are typically handled within the department without UPSC consultation."
    },
    {
        "id": "ch44-l1-q131",
        "question": "The",
        "options": ["Chairman of the UPSC or as a member of the UPSC","Governor of a state","Chief Secretary of any state","Chief Election Commissioner"],
        "correctAnswerIndex": 0,
        "explanation": "Article 319 provides that the Chairman of a SPSC is eligible for appointment as Chairman or member of the UPSC, but is not eligible for any other government employment. A member of a SPSC is eligible for appointment as Chairman or member of the UPSC, or Chairman of any SPSC."
    },
    {
        "id": "ch44-l1-q132",
        "question": "If the UPSC advises the Government NOT to appoint a particular candidate, but the Government proceeds with the appointment anyway:",
        "options": ["The appointment is automatically void","The UPSC can challenge it in court","The Government must explain this in the memorandum to Parliament; the appointment remains valid unless challenged on other legal grounds","The candidate must resign"],
        "correctAnswerIndex": 2,
        "explanation": "Since the UPSC"
    },
    {
        "id": "ch44-l1-q133",
        "question": "The concept of",
        "options": ["3 months","6 months","1 year","No specific duration is mentioned; the practice is regulated by executive orders and the Government decides"],
        "correctAnswerIndex": 2,
        "explanation": "The proviso to Article 320(3) allows temporary appointments for not more than one year without consulting the UPSC. However, the Government has often extended this through executive orders, which has been a subject of judicial scrutiny."
    },
    {
        "id": "ch44-l1-q134",
        "question": "The UPSC",
        "options": ["Mains → Prelims → Interview","Prelims (Objective) → Mains (Descriptive) → Personality Test (Interview)","Interview → Written Test → Group Discussion","Prelims → Personality Test → Mains"],
        "correctAnswerIndex": 1,
        "explanation": "The CSE follows: Stage 1 — Preliminary Examination (objective, screening test), Stage 2 — Main Examination (written, descriptive), and Stage 3 — Personality Test (Interview). The Prelims score is only used for screening and does not count in the final ranking."
    },
    {
        "id": "ch44-l1-q135",
        "question": "The",
        "options": ["Abolish the UPSC","The Chairman and members of the UPSC should be appointed after consultation with the Chairman of the existing UPSC, to ensure continuity and independence","Merge the UPSC with SPSCs","The UPSC should report to the PM directly"],
        "correctAnswerIndex": 1,
        "explanation": "The Sarkaria Commission recommended that the Chairman/members of the UPSC should be appointed by the President in consultation with the outgoing Chairman of the UPSC. This was to prevent political influence in appointments and ensure institutional continuity."
    },
    {
        "id": "ch44-l1-q136",
        "question": "The concept of a",
        "options": ["An executive order of the President","An Act of Parliament, on the request of the state legislatures of the concerned states","A unanimous resolution of the Rajya Sabha","A Supreme Court directive"],
        "correctAnswerIndex": 1,
        "explanation": "A JSPSC is created by an Act of Parliament, but only if the legislatures of the concerned states pass resolutions requesting it. This ensures that the states voluntarily opt for a joint commission. The Chairman and members are appointed by the President."
    },
    {
        "id": "ch44-l1-q137",
        "question": "Under the UPSC",
        "options": ["The UPSC conducts the disciplinary inquiry itself","The UPSC is consulted AFTER the inquiry is completed and BEFORE the final order is passed, to advise the appointing authority on the appropriate penalty","The UPSC has no role in disciplinary proceedings","The UPSC files the charge-sheet against the delinquent officer"],
        "correctAnswerIndex": 1,
        "explanation": "In Article 311 proceedings (dismissal/removal/reduction in rank), the inquiry is conducted by the department, not the UPSC. The UPSC is consulted at the penalty stage — after the inquiry report is ready and before the final order is passed. This is an advisory consultation."
    },
    {
        "id": "ch44-l1-q138",
        "question": "The",
        "options": ["Abolishing the interview stage of the CSE","Reducing the age limit and number of attempts for the CSE, and introducing a","channel for specialists at higher levels of government","Increasing the UPSC","Making the UPSC subordinate to the PMO"],
        "correctAnswerIndex": 1,
        "explanation": "The Hota Committee recommended streamlining the CSE (reducing age/attempts), introducing domain expertise through lateral entry, performance-based assessments for civil servants, and mandatory training modules. Many of these recommendations influenced the subsequent lateral entry debate."
    },
    {
        "id": "ch44-l1-q139",
        "question": "The",
        "options": ["IAS and IPS posts","Posts filled by deputation for less than 3 years, temporary posts of less than 1 year, and Group B non-gazetted posts","All judiciary posts","All defence positions"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC Exemption Regulations typically exclude: (a) temporary posts for less than 1 year, (b) deputation appointments for less than 3 years, (c) Group B non-gazetted posts, and (d) certain specialized posts. This prevents the UPSC from being overwhelmed with routine appointments."
    },
    {
        "id": "ch44-l1-q140",
        "question": "The phrase",
        "options": ["The creation of specialized recruitment agencies (SSC, Railway Recruitment Boards) that handle a vast majority of government recruitment","The increase in UPSC membership","The UPSC conducting too many examinations","The Supreme Court taking over UPSC functions"],
        "correctAnswerIndex": 0,
        "explanation": "The UPSC"
    },
    {
        "id": "ch44-l1-q141",
        "question": "Can the UPSC recommend candidates for appointment to posts under a",
        "options": ["No, the UPSC has no jurisdiction over non-governmental bodies","Yes, but only if Parliament passes a law under Article 321 extending the UPSC","Only with the approval of the Supreme Court","Only during a Financial Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 specifically empowers Parliament to extend the UPSC"
    },
    {
        "id": "ch44-l1-q142",
        "question": "The UPSC",
        "options": ["50% of total marks","Approximately 15% of the total marks (275 out of 2025)","25% of total marks","The interview is purely qualifying, no marks are assigned"],
        "correctAnswerIndex": 1,
        "explanation": "The Personality Test carries 275 marks out of a total of 2025 marks (Main Examination: 1750 + Interview: 275), which is approximately 13.6%. While it is a small percentage, it can significantly impact rankings, making it a subject of debate about subjectivity."
    },
    {
        "id": "ch44-l1-q143",
        "question": "The",
        "options": ["Recruitment to civil services","Disciplinary matters involving corruption and vigilance cases against senior officers","Conducting examinations","Framing recruitment rules"],
        "correctAnswerIndex": 1,
        "explanation": "The CVC, established as a statutory body under the CVC Act 2003, now handles the advisory role in vigilance and corruption-related disciplinary cases, which was previously within the UPSC"
    },
    {
        "id": "ch44-l1-q144",
        "question": "The",
        "options": ["Abolishing the UPSC","Introducing the Preliminary Examination as a screening test before the Main Examination, and allowing candidates to write in Indian languages","Making the CSE online","Reducing the syllabus to only one subject"],
        "correctAnswerIndex": 1,
        "explanation": "The Kothari Committee (1976) recommended the introduction of a Preliminary Examination as an objective-type screening test, which was implemented in 1979. It also recommended allowing candidates to write the examination in scheduled languages, democratizing access to the civil services."
    },
    {
        "id": "ch44-l1-q145",
        "question": "The",
        "options": ["It serves as a recruitment calendar","It enables Parliament to exercise oversight by scrutinizing the Government","It publishes the UPSC","It lists all the candidates who appeared for the CSE"],
        "correctAnswerIndex": 1,
        "explanation": "The annual report, along with the explanatory memorandum, ensures parliamentary accountability. Parliament can question the Government on why UPSC advice was not followed, debate the implications, and hold the executive accountable for any patronage or favoritism."
    },
    {
        "id": "ch44-l1-q146",
        "question": "Under Article 315, the Constitution provides for different types of Public Service Commissions. Which of the following is the correct hierarchy?",
        "options": ["UPSC > JSPSC > SPSC","UPSC, JSPSC, and SPSC are all independent constitutional bodies with no hierarchical relationship — though their jurisdictions differ (national, multi-state, and state respectively)","SPSC > JSPSC > UPSC","They are all subordinate to the DoPT"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC, JSPSC, and SPSC are all independent constitutional bodies with no hierarchical relationship. The UPSC handles central recruitment, the JSPSC handles joint state recruitment, and the SPSC handles individual state recruitment — each within its own jurisdiction."
    },
    {
        "id": "ch44-l1-q147",
        "question": "Can the UPSC refuse to advise the Government if it considers the request to be politically motivated?",
        "options": ["Yes, the UPSC has discretion to refuse","No, the UPSC is constitutionally obligated to advise on all matters referred to it under Article 320, regardless of the perceived motivation behind the request","Only with the CJI","Only if the matter involves a constitutional amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC"
    },
    {
        "id": "ch44-l1-q148",
        "question": "The",
        "options": ["Abolishing optional subjects in the Mains examination","Increasing the upper age limit for all categories to 37 years","Reducing the number of attempts for General category candidates from 6 to 4, and increasing the lower age limit","Making the CSE a computer-based test"],
        "correctAnswerIndex": 2,
        "explanation": "The Baswan Committee recommended reducing CSE attempts for General category candidates from 6 to 4, and for OBC from 9 to 6, while raising the lower age limit from 21 to 26 years. These recommendations were aimed at reducing the coaching industry"
    },
    {
        "id": "ch44-l1-q149",
        "question": "The UPSC",
        "options": ["The UPSC approves all transfers","The UPSC has NO role in transfers and postings — these are handled by the DoPT and respective cadre-controlling authorities. The UPSC is involved only in recruitment and certain disciplinary/service condition matters.","The UPSC monitors all IAS postings","The UPSC recommends suitable postings for all Group A officers"],
        "correctAnswerIndex": 1,
        "explanation": "A common misconception: the UPSC has NO role in day-to-day transfers and postings. These are managed by the DoPT (for Central Services), the state governments (for state cadre), and the respective cadre-controlling ministries. The UPSC"
    },
    {
        "id": "ch44-l1-q150",
        "question": "The",
        "options": ["The NRA replaces the UPSC entirely","The NRA is a subordinate body of the UPSC","The NRA handles screening for Group B and C level recruitment (SSC, RRB) through a common test, while the UPSC continues to handle Group A recruitment — the two are independent bodies with different mandates","The NRA was created by amending Article 315"],
        "correctAnswerIndex": 2,
        "explanation": "The NRA (now reconstituted) was designed to conduct a Common Eligibility Test (CET) for Group B and C level government jobs, replacing multiple examinations by SSC, RRB, and IBPS with a single screening test. It does NOT affect the UPSC"
    },
    {
        "id": "ch44-l1-q151",
        "question": "The Supreme Court in the",
        "options": ["The Court expanded the UPSC","The Court","s constitutional mandate, which covers recruitment but NOT transfers, by creating a parallel institutional mechanism","The Court declared the UPSC responsible for all transfers","The judgment was overturned"],
        "correctAnswerIndex": 1,
        "explanation": "The TSR Subramanian case highlighted a fundamental gap: while the UPSC ensures merit in recruitment, there is no equivalent constitutional body protecting civil servants from politically-motivated transfers. The Court"
    },
    {
        "id": "ch44-l1-q152",
        "question": "Assertion (A): The UPSC",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The UPSC is advisory because making its recommendations binding would create a constitutional anomaly: an unelected body would have final authority over civil servants, undermining the principle of executive accountability to Parliament. The Government must retain the power to deviate (with accountability through the Article 323 memorandum)."
    },
    {
        "id": "ch44-l1-q153",
        "question": "The",
        "options": ["No, lateral entry is exempt from all constitutional provisions","Yes, Article 320(3) mandates UPSC consultation on methods of recruitment to civil services, and bypassing the UPSC would violate this constitutional requirement — unless the posts are specifically exempted under Article 320(4) regulations","Only if the Supreme Court specifically orders it","The Constitution does not cover such appointments"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(3)(a) requires the Government to consult the UPSC on"
    },
    {
        "id": "ch44-l1-q154",
        "question": "If the Government consistently ignores the UPSC",
        "options": ["The UPSC can approach the Supreme Court under Article 32","Parliament can debate the memorandum, question the Government, and potentially censure it — but there is no specific constitutional provision for judicial enforcement of UPSC recommendations","The President can dismiss the Government","The affected officers can petition the UPSC for relief"],
        "correctAnswerIndex": 1,
        "explanation": "The remedy is parliamentary, not judicial. The Annual Report + memorandum mechanism creates political accountability through parliamentary debate. However, since UPSC advice is advisory, there is no legal mechanism to compel compliance. This structural weakness has been highlighted by multiple reform commissions."
    },
    {
        "id": "ch44-l1-q155",
        "question": "The concept of",
        "options": ["The President","The Government","s","(number of members and their background) through appointments, potentially stacking the Commission with pliant members","The Parliament","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "While removal is protected, the appointment process itself is a vulnerability: the President (on Government"
    },
    {
        "id": "ch44-l1-q156",
        "question": "Compare the post-retirement bar for the UPSC Chairman (Article 319) with that of the CEC (no constitutional bar). Which of the following correctly identifies the constitutional implications?",
        "options": ["Both are equally independent because both have charged expenditure","The UPSC Chairman has STRONGER post-retirement independence than the CEC, because Article 319 bars them from further government employment — while the CEC, despite having a more powerful mandate, lacks this constitutional bar, creating a potential incentive for the CEC to seek post-retirement patronage","The CEC is more independent because the CEC has a larger staff","Neither has any post-retirement bar"],
        "correctAnswerIndex": 1,
        "explanation": "This is a nuanced comparison: the UPSC Chairman has a stricter post-retirement bar (Article 319 — no further government employment), while the CEC has no such bar. This apparent inconsistency means the CEC — arguably the more powerful constitutional functionary — has weaker post-retirement independence safeguards."
    },
    {
        "id": "ch44-l1-q157",
        "question": "The",
        "options": ["The UPSC","The Administrative Tribunal (under Article 323A, Central Administrative Tribunal) or the courts, NOT the UPSC — because reservation is an executive and legislative policy matter excluded from the UPSC","The Finance Commission","The National Commission for Scheduled Castes"],
        "correctAnswerIndex": 1,
        "explanation": "Since Article 320(4) explicitly excludes reservation matters from UPSC consultation, the UPSC has no jurisdiction here. Challenges to reservation in recruitment go to the Central Administrative Tribunal (under Article 323A), with appeals to the High Court and Supreme Court."
    },
    {
        "id": "ch44-l1-q158",
        "question": "Article 323 requires the President to lay the UPSC",
        "options": ["No, the memorandum is only required when advice is rejected","Yes, the memorandum is always required. If there are no deviations, the memorandum would simply state that all UPSC recommendations were accepted. The annual report itself is mandatory regardless.","Only if Parliament requests it","Only during budget sessions"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323 mandates the annual report be laid before Parliament every year, regardless of whether deviations exist. The memorandum is a companion document. If no deviations exist, the memorandum simply confirms full compliance. This annual transparency mechanism is mandatory."
    },
    {
        "id": "ch44-l1-q159",
        "question": "The",
        "options": ["The UPSC gained more powers","It had no effect on the UPSC, as the UPSC is advisory (not adjudicatory). However, the tribunals handle matters where UPSC recommendations are disputed — such as challenges to recruitment results, seniority, and disciplinary orders — effectively creating a parallel system for service dispute resolution.","The UPSC was merged with the tribunals","The UPSC became subordinate to the tribunals"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC is advisory; tribunals are adjudicatory. They operate in complementary domains. However, tribunal decisions on recruitment challenges can effectively override UPSC recruitment recommendations, creating a dynamic tension between the two institutions."
    },
    {
        "id": "ch44-l1-q160",
        "question": "If the President appoints a UPSC member who does NOT satisfy the",
        "options": ["The appointment would stand because Article 316(1) uses the phrase","which is directory (guiding) rather than mandatory, and the Supreme Court has held that this does not invalidate appointments","The appointment would be automatically void","The UPSC Chairman would have to resign","Parliament would pass a resolution annulling it"],
        "correctAnswerIndex": 0,
        "explanation": "The phrase"
    },
    {
        "id": "ch44-l1-q161",
        "question": "The UPSC",
        "options": ["The UPSC lacks a constitutional provision barring variation of service conditions to their disadvantage after appointment (unlike the CEC under Article 324(5))","The UPSC lacks a fixed tenure","The UPSC members can be transferred","The UPSC has no charged expenditure"],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the CEC (whose conditions of service cannot be varied to their disadvantage after appointment — Article 324(5)), the Constitution does not explicitly provide an equivalent protection for UPSC members. Their conditions are determined by the President under Article 318, creating a theoretical vulnerability."
    },
    {
        "id": "ch44-l1-q162",
        "question": "Assertion (A): The UPSC only recommends names for recruitment; it does not make the actual appointment. Reason (R): Article 320 separates the",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "This separation is fundamental: the UPSC recommends (Art 320), but the appointing authority (President, acting on Government"
    },
    {
        "id": "ch44-l1-q163",
        "question": "The",
        "options": ["It replaces the UPSC entirely","Mission Karmayogi is a post-recruitment capacity-building initiative focused on continuous learning and competency assessment, which does NOT overlap with the UPSC","The UPSC designed Mission Karmayogi","Mission Karmayogi cancels all UPSC examinations"],
        "correctAnswerIndex": 1,
        "explanation": "Mission Karmayogi (iGOT-Karmayogi platform) focuses on in-service training and competency development, not recruitment. However, the initiative could eventually influence UPSC examination design if the government requires the CSE to test competencies aligned with Mission Karmayogi frameworks."
    },
    {
        "id": "ch44-l1-q164",
        "question": "The phrase",
        "options": ["The exact same","status with no additional powers","An elevated position — the Chairman presides over meetings, assigns work, and represents the Commission externally, but does NOT have a casting vote or power to override other members on substantive matters. The Chairman also has the exclusive post-retirement bar (no further government employment) that other members do not have.","Absolute power over all UPSC members","No special position whatsoever"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC Chairman has an administrative primus inter pares role (chairing meetings, representing the Commission), but not a substantive veto. The key distinction is the stricter post-retirement bar: the Chairman is ineligible for ALL further government employment (Art 319), while a member is eligible for appointment as UPSC Chairman or SPSC Chairman."
    },
    {
        "id": "ch44-l1-q165",
        "question": "If a State Government requests the UPSC to conduct recruitment for a state service (under Article 315(4)), and the UPSC conducts the examination, are the costs borne by the State or the Centre?",
        "options": ["Always by the Centre","The expenses are reimbursed by the State Government that requested the UPSC","s charged expenditure (Article 322) covers only its regular functions, not additional services requested by states","By the UPSC","Shared equally between Centre and State"],
        "correctAnswerIndex": 1,
        "explanation": "When the UPSC serves a state"
    },
    {
        "id": "ch44-l1-q166",
        "question": "The 2024",
        "options": ["Article 14 (Right to Equality)","Article 16(4) and 16(4A) — which provide that the State can make provisions for reservation in appointments for backward classes and promotion for SC/STs","Article 280 (Finance Commission)","Article 312 (All India Services)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 16(4) empowers the State to make provisions for reservation in appointments for backward classes not adequately represented. Article 16(4A) extends reservation to promotions for SC/STs. Any government recruitment, including lateral entry, must comply with these provisions unless specifically exempted."
    },
    {
        "id": "ch44-l1-q167",
        "question": "The UPSC",
        "options": ["Merit cannot be defined solely by examination performance — Articles 15(4), 15(5), and 16(4) allow for reservation as a constitutionally mandated tool for inclusive merit, and the UPSC must accommodate this","Only UPSC exams can define merit","Reservation violates Article 320","The UPSC can set its own reservation policy"],
        "correctAnswerIndex": 0,
        "explanation": "In Ashok Kumar Thakur, the SC upheld OBC reservation in higher educational institutions and clarified that"
    },
    {
        "id": "ch44-l1-q168",
        "question": "Assertion (A): The Constitution does not prescribe an upper limit on the number of UPSC members. Reason (R): This flexibility allows the President to adjust the Commission",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution deliberately does not fix the UPSC"
    },
    {
        "id": "ch44-l1-q169",
        "question": "If the UPSC is asked to conduct an examination for a service that was created by a state for local body positions, and the request comes through Article 315(4), can the UPSC refuse?",
        "options": ["Yes, the UPSC can refuse any request","The decision to serve a state under Article 315(4) requires the President","Only if the UPSC Chairman personally objects","The UPSC can refuse if it is too busy"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 315(4), the flow is: Governor requests → President approves → UPSC serves. Once the President approves, the UPSC is constitutionally obliged to serve. The UPSC"
    },
    {
        "id": "ch44-l1-q170",
        "question": "The",
        "options": ["All candidates must score equally","The recruitment process must balance the principle of merit (Article 16(1) — equality of opportunity) with the principle of representation (Article 16(4) — reservation), achieving a proportionate balance that fulfils both constitutional mandates","The UPSC must set equal cut-offs for all categories","Proportionate representation of all states in the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Proportionate Equality requires that the UPSC"
    },
    {
        "id": "ch44-l1-q171",
        "question": "The Administrative Reforms Commission (1st ARC, 1966) recommended replacing the UPSC examination system with a",
        "options": ["No constitutional change","A constitutional amendment to Articles 315 and 320, since the UPSC","Only a parliamentary law","An executive order"],
        "correctAnswerIndex": 1,
        "explanation": "Since the UPSC"
    },
    {
        "id": "ch44-l1-q172",
        "question": "The UPSC",
        "options": ["The UPSC conducts all promotions directly","Promotions are now governed primarily by cadre rules, DoPT guidelines, and the recommendations of Departmental Promotion Committees (DPCs), with the UPSC being consulted only in exceptional cases — reducing its advisory role in career progression to near-insignificance","The Supreme Court abolished this function","Promotions are handled by the Cabinet Secretary alone"],
        "correctAnswerIndex": 1,
        "explanation": "While Article 320(3)(a) mandates UPSC consultation on promotion principles, in practice, DPCs and cadre-specific rules handle most promotions. The UPSC is consulted only for exceptional or contested cases, significantly diminishing its role in career progression decisions."
    },
    {
        "id": "ch44-l1-q173",
        "question": "Can a UPSC member be suspended by the President pending the Supreme Court inquiry under Article 317?",
        "options": ["No, there is no provision for suspension","Yes, Article 317(2) allows the President to suspend a UPSC member pending the reference to, and receipt of the report from, the Supreme Court on the question of removal","Only with Parliament","Only the CJI can suspend a UPSC member"],
        "correctAnswerIndex": 1,
        "explanation": "Article 317(2) specifically provides that the President can suspend a UPSC member against whom a reference has been made to the Supreme Court under Article 317(1) until the SC"
    },
    {
        "id": "ch44-l1-q174",
        "question": "The",
        "options": ["It would require amending Article 320","No constitutional change would be needed — the exam format is an operational matter within the UPSC","s regulatory power under Article 320(3), not a constitutional provision. The UPSC","It would require amending Article 315","Parliament would need to pass a new law"],
        "correctAnswerIndex": 1,
        "explanation": "The examination format/subjects are operational matters, not prescribed by the Constitution. The UPSC has the discretion (subject to Government regulations) to design the exam as it sees fit. Constitutional provisions only mandate that the UPSC"
    },
    {
        "id": "ch44-l1-q175",
        "question": "Compare Articles 317 (removal of UPSC members) and Article 124(4) (removal of SC Judges). The key structural difference in the removal process is:",
        "options": ["Both are identical processes","UPSC members are removed by the President AFTER a Supreme Court inquiry (executive act on judicial recommendation), while SC Judges are removed by the President AFTER an address by BOTH Houses of Parliament (executive act on parliamentary authority). Thus the UPSC process is executive-judicial, while the SC Judge process is parliamentary.","UPSC members can never be removed","SC Judges are removed by the President directly"],
        "correctAnswerIndex": 1,
        "explanation": "This comparative analysis is crucial for UPSC mains: the UPSC removal process (Art 317) is a President → SC inquiry → President removal chain (executive-judicial). The SC Judge removal (Art 124/217) is Parliament address → President removes (parliamentary-executive). The UPSC process is simpler and does not require parliamentary involvement."
    },
    {
        "id": "ch44-l1-q176",
        "question": "Assertion (A): The UPSC has no role in the appointment of the Cabinet Secretary or the Foreign Secretary. Reason (R): These are political appointments made by the Appointments Committee of the Cabinet (ACC) from among the senior-most IAS officers, and the UPSC",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The UPSC"
    },
    {
        "id": "ch44-l1-q177",
        "question": "The",
        "options": ["No, regulations made by the President are immune from judicial review","Yes — while Article 318 vests the President with regulation-making power, these regulations must comply with Articles 14, 16, and other Fundamental Rights. They are subject to judicial review by the Supreme Court and High Courts.","Only the UPSC Chairman can challenge them","They can only be challenged in the Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "No subordinate legislation (including Presidential regulations) is immune from judicial review. Regulations under Article 318 must be consistent with Fundamental Rights and the Constitution. Courts can strike down any regulation that violates constitutional provisions."
    },
    {
        "id": "ch44-l1-q178",
        "question": "The",
        "options": ["The UPSC must be consulted","No consultation is needed — discharge during probation is an executive act by the Government, as probationers do not have the full protection of Article 311 (which applies to confirmed civil servants). However, the principles of natural justice must still be followed.","Only the Cabinet Secretary","The Supreme Court must approve"],
        "correctAnswerIndex": 1,
        "explanation": "Probationers are in a peculiar position: they do not have the full protection of Article 311 (which requires inquiry for dismissal/removal of confirmed servants). Discharge during probation is treated as termination of a contract, not dismissal. The UPSC is not consulted for probation terminations."
    },
    {
        "id": "ch44-l1-q179",
        "question": "If the Government proposes to create a new",
        "options": ["Have no role at all","Be responsible for conducting the recruitment examination for the new service, as its mandate under Article 320 covers ALL services under the Union and All India Services — making it the natural examination body for any new AIS","Oppose the creation","Be replaced by a new specialist body"],
        "correctAnswerIndex": 1,
        "explanation": "If an All India Judicial Service (AIJS) is created under Article 312, the UPSC would logically conduct its recruitment, as it does for IAS, IPS, and IFS. However, the specific recruitment mechanism (UPSC vs. a new judicial body) would be determined by the enabling legislation passed by Parliament."
    },
    {
        "id": "ch44-l1-q180",
        "question": "The",
        "options": ["A fundamental rights enforcement body","An advisory constitutional body that safeguards the merit principle in civil services recruitment and provides non-binding consultation on disciplinary and service matters — positioned as an independent buffer between political patronage and bureaucratic selection, but constrained by its advisory-only nature and the expanding jurisdiction of parallel institutions (CVC, CAT, SSC, NRA)","A legislative body that creates recruitment rules","A judicial body that adjudicates service disputes"],
        "correctAnswerIndex": 1,
        "explanation": "This comprehensive description captures the UPSC"
    },
    {
        "id": "ch44-l1-q181",
        "question": "Which Part of the Indian Constitution deals with the Union Public Service Commission (UPSC)?",
        "options": ["Part XII","Part XIII","Part XIV","Part XV"],
        "correctAnswerIndex": 2,
        "explanation": "Part XIV of the Constitution (Articles 315 to 323) deals with the Union Public Service Commission."
    },
    {
        "id": "ch44-l1-q182",
        "question": "Under which Article of the Constitution is the Union Public Service Commission established?",
        "options": ["Article 312","Article 315","Article 320","Article 324"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315 provides for the establishment of a Public Service Commission for the Union and a Public Service Commission for each State."
    },
    {
        "id": "ch44-l1-q183",
        "question": "The members of the Union Public Service Commission are appointed by the:",
        "options": ["Prime Minister","Parliament","President of India","Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "Article 316 states that the Chairman and other members of the UPSC are appointed by the President."
    },
    {
        "id": "ch44-l1-q184",
        "question": "What is the tenure of a member of the Union Public Service Commission?",
        "options": ["5 years or 62 years of age","6 years or 65 years of age","5 years or 65 years of age","6 years or 62 years of age"],
        "correctAnswerIndex": 1,
        "explanation": "A member of the UPSC holds office for a term of six years or until he attains the age of 65 years, whichever is earlier."
    },
    {
        "id": "ch44-l1-q185",
        "question": "To whom does a member of the UPSC submit his resignation?",
        "options": ["Chairman of UPSC","Chief Justice of India","President of India","Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "A member of the UPSC can resign by addressing his resignation in writing to the President of India."
    },
    {
        "id": "ch44-l1-q186",
        "question": "The expenses of the Union Public Service Commission are charged on the:",
        "options": ["Contingency Fund of India","Consolidated Fund of India","Public Account of India","Discretionary Fund of the President"],
        "correctAnswerIndex": 1,
        "explanation": "According to Article 322, the expenses (salaries, allowances, etc.) of the UPSC are charged on the Consolidated Fund of India."
    },
    {
        "id": "ch44-l1-q187",
        "question": "A member of the UPSC, on ceasing to hold office, is eligible for which of the following?",
        "options": ["Further employment under the Government of India","Appointment as Chairman of UPSC or SPSC","Employment in a private sector firm immediately","Membership of the Rajya Sabha automatically"],
        "correctAnswerIndex": 1,
        "explanation": "A member of the UPSC is eligible for appointment as the Chairman of UPSC or Chairman of a State Public Service Commission (SPSC), but is otherwise ineligible for further employment under the Government of India or a State."
    },
    {
        "id": "ch44-l1-q188",
        "question": "Who determines the number of members of the Union Public Service Commission?",
        "options": ["Constitution itself","Parliament","President of India","Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not fix the strength of the Commission and leaves the matter to the discretion of the President."
    },
    {
        "id": "ch44-l1-q189",
        "question": "The Chairman and members of the UPSC can be removed from office only on the grounds of:",
        "options": ["Incapacity or Misbehaviour","Political bias","Low performance","Corruption in private life"],
        "correctAnswerIndex": 0,
        "explanation": "The President can remove the Chairman or any other member from office on the ground of misbehaviour (after an inquiry by the Supreme Court) or incapacity."
    },
    {
        "id": "ch44-l1-q190",
        "question": "Which Article of the Constitution deals with the",
        "options": ["Article 318","Article 319","Article 320","Article 321"],
        "correctAnswerIndex": 2,
        "explanation": "Article 320 enumerates the functions of the Public Service Commissions, including conducting examinations for appointment to the services of the Union."
    },
    {
        "id": "ch44-l1-q191",
        "question": "The UPSC is considered which type of body?",
        "options": ["Statutory Body","Constitutional Body","Executive Body","Advisory Body ONLY"],
        "correctAnswerIndex": 1,
        "explanation": "As it is created directly by the Constitution of India, it is a Constitutional Body."
    },
    {
        "id": "ch44-l1-q192",
        "question": "The Union Public Service Commission submits its annual report to the:",
        "options": ["Parliament","President of India","Prime Minister","Home Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC presents an annual report on its performance to the President, who then lays it before both Houses of Parliament."
    },
    {
        "id": "ch44-l1-q193",
        "question": "Is the UPSC consulted on matters relating to the methods of recruitment to civil services?",
        "options": ["Yes, it is mandatory","No, never","Only if the Prime Minister requests","Only for Group C posts"],
        "correctAnswerIndex": 0,
        "explanation": "Article 320 specifies that the UPSC shall be consulted on all matters relating to methods of recruitment to civil services and for civil posts."
    },
    {
        "id": "ch44-l1-q194",
        "question": "Who can extend the functions of the Union Public Service Commission?",
        "options": ["The President","The Parliament","The Supreme Court","The UPSC itself"],
        "correctAnswerIndex": 1,
        "explanation": "The Parliament can provide for the exercise of additional functions by the UPSC through an act."
    },
    {
        "id": "ch44-l1-q195",
        "question": "Which of the following is NOT a function of the UPSC?",
        "options": ["Conducting examinations for appointment to Union services","Advising on disciplinary matters affecting civil servants","Making reservations for SC/ST and OBC candidates","Handling recruitment to Central Services Group A and B"],
        "correctAnswerIndex": 2,
        "explanation": "The matter of reservation is handled by the Government (Executive), not the UPSC. The UPSC helps in recruitment within the rules set by the government."
    },
    {
        "id": "ch44-l1-q196",
        "question": "What does",
        "options": ["They are not votable in the Parliament","They require an annual vote by the Lok Sabha","They are paid by the States proportionately","They depend on the tax revenue of the year"],
        "correctAnswerIndex": 0,
        "explanation": "Expenditure"
    },
    {
        "id": "ch44-l1-q197",
        "question": "How many members are usually present in the UPSC, as governed by the President",
        "options": ["3 to 5","9 to 11","15 to 20","Fixed at 25"],
        "correctAnswerIndex": 1,
        "explanation": "While the Constitution is silent, the current regulations generally provide for a Chairman and 8 to 10 other members."
    },
    {
        "id": "ch44-l1-q198",
        "question": "Which Article provides that a member of UPSC is ineligible for re-appointment to that office?",
        "options": ["Article 316(3)","Article 317","Article 318","Article 319"],
        "correctAnswerIndex": 0,
        "explanation": "Article 316(3) states that a person who holds office as a member of a Public Service Commission shall on the expiration of his term be ineligible for re-appointment to that office."
    },
    {
        "id": "ch44-l1-q199",
        "question": "The removal of a UPSC member for misbehaviour is done by the President after an inquiry by:",
        "options": ["Parliamentary Committee","CBI","Supreme Court","A High Level Executive Committee"],
        "correctAnswerIndex": 2,
        "explanation": "The President must refer the matter to the Supreme Court for an inquiry. If the SC upholds the charge of misbehaviour, the President can remove the member."
    },
    {
        "id": "ch44-l1-q200",
        "question": "The Union Public Service Commission is known as the:",
        "options": ["Watchdog of the Merit System in India","Steel Frame of Administration","Fourth Branch of Government","Highest Court of Appeal"],
        "correctAnswerIndex": 0,
        "explanation": "It is referred to as the sentinel or watchdog of the merit system to ensure unbiased recruitment to civil services."
    },
    {
        "id": "ch44-l1-q201",
        "question": "Which of the following describes the nature of the UPSC",
        "options": ["Mandatory and Binding","Advisory and non-binding, but usually accepted","Optional to even seek advice","Binding if passed by a two-thirds majority of the commission"],
        "correctAnswerIndex": 1,
        "explanation": "The recommendations made by the UPSC are advisory in nature and not binding on the government."
    },
    {
        "id": "ch44-l1-q202",
        "question": "Who acts as the Chairman of the UPSC in case of a vacancy?",
        "options": ["The senior-most member of UPSC","The President appoints an acting chairman from the members","The Speaker of the Lok Sabha","The Cabinet Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The President can appoint one of the members of the UPSC as an acting chairman in case of vacancy or absence."
    },
    {
        "id": "ch44-l1-q203",
        "question": "Can the President exclude any post or service from the purview of the UPSC?",
        "options": ["No, never","Yes, for specified reasons","Only for Group D posts","Only after consulting the Chief Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The President can make regulations specifying the matters in which it shall not be necessary for the UPSC to be consulted."
    },
    {
        "id": "ch44-l1-q204",
        "question": "Members of UPSC must have held office for at least ten years under the:",
        "options": ["State Government only","Central Government only","Union or State Government","Judiciary only"],
        "correctAnswerIndex": 2,
        "explanation": "Article 316 specifies that as nearly as may be one-half of the members should have held office for ten years under either the Government of India or a State."
    },
    {
        "id": "ch44-l1-q205",
        "question": "Which commission was set up in 1923 whose recommendations led to the establishment of the first Public Service Commission in India?",
        "options": ["Simon Commission","Lee Commission","Sarkaria Commission","Shah Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Lee Commission recommended the setting up of the Public Service Commission in 1926."
    },
    {
        "id": "ch44-l1-q206",
        "question": "The UPSC is mentioned in which Articles of the Constitution?",
        "options": ["308-314","315-323","324-329","245-263"],
        "correctAnswerIndex": 1,
        "explanation": "Part XIV, Articles 315-323 deals with the Commission"
    },
    {
        "id": "ch44-l1-q207",
        "question": "A member of the UPSC can be removed if he is adjudged an insolvent. What does",
        "options": ["Unable to pay debts/Bankrupt","Holding an office of profit","Of unsound mind","Guilty of misbehaviour"],
        "correctAnswerIndex": 0,
        "explanation": "Insolvency refers to the state of being unable to pay the money owed."
    },
    {
        "id": "ch44-l1-q208",
        "question": "Does the UPSC handle recruitment for all posts in the Indian Railways?",
        "options": ["Yes, for all levels","Only for technical posts","Mainly for Group A and B officers (via Civil Services/Engineering Exams)","No, Railways has its own commission"],
        "correctAnswerIndex": 2,
        "explanation": "While Railways has RRBs for Group C and D, Group A/B senior officers are recruited through UPSC exams."
    },
    {
        "id": "ch44-l1-q209",
        "question": "The Chairman of UPSC is eligible for which of the following after retirement?",
        "options": ["Chairman of an SPSC","Governor of a State","Further employment under Government of India","He is ineligible for any further employment under the government"],
        "correctAnswerIndex": 3,
        "explanation": "The Chairman of UPSC is ineligible for any further employment under the Government of India or a State (Art 319)."
    },
    {
        "id": "ch44-l1-q210",
        "question": "Which of the following describes the relation between UPSC and the Central Vigilance Commission (CVC)?",
        "options": ["UPSC is superior to CVC","Both have overlapping roles in disciplinary matters; UPSC is constitutional while CVC is statutory","CVC recruits members for UPSC","They have no relationship"],
        "correctAnswerIndex": 1,
        "explanation": "UPSC is constitutional and its role in disciplinary matters is mandatory for consultation, while CVC is statutory and handles corruption investigations."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch44-l2-q1",
        "question": "The Constitution has not fixed the strength of the UPSC and has left the matter to the discretion of the President. How does this impact the Commission",
        "options": ["It makes the commission a slave to the President.","It allows the government to increase members to favor sensitive political interests if not checked by convention.","It makes the commission a statutory body.","It has no impact since the Constitution is supreme."],
        "correctAnswerIndex": 1,
        "explanation": "Executive discretion in fixing strength is often cited as a potential area for government influence, although in practice, conventions and the high status of the commission maintain its integrity."
    },
    {
        "id": "ch44-l2-q2",
        "question": "Assertion (A): The President must consult the UPSC on all disciplinary matters affecting a person serving the Government of India.\\nReason (R): UPSC is an advisory body and its advice is not binding on the President.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 1,
        "explanation": "While both are true, the advisory nature is not the *reason* for the consultation requirement; the requirement is a constitutional mandate (Art 320) to ensure a high-level independent check on executive actions."
    },
    {
        "id": "ch44-l2-q3",
        "question": "Which of the following is correct regarding the",
        "options": ["The President can remove a member on the ground of misbehaviour ONLY after an inquiry by the Supreme Court.","The President can remove a member for misbehaviour after an inquiry by the Parliament.","The President can remove a member for insolvency without any inquiry.","Both 1 and 3 are correct."],
        "correctAnswerIndex": 3,
        "explanation": "Grounds like insolvency or holding another office of profit don"
    },
    {
        "id": "ch44-l2-q4",
        "question": "Why is a member of the UPSC made ineligible for further employment under the Government of India or a State after retirement?",
        "options": ["To prevent them from growing too powerful.","To ensure their impartial conduct during their tenure and remove any temptation of post-retirement benefits from the executive.","Because their skills are only applicable to UPSC.","To save government money on pensions."],
        "correctAnswerIndex": 1,
        "explanation": "This is a key safeguard to ensure that members do not favor the government in anticipation of future jobs."
    },
    {
        "id": "ch44-l2-q5",
        "question": "Under Article 320(3), the UPSC is NOT consulted on which of the following?",
        "options": ["Inter-state transfers of civil servants.","Claims for reimbursement of legal expenses incurred by a civil servant in defending legal proceedings.","The manner in which any provision in Article 16(4) regarding reservations is to be implemented.","Both 2 and 3."],
        "correctAnswerIndex": 2,
        "explanation": "Specifically, the UPSC is not consulted on matters of reservation of appointments for backward classes (Art 16(4))."
    },
    {
        "id": "ch44-l2-q6",
        "question": "What happens if the Union Government does not accept the UPSC",
        "options": ["The UPSC can move the Supreme Court to enforce its advice.","The Government must record the reasons for such non-acceptance and lay them before the Parliament.","The Advice is automatically binding if given twice.","The Parliament can dismiss the Cabinet."],
        "correctAnswerIndex": 1,
        "explanation": "This creates accountability, as the government must justify its deviation from the independent commission"
    },
    {
        "id": "ch44-l2-q7",
        "question": "The",
        "options": ["Constitutional Body","Statutory Body","Executive Body","Joint division of the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike UPSC/SPSC, it is created by an Act of Parliament on request of the states, and is therefore statutory."
    },
    {
        "id": "ch44-l2-q8",
        "question": "A",
        "options": ["Being interested in any contract or agreement made by the Government of India or a State.","Arriving late for meetings.","Publicly disagreeing with the President.","Not hiring enough candidates from his own state."],
        "correctAnswerIndex": 0,
        "explanation": "If a member is in any way concerned or interested in any contract or agreement made on behalf of the Government, he is deemed guilty of misbehaviour."
    },
    {
        "id": "ch44-l2-q9",
        "question": "Which of the following is true regarding the",
        "options": ["He is the senior-most member of UPSC automatically.","He is appointed by the President until a regular Chairman arrives.","He is appointed by the Chief Justice of India.","There is no provision for an acting chairman."],
        "correctAnswerIndex": 1,
        "explanation": "This was added by the 15th Constitutional Amendment in 1963."
    },
    {
        "id": "ch44-l2-q10",
        "question": "The",
        "options": ["Recruits all clerks in the government.","Has no direct role; it","Trains the members of the Cabinet.","Selects the private secretaries of the Ministers."],
        "correctAnswerIndex": 1,
        "explanation": "UPSC recruits at entry level (Group A/B); the staffing and deputation system is an executive function handled by DoPT."
    },
    {
        "id": "ch44-l2-q11",
        "question": "Can a member of the UPSC be appointed as the Chairman of a State Public Service Commission?",
        "options": ["Yes, according to Article 319.","No, it is a lower post.","Only if the Governor of that state requests specifically.","Only if he resigns from the UPSC first without any pension."],
        "correctAnswerIndex": 0,
        "explanation": "Article 319 allows a member of UPSC to become Chairman of UPSC or Chairman of an SPSC."
    },
    {
        "id": "ch44-l2-q12",
        "question": "The President",
        "options": ["The Supreme Court","The requirement to lay such regulations before each House of Parliament for 14 days.","The Prime Minister","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(5) provides this legislative check on the President"
    },
    {
        "id": "ch44-l2-q13",
        "question": "Which of the following describes the",
        "options": ["They cannot be removed by the President at all.","They can only be removed in the manner and on the grounds mentioned in the Constitution.","Their removal is subject to a 2/3rd majority vote in Lok Sabha.","They hold office during the pleasure of the President in the absolute sense."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike ordinary civil servants, their removal is subject to specific constitutional procedure and SC inquiry for misbehaviour."
    },
    {
        "id": "ch44-l2-q14",
        "question": "The UPSC is consulted in which of the following matters (as per Art 320)?\\n1. Methods of recruitment to civil services.\\n2. Principles for appointments and promotions.\\n3. Disciplinary matters affecting a person serving in a civil capacity.\\n4. Reservation for OBCs.",
        "options": ["1, 2 and 3 only","1, 3 and 4 only","2, 3 and 4 only","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "UPSC is NOT consulted on reservation matters (Art 16(4) implementations)."
    },
    {
        "id": "ch44-l2-q15",
        "question": "Regarding the UPSC Annual Report, who is responsible for laying it before the Parliament?",
        "options": ["UPSC Chairman","President of India","Speaker of Lok Sabha","Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The President is constitutionally mandated to lay it before both houses."
    },
    {
        "id": "ch44-l2-q16",
        "question": "If a question arises whether a person is a",
        "options": ["The President","The Chairman of UPSC","The Ministry of Personnel","The Supreme Court"],
        "correctAnswerIndex": 0,
        "explanation": "Such administrative/appointment finalities lie with the head of the executive."
    },
    {
        "id": "ch44-l2-q17",
        "question": "Can the",
        "options": ["Yes.","No, only the Parliament can extend or modify functions by law.","Yes, if the UPSC agrees.","Only for Group B services."],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 explicitly mentions an Act of Parliament for such extension."
    },
    {
        "id": "ch44-l2-q18",
        "question": "A member of the UPSC on ceasing to hold office is eligible for appointment as:",
        "options": ["Chairman of an SPSC","Member of the Election Commission","Governor of a State","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Art 319 allows they can be Chairman of UPSC or Chairman of an SPSC."
    },
    {
        "id": "ch44-l2-q19",
        "question": "In the",
        "options": ["That the government must always follow UPSC advice on salary.","That the","under Art 310 does not apply to UPSC members.","That consultation with UPSC under Art 320 is not mandatory for minor clerical posts.","The transparency of the selection process in the UPSC."],
        "correctAnswerIndex": 1,
        "explanation": "UPSC members have special protections, unlike those serving the Crown under"
    },
    {
        "id": "ch44-l2-q20",
        "question": "Which Article provides specifically for the",
        "options": ["Article 314","Article 318","Article 322","Article 320"],
        "correctAnswerIndex": 1,
        "explanation": "Article 318 states that the conditions of service of a member shall not be varied to his disadvantage after his appointment."
    },
    {
        "id": "ch44-l2-q21",
        "question": "The UPSC Conducts the",
        "options": ["The Police forces.","Commissioned officer ranks in the Army, Navy and Air Force.","Civil service posts in border areas.","Intelligence Bureau."],
        "correctAnswerIndex": 1,
        "explanation": "UPSC recruits officers for the defence forces, although the personnel management thereafter is with the MoD."
    },
    {
        "id": "ch44-l2-q22",
        "question": "The",
        "options": ["1909","1919","1935","1947"],
        "correctAnswerIndex": 1,
        "explanation": "The recommendations were meant to fulfill the promises of the 1919 Act."
    },
    {
        "id": "ch44-l2-q23",
        "question": "Consider the following:\\n1. UPSC conducts recruitment for Central Services.\\n2. UPSC advises on promotions for All India Services.\\n3. UPSC advises on temporary appointments for more than one year.\\nWhich are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "All these are standard functions of the commission as per Art 320."
    },
    {
        "id": "ch44-l2-q24",
        "question": "Is the UPSC consulted when a state government makes rules for its state services?",
        "options": ["Yes, always.","No, the State PSC is consulted.","Only if the President asks specifically.","Only for All India Service officers posted in that state."],
        "correctAnswerIndex": 1,
        "explanation": "The respective SPSC is the constitutional consultant for the State Government."
    },
    {
        "id": "ch44-l2-q25",
        "question": "The Chairman of a State PSC on ceasing to hold office is eligible for which post?",
        "options": ["Chairman of UPSC","Member of UPSC","Chairman of another SPSC","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "This allows for career movement within the constitutional commissions (Art 319)."
    },
    {
        "id": "ch44-l2-q26",
        "question": "The UPSC is described as an",
        "options": ["It doesn","It is not part of the executive, legislative or judicial hierarchy and its members have fixed tenure.","It has its own army.","It can never be abolished even by a constitutional amendment."],
        "correctAnswerIndex": 1,
        "explanation": "Independence is defined by secure tenure, financial charging on Consolidated Fund, and specific removal procedures."
    },
    {
        "id": "ch44-l2-q27",
        "question": "The government can",
        "options": ["Urgent ad-hoc appointments which are not expected to last more than one year.","When the Prime Minister likes a candidate personally.","When the UPSC refuses to conduct an exam.","Under no circumstances."],
        "correctAnswerIndex": 0,
        "explanation": "Regulations allow for small ad-hoc appointments to be made without consultation to ensure administrative continuity."
    },
    {
        "id": "ch44-l2-q28",
        "question": "If a member of UPSC is removed on grounds of mental infirmity, is a Supreme Court inquiry needed?",
        "options": ["Yes.","No direct inquiry is needed by SC for","; the President can remove him directly.","Only if the member appeals.","The Parliament must vote for it."],
        "correctAnswerIndex": 1,
        "explanation": "Article 317(3) allows the President to remove members without SC reference on grounds like insolvency, mental/body infirmity, or holding another office of profit."
    },
    {
        "id": "ch44-l2-q29",
        "question": "What is the relation between the",
        "options": ["DoPT is the administrative controlling department for UPSC members","UPSC reports to DoPT for all its decisions.","DoPT conducts the exams and UPSC just gives results.","DoPT and UPSC are the same organization."],
        "correctAnswerIndex": 0,
        "explanation": "DoPT is the nodal agency for service matters while UPSC is the independent recruitment body. They coordinate on vacancies and disciplinary advice."
    },
    {
        "id": "ch44-l2-q30",
        "question": "The UPSC",
        "options": ["Personal popularity of the officer.","Principles to be followed and the suitability of candidates.","Party loyalty.","Officer"],
        "correctAnswerIndex": 1,
        "explanation": "UPSC ensures that promotions are based on merit and objective evaluation of records."
    },
    {
        "id": "ch44-l2-q31",
        "question": "Before 1978, the President could proclaim an emergency on the oral advice of the Prime Minister. Now, Article 352(3) requires a \\",
        "options": ["The Prime Minister alone.","The Union Cabinet (PM + other ministers of cabinet rank).","The Council of Ministers.","The Speaker of the Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent a single individual from unilaterally imposing an emergency, the 44th Amendment mandated that the President can only act after the Union Cabinet (ministers of cabinet rank) officially recommends it in writing."
    },
    {
        "id": "ch44-l2-q32",
        "question": "Why was the parliamentary approval majority for a National Emergency changed from",
        "options": ["To make it easier for the government to handle crises.","To ensure that such a drastic measure has broad political support and cannot be misused by a thin majority.","Because the Supreme Court mandated it in a ruling.","To force a joint sitting of both Houses."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch44-l2-q33",
        "question": "A resolution for the disapproval of an emergency requires only a",
        "options": ["Because the Lok Sabha is functionally the only House that matters.","To provide a quicker, unhindered constitutional","to terminate an emergency once the immediate crisis has passed.","Because the President requested this specific loophole.","It was a drafting error in the 44th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution deliberately creates an asymmetric hurdle: it is extremely difficult to start/continue an emergency (special majority in both Houses) but deliberately easy to end it (simple majority in the directly elected Lok Sabha)."
    },
    {
        "id": "ch44-l2-q34",
        "question": "During a National Emergency, the State Governments are:",
        "options": ["Dismissed immediately.","Suspended indefinitely.","Allowed to continue, but they are brought under the complete executive control and direction of the Centre.","Given enhanced financial powers."],
        "correctAnswerIndex": 2,
        "explanation": "Crucially, unlike President"
    },
    {
        "id": "ch44-l2-q35",
        "question": "When Parliament makes a law on a State List subject during a National Emergency, does the State Legislature lose its concurrent power to make laws on that same subject?",
        "options": ["Yes, its legislative power is entirely suspended.","No, but in case of a conflict, the Parliamentary law prevails (Article 251).","Only if the President issues a separate, gazetted order.","Only in states sharing an international border."],
        "correctAnswerIndex": 1,
        "explanation": "The legislative power of a state parliament is not suspended. However, the constitutional distribution is overridden by the doctrine of repugnancy (Article 251): if the state and centre make conflicting laws on the same subject, the central law prevails."
    },
    {
        "id": "ch44-l2-q36",
        "question": "If the term of the Lok Sabha is extended by one year during an emergency, and the emergency ends two months later, how long does the extended Lok Sabha legally survive?",
        "options": ["For the remaining 10 months of the extended year.","For a maximum of 6 months from the exact date the emergency ceased to operate.","It is dissolved immediately by the President.","Until the next Republic Day."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional extension is not an absolute annual guarantee. Regardless of the one-year extension granted, the extended Lok Sabha cannot continue for more than six months after the emergency has formally ended."
    },
    {
        "id": "ch44-l2-q37",
        "question": "Regarding fundamental rights, Article 358 is",
        "options": ["Article 358 requires a separate Parliamentary resolution.","Article 359 requires the President to specifically promulgate a separate order detailing which enforcement rights are being suspended.","Article 358 applies strictly to border skirmishes.","Article 359 applies exclusively to foreign nationals."],
        "correctAnswerIndex": 1,
        "explanation": "Article 358 operates on autopilot: the moment an external emergency is declared, Article 19 vanishes. Conversely, Article 359 does absolutely nothing until the President consciously issues a separate executive order explicitly listing the rights whose enforcement is suspended."
    },
    {
        "id": "ch44-l2-q38",
        "question": "Can the President suspend Article 20 (Protection in respect of conviction for offences) during a National Emergency?",
        "options": ["Yes, if it","No, the 44th Amendment explicitly prohibits the suspension of the enforcement of Articles 20 and 21 under any circumstances."],
        "correctAnswerIndex": 1,
        "explanation": "As the ultimate firewall against state tyranny, the 44th Amendment completely sterilized the President"
    },
    {
        "id": "ch44-l2-q39",
        "question": "Under Article 358, laws made during an emergency that are inconsistent with Article 19 are constitutionally protected from challenge. However, this protection applies only if:",
        "options": ["The law expressly contains a recital declaring that it is made in relation to the emergency.","The law was unanimously passed by a 2/3rd majority.","The Supreme Court pre-approves it.","The law solely targets military personnel."],
        "correctAnswerIndex": 0,
        "explanation": "To prevent the government from slipping completely unrelated, dictatorial laws past the courts during a crisis, the 44th Amendment required that any law seeking protection from Article 19 MUST explicitly state on its face that it is connected to the emergency."
    },
    {
        "id": "ch44-l2-q40",
        "question": "The suspension of the enforcement of rights under a Presidential Order (Article 359) can be applied to:",
        "options": ["The whole of India.","Any specific part of India.","Both (a) and (b).","Only the capital territory."],
        "correctAnswerIndex": 2,
        "explanation": "A Presidential Order under Article 359 is highly flexible territorially; it can blanket the entire nation or be surgically restricted to a specific geographical zone experiencing heavy conflict."
    },
    {
        "id": "ch44-l2-q41",
        "question": "If the Lok Sabha passes a resolution for the",
        "options": ["The President is acting within his constitutional discretion.","The President has committed gross unconstitutional impropriety, as the revocation is mandatorily binding upon him.","The matter must be escalated to the Rajya Sabha.","The Prime Minister must break the tie."],
        "correctAnswerIndex": 1,
        "explanation": "The phrasing introduced by the 44th Amendment is unambiguous:"
    },
    {
        "id": "ch44-l2-q42",
        "question": "During a National Emergency, can the Parliament extend the legislative life of a State Assembly?",
        "options": ["No, only the Governor can do that.","Yes, for one year at a time, for any length of time (subject to the 6-month cessation rule)."],
        "correctAnswerIndex": 1,
        "explanation": "Mirroring its power to extend its own life, Parliament possesses the sheer concurrent authority during an emergency to legally extend the tenure of state legislative assemblies by one year at a time."
    },
    {
        "id": "ch44-l2-q43",
        "question": "Article 354 allows the President to modify the financial distribution of revenues between the Centre and States. Does this order need Parliamentary oversight?",
        "options": ["No, it is an absolute executive decree.","Yes, it must be laid before both Houses of Parliament as soon as possible."],
        "correctAnswerIndex": 1,
        "explanation": "While granting the President massive fiscal emergency powers, Article 354 still insists on legislative transparency, mandating that any such financial modification order must be presented to Parliament."
    },
    {
        "id": "ch44-l2-q44",
        "question": "In the infamous ADM Jabalpur (Habeas Corpus) case (1976), the SC ruled an arrested person had no legal remedy during the emergency. How was this structurally",
        "options": ["By the 42nd Amendment.","By the 44th Amendment explicitly making Article 21 completely non-suspendable under any emergency.","By the 73rd Amendment.","By an independent Act of Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "The ADM Jabalpur ruling represents the dark nadir of the Indian judiciary. The 44th Amendment structurally bullet-proofed the Constitution against a repeat by ensuring Article 21 (Life and Liberty) can never be suspended by Article 359."
    },
    {
        "id": "ch44-l2-q45",
        "question": "In the Minerva Mills case (1980), the Supreme Court cemented that the proclamation of a National Emergency can be directly challenged in a court on the ground of:",
        "options": ["Malafides (bad faith).","That the proclamation was based on wholly extraneous and irrelevant facts.","Both (a) and (b).","Emergency proclamations remain absolutely non-justiciable."],
        "correctAnswerIndex": 2,
        "explanation": "Minerva Mills shattered the illusion of absolute executive immunity. The court held that if an emergency is declared maliciously (malafide) or based on absurdly irrelevant facts (wholly extraneous), the judiciary can strike it down."
    },
    {
        "id": "ch44-l2-q46",
        "question": "The 42nd Amendment enabled the President to limit the operation of a National Emergency to a specified",
        "options": ["Isolating and controlling a localized armed rebellion (like in the North-East) without disrupting the entire country","Saving central exchequer money.","Punishing a specific rogue opposition-led state.","Bypassing the Lok Sabha"],
        "correctAnswerIndex": 0,
        "explanation": "Before 1976, an emergency was an"
    },
    {
        "id": "ch44-l2-q47",
        "question": "If an emergency is proclaimed strictly for the boundary State of Manipur, can the Parliament make restrictive laws for the State of Kerala (which is not under an emergency)?",
        "options": ["No, never.","Yes, the 42nd Amendment specifically allowed Parliament to make laws for a non-emergency state if the security of the emergency-struck area is threatened by activities in that outer state."],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment included a powerful"
    },
    {
        "id": "ch44-l2-q48",
        "question": "Assertion (A): Article 358 possesses a wider territorial scope than Article 359. Reason (R): Article 358 automatically blankets the entire territory of India, whereas Article 359 can be surgically restricted to a specific part.",
        "options": ["Both A and R are true, and R is the correct explanation.","Both A and R are true, but R is not the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This is a core distinction. The moment Article 358 triggers, the six freedoms of Article 19 are wiped out across the entire country simultaneously. Conversely, the President can geofence an Article 359 order strictly to a conflict zone."
    },
    {
        "id": "ch44-l2-q49",
        "question": "Assertion (A): The 1975 emergency is classified as",
        "options": ["Both A and R are true, and R explains A.","Both A and R are true, but R does not explain A.","A is true, but R is false.","A is false."],
        "correctAnswerIndex": 0,
        "explanation": "Constitutional classification depends strictly on the invoked ground. 1962 and 1971 were external security threats (War/Aggression), making them"
    },
    {
        "id": "ch44-l2-q50",
        "question": "Is the Rajya Sabha",
        "options": ["No, the Rajya Sabha is functionally irrelevant in emergencies.","Yes, the Rajya Sabha MUST approve it within the initial 1-month window to keep the proclamation legally alive until the new Lok Sabha is formed."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution abhors a vacuum. If the Lok Sabha dissolves, the Rajya Sabha acts as the solitary constitutional sentry. If the upper house fails to approve it within the mandatory 30 days, the emergency dies instantly."
    },
    {
        "id": "ch44-l2-q51",
        "question": "How does a National Emergency contrast with President",
        "options": ["In National Emergency, it is dissolved; in President","In a National Emergency, it continues to physically function and legislate; in President"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 352, the state continues operating, albeit subordinate to Central directions. Under Article 356, the state"
    },
    {
        "id": "ch44-l2-q52",
        "question": "In a National Emergency, the relationship of the Centre with ALL states changes. In a localized President",
        "options": ["Only the specific state operating under the proclamation.","All neighboring contiguous states.","Only the Union Territories.","The entire country."],
        "correctAnswerIndex": 0,
        "explanation": "Article 352 is a nationwide federal shift. Article 356 is a highly targeted, localized constitutional quarantine applied strictly to the singular state demonstrating democratic failure."
    },
    {
        "id": "ch44-l2-q53",
        "question": "Which Article is described by constitutional scholars as the unique",
        "options": ["Article 352.","Article 356.","Article 360.","Article 368."],
        "correctAnswerIndex": 0,
        "explanation": "Article 352 is structurally brilliant: it allows the Indian state to seamlessly morph from a peacetime federal structure into a highly centralized unitary command during a crisis, reverting without needing formal constitutional amendments."
    },
    {
        "id": "ch44-l2-q54",
        "question": "If the President issues a blanket order under Article 359 suspending Article 32 (Right to Constitutional Remedies through the Supreme Court):",
        "options": ["The High Courts can theoretically still issue writs under their wider Article 226 powers, unless the Presidential Order explicitly prohibits them as well.","The High Courts automatically lose all writ jurisdictions globally.","The Armed Forces assume all judicial duties.","The state governments can veto the order."],
        "correctAnswerIndex": 0,
        "explanation": "Article 32 is a gateway specifically to the Supreme Court. While a vaguely drafted Article 359 order might block Article 32, a citizen might still approach a High Court via Article 226, unless the Presidential Order meticulously bars all judicial enforcement."
    },
    {
        "id": "ch44-l2-q55",
        "question": "What is the currently valid constitutional ground for declaring a",
        "options": ["Internal Disturbance.","Armed Rebellion.","Civil War.","General Strike."],
        "correctAnswerIndex": 1,
        "explanation": "Following the 44th Amendment in 1978, the incredibly vague phrase"
    },
    {
        "id": "ch44-l2-q56",
        "question": "Does the term",
        "options": ["No, it explicitly refers only to the Prime Minister and other Ministers of Cabinet Rank.","Yes, it encompasses the entire Council of Ministers."],
        "correctAnswerIndex": 0,
        "explanation": "Article 352 is the ONLY place in the original Constitution where the word"
    },
    {
        "id": "ch44-l2-q57",
        "question": "Which specific Article deals directly with the",
        "options": ["Article 358.","Article 359.","Article 352.","Article 355."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 358 deals exclusively and automatically with Article 19, Article 359 is the broader mechanism that empowers the President to issue specific orders suspending the judicial ENFORCEMENT of any other constitutional right."
    },
    {
        "id": "ch44-l2-q58",
        "question": "If the President dictates an executive order under Article 359 to paralyze fundamental rights, that order must constitutionally be:",
        "options": ["Laid before both Houses of Parliament as soon as may be.","Kept secret in the Ministry of Defence.","Approved solely by the NITI Aayog.","Reviewed by the Governor."],
        "correctAnswerIndex": 0,
        "explanation": "Despite being an enormous grant of dictatorial executive power, the President"
    },
    {
        "id": "ch44-l2-q59",
        "question": "During an emergency, if the Union Parliament heavily drafts laws concerning pure State List subjects, and the emergency ends smoothly, those laws:",
        "options": ["Instantly evaporate the day the emergency drops.","Will remain functionally operative for exactly six months, after which they automatically cease to have effect to the extent of their incompetency.","Become permanent central statutes."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution provides a six-month"
    },
    {
        "id": "ch44-l2-q60",
        "question": "Can a state move the Supreme Court to legally contest the sheer proclamation of a National Emergency?",
        "options": ["Yes, under the original jurisdiction of Article 131 if it feels its federal rights are being malafidely usurped.","No, emergency powers are utterly beyond the realm of federal judicial challenge."],
        "correctAnswerIndex": 0,
        "explanation": "Post-Minerva Mills, a state is not legally defenseless. If a Union government maliciously declares an emergency simply to terrorize or subvert states, an aggrieved state can invoke Article 131 to challenge the vires of the proclamation in the Supreme Court."
    },
    {
        "id": "ch44-l2-q61",
        "question": "The Constitution mandates that at least half of the UPSC members should have held office for at least ten years under the Government. The period of service computed for this purpose includes service under:",
        "options": ["Only the Central Government","Both the Central Government and State Governments","Only the IAS cadre","Only the judiciary"],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(1) specifies that the ten-year service requirement can be fulfilled by service under either the Government of India or the Government of a State. This ensures that members with both central and state-level administrative experience are represented."
    },
    {
        "id": "ch44-l2-q62",
        "question": "The UPSC",
        "options": ["The Government is legally bound to follow every recommendation of the UPSC","The Government is not legally bound to accept the UPSC","The UPSC","The UPSC can compel the Government to follow its recommendations through the courts"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC is advisory — its recommendations are not binding. However, Article 323 requires the Government to explain cases where the advice was not followed in a memorandum laid before Parliament. This creates accountability but not legal compulsion."
    },
    {
        "id": "ch44-l2-q63",
        "question": "A key distinction between the removal of a UPSC Chairman and the removal of a High Court Judge is:",
        "options": ["Both are removed by the same process — impeachment by Parliament","The UPSC Chairman is removed by the President after a Supreme Court inquiry (Article 317), while a High Court Judge is removed by the President on an address passed by both Houses of Parliament (Article 217/124)","The UPSC Chairman can be removed by the PM, while a Judge requires Parliament","There is no distinction; both processes are identical"],
        "correctAnswerIndex": 1,
        "explanation": "The removal processes differ: UPSC members are removed by the President after a SC inquiry under Article 317. High Court/SC Judges are removed via a parliamentary address (impeachment) under Articles 124/217. The UPSC process is executive-judicial, while the judicial removal is purely parliamentary."
    },
    {
        "id": "ch44-l2-q64",
        "question": "The UPSC must be consulted on claims for reimbursement of legal expenses incurred by a civil servant. This function falls under which category?",
        "options": ["Recruitment function","Advisory function under Article 320(3)(d)","Quasi-judicial function","Legislative function"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(3)(d) specifically requires the UPSC to be consulted on claims by civil servants for reimbursement of legal expenses incurred in defending proceedings instituted against them in their official capacity. This is an advisory function."
    },
    {
        "id": "ch44-l2-q65",
        "question": "The",
        "options": ["It violates Article 315","It undermines the","upheld by the UPSC and raises concerns about transparency, reservation compliance, and political patronage in appointments to key positions","It was declared unconstitutional by the Supreme Court","It was introduced by the UPSC itself"],
        "correctAnswerIndex": 1,
        "explanation": "While the lateral entry scheme involves the UPSC, critics argue it bypasses the rigorous CSE process, does not apply reservation provisions, and may open the door to politically-influenced appointments. The scheme was paused in 2024 after significant controversy over the lack of reservation."
    },
    {
        "id": "ch44-l2-q66",
        "question": "The UPSC conducts examinations for recruitment. Can the Government exclude certain posts from the UPSC",
        "options": ["No, all government posts must go through the UPSC","Yes, the President can make regulations excluding posts from UPSC consultation, but these must be laid before Parliament","Only the Supreme Court can authorize exclusions","Only during a National Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(4) allows the President to make regulations specifying matters in which the UPSC need not be consulted, but Article 320(5) requires these regulations to be laid before each House of Parliament for at least 14 days, during which they may be modified or annulled."
    },
    {
        "id": "ch44-l2-q67",
        "question": "How does the",
        "options": ["Both are constitutional bodies","The UPSC is a constitutional body (Articles 315-323), while the SSC is a non-constitutional, statutory body created by executive resolution — it conducts recruitment for Group C and erstwhile Group D posts","The SSC is superior to the UPSC","The SSC is a subsidiary of the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC has constitutional status under Part XIV. The SSC was created by an executive resolution in 1975 and handles Group C recruitment, while the UPSC handles Group A and Group B (gazetted) recruitment. The SSC has no constitutional protection for its independence."
    },
    {
        "id": "ch44-l2-q68",
        "question": "The concept of",
        "options": ["Article 315","Article 312","Article 320","Article 324"],
        "correctAnswerIndex": 1,
        "explanation": "Article 312 empowers Parliament to create new All India Services (beyond IAS, IPS, IFS) if the Rajya Sabha passes a resolution supported by not less than two-thirds of the members present and voting. The UPSC then conducts the recruitment for these services."
    },
    {
        "id": "ch44-l2-q69",
        "question": "The",
        "options": ["Abolition of the UPSC","Strengthening the UPSC by giving it more teeth — including making its recommendations on disciplinary matters binding, and reforming the examination system to test aptitude rather than rote learning","Replacing the UPSC with a computerized system","Merging the UPSC with the Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The 2nd ARC (under Veerappa Moily) recommended making UPSC recommendations binding in disciplinary cases, reforming the CSE pattern to focus on aptitude and analytical skills, and strengthening the UPSC"
    },
    {
        "id": "ch44-l2-q70",
        "question": "The UPSC is consulted on disciplinary matters affecting All India Services officers. At what level does the UPSC typically become involved?",
        "options": ["For all minor penalties","Only for major penalties like dismissal, removal, or compulsory retirement of All India Services and Group A Central Services officers","For every workplace complaint","Only on reference by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC is consulted in disciplinary cases involving major penalties (dismissal, removal, compulsory retirement, reduction in rank) for All India Services and Group A Central Services officers. Minor penalties are typically handled within the department without UPSC consultation."
    },
    {
        "id": "ch44-l2-q71",
        "question": "The",
        "options": ["Chairman of the UPSC or as a member of the UPSC","Governor of a state","Chief Secretary of any state","Chief Election Commissioner"],
        "correctAnswerIndex": 0,
        "explanation": "Article 319 provides that the Chairman of a SPSC is eligible for appointment as Chairman or member of the UPSC, but is not eligible for any other government employment. A member of a SPSC is eligible for appointment as Chairman or member of the UPSC, or Chairman of any SPSC."
    },
    {
        "id": "ch44-l2-q72",
        "question": "If the UPSC advises the Government NOT to appoint a particular candidate, but the Government proceeds with the appointment anyway:",
        "options": ["The appointment is automatically void","The UPSC can challenge it in court","The Government must explain this in the memorandum to Parliament; the appointment remains valid unless challenged on other legal grounds","The candidate must resign"],
        "correctAnswerIndex": 2,
        "explanation": "Since the UPSC"
    },
    {
        "id": "ch44-l2-q73",
        "question": "The concept of",
        "options": ["3 months","6 months","1 year","No specific duration is mentioned; the practice is regulated by executive orders and the Government decides"],
        "correctAnswerIndex": 2,
        "explanation": "The proviso to Article 320(3) allows temporary appointments for not more than one year without consulting the UPSC. However, the Government has often extended this through executive orders, which has been a subject of judicial scrutiny."
    },
    {
        "id": "ch44-l2-q74",
        "question": "The UPSC",
        "options": ["Mains → Prelims → Interview","Prelims (Objective) → Mains (Descriptive) → Personality Test (Interview)","Interview → Written Test → Group Discussion","Prelims → Personality Test → Mains"],
        "correctAnswerIndex": 1,
        "explanation": "The CSE follows: Stage 1 — Preliminary Examination (objective, screening test), Stage 2 — Main Examination (written, descriptive), and Stage 3 — Personality Test (Interview). The Prelims score is only used for screening and does not count in the final ranking."
    },
    {
        "id": "ch44-l2-q75",
        "question": "The",
        "options": ["Abolish the UPSC","The Chairman and members of the UPSC should be appointed after consultation with the Chairman of the existing UPSC, to ensure continuity and independence","Merge the UPSC with SPSCs","The UPSC should report to the PM directly"],
        "correctAnswerIndex": 1,
        "explanation": "The Sarkaria Commission recommended that the Chairman/members of the UPSC should be appointed by the President in consultation with the outgoing Chairman of the UPSC. This was to prevent political influence in appointments and ensure institutional continuity."
    },
    {
        "id": "ch44-l2-q76",
        "question": "The concept of a",
        "options": ["An executive order of the President","An Act of Parliament, on the request of the state legislatures of the concerned states","A unanimous resolution of the Rajya Sabha","A Supreme Court directive"],
        "correctAnswerIndex": 1,
        "explanation": "A JSPSC is created by an Act of Parliament, but only if the legislatures of the concerned states pass resolutions requesting it. This ensures that the states voluntarily opt for a joint commission. The Chairman and members are appointed by the President."
    },
    {
        "id": "ch44-l2-q77",
        "question": "Under the UPSC",
        "options": ["The UPSC conducts the disciplinary inquiry itself","The UPSC is consulted AFTER the inquiry is completed and BEFORE the final order is passed, to advise the appointing authority on the appropriate penalty","The UPSC has no role in disciplinary proceedings","The UPSC files the charge-sheet against the delinquent officer"],
        "correctAnswerIndex": 1,
        "explanation": "In Article 311 proceedings (dismissal/removal/reduction in rank), the inquiry is conducted by the department, not the UPSC. The UPSC is consulted at the penalty stage — after the inquiry report is ready and before the final order is passed. This is an advisory consultation."
    },
    {
        "id": "ch44-l2-q78",
        "question": "The",
        "options": ["Abolishing the interview stage of the CSE","Reducing the age limit and number of attempts for the CSE, and introducing a","channel for specialists at higher levels of government","Increasing the UPSC","Making the UPSC subordinate to the PMO"],
        "correctAnswerIndex": 1,
        "explanation": "The Hota Committee recommended streamlining the CSE (reducing age/attempts), introducing domain expertise through lateral entry, performance-based assessments for civil servants, and mandatory training modules. Many of these recommendations influenced the subsequent lateral entry debate."
    },
    {
        "id": "ch44-l2-q79",
        "question": "The",
        "options": ["IAS and IPS posts","Posts filled by deputation for less than 3 years, temporary posts of less than 1 year, and Group B non-gazetted posts","All judiciary posts","All defence positions"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC Exemption Regulations typically exclude: (a) temporary posts for less than 1 year, (b) deputation appointments for less than 3 years, (c) Group B non-gazetted posts, and (d) certain specialized posts. This prevents the UPSC from being overwhelmed with routine appointments."
    },
    {
        "id": "ch44-l2-q80",
        "question": "The phrase",
        "options": ["The creation of specialized recruitment agencies (SSC, Railway Recruitment Boards) that handle a vast majority of government recruitment","The increase in UPSC membership","The UPSC conducting too many examinations","The Supreme Court taking over UPSC functions"],
        "correctAnswerIndex": 0,
        "explanation": "The UPSC"
    },
    {
        "id": "ch44-l2-q81",
        "question": "Can the UPSC recommend candidates for appointment to posts under a",
        "options": ["No, the UPSC has no jurisdiction over non-governmental bodies","Yes, but only if Parliament passes a law under Article 321 extending the UPSC","Only with the approval of the Supreme Court","Only during a Financial Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 specifically empowers Parliament to extend the UPSC"
    },
    {
        "id": "ch44-l2-q82",
        "question": "The UPSC",
        "options": ["50% of total marks","Approximately 15% of the total marks (275 out of 2025)","25% of total marks","The interview is purely qualifying, no marks are assigned"],
        "correctAnswerIndex": 1,
        "explanation": "The Personality Test carries 275 marks out of a total of 2025 marks (Main Examination: 1750 + Interview: 275), which is approximately 13.6%. While it is a small percentage, it can significantly impact rankings, making it a subject of debate about subjectivity."
    },
    {
        "id": "ch44-l2-q83",
        "question": "The",
        "options": ["Recruitment to civil services","Disciplinary matters involving corruption and vigilance cases against senior officers","Conducting examinations","Framing recruitment rules"],
        "correctAnswerIndex": 1,
        "explanation": "The CVC, established as a statutory body under the CVC Act 2003, now handles the advisory role in vigilance and corruption-related disciplinary cases, which was previously within the UPSC"
    },
    {
        "id": "ch44-l2-q84",
        "question": "The",
        "options": ["Abolishing the UPSC","Introducing the Preliminary Examination as a screening test before the Main Examination, and allowing candidates to write in Indian languages","Making the CSE online","Reducing the syllabus to only one subject"],
        "correctAnswerIndex": 1,
        "explanation": "The Kothari Committee (1976) recommended the introduction of a Preliminary Examination as an objective-type screening test, which was implemented in 1979. It also recommended allowing candidates to write the examination in scheduled languages, democratizing access to the civil services."
    },
    {
        "id": "ch44-l2-q85",
        "question": "The",
        "options": ["It serves as a recruitment calendar","It enables Parliament to exercise oversight by scrutinizing the Government","It publishes the UPSC","It lists all the candidates who appeared for the CSE"],
        "correctAnswerIndex": 1,
        "explanation": "The annual report, along with the explanatory memorandum, ensures parliamentary accountability. Parliament can question the Government on why UPSC advice was not followed, debate the implications, and hold the executive accountable for any patronage or favoritism."
    },
    {
        "id": "ch44-l2-q86",
        "question": "Under Article 315, the Constitution provides for different types of Public Service Commissions. Which of the following is the correct hierarchy?",
        "options": ["UPSC > JSPSC > SPSC","UPSC, JSPSC, and SPSC are all independent constitutional bodies with no hierarchical relationship — though their jurisdictions differ (national, multi-state, and state respectively)","SPSC > JSPSC > UPSC","They are all subordinate to the DoPT"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC, JSPSC, and SPSC are all independent constitutional bodies with no hierarchical relationship. The UPSC handles central recruitment, the JSPSC handles joint state recruitment, and the SPSC handles individual state recruitment — each within its own jurisdiction."
    },
    {
        "id": "ch44-l2-q87",
        "question": "Can the UPSC refuse to advise the Government if it considers the request to be politically motivated?",
        "options": ["Yes, the UPSC has discretion to refuse","No, the UPSC is constitutionally obligated to advise on all matters referred to it under Article 320, regardless of the perceived motivation behind the request","Only with the CJI","Only if the matter involves a constitutional amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC"
    },
    {
        "id": "ch44-l2-q88",
        "question": "The",
        "options": ["Abolishing optional subjects in the Mains examination","Increasing the upper age limit for all categories to 37 years","Reducing the number of attempts for General category candidates from 6 to 4, and increasing the lower age limit","Making the CSE a computer-based test"],
        "correctAnswerIndex": 2,
        "explanation": "The Baswan Committee recommended reducing CSE attempts for General category candidates from 6 to 4, and for OBC from 9 to 6, while raising the lower age limit from 21 to 26 years. These recommendations were aimed at reducing the coaching industry"
    },
    {
        "id": "ch44-l2-q89",
        "question": "The UPSC",
        "options": ["The UPSC approves all transfers","The UPSC has NO role in transfers and postings — these are handled by the DoPT and respective cadre-controlling authorities. The UPSC is involved only in recruitment and certain disciplinary/service condition matters.","The UPSC monitors all IAS postings","The UPSC recommends suitable postings for all Group A officers"],
        "correctAnswerIndex": 1,
        "explanation": "A common misconception: the UPSC has NO role in day-to-day transfers and postings. These are managed by the DoPT (for Central Services), the state governments (for state cadre), and the respective cadre-controlling ministries. The UPSC"
    },
    {
        "id": "ch44-l2-q90",
        "question": "The",
        "options": ["The NRA replaces the UPSC entirely","The NRA is a subordinate body of the UPSC","The NRA handles screening for Group B and C level recruitment (SSC, RRB) through a common test, while the UPSC continues to handle Group A recruitment — the two are independent bodies with different mandates","The NRA was created by amending Article 315"],
        "correctAnswerIndex": 2,
        "explanation": "The NRA (now reconstituted) was designed to conduct a Common Eligibility Test (CET) for Group B and C level government jobs, replacing multiple examinations by SSC, RRB, and IBPS with a single screening test. It does NOT affect the UPSC"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch44-l3-q1",
        "question": "Analyze the constitutional validity of the government",
        "options": ["The power is absolute and non-reviewable.","The power is subject to the proviso that such regulations must be laid before Parliament for 14 days and are subject to modification.","It can only be used in case of national emergency.","It requires a resolution by the Rajya Sabha with 2/3rd majority."],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(5) provides a mandatory check by Parliament, ensuring that the executive doesn"
    },
    {
        "id": "ch44-l3-q2",
        "question": "Consider the following statements regarding the independence of UPSC:\\n1. The expenses are charged on the Consolidated Fund and not subject to vote.\\n2. A member",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect. While there"
    },
    {
        "id": "ch44-l3-q3",
        "question": "The Supreme Court in",
        "options": ["That UPSC","The conditions under which civil servants can be dismissed without a mandatory inquiry (Art 311 exceptions).","That the President must consult the Chief Justice for UPSC appointments.","The salary structure of commissions."],
        "correctAnswerIndex": 1,
        "explanation": "By clarifying the exceptions to Art 311(2), the court also clarified where the procedural safeguards (and by extension the consultation process) can be bypassed for security/integrity."
    },
    {
        "id": "ch44-l3-q4",
        "question": "Regarding recruitment to",
        "options": ["UPSC recruits and allocates the cadres directly.","UPSC conducts the recruitment; the Government (DoPT) does the cadre allocation.","The States recruit and the UPSC just verifies the results.","The recruitment is done by a Joint Panel of UPSC and SPSC."],
        "correctAnswerIndex": 1,
        "explanation": "UPSC is the recruitment agency; the executive (DoPT) handles the management and allocation of the successful candidates to various state cadres."
    },
    {
        "id": "ch44-l3-q5",
        "question": "How does the",
        "options": ["CVC has replaced the UPSC for all disciplinary advice.","The emergence of CVC (a statutory body) sometimes creates overlapping advisory roles, though UPSC","UPSC report goes to the CVC for approval.","There is no overlap as CVC only handles private sector corruption."],
        "correctAnswerIndex": 1,
        "explanation": "While both are consulted in disciplinary cases (especially for corruption), UPSC is a constitutional body whose consultation is a mandate for major penalties."
    },
    {
        "id": "ch44-l3-q6",
        "question": "The term",
        "options": ["Participating in political rallies.","Interest in any contract or agreement made by the Government of India or a State or deriving benefit from such a contract through an incorporated company.","Not following the President","Showing bias in the interview process."],
        "correctAnswerIndex": 1,
        "explanation": "This specific financial conflict of interest is the deemed definition of misbehaviour in the Article itself."
    },
    {
        "id": "ch44-l3-q7",
        "question": "If a Joint State Public Service Commission (JSPSC) is needed for two or more states, it is created through:",
        "options": ["A Constitutional Amendment.","An Act of Parliament after resolutions are passed by the respective state legislatures.","A decree by the President.","A joint resolution of the PSCs of those states."],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(2) provides the basis for common recruitment through a statutory JSPSC."
    },
    {
        "id": "ch44-l3-q8",
        "question": "What is the tenure of the Chairman of the UPSC as per the Constitution?",
        "options": ["Five years or 62 years of age.","Six years or 65 years of age.","During the pleasure of the President.","Until he is dismissed by the Parliament in the manner of a Judge."],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(2) provides for the 6 years or 65 age tenure, whichever is earlier."
    },
    {
        "id": "ch44-l3-q9",
        "question": "Which of the following describes the",
        "options": ["They have a mandate to work for ten years.","Their mandate continues even after a change in the central ministry (continuity of impartial administration).","They must be re-appointed every three years.","They must always be in agreement with the PM."],
        "correctAnswerIndex": 1,
        "explanation": "This concept underlies the independence of the"
    },
    {
        "id": "ch44-l3-q10",
        "question": "Under Article 322, the",
        "options": ["Subject to review by the Auditor General only.","Not votable by the Parliament.","Votable but can only be increased.","Paid by the states to which the officers are allocated."],
        "correctAnswerIndex": 1,
        "explanation": "Charging expenditure ensures that the body"
    },
    {
        "id": "ch44-l3-q11",
        "question": "The",
        "options": ["100% by competitive exams in London.","Based on a 50:50 ratio between direct recruitment and promotions from provincial services.","Based on a 50:50 ratio between British and Indians, to be achieved in 15 years.","Handled by the Viceroy"],
        "correctAnswerIndex": 2,
        "explanation": "This was a major milestone toward the"
    },
    {
        "id": "ch44-l3-q12",
        "question": "Which Article provides that the additional functions conferred on the UPSC can only be by an Act of Parliament?",
        "options": ["Article 320.","Article 321.","Article 322.","Article 323."],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 prevents the executive from unilaterally expanding the workload or powers of the commission without legislative approval."
    },
    {
        "id": "ch44-l3-q13",
        "question": "A member of the UPSC can only be removed on the ground of misbehaviour if:",
        "options": ["The President finds him guilty after an internal probe.","The Supreme Court, after an inquiry, reports that the member ought to be removed.","The Lok Sabha passes a resolution with 2/3rd majority.","The UPSC Chairman recommends it."],
        "correctAnswerIndex": 1,
        "explanation": "Article 317 provides for this quasi-judicial oversight to prevent arbitrary firing of independent members."
    },
    {
        "id": "ch44-l3-q14",
        "question": "Can a person who has been a",
        "options": ["Yes, according to Article 319(c).","No, only a Chairman can become another Chairman.","Only if he is less than 60 years old.","Only if the Supreme Court permits."],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution allows this mobility from Union member to State chairman."
    },
    {
        "id": "ch44-l3-q15",
        "question": "The",
        "options": ["Police modernization.","Civil Service reforms (including recruitment and efficiency).","Judicial backlog.","Electoral roll management."],
        "correctAnswerIndex": 1,
        "explanation": "It made wide-ranging recommendations on improving the merit system and the civil service framework."
    },
    {
        "id": "ch44-l3-q16",
        "question": "If the government decides to ignore the UPSC advice on a specific appointment, the memorandum to Parliament must explain:",
        "options": ["The cost savings.","The reasons for such non-acceptance.","The name of the candidate the government prefers.","The list of UPSC members who gave the advice."],
        "correctAnswerIndex": 1,
        "explanation": "Article 323 requires this transparency to ensure legislative oversight over executive deviations."
    },
    {
        "id": "ch44-l3-q17",
        "question": "The landmark",
        "options": ["It gave UPSC control over the CBI.","It strengthened the principle of autonomy for constitutional and statutory watchdogs (like CVC/UPSC).","It abolished the UPSC.","It restricted UPSC functions to only technical exams."],
        "correctAnswerIndex": 1,
        "explanation": "While primarily about CVC, the case reinforced the legal sanctity of independent oversight mechanisms in the Indian state."
    },
    {
        "id": "ch44-l3-q18",
        "question": "",
        "options": ["That the senior-most member always gets a chance.","Continuity of the commission","To give the President more power over the commission.","To reduce the salary of the regular Chairman."],
        "correctAnswerIndex": 1,
        "explanation": "The 15th Amendment introduced Article 316(1A) for this purpose."
    },
    {
        "id": "ch44-l3-q19",
        "question": "In the",
        "options": ["Tribunals handle cases previously under UPSC.","Decisions of Administrative Tribunals regarding service matters can still be reviewed by High Courts, maintaining a check on the executive","It made UPSC a tribunal.","It abolished the Article 323A."],
        "correctAnswerIndex": 1,
        "explanation": "It ensured that even if a specialized tribunal exists for civil service matters, the High Courts retain their constitutional oversight."
    },
    {
        "id": "ch44-l3-q20",
        "question": "Article 318 allows the President to make regulations for UPSC members",
        "options": ["Giving jobs to the President","Ensuring the administrative autonomy of the Commission by letting them have a dedicated secretariat.","Keeping the UPSC staff under the local police control.","Reducing the number of UPSC members."],
        "correctAnswerIndex": 1,
        "explanation": "Independent staffing is crucial for the overall independence of any constitutional body."
    },
    {
        "id": "ch44-l3-q21",
        "question": "Regarding",
        "options": ["Conduct the interview and assessment process to ensure merit.","Approve the candidate chosen by the Minister directly.","Protest against the policy in the Supreme Court.","Hire only foreigners."],
        "correctAnswerIndex": 0,
        "explanation": "The government has involved UPSC in the lateral entry selection process to maintain a merit-based image and transparency."
    },
    {
        "id": "ch44-l3-q22",
        "question": "Which of the following describes the",
        "options": ["It ensures that only the richest join the service.","It acts as a shield against political patronage and spoils system in civil service recruitment.","It ensures that all officers come from the same college.","It only recruits based on physical strength."],
        "correctAnswerIndex": 1,
        "explanation": "This is the primary philosophical justification for having an independent UPSC."
    },
    {
        "id": "ch44-l3-q23",
        "question": "The",
        "options": ["Should be abolished.","Should be 100% Indian.","Should have 25% Indians.","Should only be for British citizens."],
        "correctAnswerIndex": 2,
        "explanation": "This was an early tentative step toward recognizing Indian aspirations in senior administration."
    },
    {
        "id": "ch44-l3-q24",
        "question": "Under Article 312, if the Rajya Sabha passes a resolution for a new All-India Service:",
        "options": ["The service is automatically created.","Parliament is","to create it by law.","The President must issue an ordinance.","The Supreme Court must verify the need."],
        "correctAnswerIndex": 1,
        "explanation": "The resolution is a prerequisite but the creation itself requires a legislative act by the Parliament."
    },
    {
        "id": "ch44-l3-q25",
        "question": "A UPSC member who is dismissed on grounds of",
        "options": ["None, the President","Judicial review in the High Court/Supreme Court on grounds of violation of natural justice or arbitrary action.","A second inquiry by the Parliament.","He can join another SPSC."],
        "correctAnswerIndex": 1,
        "explanation": "While the President has the power, any state action is subject to judicial review for fairness and non-arbitrariness."
    },
    {
        "id": "ch44-l3-q26",
        "question": "The",
        "options": ["Section 96C.","Section 35.","Section 10.","Section 144."],
        "correctAnswerIndex": 0,
        "explanation": "Section 96C of the Government of India Act, 1919 provided for the establishment of a Public Service Commission."
    },
    {
        "id": "ch44-l3-q27",
        "question": "Which Article provides that the conditions of service of UPSC members are determined by the President?",
        "options": ["Article 316.","Article 318.","Article 320.","Article 322."],
        "correctAnswerIndex": 1,
        "explanation": "Article 318 gives the President the power to make regulations for the conditions of service and staff."
    },
    {
        "id": "ch44-l3-q28",
        "question": "The term of office of 6 years/65 years for UPSC members is intended to:",
        "options": ["Give them a long enough career to understand things.","Ensure they don","Synchronize with the term of the Rajya Sabha.","Make them equivalent to High Court judges."],
        "correctAnswerIndex": 1,
        "explanation": "It balances the need for security with the need for fresh perspectives and preventing vested interests."
    },
    {
        "id": "ch44-l3-q29",
        "question": "Regarding the UPSC",
        "options": ["Can override the government","Can only debate it and criticize the government.","Must refer it to the President for a final veto.","Can fire the Chairman of UPSC."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament"
    },
    {
        "id": "ch44-l3-q30",
        "question": "Can a member of the UPSC serve on a State PSC Simultaneously?",
        "options": ["No, this would be an office of profit and is prohibited by the Constitution","Yes, if both governors agree.","Only for a temporary period of 3 months.","Only if he is the representative of that state."],
        "correctAnswerIndex": 0,
        "explanation": "Article 319 prohibitions and the nature of the post disqualify concurrent membership."
    },
    {
        "id": "ch44-l3-q31",
        "question": "In the context of the Minerva Mills case (1980), which of the following statements best describes the scope of Judicial Review over a proclamation under Article 352?",
        "options": ["The court can examine the sufficiency of the material on which the President based his satisfaction.","The court can only examine if the satisfaction was based on malafides or wholly irrelevant grounds.","The proclamation is a","and is completely outside the jurisdiction of the courts.","The court must wait for the Parliament to approve the proclamation before reviewing it."],
        "correctAnswerIndex": 1,
        "explanation": "While declaring that emergency proclamations are not immune to judicial scrutiny, the Supreme Court severely restricted its own interference: courts cannot weigh the"
    },
    {
        "id": "ch44-l3-q32",
        "question": "If a National Emergency is proclaimed on the ground of",
        "options": ["No, Article 19 is automatically suspended.","Yes. Article 358 (automatic suspension of Art 19) only triggers during","emergencies (War/External Aggression), not","ones (Armed Rebellion).","Only if the President specifically mentions it in his order under Article 359.","Only in the Union Territories."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment defanged Article 358"
    },
    {
        "id": "ch44-l3-q33",
        "question": "Article 355 imposes a duty on the Union to protect States against",
        "options": ["Article 355 is merely suggestive, while 352 is binding.","Article 355 can be invoked to deploy central paramilitary forces to a state to assist local police without declaring a sweeping, structural emergency under Article 352.","Article 352 transforms the entire federal structure, while Article 355 requires the Governor","There is no difference; they trigger simultaneously."],
        "correctAnswerIndex": 1,
        "explanation": "As clarified by the Sarkaria Commission, Article 355 acts as a constitutional"
    },
    {
        "id": "ch44-l3-q34",
        "question": "During a National Emergency, can the Union Government",
        "options": ["No,","strictly remains a State List subject (Entry 2) and the Centre cannot interfere.","Yes. Under Article 353, the sweeping executive power of the Union to give binding directions extends to",", effectively subjugating the State"],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional architecture of Article 353 obliterates federal boundaries during a crisis. The Union"
    },
    {
        "id": "ch44-l3-q35",
        "question": "When a Presidential Order is issued under Article 359, it",
        "options": ["They are temporarily excised and deleted from the Constitution.","They remain alive in the constitutional text, but any dictatorial law or executive action grossly inconsistent with them cannot be structurally challenged in court during that specific temporal window.","They are legally shifted to the Directive Principles.","They continue to be enforceable by the Supreme Court but paralyzed in High Courts."],
        "correctAnswerIndex": 1,
        "explanation": "Article 359 does not repeal the rights. It acts as an impenetrable procedural shield preventing citizens from actually accessing the legal machinery (Writs/Courts) to complain about a blatant violation committed by the State until the order expires."
    },
    {
        "id": "ch44-l3-q36",
        "question": "The landmark Makhan Singh vs. State of Punjab case clarified that the",
        "options": ["Exclusively restricted to Article 32 (Supreme Court jurisdiction).","Only Article 226 (High Court jurisdiction).","Any court or tribunal for the enforcement of the specified rights, encompassing both Art 32 and Art 226 globally.","Only the district and subordinate courts."],
        "correctAnswerIndex": 2,
        "explanation": "To ensure absolute executive supremacy during martial-like conditions, the Supreme Court ruled that an Article 359 blanket order paralyzes the entire judicial hierarchy, blocking the enforcement of named rights in the Supreme Court, High Courts, and all inferior tribunals simultaneously."
    },
    {
        "id": "ch44-l3-q37",
        "question": "If the Union Parliament enacts a law on a State List subject during a National Emergency, and the State legislature defiantly passes a conflicting law on the very same subject:",
        "options": ["The State law is void from its inception for lack of legislative competence.","The State legislature retains competence, so its law is validly born, but the Parliamentary law constitutionally prevails in case of repugnancy under Article 251.","The Governor must act as an arbiter to decide which law to apply.","The State law is only valid if it receives Presidential assent over the parliamentary law."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Canada, where provincial powers are wiped out, Article 250 empowers Parliament concurrently without suspending the State"
    },
    {
        "id": "ch44-l3-q38",
        "question": "During a National Emergency, the President can unilaterally modify the complex constitutional distribution of fiscal revenues (Articles 268 to 279). Such an extreme financial order:",
        "options": ["Automatically expires the exact moment the emergency ends.","Can legally persist until the end of the financial year in which the emergency officially ceases to operate.","Must be ratified by at least half of the State Legislatures to prevent fiscal extortion.","Is an absolute executive prerogative immune to any parliamentary oversight whatsoever."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent chaotic mid-year fiscal shocks and budget collapse in the states, Article 354 states that while a Presidential order altering the financial flow is tied to the emergency, it possesses the inertia to functionally operate until the closure of that specific fiscal financial year, even if the emergency ends sooner."
    },
    {
        "id": "ch44-l3-q39",
        "question": "If the Lok Sabha is unfortunately dissolved when a National Emergency is in force, and the 6-month extension period is imminently about to expire, who is constitutionally empowered to authorize its further survival?",
        "options": ["The assertive action of the President, via an absolute ordinance.","The continuous, solitary vigilance of the Rajya Sabha alone, which can unilaterally approve its continuance until the new Lok Sabha is constituted.","The Chief Justice of India acting as the constitutional custodian.","The emergency automatically and irreversibly lapses."],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha"
    },
    {
        "id": "ch44-l3-q40",
        "question": "A resolution for",
        "options": ["Technically grant more veto power to the indirectly elected Rajya Sabha.","Establish an","—making it exceptionally difficult for an authoritarian executive to start an emergency, but remarkably easy for the people","Favour a ruling party managing a coalition.","Avoid the intervention of the President"],
        "correctAnswerIndex": 1,
        "explanation": "Following the trauma of 1975, the Constitution was rewired to be highly hostile to emergencies. The high special-majority threshold acts as a massive lock preventing casual imposition, while the low simple-majority exit acts as a rapid-release fail-safe solely controlled by the directly elected lower house."
    },
    {
        "id": "ch44-l3-q41",
        "question": "Assertion (A): The 44th Amendment Act legally transformed the National Emergency mechanism into a",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The 38th Amendment (1975) was designed to paralyze the courts by sealing the President"
    },
    {
        "id": "ch44-l3-q42",
        "question": "Can the democratic tenure of a State Legislative Assembly be extended multiple times sequentially during a prolonged National Emergency?",
        "options": ["No, only once.","Yes, for precise increments of one year at a time, for any unlimited number of years, strictly provided the emergency itself aggressively remains in operational force.","Only with the express, formal consent of the Governor acting on the Chief Minister","Only for a combined, absolute maximum total of 3 cumulative years."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution places no absolute sunset cap during an active crisis. Parliament can theoretically extend a state assembly’s life again and again, year after year, so long as it is done in one-year legal increments and the National Emergency itself has not been revoked."
    },
    {
        "id": "ch44-l3-q43",
        "question": "Which of the following describes the sweeping, brutal legal consequence of the automatic suspension of Article 19 specifically triggered beneath Article 358?",
        "options": ["The State is instantly freed from the constitutional obligation to respect Art 19 while furiously manufacturing new laws or initiating draconian executive action.","Any dictatorial law structurally crafted during this time is magically immunized and remains permanently valid even decades after the emergency ends.","Only the macroscopic Union Government is legally freed from Art 19 restraints, not the vulnerable State Governments.","The Supreme Court can still arbitrarily issue commanding writs for Art 19 utilizing its","."],
        "correctAnswerIndex": 0,
        "explanation": "Article 358 effectively functions as an"
    },
    {
        "id": "ch44-l3-q44",
        "question": "If the President aggressively issues a subsequent, sweeping proclamation of emergency while the previous one is stubbornly already in active force (e.g., overlapping the 1971 external emergency with the 1975 internal emergency):",
        "options": ["The vastly older, first one is automatically, legally revoked by implication.","Both chillingly operate simultaneously side-by-side (a mechanism violently affirmed by the infamous 38th Amendment).","The reckless second one is inherently, fundamentally unconstitutional.","The Parliament must logically merge them into one singular, unified crisis act."],
        "correctAnswerIndex": 1,
        "explanation": "The 38th Amendment (1975) specifically clarified that the President wields the power to declare multiple, overlapping emergencies on differing constitutional grounds (e.g., War vs. Internal Disturbance), allowing them to operate concurrently in independent legal spheres."
    },
    {
        "id": "ch44-l3-q45",
        "question": "In the ADM Jabalpur case, Justice H.R. Khanna",
        "options": ["Article 21 is exclusively the sole, absolute repository of the right to life.","Even in the total, terrifying absence of Article 21","The all-powerful President","The drastic emergency itself should never, under any circumstances, be declared."],
        "correctAnswerIndex": 1,
        "explanation": "Justice Khanna immortally argued that the right to life is not a"
    },
    {
        "id": "ch44-l3-q46",
        "question": "Under Article 359, the President can suspend the right to move any court for the enforcement of",
        "options": ["No, the Supreme Court","Yes. The suspension of the right to enforce specifically named fundamental rights structurally paralyzes Article 32 regarding those named rights, acting as an impenetrable procedural barrier."],
        "correctAnswerIndex": 1,
        "explanation": "The mechanism is deviously powerful: Article 359 does not delete the substantive right (like Speech/Religion), but by suspending the"
    },
    {
        "id": "ch44-l3-q47",
        "question": "During an aggressive National Emergency, the invisible",
        "options": ["Is strictly limited to the domestic borders of the constituent States.","Extends forcefully to the entire sovereign territory of India, utterly regardless of the rigid legislative divisions encoded in the Seventh Schedule."],
        "correctAnswerIndex": 1,
        "explanation": "A National Emergency acts as a federal bulldozer. The Union"
    },
    {
        "id": "ch44-l3-q48",
        "question": "If an antagonistic State Government blatantly and willfully refuses to follow a lawful executive direction issued by the Union during a raging National Emergency, what is the most constitutionally direct, severe consequence?",
        "options": ["The defiant Chief Minister is immediately criminally arrested for treason.","Article 365 can be instantaneously invoked, creating an unassailable presumption that the State","s Rule (Article 356).","The rebellious State","The Union Cabinet forcefully occupies the State"],
        "correctAnswerIndex": 1,
        "explanation": "Article 365 is the ultimate Central"
    },
    {
        "id": "ch44-l3-q49",
        "question": "The critical",
        "options": ["Exclusively by the President acting on prime ministerial advice.","The Speaker of the Lok Sabha (if the resilient House is actively in session) or the President (if the House is unfortunately prorogued/not in session).","The Prime Minister holding the majority.","The Leader of the Opposition holding shadows."],
        "correctAnswerIndex": 1,
        "explanation": "To bypass executive stonewalling, the 44th Amendment created an independent trigger mechanism. If the Parliament is running, the Speaker is bound to summon the special sitting. If Parliament is shut, the rebellious MPs bypass the PM and petition the President directly, who is bound to summon it within 14 days."
    },
    {
        "id": "ch44-l3-q50",
        "question": "Does the devastating",
        "options": ["Yes, its collective life is arbitrarily extended by 1 year identical to the Lok Sabha.","No, it is an indestructible, permanent body; its members"],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha is designed as the"
    },
    {
        "id": "ch44-l3-q51",
        "question": "The rigorous",
        "options": ["An absolute 2/3rd of the total membership of the House.","An absolute majority of the total membership (more than 50%) PLUS a 2/3rd super-majority of the members actually present and voting.","A simple majority of both houses jammed together in a joint sitting.","An absolute majority of the Lok Sabha entirely ignoring the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "This dual-lock threshold is extremely difficult to achieve. It prevents a government from exploiting a sparsely attended parliament. The ruling party must physically haul in at least 50% of its base, AND simultaneously secure a 2/3rd super-majority of all members sitting in the chamber."
    },
    {
        "id": "ch44-l3-q52",
        "question": "Which specific Article acts as the chilling",
        "options": ["Article 352.","Article 358.","Article 359.","Article 355."],
        "correctAnswerIndex": 1,
        "explanation": "Article 358 is an automatic guillotine. The exact second a National Emergency is declared citing"
    },
    {
        "id": "ch44-l3-q53",
        "question": "In which tumultuous year was the highly subjective, controversial ground of",
        "options": ["1962.","1971.","1975.","1991."],
        "correctAnswerIndex": 2,
        "explanation": "Indira Gandhi controversially cited the vague"
    },
    {
        "id": "ch44-l3-q54",
        "question": "Can the all-powerful Union Parliament ruthlessly pass a terrifying",
        "options": ["Yes, the emergency overrides all peacetime criminal jurisprudence.","No. Because the 44th Amendment rendered Article 20 categorically non-suspendable, the constitutional shield explicitly banning retrospective criminal convictions remains utterly impenetrable, even during war."],
        "correctAnswerIndex": 1,
        "explanation": "Article 20 contains the absolute prohibition against"
    },
    {
        "id": "ch44-l3-q55",
        "question": "Which specific constitutional Article deals with the catastrophic",
        "options": ["Article 352.","Article 356.","Article 360.","Article 365."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356, infamously known as"
    },
    {
        "id": "ch44-l3-q56",
        "question": "Is the prestigious",
        "options": ["Yes, as all fiscal matters are forcibly centralized.","No, the institution survives intact, but its critical revenue-sharing recommendations can be drastically modified or halted by a decisive President"],
        "correctAnswerIndex": 1,
        "explanation": "The Finance Commission as a constitutional body is not erased. However, the normal peacetime formula transferring wealth to the states is temporarily circumvented; the President assumes extraordinary fiscal powers under Article 354 to hoard Union resources for the crisis effort."
    },
    {
        "id": "ch44-l3-q57",
        "question": "The notorious 38th Amendment Act (1975) shockingly allowed the President to issue",
        "options": ["Still menacingly in force in the constitutional text today.","Gloriously repealed and annihilated by the 44th Amendment in 1978."],
        "correctAnswerIndex": 0,
        "explanation": "Fascinatingly, while the 44th Amendment rolled back many horrors of the 38th/42nd Amendments, this specific provision survived. The President still legally possesses the constitutional capability to declare distinct emergencies (e.g., one for war, another overlapping one for armed rebellion in a different zone)."
    },
    {
        "id": "ch44-l3-q58",
        "question": "Which landmark judicial case courageously established the immortal doctrine that",
        "options": ["The massive Kesavananda Bharati case.","The expansive Justice K.S. Puttaswamy case (Right to Privacy).","The Minerva Mills case.","The Waman Rao case."],
        "correctAnswerIndex": 1,
        "explanation": "In 2017, the legendary nine-judge bench in the Puttaswamy case formally and expressly overruled the disastrous ADM Jabalpur judgment. It declared that life and personal liberty are primordial, inalienable human rights that exist entirely independent of the written text of Article 21."
    },
    {
        "id": "ch44-l3-q59",
        "question": "If the President dictates a terrifying order under Article 359 suspending right enforcement, but it is blatantly not formally laid before Parliament for scrutiny:",
        "options": ["The order is instantaneously constitutionally void.","The order technically remains chillingly valid, but the Union Government is guilty of a grave procedural irregularity and political breach of faith.","The President faces immediate, mandatory impeachment.","The order mathematically ceases to violently operate after an exact 30-day window."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 359 commands that the order"
    },
    {
        "id": "ch44-l3-q60",
        "question": "How many consecutive years can a state",
        "options": ["National Emergency has a 3-year cap; President","President","s assembly extensions possess zero constitutional maximum theoretical limit.","Both possess a strict 1-year threshold.","Neither process affects state assemblies."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 356 (President"
    },
    {
        "id": "ch44-l3-q61",
        "question": "The Supreme Court in the",
        "options": ["The Court expanded the UPSC","The Court","s constitutional mandate, which covers recruitment but NOT transfers, by creating a parallel institutional mechanism","The Court declared the UPSC responsible for all transfers","The judgment was overturned"],
        "correctAnswerIndex": 1,
        "explanation": "The TSR Subramanian case highlighted a fundamental gap: while the UPSC ensures merit in recruitment, there is no equivalent constitutional body protecting civil servants from politically-motivated transfers. The Court"
    },
    {
        "id": "ch44-l3-q62",
        "question": "Assertion (A): The UPSC",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The UPSC is advisory because making its recommendations binding would create a constitutional anomaly: an unelected body would have final authority over civil servants, undermining the principle of executive accountability to Parliament. The Government must retain the power to deviate (with accountability through the Article 323 memorandum)."
    },
    {
        "id": "ch44-l3-q63",
        "question": "The",
        "options": ["No, lateral entry is exempt from all constitutional provisions","Yes, Article 320(3) mandates UPSC consultation on methods of recruitment to civil services, and bypassing the UPSC would violate this constitutional requirement — unless the posts are specifically exempted under Article 320(4) regulations","Only if the Supreme Court specifically orders it","The Constitution does not cover such appointments"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(3)(a) requires the Government to consult the UPSC on"
    },
    {
        "id": "ch44-l3-q64",
        "question": "If the Government consistently ignores the UPSC",
        "options": ["The UPSC can approach the Supreme Court under Article 32","Parliament can debate the memorandum, question the Government, and potentially censure it — but there is no specific constitutional provision for judicial enforcement of UPSC recommendations","The President can dismiss the Government","The affected officers can petition the UPSC for relief"],
        "correctAnswerIndex": 1,
        "explanation": "The remedy is parliamentary, not judicial. The Annual Report + memorandum mechanism creates political accountability through parliamentary debate. However, since UPSC advice is advisory, there is no legal mechanism to compel compliance. This structural weakness has been highlighted by multiple reform commissions."
    },
    {
        "id": "ch44-l3-q65",
        "question": "The concept of",
        "options": ["The President","The Government","s","(number of members and their background) through appointments, potentially stacking the Commission with pliant members","The Parliament","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "While removal is protected, the appointment process itself is a vulnerability: the President (on Government"
    },
    {
        "id": "ch44-l3-q66",
        "question": "Compare the post-retirement bar for the UPSC Chairman (Article 319) with that of the CEC (no constitutional bar). Which of the following correctly identifies the constitutional implications?",
        "options": ["Both are equally independent because both have charged expenditure","The UPSC Chairman has STRONGER post-retirement independence than the CEC, because Article 319 bars them from further government employment — while the CEC, despite having a more powerful mandate, lacks this constitutional bar, creating a potential incentive for the CEC to seek post-retirement patronage","The CEC is more independent because the CEC has a larger staff","Neither has any post-retirement bar"],
        "correctAnswerIndex": 1,
        "explanation": "This is a nuanced comparison: the UPSC Chairman has a stricter post-retirement bar (Article 319 — no further government employment), while the CEC has no such bar. This apparent inconsistency means the CEC — arguably the more powerful constitutional functionary — has weaker post-retirement independence safeguards."
    },
    {
        "id": "ch44-l3-q67",
        "question": "The",
        "options": ["The UPSC","The Administrative Tribunal (under Article 323A, Central Administrative Tribunal) or the courts, NOT the UPSC — because reservation is an executive and legislative policy matter excluded from the UPSC","The Finance Commission","The National Commission for Scheduled Castes"],
        "correctAnswerIndex": 1,
        "explanation": "Since Article 320(4) explicitly excludes reservation matters from UPSC consultation, the UPSC has no jurisdiction here. Challenges to reservation in recruitment go to the Central Administrative Tribunal (under Article 323A), with appeals to the High Court and Supreme Court."
    },
    {
        "id": "ch44-l3-q68",
        "question": "Article 323 requires the President to lay the UPSC",
        "options": ["No, the memorandum is only required when advice is rejected","Yes, the memorandum is always required. If there are no deviations, the memorandum would simply state that all UPSC recommendations were accepted. The annual report itself is mandatory regardless.","Only if Parliament requests it","Only during budget sessions"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323 mandates the annual report be laid before Parliament every year, regardless of whether deviations exist. The memorandum is a companion document. If no deviations exist, the memorandum simply confirms full compliance. This annual transparency mechanism is mandatory."
    },
    {
        "id": "ch44-l3-q69",
        "question": "The",
        "options": ["The UPSC gained more powers","It had no effect on the UPSC, as the UPSC is advisory (not adjudicatory). However, the tribunals handle matters where UPSC recommendations are disputed — such as challenges to recruitment results, seniority, and disciplinary orders — effectively creating a parallel system for service dispute resolution.","The UPSC was merged with the tribunals","The UPSC became subordinate to the tribunals"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC is advisory; tribunals are adjudicatory. They operate in complementary domains. However, tribunal decisions on recruitment challenges can effectively override UPSC recruitment recommendations, creating a dynamic tension between the two institutions."
    },
    {
        "id": "ch44-l3-q70",
        "question": "If the President appoints a UPSC member who does NOT satisfy the",
        "options": ["The appointment would stand because Article 316(1) uses the phrase","which is directory (guiding) rather than mandatory, and the Supreme Court has held that this does not invalidate appointments","The appointment would be automatically void","The UPSC Chairman would have to resign","Parliament would pass a resolution annulling it"],
        "correctAnswerIndex": 0,
        "explanation": "The phrase"
    },
    {
        "id": "ch44-l3-q71",
        "question": "The UPSC",
        "options": ["The UPSC lacks a constitutional provision barring variation of service conditions to their disadvantage after appointment (unlike the CEC under Article 324(5))","The UPSC lacks a fixed tenure","The UPSC members can be transferred","The UPSC has no charged expenditure"],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the CEC (whose conditions of service cannot be varied to their disadvantage after appointment — Article 324(5)), the Constitution does not explicitly provide an equivalent protection for UPSC members. Their conditions are determined by the President under Article 318, creating a theoretical vulnerability."
    },
    {
        "id": "ch44-l3-q72",
        "question": "Assertion (A): The UPSC only recommends names for recruitment; it does not make the actual appointment. Reason (R): Article 320 separates the",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "This separation is fundamental: the UPSC recommends (Art 320), but the appointing authority (President, acting on Government"
    },
    {
        "id": "ch44-l3-q73",
        "question": "The",
        "options": ["It replaces the UPSC entirely","Mission Karmayogi is a post-recruitment capacity-building initiative focused on continuous learning and competency assessment, which does NOT overlap with the UPSC","The UPSC designed Mission Karmayogi","Mission Karmayogi cancels all UPSC examinations"],
        "correctAnswerIndex": 1,
        "explanation": "Mission Karmayogi (iGOT-Karmayogi platform) focuses on in-service training and competency development, not recruitment. However, the initiative could eventually influence UPSC examination design if the government requires the CSE to test competencies aligned with Mission Karmayogi frameworks."
    },
    {
        "id": "ch44-l3-q74",
        "question": "The phrase",
        "options": ["The exact same","status with no additional powers","An elevated position — the Chairman presides over meetings, assigns work, and represents the Commission externally, but does NOT have a casting vote or power to override other members on substantive matters. The Chairman also has the exclusive post-retirement bar (no further government employment) that other members do not have.","Absolute power over all UPSC members","No special position whatsoever"],
        "correctAnswerIndex": 1,
        "explanation": "The UPSC Chairman has an administrative primus inter pares role (chairing meetings, representing the Commission), but not a substantive veto. The key distinction is the stricter post-retirement bar: the Chairman is ineligible for ALL further government employment (Art 319), while a member is eligible for appointment as UPSC Chairman or SPSC Chairman."
    },
    {
        "id": "ch44-l3-q75",
        "question": "If a State Government requests the UPSC to conduct recruitment for a state service (under Article 315(4)), and the UPSC conducts the examination, are the costs borne by the State or the Centre?",
        "options": ["Always by the Centre","The expenses are reimbursed by the State Government that requested the UPSC","s charged expenditure (Article 322) covers only its regular functions, not additional services requested by states","By the UPSC","Shared equally between Centre and State"],
        "correctAnswerIndex": 1,
        "explanation": "When the UPSC serves a state"
    },
    {
        "id": "ch44-l3-q76",
        "question": "The 2024",
        "options": ["Article 14 (Right to Equality)","Article 16(4) and 16(4A) — which provide that the State can make provisions for reservation in appointments for backward classes and promotion for SC/STs","Article 280 (Finance Commission)","Article 312 (All India Services)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 16(4) empowers the State to make provisions for reservation in appointments for backward classes not adequately represented. Article 16(4A) extends reservation to promotions for SC/STs. Any government recruitment, including lateral entry, must comply with these provisions unless specifically exempted."
    },
    {
        "id": "ch44-l3-q77",
        "question": "The UPSC",
        "options": ["Merit cannot be defined solely by examination performance — Articles 15(4), 15(5), and 16(4) allow for reservation as a constitutionally mandated tool for inclusive merit, and the UPSC must accommodate this","Only UPSC exams can define merit","Reservation violates Article 320","The UPSC can set its own reservation policy"],
        "correctAnswerIndex": 0,
        "explanation": "In Ashok Kumar Thakur, the SC upheld OBC reservation in higher educational institutions and clarified that"
    },
    {
        "id": "ch44-l3-q78",
        "question": "Assertion (A): The Constitution does not prescribe an upper limit on the number of UPSC members. Reason (R): This flexibility allows the President to adjust the Commission",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution deliberately does not fix the UPSC"
    },
    {
        "id": "ch44-l3-q79",
        "question": "If the UPSC is asked to conduct an examination for a service that was created by a state for local body positions, and the request comes through Article 315(4), can the UPSC refuse?",
        "options": ["Yes, the UPSC can refuse any request","The decision to serve a state under Article 315(4) requires the President","Only if the UPSC Chairman personally objects","The UPSC can refuse if it is too busy"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 315(4), the flow is: Governor requests → President approves → UPSC serves. Once the President approves, the UPSC is constitutionally obliged to serve. The UPSC"
    },
    {
        "id": "ch44-l3-q80",
        "question": "The",
        "options": ["All candidates must score equally","The recruitment process must balance the principle of merit (Article 16(1) — equality of opportunity) with the principle of representation (Article 16(4) — reservation), achieving a proportionate balance that fulfils both constitutional mandates","The UPSC must set equal cut-offs for all categories","Proportionate representation of all states in the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Proportionate Equality requires that the UPSC"
    },
    {
        "id": "ch44-l3-q81",
        "question": "The Administrative Reforms Commission (1st ARC, 1966) recommended replacing the UPSC examination system with a",
        "options": ["No constitutional change","A constitutional amendment to Articles 315 and 320, since the UPSC","Only a parliamentary law","An executive order"],
        "correctAnswerIndex": 1,
        "explanation": "Since the UPSC"
    },
    {
        "id": "ch44-l3-q82",
        "question": "The UPSC",
        "options": ["The UPSC conducts all promotions directly","Promotions are now governed primarily by cadre rules, DoPT guidelines, and the recommendations of Departmental Promotion Committees (DPCs), with the UPSC being consulted only in exceptional cases — reducing its advisory role in career progression to near-insignificance","The Supreme Court abolished this function","Promotions are handled by the Cabinet Secretary alone"],
        "correctAnswerIndex": 1,
        "explanation": "While Article 320(3)(a) mandates UPSC consultation on promotion principles, in practice, DPCs and cadre-specific rules handle most promotions. The UPSC is consulted only for exceptional or contested cases, significantly diminishing its role in career progression decisions."
    },
    {
        "id": "ch44-l3-q83",
        "question": "Can a UPSC member be suspended by the President pending the Supreme Court inquiry under Article 317?",
        "options": ["No, there is no provision for suspension","Yes, Article 317(2) allows the President to suspend a UPSC member pending the reference to, and receipt of the report from, the Supreme Court on the question of removal","Only with Parliament","Only the CJI can suspend a UPSC member"],
        "correctAnswerIndex": 1,
        "explanation": "Article 317(2) specifically provides that the President can suspend a UPSC member against whom a reference has been made to the Supreme Court under Article 317(1) until the SC"
    },
    {
        "id": "ch44-l3-q84",
        "question": "The",
        "options": ["It would require amending Article 320","No constitutional change would be needed — the exam format is an operational matter within the UPSC","s regulatory power under Article 320(3), not a constitutional provision. The UPSC","It would require amending Article 315","Parliament would need to pass a new law"],
        "correctAnswerIndex": 1,
        "explanation": "The examination format/subjects are operational matters, not prescribed by the Constitution. The UPSC has the discretion (subject to Government regulations) to design the exam as it sees fit. Constitutional provisions only mandate that the UPSC"
    },
    {
        "id": "ch44-l3-q85",
        "question": "Compare Articles 317 (removal of UPSC members) and Article 124(4) (removal of SC Judges). The key structural difference in the removal process is:",
        "options": ["Both are identical processes","UPSC members are removed by the President AFTER a Supreme Court inquiry (executive act on judicial recommendation), while SC Judges are removed by the President AFTER an address by BOTH Houses of Parliament (executive act on parliamentary authority). Thus the UPSC process is executive-judicial, while the SC Judge process is parliamentary.","UPSC members can never be removed","SC Judges are removed by the President directly"],
        "correctAnswerIndex": 1,
        "explanation": "This comparative analysis is crucial for UPSC mains: the UPSC removal process (Art 317) is a President → SC inquiry → President removal chain (executive-judicial). The SC Judge removal (Art 124/217) is Parliament address → President removes (parliamentary-executive). The UPSC process is simpler and does not require parliamentary involvement."
    },
    {
        "id": "ch44-l3-q86",
        "question": "Assertion (A): The UPSC has no role in the appointment of the Cabinet Secretary or the Foreign Secretary. Reason (R): These are political appointments made by the Appointments Committee of the Cabinet (ACC) from among the senior-most IAS officers, and the UPSC",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The UPSC"
    },
    {
        "id": "ch44-l3-q87",
        "question": "The",
        "options": ["No, regulations made by the President are immune from judicial review","Yes — while Article 318 vests the President with regulation-making power, these regulations must comply with Articles 14, 16, and other Fundamental Rights. They are subject to judicial review by the Supreme Court and High Courts.","Only the UPSC Chairman can challenge them","They can only be challenged in the Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "No subordinate legislation (including Presidential regulations) is immune from judicial review. Regulations under Article 318 must be consistent with Fundamental Rights and the Constitution. Courts can strike down any regulation that violates constitutional provisions."
    },
    {
        "id": "ch44-l3-q88",
        "question": "The",
        "options": ["The UPSC must be consulted","No consultation is needed — discharge during probation is an executive act by the Government, as probationers do not have the full protection of Article 311 (which applies to confirmed civil servants). However, the principles of natural justice must still be followed.","Only the Cabinet Secretary","The Supreme Court must approve"],
        "correctAnswerIndex": 1,
        "explanation": "Probationers are in a peculiar position: they do not have the full protection of Article 311 (which requires inquiry for dismissal/removal of confirmed servants). Discharge during probation is treated as termination of a contract, not dismissal. The UPSC is not consulted for probation terminations."
    },
    {
        "id": "ch44-l3-q89",
        "question": "If the Government proposes to create a new",
        "options": ["Have no role at all","Be responsible for conducting the recruitment examination for the new service, as its mandate under Article 320 covers ALL services under the Union and All India Services — making it the natural examination body for any new AIS","Oppose the creation","Be replaced by a new specialist body"],
        "correctAnswerIndex": 1,
        "explanation": "If an All India Judicial Service (AIJS) is created under Article 312, the UPSC would logically conduct its recruitment, as it does for IAS, IPS, and IFS. However, the specific recruitment mechanism (UPSC vs. a new judicial body) would be determined by the enabling legislation passed by Parliament."
    },
    {
        "id": "ch44-l3-q90",
        "question": "The",
        "options": ["A fundamental rights enforcement body","An advisory constitutional body that safeguards the merit principle in civil services recruitment and provides non-binding consultation on disciplinary and service matters — positioned as an independent buffer between political patronage and bureaucratic selection, but constrained by its advisory-only nature and the expanding jurisdiction of parallel institutions (CVC, CAT, SSC, NRA)","A legislative body that creates recruitment rules","A judicial body that adjudicates service disputes"],
        "correctAnswerIndex": 1,
        "explanation": "This comprehensive description captures the UPSC"
    }
];

export const CHAPTER_44_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
