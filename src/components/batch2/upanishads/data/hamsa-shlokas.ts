// Hamsa Upanishad Data (#15 in Muktika Canon)
// Source: Shukla Yajur Veda | Category: Yoga
// Theme: The Swan (Hamsa) - Ajapa Gayatri, Nada Anusandhana, and Breath Meditation
// Total Mantras: 21

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface HamsaDataEntry {
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

// Shanti Mantra
export const HAMSA_SHANTI_MANTRA = {
    sanskrit: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह (परब्रह्म) पूर्ण है। यह (कार्यब्रह्म/जगत) भी पूर्ण है। पूर्ण से ही पूर्ण की उत्पत्ति होती है। पूर्ण में से पूर्ण को निकाल लेने पर भी पूर्ण ही शेष रहता है। ॐ शांति, शांति, शांति।",
    english: "OM! That (Brahman) is Whole. This (Universe) is Whole. From the Whole emerges the Whole. When the Whole is taken from the Whole, the Whole alone remains. OM Peace, Peace, Peace."
};

export const HAMSA_SHLOKAS: HamsaDataEntry[] = [
    {
        id: 1,
        verse: 1,
        theme: "Introduction to Hamsa Vidya",
        sanskrit: "अथ हंसपरमहंसनिर्णयं व्याख्यास्यामः । ब्रह्मचारिणे शान्ताय दान्ताय गुरुभक्ताय हंसहंसेति सदा अनुरुन्धानाय ।",
        hindi: "अब हम 'हंस' और 'परमहंस' के निर्णय (रहस्य) की व्याख्या करेंगे। (यह विद्या उसे दी जाए) जो ब्रह्मचारी है, शांत है, जितेन्द्रिय है, गुरु का भक्त है, और जो सदा 'हंस-हंस' का अनुसन्धान करता है।",
        english: "Now we shall explain the conclusion regarding the Hamsa and the Paramahamsa. This is to be taught to the student who is celibate, peaceful, self-controlled, devoted to the Guru, and who constantly contemplates 'Hamsa-Hamsa'.",
        simpleExplanation: "THE SWAN SECRET: This teaching is for disciplined students who constantly meditate on 'Hamsa' (I am That)!",
        simpleExplanationHindi: "हंस का रहस्य: यह शिक्षा अनुशासित शिष्यों के लिए है जो 'हंस' (मैं वह हूँ) का निरंतर ध्यान करते हैं!",
        nanoBananaPrompt: "A disciplined student in meditation, constantly contemplating the sacred swan symbol.",
        wordMeanings: [
            { sanskrit: "haṃsa", devanagari: "हंस", hindi: "हंस/आत्मा", english: "swan/soul" },
            { sanskrit: "paramahaṃsa", devanagari: "परमहंस", hindi: "परमहंस/परमात्मा", english: "supreme swan/supreme soul" }
        ]
    },
    {
        id: 2,
        verse: 2,
        theme: "Gautama's Inquiry",
        sanskrit: "एवं गच्छन्तीति । गौतमः सनत्कुमारं पप्रच्छ । भगवन् सर्वधर्मज्ञ सर्वधर्मविशेषवित् । यत्सर्ववेदान्तानां सारभूतं तत्ब्रूहीति ।",
        hindi: "ऐसा आचरण करते हुए, ऋषि गौतम ने सनत्कुमार से पूछा: 'हे भगवन्! आप सर्व-धर्मज्ञ हैं। जो सभी वेदान्तों का सार-भूत तत्व है, वह मुझे बताइये।'",
        english: "Acting thus, Gautama asked Sanatkumara: 'O Lord! You are the knower of all Dharmas. Please tell me that which is the essence of all the Vedantas.'",
        simpleExplanation: "THE ULTIMATE QUESTION: Sage Gautama asks Sanatkumara for the ONE essence of all Upanishads!",
        simpleExplanationHindi: "परम प्रश्न: ऋषि गौतम सनत्कुमार से सभी उपनिषदों का एक सार पूछते हैं!",
        nanoBananaPrompt: "Sage Gautama humbly asking the divine Sanatkumara for the essence of all Vedantic wisdom.",
        wordMeanings: [
            { sanskrit: "sārabhūtam", devanagari: "सारभूतम्", hindi: "सार तत्व", english: "the essence" },
            { sanskrit: "vedāntānām", devanagari: "वेदान्तानाम्", hindi: "वेदान्तों का", english: "of the Vedantas" }
        ]
    },
    {
        id: 3,
        verse: 3,
        theme: "Sanatkumara's Promise",
        sanskrit: "तमाह सनत्कुमारः । शृणु गौतम तत्त्वं मे येन विज्ञानमात्रेण सर्वपापैः प्रमुच्यते सर्ववित् भवति ।",
        hindi: "सनत्कुमार ने कहा: 'हे गौतम! मुझसे उस तत्व को सुनो, जिसके केवल विशेष ज्ञान मात्र से मनुष्य सभी पापों से मुक्त हो जाता है और सर्वज्ञ हो जाता है।'",
        english: "Sanatkumara said: 'Listen, O Gautama, to that Truth from me, by the mere knowledge of which one is liberated from all sins and becomes the Knower of All.'",
        simpleExplanation: "THE PROMISE: Just KNOWING this truth = freed from ALL sins + becomes ALL-KNOWING!",
        simpleExplanationHindi: "वादा: बस इस सत्य को जानना = सभी पापों से मुक्त + सर्वज्ञ बनना!",
        nanoBananaPrompt: "Sanatkumara about to reveal the ultimate truth that liberates and makes one omniscient.",
        wordMeanings: [
            { sanskrit: "vijñānamātreṇa", devanagari: "विज्ञानमात्रेण", hindi: "केवल ज्ञान से", english: "by mere knowledge" },
            { sanskrit: "sarvavit", devanagari: "सर्ववित्", hindi: "सर्वज्ञ", english: "knower of all" }
        ]
    },
    {
        id: 4,
        verse: 4,
        theme: "The All-Pervading Hamsa",
        sanskrit: "अयमेव विचारोऽस्तु ममेति । सर्वदेहेषु व्याप्य वर्तते । यथा ह्यग्निकाष्ठेषु तिलेषु तैलमिव तद्वद्विदित्वा मृत्युमत्येति ॥",
        hindi: "'यही मेरा विचार है: वह (हंस/आत्मा) सभी शरीरों में व्याप्त होकर रहता है। जैसे लकड़ी में अग्नि और तिलों में तेल छिपा रहता है, वैसे ही उसे जानकर साधक मृत्यु को पार कर जाता है।'",
        english: "'Let this be the inquiry: It (the Hamsa) pervades all bodies. Just as fire is latent in wood and oil in sesame seeds, knowing It thus, one crosses over death.'",
        simpleExplanation: "HIDDEN PRESENCE: The Soul is in all bodies like fire in wood, oil in seeds—know this and conquer death!",
        simpleExplanationHindi: "छिपी उपस्थिति: आत्मा सभी शरीरों में है जैसे लकड़ी में अग्नि, तिलों में तेल—यह जानो और मृत्यु जीतो!",
        nanoBananaPrompt: "The soul hidden in all bodies like fire in wood and oil in sesame seeds, waiting to be discovered.",
        wordMeanings: [
            { sanskrit: "sarvadeheṣu", devanagari: "सर्वदेहेषु", hindi: "सभी शरीरों में", english: "in all bodies" },
            { sanskrit: "mṛtyum atyeti", devanagari: "मृत्युमत्येति", hindi: "मृत्यु को पार करता है", english: "crosses over death" }
        ]
    },
    {
        id: 5,
        verse: 5,
        theme: "The Muladhara Chakra",
        sanskrit: "गुदं द्व्यङ्गलमधस्तान्मेढ्रं तु द्व्यङ्गलोपरि । अधरं मध्यमं क्लीबं गुदमित्यभिधीयते ॥ आधारं तत्र चक्रं स्यात् द्व्यङ्गुलं तु ततोर्ध्वतः ।",
        hindi: "गुदा को दबाकर, लिंग से दो अंगुल ऊपर और गुदा से दो अंगुल नीचे—जो मध्य भाग है, उसे 'आधार' (मूलाधार) चक्र कहते हैं।",
        english: "Pressing the anus, two fingers above the anus and two fingers below the genital organ—that middle region is called the Muladhara Chakra.",
        simpleExplanation: "ROOT CHAKRA LOCATION: Between anus and genital organ lies the Muladhara—the foundation chakra!",
        simpleExplanationHindi: "मूल चक्र स्थान: गुदा और लिंग के बीच मूलाधार है—आधार चक्र!",
        nanoBananaPrompt: "The Muladhara chakra glowing at the base of the spine, the root foundation of energy.",
        wordMeanings: [
            { sanskrit: "ādhāra", devanagari: "आधार", hindi: "आधार/नींव", english: "foundation/base" },
            { sanskrit: "cakra", devanagari: "चक्र", hindi: "चक्र", english: "wheel/energy center" }
        ]
    },
    {
        id: 6,
        verse: 6,
        theme: "The Sleeping Kundalini",
        sanskrit: "तस्मात् षडङ्गुलं प्रोक्तं नाभिचक्रं तु कुक्कुटम् । तत्र कुण्डलिनी शक्तिः सुप्ता मोक्षार्गलाकरा ॥",
        hindi: "उससे छह अंगुल ऊपर 'नाभि-चक्र' (मणिपुर) है। वहाँ 'कुण्डलिनी शक्ति' सोई हुई है, जो मोक्ष के द्वार की अर्गला (सांकल) के रूप में स्थित है।",
        english: "Six fingers above that is the Navel Chakra (Manipura). There, the Kundalini Shakti lies sleeping, barring the door to Liberation like a bolt.",
        simpleExplanation: "KUNDALINI SLEEPING: At the navel chakra, Kundalini sleeps like a bolt locking the door to Liberation!",
        simpleExplanationHindi: "कुण्डलिनी सोई है: नाभि चक्र पर कुण्डलिनी मोक्ष के द्वार पर ताले की तरह सोई है!",
        nanoBananaPrompt: "The Kundalini serpent coiled and sleeping at the navel chakra, blocking the door to liberation.",
        wordMeanings: [
            { sanskrit: "kuṇḍalinī", devanagari: "कुण्डलिनी", hindi: "कुण्डलिनी शक्ति", english: "coiled serpent power" },
            { sanskrit: "mokṣārgalā", devanagari: "मोक्षार्गला", hindi: "मोक्ष का ताला", english: "bolt to liberation" }
        ]
    },
    {
        id: 7,
        verse: 7,
        theme: "Awakening the Fire",
        sanskrit: "कन्दस्थाने स्थितः प्राणो वायुरग्निं प्रबोधयेत् । तदाधारगतं ज्योतिः सुषुम्णावर्तकः स्मृतः ॥",
        hindi: "कन्द-स्थान में स्थित 'प्राण वायु' को 'अग्नि' को जगाना चाहिए। तब आधार में स्थित ज्योति सुषुम्ना नाड़ी में प्रवेश करती है।",
        english: "The Prana Vayu situated in the Kanda region should kindle the Fire. Then the Light situated in the Muladhara enters the Sushumna channel.",
        simpleExplanation: "IGNITE THE FIRE: Prana kindles the inner fire, then the light rises into Sushumna—the central channel!",
        simpleExplanationHindi: "अग्नि प्रज्वलित करो: प्राण आंतरिक अग्नि जगाता है, फिर प्रकाश सुषुम्ना में उठता है!",
        nanoBananaPrompt: "Prana kindling the inner fire, light rising through the Sushumna central channel.",
        wordMeanings: [
            { sanskrit: "suṣumnā", devanagari: "सुषुम्ना", hindi: "सुषुम्ना नाड़ी", english: "central channel" },
            { sanskrit: "jyotiḥ", devanagari: "ज्योतिः", hindi: "प्रकाश", english: "light" }
        ]
    },
    {
        id: 8,
        verse: 8,
        theme: "The Anahata Sound",
        sanskrit: "अनाहतध्वनियुतं हंसं तत्परिकल्पयेत् ।",
        hindi: "(प्राण को ऊपर उठाकर) अनाहत ध्वनि से युक्त उस 'हंस' (जीवात्मा) की हृदय में कल्पना करनी चाहिए।",
        english: "One should meditate on that 'Hamsa' (the Soul) accompanied by the Anahata sound (in the Heart).",
        simpleExplanation: "HEART MEDITATION: Visualize the Soul (Hamsa) with the unstruck sound in your heart!",
        simpleExplanationHindi: "हृदय ध्यान: अपने हृदय में अनाहत ध्वनि के साथ आत्मा (हंस) की कल्पना करो!",
        nanoBananaPrompt: "The Hamsa (swan/soul) in the heart chakra surrounded by the unstruck Anahata sound.",
        wordMeanings: [
            { sanskrit: "anāhata", devanagari: "अनाहत", hindi: "बिना आघात की ध्वनि", english: "unstruck sound" },
            { sanskrit: "dhvani", devanagari: "ध्वनि", hindi: "ध्वनि", english: "sound" }
        ]
    },
    {
        id: 9,
        verse: 9,
        theme: "The Eight Petals and Emotions",
        sanskrit: "अथ हंसः ... अष्टदलपद्मं भवति । पूर्वे दले पुण्‍यमतिः । आग्नेये निद्रालस्यम् । दक्षिणे क्रूरमतिः । नैऋत्ये पापमनीषा । पश्चिमे क्रीडा । वायव्ये गमनाद्यर्थम् । उत्तरे रतिप्रीतिः । ईशान्ये द्रव्यादानम् ।",
        hindi: "हंस हृदय के अष्टदल कमल में निवास करता है। पूर्व दल में पुण्य बुद्धि, आग्नेय में निद्रा-आलस्य, दक्षिण में क्रूर बुद्धि, नैऋत्य में पाप इच्छा, पश्चिम में क्रीड़ा, वायव्य में गमन इच्छा, उत्तर में रति-प्रीति, ईशान में धन संचय इच्छा होती है।",
        english: "The Hamsa resides in the eight-petaled lotus. East: Virtue. South-East: Sleep/Laziness. South: Cruelty. South-West: Sin. West: Play. North-West: Movement. North: Lust. North-East: Wealth.",
        simpleExplanation: "8 PETALS = 8 TENDENCIES: Each petal of the heart lotus governs a different mental tendency!",
        simpleExplanationHindi: "8 पंखुड़ियां = 8 प्रवृत्तियां: हृदय कमल की हर पंखुड़ी एक अलग मानसिक प्रवृत्ति को नियंत्रित करती है!",
        nanoBananaPrompt: "An eight-petaled heart lotus with each petal representing different emotions and tendencies.",
        wordMeanings: [
            { sanskrit: "aṣṭadala", devanagari: "अष्टदल", hindi: "आठ पंखुड़ियों वाला", english: "eight-petaled" },
            { sanskrit: "padma", devanagari: "पद्म", hindi: "कमल", english: "lotus" }
        ]
    },
    {
        id: 10,
        verse: 10,
        theme: "States of Consciousness in the Lotus",
        sanskrit: "मध्ये वैराग्यम् । केसरे जाग्रदवस्था । कर्णिकायां स्वप्नम् । लिङ्गे सुषुप्तिः । पद्मत्यागे तुरीयम् । तुरीयातीतं यदा हंसः परमहंसो विलीनो भवति ।",
        hindi: "कमल के मध्य में वैराग्य, केसर में जाग्रत अवस्था, कर्णिका में स्वप्न, लिंग में सुषुप्ति, पद्म-त्याग पर तुरीय। जब हंस परमहंस में विलीन होता है, तब तुरीयातीत होता है।",
        english: "In the Center: Detachment. Filaments: Waking. Pericarp: Dreaming. Stalk: Deep Sleep. Leaving Lotus: Turiya. When Hamsa merges into Paramahamsa: Turiyatita (Beyond the Fourth).",
        simpleExplanation: "5 STATES IN THE LOTUS: Center=Detachment, Filaments=Waking, Pericarp=Dream, Stalk=Sleep, Beyond=Turiya/Turiyatita!",
        simpleExplanationHindi: "कमल में 5 अवस्थाएं: केंद्र=वैराग्य, केसर=जाग्रत, कर्णिका=स्वप्न, डंठल=सुषुप्ति, परे=तुरीय/तुरीयातीत!",
        nanoBananaPrompt: "A lotus showing different states of consciousness: waking, dreaming, sleeping, turiya, and beyond.",
        wordMeanings: [
            { sanskrit: "turīya", devanagari: "तुरीय", hindi: "चौथी अवस्था", english: "the fourth state" },
            { sanskrit: "turīyātīta", devanagari: "तुरीयातीत", hindi: "तुरीय से परे", english: "beyond the fourth" }
        ]
    },
    {
        id: 11,
        verse: 11,
        theme: "The Ajapa Gayatri",
        sanskrit: "स एषोऽजपा गायत्री नाम । अहोरात्रं षट्सहस्राधिकेकविंशतिसहस्राणि हंस इत्यजपा गायत्री जीवो जपति ।",
        hindi: "वह यह 'अजपा गायत्री' नाम वाली विद्या है। दिन और रात में, जीव 21,600 बार 'हंस' इस अजपा गायत्री का जाप करता है।",
        english: "This is called the Ajapa Gayatri. Day and night, the Jiva chants this Ajapa Gayatri 'Hamsa' 21,600 times.",
        simpleExplanation: "AUTOMATIC MANTRA: Your breath naturally chants 'Hamsa' 21,600 times daily—the Ajapa (unchanted) Gayatri!",
        simpleExplanationHindi: "स्वचालित मंत्र: तुम्हारी सांस स्वाभाविक रूप से दैनिक 21,600 बार 'हंस' का जाप करती है—अजपा गायत्री!",
        nanoBananaPrompt: "A person breathing naturally, with each breath automatically chanting Hamsa 21,600 times daily.",
        wordMeanings: [
            { sanskrit: "ajapā", devanagari: "अजपा", hindi: "बिना जपे", english: "unchanted/automatic" },
            { sanskrit: "gāyatrī", devanagari: "गायत्री", hindi: "गायत्री मंत्र", english: "Gayatri mantra" }
        ]
    },
    {
        id: 12,
        verse: 12,
        theme: "Union of Sun and Moon",
        sanskrit: "सूर्यसोमयोरैक्यं भवति । तत् ज्ञात्वा न लिप्यते कर्मणा पापपुण्येन ।",
        hindi: "इस जाप द्वारा सूर्य (पिंगला) और सोम (इड़ा) नाड़ियों का ऐक्य हो जाता है। यह जानकर मनुष्य पाप और पुण्य रूपी कर्मों से लिप्त नहीं होता।",
        english: "There occurs the union of the Sun and Moon (breath channels). Knowing this, one is not tainted by actions, neither sins nor merits.",
        simpleExplanation: "BEYOND KARMA: When Ida (moon) and Pingala (sun) unite, you transcend both sin AND merit!",
        simpleExplanationHindi: "कर्म से परे: जब इड़ा (चंद्र) और पिंगला (सूर्य) मिलते हैं, तुम पाप और पुण्य दोनों पार करते हो!",
        nanoBananaPrompt: "The Ida (moon) and Pingala (sun) nadis merging in the Sushumna, transcending karma.",
        wordMeanings: [
            { sanskrit: "sūrya", devanagari: "सूर्य", hindi: "सूर्य/पिंगला", english: "sun/pingala" },
            { sanskrit: "soma", devanagari: "सोम", hindi: "चंद्र/इड़ा", english: "moon/ida" }
        ]
    },
    {
        id: 13,
        verse: 13,
        theme: "The Ten Sounds",
        sanskrit: "अष्टधा कल्पिते चक्रे नादं कुर्यात् । दशविधो जायते नादः ।",
        hindi: "उस अष्ट-दल वाले चक्र में नाद का संधान करे। वहाँ दस प्रकार के नाद उत्पन्न होते हैं।",
        english: "In that eight-petaled Chakra, one should investigate the Sound. Ten types of Sound manifest there.",
        simpleExplanation: "NADA YOGA: In the heart chakra, 10 types of inner sounds can be heard through meditation!",
        simpleExplanationHindi: "नाद योग: हृदय चक्र में, ध्यान द्वारा 10 प्रकार की आंतरिक ध्वनियां सुनी जा सकती हैं!",
        nanoBananaPrompt: "A meditator in the heart chakra hearing ten different types of inner sounds.",
        wordMeanings: [
            { sanskrit: "nāda", devanagari: "नाद", hindi: "ध्वनि", english: "sound" },
            { sanskrit: "daśavidha", devanagari: "दशविध", hindi: "दस प्रकार का", english: "ten types" }
        ]
    },
    {
        id: 14,
        verse: 14,
        theme: "The List of Ten Sounds",
        sanskrit: "चिणीति प्रथमः । चिणिचिणीति द्वितीयः । घण्टानादस्तृतीयः । शङ्खनादश्चतुर्थः । पञ्चमस्तन्त्रीनादः । षष्ठस्तालनादः । सप्तमो वेणुनादः । अष्टमो भेरीनादः । नवमो मृदङ्गानादः । दशमो मेघनादः ।",
        hindi: "1. चिणी 2. चिणि-चिणी 3. घंटा-नाद 4. शंख-नाद 5. तंत्री-नाद (वीणा) 6. ताल-नाद (झांझ) 7. वेणु-नाद (बांसुरी) 8. भेरी-नाद (नगाड़ा) 9. मृदंग-नाद 10. मेघ-नाद (बादल)",
        english: "1. Chini 2. Chini-chini 3. Bell 4. Conch 5. Lute/String 6. Cymbals 7. Flute 8. Drum 9. Mridanga 10. Thunder/Clouds.",
        simpleExplanation: "10 INNER SOUNDS: Cricket → Bell → Conch → Veena → Cymbals → Flute → Drum → Mridanga → THUNDER!",
        simpleExplanationHindi: "10 आंतरिक ध्वनियां: झींगुर → घंटी → शंख → वीणा → झांझ → बांसुरी → ढोल → मृदंग → बादल गर्जना!",
        nanoBananaPrompt: "A progression of ten sounds from cricket chirping to thunder, each representing deeper meditation states.",
        wordMeanings: [
            { sanskrit: "meghanāda", devanagari: "मेघनाद", hindi: "बादल की गर्जना", english: "thunder/cloud sound" },
            { sanskrit: "veṇu", devanagari: "वेणु", hindi: "बांसुरी", english: "flute" }
        ]
    },
    {
        id: 15,
        verse: 15,
        theme: "Practice the Tenth",
        sanskrit: "नवमं परित्यज्य दशममेवाभ्यसेत् ।",
        hindi: "साधक को पहले नौ शब्दों का त्याग करके (उन्हें पार करके), केवल दसवें (मेघनाद) का ही अभ्यास करना चाहिए।",
        english: "Giving up (passing) the first nine, one should practice the Tenth alone.",
        simpleExplanation: "THE GOAL: Pass through all 9 sounds, then REST in the 10th—the cosmic thunder!",
        simpleExplanationHindi: "लक्ष्य: सभी 9 ध्वनियों को पार करो, फिर 10वें में विश्राम करो—ब्रह्मांडीय गर्जना!",
        nanoBananaPrompt: "A meditator passing through nine sounds, finally resting in the tenth cosmic thunder sound.",
        wordMeanings: [
            { sanskrit: "daśamam", devanagari: "दशमम्", hindi: "दसवां", english: "the tenth" },
            { sanskrit: "abhyaset", devanagari: "अभ्यसेत्", hindi: "अभ्यास करे", english: "should practice" }
        ]
    },
    {
        id: 16,
        verse: 16,
        theme: "Mind Dissolves in Chidakasha",
        sanskrit: "दशमे तु समुत्पन्ने चिदाकाशे मनो लयेत् । मनस्तत्र लयं याति तदा संजाते मनोन्मनीभावो भवति ।",
        hindi: "जब दसवां शब्द प्रकट होता है, तब चिदाकाश में मन को विलीन कर दे। जब मन उसमें लय हो जाता है, तब मनोन्मनी (Mind beyond Mind) अवस्था उत्पन्न होती है।",
        english: "When the Tenth Sound manifests, one should dissolve the mind in the Chidakasha (Sky of Consciousness). When the mind dissolves there, the state of Manonmani arises.",
        simpleExplanation: "MANONMANI: When mind dissolves in the sky of consciousness, you enter the state BEYOND mind!",
        simpleExplanationHindi: "मनोन्मनी: जब मन चेतना के आकाश में विलीन होता है, तुम मन से परे अवस्था में प्रवेश करते हो!",
        nanoBananaPrompt: "Mind dissolving into the infinite sky of consciousness, entering the Manonmani state beyond mind.",
        wordMeanings: [
            { sanskrit: "cidākāśa", devanagari: "चिदाकाश", hindi: "चेतना का आकाश", english: "sky of consciousness" },
            { sanskrit: "manonmanī", devanagari: "मनोन्मनी", hindi: "मन से परे की अवस्था", english: "state beyond mind" }
        ]
    },
    {
        id: 17,
        verse: 17,
        theme: "End of Duality",
        sanskrit: "तस्मिल्लिने मनसि द्वैतापत्तिर्न संशयः । कामक्रोधादिपापानां विनाशो भवति ।",
        hindi: "उस अवस्था में मन के लीन होने पर द्वैत-भाव नहीं रहता, इसमें कोई संशय नहीं है। काम, क्रोध आदि पापों का विनाश हो जाता है।",
        english: "When the mind is dissolved in That, duality ceases without doubt. Sins like lust and anger are destroyed.",
        simpleExplanation: "DUALITY ENDS: When mind dissolves, ALL duality vanishes! Lust, anger, etc. are DESTROYED!",
        simpleExplanationHindi: "द्वैत का अंत: जब मन विलीन होता है, सारा द्वैत मिट जाता है! काम, क्रोध आदि नष्ट हो जाते हैं!",
        nanoBananaPrompt: "Duality dissolving as the mind merges, lust and anger being destroyed in the process.",
        wordMeanings: [
            { sanskrit: "dvaita", devanagari: "द्वैत", hindi: "द्वैत/दोहरापन", english: "duality" },
            { sanskrit: "kāmakrodha", devanagari: "कामक्रोध", hindi: "काम और क्रोध", english: "lust and anger" }
        ]
    },
    {
        id: 18,
        verse: 18,
        theme: "Hamsa is Paramahamsa",
        sanskrit: "स एव हंसः स एव परमहंसः । यत्र न भास्करो भाति न चन्द्रस्तारकं न च । स नित्यशुद्धबुद्धमुक्तस्वभावो भवति ।",
        hindi: "वही हंस है, वही परमहंस है। जहाँ न सूर्य चमकता है, न चन्द्रमा और न तारे। वह नित्य, शुद्ध, बुद्ध और मुक्त स्वभाव वाला हो जाता है।",
        english: "He alone is the Hamsa; He alone is the Paramahamsa. Where neither the sun shines, nor the moon, nor the stars. He becomes of the nature of Eternal, Pure, Awakened, and Free.",
        simpleExplanation: "BEYOND ALL LIGHT: Where sun, moon, stars don't shine—THAT is where you become Eternal, Pure, Free!",
        simpleExplanationHindi: "सारे प्रकाश से परे: जहाँ सूर्य, चंद्र, तारे नहीं चमकते—वहीं तुम नित्य, शुद्ध, मुक्त बनते हो!",
        nanoBananaPrompt: "A realm beyond sun, moon, and stars where the soul realizes its eternal, pure, free nature.",
        wordMeanings: [
            { sanskrit: "nityaśuddhabuddhamukta", devanagari: "नित्यशुद्धबुद्धमुक्त", hindi: "नित्य, शुद्ध, ज्ञानी, मुक्त", english: "eternal, pure, awakened, free" }
        ]
    },
    {
        id: 19,
        verse: 19,
        theme: "Truth, Knowledge, Infinite",
        sanskrit: "सत्यं ज्ञानमनन्तं ब्रह्म । विज्ञानविघ्नघ्नं नित्यं शुद्धं शान्तं निराभासं निरञ्जनम् ।",
        hindi: "वह सत्य, ज्ञान और अनंत ब्रह्म है। वह विज्ञान स्वरूप, विघ्नों का नाशक, नित्य, शुद्ध, शांत, आभास-रहित और निरंजन है।",
        english: "He is Truth, Knowledge, and Infinite Brahman. He is Consciousness, the destroyer of obstacles, Eternal, Pure, Peaceful, without illusion, and stainless.",
        simpleExplanation: "BRAHMAN'S NATURE: Truth-Knowledge-Infinite, destroyer of obstacles, eternal, pure, peaceful, stainless!",
        simpleExplanationHindi: "ब्रह्म का स्वभाव: सत्य-ज्ञान-अनंत, विघ्न नाशक, नित्य, शुद्ध, शांत, निर्मल!",
        nanoBananaPrompt: "Brahman as Truth-Knowledge-Infinite, radiating purity, peace, and stainlessness.",
        wordMeanings: [
            { sanskrit: "satyam jñānam anantam", devanagari: "सत्यं ज्ञानमनन्तम्", hindi: "सत्य, ज्ञान, अनंत", english: "truth, knowledge, infinite" },
            { sanskrit: "nirañjanam", devanagari: "निरञ्जनम्", hindi: "निर्मल", english: "stainless" }
        ]
    },
    {
        id: 20,
        verse: 20,
        theme: "Knowing Hamsa = Immortality",
        sanskrit: "नित्यानन्दं निराकारं गम्भीरं गगनं तथा । हंसहंसेति यो वेद सोऽमृतत्वं च गच्छति ॥",
        hindi: "वह नित्यानंद, निराकार, गंभीर और आकाश के समान है। जो उसे 'हंस-हंस' के रूप में जानता है, वह अमरता को प्राप्त करता है।",
        english: "He is Eternal Bliss, Formless, Deep, and like the Sky. He who knows Him as 'Hamsa-Hamsa' attains Immortality.",
        simpleExplanation: "THE KEY: Know 'Hamsa-Hamsa' (I am That, I am That) = IMMORTALITY!",
        simpleExplanationHindi: "कुंजी: 'हंस-हंस' (मैं वह हूँ, मैं वह हूँ) जानो = अमरता!",
        nanoBananaPrompt: "A seeker realizing Hamsa-Hamsa (I am That), attaining immortality like the infinite sky.",
        wordMeanings: [
            { sanskrit: "nityānanda", devanagari: "नित्यानन्द", hindi: "शाश्वत आनंद", english: "eternal bliss" },
            { sanskrit: "amṛtatvam", devanagari: "अमृतत्वम्", hindi: "अमरता", english: "immortality" }
        ]
    },
    {
        id: 21,
        verse: 21,
        theme: "Phala Shruti - The Guru is God",
        sanskrit: "हंसविद्यामृते लोके नास्ति नित्यात्वसाधनम् । यो ददाति महाविद्यां स ईश्वरो न संशयः । इत्युपनिषत् ॥",
        hindi: "इस लोक में 'हंस-विद्या' के बिना अमरता का कोई साधन नहीं है। जो गुरु इस महाविद्या को देता है, वह साक्षात ईश्वर है, इसमें कोई संशय नहीं है। यही उपनिषद है।",
        english: "In this world, there is no means to Immortality other than Hamsa-Vidya. He who imparts this Great Knowledge is Ishvara Himself; there is no doubt. Thus ends the Upanishad.",
        simpleExplanation: "FINAL TRUTH: NO path to immortality except Hamsa Vidya! The Guru who teaches this IS GOD!",
        simpleExplanationHindi: "अंतिम सत्य: हंस विद्या के अलावा अमरता का कोई मार्ग नहीं! जो गुरु यह सिखाता है वह ईश्वर है!",
        nanoBananaPrompt: "A Guru teaching Hamsa Vidya, recognized as Ishvara Himself, the only path to immortality.",
        wordMeanings: [
            { sanskrit: "haṃsavidyā", devanagari: "हंसविद्या", hindi: "हंस का ज्ञान", english: "knowledge of Hamsa" },
            { sanskrit: "īśvara", devanagari: "ईश्वर", hindi: "ईश्वर/भगवान", english: "God/Lord" }
        ]
    }
];

export const HAMSA_METADATA = {
    id: "hamsa",
    name: "Hamsa",
    nameSanskrit: "हंसोपनिषद्",
    veda: "Shukla Yajur Veda",
    category: "Yoga",
    shlokaCount: 21,
    sequenceNumber: 15,
    meaning: "The Swan (Symbol of the Soul)",
    keyTeachings: [
        "Hamsa = So'ham (I am That) - The Soul's Identity",
        "Ajapa Gayatri: 21,600 automatic breath mantras daily",
        "8-Petaled Heart Lotus and Emotional Mapping",
        "5 States of Consciousness in the Lotus",
        "Nada Anusandhana: 10 Inner Sounds",
        "Reach the 10th Sound (Thunder) for Liberation",
        "Union of Ida (Moon) and Pingala (Sun)",
        "The Guru who teaches this is Ishvara Himself"
    ],
    famousVerses: {
        ajapa: { id: 11, verse: 11 },
        tenSounds: { id: 14, verse: 14 },
        manonmani: { id: 16, verse: 16 },
        hamsamsa: { id: 20, verse: 20 },
        guruIsGod: { id: 21, verse: 21 }
    }
};
