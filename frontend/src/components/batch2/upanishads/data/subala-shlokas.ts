// Subala Upanishad Data (#30 in Muktika Canon)
// Source: Shukla Yajur Veda | Category: Samanya (Cosmological)
// Theme: Creation from Asat, Dissolution (Pralaya), 101 Nadis, Narayana as Antaryami
// Total: 16 Khandas with ~20 Key Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface SubalaDataEntry {
    id: number;
    khanda: number;
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

// Shanti Mantra (Purnamadah)
export const SUBALA_SHANTI_MANTRA = {
    sanskrit: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह पूर्ण है। यह भी पूर्ण है। पूर्ण से पूर्ण उत्पन्न होता है। पूर्ण से पूर्ण निकालने पर भी पूर्ण ही शेष रहता है।",
    english: "OM! That is Whole. This is Whole. From Whole emerges Whole. Taking Whole from Whole, Whole alone remains. OM Peace."
};

export const SUBALA_SHLOKAS: SubalaDataEntry[] = [
    // KHANDA 1: ORIGIN OF UNIVERSE
    {
        id: 1, khanda: 1, mantra: "1.1",
        theme: "Neither Being Nor Non-Being",
        sanskrit: "तदाहुः । किमासीत् तस्मै स होवाच । न सन्न्नासन्न सदसक्षिति ।",
        hindi: "'आरंभ में क्या था?' 'तब न सत् (Existence) था, न असत् (Non-existence) था, और न सत्-असत् था।'",
        english: "'What existed then?' 'There was neither Being (Sat), nor Non-Being (Asat), nor Being-and-Non-Being.'",
        simpleExplanation: "BEFORE CREATION: Not existence, not non-existence, not both. BEYOND all categories!",
        simpleExplanationHindi: "सृष्टि से पहले: न अस्तित्व, न अभाव, न दोनों। सब श्रेणियों से परे!",
        nanoBananaPrompt: "The primordial state—beyond existence and non-existence.",
        wordMeanings: [
            { sanskrit: "sat", devanagari: "सत्", hindi: "अस्तित्व", english: "being/existence" },
            { sanskrit: "asat", devanagari: "असत्", hindi: "अभाव", english: "non-being" }
        ]
    },
    {
        id: 2, khanda: 1, mantra: "1.2",
        theme: "Creation Chain",
        sanskrit: "तस्मात् तमः सञ्जायते । तमसो भूतादिः । भूतादेराकाशं । आकाशाद्वायुः । वायोग्र्निरग्नेरापोऽद्भ्यः पृथिवी ।",
        hindi: "उससे तमस उत्पन्न हुआ। तमस से भूतादि। भूतादि से आकाश। आकाश से वायु। वायु से अग्नि। अग्नि से जल। जल से पृथ्वी।",
        english: "From That, Darkness (Tamas) was born. From Darkness, Bhuta-adi. From Bhuta-adi, Ether. From Ether, Air. From Air, Fire. From Fire, Water. From Water, Earth.",
        simpleExplanation: "CREATION CHAIN: Asat → Tamas → Ether → Air → Fire → Water → Earth!",
        simpleExplanationHindi: "सृष्टि क्रम: असत् → तमस → आकाश → वायु → अग्नि → जल → पृथ्वी!",
        nanoBananaPrompt: "Chain of creation: darkness, ether, air, fire, water, earth emerging sequentially.",
        wordMeanings: [
            { sanskrit: "tamas", devanagari: "तमस्", hindi: "अंधकार/मूल प्रकृति", english: "darkness/primordial matter" },
            { sanskrit: "bhūtādi", devanagari: "भूतादि", hindi: "तत्वों का मूल", english: "origin of elements" }
        ]
    },
    {
        id: 3, khanda: 1, mantra: "1.3",
        theme: "The Cosmic Egg",
        sanskrit: "तदण्डमभवत् । तत् संवत्सरमात्रमुषित्वा द्विधाकरोत् । अधस्तात् पृथिवी । उपरिष्टात् आकाशम् ।",
        hindi: "वह एक अण्ड (Cosmic Egg) बन गया। एक वर्ष रहकर दो भागों में बंटा। नीचे पृथ्वी। ऊपर आकाश।",
        english: "That became an Egg. After a year, it split in two. Below became Earth. Above became Sky.",
        simpleExplanation: "COSMIC EGG: Universe was an egg! Split into Earth below, Sky above!",
        simpleExplanationHindi: "ब्रह्माण्ड अण्ड: ब्रह्मांड एक अंडा था! नीचे पृथ्वी, ऊपर आकाश बना!",
        nanoBananaPrompt: "Cosmic egg splitting into Earth below and Sky above.",
        wordMeanings: [
            { sanskrit: "aṇḍa", devanagari: "अण्ड", hindi: "अंडा", english: "egg" },
            { sanskrit: "saṃvatsara", devanagari: "संवत्सर", hindi: "वर्ष", english: "year" }
        ]
    },
    {
        id: 4, khanda: 1, mantra: "1.4",
        theme: "The Divine Purusha",
        sanskrit: "मध्ये पुरुषो दिव्यः । सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् सहस्रबाहुः । इति स वै भूतानामात्मा ।",
        hindi: "बीच में एक दिव्य पुरुष प्रकट हुआ। हजार सिर, हजार आँखें, हजार पैर, हजार भुजाएं। वही सभी प्राणियों की आत्मा है।",
        english: "In the middle, a Divine Person appeared. Thousand heads, thousand eyes, thousand feet, thousand arms. He is the Soul of all beings.",
        simpleExplanation: "COSMIC PERSON: 1000 heads, 1000 eyes, 1000 limbs! HE is the Soul of ALL!",
        simpleExplanationHindi: "ब्रह्मांडीय पुरुष: 1000 सिर, 1000 आँखें, 1000 अंग! वह सबकी आत्मा है!",
        nanoBananaPrompt: "Divine Purusha with thousand heads, eyes, feet emerging from the cosmic egg.",
        wordMeanings: [
            { sanskrit: "sahasra", devanagari: "सहस्र", hindi: "हजार", english: "thousand" },
            { sanskrit: "puruṣa", devanagari: "पुरुष", hindi: "पुरुष/आत्मा", english: "cosmic person" }
        ]
    },
    {
        id: 5, khanda: 1, mantra: "1.5",
        theme: "Seven Lokas",
        sanskrit: "स एव सप्तधा भवति । भूः भुवः स्वः महः जनः तपः सत्यमिति ।",
        hindi: "वह सात प्रकार का होता है: भूः, भुवः, स्वः, महः, जनः, तपः और सत्यम्।",
        english: "He becomes sevenfold: Bhuh, Bhuvah, Svah, Mahah, Janah, Tapah, and Satyam.",
        simpleExplanation: "7 LOKAS: Bhuh (Earth) → Bhuvah → Svah → Mahah → Janah → Tapah → Satyam (Truth)!",
        simpleExplanationHindi: "7 लोक: भूः → भुवः → स्वः → महः → जनः → तपः → सत्यम्!",
        nanoBananaPrompt: "Seven cosmic planes stacked: Bhuh to Satyam.",
        wordMeanings: [
            { sanskrit: "saptadhā", devanagari: "सप्तधा", hindi: "सात प्रकार", english: "sevenfold" },
            { sanskrit: "satyam", devanagari: "सत्यम्", hindi: "सत्य लोक", english: "realm of truth" }
        ]
    },

    // KHANDA 2: BIRTH OF DEITIES
    {
        id: 6, khanda: 2, mantra: "2.1-2",
        theme: "From Purusha's Body",
        sanskrit: "तस्य मुखाद् ब्राह्मणोऽजायत । बाहुभ्यां राजन्यः । ऊरुभ्यां वैश्यः । पद्भ्यां शूद्रः । मनसश्चन्द्रमाः । चक्षुषोरादित्यः । हृदयात् ब्रह्मा ।",
        hindi: "उसके मुख से ब्राह्मण। भुजाओं से क्षत्रिय। जांघों से वैश्य। पैरों से शूद्र। मन से चन्द्रमा। आँखों से सूर्य। हृदय से ब्रह्मा।",
        english: "From His mouth, Brahmana. From arms, Kshatriya. From thighs, Vaishya. From feet, Shudra. From mind, Moon. From eyes, Sun. From heart, Brahma.",
        simpleExplanation: "PURUSHA SUKTA: Society and cosmos born from Divine Person's body parts!",
        simpleExplanationHindi: "पुरुष सूक्त: दिव्य पुरुष के अंगों से समाज और ब्रह्मांड!",
        nanoBananaPrompt: "Purusha's body giving birth to classes and cosmic bodies.",
        wordMeanings: [
            { sanskrit: "mukha", devanagari: "मुख", hindi: "मुँह", english: "mouth" },
            { sanskrit: "cakṣuṣa", devanagari: "चक्षुष", hindi: "आँख", english: "eye" }
        ]
    },

    // KHANDA 3: PRALAYA (DISSOLUTION)
    {
        id: 7, khanda: 3, mantra: "3.2",
        theme: "Dissolution Chain 1",
        sanskrit: "स एष भूतानां मृत्युः । अप्सु पृथिवी लीयते । अपस्तेजसि लीयन्ते । तेजो वायौ लीयते । वायुराकाशे लीयते ।",
        hindi: "वह भूतों की मृत्यु है। पृथ्वी जल में लीन। जल अग्नि में। अग्नि वायु में। वायु आकाश में लीन।",
        english: "He is Death of beings. Earth dissolves into Water. Water into Fire. Fire into Air. Air into Ether.",
        simpleExplanation: "DISSOLUTION: Earth → Water → Fire → Air → Ether. Reverse of creation!",
        simpleExplanationHindi: "प्रलय: पृथ्वी → जल → अग्नि → वायु → आकाश। सृष्टि का उल्टा!",
        nanoBananaPrompt: "Elements dissolving in reverse: earth to water to fire to air to ether.",
        wordMeanings: [
            { sanskrit: "līyate", devanagari: "लीयते", hindi: "विलीन होता है", english: "dissolves" },
            { sanskrit: "mṛtyu", devanagari: "मृत्यु", hindi: "मृत्यु/प्रलय", english: "death/dissolution" }
        ]
    },
    {
        id: 8, khanda: 3, mantra: "3.3-4",
        theme: "Dissolution Chain 2",
        sanskrit: "आकाशमिन्द्रियेषु इन्द्रियाणि तन्मात्रेषु । तन्मात्राणि भूतादौ । भूतादिर्महति लीयते । महानव्यक्तो लीयते । अव्यक्तमक्षरे लीयते । अक्षरं तमसि लीयते ।",
        hindi: "आकाश इन्द्रियों में। इन्द्रियां तन्मात्रों में। तन्मात्र भूतादि में। भूतादि महत् में। महत् अव्यक्त में। अव्यक्त अक्षर में। अक्षर तमस में।",
        english: "Ether into Senses. Senses into Tanmatras. Tanmatras into Bhutadi. Bhutadi into Mahat. Mahat into Avyakta. Avyakta into Akshara. Akshara into Tamas.",
        simpleExplanation: "DEEPER DISSOLUTION: Ether → Senses → Subtle → Mahat → Unmanifest → Imperishable → Darkness!",
        simpleExplanationHindi: "गहरा प्रलय: आकाश → इन्द्रियां → सूक्ष्म → महत् → अव्यक्त → अक्षर → तमस!",
        nanoBananaPrompt: "Chain of dissolution going deeper: ether, senses, subtle, mahat, avyakta, akshara, tamas.",
        wordMeanings: [
            { sanskrit: "tanmātra", devanagari: "तन्मात्र", hindi: "सूक्ष्म तत्व", english: "subtle elements" },
            { sanskrit: "mahat", devanagari: "महत्", hindi: "महान बुद्धि", english: "cosmic intelligence" },
            { sanskrit: "avyakta", devanagari: "अव्यक्त", hindi: "अव्यक्त प्रकृति", english: "unmanifest" }
        ]
    },
    {
        id: 9, khanda: 3, mantra: "3.5",
        theme: "Final Merger into Supreme",
        sanskrit: "तमः परे देव एकीभवति । परस्तान्न सन्नासन्न सदसद्... एतन्निर्वाणानुशासनम् ।",
        hindi: "तमस परम देव में एक हो जाता है। उससे परे न सत् है, न असत्, न दोनों। यह निर्वाण का उपदेश है।",
        english: "Tamas becomes one with the Supreme Lord. Beyond Him: neither Being, nor Non-Being, nor both. This is the teaching of Nirvana.",
        simpleExplanation: "FINAL: Even Darkness merges into GOD! Beyond = NOTHING describable! NIRVANA!",
        simpleExplanationHindi: "अंतिम: अंधकार भी भगवान में विलीन! उससे परे = कुछ वर्णनीय नहीं! निर्वाण!",
        nanoBananaPrompt: "Tamas dissolving into the Supreme—beyond all categories, Nirvana.",
        wordMeanings: [
            { sanskrit: "ekībhavati", devanagari: "एकीभवति", hindi: "एक हो जाता है", english: "becomes one" },
            { sanskrit: "nirvāṇa", devanagari: "निर्वाण", hindi: "मोक्ष", english: "liberation/extinction" }
        ]
    },

    // KHANDA 5: NADIS
    {
        id: 10, khanda: 5, mantra: "5.2",
        theme: "101 Nadis and Sushumna",
        sanskrit: "एकशतं नाड्यः तासां मध्ये श्रेष्ठा सुषुम्ना । ब्रह्मरन्ध्रं भिनत्त्येवानन्दविभ्रान्ता ।",
        hindi: "101 नाड़ियां हैं। उनमें सुषुम्ना श्रेष्ठ है। वह ब्रह्मरन्ध्र को भेदती है; वह आनंद में विचरती है।",
        english: "There are 101 Nadis. Among them, Sushumna is the best. It pierces the Brahmarandhra; it moves in Bliss.",
        simpleExplanation: "101 NADIS: Sushumna is BEST! It pierces the crown (Brahmarandhra) to BLISS!",
        simpleExplanationHindi: "101 नाड़ियां: सुषुम्ना सबसे श्रेष्ठ! यह मुकुट (ब्रह्मरंध्र) भेदकर आनंद देती है!",
        nanoBananaPrompt: "101 nadis with Sushumna rising to pierce the Brahmarandhra.",
        wordMeanings: [
            { sanskrit: "nāḍī", devanagari: "नाड़ी", hindi: "ऊर्जा मार्ग", english: "energy channel" },
            { sanskrit: "suṣumnā", devanagari: "सुषुम्ना", hindi: "केंद्रीय नाड़ी", english: "central channel" },
            { sanskrit: "brahmarandhra", devanagari: "ब्रह्मरन्ध्र", hindi: "मुकुट छिद्र", english: "crown opening" }
        ]
    },
    {
        id: 11, khanda: 5, mantra: "5.4",
        theme: "Dahara Pundarika",
        sanskrit: "दहरं पुण्डरीकं वेश्म । तत्र दहरोऽस्मिन्नन्तराकाशः ।",
        hindi: "यह दहर पुण्डरीक (छोटा कमल) रूपी घर है। उसमें दहर-आकाश (Small Space) है।",
        english: "This is the Dahara Lotus, the abode. Within it is the Dahara Akasha (Little Space).",
        simpleExplanation: "HEART LOTUS: Tiny lotus in heart contains INFINITE SPACE! That's where God lives!",
        simpleExplanationHindi: "हृदय कमल: हृदय में छोटा कमल जिसमें अनंत आकाश! वहीं भगवान रहते हैं!",
        nanoBananaPrompt: "Dahara Pundarika—the small lotus in the heart containing infinite space.",
        wordMeanings: [
            { sanskrit: "dahara", devanagari: "दहर", hindi: "छोटा", english: "small/subtle" },
            { sanskrit: "puṇḍarīka", devanagari: "पुण्डरीक", hindi: "कमल", english: "lotus" }
        ]
    },

    // KHANDA 6: ANTARYAMI
    {
        id: 12, khanda: 6, mantra: "6.1",
        theme: "The Inner Controller",
        sanskrit: "यः चक्षुषि तिष्ठन् चक्षुषोऽन्तरः... एष त आत्माऽन्तर्याम्यमृतः ।",
        hindi: "जो आँख में रहता हुआ भी आँख से अलग है; जिसे आँख नहीं जानती—वही तुम्हारा आत्मा, अंतर्यामी, अमृत है।",
        english: "He who dwells in the eye, yet is within the eye... He is your Self, the Inner Controller, the Immortal.",
        simpleExplanation: "ANTARYAMI: He's IN your eye but eye doesn't know Him! He controls from WITHIN!",
        simpleExplanationHindi: "अंतर्यामी: वह तुम्हारी आँख में है पर आँख उन्हें नहीं जानती! वह भीतर से नियंत्रित करते हैं!",
        nanoBananaPrompt: "Narayana as Antaryami—the Inner Controller in the eye, unknown to the eye.",
        wordMeanings: [
            { sanskrit: "antaryāmī", devanagari: "अन्तर्यामी", hindi: "भीतरी नियंत्रक", english: "inner controller" },
            { sanskrit: "amṛta", devanagari: "अमृत", hindi: "अमर", english: "immortal" }
        ]
    },

    // KHANDA 8: NARAYANA
    {
        id: 13, khanda: 8, mantra: "8.1",
        theme: "Narayana the Absolute",
        sanskrit: "मातापितृविहीनः । दिव्यश्चक्षुः अजः एष आत्मापहतपाप्मा नारायणः ।",
        hindi: "वह माता-पिता से रहित है। दिव्य चक्षु वाला, अजन्मा है। वह आत्मा पाप-रहित नारायण है।",
        english: "He is without mother or father. He is the Divine Eye, Unborn. This Self is the Sinless Narayana.",
        simpleExplanation: "NARAYANA: No parents, Unborn, Divine Eye, Sinless! HE is your true Self!",
        simpleExplanationHindi: "नारायण: माता-पिता नहीं, अजन्मा, दिव्य दृष्टि, पाप-रहित! वह तुम्हारी सच्ची आत्मा हैं!",
        nanoBananaPrompt: "Narayana—unborn, parentless, sinless, the Divine Eye within.",
        wordMeanings: [
            { sanskrit: "aja", devanagari: "अज", hindi: "अजन्मा", english: "unborn" },
            { sanskrit: "apahata-pāpmā", devanagari: "अपहतपाप्मा", hindi: "पाप-रहित", english: "sinless" }
        ]
    },

    // KHANDA 9: WAY OF LIFE
    {
        id: 14, khanda: 9, mantra: "9.1-2",
        theme: "Live Like a Child",
        sanskrit: "बाल्येन तिष्ठासेत् । बालस्वभावोऽसङ्गो निरवद्यः । मौनेन पाण्डित्यं निर्विद्य ।",
        hindi: "बालक की तरह रहना चाहिए। बालक का स्वभाव असंग और निर्दोष होता है। मौन से पाण्डित्य पूर्ण करना चाहिए।",
        english: "One should remain like a Child. Child's nature is unattached and innocent. Perfect scholarship through Silence.",
        simpleExplanation: "BE LIKE A CHILD: Innocent, unattached! SILENCE perfects wisdom more than books!",
        simpleExplanationHindi: "बच्चे जैसे बनो: निर्दोष, अनासक्त! मौन किताबों से ज्यादा ज्ञान पूर्ण करता है!",
        nanoBananaPrompt: "Sage in childlike innocence, perfecting wisdom through silence.",
        wordMeanings: [
            { sanskrit: "bālya", devanagari: "बाल्य", hindi: "बचपन", english: "childhood" },
            { sanskrit: "asaṅga", devanagari: "असङ्ग", hindi: "अनासक्त", english: "unattached" },
            { sanskrit: "mauna", devanagari: "मौन", hindi: "मौन", english: "silence" }
        ]
    },

    // KHANDA 16: CONCLUSION
    {
        id: 15, khanda: 16, mantra: "16.1",
        theme: "Nirvana: The Final Teaching",
        sanskrit: "न सन्नासन्न सदसत् । एतन्निर्वाणानुशासनम् । इति वेदानुशासनम् ।",
        hindi: "वहाँ न सत् है, न असत्, न दोनों। यह निर्वाण का उपदेश है। यही वेद का उपदेश है।",
        english: "There is neither Being, nor Non-Being, nor Both. This is the teaching of Nirvana. This is the teaching of the Veda.",
        simpleExplanation: "FINAL TRUTH: Beyond existence and non-existence. THIS is Nirvana. THIS is Veda's core!",
        simpleExplanationHindi: "अंतिम सत्य: अस्तित्व और अभाव से परे। यही निर्वाण। यही वेद का सार!",
        nanoBananaPrompt: "The final teaching—beyond sat and asat, Nirvana realized.",
        wordMeanings: [
            { sanskrit: "vedānuśāsana", devanagari: "वेदानुशासन", hindi: "वेद का उपदेश", english: "teaching of Veda" }
        ]
    }
];

