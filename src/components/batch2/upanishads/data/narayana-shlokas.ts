// Narayana Upanishad Data (#18 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Vaishnava
// Theme: Narayana as Supreme Being, the Eight-Syllabled Mantra (Om Namo Narayanaya)
// Total: 5 Khandas with ~14 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface NarayanaDataEntry {
    id: number;
    khanda: number;
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
export const NARAYANA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह (परमात्मा) हम दोनों (गुरु-शिष्य) की रक्षा करे। हम दोनों का पालन करे। हम साथ मिलकर शक्ति अर्जित करें। हमारा अध्ययन तेजस्वी हो। हम परस्पर द्वेष न करें। ॐ शांति, शांति, शांति।",
    english: "OM! May He protect us both. May He nourish us both. May we generate spiritual energy together. May our study be brilliant. May we not hate each other. OM Peace, Peace, Peace."
};

export const NARAYANA_SHLOKAS: NarayanaDataEntry[] = [
    // Khanda 1: Creation from Narayana
    {
        id: 1,
        khanda: 1,
        verse: 1,
        theme: "Narayana's Desire to Create",
        sanskrit: "ॐ अथ पुरुषो ह वै नारायणोऽकामयत प्रजाः सृजेयेति ।",
        hindi: "ॐ। उस (परम) पुरुष नारायण ने कामना की: 'मैं प्रजा (सृष्टि) की रचना करूँ।'",
        english: "OM. Then, the Supreme Person, Narayana, desired: 'I shall create offspring.'",
        simpleExplanation: "THE FIRST DESIRE: Before creation, there was only Narayana. He wished: 'Let me create!'",
        simpleExplanationHindi: "पहली इच्छा: सृष्टि से पहले केवल नारायण थे। उन्होंने चाहा: 'मैं रचना करूँ!'",
        nanoBananaPrompt: "The Supreme Narayana in cosmic void, desiring to create the universe.",
        wordMeanings: [
            { sanskrit: "nārāyaṇa", devanagari: "नारायण", hindi: "नारायण/विष्णु", english: "Narayana/Vishnu" },
            { sanskrit: "prajāḥ sṛjeyeti", devanagari: "प्रजाः सृजेयेति", hindi: "प्रजा रचना करूँ", english: "create offspring" }
        ]
    },
    {
        id: 2,
        khanda: 1,
        verse: 2,
        theme: "Creation of Prana and Elements",
        sanskrit: "नारायणात्प्राणो जायते । मनः सर्वेन्द्रियाणि च । खं वायुर्ज्योतिरापः पृथिवी विश्वस्य धारिणी ।",
        hindi: "नारायण से प्राण उत्पन्न होता है। मन और सभी इन्द्रियां उत्पन्न होती हैं। नारायण से ही आकाश, वायु, ज्योति (अग्नि), जल और विश्व को धारण करने वाली पृथ्वी उत्पन्न होती है।",
        english: "From Narayana, Prana is born. The Mind and all the senses are born. From Him originate Ether, Air, Light, Water, and the Earth that supports all.",
        simpleExplanation: "CREATION CASCADE: Narayana → Prana → Mind → Senses → Space → Air → Fire → Water → Earth!",
        simpleExplanationHindi: "सृष्टि क्रम: नारायण → प्राण → मन → इन्द्रियां → आकाश → वायु → अग्नि → जल → पृथ्वी!",
        nanoBananaPrompt: "From Narayana emanating prana, mind, senses, and the five elements cascading into creation.",
        wordMeanings: [
            { sanskrit: "prāṇa", devanagari: "प्राण", hindi: "जीवन शक्ति", english: "life force" },
            { sanskrit: "pañcabhūta", devanagari: "पञ्चभूत", hindi: "पाँच तत्व", english: "five elements" }
        ]
    },
    {
        id: 3,
        khanda: 1,
        verse: 3,
        theme: "All Gods from Narayana",
        sanskrit: "नारायणाद् ब्रह्मा जायते । नारायणाद् रुद्रो जायते । नारायणादिन्द्रो जायते । नारायणात् प्रजापतयः प्रजायन्ते । नारायणाद् द्वादशादित्या रुद्रा वसवः सर्वाणि च छन्दांसि ।",
        hindi: "नारायण से ब्रह्मा उत्पन्न होते हैं। नारायण से रुद्र (शिव) उत्पन्न होते हैं। नारायण से इन्द्र उत्पन्न होते हैं। नारायण से प्रजापतिगण, बारह आदित्य, एकादश रुद्र, आठ वसु और सभी छंद (वेद) उत्पन्न होते हैं।",
        english: "From Narayana, Brahma is born. From Narayana, Rudra is born. From Narayana, Indra is born. From Narayana, the Prajapatis, twelve Adityas, Rudras, Vasus, and all the Vedas are born.",
        simpleExplanation: "ALL GODS FROM ONE: Brahma, Shiva, Indra, Prajapatis, Adityas, Rudras, Vasus, Vedas—ALL from Narayana!",
        simpleExplanationHindi: "सभी देव एक से: ब्रह्मा, शिव, इंद्र, प्रजापति, आदित्य, रुद्र, वसु, वेद—सब नारायण से!",
        nanoBananaPrompt: "Brahma, Shiva, Indra, and all divine beings emerging from the one Narayana.",
        wordMeanings: [
            { sanskrit: "brahmā", devanagari: "ब्रह्मा", hindi: "ब्रह्मा", english: "the Creator" },
            { sanskrit: "rudra", devanagari: "रुद्र", hindi: "शिव", english: "Shiva" },
            { sanskrit: "vasu", devanagari: "वसु", hindi: "वसु देवता", english: "Vasu deities" }
        ]
    },
    {
        id: 4,
        khanda: 1,
        verse: 4,
        theme: "Origin, Existence, Dissolution",
        sanskrit: "नारायणादेव समुत्पद्यन्ते । नारायणे प्रवर्तन्ते । नारायणे प्रलीयन्ते ।",
        hindi: "वे सब नारायण से ही उत्पन्न होते हैं; नारायण में ही प्रवर्तित (जीवित) रहते हैं; और नारायण में ही प्रलीन हो जाते हैं।",
        english: "From Narayana alone they arise; in Narayana they exist; and into Narayana they merge.",
        simpleExplanation: "THREE ACTS: Creation FROM Him, Existence IN Him, Dissolution INTO Him—all Narayana!",
        simpleExplanationHindi: "तीन क्रियाएं: उससे उत्पत्ति, उसमें अस्तित्व, उसमें विलय—सब नारायण!",
        nanoBananaPrompt: "A cosmic cycle: creation emerging from, existing in, and dissolving back into Narayana.",
        wordMeanings: [
            { sanskrit: "samutpadyante", devanagari: "समुत्पद्यन्ते", hindi: "उत्पन्न होते हैं", english: "arise" },
            { sanskrit: "pravartante", devanagari: "प्रवर्तन्ते", hindi: "रहते हैं", english: "exist" },
            { sanskrit: "pralīyante", devanagari: "प्रलीयन्ते", hindi: "विलीन होते हैं", english: "merge" }
        ]
    },
    // Khanda 2: The Eternal Nature of Narayana
    {
        id: 5,
        khanda: 2,
        verse: 1,
        theme: "Everything is Narayana",
        sanskrit: "अथ नित्यो नारायणः । ब्रह्मा नारायणः । शिवश्च नारायणः । शक्रश्च नारायणः । कालश्च नारायणः । दिशश्च नारायणः । विदिशश्च नारायणः । ऊर्ध्वं च नारायणः । अधश्च नारायणः ।",
        hindi: "वह नारायण नित्य है। ब्रह्मा नारायण हैं। शिव नारायण हैं। इन्द्र नारायण हैं। काल नारायण है। दिशाएं नारायण हैं। विदिशाएं नारायण हैं। ऊपर नारायण हैं। नीचे नारायण हैं।",
        english: "Now, Narayana is Eternal. Brahma is Narayana. Shiva is Narayana. Indra is Narayana. Time is Narayana. Directions are Narayana. Intermediate quarters are Narayana. Above is Narayana. Below is Narayana.",
        simpleExplanation: "ALL IS NARAYANA: Brahma=Narayana, Shiva=Narayana, Time=Narayana, All Directions=Narayana!",
        simpleExplanationHindi: "सब नारायण है: ब्रह्मा=नारायण, शिव=नारायण, काल=नारायण, सभी दिशाएं=नारायण!",
        nanoBananaPrompt: "All gods, time, and all directions shown as manifestations of the one eternal Narayana.",
        wordMeanings: [
            { sanskrit: "nitya", devanagari: "नित्य", hindi: "शाश्वत", english: "eternal" },
            { sanskrit: "kāla", devanagari: "काल", hindi: "समय", english: "time" },
            { sanskrit: "diśa", devanagari: "दिश", hindi: "दिशा", english: "direction" }
        ]
    },
    {
        id: 6,
        khanda: 2,
        verse: 2,
        theme: "The One Without Second",
        sanskrit: "अन्तर्बहिश्च नारायणः । नारायण एवेदं सर्वं यद्भूतं यच्च भव्यम् । निष्कलङ्को निरञ्जनो निर्विकल्पो निराख्यातः शुद्धो देव एको नारायणः । न द्वितीयोऽस्ति कश्चित् ।",
        hindi: "भीतर और बाहर नारायण हैं। यह सब कुछ—जो हो चुका है और जो होने वाला है—नारायण ही है। वह निष्कलंक, निरंजन, निर्विकल्प, अकथनीय और शुद्ध है। वह एक देव नारायण ही है; दूसरा कोई नहीं है।",
        english: "Inside and outside is Narayana. All this—past and future—is Narayana alone. He is stainless, taintless, changeless, indescribable, and pure. There is only one God, Narayana; there is no second.",
        simpleExplanation: "ONE WITHOUT SECOND: Inside, outside, past, future = Narayana. Stainless, pure. NO OTHER exists!",
        simpleExplanationHindi: "एक अद्वितीय: भीतर, बाहर, अतीत, भविष्य = नारायण। निर्मल, शुद्ध। कोई और नहीं!",
        nanoBananaPrompt: "The one Narayana pervading inside, outside, past, future—stainless and without second.",
        wordMeanings: [
            { sanskrit: "niṣkalaṅka", devanagari: "निष्कलङ्क", hindi: "निर्दोष", english: "stainless" },
            { sanskrit: "nirañjana", devanagari: "निरञ्जन", hindi: "निर्मल", english: "taintless" },
            { sanskrit: "na dvitīya", devanagari: "न द्वितीय", hindi: "दूसरा नहीं", english: "no second" }
        ]
    },
    {
        id: 7,
        khanda: 2,
        verse: 3,
        theme: "Becoming Vishnu",
        sanskrit: "य एवं वेद स विष्णुरेव भवति स विष्णुरेव भवति ।",
        hindi: "जो ऐसा जानता है, वह विष्णु ही हो जाता है। वह विष्णु ही हो जाता है।",
        english: "He who knows this becomes Vishnu Himself. He becomes Vishnu Himself.",
        simpleExplanation: "THE PROMISE: Know this truth = BECOME Vishnu! Said twice for emphasis!",
        simpleExplanationHindi: "वादा: यह सत्य जानो = विष्णु बन जाओ! महत्व के लिए दो बार कहा!",
        nanoBananaPrompt: "A devotee realizing this truth and becoming one with Vishnu.",
        wordMeanings: [
            { sanskrit: "viṣṇu", devanagari: "विष्णु", hindi: "विष्णु", english: "Vishnu (the all-pervading)" },
            { sanskrit: "bhavati", devanagari: "भवति", hindi: "हो जाता है", english: "becomes" }
        ]
    },
    // Khanda 3: The Eight-Syllabled Mantra
    {
        id: 8,
        khanda: 3,
        verse: 1,
        theme: "The Ashtakshara Mantra",
        sanskrit: "ॐ इत्यग्रे व्याहरेत् । नम इति पश्चात् । नारायणायेत्युपरिष्टात् । ॐ इत्येकाक्षरम् । नम इति द्वे अक्षरे । नारायणायेति पञ्चाक्षराणि ।",
        hindi: "सबसे पहले 'ॐ' का उच्चारण करे। उसके बाद 'नमः'। अंत में 'नारायणाय'। 'ॐ'—यह एक अक्षर है। 'नमः'—ये दो अक्षर हैं। 'नारायणाय'—ये पाँच अक्षर हैं।",
        english: "First, utter 'Om'. Then 'Namah'. Afterwards, 'Narayanaya'. 'Om' is one syllable. 'Namah' is two syllables. 'Narayanaya' is five syllables.",
        simpleExplanation: "THE 8-SYLLABLE MANTRA: OM (1) + NAMO (2) + NARAYANAYA (5) = 8 syllables total!",
        simpleExplanationHindi: "8-अक्षरी मंत्र: ॐ (1) + नमो (2) + नारायणाय (5) = कुल 8 अक्षर!",
        nanoBananaPrompt: "The sacred eight-syllabled mantra OM NAMO NARAYANAYA glowing with divine light.",
        wordMeanings: [
            { sanskrit: "aṣṭākṣara", devanagari: "अष्टाक्षर", hindi: "आठ अक्षर", english: "eight syllables" },
            { sanskrit: "oṃ namo nārāyaṇāya", devanagari: "ॐ नमो नारायणाय", hindi: "ॐ नमो नारायणाय", english: "Om, salutations to Narayana" }
        ]
    },
    {
        id: 9,
        khanda: 3,
        verse: 2,
        theme: "Benefits of the Mantra",
        sanskrit: "एतद्वै नारायणस्याष्टाक्षरं पदम् । यो ह वै नारायणस्याष्टाक्षरं पदमध्येति । अनपब्रुवः सर्वमायुरेति । विन्दते प्राजापत्यं रायस्पोषं गौपत्यं ततोऽमृतत्वमश्नुते ततोऽमृतत्वमश्नुते ।",
        hindi: "यह नारायण का अष्टाक्षर पद (मंत्र) है। जो इसका जप करता है, वह बदनामी से रहित होकर पूर्ण आयु, प्रजापति पद, धन-संपत्ति, और अमरता प्राप्त करता है।",
        english: "This is the Eight-Syllabled Mantra of Narayana. He who recites it attains full life, lordship, prosperity, and finally Immortality. He attains Immortality.",
        simpleExplanation: "MANTRA BENEFITS: Full life + Lordship + Prosperity + IMMORTALITY! Said twice!",
        simpleExplanationHindi: "मंत्र लाभ: पूर्ण आयु + स्वामित्व + समृद्धि + अमरता! दो बार कहा!",
        nanoBananaPrompt: "The eight-syllabled mantra blessing the devotee with longevity, prosperity, and immortality.",
        wordMeanings: [
            { sanskrit: "amṛtatva", devanagari: "अमृतत्व", hindi: "अमरता", english: "immortality" },
            { sanskrit: "rāyaspoṣa", devanagari: "रायस्पोष", hindi: "धन-समृद्धि", english: "prosperity" }
        ]
    },
    // Khanda 4: The Meaning of Pranava (OM)
    {
        id: 10,
        khanda: 4,
        verse: 1,
        theme: "OM as Pranava",
        sanskrit: "प्रत्यगानन्दं ब्रह्मपुरुषं प्रणवस्वरूपम् । अकार उकारो मकार इति ।",
        hindi: "वह प्रत्यगात्मा (Inner Self), आनंदस्वरूप, ब्रह्म-पुरुष प्रणव (ॐ) स्वरूप है। वह 'अ', 'उ' और 'म' (से बना) है।",
        english: "The Inner Bliss, the Brahman-Person, is of the nature of Pranava (OM). It consists of 'A', 'U', and 'M'.",
        simpleExplanation: "OM = BRAHMAN: The Inner Self of Bliss is OM itself, made of A + U + M!",
        simpleExplanationHindi: "ॐ = ब्रह्म: आनंद का आंतरिक आत्मा ॐ ही है, अ + उ + म से बना!",
        nanoBananaPrompt: "OM as the symbol of Brahman, composed of A-U-M representing the inner blissful Self.",
        wordMeanings: [
            { sanskrit: "praṇava", devanagari: "प्रणव", hindi: "ॐ", english: "the syllable OM" },
            { sanskrit: "pratyagānanda", devanagari: "प्रत्यगानन्द", hindi: "आंतरिक आनंद", english: "inner bliss" }
        ]
    },
    {
        id: 11,
        khanda: 4,
        verse: 2,
        theme: "Liberation and Vaikuntha",
        sanskrit: "तानेकधा समभवत् तदेतदोमिति । यमुक्त्वा मुच्यते योगी जन्मसंसारबन्धनात् । ॐ नमो नारायणायति मन्त्रोपासकः वैकुण्ठभुवनलोकं गमिष्यति ।",
        hindi: "ये तीनों मिलकर एक हो गए—वही 'ॐ' है। जिसका उच्चारण करके योगी जन्म-संसार बंधन से मुक्त हो जाता है। 'ॐ नमो नारायणाय' मंत्र का उपासक वैकुण्ठ लोक को जाता है।",
        english: "These became One; that is 'OM'. Uttering this, the Yogi is liberated from bondage. The worshipper of 'Om Namo Narayanaya' goes to Vaikuntha.",
        simpleExplanation: "PATH TO VAIKUNTHA: Chant OM = Freedom from rebirth. Chant the 8-syllable mantra = VAIKUNTHA!",
        simpleExplanationHindi: "वैकुण्ठ का मार्ग: ॐ जपो = पुनर्जन्म से मुक्ति। 8-अक्षरी मंत्र जपो = वैकुण्ठ!",
        nanoBananaPrompt: "A yogi chanting OM Namo Narayanaya ascending to the golden realm of Vaikuntha.",
        wordMeanings: [
            { sanskrit: "vaikuṇṭha", devanagari: "वैकुण्ठ", hindi: "विष्णु का लोक", english: "abode of Vishnu" },
            { sanskrit: "janmasaṃsāra", devanagari: "जन्मसंसार", hindi: "जन्म-मृत्यु चक्र", english: "cycle of birth" }
        ]
    },
    {
        id: 12,
        khanda: 4,
        verse: 3,
        theme: "Krishna is Brahman",
        sanskrit: "तदिदं परं पुण्डरीकं विज्ञानघनं तस्मात्तडिदाभमात्रम् । ब्रह्मण्यो देवकीपुत्रो ब्रह्मण्यो मधुसूदनः ।",
        hindi: "वह (हृदय) परम पुंडरीक (कमल) है, जो विज्ञान-घन है; वह बिजली जैसा देदीप्यमान है। वह देवकी-पुत्र (कृष्ण) ही ब्रह्म है; वह मधुसूदन ही ब्रह्म है।",
        english: "That Heart is the Supreme Lotus, a mass of Knowledge, shining like lightning. The Son of Devaki is Brahman; the Slayer of Madhu is Brahman.",
        simpleExplanation: "KRISHNA = BRAHMAN: Devaki's Son (Krishna), Madhu's Slayer = That Supreme Brahman!",
        simpleExplanationHindi: "कृष्ण = ब्रह्म: देवकी पुत्र (कृष्ण), मधुसूदन = वही परम ब्रह्म!",
        nanoBananaPrompt: "Krishna as Devaki's son, the slayer of Madhu, revealed as the Supreme Brahman.",
        wordMeanings: [
            { sanskrit: "devakīputra", devanagari: "देवकीपुत्र", hindi: "देवकी का पुत्र", english: "son of Devaki (Krishna)" },
            { sanskrit: "madhusūdana", devanagari: "मधुसूदन", hindi: "मधु का वध करने वाला", english: "slayer of Madhu (Krishna)" }
        ]
    },
    {
        id: 13,
        khanda: 4,
        verse: 4,
        theme: "Morning and Evening Recitation",
        sanskrit: "एतदथर्वशिरो योऽधीते प्रातरधीयानो रात्रिकृतं पापं नाशयति । सायमधीयानो दिवसकृतं पापं नाशयति ।",
        hindi: "जो इस अथर्वशिर का अध्ययन करता है: प्रातःकाल पढ़ने से रात्रि के पापों का नाश होता है। सायंकाल पढ़ने से दिन के पापों का नाश होता है।",
        english: "He who studies this Atharvashiras: Reciting in the morning destroys night's sins. Reciting in the evening destroys day's sins.",
        simpleExplanation: "DAILY PURIFICATION: Morning recitation = destroys night sins. Evening recitation = destroys day sins!",
        simpleExplanationHindi: "दैनिक शुद्धि: सुबह पाठ = रात के पाप नष्ट। शाम पाठ = दिन के पाप नष्ट!",
        nanoBananaPrompt: "A devotee reciting at sunrise and sunset, sins dissolving with each recitation.",
        wordMeanings: [
            { sanskrit: "prātar", devanagari: "प्रातर्", hindi: "सुबह", english: "morning" },
            { sanskrit: "sāyam", devanagari: "सायम्", hindi: "शाम", english: "evening" }
        ]
    },
    // Khanda 5: Phala Shruti
    {
        id: 14,
        khanda: 5,
        verse: 1,
        theme: "Noon Recitation and Union",
        sanskrit: "माध्यन्दिनमादित्याभिमुखोऽधीयानः पञ्चमहापातकोपपातकात्प्रमुच्यते । सर्ववेदपारायणपुण्यं लभते । नारायणसायुज्यमवाप्नोति नारायणसायुज्यमवाप्नोति ।",
        hindi: "जो दोपहर के समय सूर्य की ओर मुख करके पाठ करता है, वह पंच-महापापों से मुक्त हो जाता है। उसे सभी वेदों के पाठ का पुण्य प्राप्त होता है। वह नारायण के साथ सायुज्य (एकत्व) प्राप्त करता है।",
        english: "Reciting at noon facing the Sun, he is freed from Five Great Sins. He attains the merit of reciting all Vedas. He attains Sayujya (Union) with Narayana.",
        simpleExplanation: "NOON POWER: Recite facing Sun = freed from 5 great sins + all Vedic merit + UNION with Narayana!",
        simpleExplanationHindi: "दोपहर की शक्ति: सूर्य की ओर पाठ = 5 महापापों से मुक्ति + सभी वेद पुण्य + नारायण से एकता!",
        nanoBananaPrompt: "A devotee facing the noon sun, reciting and merging into union with Narayana.",
        wordMeanings: [
            { sanskrit: "sāyujya", devanagari: "सायुज्य", hindi: "एकता/मिलन", english: "union/merging" },
            { sanskrit: "pañcamahāpātaka", devanagari: "पञ्चमहापातक", hindi: "पाँच महापाप", english: "five great sins" }
        ]
    },
    {
        id: 15,
        khanda: 5,
        verse: 2,
        theme: "Conclusion",
        sanskrit: "य एवं वेद । इत्युपनिषत् ॥",
        hindi: "जो ऐसा जानता है (वह मुक्त है)। यही उपनिषद है।",
        english: "He who knows this (attains the Goal). Thus ends the Upanishad.",
        simpleExplanation: "THE END: Know this = Attain the Goal. This is the secret teaching!",
        simpleExplanationHindi: "समाप्त: यह जानो = लक्ष्य प्राप्त करो। यही गुप्त शिक्षा है!",
        nanoBananaPrompt: "The sacred teaching complete, a liberated soul merged in Narayana.",
        wordMeanings: [
            { sanskrit: "upaniṣat", devanagari: "उपनिषत्", hindi: "गुप्त ज्ञान", english: "secret teaching" }
        ]
    }
];

