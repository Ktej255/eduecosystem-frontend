// Vajrasuchika Upanishad Data (#37 in Muktika Canon)
// Source: Sama Veda | Category: Samanya
// Theme: The Diamond Needle - Who is a Real Brahmin?
// Total: 9 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface VajrasuchikaDataEntry {
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
export const VAJRASUCHIKA_SHANTI_MANTRA = {
    sanskrit: "ॐ आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि । सर्वं ब्रह्मौपनिषदं माहं ब्रह्म निराकुर्यां मा मा ब्रह्म निराकरोत् । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरे अंग, वाणी, प्राण, आँख, कान, बल और सभी इन्द्रियां पुष्ट हों। मैं ब्रह्म का इनकार न करूँ; ब्रह्म मेरा इनकार न करे। ॐ शांति, शांति, शांति।",
    english: "OM! May my limbs, speech, prana, eyes, ears, strength, and all senses be fully developed. May I not deny Brahman; may Brahman not deny me. OM Peace, Peace, Peace."
};

export const VAJRASUCHIKA_SHLOKAS: VajrasuchikaDataEntry[] = [
    {
        id: 1,
        verse: 1,
        theme: "The Diamond Needle",
        sanskrit: "वज्रसूचीं प्रवक्ष्यामि शास्त्रमज्ञानभेदनम् । दूषणं ज्ञानहीनानां भूषणं ज्ञानचक्षुषाम् ॥",
        hindi: "मैं 'वज्रसूची' (हीरे की सुई) शास्त्र का वर्णन करूँगा, जो अज्ञान को भेदने वाला है। यह ज्ञान-हीनों के लिए निंदा और ज्ञानियों के लिए आभूषण है।",
        english: "I shall expound the VAJRASUCHI (Diamond Needle), the scripture which PIERCES ignorance. It rebukes the ignorant and adorns those with the Eye of Wisdom.",
        simpleExplanation: "THE WEAPON: A diamond needle that pierces through ignorance about who is truly great!",
        simpleExplanationHindi: "हथियार: एक हीरे की सुई जो अज्ञान को छेदती है—कौन सच में महान है!",
        nanoBananaPrompt: "A diamond needle piercing through layers of ignorance.",
        wordMeanings: [
            { sanskrit: "vajrasūcī", devanagari: "वज्रसूची", hindi: "हीरे की सुई", english: "diamond needle" },
            { sanskrit: "ajñānabhedana", devanagari: "अज्ञानभेदन", hindi: "अज्ञान को भेदने वाला", english: "piercing ignorance" }
        ]
    },
    {
        id: 2,
        verse: 2,
        theme: "The Question",
        sanskrit: "ब्राह्मणक्षत्रियवैश्यशूद्रा इति चत्वारो वर्णाः । तेषां वर्णानां ब्राह्मण एव प्रधान इति वेदवचनानुरूपं स्मृतिभिरप्युक्तम् । तत्र चोद्यमस्ति को वा ब्राह्मणो नाम । किं जीवः किं देहः किं जातिः किं ज्ञानं किं कर्म किं धार्मिक इति ॥",
        hindi: "चार वर्ण हैं: ब्राह्मण, क्षत्रिय, वैश्य, शूद्र। ब्राह्मण प्रधान है। प्रश्न: ब्राह्मण कौन है? क्या जीव? क्या देह? क्या जाति? क्या ज्ञान? क्या कर्म? क्या धार्मिक?",
        english: "There are four varnas. Brahmin is chief. The question: WHO IS A BRAHMIN? Is it the Soul? Body? Caste? Knowledge? Action? Doer of Dharma?",
        simpleExplanation: "THE BIG QUESTION: Who is a REAL Brahmin? Soul? Body? Birth? Knowledge? Deeds? Charity?",
        simpleExplanationHindi: "बड़ा प्रश्न: असली ब्राह्मण कौन? आत्मा? शरीर? जन्म? ज्ञान? कर्म? दान?",
        nanoBananaPrompt: "The central question: What truly makes someone a Brahmin?",
        wordMeanings: [
            { sanskrit: "brāhmaṇa", devanagari: "ब्राह्मण", hindi: "ब्राह्मण", english: "Brahmin" }
        ]
    },
    {
        id: 3,
        verse: 3,
        theme: "Not the Soul",
        sanskrit: "तत्र प्रथमो जीवो ब्राह्मण इति चेत् तन्न । अतीतानागतानेकडेहानां जीवस्यैकरूपत्वात् । एकस्यापि कर्मवशादनेकदेहसम्भवात् । सर्वशरीराणां जीवस्यैकरूपत्वाच्च । तस्मात् न जीवो ब्राह्मण इति ॥",
        hindi: "यदि कहें जीव ब्राह्मण है—नहीं! क्योंकि सभी शरीरों में जीव एक ही है। एक जीव कर्म से अनेक देह धारण करता है। इसलिए जीव ब्राह्मण नहीं।",
        english: "Is the SOUL the Brahmin? NO! The Soul is the same in all past and future bodies. One Soul assumes many bodies. Therefore, the SOUL IS NOT the Brahmin.",
        simpleExplanation: "NOT SOUL: Soul is same in everyone—Brahmin, animal, insect. Can't be that!",
        simpleExplanationHindi: "आत्मा नहीं: आत्मा सबमें एक—ब्राह्मण, पशु, कीट। यह नहीं हो सकता!",
        nanoBananaPrompt: "The soul being the same in all beings—not the criterion for Brahmin.",
        wordMeanings: [
            { sanskrit: "jīva", devanagari: "जीव", hindi: "जीवात्मा", english: "individual soul" }
        ]
    },
    {
        id: 4,
        verse: 4,
        theme: "Not the Body",
        sanskrit: "तर्हि देहो ब्राह्मण इति चेत् तन्न । आचाण्डालादिपर्यन्तानां मनुष्याणां पञ्चभौतिकत्वेन देहस्यैकरूपत्वात् । जरामरणधर्माधर्मादि साम्यदर्शनात् । ब्राह्मणः श्वेतवर्णः क्षत्रियो रक्तवर्णः वैश्यः पीतवर्णः शूद्रः कृष्णवर्णः इति नियमाभावात् । पित्रादिशरीरदहने पुत्रादीनां ब्रह्महत्यादिदोषसम्भवाच्च । तस्मात् न देहो ब्राह्मण इति ॥",
        hindi: "क्या देह ब्राह्मण है? नहीं! सभी शरीर पंचभूतों से बने हैं। बुढ़ापा-मृत्यु सबको है। ब्राह्मण=गोरा ऐसा नियम नहीं। और यदि शरीर ब्राह्मण होता, तो पिता का दाह करने पर ब्रह्महत्या लगती। इसलिए देह ब्राह्मण नहीं।",
        english: "Is the BODY the Brahmin? NO! All bodies are made of 5 elements. Old age, death affect all. No rule that Brahmin=white skin. If body were Brahmin, cremating father = Brahmin-murder! Therefore, BODY IS NOT the Brahmin.",
        simpleExplanation: "NOT BODY: All bodies same 5 elements. All get old, die. Color varies. Body can't be it!",
        simpleExplanationHindi: "शरीर नहीं: सभी शरीर एक जैसे 5 तत्व। सब बूढ़े होते, मरते। रंग अलग। शरीर नहीं हो सकता!",
        nanoBananaPrompt: "All bodies made of same elements—body cannot define Brahmin.",
        wordMeanings: [
            { sanskrit: "pañcabhautika", devanagari: "पञ्चभौतिक", hindi: "पांच तत्वों से बना", english: "made of five elements" }
        ]
    },
    {
        id: 5,
        verse: 5,
        theme: "Not Birth/Caste",
        sanskrit: "तर्हि जातिर्ब्राह्मण इति चेत् तन्न । तत्र जात्यन्तरजन्तुषु अनेकजातिसम्भवा महर्षयो बहवः सन्ति । ऋष्यशृङ्गो मृग्याः, कौशिकः कुशात्, जाम्बुको जम्बुकात्, वाल्मीकिो वल्मीकात्, व्यासः कैवर्तकन्यायाम्, गौतमः शशपृष्ठात्, वसिष्ठ उर्वश्याम्, अगस्त्यः कलशे जात इति श्रुतत्वात् । एतेषां जात्या विनापि अग्रे ज्ञानप्रतिपादिता ऋषयो बहवः सन्ति । तस्मात् न जातिर्ब्राह्मण इति ॥",
        hindi: "क्या जाति ब्राह्मण है? नहीं! महाऋषि विभिन्न जातियों से थे: ऋष्यशृंग हिरणी से, वाल्मीकि दीमक से, व्यास मछुआरिन से, अगस्त्य घड़े से। जाति के बिना भी ज्ञानी हुए। इसलिए जाति ब्राह्मण नहीं।",
        english: "Is CASTE/BIRTH the Brahmin? NO! Great sages came from various origins: Rishyashringa from deer, Valmiki from anthill, Vyasa from fisherwoman, Agastya from pitcher. They attained wisdom without Brahmin birth. Therefore, CASTE IS NOT the Brahmin.",
        simpleExplanation: "NOT BIRTH: Greatest sages—Valmiki, Vyasa, Agastya—born outside Brahmin families!",
        simpleExplanationHindi: "जन्म नहीं: महानतम ऋषि—वाल्मीकि, व्यास, अगस्त्य—ब्राह्मण परिवार में नहीं जन्मे!",
        nanoBananaPrompt: "Great sages born from various origins—birth cannot define Brahmin.",
        wordMeanings: [
            { sanskrit: "jāti", devanagari: "जाति", hindi: "जन्म/जाति", english: "caste/birth" }
        ]
    },
    {
        id: 6,
        verse: 6,
        theme: "Not Knowledge Alone",
        sanskrit: "तर्हि ज्ञानं ब्राह्मण इति चेत् तन्न । क्षत्रियादयोऽपि परमार्थदर्शिनोऽभिज्ञा बहवः सन्ति । तस्मात् न ज्ञानं ब्राह्मण इति ॥",
        hindi: "क्या ज्ञान ब्राह्मण है? नहीं! बहुत से क्षत्रिय आदि भी परम सत्य के ज्ञानी थे (जैसे जनक)। इसलिए ज्ञान (अकेला) ब्राह्मण नहीं।",
        english: "Is KNOWLEDGE the Brahmin? NO! Many Kshatriyas and others were Knowers of Supreme Truth. Therefore, KNOWLEDGE (alone) IS NOT the Brahmin.",
        simpleExplanation: "NOT KNOWLEDGE ONLY: King Janaka was a Kshatriya but supreme Knower!",
        simpleExplanationHindi: "केवल ज्ञान नहीं: राजा जनक क्षत्रिय थे पर परम ज्ञानी!",
        nanoBananaPrompt: "Kings and warriors also attained supreme knowledge—not exclusive to Brahmins.",
        wordMeanings: [
            { sanskrit: "jñāna", devanagari: "ज्ञान", hindi: "ज्ञान", english: "knowledge" }
        ]
    },
    {
        id: 7,
        verse: 7,
        theme: "Not Action",
        sanskrit: "तर्हि कर्म ब्राह्मण इति चेत् तन्न । सर्वेषां प्राणिनां प्रारब्धसञ्चितागामिकर्मसाधर्म्यदर्शनात् । कर्माभिप्रेरिताः सन्तो जनाः क्रियाः कुर्वन्तीति । तस्मात् न कर्म ब्राह्मण इति ॥",
        hindi: "क्या कर्म ब्राह्मण है? नहीं! सभी प्राणियों में प्रारब्ध, संचित, आगामी कर्म समान हैं। सभी कर्म से प्रेरित होकर क्रियाएं करते हैं। इसलिए कर्म ब्राह्मण नहीं।",
        english: "Is ACTION the Brahmin? NO! Prarabdha, Sanchita, Agami karmas are common to all. All are impelled by karma. Therefore, ACTION IS NOT the Brahmin.",
        simpleExplanation: "NOT ACTION: Everyone does karma—past, present, future. Everyone acts!",
        simpleExplanationHindi: "कर्म नहीं: सब कर्म करते हैं—भूत, वर्तमान, भविष्य। सब क्रिया करते!",
        nanoBananaPrompt: "All beings perform actions driven by karma—action cannot define Brahmin.",
        wordMeanings: [
            { sanskrit: "karma", devanagari: "कर्म", hindi: "कर्म", english: "action" }
        ]
    },
    {
        id: 8,
        verse: 8,
        theme: "Not the Charitable",
        sanskrit: "तर्हि धार्मिको ब्राह्मण इति चेत् तन्न । क्षत्रियादयो हिरण्यदातारो बहवः सन्ति । तस्मात् न धार्मिको ब्राह्मण इति ॥",
        hindi: "क्या धार्मिक (दान करने वाला) ब्राह्मण है? नहीं! बहुत से क्षत्रिय आदि भी स्वर्ण-दानी धर्मात्मा हैं। इसलिए धार्मिक होना ब्राह्मण नहीं।",
        english: "Is the DOER OF DHARMA the Brahmin? NO! Many Kshatriyas are also givers of gold (charitable). Therefore, CHARITY IS NOT the Brahmin.",
        simpleExplanation: "NOT CHARITY: Many kings gave gold, did good deeds. Charity isn't it!",
        simpleExplanationHindi: "दान नहीं: बहुत राजाओं ने स्वर्ण दिया, अच्छे कर्म किए। दान नहीं है!",
        nanoBananaPrompt: "Many non-Brahmins were great givers—charity cannot define Brahmin.",
        wordMeanings: [
            { sanskrit: "dhārmika", devanagari: "धार्मिक", hindi: "धर्म करने वाला", english: "doer of dharma" }
        ]
    },
    {
        id: 9,
        verse: 9,
        theme: "The TRUE Brahmin",
        sanskrit: "तर्हि को वा ब्राह्मणो नाम । यः कश्चिदात्मानमद्वितीयं जातिगुणक्रियाहीनं षडूर्मिषड्भावेत्यादिसर्वदोषरहितं सत्यज्ञानानन्दानन्तस्वरूपं स्वयं निर्विकल्पमशेषकल्पाधारमशेषभूतान्तर्यामित्वेन वर्तमानं प्रत्यगवस्तुवेद्यं ब्रह्मात्मानुभवेन करमलकवत् साक्षात्करोति... शमदमादिसम्पन्नः भावमात्सर्यतृष्णाशमोहमोहादिरहितः दम्भाहंकारादिभिरसंस्पृष्टचेता वर्तते । एवमुक्तलक्षणो यः स एव ब्राह्मण इति । सच्चिदानन्दमात्मानमद्वितीयं ब्रह्म भावयेत् इत्युपनिषत् ॥",
        hindi: "तो ब्राह्मण कौन है? जो कोई आत्मा को—अद्वितीय, जाति-गुण-क्रिया-रहित, सत्य-ज्ञान-आनंद-अनंत—सीधे जान लेता है जैसे हथेली में आंवला; जो शम-दम से संपन्न है; जो ईर्ष्या, तृष्णा, मोह, दम्भ, अहंकार से मुक्त है—वही ब्राह्मण है। सच्चिदानंद आत्मा को ब्रह्म मानो। यही उपनिषद है।",
        english: "WHO IS A BRAHMIN? He who DIRECTLY REALIZES the Self—Non-dual, devoid of caste-quality-action, Truth-Knowledge-Bliss-Infinite—like an AMALAKA IN THE PALM; who is endowed with SHAMA-DAMA; free from envy, greed, delusion, hypocrisy, ego—HE ALONE IS A BRAHMIN. Meditate on the Self as Sat-Chit-Ananda Brahman. Thus ends the Upanishad.",
        simpleExplanation: "THE ANSWER: One who REALIZES Self directly, has peace & self-control, no ego—THAT is a Brahmin!",
        simpleExplanationHindi: "उत्तर: जो आत्मा को प्रत्यक्ष जानता है, शांति और संयम है, अहंकार नहीं—वही ब्राह्मण!",
        nanoBananaPrompt: "The true Brahmin—one who directly realizes the Self, free from ego.",
        wordMeanings: [
            { sanskrit: "śama-dama", devanagari: "शम-दम", hindi: "शांति-संयम", english: "peace and self-control" },
            { sanskrit: "karamalakavat", devanagari: "करमलकवत्", hindi: "हथेली में आंवले जैसा", english: "like fruit in palm" },
            { sanskrit: "saccidānanda", devanagari: "सच्चिदानन्द", hindi: "सत्-चित्-आनंद", english: "existence-consciousness-bliss" }
        ]
    }
];

