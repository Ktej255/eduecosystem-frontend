export interface CurrentAffairItem {
    id: string;
    title: string;
    description: string;
    subject: 'Ancient History' | 'Medieval History' | 'Modern History' | 'Polity' | 'Economy' | 'Geography' | 'Science' | 'Environment' | 'IR';
    date: string; // YYYY-MM-DD
    month: string; // 'January', 'February', etc.
    tags: string[];
    source?: string;
    chapter?: number; // Linked chapter number for filtering
    related_topic_id?: string; // Optional link for Geography/other subjects
}

export const CURRENT_AFFAIRS_DATA: CurrentAffairItem[] = [
    {
        id: '1',
        title: 'New Excavations at Vadnagar',
        description: 'ASI finds evidence of cultural continuity spanning 3000 years. Significant for Ancient History.',
        subject: 'Ancient History',
        date: '2024-01-15',
        month: 'January',
        tags: ['Art & Culture', 'ASI', 'Ancient India'],
        chapter: 3 // e.g. Harappan/Vedic or relevant chapter
    },
    {
        id: '1b',
        title: 'Quit India Movement Anniversary',
        description: 'PM pays homage to freedom fighters. Retracing the events of 1942.',
        subject: 'Modern History',
        date: '2024-08-09',
        month: 'August',
        tags: ['Modern History', 'Freedom Struggle'],
        chapter: 34 // Quit India Movement
    },
    {
        id: '2',
        title: 'Supreme Court on Article 370',
        description: 'SC upholds the abrogation of Article 370, stating it was a temporary provision.',
        subject: 'Polity',
        date: '2023-12-11',
        month: 'December',
        tags: ['Constitution', 'Supreme Court', 'J&K'],
        chapter: 25 // Centre-State Relations / Special Provisions
    },
    {
        id: '3',
        title: 'Interim Budget 2024 Highlights',
        description: 'Focus on fiscal deficit reduction and infrastructure capex. No changes in tax slabs.',
        subject: 'Economy',
        date: '2024-02-01',
        month: 'February',
        tags: ['Budget', 'Fiscal Policy', 'Infrastructure'],
        chapter: 12 // Budgeting
    },
    {
        id: '4',
        title: 'Post-Office Bill 2023',
        description: 'Parliament passes bill to replace 125-year-old Indian Post Office Act.',
        subject: 'Polity',
        date: '2023-12-20',
        month: 'December',
        tags: ['Legislation', 'Governance'],
        chapter: 22 // Parliament / Legislation
    },
    {
        id: '5',
        title: 'Red Sea Crisis & Trade Impact',
        description: 'Houthi attacks impact shipping routes. India increases naval presence.',
        subject: 'IR',
        date: '2024-01-30',
        month: 'January',
        tags: ['Trade', 'Security', 'West Asia']
    },
    {
        id: '6',
        title: 'Snow Leopard Survey',
        description: 'First scientific survey puts India\'s snow leopard count at 718. Ladakh leads.',
        subject: 'Environment',
        date: '2024-01-30',
        month: 'January',
        tags: ['Biodiversity', 'Conservation', 'Species'],
        chapter: 5 // Biodiversity
    },
    {
        id: '7',
        title: 'Maratha Military Landscapes',
        description: 'India nominates the "Maratha Military Landscapes" for UNESCO World Heritage List for 2024-25.',
        subject: 'Medieval History',
        date: '2024-01-29',
        month: 'January',
        tags: ['UNESCO', 'Marathas', 'Culture'],
        chapter: 10 // Marathas
    },
    {
        id: '8',
        title: 'Aditya-L1 Reaches L1 Point',
        description: 'ISRO\'s solar mission successfully inserted into Halo Orbit around L1.',
        subject: 'Science',
        date: '2024-01-06',
        month: 'January',
        tags: ['Space', 'ISRO', 'Solar Mission'],
        chapter: 8 // Space Technology
    },
    // CHAPTER 1: Sources for the Modern History of Modern India
    {
        id: '95',
        title: 'Central Vista Project & National Archives Digitisation',
        description: 'The National Archives of India (NAI) is undergoing massive digitisation under the Central Vista project. NAI is an attached office under the Ministry of Culture, preserving crucial records like the "Home Political" series.',
        subject: 'Modern History',
        date: '2024-02-15',
        month: 'February',
        tags: ['NAI', 'Central Vista', 'Archives'],
        chapter: 1
    },
    // Ancient History Integrations
    {
        id: '101',
        title: 'ASI Restorations in South-East Asia',
        description: 'Recent ASI restorations of temples in "My Son" (Vietnam) and "Ta Prohm" (Cambodia) highlight India\'s cultural diplomacy, conserving laterite and sandstone structures reflecting historical Indianization.',
        subject: 'Ancient History',
        date: '2024-03-10',
        month: 'March',
        tags: ['Art & Culture', 'ASI', 'Southeast Asia'],
        chapter: 25
    },
    {
        id: '102',
        title: 'Act East Policy and Ancient Ties',
        description: 'India\'s Act East Policy frequently revives historical narratives of peaceful "Indianization" via the spread of Sanskrit, Buddhism, and maritime trade across ASEAN nations.',
        subject: 'IR',
        date: '2024-04-15',
        month: 'April',
        tags: ['Act East Policy', 'ASEAN', 'Soft Power'],
        chapter: 25
    },
    {
        id: '103',
        title: 'Rakhigarhi Excavations and Aryan Ancestry',
        description: 'DNA analysis from Rakhigarhi suggests local genetic continuity for Harappans, intensifying debates around the Aryan Migration theory and indigenous origins.',
        subject: 'Ancient History',
        date: '2023-10-12',
        month: 'October',
        tags: ['IVC', 'Genetics', 'Rakhigarhi'],
        chapter: 6
    },
    {
        id: '104',
        title: 'Untouchability Debates and Early Medieval History',
        description: 'Modern discourse on Dalit rights often revisits the extreme ritual purity measures (like un-seeability) formulated during India\'s early medieval transition.',
        subject: 'Medieval History',
        date: '2024-05-20',
        month: 'May',
        tags: ['Social Justice', 'Caste', 'Historiography'],
        chapter: 26
    },
    {
        id: '96',
        title: 'Renaming of NMML to Prime Ministers’ Museum and Library (PMML)',
        description: 'The Nehru Memorial Museum and Library (NMML) has been renamed to the Prime Ministers’ Museum and Library (PMML) Society, housing papers of eminent INC leaders and non-official archives.',
        subject: 'Modern History',
        date: '2023-08-14',
        month: 'August',
        tags: ['PMML', 'NMML', 'Archives'],
        chapter: 1
    },
    {
        id: '97',
        title: 'Digitisation of Pre-Independence Judicial Records',
        description: 'The Supreme Court of India is leading a push to digitise pre-independence judicial records, including those from the Mayor’s Courts and the Supreme Court of Bengal.',
        subject: 'Modern History',
        date: '2024-01-20',
        month: 'January',
        tags: ['Judicial Archives', 'Supreme Court', 'Digitisation'],
        chapter: 1
    },
    {
        id: '98',
        title: 'Centenary of the 1920s Reforms Office Records',
        description: 'The Reforms Office records (1920–1937) at the National Archives are gaining renewed researcher interest as major 1920s historical events reach their centenaries.',
        subject: 'Modern History',
        date: '2024-03-01',
        month: 'March',
        tags: ['Reforms Office', 'Constitutional Modern History', 'Centenary'],
        chapter: 1
    },
    // CHAPTER 4: Expansion & Consolidation
    {
        "id": '9',
        "title": 'India\'s Missile Defense Shield',
        "description": 'DRDO tests new missile tech. Traces lineage to Mysorean rockets used by Hyder Ali & Tipu Sultan.',
        "subject": 'Modern History',
        "date": '2024-03-15',
        "month": 'March',
        "tags": ['Defense', 'Technology', 'Mysore'],
        "chapter": 4
    },
    {
        "id": '10',
        "title": 'Blue Economy & Naval Doctrine',
        "description": 'Navy unveils new maritime strategy. Context: Rise of regional naval powers like Marathas (Angres) & Travancore.',
        "subject": 'Modern History',
        "date": '2023-12-04',
        "month": 'December',
        "tags": ['Navy', 'Blue Economy', 'Marathas'],
        "chapter": 4
    },
    {
        "id": '11',
        "title": 'Afghanistan Humanitarian Crisis',
        "description": 'India sends wheat aid. Historical context: Third Battle of Panipat & Durrani Empire.',
        "subject": 'IR',
        "date": '2024-02-20',
        "month": 'February',
        "tags": ['Afghanistan', 'Geopolitics', 'Durrani'],
        "chapter": 4
    },
    // CHAPTER 5: Expansion & Consolidation II
    {
        "id": '12',
        "title": 'Strategic Autonomy vs Alliances',
        "description": 'EAM Jaishankar on India\'s foreign policy. Contrast with Subsidiary Alliance system of 18th century.',
        "subject": 'IR',
        "date": '2024-02-25',
        "month": 'February',
        "tags": ['Foreign Policy', 'Strategic Autonomy', 'Subsidiary Alliance'],
        "chapter": 5
    },
    {
        "id": '13',
        "title": 'Kalapani-Lipulekh Dispute',
        "description": 'PM visits Adi Kailash. Nepal raises objection. Roots in Treaty of Sagauli (1816).',
        "subject": 'IR',
        "date": '2023-11-15',
        "month": 'November',
        "tags": ['Nepal', 'Border Dispute', 'Treaty of Sagauli'],
        "chapter": 5
    },
    {
        "id": '14',
        "title": 'Act East Policy & Myanmar',
        "description": 'Kaladan Multi-Modal Project delays. Historical context: First Anglo-Burmese War & Treaty of Yandabo.',
        "subject": 'IR',
        "date": '2024-01-10',
        "month": 'January',
        "tags": ['Myanmar', 'Connectivity', 'North East'],
        "chapter": 5
    },
    // CHAPTER 6: People's Resistance
    {
        "id": '15',
        "title": 'Tribal Pride Day (Janjatiya Gaurav Divas)',
        "description": 'Celebrated on Birsa Munda\'s birth anniversary. Highlights tribal freedom fighters (Santhals, Kols).',
        "subject": 'Modern History',
        "date": '2023-11-15',
        "month": 'November',
        "tags": ['Tribals', 'Culture', 'Freedom Struggle'],
        "chapter": 6
    },
    {
        "id": '16',
        "title": 'Paika Bidroha Recognition',
        "description": 'Debate on declaring Paika Bidroha (1817) as the First War of Independence.',
        "subject": 'Modern History',
        "date": '2023-12-20',
        "month": 'December',
        "tags": ['Odisha', 'Paika', 'Modern History'],
        "chapter": 6
    },
    {
        "id": '17',
        "title": 'ULFA Peace Accord',
        "description": 'Tripartite agreement signed. Roots of insurgency traced back to colonial resistance in Assam (Gomdhar Konwar).',
        "subject": 'IR',
        "date": '2023-12-29',
        "month": 'December',
        "tags": ['North East', 'Insurgency', 'Peace Accord'],
        "chapter": 6
    },
    // CHAPTER 7: The Revolt of 1857
    {
        "id": '18',
        "title": '1857 Memorials & Narratives',
        "description": 'PM pays tribute at First War of Independence Memorial. Contrast with British-era Residency monuments.',
        "subject": 'Modern History',
        "date": '2024-05-10',
        "month": 'May',
        "tags": ['1857 Revolt', 'Culture', 'Monuments'],
        "chapter": 7
    },
    {
        "id": '19',
        "title": 'Savarkar & 1857 Historiography',
        "description": 'Renewed academic interest in V.D. Savarkar\'s "The Indian War of Independence 1857".',
        "subject": 'Modern History',
        "date": '2024-02-26',
        "month": 'February',
        "tags": ['Historiography', 'Savarkar', 'Books'],
        "chapter": 7
    },
    {
        "id": '20',
        "title": 'Army Regiment Histories',
        "description": 'Army Day parade highlights. Tracing lineage of regiments raised post-1857 (Peel Commission).',
        "subject": 'Modern History',
        "date": '2024-01-15',
        "month": 'January',
        "tags": ['Army', 'Defense', 'Martial Races'],
        "chapter": 7
    },
    // CHAPTER 8: Reform Movements
    {
        "id": '21',
        "title": 'Women\'s Reservation Bill (Nari Shakti Vandan)',
        "description": 'Historic bill passed. Tracing the struggle for women\'s rights from Vidyasagar and Karve to today.',
        "subject": 'Polity',
        "date": '2023-09-21',
        "month": 'September',
        "tags": ['Women', 'Parliament', 'Reform'],
        "chapter": 8
    },
    {
        "id": '22',
        "title": 'Dayanand Saraswati 200th Birth Anniversary',
        "description": 'PM addresses the celebration. Highlights Arya Samaj\'s contribution to education and nationalism.',
        "subject": 'Modern History',
        "date": '2024-02-12',
        "month": 'February',
        "tags": ['Arya Samaj', 'Culture', 'Anniversary'],
        "chapter": 8
    },
    {
        "id": '23',
        "title": 'Social Justice & Phule Jayanti',
        "description": 'Celebrations of Jyotiba Phule\'s birth anniversary. Focus on Satyashodhak Samaj and caste reform.',
        "subject": 'Modern History',
        "date": '2024-04-11',
        "month": 'April',
        "tags": ['Social Justice', 'Caste', 'Phule'],
        "chapter": 8
    },
    // CHAPTER 9: Pre-Congress Nationalism
    {
        "id": '24',
        "title": 'Diaspora Engagement',
        "description": 'PM addresses Indian diaspora. Parallels with Dadabhai Naoroji\'s East India Association in London.',
        "subject": 'IR',
        "date": '2023-11-20',
        "month": 'November',
        "tags": ['Diaspora', 'Soft Power', 'Dadabhai'],
        "chapter": 9
    },
    {
        "id": '25',
        "title": 'Civil Society Regulations',
        "description": 'FCRA amendments debated. Role of voluntary associations (like Poona Sarvajanik Sabha) in democracy.',
        "subject": 'Polity',
        "date": '2024-03-05',
        "month": 'March',
        "tags": ['NGO', 'Civil Society', 'Regulation'],
        "chapter": 9
    },
    {
        "id": '26',
        "title": 'Role of Press in Democracy',
        "description": 'World Press Freedom Day. Remembering the fight against Vernacular Press Act (1878).',
        "subject": 'Polity',
        "date": '2024-05-03',
        "month": 'May',
        "tags": ['Press Freedom', 'Media', 'Modern History'],
        "chapter": 9
    },
    // CHAPTER 10: Swadeshi & Boycott
    {
        "id": '27',
        "title": 'National Handloom Day (Aug 7)',
        "description": 'Commemorates the launch of Swadeshi Movement in 1905. Focus on Vocal for Local.',
        "subject": 'Economy',
        "date": '2023-08-07',
        "month": 'August',
        "tags": ['Swadeshi', 'Handloom', 'Economy'],
        "chapter": 10
    },
    {
        "id": '28',
        "title": 'Sri Aurobindo 150th Anniversary',
        "description": 'PM releases commemorative coin. Highlights Aurobindo\'s role in Swadeshi and spiritual nationalism.',
        "subject": 'Modern History',
        "date": '2023-12-15',
        "month": 'December',
        "tags": ['Aurobindo', 'Philosophy', 'Culture'],
        "chapter": 10
    },
    {
        "id": '29',
        "title": 'Vande Mataram Controversy',
        "description": 'Political debate on the song. Historical context: Adopted as the anthem of the Swadeshi movement.',
        "subject": 'Polity',
        "date": '2024-01-24',
        "month": 'January',
        "tags": ['Vande Mataram', 'National Song', 'Modern History'],
        "chapter": 10
    },
    // CHAPTER 11: Revolutionary Activities
    {
        "id": '30',
        "title": 'Netaji Subhash Chandra Bose 125th Anniversary',
        "description": 'Parakram Diwas. Remembering the legacy of armed struggle (Rashbehari Bose & INA connection).',
        "subject": 'Modern History',
        "date": '2023-01-23',
        "month": 'January',
        "tags": ['Netaji', 'INA', 'Modern History'],
        "chapter": 11
    },
    {
        "id": '31',
        "title": 'Jallianwala Bagh Memorial Renovation',
        "description": 'PM inaugurates renovated complex. Link to Ghadar movement and Rowlatt Act context.',
        "subject": 'Modern History',
        "date": '2023-04-13',
        "month": 'April',
        "tags": ['Jallianwala Bagh', 'Punjab', 'Memorial'],
        "chapter": 11
    },
    {
        "id": '32',
        "title": 'Veer Savarkar Airport (Port Blair)',
        "description": 'New terminal inaugurated. Debate on Savarkar\'s role in freedom struggle (Cellular Jail).',
        "subject": 'Polity',
        "date": '2023-07-18',
        "month": 'July',
        "tags": ['Savarkar', 'Andaman', 'Airport'],
        "chapter": 11
    },
    // CHAPTER 12: Home Rule & Lucknow Pact
    {
        "id": '33',
        "title": 'Lokmanya Tilak National Award',
        "description": 'PM Modi conferred with the award. Highlights Tilak\'s legacy of "Swaraj" and modern India.',
        "subject": 'Modern History',
        "date": '2023-08-01',
        "month": 'August',
        "tags": ['Tilak', 'Awards', 'Swaraj'],
        "chapter": 12
    },
    {
        "id": '34',
        "title": 'Centenary of Belgaum Session',
        "description": 'Commemorating the only Congress session presided over by Mahatma Gandhi (1924), but linking to Tilak\'s Home Rule launch in Belgaum (1916).',
        "subject": 'Modern History',
        "date": '2024-12-26',
        "month": 'December',
        "tags": ['Congress', 'Gandhi', 'Belgaum'],
        "chapter": 12
    },
    {
        "id": '35',
        "title": 'Annie Besant & Education Legacy',
        "description": 'BHU celebrations. Besant\'s role in Central Hindu College and women\'s rights.',
        "subject": 'Modern History',
        "date": '2023-10-01',
        "month": 'October',
        "tags": ['Education', 'BHU', 'Besant'],
        "chapter": 12
    },
    // CHAPTER 13: Jallianwala Bagh & Rowlatt Act
    {
        "id": '36',
        "title": 'Pravasi Bharatiya Divas',
        "description": 'Celebrated on Jan 9. Commemorates Gandhi\'s return from South Africa (1915).',
        "subject": 'Modern History',
        "date": '2023-01-09',
        "month": 'January',
        "tags": ['Diaspora', 'Gandhi', 'Modern History'],
        "chapter": 13
    },
    {
        "id": '37',
        "title": 'Jallianwala Bagh Smarak',
        "description": 'Renovation controversies and PM\'s tribute. 104th anniversary of the massacre.',
        "subject": 'Modern History',
        "date": '2023-04-13',
        "month": 'April',
        "tags": ['Memorial', 'Punjab', 'Freedom Struggle'],
        "chapter": 13
    },
    {
        "id": '38',
        "title": 'Champaran Satyagraha Centenary',
        "description": 'Reflections on the first Civil Disobedience movement. Swachhagraha campaign link.',
        "subject": 'Modern History',
        "date": '2017-04-10',
        "month": 'April',
        "tags": ['Champaran', 'Gandhi', 'Peasantry'],
        "chapter": 13
    },
    // CHAPTER 14: Non-Cooperation & Khilafat
    {
        "id": '39',
        "title": 'Centenary of Chauri Chaura Incident',
        "description": 'PM Modi inaugurated the centenary celebrations. Emphasized the importance of "Saheed" (Martyrs) in the freedom struggle.',
        "subject": 'Modern History',
        "date": '2021-02-04',
        "month": 'February',
        "tags": ['Martyrs', 'Gorakhpur', 'Centenary'],
        "chapter": 14
    },
    {
        "id": '40',
        "title": 'AITUC Centenary Celebrations',
        "description": 'Trade unions across India celebrate 100 years of the All India Trade Union Congress, founded by Lala Lajpat Rai.',
        "subject": 'Modern History',
        "date": '2020-10-31',
        "month": 'October',
        "tags": ['Labor', 'Centenary', 'Lajpat Rai'],
        "chapter": 14
    },
    {
        "id": '41',
        "title": 'Moplah Centenary Debate',
        "description": 'Controversies regarding the character of the 1921 rebellion. Debate on adding/removing rebel names from the Dictionary of Martyrs.',
        "subject": 'Modern History',
        "date": '2021-08-20',
        "month": 'August',
        "tags": ['Malabar', 'Rebellion', 'Martyrs'],
        "chapter": 14
    },
    // CHAPTER 15: Swarajists & Revolutionary Phase II
    {
        "id": '42',
        "title": 'Kakori Train Action Centenary',
        "description": 'UP Government renamed the "Kakori Train Robbery" to "Kakori Train Action". Centenary events celebrating Bismil and Ashfaqullah.',
        "subject": 'Modern History',
        "date": '2025-08-09',
        "month": 'August',
        "tags": ['Revolutionaries', 'UP', 'Centenary'],
        "chapter": 15
    },
    {
        "id": '43',
        "title": 'Bhagat Singh Memorials & Artifacts',
        "description": 'Launch of digital archives of Bhagat Singh\'s writings. Debate on "Shaheed" status in government records.',
        "subject": 'Modern History',
        "date": '2023-03-23',
        "month": 'March',
        "tags": ['Bhagat Singh', 'Martyrs', 'Digital India'],
        "chapter": 15
    },
    {
        "id": '44',
        "title": 'Chittagong Armoury Raid Centennial',
        "description": 'Commemorative events for Surya Sen and the women revolutionaries (Pritilata, Kalpana) of the 1930 raid.',
        "subject": 'Modern History',
        "date": '2030-04-18',
        "month": 'April',
        "tags": ['Surya Sen', 'Women', 'Freedom'],
        "chapter": 15
    },
    // CHAPTER 16: Simon Commission & Nehru Report
    {
        "id": '45',
        "title": 'Constitution Day (Samvidhan Divas) and Nehru Report',
        "description": 'National events on Nov 26 emphasize the Nehru Report of 1928 as the first indigenous attempt to draft an Indian Constitution.',
        "subject": 'Modern History',
        "date": '2024-11-26',
        "month": 'November',
        "tags": ['Constitution', 'Nehru Report', 'Samvidhan Divas'],
        "chapter": 16
    },
    {
        "id": '46',
        "title": 'Martyrdom Centenary of Lala Lajpat Rai',
        "description": 'Upcoming events in 2028 to mark the centenary of his martyrdom during Simon Commission protests. Statues refurbished in Lahore and India.',
        "subject": 'Modern History',
        "date": '2028-11-17',
        "month": 'November',
        "tags": ['Lala Lajpat Rai', 'Centenary', 'Simon Commission'],
        "chapter": 16
    },
    {
        "id": '47',
        "title": 'Purna Swaraj Celebration Records',
        "description": 'Digitalization of rare archival footage showing the first Independence Day celebrations of Jan 26, 1930, across various Indian cities.',
        "subject": 'Modern History',
        "date": '2025-01-26',
        "month": 'January',
        "tags": ['Purna Swaraj', 'Archives', 'Lahore Session'],
        "chapter": 16
    },
    // CHAPTER 17: Civil Disobedience Movement
    {
        "id": '48',
        "title": 'Dandi March Memorial and National Salt Satyagraha Memorial',
        "description": 'The memorial at Dandi (Gujarat) is seeing increased tourism and educational visits, highlighting the digital restoration of 1930 footage.',
        "subject": 'Modern History',
        "date": '2024-04-06',
        "month": 'April',
        "tags": ['Dandi March', 'Memorial', 'Salt Satyagraha'],
        "chapter": 17
    },
    {
        "id": '49',
        "title": 'Poona Pact Anniversary: Gandhi-Ambedkar Dialogue',
        "description": 'Annual lectures on Sept 24 discuss the Poona Pact 1932 and its contribution to the modern-day reservation system in Indian legislature.',
        "subject": 'Modern History',
        "date": '2024-09-24',
        "month": 'September',
        "tags": ['Poona Pact', 'Ambedkar', 'Gandhi'],
        "chapter": 17
    },
    {
        "id": '50',
        "title": 'Khudai Khidmatgar Movement Exhibition',
        "description": 'A multi-city exhibition on Frontier Gandhi (Khan Abdul Ghaffar Khan) focusing on his non-violent struggle in the NWFP (now in Pakistan).',
        "subject": 'Modern History',
        "date": '2024-06-15',
        "month": 'June',
        "tags": ['Frontier Gandhi', 'Red Shirts', 'NWFP'],
        "chapter": 17
    },
    // CHAPTER 18: Government of India Act 1935
    {
        "id": '51',
        "title": 'RBI Foundation Day and its Historical Roots',
        "description": 'Celebrations on April 1 highlight the RBIs establishment in 1935 based on the Hilton Young Commission and the GOI Act 1935 framework.',
        "subject": 'Economy',
        "date": '2024-04-01',
        "month": 'April',
        "tags": ['RBI', 'Banking Modern History', 'GOI Act 1935'],
        "chapter": 18
    },
    {
        "id": '52',
        "title": '75 Years of Supreme Court: Link to Federal Court 1937',
        "description": 'Commemorative events tracing the evolution of the Indian judiciary from the Federal Court (set up under 1935 Act) to the current Supreme Court.',
        "subject": 'Polity',
        "date": '2025-01-28',
        "month": 'January',
        "tags": ['Supreme Court', 'Federal Court', 'Judiciary'],
        "chapter": 18
    },
    // CHAPTER 19: Congress Ministries (1937-1939)
    {
        "id": '53',
        "title": '85 years of the National Planning Committee (NPC)',
        "description": 'Reflecting on the 1938 Haripura Session where Subhash Bose set up the NPC, which became the blueprint for the Planning Commission of India.',
        "subject": 'Economy',
        "date": '2023-12-15',
        "month": 'December',
        "tags": ['Planning', 'NPC', 'Haripura'],
        "chapter": 19
    },
    {
        "id": '54',
        "title": 'Nai Talim (Basic Education) in Modern Context',
        "description": 'UNESCO and educational bodies discuss the relevance of Mahatma Gandhi’s 1937 Wardha Scheme (Nai Talim) for skill-based education in NEP 2020.',
        "subject": 'Polity',
        "date": '2024-10-02',
        "month": 'October',
        "tags": ['Nai Talim', 'Wardha Scheme', 'Education Reform'],
        "chapter": 19
    },
    // CHAPTER 20: World War II & Nationalist Response (1939-1942)
    {
        "id": '55',
        "title": 'Netaji Subhash Chandra Bose: 127th Birth Anniversary & INA Legacy',
        "description": 'Naming 21 islands in Andaman & Nicobar after Param Vir Chakra awardees, continuing the legacy of Netaji’s 1943 Provisional Govt of Azad Hind.',
        "subject": 'Modern History',
        "date": '2024-01-23',
        "month": 'January',
        "tags": ['Netaji', 'INA', 'Parakram Diwas'],
        "chapter": 20
    },
    {
        "id": '56',
        "title": 'Individual Satyagraha & Digital Free Speech Debates',
        "description": 'Constitutional experts link the 1940 Satyagraha (Right to anti-war expression) with modern challenges to digital dissent and Article 19(1)(a).',
        "subject": 'Polity',
        "date": '2024-08-15',
        "month": 'August',
        "tags": ['Free Speech', 'Article 19', 'Individual Satyagraha'],
        "chapter": 20
    },
    // CHAPTER 21: Quit India Movement (1942-1945)
    {
        "id": '57',
        "title": '82nd Anniversary of Quit India Movement: Lessons for Governance',
        "description": 'National leaders commemorate August 8 (August Kranti Diwas), emphasizing the role of mass spontaneity and the "Do or Die" spirit in shaping modern Indian democracy.',
        "subject": 'Modern History',
        "date": '2024-08-08',
        "month": 'August',
        "tags": ['Quit India', 'August Kranti', 'Mass Movement'],
        "chapter": 21
    },
    {
        "id": '58',
        "title": 'JP Narayan: The Legacy of Total Revolution and 1942',
        "description": 'Political analysts discuss the legacy of Jayaprakash Narayan, linking his 1942 underground resistance with his later role in the 1970s movement for restoring constitutional values.',
        "subject": 'Polity',
        "date": '2024-10-11',
        "month": 'October',
        "tags": ['JP Narayan', 'Total Revolution', 'Underground Movement'],
        "chapter": 21
    },
    // CHAPTER 22: Post-War National Response
    {
        "id": '59',
        "title": 'Red Fort Trials: A Landmark in Military Jurisprudence',
        "description": 'Legal seminars in 2024 highlight the 1945 INA trials as a turning point where "Superior Orders" defense was debated, influencing modern military legal frameworks.',
        "subject": 'Polity',
        "date": '2024-11-05',
        "month": 'November',
        "tags": ['INA Trials', 'Military Law', 'Red Fort'],
        "chapter": 22
    },
    {
        "id": '60',
        "title": 'RIN Mutiny: The Forgotten Naval Uprising of 1946',
        "description": 'Naval historians and veterans commemorate the Feb 18 uprising, calling for its formal inclusion in mainstream naval Modern History as a "Final Stroke" for independence.',
        "subject": 'Modern History',
        "date": '2024-02-18',
        "month": 'February',
        "tags": ['RIN Mutiny', 'Naval Modern History', 'Indian Navy'],
        "chapter": 22
    },
    // CHAPTER 23: Constitutional, Administrative and Judicial Developments
    {
        "id": '61',
        "title": 'Centenary of the Lee Commission (1924-2024)',
        "description": 'Civil services forums in 2024 discuss the legacy of the Lee Commission on the "Indianization" of superior services and its impact on the modern IAS structure.',
        "subject": 'Modern History',
        "date": '2024-03-15',
        "month": 'March',
        "tags": ['Lee Commission', 'Civil Services', 'ICS'],
        "chapter": 23
    },
    {
        "id": '62',
        "title": 'Judicial Review: From Colonial Roots to Basic Structure',
        "description": 'A recent legal symposium explored how the evolution of High Courts (1861) and the Federal Court (1935) laid the groundwork for the modern Indian judiciary’s power of judicial review.',
        "subject": 'Polity',
        "date": '2024-06-20',
        "month": 'June',
        "tags": ['Judiciary', 'High Courts', 'Constitutional Modern History'],
        "chapter": 23
    },
    // CHAPTER 24: Survey of British Policies in India
    {
        "id": '63',
        "title": 'NEP 2020: From Sargent Plan (1944) to Modern India',
        "description": 'Educational analysts in 2024 draw parallels between the Sargent Plan’s goal of universal literacy and the NEP 2020’s target of 100% Gross Enrolment Ratio in school education.',
        "subject": 'Modern History',
        "date": '2024-07-29',
        "month": 'July',
        "tags": ['NEP 2020', 'Sargent Plan', 'Literacy'],
        "chapter": 24
    },
    {
        "id": '64',
        "title": 'Centenary of Aliah University Building (Calcutta Madrasah)',
        "description": 'The historic building of Aliah University, once the Calcutta Madrasah founded by Warren Hastings in 1781, underwent a heritage conservation project in 2024.',
        "subject": 'Modern History',
        "date": '2024-09-12',
        "month": 'September',
        "tags": ['Calcutta Madrasah', 'Heritage', 'Warren Hastings'],
        "chapter": 24
    },
    {
        "id": '65',
        "title": 'Supreme Court stay on Sedition Law (Section 124A)',
        "description": 'The Supreme Court of India recently kept the colonial-era sedition law (Section 124A of IPC) in abeyance. Historically, this section was inserted in 1870 and used to convict Bal Gangadhar Tilak for his writings in Kesari.',
        "subject": 'Modern History',
        "date": '2024-05-11',
        "month": 'May',
        "tags": ['Sedition', 'Tilak', 'Section 124A', 'Press Freedom'],
        "chapter": 25
    },
    {
        "id": '66',
        "title": 'Regulation of Digital Media & Press Freedom',
        "description": 'Ongoing debates in 2024 regarding the regulation of OTT and digital news platforms draw parallels to the Licensing Regulations of 1823 and the Vernacular Press Act of 1878.',
        "subject": 'Modern History',
        "date": '2024-10-15',
        "month": 'October',
        "tags": ['Press Freedom', 'Digital Media', 'Vernacular Press Act'],
        "chapter": 25
    },
    {
        "id": '67',
        "title": '163rd Birth Anniversary of Rabindranath Tagore',
        "description": 'Celebrated across India and the world in May 2024, highlighting his contribution to the Gitanjali and his unique role in linking Indian spiritualism with global humanity.',
        "subject": 'Modern History',
        "date": '2024-05-07',
        "month": 'May',
        "tags": ['Tagore', 'Gitanjali', 'Literature'],
        "chapter": 26
    },
    {
        "id": '68',
        "title": 'Conservation of Munshi Premchand’s Ancestral Home',
        "description": "A new government initiative in 2024 aims to preserve the ancestral house of Munshi Premchand in Lamhi, Varanasi, recognizing his role in pioneering 'Realism' in Hindi literature.",
        "subject": 'Modern History',
        "date": '2024-07-31',
        "month": 'July',
        "tags": ['Premchand', 'Hindi Literature', 'Heritage'],
        "chapter": 26
    },
    {
        "id": '69',
        "title": 'Repatriation of 100+ Indian Antiquities from USA',
        "description": 'In 2024, the US government returned over 100 stolen antiquities to India, including idols from the Chola and Pala periods, emphasizing the importance of preserving Indian art heritage.',
        "subject": 'Ancient History',
        "date": '2024-09-20',
        "month": 'September',
        "tags": ['Art Heritage', 'Antiquities', 'Chola Art'],
        "chapter": 27
    },
    {
        "id": '70',
        "title": 'Inauguration of the New Parliament Building Gallery',
        "description": "The new Parliament building in Delhi features galleries celebrating India's 5000-year-old artistic journey, contrasting with the Lutyens-Baker design of the old complex.",
        "subject": 'Modern History',
        "date": '2024-01-15',
        "month": 'January',
        "tags": ['Architecture', 'Parliament', 'Delhi'],
        "chapter": 27
    },
    {
        "id": '71',
        "title": '200th Birth Anniversary of Swami Dayanand Saraswati',
        "description": "Celebrated in 2024, commemorating his role as the founder of Arya Samaj and his emphasize on 'Krinvanto Vishwam Aryam' (Make the World Noble).",
        "subject": 'Modern History',
        "date": '2024-02-12',
        "month": 'February',
        "tags": ['Dayanand Saraswati', 'Arya Samaj', 'Reformers'],
        "chapter": 28
    },
    {
        "id": '72',
        "title": 'Jyotiba Phule’s Legacy and the Caste Census Debates',
        "description": "In 2024, the socio-political debates on the Caste Census in India draw extensively from Jyotiba Phule's 19th-century critiques of social hierarchy and his demand for 'Bahujan' representation.",
        "subject": 'Modern History',
        "date": '2024-04-11',
        "month": 'April',
        "tags": ['Jyotiba Phule', 'Social Justice', 'Caste'],
        "chapter": 28
    },
    {
        "id": '73',
        "title": 'Centenary Celebrations of Vaikom Satyagraha (1924-2024)',
        "description": "The year 2024 marks the 100th anniversary of the Vaikom Satyagraha, Kerala's first major movement for temple-entry rights, which saw participation from Gandhi, Periyar, and various social reform groups.",
        "subject": 'Modern History',
        "date": '2024-03-30',
        "month": 'March',
        "tags": ['Vaikom Satyagraha', 'Temple Entry', 'Kerala Modern History'],
        "chapter": 29
    },
    {
        "id": '74',
        "title": 'Recent SGPC Elections and the Sikh Gurudwara Act',
        "description": "Discussions in 2024 regarding the autonomy of the Shiromani Gurdwara Parbandhak Committee (SGPC) highlight the enduring significance of the Sikh Gurudwaras Act of 1925, born from the Akali Movement.",
        "subject": 'Modern History',
        "date": '2024-11-10',
        "month": 'November',
        "tags": ['SGPC', 'Akali Movement', 'Sikh Modern History'],
        "chapter": 29
    },
    {
        "id": '75',
        "title": 'Historical Analysis of Mappila Rebellion in 2024',
        "description": "Recent research and public debates in 2024 revisit the Mappila Rebellion of 1921, examining its agrarian roots versus communal narratives in the light of new archival findings.",
        "subject": 'Modern History',
        "date": '2024-08-20',
        "month": 'August',
        "tags": ['Mappila Rebellion', 'Agrarian Modern History', 'Kerala'],
        "chapter": 30
    },
    {
        "id": '76',
        "title": 'Modern Farmer Movements and Historical Precedents',
        "description": "The 2024 farmer protests in India are being compared by historians to 19th-century agrarian struggles, emphasizing the long-term continuity of peasant demands for fair pricing and debt relief.",
        "subject": 'Modern History',
        "date": '2024-02-15',
        "month": 'February',
        "tags": ['Farmer Protests', 'Peasant Movements', 'Agrarian Crisis'],
        "chapter": 30
    },
    {
        "id": '77',
        "title": 'Centenary of the First May Day in India (1923-2023)',
        "description": "May 2023 marked the 100th anniversary of the first May Day celebration in India, organized by Singaravelar Chettiar in Madras. Modern labor unions revisited this Modern History to mobilize against the new labor codes.",
        "subject": 'Modern History',
        "date": '2023-05-01',
        "month": 'May',
        "tags": ['May Day', 'Labour Movements', 'Singaravelar Chettiar'],
        "chapter": 31
    },
    {
        "id": '78',
        "title": 'Code on Wages, 2020: Historical Context of Labor Rights',
        "description": "Legal experts in 2024 are analyzing the 'Code on Wages' in the light of the 1920s labor struggles, debating whether the consolidation of laws simplifies or dilutes the protections won during the national movement.",
        "subject": 'Modern History',
        "date": '2024-06-10',
        "month": 'June',
        "tags": ['Labour Laws', 'Code on Wages', 'Worker Rights'],
        "chapter": 31
    },
    {
        "id": '79',
        "title": 'Federalism and Provincial Autonomy: Lessons from 1937',
        "description": "In 2024, constitutional experts revisited the 1937 provincial elections to draw parallels with current debates on State-Centre relations and the role of Governors, highlighting the long-standing tension in India's federal structure.",
        "subject": 'Modern History',
        "date": '2024-03-20',
        "month": 'March',
        "tags": ['Federalism', 'Provincial Autonomy', 'Governor Powers'],
        "chapter": 32
    },
    {
        "id": '80',
        "title": 'Centenary of Legislative Reforms in Social Justice',
        "description": "State assemblies in 2024 reflected on early 20th-century social legislations, like the 1939 Temple Entry Act in Madras, to evaluate the progress of inclusive governance and the eradication of caste-based discrimination in the modern era.",
        "subject": 'Modern History',
        "date": '2024-07-15',
        "month": 'July',
        "tags": ['Social Reform', 'Temple Entry', 'Legislative Modern History'],
        "chapter": 32
    },
    {
        "id": '81',
        "title": 'Freedom of Speech vs. War Censorship: 1940 and Now',
        "description": "In 2024, constitutional debates in various democratic nations have drawn parallels with the 'Individual Satyagraha' of 1940, evaluating the limits of dissent during national emergencies and the evolution of the right to free speech.",
        "subject": 'Modern History',
        "date": '2024-05-12',
        "month": 'May',
        "tags": ['Free Speech', 'Civil Liberties', 'Individual Satyagraha'],
        "chapter": 33
    },
    {
        "id": '82',
        "title": 'Commemorating the "Great Escape" of Netaji Subhas Chandra Bose',
        "description": "January 2024 saw nationwide events commemorating the 83rd anniversary of Bose's escape from Calcutta. Historians emphasized the strategic brilliance of his journey through Afghanistan and its impact on the later INA struggle.",
        "subject": 'Modern History',
        "date": '2024-01-16',
        "month": 'January',
        "tags": ['Subhas Chandra Bose', 'Forward Bloc', 'Indian National Army'],
        "chapter": 33
    },
    {
        "id": '83',
        "title": 'Digital Archive of Parallel Government Records (1942)',
        "description": "A new digital initiative in 2024 has archived records from the 'Prati Sarkar' of Satara and 'Jatiya Sarkar' of Tamluk, providing scholars with fresh insights into the administrative experiments of 1942.",
        "subject": 'Modern History',
        "date": '2024-04-05',
        "month": 'April',
        "tags": ['Quit India', 'Parallel Government', 'Digital Archives'],
        "chapter": 34
    },
    {
        "id": '84',
        "title": 'Commemorating the 80th Anniversary of the Azad Hind Sarkar',
        "description": "Government events in late 2023 and early 2024 commemorated the 80th anniversary of the formation of the Provisional Government of Free India in Singapore, highlighting its role in the global decolonization movement.",
        "subject": 'Modern History',
        "date": '2023-10-21',
        "month": 'October',
        "tags": ['Azad Hind Sarkar', 'INA', 'Decolonization'],
        "chapter": 34
    },
    {
        "id": '85',
        "title": 'Declassification of Radcliffe Commission Correspondence',
        "description": "In 2024, newly declassified letters from Sir Cyril Radcliffe's aides have shed light on the immense administrative pressure and political compromises made during the five-week partition of Punjab and Bengal.",
        "subject": 'Modern History',
        "date": '2024-08-14',
        "month": 'August',
        "tags": ['Partition', 'Radcliffe Line', 'Declassification'],
        "chapter": 35
    },
    {
        "id": '86',
        "title": 'Modern Reflections on Partition Horrors Remembrance Day',
        "description": "The observation of Partition Horrors Remembrance Day in August 2024 sparked nationwide discussions on preserving oral histories of survivors and building a more nuanced understanding of the 1947 migration.",
        "subject": 'Modern History',
        "date": '2024-08-14',
        "month": 'August',
        "tags": ['Partition', 'Remembrance Day', 'Oral Modern History'],
        "chapter": 35
    },
    {
        "id": '87',
        "title": '70th Anniversary of the Panchsheel Agreement',
        "description": "In June 2024, the 70th anniversary of the Panchsheel Agreement (1954) was commemorated, highlighting its historical role in India-China relations despite current border challenges.",
        "subject": 'Modern History',
        "date": '2024-06-28',
        "month": 'June',
        "tags": ['Panchsheel', 'India-China', 'Diplomacy'],
        "chapter": 36
    },
    {
        "id": '88',
        "title": 'India\'s "Strategic Autonomy" in a Multipolar World',
        "description": "Foreign policy experts in 2024 have drawn parallels between Nehru\'s Non-Alignment and India\'s modern policy of 'Multi-alignment' or Strategic Autonomy, as India navigates complex global polarities.",
        "subject": 'Modern History',
        "date": '2024-10-10',
        "month": 'October',
        "tags": ['NAM', 'Strategic Autonomy', 'Foreign Policy'],
        "chapter": 36
    },
    {
        "id": '89',
        "title": 'Revival of the "Simultaneous Elections" Debate in 2024',
        "description": "The high-level committee report on 'One Nation, One Election' in 2024 sparked discussions on India's electoral Modern History, specifically referencing the first four general elections where simultaneous polls were the standard practice.",
        "subject": 'Modern History',
        "date": '2024-03-15',
        "month": 'March',
        "tags": ['ONOE', 'Elections', 'Logistics'],
        "chapter": 37
    },
    {
        "id": '90',
        "title": 'Centenary of the Indelible Ink Discovery',
        "description": "In 2024, the role of the National Physical Laboratory in developing the indelible ink used in 1952 was celebrated as a milestone in India's 'Atmanirbhar' journey in electoral technology.",
        "subject": 'Modern History',
        "date": '2024-05-20',
        "month": 'May',
        "tags": ['Indelible Ink', 'Innovation', 'Elections'],
        "chapter": 37
    },
    {
        "id": '91',
        "title": '70th Anniversary of the Bhabha Atomic Research Centre',
        "description": "In 2024, the legacies of Homi J. Bhabha and Nehru were revisited during the platinum jubilee celebrations of India's atomic energy department, highlighting the 'Scientific Temper' mission of the 1950s.",
        "subject": 'Modern History',
        "date": '2024-01-03',
        "month": 'January',
        "tags": ['DAE', 'Nuclear Energy', 'Science'],
        "chapter": 38
    },
    {
        "id": '92',
        "title": 'National Space Day: Honoring the INCOSPAR Foundation',
        "description": "India's first National Space Day in 2024 paid tribute to the 1962 establishment of INCOSPAR by Nehru and Vikram Sarabhai, which laid the foundation for the successful Chandrayaan missions.",
        "subject": 'Modern History',
        "date": '2024-08-23',
        "month": 'August',
        "tags": ['ISRO', 'Space', 'INCOSPAR'],
        "chapter": 38
    },
    {
        "id": '93',
        "title": '120th birth anniversary of Lal Bahadur Shastri',
        "description": "In October 2024, the nation celebrated the 120th birth anniversary of India's second PM, revisiting his 'Jai Jawan Jai Kisan' legacy and his role in the 1965 war and the White Revolution.",
        "subject": 'Modern History',
        "date": '2024-10-02',
        "month": 'October',
        "tags": ['Shastri', 'Jai Jawan Jai Kisan', 'Anniversary'],
        "chapter": 39
    },
    {
        "id": '94',
        "title": 'Release of Declassified Documents on the 1965 War',
        "description": "New historical analyses in 2024 using declassified documents have shed light on the tactical brilliance of the Battle of Asal Uttar and the strategic implications of the Tashkent Declaration.",
        "subject": 'Modern History',
        "date": '2024-09-10',
        "month": 'September',
        "tags": ['1965 War', 'Asal Uttar', 'Declassification'],
        "chapter": 39
    }
];


