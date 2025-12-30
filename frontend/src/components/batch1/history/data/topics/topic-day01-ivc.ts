// Day 1: Indus Valley Civilization & Pre-History
// Module A: Ancient India

import { HistoryTopic } from '../history-types';

export const topicDay01IVC: HistoryTopic = {
    id: 1,
    day: 1,
    module: 'A',
    title: 'Indus Valley Civilization & Pre-History',
    syllabusTag: 'Module A: Ancient India',

    staticFocus: 'Stone Age (Bhimbetka, Burzahom) → IVC Sites, Town Planning, Seals, Religion & Decline',

    keyConcepts: [
        {
            term: 'Stone Age Periods',
            definition: 'Paleolithic (Old Stone Age - tools from quartzite), Mesolithic (Middle - microliths), Neolithic (New - polished tools, agriculture). Key sites: Bhimbetka (rock paintings), Burzahom (pit dwellings, dog burials).',
            example: 'Mehrgarh (Balochistan) is earliest Neolithic site showing transition to agriculture'
        },
        {
            term: 'Indus Valley Civilization (2600-1900 BCE)',
            definition: 'Also called Harappan Civilization. Largest Bronze Age civilization. Urban planning with grid pattern, Great Bath (Mohenjodaro), Granaries, advanced drainage system. No iron, no temples, no horse.',
            example: 'Covered area larger than Egypt and Mesopotamia combined'
        },
        {
            term: 'Major IVC Sites',
            definition: 'Harappa (granaries, workmen quarters), Mohenjodaro (Great Bath, bronze dancing girl), Lothal (dockyard, bead factory, fire altars), Dholavira (water reservoirs, signboard), Kalibangan (fire altars, ploughed field), Rakhigarhi (largest Indian site).',
        },
        {
            term: 'IVC Seals & Script',
            definition: 'Over 2000 seals found, mostly steatite. Unicorn most common animal. Pashupati seal (Proto-Shiva). Script is pictographic, boustrophedon (right to left), undeciphered.',
            example: 'Pashupati seal shows figure in yogic posture surrounded by animals'
        },
        {
            term: 'IVC Religion',
            definition: 'No temples found. Evidence of Mother Goddess worship (terracotta figurines), Proto-Shiva (Pashupati seal), Tree worship, Animal worship. Fire altars at Lothal and Kalibangan suggest fire worship.',
        },
        {
            term: 'IVC Trade',
            definition: 'Trade with Mesopotamia (called Meluha in Mesopotamian texts). Items: Carnelian beads, ivory, copper. Standard weights in multiples of 16. Lothal had a dockyard for maritime trade.',
        },
        {
            term: 'IVC Decline Theories',
            definition: 'Multiple theories: Climate change (Ghaggar-Hakra drying), Floods, Aryan invasion (now largely discredited), Ecological degradation. Most likely: gradual decline due to environmental factors.',
        },
        {
            term: 'Vedic Age Overview',
            definition: 'Rigvedic Period (1500-1000 BCE): Pastoral, Sapta Sindhu region, Sabha/Samiti. Later Vedic (1000-600 BCE): Agriculture-based, eastward expansion to Ganga plains, Varna system rigidified.',
            example: 'Rigvedic rivers: Sindhu (Indus), Vitasta (Jhelum), Asikni (Chenab)'
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h01-01',
            headline: 'Rakhigarhi DNA Study & New Museum (2024)',
            date: '2024',
            source: 'ASI / The Hindu',
            teachingHook: 'Rakhigarhi is the largest IVC site in India (350+ hectares). Recent DNA studies suggest IVC people had limited genetic input from Central Asian Steppe populations, challenging the "Aryan migration" theory. A state-of-the-art museum has been inaugurated at the site.',
            relatedTopics: ['IVC population', 'Aryan debate'],
        },
        {
            id: 'ca-h01-02',
            headline: 'Dholavira: UNESCO World Heritage Site (2021)',
            date: '2021',
            source: 'UNESCO',
            teachingHook: 'Dholavira in Gujarat\'s Kutch became India\'s 40th UNESCO World Heritage Site. Known for: sophisticated water harvesting system (16 reservoirs), unique city planning with 3 divisions (citadel, middle town, lower town), and a signboard with 10 large Indus script characters.',
            relatedTopics: ['Water management', 'Urban planning'],
        },
        {
            id: 'ca-h01-03',
            headline: 'Sinnoli Chariot Discovery (UP)',
            date: '2024',
            source: 'ASI',
            teachingHook: 'At Sinnoli (Baghpat, UP), ASI discovered a copper-fitted chariot and burial site dating to ~2000-1800 BCE (late Harappan/Copper-Bronze Age). This suggests the presence of a warrior class and possible horse/chariot use earlier than previously thought in the Ganga-Yamuna region.',
            relatedTopics: ['Chariot warfare', 'Bronze Age burials'],
        },
        {
            id: 'ca-h01-04',
            headline: 'Vadnagar Excavations (Gujarat)',
            date: '2024',
            source: 'ASI',
            teachingHook: 'Excavations at Vadnagar (Gujarat) reveal continuous human settlement from 800 BCE to present day, debunking the "Dark Age" myth between IVC decline and historical period. Site shows Buddhist monastery remains, supporting the theory of cultural continuity.',
            relatedTopics: ['Urban continuity', 'Buddhist sites'],
        },
    ],

    prelimsPointers: [
        { fact: 'Rakhigarhi (Haryana): Largest IVC site in India (350+ hectares)', category: 'Site', highlight: true },
        { fact: 'Mohenjodaro: Great Bath, Bronze Dancing Girl, Bearded Priest', category: 'Site', highlight: true },
        { fact: 'Lothal (Gujarat): Only IVC site with a dockyard', category: 'Site', highlight: true },
        { fact: 'Dholavira: Signboard with Indus script, 16 water reservoirs', category: 'Site' },
        { fact: 'Kalibangan: Evidence of ploughed field, fire altars', category: 'Site' },
        { fact: 'Bhimbetka (MP): Paleolithic rock paintings, UNESCO site', category: 'Site' },
        { fact: 'Burzahom (Kashmir): Neolithic pit dwellings, dog burial with master', category: 'Site' },
        { fact: 'Faience: Glazed material used for beads & ornaments in IVC', category: 'Term' },
        { fact: 'Steatite: Soft stone used for making seals', category: 'Term' },
        { fact: 'Meluha: Mesopotamian name for Indus region', category: 'Term', highlight: true },
        { fact: 'IVC used standard weights in multiples of 16', category: 'Term' },
        { fact: 'No iron, no horse, no temples in mature Harappan phase', category: 'Term', highlight: true },
    ],

    pyqAlert: 'Focus on: Site-specific features (Lothal dockyard, Dholavira reservoirs), Seals (Pashupati), Terms (Faience, Steatite, Meluha)',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
