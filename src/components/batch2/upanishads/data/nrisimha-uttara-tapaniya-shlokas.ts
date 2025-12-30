// Nrisimha Uttara Tapaniya Upanishad Data (#28 in Muktika Canon)
// Source: Atharva Veda | Category: Vaishnava
// Theme: Four States of Consciousness mapped to OM and Nrisimha Mantra
// Total: 9 Khandas (Sections)

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface NrisimhaUttaraTapaniyaDataEntry {
    id: number;
    khanda: number;
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

// Shanti Mantra
export const NRISIMHA_UTTARA_TAPANIYA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः । स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः । व्यशेम देवहितं यदायुः ॥ स्वस्ति न इन्द्रो वृद्धश्रवाः । स्वस्ति नः पूषा विश्ववेदाः । स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः । स्वस्ति नो बृहस्पतिर्दधातु ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हे देवगण! हम कानों से कल्याणकारी वचन सुनें। हमारे अंग दृढ़ हों। महान इन्द्र, पूषा, गरुड़ और बृहस्पति हमारा कल्याण करें। ॐ शांति, शांति, शांति।",
    english: "OM! O Gods, may we hear what is auspicious. May we see what is auspicious. May Indra, Pushan, Garuda, and Brihaspati grant us well-being. OM Peace, Peace, Peace."
};

