// Shuka Rahasya Upanishad Data (#36 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Samanya
// Theme: The Four Mahavakyas and Tat Tvam Asi Analysis
// Total: 22 Mantras - Dialogue between Shuka and Shiva

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface ShukaRahasyaDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const SHUKA_RAHASYA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const SHUKA_RAHASYA_SHLOKAS: ShukaRahasyaDataEntry[] = [
    // PART 1: SHUKA'S REQUEST
    {
        id: 1, mantra: 1, theme: "Shuka Asks Shiva",
        sanskrit: "शुकः परमरहस्यं शिवमपृच्छत् । भो देव सर्वयज्ञानां फलं ब्रूहि ।",
        hindi: "शुक ने शिव से परम रहस्य पूछा: हे देव! सभी यज्ञों का फल बताइए।",
        english: "Shuka asked Shiva the Supreme Secret: O Lord! Tell me the fruit of all sacrifices.",
        simpleExplanation: "SHUKA ASKS: What's the ESSENCE of all sacrifices? Tell me the SECRET!",
        simpleExplanationHindi: "शुक पूछते हैं: सभी यज्ञों का सार क्या? रहस्य बताइए!",
        nanoBananaPrompt: "Young Shuka asking Lord Shiva the supreme secret."
    },
    {
        id: 2, mantra: 2, theme: "Shiva's Promise",
        sanskrit: "शृणु प्रवक्ष्यामि परं तत्त्वं रहस्यकम् । यस्य विज्ञानमात्रेण मोक्षं प्राप्नोति मानवः ॥",
        hindi: "सुनो, परम तत्व और रहस्य बताता हूँ। जिसके ज्ञान मात्र से मनुष्य मोक्ष प्राप्त करता है।",
        english: "Listen! I declare the Supreme Truth. By mere realization of which, one attains Liberation.",
        simpleExplanation: "SHIVA PROMISES: I'll tell you THE SECRET! Know it = INSTANT MOKSHA!",
        simpleExplanationHindi: "शिव का वादा: रहस्य बताता हूँ! जानो = तत्काल मोक्ष!",
        nanoBananaPrompt: "Shiva promising to reveal the secret of instant liberation."
    },

    // PART 2: THE FOUR MAHAVAKYAS
    {
        id: 3, mantra: 3, theme: "The Four Mahavakyas",
        sanskrit: "चतुर्महावाक्यार्थविचारणं कर्तव्यम् । १. प्रज्ञानं ब्रह्म । २. अहं ब्रह्मास्मि । ३. तत्त्वमसि । ४. अयमात्मा ब्रह्म ।",
        hindi: "चार महावाक्यों का विचार करो: 1. प्रज्ञानं ब्रह्म 2. अहं ब्रह्मास्मि 3. तत्त्वमसि 4. अयमात्मा ब्रह्म",
        english: "Inquire into the Four Great Sayings: 1. Consciousness is Brahman 2. I am Brahman 3. That Thou Art 4. This Self is Brahman",
        simpleExplanation: "4 MAHAVAKYAS: The FOUR greatest sentences in all Vedas! Core of Vedanta!",
        simpleExplanationHindi: "4 महावाक्य: सभी वेदों के चार महानतम वाक्य! वेदांत का सार!",
        nanoBananaPrompt: "Four Mahavakyas glowing with golden light.",
        wordMeanings: [
            { sanskrit: "mahāvākya", devanagari: "महावाक्य", hindi: "महान वाक्य", english: "great saying" }
        ]
    },
    {
        id: 4, mantra: 4, theme: "Rig Veda Mahavakya",
        sanskrit: "प्रज्ञानं ब्रह्म इति ऋग्वेदे ऐतरेयोपनिषदि ।",
        hindi: "'प्रज्ञानं ब्रह्म' ऋग्वेद की ऐतरेय उपनिषद में।",
        english: "'Prajnanam Brahma' is in Aitareya Upanishad of Rig Veda.",
        simpleExplanation: "RIG VEDA: CONSCIOUSNESS IS BRAHMAN! (Aitareya)",
        simpleExplanationHindi: "ऋग्वेद: चेतना ही ब्रह्म है! (ऐतरेय)",
        nanoBananaPrompt: "Prajnanam Brahma—consciousness is Brahman."
    },
    {
        id: 5, mantra: 5, theme: "Yajur Veda Mahavakya",
        sanskrit: "अहं ब्रह्मास्मि इति यजुर्वेदे बृहदारण्यकोपनिषदि ।",
        hindi: "'अहं ब्रह्मास्मि' यजुर्वेद की बृहदारण्यक उपनिषद में।",
        english: "'Aham Brahmasmi' is in Brihadaranyaka Upanishad of Yajur Veda.",
        simpleExplanation: "YAJUR VEDA: I AM BRAHMAN! (Brihadaranyaka)",
        simpleExplanationHindi: "यजुर्वेद: मैं ब्रह्म हूँ! (बृहदारण्यक)",
        nanoBananaPrompt: "Aham Brahmasmi—I am Brahman."
    },
    {
        id: 6, mantra: 6, theme: "Sama Veda Mahavakya",
        sanskrit: "तत्त्वमसि इति सामवेदे छन्दोग्योपनिषदि ।",
        hindi: "'तत्त्वमसि' सामवेद की छान्दोग्य उपनिषद में।",
        english: "'Tat Tvam Asi' is in Chandogya Upanishad of Sama Veda.",
        simpleExplanation: "SAMA VEDA: THAT THOU ART! (Chandogya)",
        simpleExplanationHindi: "सामवेद: वह तुम हो! (छान्दोग्य)",
        nanoBananaPrompt: "Tat Tvam Asi—That Thou Art."
    },
    {
        id: 7, mantra: 7, theme: "Atharva Veda Mahavakya",
        sanskrit: "अयमात्मा ब्रह्म इति अथर्ववेदे माण्डूक्योपनिषदि ।",
        hindi: "'अयमात्मा ब्रह्म' अथर्ववेद की माण्डूक्य उपनिषद में।",
        english: "'Ayam Atma Brahma' is in Mandukya Upanishad of Atharva Veda.",
        simpleExplanation: "ATHARVA VEDA: THIS SELF IS BRAHMAN! (Mandukya)",
        simpleExplanationHindi: "अथर्ववेद: यह आत्मा ब्रह्म है! (माण्डूक्य)",
        nanoBananaPrompt: "Ayam Atma Brahma—this Self is Brahman."
    },

    // PART 3: TAT TVAM ASI ANALYSIS
    {
        id: 8, mantra: 8, theme: "TAT = Ishvara/Brahman",
        sanskrit: "'तत्' पदवाच्यः सर्वज्ञत्वादिविशिष्ट ईश्वरः । 'तत्' पदलक्ष्यः निरुपाधिकं चैतन्यम् ।",
        hindi: "'तत्' का शाब्दिक अर्थ = सर्वज्ञ ईश्वर। लक्ष्य अर्थ = उपाधि-रहित चैतन्य।",
        english: "'TAT' literally = Omniscient Ishvara. Implied = Conditionless Consciousness.",
        simpleExplanation: "TAT = THAT! Literally: God with qualities. Implied: PURE CONSCIOUSNESS!",
        simpleExplanationHindi: "तत् = वह! शाब्दिक: गुणयुक्त ईश्वर। लक्ष्य: शुद्ध चैतन्य!",
        nanoBananaPrompt: "TAT—pointing to Ishvara and Pure Consciousness."
    },
    {
        id: 9, mantra: 9, theme: "TVAM = Jiva/Self",
        sanskrit: "'त्वं' पदवाच्यः अल्पज्ञत्वादिविशिष्टो जीवः । 'त्वं' पदलक्ष्यः निरुपाधिकं कूटस्थचैतन्यम् ।",
        hindi: "'त्वम्' का शाब्दिक अर्थ = अल्पज्ञ जीव। लक्ष्य अर्थ = उपाधि-रहित कूटस्थ चैतन्य।",
        english: "'TVAM' literally = Limited Jiva. Implied = Conditionless Kutastha Consciousness.",
        simpleExplanation: "TVAM = YOU! Literally: limited soul. Implied: SAME PURE CONSCIOUSNESS!",
        simpleExplanationHindi: "त्वम् = तुम! शाब्दिक: सीमित जीव। लक्ष्य: वही शुद्ध चैतन्य!",
        nanoBananaPrompt: "TVAM—pointing to Jiva and inner Consciousness."
    },
    {
        id: 10, mantra: 10, theme: "ASI = Unity",
        sanskrit: "'असि' पदादैक्यसिद्धिः ।",
        hindi: "'असि' पद से दोनों की एकता सिद्ध।",
        english: "By 'ASI' (Art), Unity of both is established.",
        simpleExplanation: "ASI = ARE! The verb uniting TAT and TVAM as ONE!",
        simpleExplanationHindi: "असि = हो! वह क्रिया जो तत् और त्वम् को एक करती है!",
        nanoBananaPrompt: "ASI—the unifying verb between That and You."
    },
    {
        id: 11, mantra: 11, theme: "Objection: How Unity?",
        sanskrit: "सर्वज्ञत्वाल्पज्ञत्वयोः विरुद्धधर्माक्रान्तयोः कथमेकत्वं घटते ।",
        hindi: "सर्वज्ञता और अल्पज्ञता विरुद्ध हैं; इनमें एकता कैसे?",
        english: "Omniscience and Limited Knowledge are contradictory. How can there be Unity?",
        simpleExplanation: "OBJECTION: God is ALL-KNOWING, I'm ignorant. How can we be SAME?!",
        simpleExplanationHindi: "आपत्ति: ईश्वर सर्वज्ञ, मैं अज्ञानी। हम एक कैसे?!",
        nanoBananaPrompt: "Question: How can infinite and finite be one?"
    },
    {
        id: 12, mantra: 12, theme: "Answer: Jahal-Ajahal Lakshana",
        sanskrit: "जहदजहल्लक्षणया वाच्यार्थभेदेऽपि लक्ष्यार्थस्यैकत्वात् ।",
        hindi: "जहदजहल्लक्षणा से शाब्दिक भेद में भी लक्ष्य एक।",
        english: "Through Jahal-Ajahal Lakshana, despite literal difference, Implied Essence is ONE.",
        simpleExplanation: "ANSWER: Drop contradictions, keep ESSENCE! Essence = SAME Consciousness!",
        simpleExplanationHindi: "उत्तर: विरोध छोड़ो, सार रखो! सार = एक ही चैतन्य!",
        nanoBananaPrompt: "Jahal-Ajahal Lakshana—dropping contradictions, keeping essence."
    },
    {
        id: 13, mantra: 13, theme: "Example: Devadatta",
        sanskrit: "यथा 'सोऽयं देवदत्तः' इति । देवदत्तमात्रं लक्ष्यते ।",
        hindi: "'वह यह देवदत्त है'—देश-काल भेद छोड़कर केवल देवदत्त लक्ष्य।",
        english: "'This is that Devadatta'—dropping time/place difference, only Devadatta is implied.",
        simpleExplanation: "EXAMPLE: 'That (old) Devadatta = This (now) Devadatta.' Same person!",
        simpleExplanationHindi: "उदाहरण: 'वह (पुराना) = यह (अभी का) देवदत्त।' एक ही व्यक्ति!",
        nanoBananaPrompt: "Same Devadatta—then and now, dropping time-place."
    },
    {
        id: 14, mantra: 14, theme: "Applied to Tat Tvam Asi",
        sanskrit: "'तत्त्वमसि' इत्यत्रापि सर्वज्ञत्वाल्पज्ञत्वं परित्यज्य चैतन्यमात्रं लक्ष्यते ।",
        hindi: "'तत्त्वमसि' में सर्वज्ञता-अल्पज्ञता छोड़कर केवल चैतन्य लक्ष्य।",
        english: "In 'Tat Tvam Asi', dropping Omniscience/Limited Knowledge, only CONSCIOUSNESS implied.",
        simpleExplanation: "RESULT: Drop God's labels, drop your labels = SAME CONSCIOUSNESS!",
        simpleExplanationHindi: "परिणाम: ईश्वर के लेबल छोड़ो, अपने लेबल छोड़ो = एक ही चैतन्य!",
        nanoBananaPrompt: "Tat Tvam Asi—pure consciousness revealed as one."
    },

    // PART 4: LIBERATION
    {
        id: 15, mantra: 15, theme: "Jivanmukti",
        sanskrit: "'अहं ब्रह्मास्मी'ति यदा साक्षात्करोति तदा जीवन्मुक्तो भवति ।",
        hindi: "'मैं ब्रह्म हूँ' साक्षात्कार करने पर जीवनमुक्त होता है।",
        english: "When one directly realizes 'I am Brahman', he becomes Jivanmukta.",
        simpleExplanation: "JIVANMUKTI: Realize 'I AM BRAHMAN' = Liberated while ALIVE!",
        simpleExplanationHindi: "जीवनमुक्ति: 'मैं ब्रह्म हूँ' अनुभव = जीते जी मुक्त!",
        nanoBananaPrompt: "Jivanmukta—liberated while living, realizing I am Brahman."
    },
    {
        id: 16, mantra: 16, theme: "No Bondage, No Liberation",
        sanskrit: "अहं चिन्मात्रो न देहादिः । न मे बन्धः न मोक्षः ।",
        hindi: "मैं केवल चित् हूँ, देह नहीं। न मेरा बंधन, न मोक्ष।",
        english: "I am Pure Consciousness, not body. I have no bondage, no liberation.",
        simpleExplanation: "BEYOND BOTH: I'm not body! No bondage ever happened, no liberation needed!",
        simpleExplanationHindi: "दोनों से परे: मैं शरीर नहीं! बंधन हुआ ही नहीं, मोक्ष चाहिए ही नहीं!",
        nanoBananaPrompt: "Beyond bondage and liberation—pure consciousness."
    },

    // PART 5: TWO TYPES OF MUKTI
    {
        id: 17, mantra: 18, theme: "Shuka Asks About Mukti Types",
        sanskrit: "सद्योमुक्तिः क्रममुक्तिश्चेति द्विविधा मुक्तिः ।",
        hindi: "मुक्ति दो प्रकार: सद्योमुक्ति (तत्काल) और क्रममुक्ति (धीरे-धीरे)।",
        english: "Liberation is two types: Sadyo Mukti (Instant) and Krama Mukti (Gradual).",
        simpleExplanation: "2 TYPES: INSTANT liberation vs GRADUAL liberation!",
        simpleExplanationHindi: "2 प्रकार: तत्काल मुक्ति vs धीरे-धीरे मुक्ति!",
        nanoBananaPrompt: "Two paths—instant and gradual liberation."
    },
    {
        id: 18, mantra: 19, theme: "Sadyo Mukti - Instant",
        sanskrit: "इहैव सर्वे प्रविलीयन्ते कामा येऽस्य हृदि श्रिताः । अथ मर्त्योऽमृतो भवति ।",
        hindi: "जब हृदय की सभी कामनाएं यहीं विलीन हो जाएं, मर्त्य अमर हो जाता है।",
        english: "When all desires in the heart dissolve here, the mortal becomes Immortal.",
        simpleExplanation: "INSTANT MOKSHA: All desires END right NOW = IMMORTAL this moment!",
        simpleExplanationHindi: "तत्काल मोक्ष: सभी इच्छाएं अभी खत्म = इसी क्षण अमर!",
        nanoBananaPrompt: "Sadyo Mukti—all desires dissolving, becoming immortal now."
    },
    {
        id: 19, mantra: 20, theme: "Krama Mukti - Gradual",
        sanskrit: "अर्चिरादिमार्गेण गत्वा ब्रह्मलोकं प्राप्य अन्ते ब्रह्मणा सह मुच्यते सा क्रममुक्तिः ।",
        hindi: "अर्चि-मार्ग से ब्रह्मलोक जाकर, अंत में ब्रह्मा के साथ मुक्त = क्रममुक्ति।",
        english: "Going by Path of Light to Brahma-Loka, finally liberated with Brahma = Krama Mukti.",
        simpleExplanation: "GRADUAL: Go to Brahma-Loka after death, liberated at cosmic dissolution!",
        simpleExplanationHindi: "धीरे-धीरे: मृत्यु बाद ब्रह्मलोक, प्रलय पर मुक्ति!",
        nanoBananaPrompt: "Krama Mukti—ascending through light to Brahma-Loka."
    },
    {
        id: 20, mantra: 21, theme: "Sadyo Mukti is Superior",
        sanskrit: "तस्मात् सद्योमुक्तिरेव श्रेष्ठा । तत्त्वमसीति महावाक्येन सद्योमुक्तिर्लभ्यते ।",
        hindi: "इसलिए सद्योमुक्ति श्रेष्ठ है। 'तत्त्वमसि' महावाक्य से सद्योमुक्ति प्राप्त।",
        english: "Therefore Sadyo Mukti is superior. By 'Tat Tvam Asi' Mahavakya, Instant Liberation is attained.",
        simpleExplanation: "BEST PATH: 'Tat Tvam Asi' = INSTANT liberation! No waiting for cosmic cycles!",
        simpleExplanationHindi: "श्रेष्ठ मार्ग: 'तत्त्वमसि' = तत्काल मुक्ति! ब्रह्मांडीय चक्रों का इंतजार नहीं!",
        nanoBananaPrompt: "Tat Tvam Asi granting instant liberation—the superior path."
    }
];

