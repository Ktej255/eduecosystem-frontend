// Maitreyi Upanishad Data (#26 in Muktika Canon)
// Source: Sama Veda | Category: Sannyasa
// Theme: Dialogue with Shiva, Body=Temple, Mind=Samsara, Avadhuta Declarations
// Total: 3 Adhyayas with ~12 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface MaitreyiDataEntry {
    id: number;
    adhyaya: number;
    mantra: string;
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
export const MAITREYI_SHANTI_MANTRA = {
    sanskrit: "ॐ आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि । सर्वं ब्रह्मौपनिषदं माहं ब्रह्म निराकुर्यां मा मा ब्रह्म निराकरोत् । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरे अंग, वाणी, प्राण, आँख, कान, बल और इन्द्रियाँ पुष्ट हों। यह सब ब्रह्म है। मैं ब्रह्म का इनकार न करूँ; ब्रह्म मेरा इनकार न करे।",
    english: "OM! May my limbs, speech, vital force, eyes, ears, strength and senses be developed. All is Brahman of the Upanishads. May I not deny Brahman; may Brahman not deny me. OM Peace."
};

export const MAITREYI_SHLOKAS: MaitreyiDataEntry[] = [
    // ADHYAYA 1: DEFINITION OF A MONK
    {
        id: 1, adhyaya: 1, mantra: "1.1",
        theme: "The Secret of Secrets",
        sanskrit: "ॐ। अथ मैत्रेयो भगवन्तं महादेवं प्रणिपत्य पप्रच्छ । भगवन् परमं तत्त्वं रहस्यानां रहस्यं कथय मे ।",
        hindi: "ॐ। मैत्रेय ने भगवान महादेव (शिव) को प्रणाम करके पूछा: 'हे भगवन्! मुझे उस परम तत्व के बारे में बताएं जो रहस्यों का भी रहस्य है।'",
        english: "OM. Maitreya bowed to Lord Mahadeva (Shiva) and asked: 'O Lord! Tell me about the Supreme Truth, which is the Secret of secrets.'",
        simpleExplanation: "THE ULTIMATE QUESTION: Maitreya asks Shiva for the SECRET OF SECRETS!",
        simpleExplanationHindi: "परम प्रश्न: मैत्रेय ने शिव से रहस्यों का रहस्य पूछा!",
        nanoBananaPrompt: "Sage Maitreya bowing before Lord Shiva, asking for the secret of secrets.",
        wordMeanings: [
            { sanskrit: "mahādeva", devanagari: "महादेव", hindi: "शिव", english: "Lord Shiva" },
            { sanskrit: "rahasyānāṃ rahasya", devanagari: "रहस्यानां रहस्य", hindi: "रहस्यों का रहस्य", english: "secret of secrets" }
        ]
    },
    {
        id: 2, adhyaya: 1, mantra: "1.2",
        theme: "Body is Temple, Jiva is Shiva",
        sanskrit: "देहो देवालयो प्रोक्तः स जीवः केवलः शिवः । त्यजेदज्ञाननिर्माल्यं सोऽहंभावेन पूजयेत् ॥",
        hindi: "यह देह ही देवालय (मंदिर) है; और वह जीव ही साक्षात शिव है। अज्ञान रूपी बासी फूल का त्याग करके 'सोऽहम्' के भाव से पूजा करो।",
        english: "The Body is the Temple; the Jiva is Shiva alone. Discard the withered flowers of Ignorance and worship with 'So'ham' (I am He).",
        simpleExplanation: "BODY = TEMPLE, YOU = GOD! Don't go to temples—YOU are the temple! Jiva IS Shiva!",
        simpleExplanationHindi: "शरीर = मंदिर, तुम = भगवान! मंदिर मत जाओ—तुम ही मंदिर हो! जीव ही शिव है!",
        nanoBananaPrompt: "Human body as a temple with the soul as Shiva residing within.",
        wordMeanings: [
            { sanskrit: "deha", devanagari: "देह", hindi: "शरीर", english: "body" },
            { sanskrit: "devālaya", devanagari: "देवालय", hindi: "मंदिर", english: "temple" },
            { sanskrit: "jīva", devanagari: "जीव", hindi: "जीव/आत्मा", english: "individual soul" },
            { sanskrit: "so'ham", devanagari: "सोऽहम्", hindi: "वह मैं हूँ", english: "I am He" }
        ]
    },
    {
        id: 3, adhyaya: 1, mantra: "1.3",
        theme: "Inner Practices Redefined",
        sanskrit: "अभेददर्शनं ज्ञानं ध्यानं निर्विषयं मनः । स्नानं मनोमलत्यागः शौचमिन्द्रियनिग्रहः ॥",
        hindi: "'अभेद-दर्शन' (सबको एक देखना) ही ज्ञान है। विषय-रहित मन ही ध्यान है। मन के मल का त्याग ही स्नान है। इन्द्रिय-निग्रह ही शौच है।",
        english: "To see non-duality is Knowledge. Mind free from objects is Meditation. Abandoning mental impurities is true Bath. Sense control is true Purity.",
        simpleExplanation: "REDEFINING RITUALS: Real bath = purify mind! Real purity = control senses! Real knowledge = see Oneness!",
        simpleExplanationHindi: "कर्मकांड पुनर्परिभाषित: असली स्नान = मन शुद्ध करो! असली शुद्धि = इन्द्रिय नियंत्रण! असली ज्ञान = एकता देखो!",
        nanoBananaPrompt: "Inner practices: seeing oneness, empty mind, mental purity, sense control.",
        wordMeanings: [
            { sanskrit: "abheda-darśana", devanagari: "अभेददर्शन", hindi: "एकत्व दृष्टि", english: "seeing non-duality" },
            { sanskrit: "manomalatayāga", devanagari: "मनोमलत्याग", hindi: "मन की गंदगी छोड़ना", english: "abandoning mental impurities" }
        ]
    },
    {
        id: 4, adhyaya: 1, mantra: "1.5",
        theme: "True Solitude",
        sanskrit: "जनमध्ये वसन्नपि । यस्य चित्तं निरालम्बं स एकाकी स भिक्षुकः ॥",
        hindi: "जो लोगों के बीच रहते हुए भी, जिसका चित्त निरालम्ब (आसक्ति रहित) है—वही सच्चा एकाकी है, वही सच्चा भिक्षुक (संन्यासी) है।",
        english: "Even living among people, he whose mind is supportless (detached)—he is the true Solitary One, the true Monk.",
        simpleExplanation: "TRUE MONK: Live in crowds but mind DETACHED = You're truly alone! No need for caves!",
        simpleExplanationHindi: "सच्चा संन्यासी: भीड़ में रहो पर मन विरक्त = तुम सच में अकेले हो! गुफा की जरूरत नहीं!",
        nanoBananaPrompt: "Monk living in a crowd but with completely detached mind—truly solitary.",
        wordMeanings: [
            { sanskrit: "nirālamba", devanagari: "निरालम्ब", hindi: "सहारा रहित", english: "supportless/detached" },
            { sanskrit: "ekākī", devanagari: "एकाकी", hindi: "अकेला", english: "solitary" }
        ]
    },

    // ADHYAYA 2: PHILOSOPHY OF ILLUSION
    {
        id: 5, adhyaya: 2, mantra: "2.1",
        theme: "Mind is Samsara",
        sanskrit: "चित्तमेव हि संसारः तत्प्रयत्नेन शोधयेत् । यच्चित्तस्तन्मयो भवति गुह्यमेतत्सनातनम् ॥",
        hindi: "चित्त ही संसार है; इसलिए प्रयत्नपूर्वक उसका शोधन करो। जैसा चित्त होता है, वैसा ही (जीव) हो जाता है—यही सनातन रहस्य है।",
        english: "The Mind alone is Samsara; purify it with effort. Whatever one thinks, that one becomes—this is the ancient secret.",
        simpleExplanation: "MIND = WORLD! Your mind IS your universe! Clean the mind = Clean the world! You BECOME what you THINK!",
        simpleExplanationHindi: "मन = संसार! तुम्हारा मन ही तुम्हारा ब्रह्मांड है! मन साफ करो = संसार साफ! जो सोचते हो वही बनते हो!",
        nanoBananaPrompt: "Mind creating the entire universe of samsara—purify mind to escape.",
        wordMeanings: [
            { sanskrit: "citta", devanagari: "चित्त", hindi: "मन", english: "mind" },
            { sanskrit: "saṃsāra", devanagari: "संसार", hindi: "संसार", english: "worldly existence" },
            { sanskrit: "śodhayat", devanagari: "शोधयेत्", hindi: "शुद्ध करे", english: "should purify" }
        ]
    },
    {
        id: 6, adhyaya: 2, mantra: "2.2",
        theme: "Tranquil Mind Destroys Karma",
        sanskrit: "चित्तस्य हि प्रसादेन हन्ति कर्म शुभाशुभम् । प्रसन्नात्मात्मनि स्थित्वा सुखमव्ययमश्नुते ॥",
        hindi: "चित्त के प्रसन्न होने पर, शुभ और अशुभ कर्म नष्ट हो जाते हैं। प्रसन्न-आत्मा होकर, आत्मा में स्थित होकर, वह अव्यय सुख को प्राप्त करता है।",
        english: "By tranquility of mind, one destroys both good and bad karma. With serene self, abiding in Self, one enjoys Imperishable Bliss.",
        simpleExplanation: "PEACEFUL MIND = KARMA DESTROYED! Even good karma gone! Then = Eternal Bliss!",
        simpleExplanationHindi: "शांत मन = कर्म नष्ट! अच्छा कर्म भी गया! फिर = शाश्वत आनंद!",
        nanoBananaPrompt: "Tranquil mind destroying both good and bad karma, reaching eternal bliss.",
        wordMeanings: [
            { sanskrit: "prasāda", devanagari: "प्रसाद", hindi: "शांति/प्रसन्नता", english: "tranquility" },
            { sanskrit: "avyaya sukha", devanagari: "अव्यय सुख", hindi: "अविनाशी सुख", english: "imperishable bliss" }
        ]
    },
    {
        id: 7, adhyaya: 2, mantra: "2.3",
        theme: "Attachment to Brahman",
        sanskrit: "सक्तां न विषये मतिः । यद्येवं ब्रह्मणि स्यात्तत्को न मुच्येत बन्धनात् ॥",
        hindi: "जितनी आसक्ति विषयों में है, यदि उतनी ही बुद्धि ब्रह्म में लग जाए, तो कौन बंधन से मुक्त नहीं होगा?",
        english: "If the mind were as attached to Brahman as to sense-objects, who would not be liberated?",
        simpleExplanation: "REDIRECT ATTACHMENT: Love objects → Love Brahman equally = INSTANT LIBERATION!",
        simpleExplanationHindi: "आसक्ति बदलो: विषय प्रेम → ब्रह्म प्रेम उतना ही = तुरंत मुक्ति!",
        nanoBananaPrompt: "Mind's attachment redirected from objects to Brahman—instant liberation.",
        wordMeanings: [
            { sanskrit: "sakta", devanagari: "सक्त", hindi: "आसक्त", english: "attached" },
            { sanskrit: "viṣaya", devanagari: "विषय", hindi: "इन्द्रिय विषय", english: "sense objects" }
        ]
    },
    {
        id: 8, adhyaya: 2, mantra: "2.4",
        theme: "Inner Worship Only",
        sanskrit: "पाषाणलोहमणिमृन्मयविग्रहेषु पूजा पुनर्जननभोगकरी मुमुक्षोः । तस्माद्यतिः स्वहृदयार्चनमेव कुर्यात् बाह्यार्चनं परिहरेदपुनर्भवाय ॥",
        hindi: "पत्थर, धातु, मणि और मिट्टी की मूर्तियों की पूजा मुमुक्षु के लिए पुनर्जन्म देती है। इसलिए संन्यासी अपने हृदय में ही पूजा करे; बाहरी पूजा छोड़े।",
        english: "Worship of stone, metal, gem, clay idols causes rebirth for liberation-seekers. Therefore, ascetic should worship within heart only; avoid external worship.",
        simpleExplanation: "WARNING: Idol worship = REBIRTH! Worship in HEART only = No more births!",
        simpleExplanationHindi: "चेतावनी: मूर्ति पूजा = पुनर्जन्म! केवल हृदय में पूजा = कोई जन्म नहीं!",
        nanoBananaPrompt: "Renunciate abandoning external idol worship, worshipping within the heart.",
        wordMeanings: [
            { sanskrit: "vigraha", devanagari: "विग्रह", hindi: "मूर्ति", english: "idol" },
            { sanskrit: "hṛdaya-arcana", devanagari: "हृदयार्चन", hindi: "हृदय में पूजा", english: "worship in heart" }
        ]
    },

    // ADHYAYA 3: AVADHUTA DECLARATIONS
    {
        id: 9, adhyaya: 3, mantra: "3.1",
        theme: "I Am Brahman",
        sanskrit: "अहमेव परो ब्रह्माहं ब्रह्माहं निरंजनः । अहं ब्रह्मादिसंसेव्यः स्वयंभूः सर्वतोमुखः ॥",
        hindi: "'मैं ही परब्रह्म हूँ, मैं ही ब्रह्म हूँ, मैं निरंजन हूँ। मैं ब्रह्मा आदि देवताओं द्वारा सेवित हूँ; मैं स्वयंभू और सर्वतोमुख हूँ।'",
        english: "'I alone am Supreme Brahman, I am Brahman, I am stainless. I am worshipped by Brahma and others; I am Self-born and face all directions.'",
        simpleExplanation: "DECLARATION: I AM BRAHMAN! I am stainless! Even gods worship ME! I am everywhere!",
        simpleExplanationHindi: "घोषणा: मैं ब्रह्म हूँ! मैं निर्मल हूँ! देवता भी मुझे पूजते हैं! मैं सर्वत्र हूँ!",
        nanoBananaPrompt: "The soul declaring 'I am Brahman'—worshipped by gods, facing all directions.",
        wordMeanings: [
            { sanskrit: "aham brahma", devanagari: "अहं ब्रह्म", hindi: "मैं ब्रह्म हूँ", english: "I am Brahman" },
            { sanskrit: "nirañjana", devanagari: "निरंजन", hindi: "निर्मल", english: "stainless" },
            { sanskrit: "svayambhū", devanagari: "स्वयंभू", hindi: "स्वयं उत्पन्न", english: "self-born" }
        ]
    },
    {
        id: 10, adhyaya: 3, mantra: "3.2",
        theme: "Beyond All Identity",
        sanskrit: "न मे देहो न मे लिङ्गं न मे बन्धो न मे स्थितिः । न मे पुण्यं न मे पापं न मे द्वैतं न मे स्थितिः ॥",
        hindi: "'न मेरा शरीर है, न मेरा कोई लिंग (पहचान) है। न मेरा बंधन है, न मेरी स्थिति है। न मेरा पुण्य है, न मेरा पाप है। न मेरा द्वैत है।'",
        english: "'I have no body, no mark, no bondage, no status. I have no merit, no sin. I have no duality.'",
        simpleExplanation: "NEGATION: No body! No caste! No bondage! No good karma! No bad karma! NO DUALITY!",
        simpleExplanationHindi: "निषेध: शरीर नहीं! जाति नहीं! बंधन नहीं! पुण्य नहीं! पाप नहीं! द्वैत नहीं!",
        nanoBananaPrompt: "Soul transcending all identity—no body, no caste, no karma, no duality.",
        wordMeanings: [
            { sanskrit: "liṅga", devanagari: "लिङ्ग", hindi: "चिन्ह/पहचान", english: "mark/identity" },
            { sanskrit: "dvaita", devanagari: "द्वैत", hindi: "द्वैत", english: "duality" }
        ]
    },
    {
        id: 11, adhyaya: 3, mantra: "3.3",
        theme: "I Am the Universe",
        sanskrit: "नाहं गन्ता न चाहं मन्ता । न मे रात्रिर्न मे दिवा । नाहं भोक्ता न च भोज्यम् । अहमेव जगत्सर्वं न द्वितीयं कथंचन ॥",
        hindi: "'न मैं जाने वाला हूँ, न मैं मानने वाला हूँ। न मेरी रात है, न मेरा दिन। न मैं भोक्ता हूँ और न भोग्य। मैं ही यह संपूर्ण जगत हूँ, दूसरा कोई नहीं।'",
        english: "'I am not the goer, nor the thinker. I have no night, no day. I am not the enjoyer, nor enjoyed. I alone am the whole Universe; there is no second.'",
        simpleExplanation: "TOTAL IDENTITY: I don't go, I don't think. No night, no day. I AM THE ENTIRE UNIVERSE! Nothing else exists!",
        simpleExplanationHindi: "पूर्ण पहचान: मैं नहीं जाता, नहीं सोचता। रात नहीं, दिन नहीं। मैं ही पूरा ब्रह्मांड हूँ! और कुछ नहीं!",
        nanoBananaPrompt: "The realized soul declaring 'I am the entire universe—nothing else exists.'",
        wordMeanings: [
            { sanskrit: "jagat sarva", devanagari: "जगत्सर्व", hindi: "संपूर्ण जगत", english: "whole universe" },
            { sanskrit: "na dvitīya", devanagari: "न द्वितीय", hindi: "दूसरा नहीं", english: "no second" }
        ]
    },
    {
        id: 12, adhyaya: 3, mantra: "3.4",
        theme: "I Am Shiva",
        sanskrit: "अहं साक्षी जगद्व्यापी परमात्मा सनातनः । अहं विज्ञानानन्दघनोऽहं चिदाकाशः । अहमेव शिवोऽहमेव शिवः ॥",
        hindi: "'मैं साक्षी हूँ, जगत में व्याप्त हूँ, सनातन परमात्मा हूँ। मैं विज्ञान और आनंद का घन हूँ; मैं चिदाकाश हूँ। मैं ही शिव हूँ! मैं ही शिव हूँ!'",
        english: "'I am the Witness, All-pervading, Eternal Supreme Self. I am the mass of Consciousness and Bliss; I am the Sky of Consciousness. I alone am Shiva! I alone am Shiva!'",
        simpleExplanation: "FINAL ROAR: I am Witness! I am Bliss! I am Consciousness-Space! I AM SHIVA! I AM SHIVA!",
        simpleExplanationHindi: "अंतिम गर्जना: मैं साक्षी! मैं आनंद! मैं चिदाकाश! मैं शिव हूँ! मैं शिव हूँ!",
        nanoBananaPrompt: "Maitreya's final roar 'I am Shiva!'—witness, bliss, consciousness-sky.",
        wordMeanings: [
            { sanskrit: "sākṣī", devanagari: "साक्षी", hindi: "साक्षी", english: "witness" },
            { sanskrit: "cidākāśa", devanagari: "चिदाकाश", hindi: "चेतना का आकाश", english: "sky of consciousness" },
            { sanskrit: "śiva", devanagari: "शिव", hindi: "शिव", english: "Shiva/Auspicious One" }
        ]
    },
    {
        id: 13, adhyaya: 3, mantra: "3.5",
        theme: "Immortality Attained",
        sanskrit: "योऽधीते सोऽमृतत्वं च गच्छति । ओमित्युपनिषत् ॥",
        hindi: "जो इसका अध्ययन करता है, वह अमरता को प्राप्त करता है। ॐ, यही उपनिषद है।",
        english: "He who studies this attains Immortality. OM, thus ends the Upanishad.",
        simpleExplanation: "RESULT: Study this = IMMORTALITY! OM!",
        simpleExplanationHindi: "परिणाम: इसका अध्ययन = अमरता! ॐ!",
        nanoBananaPrompt: "Seeker attaining immortality through the study of this Upanishad.",
        wordMeanings: [
            { sanskrit: "amṛtatva", devanagari: "अमृतत्व", hindi: "अमरता", english: "immortality" }
        ]
    }
];

