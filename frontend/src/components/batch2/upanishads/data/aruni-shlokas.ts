// Aruni Upanishad Data (#16 in Muktika Canon)
// Source: Sama Veda | Category: Sannyasa
// Theme: The Lifestyle of the Wandering Monk (Parivrajaka) - Renunciation Rules
// Total: 5 Khandas (Sections) with ~18 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface AruniDataEntry {
    id: number;
    khanda: number;
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

// Shanti Mantra (Sama Veda)
export const ARUNI_SHANTI_MANTRA = {
    sanskrit: "ॐ आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि । सर्वं ब्रह्मौपनिषदं माहं ब्रह्म निराकुर्यां मा मा ब्रह्म निराकरोदनिराकरणमस्त्वनिराकरणं मेऽस्तु । तदात्मनि निरते य उपनिषत्सु धर्मास्ते मयि सन्तु ते मयि सन्तु ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरे अंग, वाणी, प्राण, चक्षु, कान, बल और सभी इन्द्रियां पुष्ट हों। यह सब कुछ उपनिषदों में वर्णित ब्रह्म ही है। मैं ब्रह्म का निराकरण न करूँ; ब्रह्म मेरा निराकरण न करे। उपनिषदों में जो धर्म कहे गए हैं, वे मुझ आत्म-निष्ठ में स्थित हों। ॐ शांति, शांति, शांति।",
    english: "OM! May my limbs, speech, vital force, eyes, ears, strength, and all the senses be fully developed. All this is the Brahman revealed in the Upanishads. May I not deny Brahman; may Brahman not deny me. May the virtues described in the Upanishads reside in me. OM Peace, Peace, Peace."
};

