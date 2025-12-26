// Jabala Upanishad Data (#13 in Muktika Canon)
// Source: Shukla Yajur Veda | Category: Sannyasa
// Theme: Avimukta (Ajna Chakra), Atura Sannyasa (Emergency Renunciation), Paramahamsa
// Total: 6 Khandas with ~20 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface JabalaDataEntry {
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

export const JABALA_SHLOKAS: JabalaDataEntry[] = [
    // INVOCATION
    {
        id: 0,
        khanda: 0,
        mantra: "Shanti",
        theme: "Purnamadah (Fullness)",
        sanskrit: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
        hindi: "ॐ! वह (परब्रह्म) पूर्ण है। यह (कार्यब्रह्म/जगत) भी पूर्ण है। पूर्ण से ही पूर्ण की उत्पत्ति होती है। पूर्ण में से पूर्ण को निकाल लेने पर भी पूर्ण ही शेष रहता है। ॐ शांति, शांति, शांति।",
        english: "OM! That (Brahman) is Whole. This (Universe) is Whole. From the Whole emerges the Whole. When the Whole is taken from the Whole, the Whole alone remains. OM Peace, Peace, Peace.",
        simpleExplanation: "INFINITY MATH: ∞ - ∞ = ∞! God is FULL. Creation comes from God. But God remains FULL!",
        simpleExplanationHindi: "अनंत गणित: ∞ - ∞ = ∞! ईश्वर पूर्ण है। सृष्टि ईश्वर से आती है। फिर भी ईश्वर पूर्ण रहता है!",
        nanoBananaPrompt: "Infinite wholeness, from which infinite wholeness emerges, yet remains infinite.",
        wordMeanings: [
            { sanskrit: "pūrṇam", devanagari: "पूर्णम्", hindi: "पूर्ण", english: "whole/full" },
            { sanskrit: "avaśiṣyate", devanagari: "अवशिष्यते", hindi: "शेष रहता है", english: "remains" }
        ]
    },

    // KHANDA 1: THE SEAT OF BRAHMAN (AVIMUKTA)
    {
        id: 1,
        khanda: 1,
        mantra: "1.1",
        theme: "Brihaspati's Question",
        sanskrit: "ॐ बृहस्पतिरुवाच याज्ञवल्क्यं यदनु कुरुक्षेत्रं देवानां देवयजनं सर्वेषां भूतानां ब्रह्मसदनम् ।",
        hindi: "ॐ। (ऋषि) बृहस्पति ने याज्ञवल्क्य से पूछा: 'वह कुरुक्षेत्र कौन सा है जो देवताओं का यज्ञ-स्थल है और सभी प्राणियों के लिए ब्रह्म का निवास स्थान है?'",
        english: "OM. Brihaspati asked Yajnavalkya: 'Which is that Kurukshetra that is the place of sacrifice for the gods and the abode of Brahman for all beings?'",
        simpleExplanation: "THE QUESTION: Where is the REAL Kurukshetra—the true holy battlefield where gods worship?",
        simpleExplanationHindi: "प्रश्न: असली कुरुक्षेत्र कहाँ है—वह पवित्र रणभूमि जहाँ देवता पूजा करते हैं?",
        nanoBananaPrompt: "Sage Brihaspati asking Yajnavalkya about the true Kurukshetra.",
        wordMeanings: [
            { sanskrit: "kurukṣetra", devanagari: "कुरुक्षेत्र", hindi: "कुरुक्षेत्र", english: "field of Kurus" },
            { sanskrit: "brahmasadana", devanagari: "ब्रह्मसदनम्", hindi: "ब्रह्म का निवास", english: "abode of Brahman" }
        ]
    },
    {
        id: 2,
        khanda: 1,
        mantra: "1.2",
        theme: "Avimukta is Kurukshetra",
        sanskrit: "अविमुक्तं वै कुरुक्षेत्रं देवानां देवयजनं सर्वेषां भूतानां ब्रह्मसदनम् ।",
        hindi: "(याज्ञवल्क्य ने उत्तर दिया): 'अविमुक्त (Avimukta) ही कुरुक्षेत्र है, वही देवताओं का यज्ञ-स्थल है और सभी प्राणियों के लिए ब्रह्म का सदन है।'",
        english: "(Yajnavalkya replied): 'The Avimukta (The Never-Forsaken) is indeed the Kurukshetra, the place of sacrifice for the gods and the abode of Brahman for all beings.'",
        simpleExplanation: "THE ANSWER: AVIMUKTA is the real Kurukshetra! The 'Never-Forsaken' point where God always dwells!",
        simpleExplanationHindi: "उत्तर: अविमुक्त ही असली कुरुक्षेत्र है! वह 'कभी न छोड़ा जाने वाला' बिंदु जहाँ ईश्वर सदा रहता है!",
        nanoBananaPrompt: "The Avimukta point glowing as the true Kurukshetra within the body.",
        wordMeanings: [
            { sanskrit: "avimukta", devanagari: "अविमुक्त", hindi: "कभी न छोड़ा जाने वाला", english: "never forsaken" }
        ]
    },
    {
        id: 3,
        khanda: 1,
        mantra: "1.3",
        theme: "Carry Avimukta Everywhere",
        sanskrit: "तस्माद्यत्र क्वचन गच्छति तदेव मन्येत तदेतदविमुक्तं वै कुरुक्षेत्रं देवानां देवयजनं सर्वेषां भूतानां ब्रह्मसदनम् ।",
        hindi: "इसलिए, (साधक) जहाँ कहीं भी जाए, उसे यही मानना चाहिए कि 'यह अविमुक्त ही है, यही कुरुक्षेत्र है, यही देवताओं का यज्ञ-स्थल है और यही ब्रह्म का सदन है।'",
        english: "Therefore, wherever one goes, one should think: 'This is indeed the Avimukta, this is Kurukshetra, this is the place of sacrifice for the gods, and this is the abode of Brahman.'",
        simpleExplanation: "PORTABLE HOLY LAND: Wherever you go, THAT place is Avimukta! You carry the sacred field within you!",
        simpleExplanationHindi: "पोर्टेबल पवित्र भूमि: जहाँ भी जाओ, वही अविमुक्त है! तुम पवित्र क्षेत्र अपने साथ ले जाते हो!",
        nanoBananaPrompt: "A yogi walking through different lands, each becoming Kurukshetra around him.",
        wordMeanings: [
            { sanskrit: "yatra kvacana", devanagari: "यत्र क्वचन", hindi: "जहाँ कहीं भी", english: "wherever" }
        ]
    },
    {
        id: 4,
        khanda: 1,
        mantra: "1.4",
        theme: "Rudra Gives Taraka Mantra",
        sanskrit: "अत्र हि जन्तोः प्राणेषूत्क्रममाणेषु रुद्रस्तारकं ब्रह्म व्याचष्टे येनासावमृतीभूत्वा मोक्षीभवति ।",
        hindi: "यहाँ (इस अविमुक्त क्षेत्र में), जब प्राणी के प्राण निकल रहे होते हैं, तब रुद्र उसे तारक-ब्रह्म (राम मंत्र/ओंकार) का उपदेश देते हैं, जिससे वह अमर होकर मुक्त हो जाता है।",
        english: "For here, when the life-breaths of a living being are departing, Rudra imparts the Taraka Brahman (the delivering mantra), by which one becomes immortal and liberated.",
        simpleExplanation: "DEATHBED LIBERATION: At this sacred point, when you're dying, SHIVA HIMSELF whispers the liberation mantra!",
        simpleExplanationHindi: "मृत्युशय्या मुक्ति: इस पवित्र बिंदु पर, जब तुम मर रहे हो, शिव स्वयं मुक्ति मंत्र फुसफुसाते हैं!",
        nanoBananaPrompt: "Rudra/Shiva whispering the Taraka mantra into the ear of a dying person at Avimukta.",
        wordMeanings: [
            { sanskrit: "tāraka brahma", devanagari: "तारक ब्रह्म", hindi: "मुक्ति देने वाला ब्रह्म", english: "delivering Brahman/mantra" },
            { sanskrit: "mokṣī bhavati", devanagari: "मोक्षीभवति", hindi: "मुक्त हो जाता है", english: "becomes liberated" }
        ]
    },
    {
        id: 5,
        khanda: 1,
        mantra: "1.5",
        theme: "Never Leave Avimukta",
        sanskrit: "तस्मादविमुक्तमेव निषेवेत अविमुक्तं न विमुञ्चेदेतदेवमेवैतद् याज्ञवल्क्यः ॥",
        hindi: "इसलिए (साधक को) अविमुक्त का ही सेवन (वास) करना चाहिए; अविमुक्त को कभी नहीं छोड़ना चाहिए। याज्ञवल्क्य का यही मत है।",
        english: "Therefore, one should reside only in the Avimukta; one should never forsake the Avimukta. This is indeed so, said Yajnavalkya.",
        simpleExplanation: "STAY THERE: Dwell in Avimukta always. Never abandon it. This is Yajnavalkya's final word!",
        simpleExplanationHindi: "वहीं रहो: अविमुक्त में सदा निवास करो। कभी मत छोड़ो। यह याज्ञवल्क्य का अंतिम वचन है!",
        nanoBananaPrompt: "A yogi permanently established in the Avimukta point, never leaving.",
        wordMeanings: [
            { sanskrit: "niṣeveta", devanagari: "निषेवेत", hindi: "सेवन करे", english: "should reside in" },
            { sanskrit: "na vimuñcet", devanagari: "न विमुञ्चेत्", hindi: "न छोड़े", english: "should not forsake" }
        ]
    },

    // KHANDA 2: LOCATION OF AVIMUKTA (VARANASI/AJNA)
    {
        id: 6,
        khanda: 2,
        mantra: "2.1",
        theme: "Atri's Question",
        sanskrit: "अथ हैनमत्रिरुपस्पृश्य पप्रच्छ याज्ञवल्क्यं यदेषोऽनन्तोऽव्यक्त आत्मा तं कथमहं विजानीयामिति ।",
        hindi: "इसके बाद अत्रि ने याज्ञवल्क्य के पास जाकर पूछा: 'यह जो अनंत और अव्यक्त आत्मा है, उसे मैं कैसे जानूँ?'",
        english: "Then Sage Atri approached Yajnavalkya and asked: 'This Infinite, Unmanifest Self—how may I know Him?'",
        simpleExplanation: "THE SEEKER'S QUESTION: How do I know the Infinite, Invisible Self?",
        simpleExplanationHindi: "साधक का प्रश्न: मैं अनंत, अदृश्य आत्मा को कैसे जानूँ?",
        nanoBananaPrompt: "Sage Atri asking how to know the infinite invisible Self.",
        wordMeanings: [
            { sanskrit: "ananta", devanagari: "अनन्त", hindi: "अनंत", english: "infinite" },
            { sanskrit: "avyakta", devanagari: "अव्यक्त", hindi: "अव्यक्त", english: "unmanifest" }
        ]
    },
    {
        id: 7,
        khanda: 2,
        mantra: "2.2-2.3",
        theme: "Between Varana and Nasi",
        sanskrit: "स होवाच याज्ञवल्क्यः सोऽविमुक्ते प्रतिष्ठित इति । कस्मिन् प्रतिष्ठित इति । वरणायां नास्यां च मध्ये प्रतिष्ठित इति ।",
        hindi: "याज्ञवल्क्य ने कहा: 'वह (अनंत आत्मा) अविमुक्त में प्रतिष्ठित (स्थित) है।' (अत्रि): 'वह (अविमुक्त) कहाँ स्थित है?' (याज्ञवल्क्य): 'वह वरणा और नासी के मध्य में स्थित है।'",
        english: "Yajnavalkya said: 'He is established in the Avimukta.' (Atri): 'Where is that (Avimukta) established?' (Yajnavalkya): 'It is established between Varana and Nasi.'",
        simpleExplanation: "THE LOCATION: Self is at Avimukta, which is between 'Varana' and 'Nasi'—two mystical rivers!",
        simpleExplanationHindi: "स्थान: आत्मा अविमुक्त में है, जो 'वरणा' और 'नासी' के बीच है—दो रहस्यमय नदियाँ!",
        nanoBananaPrompt: "The point between Varana and Nasi rivers, representing the sacred junction.",
        wordMeanings: [
            { sanskrit: "varaṇā", devanagari: "वरणा", hindi: "वरणा नदी", english: "river Varana" },
            { sanskrit: "nāsī", devanagari: "नासी", hindi: "नासी नदी", english: "river Nasi" }
        ]
    },
    {
        id: 8,
        khanda: 2,
        mantra: "2.4-2.5",
        theme: "Etymology of Varana-Nasi",
        sanskrit: "का वै वरणा का च नासीति । सर्वानिन्द्रियकृतान् दोषान् वारयतीति सा वरणा भवति । सर्वानिन्द्रियकृतान् पापान् नाशयतीति सा नासी भवतीति ।",
        hindi: "(अत्रि): 'वरणा क्या है और नासी क्या है?' (याज्ञवल्क्य): 'जो इन्द्रियों द्वारा किए गए सभी दोषों का निवारण करती है, वह वरणा है। जो इन्द्रियों द्वारा किए गए सभी पापों का नाश करती है, वह नासी है।'",
        english: "(Atri): 'What is Varana and what is Nasi?' (Yajnavalkya): 'That which wards off (Varayati) all faults committed by the senses is called Varana. That which destroys (Nashayati) all sins committed by the senses is called Nasi.'",
        simpleExplanation: "ETYMOLOGY: Varana = that which WARDS OFF faults. Nasi = that which DESTROYS sins. Together = VARANASI!",
        simpleExplanationHindi: "व्युत्पत्ति: वरणा = जो दोष रोकती है। नासी = जो पाप नष्ट करती है। मिलकर = वाराणसी!",
        nanoBananaPrompt: "Two rivers: Varana warding off faults, Nasi destroying sins, meeting at Varanasi.",
        wordMeanings: [
            { sanskrit: "vārayati", devanagari: "वारयति", hindi: "रोकती है", english: "wards off" },
            { sanskrit: "nāśayati", devanagari: "नाशयति", hindi: "नष्ट करती है", english: "destroys" }
        ]
    },
    {
        id: 9,
        khanda: 2,
        mantra: "2.6",
        theme: "The Ajna Chakra",
        sanskrit: "कतमच्चैतस्य स्थानं भवतीति । भ्रुवोर्घ्राणस्य च यः सन्धिः स एष द्यौर्लोकस्य परस्य च सन्धिर्भवतीति ।",
        hindi: "(अत्रि): 'उसका (शरीर में) स्थान कौन सा है?' (याज्ञवल्क्य): 'भौं (Eyebrows) और नाक (Nose) का जो संधि-स्थल (Junction) है—वही वह स्थान है। यह ही द्युलोक (Heaven) और परलोक (Supreme World) की संधि है।'",
        english: "(Atri): 'What is the location of this place?' (Yajnavalkya): 'The junction of the Eyebrows and the Nose—that is the place. It is the junction of the heavenly world and the supreme world.'",
        simpleExplanation: "THE THIRD EYE: The junction of eyebrows and nose = AJNA CHAKRA = Gateway between physical and spiritual worlds!",
        simpleExplanationHindi: "तीसरी आँख: भौंहों और नाक का मिलन = आज्ञा चक्र = भौतिक और आध्यात्मिक लोकों के बीच द्वार!",
        nanoBananaPrompt: "The junction between eyebrows glowing as a gateway between heaven and the supreme realm.",
        wordMeanings: [
            { sanskrit: "bhruvoḥ ghrāṇasya sandhiḥ", devanagari: "भ्रुवोर्घ्राणस्य सन्धिः", hindi: "भौं और नाक का जोड़", english: "junction of eyebrows and nose" },
            { sanskrit: "dyuloka", devanagari: "द्यौर्लोक", hindi: "स्वर्गलोक", english: "heavenly world" }
        ]
    },
    {
        id: 10,
        khanda: 2,
        mantra: "2.7-2.8",
        theme: "Worship the Junction",
        sanskrit: "एतद्वै सन्धिं सन्ध्यां ब्रह्मविद उपासत इति सोऽविमुक्त उपासितव्य इति । सोऽविमुक्तं ज्ञानमाचष्टे यो वैतदेवं वेद ॥",
        hindi: "'ब्रह्मज्ञानी इसी संधि को संध्या मानकर उपासना करते हैं। उस अविमुक्त की ही उपासना करनी चाहिए।' 'वह (अविमुक्त) उस ज्ञान को प्रकट करता है। जो इसे इस प्रकार जानता है (वह मुक्त है)।'",
        english: "'The knowers of Brahman worship this junction as the Sandhya. One should worship this Avimukta.' 'That Avimukta reveals this Knowledge. He who knows this thus (is liberated).'",
        simpleExplanation: "SANDHYA = THIRD EYE: Real Sandhya worship is meditation at the Ajna! Know this = Liberation!",
        simpleExplanationHindi: "संध्या = तीसरी आँख: असली संध्या उपासना आज्ञा पर ध्यान है! इसे जानो = मुक्ति!",
        nanoBananaPrompt: "A sage meditating at the third eye point, worshipping the true Sandhya.",
        wordMeanings: [
            { sanskrit: "sandhyā", devanagari: "सन्ध्या", hindi: "संध्या/जोड़", english: "junction/twilight worship" },
            { sanskrit: "upāsitavya", devanagari: "उपासितव्य", hindi: "उपासना योग्य", english: "to be worshipped" }
        ]
    },

    // KHANDA 3: THE MANTRA FOR IMMORTALITY
    {
        id: 11,
        khanda: 3,
        mantra: "3.1",
        theme: "Students Ask",
        sanskrit: "अथ हैनं ब्रह्मचारिण ऊचुः । किं जप्येन अमृतत्वमश्नुत इति ।",
        hindi: "इसके बाद ब्रह्मचारियों ने उनसे पूछा: 'किस मंत्र के जप से मनुष्य अमरता (मोक्ष) को प्राप्त करता है?'",
        english: "Then the students asked him: 'By chanting what mantra does one attain Immortality?'",
        simpleExplanation: "THE IMMORTALITY QUESTION: What mantra gives IMMORTALITY?",
        simpleExplanationHindi: "अमरता का प्रश्न: कौन सा मंत्र अमरता देता है?",
        nanoBananaPrompt: "Students eagerly asking the sage about the mantra for immortality.",
        wordMeanings: [
            { sanskrit: "japyena", devanagari: "जप्येन", hindi: "जप से", english: "by chanting" },
            { sanskrit: "amṛtatvam", devanagari: "अमृतत्वम्", hindi: "अमरता", english: "immortality" }
        ]
    },
    {
        id: 12,
        khanda: 3,
        mantra: "3.2-3.3",
        theme: "Shatarudriya",
        sanskrit: "स होवाच याज्ञवल्क्यः । शतरुद्रियेणेति । एतानि ह वा अमृतस्य नामधेयानि । एतैर्ह वा अमृतो भवतीति । एवमेवैतद् याज्ञवल्क्यः ॥",
        hindi: "याज्ञवल्क्य ने कहा: 'शतरुद्रिय (रुद्र के सौ नामों) के जप से।' 'ये ही उस अमृत (अविनाशी परमात्मा) के नाम हैं। इनके द्वारा ही मनुष्य अमर हो जाता है।' यह सत्य है, ऐसा याज्ञवल्क्य ने कहा।",
        english: "Yajnavalkya said: 'By the Shatarudriya.' 'These are indeed the names of the Immortal. By these, indeed, one becomes Immortal.' This is indeed so, said Yajnavalkya.",
        simpleExplanation: "THE 100 NAMES: Chanting the Shatarudriya (100 names of Rudra) = IMMORTALITY!",
        simpleExplanationHindi: "100 नाम: शतरुद्रिय (रुद्र के 100 नाम) जपने से = अमरता!",
        nanoBananaPrompt: "The 100 names of Rudra swirling around the third eye, creating immortal light.",
        wordMeanings: [
            { sanskrit: "śatarudriya", devanagari: "शतरुद्रिय", hindi: "रुद्र के सौ नाम", english: "Hymn of 100 Rudras" },
            { sanskrit: "nāmadheyāni", devanagari: "नामधेयानि", hindi: "नाम", english: "names" }
        ]
    },

    // KHANDA 4: THE PATH OF SANNYASA
    {
        id: 13,
        khanda: 4,
        mantra: "4.1",
        theme: "Janaka Asks About Sannyasa",
        sanskrit: "अथ हैनं जनको वैदेहो याज्ञवल्क्यमुपसमेत्योवाच । भगवन् संन्यासमब्रूहीति ।",
        hindi: "इसके बाद विदेह-राज जनक ने याज्ञवल्क्य के पास जाकर कहा: 'हे भगवन्! मुझे संन्यास (विधि) बताएं।'",
        english: "Then Janaka of Videha approached Yajnavalkya and said: 'Venerable Sir, teach me about Renunciation (Sannyasa).'",
        simpleExplanation: "KING ASKS MONK: Even King Janaka asks about renunciation!",
        simpleExplanationHindi: "राजा ने संन्यासी से पूछा: राजा जनक भी संन्यास के बारे में पूछते हैं!",
        nanoBananaPrompt: "King Janaka humbly asking Yajnavalkya about the path of renunciation.",
        wordMeanings: [
            { sanskrit: "sannyāsa", devanagari: "संन्यास", hindi: "त्याग/संन्यास", english: "renunciation" }
        ]
    },
    {
        id: 14,
        khanda: 4,
        mantra: "4.2",
        theme: "Four Stages of Life",
        sanskrit: "स होवाच याज्ञवल्क्यः । ब्रह्मचर्यं समाप्य गृही भवेत् । गृही भूत्वा वनी भवेत् । वनी भूत्वा प्रव्रजेत् ।",
        hindi: "याज्ञवल्क्य ने कहा: 'ब्रह्मचर्य समाप्त करके गृहस्थ बने। गृहस्थ होकर वानप्रस्थ (वनवासी) बने। वानप्रस्थ होकर प्रव्रज्या (संन्यास) ग्रहण करे।'",
        english: "Yajnavalkya said: 'After completing student life, become a householder. After being a householder, become a forest-dweller. After being a forest-dweller, renounce (become a monk).'",
        simpleExplanation: "THE 4 ASHRAMAS: Student → Householder → Forest-dweller → Monk. The STANDARD path!",
        simpleExplanationHindi: "4 आश्रम: विद्यार्थी → गृहस्थ → वानप्रस्थी → संन्यासी। मानक मार्ग!",
        nanoBananaPrompt: "Four stages of life: student, householder, forest hermit, wandering monk.",
        wordMeanings: [
            { sanskrit: "brahmacarya", devanagari: "ब्रह्मचर्य", hindi: "ब्रह्मचर्य", english: "student life" },
            { sanskrit: "gṛhī", devanagari: "गृही", hindi: "गृहस्थ", english: "householder" },
            { sanskrit: "vanī", devanagari: "वनी", hindi: "वानप्रस्थी", english: "forest-dweller" },
            { sanskrit: "pravrajet", devanagari: "प्रव्रजेत्", hindi: "संन्यास ले", english: "should renounce" }
        ]
    },
    {
        id: 15,
        khanda: 4,
        mantra: "4.3-4.4",
        theme: "The Vairagya Clause (Shortcut)",
        sanskrit: "यदि वेतरथा ब्रह्मचर्यादेव प्रव्रजेत् गृहाद्वा वनाद्वा । अथ पुनरव्रती वा व्रती वा स्नातको वाऽस्नातको वा उत्सन्नाग्निको वा यदहरेव विरजेत् तदहरेव प्रव्रजेत् ।",
        hindi: "'अथवा, यदि वैराग्य हो जाए, तो ब्रह्मचर्य आश्रम से ही संन्यास ले ले; या घर से, या वन से।' 'चाहे वह व्रतधारी हो या न हो, स्नातक हो या न हो, चाहे उसने अग्नि बुझा दी हो—जिस दिन भी वैराग्य हो जाए, उसी दिन संन्यास ले लेना चाहिए।'",
        english: "'Or else, one may renounce directly from student life, or from the house, or from the forest.' 'Whether one has taken vows or not, is a graduate or not, has maintained fires or not—The very day one feels total detachment, that very day one should renounce.'",
        simpleExplanation: "INSTANT RENUNCIATION: Don't wait! The MOMENT you feel detachment = RENOUNCE THAT DAY! No prerequisites!",
        simpleExplanationHindi: "तत्काल संन्यास: प्रतीक्षा मत करो! जिस क्षण वैराग्य हो = उसी दिन संन्यास! कोई पूर्व शर्त नहीं!",
        nanoBananaPrompt: "A person at any age—the moment detachment arrives, they step into renunciation.",
        wordMeanings: [
            { sanskrit: "yad ahar eva virajet", devanagari: "यदहरेव विरजेत्", hindi: "जिस दिन वैराग्य हो", english: "the very day one becomes detached" },
            { sanskrit: "tad ahar eva pravrajet", devanagari: "तदहरेव प्रव्रजेत्", hindi: "उसी दिन संन्यास ले", english: "that very day should renounce" }
        ]
    },

    // KHANDA 5: ATURA SANNYASA (EMERGENCY RENUNCIATION)
    {
        id: 16,
        khanda: 5,
        mantra: "5.1-5.2",
        theme: "Atura Sannyasa (Deathbed)",
        sanskrit: "अथ यदि आतुरः स्यात् मनसा वाचा संन्यसेत् । एष पन्था ब्रह्मणा हानुवित्तः । तेनैति संन्यासी ब्रह्मविदिति । एवमेवैतद् भगवन्निति वै याज्ञवल्क्यः ॥",
        hindi: "'अथवा, यदि वह आतुर (मरणासन्न/रोगी) हो, तो वह (बिना कर्मकांड के) केवल मन से और वाणी से संन्यास ले ले।' 'यह मार्ग ब्रह्मा द्वारा जाना (अनुमोदित) गया है। इस मार्ग से संन्यासी होकर वह ब्रह्मवेत्ता (ब्रह्म) को प्राप्त हो जाता है।' याज्ञवल्क्य ने कहा: 'हे भगवन्! यह ऐसा ही है।'",
        english: "'Now, if one is Atura (dying/critically ill), one may renounce mentally or by speech alone.' 'This path is known/approved by Brahma. By this path, the renouncer attains Brahman.' Yajnavalkya confirmed: 'Venerable Sir, it is indeed so.'",
        simpleExplanation: "DEATHBED LIBERATION: Can't do rituals? Just THINK and SAY 'I renounce'—Brahma approves! Valid for the dying!",
        simpleExplanationHindi: "मृत्युशय्या मुक्ति: कर्मकांड नहीं कर सकते? बस सोचो और कहो 'मैं त्यागता हूँ'—ब्रह्मा स्वीकार करते हैं!",
        nanoBananaPrompt: "A person on their deathbed, mentally and verbally renouncing, light ascending from crown.",
        wordMeanings: [
            { sanskrit: "āturaḥ", devanagari: "आतुरः", hindi: "मरणासन्न/बीमार", english: "dying/critically ill" },
            { sanskrit: "manasā vācā", devanagari: "मनसा वाचा", hindi: "मन और वाणी से", english: "mentally and verbally" }
        ]
    },

    // KHANDA 6: THE PARAMAHAMSA
    {
        id: 17,
        khanda: 6,
        mantra: "6.1",
        theme: "The Paramahamsas",
        sanskrit: "तत्र परमहंसा नाम संवर्तकारुणिश्वेतकेतुदुर्वासऋभुनिदाघजडभरतदत्तात्रेयरैवतकप्रभृतयोऽव्यक्तलिङ्गा अव्यक्ताचारा अनुन्मत्ता उन्मत्तवदाचरन्तः ।",
        hindi: "'वहाँ परमहंस नाम वाले (योगी होते हैं), जैसे—संवर्तक, आरुणि, श्वेतकेतु, दुर्वासा, ऋभु, निदाघ, जडभरत, दत्तात्रेय, रैवतक आदि। इनका कोई व्यक्त लिंग (बाहरी चिन्ह) नहीं होता, इनका आचरण गुप्त होता है, और पागल न होते हुए भी ये पागल (उन्मत्त) की तरह आचरण करते हैं।'",
        english: "'There are the Paramahamsas, such as Samvartaka, Aruni, Shvetaketu, Durvasa, Ribhu, Nidagha, Jadabharata, Dattatreya, Raivataka, and others. They have no identifying marks, their conduct is unmanifest, and though not mad, they behave like madmen.'",
        simpleExplanation: "THE SUPREME SWANS: Paramahamsas look crazy but aren't! No external marks. Hidden conduct. Divine madmen!",
        simpleExplanationHindi: "परम हंस: परमहंस पागल दिखते हैं पर नहीं हैं! कोई बाहरी चिन्ह नहीं। गुप्त आचरण। दिव्य पागल!",
        nanoBananaPrompt: "Paramahamsas like Dattatreya appearing as madmen but with hidden divine wisdom.",
        wordMeanings: [
            { sanskrit: "paramahaṃsa", devanagari: "परमहंस", hindi: "परम हंस", english: "supreme swan/enlightened one" },
            { sanskrit: "avyakta-liṅgāḥ", devanagari: "अव्यक्तलिङ्गाः", hindi: "बिना बाहरी चिन्ह के", english: "without visible marks" },
            { sanskrit: "unmattavat", devanagari: "उन्मत्तवत्", hindi: "पागल की तरह", english: "like a madman" }
        ]
    },
    {
        id: 18,
        khanda: 6,
        mantra: "6.2",
        theme: "Discarding All Props",
        sanskrit: "त्रिदण्डं कमण्डलुं शिक्यं पात्रं जलपवित्रं शिखां यज्ञोपवीतं च इत्येतत्सर्वं भूः स्वाहेत्यप्सु परित्यज्य आत्मानमन्विच्छेत् ।",
        hindi: "'त्रिदण्ड, कमंडलु, भिक्षापात्र, जल छानने का कपडा, शिखा और यज्ञोपवीत—इन सबको भूः स्वाहा कहकर जल में त्याग दे और केवल आत्मा की खोज करे।'",
        english: "'The staff, water pot, bowl, strainer, tuft of hair, and sacred thread—casting all these into the water saying Bhuh Svaha, he should seek the Self alone.'",
        simpleExplanation: "THROW IT ALL: Staff, pot, bowl, strainer, tuft, thread—throw into water! NOW seek ONLY the Self!",
        simpleExplanationHindi: "सब फेंक दो: दंड, कमंडलु, पात्र, छन्नी, चोटी, जनेऊ—जल में फेंको! अब केवल आत्मा खोजो!",
        nanoBananaPrompt: "A monk casting staff, pot, thread into water, walking away free toward inner light.",
        wordMeanings: [
            { sanskrit: "tridaṇḍa", devanagari: "त्रिदण्ड", hindi: "त्रिदंड", english: "triple staff" },
            { sanskrit: "kamaṇḍalu", devanagari: "कमण्डलु", hindi: "कमंडल", english: "water pot" },
            { sanskrit: "ātmānam anvicchet", devanagari: "आत्मानमन्विच्छेत्", hindi: "आत्मा को खोजे", english: "should seek the Self" }
        ]
    },
    {
        id: 19,
        khanda: 6,
        mantra: "6.3-6.4",
        theme: "The Homeless Wanderer",
        sanskrit: "यथाजातरूपधरो निर्द्वन्द्वो निष्परिग्रहः... शून्यागारदेवगृहतृणकूटवल्मीकवृक्षमूलकुलालशालाग्निहोत्रशालानदीपुलिनगिरिकुहरकन्दरकोटरनिर्झरस्थण्डिलेषु अनिकेतवासी ।",
        hindi: "'(वह परमहंस) जैसा पैदा हुआ था वैसा रूप धारण करे (नग्न या साधारण), द्वंद्व (सुख-दुख) से रहित, परिग्रह (संपत्ति) से रहित... वह सूने घर, मंदिर, घास के ढेर, बांबी, वृक्ष की जड़, कुम्हार की शाला, यज्ञशाला, नदी के किनारे, पहाड़ की गुफा, कंदरा, खोह या झरने के पास (खुले में) रहे। वह अनिकेत (बिना घर का) होकर निवास करे।'",
        english: "'He wears the form as born (naked/simple), free from pairs of opposites, without possessions... He may live in a deserted house, temple, haystack, anthill, under a tree, potter's shed, fire-sacrifice place, river bank, mountain cave, hollow, or near a waterfall. He lives without a home (Aniketa).'",
        simpleExplanation: "HOMELESS FREEDOM: Temple, tree, cave, riverbank—anywhere is home! No possessions, no dualities, no fixed abode!",
        simpleExplanationHindi: "बेघर स्वतंत्रता: मंदिर, वृक्ष, गुफा, नदी किनारा—कहीं भी घर है! कोई संपत्ति नहीं, कोई द्वंद्व नहीं!",
        nanoBananaPrompt: "A homeless sage living freely under trees, caves, by rivers, in temples.",
        wordMeanings: [
            { sanskrit: "nirdvandva", devanagari: "निर्द्वन्द्व", hindi: "द्वंद्व रहित", english: "free from opposites" },
            { sanskrit: "niṣparigraha", devanagari: "निष्परिग्रह", hindi: "परिग्रह रहित", english: "without possessions" },
            { sanskrit: "aniketa", devanagari: "अनिकेत", hindi: "बिना घर का", english: "homeless" }
        ]
    },
    {
        id: 20,
        khanda: 6,
        mantra: "6.5-6.6",
        theme: "The Paramahamsa Definition",
        sanskrit: "अप्रयत्नोऽनिर्ममः शुक्लध्यानपरायणोऽध्यात्मनिष्ठः । अशुभकर्मनिर्मूलनपरः संन्यासेन देहत्यागं करोति स परमहंसो नाम । इत्युपनिषत् ॥",
        hindi: "'वह प्रयत्न-रहित, ममता-रहित, शुक्ल-ध्यान (शुद्ध ब्रह्म चिंतन) में परायण और अध्यात्म-निष्ठ हो। अशुभ कर्मों को जड़ से उखाड़ने में तत्पर होकर, संन्यास (योग) के द्वारा देह का त्याग करे। वही परमहंस कहलाता है।' यही उपनिषद है।",
        english: "'He makes no effort (for worldly gain), has no sense of mine, is devoted to pure meditation, and is established in the Self. Intent on uprooting inauspicious karmas, he gives up his body through Sannyasa. He is called a Paramahamsa.' Thus ends the Upanishad.",
        simpleExplanation: "THE DEFINITION: Effortless, no 'mine', pure meditation, Self-established, uprooting bad karma = PARAMAHAMSA!",
        simpleExplanationHindi: "परिभाषा: प्रयत्न-रहित, 'मेरा' नहीं, शुद्ध ध्यान, आत्म-स्थित, बुरे कर्म उखाड़ना = परमहंस!",
        nanoBananaPrompt: "The Paramahamsa—effortless, pure, Self-established, radiating freedom.",
        wordMeanings: [
            { sanskrit: "aprayatna", devanagari: "अप्रयत्न", hindi: "प्रयत्न-रहित", english: "effortless" },
            { sanskrit: "anirmama", devanagari: "अनिर्मम", hindi: "ममता-रहित", english: "without mine-ness" },
            { sanskrit: "śukladhyāna", devanagari: "शुक्लध्यान", hindi: "शुद्ध ध्यान", english: "pure meditation" },
            { sanskrit: "adhyātmaniṣṭha", devanagari: "अध्यात्मनिष्ठ", hindi: "आत्म में स्थित", english: "established in Self" }
        ]
    }
];

