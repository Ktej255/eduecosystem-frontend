// Sarasvati-Rahasya Upanishad (#54 in Muktika Canon) | Krishna Yajur Veda | Shakta
// Theme: Secret of Sarasvati, 10 Rik Mantras, Sarasvati as Supreme Brahman
// Total: 17 key mantras across 3 chapters

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface SarasvatiRahasyaDataEntry {
    id: number; chapter: number; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const SARASVATI_RAHASYA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const SARASVATI_RAHASYA_SHLOKAS: SarasvatiRahasyaDataEntry[] = [
    // Chapter 1: The Praise
    {
        id: 1, chapter: 1, verse: 1, theme: "The Gathering",
        sanskrit: "ऋषयः सम्प्रजग्मुः भगवतीं सरस्वतीं सम्पूज्य पप्रच्छुः ।",
        hindi: "ऋषिगण एकत्र हुए। सरस्वती की पूजा करके पूछा।",
        english: "The Sages gathered, worshipped Sarasvati, and asked.",
        simpleExplanation: "GATHERING: Sages worship and ask the Goddess!",
        simpleExplanationHindi: "सभा: ऋषियों ने पूजा करके पूछा!", nanoBananaPrompt: "Sages gathering."
    },
    {
        id: 2, chapter: 1, verse: 1, theme: "The Question",
        sanskrit: "केन मन्त्रेण त्वं प्रसन्ना भवसि ।",
        hindi: "किस मंत्र से आप प्रसन्न होती हैं?",
        english: "By which Mantra do You become pleased?",
        simpleExplanation: "QUESTION: What mantra pleases You, O Goddess?",
        simpleExplanationHindi: "प्रश्न: किस मंत्र से प्रसन्न?", nanoBananaPrompt: "Asking the secret."
    },
    {
        id: 3, chapter: 1, verse: 2, theme: "The Answer",
        sanskrit: "सा होवाच ममाक्षरं नाम मन्त्रं दशधा दशैर्ऋग्भिः ।",
        hindi: "देवी बोलीं: मेरा नाम (अक्षर) ही मंत्र। दस ऋचाओं में दस प्रकार।",
        english: "She replied: My Name is the Mantra. Tenfold through ten Rik verses.",
        simpleExplanation: "ANSWER: My NAME = Mantra! 10 Vedic verses reveal it!",
        simpleExplanationHindi: "उत्तर: मेरा नाम = मंत्र! 10 ऋचाओं में!", nanoBananaPrompt: "Name is mantra."
    },
    {
        id: 4, chapter: 1, verse: 3, theme: "Vagbhava Bija",
        sanskrit: "वाचमेतां वाग्भवेन बीजेन सह योजयेत् ।",
        hindi: "इन ऋचाओं को वाग्भव बीज (ऐं) के साथ जोड़े।",
        english: "Join these verses with VAGBHAVA BIJA (Aim).",
        simpleExplanation: "SECRET SEED: Add AIM (ऐं) bija to all mantras!",
        simpleExplanationHindi: "गुप्त बीज: सब मंत्रों में ऐं जोड़ो!", nanoBananaPrompt: "Aim bija."
    },
    // Chapter 2: Ten Rig Vedic Mantras
    {
        id: 5, chapter: 2, verse: 1, theme: "First Rik - Invocation",
        sanskrit: "प्रणो देवी सरस्वती वाजेभिर्वाजिनीवती धीनामवित्र्यवतु ॥",
        hindi: "अन्न-बल संपन्न सरस्वती, बुद्धियों की रक्षक, हमारी रक्षा करे।",
        english: "May Sarasvati, rich in food & strength, protectress of intellects, protect us.",
        simpleExplanation: "RIK 1: Food, Strength, Protector of INTELLECTS!",
        simpleExplanationHindi: "ऋक् 1: अन्न, बल, बुद्धि-रक्षक!", nanoBananaPrompt: "First Rik mantra."
    },
    {
        id: 6, chapter: 2, verse: 2, theme: "Second Rik - Inspirer",
        sanskrit: "आ नो दिवो बृहतः पर्वतादा सरस्वती यजता गन्तु यज्ञम् ।",
        hindi: "स्वर्ग और पर्वतों से पूजनीय सरस्वती यज्ञ में आएं।",
        english: "May Sarasvati come to our sacrifice from heavens and mountains.",
        simpleExplanation: "RIK 2: Come from heavens and mountains to our yajna!",
        simpleExplanationHindi: "ऋक् 2: स्वर्ग-पर्वत से यज्ञ में आओ!", nanoBananaPrompt: "From heaven."
    },
    {
        id: 7, chapter: 2, verse: 3, theme: "Third Rik - Purifier",
        sanskrit: "पावका नः सरस्वती वाजेभिर्वाजिनीवती यज्ञं वष्टु धियावसुः ॥",
        hindi: "पवित्र करने वाली, बुद्धि-धन वाली सरस्वती यज्ञ स्वीकार करे।",
        english: "May Purifier Sarasvati, holder of Intellect-wealth, accept our sacrifice.",
        simpleExplanation: "RIK 3: PURIFIER! Intellect is Her wealth!",
        simpleExplanationHindi: "ऋक् 3: पावक! बुद्धि उनका धन!", nanoBananaPrompt: "Purifier."
    },
    {
        id: 8, chapter: 2, verse: 4, theme: "Fourth Rik - Awakener",
        sanskrit: "चोदयित्री सूनृतानां चेतन्ती सुमतीनाम् यज्ञं दधे सरस्वती ॥",
        hindi: "सत्य वचनों की प्रेरक, सुमतियों को जगाने वाली सरस्वती यज्ञ धारण करती।",
        english: "Inspirer of true speech, Awakener of good thoughts, Sarasvati supports yajna.",
        simpleExplanation: "RIK 4: Inspires TRUE SPEECH! Awakens GOOD THOUGHTS!",
        simpleExplanationHindi: "ऋक् 4: सत्य वाणी प्रेरक! सुमति जागृत!", nanoBananaPrompt: "Awakener of thoughts."
    },
    {
        id: 9, chapter: 2, verse: 5, theme: "Fifth Rik - Ocean",
        sanskrit: "महो अर्णः सरस्वती प्र चेतयति केतुना धियो विश्वा वि राजति ॥",
        hindi: "सरस्वती महान समुद्र (ज्ञान) को जगाती; समस्त बुद्धियों में विराजती।",
        english: "Sarasvati awakens the Great Ocean (knowledge); illumines all intellects.",
        simpleExplanation: "RIK 5: Awakens OCEAN of knowledge! Illumines ALL minds!",
        simpleExplanationHindi: "ऋक् 5: ज्ञान-समुद्र जगाती! सब मन प्रकाशित!", nanoBananaPrompt: "Ocean of knowledge."
    },
    {
        id: 10, chapter: 2, verse: 6, theme: "Sixth Rik - Boon Giver",
        sanskrit: "सरस्वती दाशुषे वार्यं दात् ॥",
        hindi: "सरस्वती दाता को वांछित वरदान देती है।",
        english: "Sarasvati grants desired boons to the giver.",
        simpleExplanation: "RIK 6: Gives BOONS to those who give!",
        simpleExplanationHindi: "ऋक् 6: दाता को वरदान!", nanoBananaPrompt: "Boon giver."
    },
    {
        id: 11, chapter: 2, verse: 7, theme: "Seventh Rik - Waves",
        sanskrit: "सरस्वति या सरथं ययथ ऊतिभिः ऊर्मिभिः महो अर्णः ।",
        hindi: "हे सरस्वती! तुम अपनी लहरों से महान समुद्र के रूप में आई।",
        english: "O Sarasvati! You came with waves as the Great Ocean.",
        simpleExplanation: "RIK 7: She IS the Great Ocean with waves!",
        simpleExplanationHindi: "ऋक् 7: वह लहरों वाला महा-समुद्र!", nanoBananaPrompt: "Waves of knowledge."
    },
    {
        id: 12, chapter: 2, verse: 9, theme: "Ninth Rik - Seven Sisters",
        sanskrit: "एका चेतत् सरस्वती नदीनां शुचिर्यती गिरिभ्य आ समुद्रात् ।",
        hindi: "नदियों में एकमात्र सरस्वती श्रेष्ठ; पहाड़ से समुद्र तक पवित्र।",
        english: "Among rivers, Sarasvati alone is conscious, flowing pure from mountains to ocean.",
        simpleExplanation: "RIK 9: Among rivers, ONLY Sarasvati is CONSCIOUS!",
        simpleExplanationHindi: "ऋक् 9: नदियों में केवल सरस्वती चेतन!", nanoBananaPrompt: "Conscious river."
    },
    {
        id: 13, chapter: 2, verse: 10, theme: "Tenth Rik - Mountain Breaker",
        sanskrit: "इयं शुष्मेभिर्बिसखा इवारुजत् सानु गिरीणाम् ।",
        hindi: "यह अपनी लहरों से पर्वत-शिखर तोड़ देती है।",
        english: "She breaks mountain peaks with her strong waves.",
        simpleExplanation: "RIK 10: Her waves BREAK MOUNTAINS!",
        simpleExplanationHindi: "ऋक् 10: उसकी लहरें पर्वत तोड़ें!", nanoBananaPrompt: "Breaking mountains."
    },
    // Chapter 3: Philosophy
    {
        id: 14, chapter: 3, verse: 1, theme: "Sarasvati is All",
        sanskrit: "सैषा सर्वमयी । सैषा पुरुषः । सैषा प्रकृतिः ।",
        hindi: "वही सर्वमयी। वही पुरुष। वही प्रकृति।",
        english: "She is All. She is Purusha. She is Prakriti.",
        simpleExplanation: "PHILOSOPHY: Sarasvati = ALL! = Purusha! = Prakriti!",
        simpleExplanationHindi: "दर्शन: सरस्वती = सब! = पुरुष! = प्रकृति!", nanoBananaPrompt: "Sarasvati is all."
    },
    {
        id: 15, chapter: 3, verse: 2, theme: "Four Mahavakyas",
        sanskrit: "अहं ब्रह्मास्मि । तत्त्वमसि । अयमात्मा ब्रह्म । प्रज्ञानं ब्रह्म ।",
        hindi: "मैं ब्रह्म। वह तुम हो। यह आत्मा ब्रह्म। प्रज्ञान ब्रह्म।",
        english: "I am Brahman. That Thou Art. This Self is Brahman. Consciousness is Brahman.",
        simpleExplanation: "4 MAHAVAKYAS: Sarasvati = meaning of ALL FOUR!",
        simpleExplanationHindi: "4 महावाक्य: सरस्वती = चारों का अर्थ!", nanoBananaPrompt: "Four Mahavakyas."
    },
    {
        id: 16, chapter: 3, verse: 3, theme: "Union",
        sanskrit: "य एवं वेद स सायुज्यं सलोकतां जयति ।",
        hindi: "जो ऐसा जानता है, वह देवी के साथ सायुज्य और सलोकता प्राप्त करता है।",
        english: "He who knows this conquers Union and Same Abode with Her.",
        simpleExplanation: "FRUIT: Know this = UNION with Sarasvati! Same world!",
        simpleExplanationHindi: "फल: यह जानो = सरस्वती के साथ एकता!", nanoBananaPrompt: "Union with Goddess."
    },
    {
        id: 17, chapter: 3, verse: 4, theme: "Conclusion",
        sanskrit: "इत्युपनिषत् । ॐ तत् सत् ।",
        hindi: "यही उपनिषद। ॐ तत् सत्।",
        english: "Thus ends the Upanishad. OM Tat Sat.",
        simpleExplanation: "END: OM TAT SAT! Secret of Sarasvati revealed!",
        simpleExplanationHindi: "समाप्त: ॐ तत् सत्! सरस्वती-रहस्य प्रकट!", nanoBananaPrompt: "Upanishad conclusion."
    }
];

export const SARASVATI_RAHASYA_METADATA = {
    id: "sarasvati-rahasya", name: "Sarasvati-Rahasya", nameSanskrit: "सरस्वतीरहस्योपनिषद्",
    veda: "Krishna Yajur Veda", category: "Shakta",
    shlokaCount: 17, chapterCount: 3, sequenceNumber: 54,
    meaning: "The Secret of Sarasvati",
    tenRikMantras: {
        rik1: "Protector of Intellects",
        rik2: "Comes from Heavens/Mountains",
        rik3: "Purifier, Intellect as Wealth",
        rik4: "Inspirer of True Speech",
        rik5: "Awakens Ocean of Knowledge",
        rik6: "Boon Giver",
        rik7: "The Great Ocean with Waves",
        rik8: "Protection Prayer",
        rik9: "Only Conscious River",
        rik10: "Mountain Breaker"
    },
    vagbhavaBija: "ऐं (Aim)",
    keyTeachings: [
        "Sarasvati's NAME itself is the Mantra",
        "10 Rig Vedic verses reveal Her secret",
        "Add VAGBHAVA BIJA (Aim) to all mantras",
        "She is Protector of Intellects",
        "She is Inspirer of True Speech & Good Thoughts",
        "She awakens the Ocean of Knowledge",
        "Among rivers, ONLY Sarasvati is conscious",
        "Her waves break mountains",
        "PHILOSOPHY: She = All = Purusha = Prakriti",
        "She is the meaning of all 4 Mahavakyas",
        "FRUIT: Union (Sayujya) with Sarasvati"
    ]
};
