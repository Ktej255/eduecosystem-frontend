import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch90-l1-q1",
        "question": "Which Article of the Indian Constitution directs the State to promote international peace and security?",
        "options": ["Article 14","Article 32","Article 51","Article 368"],
        "correctAnswerIndex": 2,
        "explanation": "Article 51 in the DPSP contains provisions for the promotion of international peace and security."
    },
    {
        "id": "ch90-l1-q2",
        "question": "The",
        "options": ["Pakistan","China","USA","USSR"],
        "correctAnswerIndex": 1,
        "explanation": "It was signed by PM Nehru and Chinese Premier Zhou Enlai in 1954."
    },
    {
        "id": "ch90-l1-q3",
        "question": "The policy of",
        "options": ["Isolation from world affairs.","Neutrality in all wars.","Maintaining independence in foreign policy by not joining any military alliance of the Cold War blocs.","Opposing all other countries."],
        "correctAnswerIndex": 2,
        "explanation": "NAM was about preserving India"
    },
    {
        "id": "ch90-l1-q4",
        "question": "Who is the primary architect of India",
        "options": ["Sardar Patel","Jawaharlal Nehru","Lal Bahadur Shastri","Indira Gandhi"],
        "correctAnswerIndex": 1,
        "explanation": "Nehru served as both PM and Foreign Minister for 17 years."
    },
    {
        "id": "ch90-l1-q5",
        "question": "The",
        "options": ["Global Superpowers.","Immediate Neighbours (non-reciprocal concessions).","African nations.","European Union."],
        "correctAnswerIndex": 1,
        "explanation": "It emphasizes unilateral concessions to smaller neighbours to build trust."
    },
    {
        "id": "ch90-l1-q6",
        "question": "Which of the following is NOT one of the five principles of",
        "options": ["Mutual respect for territorial integrity.","Non-aggression.","Military alliance against threats.","Peaceful co-existence."],
        "correctAnswerIndex": 2,
        "explanation": "Panchsheel is based on peace and non-interference, not military alliances."
    },
    {
        "id": "ch90-l1-q7",
        "question": "The",
        "options": ["Indira Gandhi","P.V. Narasimha Rao","Atal Bihari Vajpayee","Narendra Modi"],
        "correctAnswerIndex": 1,
        "explanation": "It was initiated in 1991 to strengthen ties with SE Asia."
    },
    {
        "id": "ch90-l1-q8",
        "question": "The",
        "options": ["Manmohan Singh","Narendra Modi","Sushma Swaraj","Pranab Mukherjee"],
        "correctAnswerIndex": 1,
        "explanation": "AEP emphasizes more proactive and result-oriented engagement."
    },
    {
        "id": "ch90-l1-q9",
        "question": "Which country is India",
        "options": ["USA","China","Russia (formerly USSR)","UK"],
        "correctAnswerIndex": 2,
        "explanation": "The Indo-Soviet Treaty of 1971 was a landmark in this relationship."
    },
    {
        "id": "ch90-l1-q10",
        "question": "India",
        "options": ["First Strike.","No First Use (NFU).","Nuclear disarmament only.","Testing every year."],
        "correctAnswerIndex": 1,
        "explanation": "India maintains a credible minimum deterrence with a"
    },
    {
        "id": "ch90-l1-q11",
        "question": "The",
        "options": ["China","Pakistan","Bangladesh","Sri Lanka"],
        "correctAnswerIndex": 1,
        "explanation": "Signed between Indira Gandhi and Zulfikar Ali Bhutto after the 1971 war."
    },
    {
        "id": "ch90-l1-q12",
        "question": "India is a founding member of which international organization dedicated to South Asian cooperation?",
        "options": ["ASEAN","SAARC","EU","SCO"],
        "correctAnswerIndex": 1,
        "explanation": "South Asian Association for Regional Cooperation (SAARC) was founded in 1985."
    },
    {
        "id": "ch90-l1-q13",
        "question": "What is the primary objective of India",
        "options": ["Managing borders only.","Strengthening relations and connectivity with immediate neighbours.","Annexing territory.","Exporting weapons."],
        "correctAnswerIndex": 1,
        "explanation": "It prioritizes peripheral nations for stable regional growth."
    },
    {
        "id": "ch90-l1-q14",
        "question": "The",
        "options": ["Railway development.","Repatriation of Indian citizens stranded abroad.","Medical supplies to China.","Cultural exchange."],
        "correctAnswerIndex": 1,
        "explanation": "It showed the"
    },
    {
        "id": "ch90-l1-q15",
        "question": "Does the Indian Parliament have the power to",
        "options": ["Yes, always.","No, the power to make treaties lies with the Executive (President), though some require legislation for implementation.","Only for border treaties.","Only with the SC"],
        "correctAnswerIndex": 1,
        "explanation": "In India, treaty-making is an executive prerogative unlike in the USA."
    },
    {
        "id": "ch90-l1-q16",
        "question": "Which Ministry handles India",
        "options": ["Ministry of Home Affairs","Ministry of External Affairs (MEA)","Ministry of Commerce","Ministry of Defence"],
        "correctAnswerIndex": 1,
        "explanation": "MEA is the nodal ministry for foreign policy."
    },
    {
        "id": "ch90-l1-q17",
        "question": "India",
        "options": ["Post-1991","Early Independence (Nehruvian era)","Post-2014","During British rule"],
        "correctAnswerIndex": 1,
        "explanation": "India was a leader in the struggle against colonialism and racial discrimination globally."
    },
    {
        "id": "ch90-l1-q18",
        "question": "The",
        "options": ["USA","India","Brazil","China"],
        "correctAnswerIndex": 1,
        "explanation": "India hosted the G20 summit under the theme"
    },
    {
        "id": "ch90-l1-q19",
        "question": "What is the",
        "options": ["National Army Mission","Non-Aligned Movement","New Area Management","North Atlantic Mission"],
        "correctAnswerIndex": 1,
        "explanation": "The movement of countries not aligned with any bloc."
    },
    {
        "id": "ch90-l1-q20",
        "question": "Which country does India have the longest land border with?",
        "options": ["China","Pakistan","Bangladesh","Nepal"],
        "correctAnswerIndex": 2,
        "explanation": "The 4,096 km border with Bangladesh is the longest."
    },
    {
        "id": "ch90-l1-q21",
        "question": "Wait. Is India a permanent member of the UN Security Council (UNSC)?",
        "options": ["Yes","No, it is a leading aspirant for a permanent seat.","It was removed in 1962.","It is a member of only the General Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "India is one of the"
    },
    {
        "id": "ch90-l1-q22",
        "question": "The",
        "options": ["Yoga, Bollywood, and Diaspora.","Nuclear missiles.","Army strength.","GDP growth."],
        "correctAnswerIndex": 0,
        "explanation": "Soft power is the ability to attract/co-opt rather than coerce."
    },
    {
        "id": "ch90-l1-q23",
        "question": "Which of the following is a key",
        "options": ["Public opinion and coalition politics.","The distance between states.","The price of gold.","The number of schools."],
        "correctAnswerIndex": 0,
        "explanation": "Foreign policy must balance national interests and domestic political realities."
    },
    {
        "id": "ch90-l1-q24",
        "question": "The",
        "options": ["Afghanistan","Ukraine","Sudan","Israel"],
        "correctAnswerIndex": 1,
        "explanation": "Evacuation during the Russia-Ukraine conflict."
    },
    {
        "id": "ch90-l1-q25",
        "question": "India",
        "options": ["Opposing both.","Maintaining independent and strong relations with both sides based on merit.","Supporting only one.","Ignoring the region."],
        "correctAnswerIndex": 1,
        "explanation": "Strategic balancing without letting one relationship affect the other."
    },
    {
        "id": "ch90-l1-q26",
        "question": "The",
        "options": ["UN","NAM","NATO","BRICS"],
        "correctAnswerIndex": 1,
        "explanation": "The Afro-Asian conference in Bandung laid the principles for NAM."
    },
    {
        "id": "ch90-l1-q27",
        "question": "Wait. Can the",
        "options": ["Yes.","No,","is in the Union List (Entry 10-14).","Only for boundary states.","Only with the CM"],
        "correctAnswerIndex": 1,
        "explanation": "Foreign policy is the exclusive domain of the Central Government."
    },
    {
        "id": "ch90-l1-q28",
        "question": "Which of the following is a forum for",
        "options": ["G7","BRICS","OPEC","Interpol"],
        "correctAnswerIndex": 1,
        "explanation": "Brazil, Russia, India, China, and South Africa (and new members)."
    },
    {
        "id": "ch90-l1-q29",
        "question": "The",
        "options": ["China","Pakistan","Afghanistan","Bangladesh"],
        "correctAnswerIndex": 1,
        "explanation": "Brokered by the World Bank, it survived several wars."
    },
    {
        "id": "ch90-l1-q30",
        "question": "The concept of",
        "options": ["Dependence on one superpower.","The ability of a nation to pursue its national interest and preferred foreign policy without being constrained by other states.","Having a large army.","Being isolated."],
        "correctAnswerIndex": 1,
        "explanation": "It is the modern continuation of the Non-Alignment spirit."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch90-l2-q1",
        "question": "The",
        "options": ["No South Asian nation shall allow its territory to be used against another.","Settling all disputes through bilateral negotiations.","India will provide concessions to small neighbours like Nepal and Bhutan without asking for anything in return.","India will join a military alliance with the USA against China."],
        "correctAnswerIndex": 3,
        "explanation": "Military alliance is contrary to the spirit of the Gujral doctrine and NAM."
    },
    {
        "id": "ch90-l2-q2",
        "question": "Analyze the",
        "options": ["Any international agreement, treaty or convention.","Only those treaties related to trade.","Only those treaties that affect Fundamental Rights.","None of the above."],
        "correctAnswerIndex": 0,
        "explanation": "Parliament can legislate on state list subjects if needed to implement international obligations (Art 253)."
    },
    {
        "id": "ch90-l2-q3",
        "question": "Which of the following describes the",
        "options": ["To export Bollywood movies.","Access to energy resources and checking the influence of other powers in the region.","To build a railway to Moscow.","To promote Buddhism."],
        "correctAnswerIndex": 1,
        "explanation": "Central Asia is rich in uranium and hydrocarbons and is strategically vital for India"
    },
    {
        "id": "ch90-l2-q4",
        "question": "Assertion (A): NAM is not the same as",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Nehru emphasized that India is not"
    },
    {
        "id": "ch90-l2-q5",
        "question": "In the context of",
        "options": ["Having thousands of warheads.","Possessing just enough nuclear capability to prevent an enemy from attacking by making the cost of such attack unacceptable.","Having only tactical nukes.","No nukes at all."],
        "correctAnswerIndex": 1,
        "explanation": "It balances the need for security with the principle of restraint."
    },
    {
        "id": "ch90-l2-q6",
        "question": "Which of the following is a",
        "options": ["Only trade.","Enhanced connectivity (physical, digital, and people-to-people) and security cooperation.","Building a wall on the border.","Leaving SAARC."],
        "correctAnswerIndex": 1,
        "explanation": "AEP is more"
    },
    {
        "id": "ch90-l2-q7",
        "question": "The",
        "options": ["The WHO","PM Narendra Modi in his 2014 UNGA speech","The US President","The Chinese President"],
        "correctAnswerIndex": 1,
        "explanation": "This is a classic example of India using"
    },
    {
        "id": "ch90-l2-q8",
        "question": "Wait. Which",
        "options": ["Karachi Agreement (1949).","Shimla Agreement (1972).","Lahore Declaration (1999).","Indus Waters Treaty."],
        "correctAnswerIndex": 1,
        "explanation": "The Shimla agreement converted the ceasefire line of 1948 into the LoC."
    },
    {
        "id": "ch90-l2-q9",
        "question": "Which",
        "options": ["Monroe Doctrine.","Indira Doctrine (or Indian version of the sphere of influence).","Peaceful Rise.","Gujral Doctrine."],
        "correctAnswerIndex": 1,
        "explanation": "Derived from the 1980s stance, it highlights India"
    },
    {
        "id": "ch90-l2-q10",
        "question": "The",
        "options": ["Japan","India","USA","UK"],
        "correctAnswerIndex": 1,
        "explanation": "Launched by India at the 2019 UN Climate Action Summit."
    },
    {
        "id": "ch90-l2-q11",
        "question": "Does Article 51 of the Constitution mandate the",
        "options": ["Yes.","No, DPSP are not justiciable; international law must be incorporated into domestic law by Parliament to be enforceable in regular courts.","Only for human rights.","Only for environmental law."],
        "correctAnswerIndex": 1,
        "explanation": "India follows a"
    },
    {
        "id": "ch90-l2-q12",
        "question": "The",
        "options": ["South Africa","Brazil","Australia","Canada"],
        "correctAnswerIndex": 1,
        "explanation": "These four nations support each other"
    },
    {
        "id": "ch90-l2-q13",
        "question": "Why did India refuse to sign the",
        "options": ["Because it wanted to make a bomb immediately.","Because the NPT was discriminatory, dividing the world into","and","without a time-bound plan for total disarmament.","Because it was expensive.","Because Pakistan signed it."],
        "correctAnswerIndex": 1,
        "explanation": "India"
    },
    {
        "id": "ch90-l2-q14",
        "question": "The",
        "options": ["UN","NAM","SAARC","None"],
        "correctAnswerIndex": 1,
        "explanation": "The principles were adopted by the NAM at its 1961 Belgrade summit."
    },
    {
        "id": "ch90-l2-q15",
        "question": "The",
        "options": ["UK","Australia","France","South Korea"],
        "correctAnswerIndex": 1,
        "explanation": "It focuses on a"
    },
    {
        "id": "ch90-l2-q16",
        "question": "The",
        "options": ["USA and Canada.","The Gulf countries and West Asia.","Western Europe.","Africa."],
        "correctAnswerIndex": 1,
        "explanation": "Energy security and the welfare of the diaspora are key drivers of Look West."
    },
    {
        "id": "ch90-l2-q17",
        "question": "Is India a member of the",
        "options": ["Yes.","No, its membership is currently blocked (notably by China) despite support from most other members.","It was a member but resigned.","It is the Chairman."],
        "correctAnswerIndex": 1,
        "explanation": "NSG membership is a key goal for India"
    },
    {
        "id": "ch90-l2-q18",
        "question": "The",
        "options": ["China","Bangladesh","Nepal","Bhutan"],
        "correctAnswerIndex": 1,
        "explanation": "Water sharing of the Teesta involves West Bengal and the central government"
    },
    {
        "id": "ch90-l2-q19",
        "question": "During the",
        "options": ["Full scale invasion.","Expelling the intruders WITHOUT crossing the LoC (Strategic restraint).","Banning all trade.","Seeking US intervention."],
        "correctAnswerIndex": 1,
        "explanation": "This restraint won India significant global diplomatic support."
    },
    {
        "id": "ch90-l2-q20",
        "question": "What is the",
        "options": ["Ignoring them.","Seeing the diaspora as","and","in India","Taxing them heavily.","Cancelling their citizenship."],
        "correctAnswerIndex": 1,
        "explanation": "Indians abroad are seen as bridge-builders and sources of investment/remittances."
    },
    {
        "id": "ch90-l2-q21",
        "question": "Wait. Which",
        "options": ["Indo-Nepal Treaty of Peace and Friendship, 1950.","SAARC Charter.","Shimla Agreement.","Panchsheel."],
        "correctAnswerIndex": 0,
        "explanation": "This treaty defines the"
    },
    {
        "id": "ch90-l2-q22",
        "question": "India",
        "options": ["Joining all military blocs.","Engaging with multiple power centres simultaneously on an issue-based approach.","Having no policy.","Opposing everyone."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch90-l2-q23",
        "question": "The",
        "options": ["Pakistan","Maldives","China","UK"],
        "correctAnswerIndex": 1,
        "explanation": "Focuses on maritime security in the Indian Ocean."
    },
    {
        "id": "ch90-l2-q24",
        "question": "The",
        "options": ["UK","UAE","Saudi Arabia","Iran"],
        "correctAnswerIndex": 1,
        "explanation": "India, Israel, USA, UAE - focuses on joint investments in water, energy, health etc."
    },
    {
        "id": "ch90-l2-q25",
        "question": "Is India a member of the",
        "options": ["Yes, full member since 2017.","No, only observer.","It resigned in 2020.","It is the founder."],
        "correctAnswerIndex": 0,
        "explanation": "India and Pakistan joined together in 2017."
    },
    {
        "id": "ch90-l2-q26",
        "question": "The",
        "options": ["Central Asia.","The Indian Ocean Region (IOR).","Africa.","The Himalayas."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch90-l2-q27",
        "question": "Does the",
        "options": ["No.","Yes, the President acts on the advice of the cabinet as per Art 74.","Only if the SC allows.","Only if Parliament votes first."],
        "correctAnswerIndex": 1,
        "explanation": "War and peace are executive decisions under the PM"
    },
    {
        "id": "ch90-l2-q28",
        "question": "Which of the following is an",
        "options": ["Radcliffe Line.","McMahon Line (specifically the Chinese interpretation of it).","Durand Line.","None."],
        "correctAnswerIndex": 1,
        "explanation": "The border with China in the eastern sector is based on the McMahon line which China disputes."
    },
    {
        "id": "ch90-l2-q29",
        "question": "The",
        "options": ["Only European countries.","Former territories of the British Empire (including India).","Nuclear powers.","South Asian nations only."],
        "correctAnswerIndex": 1,
        "explanation": "India"
    },
    {
        "id": "ch90-l2-q30",
        "question": "Which city is known as the",
        "options": ["Geneva","New York","Vienna","New Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "UN Headquarters is in New York."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch90-l3-q1",
        "question": "Analyze the",
        "options": ["Treaties are automatically part of Indian law (Monism).","Treaties are not enforceable in Indian courts unless Parliament enacts a law to give them effect (Dualism); however, the court may use them to interpret domestic law where there is a gap or ambiguity.","Only the President can enforce a treaty.","The Supreme Court can strike down a treaty as unconstitutional if it violates the Basic Structure."],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch90-l3-q2",
        "question": "The",
        "options": ["It did not include trade.","It did not settle the","(LAC) and recognized Tibet as part of China without getting a clear boundary settlement in return.","It did not include the US as a witness.","It was too short."],
        "correctAnswerIndex": 1,
        "explanation": "Critics argue that India lost its"
    },
    {
        "id": "ch90-l3-q3",
        "question": "India",
        "options": ["India became a communist state.","It was a formal","treaty with security clauses that effectively aligned India with a superpower for the 1971 war, though India maintained it was not a",".","India joined the Warsaw Pact.","The USSR joined SAARC."],
        "correctAnswerIndex": 1,
        "explanation": "The treaty provided India with a"
    },
    {
        "id": "ch90-l3-q4",
        "question": "Analyze the",
        "options": ["The President (Supreme Commander).","The Prime Minister.","The National Security Advisor.","The Chief of Defence Staff."],
        "correctAnswerIndex": 1,
        "explanation": "The Political Council is the sole body which can authorize the use of nuclear weapons, and it is chaired by the PM."
    },
    {
        "id": "ch90-l3-q5",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Look East was the foreign policy facet of"
    },
    {
        "id": "ch90-l3-q6",
        "question": "Evaluate the",
        "options": ["Because India is not interested in trade.","Because the CPEC (China-Pakistan Economic Corridor) wing of BRI violates India","Because India has no money to invest.","Because the US blocked India."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch90-l3-q7",
        "question": "The",
        "options": ["India will buy more weapons.","India will provide unilateral concessions to its smaller neighbours without seeking reciprocal gains, to build regional",".","India will allow free movement of soldiers.","India will pay the debts of other countries."],
        "correctAnswerIndex": 1,
        "explanation": "This was a shift from"
    },
    {
        "id": "ch90-l3-q8",
        "question": "Consider",
        "options": ["The Treaty.","The Fundamental Right (The Constitution is the supreme law).","The President decides.","They are balanced equally."],
        "correctAnswerIndex": 1,
        "explanation": "No treaty can override the basic structure or the constitutional rights of the citizens unless the Constitution itself is amended."
    },
    {
        "id": "ch90-l3-q9",
        "question": "The",
        "options": ["Signing of a nuclear deal.","Exchange of","(LBA - Land Boundary Agreement) with Bangladesh to settle the border dispute.","Annexation of a new state.","Banning trade with Pakistan."],
        "correctAnswerIndex": 1,
        "explanation": "It settled a 41-year-old boundary issue, improving relations with Bangladesh significantly."
    },
    {
        "id": "ch90-l3-q10",
        "question": "Analyze the",
        "options": ["Earlier India only supported Israel.","Historically, India","India has left both Palestine and Israel.","There is no change."],
        "correctAnswerIndex": 1,
        "explanation": "De-hyphenation allows India to collaborate with Israel on tech/security while maintaining its historical support for the Palestinian cause."
    },
    {
        "id": "ch90-l3-q11",
        "question": "What is the",
        "options": ["Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation; It is seen as an alternative to SAARC (excluding Pakistan).","British India Maritime Security Treaty; focuses on colonisation.","Bharat Internal Movement system.","None."],
        "correctAnswerIndex": 0,
        "explanation": "BIMSTEC bridges South Asia and SE Asia and is increasingly the focus of India"
    },
    {
        "id": "ch90-l3-q12",
        "question": "Analysis of Art 51(c).",
        "options": ["Yes.","No, the wording","usually implies Sovereign States or Nations in diplomatic parlance.","Only for multi-national corporations.","Only for tourists."],
        "correctAnswerIndex": 1,
        "explanation": "Art 51 is about"
    },
    {
        "id": "ch90-l3-q13",
        "question": "Review the",
        "options": ["To start a war.","To break the nuclear monopoly and force the world to recognize India","To use up old uranium.","To impress the USA."],
        "correctAnswerIndex": 1,
        "explanation": "Pokhran-II established India as a"
    },
    {
        "id": "ch90-l3-q14",
        "question": "The",
        "options": ["Act East.","Neighbourhood First (Connectivity aspect).","Look West.","Connect Central Asia."],
        "correctAnswerIndex": 1,
        "explanation": "Connectivity is the"
    },
    {
        "id": "ch90-l3-q15",
        "question": "Assertion (A): The President of India is the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Constitutional supremacy over the military ensures that foreign policy remains an instrument of democratic will."
    },
    {
        "id": "ch90-l3-q16",
        "question": "Analysis of",
        "options": ["Yes.","No, extradition is part of specific bilateral treaties and the",".","Only for terrorists.","Only for economic offenders."],
        "correctAnswerIndex": 1,
        "explanation": "Art 51 covers the broad principles of peace and law, not specific criminal procedures."
    },
    {
        "id": "ch90-l3-q17",
        "question": "The",
        "options": ["Nuclear weapons technology.","A unique waiver to conduct","despite being a non-signatory to the NPT.","The right to test more bombs.","US fighter jets."],
        "correctAnswerIndex": 1,
        "explanation": "This deal ended India"
    },
    {
        "id": "ch90-l3-q18",
        "question": "Evaluate the",
        "options": ["By selling vaccines at the highest price.","By sharing India-made COVID-19 vaccines with over 90 countries as a global humanitarian duty before fulfilling all domestic demands.","By charging for vaccines in advance.","By giving vaccines only to G20 members."],
        "correctAnswerIndex": 1,
        "explanation": "This promoted India as a"
    },
    {
        "id": "ch90-l3-q19",
        "question": "Which of the following describes the",
        "options": ["G7 is only for Asia; G20 is for Europe.","G7 is a club of advanced liberal democracies; G20 is a broader forum including emerging economies (EMEs) like India for global economic stability.","There is no difference.","Only G7 can impose sanctions."],
        "correctAnswerIndex": 1,
        "explanation": "G20 represents 85% of global GDP and 75% of global trade."
    },
    {
        "id": "ch90-l3-q20",
        "question": "The",
        "options": ["Gwadar Port.","Chabahar Port (Iran).","Sittwe Port (Myanmar).","Colombo Port."],
        "correctAnswerIndex": 1,
        "explanation": "Chabahar is India"
    },
    {
        "id": "ch90-l3-q21",
        "question": "Review the",
        "options": ["Panchsheel Agreement.","Indo-Bhutan Treaty of Friendship (1949/Revised 2007).","SAARC Charter.","UN Charter."],
        "correctAnswerIndex": 1,
        "explanation": "The revised treaty (2007) gives Bhutan more autonomy while maintaining close coordination."
    },
    {
        "id": "ch90-l3-q22",
        "question": "Analysis of",
        "options": ["No.","Yes, Art 51(d) encourages",".","Only for trade disputes.","Only for boundary disputes."],
        "correctAnswerIndex": 1,
        "explanation": "This shows the constitutional preference for peaceful resolution over conflict."
    },
    {
        "id": "ch90-l3-q23",
        "question": "Has India the power to",
        "options": ["Yes.","No, the Supreme Court ruled in the","case (1960) that ceding territory requires an amendment under Art 368.","Only if it","Only if the PM decides."],
        "correctAnswerIndex": 1,
        "explanation": "Settling a"
    },
    {
        "id": "ch90-l3-q24",
        "question": "The",
        "options": ["USA","France","China","Japan"],
        "correctAnswerIndex": 1,
        "explanation": "Launched at COP21 by PM Modi and President Hollande."
    },
    {
        "id": "ch90-l3-q25",
        "question": "Consider the",
        "options": ["Because China was not a member.","Concerns over",", specifically the protection of domestic industry and dairy sector from cheap Chinese imports.","Because it wanted as higher seat at the table.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Economic sovereignty prevailed over the regional integration goal in this instance."
    },
    {
        "id": "ch90-l3-q26",
        "question": "Wait. Is",
        "options": ["Yes, it","No.","Only since 2014.","Only for Asian countries."],
        "correctAnswerIndex": 0,
        "explanation": "Ensuring a"
    },
    {
        "id": "ch90-l3-q27",
        "question": "The",
        "options": ["NRI (Non-Resident Indians).","PIO (Person of Indian Origin).","OCI (Overseas Citizen of India).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Different levels of engagement exist based on the legal status of the diaspora."
    },
    {
        "id": "ch90-l3-q28",
        "question": "Does India support a",
        "options": ["Yes, but with","governance that reflects contemporary realities (Multilateralism).","No, India supports anarchy.","Only for maritime trade.","None."],
        "correctAnswerIndex": 0,
        "explanation": "India seeks to be a"
    },
    {
        "id": "ch90-l3-q29",
        "question": "The",
        "options": ["Lack of interest.","The","role of one member state (Pakistan) leading to paralysis of the organisation.","Because SAARC is too expensive.","None."],
        "correctAnswerIndex": 1,
        "explanation": "India now prefers BIMSTEC or BBIN sub-regional groups."
    },
    {
        "id": "ch90-l3-q30",
        "question": "Who summarized India",
        "options": ["External Affairs Minister.","The PM.","Various scholars and diplomats (It is the standard definition).","The President."],
        "correctAnswerIndex": 2,
        "explanation": "It reflects the blend of realism and idealism in Indian diplomacy."
    }
];

export const CHAPTER_90_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
