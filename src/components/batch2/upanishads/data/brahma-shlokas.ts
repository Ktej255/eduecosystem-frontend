// Brahma Upanishad Data (#11 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Sannyasa
// Theme: Four Seats of Consciousness, Inner Sacred Thread
// Total Mantras: 22

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface BrahmaDataEntry {
    id: number;
    mantra: number;
    part: string;
    theme: string;
    sanskrit: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
    wordMeanings?: WordMeaning[];
}

export const BRAHMA_SHLOKAS: BrahmaDataEntry[] = [
    // ==========================================
    // SHANTI MANTRA (INVOCATION)
    // ==========================================
    {
        id: 0,
        mantra: 0,
        part: "Invocation",
        theme: "Peace Invocation",
        sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
        hindi: "ॐ! वह (परमात्मा) हम दोनों (गुरु-शिष्य) की साथ-साथ रक्षा करे। हम दोनों का साथ-साथ पालन करे। हम दोनों साथ मिलकर शक्ति प्राप्त करें। हमारा अध्ययन तेजस्वी हो। हम परस्पर द्वेष न करें। ॐ शांति, शांति, शांति।",
        english: "OM! May He protect us both together. May He nourish us both together. May we generate spiritual energy together. May our study be brilliant. May we not hate each other. OM Peace, Peace, Peace.",
        simpleExplanation: "THE GURU-STUDENT PRAYER: Both teacher and student pray together for mutual protection, nourishment, energy, and harmony.",
        simpleExplanationHindi: "गुरु-शिष्य प्रार्थना: गुरु और शिष्य दोनों साथ मिलकर परस्पर रक्षा, पोषण, शक्ति और सामंजस्य के लिए प्रार्थना करते हैं।",
        nanoBananaPrompt: "A guru and student meditating together, surrounded by protective golden light.",
        wordMeanings: [
            { sanskrit: "saha nau avatu", devanagari: "सह नाववतु", hindi: "हम दोनों की रक्षा करे", english: "may He protect us both" },
            { sanskrit: "mā vidviṣāvahai", devanagari: "मा विद्विषावहै", hindi: "हम द्वेष न करें", english: "may we not hate each other" }
        ]
    },

    // ==========================================
    // PART 1: THE SEATS OF CONSCIOUSNESS
    // ==========================================
    {
        id: 1,
        mantra: 1,
        part: "The Seats of Consciousness",
        theme: "Shaunaka's Question",
        sanskrit: "ॐ शौनको ह वै महाशालोऽङ्गिरसं विधिवदुपसन्नः पप्रच्छ । भगवन् केन मार्गेणान्वितो ब्रह्मवित् परावरं ब्रह्मानुभवति ?",
        hindi: "ॐ! महाशाल (विशाल गृहस्थ) शौनक ने विधिपूर्वक महर्षि अंगिरस के पास जाकर पूछा: 'हे भगवन्! किस मार्ग का अनुसरण करके एक ब्रह्मवेत्ता उस 'परावर' (श्रेष्ठ और कनिष्ठ / व्यक्त और अव्यक्त) ब्रह्म का अनुभव करता है?'",
        english: "OM! Shaunaka, the great householder, approached Sage Angiras in the prescribed manner and asked: 'Venerable Sir, by following which path does a Knower of Brahman experience the Supreme Reality, which is both the Higher and the Lower?'",
        simpleExplanation: "THE GREAT QUESTION: A wealthy householder asks the sage—what path leads to experiencing the Ultimate Reality?",
        simpleExplanationHindi: "महान प्रश्न: एक धनी गृहस्थ ऋषि से पूछता है—परम सत्य के अनुभव का मार्ग क्या है?",
        nanoBananaPrompt: "A wealthy householder approaching a sage in a forest hermitage, asking the ultimate question.",
        wordMeanings: [
            { sanskrit: "mahāśāla", devanagari: "महाशाल", hindi: "बड़े घर वाला", english: "great householder" },
            { sanskrit: "parāvaram brahma", devanagari: "परावरं ब्रह्म", hindi: "उच्च और निम्न ब्रह्म", english: "higher and lower Brahman" }
        ]
    },
    {
        id: 2,
        mantra: 2,
        part: "The Seats of Consciousness",
        theme: "Hidden Like Fire in Wood",
        sanskrit: "तस्मै स होवाच । यथा दारुणि पावकः, तिले तैलं, पयसि घृतं, गन्धबन्धपुष्पेषु, तथा तस्यैषात्मनि ।",
        hindi: "उन्होंने (अंगिरस ने) उससे कहा: 'जैसे लकड़ी में अग्नि, तिल में तेल, दूध में घी, और फूल में सुगंध (छिपी रहती है), वैसे ही यह (परमात्मा) आत्मा (शरीर) में स्थित है।'",
        english: "He replied to him: 'Just as fire is latent in wood, oil in sesame seeds, butter in milk, and fragrance in a flower, so does That (Brahman) reside within the Self (body).'",
        simpleExplanation: "FOUR ANALOGIES: Fire in wood, oil in seeds, butter in milk, fragrance in flower—Brahman is HIDDEN inside you!",
        simpleExplanationHindi: "चार उपमाएं: लकड़ी में अग्नि, तिल में तेल, दूध में घी, फूल में सुगंध—ब्रह्म तुम्हारे अंदर छिपा है!",
        nanoBananaPrompt: "Four images: fire in wood, oil in seeds, butter in milk, fragrance in flower—showing hidden essence.",
        wordMeanings: [
            { sanskrit: "dāruṇi pāvakaḥ", devanagari: "दारुणि पावकः", hindi: "लकड़ी में अग्नि", english: "fire in wood" },
            { sanskrit: "tile tailam", devanagari: "तिले तैलम्", hindi: "तिल में तेल", english: "oil in sesame" }
        ]
    },
    {
        id: 3,
        mantra: 3,
        part: "The Seats of Consciousness",
        theme: "Four Seats in Body",
        sanskrit: "नाभौ हृदये कण्ठे मूर्ध्नि च । तत्र चतुष्पाद्ब्रह्म विभाति ।",
        hindi: "(वह आत्मा शरीर में चार स्थानों पर स्थित है): नाभि में, हृदय में, कंठ में और मस्तक में। वहाँ यह ब्रह्म 'चतुष्पाद' (चार चरणों वाला) होकर प्रकाशित होता है।",
        english: "It resides in the Navel, the Heart, the Throat, and the Head. There, the Brahman shines as Four-Footed (having four aspects).",
        simpleExplanation: "THE FOUR CHAKRAS: Brahman dwells at 4 points in your body—Navel, Heart, Throat, Head—corresponding to 4 states!",
        simpleExplanationHindi: "चार चक्र: ब्रह्म शरीर में 4 स्थानों पर है—नाभि, हृदय, कंठ, मस्तक—4 अवस्थाओं के अनुरूप!",
        nanoBananaPrompt: "A human body with four glowing points: navel, heart, throat, and crown of head.",
        wordMeanings: [
            { sanskrit: "nābhau", devanagari: "नाभौ", hindi: "नाभि में", english: "in the navel" },
            { sanskrit: "mūrdhni", devanagari: "मूर्ध्नि", hindi: "मस्तक में", english: "in the head" },
            { sanskrit: "catuṣpād brahma", devanagari: "चतुष्पाद्ब्रह्म", hindi: "चार पाद वाला ब्रह्म", english: "four-footed Brahman" }
        ]
    },
    {
        id: 4,
        mantra: 4,
        part: "The Seats of Consciousness",
        theme: "Four States = Four Gods",
        sanskrit: "जागरितं ब्रह्मा नाभौ । स्वप्नं विष्णुः कण्ठे । सुषुप्तिं रुद्रो हृदये । तुरीयं परमक्षरं मूर्ध्नि ।",
        hindi: "जाग्रत अवस्था (Waking State) में वह ब्रह्मा रूप में नाभि में स्थित है। स्वप्न अवस्था (Dreaming State) में वह विष्णु रूप में कंठ में स्थित है। सुषुप्ति अवस्था (Deep Sleep) में वह रुद्र रूप में हृदय में स्थित है। तुरीय अवस्था (Transcendental State) में वह परम अक्षर रूप में मस्तक में स्थित है।",
        english: "The Waking state is Brahma, located in the Navel. The Dreaming state is Vishnu, located in the Throat. The Deep Sleep state is Rudra, located in the Heart. The Turiya state is the Supreme Imperishable, located in the Head.",
        simpleExplanation: "TRINITY MAPPED: Waking=Brahma at Navel, Dreaming=Vishnu at Throat, Deep Sleep=Rudra at Heart, Turiya=Absolute at Crown!",
        simpleExplanationHindi: "त्रिमूर्ति मानचित्र: जाग्रत=ब्रह्मा नाभि में, स्वप्न=विष्णु कंठ में, सुषुप्ति=रुद्र हृदय में, तुरीय=परम मस्तक में!",
        nanoBananaPrompt: "Four states of consciousness mapped to body: Brahma at navel, Vishnu at throat, Rudra at heart, Light at crown.",
        wordMeanings: [
            { sanskrit: "jāgaritam", devanagari: "जागरितम्", hindi: "जाग्रत अवस्था", english: "waking state" },
            { sanskrit: "svapnam", devanagari: "स्वप्नम्", hindi: "स्वप्न अवस्था", english: "dream state" },
            { sanskrit: "suṣuptim", devanagari: "सुषुप्तिम्", hindi: "गहरी नींद", english: "deep sleep" },
            { sanskrit: "turīyam", devanagari: "तुरीयम्", hindi: "चौथी अवस्था", english: "the fourth state" }
        ]
    },
    {
        id: 5,
        mantra: 5,
        part: "The Seats of Consciousness",
        theme: "He is All Gods",
        sanskrit: "स आदित्यो विष्णुरीश्वरः पुरुषः प्राणः सजीवो भगवान् । तद्ब्रह्मानन्दमजरममरममलं विरजं विभुं निधनाधारम् ॥",
        hindi: "वह (आत्मा) ही आदित्य है, वही विष्णु है, वही ईश्वर है, वही पुरुष है, वही प्राण है, वही जीव है और वही भगवान है। वह ब्रह्म आनंदस्वरूप, अजर (बुढ़ापे से रहित), अमर, अमल (मल रहित), विरज (पाप रहित), व्यापक और लय का आधार है।",
        english: "He indeed is Aditya (Sun), Vishnu, Ishvara, Purusha, Prana, Jiva, and the Lord. That Brahman is Bliss, Ageless, Immortal, Pure, Stainless, All-pervading, and the Substratum of dissolution.",
        simpleExplanation: "ALL NAMES = ONE GOD: Sun, Vishnu, Shiva, Prana, Soul, Lord—all names for the same Brahman who is blissful and immortal!",
        simpleExplanationHindi: "सब नाम = एक ईश्वर: सूर्य, विष्णु, शिव, प्राण, आत्मा, भगवान—सब एक ही ब्रह्म के नाम जो आनंदमय और अमर है!",
        nanoBananaPrompt: "One light manifesting as Sun, Vishnu, Shiva, Life-force—all emanating from one source.",
        wordMeanings: [
            { sanskrit: "ānanda", devanagari: "आनन्द", hindi: "आनंद", english: "bliss" },
            { sanskrit: "ajaram", devanagari: "अजरम्", hindi: "बुढ़ापा रहित", english: "ageless" },
            { sanskrit: "amaram", devanagari: "अमरम्", hindi: "मृत्यु रहित", english: "immortal" },
            { sanskrit: "vibhum", devanagari: "विभुम्", hindi: "सर्वव्यापी", english: "all-pervading" }
        ]
    },

    // ==========================================
    // PART 2: THE NATURE OF THE SOUL
    // ==========================================
    {
        id: 6,
        mantra: 6,
        part: "The Nature of the Soul",
        theme: "Pot-Space Analogy",
        sanskrit: "घटसंवृतमाकाशं नीयमाने घटे यथा । घटो नीयेत नाकाशं तथा जीवो नभोपमः ॥",
        hindi: "जैसे जब कोई घड़ा (Pot) एक जगह से दूसरी जगह ले जाया जाता है, तो (लगता है कि उसके अंदर का आकाश भी चल रहा है, पर) केवल घड़ा ही चलता है, आकाश नहीं। उसी प्रकार जीव आकाश (नभ) के समान (अचल) है (केवल शरीर चलता है)।",
        english: "Just as when a pot is carried, the pot moves but the space (Akasha) inside does not move; similarly, the Jiva (Soul) is like the Space (immovable and unaffected).",
        simpleExplanation: "THE POT-SPACE ANALOGY: When you move a pot, the space inside doesn't move. Similarly, when your body moves, your Soul doesn't move!",
        simpleExplanationHindi: "घड़ा-आकाश उपमा: जब घड़ा हिलता है, उसके अंदर का आकाश नहीं हिलता। वैसे ही जब शरीर चलता है, आत्मा नहीं चलती!",
        nanoBananaPrompt: "A pot being carried, with the space inside remaining stationary—representing the immovable soul.",
        wordMeanings: [
            { sanskrit: "ghaṭa", devanagari: "घट", hindi: "घड़ा", english: "pot" },
            { sanskrit: "ākāśa", devanagari: "आकाश", hindi: "आकाश/अंतरिक्ष", english: "space" },
            { sanskrit: "jīvaḥ nabhopamaḥ", devanagari: "जीवो नभोपमः", hindi: "जीव आकाश जैसा", english: "soul is like space" }
        ]
    },
    {
        id: 7,
        mantra: 7,
        part: "The Nature of the Soul",
        theme: "Bodies Break, Self Knows",
        sanskrit: "घटवद्विविधाकारा भिद्यमानाः पुनः पुनः । तद्भग्नं न च जानाति स जानाति च नित्यशः ॥",
        hindi: "घड़े के समान नाना प्रकार के आकार (शरीर) बार-बार टूटते (मरते) रहते हैं। वह (घड़ा/शरीर) अपने टूटने को नहीं जानता, किन्तु वह (आत्मा) उसे सदा जानता है।",
        english: "Like pots, various forms (bodies) are broken again and again. The body does not know it is broken, but He (the Self) knows it eternally.",
        simpleExplanation: "BODIES DIE, SOUL KNOWS: Many bodies break like pots. The pot doesn't know it's broken—but the Soul witnesses everything eternally!",
        simpleExplanationHindi: "शरीर मरते हैं, आत्मा जानती है: कई शरीर घड़ों की तरह टूटते हैं। घड़ा नहीं जानता—पर आत्मा सब कुछ शाश्वत रूप से देखती है!",
        nanoBananaPrompt: "Many broken pots on the ground, but the space that was in them remains untouched and aware.",
        wordMeanings: [
            { sanskrit: "bhidyamānāḥ", devanagari: "भिद्यमानाः", hindi: "टूटते हुए", english: "being broken" },
            { sanskrit: "punaḥ punaḥ", devanagari: "पुनः पुनः", hindi: "बार-बार", english: "again and again" },
            { sanskrit: "nityaśaḥ", devanagari: "नित्यशः", hindi: "सदा", english: "eternally" }
        ]
    },
    {
        id: 8,
        mantra: 8,
        part: "The Nature of the Soul",
        theme: "Maya Covers, Truth Reveals",
        sanskrit: "शब्दमायावृतो नैव तमसा गच्छति पुष्करम् । भिन्ने तमसि चैकत्वमेकमेवानुपश्यति ॥",
        hindi: "जब तक वह (जीव) शब्द-माया (शब्दों के भ्रम) और अज्ञान (तमस) से ढका रहता है, तब तक वह उस पुष्कर (हृदय कमल/ब्रह्म) तक नहीं पहुँचता। किन्तु जब अज्ञान (तमस) का नाश हो जाता है, तब वह उस एकत्व (Oneness) को ही देखता है।",
        english: "As long as he is covered by verbal illusion (Maya) and darkness, he does not reach the Lotus (Self). But when the darkness is destroyed, he perceives the Unity alone.",
        simpleExplanation: "MAYA BLINDS, TRUTH FREES: Word-illusion and ignorance block you from the Heart-Lotus. Destroy them, and see ONENESS!",
        simpleExplanationHindi: "माया अंधा करती है, सत्य मुक्त: शब्द-भ्रम और अज्ञान हृदय-कमल से रोकते हैं। इन्हें नष्ट करो, एकता देखो!",
        nanoBananaPrompt: "A lotus hidden in darkness and words; when darkness clears, oneness is revealed.",
        wordMeanings: [
            { sanskrit: "śabda-māyā", devanagari: "शब्दमाया", hindi: "शब्दों का भ्रम", english: "verbal illusion" },
            { sanskrit: "tamas", devanagari: "तमस्", hindi: "अंधकार/अज्ञान", english: "darkness/ignorance" },
            { sanskrit: "ekatva", devanagari: "एकत्व", hindi: "एकता", english: "oneness" }
        ]
    },
    {
        id: 9,
        mantra: 9,
        part: "The Nature of the Soul",
        theme: "Meditate on the Imperishable",
        sanskrit: "शब्दाक्षरं परं ब्रह्म तस्मिन्क्षीणे यदक्षरम् । तद्विद्वानक्षरं ध्यायेद्यदीच्छेच्छान्तिमात्मनः ॥",
        hindi: "शब्द-ब्रह्म (The Word/OM) भी परब्रह्म का ही रूप है। जब वह (शब्द) क्षीण (शांत) हो जाता है, तब जो शेष रहता है, वह अक्षर है। यदि विद्वान अपनी आत्मा की शांति चाहता है, तो उसे उस अक्षर का ध्यान करना चाहिए।",
        english: "The Sound-Brahman (Shabda) is Supreme; but when it fades away, what remains is the Imperishable. The wise man desiring peace of the Self should meditate on that Imperishable.",
        simpleExplanation: "BEYOND OM IS SILENCE: OM is Brahman. But when OM fades into silence—THAT silence is the Imperishable. Meditate there for peace!",
        simpleExplanationHindi: "ॐ से परे मौन: ॐ ब्रह्म है। पर जब ॐ मौन में विलीन हो—वह मौन अक्षर है। वहाँ ध्यान करो शांति के लिए!",
        nanoBananaPrompt: "OM sound fading into pure silence, the silence itself glowing as the Imperishable.",
        wordMeanings: [
            { sanskrit: "śabda-akṣaram", devanagari: "शब्दाक्षरम्", hindi: "शब्द रूपी ब्रह्म", english: "Sound-Brahman" },
            { sanskrit: "kṣīṇe", devanagari: "क्षीणे", hindi: "क्षीण होने पर", english: "when faded" },
            { sanskrit: "śāntim ātmanaḥ", devanagari: "शान्तिमात्मनः", hindi: "आत्मा की शांति", english: "peace of the Self" }
        ]
    },

    // ==========================================
    // PART 3: THE SACRED THREAD (YAJNOPAVITA)
    // ==========================================
    {
        id: 10,
        mantra: 10,
        part: "The Sacred Thread",
        theme: "Two Knowledges",
        sanskrit: "द्वे विद्ये वेदितव्ये तु शब्दब्रह्म परं च यत् । शब्दब्रह्मणि निष्णातः परं ब्रह्माधिगच्छति ॥",
        hindi: "दो विद्याएं जानने योग्य हैं: एक शब्द-ब्रह्म (वेद/ज्ञान) और दूसरा परब्रह्म (अनुभव)। जो शब्द-ब्रह्म में निष्णात (कुशल) हो जाता है, वह परब्रह्म को प्राप्त कर लेता है।",
        english: "Two knowledges are to be known: the Word-Brahman and the Supreme Brahman. He who is well-versed in the Word-Brahman attains the Supreme Brahman.",
        simpleExplanation: "TWO LEVELS: First master Word-Knowledge (scriptures), then attain Experience-Knowledge (Brahman)!",
        simpleExplanationHindi: "दो स्तर: पहले शब्द-ज्ञान (शास्त्र) में निपुण हो, फिर अनुभव-ज्ञान (ब्रह्म) प्राप्त करो!",
        nanoBananaPrompt: "Two stages: studying sacred texts (Word-Brahman) then experiencing pure light (Supreme Brahman).",
        wordMeanings: [
            { sanskrit: "śabda-brahma", devanagari: "शब्दब्रह्म", hindi: "शब्द रूपी ब्रह्म", english: "Word-Brahman" },
            { sanskrit: "paraṃ brahma", devanagari: "परं ब्रह्म", hindi: "परम ब्रह्म", english: "Supreme Brahman" },
            { sanskrit: "niṣṇātaḥ", devanagari: "निष्णातः", hindi: "निपुण", english: "well-versed" }
        ]
    },
    {
        id: 11,
        mantra: 11,
        part: "The Sacred Thread",
        theme: "Discard the Husk",
        sanskrit: "ग्रन्थमभ्यस्य मेधावी ज्ञानविज्ञानतत्परः । पलालमिव धान्यार्थी त्यजेद्ग्रन्थमशेषतः ॥",
        hindi: "मेधावी पुरुष को चाहिए कि वह ग्रंथों का अभ्यास करके ज्ञान और विज्ञान में तत्पर हो जाए। फिर, जैसे अनाज चाहने वाला भूसे (Chaff) को त्याग देता है, वैसे ही वह ग्रंथों को पूरी तरह त्याग दे (और अनुभव में स्थित हो जाए)।",
        english: "The wise man, having studied the scriptures and being intent on knowledge and realization, should discard the books entirely, just as one seeking grain discards the straw.",
        simpleExplanation: "BOOKS ARE HUSK: Study scriptures, extract wisdom—then THROW AWAY the books! Keep the grain, discard the chaff!",
        simpleExplanationHindi: "पुस्तकें भूसा हैं: शास्त्र पढ़ो, ज्ञान निकालो—फिर किताबें छोड़ दो! अनाज रखो, भूसा फेंको!",
        nanoBananaPrompt: "A wise man studying books, then discarding them like chaff to keep only the grain of wisdom.",
        wordMeanings: [
            { sanskrit: "grantha", devanagari: "ग्रन्थ", hindi: "ग्रंथ/पुस्तक", english: "scripture/book" },
            { sanskrit: "palāla", devanagari: "पलाल", hindi: "भूसा", english: "chaff/straw" },
            { sanskrit: "dhānya", devanagari: "धान्य", hindi: "अनाज", english: "grain" }
        ]
    },
    {
        id: 12,
        mantra: 12,
        part: "The Sacred Thread",
        theme: "Discard External Thread",
        sanskrit: "सशिखं वपनं कृत्वा बहिःसूत्रं त्यजेद्बुधः । यदक्षरं परं ब्रह्म तत्सूत्रमिति धारयेत् ॥",
        hindi: "बुद्धिमान व्यक्ति (संन्यासी) को चाहिए कि वह अपनी शिखा (चोटी) सहित सिर मुंडवा ले और बाहरी सूत्र (सूती जनेऊ) को त्याग दे। जो अविनाशी परम ब्रह्म है, उसी को सूत्र (जनेऊ) मानकर धारण करे।",
        english: "The wise man, having shaved his head along with the tuft, should discard the external thread. He should wear the Imperishable Supreme Brahman as the Thread.",
        simpleExplanation: "THE REAL THREAD: Shave the tuft, throw away the cotton thread—wear BRAHMAN ITSELF as your sacred thread!",
        simpleExplanationHindi: "असली जनेऊ: चोटी मुंडवाओ, सूती धागा फेंको—स्वयं ब्रह्म को अपना जनेऊ बनाओ!",
        nanoBananaPrompt: "A monk shaving his tuft, discarding cotton thread, wearing golden light as his sacred thread.",
        wordMeanings: [
            { sanskrit: "śikhā", devanagari: "शिखा", hindi: "चोटी", english: "tuft" },
            { sanskrit: "bahiḥ-sūtram", devanagari: "बहिःसूत्रम्", hindi: "बाहरी धागा", english: "external thread" },
            { sanskrit: "akṣaram paraṃ brahma", devanagari: "अक्षरं परं ब्रह्म", hindi: "अविनाशी परम ब्रह्म", english: "Imperishable Supreme Brahman" }
        ]
    },
    {
        id: 13,
        mantra: 13,
        part: "The Sacred Thread",
        theme: "Sutra Indicates Truth",
        sanskrit: "सूचनात्सूत्रमित्याहुः सूत्रं नाम परं पदम् । तत्सूत्रं विदितं येन स विप्रो वेदपारगः ॥",
        hindi: "'सूत्र' इसे इसलिए कहते हैं क्योंकि यह (तत्व की) सूचना (Indicating) देता है। परम पद ही असली सूत्र है। जिसने इस (आंतरिक) सूत्र को जान लिया, वही सच्चा विप्र (ब्राह्मण) और वेदों का ज्ञाता है।",
        english: "It is called 'Sutra' because it indicates (Suchana) the Truth. The Supreme State is the real Thread. He who knows this Thread is the true Brahmin and knower of Vedas.",
        simpleExplanation: "ETYMOLOGY: 'Sutra' = that which INDICATES. The real thread points to Truth. Know this, and you're a true Brahmin!",
        simpleExplanationHindi: "व्युत्पत्ति: 'सूत्र' = जो सूचित करे। असली धागा सत्य की ओर इशारा करता है। इसे जानो, सच्चे ब्राह्मण बनो!",
        nanoBananaPrompt: "A thread pointing/indicating toward a supreme light—the real meaning of 'Sutra'.",
        wordMeanings: [
            { sanskrit: "sūcanāt", devanagari: "सूचनात्", hindi: "इंगित करने से", english: "because of indicating" },
            { sanskrit: "paraṃ padam", devanagari: "परं पदम्", hindi: "परम पद", english: "Supreme State" },
            { sanskrit: "vipraḥ", devanagari: "विप्रः", hindi: "ब्राह्मण", english: "Brahmin" }
        ]
    },
    {
        id: 14,
        mantra: 14,
        part: "The Sacred Thread",
        theme: "Universe Strung on Brahman",
        sanskrit: "येन सर्वमिदं प्रोतं सूत्रे मणिगणा इव । तत्सूत्रं धारयेद्योगी योगवित्तत्त्वदर्शिवान् ॥",
        hindi: "जैसे धागे में मणियों का समूह (Beads) पिरोया होता है, वैसे ही जिस (ब्रह्म) में यह सारा जगत पिरोया हुआ है—उसी सूत्र को उस योगी को धारण करना चाहिए जो योग को जानता है और तत्वदर्शी है।",
        english: "Just as clusters of gems are strung on a thread, so is this entire universe strung on That. The Yogi who knows Yoga and perceives the Truth should wear That Thread.",
        simpleExplanation: "BEAD NECKLACE: Like gems strung on a thread, the WHOLE UNIVERSE is strung on Brahman! Wear THAT as your thread!",
        simpleExplanationHindi: "मालाई हार: जैसे मणियों का हार धागे में पिरोया है, वैसे ही पूरा ब्रह्मांड ब्रह्म में पिरोया है! उसे धारण करो!",
        nanoBananaPrompt: "Galaxies and worlds strung like gems on an invisible thread of Brahman.",
        wordMeanings: [
            { sanskrit: "protam", devanagari: "प्रोतम्", hindi: "पिरोया हुआ", english: "strung" },
            { sanskrit: "maṇi-gaṇāḥ", devanagari: "मणिगणाः", hindi: "मणियों का समूह", english: "clusters of gems" },
            { sanskrit: "tattva-darśivān", devanagari: "तत्त्वदर्शिवान्", hindi: "तत्व को देखने वाला", english: "seer of Truth" }
        ]
    },
    {
        id: 15,
        mantra: 15,
        part: "The Sacred Thread",
        theme: "Brahman-Consciousness Thread",
        sanskrit: "बहिःसूत्रं त्यजेद्विद्वान् योगमुत्तममास्थितः । ब्रह्मभावमयं सूत्रं धारयेद्यः स चेतनः ॥",
        hindi: "उत्तम योग में स्थित विद्वान बाहरी धागे को त्याग दे। जो व्यक्ति 'ब्रह्म-भाव' रूपी सूत्र को धारण करता है, वही चेतन (जागृत) है।",
        english: "The wise man established in the highest Yoga should cast away the external thread. He who wears the Thread of 'Brahman-Consciousness' is truly conscious.",
        simpleExplanation: "THE CONSCIOUS ONE: Leave the cotton thread; wear Brahman-Consciousness. Only THAT person is truly awake!",
        simpleExplanationHindi: "चेतन व्यक्ति: सूती धागा छोड़ो; ब्रह्म-चेतना धारण करो। केवल वही व्यक्ति सचमुच जागा हुआ है!",
        nanoBananaPrompt: "A yogi casting away external thread, wearing pure consciousness as his sacred thread.",
        wordMeanings: [
            { sanskrit: "brahma-bhāva-maya", devanagari: "ब्रह्मभावमय", hindi: "ब्रह्म-भाव से युक्त", english: "consisting of Brahman-consciousness" },
            { sanskrit: "cetanaḥ", devanagari: "चेतनः", hindi: "चेतन/जागृत", english: "conscious/awake" }
        ]
    },
    {
        id: 16,
        mantra: 16,
        part: "The Sacred Thread",
        theme: "Always Pure",
        sanskrit: "धारणात्तस्य सूत्रस्य नोच्छिष्टो नाशुचिर्भवेत् । सूत्रमन्तर्गतं येषां ज्ञानयज्ञोपवीतिनाम् ॥",
        hindi: "उस (ब्रह्म रूपी) सूत्र को धारण करने से मनुष्य न तो कभी उच्छिष्ट (जूठा/अशुद्ध) होता है और न ही अपवित्र होता है। जिनका सूत्र उनके भीतर है, वे ही सच्चे 'ज्ञान-यज्ञोपवीत' वाले हैं।",
        english: "By holding that Thread, one becomes neither unclean nor impure. Those whose Thread is internal are the true wearers of the Sacrificial Thread of Knowledge.",
        simpleExplanation: "ALWAYS PURE: With the inner Brahman-thread, you're NEVER impure! Those with internal thread = True Knowledge-Thread wearers!",
        simpleExplanationHindi: "सदा शुद्ध: आंतरिक ब्रह्म-सूत्र से कभी अपवित्र नहीं! जिनका सूत्र भीतर है = सच्चे ज्ञान-जनेऊ वाले!",
        nanoBananaPrompt: "A person with internal golden thread always pure, while external threads can become impure.",
        wordMeanings: [
            { sanskrit: "ucchiṣṭaḥ", devanagari: "उच्छिष्टः", hindi: "जूठा/अशुद्ध", english: "unclean/polluted" },
            { sanskrit: "antargata", devanagari: "अन्तर्गत", hindi: "भीतर स्थित", english: "internal" },
            { sanskrit: "jñāna-yajñopavīta", devanagari: "ज्ञानयज्ञोपवीत", hindi: "ज्ञान का यज्ञोपवीत", english: "sacrificial thread of knowledge" }
        ]
    },
    {
        id: 17,
        mantra: 17,
        part: "The Sacred Thread",
        theme: "True Knowers of Thread",
        sanskrit: "ते वै सूत्रविदो लोके ते च यज्ञोपवीतिनः । ज्ञानशिखा ज्ञाननिष्ठा ज्ञानयज्ञोपवीतिनः ॥",
        hindi: "वे ही संसार में सूत्र को जानने वाले हैं और वे ही (सच्चे) यज्ञोपवीत वाले हैं। जिनकी शिखा (चोटी) ज्ञान है, जिनकी निष्ठा ज्ञान है, और जिनका यज्ञोपवीत ज्ञान है।",
        english: "They indeed know the Sutra in this world, and they possess the true Sacred Thread. Their Tuft is Knowledge, their Dedication is Knowledge, and their Sacred Thread is Knowledge.",
        simpleExplanation: "ALL IS KNOWLEDGE: True thread-knowers have Knowledge-Tuft, Knowledge-Faith, Knowledge-Thread. Everything is KNOWLEDGE!",
        simpleExplanationHindi: "सब ज्ञान है: सच्चे सूत्र-ज्ञानियों की ज्ञान-शिखा, ज्ञान-निष्ठा, ज्ञान-जनेऊ। सब कुछ ज्ञान है!",
        nanoBananaPrompt: "A renunciate whose tuft, faith, and thread are all made of glowing knowledge-light.",
        wordMeanings: [
            { sanskrit: "jñāna-śikhā", devanagari: "ज्ञानशिखा", hindi: "ज्ञान की चोटी", english: "tuft of knowledge" },
            { sanskrit: "jñāna-niṣṭhā", devanagari: "ज्ञाननिष्ठा", hindi: "ज्ञान में निष्ठा", english: "dedication to knowledge" }
        ]
    },
    {
        id: 18,
        mantra: 18,
        part: "The Sacred Thread",
        theme: "Knowledge-Flame as Tuft",
        sanskrit: "ज्ञानमेव परं तेषां पवित्रं ज्ञानमुच्यते । अग्नेरिव शिखा नान्या यस्य ज्ञानमयी शिखा । स शिखीत्युच्यते विद्वान् नेतरे केशधारिणः ॥",
        hindi: "उनके लिए ज्ञान ही परम पवित्र है। जैसे अग्नि की शिखा (लपट) अग्नि से अलग नहीं होती, वैसे ही जिसकी शिखा ज्ञानमयी है, वही विद्वान 'शिखी' (चोटी वाला) कहलाता है। दूसरे लोग (जिन्होंने केवल बाल रखे हैं) वे तो केवल 'केश धारी' हैं।",
        english: "For them, Knowledge alone is supreme purity. Just as the flame is not different from the fire, he whose Tuft consists of Knowledge is called a 'Shikhi' (wearer of the Tuft). The others are merely growers of hair.",
        simpleExplanation: "FLAME IS TUFT: A flame IS fire. Similarly, Knowledge IS your tuft! Others just grow hair—you ARE the flame!",
        simpleExplanationHindi: "लौ ही चोटी: लौ आग ही है। वैसे ही, ज्ञान ही तुम्हारी चोटी है! दूसरे बस बाल उगाते हैं—तुम लौ हो!",
        nanoBananaPrompt: "A sage with a flame of knowledge rising from his crown instead of a physical tuft of hair.",
        wordMeanings: [
            { sanskrit: "agneḥ śikhā", devanagari: "अग्नेः शिखा", hindi: "अग्नि की लौ", english: "flame of fire" },
            { sanskrit: "śikhī", devanagari: "शिखी", hindi: "चोटी वाला", english: "wearer of tuft" },
            { sanskrit: "keśa-dhāriṇaḥ", devanagari: "केशधारिणः", hindi: "बाल रखने वाले", english: "growers of hair" }
        ]
    },
    {
        id: 19,
        mantra: 19,
        part: "The Sacred Thread",
        theme: "Householders Need External",
        sanskrit: "कर्मण्यधिकृता ये तु वैदिके ब्राह्मणादयः । तैर्धार्यं वै बहिःसूत्रं क्रियाङ्गत्वेन तत्स्मृतम् ॥",
        hindi: "परन्तु जो ब्राह्मण आदि (गृहस्थ) वैदिक कर्मकांडों (Rituals) में अधिकार रखते हैं, उन्हें बाहरी सूत्र (सूती जनेऊ) धारण करना चाहिए, क्योंकि वह उनकी क्रियाओं (Rituals) का अंग माना गया है।",
        english: "However, those Brahmins and others who are authorized for Vedic rituals (Householders) must wear the external thread, as it is prescribed as a part of their rites.",
        simpleExplanation: "FOR KARMA-YOGA: Householders doing rituals SHOULD wear the external thread—it's part of their practice. Renunciates don't need it!",
        simpleExplanationHindi: "कर्म-योग के लिए: कर्मकांड करने वाले गृहस्थ बाहरी धागा पहनें—यह उनके अभ्यास का हिस्सा है। संन्यासियों को नहीं चाहिए!",
        nanoBananaPrompt: "A householder performing rituals with external sacred thread; a renunciate with inner light.",
        wordMeanings: [
            { sanskrit: "karmaṇi adhikṛtāḥ", devanagari: "कर्मण्यधिकृताः", hindi: "कर्म में अधिकारी", english: "authorized for rituals" },
            { sanskrit: "kriyāṅgatva", devanagari: "क्रियाङ्गत्व", hindi: "क्रिया का अंग होना", english: "being part of rites" }
        ]
    },
    {
        id: 20,
        mantra: 20,
        part: "The Sacred Thread",
        theme: "Complete Brahminhood",
        sanskrit: "शिखा ज्ञानमयी यस्य उपवीतं च तन्मयम् । ब्राह्मण्यं सकलं तस्य इति ब्रह्मविदो विदुः ॥",
        hindi: "जिसकी शिखा ज्ञानमयी है और जिसका उपवीत (जनेऊ) भी तन्मय (ज्ञानस्वरूप) है—उसी का ब्राह्मणत्व (Brahminhood) सकल (पूर्ण) है। ऐसा ब्रह्मवेत्ता जानते हैं।",
        english: "He whose Tuft is Knowledge and whose Sacred Thread is Knowledge—his Brahminhood is complete. Thus declare the Knowers of Brahman.",
        simpleExplanation: "COMPLETE BRAHMIN: Knowledge-Tuft + Knowledge-Thread = Complete Brahminhood! This is what real Brahmins know!",
        simpleExplanationHindi: "पूर्ण ब्राह्मण: ज्ञान-चोटी + ज्ञान-जनेऊ = पूर्ण ब्राह्मणत्व! यह असली ब्राह्मण जानते हैं!",
        nanoBananaPrompt: "A complete Brahmin glowing with knowledge as tuft and thread, radiating wholeness.",
        wordMeanings: [
            { sanskrit: "brāhmaṇya", devanagari: "ब्राह्मण्य", hindi: "ब्राह्मणत्व", english: "Brahminhood" },
            { sanskrit: "sakalam", devanagari: "सकलम्", hindi: "पूर्ण/संपूर्ण", english: "complete" }
        ]
    },

    // ==========================================
    // PART 4: THE ONE GOD
    // ==========================================
    {
        id: 21,
        mantra: 21,
        part: "The One God",
        theme: "Supreme Thread = Sacrifice",
        sanskrit: "इदं यज्ञोपवीतं तु परमं यत्परायणम् । स विद्वान् यज्ञोपवीती स्यात् स यज्ञस्तं विदुर्बुधाः ॥",
        hindi: "यह (आंतरिक) यज्ञोपवीत ही परम है और यही सर्वोच्च आश्रय है। जो विद्वान इस यज्ञोपवीत वाला है, वही सच्चा यज्ञ (स्वरूप) है, ऐसा बुद्धिमान जानते हैं।",
        english: "This (Internal) Sacred Thread is Supreme and is the ultimate resort. The wise man who wears this Thread is himself the Sacrifice (Yajna); thus the wise know him.",
        simpleExplanation: "BECOME THE SACRIFICE: The supreme thread IS the ultimate refuge. Wear it, and YOU become the Yajna itself!",
        simpleExplanationHindi: "यज्ञ बन जाओ: परम सूत्र ही परम आश्रय है। इसे धारण करो, और तुम स्वयं यज्ञ बन जाओ!",
        nanoBananaPrompt: "A sage who has become the sacrifice itself, his very being the offering.",
        wordMeanings: [
            { sanskrit: "paramam", devanagari: "परमम्", hindi: "परम/सर्वोच्च", english: "supreme" },
            { sanskrit: "parāyaṇam", devanagari: "परायणम्", hindi: "परम आश्रय", english: "ultimate resort" },
            { sanskrit: "sa yajñaḥ", devanagari: "स यज्ञः", hindi: "वही यज्ञ है", english: "he is the sacrifice" }
        ]
    },
    {
        id: 22,
        mantra: 22,
        part: "The One God",
        theme: "Eko Devah (One God)",
        sanskrit: "एको देवः सर्वभूतेषु गूढः सर्वव्यापी सर्वभूतान्तरात्मा । कर्माध्यक्षः सर्वभूताधिवासः साक्षी चेता केवलो निर्गुणश्च ॥",
        hindi: "एक ही देव सभी प्राणियों में छिपा हुआ है। वह सर्वव्यापी है और सबकी अंतरात्मा है। वह कर्मों का अध्यक्ष, सबमें निवास करने वाला, साक्षी, चेतन, केवल और निर्गुण है।",
        english: "One God is hidden in all beings. He is all-pervading, the Inner Self of all creatures. He is the presiding ordainer of all actions, the dweller in all beings, the Witness, the Conscious One, the Absolute, and free from all attributes.",
        simpleExplanation: "THE GRAND FINALE: ONE God hidden in ALL. All-pervading. Witness of all karma. Conscious. Absolute. Beyond qualities. THAT is the truth!",
        simpleExplanationHindi: "भव्य समापन: एक ईश्वर सबमें छिपा। सर्वव्यापी। सब कर्मों का साक्षी। चेतन। केवल। गुणातीत। यही सत्य है!",
        nanoBananaPrompt: "One light hidden in all beings—humans, animals, plants—as the universal witness and inner self.",
        wordMeanings: [
            { sanskrit: "eko devaḥ", devanagari: "एको देवः", hindi: "एक ही देव", english: "One God" },
            { sanskrit: "gūḍhaḥ", devanagari: "गूढः", hindi: "छिपा हुआ", english: "hidden" },
            { sanskrit: "sarvavyāpī", devanagari: "सर्वव्यापी", hindi: "सर्वव्यापी", english: "all-pervading" },
            { sanskrit: "sākṣī", devanagari: "साक्षी", hindi: "साक्षी", english: "witness" },
            { sanskrit: "cetā", devanagari: "चेता", hindi: "चेतन", english: "conscious" },
            { sanskrit: "kevalaḥ", devanagari: "केवलः", hindi: "केवल/अकेला", english: "absolute" },
            { sanskrit: "nirguṇaḥ", devanagari: "निर्गुणः", hindi: "गुण रहित", english: "without attributes" }
        ]
    }
];

