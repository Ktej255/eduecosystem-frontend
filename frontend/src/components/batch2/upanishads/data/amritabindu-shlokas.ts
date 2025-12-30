// Amritabindu Upanishad Data (#20 in Muktika Canon)
// Also known as Brahmabindu Upanishad
// Source: Krishna Yajur Veda | Category: Yoga/Vedanta
// Theme: Mind as cause of bondage/liberation, OM meditation, Ajatavada
// Total: 22 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface AmritabinduDataEntry {
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
export const AMRITABINDU_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह हम दोनों की रक्षा करे। हम दोनों का पालन करे। हम साथ मिलकर शक्ति प्राप्त करें। हमारा अध्ययन तेजस्वी हो। हम द्वेष न करें।",
    english: "OM! May He protect us both. May He nourish us. May we generate energy together. May our study be brilliant. May we not hate each other. OM Peace."
};

export const AMRITABINDU_SHLOKAS: AmritabinduDataEntry[] = [
    // PART 1: THE TWO STATES OF MIND
    {
        id: 1, verse: 1,
        theme: "Two Types of Mind",
        sanskrit: "मनो हि द्विविधं प्रोक्तं शुद्धं चाशुद्धमेव च । अशुद्धं कामसंकल्पं शुद्धं कामविवर्जितम् ॥",
        hindi: "मन दो प्रकार का कहा गया है: शुद्ध और अशुद्ध। जो कामनाओं और संकल्पों से भरा है, वह अशुद्ध है। जो कामनाओं से रहित है, वह शुद्ध है।",
        english: "The Mind is said to be of two kinds: Pure and Impure. That which is associated with desires is Impure. That which is free from desires is Pure.",
        simpleExplanation: "TWO MINDS: Impure mind = full of desires. Pure mind = desire-free. Which one is yours?",
        simpleExplanationHindi: "दो मन: अशुद्ध मन = इच्छाओं से भरा। शुद्ध मन = इच्छा-मुक्त। तुम्हारा कौन सा है?",
        nanoBananaPrompt: "Two minds visualized—one clouded with desires, one crystal clear and peaceful.",
        wordMeanings: [
            { sanskrit: "śuddha", devanagari: "शुद्ध", hindi: "शुद्ध/पवित्र", english: "pure" },
            { sanskrit: "aśuddha", devanagari: "अशुद्ध", hindi: "अशुद्ध/अपवित्र", english: "impure" },
            { sanskrit: "kāmasaṅkalpa", devanagari: "कामसंकल्प", hindi: "इच्छा और संकल्प", english: "desires and intentions" }
        ]
    },
    {
        id: 2, verse: 2,
        theme: "The Great Psychological Law",
        sanskrit: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः । बन्धाय विषयासक्तं मुक्त्यै निर्विषयं स्मृतम् ॥",
        hindi: "मन ही मनुष्यों के बंधन और मोक्ष का कारण है। जो मन विषयों में आसक्त है, वह बंधन का कारण। जो मन विषयों से रहित है, वह मुक्ति का कारण।",
        english: "The Mind alone is the cause of bondage and liberation. Mind attached to sense objects leads to bondage. Mind detached from objects leads to liberation.",
        simpleExplanation: "THE MASTER KEY: Mind attached to things = SLAVERY. Mind detached = FREEDOM. Same mind, different direction!",
        simpleExplanationHindi: "मास्टर कुंजी: मन चीजों में लगा = गुलामी। मन विरक्त = आज़ादी। वही मन, अलग दिशा!",
        nanoBananaPrompt: "One mind chained to objects showing bondage, same mind free showing liberation.",
        wordMeanings: [
            { sanskrit: "mana eva", devanagari: "मन एव", hindi: "मन ही", english: "mind alone" },
            { sanskrit: "bandha-mokṣa", devanagari: "बन्धमोक्ष", hindi: "बंधन और मोक्ष", english: "bondage and liberation" },
            { sanskrit: "viṣayāsakta", devanagari: "विषयासक्त", hindi: "विषयों में आसक्त", english: "attached to objects" },
            { sanskrit: "nirviṣaya", devanagari: "निर्विषय", hindi: "विषय-रहित", english: "free from objects" }
        ]
    },
    {
        id: 3, verse: 3,
        theme: "The Seeker's Task",
        sanskrit: "यतो निर्विषयस्यास्य मनसो मुक्तिरिष्यते । तस्मान्निर्विषयं नित्यं मनः कार्यं मुमुक्षुणा ॥",
        hindi: "चूंकि निर्विषय मन से ही मुक्ति संभव है, इसलिए मुमुक्षु को चाहिए कि वह अपने मन को नित्य निर्विषय बनाए रखे।",
        english: "Since liberation is for the mind free from objects, the seeker of liberation should constantly keep his mind free from sense objects.",
        simpleExplanation: "DAILY PRACTICE: Keep emptying your mind of objects constantly. That's the WHOLE path!",
        simpleExplanationHindi: "दैनिक अभ्यास: मन को विषयों से खाली करते रहो। बस यही पूरा रास्ता है!",
        nanoBananaPrompt: "A seeker practicing continuous mental emptiness, objects dissolving from mind.",
        wordMeanings: [
            { sanskrit: "mumukṣu", devanagari: "मुमुक्षु", hindi: "मोक्ष चाहने वाला", english: "seeker of liberation" },
            { sanskrit: "nityam", devanagari: "नित्यम्", hindi: "हमेशा", english: "constantly" }
        ]
    },
    {
        id: 4, verse: 4,
        theme: "The Unmani State",
        sanskrit: "निरस्तविषयासङ्गं संनिरुद्धं मनो हृदि । यदा यात्युन्मनीभावं तदा तत्परमं पदम् ॥",
        hindi: "जब मन विषयों की आसक्ति को त्यागकर हृदय में निरुद्ध हो जाता है, और 'उन्मनी' भाव को प्राप्त होता है—तब वही परम पद है।",
        english: "When the mind, severed from attachment to objects, is restrained within the Heart and attains the state of Unmani (supra-mental)—that is the Supreme Abode.",
        simpleExplanation: "UNMANI = Beyond Mind! When mind dissolves in the Heart, you reach the SUPREME STATE!",
        simpleExplanationHindi: "उन्मनी = मन से परे! जब मन हृदय में विलीन हो, परम स्थिति मिलती है!",
        nanoBananaPrompt: "Mind dissolving into the heart, reaching the transcendent Unmani state.",
        wordMeanings: [
            { sanskrit: "unmanībhāva", devanagari: "उन्मनीभाव", hindi: "मन से परे की स्थिति", english: "supra-mental state" },
            { sanskrit: "paramaṃ padam", devanagari: "परमं पदम्", hindi: "सर्वोच्च स्थान", english: "supreme abode" }
        ]
    },
    {
        id: 5, verse: 5,
        theme: "How Long to Meditate?",
        sanskrit: "तावदेव निरोद्धव्यं यावद्धृदि गतं क्षयम् । एतज्ज्ञानं च ध्यानं च शेषो न्यायश्च विस्तरः ॥",
        hindi: "मन को तब तक ही रोकना चाहिए, जब तक कि वह हृदय में क्षय न हो जाए। बस, यही ज्ञान है और यही ध्यान है। बाकी सब व्यर्थ तर्क है।",
        english: "The mind should be restrained until it dissolves in the Heart. This is Knowledge and this is Meditation. Everything else is mere argumentation.",
        simpleExplanation: "THE WHOLE TEACHING: Dissolve mind in Heart. THAT'S IT! All philosophy = just talk after this!",
        simpleExplanationHindi: "पूरी शिक्षा: मन को हृदय में घोलो। बस! इसके बाद सब दर्शन = सिर्फ बातें!",
        nanoBananaPrompt: "Mind dissolving into heart—the complete teaching, all books discarded.",
        wordMeanings: [
            { sanskrit: "niroddhavya", devanagari: "निरोद्धव्य", hindi: "रोकना चाहिए", english: "should be restrained" },
            { sanskrit: "kṣaya", devanagari: "क्षय", hindi: "विलय/नाश", english: "dissolution" },
            { sanskrit: "nyāya vistāra", devanagari: "न्याय विस्तर", hindi: "तर्क का विस्तार", english: "mere argumentation" }
        ]
    },

    // PART 2: THE NATURE OF BRAHMAN
    {
        id: 6, verse: 6,
        theme: "Beyond Thinking",
        sanskrit: "नैव चिन्त्यं न चाचिन्त्यं न चिन्त्यं चिन्त्यमेव तत् । पक्षपातविनिर्मुक्तं ब्रह्म सम्पद्यते तदा ॥",
        hindi: "वह न चिंतन योग्य है और न अचिंतनीय। वह चिंतन का विषय न होते हुए भी ध्यान योग्य है। जब साधक पक्षपात से मुक्त हो जाता है, तब वह ब्रह्म को प्राप्त करता है।",
        english: "It is neither to be thought of nor to be unthought of. It is unthinkable, yet it is the object of meditation. When free from partiality, one attains Brahman.",
        simpleExplanation: "PARADOX: Can't think it, can't ignore it. Drop ALL bias—THEN you get Brahman!",
        simpleExplanationHindi: "विरोधाभास: सोच नहीं सकते, छोड़ नहीं सकते। सब पक्षपात छोड़ो—तब ब्रह्म मिलता है!",
        nanoBananaPrompt: "The mind dropping all biases, Brahman revealing itself beyond thought.",
        wordMeanings: [
            { sanskrit: "pakṣapāta", devanagari: "पक्षपात", hindi: "पक्षपात/झुकाव", english: "partiality/bias" },
            { sanskrit: "cintya", devanagari: "चिन्त्य", hindi: "सोचने योग्य", english: "thinkable" }
        ]
    },
    {
        id: 7, verse: 7,
        theme: "Sound and Silence",
        sanskrit: "स्वरेण संधयेद्योगमस्वरं भावयेत्परम् । अस्वरेण हि भावेन भावो नाभावमिष्यते ॥",
        hindi: "पहले स्वर (ओंकार) के साथ योग का संधान करे। फिर अस्वर (शब्दहीन) परम का भाव करे। उस अस्वर भाव के द्वारा, असली सत्ता मिलती है।",
        english: "One should unite with Yoga through Sound (OM). Then contemplate the Supreme beyond Sound. Through realization of the Soundless, true Existence is attained.",
        simpleExplanation: "PATH: Start with OM sound → Go BEYOND sound to Silence → THAT's where Reality is!",
        simpleExplanationHindi: "रास्ता: ॐ ध्वनि से शुरू → ध्वनि से परे मौन में जाओ → वहीं सत्य है!",
        nanoBananaPrompt: "Meditation journey from OM sound into deep silence, finding the Soundless.",
        wordMeanings: [
            { sanskrit: "svara", devanagari: "स्वर", hindi: "ध्वनि/ओंकार", english: "sound/OM" },
            { sanskrit: "asvara", devanagari: "अस्वर", hindi: "ध्वनि-रहित", english: "soundless/silence" }
        ]
    },
    {
        id: 8, verse: 8,
        theme: "Aham Brahmasmi",
        sanskrit: "तदेव निष्कलं ब्रह्म निर्विकल्पं निरञ्जनम् । तद्ब्रह्माहमिति ज्ञात्वा ब्रह्म सम्पद्यते ध्रुवम् ॥",
        hindi: "वही ब्रह्म कला-रहित, निर्विकल्प और निरंजन है। 'वह ब्रह्म मैं हूँ'—ऐसा जानकर वह निश्चित रूप से ब्रह्म को प्राप्त हो जाता है।",
        english: "That Brahman is partless, free from modification, and stainless. Knowing 'I am that Brahman,' one surely attains Brahman.",
        simpleExplanation: "THE MAHAVAKYA: 'I AM BRAHMAN' - Know this truth and you BECOME Brahman!",
        simpleExplanationHindi: "महावाक्य: 'अहं ब्रह्मास्मि' - इस सत्य को जानो और ब्रह्म बन जाओ!",
        nanoBananaPrompt: "The realization 'I am Brahman' dawning, soul merging with the infinite.",
        wordMeanings: [
            { sanskrit: "niṣkala", devanagari: "निष्कल", hindi: "कला-रहित", english: "partless" },
            { sanskrit: "nirvikalpa", devanagari: "निर्विकल्प", hindi: "संशय-रहित", english: "changeless" },
            { sanskrit: "nirañjana", devanagari: "निरञ्जन", hindi: "निर्मल", english: "stainless" }
        ]
    },
    {
        id: 9, verse: 9,
        theme: "Beyond Cause and Effect",
        sanskrit: "निर्विकल्पमनन्तं च हेतुदृष्टान्तवर्जितम् । अप्रमेयमनादिं च यज्ज्ञात्वा मुच्यते बुधः ॥",
        hindi: "जो निर्विकल्प है, अनंत है, हेतु और दृष्टान्त से रहित है; जो अप्रमेय और अनादि है—उसे जानकर बुद्धिमान मुक्त हो जाता है।",
        english: "That which is changeless, infinite, beyond cause and analogy, immeasurable and beginningless—knowing That, the wise one is liberated.",
        simpleExplanation: "BEYOND LOGIC: No cause, no example, no measurement, no beginning. KNOW THIS = FREE!",
        simpleExplanationHindi: "तर्क से परे: कोई कारण नहीं, उदाहरण नहीं, माप नहीं, शुरुआत नहीं। यह जानो = मुक्त!",
        nanoBananaPrompt: "The infinite, causeless Brahman beyond all measurement and beginning.",
        wordMeanings: [
            { sanskrit: "hetu-dṛṣṭānta-varjita", devanagari: "हेतुदृष्टान्तवर्जित", hindi: "कारण-उदाहरण रहित", english: "beyond cause and analogy" },
            { sanskrit: "aprameya", devanagari: "अप्रमेय", hindi: "अमाप्य", english: "immeasurable" }
        ]
    },
    {
        id: 10, verse: 10,
        theme: "Ajatavada - The Ultimate Truth",
        sanskrit: "न निरोधो न चोत्पत्तिर्न बद्धो न च साधकः । न मुमुक्षुर्न वै मुक्त इत्येषा परमार्थता ॥",
        hindi: "न कोई निरोध है, न उत्पत्ति। न कोई बद्ध है, न साधक। न कोई मुमुक्षु है और न कोई मुक्त। यही परमार्थ है।",
        english: "There is neither dissolution nor creation, none bound, none aspiring, none desiring liberation, and none liberated. This is the Absolute Truth.",
        simpleExplanation: "THE FINAL TRUTH: Nothing ever happened! No creation, no bondage, no seeker, no liberation. THIS IS IT!",
        simpleExplanationHindi: "अंतिम सत्य: कुछ हुआ ही नहीं! न सृष्टि, न बंधन, न साधक, न मोक्ष। यही सच है!",
        nanoBananaPrompt: "The absolute truth—no creation, no bondage, no liberation, pure existence.",
        wordMeanings: [
            { sanskrit: "nirodha", devanagari: "निरोध", hindi: "विनाश", english: "dissolution" },
            { sanskrit: "utpatti", devanagari: "उत्पत्ति", hindi: "उत्पत्ति", english: "creation" },
            { sanskrit: "paramārthatā", devanagari: "परमार्थता", hindi: "परम सत्य", english: "absolute truth" }
        ]
    },

    // PART 3: THE ONENESS OF ATMAN
    {
        id: 11, verse: 11,
        theme: "One Self in Three States",
        sanskrit: "एक एवात्मा मन्तव्यो जाग्रत्स्वप्नसुषुप्तिषु । स्थानत्रयव्यतीतस्य पुनर्जन्म न विद्यते ॥",
        hindi: "जाग्रत, स्वप्न और सुषुप्ति—इन तीनों में आत्मा को एक ही मानना चाहिए। जो इन तीनों से परे चला गया, उसका पुनर्जन्म नहीं होता।",
        english: "The Atman should be considered as One across Waking, Dreaming, and Deep Sleep. For him who transcends these three states, there is no rebirth.",
        simpleExplanation: "ONE WITNESS: Same YOU in waking, dream, deep sleep. Go BEYOND all three = NO MORE BIRTH!",
        simpleExplanationHindi: "एक साक्षी: जागृत, स्वप्न, सुषुप्ति में एक ही तुम। तीनों से परे = कोई पुनर्जन्म नहीं!",
        nanoBananaPrompt: "One Self witnessing waking, dreaming, deep sleep—transcending all three states.",
        wordMeanings: [
            { sanskrit: "jāgrat", devanagari: "जाग्रत्", hindi: "जागृत", english: "waking" },
            { sanskrit: "svapna", devanagari: "स्वप्न", hindi: "स्वप्न", english: "dream" },
            { sanskrit: "suṣupti", devanagari: "सुषुप्ति", hindi: "गहरी नींद", english: "deep sleep" }
        ]
    },
    {
        id: 12, verse: 12,
        theme: "Moon Reflection Analogy",
        sanskrit: "एक एव हि भूतात्मा भूते भूते व्यवस्थितः । एकधा बहुधा चैव दृश्यते जलचन्द्रवत् ॥",
        hindi: "वह एक ही भूतात्मा प्रत्येक प्राणी में स्थित है। वह एक होते हुए भी अनेक दिखाई देता है, जैसे जल में चन्द्रमा।",
        english: "Being the one Self of all beings, He dwells in every being. Though One, He is seen as many, like the Moon reflected in water.",
        simpleExplanation: "MOON IN WATER: One moon, many reflections in pots. One Self, many bodies. Reflections are not real!",
        simpleExplanationHindi: "पानी में चाँद: एक चाँद, कई बर्तनों में प्रतिबिंब। एक आत्मा, कई शरीर। प्रतिबिंब असली नहीं!",
        nanoBananaPrompt: "One moon reflected in many pots of water—one Self appearing as many beings.",
        wordMeanings: [
            { sanskrit: "bhūtātmā", devanagari: "भूतात्मा", hindi: "सबकी आत्मा", english: "Self of all beings" },
            { sanskrit: "jalacandravat", devanagari: "जलचन्द्रवत्", hindi: "पानी में चाँद की तरह", english: "like moon in water" }
        ]
    },
    {
        id: 13, verse: 13,
        theme: "Pot Space Analogy",
        sanskrit: "घटसंवृतमाकाशं नीयमाने घटे यथा । घटो नीयेत नाकाशं तथा जीवो नभोपमः ॥",
        hindi: "जैसे घड़े में बंद आकाश—जब घड़ा ले जाया जाता है, केवल घड़ा चलता है, आकाश नहीं। उसी प्रकार जीव आकाश के समान अचल है।",
        english: "Just as space enclosed in a pot—when pot is moved, pot moves but space does not. Thus the Jiva is like Space—unmoved.",
        simpleExplanation: "POT SPACE: Move the pot, space stays still. Move the body, SOUL stays still. You are the SPACE, not the pot!",
        simpleExplanationHindi: "घट आकाश: घड़ा हिलता है, आकाश स्थिर। शरीर हिलता है, आत्मा स्थिर। तुम आकाश हो, घड़ा नहीं!",
        nanoBananaPrompt: "Pot moving but the space inside remaining still—soul unmoved despite body movement.",
        wordMeanings: [
            { sanskrit: "ghaṭa", devanagari: "घट", hindi: "घड़ा", english: "pot" },
            { sanskrit: "ākāśa", devanagari: "आकाश", hindi: "आकाश/खाली जगह", english: "space" },
            { sanskrit: "nabhopama", devanagari: "नभोपम", hindi: "आकाश के समान", english: "like space" }
        ]
    },
    {
        id: 14, verse: 14,
        theme: "Body Breaks, Self Knows",
        sanskrit: "घटवद्विविधाकारं भिद्यमानं पुनः पुनः । तद्भग्नं न च जानाति स जानाति च नित्यशः ॥",
        hindi: "घड़े के समान विभिन्न आकार बार-बार टूटते हैं। शरीर अपने टूटने को नहीं जानता, किन्तु वह (आत्मा) उसे नित्य जानता है।",
        english: "Like the pot, various forms are broken again and again. The body does not know it is broken, but He (the Self) knows it eternally.",
        simpleExplanation: "ETERNAL WITNESS: Bodies break, they don't know. But YOU know every breaking. YOU are eternal!",
        simpleExplanationHindi: "शाश्वत साक्षी: शरीर टूटते हैं, उन्हें पता नहीं। पर तुम हर टूटना जानते हो। तुम शाश्वत हो!",
        nanoBananaPrompt: "Pots breaking repeatedly, the unchanging Self witnessing all changes.",
        wordMeanings: [
            { sanskrit: "bhidyamāna", devanagari: "भिद्यमान", hindi: "टूटते हुए", english: "being broken" },
            { sanskrit: "nityaśaḥ", devanagari: "नित्यशः", hindi: "सदा", english: "eternally" }
        ]
    },
    {
        id: 15, verse: 15,
        theme: "Word-Maya",
        sanskrit: "शब्दमायावृतो नैव तमसा याति पुष्करम् । भिन्ने तमसि चैकत्वमेकमेवानुपश्यति ॥",
        hindi: "शब्द-माया से ढका होने के कारण वह अज्ञानवश उस पुष्कर (आत्म पद) तक नहीं पहुँचता। अंधकार नष्ट होने पर वह एकत्व को ही देखता है।",
        english: "Covered by Word-Maya, he does not reach the Lotus (Self) due to darkness. When darkness is destroyed, he sees Unity alone.",
        simpleExplanation: "WORD-ILLUSION: Words cover Reality! Break the word-spell and see ONENESS!",
        simpleExplanationHindi: "शब्द-भ्रम: शब्द सत्य को ढकते हैं! शब्दों का जादू तोड़ो और एकता देखो!",
        nanoBananaPrompt: "Breaking through the veil of words to see the unity beyond.",
        wordMeanings: [
            { sanskrit: "śabdamāyā", devanagari: "शब्दमाया", hindi: "शब्दों का भ्रम", english: "word-illusion" },
            { sanskrit: "puṣkara", devanagari: "पुष्कर", hindi: "कमल/आत्मपद", english: "lotus/Self" }
        ]
    },
    {
        id: 16, verse: 16,
        theme: "Shabda Brahman vs Para Brahman",
        sanskrit: "शब्दाक्षरं परं ब्रह्म तस्मिन्क्षीणे यदक्षरम् । तद्विद्वानक्षरं ध्यायेद्यदीच्छेच्छान्तिमात्मनः ॥",
        hindi: "शब्द-ब्रह्म (ओम) भी परब्रह्म का प्रतीक है। जब वह शांत हो जाता है, जो शेष रहता है वह अक्षर है। विद्वान उस अक्षर का ध्यान करे।",
        english: "The Word-Brahman (OM) is the Supreme; when it fades, what remains is the Imperishable. The wise man should meditate on that Imperishable.",
        simpleExplanation: "OM → SILENCE: When OM fades, what remains is the REAL. Meditate on THAT silence!",
        simpleExplanationHindi: "ॐ → मौन: जब ॐ विलीन हो, जो रहता है वही असली। उस मौन पर ध्यान करो!",
        nanoBananaPrompt: "OM sound fading into silence, the Imperishable remaining.",
        wordMeanings: [
            { sanskrit: "śabdākṣara", devanagari: "शब्दाक्षर", hindi: "शब्द-ब्रह्म", english: "word-brahman" },
            { sanskrit: "kṣīṇa", devanagari: "क्षीण", hindi: "विलीन", english: "faded/dissolved" }
        ]
    },
    {
        id: 17, verse: 17,
        theme: "Two Knowledges",
        sanskrit: "द्वे विद्ये वेदितव्ये तु शब्दब्रह्म परं च यत् । शब्दब्रह्मणि निष्णातः परं ब्रह्माधिगच्छति ॥",
        hindi: "दो विद्याएं जानने योग्य हैं: शब्द-ब्रह्म (वेद) और परब्रह्म। जो शब्द-ब्रह्म में निष्णात है, वह परब्रह्म को प्राप्त करता है।",
        english: "Two knowledges are to be known: Word-Brahman and Supreme Brahman. He who masters Word-Brahman attains Supreme Brahman.",
        simpleExplanation: "TWO LEVELS: Learn scriptures (lower) → Transcend to the BEYOND (higher). Use words to go beyond words!",
        simpleExplanationHindi: "दो स्तर: शास्त्र सीखो (निम्न) → परे जाओ (उच्च)। शब्दों से शब्दों के पार जाओ!",
        nanoBananaPrompt: "Mastering scriptures as a bridge to transcendent knowledge beyond words.",
        wordMeanings: [
            { sanskrit: "niṣṇāta", devanagari: "निष्णात", hindi: "कुशल/प्रवीण", english: "well-versed" },
            { sanskrit: "adhigacchati", devanagari: "अधिगच्छति", hindi: "प्राप्त करता है", english: "attains" }
        ]
    },
    {
        id: 18, verse: 18,
        theme: "Discard the Books",
        sanskrit: "ग्रन्थमभ्यस्य मेधावी ज्ञानविज्ञानतत्परः । पलालमिव धान्यार्थी त्यजेद्ग्रन्थमशेषतः ॥",
        hindi: "मेधावी पुरुष ग्रंथों का अभ्यास करके ज्ञान में तत्पर हो जाए। फिर, जैसे अनाज चाहने वाला भूसे को छोड़ देता है, वैसे ग्रंथों को पूरी तरह त्याग दे।",
        english: "The wise man, having studied scriptures, should discard books entirely, just as one seeking grain discards the straw.",
        simpleExplanation: "DISCARD BOOKS: Study, extract wisdom, then THROW AWAY the books! Keep the grain, not the husk!",
        simpleExplanationHindi: "किताबें छोड़ो: पढ़ो, ज्ञान निकालो, फिर किताबें फेंको! अनाज रखो, भूसा नहीं!",
        nanoBananaPrompt: "Seeker extracting wisdom grain and discarding book-straw.",
        wordMeanings: [
            { sanskrit: "palāla", devanagari: "पलाल", hindi: "भूसा", english: "straw/chaff" },
            { sanskrit: "dhānyārthī", devanagari: "धान्यार्थी", hindi: "अनाज चाहने वाला", english: "grain-seeker" }
        ]
    },

    // PART 4: THE UNITY OF EXISTENCE
    {
        id: 19, verse: 19,
        theme: "Cows and Milk Analogy",
        sanskrit: "गवामनेकवर्णानां क्षीरस्याप्येकवर्णता । क्षीरवत्पश्यते ज्ञानं लिङ्गिनस्तु गवां यथा ॥",
        hindi: "गाएं अनेक रंगों की होती हैं, किन्तु उन सबका दूध एक ही रंग का होता है। ज्ञान को दूध की तरह एक देखो, और शरीरों को गायों की तरह अनेक।",
        english: "Cows are of many colors, but milk is of one color. See Knowledge as the milk (one), and embodied souls as the cows (many).",
        simpleExplanation: "COWS & MILK: Many colored cows → One white milk. Many bodies → ONE consciousness!",
        simpleExplanationHindi: "गाय और दूध: कई रंग की गायें → एक सफ़ेद दूध। कई शरीर → एक चेतना!",
        nanoBananaPrompt: "Cows of many colors producing same white milk—one consciousness in many bodies.",
        wordMeanings: [
            { sanskrit: "gava", devanagari: "गव", hindi: "गाय", english: "cow" },
            { sanskrit: "kṣīra", devanagari: "क्षीर", hindi: "दूध", english: "milk" },
            { sanskrit: "liṅgina", devanagari: "लिङ्गिन्", hindi: "शरीरधारी", english: "embodied beings" }
        ]
    },
    {
        id: 20, verse: 20,
        theme: "Churning the Mind",
        sanskrit: "घृतमिव पयसि निगूढं भूते भूते च वसति विज्ञानम् । सततं मन्थयितव्यं मनसा मन्थानभूतेन ॥",
        hindi: "जैसे दूध में घी छिपा रहता है, वैसे ही हर प्राणी में विज्ञान बसता है। मन रूपी मथानी से सतत मंथन करना चाहिए।",
        english: "Like butter hidden in milk, Pure Consciousness resides in every being. It should be constantly churned using the Mind as the churning rod.",
        simpleExplanation: "CHURN YOUR MIND: Butter is hidden in milk. Consciousness is hidden in you. CHURN with meditation!",
        simpleExplanationHindi: "मन का मंथन करो: दूध में मक्खन छिपा है। तुममें चेतना छिपी है। ध्यान से मथो!",
        nanoBananaPrompt: "Mind churning consciousness like butter from milk through meditation.",
        wordMeanings: [
            { sanskrit: "ghṛta", devanagari: "घृत", hindi: "घी", english: "butter/ghee" },
            { sanskrit: "manthāna", devanagari: "मन्थान", hindi: "मथानी", english: "churning rod" },
            { sanskrit: "vijñāna", devanagari: "विज्ञान", hindi: "चेतना", english: "pure consciousness" }
        ]
    },
    {
        id: 21, verse: 21,
        theme: "Fire from Knowledge",
        sanskrit: "ज्ञाननेत्रं समाधाय चोद्धरेद्वह्निवत्परम् । निष्कलं निश्चलं शान्तं तद्ब्रह्माहमिति स्मृतम् ॥",
        hindi: "ज्ञान रूपी रस्सी को पकड़कर, उस परम को अग्नि की तरह प्रकट करे। 'वह कला-रहित, अचल और शांत ब्रह्म मैं हूँ'—ऐसी स्मृति होनी चाहिए।",
        english: "Using the rope of Knowledge, bring out the Supreme like fire. 'That partless, motionless, peaceful Brahman I am'—thus it is realized.",
        simpleExplanation: "KINDLE THE FIRE: Use knowledge to spark the hidden fire. Realize: 'I AM that peaceful Brahman!'",
        simpleExplanationHindi: "अग्नि प्रज्वलित करो: ज्ञान से छिपी अग्नि जगाओ। जानो: 'मैं वह शांत ब्रह्म हूँ!'",
        nanoBananaPrompt: "Knowledge rope kindling divine fire, realizing 'I am Brahman.'",
        wordMeanings: [
            { sanskrit: "jñānanetra", devanagari: "ज्ञाननेत्र", hindi: "ज्ञान की रस्सी", english: "rope of knowledge" },
            { sanskrit: "vahni", devanagari: "वह्नि", hindi: "अग्नि", english: "fire" }
        ]
    },
    {
        id: 22, verse: 22,
        theme: "I Am Vasudeva",
        sanskrit: "सर्वभूताधिवासं यद्भूतेषु च व्यवस्थितम् । सर्वानुग्राहकत्वेन तदस्म्यहं वासुदेवः तदस्म्यहं वासुदेवः इति ॥",
        hindi: "जो सभी प्राणियों का निवास है, और जो सभी प्राणियों में स्थित है; जो सबको अनुग्रहित करता है—वह वासुदेव मैं हूँ। वह वासुदेव मैं हूँ।",
        english: "That which is the abode of all beings, which resides in all beings, which graces all—That Vasudeva I am. That Vasudeva I am.",
        simpleExplanation: "THE FINAL DECLARATION: I am Vasudeva! I dwell in all! All dwell in me! I AM EVERYTHING!",
        simpleExplanationHindi: "अंतिम घोषणा: मैं वासुदेव हूँ! मैं सबमें हूँ! सब मुझमें हैं! मैं सब कुछ हूँ!",
        nanoBananaPrompt: "The realization 'I am Vasudeva'—dwelling in all beings and all dwelling in me.",
        wordMeanings: [
            { sanskrit: "sarvabhūtādhivāsa", devanagari: "सर्वभूताधिवास", hindi: "सब प्राणियों का निवास", english: "abode of all beings" },
            { sanskrit: "sarvānugrāhakatva", devanagari: "सर्वानुग्राहकत्व", hindi: "सबको कृपा", english: "gracing all" },
            { sanskrit: "vāsudeva", devanagari: "वासुदेव", hindi: "वासुदेव/कृष्ण", english: "Vasudeva/Krishna" }
        ]
    }
];

