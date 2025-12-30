// Mantrika Upanishad Data (#32 in Muktika Canon)
// Source: Shukla Yajur Veda | Category: Samanya
// Theme: Cosmic Swan (Hamsa), Samkhya Tattvas, Maya as Mother, So'ham Liberation
// Total: 21 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface MantrikaDataEntry {
    id: number;
    mantra: number;
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
export const MANTRIKA_SHANTI_MANTRA = {
    sanskrit: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह पूर्ण है। यह भी पूर्ण है। पूर्ण से पूर्ण उत्पन्न होता है। पूर्ण से पूर्ण निकालने पर भी पूर्ण ही शेष।",
    english: "OM! That is Whole. This is Whole. From Whole emerges Whole. Taking Whole from Whole, Whole remains. OM Peace."
};

export const MANTRIKA_SHLOKAS: MantrikaDataEntry[] = [
    // PART 1: THE COSMIC SWAN
    {
        id: 1, mantra: 1,
        theme: "Eight-Footed Swan",
        sanskrit: "अष्टपादं शुचिर्हंसं त्रिसूत्रं मणिमव्ययम् । द्विवर्त्यं कूटस्थरूपं तेजसां सरसः प्रभुम् ॥",
        hindi: "वह हंस आठ पैरों वाला, पवित्र, तीन सूत्रों (गुणों) वाला, मणि स्वरूप और अविनाशी है। वह दो प्रकार का, कूटस्थ रूप वाला और तेज का प्रभु है।",
        english: "That Swan has Eight Feet (Prakriti), Pure, Three Threads (Gunas), jewel-like, Imperishable. Dual-mode, Immutable, Lord of all Lights.",
        simpleExplanation: "COSMIC SWAN: 8 feet (8 prakriti), 3 threads (gunas), jewel-like, IMPERISHABLE Lord of Light!",
        simpleExplanationHindi: "ब्रह्मांडीय हंस: 8 पैर (8 प्रकृति), 3 सूत्र (गुण), मणि जैसा, अविनाशी प्रकाश का प्रभु!",
        nanoBananaPrompt: "Cosmic Swan with eight feet, three threads, shining like an imperishable jewel.",
        wordMeanings: [
            { sanskrit: "haṃsa", devanagari: "हंस", hindi: "हंस/आत्मा", english: "swan/self" },
            { sanskrit: "aṣṭapāda", devanagari: "अष्टपाद", hindi: "आठ पैर", english: "eight-footed" },
            { sanskrit: "trisūtra", devanagari: "त्रिसूत्र", hindi: "तीन धागे", english: "three threads (gunas)" }
        ]
    },
    {
        id: 2, mantra: 2,
        theme: "Sees Without Eyes",
        sanskrit: "सर्वं पश्यति सोऽन्धेन सर्वं पश्यति चक्षुषा । सर्वं स्पृशति सोऽस्पृष्टा सर्वं घ्राति स गन्धवान् ॥",
        hindi: "वह बिना आँखों के सब देखता है; दिव्य चक्षु से सब देखता है। बिना छुए सब छूता है; बिना नाक के सब सूंघता है।",
        english: "He sees all without eyes; sees all with divine eyes. Touches all without touching; smells all without nose.",
        simpleExplanation: "DIVINE SENSES: Sees without eyes! Touches without hands! Beyond physical organs!",
        simpleExplanationHindi: "दिव्य इन्द्रियां: बिना आँख देखता है! बिना हाथ छूता है! शारीरिक अंगों से परे!",
        nanoBananaPrompt: "Brahman seeing, touching, smelling all—without physical organs.",
        wordMeanings: [
            { sanskrit: "andha", devanagari: "अन्ध", hindi: "अंधा", english: "blind/without eyes" },
            { sanskrit: "aspṛṣṭā", devanagari: "अस्पृष्टा", hindi: "बिना छुए", english: "without touching" }
        ]
    },
    {
        id: 3, mantra: 3,
        theme: "One Brahman Alone",
        sanskrit: "एको धाता च विधाता च यद्गन्धर्वश्च खेचरः । ब्रह्मैव केवलं भूत्वा एक एव व्यवस्थितः ॥",
        hindi: "वह अकेला धाता और विधाता है। वह गंधर्व और खेचर है। वह केवल ब्रह्म होकर अकेला ही स्थित है।",
        english: "He is the One Supporter and Ordainer. He is Gandharva and Sky-walker. Being Brahman alone, He remains as the One.",
        simpleExplanation: "ONE BRAHMAN: Supporter, Ordainer, Sky-walker—ALL is ONE Brahman alone!",
        simpleExplanationHindi: "एक ब्रह्म: धारक, विधाता, आकाश-गामी—सब एक ब्रह्म ही है!",
        nanoBananaPrompt: "One Brahman as supporter, ordainer, and sky-walker—alone and established.",
        wordMeanings: [
            { sanskrit: "dhātā", devanagari: "धाता", hindi: "धारण करने वाला", english: "supporter" },
            { sanskrit: "vidhātā", devanagari: "विधाता", hindi: "विधाता", english: "ordainer" }
        ]
    },
    {
        id: 4, mantra: 4,
        theme: "Maheshwari Shakti",
        sanskrit: "विकर्वत्येव सा भीमा घोरा च शतमायिनी । शक्तिर्माहेश्वरी ज्ञेया सर्वभूतगुहाशया ॥",
        hindi: "वह भीमा, घोरा और शत-मायिनी शक्ति निरंतर विकार उत्पन्न करती है। उसे सभी प्राणियों के हृदय में स्थित माहेश्वरी शक्ति जानो।",
        english: "That Power is terrible, fearful, with hundred illusions. Know it as Maheshwari Shakti, dwelling in all hearts.",
        simpleExplanation: "MAYA = 100 ILLUSIONS! Terrible, fearful Maheshwari Shakti lives in all hearts!",
        simpleExplanationHindi: "माया = 100 भ्रम! भयानक महेश्वरी शक्ति सभी हृदयों में रहती है!",
        nanoBananaPrompt: "Maheshwari Shakti with hundred illusions dwelling in all hearts.",
        wordMeanings: [
            { sanskrit: "māheśvarī", devanagari: "माहेश्वरी", hindi: "महेश्वर की शक्ति", english: "power of Maheshvara" },
            { sanskrit: "śatamāyinī", devanagari: "शतमायिनी", hindi: "सौ मायाओं वाली", english: "with hundred illusions" }
        ]
    },

    // PART 2: SAMKHYA CATEGORIES
    {
        id: 5, mantra: 5,
        theme: "Unborn Male and Female",
        sanskrit: "अजामेकां लोहितशुक्लकृष्णां बह्वीः प्रजाः सृजमानां सरूपाः । अजो ह्येको जुषमाणोऽनुशेते जहात्येनां भुक्तभोगामजोऽन्यः ॥",
        hindi: "एक अजन्मी प्रकृति लाल, सफेद और काले रंगों वाली है, समान प्रजाएं उत्पन्न करती है। एक अज्ञानी आत्मा उससे प्रेम करता है; दूसरा ज्ञानी उसे भोगकर छोड़ देता है।",
        english: "One Unborn Female (Nature), red-white-black, creates many like herself. One Unborn loves her; another Unborn abandons her after enjoying.",
        simpleExplanation: "TWO SOULS: Ignorant soul clings to Prakriti; Wise soul enjoys then LEAVES her!",
        simpleExplanationHindi: "दो आत्माएं: अज्ञानी प्रकृति से चिपकता है; ज्ञानी भोगकर छोड़ देता है!",
        nanoBananaPrompt: "Two unborn males with one unborn female—one clinging, one abandoning.",
        wordMeanings: [
            { sanskrit: "ajā", devanagari: "अजा", hindi: "अजन्मी प्रकृति", english: "unborn female/nature" },
            { sanskrit: "lohita-śukla-kṛṣṇā", devanagari: "लोहितशुक्लकृष्णा", hindi: "लाल-सफेद-काली", english: "red-white-black (gunas)" }
        ]
    },
    {
        id: 6, mantra: 6,
        theme: "25 Tattvas",
        sanskrit: "पञ्चविंशतितत्त्वानि पञ्चविंशतिपूरुषः । नैतत् स्मृतं विधात्रा वा न कृतं न निवेदितम् ॥",
        hindi: "25 तत्व हैं और 25वां पुरुष है। यह विधाता द्वारा न याद किया गया, न बनाया गया, न बताया गया (यह सनातन है)।",
        english: "There are 25 Principles; the 25th is Purusha. This was neither remembered, created, nor declared by Creator—it is primordial.",
        simpleExplanation: "SAMKHYA: 24 tattvas + 1 Purusha = 25. Not created—ETERNALLY EXISTS!",
        simpleExplanationHindi: "सांख्य: 24 तत्व + 1 पुरुष = 25। बनाया नहीं—सनातन है!",
        nanoBananaPrompt: "25 Samkhya categories with Purusha as the 25th—eternally existing.",
        wordMeanings: [
            { sanskrit: "pañcaviṃśati", devanagari: "पञ्चविंशति", hindi: "पच्चीस", english: "twenty-five" },
            { sanskrit: "tattva", devanagari: "तत्त्व", hindi: "तत्व/सिद्धांत", english: "principle/category" }
        ]
    },
    {
        id: 7, mantra: 8,
        theme: "Witness, Not Enjoyer",
        sanskrit: "साक्ष्येव केवलं द्रष्टा न गुणानां न संश्रयः । आत्मनः केवलं ज्ञात्वा न मन्ता न च मन्त्रितः ॥",
        hindi: "वह केवल साक्षी और द्रष्टा है; गुणों का आश्रय नहीं लेता। आत्मा को शुद्ध जानकर, न सोचने वाला रहता है न विचार।",
        english: "He is Witness alone, Seer; not shelter of Gunas. Knowing Self as Absolute, neither thinker nor thought remains.",
        simpleExplanation: "PURE WITNESS: Just sees, doesn't participate! Know this = no thinker, no thoughts!",
        simpleExplanationHindi: "शुद्ध साक्षी: बस देखता है, भाग नहीं लेता! यह जानो = कोई सोचने वाला नहीं, कोई विचार नहीं!",
        nanoBananaPrompt: "Brahman as pure witness—not participating, beyond thinker and thought.",
        wordMeanings: [
            { sanskrit: "sākṣī", devanagari: "साक्षी", hindi: "साक्षी", english: "witness" },
            { sanskrit: "draṣṭā", devanagari: "द्रष्टा", hindi: "देखने वाला", english: "seer" }
        ]
    },

    // PART 3: COSMIC MOTHER
    {
        id: 8, mantra: 9,
        theme: "Maya as Mother",
        sanskrit: "अनन्तस्तनपर्यङ्का विश्वरूपपयोधरा । निवेशयति भूतानि स्वधाम्नि मुदिताऽसिता ॥",
        hindi: "वह अनंत स्तनों वाली है; विश्व के सभी रूप जिसके पयोधर हैं। वह असिता (माया) प्रसन्न होकर सभी प्राणियों को अपने धाम में सुलाती है।",
        english: "She has infinite teats; the universe's forms are her milk. That Dark One (Maya), joyfully puts all beings to sleep in her abode.",
        simpleExplanation: "MAYA = COSMIC MOTHER: Infinite breasts, feeds the universe, puts all to SLEEP!",
        simpleExplanationHindi: "माया = ब्रह्मांडीय माता: अनंत स्तन, ब्रह्मांड को पोषण देती है, सबको सुलाती है!",
        nanoBananaPrompt: "Maya as cosmic mother with infinite teats, putting souls to sleep.",
        wordMeanings: [
            { sanskrit: "asitā", devanagari: "असिता", hindi: "काली/माया", english: "the dark one/maya" },
            { sanskrit: "niveśayati", devanagari: "निवेशयति", hindi: "सुलाती है", english: "causes to rest/sleep" }
        ]
    },
    {
        id: 9, mantra: 10,
        theme: "Wise Conquer Death",
        sanskrit: "यत्र विज्ञानात्मानो बालका इव लीलया । निर्विशन्ति सुखं तस्यां मृत्युं जित्वाऽमृतं श्रिताः ॥",
        hindi: "जहाँ आत्माएं बच्चों की तरह लीला करती हुई माया में प्रवेश करती हैं। परन्तु ज्ञानी मृत्यु को जीतकर अमृत का आश्रय लेते हैं।",
        english: "Where souls like children sportingly enter Maya. But the wise, having conquered death, take refuge in the Immortal.",
        simpleExplanation: "CHILDREN IN MAYA: Most play like kids in Maya. Wise ones CONQUER DEATH!",
        simpleExplanationHindi: "माया में बच्चे: ज्यादातर माया में बच्चों जैसे खेलते हैं। ज्ञानी मृत्यु जीतते हैं!",
        nanoBananaPrompt: "Souls playing like children in Maya, while wise ones conquer death.",
        wordMeanings: [
            { sanskrit: "mṛtyuṃ jitvā", devanagari: "मृत्युं जित्वा", hindi: "मृत्यु को जीतकर", english: "having conquered death" },
            { sanskrit: "amṛta", devanagari: "अमृत", hindi: "अमृत/अमरता", english: "immortal" }
        ]
    },

    // PART 4: INTERNAL SACRIFICE
    {
        id: 10, mantra: 12,
        theme: "Prana is Yajna",
        sanskrit: "प्राणो यज्ञः पशुर्देहस्तन्मध्ये तु हुताशनः । पूर्वं यज्ञं प्रवर्तयन् ब्रह्मयज्ञ इति स्मृतम् ॥",
        hindi: "प्राण ही यज्ञ है; देह ही पशु (बलि) है; मध्य में अग्नि है। इस प्रकार प्राचीन यज्ञ करना ब्रह्म-यज्ञ है।",
        english: "Prana is Sacrifice; Body is Animal; middle is Fire. Performing this ancient sacrifice internally = Brahma-Yajna.",
        simpleExplanation: "INTERNAL YAJNA: Your breath = sacrifice, body = offering, belly = fire! Real Brahma-Yajna!",
        simpleExplanationHindi: "आंतरिक यज्ञ: तुम्हारी श्वास = बलि, शरीर = आहुति, पेट = अग्नि! असली ब्रह्म-यज्ञ!",
        nanoBananaPrompt: "Internal yajna—prana as sacrifice, body as offering, internal fire.",
        wordMeanings: [
            { sanskrit: "prāṇa", devanagari: "प्राण", hindi: "प्राण", english: "vital breath" },
            { sanskrit: "yajña", devanagari: "यज्ञ", hindi: "यज्ञ", english: "sacrifice" }
        ]
    },
    {
        id: 11, mantra: 13,
        theme: "So'ham Liberation",
        sanskrit: "ग्रन्थिं छित्त्वा तु यस्यान्तं मृत्युना च विवर्जितम् । सोऽहमिति समासाद्य ततो बन्धात्प्रमुच्यते ॥",
        hindi: "हृदय की ग्रंथि काटकर, जो अंतहीन और मृत्यु-रहित है—उसे 'सोऽहम्' (वह मैं हूँ) भाव से प्राप्त करके, बंधनों से मुक्त होता है।",
        english: "Cutting the knot, attaining That which is endless and deathless, realizing 'I am He', one is freed from bondage.",
        simpleExplanation: "CUT THE KNOT: Heart's knot cut → SO'HAM realized → BONDAGE FREED!",
        simpleExplanationHindi: "गांठ काटो: हृदय की गांठ कटी → सोऽहम् अनुभव → बंधन मुक्त!",
        nanoBananaPrompt: "Cutting the heart-knot, realizing So'ham, breaking free from bondage.",
        wordMeanings: [
            { sanskrit: "granthi", devanagari: "ग्रन्थि", hindi: "गांठ", english: "knot" },
            { sanskrit: "so'ham", devanagari: "सोऽहम्", hindi: "वह मैं हूँ", english: "I am He" }
        ]
    },

    // PART 5: NATURE OF BRAHMAN
    {
        id: 12, mantra: 14,
        theme: "Neither This Nor That",
        sanskrit: "न सन्नासन्न सदसन्न भिन्नं नापि चाभिन्नम् । न सङ्गीं न च असङ्गी च न चैष प्राकृतो मतः ॥",
        hindi: "वह न सत् है, न असत्, न दोनों। न भिन्न है न अभिन्न। न संगी है न असंगी। वह प्राकृत (भौतिक) नहीं माना गया।",
        english: "Neither Being, Non-Being, nor both. Neither different nor non-different. Neither attached nor unattached. Not material.",
        simpleExplanation: "NETI NETI: Not this, not that, not both! Beyond ALL categories!",
        simpleExplanationHindi: "नेति नेति: न यह, न वह, न दोनों! सब श्रेणियों से परे!",
        nanoBananaPrompt: "Brahman beyond all categories—neither this nor that.",
        wordMeanings: [
            { sanskrit: "na sat na asat", devanagari: "न सन्नासत्", hindi: "न सत् न असत्", english: "neither being nor non-being" }
        ]
    },
    {
        id: 13, mantra: 15,
        theme: "Grasped by Intuition",
        sanskrit: "न कदाचिदपि ह्यात्मा शब्दगम्यः कथञ्चन । यददृष्टमग्राह्यं च भावग्राह्यं तदुच्यते ॥",
        hindi: "आत्मा कभी भी शब्दों द्वारा नहीं जाना जा सकता। जो अदृष्ट और अग्राह्य है, उसे केवल भाव (अनुभूति) द्वारा ही ग्रहण किया जा सकता है।",
        english: "The Self is never accessible through words. That which is unseen, ungraspable, is grasped only by Intuition.",
        simpleExplanation: "BEYOND WORDS: Can't describe Self in words! Only FELT through pure intuition!",
        simpleExplanationHindi: "शब्दों से परे: आत्मा का शब्दों में वर्णन नहीं! केवल शुद्ध अनुभूति से अनुभव!",
        nanoBananaPrompt: "Self beyond words—only grasped by pure intuition.",
        wordMeanings: [
            { sanskrit: "śabdagamya", devanagari: "शब्दगम्य", hindi: "शब्दों से जानने योग्य", english: "accessible through words" },
            { sanskrit: "bhāvagrāhya", devanagari: "भावग्राह्य", hindi: "अनुभूति से जानने योग्य", english: "grasped by intuition" }
        ]
    },
    {
        id: 14, mantra: 18,
        theme: "Lamp of Self",
        sanskrit: "यदाऽऽत्मतत्त्वेन तु ब्रह्मतत्त्वं दीपोपमेनेह युक्तः प्रपश्येत् । अजं ध्रुवं सर्वतत्त्वैर्विशुद्धं ज्ञात्वा देवं मुच्यते सर्वपाशैः ॥",
        hindi: "जब योगी दीपक जैसे आत्म-तत्व द्वारा ब्रह्म-तत्व को देखता है; जो अजन्मा, स्थिर और सभी तत्वों से शुद्ध है—उसे जानकर सब बंधनों से मुक्त होता है।",
        english: "When the Yogi sees Brahman through Self like a lamp; knowing the Unborn, Eternal, pure from all tattvas—freed from all fetters.",
        simpleExplanation: "LAMP OF SELF: Use your Self like a lamp to SEE Brahman. Then = ALL fetters CUT!",
        simpleExplanationHindi: "आत्मा का दीपक: अपनी आत्मा को दीपक की तरह ब्रह्म देखने में प्रयोग करो। फिर = सब बंधन कटे!",
        nanoBananaPrompt: "Self as lamp illuminating Brahman—all fetters falling away.",
        wordMeanings: [
            { sanskrit: "dīpopama", devanagari: "दीपोपम", hindi: "दीपक जैसा", english: "like a lamp" },
            { sanskrit: "sarvapāśa", devanagari: "सर्वपाश", hindi: "सब बंधन", english: "all fetters" }
        ]
    },
    {
        id: 15, mantra: 20,
        theme: "Bubbles in Water",
        sanskrit: "यस्मिन् भावाः प्रलीयन्ते लीनाश्चाव्यक्तसंज्ञकाः । पश्यन्ति व्यक्ततां भूयो जायन्ते बुद्बुदा इव ॥",
        hindi: "जिसमें सब पदार्थ प्रलीन होते हैं और 'अव्यक्त' कहलाते हैं। फिर वे व्यक्त होते हैं और बुलबुलों की तरह उत्पन्न होते हैं।",
        english: "In whom all dissolve and become 'Unmanifest'. Again they become manifest and are born like bubbles.",
        simpleExplanation: "BUBBLES OF CREATION: World dissolves into Brahman, re-emerges like BUBBLES!",
        simpleExplanationHindi: "सृष्टि के बुलबुले: संसार ब्रह्म में विलीन, फिर बुलबुलों की तरह निकलता है!",
        nanoBananaPrompt: "Universes dissolving and emerging from Brahman like bubbles.",
        wordMeanings: [
            { sanskrit: "budbuda", devanagari: "बुद्बुद", hindi: "बुलबुला", english: "bubble" },
            { sanskrit: "pralīyante", devanagari: "प्रलीयन्ते", hindi: "विलीन होते हैं", english: "dissolve" }
        ]
    }
];