// Metadata
export const BRAHMA_METADATA = {
    id: "brahma",
    name: "Brahma",
    nameSanskrit: "ब्रह्मोपनिषद्",
    veda: "Krishna Yajur Veda",
    category: "Sannyasa",
    shlokaCount: 22,  // 22 complete mantras
    sequenceNumber: 11,
    meaning: "The Upanishad of Brahman",
    theme: "Four Seats of Consciousness & The Inner Sacred Thread",
    parts: {
        1: { name: "Invocation", mantras: "0" },
        2: { name: "The Seats of Consciousness", mantras: "1-5" },
        3: { name: "The Nature of the Soul", mantras: "6-9" },
        4: { name: "The Sacred Thread", mantras: "10-20" },
        5: { name: "The One God", mantras: "21-22" }
    },
    keyTeachings: [
        "Four seats of soul: Navel (Waking/Brahma), Throat (Dream/Vishnu), Heart (Deep Sleep/Rudra), Head (Turiya/Absolute)",
        "Soul is like space in a pot—immovable while body moves",
        "Two knowledges: Word-Brahman (scriptures) and Supreme Brahman (experience)",
        "Discard external thread, wear Brahman-consciousness as the true thread",
        "One God hidden in all beings—the Witness, Conscious, Absolute"
    ],
    famousVerses: {
        fourSeats: { id: 4, mantra: 4 },
        potSpace: { id: 6, mantra: 6 },
        discardBooks: { id: 11, mantra: 11 },
        ekoDevah: { id: 22, mantra: 22 }
    }
};

// Helper function
export const getBrahmaMantra = (mantraNum: number): BrahmaDataEntry | undefined => {
    return BRAHMA_SHLOKAS.find(s => s.mantra === mantraNum);
};