export const SHUKA_RAHASYA_METADATA = {
    id: "shuka-rahasya", name: "Shuka Rahasya", nameSanskrit: "शुकरहस्योपनिषद्",
    veda: "Krishna Yajur Veda", category: "Samanya", shlokaCount: 20, sequenceNumber: 36,
    mahavakyas: [
        { veda: "Rig", upanishad: "Aitareya", vakya: "Prajnanam Brahma", meaning: "Consciousness is Brahman" },
        { veda: "Yajur", upanishad: "Brihadaranyaka", vakya: "Aham Brahmasmi", meaning: "I am Brahman" },
        { veda: "Sama", upanishad: "Chandogya", vakya: "Tat Tvam Asi", meaning: "That Thou Art" },
        { veda: "Atharva", upanishad: "Mandukya", vakya: "Ayam Atma Brahma", meaning: "This Self is Brahman" }
    ],
    tatTvamAsiAnalysis: {
        tat: { literal: "Omniscient Ishvara", implied: "Pure Consciousness" },
        tvam: { literal: "Limited Jiva", implied: "Same Pure Consciousness" },
        asi: "Unity established"
    },
    muktiTypes: { sadyo: "Instant—desires end NOW", krama: "Gradual—via Brahma-Loka" }
};

export const getShukaRahasyaMantra = (mantra: number) => SHUKA_RAHASYA_SHLOKAS.find(s => s.mantra === mantra);
