import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch93-l1-q1",
        "question": "Which Article of the Indian Constitution is known as the",
        "options": ["Article 14","Article 19","Article 21","Article 32"],
        "correctAnswerIndex": 2,
        "explanation": "Article 21 (Protection of life and personal liberty) has been interpreted by the SC to include dozens of implied rights."
    },
    {
        "id": "ch93-l1-q2",
        "question": "The landmark",
        "options": ["Only the right to breathe.","Right to live with",".","Right to luxury.","Right to own a house."],
        "correctAnswerIndex": 1,
        "explanation": "Human dignity is the core of the expanded Article 21."
    },
    {
        "id": "ch93-l1-q3",
        "question": "Which of the following is an implied right under Article 21 as declared by the Supreme Court?",
        "options": ["Right to go abroad.","Right to shelter.","Right to sleep.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "The SC has included these rights over several decades of jurisprudence."
    },
    {
        "id": "ch93-l1-q4",
        "question": "The",
        "options": ["Hussainara Khatoon vs Home Secretary, State of Bihar (1979).","Keshvananda Bharati case.","Golak Nath case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This case dealt with the plight of under-trial prisoners in Bihar jails."
    },
    {
        "id": "ch93-l1-q5",
        "question": "Does Article 21 include the",
        "options": ["Yes, as held in the M.C. Mehta vs Union of India cases.","No, it only covers human life, not air or water.","Only if specifically mentioned by the local municipality.","Only during emergencies."],
        "correctAnswerIndex": 0,
        "explanation": "A healthy environment is essential for a dignified life."
    },
    {
        "id": "ch93-l1-q6",
        "question": "The",
        "options": ["Aruna Shanbaug case.","K.S. Puttaswamy vs Union of India (2017).","Navtej Johar case.","Triple Talaq case."],
        "correctAnswerIndex": 1,
        "explanation": "Privacy is deemed intrinsic to the"
    },
    {
        "id": "ch93-l1-q7",
        "question": "Which of the following rights is NOT included under Article 21 by the SC?",
        "options": ["Right to free legal aid.","Right to against solitary confinement.","Right to strike.","Right to emergency medical aid."],
        "correctAnswerIndex": 2,
        "explanation": "While several rights exist,"
    },
    {
        "id": "ch93-l1-q8",
        "question": "The",
        "options": ["Olga Tellis vs Bombay Municipal Corporation (1985).","Vishaka case.","Golak Nath case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Depriving a person of their livelihood would mean depriving them of their right to life."
    },
    {
        "id": "ch93-l1-q9",
        "question": "The",
        "options": ["Attorney General of India vs Lachma Devi (1989).","Death Penalty case.","Ratlam case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Public hanging was held to be a"
    },
    {
        "id": "ch93-l1-q10",
        "question": "The expansion of Article 21 illustrates the shift from",
        "options": ["Dictatorship.","Due Process of Law (Just, Fair and Reasonable).","Administrative discretion.","Presidential rule."],
        "correctAnswerIndex": 1,
        "explanation": "Maneka Gandhi case introduced the substantive"
    },
    {
        "id": "ch93-l1-q11",
        "question": "Is the",
        "options": ["Yes.","No.","Only for rich people.","Only if the PM says so."],
        "correctAnswerIndex": 0,
        "explanation": "This falls under reproductive rights and personal liberty."
    },
    {
        "id": "ch93-l1-q12",
        "question": "The",
        "options": ["Prem Shankar Shukla vs Delhi Administration (1980).","A.K. Gopalan case.","Sunil Batra case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Routine handcuffing is seen as an affront to human dignity."
    },
    {
        "id": "ch93-l1-q13",
        "question": "Does Article 21 provide the",
        "options": ["Yes, the right to choose a life partner is a fundamental right.","No.","Only for arranged marriages.","Only for foreign citizens."],
        "correctAnswerIndex": 0,
        "explanation": "This was reaffirmed in the Hadiya and Shakti Vahini cases."
    },
    {
        "id": "ch93-l1-q14",
        "question": "The",
        "options": ["Article 14","Article 21","Article 25","Article 30"],
        "correctAnswerIndex": 1,
        "explanation": "Deciding whether to have children is part of personal liberty and privacy."
    },
    {
        "id": "ch93-l1-q15",
        "question": "Which of the following describes the SC",
        "options": ["The right could not be suspended.","Personal liberty was effectively suspended and citizens could not approach courts for Habeas Corpus.","The right was expanded.","The court fire the PM."],
        "correctAnswerIndex": 1,
        "explanation": "This was a temporary"
    },
    {
        "id": "ch93-l1-q16",
        "question": "The",
        "options": ["Rudal Sah vs State of Bihar (1983).","Kharak Singh case.","Waman Rao case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The SC awarded monetary compensation as a"
    },
    {
        "id": "ch93-l1-q17",
        "question": "Wait. Is",
        "options": ["Yes, as declared by the SC in the Ramlila Maidan Incident (2012).","No, it is a biological necessity only.","Only during nights.","Only for students."],
        "correctAnswerIndex": 0,
        "explanation": "Disturbing sleep without justification violates Art 21."
    },
    {
        "id": "ch93-l1-q18",
        "question": "The",
        "options": ["Right to entertainment.","Right to Life (under Art 21).","Right to property.","None."],
        "correctAnswerIndex": 1,
        "explanation": "In the modern age, electricity is essential for a basic standard of living."
    },
    {
        "id": "ch93-l1-q19",
        "question": "In",
        "options": ["Foreigners.","Family members and friends (especially for prisoners).","Politicians.","Only jail wardens."],
        "correctAnswerIndex": 1,
        "explanation": "Social interface is a part of being human."
    },
    {
        "id": "ch93-l1-q20",
        "question": "The",
        "options": ["Free medical insurance.","Medial aid even during a strike.","Protection from occupational hazards.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "The SC has expanded right to health in several industrial cases."
    },
    {
        "id": "ch93-l1-q21",
        "question": "Wait. Can",
        "options": ["Yes.","No, the 44th Amendment Act (1978) made it non-suspendable even during emergency.","Only if the PM says so.","Only for non-citizens."],
        "correctAnswerIndex": 1,
        "explanation": "Art 20 and 21 are the"
    },
    {
        "id": "ch93-l1-q22",
        "question": "The",
        "options": ["Article 14.","Article 21.","Article 25.","Article 32."],
        "correctAnswerIndex": 1,
        "explanation": "Forced labour is an affront to"
    },
    {
        "id": "ch93-l1-q23",
        "question": "In",
        "options": ["A mere roof.","A decent dwelling that allows for physical, mental and spiritual growth.","A five-star hotel.","Only for beggars."],
        "correctAnswerIndex": 1,
        "explanation": "Right to shelter is a part of the Right to Life."
    },
    {
        "id": "ch93-l1-q24",
        "question": "The",
        "options": ["Only the victim.","Only the accused.","Both the victim and the accused.","Only the Judge."],
        "correctAnswerIndex": 2,
        "explanation": "Justice must be fair to all parties concerned."
    },
    {
        "id": "ch93-l1-q25",
        "question": "The",
        "options": ["Article 14.","Article 21.","Article 25.","Article 32."],
        "correctAnswerIndex": 1,
        "explanation": "To live a meaningful life, a citizen must have information about state actions."
    },
    {
        "id": "ch93-l1-q26",
        "question": "The",
        "options": ["Bangalore Water Supply case.","Consumer Education and Research Centre case (1995).","M. Nagaraj case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It protected the workers"
    },
    {
        "id": "ch93-l1-q27",
        "question": "Wait. Does Art 21 protect the",
        "options": ["Yes, reputation is an integral part of one","No, reputation is for movies only.","Only for politicians.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Subramanian Swamy vs Union of India (2016) upheld this facet."
    },
    {
        "id": "ch93-l1-q28",
        "question": "The",
        "options": ["Sunil Batra vs Delhi Administration.","Hussainara Khatoon case.","Ratlam case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Fetters can only be used in"
    },
    {
        "id": "ch93-l1-q29",
        "question": "Which of the following is an",
        "options": ["Right to wealth.","Right to minimal wages.","Right to a house to live in.","Both 2 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "Food, clothing, and shelter are the"
    },
    {
        "id": "ch93-l1-q30",
        "question": "The",
        "options": ["Saheli vs Commissioner of Police (1990).","Nilabati Behera case.","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "The state must pay for the violations of Fundamental Rights by its agents."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch93-l2-q1",
        "question": "The",
        "options": ["The court held that law must be enacted by Parliament.","The court held that the procedure must not be","(bringing in",").","The court held that Art 21 is only for citizens.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Maneka Gandhi case established the"
    },
    {
        "id": "ch93-l2-q2",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Environmental rights are seen as a prerequisite for a healthy and dignified life."
    },
    {
        "id": "ch93-l2-q3",
        "question": "The",
        "options": ["Right to food.","Right to Privacy and Personal Autonomy.","Right to education.","Right to work."],
        "correctAnswerIndex": 1,
        "explanation": "Deciding one"
    },
    {
        "id": "ch93-l2-q4",
        "question": "In",
        "options": ["Only the convicts.","Only the under-trials.","All persons (Citizens and Non-citizens) facing criminal charges.","Only the police."],
        "correctAnswerIndex": 2,
        "explanation": "The right to a speedy trial is universal for all accused persons under Indian law."
    },
    {
        "id": "ch93-l2-q5",
        "question": "Wait. Which case established that a person being arrested has the",
        "options": ["Joginder Kumar vs State of UP (1994).","K.S. Puttaswamy case.","D.K. Basu case.","Triple Talaq case."],
        "correctAnswerIndex": 0,
        "explanation": "Joginder Kumar case laid down the"
    },
    {
        "id": "ch93-l2-q6",
        "question": "The",
        "options": ["Right to property.","Right to Livelihood.","Right to vote.","Right to travel abroad."],
        "correctAnswerIndex": 1,
        "explanation": "If the state can deprive a person of their livelihood without due process, it would effectively be depriving them of life."
    },
    {
        "id": "ch93-l2-q7",
        "question": "Does Article 21 include the",
        "options": ["Yes, it is the","of the state as held in Paschim Banga Khet Mazdoor Samity (1996).","No, hospitals are for business.","Only for rich patients.","Only if they have insurance."],
        "correctAnswerIndex": 0,
        "explanation": "State cannot plead lack of funds as an excuse for failing to provide life-saving treatment."
    },
    {
        "id": "ch93-l2-q8",
        "question": "The",
        "options": ["As a leisure activity.","As a fundamental biological necessity for a healthy and meaningful existence.","As a choice.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Involuntary wakefulness caused by state action (like midnight police lathi-charge) was found unconstitutional."
    },
    {
        "id": "ch93-l2-q9",
        "question": "The",
        "options": ["Sunil Batra vs Delhi Administration (1978).","Golak Nath case.","Kesavananda case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "A prisoner remains a"
    },
    {
        "id": "ch93-l2-q10",
        "question": "In",
        "options": ["Right to escape.","The right to an","in open court for a Review Petition (previously decided in chamber/circular).","Right to choose the method of execution.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Natural justice requires a person facing death to be heard"
    },
    {
        "id": "ch93-l2-q11",
        "question": "Wait. Which case is related to",
        "options": ["M.H. Hoskot vs State of Maharashtra (1978).","Dharam Dutt case.","Anuradha Bhasin case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Justice Krishna Iyer held that"
    },
    {
        "id": "ch93-l2-q12",
        "question": "Regarding",
        "options": ["Only in Preamble.","Under DPSP (Article 45).","Explicitly as Art 14B.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Art 45 mandated free and compulsory education; the SC in Unnikrishnan made it a right via Art 21."
    },
    {
        "id": "ch93-l2-q13",
        "question": "The",
        "options": ["Presumption of guilt.","Standard of","and a",".","Judge must be from the police.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Impartiality is the soul of Art 21"
    },
    {
        "id": "ch93-l2-q14",
        "question": "The",
        "options": ["Article 14 only.","Article 19 only.","Article 21 (Personal Liberty and Dignity).","None."],
        "correctAnswerIndex": 2,
        "explanation": "The court held that individuals have the right to follow their"
    },
    {
        "id": "ch93-l2-q15",
        "question": "Assertion (A): Article 21 protects a person even from",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "A person cannot be kept in a"
    },
    {
        "id": "ch93-l2-q16",
        "question": "The",
        "options": ["Indra Sawhney.","Samatha vs State of AP (1997).","L. Chandra Kumar.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Social justice is seen as a"
    },
    {
        "id": "ch93-l2-q17",
        "question": "Wait. Does the",
        "options": ["Yes, as part of dignity even after death (Pandit Parmanand Katara vs Union of India, 1995).","No.","Only for rich people.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The dignity inherent in Art 21 extends to the treatment of a corpse."
    },
    {
        "id": "ch93-l2-q18",
        "question": "Regarding",
        "options": ["Fundamental duty of the citizen.","Fundamental right of the resident and an absolute directive for the municipality.","Discretionary work.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Right to health and hygiene is a part of Art 21."
    },
    {
        "id": "ch93-l2-q19",
        "question": "What is the",
        "options": ["Art 1, 2, 3.","Art 14, 19, and 21.","Art 32, 226, 136.","None."],
        "correctAnswerIndex": 1,
        "explanation": "These three articles collectively protect the individual"
    },
    {
        "id": "ch93-l2-q20",
        "question": "The",
        "options": ["M.C. Mehta cases.","In Re: Noise Pollution (2005) judgment.","Vishaka case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court set time and decibel limits for loudspeakers."
    },
    {
        "id": "ch93-l2-q21",
        "question": "In",
        "options": ["By saying internet is life.","By noting that access to health, education and livelihood in the modern age depends heavily on digital connectivity.","By banning the internet.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Digital rights are seen as the"
    },
    {
        "id": "ch93-l2-q22",
        "question": "Wait. Which case is related to the",
        "options": ["Pandit Parmanand Katara vs Union of India (1989).","K.S. Puttaswamy case.","D.K. Basu case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The SC ruled that a doctor must treat an accident victim BEFORE asking for any legal formalities."
    },
    {
        "id": "ch93-l2-q23",
        "question": "The",
        "options": ["The part that said",".","The part that allowed","by police to a suspect","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "The 9-judge bench finally put seal on the"
    },
    {
        "id": "ch93-l2-q24",
        "question": "Does Article 21 provide a",
        "options": ["Yes, as seen in the Sabarimala and Trupti Desai cases.","No.","Only for shopping malls.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Inclusion is a part of dignity in a republic."
    },
    {
        "id": "ch93-l2-q25",
        "question": "The",
        "options": ["The","(PUCL vs Union of India, 2001).","Indra Sawhney case.","Minerva Mills case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This case led to the expansion of mid-day meals and PDS system."
    },
    {
        "id": "ch93-l2-q26",
        "question": "Assertion (A): Article 21 is available to both",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Certain rights are universal in India, regardless of nationality."
    },
    {
        "id": "ch93-l2-q27",
        "question": "Wait. In which case did the SC hold that",
        "options": ["Suchita Srivastava vs Chandigarh Administration (2009).","Puttaswamy case.","Shayara Bano case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Woman"
    },
    {
        "id": "ch93-l2-q28",
        "question": "Regarding",
        "options": ["The jail map.","Dignity and the right to meet family and friends (Art 21).","Article 19.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Prisoner retains the right to remain"
    },
    {
        "id": "ch93-l2-q29",
        "question": "The",
        "options": ["Convict them immediately.","Provide a lawyer at state expense (Legal Aid).","Let them go.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This fulfills Art 39A and Art 21 requirement for fair procedure."
    },
    {
        "id": "ch93-l2-q30",
        "question": "The",
        "options": ["Expectations don","Citizens have a right to expect the state to act consistently and fairly when deprivation of life/liberty is at stake.","Everyone expects a house.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch93-l3-q1",
        "question": "Analyze the",
        "options": ["It kept them separate.","It held that they are not","but form an","(The Golden Triangle), where a law must satisfy the tests of all three simultaneously.","It deleted Article 19.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch93-l3-q2",
        "question": "The",
        "options": ["Bodily integrity and Personal Autonomy.","Informational Privacy.","Right to own a television.","Privacy of choice."],
        "correctAnswerIndex": 2,
        "explanation": "Ownership of objects is a property right; privacy is about the"
    },
    {
        "id": "ch93-l3-q3",
        "question": "In",
        "options": ["It requires them to be kept alive forever.","It includes the right to not be subjected to","that only prolongs the process of dying without hope of recovery.","It allows for their organs to be taken without consent.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court recognized that a"
    },
    {
        "id": "ch93-l3-q4",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Fundamental rights are subject to"
    },
    {
        "id": "ch93-l3-q5",
        "question": "Analyze the",
        "options": ["It has no impact.","A citizen can only lead a meaningful life and make informed choices (liberty) if they have information about the state actions that affect them.","It makes life difficult for the government.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Information is the"
    },
    {
        "id": "ch93-l3-q6",
        "question": "In",
        "options": ["Post-graduation.","Up to the age of 14 years.","Only for primary school.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court read Art 21 and Art 45 together to create this right, which was later constitutionalized by the 86th amendment."
    },
    {
        "id": "ch93-l3-q7",
        "question": "Evaluate the",
        "options": ["Only the current generation matters.","The State has a duty to protect resources for future generations as a part of the","of those yet to be born.","Past generations should be blamed.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Sustainability is now a constitutional imperative under the expanded Art 21."
    },
    {
        "id": "ch93-l3-q8",
        "question": "In",
        "options": ["DNA testing.","Involuntary Narco-analysis and Polygraph tests (violating","personal liberty).","Fingerprinting.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Mental privacy is an inviolable sanctuary under Article 21."
    },
    {
        "id": "ch93-l3-q9",
        "question": "The",
        "options": ["Because it costs too much.","Because it is an insult to the","of the human being, even one who is a condemned criminal.","Because it frightens the public.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Dignity does not end with a death sentence; the punishment must be"
    },
    {
        "id": "ch93-l3-q10",
        "question": "Analysis of",
        "options": ["Only the prisoner","Any public-spirited citizen (PIL) to protect the","of a fellow human being (The jail visitor).","Only the Governor.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Locus Standi was relaxed to ensure that Art 21 is not buried inside jail walls."
    },
    {
        "id": "ch93-l3-q11",
        "question": "The",
        "options": ["Reputation is above everything.","By holding that the right to reputation is a part of Art 21 and acts as a","on the right to free speech.","Speech is above everything.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Individual dignity (Reputation) cannot be sacrificed at the altar of another"
    },
    {
        "id": "ch93-l3-q12",
        "question": "In",
        "options": ["Right to wealth.","Right to Liberty and Fair Trial (Art 21).","Right to strike.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Indefinite detention without trial is the anti-thesis of Art 21."
    },
    {
        "id": "ch93-l3-q13",
        "question": "Evaluate the",
        "options": ["Suchita Srivastava vs Chandigarh Administration.","X vs Union of India (2023 - regarding abortion).","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "The court has consistently upheld bodily autonomy under the Art 21 umbrella."
    },
    {
        "id": "ch93-l3-q14",
        "question": "The",
        "options": ["Because it deals with police cars.","Because it protects the very","from state-sponsored violence (torture).","Because it is in the IPC.","None."],
        "correctAnswerIndex": 1,
        "explanation": "State cannot use its power to"
    },
    {
        "id": "ch93-l3-q15",
        "question": "Assertion (A): Article 21 includes the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Economic exploitation is a direct attack on the right to lead a dignified life."
    },
    {
        "id": "ch93-l3-q16",
        "question": "What is the",
        "options": ["Only physical life.","Life should be lived in its","sense with freedom from all constraints except those imposed by a just law.","Life is only about survival.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This expansive philosophy turned Art 21 into the"
    },
    {
        "id": "ch93-l3-q17",
        "question": "Review the",
        "options": ["Yes, forced sleep deprivation is a form of","and violates Art 21.","No, police can keep them awake for three days.","Only if the lawyer says so.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Investigative"
    },
    {
        "id": "ch93-l3-q18",
        "question": "The",
        "options": ["Consumers of milk.","Workers in","(like asbestos) to provide them with health checkups and insurance.","Only government servants.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Workplace safety is a facet of the right to health."
    },
    {
        "id": "ch93-l3-q19",
        "question": "Which case is associated with the",
        "options": ["Satwant Singh vs Assistant Passport Officer (1967).","Maneka Gandhi case (1978).","Both 1 and 2.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Satwant Singh established it; Maneka Gandhi broadened and solidified it via the"
    },
    {
        "id": "ch93-l3-q20",
        "question": "The",
        "options": ["It is not related.","A procedure that allows","is","and thus fails Art 21.","Art 21 is a subset of Art 20.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The specific protections of Art 20 and 22 are"
    },
    {
        "id": "ch93-l3-q21",
        "question": "Wait. Does the",
        "options": ["Yes, as an","trial is impossible without access (Anita Kushwaha vs Pushpa Sadan, 2016).","No, that","Only for the rich.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Access to courts is the"
    },
    {
        "id": "ch93-l3-q22",
        "question": "Critically analyze the",
        "options": ["Yes, if they sign a bond.","No, Fundamental Rights are not just for the individual but for the","; one cannot contract out of them (Behram Khurshid case).","Only for money.","None."],
        "correctAnswerIndex": 1,
        "explanation": "State remains responsible even if the individual"
    },
    {
        "id": "ch93-l3-q23",
        "question": "Analysis of",
        "options": ["Chakma Refugees case (NHRC vs State of Arunachal Pradesh, 1996).","Indira Gandhi case.","Minerva Mills.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Refugees/Foreigners are entitled to protection from state violence under Art 21."
    },
    {
        "id": "ch93-l3-q24",
        "question": "What is the status of",
        "options": ["It is fully criminalized.","It is currently under","(Delhi HC/SC) with growing observation that it violates the","part of Art 21.","It is ignored.","It is a religious right."],
        "correctAnswerIndex": 1,
        "explanation": "This is a contemporary"
    },
    {
        "id": "ch93-l3-q25",
        "question": "The",
        "options": ["Was too heavy.","Is an","that offends the basic humanity of the prisoner.","Is out of fashion.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch93-l3-q26",
        "question": "Wait. In which case did the SC hold that",
        "options": ["Kedar Nath case.","Hussainara Khatoon.","Ratlam case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It became the"
    },
    {
        "id": "ch93-l3-q27",
        "question": "The",
        "options": ["Govt pays for pollution.","The industry causing pollution is","to pay for the cost of restoration and damage regardless of intention.","Nobody pays.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This is the civil law face of environmental protection under Art 21."
    },
    {
        "id": "ch93-l3-q28",
        "question": "Does Article 21 provide a",
        "options": ["No, not as a direct fundamental right, though the state must direct policy towards it (Art 41).","Yes, for every citizen.","Only for government employees.","Only for teachers."],
        "correctAnswerIndex": 0,
        "explanation": "While"
    },
    {
        "id": "ch93-l3-q29",
        "question": "Which of the following is an",
        "options": ["Freedom from arbitrary arrest.","Dignity of the person.","The","procedure.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "These are the"
    },
    {
        "id": "ch93-l3-q30",
        "question": "Who summarized Art 21 as",
        "options": ["Justice P.N. Bhagwati.","Dr. Ambedkar.","Various judges across landmark cases.","The President."],
        "correctAnswerIndex": 2,
        "explanation": "It is a collective achievement of the Indian judiciary."
    }
];

export const CHAPTER_93_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
