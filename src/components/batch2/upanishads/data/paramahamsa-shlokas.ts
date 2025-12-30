// Paramahamsa Upanishad Data (#19 in Muktika Canon)
// Source: Shukla Yajur Veda | Category: Sannyasa
// Theme: The Supreme Swans - Highest Class of Monks and Inner Thread of Knowledge
// Total: 4 Major Sections with ~20 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface ParamahamsaDataEntry {
    id: number;
    section: number;
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
export const PARAMAHAMSA_SHANTI_MANTRA = {
    sanskrit: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह (परब्रह्म) पूर्ण है। यह (जगत) भी पूर्ण है। पूर्ण से ही पूर्ण की उत्पत्ति होती है। पूर्ण में से पूर्ण को निकाल लेने पर भी पूर्ण ही शेष रहता है। ॐ शांति, शांति, शांति।",
    english: "OM! That (Brahman) is Whole. This (Universe) is Whole. From the Whole emerges the Whole. When the Whole is taken from the Whole, the Whole alone remains. OM Peace, Peace, Peace."
};

export const PARAMAHAMSA_SHLOKAS: ParamahamsaDataEntry[] = [
    // Section 1: The Path of the Supreme Swan
    {
        id: 1,
        section: 1,
        verse: 1,
        theme: "Narada's Question",
        sanskrit: "ॐ। अथ नारदो भगवन्तं ब्रह्माणमुपेत्योवाच । अधीहि भगवन् परमहंसमार्गम् । को विधिः को वा तस्य स्थितिरीति ।",
        hindi: "ॐ। नारद जी भगवान ब्रह्मा के पास जाकर बोले: 'हे भगवन्! मुझे परमहंस-मार्ग का उपदेश दें। उसकी विधि क्या है? और उस परमहंस की स्थिति कैसी होती है?'",
        english: "OM. Narada approached Lord Brahma and said: 'O Lord! Teach me the Path of the Paramahamsa. What is the method? And what is his state/conduct?'",
        simpleExplanation: "THE HIGHEST PATH: Narada asks Brahma to teach the way of the Supreme Swans—the highest monks!",
        simpleExplanationHindi: "सर्वोच्च मार्ग: नारद ब्रह्मा से परम संन्यासियों—परमहंसों—का मार्ग पूछते हैं!",
        nanoBananaPrompt: "Narada approaching Brahma, asking about the path of the Supreme Swans (Paramahamsas).",
        wordMeanings: [
            { sanskrit: "paramahaṃsa", devanagari: "परमहंस", hindi: "परम हंस/सर्वोच्च संन्यासी", english: "supreme swan/highest monk" },
            { sanskrit: "mārga", devanagari: "मार्ग", hindi: "मार्ग", english: "path" }
        ]
    },
    {
        id: 2,
        section: 1,
        verse: 2,
        theme: "The Rarest Path",
        sanskrit: "तं होवाच भगवान् प्रजापतिः । चतुर्षु वेदेषु परमहंसमार्गः दुष्करः ।",
        hindi: "भगवान प्रजापति (ब्रह्मा) ने कहा: 'चारों वेदों में, परमहंस का मार्ग अत्यंत दुष्कर (कठिन/दुर्लभ) है।'",
        english: "Lord Prajapati replied: 'In all the four Vedas, the path of the Paramahamsa is very difficult (rare).'",
        simpleExplanation: "EXTREMELY RARE: In all 4 Vedas, this path is the most difficult and rare to find!",
        simpleExplanationHindi: "अत्यंत दुर्लभ: चारों वेदों में, यह मार्ग सबसे कठिन और दुर्लभ है!",
        nanoBananaPrompt: "Brahma explaining that among all Vedic paths, the Paramahamsa path is the rarest.",
        wordMeanings: [
            { sanskrit: "duṣkara", devanagari: "दुष्कर", hindi: "कठिन/दुर्लभ", english: "difficult/rare" },
            { sanskrit: "caturṣu vedeṣu", devanagari: "चतुर्षु वेदेषु", hindi: "चारों वेदों में", english: "in the four Vedas" }
        ]
    },
    {
        id: 3,
        section: 1,
        verse: 3,
        theme: "One in Thousands",
        sanskrit: "स एको भवति । यद्येको भवति स एव नित्यपूतः स एव वेदपुरुषः इति विदुषो मन्यन्ते ।",
        hindi: "'हजारों में वह कोई एक ही होता है। यदि ऐसा कोई एक होता है, तो वही नित्य-पवित्र है; वही साक्षात वेद-पुरुष है—ऐसा विद्वान मानते हैं।'",
        english: "'There is perhaps only one such person. If there is such a one, he is the Ever-Pure; he is the Veda-Purusha (Embodiment of Knowledge)—thus think the wise.'",
        simpleExplanation: "ONE IN A MILLION: Maybe ONE such person exists. That one = Ever-Pure, Living Veda!",
        simpleExplanationHindi: "लाखों में एक: शायद ऐसा कोई एक ही हो। वही = नित्य-पवित्र, साक्षात् वेद!",
        nanoBananaPrompt: "A single radiant Paramahamsa among thousands, embodying the Vedas themselves.",
        wordMeanings: [
            { sanskrit: "nityapūta", devanagari: "नित्यपूत", hindi: "सदा पवित्र", english: "ever-pure" },
            { sanskrit: "vedapuruṣa", devanagari: "वेदपुरुष", hindi: "वेद स्वरूप", english: "embodiment of Vedas" }
        ]
    },
    {
        id: 4,
        section: 1,
        verse: 4,
        theme: "Mutual Abiding",
        sanskrit: "महापुरुषोऽयं नित्यं स्वमनो विश्राम्यति । मय्येव तस्थौ तस्मिंश्चाहं स्थितः ।",
        hindi: "'यह महापुरुष नित्य ही अपने मन में (आत्म-तत्व में) विश्राम करता है। वह मुझमें स्थित है, और मैं उसमें स्थित हूँ।'",
        english: "'This Great Being always rests in his own mind (Self). He abides in Me, and I abide in him.'",
        simpleExplanation: "MUTUAL INDWELLING: He rests in Self. He lives in God, God lives in him!",
        simpleExplanationHindi: "परस्पर निवास: वह आत्मा में विश्राम करता है। वह ईश्वर में, ईश्वर उसमें!",
        nanoBananaPrompt: "A Paramahamsa at rest in the Self, with God dwelling in him and he in God.",
        wordMeanings: [
            { sanskrit: "mahāpuruṣa", devanagari: "महापुरुष", hindi: "महान पुरुष", english: "great being" },
            { sanskrit: "viśrāmyati", devanagari: "विश्राम्यति", hindi: "विश्राम करता है", english: "rests" }
        ]
    },
    // Section 2: The Signs of Renunciation
    {
        id: 5,
        section: 2,
        verse: 1,
        theme: "Total Renunciation",
        sanskrit: "पुत्रमित्रकलत्रबन्धूंस्त्यक्त्वा शिखायज्ञोपवीतं त्यक्त्वा स्वाध्यायं च सर्वकर्माणि संन्यस्य ब्रह्माण्डे च हित्वा कौपीनं दण्डं आच्छादनं च स्वशरीरोपभोगार्थाय लोकस्य हितार्थाय परिग्रहेत् ।",
        hindi: "'उसे पुत्र, मित्र, पत्नी और बंधुओं को त्यागकर; शिखा और यज्ञोपवीत को त्यागकर; स्वाध्याय और सभी कर्मों का संन्यास करके—केवल शरीर रक्षा और लोक-हित के लिए कौपीन, दण्ड और आच्छादन ग्रहण करे।'",
        english: "'Having renounced sons, friends, wife, relatives; tuft and sacred thread; study and all rituals—he should accept loincloth, staff, and cloth only for body maintenance and world's good.'",
        simpleExplanation: "LEAVE EVERYTHING: Family, thread, tuft, rituals—ALL gone! Keep only loincloth, staff, cloth!",
        simpleExplanationHindi: "सब छोड़ो: परिवार, जनेऊ, चोटी, कर्मकांड—सब गया! केवल लंगोटी, दण्ड, वस्त्र!",
        nanoBananaPrompt: "A monk renouncing all—family, thread, tuft—keeping only loincloth, staff, and cloth.",
        wordMeanings: [
            { sanskrit: "kaupīna", devanagari: "कौपीन", hindi: "लंगोटी", english: "loincloth" },
            { sanskrit: "daṇḍa", devanagari: "दण्ड", hindi: "डंडा", english: "staff" }
        ]
    },
    {
        id: 6,
        section: 2,
        verse: 2,
        theme: "Even That Not Essential",
        sanskrit: "तच्च न मुख्योऽस्ति । यदयं परमहंसो नाम ।",
        hindi: "'और वह (दण्ड-कौपीन धारण करना) भी मुख्य नहीं है। यही परमहंस नाम का अर्थ है।'",
        english: "'Even that (staff/cloth) is not essential. This is the nature of the Paramahamsa.'",
        simpleExplanation: "BEYOND EVEN THAT: Even staff and cloth are not essential for a true Paramahamsa!",
        simpleExplanationHindi: "उससे भी परे: सच्चे परमहंस के लिए दण्ड और वस्त्र भी अनिवार्य नहीं!",
        nanoBananaPrompt: "A Paramahamsa transcending even the basic monk's possessions—completely free.",
        wordMeanings: [
            { sanskrit: "mukhya", devanagari: "मुख्य", hindi: "मुख्य/आवश्यक", english: "essential" }
        ]
    },
    {
        id: 7,
        section: 2,
        verse: 3,
        theme: "How to Renounce",
        sanskrit: "शिखायज्ञोपवीतमादिं सर्वं भूः स्वाहेत्यप्सु परित्यज्य आत्मानमन्विच्छेत् ।",
        hindi: "'शिखा, यज्ञोपवीत आदि सबको 'भूः स्वाहा' कहकर जल में त्याग दे और केवल आत्मा की खोज करे।'",
        english: "'Casting tuft, thread, and everything into water saying 'Bhuh Svaha', one should seek the Self alone.'",
        simpleExplanation: "THE RITUAL: Say 'Bhuh Svaha', throw everything in water, then SEEK THE SELF!",
        simpleExplanationHindi: "विधि: 'भूः स्वाहा' बोलो, सब जल में डालो, फिर केवल आत्मा खोजो!",
        nanoBananaPrompt: "A renunciate casting tuft and thread into water, then turning inward to seek the Self.",
        wordMeanings: [
            { sanskrit: "bhūḥ svāhā", devanagari: "भूः स्वाहा", hindi: "भूः स्वाहा (मंत्र)", english: "sacred utterance for offering" },
            { sanskrit: "ātmānam anvicched", devanagari: "आत्मानमन्विच्छेत्", hindi: "आत्मा खोजे", english: "seek the Self" }
        ]
    },
    {
        id: 8,
        section: 2,
        verse: 4,
        theme: "The Real Thread",
        sanskrit: "यत्सूत्रं सोऽयं परमहंसः । तत्सूत्रं विदुः ।",
        hindi: "'जो (ब्रह्म) सूत्र है, वही यह परमहंस है। ज्ञानी उसी को सूत्र जानते हैं।'",
        english: "'That (Brahman) which is the Sutra (Thread), that is the Paramahamsa. The wise know that as the true Thread.'",
        simpleExplanation: "THE REAL THREAD: Brahman itself is the true thread. Paramahamsa = that Brahman!",
        simpleExplanationHindi: "असली धागा: ब्रह्म ही सच्चा धागा है। परमहंस = वही ब्रह्म!",
        nanoBananaPrompt: "The invisible thread of Brahman connecting all, which the Paramahamsa embodies.",
        wordMeanings: [
            { sanskrit: "sūtra", devanagari: "सूत्र", hindi: "धागा/सूत्र", english: "thread/sutra" }
        ]
    },
    {
        id: 9,
        section: 2,
        verse: 5,
        theme: "The Internal Thread",
        sanskrit: "येन सर्वमिदं प्रोतं सूत्रे मणिगणा इव । तत्सूत्रं धारयेद्योगी योगवित्तत्त्वदर्शिवान् ॥",
        hindi: "'जैसे धागे में मणियों पिरोई होती हैं, वैसे ही जिसमें यह सारा जगत पिरोया है—उसी सूत्र को योगी धारण करे।'",
        english: "'Just as gems are strung on a thread, so is this universe strung on That. The Yogi who perceives Truth should wear That Thread.'",
        simpleExplanation: "GEMS ON A THREAD: Universe is strung on Brahman like gems on thread. THAT is the real thread!",
        simpleExplanationHindi: "धागे पर मणियां: जैसे मणियां धागे पर, वैसे ब्रह्मांड ब्रह्म पर। वही असली धागा!",
        nanoBananaPrompt: "The universe as gems strung on the invisible thread of Brahman.",
        wordMeanings: [
            { sanskrit: "maṇigaṇā", devanagari: "मणिगणा", hindi: "मणियों का समूह", english: "clusters of gems" },
            { sanskrit: "prota", devanagari: "प्रोत", hindi: "पिरोया हुआ", english: "strung" }
        ]
    },
    {
        id: 10,
        section: 2,
        verse: 6,
        theme: "Brahman-Consciousness Thread",
        sanskrit: "बहिःसूत्रं त्यजेद्विद्वान् योगमुत्तममास्थितः । ब्रह्मभावमयं सूत्रं धारयेद्यः स चेतनः ॥",
        hindi: "'उत्तम योग में स्थित विद्वान बाहरी धागे को त्याग दे। जो ब्रह्म-भाव रूपी सूत्र धारण करता है, वही चेतन है।'",
        english: "'The wise in highest Yoga should cast away the external thread. He who wears the Thread of Brahman-Consciousness is truly conscious.'",
        simpleExplanation: "INNER THREAD: Cast off external thread! Wear the thread of BRAHMAN-CONSCIOUSNESS!",
        simpleExplanationHindi: "आंतरिक धागा: बाहरी धागा छोड़ो! ब्रह्म-चेतना का धागा पहनो!",
        nanoBananaPrompt: "A yogi discarding the external thread, wearing the invisible thread of Brahman-consciousness.",
        wordMeanings: [
            { sanskrit: "brahmabhāvamaya", devanagari: "ब्रह्मभावमय", hindi: "ब्रह्म-भाव से युक्त", english: "of Brahman-consciousness" },
            { sanskrit: "cetana", devanagari: "चेतन", hindi: "जागृत", english: "conscious/awake" }
        ]
    },
    {
        id: 11,
        section: 2,
        verse: 7,
        theme: "Never Impure",
        sanskrit: "धारणात्तस्य सूत्रस्य नोच्छिष्टो नाशुचिर्भवेत् । सूत्रमन्तर्गतं येषां ज्ञानयज्ञोपवीतिनाम् ॥",
        hindi: "'उस सूत्र को धारण करने से न कभी जूठा होता है और न अपवित्र। जिनका सूत्र भीतर है, वे सच्चे ज्ञान-यज्ञोपवीत वाले हैं।'",
        english: "'By holding that Thread, one never becomes unclean or impure. Those whose Thread is internal are true wearers of the Knowledge-Thread.'",
        simpleExplanation: "ETERNAL PURITY: With inner thread, never impure! Internal thread = true sacred thread!",
        simpleExplanationHindi: "शाश्वत पवित्रता: आंतरिक धागे से कभी अशुद्ध नहीं! आंतरिक धागा = सच्चा जनेऊ!",
        nanoBananaPrompt: "A sage with the internal thread of knowledge, eternally pure and beyond contamination.",
        wordMeanings: [
            { sanskrit: "ucchiṣṭa", devanagari: "उच्छिष्ट", hindi: "जूठा", english: "leftover/unclean" },
            { sanskrit: "jñānayajñopavīta", devanagari: "ज्ञानयज्ञोपवीत", hindi: "ज्ञान का जनेऊ", english: "thread of knowledge" }
        ]
    },
    {
        id: 12,
        section: 2,
        verse: 8,
        theme: "Knowledge as Everything",
        sanskrit: "ज्ञानशिखा ज्ञाननिष्ठा ज्ञानयज्ञोपवीतिनः । ज्ञानमेव परं तेषां पवित्रं ज्ञानमुच्यते ॥",
        hindi: "'जिनकी शिखा ज्ञान है, निष्ठा ज्ञान है, यज्ञोपवीत ज्ञान है—उनके लिए ज्ञान ही परम पवित्रता है।'",
        english: "'Those whose Tuft is Knowledge, Dedication is Knowledge, Thread is Knowledge—for them, Knowledge alone is supreme purity.'",
        simpleExplanation: "KNOWLEDGE IS ALL: Tuft=Knowledge, Dedication=Knowledge, Thread=Knowledge = PURE!",
        simpleExplanationHindi: "ज्ञान ही सब: चोटी=ज्ञान, निष्ठा=ज्ञान, जनेऊ=ज्ञान = पवित्र!",
        nanoBananaPrompt: "A knower whose tuft, dedication, and thread are all made of pure knowledge.",
        wordMeanings: [
            { sanskrit: "jñānaśikhā", devanagari: "ज्ञानशिखा", hindi: "ज्ञान रूपी चोटी", english: "tuft of knowledge" },
            { sanskrit: "jñānaniṣṭhā", devanagari: "ज्ञाननिष्ठा", hindi: "ज्ञान में निष्ठा", english: "dedication to knowledge" }
        ]
    },
    {
        id: 13,
        section: 2,
        verse: 9,
        theme: "True Shikhi",
        sanskrit: "अग्नेरिव शिखा नान्या यस्य ज्ञानमयी शिखा । स शिखीत्युच्यते विद्वान् नेतरे केशधारिणः ॥",
        hindi: "'जैसे अग्नि की शिखा अग्नि से अलग नहीं, वैसे ही जिसकी शिखा ज्ञानमयी है, वही 'शिखी' है। बाकी तो केवल केश धारी हैं।'",
        english: "'Just as flame is not different from fire, he whose Tuft is Knowledge is called 'Shikhi'. Others are merely hair-growers.'",
        simpleExplanation: "REAL VS FAKE: Knowledge-tuft = true Shikhi. Others just grow hair!",
        simpleExplanationHindi: "असली बनाम नकली: ज्ञान-चोटी = सच्चा शिखी। बाकी बस बाल बढ़ाते हैं!",
        nanoBananaPrompt: "A flame-like tuft of knowledge versus mere physical hair—the true vs false shikhi.",
        wordMeanings: [
            { sanskrit: "śikhī", devanagari: "शिखी", hindi: "चोटी वाला", english: "one with tuft" },
            { sanskrit: "keśadhāriṇa", devanagari: "केशधारिण", hindi: "बाल धारी", english: "hair-grower" }
        ]
    },
    {
        id: 14,
        section: 2,
        verse: 10,
        theme: "External for Ritualists",
        sanskrit: "कर्मण्यधिकृता ये तु वैदिके ब्राह्मणादयः । तैर्धार्यं वै बहिःसूत्रं क्रियाङ्गत्वेन तत्स्मृतम् ॥",
        hindi: "'परन्तु जो ब्राह्मण आदि वैदिक कर्मकांडों में अधिकृत हैं, उन्हें बाहरी सूत्र धारण करना चाहिए।'",
        english: "'However, Brahmins who are authorized for Vedic rituals must wear the external thread as part of their rites.'",
        simpleExplanation: "FOR RITUALISTS: Those doing Vedic rituals MUST wear external thread. Different path!",
        simpleExplanationHindi: "कर्मकांडियों के लिए: वैदिक कर्म करने वालों को बाहरी जनेऊ जरूरी। अलग मार्ग!",
        nanoBananaPrompt: "A distinction: ritualists wearing external thread vs Paramahamsas with inner thread.",
        wordMeanings: [
            { sanskrit: "bahiḥsūtra", devanagari: "बहिःसूत्र", hindi: "बाहरी धागा", english: "external thread" },
            { sanskrit: "kriyāṅga", devanagari: "क्रियाङ्ग", hindi: "क्रिया का अंग", english: "part of rites" }
        ]
    },
    {
        id: 15,
        section: 2,
        verse: 11,
        theme: "Complete Brahminhood",
        sanskrit: "शिखा ज्ञानमयी यस्य उपवीतं च तन्मयम् । ब्राह्मण्यं सकलं तस्य इति ब्रह्मविदो विदुः ॥",
        hindi: "'जिसकी शिखा ज्ञानमयी है और उपवीत भी ज्ञानस्वरूप है—उसी का ब्राह्मणत्व पूर्ण है।'",
        english: "'He whose Tuft is Knowledge and Thread is Knowledge—his Brahminhood is complete. Thus declare the Knowers of Brahman.'",
        simpleExplanation: "COMPLETE BRAHMIN: Knowledge-tuft + Knowledge-thread = COMPLETE Brahminhood!",
        simpleExplanationHindi: "पूर्ण ब्राह्मण: ज्ञान-चोटी + ज्ञान-जनेऊ = पूर्ण ब्राह्मणत्व!",
        nanoBananaPrompt: "A Brahmin complete in knowledge, whose tuft and thread are both made of wisdom.",
        wordMeanings: [
            { sanskrit: "brāhmaṇya", devanagari: "ब्राह्मण्य", hindi: "ब्राह्मणत्व", english: "Brahminhood" },
            { sanskrit: "sakala", devanagari: "सकल", hindi: "पूर्ण", english: "complete" }
        ]
    },
    // Section 3: The Danger of Ignorance
    {
        id: 16,
        section: 3,
        verse: 1,
        theme: "The Staff of Knowledge",
        sanskrit: "एकदण्डी सन्न्यासयोगरतः स्यात् । ज्ञानदण्डो धृतो येन एकदण्डि स उच्यते ।",
        hindi: "'वह एकदण्डी होकर संन्यास-योग में लीन रहे। जिसने ज्ञान रूपी दण्ड धारण किया है, वही सच्चा एकदण्डी है।'",
        english: "'Being an Ekadandi, he should be intent on Renunciation-Yoga. He who holds the Staff of Knowledge is the true Ekadandi.'",
        simpleExplanation: "TRUE STAFF: The real one-staff monk holds the STAFF OF KNOWLEDGE, not wood!",
        simpleExplanationHindi: "सच्चा दण्ड: असली एकदण्डी ज्ञान का दण्ड धारण करता है, लकड़ी नहीं!",
        nanoBananaPrompt: "A true Ekadandi monk holding the glowing Staff of Knowledge instead of wood.",
        wordMeanings: [
            { sanskrit: "jñānadaṇḍa", devanagari: "ज्ञानदण्ड", hindi: "ज्ञान का दण्ड", english: "staff of knowledge" },
            { sanskrit: "ekadaṇḍī", devanagari: "एकदण्डी", hindi: "एक दण्ड वाला", english: "one-staffed monk" }
        ]
    },
    {
        id: 17,
        section: 3,
        verse: 2,
        theme: "Warning - Wooden Staff",
        sanskrit: "काष्ठदण्डो धृतो येन सर्वाशी ज्ञानवर्जितः । स याति नरकान् घोरान् महारौरवसंज्ञकान् ॥",
        hindi: "'जो ज्ञान से रहित और संयमहीन है, यदि वह केवल लकड़ी का डंडा धारण करता है, तो वह महारौरव नरक में जाता है।'",
        english: "'He who is devoid of knowledge and lacks control, if he holds only a wooden staff, he goes to the terrible hells called Maharaurava.'",
        simpleExplanation: "WARNING: Wooden staff + no knowledge + no control = HELL!",
        simpleExplanationHindi: "चेतावनी: लकड़ी का डंडा + ज्ञान नहीं + संयम नहीं = नरक!",
        nanoBananaPrompt: "Warning: a false monk with only wooden staff and no knowledge falling into hell.",
        wordMeanings: [
            { sanskrit: "kāṣṭhadaṇḍa", devanagari: "काष्ठदण्ड", hindi: "लकड़ी का डंडा", english: "wooden staff" },
            { sanskrit: "mahāraurava", devanagari: "महारौरव", hindi: "घोर नरक", english: "terrible hell" }
        ]
    },
    {
        id: 18,
        section: 3,
        verse: 3,
        theme: "Knowing the Difference",
        sanskrit: "इदमन्तरं ज्ञात्त्वा स परमहंसः ।",
        hindi: "'इस अंतर को जानकर ही वह परमहंस होता है।'",
        english: "'Knowing this difference, he becomes a Paramahamsa.'",
        simpleExplanation: "THE KEY: Know the difference between wood and knowledge = become Paramahamsa!",
        simpleExplanationHindi: "कुंजी: लकड़ी और ज्ञान का अंतर जानो = परमहंस बनो!",
        nanoBananaPrompt: "The crucial distinction between external symbols and inner knowledge.",
        wordMeanings: [
            { sanskrit: "antara", devanagari: "अन्तर", hindi: "अंतर/भेद", english: "difference" }
        ]
    },
    // Section 4: The State of the Digambara
    {
        id: 19,
        section: 4,
        verse: 1,
        theme: "Sky-Clad and Beyond",
        sanskrit: "आशांबरधरो न शीत न चोष्णं न सुखं न दुःखं न मानावमाने च षडूर्मिवर्जितः । निन्दागर्हप्रतिष्ठासूयामत्सरदम्भदर्पेच्छाद्वेषकामक्रोधलोभमोहर्षासूयाहङ्कारादींश्च हित्वा स्ववपुः कुणपमिव दृश्यते ।",
        hindi: "'वह दिगम्बर हो जाता है। उसे न सर्दी, न गर्मी; न सुख, न दुख; न मान, न अपमान। वह छह उर्मियों से रहित है। निंदा, घृणा, प्रतिष्ठा, ईर्ष्या, दम्भ, काम, क्रोध, लोभ, मोह, अहंकार—सब त्यागकर, वह अपने शरीर को शव के समान देखता है।'",
        english: "'He becomes Sky-clad. He feels neither cold nor heat, pleasure nor pain, honor nor dishonor. Free from six waves, giving up slander, pride, lust, anger, greed, delusion, ego—he regards his body as a corpse.'",
        simpleExplanation: "ULTIMATE STATE: Sky-clad, beyond pairs of opposites, body seen as dead! Free from 16+ mental poisons!",
        simpleExplanationHindi: "परम अवस्था: दिगम्बर, द्वंद्वों से परे, शरीर = शव! 16+ मानसिक विषों से मुक्त!",
        nanoBananaPrompt: "A sky-clad Paramahamsa beyond all dualities, seeing his body as a mere corpse.",
        wordMeanings: [
            { sanskrit: "āśāṃbaradhara", devanagari: "आशांबरधर", hindi: "दिशाओं को वस्त्र मानने वाला", english: "sky-clad" },
            { sanskrit: "ṣaḍūrmi", devanagari: "षडूर्मि", hindi: "छह तरंगें", english: "six waves (hunger, thirst, grief, delusion, age, death)" },
            { sanskrit: "kuṇapa", devanagari: "कुणप", hindi: "शव", english: "corpse" }
        ]
    },
    {
        id: 20,
        section: 4,
        verse: 2,
        theme: "I Am Brahman",
        sanskrit: "संशयं विपरीतो वा मिथ्याज्ञानं च त्यक्त्वा नित्यबुद्धः नित्यशुद्धः नित्यमुक्तः सत्यधर्मः परमानन्दः... अहमेव ब्रह्मेति विज्ञायाहं ब्रह्मेत्येवावस्थितः । कृतकृत्यो भवति ।",
        hindi: "'वह संशय, विपरीत भावना और मिथ्या-ज्ञान त्यागकर, नित्य-बुद्ध, नित्य-शुद्ध, नित्य-मुक्त हो जाता है... 'मैं ही ब्रह्म हूँ' जानकर, वह उसी भाव में स्थित रहता है। वह कृतकृत्य हो जाता है।'",
        english: "'Abandoning doubt and false knowledge, he becomes Eternally Awakened, Pure, Free... Realizing 'I alone am Brahman', he remains as 'I am Brahman'. He becomes fulfilled.'",
        simpleExplanation: "REALIZATION: No doubt, no false knowledge. 'I AM BRAHMAN!' = Mission accomplished!",
        simpleExplanationHindi: "साक्षात्कार: कोई संशय नहीं, मिथ्या ज्ञान नहीं। 'मैं ब्रह्म हूँ!' = कार्य सिद्ध!",
        nanoBananaPrompt: "A realized Paramahamsa established in 'I am Brahman', completely fulfilled.",
        wordMeanings: [
            { sanskrit: "nityabuddha", devanagari: "नित्यबुद्ध", hindi: "सदा जागृत", english: "eternally awakened" },
            { sanskrit: "kṛtakṛtya", devanagari: "कृतकृत्य", hindi: "जिसका कार्य पूर्ण हुआ", english: "fulfilled" }
        ]
    },
    {
        id: 21,
        section: 4,
        verse: 3,
        theme: "He Is the Paramahamsa",
        sanskrit: "मय्येव मनस्तस्थौ तस्मिंश्चाहं स्थितः । स एव परमहंसः ।",
        hindi: "'उसका मन मुझमें स्थिर है, और मैं उसमें स्थित हूँ। वही परमहंस है।'",
        english: "'His mind stays in Me alone, and I stay in him. He alone is the Paramahamsa.'",
        simpleExplanation: "THE DEFINITION: Mind in God, God in him = PARAMAHAMSA!",
        simpleExplanationHindi: "परिभाषा: मन ईश्वर में, ईश्वर उसमें = परमहंस!",
        nanoBananaPrompt: "The mutual indwelling—Paramahamsa's mind in God, God in Paramahamsa.",
        wordMeanings: [
            { sanskrit: "manas tasthau", devanagari: "मनस्तस्थौ", hindi: "मन स्थिर है", english: "mind stays" }
        ]
    },
    {
        id: 22,
        section: 4,
        verse: 4,
        theme: "Conclusion",
        sanskrit: "इत्युपनिषत् ॥",
        hindi: "यही उपनिषद है।",
        english: "Thus ends the Upanishad.",
        simpleExplanation: "THE END: This is the secret teaching of the Supreme Swans!",
        simpleExplanationHindi: "समाप्त: यही परमहंसों की गुप्त शिक्षा है!",
        nanoBananaPrompt: "The sacred teaching of the Paramahamsas complete, the highest wisdom revealed.",
        wordMeanings: [
            { sanskrit: "upaniṣat", devanagari: "उपनिषत्", hindi: "गुप्त ज्ञान", english: "secret teaching" }
        ]
    }
];