// Metadata
export const MANTRIKA_METADATA = {
    id: "mantrika",
    name: "Mantrika",
    alternativeName: "Chulika",
    nameSanskrit: "मन्त्रिकोपनिषद्",
    meaning: "The Conjurer Upanishad",
    veda: "Shukla Yajur Veda",
    category: "Samanya",
    shlokaCount: 15,
    fullVerseCount: 21,
    sequenceNumber: 32,
    keyTeachings: [
        "Cosmic Swan: 8 feet (prakriti), 3 threads (gunas)",
        "Brahman sees/touches/smells without physical organs",
        "Maheshwari Shakti with 100 illusions in all hearts",
        "25 Samkhya tattvas: 24 categories + 1 Purusha",
        "Witness only—doesn't participate in gunas",
        "Maya = Cosmic Mother putting souls to sleep",
        "Internal Yajna: Prana=sacrifice, Body=offering",
        "So'ham cuts the heart-knot = Liberation",
        "Self beyond words—only grasped by intuition",
        "Worlds emerge/dissolve like bubbles"
    ],
    samkhyaTattvas: {
        prakriti: "Root Nature",
        mahat: "Cosmic Intelligence",
        ahankara: "Ego",
        manas: "Mind",
        jnanendriyas: "5 Knowledge Senses",
        karmendriyas: "5 Action Organs",
        tanmatras: "5 Subtle Elements",
        mahabhutas: "5 Gross Elements",
        purusha: "The 25th—Pure Consciousness"
    },
    famousVerses: {
        cosmicSwan: { id: 1, mantra: 1 },
        witnessOnly: { id: 7, mantra: 8 },
        sohamLiberation: { id: 11, mantra: 13 },
        lampOfSelf: { id: 14, mantra: 18 },
        bubbles: { id: 15, mantra: 20 }
    }
};

export const getMantrikaMantra = (mantra: number): MantrikaDataEntry | undefined => {
    return MANTRIKA_SHLOKAS.find(s => s.mantra === mantra);
};
