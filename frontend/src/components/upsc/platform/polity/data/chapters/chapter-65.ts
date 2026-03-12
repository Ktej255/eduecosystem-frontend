import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch65-l1-q1",
        "question": "The Election Commission of India is a permanent and independent body established by the Constitution. Which Article directly provides for its establishment?",
        "options": ["Article 320","Article 324","Article 326","Article 315"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324 of the Constitution provides for the establishment of the Election Commission and vests in it the superintendence, direction, and control of elections to Parliament, State Legislatures, and to the offices of President and Vice-President."
    },
    {
        "id": "ch65-l1-q2",
        "question": "The Election Commission is responsible for the conduct of elections to which of the following? 1. Parliament and State Legislatures. 2. Office of President and Vice-President. 3. Panchayats and Municipalities.",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The Election Commission of India conducts elections to Parliament, State Legislatures, and the offices of President and Vice-President. Elections to Panchayats and Municipalities are conducted by the State Election Commission (Article 243K and 243ZA), which is a separate body."
    },
    {
        "id": "ch65-l1-q3",
        "question": "Under the CEC and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023, the Selection Committee for appointing the CEC consists of:",
        "options": ["PM, Leader of Opposition in Lok Sabha, and the Chief Justice of India","PM, a Union Cabinet Minister nominated by the PM, and the Leader of Opposition in Lok Sabha","President, PM, and the Speaker of Lok Sabha","PM, CJI, and a nominee of the President"],
        "correctAnswerIndex": 1,
        "explanation": "The 2023 Act replaced the Supreme Court"
    },
    {
        "id": "ch65-l1-q4",
        "question": "What is the term of office for the Chief Election Commissioner and other Election Commissioners?",
        "options": ["5 years or until the age of 62","6 years or until the age of 65, whichever is earlier","6 years or until the age of 70","5 years or until the age of 65"],
        "correctAnswerIndex": 1,
        "explanation": "The CEC and other Election Commissioners hold office for a term of 6 years or until the age of 65 years, whichever is earlier. This was confirmed by the 2023 Act."
    },
    {
        "id": "ch65-l1-q5",
        "question": "The conditions of service and tenure of office of the Election Commissioners are determined by:",
        "options": ["The Constitution","The Parliament by law","The President","The Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324(5) states that the conditions of service and tenure of office of the ECs shall be determined by an Act of Parliament. The CEC and Other ECs Act, 2023 is the current law governing these conditions."
    },
    {
        "id": "ch65-l1-q6",
        "question": "The Chief Election Commissioner can be removed from office in the same manner and on the same grounds as:",
        "options": ["The Attorney General of India","A Judge of the Supreme Court","The Vice-President","The Comptroller and Auditor General only"],
        "correctAnswerIndex": 1,
        "explanation": "The CEC enjoys a special constitutional safeguard — he can be removed only through the impeachment process (i.e., by an address of Parliament on grounds of proved misbehaviour or incapacity), the same process used for removing a Supreme Court Judge."
    },
    {
        "id": "ch65-l1-q7",
        "question": "Any other Election Commissioner or a Regional Commissioner cannot be removed from office except on the recommendation of:",
        "options": ["The President","The Chief Election Commissioner","The Union Cabinet","The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "While the CEC is protected by the impeachment process, other Election Commissioners and Regional Commissioners can only be removed on the recommendation of the CEC. This gives the CEC a supervisory role over their tenure."
    },
    {
        "id": "ch65-l1-q8",
        "question": "The",
        "options": ["Six months before the election","From the date the election schedule is announced by the Commission","From the date the notification for the first phase is issued","Only on the day of polling"],
        "correctAnswerIndex": 1,
        "explanation": "The Model Code of Conduct (MCC) is a set of guidelines for political parties and candidates that comes into effect the moment the Election Commission announces the election schedule. It remains in force until the election process is completed."
    },
    {
        "id": "ch65-l1-q9",
        "question": "Which Article of the Constitution provides for",
        "options": ["Article 324","Article 325","Article 326","Article 327"],
        "correctAnswerIndex": 2,
        "explanation": "Article 326 provides for Universal Adult Suffrage, which means every citizen of India who is not less than 18 years of age (after the 61st Amendment) and is not otherwise disqualified, has the right to vote."
    },
    {
        "id": "ch65-l1-q10",
        "question": "The 61st Amendment Act of 1988 reduced the voting age from 21 to 18 years. This amendment was made to Article:",
        "options": ["324","325","326","328"],
        "correctAnswerIndex": 2,
        "explanation": "The 61st Amendment Act, 1988 amended Article 326 to reduce the minimum voting age from 21 years to 18 years, thereby enfranchising a larger section of the Indian youth in the democratic process."
    },
    {
        "id": "ch65-l1-q11",
        "question": "In a multi-member Election Commission, if there is a difference of opinion between the CEC and other Election Commissioners, the matter is decided by:",
        "options": ["The Chief Election Commissioner","The President","The majority","The Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "When there is a difference of opinion among the members of the multi-member Election Commission, the matter is decided by majority. The CEC does not have a veto power over other Election Commissioners."
    },
    {
        "id": "ch65-l1-q12",
        "question": "The",
        "options": ["The delimitation of constituencies","Disqualifications of members of Parliament and State Legislatures","The timing of the next census","The appointment of the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 103 and Article 192, the President/Governor is bound to act according to the opinion of the Election Commission on the question of disqualification of members of Parliament/State Legislatures (other than the Tenth Schedule)."
    },
    {
        "id": "ch65-l1-q13",
        "question": "To be recognized as a",
        "options": ["Two states","Three states","Four states","Five states"],
        "correctAnswerIndex": 2,
        "explanation": "One of the criteria for a party to be recognized as a National Party is that it must be recognized as a State Party in at least four states. Other criteria involve minimum vote share or seat thresholds in Lok Sabha elections."
    },
    {
        "id": "ch65-l1-q14",
        "question": "Who appoints the",
        "options": ["The CEC","The President, after consultation with the Election Commission","The Governor of the State","The Chief Secretary of the State"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324(4) provides that the President may appoint Regional Commissioners to assist the Election Commission, after consulting with the Commission, if the President deems it necessary."
    },
    {
        "id": "ch65-l1-q15",
        "question": "The",
        "options": ["1989","1993","2000","1975"],
        "correctAnswerIndex": 0,
        "explanation": "The Election Commission was a single-member body (with only the CEC) from 1950 to 1989. In 1989, two additional Election Commissioners were appointed for the first time. After a brief reversion to a single-member body, it became a three-member body again in 1993."
    },
    {
        "id": "ch65-l1-q16",
        "question": "Which of the following is responsible for preparing and periodically updating the electoral rolls?",
        "options": ["The Census Commissioner","The Election Commission","The District Magistrate","The Home Ministry"],
        "correctAnswerIndex": 1,
        "explanation": "The Election Commission of India is responsible for the preparation and periodic revision of electoral rolls. This is a core function under its mandate of superintendence, direction, and control of elections."
    },
    {
        "id": "ch65-l1-q17",
        "question": "The",
        "options": ["Allow voters to take a copy of their vote home","Provide a physical verification of the electronic vote cast by a voter","Speed up the counting process","Reduce the cost of elections"],
        "correctAnswerIndex": 1,
        "explanation": "VVPAT is an independent verification system attached to EVMs that allows voters to visually verify that their vote has been cast correctly. It produces a paper slip showing the symbol and name of the candidate voted for."
    },
    {
        "id": "ch65-l1-q18",
        "question": "Under Article 324, the",
        "options": ["Yes, the EC handles all election disputes","No — post-election disputes are handled by the Judiciary via Election Petitions","Yes, but only for local body elections","Only if the President refers them"],
        "correctAnswerIndex": 1,
        "explanation": "The Election Commission"
    },
    {
        "id": "ch65-l1-q19",
        "question": "The",
        "options": ["Print the ballot papers","Recognize political parties and allot symbols to them","Decide disputes regarding the merger of parties","Both (b) and (c)"],
        "correctAnswerIndex": 3,
        "explanation": "The Election Symbols (Reservation and Allotment) Order, 1968, empowers the EC to (a) recognize political parties and allot symbols to them, and (b) act as the final authority in resolving disputes regarding splits and mergers of recognized parties."
    },
    {
        "id": "ch65-l1-q20",
        "question": "The",
        "options": ["Fund the candidates","Monitor the election expenses of candidates and ensure they remain within the legal limit","Collect taxes from voters","Audit the accounts of the Union Government"],
        "correctAnswerIndex": 1,
        "explanation": "The Expenditure Observer is appointed by the ECI to keep a close watch on the election expenditure of candidates and to prevent the use of money power to influence voters. They monitor compliance with the statutory expenditure ceiling."
    },
    {
        "id": "ch65-l1-q21",
        "question": "Regarding the composition of the Commission, the President of India has the power to:",
        "options": ["Appoint only the Chief Election Commissioner","Fix the number of Election Commissioners from time to time","Appoint the CEC only after consultation with the CJI","Dismiss any Election Commissioner at will"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324(2) states that the Election Commission shall consist of the CEC and such number of other Election Commissioners as the President may from time to time fix. Currently, the number is fixed at two other ECs."
    },
    {
        "id": "ch65-l1-q22",
        "question": "Which of the following is a",
        "options": ["Their salary is charged on the Consolidated Fund of India","Their conditions of service cannot be varied to their disadvantage after appointment","They are barred from further appointment under the Government","Both (a) and (b)"],
        "correctAnswerIndex": 3,
        "explanation": "The Constitution provides two key safeguards: (1) the CEC"
    },
    {
        "id": "ch65-l1-q23",
        "question": "Regarding the",
        "options": ["It is a part of the Election Commission of India","It is an independent constitutional body responsible for local body elections","Its head is appointed by the Chief Election Commissioner of India","It conducts the elections for the State Legislative Assembly"],
        "correctAnswerIndex": 1,
        "explanation": "The State Election Commission (SEC) is a separate, independent constitutional body (Articles 243K and 243ZA) that conducts elections to Panchayats and Municipalities. It is not subordinate to the ECI. Its head, the State Election Commissioner, is appointed by the Governor."
    },
    {
        "id": "ch65-l1-q24",
        "question": "Regarding the",
        "options": ["Heads the commission","Provides the necessary assistance and staff to the commission","Is not involved in the delimitation process","Can veto the orders of the Delimitation Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Delimitation Commission is a separate body. However, the Election Commission provides assistance and staff. The CEC or a nominee serves as an ex-officio member of the Delimitation Commission."
    },
    {
        "id": "ch65-l1-q25",
        "question": "Which of the following is NOT a quasi-judicial function of the Election Commission?",
        "options": ["Settling disputes relating to the split in recognized political parties","Acting as a court for matters related to the allotment of symbols","Disqualifying a candidate for failure to lodge an account of election expenses","Fixing the date for a National Emergency"],
        "correctAnswerIndex": 3,
        "explanation": "Fixing the date for a National Emergency is a power of the President acting on Cabinet advice (Article 352), not the EC. The other three are legitimate quasi-judicial functions of the Election Commission."
    },
    {
        "id": "ch65-l1-q26",
        "question": "The",
        "options": ["Requesting the President or Governor for the staff necessary for conducting elections","Ordering a re-poll in case of booth capturing","Cancelling an election in case of large-scale irregularities","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "All three are administrative powers of the EC: (a) requesting staff, (b) ordering re-polls, and (c) cancelling elections. These powers flow from its plenary"
    },
    {
        "id": "ch65-l1-q27",
        "question": "The Supreme Court in the SS Dhanoa Case (1991) held that:",
        "options": ["The CEC is superior to other Commissioners","The CEC and other Commissioners have equal powers in decision-making","The CEC has no role in removal of other Commissioners","Only the CEC is a constitutional authority"],
        "correctAnswerIndex": 1,
        "explanation": "In the SS Dhanoa case, the Supreme Court clarified that the CEC and other Election Commissioners have equal powers in decision-making and are on par with each other. The CEC does not have a supervisory or overriding power over other ECs."
    },
    {
        "id": "ch65-l1-q28",
        "question": "The Election Commission can",
        "options": ["If the party fails to win any seats in two consecutive elections","If the party obtained registration by fraud or forgery","If the party criticizes the Commission","The Commission currently has no power to de-register a party; it can only","them"],
        "correctAnswerIndex": 3,
        "explanation": "Under current law, the ECI has the power to"
    },
    {
        "id": "ch65-l1-q29",
        "question": "Which of the following is a ground for a party to lose its status as a",
        "options": ["Failure to secure 6% of valid votes in four or more states","Failure to win at least 4 seats in the Lok Sabha from any state/states","If it no longer satisfies any of the three criteria for recognition","All of the above"],
        "correctAnswerIndex": 2,
        "explanation": "A party loses its National Party status if it no longer satisfies any of the three criteria: (i) 6% votes in 4+ states + 4 LS seats, (ii) 2% of total LS seats from 3+ states, or (iii) recognition as state party in 4+ states."
    },
    {
        "id": "ch65-l1-q30",
        "question": "Assertion (A): The Constitution has not debarred the retiring Election Commissioners from any further appointment by the Government. Reason (R): This is considered a flaw that may affect the perceived independence of the Commission.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is not the correct explanation of A","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the CAG (who is debarred from further government employment), the Constitution does not bar CEC/ECs from post-retirement government appointments. This is widely regarded as a structural flaw that can compromise the perceived independence of the Commission."
    },
    {
        "id": "ch65-l1-q31",
        "question": "The 2023 Appointment Act replaced the Supreme Court",
        "options": ["PM, LoP in Lok Sabha, and a senior-most Union Cabinet Minister","PM, Leader of Opposition in Lok Sabha, and the Chief Justice of India","President, PM, and the Speaker of Lok Sabha","PM, LoP in Rajya Sabha, and the CJI"],
        "correctAnswerIndex": 1,
        "explanation": "In the Anoop Baranwal v. Union of India (2023) case, the Supreme Court directed that the CEC and ECs be appointed by a committee of PM, Leader of Opposition, and the CJI. The 2023 Act replaced the CJI with a Union Cabinet Minister nominated by the PM, which has been a subject of significant constitutional debate."
    },
    {
        "id": "ch65-l1-q32",
        "question": "The",
        "options": ["The Chief Justice of India","The Cabinet Secretary","The Law Minister","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The 2023 Act mandates a Search Committee headed by the Cabinet Secretary (as Chairperson) and comprising two other members (not below the rank of Secretary to the Government), which prepares a panel of five persons for the Selection Committee to consider."
    },
    {
        "id": "ch65-l1-q33",
        "question": "The",
        "options": ["It is a Constitutional provision under Article 324","It is a set of guidelines voluntarily agreed upon by political parties, enforced by the moral authority and executive power of the ECI","It is a statutory requirement under the Representation of the People Act, 1951","It is a Supreme Court directive"],
        "correctAnswerIndex": 1,
        "explanation": "The MCC is a unique instrument — it is a set of behavioural guidelines that evolved through consensus among political parties and the ECI. It is NOT backed by any statute or law. The ECI enforces it through its plenary powers under Article 324, including its power to cancel registration, defer elections, or censure parties."
    },
    {
        "id": "ch65-l1-q34",
        "question": "The term",
        "options": ["The CEC and other ECs have equal voting power in decision-making","The CEC has a veto power over the ECs","All ECs are paid the same salary as the CEC","Only the CEC can address press conferences"],
        "correctAnswerIndex": 0,
        "explanation": "After the 1993 Amendment, the CEC and other ECs were placed at par. They enjoy equal salary, status, and decision-making power. Business is transacted by majority vote. The CEC"
    },
    {
        "id": "ch65-l1-q35",
        "question": "Under the 2023 Act, the salary and conditions of service of the CEC and ECs have been equated with that of:",
        "options": ["A Judge of the Supreme Court","The Cabinet Secretary","The Vice-President of India","The Attorney General of India"],
        "correctAnswerIndex": 1,
        "explanation": "A significant change in the 2023 Act: the salary and conditions of the CEC/ECs were previously equivalent to a Supreme Court Judge. The 2023 Act equated them with the Cabinet Secretary instead. This was seen by critics as a potential downgrade in status and independence."
    },
    {
        "id": "ch65-l1-q36",
        "question": "The Election Commission",
        "options": ["Only with the approval of the President","On its own authority under its plenary powers in Article 324","Only with a majority vote of the Parliament","Only on the recommendation of the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI derives its power to postpone or countermand elections directly from Article 324 and the Representation of the People Act. It does not need prior approval from the President or the Parliament. This was reinforced in T.N. Seshan v. Union of India (1995)."
    },
    {
        "id": "ch65-l1-q37",
        "question": "The concept of",
        "options": ["Lily Thomas v. Union of India (2013)","People","Kuldip Nayar v. Union of India (2006)","S.R. Bommai v. Union of India (1994)"],
        "correctAnswerIndex": 1,
        "explanation": "In the PUCL v. Union of India (2013) case, the Supreme Court directed the ECI to provide a"
    },
    {
        "id": "ch65-l1-q38",
        "question": "The",
        "options": ["The Speaker of the House","The President/Governor on the opinion of the Election Commission","The Supreme Court directly","The Returning Officer"],
        "correctAnswerIndex": 1,
        "explanation": "Article 103 (for MPs) and Article 192 (for MLAs) provide that the question of disqualification (other than under the Tenth Schedule) shall be referred to the Election Commission, whose opinion is binding on the President/Governor. This is one of the EC"
    },
    {
        "id": "ch65-l1-q39",
        "question": "The",
        "options": ["The conduct of elections and election offences","The allocation and delimitation of seats and the preparation of electoral rolls","The appointment of the Election Commission","The salaries of the CEC and ECs"],
        "correctAnswerIndex": 1,
        "explanation": "There are two key RPAs: RPA 1950 deals with qualification of voters, preparation of electoral rolls, and delimitation of constituencies. RPA 1951 deals with the actual conduct of elections, election offences, disputes, and corrupt practices."
    },
    {
        "id": "ch65-l1-q40",
        "question": "Which of the following is true about",
        "options": ["They are filed before the Election Commission","They can be filed by any citizen of India","They are filed before the High Court of the state concerned","They must be filed within 90 days of the result"],
        "correctAnswerIndex": 2,
        "explanation": "Under Section 80 of the RPA 1951, an election petition challenging a parliamentary/assembly election is filed before the High Court of the state. An appeal from the High Court lies directly to the Supreme Court. The petition must be filed within 45 days of the declaration of result."
    },
    {
        "id": "ch65-l1-q41",
        "question": "The",
        "options": ["The amount of security deposit a candidate must pay","The election expenditure of a candidate — expenses incurred by a star campaigner are NOT added to the candidate","The voting rights of the campaigner","The requirement for filing nomination papers"],
        "correctAnswerIndex": 1,
        "explanation": "A"
    },
    {
        "id": "ch65-l1-q42",
        "question": "The",
        "options": ["Ordered 100% VVPAT verification","Upheld the ECI","Rejected the demand for any VVPAT verification","Ordered VVPAT verification in 5 randomly selected booths per constituency"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (2024 judgment) rejected the demand for 100% VVPAT verification, upholding the ECI"
    },
    {
        "id": "ch65-l1-q43",
        "question": "The Election Commission has the power to",
        "options": ["There is no difference; both mean the party ceases to exist","De-recognition strips the party of its reserved symbol and broadcast time, but it still exists as a registered political party. De-registration would dissolve the party entirely.","De-recognition means the party loses its bank account","De-registration is done by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "De-recognition means the party loses its reserved election symbol, free airtime on Doordarshan/AIR, and other privileges. However, it remains a registered party and can contest elections with a"
    },
    {
        "id": "ch65-l1-q44",
        "question": "The",
        "options": ["It violated the Right to Property (Article 300A)","It violated the citizens","Right to Know","It violated the federal structure","It violated the Right to Equality (Article 14) only"],
        "correctAnswerIndex": 1,
        "explanation": "In the Association for Democratic Reforms v. Union of India (2024), the Supreme Court struck down the Electoral Bond Scheme, holding that anonymous political funding violated the voters"
    },
    {
        "id": "ch65-l1-q45",
        "question": "The",
        "options": ["₹50 lakh","₹70 lakh","₹95 lakh (or ₹75 lakh in smaller states)","₹1.5 crore"],
        "correctAnswerIndex": 2,
        "explanation": "The ECI revised the expenditure ceiling in January 2022: ₹95 lakh for Lok Sabha candidates in larger states and ₹75 lakh in smaller/NE states. For Assembly elections, it is ₹40 lakh (larger states) and ₹28 lakh (smaller states)."
    },
    {
        "id": "ch65-l1-q46",
        "question": "The concept of",
        "options": ["Replace the Returning Officers","Ensure door-to-door verification of electoral rolls at the polling station level","Count the votes at each booth","Provide security during elections"],
        "correctAnswerIndex": 1,
        "explanation": "BLOs are local government officials assigned to each polling station. Their primary function is to maintain and update the electoral roll at the booth level — adding new voters, removing deceased voters, and correcting details through door-to-door verification."
    },
    {
        "id": "ch65-l1-q47",
        "question": "Article 325 provides for a",
        "options": ["There are separate electoral rolls for men and women","No person shall be ineligible for inclusion in the electoral roll on grounds only of religion, race, caste, or sex — ensuring one common electoral roll for all","Only taxpayers are included in the electoral roll","Electoral rolls are maintained only for Lok Sabha elections"],
        "correctAnswerIndex": 1,
        "explanation": "Article 325 mandates a single general electoral roll for every constituency, prohibiting the exclusion of any person or the creation of special electoral rolls on grounds of religion, race, caste, or sex. This is a key anti-discrimination provision in the electoral framework."
    },
    {
        "id": "ch65-l1-q48",
        "question": "The T.N. Seshan v. Union of India (1995) case is significant because:",
        "options": ["It abolished the multi-member EC","It upheld the constitutional validity of the multi-member EC and clarified that the CEC does not have overriding authority","It gave the CEC the power to dismiss governments","It made the MCC a statutory law"],
        "correctAnswerIndex": 1,
        "explanation": "When T.N. Seshan (the then CEC) challenged the appointment of two additional ECs, the Supreme Court upheld the multi-member structure and held that the CEC is"
    },
    {
        "id": "ch65-l1-q49",
        "question": "The",
        "options": ["Cast their vote online","Report Model Code of Conduct violations with photo/video evidence in real-time during elections","Check their polling booth location","View the assets of candidates"],
        "correctAnswerIndex": 1,
        "explanation": "cVIGIL is a citizen-centric mobile app that empowers voters to report MCC violations (like distribution of money, liquor, or intimidation) in real-time by uploading photo/video evidence. The ECI"
    },
    {
        "id": "ch65-l1-q50",
        "question": "The",
        "options": ["The President","The Governor","The Election Commission of India, in consultation with the state government","The District Magistrate automatically"],
        "correctAnswerIndex": 2,
        "explanation": "The Returning Officer (usually a District Magistrate or an officer of equivalent rank) is designated by the ECI in consultation with the state government. The RO is responsible for the conduct of the election in a specific constituency."
    },
    {
        "id": "ch65-l1-q51",
        "question": "The",
        "options": ["Section 20A of the Representation of the People Act, 1950","Section 80 of the RPA 1951","Article 324(6) of the Constitution","Section 62 of the RPA 1951"],
        "correctAnswerIndex": 0,
        "explanation": "The Representation of the People (Amendment) Act, 2010 inserted Section 20A in the RPA 1950, allowing Indian citizens living abroad for employment, education, or otherwise (who have not acquired citizenship of another country) to be registered as voters."
    },
    {
        "id": "ch65-l1-q52",
        "question": "The",
        "options": ["Merging the EC with State Election Commissions","Holding simultaneous elections to the Lok Sabha and all State Legislative Assemblies at the same time","Having a single ballot paper for all elections","Reducing the number of election phases to one"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l1-q53",
        "question": "Which of the following disqualifications is covered under Section 8 of the Representation of the People Act, 1951?",
        "options": ["Conviction for an offence and sentenced to imprisonment for not less than two years","Being declared an insolvent by a court","Holding an office of profit under the Government","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Section 8 of the RPA 1951 deals specifically with disqualification on conviction for certain offences. A sentence of two or more years leads to disqualification. Insolvency and office of profit are separate disqualification grounds under other sections/articles."
    },
    {
        "id": "ch65-l1-q54",
        "question": "The Supreme Court in",
        "options": ["Convicted MPs/MLAs could no longer file appeals in higher courts","Convicted MPs/MLAs were immediately disqualified upon conviction, without the benefit of staying the disqualification during the appeal period","The ECI was given the power to grant pardons","The judgment had no practical effect"],
        "correctAnswerIndex": 1,
        "explanation": "Section 8(4) allowed convicted lawmakers to continue in office if they filed an appeal within 3 months. The SC struck this down, holding that a convicted MP/MLA is immediately disqualified from the date of conviction, regardless of any pending appeal. This was a landmark judgment for clean governance."
    },
    {
        "id": "ch65-l1-q55",
        "question": "The",
        "options": ["All candidates get an equal number of votes","The ruling party does not use government machinery or public funds for electoral advantage","All candidates have the same net worth","Only national parties can contest elections"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l1-q56",
        "question": "The",
        "options": ["The ECI has the power to arrest criminal candidates","Mandatory disclosure of criminal cases pending against candidates in their nomination forms (enhanced after the Supreme Court","The ECI can reject the nomination of any convicted person","The ECI monitors all FIRs against sitting MLAs"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (2020) directed that candidates must publish their criminal antecedents (pending cases) in newspapers, TV, and social media within 48 hours of filing nominations. The ECI monitors compliance. However, the EC cannot reject nominations solely on the basis of pending cases."
    },
    {
        "id": "ch65-l1-q57",
        "question": "Article 327 empowers the Parliament to make laws regarding elections to Parliament and State Legislatures. Does this power override the ECI",
        "options": ["Yes, completely","No. Article 324 gives the ECI residuary or plenary powers that fill the gaps where Parliament has not legislated","Only during a National Emergency","Only if the President approves"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has held that Article 324 gives the ECI residuary and plenary powers to act in situations where no law exists or where the existing law is silent. While Parliament can legislate (Art 327), the ECI"
    },
    {
        "id": "ch65-l1-q58",
        "question": "The",
        "options": ["All voters above 80 years of age","Service voters (Armed Forces, paramilitary, diplomatic staff abroad)","Only NRI voters","Only government employees on election duty"],
        "correctAnswerIndex": 1,
        "explanation": "ETPBS is primarily available to service voters (Armed Forces, paramilitary personnel, and Indian diplomatic staff abroad). The ECI has also extended postal ballot facility to senior citizens (80+), PwD voters, and essential service workers during specific elections."
    },
    {
        "id": "ch65-l1-q59",
        "question": "The",
        "options": ["The ECI can force parties to hold internal elections for their leadership positions","Political parties are required to hold organizational elections under their party constitution, but the ECI","The ECI has no mandate regarding internal party affairs","The ECI appoints the party presidents"],
        "correctAnswerIndex": 1,
        "explanation": "While the ECI mandates that registered parties hold regular internal elections and report them, its enforcement power is limited. It can threaten to de-recognize parties for persistent non-compliance, but in practice, this power is rarely exercised, making it a significant gap in Indian democratic governance."
    },
    {
        "id": "ch65-l1-q60",
        "question": "The",
        "options": ["Train Election Commissioners","Increase voter awareness, literacy, and participation, especially among women, youth, urban voters, and marginalized communities","Educate judges about election law","Provide legal aid to election petitioners"],
        "correctAnswerIndex": 1,
        "explanation": "SVEEP is the ECI"
    },
    {
        "id": "ch65-l1-q61",
        "question": "The Supreme Court in Anoop Baranwal v. Union of India (2023) directed that the CEC and ECs be appointed by a committee of PM, LoP, and CJI. The Parliament then passed the 2023 Act replacing the CJI with a Cabinet Minister. If this Act is challenged, the most likely constitutional argument AGAINST the Act would be:",
        "options": ["Parliament cannot legislate on the appointment of ECs","The Act undermines the","which is a part of the Basic Structure of the Constitution, by giving the executive a 2-to-1 majority in the selection committee","The Act violates Article 14 only","The Act is valid because Parliament has plenary legislative power under Article 324(5)"],
        "correctAnswerIndex": 1,
        "explanation": "The strongest challenge would be on Basic Structure grounds: that the independence of the Election Commission is part of the Basic Structure (as held in multiple judgments), and by giving the executive a 2-to-1 majority (PM + PM"
    },
    {
        "id": "ch65-l1-q62",
        "question": "Consider the following: The 2023 Act equated the salary of the CEC/ECs with the Cabinet Secretary instead of a Supreme Court Judge. Which principle of constitutional law is most directly affected by this change?",
        "options": ["Separation of Powers","The principle that constitutional functionaries must have institutional status commensurate with their constitutional role, to ensure functional independence","Federalism","Rule of Law"],
        "correctAnswerIndex": 1,
        "explanation": "By equating the CEC"
    },
    {
        "id": "ch65-l1-q63",
        "question": "Assertion (A): The Model Code of Conduct (MCC) has no statutory backing. Reason (R): Despite this, the ECI enforces the MCC effectively because Article 324 provides",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","Both are false"],
        "correctAnswerIndex": 0,
        "explanation": "The MCC is indeed non-statutory — it is a voluntary code. But the ECI enforces it through its plenary/residuary powers under Article 324 (as confirmed in Mohinder Singh Gill v. CEC, 1978). The Supreme Court has upheld the ECI"
    },
    {
        "id": "ch65-l1-q64",
        "question": "In the",
        "options": ["Yes, any partial disclosure satisfies the Right to Know","Likely not — the Court held that the citizens","proportionality test","Only if the ECI approves the scheme","Yes, because the Parliament has the right to decide the threshold"],
        "correctAnswerIndex": 1,
        "explanation": "The 2024 judgment applied the"
    },
    {
        "id": "ch65-l1-q65",
        "question": "The ECI",
        "options": ["The ECI can legislate new laws","The ECI","The ECI has complete, residuary power to act in situations not covered by any legislation, to ensure free and fair elections. This power is executive, not legislative, and is subject to judicial review.","The ECI can override the Constitution during elections"],
        "correctAnswerIndex": 2,
        "explanation": "In Mohinder Singh Gill, the Supreme Court held that Article 324 gives the ECI residuary executive power to take all necessary steps for free and fair elections, including situations where no specific law exists. However, this power is not absolute — it is subject to judicial review and cannot override existing legislation."
    },
    {
        "id": "ch65-l1-q66",
        "question": "The",
        "options": ["1 and 2 only","1, 2, and 4 only","1, 2, 3, and 4","Only 4"],
        "correctAnswerIndex": 2,
        "explanation": "Simultaneous elections would require: (i) fixing uniform duration for both LS and state assemblies (Art 83, 172), (ii) handling mid-term dissolutions (Art 356), and (iii) amending the RPA to synchronize election schedules. This makes it a massive constitutional and legislative exercise."
    },
    {
        "id": "ch65-l1-q67",
        "question": "If the CEC and two ECs disagree on a matter — say the CEC wants to countermand an election but both ECs oppose — what happens?",
        "options": ["The CEC","The matter is referred to the President for resolution","The decision of the majority (2 ECs) prevails, as per the","established in T.N. Seshan","The Supreme Court decides"],
        "correctAnswerIndex": 2,
        "explanation": "Since the multi-member EC operates on the principle of majority decision-making (reinforced by T.N. Seshan v. Union of India), the two ECs can outvote the CEC. The CEC does not have a veto. This is a significant check on the CEC"
    },
    {
        "id": "ch65-l1-q68",
        "question": "The",
        "options": ["By filing criminal cases directly under IPC","Through a dedicated","(MCMC) set up at the district level during elections, which monitors all political advertisements in print and electronic media","By banning all media during elections","The ECI has no mechanism to tackle paid news"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI addresses paid news through MCMCs established at district and state levels during elections. These committees review media content, identify instances of paid news, and can issue directions for the cost to be added to the candidate"
    },
    {
        "id": "ch65-l1-q69",
        "question": "The Supreme Court (2024) directed that the VVPAT slips be preserved for 45 days after the result. If during this period, a candidate files an election petition seeking recounting of VVPAT slips, who has the authority to order such a recount?",
        "options": ["The Election Commission","The High Court hearing the election petition, under Section 100 of the RPA 1951","The returning Officer","The Supreme Court only"],
        "correctAnswerIndex": 1,
        "explanation": "Post-result disputes fall under the exclusive jurisdiction of the courts via election petitions (Section 80-100, RPA 1951). The High Court, while hearing an election petition, has the power to order a recount of VVPAT slips if it finds sufficient grounds to question the result."
    },
    {
        "id": "ch65-l1-q70",
        "question": "If a sitting Member of Parliament is convicted and sentenced to 2 years",
        "options": ["Yes, the SC can stay the conviction and disqualification under its plenary appellate powers","No, the SC has held that it will not stay convictions just to protect an MP","Only the President can grant a stay","The Speaker must first approve the disqualification"],
        "correctAnswerIndex": 0,
        "explanation": "While the Lily Thomas judgment removed the automatic 3-month"
    },
    {
        "id": "ch65-l1-q71",
        "question": "The",
        "options": ["Article 324","Article 329(a) of the Constitution","Section 80 of the RPA 1951","The Delimitation Act, 2002 only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 329(a) provides a constitutional bar on challenging the validity of any law relating to the delimitation of constituencies or the allocation of seats in any court. This gives the Delimitation Commission"
    },
    {
        "id": "ch65-l1-q72",
        "question": "In 2025-2026, the debate around",
        "options": ["The Right to Vote","The","— ensuring that the voter","The Right to Property","The principle of cooperative federalism"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l1-q73",
        "question": "The",
        "options": ["State governments can override the ECI","The ECI","Superintendence, Direction, and Control","Only the Governor can transfer officers during elections","The ECI must obtain prior permission from the state government"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has consistently upheld the ECI"
    },
    {
        "id": "ch65-l1-q74",
        "question": "Under the current legal framework, can a",
        "options": ["No, the ECI","Yes, the aggrieved party can challenge it before the High Court under Article 226 or the Supreme Court under Article 32, since the ECI","Only before the Supreme Court, not the High Court","Only if the President approves"],
        "correctAnswerIndex": 1,
        "explanation": "All administrative and quasi-judicial decisions of the ECI — including de-recognition — are subject to judicial review under Article 226 (High Court) and Article 32 (Supreme Court). The ECI is a constitutional body, not above the law."
    },
    {
        "id": "ch65-l1-q75",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "Section 126 imposes a 48-hour silence period. The ECI has interpreted"
    },
    {
        "id": "ch65-l1-q76",
        "question": "The",
        "options": ["The State Government has the right to refuse as policing is a state subject","The ECI can invoke Article 324 to direct the Central Government to ensure compliance, and non-cooperation by the state can be treated as a constitutional failure inviting Article 356","The Observer has no legal authority","The ECI must withdraw the Observer"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI"
    },
    {
        "id": "ch65-l1-q77",
        "question": "In the context of the 2024 Lok Sabha elections, the ECI issued guidelines on",
        "options": ["The IT Act covers it comprehensively","Balancing the Right to Free Speech (Article 19(1)(a)) with the prevention of voter manipulation — there is no specific electoral law addressing AI-generated disinformation","The ECI has no jurisdiction over online content","Deepfakes are protected as satire under Article 19"],
        "correctAnswerIndex": 1,
        "explanation": "While the IT Act (Section 66D) and the new BNS provisions cover some aspects, there is no specific electoral law addressing AI deepfakes. The ECI has to navigate the tension between free speech and the need to prevent AI-driven voter manipulation, relying on its residuary powers and MCC guidelines."
    },
    {
        "id": "ch65-l1-q78",
        "question": "The concept of",
        "options": ["All freebies are unconstitutional","Promises of freebies in election manifestos do not constitute","under the RPA, as manifesto promises are matters of policy, not bribery","The ECI can ban parties that promise freebies","Only the Finance Commission can approve freebies"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court held that manifesto promises (even of freebies) are part of the policy domain and cannot be equated with"
    },
    {
        "id": "ch65-l1-q79",
        "question": "If the Election Commission declares a",
        "options": ["Yes, the ECI can reverse the declaration at any stage","No. Once the RO declares the result, the matter moves to the jurisdiction of the courts via election petitions. The ECI can only order a recount BEFORE the declaration of results.","Only the President can order a recount after declaration","The CEC can override the RO at any time"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI"
    },
    {
        "id": "ch65-l1-q80",
        "question": "The",
        "options": ["Right to Property (Article 300A)","Right to Personal Liberty (Article 21) — as the right to vote also implies the right NOT to vote, which is an expression of personal liberty","Right to Education (Article 21A)","Right to Constitutional Remedies (Article 32)"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l1-q81",
        "question": "The Election Commission",
        "options": ["The State Police Department only","Under the authority of the Election Commission, with officers from revenue, police, and excise departments, operating under the overall superintendence of the District Election Officer and the Returning Officer","The Central Bureau of Investigation","The National Investigation Agency"],
        "correctAnswerIndex": 1,
        "explanation": "Flying Squads are constituted by the District Election Officer under ECI directives. They comprise officers from multiple departments (revenue, police, excise) and operate under the ECI"
    },
    {
        "id": "ch65-l1-q82",
        "question": "Which of the following correctly describes the legal status of an",
        "options": ["Independent candidates have no expenditure ceiling","Independent candidates have the SAME expenditure ceiling as party candidates. Additionally, any expenditure by a party","s account, giving party candidates a structural financial advantage over independents.","Independent candidates have a higher ceiling because they lack party support","Independent candidates are barred from spending on media"],
        "correctAnswerIndex": 1,
        "explanation": "The legal expenditure ceiling is the same for all candidates (party or independent). However, the"
    },
    {
        "id": "ch65-l1-q83",
        "question": "Assertion (A): The ECI cannot reject a nomination paper on the ground that the candidate has criminal cases pending against them. Reason (R): Under the current law, only a",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The principle of"
    },
    {
        "id": "ch65-l1-q84",
        "question": "The",
        "options": ["Yes, through an executive order","No. The ECI cannot introduce","for MPs/MLAs because it would require a constitutional amendment to Articles 83 and 172 (duration of Houses) and a new statutory framework — the ECI cannot create such a fundamental change through its residuary powers alone.","Yes, through a Supreme Court directive","The ECI can introduce it for state assembly elections only"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l1-q85",
        "question": "The",
        "options": ["It violates Article 15 (Prohibition of Discrimination)","It potentially violates the","(KS Puttaswamy, 2017) if Aadhaar-linked voter data is used for profiling or surveillance, and could lead to disenfranchisement through erroneous de-duplication","It violates Article 25 (Freedom of Religion)","It strengthens the electoral process without any constitutional concerns"],
        "correctAnswerIndex": 1,
        "explanation": "The Aadhaar-Voter ID linkage raises two major constitutional concerns: (1) Privacy (KS Puttaswamy) — creating a surveillance-capable database linking biometric identity with voting patterns, and (2) Disenfranchisement — wrongful deletion of voter names due to Aadhaar de-duplication errors, violating Article 326 (Universal Suffrage)."
    },
    {
        "id": "ch65-l1-q86",
        "question": "The ECI",
        "options": ["Purely statutory — the ECI only enforces laws passed by Parliament","A hybrid approach — the ECI uses its statutory powers (RPA 1950/1951), constitutional powers (Art 324), and non-statutory instruments (MCC, voluntary codes, ECI guidelines) to create a multi-layered regulatory framework","Purely based on moral persuasion with no legal backing","The ECI relies entirely on Supreme Court orders"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI uses a unique"
    },
    {
        "id": "ch65-l1-q87",
        "question": "The",
        "options": ["From the date of announcement of elections until counting day","During the period between the start of polling in the first phase and the end of polling in the last phase of an election in a state or set of states","Only during the last 24 hours before polling","There is no statutory ban on exit polls"],
        "correctAnswerIndex": 1,
        "explanation": "Section 126A bans the publication and dissemination of exit poll results during the period starting from the commencement of polls in the first phase and ending half an hour after the close of polls in the last phase. This prevents early exit polls from influencing voters in later phases."
    },
    {
        "id": "ch65-l1-q88",
        "question": "Can the Election Commission of India conduct a by-election in a state that is under President",
        "options": ["No, all elections are suspended during President","Yes. By-elections to fill casual vacancies in the Lok Sabha can be held even during President","s jurisdiction over parliamentary elections is independent of the state","Only if the Governor requests it","Only for Rajya Sabha seats"],
        "correctAnswerIndex": 1,
        "explanation": "President"
    },
    {
        "id": "ch65-l1-q89",
        "question": "The",
        "options": ["They replace the need for physical voter ID cards","They enhance","by giving voters real-time access to candidate information (criminal record, assets, educational background) and their own voter registration status, strengthening informed participation","They allow online voting","They are used to count votes"],
        "correctAnswerIndex": 1,
        "explanation": "These digital tools are part of the ECI"
    },
    {
        "id": "ch65-l1-q90",
        "question": "Assertion (A): The ECI has recommended to Parliament that it should be given the statutory power to",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","Both are false"],
        "correctAnswerIndex": 0,
        "explanation": "The ECI has repeatedly recommended deregistration powers to Parliament. The proliferation of"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch65-l2-q1",
        "question": "The 2023 Appointment Act replaced the Supreme Court",
        "options": ["PM, LoP in Lok Sabha, and a senior-most Union Cabinet Minister","PM, Leader of Opposition in Lok Sabha, and the Chief Justice of India","President, PM, and the Speaker of Lok Sabha","PM, LoP in Rajya Sabha, and the CJI"],
        "correctAnswerIndex": 1,
        "explanation": "In the Anoop Baranwal v. Union of India (2023) case, the Supreme Court directed that the CEC and ECs be appointed by a committee of PM, Leader of Opposition, and the CJI. The 2023 Act replaced the CJI with a Union Cabinet Minister nominated by the PM, which has been a subject of significant constitutional debate."
    },
    {
        "id": "ch65-l2-q2",
        "question": "The",
        "options": ["The Chief Justice of India","The Cabinet Secretary","The Law Minister","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The 2023 Act mandates a Search Committee headed by the Cabinet Secretary (as Chairperson) and comprising two other members (not below the rank of Secretary to the Government), which prepares a panel of five persons for the Selection Committee to consider."
    },
    {
        "id": "ch65-l2-q3",
        "question": "The",
        "options": ["It is a Constitutional provision under Article 324","It is a set of guidelines voluntarily agreed upon by political parties, enforced by the moral authority and executive power of the ECI","It is a statutory requirement under the Representation of the People Act, 1951","It is a Supreme Court directive"],
        "correctAnswerIndex": 1,
        "explanation": "The MCC is a unique instrument — it is a set of behavioural guidelines that evolved through consensus among political parties and the ECI. It is NOT backed by any statute or law. The ECI enforces it through its plenary powers under Article 324, including its power to cancel registration, defer elections, or censure parties."
    },
    {
        "id": "ch65-l2-q4",
        "question": "The term",
        "options": ["The CEC and other ECs have equal voting power in decision-making","The CEC has a veto power over the ECs","All ECs are paid the same salary as the CEC","Only the CEC can address press conferences"],
        "correctAnswerIndex": 0,
        "explanation": "After the 1993 Amendment, the CEC and other ECs were placed at par. They enjoy equal salary, status, and decision-making power. Business is transacted by majority vote. The CEC"
    },
    {
        "id": "ch65-l2-q5",
        "question": "Under the 2023 Act, the salary and conditions of service of the CEC and ECs have been equated with that of:",
        "options": ["A Judge of the Supreme Court","The Cabinet Secretary","The Vice-President of India","The Attorney General of India"],
        "correctAnswerIndex": 1,
        "explanation": "A significant change in the 2023 Act: the salary and conditions of the CEC/ECs were previously equivalent to a Supreme Court Judge. The 2023 Act equated them with the Cabinet Secretary instead. This was seen by critics as a potential downgrade in status and independence."
    },
    {
        "id": "ch65-l2-q6",
        "question": "The Election Commission",
        "options": ["Only with the approval of the President","On its own authority under its plenary powers in Article 324","Only with a majority vote of the Parliament","Only on the recommendation of the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI derives its power to postpone or countermand elections directly from Article 324 and the Representation of the People Act. It does not need prior approval from the President or the Parliament. This was reinforced in T.N. Seshan v. Union of India (1995)."
    },
    {
        "id": "ch65-l2-q7",
        "question": "The concept of",
        "options": ["Lily Thomas v. Union of India (2013)","People","Kuldip Nayar v. Union of India (2006)","S.R. Bommai v. Union of India (1994)"],
        "correctAnswerIndex": 1,
        "explanation": "In the PUCL v. Union of India (2013) case, the Supreme Court directed the ECI to provide a"
    },
    {
        "id": "ch65-l2-q8",
        "question": "The",
        "options": ["The Speaker of the House","The President/Governor on the opinion of the Election Commission","The Supreme Court directly","The Returning Officer"],
        "correctAnswerIndex": 1,
        "explanation": "Article 103 (for MPs) and Article 192 (for MLAs) provide that the question of disqualification (other than under the Tenth Schedule) shall be referred to the Election Commission, whose opinion is binding on the President/Governor. This is one of the EC"
    },
    {
        "id": "ch65-l2-q9",
        "question": "The",
        "options": ["The conduct of elections and election offences","The allocation and delimitation of seats and the preparation of electoral rolls","The appointment of the Election Commission","The salaries of the CEC and ECs"],
        "correctAnswerIndex": 1,
        "explanation": "There are two key RPAs: RPA 1950 deals with qualification of voters, preparation of electoral rolls, and delimitation of constituencies. RPA 1951 deals with the actual conduct of elections, election offences, disputes, and corrupt practices."
    },
    {
        "id": "ch65-l2-q10",
        "question": "Which of the following is true about",
        "options": ["They are filed before the Election Commission","They can be filed by any citizen of India","They are filed before the High Court of the state concerned","They must be filed within 90 days of the result"],
        "correctAnswerIndex": 2,
        "explanation": "Under Section 80 of the RPA 1951, an election petition challenging a parliamentary/assembly election is filed before the High Court of the state. An appeal from the High Court lies directly to the Supreme Court. The petition must be filed within 45 days of the declaration of result."
    },
    {
        "id": "ch65-l2-q11",
        "question": "The",
        "options": ["The amount of security deposit a candidate must pay","The election expenditure of a candidate — expenses incurred by a star campaigner are NOT added to the candidate","The voting rights of the campaigner","The requirement for filing nomination papers"],
        "correctAnswerIndex": 1,
        "explanation": "A"
    },
    {
        "id": "ch65-l2-q12",
        "question": "The",
        "options": ["Ordered 100% VVPAT verification","Upheld the ECI","Rejected the demand for any VVPAT verification","Ordered VVPAT verification in 5 randomly selected booths per constituency"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (2024 judgment) rejected the demand for 100% VVPAT verification, upholding the ECI"
    },
    {
        "id": "ch65-l2-q13",
        "question": "The Election Commission has the power to",
        "options": ["There is no difference; both mean the party ceases to exist","De-recognition strips the party of its reserved symbol and broadcast time, but it still exists as a registered political party. De-registration would dissolve the party entirely.","De-recognition means the party loses its bank account","De-registration is done by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "De-recognition means the party loses its reserved election symbol, free airtime on Doordarshan/AIR, and other privileges. However, it remains a registered party and can contest elections with a"
    },
    {
        "id": "ch65-l2-q14",
        "question": "The",
        "options": ["It violated the Right to Property (Article 300A)","It violated the citizens","Right to Know","It violated the federal structure","It violated the Right to Equality (Article 14) only"],
        "correctAnswerIndex": 1,
        "explanation": "In the Association for Democratic Reforms v. Union of India (2024), the Supreme Court struck down the Electoral Bond Scheme, holding that anonymous political funding violated the voters"
    },
    {
        "id": "ch65-l2-q15",
        "question": "The",
        "options": ["₹50 lakh","₹70 lakh","₹95 lakh (or ₹75 lakh in smaller states)","₹1.5 crore"],
        "correctAnswerIndex": 2,
        "explanation": "The ECI revised the expenditure ceiling in January 2022: ₹95 lakh for Lok Sabha candidates in larger states and ₹75 lakh in smaller/NE states. For Assembly elections, it is ₹40 lakh (larger states) and ₹28 lakh (smaller states)."
    },
    {
        "id": "ch65-l2-q16",
        "question": "The concept of",
        "options": ["Replace the Returning Officers","Ensure door-to-door verification of electoral rolls at the polling station level","Count the votes at each booth","Provide security during elections"],
        "correctAnswerIndex": 1,
        "explanation": "BLOs are local government officials assigned to each polling station. Their primary function is to maintain and update the electoral roll at the booth level — adding new voters, removing deceased voters, and correcting details through door-to-door verification."
    },
    {
        "id": "ch65-l2-q17",
        "question": "Article 325 provides for a",
        "options": ["There are separate electoral rolls for men and women","No person shall be ineligible for inclusion in the electoral roll on grounds only of religion, race, caste, or sex — ensuring one common electoral roll for all","Only taxpayers are included in the electoral roll","Electoral rolls are maintained only for Lok Sabha elections"],
        "correctAnswerIndex": 1,
        "explanation": "Article 325 mandates a single general electoral roll for every constituency, prohibiting the exclusion of any person or the creation of special electoral rolls on grounds of religion, race, caste, or sex. This is a key anti-discrimination provision in the electoral framework."
    },
    {
        "id": "ch65-l2-q18",
        "question": "The T.N. Seshan v. Union of India (1995) case is significant because:",
        "options": ["It abolished the multi-member EC","It upheld the constitutional validity of the multi-member EC and clarified that the CEC does not have overriding authority","It gave the CEC the power to dismiss governments","It made the MCC a statutory law"],
        "correctAnswerIndex": 1,
        "explanation": "When T.N. Seshan (the then CEC) challenged the appointment of two additional ECs, the Supreme Court upheld the multi-member structure and held that the CEC is"
    },
    {
        "id": "ch65-l2-q19",
        "question": "The",
        "options": ["Cast their vote online","Report Model Code of Conduct violations with photo/video evidence in real-time during elections","Check their polling booth location","View the assets of candidates"],
        "correctAnswerIndex": 1,
        "explanation": "cVIGIL is a citizen-centric mobile app that empowers voters to report MCC violations (like distribution of money, liquor, or intimidation) in real-time by uploading photo/video evidence. The ECI"
    },
    {
        "id": "ch65-l2-q20",
        "question": "The",
        "options": ["The President","The Governor","The Election Commission of India, in consultation with the state government","The District Magistrate automatically"],
        "correctAnswerIndex": 2,
        "explanation": "The Returning Officer (usually a District Magistrate or an officer of equivalent rank) is designated by the ECI in consultation with the state government. The RO is responsible for the conduct of the election in a specific constituency."
    },
    {
        "id": "ch65-l2-q21",
        "question": "The",
        "options": ["Section 20A of the Representation of the People Act, 1950","Section 80 of the RPA 1951","Article 324(6) of the Constitution","Section 62 of the RPA 1951"],
        "correctAnswerIndex": 0,
        "explanation": "The Representation of the People (Amendment) Act, 2010 inserted Section 20A in the RPA 1950, allowing Indian citizens living abroad for employment, education, or otherwise (who have not acquired citizenship of another country) to be registered as voters."
    },
    {
        "id": "ch65-l2-q22",
        "question": "The",
        "options": ["Merging the EC with State Election Commissions","Holding simultaneous elections to the Lok Sabha and all State Legislative Assemblies at the same time","Having a single ballot paper for all elections","Reducing the number of election phases to one"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l2-q23",
        "question": "Which of the following disqualifications is covered under Section 8 of the Representation of the People Act, 1951?",
        "options": ["Conviction for an offence and sentenced to imprisonment for not less than two years","Being declared an insolvent by a court","Holding an office of profit under the Government","All of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Section 8 of the RPA 1951 deals specifically with disqualification on conviction for certain offences. A sentence of two or more years leads to disqualification. Insolvency and office of profit are separate disqualification grounds under other sections/articles."
    },
    {
        "id": "ch65-l2-q24",
        "question": "The Supreme Court in",
        "options": ["Convicted MPs/MLAs could no longer file appeals in higher courts","Convicted MPs/MLAs were immediately disqualified upon conviction, without the benefit of staying the disqualification during the appeal period","The ECI was given the power to grant pardons","The judgment had no practical effect"],
        "correctAnswerIndex": 1,
        "explanation": "Section 8(4) allowed convicted lawmakers to continue in office if they filed an appeal within 3 months. The SC struck this down, holding that a convicted MP/MLA is immediately disqualified from the date of conviction, regardless of any pending appeal. This was a landmark judgment for clean governance."
    },
    {
        "id": "ch65-l2-q25",
        "question": "The",
        "options": ["All candidates get an equal number of votes","The ruling party does not use government machinery or public funds for electoral advantage","All candidates have the same net worth","Only national parties can contest elections"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l2-q26",
        "question": "The",
        "options": ["The ECI has the power to arrest criminal candidates","Mandatory disclosure of criminal cases pending against candidates in their nomination forms (enhanced after the Supreme Court","The ECI can reject the nomination of any convicted person","The ECI monitors all FIRs against sitting MLAs"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (2020) directed that candidates must publish their criminal antecedents (pending cases) in newspapers, TV, and social media within 48 hours of filing nominations. The ECI monitors compliance. However, the EC cannot reject nominations solely on the basis of pending cases."
    },
    {
        "id": "ch65-l2-q27",
        "question": "Article 327 empowers the Parliament to make laws regarding elections to Parliament and State Legislatures. Does this power override the ECI",
        "options": ["Yes, completely","No. Article 324 gives the ECI residuary or plenary powers that fill the gaps where Parliament has not legislated","Only during a National Emergency","Only if the President approves"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has held that Article 324 gives the ECI residuary and plenary powers to act in situations where no law exists or where the existing law is silent. While Parliament can legislate (Art 327), the ECI"
    },
    {
        "id": "ch65-l2-q28",
        "question": "The",
        "options": ["All voters above 80 years of age","Service voters (Armed Forces, paramilitary, diplomatic staff abroad)","Only NRI voters","Only government employees on election duty"],
        "correctAnswerIndex": 1,
        "explanation": "ETPBS is primarily available to service voters (Armed Forces, paramilitary personnel, and Indian diplomatic staff abroad). The ECI has also extended postal ballot facility to senior citizens (80+), PwD voters, and essential service workers during specific elections."
    },
    {
        "id": "ch65-l2-q29",
        "question": "The",
        "options": ["The ECI can force parties to hold internal elections for their leadership positions","Political parties are required to hold organizational elections under their party constitution, but the ECI","The ECI has no mandate regarding internal party affairs","The ECI appoints the party presidents"],
        "correctAnswerIndex": 1,
        "explanation": "While the ECI mandates that registered parties hold regular internal elections and report them, its enforcement power is limited. It can threaten to de-recognize parties for persistent non-compliance, but in practice, this power is rarely exercised, making it a significant gap in Indian democratic governance."
    },
    {
        "id": "ch65-l2-q30",
        "question": "The",
        "options": ["Train Election Commissioners","Increase voter awareness, literacy, and participation, especially among women, youth, urban voters, and marginalized communities","Educate judges about election law","Provide legal aid to election petitioners"],
        "correctAnswerIndex": 1,
        "explanation": "SVEEP is the ECI"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch65-l3-q1",
        "question": "The Supreme Court in Anoop Baranwal v. Union of India (2023) directed that the CEC and ECs be appointed by a committee of PM, LoP, and CJI. The Parliament then passed the 2023 Act replacing the CJI with a Cabinet Minister. If this Act is challenged, the most likely constitutional argument AGAINST the Act would be:",
        "options": ["Parliament cannot legislate on the appointment of ECs","The Act undermines the","which is a part of the Basic Structure of the Constitution, by giving the executive a 2-to-1 majority in the selection committee","The Act violates Article 14 only","The Act is valid because Parliament has plenary legislative power under Article 324(5)"],
        "correctAnswerIndex": 1,
        "explanation": "The strongest challenge would be on Basic Structure grounds: that the independence of the Election Commission is part of the Basic Structure (as held in multiple judgments), and by giving the executive a 2-to-1 majority (PM + PM"
    },
    {
        "id": "ch65-l3-q2",
        "question": "Consider the following: The 2023 Act equated the salary of the CEC/ECs with the Cabinet Secretary instead of a Supreme Court Judge. Which principle of constitutional law is most directly affected by this change?",
        "options": ["Separation of Powers","The principle that constitutional functionaries must have institutional status commensurate with their constitutional role, to ensure functional independence","Federalism","Rule of Law"],
        "correctAnswerIndex": 1,
        "explanation": "By equating the CEC"
    },
    {
        "id": "ch65-l3-q3",
        "question": "Assertion (A): The Model Code of Conduct (MCC) has no statutory backing. Reason (R): Despite this, the ECI enforces the MCC effectively because Article 324 provides",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","Both are false"],
        "correctAnswerIndex": 0,
        "explanation": "The MCC is indeed non-statutory — it is a voluntary code. But the ECI enforces it through its plenary/residuary powers under Article 324 (as confirmed in Mohinder Singh Gill v. CEC, 1978). The Supreme Court has upheld the ECI"
    },
    {
        "id": "ch65-l3-q4",
        "question": "In the",
        "options": ["Yes, any partial disclosure satisfies the Right to Know","Likely not — the Court held that the citizens","proportionality test","Only if the ECI approves the scheme","Yes, because the Parliament has the right to decide the threshold"],
        "correctAnswerIndex": 1,
        "explanation": "The 2024 judgment applied the"
    },
    {
        "id": "ch65-l3-q5",
        "question": "The ECI",
        "options": ["The ECI can legislate new laws","The ECI","The ECI has complete, residuary power to act in situations not covered by any legislation, to ensure free and fair elections. This power is executive, not legislative, and is subject to judicial review.","The ECI can override the Constitution during elections"],
        "correctAnswerIndex": 2,
        "explanation": "In Mohinder Singh Gill, the Supreme Court held that Article 324 gives the ECI residuary executive power to take all necessary steps for free and fair elections, including situations where no specific law exists. However, this power is not absolute — it is subject to judicial review and cannot override existing legislation."
    },
    {
        "id": "ch65-l3-q6",
        "question": "The",
        "options": ["1 and 2 only","1, 2, and 4 only","1, 2, 3, and 4","Only 4"],
        "correctAnswerIndex": 2,
        "explanation": "Simultaneous elections would require: (i) fixing uniform duration for both LS and state assemblies (Art 83, 172), (ii) handling mid-term dissolutions (Art 356), and (iii) amending the RPA to synchronize election schedules. This makes it a massive constitutional and legislative exercise."
    },
    {
        "id": "ch65-l3-q7",
        "question": "If the CEC and two ECs disagree on a matter — say the CEC wants to countermand an election but both ECs oppose — what happens?",
        "options": ["The CEC","The matter is referred to the President for resolution","The decision of the majority (2 ECs) prevails, as per the","established in T.N. Seshan","The Supreme Court decides"],
        "correctAnswerIndex": 2,
        "explanation": "Since the multi-member EC operates on the principle of majority decision-making (reinforced by T.N. Seshan v. Union of India), the two ECs can outvote the CEC. The CEC does not have a veto. This is a significant check on the CEC"
    },
    {
        "id": "ch65-l3-q8",
        "question": "The",
        "options": ["By filing criminal cases directly under IPC","Through a dedicated","(MCMC) set up at the district level during elections, which monitors all political advertisements in print and electronic media","By banning all media during elections","The ECI has no mechanism to tackle paid news"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI addresses paid news through MCMCs established at district and state levels during elections. These committees review media content, identify instances of paid news, and can issue directions for the cost to be added to the candidate"
    },
    {
        "id": "ch65-l3-q9",
        "question": "The Supreme Court (2024) directed that the VVPAT slips be preserved for 45 days after the result. If during this period, a candidate files an election petition seeking recounting of VVPAT slips, who has the authority to order such a recount?",
        "options": ["The Election Commission","The High Court hearing the election petition, under Section 100 of the RPA 1951","The returning Officer","The Supreme Court only"],
        "correctAnswerIndex": 1,
        "explanation": "Post-result disputes fall under the exclusive jurisdiction of the courts via election petitions (Section 80-100, RPA 1951). The High Court, while hearing an election petition, has the power to order a recount of VVPAT slips if it finds sufficient grounds to question the result."
    },
    {
        "id": "ch65-l3-q10",
        "question": "If a sitting Member of Parliament is convicted and sentenced to 2 years",
        "options": ["Yes, the SC can stay the conviction and disqualification under its plenary appellate powers","No, the SC has held that it will not stay convictions just to protect an MP","Only the President can grant a stay","The Speaker must first approve the disqualification"],
        "correctAnswerIndex": 0,
        "explanation": "While the Lily Thomas judgment removed the automatic 3-month"
    },
    {
        "id": "ch65-l3-q11",
        "question": "The",
        "options": ["Article 324","Article 329(a) of the Constitution","Section 80 of the RPA 1951","The Delimitation Act, 2002 only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 329(a) provides a constitutional bar on challenging the validity of any law relating to the delimitation of constituencies or the allocation of seats in any court. This gives the Delimitation Commission"
    },
    {
        "id": "ch65-l3-q12",
        "question": "In 2025-2026, the debate around",
        "options": ["The Right to Vote","The","— ensuring that the voter","The Right to Property","The principle of cooperative federalism"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l3-q13",
        "question": "The",
        "options": ["State governments can override the ECI","The ECI","Superintendence, Direction, and Control","Only the Governor can transfer officers during elections","The ECI must obtain prior permission from the state government"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has consistently upheld the ECI"
    },
    {
        "id": "ch65-l3-q14",
        "question": "Under the current legal framework, can a",
        "options": ["No, the ECI","Yes, the aggrieved party can challenge it before the High Court under Article 226 or the Supreme Court under Article 32, since the ECI","Only before the Supreme Court, not the High Court","Only if the President approves"],
        "correctAnswerIndex": 1,
        "explanation": "All administrative and quasi-judicial decisions of the ECI — including de-recognition — are subject to judicial review under Article 226 (High Court) and Article 32 (Supreme Court). The ECI is a constitutional body, not above the law."
    },
    {
        "id": "ch65-l3-q15",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "Section 126 imposes a 48-hour silence period. The ECI has interpreted"
    },
    {
        "id": "ch65-l3-q16",
        "question": "The",
        "options": ["The State Government has the right to refuse as policing is a state subject","The ECI can invoke Article 324 to direct the Central Government to ensure compliance, and non-cooperation by the state can be treated as a constitutional failure inviting Article 356","The Observer has no legal authority","The ECI must withdraw the Observer"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI"
    },
    {
        "id": "ch65-l3-q17",
        "question": "In the context of the 2024 Lok Sabha elections, the ECI issued guidelines on",
        "options": ["The IT Act covers it comprehensively","Balancing the Right to Free Speech (Article 19(1)(a)) with the prevention of voter manipulation — there is no specific electoral law addressing AI-generated disinformation","The ECI has no jurisdiction over online content","Deepfakes are protected as satire under Article 19"],
        "correctAnswerIndex": 1,
        "explanation": "While the IT Act (Section 66D) and the new BNS provisions cover some aspects, there is no specific electoral law addressing AI deepfakes. The ECI has to navigate the tension between free speech and the need to prevent AI-driven voter manipulation, relying on its residuary powers and MCC guidelines."
    },
    {
        "id": "ch65-l3-q18",
        "question": "The concept of",
        "options": ["All freebies are unconstitutional","Promises of freebies in election manifestos do not constitute","under the RPA, as manifesto promises are matters of policy, not bribery","The ECI can ban parties that promise freebies","Only the Finance Commission can approve freebies"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court held that manifesto promises (even of freebies) are part of the policy domain and cannot be equated with"
    },
    {
        "id": "ch65-l3-q19",
        "question": "If the Election Commission declares a",
        "options": ["Yes, the ECI can reverse the declaration at any stage","No. Once the RO declares the result, the matter moves to the jurisdiction of the courts via election petitions. The ECI can only order a recount BEFORE the declaration of results.","Only the President can order a recount after declaration","The CEC can override the RO at any time"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI"
    },
    {
        "id": "ch65-l3-q20",
        "question": "The",
        "options": ["Right to Property (Article 300A)","Right to Personal Liberty (Article 21) — as the right to vote also implies the right NOT to vote, which is an expression of personal liberty","Right to Education (Article 21A)","Right to Constitutional Remedies (Article 32)"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l3-q21",
        "question": "The Election Commission",
        "options": ["The State Police Department only","Under the authority of the Election Commission, with officers from revenue, police, and excise departments, operating under the overall superintendence of the District Election Officer and the Returning Officer","The Central Bureau of Investigation","The National Investigation Agency"],
        "correctAnswerIndex": 1,
        "explanation": "Flying Squads are constituted by the District Election Officer under ECI directives. They comprise officers from multiple departments (revenue, police, excise) and operate under the ECI"
    },
    {
        "id": "ch65-l3-q22",
        "question": "Which of the following correctly describes the legal status of an",
        "options": ["Independent candidates have no expenditure ceiling","Independent candidates have the SAME expenditure ceiling as party candidates. Additionally, any expenditure by a party","s account, giving party candidates a structural financial advantage over independents.","Independent candidates have a higher ceiling because they lack party support","Independent candidates are barred from spending on media"],
        "correctAnswerIndex": 1,
        "explanation": "The legal expenditure ceiling is the same for all candidates (party or independent). However, the"
    },
    {
        "id": "ch65-l3-q23",
        "question": "Assertion (A): The ECI cannot reject a nomination paper on the ground that the candidate has criminal cases pending against them. Reason (R): Under the current law, only a",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","A is false"],
        "correctAnswerIndex": 0,
        "explanation": "The principle of"
    },
    {
        "id": "ch65-l3-q24",
        "question": "The",
        "options": ["Yes, through an executive order","No. The ECI cannot introduce","for MPs/MLAs because it would require a constitutional amendment to Articles 83 and 172 (duration of Houses) and a new statutory framework — the ECI cannot create such a fundamental change through its residuary powers alone.","Yes, through a Supreme Court directive","The ECI can introduce it for state assembly elections only"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch65-l3-q25",
        "question": "The",
        "options": ["It violates Article 15 (Prohibition of Discrimination)","It potentially violates the","(KS Puttaswamy, 2017) if Aadhaar-linked voter data is used for profiling or surveillance, and could lead to disenfranchisement through erroneous de-duplication","It violates Article 25 (Freedom of Religion)","It strengthens the electoral process without any constitutional concerns"],
        "correctAnswerIndex": 1,
        "explanation": "The Aadhaar-Voter ID linkage raises two major constitutional concerns: (1) Privacy (KS Puttaswamy) — creating a surveillance-capable database linking biometric identity with voting patterns, and (2) Disenfranchisement — wrongful deletion of voter names due to Aadhaar de-duplication errors, violating Article 326 (Universal Suffrage)."
    },
    {
        "id": "ch65-l3-q26",
        "question": "The ECI",
        "options": ["Purely statutory — the ECI only enforces laws passed by Parliament","A hybrid approach — the ECI uses its statutory powers (RPA 1950/1951), constitutional powers (Art 324), and non-statutory instruments (MCC, voluntary codes, ECI guidelines) to create a multi-layered regulatory framework","Purely based on moral persuasion with no legal backing","The ECI relies entirely on Supreme Court orders"],
        "correctAnswerIndex": 1,
        "explanation": "The ECI uses a unique"
    },
    {
        "id": "ch65-l3-q27",
        "question": "The",
        "options": ["From the date of announcement of elections until counting day","During the period between the start of polling in the first phase and the end of polling in the last phase of an election in a state or set of states","Only during the last 24 hours before polling","There is no statutory ban on exit polls"],
        "correctAnswerIndex": 1,
        "explanation": "Section 126A bans the publication and dissemination of exit poll results during the period starting from the commencement of polls in the first phase and ending half an hour after the close of polls in the last phase. This prevents early exit polls from influencing voters in later phases."
    },
    {
        "id": "ch65-l3-q28",
        "question": "Can the Election Commission of India conduct a by-election in a state that is under President",
        "options": ["No, all elections are suspended during President","Yes. By-elections to fill casual vacancies in the Lok Sabha can be held even during President","s jurisdiction over parliamentary elections is independent of the state","Only if the Governor requests it","Only for Rajya Sabha seats"],
        "correctAnswerIndex": 1,
        "explanation": "President"
    },
    {
        "id": "ch65-l3-q29",
        "question": "The",
        "options": ["They replace the need for physical voter ID cards","They enhance","by giving voters real-time access to candidate information (criminal record, assets, educational background) and their own voter registration status, strengthening informed participation","They allow online voting","They are used to count votes"],
        "correctAnswerIndex": 1,
        "explanation": "These digital tools are part of the ECI"
    },
    {
        "id": "ch65-l3-q30",
        "question": "Assertion (A): The ECI has recommended to Parliament that it should be given the statutory power to",
        "options": ["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation","A is true but R is false","Both are false"],
        "correctAnswerIndex": 0,
        "explanation": "The ECI has repeatedly recommended deregistration powers to Parliament. The proliferation of"
    }
];

export const CHAPTER_65_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
