// Rudra Hridaya Upanishad (#51 in Muktika Canon) | Krishna Yajur Veda | Shaiva-Vaishnava
// Theme: Hari-Hara Unity - "Rudra is Heart of Vishnu, Vishnu is Heart of Rudra"
// Total: 18 key mantras from 49 verses

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface RudraHridayaDataEntry {
    id: number; section: string; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const RUDRA_HRIDAYA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह हम दोनों की रक्षा करे। साथ पालन करे। शांति।",
    english: "OM! May He protect us both. May He nourish us. OM Peace."
};

export const RUDRA_HRIDAYA_SHLOKAS: RudraHridayaDataEntry[] = [
    // Part 1: Nature of Rudra
    {
        id: 1, section: "Prostration", verse: 1, theme: "Bow to Trinity",
        sanskrit: "नमस्कृत्वा रुद्रं विष्णुं ब्रह्माणं च ।",
        hindi: "रुद्र, विष्णु और ब्रह्मा को नमस्कार करके।",
        english: "Having bowed to Rudra, Vishnu, and Brahma.",
        simpleExplanation: "BOW TO ALL THREE: Rudra, Vishnu, Brahma—equally!",
        simpleExplanationHindi: "तीनों को नमन: रुद्र, विष्णु, ब्रह्मा—समान!", nanoBananaPrompt: "Bowing to Trinity."
    },
    {
        id: 2, section: "AllRudra", verse: 2, theme: "All is Rudra",
        sanskrit: "सर्वं रुद्रमयं तस्मात् सर्वं रुद्रं प्रणमाम्यहम् ॥",
        hindi: "सब कुछ रुद्रमय है, इसलिए मैं सर्व-रुद्र को प्रणाम करता हूँ।",
        english: "All is filled with Rudra, therefore I bow to All-Rudra.",
        simpleExplanation: "ALL IS RUDRA: Moving, unmoving—everything RUDRA!",
        simpleExplanationHindi: "सब रुद्र: चल, अचल—सब रुद्रमय!", nanoBananaPrompt: "Everything is Rudra."
    },
    {
        id: 3, section: "UmaRudra", verse: 3, theme: "Uma and Knowledge",
        sanskrit: "उमात्मकं सर्वं विद्यारूपं । ये रुद्राः जगतः ते विष्णुः । ये विष्णुः जगतः स रुद्रः ।",
        hindi: "विद्या-रूप सब उमा है। जो रुद्र वे विष्णु; जो विष्णु वे रुद्र।",
        english: "All Knowledge is Uma. Those who are Rudra are Vishnu; He who is Vishnu is Rudra.",
        simpleExplanation: "IDENTITY: Uma = Knowledge. Rudra = Vishnu. Vishnu = Rudra!",
        simpleExplanationHindi: "एकता: उमा = विद्या। रुद्र = विष्णु। विष्णु = रुद्र!", nanoBananaPrompt: "Rudra is Vishnu."
    },
    // Part 2: Hari-Hara Unity Pairs
    {
        id: 4, section: "Pairs", verse: 4, theme: "Man and Woman",
        sanskrit: "रुद्रो नर उमा नारी तस्मै तस्यै नमो नमः ।",
        hindi: "रुद्र नर हैं, उमा नारी हैं; दोनों को नमस्कार।",
        english: "Rudra is Man, Uma is Woman; salutations to both.",
        simpleExplanation: "PAIR 1: Rudra = Man, Uma = Woman. Both sacred!",
        simpleExplanationHindi: "जोड़ी 1: रुद्र = नर, उमा = नारी!", nanoBananaPrompt: "Man and Woman."
    },
    {
        id: 5, section: "Pairs", verse: 5, theme: "Vishnu and Lakshmi",
        sanskrit: "रुद्रो विष्णुरुमा लक्ष्मीस्तस्मै तस्यै नमो नमः ।",
        hindi: "रुद्र ही विष्णु हैं, उमा ही लक्ष्मी हैं; दोनों को नमस्कार।",
        english: "RUDRA IS VISHNU, UMA IS LAKSHMI; salutations to both.",
        simpleExplanation: "CORE: Rudra = Vishnu! Uma = Lakshmi! ONE!",
        simpleExplanationHindi: "मूल: रुद्र = विष्णु! उमा = लक्ष्मी!", nanoBananaPrompt: "Rudra is Vishnu."
    },
    {
        id: 6, section: "Pairs", verse: 6, theme: "Sun and Shadow",
        sanskrit: "रुद्रः सूर्य उमा छाया । रुद्रः सोम उमा तारा ।",
        hindi: "रुद्र सूर्य, उमा छाया। रुद्र चंद्र, उमा तारा।",
        english: "Rudra is Sun, Uma is Shadow. Rudra is Moon, Uma is Star.",
        simpleExplanation: "COSMIC: Sun/Shadow, Moon/Stars = Rudra/Uma!",
        simpleExplanationHindi: "ब्रह्मांडीय: सूर्य/छाया, चंद्र/तारे = रुद्र/उमा!", nanoBananaPrompt: "Sun and shadow."
    },
    {
        id: 7, section: "Pairs", verse: 7, theme: "Day and Night",
        sanskrit: "रुद्रो दिवा उमा रात्रिः । रुद्रो यज्ञ उमा वेदिः ।",
        hindi: "रुद्र दिन, उमा रात। रुद्र यज्ञ, उमा वेदी।",
        english: "Rudra is Day, Uma is Night. Rudra is Sacrifice, Uma is Altar.",
        simpleExplanation: "TIME: Day/Night = Rudra/Uma. RITUAL: Yajna/Vedi!",
        simpleExplanationHindi: "काल: दिन/रात = रुद्र/उमा!", nanoBananaPrompt: "Day and night."
    },
    {
        id: 8, section: "Pairs", verse: 8, theme: "Fire and Svaha",
        sanskrit: "रुद्रो वह्निरुमा स्वाहा । रुद्रो वेद उमा शास्त्रम् ।",
        hindi: "रुद्र अग्नि, उमा स्वाहा। रुद्र वेद, उमा शास्त्र।",
        english: "Rudra is Fire, Uma is Svaha. Rudra is Veda, Uma is Scripture.",
        simpleExplanation: "SACRED: Fire/Svaha, Veda/Shastra = Rudra/Uma!",
        simpleExplanationHindi: "पवित्र: अग्नि/स्वाहा, वेद/शास्त्र = रुद्र/उमा!", nanoBananaPrompt: "Fire and Svaha."
    },
    // Part 3: Philosophy
    {
        id: 9, section: "Heart", verse: 9, theme: "THE CORE STATEMENT",
        sanskrit: "रुद्रहृदयं विष्णुर्विष्णुहृदयं शिवः ।",
        hindi: "रुद्र का हृदय विष्णु है, विष्णु का हृदय शिव है।",
        english: "VISHNU IS THE HEART OF RUDRA, SHIVA IS THE HEART OF VISHNU.",
        simpleExplanation: "MAHAVAKYA: Vishnu = Rudra's Heart! Shiva = Vishnu's Heart!",
        simpleExplanationHindi: "महावाक्य: विष्णु = रुद्र का हृदय! शिव = विष्णु का हृदय!", nanoBananaPrompt: "Heart of each other."
    },
    {
        id: 10, section: "Heart", verse: 10, theme: "Mutually Filled",
        sanskrit: "यथा विष्णुमयं सर्वं तथा शिवमयं जगत् ।",
        hindi: "जैसे सब विष्णुमय है, वैसे ही शिवमय है।",
        english: "Just as all is Vishnu-filled, so all is Shiva-filled.",
        simpleExplanation: "BOTH: World = Vishnu-filled = Shiva-filled!",
        simpleExplanationHindi: "दोनों: जगत = विष्णुमय = शिवमय!", nanoBananaPrompt: "Both fill all."
    },
    {
        id: 11, section: "Identity", verse: 11, theme: "Same Being",
        sanskrit: "यो विष्णुः स स्वयं रुद्रो यो रुद्रः स जनार्दनः ।",
        hindi: "जो विष्णु वे स्वयं रुद्र; जो रुद्र वे जनार्दन।",
        english: "He who is Vishnu is Himself Rudra; He who is Rudra is Janardana.",
        simpleExplanation: "IDENTICAL: Vishnu = Rudra. Rudra = Janardana (Vishnu)!",
        simpleExplanationHindi: "एक: विष्णु = रुद्र। रुद्र = जनार्दन!", nanoBananaPrompt: "Same being."
    },
    {
        id: 12, section: "Warning", verse: 12, theme: "Hate Warning",
        sanskrit: "यो रुद्रं द्वेष्टि स विष्णुं द्वेष्टि । यो विष्णुं द्वेष्टि स रुद्रं द्वेष्टि ।",
        hindi: "जो रुद्र से द्वेष करे वह विष्णु से करता है; जो विष्णु से करे वह रुद्र से।",
        english: "Who hates Rudra hates Vishnu. Who hates Vishnu hates Rudra.",
        simpleExplanation: "WARNING: Hate Shiva = Hate Vishnu! Hate Vishnu = Hate Shiva!",
        simpleExplanationHindi: "चेतावनी: शिव से द्वेष = विष्णु से द्वेष!", nanoBananaPrompt: "Sectarian warning."
    },
    {
        id: 13, section: "Analogy", verse: 13, theme: "Clay Analogy",
        sanskrit: "यथा एकमृत्पिण्डे भेदाभावः । तथा विष्णुरुद्रयोः भेदाभावः ॥",
        hindi: "जैसे एक मिट्टी के पिंड में भेद नहीं, वैसे विष्णु-रुद्र में भेद नहीं।",
        english: "As there's no difference in one lump of clay, so no difference between Vishnu-Rudra.",
        simpleExplanation: "CLAY ANALOGY: Pots differ, clay is ONE. Vishnu-Rudra = ONE!",
        simpleExplanationHindi: "मिट्टी: बर्तन भिन्न, मिट्टी एक। विष्णु-रुद्र = एक!", nanoBananaPrompt: "One clay."
    },
    // Part 4: Supreme Reality
    {
        id: 14, section: "Paramatma", verse: 14, theme: "One Supreme",
        sanskrit: "परमात्मा एक एवास्ति सः विष्णू रुद्रः ।",
        hindi: "परमात्मा एक ही है; वही विष्णु, वही रुद्र।",
        english: "The Supreme Self is ONE alone; He is Vishnu, He is Rudra.",
        simpleExplanation: "TRUTH: Paramatma = ONE. He = Vishnu = Rudra!",
        simpleExplanationHindi: "सत्य: परमात्मा = एक। वही = विष्णु = रुद्र!", nanoBananaPrompt: "One Paramatma."
    },
    {
        id: 15, section: "Sat-Chit", verse: 15, theme: "Satchidananda",
        sanskrit: "सच्चिदानन्दरूपाय शिवाय परमात्मने । नमो विष्णुस्वरूपाय विष्णवे शिवरूपिणे ॥",
        hindi: "सच्चिदानंद शिव परमात्मा को नमन। विष्णु-स्वरूप शिव और शिव-रूपी विष्णु को नमन।",
        english: "Salutations to Sat-Chit-Ananda Shiva Paramatma. To Vishnu who is Shiva-form, to Shiva who is Vishnu-form.",
        simpleExplanation: "NAMASKARA: Satchidananda! Vishnu = Shiva-form! Shiva = Vishnu-form!",
        simpleExplanationHindi: "नमन: सच्चिदानंद! विष्णु = शिव-रूप! शिव = विष्णु-रूप!", nanoBananaPrompt: "Satchidananda."
    },
    {
        id: 16, section: "Liberation", verse: 16, theme: "Non-difference = Moksha",
        sanskrit: "योऽभेदेन जानाति सः मुक्तिमाप्नोति ।",
        hindi: "जो अभेद से जानता है, वही मुक्ति प्राप्त करता है।",
        english: "He who knows them as NON-DIFFERENT attains Liberation.",
        simpleExplanation: "MOKSHA KEY: Know Shiva-Vishnu as NON-DIFFERENT = Liberation!",
        simpleExplanationHindi: "मोक्ष कुंजी: शिव-विष्णु अभेद जानो = मुक्ति!", nanoBananaPrompt: "Non-difference liberates."
    },
    // Part 5: Phala
    {
        id: 17, section: "Phala", verse: 17, theme: "Purification",
        sanskrit: "इदं रुद्रहृदयं योऽधीते स सर्वपापेभ्यः पूतो भवति । स विमुक्तो भवति ।",
        hindi: "जो इस रुद्र-हृदय का अध्ययन करे, वह सब पापों से पवित्र, विमुक्त होता है।",
        english: "Who studies this Rudra Hridaya is purified from all sins, becomes Liberated.",
        simpleExplanation: "FRUIT: Study this = All sins purified, LIBERATED!",
        simpleExplanationHindi: "फल: यह पढ़ो = सब पाप पवित्र, मुक्त!", nanoBananaPrompt: "Purification from sins."
    },
    {
        id: 18, section: "Conclusion", verse: 18, theme: "Closing",
        sanskrit: "ॐ तत् सत् । इत्युपनिषत् ॥",
        hindi: "ॐ तत् सत्। यही उपनिषद।",
        english: "OM Tat Sat. Thus ends the Upanishad.",
        simpleExplanation: "END: OM TAT SAT! Hari-Hara are ONE!",
        simpleExplanationHindi: "समाप्त: ॐ तत् सत्! हरि-हर एक!", nanoBananaPrompt: "Upanishad conclusion."
    }
];

