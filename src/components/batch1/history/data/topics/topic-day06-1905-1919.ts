// Day 6: 1905 to 1919 - Extremism & Acts
// Module C: Modern India

import { HistoryTopic } from '../history-types';

export const topicDay06_1905_1919: HistoryTopic = {
    id: 6,
    day: 6,
    module: 'C',
    title: '1905-1919: Extremism & Acts',
    syllabusTag: 'Module C: Modern India',

    staticFocus: 'Swadeshi Movement → Surat Split → Acts 1909/1919 → Revolutionary Terrorism → Champaran/Kheda',

    keyConcepts: [
        {
            term: 'Partition of Bengal (1905)',
            definition: 'Lord Curzon partitioned Bengal (July 1905, effective Oct 16). Official reason: Administrative convenience. Real reason: Divide Hindu-Muslim, weaken nationalism. East Bengal (Muslim majority) vs West Bengal + Assam/Odisha (Hindu majority). Revoked in 1911.',
        },
        {
            term: 'Swadeshi Movement (1905-1908)',
            definition: 'Response to Bengal partition. Four-fold program: Boycott (British goods), Swadeshi (Indian goods), National Education (Bengal National College, Jadavpur), National Institutions. Methods: Public burning of foreign cloth, Raksha Bandhan as unity symbol.',
            example: 'Abanindranath Tagore painted Bharat Mata image during this period'
        },
        {
            term: 'Surat Split (1907)',
            definition: 'Congress split into Moderates and Extremists at Surat session. Extremists (Lal-Bal-Pal): Aggressive methods, Swaraj. Moderates (Gokhale, Pherozeshah Mehta): Constitutional methods. Tilak\'s stick thrown. Extremists expelled. Reunited at Lucknow (1916).',
        },
        {
            term: 'Indian Councils Act, 1909 (Morley-Minto Reforms)',
            definition: 'Introduced separate electorate for Muslims (seed of partition). Increased Indian representation in Legislative Councils. Satyendra Prasad Sinha: First Indian in Viceroy\'s Executive Council. Indians could discuss budget but limited powers.',
            example: 'Muslims voted only for Muslim candidates (communal electorate)'
        },
        {
            term: 'Revolutionary Terrorism',
            definition: 'Anushilan Samiti (Bengal), Jugantar Party. Key events: Muzaffarpur bombing (Khudiram Bose, 1908), Alipore Bomb Case (Aurobindo Ghosh, 1908), Delhi Conspiracy (Rash Behari Bose), Ghadar Party (1913, San Francisco, Lala Hardayal).',
        },
        {
            term: 'Komagata Maru Incident (1914)',
            definition: 'Japanese ship chartered by Gurdit Singh to carry Indian migrants to Canada. Canada rejected entry (racist laws). Ship returned to India, fired upon at Budge Budge. Fueled revolutionary sentiments, especially Ghadar Movement.',
        },
        {
            term: 'Home Rule Movement (1916)',
            definition: 'Two leagues: Tilak\'s (Poona, Maharashtra) and Annie Besant\'s (Madras). Demanded self-government within British Empire. Annie Besant interned, became Congress President (1917). Weakened after Montagu\'s August 1917 Declaration.',
        },
        {
            term: 'Lucknow Pact (1916)',
            definition: 'Congress-Muslim League joint session. Congress accepted separate electorate, League supported self-government demand. "Congress-League Scheme" drafted. Jinnah called "Ambassador of Hindu-Muslim Unity". Reunification of Congress (Extremists returned).',
        },
        {
            term: 'Government of India Act, 1919 (Montagu-Chelmsford Reforms)',
            definition: 'Dyarchy in provinces: Reserved subjects (British - Law, Finance, Police) and Transferred subjects (Indian ministers - Education, Health, Local govt). Bicameral central legislature. Franchise expanded but still limited. Simon Commission to review in 10 years.',
        },
        {
            term: 'Gandhian Entry: Early Satyagrahas (1915-1918)',
            definition: 'Gandhi returned from South Africa (Jan 1915). Champaran (1917): Against tinkathia system (forced indigo cultivation). Kheda (1918): Revenue relief during famine. Ahmedabad Mill Strike (1918): Workers\' first hunger strike. Established Sabarmati Ashram.',
            example: 'Rajendra Prasad was Gandhi\'s key associate in Champaran'
        },
        {
            term: 'Rowlatt Act & Jallianwala Bagh (1919)',
            definition: 'Rowlatt Act (Black Act): Detention without trial, no appeal. Protest on April 6, 1919. Jallianwala Bagh Massacre (April 13, 1919): General Dyer fired on unarmed crowd, ~400+ killed. Rabindranath Tagore renounced knighthood.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h06-01',
            headline: 'Kakori Train Action Centenary (2025)',
            date: '2025',
            source: 'Ministry of Culture',
            teachingHook: 'The Kakori train robbery (Aug 9, 1925) was conducted by Hindustan Republican Association (HRA) to fund revolutionary activities. Leaders: Ram Prasad Bismil, Ashfaqullah Khan, Chandrashekhar Azad, Rajendra Lahiri. Four executed. HRA later became HSRA.',
            relatedTopics: ['HRA', 'HSRA', 'Revolutionary movement'],
            iscentenary: true,
        },
    ],

    prelimsPointers: [
        { fact: 'Partition of Bengal: Oct 16, 1905 (Lord Curzon), revoked 1911', category: 'Year', highlight: true },
        { fact: 'Lal-Bal-Pal: Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal', category: 'Person', highlight: true },
        { fact: 'Surat Split (1907): Moderates vs Extremists, reunited Lucknow (1916)', category: 'Year' },
        { fact: '1909 Act (Morley-Minto): Introduced separate electorate for Muslims', category: 'Act', highlight: true },
        { fact: 'Satyendra Prasad Sinha: First Indian in Viceroy\'s Executive Council', category: 'Person' },
        { fact: 'Ghadar Party (1913): Founded by Lala Hardayal in San Francisco', category: 'Movement', highlight: true },
        { fact: 'Komagata Maru (1914): Ship incident, Gurdit Singh', category: 'Year' },
        { fact: 'Lucknow Pact (1916): Congress accepted separate electorate', category: 'Treaty', highlight: true },
        { fact: '1919 Act (Montagu-Chelmsford): Dyarchy in provinces', category: 'Act', highlight: true },
        { fact: 'Dyarchy: Reserved (British) + Transferred (Indian) subjects', category: 'Term' },
        { fact: 'Champaran (1917): Gandhi\'s first Satyagraha in India, against tinkathia', category: 'Movement', highlight: true },
        { fact: 'Tinkathia: Forced cultivation of indigo on 3/20th of land', category: 'Term' },
        { fact: 'Jallianwala Bagh: April 13, 1919, General Dyer, ~400+ killed', category: 'Year', highlight: true },
        { fact: 'Kakori Action (1925): HRA, Ram Prasad Bismil, Centenary in 2025', category: 'Year', highlight: true },
    ],

    timeline: [
        { year: '1905', event: 'Partition of Bengal (Oct 16)', significance: 'Swadeshi Movement begins' },
        { year: '1907', event: 'Surat Split', significance: 'Congress divided: Moderates vs Extremists' },
        { year: '1909', event: 'Morley-Minto Reforms', significance: 'Separate electorate introduced' },
        { year: '1913', event: 'Ghadar Party founded', significance: 'Revolutionary movement abroad' },
        { year: '1914', event: 'Komagata Maru incident', significance: 'Fueled revolutionary sentiments' },
        { year: '1916', event: 'Lucknow Pact, Home Rule Leagues', significance: 'Congress-League unity' },
        { year: '1917', event: 'Champaran Satyagraha', significance: 'Gandhi\'s first Indian campaign' },
        { year: '1919', event: 'Rowlatt Act, Jallianwala Bagh', significance: 'Turning point for mass movement' },
    ],

    pyqAlert: 'Focus on: Acts provisions (1909 - separate electorate, 1919 - dyarchy), Revolutionary organizations (Anushilan, Ghadar), Lucknow Pact significance',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