// Metadata
export const AMRITABINDU_METADATA = {
    id: "amritabindu",
    name: "Amritabindu",
    nameSanskrit: "अमृतबिन्दूपनिषद्",
    alternateNames: ["Brahmabindu Upanishad"],
    veda: "Krishna Yajur Veda",
    category: "Yoga",
    shlokaCount: 22,
    sequenceNumber: 20,
    parts: {
        1: { name: "Two States of Mind", verses: "1-5", theme: "Mind = Cause of bondage/liberation" },
        2: { name: "Nature of Brahman", verses: "6-10", theme: "OM, Silence, Ajatavada" },
        3: { name: "Oneness of Atman", verses: "11-18", theme: "Moon, Pot-Space, Discard books" },
        4: { name: "Unity of Existence", verses: "19-22", theme: "Cows & Milk, Churning, I am Vasudeva" }
    },
    keyTeachings: [
        "Mind alone is cause of bondage and liberation",
        "Pure mind = desire-free; Impure mind = full of desires",
        "Unmani = Supra-mental state = Supreme Abode",
        "OM leads to Silence; Silence leads to Truth",
        "Ajatavada: Nothing ever happened (no creation, no bondage)",
        "One Self in waking, dreaming, deep sleep",
        "Moon in water: One appears as many",
        "Discard scriptures like straw after extracting grain",
        "I am Vasudeva, abode of all beings"
    ],
    famousVerses: {
        mindAsCause: { id: 2, verse: 2, theme: "The Great Psychological Law" },
        unmani: { id: 4, verse: 4, theme: "Supreme Abode" },
        ajatavada: { id: 10, verse: 10, theme: "The Absolute Truth" },
        moonInWater: { id: 12, verse: 12, theme: "One appears as many" },
        discardBooks: { id: 18, verse: 18, theme: "Grain and Straw" },
        churningMind: { id: 20, verse: 20, theme: "Butter from Milk" },
        iAmVasudeva: { id: 22, verse: 22, theme: "Final Declaration" }
    }
};

export const getAmritabinduVerse = (verse: number): AmritabinduDataEntry | undefined => {
    return AMRITABINDU_SHLOKAS.find(s => s.verse === verse);
};