// Metadata
export const SUBALA_METADATA = {
    id: "subala",
    name: "Subala",
    nameSanskrit: "सुबालोपनिषद्",
    veda: "Shukla Yajur Veda",
    category: "Samanya (Cosmological)",
    shlokaCount: 15,
    khandaCount: 16,
    sequenceNumber: 30,
    khandas: {
        1: { name: "Origin of Universe", theme: "Neither Sat nor Asat, Creation chain, Cosmic Egg, Divine Purusha" },
        2: { name: "Birth of Deities", theme: "Purusha Sukta—classes and cosmos from His body" },
        3: { name: "Pralaya (Dissolution)", theme: "Reverse chain: Earth→Water→Fire→Air→Ether→...→Tamas→God" },
        5: { name: "Nadis", theme: "101 nadis, Sushumna, Dahara Pundarika" },
        6: { name: "Antaryami", theme: "Inner Controller in eye, ear, etc." },
        8: { name: "Narayana", theme: "Unborn, Sinless Narayana" },
        9: { name: "Way of Life", theme: "Live like a child, Silence perfects scholarship" },
        16: { name: "Conclusion", theme: "Neither Sat nor Asat = Nirvana = Veda's teaching" }
    },
    creationChain: ["Asat", "Tamas", "Bhutadi", "Akasha", "Vayu", "Agni", "Apas", "Prithvi"],
    dissolutionChain: ["Prithvi→Apas", "Apas→Agni", "Agni→Vayu", "Vayu→Akasha", "Akasha→Indriyas", "Indriyas→Tanmatras", "Tanmatras→Bhutadi", "Bhutadi→Mahat", "Mahat→Avyakta", "Avyakta→Akshara", "Akshara→Tamas", "Tamas→Brahman"],
    sevenLokas: ["Bhuh", "Bhuvah", "Svah", "Mahah", "Janah", "Tapah", "Satyam"],
    keyTeachings: [
        "Before creation: Neither Being nor Non-Being",
        "Creation: Tamas → Ether → Air → Fire → Water → Earth",
        "Cosmic Egg split into Earth and Sky",
        "Divine Purusha with 1000 heads appeared in middle",
        "7 Lokas: Bhuh to Satyam",
        "Dissolution reverses creation chain",
        "101 Nadis, Sushumna is best, pierces Brahmarandhra",
        "Narayana is Antaryami (Inner Controller)",
        "Live like a child—unattached, innocent",
        "Silence perfects scholarship"
    ],
    famousVerses: {
        neitherSatNorAsat: { id: 1, khanda: 1, mantra: "1.1" },
        cosmicEgg: { id: 3, khanda: 1, mantra: "1.3" },
        dissolutionChain: { id: 7, khanda: 3, mantra: "3.2" },
        sushumna: { id: 10, khanda: 5, mantra: "5.2" },
        liveLikeChild: { id: 14, khanda: 9, mantra: "9.1-2" },
        nirvana: { id: 15, khanda: 16, mantra: "16.1" }
    }
};

export const getSubalaMantra = (khanda: number, mantra: string): SubalaDataEntry | undefined => {
    return SUBALA_SHLOKAS.find(s => s.khanda === khanda && s.mantra === mantra);
};
