// Kaivalya Upanishad Data (#12 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Shaiva
// Theme: Path to Kaivalya (Aloneness/Liberation) through Tyaga and Shiva Meditation

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface KaivalyaDataEntry {
    id: number;
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

export const KAIVALYA_SHLOKAS: KaivalyaDataEntry[] = [
    {
        id: 1,
        verse: 1,
        theme: "Ashvalayana's Request",
        sanskrit: "अधीहि भगवन् ब्रह्मविद्यां वरिष्ठां सदा सद्भिः सेव्यमानां निगूढाम्।",
        hindi: "आश्वलायन ने ब्रह्मा से कहा: 'भगवन्! मुझे वह वरिष्ठ ब्रह्मविद्या सिखाएं जो ज्ञानियों द्वारा सेवित और अत्यंत गूढ़ है।'",
        english: "Ashvalayana said: 'Lord, teach me the Supreme Knowledge of Brahman, always cultivated by the wise, and most secret.'",
        simpleExplanation: "THE SUPREME SECRET: Even great sages approach higher masters for the ultimate hidden knowledge!",
        simpleExplanationHindi: "परम रहस्य: महान ऋषि भी परम गूढ़ ज्ञान के लिए उच्च गुरुओं के पास जाते हैं!",
        nanoBananaPrompt: "A sage approaching the Creator Brahma, humbly requesting the supreme secret knowledge.",
        wordMeanings: [
            { sanskrit: "nigūḍhām", devanagari: "निगूढाम्", hindi: "अत्यंत गुप्त", english: "most secret/hidden" }
        ]
    },
    {
        id: 2,
        verse: 2,
        theme: "Three Tools",
        sanskrit: "श्रद्धाभक्तिध्यानयोगादवैहि।",
        hindi: "ब्रह्मा ने कहा: 'इसे श्रद्धा, भक्ति और ध्यान-योग के द्वारा जानो।'",
        english: "Brahma replied: 'Know this through Faith (Shraddha), Devotion (Bhakti), and Meditation-Yoga (Dhyana).'",
        simpleExplanation: "THE 3 KEYS: Faith opens the door, Devotion maintains it, Meditation enters the sanctum!",
        simpleExplanationHindi: "3 कुंजियां: श्रद्धा द्वार खोलती है, भक्ति बनाए रखती है, ध्यान गर्भगृह में प्रवेश कराता है!",
        nanoBananaPrompt: "Three keys: Faith (heart), Devotion (prayer), Meditation (stillness) opening a cosmic door.",
        wordMeanings: [
            { sanskrit: "śraddhā", devanagari: "श्रद्धा", hindi: "आस्था", english: "faith" },
            { sanskrit: "bhakti", devanagari: "भक्ति", hindi: "भक्ति", english: "devotion" }
        ]
    },
    {
        id: 3,
        verse: 3,
        theme: "Na Karmana (Not by Works)",
        sanskrit: "न कर्मणा न प्रजया धनेन त्यागेनैके अमृतत्वमानशुः।",
        hindi: "न कर्म से, न संतान से, न धन से; केवल त्याग से ही कुछ लोगों ने अमरता प्राप्त की है।",
        english: "Not by works, not by progeny, not by wealth; but by Renunciation (Tyaga) alone have some attained Immortality.",
        simpleExplanation: "THE GREAT REJECTION: Rituals give temporary heaven, children give legacy, money gives comfort—but ONLY letting go = IMMORTALITY!",
        simpleExplanationHindi: "महान त्याग: कर्मकांड अस्थायी स्वर्ग देते हैं, संतान विरासत, धन आराम—पर केवल छोड़ना = अमरता!",
        nanoBananaPrompt: "Three things being released: ritual fire, children, gold coins. A figure rises free toward light.",
        wordMeanings: [
            { sanskrit: "tyāgena", devanagari: "त्यागेन", hindi: "त्याग से", english: "by renunciation" },
            { sanskrit: "amṛtatvam", devanagari: "अमृतत्वम्", hindi: "अमरता", english: "immortality" }
        ]
    },
    {
        id: 4,
        verse: 6,
        theme: "Heart Lotus Meditation",
        sanskrit: "हृत्पुण्डरीकं विरजं विशुद्धं विचिन्त्य मध्ये विशदं विशोकम्। अचिन्त्यमव्यक्तमनन्तरूपं शिवं प्रशान्तममृतं ब्रह्मयोनिम्॥",
        hindi: "हृदय कमल पर ध्यान करो जो विरज और विशुद्ध है। उसके मध्य में वह है जो विशद, शोकरहित, अचिन्त्य, अव्यक्त, अनंत रूप, शिव, प्रशांत, अमृत और ब्रह्म का स्रोत है।",
        english: "Meditate on the Heart-Lotus, dustless and pure. In its center is That which is clear, sorrowless, unthinkable, unmanifest, infinite, Shiva, peaceful, immortal—the source of Brahma.",
        simpleExplanation: "HEART LOTUS MEDITATION: Inside your heart is a pure lotus. At its center = Shiva = Source of ALL creation!",
        simpleExplanationHindi: "हृदय कमल ध्यान: तुम्हारे हृदय में शुद्ध कमल है। उसके केंद्र में = शिव = समस्त सृष्टि का स्रोत!",
        nanoBananaPrompt: "A glowing lotus in the heart center, with Shiva (peaceful, infinite) radiating from its core.",
        wordMeanings: [
            { sanskrit: "hṛt-puṇḍarīkam", devanagari: "हृत्पुण्डरीकम्", hindi: "हृदय कमल", english: "heart-lotus" },
            { sanskrit: "brahmayonim", devanagari: "ब्रह्मयोनिम्", hindi: "ब्रह्म का स्रोत", english: "source of Brahma" }
        ]
    },
    {
        id: 5,
        verse: 7,
        theme: "Vision of Shiva",
        sanskrit: "उमासहायं परमेश्वरं प्रभुं त्रिलोचनं नीलकण्ठं प्रशान्तम्।",
        hindi: "उमा-सहायम् (शक्ति के साथ), परमेश्वर, प्रभु, त्रिलोचन (तीन नेत्रों वाला), नीलकंठ और प्रशांत।",
        english: "With Uma (Shakti) as consort, Supreme Lord, Master, Three-Eyed (Trilochan), Blue-Throated (Nilakantha), and Peaceful.",
        simpleExplanation: "SHIVA'S FORM: With Shakti (Uma), Three Eyes (Past/Present/Future), Blue Throat (swallowed world's poison for us)!",
        simpleExplanationHindi: "शिव का स्वरूप: शक्ति (उमा) के साथ, तीन नेत्र (भूत/वर्तमान/भविष्य), नीला कंठ (हमारे लिए विष पिया)!",
        nanoBananaPrompt: "Shiva with Uma, three eyes (third eye glowing), blue throat, in serene meditation.",
        wordMeanings: [
            { sanskrit: "umāsahāyam", devanagari: "उमासहायम्", hindi: "उमा के साथ", english: "with Uma as consort" },
            { sanskrit: "nīlakaṇṭham", devanagari: "नीलकण्ठम्", hindi: "नीले गले वाला", english: "blue-throated" }
        ]
    },
    {
        id: 6,
        verse: 9,
        theme: "He is All Gods",
        sanskrit: "स ब्रह्मा स शिवः स इन्द्रः सोऽक्षरः परमः स्वराट्। स एव विष्णुः स प्राणः स कालोऽग्निः स चन्द्रमाः॥",
        hindi: "वही ब्रह्मा है, वही शिव है, वही इंद्र है। वही अक्षर, परम, स्वप्रकाश। वही विष्णु, प्राण, काल, अग्नि, चंद्र है।",
        english: "He is Brahma, He is Shiva, He is Indra. He is Imperishable, Supreme, Self-Luminous. He alone is Vishnu, Prana, Time, Fire, Moon.",
        simpleExplanation: "END OF SECTARIANISM: Brahma, Vishnu, Shiva, Indra, Sun, Moon—ALL are ONE God appearing in different costumes!",
        simpleExplanationHindi: "सम्प्रदायवाद का अंत: ब्रह्मा, विष्णु, शिव, इंद्र, सूर्य, चंद्र—सब एक ईश्वर अलग-अलग वेश में!",
        nanoBananaPrompt: "One light splitting into Brahma, Vishnu, Shiva, Indra, Sun, Moon—all emanating from the same source.",
        wordMeanings: [
            { sanskrit: "svarāṭ", devanagari: "स्वराट्", hindi: "स्वयं प्रकाशित", english: "self-luminous/self-ruling" }
        ]
    },
    {
        id: 7,
        verse: 11,
        theme: "Fire Stick Analogy",
        sanskrit: "आत्मानमरणिं कृत्वा प्रणवं चोत्तरारणिम्। ज्ञाननिर्मथनाभ्यासात्पाशं दहति पण्डितः॥",
        hindi: "आत्मा को नीचे की अरणि बनाकर और ओंकार को ऊपर की अरणि बनाकर, ज्ञान रूपी मंथन के अभ्यास से पंडित बंधन को जला देता है।",
        english: "Making the Self the lower fire-stick and OM the upper fire-stick, by constant friction of Knowledge, the wise man burns away bondage.",
        simpleExplanation: "FRICTION = FIRE: Rub Self (lower) + OM (upper) together with Knowledge practice = BURN ALL CHAINS!",
        simpleExplanationHindi: "घर्षण = अग्नि: आत्मा (नीचे) + ॐ (ऊपर) को ज्ञान अभ्यास से रगड़ो = सारी जंजीरें जलाओ!",
        nanoBananaPrompt: "Two fire sticks (Self and OM) being rubbed together, creating the fire of knowledge that burns chains.",
        wordMeanings: [
            { sanskrit: "araṇi", devanagari: "अरणि", hindi: "अग्नि उत्पन्न करने की लकड़ी", english: "fire-stick" },
            { sanskrit: "pāśam dahati", devanagari: "पाशं दहति", hindi: "बंधन जलाता है", english: "burns bondage" }
        ]
    },
    {
        id: 8,
        verse: 19,
        theme: "I Am Brahman",
        sanskrit: "मय्येव सकलं जातं मयि सर्वं प्रतिष्ठितम्। मयि सर्वं लयं याति तद्ब्रह्माद्वयमस्म्यहम्॥",
        hindi: "मुझसे ही सब उत्पन्न हुआ; मुझमें सब प्रतिष्ठित है; मुझमें सब लीन होता है। वह अद्वैत ब्रह्म मैं ही हूँ।",
        english: "In Me alone is everything born; in Me does everything rest; in Me is everything dissolved. I AM that Non-dual Brahman.",
        simpleExplanation: "THE ROAR OF REALIZATION: Creation, Preservation, Dissolution—all happen IN ME. I AM BRAHMAN!",
        simpleExplanationHindi: "साक्षात्कार की गर्जना: सृष्टि, स्थिति, लय—सब मुझमें होता है। मैं ब्रह्म हूँ!",
        nanoBananaPrompt: "A meditator realizing: the entire universe—creation, existence, dissolution—is happening within their own consciousness.",
        wordMeanings: [
            { sanskrit: "advayam", devanagari: "अद्वयम्", hindi: "अद्वैत/एक", english: "non-dual" }
        ]
    },
    {
        id: 9,
        verse: 21,
        theme: "Without Hands or Feet",
        sanskrit: "अपाणिपादोऽहमचिन्त्यशक्तिः पश्याम्यचक्षुः स शृणोम्यकर्णः। अहं विजानामि विविक्तरूपो न चास्ति वेत्ता मम चित्सदाहम्॥",
        hindi: "मेरे हाथ-पैर नहीं, पर मेरी शक्ति अचिंत्य है। मैं बिना आँखों के देखता हूँ, बिना कानों के सुनता हूँ। मैं सब जानता हूँ, पर मुझे कोई नहीं जानता। मैं सदा चैतन्य हूँ।",
        english: "I am without hands and feet, yet of unthinkable power. I see without eyes, hear without ears. I know everything, but no one knows Me. I am always Pure Consciousness.",
        simpleExplanation: "THE PARADOX: No hands but acts, no eyes but sees, no ears but hears—PURE CONSCIOUSNESS doing all through all!",
        simpleExplanationHindi: "विरोधाभास: हाथ नहीं पर कार्य करता, आँखें नहीं पर देखता, कान नहीं पर सुनता—शुद्ध चेतना सबके द्वारा सब करती है!",
        nanoBananaPrompt: "A formless light that sees without eyes, acts without hands, knows everything yet cannot be known.",
        wordMeanings: [
            { sanskrit: "cit sadā aham", devanagari: "चित्सदाहम्", hindi: "मैं सदा चेतना हूँ", english: "I am always pure consciousness" }
        ]
    }
];

export const KAIVALYA_METADATA = {
    id: "kaivalya",
    name: "Kaivalya",
    nameSanskrit: "कैवल्योपनिषद्",
    veda: "Krishna Yajur Veda",
    category: "Shaiva",
    shlokaCount: 9,
    sequenceNumber: 12,
    meaning: "Aloneness/Absolute Liberation",
    keyTeachings: [
        "Faith + Bhakti + Dhyana = Path to Liberation",
        "Na Karmana: Not by works, only by Tyaga (Renunciation)",
        "Heart Lotus Meditation on Shiva",
        "All Gods are One (Sa Brahma Sa Shivah)",
        "Fire-Stick Analogy for Burning Bondage"
    ],
    famousVerses: {
        naKarmana: { id: 3, verse: 3 },
        saShivah: { id: 6, verse: 9 },
        ahamBrahma: { id: 8, verse: 19 }
    }
};
