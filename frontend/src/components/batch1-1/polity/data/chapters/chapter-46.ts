import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch46-l1-q1",
        "question": "Article 360 empowers the President to proclaim a Financial Emergency if he is satisfied that a situation has arisen whereby the financial stability or ______ of India or any part of its territory is threatened.",
        "options": ["Political stability.","Credit.","Military strength.","Foreign reserves."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 specifically mentions that a Financial Emergency can be declared if the"
    },
    {
        "id": "ch46-l1-q2",
        "question": "The \\",
        "options": ["True (following the 44th Amendment logic).","False."],
        "correctAnswerIndex": 0,
        "explanation": "The 44th Amendment Act (1978) restored judicial review for Financial Emergencies, implying that the President"
    },
    {
        "id": "ch46-l1-q3",
        "question": "The 38th Amendment (1975) originally made the President",
        "options": ["42nd Amendment.","44th Amendment.","52nd Amendment.","91st Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment Act of 1978 deleted the provision inserted by the 38th Amendment that made the President"
    },
    {
        "id": "ch46-l1-q4",
        "question": "A proclamation declaring a Financial Emergency must be approved by both Houses of Parliament within ______ from the date of its issue.",
        "options": ["One month.","Two months.","Six months.","One year."],
        "correctAnswerIndex": 1,
        "explanation": "Like President"
    },
    {
        "id": "ch46-l1-q5",
        "question": "If the Lok Sabha is dissolved during this two-month period without approving the proclamation, it survives for ______ days from the first sitting of the newly elected Lok Sabha.",
        "options": ["15 days.","30 days.","60 days.","90 days."],
        "correctAnswerIndex": 1,
        "explanation": "If the Lok Sabha dissolves before approving the proclamation, the emergency survives until 30 days from the first sitting of the newly elected Lok Sabha, provided the Rajya Sabha has already approved it."
    },
    {
        "id": "ch46-l1-q6",
        "question": "Once approved by both Houses of Parliament, how long does the Financial Emergency continue?",
        "options": ["6 months.","1 year.","3 years.","Indefinitely (until it is revoked by the President)."],
        "correctAnswerIndex": 3,
        "explanation": "A unique feature of the Financial Emergency is that once approved by Parliament, it continues indefinitely till it is revoked. There is no maximum period prescribed."
    },
    {
        "id": "ch46-l1-q7",
        "question": "Is there a requirement for repeated parliamentary approval to extend a Financial Emergency (like in Art 352 or 356)?",
        "options": ["Yes, every 6 months.","No."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike National Emergency and President"
    },
    {
        "id": "ch46-l1-q8",
        "question": "A resolution approving the proclamation of a Financial Emergency can be passed by either House of Parliament only by a ______.",
        "options": ["Simple majority.","Special majority.","Absolute majority.","2/3rd majority."],
        "correctAnswerIndex": 0,
        "explanation": "Like President"
    },
    {
        "id": "ch46-l1-q9",
        "question": "A proclamation of Financial Emergency can be revoked by the President at any time by a subsequent proclamation.",
        "options": ["True.","False."],
        "correctAnswerIndex": 0,
        "explanation": "The President can revoke the proclamation of Financial Emergency at any time by issuing a subsequent proclamation."
    },
    {
        "id": "ch46-l1-q10",
        "question": "Does the revocation of a Financial Emergency require parliamentary approval?",
        "options": ["Yes.","No."],
        "correctAnswerIndex": 1,
        "explanation": "A proclamation revoking a Financial Emergency does not require any approval from the Parliament."
    },
    {
        "id": "ch46-l1-q11",
        "question": "During a Financial Emergency, the executive authority of the Union extends to giving directions to any State to observe such canons of ______ as may be specified.",
        "options": ["Moral propriety.","Financial propriety.","Legal propriety.","Administrative propriety."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 360, the Union can direct states to observe specified"
    },
    {
        "id": "ch46-l1-q12",
        "question": "The President can issue directions for the reduction of salaries and allowances of all or any class of persons serving in connection with the affairs of the ______.",
        "options": ["Union only.","State only.","Both Union and State.","Private sector."],
        "correctAnswerIndex": 2,
        "explanation": "The President can direct the reduction of salaries and allowances for all or any class of persons serving the Union as well as those serving the States."
    },
    {
        "id": "ch46-l1-q13",
        "question": "Can the salaries and allowances of the Judges of the Supreme Court and High Courts be reduced during a Financial Emergency?",
        "options": ["No, they are protected by the Constitution.","Yes (Article 360 specifically allows this)."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 explicitly empowers the President to issue directions for the reduction of salaries and allowances of the Judges of the Supreme Court and the High Courts."
    },
    {
        "id": "ch46-l1-q14",
        "question": "The President can direct that all Money Bills or other Financial Bills be reserved for his consideration after they are passed by the ______.",
        "options": ["Parliament.","Legislature of the State.","Zonal Council.","GST Council."],
        "correctAnswerIndex": 1,
        "explanation": "During a Financial Emergency, the President can direct the states to reserve all money bills or other financial bills for his consideration after they are passed by the State Legislature."
    },
    {
        "id": "ch46-l1-q15",
        "question": "During a Financial Emergency, the Centre acquires full control over the ______ of the States.",
        "options": ["Land records.","Police.","Financial matters.","Education."],
        "correctAnswerIndex": 2,
        "explanation": "The primary effect of Article 360 is that the Union executive acquires full control over the financial matters of the states, severely restricting their financial autonomy."
    },
    {
        "id": "ch46-l1-q16",
        "question": "In which year did India face a severe financial crisis but did NOT declare a Financial Emergency?",
        "options": ["1962.","1975.","1991.","2008."],
        "correctAnswerIndex": 2,
        "explanation": "Despite the severe balance of payments crisis in 1991, India handled the situation through economic reforms and did not declare a Financial Emergency."
    },
    {
        "id": "ch46-l1-q17",
        "question": "Which type of emergency has never been declared in India?",
        "options": ["National Emergency.","President’s Rule.","Financial Emergency.","None of the above."],
        "correctAnswerIndex": 2,
        "explanation": "A Financial Emergency under Article 360 is the only type of constitutional emergency that has never been declared in India"
    },
    {
        "id": "ch46-l1-q18",
        "question": "The provision for Financial Emergency is inspired by the National Recovery Act of ______.",
        "options": ["UK.","USA.","Ireland.","Canada."],
        "correctAnswerIndex": 1,
        "explanation": "The concept of Financial Emergency was inspired by the National Recovery Act of the USA, enacted during the Great Depression to manage serious financial crises."
    },
    {
        "id": "ch46-l1-q19",
        "question": "While a Financial Emergency is in operation, the Union can direct a state to reduce the salaries of persons serving the state. Does this include the Governor?",
        "options": ["Yes.","No (Governor’s emoluments cannot be diminished during his term)."],
        "correctAnswerIndex": 1,
        "explanation": "Article 158(4) provides a specific constitutional guarantee that the emoluments and allowances of the Governor shall not be diminished during his term of office, and this protection holds even during a Financial Emergency."
    },
    {
        "id": "ch46-l1-q20",
        "question": "Can a Financial Emergency be declared for only a \\",
        "options": ["Yes (Article 360 says \\",").","No."],
        "correctAnswerIndex": 0,
        "explanation": "Article 360 explicitly empowers the President to proclaim a Financial Emergency if the financial stability or credit of India"
    },
    {
        "id": "ch46-l1-q21",
        "question": "Does the \\",
        "options": ["Yes.","No."],
        "correctAnswerIndex": 0,
        "explanation": "A National Emergency (Art 352) requires a special majority in both houses, while a Financial Emergency (Art 360) requires only a simple majority, making it procedurally easier to approve in Parliament."
    },
    {
        "id": "ch46-l1-q22",
        "question": "In a National Emergency, Fundamental Rights are affected. In a Financial Emergency, ______ are affected.",
        "options": ["Only salaries and financial procedures.","Religious rights.","Right to property (Articles 300A).","Freedom of speech."],
        "correctAnswerIndex": 0,
        "explanation": "A Financial Emergency does not suspend or affect Fundamental Rights. Its impact is strictly limited to financial matters, center-state financial relations, salaries, and money bills."
    },
    {
        "id": "ch46-l1-q23",
        "question": "Is the \\",
        "options": ["Yes.","No (it continues to function, but its financial powers are restricted)."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike President"
    },
    {
        "id": "ch46-l1-q24",
        "question": "Approval time for Art 352 is ______; for Art 360 is ______.",
        "options": ["1 month / 2 months.","2 months / 1 month.","1 month / 1 month.","6 months / 6 months."],
        "correctAnswerIndex": 0,
        "explanation": "A National Emergency (Art 352) must be approved within 1 month, whereas a Financial Emergency (Art 360) has a 2-month approval window (similar to President"
    },
    {
        "id": "ch46-l1-q25",
        "question": "Maximum period for Art 356 is ______; for Art 360 is ______.",
        "options": ["3 years / Indefinite.","1 year / 3 years.","Indefinite / 3 years.","3 years / 1 year."],
        "correctAnswerIndex": 0,
        "explanation": "President"
    },
    {
        "id": "ch46-l1-q26",
        "question": "Which Article is described as a \\",
        "options": ["Article 280.","Article 360.","Article 356.","Article 265."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 inherently poses a threat to the financial autonomy of the states because it empowers the Union to take full control of state finances, direct salary cuts, and reserve state money bills."
    },
    {
        "id": "ch46-l1-q27",
        "question": "During a Financial Emergency, the Union can direct the state to observe \\",
        "options": ["President (Executive).","RBI.","CAG.","Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution leaves the specification of"
    },
    {
        "id": "ch46-l1-q28",
        "question": "Does a Financial Emergency lead to the suspension of the \\",
        "options": ["Yes.","No."],
        "correctAnswerIndex": 1,
        "explanation": "A Financial Emergency does not abolish or formally suspend the Finance Commission (Article 280), although the President and Parliament gain overriding powers regarding financial allocations during the emergency."
    },
    {
        "id": "ch46-l1-q29",
        "question": "Which specific Article deals with the \\",
        "options": ["352.","356.","360.","365."],
        "correctAnswerIndex": 2,
        "explanation": "Article 360 of the Indian Constitution contains the precise provisions relating to the declaration and administration of a Financial Emergency."
    },
    {
        "id": "ch46-l1-q30",
        "question": "H.N. Kunzru, a member of the Constituent Assembly, was a critic of this provision because he felt it would:",
        "options": ["Make the President a dictator.","Seriously affect the financial autonomy of the States.","Lead to the abolition of the Supreme Court.","Cause inflation."],
        "correctAnswerIndex": 1,
        "explanation": "During the Constituent Assembly debates, critics like H.N. Kunzru strongly opposed Article 360, arguing that it would practically destroy the financial autonomy of the states and centralize excessive fiscal power."
    },
    {
        "id": "ch46-l1-q31",
        "question": "Unlike Articles 352 and 356, Article 360 does not mention any \\",
        "options": ["It is the most dangerous emergency.","It does not require periodic legislative review because financial stability is seen as a long-term goal.","The President can never revoke it.","It is a permanent amendment to the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "Because a financial crisis might take years of structural reform to resolve, the Constitution deliberately excludes a maximum time limit or a requirement for periodic six-month renewals. Once Parliament initially approves it, the emergency runs until the Executive decides the crisis is over."
    },
    {
        "id": "ch46-l1-q32",
        "question": "A resolution for the approval of a Financial Emergency requires only a \\",
        "options": ["It is the same.","It is easier; Article 352 requires a Special Majority (as per the 44th Amendment).","It is harder; Article 352 requires only a Simple Majority.","Article 360 requires a 3/4th majority."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent political abuse of emergency powers, the 44th Amendment mandated a tough"
    },
    {
        "id": "ch46-l1-q33",
        "question": "If the Lok Sabha is dissolved when the Financial Emergency is in operation (after it was approved):",
        "options": ["The proclamation lapses immediately.","The proclamation continues to be valid; its \\","nature is not affected by the dissolution of the House.","The Rajya Sabha must re-approve it every month.","The President must revoke it."],
        "correctAnswerIndex": 1,
        "explanation": "Once a Financial Emergency is approved by both houses, it requires no further parliamentary renewals. Therefore, subsequent dissolutions of the Lok Sabha have no legal effect on the continuation of the emergency; it remains valid indefinitely."
    },
    {
        "id": "ch46-l1-q34",
        "question": "The Union can direct States to observe \\",
        "options": ["Spending more on infrastructure.","Strict adherence to budget ceilings, reduction of wasteful expenditure, and following Central accounting norms.","Printing more currency.","Paying off private debts."],
        "correctAnswerIndex": 1,
        "explanation": "While undefined in the Constitution,"
    },
    {
        "id": "ch46-l1-q35",
        "question": "Under Article 360, the President can direct the reservation of \\",
        "options": ["Gives the Centre a \\","over the State","Abolishes the State","Makes the Governor the Finance Minister.","Transfers the State"],
        "correctAnswerIndex": 0,
        "explanation": "Reserving money bills strips the state legislature of its final say over its own budget. The President (meaning the Union Cabinet) gains the absolute power to veto or modify the state"
    },
    {
        "id": "ch46-l1-q36",
        "question": "Article 360(4) allows for the reduction of salaries of \\",
        "options": ["Article 14.","The constitutional guarantee that judges","The Basic Structure doctrine.","The 44th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "Normally, Articles 125 and 221 strictly protect the salaries of Supreme Court and High Court judges against being cut during their tenure (to maintain independence). Article 360(4)(b) explicitly overrides this protection in times of massive national economic collapse."
    },
    {
        "id": "ch46-l1-q37",
        "question": "Why is the power to reduce judges",
        "options": ["To punish the judiciary.","To ensure that in a grave economic crisis, \\","is made by all constitutional authorities.","Because judges are responsible for financial crises.","It was an oversight by the drafting committee."],
        "correctAnswerIndex": 1,
        "explanation": "The framers designed Article 360 to manage catastrophic fiscal insolvency. The logic was that if the state cannot afford to pay its lowest employees, high constitutional functionaries (like judges) must also share the burden of deep austerity cuts."
    },
    {
        "id": "ch46-l1-q38",
        "question": "Does a Financial Emergency suspend the \\",
        "options": ["Yes.","No, but the Union executive acquires the power to dictate how the money in that fund is spent."],
        "correctAnswerIndex": 1,
        "explanation": "The state"
    },
    {
        "id": "ch46-l1-q39",
        "question": "If a State refuses to follow the \\",
        "options": ["The Centre can invoke Article 365 to impose President","The State is declared bankrupt.","The Union can stop all food supplies to that state.","The Governor is arrested."],
        "correctAnswerIndex": 0,
        "explanation": "Article 365 states that if a state fails to comply with any directions given by the Union under the Constitution (which includes Art 360 canons), the President can assume that the constitutional machinery in the state has failed, triggering Article 356."
    },
    {
        "id": "ch46-l1-q40",
        "question": "The 38th Amendment (1975) made the \\",
        "options": ["The government is spending too much.","It is proved that the proclamation was made with malafide intent or on irrelevant grounds.","The stock market crashes.","The GDP growth is above 5%."],
        "correctAnswerIndex": 1,
        "explanation": "With the shield of the 38th Amendment gone, the President’s"
    },
    {
        "id": "ch46-l1-q41",
        "question": "Which emergency has the \\",
        "options": ["National Emergency (352).","President’s Rule (356) and Financial Emergency (360).","They are all the same.","Only President"],
        "correctAnswerIndex": 1,
        "explanation": "Both Article 356 and Article 360 require only a Simple Majority for parliamentary approval and both offer a two-month window to secure it. In stark contrast, Article 352 requires a Special Majority within a tight one-month window."
    },
    {
        "id": "ch46-l1-q42",
        "question": "In a National Emergency, the Centre makes laws for the state. In a Financial Emergency, the Centre:",
        "options": ["Also makes laws for the state.","Primarily issues \\","to control the state"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Articles 352 and 356, Article 360 does not generally transfer the state"
    },
    {
        "id": "ch46-l1-q43",
        "question": "Is the \\",
        "options": ["Yes, after 1 year.","No. (This rule only applies to President"],
        "correctAnswerIndex": 1,
        "explanation": "The strict requirement tying an extension beyond one year to an Election Commission certificate (regarding the impossibility of holding elections) is exclusive to President"
    },
    {
        "id": "ch46-l1-q44",
        "question": "Article 360 is described as being \\",
        "options": ["It abolishes the States.","It allows the Union to control the most vital aspect of state autonomy—the purse."],
        "correctAnswerIndex": 1,
        "explanation": "While it doesn"
    },
    {
        "id": "ch46-l1-q45",
        "question": "Can the President reduce his own salary during a Financial Emergency?",
        "options": ["No.","Yes, as he falls under the category of \\",""],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 360(4)(a)(i), the President can direct a reduction of salaries for"
    },
    {
        "id": "ch46-l1-q46",
        "question": "The power to issue directions under Article 360 includes \\",
        "options": ["Yes (as pensions are part of allowances/emoluments of service).","No."],
        "correctAnswerIndex": 0,
        "explanation": "In constitutional and administrative law,"
    },
    {
        "id": "ch46-l1-q47",
        "question": "Which article of the Constitution is referred to as the \\",
        "options": ["Article 202 (State Budget).","Article 265 (No tax without law).","Article 246 (Division of powers).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Article 360 impacts the entire spectrum of state financial autonomy: its ability to pass its own budget (Art 202) is subjected to Central veto, its exclusive taxation powers (Art 246) are constrained by Central spending directives, undermining its fiscal independence."
    },
    {
        "id": "ch46-l1-q48",
        "question": "If the President is satisfied that the \\",
        "options": ["No, both must be threatened.","Yes (the article uses the word \\",")."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 states:"
    },
    {
        "id": "ch46-l1-q49",
        "question": "If a Financial Emergency is declared, does the \\",
        "options": ["Yes.","No, but the Union","s usual consensus-based recommendations."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 does not abolish Constitutional bodies like the GST Council (Art 279A). However, during an emergency, the binding"
    },
    {
        "id": "ch46-l1-q50",
        "question": "Can the Parliament pass a law to \\",
        "options": ["No.","Yes, by refusing to approve it within two months or by passing a resolution for its revocation."],
        "correctAnswerIndex": 1,
        "explanation": "The ultimate sovereignty remains with Parliament. It easily overrides the President"
    },
    {
        "id": "ch46-l1-q51",
        "question": "Assertion (A): India did not declare a Financial Emergency in 1991. Reason (R): Proclaiming a Financial Emergency might have sent a negative signal to global investors and affected India",
        "options": ["Both A and R are true, and R explains A.","Both A and R are true, but R does not explain A.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "During the 1991 Balance of Payments crisis, declaring Article 360 was actively considered but ultimately rejected. A formal admission of constitutional financial collapse would have drastically spooked international lenders exactly when India desperately needed emergency IMF loans."
    },
    {
        "id": "ch46-l1-q52",
        "question": "Assertion (A): The 44th Amendment Act made Article 360 less \\",
        "options": ["Both A and R are true.","A is true, but R is false (It still requires a Simple Majority).","A is false, but R is true.","Both A and R are false."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment did curtail executive dictatorship regarding Article 360 by making the President"
    },
    {
        "id": "ch46-l1-q53",
        "question": "Which emergency provides for the \\",
        "options": ["National Emergency.","President’s Rule.","Financial Emergency (no periodic approval needed)."],
        "correctAnswerIndex": 2,
        "explanation": "A Financial Emergency is uniquely stable. Unlike Arts 352 and 356, which require the government to repeatedly return to Parliament every six months to seek agonizing extensions, Art 360 continues quietly in the background indefinitely after its first approval."
    },
    {
        "id": "ch46-l1-q54",
        "question": "Does Article 360 apply to the state of Jammu & Kashmir?",
        "options": ["It didn","No, it never applies to J&K."],
        "correctAnswerIndex": 0,
        "explanation": "Historically, under the special status granted by Article 370 via the 1954 Presidential Order, Article 360 did not apply to J&K. However, since the abrogation of special status in 2019, all provisions of the Indian Constitution, including Article 360, apply fully to the UT of J&K."
    },
    {
        "id": "ch46-l1-q55",
        "question": "Can the \\",
        "options": ["No, it can only discuss it.","Yes, it has veto power."],
        "correctAnswerIndex": 0,
        "explanation": "The Inter-State Council (Article 263) is purely an advisory and consultative body aimed at cooperative federalism. It has absolutely zero legislative or constitutional veto power to stop the President from proclaiming or maintaining emergencies."
    },
    {
        "id": "ch46-l1-q56",
        "question": "Who is the \\",
        "options": ["The President himself.","The respective Legislatures (by amending the relevant salary acts)."],
        "correctAnswerIndex": 1,
        "explanation": "While the President issues the"
    },
    {
        "id": "ch46-l1-q57",
        "question": "Is a \\",
        "options": ["Yes, they can co-exist.","No, Article 352 overrides 360."],
        "correctAnswerIndex": 0,
        "explanation": "There is no constitutional bar against simultaneous emergencies. During a massive war (triggering Art 352), the nation might also simultaneously face a devastating sovereign debt default, perfectly justifying the concurrent proclamation of Art 360."
    },
    {
        "id": "ch46-l1-q58",
        "question": "Does Article 360 mention \\",
        "options": ["No.","Yes."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the original Article 352, Article 360 restricts its triggers fundamentally to the threat of"
    },
    {
        "id": "ch46-l1-q59",
        "question": "What is the \\",
        "options": ["A law passed by Parliament.","A subsequent order by the President ending the emergency."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 360(2)(a), a proclamation of Financial Emergency"
    },
    {
        "id": "ch46-l1-q60",
        "question": "If the President reduces the salaries of SC Judges, can they strike down the order?",
        "options": ["Only if the procedural requirements of Article 360 were not met.","Yes, they can do anything."],
        "correctAnswerIndex": 0,
        "explanation": "Judges cannot strike down the salary cuts merely because they dislike them, as the Constitution explicitly authorizes the cuts (Art 360(4)(b)). They could only invalidate the measure if they proved the entire underlying emergency proclamation was mala fide and legally void."
    },
    {
        "id": "ch46-l1-q61",
        "question": "In a hypothetical scenario where a State faces a severe \\",
        "options": ["No, Article 360 can only be applied to the entire country simultaneously.","Yes, as the Article explicitly includes the power to proclaim an emergency for",".","Only if the state legislature passes a resolution requesting Central intervention.","Only if the Finance Commission formally declares the state insolvent."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 is highly flexible. It empowers the President to proclaim a Financial Emergency for India as a whole or for"
    },
    {
        "id": "ch46-l1-q62",
        "question": "While the Constitution mentions \\",
        "options": ["The Directive Principles of State Policy.","A combination of the General Financial Rules (GFR) of the Government of India and the Audit Manuals of the CAG.","Specifically from the Preamble","The subjective political manifesto of the ruling party at the Centre."],
        "correctAnswerIndex": 1,
        "explanation": "In the absence of a constitutional definition,"
    },
    {
        "id": "ch46-l1-q63",
        "question": "If a Financial Emergency is in operation, does the \\",
        "options": ["Yes, the Centre gains absolute ownership of the entire divisible pool.","No. However, the Union can indirectly modify the state","Yes, but only for the duration of the parliamentary recess.","Only if the Supreme Court issues an injunction."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 doesn"
    },
    {
        "id": "ch46-l1-q64",
        "question": "The power to reduce the salaries of Supreme Court and High Court Judges under Article 360 is a profound constitutional anomaly. Which specific pillar of the \\",
        "options": ["Secularism.","Independence of the Judiciary.","The Parliamentary system.","Sovereignty of the People."],
        "correctAnswerIndex": 1,
        "explanation": "Judicial independence is often tethered to financial security (salaries cannot be varied to their disadvantage). Article 360 is the ONLY provision that allows the Executive to breach this security, making it a unique point of friction between emergency powers and judicial independence."
    },
    {
        "id": "ch46-l1-q65",
        "question": "If the President issues a direction to reduce the salaries of Supreme Court Judges during a Financial Emergency, can the affected Judges physically strike down the proclamation of Financial Emergency itself?",
        "options": ["No, the proclamation is a political question beyond judicial reach.","Yes, if they find that the","of the President was based on mala fides, irrelevant material, or that no actual threat to credit/stability existed.","No, because the 38th Amendment forbids such challenges.","Only if the Prime Minister is also included in the salary cut."],
        "correctAnswerIndex": 1,
        "explanation": "Since the 44th Amendment removed the shield of non-justiciability, the"
    },
    {
        "id": "ch46-l1-q66",
        "question": "During the global COVID-19 pandemic (2020), many legal experts argued against invoking Article 360, favoring the Disaster Management Act instead. Why is Article 360 considered a \\",
        "options": ["Because it requires a 2/3rd majority to pass.","Because it permits a permanent reduction in salaries and the overriding of state budget autonomy, which could severely damage the nation’s sovereign credit rating.","Because it leads to the immediate dissolution of the RBI.","Because it stops all international travel by law."],
        "correctAnswerIndex": 1,
        "explanation": "Declaring a Financial Emergency is a formal admission of national insolvency/instability. Unlike the Disaster Management Act which manages health crises, Article 360 signals economic collapse to global markets, potentially leading to massive capital flight and a permanent loss of financial reputation."
    },
    {
        "id": "ch46-l1-q67",
        "question": "The \\",
        "options": ["Yes, within its first session.","No. The Constitution provides no mechanism for periodic parliamentary review or re-approval for Article 360 once the initial approval is secured.","Only if the President requests it.","Only if the Rajya Sabha passes a resolution of disapproval."],
        "correctAnswerIndex": 1,
        "explanation": "This is a significant gap in the 44 th Amendment. While it introduced periodic six-month reviews for National Emergency and President"
    },
    {
        "id": "ch46-l1-q68",
        "question": "During a Financial Emergency, the President can direct that all State Money Bills be reserved for his consideration. Does this constitutionally imply that the \\",
        "options": ["Yes, the Governor becomes a rubber stamp for the President.","No. The Governor still performs his role under Article 200, but he is now constitutionally","to reserve the bill for the President instead of having the option to give assent himself.","The Governor is replaced by a Central Financial Administrator.","The State Assembly loses the power to even introduce money bills."],
        "correctAnswerIndex": 1,
        "explanation": "The procedure shifts rather than vanishes. The Governor must still receive the bill from the Assembly, but his power to grant assent is paralyzed; he must act as a conduit, sending the bill to the President for final approval as per the emergency directions."
    },
    {
        "id": "ch46-l1-q69",
        "question": "If the President refuses to give assent to a critical State Money Bill during a Financial Emergency, what constitutional remedy is available to the frustrated State Government?",
        "options": ["The State can move the Supreme Court for an order of",".","There is no constitutional remedy; the Union","financial propriety","The State can declare itself independent from the Union","The State Governor can override the President","extraordinary powers"],
        "correctAnswerIndex": 1,
        "explanation": "In an emergency under Article 360, the usual federal autonomy of the state"
    },
    {
        "id": "ch46-l1-q70",
        "question": "Assertion (A): The 44th Amendment Act (1978) deliberately did NOT raise the parliamentary approval requirement for Article 360 to a \\",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the highly political nature of National Emergency (rights suspension) or President"
    },
    {
        "id": "ch46-l1-q71",
        "question": "Assertion (A): Article 360 has never been invoked in India even during the darkest days of the 1991 crisis. Reason (R): The 1991 Balance of Payments crisis was managed via structural reforms, gold pledging, and IMF assistance, as a formal emergency would have signaled a",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The reason India avoid Article 360 is psychological and economic. A constitutional declaration of financial failure is a red flag for global finance. In 1991, India chose the path of reform (LPG) and gold-collateralized loans to maintain its"
    },
    {
        "id": "ch46-l1-q72",
        "question": "Does the proclamation of a Financial Emergency empower the Parliament to proactively legislate on subjects listed in the State List (Schedule VII)?",
        "options": ["Yes, it works exactly like Article 352.","No. Article 360 only provides for \\","To legislate on the State List, the Union would still need to additionally invoke Article 352 or 356.","Only if the Rajya Sabha passes a special resolution under Article 249.","Only after 6 months of the emergency"],
        "correctAnswerIndex": 1,
        "explanation": "This is a subtle but vital distinction. While Article 360 allows the Union to *direct* the state"
    },
    {
        "id": "ch46-l1-q73",
        "question": "Who is the final authority responsible for \\",
        "options": ["The Comptroller and Auditor General (CAG).","The Governor of the Reserve Bank of India (RBI).","The Union Finance Secretary.","No independent official; it is the subjective \\","of the President acting on the advice of the Union Cabinet."],
        "correctAnswerIndex": 3,
        "explanation": "Unlike some modern fiscal councils, the Constitution places the trigger for Article 360 entirely within the executive"
    },
    {
        "id": "ch46-l1-q74",
        "question": "Is the \\",
        "options": ["Yes, all funds are unified under the President.","No. The Contingency Fund remains at the disposal of the President as per the original constitutional scheme.","The Contingency Fund is transferred to the World Bank.","The Contingency Fund is used only to pay the salaries of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Emergency provisions don"
    },
    {
        "id": "ch46-l1-q75",
        "question": "If the President’s \\",
        "options": ["On the Union Government, to produce the material evidence of a crisis.","On the citizen or state challenging the proclamation, to prove that the President acted with malafide intent or that no relevant material existed.","On the Election Commission.","On the RBI Governor."],
        "correctAnswerIndex": 1,
        "explanation": "Under the law of evidence and the principles established in Bommai, there is a presumption of regularity for constitutional acts. Therefore, the person challenging the emergency must provide prima facie evidence of bad faith or total absence of grounds to shift the burden to the government."
    },
    {
        "id": "ch46-l1-q76",
        "question": "Is Article 360 (Financial Emergency) legally applicable to the \\",
        "options": ["No, only to States.","Yes. Since UTs are already under the direct executive power of the President/Union, the emergency mechanisms (like salary cuts and financial directions) apply to them even more seamlessly.","Only if the UT has a Legislative Assembly (like Delhi or Puducherry).","Only for UTs located on the international borders."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 covers"
    },
    {
        "id": "ch46-l1-q77",
        "question": "Which foundational constitutional principle is often described as the \\",
        "options": ["The Finance Commission’s absolute independence.","Judicial Review (as restored and clarified by the 44th Amendment/Bommai context).","The Speaker’s casting vote.","The Rajya Sabha’s permanent veto."],
        "correctAnswerIndex": 1,
        "explanation": "Because Article 360 has no built-in sunset clause (maximum period) and requires only a low simple majority, Judicial Review is the only real"
    },
    {
        "id": "ch46-l1-q78",
        "question": "The \\",
        "options": ["Force a state to move all its money into military research.","Force a state to aggressively cut its \\","schemes and re-allocate funds towards debt repayment to balance its budget.","Force the state to abolish its own High Court.","Declare the state"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 360, the Union becomes the"
    },
    {
        "id": "ch46-l1-q79",
        "question": "If the President of India is physically away on a state visit, can the \\",
        "options": ["No, only the elected President possesses this sovereign power.","Yes. When the Vice-President acts as President, he exercises all the powers and immunities of the President, including the power to proclaim emergencies under Part XVIII.","Only with the prior written consent of the Chief Justice of India.","Only if the Speaker of the Lok Sabha also signs the proclamation."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution provides that when the Vice-President discharges the functions of the President, he *is* the President for all legal and constitutional purposes, including the immense power to declare any of the three types of emergencies."
    },
    {
        "id": "ch46-l1-q80",
        "question": "Is the signature of the \\",
        "options": ["Yes, for authenticating the economic data.","No. Only the President signs the proclamation. However, as per Article 74, he can only do so upon the aid and advice of the Council of Ministers (which includes the Finance Minister).","Yes, as per the FRBM Act protocols.","No, only the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutionally, the proclamation is an act of the President. While the political decision is made by the Cabinet, the legal instrument only bears the President"
    },
    {
        "id": "ch46-l1-q81",
        "question": "Does an active Financial Emergency affect the sovereign \\",
        "options": ["No. In fact, it technically enhances the Union","Yes, it automatically freezes all international credit lines by law.","It requires the Union to get the Governor","It transfers all central borrowing power to the GST Council."],
        "correctAnswerIndex": 0,
        "explanation": "Internally, Article 360 centralizes the"
    },
    {
        "id": "ch46-l1-q82",
        "question": "In which landmark case did the Supreme Court extensively discuss the \\",
        "options": ["S.R. Bommai vs. Union of India (1994).","Kuldip Nayar vs. Union of India.","Kesavananda Bharati case.","A.K. Gopalan case."],
        "correctAnswerIndex": 0,
        "explanation": "The Bommai judgment is the"
    },
    {
        "id": "ch46-l1-q83",
        "question": "While Article 356 (President",
        "options": ["One month.","Two months.","Six months.","The window is decided by the RBI Governor."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution groups Financial Emergency with President"
    },
    {
        "id": "ch46-l1-q84",
        "question": "Can a particular State be under President’s Rule (Article 356) and simultaneously fall under the geographic scope of a Financial Emergency (Article 360)?",
        "options": ["No, they are mutually exclusive.","Yes. A state might face a total collapse of its legislative machinery (Art 356) while the entire nation is also facing a debt crisis (Art 360), leading to overlapping emergency administrations.","Only if the National Emergency is also active.","Only if the state is under debt to a foreign country."],
        "correctAnswerIndex": 1,
        "explanation": "There is no constitutional incompatibility. In fact, if a state is so fiscally mismanaged that it cannot pay salaries, it is likely both in a state of"
    },
    {
        "id": "ch46-l1-q85",
        "question": "The term \\",
        "options": ["The sovereign credit rating issued by international agencies.","The trust of the citizens in the fiat currency (preventing hyperinflation).","The ability of the government to honor its internal and external debt obligations.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": ""
    },
    {
        "id": "ch46-l1-q86",
        "question": "Which specific entry in the Union List (Schedule VII) provides the Centre the primary legislative bedrock for dealing with the \\",
        "options": ["Entry 36 and Entry 45.","Entry 1 and Entry 2.","Entry 97 (Residuary powers).","Entry 54 (Taxes on sale of goods)."],
        "correctAnswerIndex": 0,
        "explanation": "Entry 36 (Currency, coinage, and legal tender) and Entry 45 (Banking) are the core Union powers. Article 360 works in tandem with these entries, allowing the executive to enforce emergency directions on top of the already broad federal legislative control over money."
    },
    {
        "id": "ch46-l1-q87",
        "question": "Can the \\",
        "options": ["Yes, as he serves the state.","No. Article 158(4) provides a specific, ironclad guarantee that the emoluments and allowances of the Governor shall not be diminished during his term of office, and this protection remains absolute.","Only if the Governor himself signs the order.","Only if the State cabinet is also disbanded."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution protects the Governor"
    },
    {
        "id": "ch46-l1-q88",
        "question": "Does an active \\",
        "options": ["Yes, it is abolished.","No. The Council continues to exist. However, the Union’s binding ‘financial propriety’ directions would effectively override and negate the Council","Only if the Finance Minister becomes the sole tax collector.","Only during the two-month approval period."],
        "correctAnswerIndex": 1,
        "explanation": "A Financial Emergency doesn"
    },
    {
        "id": "ch46-l1-q89",
        "question": "Which Amendment Act famously (though briefly) made the \\",
        "options": ["The 38th Amendment Act (1975).","The 42nd Amendment Act (1976).","The 24th Amendment Act.","The 1st Amendment Act."],
        "correctAnswerIndex": 0,
        "explanation": "During the 1975-77 Emergency era, the 38th Amendment sought to put all emergency proclamations beyond the reach of the courts. This attempt to create an absolute executive shield was finally dismantled by the 44th Amendment in 1978."
    },
    {
        "id": "ch46-l1-q90",
        "question": "If a Financial Emergency is revoked, does the severe \\",
        "options": ["Yes, it is a constitutional right.","No, not automatically. The money already cut is legally considered","to the treasury unless the formal revocation order specifically provides for a partial or full refund.","Yes, but only for the police and military.","The High Court must order a refund."],
        "correctAnswerIndex": 1,
        "explanation": "Revocation is prospective, not retrospective. The emergency directions were legally valid while in force. Unless the President’s revocation proclamation explicitly chooses to compensate for the past cuts, the employees have no inherent right to reclaim the"
    },
    {
        "id": "ch46-l1-q91",
        "question": "Under which Article of the Constitution of India is the Finance Commission of India constituted?",
        "options": ["Article 275","Article 280","Article 282","Article 315"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280 provides for a Finance Commission as a quasi-judicial body."
    },
    {
        "id": "ch46-l1-q92",
        "question": "The Finance Commission is constituted by the:",
        "options": ["Prime Minister","Parliament","President of India","Finance Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The President is constitutionally mandated to constitute the Finance Commission every fifth year or at such earlier time as he considers necessary."
    },
    {
        "id": "ch46-l1-q93",
        "question": "How many members (including the Chairman) are in the Finance Commission?",
        "options": ["Chairman + 2 members","Chairman + 4 members","Chairman + 6 members","Chairman + 8 members"],
        "correctAnswerIndex": 1,
        "explanation": "The Finance Commission consists of a Chairman and four other members."
    },
    {
        "id": "ch46-l1-q94",
        "question": "Who appoints the Chairman and members of the Finance Commission?",
        "options": ["The Prime Minister","The Speaker of the Lok Sabha","The President of India","The Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "The Chairman and other members are appointed by the President."
    },
    {
        "id": "ch46-l1-q95",
        "question": "The qualifications for members of the Finance Commission are determined by:",
        "options": ["The President of India","The Constitution itself","The Parliament by law","The Finance Ministry"],
        "correctAnswerIndex": 2,
        "explanation": "While the Constitution provides the framework, Article 280(2) empowers the Parliament to determine the qualifications by law."
    },
    {
        "id": "ch46-l1-q96",
        "question": "The main function of the Finance Commission is to make recommendations to the President regarding:",
        "options": ["Allocation of seats in the Lok Sabha.","The distribution of the net proceeds of taxes between the Union and the States.","The appointment of the RBI Governor.","The preparation of the Union Budget."],
        "correctAnswerIndex": 1,
        "explanation": "Its primary role is vertical (Union-State) and horizontal (among States) tax devolution."
    },
    {
        "id": "ch46-l1-q97",
        "question": "Are the members of the Finance Commission eligible for re-appointment?",
        "options": ["No, never.","Yes, they are eligible.","Only after a 5-year gap.","Only if they were members and not the Chairman."],
        "correctAnswerIndex": 1,
        "explanation": "Members of the Finance Commission hold office for such period as specified by the President and are eligible for re-appointment."
    },
    {
        "id": "ch46-l1-q98",
        "question": "The Finance Commission is required to be constituted every:",
        "options": ["2 years","5 years","10 years","1 year"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280(1) mentions"
    },
    {
        "id": "ch46-l1-q99",
        "question": "The recommendations of the Finance Commission are laid before both Houses of Parliament by the:",
        "options": ["Finance Minister","President of India","Prime Minister","Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "The President is responsible for laying the recommendations and the action-taken report before the Parliament."
    },
    {
        "id": "ch46-l1-q100",
        "question": "Which Article deals with the",
        "options": ["Article 270","Article 275","Article 280","Article 285"],
        "correctAnswerIndex": 1,
        "explanation": "Article 275 provides for grants-in-aid to be given to such States as Parliament may determine to be in need of assistance."
    },
    {
        "id": "ch46-l1-q101",
        "question": "The Finance Commission submits its report directly to:",
        "options": ["The Parliament","The President of India","The NITI Aayog","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "It submits its recommendations to the President."
    },
    {
        "id": "ch46-l1-q102",
        "question": "Which of the following is NOT a member qualification specified under the Finance Commission Act, 1951?",
        "options": ["A Judge of High Court or qualified for appointment as such.","Special knowledge of finances and accounts of the Government.","Wide experience in financial matters and administration.","Member of Parliament for at least 5 years."],
        "correctAnswerIndex": 3,
        "explanation": "Being an MP is not a requirement. The fourth member should have special knowledge of economics."
    },
    {
        "id": "ch46-l1-q103",
        "question": "What type of body is the Finance Commission?",
        "options": ["A permanent executive body","A quasi-judicial constitutional body","A private consultancy","A branch of the NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "It is a constitutional body (Art 280) and performs quasi-judicial functions in deciding the share of taxes."
    },
    {
        "id": "ch46-l1-q104",
        "question": "The recommendations of the Finance Commission regarding devolution of taxes are:",
        "options": ["Strictly binding on the Union Government.","Advisory in nature and not binding.","Binding if passed by a 2/3rd majority in Parliament.","Applicable only for 1 year."],
        "correctAnswerIndex": 1,
        "explanation": "They are advisory, though the government usually follows them in practice."
    },
    {
        "id": "ch46-l1-q105",
        "question": "Who was the Chairman of the First Finance Commission of India?",
        "options": ["K.C. Neogy","K. Santhanam","A.K. Chanda","P.V. Rajamannar"],
        "correctAnswerIndex": 0,
        "explanation": "K.C. Neogy was the Chairman of the First Finance Commission (1951)."
    },
    {
        "id": "ch46-l1-q106",
        "question": "The Finance Commission aims to maintain which of the following?",
        "options": ["Political neutrality of the President.","Fiscal Federalism and balance between Union and States.","The rate of GST on luxury goods.","The size of the Indian Army."],
        "correctAnswerIndex": 1,
        "explanation": "By balancing financial resources between the levels of government, it supports fiscal federalism."
    },
    {
        "id": "ch46-l1-q107",
        "question": "Can the President refer any other matter to the Finance Commission",
        "options": ["No, its role is restricted solely to tax sharing.","Yes, according to Article 280(3)(d).","Only if the Supreme Court approves.","Only during a financial emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The President can refer"
    },
    {
        "id": "ch46-l1-q108",
        "question": "The role of the Finance Commission in augmenting the Consolidated Fund of a State to supplement the resources of Panchayats was added by which Amendment?",
        "options": ["42nd Amendment","73rd Amendment","74th Amendment","80th Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "Wait. Actually, the requirement for a Central FC to recommend measures for Panchayats/Municipalities was added by 73rd and 74th Amendments."
    },
    {
        "id": "ch46-l1-q109",
        "question": "The tenure of the members is determined by:",
        "options": ["The Constitution.","The President of India in his order.","The Parliament by law.","Fixed at 5 years in all cases."],
        "correctAnswerIndex": 1,
        "explanation": "They hold office for such period as is specified by the President in his order."
    },
    {
        "id": "ch46-l1-q110",
        "question": "Is there a permanent staff for the Finance Commission?",
        "options": ["Yes, like the UPSC.","No, a fresh commission is set up periodically and usually has a temporary secretariat.","It shares the staff of NITI Aayog.","It is part of the RBI staff."],
        "correctAnswerIndex": 1,
        "explanation": "It is an ad-hoc body, not a permanent one."
    },
    {
        "id": "ch46-l1-q111",
        "question": "The",
        "options": ["Vertical Devolution","Horizontal Devolution","Circular Devolution","Diagonal Devolution"],
        "correctAnswerIndex": 1,
        "explanation": "Distribution between Union and States is vertical; among States is horizontal."
    },
    {
        "id": "ch46-l1-q112",
        "question": "The Finance Commission uses which of the following data for horizontal distribution typically?",
        "options": ["Population","Income Distance","Forest Cover","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "A formula based on various criteria (Equity and Efficiency) is utilized."
    },
    {
        "id": "ch46-l1-q113",
        "question": "Who was the Chairman of the 15th Finance Commission?",
        "options": ["Y.V. Reddy","N.K. Singh","Vijay Kelkar","C. Rangarajan"],
        "correctAnswerIndex": 1,
        "explanation": "N.K. Singh chaired the 15th FC."
    },
    {
        "id": "ch46-l1-q114",
        "question": "The Finance Commission Act was passed in which year?",
        "options": ["1950","1951","1955","1960"],
        "correctAnswerIndex": 1,
        "explanation": "The Finance Commission (Miscellaneous Provisions) Act, 1951."
    },
    {
        "id": "ch46-l1-q115",
        "question": "Does the Finance Commission have its own website/office permanently in New Delhi?",
        "options": ["Yes.","It exists only during its tenure and uses government offices.","It is a virtual body only.","It meets once in 5 years in Mumbai."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch46-l1-q116",
        "question": "The Finance Commission helps in reducing which type of",
        "options": ["Political imbalance","Vertical and Horizontal Fiscal Imbalances","Linguistic imbalance","Military imbalance"],
        "correctAnswerIndex": 1,
        "explanation": "It addresses the gap between revenue powers and expenditure needs of States."
    },
    {
        "id": "ch46-l1-q117",
        "question": "Can a person be appointed to the Finance Commission twice?",
        "options": ["Yes.","No.","Only for the Chairman post.","Only if they are below 60."],
        "correctAnswerIndex": 0,
        "explanation": "Members are eligible for re-appointment."
    },
    {
        "id": "ch46-l1-q118",
        "question": "Is the Finance Commission advisory for the",
        "options": ["Yes, it can recommend measures to maintain sound finance.","No, only the RBI handles borrowing.","Only for foreign loans.","Only during a war."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch46-l1-q119",
        "question": "Which Article provides that the President shall cause the recommendations to be laid before each House of Parliament?",
        "options": ["Article 280","Article 281","Article 282","Article 283"],
        "correctAnswerIndex": 1,
        "explanation": "Article 281 deals with the recommendations and the memorandum."
    },
    {
        "id": "ch46-l1-q120",
        "question": "The Finance Commission is considered a",
        "options": ["Judicial Federalism","Fiscal Federalism","Linguistic Federalism","Executive Federalism"],
        "correctAnswerIndex": 1,
        "explanation": "It maintains the financial equilibrium in the Indian federal structure."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch46-l2-q1",
        "question": "Unlike Articles 352 and 356, Article 360 does not mention any \\",
        "options": ["It is the most dangerous emergency.","It does not require periodic legislative review because financial stability is seen as a long-term goal.","The President can never revoke it.","It is a permanent amendment to the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "Because a financial crisis might take years of structural reform to resolve, the Constitution deliberately excludes a maximum time limit or a requirement for periodic six-month renewals. Once Parliament initially approves it, the emergency runs until the Executive decides the crisis is over."
    },
    {
        "id": "ch46-l2-q2",
        "question": "A resolution for the approval of a Financial Emergency requires only a \\",
        "options": ["It is the same.","It is easier; Article 352 requires a Special Majority (as per the 44th Amendment).","It is harder; Article 352 requires only a Simple Majority.","Article 360 requires a 3/4th majority."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent political abuse of emergency powers, the 44th Amendment mandated a tough"
    },
    {
        "id": "ch46-l2-q3",
        "question": "If the Lok Sabha is dissolved when the Financial Emergency is in operation (after it was approved):",
        "options": ["The proclamation lapses immediately.","The proclamation continues to be valid; its \\","nature is not affected by the dissolution of the House.","The Rajya Sabha must re-approve it every month.","The President must revoke it."],
        "correctAnswerIndex": 1,
        "explanation": "Once a Financial Emergency is approved by both houses, it requires no further parliamentary renewals. Therefore, subsequent dissolutions of the Lok Sabha have no legal effect on the continuation of the emergency; it remains valid indefinitely."
    },
    {
        "id": "ch46-l2-q4",
        "question": "The Union can direct States to observe \\",
        "options": ["Spending more on infrastructure.","Strict adherence to budget ceilings, reduction of wasteful expenditure, and following Central accounting norms.","Printing more currency.","Paying off private debts."],
        "correctAnswerIndex": 1,
        "explanation": "While undefined in the Constitution,"
    },
    {
        "id": "ch46-l2-q5",
        "question": "Under Article 360, the President can direct the reservation of \\",
        "options": ["Gives the Centre a \\","over the State","Abolishes the State","Makes the Governor the Finance Minister.","Transfers the State"],
        "correctAnswerIndex": 0,
        "explanation": "Reserving money bills strips the state legislature of its final say over its own budget. The President (meaning the Union Cabinet) gains the absolute power to veto or modify the state"
    },
    {
        "id": "ch46-l2-q6",
        "question": "Article 360(4) allows for the reduction of salaries of \\",
        "options": ["Article 14.","The constitutional guarantee that judges","The Basic Structure doctrine.","The 44th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "Normally, Articles 125 and 221 strictly protect the salaries of Supreme Court and High Court judges against being cut during their tenure (to maintain independence). Article 360(4)(b) explicitly overrides this protection in times of massive national economic collapse."
    },
    {
        "id": "ch46-l2-q7",
        "question": "Why is the power to reduce judges",
        "options": ["To punish the judiciary.","To ensure that in a grave economic crisis, \\","is made by all constitutional authorities.","Because judges are responsible for financial crises.","It was an oversight by the drafting committee."],
        "correctAnswerIndex": 1,
        "explanation": "The framers designed Article 360 to manage catastrophic fiscal insolvency. The logic was that if the state cannot afford to pay its lowest employees, high constitutional functionaries (like judges) must also share the burden of deep austerity cuts."
    },
    {
        "id": "ch46-l2-q8",
        "question": "Does a Financial Emergency suspend the \\",
        "options": ["Yes.","No, but the Union executive acquires the power to dictate how the money in that fund is spent."],
        "correctAnswerIndex": 1,
        "explanation": "The state"
    },
    {
        "id": "ch46-l2-q9",
        "question": "If a State refuses to follow the \\",
        "options": ["The Centre can invoke Article 365 to impose President","The State is declared bankrupt.","The Union can stop all food supplies to that state.","The Governor is arrested."],
        "correctAnswerIndex": 0,
        "explanation": "Article 365 states that if a state fails to comply with any directions given by the Union under the Constitution (which includes Art 360 canons), the President can assume that the constitutional machinery in the state has failed, triggering Article 356."
    },
    {
        "id": "ch46-l2-q10",
        "question": "The 38th Amendment (1975) made the \\",
        "options": ["The government is spending too much.","It is proved that the proclamation was made with malafide intent or on irrelevant grounds.","The stock market crashes.","The GDP growth is above 5%."],
        "correctAnswerIndex": 1,
        "explanation": "With the shield of the 38th Amendment gone, the President’s"
    },
    {
        "id": "ch46-l2-q11",
        "question": "Which emergency has the \\",
        "options": ["National Emergency (352).","President’s Rule (356) and Financial Emergency (360).","They are all the same.","Only President"],
        "correctAnswerIndex": 1,
        "explanation": "Both Article 356 and Article 360 require only a Simple Majority for parliamentary approval and both offer a two-month window to secure it. In stark contrast, Article 352 requires a Special Majority within a tight one-month window."
    },
    {
        "id": "ch46-l2-q12",
        "question": "In a National Emergency, the Centre makes laws for the state. In a Financial Emergency, the Centre:",
        "options": ["Also makes laws for the state.","Primarily issues \\","to control the state"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Articles 352 and 356, Article 360 does not generally transfer the state"
    },
    {
        "id": "ch46-l2-q13",
        "question": "Is the \\",
        "options": ["Yes, after 1 year.","No. (This rule only applies to President"],
        "correctAnswerIndex": 1,
        "explanation": "The strict requirement tying an extension beyond one year to an Election Commission certificate (regarding the impossibility of holding elections) is exclusive to President"
    },
    {
        "id": "ch46-l2-q14",
        "question": "Article 360 is described as being \\",
        "options": ["It abolishes the States.","It allows the Union to control the most vital aspect of state autonomy—the purse."],
        "correctAnswerIndex": 1,
        "explanation": "While it doesn"
    },
    {
        "id": "ch46-l2-q15",
        "question": "Can the President reduce his own salary during a Financial Emergency?",
        "options": ["No.","Yes, as he falls under the category of \\",""],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 360(4)(a)(i), the President can direct a reduction of salaries for"
    },
    {
        "id": "ch46-l2-q16",
        "question": "The power to issue directions under Article 360 includes \\",
        "options": ["Yes (as pensions are part of allowances/emoluments of service).","No."],
        "correctAnswerIndex": 0,
        "explanation": "In constitutional and administrative law,"
    },
    {
        "id": "ch46-l2-q17",
        "question": "Which article of the Constitution is referred to as the \\",
        "options": ["Article 202 (State Budget).","Article 265 (No tax without law).","Article 246 (Division of powers).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Article 360 impacts the entire spectrum of state financial autonomy: its ability to pass its own budget (Art 202) is subjected to Central veto, its exclusive taxation powers (Art 246) are constrained by Central spending directives, undermining its fiscal independence."
    },
    {
        "id": "ch46-l2-q18",
        "question": "If the President is satisfied that the \\",
        "options": ["No, both must be threatened.","Yes (the article uses the word \\",")."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 states:"
    },
    {
        "id": "ch46-l2-q19",
        "question": "If a Financial Emergency is declared, does the \\",
        "options": ["Yes.","No, but the Union","s usual consensus-based recommendations."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 does not abolish Constitutional bodies like the GST Council (Art 279A). However, during an emergency, the binding"
    },
    {
        "id": "ch46-l2-q20",
        "question": "Can the Parliament pass a law to \\",
        "options": ["No.","Yes, by refusing to approve it within two months or by passing a resolution for its revocation."],
        "correctAnswerIndex": 1,
        "explanation": "The ultimate sovereignty remains with Parliament. It easily overrides the President"
    },
    {
        "id": "ch46-l2-q21",
        "question": "Assertion (A): India did not declare a Financial Emergency in 1991. Reason (R): Proclaiming a Financial Emergency might have sent a negative signal to global investors and affected India",
        "options": ["Both A and R are true, and R explains A.","Both A and R are true, but R does not explain A.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "During the 1991 Balance of Payments crisis, declaring Article 360 was actively considered but ultimately rejected. A formal admission of constitutional financial collapse would have drastically spooked international lenders exactly when India desperately needed emergency IMF loans."
    },
    {
        "id": "ch46-l2-q22",
        "question": "Assertion (A): The 44th Amendment Act made Article 360 less \\",
        "options": ["Both A and R are true.","A is true, but R is false (It still requires a Simple Majority).","A is false, but R is true.","Both A and R are false."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment did curtail executive dictatorship regarding Article 360 by making the President"
    },
    {
        "id": "ch46-l2-q23",
        "question": "Which emergency provides for the \\",
        "options": ["National Emergency.","President’s Rule.","Financial Emergency (no periodic approval needed)."],
        "correctAnswerIndex": 2,
        "explanation": "A Financial Emergency is uniquely stable. Unlike Arts 352 and 356, which require the government to repeatedly return to Parliament every six months to seek agonizing extensions, Art 360 continues quietly in the background indefinitely after its first approval."
    },
    {
        "id": "ch46-l2-q24",
        "question": "Does Article 360 apply to the state of Jammu & Kashmir?",
        "options": ["It didn","No, it never applies to J&K."],
        "correctAnswerIndex": 0,
        "explanation": "Historically, under the special status granted by Article 370 via the 1954 Presidential Order, Article 360 did not apply to J&K. However, since the abrogation of special status in 2019, all provisions of the Indian Constitution, including Article 360, apply fully to the UT of J&K."
    },
    {
        "id": "ch46-l2-q25",
        "question": "Can the \\",
        "options": ["No, it can only discuss it.","Yes, it has veto power."],
        "correctAnswerIndex": 0,
        "explanation": "The Inter-State Council (Article 263) is purely an advisory and consultative body aimed at cooperative federalism. It has absolutely zero legislative or constitutional veto power to stop the President from proclaiming or maintaining emergencies."
    },
    {
        "id": "ch46-l2-q26",
        "question": "Who is the \\",
        "options": ["The President himself.","The respective Legislatures (by amending the relevant salary acts)."],
        "correctAnswerIndex": 1,
        "explanation": "While the President issues the"
    },
    {
        "id": "ch46-l2-q27",
        "question": "Is a \\",
        "options": ["Yes, they can co-exist.","No, Article 352 overrides 360."],
        "correctAnswerIndex": 0,
        "explanation": "There is no constitutional bar against simultaneous emergencies. During a massive war (triggering Art 352), the nation might also simultaneously face a devastating sovereign debt default, perfectly justifying the concurrent proclamation of Art 360."
    },
    {
        "id": "ch46-l2-q28",
        "question": "Does Article 360 mention \\",
        "options": ["No.","Yes."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the original Article 352, Article 360 restricts its triggers fundamentally to the threat of"
    },
    {
        "id": "ch46-l2-q29",
        "question": "What is the \\",
        "options": ["A law passed by Parliament.","A subsequent order by the President ending the emergency."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 360(2)(a), a proclamation of Financial Emergency"
    },
    {
        "id": "ch46-l2-q30",
        "question": "If the President reduces the salaries of SC Judges, can they strike down the order?",
        "options": ["Only if the procedural requirements of Article 360 were not met.","Yes, they can do anything."],
        "correctAnswerIndex": 0,
        "explanation": "Judges cannot strike down the salary cuts merely because they dislike them, as the Constitution explicitly authorizes the cuts (Art 360(4)(b)). They could only invalidate the measure if they proved the entire underlying emergency proclamation was mala fide and legally void."
    },
    {
        "id": "ch46-l2-q31",
        "question": "The Finance Commission is required to recommend measures to augment the",
        "options": ["To pay the salaries of High Court judges.","To supplement the resources of the Panchayats and Municipalities in the State.","To build national highways passing through the state.","To fund the State"],
        "correctAnswerIndex": 1,
        "explanation": "According to Article 280(3)(bb) and (c), the FC recommends measures based on the findings of the State Finance Commission."
    },
    {
        "id": "ch46-l2-q32",
        "question": "Which of the following describes the relationship between the",
        "options": ["FC is a statutory body, while NITI Aayog is constitutional.","FC is a constitutional body for tax devolution, while NITI Aayog is an executive body for policy and planning.","NITI Aayog provides the data which the FC must use by law.","FC has been replaced by NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "UPSC frequently asks this distinction. FC (Art 280) is constitutional; NITI Aayog (reforming Planning Commission) is an executive"
    },
    {
        "id": "ch46-l2-q33",
        "question": "While the Constitution provides for a Finance Commission every 5 years, the",
        "options": ["It covered a period of 6 years (2020-21 to 2025-26) instead of 5.","It recommended the abolition of income tax.","It was headed by the Vice President.","It had 10 members."],
        "correctAnswerIndex": 0,
        "explanation": "Due to various factors (J&K status change, etc.), it gave a report first for one year and then for five years."
    },
    {
        "id": "ch46-l2-q34",
        "question": "The 15th Finance Commission used the 2011 Census data. Why was this controversial for some Southern states?",
        "options": ["Because 2011 census was not accurate.","Because they had successfully controlled population growth and felt penalized compared to states with higher growth.","Because they wanted to use the 1951 Census.","Because it excluded the population of cities."],
        "correctAnswerIndex": 1,
        "explanation": "States with lower population growth (performance in population control) argued that using 2011 data would reduce their share compared to 1971 data."
    },
    {
        "id": "ch46-l2-q35",
        "question": "What is",
        "options": ["The physical distance of a state from New Delhi.","The distance of a state","The gap between rich and poor within a single state.","The average income of the Finance Commission members."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch46-l2-q36",
        "question": "The Finance Commission",
        "options": ["Help states that are in","as determined by some criteria.","Reward the states that vote for the ruling party at the Centre.","Pay for the Central schemes only.","Pay the interest on foreign loans."],
        "correctAnswerIndex": 0,
        "explanation": "Grants-in-aid are specifically designed for"
    },
    {
        "id": "ch46-l2-q37",
        "question": "Which of the following is true regarding the",
        "options": ["It is set up by the Prime Minister.","It is set up by the Governor every 5 years under Article 243-I and 243-Y.","It reports to the Union Finance Commission.","It has no constitutional status."],
        "correctAnswerIndex": 1,
        "explanation": "SFCs are constitutional bodies mirroring the Central FC at the state level for local bodies."
    },
    {
        "id": "ch46-l2-q38",
        "question": "The concept of",
        "options": ["Finance Commission and GST Council.","UPSC and SPSC.","Parliament and Supreme Court.","NITI Aayog and RBI."],
        "correctAnswerIndex": 0,
        "explanation": "While FC handles the direct tax sharing, the GST Council handles the indirect tax decisions, both impacting federal fiscal relations."
    },
    {
        "id": "ch46-l2-q39",
        "question": "A",
        "options": ["It can send people to jail.","It has the powers of a civil court for summoning witnesses and requiring documents.","It is part of the High Court.","It can overrule the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Under the 1951 Act, it has specific powers to gather evidence like a civil court."
    },
    {
        "id": "ch46-l2-q40",
        "question": "Why are the FC recommendations considered",
        "options": ["Because the commission is composed of non-citizens.","To preserve the sovereignty of the Parliament over the public purse.","Because the Constitution is unclear on the matter.","Because the government doesn"],
        "correctAnswerIndex": 1,
        "explanation": "Legal logic holds that an external body cannot"
    },
    {
        "id": "ch46-l2-q41",
        "question": "The Finance Commission",
        "options": ["Filling the gaps in the border wall.","Covering the revenue deficit of states after considering their own efforts.","Spending on potholes in highways.","Giving money to states with vacant assembly seats."],
        "correctAnswerIndex": 1,
        "explanation": "It helps bridge the horizontal fiscal imbalance among states."
    },
    {
        "id": "ch46-l2-q42",
        "question": "Which criterion",
        "options": ["Population (1971).","Income Distance.","Forest and Ecology.","Tax Effort."],
        "correctAnswerIndex": 1,
        "explanation": "Income distance remains the highest weightage criterion to ensure redistribution to poorer states."
    },
    {
        "id": "ch46-l2-q43",
        "question": "The",
        "options": ["Reducing the states","Increasing the states","Abolishing the State Finance Commissions.","Giving all money to the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The jump to 42% (Vertical Devolution) was a major shift toward greater state autonomy."
    },
    {
        "id": "ch46-l2-q44",
        "question": "Can the Parliament override the Finance Commission",
        "options": ["No, the formula is permanent.","Yes, as the recommendations are advisory, but it must be done through the budget process.","Only if the President declares a state of emergency.","Only if all state governors agree."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament (Executive) can accept or reject, though it rarely rejects tax sharing formulas due to political blowback."
    },
    {
        "id": "ch46-l2-q45",
        "question": "Consider the following:\\n1. Distribution of net proceeds of taxes.\\n2. Principles for grants-in-aid.\\n3. Measures to augment state funds for local bodies.\\n4. Auditing state government accounts.\\nWhich are functions of FC?",
        "options": ["1, 2 and 3 only","2, 3 and 4 only","1 and 3 only","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Auditing is the function of the CAG (Article 149), not the Finance Commission."
    },
    {
        "id": "ch46-l2-q46",
        "question": "The member of FC with",
        "options": ["Politics.","Academia or specialized financial service.","Military.","Sports."],
        "correctAnswerIndex": 1,
        "explanation": "Technical expertise is required for the complex modeling of devolution formulas."
    },
    {
        "id": "ch46-l2-q47",
        "question": "Does the Finance Commission recommend the share of States in the GST revenue?",
        "options": ["Yes.","No, GST sharing is handled by the GST Council; FC handles the divisible pool of other taxes.","Only for the share of UTs.","Only during the transitional period."],
        "correctAnswerIndex": 1,
        "explanation": "GST Council (Art 279A) is a separate body for GST management, though FC considers the impact of GST on state finances."
    },
    {
        "id": "ch46-l2-q48",
        "question": "What is",
        "options": ["The distance between the floors of the Finance Ministry.","The mismatch between revenue sources and expenditure responsibilities of the Center vs States.","The salary gap between a Minister and a Peon.","The distance between Delhi and Kanyakumari."],
        "correctAnswerIndex": 1,
        "explanation": "Center usually has more elastic revenue sources; States have more social expenditure responsibilities."
    },
    {
        "id": "ch46-l2-q49",
        "question": "The Chairman of the FC is usually a person with",
        "options": ["A famous actor.","A veteran politician, economist or senior administrator with broad governance insight.","A social media influencer.","A religious leader."],
        "correctAnswerIndex": 1,
        "explanation": "The breadth of experience is needed to balance political and economic realities."
    },
    {
        "id": "ch46-l2-q50",
        "question": "The",
        "options": ["Cess and Surcharges.","Income Tax.","Corporation Tax.","Customs Duty."],
        "correctAnswerIndex": 0,
        "explanation": "Under the current law (Art 271), cesses and surcharges are not shared with states, which is a point of contention."
    },
    {
        "id": "ch46-l2-q51",
        "question": "Is the Finance Commission advisory on the",
        "options": ["Yes, it has increasingly recommended earmarked funds for disaster relief.","No, this is only handled by the NDRF.","Only for earthquakes.","Only for UTs."],
        "correctAnswerIndex": 0,
        "explanation": "Recent commissions have given specific allocations for disaster management and mitigation."
    },
    {
        "id": "ch46-l2-q52",
        "question": "The phrase",
        "options": ["Total tax collected.","Tax collected minus cost of collection.","Tax collected plus interest.","Tax collected divided by number of people."],
        "correctAnswerIndex": 1,
        "explanation": "The CAG certifies the net proceeds which are then used as the base for devolution."
    },
    {
        "id": "ch46-l2-q53",
        "question": "Which amendment made the recommendations of the State Finance Commission mandatory to be considered by the Central Finance Commission?",
        "options": ["42nd Amendment.","73rd and 74th Amendments.","80th Amendment.","101st Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "This strengthened the linkage between local and central fiscal planning."
    },
    {
        "id": "ch46-l2-q54",
        "question": "The 10th Finance Commission recommended a",
        "options": ["High risk investment in state companies.","An Alternative Devolution Formula (80th Amdt) where all central taxes were shared.","A fund for startup businessmen.","A fund for political campaigns."],
        "correctAnswerIndex": 1,
        "explanation": "Actually, it refers to the shift to"
    },
    {
        "id": "ch46-l2-q55",
        "question": "Does the Finance Commission meet with State Chief Ministers?",
        "options": ["No.","Yes, it visits every state and holds consultations with the government and stakeholders.","Only with the CMs of rich states.","Only in New Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "State visits are a crucial part of the commission"
    },
    {
        "id": "ch46-l2-q56",
        "question": "The term of the",
        "options": ["2021-2025.","2026-2031.","2024-2029.","2030-2035."],
        "correctAnswerIndex": 1,
        "explanation": "Arvind Panagariya leads the 16th FC for the period starting April 2026."
    },
    {
        "id": "ch46-l2-q57",
        "question": "Which of the following describes the",
        "options": ["Grants linked to sectors like education or health performance.","Grants for the Prime Minister","Grants for nuclear weapons development.","Grants for states that win most medals in Olympics."],
        "correctAnswerIndex": 0,
        "explanation": "Commissions often use targeted grants to incentivize progress in key social indicators."
    },
    {
        "id": "ch46-l2-q58",
        "question": "The Finance Commission",
        "options": ["Purely executive bodies like NITI Aayog.","Legislative bodies like the Lok Sabha.","State-level NGOs.","All of the above."],
        "correctAnswerIndex": 0,
        "explanation": "The status gives it a higher legal standing and specific powers to demand information and verify records."
    },
    {
        "id": "ch46-l2-q59",
        "question": "If a member of FC becomes",
        "options": ["Supreme Court.","President of India (as per rules made by Parliament).","Parliament.","Chairman of FC."],
        "correctAnswerIndex": 1,
        "explanation": "The procedural removal matches the statutory rules established for the commission"
    },
    {
        "id": "ch46-l2-q60",
        "question": "Horizontal Devolution",
        "options": ["Bigger states are more powerful.","It represents the higher cost of providing services across a larger and often difficult terrain.","Bigger states have more animals.","Bigger states pay more tax."],
        "correctAnswerIndex": 1,
        "explanation": "Administrative costs and infrastructure needs are higher for geographically vast states."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch46-l3-q1",
        "question": "In a hypothetical scenario where a State faces a severe \\",
        "options": ["No, Article 360 can only be applied to the entire country simultaneously.","Yes, as the Article explicitly includes the power to proclaim an emergency for",".","Only if the state legislature passes a resolution requesting Central intervention.","Only if the Finance Commission formally declares the state insolvent."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 is highly flexible. It empowers the President to proclaim a Financial Emergency for India as a whole or for"
    },
    {
        "id": "ch46-l3-q2",
        "question": "While the Constitution mentions \\",
        "options": ["The Directive Principles of State Policy.","A combination of the General Financial Rules (GFR) of the Government of India and the Audit Manuals of the CAG.","Specifically from the Preamble","The subjective political manifesto of the ruling party at the Centre."],
        "correctAnswerIndex": 1,
        "explanation": "In the absence of a constitutional definition,"
    },
    {
        "id": "ch46-l3-q3",
        "question": "If a Financial Emergency is in operation, does the \\",
        "options": ["Yes, the Centre gains absolute ownership of the entire divisible pool.","No. However, the Union can indirectly modify the state","Yes, but only for the duration of the parliamentary recess.","Only if the Supreme Court issues an injunction."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 doesn"
    },
    {
        "id": "ch46-l3-q4",
        "question": "The power to reduce the salaries of Supreme Court and High Court Judges under Article 360 is a profound constitutional anomaly. Which specific pillar of the \\",
        "options": ["Secularism.","Independence of the Judiciary.","The Parliamentary system.","Sovereignty of the People."],
        "correctAnswerIndex": 1,
        "explanation": "Judicial independence is often tethered to financial security (salaries cannot be varied to their disadvantage). Article 360 is the ONLY provision that allows the Executive to breach this security, making it a unique point of friction between emergency powers and judicial independence."
    },
    {
        "id": "ch46-l3-q5",
        "question": "If the President issues a direction to reduce the salaries of Supreme Court Judges during a Financial Emergency, can the affected Judges physically strike down the proclamation of Financial Emergency itself?",
        "options": ["No, the proclamation is a political question beyond judicial reach.","Yes, if they find that the","of the President was based on mala fides, irrelevant material, or that no actual threat to credit/stability existed.","No, because the 38th Amendment forbids such challenges.","Only if the Prime Minister is also included in the salary cut."],
        "correctAnswerIndex": 1,
        "explanation": "Since the 44th Amendment removed the shield of non-justiciability, the"
    },
    {
        "id": "ch46-l3-q6",
        "question": "During the global COVID-19 pandemic (2020), many legal experts argued against invoking Article 360, favoring the Disaster Management Act instead. Why is Article 360 considered a \\",
        "options": ["Because it requires a 2/3rd majority to pass.","Because it permits a permanent reduction in salaries and the overriding of state budget autonomy, which could severely damage the nation’s sovereign credit rating.","Because it leads to the immediate dissolution of the RBI.","Because it stops all international travel by law."],
        "correctAnswerIndex": 1,
        "explanation": "Declaring a Financial Emergency is a formal admission of national insolvency/instability. Unlike the Disaster Management Act which manages health crises, Article 360 signals economic collapse to global markets, potentially leading to massive capital flight and a permanent loss of financial reputation."
    },
    {
        "id": "ch46-l3-q7",
        "question": "The \\",
        "options": ["Yes, within its first session.","No. The Constitution provides no mechanism for periodic parliamentary review or re-approval for Article 360 once the initial approval is secured.","Only if the President requests it.","Only if the Rajya Sabha passes a resolution of disapproval."],
        "correctAnswerIndex": 1,
        "explanation": "This is a significant gap in the 44 th Amendment. While it introduced periodic six-month reviews for National Emergency and President"
    },
    {
        "id": "ch46-l3-q8",
        "question": "During a Financial Emergency, the President can direct that all State Money Bills be reserved for his consideration. Does this constitutionally imply that the \\",
        "options": ["Yes, the Governor becomes a rubber stamp for the President.","No. The Governor still performs his role under Article 200, but he is now constitutionally","to reserve the bill for the President instead of having the option to give assent himself.","The Governor is replaced by a Central Financial Administrator.","The State Assembly loses the power to even introduce money bills."],
        "correctAnswerIndex": 1,
        "explanation": "The procedure shifts rather than vanishes. The Governor must still receive the bill from the Assembly, but his power to grant assent is paralyzed; he must act as a conduit, sending the bill to the President for final approval as per the emergency directions."
    },
    {
        "id": "ch46-l3-q9",
        "question": "If the President refuses to give assent to a critical State Money Bill during a Financial Emergency, what constitutional remedy is available to the frustrated State Government?",
        "options": ["The State can move the Supreme Court for an order of",".","There is no constitutional remedy; the Union","financial propriety","The State can declare itself independent from the Union","The State Governor can override the President","extraordinary powers"],
        "correctAnswerIndex": 1,
        "explanation": "In an emergency under Article 360, the usual federal autonomy of the state"
    },
    {
        "id": "ch46-l3-q10",
        "question": "Assertion (A): The 44th Amendment Act (1978) deliberately did NOT raise the parliamentary approval requirement for Article 360 to a \\",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the highly political nature of National Emergency (rights suspension) or President"
    },
    {
        "id": "ch46-l3-q11",
        "question": "Assertion (A): Article 360 has never been invoked in India even during the darkest days of the 1991 crisis. Reason (R): The 1991 Balance of Payments crisis was managed via structural reforms, gold pledging, and IMF assistance, as a formal emergency would have signaled a",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The reason India avoid Article 360 is psychological and economic. A constitutional declaration of financial failure is a red flag for global finance. In 1991, India chose the path of reform (LPG) and gold-collateralized loans to maintain its"
    },
    {
        "id": "ch46-l3-q12",
        "question": "Does the proclamation of a Financial Emergency empower the Parliament to proactively legislate on subjects listed in the State List (Schedule VII)?",
        "options": ["Yes, it works exactly like Article 352.","No. Article 360 only provides for \\","To legislate on the State List, the Union would still need to additionally invoke Article 352 or 356.","Only if the Rajya Sabha passes a special resolution under Article 249.","Only after 6 months of the emergency"],
        "correctAnswerIndex": 1,
        "explanation": "This is a subtle but vital distinction. While Article 360 allows the Union to *direct* the state"
    },
    {
        "id": "ch46-l3-q13",
        "question": "Who is the final authority responsible for \\",
        "options": ["The Comptroller and Auditor General (CAG).","The Governor of the Reserve Bank of India (RBI).","The Union Finance Secretary.","No independent official; it is the subjective \\","of the President acting on the advice of the Union Cabinet."],
        "correctAnswerIndex": 3,
        "explanation": "Unlike some modern fiscal councils, the Constitution places the trigger for Article 360 entirely within the executive"
    },
    {
        "id": "ch46-l3-q14",
        "question": "Is the \\",
        "options": ["Yes, all funds are unified under the President.","No. The Contingency Fund remains at the disposal of the President as per the original constitutional scheme.","The Contingency Fund is transferred to the World Bank.","The Contingency Fund is used only to pay the salaries of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Emergency provisions don"
    },
    {
        "id": "ch46-l3-q15",
        "question": "If the President’s \\",
        "options": ["On the Union Government, to produce the material evidence of a crisis.","On the citizen or state challenging the proclamation, to prove that the President acted with malafide intent or that no relevant material existed.","On the Election Commission.","On the RBI Governor."],
        "correctAnswerIndex": 1,
        "explanation": "Under the law of evidence and the principles established in Bommai, there is a presumption of regularity for constitutional acts. Therefore, the person challenging the emergency must provide prima facie evidence of bad faith or total absence of grounds to shift the burden to the government."
    },
    {
        "id": "ch46-l3-q16",
        "question": "Is Article 360 (Financial Emergency) legally applicable to the \\",
        "options": ["No, only to States.","Yes. Since UTs are already under the direct executive power of the President/Union, the emergency mechanisms (like salary cuts and financial directions) apply to them even more seamlessly.","Only if the UT has a Legislative Assembly (like Delhi or Puducherry).","Only for UTs located on the international borders."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 covers"
    },
    {
        "id": "ch46-l3-q17",
        "question": "Which foundational constitutional principle is often described as the \\",
        "options": ["The Finance Commission’s absolute independence.","Judicial Review (as restored and clarified by the 44th Amendment/Bommai context).","The Speaker’s casting vote.","The Rajya Sabha’s permanent veto."],
        "correctAnswerIndex": 1,
        "explanation": "Because Article 360 has no built-in sunset clause (maximum period) and requires only a low simple majority, Judicial Review is the only real"
    },
    {
        "id": "ch46-l3-q18",
        "question": "The \\",
        "options": ["Force a state to move all its money into military research.","Force a state to aggressively cut its \\","schemes and re-allocate funds towards debt repayment to balance its budget.","Force the state to abolish its own High Court.","Declare the state"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 360, the Union becomes the"
    },
    {
        "id": "ch46-l3-q19",
        "question": "If the President of India is physically away on a state visit, can the \\",
        "options": ["No, only the elected President possesses this sovereign power.","Yes. When the Vice-President acts as President, he exercises all the powers and immunities of the President, including the power to proclaim emergencies under Part XVIII.","Only with the prior written consent of the Chief Justice of India.","Only if the Speaker of the Lok Sabha also signs the proclamation."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution provides that when the Vice-President discharges the functions of the President, he *is* the President for all legal and constitutional purposes, including the immense power to declare any of the three types of emergencies."
    },
    {
        "id": "ch46-l3-q20",
        "question": "Is the signature of the \\",
        "options": ["Yes, for authenticating the economic data.","No. Only the President signs the proclamation. However, as per Article 74, he can only do so upon the aid and advice of the Council of Ministers (which includes the Finance Minister).","Yes, as per the FRBM Act protocols.","No, only the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutionally, the proclamation is an act of the President. While the political decision is made by the Cabinet, the legal instrument only bears the President"
    },
    {
        "id": "ch46-l3-q21",
        "question": "Does an active Financial Emergency affect the sovereign \\",
        "options": ["No. In fact, it technically enhances the Union","Yes, it automatically freezes all international credit lines by law.","It requires the Union to get the Governor","It transfers all central borrowing power to the GST Council."],
        "correctAnswerIndex": 0,
        "explanation": "Internally, Article 360 centralizes the"
    },
    {
        "id": "ch46-l3-q22",
        "question": "In which landmark case did the Supreme Court extensively discuss the \\",
        "options": ["S.R. Bommai vs. Union of India (1994).","Kuldip Nayar vs. Union of India.","Kesavananda Bharati case.","A.K. Gopalan case."],
        "correctAnswerIndex": 0,
        "explanation": "The Bommai judgment is the"
    },
    {
        "id": "ch46-l3-q23",
        "question": "While Article 356 (President",
        "options": ["One month.","Two months.","Six months.","The window is decided by the RBI Governor."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution groups Financial Emergency with President"
    },
    {
        "id": "ch46-l3-q24",
        "question": "Can a particular State be under President’s Rule (Article 356) and simultaneously fall under the geographic scope of a Financial Emergency (Article 360)?",
        "options": ["No, they are mutually exclusive.","Yes. A state might face a total collapse of its legislative machinery (Art 356) while the entire nation is also facing a debt crisis (Art 360), leading to overlapping emergency administrations.","Only if the National Emergency is also active.","Only if the state is under debt to a foreign country."],
        "correctAnswerIndex": 1,
        "explanation": "There is no constitutional incompatibility. In fact, if a state is so fiscally mismanaged that it cannot pay salaries, it is likely both in a state of"
    },
    {
        "id": "ch46-l3-q25",
        "question": "The term \\",
        "options": ["The sovereign credit rating issued by international agencies.","The trust of the citizens in the fiat currency (preventing hyperinflation).","The ability of the government to honor its internal and external debt obligations.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": ""
    },
    {
        "id": "ch46-l3-q26",
        "question": "Which specific entry in the Union List (Schedule VII) provides the Centre the primary legislative bedrock for dealing with the \\",
        "options": ["Entry 36 and Entry 45.","Entry 1 and Entry 2.","Entry 97 (Residuary powers).","Entry 54 (Taxes on sale of goods)."],
        "correctAnswerIndex": 0,
        "explanation": "Entry 36 (Currency, coinage, and legal tender) and Entry 45 (Banking) are the core Union powers. Article 360 works in tandem with these entries, allowing the executive to enforce emergency directions on top of the already broad federal legislative control over money."
    },
    {
        "id": "ch46-l3-q27",
        "question": "Can the \\",
        "options": ["Yes, as he serves the state.","No. Article 158(4) provides a specific, ironclad guarantee that the emoluments and allowances of the Governor shall not be diminished during his term of office, and this protection remains absolute.","Only if the Governor himself signs the order.","Only if the State cabinet is also disbanded."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution protects the Governor"
    },
    {
        "id": "ch46-l3-q28",
        "question": "Does an active \\",
        "options": ["Yes, it is abolished.","No. The Council continues to exist. However, the Union’s binding ‘financial propriety’ directions would effectively override and negate the Council","Only if the Finance Minister becomes the sole tax collector.","Only during the two-month approval period."],
        "correctAnswerIndex": 1,
        "explanation": "A Financial Emergency doesn"
    },
    {
        "id": "ch46-l3-q29",
        "question": "Which Amendment Act famously (though briefly) made the \\",
        "options": ["The 38th Amendment Act (1975).","The 42nd Amendment Act (1976).","The 24th Amendment Act.","The 1st Amendment Act."],
        "correctAnswerIndex": 0,
        "explanation": "During the 1975-77 Emergency era, the 38th Amendment sought to put all emergency proclamations beyond the reach of the courts. This attempt to create an absolute executive shield was finally dismantled by the 44th Amendment in 1978."
    },
    {
        "id": "ch46-l3-q30",
        "question": "If a Financial Emergency is revoked, does the severe \\",
        "options": ["Yes, it is a constitutional right.","No, not automatically. The money already cut is legally considered","to the treasury unless the formal revocation order specifically provides for a partial or full refund.","Yes, but only for the police and military.","The High Court must order a refund."],
        "correctAnswerIndex": 1,
        "explanation": "Revocation is prospective, not retrospective. The emergency directions were legally valid while in force. Unless the President’s revocation proclamation explicitly chooses to compensate for the past cuts, the employees have no inherent right to reclaim the"
    },
    {
        "id": "ch46-l3-q31",
        "question": "Analyze the role of the Finance Commission in balancing",
        "options": ["Vertical imbalance is among states; Horizontal is between Center and States.","Vertical imbalance is between Center and States; Horizontal is among different States.","Both refer to the gap between rich and poor within a state.","Horizontal imbalance refers to the gap between different levels of a local body."],
        "correctAnswerIndex": 1,
        "explanation": "Vertical"
    },
    {
        "id": "ch46-l3-q32",
        "question": "The",
        "options": ["Reviewing the debt position of states and suggesting debt sustainability measures.","Reviewing the salaries of all government employees.","Suggesting changes to the Fundamental Rights.","Auditing the Prime Minister"],
        "correctAnswerIndex": 0,
        "explanation": "Commissions like the 12th, 13th, and 15th have been specifically asked to suggest fiscal consolidation roadmaps for both levels of government."
    },
    {
        "id": "ch46-l3-q33",
        "question": "Compare the",
        "options": ["FC decides the GST rates; GST Council devises the devolution formula.","FC recommends tax devolution from the divisible pool (excluding some cesses), while the GST Council decides on GST policy/rates (which impacts the pool).","They are the same body with two different names.","GST Council is superior to FC in constitutional hierarchy."],
        "correctAnswerIndex": 1,
        "explanation": "They perform complementary roles in fiscal federalism: one for revenue sharing and the other for coordinated tax management (GST)."
    },
    {
        "id": "ch46-l3-q34",
        "question": "The 15th Finance Commission introduced a",
        "options": ["Literacy rate.","Demographic Performance (Total Fertility Rate).","Number of startups.","Gold production."],
        "correctAnswerIndex": 1,
        "explanation": "To balance the use of 2011 census data, the 15th FC rewarded states that demonstrated progress in population control/demographic management."
    },
    {
        "id": "ch46-l3-q35",
        "question": "Which of the following is a",
        "options": ["Issuing a warrant for arrest.","Requiring the production of any document or public record from any office.","Sentencing a tax-evader to fine.","Amending the Income Tax Act."],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has the power of a civil court for summoning, examining on oath, and discovery of documents."
    },
    {
        "id": "ch46-l3-q36",
        "question": "The",
        "options": ["Abolished the Finance Commission.","Enacted an","where all central taxes were shared with states (except cesses/surcharges).","Increased the number of members to 10.","Removed the requirement for an annual report."],
        "correctAnswerIndex": 1,
        "explanation": "This implemented the 10th FC"
    },
    {
        "id": "ch46-l3-q37",
        "question": "Why is the Finance Commission",
        "options": ["To save the Central FC","To maintain the principle of subsidiary and recognize that SFC has better local data.","Because the Central FC is subordinate to SFC.","Because SFC members are more senior."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional design respects the federal structure where the State level evaluates its local needs first."
    },
    {
        "id": "ch46-l3-q38",
        "question": "Analyze the impact of",
        "options": ["They are part of the divisible pool shared with states.","They are NOT part of the divisible pool, which reduces the effective share of states compared to the headline percentage recommended by FC.","Only the surcharge is shared; the cess is not.","UPSC does not consider this as a valid question."],
        "correctAnswerIndex": 1,
        "explanation": "States have long complained that the Center"
    },
    {
        "id": "ch46-l3-q39",
        "question": "Regarding",
        "options": ["They are given to all states regardless of their income.","They are specific grants (Art 275) given to states that still have a gap in their revenue accounts after receiving their share of taxes.","They are loans that must be repaid.","They are given only to Union Territories."],
        "correctAnswerIndex": 1,
        "explanation": "These grants ensure that every state reaches a certain minimum revenue level for governance."
    },
    {
        "id": "ch46-l3-q40",
        "question": "The",
        "options": ["1st FC.","10th FC (leading to 80th Amendment).","14th FC.","15th FC."],
        "correctAnswerIndex": 1,
        "explanation": "The 10th FC suggested a single pool of all central taxes, ending the previous fragmented system."
    },
    {
        "id": "ch46-l3-q41",
        "question": "In the context of horizontal devolution,",
        "options": ["Reducing taxes to help businesses.","Efforts made locally to collect taxes efficiently relative to their own capacity.","Hiring more tax collectors.","Paying more tax to the Center."],
        "correctAnswerIndex": 1,
        "explanation": "It aims to incentivize states to improve their own internal revenue generation and fiscal management."
    },
    {
        "id": "ch46-l3-q42",
        "question": "Is the Finance Commission advisory on the",
        "options": ["No, only the Finance Ministry monitors this.","Yes, as part of its","recommendations (recommending FRBM targets).","Only during a war.","Only if the states are in default."],
        "correctAnswerIndex": 1,
        "explanation": "Commissions frequently set the fiscal deficit and debt path which the Center then enforces through borrowing permissions."
    },
    {
        "id": "ch46-l3-q43",
        "question": "The Finance Commission",
        "options": ["Private and secret.","Involve cross-examination of state officials by the Chairman like a judge.","Subject to the","explicitly.","Open to the general public only."],
        "correctAnswerIndex": 1,
        "explanation": "It follows procedural fairness and has the authority to examine witnesses and demand evidence."
    },
    {
        "id": "ch46-l3-q44",
        "question": "A",
        "options": ["States are too lazy to collect tax.","The Constitution assigns massive social responsibilities to states but keeps elastic revenue sources (like customs/income tax) with the Center.","The Prime Minister takes all the money.","The Supreme Court budget is too high."],
        "correctAnswerIndex": 1,
        "explanation": "This structural imbalance is the core reason why a periodic Finance Commission is necessary for stability."
    },
    {
        "id": "ch46-l3-q45",
        "question": "Which of the following is correct regarding the",
        "options": ["It included the UTs of J&K and Ladakh in the divisible pool of states.","It suggested that UTs should be funded from the Center","share from 42 to 41% to accommodate J&K.","It abolished all grants for UTs.","It recommended that UTs should collect their own income tax."],
        "correctAnswerIndex": 1,
        "explanation": "The 1% adjustment (42 to 41) was specifically to handle the reorganization of Jammu and Kashmir into UTs."
    },
    {
        "id": "ch46-l3-q46",
        "question": "The",
        "options": ["GDP of the state.","Per Capita Income (PCI) distance from the state with highest PCI.","Distance from the nearest international airport.","Number of taxpayers in the state."],
        "correctAnswerIndex": 1,
        "explanation": "It balances the needs of states with lower revenue-generating capacity per person."
    },
    {
        "id": "ch46-l3-q47",
        "question": "Analyzing the",
        "options": ["By making the advice binding if the President signs it.","By forcing the government to lay an","explaining any deviation, thereby creating political accountability.","By allowing the FC members to vote in Parliament.","By making deviation a criminal offense."],
        "correctAnswerIndex": 1,
        "explanation": "Publicity and accountability to the legislature are the weapons of the Finance Commission in a democracy."
    },
    {
        "id": "ch46-l3-q48",
        "question": "The 14th Finance Commission recommended the",
        "options": ["Including plan and non-plan expenditure in a single devolution review.","Asking for the CMs to head the FC.","Refusing to share data with the Planning Commission.","Setting up NITI Aayog."],
        "correctAnswerIndex": 0,
        "explanation": "By moving toward a"
    },
    {
        "id": "ch46-l3-q49",
        "question": "Which of the following describes the",
        "options": ["Rewarding states for cutting more trees to build roads.","Rewarding states for maintaining and protecting their forest cover as a contribution to the global/national commons.","Giving money to states with most tigers.","Paying for zoos in the states."],
        "correctAnswerIndex": 1,
        "explanation": "It recognizes the"
    },
    {
        "id": "ch46-l3-q50",
        "question": "Can a person with",
        "options": ["Yes, if they also have public affairs experience.","No, only economists can be chairmen.","Only if they have also been the CJI.","Only if they are from the same state as the PM."],
        "correctAnswerIndex": 0,
        "explanation": "The 1951 Act requires"
    },
    {
        "id": "ch46-l3-q51",
        "question": "The",
        "options": ["Personal Income Tax.","Corporation Tax.","Surcharges and Cesses referred to in Article 271.","Customs Duties."],
        "correctAnswerIndex": 2,
        "explanation": "Cesses and surcharges are constitutionally excluded from the sharing pool."
    },
    {
        "id": "ch46-l3-q52",
        "question": "The Finance Commission",
        "options": ["Merging small states.","Recommending targets for fiscal deficit and debt for both Center and States to ensure sound finance.","Cutting the number of government departments.","Selling government gold."],
        "correctAnswerIndex": 1,
        "explanation": "This is often a key"
    },
    {
        "id": "ch46-l3-q53",
        "question": "Compare Art 275 and Art 282. Which is a",
        "options": ["275 is Statutory (FC recommended); 282 is Discretionary (Executive governed).","275 is Discretionary; 282 is Statutory.","Both are Statutory.","Both are Discretionary."],
        "correctAnswerIndex": 0,
        "explanation": "Article 275 is the formal channel through FC; 282 is used for many central schemes outside the FC purview."
    },
    {
        "id": "ch46-l3-q54",
        "question": "Is the Finance Commission",
        "options": ["Yes.","No, Article 281 makes it mandatory for the President to lay it before Parliament.","Only the parts about national security.","Only during an emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The transparency is a constitutional requirement."
    },
    {
        "id": "ch46-l3-q55",
        "question": "The",
        "options": ["Tax Effort and Demographic Performance.","Amount of FDI attracted.","Digitalization index.","Cleanliness of cities."],
        "correctAnswerIndex": 0,
        "explanation": "Efficiency factors balance the equity factors like income distance."
    },
    {
        "id": "ch46-l3-q56",
        "question": "Analyzing",
        "options": ["Rich states get 45% more money.","States with lower per capita income have a 45% weighted advantage in the distribution formula.","Middle income states get nothing.","The Center keeps 45% of the tax."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch46-l3-q57",
        "question": "The Finance Commission",
        "options": ["Power to summon any person and examine on oath.","Power to order a police raid.","Power to cancel the license of a private firm.","Power to change the CJI."],
        "correctAnswerIndex": 0,
        "explanation": "Specified in the 1951 Act and Article 280."
    },
    {
        "id": "ch46-l3-q58",
        "question": "Can a person who has been a",
        "options": ["Yes, as","in Art 319 isn","No.","Only if they have a legal background.","Only for the Chairman"],
        "correctAnswerIndex": 0,
        "explanation": "The bars in Art 319 apply to UPSC/SPSC members. FC members have no such blanket constitutional prohibition for future jobs."
    },
    {
        "id": "ch46-l3-q59",
        "question": "The",
        "options": ["The Finance Minister.","The Comptroller and Auditor General (CAG).","The RBI Governor.","The Chairman of FC."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch46-l3-q60",
        "question": "Analyze the impact of GST on the Finance Commission",
        "options": ["That SPSC should now handle GST.","The narrowing of the revenue-raising powers of states and the need for a re-assessment of their fiscal space.","That GST is a failure.","That FC should be abolished."],
        "correctAnswerIndex": 1,
        "explanation": "The commission had to evaluate the new indirect tax regime"
    }
];

export const CHAPTER_46_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
