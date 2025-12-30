// Nrisimha Purva Tapaniya Upanishad Data (#27 in Muktika Canon)
// Source: Atharva Veda | Category: Vaishnava
// Theme: Lord Narasimha as Supreme Brahman, The Mantraraja (32-syllable King of Mantras)
// Total: 5 Upanishads/Parts with ~25 Key Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface NrisimhaDataEntry {
    id: number;
    part: number;
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
export const NRISIMHA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः । स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः । व्यशेम देवहितं यदायुः ॥ स्वस्ति न इन्द्रो वृद्धश्रवाः । स्वस्ति नः पूषा विश्ववेदाः । स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः । स्वस्ति नो बृहस्पतिर्दधातु ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम कानों से शुभ सुनें। हम आँखों से शुभ देखें। हमारे अंग दृढ़ हों। इन्द्र, पूषा, गरुड़ और बृहस्पति हमारा कल्याण करें।",
    english: "OM! May we hear what is auspicious. May we see what is auspicious. May our limbs be strong. May Indra, Pushan, Garuda and Brihaspati grant us well-being. OM Peace."
};

// THE MANTRARAJA (King of Mantras)
export const NRISIMHA_MANTRARAJA = {
    sanskrit: "उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् । नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् ॥",
    transliteration: "Ugram Viram Maha-Vishnum Jvalantam Sarvatomukham | Nrisimham Bhishanam Bhadram Mrityu-Mrityum Namamyaham ||",
    hindi: "मैं उग्र (भयंकर), वीर, महाविष्णु, ज्वलंत, सर्वतोमुख, नृसिंह, भीषण, भद्र और मृत्यु के मृत्यु को नमन करता हूँ।",
    english: "I bow to the Ferocious, Heroic, Great Vishnu, Burning One, All-Faced, Man-Lion, Terrifying, Auspicious, Death of Death.",
    syllables: 32,
    meter: "Anustubh"
};

