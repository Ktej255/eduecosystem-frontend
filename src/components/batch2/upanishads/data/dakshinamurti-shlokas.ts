// Dakshinamurti Upanishad Data (#42 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Shaiva
// Theme: Shiva as Silent Teacher, 24-syllable Mantra, Teaching through Silence
// Total: 19 Mantras

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface DakshinamurtiDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const DAKSHINAMURTI_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const DAKSHINAMURTI_SHLOKAS: DakshinamurtiDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "Sages Ask Markandeya",
        sanskrit: "केन त्वं चिरं जीवसि केन वा आनन्दमनुभवसीति ।",
        hindi: "आप किससे दीर्घकाल तक जीते हैं? किससे आनंद अनुभव करते हैं?",
        english: "By what do you live so long? By what do you experience bliss?",
        simpleExplanation: "SAGES ASK: Markandeya, how do you live FOREVER and stay BLISSFUL?",
        simpleExplanationHindi: "ऋषि पूछते हैं: मार्कण्डेय, आप हमेशा कैसे जीते और आनंदित रहते हैं?",
        nanoBananaPrompt: "Sages asking Markandeya the secret of immortality."
    },
    {
        id: 2, mantra: 2, theme: "Answer: Shiva Tattva",
        sanskrit: "परमं रहस्यं शिवतत्त्वज्ञानेनेति ।",
        hindi: "परम रहस्य शिव-तत्व के ज्ञान से।",
        english: "By the knowledge of the Supreme Secret: Shiva-Tattva.",
        simpleExplanation: "SECRET = SHIVA! Know Shiva's essence = Immortality + Bliss!",
        simpleExplanationHindi: "रहस्य = शिव! शिव का सार जानो = अमरता + आनंद!",
        nanoBananaPrompt: "Shiva-Tattva as the supreme secret."
    },
    {
        id: 3, mantra: 4, theme: "Meaning of Dakshinamurti",
        sanskrit: "दक्षिणा सा भवेत् बुद्धिः ईशं जानाति षेमुषी । दक्षिणामूर्तिः ।",
        hindi: "'दक्षिणा' = बुद्धि जो ईश्वर को जानती है। उसकी मूर्ति = दक्षिणामूर्ति।",
        english: "'Dakshina' = Intellect that knows God. His Form = Dakshinamurti.",
        simpleExplanation: "DAKSHINAMURTI = Form of WISDOM! The God whose form IS understanding!",
        simpleExplanationHindi: "दक्षिणामूर्ति = ज्ञान का रूप! वह देव जिसका स्वरूप ही समझ है!",
        nanoBananaPrompt: "Dakshinamurti—the form of divine wisdom."
    },
    {
        id: 4, mantra: 5, theme: "The 24-Syllable Mantra",
        sanskrit: "ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा ।",
        hindi: "ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा।",
        english: "OM Namo Bhagavate Dakshinamurtaye Mahyam Medham Prajnam Prayachha Svaha.",
        simpleExplanation: "24-SYLLABLE MANTRA: 'Grant me Memory and Wisdom, O Lord Dakshinamurti!'",
        simpleExplanationHindi: "24-अक्षर मंत्र: 'मुझे मेधा और प्रज्ञा दो, हे दक्षिणामूर्ति!'",
        nanoBananaPrompt: "The 24-syllable Dakshinamurti Mantra glowing.",
        wordMeanings: [
            { sanskrit: "medhā", devanagari: "मेधा", hindi: "स्मरण शक्ति", english: "retentive power" },
            { sanskrit: "prajñā", devanagari: "प्रज्ञा", hindi: "बुद्धि", english: "wisdom" }
        ]
    },
    {
        id: 5, mantra: 7, theme: "Visualization - Crystal Silver",
        sanskrit: "स्फटिकरजतवर्णं मौक्तिकीमक्षमालाम् । अमृतकलशविद्यां ज्ञानमुद्रां कराग्रैः ॥",
        hindi: "स्फटिक-चांदी रंग, मोती माला, अमृत कलश, विद्या पुस्तक, ज्ञान मुद्रा।",
        english: "Crystal-Silver color, Pearl rosary, Nectar pot, Book, Wisdom gesture in hands.",
        simpleExplanation: "VISUALIZE: Silver-white, Rosary, Nectar pot, Book, Chinmudra!",
        simpleExplanationHindi: "ध्यान करो: चांदी-सफेद, माला, अमृत कलश, पुस्तक, ज्ञान मुद्रा!",
        nanoBananaPrompt: "Dakshinamurti—silver, with rosary, pot, book, chinmudra."
    },
    {
        id: 6, mantra: 8, theme: "Three Eyes and Moon",
        sanskrit: "उरगकक्ष्यं चन्द्रचूडं त्रिनेत्रम् । विधृतविविधभूषम् ॥",
        hindi: "सांप कमरबंद, चंद्रमा सिर पर, तीन नेत्र, विविध आभूषण।",
        english: "Snake belt, Moon on crest, Three eyes, Various ornaments.",
        simpleExplanation: "MORE FEATURES: Snake around waist, MOON on head, THREE EYES!",
        simpleExplanationHindi: "और विशेषताएं: कमर पर सांप, सिर पर चंद्रमा, तीन आंखें!",
        nanoBananaPrompt: "Dakshinamurti with three eyes, moon, snake belt."
    },
    {
        id: 7, mantra: 9, theme: "Under the Banyan Tree",
        sanskrit: "वटविटपिसमीपे भूमिभागे निषण्णं । सकलमुनिजनानां ज्ञानदातारम् ॥",
        hindi: "वट वृक्ष के पास भूमि पर बैठे, सभी मुनियों को ज्ञान देते हुए।",
        english: "Seated on ground near Banyan tree, bestowing knowledge to all sages.",
        simpleExplanation: "UNDER BANYAN: Sitting on ground, TEACHING all the sages!",
        simpleExplanationHindi: "बरगद के नीचे: भूमि पर बैठे, सभी ऋषियों को पढ़ाते हुए!",
        nanoBananaPrompt: "Dakshinamurti under banyan tree teaching sages."
    },
    {
        id: 8, mantra: 10, theme: "The Wonder - Silent Teaching",
        sanskrit: "चित्रं वटतरोर्मूले वृद्धाः शिष्या गुरुर्युवा । गुरोस्तु मौनं व्याख्यानं शिष्यास्तु छिन्नसंशयाः ॥",
        hindi: "विचित्र! वट मूल में शिष्य वृद्ध, गुरु युवा। गुरु का व्याख्यान मौन; शिष्यों के संशय छिन्न।",
        english: "Wonder! At Banyan root, disciples old, Teacher young. Teacher's lecture = Silence; students' doubts = Dispelled.",
        simpleExplanation: "SUPREME WONDER: Young teacher, old students. Teaching = SILENCE. Doubts = GONE!",
        simpleExplanationHindi: "परम आश्चर्य: युवा गुरु, बूढ़े शिष्य। शिक्षा = मौन। संदेह = समाप्त!",
        nanoBananaPrompt: "Young Dakshinamurti teaching old sages through silence."
    },
    {
        id: 9, mantra: 12, theme: "Treasury of All Knowledge",
        sanskrit: "निधये सर्वविद्यानां भिषजे भवरोगिणाम् । गुरवे सर्वलोकानां दक्षिणामूर्तये नमः ॥",
        hindi: "सर्व विद्याओं के निधि, भव-रोग के वैद्य, सर्व लोकों के गुरु—दक्षिणामूर्ति को नमस्कार।",
        english: "Treasury of all wisdoms, Physician for Samsara disease, Guru of all worlds—Salutations to Dakshinamurti.",
        simpleExplanation: "THREE ROLES: Treasure of Knowledge, Doctor for Worldly Disease, World's Guru!",
        simpleExplanationHindi: "तीन भूमिकाएं: ज्ञान का खजाना, संसार रोग के डॉक्टर, संसार के गुरु!",
        nanoBananaPrompt: "Dakshinamurti as treasury, physician, and world-guru."
    },
    {
        id: 10, mantra: 13, theme: "World as Mirror",
        sanskrit: "विश्वं दर्पणदृश्यमाननगरीतुल्यं निजान्तर्गतम् ।",
        hindi: "विश्व दर्पण में दिखती नगरी जैसा, अपनी आत्मा में स्थित।",
        english: "The Universe is like a city seen in mirror, existing within one's Self.",
        simpleExplanation: "WORLD = MIRROR: The universe is like city in mirror—inside YOUR Self!",
        simpleExplanationHindi: "संसार = दर्पण: ब्रह्मांड दर्पण में नगर जैसा—तुम्हारी आत्मा के अंदर!",
        nanoBananaPrompt: "Universe as a city reflected in the mirror of Self."
    },
    {
        id: 11, mantra: 18, theme: "Becomes Everything",
        sanskrit: "य एवं वेद स सर्वं भवति । स ब्रह्म भवति ।",
        hindi: "जो ऐसा जानता है, वह सर्व हो जाता है। वह ब्रह्म हो जाता है।",
        english: "He who knows this becomes All. He becomes Brahman.",
        simpleExplanation: "FINAL RESULT: Know Dakshinamurti = Become ALL = Become BRAHMAN!",
        simpleExplanationHindi: "अंतिम परिणाम: दक्षिणामूर्ति जानो = सब बनो = ब्रह्म बनो!",
        nanoBananaPrompt: "Knower of Dakshinamurti becoming Brahman."
    }
];

export const DAKSHINAMURTI_METADATA = {
    id: "dakshinamurti", name: "Dakshinamurti", nameSanskrit: "दक्षिणामूर्तिउपनिषद्",
    veda: "Krishna Yajur Veda", category: "Shaiva", shlokaCount: 11, fullVerseCount: 19, sequenceNumber: 42,
    mantra: "Om Namo Bhagavate Dakshinamurtaye Mahyam Medham Prajnam Prayachha Svaha",
    mantraSyllables: 24,
    visualization: {
        color: "Crystal Silver", items: ["Pearl Rosary", "Nectar Pot", "Book", "Chinmudra"],
        features: ["Snake belt", "Moon crest", "Three eyes", "Ornaments"],
        setting: "Under Banyan tree"
    },
    uniqueFeature: "Teaching through Silence—Young guru, old disciples, doubts dispelled by silence"
};

export const getDakshinamurtiMantra = (mantra: number) => DAKSHINAMURTI_SHLOKAS.find(s => s.mantra === mantra);
