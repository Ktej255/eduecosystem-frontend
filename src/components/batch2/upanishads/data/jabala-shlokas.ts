// Jabala Upanishad Data (#13 in Muktika Canon)
// Source: Shukla Yajur Veda | Category: Sannyasa
// Theme: Avimukta (Ajna Chakra), Atura Sannyasa (Emergency Renunciation)

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface JabalaDataEntry {
    id: number;
    part: number;
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

export const JABALA_SHLOKAS: JabalaDataEntry[] = [
    {
        id: 1,
        part: 1,
        verse: 1,
        theme: "The Avimukta",
        sanskrit: "अविमुक्तं वै कुरुक्षेत्रं देवानां देवयजनं सर्वेषां भूतानां ब्रह्मसदनम्।",
        hindi: "अविमुक्त ही कुरुक्षेत्र है, देवताओं का यज्ञ-स्थल है, और सभी प्राणियों के लिए ब्रह्म का निवास है।",
        english: "The Avimukta (Never-Forsaken) is the Kurukshetra, the place of sacrifice for gods, and the abode of Brahman for all beings.",
        simpleExplanation: "THE HOLY BATTLEFIELD IS INSIDE: Kurukshetra = Your body! The battle of good and evil happens WITHIN you!",
        simpleExplanationHindi: "पवित्र युद्धभूमि अंदर है: कुरुक्षेत्र = तुम्हारा शरीर! अच्छाई और बुराई का युद्ध तुम्हारे अंदर होता है!",
        nanoBananaPrompt: "The battlefield of Kurukshetra mapped onto a human body, with the Avimukta glowing at the third eye.",
        wordMeanings: [
            { sanskrit: "avimukta", devanagari: "अविमुक्त", hindi: "कभी न छोड़ा जाने वाला", english: "never forsaken" }
        ]
    },
    {
        id: 2,
        part: 1,
        verse: 3,
        theme: "Location of Varanasi",
        sanskrit: "वरणायां नास्यां च मध्ये प्रतिष्ठित इति।",
        hindi: "वह (अविमुक्त) वरणा और नासी के मध्य में स्थित है।",
        english: "That (Avimukta) is established between Varana and Nasi.",
        simpleExplanation: "VARANASI = AJNA CHAKRA: The holy city is not just on a map—it's between your eyebrows and nose!",
        simpleExplanationHindi: "वाराणसी = आज्ञा चक्र: पवित्र नगर केवल नक्शे पर नहीं—तुम्हारी भौंहों और नाक के बीच है!",
        nanoBananaPrompt: "The city of Varanasi superimposed on the point between the eyebrows (Ajna Chakra).",
        wordMeanings: [
            { sanskrit: "varaṇā", devanagari: "वरणा", hindi: "पाप को रोकने वाली", english: "that which wards off" },
            { sanskrit: "nāsī", devanagari: "नासी", hindi: "पाप को नष्ट करने वाली", english: "that which destroys" }
        ]
    },
    {
        id: 3,
        part: 1,
        verse: 4,
        theme: "The Ajna Chakra",
        sanskrit: "भ्रुवोर्घ्राणस्य च यः सन्धिः स एष द्यौर्लोकस्य परस्य च सन्धिर्भवतीति।",
        hindi: "भौं और नाक का जो संधि-स्थल है—वही द्युलोक और परलोक की संधि है। ब्रह्मज्ञानी इसी को 'संध्या' मानकर उपासना करते हैं।",
        english: "The junction of eyebrows and nose—that is the junction between the visible world and the supreme. Knowers of Brahman worship this as 'Sandhya'.",
        simpleExplanation: "THIRD EYE = HEAVEN'S GATE: The space between eyebrows (Ajna) is where physical and spiritual worlds MEET!",
        simpleExplanationHindi: "तीसरी आँख = स्वर्ग का द्वार: भौंहों के बीच का स्थान (आज्ञा) वहाँ है जहाँ भौतिक और आध्यात्मिक लोक मिलते हैं!",
        nanoBananaPrompt: "The junction between eyebrows glowing as a gateway between the material world and the spiritual realm.",
        wordMeanings: [
            { sanskrit: "sandhiḥ", devanagari: "सन्धिः", hindi: "संधि/मिलन स्थल", english: "junction" }
        ]
    },
    {
        id: 4,
        part: 2,
        verse: 5,
        theme: "Shatarudriya for Immortality",
        sanskrit: "शतरुद्रियेणेति। एतानि ह वा अमृतस्य नामधेयानि। एतैर्ह वा अमृतो भवतीति।",
        hindi: "'शतरुद्रिय से।' ये अमृत के नाम हैं। इनसे व्यक्ति अमर हो जाता है।",
        english: "'By the Shatarudriya (100 Names of Rudra).' These are the names of the Immortal. By these, one becomes Immortal.",
        simpleExplanation: "THE IMMORTALITY MANTRA: Chanting the 100 Names of Shiva at the Ajna Chakra = Path to DEATHLESSNESS!",
        simpleExplanationHindi: "अमरता मंत्र: आज्ञा चक्र पर शिव के 100 नाम जपना = मृत्युहीनता का मार्ग!",
        nanoBananaPrompt: "The 100 names of Rudra swirling around the third eye, creating immortal light.",
        wordMeanings: [
            { sanskrit: "śatarudriya", devanagari: "शतरुद्रिय", hindi: "रुद्र के सौ नाम", english: "Hymn of 100 Rudras" }
        ]
    },
    {
        id: 5,
        part: 3,
        verse: 6,
        theme: "Sequence of Ashramas",
        sanskrit: "ब्रह्मचर्यं समाप्य गृही भवेत्। गृही भूत्वा वनी भवेत्। वनी भूत्वा प्रव्रजेत्।",
        hindi: "ब्रह्मचर्य समाप्त करके गृहस्थ बनो। गृहस्थ होकर वानप्रस्थी बनो। वानप्रस्थी होकर संन्यास लो।",
        english: "After completing studentship, become a householder. After being a householder, become a forest-dweller. After that, renounce.",
        simpleExplanation: "THE 4 STAGES: Student → Householder → Forest-dweller → Monk. This is the STANDARD path.",
        simpleExplanationHindi: "4 अवस्थाएं: विद्यार्थी → गृहस्थ → वानप्रस्थी → संन्यासी। यह मानक मार्ग है।",
        nanoBananaPrompt: "Four stages of life: young student, married householder, forest hermit, wandering monk.",
        wordMeanings: [
            { sanskrit: "pravrajet", devanagari: "प्रव्रजेत्", hindi: "संन्यास ले", english: "should renounce" }
        ]
    },
    {
        id: 6,
        part: 3,
        verse: 7,
        theme: "The Shortcut (Vairagya)",
        sanskrit: "यदहरेव विरजेत् तदहरेव प्रव्रजेत्।",
        hindi: "जिस दिन भी वैराग्य हो जाए, उसी दिन संन्यास ले लेना चाहिए।",
        english: "The very day one feels total detachment (Vairagya), that very day one should renounce.",
        simpleExplanation: "INSTANT RENUNCIATION: Don't wait for old age! The MOMENT you feel true detachment = RENOUNCE IMMEDIATELY!",
        simpleExplanationHindi: "तत्काल संन्यास: बुढ़ापे की प्रतीक्षा मत करो! जिस क्षण सच्चा वैराग्य हो = तुरंत संन्यास!",
        nanoBananaPrompt: "A person at any age—young, middle, old—the moment of detachment arrives, they step into renunciation.",
        wordMeanings: [
            { sanskrit: "virajet", devanagari: "विरजेत्", hindi: "वैराग्य हो जाए", english: "becomes detached" }
        ]
    },
    {
        id: 7,
        part: 4,
        verse: 9,
        theme: "Discarding Insignia",
        sanskrit: "त्रिदण्डं कमण्डलुं शिक्यं पात्रं जलपवित्रं शिखां यज्ञोपवीतं च इत्येतत्सर्वं भूः स्वाहेत्यप्सु परित्यज्य आत्मानमन्विच्छेत्।",
        hindi: "त्रिदंड, कमंडलु, भिक्षापात्र, जलपवित्र, शिखा और यज्ञोपवीत—इन सबको 'भूः स्वाहा' कहकर जल में विसर्जित कर दे और केवल आत्मा की खोज करे।",
        english: "The staff, water pot, bowl, strainer, tuft, and sacred thread—casting all into water saying 'Bhuh Svaha', seek the Self alone.",
        simpleExplanation: "THROW IT ALL AWAY: Staff, pot, thread, tuft—drop all religious props in water. NOW: seek only the SELF!",
        simpleExplanationHindi: "सब छोड़ दो: दंड, कमंडलु, जनेऊ, चोटी—सब धार्मिक सामग्री जल में छोड़ो। अब: केवल आत्मा खोजो!",
        nanoBananaPrompt: "A monk casting staff, pot, thread, and tuft into flowing water, walking away free toward inner light.",
        wordMeanings: [
            { sanskrit: "ātmānam anvicchet", devanagari: "आत्मानमन्विच्छेत्", hindi: "आत्मा को खोजे", english: "should seek the Self" }
        ]
    },
    {
        id: 8,
        part: 5,
        verse: 10,
        theme: "Atura Sannyasa (Emergency)",
        sanskrit: "अथ यदि आतुरः स्यात् मनसा वाचा संन्यसेत्। एष पन्था ब्रह्मणा हानुवित्तः।",
        hindi: "यदि वह आतुर (मरणासन्न) हो, तो केवल मन से और वाणी से संन्यास ले ले। यह मार्ग ब्रह्मा द्वारा अनुमोदित है।",
        english: "If one is Atura (dying/critically ill), one may renounce mentally or by speech alone. This path is approved by Brahma.",
        simpleExplanation: "DEATHBED LIBERATION: Can't perform rituals? Just THINK and SAY 'I renounce'—Brahma accepts! Approved for the dying!",
        simpleExplanationHindi: "मृत्युशय्या मुक्ति: कर्मकांड नहीं कर सकते? बस सोचो और कहो 'मैं त्यागता हूँ'—ब्रह्मा स्वीकार करते हैं! मरणासन्न के लिए!",
        nanoBananaPrompt: "A person on their deathbed, mentally and verbally renouncing, light ascending from their crown.",
        wordMeanings: [
            { sanskrit: "āturaḥ", devanagari: "आतुरः", hindi: "मरणासन्न/बीमार", english: "dying/critically ill" }
        ]
    },
    {
        id: 9,
        part: 6,
        verse: 12,
        theme: "Brahman is the Thread",
        sanskrit: "तस्य ब्रह्मैव यज्ञोपवीतम्।",
        hindi: "उस (परमहंस) के लिए ब्रह्म ही यज्ञोपवीत (जनेऊ) है।",
        english: "For him (the Paramahamsa), Brahman alone is the Sacred Thread.",
        simpleExplanation: "THE ULTIMATE THREAD: A true monk doesn't need cotton—BRAHMAN ITSELF is wrapped around him!",
        simpleExplanationHindi: "परम धागा: सच्चे संन्यासी को सूत की जरूरत नहीं—ब्रह्म स्वयं उसे लिपटा हुआ है!",
        nanoBananaPrompt: "A naked monk wrapped not in cotton thread but in golden light of Brahman as the true sacred thread.",
        wordMeanings: [
            { sanskrit: "brahmaiva yajñopavītam", devanagari: "ब्रह्मैव यज्ञोपवीतम्", hindi: "ब्रह्म ही जनेऊ है", english: "Brahman alone is the thread" }
        ]
    }
];

export const JABALA_METADATA = {
    id: "jabala",
    name: "Jabala",
    nameSanskrit: "जाबालोपनिषद्",
    veda: "Shukla Yajur Veda",
    category: "Sannyasa",
    shlokaCount: 9,
    sequenceNumber: 13,
    keyTeachings: [
        "Avimukta = Ajna Chakra (Third Eye)",
        "Varanasi is within the body",
        "Shatarudriya Mantra for Immortality",
        "Vairagya = Instant permission to renounce",
        "Atura Sannyasa (Mental renunciation for the dying)"
    ],
    famousVerses: {
        avimukta: { id: 1, part: 1, verse: 1 },
        ajnaChakra: { id: 3, part: 1, verse: 4 },
        aturaSannyasa: { id: 8, part: 5, verse: 10 }
    }
};
