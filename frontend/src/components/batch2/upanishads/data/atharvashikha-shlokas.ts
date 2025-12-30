// Atharvashikha Upanishad Data (#23 in Muktika Canon)
// Source: Atharva Veda | Category: Shaiva
// Theme: Pranava (OM) Four Parts, Shiva as Fourth State (Turiya), A-U-M-Silence
// Total: 3 Khandas with ~15 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface AtharvashikhaDataEntry {
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

// Shanti Mantra
export const ATHARVASHIKHA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः । स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः । व्यशेम देवहितं यदायुः ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हे देवगण! हम कानों से कल्याणकारी वचन सुनें। हम आँखों से शुभ दृश्य देखें। हमारे अंग दृढ़ हों और हम देवताओं द्वारा निर्धारित आयु भोगें।",
    english: "OM! O Gods, may we hear what is auspicious. May we see what is auspicious. With strong limbs, may we enjoy the life allotted by the Gods. OM Peace."
};

export const ATHARVASHIKHA_SHLOKAS: AtharvashikhaDataEntry[] = [
    // KHANDA 1: THE OBJECT OF MEDITATION
    {
        id: 1, khanda: 1, mantra: "1.1",
        theme: "The Four Questions",
        sanskrit: "ॐ अथ हैनं पिप्पलादोऽङ्गिरसं सनत्कुमारश्चाथर्वाणं पप्रच्छुः । भगवन् किं आधौ ध्यातव्यं किम् वा ध्यानं कः वा ध्याता कश्च ध्येयः इति ।",
        hindi: "ॐ। पिप्पलाद, अंगिरा और सनत्कुमार ने ऋषि अथर्वा से पूछा: 'हे भगवन्! आरंभ में किसका ध्यान करें? ध्यान क्या है? ध्याता कौन है? और ध्येय कौन है?'",
        english: "OM. Pippalada, Angiras, and Sanatkumara asked Sage Atharvan: 'O Lord! What should be meditated upon? What is Meditation? Who is the Meditator? Who is the Object of Meditation?'",
        simpleExplanation: "FOUR QUESTIONS: What to meditate on? What is meditation? Who meditates? Who is the goal?",
        simpleExplanationHindi: "चार प्रश्न: किसका ध्यान करें? ध्यान क्या है? ध्याता कौन? ध्येय कौन?",
        nanoBananaPrompt: "Three sages asking Atharvan the four fundamental questions of meditation.",
        wordMeanings: [
            { sanskrit: "dhyātavya", devanagari: "ध्यातव्य", hindi: "ध्यान योग्य", english: "to be meditated upon" },
            { sanskrit: "dhyātā", devanagari: "ध्याता", hindi: "ध्यान करने वाला", english: "meditator" },
            { sanskrit: "dhyeya", devanagari: "ध्येय", hindi: "ध्यान का लक्ष्य", english: "object of meditation" }
        ]
    },
    {
        id: 2, khanda: 1, mantra: "1.2",
        theme: "OM is the Answer",
        sanskrit: "स होवाचाथर्वा । ॐ इत्येतदक्षरमादौ प्रयुक्तम् । ध्यानं तस्य निर्विषयं मनः । स एव ध्याता स एव ध्येयः ।",
        hindi: "अथर्वा ने कहा: 'ॐ'—इस अक्षर का आदि में प्रयोग करो। उसका ध्यान निर्विषय मन है। वही ध्याता है, और वही ध्येय है।",
        english: "Atharvan replied: 'OM'—use this syllable in the beginning. Meditation is the mind free from objects. He alone is the Meditator, and He alone is the Object.",
        simpleExplanation: "ONE ANSWER TO ALL: OM! Meditator = Object = Same Self! Mind free of objects = Meditation!",
        simpleExplanationHindi: "सबका एक उत्तर: ॐ! ध्याता = ध्येय = एक ही आत्मा! विषय-मुक्त मन = ध्यान!",
        nanoBananaPrompt: "Sage revealing OM as the answer—meditator and object being the same Self.",
        wordMeanings: [
            { sanskrit: "akṣara", devanagari: "अक्षर", hindi: "अक्षर/अविनाशी", english: "syllable/imperishable" },
            { sanskrit: "nirviṣaya manas", devanagari: "निर्विषय मनः", hindi: "विषय-रहित मन", english: "mind free from objects" }
        ]
    },
    {
        id: 3, khanda: 1, mantra: "1.3",
        theme: "Four Parts of OM",
        sanskrit: "तदेतदेकाक्षरं भूतम् । पादाश्चत्वारः । देवाश्चत्वारः । वेदाश्चत्वारः ।",
        hindi: "वह यह एक अक्षर (ॐ) ही परम सत्य है। उसके चार पाद हैं। उनमें चार देवता हैं और चार वेद हैं।",
        english: "That One Syllable is Ultimate Reality. It has Four Feet. In them are Four Gods and Four Vedas.",
        simpleExplanation: "OM = 4 QUARTERS: Four Feet + Four Gods + Four Vedas. All in ONE syllable!",
        simpleExplanationHindi: "ॐ = 4 चरण: चार पाद + चार देवता + चार वेद। सब एक अक्षर में!",
        nanoBananaPrompt: "OM with four quarters containing four gods and four Vedas.",
        wordMeanings: [
            { sanskrit: "pāda", devanagari: "पाद", hindi: "चरण/पाद", english: "foot/quarter" },
            { sanskrit: "catvāraḥ", devanagari: "चत्वारः", hindi: "चार", english: "four" }
        ]
    },

    // KHANDA 2: THE FOUR MATRAS
    {
        id: 4, khanda: 2, mantra: "2.1",
        theme: "First Matra: A = Brahma",
        sanskrit: "प्रथमः पादः । आकारो यस्य । पृथिवी । अग्निः । ऋग्वेदः । ब्रह्मा । पितामहः ।",
        hindi: "प्रथम पाद: जिसका अक्षर 'अ' है। वह पृथ्वी है; अग्नि है; ऋग्वेद है; ब्रह्मा है; पितामह है।",
        english: "First Quarter: Its letter is 'A'. It is Earth; Fire; Rig Veda; Brahma; the Grandfather.",
        simpleExplanation: "A = BRAHMA: First sound = Earth, Fire, Rig Veda, Creator God!",
        simpleExplanationHindi: "अ = ब्रह्मा: पहला स्वर = पृथ्वी, अग्नि, ऋग्वेद, सृष्टिकर्ता!",
        nanoBananaPrompt: "Letter A shining with Earth, Fire, Rig Veda, and Brahma the Creator.",
        wordMeanings: [
            { sanskrit: "ākāra", devanagari: "आकार", hindi: "'अ' अक्षर", english: "letter A" },
            { sanskrit: "brahmā", devanagari: "ब्रह्मा", hindi: "ब्रह्मा", english: "Brahma the Creator" }
        ]
    },
    {
        id: 5, khanda: 2, mantra: "2.3",
        theme: "Second Matra: U = Vishnu",
        sanskrit: "द्वितीयः पादः । उकारो यस्य । अन्तरिक्षम् । वायुः । यजुर्वेदः । विष्णुः । नारायणः ।",
        hindi: "द्वितीय पाद: जिसका अक्षर 'उ' है। वह अंतरिक्ष है; वायु है; यजुर्वेद है; विष्णु है; नारायण है।",
        english: "Second Quarter: Its letter is 'U'. It is Sky; Air; Yajur Veda; Vishnu; Narayana.",
        simpleExplanation: "U = VISHNU: Second sound = Sky, Air, Yajur Veda, Preserver God!",
        simpleExplanationHindi: "उ = विष्णु: दूसरा स्वर = आकाश, वायु, यजुर्वेद, पालनकर्ता!",
        nanoBananaPrompt: "Letter U shining with Sky, Air, Yajur Veda, and Vishnu the Preserver.",
        wordMeanings: [
            { sanskrit: "ukāra", devanagari: "उकार", hindi: "'उ' अक्षर", english: "letter U" },
            { sanskrit: "viṣṇu", devanagari: "विष्णु", hindi: "विष्णु", english: "Vishnu the Preserver" }
        ]
    },
    {
        id: 6, khanda: 2, mantra: "2.5",
        theme: "Third Matra: M = Rudra",
        sanskrit: "तृतीयः पादः । मकारो यस्य । द्यौः । सूर्यः । सामवेदः । रुद्रः । महेश्वरः ।",
        hindi: "तृतीय पाद: जिसका अक्षर 'म' है। वह द्युलोक (Heaven) है; सूर्य है; सामवेद है; रुद्र है; महेश्वर है।",
        english: "Third Quarter: Its letter is 'M'. It is Heaven; Sun; Sama Veda; Rudra; Maheshvara.",
        simpleExplanation: "M = RUDRA: Third sound = Heaven, Sun, Sama Veda, Destroyer God!",
        simpleExplanationHindi: "म = रुद्र: तीसरा स्वर = स्वर्ग, सूर्य, सामवेद, संहारक!",
        nanoBananaPrompt: "Letter M shining with Heaven, Sun, Sama Veda, and Rudra the Destroyer.",
        wordMeanings: [
            { sanskrit: "makāra", devanagari: "मकार", hindi: "'म' अक्षर", english: "letter M" },
            { sanskrit: "rudra", devanagari: "रुद्र", hindi: "रुद्र", english: "Rudra the Destroyer" }
        ]
    },
    {
        id: 7, khanda: 2, mantra: "2.7-8",
        theme: "Fourth Matra: Silence = Shiva",
        sanskrit: "चतुर्थः पादः । अर्धमात्रा यस्य । अथर्वा । संवर्तकोऽग्निः । मरुतः । विराट् । एकर्षिः भास्वती स्मृता । सा स्वयम् परमं ब्रह्म ।",
        hindi: "चतुर्थ पाद: जिसकी अर्ध-मात्रा (Silence) है। वह अथर्ववेद है; प्रलयंकारी अग्नि है; मरुत है; विराट है। उसे 'एकर्षि' और 'भास्वती' माना है। वह स्वयं परम ब्रह्म है।",
        english: "Fourth Quarter: Its measure is the Half-Syllable (Silence). It is Atharva Veda; Dissolution Fire; Maruts; Virat. It is the Sole Seer, Self-Luminous. That Itself is Supreme Brahman.",
        simpleExplanation: "SILENCE = SHIVA/BRAHMAN: The Fourth is BEYOND sound—the self-luminous Supreme!",
        simpleExplanationHindi: "मौन = शिव/ब्रह्म: चौथा ध्वनि से परे है—स्वयं-प्रकाश परम!",
        nanoBananaPrompt: "The silent half-matra as Supreme Brahman—beyond A-U-M, self-luminous Shiva.",
        wordMeanings: [
            { sanskrit: "ardhamātrā", devanagari: "अर्धमात्रा", hindi: "आधी मात्रा/मौन", english: "half-syllable/silence" },
            { sanskrit: "bhāsvatī", devanagari: "भास्वती", hindi: "स्वयं प्रकाशमान", english: "self-luminous" },
            { sanskrit: "paraṃ brahma", devanagari: "परं ब्रह्म", hindi: "परम ब्रह्म", english: "Supreme Brahman" }
        ]
    },

    // KHANDA 3: THE RESULT
    {
        id: 8, khanda: 3, mantra: "3.1",
        theme: "Structure of OM",
        sanskrit: "स एष ओंकारश्चतुष्पात् । चतुःशिरः चतुर्धा । अकार उपरि उकारः । उकारस्योपरि मकारः । मकारस्योपरि अर्धमात्रा । अर्धमात्रायास्तु उपरि नादः ।",
        hindi: "वह ओंकार चार चरणों वाला, चार सिर वाला है। 'अ' के ऊपर 'उ'; 'उ' के ऊपर 'म'; 'म' के ऊपर अर्ध-मात्रा; और अर्ध-मात्रा के ऊपर नाद है।",
        english: "That OM has four feet, four heads. Above 'A' is 'U'; above 'U' is 'M'; above 'M' is Half-Matra; above Half-Matra is Nada (Soundless Resonance).",
        simpleExplanation: "OM TOWER: A → U → M → Silence → Nada (Soundless). Each higher than last!",
        simpleExplanationHindi: "ॐ टॉवर: अ → उ → म → मौन → नाद। हर एक पहले से ऊपर!",
        nanoBananaPrompt: "OM as a tower: A at base, U above, M above, Silence above, Nada at top.",
        wordMeanings: [
            { sanskrit: "catuṣpāt", devanagari: "चतुष्पात्", hindi: "चार चरणों वाला", english: "four-footed" },
            { sanskrit: "nāda", devanagari: "नाद", hindi: "ध्वनि-रहित गूंज", english: "soundless resonance" }
        ]
    },
    {
        id: 9, khanda: 3, mantra: "3.2",
        theme: "Creation and Dissolution",
        sanskrit: "नादान्ते सोऽयमोङ्कारः । तस्माज्जगदुत्पत्तिः । तस्मिन् लीयते ।",
        hindi: "नाद के अंत में वह ओंकार है। उसी से जगत की उत्पत्ति होती है और उसी में यह लीन होता है।",
        english: "At the end of Nada is that OM. From That, the world originates; into That, it dissolves.",
        simpleExplanation: "SOURCE AND END: World comes FROM OM, goes BACK to OM. Origin = Destination!",
        simpleExplanationHindi: "स्रोत और अंत: जगत ॐ से आता है, ॐ में जाता है। मूल = गंतव्य!",
        nanoBananaPrompt: "Universe emerging from OM and dissolving back into OM.",
        wordMeanings: [
            { sanskrit: "utpatti", devanagari: "उत्पत्ति", hindi: "उत्पत्ति", english: "origin" },
            { sanskrit: "līyate", devanagari: "लीयते", hindi: "विलीन होता है", english: "dissolves" }
        ]
    },
    {
        id: 10, khanda: 3, mantra: "3.3",
        theme: "Gods are Born, Shiva is Cause",
        sanskrit: "ब्रह्मा विष्णुश्च रुद्रश्च इन्द्रश्च सम्प्रसूयन्ते । सर्व्वाणि चेन्द्रियाणि सह भूतैः । कारणं तु ध्येयः । सर्वैश्वर्यसम्पन्नः सर्वेश्वरः शम्भुराकाशमध्ये ध्रुवम् ।",
        hindi: "ब्रह्मा, विष्णु, रुद्र और इन्द्र उसी से उत्पन्न होते हैं; और सभी इन्द्रियां पंचभूतों के साथ। जो कारण है, वही ध्येय है। वह सर्वेश्वर शम्भु (शिव) हृदय आकाश में अचल स्थित है।",
        english: "Brahma, Vishnu, Rudra, Indra are born from It; also all senses with elements. The Cause is the Object of Meditation. Shambhu (Shiva), Lord of All, resides firmly in the Heart-Space.",
        simpleExplanation: "TRINITY IS BORN: Brahma, Vishnu, Rudra are EFFECTS. SHIVA is the CAUSE! Meditate on HIM!",
        simpleExplanationHindi: "त्रिमूर्ति उत्पन्न: ब्रह्मा, विष्णु, रुद्र प्रभाव हैं। शिव कारण है! उनका ध्यान करो!",
        nanoBananaPrompt: "Shambhu (Shiva) in the heart as the Cause, with Brahma, Vishnu, Rudra born from Him.",
        wordMeanings: [
            { sanskrit: "kāraṇa", devanagari: "कारण", hindi: "कारण", english: "cause" },
            { sanskrit: "śambhu", devanagari: "शम्भु", hindi: "शिव", english: "Shiva/Shambhu" },
            { sanskrit: "sarveśvara", devanagari: "सर्वेश्वर", hindi: "सबका ईश्वर", english: "Lord of All" }
        ]
    },
    {
        id: 11, khanda: 3, mantra: "3.4-5",
        theme: "Shiva is Beyond Trinity",
        sanskrit: "ब्रह्मा विष्णुश्च रुद्रश्चेन्द्रश्च ते सम्प्रसूयन्ते । न कारणम् । तस्मात् सर्वेश्वरं शम्भुं यं ध्यात्वा मुच्यते जन्तुः ।",
        hindi: "ब्रह्मा, विष्णु, रुद्र और इन्द्र उत्पन्न होते हैं; वे कारण नहीं हैं। इसलिए, उस सर्वेश्वर शम्भु का ध्यान करके ही जीव मुक्त होता है।",
        english: "Brahma, Vishnu, Rudra, Indra are born; they are not the Cause. Therefore, by meditating on Shambhu, Lord of All, one is liberated.",
        simpleExplanation: "SHIVA ALONE LIBERATES: Trinity is born, not the Cause. Meditate on SHIVA = Freedom!",
        simpleExplanationHindi: "केवल शिव मुक्त करते हैं: त्रिमूर्ति उत्पन्न है, कारण नहीं। शिव का ध्यान = मुक्ति!",
        nanoBananaPrompt: "Shiva as the ultimate Cause beyond the Trinity—meditation on Him brings liberation.",
        wordMeanings: [
            { sanskrit: "mucyate", devanagari: "मुच्यते", hindi: "मुक्त होता है", english: "is liberated" },
            { sanskrit: "jantu", devanagari: "जन्तु", hindi: "जीव", english: "living being" }
        ]
    },
    {
        id: 12, khanda: 3, mantra: "3.6",
        theme: "Nose-Tip Concentration",
        sanskrit: "नासाग्रे दृष्टिं धृत्वा निश्चलः । मनः प्रहृष्यते यत्र तत्र चण्डं लयं गतः ।",
        hindi: "नासिका के अग्र भाग पर दृष्टि को निश्चल करके, जहाँ मन स्थिर हो जाए, वहाँ प्रचंड वृत्ति का लय करे।",
        english: "Fixing gaze steadily on the tip of the nose, where mind becomes steady, let the intense fluctuations dissolve.",
        simpleExplanation: "NOSE-TIP FOCUS: Fix eyes on nose tip. Mind becomes steady. Thoughts dissolve!",
        simpleExplanationHindi: "नासाग्र दृष्टि: नाक की नोक पर आँखें लगाओ। मन स्थिर। विचार विलीन!",
        nanoBananaPrompt: "Yogi focusing on nose-tip, mind becoming steady, thoughts dissolving.",
        wordMeanings: [
            { sanskrit: "nāsāgra", devanagari: "नासाग्र", hindi: "नाक की नोक", english: "tip of nose" },
            { sanskrit: "niścala", devanagari: "निश्चल", hindi: "स्थिर", english: "steady/motionless" }
        ]
    },
    {
        id: 13, khanda: 3, mantra: "3.7",
        theme: "Supreme Goal Attained",
        sanskrit: "द्विजोत्तमः । स गच्छेत् परमाङ्गतिम् । ॐ सत्यमित्युपनिषत् ॥",
        hindi: "ऐसा करने वाला द्विजोत्तम परम गति को प्राप्त करता है। ॐ सत्य है। यही उपनिषद है।",
        english: "The best among twice-born attains the Supreme Goal. OM is Truth. Thus ends the Upanishad.",
        simpleExplanation: "RESULT: Practice this and reach the SUPREME GOAL! OM IS TRUTH!",
        simpleExplanationHindi: "परिणाम: यह अभ्यास करो और परम गति पाओ! ॐ सत्य है!",
        nanoBananaPrompt: "Seeker attaining the Supreme Goal through OM meditation—Truth realized.",
        wordMeanings: [
            { sanskrit: "paramāṃ gati", devanagari: "परमां गति", hindi: "परम गति", english: "supreme goal" },
            { sanskrit: "satya", devanagari: "सत्य", hindi: "सत्य", english: "truth" }
        ]
    }
];