export const NRISIMHA_UTTARA_TAPANIYA_SHLOKAS: NrisimhaUttaraTapaniyaDataEntry[] = [
    // Khanda 1: The Identity of Atman and Om
    {
        id: 1,
        khanda: 1,
        verse: 1,
        theme: "The Quest for Atman",
        sanskrit: "ॐ देवा ह वै प्रजापतिमब्रुवन् । आत्मानं नो विजानीहि । यमन्विष्य सर्वांश्च लोकान् आप्नोति सर्वांश्च कामान् ।",
        hindi: "ॐ। देवताओं ने प्रजापति से कहा: 'हमें उस आत्मा का ज्ञान कराएं; जिसे जानकर मनुष्य सभी लोकों और सभी कामनाओं को प्राप्त करता है।'",
        english: "OM. The Gods said to Prajapati: 'Make known to us that Self; seeking which one obtains all worlds and all desires.'",
        simpleExplanation: "THE QUEST: Gods ask Prajapati—what is that Self which grants all worlds and desires?",
        simpleExplanationHindi: "खोज: देवता पूछते हैं—वह आत्मा क्या है जो सभी लोक और कामनाएं देती है?",
        nanoBananaPrompt: "Gods approaching Prajapati asking about the Self that fulfills all desires.",
        wordMeanings: [
            { sanskrit: "ātmā", devanagari: "आत्मा", hindi: "आत्मा", english: "Self" }
        ]
    },
    {
        id: 2,
        khanda: 1,
        verse: 2,
        theme: "OM is Everything",
        sanskrit: "तान्होवाच प्रजापतिः । ओमित्येतदक्षरमिदं सर्वं तस्योपव्याख्यानम् । भूतं भवद्भविष्यदिति सर्वमोंकार एव । यच्चान्यत् त्रिकालातीतं तदप्योंकार एव ।",
        hindi: "प्रजापति ने कहा: 'ॐ—यह अक्षर ही सब कुछ है। भूत, वर्तमान और भविष्य—सब ओंकार है। जो तीनों कालों से परे है, वह भी ओंकार है।'",
        english: "Prajapati said: 'OM—this syllable is all this. Past, Present, Future—all is OM. And whatever is beyond the three times is also OM.'",
        simpleExplanation: "OM = EVERYTHING: Past, present, future = OM. Even beyond time = OM!",
        simpleExplanationHindi: "ॐ = सब कुछ: भूत, वर्तमान, भविष्य = ॐ। समय से परे भी = ॐ!",
        nanoBananaPrompt: "OM encompassing past, present, future, and beyond time itself.",
        wordMeanings: [
            { sanskrit: "trikālātīta", devanagari: "त्रिकालातीत", hindi: "तीनों कालों से परे", english: "beyond the three times" }
        ]
    },
    {
        id: 3,
        khanda: 1,
        verse: 3,
        theme: "Atman is Brahman",
        sanskrit: "सर्वं ह्येतद् ब्रह्म । अयमात्मा ब्रह्म । सोऽयमात्मा चतुष्पात् ।",
        hindi: "यह सब कुछ ब्रह्म है। यह आत्मा ही ब्रह्म है। वह आत्मा चार पाद (चार भाग) वाला है।",
        english: "All this is Brahman. This Atman is Brahman. This Atman has FOUR QUARTERS.",
        simpleExplanation: "THE FOUNDATION: All = Brahman. Atman = Brahman. It has 4 parts (like Mandukya)!",
        simpleExplanationHindi: "आधार: सब = ब्रह्म। आत्मा = ब्रह्म। इसके 4 भाग हैं (मांडूक्य जैसे)!",
        nanoBananaPrompt: "The Atman revealed as Brahman with four quarters or states.",
        wordMeanings: [
            { sanskrit: "catuṣpāt", devanagari: "चतुष्पात्", hindi: "चार पाद वाला", english: "having four quarters" }
        ]
    },
    // Khanda 2: The First Quarter (Waking / 'A')
    {
        id: 4,
        khanda: 2,
        verse: 1,
        theme: "First Quarter: Vaishvanara",
        sanskrit: "जागरितस्थानो बहिष्प्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः स्थूलभुग्वैश्वानरः प्रथमः पादः ।",
        hindi: "जिसका स्थान जाग्रत है, जिसकी प्रज्ञा बाहर है, जिसके 7 अंग और 19 मुख हैं, जो स्थूल भोगता है—वह वैश्वानर प्रथम पाद है।",
        english: "The First Quarter is VAISHVANARA—Waking State, outward conscious, 7 limbs, 19 mouths, experiencing gross objects.",
        simpleExplanation: "QUARTER 1 = WAKING: Vaishvanara—outward awareness, gross world experience!",
        simpleExplanationHindi: "पाद 1 = जाग्रत: वैश्वानर—बाहरी जागरूकता, स्थूल जगत का अनुभव!",
        nanoBananaPrompt: "Vaishvanara—the waking state Self with outward consciousness.",
        wordMeanings: [
            { sanskrit: "vaiśvānara", devanagari: "वैश्वानर", hindi: "सार्वभौम पुरुष", english: "the Universal Man" },
            { sanskrit: "sthūlabhuk", devanagari: "स्थूलभुक्", hindi: "स्थूल भोगने वाला", english: "experiencer of gross" }
        ]
    },
    {
        id: 5,
        khanda: 2,
        verse: 2,
        theme: "Vaishvanara is Ugra",
        sanskrit: "स वा एष उग्रः । येन वा एष उग्रः तदुग्रम् ।",
        hindi: "वह (वैश्वानर) ही 'उग्र' (मंत्र का पहला शब्द) है। जिससे यह उग्र है, वह उग्र है।",
        english: "He (Vaishvanara) is indeed 'UGRA' (The Ferocious One—first word of Nrisimha Mantra).",
        simpleExplanation: "MANTRA CONNECTION: Waking state = UGRA (Ferocious) in the Nrisimha Mantra!",
        simpleExplanationHindi: "मंत्र संबंध: जाग्रत अवस्था = उग्र (नृसिंह मंत्र में)!",
        nanoBananaPrompt: "Vaishvanara identified with 'Ugra'—the Ferocious One of the Nrisimha Mantra.",
        wordMeanings: [
            { sanskrit: "ugra", devanagari: "उग्र", hindi: "उग्र/भयंकर", english: "ferocious" }
        ]
    },
    // Khanda 3: The Second Quarter (Dreaming / 'U')
    {
        id: 6,
        khanda: 3,
        verse: 1,
        theme: "Second Quarter: Taijasa",
        sanskrit: "स्वप्नस्थानोऽन्तःप्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः प्रविविक्तभुक् तैजसो द्वितीयः पादः ।",
        hindi: "जिसका स्थान स्वप्न है, जिसकी प्रज्ञा भीतर है, जिसके 7 अंग और 19 मुख हैं, जो सूक्ष्म भोगता है—वह तैजस द्वितीय पाद है।",
        english: "The Second Quarter is TAIJASA—Dream State, inward conscious, experiencing subtle objects.",
        simpleExplanation: "QUARTER 2 = DREAMING: Taijasa—inward awareness, subtle world experience!",
        simpleExplanationHindi: "पाद 2 = स्वप्न: तैजस—भीतरी जागरूकता, सूक्ष्म जगत का अनुभव!",
        nanoBananaPrompt: "Taijasa—the dreaming state Self with inward consciousness.",
        wordMeanings: [
            { sanskrit: "taijasa", devanagari: "तैजस", hindi: "तेजोमय", english: "the Luminous One" },
            { sanskrit: "praviviktabhuk", devanagari: "प्रविविक्तभुक्", hindi: "सूक्ष्म भोगने वाला", english: "experiencer of subtle" }
        ]
    },
    {
        id: 7,
        khanda: 3,
        verse: 2,
        theme: "Taijasa is Vira",
        sanskrit: "स वा एष वीरः । येन वा एष वीरः तद्वीरम् ।",
        hindi: "वह (तैजस) ही 'वीर' (मंत्र का दूसरा शब्द) है। जिससे यह वीर है, वह वीर है।",
        english: "He (Taijasa) is indeed 'VIRA' (The Heroic One—second word of Nrisimha Mantra).",
        simpleExplanation: "MANTRA CONNECTION: Dream state = VIRA (Hero) in the Nrisimha Mantra!",
        simpleExplanationHindi: "मंत्र संबंध: स्वप्न अवस्था = वीर (नृसिंह मंत्र में)!",
        nanoBananaPrompt: "Taijasa identified with 'Vira'—the Heroic One of the Nrisimha Mantra.",
        wordMeanings: [
            { sanskrit: "vīra", devanagari: "वीर", hindi: "वीर/योद्धा", english: "heroic" }
        ]
    },
    // Khanda 4: The Third Quarter (Deep Sleep / 'M')
    {
        id: 8,
        khanda: 4,
        verse: 1,
        theme: "Third Quarter: Prajna",
        sanskrit: "यत्र सुप्तो न कञ्चन कामं कामयते न कञ्चन स्वप्नं पश्यति तत्सुषुप्तम् । सुषुप्तस्थान एकीभूतः प्रज्ञानघन एवानन्दमयो ह्यानन्दभुक् चेतोमुखः प्राज्ञस्तृतीयः पादः ।",
        hindi: "जहाँ सोया हुआ कोई कामना नहीं करता और कोई सपना नहीं देखता, वह सुषुप्ति है। एकीभूत, प्रज्ञानघन, आनंदमय, आनंदभोक्ता—वह प्राज्ञ तृतीय पाद है।",
        english: "Where sleeper desires nothing and sees no dream—that is Deep Sleep. The Third Quarter is PRAJNA—unified, mass of consciousness, full of bliss.",
        simpleExplanation: "QUARTER 3 = DEEP SLEEP: Prajna—unified awareness, mass of bliss!",
        simpleExplanationHindi: "पाद 3 = सुषुप्ति: प्राज्ञ—एकीकृत जागरूकता, आनंद की राशि!",
        nanoBananaPrompt: "Prajna—the deep sleep state as unified mass of consciousness and bliss.",
        wordMeanings: [
            { sanskrit: "prājña", devanagari: "प्राज्ञ", hindi: "ज्ञान से पूर्ण", english: "the Wise/Conscious One" },
            { sanskrit: "prajñānaghana", devanagari: "प्रज्ञानघन", hindi: "ज्ञान की घनता", english: "mass of consciousness" }
        ]
    },
    {
        id: 9,
        khanda: 4,
        verse: 2,
        theme: "Prajna is Maha-Vishnu",
        sanskrit: "स वा एष महाविष्णुः । येन वा एष महाविष्णुः तन्महाविष्णुम् ।",
        hindi: "वह (प्राज्ञ) ही 'महाविष्णु' (मंत्र का तीसरा शब्द) है। जिससे यह महाविष्णु है, वह महाविष्णु है।",
        english: "He (Prajna) is indeed 'MAHA-VISHNU' (The Great All-Pervading One—third word of Nrisimha Mantra).",
        simpleExplanation: "MANTRA CONNECTION: Deep Sleep = MAHA-VISHNU in the Nrisimha Mantra!",
        simpleExplanationHindi: "मंत्र संबंध: सुषुप्ति अवस्था = महाविष्णु (नृसिंह मंत्र में)!",
        nanoBananaPrompt: "Prajna identified with 'Maha-Vishnu'—the Great Pervader.",
        wordMeanings: [
            { sanskrit: "mahāviṣṇu", devanagari: "महाविष्णु", hindi: "महान व्यापक", english: "the Great Pervader" }
        ]
    },
    {
        id: 10,
        khanda: 4,
        verse: 3,
        theme: "Lord of All",
        sanskrit: "एष सर्वेश्वर एष सर्वज्ञ एषोऽन्तर्याम्येष योनिः सर्वस्य प्रभवाप्ययौ हि भूतानाम् ।",
        hindi: "यह सर्वेश्वर है, सर्वज्ञ है, अंतर्यामी है, जगत की योनि है, प्राणियों की उत्पत्ति और प्रलय का स्थान है।",
        english: "This is Lord of All, Omniscient, Inner Controller, Source—the origin and dissolution of all beings.",
        simpleExplanation: "PRAJNA = GOD: Lord of All, Omniscient, Inner Controller, Source of all beings!",
        simpleExplanationHindi: "प्राज्ञ = ईश्वर: सर्वेश्वर, सर्वज्ञ, अंतर्यामी, सबकी उत्पत्ति और प्रलय!",
        nanoBananaPrompt: "Prajna revealed as the Lord of All, Source and End of all beings.",
        wordMeanings: [
            { sanskrit: "antaryāmī", devanagari: "अन्तर्यामी", hindi: "भीतर का नियंता", english: "Inner Controller" },
            { sanskrit: "yoni", devanagari: "योनि", hindi: "उत्पत्ति स्थान", english: "source/womb" }
        ]
    },
    // Khanda 5: The Fourth Quarter (Turiya)
    {
        id: 11,
        khanda: 5,
        verse: 1,
        theme: "The Fourth: Turiya",
        sanskrit: "अथ तुरीयश्चतुर्थः पादः ।",
        hindi: "अब तुरीय (The Fourth) चतुर्थ पाद है।",
        english: "Now, the TURIYA is the Fourth Quarter.",
        simpleExplanation: "QUARTER 4 = TURIYA: The Fourth—beyond waking, dream, and sleep!",
        simpleExplanationHindi: "पाद 4 = तुरीय: चौथा—जाग्रत, स्वप्न और सुषुप्ति से परे!",
        nanoBananaPrompt: "The Fourth State—Turiya—beyond all three ordinary states.",
        wordMeanings: [
            { sanskrit: "turīya", devanagari: "तुरीय", hindi: "चौथा", english: "the Fourth" }
        ]
    },
    {
        id: 12,
        khanda: 5,
        verse: 2,
        theme: "Turiya = Nrisimha",
        sanskrit: "स वा एष ज्वलन् । स वा एष सर्वतोमुखः । स वा एष नृसिंहः । स वा एष भीषणः । स वा एष भद्रः । स वा एष मृत्युमृत्युः । स वा एष नमाम्यहम् । स वा एष अहम् ।",
        hindi: "वह (तुरीय) ही 'ज्वलन्' है। वह 'सर्वतोमुख' है। वह 'नृसिंह' है। वह 'भीषण' है। वह 'भद्र' है। वह 'मृत्यु-मृत्यु' है। वह 'नमाम्यहम्' है। वह 'अहम्' (मैं) है।",
        english: "He (Turiya) is 'Jvalan' (Blazing), 'Sarvatomukha' (All-Faced), 'NRISIMHA', 'Bhishana' (Terrifying), 'Bhadra' (Auspicious), 'Mrityu-Mrityu' (Death of Death), 'Namamyaham', 'AHAM' (I AM).",
        simpleExplanation: "TURIYA = ALL MANTRA WORDS: Blazing, All-Faced, NRISIMHA, Terrifying, Auspicious, Death of Death, I AM!",
        simpleExplanationHindi: "तुरीय = सभी मंत्र शब्द: ज्वलन, सर्वतोमुख, नृसिंह, भीषण, भद्र, मृत्यु-मृत्यु, अहम्!",
        nanoBananaPrompt: "Turiya identified with all Nrisimha Mantra words culminating in 'I AM'.",
        wordMeanings: [
            { sanskrit: "nṛsiṃha", devanagari: "नृसिंह", hindi: "नर-सिंह", english: "Man-Lion" },
            { sanskrit: "mṛtyumṛtyu", devanagari: "मृत्युमृत्यु", hindi: "मृत्यु की मृत्यु", english: "Death of Death" },
            { sanskrit: "aham", devanagari: "अहम्", hindi: "मैं", english: "I AM" }
        ]
    },
    // Khanda 6: The Nature of Turiya
    {
        id: 13,
        khanda: 6,
        verse: 1,
        theme: "Description of Turiya",
        sanskrit: "नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम् । अदृष्टमव्यवहार्यमग्राह्यमलक्षणमचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारं प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः ॥",
        hindi: "न भीतर जानता, न बाहर, न दोनों ओर; न प्रज्ञानघन, न जानता, न न-जानता। अदृष्ट, अव्यवहार्य, अग्राह्य, अलक्षण, अचिन्त्य, अव्यपदेश्य, एकात्म-प्रत्यय-सार, प्रपंच-उपशम, शांत, शिव, अद्वैत—वह चतुर्थ है। वही आत्मा है।",
        english: "Not inward, not outward, not both; not mass of consciousness, not conscious, not unconscious. Unseen, un-transactable, ungraspable, inferenceless, unthinkable, indescribable, essence of Self-cognition, cessation of universe, Peaceful, Auspicious, Non-dual—That is the Fourth. That is ATMAN.",
        simpleExplanation: "TURIYA DEFINED: Not in, not out, not both. Unseen, unthinkable, Non-dual, Peaceful, Auspicious = ATMAN!",
        simpleExplanationHindi: "तुरीय परिभाषा: न भीतर, न बाहर, न दोनों। अदृष्ट, अचिन्त्य, अद्वैत, शांत, शिव = आत्मा!",
        nanoBananaPrompt: "Turiya described with negations—unseen, unthinkable, non-dual, the true Self.",
        wordMeanings: [
            { sanskrit: "advaita", devanagari: "अद्वैत", hindi: "अद्वैत/एक", english: "non-dual" },
            { sanskrit: "prapañcopaśama", devanagari: "प्रपञ्चोपशम", hindi: "जगत का उपशमन", english: "cessation of universe" }
        ]
    },
    // Khanda 7: The Four Parts of OM
    {
        id: 14,
        khanda: 7,
        verse: 1,
        theme: "OM = Atman",
        sanskrit: "स वा एष आत्माध्यक्षरमोङ्कारोऽधिमात्रं पादा मात्रा मात्राश्च पादा अकार उकारो मकार इति ।",
        hindi: "वह आत्मा (अक्षर दृष्टि से) ओंकार है। पाद ही मात्राएं हैं और मात्राएं ही पाद—'अ', 'उ', 'म'।",
        english: "That Atman is OM. The quarters are the letters and letters are quarters—A, U, M.",
        simpleExplanation: "OM = ATMAN: The 4 quarters = 3 letters A-U-M + Silence!",
        simpleExplanationHindi: "ॐ = आत्मा: 4 पाद = 3 अक्षर अ-उ-म + मौन!",
        nanoBananaPrompt: "The Atman as OM, with quarters corresponding to A, U, M letters.",
        wordMeanings: [
            { sanskrit: "mātrā", devanagari: "मात्रा", hindi: "मात्रा/अक्षर", english: "letter/measure" }
        ]
    },
    {
        id: 15,
        khanda: 7,
        verse: 2,
        theme: "'A' = Waking",
        sanskrit: "जागरितस्थानो वैश्वानरोऽकारः प्रथमा मात्रा । आप्तेरादिमत्त्वाद्वाप्नोति ह वै सर्वान् कामानादिश्च भवति य एवं वेद ।",
        hindi: "जाग्रत वैश्वानर 'अ' कार है, पहली मात्रा। क्योंकि यह आप्ति और आदि है। जो जानता है, वह सब कामनाएं प्राप्त करता है।",
        english: "'A' = Vaishvanara/Waking (first letter). Because of obtaining (Apti) and being first (Adi). Knower obtains all desires.",
        simpleExplanation: "'A' = WAKING: First letter = First state. Know this = obtain all desires!",
        simpleExplanationHindi: "'अ' = जाग्रत: पहला अक्षर = पहली अवस्था। जानो = सब कामनाएं पाओ!",
        nanoBananaPrompt: "The letter 'A' corresponding to Vaishvanara and the waking state.",
        wordMeanings: [
            { sanskrit: "āpti", devanagari: "आप्ति", hindi: "प्राप्ति", english: "obtaining" }
        ]
    },
    {
        id: 16,
        khanda: 7,
        verse: 3,
        theme: "'U' = Dreaming",
        sanskrit: "स्वप्नस्थानस्तैजस उकारो द्वितीया मात्रा । उत्कर्षादुभयत्वाद्वोत्कर्षति ह वै ज्ञानसन्ततिं समानश्च भवति य एवं वेद ।",
        hindi: "स्वप्न तैजस 'उ' कार है, दूसरी मात्रा। क्योंकि यह उत्कर्ष और उभयत्व है। जो जानता है, वह ज्ञान की धारा बढ़ाता है।",
        english: "'U' = Taijasa/Dream (second letter). Because of elevation (Utkarsha) and intermediateness. Knower elevates knowledge stream.",
        simpleExplanation: "'U' = DREAM: Second letter = elevation, middle state. Know this = elevate knowledge!",
        simpleExplanationHindi: "'उ' = स्वप्न: दूसरा अक्षर = उत्थान, मध्य अवस्था। जानो = ज्ञान बढ़ाओ!",
        nanoBananaPrompt: "The letter 'U' corresponding to Taijasa and the dream state.",
        wordMeanings: [
            { sanskrit: "utkarṣa", devanagari: "उत्कर्ष", hindi: "उत्थान", english: "elevation" }
        ]
    },
    {
        id: 17,
        khanda: 7,
        verse: 4,
        theme: "'M' = Deep Sleep",
        sanskrit: "सुषुप्तस्थानः प्राज्ञो मकारस्तृतीया मात्रा । मितेरपीतेर्वा मिनोति ह वा इदं सर्वमपीतिश्च भवति य एवं वेद ।",
        hindi: "सुषुप्ति प्राज्ञ 'म' कार है, तीसरी मात्रा। क्योंकि यह मिति और अपीति है। जो जानता है, वह सब को माप लेता है और लय-स्थान बनता है।",
        english: "'M' = Prajna/Deep Sleep (third letter). Because of measuring (Miti) and merging (Apiti). Knower measures all and becomes ground of merging.",
        simpleExplanation: "'M' = DEEP SLEEP: Third letter = measuring, merging. Know this = become the ground of all!",
        simpleExplanationHindi: "'म' = सुषुप्ति: तीसरा अक्षर = मापना, लय। जानो = सबका आधार बनो!",
        nanoBananaPrompt: "The letter 'M' corresponding to Prajna and deep sleep state.",
        wordMeanings: [
            { sanskrit: "apīti", devanagari: "अपीति", hindi: "लय/विलय", english: "merging" }
        ]
    },
    // Khanda 8: The Turiyam (Silence)
    {
        id: 18,
        khanda: 8,
        verse: 1,
        theme: "Silence = Turiya",
        sanskrit: "अमात्रश्चतुर्थोऽव्यवहार्यः प्रपञ्चोपशमः शिवोऽद्वैत एवमोङ्कार आत्मैव संविशत्यात्मनात्मानं य एवं वेद ।",
        hindi: "जो अमात्र (मात्रा रहित) है, वह चतुर्थ है। अव्यवहार्य, प्रपंच-उपशम, शिव, अद्वैत। इस प्रकार ओंकार आत्मा ही है। जो जानता है, वह आत्मा द्वारा आत्मा में प्रवेश करता है।",
        english: "The MEASURELESS (Amatra/Silence) is the Fourth. Un-transactable, cessation of universe, Auspicious, Non-dual. Thus OM = Self. Knower enters Self by Self.",
        simpleExplanation: "SILENCE = TURIYA: The Fourth is MEASURELESS. OM = Self. Know this = enter Self by Self!",
        simpleExplanationHindi: "मौन = तुरीय: चौथा मात्रा-रहित है। ॐ = आत्मा। जानो = आत्मा द्वारा आत्मा में प्रवेश!",
        nanoBananaPrompt: "The silence after AUM—the measureless Turiya, Self entering Self.",
        wordMeanings: [
            { sanskrit: "amātra", devanagari: "अमात्र", hindi: "मात्रा-रहित", english: "measureless/without letter" }
        ]
    },
    // Khanda 9: Maya and the Witness
    {
        id: 19,
        khanda: 9,
        verse: 1,
        theme: "World in Maya",
        sanskrit: "महामायामोहितं जगत् । तस्यां महामायायां अन्तर्भूतं जगत् ।",
        hindi: "यह जगत महामाया से मोहित है। यह जगत उस महामाया के भीतर समाया हुआ है।",
        english: "The world is deluded by MAHA-MAYA. The world is contained within that Maha-Maya.",
        simpleExplanation: "MAYA REVELATION: The world is deluded by and contained within Maha-Maya!",
        simpleExplanationHindi: "माया रहस्य: जगत महामाया से मोहित और उसमें समाया है!",
        nanoBananaPrompt: "The world deluded and contained within the great illusion (Maha-Maya).",
        wordMeanings: [
            { sanskrit: "mahāmāyā", devanagari: "महामाया", hindi: "महान माया", english: "great illusion" }
        ]
    },
    {
        id: 20,
        khanda: 9,
        verse: 2,
        theme: "Nrisimha is All Gods",
        sanskrit: "यो वै नृसिंहो देवो भगवान् यश्च ब्रह्मा तस्मै वै नमोनमः ।",
        hindi: "जो भगवान नृसिंह देव हैं, वही ब्रह्मा हैं; उनको नमस्कार है... वही विष्णु हैं, वही महेश्वर हैं...",
        english: "He who is Lord Nrisimha, He is Brahma; to Him salutations... He is Vishnu, He is Maheshvara...",
        simpleExplanation: "NRISIMHA = ALL: Nrisimha = Brahma = Vishnu = Shiva = ALL GODS!",
        simpleExplanationHindi: "नृसिंह = सब: नृसिंह = ब्रह्मा = विष्णु = शिव = सभी देवता!",
        nanoBananaPrompt: "Nrisimha identified with Brahma, Vishnu, Shiva—all gods are One.",
        wordMeanings: [
            { sanskrit: "namo namaḥ", devanagari: "नमोनमः", hindi: "नमस्कार नमस्कार", english: "salutations upon salutations" }
        ]
    },
    {
        id: 21,
        khanda: 9,
        verse: 3,
        theme: "Aham Brahmasmi",
        sanskrit: "ओतमोनुज्ञात्रनुज्ञात्रविकल्पं । अहं ब्रह्मास्मीति ।",
        hindi: "सब कुछ उसमें ओत-प्रोत है; वह अनुज्ञाता और निर्विकल्प है। 'मैं ब्रह्म हूँ।'",
        english: "Everything is woven in Him; He is the Permitter/Witness and changeless. 'I AM BRAHMAN.'",
        simpleExplanation: "THE MAHAVAKYA: All is woven in Him. He is Witness. 'I AM BRAHMAN!'",
        simpleExplanationHindi: "महावाक्य: सब उसमें ओत-प्रोत। वह साक्षी। 'मैं ब्रह्म हूँ!'",
        nanoBananaPrompt: "The great declaration—Aham Brahmasmi—I am Brahman.",
        wordMeanings: [
            { sanskrit: "ahaṃ brahmāsmi", devanagari: "अहं ब्रह्मास्मि", hindi: "मैं ब्रह्म हूँ", english: "I am Brahman" },
            { sanskrit: "ota", devanagari: "ओत", hindi: "ओत-प्रोत", english: "woven/pervaded" }
        ]
    },
    {
        id: 22,
        khanda: 9,
        verse: 4,
        theme: "Conclusion",
        sanskrit: "य एवं वेद । इत्युपनिषत् ॥",
        hindi: "जो ऐसा जानता है (वह मुक्त है)। यही उपनिषद है।",
        english: "He who knows this (attains Liberation). Thus ends the Upanishad.",
        simpleExplanation: "THE END: He who knows this = LIBERATED. End of Upanishad!",
        simpleExplanationHindi: "समाप्ति: जो जानता है = मुक्त। उपनिषद समाप्त!",
        nanoBananaPrompt: "The conclusion—liberation for the one who truly knows.",
        wordMeanings: [
            { sanskrit: "upaniṣat", devanagari: "उपनिषत्", hindi: "उपनिषद/रहस्य ज्ञान", english: "secret doctrine" }
        ]
    }
];

