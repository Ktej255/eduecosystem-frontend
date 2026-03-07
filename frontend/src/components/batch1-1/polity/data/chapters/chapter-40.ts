import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch40-l1-q1",
        "question": "During the British rule, which was the first Municipal Corporation established in India in 1688?",
        "options": ["Bombay Municipal Corporation","Madras Municipal Corporation","Calcutta Municipal Corporation","Delhi Municipal Committee"],
        "correctAnswerIndex": 1,
        "explanation": "In 1688, the first municipal corporation in India was set up at Madras."
    },
    {
        "id": "ch40-l1-q2",
        "question": "Lord Ripon’s Resolution of 1882 is widely recognized and frequently referred to as the:",
        "options": ["Magna Carta of Local Self-Government","Urban Charter of India","Municipal Declaration","Foundation of District Administration"],
        "correctAnswerIndex": 0,
        "explanation": "Lord Ripon’s Resolution of 1882 has been hailed as the"
    },
    {
        "id": "ch40-l1-q3",
        "question": "The 74th Constitutional Amendment Act of 1992 added a new Part to the Constitution dealing with",
        "options": ["Part IX","Part IX-A","Part IX-B","Part X"],
        "correctAnswerIndex": 1,
        "explanation": "The 74th Amendment Act of 1992 has added a new Part IX-A to the Constitution of India. It is entitled"
    },
    {
        "id": "ch40-l1-q4",
        "question": "The 74th Amendment Act also added a new Schedule to the Constitution that specifies the functional mandate of Municipalities. Which Schedule is this?",
        "options": ["Eleventh Schedule","Twelfth Schedule","Tenth Schedule","Ninth Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Act has also added a new Twelfth Schedule to the Constitution. It contains 18 functional items of the municipalities."
    },
    {
        "id": "ch40-l1-q5",
        "question": "According to the 74th Amendment, a",
        "options": ["A larger urban area","A transitional area (an area in transition from a rural area to an urban area)","A smaller urban area","Industrial townships specifically"],
        "correctAnswerIndex": 1,
        "explanation": "A nagar panchayat is constituted for a transitional area, that is, an area in transition from a rural area to an urban area."
    },
    {
        "id": "ch40-l1-q6",
        "question": "A",
        "options": ["A larger urban area","A transitional area","A smaller urban area","A metropolitan city"],
        "correctAnswerIndex": 2,
        "explanation": "A municipal council is constituted for a smaller urban area."
    },
    {
        "id": "ch40-l1-q7",
        "question": "A",
        "options": ["A transitional area","A smaller urban area","A larger urban area","A village"],
        "correctAnswerIndex": 2,
        "explanation": "A municipal corporation is constituted for a larger urban area."
    },
    {
        "id": "ch40-l1-q8",
        "question": "Under the Constitution, the formal notification specifying whether an area is a",
        "options": ["President of India","Governor of the State","Chief Minister","State Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The governor has to specify a transitional area, a smaller urban area or a larger urban area on the basis of population, density of population, revenue generated, etc."
    },
    {
        "id": "ch40-l1-q9",
        "question": "According to the 74th Amendment Act, all the members of a municipality shall be elected:",
        "options": ["Directly by the people of the municipal area","Indirectly by an electoral college","Nominated entirely by the Governor","Appointed by the Mayor"],
        "correctAnswerIndex": 0,
        "explanation": "All the members of a municipality shall be elected directly by the people of the municipal area."
    },
    {
        "id": "ch40-l1-q10",
        "question": "The constitution of",
        "options": ["1 Lakh or more","3 Lakhs or more","5 Lakhs or more","10 Lakhs or more"],
        "correctAnswerIndex": 1,
        "explanation": "There shall be constituted wards committees, consisting of one or more wards, within the territorial area of a municipality having population of three lakhs or more."
    },
    {
        "id": "ch40-l1-q11",
        "question": "The State Legislature may provide for the representation of persons having special knowledge or experience in municipal administration. What restriction is placed on these individuals?",
        "options": ["They have complete voting rights in all matters.","They do not have the right to vote in the meetings of the municipality.","They must be retired IAS officers.","They are elected by the Wards."],
        "correctAnswerIndex": 1,
        "explanation": "The state legislature may provide the representation of persons having special knowledge or experience in municipal administration without the right to vote in the meetings of municipality."
    },
    {
        "id": "ch40-l1-q12",
        "question": "The Act mandates reservation of seats for SCs and STs in proportion to their population. What is the constitutionally mandated minimum reservation of seats for women in every municipality?",
        "options": ["Not less than one-half (50%)","Not less than one-third (33%) including women belonging to SCs and STs","It is completely voluntary for the state legislature to decide","25% strictly"],
        "correctAnswerIndex": 1,
        "explanation": "The act provides for the reservation of not less than one-third of the total number of seats for women (including the number of seats reserved for women belonging to the SCs and the STs)."
    },
    {
        "id": "ch40-l1-q13",
        "question": "What is the standard constitutional term of office fixed for every municipality?",
        "options": ["4 years","5 years","6 years","Permanent body"],
        "correctAnswerIndex": 1,
        "explanation": "The act provides for a five-year term of office for every municipality."
    },
    {
        "id": "ch40-l1-q14",
        "question": "If a municipality is dissolved before the expiration of its duration, elections to constitute the new municipality must be completed within:",
        "options": ["1 month from the date of dissolution","3 months from the date of dissolution","6 months from the date of dissolution","1 year from the date of dissolution"],
        "correctAnswerIndex": 2,
        "explanation": "Fresh elections to constitute a municipality shall be completed before the expiration of a period of six months from the date of its dissolution."
    },
    {
        "id": "ch40-l1-q15",
        "question": "Article 243ZD mandates the creation of a",
        "options": ["To consolidate the plans prepared by both Panchayats and Municipalities in the district and draft a development plan for the district as a whole.","To consolidate plans only for the rural villages.","To act as a state-level planning commission.","To manage the district police budget."],
        "correctAnswerIndex": 0,
        "explanation": "Every state shall constitute at the district level, a district planning committee to consolidate the plans prepared by panchayats and municipalities in the district."
    },
    {
        "id": "ch40-l1-q16",
        "question": "The Constitution requires that in a",
        "options": ["Not less than one-third","Not less than two-thirds (2/3)","Not less than three-fourths","Not less than four-fifths"],
        "correctAnswerIndex": 1,
        "explanation": "The act lays down that two-thirds of the members of a metropolitan planning committee should be elected by the elected members of the municipalities and chairpersons of the panchayats in the metropolitan area."
    },
    {
        "id": "ch40-l1-q17",
        "question": "In the functional structure of a typical Municipal Corporation, which body acts as the deliberative and legislative wing?",
        "options": ["The Municipal Commissioner","The Council (consisting of Councillors and headed by the Mayor)","The Standing Committee","The Ward Committee"],
        "correctAnswerIndex": 1,
        "explanation": "The council is the deliberative and legislative wing of the corporation. It consists of the Councillors directly elected by the people, as well as a few nominated persons having knowledge."
    },
    {
        "id": "ch40-l1-q18",
        "question": "The",
        "options": ["The Mayor of the City","The State Government (generally drawing from the IAS cadre)","The President of India","The people through a direct election"],
        "correctAnswerIndex": 1,
        "explanation": "The municipal commissioner is responsible for the implementation of the decisions taken by the council. He is appointed by the state government and is generally a member of the IAS."
    },
    {
        "id": "ch40-l1-q19",
        "question": "In a Municipal Corporation, who is formally considered the",
        "options": ["The Municipal Commissioner","The Mayor","The Chief Minister","The local Member of Legislative Assembly (MLA)"],
        "correctAnswerIndex": 1,
        "explanation": "The Council is headed by a Mayor. He is assisted by a Deputy Mayor. He is elected in a majority of the states for a one-year renewable term. He is basically an ornamental figure and a formal head of the corporation. He is the first citizen of the city."
    },
    {
        "id": "ch40-l1-q20",
        "question": "The 12th Schedule, introduced by the 74th Amendment Act, specifies the functional area of Municipalities. Exactly how many functional items does it contain?",
        "options": ["29 items (same as Panchayats)","18 items","22 items","15 items"],
        "correctAnswerIndex": 1,
        "explanation": "The 12th Schedule contains 18 functional items placed within the purview of municipalities under Article 243-W."
    },
    {
        "id": "ch40-l1-q21",
        "question": "A",
        "options": ["The State Government solely","The Union Ministry of Defence","The Union Ministry of Home Affairs","The Governor acting at their discretion"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the other types of urban local bodies, which are created and administered by state governments, a cantonment board is created as well as administered by the central government (Defence Ministry)."
    },
    {
        "id": "ch40-l1-q22",
        "question": "What type of urban local body is usually established for the administration of a small town, acting essentially as a",
        "options": ["Large industrial city","Town Area Committee","Port Trust","Special Purpose Agency"],
        "correctAnswerIndex": 1,
        "explanation": "A town area committee is set up for the administration of a small town. It is a semi-municipal authority entrusted with a limited number of civic functions."
    },
    {
        "id": "ch40-l1-q23",
        "question": "A",
        "options": ["By a detailed law passed by the state legislature","By a mere notification published in the government gazette by the State Government","By a Presidential decree","By a judicial order of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "A notified area committee is created... by an executive resolution. It is so-called because it is created by a notification published in the government gazette."
    },
    {
        "id": "ch40-l1-q24",
        "question": "A",
        "options": ["Only elected members","Both elected and nominated members, typically created by an Act of Parliament","Only military officers","Only foreign maritime experts"],
        "correctAnswerIndex": 1,
        "explanation": "Port trusts are established in the port areas... They are created by an Act of Parliament. A port trust consists of both elected and nominated members."
    },
    {
        "id": "ch40-l1-q25",
        "question": "Which constitutional body is explicitly vested with the superintendence, direction, and control of the preparation of electoral rolls and the conduct of all elections to the municipalities?",
        "options": ["Election Commission of India (ECI)","State Election Commission (SEC)","Municipal Commissioner","District Magistrate"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZA explicitly states that the superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all elections to the municipalities shall be vested in the State Election Commission."
    },
    {
        "id": "ch40-l1-q26",
        "question": "The 74th Constitutional Amendment Act of 1992 officially came into force on:",
        "options": ["January 26, 1950","April 24, 1993","June 1, 1993","August 15, 1995"],
        "correctAnswerIndex": 2,
        "explanation": "The 74th Amendment Act of 1992 came into force on June 1, 1993. (Note: The 73rd Amendment came into force on April 24, 1993)."
    },
    {
        "id": "ch40-l1-q27",
        "question": "Which Article of the Constitution deals precisely with the",
        "options": ["Article 243P","Article 243Q","Article 243T","Article 243U"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243Q provides for the constitution of three types of municipalities in every state: Nagar panchayat, Municipal council, and Municipal corporation."
    },
    {
        "id": "ch40-l1-q28",
        "question": "If a large public enterprise (like SAIL or GAIL) sets up an industrial plant and builds a housing colony for its workers, what form of urban local body is typically created to administer civic amenities here?",
        "options": ["Municipal Corporation","Township (administered by a Town Administrator appointed by the enterprise)","Cantonment Board","Port Trust"],
        "correctAnswerIndex": 1,
        "explanation": "A township type of urban government is established by the large public enterprises to provide civic amenities to its staff... The enterprise appoints a town administrator."
    },
    {
        "id": "ch40-l1-q29",
        "question": "In the context of municipal administration, a",
        "options": ["Single-purpose (function-based) body, rather than an area-based multi-purpose body like a Municipality.","Body directly elected by the entire state.","Historical remnant from the British era.","Private corporate entity competing with the municipality."],
        "correctAnswerIndex": 0,
        "explanation": "States have set up certain agencies to undertake designated activities... These are function-based and not area-based. They are known as"
    },
    {
        "id": "ch40-l1-q30",
        "question": "The minimum age qualifying a person to be chosen as a member of a municipality is the same as that for Panchayats. It is:",
        "options": ["18 years","21 years","25 years","30 years"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243V states that a person is qualified to be chosen as a member of a municipality if he has attained the age of 21 years."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch40-l2-q1",
        "question": "The 74th Amendment Act provides for three types of municipalities (Nagar Panchayat, Municipal Council, Municipal Corporation) but does not provide fixed demographic numbers (e.g., exactly 1 lakh or 5 lakh population) for them across India. What is the constitutional consequence of this?",
        "options": ["It establishes absolute uniformity across all Indian cities.","It acknowledges India","It means the Central Government can redefine any city","It forces all matters of classification into the Supreme Court for judicial review."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution leaves the benchmarks strictly to the state. The Governor specifies an area based on population, density, revenue generated, percentage of employment in non-agricultural activities, etc., allowing massive variation between states."
    },
    {
        "id": "ch40-l2-q2",
        "question": "In the structure of a Municipal Corporation, the",
        "options": ["They are democratically subservient, elected directly by the Council members from among themselves.","They belong to the deliberative wing and formulate all civic laws.","They are responsible for the","of the decisions taken by the Council, but they are appointed by the State Government (usually an IAS officer), establishing structural state control over the city.","They hold office purely at the pleasure of the Mayor."],
        "correctAnswerIndex": 2,
        "explanation": "While the Mayor and Council are elected and deliberative, the Municipal Commissioner is a bureaucrat appointed by the State Government, creating a separation of powers where the State retains a strong grip on executive implementation."
    },
    {
        "id": "ch40-l2-q3",
        "question": "Why does the structural framework of a Municipal Corporation necessitate the creation of",
        "options": ["To replace the Municipal Council entirely during a state-declared emergency.","To facilitate the detailed working of the large unwieldy Council by breaking down tasks into specific functional fields like health, education, and public works.","To serve as a constitutional platform for the Governor to directly intervene in local affairs.","To manage the Cantonment areas lying within the city limits."],
        "correctAnswerIndex": 1,
        "explanation": "A Corporation Council is too large to debate every detail of city management. Standing Committees are formed to facilitate its working. They deal with public works, education, health, taxation, finance, and so on."
    },
    {
        "id": "ch40-l2-q4",
        "question": "A",
        "options": ["It is a multi-purpose body addressing all civic needs.","It is a function-based body (single-purpose) explicitly designed to focus on one technical domain, often operating independently of the elected local municipal structure.","It is constituted exclusively of elected ward representatives.","It is immune from judicial scrutiny."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike a municipality which is"
    },
    {
        "id": "ch40-l2-q5",
        "question": "For the purpose of conducting municipal elections, a municipal area is systematically divided into territorial constituencies. What is the constitutional term for these constituencies?",
        "options": ["Blocks","Wards","Sectors","Zonal units"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243S: Each municipal area shall be divided into territorial constituencies to be known as wards."
    },
    {
        "id": "ch40-l2-q6",
        "question": "While reservation for SCs, STs, and women is mandatory for",
        "options": ["It strictly prohibits reserving the Chairperson office for any category to protect meritocracy.","It is a compulsory provision with rigid numerical matrices dictated by the Election Commission.","The State Legislature may provide for the manner of reservation of offices of chairpersons in the municipalities for SCs, STs, and women.","Reservation is mandated only for SCs and STs, not for women."],
        "correctAnswerIndex": 2,
        "explanation": "Article 243T (4) states: The office of Chairpersons in the Municipalities shall be reserved for the Scheduled Castes, the Scheduled Tribes and women in such manner as the Legislature of a State may, by law, provide."
    },
    {
        "id": "ch40-l2-q7",
        "question": "If a legal question arises as to whether an elected member of a municipality has become subject to any of the constitutionally or statutorily prescribed disqualifications, who possesses the final authority to adjudicate this?",
        "options": ["The State Election Commission exclusively.","Such authority as the State Legislature determines by law.","Only the High Court under its writ jurisdiction.","The Municipal Commissioner."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243V: If any question arises as to whether a member of a municipality has become subject to any of the disqualifications... the question shall be referred for the decision of such authority and in such manner as the Legislature of a State may, by law, provide."
    },
    {
        "id": "ch40-l2-q8",
        "question": "A municipality is dissolved prematurely due to severe maladministration. Elections are held, and a new municipality is constituted. Does this new body enjoy a fresh five-year term?",
        "options": ["Yes, constitutional bodies always reset to their full tenure.","No, it shall continue only for the remainder of the period for which the dissolved municipality would have continued had it not been so dissolved.","Yes, unless the Governor stipulates a probationary three-year term.","No, it functions indefinitely until the next census."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243U (4): A municipality constituted upon the dissolution of a municipality before the expiration of its duration shall continue only for the remainder of the period..."
    },
    {
        "id": "ch40-l2-q9",
        "question": "The",
        "options": ["The Governor of the State.","The State Legislature makes provisions by law regarding the manner in which the Chairpersons of such Committees shall be chosen.","The members of the Zila Parishad by an absolute majority vote.","The Union Ministry of Urban Development."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZD (2) explicitly states that the Legislature of a State may, by law, make provision with respect to... the manner in which the Chairpersons of such Committees shall be chosen."
    },
    {
        "id": "ch40-l2-q10",
        "question": "In a",
        "options": ["One-half (1/2)","Two-thirds (2/3) elected by the elected members of the Municipalities and Chairpersons of the Panchayats in the Metropolitan area.","Three-fourths (3/4)","Four-fifths (4/5)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZE requires that not less than two-thirds of the members of such Committee shall be elected by, and from amongst, the elected members of the Municipalities and Chairpersons of the Panchayats in the Metropolitan area."
    },
    {
        "id": "ch40-l2-q11",
        "question": "When a Metropolitan Planning Committee (MPC) prepares the",
        "options": ["Providing free high-speed internet to every household.","Matters of common interest between the Municipalities and Panchayats, including coordinated spatial planning of the area, sharing of water and other physical and natural resources.","The political manifesto of the ruling state party.","Building international airports exclusively."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZE explicitly states the MPC shall have regard to matters of common interest between the Municipalities and the Panchayats, including coordinated spatial planning... sharing of water and other physical and natural resources..."
    },
    {
        "id": "ch40-l2-q12",
        "question": "The",
        "options": ["It creates a distinct",".","Article 243-Y mandates that the EXACT SAME State Finance Commission constituted under Article 243-I shall also review the financial position of the Municipalities, ensuring an integrated assessment of local resources.","It delegates municipal finance auditing solely to the RBI.","It leaves it to the discretion of the Union Finance Ministry."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243Y integrates the rural-urban fiscal architecture by stating that the Finance Commission constituted under Article 243-I shall also review the financial position of the Municipalities and make recommendations to the Governor."
    },
    {
        "id": "ch40-l2-q13",
        "question": "Municipalities can be authorized to levy, collect, and appropriate taxes to strengthen their financial autonomy. In the context of the 74th Amendment, is this taxation power a compulsory mandate or a voluntary devolution?",
        "options": ["It is a strict constitutional requirement enforceable by writ.","It is a",". The Constitution states the State Legislature","authorize a municipality to levy, collect and appropriate such taxes.","It is an automatic concurrent power shared with the Centre.","Panchayats have this power, but Municipalities do not."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243X states: The Legislature of a State *may*, by law—authorize a municipality to levy, collect and appropriate such taxes, duties, tolls and fees. Like Panchayats, this financial devolution is essentially voluntary, crippling many ULBs."
    },
    {
        "id": "ch40-l2-q14",
        "question": "What specific role does the Central Finance Commission (constituted under Article 280) play in bolstering the finances of Municipalities across India?",
        "options": ["It directly transfers international aid to municipal accounts.","It recommends measures needed to augment the Consolidated Fund of a State specifically to supplement the resources of the Municipalities in the State, based on the recommendations made by the State Finance Commission.","It audits the individual spending of every Mayor in the country.","It sets the base salary for municipal workers."],
        "correctAnswerIndex": 1,
        "explanation": "Article 280 was amended to include a clause requiring the Central Finance Commission to recommend measures needed to augment the Consolidated Fund of a State to supplement the resources of the municipalities..."
    },
    {
        "id": "ch40-l2-q15",
        "question": "A",
        "options": ["It is a completely democratic body consisting only of elected representatives.","It is an entirely military body with only nominated armed forces personnel.","It consists of partly elected members and partly nominated/ex-officio members (like the military Station Commander who acts as the ex-officio President of the board).","It is appointed directly by the State Governor on the advice of the Chief Minister."],
        "correctAnswerIndex": 2,
        "explanation": "A cantonment board consists of partly elected and partly nominated members. The military officer commanding the station is the ex-officio president of the board."
    },
    {
        "id": "ch40-l2-q16",
        "question": "The",
        "options": ["The President of India.","The Chief Minister of the hosting state.","The General Officer Commanding-in-Chief of the military command.","The District Magistrate."],
        "correctAnswerIndex": 0,
        "explanation": "The executive officer of the cantonment board is appointed by the President of India. He belongs to the central cadre established for the purpose."
    },
    {
        "id": "ch40-l2-q17",
        "question": "A",
        "options": ["Established by the Parliament to handle defense production towns exclusively.","Established by a separate act of the state legislature, performing a limited number of civic functions like drainage, roads, and street lighting, lacking the expansive taxation powers of a full municipality.","Created by a central notification solely to manage maritime ports.","A privately funded township managing corporate employee housing."],
        "correctAnswerIndex": 1,
        "explanation": "A town area committee is created by a separate act of a state legislature. Its composition, character and functions are determined by the state act... It is entrusted with... limited number of civic functions."
    },
    {
        "id": "ch40-l2-q18",
        "question": "Why is a",
        "options": ["Because its residents must continuously notify the state of their income changes.","Because it is created merely by a notification in the government gazette (not a comprehensive act), usually for an area rapidly industrializing but lacking the formal conditions to immediately become a municipality.","Because it is directly under the Central Government","Because it only exists momentarily for one year and notifies its dissolution."],
        "correctAnswerIndex": 1,
        "explanation": "It is created for an area... which is fast developing due to industrialization or does not yet fulfill the conditions... It is so-called because it is created by a notification published in the government gazette."
    },
    {
        "id": "ch40-l2-q19",
        "question": "Under the provisions of the 74th Amendment (Article 243Q), an",
        "options": ["If the township refuses to pay state taxes.","If the Governor notifies it as an industrial township because the industrial establishment provides the municipal services itself, making a separate elected body redundant.","If it is owned by a foreign multi-national corporation.","If it is located inside a Special Economic Zone (SEZ)."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243Q states a municipality under this clause may not be constituted in such urban area or part thereof as the Governor may, having regard to the size of the area and the municipal services being provided or proposed to be provided by an industrial establishment in that area..."
    },
    {
        "id": "ch40-l2-q20",
        "question": "Can the State Election Commission (SEC) be compelled by the Central Government to assist in the preparation of electoral rolls for the national Lok Sabha elections to save state resources?",
        "options": ["Yes, it is their primary concurrent duty.","No. The Election Commission of India (ECI) and the SEC are completely independent, distinct constitutional bodies with separate jurisdictions. The SEC exclusively handles Panchayats and Municipal elections.","They can be forced to do so only in small Union Territories.","Yes, provided the President triggers Article 356."],
        "correctAnswerIndex": 1,
        "explanation": "The ECI and SECs are parallel constitutional authorities. The SEC handles local self-government elections (73rd/74th amendments). The ECI handles Parliament and State Legislatures. One does not subordinate or control the other."
    },
    {
        "id": "ch40-l2-q21",
        "question": "Regarding the",
        "options": ["The Comptroller and Auditor General (CAG) of India unilaterally.","The State Legislature, which may by law make provisions with respect to the maintenance of accounts and the auditing of such accounts.","The Mayor of the Municipal Corporation.","The Union Finance Ministry."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243Z states: The Legislature of a State may, by law, make provisions with respect to the maintenance of accounts by the Municipalities and the auditing of such accounts."
    },
    {
        "id": "ch40-l2-q22",
        "question": "The 74th Amendment Act applies generically to the whole of India. Which of the following areas is explicitly, constitutionally EXEMPTED from its application under Article 243ZC?",
        "options": ["The vast metropolitan areas of Mumbai and Kolkata.","The Scheduled Areas referred to in Article 244(1) and Tribal Areas referred to in Article 244(2).","Areas falling under the jurisdiction of a maritime Port Trust.","The National Capital Territory of Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZC: Nothing in this part shall apply to the Scheduled Areas referred to in clause (1), and the tribal areas referred to in clause (2), of Article 244."
    },
    {
        "id": "ch40-l2-q23",
        "question": "Why is the",
        "options": ["Because they legally possess no voting rights within the municipal council.","Because the real, sweeping executive power is structurally vested in an unelected Municipal Commissioner (often an IAS officer) appointed by the State, confining the Mayor","Because they are appointed by the Governor rather than elected.","Because their tenure is strictly limited to one rigorous month of actual work."],
        "correctAnswerIndex": 1,
        "explanation": "In India, the Commissioner holds the executive power (signing checks, directing staff, implementing policy). The Mayor is the deliberative head, essentially acting like the Speaker of the Council with very little direct administrative leverage."
    },
    {
        "id": "ch40-l2-q24",
        "question": "The",
        "options": ["Primary agriculture and fisheries.","Urban forestry, protection of the environment, and promotion of ecological aspects.","Major national highway construction.","Rural housing and rural electrification."],
        "correctAnswerIndex": 1,
        "explanation": "Item 8 of the 12th Schedule explicitly lists: Urban forestry, protection of the environment and promotion of ecological aspects. (Agriculture, rural housing are in the 11th Schedule for Panchayats)."
    },
    {
        "id": "ch40-l2-q25",
        "question": "Both the 73rd and 74th Amendments provide for a 5-year term and a strict mandate that if a body is dissolved, new elections must be completed within 6 months. Is this 6-month rule universally compulsory or a loose directive?",
        "options": ["A","meant as guidance but frequently ignored legally.","A","constitutional requirement binding on the State Election Commission and the State Government to prevent prolonged bureaucratic rule over local bodies.","Subject entirely to the State Election Commissioner","Applicable only for larger cities (Municipal Corporations)."],
        "correctAnswerIndex": 1,
        "explanation": "The 6-month rule is one of the most critical compulsory provisions of both the 73rd and 74th Amendments. It cannot be legally bypassed unless the remainder of the term itself was less than 6 months."
    },
    {
        "id": "ch40-l2-q26",
        "question": "While Panchayats follow a strict",
        "options": ["It is based purely on the functional expertise of the councillors.","The tiers (Nagar Panchayat, Municipal Council, Municipal Corporation) are NOT in a vertical hierarchy over one another; rather, they are distinct, independent bodies structured horizontally based on the demographic size and nature (Transitional vs. Smaller vs. Larger) of the urban settlement.","It is based strictly on political affiliation and historical legacy.","It is divided by distance from the state capital."],
        "correctAnswerIndex": 1,
        "explanation": "A Municipal Corporation does not"
    },
    {
        "id": "ch40-l2-q27",
        "question": "What is the primary grass-roots democratic rationale behind mandating the creation of",
        "options": ["To centralize taxation power directly into the Mayor","To bridge the gap between people and administration in large, densely populated urban areas, ensuring localized civic issues aren","To act as neighborhood watch groups to collect income tax.","To manage the local police stations independently."],
        "correctAnswerIndex": 1,
        "explanation": "In cities with huge populations (3 lakhs+), the central Municipal Council becomes detached. Wards Committees (like zonal micro-councils) bring governance, grievance redressal, and basic scrutiny closer to the street level."
    },
    {
        "id": "ch40-l2-q28",
        "question": "Does the 74th Amendment constitutionally allow the State Legislature to infuse",
        "options": ["No, doing so violently contradicts democratic principles.","Yes, the State Legislature can provide for the representation of persons with special knowledge or experience in municipal administration, but emphatically strips them of the right to vote in meetings.","Yes, and they are granted overriding veto rights on financial matters.","Only if they belong to the ruling state political party."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243R permits the inclusion of nominated members to bring in technical or administrative expertise, but explicitly adds the proviso that they shall not have the right to vote, preserving the democratic supremacy of elected councillors."
    },
    {
        "id": "ch40-l2-q29",
        "question": "Assertion (A): After the commencement of the 74th Amendment Act in 1993, all existing state laws contradicting it were immediately and instantaneously rendered null and void across India.\\nReason (R): Constitutional Amendments inherently and automatically repeal all contrary previous lower statutes without a grace period.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","Both are false."],
        "correctAnswerIndex": 3,
        "explanation": "The 74th Amendment (Article 243ZF) explicitly provided a transitional grace period. It stated that all inconsistent existing state laws shall continue in force until amended/repealed by the state legislature, or *until the expiration of one year from the commencement of the Act*, whichever is earlier."
    },
    {
        "id": "ch40-l2-q30",
        "question": "Among the sources of municipal financial revenue throughout India",
        "options": ["It remains the fastest-growing and largest source of own-source revenue for all municipalities.","It has been almost universally abolished and structurally subsumed into the Goods and Services Tax (GST) framework, severely eroding the independent tax base of urban local bodies and making them dangerously dependent on state GST compensation grants.","It was explicitly banned by the 74th Amendment in 1992.","It is now collected exclusively by the Central Government and managed by the Reserve Bank of India."],
        "correctAnswerIndex": 1,
        "explanation": "Octroi was a huge revenue spinner (especially in states like Maharashtra). Its abolition and subsumption into GST removed a massive, direct, elastic revenue source for ULBs, replacing it with delayed compensations/grants from the State, fundamentally weakening their financial autonomy."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch40-l3-q1",
        "question": "In the deeply contested legal battles of 2023-24 concerning the Delhi Municipal Corporation (MCD), the Supreme Court delivered a decisive ruling regarding the voting rights of",
        "options": ["Nominated members possess full and absolute voting rights identical to elected councillors in all mayoral elections.","The Constitution explicitly prohibits nominated members from voting in the very first meeting of the newly constituted Corporation specifically held to elect the Mayor or Deputy Mayor.","Nominated members can vote only if the Lieutenant Governor issues a special protective ordinance.","The Mayor explicitly commands the right to grant or deny voting privileges to Aldermen."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (in Shelly Oberoi vs Office of Lieutenant Governor) categorically ruled that nominated members (aldermen) cannot vote in the election of the Mayor, Deputy Mayor, or Standing Committee members, upholding the democratic supremacy of directly elected representatives."
    },
    {
        "id": "ch40-l3-q2",
        "question": "Article 243R permits the State Legislature to legally inject persons having special knowledge or experience into municipal administration. Which fundamental democratic safeguard does the proviso to this Article immediately place upon these individuals?",
        "options": ["They strictly shall adhere to the political whip of the ruling state party.","They emphatically shall not have the legal right to vote in the deliberative meetings of the Municipality.","They are restricted from speaking unless they present documented technical expertise on urban planning.","They must resign their primary employment before attending any council sessions."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent state governments from artificially packing municipal councils with their own loyalists to overturn the public mandate, Article 243R(2)(a) insists that persons with special knowledge"
    },
    {
        "id": "ch40-l3-q3",
        "question": "Central to the massive 15th Finance Commission grants directed at Urban Local Bodies (ULBs) is the radical enforcement of",
        "options": ["They must comprehensively abolish local property taxes and rely entirely on Central GST payouts.","They must rigorously notify minimum floor rates for property tax and stringently ensure these rates remain consistent with the prevailing state","or","to prevent massive revenue leakage.","They must permanently transfer all historic tax collection authority straight to the State Revenue Department.","They must arbitrarily tax exclusively commercial zones and exempt entirely all residential dwellings."],
        "correctAnswerIndex": 1,
        "explanation": "Recognizing that ULBs collect only a fraction of their potential property tax due to archaic valuations, the 15th FC linked crucial grants to states notifying floor rates and aligning municipal property valuations with the state"
    },
    {
        "id": "ch40-l3-q4",
        "question": "The",
        "options": ["To formally train newly elected rural Sarpanchs in sophisticated urban diplomatic relations.","To flood ULBs and Smart Cities with fresh graduates as interns, infusing desperate tech-savvy manpower to dramatically improve archaic urban planning and digital tech adoption at the grassroots level.","To actively recruit permanent, lifelong IAS officers specifically to bypass state civil services in newly formed municipalities.","To systematically teach uneducated citizens how to meticulously file complex civic taxes online."],
        "correctAnswerIndex": 1,
        "explanation": "TULIP is a pioneering initiative to match opportunities in ULBs/Smart Cities with learning needs of fresh graduates. ULBs get cheap, energetic talent to tackle digital initiatives (like GIS mapping or data analytics), while students get real-world governance exposure."
    },
    {
        "id": "ch40-l3-q5",
        "question": "Pioneering cities like Ahmedabad, Pune, and Indore have successfully floated",
        "options": ["Begging for emergency ad-hoc hardship grants from the World Bank during pandemic crises.","Raising substantial market capital directly from private investors for massive urban infrastructure projects (like water supply networks), predicated entirely on the city","Covering the crippling shortfalls in paying the daily salaries of the sprawling municipal bureaucracy.","Forcibly reducing the spiraling population of the city by imposing punitive exit taxes."],
        "correctAnswerIndex": 1,
        "explanation": "Muni Bonds are debt securities issued by local governments to fund day-to-day obligations and to finance capital projects. Cities must obtain an investment-grade credit rating (proving they can repay investors via user charges/taxes) to successfully list them on stock exchanges."
    },
    {
        "id": "ch40-l3-q6",
        "question": "Item 6 of the 12th Schedule explicitly mandates",
        "options": ["The overarching State Government structure.","Directly and inescapably with the Urban Local Body (the Municipality itself).","The Union Ministry of Environment, Forest and Climate Change (MoEFCC).","The District Magistrate acting under the Disaster Management Act."],
        "correctAnswerIndex": 1,
        "explanation": "The SWM Rules 2016 unequivocally place the onus of managing solid waste (from door-to-door collection, promoting segregation at source, to final scientific disposal) squarely on the shoulders of the local authorities (ULBs)."
    },
    {
        "id": "ch40-l3-q7",
        "question": "Item 8 of the 12th Schedule empowers Municipalities regarding",
        "options": ["Declaring vast swaths of the city as inviolable National Parks under the Wildlife Act.","Creating intensely dense, rapidly growing","on abandoned municipal plots to specifically combat the severe","(UHI) effect.","Arresting ordinary citizens without warrants for cutting unprotected shrubs in private walled gardens.","Aggressively exporting high-value urban timber to drastically boost the state"],
        "correctAnswerIndex": 1,
        "explanation": "The Miyawaki method of creating dense micro-forests in small urban patches is currently being aggressively adopted by ULBs (like BMC in Mumbai) to combat pollution and the Urban Heat Island effect, directly fulfilling their mandate under the 12th Schedule."
    },
    {
        "id": "ch40-l3-q8",
        "question": "Focusing heavily on coordinated agglomeration, the Constitution mandates a",
        "options": ["5 Lakh (Half a Million) or more.","10 Lakh (1 Million) or more.","50 Lakh (5 Million) or more.","2 Lakh (Two Hundred Thousand) or more."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243P(c) defines a"
    },
    {
        "id": "ch40-l3-q9",
        "question": "The",
        "options": ["The exclusively rural Zila Parishad.","The District Planning Committee (DPC) itself.","The omnipotent District Collector acting unilaterally.","The State Planning Board situated in the capital."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZD legally bounds the DPC to not just prepare a plan, but specifically to"
    },
    {
        "id": "ch40-l3-q10",
        "question": "Once the",
        "options": ["The President of India for formal national gazetting.","The Government of the State.","The Union Ministry of Panchayati Raj in New Delhi.","The Supreme Court of India for preliminary legal vetting."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZD(4) states: The Chairperson of every District Planning Committee shall forward the development plan, as recommended by such Committee, to the Government of the State."
    },
    {
        "id": "ch40-l3-q11",
        "question": "The",
        "options": ["It recklessly increases the dictatorial power of the Mayor.","It severely undermines the democratically elected Municipal Council by legally vesting sweeping financial and executive powers in a private limited company (the SPV) headed primarily by unelected bureaucrats.","It is completely unconstitutional as Article 243 prohibits any private companies from operating within city limits.","It is fundamentally flawed because it only functions efficiently in sparsely populated rural areas."],
        "correctAnswerIndex": 1,
        "explanation": "Under the Smart Cities Mission, SPVs (registered under the Companies Act) get the funds and decision-making power. This bypasses the elected Municipal Council, leading to criticisms that it creates an undemocratic"
    },
    {
        "id": "ch40-l3-q12",
        "question": "The",
        "options": ["Public health, sanitation conservancy and solid waste management.","Water supply for domestic, industrial, and commercial purposes.","Regulation of slaughter houses and tanneries.","Vital statistics including registration of births and deaths."],
        "correctAnswerIndex": 1,
        "explanation": "AMRUT 2.0 aims to make cities"
    },
    {
        "id": "ch40-l3-q13",
        "question": "To prevent the historical abuse where State Governments capriciously dissolved unfriendly municipal councils overnight, the 74th Amendment embedded a potent procedural safeguard. What is this mandatory constitutional shield?",
        "options": ["The Municipality emphatically MUST be given a","precisely before any dissolution order is finalized.","The aggressive State Government must pay a punitive fine directly to the Mayor.","The State Governor is forced to personally take over the city administration for six months.","A fresh, potentially hostile election is strictly prohibited for two entire years."],
        "correctAnswerIndex": 0,
        "explanation": "Article 243U(1) includes a critical proviso:"
    },
    {
        "id": "ch40-l3-q14",
        "question": "Article 243ZG raises an immense legal fortress, barring the interference of standard civil courts in municipal electoral matters. Consequently, if a massive irregularity occurs, a municipal election can legally be challenged ONLY by:",
        "options": ["A sweeping Writ Petition filed directly in the High Court asserting a Fundamental Rights violation.","An","presented rigorously to such specific authority, and heavily bounded in such manner, as firmly provided for by the State Legislature.","A desperate letter of appeal to the President of India.","A First Information Report (FIR) lodged at the local Police Station invoking criminal fraud."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZG(b) explicitly dictates:"
    },
    {
        "id": "ch40-l3-q15",
        "question": "Consider a sprawling",
        "options": ["Exactly 50% are fiercely contested elected seats.","Absolutely none. It is a completely bureaucratic and corporate entity where the Administrator and all managing members are strictly appointed by the industrial enterprise itself.","Only the ceremonial post of the Mayor is thrown open to an election.","It functions entirely under the direct, elected purview of the neighboring Nagar Panchayat."],
        "correctAnswerIndex": 1,
        "explanation": "A Township form of urban government has NO elected members. It is an extension of the bureaucratic management of the public enterprise, designed strictly to provide civic amenities to its own staff efficiently without political interference."
    },
    {
        "id": "ch40-l3-q16",
        "question": "A",
        "options": ["To manage the international shipping traffic exclusively, leaving civic duties to the city.","To stringently manage the demanding logistics of the port AND simultaneously provide comprehensive civic amenities (roads, lighting, sanitation) within the immediate port area.","To function as an independent Election Commission exclusively for the city","To aggressively collect all state customs duties to enrich the State Treasury."],
        "correctAnswerIndex": 1,
        "explanation": "Port trusts are created by Acts of Parliament with a dual mandate: (1) to protect and manage port operations, and (2) to provide municipal, civic amenities to the residents and workers living within the port trust area boundaries."
    },
    {
        "id": "ch40-l3-q17",
        "question": "The",
        "options": ["Directly from the staggering Consolidated Fund of India.","From the deeply contested Consolidated Fund of the State.","From the Governor","From massive international structural adjustment loans provided by the World Bank."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243Y (linking to 243-I) tasks the SFC to recommend the principles governing the grants-in-aid to the Municipalities from the Consolidated Fund of the State."
    },
    {
        "id": "ch40-l3-q18",
        "question": "To combat legendary opacity in local finances, the 15th Finance Commission wielded a heavy stick. It decisively linked millions in",
        "options": ["The mandatory publication of the city","The strict, publicly accessible online publication of both provisional accounts and formally audited annual accounts for previous financial years.","The mandatory, sworn declaration of the Mayor","The forced uploading of the intricate blueprints of all upcoming smart city projects."],
        "correctAnswerIndex": 1,
        "explanation": "To enforce profound fiscal transparency, the 15th FC categorically stated that local bodies will not receive performance grants unless their provisional and audited accounts are placed in the public domain (often via platforms like CityFinance portal)."
    },
    {
        "id": "ch40-l3-q19",
        "question": "Assertion (A): The Mayor in India",
        "options": ["Both A and R are undeniably true, and R provides the exact structural explanation for A.","Both A and R are true, but R fails to explain A.","A is true, but R is functionally false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This is the"
    },
    {
        "id": "ch40-l3-q20",
        "question": "Assertion (A): While the 73rd Amendment demands a rigid three-tier vertical hierarchy for Panchayats (Village -> Block -> District), the 74th Amendment creates a uniform, overarching structure where a Nagar Panchayat reports up to a Municipal Council, which in turn reports up to the mighty Municipal Corporation.\\nReason (R): Article 243Q definitively dictates a strict vertical chain of command to maintain urban discipline.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is strictly true, but R is false.","Both A and R are fundamentally and factually false."],
        "correctAnswerIndex": 3,
        "explanation": "Unlike Panchayats, Municipalities are entirely horizontal. A Nagar Panchayat does not report to a Municipal Corporation. They are completely independent entities existing in separate geographical areas, classified solely by their size (Transitional, Smaller, Larger). The 74th Amendment completely lacks the"
    },
    {
        "id": "ch40-l3-q21",
        "question": "The 12th Schedule covers a vast array of civic duties. Among its 18 items, which specific entry deals with humane ethical oversight rather than pure physical infrastructure?",
        "options": ["Public health and sanitation conservancy.","Prevention of cruelty to animals.","Promotion of cultural and educational aspects.","Regulation of slaughter houses."],
        "correctAnswerIndex": 1,
        "explanation": "Item 15 of the 12th Schedule explicitly mandates Municipalities to deal with the"
    },
    {
        "id": "ch40-l3-q22",
        "question": "To guarantee that the",
        "options": ["They serve entirely at the pleasure of the Governor and can be dismissed overnight.","They can be removed from office ONLY in the identical, rigorous manner and on the identical stringent grounds as a Judge of a High Court (requiring an arduous parliamentary process).","They can be aggressively removed by a simple majority vote of the combined Municipal Councils.","They can be fired instantly by the all-powerful Chief Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243K(2) (applied to cities via 243ZA) provides formidable tenure security:"
    },
    {
        "id": "ch40-l3-q23",
        "question": "If a dedicated student of the Constitution searches for the genesis of the",
        "options": ["Article 280 (Central FC).","Article 243-I (Initially created for Panchayats, and then applied rigidly to Municipalities via Article 243-Y).","Article 243-Y (Created exclusively from scratch for cities).","Article 323 (Administrative Tribunals)."],
        "correctAnswerIndex": 1,
        "explanation": "The SFC is established under Article 243-I (part of the 73rd Amendment). To avoid redundancy, the 74th Amendment (Article 243-Y) simply states that the identical commission formed under 243-I shall also handle municipal finances."
    },
    {
        "id": "ch40-l3-q24",
        "question": "Highlighting the historical evolution of urban policy coordination in early independent India, in what pivotal year was the advisory",
        "options": ["1950","1954","1992","2005"],
        "correctAnswerIndex": 1,
        "explanation": "The Central Council of Local Government was set up in 1954. It was constituted under Article 263 (Inter-State Council provisions) to act as an advisory body. Initially, it handled both urban and rural, but post-1958 it focuses only on urban local government."
    },
    {
        "id": "ch40-l3-q25",
        "question": "When a colossal municipal corporation is carved up, creating",
        "options": ["Every single adult citizen voting residing strictly within the ward boundaries.","The elected member(s) representing the specific ward(s) comprising the committee, plus other such persons as provided by the State Legislature","Exclusively the unelected Municipal Commissioner.","Strictly 50% women and 50% technical experts."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243S states the state legislature makes the law with respect to the composition. It must include the member representing that ward in the Municipality, and the state can add other members (like NGOs or experts)."
    },
    {
        "id": "ch40-l3-q26",
        "question": "Which sharply defined Article of the Indian Constitution enshrines the all-important five-year",
        "options": ["Article 243U","Article 243T","Article 243S","Article 243V"],
        "correctAnswerIndex": 0,
        "explanation": "Article 243U meticulously details the"
    },
    {
        "id": "ch40-l3-q27",
        "question": "A corrupt Municipal Council is dramatically dissolved exactly two years into its constitutionally mandated five-year term. Fresh, costly elections are conducted. How long does the newly elected Council officially survive?",
        "options": ["It enjoys a completely fresh, unbroken term of definitively 5 years.","It survives strictly for the remaining 3 years (the remainder of the original 5-year period), to maintain the overarching synchronous electoral cycle.","It survives for 1 year on strict probation.","It survives only until the State Governor arbitrarily decides to dissolve it again."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243U imposes a harsh structural continuity:"
    },
    {
        "id": "ch40-l3-q28",
        "question": "The 74th Amendment is exceptionally prescriptive regarding ST/SC and Women reservations. However, how does it address the explosive political demand for reserving the prestigious post of the",
        "options": ["It vehemently makes OBC reservation for Mayors absolutely mandatory across all Indian cities.","It treats it as a","; the Constitution grants the State Legislature complete, unfettered discretion to provide for (or ignore) OBC representation in the offices of Chairpersons.","It explicitly and unequivocally prohibits OBC reservations in local bodies entirely.","It strictly restricts OBC reservations only for the lower tier (Nagar Panchayats)."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243T(6) explicitly states:"
    },
    {
        "id": "ch40-l3-q29",
        "question": "In the context of the deep historical genesis of urban local governance, the Madras Municipal Corporation was the inaugural first. Why was it established back in 1688?",
        "options": ["Following the violent 1857 Mutiny to strictly control civilian populations.","Following a direct Charter from King James II of England to formally assist the East India Company in managing local governance and specifically to resolve crippling disputes and collect local taxes effectively.","Driven by a powerful grassroots rebellion led by native merchants demanding instant self-rule.","To formally prepare the city for receiving the incoming Viceroy of India."],
        "correctAnswerIndex": 1,
        "explanation": "The Madras Municipal Corporation was set up in 1688 under a Royal Charter issued by King James II to the East India Company. The primary motivation was to establish a formal body to deal with local disputes, handle civic services, and collect local taxes (which the EIC struggled to do directly)."
    },
    {
        "id": "ch40-l3-q30",
        "question": "Addressing the chronic, debilitating fiscal starvation of India",
        "options": ["Local Property / House Tax.","Octroi or Entry Tax (historically, where not totally subsumed into GST).","Personal Income Tax on individual wealth.","Profession Tax (subject to strict constitutional limits of Rs. 2500 per annum)."],
        "correctAnswerIndex": 2,
        "explanation": "Income Tax on non-agricultural income is strictly a Union subject (Entry 82 of the Union List). Local bodies have absolutely no constitutional jurisdiction or power to levy or collect personal income taxes. Their domains are restricted to property, professions, tolls, and specific fees."
    }
];

export const CHAPTER_40_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
