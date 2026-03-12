import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch50-l1-q1",
        "question": "Which Article of the Constitution provides for the National Commission for Backward Classes (NCBC)?",
        "options": ["Article 338","Article 338A","Article 338B","Article 340"],
        "correctAnswerIndex": 2,
        "explanation": "Article 338B was inserted by the 102nd Amendment to grant constitutional status to NCBC."
    },
    {
        "id": "ch50-l1-q2",
        "question": "In which year did the National Commission for Backward Classes receive constitutional status?",
        "options": ["1993","2003","2018","2021"],
        "correctAnswerIndex": 2,
        "explanation": "The 102nd Constitutional Amendment Act of 2018 gave it constitutional status."
    },
    {
        "id": "ch50-l1-q3",
        "question": "The NCBC was initially established as a",
        "options": ["1950","1993","2000","2018"],
        "correctAnswerIndex": 1,
        "explanation": "Following the Mandali Commission judgment (Indra Sawhney), it was first established as a statutory body in 1993."
    },
    {
        "id": "ch50-l1-q4",
        "question": "The NCBC consists of a Chairperson, a Vice-Chairperson and how many other members?",
        "options": ["Two other members","Three other members","Four other members","Five other members"],
        "correctAnswerIndex": 1,
        "explanation": "It consists of 5 members: Chairperson, Vice-Chairperson and three other members."
    },
    {
        "id": "ch50-l1-q5",
        "question": "Who appoints the Chairperson and members of the NCBC?",
        "options": ["The Prime Minister","The President of India","The Minister of Social Justice","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "They are appointed by the President by warrant under his hand and seal (Art 338B)."
    },
    {
        "id": "ch50-l1-q6",
        "question": "The Chairperson of NCBC is given the rank and status of a:",
        "options": ["Cabinet Minister of the Union","Minister of State","Secretary","High Court Judge"],
        "correctAnswerIndex": 0,
        "explanation": "Like NCSC and NCST chairpersons, the NCBC chairperson also has Union Cabinet Minister rank."
    },
    {
        "id": "ch50-l1-q7",
        "question": "The tenure of office for NCBC members is determined by:",
        "options": ["The Parliament","The President of India","The Ministry of Personnel","The Constitution itself"],
        "correctAnswerIndex": 1,
        "explanation": "The President determines the conditions of service and tenure (currently 3 years)."
    },
    {
        "id": "ch50-l1-q8",
        "question": "To whom does the NCBC submit its annual report?",
        "options": ["The Parliament","The President of India","The Prime Minister","The NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "It submits the report to the President, who then lays it before the Parliament."
    },
    {
        "id": "ch50-l1-q9",
        "question": "While investigating a complaint, the NCBC has the powers of which court?",
        "options": ["Criminal Court","Civil Court","Special Court","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "It has the powers of a civil court for summoning, examining evidence, etc."
    },
    {
        "id": "ch50-l1-q10",
        "question": "Before the constitutional status of NCBC, which commission handled OBC functions?",
        "options": ["NCST","NCSC","UPSC","Planning Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Previously, the National Commission for Scheduled Castes (NCSC) handled OBC matters under Art 338(10)."
    },
    {
        "id": "ch50-l1-q11",
        "question": "Which Article provides for the appointment of a commission to investigate the conditions of backward classes?",
        "options": ["Article 338B","Article 340","Article 341","Article 342"],
        "correctAnswerIndex": 1,
        "explanation": "Article 340 provides for the Commission to investigate conditions of socially and educationally backward classes."
    },
    {
        "id": "ch50-l1-q12",
        "question": "The",
        "options": ["The power to declare a national holiday.","The power to identify and maintain their own list of socially and educationally backward classes (SEBCs).","The power to collect Income Tax.","The power to appoint UPSC members."],
        "correctAnswerIndex": 1,
        "explanation": "It clarified that states have independent lists for OBCs, distinguishing them from the central list."
    },
    {
        "id": "ch50-l1-q13",
        "question": "Is the Union Government required to consult NCBC on major policy matters?",
        "options": ["No","Yes, as per Article 338B(9)","Only for salary matters","Only during elections"],
        "correctAnswerIndex": 1,
        "explanation": "Mandatory consultation on major policy matters affecting OBCs is a constitutional requirement."
    },
    {
        "id": "ch50-l1-q14",
        "question": "The primary function of NCBC is to investigate and monitor:",
        "options": ["The wealth of OBC politicians.","The safeguards provided for socially and educationally backward classes.","The number of OBCs who go abroad.","The religious activities of OBCs."],
        "correctAnswerIndex": 1,
        "explanation": "Monitoring legal and constitutional safeguards for SEBCs is its core duty."
    },
    {
        "id": "ch50-l1-q15",
        "question": "Can a person serve as NCBC member for more than two terms?",
        "options": ["Yes","No, limited to two terms.","Only for the Chairperson.","Only if they are from the minority community."],
        "correctAnswerIndex": 1,
        "explanation": "Members are eligible for a maximum of two terms only."
    },
    {
        "id": "ch50-l1-q16",
        "question": "Who was the",
        "options": ["Justice R.N. Prasad","Justice V. Eswaraiah","Justice Bhagwan Lal Sahni","Justice Kaka Kalelkar"],
        "correctAnswerIndex": 0,
        "explanation": "Justice R.N. Prasad was the first chairman after the 1993 Act."
    },
    {
        "id": "ch50-l1-q17",
        "question": "The Kaka Kalelkar Commission (1953) was the first body appointed under which Article?",
        "options": ["Article 338","Article 340","Article 341","Article 342"],
        "correctAnswerIndex": 1,
        "explanation": "It was the first backward classes commission under Article 340."
    },
    {
        "id": "ch50-l1-q18",
        "question": "Which commission recommended 27% reservation for OBCs in 1980?",
        "options": ["Sarkaria Commission","Mandal Commission (B.P. Mandal)","Verma Commission","Shah Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Second Backward Classes Commission (Mandal Commission) recommended the reservation."
    },
    {
        "id": "ch50-l1-q19",
        "question": "If a report relates to a State Government, the President sends it to:",
        "options": ["The Chief Minister","The Governor of the state","The High Court","The State NCBC office"],
        "correctAnswerIndex": 1,
        "explanation": "As per standard procedure for constitutional commissions, it goes to the Governor (Art 338B(7))."
    },
    {
        "id": "ch50-l1-q20",
        "question": "The concept of",
        "options": ["Kesavananda Bharati","Indra Sawhney case (1992)","Minerva Mills","Golaknath"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court mandated exclusion of the"
    },
    {
        "id": "ch50-l1-q21",
        "question": "The Headquarters of NCBC is in:",
        "options": ["Mumbai","New Delhi","Kolkata","Hyderabad"],
        "correctAnswerIndex": 1,
        "explanation": "NCBC is headquartered in New Delhi."
    },
    {
        "id": "ch50-l1-q22",
        "question": "Can the NCBC take",
        "options": ["Yes","No","Only if the PM orders","Only if the Governor allows"],
        "correctAnswerIndex": 0,
        "explanation": "It has the power to initiate its own investigations (suo-motu)."
    },
    {
        "id": "ch50-l1-q23",
        "question": "Which of the following describes the",
        "options": ["Socially and Economically Backward Classes.","Socially and Educationally Backward Classes.","Scheduled and Empty Backward Classes.","Special and Elite Backward Classes."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B and 342A use"
    },
    {
        "id": "ch50-l1-q24",
        "question": "The rank of",
        "options": ["The Chairperson of NCBC","The Vice-Chairperson of NCBC","The Secretary of NCBC","Any two members"],
        "correctAnswerIndex": 1,
        "explanation": "Vice-chairperson gets Minister of State rank; Chairperson gets Cabinet rank."
    },
    {
        "id": "ch50-l1-q25",
        "question": "Is the Union Government mandated to consult NCBC on modifying the",
        "options": ["No","Yes (Art 338B(9))","Only during a Census","Only if the states agree"],
        "correctAnswerIndex": 1,
        "explanation": "Major policy matters (like list modification) require mandatory consultation."
    },
    {
        "id": "ch50-l1-q26",
        "question": "The",
        "options": ["Ministry of Home Affairs","Ministry of Social Justice and Empowerment","Ministry of Tribal Affairs","Ministry of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "Administrative support is provided by Social Justice and Empowerment ministry."
    },
    {
        "id": "ch50-l1-q27",
        "question": "Who was the",
        "options": ["Justice R.N. Prasad","Justice Bhagwan Lal Sahni","Hansraj Gangaram Ahir","V. Eswaraiah"],
        "correctAnswerIndex": 1,
        "explanation": "Justice Bhagwan Lal Sahni was the first to head the commission after it became constitutional."
    },
    {
        "id": "ch50-l1-q28",
        "question": "How many members of NCBC constitute the",
        "options": ["One","Two","Three including Chairman/Vice-Chairman","All five"],
        "correctAnswerIndex": 2,
        "explanation": "The rules specify three members for the quorum."
    },
    {
        "id": "ch50-l1-q29",
        "question": "The NCBC reports must be accompanied by a memorandum from the government explaining:",
        "options": ["The budget spent.","The reasons for non-acceptance of recommendations.","The number of OBC employees.","The location of the office."],
        "correctAnswerIndex": 1,
        "explanation": "This ensures transparency and legislative accountability (Art 338B(6))."
    },
    {
        "id": "ch50-l1-q30",
        "question": "The 102nd Amendment Act (2018) inserted which other Article related to specifying OBCs?",
        "options": ["Article 338A","Article 342A","Article 352","Article 366"],
        "correctAnswerIndex": 1,
        "explanation": "Art 342A governs the listing of socially and educationally backward classes."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch50-l2-q1",
        "question": "The 102nd Constitutional Amendment Act (2018) is significant because it:",
        "options": ["Abolished the OBC reservation.","Inserted Article 338B to provide constitutional status to the NCBC.","Reduced the power of the Supreme Court.","Merged NCSC and NCST."],
        "correctAnswerIndex": 1,
        "explanation": "Before this, NCBC was only a statutory body under the 1993 Act."
    },
    {
        "id": "ch50-l2-q2",
        "question": "In the",
        "options": ["Fixing the salary of MPs.","Entertaining and examining complaints/requests for inclusion in or exclusion from the lists of backward classes.","Conducting the Census.","Protecting the environment."],
        "correctAnswerIndex": 1,
        "explanation": "This led to the creation of the statutory NCBC in 1993."
    },
    {
        "id": "ch50-l2-q3",
        "question": "Assertion (A): The President appoints the Chairperson and members of NCBC by warrant under his hand and seal.\\nReason (R): NCBC is a constitutional body with status equal to NCSC and NCST.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch50-l2-q4",
        "question": "The 105th Constitutional Amendment Act (2021) was enacted to:",
        "options": ["Abolish the NCBC.","Restore the power of State Governments and UTs to identify and notify their own SEBC lists, overriding the interpretation of 102nd Amdt given in the Maratha Reservation case.","Make the NCBC part of the PMO.","Increase the term of members to 10 years."],
        "correctAnswerIndex": 1,
        "explanation": "It clarified the dual listing system (Central list and State lists) to preserve federalism."
    },
    {
        "id": "ch50-l2-q5",
        "question": "The",
        "options": ["Income/Wealth (e.g., Rs. 8 Lakh per annum threshold).","Parent","Both 1 and 2.","The hair color of the person."],
        "correctAnswerIndex": 2,
        "explanation": "Both social status and economic wealth are used as indicators to exclude the"
    },
    {
        "id": "ch50-l2-q6",
        "question": "Which Article provides the definition of",
        "options": ["Article 340.","Article 366(26C).","Article 342A.","Article 15."],
        "correctAnswerIndex": 1,
        "explanation": "Article 366(26C) contains the definition as provided by the 102nd Amendment."
    },
    {
        "id": "ch50-l2-q7",
        "question": "The NCBC has the power of a",
        "options": ["Summoning witnesses.","Ordering the arrest of a person for a regular crime.","Requiring the discovery and production of documents.","Receiving evidence on affidavits."],
        "correctAnswerIndex": 1,
        "explanation": "It has procedural civil powers for investigation, not criminal police powers."
    },
    {
        "id": "ch50-l2-q8",
        "question": "What is the role of NCBC in",
        "options": ["It makes the budget for the Ministry of Finance.","It advises on the socio-economic development policies for SEBCs and evaluates their progress.","It manages the stock market for backward classes.","It has no role in planning."],
        "correctAnswerIndex": 1,
        "explanation": "Consultative participation in policy design ensures SEBC interests are considered."
    },
    {
        "id": "ch50-l2-q9",
        "question": "The Central list of OBCs is prepared by which authority after the 102nd/105th Amendments?",
        "options": ["The NCBC Chairperson.","The President of India (notified in consultation with NCBC and potentially Governors).","The Supreme Court.","The Speaker of Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Article 342A lays down the procedure for Central List notification."
    },
    {
        "id": "ch50-l2-q10",
        "question": "Until 2018, who investigated the safeguards for OBCs in the absence of a constitutional commission?",
        "options": ["UPSC.","National Commission for Scheduled Castes (under Art 338(10)).","Planning Commission.","RBI."],
        "correctAnswerIndex": 1,
        "explanation": "NCSC had the additional residual function to protect OBCs and Anglo-Indians."
    },
    {
        "id": "ch50-l2-q11",
        "question": "A",
        "options": ["The Chief Minister.","The Governor of the state.","The High Court.","The Local MLA."],
        "correctAnswerIndex": 1,
        "explanation": "Standard federal procedure (Art 338B(7))."
    },
    {
        "id": "ch50-l2-q12",
        "question": "Is the",
        "options": ["No.","Yes (Art 338B(6)).","Only for financial reports.","Only if the opposition requests."],
        "correctAnswerIndex": 1,
        "explanation": "The President must cause the ATR and memorandum of non-acceptance to be laid."
    },
    {
        "id": "ch50-l2-q13",
        "question": "The",
        "options": ["The government making major policy changes affecting SEBCs without informed expert input.","The commission making too much noise.","Small states getting ignored.","The Supreme Court interfering."],
        "correctAnswerIndex": 1,
        "explanation": "It ensures the Commission is heard before any major policy shift."
    },
    {
        "id": "ch50-l2-q14",
        "question": "Can a person with",
        "options": ["No, only retired judges.","Yes, the constitution does not specify a judicial qualification (unlike the old 1993 statutory act).","Only if they are a former CM.","Only if they are an advocate in the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional body (Art 338B) has broader criteria than the old statutory one which required a judge."
    },
    {
        "id": "ch50-l2-q15",
        "question": "What is the relationship between NCBC and NHRC?",
        "options": ["They are rivals.","The NCBC Chairperson is an ex-officio member of the NHRC.","NHRC ignores NCBC.","NCBC is a department of NHRC."],
        "correctAnswerIndex": 1,
        "explanation": "Synergy exists to ensure human rights of backward classes are protected through specialized representation in the apex body."
    },
    {
        "id": "ch50-l2-q16",
        "question": "The",
        "options": ["Making them pay more tax.","It had no direct impact on BC status; tax policy is separate from social classification.","Giving all GST funds to NCBC.","Excluding BCs from paying GST."],
        "correctAnswerIndex": 1,
        "explanation": "The amendment was for indirect tax reform, not social grouping."
    },
    {
        "id": "ch50-l2-q17",
        "question": "Which judgment restricted states",
        "options": ["Kesavananda Bharati.","Maratha Reservation Case (Jaishri Laxmanrao Patil v. CM, Maharashtra).","SR Bommai.","Shah Bano."],
        "correctAnswerIndex": 1,
        "explanation": "The SC interpreted 102nd Amdt as taking away state"
    },
    {
        "id": "ch50-l2-q18",
        "question": "The term",
        "options": ["All government officers.","Chairman/Members of NCBC, NCSC, NCST, CAG, Judges, etc.","Only the Lokpal.","Only the CMs."],
        "correctAnswerIndex": 1,
        "explanation": "It marks high-level constitutional appointments."
    },
    {
        "id": "ch50-l2-q19",
        "question": "Is the",
        "options": ["Yes.","No, it is recommendatory/advisory, but carries significant political and moral weight.","Only for the reservation percentage.","Only if the PM agrees."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch50-l2-q20",
        "question": "The",
        "options": ["1 member.","3 members including Chairman/Vice-Chairman.","All 5 members.","Chairman only."],
        "correctAnswerIndex": 1,
        "explanation": "Procedural rules generally set the quorum at 3."
    },
    {
        "id": "ch50-l2-q21",
        "question": "Does NCBC handle",
        "options": ["Yes.","No, only SEBC (Socially and Educationally Backward Classes).","Only for OBC-EWS.","Only if they are Hindu."],
        "correctAnswerIndex": 1,
        "explanation": "EWS is for the general category (Art 15(6)/16(6)); NCBC is for SEBCs (Art 342A)."
    },
    {
        "id": "ch50-l2-q22",
        "question": "Which year was the",
        "options": ["1953","1980","1990","1993"],
        "correctAnswerIndex": 1,
        "explanation": "Mandal Commission (Second BC commission) submitted its report in 1980."
    },
    {
        "id": "ch50-l2-q23",
        "question": "Regarding",
        "options": ["The Commission regulates its own procedure.","The Parliament regulates the procedure.","The Supreme Court regulates the procedure.","The Prime Minister regulates the procedure."],
        "correctAnswerIndex": 0,
        "explanation": "This ensures the commission can function independently."
    },
    {
        "id": "ch50-l2-q24",
        "question": "Can NCBC summon a Secretary to the Govt of India?",
        "options": ["Yes, under its civil court powers of investigation.","No, secretaries have immunity.","Only with Cabinet Secretary","Only for financial crimes."],
        "correctAnswerIndex": 0,
        "explanation": "Civil court powers are broad for the purpose of evidence gathering."
    },
    {
        "id": "ch50-l2-q25",
        "question": "The tenure of 3 years for NCBC members is fixed by:",
        "options": ["The Constitution.","The President via rules of service.","The Parliament.","The commission itself."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(2) leaves tenure to the President"
    },
    {
        "id": "ch50-l2-q26",
        "question": "What is the role of NCBC in",
        "options": ["It can punish people who discriminate against OBCs.","It investigates specific complaints relating to deprivation of rights and safeguards of SEBCs.","It provides immediate cash compensation.","It has no role in complaints."],
        "correctAnswerIndex": 1,
        "explanation": "Fact-finding and monitoring the safeguard implementation is its grievance role."
    },
    {
        "id": "ch50-l2-q27",
        "question": "The 102nd Amendment Act added which number to the",
        "options": ["No change in Eighth Schedule.","Hindi.","Sanskrit.","All languages."],
        "correctAnswerIndex": 0,
        "explanation": "It was strictly about Backward Classes, not language."
    },
    {
        "id": "ch50-l2-q28",
        "question": "Who is the",
        "options": ["The Chairperson.","The President of India.","The Speaker of Lok Sabha.","The Chief Justice."],
        "correctAnswerIndex": 1,
        "explanation": "Standard removal power for presidential appointees."
    },
    {
        "id": "ch50-l2-q29",
        "question": "The status of",
        "options": ["Attending Cabinet meetings only.","Effective coordination with high-level bureaucrats and other constitutional bodies.","Getting a bigger house.","Nothing, it is ceremonial."],
        "correctAnswerIndex": 1,
        "explanation": "Rank matters for protocol and effective institutional interaction."
    },
    {
        "id": "ch50-l2-q30",
        "question": "Is NCBC required to protect",
        "options": ["No, that","Yes, if they belong to the OBC list (e.g., specific Muslim/Christian communities in OBC list).","Only for linguistic minorities.","Only for Jains."],
        "correctAnswerIndex": 1,
        "explanation": "Backwardness (SEBC) is the criterion; it can cross-cut religious lines if a community is in the OBC list."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch50-l3-q1",
        "question": "Analyze the impact of the 102nd Amendment on the",
        "options": ["To abolish the commission.","To restore the power of state governments to identify their own SEBC lists for state-level reservations, which the SC had interpreted as being lost under the 102nd Amendment.","To make the commission reports binding.","To increase the salary of Governors."],
        "correctAnswerIndex": 1,
        "explanation": "The 105th Amendment clarified that states maintain independent lists for state jobs/admissions, preserving the federal balance of power."
    },
    {
        "id": "ch50-l3-q2",
        "question": "Assertion (A): Article 342A (Central List of SEBCs) creates a procedures similar to Article 341 and 342.\\nReason (R): For both SCs and STs, the power to notify the list rests with the President, subject to modification by Parliament.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The inclusion of Art 342A by the 102nd Amendment brought OBC listing into the same high-level constitutional framework as SCs and STs."
    },
    {
        "id": "ch50-l3-q3",
        "question": "Which of the following is correct regarding the",
        "options": ["Only the Supreme Court can check for inclusions.","The NCBC (under the 1993 statutory act) had the primary duty to examine requests for inclusion/exclusion, which is now enshrined in its constitutional mandate (Art 338B).","NCBC has no power to exclude any group once added.","Inclusion is permanent as per the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "Periodic review and handling inclusions/exclusions are vital to maintain the integrity of backwardness criteria."
    },
    {
        "id": "ch50-l3-q4",
        "question": "In the",
        "options": ["State sovereignty is absolute.","The","of Article 342A was that only the President had the power to notify SEBCs for ALL purposes (until 105th Amdt changed this).","Parliament cannot amend the constitution.","Reservation should be abolished."],
        "correctAnswerIndex": 1,
        "explanation": "This narrow textual interpretation led to the 105th Amendment to restore the settled practice of dual (State and Central) lists."
    },
    {
        "id": "ch50-l3-q5",
        "question": "Analysis of Article 338B(9)",
        "options": ["No, only to the Union government.","Yes,",".","Only if the state has no OBC list of its own.","Only during a National Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional mandate extends to both tiers of government to ensure expert oversight."
    },
    {
        "id": "ch50-l3-q6",
        "question": "The",
        "options": ["The NCBC by a binding order.","The Union Cabinet based on the advice/data from NCBC and inflation metrics.","The Supreme Court in every judgment.","The Reserve Bank of India."],
        "correctAnswerIndex": 1,
        "explanation": "It is an executive decision based on socio-economic monitoring."
    },
    {
        "id": "ch50-l3-q7",
        "question": "Consider the following about NCBC composition (Art 338B(2)):\\n1. Chairperson\\n2. Vice-Chairperson\\n3. Three other members\\nWhich of them are appointed by",
        "options": ["1 only","1 and 2 only","All of them","None, they are appointed by a simple gazette notification."],
        "correctAnswerIndex": 2,
        "explanation": "Article 338B(3) specifies the warrant for"
    },
    {
        "id": "ch50-l3-q8",
        "question": "Why is the NCBC considered",
        "options": ["Because it is chaired by a Judge.","Because it possesses powers of a Civil Court specifically for investigation and fact-finding (summoning, evidence, documents).","Because it can sentence people to prison.","Because it advises the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Procedural judicial powers for non-judicial bodies are termed quasi-judicial."
    },
    {
        "id": "ch50-l3-q9",
        "question": "When NCBC submits its report, the ATR (Action Taken Report) must be laid before Parliament. If the government rejects a suggestion, it must:",
        "options": ["Pay a fine.","Provide a","explaining the reasons for non-acceptance, facilitating legislative debate.","Ask the President to fire the Commission.","Resign from office."],
        "correctAnswerIndex": 1,
        "explanation": "This is the core mechanism for democratic accountability for constitutional bodies."
    },
    {
        "id": "ch50-l3-q10",
        "question": "Review the",
        "options": ["Yes.","No, it specifically limited reservation to","for OBCs (unlike SC/ST who got promotional reservation via Art 16(4A)).","Only for Group A services.","Only for children of farmers."],
        "correctAnswerIndex": 1,
        "explanation": "OBC reservation is currently restricted to entry-level recruitment, a point of constant debate monitored by NCBC."
    },
    {
        "id": "ch50-l3-q11",
        "question": "The",
        "options": ["Clause (1).","Clause (3), clarifying state power to maintain state-specific SEBC lists for state purposes.","Clause (5).","Abolition clause."],
        "correctAnswerIndex": 1,
        "explanation": "Clause (3) was the"
    },
    {
        "id": "ch50-l3-q12",
        "question": "Compare Article 340 and 338B. Which describes their relationship accurately?",
        "options": ["They are the same.","Art 340 is for","; 338B provides for a","for monitoring and grievance redressal.","340 has been repealed by 338B.","338B only applies in the South, 340 in the North."],
        "correctAnswerIndex": 1,
        "explanation": "Art 340 is the"
    },
    {
        "id": "ch50-l3-q13",
        "question": "Analyzing the",
        "options": ["Yes.","No, typically agricultural income is excluded from the calculation of the","threshold for creamy layer, a major relief for rural OBCs.","Only if the land is more than 5 acres.","Only for sugarcane farmers."],
        "correctAnswerIndex": 1,
        "explanation": "Land-based income is treated differently to protect the agrarian backward classes."
    },
    {
        "id": "ch50-l3-q14",
        "question": "The NCBC Chairperson handles a complaint of",
        "options": ["An order to fire the PSU head.","A summons to the PSU head for record production and testimony.","A new law for PSUs.","A stay order on the next board meeting."],
        "correctAnswerIndex": 1,
        "explanation": "Investigative summons are the primary tool (Art 338B(8))."
    },
    {
        "id": "ch50-l3-q15",
        "question": "Does Article 338B apply to UTs without a legislature?",
        "options": ["No.","Yes, the commission monitors SEBC safeguards throughout India, including all UTs.","Only for Lakshadweep.","Only for Chandigarh."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional bodies have national jurisdiction."
    },
    {
        "id": "ch50-l3-q16",
        "question": "Which of the following describes",
        "options": ["NCBC can ignore the Supreme Court.","NCBC determines how its sittings, divisions, and administrative matters will function internally.","NCBC can use any language for laws.","NCBC can change the number of members."],
        "correctAnswerIndex": 1,
        "explanation": "Operational autonomy is a core institutional protection."
    },
    {
        "id": "ch50-l3-q17",
        "question": "Analyze the impact of",
        "options": ["It must ignore it.","It provides data and potentially monitors the implementation of any such sub-categorization safeguards if adopted by the government.","It conducts the sub-categorization by its own order.","Only the UPSC can do this."],
        "correctAnswerIndex": 1,
        "explanation": "Expert bodies like NCBC are vital for evidence-based policy shifts in reservation architecture."
    },
    {
        "id": "ch50-l3-q18",
        "question": "Compare the 102nd Amendment and the 103rd Amendment. Why are they often studied together?",
        "options": ["They are the same.","They both made changes to Article 15 and 16 regarding reservations (SEBC vs EWS).","They were passed on the same day.","They both increased the number of seats in Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "They represent the modern expansion and institutionalization of reservation frameworks."
    },
    {
        "id": "ch50-l3-q19",
        "question": "Can a",
        "options": ["No.","Yes, if they are socially and educationally backward and not already in SC/ST lists (e.g., backward sections of Muslims/Christians).","Only if they are Hindu.","Only if they are Jains."],
        "correctAnswerIndex": 1,
        "explanation": "Backwardness in India"
    },
    {
        "id": "ch50-l3-q20",
        "question": "The",
        "options": ["102nd Amendment.","The NCBC (Repeal) Act, 2018.","Both 1 and 2.","It was never abolished."],
        "correctAnswerIndex": 2,
        "explanation": "The old act was repealed specifically to clear the way for the new constitutional body."
    },
    {
        "id": "ch50-l3-q21",
        "question": "What does",
        "options": ["Only low income.","Multiple factors including social status, lack of educational access, and historical marginalization.","Only the language they speak.","Whether they live in cities or villages only."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch50-l3-q22",
        "question": "Assertion (A): The ATR on NCBC report must explain why a recommendation was NOT accepted.\\nReason (R): This forces the government to demonstrate that it has fairly considered the Commission",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Transparency is the"
    },
    {
        "id": "ch50-l3-q23",
        "question": "Is the",
        "options": ["Yes, eligible for two terms in total.","No, only one.","Only if he is under 65.","Only if the PM nominates him again."],
        "correctAnswerIndex": 0,
        "explanation": "Members/Chairperson can have a maximum of two terms."
    },
    {
        "id": "ch50-l3-q24",
        "question": "NCBC",
        "options": ["It has taken over Anglo-Indians from NCSC.","None. NCSC continues to handle Anglo-Indians as per Art 338(10).","NCST handles them.","UPSC handles them."],
        "correctAnswerIndex": 1,
        "explanation": "Residual functions for Anglo-Indians remain with NCSC."
    },
    {
        "id": "ch50-l3-q25",
        "question": "The",
        "options": ["President","Parliament (once the list is notified, inclusion/exclusion can only be done by a law passed by Parliament).","NCBC by a simple notification.","The Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The final authority to change the"
    },
    {
        "id": "ch50-l3-q26",
        "question": "Rank of",
        "options": ["Attend Cabinet meetings by right.","Coordinate effectively with other Secretaries and Ministers as a protocol peer.","Change the budget of any ministry.","Fire the DM of any district."],
        "correctAnswerIndex": 1,
        "explanation": "Rank provides institutional weight for effective oversight."
    },
    {
        "id": "ch50-l3-q27",
        "question": "The 102nd Amendment significantly revamped which existing",
        "options": ["Article 338 (added 338B and modified residual power descriptions).","Article 330.","Article 352.","Article 312."],
        "correctAnswerIndex": 0,
        "explanation": "Revision of Art 338 was necessary to transfer OBC oversight from NCSC to NCBC."
    },
    {
        "id": "ch50-l3-q28",
        "question": "Can NCBC commission its own",
        "options": ["Yes.","No, only Census can do surveys.","Only with the PM","Only in election years."],
        "correctAnswerIndex": 0,
        "explanation": "Investigative powers include the ability to baseline and research the status of communities."
    },
    {
        "id": "ch50-l3-q29",
        "question": "The term",
        "options": ["It is shorter.","It specifies the criteria (Social and Educational) rather than just a residual category (",").","It doesn","Castes","Only lawyers use SEBC."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional classification is based on specified"
    },
    {
        "id": "ch50-l3-q30",
        "question": "NCBC",
        "options": ["Rich and Poor.","The Community and the Bureaucracy during the implementation of reservations.","Delhi and Mumbai.","Government and Private companies only."],
        "correctAnswerIndex": 1,
        "explanation": "It provides a forum for marginalized groups to challenge executive apathy or bias."
    }
];

export const CHAPTER_50_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
