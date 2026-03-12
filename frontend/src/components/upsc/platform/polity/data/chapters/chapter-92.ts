import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch92-l1-q1",
        "question": "The landmark",
        "options": ["Doctrine of Pleasure.","Doctrine of Basic Structure.","Doctrine of Severability.","Doctrine of Lapse."],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that Parliament cannot amend the"
    },
    {
        "id": "ch92-l1-q2",
        "question": "In which case did the Supreme Court first rule that",
        "options": ["Shankari Prasad case (1951).","Golak Nath case (1967).","Sajjan Singh case (1965).","Minerva Mills case (1980)."],
        "correctAnswerIndex": 1,
        "explanation": "In Golak Nath, the SC reversed its earlier stand and gave Fundamental Rights a"
    },
    {
        "id": "ch92-l1-q3",
        "question": "The",
        "options": ["PM and President.","Fundamental Rights and Directive Principles.","Centre and States.","Lok Sabha and Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "The SC struck down portions of the 42nd amendment that gave unbridled precedence to DPSP over FRs."
    },
    {
        "id": "ch92-l1-q4",
        "question": "The",
        "options": ["Environment protection.","Reservations for Other Backward Classes (OBCs).","Election disputes.","Privacy rights."],
        "correctAnswerIndex": 1,
        "explanation": "Also known as the Mandal Case, it upheld 27% OBC reservation with the"
    },
    {
        "id": "ch92-l1-q5",
        "question": "Which case established that",
        "options": ["A.K. Gopalan case.","S.R. Bommai case (1994).","Berubari Union case.","Maneka Gandhi case."],
        "correctAnswerIndex": 1,
        "explanation": "The Bommai judgment checkmated the arbitrary use of Art 356."
    },
    {
        "id": "ch92-l1-q6",
        "question": "The",
        "options": ["Article 14","Article 19","Article 21 (Right to Life and Personal Liberty)","Article 32"],
        "correctAnswerIndex": 2,
        "explanation": "The SC ruled that"
    },
    {
        "id": "ch92-l1-q7",
        "question": "In",
        "options": ["Child marriage.","Sexual harassment of women at the workplace.","Police brutality.","Environmental pollution."],
        "correctAnswerIndex": 1,
        "explanation": "These guidelines filled the legislative vacuum until the 2013 Act was passed."
    },
    {
        "id": "ch92-l1-q8",
        "question": "Which landmark judgment declared the",
        "options": ["K.S. Puttaswamy case (2017).","Shayara Bano case.","Navtej Johar case.","Joseph Shine case."],
        "correctAnswerIndex": 0,
        "explanation": "A 9-judge bench unanimously upheld privacy as intrinsic to personal liberty."
    },
    {
        "id": "ch92-l1-q9",
        "question": "The practice of",
        "options": ["Shah Bano case (1985).","Shayara Bano case (2017).","Sarla Mudgal case.","Daniel Latifi case."],
        "correctAnswerIndex": 1,
        "explanation": "The court found it arbitrary and violative of Art 14."
    },
    {
        "id": "ch92-l1-q10",
        "question": "The",
        "options": ["Euthanasia.","Decriminalization of consensual same-sex acts (Section 377).","Adultery.","Entry of women in Sabarimala."],
        "correctAnswerIndex": 1,
        "explanation": "The SC decriminalized Section 377 as far as it applied to adults."
    },
    {
        "id": "ch92-l1-q11",
        "question": "In which case did the SC rule that",
        "options": ["Berubari Union case (1960).","Kesavananda Bharati case (1973).","LIC of India case (1995).","Both 2 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "Kesavananda reversed Berubari, and LIC reaffirmed it."
    },
    {
        "id": "ch92-l1-q12",
        "question": "The",
        "options": ["Seventh Schedule.","Ninth Schedule.","Tenth Schedule.","Eleventh Schedule."],
        "correctAnswerIndex": 1,
        "explanation": "It drew a line at April 24, 1973, for laws added to the 9th Schedule."
    },
    {
        "id": "ch92-l1-q13",
        "question": "Which case is associated with the",
        "options": ["Indra Sawhney case.","M. Nagaraj case.","Jarnail Singh case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Indra Sawhney mandated the exclusion of the socially advanced persons (creamy layer) from reservation benefits."
    },
    {
        "id": "ch92-l1-q14",
        "question": "The",
        "options": ["Valid.","Unconstitutional and violative of Right to Equality and Freedom of Religion.","A matter for the temple only.","A political issue."],
        "correctAnswerIndex": 1,
        "explanation": "The court prioritized individual rights over exclusionary religious practices."
    },
    {
        "id": "ch92-l1-q15",
        "question": "In",
        "options": ["Beyond judicial review.","Subject to judicial review if they violate fundamental rights as part of the Basic Structure.","Invalid.","Only for land reforms."],
        "correctAnswerIndex": 1,
        "explanation": "The court ended the"
    },
    {
        "id": "ch92-l1-q16",
        "question": "The",
        "options": ["Discretionary.","Part of the Basic Structure and cannot be abolished even by amendment.","Only for military courts.","Available only for rich states."],
        "correctAnswerIndex": 1,
        "explanation": "The SC upheld the high court"
    },
    {
        "id": "ch92-l1-q17",
        "question": "Wait. Which case is related to the",
        "options": ["Hussainara Khatoon case.","D.K. Basu vs State of West Bengal (1997).","Olga Tellis case.","Kedar Nath case."],
        "correctAnswerIndex": 1,
        "explanation": "D.K. Basu provided 11 foundational guidelines for the police during arrest/detention."
    },
    {
        "id": "ch92-l1-q18",
        "question": "The",
        "options": ["Election law.","Environmental law (Public Interest Litigation).","Criminal law.","Taxation law."],
        "correctAnswerIndex": 1,
        "explanation": "Mehta"
    },
    {
        "id": "ch92-l1-q19",
        "question": "In",
        "options": ["Child labour.","Honor Killing (interference by Khap Panchayats in consensual marriages).","Corruption.","Illiteracy."],
        "correctAnswerIndex": 1,
        "explanation": "Freedom to choose a life partner was upheld as part of Art 21."
    },
    {
        "id": "ch92-l1-q20",
        "question": "Which case legalized",
        "options": ["Aruna Shanbaug case.","Common Cause vs Union of India (2018).","Gian Kaur case.","Ratlam Municipal case."],
        "correctAnswerIndex": 1,
        "explanation": "The court differentiated between active killing and letting die with dignity."
    },
    {
        "id": "ch92-l1-q21",
        "question": "The",
        "options": ["Inheritance.","Maintenance for a divorced Muslim woman under CrPC Section 125.","Triple Talaq.","Conversion."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that Sec 125 applies to all citizens regardless of religion."
    },
    {
        "id": "ch92-l1-q22",
        "question": "Wait. Which case established the",
        "options": ["Rylands vs Fletcher.","M.C. Mehta vs Union of India (Oleum Gas Leak Case).","Union Carbide case.","Bhopal Gas case."],
        "correctAnswerIndex": 1,
        "explanation": "It went beyond the English"
    },
    {
        "id": "ch92-l1-q23",
        "question": "The",
        "options": ["It protected citizens","It controversially held that during Emergency, даже Right to Life (Art 21) could be suspended (later reversed).","It abolished the Governor","It was never decided."],
        "correctAnswerIndex": 1,
        "explanation": "This is often cited as the"
    },
    {
        "id": "ch92-l1-q24",
        "question": "In which case did the SC rule that",
        "options": ["Navtej Johar case.","Joseph Shine vs Union of India (2018).","Shayara Bano case.","Anuradha Bhasin case."],
        "correctAnswerIndex": 1,
        "explanation": "The court noted that adultery treats the wife as the"
    },
    {
        "id": "ch92-l1-q25",
        "question": "The",
        "options": ["Conversion of religion.","Automatic disqualification of convicted MPs/MLAs (striking down Sec 8(4) of RPA).","Environmental taxes.","Women"],
        "correctAnswerIndex": 1,
        "explanation": "It ended the protection that allowed convicted legislators to stay in power pending appeal."
    },
    {
        "id": "ch92-l1-q26",
        "question": "The",
        "options": ["Free speech.","Monetary compensation for violation of Fundamental Rights (Public Law Remedy).","Free legal aid.","A fast trial."],
        "correctAnswerIndex": 1,
        "explanation": "The state was made liable to pay for custodial deaths."
    },
    {
        "id": "ch92-l1-q27",
        "question": "Wait. In which case did the SC uphold the",
        "options": ["Kihoto Hollohan case (1992).","Election Commission vs Venkata Rao.","Golak Nath case.","Sardar Patel case."],
        "correctAnswerIndex": 0,
        "explanation": "It upheld the law but made the Speaker"
    },
    {
        "id": "ch92-l1-q28",
        "question": "The",
        "options": ["Amend any part of the Constitution, including Fundamental Rights.","Declare war.","Fire the President.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This was the very first challenge to the amending power."
    },
    {
        "id": "ch92-l1-q29",
        "question": "Which case introduced the",
        "options": ["Salem Advocate Bar Association case.","Afcons Infrastructure case.","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "These cases promoted mediation and arbitration under Section 89 of CPC."
    },
    {
        "id": "ch92-l1-q30",
        "question": "The",
        "options": ["Singing the anthem in movies.","Freedom of silence and the rights of religious minorities (Jehovah","Banning the anthem.","Army discipline."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that respect is shown by standing; singing is not compulsory."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch92-l2-q1",
        "question": "The",
        "options": ["24th Amendment Act.","25th Amendment Act.","42nd Amendment Act.","Both 1 and 2."],
        "correctAnswerIndex": 3,
        "explanation": "Parliament tried to immunize several types of laws from judicial scrutiny through these amendments."
    },
    {
        "id": "ch92-l2-q2",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This was a pragmatic move to avoid creating systematic chaos while setting a new legal precedent."
    },
    {
        "id": "ch92-l2-q3",
        "question": "In",
        "options": ["That the President is supreme.","That there shall be","on the constituent power of Parliament to amend the Constitution.","That DPSP are equal to FRs.","None of the above."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that"
    },
    {
        "id": "ch92-l2-q4",
        "question": "The",
        "options": ["For religious minorities.","In","for people in remote/far-flung areas, though with extreme caution.","For the ruling party members.","There is no exception."],
        "correctAnswerIndex": 1,
        "explanation": "Standard reservation must not cross 50%, but regional specifics can be considered in rare cases."
    },
    {
        "id": "ch92-l2-q5",
        "question": "Wait. Which case established that",
        "options": ["Kesavananda Bharati case.","Indira Gandhi vs Raj Narain (1975).","Minerva Mills case.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Over multiple cases, the SC reinforced that the power to review cannot be snatched from the judiciary."
    },
    {
        "id": "ch92-l2-q6",
        "question": "The",
        "options": ["A.K. Gopalan vs State of Madras (1950).","Kameshwar Singh case.","Shaukari Prasad case.","Berubari case."],
        "correctAnswerIndex": 0,
        "explanation": "Gopalan case had held that Art 21 only protects against"
    },
    {
        "id": "ch92-l2-q7",
        "question": "In the",
        "options": ["It cannot be done.","It can be done only after the proclamation of President","The Governor must agree.","Only the CM can dissolve."],
        "correctAnswerIndex": 1,
        "explanation": "This check prevents the Centre from dismissing state governments for purely political reasons."
    },
    {
        "id": "ch92-l2-q8",
        "question": "The",
        "options": ["Yes.","Only those inserted AFTER April 24, 1973, which violate the Basic Structure.","No, only land reform laws.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The date of the Kesavananda judgment is the"
    },
    {
        "id": "ch92-l2-q9",
        "question": "Regarding",
        "options": ["Article 14.","Article 19(1)(a).","Article 21.","Article 25."],
        "correctAnswerIndex": 1,
        "explanation": "Implicit freedom allows the press to function as a watchdog of democracy."
    },
    {
        "id": "ch92-l2-q10",
        "question": "The",
        "options": ["Counting MLAs in the Governor","A confidence motion in the Assembly itself.","Only through a public rally.","Only by the President."],
        "correctAnswerIndex": 1,
        "explanation": "Floor test is the only objective way to determine the strength of a ministry."
    },
    {
        "id": "ch92-l2-q11",
        "question": "In",
        "options": ["Section 377.","Section 125.","Section 144.","Section 302."],
        "correctAnswerIndex": 1,
        "explanation": "Sec 125 is a secular, summary procedure for maintenance of wives, children, and parents."
    },
    {
        "id": "ch92-l2-q12",
        "question": "The",
        "options": ["M.P. Sharma case (1954).","Kharak Singh case (1962).","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Both Sharma and Kharak Singh had denied privacy the status of a fundamental right."
    },
    {
        "id": "ch92-l2-q13",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch92-l2-q14",
        "question": "Wait. In which case did the SC hold that",
        "options": ["Mohini Jain case.","Unnikrishnan J.P. case (1993).","T.M.A. Pai case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Unnikrishnan case limited the commercialization of education and paved the way for Art 21A."
    },
    {
        "id": "ch92-l2-q15",
        "question": "The",
        "options": ["UN Charter.","CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women).","Geneva Convention.","Kyoto Protocol."],
        "correctAnswerIndex": 1,
        "explanation": "The court used international law to fill a domestic legislative gap (Art 51 context)."
    },
    {
        "id": "ch92-l2-q16",
        "question": "The",
        "options": ["S.R. Bommai case.","K.S. Puttaswamy case (Privacy judgment).","Navtej Johar case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Justice Chandrachud (son) overruled the judgment in which his father (Justice Y.V. Chandrachud) was in the majority."
    },
    {
        "id": "ch92-l2-q17",
        "question": "In",
        "options": ["Para 1 (Definitions).","Para 7 (which barred the jurisdiction of courts).","Para 2 (Disqualifications).","None."],
        "correctAnswerIndex": 1,
        "explanation": "Para 7 was found unconstitutional because it was not ratified by the states as required for changes in judicial power."
    },
    {
        "id": "ch92-l2-q18",
        "question": "What does",
        "options": ["Injecting a lethal drug.","Withdrawing life-support (ventilator/feeding tube) from a terminally ill patient who is in a permanent vegetative state.","Killing a patient at their request.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court focused on"
    },
    {
        "id": "ch92-l2-q19",
        "question": "Wait. In which case was the",
        "options": ["A.K. Gopalan case.","Bhikaji Narain vs State of MP (1955).","Golak Nath case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It relates to pre-constitutional laws that are inconsistent with Fundamental Rights."
    },
    {
        "id": "ch92-l2-q20",
        "question": "The",
        "options": ["Article 14.","Article 44 (Uniform Civil Code).","Article 17.","Article 370."],
        "correctAnswerIndex": 1,
        "explanation": "The case dealt with Hindu husbands converting to Islam to marry again without divorcing the first wife."
    },
    {
        "id": "ch92-l2-q21",
        "question": "In",
        "options": ["Their marks in school.","Their criminal antecedents, assets, liabilities, and educational qualifications.","Their religion.","Their blood group."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch92-l2-q22",
        "question": "The",
        "options": ["Exception 1 of Section 300.","Exception 2 of Section 375 (Rape).","Section 498A.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court removed the immunity for sex with"
    },
    {
        "id": "ch92-l2-q23",
        "question": "Wait. Which case is related to the",
        "options": ["Indra Sawhney case.","Janhit Abhiyan vs Union of India (2022).","M. Nagaraj case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "A 5-judge bench upheld the 103rd Amendment (10% EWS reservation) as constitutional."
    },
    {
        "id": "ch92-l2-q24",
        "question": "The",
        "options": ["9-0 unanimous decision.","3-2 majority decision.","5-0 unanimous decision.","7-2 decision."],
        "correctAnswerIndex": 1,
        "explanation": "Justice Kehar and Justice Nazeer dissented, favoring a stay rather than a strike-down."
    },
    {
        "id": "ch92-l2-q25",
        "question": "In",
        "options": ["Internet shutdowns in J&K.","Farmer protests.","Electoral bonds.","Vaccine mandates."],
        "correctAnswerIndex": 0,
        "explanation": "The court held that Freedom of Speech and Profession via the Internet is protected under Art 19."
    },
    {
        "id": "ch92-l2-q26",
        "question": "The",
        "options": ["Tax reforms.","Social-action litigation (PIL) for civic duties and environment.","Police reforms.","Army budget."],
        "correctAnswerIndex": 1,
        "explanation": "Justice Krishna Iyer held that"
    },
    {
        "id": "ch92-l2-q27",
        "question": "Wait. Which case is known as the",
        "options": ["S.P. Gupta vs Union of India (1981).","Supreme Court Advocates on Record case (1993).","NJAC case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "S.P. Gupta gave the Executive the"
    },
    {
        "id": "ch92-l2-q28",
        "question": "In the",
        "options": ["Seeking advice only.","Concurrence (The CJI","Informing the CJI.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This gave birth to the"
    },
    {
        "id": "ch92-l2-q29",
        "question": "The",
        "options": ["Lawsuit by a judge.","Presidential Reference under Art 143 to clarify the Collegium","Election dispute.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The SC expanded the collegium to include the CJI and FOUR senior-most judges."
    },
    {
        "id": "ch92-l2-q30",
        "question": "In",
        "options": ["Right to luxury.","Right to Livelihood (of pavement dwellers).","Right to travel abroad.","None."],
        "correctAnswerIndex": 1,
        "explanation": "No person can live without the means of living, that is, the means of livelihood."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch92-l3-q1",
        "question": "Analyze the",
        "options": ["By allowing the 24th amendment to stand but subjecting it to the","(intrinsic limitation) doctrine.","By agreeing that Fundamental Rights can never be changed.","By making the President the sole interpreter.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Kesavananda overruled Golak Nath"
    },
    {
        "id": "ch92-l3-q2",
        "question": "Evaluate",
        "options": ["38th Amendment.","39th Amendment (Clause 4, specifically).","42nd Amendment.","44th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "This was the first time an amendment was struck down based on the newly minted Basic Structure doctrine."
    },
    {
        "id": "ch92-l3-q3",
        "question": "The",
        "options": ["The two sides of a coin.","The two wheels of a chariot.","The BEDROCK of the Constitution.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch92-l3-q4",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Balancing"
    },
    {
        "id": "ch92-l3-q5",
        "question": "Consider",
        "options": ["Because religion is bad.","Because a state government which acts in a non-secular manner (e.g., following a manifesto that promotes communal disharmony) is failing to run as per the Constitution, justifying Art 356.","Because the PM disliked those CMs.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that"
    },
    {
        "id": "ch92-l3-q6",
        "question": "Critically analyze",
        "options": ["If the law impacts property, it is valid.","The law must be tested for its effect on","(specifically the","of Art 14, 19, 21), regardless of the form and object of the law.","The law is never reviewed.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Coelho judgment made"
    },
    {
        "id": "ch92-l3-q7",
        "question": "The",
        "options": ["Creation of SAT/CAT.","The exclusion of High Court review (under Art 226/227) over the orders of Tribunals.","The appointment of judges by the President.","The use of English in tribunals."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that HCs cannot be bypassed and their supervisory power is a basic feature."
    },
    {
        "id": "ch92-l3-q8",
        "question": "In",
        "options": ["They are only suggestions.","They have the","and are binding on all authorities in India until regular legislation is enacted.","They are only for Rajasthan.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Article 141 states that the law declared by the SC is binding on all courts in India."
    },
    {
        "id": "ch92-l3-q9",
        "question": "Evaluation of",
        "options": ["Social Morality (tradition).","Constitutional Morality (Rights of the individuals).","They were ignored.","Both."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that even if the majority of society dislikes something, the Constitution protects individuals."
    },
    {
        "id": "ch92-l3-q10",
        "question": "In the",
        "options": ["Because it punished women only.","Because it treated women as inferior to men, denying them autonomy (Art 14) and was an arbitrary interference in privacy (Art 21).","Because it was a religious law.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Adultery was struck down for being"
    },
    {
        "id": "ch92-l3-q11",
        "question": "The",
        "options": ["Executive Supremacy.","Judicial Independence (specifically the","of the CJI","Federalism.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This Second Judges Case gave birth to the Collegium system to ensure judges are not political appointees."
    },
    {
        "id": "ch92-l3-q12",
        "question": "Analysis of",
        "options": ["Age, Caste, Education.","Backwardness, Inadequacy of representation, and Efficiency of administration (Art 335).","Income, Property, Job.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The SC upheld the amendments for reservation in promotion but made them conditional on this data."
    },
    {
        "id": "ch92-l3-q13",
        "question": "In",
        "options": ["Right to Freedom of Speech.","Right to Life (Article 21), because life without education is undignified.","Right against Exploitation.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This judicial"
    },
    {
        "id": "ch92-l3-q14",
        "question": "Evaluate the",
        "options": ["No safeguards.","Countersigning by a Judicial Magistrate, medical board review, and confirmation by a second board.","Only the family needs to sign.","Only the PM needs to sign."],
        "correctAnswerIndex": 1,
        "explanation": "The process is strict to prevent any misuse of the"
    },
    {
        "id": "ch92-l3-q15",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This limited view of the Preamble was finally corrected only in 1973 (Kesavananda)."
    },
    {
        "id": "ch92-l3-q16",
        "question": "What was the",
        "options": ["It was too expensive.","It included the","(Executive), who is the biggest litigant in the country, thereby violating the",".","It did not include women.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Executive presence in appointments was seen as a threat to the"
    },
    {
        "id": "ch92-l3-q17",
        "question": "In",
        "options": ["Lie detector tests.","Narco-analysis, Polygraph, and Brain Electrical Activation Profile (BEAP).","Physical searches.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Forced mental intrusion was held as"
    },
    {
        "id": "ch92-l3-q18",
        "question": "The",
        "options": ["By accepting it.","By passing the","to effectively nullify the SC","By changing the constitution.","By appointing more judges."],
        "correctAnswerIndex": 1,
        "explanation": "This historical clash set the stage for later debates on UCC and Triple Talaq."
    },
    {
        "id": "ch92-l3-q19",
        "question": "Which case is related to the",
        "options": ["Minerva Mills.","Indira Nehru Gandhi vs Raj Narain (1975).","S.R. Bommai.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that"
    },
    {
        "id": "ch92-l3-q20",
        "question": "The",
        "options": ["Yes.","No, it allowed evictions but mandated procedurally","treatment and alternative accommodation (where possible).","Only for rich pavement dwellers.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court balanced"
    },
    {
        "id": "ch92-l3-q21",
        "question": "Wait. In which case did the SC hold that",
        "options": ["Minerva Mills case.","Waman Rao case.","Indira Gandhi case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The 42nd amendment tried to stop this, but the court in Minerva Mills struck it down (partially)."
    },
    {
        "id": "ch92-l3-q22",
        "question": "Critically analyze",
        "options": ["It was valid.","It was invalid because of","and the","against the 14 banks (later reversed by 25th amendment).","It was a military issue.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Cooper case was the starting point of the 1970s FR vs DPSP conflicts."
    },
    {
        "id": "ch92-l3-q23",
        "question": "Analysis of",
        "options": ["Yes.","No, it held that","is different from",", though both are subject to the Basic Structure limit.","Only for temporary laws.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This was the major technical shift from the"
    },
    {
        "id": "ch92-l3-q24",
        "question": "In",
        "options": ["US Constitution.","Natural Law (Fundamental Rights as","and",").","British Law.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Justice Subba Rao"
    },
    {
        "id": "ch92-l3-q25",
        "question": "The",
        "options": ["Zamindari.","Privy Purses of the former Rulers of Indian States.","The IAS.","The Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "This led to the 26th Amendment Act (1971) which finally abolished the purses."
    },
    {
        "id": "ch92-l3-q26",
        "question": "Wait. In which case did the SC say",
        "options": ["St. Xavier","S.R. Bommai.","Ayodhya Case (2019).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Consistently, the court has rejected the"
    },
    {
        "id": "ch92-l3-q27",
        "question": "Evaluate",
        "options": ["Nationalism always wins.","By holding that the freedom to NOT sing is also protected if it is a genuine religious objection and does not disrespect the anthem.","Minorities must singing.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court famously said"
    },
    {
        "id": "ch92-l3-q28",
        "question": "The",
        "options": ["In Re: Vinay Chandra Mishra (1995).","C.K. Daphtary case.","Supreme Court Bar Association vs Union of India (1998).","None."],
        "correctAnswerIndex": 2,
        "explanation": "The court clarified its power to punish for contempt while distinguishing it from professional misconduct."
    },
    {
        "id": "ch92-l3-q29",
        "question": "In",
        "options": ["Art 1, 2, 3.","Art 32, 226, 136.","Art 14, 19, and 21 (Right to equality, freedom, and life).","None."],
        "correctAnswerIndex": 2,
        "explanation": "These three articles form the"
    },
    {
        "id": "ch92-l3-q30",
        "question": "Who summarized the Basic Structure as",
        "options": ["Justice H.R. Khanna.","Nani Palkhivala (in his arguments).","Justice J.S. Verma.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Palkhivala"
    }
];

export const CHAPTER_92_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
