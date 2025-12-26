// Brahma Upanishad Data (#11 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Sannyasa
// Theme: Four Seats of Consciousness, Inner Thread (Yajnopavita)

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface BrahmaDataEntry {
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

export const BRAHMA_SHLOKAS: BrahmaDataEntry[] = [
    {
        id: 1,
        part: 1,
        verse: 1,
        theme: "The Great Question",
        sanskrit: "भगवन् केन मार्गेणान्वितो ब्रह्मवित् परावरं ब्रह्मानुभवति?",
        hindi: "शौनक ने पूछा: 'भगवन्! किस मार्ग से ब्रह्मवेत्ता परम और अपर ब्रह्म का अनुभव करता है?'",
        english: "Shaunaka asked: 'By which path does the Knower of Brahman experience the Supreme Reality, both Manifest and Unmanifest?'",
        simpleExplanation: "THE METHODOLOGY QUESTION: How do we move from intellectual knowledge to DIRECT EXPERIENCE of God?",
        simpleExplanationHindi: "विधि प्रश्न: बौद्धिक ज्ञान से ईश्वर के प्रत्यक्ष अनुभव तक कैसे पहुंचें?",
        nanoBananaPrompt: "A wealthy householder approaching a sage with firewood, asking about the path to experience Brahman.",
        wordMeanings: [
            { sanskrit: "anubhavati", devanagari: "अनुभवति", hindi: "अनुभव करता है", english: "experiences directly" }
        ]
    },
    {
        id: 2,
        part: 1,
        verse: 2,
        theme: "Four Seats of the Soul",
        sanskrit: "नाभौ हृदये कण्ठे मूर्ध्नि च। तत्र चतुष्पाद्ब्रह्म विभाति।",
        hindi: "ब्रह्म शरीर में चार स्थानों पर प्रकाशित है: नाभि, हृदय, कंठ और मस्तक। इस प्रकार ब्रह्म चतुष्पाद (चार पैरों वाला) है।",
        english: "Brahman shines in four places: Navel, Heart, Throat, and Head. Thus Brahman appears as Four-Footed.",
        simpleExplanation: "GOD'S 4 LOCATIONS IN YOU: Navel (Creation), Heart (Deep Sleep), Throat (Dreams), Head (Transcendence)!",
        simpleExplanationHindi: "तुम्हारे अंदर ईश्वर के 4 स्थान: नाभि (सृजन), हृदय (सुषुप्ति), कंठ (स्वप्न), मस्तक (तुरीय)!",
        nanoBananaPrompt: "A human silhouette with four glowing points: navel, heart, throat, and crown.",
        wordMeanings: [
            { sanskrit: "chatushpād", devanagari: "चतुष्पाद्", hindi: "चार पैरों वाला", english: "four-footed" }
        ]
    },
    {
        id: 3,
        part: 1,
        verse: 3,
        theme: "States and Deities",
        sanskrit: "जागरितं ब्रह्मा नाभौ। स्वप्नं विष्णुः कण्ठे। सुषुप्तिं रुद्रो हृदये। तुरीयं परमक्षरं मूर्ध्नि॥",
        hindi: "जाग्रत = ब्रह्मा नाभि में। स्वप्न = विष्णु कंठ में। सुषुप्ति = रुद्र हृदय में। तुरीय = परम अक्षर मस्तक में।",
        english: "Waking = Brahma at Navel. Dreaming = Vishnu at Throat. Deep Sleep = Rudra at Heart. Turiya = Supreme Imperishable at Head.",
        simpleExplanation: "THE TRINITY WITHIN: Brahma CREATES in waking (navel), Vishnu PRESERVES dreams (throat), Rudra DESTROYS ego in sleep (heart), Beyond = TURIYA!",
        simpleExplanationHindi: "अंदर की त्रिमूर्ति: ब्रह्मा जागते में सृजन (नाभि), विष्णु स्वप्न में पालन (कंठ), रुद्र सुषुप्ति में लय (हृदय), परे = तुरीय!",
        nanoBananaPrompt: "Four levels: navel with Brahma creating, throat with Vishnu dreaming, heart with Shiva dissolving, crown with pure light.",
        wordMeanings: [
            { sanskrit: "paramākṣaram", devanagari: "परमाक्षरम्", hindi: "परम अविनाशी", english: "Supreme Imperishable" }
        ]
    },
    {
        id: 4,
        part: 2,
        verse: 5,
        theme: "Pot and Space Analogy",
        sanskrit: "घटसंवृतमाकाशं नीयमाने घटे यथा। घटो नीयेत नाकाशं तथा जीवो नभोपमः॥",
        hindi: "जैसे घड़े को ले जाने पर घड़ा जाता है, पर उसके अंदर का आकाश नहीं जाता—वैसे ही जीव आकाश जैसा स्थिर है, केवल शरीर चलता है।",
        english: "When a pot moves, the pot moves but the space inside does not. Similarly, the Soul is like space—immovable; only the body moves.",
        simpleExplanation: "YOU DON'T TRAVEL: When body dies, soul doesn't 'go' to heaven—it realizes it was ALWAYS the Infinite Space!",
        simpleExplanationHindi: "तुम यात्रा नहीं करते: शरीर मरने पर आत्मा स्वर्ग 'जाती' नहीं—वह जान लेती है कि वह सदा अनंत आकाश थी!",
        nanoBananaPrompt: "A clay pot being carried, but the space inside remains still. Pot breaks, space merges with infinite space.",
        wordMeanings: [
            { sanskrit: "ghaṭākāśa", devanagari: "घटाकाश", hindi: "घड़े का आकाश", english: "pot-space" }
        ]
    },
    {
        id: 5,
        part: 3,
        verse: 6,
        theme: "Discard External Thread",
        sanskrit: "सशिखं वपनं कृत्वा बहिःसूत्रं त्यजेद्बुधः। यदक्षरं परं ब्रह्म तत्सूत्रमिति धारयेत्॥",
        hindi: "बुद्धिमान व्यक्ति शिखा सहित सिर मुंडवाकर बाहरी सूत्र (जनेऊ) त्याग दे। अविनाशी परब्रह्म को ही अपना सूत्र माने।",
        english: "The wise man should shave his head with the tuft and discard the external thread. The Imperishable Brahman is the real Thread.",
        simpleExplanation: "THE INNER JANEU: A cotton string is just a social badge. BRAHMAN is the thread that actually connects the universe!",
        simpleExplanationHindi: "आंतरिक जनेऊ: सूती धागा केवल सामाजिक चिह्न है। ब्रह्म वह धागा है जो वास्तव में ब्रह्मांड को जोड़ता है!",
        nanoBananaPrompt: "A monk discarding a cotton thread into water, while golden light (Brahman) threads through all creation.",
        wordMeanings: [
            { sanskrit: "bahiḥsūtram", devanagari: "बहिःसूत्रम्", hindi: "बाहरी धागा", english: "external thread" }
        ]
    },
    {
        id: 6,
        part: 3,
        verse: 8,
        theme: "Cosmic Necklace",
        sanskrit: "येन सर्वमिदं प्रोतं सूत्रे मणिगणा इव। तत्सूत्रं धारयेद्योगी योगवित्तत्त्वदर्शिवान्॥",
        hindi: "जैसे धागे में मणियां पिरोई होती हैं, वैसे ही सब कुछ जिसमें पिरोया है—वही सूत्र योगी को धारण करना चाहिए।",
        english: "Just as gems are strung on a thread, so is this universe strung on That (Brahman). The Yogi should wear THAT Thread.",
        simpleExplanation: "BRAHMAN = THE STRING: All worlds are beads on ONE divine thread. Realize that thread = LIBERATION!",
        simpleExplanationHindi: "ब्रह्म = धागा: सारे लोक एक दिव्य धागे पर मोती हैं। उस धागे को जानो = मुक्ति!",
        nanoBananaPrompt: "A cosmic necklace with planets and stars as beads, strung on a golden thread of light (Brahman).",
        wordMeanings: [
            { sanskrit: "maṇigaṇāḥ", devanagari: "मणिगणाः", hindi: "मणियों का समूह", english: "clusters of gems" }
        ]
    },
    {
        id: 7,
        part: 4,
        verse: 11,
        theme: "True Shikha (Knowledge Flame)",
        sanskrit: "अग्नेरिव शिखा नान्या यस्य ज्ञानमयी शिखा। स शिखीत्युच्यते विद्वान् नेतरे केशधारिणः॥",
        hindi: "जैसे अग्नि की शिखा (ज्वाला) होती है, वैसे ही जिसकी शिखा ज्ञानमय है—वही 'शिखी' कहलाता है। बाकी तो केवल 'बाल उगाने वाले' हैं।",
        english: "Like the flame of fire, whose tuft is Knowledge—he is called the true 'Shikhi'. Others are merely growers of hair.",
        simpleExplanation: "BURN IGNORANCE: A physical tuft means nothing. The FLAME of wisdom burning on your head = TRUE Brahmin!",
        simpleExplanationHindi: "अज्ञान जलाओ: भौतिक चोटी का कोई अर्थ नहीं। तुम्हारे सिर पर ज्ञान की ज्वाला = सच्चा ब्राह्मण!",
        nanoBananaPrompt: "Two figures: one with a hair tuft, one with a flame of knowledge rising from the crown. The flame-bearer is the true Brahmin.",
        wordMeanings: [
            { sanskrit: "jñānamayī śikhā", devanagari: "ज्ञानमयी शिखा", hindi: "ज्ञान की शिखा", english: "tuft of knowledge" }
        ]
    },
    {
        id: 8,
        part: 5,
        verse: 12,
        theme: "Eko Devah (One God)",
        sanskrit: "एको देवः सर्वभूतेषु गूढः सर्वव्यापी सर्वभूतान्तरात्मा। कर्माध्यक्षः सर्वभूताधिवासः साक्षी चेता केवलो निर्गुणश्च॥",
        hindi: "एक ही देव सब प्राणियों में छिपा है, सर्वव्यापी, सबकी अंतरात्मा। कर्मों का अध्यक्ष, सबका निवास, साक्षी, चेतन, केवल और निर्गुण।",
        english: "One God is hidden in all beings, all-pervading, the Inner Self of all. Overseer of actions, Abode of all, the Witness, Conscious, Absolute, and without attributes.",
        simpleExplanation: "ONE GOD IN ALL: Hidden like butter in milk, witnessing everything, beyond qualities—THAT is the TRUE God!",
        simpleExplanationHindi: "सबमें एक ईश्वर: दूध में मक्खन की तरह छिपा, सब देखता, गुणों से परे—वही सच्चा ईश्वर!",
        nanoBananaPrompt: "One light pervading all beings—humans, animals, plants—as the hidden witness inside each.",
        wordMeanings: [
            { sanskrit: "sākṣī", devanagari: "साक्षी", hindi: "गवाह", english: "witness" },
            { sanskrit: "nirguṇa", devanagari: "निर्गुण", hindi: "गुणरहित", english: "without attributes" }
        ]
    }
];

export const BRAHMA_METADATA = {
    id: "brahma",
    name: "Brahma",
    nameSanskrit: "ब्रह्मोपनिषद्",
    veda: "Krishna Yajur Veda",
    category: "Sannyasa",
    shlokaCount: 8,
    sequenceNumber: 11,
    keyTeachings: [
        "Four Seats of Consciousness (Navel, Heart, Throat, Head)",
        "Pot-Space Analogy (Ghatakasha)",
        "Inner Thread (Brahman) vs External Thread (Cotton)",
        "True Shikha = Flame of Knowledge",
        "Eko Devah (One God in All)"
    ],
    famousVerses: {
        fourSeats: { id: 2, part: 1, verse: 2 },
        ekoDevah: { id: 8, part: 5, verse: 12 }
    }
};
