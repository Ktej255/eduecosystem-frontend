// Kshurika Upanishad Data (#31 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Yoga
// Theme: The Razor of Yoga - Cutting Knots (Marmas) through Dharana
// Total: 25 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface KshurikaDataEntry {
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

// Shanti Mantra
export const KSHURIKA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह हम दोनों की रक्षा करे। हम साथ शक्ति प्राप्त करें। हमारा अध्ययन तेजस्वी हो। हम द्वेष न करें।",
    english: "OM! May He protect us both. May we gain energy together. May our study be brilliant. May we not hate. OM Peace."
};

export const KSHURIKA_SHLOKAS: KshurikaDataEntry[] = [
    // PART 1: THE RAZOR OF YOGA
    {
        id: 1, mantra: 1,
        theme: "The Razor That Ends Rebirth",
        sanskrit: "क्षुरिकां सम्प्रवक्ष्यामि धारणां योगसिद्धिदाम् । यां प्राप्य न पुनर्जन्म योगयुक्तस्य जायते ॥",
        hindi: "मैं उस क्षुरिका (छुरी) का वर्णन करूँगा जो धारणा रूपी है और योग-सिद्धि देती है। जिसे प्राप्त करके योगी का पुनर्जन्म नहीं होता।",
        english: "I shall expound the Kshurika (Razor), which is Dharana and grants Yoga perfection. Having attained it, the Yogi is not born again.",
        simpleExplanation: "RAZOR = CONCENTRATION! This mental razor CUTS rebirth forever!",
        simpleExplanationHindi: "छुरी = एकाग्रता! यह मानसिक छुरी पुनर्जन्म हमेशा के लिए काट देती है!",
        nanoBananaPrompt: "A razor made of pure concentration—cutting the cycle of rebirth.",
        wordMeanings: [
            { sanskrit: "kṣurikā", devanagari: "क्षुरिका", hindi: "छुरी/उस्तरा", english: "razor" },
            { sanskrit: "dhāraṇā", devanagari: "धारणा", hindi: "एकाग्रता", english: "concentration" }
        ]
    },
    {
        id: 2, mantra: 3,
        theme: "Turtle Withdrawal",
        sanskrit: "कूर्मोऽङ्गानीव संहृत्य मनो हृदि निरुध्य च ॥",
        hindi: "जैसे कछुआ अपने अंगों को समेट लेता है, वैसे ही इन्द्रियों को समेटकर मन को हृदय में बंद कर लो।",
        english: "Just as a tortoise withdraws its limbs, withdraw senses and restrain the mind in the heart.",
        simpleExplanation: "TURTLE YOGA: Pull in your senses like a turtle pulls in limbs!",
        simpleExplanationHindi: "कछुआ योग: अपनी इन्द्रियों को अंदर खींचो जैसे कछुआ अंग खींचता है!",
        nanoBananaPrompt: "Yogi withdrawing senses like a turtle withdrawing into its shell.",
        wordMeanings: [
            { sanskrit: "kūrma", devanagari: "कूर्म", hindi: "कछुआ", english: "tortoise" },
            { sanskrit: "saṃhṛtya", devanagari: "संहृत्य", hindi: "समेटकर", english: "withdrawing" }
        ]
    },
    {
        id: 3, mantra: 4,
        theme: "12-Matra Pranayama",
        sanskrit: "मात्राद्वादशयोगेन प्रणवेन शनैः शनैः । पूरयेत् सर्वगात्राणि ॥",
        hindi: "बारह मात्राओं के योग से और ॐ के द्वारा धीरे-धीरे सभी अंगों को प्राण से भर ले।",
        english: "With twelve matras and OM, slowly fill all limbs with Prana.",
        simpleExplanation: "12 BEATS OF OM: Fill your ENTIRE body with Prana using 12-count OM!",
        simpleExplanationHindi: "ॐ की 12 मात्रा: 12-गिनती ॐ से पूरे शरीर को प्राण से भरो!",
        nanoBananaPrompt: "Prana filling the entire body through 12-matra OM breathing.",
        wordMeanings: [
            { sanskrit: "mātrā", devanagari: "मात्रा", hindi: "मात्रा/गिनती", english: "measure/count" },
            { sanskrit: "praṇava", devanagari: "प्रणव", hindi: "ॐ", english: "OM" }
        ]
    },

    // PART 2: CUTTING THE KNOTS
    {
        id: 4, mantra: 7,
        theme: "Cutting Shin Marmas",
        sanskrit: "जङ्घयोश्च द्वयोर्मर्म तद्बलेनैव कन्तयेत् । प्राणायामेन तीक्ष्णेन धारणां मनसा युताम् ॥",
        hindi: "दोनों पिंडलियों के मर्म को योग-बल से काट दे। तीक्ष्ण प्राणायाम और मन-सहित धारणा द्वारा।",
        english: "Cut the Marma of both shins with strength; using sharp Pranayama and Dharana united with mind.",
        simpleExplanation: "CUT SHIN BLOCKS: Use sharp breath + mind focus to cut energy blocks in shins!",
        simpleExplanationHindi: "पिंडली के अवरोध काटो: तेज श्वास + मन एकाग्रता से पिंडलियों में ऊर्जा ब्लॉक काटो!",
        nanoBananaPrompt: "Yogic razor cutting through marma points in the shins.",
        wordMeanings: [
            { sanskrit: "marma", devanagari: "मर्म", hindi: "महत्वपूर्ण बिंदु", english: "vital point/knot" },
            { sanskrit: "kantayet", devanagari: "कन्तयेत्", hindi: "काट दे", english: "should cut" }
        ]
    },
    {
        id: 5, mantra: 8,
        theme: "Sushumna Like Vajra",
        sanskrit: "एकां सुषुम्नां तन्मध्ये नाडीं वज्रोपमां स्मरेत् ॥",
        hindi: "उनके मध्य में एक सुषुम्ना नाड़ी है, जिसे वज्र के समान स्मरण करे।",
        english: "Remember the one Sushumna Nadi in the middle, which is like a Vajra (thunderbolt).",
        simpleExplanation: "SUSHUMNA = THUNDERBOLT! The central channel is strong as diamond!",
        simpleExplanationHindi: "सुषुम्ना = वज्र! केंद्रीय नाड़ी हीरे जैसी मजबूत है!",
        nanoBananaPrompt: "Sushumna nadi glowing like a diamond thunderbolt in the spine.",
        wordMeanings: [
            { sanskrit: "vajra", devanagari: "वज्र", hindi: "वज्र/हीरा", english: "thunderbolt/diamond" }
        ]
    },
    {
        id: 6, mantra: 9,
        theme: "72,000 Nadis Cut",
        sanskrit: "द्वासप्ततिसहस्राणि नाड्यस्तस्याः समासतः । छिद्यन्ते ध्यानयोगेन सुसुम्नैकैव न छिद्यते ॥",
        hindi: "72,000 नाड़ियां हैं। ध्यान-योग से वे सब कट जाती हैं; केवल सुषुम्ना नहीं कटती।",
        english: "There are 72,000 Nadis. By meditation-yoga, all are severed; only Sushumna is not cut.",
        simpleExplanation: "72,000 NADIS CUT: Meditation cuts ALL channels except Sushumna—the escape route!",
        simpleExplanationHindi: "72,000 नाड़ियां कटती हैं: ध्यान से सब कटती हैं सिवाय सुषुम्ना—भागने का रास्ता!",
        nanoBananaPrompt: "72,000 nadis being severed, only Sushumna remaining intact.",
        wordMeanings: [
            { sanskrit: "dvāsaptatisahasrāṇi", devanagari: "द्वासप्ततिसहस्राणि", hindi: "72,000", english: "seventy-two thousand" },
            { sanskrit: "chidyante", devanagari: "छिद्यन्ते", hindi: "कट जाती हैं", english: "are severed" }
        ]
    },

    // PART 3: THE RAZOR INSTRUMENT
    {
        id: 7, mantra: 10,
        theme: "The Thought-Razor",
        sanskrit: "क्षुरिकां तीक्ष्णधारां तु शुद्धां कर्मनिवर्तिनीम् । आददीत नमस्कृत्य निःसङ्गा भावनामयीम् ॥",
        hindi: "तीखी धार वाली, शुद्ध, कर्म निवृत करने वाली, संग-रहित और भावनामयी क्षुरिका को नमस्कार करके ग्रहण करे।",
        english: "Take up the Razor—sharp, pure, stopping karma, detached, made of pure Thought—after bowing.",
        simpleExplanation: "MENTAL RAZOR: Sharp, pure, made of THOUGHT! Bow to it, then use it!",
        simpleExplanationHindi: "मानसिक छुरी: तेज, शुद्ध, विचार से बनी! नमस्कार करो, फिर प्रयोग करो!",
        nanoBananaPrompt: "A gleaming razor made of pure thought and meditation.",
        wordMeanings: [
            { sanskrit: "tīkṣṇadhārā", devanagari: "तीक्ष्णधारा", hindi: "तेज धार", english: "sharp-edged" },
            { sanskrit: "bhāvanāmayī", devanagari: "भावनामयी", hindi: "विचार से बनी", english: "made of thought" }
        ]
    },
    {
        id: 8, mantra: 11,
        theme: "Cut Feet to Head",
        sanskrit: "निःसङ्गेनैव ध्यानेन छिनत्त्यापादमस्तकम् ॥",
        hindi: "निःसंग ध्यान द्वारा, पैर से सिर तक (बंधन को) काट दे।",
        english: "With detached meditation, cut from feet to head.",
        simpleExplanation: "FULL BODY CUT: Detached meditation severs bondages from TOES to CROWN!",
        simpleExplanationHindi: "पूर्ण शरीर काट: विरक्त ध्यान पैर से सिर तक बंधन काटता है!",
        nanoBananaPrompt: "Meditation cutting bondages from feet to crown of head.",
        wordMeanings: [
            { sanskrit: "āpādamastaka", devanagari: "आपादमस्तक", hindi: "पैर से सिर तक", english: "from feet to head" }
        ]
    },

    // PART 4: SPECIFIC MARMAS
    {
        id: 9, mantra: 13,
        theme: "Toes and Ankles",
        sanskrit: "पादाङ्गुष्ठतले मर्म तद्बलेनैव कन्तयेत् । गुल्फसन्धिं तथा मर्म तद्बलेनैव कन्तयेत् ॥",
        hindi: "पैर के अंगूठे के तल में मर्म को काटो। एड़ी की संधि में मर्म को काटो।",
        english: "Cut the marma at big toe base. Cut the marma at ankle joint.",
        simpleExplanation: "START AT TOES: Cut knots at big toe, then ankle. Start from bottom!",
        simpleExplanationHindi: "पैर की उंगलियों से शुरू: अंगूठे पर गांठ काटो, फिर एड़ी। नीचे से शुरू करो!",
        nanoBananaPrompt: "Cutting marma points at toes and ankles with yogic concentration.",
        wordMeanings: [
            { sanskrit: "pādāṅguṣṭha", devanagari: "पादाङ्गुष्ठ", hindi: "पैर का अंगूठा", english: "big toe" },
            { sanskrit: "gulpha", devanagari: "गुल्फ", hindi: "एड़ी", english: "ankle" }
        ]
    },
    {
        id: 10, mantra: 16,
        theme: "Navel Center",
        sanskrit: "नाभिमध्ये तथा मर्म तद्बलेनैव कन्तयेत् ॥",
        hindi: "नाभि के मध्य में मर्म को काट दे।",
        english: "Cut the vital knot in the middle of the navel.",
        simpleExplanation: "NAVEL KNOT: Cut the marma at the navel center!",
        simpleExplanationHindi: "नाभि गांठ: नाभि केंद्र पर मर्म काटो!",
        nanoBananaPrompt: "Cutting the vital marma point at the navel center.",
        wordMeanings: [
            { sanskrit: "nābhi", devanagari: "नाभि", hindi: "नाभि", english: "navel" }
        ]
    },
    {
        id: 11, mantra: 17,
        theme: "Heart and Throat",
        sanskrit: "हृदि मध्ये तथा मर्म तद्बलेनैव कन्तयेत् । कण्ठकूपे तथा मर्म तद्बलेनैव कन्तयेत् ॥",
        hindi: "हृदय के मध्य में मर्म को काटो। कंठ-कूप में मर्म को काटो।",
        english: "Cut the marma in heart's middle. Cut the marma in throat-pit.",
        simpleExplanation: "HEART & THROAT: Cut the knots at heart center and throat pit!",
        simpleExplanationHindi: "हृदय और कंठ: हृदय केंद्र और कंठ गड्ढे पर गांठें काटो!",
        nanoBananaPrompt: "Cutting marma points at heart center and throat pit.",
        wordMeanings: [
            { sanskrit: "hṛdi", devanagari: "हृदि", hindi: "हृदय में", english: "in heart" },
            { sanskrit: "kaṇṭhakūpa", devanagari: "कण्ठकूप", hindi: "कंठ गड्ढा", english: "throat pit" }
        ]
    },
    {
        id: 12, mantra: 19,
        theme: "Third Eye and Forehead",
        sanskrit: "भ्रूमध्ये तु तथा मर्म तद्बलेनैव कन्तयेत् । ललाटमध्ये तन्मर्म तद्बलेनैव कन्तयेत् ॥",
        hindi: "भौंहों के बीच में मर्म को काटो। ललाट के मध्य में मर्म को काटो।",
        english: "Cut the marma between eyebrows. Cut the marma in forehead's middle.",
        simpleExplanation: "THIRD EYE: Cut knots between eyebrows and at forehead center!",
        simpleExplanationHindi: "तीसरी आँख: भौंहों के बीच और ललाट केंद्र पर गांठें काटो!",
        nanoBananaPrompt: "Cutting marma at third eye and forehead center.",
        wordMeanings: [
            { sanskrit: "bhrūmadhya", devanagari: "भ्रूमध्य", hindi: "भौंहों के बीच", english: "between eyebrows" },
            { sanskrit: "lalāṭa", devanagari: "ललाट", hindi: "माथा", english: "forehead" }
        ]
    },

    // PART 5: LIBERATION
    {
        id: 13, mantra: 21,
        theme: "Attain Brahman",
        sanskrit: "छित्त्वा तु तन्तुनाडीनां याति ब्रह्म सनातनम् ।",
        hindi: "नाड़ियों के तंतु (Threads) को काटकर, वह सनातन ब्रह्म को प्राप्त होता है।",
        english: "Having cut the threads of the Nadis, he attains the Eternal Brahman.",
        simpleExplanation: "CUT THREADS = BRAHMAN! Sever all nadi-threads and reach the Eternal!",
        simpleExplanationHindi: "तंतु काटो = ब्रह्म! सब नाड़ी-तंतु काटो और सनातन को पाओ!",
        nanoBananaPrompt: "Threads of nadis being cut, soul ascending to Eternal Brahman.",
        wordMeanings: [
            { sanskrit: "tantu", devanagari: "तन्तु", hindi: "तंतु/धागा", english: "thread" },
            { sanskrit: "sanātana", devanagari: "सनातन", hindi: "शाश्वत", english: "eternal" }
        ]
    },
    {
        id: 14, mantra: 22,
        theme: "Lamp Without Flicker",
        sanskrit: "निवाते तु यथा दीपो भासते निष्प्रकम्पकः । एवं योगी सुयुक्तात्मा सर्वान् दोषान् निकृन्तति ॥",
        hindi: "जैसे वायु-रहित स्थान में दीपक बिना कम्पन के चमकता है, वैसे ही सुयुक्त योगी सभी दोषों को काट डालता है।",
        english: "Just as a lamp shines in windless place without flickering, so the controlled Yogi cuts off all defects.",
        simpleExplanation: "STEADY FLAME: Your mind = lamp in windless place. No flicker = all defects CUT!",
        simpleExplanationHindi: "स्थिर लौ: तुम्हारा मन = वायुहीन स्थान में दीपक। कोई कंपन नहीं = सब दोष कटे!",
        nanoBananaPrompt: "Mind steady as a lamp in windless place—cutting all defects.",
        wordMeanings: [
            { sanskrit: "nivāta", devanagari: "निवात", hindi: "वायु-रहित", english: "windless" },
            { sanskrit: "niṣprakampaka", devanagari: "निष्प्रकम्पक", hindi: "कम्पन-रहित", english: "without flickering" }
        ]
    },
    {
        id: 15, mantra: 23,
        theme: "No Return Ever",
        sanskrit: "न तस्य पुनरावृत्तिर्ब्रह्मलोकं समाश्रितः । न तस्य पुनरावृत्तिः कल्पकोटिशतैरपि ॥",
        hindi: "ब्रह्मलोक का आश्रय लेने वाले का पुनर्जन्म नहीं होता। करोड़ों कल्पों के बाद भी नहीं।",
        english: "No return for him in Brahma-Loka. No return even after hundreds of millions of Kalpas.",
        simpleExplanation: "FOREVER FREE! Not reborn even after BILLIONS of cosmic cycles!",
        simpleExplanationHindi: "हमेशा के लिए मुक्त! अरबों ब्रह्मांडीय चक्रों के बाद भी पुनर्जन्म नहीं!",
        nanoBananaPrompt: "Soul in Brahma-Loka—never returning even after billions of kalpas.",
        wordMeanings: [
            { sanskrit: "punarāvṛtti", devanagari: "पुनरावृत्ति", hindi: "पुनर्जन्म", english: "return/rebirth" },
            { sanskrit: "kalpakoṭi", devanagari: "कल्पकोटि", hindi: "करोड़ों कल्प", english: "millions of kalpas" }
        ]
    }
];

