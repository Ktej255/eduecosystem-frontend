// Akshamalika Upanishad Data (#44 in Muktika Canon)
// Source: Rig Veda | Category: Shaiva/Shakta
// Theme: Japa Mala (Rosary) - Materials, Construction, Consecration
// Total: 11 Mantras/Sections

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface AkshamalikaDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const AKSHAMALIKA_SHANTI_MANTRA = {
    sanskrit: "ॐ वाङ् मे मनसि प्रतिष्ठिता । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरी वाणी मन में प्रतिष्ठित हो। शांति।",
    english: "OM! May my speech be established in mind. OM Peace."
};

export const AKSHAMALIKA_SHLOKAS: AkshamalikaDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "Kartikeya Asks",
        sanskrit: "अक्षमालाभेदविधिं ब्रूहि । सा किल्लक्षणा कतिभेदा ।",
        hindi: "अक्षमाला (माला) के भेदों की विधि बताइए। उसका लक्षण और भेद क्या?",
        english: "Tell the rules of Akshamala. What is its characteristic and types?",
        simpleExplanation: "KARTIKEYA ASKS: What is Rosary? Types? How to make? How to consecrate?",
        simpleExplanationHindi: "कार्तिकेय पूछते हैं: माला क्या? प्रकार? कैसे बनाएं? कैसे अभिमंत्रित करें?",
        nanoBananaPrompt: "Kartikeya asking Brahma about the sacred rosary."
    },
    {
        id: 2, mantra: 2, theme: "Ten Materials",
        sanskrit: "प्रवाळ-मौक्तिक-स्फटिक-शङ्ख-राजत-हाटक-चन्दन-पुत्रजीवक-कमल-रुद्राक्षा इति ।",
        hindi: "मूंगा, मोती, स्फटिक, शंख, चांदी, सोना, चंदन, पुत्रजीवक, कमल बीज, रुद्राक्ष।",
        english: "Coral, Pearl, Crystal, Conch, Silver, Gold, Sandalwood, Putrajiva, Lotus seeds, Rudraksha.",
        simpleExplanation: "10 MATERIALS: Coral, Pearl, Crystal, Conch, Silver, Gold, Sandalwood, Putrajiva, Lotus, Rudraksha!",
        simpleExplanationHindi: "10 सामग्री: मूंगा, मोती, स्फटिक, शंख, चांदी, सोना, चंदन, पुत्रजीवक, कमल, रुद्राक्ष!",
        nanoBananaPrompt: "Ten materials for making rosary beads.",
        wordMeanings: [
            { sanskrit: "akṣamālā", devanagari: "अक्षमाला", hindi: "जपमाला", english: "rosary" },
            { sanskrit: "rudrākṣa", devanagari: "रुद्राक्ष", hindi: "रुद्राक्ष", english: "Rudra's eye" }
        ]
    },
    {
        id: 3, mantra: 3, theme: "A to Ksha Letters",
        sanskrit: "अकारादिक्षकारान्तैर्वर्णैः सम्मूर्तिता प्रकाशस्वरूपिणी ।",
        hindi: "'अ' से 'क्ष' तक के (50) अक्षरों की मूर्ति, प्रकाश स्वरूप।",
        english: "Embodying letters from 'A' to 'Ksha' (50 letters), of the nature of Light.",
        simpleExplanation: "MALA = 50 LETTERS: Each bead = one Sanskrit letter from A to Ksha!",
        simpleExplanationHindi: "माला = 50 अक्षर: हर मनका = एक संस्कृत अक्षर अ से क्ष तक!",
        nanoBananaPrompt: "Rosary with 50 beads representing Sanskrit alphabet."
    },
    {
        id: 4, mantra: 3, theme: "Thread = Brahman",
        sanskrit: "अन्तरसूत्रं ब्रह्म विद्यात् ।",
        hindi: "भीतर के सूत्र (धागे) को ब्रह्म जानो।",
        english: "Know the Inner Thread to be Brahman.",
        simpleExplanation: "THREAD = GOD: The string connecting all beads IS Brahman Himself!",
        simpleExplanationHindi: "धागा = ईश्वर: सभी मनकों को जोड़ने वाला धागा स्वयं ब्रह्म है!",
        nanoBananaPrompt: "The thread of rosary as Brahman connecting all."
    },
    {
        id: 5, mantra: 4, theme: "Meru Bead",
        sanskrit: "तन्मध्ये मेरुमुखं कल्पयेत् ।",
        hindi: "बीच में मेरु (सुमेरु/गुरु मनका) का मुख स्थापित करे।",
        english: "In the center, establish the Meru (Summit/Guru bead).",
        simpleExplanation: "MERU = CENTRAL BEAD: The Guru bead where you don't cross!",
        simpleExplanationHindi: "मेरु = केंद्रीय मनका: गुरु मनका जिसे पार नहीं करते!",
        nanoBananaPrompt: "Meru bead at the summit of the rosary."
    },
    {
        id: 6, mantra: 5, theme: "Purification Bath",
        sanskrit: "क्षीरिण्यां गव्यं दधिपयोमूत्रमयैः प्रक्षाल्य । शुद्धोदकेन चन्दनागुरुकुङ्कुमगन्धसलिलैः संस्नाप्य ।",
        hindi: "गाय के दूध, दही, मूत्र से धोकर। चंदन, अगर, कुमकुम जल से स्नान कराएं।",
        english: "Wash with cow's milk, curd, urine. Bathe with Sandalwood, Agaru, Kumkum water.",
        simpleExplanation: "PURIFICATION: Wash with Panchagavya, then fragrant water bath!",
        simpleExplanationHindi: "शुद्धिकरण: पंचगव्य से धोएं, फिर सुगंधित जल स्नान!",
        nanoBananaPrompt: "Rosary being purified with sacred waters."
    },
    {
        id: 7, mantra: 6, theme: "Invoking Each Bead",
        sanskrit: "अकारं मृत्युनृत्यं नमाम्यहम् । ... क्षकारं मृत्युनृत्यं नमाम्यहम् ।",
        hindi: "'अ-कार, मृत्यु-नृत्य को नमन...' (प्रत्येक अक्षर के लिए)। ...'क्ष-कार, मृत्यु-नृत्य को नमन।'",
        english: "'I bow to A, the Dance of Death'... 'I bow to Ksha, the Dance of Death.'",
        simpleExplanation: "INVOKE EACH BEAD: Chant each letter + 'Dance of Death' on each bead!",
        simpleExplanationHindi: "प्रत्येक मनके का आह्वान: प्रत्येक अक्षर + 'मृत्यु नृत्य' प्रत्येक मनके पर जपो!",
        nanoBananaPrompt: "Invoking letters A to Ksha on each bead."
    },
    {
        id: 8, mantra: 7, theme: "Sankalpa",
        sanskrit: "ॐ अस्य श्रीअक्षमालायाः ऋषिर्विराट् छन्दो गायत्री देवता ओंकारः ।",
        hindi: "ॐ! इस अक्षमाला के ऋषि विराट्, छंद गायत्री, देवता ओंकार।",
        english: "OM! Of this Akshamala: Seer is Virat, Meter is Gayatri, Deity is Omkara.",
        simpleExplanation: "SANKALPA: Declare the Seer, Meter, Deity of Rosary before use!",
        simpleExplanationHindi: "संकल्प: उपयोग से पहले माला के ऋषि, छंद, देवता घोषित करो!",
        nanoBananaPrompt: "Declaring the sacred attributes of the rosary."
    },
    {
        id: 9, mantra: 8, theme: "Prayer to Mala",
        sanskrit: "ॐ अक्षमाले त्वं देवानां सर्वशक्तिस्वरूपिणी । सिद्धिदा भव ॥",
        hindi: "ॐ! अक्षमाला! तुम देवों की सर्व-शक्ति स्वरूपिणी हो। सिद्धि देने वाली बनो।",
        english: "OM! Akshamala! You are embodiment of all divine powers. Grant me success.",
        simpleExplanation: "PRAYER: 'O Rosary! You hold ALL divine powers! GRANT ME SUCCESS!'",
        simpleExplanationHindi: "प्रार्थना: 'हे माला! तुम सब दैवी शक्तियां धारण करती हो! मुझे सफलता दो!'",
        nanoBananaPrompt: "Praying to the rosary as embodiment of divine power."
    },
    {
        id: 10, mantra: 9, theme: "Activation Mantra",
        sanskrit: "ॐ ह्रीं सिद्धयै नमः । मृन्मृत्युं नमाम्यहम् ।",
        hindi: "ॐ ह्रीं सिद्धयै नमः। मृत्यु की मृत्यु को नमन।",
        english: "OM Hrim Siddhyai Namah. I bow to the Death of Death.",
        simpleExplanation: "ACTIVATION: Chant HRIM SIDDHYAI NAMAH to activate the rosary!",
        simpleExplanationHindi: "सक्रियण: माला सक्रिय करने के लिए ह्रीं सिद्ध्यै नमः जपो!",
        nanoBananaPrompt: "Activating rosary with Hrim mantra."
    },
    {
        id: 11, mantra: 10, theme: "Final Prayer",
        sanskrit: "ॐ नमस्ते भगवति मन्त्रमातृके अक्षमाले सर्ववशंकरि स्वाहा ।",
        hindi: "ॐ! भगवती मंत्रमातृके! अक्षमाले! सर्व-वशंकरी! नमस्कार, स्वाहा।",
        english: "OM! Salutations O Goddess, Mother of Mantras, O Rosary, Subduer of All! Svaha!",
        simpleExplanation: "FINAL: 'O MOTHER OF MANTRAS! ROSARY! SUBDUER OF ALL! Svaha!'",
        simpleExplanationHindi: "अंतिम: 'हे मंत्रों की माता! माला! सब पर विजयी! स्वाहा!'",
        nanoBananaPrompt: "Final prayer to rosary as Mother of Mantras."
    },
    {
        id: 12, mantra: 11, theme: "Benefits",
        sanskrit: "अनेन मन्त्रेण मन्त्रित्वां सर्वान् वेदान् अधीतो भवति । सर्वपापैः प्रमुच्यते ।",
        hindi: "इस मंत्र से अभिमंत्रित माला से जप = सर्व वेद अध्ययन फल। सर्व पाप मुक्ति।",
        english: "Chanting with this mantra-consecrated mala = merit of all Vedas. Freedom from all sins.",
        simpleExplanation: "BENEFITS: Consecrated mala japa = All Vedas' merit + All sins destroyed!",
        simpleExplanationHindi: "लाभ: अभिमंत्रित माला जप = सभी वेदों का फल + सब पाप नष्ट!",
        nanoBananaPrompt: "Benefits of using consecrated rosary—Vedic merit, sin-freedom."
    }
];

export const AKSHAMALIKA_METADATA = {
    id: "akshamalika", name: "Akshamalika", nameSanskrit: "अक्षमालिकोपनिषद्",
    veda: "Rig Veda", category: "Shaiva/Shakta", shlokaCount: 12, sequenceNumber: 44,
    tenMaterials: ["Coral", "Pearl", "Crystal", "Conch", "Silver", "Gold", "Sandalwood", "Putrajiva", "Lotus", "Rudraksha"],
    fiftyLetters: "A to Ksha (Matrikas)",
    threadMeaning: "Thread = Brahman connecting all",
    meruBead: "Central summit bead—never crossed",
    consecrationSteps: ["Panchagavya wash", "Fragrant water bath", "Letter invocation", "Sankalpa", "Prayer", "Activation"]
};

export const getAkshamalikaMantra = (mantra: number) => AKSHAMALIKA_SHLOKAS.find(s => s.mantra === mantra);
