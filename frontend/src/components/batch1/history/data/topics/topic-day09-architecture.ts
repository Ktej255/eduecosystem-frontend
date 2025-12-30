// Day 9: Architecture & Sculpture
// Module D: Art & Culture

import { HistoryTopic } from '../history-types';

export const topicDay09Architecture: HistoryTopic = {
    id: 9,
    day: 9,
    module: 'D',
    title: 'Architecture & Sculpture',
    syllabusTag: 'Module D: Art & Culture',

    staticFocus: 'Temple Architecture (Nagara/Dravida/Vesara) → Cave Architecture → Stupas → Sculpture Schools',

    keyConcepts: [
        {
            term: 'Nagara Style (North India)',
            definition: 'Features: Shikhara (curvilinear tower over garbhagriha), Mandapa (hall), no boundary walls, elevated platform. Sub-types: Latina (single shikhara), Phamsana (clustered), Valabhi (wagon vault). Examples: Khajuraho (Chandelas), Lingaraj (Bhubaneswar), Konark Sun Temple.',
            example: 'Khajuraho temples known for erotic sculptures representing tantric practices'
        },
        {
            term: 'Dravida Style (South India)',
            definition: 'Features: Vimana (pyramidal tower, stepped), Gopuram (elaborate gateway tower), high boundary walls, water tank. Examples: Brihadeeswarar (Chola), Shore Temple (Pallava), Meenakshi Temple (Madurai), Ranganathaswamy (Srirangam).',
            example: 'Gopurams became taller than Vimanas in later periods'
        },
        {
            term: 'Vesara Style (Deccan)',
            definition: 'Hybrid of Nagara and Dravida. Star-shaped platform base. Low vimana with curvilinear shikhara elements. Examples: Hoysala temples (Belur, Halebid, Somnathpur), Chalukya temples (Aihole, Pattadakal, Badami). Intricate soapstone carvings.',
        },
        {
            term: 'Kalinga Style (Odisha)',
            definition: 'Sub-style of Nagara. Three types: Rekha Deula (Shikhara over sanctum - Lingaraj), Pidha Deula (Pyramidal Mandapa), Khakhara Deula (Barrel-vaulted for Shakti temples). Examples: Lingaraj, Jagannath (Puri), Konark.',
        },
        {
            term: 'Cave Architecture',
            definition: 'Ajanta (2nd BCE - 6th CE): Buddhist, famous paintings (Jataka tales), rock-cut. Ellora (5th-10th CE): Buddhist, Hindu, Jain caves; Kailasa Temple (rock-cut, Rashtrakuta). Elephanta: Trimurti (Shiva). Barabar Caves: Ashoka period, Lomas Rishi has Mauryan polish.',
        },
        {
            term: 'Stupas',
            definition: 'Buddhist memorial mound. Parts: Harmika (railing at top), Anda (dome), Medhi (base), Pradakshina Patha (circumambulation path), Torana (gateway). Famous: Sanchi (Ashoka, 4 toranas), Amravati (Satavahana), Dharmek (Sarnath), Bharhut.',
            example: 'Sanchi gateways (toranas) show Jataka tales in relief'
        },
        {
            term: 'Mathura School of Sculpture',
            definition: 'Indigenous Indian style. Material: Red sandstone (spotted red). Features: Purely Indian, Buddha with halo, seated or standing. Transparent robes. Patronized by Kushanas (Kanishka). Influenced Hindu/Jain iconography too.',
        },
        {
            term: 'Gandhara School of Sculpture',
            definition: 'Greco-Roman influence (Indo-Greek, Kushana patronage). Material: Grey schist (bluish-grey stone). Features: Buddha with wavy hair, Greek robes, Roman features. Focus on Buddha\'s suffering. Location: Northwest (Afghanistan, Pakistan).',
        },
        {
            term: 'Amravati School of Sculpture',
            definition: 'Satavahana patronage. Material: White marble. Features: Dynamic movement, slender figures, narrative panels. Medallion art. Located in Andhra. Buddhist themes. Influenced Southeast Asian art.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h09-01',
            headline: 'Ram Temple Inauguration (Ayodhya, Jan 2024)',
            date: 'Jan 2024',
            source: 'Ram Janmabhoomi Trust',
            teachingHook: 'Ram Temple built in Nagara style (Panchayatana - 5 shrines pattern). Features: No iron/steel used, interlocking stones, pink sandstone from Rajasthan. Surya Tilak mechanism directs sunlight onto Ram Lalla\'s forehead on Ram Navami. Study: Nagara style features.',
            relatedTopics: ['Nagara style', 'Temple architecture', 'Panchayatana'],
        },
        {
            id: 'ca-h09-02',
            headline: 'Sacred Ensembles of Hoysalas: UNESCO (2023)',
            date: '2023',
            source: 'UNESCO',
            teachingHook: 'Three Hoysala temples (Belur, Halebid, Somnathpur) added to World Heritage List. Features: Star-shaped platform, Vesara style, soapstone carvings of extreme detail. Built by Hoysala dynasty (12th-13th CE). Study: Vesara/Hoysala style.',
            relatedTopics: ['Vesara style', 'Hoysala', 'UNESCO sites'],
        },
        {
            id: 'ca-h09-03',
            headline: 'Jagannath Temple Ratna Bhandar Opened (2024)',
            date: 'July 2024',
            source: 'ASI / Odisha Govt',
            teachingHook: 'Treasury opened after 46 years for inventory. Jagannath Temple (Puri) is example of Kalinga Architecture - Rekha Deula (curvilinear shikhara over sanctum). Built by Anantavarman Chodaganga (Ganga Dynasty, 12th CE). Study: Kalinga/Odisha style.',
            relatedTopics: ['Kalinga style', 'Rekha Deula', 'Ganga Dynasty'],
        },
    ],

    prelimsPointers: [
        { fact: 'Shikhara: Curvilinear tower in Nagara style', category: 'Term', highlight: true },
        { fact: 'Vimana: Pyramidal tower in Dravida style', category: 'Term', highlight: true },
        { fact: 'Gopuram: Gateway tower (became taller in later Dravida temples)', category: 'Term' },
        { fact: 'Vesara: Hybrid of Nagara + Dravida, star-shaped base', category: 'Term', highlight: true },
        { fact: 'Rekha Deula: Kalinga temple with curvilinear shikhara (e.g., Lingaraj)', category: 'Term' },
        { fact: 'Khakhara Deula: Kalinga temple for Shakti, barrel-vaulted roof', category: 'Term' },
        { fact: 'Hoysala Temples: Belur, Halebid, Somnathpur (UNESCO 2023)', category: 'Site', highlight: true },
        { fact: 'Kailasa Temple (Ellora): Rashtrakuta, rock-cut, largest monolithic', category: 'Site', highlight: true },
        { fact: 'Ajanta: Buddhist paintings, Jataka tales, 2nd BCE - 6th CE', category: 'Site' },
        { fact: 'Barabar Caves: Ashokan period, Lomas Rishi cave', category: 'Site' },
        { fact: 'Mathura School: Red sandstone, indigenous Indian style', category: 'Term', highlight: true },
        { fact: 'Gandhara School: Grey schist, Greco-Roman influence', category: 'Term', highlight: true },
        { fact: 'Amravati School: White marble, dynamic movement, Satavahana', category: 'Term' },
        { fact: 'Sanchi Stupa: Ashoka, 4 toranas (gateways)', category: 'Site' },
        { fact: 'Ram Temple (Ayodhya): Nagara style, Panchayatana, no iron used', category: 'Site', highlight: true },
    ],

    comparisonTable: {
        title: 'Nagara vs Dravida Style',
        columnAHeader: 'Nagara (North)',
        columnBHeader: 'Dravida (South)',
        rows: [
            { aspect: 'Tower', columnA: 'Shikhara (curvilinear)', columnB: 'Vimana (pyramidal/stepped)' },
            { aspect: 'Gateway', columnA: 'Simple entrance', columnB: 'Gopuram (elaborate, tall)' },
            { aspect: 'Boundary', columnA: 'No high walls', columnB: 'High compound walls' },
            { aspect: 'Platform', columnA: 'Elevated jagati', columnB: 'Flat base, water tank' },
            { aspect: 'Examples', columnA: 'Khajuraho, Konark, Lingaraj', columnB: 'Brihadeeswarar, Meenakshi' },
        ],
    },

    pyqAlert: 'Focus on: Temple style matching (Khajuraho-Nagara, Brihadeeswarar-Dravida, Hoysala-Vesara), Sculpture school materials (Mathura-red, Gandhara-grey)',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