export const RUDRA_HRIDAYA_METADATA = {
    id: "rudra-hridaya", name: "Rudra Hridaya", nameSanskrit: "रुद्रहृदयोपनिषद्",
    veda: "Krishna Yajur Veda", category: "Shaiva",
    shlokaCount: 18, sequenceNumber: 51,
    meaning: "The Heart of Rudra",
    hariHaraPairs: [
        { rudra: "Man (Nara)", uma: "Woman (Nari)" },
        { rudra: "Vishnu", uma: "Lakshmi" },
        { rudra: "Sun", uma: "Shadow" },
        { rudra: "Moon", uma: "Star" },
        { rudra: "Day", uma: "Night" },
        { rudra: "Sacrifice", uma: "Altar" },
        { rudra: "Fire", uma: "Svaha" },
        { rudra: "Veda", uma: "Shastra" }
    ],
    coreStatement: "Rudra's Heart = Vishnu. Vishnu's Heart = Shiva.",
    keyTeachings: [
        "All is Rudra-filled, all is Vishnu-filled",
        "Uma (Shakti) = All Knowledge",
        "Rudra = Vishnu, Vishnu = Rudra (absolute identity)",
        "CORE: Vishnu is Heart of Rudra, Shiva is Heart of Vishnu",
        "World is both Vishnu-maya and Shiva-maya",
        "WARNING: Hate Rudra = hate Vishnu; hate Vishnu = hate Rudra",
        "CLAY ANALOGY: Pots differ, clay is ONE",
        "Paramatma is ONE—He is Vishnu, He is Rudra",
        "Both are Satchidananda (Existence-Consciousness-Bliss)",
        "MOKSHA: Know them as NON-DIFFERENT = Liberation",
        "FRUIT: Study purifies all sins, grants Liberation"
    ],
    antiSectarian: "Bridges Shaiva-Vaishnava divide by declaring absolute oneness"
};