// Metadata
export const JABALA_METADATA = {
    id: "jabala",
    name: "Jabala",
    nameSanskrit: "जाबालोपनिषद्",
    veda: "Shukla Yajur Veda",
    category: "Sannyasa",
    shlokaCount: 20,
    sequenceNumber: 13,
    khandaCount: 6,
    khandas: {
        0: { name: "Invocation", theme: "Purnamadah" },
        1: { name: "Avimukta", theme: "The Never-Forsaken Point" },
        2: { name: "Varanasi", theme: "Ajna Chakra Location" },
        3: { name: "Shatarudriya", theme: "Mantra for Immortality" },
        4: { name: "Sannyasa Vidhi", theme: "Four Stages & Shortcut" },
        5: { name: "Atura Sannyasa", theme: "Emergency Renunciation" },
        6: { name: "Paramahamsa", theme: "The Supreme Swan" }
    },
    keyTeachings: [
        "Avimukta = Ajna Chakra (Third Eye) = True Kurukshetra",
        "Varanasi is within the body (between eyebrows and nose)",
        "Shatarudriya Mantra for Immortality",
        "Vairagya = Instant permission to renounce any time",
        "Atura Sannyasa: Mental renunciation valid for the dying",
        "Paramahamsa: No marks, acts like madman, seeks only Self"
    ],
    famousVerses: {
        avimukta: { id: 2, khanda: 1, mantra: "1.2" },
        ajnaChakra: { id: 9, khanda: 2, mantra: "2.6" },
        vairagyaClause: { id: 15, khanda: 4, mantra: "4.3-4.4" },
        aturaSannyasa: { id: 16, khanda: 5, mantra: "5.1-5.2" },
        paramahamsa: { id: 17, khanda: 6, mantra: "6.1" }
    }
};

// Helper function
export const getJabalaMantra = (khanda: number, mantra: string): JabalaDataEntry | undefined => {
    return JABALA_SHLOKAS.find(s => s.khanda === khanda && s.mantra === mantra);
};
