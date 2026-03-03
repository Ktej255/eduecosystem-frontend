import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch71-l1-q1",
        "question": "The Delimitation Commission is constituted under:",
        "options": ["The Constitution directly", "The Delimitation Commission Act passed by Parliament", "A Supreme Court order", "An executive resolution"],
        "correctAnswerIndex": 1,
        "explanation": "The Delimitation Commission is a statutory body constituted under the Delimitation Commission Act enacted by Parliament (Acts of 1952, 1962, 1972, and 2002)."
    },
    {
        "id": "ch71-l1-q2",
        "question": "The primary function of the Delimitation Commission is to:",
        "options": ["Conduct elections", "Fix the boundaries of territorial constituencies for Lok Sabha and State Legislative Assemblies based on census data", "Appoint election officials", "Count votes"],
        "correctAnswerIndex": 1,
        "explanation": "The Delimitation Commission draws up the boundaries of Lok Sabha and State Assembly constituencies so that each constituency has roughly equal population."
    },
    {
        "id": "ch71-l1-q3",
        "question": "Delimitation is based on:",
        "options": ["Area of the constituency", "The latest census figures to ensure equal population representation", "Revenue collection", "Number of voters in previous elections"],
        "correctAnswerIndex": 1,
        "explanation": "Delimitation is based on the most recent census data to ensure the principle of 'one person, one vote, one value' — roughly equal population per constituency."
    },
    {
        "id": "ch71-l1-q4",
        "question": "The Delimitation Commission is headed by:",
        "options": ["The Chief Election Commissioner", "A retired Supreme Court Judge as Chairperson", "The Law Minister", "The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Delimitation Commission is headed by a retired Supreme Court Judge appointed by the Central Government."
    },
    {
        "id": "ch71-l1-q5",
        "question": "The members of the Delimitation Commission include:",
        "options": ["Only judges", "The Chief Election Commissioner or a nominee and the State Election Commissioners of concerned states as ex-officio members", "Only politicians", "Only bureaucrats"],
        "correctAnswerIndex": 1,
        "explanation": "Apart from the Chairman, the CEC (or nominee) and concerned State Election Commissioners serve as ex-officio members."
    },
    {
        "id": "ch71-l1-q6",
        "question": "The orders of the Delimitation Commission are:",
        "options": ["Advisory only", "Final and cannot be questioned in any court of law", "Subject to Parliamentary approval", "Can be appealed in the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 329, delimitation orders have the force of law and cannot be challenged in any court, ensuring electoral stability."
    },
    {
        "id": "ch71-l1-q7",
        "question": "Article 82 of the Constitution deals with:",
        "options": ["State Legislature composition", "Readjustment of Lok Sabha constituencies after each census", "President's powers", "Fundamental Rights"],
        "correctAnswerIndex": 1,
        "explanation": "Article 82 provides for readjustment of seats in the Lok Sabha and allocation of seats to states after each census."
    },
    {
        "id": "ch71-l1-q8",
        "question": "Article 170 of the Constitution deals with:",
        "options": ["Lok Sabha delimitation", "Composition and readjustment of State Legislative Assembly constituencies", "Governor's powers", "Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 170 deals with the composition of State Legislative Assemblies and readjustment of constituencies."
    },
    {
        "id": "ch71-l1-q9",
        "question": "Article 329 of the Constitution provides that:",
        "options": ["Delimitation can be challenged in court", "The validity of delimitation and electoral matters cannot be questioned in courts, except through election petitions", "The Supreme Court conducts delimitation", "Parliament decides constituency boundaries"],
        "correctAnswerIndex": 1,
        "explanation": "Article 329 bars courts from interfering in electoral matters including delimitation, ensuring finality of the Commission's orders."
    },
    {
        "id": "ch71-l1-q10",
        "question": "How many Delimitation Commissions have been constituted in India?",
        "options": ["Two", "Four — in 1952, 1963, 1973, and 2002", "Six", "One"],
        "correctAnswerIndex": 1,
        "explanation": "Four Delimitation Commissions have been set up — under Acts of 1952, 1962, 1972, and 2002."
    },
    {
        "id": "ch71-l1-q11",
        "question": "The first Delimitation Commission (1952) was constituted after:",
        "options": ["The 1971 census", "The 1951 census", "Independence in 1947 without any census", "The 1961 census"],
        "correctAnswerIndex": 1,
        "explanation": "The first Delimitation Commission was constituted after the 1951 census to draw constituency boundaries for general elections."
    },
    {
        "id": "ch71-l1-q12",
        "question": "The 42nd Constitutional Amendment (1976) froze the allocation of Lok Sabha seats based on the:",
        "options": ["1951 census", "1971 census, until after the 2001 census", "1981 census", "1991 census"],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment froze seat allocation based on the 1971 census to not penalize states that effectively controlled population growth."
    },
    {
        "id": "ch71-l1-q13",
        "question": "The 84th Constitutional Amendment (2002) extended the freeze on Lok Sabha seat allocation until:",
        "options": ["2011", "The first census after 2026", "2031", "2051"],
        "correctAnswerIndex": 1,
        "explanation": "The 84th Amendment extended the freeze until the first census after 2026, meaning seats won't be reallocated based on population changes until after that date."
    },
    {
        "id": "ch71-l1-q14",
        "question": "The 87th Constitutional Amendment (2003) provided that delimitation of constituencies shall be based on:",
        "options": ["The 1971 census", "The 2001 census for readjustment of boundaries (not seats)", "The 1991 census", "The 2011 census"],
        "correctAnswerIndex": 1,
        "explanation": "The 87th Amendment allowed readjustment of constituency boundaries based on the 2001 census while keeping the total number of seats frozen."
    },
    {
        "id": "ch71-l1-q15",
        "question": "The Delimitation Commission of 2002 completed its work in:",
        "options": ["2004", "2008", "2010", "2002 itself"],
        "correctAnswerIndex": 1,
        "explanation": "The last Delimitation Commission (constituted in 2002 under Justice Kuldeep Singh) completed its work in 2008."
    },
    {
        "id": "ch71-l1-q16",
        "question": "The concept of 'reserved constituencies' for SC and ST is part of:",
        "options": ["Only state law", "The delimitation process — the Delimitation Commission determines which constituencies shall be reserved for SCs and STs", "Only the Election Commission's decision", "Only party-level decisions"],
        "correctAnswerIndex": 1,
        "explanation": "The Delimitation Commission determines the reservation of constituencies for SCs and STs based on their population concentration."
    },
    {
        "id": "ch71-l1-q17",
        "question": "The principle underlying delimitation is:",
        "options": ["Equal area per constituency", "Equal population per constituency — 'one person, one vote, one value'", "Equal revenue per constituency", "Equal number of villages per constituency"],
        "correctAnswerIndex": 1,
        "explanation": "The fundamental principle is equal population per constituency to ensure each vote has approximately equal value, reflecting democratic equality."
    },
    {
        "id": "ch71-l1-q18",
        "question": "Associate members from the state are involved in the delimitation process. They are:",
        "options": ["Appointed by the Governor", "Members of Lok Sabha and State Assembly from the concerned state, nominated by the Speaker", "Appointed by the President", "Elected by voters"],
        "correctAnswerIndex": 1,
        "explanation": "Associate members (10 from Lok Sabha and 5 from the State Assembly) are nominated by the Speaker to assist the Commission with local knowledge."
    },
    {
        "id": "ch71-l1-q19",
        "question": "The Delimitation Commission publishes its proposals in:",
        "options": ["Only in Parliament", "The Gazette of India and relevant State Gazettes for public feedback before finalizing", "Only newspapers", "Only on the Election Commission website"],
        "correctAnswerIndex": 1,
        "explanation": "Draft proposals are published in official gazettes, and objections/suggestions are invited from the public before the Commission finalizes its orders."
    },
    {
        "id": "ch71-l1-q20",
        "question": "Delimitation in Jammu & Kashmir was done by:",
        "options": ["Always by the central Delimitation Commission", "The J&K Constitution had its own provisions; after abrogation of Article 370, the central Delimitation Commission Act 2002 was extended to J&K", "The Governor alone", "The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Before 2019, J&K had separate delimitation provisions. After Article 370's abrogation, the central Delimitation Commission Act was extended to J&K."
    },
    {
        "id": "ch71-l1-q21",
        "question": "The latest delimitation exercise for Jammu & Kashmir was completed in:",
        "options": ["2019", "2022, resulting in 90 Assembly seats (from 87) with 43 for Jammu and 47 for Kashmir", "2020", "2023"],
        "correctAnswerIndex": 1,
        "explanation": "The J&K Delimitation Commission (under Justice Ranjana Prakash Desai) completed its work in 2022, increasing seats from 87 to 90."
    },
    {
        "id": "ch71-l1-q22",
        "question": "The J&K Delimitation Commission (2020-2022) was headed by:",
        "options": ["Justice Kuldeep Singh", "Justice (Retd.) Ranjana Prakash Desai", "Justice B.S. Chauhan", "Chief Election Commissioner"],
        "correctAnswerIndex": 1,
        "explanation": "Justice Ranjana Prakash Desai, former Supreme Court Judge, headed the J&K Delimitation Commission."
    },
    {
        "id": "ch71-l1-q23",
        "question": "The total number of Lok Sabha constituencies in India is:",
        "options": ["543 (530 from States + 13 from UTs)", "545", "550", "552"],
        "correctAnswerIndex": 0,
        "explanation": "India has 543 Lok Sabha constituencies — 530 from States and 13 from Union Territories — as determined by delimitation."
    },
    {
        "id": "ch71-l1-q24",
        "question": "Which states were excluded from the 2002 Delimitation Commission's exercise?",
        "options": ["No states were excluded", "Assam, Arunachal Pradesh, Manipur, Nagaland, and Jharkhand (initially) were excluded due to specific reasons", "Only Jammu & Kashmir", "All northeastern states"],
        "correctAnswerIndex": 1,
        "explanation": "Some states were initially excluded due to law and order issues or lack of census data — Assam, Arunachal Pradesh, Manipur, and Nagaland were excluded."
    },
    {
        "id": "ch71-l1-q25",
        "question": "The rotation of reserved constituencies (SC/ST) after each delimitation is intended to:",
        "options": ["Keep constituencies permanently reserved", "Ensure that the burden of reservation is shared across different areas and prevent permanent concentration of reserved seats", "Remove all reservations", "Increase the number of reserved seats"],
        "correctAnswerIndex": 1,
        "explanation": "Rotation ensures that reserved constituencies change with each delimitation, distributing the reservation burden and preventing any area from being permanently reserved."
    },
    {
        "id": "ch71-l1-q26",
        "question": "The geographical extent of constituencies is determined by:",
        "options": ["Only population", "Population as the primary factor, but geographical compactness, physical features, administrative boundaries, and communication facilities are also considered", "Only area", "Only administrative convenience"],
        "correctAnswerIndex": 1,
        "explanation": "While population is primary, the Commission also considers geographical compactness, natural boundaries, administrative units, and connectivity."
    },
    {
        "id": "ch71-l1-q27",
        "question": "The term 'delimitation' literally means:",
        "options": ["Counting of votes", "The act of fixing or determining limits or boundaries of territorial constituencies", "Registration of voters", "Distribution of ballot papers"],
        "correctAnswerIndex": 1,
        "explanation": "Delimitation literally means fixing boundaries — in the electoral context, it refers to determining the geographical extent of constituencies."
    },
    {
        "id": "ch71-l1-q28",
        "question": "The Election Commission's role in delimitation includes:",
        "options": ["The EC conducts delimitation independently", "The Chief Election Commissioner serves as an ex-officio member of the Delimitation Commission", "The EC has no role in delimitation", "The EC only supervises voting"],
        "correctAnswerIndex": 1,
        "explanation": "The CEC (or nominee) is an ex-officio member, providing electoral expertise to the delimitation process."
    },
    {
        "id": "ch71-l1-q29",
        "question": "After the Delimitation Commission's orders are finalized, they are laid before:",
        "options": ["Only the Supreme Court", "The Lok Sabha and the State Legislative Assemblies concerned — they cannot be modified but are laid for information", "Only the President", "Only the Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Final orders are laid before Parliament and State Assemblies for information, but cannot be modified by them — reflecting the Commission's independent authority."
    },
    {
        "id": "ch71-l1-q30",
        "question": "The next major delimitation exercise is expected after:",
        "options": ["The 2021 census", "The first census after 2026, as per the 84th and 87th Constitutional Amendments", "2030", "No further delimitation is planned"],
        "correctAnswerIndex": 1,
        "explanation": "The freeze on seat allocation expires after 2026, and the next delimitation is expected after the first census conducted after that date."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch71-l2-q1",
        "question": "Consider the following about the Delimitation Commission:\\n1. It is a constitutional body.\\n2. It is a statutory body.\\n3. Its orders are final and non-justiciable.\\n4. It is chaired by the CEC.\\nWhich are correct?",
        "options": ["1 and 4 only", "2 and 3 only", "1, 2, 3 and 4", "All four"],
        "correctAnswerIndex": 1,
        "explanation": "The Delimitation Commission is statutory (created by Act of Parliament) and its orders are non-justiciable. It is NOT constitutional and NOT chaired by the CEC (chaired by a retired SC Judge)."
    },
    {
        "id": "ch71-l2-q2",
        "question": "Assertion (A): The 42nd Amendment froze Lok Sabha seat allocation based on the 1971 census.\\nReason (R): Southern states that successfully controlled population growth feared losing representation if seats were reallocated based on later censuses.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The freeze was explicitly to prevent penalizing states that achieved population control — protecting southern states from losing seats to faster-growing northern states."
    },
    {
        "id": "ch71-l2-q3",
        "question": "Match the following Constitutional Amendments:\\nA. 42nd Amendment (1976) → Froze Lok Sabha seats on 1971 census\\nB. 84th Amendment (2002) → Extended freeze until after 2026\\nC. 87th Amendment (2003) → Allowed boundary readjustment on 2001 census\\nD. Article 329 → Non-justiciability of delimitation\\nWhich are correctly matched?",
        "options": ["Only A and B", "All four are correctly matched", "Only C and D", "Only A"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correctly matched — 42nd (freeze), 84th (extension), 87th (boundary readjustment), and Article 329 (non-justiciability)."
    },
    {
        "id": "ch71-l2-q4",
        "question": "Statement I: The 2026 delimitation exercise is expected to be politically contentious.\\nStatement II: Northern states with higher population growth (UP, Bihar, MP, Rajasthan) may gain seats at the expense of southern states (Kerala, Tamil Nadu, Karnataka, Andhra Pradesh) that controlled population.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The post-2026 delimitation creates a North-South tension — rapidly-growing states gaining seats vs. well-governed states losing representation."
    },
    {
        "id": "ch71-l2-q5",
        "question": "Assertion (A): The J&K delimitation (2022) was controversial.\\nReason (R): Critics argued that the increased seats to Jammu (from 37 to 43) while giving Kashmir 47 (from 46) disproportionately favored one region.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The J&K delimitation was criticized for perceived regional imbalance, with Jammu gaining more seats proportionately than Kashmir."
    },
    {
        "id": "ch71-l2-q6",
        "question": "The factors considered by the Delimitation Commission include:\\n1. Population of the constituency\\n2. Geographical compactness\\n3. Physical features and natural boundaries\\n4. Existing administrative boundaries\\n5. Communication facilities\\nWhich are considered?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1 and 2 only", "3, 4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five factors are considered — population parity is primary, but geographical, physical, administrative, and communication considerations are also important."
    },
    {
        "id": "ch71-l2-q7",
        "question": "Statement I: The non-justiciability of delimitation orders under Article 329 is an important constitutional safeguard.\\nStatement II: If delimitation orders could be challenged in courts, elections could be delayed indefinitely, undermining the democratic process.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Non-justiciability ensures electoral stability — allowing court challenges would create uncertainty and potentially delay elections."
    },
    {
        "id": "ch71-l2-q8",
        "question": "Assertion (A): Delimitation directly affects the political power balance between states.\\nReason (R): The number of Lok Sabha seats determines a state's influence in central governance, budget allocation debates, and federal negotiations.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Lok Sabha seats directly translate to political influence — making delimitation a high-stakes exercise in federalism."
    },
    {
        "id": "ch71-l2-q9",
        "question": "The reservation of constituencies for SCs is based on:\\n1. SC population concentration\\n2. Total population of the constituency\\n3. Proportion of SC population in the constituency\\n4. Rotation with each delimitation\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 3 only", "2 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "SC constituency reservation considers population concentration, total population, proportion, and rotates with each delimitation exercise."
    },
    {
        "id": "ch71-l2-q10",
        "question": "Statement I: The 2002 Delimitation Commission excluded northeastern states from its exercise.\\nStatement II: States like Assam, Manipur, and Nagaland were excluded due to security concerns, ethnic tensions, and incomplete census operations.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Northeastern states faced security and census challenges that prevented the 2002 Commission from conducting delimitation there."
    },
    {
        "id": "ch71-l2-q11",
        "question": "Assertion (A): The coming delimitation post-2026 may require a constitutional amendment.\\nReason (R): To address the North-South imbalance, options like increasing total Lok Sabha seats, weighted representation, or extending the freeze require constitutional changes.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Any resolution to the North-South seat allocation tension will likely require constitutional amendment to balance democratic representation with federal equity."
    },
    {
        "id": "ch71-l2-q12",
        "question": "The Delimitation Commission differs from the Election Commission in that:\\n1. DC draws boundaries; EC conducts elections\\n2. DC is temporary/ad hoc; EC is permanent\\n3. DC is statutory; EC is constitutional\\n4. DC's orders are non-justiciable; EC's decisions can be challenged\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four differences are correct — boundaries vs elections, temporary vs permanent, statutory vs constitutional, non-justiciable vs justiciable."
    },
    {
        "id": "ch71-l2-q13",
        "question": "Statement I: The principle of 'one person, one vote, one value' is central to delimitation.\\nStatement II: However, in practice, significant population disparities exist between constituencies due to population changes between delimitation exercises.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. While the principle aims for equality, inter-censal population changes create significant disparities between delimitation exercises."
    },
    {
        "id": "ch71-l2-q14",
        "question": "The process of delimitation includes:\\n1. Study of census data\\n2. Draft proposals and publication\\n3. Public hearings and objections\\n4. Consultation with associate members\\n5. Final orders published in Gazette\\nWhich are part of the process?",
        "options": ["1 and 5 only", "1, 2, 3, 4 and 5", "2 and 3 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "The delimitation process is comprehensive — census analysis, draft publication, public hearings, associate member consultation, and gazette notification."
    },
    {
        "id": "ch71-l2-q15",
        "question": "Assertion (A): The four British-era Law Commissions contributed to legal codification in India.\\nReason (R): Similarly, the four post-independence Delimitation Commissions have shaped India's electoral geography.\\nWhat is the relationship between these two institutional evolutions?",
        "options": ["No relationship", "Both represent periodic expert bodies constituted for specific purposes — legal reform and electoral geography respectively", "They are the same institution", "One replaced the other"],
        "correctAnswerIndex": 1,
        "explanation": "Both the Law Commission and Delimitation Commission are periodic expert bodies — the former for law reform, the latter for electoral boundary determination."
    },
    {
        "id": "ch71-l2-q16",
        "question": "Statement I: The total number of Lok Sabha seats for a state affects its representation in the Electoral College for Presidential election.\\nStatement II: Since the value of each MLA's vote in the Presidential election depends on the state's population divided by the number of elected Assembly members, delimitation indirectly affects Presidential election outcomes.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Delimitation affects both Lok Sabha representation and the value of votes in Presidential elections through the population-seat formula."
    },
    {
        "id": "ch71-l2-q17",
        "question": "The criticism of gerrymandering in the Indian context includes:\\n1. Allegations of drawing boundaries to favor ruling parties\\n2. Manipulation of reserved constituency selection\\n3. Arbitrary splitting of administrative units\\n4. Ignoring community interests\\nWhich criticisms have been raised?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four gerrymandering-related criticisms have been raised in various delimitation exercises — boundary manipulation, reserved seat selection, unit splitting, and community disregard."
    },
    {
        "id": "ch71-l2-q18",
        "question": "Assertion (A): The use of modern technology (GIS, digital mapping) has improved the delimitation process.\\nReason (R): Geographic Information Systems allow more accurate population mapping, boundary drawing, and analysis of geographical factors.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Modern technology enables more precise and transparent delimitation, reducing subjectivity in boundary determination."
    },
    {
        "id": "ch71-l2-q19",
        "question": "Statement I: The number of SC/ST reserved constituencies is proportional to their population share.\\nStatement II: The Delimitation Commission determines reservation based on census data showing SC/ST population concentration in each area.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Reservation is proportional to SC/ST population and the specific constituencies reserved are determined by population concentration data."
    },
    {
        "id": "ch71-l2-q20",
        "question": "The implications of the post-2026 delimitation for fiscal federalism include:\\n1. More Lok Sabha seats may mean more political leverage for resource allocation\\n2. States with more seats may attract more central spending\\n3. Revenue-generating states may lose relative influence\\n4. The Finance Commission's devolution formula may be affected\\nWhich are potential implications?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent potential fiscal federalism implications — delimitation affects political leverage which influences resource allocation and devolution."
    },
    {
        "id": "ch71-l2-q21",
        "question": "Assertion (A): The J&K delimitation created constituencies reserved for Scheduled Tribes for the first time.\\nReason (R): After Article 370's abrogation and extension of central reservation provisions, ST-reserved constituencies were created in J&K.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 2022 J&K delimitation introduced ST-reserved seats (9 seats), which were absent under the previous J&K Constitution."
    },
    {
        "id": "ch71-l2-q22",
        "question": "Statement I: The Delimitation Commission works independently of the government.\\nStatement II: While the government constitutes the Commission, its operational independence is ensured by the chairmanship of a retired SC judge and the non-justiciability of its orders.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The retired judge chairmanship and non-reviewable orders provide institutional independence from executive interference."
    },
    {
        "id": "ch71-l2-q23",
        "question": "The impact of delimitation on minority representation includes:\\n1. Concentration or dispersion of minority populations affects electoral outcomes\\n2. Boundary drawing can either strengthen or weaken minority political influence\\n3. No specific constitutional guarantee for minority constituency reservation\\n4. Community interests are a consideration in the delimitation process\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four points are correct — delimitation significantly impacts minority representation even without specific reservation provisions."
    },
    {
        "id": "ch71-l2-q24",
        "question": "Assertion (A): India's parliamentary democracy requires periodic delimitation for legitimacy.\\nReason (R): Without regular delimitation, population shifts create massive disparities in constituency sizes, undermining the equal representation principle.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Democratic legitimacy requires roughly equal constituency populations — which only periodic delimitation can maintain."
    },
    {
        "id": "ch71-l2-q25",
        "question": "Statement I: The 2002 Delimitation Commission used the 2001 census for boundary readjustment.\\nStatement II: While the total number of seats per state remained frozen (based on 1971 census), internal boundary adjustments were made based on 2001 population data.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 87th Amendment allowed boundary readjustment using 2001 census data while keeping the total seat allocation per state unchanged."
    },
    {
        "id": "ch71-l2-q26",
        "question": "The challenges of delimitation in India include:\\n1. Political resistance from states losing seats\\n2. Census data quality and timeliness\\n3. Balancing population equality with geographical factors\\n4. Ethnic and community tensions\\n5. State boundary disputes\\nWhich are recognized challenges?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent genuine challenges — political resistance, census issues, geographic balance, ethnic tensions, and boundary disputes."
    },
    {
        "id": "ch71-l2-q27",
        "question": "Assertion (A): The principle of 'one person, one vote' is ensured through delimitation.\\nReason (R): By creating roughly equal-population constituencies, delimitation ensures that each citizen's vote carries approximately equal weight in choosing representatives.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Equal-population constituencies are the mechanism through which the democratic principle of vote equality is practically implemented."
    },
    {
        "id": "ch71-l2-q28",
        "question": "Statement I: International practices vary on delimitation independence.\\nStatement II: The US has political redistricting (often partisan), while countries like Australia, Canada, and India use independent commissions for boundary determination.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India's independent commission model contrasts with political redistricting in some countries, aiming to reduce partisan manipulation."
    },
    {
        "id": "ch71-l2-q29",
        "question": "The relationship between delimitation and reservation under Article 330/332 includes:\\n1. Article 330 — reservation of SC/ST seats in Lok Sabha\\n2. Article 332 — reservation of SC/ST seats in State Assemblies\\n3. Delimitation determines which specific constituencies are reserved\\n4. Reservation is proportional to population share\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correct — Articles 330/332 mandate reservation, and the Delimitation Commission determines the specific constituencies and proportion."
    },
    {
        "id": "ch71-l2-q30",
        "question": "Assertion (A): The post-2026 delimitation is often called India's 'most important constitutional exercise.'\\nReason (R): It will simultaneously redraw boundaries for 543+ constituencies, potentially reshape North-South political balance, and fundamentally affect India's federal structure.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The post-2026 delimitation's scope — reshaping representation, federal balance, and political power — makes it the most consequential constitutional exercise."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch71-l3-q1",
        "question": "Consider the complete institutional framework for delimitation:\\n1. Articles 82 and 170 — Constitutional mandate for readjustment\\n2. Article 329 — Non-justiciability\\n3. Delimitation Commission Act — Statutory framework\\n4. 42nd, 84th, 87th Amendments — Freezing and modification provisions\\nWhich together constitute the framework?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four elements together form the complete constitutional and statutory framework for delimitation in India."
    },
    {
        "id": "ch71-l3-q2",
        "question": "Assertion (A): The tension between democratic representation (population-based seats) and federal equity (protecting smaller states) is the central dilemma of post-2026 delimitation.\\nReason (R): Pure population-based allocation would reduce southern states' representation despite their better governance, while freezing seats compromises democratic equality.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. This fundamental tension — democracy vs federalism, population vs performance — is the core challenge of post-2026 delimitation."
    },
    {
        "id": "ch71-l3-q3",
        "question": "Statement I: Options proposed for resolving the post-2026 delimitation dilemma include increasing total Lok Sabha seats (to 848 or more).\\nStatement II: By increasing total seats rather than redistributing existing ones, southern states maintain their current representation while northern states gain additional seats proportional to population growth.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Increasing total seats is one proposed solution that avoids reducing any state's current representation while accommodating population growth."
    },
    {
        "id": "ch71-l3-q4",
        "question": "The implications of delimitation for India's democratic governance include:\\n1. Electoral legitimacy through equal representation\\n2. Federal power balance between states\\n3. Reservation effectiveness for SC/ST communities\\n4. Urban-rural representation balance\\n5. Minority community political influence\\nWhich areas are impacted?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five areas are fundamentally impacted by delimitation — from electoral legitimacy to community-level political representation."
    },
    {
        "id": "ch71-l3-q5",
        "question": "Assertion (A): The frozen allocation since 1971 has created significant population disparities between Lok Sabha constituencies.\\nReason (R): A constituency in UP may have over 30 lakh people while one in Lakshadweep has 65,000 — creating massive vote value inequality.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 50+ year freeze has created extreme population variances, fundamentally undermining the 'one person, one vote, one value' principle."
    },
    {
        "id": "ch71-l3-q6",
        "question": "Statement I: The German Bundestag model of 'overhang seats' has been suggested for India's post-2026 delimitation.\\nStatement II: Under this model, additional seats would be created to accommodate population growth without reducing any state's existing allocation — similar to increasing total seats.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The German model's approach to accommodating population changes without penalizing any region has been suggested for India."
    },
    {
        "id": "ch71-l3-q7",
        "question": "The relationship between delimitation and cooperative federalism includes:\\n1. States' representation in Parliament affects Centre-State dynamics\\n2. Loss of seats weakens a state's bargaining power\\n3. Southern states contribute more revenue but may lose seats\\n4. This creates a governance incentive paradox\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four points highlight the federal implications — delimitation affects power dynamics, bargaining capacity, and creates perverse incentives against successful governance."
    },
    {
        "id": "ch71-l3-q8",
        "question": "Assertion (A): The debate around delimitation reflects deeper tensions in India's constitutional democracy.\\nReason (R): The Constitution simultaneously guarantees democratic equality (one person, one vote), federal balance (state representation), and social justice (reservation) — delimitation must reconcile all three.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Delimitation sits at the intersection of three constitutional values — equality, federalism, and social justice — creating inherent tensions."
    },
    {
        "id": "ch71-l3-q9",
        "question": "Consider the impact of urbanization on delimitation:\\n1. Rapid urbanization creates population concentration in cities\\n2. Urban constituencies become oversized while rural ones shrink\\n3. This distorts the urban-rural representation balance\\n4. Metropolitan areas may need more constituencies\\n5. Peri-urban growth zones create boundary challenges\\nWhich are relevant impacts?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five urbanization impacts are relevant — population concentration, constituency size disparities, representation imbalance, and boundary challenges."
    },
    {
        "id": "ch71-l3-q10",
        "question": "Statement I: The quality of census data is critical for fair delimitation.\\nStatement II: Issues like undercounting of marginalized communities, timing delays (no census since 2011), and political manipulation of census processes can undermine the fairness of delimitation.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The delayed 2021 census creates additional uncertainty, and census data quality directly affects the fairness and legitimacy of delimitation."
    },
    {
        "id": "ch71-l3-q11",
        "question": "Assertion (A): The post-2026 delimitation may fundamentally change India's political landscape.\\nReason (R): If seats are reallocated proportionally to current population, UP alone could have 100+ seats (currently 80), while states like Kerala and Tamil Nadu may see reductions — reshaping parliamentary majority mathematics.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Population-proportional reallocation would drastically change the political weightage of states in Parliament, affecting coalition dynamics and majority calculations."
    },
    {
        "id": "ch71-l3-q12",
        "question": "The options for addressing the post-2026 delimitation challenge include:\\n1. Increasing total Lok Sabha seats\\n2. Weighted representation formula\\n3. Extending the freeze beyond 2026\\n4. Decoupling seat allocation from population for Rajya Sabha-style representation\\n5. Creating a separate 'federal chamber' with equal state representation\\nWhich have been proposed?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1 and 3 only", "3, 4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five options have been discussed by various scholars, commissions, and political commentators as potential solutions."
    },
    {
        "id": "ch71-l3-q13",
        "question": "Statement I: The intersection of delimitation with the Finance Commission's devolution formula creates a unique fiscal-electoral dynamic.\\nStatement II: If delimitation increases a state's seats, its political power in fiscal negotiations also increases — potentially creating a cycle where population growth leads to both more seats and more fiscal influence.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The delimitation-fiscal nexus creates potential perverse incentives — population growth leads to more seats, more political influence, and potentially more fiscal allocations."
    },
    {
        "id": "ch71-l3-q14",
        "question": "Assertion (A): India's approach to delimitation differs fundamentally from the US redistricting model.\\nReason (R): India uses an independent commission with non-justiciable orders, while the US allows political (often partisan) redistricting with judicial review — resulting in different levels of gerrymandering risk.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India's independent commission model with final orders contrasts with the US partisan redistricting model with judicial review."
    },
    {
        "id": "ch71-l3-q15",
        "question": "Consider the role of Rajya Sabha in the post-2026 delimitation debate:\\n1. Rajya Sabha representation is already state-based (not population-proportional)\\n2. Some argue strengthening Rajya Sabha powers could compensate states losing Lok Sabha seats\\n3. A stronger upper house could protect federal balance\\n4. This would require changing the constitutional structure\\nWhich arguments have been made?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four arguments have been made — strengthening Rajya Sabha as a federalism-protecting mechanism to offset population-based Lok Sabha changes."
    },
    {
        "id": "ch71-l3-q16",
        "question": "Statement I: The J&K delimitation (2022) set a precedent for delimitation in Union Territories.\\nStatement II: Previously, delimitation was primarily associated with states. The J&K exercise demonstrated that post-reorganization, UTs with legislatures can also undergo delimitation under the central Commission.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The J&K delimitation established a new precedent for applying the central Delimitation Commission Act to reorganized territories."
    },
    {
        "id": "ch71-l3-q17",
        "question": "Assertion (A): The concept of 'community of interest' is an important but subjective criterion in delimitation.\\nReason (R): While the Delimitation Commission considers communities' shared interests, cultural ties, and economic connections, the subjective nature of this criterion can be used to justify politically motivated boundary decisions.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Community of interest is a valid consideration but its subjective nature creates vulnerability to manipulation."
    },
    {
        "id": "ch71-l3-q18",
        "question": "The long-term implications of delimitation for India's democratic health include:\\n1. Legitimacy of representative democracy\\n2. Trust in electoral institutions\\n3. Federal cohesion vs fragmentation\\n4. Incentive structure for governance (population control vs seat gain)\\n5. Equitable development across regions\\nWhich are fundamental concerns?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent fundamental concerns — delimitation affects democratic legitimacy, institutional trust, federal balance, governance incentives, and regional equity."
    },
    {
        "id": "ch71-l3-q19",
        "question": "Statement I: Some scholars argue that India should adopt a 'degressive proportionality' model similar to the European Parliament.\\nStatement II: Under degressive proportionality, smaller states get somewhat more seats per capita than larger states, ensuring both population-based representation and protection for smaller entities.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Degressive proportionality is proposed as a middle path — maintaining some population proportionality while protecting smaller states' representation."
    },
    {
        "id": "ch71-l3-q20",
        "question": "Assertion (A): The transparency and public participation in the delimitation process is essential for its legitimacy.\\nReason (R): Given the non-justiciability of delimitation orders, the only safeguard against potential abuse is the participatory process — draft publication, public hearings, and associate member consultation.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Since judicial review is barred, procedural safeguards (transparency, participation) are the primary protection against arbitrary delimitation."
    },
    {
        "id": "ch71-l3-q21",
        "question": "Consider the relationship between delimitation and women's representation:\\n1. Constituency boundaries affect women candidates' electoral prospects\\n2. Reserved constituencies for women (if Women's Reservation Bill is implemented) would require delimitation coordination\\n3. Women's reservation in panchayats (73rd Amendment) provides a model\\n4. The interaction between SC/ST reservation and women's reservation adds complexity\\nWhich are relevant considerations?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are relevant — women's representation intersects with delimitation through boundary effects, reservation implementation, and the complexity of overlapping reservations."
    },
    {
        "id": "ch71-l3-q22",
        "question": "Statement I: The upcoming delimitation exercise will test India's institutional capacity for managing inter-state political tensions.\\nStatement II: The ISC (Inter-State Council), Governing Council of NITI Aayog, and parliamentary negotiations will all be forums for managing the political fallout of seat reallocation.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Managing the political tensions of post-2026 delimitation will require multiple institutional mechanisms for inter-state negotiation."
    },
    {
        "id": "ch71-l3-q23",
        "question": "Assertion (A): The delimitation exercise has implications for India's national unity.\\nReason (R): If southern states perceive themselves as being penalized for good governance (population control, economic contribution) through seat losses, it could fuel regional discontent and secessionist sentiments.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The perception of injustice in seat allocation could undermine national cohesion, making the delimitation exercise a test of India's federal compact."
    },
    {
        "id": "ch71-l3-q24",
        "question": "The comprehensive approach to post-2026 delimitation should include:\\n1. Broad-based political consensus building\\n2. Constitutional amendment if necessary\\n3. Expert committee recommendations\\n4. Public discourse and awareness\\n5. International best practice study\\nWhich are essential steps?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five steps are essential for a successful post-2026 delimitation exercise — consensus, constitutional framework, expert input, public engagement, and comparative study."
    },
    {
        "id": "ch71-l3-q25",
        "question": "Statement I: The Delimitation Commission's work intersects with the Right to Equality (Article 14) and Right to Vote (Article 326).\\nStatement II: Ensuring equal-value votes through delimitation is an integral part of the constitutional promise of equality and universal adult suffrage.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Delimitation is the practical mechanism through which constitutional guarantees of equality and universal suffrage are translated into equal-value representation."
    },
    {
        "id": "ch71-l3-q26",
        "question": "Assertion (A): The concept of 'effective representation' goes beyond mere population-based allocation.\\nReason (R): Effective representation requires considering community interests, geographical access, cultural cohesion, economic connections, and administrative convenience — not just numerical equality.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Effective representation is a richer concept than population equality, incorporating multiple dimensions of community needs."
    },
    {
        "id": "ch71-l3-q27",
        "question": "Consider the historical evolution of delimitation in India:\\n1. 1st Commission (1952) — first post-independence delimitation\\n2. 2nd Commission (1963) — after 1961 census\\n3. 3rd Commission (1973) — after 1971 census\\n4. Freeze (1976-2001) — no seat reallocation\\n5. 4th Commission (2002) — boundary readjustment only\\nWhat does this evolution reveal?",
        "options": ["Regular and consistent development", "Increasing political complexity of delimitation, leading to longer freezes and narrower mandates — from full reallocation to boundary-only readjustment", "Declining significance of delimitation", "No pattern"],
        "correctAnswerIndex": 1,
        "explanation": "The evolution shows increasing political difficulty — from regular reallocation to a 25-year freeze and eventually to boundary-only readjustment without seat changes."
    },
    {
        "id": "ch71-l3-q28",
        "question": "Statement I: The concept of 'malapportionment' describes the situation where constituencies have unequal populations.\\nStatement II: India currently has significant malapportionment — the largest Lok Sabha constituency has approximately 40 times the population of the smallest — undermining the democratic principle of equal representation.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India's extreme malapportionment is a consequence of the 50+ year freeze and represents a significant democratic deficit."
    },
    {
        "id": "ch71-l3-q29",
        "question": "Assertion (A): The post-2026 delimitation could redefine the concept of Indian federalism.\\nReason (R): If the exercise leads to constitutional changes (new chambers, weighted voting, expanded seats), it could fundamentally alter the relationship between the Centre and states and among states themselves.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The potential constitutional changes required for post-2026 delimitation could reshape India's federal architecture."
    },
    {
        "id": "ch71-l3-q30",
        "question": "The ultimate test of a successful delimitation exercise is:\\n1. Equal population per constituency\\n2. Fair representation for all communities\\n3. Political acceptance across states\\n4. Preservation of federal balance\\n5. Strengthening democratic legitimacy\\nWhich criteria together define success?",
        "options": ["1 only", "1, 2, 3, 4 and 5 — no single criterion is sufficient", "1 and 3 only", "5 only"],
        "correctAnswerIndex": 1,
        "explanation": "Successful delimitation requires balancing all five criteria — population equality, community fairness, political acceptance, federal balance, and democratic legitimacy."
    }
];

export const CHAPTER_71_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
