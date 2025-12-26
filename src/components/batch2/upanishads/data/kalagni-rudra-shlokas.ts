// Kalagni Rudra Upanishad Data (#29 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Shaiva
// Theme: The Law of Tripundra (Three Lines of Sacred Ash/Vibhuti)
// Total: 8 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface KalagniRudraDataEntry {
    id: number;
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
export const KALAGNI_RUDRA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह हम दोनों की रक्षा करे। हम दोनों का पालन करे। हम साथ शक्ति प्राप्त करें। हमारा अध्ययन तेजस्वी हो। हम परस्पर द्वेष न करें। ॐ शांति, शांति, शांति।",
    english: "OM! May He protect us both. May He nourish us both. May we work together. May our study be brilliant. May we not hate each other. OM Peace, Peace, Peace."
};

export const KALAGNI_RUDRA_SHLOKAS: KalagniRudraDataEntry[] = [
    {
        id: 1,
        verse: 1,
        theme: "The Inquiry",
        sanskrit: "अथ कालाग्निरुद्रं सनत्कुमारः पप्रच्छ । अधीहि भगवन् त्रिपुण्ड्रविधिं तत्त्वमस्य किम् । कुत्र स्थानं कः प्रमाणं का रेखा के मन्त्राः का शक्तिः का देवताः कः कर्ता किं फलमिति ।",
        hindi: "सनत्कुमार ने भगवान कालाग्निरुद्र से पूछा: 'हे भगवन्! त्रिपुण्ड्र की विधि बताएं। इसका तत्व क्या है? स्थान, प्रमाण, रेखाएं, मंत्र, शक्ति, देवता, कर्ता और फल क्या हैं?'",
        english: "Sanatkumara asked Lord Kalagni Rudra: 'Teach me the rule of Tripundra. What is its reality? What are the places, measurement, lines, mantras, power, deities, doer, and fruit?'",
        simpleExplanation: "THE QUESTION: Sanatkumara asks Shiva—what is the complete rule of the Three Ash Lines?",
        simpleExplanationHindi: "प्रश्न: सनत्कुमार शिव से पूछते हैं—भस्म की तीन रेखाओं का पूर्ण नियम क्या है?",
        nanoBananaPrompt: "Sanatkumara asking Kalagni Rudra about the sacred Tripundra ritual.",
        wordMeanings: [
            { sanskrit: "tripuṇḍra", devanagari: "त्रिपुण्ड्र", hindi: "तीन रेखाएं", english: "three lines of ash" },
            { sanskrit: "kālāgnirudra", devanagari: "कालाग्निरुद्र", hindi: "काल-अग्नि-रुद्र", english: "Rudra of Time-Fire" }
        ]
    },
    {
        id: 2,
        verse: 2,
        theme: "The Material",
        sanskrit: "तं होवाच भगवान् कालाग्निरुद्रः । यद्द्रव्यं तदाग्नेयम् । सद्योजातादि पञ्चब्रह्ममन्त्रैः भस्म परिगृह्य । अग्निरिति भस्मेत्यभिमन्त्र्य ।",
        hindi: "भगवान कालाग्निरुद्र ने कहा: 'द्रव्य आग्नेय (अग्नि से उत्पन्न भस्म) होना चाहिए। सद्योजातादि पंच-ब्रह्म मंत्रों से भस्म ग्रहण करें। 'अग्निरिति भस्म' मंत्र से अभिमंत्रित करें।'",
        english: "Lord Kalagni Rudra said: 'The material is ASH FROM FIRE. Take ash with Five Brahma Mantras (Sadyojata, etc.). Consecrate with 'Agniriti Bhasma' mantra.'",
        simpleExplanation: "THE ASH: Use fire-born ash only! Consecrate with 5 Brahma Mantras and 'Agniriti Bhasma'!",
        simpleExplanationHindi: "भस्म: केवल अग्नि-जनित भस्म! 5 ब्रह्म मंत्रों और 'अग्निरिति भस्म' से संस्कार करें!",
        nanoBananaPrompt: "Sacred ash from fire consecrated with the Five Brahma Mantras.",
        wordMeanings: [
            { sanskrit: "āgneya", devanagari: "आग्नेय", hindi: "अग्नि से उत्पन्न", english: "fire-born" },
            { sanskrit: "pañcabrahma", devanagari: "पञ्चब्रह्म", hindi: "पांच ब्रह्म मंत्र", english: "five Brahma mantras" }
        ]
    },
    {
        id: 3,
        verse: 3,
        theme: "The Application",
        sanskrit: "मानस्तोक इति समुद्धृत्य । जलेन संसृज्य । त्रियायुषमिति शिरोललाटवक्षःस्कन्धेषु धारयेत् ।",
        hindi: "'मा नस्तोके...' पढ़कर भस्म उठाएं। जल के साथ मिलाएं। 'त्रियायुषम्...' मंत्र पढ़कर सिर, ललाट, छाती और कंधों पर धारण करें।",
        english: "Reciting 'Ma Nastoke...' lift the ash. Mix with water. Reciting 'Triyayusham...' apply on head, forehead, chest, and shoulders.",
        simpleExplanation: "HOW TO APPLY: Lift with mantra, mix with water, apply to 4 places with mantra!",
        simpleExplanationHindi: "कैसे लगाएं: मंत्र से उठाएं, जल से मिलाएं, मंत्र से 4 स्थानों पर लगाएं!",
        nanoBananaPrompt: "The ritual application of ash—mixing with water, applying to forehead.",
        wordMeanings: [
            { sanskrit: "lalāṭa", devanagari: "ललाट", hindi: "माथा", english: "forehead" },
            { sanskrit: "triyāyuṣam", devanagari: "त्रियायुषम्", hindi: "तीन आयु वाला", english: "of triple life" }
        ]
    },
    {
        id: 4,
        verse: 4,
        theme: "The Three Lines",
        sanskrit: "तिस्रो रेखाः प्रकीर्तिताः । व्रतमेतच्छाम्भवं सर्वेषु वेदेषु वेदवादिभिरुक्तम् । तस्मात् समाचरेन्मुमुक्षुर्न पुनर्भवाय ।",
        hindi: "इस प्रकार तीन रेखाएं कही गई हैं। यह शाम्भव-व्रत सभी वेदों में कहा गया है। इसलिए मुमुक्षु को पुनर्जन्म से बचने के लिए इसका आचरण करना चाहिए।",
        english: "Thus the THREE LINES are proclaimed. This SHAMBHAVA VOW is declared in all Vedas. One seeking liberation should practice it to avoid rebirth.",
        simpleExplanation: "SHAMBHAVA VOW: The three-lined ash is Shiva's Vow from all Vedas—for Liberation!",
        simpleExplanationHindi: "शाम्भव व्रत: तीन-रेखा भस्म सभी वेदों से शिव का व्रत है—मुक्ति के लिए!",
        nanoBananaPrompt: "The three lines of ash as the Shambhava Vow from all Vedas.",
        wordMeanings: [
            { sanskrit: "śāmbhava vrata", devanagari: "शाम्भव व्रत", hindi: "शिव का व्रत", english: "Vow of Shiva" },
            { sanskrit: "mumukṣu", devanagari: "मुमुक्षु", hindi: "मोक्ष चाहने वाला", english: "seeker of liberation" }
        ]
    },
    {
        id: 5,
        verse: 5,
        theme: "First Line (Bottom)",
        sanskrit: "अथ वामस्य रेखा सा गार्हपत्याग्निः । अकारः रजो भूलोकः स्वात्मा क्रियाशक्तिः । ऋग्वेदः प्रातःसवनं प्रजापतिर्देवतेति ।",
        hindi: "पहली (निचली) रेखा: गार्हपत्य अग्नि, 'अ' कार, रजोगुण, भूलोक, स्वात्मा, क्रिया-शक्ति, ऋग्वेद, प्रातः-सवन, देवता प्रजापति (ब्रह्मा)।",
        english: "FIRST (LOWER) LINE: Garhapatya Fire, letter 'A', Rajas, Earth, Individual Self, Power of Action, Rig Veda, Morning Ablution, deity BRAHMA.",
        simpleExplanation: "LINE 1 = A = BRAHMA: Rajas, Earth, Action, Rig Veda, Morning!",
        simpleExplanationHindi: "रेखा 1 = अ = ब्रह्मा: रजस, पृथ्वी, क्रिया, ऋग्वेद, प्रातः!",
        nanoBananaPrompt: "The first line of Tripundra representing Brahma, Rajas, Earth, Action.",
        wordMeanings: [
            { sanskrit: "gārhapatya", devanagari: "गार्हपत्य", hindi: "गृहस्थ की अग्नि", english: "householder's fire" },
            { sanskrit: "kriyāśakti", devanagari: "क्रियाशक्ति", hindi: "क्रिया की शक्ति", english: "power of action" }
        ]
    },
    {
        id: 6,
        verse: 6,
        theme: "Second Line (Middle)",
        sanskrit: "अथ द्वितीया सा दक्षिणाग्निः । उकारः सत्त्वमन्तरिक्षमन्तरात्मेच्छाशक्तिः । यजुर्वेदः माध्यन्दिनसवनं विष्णुर्देवतेति ।",
        hindi: "दूसरी (मध्य) रेखा: दक्षिणाग्नि, 'उ' कार, सत्वगुण, अंतरिक्ष, अंतरात्मा, इच्छा-शक्ति, यजुर्वेद, मध्याह्न-सवन, देवता विष्णु।",
        english: "SECOND (MIDDLE) LINE: Dakshinagni Fire, letter 'U', Sattva, Atmosphere, Inner Self, Power of Will, Yajur Veda, Midday Ablution, deity VISHNU.",
        simpleExplanation: "LINE 2 = U = VISHNU: Sattva, Atmosphere, Will, Yajur Veda, Midday!",
        simpleExplanationHindi: "रेखा 2 = उ = विष्णु: सत्व, अंतरिक्ष, इच्छा, यजुर्वेद, मध्याह्न!",
        nanoBananaPrompt: "The second line of Tripundra representing Vishnu, Sattva, Will.",
        wordMeanings: [
            { sanskrit: "dakṣiṇāgni", devanagari: "दक्षिणाग्नि", hindi: "दक्षिण की अग्नि", english: "southern fire" },
            { sanskrit: "icchāśakti", devanagari: "इच्छाशक्ति", hindi: "इच्छा की शक्ति", english: "power of will" }
        ]
    },
    {
        id: 7,
        verse: 7,
        theme: "Third Line (Top)",
        sanskrit: "अथ तृतीया सा आहवनीयाग्निः । मकारस्तमो द्यौर्लोकः परमात्मा ज्ञानशक्तिः । सामवेदस्तृतीयसवनं महादेवो देवतेति ।",
        hindi: "तीसरी (ऊपरी) रेखा: आहवनीय अग्नि, 'म' कार, तमोगुण, द्युलोक, परमात्मा, ज्ञान-शक्ति, सामवेद, सायं-सवन, देवता महादेव (शिव)।",
        english: "THIRD (TOP) LINE: Ahavaniya Fire, letter 'M', Tamas, Heaven, Supreme Self, Power of Knowledge, Sama Veda, Evening Ablution, deity MAHADEVA.",
        simpleExplanation: "LINE 3 = M = SHIVA: Tamas (Destruction), Heaven, Knowledge, Sama Veda, Evening!",
        simpleExplanationHindi: "रेखा 3 = म = शिव: तमस (संहार), स्वर्ग, ज्ञान, सामवेद, सायं!",
        nanoBananaPrompt: "The third line of Tripundra representing Shiva, Knowledge, Heaven.",
        wordMeanings: [
            { sanskrit: "āhavanīya", devanagari: "आहवनीय", hindi: "आहुति की अग्नि", english: "oblation fire" },
            { sanskrit: "jñānaśakti", devanagari: "ज्ञानशक्ति", hindi: "ज्ञान की शक्ति", english: "power of knowledge" }
        ]
    },
    {
        id: 8,
        verse: 8,
        theme: "The Fruit",
        sanskrit: "एवं विद्वान् त्रिपुण्ड्रं धारयति । यः सकृद् धारयेत् स सर्वपापैः प्रमुच्यते । स सर्वतीर्थफलं प्राप्नोति... स सकलभोगान् भुंक्ते । स देहं त्यक्त्वा शिवसायुज्यमेति । न स पुनरावर्तते न स पुनरावर्तते । ॐ सत्यमित्युपनिषत् ॥",
        hindi: "इस प्रकार जानकर जो त्रिपुण्ड्र धारण करता है: एक बार भी धारण करने से सभी पापों से मुक्त। सभी तीर्थ फल प्राप्त। सभी भोग भोगता है। देह त्यागकर शिव-सायुज्य प्राप्त। वह फिर नहीं लौटता। ॐ सत्य है।",
        english: "One who wears Tripundra knowing this: Even ONCE = freed from all sins, attains all pilgrimages, enjoys all pleasures, attains UNION WITH SHIVA. Does NOT return. Does NOT return. OM is Truth.",
        simpleExplanation: "THE FRUIT: Wear Tripundra ONCE = All sins gone, all merit gained, SHIVA UNION, NO REBIRTH!",
        simpleExplanationHindi: "फल: एक बार त्रिपुण्ड्र = सब पाप गए, सब पुण्य मिला, शिव-सायुज्य, पुनर्जन्म नहीं!",
        nanoBananaPrompt: "The reward of Tripundra—liberation from sins, union with Shiva, no rebirth.",
        wordMeanings: [
            { sanskrit: "śivasāyujya", devanagari: "शिवसायुज्य", hindi: "शिव से एकता", english: "union with Shiva" },
            { sanskrit: "na punarāvartate", devanagari: "न पुनरावर्तते", hindi: "फिर नहीं लौटता", english: "does not return" }
        ]
    }
];