// Metadata
export const KSHURIKA_METADATA = {
    id: "kshurika",
    name: "Kshurika",
    nameSanskrit: "क्षुरिकोपनिषद्",
    meaning: "The Razor Upanishad",
    veda: "Krishna Yajur Veda",
    category: "Yoga",
    shlokaCount: 15,
    fullVerseCount: 25,
    sequenceNumber: 31,
    marmaPoints: [
        "Big Toe", "Ankle", "Knee", "Thigh Root",
        "Anus", "Genital", "Navel", "Heart",
        "Throat Pit", "Palate", "Between Eyebrows",
        "Forehead", "Crown (Shikha)"
    ],
    keyTeachings: [
        "Kshurika = Razor made of Dharana (concentration)",
        "Attaining it ends rebirth forever",
        "Withdraw senses like turtle withdraws limbs",
        "12-matra OM fills body with Prana",
        "72,000 nadis cut by meditation, only Sushumna remains",
        "Cut marmas from toes to crown",
        "Mind steady like lamp in windless place",
        "No return even after billions of Kalpas"
    ],
    famousVerses: {
        razorIntro: { id: 1, mantra: 1 },
        turtleWithdrawal: { id: 2, mantra: 3 },
        nadis72000: { id: 6, mantra: 9 },
        lampAnalogy: { id: 14, mantra: 22 },
        noReturn: { id: 15, mantra: 23 }
    }
};

export const getKshurikaMantra = (mantra: number): KshurikaDataEntry | undefined => {
    return KSHURIKA_SHLOKAS.find(s => s.mantra === mantra);
};