export const ARUNI_SHLOKAS: AruniDataEntry[] = [
    // Khanda 1: The Inquiry into Renunciation
    {
        id: 1,
        khanda: 1,
        verse: 1,
        theme: "Aruni's Question",
        sanskrit: "ॐ। आरुणिः प्रजापतिं पितरमुपससार । येन भगवन् कर्माण्यशेषतो विसृजामीति ।",
        hindi: "ॐ। ऋषि आरुणि अपने पिता प्रजापति के पास गए और पूछा: 'हे भगवन्! किस प्रकार मैं कर्मों (धार्मिक अनुष्ठानों) का पूर्णतः परित्याग कर सकता हूँ?'",
        english: "OM. Aruni approached his Father Prajapati and asked: 'O Lord! By what means can I completely renounce all rituals/actions?'",
        simpleExplanation: "THE ULTIMATE QUESTION: How do I COMPLETELY give up all rituals and become truly free?",
        simpleExplanationHindi: "परम प्रश्न: मैं सभी कर्मकांडों को पूर्णतः कैसे छोड़ूं और सचमुच मुक्त हो जाऊं?",
        nanoBananaPrompt: "Sage Aruni approaching Prajapati, asking how to completely renounce all rituals.",
        wordMeanings: [
            { sanskrit: "karmāṇi", devanagari: "कर्माणि", hindi: "कर्म/अनुष्ठान", english: "rituals/actions" },
            { sanskrit: "visṛjāmi", devanagari: "विसृजामि", hindi: "त्याग करूं", english: "renounce" }
        ]
    },
    {
        id: 2,
        khanda: 1,
        verse: 2,
        theme: "The Three Renunciations",
        sanskrit: "तं होवाच प्रजापतिः । तव शिखां यज्ञोपवीतं स्वाध्यायं च विसृजेत् ।",
        hindi: "प्रजापति ने कहा: 'तुम्हें अपनी शिखा (चोटी), यज्ञोपवीत (जनेऊ) और स्वाध्याय (वेदों का नित्य पाठ) का त्याग करना चाहिए।'",
        english: "Prajapati replied: 'You must renounce your Shikha (Tuft), Yajnopavita (Sacred Thread), and the daily Study of the Vedas (Svadhyaya).'",
        simpleExplanation: "FIRST RENUNCIATIONS: Give up the tuft of hair, sacred thread, and daily Vedic recitation!",
        simpleExplanationHindi: "पहला त्याग: चोटी, जनेऊ और दैनिक वेद पाठ छोड़ो!",
        nanoBananaPrompt: "A renunciate cutting the tuft, removing the sacred thread, closing the Veda book.",
        wordMeanings: [
            { sanskrit: "śikhā", devanagari: "शिखा", hindi: "चोटी", english: "tuft of hair" },
            { sanskrit: "yajñopavīta", devanagari: "यज्ञोपवीत", hindi: "जनेऊ", english: "sacred thread" },
            { sanskrit: "svādhyāya", devanagari: "स्वाध्याय", hindi: "वेद अध्ययन", english: "Vedic study" }
        ]
    },
    {
        id: 3,
        khanda: 1,
        verse: 3,
        theme: "Complete Renunciation",
        sanskrit: "पात्रचयनं सर्वं विश्वं विसृजेत् । ब्रह्माण्डं विसृजेत् ।",
        hindi: "'यज्ञ के बर्तनों के समूह का, समस्त विश्व (सांसारिक संबंधों) का और संपूर्ण ब्रह्मांड (भोगों) का त्याग करना चाहिए।'",
        english: "'You must renounce the collection of ritual vessels, the entire universe (social relations), and the cosmos (desire for worlds).'",
        simpleExplanation: "TOTAL RENUNCIATION: Give up ritual objects, worldly relations, and even desire for heavenly worlds!",
        simpleExplanationHindi: "पूर्ण त्याग: अनुष्ठान सामग्री, सांसारिक संबंध, और स्वर्गलोक की इच्छा भी छोड़ो!",
        nanoBananaPrompt: "A monk releasing ritual vessels, family bonds, and even heavenly realms from his grasp.",
        wordMeanings: [
            { sanskrit: "pātracayana", devanagari: "पात्रचयन", hindi: "बर्तनों का समूह", english: "ritual vessels" },
            { sanskrit: "brahmāṇḍa", devanagari: "ब्रह्माण्ड", hindi: "ब्रह्मांड", english: "cosmos/universe" }
        ]
    },
    {
        id: 4,
        khanda: 1,
        verse: 4,
        theme: "The Monk's Essentials",
        sanskrit: "दण्डं आच्छादनं कौपीनं परिग्रहेत् । शेषं विसृजेदिति ।",
        hindi: "'केवल एक दण्ड (लाठी), एक आच्छादन (ऊपरी वस्त्र) और एक कौपीन (लंगोटी) को ग्रहण करना चाहिए। बाकी सबका त्याग कर देना चाहिए।'",
        english: "'You should accept only a Staff, a Covering cloth, and a Loincloth. Everything else should be renounced.'",
        simpleExplanation: "MONK'S KIT: Keep ONLY staff + upper cloth + loincloth. NOTHING else!",
        simpleExplanationHindi: "संन्यासी का सामान: केवल दण्ड + ऊपरी वस्त्र + लंगोटी। और कुछ नहीं!",
        nanoBananaPrompt: "A monk's three possessions: a staff, a cloth covering, and a loincloth. Nothing more.",
        wordMeanings: [
            { sanskrit: "daṇḍa", devanagari: "दण्ड", hindi: "लाठी/डंडा", english: "staff" },
            { sanskrit: "kaupīna", devanagari: "कौपीन", hindi: "लंगोटी", english: "loincloth" }
        ]
    },
    // Khanda 2: The Ritual of Leaving
    {
        id: 5,
        khanda: 2,
        verse: 1,
        theme: "Internalizing the Sacred Fires",
        sanskrit: "गृहस्थो वा ब्रह्मचारी वा वानप्रस्थो वा । लौकिकाग्नीन् उदराग्नौ समारोपयेत् ।",
        hindi: "'चाहे वह गृहस्थ हो, ब्रह्मचारी हो, या वानप्रस्थ हो—उसे अपनी लौकिक अग्नियों (हवन की आग) को अपनी उदर-अग्नि (जठराग्नि) में स्थापित कर लेना चाहिए।'",
        english: "'Whether a householder, student, or forest-dweller—he should deposit his sacred fires into the Fire of his Stomach (internalize the ritual).'",
        simpleExplanation: "INTERNALIZE THE FIRE: The external ritual fire becomes your internal digestive fire!",
        simpleExplanationHindi: "अग्नि को आंतरिक करो: बाहरी हवन अग्नि तुम्हारी आंतरिक जठराग्नि बन जाती है!",
        nanoBananaPrompt: "A monk absorbing the sacred fire into his belly, internalizing all external rituals.",
        wordMeanings: [
            { sanskrit: "udarāgni", devanagari: "उदराग्नि", hindi: "पेट की अग्नि", english: "digestive fire" },
            { sanskrit: "laukikāgni", devanagari: "लौकिकाग्नि", hindi: "सांसारिक अग्नि", english: "worldly/ritual fire" }
        ]
    },
    {
        id: 6,
        khanda: 2,
        verse: 2,
        theme: "Gayatri in Speech",
        sanskrit: "गायत्रीं च स्ववागाग्नौ समारोपयेत् । उपवीतं भूमौ वा अप्सु वा विसृजेत् ।",
        hindi: "'गायत्री मंत्र को अपनी वाणी रूपी अग्नि में स्थापित करे। यज्ञोपवीत (जनेऊ) को भूमि में या जल में विसर्जित कर दे।'",
        english: "'He should deposit the Gayatri Mantra into the Fire of his Speech. He should discard the Sacred Thread into the ground or into water.'",
        simpleExplanation: "GAYATRI INTERNALIZED: Gayatri becomes your speech itself! Throw the thread into earth or water!",
        simpleExplanationHindi: "गायत्री आंतरिक: गायत्री तुम्हारी वाणी बन जाती है! जनेऊ भूमि या जल में डाल दो!",
        nanoBananaPrompt: "Gayatri mantra merging into a monk's speech, sacred thread being released into water.",
        wordMeanings: [
            { sanskrit: "vāgagni", devanagari: "वागग्नि", hindi: "वाणी की अग्नि", english: "fire of speech" },
            { sanskrit: "gāyatrī", devanagari: "गायत्री", hindi: "गायत्री मंत्र", english: "Gayatri mantra" }
        ]
    },
    {
        id: 7,
        khanda: 2,
        verse: 3,
        theme: "Renouncing Family",
        sanskrit: "कुटीचरं ब्रह्मचारिणं कुटुम्बं विसृजेत् । पात्रं विसृजेत् ।",
        hindi: "'उसे कुटीचर और ब्रह्मचारी के नियमों का, तथा कुटुम्ब (परिवार) का त्याग कर देना चाहिए। उसे बर्तनों का त्याग कर देना चाहिए।'",
        english: "'He should renounce the status of a Kutichara or Brahmachari, and his family. He should renounce his vessels.'",
        simpleExplanation: "LEAVE EVERYTHING: Give up previous ashrama status, family, and even cooking vessels!",
        simpleExplanationHindi: "सब छोड़ो: पिछली आश्रम स्थिति, परिवार, और बर्तन भी त्याग दो!",
        nanoBananaPrompt: "A monk walking away from family home, leaving behind all vessels and previous identity.",
        wordMeanings: [
            { sanskrit: "kuṭumba", devanagari: "कुटुम्ब", hindi: "परिवार", english: "family" },
            { sanskrit: "kuṭīcara", devanagari: "कुटीचर", hindi: "कुटी में रहने वाला", english: "hut-dweller" }
        ]
    },
    {
        id: 8,
        khanda: 2,
        verse: 4,
        theme: "Accept Staff and Loincloth",
        sanskrit: "दण्डं कौपीनं च परिग्रहेत् ।",
        hindi: "'अब वह दण्ड और कौपीन को ग्रहण करे।'",
        english: "'He should accept the Staff and the Loincloth.'",
        simpleExplanation: "THE NEW IDENTITY: Now take up ONLY staff and loincloth—the marks of a renunciate!",
        simpleExplanationHindi: "नई पहचान: अब केवल दण्ड और कौपीन लो—संन्यासी के चिह्न!",
        nanoBananaPrompt: "A monk receiving the staff and loincloth, the only possessions of a true renunciate.",
        wordMeanings: [
            { sanskrit: "parigrahet", devanagari: "परिग्रहेत्", hindi: "ग्रहण करे", english: "should accept" }
        ]
    },
    {
        id: 9,
        khanda: 2,
        verse: 5,
        theme: "The Vow of Fearlessness",
        sanskrit: "ततः 'अहं ब्रह्म अस्मि' इति मन्त्रमुच्चरेत् । 'अभयं सर्वभूतेभ्यो मत्तः स्वाहा' इति ।",
        hindi: "'इसके बाद वह 'अहं ब्रह्मास्मि' (मैं ब्रह्म हूँ) मंत्र का उच्चारण करे। और कहे: 'मुझसे सभी प्राणियों को अभय मिले, स्वाहा!'",
        english: "'Then he should utter the mantra 'I am Brahman'. And say: 'Freedom from fear to all beings from me! Svaha!'",
        simpleExplanation: "TWO VOWS: 'I AM BRAHMAN' + 'All beings are safe from me!' = The monk's declaration!",
        simpleExplanationHindi: "दो प्रतिज्ञाएं: 'मैं ब्रह्म हूँ' + 'सभी प्राणी मुझसे सुरक्षित हैं!' = संन्यासी की घोषणा!",
        nanoBananaPrompt: "A monk declaring 'I am Brahman' and offering fearlessness to all beings.",
        wordMeanings: [
            { sanskrit: "ahaṃ brahmāsmi", devanagari: "अहं ब्रह्मास्मि", hindi: "मैं ब्रह्म हूँ", english: "I am Brahman" },
            { sanskrit: "abhaya", devanagari: "अभय", hindi: "निर्भयता", english: "fearlessness" }
        ]
    },
    // Khanda 3: The Rules of the Staff
    {
        id: 10,
        khanda: 3,
        verse: 1,
        theme: "Beyond Mantras",
        sanskrit: "अथ अत ऊर्ध्वं अमन्त्रवदाचरेत् । ऊर्ध्वगमनं विसृजेत् ।",
        hindi: "'अब इसके बाद वह मंत्रों (कर्मकांड) के बिना आचरण करे। ऊर्ध्वगमन (स्वर्ग जाने की इच्छा) का त्याग करे।'",
        english: "'Thenceforth, he should conduct himself without mantras (rituals). He should give up the desire for higher worlds.'",
        simpleExplanation: "NO MORE RITUALS: Live without mantras/rituals. Don't even desire heaven!",
        simpleExplanationHindi: "अब कर्मकांड नहीं: मंत्रों/अनुष्ठानों के बिना जियो। स्वर्ग की इच्छा भी मत करो!",
        nanoBananaPrompt: "A monk transcending all rituals, releasing even the desire for heavenly realms.",
        wordMeanings: [
            { sanskrit: "amantravat", devanagari: "अमन्त्रवत्", hindi: "मंत्रों के बिना", english: "without mantras" },
            { sanskrit: "ūrdhvagamana", devanagari: "ऊर्ध्वगमन", hindi: "ऊपर जाना/स्वर्ग", english: "going up/heaven" }
        ]
    },
    {
        id: 11,
        khanda: 3,
        verse: 2,
        theme: "The Bamboo Staff",
        sanskrit: "त्रिदण्डं वैणवं गृह्णीयात् । स सोदकमं कमण्डलुम् ।",
        hindi: "'वह बांस का बना हुआ त्रिदण्ड ग्रहण करे। और जल सहित कमंडलु ग्रहण करे।'",
        english: "'He should take a Bamboo Staff (Tridanda). And a Water Pot (Kamandalu) with water.'",
        simpleExplanation: "MONK'S TOOLS: Bamboo tridanda (triple-staff) + water pot = wanderer's complete kit!",
        simpleExplanationHindi: "संन्यासी के उपकरण: बांस का त्रिदण्ड + जल पात्र = भिक्षु का पूर्ण सामान!",
        nanoBananaPrompt: "A monk holding a bamboo tridanda staff and a kamandalu water pot.",
        wordMeanings: [
            { sanskrit: "tridaṇḍa", devanagari: "त्रिदण्ड", hindi: "तीन डंडों वाला", english: "triple-staff" },
            { sanskrit: "kamaṇḍalu", devanagari: "कमण्डलु", hindi: "जल पात्र", english: "water pot" }
        ]
    },
    {
        id: 12,
        khanda: 3,
        verse: 3,
        theme: "Food as Medicine",
        sanskrit: "पवित्रं भोजनं कुर्यात् । औषधवद् अशनं आचरेत् ।",
        hindi: "'वह पवित्र भोजन करे। भोजन को औषधि की तरह ग्रहण करे (स्वाद के लिए नहीं, केवल शरीर रक्षा के लिए)।'",
        english: "'He should eat pure food. He should consume food like medicine.'",
        simpleExplanation: "EAT LIKE MEDICINE: Food is not for pleasure—it's medicine for the body!",
        simpleExplanationHindi: "औषधि की तरह खाओ: भोजन आनंद के लिए नहीं—शरीर के लिए दवा है!",
        nanoBananaPrompt: "A monk eating simple food as if taking medicine, without attachment to taste.",
        wordMeanings: [
            { sanskrit: "auṣadhavat", devanagari: "औषधवत्", hindi: "दवा की तरह", english: "like medicine" },
            { sanskrit: "pavitra", devanagari: "पवित्र", hindi: "शुद्ध", english: "pure" }
        ]
    },
    {
        id: 13,
        khanda: 3,
        verse: 4,
        theme: "Pranayama and Celibacy",
        sanskrit: "प्राणायामपरायणः स्यात् । ऊर्ध्वरेताः स्यात् ।",
        hindi: "'वह प्राणायाम में तत्पर रहे। वह ऊर्ध्वरेता (पूर्ण ब्रह्मचारी) हो।'",
        english: "'He should be devoted to Pranayama. He should be Urdhvareta (perfectly celibate).'",
        simpleExplanation: "TWO DISCIPLINES: Constant pranayama practice + complete celibacy (upward-flowing energy)!",
        simpleExplanationHindi: "दो अनुशासन: निरंतर प्राणायाम अभ्यास + पूर्ण ब्रह्मचर्य (ऊर्ध्वगामी ऊर्जा)!",
        nanoBananaPrompt: "A monk practicing pranayama, energy flowing upward in perfect celibacy.",
        wordMeanings: [
            { sanskrit: "prāṇāyāma", devanagari: "प्राणायाम", hindi: "श्वास नियंत्रण", english: "breath control" },
            { sanskrit: "ūrdhvaretā", devanagari: "ऊर्ध्वरेता", hindi: "ऊर्ध्वगामी वीर्य वाला", english: "perfectly celibate" }
        ]
    },
    {
        id: 14,
        khanda: 3,
        verse: 5,
        theme: "The True Staff is Knowledge",
        sanskrit: "'मम मुख्यो दण्डः' इति न दण्डं धरेत् । 'ज्ञानदण्डो धृतो येन एकदण्डि स उच्यते' ।",
        hindi: "'यह लकड़ी का डंडा मेरा मुख्य डंडा है'—ऐसा मानकर डंडा न पकड़े। 'जिसने ज्ञान रूपी डंडे को धारण किया है, वही सच्चा एकदण्डी कहलाता है।'",
        english: "'He should not hold the staff thinking \"This is my main support.\" He who holds the Staff of Knowledge is called the true Ekadandi.'",
        simpleExplanation: "THE REAL STAFF: The wooden staff is just a symbol. The TRUE staff is KNOWLEDGE!",
        simpleExplanationHindi: "असली दण्ड: लकड़ी का डंडा केवल प्रतीक है। सच्चा दण्ड ज्ञान है!",
        nanoBananaPrompt: "A monk holding a glowing staff of knowledge, the wooden staff fading as mere symbol.",
        wordMeanings: [
            { sanskrit: "jñānadaṇḍa", devanagari: "ज्ञानदण्ड", hindi: "ज्ञान का दण्ड", english: "staff of knowledge" },
            { sanskrit: "ekadaṇḍī", devanagari: "एकदण्डी", hindi: "एक दण्ड वाला", english: "one-staffed monk" }
        ]
    },
    {
        id: 15,
        khanda: 3,
        verse: 6,
        theme: "Warning Against Hypocrisy",
        sanskrit: "काष्ठदण्डो धृतो येन सर्वाशी ज्ञानवर्जितः । स याति नरकान् घोरान् महारौरवसंज्ञकान् ॥",
        hindi: "'जो ज्ञान से रहित है और सब कुछ खाने वाला (संयमहीन) है, यदि वह केवल लकड़ी का डंडा धारण करता है, तो वह 'महारौरव' नामक घोर नरकों में जाता है।'",
        english: "'He who is devoid of knowledge and eats everything, if he holds only a wooden staff, he goes to the terrible hells called Maharaurava.'",
        simpleExplanation: "WARNING: A fake monk with just a wooden staff but no knowledge = HELL!",
        simpleExplanationHindi: "चेतावनी: केवल लकड़ी का डंडा पर ज्ञान नहीं = नकली संन्यासी = नरक!",
        nanoBananaPrompt: "A warning: a false monk with only external symbols falling into hellish realms.",
        wordMeanings: [
            { sanskrit: "kāṣṭhadaṇḍa", devanagari: "काष्ठदण्ड", hindi: "लकड़ी का डंडा", english: "wooden staff" },
            { sanskrit: "mahāraurava", devanagari: "महारौरव", hindi: "घोर नरक", english: "terrible hell" }
        ]
    },
    // Khanda 4: The Lifestyle of the Paramahamsa
    {
        id: 16,
        khanda: 4,
        verse: 1,
        theme: "Naked or Loincloth",
        sanskrit: "दिगम्बरो वा स्यात् । कोपीनं वा धारयेत् ।",
        hindi: "'वह (परमहंस) या तो दिगम्बर (नग्न) रहे, या केवल कौपीन धारण करे।'",
        english: "'He may be Sky-clad (Naked), or he may wear a Loincloth.'",
        simpleExplanation: "PARAMAHAMSA OPTIONS: Either completely naked OR just a loincloth. Nothing more!",
        simpleExplanationHindi: "परमहंस विकल्प: या तो पूर्णतः नग्न या केवल लंगोटी। और कुछ नहीं!",
        nanoBananaPrompt: "A Paramahamsa saint, either sky-clad or wearing only a simple loincloth.",
        wordMeanings: [
            { sanskrit: "digambara", devanagari: "दिगम्बर", hindi: "आकाश वस्त्र/नग्न", english: "sky-clad/naked" }
        ]
    },
    {
        id: 17,
        khanda: 4,
        verse: 2,
        theme: "No Ritual Sandhya",
        sanskrit: "आचारं विचरेत् । सन्ध्यां स्नानं न कुर्यात् ।",
        hindi: "'वह साधु आचरण में विचरण करे। वह (वैदिक) संध्या और (अनुष्ठानिक) स्नान न करे।' (क्योंकि वह अनुष्ठानों से ऊपर है)।",
        english: "'He should move about observing right conduct. He should not perform the ritual Sandhya or ritual Bath.'",
        simpleExplanation: "BEYOND RITUALS: No more ritual Sandhya or purification baths—he IS pure!",
        simpleExplanationHindi: "अनुष्ठानों से परे: अब कोई संध्या या शुद्धि स्नान नहीं—वह शुद्ध है!",
        nanoBananaPrompt: "A realized monk walking freely, transcended beyond all external rituals.",
        wordMeanings: [
            { sanskrit: "sandhyā", devanagari: "सन्ध्या", hindi: "संध्या वंदन", english: "twilight prayers" },
            { sanskrit: "ācāra", devanagari: "आचार", hindi: "आचरण", english: "conduct" }
        ]
    },
    {
        id: 18,
        khanda: 4,
        verse: 3,
        theme: "Ekadandi in Sannyasa Yoga",
        sanskrit: "एकदण्डी सन्न्यासयोगरतः स्यात् ।",
        hindi: "'वह एकदण्डी होकर संन्यास-योग में लीन रहे।'",
        english: "'Being an Ekadandi, he should be intent on the Yoga of Renunciation.'",
        simpleExplanation: "THE PATH: As a one-staffed monk, remain absorbed in the Yoga of Renunciation!",
        simpleExplanationHindi: "मार्ग: एकदण्डी के रूप में संन्यास-योग में लीन रहो!",
        nanoBananaPrompt: "An Ekadandi monk absorbed in the yoga of complete renunciation.",
        wordMeanings: [
            { sanskrit: "sannyāsayoga", devanagari: "सन्न्यासयोग", hindi: "त्याग का योग", english: "yoga of renunciation" }
        ]
    },
    {
        id: 19,
        khanda: 4,
        verse: 4,
        theme: "The Nine Poisons to Abandon",
        sanskrit: "कामं क्रोधं लोभं मोहं दम्भं दर्पं असूयां ममतां अहङ्कारं च । एतानि त्यजेत् ।",
        hindi: "'काम, क्रोध, लोभ, मोह, दम्भ (पाखंड), दर्प (घमंड), असूया (ईर्ष्या), ममता और अहंकार—इन सबका त्याग कर दे।'",
        english: "'Lust, anger, greed, delusion, hypocrisy, pride, jealousy, attachment, and egoism—he should renounce these.'",
        simpleExplanation: "9 POISONS: Lust, Anger, Greed, Delusion, Hypocrisy, Pride, Jealousy, Attachment, Ego—ABANDON ALL!",
        simpleExplanationHindi: "9 विष: काम, क्रोध, लोभ, मोह, दम्भ, दर्प, ईर्ष्या, ममता, अहंकार—सब त्यागो!",
        nanoBananaPrompt: "Nine dark clouds (representing the nine mental poisons) being released by a meditating monk.",
        wordMeanings: [
            { sanskrit: "kāma", devanagari: "काम", hindi: "वासना", english: "lust" },
            { sanskrit: "krodha", devanagari: "क्रोध", hindi: "गुस्सा", english: "anger" },
            { sanskrit: "lobha", devanagari: "लोभ", hindi: "लालच", english: "greed" },
            { sanskrit: "moha", devanagari: "मोह", hindi: "भ्रम", english: "delusion" },
            { sanskrit: "ahaṅkāra", devanagari: "अहङ्कार", hindi: "अहंकार", english: "ego" }
        ]
    },
    {
        id: 20,
        khanda: 4,
        verse: 5,
        theme: "Chaturmas and Solitary Wandering",
        sanskrit: "वर्षासु ध्रुवशीलोऽष्टौ मासानेकाकी यतिश्चरेत् ।",
        hindi: "'वर्षा ऋतु में (चार महीने) एक स्थान पर स्थिर रहे (चातुर्मास व्रत)। बाकी आठ महीने वह यति अकेला विचरण करे।'",
        english: "'In the rainy season, he should stay in one place (Dhruvashila). For the other eight months, the ascetic should wander alone.'",
        simpleExplanation: "YEARLY RHYTHM: 4 months stationary (monsoon). 8 months wandering ALONE!",
        simpleExplanationHindi: "वार्षिक लय: 4 महीने स्थिर (मानसून)। 8 महीने अकेले भ्रमण!",
        nanoBananaPrompt: "A monk staying put during monsoon, then wandering alone through forests for eight months.",
        wordMeanings: [
            { sanskrit: "varṣāsu", devanagari: "वर्षासु", hindi: "वर्षा ऋतु में", english: "in the rains" },
            { sanskrit: "ekākī", devanagari: "एकाकी", hindi: "अकेला", english: "alone" },
            { sanskrit: "caturmās", devanagari: "चातुर्मास", hindi: "चार महीने", english: "four months" }
        ]
    },
    // Khanda 5: Realization
    {
        id: 21,
        khanda: 5,
        verse: 1,
        theme: "Established in Brahman",
        sanskrit: "स खलु ब्रह्मिष्ठः । 'अहं ब्रह्मास्मि' इति प्राजापत्यं मन्त्रं उच्चरेत् ।",
        hindi: "'वह निश्चय ही ब्रह्मिष्ठ (ब्रह्म में स्थित) है। वह प्रजापति के मंत्र 'अहं ब्रह्मास्मि' का उच्चारण करे।'",
        english: "'He is indeed established in Brahman. He should utter the Prajapatya mantra: I am Brahman.'",
        simpleExplanation: "THE REALIZATION: He IS Brahman! He declares: 'AHAM BRAHMASMI—I AM BRAHMAN!'",
        simpleExplanationHindi: "साक्षात्कार: वह ब्रह्म है! वह घोषणा करता है: 'अहं ब्रह्मास्मि—मैं ब्रह्म हूँ!'",
        nanoBananaPrompt: "A realized monk radiating light, declaring 'Aham Brahmasmi' with complete conviction.",
        wordMeanings: [
            { sanskrit: "brahmiṣṭha", devanagari: "ब्रह्मिष्ठ", hindi: "ब्रह्म में स्थित", english: "established in Brahman" }
        ]
    },
    {
        id: 22,
        khanda: 5,
        verse: 2,
        theme: "Purification by Mahavakya",
        sanskrit: "य एष महावाक्यम् अनेन पावनं कुरुते ।",
        hindi: "'जो इस महावाक्य के द्वारा (स्वयं को) पवित्र करता है।'",
        english: "'He who purifies himself with this Great Statement (Mahavakya).'",
        simpleExplanation: "ULTIMATE PURIFICATION: The Mahavakya 'I am Brahman' purifies completely!",
        simpleExplanationHindi: "परम शुद्धि: महावाक्य 'मैं ब्रह्म हूँ' पूर्णतः शुद्ध करता है!",
        nanoBananaPrompt: "The Mahavakya 'Aham Brahmasmi' as a purifying light washing over a seeker.",
        wordMeanings: [
            { sanskrit: "mahāvākya", devanagari: "महावाक्य", hindi: "महान वचन", english: "great statement" },
            { sanskrit: "pāvana", devanagari: "पावन", hindi: "पवित्र", english: "purification" }
        ]
    },
    {
        id: 23,
        khanda: 5,
        verse: 3,
        theme: "Conclusion",
        sanskrit: "इत्युपनिषत् ।",
        hindi: "यही उपनिषद है।",
        english: "Thus ends the Upanishad.",
        simpleExplanation: "THE END: This is the secret teaching of renunciation and Brahman-realization!",
        simpleExplanationHindi: "समाप्त: यही त्याग और ब्रह्म-साक्षात्कार की गुप्त शिक्षा है!",
        nanoBananaPrompt: "The sacred text closing, the teaching of complete renunciation and Brahman-identity complete.",
        wordMeanings: [
            { sanskrit: "upaniṣat", devanagari: "उपनिषत्", hindi: "गुप्त ज्ञान", english: "secret teaching" }
        ]
    }
];

export const ARUNI_METADATA = {
    id: "aruni",
    name: "Aruni",
    nameSanskrit: "आरुण्युपनिषद्",
    veda: "Sama Veda",
    category: "Sannyasa",
    shlokaCount: 23,
    khandaCount: 5,
    sequenceNumber: 16,
    meaning: "Teaching to Aruni on Renunciation",
    keyTeachings: [
        "Renounce Shikha (tuft), Sacred Thread, and Vedic Study",
        "Internalize sacred fires into digestive fire",
        "Keep only Staff, Cloth, and Loincloth",
        "The true staff is the Staff of Knowledge",
        "Abhaya Vow: Promise fearlessness to all beings",
        "Food as medicine, not pleasure",
        "Abandon 9 poisons: Lust, Anger, Greed, Delusion, Hypocrisy, Pride, Jealousy, Attachment, Ego",
        "Chaturmas (4-month stay) + 8-month solitary wandering",
        "Mahavakya: Aham Brahmasmi - I am Brahman"
    ],
    famousVerses: {
        ahamBrahmasmi: { id: 9, khanda: 2, verse: 5 },
        jnanaDanda: { id: 14, khanda: 3, verse: 5 },
        ninePoisons: { id: 19, khanda: 4, verse: 4 }
    }
};
