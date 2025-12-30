// Kundika Upanishad (#52 in Muktika Canon) | Sama Veda | Sannyasa
// Theme: Monk's Equipment, Prana-Utkranti (Yogic Departure), Self-Realization
// Total: 21 key mantras from 34 verses

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface KundikaDataEntry {
    id: number; section: string; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const KUNDIKA_SHANTI_MANTRA = {
    sanskrit: "ॐ आप्यायन्तु ममाङ्गानि... ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरे अंग पुष्ट हों। शांति।",
    english: "OM! May my limbs be fully developed. OM Peace."
};

export const KUNDIKA_SHLOKAS: KundikaDataEntry[] = [
    // Part 1: Life Stages
    {
        id: 1, section: "Stages", verse: 1, theme: "Brahmacharya",
        sanskrit: "प्राक् ब्रह्मचर्याश्रमात् अथ समावृत्तोऽबाधे ।",
        hindi: "ब्रह्मचर्य से पहले बचपन, फिर गुरुकुल से लौटकर गृहस्थ।",
        english: "Before Brahmacharya, childhood; then returning, live as Householder.",
        simpleExplanation: "STAGE 1-2: Childhood → Student → Householder!",
        simpleExplanationHindi: "चरण 1-2: बचपन → छात्र → गृहस्थ!", nanoBananaPrompt: "Life stages begin."
    },
    {
        id: 2, section: "Stages", verse: 2, theme: "Vanaprastha",
        sanskrit: "वानप्रस्थाश्रमं गत्वा तत्रानिकेतः ।",
        hindi: "वानप्रस्थ में जाकर अनिकेत (बिना घर) रहे।",
        english: "Going to Forest-dweller stage, live without a home.",
        simpleExplanation: "STAGE 3: Forest-dweller. NO FIXED HOME!",
        simpleExplanationHindi: "चरण 3: वानप्रस्थ। घर नहीं!", nanoBananaPrompt: "Forest dwelling."
    },
    {
        id: 3, section: "Stages", verse: 3, theme: "Sannyasa at 70",
        sanskrit: "संन्यसेद्वा सप्तत्यामूर्ध्वं ।",
        hindi: "सत्तर वर्ष के बाद संन्यास ग्रहण करे।",
        english: "One should renounce after age SEVENTY.",
        simpleExplanation: "STAGE 4: After 70 = SANNYASA (renunciation)!",
        simpleExplanationHindi: "चरण 4: 70 के बाद = संन्यास!", nanoBananaPrompt: "Renounce after 70."
    },
    // Part 2: Monk's Equipment
    {
        id: 4, section: "Equipment", verse: 5, theme: "Essential Items",
        sanskrit: "कमण्डलुं शिक्यं पात्रं त्रिदण्डं उपानहौ कन्थां कौपीनम् ।",
        hindi: "कमंडलु, शिक्य, पात्र, त्रिदण्ड, पादुका, कंथा, कौपीन।",
        english: "Water pot (Kamandalu), Sling, Bowl, Tridanda, Shoes, Patchwork cloth, Loincloth.",
        simpleExplanation: "MONK'S KIT: Water pot, Bowl, Staff, Shoes, Cloth, Loincloth!",
        simpleExplanationHindi: "संन्यासी सामान: कमंडलु, पात्र, दण्ड, जूते, वस्त्र!", nanoBananaPrompt: "Monk's equipment."
    },
    {
        id: 5, section: "Equipment", verse: 6, theme: "Renouncing Wife",
        sanskrit: "भार्यां संन्यस्य ।",
        hindi: "भार्या (पत्नी) का त्याग करके।",
        english: "Having renounced wife.",
        simpleExplanation: "RENOUNCE: Wife and family attachments!",
        simpleExplanationHindi: "त्याग: पत्नी और परिवार!", nanoBananaPrompt: "Renouncing family."
    },
    {
        id: 6, section: "Equipment", verse: 7, theme: "Ochre Robes",
        sanskrit: "गत्वा कषायवासाः त्रिदण्डं कमण्डलुम् ।",
        hindi: "गेरुआ वस्त्र धारण करके, त्रिदण्ड और कमंडलु लेकर।",
        english: "Wearing Ochre Robes, holding Tridanda and Water pot.",
        simpleExplanation: "UNIFORM: Ochre robes + Staff + Water pot = Sannyasi!",
        simpleExplanationHindi: "वेशभूषा: गेरुआ + दण्ड + कमंडलु = संन्यासी!", nanoBananaPrompt: "Ochre robes."
    },
    // Part 3: Internal Focus
    {
        id: 7, section: "Internal", verse: 8, theme: "Advaita Meditation",
        sanskrit: "बहिः सर्वं त्यक्त्वा अद्वैतभावनया अन्तःस्थं ब्रह्म ध्यायेत् ।",
        hindi: "बाहर सब त्यागकर, अद्वैत भावना से हृदय के ब्रह्म का ध्यान करे।",
        english: "Renouncing all external, with Non-dual feeling, meditate on Brahman within.",
        simpleExplanation: "MEDITATION: Drop external! ADVAITA bhavana! Brahman within!",
        simpleExplanationHindi: "ध्यान: बाहर छोड़ो! अद्वैत भावना! भीतर ब्रह्म!", nanoBananaPrompt: "Advaita meditation."
    },
    {
        id: 8, section: "Internal", verse: 9, theme: "Belly as Bowl",
        sanskrit: "उदरपात्रेण ।",
        hindi: "उदर-पात्र (पेट ही बर्तन)।",
        english: "Using stomach as bowl (eating directly).",
        simpleExplanation: "EXTREME: No bowl! Stomach IS the begging bowl!",
        simpleExplanationHindi: "चरम: बर्तन नहीं! पेट ही पात्र!", nanoBananaPrompt: "Belly as bowl."
    },
    {
        id: 9, section: "Internal", verse: 10, theme: "Contentment",
        sanskrit: "यथा लब्धेन सन्तोषं कुर्वन् चित्तं ब्रह्मणि धारयेत् ।",
        hindi: "जो मिले उसमें संतोष करते हुए, चित्त को ब्रह्म में धारण करे।",
        english: "Content with what's obtained, fix Mind on Brahman.",
        simpleExplanation: "CONTENTMENT: Whatever comes, be happy. Mind → Brahman!",
        simpleExplanationHindi: "संतोष: जो मिले उसमें खुश। मन → ब्रह्म!", nanoBananaPrompt: "Contentment practice."
    },
    {
        id: 10, section: "Internal", verse: 11, theme: "Hamsa Meditation",
        sanskrit: "हंसः सोऽहमिति ध्यात्वा ।",
        hindi: "हंस: सोऽहम् (मैं वह हंस हूँ) ऐसा ध्यान करते हुए।",
        english: "Meditating 'HAMSA SO'HAM' (I am that Swan).",
        simpleExplanation: "MANTRA: Ham-Sa-So-Ham! I am THAT Swan (Atman)!",
        simpleExplanationHindi: "मंत्र: हंस: सोऽहम्! मैं वह हंस (आत्मा)!", nanoBananaPrompt: "Hamsa Soham."
    },
    // Part 4: Prana Utkranti (Yogic Death)
    {
        id: 11, section: "Departure", verse: 12, theme: "Kindle Fire",
        sanskrit: "अपानेनाग्निं प्रज्वाल्य समानेन संयोज्य ।",
        hindi: "अपान से अग्नि प्रज्वलित करके, समान के साथ जोड़ दे।",
        english: "Kindling Fire with Apana, joining with Samana.",
        simpleExplanation: "STEP 1: Apana kindles inner fire → join Samana!",
        simpleExplanationHindi: "चरण 1: अपान से अग्नि → समान से जोड़ो!", nanoBananaPrompt: "Kindling inner fire."
    },
    {
        id: 12, section: "Departure", verse: 13, theme: "Unite Pranas",
        sanskrit: "उदानमुपसंहृत्य प्राणेन सह योजयेत् ।",
        hindi: "उदान को समेटकर प्राण के साथ जोड़ दे।",
        english: "Withdrawing Udana, unite with Prana.",
        simpleExplanation: "STEP 2: Gather Udana → unite with Prana!",
        simpleExplanationHindi: "चरण 2: उदान समेटो → प्राण से जोड़ो!", nanoBananaPrompt: "Uniting pranas."
    },
    {
        id: 13, section: "Departure", verse: 14, theme: "Rise to Throat",
        sanskrit: "ततः कण्ठादुत्तीर्य ।",
        hindi: "फिर कंठ से ऊपर ले जाए।",
        english: "Then raising from Throat.",
        simpleExplanation: "STEP 3: Raise energy through THROAT!",
        simpleExplanationHindi: "चरण 3: कंठ से ऊपर उठाओ!", nanoBananaPrompt: "Rising through throat."
    },
    {
        id: 14, section: "Departure", verse: 15, theme: "Pierce Crown",
        sanskrit: "मूर्धानं भित्त्वा ।",
        hindi: "मूर्धा (ब्रह्मरंध्र) को भेदकर।",
        english: "Piercing the Crown (Brahmarandhra).",
        simpleExplanation: "STEP 4: Pierce CROWN (Sahasrara)!",
        simpleExplanationHindi: "चरण 4: ब्रह्मरंध्र भेदो!", nanoBananaPrompt: "Piercing crown."
    },
    {
        id: 15, section: "Departure", verse: 16, theme: "Merge in Brahman",
        sanskrit: "परब्रह्मणि लीयते ।",
        hindi: "परब्रह्म में लीन हो जाए।",
        english: "Merge into Supreme Brahman.",
        simpleExplanation: "FINAL: Merge into PARABRAHMAN! Liberation!",
        simpleExplanationHindi: "अंत: परब्रह्म में लीन! मुक्ति!", nanoBananaPrompt: "Merging in Brahman."
    },
    // Part 5: Self-Realization
    {
        id: 16, section: "Realization", verse: 17, theme: "I Am Brahman",
        sanskrit: "अहं ब्रह्म अस्मि । अहं चिदस्मि । अहं आनन्दोऽस्मि ।",
        hindi: "मैं ब्रह्म हूँ। मैं चित् हूँ। मैं आनंद हूँ।",
        english: "I AM BRAHMAN. I am Consciousness. I am Bliss.",
        simpleExplanation: "REALIZATION: I = Brahman! I = Consciousness! I = Bliss!",
        simpleExplanationHindi: "अनुभव: मैं = ब्रह्म! मैं = चित्! मैं = आनंद!", nanoBananaPrompt: "I am Brahman."
    },
    {
        id: 17, section: "Realization", verse: 18, theme: "No Duality",
        sanskrit: "न मे देहो न मे प्राणाः । न मे बन्धो न मे मोक्षः ।",
        hindi: "न मेरा शरीर, न प्राण। न बंधन, न मोक्ष।",
        english: "No body is mine, no Pranas. No bondage, no liberation.",
        simpleExplanation: "BEYOND: No body! No breath! No bondage! No liberation!",
        simpleExplanationHindi: "परे: न शरीर! न प्राण! न बंधन! न मोक्ष!", nanoBananaPrompt: "Beyond duality."
    },
    {
        id: 18, section: "Realization", verse: 19, theme: "Supreme Light",
        sanskrit: "शुद्धं बुद्धं मुक्तं सत्यमानन्दमद्वयम् । परंज्योतिः स्वरूपोऽहम् ।",
        hindi: "मैं शुद्ध, बुद्ध, मुक्त, सत्य, आनंद, अद्वय। मैं परम-ज्योति स्वरूप।",
        english: "I am Pure, Awakened, Free, Truth, Bliss, Non-dual. I am SUPREME LIGHT.",
        simpleExplanation: "I AM: Pure! Awake! Free! Truth! Bliss! SUPREME LIGHT!",
        simpleExplanationHindi: "मैं: शुद्ध! जागृत! मुक्त! सत्य! आनंद! परम-ज्योति!", nanoBananaPrompt: "Supreme Light nature."
    },
    // Conclusion
    {
        id: 19, section: "Fruit", verse: 20, theme: "Kaivalya",
        sanskrit: "य एवं वेद स कैवल्यं पदं अश्नुते ।",
        hindi: "जो ऐसा जानता है, वह कैवल्य पद प्राप्त करता है।",
        english: "He who knows this attains State of KAIVALYA.",
        simpleExplanation: "FRUIT: Know this = attain KAIVALYA (absolute freedom)!",
        simpleExplanationHindi: "फल: यह जानो = कैवल्य प्राप्त!", nanoBananaPrompt: "Attaining Kaivalya."
    },
    {
        id: 20, section: "Conclusion", verse: 21, theme: "Closing",
        sanskrit: "ॐ शान्तिः शान्तिः शान्तिः । इत्युपनिषत् ॥",
        hindi: "ॐ शांति। यही उपनिषद।",
        english: "OM Peace. Thus ends the Upanishad.",
        simpleExplanation: "END: OM PEACE! Sannyasi's path complete!",
        simpleExplanationHindi: "समाप्त: ॐ शांति!", nanoBananaPrompt: "Upanishad conclusion."
    }
];

export const KUNDIKA_METADATA = {
    id: "kundika", name: "Kundika", nameSanskrit: "कुण्डिकोपनिषद्",
    veda: "Sama Veda", category: "Sannyasa",
    shlokaCount: 20, sequenceNumber: 52,
    meaning: "The Upanishad of the Water Pot (Kundika)",
    fourStages: ["Brahmacharya (Student)", "Grihastha (Householder)", "Vanaprastha (Forest)", "Sannyasa (Renunciation)"],
    monkEquipment: ["Kamandalu (Water pot)", "Shikya (Sling)", "Patra (Bowl)", "Tridanda (Staff)",
        "Paduka (Shoes)", "Kantha (Patchwork)", "Kaupina (Loincloth)", "Kashaya Vastra (Ochre)"],
    pranaUtkranti: {
        step1: "Kindle fire with Apana",
        step2: "Join with Samana",
        step3: "Withdraw Udana, unite with Prana",
        step4: "Raise through Throat",
        step5: "Pierce Crown (Brahmarandhra)",
        step6: "Merge in Parabrahman"
    },
    keyTeachings: [
        "4 Stages of Life: Student → Householder → Forest → Renunciation",
        "Sannyasa after 70 years (or earlier if detached)",
        "Monk's equipment: Water pot, Staff, Ochre robes, Loincloth",
        "ADVAITA meditation on Brahman within",
        "Contentment with whatever is obtained",
        "HAMSA SO'HAM meditation",
        "Yogic death: Apana→Samana→Udana→Prana→Throat→Crown→Brahman",
        "REALIZATION: I am Brahman, Consciousness, Bliss",
        "Beyond duality: No body, no breath, no bondage, no moksha",
        "I AM SUPREME LIGHT",
        "FRUIT: Kaivalya (Absolute Freedom)"
    ]
};