export const NRISIMHA_SHLOKAS: NrisimhaDataEntry[] = [
    // PART 1: ORIGIN OF THE MANTRA
    {
        id: 1, part: 1, mantra: "1.1",
        theme: "In the Beginning: Water",
        sanskrit: "आपो वा इदमग्रे सलिलमासीत् । तस्मादेकः प्रजापतिः समभवत् ।",
        hindi: "आरंभ में यह सब केवल जल (Salila) ही था। उससे अकेले प्रजापति (स्रष्टा) उत्पन्न हुए।",
        english: "In the beginning, all this was Water (Salila). From that, the One Prajapati (Creator) was born.",
        simpleExplanation: "CREATION: First was Water. From Water came the Creator!",
        simpleExplanationHindi: "सृष्टि: पहले जल था। जल से सृष्टिकर्ता आया!",
        nanoBananaPrompt: "Cosmic waters in the beginning, Prajapati emerging as the Creator.",
        wordMeanings: [
            { sanskrit: "āpa", devanagari: "आप", hindi: "जल", english: "water" },
            { sanskrit: "prajāpati", devanagari: "प्रजापति", hindi: "स्रष्टा", english: "creator/lord of creatures" }
        ]
    },
    {
        id: 2, part: 1, mantra: "1.3-5",
        theme: "Vision of the Mantraraja",
        sanskrit: "तस्मात् कामायमानात् इदं अनुष्टुप्-मन्त्रराजम् अपश्यत् । येन वै सर्वमिदं सृष्टम् । तस्मात् सर्वाणि भूतानि जायन्ते । जातानि जीवन्ति । यत्प्रयन्त्यभिसंविशन्ति ।",
        hindi: "कामना करते हुए प्रजापति ने अनुष्टुप मंत्रराज को देखा। जिससे यह सब रचा गया। उससे सब प्राणी जन्मते हैं, जीवित रहते हैं, और अंत में उसी में विलीन होते हैं।",
        english: "Desiring, Prajapati saw the Mantraraja in Anustubh. By which all was created. From it all beings are born, live, and into it they dissolve.",
        simpleExplanation: "KING OF MANTRAS: Prajapati saw THE mantra that creates, sustains, and dissolves ALL!",
        simpleExplanationHindi: "मंत्रराज: प्रजापति ने वह मंत्र देखा जो सबको बनाता, पालता और विलीन करता है!",
        nanoBananaPrompt: "Prajapati in meditation seeing the Mantraraja—source of all creation and dissolution.",
        wordMeanings: [
            { sanskrit: "mantrarāja", devanagari: "मन्त्रराज", hindi: "मंत्रों का राजा", english: "king of mantras" },
            { sanskrit: "anuṣṭubh", devanagari: "अनुष्टुप्", hindi: "अनुष्टुप छंद", english: "Anustubh meter" }
        ]
    },

    // PART 2: THE MANTRARAJA REVEALED
    {
        id: 3, part: 2, mantra: "2.1",
        theme: "The 32-Syllable Mantraraja",
        sanskrit: "उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् । नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् ॥",
        hindi: "मैं उग्र, वीर, महाविष्णु, ज्वलंत, सर्वतोमुख, नृसिंह, भीषण, भद्र और मृत्यु के मृत्यु को नमन करता हूँ।",
        english: "I bow to the Ferocious, Heroic, Great Vishnu, Burning, All-Faced, Man-Lion, Terrifying, Auspicious, Death of Death.",
        simpleExplanation: "THE MANTRA: Ugram Viram... Namamyaham! 32 syllables of ULTIMATE POWER!",
        simpleExplanationHindi: "मंत्र: उग्रं वीरं... नमाम्यहम्! 32 अक्षरों की परम शक्ति!",
        nanoBananaPrompt: "The full Nrisimha Mantraraja glowing with cosmic power—32 syllables.",
        wordMeanings: [
            { sanskrit: "ugra", devanagari: "उग्र", hindi: "भयंकर", english: "ferocious" },
            { sanskrit: "vīra", devanagari: "वीर", hindi: "वीर", english: "heroic" },
            { sanskrit: "nṛsiṃha", devanagari: "नृसिंह", hindi: "मनुष्य-सिंह", english: "man-lion" },
            { sanskrit: "mṛtyu-mṛtyu", devanagari: "मृत्युमृत्यु", hindi: "मृत्यु की मृत्यु", english: "death of death" }
        ]
    },
    {
        id: 4, part: 2, mantra: "2.2-4",
        theme: "32 Syllables, Conquers All",
        sanskrit: "द्वात्रिंशदक्षरो वै मन्त्रराजः । अनुष्टुप् छन्दः । य एवं वेद... स सर्वं जयति ।",
        hindi: "यह मंत्रराज 32 अक्षरों वाला है। छंद अनुष्टुप है। जो इसे जानता है... वह सबको जीत लेता है।",
        english: "This Mantraraja has 32 syllables. The meter is Anustubh. He who knows this... conquers everything.",
        simpleExplanation: "RESULT: 32 syllables in Anustubh meter. KNOW this = CONQUER EVERYTHING!",
        simpleExplanationHindi: "परिणाम: 32 अक्षर अनुष्टुप छंद में। यह जानो = सब जीतो!",
        nanoBananaPrompt: "32 syllables arranged in Anustubh meter—the key to conquering all.",
        wordMeanings: [
            { sanskrit: "dvātriṃśat", devanagari: "द्वात्रिंशत्", hindi: "बत्तीस", english: "thirty-two" },
            { sanskrit: "jayati", devanagari: "जयति", hindi: "जीतता है", english: "conquers" }
        ]
    },

    // PART 3: WORD-BY-WORD MEANING
    {
        id: 5, part: 3, mantra: "3.1",
        theme: "Why 'Ugram'?",
        sanskrit: "अथ कस्मादुच्यते उग्रमिति । यस्मात् स्वमहिम्ना सर्वांल्लोकान् सर्वान्देवान् उद्गृह्णाति... तस्मादुच्यते उग्रमिति ।",
        hindi: "उसे 'उग्र' क्यों कहते हैं? क्योंकि यह अपनी महिमा से सभी लोकों और देवताओं को ऊपर उठाता है। इसलिए 'उग्र'।",
        english: "Why 'Ugram'? Because by His glory He elevates all worlds and gods. Therefore 'Ugram'.",
        simpleExplanation: "UGRAM = ELEVATES! He holds up ALL worlds and ALL gods by His power!",
        simpleExplanationHindi: "उग्र = ऊपर उठाता है! वह अपनी शक्ति से सब लोकों और देवताओं को धारण करता है!",
        nanoBananaPrompt: "Nrisimha as Ugram—elevating and holding all worlds and gods.",
        wordMeanings: [
            { sanskrit: "udgṛhṇāti", devanagari: "उद्गृह्णाति", hindi: "ऊपर उठाता है", english: "elevates/upholds" }
        ]
    },
    {
        id: 6, part: 3, mantra: "3.3",
        theme: "Why 'Maha-Vishnum'?",
        sanskrit: "अथ कस्मादुच्यते महाविष्णुमिति । यस्मात्... व्याप्नोति... तस्मादुच्यते महाविष्णुमिति ।",
        hindi: "उसे 'महाविष्णु' क्यों कहते हैं? क्योंकि यह सब में व्याप्त है और कोई इससे बड़ा नहीं। इसलिए 'महाविष्णु'।",
        english: "Why 'Maha-Vishnum'? Because He pervades all and nothing is greater. Therefore 'Maha-Vishnum'.",
        simpleExplanation: "MAHA-VISHNU = ALL-PERVADING! He fills EVERYTHING. Nothing bigger than Him!",
        simpleExplanationHindi: "महाविष्णु = सर्वव्यापी! वह सबमें है। उनसे बड़ा कोई नहीं!",
        nanoBananaPrompt: "Maha-Vishnu pervading all space, nothing greater than Him.",
        wordMeanings: [
            { sanskrit: "vyāpnoti", devanagari: "व्याप्नोति", hindi: "व्याप्त है", english: "pervades" }
        ]
    },
    {
        id: 7, part: 3, mantra: "3.6",
        theme: "Why 'Nrisimham'?",
        sanskrit: "अथ कस्मादुच्यते नृसिंहमिति । यस्मात् सर्वेषां भूतानां ना वीर्यष्ठः... सिंहो वीर्यष्ठः... तस्मादुच्यते नृसिंहमिति ।",
        hindi: "उसे 'नृसिंह' क्यों कहते हैं? क्योंकि प्राणियों में 'नर' श्रेष्ठ है और पशुओं में 'सिंह' श्रेष्ठ है। इन दोनों का रूप होने से 'नृसिंह'।",
        english: "Why 'Nrisimham'? Among beings Man is most powerful, among beasts Lion. Combining both = 'Nrisimham'.",
        simpleExplanation: "NRI + SIMHA = Man + Lion! Most powerful of BOTH kingdoms combined!",
        simpleExplanationHindi: "नर + सिंह = मनुष्य + शेर! दोनों जगत के सबसे शक्तिशाली का संयोग!",
        nanoBananaPrompt: "Lord Nrisimha—combining the power of Man and Lion into one form.",
        wordMeanings: [
            { sanskrit: "nṛ", devanagari: "नृ", hindi: "मनुष्य", english: "man" },
            { sanskrit: "siṃha", devanagari: "सिंह", hindi: "सिंह", english: "lion" }
        ]
    },
    {
        id: 8, part: 3, mantra: "3.7",
        theme: "Why 'Bhishanam'?",
        sanskrit: "अथ कस्मादुच्यते भीषणमिति । यस्मात्... सर्वाणि भूतानि बिभेति... तस्मादुच्यते भीषणमिति ।",
        hindi: "उसे 'भीषण' क्यों कहते हैं? क्योंकि सभी लोक और प्राणी इससे डरते हैं, पर यह किसी से नहीं डरता। इसलिए 'भीषण'।",
        english: "Why 'Bhishanam'? All beings fear Him, but He fears none. Therefore 'Bhishanam'.",
        simpleExplanation: "BHISHANAM = TERRIFYING! Everyone fears Him, He fears NO ONE!",
        simpleExplanationHindi: "भीषण = भयंकर! सब उनसे डरते हैं, वह किसी से नहीं डरते!",
        nanoBananaPrompt: "Nrisimha as Bhishanam—all beings trembling in awe, He fearing none.",
        wordMeanings: [
            { sanskrit: "bibheti", devanagari: "बिभेति", hindi: "डरते हैं", english: "fear" }
        ]
    },
    {
        id: 9, part: 3, mantra: "3.9",
        theme: "Why 'Mrityu-Mrityum'?",
        sanskrit: "अथ कस्मादुच्यते मृत्युमृत्युमिति । यस्मात्... मृत्योः मृत्युं... तस्मादुच्यते मृत्युमृत्युमिति ।",
        hindi: "उसे 'मृत्यु-मृत्यु' क्यों कहते हैं? क्योंकि यह मृत्यु को भी मार देता है। इसलिए 'मृत्यु की मृत्यु'।",
        english: "Why 'Mrityu-Mrityum'? Because He destroys Death itself. Therefore 'Death of Death'.",
        simpleExplanation: "DEATH OF DEATH! Even Death DIES before Him! Ultimate protection!",
        simpleExplanationHindi: "मृत्यु की मृत्यु! मृत्यु भी उनके सामने मर जाती है! परम सुरक्षा!",
        nanoBananaPrompt: "Nrisimha as Death of Death—even Yama kneeling before Him.",
        wordMeanings: [
            { sanskrit: "mṛtyu", devanagari: "मृत्यु", hindi: "मृत्यु", english: "death" }
        ]
    },

    // PART 4: ANGA MANTRAS (Limbs)
    {
        id: 10, part: 4, mantra: "4.1",
        theme: "Heart - Ugram",
        sanskrit: "उग्रं हृदयाय नमः ।",
        hindi: "'उग्रं हृदयाय नमः' - उग्र को हृदय के लिए नमस्कार।",
        english: "'Ugram Hridayaya Namah' - Salutations to Ugram in the Heart.",
        simpleExplanation: "HEART: UGRAM placed in the heart during nyasa!",
        simpleExplanationHindi: "हृदय: न्यास में उग्रं हृदय में स्थापित!",
        nanoBananaPrompt: "Ugram placed in the heart during ritual nyasa.",
        wordMeanings: [
            { sanskrit: "hṛdaya", devanagari: "हृदय", hindi: "हृदय", english: "heart" }
        ]
    },
    {
        id: 11, part: 4, mantra: "4.2",
        theme: "Head - Viram",
        sanskrit: "वीरं शिरसे स्वाहा ।",
        hindi: "'वीरं शिरसे स्वाहा' - वीर को सिर के लिए समर्पित।",
        english: "'Viram Shirase Svaha' - Viram to the Head.",
        simpleExplanation: "HEAD: VIRAM placed at the head!",
        simpleExplanationHindi: "सिर: वीरं सिर पर स्थापित!",
        nanoBananaPrompt: "Viram placed at the head during ritual nyasa.",
        wordMeanings: [
            { sanskrit: "śiras", devanagari: "शिरस्", hindi: "सिर", english: "head" }
        ]
    },
    {
        id: 12, part: 4, mantra: "4.3-6",
        theme: "Six Anga Mantras",
        sanskrit: "महाविष्णुं शिखायै वषट् । ज्वलन्तं कवचाय हुम् । सर्वतोमुखं नेत्रत्रयाय वौषट् । नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् अस्त्राय फट् ।",
        hindi: "महाविष्णु शिखा के लिए। ज्वलन्त कवच के लिए। सर्वतोमुख तीन नेत्रों के लिए। पूर्ण मंत्र अस्त्र के लिए।",
        english: "Maha-Vishnu for Tuft. Jvalantam for Armor. Sarvatomukham for Three Eyes. Full mantra for Weapon.",
        simpleExplanation: "SIX ANGAS: Tuft, Armor, Eyes, Weapon—each protected by part of the mantra!",
        simpleExplanationHindi: "छह अंग: शिखा, कवच, नेत्र, अस्त्र—हर अंग मंत्र के भाग से सुरक्षित!",
        nanoBananaPrompt: "Six limbs protected by six parts of the Mantraraja during nyasa.",
        wordMeanings: [
            { sanskrit: "śikhā", devanagari: "शिखा", hindi: "चोटी", english: "tuft" },
            { sanskrit: "kavaca", devanagari: "कवच", hindi: "कवच", english: "armor" },
            { sanskrit: "astra", devanagari: "अस्त्र", hindi: "अस्त्र", english: "weapon" }
        ]
    },

    // PART 5: THE MAHA CHAKRA
    {
        id: 13, part: 5, mantra: "5.1",
        theme: "Sudarshana Maha Chakra",
        sanskrit: "साङ्गं सव्यूहं सशक्तिं सक्रोधं चक्रं सुदर्शनं महाचक्रं तस्मादादौ प्रणवमेकाक्षरं भवति ।",
        hindi: "अंगों, व्यूहों, शक्ति और क्रोध सहित वह सुदर्शन महाचक्र है। केंद्र में एकाक्षर 'ॐ' है।",
        english: "That Great Chakra, Sudarshana, with limbs, arrays, power and wrath. At center is the single syllable OM.",
        simpleExplanation: "YANTRA CENTER: The great Sudarshana Chakra with OM at its core!",
        simpleExplanationHindi: "यंत्र केंद्र: महान सुदर्शन चक्र जिसके केंद्र में ॐ है!",
        nanoBananaPrompt: "Sudarshana Maha Chakra with OM at the center.",
        wordMeanings: [
            { sanskrit: "sudarśana", devanagari: "सुदर्शन", hindi: "सुदर्शन चक्र", english: "the beautiful disc" },
            { sanskrit: "praṇava", devanagari: "प्रणव", hindi: "ॐ", english: "OM" }
        ]
    },
    {
        id: 14, part: 5, mantra: "5.2-6",
        theme: "Petals of the Yantra",
        sanskrit: "तस्मात् षट्पत्राणि भवन्ति । तस्मादष्टपत्राणि भवन्ति । तस्माद्द्वादशपत्राणि भवन्ति । तस्मात्षोडशपत्राणि भवन्ति । तस्माद्द्वात्रिंशत्पत्राणि भवन्ति ।",
        hindi: "उसके 6 पत्र, फिर 8 पत्र, फिर 12 पत्र, फिर 16 पत्र, फिर 32 पत्र होते हैं।",
        english: "From that: 6 petals, then 8 petals, then 12 petals, then 16 petals, then 32 petals.",
        simpleExplanation: "YANTRA LAYERS: 6 → 8 → 12 → 16 → 32 petals radiating outward!",
        simpleExplanationHindi: "यंत्र परतें: 6 → 8 → 12 → 16 → 32 पंखुड़ियां केंद्र से बाहर!",
        nanoBananaPrompt: "Nrisimha Yantra expanding: 6, 8, 12, 16, 32 petals from center.",
        wordMeanings: [
            { sanskrit: "patra", devanagari: "पत्र", hindi: "पंखुड़ी", english: "petal" }
        ]
    },
    {
        id: 15, part: 5, mantra: "5.8",
        theme: "Attains Brahmanhood",
        sanskrit: "य एतन्महाचक्रं वेद... स सर्वं तरति... स ब्रह्मत्वमधिगच्छति । ॐ सत्यमित्युपनिषत् ॥",
        hindi: "जो इस महाचक्र को जानता है... वह सबको पार करता है... वह ब्रह्मत्व को प्राप्त करता है। ॐ सत्य है।",
        english: "He who knows this Maha-Chakra... transcends everything... attains Brahmanhood. OM is Truth.",
        simpleExplanation: "RESULT: Know this Chakra = Transcend ALL = Become BRAHMAN! OM!",
        simpleExplanationHindi: "परिणाम: इस चक्र को जानो = सब पार करो = ब्रह्म बनो! ॐ!",
        nanoBananaPrompt: "Seeker knowing the Maha-Chakra and attaining Brahmanhood.",
        wordMeanings: [
            { sanskrit: "brahmatva", devanagari: "ब्रह्मत्व", hindi: "ब्रह्म होना", english: "Brahmanhood" },
            { sanskrit: "tarati", devanagari: "तरति", hindi: "पार करता है", english: "transcends" }
        ]
    }
];