export const KALAGNI_RUDRA_METADATA = {
    id: "kalagni-rudra",
    name: "Kalagni Rudra",
    nameSanskrit: "कालाग्निरुद्रोपनिषद्",
    alternateNames: ["Kalagnirudra Upanishad"],
    veda: "Krishna Yajur Veda",
    category: "Shaiva",
    shlokaCount: 8,
    sequenceNumber: 29,
    meaning: "The Upanishad of Rudra who is the Fire of Time",
    keyTeachings: [
        "Tripundra = Three Lines of Sacred Ash (Vibhuti/Bhasma)",
        "Ash must be fire-born, consecrated with 5 Brahma Mantras",
        "Apply with 'Agniriti Bhasma' and 'Triyayusham' mantras",
        "The Shambhava Vow (Vow of Shiva) from all Vedas",
        "Three Lines = Trimurti:",
        "  - Line 1 (Bottom): A-kara, Brahma, Rajas, Action, Rig Veda",
        "  - Line 2 (Middle): U-kara, Vishnu, Sattva, Will, Yajur Veda",
        "  - Line 3 (Top): M-kara, Shiva, Tamas, Knowledge, Sama Veda",
        "Three Lines = Three Fires (Garhapatya, Dakshinagni, Ahavaniya)",
        "Three Lines = Three Shaktis (Kriya, Iccha, Jnana)",
        "Three Lines = Three Worlds (Earth, Atmosphere, Heaven)",
        "Three Lines = A-U-M = OM",
        "Fruit: Even ONE wearing = freed from sins, Union with Shiva, No rebirth"
    ],
    famousVerses: {
        inquiry: { id: 1, verse: 1 },
        threeLines: { id: 4, verse: 4 },
        firstLine: { id: 5, verse: 5 },
        secondLine: { id: 6, verse: 6 },
        thirdLine: { id: 7, verse: 7 },
        phalaShruti: { id: 8, verse: 8 }
    },
    tripundraCorrespondences: {
        line1: {
            letter: "A",
            guna: "Rajas",
            world: "Bhuloka (Earth)",
            atman: "Svatma (Individual Self)",
            shakti: "Kriya Shakti (Action)",
            veda: "Rig Veda",
            fire: "Garhapatya",
            deity: "Brahma/Prajapati",
            time: "Morning"
        },
        line2: {
            letter: "U",
            guna: "Sattva",
            world: "Antariksha (Atmosphere)",
            atman: "Antaratma (Inner Self)",
            shakti: "Iccha Shakti (Will)",
            veda: "Yajur Veda",
            fire: "Dakshinagni",
            deity: "Vishnu",
            time: "Midday"
        },
        line3: {
            letter: "M",
            guna: "Tamas",
            world: "Dyuloka (Heaven)",
            atman: "Paramatma (Supreme Self)",
            shakti: "Jnana Shakti (Knowledge)",
            veda: "Sama Veda",
            fire: "Ahavaniya",
            deity: "Mahadeva/Shiva",
            time: "Evening"
        }
    }
};
