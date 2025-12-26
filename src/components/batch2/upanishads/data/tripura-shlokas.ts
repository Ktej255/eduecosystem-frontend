// Tripura Upanishad (#47 in Muktika Canon) | Rig Veda | Shakta
// Theme: Sri Chakra Geometry, Nine Enclosures (Navavarana), 16 Nityas
// Total: 16 Mantras

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface TripuraDataEntry {
    id: number; section: string; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const TRIPURA_SHANTI_MANTRA = {
    sanskrit: "ॐ वाङ् मे मनसि प्रतिष्ठिता । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरी वाणी मन में प्रतिष्ठित हो। शांति।",
    english: "OM! May my speech be established in my mind. OM Peace."
};

export const TRIPURA_SHLOKAS: TripuraDataEntry[] = [
    // Part 1: Geometry
    {
        id: 1, section: "Geometry", verse: 1, theme: "Three Cities",
        sanskrit: "तिस्रः पुरस्रिपथार्विश्वचर्षणीरत्राकथा अक्षराः संनिविष्टाः ।",
        hindi: "तीन पुर, तीन पथ, विश्वदर्शिनी। यहाँ 'अ' से 'क-थ' तक अक्षर समाविष्ट।",
        english: "Three Cities, Three Paths, All-Seeing. Herein letters 'A' to 'Ka-Tha' reside.",
        simpleExplanation: "SRI YANTRA: 3 Cities, 3 Paths, Sanskrit letters A-Ka-Tha!",
        simpleExplanationHindi: "श्री यंत्र: 3 पुर, 3 पथ, संस्कृत अक्षर!", nanoBananaPrompt: "Three cities encoded."
    },
    {
        id: 2, section: "Geometry", verse: 2, theme: "Nine Chakras",
        sanskrit: "नवानां नवधा चक्रं नवचक्रं तपोमया । नवानां चक्राणामधिपो महेश्वरो नवचक्रेश्वरी देवता ॥",
        hindi: "नौ का नौ प्रकार का नव-चक्र तपोमय। अधिपति महेश्वर, देवता नवचक्रेश्वरी।",
        english: "Nine-fold Nine-Chakra (Sri Yantra) is of Light. Lord is Maheshvara, Deity is NAVACHAKRESHWARI.",
        simpleExplanation: "NAVACHAKRA: 9 Enclosures! Lord=Shiva, Goddess=Queen of 9 Chakras!",
        simpleExplanationHindi: "नवचक्र: 9 आवरण! स्वामी=शिव, देवी=नवचक्रेश्वरी!", nanoBananaPrompt: "Nine chakras of yantra."
    },
    {
        id: 3, section: "Geometry", verse: 3, theme: "Nine Triangles",
        sanskrit: "नवै योनीर्नव चक्राणि दधिरे नवो योगास्त्रय उग्राः ।",
        hindi: "नौ योनियां (त्रिकोण), नौ चक्र, नौ योगिनियां। तीन उग्र।",
        english: "Nine Triangles (Yonis), Nine Chakras, Nine Yoginis. Three are Fierce.",
        simpleExplanation: "STRUCTURE: 9 Triangles + 9 Chakras + 9 Yoginis. 3 are Fierce!",
        simpleExplanationHindi: "संरचना: 9 त्रिकोण + 9 चक्र + 9 योगिनी। 3 उग्र!", nanoBananaPrompt: "Nine triangles."
    },
    {
        id: 4, section: "Geometry", verse: 4, theme: "The Light",
        sanskrit: "भजीयसी दीपदीप्तारुचिस्रा विरोजमाना चलनी च ।",
        hindi: "अत्यंत भजनीय, दीपक जैसी दीप्तिमान, विराजमान और स्पंदनशील।",
        english: "Most adorable, lamp-like radiance, resplendent, vibrating (Spanda).",
        simpleExplanation: "GODDESS: Lamp-radiant, vibrating with SPANDA (cosmic pulse)!",
        simpleExplanationHindi: "देवी: दीप-दीप्त, स्पंदनशील!", nanoBananaPrompt: "Vibrating light."
    },
    {
        id: 5, section: "Philosophy", verse: 5, theme: "Kama Kala",
        sanskrit: "कामुकं कल्याणीं कामरूपामपि कामदोहनीम् । यां विदित्वा न कामेन लिप्यते ॥",
        hindi: "कामेश्वर की शक्ति, कल्याणी, कामरूपा, कामनापूरक। जो जाने, वासना से अलिप्त।",
        english: "Beloved of Kameshwara, Auspicious, Form of Desire, Fulfiller. Knowing Her, one is not tainted by desire.",
        simpleExplanation: "PARADOX: Know the Desire-Goddess = NEVER tainted by desire!",
        simpleExplanationHindi: "विरोधाभास: काम-देवी को जानो = वासना से मुक्त!", nanoBananaPrompt: "Desire without taint."
    },
    // Part 2: Vedic Mantras
    {
        id: 6, section: "Vedic", verse: 6, theme: "Durga Suktam",
        sanskrit: "जातवेदसे सुनवाम सोममरातीयतो निदहाति वेदः । स नः पर्षदति दुर्गाणि विश्वा ॥",
        hindi: "जातवेदा के लिए सोम। शत्रुओं को जलाए। सभी दुर्गम से पार करे।",
        english: "Press Soma for All-Knowing. May She consume enemies. Carry us across all difficulties.",
        simpleExplanation: "DURGA SUKTAM: May She carry us across ALL DURGA (difficulties)!",
        simpleExplanationHindi: "दुर्गा सूक्तम: सब कठिनाइयों से पार करे!", nanoBananaPrompt: "Durga Suktam verse."
    },
    {
        id: 7, section: "Vedic", verse: 7, theme: "Mrityunjaya",
        sanskrit: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात् ॥",
        hindi: "त्र्यम्बक का यजन। ककड़ी जैसे बंधन से मुक्त हों, अमृत से नहीं।",
        english: "Worship Three-Eyed, fragrant. Free from death like cucumber from vine, not from Immortality.",
        simpleExplanation: "MRITYUNJAYA: Free from death, NOT from Immortality!",
        simpleExplanationHindi: "मृत्युंजय: मृत्यु से मुक्त, अमृत से नहीं!", nanoBananaPrompt: "Mrityunjaya connection."
    },
    {
        id: 8, section: "Vedic", verse: 8, theme: "Gayatri",
        sanskrit: "तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥",
        hindi: "सविता के भर्ग का ध्यान। बुद्धि प्रेरित करे।",
        english: "We meditate on Savitr's Glory. May He inspire our intellects.",
        simpleExplanation: "GAYATRI: The Light (Bharga) = GODDESS! Inspires intellects!",
        simpleExplanationHindi: "गायत्री: भर्ग = देवी! बुद्धि प्रेरित!", nanoBananaPrompt: "Gayatri as Tripura."
    },
    // Part 3: Identity
    {
        id: 9, section: "Identity", verse: 10, theme: "She is All",
        sanskrit: "सर्वं चैवैतद्भगवती शक्तिः ।",
        hindi: "यह सब भगवती शक्ति ही है।",
        english: "ALL THIS is verily the Goddess Shakti.",
        simpleExplanation: "MAHAVAKYA: ALL THIS = GODDESS SHAKTI!",
        simpleExplanationHindi: "महावाक्य: यह सब = भगवती शक्ति!", nanoBananaPrompt: "All is Shakti."
    },
    {
        id: 10, section: "Identity", verse: 11, theme: "Mirror Image",
        sanskrit: "रूपं रूपं प्रतिरूपो बभूव तदस्य रूपं प्रतिचक्षणाय ।",
        hindi: "वह प्रत्येक रूप में प्रतिरूप बनी। जगत उसका प्रतिबिंब।",
        english: "She became the original of every form. The Universe is Her mirror-image.",
        simpleExplanation: "MIRROR: Universe = MIRROR IMAGE of the Goddess!",
        simpleExplanationHindi: "दर्पण: जगत = देवी का प्रतिबिंब!", nanoBananaPrompt: "Universe as mirror."
    },
    {
        id: 11, section: "Identity", verse: 12, theme: "16 Nityas",
        sanskrit: "शोडशकलाः षोडशकलेति ।",
        hindi: "वह सोलह कलाओं वाली है।",
        english: "She is of SIXTEEN PARTS (16 Nitya Goddesses).",
        simpleExplanation: "16 NITYAS: 16 Lunar digits = 16 Eternal Goddesses!",
        simpleExplanationHindi: "16 नित्या: 16 चंद्र-कला = 16 शाश्वत देवियाँ!", nanoBananaPrompt: "Sixteen Nityas."
    },
    {
        id: 12, section: "Identity", verse: 13, theme: "Trimurti",
        sanskrit: "य एतां त्रिपुरं विद्यामभितोऽवति । अत्र ब्रह्मविष्णुरुद्रा देवताः ।",
        hindi: "जो त्रिपुर-विद्या जाने। यहाँ ब्रह्मा, विष्णु, रुद्र देवता।",
        english: "Who knows Tripura Vidya entirely. Herein Brahma, Vishnu, Rudra are deities.",
        simpleExplanation: "TRIMURTI: Brahma-Vishnu-Rudra are WITHIN this Vidya!",
        simpleExplanationHindi: "त्रिमूर्ति: ब्रह्मा-विष्णु-रुद्र इस विद्या में!", nanoBananaPrompt: "Trimurti deities."
    },
    // Part 4: Fruit
    {
        id: 13, section: "Fruit", verse: 14, theme: "Supreme Shri",
        sanskrit: "य एवं वेद स महतीं श्रियमश्नुते ।",
        hindi: "जो ऐसा जानता है, वह महती श्री प्राप्त करता है।",
        english: "He who knows this attains SUPREME SHRI (Prosperity/Liberation).",
        simpleExplanation: "FRUIT: Know this = attain SUPREME SHRI!",
        simpleExplanationHindi: "फल: यह जानो = परम श्री प्राप्त!", nanoBananaPrompt: "Attaining Shri."
    },
    {
        id: 14, section: "Fruit", verse: 15, theme: "Speech-Mind Unity",
        sanskrit: "वाङ् मे मनसि प्रतिष्ठिता । मनो मे वाचि प्रतिष्ठितम् ।",
        hindi: "मेरी वाणी मन में, मन वाणी में प्रतिष्ठित।",
        english: "My speech established in mind. My mind established in speech.",
        simpleExplanation: "UNITY: Speech ↔ Mind = PERFECT ALIGNMENT!",
        simpleExplanationHindi: "एकता: वाणी ↔ मन = पूर्ण संरेखण!", nanoBananaPrompt: "Speech-mind unity."
    },
    {
        id: 15, section: "Conclusion", verse: 16, theme: "Day-Night Study",
        sanskrit: "अनेनाधीतेनाहोरात्रान्सन्दधामि ।",
        hindi: "इस अध्ययन से मैं दिन-रात को एक करता हूँ।",
        english: "With this study, I join day and night together.",
        simpleExplanation: "UNIFICATION: Day + Night = ONE through this study!",
        simpleExplanationHindi: "एकीकरण: दिन + रात = एक!", nanoBananaPrompt: "Joining day and night."
    },
    {
        id: 16, section: "Conclusion", verse: 16, theme: "Closing",
        sanskrit: "ॐ तत् सत् । इत्युपनिषत् ॥",
        hindi: "ॐ तत् सत्। यही उपनिषद।",
        english: "OM Tat Sat. Thus ends the Upanishad.",
        simpleExplanation: "END: OM TAT SAT! Tripura Upanishad complete!",
        simpleExplanationHindi: "समाप्त: ॐ तत् सत्!", nanoBananaPrompt: "Upanishad conclusion."
    }
];

export const TRIPURA_METADATA = {
    id: "tripura", name: "Tripura", nameSanskrit: "त्रिपुरोपनिषद्",
    veda: "Rig Veda", category: "Shakta",
    shlokaCount: 16, sequenceNumber: 47,
    meaning: "The Upanishad of the Three Cities/Sri Chakra Geometry",
    sriChakraNavavarana: {
        description: "9 Enclosures of the Sri Yantra",
        lord: "Maheshwara (Shiva)",
        goddess: "Navachakreshwari (Tripura Sundari)",
        elements: ["9 Triangles (Yonis)", "9 Chakras", "9 Yoginis", "3 Fierce ones"]
    },
    sixteenNityas: {
        description: "16 Eternal Goddesses representing 16 lunar digits (tithis)",
        connection: "Moon's 16 phases = 16 aspects of the Supreme Goddess"
    },
    vedicMantras: {
        durgaSuktam: { verse: 6 },
        mrityunjaya: { verse: 7 },
        gayatri: { verse: 8 }
    },
    keyTeachings: [
        "3 Cities + 3 Paths + Sanskrit letters A-Ka-Tha",
        "NAVACHAKRA: 9 Enclosures, Lord=Shiva, Goddess=Navachakreshwari",
        "9 Triangles + 9 Chakras + 9 Yoginis",
        "Goddess is SPANDA (cosmic vibration)",
        "PARADOX: Know Desire-Goddess = never tainted by desire",
        "Durga Suktam, Mrityunjaya, Gayatri all encode Her",
        "ALL THIS = GODDESS SHAKTI",
        "Universe = MIRROR IMAGE of the Goddess",
        "16 NITYAS = 16 Lunar Goddesses",
        "Brahma-Vishnu-Rudra are WITHIN this Vidya",
        "FRUIT: Attain Supreme Shri (Prosperity/Liberation)"
    ]
};
