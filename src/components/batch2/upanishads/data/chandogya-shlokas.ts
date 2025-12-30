// Chandogya Upanishad Data
// Source: Sama Veda | 8 Chapters (Key: Chapter 6 - Sadvidya)
// Theme: Oneness of Self and Universe
// Mahavakya: "Tat Tvam Asi" (That Thou Art)

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface ChandogyaDataEntry {
    id: number;
    chapter: number;
    section: number;
    verse: number;
    theme: string;
    sanskrit: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
    wordMeanings?: WordMeaning[];
}

export const CHANDOGYA_SHLOKAS: ChandogyaDataEntry[] = [
    // ==========================================
    // CHAPTER 6: INSTRUCTION TO SHVETAKETU
    // ==========================================

    {
        id: 1,
        chapter: 6,
        section: 1,
        verse: 3,
        theme: "The One Question",
        sanskrit: "तं ह पितोवाच श्वेतकेतो येनाश्रुतं श्रुतं भवत्यमतं मतमविज्ञातं विज्ञातमिति ॥",
        hindi: "पिता ने कहा: 'श्वेतकेतु! क्या तुमने उस उपदेश के बारे में पूछा जिसके जान लेने पर अनसुना सुना, अविचारित विचारित, और अज्ञात ज्ञात हो जाता है?'",
        english: "Father said: 'Shvetaketu! Did you ask for that Instruction by which the Unheard becomes Heard, the Unthought becomes Thought, and the Unknown becomes Known?'",
        simpleExplanation: "THE ULTIMATE QUESTION: Is there ONE thing knowing which you know EVERYTHING?",
        simpleExplanationHindi: "परम प्रश्न: क्या कोई एक चीज़ है जिसे जानने से सब जान जाओ?",
        nanoBananaPrompt: "A father asking his arrogant son: what is that one thing knowing which you know all?",
        wordMeanings: [
            { sanskrit: "aśrutaṃ śrutam", devanagari: "अश्रुतं श्रुतम्", hindi: "अनसुना सुना हो जाए", english: "unheard becomes heard" }
        ]
    },
    {
        id: 2,
        chapter: 6,
        section: 1,
        verse: 4,
        theme: "The Clay Analogy",
        sanskrit: "यथा सोम्यैकेन मृत्पिण्डेन सर्वं मृन्मयं विज्ञातं स्यात् । वाचारम्भणं विकारो नामधेयं मृत्तिकेत्येव सत्यम् ॥",
        hindi: "जैसे मिट्टी के एक पिंड को जान लेने से मिट्टी की सभी वस्तुएं जान ली जातीं। विकार (आकार) तो केवल नाम मात्र है; सत्य तो केवल 'मिट्टी' है।",
        english: "Just as by knowing one lump of Clay, all things made of clay are known. The modification is merely a name; the truth is just Clay.",
        simpleExplanation: "CLAY ANALOGY: Pots, cups, plates differ in name—but ALL are just CLAY. Similarly, all things are Brahman!",
        simpleExplanationHindi: "मिट्टी उपमा: घड़े, कप, प्लेट नाम में भिन्न—पर सब मिट्टी! वैसे ही, सब कुछ ब्रह्म है!",
        nanoBananaPrompt: "Various clay pots, cups, and plates—all just different forms of the same clay.",
        wordMeanings: [
            { sanskrit: "mṛt-piṇḍa", devanagari: "मृत्पिण्ड", hindi: "मिट्टी का पिंड", english: "lump of clay" },
            { sanskrit: "vācārambhaṇam", devanagari: "वाचारम्भणम्", hindi: "वाणी का आरंभ मात्र", english: "mere verbal designation" }
        ]
    },
    {
        id: 3,
        chapter: 6,
        section: 2,
        verse: 1,
        theme: "In the Beginning: Sat",
        sanskrit: "सदेव सोम्यदमग्र आसीदेकमेवाद्वितीयम् ॥",
        hindi: "सौम्य! सृष्टि से पहले यह केवल 'सत्' (Existence) ही था—एकमेव अद्वितीय (One without a second)।",
        english: "In the beginning, my dear, this was Being (Sat) alone—One only, without a second.",
        simpleExplanation: "BEFORE CREATION: Only ONE existed—Pure Being, without anything second. No duality!",
        simpleExplanationHindi: "सृष्टि से पहले: केवल एक था—शुद्ध सत्ता, बिना दूसरे के। अद्वैत!",
        nanoBananaPrompt: "Pure existence alone before creation—one without a second.",
        wordMeanings: [
            { sanskrit: "sat", devanagari: "सत्", hindi: "सत्/अस्तित्व", english: "Being/Existence" },
            { sanskrit: "ekam eva advitīyam", devanagari: "एकमेवाद्वितीयम्", hindi: "एक और अद्वितीय", english: "one only, without a second" }
        ]
    },
    {
        id: 4,
        chapter: 6,
        section: 2,
        verse: 2,
        theme: "Nothing from Nothing",
        sanskrit: "कुतस्तु खलु सोम्यैवं स्यादिति होवाच कथमसतः सज्जायतेति ॥",
        hindi: "पिता ने कहा: 'ऐसा कैसे हो सकता है? असत् (Nothing) से सत् (Something) कैसे पैदा हो सकता है?'",
        english: "He said: 'How could it be so? How could Being be produced from Non-being?'",
        simpleExplanation: "LOGIC: Something can't come from NOTHING. Therefore, Pure Being always existed!",
        simpleExplanationHindi: "तर्क: शून्य से कुछ नहीं आ सकता। इसलिए, शुद्ध सत्ता सदा थी!",
        nanoBananaPrompt: "A philosophical question: how can something arise from nothing?",
        wordMeanings: [
            { sanskrit: "asataḥ sat jāyate", devanagari: "असतः सत् जायते", hindi: "असत् से सत् जन्मे", english: "Being from Non-being" }
        ]
    },
    {
        id: 5,
        chapter: 6,
        section: 2,
        verse: 3,
        theme: "I Shall Become Many",
        sanskrit: "तदैक्षत बहु स्यां प्रजायेयेति तत्तेजोऽसृजत ॥",
        hindi: "उस (सत्) ने विचार किया: 'मैं बहुत हो जाऊँ, मैं उत्पन्न हो जाऊँ।' तब उसने तेज (Fire) को रचा...",
        english: "That (Being) thought: 'May I be Many; may I grow forth.' It created Fire...",
        simpleExplanation: "THE FIRST WILL: The One desired to become Many! This is the origin of creation—divine playfulness!",
        simpleExplanationHindi: "पहला संकल्प: एक ने बहुत बनना चाहा! यही सृष्टि का मूल—दिव्य लीला!",
        nanoBananaPrompt: "One light deciding to become many, creating fire as the first element.",
        wordMeanings: [
            { sanskrit: "bahu syām prajāyeya", devanagari: "बहु स्यां प्रजायेय", hindi: "मैं बहुत हो जाऊँ", english: "may I become many" }
        ]
    },
    {
        id: 6,
        chapter: 6,
        section: 8,
        verse: 7,
        theme: "TAT TVAM ASI (The Mahavakya)",
        sanskrit: "स य एषोऽणिमा । एतदात्म्यमिदं सर्वं । तत्सत्यम् । स आत्मा । तत्त्वमसि श्वेतकेतो इति ॥",
        hindi: "वह जो यह अणिमा (सूक्ष्म तत्व) है, यह सब उसी का स्वरूप है। वही सत्य है। वही आत्मा है। हे श्वेतकेतु! वह तुम हो (तत्त्वमसि)।",
        english: "That which is the subtle essence—in it, all this has its self. That is Truth. That is Self. THAT THOU ART (Tat Tvam Asi), O Shvetaketu.",
        simpleExplanation: "THE 4TH MAHAVAKYA: 'TAT TVAM ASI' = YOU ARE THAT! The cosmic essence IS your essence. You ARE Brahman!",
        simpleExplanationHindi: "चौथा महावाक्य: 'तत्त्वमसि' = वह तुम हो! ब्रह्मांडीय सार तुम्हारा सार है। तुम ब्रह्म हो!",
        nanoBananaPrompt: "A father pointing to his son and the universe: That (Brahman) you ARE!",
        wordMeanings: [
            { sanskrit: "tat tvam asi", devanagari: "तत्त्वमसि", hindi: "वह तुम हो", english: "That Thou Art" },
            { sanskrit: "aṇimā", devanagari: "अणिमा", hindi: "सूक्ष्म सार", english: "subtle essence" }
        ]
    },
    {
        id: 7,
        chapter: 6,
        section: 12,
        verse: 1,
        theme: "Banyan Seed Experiment",
        sanskrit: "न्यग्रोधफलमत आहरेति । भिन्धीति । किमत्र पश्यसीति । अण्व्य इवेमा धाना इति । आसामेकां भिन्धीति । किमत्र पश्यसीति । न किंचन भगव इति ॥",
        hindi: "'बरगद का फल लाओ।' 'तोड़ो।' 'क्या देखते हो?' 'छोटे बीज।' 'एक बीज तोड़ो।' 'अब क्या देखते हो?' 'कुछ भी नहीं, भगवन्।'",
        english: "'Bring a banyan fruit.' 'Break it.' 'What do you see?' 'Tiny seeds.' 'Break one seed.' 'What do you see?' 'Nothing at all, Sir.'",
        simpleExplanation: "THE SEED EXPERIMENT: Inside the seed is NOTHING visible—yet the HUGE banyan tree grows from it! That invisible essence = Brahman!",
        simpleExplanationHindi: "बीज प्रयोग: बीज के अंदर कुछ दिखता नहीं—फिर भी विशाल बरगद उगता है! वह अदृश्य सार = ब्रह्म!",
        nanoBananaPrompt: "A tiny seed broken open showing nothing, yet a great banyan tree behind it.",
        wordMeanings: [
            { sanskrit: "nyagrodha", devanagari: "न्यग्रोध", hindi: "बरगद", english: "banyan tree" },
            { sanskrit: "na kiñcana", devanagari: "न किञ्चन", hindi: "कुछ भी नहीं", english: "nothing at all" }
        ]
    },
    {
        id: 8,
        chapter: 6,
        section: 12,
        verse: 2,
        theme: "The Invisible Essence",
        sanskrit: "यं वै सोम्यैतमणिमानं न निभालयसे । एतस्य वै सोम्यैषोऽणिम्न एवं महान्न्यग्रोधस्तिष्ठति । श्रद्धत्स्व सोम्येति ॥",
        hindi: "उस अणिमा को तुम देख नहीं पाते, पर उसी सूक्ष्मता से यह महान बरगद खड़ा है। श्रद्धा रखो, सौम्य!",
        english: "That subtle essence which you do not perceive—from that very essence this great Banyan tree exists. Have faith, my dear!",
        simpleExplanation: "HAVE FAITH: The invisible essence you CAN'T see is the source of this HUGE tree. Trust the unseen!",
        simpleExplanationHindi: "श्रद्धा रखो: जो अदृश्य सार तुम नहीं देख सकते, वही इस विशाल वृक्ष का स्रोत है।",
        nanoBananaPrompt: "An invisible essence radiating from nothing, creating a massive banyan tree.",
        wordMeanings: [
            { sanskrit: "śraddhasva", devanagari: "श्रद्धत्स्व", hindi: "श्रद्धा रखो", english: "have faith" }
        ]
    },
    {
        id: 9,
        chapter: 6,
        section: 13,
        verse: 1,
        theme: "Salt Water Experiment",
        sanskrit: "लवणमेतदुदकेऽवधाय प्रातरुपसीदाथेति । तद्धावमृश्य न विवेद यथा विलीनमेव ॥",
        hindi: "'यह नमक पानी में डालो और कल सुबह आओ।' उसने टटोला पर नहीं मिला—वह विलीन हो चुका था।",
        english: "'Place this salt in water and come tomorrow.' He touched the water but couldn't find it—it had dissolved.",
        simpleExplanation: "THE SALT EXPERIMENT: Salt dissolves and becomes INVISIBLE—but you can TASTE it everywhere in the water!",
        simpleExplanationHindi: "नमक प्रयोग: नमक घुलकर अदृश्य हो गया—पर हर जगह पानी में उसका स्वाद है!",
        nanoBananaPrompt: "Salt dissolving into water, becoming invisible yet pervading completely.",
        wordMeanings: [
            { sanskrit: "lavaṇam", devanagari: "लवणम्", hindi: "नमक", english: "salt" },
            { sanskrit: "vilīnam", devanagari: "विलीनम्", hindi: "घुला हुआ", english: "dissolved" }
        ]
    },
    {
        id: 10,
        chapter: 6,
        section: 13,
        verse: 2,
        theme: "Brahman is Everywhere",
        sanskrit: "अङ्गास्यान्तादाचामेति कथमिति लवणमिति । अत्र वाव किल सत् सोम्य न निभालयसे अत्रैव किलेति ॥",
        hindi: "'ऊपर से चखो।' 'नमकीन।' 'बीच से।' 'नमकीन।' 'नीचे से।' 'नमकीन।' 'जैसे नमक दिखता नहीं पर है, वैसे ही सत् यहीं है।'",
        english: "'Sip from top.' 'Salty.' 'Middle.' 'Salty.' 'Bottom.' 'Salty.' 'Just as you don't see the salt but it's there, so Pure Being is HERE.'",
        simpleExplanation: "BRAHMAN IS LIKE SALT: You can't SEE it, but it's EVERYWHERE—in every taste, every part of existence!",
        simpleExplanationHindi: "ब्रह्म नमक जैसा: दिखता नहीं, पर हर जगह है—हर स्वाद में, अस्तित्व के हर हिस्से में!",
        nanoBananaPrompt: "Tasting water from top, middle, bottom—all salty. The invisible pervades all.",
        wordMeanings: [
            { sanskrit: "atraiva", devanagari: "अत्रैव", hindi: "यहीं", english: "right here" }
        ]
    },
    {
        id: 11,
        chapter: 6,
        section: 14,
        verse: 2,
        theme: "The Blindfolded Man (Need for Guru)",
        sanskrit: "यथा पुरुषं गन्धारेभ्योऽभिनद्धाक्षमानीय ततोऽतिजने विसृजेत् ... तस्याभिनहनं प्रमुच्य प्रब्रूयादेतां दिशं गन्धारा एतां दिशं व्रजेति ॥",
        hindi: "जैसे किसी को गांधार से आँखों पर पट्टी बांधकर जंगल में छोड़ दें... फिर कोई पट्टी खोलकर कहे 'इधर गांधार है'—तो वह पहुंच जाता है। वैसे ही, जिसके पास गुरु है, वही जानता है।",
        english: "As one blindfolded from Gandhara might be left in a forest... then someone removes the blindfold and says 'Gandhara is this way'—he reaches. So too, he who has a Teacher knows.",
        simpleExplanation: "WHY YOU NEED A GURU: Like a blindfolded man can't find the way, you need a Teacher to remove ignorance!",
        simpleExplanationHindi: "गुरु क्यों चाहिए: जैसे आंखों पर पट्टी वाला रास्ता नहीं पा सकता, तुम्हें अज्ञान हटाने को गुरु चाहिए!",
        nanoBananaPrompt: "A blindfolded man lost, then someone removes the blindfold and points the way.",
        wordMeanings: [
            { sanskrit: "ācāryavān puruṣaḥ veda", devanagari: "आचार्यवान् पुरुषः वेद", hindi: "गुरुवाला जानता है", english: "one with a Teacher knows" }
        ]
    }
];

// Metadata
export const CHANDOGYA_METADATA = {
    id: "chandogya",
    name: "Chandogya",
    nameSanskrit: "छान्दोग्योपनिषद्",
    veda: "Sama Veda",
    shlokaCount: 11,  // 11 selected key verses from Chapter 6
    chapterCount: 8,
    keyChapter: 6,
    mahavakya: {
        sanskrit: "तत् त्वम् असि",
        transliteration: "Tat Tvam Asi",
        meaning: "That Thou Art / You Are That",
        verse: 6
    },
    characters: {
        guru: "Uddalaka Aruni (Father)",
        student: "Shvetaketu (Son)"
    },
    famousAnalogies: {
        clay: { id: 2, description: "All clay products are just clay" },
        banyanSeed: { id: 7, description: "Invisible essence creates huge tree" },
        saltWater: { id: 9, description: "Dissolved salt pervades everywhere" },
        blindfoldedMan: { id: 11, description: "Need for a Guru" }
    },
    famousVerses: {
        mahavakya: { id: 6, chapter: 6, section: 8, verse: 7 },
        ekamEvadvitiyam: { id: 3, chapter: 6, section: 2, verse: 1 }
    }
};