export const NARAYANA_METADATA = {
    id: "narayana",
    name: "Narayana",
    nameSanskrit: "नारायणोपनिषद्",
    veda: "Krishna Yajur Veda",
    category: "Vaishnava",
    shlokaCount: 15,
    khandaCount: 5,
    sequenceNumber: 18,
    meaning: "The Upanishad of Narayana (Vishnu)",
    alternateNames: ["Narayana Atharvashirsha"],
    keyTeachings: [
        "Narayana is the Supreme Being from whom all arises",
        "All gods (Brahma, Shiva, Indra) are Narayana",
        "The Ashtakshara Mantra: Om Namo Narayanaya (8 syllables)",
        "Everything is Narayana—no second exists",
        "Krishna (Devaki-putra, Madhusudana) is Brahman",
        "Know this = Become Vishnu Himself",
        "Morning/Evening/Noon recitation destroys sins",
        "Attain Sayujya (Union) with Narayana"
    ],
    famousVerses: {
        allFromNarayana: { id: 3, khanda: 1, verse: 3 },
        noSecond: { id: 6, khanda: 2, verse: 2 },
        ashtakshara: { id: 8, khanda: 3, verse: 1 },
        krishnaIsBrahman: { id: 12, khanda: 4, verse: 3 }
    },
    sacredMantra: {
        mantra: "ॐ नमो नारायणाय",
        transliteration: "Om Namo Narayanaya",
        syllables: 8,
        meaning: "Om, Salutations to Narayana"
    }
};