export const PARAMAHAMSA_METADATA = {
    id: "paramahamsa",
    name: "Paramahamsa",
    nameSanskrit: "परमहंसोपनिषद्",
    veda: "Shukla Yajur Veda",
    category: "Sannyasa",
    shlokaCount: 22,
    sectionCount: 4,
    sequenceNumber: 19,
    meaning: "The Supreme Swans - Highest Class of Monks",
    keyTeachings: [
        "Paramahamsa path is the rarest in all 4 Vedas",
        "Maybe ONE such person exists in the world",
        "The true thread is Brahman itself, not cotton",
        "Knowledge-tuft, Knowledge-thread, Knowledge-staff",
        "External thread for ritualists, internal for Paramahamsas",
        "Wooden staff without knowledge = Hell",
        "Sky-clad, beyond all dualities",
        "Body seen as corpse, Self as Brahman",
        "Mind in God, God in him = Paramahamsa"
    ],
    famousVerses: {
        oneInThousands: { id: 3, section: 1, verse: 3 },
        innerThread: { id: 9, section: 2, verse: 5 },
        jnanaShikha: { id: 12, section: 2, verse: 8 },
        warning: { id: 17, section: 3, verse: 2 },
        ahamBrahma: { id: 20, section: 4, verse: 2 }
    }
};
