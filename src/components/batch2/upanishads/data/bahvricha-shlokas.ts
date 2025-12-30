// Bahvricha Upanishad Data (#55 in Muktika Canon)
// Source: Rig Veda | Category: Shakta
// Theme: Goddess as Primordial, Creator of Trinity, Non-dual Brahman
// Total: 9 Mantras

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface BahvrichaDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const BAHVRICHA_SHANTI_MANTRA = {
    sanskrit: "ॐ वाङ् मे मनसि प्रतिष्ठिता । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरी वाणी मन में प्रतिष्ठित हो। शांति।",
    english: "OM! May my speech be established in mind. OM Peace."
};

export const BAHVRICHA_SHLOKAS: BahvrichaDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "In the Beginning - Goddess Alone",
        sanskrit: "देवी ह्येकाग्रे आसीत् । सैव जगदण्डमसृजत ।",
        hindi: "आरंभ में केवल एक देवी ही थीं। उन्होंने ही जगत-अण्ड की रचना की।",
        english: "In the beginning, the Goddess alone existed. She alone created the Cosmic Egg.",
        simpleExplanation: "GODDESS FIRST! Before everything, only SHE existed. SHE created the Universe!",
        simpleExplanationHindi: "देवी पहले! सब से पहले, केवल वह थीं। उसने ब्रह्मांड बनाया!",
        nanoBananaPrompt: "Primordial Goddess alone before creation, forming cosmic egg.",
        wordMeanings: [
            { sanskrit: "devī", devanagari: "देवी", hindi: "देवी", english: "Goddess" },
            { sanskrit: "jagadaṇḍa", devanagari: "जगदण्ड", hindi: "ब्रह्मांडीय अंडा", english: "cosmic egg" }
        ]
    },
    {
        id: 2, mantra: 2, theme: "Creator of Trinity",
        sanskrit: "तस्या एव ब्रह्मा अजायत । तस्या एव विष्णुः अजायत । तस्या एव रुद्रः अजायत ।",
        hindi: "उन्हीं से ब्रह्मा उत्पन्न हुए। उन्हीं से विष्णु उत्पन्न हुए। उन्हीं से रुद्र उत्पन्न हुए।",
        english: "From Her alone Brahma was born. From Her alone Vishnu was born. From Her alone Rudra was born.",
        simpleExplanation: "SHE CREATED TRINITY! Brahma, Vishnu, Shiva—all born from HER!",
        simpleExplanationHindi: "उसने त्रिमूर्ति बनाई! ब्रह्मा, विष्णु, शिव—सब उसी से जन्मे!",
        nanoBananaPrompt: "Goddess giving birth to Brahma, Vishnu, and Rudra."
    },
    {
        id: 3, mantra: 2, theme: "Kama-Kala",
        sanskrit: "कामकला इति विज्ञायते । शृङ्गारकला इति विज्ञायते ।",
        hindi: "वह काम-कला (प्रेम की कला) के रूप में जानी जाती हैं। वह शृंगार-कला के रूप में जानी जाती हैं।",
        english: "She is known as Kama-Kala (Art of Divine Love). She is known as Sringara-Kala.",
        simpleExplanation: "SHE IS DIVINE LOVE: The art of desire, beauty, attraction—all HER!",
        simpleExplanationHindi: "वह दिव्य प्रेम है: इच्छा, सौंदर्य, आकर्षण की कला—सब उसकी!",
        nanoBananaPrompt: "Goddess as Kama-Kala—the divine art of love."
    },
    {
        id: 4, mantra: 3, theme: "All Creation from Her",
        sanskrit: "तस्या एव सर्वे मरुद्गणा गन्धर्वाः अप्सरसः । भोग्यं सर्वं सर्वं च जगत् ।",
        hindi: "उन्हीं से सभी मरुद्गण, गंधर्व, अप्सराएं उत्पन्न हुईं। सारा भोग्य और सारा जगत उनसे है।",
        english: "From Her the Maruts, Gandharvas, Apsaras were born. Everything enjoyable and the entire world.",
        simpleExplanation: "EVERYTHING FROM HER: Wind-gods, celestial musicians, nymphs, all pleasures!",
        simpleExplanationHindi: "सब उससे: वायु-देवता, गंधर्व, अप्सराएं, सारे सुख!",
        nanoBananaPrompt: "All celestial beings and pleasures emerging from Goddess."
    },
    {
        id: 5, mantra: 4, theme: "She is All Opposites",
        sanskrit: "सैव आनन्दं सैव निरानन्दं । सैव विज्ञानं सैव अविज्ञानं । सैव ब्रह्म सैव अब्रह्म ।",
        hindi: "वही आनंद है, वही दुख है। वही ज्ञान है, वही अज्ञान है। वही ब्रह्म है, वही अब्रह्म है।",
        english: "She is Bliss and Non-Bliss. She is Knowledge and Ignorance. She is Brahman and Non-Brahman.",
        simpleExplanation: "SHE IS EVERYTHING: Joy AND sorrow, knowledge AND ignorance, sacred AND profane!",
        simpleExplanationHindi: "वह सब कुछ है: सुख और दुख, ज्ञान और अज्ञान, पवित्र और अपवित्र!",
        nanoBananaPrompt: "Goddess as both opposites—bliss and non-bliss, knowledge and ignorance."
    },
    {
        id: 6, mantra: 5, theme: "I Am Everything",
        sanskrit: "वेदः अहमेव । अवेदः अहमेव । विद्या अहमेव । अविद्या अहमेव ।",
        hindi: "'वेद मैं हूँ। अवेद मैं हूँ। विद्या मैं हूँ। अविद्या मैं हूँ।'",
        english: "'I am the Veda. I am the Non-Veda. I am Knowledge. I am Ignorance.'",
        simpleExplanation: "GODDESS DECLARES: I AM the Vedas! I AM Knowledge AND Ignorance!",
        simpleExplanationHindi: "देवी घोषणा: मैं वेद हूँ! मैं ज्ञान और अज्ञान हूँ!",
        nanoBananaPrompt: "Goddess declaring 'I am Veda, I am everything'."
    },
    {
        id: 7, mantra: 6, theme: "Maha Tripura Sundari",
        sanskrit: "सैव महात्रिपुरसुन्दरी । सैषा षोडशी श्रीविद्या पञ्चदशी ।",
        hindi: "वही महा-त्रिपुर-सुन्दरी हैं। वही षोडशी, श्री विद्या, पंचदशी हैं।",
        english: "She is Maha-Tripura-Sundari. She is Shodashi, Sri Vidya, Panchadashi.",
        simpleExplanation: "HER NAME: Maha-Tripura-Sundari! She IS the 15 and 16 syllable mantras!",
        simpleExplanationHindi: "उसका नाम: महा-त्रिपुर-सुन्दरी! वह 15 और 16 अक्षर मंत्र है!",
        nanoBananaPrompt: "Maha Tripura Sundari as Sri Vidya, Panchadashi, Shodashi."
    },
    {
        id: 8, mantra: 8, theme: "I Am That Brahman",
        sanskrit: "यदेकं ब्रह्म तदेव तत् । अहमेव तत् । सच्चिदानन्दरूपोऽहं अस्मि ।",
        hindi: "जो एक ब्रह्म है, वह वही है। मैं वही हूँ। मैं सच्चिदानंद रूप हूँ।",
        english: "That One Brahman is That. I am That. I am Existence-Consciousness-Bliss.",
        simpleExplanation: "FINAL TRUTH: Goddess = Brahman! I AM THAT! Sat-Chit-Ananda!",
        simpleExplanationHindi: "अंतिम सत्य: देवी = ब्रह्म! मैं वही हूँ! सत्-चित्-आनंद!",
        nanoBananaPrompt: "Goddess as Brahman—Sat-Chit-Ananda."
    },
    {
        id: 9, mantra: 9, theme: "Conclusion",
        sanskrit: "ब्रह्मैवाहमस्मि । इत्युपनिषत् ॥",
        hindi: "'मैं ब्रह्म ही हूँ।' यही उपनिषद है।",
        english: "'I am Brahman alone.' Thus ends the Upanishad.",
        simpleExplanation: "MAHAVAKYA: AHAM BRAHMASMI! I AM BRAHMAN!",
        simpleExplanationHindi: "महावाक्य: अहं ब्रह्मास्मि! मैं ब्रह्म हूँ!",
        nanoBananaPrompt: "Final declaration—I am Brahman alone."
    }
];

export const BAHVRICHA_METADATA = {
    id: "bahvricha", name: "Bahvricha", nameSanskrit: "बह्वृचोपनिषद्",
    meaning: "Of Many Verses (Rig Veda)", veda: "Rig Veda", category: "Shakta",
    shlokaCount: 9, sequenceNumber: 55,
    famousDeclaration: "In the beginning, the Goddess alone existed",
    trinityOrigin: "Brahma, Vishnu, Rudra all born from Her",
    goddessNames: ["Kama-Kala", "Maha-Tripura-Sundari", "Shodashi", "Sri Vidya", "Panchadashi"],
    philosophy: "Goddess = Non-dual Brahman = Sat-Chit-Ananda"
};

export const getBahvrichaMantra = (mantra: number) => BAHVRICHA_SHLOKAS.find(s => s.mantra === mantra);
