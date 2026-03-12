import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch45-l1-q1",
        "question": "Article 356 empowers the President to issue a proclamation if he is satisfied that a situation has arisen in which the government of a state cannot be carried on in accordance with the provisions of the Constitution. He can act on a report from the ______ or otherwise.",
        "options": ["Chief Minister.","Governor.","High Court.","Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 356, the President can proclaim President"
    },
    {
        "id": "ch45-l1-q2",
        "question": "According to Article 365, whenever a state fails to comply with or to give effect to any direction from the Centre, it shall be ______ for the President to hold that the state government cannot be carried on as per the Constitution.",
        "options": ["Optional.","Lawful.","Unconstitutional.","Prohibited."],
        "correctAnswerIndex": 1,
        "explanation": "Article 365 provides that if a state fails to comply with any directions given by the Union in exercise of its executive power under any provisions of the Constitution, it shall be lawful for the President to invoke Article 356."
    },
    {
        "id": "ch45-l1-q3",
        "question": "Is the \\",
        "options": ["No, it is final and non-justiciable.","Yes (as established by the S.R. Bommai case).","Only if approved by the State Assembly.","Only during a National Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The landmark S.R. Bommai case (1994) firmly established that the Presidential proclamation under Article 356 is subject to judicial review based on mala fides or irrelevant grounds."
    },
    {
        "id": "ch45-l1-q4",
        "question": "A proclamation imposing President’s Rule must be approved by both Houses of Parliament within ______ from the date of its issue.",
        "options": ["One month.","Two months.","Six months.","One year."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike National Emergency which requires approval in one month, a proclamation imposing President’s Rule under Article 356 must be approved by both Houses of Parliament within two months."
    },
    {
        "id": "ch45-l1-q5",
        "question": "If approved by both Houses of Parliament, the President’s Rule continues for ______ at a time (unless revoked earlier).",
        "options": ["6 months.","1 year.","3 years.","5 years."],
        "correctAnswerIndex": 0,
        "explanation": "Once approved by Parliament, President"
    },
    {
        "id": "ch45-l1-q6",
        "question": "What is the absolute maximum period for which President’s Rule can be extended (with repeated parliamentary approval every 6 months)?",
        "options": ["1 year.","3 years.","5 years.","Indefinitely."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution prescribes a maximum period of three years for the operation of President"
    },
    {
        "id": "ch45-l1-q7",
        "question": "Every resolution approving the proclamation of President’s Rule or its continuance can be passed by ______ of either House of Parliament.",
        "options": ["A simple majority.","A special majority.","An absolute majority.","A 2/3rd majority."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike a National Emergency which requires a special majority, resolutions approving or extending President"
    },
    {
        "id": "ch45-l1-q8",
        "question": "The 44th Amendment Act (1978) introduced a constraint: beyond one year, President’s Rule can only be extended if a National Emergency is in operation AND ______ certifies that elections cannot be held.",
        "options": ["The President.","The Governor.","The Election Commission.","The Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "To prevent arbitrary long-term imposition, the 44th Amendment stipulated that beyond one year, extension is only possible if a National Emergency exists and the Election Commission certifies that holding general elections to the state assembly is difficult."
    },
    {
        "id": "ch45-l1-q9",
        "question": "When President’s Rule is imposed, the President can assume to himself the functions of the State Government and the powers of the ______.",
        "options": ["High Court.","Governor.","Speaker.","District Magistrate."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 356, the President assumes the executive functions of the state government and the powers vested in the Governor or any other executive authority in the state."
    },
    {
        "id": "ch45-l1-q10",
        "question": "The President can declare that the powers of the State Legislature are to be exercised by or under the authority of ______.",
        "options": ["The Governor.","The Parliament.","The Supreme Court.","The Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "During President"
    },
    {
        "id": "ch45-l1-q11",
        "question": "Does the President have the power to suspend or take over the powers of the High Court during President’s Rule?",
        "options": ["Yes, he also takes over judicial powers.","No. The constitutional status and powers of the High Court remain completely unaffected.","Yes, but only with the Chief Justice","Only in matters concerning the state treasury."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 explicitly prohibits the President from assuming any of the powers vested in or exercisable by the High Court, or suspending any constitutional provisions relating to the High Court."
    },
    {
        "id": "ch45-l1-q12",
        "question": "During President’s Rule, who usually carries on the administration of the state on behalf of the President?",
        "options": ["The Chief Minister (in a caretaker role).","The Governor (assisted by the Chief Secretary or advisors appointed by the President).","The local Member of Parliament.","The Chief Justice of the High Court."],
        "correctAnswerIndex": 1,
        "explanation": "In practice, the President acts through the Governor. Therefore, during President"
    },
    {
        "id": "ch45-l1-q13",
        "question": "Laws made by the Parliament (or the President/his delegate) for the state during President’s Rule become inoperative immediately after the proclamation is revoked.",
        "options": ["True, they expire the moment the rule ends.","False. They continue to be in force until repealed or amended by the State Legislature."],
        "correctAnswerIndex": 1,
        "explanation": "Any law made during President"
    },
    {
        "id": "ch45-l1-q14",
        "question": "When the Lok Sabha is not in session, the President can authorize expenditure from the ______ of the state, pending sanction by Parliament.",
        "options": ["Contingency Fund.","Consolidated Fund.","Public Account.","PM Cares Fund."],
        "correctAnswerIndex": 1,
        "explanation": "When the Lok Sabha is not in session, the President is empowered to authorize expenditure from the Consolidated Fund of the State, pending its sanction by Parliament."
    },
    {
        "id": "ch45-l1-q15",
        "question": "The President can also promulgate ordinances for the administration of the state when the Parliament is in recess during President",
        "options": ["True. The President has ordinance-making power for the state.","False. Only the Governor can issue state ordinances."],
        "correctAnswerIndex": 0,
        "explanation": "During President"
    },
    {
        "id": "ch45-l1-q16",
        "question": "Which state was the first to see the imposition of President’s Rule in 1951?",
        "options": ["Kerala.","Punjab.","West Bengal.","Andhra Pradesh."],
        "correctAnswerIndex": 1,
        "explanation": "President"
    },
    {
        "id": "ch45-l1-q17",
        "question": "Which landmark Supreme Court case laid down comprehensive guidelines for the imposition of Article 356 to prevent its misuse?",
        "options": ["Kesavananda Bharati case.","S.R. Bommai case (1994).","Minerva Mills case.","Golaknath case."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court in the S.R. Bommai case (1994) detailed extensive guidelines to check the arbitrary use of Article 356, making it subject to strict judicial scrutiny."
    },
    {
        "id": "ch45-l1-q18",
        "question": "In 1977, the Janta Party government dismissed 9 state governments ruled by the Congress party. This mass dismissal precedent was replicated by the Congress party upon returning to power in:",
        "options": ["1980.","1984.","1991.","1975."],
        "correctAnswerIndex": 0,
        "explanation": "When the Congress party returned to power at the Centre in 1980, under Indira Gandhi, it adopted the same approach and dismissed nine state governments ruled by non-Congress parties."
    },
    {
        "id": "ch45-l1-q19",
        "question": "If the Governor of a state recommends President’s Rule, is the President constitutionally bound to accept the recommendation?",
        "options": ["Yes, the Governor is the sole authority.","No. The President acts on the advice of the Union Cabinet, which may reject the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The President is not bound to accept the Governor"
    },
    {
        "id": "ch45-l1-q20",
        "question": "Can the President impose President’s Rule even without receiving a report from the Governor?",
        "options": ["Yes (under the","clause of Article 356).","No, the Governor"],
        "correctAnswerIndex": 0,
        "explanation": "Article 356 explicitly states the President can act"
    },
    {
        "id": "ch45-l1-q21",
        "question": "A National Emergency affects the relationship of the Centre with all states; President",
        "options": ["Only the concerned state under the proclamation.","All neighboring states.","All opposition-ruled states.","The entire nation financially."],
        "correctAnswerIndex": 0,
        "explanation": "While Article 352 (National Emergency) centralizes the entire federal structure across India, Article 356 (President"
    },
    {
        "id": "ch45-l1-q22",
        "question": "In a National Emergency, the State Legislature continues to function concurrently; in President",
        "options": ["Always immediately dissolved.","Either suspended or dissolved.","Transferred to the Rajya Sabha.","Unaffected."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 352, state legislatures are not suspended or dissolved. Under Article 356, the President either suspends the state legislative assembly (keeping it in suspended animation) or dissolves it entirely."
    },
    {
        "id": "ch45-l1-q23",
        "question": "According to the Bommai judgment, the power of the Governor/President to dismiss a state government is not absolute. The ______ should be the primary forum used to determine the majority.",
        "options": ["Floor Test in the Legislative Assembly.","Opinion of the Chief Justice.","Opinion Polls.","Governor"],
        "correctAnswerIndex": 0,
        "explanation": "The S.R. Bommai case cemented the principle that a Chief Minister"
    },
    {
        "id": "ch45-l1-q24",
        "question": "If the Supreme Court finds the imposition of Article 356 unconstitutional, it has the power to revive (restore) the dismissed state government and the dissolved assembly.",
        "options": ["True. The court can grant the",".","False. The court can only issue a financial penalty."],
        "correctAnswerIndex": 0,
        "explanation": "As per the Bommai ruling, if the presidential proclamation is found to be unconstitutional, the Supreme Court has the sweeping power to restore the dismissed state government and revive the suspended/dissolved legislative assembly."
    },
    {
        "id": "ch45-l1-q25",
        "question": "Dr. B.R. Ambedkar famously referred to which Article as a \\",
        "options": ["Article 352 (National Emergency).","Article 356 (President","Article 360 (Financial Emergency).","Article 32 (Constitutional Remedies)."],
        "correctAnswerIndex": 1,
        "explanation": "During the Constituent Assembly debates, Dr. Ambedkar expressed hope that Article 356 would remain a \\"
    },
    {
        "id": "ch45-l1-q26",
        "question": "President’s Rule is also known in political and constitutional parlance as:",
        "options": ["Parliamentary Emergency.","Constitutional Emergency or State Emergency.","Financial Override.","Federal Interventions."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 is popularly termed"
    },
    {
        "id": "ch45-l1-q27",
        "question": "Does a proclamation of President’s Rule affect the Fundamental Rights of the citizens in that particular state?",
        "options": ["Yes, they are automatically suspended like in Article 358.","No. It has no effect on Fundamental Rights."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike a National Emergency under Article 352, the imposition of President"
    },
    {
        "id": "ch45-l1-q28",
        "question": "Which specific Article legally deals with the \\",
        "options": ["Article 352.","Article 356.","Article 365.","Article 360."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 is titled"
    },
    {
        "id": "ch45-l1-q29",
        "question": "Under Article 357, who can exercise the legislative powers of the state once the President declares that Parliament will assume them?",
        "options": ["Parliament can delegate this power to the President or any other authority specified by him.","Only the Lok Sabha Speaker.","The State","The local District Magistrates."],
        "correctAnswerIndex": 0,
        "explanation": "Article 357 states that when Parliament assumes state legislative powers under Article 356, it is competent for Parliament to confer on the President the power of the State Legislature to make laws, or authorize him to delegate it further."
    },
    {
        "id": "ch45-l1-q30",
        "question": "According to the Supreme Court in the S.R. Bommai case, can a state government be dismissed under Article 356 for acting against \\",
        "options": ["Yes. Since Secularism is a basic feature of the Constitution, acting against it is a failure of constitutional machinery.","No. Secularism is not explicitly mentioned in Article 356."],
        "correctAnswerIndex": 0,
        "explanation": "In Bommai (1994), the SC upheld the dismissal of BJP governments in UP, MP, Rajasthan, and Himachal Pradesh post-Babri Masjid demolition, ruling that secularism is a basic feature of the Constitution, and states violating it justify Article 356 imposition."
    },
    {
        "id": "ch45-l1-q31",
        "question": "The S.R. Bommai case (1994) established that the President",
        "options": ["It is a valid ground under the \\","clause.","It is considered an \\","and \\","exercise of power.","The Governor","The Supreme Court cannot intervene in political transitions."],
        "correctAnswerIndex": 1,
        "explanation": "Dismissing a democratically elected state government merely because a new party came to power at the Centre (as done in 1977 and 1980) was explicitly struck down by the Bommai ruling as an improper and malafide exercise of power."
    },
    {
        "id": "ch45-l1-q32",
        "question": "Can the Supreme Court require the Union Government to produce the \\",
        "options": ["No, it is a privileged document shielded by Article 74(2).","Yes. While the court cannot question the","of the Cabinet, it can examine the factual","leading to that advice."],
        "correctAnswerIndex": 1,
        "explanation": "In S.R. Bommai, the SC clarified that while Article 74(2) prevents courts from inquiring into the *advice* given by Ministers to the President, it does not bar the court from demanding the actual *material* (like the Governor"
    },
    {
        "id": "ch45-l1-q33",
        "question": "If the Court declares the proclamation of President’s Rule as unconstitutional after the Legislative Assembly has been dissolved:",
        "options": ["Fresh elections must be held immediately.","The Court has the sweeping constitutional power to restore the dissolved Assembly and reinstate the dismissed Ministry.","The President","The Governor is permanently banned from holding office."],
        "correctAnswerIndex": 1,
        "explanation": "If a proclamation is struck down as mala fide, the SC is empowered to grant full"
    },
    {
        "id": "ch45-l1-q34",
        "question": "Before the 44th Amendment (1978), the Centre could keep a state under President",
        "options": ["The state must be actively protesting.","The Election Commission must certify that holding general elections to the state assembly is difficult, AND a National Emergency must be in operation.","Both (a) and (b) must be satisfied.","The Supreme Court must issue a specific certificate."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment raised a formidable wall. Beyond the initial 1 year, Parliament can only extend President’s Rule incrementally (up to 3 years) if two strict, simultaneous conditions are met: a National Emergency is active somewhere in India, AND the EC formally certifies that state elections are currently impossible."
    },
    {
        "id": "ch45-l1-q35",
        "question": "If the Lok Sabha is unfortunately dissolved after initially approving the proclamation but before the crucial 6-month period expires, what happens to the life of the emergency?",
        "options": ["The proclamation lapses immediately and irreparably.","The proclamation survives for 30 days from the first sitting of the new Lok Sabha, provided the Rajya Sabha has already approved its continuance in the interim.","The Rajya Sabha can unilaterally extend it indefinitely."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional continuity lies with the Upper House. Even if the Lok Sabha dissolves, an emergency survives if the permanent Rajya Sabha approves its continuation, keeping it legally alive until 30 days post the new Lok Sabha’s first sitting."
    },
    {
        "id": "ch45-l1-q36",
        "question": "Unlike a National Emergency (which requires a special majority), a parliamentary resolution for President’s Rule only needs a \\",
        "options": ["Because it is less legally severe than a National Emergency.","Because it strictly only affects one single state and does not obliterate the fundamental rights of all citizens nationwide.","To ensure the Union can effectively address a local systemic breakdown without being hopelessly crippled by high, cross-party legislative hurdles.","Because State subjects are inherently less vital."],
        "correctAnswerIndex": 2,
        "explanation": "Imposing President"
    },
    {
        "id": "ch45-l1-q37",
        "question": "What is the constitutional status of the State Legislative Assembly immediately after the President issues the initial Article 356 proclamation (prior to parliamentary backing)?",
        "options": ["It is automatically and instantly dissolved.","It is usually and safely kept in",".","It continues to furiously meet and pass ordinary laws.","The Governor acts as the sole legislator."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent irrevocable damage by an executive branch acting alone, the S.R. Bommai judgment ruled that a President should ideally only put the assembly in"
    },
    {
        "id": "ch45-l1-q38",
        "question": "According to the stringent S.R. Bommai guidelines, the President should absolutely NOT dissolve the democratic State Assembly until:",
        "options": ["The Governor formally recommends it three consecutive times.","Both Houses of Parliament have conclusively approved the original emergency proclamation.","The Supreme Court physically issues a",".","Six continuous months have successfully passed."],
        "correctAnswerIndex": 1,
        "explanation": "The Court established that dissolution of an assembly is an extreme step. Therefore, the President cannot use his executive power to instantly kill an assembly; he must wait for the definitive parliamentary green light supporting the proclamation before destroying the legislature."
    },
    {
        "id": "ch45-l1-q39",
        "question": "During an active President’s Rule, the Governor becomes the real, functional executive head. He is usually heavily assisted by \\",
        "options": ["Loyal local MLAs of the central ruling party.","Senior, experienced civil servants (usually retired or active IAS/IPS officers appointed by the Centre).","Sitting Members of the Rajya Sabha from that state.","Local High Court Judges working on deputation."],
        "correctAnswerIndex": 1,
        "explanation": "When democratic machinery is switched off, bureaucratic machinery takes over. The Union Home Ministry appoints senior bureaucrats (Advisors) to assist the Governor in running the complex daily administration of the state."
    },
    {
        "id": "ch45-l1-q40",
        "question": "The Parliament can legally delegate the immense power to make laws for the suspended state to the President. The President then meticulously makes \\",
        "options": ["Retrospectively approved by the state assembly later, when it reforms.","Mandatorily laid before Parliament for its subsequent scrutiny, which may modify them within 30 days.","Cosigned by the Chief Justice of India to ensure legality.","Naturally valid for only a brief 6-month period."],
        "correctAnswerIndex": 1,
        "explanation": "While Parliament delegates its legislative power to the executive President for operational speed, the President’s Acts aren"
    },
    {
        "id": "ch45-l1-q41",
        "question": "Who primarily prepares and formally presents the critical annual \\",
        "options": ["The State","The Union Finance Minister (presented and approved in the Union Parliament).","The NITI Aayog acting as a regional substitute.","The lone State Finance Secretary."],
        "correctAnswerIndex": 1,
        "explanation": "With the state assembly suspended or dissolved, the state’s massive budget loses its local authorizing body. Therefore, the Union Finance Minister assumes the duty, physically presenting the state"
    },
    {
        "id": "ch45-l1-q42",
        "question": "In the Sarkaria and Bommai frameworks, which of the following is considered a strictly \\",
        "options": ["A \\","where absolutely no single party or coalition is able to cobble together a majority even after the Governor","Where a sitting ministry has resigned following defeat, and shockingly no other opposition party is willing or able to form a government.","Where the state government is deliberately, systematically acting against the secular fabric of the Constitution.","All of the above represent textbook constitutional failures."],
        "correctAnswerIndex": 3,
        "explanation": "A hung assembly, a vacuum of leadership post-resignation, or a government actively subverting the Constitution"
    },
    {
        "id": "ch45-l1-q43",
        "question": "Conversely, which of the following is considered a blatantly \\",
        "options": ["Where the Governor arbitrarily did not allow the Ministry to legally prove its disputed majority on the physical floor of the House.","Intervening merely to forcefully settle ferocious internal factional disputes within the ruling political party of the state.","Where the state government committed an error but was not given an administrative chance or a warning to rectify a specific constitutional failure.","All of the above represent highly unconstitutional misuses."],
        "correctAnswerIndex": 3,
        "explanation": "The SC severely warned against treating Article 356 as the Centre"
    },
    {
        "id": "ch45-l1-q44",
        "question": "Does severe systemic \\",
        "options": ["Yes, always; a corrupt government is inherently unconstitutional.","No, unless the maladministration fundamentally escalates into a total, apocalyptic breakdown of the constitutional machinery itself."],
        "correctAnswerIndex": 1,
        "explanation": "The Bommai judgment was crystal clear: mere corruption or poor governance (maladministration), while terrible, is an issue for the voters to punish at the ballot box, not a constitutional premise for the Centre to forcefully overthrow a democratically elected state government."
    },
    {
        "id": "ch45-l1-q45",
        "question": "In a mighty National Emergency, the Centre",
        "options": ["The Centre entirely and physically takes over the physical state administration apparatus itself.","The Centre is restricted to making laws strictly on the Concurrent List.","The Centre only handles border defense."],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 352, the state government remains in place but follows Delhi"
    },
    {
        "id": "ch45-l1-q46",
        "question": "If a stubborn state refuses to follow a lawful Central direction given strategically under Article 256 or 257:",
        "options": ["Article 365 makes it a legally","for the immediate imposition of Article 356 (President","The Centre","The rebellious state cannot receive national funds.","Nothing happens; directions are merely advisory."],
        "correctAnswerIndex": 0,
        "explanation": "Article 365 is the constitution"
    },
    {
        "id": "ch45-l1-q47",
        "question": "While assuming sprawling legislative capabilities under President’s Rule, can the Parliament pass a law for the occupied state that severely diminishes or affects the",
        "options": ["Yes, because Parliament acts as a sovereign constitution maker during crises.","No. Article 356 definitively and explicitly prohibits the President (and by extension, Parliament) from assuming the powers to subvert or suspend the independent High Court"],
        "correctAnswerIndex": 1,
        "explanation": "To preserve judicial independence even during the darkest political breakdowns, the Constitution explicitly erects a firewall around the High Courts. Their structure, jurisdiction, and power remain utterly untouchable by Article 356."
    },
    {
        "id": "ch45-l1-q48",
        "question": "The indispensable \\",
        "options": ["In the subjective confines of the Governor","Exclusively on the physical floor of the Legislative Assembly.","Supervised directly inside the Supreme Court.","Inside the central Rashtrapati Bhavan."],
        "correctAnswerIndex": 1,
        "explanation": "The SC ruled that the Governor’s subjective assessment regarding who commands a majority is flawed. The only constitutionally valid arena to prove numerical strength is an open vote on the floor of the State Legislative Assembly."
    },
    {
        "id": "ch45-l1-q49",
        "question": "If the President",
        "options": ["They invariably lapse exactly six months after revocation.","They remain robustly in force indefinitely until the newly elected or reformed state legislature actively decides to repeal, significantly amend, or re-enact them."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike National Emergency laws which automatically die six months post-crisis, laws passed by Parliament during President"
    },
    {
        "id": "ch45-l1-q50",
        "question": "Can the Governor of the state, who is effectively acting as the central viceroy, be abruptly removed from office during the pendency of President’s Rule?",
        "options": ["No, he enjoys emergency-related tenure protections.","Yes, because legally the Governor serves purely at the absolute","of the President under Article 156, regardless of an ongoing crisis."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 does not shield the Governor. Even while managing a state under central rule, the Governor remains a Central appointee acting at the President"
    },
    {
        "id": "ch45-l1-q51",
        "question": "What is the startling difference in the maximum theoretical duration between a National Emergency and President",
        "options": ["National Emergency has an absolute 3-year cap; President","National Emergency is theoretically indefinite (with 6-month renewals); President"],
        "correctAnswerIndex": 1,
        "explanation": "An external crisis (War) might last for decades, so Article 352 has no maximum limit. However, a domestic democratic breakdown must be resolved; therefore, Article 356 structurally demands that fresh elections MUST take place within three years."
    },
    {
        "id": "ch45-l1-q52",
        "question": "While a National Emergency is primarily declared on objective grounds of War or external threats, the proclamation of President",
        "options": ["Total breakdown or \\",".","Severe localized economic depression.","Sectarian civil war."],
        "correctAnswerIndex": 0,
        "explanation": "Article 356 hinges entirely on the phrase"
    },
    {
        "id": "ch45-l1-q53",
        "question": "Which devastating constitutional emergency provides for the aggressive imposition of a \\",
        "options": ["President’s Rule.","National Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "A National Emergency (Art 352) transforms the system into a unitary one by making state legislatures strictly subordinate to Parliamentary command, yet the state assemblies themselves are not dismissed or locked out."
    },
    {
        "id": "ch45-l1-q54",
        "question": "Conversely, in which specific emergency is the \\",
        "options": ["National Emergency.","Financial Emergency.","President’s Rule."],
        "correctAnswerIndex": 2,
        "explanation": "Only under Article 356 does the Union effectively execute a bloodless coup, physically dismantling the state"
    },
    {
        "id": "ch45-l1-q55",
        "question": "The notorious 38th Amendment (1975) shockingly made the President",
        "options": ["The massive 42nd Amendment.","The corrective 44th Amendment.","The sweeping 24th Amendment.","The anti-defection 52nd Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment in 1978 was designed to dismantle the dictatorial excesses of the Emergency era, famously stripping away the"
    },
    {
        "id": "ch45-l1-q56",
        "question": "What does the highly specific constitutional phrase \\",
        "options": ["The MLAs are temporarily stripped of their citizenship.","The assembly physically exists, its MLAs retain their legal status and salaries, but it is deeply paralyzed, utterly incapable of meeting, debating, or passing laws.","The assembly is permanently dissolved, and fresh elections are inevitable."],
        "correctAnswerIndex": 1,
        "explanation": "Suspended animation is exactly what it sounds like. The assembly essentially sleeps. It is frozen in time. If a cohesive government can later be formed, the President can"
    },
    {
        "id": "ch45-l1-q57",
        "question": "The incredibly powerful phrase \\",
        "options": ["The President can bypass the Governor entirely, proactively acting on independent intelligence or information from the Union Home Ministry regarding a state","The President can whimsically declare an emergency strictly on his personal political whim.","The President acts on the sole advice of the High Court","The President must consult the neighboring state CMs."],
        "correctAnswerIndex": 0,
        "explanation": "While usually relying on a bulky Governor"
    },
    {
        "id": "ch45-l1-q58",
        "question": "Article 357(1)(a) allows the Union Parliament to \\",
        "options": ["The ruling State Governor.","The President of India.","The active Chief Justice.","The Lok Sabha Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "Because Parliament lacks the intricate time to legislate for a single state, it constitutionally delegates this formidable power directly to the President. He then enacts"
    },
    {
        "id": "ch45-l1-q59",
        "question": "Which separate emergency provision directly and almost exclusively deals with a drastic failure in the \\",
        "options": ["Article 356.","Article 357.","Article 360.","Article 280."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the political malfunction required for Article 356, Article 360 tackles severe, existential fiscal crises, allowing the Union to impose harsh austerity measures, though importantly, it does not involve dismissing the state government."
    },
    {
        "id": "ch45-l1-q60",
        "question": "Is the \\",
        "options": ["No, it is a hardcore, physical, factual assessment of the security and administrative environment preventing an election.","Yes, it is purely a subjective tool given to the ruling party."],
        "correctAnswerIndex": 0,
        "explanation": "To prevent the EC"
    },
    {
        "id": "ch45-l1-q61",
        "question": "In the context of the landmark Rameshwar Prasad vs. Union of India (2006) case, the Supreme Court unequivocally held that the dissolution of an assembly based solely on the Governor",
        "options": ["Constitutionally valid, to vigorously protect the purity and sanctity of democracy.","Blatantly unconstitutional, as the Governor aggressively cannot preemptively dissolve an assembly merely based on the","of horse-trading to deny a claimant the mandatory floor test.","A matter of absolute, immune executive discretion under Article 163."],
        "correctAnswerIndex": 1,
        "explanation": "The SC fiercely condemned"
    },
    {
        "id": "ch45-l1-q62",
        "question": "If a sweeping proclamation (Article 356) is declared demonstrably unconstitutional by the Supreme Court",
        "options": ["The old, illegally dismissed government must be magically restored immediately, regardless of reality.","The court, utilizing its inherent constitutional prudence, may refrain from forcefully restoring the old government to avoid catastrophic administrative chaos, but can simultaneously pass severe strictures against the Union.","The entire new election is retroactively, automatically declared null and void."],
        "correctAnswerIndex": 1,
        "explanation": "Although Bommai granted the immense power of restoration, courts operate practically. If a fresh democratic mandate (new election) has already occurred by the time the judgment is delivered, sweeping it away causes massive instability. The court legally decries the original illegal act but accepts the new democratic reality."
    },
    {
        "id": "ch45-l1-q63",
        "question": "The monumental Bommai judgment categorically stated that the \\",
        "options": ["Intrusive Judicial Review.","A mandatory, preemptive Parliamentary Veto.","Simultaneous approval by the NITI Aayog.","Mandatory ratification by the powerful Inter-State Council."],
        "correctAnswerIndex": 0,
        "explanation": "This was Bommai"
    },
    {
        "id": "ch45-l1-q64",
        "question": "Article 355 imposes a solemn \\",
        "options": ["A constant justification for the immediate, punitive imposition of the draconian Article 356.","A flexible framework for \\","or \\","(like forcefully deploying central forces to a single burning district) without necessarily dismissing the entire state government.","An unconstitutional way to completely bypass the Governor."],
        "correctAnswerIndex": 1,
        "explanation": "The Punchhi Commission sought to"
    },
    {
        "id": "ch45-l1-q65",
        "question": "Does a massive \\",
        "options": ["Yes, seamlessly under the vague ground of \\","","No. The Bommai guidelines meticulously specify that a localized breakdown of \\","is fundamentally not synonymous with a total, systemic breakdown of \\",""],
        "correctAnswerIndex": 1,
        "explanation": "This distinction is critical. Law and order is a State subject. Riots, while terrible, do not automatically mean the *entire constitution* has collapsed. Article 356 must be reserved strictly for situations where the state government structurally cannot function, not merely when it is managing a crisis poorly."
    },
    {
        "id": "ch45-l1-q66",
        "question": "If the vibrant Lok Sabha is unfortunately dissolved precisely at the time of the Article 356 proclamation, the permanent Rajya Sabha must definitively approve it within two months. If the Rajya Sabha actively",
        "options": ["The massive proclamation lapses immediately, instantly terminating President","The resilient President can legally re-issue it the very next day, asserting executive dominance.","The proclamation limps along and incredibly survives until the new Lok Sabha is formed."],
        "correctAnswerIndex": 0,
        "explanation": "The Rajya Sabha acts as the solitary, powerful constitutional safeguard when the lower house is absent. If the Rajya Sabha votes"
    },
    {
        "id": "ch45-l1-q67",
        "question": "The rigorous \\",
        "options": ["A crippling Lack of consolidated funds.","Immense physical difficulties in the state (like pervasive security breakdowns, devastating floods, or intractable administrative hurdles).","The Governor","The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The EC"
    },
    {
        "id": "ch45-l1-q68",
        "question": "Is the State Governor constitutionally required to respectfully consult the",
        "options": ["Yes, absolutely, as per the strict, binding mandate of Article 163.","No. This represents one of the unique \\","where the Governor acts totally independently as a Central sentinel, ignoring the Council of Ministers."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 163 drastically limits the Governor’s discretion, reporting the collapse of the very constitutional machinery that sustains those ministers is an inherent exception. The Governor acts as the President"
    },
    {
        "id": "ch45-l1-q69",
        "question": "If the President surprisingly receives a Governor",
        "options": ["He remains rigidly bound to follow the Governor","He can completely ignore the flawed report and categorically refuse to proclaim President","He must constitutionally refer the explosive matter to the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Governor’s report is not a binding writ. The ultimate constitutional trigger (the"
    },
    {
        "id": "ch45-l1-q70",
        "question": "Assertion (A): The sweeping power deployed under Article 356 is fundamentally \\",
        "options": ["Both A and R are completely true, and R is the precise, correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is profoundly false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The massive historical abuse of Article 356 fundamentally distorted the constitutional framework. Bommai effectively"
    },
    {
        "id": "ch45-l1-q71",
        "question": "Assertion (A): The Union Parliament can aggressively make laws specifically for a state under President",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false."],
        "correctAnswerIndex": 0,
        "explanation": "Article 356 is the ultimate federal override. While not touching other states, it essentially decapitates the targeted state"
    },
    {
        "id": "ch45-l1-q72",
        "question": "What legally happens to a crucial bill successfully passed by the State Legislature that was pending ominously for the Governor",
        "options": ["It violently and automatically lapses, dying with the suspended assembly.","It is cleanly transferred directly to the President for his ultimate, sovereign consideration.","It is enthusiastically signed by the Governor"],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the seamless transfer of executive power, an unsigned bill from a suspended or dissolved legislative assembly perishes. If the assembly is dissolved, the democratic mandate pushing that specific bill is extinguished, and the bill lapses."
    },
    {
        "id": "ch45-l1-q73",
        "question": "Can a terrifying \\",
        "options": ["No, they enjoy absolute, dictatorial emergency immunity.","Yes, forcefully, on the exact same grounds as any ordinary law: violating Fundamental Rights or a blatant lack of rigorous legislative competence."],
        "correctAnswerIndex": 1,
        "explanation": "Even though enacted under emergency delegations, a President"
    },
    {
        "id": "ch45-l1-q74",
        "question": "In the chaotic case of a completely fractured \\",
        "options": ["The single largest party sitting alone.","An explicit pre-poll alliance of parties miraculously formed firmly before the elections.","A chaotic post-poll alliance cobbled together blindly after the elections."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent corrupt horse-trading, the Sarkaria Commission explicitly ranks a"
    },
    {
        "id": "ch45-l1-q75",
        "question": "If the Union desperately provides \\",
        "options": ["No, this represents vicious financial blackmail.","Yes. Strictly under Article 365, if the stringent conditions structurally represent constitutionally valid executive directives, willfully ignoring them constitutes an undeniable failure."],
        "correctAnswerIndex": 1,
        "explanation": "If the Union attaches constitutional directives (concerning national security, transport, or specific fiscal protocols tied to massive central loans), and the state blatantly disobeys, the Union can indeed weaponize Article 365 (failure to follow directives) as grounds for Article 356."
    },
    {
        "id": "ch45-l1-q76",
        "question": "During an aggressive President",
        "options": ["Is ruthlessly headed by the Central Governor acting as a de-facto appellate figure.","Continues to function proudly, fiercely, and entirely independently of the Union","Can legally be abolished completely by a dictatorial Presidential decree."],
        "correctAnswerIndex": 1,
        "explanation": "To preserve the separation of powers during chaos, Article 356 explicitly creates an impenetrable constitutional wall protecting the High Court. The President gains all executive and legislative powers, but absolutely zero judicial powers over the state"
    },
    {
        "id": "ch45-l1-q77",
        "question": "Which foundational Amendment Act significantly and decisively altered the sheer duration of the initial parliamentary approval window for President",
        "options": ["The draconian 42nd Amendment.","The corrective 44th Amendment.","The sweeping 73rd Amendment.","The anti-defection 91st Amendment."],
        "correctAnswerIndex": 0,
        "explanation": "The 42nd Amendment wildly expanded federal power, allowing the Centre to keep a state under President"
    },
    {
        "id": "ch45-l1-q78",
        "question": "The esoteric legal doctrine known as the \\",
        "options": ["Article 356 is considered strictly a vague political convention rather than law.","Article 356 is a highly specific, explicit, written constitutional mechanism deliberately designed as a profound federal override for the absolute preservation of the unified Nation.","The doctrine only rigorously protects private banking institutions."],
        "correctAnswerIndex": 1,
        "explanation": "While states hold immense sovereign power under the federal structure, Article 356 acts as the ultimate"
    },
    {
        "id": "ch45-l1-q79",
        "question": "Can the constitutionally mandated \\",
        "options": ["Yes, and this profound mechanism was heavily recommended universally by the Sarkaria Commission.","No, the powerful Council is strictly barred from debating explosive political emergency provisions.","Only if the aggressive Union Home Minister grants explicit prior consent."],
        "correctAnswerIndex": 0,
        "explanation": "The Sarkaria Commission strongly advocated using the Inter-State Council (Article 263) as a robust, permanent democratic forum for states to politically confront the Centre over the malicious imposition of President"
    },
    {
        "id": "ch45-l1-q80",
        "question": "Under the stringent Article 357 framework, the sovereign Parliament can formally authorize the President to delegate the sweeping power to make laws to \\",
        "options": ["The powerful Union Home Minister directly.","The President himself, acting singularly through an intricate system of expert bureaucratic","s Acts","The active Chief Justice of India sitting on the bench.","The suspended State"],
        "correctAnswerIndex": 1,
        "explanation": "Parliament delegates state legislative powers to the President. While the President consults a consultative committee of MPs representing that state, he remains the sole legal author of the"
    },
    {
        "id": "ch45-l1-q81",
        "question": "Does the devastating, assembly-crushing \\",
        "options": ["Yes, the state","No, the Rajya Sabha is a structurally permanent, continuous body, and its resilient members resolutely possess unaffected six-year tenures regardless of the state","Only the heavily dominant ruling party"],
        "correctAnswerIndex": 1,
        "explanation": "Federal representation at the Centre is indestructible. Even if a state legislature is totally dissolved under Art 356, the Rajya Sabha MPs previously elected by that assembly cannot be recalled or suspended; their six-year terms remain ironclad."
    },
    {
        "id": "ch45-l1-q82",
        "question": "In which of the following historically charged situations is the deployment of Article 356 absolutely NOT constitutionally justified, acting in direct violation of the strict Bommai jurisprudence?",
        "options": ["Rampant, documented corruption aggressively paralyzing the current ministry.","Fierce, unmanageable internal rebellion ripping apart the ruling political party itself.","Where the ruling ministry has seemingly lost the majority purely on paper but brutally hasn","All of the above forcefully represent blatantly unconstitutional abuses."],
        "correctAnswerIndex": 3,
        "explanation": "Bommai completely outlawed using Article 356 for"
    },
    {
        "id": "ch45-l1-q83",
        "question": "The rigorous, dual-lock \\",
        "options": ["The devastating National Emergency mechanism contained in Article 352.","The intricate, sovereign Constitutional Amendment procedure in Article 368.","Both Article 352 and deeply entrenched portions of Article 368."],
        "correctAnswerIndex": 2,
        "explanation": "A National Emergency requires a staggering 2/3rds super-majority. Amending the core constitution requires a similarly massive 2/3rds super-majority. But seizing a state government under Article 356 requires only a basic, simple 50%+1 majority, making it dangerously easy for a strong Central government to execute."
    },
    {
        "id": "ch45-l1-q84",
        "question": "If a dangerously rogue State Government is actively acting in a bizarre way that creates an undeniable, imminent threat to \\",
        "options": ["Because it is an external threat, Article 352 (National Emergency) is strictly the sole, exclusive option.","Article 356 (President","failure to carry on government in accordance with the Constitution","Only the heavy military Armed Forces Special Powers Act (AFSPA) can inherently be deployed."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 is a broad constitutional hammer. A state government aggressively betraying the nation or openly funding insurgents is not simply a"
    },
    {
        "id": "ch45-l1-q85",
        "question": "Is there any strict, codified \\",
        "options": ["An inflexible 14 days.","A strict 1 month window.","Absolutely no explicit constitutional time limit precisely exists.","A tight, non-negotiable 6-month deadline."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution deliberately leaves this vaguely open. A Governor might send a frantic report, but the President (acting precisely on the political whim of the Union Cabinet) can essentially sit on it indefinitely without executing the proclamation, keeping the state politically dangling."
    },
    {
        "id": "ch45-l1-q86",
        "question": "The immensely powerful central \\",
        "options": ["The embattled Governor seeking independent help.","The dominant Central Government directly (specifically executing via the Ministry of Home Affairs).","The suspended, ghost-like State Assembly.","The actively observant Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Governor doesn"
    },
    {
        "id": "ch45-l1-q87",
        "question": "Which incredibly specific constitutional Article is universally and fearfully referred to as the ultimate \\",
        "options": ["The aggressive Article 356.","The presumption-creating Article 365.","The sweeping Article 352.","The All-India Services Article 312."],
        "correctAnswerIndex": 0,
        "explanation": "Article 356 has earned the infamous moniker of the"
    },
    {
        "id": "ch45-l1-q88",
        "question": "If exactly the devastating President",
        "options": ["It is glaringly unconstitutional as the precise, strict word","is fundamentally not mentioned within the text of Article 356.","It is absolutely, structurally constitutional as secularism operates firmly as an indestructible part of the Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The Bommai judgment famously legitimized this. The Supreme Court declared that secularism is a bedrock Basic Structure pillar. Therefore, any state government whose actions (or deliberate inactions) actively subvert secular governance is inherently failing to govern \\"
    },
    {
        "id": "ch45-l1-q89",
        "question": "The sprawling, massive daily \\",
        "options": ["Generous Central Government.","The deeply burdened State Treasury itself (the State","Shared exactly 50-50 between Delhi and the state capital.","Financed via emergency RBI printing."],
        "correctAnswerIndex": 1,
        "explanation": "The Centre only provides the political top-level management (the Governor and Advisors). The financial machinery of the state doesn"
    },
    {
        "id": "ch45-l1-q90",
        "question": "Unlike the swift, asymmetric parliamentary exit ramp built into a National Emergency, can an active President",
        "options": ["Yes, the powerful Lok Sabha retains supreme, unilateral emergency veto power over all crises.","No. It structurally lacks that specific \\","mechanism; it can legally only be decisively revoked by the President through issuing a subsequent executive proclamation.","Only the Rajya Sabha possesses that unilateral recall power."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment gave the Lok Sabha an exclusive, deadly veto over a National Emergency (Article 352). However, it did not extend that power to Article 356. To end President"
    },
    {
        "id": "ch45-l1-q91",
        "question": "Which Article of the Constitution of India provides for the establishment of a State Public Service Commission?",
        "options": ["Article 312","Article 315","Article 320","Article 323"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315 of the Constitution provides for a Public Service Commission for each State, just as it provides for a Union Public Service Commission for the Union."
    },
    {
        "id": "ch45-l1-q92",
        "question": "The Chairman and members of a State Public Service Commission are appointed by:",
        "options": ["The President of India","The Governor of the State","The Chief Minister of the State","The Chief Justice of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 316, the Chairman and other members of a State Public Service Commission are appointed by the Governor of the State."
    },
    {
        "id": "ch45-l1-q93",
        "question": "A member of the State Public Service Commission holds office for a term of:",
        "options": ["5 years or until the age of 65","6 years or until the age of 62","6 years or until the age of 65","5 years or until the age of 60"],
        "correctAnswerIndex": 1,
        "explanation": "A member of an SPSC holds office for a term of six years or until they attain the age of 62 years, whichever is earlier (as per the 41st Amendment Act, 1976)."
    },
    {
        "id": "ch45-l1-q94",
        "question": "Who is empowered to remove the Chairman or any other member of a State Public Service Commission?",
        "options": ["The Governor of the State","The President of India","The State Legislature by a 2/3rd majority","The Chief Justice of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Although the Governor appoints the members of an SPSC, they can only be removed by the President of India (and not by the Governor) on grounds specified in Article 317."
    },
    {
        "id": "ch45-l1-q95",
        "question": "The conditions of service of the Chairman and members of the SPSC are determined by:",
        "options": ["The President","The Governor","The State Legislature","The Constitution of India"],
        "correctAnswerIndex": 1,
        "explanation": "Article 318 empowers the Governor of a State to make regulations determining the number of members of the Commission and their conditions of service."
    },
    {
        "id": "ch45-l1-q96",
        "question": "To whom does a member of the SPSC submit their resignation?",
        "options": ["The President","The Governor","The Chief Minister","The Chairman of the Commission"],
        "correctAnswerIndex": 1,
        "explanation": "A member of a State Public Service Commission may resign from their office by writing under their hand addressed to the Governor of the State."
    },
    {
        "id": "ch45-l1-q97",
        "question": "The expenses of the SPSC, including salaries and allowances, are:",
        "options": ["Charged on the Consolidated Fund of the State","Voted by the State Legislative Assembly","Paid from the Consolidated Fund of India","Charged on the Contingency Fund of the State"],
        "correctAnswerIndex": 0,
        "explanation": "According to Article 322, the expenses of the State Public Service Commission are charged on the Consolidated Fund of the State, meaning they are not subject to the vote of the state legislature."
    },
    {
        "id": "ch45-l1-q98",
        "question": "The SPSC presents its annual report on its performance to:",
        "options": ["The President","The Governor","The State Legislature","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323(2) mandates that the State Commission shall present annually to the Governor of the State a report as to the work done by the Commission."
    },
    {
        "id": "ch45-l1-q99",
        "question": "A member of the SPSC (other than the Chairman) is eligible for appointment as:",
        "options": ["The Chairman of the same SPSC","The Chairman or member of the UPSC","The Chairman of any other SPSC","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 319 specifies that a member of an SPSC is eligible for appointment as the Chairman of that SPSC, or as the Chairman or a member of the UPSC, or as the Chairman of any other SPSC."
    },
    {
        "id": "ch45-l1-q100",
        "question": "The Chairman of an SPSC, upon ceasing to hold office, is eligible to become:",
        "options": ["The Chairman of the UPSC","A member of the UPSC","The Chairman of any other SPSC","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Upon ceasing to hold office, the Chairman of an SPSC is eligible for appointment as the Chairman or member of the UPSC, or as the Chairman of any other SPSC, but not for any other employment under the Government of India or a State."
    },
    {
        "id": "ch45-l1-q101",
        "question": "The retirement age of SPSC members was raised from 60 to 62 years by which Constitutional Amendment?",
        "options": ["15th Amendment Act","41st Amendment Act","42nd Amendment Act","44th Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "The 41st Constitutional Amendment Act of 1976 raised the retirement age of members of State Public Service Commissions from 60 to 62 years."
    },
    {
        "id": "ch45-l1-q102",
        "question": "Can the Governor of a state remove a member of the SPSC on the ground of insolvency?",
        "options": ["Yes, for all non-misbehaviour grounds","No, only the President can remove them on any ground","Only if the State Cabinet recommends it","Only during a state emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Even for grounds like insolvency or infirmity (which don"
    },
    {
        "id": "ch45-l1-q103",
        "question": "The Constitution mandates that as nearly as may be ______ of SPSC members should have ten years of government service experience.",
        "options": ["One-third","One-half","Two-thirds","One-fourth"],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(1) states that as nearly as may be one-half of the members of every Public Service Commission shall be persons who have held office for at least ten years under the Government."
    },
    {
        "id": "ch45-l1-q104",
        "question": "If the office of the Chairman of SPSC falls vacant, who appoints an acting Chairman?",
        "options": ["The President","The Governor","The Chief Justice of the High Court","The senior-most member automatically takes over"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor of the State is empowered to appoint one of the members of the SPSC to perform the duties of the Chairman when the office is vacant or the Chairman is unable to perform duties."
    },
    {
        "id": "ch45-l1-q105",
        "question": "The SPSC conducts examinations for recruitment to the services of reaching which level?",
        "options": ["Only Group A services","Only Group B services","The services of the State (typically Grade I and II)","All government jobs including cleaners"],
        "correctAnswerIndex": 2,
        "explanation": "The SPSC is the central recruiting agency of a State, conducting examinations for recruitment to the various services of the State, primarily Gazetted posts."
    },
    {
        "id": "ch45-l1-q106",
        "question": "Does the SPSC have any role in the recruitment of the State",
        "options": ["Yes, it conducts all recruitments","No, these are usually handled by separate boards (like the Subordinate Services Selection Board), though the SPSC may be consulted on principles","Only for police personnel","Only if the Governor specifically requests for every post"],
        "correctAnswerIndex": 1,
        "explanation": "While SPSC is the main body, many states have created separate Subordinate Services Selection Boards to handle Group C and below recruitment, leaving the SPSC to focus on senior positions."
    },
    {
        "id": "ch45-l1-q107",
        "question": "The SPSC",
        "options": ["The Chairman of the SPSC","The Speaker of the Assembly","The Governor","The Minister of Personnel"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323(2) requires the Governor to cause the SPSC"
    },
    {
        "id": "ch45-l1-q108",
        "question": "The",
        "options": ["Constitutional Body","Statutory Body","Executive Body","Non-constitutional advisory body"],
        "correctAnswerIndex": 1,
        "explanation": "While Article 315 mentions JSPSC, it is created by an Act of Parliament (statutory) rather than by the Constitution directly. The UPSC and SPSC are constitutional bodies."
    },
    {
        "id": "ch45-l1-q109",
        "question": "Who appoints the Chairman and members of a Joint State Public Service Commission?",
        "options": ["The Governors of the concerned states jointly","The President","The Prime Minister","The UPSC Chairman"],
        "correctAnswerIndex": 1,
        "explanation": "Even though a JSPSC serves multiple states, its Chairman and members are appointed by the President of India."
    },
    {
        "id": "ch45-l1-q110",
        "question": "A Joint State Public Service Commission presents its annual report to:",
        "options": ["The President","The Governors of each of the concerned states","The Parliament","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323(2) specifies that a JSPSC shall present its report to the Governor of each of the States which it serves."
    },
    {
        "id": "ch45-l1-q111",
        "question": "The number of members in an SPSC is determined by:",
        "options": ["The Constitution","The Governor","The President","The State Legislature"],
        "correctAnswerIndex": 1,
        "explanation": "Article 318 states that the Governor of a State may by regulations determine the number of members of the Commission."
    },
    {
        "id": "ch45-l1-q112",
        "question": "Can a member of SPSC be re-appointed to the same office for a second term?",
        "options": ["Yes, if the Governor approves","No, they are ineligible for re-appointment to that office","Only if they have not reached 62 years","Yes, once more"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 316(3), a person who holds office as a member of a Public Service Commission is, on the expiration of their term, ineligible for re-appointment to that office."
    },
    {
        "id": "ch45-l1-q113",
        "question": "The SPSC is consulted on which of the following?",
        "options": ["Methods of recruitment to civil services and for civil posts","Disciplinary matters affecting a person serving the State government","Claims for reimbursement of legal expenses by a civil servant","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 320(3) lists various matters where the SPSC must be consulted, including recruitment methods, disciplinary matters, and legal expense claims."
    },
    {
        "id": "ch45-l1-q114",
        "question": "Is the SPSC consulted while making reservations for any backward class of citizens?",
        "options": ["Yes, it is mandatory","No, the Constitution explicitly excludes reservation matters from SPSC consultation (Article 320(4))","Only if the High Court orders it","Only if the Governor thinks it necessary"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(4) states that nothing in Article 320(3) shall require a Public Service Commission to be consulted as respects the manner in which reservation is made for any backward class."
    },
    {
        "id": "ch45-l1-q115",
        "question": "The",
        "options": ["Article 315","Article 320","Article 323","Article 312"],
        "correctAnswerIndex": 1,
        "explanation": "The proviso to Article 320(3) allows the Governor to make regulations specifying matters in which it shall NOT be necessary for an SPSC to be consulted."
    },
    {
        "id": "ch45-l1-q116",
        "question": "Regulations made by the Governor to exclude matters from SPSC consultation must be laid before:",
        "options": ["The President","The State Legislature for at least 14 days","The UPSC","The High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(5) requires that all such regulations made by the Governor shall be laid for not less than 14 days before the State Legislature."
    },
    {
        "id": "ch45-l1-q117",
        "question": "The SPSC is described as the",
        "options": ["To ensure that only political supporters get jobs","To safeguard the merit principle in recruitment and advise on service matters","To manage the payroll of all state employees","To conduct tribal welfare programs"],
        "correctAnswerIndex": 1,
        "explanation": "The SPSC, like the UPSC, is designed to be an independent body that ensures merit-based recruitment to civil services, protecting it from political interference."
    },
    {
        "id": "ch45-l1-q118",
        "question": "If the office of the Chairman of SPSC is empty, the Governor appoints an acting Chairman from:",
        "options": ["Outside the commission","Among the members of the Commission","From the IAS cadre only","From the state judiciary"],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(1A) specifies that the Governor may appoint one of the"
    },
    {
        "id": "ch45-l1-q119",
        "question": "The JSPSC (Joint State Public Service Commission) helps in:",
        "options": ["Recruitment for central services","Framing and operating schemes of joint recruitment if requested by two or more states","Managing the border disputes between states","Abolishing the individual SPSCs"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(2) and related provisions allow states to have a joint commission to handle recruitment more efficiently if they so desire."
    },
    {
        "id": "ch45-l1-q120",
        "question": "The functions of an SPSC can be extended by the State Legislature by passing an Act. This is provided under:",
        "options": ["Article 321","Article 322","Article 323","Article 315"],
        "correctAnswerIndex": 0,
        "explanation": "Article 321 empowers the Legislature of a State to provide for the exercise of additional functions by the State Public Service Commission as respects various services."
    },
    {
        "id": "ch45-l1-q121",
        "question": "The members of a State Public Service Commission (SPSC) are appointed by the Governor, but can only be removed by the President. This constitutional arrangement is primarily designed to:",
        "options": ["Ensure administrative efficiency","Safeguard the independence of the Commission from state-level political pressure","Follow the principle of federal supremacy","Reduce the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "By vesting the power of removal in the President rather than the Governor, the Constitution provides a structural safeguard that protects SPSC members from arbitrary removal by the state executive, thereby ensuring their independence."
    },
    {
        "id": "ch45-l1-q122",
        "question": "In which of the following cases is an inquiry by the Supreme Court NOT mandatory for the removal of an SPSC member?",
        "options": ["Removal on the ground of misbehaviour","Removal if the member is adjudged an insolvent","Removal if the member is engaged during their term in any paid employment outside the duties of their office","Both (b) and (c)"],
        "correctAnswerIndex": 3,
        "explanation": "Article 317(3) allows the President to remove a member without an SC inquiry if they are (a) adjudged an insolvent, (b) engaged in outside paid employment, or (c) unfit to continue due to infirmity of mind or body. Only removal for"
    },
    {
        "id": "ch45-l1-q123",
        "question": "The conditions of service of a member of the SPSC, once determined by the Governor:",
        "options": ["Can be varied by the Governor at any time","Can be varied to their disadvantage after their appointment","Cannot be varied to their disadvantage after their appointment","Are subject to the approval of the State Legislature"],
        "correctAnswerIndex": 2,
        "explanation": "To ensure independence, Article 318(b) provides that the conditions of service of a member of a Public Service Commission shall not be varied to their disadvantage after their appointment."
    },
    {
        "id": "ch45-l1-q124",
        "question": "The Governor can appoint one of the members of the SPSC as an",
        "options": ["The office of the Chairman becomes vacant","The Chairman is unable to perform his duties due to absence","The Chairman is removed from office","Both (a) and (b)"],
        "correctAnswerIndex": 3,
        "explanation": "Article 316(1A) allows the Governor to appoint an acting Chairman if the office is vacant or if the Chairman is unable to perform duties due to absence or any other reason."
    },
    {
        "id": "ch45-l1-q125",
        "question": "If the State Government chooses to ignore the SPSC",
        "options": ["The decision is automatically invalid","The SPSC can move the High Court","A memorandum explaining the reasons for non-acceptance must be laid before the State Legislature","The Governor must dismiss the responsible minister"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323(2) mandates that if the SPSC"
    },
    {
        "id": "ch45-l1-q126",
        "question": "A",
        "options": ["An agreement between the Governors","An Act of Parliament, on the request of the legislatures of the concerned states","A resolution passed by the Rajya Sabha supported by 2/3rd majority","An executive order of the President"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(2) provides that if two or more states pass a resolution to that effect, Parliament may by law provide for the appointment of a Joint State Public Service Commission."
    },
    {
        "id": "ch45-l1-q127",
        "question": "Which of the following describes the",
        "options": ["Ineligible for any further government employment","Eligible to become Chairman of that SPSC, or Chairman/member of the UPSC, or Chairman of any other SPSC","Eligible to become a Minister in the state cabinet","Eligible only for private sector jobs"],
        "correctAnswerIndex": 1,
        "explanation": "Article 319 specifies that an SPSC member is eligible for appointment as Chairman of the same SPSC, or as Chairman/member of the UPSC, or as Chairman of any other SPSC, but not for other government employment."
    },
    {
        "id": "ch45-l1-q128",
        "question": "The SPSC",
        "options": ["Final and binding on the State Government","Purely advisory; the Government may or may not accept the recommendation","The SPSC conducts the inquiry itself","The SPSC has no role in disciplinary matters"],
        "correctAnswerIndex": 1,
        "explanation": "The SPSC"
    },
    {
        "id": "ch45-l1-q129",
        "question": "Can the UPSC serve the needs of a State?",
        "options": ["No, only the SPSC can serve a state","Yes, if the Governor of the state requests it and the President approves","Yes, automatically if the SPSC is dissolved","Only during a National Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(4) permits the UPSC to serve all or any of the needs of a State if the Governor requests it with the approval of the President."
    },
    {
        "id": "ch45-l1-q130",
        "question": "The UPSC",
        "options": ["Article 315","Article 320(2)","Article 321","Article 323"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(2) specifically mandates the UPSC to assist States in framing and operating schemes of joint recruitment if requested by two or more States."
    },
    {
        "id": "ch45-l1-q131",
        "question": "The",
        "options": ["State Election Commission","State Vigilance Commission and Administrative Tribunals","State Human Rights Commission","State Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The emergence of State Vigilance Commissions (on disciplinary matters) and Administrative Tribunals (on service disputes) has overlapped with and sometimes diminished the traditional scope of the SPSC"
    },
    {
        "id": "ch45-l1-q132",
        "question": "In case of a",
        "options": ["The President as he is the appointing authority","The Union Home Minister","The Governor of each of the participating states","The UPSC for review"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323(2) requires a Joint Commission to present its report to the Governor of each of the States which it serves, even though members are appointed by the President."
    },
    {
        "id": "ch45-l1-q133",
        "question": "The",
        "options": ["The Governors of the states","An Act of Parliament","The President","A Presidential order, after consulting the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 322 provides that expenses of a JSPSC shall be charged on the Consolidated Funds of the States, shared in such proportions as the President may by order determine. However, the JSPSC itself is created by a parliamentary law."
    },
    {
        "id": "ch45-l1-q134",
        "question": "Which of the following is NOT a ground for the removal of an SPSC member by the President?",
        "options": ["Adjudged an insolvent","Engaged in paid employment outside the commission","Failure to win a state-level award for excellence","Unfit to continue by reason of infirmity of mind or body"],
        "correctAnswerIndex": 2,
        "explanation": "The grounds for removal are specific (insolvency, outside employment, infirmity, or misbehaviour). Performance metrics or lack of awards are not constitutional grounds for removal."
    },
    {
        "id": "ch45-l1-q135",
        "question": "The SPSC must be consulted on the",
        "options": ["Recruitment function","Advisory function","Administrative function","Quasi-judicial function"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(3)(b) requires consultation on the principles to be followed in making promotions and transfers, which is an advisory function."
    },
    {
        "id": "ch45-l1-q136",
        "question": "Can the SPSC be given the task of recruiting for a local body (like a Municipal Corporation)?",
        "options": ["No, its mandate is only for state civil services","Yes, if the State Legislature passes an act extending its functions under Article 321","Only if the Supreme Court orders it","Only with the approval of the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 allows the State Legislature to extend the SPSC"
    },
    {
        "id": "ch45-l1-q137",
        "question": "While making regulations to",
        "options": ["The SPSC itself","The State Council of Ministers","The High Court","The President"],
        "correctAnswerIndex": 1,
        "explanation": "Like most of the Governor"
    },
    {
        "id": "ch45-l1-q138",
        "question": "The SPSC",
        "options": ["Judicial review of the commission","Democratic accountability of the executive to the legislature","Financial transparency of the commission","Abolition of the commission if needed"],
        "correctAnswerIndex": 1,
        "explanation": "The memorandum requirement ensures that the government cannot ignore the SPSC"
    },
    {
        "id": "ch45-l1-q139",
        "question": "Which of the following describes the",
        "options": ["It can sentence corrupt officers to prison","It acts as a witness in criminal trials","It advises on disciplinary matters and claims for reimbursement, performing an adjudicatory-like assessment of facts and merits","It has no quasi-judicial nature at all"],
        "correctAnswerIndex": 2,
        "explanation": "The SPSC performs a quasi-judicial function when it assesses disciplinary cases and claims for legal reimbursements, providing its independent judgment on the merits of the case."
    },
    {
        "id": "ch45-l1-q140",
        "question": "The State Election Commission and SPSC differ in that:",
        "options": ["One is constitutional, the other is not","The SEC is appointed by the Governor, while the SPSC is appointed by the President","The SEC handles local body elections, while the SPSC handles recruitment to state services; both are constitutional bodies","There is no difference; they are the same body"],
        "correctAnswerIndex": 2,
        "explanation": "Both are independent constitutional bodies but operate in completely different thematic areas: one in electoral administration and the other in personnel administration."
    },
    {
        "id": "ch45-l1-q141",
        "question": "The",
        "options": ["3 months","6 months","1 year (if so provided in the exemption regulations)","Infinite periods if the Governor orders"],
        "correctAnswerIndex": 2,
        "explanation": "Governors often make regulations under the proviso to Article 320(3) allowing temporary appointments for up to 1 year without consulting the SPSC. However, prolonged ad-hocism has been criticized by courts."
    },
    {
        "id": "ch45-l1-q142",
        "question": "The",
        "options": ["State Public Service Commission","Subordinate Services Selection Board (SSSB)","State Administrative Tribunal","District Selection Committee"],
        "correctAnswerIndex": 1,
        "explanation": "To relieve the SPSC of the burden of Group C and D recruitment, most states have established SSSBs or similar boards, often through an Act of Legislature or executive order."
    },
    {
        "id": "ch45-l1-q143",
        "question": "The SPSC",
        "options": ["Dismissal and removal from service","Compulsory retirement","Reduction in rank","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 320(3)(c) specifies that all disciplinary matters affecting a person serving the government must be referred to the Commission."
    },
    {
        "id": "ch45-l1-q144",
        "question": "The SPSC",
        "options": ["The SPSC conducts the training itself at the State Administrative Training Institute","The SPSC has no mandate in training; it is the responsibility of the State","The SPSC determines the training syllabus","The SPSC must be consulted on training modules"],
        "correctAnswerIndex": 1,
        "explanation": "Recruitment is the SPSC"
    },
    {
        "id": "ch45-l1-q145",
        "question": "If a State Civil Service officer is promoted to the IAS (an All India Service), who is the consulting body?",
        "options": ["The SPSC of the concerned state","The UPSC","The SPSC and UPSC must agree","No consultation is needed"],
        "correctAnswerIndex": 1,
        "explanation": "Since the IAS is an All India Service, promotion of state-cadre officers to the IAS is handled by the UPSC, although the SPSC may be involved in the initial preparation of the eligibility list at the state level."
    },
    {
        "id": "ch45-l1-q146",
        "question": "The",
        "options": ["Cannot discuss the expenses","Can discuss but cannot vote on the expenses","Must vote and approve the expenses every year","Can reduce the expenses as they see fit"],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch45-l1-q147",
        "question": "The 41st Amendment (1976) raised SPSC retirement age to 62. This was done primarily to:",
        "options": ["Ensure symmetry with High Court judges who also retire at 62","Match the UPSC retirement age of 65","Reduce the number of vacancies","Follow a Supreme Court directive"],
        "correctAnswerIndex": 0,
        "explanation": "The retirement age of SPSC members was aligned with that of High Court judges to ensure a similar level of institutional dignity and protection."
    },
    {
        "id": "ch45-l1-q148",
        "question": "Which of the following correctly identifies SPSC members",
        "options": ["Members are eligible for re-appointment to the same post","Chairmen are eligible for re-appointment to the same post","Members are ineligible for re-appointment to the same post, but can be appointed as SPSC Chairman or UPSC member/Chairman","There is no bar on re-appointment whatsoever"],
        "correctAnswerIndex": 2,
        "explanation": "Article 316(3) prohibits re-appointment to the same post to prevent the potential for seeking government favor towards the end of the term."
    },
    {
        "id": "ch45-l1-q149",
        "question": "Is the",
        "options": ["Yes, if they meet the 10-year experience requirement (though usually they would come from the judiciary/law side)","No, never","Only after retiring as Advocate General","Only with the High Court"],
        "correctAnswerIndex": 0,
        "explanation": "There is no constitutional bar. As long as the appointment satisfies the one-half criteria for 10-year service (if applicable) and other requirements, an Advocate General could be appointed."
    },
    {
        "id": "ch45-l1-q150",
        "question": "The Governor",
        "options": ["Subject to the State Legislature","Binding and cannot be challenged in court","Exercise of an executive-legislative power vested solely in the Governor","Subordinate to the UPSC"],
        "correctAnswerIndex": 2,
        "explanation": "Article 318 gives the Governor the specific power to regulate the commission"
    },
    {
        "id": "ch45-l1-q151",
        "question": "Assertion (A): The Governor has the power to appoint the Chairman and members of the State Public Service Commission (SPSC), but he cannot remove them. Reason (R): This dual constitutional mechanism (President for removal, Governor for appointment) is intended to ensure that the Commission is insulated from the immediate political influence of the state executive while maintaining the federal structure.",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is NOT the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "This constitutional provision is a key safeguard. By making the Governor (state executive) the appointing authority but the President (union executive) the removing authority, the Constitution creates a hurdle for any arbitrary state-level political interference in the Commission"
    },
    {
        "id": "ch45-l1-q152",
        "question": "The phrase",
        "options": ["Mandatory and non-negotiable; any violation voids the commission","Directory in nature; non-compliance doesn","s validly taken decisions","Applicable only to the UPSC, not the SPSCs","Applicable only to the Chairman, not other members"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court in several cases (e.g., in relation to state commissions) has held that this provision is"
    },
    {
        "id": "ch45-l1-q153",
        "question": "Imagine a situation where the SPSC Chairman is suspended by the Governor pending an inquiry into his misbehaviour. Which of the following is correct regarding this suspension?",
        "options": ["The Governor cannot suspend an SPSC member; only the President can","Article 317(2) specifically empowers the Governor to suspend an SPSC member against whom a reference has been made to the Supreme Court until the President passes orders on receipt of the SC report","Suspension is automatically mandatory once an inquiry is ordered","Suspension can only be done with the approval of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "While the President is the removing authority, Article 317(2) recognizes the Governor"
    },
    {
        "id": "ch45-l1-q154",
        "question": "A Joint State Public Service Commission (JSPSC) is created by an Act of Parliament on the request of the state legislatures. How does this impact its constitutional status compared to an SPSC?",
        "options": ["It loses all constitutional protections","It remains a constitutional body as it is provided for in Article 315, although its","is through a statutory process (Act of Parliament)","It becomes a subordinate department of the UPSC","It can only be dissolved by a constitutional amendment"],
        "correctAnswerIndex": 1,
        "explanation": "Though created by an Act of Parliament (statutory procedure), its existence and functions are anchored in Article 315 of the Constitution. Thus, it enjoys the same constitutional duties and independence safeguards as the UPSC and SPSC."
    },
    {
        "id": "ch45-l1-q155",
        "question": "The",
        "options": ["No, this is a purely internal matter of the executive","Yes, the High Court under Article 226 can issue a writ of Mandamus to compel the government to fulfill this constitutional obligation, as held in various judicial precedents","Only the Governor can compel the government","Only the President can intervene"],
        "correctAnswerIndex": 1,
        "explanation": "The requirement in Article 323(2) is a constitutional duty. Failure to perform it can be challenged in the High Court, as it bypasses the legislative oversight mechanism designed by the Constitution."
    },
    {
        "id": "ch45-l1-q156",
        "question": "Compare the",
        "options": ["SPSC advice is mandatory, while the AG","Both are advisory, but the SPSC","s advice to the government is confidential and protected by executive privilege","The AG","Neither has any constitutional basis for giving advice"],
        "correctAnswerIndex": 1,
        "explanation": "While both provide expert advice, the SPSC"
    },
    {
        "id": "ch45-l1-q157",
        "question": "If a State Legislature passes an Act to transfer the recruitment of",
        "options": ["Article 315","Article 321 (Power to extend functions of Public Service Commissions)","The Concurrent List, Entry 25","The Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 specifically allows for the extension of the commission"
    },
    {
        "id": "ch45-l1-q158",
        "question": "The",
        "options": ["It strengthens the SPSC by reducing its workload","It poses a challenge to the","role of the SPSC, as it bypasses the Article 320 recruitment process and often ignores the advice on principles of appointment","It is mandatory under Article 315","The SPSC itself recommends contractual appointments"],
        "correctAnswerIndex": 1,
        "explanation": "Extensive use of contractual or ad-hoc appointments for posts that fall under the SPSC"
    },
    {
        "id": "ch45-l1-q159",
        "question": "If the State Government wishes to",
        "options": ["Just issue an executive order","Make regulations under the proviso to Article 320(3) and LAY them for 14 days before the State Legislature. The legislature has the power to modify or annul them.","Get the prior approval of the President","Amend the Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The power to exclude is not absolute; it is subject to legislative oversight. Under Article 320(5), any regulations made by the Governor for exclusion must be laid before the legislature, which can modify or annul them."
    },
    {
        "id": "ch45-l1-q160",
        "question": "Assertion (A): SPSC members are, on the expiration of their term,",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is NOT the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The bar on re-appointment (Article 316(3)) is a recognized constitutional safeguard common to many independent bodies (like CAG, etc.) to ensure that they act fearlessly during their fixed tenure."
    },
    {
        "id": "ch45-l1-q161",
        "question": "Upon ceasing to hold office, the Chairman of an SPSC can be appointed as:",
        "options": ["Chairman of any other SPSC or SPSC of the same state","Member or Chairman of the UPSC, or Chairman of any other SPSC","Governor of the same State","Vice-Chancellor of a State University"],
        "correctAnswerIndex": 1,
        "explanation": "Article 319(d) clarifies the eligibility: a retired SPSC Chairman can move to another SPSC as Chairman, or to the UPSC as a member or Chairman. They are ineligible for other state/central government jobs."
    },
    {
        "id": "ch45-l1-q162",
        "question": "The SPSC",
        "options": ["Yes, completely","No, while not legally binding, it is","binding because the reasons for rejection must be explained in the memorandum laid before the legislature, exposing the government to public and legislative scrutiny","It is binding if the Governor agrees with the SPSC","It is binding in cases of major penalties only"],
        "correctAnswerIndex": 1,
        "explanation": "The consequence is"
    },
    {
        "id": "ch45-l1-q163",
        "question": "The",
        "options": ["The Chief Minister","The Governor and High Court Judges","The Speaker of the Assembly","All of the above"],
        "correctAnswerIndex": 1,
        "explanation": "The expenses of the SPSC, the Governor, and the High Court are all"
    },
    {
        "id": "ch45-l1-q164",
        "question": "If a State Legislature abolishes the SPSC and replaces it with a",
        "options": ["It is valid if passed by a 2/3rd majority","It is unconstitutional as it violates Article 315, which mandates that","Such an abolition would require a constitutional amendment under Article 368.","It is valid because recruitment is a state subject","It is valid if the President gives his assent"],
        "correctAnswerIndex": 1,
        "explanation": "Since Article 315 uses the word"
    },
    {
        "id": "ch45-l1-q165",
        "question": "The",
        "options": ["The SPSC sets its own domicile rules","Article 16(3) empowers only PARLIAMENT to make any law prescribing requirement as to residence for employment in a state. The SPSC must follow the law passed by Parliament or the rules as they exist, and cannot unilaterally impose domicile restrictions.","The SPSC ignores residency completely","The High Court determines the domicile quota"],
        "correctAnswerIndex": 1,
        "explanation": "The power to bridge the residency requirements for state jobs lies with the Parliament under Article 16(3), not the SPSC or the State Legislature, to avoid regionalism from undermining national unity."
    },
    {
        "id": "ch45-l1-q166",
        "question": "The",
        "options": ["The next meeting of the State Assembly","A new Chairman is appointed by the Governor","The suspended Chairman returns to duty","Either (b) or (c), as the case may be"],
        "correctAnswerIndex": 3,
        "explanation": "Article 316(1A) specifies that the acting Chairman performs the duties until a person is appointed to the office (in case of vacancy) or until the original holder resumes their duties (in case of absence)."
    },
    {
        "id": "ch45-l1-q167",
        "question": "The 41st Amendment (1976) changed the retirement age from 60 to 62. Which of the following bodies were affected by this change?",
        "options": ["Only the SPSC","Only the JSPSC","Both SPSC and JSPSC","UPSC, SPSC, and JSPSC"],
        "correctAnswerIndex": 2,
        "explanation": "The 41st Amendment Act applied to both the State Public Service Commissions and the Joint State Public Service Commissions, while the UPSC retirement age remained at 65."
    },
    {
        "id": "ch45-l1-q168",
        "question": "Assertion (A): The President",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is NOT the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "This judicial inquiry (Article 317) is a crucial protection. It ensures that"
    },
    {
        "id": "ch45-l1-q169",
        "question": "When the SPSC",
        "options": ["The State Government (charged on the Consolidated Fund)","The public institution concerned, as provided in the Act extending the functions","The Union Government","The SPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 322 specifies that expenses shall be charged on the Consolidated Fund of the State. However, when functions are extended under Article 321, the enabling law usually specifies the financial arrangements, which typically involve reimbursement by the institution served."
    },
    {
        "id": "ch45-l1-q170",
        "question": "If a candidate is selected by the SPSC, does he/she have an ABSOLUTE right to be appointed to the post?",
        "options": ["Yes, the selection is binding","No, the Supreme Court has held (in State of Haryana v. Subhash Chander) that the government is not bound to fill all or any of the vacancies; selection only gives a right to be considered for appointment.","Yes, unless the High Court stays the appointment","Only if the candidate is from the majority community"],
        "correctAnswerIndex": 1,
        "explanation": "A standard principle in administrative law: the SPSC"
    },
    {
        "id": "ch45-l1-q171",
        "question": "The SPSC",
        "options": ["The SPSC cannot advise if a SAT case is pending","If the officer approaches SAT after the government passes a final order based on SPSC advice, SAT can review the entire process and set it aside, effectively serving as an adjudicatory check on an advisory process.","SAT advice is more binding than SPSC advice","There is no overlap between the two"],
        "correctAnswerIndex": 1,
        "explanation": "SAT is a quasi-judicial adjudicatory body. If the government"
    },
    {
        "id": "ch45-l1-q172",
        "question": "Which of the following describes the difference in",
        "options": ["Judges are removed after a parliamentary address, while Commission members are removed after a Supreme Court inquiry (Article 317)","Commission members are removed by the Prime Minister directly","Both are removed by the same process","Commission members have no protection"],
        "correctAnswerIndex": 0,
        "explanation": "The removal processes are distinct: judicial removal (Article 124/217) is a parliamentary process (impeachment), whereas SPSC/UPSC removal (Article 317) is an executive-judicial process involving an SC inquiry."
    },
    {
        "id": "ch45-l1-q173",
        "question": "If a state wishes to create a",
        "options": ["Article 315 – the primacy of the SPSC","Article 321 – that any extension of SPSC functions to non-state services must be done by an Act of Legislature","Article 14 – for non-discriminatory criteria","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Such a code must satisfy the SPSC"
    },
    {
        "id": "ch45-l1-q174",
        "question": "The SPSC is a",
        "options": ["Its ability to fix its own budget without government interference","The charged nature of its expenses on the Consolidated Fund and the fixed tenure of its members, protected from arbitrary removal","Its power to appoint the Chief Secretary","Its power to declare state-level holidays"],
        "correctAnswerIndex": 1,
        "explanation": "Structural autonomy is provided by Article 322 (charged expenditure) and Article 317 (protected removal process), making it difficult for the executive to coerce the commission financially or personally."
    },
    {
        "id": "ch45-l1-q175",
        "question": "If the office of both Chairperson and Vice-Chairperson is vacant in an SPSC:",
        "options": ["The UPSC takes over","The Governor appoints a member to act as Chairperson; there is no constitutional post of","in the SPSC (unlike UPSC which might have it in rules)","The Chief Justice of High Court takes over","The senior most IAS officer becomes the Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution only provides for a"
    },
    {
        "id": "ch45-l1-q176",
        "question": "In the",
        "options": ["The SPSC must follow these judicial guidelines even if they conflict with state government policy","The SPSC obeys only the Governor","The SPSC has no say in reservation","The SPSC must decide its own reservation policy"],
        "correctAnswerIndex": 0,
        "explanation": "The SPSC, as a constitutional body, is bound by the"
    },
    {
        "id": "ch45-l1-q177",
        "question": "Article 318 allows the Governor to make regulations. Can these regulations restrict the power of the Commission to choose its own examination method?",
        "options": ["Yes, the Governor has total control","No, the","is a constitutional duty of the SPSC under Article 320, and subordinate legislation (Governor","Only with the High Court","Only during a financial emergency"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor"
    },
    {
        "id": "ch45-l1-q178",
        "question": "Regarding the JSPSC (Joint SPSC), which of the following is correct?",
        "options": ["It can be created by a Presidential ordinance","It is a statutory body, and thus its members do not have the same protection as SPSC members","Its members have the SAME protection as SPSC members (Article 317) even though it is created by an Act of Parliament","It is abolished by the 44th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "Article 317 applies to"
    },
    {
        "id": "ch45-l1-q179",
        "question": "The SPSC",
        "options": ["The JSPSC mechanism","One SPSC advising another","The SPSC Chairman attending an annual conference for best practices","Either (a) or (c)"],
        "correctAnswerIndex": 3,
        "explanation": "Interstate cooperation is institutionalized either through a Joint Commission (Article 315(2)) or through voluntary conferences and collaborations facilitated by the UPSC."
    },
    {
        "id": "ch45-l1-q180",
        "question": "Which of the following captures the essence of the SPSC",
        "options": ["It prevents the Governor from becoming a dictator","It provides a buffer between political patronage and bureaucratic excellence, ensuring that","remains the primary criteria for serving the state","It ensures that all state jobs are reserved for locals","It manages the state"],
        "correctAnswerIndex": 1,
        "explanation": "The essence of both UPSC and SPSC is meritocracy. By being an independent body, it shields the recruitment process from the daily pulls and pressures of party politics."
    },
    {
        "id": "ch45-l1-q181",
        "question": "Which Article of the Constitution provides for the establishment of a State Public Service Commission (SPSC)?",
        "options": ["Article 312","Article 315","Article 320","Article 324"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315 provides for a Public Service Commission for each State along with the Union."
    },
    {
        "id": "ch45-l1-q182",
        "question": "The Chairman and members of a State Public Service Commission are appointed by:",
        "options": ["The President of India","The Governor of the State","The Chief Minister of the State","The Chairman of the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "According to Article 316, the Chairman and members of an SPSC are appointed by the Governor of the respective state."
    },
    {
        "id": "ch45-l1-q183",
        "question": "Who has the power to remove the Chairman or any member of a State Public Service Commission?",
        "options": ["The Governor of the State","The President of India","The State Legislature","The Chief Justice of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Although appointed by the Governor, the Chairman and members of an SPSC can be removed ONLY by the President of India (Article 317)."
    },
    {
        "id": "ch45-l1-q184",
        "question": "What is the tenure of a member of the State Public Service Commission?",
        "options": ["5 years or 62 years of age","6 years or 62 years of age","6 years or 65 years of age","5 years or 65 years of age"],
        "correctAnswerIndex": 1,
        "explanation": "A member of an SPSC holds office for a term of six years or until he attains the age of 62 years, whichever is earlier. (UPSC is 65 years)."
    },
    {
        "id": "ch45-l1-q185",
        "question": "A member of the State Public Service Commission submits his resignation to:",
        "options": ["The President of India","The Governor of the State","The Chairman of the UPSC","The Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "A member of an SPSC can resign by addressing his resignation in writing to the Governor of the State."
    },
    {
        "id": "ch45-l1-q186",
        "question": "The expenses of a State Public Service Commission are charged on the:",
        "options": ["Consolidated Fund of India","Consolidated Fund of the State","Contingency Fund of the State","Public Account of India"],
        "correctAnswerIndex": 1,
        "explanation": "The expenses of an SPSC are charged on the Consolidated Fund of the respective State (Article 322)."
    },
    {
        "id": "ch45-l1-q187",
        "question": "A member of an SPSC, on ceasing to hold office, is eligible for which of the following?",
        "options": ["Further employment under the same State Government","Appointment as Chairman or member of UPSC","Appointment as Chairman of any other SPSC","Both 2 and 3"],
        "correctAnswerIndex": 3,
        "explanation": "Article 319 provides for such appointments but bars any other employment under the Government of India or a State."
    },
    {
        "id": "ch45-l1-q188",
        "question": "Who determines the number of members of a State Public Service Commission?",
        "options": ["The Parliament","The State Legislature","The Governor of the State","The Constitution of India"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not specify the strength of the SPSC; it is decided by the Governor through regulations."
    },
    {
        "id": "ch45-l1-q189",
        "question": "To whom does the State Public Service Commission submit its annual report?",
        "options": ["The President of India","The Governor of the State","The Speaker of the Lok Sabha","The Union Home Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The SPSC presents its annual report to the Governor, who then lays it before the State Legislature."
    },
    {
        "id": "ch45-l1-q190",
        "question": "Is the SPSC consulted on matters related to disciplinary actions against state civil servants?",
        "options": ["Yes, it is mandatory","No, only for Group A","Only if the Chief Minister permits","No, never"],
        "correctAnswerIndex": 0,
        "explanation": "Article 320 specifies that the SPSC must be consulted on disciplinary matters affecting a person serving in a civil capacity."
    },
    {
        "id": "ch45-l1-q191",
        "question": "Can the Chairman of the UPSC be appointed as the Chairman of an SPSC?",
        "options": ["Yes.","No, he is ineligible for any further employment under the government.","Only after a cooling-off period of 5 years.","Only if the Governor of the State invites him."],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman of UPSC is ineligible for any further employment under the Government of India or a State."
    },
    {
        "id": "ch45-l1-q192",
        "question": "The State Public Service Commission is which type of body?",
        "options": ["Statutory Body","Constitutional Body","Executive Body","Optional Body"],
        "correctAnswerIndex": 1,
        "explanation": "It is established directly under Article 315 of the Constitution."
    },
    {
        "id": "ch45-l1-q193",
        "question": "Who can extend the functions of a State Public Service Commission?",
        "options": ["The Governor","The State Legislature by an act","The Parliament","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The State Legislature may provide for the exercise of additional functions by the SPSC by passing an act (Article 321)."
    },
    {
        "id": "ch45-l1-q194",
        "question": "What is the",
        "options": ["They must be lawyers.","At least half must have 10 years of government service experience.","They must be from the same state.","There is no merit requirement mentioned."],
        "correctAnswerIndex": 1,
        "explanation": "Article 316 specifies that as nearly as may be one-half of the members should have held office for ten years under either the Government of India or a State."
    },
    {
        "id": "ch45-l1-q195",
        "question": "Can a member of SPSC be re-appointed to the same office for a second term?",
        "options": ["Yes.","No, he is ineligible for re-appointment to THAT office.","Only if the State Legislature approves.","Only if his first term was less than 3 years."],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(3) prohibits re-appointment to the same office to ensure independence."
    },
    {
        "id": "ch45-l1-q196",
        "question": "Who acts as the",
        "options": ["State Human Rights Commission","State Public Service Commission","High Court","Lokayukta"],
        "correctAnswerIndex": 1,
        "explanation": "SPSC ensures that selection for state civil services is done on a merit basis."
    },
    {
        "id": "ch45-l1-q197",
        "question": "Which of the following is NOT within the purview of SPSC consultation?",
        "options": ["Methods of recruitment to state services.","Principles of promotions and transfers.","Implementation of reservations for SC/ST.","Disciplinary matters."],
        "correctAnswerIndex": 2,
        "explanation": "Reservation implementation is an executive decision by the government (Art 16(4))."
    },
    {
        "id": "ch45-l1-q198",
        "question": "The President can remove an SPSC member for misbehaviour after an inquiry by:",
        "options": ["The State High Court","The Supreme Court","The Governor","The Legislative Assembly"],
        "correctAnswerIndex": 1,
        "explanation": "Article 317(1) specifies the Supreme Court for inquiries regarding misbehaviour of ANY Public Service Commission member."
    },
    {
        "id": "ch45-l1-q199",
        "question": "Can a member of SPSC be appointed as a member of the UPSC?",
        "options": ["Yes.","No.","Only if the Rajya Sabha agrees.","Only if he is less than 50 years old."],
        "correctAnswerIndex": 0,
        "explanation": "Yes, Article 319 allows movement to the Union commission."
    },
    {
        "id": "ch45-l1-q200",
        "question": "The Governor can appoint an",
        "options": ["The Chairman dies or resigns.","The Chairman is unable to perform his duties due to absence or other reasons.","Both 1 and 2.","Only if the High Court orders so."],
        "correctAnswerIndex": 2,
        "explanation": "Added by the 15th Amdt, the Governor has this power for administrative continuity."
    },
    {
        "id": "ch45-l1-q201",
        "question": "Is the UPSC required to help a State PSC if requested?",
        "options": ["No, they are separate.","Yes, if the Governor of the State requests and the President of India approves.","Yes, automatically if the SPSC Chairman asks.","Only during a financial emergency."],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(4) allows UPSC to serve a state"
    },
    {
        "id": "ch45-l1-q202",
        "question": "If an SPSC recommendation is not accepted by the State Government, the government must:",
        "options": ["Give a public apology.","Explain the reasons to the State Legislature.","Pay a fine to the Commission.","Resign immediately."],
        "correctAnswerIndex": 1,
        "explanation": "Article 323(2) mandates a"
    },
    {
        "id": "ch45-l1-q203",
        "question": "What is the retirement age for a member of a Joint State Public Service Commission (JSPSC)?",
        "options": ["60 years","62 years","65 years","70 years"],
        "correctAnswerIndex": 1,
        "explanation": "Members of SPSC and JSPSC both retire at 62 years."
    },
    {
        "id": "ch45-l1-q204",
        "question": "Which of the following describes",
        "options": ["Managerial posts.","Technical advisory posts.","Clerical and execution level posts.","Ministerial posts."],
        "correctAnswerIndex": 2,
        "explanation": "Group C and D are generally non-gazetted support staff."
    },
    {
        "id": "ch45-l1-q205",
        "question": "Can a person be a member of more than one SPSC at the same time?",
        "options": ["Yes.","No.","Only if those states are in the same zone.","Only if they are neighboring states."],
        "correctAnswerIndex": 1,
        "explanation": "The full-time nature and specific state allegiances usually prohibit this."
    },
    {
        "id": "ch45-l1-q206",
        "question": "The State PSC handles recruitment for which of the following?",
        "options": ["State Civil Services.","Lower Judiciary (Civil Judges/Munsiffs).","State Police Service.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "SPSC is the central recruitment body for all major state-level officer cadres."
    },
    {
        "id": "ch45-l1-q207",
        "question": "The term of",
        "options": ["Is appointed by the Governor.","Enters upon his office.","Passes the qualifying test.","Turns 50."],
        "correctAnswerIndex": 1,
        "explanation": "The tenure is calculated from the date of taking charge."
    },
    {
        "id": "ch45-l1-q208",
        "question": "A member of SPSC can be removed if he is",
        "options": ["The Supreme Court.","The President (directly, without SC inquiry).","The Governor.","The High Court."],
        "correctAnswerIndex": 1,
        "explanation": "Grounds like insolvency, holding office of profit, or infirmity don"
    },
    {
        "id": "ch45-l1-q209",
        "question": "Is the SPSC consultation mandatory for the",
        "options": ["Yes, for all transfers.","No, only for transfers from one service to another specifically mentioned as promotion/suitability check.","Only if the Minister disagrees.","Yes, but only for IAS officers."],
        "correctAnswerIndex": 1,
        "explanation": "Routine administrative transfers are not within SPSC purview; only those involving suitability for a different post/rank are."
    },
    {
        "id": "ch45-l1-q210",
        "question": "Who appoints the Chairman of a",
        "options": ["State Governors jointly.","President of India.","Chairman of UPSC.","Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Even though it serves states, the members of a JSPSC are appointed by the President."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch45-l2-q1",
        "question": "The members of a State Public Service Commission (SPSC) are appointed by the Governor, but can only be removed by the President. This constitutional arrangement is primarily designed to:",
        "options": ["Ensure administrative efficiency","Safeguard the independence of the Commission from state-level political pressure","Follow the principle of federal supremacy","Reduce the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "By vesting the power of removal in the President rather than the Governor, the Constitution provides a structural safeguard that protects SPSC members from arbitrary removal by the state executive, thereby ensuring their independence."
    },
    {
        "id": "ch45-l2-q2",
        "question": "In which of the following cases is an inquiry by the Supreme Court NOT mandatory for the removal of an SPSC member?",
        "options": ["Removal on the ground of misbehaviour","Removal if the member is adjudged an insolvent","Removal if the member is engaged during their term in any paid employment outside the duties of their office","Both (b) and (c)"],
        "correctAnswerIndex": 3,
        "explanation": "Article 317(3) allows the President to remove a member without an SC inquiry if they are (a) adjudged an insolvent, (b) engaged in outside paid employment, or (c) unfit to continue due to infirmity of mind or body. Only removal for"
    },
    {
        "id": "ch45-l2-q3",
        "question": "The conditions of service of a member of the SPSC, once determined by the Governor:",
        "options": ["Can be varied by the Governor at any time","Can be varied to their disadvantage after their appointment","Cannot be varied to their disadvantage after their appointment","Are subject to the approval of the State Legislature"],
        "correctAnswerIndex": 2,
        "explanation": "To ensure independence, Article 318(b) provides that the conditions of service of a member of a Public Service Commission shall not be varied to their disadvantage after their appointment."
    },
    {
        "id": "ch45-l2-q4",
        "question": "The Governor can appoint one of the members of the SPSC as an",
        "options": ["The office of the Chairman becomes vacant","The Chairman is unable to perform his duties due to absence","The Chairman is removed from office","Both (a) and (b)"],
        "correctAnswerIndex": 3,
        "explanation": "Article 316(1A) allows the Governor to appoint an acting Chairman if the office is vacant or if the Chairman is unable to perform duties due to absence or any other reason."
    },
    {
        "id": "ch45-l2-q5",
        "question": "If the State Government chooses to ignore the SPSC",
        "options": ["The decision is automatically invalid","The SPSC can move the High Court","A memorandum explaining the reasons for non-acceptance must be laid before the State Legislature","The Governor must dismiss the responsible minister"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323(2) mandates that if the SPSC"
    },
    {
        "id": "ch45-l2-q6",
        "question": "A",
        "options": ["An agreement between the Governors","An Act of Parliament, on the request of the legislatures of the concerned states","A resolution passed by the Rajya Sabha supported by 2/3rd majority","An executive order of the President"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(2) provides that if two or more states pass a resolution to that effect, Parliament may by law provide for the appointment of a Joint State Public Service Commission."
    },
    {
        "id": "ch45-l2-q7",
        "question": "Which of the following describes the",
        "options": ["Ineligible for any further government employment","Eligible to become Chairman of that SPSC, or Chairman/member of the UPSC, or Chairman of any other SPSC","Eligible to become a Minister in the state cabinet","Eligible only for private sector jobs"],
        "correctAnswerIndex": 1,
        "explanation": "Article 319 specifies that an SPSC member is eligible for appointment as Chairman of the same SPSC, or as Chairman/member of the UPSC, or as Chairman of any other SPSC, but not for other government employment."
    },
    {
        "id": "ch45-l2-q8",
        "question": "The SPSC",
        "options": ["Final and binding on the State Government","Purely advisory; the Government may or may not accept the recommendation","The SPSC conducts the inquiry itself","The SPSC has no role in disciplinary matters"],
        "correctAnswerIndex": 1,
        "explanation": "The SPSC"
    },
    {
        "id": "ch45-l2-q9",
        "question": "Can the UPSC serve the needs of a State?",
        "options": ["No, only the SPSC can serve a state","Yes, if the Governor of the state requests it and the President approves","Yes, automatically if the SPSC is dissolved","Only during a National Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(4) permits the UPSC to serve all or any of the needs of a State if the Governor requests it with the approval of the President."
    },
    {
        "id": "ch45-l2-q10",
        "question": "The UPSC",
        "options": ["Article 315","Article 320(2)","Article 321","Article 323"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(2) specifically mandates the UPSC to assist States in framing and operating schemes of joint recruitment if requested by two or more States."
    },
    {
        "id": "ch45-l2-q11",
        "question": "The",
        "options": ["State Election Commission","State Vigilance Commission and Administrative Tribunals","State Human Rights Commission","State Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The emergence of State Vigilance Commissions (on disciplinary matters) and Administrative Tribunals (on service disputes) has overlapped with and sometimes diminished the traditional scope of the SPSC"
    },
    {
        "id": "ch45-l2-q12",
        "question": "In case of a",
        "options": ["The President as he is the appointing authority","The Union Home Minister","The Governor of each of the participating states","The UPSC for review"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323(2) requires a Joint Commission to present its report to the Governor of each of the States which it serves, even though members are appointed by the President."
    },
    {
        "id": "ch45-l2-q13",
        "question": "The",
        "options": ["The Governors of the states","An Act of Parliament","The President","A Presidential order, after consulting the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 322 provides that expenses of a JSPSC shall be charged on the Consolidated Funds of the States, shared in such proportions as the President may by order determine. However, the JSPSC itself is created by a parliamentary law."
    },
    {
        "id": "ch45-l2-q14",
        "question": "Which of the following is NOT a ground for the removal of an SPSC member by the President?",
        "options": ["Adjudged an insolvent","Engaged in paid employment outside the commission","Failure to win a state-level award for excellence","Unfit to continue by reason of infirmity of mind or body"],
        "correctAnswerIndex": 2,
        "explanation": "The grounds for removal are specific (insolvency, outside employment, infirmity, or misbehaviour). Performance metrics or lack of awards are not constitutional grounds for removal."
    },
    {
        "id": "ch45-l2-q15",
        "question": "The SPSC must be consulted on the",
        "options": ["Recruitment function","Advisory function","Administrative function","Quasi-judicial function"],
        "correctAnswerIndex": 1,
        "explanation": "Article 320(3)(b) requires consultation on the principles to be followed in making promotions and transfers, which is an advisory function."
    },
    {
        "id": "ch45-l2-q16",
        "question": "Can the SPSC be given the task of recruiting for a local body (like a Municipal Corporation)?",
        "options": ["No, its mandate is only for state civil services","Yes, if the State Legislature passes an act extending its functions under Article 321","Only if the Supreme Court orders it","Only with the approval of the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 allows the State Legislature to extend the SPSC"
    },
    {
        "id": "ch45-l2-q17",
        "question": "While making regulations to",
        "options": ["The SPSC itself","The State Council of Ministers","The High Court","The President"],
        "correctAnswerIndex": 1,
        "explanation": "Like most of the Governor"
    },
    {
        "id": "ch45-l2-q18",
        "question": "The SPSC",
        "options": ["Judicial review of the commission","Democratic accountability of the executive to the legislature","Financial transparency of the commission","Abolition of the commission if needed"],
        "correctAnswerIndex": 1,
        "explanation": "The memorandum requirement ensures that the government cannot ignore the SPSC"
    },
    {
        "id": "ch45-l2-q19",
        "question": "Which of the following describes the",
        "options": ["It can sentence corrupt officers to prison","It acts as a witness in criminal trials","It advises on disciplinary matters and claims for reimbursement, performing an adjudicatory-like assessment of facts and merits","It has no quasi-judicial nature at all"],
        "correctAnswerIndex": 2,
        "explanation": "The SPSC performs a quasi-judicial function when it assesses disciplinary cases and claims for legal reimbursements, providing its independent judgment on the merits of the case."
    },
    {
        "id": "ch45-l2-q20",
        "question": "The State Election Commission and SPSC differ in that:",
        "options": ["One is constitutional, the other is not","The SEC is appointed by the Governor, while the SPSC is appointed by the President","The SEC handles local body elections, while the SPSC handles recruitment to state services; both are constitutional bodies","There is no difference; they are the same body"],
        "correctAnswerIndex": 2,
        "explanation": "Both are independent constitutional bodies but operate in completely different thematic areas: one in electoral administration and the other in personnel administration."
    },
    {
        "id": "ch45-l2-q21",
        "question": "The",
        "options": ["3 months","6 months","1 year (if so provided in the exemption regulations)","Infinite periods if the Governor orders"],
        "correctAnswerIndex": 2,
        "explanation": "Governors often make regulations under the proviso to Article 320(3) allowing temporary appointments for up to 1 year without consulting the SPSC. However, prolonged ad-hocism has been criticized by courts."
    },
    {
        "id": "ch45-l2-q22",
        "question": "The",
        "options": ["State Public Service Commission","Subordinate Services Selection Board (SSSB)","State Administrative Tribunal","District Selection Committee"],
        "correctAnswerIndex": 1,
        "explanation": "To relieve the SPSC of the burden of Group C and D recruitment, most states have established SSSBs or similar boards, often through an Act of Legislature or executive order."
    },
    {
        "id": "ch45-l2-q23",
        "question": "The SPSC",
        "options": ["Dismissal and removal from service","Compulsory retirement","Reduction in rank","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 320(3)(c) specifies that all disciplinary matters affecting a person serving the government must be referred to the Commission."
    },
    {
        "id": "ch45-l2-q24",
        "question": "The SPSC",
        "options": ["The SPSC conducts the training itself at the State Administrative Training Institute","The SPSC has no mandate in training; it is the responsibility of the State","The SPSC determines the training syllabus","The SPSC must be consulted on training modules"],
        "correctAnswerIndex": 1,
        "explanation": "Recruitment is the SPSC"
    },
    {
        "id": "ch45-l2-q25",
        "question": "If a State Civil Service officer is promoted to the IAS (an All India Service), who is the consulting body?",
        "options": ["The SPSC of the concerned state","The UPSC","The SPSC and UPSC must agree","No consultation is needed"],
        "correctAnswerIndex": 1,
        "explanation": "Since the IAS is an All India Service, promotion of state-cadre officers to the IAS is handled by the UPSC, although the SPSC may be involved in the initial preparation of the eligibility list at the state level."
    },
    {
        "id": "ch45-l2-q26",
        "question": "The",
        "options": ["Cannot discuss the expenses","Can discuss but cannot vote on the expenses","Must vote and approve the expenses every year","Can reduce the expenses as they see fit"],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch45-l2-q27",
        "question": "The 41st Amendment (1976) raised SPSC retirement age to 62. This was done primarily to:",
        "options": ["Ensure symmetry with High Court judges who also retire at 62","Match the UPSC retirement age of 65","Reduce the number of vacancies","Follow a Supreme Court directive"],
        "correctAnswerIndex": 0,
        "explanation": "The retirement age of SPSC members was aligned with that of High Court judges to ensure a similar level of institutional dignity and protection."
    },
    {
        "id": "ch45-l2-q28",
        "question": "Which of the following correctly identifies SPSC members",
        "options": ["Members are eligible for re-appointment to the same post","Chairmen are eligible for re-appointment to the same post","Members are ineligible for re-appointment to the same post, but can be appointed as SPSC Chairman or UPSC member/Chairman","There is no bar on re-appointment whatsoever"],
        "correctAnswerIndex": 2,
        "explanation": "Article 316(3) prohibits re-appointment to the same post to prevent the potential for seeking government favor towards the end of the term."
    },
    {
        "id": "ch45-l2-q29",
        "question": "Is the",
        "options": ["Yes, if they meet the 10-year experience requirement (though usually they would come from the judiciary/law side)","No, never","Only after retiring as Advocate General","Only with the High Court"],
        "correctAnswerIndex": 0,
        "explanation": "There is no constitutional bar. As long as the appointment satisfies the one-half criteria for 10-year service (if applicable) and other requirements, an Advocate General could be appointed."
    },
    {
        "id": "ch45-l2-q30",
        "question": "The Governor",
        "options": ["Subject to the State Legislature","Binding and cannot be challenged in court","Exercise of an executive-legislative power vested solely in the Governor","Subordinate to the UPSC"],
        "correctAnswerIndex": 2,
        "explanation": "Article 318 gives the Governor the specific power to regulate the commission"
    },
    {
        "id": "ch45-l2-q31",
        "question": "The S.R. Bommai case (1994) established that the President",
        "options": ["It is a valid ground under the \\","clause.","It is considered an \\","and \\","exercise of power.","The Governor","The Supreme Court cannot intervene in political transitions."],
        "correctAnswerIndex": 1,
        "explanation": "Dismissing a democratically elected state government merely because a new party came to power at the Centre (as done in 1977 and 1980) was explicitly struck down by the Bommai ruling as an improper and malafide exercise of power."
    },
    {
        "id": "ch45-l2-q32",
        "question": "Can the Supreme Court require the Union Government to produce the \\",
        "options": ["No, it is a privileged document shielded by Article 74(2).","Yes. While the court cannot question the","of the Cabinet, it can examine the factual","leading to that advice."],
        "correctAnswerIndex": 1,
        "explanation": "In S.R. Bommai, the SC clarified that while Article 74(2) prevents courts from inquiring into the *advice* given by Ministers to the President, it does not bar the court from demanding the actual *material* (like the Governor"
    },
    {
        "id": "ch45-l2-q33",
        "question": "If the Court declares the proclamation of President’s Rule as unconstitutional after the Legislative Assembly has been dissolved:",
        "options": ["Fresh elections must be held immediately.","The Court has the sweeping constitutional power to restore the dissolved Assembly and reinstate the dismissed Ministry.","The President","The Governor is permanently banned from holding office."],
        "correctAnswerIndex": 1,
        "explanation": "If a proclamation is struck down as mala fide, the SC is empowered to grant full"
    },
    {
        "id": "ch45-l2-q34",
        "question": "Before the 44th Amendment (1978), the Centre could keep a state under President",
        "options": ["The state must be actively protesting.","The Election Commission must certify that holding general elections to the state assembly is difficult, AND a National Emergency must be in operation.","Both (a) and (b) must be satisfied.","The Supreme Court must issue a specific certificate."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment raised a formidable wall. Beyond the initial 1 year, Parliament can only extend President’s Rule incrementally (up to 3 years) if two strict, simultaneous conditions are met: a National Emergency is active somewhere in India, AND the EC formally certifies that state elections are currently impossible."
    },
    {
        "id": "ch45-l2-q35",
        "question": "If the Lok Sabha is unfortunately dissolved after initially approving the proclamation but before the crucial 6-month period expires, what happens to the life of the emergency?",
        "options": ["The proclamation lapses immediately and irreparably.","The proclamation survives for 30 days from the first sitting of the new Lok Sabha, provided the Rajya Sabha has already approved its continuance in the interim.","The Rajya Sabha can unilaterally extend it indefinitely."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional continuity lies with the Upper House. Even if the Lok Sabha dissolves, an emergency survives if the permanent Rajya Sabha approves its continuation, keeping it legally alive until 30 days post the new Lok Sabha’s first sitting."
    },
    {
        "id": "ch45-l2-q36",
        "question": "Unlike a National Emergency (which requires a special majority), a parliamentary resolution for President’s Rule only needs a \\",
        "options": ["Because it is less legally severe than a National Emergency.","Because it strictly only affects one single state and does not obliterate the fundamental rights of all citizens nationwide.","To ensure the Union can effectively address a local systemic breakdown without being hopelessly crippled by high, cross-party legislative hurdles.","Because State subjects are inherently less vital."],
        "correctAnswerIndex": 2,
        "explanation": "Imposing President"
    },
    {
        "id": "ch45-l2-q37",
        "question": "What is the constitutional status of the State Legislative Assembly immediately after the President issues the initial Article 356 proclamation (prior to parliamentary backing)?",
        "options": ["It is automatically and instantly dissolved.","It is usually and safely kept in",".","It continues to furiously meet and pass ordinary laws.","The Governor acts as the sole legislator."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent irrevocable damage by an executive branch acting alone, the S.R. Bommai judgment ruled that a President should ideally only put the assembly in"
    },
    {
        "id": "ch45-l2-q38",
        "question": "According to the stringent S.R. Bommai guidelines, the President should absolutely NOT dissolve the democratic State Assembly until:",
        "options": ["The Governor formally recommends it three consecutive times.","Both Houses of Parliament have conclusively approved the original emergency proclamation.","The Supreme Court physically issues a",".","Six continuous months have successfully passed."],
        "correctAnswerIndex": 1,
        "explanation": "The Court established that dissolution of an assembly is an extreme step. Therefore, the President cannot use his executive power to instantly kill an assembly; he must wait for the definitive parliamentary green light supporting the proclamation before destroying the legislature."
    },
    {
        "id": "ch45-l2-q39",
        "question": "During an active President’s Rule, the Governor becomes the real, functional executive head. He is usually heavily assisted by \\",
        "options": ["Loyal local MLAs of the central ruling party.","Senior, experienced civil servants (usually retired or active IAS/IPS officers appointed by the Centre).","Sitting Members of the Rajya Sabha from that state.","Local High Court Judges working on deputation."],
        "correctAnswerIndex": 1,
        "explanation": "When democratic machinery is switched off, bureaucratic machinery takes over. The Union Home Ministry appoints senior bureaucrats (Advisors) to assist the Governor in running the complex daily administration of the state."
    },
    {
        "id": "ch45-l2-q40",
        "question": "The Parliament can legally delegate the immense power to make laws for the suspended state to the President. The President then meticulously makes \\",
        "options": ["Retrospectively approved by the state assembly later, when it reforms.","Mandatorily laid before Parliament for its subsequent scrutiny, which may modify them within 30 days.","Cosigned by the Chief Justice of India to ensure legality.","Naturally valid for only a brief 6-month period."],
        "correctAnswerIndex": 1,
        "explanation": "While Parliament delegates its legislative power to the executive President for operational speed, the President’s Acts aren"
    },
    {
        "id": "ch45-l2-q41",
        "question": "Who primarily prepares and formally presents the critical annual \\",
        "options": ["The State","The Union Finance Minister (presented and approved in the Union Parliament).","The NITI Aayog acting as a regional substitute.","The lone State Finance Secretary."],
        "correctAnswerIndex": 1,
        "explanation": "With the state assembly suspended or dissolved, the state’s massive budget loses its local authorizing body. Therefore, the Union Finance Minister assumes the duty, physically presenting the state"
    },
    {
        "id": "ch45-l2-q42",
        "question": "In the Sarkaria and Bommai frameworks, which of the following is considered a strictly \\",
        "options": ["A \\","where absolutely no single party or coalition is able to cobble together a majority even after the Governor","Where a sitting ministry has resigned following defeat, and shockingly no other opposition party is willing or able to form a government.","Where the state government is deliberately, systematically acting against the secular fabric of the Constitution.","All of the above represent textbook constitutional failures."],
        "correctAnswerIndex": 3,
        "explanation": "A hung assembly, a vacuum of leadership post-resignation, or a government actively subverting the Constitution"
    },
    {
        "id": "ch45-l2-q43",
        "question": "Conversely, which of the following is considered a blatantly \\",
        "options": ["Where the Governor arbitrarily did not allow the Ministry to legally prove its disputed majority on the physical floor of the House.","Intervening merely to forcefully settle ferocious internal factional disputes within the ruling political party of the state.","Where the state government committed an error but was not given an administrative chance or a warning to rectify a specific constitutional failure.","All of the above represent highly unconstitutional misuses."],
        "correctAnswerIndex": 3,
        "explanation": "The SC severely warned against treating Article 356 as the Centre"
    },
    {
        "id": "ch45-l2-q44",
        "question": "Does severe systemic \\",
        "options": ["Yes, always; a corrupt government is inherently unconstitutional.","No, unless the maladministration fundamentally escalates into a total, apocalyptic breakdown of the constitutional machinery itself."],
        "correctAnswerIndex": 1,
        "explanation": "The Bommai judgment was crystal clear: mere corruption or poor governance (maladministration), while terrible, is an issue for the voters to punish at the ballot box, not a constitutional premise for the Centre to forcefully overthrow a democratically elected state government."
    },
    {
        "id": "ch45-l2-q45",
        "question": "In a mighty National Emergency, the Centre",
        "options": ["The Centre entirely and physically takes over the physical state administration apparatus itself.","The Centre is restricted to making laws strictly on the Concurrent List.","The Centre only handles border defense."],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 352, the state government remains in place but follows Delhi"
    },
    {
        "id": "ch45-l2-q46",
        "question": "If a stubborn state refuses to follow a lawful Central direction given strategically under Article 256 or 257:",
        "options": ["Article 365 makes it a legally","for the immediate imposition of Article 356 (President","The Centre","The rebellious state cannot receive national funds.","Nothing happens; directions are merely advisory."],
        "correctAnswerIndex": 0,
        "explanation": "Article 365 is the constitution"
    },
    {
        "id": "ch45-l2-q47",
        "question": "While assuming sprawling legislative capabilities under President’s Rule, can the Parliament pass a law for the occupied state that severely diminishes or affects the",
        "options": ["Yes, because Parliament acts as a sovereign constitution maker during crises.","No. Article 356 definitively and explicitly prohibits the President (and by extension, Parliament) from assuming the powers to subvert or suspend the independent High Court"],
        "correctAnswerIndex": 1,
        "explanation": "To preserve judicial independence even during the darkest political breakdowns, the Constitution explicitly erects a firewall around the High Courts. Their structure, jurisdiction, and power remain utterly untouchable by Article 356."
    },
    {
        "id": "ch45-l2-q48",
        "question": "The indispensable \\",
        "options": ["In the subjective confines of the Governor","Exclusively on the physical floor of the Legislative Assembly.","Supervised directly inside the Supreme Court.","Inside the central Rashtrapati Bhavan."],
        "correctAnswerIndex": 1,
        "explanation": "The SC ruled that the Governor’s subjective assessment regarding who commands a majority is flawed. The only constitutionally valid arena to prove numerical strength is an open vote on the floor of the State Legislative Assembly."
    },
    {
        "id": "ch45-l2-q49",
        "question": "If the President",
        "options": ["They invariably lapse exactly six months after revocation.","They remain robustly in force indefinitely until the newly elected or reformed state legislature actively decides to repeal, significantly amend, or re-enact them."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike National Emergency laws which automatically die six months post-crisis, laws passed by Parliament during President"
    },
    {
        "id": "ch45-l2-q50",
        "question": "Can the Governor of the state, who is effectively acting as the central viceroy, be abruptly removed from office during the pendency of President’s Rule?",
        "options": ["No, he enjoys emergency-related tenure protections.","Yes, because legally the Governor serves purely at the absolute","of the President under Article 156, regardless of an ongoing crisis."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 does not shield the Governor. Even while managing a state under central rule, the Governor remains a Central appointee acting at the President"
    },
    {
        "id": "ch45-l2-q51",
        "question": "What is the startling difference in the maximum theoretical duration between a National Emergency and President",
        "options": ["National Emergency has an absolute 3-year cap; President","National Emergency is theoretically indefinite (with 6-month renewals); President"],
        "correctAnswerIndex": 1,
        "explanation": "An external crisis (War) might last for decades, so Article 352 has no maximum limit. However, a domestic democratic breakdown must be resolved; therefore, Article 356 structurally demands that fresh elections MUST take place within three years."
    },
    {
        "id": "ch45-l2-q52",
        "question": "While a National Emergency is primarily declared on objective grounds of War or external threats, the proclamation of President",
        "options": ["Total breakdown or \\",".","Severe localized economic depression.","Sectarian civil war."],
        "correctAnswerIndex": 0,
        "explanation": "Article 356 hinges entirely on the phrase"
    },
    {
        "id": "ch45-l2-q53",
        "question": "Which devastating constitutional emergency provides for the aggressive imposition of a \\",
        "options": ["President’s Rule.","National Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "A National Emergency (Art 352) transforms the system into a unitary one by making state legislatures strictly subordinate to Parliamentary command, yet the state assemblies themselves are not dismissed or locked out."
    },
    {
        "id": "ch45-l2-q54",
        "question": "Conversely, in which specific emergency is the \\",
        "options": ["National Emergency.","Financial Emergency.","President’s Rule."],
        "correctAnswerIndex": 2,
        "explanation": "Only under Article 356 does the Union effectively execute a bloodless coup, physically dismantling the state"
    },
    {
        "id": "ch45-l2-q55",
        "question": "The notorious 38th Amendment (1975) shockingly made the President",
        "options": ["The massive 42nd Amendment.","The corrective 44th Amendment.","The sweeping 24th Amendment.","The anti-defection 52nd Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment in 1978 was designed to dismantle the dictatorial excesses of the Emergency era, famously stripping away the"
    },
    {
        "id": "ch45-l2-q56",
        "question": "What does the highly specific constitutional phrase \\",
        "options": ["The MLAs are temporarily stripped of their citizenship.","The assembly physically exists, its MLAs retain their legal status and salaries, but it is deeply paralyzed, utterly incapable of meeting, debating, or passing laws.","The assembly is permanently dissolved, and fresh elections are inevitable."],
        "correctAnswerIndex": 1,
        "explanation": "Suspended animation is exactly what it sounds like. The assembly essentially sleeps. It is frozen in time. If a cohesive government can later be formed, the President can"
    },
    {
        "id": "ch45-l2-q57",
        "question": "The incredibly powerful phrase \\",
        "options": ["The President can bypass the Governor entirely, proactively acting on independent intelligence or information from the Union Home Ministry regarding a state","The President can whimsically declare an emergency strictly on his personal political whim.","The President acts on the sole advice of the High Court","The President must consult the neighboring state CMs."],
        "correctAnswerIndex": 0,
        "explanation": "While usually relying on a bulky Governor"
    },
    {
        "id": "ch45-l2-q58",
        "question": "Article 357(1)(a) allows the Union Parliament to \\",
        "options": ["The ruling State Governor.","The President of India.","The active Chief Justice.","The Lok Sabha Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "Because Parliament lacks the intricate time to legislate for a single state, it constitutionally delegates this formidable power directly to the President. He then enacts"
    },
    {
        "id": "ch45-l2-q59",
        "question": "Which separate emergency provision directly and almost exclusively deals with a drastic failure in the \\",
        "options": ["Article 356.","Article 357.","Article 360.","Article 280."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the political malfunction required for Article 356, Article 360 tackles severe, existential fiscal crises, allowing the Union to impose harsh austerity measures, though importantly, it does not involve dismissing the state government."
    },
    {
        "id": "ch45-l2-q60",
        "question": "Is the \\",
        "options": ["No, it is a hardcore, physical, factual assessment of the security and administrative environment preventing an election.","Yes, it is purely a subjective tool given to the ruling party."],
        "correctAnswerIndex": 0,
        "explanation": "To prevent the EC"
    },
    {
        "id": "ch45-l2-q61",
        "question": "What is the primary reason why the President of India, and not the Governor, is given the power to remove a member of the State Public Service Commission?",
        "options": ["To ensure that the Governor doesn","To provide the commission higher degree of independence from the state executive","To centralize all power in Delhi.","Because the SPSC is a branch of UPSC."],
        "correctAnswerIndex": 1,
        "explanation": "This is a significant safeguard that prevents the State Government from arbitrarily removing members who might be impartial or unpopular with the local ministry."
    },
    {
        "id": "ch45-l2-q62",
        "question": "Assertion (A): A member of the State Public Service Commission is ineligible for re-appointment to that office.\\nReason (R): The Constitution aims to ensure that no member is tempted to favor the local government to secure a second term.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Security of tenure and the bar on re-appointment are designed to protect the integrity of the merit system from executive interference."
    },
    {
        "id": "ch45-l2-q63",
        "question": "The State Public Service Commission presented its annual report to the Governor. If the State Government rejects some of its recommendations, what is the mandatory next step?",
        "options": ["The Governor must dismiss the Cabinet.","The State Government must explain the reasons for such non-acceptance to the State Legislature.","The SPSC can file a Case in the Supreme Court.","The recommendations are automatically reconsidered by the UPSC."],
        "correctAnswerIndex": 1,
        "explanation": "This acts as a legislative check, ensuring the government is held accountable for ignoring independent advice (Article 323)."
    },
    {
        "id": "ch45-l2-q64",
        "question": "Can the Governor of a State, with the approval of the President, request the UPSC to serve the needs of the State?",
        "options": ["Yes, under Article 315(4).","No, this would violate the state","Only if the State PSC has been abolished.","Only if there is a National Emergency."],
        "correctAnswerIndex": 0,
        "explanation": "This provision allows for flexibility, letting a state utilize the expertise and machinery of the Union commission for quality recruitment."
    },
    {
        "id": "ch45-l2-q65",
        "question": "Which of the following is correct regarding a",
        "options": ["It is a constitutional body created directly by Article 315.","It is a statutory body created by the Parliament upon requests from the respective state legislatures.","Its members are appointed by the Governor of the largest state involved.","Its expenses are shared by the states from the Consolidated Fund of India."],
        "correctAnswerIndex": 1,
        "explanation": "A JSPSC is created by law, making it statutory (unlike SPSC/UPSC which are constitutional)."
    },
    {
        "id": "ch45-l2-q66",
        "question": "A member of an SPSC can be removed on the ground of",
        "options": ["Yes, by the Supreme Court.","No, the President can remove him directly under Article 317(3).","Yes, by the Governor.","Yes, by the Legislative Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "Grounds like insolvency, holding office of profit, or mental/physical infirmity can be acted upon by the President directly without a mandated SC reference."
    },
    {
        "id": "ch45-l2-q67",
        "question": "Can a member of an SPSC be appointed as the Chairman of another SPSC?",
        "options": ["No, only UPSC Chairman can become SPSC Chairman.","Yes, under Article 319.","Only if he is less than 60 years old.","Only if the President nominates him."],
        "correctAnswerIndex": 1,
        "explanation": "Article 319 allows such career progression between commissions."
    },
    {
        "id": "ch45-l2-q68",
        "question": "The State PSC",
        "options": ["Mandatory and Binding.","Generally accepted, although advisory in nature.","Subject to approval by the Chief Justice of the High Court.","Only for Group C and D employees."],
        "correctAnswerIndex": 1,
        "explanation": "While advisory, the"
    },
    {
        "id": "ch45-l2-q69",
        "question": "A member of SPSC retires at the age of 62. Why is this different from UPSC (65)?",
        "options": ["Because state jobs are less stressful.","Because the SPSC is of a lower hierarchy and this provides a path to join UPSC later.","Because state governors serve for shorter terms.","There is no specific reason, it"],
        "correctAnswerIndex": 1,
        "explanation": "The age gap (62 vs 65) creates a ladder, allowing SPSC members to be eligible for appointment to the UPSC before they hit 65."
    },
    {
        "id": "ch45-l2-q70",
        "question": "The",
        "options": ["The members get a very high salary.","The commission doesn","The members are paid in gold.","The commission can open branches in other states."],
        "correctAnswerIndex": 1,
        "explanation": "Financial independence is crucial for the commission"
    },
    {
        "id": "ch45-l2-q71",
        "question": "Is the SPSC consulted on the promotion of an officer from a lower state service to a higher one?",
        "options": ["No, the Chief Minister decides.","Yes, Article 320(3)(b) requires consultation on principles and suitability for promotions.","Only if there is a vacancy for more than 5 years.","Only for IAS/IPS officers serving in the state."],
        "correctAnswerIndex": 1,
        "explanation": "The SPSC plays a major role in ensuring merit-based promotions."
    },
    {
        "id": "ch45-l2-q72",
        "question": "A Joint State Public Service Commission (JSPSC) submits its annual report to:",
        "options": ["The President of India.","The Governors of each of the participating States.","The Chairman of UPSC.","The Union Home Minister."],
        "correctAnswerIndex": 1,
        "explanation": "As it serves the states, it reports to the respective heads of those states."
    },
    {
        "id": "ch45-l2-q73",
        "question": "What does",
        "options": ["Personal life disputes.","Financial interest in a government contract (directly or through an incorporated company).","Publicly criticizing the Governor.","Not hiring enough SC/ST candidates."],
        "correctAnswerIndex": 1,
        "explanation": "Article 317 specifically mentions this conflict of interest."
    },
    {
        "id": "ch45-l2-q74",
        "question": "Can the",
        "options": ["Yes, through an act of the State Legislature.","No, SPSC is only for government departments.","Only if the President declares an Emergency.","Only for technical posts."],
        "correctAnswerIndex": 0,
        "explanation": "Article 321 allows for this expansion by the respective legislature."
    },
    {
        "id": "ch45-l2-q75",
        "question": "How is a",
        "options": ["The office remains empty.","The Governor appoints one of the members as acting chairman.","The UPSC sends a deputy chairman.","The High Court Chief Justice takes over."],
        "correctAnswerIndex": 1,
        "explanation": "Article 316(1A) allows the Governor to make an"
    },
    {
        "id": "ch45-l2-q76",
        "question": "Why is the SPSC considered the",
        "options": ["Because it has a pet dog in its office.","Because it ensures recruitment is based on objective evaluation and not personal/political considerations.","Because it watches the activities of the Chief Minister.","Because it monitors the performance of private sector employees."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional body"
    },
    {
        "id": "ch45-l2-q77",
        "question": "If two or more states want a Joint PSC, who passes the enabling law?",
        "options": ["The State Legislatures jointly.","The Parliament.","The President by an order.","The Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Article 315(2) makes it clear that Parliament must legislate for a JSPSC."
    },
    {
        "id": "ch45-l2-q78",
        "question": "Which of the following is true regarding",
        "options": ["It is not required for posts and services excluded by the Governor.","It is not required for the implementation of Article 16(4) (reservation).","Both 1 and 2.","It is always required for all appointments."],
        "correctAnswerIndex": 2,
        "explanation": "Article 320 provides for these exclusions to ensure governmental policy-making remains with the executive."
    },
    {
        "id": "ch45-l2-q79",
        "question": "A member of SPSC, on retirement, is eligible for appointment as:",
        "options": ["Chairman of an SPSC.","Chairman of UPSC.","Member of UPSC.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Article 319 provides a clear mobility path for constitutional commission members."
    },
    {
        "id": "ch45-l2-q80",
        "question": "Does the SPSC handle the recruitment for the",
        "options": ["Yes, exclusively.","No, this is done by the Governor in consultation with the High Court.","Only for technical staff of the High Court.","Yes, if the Governor requests."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 233, the appointment of District Judges is handled by the Governor-High Court duo, not the SPSC."
    },
    {
        "id": "ch45-l2-q81",
        "question": "",
        "options": ["1st Amendment.","15th Amendment.","42nd Amendment.","44th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The 15th Amendment Act, 1963 added Article 316(1A) for both UPSC and SPSC."
    },
    {
        "id": "ch45-l2-q82",
        "question": "If a question arises about the age of a member of the Commission (UPSC/SPSC), the matter is decided by:",
        "options": ["The Supreme Court.","The President (for UPSC) and for SPSC, as specified in rules.","The Local Medical Board.","The Cabinet Secretary."],
        "correctAnswerIndex": 1,
        "explanation": "Administrative service rules usually specify the determining authority for such personal records."
    },
    {
        "id": "ch45-l2-q83",
        "question": "Can the SPSC be consulted for the recruitment of personnel for a semi-government body?",
        "options": ["Yes, if provided by a law of the State legislature.","No, only for direct government servants.","Only if the President declares a State Emergency.","Only during a financial crunch."],
        "correctAnswerIndex": 0,
        "explanation": "Article 321 empowers State legislatures to expand the functions of their respective Commissions."
    },
    {
        "id": "ch45-l2-q84",
        "question": "The expenses of the JSPSC are paid by:",
        "options": ["The Union Government.","The State Governments in such proportions as determined by the President.","Only the largest participating state.","The World Bank."],
        "correctAnswerIndex": 1,
        "explanation": "As it"
    },
    {
        "id": "ch45-l2-q85",
        "question": "Is the SPSC advice binding in",
        "options": ["Yes.","No, but deviations must be explained to the legislature.","Only if signed by the Governor.","Only for Class I officers."],
        "correctAnswerIndex": 1,
        "explanation": "The advisory nature allows for some executive flexibility while ensuring accountability through transparency."
    },
    {
        "id": "ch45-l2-q86",
        "question": "",
        "options": ["Article 315.","Article 317.","Article 320.","Article 322."],
        "correctAnswerIndex": 1,
        "explanation": "Article 317 covers the removal and suspension of members for all Public Service Commissions."
    },
    {
        "id": "ch45-l2-q87",
        "question": "What does",
        "options": ["The members can spend money without any audit.","The items are not subject to the","vote in the assembly.","The salary is paid in advance for 6 years.","The commission is exempted from tax."],
        "correctAnswerIndex": 1,
        "explanation": "This prevents"
    },
    {
        "id": "ch45-l2-q88",
        "question": "Can a member of SPSC resign at any time?",
        "options": ["No, he must give 6 months","Yes, by writing to the Governor.","Only with the PM","Only after completing 3 years."],
        "correctAnswerIndex": 1,
        "explanation": "The right to resign is a standard provision for these constitutional posts."
    },
    {
        "id": "ch45-l2-q89",
        "question": "A",
        "options": ["Loyalty to the King.","Objective evaluation of ability through competitive process.","Family pedigree.","Political activism."],
        "correctAnswerIndex": 1,
        "explanation": "The core function of PSCs is to ensure merit triumphs over patronage."
    },
    {
        "id": "ch45-l2-q90",
        "question": "The Governor can suspend a member of SPSC pending an inquiry by the Supreme Court. Why is this power given to the Governor (and not President)?",
        "options": ["To allow for immediate action locally until the central inquiry is over.","Because the Governor is the appointing authority.","Both 1 and 2.","The Governor cannot suspend; only President can."],
        "correctAnswerIndex": 2,
        "explanation": "Article 317(2) allows the appointing authority (Governor for SPSC) to suspend to maintain administrative health during inquiry."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch45-l3-q1",
        "question": "Assertion (A): The Governor has the power to appoint the Chairman and members of the State Public Service Commission (SPSC), but he cannot remove them. Reason (R): This dual constitutional mechanism (President for removal, Governor for appointment) is intended to ensure that the Commission is insulated from the immediate political influence of the state executive while maintaining the federal structure.",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is NOT the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "This constitutional provision is a key safeguard. By making the Governor (state executive) the appointing authority but the President (union executive) the removing authority, the Constitution creates a hurdle for any arbitrary state-level political interference in the Commission"
    },
    {
        "id": "ch45-l3-q2",
        "question": "The phrase",
        "options": ["Mandatory and non-negotiable; any violation voids the commission","Directory in nature; non-compliance doesn","s validly taken decisions","Applicable only to the UPSC, not the SPSCs","Applicable only to the Chairman, not other members"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court in several cases (e.g., in relation to state commissions) has held that this provision is"
    },
    {
        "id": "ch45-l3-q3",
        "question": "Imagine a situation where the SPSC Chairman is suspended by the Governor pending an inquiry into his misbehaviour. Which of the following is correct regarding this suspension?",
        "options": ["The Governor cannot suspend an SPSC member; only the President can","Article 317(2) specifically empowers the Governor to suspend an SPSC member against whom a reference has been made to the Supreme Court until the President passes orders on receipt of the SC report","Suspension is automatically mandatory once an inquiry is ordered","Suspension can only be done with the approval of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "While the President is the removing authority, Article 317(2) recognizes the Governor"
    },
    {
        "id": "ch45-l3-q4",
        "question": "A Joint State Public Service Commission (JSPSC) is created by an Act of Parliament on the request of the state legislatures. How does this impact its constitutional status compared to an SPSC?",
        "options": ["It loses all constitutional protections","It remains a constitutional body as it is provided for in Article 315, although its","is through a statutory process (Act of Parliament)","It becomes a subordinate department of the UPSC","It can only be dissolved by a constitutional amendment"],
        "correctAnswerIndex": 1,
        "explanation": "Though created by an Act of Parliament (statutory procedure), its existence and functions are anchored in Article 315 of the Constitution. Thus, it enjoys the same constitutional duties and independence safeguards as the UPSC and SPSC."
    },
    {
        "id": "ch45-l3-q5",
        "question": "The",
        "options": ["No, this is a purely internal matter of the executive","Yes, the High Court under Article 226 can issue a writ of Mandamus to compel the government to fulfill this constitutional obligation, as held in various judicial precedents","Only the Governor can compel the government","Only the President can intervene"],
        "correctAnswerIndex": 1,
        "explanation": "The requirement in Article 323(2) is a constitutional duty. Failure to perform it can be challenged in the High Court, as it bypasses the legislative oversight mechanism designed by the Constitution."
    },
    {
        "id": "ch45-l3-q6",
        "question": "Compare the",
        "options": ["SPSC advice is mandatory, while the AG","Both are advisory, but the SPSC","s advice to the government is confidential and protected by executive privilege","The AG","Neither has any constitutional basis for giving advice"],
        "correctAnswerIndex": 1,
        "explanation": "While both provide expert advice, the SPSC"
    },
    {
        "id": "ch45-l3-q7",
        "question": "If a State Legislature passes an Act to transfer the recruitment of",
        "options": ["Article 315","Article 321 (Power to extend functions of Public Service Commissions)","The Concurrent List, Entry 25","The Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Article 321 specifically allows for the extension of the commission"
    },
    {
        "id": "ch45-l3-q8",
        "question": "The",
        "options": ["It strengthens the SPSC by reducing its workload","It poses a challenge to the","role of the SPSC, as it bypasses the Article 320 recruitment process and often ignores the advice on principles of appointment","It is mandatory under Article 315","The SPSC itself recommends contractual appointments"],
        "correctAnswerIndex": 1,
        "explanation": "Extensive use of contractual or ad-hoc appointments for posts that fall under the SPSC"
    },
    {
        "id": "ch45-l3-q9",
        "question": "If the State Government wishes to",
        "options": ["Just issue an executive order","Make regulations under the proviso to Article 320(3) and LAY them for 14 days before the State Legislature. The legislature has the power to modify or annul them.","Get the prior approval of the President","Amend the Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The power to exclude is not absolute; it is subject to legislative oversight. Under Article 320(5), any regulations made by the Governor for exclusion must be laid before the legislature, which can modify or annul them."
    },
    {
        "id": "ch45-l3-q10",
        "question": "Assertion (A): SPSC members are, on the expiration of their term,",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is NOT the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The bar on re-appointment (Article 316(3)) is a recognized constitutional safeguard common to many independent bodies (like CAG, etc.) to ensure that they act fearlessly during their fixed tenure."
    },
    {
        "id": "ch45-l3-q11",
        "question": "Upon ceasing to hold office, the Chairman of an SPSC can be appointed as:",
        "options": ["Chairman of any other SPSC or SPSC of the same state","Member or Chairman of the UPSC, or Chairman of any other SPSC","Governor of the same State","Vice-Chancellor of a State University"],
        "correctAnswerIndex": 1,
        "explanation": "Article 319(d) clarifies the eligibility: a retired SPSC Chairman can move to another SPSC as Chairman, or to the UPSC as a member or Chairman. They are ineligible for other state/central government jobs."
    },
    {
        "id": "ch45-l3-q12",
        "question": "The SPSC",
        "options": ["Yes, completely","No, while not legally binding, it is","binding because the reasons for rejection must be explained in the memorandum laid before the legislature, exposing the government to public and legislative scrutiny","It is binding if the Governor agrees with the SPSC","It is binding in cases of major penalties only"],
        "correctAnswerIndex": 1,
        "explanation": "The consequence is"
    },
    {
        "id": "ch45-l3-q13",
        "question": "The",
        "options": ["The Chief Minister","The Governor and High Court Judges","The Speaker of the Assembly","All of the above"],
        "correctAnswerIndex": 1,
        "explanation": "The expenses of the SPSC, the Governor, and the High Court are all"
    },
    {
        "id": "ch45-l3-q14",
        "question": "If a State Legislature abolishes the SPSC and replaces it with a",
        "options": ["It is valid if passed by a 2/3rd majority","It is unconstitutional as it violates Article 315, which mandates that","Such an abolition would require a constitutional amendment under Article 368.","It is valid because recruitment is a state subject","It is valid if the President gives his assent"],
        "correctAnswerIndex": 1,
        "explanation": "Since Article 315 uses the word"
    },
    {
        "id": "ch45-l3-q15",
        "question": "The",
        "options": ["The SPSC sets its own domicile rules","Article 16(3) empowers only PARLIAMENT to make any law prescribing requirement as to residence for employment in a state. The SPSC must follow the law passed by Parliament or the rules as they exist, and cannot unilaterally impose domicile restrictions.","The SPSC ignores residency completely","The High Court determines the domicile quota"],
        "correctAnswerIndex": 1,
        "explanation": "The power to bridge the residency requirements for state jobs lies with the Parliament under Article 16(3), not the SPSC or the State Legislature, to avoid regionalism from undermining national unity."
    },
    {
        "id": "ch45-l3-q16",
        "question": "The",
        "options": ["The next meeting of the State Assembly","A new Chairman is appointed by the Governor","The suspended Chairman returns to duty","Either (b) or (c), as the case may be"],
        "correctAnswerIndex": 3,
        "explanation": "Article 316(1A) specifies that the acting Chairman performs the duties until a person is appointed to the office (in case of vacancy) or until the original holder resumes their duties (in case of absence)."
    },
    {
        "id": "ch45-l3-q17",
        "question": "The 41st Amendment (1976) changed the retirement age from 60 to 62. Which of the following bodies were affected by this change?",
        "options": ["Only the SPSC","Only the JSPSC","Both SPSC and JSPSC","UPSC, SPSC, and JSPSC"],
        "correctAnswerIndex": 2,
        "explanation": "The 41st Amendment Act applied to both the State Public Service Commissions and the Joint State Public Service Commissions, while the UPSC retirement age remained at 65."
    },
    {
        "id": "ch45-l3-q18",
        "question": "Assertion (A): The President",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is NOT the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "This judicial inquiry (Article 317) is a crucial protection. It ensures that"
    },
    {
        "id": "ch45-l3-q19",
        "question": "When the SPSC",
        "options": ["The State Government (charged on the Consolidated Fund)","The public institution concerned, as provided in the Act extending the functions","The Union Government","The SPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 322 specifies that expenses shall be charged on the Consolidated Fund of the State. However, when functions are extended under Article 321, the enabling law usually specifies the financial arrangements, which typically involve reimbursement by the institution served."
    },
    {
        "id": "ch45-l3-q20",
        "question": "If a candidate is selected by the SPSC, does he/she have an ABSOLUTE right to be appointed to the post?",
        "options": ["Yes, the selection is binding","No, the Supreme Court has held (in State of Haryana v. Subhash Chander) that the government is not bound to fill all or any of the vacancies; selection only gives a right to be considered for appointment.","Yes, unless the High Court stays the appointment","Only if the candidate is from the majority community"],
        "correctAnswerIndex": 1,
        "explanation": "A standard principle in administrative law: the SPSC"
    },
    {
        "id": "ch45-l3-q21",
        "question": "The SPSC",
        "options": ["The SPSC cannot advise if a SAT case is pending","If the officer approaches SAT after the government passes a final order based on SPSC advice, SAT can review the entire process and set it aside, effectively serving as an adjudicatory check on an advisory process.","SAT advice is more binding than SPSC advice","There is no overlap between the two"],
        "correctAnswerIndex": 1,
        "explanation": "SAT is a quasi-judicial adjudicatory body. If the government"
    },
    {
        "id": "ch45-l3-q22",
        "question": "Which of the following describes the difference in",
        "options": ["Judges are removed after a parliamentary address, while Commission members are removed after a Supreme Court inquiry (Article 317)","Commission members are removed by the Prime Minister directly","Both are removed by the same process","Commission members have no protection"],
        "correctAnswerIndex": 0,
        "explanation": "The removal processes are distinct: judicial removal (Article 124/217) is a parliamentary process (impeachment), whereas SPSC/UPSC removal (Article 317) is an executive-judicial process involving an SC inquiry."
    },
    {
        "id": "ch45-l3-q23",
        "question": "If a state wishes to create a",
        "options": ["Article 315 – the primacy of the SPSC","Article 321 – that any extension of SPSC functions to non-state services must be done by an Act of Legislature","Article 14 – for non-discriminatory criteria","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Such a code must satisfy the SPSC"
    },
    {
        "id": "ch45-l3-q24",
        "question": "The SPSC is a",
        "options": ["Its ability to fix its own budget without government interference","The charged nature of its expenses on the Consolidated Fund and the fixed tenure of its members, protected from arbitrary removal","Its power to appoint the Chief Secretary","Its power to declare state-level holidays"],
        "correctAnswerIndex": 1,
        "explanation": "Structural autonomy is provided by Article 322 (charged expenditure) and Article 317 (protected removal process), making it difficult for the executive to coerce the commission financially or personally."
    },
    {
        "id": "ch45-l3-q25",
        "question": "If the office of both Chairperson and Vice-Chairperson is vacant in an SPSC:",
        "options": ["The UPSC takes over","The Governor appoints a member to act as Chairperson; there is no constitutional post of","in the SPSC (unlike UPSC which might have it in rules)","The Chief Justice of High Court takes over","The senior most IAS officer becomes the Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution only provides for a"
    },
    {
        "id": "ch45-l3-q26",
        "question": "In the",
        "options": ["The SPSC must follow these judicial guidelines even if they conflict with state government policy","The SPSC obeys only the Governor","The SPSC has no say in reservation","The SPSC must decide its own reservation policy"],
        "correctAnswerIndex": 0,
        "explanation": "The SPSC, as a constitutional body, is bound by the"
    },
    {
        "id": "ch45-l3-q27",
        "question": "Article 318 allows the Governor to make regulations. Can these regulations restrict the power of the Commission to choose its own examination method?",
        "options": ["Yes, the Governor has total control","No, the","is a constitutional duty of the SPSC under Article 320, and subordinate legislation (Governor","Only with the High Court","Only during a financial emergency"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor"
    },
    {
        "id": "ch45-l3-q28",
        "question": "Regarding the JSPSC (Joint SPSC), which of the following is correct?",
        "options": ["It can be created by a Presidential ordinance","It is a statutory body, and thus its members do not have the same protection as SPSC members","Its members have the SAME protection as SPSC members (Article 317) even though it is created by an Act of Parliament","It is abolished by the 44th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "Article 317 applies to"
    },
    {
        "id": "ch45-l3-q29",
        "question": "The SPSC",
        "options": ["The JSPSC mechanism","One SPSC advising another","The SPSC Chairman attending an annual conference for best practices","Either (a) or (c)"],
        "correctAnswerIndex": 3,
        "explanation": "Interstate cooperation is institutionalized either through a Joint Commission (Article 315(2)) or through voluntary conferences and collaborations facilitated by the UPSC."
    },
    {
        "id": "ch45-l3-q30",
        "question": "Which of the following captures the essence of the SPSC",
        "options": ["It prevents the Governor from becoming a dictator","It provides a buffer between political patronage and bureaucratic excellence, ensuring that","remains the primary criteria for serving the state","It ensures that all state jobs are reserved for locals","It manages the state"],
        "correctAnswerIndex": 1,
        "explanation": "The essence of both UPSC and SPSC is meritocracy. By being an independent body, it shields the recruitment process from the daily pulls and pressures of party politics."
    },
    {
        "id": "ch45-l3-q31",
        "question": "In the context of the landmark Rameshwar Prasad vs. Union of India (2006) case, the Supreme Court unequivocally held that the dissolution of an assembly based solely on the Governor",
        "options": ["Constitutionally valid, to vigorously protect the purity and sanctity of democracy.","Blatantly unconstitutional, as the Governor aggressively cannot preemptively dissolve an assembly merely based on the","of horse-trading to deny a claimant the mandatory floor test.","A matter of absolute, immune executive discretion under Article 163."],
        "correctAnswerIndex": 1,
        "explanation": "The SC fiercely condemned"
    },
    {
        "id": "ch45-l3-q32",
        "question": "If a sweeping proclamation (Article 356) is declared demonstrably unconstitutional by the Supreme Court",
        "options": ["The old, illegally dismissed government must be magically restored immediately, regardless of reality.","The court, utilizing its inherent constitutional prudence, may refrain from forcefully restoring the old government to avoid catastrophic administrative chaos, but can simultaneously pass severe strictures against the Union.","The entire new election is retroactively, automatically declared null and void."],
        "correctAnswerIndex": 1,
        "explanation": "Although Bommai granted the immense power of restoration, courts operate practically. If a fresh democratic mandate (new election) has already occurred by the time the judgment is delivered, sweeping it away causes massive instability. The court legally decries the original illegal act but accepts the new democratic reality."
    },
    {
        "id": "ch45-l3-q33",
        "question": "The monumental Bommai judgment categorically stated that the \\",
        "options": ["Intrusive Judicial Review.","A mandatory, preemptive Parliamentary Veto.","Simultaneous approval by the NITI Aayog.","Mandatory ratification by the powerful Inter-State Council."],
        "correctAnswerIndex": 0,
        "explanation": "This was Bommai"
    },
    {
        "id": "ch45-l3-q34",
        "question": "Article 355 imposes a solemn \\",
        "options": ["A constant justification for the immediate, punitive imposition of the draconian Article 356.","A flexible framework for \\","or \\","(like forcefully deploying central forces to a single burning district) without necessarily dismissing the entire state government.","An unconstitutional way to completely bypass the Governor."],
        "correctAnswerIndex": 1,
        "explanation": "The Punchhi Commission sought to"
    },
    {
        "id": "ch45-l3-q35",
        "question": "Does a massive \\",
        "options": ["Yes, seamlessly under the vague ground of \\","","No. The Bommai guidelines meticulously specify that a localized breakdown of \\","is fundamentally not synonymous with a total, systemic breakdown of \\",""],
        "correctAnswerIndex": 1,
        "explanation": "This distinction is critical. Law and order is a State subject. Riots, while terrible, do not automatically mean the *entire constitution* has collapsed. Article 356 must be reserved strictly for situations where the state government structurally cannot function, not merely when it is managing a crisis poorly."
    },
    {
        "id": "ch45-l3-q36",
        "question": "If the vibrant Lok Sabha is unfortunately dissolved precisely at the time of the Article 356 proclamation, the permanent Rajya Sabha must definitively approve it within two months. If the Rajya Sabha actively",
        "options": ["The massive proclamation lapses immediately, instantly terminating President","The resilient President can legally re-issue it the very next day, asserting executive dominance.","The proclamation limps along and incredibly survives until the new Lok Sabha is formed."],
        "correctAnswerIndex": 0,
        "explanation": "The Rajya Sabha acts as the solitary, powerful constitutional safeguard when the lower house is absent. If the Rajya Sabha votes"
    },
    {
        "id": "ch45-l3-q37",
        "question": "The rigorous \\",
        "options": ["A crippling Lack of consolidated funds.","Immense physical difficulties in the state (like pervasive security breakdowns, devastating floods, or intractable administrative hurdles).","The Governor","The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The EC"
    },
    {
        "id": "ch45-l3-q38",
        "question": "Is the State Governor constitutionally required to respectfully consult the",
        "options": ["Yes, absolutely, as per the strict, binding mandate of Article 163.","No. This represents one of the unique \\","where the Governor acts totally independently as a Central sentinel, ignoring the Council of Ministers."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 163 drastically limits the Governor’s discretion, reporting the collapse of the very constitutional machinery that sustains those ministers is an inherent exception. The Governor acts as the President"
    },
    {
        "id": "ch45-l3-q39",
        "question": "If the President surprisingly receives a Governor",
        "options": ["He remains rigidly bound to follow the Governor","He can completely ignore the flawed report and categorically refuse to proclaim President","He must constitutionally refer the explosive matter to the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Governor’s report is not a binding writ. The ultimate constitutional trigger (the"
    },
    {
        "id": "ch45-l3-q40",
        "question": "Assertion (A): The sweeping power deployed under Article 356 is fundamentally \\",
        "options": ["Both A and R are completely true, and R is the precise, correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is profoundly false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The massive historical abuse of Article 356 fundamentally distorted the constitutional framework. Bommai effectively"
    },
    {
        "id": "ch45-l3-q41",
        "question": "Assertion (A): The Union Parliament can aggressively make laws specifically for a state under President",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false."],
        "correctAnswerIndex": 0,
        "explanation": "Article 356 is the ultimate federal override. While not touching other states, it essentially decapitates the targeted state"
    },
    {
        "id": "ch45-l3-q42",
        "question": "What legally happens to a crucial bill successfully passed by the State Legislature that was pending ominously for the Governor",
        "options": ["It violently and automatically lapses, dying with the suspended assembly.","It is cleanly transferred directly to the President for his ultimate, sovereign consideration.","It is enthusiastically signed by the Governor"],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the seamless transfer of executive power, an unsigned bill from a suspended or dissolved legislative assembly perishes. If the assembly is dissolved, the democratic mandate pushing that specific bill is extinguished, and the bill lapses."
    },
    {
        "id": "ch45-l3-q43",
        "question": "Can a terrifying \\",
        "options": ["No, they enjoy absolute, dictatorial emergency immunity.","Yes, forcefully, on the exact same grounds as any ordinary law: violating Fundamental Rights or a blatant lack of rigorous legislative competence."],
        "correctAnswerIndex": 1,
        "explanation": "Even though enacted under emergency delegations, a President"
    },
    {
        "id": "ch45-l3-q44",
        "question": "In the chaotic case of a completely fractured \\",
        "options": ["The single largest party sitting alone.","An explicit pre-poll alliance of parties miraculously formed firmly before the elections.","A chaotic post-poll alliance cobbled together blindly after the elections."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent corrupt horse-trading, the Sarkaria Commission explicitly ranks a"
    },
    {
        "id": "ch45-l3-q45",
        "question": "If the Union desperately provides \\",
        "options": ["No, this represents vicious financial blackmail.","Yes. Strictly under Article 365, if the stringent conditions structurally represent constitutionally valid executive directives, willfully ignoring them constitutes an undeniable failure."],
        "correctAnswerIndex": 1,
        "explanation": "If the Union attaches constitutional directives (concerning national security, transport, or specific fiscal protocols tied to massive central loans), and the state blatantly disobeys, the Union can indeed weaponize Article 365 (failure to follow directives) as grounds for Article 356."
    },
    {
        "id": "ch45-l3-q46",
        "question": "During an aggressive President",
        "options": ["Is ruthlessly headed by the Central Governor acting as a de-facto appellate figure.","Continues to function proudly, fiercely, and entirely independently of the Union","Can legally be abolished completely by a dictatorial Presidential decree."],
        "correctAnswerIndex": 1,
        "explanation": "To preserve the separation of powers during chaos, Article 356 explicitly creates an impenetrable constitutional wall protecting the High Court. The President gains all executive and legislative powers, but absolutely zero judicial powers over the state"
    },
    {
        "id": "ch45-l3-q47",
        "question": "Which foundational Amendment Act significantly and decisively altered the sheer duration of the initial parliamentary approval window for President",
        "options": ["The draconian 42nd Amendment.","The corrective 44th Amendment.","The sweeping 73rd Amendment.","The anti-defection 91st Amendment."],
        "correctAnswerIndex": 0,
        "explanation": "The 42nd Amendment wildly expanded federal power, allowing the Centre to keep a state under President"
    },
    {
        "id": "ch45-l3-q48",
        "question": "The esoteric legal doctrine known as the \\",
        "options": ["Article 356 is considered strictly a vague political convention rather than law.","Article 356 is a highly specific, explicit, written constitutional mechanism deliberately designed as a profound federal override for the absolute preservation of the unified Nation.","The doctrine only rigorously protects private banking institutions."],
        "correctAnswerIndex": 1,
        "explanation": "While states hold immense sovereign power under the federal structure, Article 356 acts as the ultimate"
    },
    {
        "id": "ch45-l3-q49",
        "question": "Can the constitutionally mandated \\",
        "options": ["Yes, and this profound mechanism was heavily recommended universally by the Sarkaria Commission.","No, the powerful Council is strictly barred from debating explosive political emergency provisions.","Only if the aggressive Union Home Minister grants explicit prior consent."],
        "correctAnswerIndex": 0,
        "explanation": "The Sarkaria Commission strongly advocated using the Inter-State Council (Article 263) as a robust, permanent democratic forum for states to politically confront the Centre over the malicious imposition of President"
    },
    {
        "id": "ch45-l3-q50",
        "question": "Under the stringent Article 357 framework, the sovereign Parliament can formally authorize the President to delegate the sweeping power to make laws to \\",
        "options": ["The powerful Union Home Minister directly.","The President himself, acting singularly through an intricate system of expert bureaucratic","s Acts","The active Chief Justice of India sitting on the bench.","The suspended State"],
        "correctAnswerIndex": 1,
        "explanation": "Parliament delegates state legislative powers to the President. While the President consults a consultative committee of MPs representing that state, he remains the sole legal author of the"
    },
    {
        "id": "ch45-l3-q51",
        "question": "Does the devastating, assembly-crushing \\",
        "options": ["Yes, the state","No, the Rajya Sabha is a structurally permanent, continuous body, and its resilient members resolutely possess unaffected six-year tenures regardless of the state","Only the heavily dominant ruling party"],
        "correctAnswerIndex": 1,
        "explanation": "Federal representation at the Centre is indestructible. Even if a state legislature is totally dissolved under Art 356, the Rajya Sabha MPs previously elected by that assembly cannot be recalled or suspended; their six-year terms remain ironclad."
    },
    {
        "id": "ch45-l3-q52",
        "question": "In which of the following historically charged situations is the deployment of Article 356 absolutely NOT constitutionally justified, acting in direct violation of the strict Bommai jurisprudence?",
        "options": ["Rampant, documented corruption aggressively paralyzing the current ministry.","Fierce, unmanageable internal rebellion ripping apart the ruling political party itself.","Where the ruling ministry has seemingly lost the majority purely on paper but brutally hasn","All of the above forcefully represent blatantly unconstitutional abuses."],
        "correctAnswerIndex": 3,
        "explanation": "Bommai completely outlawed using Article 356 for"
    },
    {
        "id": "ch45-l3-q53",
        "question": "The rigorous, dual-lock \\",
        "options": ["The devastating National Emergency mechanism contained in Article 352.","The intricate, sovereign Constitutional Amendment procedure in Article 368.","Both Article 352 and deeply entrenched portions of Article 368."],
        "correctAnswerIndex": 2,
        "explanation": "A National Emergency requires a staggering 2/3rds super-majority. Amending the core constitution requires a similarly massive 2/3rds super-majority. But seizing a state government under Article 356 requires only a basic, simple 50%+1 majority, making it dangerously easy for a strong Central government to execute."
    },
    {
        "id": "ch45-l3-q54",
        "question": "If a dangerously rogue State Government is actively acting in a bizarre way that creates an undeniable, imminent threat to \\",
        "options": ["Because it is an external threat, Article 352 (National Emergency) is strictly the sole, exclusive option.","Article 356 (President","failure to carry on government in accordance with the Constitution","Only the heavy military Armed Forces Special Powers Act (AFSPA) can inherently be deployed."],
        "correctAnswerIndex": 1,
        "explanation": "Article 356 is a broad constitutional hammer. A state government aggressively betraying the nation or openly funding insurgents is not simply a"
    },
    {
        "id": "ch45-l3-q55",
        "question": "Is there any strict, codified \\",
        "options": ["An inflexible 14 days.","A strict 1 month window.","Absolutely no explicit constitutional time limit precisely exists.","A tight, non-negotiable 6-month deadline."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution deliberately leaves this vaguely open. A Governor might send a frantic report, but the President (acting precisely on the political whim of the Union Cabinet) can essentially sit on it indefinitely without executing the proclamation, keeping the state politically dangling."
    },
    {
        "id": "ch45-l3-q56",
        "question": "The immensely powerful central \\",
        "options": ["The embattled Governor seeking independent help.","The dominant Central Government directly (specifically executing via the Ministry of Home Affairs).","The suspended, ghost-like State Assembly.","The actively observant Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Governor doesn"
    },
    {
        "id": "ch45-l3-q57",
        "question": "Which incredibly specific constitutional Article is universally and fearfully referred to as the ultimate \\",
        "options": ["The aggressive Article 356.","The presumption-creating Article 365.","The sweeping Article 352.","The All-India Services Article 312."],
        "correctAnswerIndex": 0,
        "explanation": "Article 356 has earned the infamous moniker of the"
    },
    {
        "id": "ch45-l3-q58",
        "question": "If exactly the devastating President",
        "options": ["It is glaringly unconstitutional as the precise, strict word","is fundamentally not mentioned within the text of Article 356.","It is absolutely, structurally constitutional as secularism operates firmly as an indestructible part of the Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The Bommai judgment famously legitimized this. The Supreme Court declared that secularism is a bedrock Basic Structure pillar. Therefore, any state government whose actions (or deliberate inactions) actively subvert secular governance is inherently failing to govern \\"
    },
    {
        "id": "ch45-l3-q59",
        "question": "The sprawling, massive daily \\",
        "options": ["Generous Central Government.","The deeply burdened State Treasury itself (the State","Shared exactly 50-50 between Delhi and the state capital.","Financed via emergency RBI printing."],
        "correctAnswerIndex": 1,
        "explanation": "The Centre only provides the political top-level management (the Governor and Advisors). The financial machinery of the state doesn"
    },
    {
        "id": "ch45-l3-q60",
        "question": "Unlike the swift, asymmetric parliamentary exit ramp built into a National Emergency, can an active President",
        "options": ["Yes, the powerful Lok Sabha retains supreme, unilateral emergency veto power over all crises.","No. It structurally lacks that specific \\","mechanism; it can legally only be decisively revoked by the President through issuing a subsequent executive proclamation.","Only the Rajya Sabha possesses that unilateral recall power."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment gave the Lok Sabha an exclusive, deadly veto over a National Emergency (Article 352). However, it did not extend that power to Article 356. To end President"
    },
    {
        "id": "ch45-l3-q61",
        "question": "Analyze the",
        "options": ["Because the SPSC member is a central government employee.","To provide a double-check on the state executive and prevent arbitrary removal for political reasons.","Because only the Supreme Court can give orders to the Governor.","Because the removal is a legislative function in the state."],
        "correctAnswerIndex": 1,
        "explanation": "This constitutional design (Art 317) ensures the SPSC"
    },
    {
        "id": "ch45-l3-q62",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect. The JSPSC submits its report to the Governors of the respective states it serves (Art 323)."
    },
    {
        "id": "ch45-l3-q63",
        "question": "In the context of Public Service Commissions, the term",
        "options": ["1 only","1 and 2 only","1 and 3 only","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Specifically, Article 317(1) deems financial conflict of interest in government contracts as misbehaviour."
    },
    {
        "id": "ch45-l3-q64",
        "question": "The 15th Constitutional Amendment (1963) introduced the provision for",
        "options": ["Chairman","Chairman","Chairman","Chairman being dismissed by the President."],
        "correctAnswerIndex": 3,
        "explanation": "Wait, let"
    },
    {
        "id": "ch45-l3-q65",
        "question": "Which of the following describes the",
        "options": ["Governor appoints, High Court investigates, Governor removes.","Governor appoints, Supreme Court investigates, President removes.","President appoints, Supreme Court investigates, President removes.","Governor appoints, State Cabinet investigates, State Legislature removes."],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch45-l3-q66",
        "question": "The",
        "options": ["Yes, they cannot even be discussed.","No, they can be discussed but not voted upon in the Assembly.","Yes, they can be modified by the Governor at any time.","Only for the Chairman"],
        "correctAnswerIndex": 1,
        "explanation": "Like any"
    },
    {
        "id": "ch45-l3-q67",
        "question": "Regarding recruitment to",
        "options": ["SPSC recruits all judicial officers.","The High Court handles all aspects of judicial recruitment, excluding SPSC entirely.","SPSC is consulted for recruitment to judicial services other than District Judges (e.g., Civil Judge Junior Division).","UPSC recruits the State Judiciary."],
        "correctAnswerIndex": 2,
        "explanation": "Article 234 provides that appointments of persons other than district judges shall be made by the Governor in consultation with the SPSC and the High Court."
    },
    {
        "id": "ch45-l3-q68",
        "question": "Assertion (A): A member of the SPSC is eligible for appointment as a member of the UPSC.\\nReason (R): This mobility ensures that experienced persons from State-level recruitment can transition to National-level recruitment.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This is a key design feature of Article 319 to ensure a talent pipeline for the higher commission."
    },
    {
        "id": "ch45-l3-q69",
        "question": "Analyze the impact of Article 320(3) on the",
        "options": ["The State must consult SPSC before fixing the percentage of reservation.","SPSC consultation is NOT mandatory for implementation of reservation for backward classes.","The SPSC must conduct a survey of backwardness before reservation is granted.","Reservation is handled exclusively by the JSPSC."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution keeps the political/social policy of reservation with the Executive to avoid making the neutral SPSC a battleground for such debates."
    },
    {
        "id": "ch45-l3-q70",
        "question": "The",
        "options": ["Increase their salaries.","Address issues of integrity and public trust in the selection process.","Make them equivalent to politicians.","Force them to retire early."],
        "correctAnswerIndex": 1,
        "explanation": "Concerns over transparency and merit made such codes of ethics essential for these high-office holders."
    },
    {
        "id": "ch45-l3-q71",
        "question": "Under Article 321, if the state legislature wants to extend SPSC",
        "options": ["A simple resolution.","A law (Act).","A constitutional amendment.","A request to the Governor."],
        "correctAnswerIndex": 1,
        "explanation": "Extension of functions beyond the constitutional mandate requires a legislative sanction (Act of Parliament/Legislature)."
    },
    {
        "id": "ch45-l3-q72",
        "question": "The tenure of 62 years for SPSC members (as opposed to 65 for UPSC) was established to:",
        "options": ["Ensure they have a shorter career than central officers.","Maintain a structural ladder where retired/retiring SPSC members are still young enough to serve in UPSC.","Match the retirement age of High Court judges.","Allow for fresh energy every 5 years."],
        "correctAnswerIndex": 1,
        "explanation": "Structurally, it helps in feeding experienced members from the State level into the Union level commission."
    },
    {
        "id": "ch45-l3-q73",
        "question": "The",
        "options": ["The advice of the Chief Minister.","The report of the Supreme Court after an inquiry.","The vote of the State Cabinet.","The recommendation of the UPSC Chairman."],
        "correctAnswerIndex": 1,
        "explanation": "Article 317(1) mandates this judicial inquiry as a prerequisite for removal on this ground."
    },
    {
        "id": "ch45-l3-q74",
        "question": "If a member of an SPSC is also a member of the State Legislative Assembly, what happens to his SPSC post?",
        "options": ["He can hold both.","He is deemed to have vacated his SPSC post on the date he holds the other",".","He must resign from the Assembly.","He must serve without salary in SPSC."],
        "correctAnswerIndex": 1,
        "explanation": "This would constitute an"
    },
    {
        "id": "ch45-l3-q75",
        "question": "Can the SPSC conduct exams for recruitment to",
        "options": ["Yes.","No, this is exclusively under UPSC purview for recruitment.","Only for the physical test.","Only if the PM requests."],
        "correctAnswerIndex": 1,
        "explanation": "Recruitment to AIS is a Union function (Art 312) handled by the UPSC."
    },
    {
        "id": "ch45-l3-q76",
        "question": "Regarding the annual",
        "options": ["It can force the government to accept the advice.","It can only debate and ensure political accountability; it cannot legally enforce the advice.","It can fire the Minister responsible.","It can move a motion in the High Court."],
        "correctAnswerIndex": 1,
        "explanation": "Accountability to the legislature is the primary check on executive deviations from commission advice."
    },
    {
        "id": "ch45-l3-q77",
        "question": "The",
        "options": ["Class III posts.","Class I posts.","Group A officers of police.","Forest officers."],
        "correctAnswerIndex": 0,
        "explanation": "Lower-level (Class III/IV) recruitment is often delegated to separate recruitment boards (like Subordinate Services Boards) to let SPSC focus on senior management."
    },
    {
        "id": "ch45-l3-q78",
        "question": "Article 318 allows the Governor to make regulations for the SPSC staff. This is important to ensure:",
        "options": ["Low costs for the state.","The administrative independence of the commission from the state secretariat.","That only local domiciles are hired in SPSC.","That the SPSC follows the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Control over its own staff and internal administration is a baseline for any truly independent body."
    },
    {
        "id": "ch45-l3-q79",
        "question": "Which of the following is true regarding",
        "options": ["The Governor must lay the excluding regulations before the State Legislature for 14 days.","The SPSC must approve its own exclusion.","Exceptions can only be made for temporary posts of less than 3 months.","No exceptions are permitted."],
        "correctAnswerIndex": 0,
        "explanation": "Similar to the President"
    },
    {
        "id": "ch45-l3-q80",
        "question": "Can a retired SPSC member practice as a lawyer in the High Court of the same state?",
        "options": ["No, this would be employment under the state.","Yes,","under Art 319 generally refers to government service/salary, not private practice.","Only with the Governor","Only after a 5-year gap."],
        "correctAnswerIndex": 1,
        "explanation": "Private legal practice is generally not considered"
    },
    {
        "id": "ch45-l3-q81",
        "question": "If a Joint State Public Service Commission exists for Punjab and Haryana, its expenses are determined by:",
        "options": ["The President of India.","A joint resolution of both assemblies.","The Governors of both states equally.","The Finance Minister of India."],
        "correctAnswerIndex": 0,
        "explanation": "The President determines the proportions of sharing via regulation (Art 322)."
    },
    {
        "id": "ch45-l3-q82",
        "question": "Which landmark judgment upheld that High Courts cannot treat Administrative Tribunals (handling PSC matters) as equivalent to themselves?",
        "options": ["L. Chandra Kumar v. Union of India.","Kesavananda Bharati.","Bommai Case.","Minerva Mills."],
        "correctAnswerIndex": 0,
        "explanation": "It restored the High Court"
    },
    {
        "id": "ch45-l3-q83",
        "question": "Under Article 316, what happens to an SPSC member",
        "options": ["He must be paid for the remaining term.","He ceases to hold office, as the office itself no longer exists constitutionally.","He is automatically transferred to UPSC.","The term is extended by one year."],
        "correctAnswerIndex": 1,
        "explanation": "Abolition of the body (if done legally through constitutional amendment or merger) leads to termination of term."
    },
    {
        "id": "ch45-l3-q84",
        "question": "Assertion (A): Only the President can remove an SPSC member for misbehaviour after an SC inquiry.\\nReason (R): This is to prevent the Governor from acting as an agent of the State Council of Ministers in firing impartial members.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The centralization of removal power for state bodies is a deliberate federal safeguard for independence."
    },
    {
        "id": "ch45-l3-q85",
        "question": "The",
        "options": ["Article 14.","Article 16.","Article 19.","Article 21."],
        "correctAnswerIndex": 1,
        "explanation": "Article 16 specifically deals with equality of opportunity in public employment."
    },
    {
        "id": "ch45-l3-q86",
        "question": "Can a State Legislature mandate that SPSC must only interview candidates who know the local language?",
        "options": ["Yes, if passed by an act and it","qualification","No, this would be discrimination.","Only for Group D posts.","Only if the President allows."],
        "correctAnswerIndex": 0,
        "explanation": "Knowledge of local language is a legitimate qualification for efficient state administration."
    },
    {
        "id": "ch45-l3-q87",
        "question": "The tenure of 6 years/62 years can be modified by:",
        "options": ["A simple Act of Parliament.","A constitutional amendment.","An executive order of the Governor.","A resolution by the SPSC."],
        "correctAnswerIndex": 1,
        "explanation": "Since it is provided in the Constitution, it requires an amendment to change."
    },
    {
        "id": "ch45-l3-q88",
        "question": "When the Chairperson of an SPSC is appointed as a member of the UPSC, his term at UPSC:",
        "options": ["Is the remaining part of his SPSC term.","A fresh term of 6 years or until 65 years of age.","Is only for 3 years.","Is until the Governor recalls him."],
        "correctAnswerIndex": 1,
        "explanation": "Appointment to a different post in Art 319 generally triggers a fresh tenure for that specific post."
    },
    {
        "id": "ch45-l3-q89",
        "question": "Can the",
        "options": ["Yes.","No, constitutional bodies move outside the","doctrine and are strictly governed by their specific removal articles.","Only if the member is a part-time member.","Only during a political crisis."],
        "correctAnswerIndex": 1,
        "explanation": "Specific provisions override general doctrines (Generalia specialibus non derogant)."
    },
    {
        "id": "ch45-l3-q90",
        "question": "The annual report of SPSC is a",
        "options": ["To show how much money the commission saved.","To provide the legislature an opportunity to critique the executive","To provide a list of successful candidates.","To update the syllabus of exams."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    }
];

export const CHAPTER_45_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