export const NRISIMHA_UTTARA_TAPANIYA_METADATA = {
    id: "nrisimha-uttara-tapaniya",
    name: "Nrisimha Uttara Tapaniya",
    nameSanskrit: "नृसिंहोत्तरतापनीयोपनिषद्",
    alternateNames: ["Nrisimhottara Tapaniya Upanishad"],
    veda: "Atharva Veda",
    category: "Vaishnava",
    shlokaCount: 22,
    khandaCount: 9,
    sequenceNumber: 28,
    meaning: "The Latter Burning (Philosophy) of Man-Lion",
    keyTeachings: [
        "OM = Everything: Past, Present, Future, and beyond time",
        "Atman = Brahman with Four Quarters (like Mandukya)",
        "Four quarters mapped to Nrisimha Mantra:",
        "  - Quarter 1 (Waking/A) = UGRA (Ferocious)",
        "  - Quarter 2 (Dream/U) = VIRA (Hero)",
        "  - Quarter 3 (Sleep/M) = MAHA-VISHNU",
        "  - Quarter 4 (Turiya/Silence) = NRISIMHA, Death of Death, I AM",
        "Turiya: Not in, not out, unseen, unthinkable, Non-dual",
        "A-U-M + Silence = 4 states of consciousness",
        "World deluded by Maha-Maya",
        "Nrisimha = All Gods (Brahma, Vishnu, Shiva)",
        "AHAM BRAHMASMI - I am Brahman"
    ],
    famousVerses: {
        omIsAll: { id: 2, khanda: 1, verse: 2 },
        fourQuarters: { id: 3, khanda: 1, verse: 3 },
        turiyaDescription: { id: 13, khanda: 6, verse: 1 },
        turiyaIsNrisimha: { id: 12, khanda: 5, verse: 2 },
        silenceIsTuriya: { id: 18, khanda: 8, verse: 1 },
        ahamBrahmasmi: { id: 21, khanda: 9, verse: 3 }
    },
    mantraMapping: {
        waking: "Ugra",
        dream: "Vira",
        sleep: "Maha-Vishnu",
        turiya: ["Jvalan", "Sarvatomukha", "Nrisimha", "Bhishana", "Bhadra", "Mrityu-Mrityu", "Aham"]
    }
};
