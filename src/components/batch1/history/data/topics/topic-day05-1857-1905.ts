// Day 5: 1857 to 1905 - Reform & Revolt
// Module C: Modern India

import { HistoryTopic } from '../history-types';

export const topicDay05_1857_1905: HistoryTopic = {
    id: 5,
    day: 5,
    module: 'C',
    title: '1857-1905: Reform & Revolt',
    syllabusTag: 'Module C: Modern India',

    staticFocus: 'Revolt of 1857 → Tribal Revolts (Santhal, Munda) → Social Reformers (Arya Samaj, Brahmo Samaj)',

    keyConcepts: [
        {
            term: 'Revolt of 1857: Causes',
            definition: 'Political: Doctrine of Lapse (Dalhousie), Annexation of Awadh. Economic: Drain of wealth, destruction of Indian industries. Military: Greased cartridges (cow/pig fat), discrimination against Indian soldiers. Social: Fear of conversion, social reform laws.',
            example: 'Nana Sahib\'s pension stopped; Jhansi, Satara, Nagpur annexed'
        },
        {
            term: 'Revolt of 1857: Leaders & Centers',
            definition: 'Delhi: Bahadur Shah Zafar (nominal leader). Kanpur: Nana Sahib (Peshwa heir), Tantia Tope. Lucknow: Begum Hazrat Mahal. Jhansi: Rani Laxmibai. Bihar: Kunwar Singh. Bareilly: Khan Bahadur Khan.',
        },
        {
            term: 'Revolt of 1857: Significance',
            definition: 'First large-scale uprising against British. Though called "Sepoy Mutiny" by British, involved civilians too. Led to: End of EIC rule (1858 Act), Crown took over, Viceroy replaced Governor-General. Seeds of national consciousness planted.',
        },
        {
            term: 'Santhal Rebellion (1855-56)',
            definition: 'Led by Sidhu and Kanhu against zamindars and moneylenders (dikus - outsiders) in present-day Jharkhand/Bengal. Over 10,000 killed in suppression. Created Santhal Parganas district as a result.',
        },
        {
            term: 'Munda Rebellion / Ulgulan (1899-1900)',
            definition: 'Led by Birsa Munda in Chotanagpur (Jharkhand). "Ulgulan" means "The Great Tumult". Against: Beth begari (forced labor), land grabbing by outsiders. Birsa claimed divine powers, called "Dharti Aba" (Father of Earth).',
            example: 'Birsa Munda\'s birthday (Nov 15) is Janjatiya Gaurav Divas'
        },
        {
            term: 'Other Tribal Revolts',
            definition: 'Kol Uprising (1831-32): Chotanagpur. Khond Rising (1846): Odisha, against human sacrifice suppression. Bhil Uprising: Western India. Ramosi Rising: Maharashtra. Mapilla Rebellions: Malabar (multiple, culminating in 1921).',
        },
        {
            term: 'Peasant Movements',
            definition: 'Indigo Revolt (1859-60): Bengal, against planters forcing indigo cultivation. Led by Digambar Biswas, Bishnu Biswas. Inspired Dinabandhu Mitra\'s play "Nil Darpan". Deccan Riots (1875): Against Marwari moneylenders in Maharashtra.',
        },
        {
            term: 'Brahmo Samaj',
            definition: 'Founded 1828 by Raja Ram Mohan Roy (Calcutta). Opposed: Sati, child marriage, idol worship, caste. Supports: Widow remarriage, women education. Called "Father of Indian Renaissance". Split: Adi Brahmo Samaj (Debendranath), Sadharan Brahmo Samaj.',
        },
        {
            term: 'Arya Samaj',
            definition: 'Founded 1875 by Swami Dayanand Saraswati (Bombay, later Lahore). "Back to Vedas" - rejected Puranas, idol worship, caste by birth. Shuddhi Movement (reconversion). DAV schools. Book: Satyarth Prakash.',
        },
        {
            term: 'Other Reform Movements',
            definition: 'Prarthana Samaj (1867): Maharashtra, by Atmaram Pandurang, MG Ranade. Satyashodhak Samaj (1873): Jyotiba Phule, anti-Brahminism. Ramakrishna Mission (1897): Vivekananda, service to humanity. Theosophical Society (1882 India): Annie Besant, Helena Blavatsky.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h05-01',
            headline: 'Janjatiya Gaurav Divas (Nov 15)',
            date: '2021 onwards',
            source: 'PIB',
            teachingHook: 'November 15 (Birsa Munda\'s birthday) declared as Janjatiya Gaurav Divas to honour tribal freedom fighters. The government has built tribal museums, organized freedom trails. Link: All tribal revolts (Santhal, Munda, Kol, Bhil) for this theme.',
            relatedTopics: ['Birsa Munda', 'Tribal revolts', 'Ulgulan'],
        },
        {
            id: 'ca-h05-02',
            headline: 'Dayanand Saraswati 200th Birth Anniversary (2024)',
            date: '2024',
            source: 'Ministry of Culture',
            teachingHook: 'Swami Dayanand Saraswati (1824-1883) founded Arya Samaj. Key teachings: Vedic supremacy, Shuddhi (reconversion), rejection of idol worship. His Satyarth Prakash is a foundational text. DAV schools his educational legacy.',
            relatedTopics: ['Arya Samaj', 'Social reform', 'Shuddhi'],
            iscentenary: true,
        },
        {
            id: 'ca-h05-03',
            headline: 'Vande Mataram: 150 Years',
            date: '2024-25',
            source: 'Cultural events',
            teachingHook: 'Bankim Chandra Chatterjee wrote Vande Mataram around 1870s (published in Anandamath, 1882). The novel is set during the Sanyasi Rebellion (1770s). The song became an anthem during Swadeshi Movement (1905). Connect to: Nationalist literature.',
            relatedTopics: ['Anandamath', 'Swadeshi', 'Nationalist literature'],
        },
    ],

    prelimsPointers: [
        { fact: 'Doctrine of Lapse: Dalhousie\'s policy to annex states without heir', category: 'Term', highlight: true },
        { fact: 'Mangal Pandey: First rebel (March 29, 1857, Barrackpore)', category: 'Person' },
        { fact: 'Bahadur Shah Zafar: Nominal leader of 1857, died in Rangoon 1862', category: 'Person' },
        { fact: 'Government of India Act, 1858: Crown took over from EIC', category: 'Act', highlight: true },
        { fact: 'Ulgulan: Birsa Munda\'s uprising, means "The Great Tumult"', category: 'Term', highlight: true },
        { fact: 'Sidhu & Kanhu: Leaders of Santhal Rebellion (1855-56)', category: 'Person' },
        { fact: 'Nil Darpan: Play on Indigo Revolt by Dinabandhu Mitra', category: 'Term' },
        { fact: 'Raja Ram Mohan Roy: Founded Brahmo Samaj (1828), "Father of Indian Renaissance"', category: 'Person', highlight: true },
        { fact: 'Satyarth Prakash: Book by Dayanand Saraswati', category: 'Term' },
        { fact: 'Shuddhi Movement: Arya Samaj\'s reconversion program', category: 'Movement', highlight: true },
        { fact: 'Satyashodhak Samaj: Jyotiba Phule (1873), anti-caste', category: 'Movement' },
        { fact: 'Nov 15: Janjatiya Gaurav Divas (Birsa Munda\'s birthday)', category: 'Year', highlight: true },
        { fact: 'Anandamath: Bankim Chandra\'s novel containing Vande Mataram', category: 'Term' },
    ],

    comparisonTable: {
        title: 'Brahmo Samaj vs Arya Samaj',
        columnAHeader: 'Brahmo Samaj',
        columnBHeader: 'Arya Samaj',
        rows: [
            { aspect: 'Founder', columnA: 'Raja Ram Mohan Roy (1828)', columnB: 'Swami Dayanand Saraswati (1875)' },
            { aspect: 'Base Text', columnA: 'Upanishads', columnB: 'Vedas only' },
            { aspect: 'Idol Worship', columnA: 'Rejected', columnB: 'Rejected' },
            { aspect: 'Caste', columnA: 'Opposed caste discrimination', columnB: 'Opposed caste by birth (supported Varna by merit)' },
            { aspect: 'Reconversion', columnA: 'Not focused', columnB: 'Shuddhi Movement' },
            { aspect: 'Region', columnA: 'Bengal-centric', columnB: 'Punjab & North India' },
        ],
    },

    pyqAlert: 'Focus on: Tribal revolt leaders (Sidhu-Kanhu, Birsa Munda), Reform societies and founders, Terms (Ulgulan, Shuddhi, Doctrine of Lapse)',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
