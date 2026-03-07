import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch17-l1-q1",
        "question": "Which Part of the Indian Constitution contains the Emergency Provisions (Articles 352 to 360)?",
        "options": ["Part XV","Part XVI","Part XVII","Part XVIII"],
        "correctAnswerIndex": 3,
        "explanation": "The Emergency provisions are contained in Part XVIII of the Constitution, from Articles 352 to 360."
    },
    {
        "id": "ch17-l1-q2",
        "question": "What is the primary rationale behind incorporating emergency provisions in the Constitution?",
        "options": ["To permanently abolish state governments.","To safeguard the sovereignty, unity, integrity, and security of the country, the democratic political system, and the Constitution.","To allow the Prime Minister to rule without a parliament.","To declare war on neighboring countries automatically."],
        "correctAnswerIndex": 1,
        "explanation": "The rationality behind the incorporation of these provisions is to safeguard the sovereignty, unity, integrity and security of the country, the democratic political system, and the Constitution."
    },
    {
        "id": "ch17-l1-q3",
        "question": "During an Emergency, the constitutional structure of India transforms fundamentally. How does this transformation occur?",
        "options": ["It transforms from federal to unitary only after a formal constitutional amendment.","It transforms from federal to unitary automatically without a formal amendment of the Constitution.","It transforms from unitary to fully federal.","The Constitution is suspended entirely."],
        "correctAnswerIndex": 1,
        "explanation": "During an emergency, the Central government becomes all-powerful and the states go into the total control of the Centre. It converts the federal structure into a unitary one without a formal amendment of the Constitution."
    },
    {
        "id": "ch17-l1-q4",
        "question": "The Constitution stipulates three types of emergencies. Which of the following is NOT one of them?",
        "options": ["National Emergency (Article 352)","State Emergency / President","Judicial Emergency (Article 358)","Financial Emergency (Article 360)"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution stipulates three types: National Emergency (Art 352), State Emergency/President"
    },
    {
        "id": "ch17-l1-q5",
        "question": "Under Article 352, the President can declare a",
        "options": ["War","External aggression","Armed rebellion","Financial crisis"],
        "correctAnswerIndex": 2,
        "explanation": "The 44th Amendment Act of 1978 substituted the words ‘armed rebellion’ for ‘internal disturbance’. Thus, it is no longer possible to declare a National Emergency on the ground of ‘internal disturbance’ as was done in 1975."
    },
    {
        "id": "ch17-l1-q6",
        "question": "When a National Emergency is declared on the grounds of",
        "options": ["Internal Emergency","External Emergency","Martial Law","President"],
        "correctAnswerIndex": 1,
        "explanation": "When a national emergency is declared on the ground of ‘war’ or ‘external aggression’, it is known as ‘External Emergency’. When it is declared on the ground of ‘armed rebellion’, it is known as ‘Internal Emergency’."
    },
    {
        "id": "ch17-l1-q7",
        "question": "Before the President can proclaim a National Emergency (Article 352), what crucial procedural step is legally necessary?",
        "options": ["Consultation with the Chief Justice of India.","Approval from all State Chief Ministers.","He can declare it only after receiving a written recommendation from the Cabinet.","He can declare it solely on the advice of the Prime Minister."],
        "correctAnswerIndex": 2,
        "explanation": "The President can proclaim a national emergency only after receiving a written recommendation from the cabinet based on a decision made by the cabinet (Article 352 clause 3, added by the 44th Amendment)."
    },
    {
        "id": "ch17-l1-q8",
        "question": "Within what timeframe must a proclamation of National Emergency be approved by both Houses of Parliament to remain in operation?",
        "options": ["Within 15 days","Within one month","Within two months","Within six months"],
        "correctAnswerIndex": 1,
        "explanation": "The proclamation of Emergency must be approved by both the Houses of Parliament within one month from the date of its issue. (Originally, the period was two months, but it was reduced by the 44th Amendment)."
    },
    {
        "id": "ch17-l1-q9",
        "question": "What type of parliamentary majority is required to approve the proclamation of a National Emergency?",
        "options": ["Simple majority in Lok Sabha only","Simple majority in both Houses","Special majority (majority of the total membership of the house AND a majority of not less than two-thirds of the members present and voting) in both Houses","Absolute majority in Rajya Sabha only"],
        "correctAnswerIndex": 2,
        "explanation": "Every resolution approving the proclamation of emergency or its continuance must be passed by either House of Parliament by a special majority."
    },
    {
        "id": "ch17-l1-q10",
        "question": "Once approved by Parliament, how long does the National Emergency continue in operation before requiring another approval?",
        "options": ["For one month","For six months","For one year","Indefinitely without further approval"],
        "correctAnswerIndex": 1,
        "explanation": "If approved by both the Houses of Parliament, the emergency continues for six months, and can be extended to an indefinite period with an approval of the Parliament for every six months."
    },
    {
        "id": "ch17-l1-q11",
        "question": "The President must revoke a proclamation of National Emergency if which House of Parliament passes a resolution to disapprove its continuation?",
        "options": ["Rajya Sabha","Lok Sabha","Both Houses in a joint sitting","The State Legislatures"],
        "correctAnswerIndex": 1,
        "explanation": "The President must revoke a proclamation if the Lok Sabha passes a resolution disapproving its continuation. This safeguard was introduced by the 44th Amendment Act of 1978."
    },
    {
        "id": "ch17-l1-q12",
        "question": "During a National Emergency, the Centre gets the power to give executive directions to states on",
        "options": ["They are completely dismissed and dissolved.","They are suspended.","They continue to function, but are brought under the complete control of the Centre.","They become completely independent of the Centre."],
        "correctAnswerIndex": 2,
        "explanation": "During a national emergency, the executive power of the Centre extends to directing any state regarding the manner in which its executive power is to be exercised. State governments are not suspended but brought under complete central control."
    },
    {
        "id": "ch17-l1-q13",
        "question": "During a National Emergency, Parliament can legislate on any subject mentioned in the State List. Do the State Legislatures lose their power to make laws during this time?",
        "options": ["Yes, their legislative power is completely suspended.","No, their legislative power is not suspended, but Parliamentary laws prevail in case of conflict.","Yes, they can only make laws on the Concurrent List.","No, but they must get the President"],
        "correctAnswerIndex": 1,
        "explanation": "During a national emergency, Parliament becomes empowered to make laws on any subject mentioned in the State List. Although the legislative power of a state legislature is not suspended, it becomes subject to the overriding power of the Parliament."
    },
    {
        "id": "ch17-l1-q14",
        "question": "While a proclamation of National Emergency is in operation, the normal life of the Lok Sabha may be extended by Parliament by law. What is the maximum duration for which it can be extended at a time?",
        "options": ["Six months at a time","One year at a time","Two years at a time","Three years at a time"],
        "correctAnswerIndex": 1,
        "explanation": "While a proclamation of National Emergency is in operation, the life of the Lok Sabha may be extended beyond its normal term (five years) by a law of Parliament for one year at a time (for any length of time)."
    },
    {
        "id": "ch17-l1-q15",
        "question": "According to Article 358, when a National Emergency is proclaimed, the Fundamental Rights under a specific Article are automatically suspended. Which Article is this?",
        "options": ["Article 14","Article 19","Article 21","Article 32"],
        "correctAnswerIndex": 1,
        "explanation": "According to Article 358, when a proclamation of national emergency is made, the six Fundamental Rights under Article 19 (freedom of speech, assembly, etc.) are automatically suspended."
    },
    {
        "id": "ch17-l1-q16",
        "question": "However, under the 44th Amendment Act, the six Fundamental Rights under Article 19 can ONLY be suspended automatically (under Article 358) if the National Emergency is declared on the grounds of:",
        "options": ["Armed rebellion only","War or external aggression","Financial crisis","Internal disturbance"],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment Act of 1978 restricted Article 358: the six Fundamental Rights under Article 19 can be suspended only when the National Emergency is declared on the ground of war or external aggression and not on the ground of armed rebellion."
    },
    {
        "id": "ch17-l1-q17",
        "question": "Article 359 authorizes the President to suspend the right to move any court for the enforcement of Fundamental Rights during a National Emergency. Which two Fundamental Rights can NEVER be suspended, even during an emergency?",
        "options": ["Articles 14 and 15","Articles 20 and 21","Articles 25 and 26","Articles 32 and 226"],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment Act of 1978 provided that the President cannot suspend the right to move the Court for the enforcement of fundamental rights guaranteed by Articles 20 and 21 (protection in respect of conviction for offences and right to life and personal liberty)."
    },
    {
        "id": "ch17-l1-q18",
        "question": "How many times has a National Emergency (under Article 352) been proclaimed in India so far?",
        "options": ["Never","Two times","Three times","Five times"],
        "correctAnswerIndex": 2,
        "explanation": "This type of Emergency has been proclaimed three times so far—in 1962 (Chinese aggression), 1971 (Pakistan war), and 1975 (Internal disturbance)."
    },
    {
        "id": "ch17-l1-q19",
        "question": "Article 356 deals with the failure of constitutional machinery in states, commonly known as",
        "options": ["Federal Emergency","State Emergency","Martial Law","Executive Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 is popularly known as ‘President’s Rule’. It is also known as ‘State Emergency’ or ‘Constitutional Emergency’."
    },
    {
        "id": "ch17-l1-q20",
        "question": "Under Article 356, the President can impose President",
        "options": ["Only on a report of the Governor; he cannot act otherwise.","Otherwise too (even without the governor","On the report of the Chief Justice of the High Court.","On the written demand of the State Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 empowers the President to issue a proclamation if he is satisfied that a situation has arisen in which the government of a state cannot be carried on in accordance with the provisions of the Constitution. The president can act either on a report of the governor of the state or otherwise too (ie, even without the governor’s report)."
    },
    {
        "id": "ch17-l1-q21",
        "question": "Under Article 365, President",
        "options": ["The Election Commission’s guidelines.","Any directions given by the Centre.","International treaty obligations.","The state"],
        "correctAnswerIndex": 1,
        "explanation": "Article 365 says that whenever a state fails to comply with or to give effect to any direction from the Centre, it will be lawful for the president to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution."
    },
    {
        "id": "ch17-l1-q22",
        "question": "A proclamation imposing President",
        "options": ["One month","Two months","Six months","One year"],
        "correctAnswerIndex": 1,
        "explanation": "A proclamation imposing President’s Rule must be approved by both the Houses of Parliament within two months from the date of its issue. (Note: National Emergency is 1 month)."
    },
    {
        "id": "ch17-l1-q23",
        "question": "If approved by both Houses of Parliament, President",
        "options": ["One year","Two years","Three years","Indefinitely"],
        "correctAnswerIndex": 2,
        "explanation": "It can be extended for a maximum period of three years with the approval of the Parliament, every six months."
    },
    {
        "id": "ch17-l1-q24",
        "question": "During President",
        "options": ["It continues to function normally.","It is either suspended or dissolved by the President.","It becomes the upper house to the Lok Sabha.","It is restricted to passing only non-financial bills."],
        "correctAnswerIndex": 1,
        "explanation": "When President"
    },
    {
        "id": "ch17-l1-q25",
        "question": "Which landmark case of the Supreme Court (1994) dealt extensively with the misuse of President’s Rule under Article 356 and laid down strict guidelines for its imposition?",
        "options": ["Kesavananda Bharati case","Minerva Mills case","S.R. Bommai case","Golaknath case"],
        "correctAnswerIndex": 2,
        "explanation": "In the S.R. Bommai case (1994), the Supreme Court laid down detailed propositions on the imposition of President’s Rule, bringing it squarely under judicial review and ending the era of arbitrary dismissals of state governments."
    },
    {
        "id": "ch17-l1-q26",
        "question": "Article 360 empowers the President to proclaim a Financial Emergency if he is satisfied that a situation has arisen due to which:",
        "options": ["The state governments refuse to pay central taxes.","The financial stability or credit of India or any part of its territory is threatened.","Inflation crosses 10%.","A foreign loan is recalled."],
        "correctAnswerIndex": 1,
        "explanation": "Article 360 empowers the president to proclaim a Financial Emergency if he is satisfied that a situation has arisen due to which the financial stability or credit of India or any part of its territory is threatened."
    },
    {
        "id": "ch17-l1-q27",
        "question": "A proclamation declaring Financial Emergency must be approved by both the Houses of Parliament within what time period?",
        "options": ["One month","Two months","Six months","One year"],
        "correctAnswerIndex": 1,
        "explanation": "A proclamation declaring financial emergency must be approved by both the Houses of Parliament within two months from the date of its issue."
    },
    {
        "id": "ch17-l1-q28",
        "question": "Once approved by both Houses of Parliament, how long does a Financial Emergency continue?",
        "options": ["For exactly six months.","For exactly one year.","Indefinitely till it is revoked (no repeated legislative approval is required for its continuation).","For a maximum of three years."],
        "correctAnswerIndex": 2,
        "explanation": "Once approved by both the houses of Parliament, the Financial Emergency continues indefinitely till it is revoked. This implies that there is no maximum period prescribed for its operation and repeated parliamentary approval is not required."
    },
    {
        "id": "ch17-l1-q29",
        "question": "During a Financial Emergency, the President can issue directions for the reduction of salaries and allowances of:",
        "options": ["Only State Government employees.","Only Central Government employees.","All or any class of persons serving the Union and the States, including the Judges of the Supreme Court and the High Courts.","Only Armed Forces personnel."],
        "correctAnswerIndex": 2,
        "explanation": "During the operation of a financial emergency, the President can issue directions for the reduction of salaries and allowances of all or any class of persons serving the Union; and the judges of the Supreme Court and the high court."
    },
    {
        "id": "ch17-l1-q30",
        "question": "How many times has a Financial Emergency (under Article 360) been declared in India?",
        "options": ["Never","Once, in 1991","Twice","Three times"],
        "correctAnswerIndex": 0,
        "explanation": "No Financial Emergency has been declared so far, though there was a financial crisis in 1991."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch17-l2-q1",
        "question": "Consider the constitutional mechanics regarding the",
        "options": ["The Emergency dies instantly upon the dissolution of the Lok Sabha.","The proclamation survives if it is approved by the Rajya Sabha within that one month; it must then be approved by the newly reconstituted Lok Sabha within 30 days of its first sitting.","The President must issue a fresh proclamation every 14 days until the new Lok Sabha is formed.","The Supreme Court assumes the power to approve or disapprove the proclamation."],
        "correctAnswerIndex": 1,
        "explanation": "This is a critical survival clause. The Rajya Sabha (the permanent house) must step in and approve it within the initial one month to keep it alive. Once the new Lok Sabha is elected and sits, it has 30 days to formally approve it, otherwise the Emergency lapses."
    },
    {
        "id": "ch17-l2-q2",
        "question": "Evaluate the severe implications of the 42nd Amendment Act (1976) regarding the territorial extent of a National Emergency. How did this amendment profoundly expand the Centre",
        "options": ["It allowed the Centre to declare an emergency in neighboring countries.","It originally mandated that an emergency must apply to the entire country. The amendment empowered the President to limit the operation of a National Emergency to a specified *part* of India rather than the whole country.","It allowed the Centre to dissolve state boundaries instantly during an emergency.","It transferred emergency powers from the President directly to the Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Before the 42nd Amendment, if there was an armed rebellion in one tiny district of Assam, the President had to declare an emergency over all of India (suspending rights everywhere). The 42nd Amendment sensibly allowed the President to confine the Emergency (and its draconian effects) only to the specific disturbed geographical area."
    },
    {
        "id": "ch17-l2-q3",
        "question": "Compare the",
        "options": ["Special majority for President","Simple majority for both President","Special majority for both President","Absolute majority for President"],
        "correctAnswerIndex": 1,
        "explanation": "This highlights the stringency of Art 352. Declaring a National Emergency (which suspends Fundamental Rights) is extremely difficult post-44th Amendment, requiring a Special Majority (2/3rds present + absolute majority). Imposing President"
    },
    {
        "id": "ch17-l2-q4",
        "question": "Under Article 358, the Fundamental Rights given by Article 19 are suspended automatically upon the declaration of a National Emergency (due to war/external aggression). What happens to these suspended rights immediately AFTER the emergency ceases to operate?",
        "options": ["They must be formally restored by an Act of Parliament.","Article 19 automatically revives and comes into force. However, no legal remedy lies for anything done by the State during the emergency even if those acts violated Article 19.","They remain suspended for an additional six months","period.","Citizens can sue the State for damages incurred during the suspension period."],
        "correctAnswerIndex": 1,
        "explanation": "Article 358 provides a complete indemnity to the State. When the emergency ends, Art 19 wakes up automatically. However, if the government seized your printing press during the emergency (violating 19(1)(a) and (g)), you cannot sue them for damages *after* the emergency ends. The State"
    },
    {
        "id": "ch17-l2-q5",
        "question": "Distinguish between the suspension mechanics of Article 358 (concerning Article 19) and Article 359 (concerning other Fundamental Rights). Which of the following highlights the core functional difference?",
        "options": ["Article 358 requires a Presidential Order to activate; Article 359 is automatic.","Article 358 suspends Article 19 across the entire country automatically; Article 359 does not suspend ANY right automatically, it merely empowers the President to issue a separate Order specifying which specific rights (except 20 & 21) lose their right to court enforcement.","Article 358 applies to state emergencies; Article 359 applies to national emergencies.","Article 358 can suspend Articles 20 and 21; Article 359 cannot."],
        "correctAnswerIndex": 1,
        "explanation": "This is a vital distinction. Art 358 is a"
    },
    {
        "id": "ch17-l2-q6",
        "question": "Consider the impact of the 44th Amendment Act (1978) on Article 356 (President",
        "options": ["A National Emergency must be in operation, and the Election Commission must certify that general elections to the state assembly cannot be held.","The Supreme Court must approve the extension, and the State Governor must recommend it.","The Rajya Sabha must pass a super-majority resolution, and the UN must be notified.","The Prime Minister must invoke a Financial Emergency, and the President must agree."],
        "correctAnswerIndex": 0,
        "explanation": "Before 1978, the Centre could keep a state under direct control for 3 years easily via 6-monthly extensions. The 44th Amendment tightened this drastically. To stretch President"
    },
    {
        "id": "ch17-l2-q7",
        "question": "Regarding",
        "options": ["The 42nd Amendment Act (1976)","The 44th Amendment Act (1978)","The 52nd Amendment Act (1985)","The 73rd Amendment Act (1992)"],
        "correctAnswerIndex": 1,
        "explanation": "The 38th Amendment (passed during the 1975 Emergency) attempted to insulate the executive from judicial scrutiny. The Janata government"
    },
    {
        "id": "ch17-l2-q8",
        "question": "During President",
        "options": ["The Chief Minister (in exile).","The Supreme Court of India.","The President (or any other authority specified by him, leading to what are known as","s Acts","The Zonal Councils."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament is usually too busy to pass mundane local laws for a state under emergency. Article 357 allows Parliament to confer the law-making power onto the President. The President then passes"
    },
    {
        "id": "ch17-l2-q9",
        "question": "Assertion (A): Financial Emergency (Article 360) is the only type of emergency that does not require repeated parliamentary approval every six months to continue indefinitely.\\nReason (R): Because the Constitution makers believed that financial crises are usually short-lived and require swift, permanent executive control until the President chooses to revoke it.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is true; unlike Arts 352 and 356, Art 360 has no maximum duration and doesn"
    },
    {
        "id": "ch17-l2-q10",
        "question": "Under Article 356, when does a law made by Parliament (or the President) for a state under President",
        "options": ["Exactly six months after President","One year after President","It does NOT automatically expire. It remains in force continuously until the newly elected State Legislature specifically alters, repeals, or re-enacts it.","It drops dead the moment the new Chief Minister takes the oath."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike National Emergency laws (which die 6 months after the emergency ends), laws made under Art 357 (President"
    },
    {
        "id": "ch17-l2-q11",
        "question": "If the President decides to revoke a National Emergency, what is the required parliamentary procedure?",
        "options": ["The President needs a Simple Majority in both Houses to revoke it.","The President needs a Special Majority in the Lok Sabha to revoke it.","The President can revoke it by a subsequent proclamation at any time; NO parliamentary approval whatsoever is required for revocation.","The President must obtain the Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "While imposing or continuing an emergency requires massive parliamentary majorities, ending it is simple. The President can revoke the proclamation at any moment via an executive order. The Constitution demands no parliamentary approval to end an emergency, ensuring it can be lifted swiftly."
    },
    {
        "id": "ch17-l2-q12",
        "question": "Consider the unique democratic safeguard introduced by the 44th Amendment regarding the revocation of a National Emergency by the Lok Sabha. What specific power was granted to 1/10th of the members of the Lok Sabha?",
        "options": ["They can unilaterally declare the emergency unconstitutional.","They can give written notice to the Speaker (or President) to convene a special sitting of the Lok Sabha within 14 days solely for the purpose of considering a resolution to disapprove the continuation of the emergency.","They can suspend the Prime Minister.","They can appeal directly to the United Nations."],
        "correctAnswerIndex": 1,
        "explanation": "Before 1978, the Lok Sabha had no power to *force* the revocation of an emergency if the Prime Minister controlled the House schedule. The 44th Amendment empowered a mere 10% of MPs to force a special sitting. If that sitting passes a simple resolution disapproving the emergency, the President MUST revoke it."
    },
    {
        "id": "ch17-l2-q13",
        "question": "During a Financial Emergency (Article 360), the Centre gains immense control over State finances. Which of the following is an explicit power granted to the President regarding State budgets under this emergency?",
        "options": ["The President can dissolve the State Assembly for financial mismanagement.","The President can direct that all money bills or financial bills passed by the State Legislature MUST be reserved for his consideration, effectively giving the Centre a complete veto over state spending.","The President can transfer all state funds to foreign creditors.","The President can ban states from imposing any form of taxation."],
        "correctAnswerIndex": 1,
        "explanation": "Art 360 strips states of fiscal autonomy. The President can mandate that a state cannot pass its own budget or money bills without reserving them for Presidential (Central) approval. This ensures the Centre can severely curtail state expenditure to stabilize the national economy."
    },
    {
        "id": "ch17-l2-q14",
        "question": "Regarding",
        "options": ["The High Court","The President assumes the powers of the High Court to issue expedited judgements.","The President CANNOT assume to himself any of the powers vested in the High Court, nor can he suspend the constitutional provisions relating to High Courts.","The High Court is suspended, and military tribunals take over."],
        "correctAnswerIndex": 2,
        "explanation": "This is a critical exception in Article 356 to protect judicial independence. Even when the Centre is ruling a state directly, it cannot touch the State High Court. The High Court remains fully functional, independent, and capable of reviewing the actions of the Central authorities operating in the state during the emergency."
    },
    {
        "id": "ch17-l2-q15",
        "question": "Examine the semantic difference between",
        "options": ["A breakdown of Law and Order (e.g., a localized riot).","A breakdown of Public Order (e.g., statewide violent protests).","The","—the threat must be massive enough to genuinely endanger the nation","Any of the above can justify a National Emergency."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court (in cases like Ram Manohar Lohia) created concentric circles."
    },
    {
        "id": "ch17-l2-q16",
        "question": "Assertion (A): During a National Emergency, the President can modify the sharing of taxes between the Centre and the States (Article 354).\\nReason (R): Because the Centre requires maximum financial resources to combat the emergency, it can unilaterally reduce or even completely cancel the constitutional transfer of revenue to the States, devastating state budgets.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. Article 354 is a devastating tool. To fight a war, the Centre can issue an order suspending the recommendations of the Finance Commission. It can hoard all tax revenue (Income Tax, etc.) and stop paying statutory grants to the states, forcing states to rely entirely on their own meager local revenues until the financial year ends."
    },
    {
        "id": "ch17-l2-q17",
        "question": "What was the fundamental constitutional justification repeatedly used by Central governments (prior to 1994) to dismiss perfectly stable, majority-holding State governments of a completely different political ideology immediately after sweeping a general election at the Centre?",
        "options": ["They cited foreign interference in state elections.","They claimed that a massive mandate for a new party at the Centre inherently proved that the opposing party ruling the States had lost","and thus the constitutional machinery there had failed.","They argued that the Constitution mandates identical parties ruling the Centre and States.","They used the Financial Emergency clauses."],
        "correctAnswerIndex": 1,
        "explanation": "In 1977, the newly formed Janata Party at the Centre dismissed 9 Congress-ruled states simultaneously. In 1980, returning to power, Indira Gandhi reciprocated, dismissing 9 Janata-ruled states. The cynical argument was that a massive parliamentary victory meant the state voters had"
    },
    {
        "id": "ch17-l2-q18",
        "question": "Under the mechanics of Article 359, if the President issues an order suspending the right to move courts for the enforcement of Article 14 (Equality), what is the territorial validity of this specific Presidential Order?",
        "options": ["It must inevitably apply to the entire country.","According to the Constitution, the Order may extend to the whole or any specified part of the territory of India.","It only applies to Union Territories.","It only applies to the capital, Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "Just as the National Emergency itself can be confined to a specific geography (post-42nd Amendment), the Presidential Order under Art 359 suspending the enforcement of specific Fundamental Rights can also be geographically targeted. It doesn"
    },
    {
        "id": "ch17-l2-q19",
        "question": "Consider the phrase",
        "options": ["It was grammatically incorrect.","It was too broad and legally nebulous, allowing the executive to declare an emergency for massive peaceful protests, political opposition, or severe industrial strikes that didn","s security with violence.","It violated international human rights treaties.","The Supreme Court ordered them to change it."],
        "correctAnswerIndex": 1,
        "explanation": "Indira Gandhi used"
    },
    {
        "id": "ch17-l2-q20",
        "question": "If a National Emergency (Article 352) and President",
        "options": ["President","National Emergency allows for the suspension of Fundamental Rights (via Arts 358 & 359); President","President","There is no difference; both suspend all rights."],
        "correctAnswerIndex": 1,
        "explanation": "This is a frequent point of confusion. President"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch17-l3-q1",
        "question": "Analyze the profound implications of the S.R. Bommai v. Union of India (1994) judgement on the imposition of President’s Rule (Article 356). Which of the following principles regarding",
        "options": ["If a State passes any law that provides funding to a religious institution, the State Government must be instantly dismissed for violating the Basic Structure.","The Court held that secularism is a fundamental feature of the Constitution. Therefore, if a State Government engages in acts subverting secularism (e.g., actively supporting or failing to prevent the destruction of a religious structure by mobs belonging to the ruling party","The Court ruled that the Centre cannot dismiss a State Government under any circumstances regarding religion, as Law and Order is entirely a State subject.","The Court stated that the State Governor has the absolute, unreviewable discretion to declare a State non-secular and dismiss the Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "The Bommai judgement (contextualized post the 1992 Babri Masjid demolition where several BJP-led state governments were dismissed) solidified that"
    },
    {
        "id": "ch17-l3-q2",
        "question": "Consider the constitutional mechanics surrounding the suspension of Article 19 freedoms during a National Emergency (Article 358) versus the suspension of other Fundamental Rights (Article 359). What is the crucial difference concerning the legislative competence of the State?",
        "options": ["Under Art 358, the State can ONLY make laws contravening Art 19 if they relate to defense; under Art 359, it can make any law.","Under Art 358, the State (Centre and States) is completely freed from the restrictions of Article 19, allowing it to make *any* law or take *any* executive action abridging those six freedoms. Under Art 359, the State can only make laws or take executive actions abridging the *specifically suspended* rights (in the Presidential Order).","Art 358 applies to the whole territory of India, while Art 359 applies only to border states.","Art 358 laws remain permanently valid even after the emergency ends, while Art 359 laws expire instantly."],
        "correctAnswerIndex": 1,
        "explanation": "This tests precision. Art 358 makes Art 19 fundamentally"
    },
    {
        "id": "ch17-l3-q3",
        "question": "The 44th Amendment Act (1978) fundamentally altered the balance of emergency powers to prevent another 1975-style nightmare. Which of the following was a deliberate insertion in Article 352 designed to force the Prime Minister to act transparently, removing the possibility of a unilateral, secret declaration of National Emergency?",
        "options": ["The requirement that the President must consult the Chief Justice of India before declaring an emergency.","The requirement that the President can proclaim an emergency ONLY after receiving a *written recommendation* from the Union Cabinet (comprising Ministers of Cabinet rank) indicating that such a decision has been collectively made, destroying the fiction that the PM alone is the",".","The requirement that the President must address the nation via radio before the emergency takes effect.","The requirement that the State Governors must unanimously agree."],
        "correctAnswerIndex": 1,
        "explanation": "In 1975, PM Indira Gandhi famously advised President Fakhruddin Ali Ahmed to declare the emergency at midnight, informing her Cabinet only the next morning as a"
    },
    {
        "id": "ch17-l3-q4",
        "question": "Assertion (A): During President’s Rule (Article 356) in a State, if the Lok Sabha is not in session, the President holds the power to authorize expenditure from the Consolidated Fund of that State.\\nReason (R): Because under Article 357, when Parliament’s legislative power regarding the State is delegated to the President, it implicitly includes the absolute financial power to bypass the State",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This is a profound financial centralization mechanism. If PR is imposed and the State assembly is dissolved, the State"
    },
    {
        "id": "ch17-l3-q5",
        "question": "Examine the Supreme Court",
        "options": ["The President can dissolve the assembly instantly upon issuing the proclamation to prevent horse-trading.","The President can NEVER dissolve the assembly under any circumstances; he can only suspend it.","The President has the power to dissolve the state legislative assembly ONLY AFTER the proclamation imposing President","keep it in suspended animation","The President must hold a referendum before dissolving the assembly."],
        "correctAnswerIndex": 2,
        "explanation": "Before Bommai, the Centre would impose Art 356 and instantly dissolve the state assembly. If Parliament later rejected the proclamation, the damage was irreversible (the assembly was gone). The SC ruled that the President physically cannot kill the assembly until Parliament ratifies his action. He can only put it in a coma (suspended animation) pending parliamentary verdict."
    },
    {
        "id": "ch17-l3-q6",
        "question": "Under the mechanics of a Financial Emergency (Article 360), what profound alteration occurs regarding",
        "options": ["The President gains the power to increase the rates of existing state taxes to balance the budget.","All money bills introduced in the State Legislature must originate in the Lok Sabha.","The President can issue a direction requiring that all money bills or other financial bills (under Art 207) passed by the State Legislature must be reserved for his consideration, effectively overriding the State Governor","The State"],
        "correctAnswerIndex": 2,
        "explanation": "This is the ultimate weapon against state fiscal autonomy during a crisis. Even if a state government is functioning, it loses the power to finalize its own budget or spending bills. The Governor MUST reserve every financial bill for the President (Union Cabinet), giving the Centre a line-item veto over the sovereign spending power of the State."
    },
    {
        "id": "ch17-l3-q7",
        "question": "Consider the constitutional paradox regarding the Fundamental Rights immunity provided by the 44th Amendment. Article 359 prevents the President from suspending the right to enforce Articles 20 and 21. How did the courts logically interpret this regarding the state",
        "options": ["The courts ruled that preventive detention laws are illegal during emergencies.","The courts held that while the State can still pass preventive detention laws (as Article 22 is not immunized), the detenu retains the absolute right (under Article 21/32) to approach the courts via Habeas Corpus to challenge the legality, mala fides, or procedural flaws of the detention, preventing",".","The courts ruled that Article 21","s prior consent.","The courts held that Article 20 nullifies the need for Article 21."],
        "correctAnswerIndex": 1,
        "explanation": "During the 1975 Emergency (ADM Jabalpur case), the SC horrifyingly ruled that if Art 21 is suspended, a citizen has no locus standi to file a habeas corpus petition even if the arrest was completely malicious or illegal. The 44th Amendment fixed this. By immunizing Art 21, even during war, if the police detain you, the courts remain open. The State can detain you legally, but it must justifiable; it cannot"
    },
    {
        "id": "ch17-l3-q8",
        "question": "Assertion (A): The President can proclaim a National Emergency (Article 352) only when the actual occurrence of war, external aggression, or armed rebellion has definitively commenced.\\nReason (R): Because the Constitution strictly requires tangible violence threatening the security of India before such draconian powers suspending Fundamental Rights can be triggered.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are distinctly FALSE. Article 352 explicitly states that the President can issue the proclamation even *before* the actual occurrence of war, aggression, or rebellion"
    },
    {
        "id": "ch17-l3-q9",
        "question": "In the context of President",
        "options": ["The Governor must immediately impose President","horse-trading","The Governor must order the police to arrest the defecting MLAs.","The Governor must ask the Chief Minister to prove his majority on the floor of the Legislative Assembly. Subjective assessment by the Governor in the Raj Bhavan is constitutionally impermissible as the sole basis for dismissal.","The Governor must dissolve the assembly and call for fresh elections immediately."],
        "correctAnswerIndex": 2,
        "explanation": "Bommai revolutionized constitutional practice. Previously, Governors (acting on Centre"
    },
    {
        "id": "ch17-l3-q10",
        "question": "Analyze the rare provision of Article 365. It acts as an auxiliary trigger for Article 356 (President",
        "options": ["It enforces the principle that states must share 50% of their GST revenue with the Centre.","It enforcing the principle that the executive power of every State shall be so exercised as to ensure compliance with the laws made by Parliament and any directions issued by the Union Executive, failing which the Centre can assume that the","and take over.","It enforces the principle that state governments must hold local elections every 5 years.","It enforces the principle that the Governor has dictatorial powers over the State Cabinet."],
        "correctAnswerIndex": 1,
        "explanation": "Federalism in India has a brutal centralizing core. If the Centre issues a legal executive directive (e.g.,"
    },
    {
        "id": "ch17-l3-q11",
        "question": "Consider the profound impact of the 44th Amendment on modifying fundamental rights suspensions. While Article 358 suspends Article 19 during a war emergency, the amendment added a crucial protection clause. What specific type of laws/actions are protected from judicial review under this suspension?",
        "options": ["Only laws passed by State Legislatures are protected; Parliamentary laws can still be challenged.","Any law passed during the emergency is protected, regardless of its content.","ONLY those laws which contain a recital to the effect that such law is","are protected from being challenged under Article 19. If a state passes an ordinary law unrelated to the emergency (e.g., a mundane local tax law) violating Article 19, a citizen can still strike it down.","Only laws relating to the Armed Forces are protected."],
        "correctAnswerIndex": 2,
        "explanation": "The 44th Amendment ended the blank check of Art 358. If a National Emergency is on, and a state passes a law to acquire land arbitrarily for a mall (nothing to do with the war), that law cannot hide behind the emergency. Only laws expressly dealing with the emergency (and having a recital confirming this) gain immunity from Art 19. Ordinary laws remain vulnerable to judicial review."
    },
    {
        "id": "ch17-l3-q12",
        "question": "Examine the concept of the",
        "options": ["Secularism","Democracy (e.g., refusing to hold assembly sessions to avoid a no-confidence vote)","The Directive Principles of State Policy (e.g., failing to implement prohibition of intoxicating drinks)","Federalism (e.g., a state violently refusing to allow Central agencies to operate)"],
        "correctAnswerIndex": 2,
        "explanation": "While Secularism, Democracy, and Federalism are Basic Features whose profound subversion justifies Art 356, the Directive Principles (DPSPs) are explicitly non-justiciable (Article 37). A state failing to implement a DPSP (like banning alcohol or securing uniform civil code) does NOT constitute a breakdown of the Constitution justifying the dismissal of its government."
    },
    {
        "id": "ch17-l3-q13",
        "question": "Under the mechanics of a National Emergency (Article 352), what is the extraordinary implication regarding the legislative domains defined in Schedule VII (Union, State, Concurrent Lists)?",
        "options": ["The State List is completely deleted from the Constitution permanently.","The State List becomes practically concurrent. Parliament acquires the concurrent power to make laws with respect to *any* matter enumerated in the State List, effectively shifting India","The Union List transfers to the States to empower local defense.","Only the subjects of","and","shift to the Union List."],
        "correctAnswerIndex": 1,
        "explanation": "Normally, Parliament cannot touch the State List (Article 246). But under a National Emergency (Article 250), Parliament becomes all-powerful. It can pass laws on agriculture, health, police, etc., across the whole country. The state legislatures aren"
    },
    {
        "id": "ch17-l3-q14",
        "question": "Assertion (A): When the President imposes President’s Rule (Article 356), he possesses the absolute, unreviewable power to dismiss the State Council of Ministers headed by the Chief Minister.\\nReason (R): Because the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are emphatically FALSE today. The Bommai case destroyed the notion of"
    },
    {
        "id": "ch17-l3-q15",
        "question": "Consider the financial implications of a National Emergency (Article 352). Beyond simply altering the revenue sharing (Article 354), what other major timeline effect does a National Emergency have on the broader financial administration governed by the Constitution?",
        "options": ["It permanently abolishes the Reserve Bank of India.","Any modification order issued by the President under Article 354 (altering Centre-State revenue sharing) continues in operation only till the end of the financial year in which the Proclamation ceases to operate.","It automatically triggers a Financial Emergency under Article 360.","It requires the President to seize all private bank accounts."],
        "correctAnswerIndex": 1,
        "explanation": "If the Centre issues an order in October 2025 pulling all tax revenue to fund a war, and the war (emergency) ends in December 2025, the financial disruption doesn"
    },
    {
        "id": "ch17-l3-q16",
        "question": "What is the crucial procedural difference regarding the",
        "options": ["National Emergency requires Supreme Court approval to revoke; President","The Lok Sabha has a constitutional mechanism (via a special sitting by 1/10th members passing a resolution) to force the President to revoke a National Emergency. However, there is no such corresponding constitutional provision for the Lok Sabha to force the revocation of President’s Rule.","President","Both can only be revoked by a formal Constitutional Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "This highlights a vital safeguard disparity. The 44th Amendment empowered the Lok Sabha to kill a National Emergency by commanding the President via a simple majority resolution. However, for Art 356 (President"
    },
    {
        "id": "ch17-l3-q17",
        "question": "If a Financial Emergency is proclaimed under Article 360, what is the impact on the salaries and allowances of the judges of the Supreme Court and the High Courts?",
        "options": ["They are completely immune from any reduction to preserve judicial independence.","The President may issue directions for their reduction.","They can only be reduced if the Chief Justice of India formally consents to the reduction.","They are automatically reduced by 50% by the Constitution itself."],
        "correctAnswerIndex": 1,
        "explanation": "This is a unique provision. Usually, the salaries of higher judiciary judges cannot be varied to their disadvantage after appointment (to ensure fierce independence). However, the absolute financial survival of the state overrides this during a Financial Emergency. Art 360(4)(b) explicitly grants the President the power to direct the reduction of salaries of SC and HC judges."
    },
    {
        "id": "ch17-l3-q18",
        "question": "Examine the phrase",
        "options": ["Yes, it was expunged from the entire document to avoid authoritarianism.","No, it remains embedded in Article 355, which mandates it is the duty of the Union to protect every State against external aggression and",", thereby continuing to provide the constitutional rationale for Central intervention (like deploying CRPF) even without declaring a full National Emergency.","It only remains in the Preamble.","It was shifted to the Directive Principles of State Policy."],
        "correctAnswerIndex": 1,
        "explanation": "This is a brilliant nuance. The 44th Amendment removed"
    },
    {
        "id": "ch17-l3-q19",
        "question": "Assertion (A): During the operation of a National Emergency, the President can suspend the right to move any court for the enforcement of the Fundamental Right to Freedom of Religion (Article 25).\\nReason (R): Because Article 359 empowers the President to issue an order suspending the right to enforce any Fundamental Right, explicitly excepting only Articles 20 and 21.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This outlines the sheer terror of Art 359. Unlike Art 358 (which only hits Art 19), Art 359 allows the Executive to selectively pick which rights to"
    },
    {
        "id": "ch17-l3-q20",
        "question": "In the famous S.R. Bommai judgement, the Supreme Court laid out situations where the imposition of President’s Rule (Article 356) would be deemed",
        "options": ["Where a Ministry resigns after its defeat in the assembly and no other party is willing or able to form a ministry.","Where a constitutional direction of the Central government is disregarded by the state government.","Where the Governor recommends President","Where there is an internal subversion, for example, a government is deliberately acting against the Constitution and the law."],
        "correctAnswerIndex": 2,
        "explanation": "The Bommai Court explicitly outlawed the"
    }
];

export const CHAPTER_17_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
