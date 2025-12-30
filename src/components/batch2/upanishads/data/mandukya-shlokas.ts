// Mandukya Upanishad Data
// Source: Atharva Veda | 12 Verses | The Most Powerful Upanishad
// Theme: OM (AUM) and the Four States of Consciousness
// "If you want liberation, the Mandukya alone is sufficient." - Muktika Upanishad

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface MandukyaDataEntry {
    id: number;
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

export const MANDUKYA_SHLOKAS: MandukyaDataEntry[] = [
    {
        id: 1,
        verse: 1,
        theme: "OM is Everything",
        sanskrit: "ओमित्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद्भविष्यदिति सर्वमोङ्कार एव । यच्चान्यत् त्रिकालातीतं तदप्योङ्कार एव ॥ १ ॥",
        hindi: "'ओम्'—यह अक्षर ही यह सब कुछ है। जो भूत, भवत् और भविष्यत् है—वह सब ओंकार ही है। और जो तीनों कालों से परे है, वह भी ओंकार ही है।",
        english: "OM—this syllable is this whole world. The Past, Present, and Future—all is OM. And whatever is beyond the three times, that also is OM.",
        simpleExplanation: "OM = EVERYTHING. Past, present, future, and even what's beyond time—all is contained in OM.",
        simpleExplanationHindi: "ओम = सब कुछ। भूत, वर्तमान, भविष्य, और समय से परे भी—सब ओम में है।",
        nanoBananaPrompt: "The symbol OM containing past present and future, expanding beyond time itself.",
        wordMeanings: [
            { sanskrit: "oṃkāra", devanagari: "ओंकार", hindi: "ओम", english: "OM" },
            { sanskrit: "trikālātītam", devanagari: "त्रिकालातीतम्", hindi: "तीन कालों से परे", english: "beyond the three times" }
        ]
    },
    {
        id: 2,
        verse: 2,
        theme: "Self has Four Quarters",
        sanskrit: "सर्वं ह्येतद् ब्रह्मायमात्मा ब्रह्म सोऽयमात्मा चतुष्पात् ॥ २ ॥",
        hindi: "यह सब कुछ ब्रह्म है। यह आत्मा ही ब्रह्म है। इस आत्मा के चार पाद (Four Quarters) हैं।",
        english: "All this is Brahman. This Atman is Brahman. This Atman has Four Quarters.",
        simpleExplanation: "ATMAN = BRAHMAN. And this Self has FOUR aspects/states (to be explained next).",
        simpleExplanationHindi: "आत्मा = ब्रह्म। और इस आत्मा की चार अवस्थाएं हैं (आगे समझाई जाएंगी)।",
        nanoBananaPrompt: "A circle divided into four quarters, each representing a state of consciousness.",
        wordMeanings: [
            { sanskrit: "catuṣpāt", devanagari: "चतुष्पात्", hindi: "चार पाद वाला", english: "having four quarters" },
            { sanskrit: "ātmā brahma", devanagari: "आत्मा ब्रह्म", hindi: "आत्मा ही ब्रह्म है", english: "Self is Brahman" }
        ]
    },
    {
        id: 3,
        verse: 3,
        theme: "First Quarter: Waking (Vaishvanara)",
        sanskrit: "जागरितस्थानो बहिष्प्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः स्थूलभुग्वैश्वानरः प्रथमः पादः ॥ ३ ॥",
        hindi: "जिसका स्थान जाग्रत अवस्था है, जिसकी चेतना बाहर की ओर है, जिसके सात अंग और उन्नीस मुख हैं, जो स्थूल विषयों का भोग करता है—वह वैश्वानर प्रथम पाद है।",
        english: "The First Quarter is VAISHVANARA: sphere is Waking State, conscious of external world, seven limbs, nineteen mouths, experiencing gross objects.",
        simpleExplanation: "STATE 1 - WAKING: You're aware of the OUTSIDE world. This is the 'A' of AUM.",
        simpleExplanationHindi: "अवस्था 1 - जाग्रत: आप बाहरी दुनिया के प्रति जागरूक हैं। यह AUM का 'A' है।",
        nanoBananaPrompt: "A person fully awake, eyes open, aware of the external physical world around them.",
        wordMeanings: [
            { sanskrit: "jāgarita-sthānaḥ", devanagari: "जागरितस्थानः", hindi: "जाग्रत अवस्था में", english: "in waking state" },
            { sanskrit: "bahiḥ-prajñaḥ", devanagari: "बहिःप्रज्ञः", hindi: "बाहरी चेतना वाला", english: "externally conscious" },
            { sanskrit: "vaishvānara", devanagari: "वैश्वानर", hindi: "वैश्वानर", english: "the Universal Person" }
        ]
    },
    {
        id: 4,
        verse: 4,
        theme: "Second Quarter: Dreaming (Taijasa)",
        sanskrit: "स्वप्नस्थानोऽन्तःप्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः प्रविविक्तभुक् तैजसो द्वितीयः पादः ॥ ४ ॥",
        hindi: "जिसका स्थान स्वप्न अवस्था है, जिसकी चेतना भीतर की ओर है, जिसके सात अंग और उन्नीस मुख हैं, जो सूक्ष्म विषयों का भोग करता है—वह तैजस द्वितीय पाद है।",
        english: "The Second Quarter is TAIJASA: sphere is Dream State, conscious of internal world, seven limbs, nineteen mouths, experiencing subtle objects.",
        simpleExplanation: "STATE 2 - DREAMING: You're aware of the INSIDE world (mental images). This is the 'U' of AUM.",
        simpleExplanationHindi: "अवस्था 2 - स्वप्न: आप भीतरी दुनिया (मानसिक छवियों) के प्रति जागरूक हैं। यह AUM का 'U' है।",
        nanoBananaPrompt: "A person dreaming, eyes closed, with colorful mental imagery floating around their head.",
        wordMeanings: [
            { sanskrit: "svapna-sthānaḥ", devanagari: "स्वप्नस्थानः", hindi: "स्वप्न अवस्था में", english: "in dream state" },
            { sanskrit: "antaḥ-prajñaḥ", devanagari: "अन्तःप्रज्ञः", hindi: "भीतरी चेतना वाला", english: "internally conscious" },
            { sanskrit: "taijasa", devanagari: "तैजस", hindi: "तैजस/तेजमय", english: "the Luminous One" }
        ]
    },
    {
        id: 5,
        verse: 5,
        theme: "Third Quarter: Deep Sleep (Prajna)",
        sanskrit: "यत्र सुप्तो न कञ्चन कामं कामयते न कञ्चन स्वप्नं पश्यति तत् सुषुप्तम् । सुषुप्तस्थान एकीभूतः प्रज्ञानघन एवानन्दमयो ह्यानन्दभुक् चेतोमुखः प्राज्ञस्तृतीयः पादः ॥ ५ ॥",
        hindi: "जहाँ सोया हुआ व्यक्ति न कामना करता है न सपना देखता है—वह सुषुप्ति है। जो एकीभूत, प्रज्ञानघन, आनंदमय है—वह प्राज्ञ तृतीय पाद है।",
        english: "Where the sleeper desires nothing and sees no dream is Deep Sleep. The Third Quarter is PRAJNA: unified, mass of consciousness, blissful—the gateway.",
        simpleExplanation: "STATE 3 - DEEP SLEEP: No desires, no dreams, just pure bliss. This is the 'M' of AUM. You become ONE.",
        simpleExplanationHindi: "अवस्था 3 - सुषुप्ति: न इच्छा, न सपने, केवल शुद्ध आनंद। यह AUM का 'M' है। आप एक हो जाते हैं।",
        nanoBananaPrompt: "A person in deep dreamless sleep, surrounded by peaceful darkness and pure bliss.",
        wordMeanings: [
            { sanskrit: "suṣuptam", devanagari: "सुषुप्तम्", hindi: "गहरी नींद", english: "deep sleep" },
            { sanskrit: "prajñāna-ghana", devanagari: "प्रज्ञानघन", hindi: "चेतना का पुंज", english: "mass of consciousness" },
            { sanskrit: "ānanda-maya", devanagari: "आनन्दमय", hindi: "आनंदमय", english: "full of bliss" },
            { sanskrit: "prājña", devanagari: "प्राज्ञ", hindi: "प्राज्ञ", english: "the Wise One" }
        ]
    },
    {
        id: 6,
        verse: 6,
        theme: "The Lord of All (Ishvara)",
        sanskrit: "एष सर्वेश्वर एष सर्वज्ञ एषोऽन्तर्याम्येष योनिः सर्वस्य प्रभवाप्ययौ हि भूतानाम् ॥ ६ ॥",
        hindi: "यह (प्राज्ञ) ही सर्वेश्वर है, सर्वज्ञ है, अंतर्यामी है, सबकी योनि है, प्राणियों की उत्पत्ति और प्रलय का स्थान है।",
        english: "This (Prajna) is the Lord of All, the Omniscient, the Inner Controller, the Source of all, the origin and end of all beings.",
        simpleExplanation: "GOD = DEEP SLEEP STATE! The 'Ishvara' (God) is the Self in the causal/deep sleep state. Mind-blowing!",
        simpleExplanationHindi: "ईश्वर = सुषुप्ति अवस्था! 'ईश्वर' (भगवान) कारण/सुषुप्ति अवस्था में आत्मा है। चौंकाने वाला!",
        nanoBananaPrompt: "A being in deep sleep who is simultaneously the lord and source of all creation.",
        wordMeanings: [
            { sanskrit: "sarveśvara", devanagari: "सर्वेश्वर", hindi: "सबका स्वामी", english: "Lord of all" },
            { sanskrit: "antaryāmī", devanagari: "अन्तर्यामी", hindi: "भीतर का शासक", english: "inner controller" },
            { sanskrit: "yoniḥ", devanagari: "योनिः", hindi: "कारण/स्रोत", english: "source/womb" }
        ]
    },
    {
        id: 7,
        verse: 7,
        theme: "The Fourth: Turiya (Most Famous)",
        sanskrit: "नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम् । अदृष्टमव्यवहार्यमग्राह्यमलक्षणमचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारं प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः ॥ ७ ॥",
        hindi: "जो न भीतर जानता है, न बाहर, न दोनों ओर, न प्रज्ञानघन, न जाता न अजाता। अदृष्ट, अग्राह्य, अलक्षण, अचिन्त्य, अव्यपदेश्य। जहाँ प्रपंच का उपशम है—वह शांत, शिव, अद्वैत है। वही चतुर्थ (Turiya) है। वही आत्मा है।",
        english: "Not inwardly cognitive, not outwardly, not both, not a mass of consciousness. Unseen, ungraspable, unthinkable, indescribable. The cessation of universe—PEACEFUL, AUSPICIOUS, NON-DUAL. That is the FOURTH (Turiya). That is the Self.",
        simpleExplanation: "STATE 4 - TURIYA: Beyond waking, dreaming, deep sleep. Pure awareness. SHANTAM (Peace), SHIVAM (Bliss), ADVAITAM (Non-dual).",
        simpleExplanationHindi: "अवस्था 4 - तुरीय: जाग्रत, स्वप्न, सुषुप्ति से परे। शुद्ध जागरूकता। शांतम् (शांति), शिवम् (कल्याण), अद्वैतम् (अद्वैत)।",
        nanoBananaPrompt: "Pure awareness beyond all states—peaceful, auspicious, non-dual light.",
        wordMeanings: [
            { sanskrit: "śāntam", devanagari: "शान्तम्", hindi: "शांत", english: "peaceful" },
            { sanskrit: "śivam", devanagari: "शिवम्", hindi: "कल्याणमय", english: "auspicious" },
            { sanskrit: "advaitam", devanagari: "अद्वैतम्", hindi: "अद्वैत/एक", english: "non-dual" },
            { sanskrit: "turīya", devanagari: "तुरीय", hindi: "चतुर्थ", english: "the Fourth" },
            { sanskrit: "prapañcopaśamam", devanagari: "प्रपञ्चोपशमम्", hindi: "संसार का अंत", english: "cessation of world" }
        ]
    },
    {
        id: 8,
        verse: 8,
        theme: "OM = AUM = Self",
        sanskrit: "सोऽयमात्माध्यक्षरमोङ्कारोऽधिमात्रं पादा मात्रा मात्राश्च पादा अकार उकारो मकार इति ॥ ८ ॥",
        hindi: "वह यह आत्मा ही अक्षर दृष्टि से ओंकार है। पाद ही मात्राएं हैं, मात्राएं ही पाद हैं—वे हैं 'अ', 'उ', और 'म'।",
        english: "That same Self is OM from the point of syllables. The Quarters are the Measures: 'A', 'U', and 'M'.",
        simpleExplanation: "A-U-M corresponds to the three states! A = Waking, U = Dreaming, M = Deep Sleep. Genius!",
        simpleExplanationHindi: "अ-उ-म तीन अवस्थाओं से मेल खाता है! अ = जाग्रत, उ = स्वप्न, म = सुषुप्ति। प्रतिभाशाली!",
        nanoBananaPrompt: "The letters A, U, M each glowing with a different color representing three states.",
        wordMeanings: [
            { sanskrit: "a-kāra", devanagari: "अकार", hindi: "अ", english: "letter A" },
            { sanskrit: "u-kāra", devanagari: "उकार", hindi: "उ", english: "letter U" },
            { sanskrit: "ma-kāra", devanagari: "मकार", hindi: "म", english: "letter M" },
            { sanskrit: "mātrā", devanagari: "मात्रा", hindi: "मात्रा/ध्वनि", english: "measure/sound" }
        ]
    },
    {
        id: 9,
        verse: 9,
        theme: "'A' = Vaishvanara (Waking)",
        sanskrit: "जागरितस्थानो वैश्वानरोऽकारः प्रथमा मात्राप्तेरादिमत्त्वाद्वाप्नोति ह वै सर्वान् कामानादिश्च भवति य एवं वेद ॥ ९ ॥",
        hindi: "जाग्रत का वैश्वानर ही 'अ' है—क्योंकि यह आप्ति (व्यापक) और आदि है। जो ऐसा जानता है, वह सभी कामनाएं प्राप्त करता है और प्रधान बनता है।",
        english: "'A' (first sound) = Vaishvanara (Waking State). It is all-pervading and the first. He who knows this obtains all desires and becomes the first.",
        simpleExplanation: "When you chant OM, 'A' represents the WAKING state. All-pervading like waking awareness.",
        simpleExplanationHindi: "जब आप ओम का जाप करते हैं, 'अ' जाग्रत अवस्था है। जाग्रत जागरूकता की तरह सर्वव्यापी।",
        nanoBananaPrompt: "The letter A glowing, representing the waking state and all external awareness.",
        wordMeanings: [
            { sanskrit: "āpti", devanagari: "आप्ति", hindi: "व्यापकता", english: "pervasiveness" },
            { sanskrit: "ādimat", devanagari: "आदिमत्", hindi: "प्रथम/आरंभ", english: "being first" }
        ]
    },
    {
        id: 10,
        verse: 10,
        theme: "'U' = Taijasa (Dreaming)",
        sanskrit: "स्वप्नस्थानस्तैजस उकारो द्वितीया मात्रोत्कर्षादुभयत्वाद्वोत्कर्षति ह वै ज्ञानसन्ततिं समानश्च भवति नास्याब्रह्मवित्कुले भवति य एवं वेद ॥ १० ॥",
        hindi: "स्वप्न का तैजस ही 'उ' है—क्योंकि यह उत्कर्ष (ऊंचा) और उभयत्व (बीच में) है। जो ऐसा जानता है, उसके कुल में कोई ब्रह्म को न जानने वाला नहीं होता।",
        english: "'U' (middle sound) = Taijasa (Dream State). It is superior and intermediate. He who knows this—none in his family is born ignorant of Brahman.",
        simpleExplanation: "'U' in the middle of OM represents DREAMING—between waking and deep sleep.",
        simpleExplanationHindi: "ओम के बीच में 'उ' स्वप्न है—जाग्रत और सुषुप्ति के बीच।",
        nanoBananaPrompt: "The letter U glowing between A and M, representing the intermediate dream state.",
        wordMeanings: [
            { sanskrit: "utkarṣa", devanagari: "उत्कर्ष", hindi: "उच्चता", english: "superiority" },
            { sanskrit: "ubhayatva", devanagari: "उभयत्व", hindi: "दोनों के बीच", english: "intermediate" }
        ]
    },
    {
        id: 11,
        verse: 11,
        theme: "'M' = Prajna (Deep Sleep)",
        sanskrit: "सुषुप्तस्थानः प्राज्ञो मकारस्तृतीया मात्रा मितेरपीतेर्वा मिनोति ह वा इदं सर्वमपीतिश्च भवति य एवं वेद ॥ ११ ॥",
        hindi: "सुषुप्ति का प्राज्ञ ही 'म' है—क्योंकि यह मिति (मापना) और अपीति (लय) है। जो ऐसा जानता है, वह सब को माप लेता है और सबका लय-स्थान बनता है।",
        english: "'M' (final sound) = Prajna (Deep Sleep). It is the measure and the merging. He who knows this measures all and becomes the merging ground.",
        simpleExplanation: "'M' at the end of OM represents DEEP SLEEP—where everything merges into silence.",
        simpleExplanationHindi: "ओम के अंत में 'म' सुषुप्ति है—जहां सब कुछ मौन में विलीन होता है।",
        nanoBananaPrompt: "The letter M fading into silence, representing deep sleep and merging.",
        wordMeanings: [
            { sanskrit: "miti", devanagari: "मिति", hindi: "मापना", english: "measuring" },
            { sanskrit: "apīti", devanagari: "अपीति", hindi: "लय/विलय", english: "merging" }
        ]
    },
    {
        id: 12,
        verse: 12,
        theme: "The Silence: Turiya (Fourth)",
        sanskrit: "अमात्रश्चतुर्थोऽव्यवहार्यः प्रपञ्चोपशमः शिवोऽद्वैत एवमोङ्कार आत्मैव संविशत्यात्मनात्मानं य एवं वेद य एवं वेद ॥ १२ ॥",
        hindi: "जो अमात्र (मात्रा-रहित/मौन) है, वह चतुर्थ है—अव्यवहार्य, प्रपंचोपशम, शिव और अद्वैत। ओंकार ही आत्मा है। जो ऐसा जानता है, वह आत्मा में आत्मा को विलीन करता है।",
        english: "The measureless Silence is the FOURTH—untransactable, cessation of universe, Auspicious, Non-dual. OM IS THE SELF. He who knows this merges Self into Self.",
        simpleExplanation: "THE SILENCE after A-U-M represents TURIYA—the Fourth! Beyond sound, beyond thought. PURE SELF.",
        simpleExplanationHindi: "अ-उ-म के बाद का मौन तुरीय है—चौथा! ध्वनि से परे, विचार से परे। शुद्ध आत्मा।",
        nanoBananaPrompt: "Pure silence after OM—infinite space, no sound, just pure self-awareness.",
        wordMeanings: [
            { sanskrit: "amātra", devanagari: "अमात्र", hindi: "मात्रा-रहित/मौन", english: "measureless/silence" },
            { sanskrit: "oṃkāra ātmā eva", devanagari: "ओंकार आत्मैव", hindi: "ओंकार ही आत्मा है", english: "OM is verily the Self" },
            { sanskrit: "saṃviśati", devanagari: "संविशति", hindi: "प्रवेश करता है", english: "merges into" }
        ]
    }
];

// Metadata
export const MANDUKYA_METADATA = {
    id: "mandukya",
    name: "Mandukya",
    nameSanskrit: "माण्डूक्योपनिषद्",
    veda: "Atharva Veda",
    shlokaCount: 12,
    meaning: "The Frog (Manduka) represents the jump beyond ordinary states",
    theme: "OM and the Four States of Consciousness",
    foundation: "Advaita Vedanta",
    quote: "If you want liberation, the Mandukya alone is sufficient.",
    states: {
        waking: { name: "Vaishvanara", sound: "A", verse: 3 },
        dreaming: { name: "Taijasa", sound: "U", verse: 4 },
        deepSleep: { name: "Prajna", sound: "M", verse: 5 },
        turiya: { name: "Turiya", sound: "Silence", verse: 7 }
    },
    famousVerses: {
        turiyaDefinition: { id: 7, verse: 7 },
        omIsEverything: { id: 1, verse: 1 },
        selfIsBrahman: { id: 2, verse: 2 }
    }
};

// Helper function
export const getMandukyaShloka = (id: number): MandukyaDataEntry | undefined => {
    return MANDUKYA_SHLOKAS.find(s => s.id === id);
};
