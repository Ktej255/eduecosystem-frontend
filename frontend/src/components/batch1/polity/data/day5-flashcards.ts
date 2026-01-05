// Day 5 Flashcards - Batch 1, 5-6 PM Evening Session
// Topic: Citizenship (Chapter 7)
// Based on M. Laxmikanth's Indian Polity

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY5_FLASHCARDS: Flashcard[] = [
    // ========== MEANING AND SIGNIFICANCE ==========

    {
        id: 'd5-cit-meaning-1',
        front: 'What is the difference between a citizen and an alien?',
        back: 'Citizens are full members of the Indian State, owe allegiance to it, and enjoy all civil and political rights.\n\nAliens are citizens of other states and do NOT enjoy all civil and political rights.',
        category: 'concept',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-meaning-2',
        front: 'What are the two categories of aliens under Indian law?',
        back: '1. Friendly Aliens - Subjects of countries with cordial relations with India\n2. Enemy Aliens - Subjects of a country at war with India (enjoy lesser rights, e.g., no protection under Article 22)',
        category: 'concept',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-meaning-3',
        front: 'List the rights and privileges exclusively available to citizens of India (not to aliens).',
        back: '1. Right against discrimination (Article 15)\n2. Right to equality of opportunity in public employment (Article 16)\n3. Right to freedom under Article 19\n4. Cultural and educational rights (Articles 29 & 30)\n5. Right to vote in Lok Sabha & State Assembly elections\n6. Right to contest for Parliament/State Legislature\n7. Eligibility for offices of President, VP, Judges (SC/HC), Governor, AG, Advocate General',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-meaning-4',
        front: 'Which constitutional positions can ONLY be held by citizens of India?',
        back: '• President of India\n• Vice-President of India\n• Judges of Supreme Court and High Courts\n• Governor of States\n• Attorney General of India\n• Advocate General of States',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-meaning-5',
        front: 'Compare India and USA regarding eligibility for President based on citizenship.',
        back: 'India: Both citizens by birth AND naturalised citizens are eligible for President\n\nUSA: ONLY citizen by birth is eligible (naturalised citizen is NOT eligible)',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },

    // ========== SINGLE CITIZENSHIP ==========

    {
        id: 'd5-cit-single-1',
        front: 'What type of citizenship system does India follow?',
        back: 'Single Citizenship - Only Indian citizenship exists. Citizens owe allegiance ONLY to the Union. There is NO separate state citizenship.',
        category: 'concept',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-single-2',
        front: 'How does the Indian citizenship system differ from the USA?',
        back: 'USA: Dual Citizenship (National + State)\n- Person is citizen of both USA and the particular state\n- Owes allegiance to both, enjoys dual sets of rights\n- Can lead to discrimination by states\n\nIndia: Single Citizenship\n- Only Indian citizenship, no state citizenship\n- All citizens enjoy same rights throughout the country',
        category: 'concept',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-single-3',
        front: 'Which country\'s constitution inspired India\'s single citizenship system?',
        back: 'Canada. Both India and Canada follow the single citizenship system to promote unity and integration.',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-single-4',
        front: 'What are the exceptions to the general rule of non-discrimination among citizens of different states?',
        back: '1. Parliament can prescribe residence requirement for certain jobs (Article 16)\n2. States can give preference to residents (e.g., fee concessions) - Article 15 doesn\'t prohibit residence-based discrimination\n3. Movement/residence can be restricted for Schedule Tribes (Article 19)\n4. Jammu & Kashmir had special provisions until 2019 (Article 35-A)',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-single-5',
        front: 'What was Article 35-A about, and what happened to it?',
        back: 'Article 35-A: Inserted in 1954, gave J&K legislature power to:\n- Define permanent residents\n- Confer special rights on them (employment, property, settlement, scholarships)\n\nAbolished in 2019 by "The Constitution (Application to J&K) Order, 2019" which superseded the 1954 order.',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },

    // ========== CONSTITUTIONAL PROVISIONS (Articles 5-11) ==========

    {
        id: 'd5-cit-const-1',
        front: 'Where are the constitutional provisions on citizenship located?',
        back: 'Part II of the Constitution (Articles 5 to 11).\n\nThese provisions only deal with citizenship at the COMMENCEMENT of the Constitution (January 26, 1950), not acquisition/loss thereafter.',
        category: 'article',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-const-2',
        front: 'What is Article 5 about?',
        back: 'Article 5: Citizenship at Commencement\n\nA person domiciled in India became citizen if:\n(a) Born in India, OR\n(b) Either parent born in India, OR\n(c) Ordinarily resident in India for 5 years before January 26, 1950',
        category: 'article',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-const-3',
        front: 'What is Article 6 about?',
        back: 'Article 6: Rights of Migrants FROM Pakistan\n\nPersons migrating to India from Pakistan became citizens if:\n• Before July 19, 1948 - automatically citizen if ordinarily resident since migration\n• On/after July 19, 1948 - needed registration (6 months residence required)',
        category: 'article',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-const-4',
        front: 'What is significant about July 19, 1948 in citizenship context?',
        back: 'July 19, 1948 is when the PERMIT SYSTEM for migration from Pakistan was introduced.\n\nBefore this date: Automatic citizenship for migrants ordinarily resident since migration\nAfter this date: Registration required with 6 months residence preceding application',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-const-5',
        front: 'What is Article 7 about?',
        back: 'Article 7: Rights of Migrants TO Pakistan\n\nPersons who migrated TO Pakistan after March 1, 1947 are NOT citizens.\n\nException: If they returned to India for resettlement with permit (needed 6 months residence for registration)',
        category: 'article',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-const-6',
        front: 'What is Article 8 about?',
        back: 'Article 8: Rights of Overseas Indians\n\nPerson of Indian origin (they or their parents/grandparents born in undivided India) residing OUTSIDE India could become citizen by registration at Indian consulate.',
        category: 'article',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-const-7',
        front: 'What is Article 9 about?',
        back: 'Article 9: Voluntary Acquisition of Foreign Citizenship\n\nNo person shall be (or deemed to be) a citizen of India if they have VOLUNTARILY acquired citizenship of any foreign state.',
        category: 'article',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-const-8',
        front: 'What is Article 10 about?',
        back: 'Article 10: Continuance of Citizenship\n\nEvery person who is (or deemed to be) a citizen shall continue to be such, subject to provisions of any law made by Parliament.',
        category: 'article',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-const-9',
        front: 'What is Article 11 about?',
        back: 'Article 11: Parliament\'s Power on Citizenship\n\nParliament has the power to make any law regarding:\n• Acquisition of citizenship\n• Termination of citizenship\n• All other matters relating to citizenship\n\nThis led to the Citizenship Act, 1955.',
        category: 'article',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-const-10',
        front: 'What are the four categories of persons who became citizens at the commencement of the Constitution?',
        back: '1. Persons DOMICILED in India (Art. 5)\n2. Persons MIGRATED FROM Pakistan (Art. 6)\n3. Persons MIGRATED TO Pakistan but later returned (Art. 7)\n4. Persons of INDIAN ORIGIN residing OUTSIDE India (Art. 8)',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },

    // ========== CITIZENSHIP ACT, 1955 - ACQUISITION ==========

    {
        id: 'd5-cit-acq-1',
        front: 'What are the FIVE ways of acquiring citizenship under the Citizenship Act, 1955?',
        back: '1. By Birth\n2. By Descent\n3. By Registration\n4. By Naturalisation\n5. By Incorporation of Territory',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-birth-1',
        front: 'What are the rules for citizenship by BIRTH?',
        back: '• Born on/after Jan 26, 1950 BUT before July 1, 1987: Citizen irrespective of parents\' nationality\n\n• Born on/after July 1, 1987 BUT before Dec 3, 2004: Citizen if EITHER parent is citizen\n\n• Born on/after Dec 3, 2004: Citizen if BOTH parents are citizens OR one parent is citizen and other is NOT an illegal migrant',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-birth-2',
        front: 'Who CANNOT acquire citizenship by birth in India?',
        back: '1. Children of FOREIGN DIPLOMATS posted in India\n2. Children of ENEMY ALIENS',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-descent-1',
        front: 'What are the rules for citizenship by DESCENT?',
        back: '• Born outside India on/after Jan 26, 1950 but before Dec 10, 1992: Citizen if FATHER was citizen at time of birth\n\n• Born on/after Dec 10, 1992: Citizen if EITHER parent is citizen\n\n• From Dec 3, 2004: Birth must be REGISTERED at Indian consulate within ONE YEAR',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-descent-2',
        front: 'What happens to a minor who is citizen by descent but also holds citizenship of another country?',
        back: 'The minor must RENOUNCE the citizenship of the other country within SIX MONTHS of attaining full age (18 years), otherwise they cease to be Indian citizen.',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-reg-1',
        front: 'What are the categories eligible for citizenship by REGISTRATION?',
        back: '1. Person of Indian origin - ordinarily resident for 7 years\n2. Person of Indian origin residing outside undivided India\n3. Spouse of Indian citizen - resident for 7 years\n4. Minor children of citizens\n5. Adult whose parents are registered citizens\n6. Earlier citizen of independent India - resident for 12 months\n7. OCI cardholder for 5 years - resident for 12 months',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-reg-2',
        front: 'Who is considered a "Person of Indian Origin"?',
        back: 'A person is deemed to be of Indian origin if he/she, or EITHER of their parents, was born in:\n• Undivided India, OR\n• Such other territory which became part of India after August 15, 1947',
        category: 'concept',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-nat-1',
        front: 'What are the qualifications for citizenship by NATURALISATION?',
        back: '1. Not a citizen of a country that prohibits Indian naturalisation\n2. Renounce foreign citizenship if application accepted\n3. Resided in India for 12 months immediately before application\n4. Resided for 11 years (aggregate) in preceding 14 years\n5. Good character\n6. Knowledge of a language in 8th Schedule\n7. Intention to reside in India or serve Govt/international org',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-nat-2',
        front: 'What changes did the CAA 2019 make to naturalization requirements?',
        back: 'CAA 2019 reduced the aggregate residence requirement from 11 years to 5 years for:\n• Hindu, Sikh, Buddhist, Jain, Parsi or Christian communities\n• From Afghanistan, Bangladesh or Pakistan\n• Who entered India on or before December 31, 2014',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-nat-3',
        front: 'Who can be exempted from naturalization conditions?',
        back: 'Government of India may waive all or any conditions for a person who has rendered DISTINGUISHED SERVICE to:\n• Science\n• Philosophy\n• Art\n• Literature\n• World Peace\n• Human Progress',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-inc-1',
        front: 'How does citizenship work when foreign territory becomes part of India?',
        back: 'By Incorporation of Territory:\n\nGovernment of India specifies which persons from that territory become citizens. They become citizens from the notified date.\n\nExample: Citizenship (Pondicherry) Order, 1962 when Pondicherry became part of India.',
        category: 'fact',
        source: 'Citizenship'
    },

    // ========== SPECIAL PROVISIONS - ASSAM ACCORD ==========

    {
        id: 'd5-cit-assam-1',
        front: 'What special provisions were added by the 1985 Amendment regarding Assam?',
        back: 'Citizenship (Amendment) Act, 1985 - For persons covered by Assam Accord:\n\n1. Came before Jan 1, 1966 from Bangladesh → Deemed citizens from Jan 1, 1966\n\n2. Came between Jan 1, 1966 to March 25, 1971 → Register, then deemed citizen after 10 years (no voting rights during 10 years)',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-assam-2',
        front: 'What is the cut-off date for Assam Accord migration and why is it significant?',
        back: 'March 25, 1971 - The date of the beginning of Bangladesh Liberation War.\n\nPersons entering Assam AFTER March 25, 1971 from Bangladesh are considered FOREIGNERS and not eligible for citizenship under the Assam Accord provisions.',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },

    // ========== CITIZENSHIP AMENDMENT ACT, 2019 ==========

    {
        id: 'd5-cit-caa-1',
        front: 'What is the Citizenship Amendment Act, 2019 (CAA)?',
        back: 'CAA 2019 provides expedited citizenship for persecuted religious minorities:\n\nCommunities: Hindu, Sikh, Buddhist, Jain, Parsi, Christian\n\nCountries: Afghanistan, Bangladesh, Pakistan\n\nCut-off: Entered India on or before December 31, 2014\n\nBenefit: Naturalisation time reduced from 11 years to 5 years\n\nCame into force: January 10, 2020',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-caa-2',
        front: 'What areas are EXCLUDED from CAA 2019?',
        back: 'CAA is NOT applicable to:\n1. Tribal areas of Assam, Meghalaya, Mizoram, Tripura (6th Schedule)\n2. Areas under "Inner Line" permit (Bengal Eastern Frontier Regulation, 1873)',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-caa-3',
        front: 'What was the status of migrants before CAA 2019?',
        back: 'Before CAA 2019, migrants from these communities were considered "illegal migrants" if they entered without valid passport or expired documents.\n\nThey were ineligible for citizenship under the registration or naturalization provisions of the Citizenship Act, 1955.',
        category: 'fact',
        source: 'Citizenship'
    },

    // ========== LOSS OF CITIZENSHIP ==========

    {
        id: 'd5-cit-loss-1',
        front: 'What are the THREE ways of losing Indian citizenship?',
        back: '1. By RENUNCIATION - Voluntary declaration\n2. By TERMINATION - Acquiring foreign citizenship\n3. By DEPRIVATION - Compulsory termination by government',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-loss-2',
        front: 'What is loss of citizenship by RENUNCIATION?',
        back: 'By Renunciation:\n• Any citizen of full age and capacity can declare renouncing citizenship\n• Registration of declaration → cease to be citizen\n• During WAR: Registration can be withheld\n• Minor children also lose citizenship (but can resume at 18 within 1 year)',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-loss-3',
        front: 'What is loss of citizenship by TERMINATION?',
        back: 'By Termination:\n• When Indian citizen VOLUNTARILY acquires citizenship of another country\n• Citizenship automatically terminates\n• Does NOT apply during war in which India is engaged\n• Must be voluntary (consciously, knowingly, without duress)',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-loss-4',
        front: 'What grounds can the Central Government use to DEPRIVE citizenship?',
        back: 'By Deprivation (compulsory termination) if:\n1. Citizenship obtained by FRAUD\n2. DISLOYALTY to Constitution\n3. Unlawful TRADE with enemy during war\n4. IMPRISONED for 2 years within 5 years of registration/naturalisation\n5. ORDINARILY RESIDENT outside India for 7 years continuously',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-loss-5',
        front: 'What is the exception to the 7-year residence rule for deprivation?',
        back: 'The 7-year rule does NOT apply if the person is:\n• A student abroad, OR\n• In service of a Government in India, OR\n• In service of an international organisation of which India is member, OR\n• Has registered annually at Indian consulate their intention to retain citizenship',
        category: 'fact',
        source: 'Citizenship'
    },

    // ========== OVERSEAS CITIZEN OF INDIA (OCI) ==========

    {
        id: 'd5-cit-oci-1',
        front: 'What is Overseas Citizen of India (OCI) Cardholder?',
        back: 'OCI Cardholder scheme (introduced 2005, modified 2015):\n• Merged PIO card and OCI card schemes\n• For persons of Indian origin who are citizens of other countries\n• NOT actual dual citizenship (Constitution forbids it - Article 9)\n• Provides multiple entry lifelong visa and certain rights',
        category: 'concept',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-oci-2',
        front: 'Who is eligible for OCI registration?',
        back: 'Eligible categories:\n1. Was citizen of India at/after Constitution commencement\n2. Was eligible to be citizen on Jan 26, 1950\n3. Belonged to territory that became part of India\n4. Child/grandchild/great grandchild of above\n5. Minor child of above categories\n6. Minor whose both/one parent is Indian citizen\n7. Foreign spouse of Indian citizen/OCI (marriage 2+ years)',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-oci-3',
        front: 'Who is NOT eligible for OCI registration?',
        back: 'A person whose parents, grandparents, or great grandparents is/was a citizen of:\n• Pakistan\n• Bangladesh\n• Any other country specified by Central Government',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-oci-4',
        front: 'What rights are OCI cardholders NOT entitled to?',
        back: 'OCI cardholders CANNOT:\n• Right to equality in public employment (Article 16)\n• Be elected as President or Vice-President\n• Be appointed as SC/HC Judge\n• Register as voter\n• Be member of Parliament or State Legislature\n• Be appointed to public services (except specified posts)',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-oci-5',
        front: 'What benefits do OCI cardholders get?',
        back: 'OCI Benefits:\n1. Multiple entry lifelong visa\n2. No FRRO registration required\n3. Parity with Indians for:\n   - Domestic air fares\n   - National parks/monuments entry fees\n4. Parity with NRIs for:\n   - Property purchase (except agricultural land)\n   - Professional practice (doctors, lawyers, architects, CAs)\n   - Entrance tests (NEET, JEE) for NRI seats',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-oci-6',
        front: 'What activities require special permission for OCI cardholders?',
        back: 'OCI cardholders need special permission for:\n1. Research activities\n2. Missionary/Tabligh work\n3. Mountaineering\n4. Journalistic activities\n5. Internship in foreign diplomatic missions\n6. Employment in foreign diplomatic missions\n7. Visit to Protected/Restricted areas',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-oci-7',
        front: 'On what grounds can OCI registration be cancelled?',
        back: 'OCI registration can be cancelled if:\n1. Obtained by fraud/false representation\n2. Disaffection towards Constitution\n3. Traded with enemy during war\n4. Imprisoned for 2+ years within 5 years of registration\n5. Violated Citizenship Act provisions\n6. Against sovereignty/security/foreign relations\n7. Marriage dissolved or bigamous marriage',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-oci-8',
        front: 'How can an OCI cardholder acquire Indian citizenship?',
        back: 'An OCI cardholder can apply for Indian citizenship by registration if:\n• Registered as OCI for 5 years\n• Ordinarily resident in India for 12 months before application\n\n(Compare: Non-OCI person of Indian origin needs 7 years residence)',
        category: 'fact',
        source: 'Citizenship'
    },

    // ========== COMPARISON: NRI vs PIO vs OCI ==========

    {
        id: 'd5-cit-compare-1',
        front: 'What is the difference between NRI, PIO, and OCI?',
        back: 'NRI: Indian citizen residing abroad, holds Indian passport, all citizen rights\n\nPIO (Person of Indian Origin): Foreign citizen whose ancestor was Indian, no specific benefits (scheme merged into OCI in 2015)\n\nOCI: Foreign citizen of Indian origin, registered as OCI cardholder, specific rights and benefits, not actual citizenship',
        category: 'concept',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-compare-2',
        front: 'Does an NRI require visa to visit India?',
        back: 'NO. NRI is an Indian citizen, so no visa is required.\n\nOCI/PIO needs no visa either as the OCI card serves as a multiple entry lifelong visa.',
        category: 'fact',
        source: 'Citizenship'
    },

    // ========== IMPORTANT TABLES AND LISTS ==========

    {
        id: 'd5-cit-table-1',
        front: 'Summarize the Articles on Citizenship (Articles 5-11).',
        back: 'Art 5: Citizenship at commencement\nArt 6: Migrants FROM Pakistan\nArt 7: Migrants TO Pakistan\nArt 8: Overseas Indians\nArt 9: Voluntary foreign citizenship = lose Indian citizenship\nArt 10: Continuance of citizenship\nArt 11: Parliament\'s power to make laws',
        category: 'article',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-table-2',
        front: 'What are the 8th Schedule languages relevant for naturalization?',
        back: 'Currently 22 languages in 8th Schedule (originally 14):\n\nAssamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santhali, Sindhi, Tamil, Telugu, Urdu',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-oath-1',
        front: 'What oath do registered and naturalised citizens take?',
        back: 'Oath of Allegiance:\n\n"I, A/B do solemnly affirm (or swear) that I will bear true faith and allegiance to the Constitution of India as by law established, and that I will faithfully observe the laws of India and fulfill my duties as a citizen of India."',
        category: 'fact',
        source: 'Citizenship'
    },

    // ========== KEY DATES AND YEARS ==========

    {
        id: 'd5-cit-dates-1',
        front: 'List the important dates related to Citizenship.',
        back: '• Jan 26, 1950: Constitution commencement\n• July 19, 1948: Permit system for Pakistan migrants\n• March 1, 1947: Cut-off for migration TO Pakistan\n• July 1, 1987: Parent citizenship rule begins\n• Dec 10, 1992: Either parent rule for descent\n• Dec 3, 2004: Both parents rule / illegal migrant exclusion\n• Jan 1, 1966 & March 25, 1971: Assam Accord dates\n• Dec 31, 2014: CAA cut-off date\n• Jan 10, 2020: CAA came into force',
        category: 'fact',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-dates-2',
        front: 'What is the significance of March 24, 1971 in Assam NRC context?',
        back: 'March 24, 1971 is the cut-off date for the Assam NRC.\n\nPerson must prove they or their ancestors were in Assam before this date to be included in NRC.\n\nThis is the day before Bangladesh Liberation War began (March 25, 1971).',
        category: 'fact',
        source: 'Citizenship'
    },

    // ========== MISCELLANEOUS IMPORTANT FACTS ==========

    {
        id: 'd5-cit-misc-1',
        front: 'What was the L.M. Singhvi Committee about?',
        back: 'L.M. Singhvi Committee (High Level Committee on Indian Diaspora):\n• Set up in September 2000 by Ministry of External Affairs\n• Report submitted in January 2002\n• Recommended dual citizenship for PIOs\n• Led to the OCI scheme through Citizenship (Amendment) Act, 2003',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-misc-2',
        front: 'When was the PIO card scheme merged with OCI?',
        back: 'January 9, 2015.\n\nCitizenship (Amendment) Act, 2015:\n• Merged PIO and OCI schemes\n• All existing PIO cardholders deemed to be OCI cardholders\n• New nomenclature: "Overseas Citizen of India Cardholder"',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-misc-3',
        front: 'Which Act expired in 1974 regarding residence requirements for employment?',
        back: 'Public Employment (Requirement as to Residence) Act, 1957\n\nThis Act authorised residence requirements for non-gazetted posts in some states. After it expired in 1974, no such provision exists except for Andhra Pradesh and Telangana (under Article 371-D).',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-misc-4',
        front: 'What is the goal of single citizenship system in India?',
        back: 'To promote the feeling of FRATERNITY and UNITY among citizens.\n\nTo build an integrated Indian nation by providing UNIFORM RIGHTS throughout the country.\n\nHowever, the goal hasn\'t been fully realized due to communal riots, caste conflicts, linguistic clashes, etc.',
        category: 'concept',
        source: 'Citizenship'
    },

    // ========== EXAMINATION SPECIFIC FACTS ==========

    {
        id: 'd5-cit-exam-1',
        front: 'Which constitutional amendment abolished special status of J&K?',
        back: 'The Constitution (Application to Jammu and Kashmir) Order, 2019 (Presidential Order)\n\nIssued under Article 370 to supersede the 1954 order and abolish special status.\n\nFollowed by Jammu and Kashmir Reorganisation Act, 2019 which bifurcated J&K into two Union Territories.',
        category: 'fact',
        source: 'Citizenship'
    },
    {
        id: 'd5-cit-exam-2',
        front: 'Can the Constituent Assembly provisions on citizenship (Articles 5-11) be used to determine current citizenship claims?',
        back: 'NO. Articles 5-11 only determined citizenship AT THE COMMENCEMENT of the Constitution (January 26, 1950).\n\nFor citizenship after that date, the Citizenship Act, 1955 (and its amendments) applies under Parliament\'s power in Article 11.',
        category: 'concept',
        source: 'Citizenship',
        highlight: true
    },
    {
        id: 'd5-cit-exam-3',
        front: 'What duties do citizens owe to the Indian State?',
        back: 'Citizens owe certain duties such as:\n• Paying taxes\n• Respecting the national flag\n• Respecting the national anthem\n• Defending the country\n\n(Part IV-A Fundamental Duties also apply only to citizens)',
        category: 'fact',
        source: 'Citizenship'
    }
];

export default DAY5_FLASHCARDS;
