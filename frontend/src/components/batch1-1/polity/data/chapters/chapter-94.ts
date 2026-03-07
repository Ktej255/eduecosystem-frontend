import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch94-l1-q1",
        "question": "The",
        "options": ["National Judicial Appointments Commission (NJAC).","GST Council.","National Commission for OBCs.","NITI Aayog."],
        "correctAnswerIndex": 0,
        "explanation": "The NJAC was intended to replace the Collegium system for appointing judges."
    },
    {
        "id": "ch94-l1-q2",
        "question": "In which landmark case did the SC strike down the 99th Amendment as unconstitutional?",
        "options": ["First Judges Case.","Second Judges Case.","NJAC Case (Fourth Judges Case, 2015).","Minerva Mills case."],
        "correctAnswerIndex": 2,
        "explanation": "The SC held that it violated the"
    },
    {
        "id": "ch94-l1-q3",
        "question": "The",
        "options": ["OBC reservation in promotion.","SC/ST reservation in private schools.","10% reservation for Economically Weaker Sections (EWS) of the general category.","Women"],
        "correctAnswerIndex": 2,
        "explanation": "It introduced Art 15(6) and Art 16(6) to the Constitution."
    },
    {
        "id": "ch94-l1-q4",
        "question": "Which case upheld the constitutional validity of the 103rd Amendment (EWS reservation)?",
        "options": ["Indra Sawhney case.","Janhit Abhiyan vs Union of India (2022).","M. Nagaraj case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "A 5-judge bench (3:2 majority) upheld the EWS reservation."
    },
    {
        "id": "ch94-l1-q5",
        "question": "The",
        "options": ["Right to Education.","Goods and Services Tax (GST).","Election of the President.","Land Boundary Agreement."],
        "correctAnswerIndex": 1,
        "explanation": "It enabled a unified indirect tax regime for the whole country."
    },
    {
        "id": "ch94-l1-q6",
        "question": "Which case clarified the",
        "options": ["Union of India vs Mohit Minerals (2022).","SR Bommai case.","Keshvananda case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The SC held that GST Council"
    },
    {
        "id": "ch94-l1-q7",
        "question": "The",
        "options": ["Tribunals.","Co-operative Societies.","Gram Panchayats.","Lokayuktas."],
        "correctAnswerIndex": 1,
        "explanation": "A new Part IX-B was added specifically for co-operatives."
    },
    {
        "id": "ch94-l1-q8",
        "question": "The SC struck down part of the 97th Amendment in",
        "options": ["Ratified by the states.","Signed by the President.","Passed by 2/3rd majority.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The amendment affected"
    },
    {
        "id": "ch94-l1-q9",
        "question": "The",
        "options": ["Right to property abolition.","Anti-Defection Law (10th Schedule).","Fundamental Duties.","Panchayati Raj."],
        "correctAnswerIndex": 1,
        "explanation": "It was intended to check opportunistic political defections."
    },
    {
        "id": "ch94-l1-q10",
        "question": "Which case upheld the",
        "options": ["Kihoto Hollohan case (1992).","Sajjan Singh case.","Waman Rao case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Wait. In which case did the SC strike down Para 7 of the 10th Schedule?"
    },
    {
        "id": "ch94-l1-q11",
        "question": "The",
        "options": ["OBCs.","SCs and STs.","EWS.","All of the above."],
        "correctAnswerIndex": 1,
        "explanation": "It was a response to the Indra Sawhney judgment which had barred reservation in promotion."
    },
    {
        "id": "ch94-l1-q12",
        "question": "Which case upheld the",
        "options": ["M. Nagaraj vs Union of India (2006).","Golak Nath case.","Shankari Prasad case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The court upheld these"
    },
    {
        "id": "ch94-l1-q13",
        "question": "The",
        "options": ["Mini Constitution.","Emergency code.","Basic Structure law.","None."],
        "correctAnswerIndex": 0,
        "explanation": "It made massive changes across the Constitution during the Emergency."
    },
    {
        "id": "ch94-l1-q14",
        "question": "The",
        "options": ["1st Amendment.","24th Amendment.","42nd Amendment.","None."],
        "correctAnswerIndex": 2,
        "explanation": "It aimed to prevent the future misuse of the Emergency provisions."
    },
    {
        "id": "ch94-l1-q15",
        "question": "In",
        "options": ["102nd Amendment Act (which established NCBC).","97th Amendment.","101st Amendment.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This led to the 105th Amendment (2021) which restored the power to the states."
    },
    {
        "id": "ch94-l1-q16",
        "question": "The",
        "options": ["GST.","Exchange of enclaves with Bangladesh (Land Boundary Agreement).","NCBC status.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It was based on the 1974 bilateral treaty and the 2011 protocol."
    },
    {
        "id": "ch94-l1-q17",
        "question": "Wait. Which amendment gave",
        "options": ["101st.","102nd.","103rd.","104th."],
        "correctAnswerIndex": 1,
        "explanation": "NCBC was previously a statutory body but became constitutional via the 102nd amendment."
    },
    {
        "id": "ch94-l1-q18",
        "question": "The",
        "options": ["SCs.","STs.","Anglo-Indians (nomination).","All of the above."],
        "correctAnswerIndex": 2,
        "explanation": "It extended SC/ST reservation but discontinued the nomination of 2 Anglo-Indians."
    },
    {
        "id": "ch94-l1-q19",
        "question": "The",
        "options": ["Seventh Schedule.","Eighth Schedule.","Ninth Schedule.","Tenth Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "Initially, the Ninth Schedule was intended only for agrarian reforms."
    },
    {
        "id": "ch94-l1-q20",
        "question": "The",
        "options": ["20 years.","19 years.","18 years.","None."],
        "correctAnswerIndex": 2,
        "explanation": "This was done to involve the youth more in the democratic process."
    },
    {
        "id": "ch94-l1-q21",
        "question": "Wait. In which case did the SC rule that the",
        "options": ["Minerva Mills case (1980).","Golak Nath case.","Shankari Prasad case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Parliament cannot, by amending,"
    },
    {
        "id": "ch94-l1-q22",
        "question": "The",
        "options": ["Union government.","State government.","Local Self-Government (Panchayats and Municipalities).","None."],
        "correctAnswerIndex": 2,
        "explanation": "This added Part IX and Part IX-A to the Constitution."
    },
    {
        "id": "ch94-l1-q23",
        "question": "The",
        "options": ["Right to Information.","Right to Education (Article 21A).","Right to property.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It also modified the DPSP (Art 45) and added a Fundamental Duty (Art 51A-k)."
    },
    {
        "id": "ch94-l1-q24",
        "question": "The",
        "options": ["10% of total house.","15% of the total strength of the Lower House.","Exactly 30 ministers.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This was done to check"
    },
    {
        "id": "ch94-l1-q25",
        "question": "The",
        "options": ["Bodo.","Dogri.","Maithili.","English."],
        "correctAnswerIndex": 3,
        "explanation": "The 92nd added Bodo, Dogri, Maithili and Santhali. English is not in the 8th schedule."
    },
    {
        "id": "ch94-l1-q26",
        "question": "The",
        "options": ["Shankari Prasad case.","Sajjan Singh case.","Golak Nath case.","None."],
        "correctAnswerIndex": 2,
        "explanation": "It affirmed the power of Parliament to amend ANY part of the Constitution, including FRs."
    },
    {
        "id": "ch94-l1-q27",
        "question": "Wait. Is the",
        "options": ["Yes.","No, the Supreme Court struck it down and restored the","system.","Only for High Courts.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Fourth Judges case restored status quo ante."
    },
    {
        "id": "ch94-l1-q28",
        "question": "The",
        "options": ["530.","545.","550.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This followed the 1971 census and reorganisation of states."
    },
    {
        "id": "ch94-l1-q29",
        "question": "Which amendment removed the",
        "options": ["42nd Amendment.","44th Amendment.","1st Amendment.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It became a mere legal right under Article 300A."
    },
    {
        "id": "ch94-l1-q30",
        "question": "The",
        "options": ["Women","GST.","NCBC.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This is the most recent major amendment (33% reservation for women)."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch94-l2-q1",
        "question": "The SC in the",
        "options": ["Because the Law Minister is a politician.","Because the Executive is the biggest litigant in courts and its presence in selection process could affect the","of judges.","Because the Law Minister is not a lawyer.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Separation of powers requires that the Executive should not have a decisive say in judicial appointments."
    },
    {
        "id": "ch94-l2-q2",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The court differentiated between"
    },
    {
        "id": "ch94-l2-q3",
        "question": "The",
        "options": ["Provisions relating to Multi-State Co-operative Societies.","Provisions relating to State-level Co-operative Societies.","Right to form co-operatives (Art 19-1-c).","Both 1 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "The court only struck down the state-level provisions because they required state ratification (which was not done)."
    },
    {
        "id": "ch94-l2-q4",
        "question": "In",
        "options": ["GST Council is the absolute master of tax.","Recommendations of the GST Council are","and have a",", but they are not","mandates on the legislatures.","States cannot dissent.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This preserves the"
    },
    {
        "id": "ch94-l2-q5",
        "question": "Wait. Which amendment gave the National Commission for Backward Classes (NCBC) the power to",
        "options": ["101st.","102nd.","103rd.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Art 338B was inserted by the 102nd amendment, giving NCBC powers similar to NCSC and NCST."
    },
    {
        "id": "ch94-l2-q6",
        "question": "The",
        "options": ["Kesavananda Bharati.","Minerva Mills (1980).","Maneka Gandhi.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Only Art 39(b) and (c) can take precedence over Art 14 and 19 (as per Section 4 of 42nd/struck down)."
    },
    {
        "id": "ch94-l2-q7",
        "question": "Regarding",
        "options": ["91st Amendment Act (2003).","92nd Amendment.","61st Amendment.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Now, only"
    },
    {
        "id": "ch94-l2-q8",
        "question": "Wait. Which case is known as the",
        "options": ["S.P. Gupta case.","1998 Presidential Reference.","NJAC case.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It confirmed and expanded the"
    },
    {
        "id": "ch94-l2-q9",
        "question": "In the",
        "options": ["Caste is abolished.","Excluding the","from reservation benefits would itself be a violation of equality.","Only poor people can vote.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Economic criteria was accepted as a valid constitutional basis for affirmative action."
    },
    {
        "id": "ch94-l2-q10",
        "question": "The",
        "options": ["Laws giving effect to Art 39(b) and (c) (Socialism).","Laws related to elections.","Laws related to GST.","None."],
        "correctAnswerIndex": 0,
        "explanation": "It inserted Article 31C which was later partially struck down in Kesavananda."
    },
    {
        "id": "ch94-l2-q11",
        "question": "Wait. Which amendment",
        "options": ["38th Amendment.","39th Amendment.","40th Amendment.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Clause 4 of the 39th amendment was held to violate the basic feature of"
    },
    {
        "id": "ch94-l2-q12",
        "question": "The",
        "options": ["Sarkaria Commission.","Fazl Ali Commission (States Reorganisation).","Mandal Commission.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It abolished the distinction between Class A, B, C, and D states and introduced"
    },
    {
        "id": "ch94-l2-q13",
        "question": "The",
        "options": ["Democratic and Republic.","Socialist, Secular and Integrity.","Sovereign and Justice.","None."],
        "correctAnswerIndex": 1,
        "explanation": "These additions reflect the socio-political context of the 1970s."
    },
    {
        "id": "ch94-l2-q14",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This was one of the largest expansions of franchise in world history."
    },
    {
        "id": "ch94-l2-q15",
        "question": "Wait. Which amendment made the",
        "options": ["42nd Amendment.","44th Amendment.","Both (42nd made it absolute; 44th allowed one-time reconsider).","None."],
        "correctAnswerIndex": 2,
        "explanation": "The current position (binding after one reconsideration) is a mix of both amendments."
    },
    {
        "id": "ch94-l2-q16",
        "question": "In the",
        "options": ["States were too busy.","The court interpreted 102nd amendment (Art 342A) as centralizing the power of identification with the President (Centre).","Because the PM decided so.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament quickly passed the 105th amendment to reverse this interpretation and restore state power."
    },
    {
        "id": "ch94-l2-q17",
        "question": "The",
        "options": ["Simple majority.","Special majority only.","Special majority of Parliament AND Ratification by half the states (as it changed state boundaries).","None."],
        "correctAnswerIndex": 2,
        "explanation": "Ceding territory/changing state limits (Art 3) involves federal features."
    },
    {
        "id": "ch94-l2-q18",
        "question": "Wait. Which case held that",
        "options": ["Kihoto Hollohan.","Raja Ram Pal case.","Nabam Rebia case.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The court does not interfere during the"
    },
    {
        "id": "ch94-l2-q19",
        "question": "The",
        "options": ["Voluntary resignation from party.","Voting against party whip.","A","where 2/3rd of the party joins another party.","An independent joining a party after election."],
        "correctAnswerIndex": 2,
        "explanation": "Mergers are seen as collective shifts, not individual betrayals."
    },
    {
        "id": "ch94-l2-q20",
        "question": "The",
        "options": ["Article 21A.","Article 45 (provision for early childhood care).","Article 51A(k).","Both 2 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "21A is a Fundamental Right; 45 is a DPSP; 51A(k) is a Duty."
    },
    {
        "id": "ch94-l2-q21",
        "question": "Wait. Which amendment",
        "options": ["No amendment, this was done by the SC in I.R. Coelho (2007).","44th Amendment.","1st Amendment.","None."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch94-l2-q22",
        "question": "The",
        "options": ["Voting.","Holding any","(Ministership, chairmanship of govt bodies) for the remainder of the term or until re-election.","Living in Delhi.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This takes away the"
    },
    {
        "id": "ch94-l2-q23",
        "question": "In the",
        "options": ["The budget.","The principle of","and the","by ignoring those already suffering from historical disadvantage.","The PM","None."],
        "correctAnswerIndex": 1,
        "explanation": "The 3:2 split showed deep judicial disagreement on the"
    },
    {
        "id": "ch94-l2-q24",
        "question": "The",
        "options": ["Election Commission.","National Commission for Scheduled Castes (NCSC).","UPSC.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B closely mirrors Article 338 (NCSC)."
    },
    {
        "id": "ch94-l2-q25",
        "question": "The",
        "options": ["Proclamation of Emergency.","Ordinances promulgated by President/Governor.","Suspension of FRs.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Much of this was later reversed by the 44th Amendment."
    },
    {
        "id": "ch94-l2-q26",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Reservation was extended beyond government sector via this amendment."
    },
    {
        "id": "ch94-l2-q27",
        "question": "Wait. Which amendment gave constitutional status to",
        "options": ["73rd.","74th.","75th.","None."],
        "correctAnswerIndex": 1,
        "explanation": "73rd is for Panchayats (Rural); 74th is for Municipalities (Urban)."
    },
    {
        "id": "ch94-l2-q28",
        "question": "The",
        "options": ["All of India.","Meghalaya, Arunachal Pradesh, Nagaland and Mizoram.","Only Delhi.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This recognized the specific tribal character of the North-East states."
    },
    {
        "id": "ch94-l2-q29",
        "question": "The",
        "options": ["The PM signs it.","The next Census and following Delimitation exercise are completed.","The SC says ok.","None."],
        "correctAnswerIndex": 1,
        "explanation": "This timeline makes the implementation dependent on subsequent administrative processes."
    },
    {
        "id": "ch94-l2-q30",
        "question": "The",
        "options": ["The whole amendment must be struck down if one word is wrong.","Only the","part of an amendment can be struck down (Severed), while the rest remains valid.","Judiciary cannot touch amendments.","None."],
        "correctAnswerIndex": 1,
        "explanation": "As seen in the 10th Schedule (Para 7 was severed) and 97th Amendment (State co-operatives severed)."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch94-l3-q1",
        "question": "Analyze the",
        "options": ["Because it costs too much.","Because constituent power cannot be used to destroy the","of the Constitution (Judicial Independence), even if the amendment process (Art 368) is followed perfectly.","Because only the CJI can amend the constitution.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Basic Structure is a"
    },
    {
        "id": "ch94-l3-q2",
        "question": "In",
        "options": ["It is unconstitutional.","It is valid because SCs/STs already have a","vertical reservation (Part XVI) and the EWS is a","class for those not covered by any other reservation.","It is only for one year.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch94-l3-q3",
        "question": "The",
        "options": ["Doctrine of Eclipse.","Doctrine of Severability (The court severed the","that affected state powers without ratification, from the","that was within central power).","Doctrine of Pith and Substance.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Severability allowed the valid parts of the amendment to remain in the constitution."
    },
    {
        "id": "ch94-l3-q4",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This"
    },
    {
        "id": "ch94-l3-q5",
        "question": "In the",
        "options": ["Because the judges were lazy.","Because the court found no","that justified exceeding the cap, and held that 50% ensures a balance between social justice and efficiency (Art 335).","Because the 50% cap is in the text of the Constitution.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Breaking the 50% barrier without extreme justification was seen as a slippery slope into"
    },
    {
        "id": "ch94-l3-q6",
        "question": "Analyze the",
        "options": ["Primacy of the CJI alone.","Primacy of the","(Collegium), ensuring the Executive cannot overrule the judiciary","Primacy of the Law Minister.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Primacy is a shield for independence (Basic Structure)."
    },
    {
        "id": "ch94-l3-q7",
        "question": "Regarding",
        "options": ["The whole article.","The part that said","(The No-Judicial-Review clause).","The part that mentioned socialism.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament can make laws for DPSP, but it cannot"
    },
    {
        "id": "ch94-l3-q8",
        "question": "The",
        "options": ["Because it was too long.","Because it would allow a","majority in Parliament to","the Constitution itself by removing judicial review.","Because the President was ignored.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Limited amending power is a basic feature; a creature of the constitution (Parliament) cannot become its master."
    },
    {
        "id": "ch94-l3-q9",
        "question": "In",
        "options": ["Because it was written in poor English.","Because it","the powers of the High Courts/Supreme Court without being","by the states as required by the Proviso to Art 368(2).","Because the Speaker is not a judge.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Procedural"
    },
    {
        "id": "ch94-l3-q10",
        "question": "Evaluation of",
        "options": ["It increased the fine.","It removed the","exemption, meaning that even a group of members leaving the party is","unless it","It allowed the PM to fire the MP.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It made"
    },
    {
        "id": "ch94-l3-q11",
        "question": "Wait. In which case did the SC hold that",
        "options": ["S.R. Bommai case.","Kesavananda case.","Minerva Mills.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Secularism"
    },
    {
        "id": "ch94-l3-q12",
        "question": "Critically analyze",
        "options": ["Exactly 22.5%.","The","reservation (Recruitment + Promotion) must not exceed 50%.","There is no ceiling.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The 50% cap remains the"
    },
    {
        "id": "ch94-l3-q13",
        "question": "In",
        "options": ["It is still protected.","It is","on the grounds that it destroys the basic structure.","It is removed automatically.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch94-l3-q14",
        "question": "Evaluate the",
        "options": ["It gave more salary.","It elevated the commission to","status, meaning its powers can no longer be limited by an ordinary law (Statutory status).","It allowed the President to appoint the members directly.","Both 2 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "Constitutionalization makes the body"
    },
    {
        "id": "ch94-l3-q15",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Limiting the"
    },
    {
        "id": "ch94-l3-q16",
        "question": "In",
        "options": ["It","It","Deliberative Body","Legal","States cannot object.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch94-l3-q17",
        "question": "Wait. Which case established that",
        "options": ["M. Nagaraj case.","Indra Sawhney case.","Minerva Mills.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Justice Kapadia explicitly listed Art 16(1) as a basic feature in Nagaraj."
    },
    {
        "id": "ch94-l3-q18",
        "question": "What was the",
        "options": ["Cost.","Exclusion of","schools from the burden of free education (later resolved in Society for Unaided Schools case).","The age limit (up to 14).","None."],
        "correctAnswerIndex": 1,
        "explanation": "The court held that"
    },
    {
        "id": "ch94-l3-q19",
        "question": "Critically analyze",
        "options": ["Sampath Kumar upheld the","of HCs; Chandra Kumar overruled it and restored HC","They said the same thing.","Chandra Kumar abolished all tribunals.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Judicial review by HCs (Art 226) cannot be completely sub-stituted by Tribunals."
    },
    {
        "id": "ch94-l3-q20",
        "question": "In",
        "options": ["Article 368.","Article 105 (Powers and Privileges of the House).","Article 32.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Self-purification from corrupt members (Cash-for-query) is an inherent power of the house."
    },
    {
        "id": "ch94-l3-q21",
        "question": "Wait. In which case did the SC hold that",
        "options": ["S.R. Bommai.","Keshvananda case.","Both.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Federalism is a core component of the basic structure."
    },
    {
        "id": "ch94-l3-q22",
        "question": "Analyze the",
        "options": ["Yes.","No.","Only for the Centre.","None."],
        "correctAnswerIndex": 0,
        "explanation": "This doctrine helps in resolving conflicts when a tax seems to fall on both central and state lists."
    },
    {
        "id": "ch94-l3-q23",
        "question": "What is the status of the",
        "options": ["It does not apply.","It applies similarly to both Houses of the State Legislature.","Only applies to Lok Sabha.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Defection is a ground for disqualification in all legislative houses in India."
    },
    {
        "id": "ch94-l3-q24",
        "question": "Evaluate the",
        "options": ["73rd/74th (Local govt).","99th (NJAC).","101st (GST).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Any amendment affecting the"
    },
    {
        "id": "ch94-l3-q25",
        "question": "In",
        "options": ["He is busy.","A notice for the Speaker","Own removal","The PM is present.","None."],
        "correctAnswerIndex": 1,
        "explanation": "A Speaker under a"
    },
    {
        "id": "ch94-l3-q26",
        "question": "Wait. Which case held that",
        "options": ["Indira Gandhi vs Raj Narain.","Minerva Mills.","K.S. Puttaswamy.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Rule of Law is the most pervasive"
    },
    {
        "id": "ch94-l3-q27",
        "question": "The",
        "options": ["State of West Bengal vs Bela Banerjee.","Shankari Prasad.","Golak Nath.","None."],
        "correctAnswerIndex": 0,
        "explanation": "It clarified that"
    },
    {
        "id": "ch94-l3-q28",
        "question": "Does an",
        "options": ["Yes.","No, it remains","and void ab initio.","Only for tax laws.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional death of a law is final unless a new amendment is passed correctly."
    },
    {
        "id": "ch94-l3-q29",
        "question": "Who chaired the committee that recommended the",
        "options": ["Dinesh Goswamy.","NCRWC (Venkatachaliah Commission).","Varkaria Commission.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The limitation of cabinet size was a key suggestion for"
    },
    {
        "id": "ch94-l3-q30",
        "question": "Final Analysis: Which has more weight in the Indian system -",
        "options": ["Legislative mandate.","Constitutional morality (as defined by SC in cases like NJAC/Navtej/Puttaswamy).","They are equal.","None."],
        "correctAnswerIndex": 1,
        "explanation": "In case of conflict, the"
    }
];

export const CHAPTER_94_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
