// Day 10: Intangible Culture & Roundup
// Module D: Art & Culture

import { HistoryTopic } from '../history-types';

export const topicDay10Culture: HistoryTopic = {
    id: 10,
    day: 10,
    module: 'D',
    title: 'Intangible Culture & Roundup',
    syllabusTag: 'Module D: Art & Culture',

    staticFocus: 'Classical Dances (8) → Classical Languages (11) → UNESCO Sites → GI Tags → ICH Elements',

    keyConcepts: [
        {
            term: 'Classical Dances (8 Recognized)',
            definition: 'Bharatanatyam (TN - Sadir, Natyashastra), Kathakali (Kerala - Male, facial expressions), Kathak (North - Mughal influence, footwork), Kuchipudi (AP - Village drama origin), Odissi (Odisha - Tribhangi posture), Manipuri (Manipur - Lai Haraoba), Mohiniyattam (Kerala - Female, "Dance of enchantress"), Sattriya (Assam - Vaishnavite, Srimanta Sankardeva).',
        },
        {
            term: 'Classical Languages (11 as of 2024)',
            definition: 'Criteria: High antiquity (1500-2000 years), original literary tradition, distinct from modern derivations. Added: Tamil (2004), Sanskrit (2005), Telugu (2008), Kannada (2008), Malayalam (2013), Odia (2014). Oct 2024: Marathi, Pali, Prakrit, Assamese, Bengali.',
        },
        {
            term: 'UNESCO World Heritage Sites in India',
            definition: 'Total 42 sites (as of 2024): 34 Cultural, 7 Natural, 1 Mixed. Latest additions: Moidams of Assam (2024), Hoysala Temples (2023), Santiniketan (2023), Dholavira (2021), Ramappa Temple (2021).',
        },
        {
            term: 'UNESCO Intangible Cultural Heritage',
            definition: 'India has 15 ICH elements. Recent: Garba (2023), Durga Puja (2021), Kumbh Mela (2017). Others: Yoga (2016), Ramlila, Kutiyattam, Vedic Chanting, Ramman, Mudiyettu, Kalbelia, Buddhist Chanting of Ladakh, Sankirtana.',
        },
        {
            term: 'GI Tags Overview',
            definition: 'Geographical Indication protects products linked to specific regions. First Indian GI: Darjeeling Tea (2004). Categories: Handicrafts, Foodstuff, Textiles, Agricultural. Administered by GI Registry (Chennai).',
        },
        {
            term: 'Recent GI Tags (2024-25)',
            definition: 'Similipal Kai Chutney (Odisha - red ant chutney), Wancho Wood Craft (Arunachal), Majuli Masks (Assam - neo-Vaishnavite tradition), Ladakhi Pashmina, Tangaliya Shawl (Gujarat), Thiruvananthapuram Banana Chips, Udayagiri Wooden Cutlery (AP).',
        },
        {
            term: 'Paintings of India',
            definition: 'Miniature Paintings: Mughal (realistic, portraits), Rajasthani (Kangra, Bundi - romantic themes), Pahari (Basholi, Kangra - hill states). Folk Paintings: Madhubani (Bihar - Mithila), Warli (Maharashtra - tribal), Pattachitra (Odisha), Gond (MP - tribal), Pichwai (Rajasthan - Krishna), Thangka (Buddhist).',
        },
        {
            term: 'Indian Music Systems',
            definition: 'Hindustani (North): Dhrupad, Khayal, Thumri. Carnatic (South): Kriti, Varnam. Key differences: Hindustani has more Persian influence, Carnatic is more structured. Trinity of Carnatic: Thyagaraja, Muthuswami Dikshitar, Syama Sastri.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h10-01',
            headline: 'Garba Added to UNESCO ICH (2023)',
            date: 'Dec 2023',
            source: 'UNESCO',
            teachingHook: 'Garba, the traditional dance of Gujarat performed during Navratri, was added to UNESCO\'s Intangible Cultural Heritage list. It involves circular movements around a lamp (representing the goddess). Link to: Folk dances vs Classical dances, Festival dances.',
            relatedTopics: ['Folk dances', 'Navratri', 'Gujarat culture'],
        },
        {
            id: 'ca-h10-02',
            headline: '5 New Classical Languages (Oct 2024)',
            date: 'Oct 2024',
            source: 'Ministry of Culture',
            teachingHook: 'Marathi, Pali, Prakrit, Assamese, Bengali added. Total now 11. Pali is significant as the language of Theravada Buddhist scriptures (Tripitaka). Prakrit was used in Ashokan inscriptions and Jain texts.',
            relatedTopics: ['Classical Languages', 'Pali', 'Prakrit'],
        },
        {
            id: 'ca-h10-03',
            headline: 'Santiniketan: UNESCO World Heritage (2023)',
            date: '2023',
            source: 'UNESCO',
            teachingHook: 'Visva-Bharati University campus at Santiniketan (Rabindranath Tagore) was added to UNESCO list. Represents Tagore\'s vision of education in nature, blending Indian and global traditions. Study: Modern India personalities.',
            relatedTopics: ['Tagore', 'Modern education', 'Bengal Renaissance'],
        },
        {
            id: 'ca-h10-04',
            headline: 'Karpoori Thakur: Bharat Ratna (2024)',
            date: 'Jan 2024',
            source: 'PIB',
            teachingHook: 'Karpoori Thakur (1924-1988) was Bihar CM, known for implementing OBC reservation ("Karpoori Thakur Formula"). Posthumous Bharat Ratna. Link to: Social justice history, Mandal Commission precursor.',
            relatedTopics: ['OBC reservation', 'Social reform', 'Modern India'],
        },
        {
            id: 'ca-h10-05',
            headline: 'Moidams of Assam: UNESCO (2024)',
            date: 'July 2024',
            source: 'UNESCO',
            teachingHook: 'Moidams (Ahom royal burial mounds at Charaideo) became India\'s 43rd UNESCO site. Represents Tai-Ahom culture. Only UNESCO site representing mound-burial tradition of Assam. Link: Medieval Assam, Ahom dynasty.',
            relatedTopics: ['Ahom Dynasty', 'Medieval Assam', 'Burial traditions'],
        },
    ],

    prelimsPointers: [
        { fact: 'Bharatanatyam: Tamil Nadu, Sadir, Natyashastra tradition', category: 'Term' },
        { fact: 'Kathakali: Kerala, Male dancers, elaborate makeup', category: 'Term' },
        { fact: 'Sattriya: Assam, Srimanta Sankardeva, Vaishnavite', category: 'Term', highlight: true },
        { fact: 'Tribhangi: Odissi posture (body bent at 3 points)', category: 'Term' },
        { fact: '11 Classical Languages (2024): Tamil, Sanskrit, Telugu, Kannada, Malayalam, Odia, + 5 new', category: 'Year', highlight: true },
        { fact: 'Pali: Language of Theravada texts, now Classical', category: 'Term', highlight: true },
        { fact: 'Garba: Gujarat, UNESCO ICH 2023, Navratri', category: 'Term', highlight: true },
        { fact: 'Kumbh Mela: UNESCO ICH 2017, largest peaceful gathering', category: 'Term' },
        { fact: 'First Indian GI: Darjeeling Tea (2004)', category: 'Term', highlight: true },
        { fact: 'Similipal Kai Chutney: Odisha, red ant chutney, GI Tag 2024', category: 'Term' },
        { fact: 'Majuli Masks: Assam, neo-Vaishnavite tradition', category: 'Term' },
        { fact: 'Moidams: Ahom burial mounds, UNESCO 2024', category: 'Site', highlight: true },
        { fact: 'Santiniketan: Tagore, UNESCO 2023', category: 'Site', highlight: true },
        { fact: '42 UNESCO World Heritage Sites in India (34 Cultural, 7 Natural, 1 Mixed)', category: 'Year' },
        { fact: 'Karpoori Thakur: Bharat Ratna 2024, OBC reservation pioneer', category: 'Person', highlight: true },
    ],

    comparisonTable: {
        title: 'Hindustani vs Carnatic Music',
        columnAHeader: 'Hindustani (North)',
        columnBHeader: 'Carnatic (South)',
        rows: [
            { aspect: 'Origin', columnA: 'Persian influence (Amir Khusrau)', columnB: 'Pure Indian tradition' },
            { aspect: 'Forms', columnA: 'Dhrupad, Khayal, Thumri', columnB: 'Kriti, Varnam, Padam' },
            { aspect: 'Ragas', columnA: 'Fewer ragas, more improvisation', columnB: 'More ragas, structured' },
            { aspect: 'Trinity', columnA: 'Tansen (Akbar\'s court)', columnB: 'Thyagaraja, Dikshitar, Syama Sastri' },
            { aspect: 'Instruments', columnA: 'Sitar, Sarod, Tabla', columnB: 'Veena, Mridangam, Violin' },
        ],
    },

    pyqAlert: 'Focus on: Classical dances-state matching, New Classical Languages, Recent UNESCO sites (Moidams, Hoysala, Santiniketan), GI Tags',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
