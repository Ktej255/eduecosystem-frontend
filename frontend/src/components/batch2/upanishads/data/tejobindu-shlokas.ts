// Tejobindu Upanishad (#38 in Muktika Canon) | Krishna Yajur Veda | Yoga
// Theme: Point of Light & 15 Limbs of Yoga Redefined
// Total: 6 Adhyayas, 18 key mantras

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface TejobinduDataEntry {
    id: number; adhyaya: number; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const TEJOBINDU_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const TEJOBINDU_SHLOKAS: TejobinduDataEntry[] = [
    // Ch 1: Point of Light
    {
        id: 1, adhyaya: 1, verse: 1, theme: "Tejobindu",
        sanskrit: "तेजोबिन्दुः परं ध्यानं विश्वात्महृदि संस्थितम् ।",
        hindi: "तेजोबिन्दु (प्रकाश बिंदु) परम ध्यान है, हृदय में स्थित।",
        english: "Tejobindu (Point of Light) is Supreme Meditation in the heart.",
        simpleExplanation: "LIGHT POINT: A luminous dot in the heart—ultimate meditation object!",
        simpleExplanationHindi: "प्रकाश बिंदु: हृदय में चमकता बिंदु!", nanoBananaPrompt: "Point of light in heart."
    },
    {
        id: 2, adhyaya: 1, verse: 2, theme: "Difficult Attainment",
        sanskrit: "दुःसाध्यं सर्वजन्तूनां दुःप्रापं योगिनामपि ।",
        hindi: "सभी प्राणियों के लिए कठिन, योगियों के लिए भी दुष्प्राप्य।",
        english: "Difficult for all beings, hard even for Yogis.",
        simpleExplanation: "RARE: Even yogis struggle to attain this!",
        simpleExplanationHindi: "दुर्लभ: योगी भी संघर्ष करते!", nanoBananaPrompt: "Hard to attain."
    },
    {
        id: 3, adhyaya: 1, verse: 3, theme: "Abandon All",
        sanskrit: "त्यज साध्यं च मानं च कामं क्रोधं च लोभं च मोहं चात्रैव वर्जयेत् ॥",
        hindi: "लक्ष्य की चिंता, अहंकार, काम, क्रोध, लोभ, मोह—सब त्यागो।",
        english: "Abandon goal-anxiety, ego, lust, anger, greed, delusion.",
        simpleExplanation: "LET GO: Drop ego, lust, anger, greed, delusion!",
        simpleExplanationHindi: "सब छोड़ो: अहंकार, काम, क्रोध, लोभ!", nanoBananaPrompt: "Abandoning obstacles."
    },
    // Ch 2: Chinmatra
    {
        id: 4, adhyaya: 2, verse: 1, theme: "I Am Consciousness",
        sanskrit: "चिन्मात्रोऽहं सदाशिवाहमस्म्यहम् ।",
        hindi: "'मैं चिन्मात्र (शुद्ध चेतना) हूँ। मैं सदाशिव हूँ।'",
        english: "'I am Pure Consciousness. I am Sadasiva.'",
        simpleExplanation: "DECLARATION: I am Pure Consciousness! I am Shiva!",
        simpleExplanationHindi: "घोषणा: मैं शुद्ध चेतना हूँ!", nanoBananaPrompt: "'I am consciousness.'"
    },
    // Ch 3: Affirmation
    {
        id: 5, adhyaya: 3, verse: 1, theme: "I Am Brahman",
        sanskrit: "अहमेव परं ब्रह्म अहमेव परं पदम् ।",
        hindi: "मैं ही परब्रह्म, मैं ही परम पद, मैं ही ज्ञान, मैं ही परम।",
        english: "I alone am Supreme Brahman, Supreme Abode, Knowledge, Supreme.",
        simpleExplanation: "AFFIRMATION: I AM Brahman! I AM the Goal!",
        simpleExplanationHindi: "पुष्टि: मैं ब्रह्म हूँ!", nanoBananaPrompt: "Aham Brahmasmi affirmed."
    },
    {
        id: 6, adhyaya: 3, verse: 2, theme: "Beyond Void",
        sanskrit: "न शून्यं नापि चाशून्यं परं ब्रह्मैव केवलम् ॥",
        hindi: "न शून्य, न अशून्य। केवल परब्रह्म।",
        english: "Neither void nor non-void. Supreme Brahman ALONE.",
        simpleExplanation: "BEYOND: Not void, not solid. Only BRAHMAN!",
        simpleExplanationHindi: "परे: केवल ब्रह्म!", nanoBananaPrompt: "Beyond void."
    },
    // Ch 4: Jivanmukti
    {
        id: 7, adhyaya: 4, verse: 1, theme: "Jivanmukta",
        sanskrit: "देहेन्द्रियादिभिर्हीनः परमात्माहमेव हि । स जीवन्मुक्त उच्यते ॥",
        hindi: "'मैं देह-इंद्रियों से रहित परमात्मा हूँ'—वह जीवनमुक्त।",
        english: "'I am Supreme Self beyond body-senses'—that is Jivanmukta.",
        simpleExplanation: "LIBERATED ALIVE: Knowing 'I am not body' = FREE while living!",
        simpleExplanationHindi: "जीते जी मुक्त: 'मैं शरीर नहीं'!", nanoBananaPrompt: "Jivanmukta—free alive."
    },
    // Ch 5: Videhamukti
    {
        id: 8, adhyaya: 5, verse: 1, theme: "Videhamukta",
        sanskrit: "सर्वं सच्चिन्मयं विद्धि एतद्भीतिविहीनं विदेहमुक्तलक्षणम् ॥",
        hindi: "सब सत्-चित्-मय जानो, भय-रहित = विदेहमुक्त।",
        english: "Know all as Sat-Chit; fearless = Videhamukta.",
        simpleExplanation: "BODILESS LIBERATION: All is Consciousness, no fear!",
        simpleExplanationHindi: "देह-मुक्ति: सब चेतना, भय नहीं!", nanoBananaPrompt: "Videhamukta—fearless."
    },
    // Ch 6: 15 Limbs
    {
        id: 9, adhyaya: 6, verse: 1, theme: "15 Limbs Listed",
        sanskrit: "यमो हि नियमस्त्यागो मौनं देशश्च कालतः । आसनं मूलबन्धश्च देहसाम्यं च दृक्स्थितिः ॥",
        hindi: "यम, नियम, त्याग, मौन, देश, काल, आसन, मूलबंध, देहसाम्य, दृक्स्थिति...",
        english: "Yama, Niyama, Tyaga, Mauna, Desha, Kala, Asana, Mulabandha, Dehasamya, Driksthiti...",
        simpleExplanation: "15 LIMBS: Not 8! Adds Renunciation, Silence, Place, Time!",
        simpleExplanationHindi: "15 अंग: 8 नहीं! त्याग, मौन, देश, काल जोड़े!", nanoBananaPrompt: "15 yoga limbs."
    },
    {
        id: 10, adhyaya: 6, verse: 2, theme: "Yama Redefined",
        sanskrit: "सर्वं ब्रह्मेति विज्ञानमिन्द्रियग्रामसंयमः यमोऽयम् ।",
        hindi: "'सब ब्रह्म है' ज्ञान से इंद्रिय-संयम = यम।",
        english: "Sense-control through 'All is Brahman' = YAMA.",
        simpleExplanation: "YAMA = 'All is Brahman!' controls senses automatically!",
        simpleExplanationHindi: "यम = 'सब ब्रह्म' से संयम!", nanoBananaPrompt: "Yama—Brahman-vision."
    },
    {
        id: 11, adhyaya: 6, verse: 3, theme: "Niyama Redefined",
        sanskrit: "सजातीयप्रवाहश्च विजातीयतिरस्कृतिः नियमः ।",
        hindi: "आत्म-विचार प्रवाह, अनात्म त्याग = नियम।",
        english: "Flow of Self-thoughts, rejection of non-Self = NIYAMA.",
        simpleExplanation: "NIYAMA = Keep Self-thoughts, reject non-Self!",
        simpleExplanationHindi: "नियम = आत्म-विचार रखो!", nanoBananaPrompt: "Niyama—Self-thought flow."
    },
    {
        id: 12, adhyaya: 6, verse: 4, theme: "Asana Redefined",
        sanskrit: "सुखेनैव भवेद्यस्मिन्नजस्रं ब्रह्मचिन्तनम् आसनं तत् ।",
        hindi: "जिसमें सुखपूर्वक निरंतर ब्रह्म-चिंतन = आसन।",
        english: "Where Brahman-meditation flows easily = ASANA.",
        simpleExplanation: "ASANA = Where Brahman-meditation flows! Not poses!",
        simpleExplanationHindi: "आसन = ब्रह्म-ध्यान सहज हो!", nanoBananaPrompt: "Asana—Brahman-meditation."
    },
    {
        id: 13, adhyaya: 6, verse: 5, theme: "Pranayama Redefined",
        sanskrit: "चित्तादिसर्वभावेषु ब्रह्मत्वेनैव भावनात् निरोधः प्राणायामः ।",
        hindi: "सब में ब्रह्म-भाव से वृत्ति-निरोध = प्राणायाम।",
        english: "Seeing Brahman everywhere, waves stop = PRANAYAMA.",
        simpleExplanation: "PRANAYAMA = Brahman-vision stops all mental waves!",
        simpleExplanationHindi: "प्राणायाम = ब्रह्म-दृष्टि से वृत्ति रुकी!", nanoBananaPrompt: "Pranayama—waves stop."
    },
    {
        id: 14, adhyaya: 6, verse: 6, theme: "Dharana Redefined",
        sanskrit: "यत्र यत्र मनो याति ब्रह्मणस्तत्र दर्शनात् धारणा ।",
        hindi: "मन जहाँ जाए, वहाँ ब्रह्म देखो = धारणा।",
        english: "Wherever mind goes, see Brahman there = DHARANA.",
        simpleExplanation: "DHARANA = See Brahman wherever mind wanders!",
        simpleExplanationHindi: "धारणा = मन जहाँ जाए, ब्रह्म देखो!", nanoBananaPrompt: "Dharana—Brahman everywhere."
    },
    {
        id: 15, adhyaya: 6, verse: 7, theme: "Dhyana Redefined",
        sanskrit: "ब्रह्मैवास्मीति सदवृत्त्या निरालम्बतया स्थितिः ध्यानम् ।",
        hindi: "'मैं ब्रह्म' में निरालम्ब स्थिति = ध्यान।",
        english: "Supportless resting in 'I am Brahman' = DHYANA.",
        simpleExplanation: "DHYANA = Resting supportlessly in 'I am Brahman'!",
        simpleExplanationHindi: "ध्यान = 'मैं ब्रह्म' में विश्राम!", nanoBananaPrompt: "Dhyana—'I am Brahman'."
    },
    {
        id: 16, adhyaya: 6, verse: 8, theme: "Samadhi",
        sanskrit: "निर्विकारतया वृत्त्या ब्रह्माकारतया वृत्तिविस्मरणं समाधिः ॥",
        hindi: "वृत्ति ब्रह्माकार, फिर वृत्ति भूल जाना = समाधि।",
        english: "Thought becomes Brahman-form, thought forgotten = SAMADHI.",
        simpleExplanation: "SAMADHI = Thought becomes Brahman, thought forgotten!",
        simpleExplanationHindi: "समाधि = विचार ब्रह्म बना, विचार भूला!", nanoBananaPrompt: "Samadhi—thought forgotten."
    },
    {
        id: 17, adhyaya: 6, verse: 9, theme: "Conclusion",
        sanskrit: "अमृतेनैव तृप्तस्य पयसा किं प्रयोजनम् । स्वात्मानं ज्ञात्वा वेदैः किं प्रयोजनम् ॥",
        hindi: "अमृत से तृप्त को दूध क्या? आत्मा जानने वाले को वेद क्या?",
        english: "For one satisfied by Nectar, what use milk? Knowing Self, what use Vedas?",
        simpleExplanation: "THE END: Drunk on Nectar, who needs milk? Knowing Self, who needs scriptures?",
        simpleExplanationHindi: "अंत: अमृत पीया, दूध क्या? आत्मा जाना, शास्त्र क्या?", nanoBananaPrompt: "Beyond scriptures."
    }
];

export const TEJOBINDU_METADATA = {
    id: "tejobindu", name: "Tejobindu", nameSanskrit: "तेजोबिन्दूपनिषद्",
    veda: "Krishna Yajur Veda", category: "Yoga",
    shlokaCount: 17, adhyayaCount: 6, sequenceNumber: 38,
    meaning: "Point (Bindu) of Light (Tejas)",
    fifteenLimbs: [
        "1. YAMA = 'All is Brahman' sense-control",
        "2. NIYAMA = Self-thought flow, non-Self rejected",
        "3. TYAGA = Renounce world-appearance",
        "4. MAUNA = Silence beyond words",
        "5. DESHA = The Brahman where no 'other' exists",
        "6. KALA = Brahman that creates time",
        "7. ASANA = Where Brahman-meditation flows",
        "8. MULABANDHA = Root of all worlds",
        "9. DEHASAMYA = Body balanced in Brahman",
        "10. DRIKSTHITI = Knowledge-vision not nose-gazing",
        "11. PRANAYAMA = Waves stop by Brahman-vision",
        "12. PRATYAHARA = See Self in objects",
        "13. DHARANA = See Brahman wherever mind goes",
        "14. DHYANA = 'I am Brahman' supportlessly",
        "15. SAMADHI = Thought becomes Brahman, forgotten"
    ]
};
