import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch42-l1-q1",
        "question": "Which specific Article in Part X of the Indian Constitution primarily deals with the administration of both",
        "options": ["Article 239","Article 243","Article 244","Article 371"],
        "correctAnswerIndex": 2,
        "explanation": "Article 244 in Part X of the Constitution deals with the administration of the Scheduled Areas and Tribal Areas."
    },
    {
        "id": "ch42-l1-q2",
        "question": "The Fifth Schedule of the Constitution specifically governs the administration and control of scheduled areas and scheduled tribes in any state EXCEPT the four North-Eastern states of:",
        "options": ["Rajasthan, Gujarat, Maharashtra, and Madhya Pradesh","Assam, Meghalaya, Tripura, and Mizoram","Odisha, Jharkhand, Chhattisgarh, and Telangana","Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh"],
        "correctAnswerIndex": 1,
        "explanation": "The Fifth Schedule of the Constitution deals with the administration and control of scheduled areas and scheduled tribes in any state except the four states of Assam, Meghalaya, Tripura and Mizoram."
    },
    {
        "id": "ch42-l1-q3",
        "question": "The Sixth Schedule of the Indian Constitution is exclusively dedicated to the administration of",
        "options": ["Assam, Manipur, Tripura, and Nagaland","Assam, Meghalaya, Tripura, and Mizoram","Arunachal Pradesh, Sikkim, Manipur, and Mizoram","Nagaland, Meghalaya, Manipur, and Tripura"],
        "correctAnswerIndex": 1,
        "explanation": "The Sixth Schedule of the Constitution deals with the administration of the tribal areas in the four north-eastern states of Assam, Meghalaya, Tripura and Mizoram."
    },
    {
        "id": "ch42-l1-q4",
        "question": "Under the provisions of the Fifth Schedule, who holds the ultimate constitutional authority to officially declare an area as a",
        "options": ["The Parliament of India","The Governor of the respective State","The President of India","The Chief Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The President is empowered to declare an area to be a scheduled area. He can also alter its boundaries after consulting the governor of the state."
    },
    {
        "id": "ch42-l1-q5",
        "question": "While the executive power of a State normally extends to the Scheduled Areas within it, the Constitution places a",
        "options": ["President of India","Governor of the State","Chief Minister","Tribal Welfare Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The executive power of a state extends to the scheduled areas therein. But the governor has a special responsibility regarding such areas."
    },
    {
        "id": "ch42-l1-q6",
        "question": "To ensure central oversight, the Governor of a state with Scheduled Areas is constitutionally required to submit a comprehensive report regarding their administration to the President:",
        "options": ["Every single month.","Bi-annually (twice a year).","Annually, or whenever so required by the President.","Only immediately following state elections."],
        "correctAnswerIndex": 2,
        "explanation": "The governor has to submit a report to the president regarding the administration of such areas, annually or whenever so required by the president."
    },
    {
        "id": "ch42-l1-q7",
        "question": "Under the Fifth Schedule, every state possessing Scheduled Areas is constitutionally mandated to establish an advisory body known as the:",
        "options": ["Tribal Welfare Board (TWB)","Scheduled Tribes Commission (STC)","Tribes Advisory Council (TAC)","District Development Council (DDC)"],
        "correctAnswerIndex": 2,
        "explanation": "Each state having scheduled areas has to establish a tribes advisory council to advise on welfare and advancement of the scheduled tribes."
    },
    {
        "id": "ch42-l1-q8",
        "question": "What is the fixed upper limit on the total number of members constituting a",
        "options": ["10 members","15 members","20 members","30 members"],
        "correctAnswerIndex": 2,
        "explanation": "It is to consist of 20 members, three-fourths of whom are to be the representatives of the scheduled tribes in the state legislative assembly."
    },
    {
        "id": "ch42-l1-q9",
        "question": "To ensure genuine political representation within the 20-member",
        "options": ["One-half (1/2)","Two-thirds (2/3)","Three-fourths (3/4)","All members entirely (100%)"],
        "correctAnswerIndex": 2,
        "explanation": "Three-fourths of the members of the TAC are to be the representatives of the scheduled tribes in the state legislative assembly."
    },
    {
        "id": "ch42-l1-q10",
        "question": "Who possesses the extraordinary constitutional power to publicly direct that any specific Act of Parliament or the State Legislature shall NOT legally apply to a Scheduled Area, or shall apply only with specified modifications?",
        "options": ["The Chief Minister","The Governor of the State","The President of India","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The governor is empowered to direct that any particular act of Parliament or the state legislature does not apply to a scheduled area or apply with specified modifications and exceptions."
    },
    {
        "id": "ch42-l1-q11",
        "question": "While the Governor holds sweeping powers to make",
        "options": ["President of India","Tribes Advisory Council (TAC)","Chief Minister and the Cabinet","Chief Justice of the respective High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The governor can make regulations for the peace and good government of a scheduled area after consulting the tribes advisory council."
    },
    {
        "id": "ch42-l1-q12",
        "question": "When a Governor successfully drafts a",
        "options": ["State Legislature via a simple majority vote","Parliament via a two-thirds majority vote","President of India","Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "Such a regulation may repeal or amend any act of Parliament or the state legislature, which is applicable to the area in question. But, all such regulations require the assent of the president."
    },
    {
        "id": "ch42-l1-q13",
        "question": "The Constitution requires the President to periodically appoint an independent commission to report on the administration of Scheduled Areas. Which prominent individual headed the very FIRST such commission appointed critically in 1960?",
        "options": ["U.N. Dhebar","Dilip Singh Bhuria","Ashok Mehta","Kaka Kalelkar"],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution requires the president to appoint a commission... The first commission was appointed in 1960 and was headed by U.N. Dhebar. (The second was in 2002 under Dilip Singh Bhuria)."
    },
    {
        "id": "ch42-l1-q14",
        "question": "Under the protective umbrella of the Sixth Schedule, the distinct tribal areas geographically situated within the four North-Eastern states (Assam, Meghalaya, Tripura, Mizoram) have been legally constituted as:",
        "options": ["Union Territories","Autonomous Districts","Special Economic Zones","Protected Sovereign Zones"],
        "correctAnswerIndex": 1,
        "explanation": "The tribal areas in the four states of Assam, Meghalaya, Tripura and Mizoram have been constituted as autonomous districts."
    },
    {
        "id": "ch42-l1-q15",
        "question": "Despite being designated as",
        "options": ["Yes, they form separate","completely independent of the State","No, although they possess significant autonomy, they absolutely DO NOT fall outside the executive authority of the state concerned.","Yes, they are directly administered exclusively by the Union Home Ministry.","Only when the President declares a state of emergency."],
        "correctAnswerIndex": 1,
        "explanation": "But, they do not fall outside the executive authority of the state concerned."
    },
    {
        "id": "ch42-l1-q16",
        "question": "Who is the specific constitutional authority empowered to actively organize, forcefully reorganize, alter the boundaries, or completely change the names of the",
        "options": ["The President of India","The Governor of the specific State","The Parliament of India","The District Council itself"],
        "correctAnswerIndex": 1,
        "explanation": "The governor is empowered to organise and re-organise the autonomous districts. Thus, he can increase or decrease their areas or change their names or define their boundaries."
    },
    {
        "id": "ch42-l1-q17",
        "question": "If an Autonomous District happens to be inhabited by several profoundly distinct scheduled tribes, how can the Governor structurally accommodate these ethnic differences within the 6th Schedule framework?",
        "options": ["He forcefully merges them all into a single unified tribe by decree.","He divides the large autonomous district into several smaller",".","He completely dissolves the District Council and imposes direct Presidential rule.","He must expel the minority tribes immediately."],
        "correctAnswerIndex": 1,
        "explanation": "If there are different tribes in an autonomous district, the governor can divide the district into several autonomous regions."
    },
    {
        "id": "ch42-l1-q18",
        "question": "Every Autonomous District is governed by its own powerful",
        "options": ["20 members","25 members","30 members","40 members"],
        "correctAnswerIndex": 2,
        "explanation": "Each autonomous district has a district council consisting of 30 members."
    },
    {
        "id": "ch42-l1-q19",
        "question": "Of the 30 members constituting a standard District Council, a vast majority (26) are directly elected. Exactly how many members are strictly nominated to the council by the Governor?",
        "options": ["2 members","4 members","6 members","10 members"],
        "correctAnswerIndex": 1,
        "explanation": "Each autonomous district has a district council consisting of 30 members, of whom four are nominated by the governor and the remaining 26 are elected on the basis of adult franchise."
    },
    {
        "id": "ch42-l1-q20",
        "question": "The elected members of the District Council (who secure their seats via adult franchise) hold their powerful offices for a fixed term of how many years?",
        "options": ["3 years","4 years","5 years","6 years"],
        "correctAnswerIndex": 2,
        "explanation": "The elected members hold office for a term of five years (unless the council is dissolved earlier)."
    },
    {
        "id": "ch42-l1-q21",
        "question": "Unlike the elected members who enjoy a secure five-year tenure, what is the term length for the four nominated members in a District Council?",
        "options": ["Also strictly 5 years.","They securely hold office for a longer term of 6 years similar to the Rajya Sabha.","They inherently hold office purely during the pleasure of the Governor.","They hold office indefinitely until they choose to resign."],
        "correctAnswerIndex": 2,
        "explanation": "The nominated members hold office during the pleasure of the governor."
    },
    {
        "id": "ch42-l1-q22",
        "question": "District Councils are granted immense legislative power to make local laws regarding land, forests, shifting cultivation, village administration, and social customs. However, these tribal laws emphatically require the formal assent of the:",
        "options": ["President of India","Governor of the State","Chief Minister","Local Superintendent of Police"],
        "correctAnswerIndex": 1,
        "explanation": "The district and regional councils administer the areas under their jurisdiction. They can make laws on certain specified matters like land, forests... But all such laws require the assent of the governor."
    },
    {
        "id": "ch42-l1-q23",
        "question": "To handle the internal disputes originating from complex tribal customs, the District Councils are judicially empowered to establish which of the following institutions?",
        "options": ["Separate High Courts exclusively for the scheduled tribes.","Village Councils or Courts for the rapid trial of suits heavily involving the tribes.","Military Tribunals wielding summary justice.","Alternative Supreme Courts situated within the district."],
        "correctAnswerIndex": 1,
        "explanation": "The district and regional councils within their territorial jurisdictions can constitute village councils or courts for trial of suits and cases between the tribes."
    },
    {
        "id": "ch42-l1-q24",
        "question": "Apart from legislative and judicial functions, what crucial socio-economic developmental role does the District Council actively play?",
        "options": ["It solely manages heavy industries like steel plants.","It establishes, constructs, and manages critical grassroots infrastructure like primary schools, local dispensaries, bustling markets, and approach roads.","It is heavily restricted exclusively to policing and maintaining public order.","It exclusively conducts foreign trade independently of the Union government."],
        "correctAnswerIndex": 1,
        "explanation": "The district council can establish, construct or manage primary schools, dispensaries, markets, ferries, fisheries, roads and so on in the district."
    },
    {
        "id": "ch42-l1-q25",
        "question": "To financially sustain their vast autonomous operations, District and Regional Councils are constitutionally empowered to directly assess and collect which specific type of crucial revenue?",
        "options": ["National GST.","Income tax from both individuals and multi-national corporations.","Land revenue, and they can unilaterally impose certain specified localized taxes.","Customs duties on all fully imported goods."],
        "correctAnswerIndex": 2,
        "explanation": "The district and regional councils are empowered to assess and collect land revenue and to impose certain specified taxes."
    },
    {
        "id": "ch42-l1-q26",
        "question": "The power to filter or block an Act of Parliament from applying to a 6th Schedule Autonomous District is split geographically. Who specifies exceptions/modifications to Parliamentary Acts for autonomous districts located strictly within ASSAM?",
        "options": ["The President logically handles all Acts of Parliament universally.","The Governor of Assam.","The Chief Minister of Assam.","The District Council Chairperson alone."],
        "correctAnswerIndex": 1,
        "explanation": "The acts of Parliament or the state legislature do not apply to autonomous districts... or apply with specified modifications. The power of direction, in this regard, lies either with the President or Governor. For Assam, it is the Governor."
    },
    {
        "id": "ch42-l1-q27",
        "question": "To prevent utter administrative collapse within an Autonomous District, the Governor can appoint an independent commission to examine its administration. Acting immediately upon this commission",
        "options": ["He can summarily execute the Chief Executive Member.","He can aggressively dissolve the District Council prematurely.","He can declare violent war unilaterally against the neighboring state.","He can unilaterally cede the entire district strictly to an adjoining country."],
        "correctAnswerIndex": 1,
        "explanation": "The governor can appoint a commission to examine and report on any matter relating to the administration of the autonomous districts... He may dissolve a district or regional council on the recommendation of the commission."
    },
    {
        "id": "ch42-l1-q28",
        "question": "What is fundamentally the primary constitutional objective behind creating the intricate, powerful architecture of the Sixth Schedule (often sparking debates of creating a",
        "options": ["To forcefully rapidly assimilate the tribes into the mainstream homogenous population.","To brutally exploit the massive natural resource wealth strictly for the benefit of the Union.","To provide a significant, highly protective degree of","to the tribes to fiercely preserve their unique, traditional social customs.","To deliberately severely weaken the immense power of the State Chief Minister."],
        "correctAnswerIndex": 2,
        "explanation": "The purpose of the 6th Schedule is to provide a degree of"
    },
    {
        "id": "ch42-l1-q29",
        "question": "Due to intense historic political agitation demanding even greater autonomy than simple district councils, which specific Article was subsequently forcefully added to uniquely form an",
        "options": ["Article 244","Article 244A","Article 371","Article 164"],
        "correctAnswerIndex": 1,
        "explanation": "Article 244A was added (by the 22nd Amendment Act 1969) to empower Parliament to form an autonomous state comprising certain tribal areas in Assam and create separate local legislature or Council of Ministers for it."
    },
    {
        "id": "ch42-l1-q30",
        "question": "While the Sixth Schedule covers exactly 4 states, the",
        "options": ["4 states","8 states","10 states","14 states"],
        "correctAnswerIndex": 2,
        "explanation": "At present (as of the latest official declarations), 10 States have Scheduled Areas: Andhra Pradesh, Telangana, Jharkhand, Chhattisgarh, Gujarat, Himachal Pradesh, Madhya Pradesh, Maharashtra, Odisha and Rajasthan."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch42-l2-q1",
        "question": "The",
        "options": ["No, the existence of a designated","is a rigid, indispensable prerequisite.","Yes, provided the President of India explicitly directs the State to establish one.","Yes, but such a TAC would only enjoy advisory powers strictly on educational matters.","Only the four North-Eastern states can possess councils without designated areas."],
        "correctAnswerIndex": 1,
        "explanation": "The Fifth Schedule states that a TAC shall be established in each State having Scheduled Areas therein and, if the President so directs, also in any State having Scheduled Tribes but not Scheduled Areas therein."
    },
    {
        "id": "ch42-l2-q2",
        "question": "Under the Sixth Schedule, an Autonomous District Council fiercely guards tribal customs. If an ADC enacts a law regarding",
        "options": ["The Central law automatically and unconditionally prevails across the entire territory.","The District Council law can prevail exclusively within its autonomous geographic area, provided that specific law has received the formal assent of the Governor/President as required.","Both conflicting laws are instantly struck down within the district.","The matter is immediately escalated exclusively to the International Court of Justice."],
        "correctAnswerIndex": 1,
        "explanation": "Acts of Parliament (like marriage laws) generally do not apply to autonomous districts, or apply with specified modifications. A validly assented ADC law regarding a specified subject (like social customs) holds primacy within its local jurisdiction to protect tribal identity."
    },
    {
        "id": "ch42-l2-q3",
        "question": "The Governor of a State containing Fifth Schedule areas wields the immense, extraordinary power to completely",
        "options": ["The Governor must secure a unanimous affirming vote from the State Legislative Assembly.","The Governor must secure the prior validating approval of the Supreme Court.","Such an overriding regulation absolutely requires the final, formal assent of the President of India to possess any legal validity.","The Governor can wield this power fiercely and unilaterally without any external checks whatsoever."],
        "correctAnswerIndex": 2,
        "explanation": "While Para 5(2) gives the Governor sweeping powers to make regulations that can repeal or amend Acts of Parliament/State Legislature, Para 5(4) rigidly dictates that"
    },
    {
        "id": "ch42-l2-q4",
        "question": "A Sixth Schedule Autonomous District Council successfully establishes vast administrative machinery. To securely fund this bureaucracy independently, does the Constitution empower the District Council to directly levy a sweeping",
        "options": ["Yes, it enjoys total sovereign taxation powers identical to the Union Government.","No, the Council can only assess and officially impose certain specifically enumerated taxes like land revenue, profession tax, and tolls.","Yes, but specifically restricting the tax only to massive multi-national corporations.","No, District Councils inherently possess absolutely zero taxation powers."],
        "correctAnswerIndex": 1,
        "explanation": "ADCs do not have blanket taxation powers like Income Tax. Paragraph 8 of the 6th Schedule restricts their powers to assessing/collecting land revenue and imposing specific taxes on professions, trades, callings, employments, animals, vehicles, tolls, and entry of goods."
    },
    {
        "id": "ch42-l2-q5",
        "question": "If an Autonomous District happens to be inhabited by deeply diverse and potentially conflicting Scheduled Tribes, what specific structural mechanism does the Constitution formally provide to the Governor to ensure localized peace?",
        "options": ["He can unilaterally expel minority tribes aggressively to adjoining districts.","He is explicitly empowered to strategically divide the sprawling district into several distinct",".","He can forcefully nominate representatives from both tribes to explicitly form a joint military tribunal.","He can swiftly dissolve the council and impose sudden martial law."],
        "correctAnswerIndex": 1,
        "explanation": "Paragraph 1(2) states:"
    },
    {
        "id": "ch42-l2-q6",
        "question": "The intricate",
        "options": ["Yes, they form a sovereign, independent judicial hierarchy insulated entirely from constitutional courts.","No, they are firmly subject to the jurisdiction of the High Court, strictly to the extent that the Governor formally specifies.","Yes, appeals only lie to the Supreme Court directly under Article 136.","Only concerning civil matters; criminal matters are instantly elevated directly to the High Court."],
        "correctAnswerIndex": 1,
        "explanation": "Under Paragraph 4(3) of the Sixth Schedule, the High Court possesses and actively exercises such jurisdiction over the suits and cases to which the provisions of sub-paragraph (2) apply, exactly as the Governor may, from time to time, by order specify."
    },
    {
        "id": "ch42-l2-q7",
        "question": "A critical distinction exists broadly within the overarching Sixth Schedule. Who holds the ultimate, defining constitutional power to definitively state whether an Act of Parliament applies, or applies with critical modifications, to an Autonomous District?",
        "options": ["The Governor universally for all 4 states.","The President functionally universally for all 4 states.","The Governor for districts explicitly within ASSAM; but the President for the districts situated strictly within Meghalaya, Tripura, and Mizoram.","The Parliament dynamically retains this exclusive power universally."],
        "correctAnswerIndex": 2,
        "explanation": "This is a key nuance. Under Para 12 (Assam), the Governor has the power of direction regarding Acts of Parliament. Under Paras 12A, 12AA, and 12B (for Meghalaya, Tripura, Mizoram), the power of direction regarding Acts of Parliament rests with the President."
    },
    {
        "id": "ch42-l2-q8",
        "question": "Constitutional scholars frequently describe the Fifth Schedule as essentially creating a",
        "options": ["Scheduled areas inherently possess entirely separate Prime Ministers.","It deliberately allows a democratically appointed executive (the Governor) to routinely bypass or rewrite the massive legislative enactments of both the Parliament and the State Assemblies for specific geographic enclaves.","It establishes parallel, completely independent sovereign national military forces strictly for tribal areas.","It officially allows separate national flags to be flown legally within tribal areas."],
        "correctAnswerIndex": 1,
        "explanation": "The Fifth Schedule grants the Governor the breathtakingly sweeping power to act essentially as a super-legislature for Scheduled Areas—allowing him to modify or reject laws passed by democratically elected state and national legislatures to shield vulnerable tribal populations."
    },
    {
        "id": "ch42-l2-q9",
        "question": "The historic",
        "options": ["To formally aggressively abolish the 5th Schedule universally.","To meticulously extend the provisions of Part IX (the 73rd Amendment addressing Panchayats) rigorously into the 5th Schedule areas, suitably equipped with critical tribal exceptions and modifications.","To formally introduce complex urban municipal bodies squarely into deeply isolated tribal regions.","To completely repeal the controversial Forest Rights Act entirely in scheduled areas."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243M exempted 5th Schedule areas from the 73rd Amendment. PESA (enacted under 243M(4)(b)) extended the Panchayat system to these areas but with powerful modifications ensuring the supremacy of traditional Gram Sabhas over elected panchayats."
    },
    {
        "id": "ch42-l2-q10",
        "question": "Under the empowering architecture of the PESA Act, the traditional grassroots",
        "options": ["Strictly advisory and routinely ignored by the District Collector.","A mandatory, binding power requiring prior consultation before any land acquisition or restoration proceedings.","Applicable robustly strictly only to isolated unreserved forest lands.","Subordinate rigidly to the whims of the state-level Chief Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Section 4 of PESA mandates that the Gram Sabha or the Panchayats at the appropriate level must be consulted before making the acquisition of land in Scheduled Areas, and endows the Gram Sabha with the power to prevent alienation of land and restore unlawfully alienated land."
    },
    {
        "id": "ch42-l2-q11",
        "question": "The Sixth Schedule explicitly constitutes a District Council functionally as a",
        "options": ["It is a completely profit-seeking private corporate entity fiercely regulated by the strict Companies Act.","It strictly operates continuously, powerfully possessing its own independent legal identity, strongly capable of legitimately initiating lawsuits or being sued in its own distinct official name.","It inherently cannot be constitutionally dissolved under absolutely any circumstances whatsoever.","It formally reports strictly to the Union Ministry of Corporate Affairs, completely ignoring the Home Ministry."],
        "correctAnswerIndex": 1,
        "explanation": "Paragraph 2 of the 6th Schedule:"
    },
    {
        "id": "ch42-l2-q12",
        "question": "Which of the following bodies is the primary source of operational funding heavily sustaining the District Councils operating within Sixth Schedule areas?",
        "options": ["The Central Government entirely functioning via direct, unsupervised financial grants.","The respective State Government (with vast funds flowing directly from the Consolidated Fund of the State).","Exclusively through their own independent localized taxation without any external support.","Relying entirely upon massive structural conditioning loans generated from the World Bank."],
        "correctAnswerIndex": 1,
        "explanation": "While they collect specific taxes, their primary funding heavily originates from the State Government"
    },
    {
        "id": "ch42-l2-q13",
        "question": "Within the deeply tribal areas of the Sixth Schedule, can a non-tribal individual residing legitimately within the boundaries of an Autonomous District legally become a sitting member of the District Council?",
        "options": ["No, the Constitution rigidly bars all non-tribals from formally serving on ADCs.","Yes, provided they are formally either properly elected through universal adult franchise or legitimately nominated by the Governor.","Only strictly if they are explicitly appointed forcefully by the Central Government.","Only concerning the rigidly reserved post of the actual Council Chairperson."],
        "correctAnswerIndex": 1,
        "explanation": "The Sixth Schedule does not rigidly prescribe 100% tribal membership. Constituencies exist where non-tribals can contest and be elected. Furthermore, the Governor frequently nominates members specifically to fiercely represent unrepresented minority communities (often non-tribals)."
    },
    {
        "id": "ch42-l2-q14",
        "question": "In the celebrated",
        "options": ["The Governor","Government-owned land situated squarely within heavily protected Scheduled Areas completely cannot be legally leased to private mining corporations.","Tribal communities possess absolutely no legal inherent rights regarding subsurface minerals.","The historic PESA Act is unconstitutional and must be immediately repealed."],
        "correctAnswerIndex": 1,
        "explanation": "The landmark Samatha judgment (1997) held that government lands in scheduled areas cannot be leased out to private companies or non-tribals for mining or industrial purposes, aiming to strictly prevent tribal exploitation."
    },
    {
        "id": "ch42-l2-q15",
        "question": "While the Election Commission of India rigorously conducts Pan-India elections, who explicitly wields the constitutional authority to make structural rules regarding the preparation of electoral rolls uniquely for the District Council elections in 6th Schedule areas?",
        "options": ["The Election Commission of India inherently extending its vast mandate.","The State Election Commission unilaterally.","The Governor of the respective State.","The Union Home Ministry directly."],
        "correctAnswerIndex": 2,
        "explanation": "Paragraph 2(6) mandates that the Governor shall make rules for the first constitution of District Councils, determining the qualifications for voting, the preparation of electoral rolls, and the return of members."
    },
    {
        "id": "ch42-l2-q16",
        "question": "Suppose Parliament comprehensively seeks to urgently amend the deeply complex provisions formally defining and governing the Fifth Schedule. What arduous legislative path must it constitutionally undertake?",
        "options": ["It can amend it via a simple majority vote just as if passing an ordinary law (Article 244).","It must formally invoke Article 368 and decisively secure a massive",".","It requires a Special Majority heavily paired with formal ratification from at least half the States.","It entirely requires a unanimous, affirmative vote universally in both Houses."],
        "correctAnswerIndex": 0,
        "explanation": "Paragraph 7(2) of the Fifth Schedule explicitly states that no such law amending the Schedule shall be deemed to be an amendment of the Constitution for the purposes of Article 368. It can absolutely be amended by a simple parliamentary majority."
    },
    {
        "id": "ch42-l2-q17",
        "question": "The heavily disputed",
        "options": ["Yes, it forms the protective core of the 6th Schedule architecture.","No, it is technically an archaic colonial-era administrative regulation (Bengal Eastern Frontier Regulation, 1873).","Yes, it was introduced decisively by the historic 42nd Amendment.","No, it absolutely exists strictly under the sweeping purview of the Armed Forces Special Powers Act."],
        "correctAnswerIndex": 1,
        "explanation": "The ILP system legally operating in states like Arunachal Pradesh, Nagaland, Mizoram, and Manipur derives its legal standing from the Bengal Eastern Frontier Regulation, 1873, completely independent of the Sixth Schedule."
    },
    {
        "id": "ch42-l2-q18",
        "question": "If extreme maladministration prompts a Governor to formally completely dissolve an Autonomous District Council, what is the hard, non-negotiable constitutional deadline severely imposed for holding fresh democratic elections?",
        "options": ["Within 6 months strictly.","Within exactly 1 year universally.","The Sixth Schedule utterly fails to explicitly mention a hard timeframe, leaving it dangerously subject entirely to the Governor","Fresh elections are inherently effectively banned for 2 years completely."],
        "correctAnswerIndex": 2,
        "explanation": "This is a severe structural loophole. While Paragraph 16 allows dissolution on the recommendation of a Commission, the Sixth Schedule strikingly does not mandate a fixed 6-month deadline for fresh elections (unlike Article 243U for Municipalities), allowing long, unaccountable bureaucratic gaps."
    },
    {
        "id": "ch42-l2-q19",
        "question": "The massive state of Andhra Pradesh structurally governs its sprawling Fifth Schedule areas successfully by actively utilizing its localized",
        "options": ["The strict, unyielding provisions of the 73rd Amendment.","The intricate regulatory dictates of the PESA Act securely implemented via heavily customized State formatting.","The inflexible principles of the 6th Schedule.","Direct Central edict entirely bypassing the AP State legislation."],
        "correctAnswerIndex": 1,
        "explanation": "In Andhra Pradesh, the traditional Panchayati structure (including Mandal Praja Parishads) operates within the scheduled areas structurally guided entirely by the specific legal extensions and necessary modifications strictly authorized by the national PESA architecture."
    },
    {
        "id": "ch42-l2-q20",
        "question": "The",
        "options": ["Yes, the Governor routinely nominates independent tribal experts, welfare workers, or leading academics.","No, the Constitution aggressively mandates that absolutely all 20 members strictly must inherently be sitting MLAs.","No, the remaining seats are immediately filled via swift direct public elections.","Yes, but specifically restricting nominations exclusively entirely to acting Supreme Court judges."],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution primarily only mandates that 3/4th must be ST MLAs. The remaining 1/4th (up to 5 members) are completely nominated by the Governor, routinely allowing the successful inclusion of vital non-MLA experts, NGOs, or other tribal leaders into the Council."
    },
    {
        "id": "ch42-l2-q21",
        "question": "Tracing its constitutional genesis, the complex protective structure now proudly known as the Sixth Schedule was originally envisioned explicitly to primarily manage which specific controversial geography?",
        "options": ["Universally all vast tribal areas spread completely deeply across India.","The severely rugged","and heavily","immense, untamed areas of undivided Assam.","The notoriously rebellious immense former Princely States situated strictly in Central India.","The completely isolated islands situated within the Bay of Bengal exclusively."],
        "correctAnswerIndex": 1,
        "explanation": "The Sixth Schedule was specifically drafted to manage the deeply unique demographic realities of the"
    },
    {
        "id": "ch42-l2-q22",
        "question": "Which intensely foundational committee dramatically championed the creation of the Sixth Schedule to aggressively ensure the vital cultural preservation of the proud North-Eastern tribes?",
        "options": ["The infamous Simon Commission strictly during 1928.","The highly visionary Bordoloi Committee fiercely operating within the Constituent Assembly.","The heavily criticized Kaka Kalelkar Commission.","The profoundly expansive Mandal Commission officially in 1980."],
        "correctAnswerIndex": 1,
        "explanation": "The Gopinath Bordoloi Sub-Committee of the Constituent Assembly produced the expansive foundational report specifically recommending strong autonomous status for the rugged tribal areas in India"
    },
    {
        "id": "ch42-l2-q23",
        "question": "Under the legal purview of the 6th Schedule, does an active District Council inherently possess the vast legislative power to fundamentally enact heavily restrictive laws specifically regarding",
        "options": ["Yes, profoundly extending absolute power to encompass literally all categorized forests universally.","Yes, but strictly encompassing only entirely","forests (significantly explicitly EXCLUDING heavily guarded State",").","No, incredibly, all complex forestry administration routinely immediately directly falls strictly to the Central Government.","No, district councils aggressively solely legislate rigidly concerning municipal garbage."],
        "correctAnswerIndex": 1,
        "explanation": "Paragraph 3 explicitly grants the power to make laws with respect to the management of any forest strictly not being a reserved forest. The state retains total control over dense, commercially vital reserved forests."
    },
    {
        "id": "ch42-l2-q24",
        "question": "Often creating severe massive administrative friction, does the notoriously unforgiving 10th Schedule (Anti-defection law) automatically rapidly legally aggressively apply to effectively disqualify floor-crossing members sitting on Autonomous District Councils?",
        "options": ["Yes, the formidable anti-defection law instantly universally applies automatically universally.","No, it utterly fails to apply entirely unless the Governor explicitly heavily specifies its absolute crucial urgent application through a severely customized local rule.","Yes, applying exclusively aggressively strictly merely to the 4 nominated Governor","No, district council members intrinsically inherently fundamentally face execution for simply crossing the floor."],
        "correctAnswerIndex": 1,
        "explanation": "The Tenth Schedule (Anti-defection) is originally meant solely for Parliament and State Legislatures. It strongly does not automatically apply to Autonomous District Councils unless explicit rules are formally made by the Governor or state laws formally extending it."
    },
    {
        "id": "ch42-l2-q25",
        "question": "The heavily studied",
        "options": ["The massive PESA Act radically overhauling local functioning precisely in 1996.","The profoundly critical heavily litigated Forest Rights Act officially in 2006.","The sweeping, highly retributive SC/ST (Prevention of Atrocities) Amendment Act universally in 2015.","The severely protective massive Wildlife Protection Act initially in 1972."],
        "correctAnswerIndex": 0,
        "explanation": "The fundamentally critical Dilip Singh Bhuria Committee definitively explicitly highly recommended the sweeping extension of the Panchayati Raj architecture massively into Scheduled Areas, leading directly rapidly to the monumental enactment of PESA in 1996."
    },
    {
        "id": "ch42-l2-q26",
        "question": "Which of the following highly distinct 6th Schedule states is uniquely constitutionally proud to officially rapidly operate the massively massive, exceptionally fiercely powerful",
        "options": ["Meghalaya effectively.","Assam unmistakably.","Tripura indisputably.","Mizoram decisively."],
        "correctAnswerIndex": 1,
        "explanation": "Following intense intense heavily violent ethnic agitation, the fiercely deeply powerful Bodoland Territorial Council was strictly specially established distinctly precisely heavily in Assam under vastly modified sweeping 6th Schedule provisions."
    },
    {
        "id": "ch42-l2-q27",
        "question": "Unlike traditional 6th Schedule Councils structurally universally boasting exactly 30 members, the uniquely specialized incredibly powerful",
        "options": ["Exactly 30 strictly entirely completely identically.","Precisely immensely significantly massively 40.","Uniquely exactly securely intensely 46 extensively heavily.","Profoundly radically surprisingly merely 20 distinctly."],
        "correctAnswerIndex": 2,
        "explanation": "Specifically, heavily uniquely modified specifically for Assam precisely under Paragraph 2 extensively heavily, the absolutely deeply unique incredibly powerful Bodoland Territorial Council structurally boasts up heavily vastly to specifically exactly essentially exclusively 46 completely absolute total members safely distinctively completely distinguishing heavily."
    },
    {
        "id": "ch42-l2-q28",
        "question": "While fiercely reviewing completely complex deeply heavily intensely proposed tribal heavily local inherently controversial distinctly localized inherently ADC inherently heavily generated deeply vital tribal localized distinctly uniquely inherently fiercely complex deeply laws, the distinctly heavily heavily Governor inherently heavily strongly generally intensely operates directly safely extensively essentially exclusively:",
        "options": ["Absolutely fundamentally strictly entirely aggressively merely independently uniquely heavily securely fundamentally essentially unilaterally exclusively entirely forcefully completely directly strictly independently.","Usually entirely profoundly distinctly securely completely broadly essentially highly generally deeply guided essentially by heavily safely significantly strictly heavily deeply deeply deeply intensely entirely securely fundamentally essentially safely entirely uniquely strictly firmly significantly the advice entirely inherently broadly essentially generated distinctly safely by strictly uniquely comprehensively deeply severely strongly primarily heavily the uniquely broadly fundamentally safely utterly perfectly perfectly significantly highly essentially intensely purely strictly entirely intensely State uniquely extensively highly strongly significantly uniquely completely entirely intensely fundamentally State uniquely exactly Cabinet perfectly perfectly severely perfectly entirely fundamentally.","Deeply surprisingly aggressively perfectly heavily safely distinctly heavily uniquely merely directly exclusively perfectly profoundly heavily exceptionally entirely strictly intensely solely deeply specifically simply solely.","Strictly broadly utterly exactly simply carefully fundamentally exactly completely absolutely utterly inherently forcefully perfectly specifically exactly."],
        "correctAnswerIndex": 1,
        "explanation": "Despite the"
    },
    {
        "id": "ch42-l2-q29",
        "question": "The heavily autonomous state of Meghalaya comprises almost exclusively of tribal regions governed extensively by the Sixth Schedule. How many massive, inherently completely fiercely strictly fiercely intensely strictly absolutely incredibly fiercely completely independent deeply fundamentally powerful intricately incredibly District broadly inherently deeply strongly councils exist strictly deeply deeply profoundly uniquely structurally essentially perfectly entirely comprehensively incredibly fiercely entirely completely exclusively within completely intensely firmly strictly completely thoroughly intensely uniquely Meghalaya?",
        "options": ["Exclusively exactly exclusively strictly highly completely fiercely broadly entirely merely directly 1.","Fundamentally merely strictly strictly uniquely strictly carefully utterly carefully correctly exclusively entirely heavily significantly incredibly precisely utterly 2.","Exactly highly broadly correctly precisely incredibly exactly precisely utterly correctly extensively uniquely profoundly carefully 3 (Khasi, Jaintia, and Garo).","Precisely specifically utterly uniquely perfectly explicitly totally totally highly perfectly highly completely extensively fiercely completely uniquely merely explicitly 4."],
        "correctAnswerIndex": 2,
        "explanation": "Meghalaya possesses three powerful ADCs covering almost the entire state: the Khasi Hills, the Jaintia Hills, and the Garo Hills Autonomous District Councils."
    },
    {
        "id": "ch42-l2-q30",
        "question": "Is it legally possible for the fiercely complex essentially structurally entirely correctly deeply entirely incredibly highly strictly highly incredibly strictly exceptionally highly vastly deeply entirely deeply profoundly explicitly strictly fundamentally fiercely deeply essentially fundamentally deeply fiercely fundamentally uniquely effectively entirely uniquely successfully Governor explicitly highly safely precisely merely strictly comprehensively carefully accurately correctly exactly securely fully perfectly strictly to completely utterly broadly accurately perfectly accurately perfectly perfectly completely completely utterly carefully entirely exclusively severely precisely explicitly strictly uniquely uniquely accurately accurately completely",
        "options": ["Generally thoroughly forcefully flawlessly elegantly strongly highly elegantly correctly directly effectively rigorously legally directly strongly smoothly elegantly successfully smoothly accurately elegantly powerfully accurately specifically precisely strictly correctly accurately smoothly perfectly directly strongly strongly precisely precisely strongly effectively specifically directly precisely legally effectively legally deeply effectively powerfully successfully exactly exclusively flawlessly explicitly powerfully smoothly forcefully flawlessly explicitly powerfully exclusively safely explicitly smoothly elegantly exclusively elegantly exclusively exclusively safely strictly exactly correctly precisely inherently safely perfectly legally perfectly directly correctly flawlessly exactly directly safely successfully safely effectively powerfully gracefully Yes, definitely specifically powerfully perfectly legally effectively efficiently.","Accurately exactly specifically directly securely directly securely exclusively exclusively exclusively explicitly definitely heavily elegantly safely specifically precisely inherently legally completely powerfully powerfully explicitly safely flawlessly purely strictly definitely definitely safely entirely successfully definitely exactly deeply uniquely uniquely Yes.","Yes, powerfully effectively explicitly effectively directly legally carefully flawlessly completely firmly absolutely flawlessly explicitly deeply carefully entirely explicitly purely smoothly exclusively successfully successfully flawlessly effectively smoothly gracefully exactly elegantly deeply safely definitely exactly safely smoothly directly exactly uniquely yes.","Yes, primarily exclusively heavily elegantly directly correctly directly directly successfully securely elegantly safely directly exactly definitely smoothly securely legitimately strictly precisely directly safely exclusively exclusively specifically purely safely elegantly forcefully explicitly legally expressly definitely absolutely completely perfectly explicitly exactly carefully definitely exactly safely yes."],
        "correctAnswerIndex": 0,
        "explanation": "The Governor has the clear constitutional power to withhold assent, return the bill, or ultimately logically disallow a law passed by the District Council if it violates constitutional provisions or state interests, typically operating on the advice of the State Cabinet."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch42-l3-q1",
        "question": "Regarding the interplay between the Constitution",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both schedules explicitly state that Parliament can amend them by ordinary legislation, not requiring Constitutional Amendment under Article 368."
    },
    {
        "id": "ch42-l3-q2",
        "question": "While the President restricts Central Acts in Meghalaya, Tripura, and Mizoram under the Sixth Schedule, who dictates the applicability of STATE laws passed by their respective Legislative Assemblies to the Autonomous Districts uniquely located within those three states?",
        "options": ["The Governor of the respective State.","The President of India.","The Chief Minister of the respective State.","The State Legislature itself."],
        "correctAnswerIndex": 1,
        "explanation": "In Meghalaya, Tripura, and Mizoram, the power to restrict/modify Acts of both Parliament and the State Legislature concerning Autonomous Districts rests exclusively with the President."
    },
    {
        "id": "ch42-l3-q3",
        "question": "Unlike Meghalaya, Tripura, and Mizoram, who holds the authority to restrict or modify the application of Assam State Legislature Acts to the Autonomous Districts within Assam?",
        "options": ["The President of India.","The Governor of Assam.","The Chief Minister of Assam.","The District Council independently."],
        "correctAnswerIndex": 1,
        "explanation": "Under Paragraph 12 of the Sixth Schedule, the Governor of Assam has the exclusive power to direct that any act of the State/Parliament shall not apply to an autonomous district within Assam."
    },
    {
        "id": "ch42-l3-q4",
        "question": "The 125th Constitution Amendment Bill (2019) was introduced to overhaul which specific aspect of the Sixth Schedule?",
        "options": ["Forestry management transfer.","Financial empowerment of ADCs involving the State Finance Commissions and village municipal councils.","Abolition of non-tribal representation.","Merging 5th and 6th Schedules."],
        "correctAnswerIndex": 1,
        "explanation": "The 125th Amendment Bill aimed to increase the financial and executive powers of the 10 Autonomous Councils, crucially involving the Finance Commission to mandate funding."
    },
    {
        "id": "ch42-l3-q5",
        "question": "While a Governor oversees Scheduled Areas, the power to completely",
        "options": ["The State Assembly.","The President of India.","The Zonal Council.","The State High Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Fifth Schedule explicitly states that the President can by order direct that the whole or any specified part of a Scheduled Area shall cease to be a Scheduled Area."
    },
    {
        "id": "ch42-l3-q6",
        "question": "Under the landmark Samatha judgement (1997), what legal restriction did the Supreme Court place upon State Governments in Fifth Schedule areas?",
        "options": ["Cannot levy mining taxes natively.","The","is a","entity for land transfers; government land cannot be leased to private mining industries.","Must hand over all extracted minerals to the Gram Sabha.","Cannot build highways without UN approval."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court held that the term"
    },
    {
        "id": "ch42-l3-q7",
        "question": "Can the Union Government legally issue",
        "options": ["No, the State retains exclusive autonomy.","Yes, the executive power of the Union extends to giving directions as to the administration of the said areas.","Only during a National Emergency.","Only for international border regions."],
        "correctAnswerIndex": 1,
        "explanation": "Paragraph 3 of the Fifth Schedule explicitly states that the executive power of the Union extends to the giving of directions to the State as to the administration of Scheduled Areas."
    },
    {
        "id": "ch42-l3-q8",
        "question": "The PESA Act (1996) bestows immense power onto the Gram Sabha. Specifically regarding minor water bodies in Scheduled Areas, it grants:",
        "options": ["Advisory power to Gram Sabha.","Absolute Ownership to Gram Sabha.","Planning and management entrusted to Panchayats at the appropriate level.","Joint management with the Union Ministry."],
        "correctAnswerIndex": 2,
        "explanation": "Section 4(j) of PESA states that the planning and management of minor water bodies in Scheduled Areas shall be entrusted to Panchayats at the appropriate level (not exclusively the Gram Sabha)."
    },
    {
        "id": "ch42-l3-q9",
        "question": "Does the 73rd Amendment (Part IX) completely bypass Sixth Schedule areas just as it bypasses Fifth Schedule areas?",
        "options": ["No, it applies uniformly."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243M(1) clearly exempts both the Scheduled Areas (Fifth Schedule) and the tribal areas referred to in the Sixth Schedule from Part IX."
    },
    {
        "id": "ch42-l3-q10",
        "question": "While PESA (1996) gracefully extended Panchayats to Fifth Schedule areas, did Parliament pass an identical law extending Part IX specifically to Sixth Schedule areas?",
        "options": ["Yes, the 1999 Extension Act.","No, Parliament has never enacted a PESA equivalent natively for the Sixth Schedule.","Yes, the Tribal Local Govt Act 2005.","Yes, via the 125th Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike PESA for 5th Schedule areas, no central macro-legislation has explicitly extended the 73rd Amendment into 6th Schedule areas, as they already possess Autonomous District Councils."
    },
    {
        "id": "ch42-l3-q11",
        "question": "Regarding",
        "options": ["State Chief Minister.","Gram Sabha OR the Panchayats at the appropriate level.","Union Minister of Mines.","The Governor unconditionally."],
        "correctAnswerIndex": 1,
        "explanation": "Section 4(k) of PESA mandates the recommendation of the Gram Sabha or the Panchayats prior to granting prospecting licenses or mining leases for minor minerals."
    },
    {
        "id": "ch42-l3-q12",
        "question": "The historic",
        "options": ["Repealed by Article 395.","Absorbed into the Sixth Schedule.","Continues as an","under Article 372.","Struck down by the Supreme Court in 1965."],
        "correctAnswerIndex": 2,
        "explanation": "BEFR 1873 continues in operation as valid"
    },
    {
        "id": "ch42-l3-q13",
        "question": "The overarching structure of the",
        "options": ["10 subjects.","15 subjects.","39 subjects.","45 subjects."],
        "correctAnswerIndex": 2,
        "explanation": "Through Sixth Schedule amendments accommodating the Bodoland Accord, the unique BTC enjoys sweeping legislative power over precisely 39 subjects."
    },
    {
        "id": "ch42-l3-q14",
        "question": "Who possesses the constitutional mandate under Article 339 to appoint a Commission to report on the administration of Scheduled Areas across the nation?",
        "options": ["The CAG.","The President of India.","The NCST directly.","The Parliament via joint session."],
        "correctAnswerIndex": 1,
        "explanation": "Article 339 empowers the President to appoint a Commission (e.g., Dhebar Commission, Bhuria Commission) to report on the administration of Scheduled Areas and the welfare of Scheduled Tribes."
    },
    {
        "id": "ch42-l3-q15",
        "question": "Regarding Inner Line Permits (ILP) following the Citizenship (Amendment) Act (CAA), 2019:",
        "options": ["CAA applies uniformly across all 6th Schedule areas.","CAA EXEMPTS the tribal areas of Assam, Meghalaya, Mizoram, Tripura AND the","areas.","CAA exempts solely ILP areas.","CAA allows the President exclusively to decide applicability."],
        "correctAnswerIndex": 1,
        "explanation": "Section 6B(4) of the amended Citizenship Act states it shall not apply to Sixth Schedule tribal areas and the areas covered under"
    },
    {
        "id": "ch42-l3-q16",
        "question": "Regarding voting rights in Sixth Schedule districts, can a non-tribal citizen residing permanently within an Autonomous District legally vote in District Council elections?",
        "options": ["No, only certified tribals.","Yes, if they fulfill the standard voter qualifications established by the Governor","Only if approved by the Central Government.","Yes, but they cannot contest."],
        "correctAnswerIndex": 1,
        "explanation": "The Sixth Schedule (Para 2) allows the Governor to make rules regarding voter qualifications. Permanent non-tribal residents meeting the criteria can typically vote, depending on specific local rules."
    },
    {
        "id": "ch42-l3-q17",
        "question": "If a Sixth Schedule District Council passes a bill on land inheritance, can the Governor reserve it for the President",
        "options": ["No, the Sixth Schedule empowers ONLY the Governor to give/withhold assent; there is no provision to reserve ADC bills for the President.","Yes, like State Bills under Article 200, it can be reserved.","Yes, if it conflicts with a Central law.","Yes, if the Council explicitly passes a resolution."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike Article 200 concerning State Legislature bills, Paragraph 3(3) of the Sixth Schedule strictly names the Governor for giving assent, with no mechanism for reserving ADC bills for the President."
    },
    {
        "id": "ch42-l3-q18",
        "question": "In a Sixth Schedule autonomous district, if the State Government grants a license for extracting a precious mineral, who inherently receives the royalties?",
        "options": ["State Government keeps 100%.","Central Government directly appropriates.","The District Council and the State Government share the royalties in an agreed ratio; if they disagree, the Governor settles the ratio.","Entire royalty belongs solely to the District Council."],
        "correctAnswerIndex": 2,
        "explanation": "Paragraph 9 states the share of royalties from licenses/leases shall be agreed upon between the State and the District Council. Disagreements are settled decisively by the Governor."
    },
    {
        "id": "ch42-l3-q19",
        "question": "Which closely describes the fundamental distinction between",
        "options": ["Scheduled Areas involve normal state administration with special protective modifications by the Governor; Tribal Areas feature highly autonomous self-governing District Councils acting as a sub-state level.","Scheduled Areas are governed by the Home Ministry, whereas Tribal Areas are governed by PMO.","Scheduled Areas exist only in North-Eastern states.","Scheduled Areas have zero elected representation."],
        "correctAnswerIndex": 0,
        "explanation": "Fifth Schedule areas are governed by the State executive, protected by the Governor modifying laws. Sixth Schedule areas operate under independent Autonomous District Councils wielding vast local legislative, judicial, and executive authority."
    },
    {
        "id": "ch42-l3-q20",
        "question": "For a Sixth Schedule District Council to be dissolved due to maladministration, the Governor generally must:",
        "options": ["Act solely on the binding advice of the Chief Minister without inquiry.","First appoint an independent Commission to examine the administration, and act upon its formal report.","Secure permission from the Union Home Minister directly.","Hold a popular referendum in the district."],
        "correctAnswerIndex": 1,
        "explanation": "Paragraph 16 explicitly states that the Governor may dissolve an autonomous district council primarily on the recommendation of a Commission appointed to examine its administration."
    },
    {
        "id": "ch42-l3-q21",
        "question": "Following the dissolution of a District Council under the Sixth Schedule, what is the constitutional deadline clearly specified for conducting fresh democratic elections?",
        "options": ["6 months exactly.","1 year exactly.","The Sixth Schedule lacks a specific constitutionally mandated timeframe, leaving it reliant on the Governor","2 years maximum."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike Municipalities/Panchayats which have a strict 6-month deadline (Article 243U/243E), the Sixth Schedule text does not mandate a hard 6-month deadline for fresh elections after a dissolution."
    },
    {
        "id": "ch42-l3-q22",
        "question": "When creating rules for the first District Council elections (electoral rolls, qualifications), who possesses the exclusive constitutional mandate?",
        "options": ["Election Commission of India.","State Election Commission.","The Governor of the State.","Union Home Ministry."],
        "correctAnswerIndex": 2,
        "explanation": "Paragraph 2(6) mandates that the Governor shall make rules for the first constitution of District/Regional Councils, including qualifications for voting and electoral roll preparation."
    },
    {
        "id": "ch42-l3-q23",
        "question": "Does the intensely controversial Tenth Schedule (Anti-Defection Law) automatically apply to members of Autonomous District Councils?",
        "options": ["Yes, automatically.","No, it does not automatically apply unless explicitly extended by relevant State legislation or specific, tailored Governor","Yes, but only for the 4 nominated members.","No, ADCs are entirely immune permanently."],
        "correctAnswerIndex": 1,
        "explanation": "The Tenth Schedule (Anti-defection) is framed for Parliament and State Legislatures. It does not automatically apply to ADCs unless explicit rules are properly made by the State/Governor extending such provisions."
    },
    {
        "id": "ch42-l3-q24",
        "question": "Which specific historic committee famously championed the creation of the Sixth Schedule to preserve the autonomy of North-Eastern tribal communities?",
        "options": ["Simon Commission.","Gopinath Bordoloi Sub-Committee.","Kaka Kalelkar Commission.","Mandal Commission."],
        "correctAnswerIndex": 1,
        "explanation": "The Gopinath Bordoloi Sub-Committee of the Constituent Assembly produced the report recommending strong autonomous status for the rugged tribal areas in India"
    },
    {
        "id": "ch42-l3-q25",
        "question": "Under the 6th Schedule, does an active District Council inherently possess the vast legislative power to enact laws regarding",
        "options": ["Yes, absolute power.","No, they can only make laws for the management of",".","Yes, but subject to UN approval.","Only for bamboo extraction."],
        "correctAnswerIndex": 1,
        "explanation": "Paragraph 3 explicitly grants the power to make laws with respect to the management of any forest strictly not being a reserved forest. The state retains total control over reserved forests."
    },
    {
        "id": "ch42-l3-q26",
        "question": "The historic PESA Act (1996) was fundamentally driven by the comprehensive recommendations of which vital committee?",
        "options": ["Bhuria Committee.","Kelkar Committee.","Sarkaria Commission.","Verma Committee."],
        "correctAnswerIndex": 0,
        "explanation": "The Dilip Singh Bhuria Committee definitively recommended the sweeping extension of the Panchayati Raj architecture massively into Scheduled Areas, leading directly to the enactment of PESA in 1996."
    },
    {
        "id": "ch42-l3-q27",
        "question": "Unlike traditional 6th Schedule Councils globally capped at 30 members, the uniquely powerful",
        "options": ["30","40","46","100"],
        "correctAnswerIndex": 2,
        "explanation": "Through specialized Sixth Schedule amendments accommodating the Bodoland Accord under Paragraph 2, the unique BTC legally boasts up to 46 total members."
    },
    {
        "id": "ch42-l3-q28",
        "question": "In the context of the highly protective 6th Schedule ADCs, what constitutes the legal entity of a",
        "options": ["It functions as a private, profit-driven enterprise.","It possesses perpetual succession, a common seal, and the legal capacity to sue and be sued in its own distinct official name.","It cannot be dissolved.","It reports directly to the Ministry of Corporate Affairs."],
        "correctAnswerIndex": 1,
        "explanation": "Paragraph 2 of the 6th Schedule explicitly states that the District Council for an autonomous district shall be a body corporate with perpetual succession and a common seal, capable of suing and being sued."
    },
    {
        "id": "ch42-l3-q29",
        "question": "Can the Governor of a State legally disallow a law validly passed by an Autonomous District Council?",
        "options": ["No, ADC laws cannot be challenged by the State.","Yes, the laws must be submitted to the Governor for assent, and the Governor practically acting on the aid and advice of the State Cabinet, can withhold assent or return/disallow the bill.","Only the President can veto it.","Only upon Supreme Court direction."],
        "correctAnswerIndex": 1,
        "explanation": "Under Para 3, laws made by District/Regional Councils require the formal assent of the Governor. The Governor generally exercises this power based on State Cabinet advice, granting the State meaningful oversight."
    },
    {
        "id": "ch42-l3-q30",
        "question": "How many massive, independent Autonomous District Councils operate strictly within the inherently tribal State of Meghalaya under the Sixth Schedule framework?",
        "options": ["1","2","3 (Khasi, Jaintia, Garo).","4"],
        "correctAnswerIndex": 2,
        "explanation": "Meghalaya possesses exactly three powerful ADCs covering almost the entire state territory: the Khasi Hills Autonomous District Council, the Jaintia Hills ADC, and the Garo Hills ADC."
    }
];

export const CHAPTER_42_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
