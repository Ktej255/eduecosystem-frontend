// Brihadaranyaka Upanishad Data
// Source: Shukla Yajur Veda | 6 Chapters (The Largest Upanishad)
// Theme: The Great Forest of Knowledge
// Mahavakya: "Aham Brahmasmi" (I Am Brahman)

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface BrihadaranyakaDataEntry {
    id: number;
    chapter: number;
    section: number;
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

export const BRIHADARANYAKA_SHLOKAS: BrihadaranyakaDataEntry[] = [
    // ==========================================
    // THE 10 PILLARS OF BRIHADARANYAKA
    // ==========================================

    {
        id: 1,
        chapter: 1,
        section: 3,
        verse: 28,
        theme: "Asato Ma Sadgamaya (The Prayer)",
        sanskrit: "असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥",
        hindi: "मुझे असत् से सत् की ओर ले चलो। मुझे अंधकार से प्रकाश की ओर ले चलो। मुझे मृत्यु से अमरता की ओर ले चलो।",
        english: "Lead me from the Unreal to the Real. Lead me from Darkness to Light. Lead me from Death to Immortality.",
        simpleExplanation: "THE MOST FAMOUS PRAYER: Three movements—from falsity to truth, ignorance to knowledge, death to eternal life!",
        simpleExplanationHindi: "सबसे प्रसिद्ध प्रार्थना: तीन गतियां—असत्य से सत्य, अज्ञान से ज्ञान, मृत्यु से अमरता तक!",
        nanoBananaPrompt: "Three arrows: from darkness to light, unreal to real, death to immortality.",
        wordMeanings: [
            { sanskrit: "asataḥ sat gamaya", devanagari: "असतः सत् गमय", hindi: "असत्य से सत्य की ओर", english: "from unreal to real" },
            { sanskrit: "tamasaḥ jyotiḥ", devanagari: "तमसः ज्योतिः", hindi: "अंधकार से प्रकाश", english: "from darkness to light" },
            { sanskrit: "mṛtyoḥ amṛtam", devanagari: "मृत्योः अमृतम्", hindi: "मृत्यु से अमरता", english: "from death to immortality" }
        ]
    },
    {
        id: 2,
        chapter: 1,
        section: 4,
        verse: 10,
        theme: "AHAM BRAHMASMI (The Mahavakya)",
        sanskrit: "ब्रह्म वा इदमग्र आसीत्, तदात्मानमेवावेत्, अहं ब्रह्मास्मीति । तस्मात्तत्सर्वमभवत् ॥",
        hindi: "आरंभ में यह केवल ब्रह्म था। उसने केवल स्वयं को जाना: 'मैं ब्रह्म हूँ (अहं ब्रह्मास्मि)'। इसलिए वह सर्व हो गया।",
        english: "In the beginning, this was Brahman alone. It knew only Itself as: 'I AM BRAHMAN (Aham Brahmasmi)'. Therefore, It became All.",
        simpleExplanation: "THE 1ST MAHAVAKYA: 'AHAM BRAHMASMI' = I AM GOD! When the One realized itself, it became everything!",
        simpleExplanationHindi: "पहला महावाक्य: 'अहं ब्रह्मास्मि' = मैं ब्रह्म हूँ! जब एक ने खुद को जाना, वह सब कुछ बन गया!",
        nanoBananaPrompt: "One consciousness realizing 'I am Brahman' and becoming the entire universe.",
        wordMeanings: [
            { sanskrit: "ahaṃ brahmāsmi", devanagari: "अहं ब्रह्मास्मि", hindi: "मैं ब्रह्म हूँ", english: "I am Brahman" },
            { sanskrit: "tad sarvam abhavat", devanagari: "तत्सर्वमभवत्", hindi: "वह सब हो गया", english: "it became all" }
        ]
    },
    {
        id: 3,
        chapter: 2,
        section: 4,
        verse: 5,
        theme: "The Psychology of Love (Maitreyi)",
        sanskrit: "न वा अरे पत्युः कामाय पतिः प्रियो भवत्यात्मनस्तु कामाय पतिः प्रियो भवति । न वा अरे सर्वस्य कामाय सर्वं प्रियं भवत्यात्मनस्तु कामाय सर्वं प्रियं भवति ॥",
        hindi: "पति की कामना से पति प्रिय नहीं होता; अपनी आत्मा की कामना से पति प्रिय होता है। सबकी कामना से सब प्रिय नहीं होते; अपनी आत्मा की कामना से सब प्रिय होते हैं।",
        english: "Not for the husband's sake is the husband loved, but for the Self's sake. Not for the sake of all is all loved, but for the Self's sake is all loved.",
        simpleExplanation: "WHY YOU LOVE: You don't love others for THEIR sake—you love them because they bring joy to YOUR Self! Self is the true beloved.",
        simpleExplanationHindi: "तुम क्यों प्रेम करते हो: दूसरों के लिए नहीं—वे तुम्हारी आत्मा को आनंद देते हैं इसलिए! आत्मा ही सच्चा प्रियतम है।",
        nanoBananaPrompt: "A person loving spouse, children, wealth—but all love flowing back to the Self.",
        wordMeanings: [
            { sanskrit: "ātmanaḥ kāmāya", devanagari: "आत्मनस्तु कामाय", hindi: "आत्मा की चाहत से", english: "for the Self's sake" }
        ]
    },
    {
        id: 4,
        chapter: 2,
        section: 4,
        verse: 5,
        theme: "The Four-Fold Path",
        sanskrit: "आत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निदिध्यासितव्यो मैत्रेयि । आत्मनो वा अरे दर्शनेन इदं सर्वं विदितम् ॥",
        hindi: "आत्मा को देखना, सुनना, मनन करना और निदिध्यासन करना चाहिए। आत्मा के दर्शन से यह सब विदित हो जाता है।",
        english: "The Self should be REALIZED—should be HEARD of, REFLECTED on, and MEDITATED upon. By realizing the Self, all this is known.",
        simpleExplanation: "THE 4-STEP METHOD: 1) Hear (Shravana), 2) Reflect (Manana), 3) Meditate (Nididhyasana), 4) Realize (Darshana)!",
        simpleExplanationHindi: "4-चरण विधि: 1) सुनो (श्रवण), 2) सोचो (मनन), 3) ध्यान करो (निदिध्यासन), 4) साक्षात्कार करो (दर्शन)!",
        nanoBananaPrompt: "Four steps: ear hearing, mind reflecting, meditation, and finally seeing the light.",
        wordMeanings: [
            { sanskrit: "śrotavya", devanagari: "श्रोतव्य", hindi: "सुनना", english: "to be heard" },
            { sanskrit: "mantavya", devanagari: "मन्तव्य", hindi: "मनन करना", english: "to be reflected" },
            { sanskrit: "nididhyāsitavya", devanagari: "निदिध्यासितव्य", hindi: "ध्यान करना", english: "to be meditated" }
        ]
    },
    {
        id: 5,
        chapter: 2,
        section: 3,
        verse: 6,
        theme: "Neti Neti (Not This, Not This)",
        sanskrit: "अथात आदेशो नेति नेति । न ह्येतस्मादिति नेत्यन्यत्परमस्ति ॥",
        hindi: "अब (ब्रह्म का) वर्णन इस प्रकार है: 'नेति नेति' (यह नहीं, यह नहीं)। क्योंकि इस निषेध के अतिरिक्त कोई श्रेष्ठ वर्णन नहीं।",
        english: "Now, the description of Brahman: 'NETI NETI' (Not this, Not this). Because there is no better description than this negation.",
        simpleExplanation: "THE VIA NEGATIVA: Brahman can't be described positively—only by saying what it's NOT! Not body, not mind, not anything limited.",
        simpleExplanationHindi: "निषेध मार्ग: ब्रह्म का सकारात्मक वर्णन नहीं—केवल यह कहने से कि यह क्या नहीं है! न शरीर, न मन, न कुछ सीमित।",
        nanoBananaPrompt: "Rejecting every form: not this, not this—until only the formless remains.",
        wordMeanings: [
            { sanskrit: "neti neti", devanagari: "नेति नेति", hindi: "यह नहीं, यह नहीं", english: "not this, not this" }
        ]
    },
    {
        id: 6,
        chapter: 3,
        section: 7,
        verse: 23,
        theme: "The Inner Controller (Antaryami)",
        sanskrit: "यः पृथिव्यां तिष्ठन् पृथिव्या अन्तरः यं पृथिवी न वेद यस्य पृथिवी शरीरं यः पृथिवीमन्तरो यमयति । एष त आत्माऽन्तर्याम्यमृतः ॥",
        hindi: "जो पृथ्वी में रहता है, पृथ्वी के भीतर है, जिसे पृथ्वी नहीं जानती, पृथ्वी जिसका शरीर है, जो भीतर से नियंत्रित करता है—वही तुम्हारा आत्मा, अंतर्यामी, अमर है।",
        english: "He who dwells in Earth, is within Earth, whom Earth doesn't know, whose body the Earth is, who controls from within—He is your Self, the Inner Controller, Immortal.",
        simpleExplanation: "GOD IS INSIDE EVERYTHING: In earth, water, fire, air, mind—the same Self controls from within! The universe is His body!",
        simpleExplanationHindi: "ईश्वर हर चीज़ के अंदर: पृथ्वी, जल, अग्नि, वायु, मन में—वही आत्मा भीतर से नियंत्रित करती है! ब्रह्मांड उसका शरीर है!",
        nanoBananaPrompt: "One consciousness residing within earth, water, fire, controlling from inside.",
        wordMeanings: [
            { sanskrit: "antaryāmī", devanagari: "अन्तर्यामी", hindi: "अंतर का नियंता", english: "inner controller" },
            { sanskrit: "amṛtaḥ", devanagari: "अमृतः", hindi: "अमर", english: "immortal" }
        ]
    },
    {
        id: 7,
        chapter: 3,
        section: 8,
        verse: 8,
        theme: "The Imperishable (Gargi's Question)",
        sanskrit: "एतद्वै तदक्षरं गार्गि ब्राह्मणा अभिवदन्ति । अस्थूलमनण्वह्रस्वमदीर्घमलोहितमस्नेहमच्छायमतमोऽवाय्वनाकाशमसङ्गम् ॥",
        hindi: "गार्गी! ब्रह्मवेत्ता उसे 'अक्षर' कहते हैं। न स्थूल, न सूक्ष्म, न छोटा, न लंबा, न लाल, न चिकना, न छाया, न अंधकार, न वायु, न आकाश, असंग है।",
        english: "O Gargi, the knowers call That the Imperishable. Neither gross nor subtle, neither short nor long, neither red nor wet, without shadow, without darkness, not air, not space, unattached.",
        simpleExplanation: "DESCRIBING THE INDESCRIBABLE: Gargi asked—Yajnavalkya lists what Brahman is NOT. It's beyond all categories!",
        simpleExplanationHindi: "अवर्णनीय का वर्णन: गार्गी ने पूछा—याज्ञवल्क्य ने बताया ब्रह्म क्या नहीं है। यह सब श्रेणियों से परे है!",
        nanoBananaPrompt: "A female scholar asking, a sage describing what the Imperishable is NOT.",
        wordMeanings: [
            { sanskrit: "akṣaram", devanagari: "अक्षरम्", hindi: "अविनाशी", english: "imperishable" },
            { sanskrit: "asaṅgam", devanagari: "असङ्गम्", hindi: "निर्लिप्त", english: "unattached" }
        ]
    },
    {
        id: 8,
        chapter: 4,
        section: 3,
        verse: 6,
        theme: "The Self is the Light",
        sanskrit: "अस्तमिते आदित्ये चन्द्रमस्यस्तमिते शान्ते अग्नौ शान्तायां वाचि किंज्योतिरेवायं पुरुष इति । आत्मैवास्य ज्योतिर्भवति ॥",
        hindi: "जब सूर्य डूब जाए, चंद्र डूब जाए, अग्नि शांत हो, वाणी शांत हो—तब मनुष्य के लिए ज्योति क्या है? आत्मा ही ज्योति होती है।",
        english: "When sun sets, moon sets, fire goes out, speech stops—what is man's light? The SELF indeed is his light.",
        simpleExplanation: "WHEN ALL LIGHTS FAIL: When sun, moon, fire, and speech are gone—your inner Self is the eternal light!",
        simpleExplanationHindi: "जब सब ज्योति विफल हो: जब सूर्य, चंद्र, अग्नि, वाणी न हो—तुम्हारी आत्मा ही शाश्वत प्रकाश है!",
        nanoBananaPrompt: "Sun, moon, fire all gone dark—but a human's inner self still glowing.",
        wordMeanings: [
            { sanskrit: "ātmā jyotiḥ", devanagari: "आत्मा ज्योतिः", hindi: "आत्मा ही ज्योति है", english: "Self is the light" }
        ]
    },
    {
        id: 9,
        chapter: 5,
        section: 2,
        verse: 3,
        theme: "Da-Da-Da (Three Disciplines)",
        sanskrit: "तदेतदेवैषा दैवी वागनुवदति स्तनयित्नुः — द द द इति । दाम्यत दत्त दयध्वमिति ॥",
        hindi: "वही दैवीय वाणी मेघ-गर्जना में दोहराती है: 'द! द! द!' (देवताओं को): दाम्यत (संयम)। (मनुष्यों को): दत्त (दान)। (असुरों को): दयध्वम् (दया)।",
        english: "The heavenly voice of Thunder repeats: 'DA! DA! DA!' DAMYATA (Control). DATTA (Give). DAYADHVAM (Be compassionate).",
        simpleExplanation: "THREE TEACHINGS FROM THUNDER: Gods need self-control, Humans need charity, Demons need compassion. DA-DA-DA!",
        simpleExplanationHindi: "गर्जना से तीन शिक्षाएं: देवों को संयम, मनुष्यों को दान, दानवों को दया चाहिए। द-द-द!",
        nanoBananaPrompt: "Thunder speaking DA-DA-DA to gods, humans, and demons with different meanings.",
        wordMeanings: [
            { sanskrit: "dāmyata", devanagari: "दाम्यत", hindi: "संयम करो", english: "control yourselves" },
            { sanskrit: "datta", devanagari: "दत्त", hindi: "दान करो", english: "give" },
            { sanskrit: "dayadhvam", devanagari: "दयध्वम्", hindi: "दया करो", english: "be compassionate" }
        ]
    },
    {
        id: 10,
        chapter: 5,
        section: 1,
        verse: 1,
        theme: "Purnamadah (The Fullness)",
        sanskrit: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
        hindi: "वह पूर्ण है। यह पूर्ण है। पूर्ण से पूर्ण उत्पन्न होता है। पूर्ण में से पूर्ण निकालने पर भी पूर्ण ही शेष रहता है।",
        english: "That is Whole; this is Whole. From Wholeness comes Wholeness. If Wholeness is taken from Wholeness, Wholeness alone remains.",
        simpleExplanation: "INFINITY MATH: Infinity - Infinity = Infinity! God is FULL. Creation comes from God. But God remains FULL!",
        simpleExplanationHindi: "अनंत गणित: अनंत - अनंत = अनंत! ईश्वर पूर्ण है। सृष्टि ईश्वर से आती है। फिर भी ईश्वर पूर्ण रहता है!",
        nanoBananaPrompt: "Infinite wholeness, from which infinite wholeness emerges, yet remains infinite.",
        wordMeanings: [
            { sanskrit: "pūrṇam", devanagari: "पूर्णम्", hindi: "पूर्ण/पूरा", english: "whole/full" },
            { sanskrit: "avaśiṣyate", devanagari: "अवशिष्यते", hindi: "शेष रहता है", english: "remains" }
        ]
    }
];

// Metadata
export const BRIHADARANYAKA_METADATA = {
    id: "brihadaranyaka",
    name: "Brihadaranyaka",
    nameSanskrit: "बृहदारण्यकोपनिषद्",
    veda: "Shukla Yajur Veda",
    shlokaCount: 10,  // 10 selected pillars
    chapterCount: 6,
    meaning: "The Great Forest Upanishad",
    description: "The largest and oldest Upanishad",
    mahavakya: {
        sanskrit: "अहं ब्रह्मास्मि",
        transliteration: "Aham Brahmasmi",
        meaning: "I Am Brahman",
        verse: 2
    },
    characters: {
        mainSage: "Yajnavalkya",
        wife: "Maitreyi",
        femaleScholar: "Gargi",
        king: "Janaka"
    },
    sections: {
        madhuKanda: "Teaching (Non-duality)",
        muniKanda: "Debates (Yajnavalkya's logic)",
        khilaKanda: "Miscellaneous meditations"
    },
    famousVerses: {
        asatoMa: { id: 1, chapter: 1, section: 3, verse: 28 },
        ahamBrahmasmi: { id: 2, chapter: 1, section: 4, verse: 10 },
        netiNeti: { id: 5, chapter: 2, section: 3, verse: 6 },
        daDaDa: { id: 9, chapter: 5, section: 2, verse: 3 },
        purnamadah: { id: 10, chapter: 5, section: 1, verse: 1 }
    }
};