export const SUBJECT_FILTERS = ['All', 'Modern History', 'Medieval History', 'Ancient History', 'Polity', 'Economy', 'Environment', 'Science', 'Geography', 'IR'];
export const MONTH_FILTERS = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const GEOGRAPHY_CURRENT_AFFAIRS: CurrentAffairItem[] = [
    {
        id: 'ca-geo-001',
        title: "Cyclone Dana Makes Landfall in Odisha — October 2025",
        description: "Very Severe Cyclonic Storm 'Dana' struck the Odisha coast near Bhitarkanika. Pre-monsoon warming of the Bay of Bengal creates favorable conditions for cyclogenesis.",
        subject: 'Geography',
        date: "2025-10-25",
        month: "October",
        tags: ['Cyclone', 'Climatology', 'Bay of Bengal', 'Disaster Management'],
        source: "IMD",
        related_topic_id: 'tropical-cyclones'
    },
    {
        id: 'ca-geo-002',
        title: "El Niño Transition to ENSO Neutral",
        description: "The strong 2023-24 El Niño shifted to ENSO-neutral, potentially transitioning to La Niña. Shows the dynamic nature of Walker Circulation.",
        subject: 'Geography',
        date: "2024-04-12",
        month: "April",
        tags: ['El Nino', 'ENSO', 'Climatology', 'Monsoon'],
        source: "WMO",
        related_topic_id: 'atmospheric-circulation'
    },
    {
        id: 'ca-geo-003',
        title: "Iceland Volcanic Eruptions on Reykjanes Peninsula",
        description: "Multiple fissure eruptions occurred as magma breached the surface along the Mid-Atlantic Ridge, highlighting divergent plate boundary activity.",
        subject: 'Geography',
        date: "2024-03-16",
        month: "March",
        tags: ['Volcano', 'Geomorphology', 'Plate Tectonics'],
        source: "IMO",
        related_topic_id: 'volcanism'
    },
    {
        id: 'ca-geo-004',
        title: "Great Barrier Reef Mass Bleaching",
        description: "A severe mass coral bleaching event triggered by abnormal sea surface temperatures. Links to ocean acidification and marine ecological vulnerability.",
        subject: 'Geography',
        date: "2024-04-05",
        month: "April",
        tags: ['Coral Reef', 'Oceanography', 'Marine Ecology'],
        source: "GBRMPA",
        related_topic_id: 'coral-reefs'
    },
    {
        id: 'ca-geo-005',
        title: "Suez Canal Drought & Red Sea Maritime Issues",
        description: "Combined impact of Panama Canal drought and Red Sea security altering global shipping routes, emphasizing importance of maritime choke points.",
        subject: 'Geography',
        date: "2024-01-20",
        month: "January",
        tags: ['Maritime', 'Trade Routes', 'Economic Geography'],
        source: "SCA",
        related_topic_id: 'transport-trade'
    },
    // --- 24-Month High-Yield Extension (March 2024 - March 2026) ---
    {
        id: 'ca-2024-001',
        title: 'IndiaAI Mission Launch',
        description: 'Union Cabinet approved the IndiaAI Mission with a budget of ₹10,300 crore. Components include IndiaAI Compute Capacity (10,000+ GPUs), IndiaAI Innovation Centre for LMMs, and IndiaAI Datasets Platform.',
        subject: 'Science',
        date: '2024-03-07',
        month: 'March',
        tags: ['AI', 'Technology', 'Digital India'],
        chapter: 10
    },
    {
        id: 'ca-2024-002',
        title: 'EU Net-Zero Industry Act',
        description: 'The EU Parliament adopted the Net-Zero Industry Act to scale up clean tech manufacturing. Significant for global trade and India\'s exports under the CBAM framework.',
        subject: 'Environment',
        date: '2024-04-25',
        month: 'April',
        tags: ['Climate Action', 'Clean Tech', 'Trade'],
        chapter: 12
    },
    {
        id: 'ca-2024-003',
        title: 'NASA-ISRO NISAR Satellite Milestone',
        description: 'The NISAR satellite, a joint venture between NASA and ISRO, moved closer to launch. It features a dual-frequency L and S band radar for high-resolution Earth mapping.',
        subject: 'Science',
        date: '2024-05-15',
        month: 'May',
        tags: ['Space', 'ISRO', 'NASA'],
        chapter: 8
    },
    {
        id: 'ca-2024-004',
        title: 'Union Budget 2024-25: Angel Tax Abolition',
        description: 'In a major move for the startup ecosystem, the government abolished the "Angel Tax" for all classes of investors, aiming to boost capital flow into innovative ventures.',
        subject: 'Economy',
        date: '2024-07-23',
        month: 'July',
        tags: ['Budget', 'Startups', 'Taxation'],
        chapter: 12
    },
    {
        id: 'ca-2024-005',
        title: 'India-UK CETA Negotiations Finalized',
        description: 'Negotiations finalized for CETA (Comprehensive Economic and Trade Agreement), granting duty-free access to 99% of Indian exports including textiles, leather, and gems.',
        subject: 'IR',
        date: '2025-01-10',
        month: 'January',
        tags: ['Trade', 'Economy', 'UK-India'],
        chapter: 5
    },
    {
        id: 'ca-2025-001',
        title: 'New Income Tax Act, 2025',
        description: 'A complete overhaul of the 1961 Act, prioritizing simplified language, removed obsolete provisions, and streamlined litigation processes.',
        subject: 'Economy',
        date: '2025-02-01',
        month: 'February',
        tags: ['Taxation', 'Direct Tax', 'Reforms'],
        chapter: 12
    },
    {
        id: 'ca-2025-002',
        title: 'Nuclear Energy Mission: Small Modular Reactors (SMRs)',
        description: 'Government announced a dedicated mission for SMRs, aiming to operationalize five decentralized nuclear reactors within 8 years to ensure energy security.',
        subject: 'Science',
        date: '2025-03-05',
        month: 'March',
        tags: ['Nuclear Energy', 'Clean Tech', 'Innovation'],
        chapter: 7
    },
    {
        id: 'ca-2025-003',
        title: 'COP30 (Belem, Brazil) & NCQG',
        description: 'The 30th UNFCCC summit focused on the "New Collective Quantified Goal" (NCQG) for climate finance, with India advocating for equitable historical responsibility.',
        subject: 'Environment',
        date: '2025-11-20',
        month: 'November',
        tags: ['Climate Change', 'UNFCCC', 'COP30'],
        chapter: 12
    },
    {
        id: 'ca-2026-001',
        title: 'State of India\'s Environment 2026 Report',
        description: 'CSE report highlighted that 2025 saw extreme weather events on 99% of days. Significant losses in agriculture and human lives were recorded across the Himalayas.',
        subject: 'Environment',
        date: '2026-01-15',
        month: 'January',
        tags: ['Climate Change', 'Reports', 'Vulnerability'],
        chapter: 11
    },
    {
        id: 'ca-2026-002',
        title: 'Gaganyaan-1 Launch Preparation',
        description: 'ISRO finalized the crew module for the first manned mission, expected soon in 2026. Focus on the Crew Escape System and ECLSS.',
        subject: 'Science',
        date: '2026-02-12',
        month: 'February',
        tags: ['Space', 'Gaganyaan', 'ISRO'],
        chapter: 8
    },
    {
        id: 'ca-2026-003',
        title: 'Next-Gen GST: AI Audit Trail',
        description: 'The GST Council integrated an AI-driven audit trail to detect real-time mismatch in Input Tax Credit (ITC), aiming to eliminate fake invoicing.',
        subject: 'Economy',
        date: '2026-03-05',
        month: 'March',
        tags: ['GST', 'Technology', 'Taxation'],
        chapter: 12
    },
    {
        id: 'ca-2024-006',
        title: 'Sahel Security Crisis & Military Coups',
        description: 'A series of military takeovers in Mali, Burkina Faso, and Niger led to the suspension of ECOWAS memberships, impacting regional stability.',
        subject: 'IR',
        date: '2024-06-20',
        month: 'June',
        tags: ['Africa', 'Geopolitics', 'Sahel'],
        chapter: 25
    },
    {
        id: 'ca-2025-004',
        title: 'MISHTI: Mangrove Initiative Milestone',
        description: 'A 1.5% increase in mangrove cover recorded in FSI 2025 report, credited to the MISHTI scheme focusing on shoreline habitat restoration.',
        subject: 'Environment',
        date: '2025-05-22',
        month: 'May',
        tags: ['Mangroves', 'Biodiversity', 'MISHTI'],
        chapter: 5
    },
    {
        id: 'ca-2024-007',
        title: 'NexCAR19 Approval',
        description: 'India\'s first indigenously developed CAR T-cell therapy received commercial approval, drastically lowering the cost of cancer treatment.',
        subject: 'Science',
        date: '2024-10-15',
        month: 'October',
        tags: ['Bio-tech', 'Health', 'Cancer Care'],
        chapter: 9
    },
    {
        id: 'ca-2024-008',
        title: 'Pushpak RLV LEX-02 & LEX-03 Success',
        description: 'ISRO successfully conducted structural landing experiments for the "Pushpak" Reusable Launch Vehicle (RLV). LEX-03 demonstrated autonomous landing with severe cross-range corrections and wind handling.',
        subject: 'Science',
        date: '2024-06-23',
        month: 'June',
        tags: ['Space', 'ISRO', 'RLV'],
        chapter: 8
    },
    {
        id: 'ca-2024-009',
        title: 'National Mission on Natural Farming (NMNF)',
        description: 'Union Cabinet approved NMNF with an outlay of ₹2,481 crore. The mission aims to bring 1 crore farmers under chemical-free agricultural practices and establish 10,000 Bio-Input Resource Centres (BRCs).',
        subject: 'Environment',
        date: '2024-11-25',
        month: 'November',
        tags: ['Agriculture', 'Environment', 'Sustainability'],
        chapter: 5
    },
    {
        id: 'ca-2025-006',
        title: 'MSME Credit Guarantee for Machinery',
        description: 'Government approved a new credit guarantee scheme facilitating collateral-free term loans up to ₹100 crore for MSMEs to purchase machinery. CGTMSE loan limits also enhanced to ₹10 crore.',
        subject: 'Economy',
        date: '2025-01-29',
        month: 'January',
        tags: ['Economy', 'MSME', 'Banking'],
        chapter: 12
    },
    {
        id: 'ca-2026-004',
        title: 'India\'s Forex Reserves Hit $728.5 Billion',
        description: 'India\'s foreign exchange reserves reached a record high of $728.49 billion. The buffer includes Foreign Currency Assets (FCA), Gold, SDRs, and the Reserve Tranche Position with the IMF.',
        subject: 'Economy',
        date: '2026-02-27',
        month: 'February',
        tags: ['Economy', 'RBI', 'Forex'],
        chapter: 12
    },
    {
        id: 'ca-2025-007',
        title: 'India-EU FTA: CBAM and Labor Standards',
        description: 'Negotiations for the India-EU Free Trade Agreement entered a critical stage, specifically addressing the Carbon Border Adjustment Mechanism (CBAM) and high environmental/labor standards.',
        subject: 'IR',
        date: '2025-10-15',
        month: 'October',
        tags: ['Trade', 'EU-India', 'Bilateral'],
        chapter: 5
    }
];