// Metadata
export const ATHARVASHIKHA_METADATA = {
    id: "atharvashikha",
    name: "Atharvashikha",
    nameSanskrit: "अथर्वशिखोपनिषद्",
    meaning: "Crest of the Atharva Veda",
    veda: "Atharva Veda",
    category: "Shaiva",
    shlokaCount: 13,
    khandaCount: 3,
    sequenceNumber: 23,
    khandas: {
        1: { name: "Object of Meditation", mantras: "1.1-1.3", theme: "OM answers all 4 questions" },
        2: { name: "Four Matras", mantras: "2.1-2.8", theme: "A=Brahma, U=Vishnu, M=Rudra, Silence=Shiva" },
        3: { name: "The Result", mantras: "3.1-3.7", theme: "Shiva beyond Trinity, Nose-tip focus" }
    },
    omStructure: {
        first: { letter: "A", god: "Brahma", veda: "Rig", element: "Earth", fire: "Agni" },
        second: { letter: "U", god: "Vishnu", veda: "Yajur", element: "Sky", fire: "Air" },
        third: { letter: "M", god: "Rudra", veda: "Sama", element: "Heaven", fire: "Sun" },
        fourth: { letter: "Half-Matra/Silence", god: "Shiva/Brahman", veda: "Atharva", state: "Turiya" }
    },
    keyTeachings: [
        "OM has 4 parts: A, U, M, and Silence",
        "A = Brahma (Creator), U = Vishnu (Preserver), M = Rudra (Destroyer)",
        "Fourth (Silence) = Shiva = Supreme Brahman = CAUSE",
        "Brahma, Vishnu, Rudra are BORN (effects), not the Cause",
        "Meditate on Shiva (the Cause) for liberation",
        "Above A-U-M is Half-Matra, above that is Nada",
        "Fix gaze on nose-tip for steady meditation"
    ],
    famousVerses: {
        omIsAnswer: { id: 2, khanda: 1, mantra: "1.2" },
        fourthMatra: { id: 7, khanda: 2, mantra: "2.7-8" },
        shivaBeyondTrinity: { id: 11, khanda: 3, mantra: "3.4-5" },
        noseTipFocus: { id: 12, khanda: 3, mantra: "3.6" }
    }
};

export const getAtharvashikhaMantra = (khanda: number, mantra: string): AtharvashikhaDataEntry | undefined => {
    return ATHARVASHIKHA_SHLOKAS.find(s => s.khanda === khanda && s.mantra === mantra);
};