// Metadata
export const NRISIMHA_METADATA = {
    id: "nrisimha-purva-tapaniya",
    name: "Nrisimha Purva Tapaniya",
    nameSanskrit: "नृसिंहपूर्वतापनीयोपनिषद्",
    meaning: "Earlier Burning Upanishad of Narasimha",
    veda: "Atharva Veda",
    category: "Vaishnava",
    shlokaCount: 15,
    partsCount: 5,
    sequenceNumber: 27,
    deity: "Lord Narasimha (Man-Lion Avatar of Vishnu)",
    mantraraja: {
        text: "उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् । नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् ॥",
        syllables: 32,
        meter: "Anustubh",
        words: [
            { word: "Ugram", meaning: "Ferocious/Elevates all" },
            { word: "Viram", meaning: "Heroic/Rests in all" },
            { word: "Maha-Vishnum", meaning: "Great all-pervading one" },
            { word: "Jvalantam", meaning: "Burning/Illuminating" },
            { word: "Sarvatomukham", meaning: "Faces everywhere" },
            { word: "Nrisimham", meaning: "Man-Lion (combined power)" },
            { word: "Bhishanam", meaning: "Terrifying to all, fears none" },
            { word: "Bhadram", meaning: "Auspicious, grants good" },
            { word: "Mrityu-Mrityum", meaning: "Death of Death" },
            { word: "Namamyaham", meaning: "I bow down" }
        ]
    },
    parts: {
        1: { name: "Origin of Mantra", theme: "Prajapati sees Mantraraja from cosmic waters" },
        2: { name: "The Mantraraja", theme: "32-syllable King of Mantras revealed" },
        3: { name: "Word Meanings", theme: "Why each word: Ugram, Viram, Nrisimham, etc." },
        4: { name: "Anga Mantras", theme: "Six limbs for Nyasa ritual" },
        5: { name: "Maha Chakra", theme: "Sudarshana Yantra with 6-8-12-16-32 petals" }
    },
    keyTeachings: [
        "Mantraraja = King of all Mantras (32 syllables)",
        "From this mantra, all beings are born, live, and dissolve",
        "Nrisimha = Man + Lion = Most powerful of both kingdoms",
        "Mrityu-Mrityum = He who kills Death itself",
        "Six Anga mantras protect Heart, Head, Tuft, Armor, Eyes, Weapon",
        "Sudarshana Maha Chakra has OM at center, 32 petals outer",
        "Knowing this Chakra = Attaining Brahmanhood"
    ],
    famousVerses: {
        mantraraja: { id: 3, part: 2, mantra: "2.1" },
        whyNrisimha: { id: 7, part: 3, mantra: "3.6" },
        deathOfDeath: { id: 9, part: 3, mantra: "3.9" },
        brahmanhood: { id: 15, part: 5, mantra: "5.8" }
    }
};

export const getNrisimhaMantra = (part: number, mantra: string): NrisimhaDataEntry | undefined => {
    return NRISIMHA_SHLOKAS.find(s => s.part === part && s.mantra === mantra);
};
