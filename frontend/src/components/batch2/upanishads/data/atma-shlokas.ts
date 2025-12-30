// Atma Upanishad Data (#33 in Muktika Canon)
// Source: Atharva Veda | Category: Samanya
// Theme: The Threefold Classification of Self (External, Inner, Supreme)
// Total: 4 Khandas

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface AtmaDataEntry {
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
export const ATMA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः । स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः । व्यशेम देवहितं यदायुः ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हे देवगण! हम कानों से शुभ सुनें। आँखों से शुभ देखें। हमारे अंग दृढ़ हों। ॐ शांति, शांति, शांति।",
    english: "OM! O Gods, may we hear what is auspicious. May we see what is auspicious. May our limbs be strong. OM Peace, Peace, Peace."
};

export const ATMA_SHLOKAS: AtmaDataEntry[] = [
    // Khanda 1: The Threefold Self
    {
        id: 1,
        khanda: 1,
        verse: 1,
        theme: "The Threefold Self",
        sanskrit: "ॐ। अथ अङ्गिराः त्रिविधः पुरुषः । अजहात्मा जीवात्मा परमात्मा चेति ।",
        hindi: "ॐ। ऋषि अंगिरा कहते हैं: पुरुष तीन प्रकार का है—1. अजहात्मा (बाह्यात्मा/शरीर), 2. जीवात्मा (अंतरात्मा), और 3. परमात्मा।",
        english: "OM. Sage Angiras says: The Self is THREEFOLD: 1. Ajahat-Atma (External/Body), 2. Jivatma (Individual Soul), and 3. Paramatma (Supreme Self).",
        simpleExplanation: "3 KINDS OF SELF: Body (External) + Soul (Inner) + Supreme = Complete picture!",
        simpleExplanationHindi: "3 प्रकार का आत्मा: शरीर (बाह्य) + जीव (अंतर) + परम = पूर्ण चित्र!",
        nanoBananaPrompt: "Sage Angiras teaching the threefold classification of Self.",
        wordMeanings: [
            { sanskrit: "ajahatātmā", devanagari: "अजहात्मा", hindi: "बाह्य आत्मा", english: "external self" },
            { sanskrit: "jīvātmā", devanagari: "जीवात्मा", hindi: "जीव आत्मा", english: "individual soul" },
            { sanskrit: "paramātmā", devanagari: "परमात्मा", hindi: "परम आत्मा", english: "supreme self" }
        ]
    },
    // Khanda 2: The External Self
    {
        id: 2,
        khanda: 2,
        verse: 1,
        theme: "External Self = Body",
        sanskrit: "तत्र कः बाह्यात्मा नाम । यस्य अस्थिचर्मस्नायुमज्जाकेशाङ्गुली-नख-दन्त-ओष्ठ-गुल्फ-जानु-ऊरु-गुद-गुह्य-कटि-नाभि-हृदय-कण्ठ-शिरोभिः साध्यते ।",
        hindi: "बाह्यात्मा कौन है? वह शरीर जो हड्डी, चमड़ा, नसों, मज्जा, बाल, उंगलियां, नाखून, दांत, होंठ, टखने, घुटने, जांघ, गुदा, जननांग, कमर, नाभि, हृदय, कंठ और सिर से बना है।",
        english: "What is the External Self? That which is made of bones, skin, flesh, marrow, hair, fingers, nails, teeth, lips, ankles, knees, thighs, anus, genitals, waist, navel, heart, throat, and head.",
        simpleExplanation: "EXTERNAL SELF = BODY: Made of bones, skin, organs—the physical form!",
        simpleExplanationHindi: "बाह्य आत्मा = शरीर: हड्डी, चमड़ा, अंगों से बना—भौतिक रूप!",
        nanoBananaPrompt: "The external self as the physical body with all its parts.",
        wordMeanings: [
            { sanskrit: "bāhyātmā", devanagari: "बाह्यात्मा", hindi: "बाहरी आत्मा", english: "external self" }
        ]
    },
    {
        id: 3,
        khanda: 2,
        verse: 2,
        theme: "Body is Born and Dies",
        sanskrit: "स जायते म्रियते । एष बाह्यात्मा नाम ।",
        hindi: "वह पैदा होता है और मर जाता है। यही बाह्यात्मा है।",
        english: "It is BORN and it DIES. This is called the External Self.",
        simpleExplanation: "BODY = MORTAL: It is born, it dies. That's why it's 'external'—not the real you!",
        simpleExplanationHindi: "शरीर = नश्वर: जन्म लेता है, मरता है। इसलिए 'बाह्य'—असली तुम नहीं!",
        nanoBananaPrompt: "The external self being born and dying—the mortal body.",
        wordMeanings: [
            { sanskrit: "jāyate mriyate", devanagari: "जायते म्रियते", hindi: "जन्मता है मरता है", english: "is born and dies" }
        ]
    },
    // Khanda 3: The Inner Self
    {
        id: 4,
        khanda: 3,
        verse: 1,
        theme: "Inner Self = Mind/Ego",
        sanskrit: "अथ कः अन्तरात्मा नाम । यः पृथिव्यापस्तेजोवायुराकाशेति । शब्दस्पर्शरूपरसगन्धादीन् अभिमन्यते ।",
        hindi: "अंतरात्मा कौन है? जो पृथ्वी, जल, तेज, वायु और आकाश के माध्यम से; शब्द, स्पर्श, रूप, रस और गंध का अभिमान (अनुभव) करता है।",
        english: "What is the Inner Self? That which through Earth, Water, Fire, Air, Ether; identifies with and experiences Sound, Touch, Form, Taste, Smell.",
        simpleExplanation: "INNER SELF = EGO: The one who feels 'I experience' through the 5 elements and 5 senses!",
        simpleExplanationHindi: "अंतर आत्मा = अहंकार: जो 5 तत्वों और 5 इंद्रियों से 'मैं अनुभव करता हूँ' महसूस करता है!",
        nanoBananaPrompt: "The inner self as the experiencer through elements and senses.",
        wordMeanings: [
            { sanskrit: "antarātmā", devanagari: "अन्तरात्मा", hindi: "भीतरी आत्मा", english: "inner self" },
            { sanskrit: "abhimanyate", devanagari: "अभिमन्यते", hindi: "अभिमान करता है", english: "identifies with" }
        ]
    },
    {
        id: 5,
        khanda: 3,
        verse: 2,
        theme: "Inner Self Experiences Emotions",
        sanskrit: "श्रोत्रघ्राणचक्षुर्जिह्वात्वक्पादपायूपस्थहस्तवाक्—एतैः । कामक्रोधलोभमोहमदमात्सर्यदम्भदर्पाहंकारेच्छाद्वेषसुखदुःखादीन् अनुभवति ।",
        hindi: "कान, नाक, आँख, जीभ, त्वचा, पैर, गुदा, जननांग, हाथ और वाणी द्वारा—काम, क्रोध, लोभ, मोह, मद, मत्सर, दम्भ, दर्प, अहंकार, इच्छा, द्वेष, सुख और दुख का अनुभव करता है।",
        english: "Through Ear, Nose, Eye, Tongue, Skin, Feet, Anus, Genitals, Hands, Speech—it experiences Lust, Anger, Greed, Delusion, Pride, Envy, Hypocrisy, Arrogance, Egoism, Desire, Hatred, Pleasure, Pain.",
        simpleExplanation: "INNER SELF FEELS: Lust, anger, greed, pride, pleasure, pain—all the drama of emotions!",
        simpleExplanationHindi: "अंतर आत्मा महसूस करता है: काम, क्रोध, लोभ, गर्व, सुख, दुख—सारी भावनाओं का नाटक!",
        nanoBananaPrompt: "The inner self experiencing all emotions through the ten organs.",
        wordMeanings: [
            { sanskrit: "kāma-krodha-lobha", devanagari: "कामक्रोधलोभ", hindi: "काम-क्रोध-लोभ", english: "lust-anger-greed" }
        ]
    },
    {
        id: 6,
        khanda: 3,
        verse: 3,
        theme: "Inner Self = Doer and Knower",
        sanskrit: "श्रोता वक्ता मन्ता कर्ता विज्ञाता पुरुषः । नैयायिकैः श्रुतिविशारदैः वा विभिद्यते । एष अन्तरात्मा नाम ।",
        hindi: "वह सुनने वाला, बोलने वाला, मानने वाला, कर्ता और जानने वाला पुरुष है। नैयायिकों और वेदांतियों द्वारा इसमें भेद किया जाता है। यही अंतरात्मा है।",
        english: "It is the Hearer, Speaker, Thinker, Doer, Knower. It is categorized by Logicians and Vedantins. This is the Inner Self.",
        simpleExplanation: "INNER SELF = ACTOR: The hearer, speaker, thinker, doer—the one who acts in the world!",
        simpleExplanationHindi: "अंतर आत्मा = अभिनेता: सुनने वाला, बोलने वाला, सोचने वाला, करने वाला—जो दुनिया में काम करता है!",
        nanoBananaPrompt: "The inner self as hearer, speaker, thinker, doer, and knower.",
        wordMeanings: [
            { sanskrit: "kartā vijñātā", devanagari: "कर्ता विज्ञाता", hindi: "कर्ता और ज्ञाता", english: "doer and knower" }
        ]
    },
    // Khanda 4: The Supreme Self
    {
        id: 7,
        khanda: 4,
        verse: 1,
        theme: "Supreme Self = Yogic Realization",
        sanskrit: "अथ कः परमात्मा नाम । यः आत्मा प्राणायामप्रत्याहारधारणाध्यानसमाधियोगानुमानेन चिन्त्यते ।",
        hindi: "परमात्मा कौन है? वह आत्मा जिसका चिंतन प्राणायाम, प्रत्याहार, धारणा, ध्यान और समाधि-योग द्वारा किया जाता है।",
        english: "What is the Supreme Self? That Self contemplated through Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi-Yoga.",
        simpleExplanation: "SUPREME SELF = REALIZED THROUGH YOGA: Pranayama → Pratyahara → Dharana → Dhyana → Samadhi!",
        simpleExplanationHindi: "परम आत्मा = योग से साक्षात्कार: प्राणायाम → प्रत्याहार → धारणा → ध्यान → समाधि!",
        nanoBananaPrompt: "The Supreme Self realized through the stages of Yoga.",
        wordMeanings: [
            { sanskrit: "samādhi-yoga", devanagari: "समाधियोग", hindi: "समाधि योग", english: "yoga of absorption" }
        ]
    },
    {
        id: 8,
        khanda: 4,
        verse: 2,
        theme: "Subtle Like a Seed",
        sanskrit: "वटश्यामाकबीजवादणुः । न सन्नासन्न सदसत् । सर्वसङ्कल्पवर्जितः ।",
        hindi: "वह बरगद या चावल के बीज की तरह अणु है। वह न सत् है, न असत् है, और न सत्-असत्। वह सभी संकल्पों से रहित है।",
        english: "It is subtle like a banyan seed or millet. Neither Being, nor Non-Being, nor both. Devoid of all determination.",
        simpleExplanation: "SUPREME = SUBTLEST: Like a tiny seed. Neither is, nor isn't. Beyond all concepts!",
        simpleExplanationHindi: "परम = सूक्ष्मतम: छोटे बीज जैसा। न है, न नहीं है। सभी धारणाओं से परे!",
        nanoBananaPrompt: "The Supreme Self as subtle as a seed, beyond being and non-being.",
        wordMeanings: [
            { sanskrit: "aṇu", devanagari: "अणु", hindi: "अति सूक्ष्म", english: "atomic/subtle" },
            { sanskrit: "saṅkalpavarjita", devanagari: "सङ्कल्पवर्जित", hindi: "संकल्प-रहित", english: "devoid of determination" }
        ]
    },
    {
        id: 9,
        khanda: 4,
        verse: 3,
        theme: "Indestructible Witness",
        sanskrit: "न जायते न म्रियते न शुष्यति न क्लिद्यते न दह्यते न कम्पते न भिद्यते न च्छिद्यते । निर्गुणः साक्षीभूतः शुद्धो निरवयवात्मा केवलः ।",
        hindi: "न जन्म, न मृत्यु, न सूखता, न भीगता, न जलता, न कांपता, न भेदा जाता, न काटा जाता। निर्गुण, साक्षी, शुद्ध, अवयव-रहित और केवल।",
        english: "Not born, not dying, not drying, not wetted, not burnt, not trembling, not pierced, not cut. Attribute-less, Witness, Pure, Limb-less, Absolute.",
        simpleExplanation: "SUPREME = INDESTRUCTIBLE: Can't be born, killed, burnt, cut. The eternal WITNESS!",
        simpleExplanationHindi: "परम = अविनाशी: जन्म, मरण, जलाना, काटना असंभव। शाश्वत साक्षी!",
        nanoBananaPrompt: "The Supreme Self as indestructible, unchanging witness.",
        wordMeanings: [
            { sanskrit: "nirguṇa", devanagari: "निर्गुण", hindi: "गुण-रहित", english: "attribute-less" },
            { sanskrit: "sākṣībhūta", devanagari: "साक्षीभूत", hindi: "साक्षी स्वरूप", english: "witness" },
            { sanskrit: "kevala", devanagari: "केवल", hindi: "अकेला/शुद्ध", english: "absolute" }
        ]
    },
    {
        id: 10,
        khanda: 4,
        verse: 4,
        theme: "Beyond All Qualities",
        sanskrit: "सूक्ष्मो निर्ममः निरञ्जनो विकाररहितः शब्दस्पर्शरूपरसगन्धवर्जितः । निर्विकल्पो निराकाङ्क्षः सर्वव्यापी सोऽचिन्त्यः निर्वर्णश्च ।",
        hindi: "सूक्ष्म, ममता-रहित, निरंजन, विकार-रहित, शब्द-स्पर्श-रूप-रस-गंध से रहित। निर्विकल्प, आकांक्षा-रहित, सर्वव्यापी, अचिन्त्य और वर्ण-रहित।",
        english: "Subtle, without 'mine', Stainless, Changeless, free from Sound-Touch-Form-Taste-Smell. Changeless, Desireless, All-pervading, Unthinkable, Colorless.",
        simpleExplanation: "SUPREME = BEYOND ALL: No sound, touch, form, taste, smell. All-pervading, unthinkable!",
        simpleExplanationHindi: "परम = सबसे परे: शब्द, स्पर्श, रूप, रस, गंध नहीं। सर्वव्यापी, अचिन्त्य!",
        nanoBananaPrompt: "The Supreme Self beyond all sensory qualities, all-pervading.",
        wordMeanings: [
            { sanskrit: "nirañjana", devanagari: "निरञ्जन", hindi: "निर्मल", english: "stainless" },
            { sanskrit: "sarvavyāpī", devanagari: "सर्वव्यापी", hindi: "सर्वव्यापी", english: "all-pervading" }
        ]
    },
    {
        id: 11,
        khanda: 4,
        verse: 5,
        theme: "The Liberator",
        sanskrit: "पुनाति अशुद्धान्यशुद्धानि निष्क्रियाणि । स संसारं तारयति । एष परमात्मा नाम ।",
        hindi: "वह अशुद्ध और निष्क्रिय वस्तुओं को पवित्र करता है। वह संसार से तार देता है। यही परमात्मा है।",
        english: "It purifies the impure and inert. It saves from Samsara. This is the SUPREME SELF.",
        simpleExplanation: "SUPREME = LIBERATOR: Purifies all, saves from the cycle of rebirth!",
        simpleExplanationHindi: "परम = मुक्तिदाता: सबको शुद्ध करता है, पुनर्जन्म चक्र से बचाता है!",
        nanoBananaPrompt: "The Supreme Self as purifier and liberator from Samsara.",
        wordMeanings: [
            { sanskrit: "tārayati", devanagari: "तारयति", hindi: "पार लगाता है", english: "saves/liberates" }
        ]
    },
    {
        id: 12,
        khanda: 4,
        verse: 6,
        theme: "Conclusion",
        sanskrit: "इत्युपनिषत् ॥",
        hindi: "यही उपनिषद है।",
        english: "Thus ends the Upanishad.",
        simpleExplanation: "THE END: Three selves understood. Body dies, Ego experiences, Supreme liberates!",
        simpleExplanationHindi: "समाप्ति: तीन आत्मा समझे। शरीर मरता, अहंकार अनुभव करता, परम मुक्त करता!",
        nanoBananaPrompt: "The conclusion of the Atma Upanishad teaching.",
        wordMeanings: [
            { sanskrit: "upaniṣat", devanagari: "उपनिषत्", hindi: "उपनिषद", english: "secret teaching" }
        ]
    }
];

