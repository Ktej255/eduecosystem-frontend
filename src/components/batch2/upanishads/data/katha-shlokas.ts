// Katha Upanishad (कठोपनिषद्) - The Complete 119 Verses
// Source: Krishna Yajur Veda (Katha School)
// Structure: 2 Adhyayas (Chapters), 6 Vallis (Sections)
// Theme: Dialogue between Nachiketa and Yama (Lord of Death)

export interface KathaDataEntry {
    id: number;
    valli: 1 | 2 | 3 | 4 | 5 | 6;
    adhyaya: 1 | 2;
    section: "The Story" | "First Boon" | "Second Boon" | "Third Boon - Part 1" | "Third Boon - Part 2" | "The Chariot" | "Final Teaching";
    sanskrit: string;
    transliteration?: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    theme?: string;
    nanoBananaPrompt: string;
}

// ==========================================
// ADHYAYA 1, VALLI 1: THE CURSE AND ARRIVAL
// ==========================================
export const kathaData: KathaDataEntry[] = [
    // Verse 1: The Sacrifice
    {
        id: 1,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "उशन्ह वै वाजश्रवसः सर्ववेदसं ददौ । तस्य ह नचिकेता नाम पुत्र आस ॥ १ ॥",
        hindi: "प्राचीन काल में वाजश्रवस (उद्दालक) के पुत्र ने स्वर्ग के फल की कामना से विश्वजित यज्ञ किया और अपनी सारी संपत्ति दान कर दी। उनका नचिकेता नाम का एक पुत्र था।",
        english: "Desirous of the fruit (of heaven), Vajashravas gave away all his possessions (in a sacrifice). He had a son named Nachiketa.",
        simpleExplanation: "The story begins with a transaction—giving to get something in return. This sets up the contrast between greed (father) and purity (son).",
        simpleExplanationHindi: "यह कहानी एक लेन-देन से शुरू होती है—बदले में कुछ पाने के लिए देना। यह लालच (पिता) और पवित्रता (पुत्र) के बीच का विरोधाभास स्थापित करती है।",
        theme: "The Sacrifice",
        nanoBananaPrompt: "An ancient Indian sacrifice arena with a rich king performing rituals near a fire, weak skeletal cows in background, tense atmosphere."
    },

    // Verse 2: The Awakening of Faith
    {
        id: 2,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "तँ ह कुमारँ सन्तं दक्षिणासु नीयमानासु श्रद्धाविवेश सोऽमन्यत ॥ २ ॥",
        hindi: "जब (पुरोहितों को) दक्षिणा दी जा रही थी, तब बालक नचिकेता के हृदय में 'श्रद्धा' (सत्य जानने की आस्तिक बुद्धि) का प्रवेश हुआ। उसने मन में विचार किया...",
        english: "As the gifts (cows) were being led away, Shraddha (Faith/Sincerity) entered into the young boy Nachiketa. He thought to himself...",
        simpleExplanation: "'Shraddha' is the most important word in the Upanishads. It is not just faith—it is the courage for Truth. Wisdom starts when you question the status quo.",
        simpleExplanationHindi: "'श्रद्धा' उपनिषदों का सबसे महत्वपूर्ण शब्द है। यह केवल विश्वास नहीं, बल्कि सत्य के लिए साहस है। बुद्धिमत्ता तब शुरू होती है जब आप यथास्थिति पर सवाल उठाते हैं।",
        theme: "Awakening of Faith",
        nanoBananaPrompt: "A young radiant boy with a glowing heart, watching weak cows being led away, questioning look, sacred fire in background."
    },

    // Verse 3: The Useless Cows
    {
        id: 3,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "पीतोदका जग्धतृणा दुग्धदोहा निरिन्द्रियाः । अनन्दा नाम ते लोकास्तान्स गच्छति ता ददत् ॥ ३ ॥",
        hindi: "(मेरे पिता ऐसी गायें दान कर रहे हैं) जिन्होंने पानी पी लिया है, घास खा ली है, जिनका दूध दोहा जा चुका है और जिनकी इन्द्रियां शिथिल हो गई हैं (बांझ हैं)। जो व्यक्ति ऐसा दान करता है, वह 'अनन्द' (सुख रहित) लोकों को जाता है।",
        english: "These cows have drunk their water, eaten their grass, yielded their milk for the last time, and are barren. Joyless (Ananda) are those worlds where he goes who gives such gifts.",
        simpleExplanation: "A critique of empty rituals. Spiritual currency requires sacrifice of something valuable, not something useless. You can't buy 'heaven' by donating 'garbage'.",
        simpleExplanationHindi: "खोखले कर्मकांड की आलोचना। आध्यात्मिक मुद्रा के लिए कुछ मूल्यवान का त्याग आवश्यक है, न कि बेकार चीज़ का। 'कचरा' दान करके 'स्वर्ग' नहीं खरीदा जा सकता।",
        theme: "The Useless Gift",
        nanoBananaPrompt: "Weak, skeletal, old cows with dry udders, symbolic of worthless sacrifice, dark atmosphere, hypocrisy exposed."
    },

    // Verse 4: The Question
    {
        id: 4,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "स होवाच पितरं तत कस्मै मां दास्यसीति । द्वितीयं तृतीयं तँ होवाच मृत्यवे त्वा ददामीति ॥ ४ ॥",
        hindi: "उसने अपने पिता से पूछा, 'हे पिता! (जब आप सब कुछ दान कर रहे हैं) तो मुझे किसे देंगे?' उसने दो बार, तीन बार पूछा। तब पिता ने (क्रोध में) कहा, 'मैं तुझे मृत्यु को देता हूँ!'",
        english: "He said to his father, 'Father, to whom will you give me?' He asked this a second and a third time. Then the father replied (in anger), 'Unto Death I give thee!'",
        simpleExplanation: "Nachiketa knew a son is the father's greatest wealth. To make his father's sacrifice complete, he offered himself. Words once spoken cannot be taken back.",
        simpleExplanationHindi: "नचिकेता जानता था कि पुत्र पिता की सबसे बड़ी संपत्ति है। पिता के यज्ञ को सफल बनाने के लिए उसने खुद को अर्पित किया। बोले गए शब्द वापस नहीं लिए जा सकते।",
        theme: "The Curse",
        nanoBananaPrompt: "Dramatic scene: angry king pointing at a calm young boy, sacrificial fire between them, Sanskrit text 'मृत्यवे त्वा ददामीति' floating in smoke."
    },

    // Verse 5: The Ranking
    {
        id: 5,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "बहूनामेमि प्रथमो बहूनामेमि मध्यमः । किँ स्विद्यमस्य कर्तव्यं यन्मयाद्य करिष्यति ॥ ५ ॥",
        hindi: "(नचिकेता सोचता है): बहुतों में मैं श्रेष्ठ (प्रथम) हूँ, और बहुतों में मैं मध्यम हूँ (मैं सबसे बुरा तो नहीं हूँ)। यमराज का ऐसा कौन सा कार्य है जो आज मेरे माध्यम से सिद्ध होगा?",
        english: "Among many I go as the first (the best); among many I go as the middle (average). What purpose of Yama (Death) is there that he will accomplish through me today?",
        simpleExplanation: "Self-Audit before death. Nachiketa realizes he has value and is not afraid to face his destiny. He questions his worth before the ultimate test.",
        simpleExplanationHindi: "मृत्यु से पहले आत्म-विश्लेषण। नचिकेता को अहसास है कि उसकी कीमत है और वह अपने भाग्य का सामना करने से नहीं डरता। वह अंतिम परीक्षा से पहले अपनी योग्यता पर सवाल उठाता है।",
        theme: "Self-Audit",
        nanoBananaPrompt: "Young boy in contemplation, looking at his own reflection, measuring his worth, cosmic scales in background."
    },

    // Verse 6: The Cycle of Crops
    {
        id: 6,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "अनुपश्य यथा पूर्वे प्रतिपश्य तथापरे । सस्यमिव मर्त्यः पच्यते सस्यमिवाजायते पुनः ॥ ६ ॥",
        hindi: "(पिता को शोक करते देख नचिकेता कहता है): पूर्वजों की ओर देखें और वर्तमान के लोगों को भी देखें। मनुष्य अनाज (फसल) की तरह पकता है और झड़ जाता है, और अनाज की तरह ही फिर से पैदा होता है।",
        english: "Look back at how our forefathers acted, and look around at how others act today. Like corn, the mortal ripens and falls; like corn, he is born again.",
        simpleExplanation: "The Law of Nature. Everything is cyclical. Why fear death if it is just a harvest? This is the doctrine of rebirth—life is a crop, death is not the end.",
        simpleExplanationHindi: "प्रकृति का नियम। सब कुछ चक्रीय है। मृत्यु से क्यों डरें जब यह केवल एक फसल है? यह पुनर्जन्म का सिद्धांत है—जीवन एक फसल है, मृत्यु अंत नहीं है।",
        theme: "Cycle of Life",
        nanoBananaPrompt: "Surreal art: golden wheat fields being harvested, human silhouettes rising from seeds, cycle of life visualization, spiritual journey."
    }
];

