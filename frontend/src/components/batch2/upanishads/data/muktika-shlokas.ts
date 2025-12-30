// Muktika Upanishad Data (#56 in Muktika Canon)
// Source: Shukla Yajur Veda | Category: Samanya/Vedanta
// Theme: The Canon of 108 Upanishads, Four Muktis, Mind-Destruction
// Total: 2 Adhyayas - Rama-Hanuman Dialogue

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface MuktikaDataEntry {
    id: number; mantra: string; adhyaya: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const MUKTIKA_SHANTI_MANTRA = {
    sanskrit: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह पूर्ण है। यह पूर्ण है। पूर्ण से पूर्ण उत्पन्न होता है। पूर्ण से पूर्ण निकालने पर भी पूर्ण शेष। शांति।",
    english: "OM! That is Whole. This is Whole. From Whole comes Whole. Taking Whole from Whole, Whole remains. OM Peace."
};

export const MUKTIKA_SHLOKAS: MuktikaDataEntry[] = [
    {
        id: 1, mantra: "1.1", adhyaya: 1, theme: "Setting: Ayodhya",
        sanskrit: "अयोध्यायां सुखासीनं रामं रत्नमण्डपे । सीताभरतसौमित्रिशत्रुघ्नाद्यैः समन्वितम् ॥",
        hindi: "अयोध्या में, रत्न मंडप में बैठे राम, सीता, भरत, लक्ष्मण, शत्रुघ्न से घिरे।",
        english: "In Ayodhya, seated in gem pavilion, Rama surrounded by Sita, Bharata, Lakshmana, Shatrughna.",
        simpleExplanation: "SETTING: Ayodhya, gem palace, Rama on throne with family!",
        simpleExplanationHindi: "दृश्य: अयोध्या, रत्न महल, राम परिवार सहित सिंहासन पर!",
        nanoBananaPrompt: "Lord Rama in Ayodhya's gem pavilion with family."
    },
    {
        id: 2, mantra: "1.3", adhyaya: 1, theme: "Hanuman's Question",
        sanskrit: "हनूमानुवाच । राम त्वं परमात्मासि । इदानीं श्रोतुमिच्छामि मुक्तेर्लक्षणमुत्तमम् ॥",
        hindi: "हनुमान बोले: राम! आप परमात्मा हैं। मैं मुक्ति का उत्तम लक्षण सुनना चाहता हूँ।",
        english: "Hanuman said: Rama! You are Supreme Self. I wish to hear about Liberation.",
        simpleExplanation: "HANUMAN ASKS: Tell me about MOKSHA, O Supreme Lord!",
        simpleExplanationHindi: "हनुमान पूछते हैं: मोक्ष के बारे में बताइए, हे परमेश्वर!",
        nanoBananaPrompt: "Hanuman humbly asking Rama about liberation."
    },
    {
        id: 3, mantra: "1.4", adhyaya: 1, theme: "Four Types of Mukti",
        sanskrit: "कैवल्यमुक्तिरेकैव पारमार्थिकरूपिणी । सालोक्यसायुज्यसारूप्यसामीप्यभेदात् सा चतुर्विधा ॥",
        hindi: "वास्तविक मुक्ति एक ही है—कैवल्य। (उपासना से) चार प्रकार: सालोक्य, सामीप्य, सारूप्य, सायुज्य।",
        english: "Real Liberation is one—Kaivalya. Fourfold: Salokya, Samipya, Sarupya, Sayujya.",
        simpleExplanation: "4 MUKTIS: Same World, Near God, Same Form, MERGE with God!",
        simpleExplanationHindi: "4 मुक्ति: एक लोक, समीप, एक रूप, विलय!",
        nanoBananaPrompt: "Four types of liberation—Salokya to Sayujya.",
        wordMeanings: [
            { sanskrit: "sālokya", devanagari: "सालोक्य", hindi: "एक लोक में", english: "same world" },
            { sanskrit: "sāmīpya", devanagari: "सामीप्य", hindi: "समीपता", english: "proximity" },
            { sanskrit: "sārūpya", devanagari: "सारूप्य", hindi: "एक रूप", english: "same form" },
            { sanskrit: "sāyujya", devanagari: "सायुज्य", hindi: "एकता", english: "union" }
        ]
    },
    {
        id: 4, mantra: "1.10", adhyaya: 1, theme: "Mandukya Alone is Sufficient",
        sanskrit: "मण्डूकमेकमेवालं मुमुक्षूणां विमुक्तये ।",
        hindi: "मुमुक्षुओं की विमुक्ति के लिए एक माण्डूक्य उपनिषद ही पर्याप्त है।",
        english: "For liberation of seekers, Mandukya Upanishad alone is sufficient.",
        simpleExplanation: "MANDUKYA RULE: Just ONE Upanishad (Mandukya) is ENOUGH for Moksha!",
        simpleExplanationHindi: "माण्डूक्य नियम: मोक्ष के लिए बस एक उपनिषद (माण्डूक्य) पर्याप्त है!",
        nanoBananaPrompt: "Mandukya Upanishad alone sufficient for liberation."
    },
    {
        id: 5, mantra: "1.13", adhyaya: 1, theme: "Hierarchy: 10, 32, 108",
        sanskrit: "तथापि दृढज्ञानं न चेद्द्वात्रिंशदाचरेत् । विदेहमुक्तिकामश्चेदष्टोत्तरशतं पठ ॥",
        hindi: "ज्ञान दृढ़ न हो तो 32 पढ़ो। विदेह-मुक्ति चाहो तो 108 पढ़ो।",
        english: "If knowledge not firm, study 32. For Videha-Mukti, study 108.",
        simpleExplanation: "STUDY LADDER: 1 (Mandukya) → 10 → 32 → 108 for COMPLETE Liberation!",
        simpleExplanationHindi: "अध्ययन सीढ़ी: 1 (माण्डूक्य) → 10 → 32 → 108 पूर्ण मुक्ति के लिए!",
        nanoBananaPrompt: "Hierarchy of Upanishad study—1 to 10 to 32 to 108."
    },
    {
        id: 6, mantra: "1.30", adhyaya: 1, theme: "108 by Veda",
        sanskrit: "ऋग्वेदस्य तु दश । शुक्लस्यैकोनविंशतिः । कृष्णस्य द्वात्रिंशत् । सामवेदे षोडश । अथर्वण एकत्रिंशत् ।",
        hindi: "ऋग्वेद के 10, शुक्ल यजुर्वेद के 19, कृष्ण यजुर्वेद के 32, सामवेद के 16, अथर्ववेद के 31।",
        english: "Rig Veda: 10, Shukla Yajur: 19, Krishna Yajur: 32, Sama: 16, Atharva: 31.",
        simpleExplanation: "108 DISTRIBUTION: Rig=10, Shukla=19, Krishna=32, Sama=16, Atharva=31!",
        simpleExplanationHindi: "108 वितरण: ऋग्=10, शुक्ल=19, कृष्ण=32, साम=16, अथर्व=31!",
        nanoBananaPrompt: "Distribution of 108 Upanishads across five Vedas."
    },
    {
        id: 7, mantra: "2.1", adhyaya: 2, theme: "Three Practices Together",
        sanskrit: "वासनाक्षयविज्ञानमनोनाशा समकालं चिराभ्यासाद्भवन्ति फलदा ॥",
        hindi: "वासना-क्षय, विज्ञान, मनोनाश—तीनों का समकाल दीर्घ अभ्यास फल देता है।",
        english: "Destruction of Vasanas, Knowledge, Destruction of Mind—practiced simultaneously give fruit.",
        simpleExplanation: "3 TOGETHER: Kill desires + Gain knowledge + Destroy mind = ALL AT ONCE!",
        simpleExplanationHindi: "3 एक साथ: वासना मारो + ज्ञान पाओ + मन नष्ट करो = सब एक साथ!",
        nanoBananaPrompt: "Three practices—vasanakshaya, vijnana, manonasha—together."
    },
    {
        id: 8, mantra: "2.3", adhyaya: 2, theme: "Mind Rise = Ruin",
        sanskrit: "मनसोऽभ्युदयो नाशो मनोनाशो महोदयः । ज्ञमनो नाशमभ्येति अज्ञमनो हि शृङ्खला ॥",
        hindi: "मन का उदय = नाश। मनोनाश = महोदय। ज्ञानी का मन नष्ट; अज्ञानी का मन जंजीर।",
        english: "Mind's rise = ruin. Mind's destruction = great prosperity. Wise mind perishes; ignorant mind is chain.",
        simpleExplanation: "MIND = ENEMY: Mind arising = disaster! Mind destroyed = BLISS!",
        simpleExplanationHindi: "मन = शत्रु: मन उठना = विपत्ति! मन नष्ट = आनंद!",
        nanoBananaPrompt: "Mind as chain for ignorant, destroyed for the wise."
    },
    {
        id: 9, mantra: "2.4", adhyaya: 2, theme: "Two Types of Manonasha",
        sanskrit: "द्विविधो चित्तनाशोऽस्ति सरूपोऽरूप एव च । जीवन्मुक्ते सरूपः स्यात् अरूपो देहमुक्तिगः ॥",
        hindi: "चित्त-नाश दो प्रकार: सरूप (जीवनमुक्त में) और अरूप (विदेहमुक्त में)।",
        english: "Mind-destruction is two: Sarupa (in Jivanmukta) and Arupa (in Videhamukta).",
        simpleExplanation: "2 LEVELS: Jivanmukta = mind controlled. Videhamukta = mind GONE completely!",
        simpleExplanationHindi: "2 स्तर: जीवनमुक्त = मन नियंत्रित। विदेहमुक्त = मन पूरी तरह गया!",
        nanoBananaPrompt: "Two types of mind destruction—Jivanmukta and Videhamukta."
    },
    {
        id: 10, mantra: "2.5", adhyaya: 2, theme: "Prana-Mind Connection",
        sanskrit: "मनः स्पन्दते प्राणः । प्राण स्पन्दते मनः । द्वयोरेकतरनाशात् उभयोर्नाशः ॥",
        hindi: "मन से प्राण चलता है; प्राण से मन चलता है। एक का नाश = दोनों का नाश।",
        english: "Mind vibrates Prana; Prana vibrates Mind. Destroying one destroys both.",
        simpleExplanation: "LINKED: Mind and Breath tied! Control one = Control BOTH!",
        simpleExplanationHindi: "जुड़े हुए: मन और श्वास बंधे! एक नियंत्रित = दोनों नियंत्रित!",
        nanoBananaPrompt: "Mind and Prana interconnected—control one, control both."
    },
    {
        id: 11, mantra: "2.6", adhyaya: 2, theme: "Pranayama Method",
        sanskrit: "तस्मात् प्राणनिरोधेन मनोनिरोधः कार्यः ।",
        hindi: "इसलिए, प्राण-निरोध (प्राणायाम) द्वारा मनो-निरोध करना चाहिए।",
        english: "Therefore, by restraining Prana, one should restrain the Mind.",
        simpleExplanation: "METHOD: Control BREATH = Control MIND!",
        simpleExplanationHindi: "तरीका: श्वास नियंत्रित करो = मन नियंत्रित करो!",
        nanoBananaPrompt: "Pranayama as the method to control mind."
    },
    {
        id: 12, mantra: "2.7", adhyaya: 2, theme: "Kaivalya Remains",
        sanskrit: "यदा मनः विलीयेत कैवल्यं अवशिष्यते ॥",
        hindi: "जब मन पूरी तरह विलीन हो जाता है, केवल कैवल्य शेष रहता है।",
        english: "When mind dissolves, Kaivalya alone remains.",
        simpleExplanation: "FINAL STATE: Mind gone = Only ONENESS remains!",
        simpleExplanationHindi: "अंतिम अवस्था: मन गया = केवल एकता शेष!",
        nanoBananaPrompt: "Mind dissolved, only Kaivalya remaining."
    }
];

// The Authoritative Canon of 108 Upanishads
export const MUKTIKA_CANON_108 = {
    rigVeda: ["Aitareya", "Kaushitaki", "Nadabindu", "Atmabodha", "Nirvana", "Mudgala", "Akshamalika", "Tripura", "Saubhagya-Lakshmi", "Bahvricha"],
    shuklaYajurVeda: ["Isha", "Brihadaranyaka", "Jabala", "Hamsa", "Paramahamsa", "Subala", "Mantrika", "Niralamba", "Trisikhibrahmana", "Mandala-Brahmana", "Advaya-Taraka", "Paingala", "Bhikshuka", "Turiyatita", "Adhyatma", "Tarasara", "Yajnavalkya", "Satyayaniya", "Muktika"],
    krishnaYajurVeda: ["Katha", "Taittiriya", "Brahma", "Kaivalya", "Shvetashvatara", "Garbha", "Narayana", "Amritabindu", "Amritanada", "Kalagni-Rudra", "Kshurika", "Sarvasara", "Shukarahasya", "Tejobindu", "Dhyanabindu", "Brahmavidya", "Yogatattva", "Dakshinamurti", "Skanda", "Saririka", "Yoga-Shikha", "Ekakshara", "Akshi", "Avadhuta", "Katharudra", "Rudrahridaya", "Yoga-Kundalini", "Panchabrahma", "Pranagnihotra", "Varaha", "Kalisantarana", "Sarasvati-Rahasya"],
    samaVeda: ["Kena", "Chandogya", "Aruni", "Maitrayani", "Maitreyi", "Vajrasuchika", "Yoga-Chudamani", "Vasudeva", "Mahat", "Sannyasa", "Avyakta", "Kundika", "Savitri", "Rudraksha-Jabala", "Jabali", "Darsana"],
    atharvaVeda: ["Prasna", "Mundaka", "Mandukya", "Atharvashiras", "Atharvashikha", "Brihad-Jabala", "Nrisimha-Tapaniya", "Narada-Parivrajaka", "Sita", "Sharabha", "Maha-Narayana", "Rama-Rahasya", "Rama-Tapaniya", "Sandilya", "Paramahamsaparivrajaka", "Annapurna", "Surya", "Atma", "Pashupata", "Parabrahma", "Tripuratapini", "Devi", "Bhavana", "Bhasmajabala", "Ganapati", "Mahavakya", "Gopalatapani", "Krishna", "Hayagriva", "Dattatreya", "Garuda"]
};

export const MUKTIKA_METADATA = {
    id: "muktika", name: "Muktika", nameSanskrit: "मुक्तिकोपनिषद्",
    meaning: "Garland of Liberation", veda: "Shukla Yajur Veda", category: "Samanya/Vedanta",
    shlokaCount: 12, adhyayas: 2, sequenceNumber: 56,
    setting: "Ayodhya, Rama-Hanuman dialogue",
    fourMuktis: { salokya: "Same World", samipya: "Proximity", sarupya: "Same Form", sayujya: "Union" },
    studyHierarchy: { one: "Mandukya alone", ten: "Dashopanishad", thirtyTwo: "32 Upanishads", oneHundredEight: "Complete Canon" },
    vedaDistribution: { rig: 10, shuklaYajur: 19, krishnaYajur: 32, sama: 16, atharva: 31 },
    threeEssentials: ["Vasanakshaya (Destroy desires)", "Vijnana (Knowledge)", "Manonasha (Destroy mind)"]
};

export const getMuktikaMantra = (mantra: string) => MUKTIKA_SHLOKAS.find(s => s.mantra === mantra);
