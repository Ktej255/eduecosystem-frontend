import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch6-l1-q1",
        "question": "Under Part I of the Constitution, which Articles directly deal with the Union and its territory?",
        "options": ["Articles 1 to 4","Articles 5 to 11","Articles 12 to 35","Articles 36 to 51"],
        "correctAnswerIndex": 0,
        "explanation": "Articles 1 to 4 under Part I of the Constitution deal with the Union and its territory."
    },
    {
        "id": "ch6-l1-q2",
        "question": "According to Article 1 of the Constitution, India, that is Bharat, shall be a:",
        "options": ["Federation of States","Union of States","Confederation of States","Unitary State"],
        "correctAnswerIndex": 1,
        "explanation": "Article 1 describes India, that is, Bharat as a"
    },
    {
        "id": "ch6-l1-q3",
        "question": "Why did Dr. B.R. Ambedkar prefer the phrase",
        "options": ["Because Indian states had strongly demanded a Unitary system.","Because the Indian Federation is not the result of an agreement among the states, and the states have no right to secede from the federation.","Because the British Parliament recommended the term",".","Because it was copied directly from the American Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "Dr. Ambedkar preferred"
    },
    {
        "id": "ch6-l1-q4",
        "question": "According to Article 1, the territory of India can be classified into how many categories?",
        "options": ["Two","Three","Four","Five"],
        "correctAnswerIndex": 1,
        "explanation": "The territory of India is classified into three categories: (1) Territories of the states; (2) Union territories; and (3) Territories that may be acquired by the Government of India at any time."
    },
    {
        "id": "ch6-l1-q5",
        "question": "Which of the following expressions is conceptually wider according to the Constitution?",
        "options": ["Union of India","Territory of India","Both mean exactly the same","Federation of India"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch6-l1-q6",
        "question": "Which Article grants Parliament the power to admit into the Union of India, or establish, new states on such terms and conditions as it thinks fit?",
        "options": ["Article 1","Article 2","Article 3","Article 4"],
        "correctAnswerIndex": 1,
        "explanation": "Article 2 empowers the Parliament to admit into the Union of India, or establish, new states on such terms and conditions as it thinks fit (it relates to the admission or establishment of new states that are NOT part of the Union of India)."
    },
    {
        "id": "ch6-l1-q7",
        "question": "Which Article authorizes the Parliament to form a new state by separation of territory from any state or by uniting two or more states?",
        "options": ["Article 1","Article 2","Article 3","Article 4"],
        "correctAnswerIndex": 2,
        "explanation": "Article 3 deals with the internal re-adjustment inter se of the territories of the constituent states of the Union of India (forming new states, altering boundaries/names of existing states)."
    },
    {
        "id": "ch6-l1-q8",
        "question": "Under Article 3, a bill contemplating changes in the boundary or name of a state can be introduced in the Parliament only with the prior recommendation of:",
        "options": ["The Prime Minister","The President","The Chief Minister of the concerned State","The Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "A bill contemplating the changes under Article 3 can be introduced in the Parliament only with the prior recommendation of the President."
    },
    {
        "id": "ch6-l1-q9",
        "question": "When the President refers an Article 3 bill to the state legislature for expressing its views, is the Parliament bound by the views of the state legislature?",
        "options": ["Yes, the Parliament must act according to the state","Yes, but only if the state passes a unanimous resolution.","No, the President (or Parliament) is not bound by the views of the state legislature and may either accept or reject them.","No, but the Parliament must provide written justification if it rejects the views."],
        "correctAnswerIndex": 2,
        "explanation": "The President (or Parliament) is not bound by the views of the state legislature and may either accept or reject them, even if the views are received in time."
    },
    {
        "id": "ch6-l1-q10",
        "question": "Because Parliament can unilaterally alter the boundaries of states, the Indian Constitution describes India as:",
        "options": ["An indestructible union of indestructible states.","A destructible union of destructible states.","An indestructible union of destructible states.","A destructible union of indestructible states."],
        "correctAnswerIndex": 2,
        "explanation": "The territorial integrity or continued existence of any state is not guaranteed. Hence, India is rightly described as"
    },
    {
        "id": "ch6-l1-q11",
        "question": "According to Article 4, laws made for admission or establishment of new states (under Article 2) and formation of new states (under Article 3):",
        "options": ["Are considered as amendments of the Constitution under Article 368.","Are NOT to be considered as amendments of the Constitution under Article 368.","Can only be passed by a special majority in Parliament.","Require ratification by half of the Indian states."],
        "correctAnswerIndex": 1,
        "explanation": "Article 4 itself declares that laws made for admission or establishment of new states (Art 2) and formation of new states (Art 3) are NOT to be considered as amendments of the Constitution under Article 368. Such laws can be passed by a simple majority."
    },
    {
        "id": "ch6-l1-q12",
        "question": "Does the power of Parliament to diminish the area of a state (under Article 3) include the power to cede Indian territory to a foreign country?",
        "options": ["Yes, it can be done by a simple majority under Article 3.","No, it requires an executive order by the President.","No, Indian territory can be ceded to a foreign state only by amending the Constitution under Article 368.","No, Indian territory can never be ceded under any circumstance."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court in 1960 (Berubari Union case) ruled that the power of Parliament to diminish the area of a state (under Article 3) does not cover cession of Indian territory to a foreign country. This requires a constitutional amendment under Art. 368."
    },
    {
        "id": "ch6-l1-q13",
        "question": "However, in 1969, the Supreme Court ruled that settlement of a",
        "options": ["A simple majority vote in Lok Sabha.","A referendum in the border state.","Executive action.","Ratification by the border state"],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court ruled (in 1969) that settlement of a boundary dispute between India and another country does not require a constitutional amendment. It can be done by executive action as it does not involve cession of Indian territory."
    },
    {
        "id": "ch6-l1-q14",
        "question": "Which Constitutional Amendment Act was enacted to give effect to the acquiring of certain territories by India and transfer of certain other territories to Bangladesh in 2015?",
        "options": ["98th Amendment Act","99th Amendment Act","100th Amendment Act","101st Amendment Act"],
        "correctAnswerIndex": 2,
        "explanation": "The 100th Constitutional Amendment Act (2015) was enacted to give effect to the acquiring of certain territories by India and transfer of certain other territories to Bangladesh."
    },
    {
        "id": "ch6-l1-q15",
        "question": "At the time of independence, India had two categories of political units—the British provinces and the princely states. How many princely states were situated within the geographical boundaries of India?",
        "options": ["296","389","552","600"],
        "correctAnswerIndex": 2,
        "explanation": "Of the 552 princely states situated within the geographical boundaries of India, 549 joined India and the remaining 3 (Hyderabad, Junagadh, Kashmir) initially refused."
    },
    {
        "id": "ch6-l1-q16",
        "question": "Which princely state was integrated into India by means of a",
        "options": ["Junagadh","Kashmir","Hyderabad","Travancore"],
        "correctAnswerIndex": 2,
        "explanation": "Hyderabad was integrated by means of police action. (Junagadh by referendum, Kashmir by the Instrument of Accession)."
    },
    {
        "id": "ch6-l1-q17",
        "question": "In 1950, the Constitution contained a four-fold classification of the states of the Indian Union (Part A, B, C, and D states). Which Part consisted of only one territory—the Andaman and Nicobar Islands?",
        "options": ["Part A","Part B","Part C","Part D"],
        "correctAnswerIndex": 3,
        "explanation": "Part D territories consisted solely of the Andaman and Nicobar Islands."
    },
    {
        "id": "ch6-l1-q18",
        "question": "There was a massive demand for the reorganization of states on a linguistic basis. The Government appointed the Linguistic Provinces Commission in June 1948, chaired by:",
        "options": ["Jawaharlal Nehru","S.K. Dhar","Fazl Ali","Potti Sriramulu"],
        "correctAnswerIndex": 1,
        "explanation": "In June 1948, the Government appointed the Linguistic Provinces Commission under the chairmanship of S.K. Dhar to examine the feasibility of organizing states on a linguistic basis."
    },
    {
        "id": "ch6-l1-q19",
        "question": "What was the recommendation of the Dhar Commission (1948) regarding the reorganization of states?",
        "options": ["It strongly recommended the reorganization of states on linguistic basis.","It recommended the reorganization of states on the basis of administrative convenience rather than linguistic factor.","It recommended maintaining the exact boundaries of British provinces permanently.","It recommended forming states based exclusively on religious lines."],
        "correctAnswerIndex": 1,
        "explanation": "The Dhar Commission recommended the reorganization of states on the basis of administrative convenience rather than linguistic factor."
    },
    {
        "id": "ch6-l1-q20",
        "question": "Following widespread resentment against the Dhar Commission report, another committee was formed in December 1948 comprising Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya. What was this committee formally known as?",
        "options": ["Linguistic Resolution Committee","JVP Committee","Fazl Ali Commission","States Reorganization Committee"],
        "correctAnswerIndex": 1,
        "explanation": "It was popularly known as the JVP Committee (after the initials of Jawaharlal, Vallabhbhai, Pattabhi). It formally rejected language as the basis for reorganization."
    },
    {
        "id": "ch6-l1-q21",
        "question": "In October 1953, the Government of India was forced to create the first linguistic state by separating the Telugu-speaking areas from the Madras state. Which state was this?",
        "options": ["Karnataka","Kerala","Andhra state","Tamil Nadu"],
        "correctAnswerIndex": 2,
        "explanation": "The Government was forced to create the first linguistic state, known as Andhra state, by separating the Telugu-speaking areas from the Madras state."
    },
    {
        "id": "ch6-l1-q22",
        "question": "Which commission, appointed in 1953, finally accepted language as the basis of reorganization of states but rejected the theory of",
        "options": ["Dhar Commission","JVP Committee","Fazl Ali Commission","Sarkaria Commission"],
        "correctAnswerIndex": 2,
        "explanation": "The Fazl Ali Commission (States Reorganisation Commission) broadly accepted language as the basis of reorganization of states but rejected the theory of"
    },
    {
        "id": "ch6-l1-q23",
        "question": "To implement the recommendations of the Fazl Ali Commission, the States Reorganisation Act was passed in 1956. This act led to the creation of how many States and Union Territories on November 1, 1956?",
        "options": ["14 States and 6 Union Territories","16 States and 3 Union Territories","28 States and 7 Union Territories","15 States and 5 Union Territories"],
        "correctAnswerIndex": 0,
        "explanation": "By the States Reorganisation Act (1956) and the 7th Constitutional Amendment Act (1956), the four-fold classification was abolished, and 14 states and 6 union territories were created on November 1, 1956."
    },
    {
        "id": "ch6-l1-q24",
        "question": "Which was the 15th state created in the Indian Union after 1956, by dividing the bilingual state of Bombay in 1960?",
        "options": ["Maharashtra","Gujarat","Andhra Pradesh","Karnataka"],
        "correctAnswerIndex": 1,
        "explanation": "In 1960, the bilingual state of Bombay was divided into two separate states—Maharashtra for Marathi-speaking people and Gujarat for Gujarati-speaking people. Gujarat was the 15th state."
    },
    {
        "id": "ch6-l1-q25",
        "question": "Dadra and Nagar Haveli was ruled by which foreign colonial power until its liberation in 1954?",
        "options": ["French","Portuguese","British","Dutch"],
        "correctAnswerIndex": 1,
        "explanation": "The Portuguese ruled Dadra and Nagar Haveli until its liberation in 1954."
    },
    {
        "id": "ch6-l1-q26",
        "question": "India acquired Goa, Daman and Diu from the Portuguese in 1961 by means of:",
        "options": ["A peaceful diplomatic treaty","Police action","A constitutional amendment referendum","A ruling by the International Court of Justice"],
        "correctAnswerIndex": 1,
        "explanation": "India acquired these three territories from the Portuguese by means of a police action in 1961."
    },
    {
        "id": "ch6-l1-q27",
        "question": "Puducherry comprises the former French establishments in India. Which of the following is NOT one of the territories comprising Puducherry?",
        "options": ["Karaikal","Mahe","Yanam","Diu"],
        "correctAnswerIndex": 3,
        "explanation": "The territory of Puducherry comprises the former French establishments in India known as Puducherry, Karaikal, Mahe, and Yanam. Diu was Portuguese."
    },
    {
        "id": "ch6-l1-q28",
        "question": "Which of the following states was briefly made an",
        "options": ["Nagaland","Arunachal Pradesh","Sikkim","Goa"],
        "correctAnswerIndex": 2,
        "explanation": "Sikkim was briefly made an"
    },
    {
        "id": "ch6-l1-q29",
        "question": "In the year 2000, three new states were created: Chhattisgarh, Uttarakhand, and Jharkhand. They were carved out from which states respectively?",
        "options": ["Madhya Pradesh, Uttar Pradesh, and Bihar","Bihar, Madhya Pradesh, and Uttar Pradesh","Uttar Pradesh, Bihar, and Madhya Pradesh","Maharashtra, Himachal Pradesh, and West Bengal"],
        "correctAnswerIndex": 0,
        "explanation": "In 2000, three more new states of Chhattisgarh, Uttarakhand and Jharkhand were created out of the territories of Madhya Pradesh, Uttar Pradesh and Bihar respectively."
    },
    {
        "id": "ch6-l1-q30",
        "question": "Which was the 29th state of the Indian Union, created in 2014 by bifurcating the State of Andhra Pradesh? (Note: It is now the 28th state after J&K reorganization)",
        "options": ["Seemandhra","Rayalaseema","Telangana","Vidarbha"],
        "correctAnswerIndex": 2,
        "explanation": "In 2014, the new state of Telangana came into existence as the 29th state of the Indian Union. It was carved out of the territories of Andhra Pradesh."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch6-l2-q1",
        "question": "Under the Constitution, why is",
        "options": ["Because","includes extra-territorial waters beyond 12 nautical miles, unlike the Union.","Because the","includes only states, while the","includes states, union territories, and any future acquired territories.","Because the","only signifies the Central Government in New Delhi.","Because","includes the territories of neighboring allied countries."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch6-l2-q2",
        "question": "Consider the powers granted to Parliament under Article 2 relative to Article 3:\\n1. Article 2 relates to the admission or establishment of new states that are NOT part of the Union of India.\\n2. Article 3 relates to the internal re-adjustment of the territories of the constituent states of the Union of India.\\nWhich of the above is/are correct?",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both statements are correct and accurately distinguish the spheres of Article 2 (external additions/establishments) and Article 3 (internal reorganization)."
    },
    {
        "id": "ch6-l2-q3",
        "question": "When a bill is introduced under Article 3 to alter the boundaries of a state, the President refers the bill to the state legislature asking for its views within a specified period. What happens if the state legislature does NOT express its views within that specified period?",
        "options": ["The bill automatically lapses and cannot be introduced in Parliament.","The Parliament must grant an automatic extension of 6 months.","The President can proceed to introduce the bill in Parliament as the requirement is merely procedural consultation, not binding consent.","The Supreme Court must intervene to force the state legislature to vote."],
        "correctAnswerIndex": 2,
        "explanation": "If the state legislature fails to express its views within the specified time, the President (or Parliament) can proceed with the bill. The consent or views of the state are not binding."
    },
    {
        "id": "ch6-l2-q4",
        "question": "If Parliament modifies an Article 3 bill *after* it has already received the views of the state legislature, does the modified bill need to be referred back to the state legislature afresh?",
        "options": ["Yes, every substantive change requires fresh consultation.","No, the Supreme Court has ruled that fresh reference is not necessary every time an amendment to such a bill is moved and accepted in Parliament.","Yes, but only if the modification changes the name of the state.","No, because the state legislature is immediately dissolved when the bill is introduced."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has clarified that it is not necessary to make a fresh reference to the state legislature every time an amendment to an Article 3 bill is moved and accepted in Parliament."
    },
    {
        "id": "ch6-l2-q5",
        "question": "Assertion (A): The territorial integrity of an Indian state is not guaranteed by the Constitution, unlike states in the USA.\\nReason (R): Parliament can unilaterally form new states or alter boundaries by a simple majority under ordinary legislative process.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true and R holds the correct explanation for A. Because Parliament can change boundaries using a simple majority (under Article 3 & 4), the territorial integrity of any state is not guaranteed."
    },
    {
        "id": "ch6-l2-q6",
        "question": "What was the core constitutional logic applied by the Supreme Court in the Berubari Union Case (1960) regarding the cession of Indian territory to Pakistan?",
        "options": ["Cession of territory leads to the loss of citizenship for inhabitants and thus violates Article 21 implicitly.","The power under Article 3 to diminish the area of a state relates to internal adjustments only, and does not cover the shedding of sovereign territory to a foreign entity.","Only the President can cede territory using emergency powers.","No territory can be ceded unless the UN ratifies the boundary change."],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that Article 3"
    },
    {
        "id": "ch6-l2-q7",
        "question": "Match the Commission/Committee to its primary criteria for the reorganization of states:\\nList-I\\nA. Dhar Commission\\nB. JVP Committee\\nC. Fazl Ali Commission\\n\\nList-II\\n1. Formally rejected language as the basis of reorganization\\n2. Broadly accepted language as the basis but rejected",
        "options": ["3-1-2","1-2-3","3-2-1","2-1-3"],
        "correctAnswerIndex": 0,
        "explanation": "Dhar Commission (1948) recommended administrative convenience (3). JVP Committee (1948) formally rejected language as the sole basis (1). Fazl Ali (1953) accepted language as a major factor but rejected the rigid"
    },
    {
        "id": "ch6-l2-q8",
        "question": "Which of the following factored most critically into the Fazl Ali Commission",
        "options": ["The lack of sufficient regional languages to create 50 states.","The primary consideration that the unity and security of India should be the paramount concern.","The opposition from the British parliament during the transition period.","The constitutional mandate to adopt Hindi universally by 1965."],
        "correctAnswerIndex": 1,
        "explanation": "The Fazl Ali Commission stated clearly that the unity and security of India should be the primary consideration in any redrawing of the country"
    },
    {
        "id": "ch6-l2-q9",
        "question": "Consider the constitutional status of",
        "options": ["They share federal power equally with the Centre through the concurrent list.","They are independent republics within the Indian union.","They are centrally administered territories directly governed by the President acting through an administrator appointed by him.","They strictly fall under the jurisdiction of the Ministry of Defence."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike states, which share federal power with the Centre, Union territories are directly administered by the Central government (the President acting through an administrator)."
    },
    {
        "id": "ch6-l2-q10",
        "question": "The 100th Constitutional Amendment Act (2015) operationalized the Land Boundary Agreement with Bangladesh. What specific constitutional schedules required amendment to execute this exchange of enclaves?",
        "options": ["First and Second Schedules","First Schedule only","Seventh Schedule and Tenth Schedule","Tenth Schedule only"],
        "correctAnswerIndex": 1,
        "explanation": "The First Schedule contains the names and territorial extent of the States and UTs. Transferring territories fundamentally changes the territorial extent of the border states (Assam, West Bengal, Meghalaya, Tripura) listed in the First Schedule."
    },
    {
        "id": "ch6-l2-q11",
        "question": "With reference to the integration of Princely States, what was the status of Hyderabad, Junagadh, and Kashmir by August 15, 1947?",
        "options": ["They had signed the Instrument of Accession before the deadline.","They had opted to join Pakistan but were forcibly retained by India.","They refused to join either dominion and initially remained completely independent.","They were placed under UN administration immediately."],
        "correctAnswerIndex": 2,
        "explanation": "Of the 552 princely states situated within Indian geography, 549 joined by Aug 15, 1947. The remaining 3 (Hyderabad, Junagadh, Kashmir) refused and held out initially."
    },
    {
        "id": "ch6-l2-q12",
        "question": "The original Constitution in 1950 possessed a four-fold classification of states. What primarily characterized the",
        "options": ["They were former princely states with legislatures.","They were former governors","They were newly acquired foreign territories.","They were territories under Chief Commissioners without legislatures."],
        "correctAnswerIndex": 1,
        "explanation": "Part A states comprised nine erstwhile governor"
    },
    {
        "id": "ch6-l2-q13",
        "question": "What tragically triggered the forced creation of the linguistic state of Andhra in 1953?",
        "options": ["A violent military mutiny in the Madras regiment.","The death of Potti Sriramulu after a 56-day hunger strike demanding a separate state for Telugu speakers.","A Supreme Court order mandating linguistic separation.","An armed insurgency supported by the Nizam of Hyderabad."],
        "correctAnswerIndex": 1,
        "explanation": "The creation of Andhra State was forced upon the government following a prolonged popular agitation and the death of Potti Sriramulu, a Congress person of standing, after a 56-day hunger strike."
    },
    {
        "id": "ch6-l2-q14",
        "question": "Though Article 4 states that reorganizing states is not an amendment under Article 368, does Parliament have the power to reorganize states through an executive ordinance without a parliamentary bill?",
        "options": ["Yes, if the state is under President","No, Article 3 explicitly uses the word",", meaning the Parliament must pass a legislative bill.","Yes, the President can invoke Article 123 for state reorganization.","No, because the Supreme Court must draft the reorganization orders."],
        "correctAnswerIndex": 1,
        "explanation": "Article 3 states that Parliament may *by law* form a new state. This requires legislative action (a bill in Parliament), not merely an executive order, though theoretically an ordinance could be promulgated but it must be ratified as law."
    },
    {
        "id": "ch6-l2-q15",
        "question": "When Sikkim was associated with the Indian Union via the 35th Amendment (1974), which novel Schedule was inserted into the Constitution to outline its terms of association?",
        "options": ["Eighth Schedule","Ninth Schedule","Tenth Schedule","Eleventh Schedule"],
        "correctAnswerIndex": 2,
        "explanation": "The 35th Amendment Act (1974) introduced a new class of statehood ("
    },
    {
        "id": "ch6-l2-q16",
        "question": "Assertion (A): The President must obtain the consent of a Union Territory",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. The proviso to Article 3 applies to"
    },
    {
        "id": "ch6-l2-q17",
        "question": "Which Indian state underwent a name change from",
        "options": ["Madhya Pradesh","Uttar Pradesh","Himachal Pradesh","Andhra Pradesh"],
        "correctAnswerIndex": 1,
        "explanation": "The United Provinces was the first state to have a new name. It was renamed Uttar Pradesh in 1950."
    },
    {
        "id": "ch6-l2-q18",
        "question": "Through which Constitutional Amendment was Delhi designated as the",
        "options": ["56th Amendment Act (1987)","69th Amendment Act (1991)","73rd Amendment Act (1992)","86th Amendment Act (2002)"],
        "correctAnswerIndex": 1,
        "explanation": "The Union Territory of Delhi was redesignated as the National Capital Territory of Delhi by the 69th Constitutional Amendment Act of 1991."
    },
    {
        "id": "ch6-l2-q19",
        "question": "Consider the constitutional status of a territory acquired by India (like Puducherry before it became a UT). Under which entity",
        "options": ["The Supreme Court of India","The Governor of the nearest State","The Central Government directly under the President","The UN Trusteeship Council"],
        "correctAnswerIndex": 2,
        "explanation": "Any acquired territory falls squarely under the executive power of the Union (Central Government) until Parliament makes laws for its governance or admits it as a UT/State."
    },
    {
        "id": "ch6-l2-q20",
        "question": "Which of the following bodies is empowered to form a new state by separating territory from an existing state?",
        "options": ["The Inter-State Council","The concerned State Legislature by a 2/3rd majority","The Parliament of India","The President via an executive ordinance exclusively"],
        "correctAnswerIndex": 2,
        "explanation": "Only the Parliament of India is empowered under Article 3 to form new states or alter the boundaries of existing states."
    },
    {
        "id": "ch6-l2-q21",
        "question": "Before 1974, the Constitution did not provide for an",
        "options": ["It allowed an independent sovereign country to dictate terms to the Indian Parliament.","It created a hybrid status—Sikkim was formally associated with the Union without being a full","or a mere",".","It granted Sikkim the exclusive right to secede at will.","It permanently designated Sikkim as a protectorate without any parliamentary representation."],
        "correctAnswerIndex": 1,
        "explanation": "Article 2A (introduced by the 35th Amendment) was legally novel because it created"
    },
    {
        "id": "ch6-l2-q22",
        "question": "The Fazl Ali Commission proposed four major factors for the reorganization of states. Which of the following was NOT explicitly one of those four major factors?",
        "options": ["Preservation of the unity and security of the country.","Linguistic and cultural homogeneity.","Financial, economic, and administrative considerations.","Strict historical boundaries established by the Mughal empire."],
        "correctAnswerIndex": 3,
        "explanation": "The four factors were: (1) Preservation of unity and security; (2) Linguistic and cultural homogeneity; (3) Financial, economic and admin considerations; (4) Planning and promotion of the welfare of the people of each state as well as the nation."
    },
    {
        "id": "ch6-l2-q23",
        "question": "Following the creation of Andhra in 1953, the Fazl Ali Commission was immediately established because:",
        "options": ["The creation of Andhra intensified demands from other regions for linguistic states.","The British demanded a formalized map of India for the Commonwealth registry.","The Supreme Court ruled the creation of Andhra as unconstitutional without a national committee.","Pandit Nehru sought to reverse the formation of Andhra."],
        "correctAnswerIndex": 0,
        "explanation": "The creation of Andhra state intensified the demand from other regions for creation of states on linguistic basis. This forced the Government to appoint a three-member States Reorganisation Commission (Fazl Ali Commission)."
    },
    {
        "id": "ch6-l2-q24",
        "question": "Which of the following statements about the",
        "options": ["They were immediately drafted as full-fledged States the day they were acquired.","They were administered as","by the President until constitutional amendments explicitly integrated them as Union Territories.","They held no legal status in India until recognized by the United Nations.","They were placed under the administrative control of the nearest State Governor."],
        "correctAnswerIndex": 1,
        "explanation": "For example, Puducherry was administered as an"
    },
    {
        "id": "ch6-l2-q25",
        "question": "How does the Indian concept of state territorial integrity differ from the principle enshrined in the Constitution of the USA?",
        "options": ["In India, states can secede; in the USA, they cannot.","In India, Parliament can alter state borders without the state","s boundary without its legislature","In the USA, states can alter their own borders via referendums bypassing the federal government.","There is no difference; both require state consent for border alterations."],
        "correctAnswerIndex": 1,
        "explanation": "The American Constitution guarantees the territorial integrity or continued existence of states. The federal government cannot form new states by altering boundaries without the consent of the states concerned. India requires merely the"
    },
    {
        "id": "ch6-l2-q26",
        "question": "Under Article 3, Parliament can increase or diminish the area of any state. Can Parliament use this power to entirely extinguish the name and existence of a state?",
        "options": ["Yes, the power to diminish or alter intrinsically includes the power to entirely abolish a state and merge its territory.","No, the Constitution prohibits reducing the total number of states below 14.","No, an explicit constitutional amendment under Article 368 is required to fully abolish a state.","Yes, but only during a National Emergency."],
        "correctAnswerIndex": 0,
        "explanation": "The power of Parliament to form new states includes the power to unite any territory to a part of any state, merge states entirely, or extinguish a state"
    },
    {
        "id": "ch6-l2-q27",
        "question": "Consider the timeline of State Formation: Maharashtra & Gujarat (1960), Nagaland (1963), Haryana (1966), Himachal Pradesh (1971). Which of the following geopolitical phenomena drove the creation of Nagaland?",
        "options": ["Linguistic separation from Hindi-speaking areas.","To satisfy the movement of hostile Nagas demanding autonomy and cultural protection.","It was previously a Portuguese enclave liberated in 1961.","To split the vast administrative burden of Uttar Pradesh."],
        "correctAnswerIndex": 1,
        "explanation": "In 1963, the State of Nagaland was formed by taking the Naga Hills and Tuensang area out of the state of Assam, largely to satisfy the movement of hostile Nagas."
    },
    {
        "id": "ch6-l2-q28",
        "question": "When the State of Haryana was carved out of the State of Punjab in 1966, what happened to Chandigarh?",
        "options": ["It was made the exclusive capital of Punjab.","It was given full statehood.","It was made a Union Territory and served as the joint capital of both Punjab and Haryana.","It was designated as the summer capital of India."],
        "correctAnswerIndex": 2,
        "explanation": "In 1966, the State of Punjab was bifurcated to create Haryana, and the union territory of Chandigarh was created to serve as the joint capital of both the states."
    },
    {
        "id": "ch6-l2-q29",
        "question": "Which Constitutional Amendment is associated with the massive reorganization abolishing the Part A, B, C, D classification in 1956?",
        "options": ["1st Amendment Act, 1951","5th Amendment Act, 1955","7th Amendment Act, 1956","9th Amendment Act, 1960"],
        "correctAnswerIndex": 2,
        "explanation": "The 7th Constitutional Amendment Act (1956), alongside the States Reorganisation Act (1956), legally abolished the four-fold classification of states."
    },
    {
        "id": "ch6-l2-q30",
        "question": "Article 2 grants Parliament two specific powers:",
        "options": ["The first refers to states already in existence (like acquiring a neighboring foreign state); the second refers to creating states establishing them from scratch on acquired unpopulated territory.","The first refers to linguistic reorganization; the second refers to administrative reorganization.","The first relies on simple majority; the second requires a special majority.","There is no distinction; they are legally synonymous phrases."],
        "correctAnswerIndex": 0,
        "explanation": "The power to admit refers to admitting states that are already in existence. The power to establish refers to establishing states which were not in existence before."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch6-l3-q1",
        "question": "Consider the constitutional status of",
        "options": ["Cession (following treaty, purchase, gift, lease or plebiscite)","Occupation (hitherto unoccupied by a recognized ruler)","Prescription and Conquest/Subjugation","Unilateral Parliamentary Declaration (under Article 3)"],
        "correctAnswerIndex": 3,
        "explanation": "Unilateral Parliamentary Declaration under Article 3 is an internal reorganization tool, not a mode recognized by international law for acquiring foreign sovereign territory. The recognized modes are cession, occupation, prescription, or conquest."
    },
    {
        "id": "ch6-l3-q2",
        "question": "In the context of the 100th Constitutional Amendment Act (2015) which executed the Land Boundary Agreement with Bangladesh, consider the following statements:\\n1. The amendment involved the transfer of 111 enclaves to Bangladesh and receipt of 51 enclaves from Bangladesh.\\n2. Because it involved the transfer of territory to a foreign state, it required an amendment under Article 368 alongside ratification by half the states considering it altered the boundaries of First Schedule states.\\n3. Article 3 could have been utilized for this exchange if the border states mutually agreed.\\nWhich of the statements given above is/are INCORRECT?",
        "options": ["1 only","2 only","3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "Statement 3 is incorrect. The SC ruled in Berubari (1960) that Article 3 does NOT cover cession of Indian territory to a foreign state. Thus, Article 368 MUST be used regardless of state agreement. (Statements 1 and 2 are factually and constitutionally correct)."
    },
    {
        "id": "ch6-l3-q3",
        "question": "The power of Parliament under Article 3 to form new states is subject to two conditions. The second condition requires the President to refer the bill to the state legislature for expressing its views. However, what is the constitutional provision if the bill contemplates forming a new",
        "options": ["The views of the legislatures of all states whose boundaries are altered must be obtained.","The views of the concerned state legislatures must be obtained, and a referendum must be held in the proposed UT area.","No reference need be made to any state legislature; Parliament can act unilaterally upon Presidential recommendation.","A special majority in the Lok Sabha is required to bypass the state legislature."],
        "correctAnswerIndex": 2,
        "explanation": "In the case of a Union territory, no reference need be made to the concerned legislature to ascertain its views and the Parliament can itself take any action as it deems fit."
    },
    {
        "id": "ch6-l3-q4",
        "question": "Consider the historical integration of princely states. While Kashmir and Junagadh are famously known for their controversial integrations, the Nizam of Hyderabad initially signed a temporary agreement with India in November 1947. What was this agreement formally called?",
        "options": ["The Instrument of Accession","The Standstill Agreement","The Treaty of Peace and Friendship","The Subsidiary Alliance Doctrine"],
        "correctAnswerIndex": 1,
        "explanation": "The Nizam of Hyderabad signed a"
    },
    {
        "id": "ch6-l3-q5",
        "question": "Assertion (A): The JVP Committee (1948) formally rejected language as the sole basis for the reorganization of states.\\nReason (R): They believed that linguistic reorganization would encourage sub-nationalism and threaten the tenuous security and unity of the newly independent and partitioned nation.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Reacting to the trauma of partition, the JVP committee (Nehru, Patel, Sitaramayya) prioritized national unity and security over linguistic homogeneity, fearing linguistic sub-nationalism."
    },
    {
        "id": "ch6-l3-q6",
        "question": "The Fazl Ali Commission (1953) broadly accepted language as the basis of reorganization but rejected the",
        "options": ["Creation of Autonomous District Councils under the 6th Schedule universally.","The institution of the Special Officer for Linguistic Minorities under Article 350B.","Mandatory dual-language official status in all state legislatures.","The power of the Supreme Court to redraw district boundaries independently."],
        "correctAnswerIndex": 1,
        "explanation": "To safeguard linguistic minorities in newly reorganized linguistic states, the 7th Constitutional Amendment Act (1956) inserted Article 350B, providing for a Special Officer for Linguistic Minorities appointed by the President."
    },
    {
        "id": "ch6-l3-q7",
        "question": "Under Article 4, laws passed under Article 2 and 3 can contain provisions for the amendment of the First and Fourth Schedules. What is the precise constitutional rationale for amending the",
        "options": ["To allocate the correct share of Central financial grants to the new state.","To reallocate the number of seats in the Rajya Sabha (Council of States) dynamically reflecting the new territorial division.","To redefine the jurisdiction of high courts over the new territories.","To schedule the official languages recognized in the new state."],
        "correctAnswerIndex": 1,
        "explanation": "The Fourth Schedule allocates seats in the Rajya Sabha to states. If a new state is formed, or a state split, the Rajya Sabha seats must be reallocated among the newly formed entities."
    },
    {
        "id": "ch6-l3-q8",
        "question": "Examine the formation of the state of Sikkim. Which of the following constitutional anomalies necessitated the 36th Amendment Act (1975) shortly after the 35th Amendment Act (1974)?",
        "options": ["Sikkim","Associate State","The","status (Article 2A) created a hybrid constitutional entity that disturbed the fundamental symmetry of Indian federalism, leading the Sikkimese people to vote for full integration.","The Supreme Court struck down the 35th Amendment as violative of the Basic Structure.","China officially recognized Sikkim as an Indian","but not a full state, forcing India"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch6-l3-q9",
        "question": "In the ongoing debates regarding the conversion of full states into Union Territories (e.g., Jammu & Kashmir Reorganisation Act, 2019), what is the explicit stance of the Constitution regarding the downgrading of a State to a UT?",
        "options": ["Article 3 explicitly prohibits the downgrading of a full state to a Union Territory.","The Constitution allows it only via an Article 368 parliamentary amendment requiring state ratification.","Article 3 empowers Parliament to form a new Union Territory by uniting any territory to a part of any State or by unilaterally reorganizing state territories.","It requires the unanimous consent of the Inter-State Council."],
        "correctAnswerIndex": 2,
        "explanation": "Article 3 states Parliament may"
    },
    {
        "id": "ch6-l3-q10",
        "question": "Match the following newly created states with the respective Constitutional Amendments or Acts that facilitated their creation/elevation to full statehood:\\nList-I\\nA. Goa\\nB. Mizoram\\nC. Chhattisgarh\\nD. Telangana\\n\\nList-II\\n1. State of Mizoram Act, 1986\\n2. Goa, Daman and Diu Reorganisation Act, 1987\\n3. Madhya Pradesh Reorganisation Act, 2000\\n4. Andhra Pradesh Reorganisation Act, 2014\\n\\nCode (A-B-C-D):",
        "options": ["2-1-3-4","1-2-4-3","2-1-4-3","3-4-1-2"],
        "correctAnswerIndex": 0,
        "explanation": "Goa (GDD Reorg Act 1987, making it the 25th state), Mizoram (State of Mizoram Act 1986), Chhattisgarh (MP Reorg Act 2000), Telangana (AP Reorg Act 2014)."
    },
    {
        "id": "ch6-l3-q11",
        "question": "Consider the constitutional power of Parliament to establish",
        "options": ["Under Article 2, Parliament will admit/establish it as a new state (or UT) since it was not part of the Union previously.","Under Article 3, Parliament will absorb it into an existing coastal state.","Under Article 368, the Constitution must be amended to expand Indian territory.","It automatically becomes a sovereign entity outside Indian jurisdiction."],
        "correctAnswerIndex": 0,
        "explanation": "Article 2 empowers Parliament to admit into the Union, or establish, new states on such terms and conditions as it thinks fit. This applies to newly acquired or unorganized territories NOT presently part of the Union of India."
    },
    {
        "id": "ch6-l3-q12",
        "question": "The JVP Committee (1948) deferred the linguistic reorganization of states, conceding only one major exception a few years later. Which geopolitical movement forced this exception, fundamentally altering India",
        "options": ["The violent Naxalite insurgency in West Bengal.","The fast unto death by Potti Sriramulu for a Telugu-speaking Andhra state.","The armed rebellion in the Naga Hills under A.Z. Phizo.","The plebiscite movement in Junagadh."],
        "correctAnswerIndex": 1,
        "explanation": "The death of Potti Sriramulu in 1952 after a 56-day hunger strike ignited massive violence, forcing the Nehru government to concede the first linguistic state (Andhra) in 1953, setting a precedent that unraveled the JVP consensus."
    },
    {
        "id": "ch6-l3-q13",
        "question": "Which of the following bodies acts fundamentally as the mechanism to resolve inter-state boundary disputes (like the Belagavi dispute between Maharashtra and Karnataka) before they escalate to constitutional crisis or Supreme Court litigation under Article 131?",
        "options": ["The Zonal Councils (established under the States Reorganisation Act, 1956)","The NITI Aayog","The Finance Commission","The Election Commission of India"],
        "correctAnswerIndex": 0,
        "explanation": "The Zonal Councils are statutory bodies established by the States Reorganisation Act of 1956 specifically to discuss and make recommendations regarding matters of common interest, including border disputes, linguistic minorities, and inter-state transport."
    },
    {
        "id": "ch6-l3-q14",
        "question": "When the President refers an Article 3 bill to the state legislatures, is it constitutionally required that the state legislature",
        "options": ["Yes, because it affects the fundamental territorial boundaries of the state.","Yes, under the procedure mandated by Article 368.","No, the Constitution does not specify the majority; normal legislative procedure (simple majority) is sufficient to adopt a resolution expressing views.","No, the views must be expressed solely by the Chief Minister and the Cabinet."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution only requires that the views of the legislature be expressed. It does not mandate a special or absolute majority. A simple majority resolution representing the view of the house is sufficient."
    },
    {
        "id": "ch6-l3-q15",
        "question": "Assertion (A): Executive action is sufficient to settle a boundary dispute between India and a neighboring country, provided it does not involve the outright cession of Indian territory recognized in the Constitution.\\nReason (R): The Supreme Court in 1969 ruled that settlement of a genuine boundary dispute does not attract Article 3 or Article 368.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. In 1969, the SC distinguished between"
    },
    {
        "id": "ch6-l3-q16",
        "question": "With reference to the evolution of states, trace the correct chronological order of their creation as full states:\\n1. Sikkim\\n2. Nagaland\\n3. Haryana\\n4. Meghalaya",
        "options": ["2 - 3 - 4 - 1","3 - 2 - 1 - 4","2 - 4 - 3 - 1","4 - 2 - 3 - 1"],
        "correctAnswerIndex": 0,
        "explanation": "Nagaland (1963) -> Haryana (1966) -> Meghalaya (1972) -> Sikkim (1975)."
    },
    {
        "id": "ch6-l3-q17",
        "question": "Consider the constitutional history of",
        "options": ["The Constituent Assembly via the 7th Schedule.","The National Development Council (NDC) driven by the Gadgil formula.","The First Finance Commission (1951).","The States Reorganisation Commission (Fazl Ali)."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch6-l3-q18",
        "question": "Prior to the 1961 police action (Operation Vijay), Goa, Daman, and Diu were under Portuguese rule. When they were finally integrated into the Indian Union via the 12th Amendment Act (1962), what was their immediate administrative status?",
        "options": ["They were granted full statehood immediately.","They were merged entirely into the neighboring state of Maharashtra.","They were constituted collectively as a single Union Territory.","They were placed under international UN trusteeship."],
        "correctAnswerIndex": 2,
        "explanation": "They were constituted as a single Union Territory (Goa, Daman and Diu) via the 12th Amendment Act in 1962. Goa was later conferred statehood in 1987, while Daman and Diu remained a UT."
    },
    {
        "id": "ch6-l3-q19",
        "question": "The power to",
        "options": ["Madras","Travancore-Cochin","Mysore","Coorg"],
        "correctAnswerIndex": 2,
        "explanation": "The State of Mysore was renamed Karnataka in 1973."
    },
    {
        "id": "ch6-l3-q20",
        "question": "According to the Supreme Court",
        "options": ["Yes, Article 4 explicitly grants this power.","No, Article 3 is strictly limited to adjusting physical territorial boundaries and names, not inventing new fundamental constitutional structures within the state.","Yes, provided the state legislature consents via absolute majority.","No, but the President can do so via Article 356."],
        "correctAnswerIndex": 1,
        "explanation": "Article 3 allows reorganization of boundaries and structures of existing states/UTs. However, inventing an entirely new democratic tier (like local government) required explicit Constitutional Amendments (73rd/74th) because Article 3 does not permit unilateral rewriting of the core federal or democratic architecture of governance within the state."
    },
    {
        "id": "ch6-l3-q21",
        "question": "Examine the Fazl Ali Commission",
        "options": ["To elevate them all to full statehood immediately.","To abolish the category entirely and merge them with neighboring states or retain them as centrally administered territories.","To combine them into a single massive",".","To transfer their administration to the inter-state council."],
        "correctAnswerIndex": 1,
        "explanation": "The SRC recommended abolishing the anomalous Part A, B, C, D classifications, resulting in the merger of Part B states into the broader states framework, and abolishing Part C states to either merge them into neighboring states or reconstitute them as"
    },
    {
        "id": "ch6-l3-q22",
        "question": "Which of the following territories was acquired by the Government of India through a",
        "options": ["Goa","Puducherry","Dadra and Nagar Haveli","Chandigarh"],
        "correctAnswerIndex": 1,
        "explanation": "The French handed over Puducherry (including Karaikal, Mahe, Yanam) to India in 1954. It was administered as an"
    },
    {
        "id": "ch6-l3-q23",
        "question": "Consider the constitutional mechanics of the 100th Amendment Act (LBA 2015). Why was a constitutional amendment strictly required to transfer the enclaves in Assam, West Bengal, Meghalaya, and Tripura to Bangladesh?",
        "options": ["Because Article 3 explicitly bans the alteration of North-Eastern state boundaries.","Because the Supreme Court mandated in 1960 (Berubari) that any shedding of sovereign Indian territory requires an amendment under Article 368.","Because the enclave residents were granted dual citizenship.","Because international treaties cannot be ratified without a concurrent constitutional amendment."],
        "correctAnswerIndex": 1,
        "explanation": "As ruled in the Berubari Union case (1960), the power under Article 3 cannot be used to cede Indian territory to a foreign state. Such an act fundamentally alters the territory of India defined in the First Schedule, necessitating an Article 368 amendment."
    },
    {
        "id": "ch6-l3-q24",
        "question": "In the context of UTs, Article 239A (introduced by the 14th Amendment in 1962) empowers Parliament to create local legislatures or council of ministers for certain Union Territories. Which UT historically benefited from this provision, blurring the line between a UT and a State?",
        "options": ["Chandigarh","Puducherry","Lakshadweep","Andaman and Nicobar Islands"],
        "correctAnswerIndex": 1,
        "explanation": "Article 239A allowed Parliament to create legislatures/councils of ministers for certain UTs. Puducherry was the primary beneficiary initially, obtaining a legislative assembly, granting it a"
    },
    {
        "id": "ch6-l3-q25",
        "question": "Assertion (A): The President",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion (A) is false in an absolute sense because virtually no executive action is entirely immune from judicial review post-Minerva Mills/S.R. Bommai. Reason (R) is true factually; the President acts on cabinet advice for prior recommendations."
    },
    {
        "id": "ch6-l3-q26",
        "question": "Which of the following commissions/committees was explicitly formed to examine the demand for a Punjabi Suba (Punjabi-speaking state), which eventually led to the creation of Punjab and Haryana in 1966?",
        "options": ["Dhar Commission","JVP Committee","Fazl Ali Commission","Shah Commission"],
        "correctAnswerIndex": 3,
        "explanation": "On the recommendation of the Shah Commission (1966), the Punjabi-speaking areas were constituted into the unilingual state of Punjab, while the Hindi-speaking areas became Haryana, and the hill areas merged with Himachal Pradesh."
    },
    {
        "id": "ch6-l3-q27",
        "question": "What unique demographic and constitutional reality makes the administration of",
        "options": ["They are fully sovereign tribal republics outside the Union of India.","They fall outside the jurisdiction of the state","The Governor has special legislative tools to modify or halt the application of ordinary parliamentary acts in these areas to protect tribal autonomy.","They are the only areas where Article 3 cannot apply."],
        "correctAnswerIndex": 2,
        "explanation": "Within the states,"
    },
    {
        "id": "ch6-l3-q28",
        "question": "The power to",
        "options": ["The Fifth Schedule Tribal Councils.","The classification of","via the 7th Amendment (1956).","The Inter-State Council mechanism.","The","category."],
        "correctAnswerIndex": 1,
        "explanation": "The category of"
    },
    {
        "id": "ch6-l3-q29",
        "question": "Consider the linguistic reorganization movement post-1956. While language was the primary basis, which state was notoriously bifurcated in 2014 primarily based on",
        "options": ["Bihar (Jharkhand formation)","Madhya Pradesh (Chhattisgarh formation)","Andhra Pradesh (Telangana formation)","Uttar Pradesh (Uttarakhand formation)"],
        "correctAnswerIndex": 2,
        "explanation": "Andhra Pradesh and Telangana share the same primary language (Telugu). The bifurcation in 2014 was driven by claims of regional economic neglect, unequal resource distribution, and distinct historical trajectories rather than a linguistic divide."
    },
    {
        "id": "ch6-l3-q30",
        "question": "In 2020, through legislation passed in 2019, which two Union Territories were merged into a single Union Territory to reduce administrative duplication?",
        "options": ["Andaman & Nicobar and Lakshadweep","Chandigarh and Delhi","Dadra and Nagar Haveli & Daman and Diu","Puducherry and Lakshadweep"],
        "correctAnswerIndex": 2,
        "explanation": "The Dadra and Nagar Haveli and Daman and Diu (Merger of Union Territories) Act, 2019, merged the two UTs into a single UT effective from January 26, 2020."
    }
];

export const CHAPTER_6_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