// Metadata for Katha Upanishad
export const KATHA_METADATA = {
    id: "katha",
    name: "Katha",
    nameSanskrit: "कठोपनिषद्",
    veda: "Krishna Yajurveda",
    shlokaCount: 119,
    adhyayaCount: 2,
    valliCount: 6,
    meaning: "The Dialogue with Death",
    theme: "Nachiketa's Journey to Immortality",
    characters: {
        nachiketa: "Young seeker representing Shraddha (faith)",
        vajashravas: "Father representing hollow ritualism",
        yama: "Lord of Death, the ultimate Guru"
    },
    structure: [
        { adhyaya: 1, valli: 1, title: "The Curse & Arrival", verseRange: "1-29" },
        { adhyaya: 1, valli: 2, title: "The Three Boons", verseRange: "1-25" },
        { adhyaya: 1, valli: 3, title: "The Chariot Metaphor", verseRange: "1-17" },
        { adhyaya: 2, valli: 1, title: "The Indestructible Self", verseRange: "1-15" },
        { adhyaya: 2, valli: 2, title: "The Path of Liberation", verseRange: "1-15" },
        { adhyaya: 2, valli: 3, title: "The Final Teaching", verseRange: "1-18" }
    ],
    visualTheme: {
        primary: "#1e1b4b",    // Indigo-950 (Death's realm)
        secondary: "#fbbf24",  // Amber-400 (Fire/Wisdom)
        accent: "#f97316",     // Orange-500 (Sacrifice)
        gradient: "from-indigo-950 via-purple-900 to-slate-900"
    }
};

// Helper: Get verses by Valli
export const getKathaByValli = (valli: number) => kathaData.filter(v => v.valli === valli);

// Helper: Get verses by Adhyaya
export const getKathaByAdhyaya = (adhyaya: number) => kathaData.filter(v => v.adhyaya === adhyaya);