// Metadata
export const MAITREYI_METADATA = {
    id: "maitreyi",
    name: "Maitreyi",
    nameSanskrit: "मैत्रेय्युपनिषद्",
    note: "Not to be confused with Maitrayani Upanishad (#24)",
    veda: "Sama Veda",
    category: "Sannyasa",
    shlokaCount: 13,
    adhyayaCount: 3,
    sequenceNumber: 26,
    teacher: "Lord Mahadeva (Shiva)",
    student: "Sage Maitreya",
    adhyayas: {
        1: { name: "Definition of a Monk", mantras: "1.1-1.5", theme: "Body=Temple, So'ham, True Solitude" },
        2: { name: "Philosophy of Illusion", mantras: "2.1-2.5", theme: "Mind=Samsara, Inner Worship Only" },
        3: { name: "Avadhuta Declarations", mantras: "3.1-3.5", theme: "I am Brahman, I am Shiva" }
    },
    keyTeachings: [
        "Body is Temple, Jiva is Shiva—worship with So'ham",
        "True bath = mental purity; True purity = sense control",
        "True solitude = detached mind even in crowds",
        "Mind alone is Samsara—purify it",
        "Whatever you think, that you become",
        "Idol worship leads to rebirth—worship in heart only",
        "I am Brahman, worshipped by gods",
        "No body, no caste, no karma, no duality",
        "I alone am the entire Universe",
        "I am Shiva! I am Shiva!"
    ],
    famousVerses: {
        bodyIsTemple: { id: 2, adhyaya: 1, mantra: "1.2" },
        mindIsSamsara: { id: 5, adhyaya: 2, mantra: "2.1" },
        innerWorshipOnly: { id: 8, adhyaya: 2, mantra: "2.4" },
        iAmUniverse: { id: 11, adhyaya: 3, mantra: "3.3" },
        iAmShiva: { id: 12, adhyaya: 3, mantra: "3.4" }
    }
};

export const getMaitreyiMantra = (adhyaya: number, mantra: string): MaitreyiDataEntry | undefined => {
    return MAITREYI_SHLOKAS.find(s => s.adhyaya === adhyaya && s.mantra === mantra);
};