export const VAJRASUCHIKA_METADATA = {
    id: "vajrasuchika",
    name: "Vajrasuchika",
    nameSanskrit: "वज्रसूचिकोपनिषद्",
    alternateNames: ["Vajrasuchi Upanishad", "Diamond Needle Upanishad"],
    veda: "Sama Veda",
    category: "Samanya",
    shlokaCount: 9,
    sequenceNumber: 37,
    meaning: "The Diamond Needle (that pierces ignorance)",
    keyTeachings: [
        "The Diamond Needle pierces through caste-based ignorance",
        "Question: Who is a TRUE Brahmin?",
        "NOT the SOUL—Soul is same in all beings",
        "NOT the BODY—All bodies are 5 elements",
        "NOT BIRTH/CASTE—Great sages born from various origins:",
        "  - Valmiki from anthill",
        "  - Vyasa from fisherwoman",
        "  - Agastya from pitcher",
        "NOT KNOWLEDGE alone—Kshatriyas like Janaka were knowers",
        "NOT ACTION—All beings perform karma",
        "NOT CHARITY—Many non-Brahmins are charitable",
        "TRUE BRAHMIN = One who DIRECTLY REALIZES the Non-dual Self",
        "Has Shama-Dama (peace and self-control)",
        "Free from ego, envy, delusion, hypocrisy",
        "Sees Self like Amalaka (fruit) in palm—direct experience"
    ],
    famousVerses: {
        diamondNeedle: { id: 1, verse: 1 },
        theQuestion: { id: 2, verse: 2 },
        notBirth: { id: 5, verse: 5 },
        trueBrahmin: { id: 9, verse: 9 }
    },
    rejectedDefinitions: [
        "Jiva (Soul)",
        "Deha (Body)",
        "Jati (Caste/Birth)",
        "Jnana (Knowledge alone)",
        "Karma (Action)",
        "Dharmika (Charitable deeds)"
    ]
};
