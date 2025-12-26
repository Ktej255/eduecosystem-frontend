// Sharabha Upanishad Data (#43 in Muktika Canon)
// Source: Atharva Veda | Category: Shaiva
// Theme: Shiva as Sharabha subduing Nrisimha, Trinity as One
// Total: 39 Mantras

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface SharabhaDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const SHARABHA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम कानों से कल्याणकारी सुनें। शांति।",
    english: "OM! May we hear auspicious with our ears. OM Peace."
};

export const SHARABHA_SHLOKAS: SharabhaDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "Who is Supreme?",
        sanskrit: "ब्रह्मविष्णुरुद्राणां मध्ये को वा अधिकतरो ध्येयः ।",
        hindi: "ब्रह्मा, विष्णु, रुद्र में सबसे अधिक ध्यान योग्य कौन?",
        english: "Among Brahma, Vishnu, Rudra—who is the most worthy of meditation?",
        simpleExplanation: "THE QUESTION: Brahma vs Vishnu vs Rudra—WHO IS THE GREATEST?",
        simpleExplanationHindi: "प्रश्न: ब्रह्मा vs विष्णु vs रुद्र—सबसे महान कौन?",
        nanoBananaPrompt: "Question: Who among Trinity is supreme?"
    },
    {
        id: 2, mantra: 2, theme: "Answer: Maheshvara",
        sanskrit: "महेश्वरः । स एकाकी संहरति लोकाधिपः ।",
        hindi: "महेश्वर। वह अकेले संहार करता है, लोकाधिपति है।",
        english: "Maheshvara. He alone dissolves; He is Lord of Worlds.",
        simpleExplanation: "ANSWER = MAHESHVARA! He alone dissolves everything at the end!",
        simpleExplanationHindi: "उत्तर = महेश्वर! वह अकेले अंत में सब विलय करता है!",
        nanoBananaPrompt: "Maheshvara as supreme Lord of dissolution."
    },
    {
        id: 3, mantra: 3, theme: "Creator of Creators",
        sanskrit: "स एव सृजति स एव पाति । स एव त्रिधा भूत्वा ।",
        hindi: "वही सृजन करता है, वही पालन करता है। वही तीन रूप धारण करता है।",
        english: "He alone creates, He alone preserves. He alone became threefold.",
        simpleExplanation: "ONE BECOMES THREE: Maheshvara = Creator + Preserver + Destroyer!",
        simpleExplanationHindi: "एक से तीन: महेश्वर = सृष्टिकर्ता + पालनकर्ता + संहारक!",
        nanoBananaPrompt: "One Shiva becoming the threefold Trinity."
    },
    {
        id: 4, mantra: 4, theme: "Nrisimha's Rage",
        sanskrit: "शरभाख्यं महेश्वरः नृसिंहं लोकहानाय संवर्तक इवोद्यतम् ॥",
        hindi: "महेश्वर ने शगभ रूप धारण किया जब नृसिंह प्रलय अग्नि की तरह उठे।",
        english: "Maheshvara took Sharabha form when Nrisimha rose like dissolution fire.",
        simpleExplanation: "NRISIMHA GOES MAD: After killing demon, rage uncontrollable like world-ending fire!",
        simpleExplanationHindi: "नृसिंह का क्रोध: राक्षस मारने के बाद, प्रलय अग्नि जैसा अनियंत्रित!",
        nanoBananaPrompt: "Nrisimha's uncontrollable rage threatening the worlds.",
        wordMeanings: [
            { sanskrit: "śarabha", devanagari: "शरभ", hindi: "आठ पैरों वाला प्राणी", english: "eight-legged creature" }
        ]
    },
    {
        id: 5, mantra: 5, theme: "Sharabha Subdues Nrisimha",
        sanskrit: "जग्राह पादौ हस्तेन चर्म गात्रं नखेन च । चकर्त विष्णुं विक्रान्तम् ॥",
        hindi: "शगभ ने हाथों से पैर पकड़े, नाखूनों से शरीर नियंत्रित किया।",
        english: "Sharabha seized His feet, held His body with claws, subdued valorous Vishnu.",
        simpleExplanation: "SHARABHA WINS: Eight-legged beast grabs Nrisimha, calms His rage!",
        simpleExplanationHindi: "शगभ जीता: आठ पैरों वाला जीव नृसिंह को पकड़ता है, क्रोध शांत करता है!",
        nanoBananaPrompt: "Sharabha (eight-legged) subduing the raging Nrisimha."
    },
    {
        id: 6, mantra: 7, theme: "Vishnu Praises Rudra",
        sanskrit: "तुष्टाव रुद्रं त्रिनयनं शरभाकारमीश्वरम् ॥",
        hindi: "विष्णु ने त्रिनेत्र, शगभ-आकार ईश्वर रुद्र की स्तुति की।",
        english: "Vishnu praised the Three-eyed Lord Rudra in Sharabha form.",
        simpleExplanation: "VISHNU BOWS: After being calmed, Vishnu PRAISES Shiva as Sharabha!",
        simpleExplanationHindi: "विष्णु झुकते हैं: शांत होने के बाद, विष्णु शगभ रूपी शिव की स्तुति करते हैं!",
        nanoBananaPrompt: "Vishnu praising Shiva in Sharabha form."
    },
    {
        id: 7, mantra: 10, theme: "Creator of Brahma",
        sanskrit: "यो ब्रह्माणं विदधाति पूर्वं यो वै वेदांश्च प्रहिणोति तस्मै ।",
        hindi: "जिसने पहले ब्रह्मा को बनाया और उन्हें वेद दिए।",
        english: "He who created Brahma first and delivered the Vedas to him.",
        simpleExplanation: "SHIVA CREATED BRAHMA: And gave him the Vedas to spread!",
        simpleExplanationHindi: "शिव ने ब्रह्मा बनाया: और उन्हें फैलाने के लिए वेद दिए!",
        nanoBananaPrompt: "Shiva creating Brahma and giving him Vedas."
    },
    {
        id: 8, mantra: 12, theme: "Drank Halahala",
        sanskrit: "यो हलाहलं कण्ठे दधार ।",
        hindi: "जिसने हलाहल विष कंठ में धारण किया।",
        english: "He who held the Halahala poison in His throat.",
        simpleExplanation: "NEELAKANTHA: Shiva drank POISON to save the world!",
        simpleExplanationHindi: "नीलकंठ: शिव ने संसार बचाने के लिए विष पिया!",
        nanoBananaPrompt: "Shiva holding poison in throat—Neelakantha."
    },
    {
        id: 9, mantra: 13, theme: "Burned Tripura",
        sanskrit: "यो वा त्रिपुरं ददाह । यो वा कालस्य कालः ।",
        hindi: "जिसने त्रिपुर जलाया। जो काल का भी काल है।",
        english: "He who burned the Three Cities. He who is Death of Death.",
        simpleExplanation: "TRIPURANTAKA + MAHAKALA: Burned 3 cities, is DEATH of Death itself!",
        simpleExplanationHindi: "त्रिपुरान्तक + महाकाल: 3 नगर जलाए, स्वयं मृत्यु की मृत्यु है!",
        nanoBananaPrompt: "Shiva burning Tripura and as Mahakala."
    },
    {
        id: 10, mantra: 14, theme: "Subdued All Avatars",
        sanskrit: "यो वा मत्स्यं कूर्मं वराहं नारसिंहं त्रिविक्रमं जग्राह ।",
        hindi: "जिसने मत्स्य, कूर्म, वराह, नृसिंह, वामन के अहंकार को समाप्त किया।",
        english: "He who subdued Matsya, Kurma, Varaha, Nrisimha, Trivikrama.",
        simpleExplanation: "SHIVA > AVATARS: Subdued Fish, Turtle, Boar, Man-Lion, Dwarf forms of Vishnu!",
        simpleExplanationHindi: "शिव > अवतार: मत्स्य, कूर्म, वराह, नृसिंह, वामन को शांत किया!",
        nanoBananaPrompt: "Shiva having subdued various Vishnu avatars."
    },
    {
        id: 11, mantra: 20, theme: "Trinity as One",
        sanskrit: "एक एव त्रिधा भूत्वा सर्गस्थित्यन्तकारकः ॥",
        hindi: "एक ही तीन होकर सृष्टि, स्थिति, अंत करता है।",
        english: "The One, becoming threefold, causes Creation, Preservation, Destruction.",
        simpleExplanation: "ONE = THREE: Single Reality appears as Brahma-Vishnu-Rudra!",
        simpleExplanationHindi: "एक = तीन: एक सत्य ब्रह्मा-विष्णु-रुद्र के रूप में प्रकट होता है!",
        nanoBananaPrompt: "One Reality manifesting as three gods."
    },
    {
        id: 12, mantra: 23, theme: "Three Names of One",
        sanskrit: "एको देवो महादेवो भिन्नः पूर्णो निरञ्जनः । ब्रह्मा विष्णुश्च रुद्रश्च त्रयस्ते सम्प्रकीर्तिताः ॥",
        hindi: "एक देव महादेव, भिन्न प्रतीत पर पूर्ण, निरंजन। ब्रह्मा, विष्णु, रुद्र उसी के तीन नाम।",
        english: "One God Mahadeva, appearing distinct yet Full, Stainless. Brahma, Vishnu, Rudra are His three names.",
        simpleExplanation: "RECONCILIATION: Mahadeva is ONE! Brahma-Vishnu-Rudra just THREE NAMES!",
        simpleExplanationHindi: "समन्वय: महादेव एक है! ब्रह्मा-विष्णु-रुद्र बस तीन नाम!",
        nanoBananaPrompt: "One Mahadeva with three names—Brahma, Vishnu, Rudra."
    },
    {
        id: 13, mantra: 31, theme: "Freed from All Sins",
        sanskrit: "स सर्वेभ्यो पापेभ्यो पूतो भवति । स गर्भवासं न पुनरेति ।",
        hindi: "वह सब पापों से मुक्त होता है। वह पुनः गर्भ में नहीं आता।",
        english: "He is purified from all sins. He does not enter the womb again.",
        simpleExplanation: "PHALA SHRUTI: Study this = All sins gone, NO REBIRTH!",
        simpleExplanationHindi: "फल श्रुति: इसका अध्ययन = सब पाप गए, पुनर्जन्म नहीं!",
        nanoBananaPrompt: "Freedom from sins and rebirth through this knowledge."
    }
];

export const SHARABHA_METADATA = {
    id: "sharabha", name: "Sharabha", nameSanskrit: "शरभोपनिषद्",
    veda: "Atharva Veda", category: "Shaiva", shlokaCount: 13, fullVerseCount: 39, sequenceNumber: 43,
    sharabhaForm: "Eight-legged creature (part-lion, part-bird)",
    purpose: "To subdue Nrisimha's uncontrollable rage after killing Hiranyakashipu",
    shivaDeeds: ["Created Brahma", "Gave Vedas", "Drank Halahala", "Burned Tripura", "Subdued all avatars"],
    trinityUnity: "One Mahadeva appears as Brahma, Vishnu, Rudra"
};

export const getSharabhaMantra = (mantra: number) => SHARABHA_SHLOKAS.find(s => s.mantra === mantra);
