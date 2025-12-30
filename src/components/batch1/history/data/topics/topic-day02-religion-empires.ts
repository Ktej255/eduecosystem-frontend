// Day 2: Buddhism, Jainism & Empires
// Module A: Ancient India

import { HistoryTopic } from '../history-types';

export const topicDay02ReligionEmpires: HistoryTopic = {
    id: 2,
    day: 2,
    module: 'A',
    title: 'Buddhism, Jainism & Empires',
    syllabusTag: 'Module A: Ancient India',

    staticFocus: 'Buddhist/Jain Doctrines & Councils → Mauryan Administration → Gupta Golden Age → Sangam Era',

    keyConcepts: [
        {
            term: 'Buddhism: Core Doctrines',
            definition: 'Four Noble Truths (Dukkha, Samudaya, Nirodha, Magga), Eightfold Path (Ashtangika Marga), Middle Path (avoiding extremes). Three Jewels: Buddha, Dharma, Sangha. Concept of Nirvana (liberation from cycle of rebirth).',
            example: 'Buddha rejected caste system but did not completely reject Vedas'
        },
        {
            term: 'Buddhist Councils',
            definition: '1st: Rajagriha (483 BCE, Ajatashatru, Mahakassapa) - Vinaya & Sutta Pitaka compiled. 2nd: Vaishali (383 BCE) - Schism began. 3rd: Pataliputra (250 BCE, Ashoka, Moggaliputta Tissa) - Abhidhamma added. 4th: Kashmir/Kundalvana (Kanishka) - Mahayana formalized.',
        },
        {
            term: 'Buddhist Sects',
            definition: 'Hinayana/Theravada: Individual salvation, Buddha as teacher, No idol worship, Pali texts (Sri Lanka, Myanmar, Thailand). Mahayana: Universal salvation, Buddha as God, Bodhisattva concept, Sanskrit texts (China, Japan, Korea). Vajrayana: Tantric practices (Tibet).',
            example: 'Bodhisattvas: Avalokiteshvara (Compassion), Maitreya (Future Buddha), Manjushri (Wisdom)'
        },
        {
            term: 'Jainism: Core Doctrines',
            definition: 'Triratna (Right Faith, Knowledge, Conduct). Five Vows: Ahimsa, Satya, Asteya, Aparigraha, Brahmacharya. Anekantavada (Many-sidedness of reality), Syadvada (Theory of "may be"). 24 Tirthankaras (Rishabhadeva to Mahavira).',
            example: 'Parsvanatha (23rd Tirthankara) gave 4 vows; Mahavira added Brahmacharya'
        },
        {
            term: 'Jain Sects',
            definition: 'Digambara ("Sky-clad"/nude, stricter, believe Mahavira never married). Shvetambara ("White-clad", less strict, believe Mahavira married Yashoda). Split at Pataliputra Council during Chandragupta Maurya\'s time.',
        },
        {
            term: 'Mauryan Empire (321-185 BCE)',
            definition: 'Chandragupta Maurya: Defeated Seleucus, Kautilya\'s Arthashastra. Bindusara: Extended south. Ashoka: Kalinga War (261 BCE), Dhamma policy. Administration: Samaharta (revenue collector), Sannidhata (treasurer), Pradeshika (district officer).',
            example: 'Megasthenes (Seleucid ambassador) wrote Indica describing Mauryan court'
        },
        {
            term: 'Ashokan Edicts',
            definition: 'Major Rock Edicts (14), Minor Rock Edicts, Pillar Edicts (7). Rock Edict XIII: Remorse for Kalinga War. Rummindei Pillar: Buddha\'s birthplace (Lumbini). Edicts in Prakrit (Brahmi/Kharosthi script), Greek, Aramaic.',
            example: 'Deciphered by James Prinsep (1837)'
        },
        {
            term: 'Gupta Empire (320-550 CE)',
            definition: 'Golden Age of India. Chandragupta I: Founder, married Licchavi princess. Samudragupta: "Napoleon of India" (Allahabad Pillar). Chandragupta II: Defeated Shakas, Fa-Hien visited. Great literature: Kalidasa, Varahamihira, Aryabhata.',
        },
        {
            term: 'Gupta Administration & Coinage',
            definition: 'Decentralized feudal system. Gold coins (Dinars) with Goddess Lakshmi. Bhuktis (provinces), Vishayas (districts). Land grants (agrahara) to Brahmins. Nalanda University patronized.',
        },
        {
            term: 'Sangam Age (300 BCE - 300 CE)',
            definition: 'South Indian Tamil literature. Three Sangams at Madurai. Key texts: Tolkappiyam (grammar), Silappadikaram, Manimekalai. Three Kingdoms: Chera, Chola, Pandya. Key ports: Muziris (Kerala), Puhar/Kaveripattinam, Arikamedu.',
            example: 'Roman trade: Pepper, pearls, muslin exported; gold coins imported'
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h02-01',
            headline: 'Moidams of Assam: UNESCO World Heritage Site (2024)',
            date: 'July 2024',
            source: 'UNESCO',
            teachingHook: 'Moidams are mound-burial sites of the Ahom Dynasty (13th-19th century). These royal burial mounds resemble pyramids and stupas. They represent the unique Tai-Ahom culture blended with indigenous practices. Link to: Ancient burial traditions, Stupa evolution.',
            relatedTopics: ['Ahom Dynasty', 'Burial traditions', 'Stupas'],
        },
        {
            id: 'ca-h02-02',
            headline: '5 New Classical Languages Added (Oct 2024)',
            date: 'Oct 2024',
            source: 'Ministry of Culture / PIB',
            teachingHook: 'Marathi, Pali, Prakrit, Assamese, and Bengali added to the list of Classical Languages (total now 11). Criteria: High antiquity (1500-2000 years), original literary tradition, distinct from borrowed sources. Pali is the language of Theravada Buddhist texts.',
            relatedTopics: ['Pali literature', 'Buddhist texts', 'Prakrit inscriptions'],
            iscentenary: false,
        },
        {
            id: 'ca-h02-03',
            headline: 'Nalanda University: New Campus Inaugurated',
            date: '2024',
            source: 'MEA',
            teachingHook: 'The new Nalanda University campus in Bihar was inaugurated, reviving the ancient seat of learning destroyed by Bakhtiyar Khilji (1193 CE). Original Nalanda was patronized by Gupta and Pala kings. Xuan Zang studied here for 5 years.',
            relatedTopics: ['Gupta patronage', 'Pala dynasty', 'Buddhist education'],
        },
        {
            id: 'ca-h02-04',
            headline: 'Jagannath Temple Ratna Bhandar Opened (2024)',
            date: 'July 2024',
            source: 'ASI / Odisha Govt',
            teachingHook: 'The treasury (Ratna Bhandar) of Puri\'s Jagannath Temple was opened for inventory after 46 years. The temple is an example of Kalinga Architecture (Deula style - Nagara sub-type). Built by Anantavarman Chodaganga (Ganga Dynasty, 12th century).',
            relatedTopics: ['Temple architecture', 'Kalinga style', 'Ganga Dynasty'],
        },
    ],

    prelimsPointers: [
        { fact: 'Maitreya: The "Future Buddha" in Mahayana Buddhism', category: 'Term', highlight: true },
        { fact: 'Anekantavada: Jain doctrine of "many-sidedness of reality"', category: 'Term', highlight: true },
        { fact: 'Syadvada: Jain theory of "conditional predication" (may be)', category: 'Term' },
        { fact: '4th Buddhist Council: Kanishka, Kashmir, Mahayana formalized', category: 'Year', highlight: true },
        { fact: 'Rishabhadeva: First Tirthankara (mentioned in Rigveda & Bhagavata)', category: 'Person' },
        { fact: 'Parsvanatha: 23rd Tirthankara, gave 4 vows (not 5)', category: 'Person' },
        { fact: 'Samaharta: Mauryan revenue collector', category: 'Term' },
        { fact: 'Sannidhata: Mauryan treasurer (stored state revenue)', category: 'Term' },
        { fact: 'Rock Edict XIII: Ashoka\'s remorse for Kalinga War described', category: 'Year', highlight: true },
        { fact: 'Fa-Hien: Chinese traveler during Chandragupta II (Gupta period)', category: 'Person' },
        { fact: 'Nalanda: Founded by Kumaragupta I (Gupta), destroyed 1193 CE', category: 'Site' },
        { fact: 'Muziris (Kerala): Major Sangam port for Roman trade', category: 'Site' },
        { fact: 'Tolkappiyam: Oldest Tamil grammar text (Sangam literature)', category: 'Term' },
        { fact: 'Pali added as Classical Language (2024) - language of Tripitaka', category: 'Year', highlight: true },
    ],

    comparisonTable: {
        title: 'Mahayana vs Hinayana Buddhism',
        columnAHeader: 'Mahayana',
        columnBHeader: 'Hinayana/Theravada',
        rows: [
            { aspect: 'Goal', columnA: 'Universal salvation (Bodhisattva ideal)', columnB: 'Individual salvation (Arhat ideal)' },
            { aspect: 'Buddha', columnA: 'Divine being, worshipped as God', columnB: 'Great teacher, human' },
            { aspect: 'Language', columnA: 'Sanskrit', columnB: 'Pali' },
            { aspect: 'Idol Worship', columnA: 'Yes, elaborate images', columnB: 'Originally no, symbols used' },
            { aspect: 'Spread', columnA: 'China, Japan, Korea, Tibet', columnB: 'Sri Lanka, Myanmar, Thailand' },
        ],
    },

    pyqAlert: 'Focus on: Bodhisattvas (Maitreya, Avalokiteshvara), Jain doctrines (Anekantavada, Syadvada), Buddhist Councils, Mauryan terms',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
