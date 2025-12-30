// Sarvasara Upanishad Data (#34 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Samanya
// Theme: Glossary of Vedanta - Definitions of Bandha, Moksha, Koshas, States
// Total: 16 Mantras (Q&A format)

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface SarvasaraDataEntry {
    id: number; mantra: number; theme: string; term?: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const SARVASARA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const SARVASARA_SHLOKAS: SarvasaraDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "The 20 Questions",
        sanskrit: "कथं बन्धः । कथं मोक्षः । का अविद्या । का विद्या...",
        hindi: "बंधन क्या? मोक्ष क्या? अविद्या क्या? विद्या क्या?...",
        english: "What is Bondage? Liberation? Ignorance? Knowledge?...",
        simpleExplanation: "20 QUESTIONS: Vedanta DICTIONARY answering all key terms!",
        simpleExplanationHindi: "20 प्रश्न: वेदांत की शब्दावली!", nanoBananaPrompt: "Scroll with 20 Vedanta questions."
    },
    {
        id: 2, mantra: 2, theme: "Bandha - Bondage", term: "Bandha",
        sanskrit: "आत्मनेश्वरत्वमनात्मनि देहादौ आत्मत्वमभिमन्यते सोऽभिमानो बन्धः ।",
        hindi: "अनात्मा (देह) में 'मैं हूँ' अभिमान = बंधन।",
        english: "Identifying 'I-ness' with non-Self (body) = Bondage.",
        simpleExplanation: "BONDAGE = EGO! 'I am body' when you're Lord = BONDAGE!",
        simpleExplanationHindi: "बंधन = अहंकार!", nanoBananaPrompt: "Ego identifying with body."
    },
    {
        id: 3, mantra: 3, theme: "Moksha - Liberation", term: "Moksha",
        sanskrit: "तन्निवृत्तिः मोक्षः ।",
        hindi: "उस अहंकार की निवृत्ति = मोक्ष।",
        english: "Cessation of that egoism = Liberation.",
        simpleExplanation: "MOKSHA = EGO ENDS! Stop false identification = FREE!",
        simpleExplanationHindi: "मोक्ष = अहंकार समाप्त!", nanoBananaPrompt: "Ego dissolving."
    },
    {
        id: 4, mantra: 4, theme: "Avidya - Ignorance", term: "Avidya",
        sanskrit: "या तमहं करोमीति, सा अविद्या ।",
        hindi: "'मैं कर रहा हूँ' = अविद्या।",
        english: "'I am doing this' = Ignorance.",
        simpleExplanation: "IGNORANCE = 'I DO!' Thinking you're doer = blindness!",
        simpleExplanationHindi: "अविद्या = 'मैं करता हूँ!'", nanoBananaPrompt: "Notion 'I am doer'."
    },
    {
        id: 5, mantra: 5, theme: "Vidya - Knowledge", term: "Vidya",
        sanskrit: "या तमहं न करोमीति, सा विद्या ।",
        hindi: "'मैं नहीं कर रहा' = विद्या।",
        english: "'I am NOT doing this' = Knowledge.",
        simpleExplanation: "KNOWLEDGE = 'I DON'T DO!' Not doer = WISDOM!",
        simpleExplanationHindi: "विद्या = 'मैं नहीं करता!'", nanoBananaPrompt: "Realization 'I am not doer'."
    },
    {
        id: 6, mantra: 6, theme: "Jagrat - Waking", term: "Jagrat",
        sanskrit: "श्रोत्रादीनि करणानि शब्दादिविषयेषु प्रवर्तन्ते सा जाग्रदवस्था ।",
        hindi: "इन्द्रियां विषयों में प्रवृत्त = जाग्रत।",
        english: "Senses engaging objects = Waking State.",
        simpleExplanation: "WAKING: Senses active, engaging external world!",
        simpleExplanationHindi: "जाग्रत: इन्द्रियां सक्रिय!", nanoBananaPrompt: "Waking—senses engaging."
    },
    {
        id: 7, mantra: 7, theme: "Svapna - Dreaming", term: "Svapna",
        sanskrit: "वासनामात्ररूपेण प्रवर्तन्ते सा स्वप्नावस्था ।",
        hindi: "वासना से विषय प्रवृत्ति = स्वप्न।",
        english: "Engagement through impressions = Dreaming State.",
        simpleExplanation: "DREAMING: Senses OFF, impressions create world!",
        simpleExplanationHindi: "स्वप्न: संस्कार आंतरिक दुनिया बनाते हैं!", nanoBananaPrompt: "Dream—impressions."
    },
    {
        id: 8, mantra: 8, theme: "Sushupti - Deep Sleep", term: "Sushupti",
        sanskrit: "तुष्णींभावमापद्यते सा सुषुप्तिः ।",
        hindi: "तूष्णीं-भाव (मौन) = सुषुप्ति।",
        english: "Attaining Silence = Deep Sleep.",
        simpleExplanation: "DEEP SLEEP: No senses, no knowledge, just SILENCE!",
        simpleExplanationHindi: "सुषुप्ति: बस मौन!", nanoBananaPrompt: "Deep sleep—silence."
    },
    {
        id: 9, mantra: 9, theme: "Turiya - The Fourth", term: "Turiya",
        sanskrit: "अवस्थात्रयभावाभावसाक्षी निरन्तरं चैतन्यं तत् तुरीयम् ।",
        hindi: "तीनों अवस्थाओं का साक्षी, निरंतर चैतन्य = तुरीय।",
        english: "Witness of three states, continuous Consciousness = Turiya.",
        simpleExplanation: "TURIYA: Unchanging WITNESS of waking, dream, sleep!",
        simpleExplanationHindi: "तुरीय: तीनों का अपरिवर्तनीय साक्षी!", nanoBananaPrompt: "Turiya—witness of states."
    },
    {
        id: 10, mantra: 10, theme: "Annamaya Kosha", term: "Annamaya",
        sanskrit: "अन्नकार्याणां कोशानां समूहोऽन्नमयः ।",
        hindi: "अन्न से बना शरीर = अन्नमय।",
        english: "Body formed by Food = Annamaya.",
        simpleExplanation: "FOOD SHEATH: Physical body from food!",
        simpleExplanationHindi: "अन्नमय: खाए अन्न से बना शरीर!", nanoBananaPrompt: "Annamaya—food body."
    },
    {
        id: 11, mantra: 14, theme: "Anandamaya Kosha", term: "Anandamaya",
        sanskrit: "वटकणिकायामिव वृक्षो यदा तिष्ठति तदा आनन्दमयः ।",
        hindi: "बरगद बीज में वृक्ष जैसे = आनंदमय।",
        english: "Like tree in banyan seed = Anandamaya.",
        simpleExplanation: "BLISS SHEATH: Tree hidden in seed—bliss dormant!",
        simpleExplanationHindi: "आनंदमय: बीज में पेड़—आनंद सुप्त!", nanoBananaPrompt: "Anandamaya—tree in seed."
    },
    {
        id: 12, mantra: 15, theme: "Karta & Jiva", term: "Karta/Jiva",
        sanskrit: "सुखदुःखबुद्धिः कर्ता । उपाधिसम्बन्धो जीवः ।",
        hindi: "सुख-दुख अनुभव = कर्ता। उपाधि-बद्ध = जीव।",
        english: "Experiencer of pleasure/pain = Karta. Bound by upadhis = Jiva.",
        simpleExplanation: "DOER = feels pleasure/pain. JIVA = limited space!",
        simpleExplanationHindi: "कर्ता = अनुभव। जीव = सीमित!", nanoBananaPrompt: "Jiva as limited space."
    },
    {
        id: 13, mantra: 16, theme: "Sakshi - Witness", term: "Sakshi",
        sanskrit: "विद्याविद्ये साक्षात्पश्यति इति साक्षी ।",
        hindi: "विद्या-अविद्या दोनों देखता = साक्षी।",
        english: "Sees both knowledge and ignorance = Witness.",
        simpleExplanation: "WITNESS: Sees BOTH knowledge AND ignorance!",
        simpleExplanationHindi: "साक्षी: विद्या-अविद्या दोनों देखता!", nanoBananaPrompt: "Sakshi—witnessing both."
    },
    {
        id: 14, mantra: 16, theme: "Kutastha - Immutable", term: "Kutastha",
        sanskrit: "ब्रह्मादिपिपीलिकान्तं यत्र कूटवत्तिष्ठति स कूटस्थः ।",
        hindi: "ब्रह्मा से चींटी तक जिस पर टिके = कूटस्थ।",
        english: "Fixed anvil for all from Brahma to ant = Kutastha.",
        simpleExplanation: "IMMUTABLE: ANVIL for all beings—Brahma to ant!",
        simpleExplanationHindi: "कूटस्थ: सबका आधार!", nanoBananaPrompt: "Kutastha—unchanging anvil."
    },
    {
        id: 15, mantra: 16, theme: "Paramatma", term: "Paramatma",
        sanskrit: "सत्यं ज्ञानमनन्तमानन्दं ब्रह्म स परमात्मा ।",
        hindi: "सत्य-ज्ञान-अनंत-आनंद ब्रह्म = परमात्मा।",
        english: "Truth-Knowledge-Infinity-Bliss Brahman = Paramatma.",
        simpleExplanation: "SUPREME: Truth, Knowledge, Infinite, Bliss! Nothing else!",
        simpleExplanationHindi: "परमात्मा: सत्य-ज्ञान-अनंत-आनंद!", nanoBananaPrompt: "Paramatma—truth-knowledge-bliss."
    }
];

export const SARVASARA_METADATA = {
    id: "sarvasara", name: "Sarvasara", nameSanskrit: "सर्वसारोपनिषद्",
    veda: "Krishna Yajur Veda", category: "Samanya", shlokaCount: 15, sequenceNumber: 34,
    definitions: {
        bandha: "Ego with body", moksha: "Ego ends", avidya: "'I do'", vidya: "'I don't do'",
        turiya: "Witness of states", paramatma: "Truth-Knowledge-Infinity-Bliss"
    }
};

export const getSarvasaraMantra = (mantra: number) => SARVASARA_SHLOKAS.find(s => s.mantra === mantra);
