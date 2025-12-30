// Katha Rudra Upanishad Data (#48 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Sannyasa
// Theme: Renunciation procedure, Inner Thread, Identity with Rudra
// Total: 38 Mantras (23 key sections)

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface KathaRudraDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const KATHA_RUDRA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const KATHA_RUDRA_SHLOKAS: KathaRudraDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "What is Sannyasa Ashrama?",
        sanskrit: "देवा ह वै प्रजापतिमब्रूवन किमिदं आश्रमं कथमस्य स्थितिः इति ।",
        hindi: "देवताओं ने प्रजापति से पूछा: यह संन्यास आश्रम क्या है? इसकी स्थिति क्या?",
        english: "The Gods asked Prajapati: What is this Sannyasa Ashrama? What is its method?",
        simpleExplanation: "THE QUESTION: What IS renunciation? How does a monk live?",
        simpleExplanationHindi: "प्रश्न: संन्यास क्या है? साधु कैसे जीता है?",
        nanoBananaPrompt: "Gods asking Prajapati about the Sannyasa ashrama."
    },
    {
        id: 2, mantra: 2, theme: "Four Stages of Life",
        sanskrit: "प्रथमं ब्रह्मचारी भूत्वा गृहस्थो भवेत् । गृहस्थाद्वनी भूत्वा ।",
        hindi: "पहले ब्रह्मचारी, फिर गृहस्थ, फिर वनवासी।",
        english: "First student, then householder, then forest-dweller.",
        simpleExplanation: "NORMAL PATH: Student → Married life → Forest retirement → Monk!",
        simpleExplanationHindi: "सामान्य मार्ग: छात्र → गृहस्थ → वनवासी → संन्यासी!",
        nanoBananaPrompt: "Four stages of life—student to monk."
    },
    {
        id: 3, mantra: 3, theme: "Immediate Renunciation",
        sanskrit: "यदहरेव विरजेत् तदहरेव प्रव्रजेत् ।",
        hindi: "जिस दिन वैराग्य हो, उसी दिन संन्यास ले लो।",
        english: "The very day one feels detachment, that very day one should renounce.",
        simpleExplanation: "FAMOUS RULE: Feel detachment TODAY = Renounce TODAY! No waiting!",
        simpleExplanationHindi: "प्रसिद्ध नियम: आज वैराग्य = आज संन्यास! इंतजार नहीं!",
        nanoBananaPrompt: "Immediate renunciation—the moment detachment arises.",
        wordMeanings: [
            { sanskrit: "virajet", devanagari: "विरजेत्", hindi: "वैराग्य हो", english: "feels detachment" },
            { sanskrit: "pravrajet", devanagari: "प्रव्रजेत्", hindi: "संन्यास ले", english: "should renounce" }
        ]
    },
    {
        id: 4, mantra: 5, theme: "Internalize Fire",
        sanskrit: "एष वा अग्नेर्योनिर्यः प्राणः । प्राणं गच्छ स्वाहेति ।",
        hindi: "अग्नि की योनि प्राण है। 'प्राण में जाओ, स्वाहा!'",
        english: "The source of Fire is Prana. 'Go into Prana, Svaha!'",
        simpleExplanation: "INTERNALIZE FIRE: External fire enters YOUR Prana—no more fire rituals!",
        simpleExplanationHindi: "अग्नि आंतरिक करो: बाहरी अग्नि तुम्हारे प्राण में—अब अग्नि क्रियाएं नहीं!",
        nanoBananaPrompt: "Sacred fire being internalized into Prana."
    },
    {
        id: 5, mantra: 6, theme: "Discard External Signs",
        sanskrit: "शिखां यज्ञोपवीतं च भूमौ विसृजेदप्सु वा ।",
        hindi: "शिखा (चोटी) और यज्ञोपवीत (जनेऊ) भूमि या जल में विसर्जित कर दे।",
        english: "Discard the Tuft and Sacred Thread into ground or water.",
        simpleExplanation: "DROP EXTERNAL SIGNS: Throw away hair-tuft and sacred thread!",
        simpleExplanationHindi: "बाहरी चिह्न छोड़ो: चोटी और जनेऊ फेंक दो!",
        nanoBananaPrompt: "Renunciate discarding tuft and sacred thread."
    },
    {
        id: 6, mantra: 7, theme: "Take Staff and Bowl",
        sanskrit: "पात्रं दण्डं तु सङ्गृह्य कौपीनं परिधाय च ।",
        hindi: "पात्र (भिक्षा बर्तन) और दण्ड (छड़ी) लेकर, कौपीन पहनकर।",
        english: "Taking Bowl and Staff, wearing Loincloth.",
        simpleExplanation: "MONK'S POSSESSIONS: Bowl, Staff, Loincloth—nothing else needed!",
        simpleExplanationHindi: "संन्यासी की सम्पत्ति: पात्र, दंड, कौपीन—और कुछ नहीं!",
        nanoBananaPrompt: "Monk with bowl, staff, and loincloth."
    },
    {
        id: 7, mantra: 8, theme: "Real Thread = Brahman",
        sanskrit: "यदक्षरं परं ब्रह्म तत्सूत्रमिति धारयेत् ।",
        hindi: "जो अक्षर परब्रह्म है, उसी को सूत्र (धागा) मानकर धारण करे।",
        english: "He should wear the Imperishable Brahman as the Thread.",
        simpleExplanation: "REAL THREAD = BRAHMAN! Imperishable Truth is your true sacred thread!",
        simpleExplanationHindi: "असली धागा = ब्रह्म! अविनाशी सत्य तुम्हारा सच्चा जनेऊ है!",
        nanoBananaPrompt: "Brahman as the true sacred thread."
    },
    {
        id: 8, mantra: 9, theme: "Universe Strung on Thread",
        sanskrit: "येन सर्वमिदं प्रोतं सूत्रे मणिगणा इव ।",
        hindi: "जैसे धागे में मणियां पिरोई होती हैं, वैसे जगत उसमें पिरोया है।",
        english: "Just as gems are strung on a thread, so is the universe strung on That.",
        simpleExplanation: "UNIVERSE = BEADS: All creation strung on ONE Brahman-thread!",
        simpleExplanationHindi: "ब्रह्मांड = मनके: सारी सृष्टि एक ब्रह्म-धागे में पिरोई!",
        nanoBananaPrompt: "Universe as beads strung on the thread of Brahman."
    },
    {
        id: 9, mantra: 11, theme: "Knowledge-Tuft",
        sanskrit: "ज्ञानशिखा ज्ञाननिष्ठा ज्ञानयज्ञोपवीतिनः ।",
        hindi: "जिनकी शिखा ज्ञान है, निष्ठा ज्ञान है, जनेऊ ज्ञान है।",
        english: "Those whose Tuft is Knowledge, whose Dedication is Knowledge, whose Thread is Knowledge.",
        simpleExplanation: "REAL BRAHMIN: Knowledge is your tuft, knowledge is your thread!",
        simpleExplanationHindi: "सच्चा ब्राह्मण: ज्ञान तुम्हारी चोटी, ज्ञान तुम्हारा जनेऊ!",
        nanoBananaPrompt: "Knowledge as the real tuft and sacred thread."
    },
    {
        id: 10, mantra: 12, theme: "Real Shikhi",
        sanskrit: "अग्नेरिव शिखा नान्या यस्य ज्ञानमयी शिखा । स शिखी नेतरे केशधारिणः ॥",
        hindi: "जैसे अग्नि की लपट, वैसे जिसकी ज्ञानमयी शिखा—वही शिखी। बाकी केवल बाल-धारी हैं।",
        english: "Like flame of fire, he whose Tuft is Knowledge is 'Shikhi'. Others are merely hair-growers.",
        simpleExplanation: "FLAME vs HAIR: Real tuft = Flame of Knowledge. Others just grow hair!",
        simpleExplanationHindi: "लपट vs बाल: असली चोटी = ज्ञान की लपट। बाकी बस बाल उगाते हैं!",
        nanoBananaPrompt: "Knowledge-flame as the real tuft vs mere hair."
    },
    {
        id: 11, mantra: 14, theme: "Food as Medicine",
        sanskrit: "औषधिवदशनमाचरेत् ।",
        hindi: "भोजन को औषधि की तरह ग्रहण करे।",
        english: "He should consume food like medicine.",
        simpleExplanation: "FOOD = MEDICINE: Eat only to survive, not for taste or pleasure!",
        simpleExplanationHindi: "भोजन = दवा: केवल जीने के लिए खाओ, स्वाद या आनंद के लिए नहीं!",
        nanoBananaPrompt: "Monk eating food as medicine, not pleasure."
    },
    {
        id: 12, mantra: 16, theme: "Potter's Wheel Analogy",
        sanskrit: "भ्रमतः कुलालचक्रस्य यथा स्थितिः । तथा देहोऽपि संस्कारवेगात्प्रवर्तते ॥",
        hindi: "जैसे कुम्हार का चाक डंडा हटने पर भी घूमता रहता है, वैसे देह प्रारब्ध से चलती है।",
        english: "Like potter's wheel continues due to momentum, so body runs on past karma.",
        simpleExplanation: "POTTER'S WHEEL: Even after enlightenment, body continues from past momentum!",
        simpleExplanationHindi: "कुम्हार का चाक: ज्ञान के बाद भी शरीर पुराने वेग से चलता है!",
        nanoBananaPrompt: "Potter's wheel spinning from momentum—like prarabdha karma."
    },
    {
        id: 13, mantra: 17, theme: "Meditate on Non-dual Brahman",
        sanskrit: "परं ब्रह्म चिदाकारं प्रज्ञानघनमानन्दम् । ध्यायेदात्मानमद्वैतं यः स मुक्तो न संशयः ॥",
        hindi: "चिदाकार, प्रज्ञानघन, आनंद, अद्वैत आत्मा का ध्यान—वह मुक्त, संशय नहीं।",
        english: "Meditate on Non-dual Self—Consciousness-form, Mass of Knowledge, Bliss—liberation certain.",
        simpleExplanation: "MEDITATE: On Non-dual, Conscious, Blissful Self = LIBERATION GUARANTEED!",
        simpleExplanationHindi: "ध्यान करो: अद्वैत, चेतन, आनंदमय आत्मा पर = मुक्ति निश्चित!",
        nanoBananaPrompt: "Meditation on non-dual, blissful Brahman."
    },
    {
        id: 14, mantra: 18, theme: "Doership = Bondage",
        sanskrit: "अहमेव कर्ता इति मत्वा कार्यं कुरुते । स बध्यते द्वन्द्वजाले ॥",
        hindi: "'मैं ही कर्ता हूँ' मानकर कर्म करने वाला द्वंद्वों में बंधता है।",
        english: "Thinking 'I am the doer' and acting, one is bound in duality's net.",
        simpleExplanation: "TRAP: 'I am the DOER' = BONDAGE! Drop doership = Freedom!",
        simpleExplanationHindi: "जाल: 'मैं कर्ता हूँ' = बंधन! कर्तापन छोड़ो = स्वतंत्रता!",
        nanoBananaPrompt: "Ego of doership causing bondage in duality."
    },
    {
        id: 15, mantra: 19, theme: "Desire = Samsara",
        sanskrit: "वासना एव संसारः इति सर्वां वासनां परित्यज्य ।",
        hindi: "वासना ही संसार है। सभी वासनाओं का त्याग करो।",
        english: "Desire alone is Samsara. Abandon all desires.",
        simpleExplanation: "ROOT CAUSE: Desire = Samsara! Kill all desires = Kill Samsara!",
        simpleExplanationHindi: "मूल कारण: वासना = संसार! सब वासनाएं मारो = संसार मिटाओ!",
        nanoBananaPrompt: "Desire as the cause of Samsara cycle."
    },
    {
        id: 16, mantra: 20, theme: "See Sadasiva in All",
        sanskrit: "सर्वभूतेषु यः पश्येदेकमेव सदाशिवम् । सोऽहमस्मीति मन्वीत ॥",
        hindi: "जो सभी प्राणियों में एक सदाशिव देखे और 'वह मैं हूँ' माने।",
        english: "He who sees one Sadasiva in all beings and contemplates 'I am He'.",
        simpleExplanation: "SEE SHIVA EVERYWHERE: All beings = ONE Shiva! I AM THAT!",
        simpleExplanationHindi: "हर जगह शिव देखो: सभी प्राणी = एक शिव! वह मैं हूँ!",
        nanoBananaPrompt: "Seeing Sadasiva in all beings—I am He."
    },
    {
        id: 17, mantra: 23, theme: "Kaivalya Result",
        sanskrit: "य एवं वेद स कैवल्यमनुभवति ।",
        hindi: "जो ऐसा जानता है, वह कैवल्य का अनुभव करता है।",
        english: "He who knows this experiences Kaivalya (Liberation).",
        simpleExplanation: "FINAL FRUIT: Know this = Experience ABSOLUTE FREEDOM!",
        simpleExplanationHindi: "अंतिम फल: यह जानो = पूर्ण स्वतंत्रता का अनुभव!",
        nanoBananaPrompt: "Experiencing Kaivalya—absolute liberation."
    }
];

export const KATHA_RUDRA_METADATA = {
    id: "katha-rudra", name: "Katha Rudra", nameSanskrit: "कठरुद्रोपनिषद्",
    veda: "Krishna Yajur Veda", category: "Sannyasa", shlokaCount: 17, fullVerseCount: 38, sequenceNumber: 48,
    renunciationRule: "The very day one feels detachment, that very day renounce",
    monkPossessions: ["Begging bowl", "Staff", "Loincloth"],
    innerMeanings: { thread: "Brahman", tuft: "Knowledge", fire: "Prana" },
    keyTeaching: "Desire = Samsara. See Sadasiva in all. I am He."
};

export const getKathaRudraMantra = (mantra: number) => KATHA_RUDRA_SHLOKAS.find(s => s.mantra === mantra);
