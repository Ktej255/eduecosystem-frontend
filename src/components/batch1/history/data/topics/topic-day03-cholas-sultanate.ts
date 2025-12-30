// Day 3: Cholas & Delhi Sultanate
// Module B: Medieval India

import { HistoryTopic } from '../history-types';

export const topicDay03CholasSultanate: HistoryTopic = {
    id: 3,
    day: 3,
    module: 'B',
    title: 'Cholas & Delhi Sultanate',
    syllabusTag: 'Module B: Medieval India',

    staticFocus: 'Chola Administration & Temple Architecture → Delhi Sultanate Administrative Terms & Market Reforms',

    keyConcepts: [
        {
            term: 'Chola Empire (850-1279 CE)',
            definition: 'Greatest South Indian dynasty. Vijayalaya founded dynasty. Rajaraja I (985-1014): Built Brihadeeswarar Temple. Rajendra I (1014-1044): Conquered Sri Lanka, naval expeditions to SE Asia (Srivijaya), titled "Gangaikondachola".',
            example: 'Rajendra I\'s fleet reached Sumatra, Malay Peninsula - greatest Indian naval power'
        },
        {
            term: 'Chola Local Self-Government',
            definition: 'Uttaramerur Inscription (Parantaka I) describes village assemblies. Three types: Sabha (Brahmin villages/Agraharas), Ur (general villages), Nagaram (merchant guilds). Sabha had committees (Variyams) for tanks (Eri), gardens, audit.',
            example: 'Elected via "Kudavolai" system (lot drawing from pot)'
        },
        {
            term: 'Chola Temple Architecture',
            definition: 'Dravidian style with massive vimanas (towers). Brihadeeswarar Temple (Thanjavur): 216 ft vimana, single granite block at top (80 tons), UNESCO site. Gangaikondacholapuram, Airavatesvara - Great Living Chola Temples (UNESCO).',
        },
        {
            term: 'Chola Bronze Sculptures',
            definition: 'Nataraja (Dancing Shiva) - most iconic. Lost-wax (cire perdue) technique. Chola bronzes show supreme artistic skill in depicting movement and grace.',
            example: 'Nataraja represents cosmic dance of creation and destruction (Ananda Tandava)'
        },
        {
            term: 'Delhi Sultanate (1206-1526)',
            definition: 'Five dynasties: Slave/Mamluk (1206-1290), Khalji (1290-1320), Tughlaq (1320-1414), Sayyid (1414-1451), Lodi (1451-1526). Founded after Muhammad Ghori\'s conquests.',
        },
        {
            term: 'Slave Dynasty Highlights',
            definition: 'Qutbuddin Aibak: Started Qutub Minar, Quwwat-ul-Islam Mosque. Iltutmish: Completed Qutub Minar, introduced silver Tanka. Razia Sultan: First female ruler. Balban: "Blood and Iron" policy, Persian court etiquette.',
        },
        {
            term: 'Alauddin Khalji\'s Market Reforms',
            definition: 'Four markets: Grain, Cloth, Horses/Cattle/Slaves, Miscellaneous. Controller: Shahna-i-Mandi. Intelligence: Munhiyan (spies). Fixed prices, strict punishments. Purpose: Maintain large army at low cost.',
            example: 'Even a horse price was fixed; merchants couldn\'t charge more'
        },
        {
            term: 'Muhammad bin Tughlaq\'s Experiments',
            definition: 'Capital shift: Delhi to Daulatabad (failed). Token currency: Bronze/copper coins (failed due to counterfeiting). Taxation in Doab: Increased taxes during famine (revolt). Called "wisest fool" by historians.',
        },
        {
            term: 'Sultanate Administrative Terms',
            definition: 'Iqta: Land revenue assignment (not ownership). Iqtadar/Muqti: Holder of Iqta. Kharaj: Land tax (1/3 to 1/2 produce). Khams: 1/5th of war booty. Jizya: Tax on non-Muslims. Zakat: Tax on Muslims.',
        },
        {
            term: 'Other Key Sultanate Terms',
            definition: 'Amil: Revenue collector at pargana level. Sondhar: Commission to village headman. Fawazil: Surplus revenue sent to Sultan. Barid: Intelligence officer. Diwan-i-Arz: Military department.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h03-01',
            headline: 'Sengol Installed in New Parliament (2023)',
            date: 'May 2023',
            source: 'PIB / Lok Sabha',
            teachingHook: 'The Sengol (sceptre) was installed in the new Parliament building. It had been presented to Nehru in 1947 by Tamil priests to symbolize transfer of power - a Chola tradition. The Nandi (Shiva\'s bull) on top links it to Shaivism. Use this to discuss Chola symbols of authority.',
            relatedTopics: ['Chola symbolism', 'Transfer of power', 'Shaivism'],
        },
        {
            id: 'ca-h03-02',
            headline: 'Statue of Equality - Ramanujacharya (2022)',
            date: '2022',
            source: 'PM India',
            teachingHook: 'A 216-ft statue of Ramanujacharya (1017-1137 CE) was unveiled in Hyderabad. He propounded Vishishtadvaita (Qualified Non-Dualism) philosophy and opposed untouchability. Connect to: Bhakti Movement origins, Alvars, Temple entry movements.',
            relatedTopics: ['Bhakti Movement', 'Vishishtadvaita', 'Social reform'],
        },
    ],

    prelimsPointers: [
        { fact: 'Uttaramerur Inscription: Describes Chola village assembly elections', category: 'Site', highlight: true },
        { fact: 'Kudavolai: Chola system of election by lot (pot system)', category: 'Term', highlight: true },
        { fact: 'Variyam: Chola committee (e.g., Eri Variyam for tanks)', category: 'Term' },
        { fact: 'Brihadeeswarar Temple: Rajaraja I, Thanjavur, UNESCO site', category: 'Site' },
        { fact: 'Nataraja: Chola bronze depicting Shiva\'s cosmic dance', category: 'Term', highlight: true },
        { fact: 'Iqta: Sultanate land revenue assignment (NOT ownership)', category: 'Term', highlight: true },
        { fact: 'Iqtadar/Muqti: Holder of Iqta', category: 'Term' },
        { fact: 'Amil: Sultanate revenue collector at pargana level', category: 'Term' },
        { fact: 'Sondhar: Commission/fee paid to village headman', category: 'Term' },
        { fact: 'Fawazil: Surplus revenue sent to Sultan', category: 'Term' },
        { fact: 'Silver Tanka: Introduced by Iltutmish', category: 'Term' },
        { fact: 'Token Currency: Muhammad bin Tughlaq\'s failed experiment', category: 'Term', highlight: true },
        { fact: 'Sengol: Chola sceptre symbolizing power transfer (now in Parliament)', category: 'Term', highlight: true },
    ],

    pyqAlert: 'Focus on: Chola local govt terms (Sabha, Ur, Kudavolai), Sultanate admin terms (Iqta, Amil, Sondhar, Fawazil)',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