export const ATMA_METADATA = {
    id: "atma",
    name: "Atma",
    nameSanskrit: "आत्मोपनिषद्",
    alternateNames: ["Atmopanishad"],
    veda: "Atharva Veda",
    category: "Samanya",
    shlokaCount: 12,
    khandaCount: 4,
    sequenceNumber: 33,
    meaning: "Upanishad of the Self",
    keyTeachings: [
        "The Self is THREEFOLD:",
        "1. Bahyatma (External Self) = Physical Body",
        "   - Made of bones, skin, organs",
        "   - Is born and DIES",
        "2. Antaratma (Inner Self) = Mind/Ego",
        "   - Experiences through 5 elements and 5 senses",
        "   - Feels lust, anger, greed, pleasure, pain",
        "   - The hearer, speaker, thinker, doer",
        "3. Paramatma (Supreme Self) = Spirit",
        "   - Realized through Yoga (Pranayama to Samadhi)",
        "   - Subtle as a seed, beyond being and non-being",
        "   - Not born, not dying, not burnt, not cut",
        "   - Attribute-less, Witness, All-pervading",
        "   - Purifies and liberates from Samsara"
    ],
    famousVerses: {
        threefoldSelf: { id: 1, khanda: 1, verse: 1 },
        bodyDies: { id: 3, khanda: 2, verse: 2 },
        egoExperiences: { id: 5, khanda: 3, verse: 2 },
        yogicRealization: { id: 7, khanda: 4, verse: 1 },
        indestructible: { id: 9, khanda: 4, verse: 3 },
        liberator: { id: 11, khanda: 4, verse: 5 }
    }
};
