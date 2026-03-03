import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch67-l1-q1",
        "question": "Which Article of the Constitution of India provides for the establishment of the National Commission for Scheduled Tribes?",
        "options": ["Article 338","Article 338A","Article 338B","Article 340"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A, inserted by the 89th Constitutional Amendment Act, 2003, provides for the establishment of the National Commission for Scheduled Tribes."
    },
    {
        "id": "ch67-l1-q2",
        "question": "Until which year did a single",
        "options": ["1990","2000","2004","2018"],
        "correctAnswerIndex": 2,
        "explanation": "The combined National Commission for SCs and STs was bifurcated into two separate bodies in 2004, following the 89th Amendment Act of 2003."
    },
    {
        "id": "ch67-l1-q3",
        "question": "The 89th Constitutional Amendment Act, 2003, is significant because it:",
        "options": ["Granted constitutional status to the NCBC","Bifurcated the combined Commission into NCSC and NCST","Increased the reservation for STs in Parliament","Created the Ministry of Tribal Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "The 89th Amendment split the joint commission into the National Commission for Scheduled Castes (Article 338) and the National Commission for Scheduled Tribes (Article 338A)."
    },
    {
        "id": "ch67-l1-q4",
        "question": "The National Commission for Scheduled Tribes consists of a Chairperson, a Vice-Chairperson, and:",
        "options": ["Two other members","Three other members","Five other members","Seven other members"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission consists of a Chairperson, a Vice-Chairperson, and three other members."
    },
    {
        "id": "ch67-l1-q5",
        "question": "Who appoints the Chairperson and members of the NCST?",
        "options": ["The Prime Minister","The President of India","The Minister of Tribal Affairs","A committee comprising the PM and Leader of Opposition"],
        "correctAnswerIndex": 1,
        "explanation": "The characters are appointed by the President by warrant under his hand and seal."
    },
    {
        "id": "ch67-l1-q6",
        "question": "What is the tenure of office for the members of the NCST as per the rules?",
        "options": ["3 years","5 years","6 years","Until the age of 65"],
        "correctAnswerIndex": 0,
        "explanation": "The Chairperson, Vice-Chairperson and every other Member shall hold office for a term of three years."
    },
    {
        "id": "ch67-l1-q7",
        "question": "At least one member of the NCST must be a ______.",
        "options": ["Judge of a High Court","Woman","Retired IAS officer","Person from the North-East"],
        "correctAnswerIndex": 1,
        "explanation": "As per the rules, at least one of the three members (excluding Chairperson and Vice-Chairperson) shall be a woman."
    },
    {
        "id": "ch67-l1-q8",
        "question": "The Chairperson of the NCST is given the rank of a:",
        "options": ["Secretary to the Government of India","Minister of State","Union Cabinet Minister","Supreme Court Judge"],
        "correctAnswerIndex": 2,
        "explanation": "The Chairperson of the NCST is equivalent in rank to a Union Cabinet Minister."
    },
    {
        "id": "ch67-l1-q9",
        "question": "To whom does the NCST submit its annual report regarding the safeguards for Scheduled Tribes?",
        "options": ["The Parliament","The President","The Ministry of Tribal Affairs","The National Commission for SCs"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission presents an annual report to the President, who then causes it to be laid before each House of Parliament."
    },
    {
        "id": "ch67-l1-q10",
        "question": "The Vice-Chairperson of the NCST has the rank of a:",
        "options": ["Cabinet Minister","Minister of State","Secretary to the Government of India","Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-Chairperson is given the rank of a Minister of State."
    },
    {
        "id": "ch67-l1-q11",
        "question": "The Chairperson and other members are eligible for appointment for a maximum of:",
        "options": ["One term","Two terms","Three terms","Indefinite terms"],
        "correctAnswerIndex": 1,
        "explanation": "A person is eligible for appointment as Chairperson, Vice-Chairperson or other Member for a maximum of two terms."
    },
    {
        "id": "ch67-l1-q12",
        "question": "The conditions of service and tenure of office of NCST members are determined by:",
        "options": ["The Parliament","The President","The Ministry of Tribal Affairs","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The conditions of service and tenure of office are determined by the President."
    },
    {
        "id": "ch67-l1-q13",
        "question": "The NCST is a ______ body.",
        "options": ["Statutory","Executive","Constitutional","Judicial"],
        "correctAnswerIndex": 2,
        "explanation": "Since it is established under Article 338A of the Constitution, it is a constitutional body."
    },
    {
        "id": "ch67-l1-q14",
        "question": "The main office of the NCST is located in:",
        "options": ["Mumbai","New Delhi","Hyderabad","Ranchi"],
        "correctAnswerIndex": 1,
        "explanation": "The headquarters of the NCST is in New Delhi."
    },
    {
        "id": "ch67-l1-q15",
        "question": "How many regional offices does the NCST have across the country?",
        "options": ["4","6","10","12"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST has six regional offices located in Bhopal, Bhubaneswar, Jaipur, Jabalpur, Ranchi, and Shillong."
    },
    {
        "id": "ch67-l1-q16",
        "question": "Is the NCST required to discharge any function for the Anglo-Indian community?",
        "options": ["Yes","No, only the NCSC does that","Only in the North-East","Only during elections"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC still handles safeguards for Anglo-Indians; the NCST is dedicated to Scheduled Tribes only."
    },
    {
        "id": "ch67-l1-q17",
        "question": "The Commission can investigate all matters relating to the safeguards provided for STs under:",
        "options": ["The Constitution only","Laws enacted by the Parliament","Executive orders of the government","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The Commission"
    },
    {
        "id": "ch67-l1-q18",
        "question": "The NCST works under the administrative control of which Ministry?",
        "options": ["Ministry of Home Affairs","Ministry of Tribal Affairs","Ministry of Social Justice and Empowerment","Ministry of Law"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Tribal Affairs is the nodal ministry for NCST."
    },
    {
        "id": "ch67-l1-q19",
        "question": "If a report of the NCST relates to a State matter, it is forwarded to:",
        "options": ["The Chief Minister","The Governor","The State Legislative Assembly","The High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Reports concerning state matters are sent to the Governor of that state."
    },
    {
        "id": "ch67-l1-q20",
        "question": "Can the NCST adjudicate",
        "options": ["Yes, it is a tribal court","No, it only investigates and recommends","Only in 5th Schedule areas","Only with the PM"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST is an advisory and investigative body, not a judicial court for tribal disputes."
    },
    {
        "id": "ch67-l1-q21",
        "question": "The NCST has the power to regulate its own procedure.",
        "options": ["True","False","Only with the Finance Ministry","Only with the Chief Justice"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338A(4) empowers the Commission to regulate its own procedure."
    },
    {
        "id": "ch67-l1-q22",
        "question": "The NCST participates and advises on the planning process of socio-economic development of:",
        "options": ["All citizens","Scheduled Tribes","Backward Classes","Religious Minorities"],
        "correctAnswerIndex": 1,
        "explanation": "Helping plan tribal development is a key constitutional mandate of the NCST."
    },
    {
        "id": "ch67-l1-q23",
        "question": "When investigating, the NCST has the powers of which court?",
        "options": ["Supreme Court","High Court","Civil Court","Criminal Court"],
        "correctAnswerIndex": 2,
        "explanation": "The Commission possesses the powers of a civil court trying a suit during its investigations."
    },
    {
        "id": "ch67-l1-q24",
        "question": "The NCST can summon which of the following?",
        "options": ["Only tribal leaders","Any person from any part of India","Only government officials","Only people from 5th Schedule areas"],
        "correctAnswerIndex": 1,
        "explanation": "Its summon powers are national and applicable to any person."
    },
    {
        "id": "ch67-l1-q25",
        "question": "The mandate to consult the NCST on major policy matters affecting STs is in:",
        "options": ["Article 338A(1)","Article 338A(9)","Article 244","Article 342"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(9) mandates that the Union and every State Government proceed only after consulting the Commission on all major policy matters affecting Scheduled Tribes."
    },
    {
        "id": "ch67-l1-q26",
        "question": "The criteria for specifying a community as",
        "options": ["Article 338A","Article 342","Article 366(25)","Both (b) and (c)"],
        "correctAnswerIndex": 3,
        "explanation": "Article 366(25) defines STs, and Article 342 provides the procedure for notifying them."
    },
    {
        "id": "ch67-l1-q27",
        "question": "The",
        "options": ["Tribal Ombudsman","Commissioner for SCs and STs","Tribal Welfare Officer","Guardian of Tribes"],
        "correctAnswerIndex": 1,
        "explanation": "Historially, the post was designated as the Commissioner for SCs and STs."
    },
    {
        "id": "ch67-l1-q28",
        "question": "Which Amendment bifurcated the joint SC/ST commission?",
        "options": ["65th Amendment","89th Amendment","42nd Amendment","44th Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 89th Amendment split them into NCSC and NCST."
    },
    {
        "id": "ch67-l1-q29",
        "question": "Can the NCST investigate a case",
        "options": ["Yes","No","Only in Jharkhand","Only if the PM orders"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission can initiate investigations on its own motion."
    },
    {
        "id": "ch67-l1-q30",
        "question": "The expenses of the NCST are met from:",
        "options": ["Consolidated Fund of India","The Tribal Ministry Budget","State Budgets","The NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission"
    },
    {
        "id": "ch67-l1-q31",
        "question": "The NCST was assigned additional functions in 2005 by the President. Which of the following is one of them?",
        "options": ["Measures to be taken over conferring ownership rights in respect of minor forest produce to STs","Measures to be taken to ensure full implementation of the PESA Act","Measures to be taken to reduce and ultimately eliminate the practice of shifting cultivation","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "In 2005, the President specified several additional functions including minor forest produce rights, PESA implementation, and social/economic rehabilitation measures."
    },
    {
        "id": "ch67-l1-q32",
        "question": "While investigating a complaint, the NCST has the power to",
        "options": ["Criminal Court","Civil Court","Administrative Tribunal","Cabinet Committee"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(8) provides the Commission with all the powers of a civil court trying a suit during its investigations."
    },
    {
        "id": "ch67-l1-q33",
        "question": "When the NCST report relates to a State Government, the President forwards it to the ______, who then lays it before the State Legislature.",
        "options": ["Chief Minister","Governor","Speaker of the Assembly","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "State-related reports follow the Governor -> State Legislature path."
    },
    {
        "id": "ch67-l1-q34",
        "question": "The Commission is required to",
        "options": ["The NCST drafts the Five-Year Plans","The Government must involve the NCST during the policy formulation stage for tribal welfare","The NCST can veto the Union Budget","The NCST manages the Tribal Sub-Plan directly"],
        "correctAnswerIndex": 1,
        "explanation": "It is an advisory role intended to ensure tribal concerns are integrated into government planning early."
    },
    {
        "id": "ch67-l1-q35",
        "question": "Does the NCST have a role in the",
        "options": ["No, it is handled by the Environment Ministry","Yes, it monitors the implementation and investigates grievances related to the denial of forest rights to STs","It is the final appellate authority under the Act","It issues the land titles (pattas)"],
        "correctAnswerIndex": 1,
        "explanation": "Denial of land/forest rights is a major deprivation for STs, and the NCST investigates such violations as part of its mandate."
    },
    {
        "id": "ch67-l1-q36",
        "question": "If the Union Government disagrees with a recommendation of the NCST, the",
        "options": ["The financial cost of the recommendation","The reasons for non-acceptance of the recommendation","The names of the members who made the recommendation","The political implications of the recommendation"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(6) requires transparency regarding the rejection of recommendations."
    },
    {
        "id": "ch67-l1-q37",
        "question": "The NCST has the power to investigate",
        "options": ["It can only act if the President orders","It can initiate an inquiry on its own motion without a formal complaint","It can hire private investigators","It can conduct secret trials"],
        "correctAnswerIndex": 1,
        "explanation": "Suo-moto means"
    },
    {
        "id": "ch67-l1-q38",
        "question": "What is the significance of the rank given to the Chairperson of NCST?",
        "options": ["It determines their salary and protocol level within the government hierarchy","It allows them to attend Cabinet meetings by right","It makes them immune to any criminal prosecution","It gives them the power to dissolve the Tribal Advisory Council"],
        "correctAnswerIndex": 0,
        "explanation": "Eqivalence to a Cabinet Minister ensures the Chairperson has the status needed to deal with senior government officials."
    },
    {
        "id": "ch67-l1-q39",
        "question": "Is the advice of the NCST on major policy matters",
        "options": ["Yes, under Article 338A(9)","No, the Constitution mandates","but the final decision rests with the Executive","Only during a National Emergency","Only in 6th Schedule areas"],
        "correctAnswerIndex": 1,
        "explanation": "Consultation is mandatory, but following the advice is not legally binding (though rejections must be justified in Parliament)."
    },
    {
        "id": "ch67-l1-q40",
        "question": "The",
        "options": ["SCs and STs have identical problems","SCs and STs have distinct problems and socio-cultural profiles, requiring dedicated attention","The joint commission was too small","Reserved seats in Parliament were being increased"],
        "correctAnswerIndex": 1,
        "explanation": "Specialization was needed because tribal issues (land, forest, PESA) are fundamentally different from SC issues (atrocities, social untouchability)."
    },
    {
        "id": "ch67-l1-q41",
        "question": "The NCST can",
        "options": ["Any public record from a court or office","The keys to the Tribal Sub-Plan bank accounts","The personal diary of the Minister","The army for tribal defense"],
        "correctAnswerIndex": 0,
        "explanation": "As a quasi-judicial investigator, it can access public records."
    },
    {
        "id": "ch67-l1-q42",
        "question": "Can the NCST",
        "options": ["Yes, it can issue a stay order","No, it can only investigate the rehabilitation process and recommend better measures","Only in 5th Schedule states","Only if the Supreme Court allows"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST has investigative, not stay-granting or executive power."
    },
    {
        "id": "ch67-l1-q43",
        "question": "Which of the following is a function related to",
        "options": ["Encouraging it as a traditional art","Measures to reduce and ultimately eliminate the practice which leads to forest degradation","Taxing the tribes who practice it","Providing seeds for it"],
        "correctAnswerIndex": 1,
        "explanation": "Transitioning tribes to sustainable agriculture is a specific developmental goal monitored by NCST."
    },
    {
        "id": "ch67-l1-q44",
        "question": "The",
        "options": ["Political career","Functions as a member of the Commission","Bank balance","Social life"],
        "correctAnswerIndex": 1,
        "explanation": "Members must be free from conflicts of interest to maintain impartiality."
    },
    {
        "id": "ch67-l1-q45",
        "question": "The NCST works in coordination with which other constitutional body for scheduling tribes?",
        "options": ["The Finance Commission","The Election Commission","NITI Aayog","It works with the Registrar General of India for census data"],
        "correctAnswerIndex": 3,
        "explanation": "For any change in the list of STs, data from the Registrar General is crucial context."
    },
    {
        "id": "ch67-l1-q46",
        "question": "In the case of",
        "options": ["Can dismiss the employee directly","Investigates the matter and recommends action to the department","Abolishes the post","Tells the employee to join another tribe"],
        "correctAnswerIndex": 1,
        "explanation": "False claims for ST status are investigated as they deprive genuine tribes of their constitutional rights."
    },
    {
        "id": "ch67-l1-q47",
        "question": "The",
        "options": ["Tribal welfare programs","Changing the state borders","Abolishing the Governor post","Increasing GST rates"],
        "correctAnswerIndex": 0,
        "explanation": "Many tribes reside in these special category states (e.g., North East)."
    },
    {
        "id": "ch67-l1-q48",
        "question": "The",
        "options": ["Controls directly","Participates in the planning of and monitors to ensure funds are not diverted","Abolished in 2017","Found to be unconstitutional"],
        "correctAnswerIndex": 1,
        "explanation": "TSP ensures a portion of the state/central budget is dedicated to tribal areas."
    },
    {
        "id": "ch67-l1-q49",
        "question": "Does the NCST handle complaints from",
        "options": ["No, only Scheduled Tribes","Yes, if they are also notified as STs in that particular state","Only if they are from Andaman","Only if they are nomads"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST jurisdiction is defined by the status of the community as a"
    },
    {
        "id": "ch67-l1-q50",
        "question": "The NCST has",
        "options": ["Highest industrial output","Reasonable amount of tribal population","Coldest climate","Maximum NGOs"],
        "correctAnswerIndex": 1,
        "explanation": "Offices are strategically located in states like Jharkhand, Odisha, MP, etc."
    },
    {
        "id": "ch67-l1-q51",
        "question": "Who determines the",
        "options": ["The Governor","The Chairperson of the Commission","The Parliament","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has the power to regulate its own procedure, which includes setting up its regional wings."
    },
    {
        "id": "ch67-l1-q52",
        "question": "The",
        "options": ["1950","1965","1990","2004"],
        "correctAnswerIndex": 0,
        "explanation": "The post was created as soon as the Constitution commenced."
    },
    {
        "id": "ch67-l1-q53",
        "question": "Why is",
        "options": ["It provides for the salary of the clerk","It establishes the NCST as a constitutional body with its own distinct identity","It allows the PM to change the tribe list","It limits the NCST power to 10 years"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch67-l1-q54",
        "question": "The",
        "options": ["The government can never take a decision","The voice of the tribes is heard and considered at the highest level of policy making","Tribes have a veto","Only NCST members can become ministers"],
        "correctAnswerIndex": 1,
        "explanation": "It protects tribal interests from being ignored in general development policies."
    },
    {
        "id": "ch67-l1-q55",
        "question": "The NCST often works with",
        "options": ["Land acquisition and mining leases","Hiring school teachers","Maintaining the village pond","Collecting income tax"],
        "correctAnswerIndex": 0,
        "explanation": "PESA Act requires consultation with Gram Sabhas; NCST monitors if this is actually being done."
    },
    {
        "id": "ch67-l1-q56",
        "question": "One of the ST categories is",
        "options": ["Private Tribal Groups","Particularly Vulnerable Tribal Groups","Primary Village Tribal Groups","Poor Village Tribal Groups"],
        "correctAnswerIndex": 1,
        "explanation": "PVTGs are tribes with declining populations and low literacy, needing special protection from NCST."
    },
    {
        "id": "ch67-l1-q57",
        "question": "The",
        "options": ["Only the tourists","Forest Dwelling Scheduled Tribes (FDST) and Other Traditional Forest Dwellers (OTFD)","Only the tigers","Only the logging companies"],
        "correctAnswerIndex": 1,
        "explanation": "NCST specifically looks after the FDST component of the Act."
    },
    {
        "id": "ch67-l1-q58",
        "question": "The NCST members",
        "options": ["Judge of the High Court","Secretary to the Government of India","Cabinet Minister","Chief Secretary of a State"],
        "correctAnswerIndex": 1,
        "explanation": "Members (other than Chairperson/Vice) have the rank of Secretary."
    },
    {
        "id": "ch67-l1-q59",
        "question": "The term",
        "options": ["Putting them on a calendar","Including them in the list under Article 342 to provide them constitutional benefits","Moving them from one state to another","Teaching them how to speak Hindi"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch67-l1-q60",
        "question": "The NCST has the power to receive evidence on:",
        "options": ["Affidavits","Handwritten notes in pencil","Anonymous emails only","Whispers"],
        "correctAnswerIndex": 0,
        "explanation": "Civil court power allows receiving evidence on affidavits."
    },
    {
        "id": "ch67-l1-q61",
        "question": "Consider the following statements regarding the NCST",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are additional functions specified by the President in 2005. Statement 3 is false: the NCST has investigative and recommendatory powers, but it cannot"
    },
    {
        "id": "ch67-l1-q62",
        "question": "Regarding the 2004 bifurcation of the National Commission for SCs and STs, which of the following is the primary constitutional justification?",
        "options": ["To reduce the administrative burden on the Ministry of Social Justice","To provide focused attention on the geographically and culturally distinct problems of Scheduled Tribes (e.g., land alienation, forest rights)","Because STs were granted inner-line permit powers by the 89th Amendment","To merge the Commission with the Tribal Advisory Council"],
        "correctAnswerIndex": 1,
        "explanation": "The bifurcation was necessitated by the distinct nature of tribal problems—centered on land, forest, and cultural preservation—compared to the social discrimination issues primarily faced by SCs."
    },
    {
        "id": "ch67-l1-q63",
        "question": "Assertion (A): The NCST is empowered to regulate its own procedure.\\nReason (R): This administrative autonomy is granted under Article 338A(4) to ensure the Commission can function independently of government interference in its internal workings.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Administrative autonomy, including the power to regulate its own procedure, is a hallmark of the NCST"
    },
    {
        "id": "ch67-l1-q64",
        "question": "The NCST",
        "options": ["1, 3, and 4 only","1, 2, and 3 only","2, 3, and 4 only","1, 2, 3, and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 2 is false: the NCST does NOT have the power to order arrests; it can only recommend prosecution. Statements 1, 3, and 4 are standard civil court powers granted to the Commission."
    },
    {
        "id": "ch67-l1-q65",
        "question": "Consider the following statements regarding tribal development funds:\\n1. The NCST manages the",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST is an advisory and monitoring body. It does not"
    },
    {
        "id": "ch67-l1-q66",
        "question": "In 2024-2025, the NCST examined the impact of",
        "options": ["It can cancel the mining lease immediately","It can investigate the violation and recommend corrective action to the President/Governor, which is then laid before Parliament/Legislature","It can file a criminal case in the Supreme Court directly","It has no role once the lease is granted"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST"
    },
    {
        "id": "ch67-l1-q67",
        "question": "Regarding the composition of the NCST, which of the following is true?\\n1. The Chairperson always belongs to a Scheduled Tribe.\\n2. All members must be from the Scheduled Tribe community.\\n3. At least one member must be a woman.\\nSelect the correct answer:",
        "options": ["1 and 3 only","3 only","1, 2, and 3","2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is a convention, but it is not a strict constitutional requirement (though almost always followed). Statement 2 is also not mandated by law. Statement 3 is a legal requirement under the NCST rules."
    },
    {
        "id": "ch67-l1-q68",
        "question": "Which of the following describes the relationship between the NCST and the",
        "options": ["The NCST is the head of all TACs","They are separate bodies; the NCST is a central constitutional body while TACs are state-level bodies for 5th Schedule areas","The TAC is a sub-committee of the NCST","The TAC members are appointed by the NCST Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "TACs are established under the 5th Schedule at the state level (advised by the Governor). NCST is a national commission under Article 338A."
    },
    {
        "id": "ch67-l1-q69",
        "question": "The mandate to consult the NCST on",
        "options": ["The Commission has a veto power over tribal policies","The Executive must seek the Commission","The Commission","s budget","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "Consultation is a procedural safeguard to ensure tribal interests are considered, but it does not equate to a veto or mandatory approval."
    },
    {
        "id": "ch67-l1-q70",
        "question": "If a recommendation of the NCST is related to a",
        "options": ["The District Council only","The Governor of the state concerned","The President of India","Both (b) and (c)"],
        "correctAnswerIndex": 1,
        "explanation": "Since 6th schedule areas are part of states (Assam, Meghalaya, etc.), the Governor is the recipient for state-related matters to be laid before the State Legislature."
    },
    {
        "id": "ch67-l1-q71",
        "question": "The NCST recently focused on the",
        "options": ["Improving their voting percentage only","Addressing their declining population and ensuring heritage protection without forced assimilation","Giving them high-tech mining equipment","Merging them with larger tribes"],
        "correctAnswerIndex": 1,
        "explanation": "PVTGs are at high risk; protecting their unique biology, culture, and habitat is a core mission for the NCST."
    },
    {
        "id": "ch67-l1-q72",
        "question": "Can the NCST inquiry into a case of",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "Any deprivation of rights and safeguards provided by the Constitution can be inquired into by the NCST."
    },
    {
        "id": "ch67-l1-q73",
        "question": "The removal of a member of the NCST follows a procedure similar to that of:",
        "options": ["A Supreme Court Judge","A member of the UPSC","The Attorney General","A High Court Clerk"],
        "correctAnswerIndex": 1,
        "explanation": "To ensure independence, the removal involves a reference to the Supreme Court for reported misbehavior, similar to the UPSC model."
    },
    {
        "id": "ch67-l1-q74",
        "question": "The NCST",
        "options": ["Public scrutiny of tribal records","Government departments from withholding evidence of discrimination in tribal areas","The public from accessing the Commission","Tribals from visiting the government offices"],
        "correctAnswerIndex": 1,
        "explanation": "Transparency and access to official files are crucial for the Commission to verify if safeguards are actually being implemented."
    },
    {
        "id": "ch67-l1-q75",
        "question": "Regarding",
        "options": ["Issue the certificates to everyone who applies","Ensure that only genuine STs get the certificates and investigate systemic frauds in the issuance process","Abolish the system of certificates","Charge a fee for every certificate"],
        "correctAnswerIndex": 1,
        "explanation": "Fake certificates deprive the genuine community of educational and job opportunities, which the NCST monitors as a violation of safeguards."
    },
    {
        "id": "ch67-l1-q76",
        "question": "The NCST works in close cooperation with which Ministry for the",
        "options": ["Ministry of Home Affairs","Ministry of Tribal Affairs","Ministry of Social Justice","Ministry of Law"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Tribal Affairs handles the administrative process of scheduling tribes under Article 342, while the NCST is the constitutional advisory body for this process."
    },
    {
        "id": "ch67-l1-q77",
        "question": "What is the legal status of the",
        "options": ["They are mandatory statutes","They are administrative protocols to guide state governments in implementing constitutional safeguards efficiently","They have no legal standing","They are only for central government use"],
        "correctAnswerIndex": 1,
        "explanation": "Like the NCSC, the NCST issues guidelines to help states protect tribal land, which is a key constitutional mandate under Article 338A."
    },
    {
        "id": "ch67-l1-q78",
        "question": "The 6th Schedule areas move under which state-specific autonomous bodies?\\n1. Autonomous District Councils (ADCs)\\n2. Tribal Development Blocks only\\n3. Regional Councils\\nSelect the correct answer:",
        "options": ["1 and 3 only","2 only","1 and 2 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "ADCs and Regional Councils are the core autonomous bodies in 6th Schedule areas. The NCST monitors how these bodies function in tandem with tribal safeguards."
    },
    {
        "id": "ch67-l1-q79",
        "question": "Can the NCST",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission can assist the court by providing its investigative findings on tribal rights to ensure justice is delivered effectively."
    },
    {
        "id": "ch67-l1-q80",
        "question": "The NCST focuses on",
        "options": ["1 and 2 only","2 and 3 only","1, 2, and 3","1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "Education is the cornerstone of development. The NCST monitors EMRS, Ashram schools, and the cultural/linguistic aspect of tribal education to prevent alienation."
    },
    {
        "id": "ch67-l1-q81",
        "question": "According to the NCST",
        "options": ["The NCST must sign off on every tribal project","The Commission must be invited to advise during the conceptual and planning stages of socio-economic schemes for STs","The NCST should run the schools in tribal areas","The government should only consult the NCST after the policy is implemented"],
        "correctAnswerIndex": 1,
        "explanation": "Proactive advisory at the planning stage ensures tribal interests are baked into the design of development projects."
    },
    {
        "id": "ch67-l1-q82",
        "question": "If an ST person is discriminated against in an",
        "options": ["Cannot help as its power is only for tribal areas","Has full jurisdiction to investigate the discrimination as the person","Tells the person to go back to their village","Only helps if they are from the North East"],
        "correctAnswerIndex": 1,
        "explanation": "ST status and the corresponding constitutional safeguards (like Article 15/17) follow the individual anywhere in India."
    },
    {
        "id": "ch67-l1-q83",
        "question": "The NCST has been vocal about",
        "options": ["1 and 2 only","2 and 3 only","1, 2, and 3","1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "Health justice for tribes involves tackling genetic disorders like sickle cell anemia as well as improving general medical infrastructure with cultural sensitivity."
    },
    {
        "id": "ch67-l1-q84",
        "question": "What happens if a Governor does NOT lay the NCST",
        "options": ["The report is considered automatically accepted","It remains a constitutional violation, which the Commission then highlights in its next national report to the President for Parliamentary debate","The Governor is fined","The Commission can dissolve the local legislature"],
        "correctAnswerIndex": 1,
        "explanation": "Transparency is the Commission"
    },
    {
        "id": "ch67-l1-q85",
        "question": "Assertion (A): The NCST is a watchdog for both",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "This describes the dual dimension of tribal safeguards under the Indian Constitution."
    },
    {
        "id": "ch67-l1-q86",
        "question": "Regarding",
        "options": ["1 and 3 only","2 only","1 and 2 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Timber is NOT minor forest produce. MFP includes non-timber forest produce like grass, bamboo, honey, etc. Protecting rights over MFP is an additional function of NCST."
    },
    {
        "id": "ch67-l1-q87",
        "question": "Can the NCST recommend",
        "options": ["No, only against civilians","Yes, if its investigation reveals that the official willfully violated tribal safeguards (e.g., under the Atrocities Act)","Only if the PMO permits","Only the High Court can do that"],
        "correctAnswerIndex": 1,
        "explanation": "While it can"
    },
    {
        "id": "ch67-l1-q88",
        "question": "The NCST has 6 regional offices. Why are they not in every state?",
        "options": ["Due to budget cuts","They are strategically placed in states with significant tribal populations to maximize coverage across tribal belts","Because only 6 states have tribes","Because tribal affairs are mostly handled by the Army"],
        "correctAnswerIndex": 1,
        "explanation": "The offices are located in states like MP, Odisha, Jharkhand, etc., which have high concentrations of STs."
    },
    {
        "id": "ch67-l1-q89",
        "question": "If a policy impacts",
        "options": ["Must be consulted to provide a","of the policy","Cannot interfere with forest policies","Only looks at the voting rights in that forest","Abolishes the forest department"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 338A(9), such major shifts in policy (forest management) require consultation with the Commission."
    },
    {
        "id": "ch67-l1-q90",
        "question": "The phrase",
        "options": ["Draftsman of the list","Watchdog for the implementation of those protections","The tax collector of the tribes","The army general for tribal areas"],
        "correctAnswerIndex": 1,
        "explanation": "The President and Governor are executive guardians; the NCST is the constitutional machinery set up to monitor if they (the government) are fulfilling their protective roles."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch67-l2-q1",
        "question": "The NCST was assigned additional functions in 2005 by the President. Which of the following is one of them?",
        "options": ["Measures to be taken over conferring ownership rights in respect of minor forest produce to STs","Measures to be taken to ensure full implementation of the PESA Act","Measures to be taken to reduce and ultimately eliminate the practice of shifting cultivation","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "In 2005, the President specified several additional functions including minor forest produce rights, PESA implementation, and social/economic rehabilitation measures."
    },
    {
        "id": "ch67-l2-q2",
        "question": "While investigating a complaint, the NCST has the power to",
        "options": ["Criminal Court","Civil Court","Administrative Tribunal","Cabinet Committee"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(8) provides the Commission with all the powers of a civil court trying a suit during its investigations."
    },
    {
        "id": "ch67-l2-q3",
        "question": "When the NCST report relates to a State Government, the President forwards it to the ______, who then lays it before the State Legislature.",
        "options": ["Chief Minister","Governor","Speaker of the Assembly","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "State-related reports follow the Governor -> State Legislature path."
    },
    {
        "id": "ch67-l2-q4",
        "question": "The Commission is required to",
        "options": ["The NCST drafts the Five-Year Plans","The Government must involve the NCST during the policy formulation stage for tribal welfare","The NCST can veto the Union Budget","The NCST manages the Tribal Sub-Plan directly"],
        "correctAnswerIndex": 1,
        "explanation": "It is an advisory role intended to ensure tribal concerns are integrated into government planning early."
    },
    {
        "id": "ch67-l2-q5",
        "question": "Does the NCST have a role in the",
        "options": ["No, it is handled by the Environment Ministry","Yes, it monitors the implementation and investigates grievances related to the denial of forest rights to STs","It is the final appellate authority under the Act","It issues the land titles (pattas)"],
        "correctAnswerIndex": 1,
        "explanation": "Denial of land/forest rights is a major deprivation for STs, and the NCST investigates such violations as part of its mandate."
    },
    {
        "id": "ch67-l2-q6",
        "question": "If the Union Government disagrees with a recommendation of the NCST, the",
        "options": ["The financial cost of the recommendation","The reasons for non-acceptance of the recommendation","The names of the members who made the recommendation","The political implications of the recommendation"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(6) requires transparency regarding the rejection of recommendations."
    },
    {
        "id": "ch67-l2-q7",
        "question": "The NCST has the power to investigate",
        "options": ["It can only act if the President orders","It can initiate an inquiry on its own motion without a formal complaint","It can hire private investigators","It can conduct secret trials"],
        "correctAnswerIndex": 1,
        "explanation": "Suo-moto means"
    },
    {
        "id": "ch67-l2-q8",
        "question": "What is the significance of the rank given to the Chairperson of NCST?",
        "options": ["It determines their salary and protocol level within the government hierarchy","It allows them to attend Cabinet meetings by right","It makes them immune to any criminal prosecution","It gives them the power to dissolve the Tribal Advisory Council"],
        "correctAnswerIndex": 0,
        "explanation": "Eqivalence to a Cabinet Minister ensures the Chairperson has the status needed to deal with senior government officials."
    },
    {
        "id": "ch67-l2-q9",
        "question": "Is the advice of the NCST on major policy matters",
        "options": ["Yes, under Article 338A(9)","No, the Constitution mandates","but the final decision rests with the Executive","Only during a National Emergency","Only in 6th Schedule areas"],
        "correctAnswerIndex": 1,
        "explanation": "Consultation is mandatory, but following the advice is not legally binding (though rejections must be justified in Parliament)."
    },
    {
        "id": "ch67-l2-q10",
        "question": "The",
        "options": ["SCs and STs have identical problems","SCs and STs have distinct problems and socio-cultural profiles, requiring dedicated attention","The joint commission was too small","Reserved seats in Parliament were being increased"],
        "correctAnswerIndex": 1,
        "explanation": "Specialization was needed because tribal issues (land, forest, PESA) are fundamentally different from SC issues (atrocities, social untouchability)."
    },
    {
        "id": "ch67-l2-q11",
        "question": "The NCST can",
        "options": ["Any public record from a court or office","The keys to the Tribal Sub-Plan bank accounts","The personal diary of the Minister","The army for tribal defense"],
        "correctAnswerIndex": 0,
        "explanation": "As a quasi-judicial investigator, it can access public records."
    },
    {
        "id": "ch67-l2-q12",
        "question": "Can the NCST",
        "options": ["Yes, it can issue a stay order","No, it can only investigate the rehabilitation process and recommend better measures","Only in 5th Schedule states","Only if the Supreme Court allows"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST has investigative, not stay-granting or executive power."
    },
    {
        "id": "ch67-l2-q13",
        "question": "Which of the following is a function related to",
        "options": ["Encouraging it as a traditional art","Measures to reduce and ultimately eliminate the practice which leads to forest degradation","Taxing the tribes who practice it","Providing seeds for it"],
        "correctAnswerIndex": 1,
        "explanation": "Transitioning tribes to sustainable agriculture is a specific developmental goal monitored by NCST."
    },
    {
        "id": "ch67-l2-q14",
        "question": "The",
        "options": ["Political career","Functions as a member of the Commission","Bank balance","Social life"],
        "correctAnswerIndex": 1,
        "explanation": "Members must be free from conflicts of interest to maintain impartiality."
    },
    {
        "id": "ch67-l2-q15",
        "question": "The NCST works in coordination with which other constitutional body for scheduling tribes?",
        "options": ["The Finance Commission","The Election Commission","NITI Aayog","It works with the Registrar General of India for census data"],
        "correctAnswerIndex": 3,
        "explanation": "For any change in the list of STs, data from the Registrar General is crucial context."
    },
    {
        "id": "ch67-l2-q16",
        "question": "In the case of",
        "options": ["Can dismiss the employee directly","Investigates the matter and recommends action to the department","Abolishes the post","Tells the employee to join another tribe"],
        "correctAnswerIndex": 1,
        "explanation": "False claims for ST status are investigated as they deprive genuine tribes of their constitutional rights."
    },
    {
        "id": "ch67-l2-q17",
        "question": "The",
        "options": ["Tribal welfare programs","Changing the state borders","Abolishing the Governor post","Increasing GST rates"],
        "correctAnswerIndex": 0,
        "explanation": "Many tribes reside in these special category states (e.g., North East)."
    },
    {
        "id": "ch67-l2-q18",
        "question": "The",
        "options": ["Controls directly","Participates in the planning of and monitors to ensure funds are not diverted","Abolished in 2017","Found to be unconstitutional"],
        "correctAnswerIndex": 1,
        "explanation": "TSP ensures a portion of the state/central budget is dedicated to tribal areas."
    },
    {
        "id": "ch67-l2-q19",
        "question": "Does the NCST handle complaints from",
        "options": ["No, only Scheduled Tribes","Yes, if they are also notified as STs in that particular state","Only if they are from Andaman","Only if they are nomads"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST jurisdiction is defined by the status of the community as a"
    },
    {
        "id": "ch67-l2-q20",
        "question": "The NCST has",
        "options": ["Highest industrial output","Reasonable amount of tribal population","Coldest climate","Maximum NGOs"],
        "correctAnswerIndex": 1,
        "explanation": "Offices are strategically located in states like Jharkhand, Odisha, MP, etc."
    },
    {
        "id": "ch67-l2-q21",
        "question": "Who determines the",
        "options": ["The Governor","The Chairperson of the Commission","The Parliament","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has the power to regulate its own procedure, which includes setting up its regional wings."
    },
    {
        "id": "ch67-l2-q22",
        "question": "The",
        "options": ["1950","1965","1990","2004"],
        "correctAnswerIndex": 0,
        "explanation": "The post was created as soon as the Constitution commenced."
    },
    {
        "id": "ch67-l2-q23",
        "question": "Why is",
        "options": ["It provides for the salary of the clerk","It establishes the NCST as a constitutional body with its own distinct identity","It allows the PM to change the tribe list","It limits the NCST power to 10 years"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch67-l2-q24",
        "question": "The",
        "options": ["The government can never take a decision","The voice of the tribes is heard and considered at the highest level of policy making","Tribes have a veto","Only NCST members can become ministers"],
        "correctAnswerIndex": 1,
        "explanation": "It protects tribal interests from being ignored in general development policies."
    },
    {
        "id": "ch67-l2-q25",
        "question": "The NCST often works with",
        "options": ["Land acquisition and mining leases","Hiring school teachers","Maintaining the village pond","Collecting income tax"],
        "correctAnswerIndex": 0,
        "explanation": "PESA Act requires consultation with Gram Sabhas; NCST monitors if this is actually being done."
    },
    {
        "id": "ch67-l2-q26",
        "question": "One of the ST categories is",
        "options": ["Private Tribal Groups","Particularly Vulnerable Tribal Groups","Primary Village Tribal Groups","Poor Village Tribal Groups"],
        "correctAnswerIndex": 1,
        "explanation": "PVTGs are tribes with declining populations and low literacy, needing special protection from NCST."
    },
    {
        "id": "ch67-l2-q27",
        "question": "The",
        "options": ["Only the tourists","Forest Dwelling Scheduled Tribes (FDST) and Other Traditional Forest Dwellers (OTFD)","Only the tigers","Only the logging companies"],
        "correctAnswerIndex": 1,
        "explanation": "NCST specifically looks after the FDST component of the Act."
    },
    {
        "id": "ch67-l2-q28",
        "question": "The NCST members",
        "options": ["Judge of the High Court","Secretary to the Government of India","Cabinet Minister","Chief Secretary of a State"],
        "correctAnswerIndex": 1,
        "explanation": "Members (other than Chairperson/Vice) have the rank of Secretary."
    },
    {
        "id": "ch67-l2-q29",
        "question": "The term",
        "options": ["Putting them on a calendar","Including them in the list under Article 342 to provide them constitutional benefits","Moving them from one state to another","Teaching them how to speak Hindi"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch67-l2-q30",
        "question": "The NCST has the power to receive evidence on:",
        "options": ["Affidavits","Handwritten notes in pencil","Anonymous emails only","Whispers"],
        "correctAnswerIndex": 0,
        "explanation": "Civil court power allows receiving evidence on affidavits."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch67-l3-q1",
        "question": "Consider the following statements regarding the NCST",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are additional functions specified by the President in 2005. Statement 3 is false: the NCST has investigative and recommendatory powers, but it cannot"
    },
    {
        "id": "ch67-l3-q2",
        "question": "Regarding the 2004 bifurcation of the National Commission for SCs and STs, which of the following is the primary constitutional justification?",
        "options": ["To reduce the administrative burden on the Ministry of Social Justice","To provide focused attention on the geographically and culturally distinct problems of Scheduled Tribes (e.g., land alienation, forest rights)","Because STs were granted inner-line permit powers by the 89th Amendment","To merge the Commission with the Tribal Advisory Council"],
        "correctAnswerIndex": 1,
        "explanation": "The bifurcation was necessitated by the distinct nature of tribal problems—centered on land, forest, and cultural preservation—compared to the social discrimination issues primarily faced by SCs."
    },
    {
        "id": "ch67-l3-q3",
        "question": "Assertion (A): The NCST is empowered to regulate its own procedure.\\nReason (R): This administrative autonomy is granted under Article 338A(4) to ensure the Commission can function independently of government interference in its internal workings.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Administrative autonomy, including the power to regulate its own procedure, is a hallmark of the NCST"
    },
    {
        "id": "ch67-l3-q4",
        "question": "The NCST",
        "options": ["1, 3, and 4 only","1, 2, and 3 only","2, 3, and 4 only","1, 2, 3, and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 2 is false: the NCST does NOT have the power to order arrests; it can only recommend prosecution. Statements 1, 3, and 4 are standard civil court powers granted to the Commission."
    },
    {
        "id": "ch67-l3-q5",
        "question": "Consider the following statements regarding tribal development funds:\\n1. The NCST manages the",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST is an advisory and monitoring body. It does not"
    },
    {
        "id": "ch67-l3-q6",
        "question": "In 2024-2025, the NCST examined the impact of",
        "options": ["It can cancel the mining lease immediately","It can investigate the violation and recommend corrective action to the President/Governor, which is then laid before Parliament/Legislature","It can file a criminal case in the Supreme Court directly","It has no role once the lease is granted"],
        "correctAnswerIndex": 1,
        "explanation": "The NCST"
    },
    {
        "id": "ch67-l3-q7",
        "question": "Regarding the composition of the NCST, which of the following is true?\\n1. The Chairperson always belongs to a Scheduled Tribe.\\n2. All members must be from the Scheduled Tribe community.\\n3. At least one member must be a woman.\\nSelect the correct answer:",
        "options": ["1 and 3 only","3 only","1, 2, and 3","2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is a convention, but it is not a strict constitutional requirement (though almost always followed). Statement 2 is also not mandated by law. Statement 3 is a legal requirement under the NCST rules."
    },
    {
        "id": "ch67-l3-q8",
        "question": "Which of the following describes the relationship between the NCST and the",
        "options": ["The NCST is the head of all TACs","They are separate bodies; the NCST is a central constitutional body while TACs are state-level bodies for 5th Schedule areas","The TAC is a sub-committee of the NCST","The TAC members are appointed by the NCST Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "TACs are established under the 5th Schedule at the state level (advised by the Governor). NCST is a national commission under Article 338A."
    },
    {
        "id": "ch67-l3-q9",
        "question": "The mandate to consult the NCST on",
        "options": ["The Commission has a veto power over tribal policies","The Executive must seek the Commission","The Commission","s budget","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "Consultation is a procedural safeguard to ensure tribal interests are considered, but it does not equate to a veto or mandatory approval."
    },
    {
        "id": "ch67-l3-q10",
        "question": "If a recommendation of the NCST is related to a",
        "options": ["The District Council only","The Governor of the state concerned","The President of India","Both (b) and (c)"],
        "correctAnswerIndex": 1,
        "explanation": "Since 6th schedule areas are part of states (Assam, Meghalaya, etc.), the Governor is the recipient for state-related matters to be laid before the State Legislature."
    },
    {
        "id": "ch67-l3-q11",
        "question": "The NCST recently focused on the",
        "options": ["Improving their voting percentage only","Addressing their declining population and ensuring heritage protection without forced assimilation","Giving them high-tech mining equipment","Merging them with larger tribes"],
        "correctAnswerIndex": 1,
        "explanation": "PVTGs are at high risk; protecting their unique biology, culture, and habitat is a core mission for the NCST."
    },
    {
        "id": "ch67-l3-q12",
        "question": "Can the NCST inquiry into a case of",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "Any deprivation of rights and safeguards provided by the Constitution can be inquired into by the NCST."
    },
    {
        "id": "ch67-l3-q13",
        "question": "The removal of a member of the NCST follows a procedure similar to that of:",
        "options": ["A Supreme Court Judge","A member of the UPSC","The Attorney General","A High Court Clerk"],
        "correctAnswerIndex": 1,
        "explanation": "To ensure independence, the removal involves a reference to the Supreme Court for reported misbehavior, similar to the UPSC model."
    },
    {
        "id": "ch67-l3-q14",
        "question": "The NCST",
        "options": ["Public scrutiny of tribal records","Government departments from withholding evidence of discrimination in tribal areas","The public from accessing the Commission","Tribals from visiting the government offices"],
        "correctAnswerIndex": 1,
        "explanation": "Transparency and access to official files are crucial for the Commission to verify if safeguards are actually being implemented."
    },
    {
        "id": "ch67-l3-q15",
        "question": "Regarding",
        "options": ["Issue the certificates to everyone who applies","Ensure that only genuine STs get the certificates and investigate systemic frauds in the issuance process","Abolish the system of certificates","Charge a fee for every certificate"],
        "correctAnswerIndex": 1,
        "explanation": "Fake certificates deprive the genuine community of educational and job opportunities, which the NCST monitors as a violation of safeguards."
    },
    {
        "id": "ch67-l3-q16",
        "question": "The NCST works in close cooperation with which Ministry for the",
        "options": ["Ministry of Home Affairs","Ministry of Tribal Affairs","Ministry of Social Justice","Ministry of Law"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Tribal Affairs handles the administrative process of scheduling tribes under Article 342, while the NCST is the constitutional advisory body for this process."
    },
    {
        "id": "ch67-l3-q17",
        "question": "What is the legal status of the",
        "options": ["They are mandatory statutes","They are administrative protocols to guide state governments in implementing constitutional safeguards efficiently","They have no legal standing","They are only for central government use"],
        "correctAnswerIndex": 1,
        "explanation": "Like the NCSC, the NCST issues guidelines to help states protect tribal land, which is a key constitutional mandate under Article 338A."
    },
    {
        "id": "ch67-l3-q18",
        "question": "The 6th Schedule areas move under which state-specific autonomous bodies?\\n1. Autonomous District Councils (ADCs)\\n2. Tribal Development Blocks only\\n3. Regional Councils\\nSelect the correct answer:",
        "options": ["1 and 3 only","2 only","1 and 2 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "ADCs and Regional Councils are the core autonomous bodies in 6th Schedule areas. The NCST monitors how these bodies function in tandem with tribal safeguards."
    },
    {
        "id": "ch67-l3-q19",
        "question": "Can the NCST",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission can assist the court by providing its investigative findings on tribal rights to ensure justice is delivered effectively."
    },
    {
        "id": "ch67-l3-q20",
        "question": "The NCST focuses on",
        "options": ["1 and 2 only","2 and 3 only","1, 2, and 3","1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "Education is the cornerstone of development. The NCST monitors EMRS, Ashram schools, and the cultural/linguistic aspect of tribal education to prevent alienation."
    },
    {
        "id": "ch67-l3-q21",
        "question": "According to the NCST",
        "options": ["The NCST must sign off on every tribal project","The Commission must be invited to advise during the conceptual and planning stages of socio-economic schemes for STs","The NCST should run the schools in tribal areas","The government should only consult the NCST after the policy is implemented"],
        "correctAnswerIndex": 1,
        "explanation": "Proactive advisory at the planning stage ensures tribal interests are baked into the design of development projects."
    },
    {
        "id": "ch67-l3-q22",
        "question": "If an ST person is discriminated against in an",
        "options": ["Cannot help as its power is only for tribal areas","Has full jurisdiction to investigate the discrimination as the person","Tells the person to go back to their village","Only helps if they are from the North East"],
        "correctAnswerIndex": 1,
        "explanation": "ST status and the corresponding constitutional safeguards (like Article 15/17) follow the individual anywhere in India."
    },
    {
        "id": "ch67-l3-q23",
        "question": "The NCST has been vocal about",
        "options": ["1 and 2 only","2 and 3 only","1, 2, and 3","1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "Health justice for tribes involves tackling genetic disorders like sickle cell anemia as well as improving general medical infrastructure with cultural sensitivity."
    },
    {
        "id": "ch67-l3-q24",
        "question": "What happens if a Governor does NOT lay the NCST",
        "options": ["The report is considered automatically accepted","It remains a constitutional violation, which the Commission then highlights in its next national report to the President for Parliamentary debate","The Governor is fined","The Commission can dissolve the local legislature"],
        "correctAnswerIndex": 1,
        "explanation": "Transparency is the Commission"
    },
    {
        "id": "ch67-l3-q25",
        "question": "Assertion (A): The NCST is a watchdog for both",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "This describes the dual dimension of tribal safeguards under the Indian Constitution."
    },
    {
        "id": "ch67-l3-q26",
        "question": "Regarding",
        "options": ["1 and 3 only","2 only","1 and 2 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Timber is NOT minor forest produce. MFP includes non-timber forest produce like grass, bamboo, honey, etc. Protecting rights over MFP is an additional function of NCST."
    },
    {
        "id": "ch67-l3-q27",
        "question": "Can the NCST recommend",
        "options": ["No, only against civilians","Yes, if its investigation reveals that the official willfully violated tribal safeguards (e.g., under the Atrocities Act)","Only if the PMO permits","Only the High Court can do that"],
        "correctAnswerIndex": 1,
        "explanation": "While it can"
    },
    {
        "id": "ch67-l3-q28",
        "question": "The NCST has 6 regional offices. Why are they not in every state?",
        "options": ["Due to budget cuts","They are strategically placed in states with significant tribal populations to maximize coverage across tribal belts","Because only 6 states have tribes","Because tribal affairs are mostly handled by the Army"],
        "correctAnswerIndex": 1,
        "explanation": "The offices are located in states like MP, Odisha, Jharkhand, etc., which have high concentrations of STs."
    },
    {
        "id": "ch67-l3-q29",
        "question": "If a policy impacts",
        "options": ["Must be consulted to provide a","of the policy","Cannot interfere with forest policies","Only looks at the voting rights in that forest","Abolishes the forest department"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 338A(9), such major shifts in policy (forest management) require consultation with the Commission."
    },
    {
        "id": "ch67-l3-q30",
        "question": "The phrase",
        "options": ["Draftsman of the list","Watchdog for the implementation of those protections","The tax collector of the tribes","The army general for tribal areas"],
        "correctAnswerIndex": 1,
        "explanation": "The President and Governor are executive guardians; the NCST is the constitutional machinery set up to monitor if they (the government) are fulfilling their protective roles."
    }
];

export const CHAPTER_67_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
