// Bhavana Upanishad Data (#49 in Muktika Canon)
// Source: Atharva Veda | Category: Shakta/Sri Vidya
// Theme: Body = Sri Chakra, Internal Worship (Antaryaga)
// Total: 34 Sutras

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface BhavanaDataEntry {
    id: number; sutra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const BHAVANA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम कानों से कल्याणकारी सुनें। शांति।",
    english: "OM! May we hear auspicious with our ears. OM Peace."
};

export const BHAVANA_SHLOKAS: BhavanaDataEntry[] = [
    {
        id: 1, sutra: 1, theme: "Guru = Cause of All",
        sanskrit: "श्रीगुरुः सर्वकारणभूता शक्तिः ।",
        hindi: "श्री गुरु ही सब कारणों की मूल-भूत शक्ति हैं।",
        english: "The Holy Guru is the Power that is Cause of all.",
        simpleExplanation: "GURU = ROOT POWER: The Guru is the source of everything!",
        simpleExplanationHindi: "गुरु = मूल शक्ति: गुरु सब का स्रोत हैं!",
        nanoBananaPrompt: "Guru as the root power causing all existence."
    },
    {
        id: 2, sutra: 2, theme: "Body = Nine Apertures",
        sanskrit: "तेन नवरन्ध्ररूपो देहः ।",
        hindi: "वह शक्ति इस नौ रन्ध्रों वाले देह के रूप में प्रकट है।",
        english: "Through that Power, the Body with nine apertures is assumed.",
        simpleExplanation: "BODY = 9 HOLES: Eyes, ears, nostrils, mouth, below—9 openings!",
        simpleExplanationHindi: "शरीर = 9 छिद्र: आंखें, कान, नाक, मुंह, नीचे—9 द्वार!",
        nanoBananaPrompt: "Human body with nine apertures."
    },
    {
        id: 3, sutra: 3, theme: "Body = Sri Chakra",
        sanskrit: "नवचक्ररूपं श्रीचक्रम् ।",
        hindi: "यह शरीर ही नौ चक्रों वाला श्री चक्र है।",
        english: "The Sri Chakra consists of nine Chakras (Enclosures).",
        simpleExplanation: "BODY = SRI YANTRA! Your body IS the sacred 9-enclosure diagram!",
        simpleExplanationHindi: "शरीर = श्री यंत्र! तुम्हारा शरीर ही पवित्र 9-आवरण चित्र है!",
        nanoBananaPrompt: "Human body as the sacred Sri Chakra with 9 enclosures.",
        wordMeanings: [
            { sanskrit: "śrīcakra", devanagari: "श्रीचक्र", hindi: "श्री यंत्र", english: "sacred diagram" }
        ]
    },
    {
        id: 4, sutra: 5, theme: "Four Goals = Four Oceans",
        sanskrit: "पुरुषार्थाः सागराः ।",
        hindi: "पुरुषार्थ (धर्म, अर्थ, काम, मोक्ष) ही सागर हैं।",
        english: "The Purusharthas (Goals of Life) are the Oceans.",
        simpleExplanation: "4 GOALS = 4 OCEANS: Dharma, Wealth, Desire, Liberation surround the Yantra!",
        simpleExplanationHindi: "4 लक्ष्य = 4 सागर: धर्म, अर्थ, काम, मोक्ष यंत्र को घेरते हैं!",
        nanoBananaPrompt: "Four life goals as four oceans around Sri Chakra."
    },
    {
        id: 5, sutra: 6, theme: "Seven Dhatus = First Enclosure",
        sanskrit: "त्वगादि सप्तधातु ... प्रथम आवरण ।",
        hindi: "त्वचा आदि सात धातुएं प्रथम आवरण हैं।",
        english: "The seven tissues (skin, etc.) are the First Enclosure.",
        simpleExplanation: "7 TISSUES: Skin, blood, muscle, fat, bone, marrow, semen = Outer square!",
        simpleExplanationHindi: "7 धातुएं: त्वचा, रक्त, मांस, चर्बी, हड्डी, मज्जा, वीर्य = बाहरी वर्ग!",
        nanoBananaPrompt: "Seven bodily tissues as the outer enclosure."
    },
    {
        id: 6, sutra: 8, theme: "Eight Emotions = Eight Matrikas",
        sanskrit: "कामादि क्रोध लोभ मोह मद मात्सर्य पुण्य पापमयी ब्राह्म्याद्यष्टशक्तयः ।",
        hindi: "काम, क्रोध, लोभ, मोह, मद, मत्सर, पुण्य, पाप = आठ मातृकाएं।",
        english: "Lust, Anger, Greed, Delusion, Pride, Envy, Merit, Sin = Eight Matrikas.",
        simpleExplanation: "8 EMOTIONS = 8 GODDESSES: Your emotions are the Eight Mother Shaktis!",
        simpleExplanationHindi: "8 भावनाएं = 8 देवियां: तुम्हारी भावनाएं आठ मातृ-शक्तियां हैं!",
        nanoBananaPrompt: "Eight emotions as the Eight Matrika goddesses."
    },
    {
        id: 7, sutra: 11, theme: "14 Nadis = 14 Triangles",
        sanskrit: "अलम्बुसा कुहूः ... इड़ा पिंगला सुषुम्ना चेति चतुर्दश नाड्यः ।",
        hindi: "अलम्बुसा, कुहू... इड़ा, पिंगला, सुषुम्ना = 14 नाड़ियां = 14 शक्तियां।",
        english: "14 Nadis (Ida, Pingala, Sushumna, etc.) = 14 Shaktis.",
        simpleExplanation: "14 NADIS = 14 TRIANGLES: Your energy channels map to Sri Chakra triangles!",
        simpleExplanationHindi: "14 नाड़ियां = 14 त्रिकोण: तुम्हारी ऊर्जा चैनल श्री चक्र त्रिकोणों में मैप होती हैं!",
        nanoBananaPrompt: "Fourteen nadis as fourteen triangles of Sri Chakra."
    },
    {
        id: 8, sutra: 12, theme: "10 Pranas = 10 Outer Triangles",
        sanskrit: "प्राणापानव्यानोदानसमान... दश वायवः ।",
        hindi: "प्राण, अपान, व्यान, उदान, समान... = दस वायु = दस शक्तियां।",
        english: "10 Vital Airs = 10 Outer Deities.",
        simpleExplanation: "10 PRANAS = 10 TRIANGLES: Your life-breaths are the outer triangle deities!",
        simpleExplanationHindi: "10 प्राण = 10 त्रिकोण: तुम्हारी प्राण-वायु बाहरी त्रिकोण देवता हैं!",
        nanoBananaPrompt: "Ten pranas as ten triangles of Sri Chakra."
    },
    {
        id: 9, sutra: 15, theme: "Five Tanmatras = Five Arrows",
        sanskrit: "शब्दादि तन्मात्राः पञ्च पुष्पबाणाः ।",
        hindi: "शब्द आदि पाँच तन्मात्र = पाँच पुष्प-बाण।",
        english: "Five Tanmatras (Sound, etc.) = Five Flower Arrows.",
        simpleExplanation: "5 SENSES = 5 ARROWS: Sound, touch, sight, taste, smell are Devi's arrows!",
        simpleExplanationHindi: "5 इंद्रियां = 5 बाण: शब्द, स्पर्श, रूप, रस, गंध देवी के बाण हैं!",
        nanoBananaPrompt: "Five tanmatras as Devi's five flower arrows."
    },
    {
        id: 10, sutra: 15, theme: "Mind = Sugarcane Bow",
        sanskrit: "मन इक्षुधनुः । रागः पाशः । द्वेषोऽङ्कुशः ।",
        hindi: "मन = गन्ने का धनुष। राग = पाश। द्वेष = अंकुश।",
        english: "Mind = Sugarcane Bow. Attachment = Noose. Aversion = Goad.",
        simpleExplanation: "DEVI'S WEAPONS: Mind=Bow, Attachment=Rope, Aversion=Goad, Senses=Arrows!",
        simpleExplanationHindi: "देवी के हथियार: मन=धनुष, राग=पाश, द्वेष=अंकुश, इंद्रियां=बाण!",
        nanoBananaPrompt: "Mind as bow, attachment as noose, aversion as goad."
    },
    {
        id: 11, sutra: 17, theme: "Self = Lalita",
        sanskrit: "सदानन्दपूर्णस्वात्मैव परदेवता ललिता ।",
        hindi: "सदानन्द-पूर्ण स्व-आत्मा ही पर-देवता ललिता हैं।",
        english: "The Self, full of Eternal Bliss, is Supreme Goddess Lalita.",
        simpleExplanation: "YOU ARE LALITA! Your blissful Self IS the Supreme Goddess!",
        simpleExplanationHindi: "तुम ललिता हो! तुम्हारी आनंदमय आत्मा ही परम देवी है!",
        nanoBananaPrompt: "The blissful Self as Goddess Lalita in the bindu."
    },
    {
        id: 12, sutra: 20, theme: "No Difference",
        sanskrit: "अहंत्वमस्ति न भेदोऽस्ति ।",
        hindi: "'मैं' और 'तुम' (साधक और देवी) में कोई भेद नहीं।",
        english: "There is no difference between 'I' and 'You'.",
        simpleExplanation: "NO SEPARATION: Worshipper = Worshipped = ONE!",
        simpleExplanationHindi: "कोई अलगाव नहीं: पूजक = पूज्य = एक!",
        nanoBananaPrompt: "No difference between worshipper and goddess."
    },
    {
        id: 13, sutra: 23, theme: "Unity = Tarpana",
        sanskrit: "ज्ञाता ज्ञानं ज्ञेयं ... एकीकरणं तर्पणम् ।",
        hindi: "ज्ञाता, ज्ञान, ज्ञेय का एकीकरण = तर्पण।",
        english: "Unification of Knower, Knowledge, Known = Tarpanam (Offering).",
        simpleExplanation: "REAL OFFERING: Unite knower + knowing + known = TRUE worship!",
        simpleExplanationHindi: "सच्चा अर्पण: ज्ञाता + ज्ञान + ज्ञेय को एक करो = सच्ची पूजा!",
        nanoBananaPrompt: "Unity of knower, knowledge, known as offering."
    },
    {
        id: 14, sutra: 24, theme: "Equanimity = Homa",
        sanskrit: "शुभ्राशुभ्रयोः समत्वभावनं होमः ।",
        hindi: "पुण्य-पाप में सम-भाव = होम।",
        english: "Viewing pure and impure with Equanimity = Homa (Fire-offering).",
        simpleExplanation: "REAL FIRE RITUAL: See good and bad equally = TRUE Homa!",
        simpleExplanationHindi: "सच्चा हवन: अच्छा-बुरा समान देखो = सच्चा होम!",
        nanoBananaPrompt: "Equanimity towards good and bad as true Homa."
    },
    {
        id: 15, sutra: 26, theme: "3 Muhurtas = Jivanmukti",
        sanskrit: "एवं मुहुर्तत्रयं भावनापरो जीवन्मुक्तो भवति ।",
        hindi: "तीन मुहूर्त (144 मिनट) इस भावना में = जीवनमुक्त।",
        english: "He who contemplates thus for 3 Muhurtas becomes Jivanmukta.",
        simpleExplanation: "2.5 HOURS: Just 144 minutes of this meditation = LIBERATED WHILE ALIVE!",
        simpleExplanationHindi: "2.5 घंटे: बस 144 मिनट यह ध्यान = जीते जी मुक्त!",
        nanoBananaPrompt: "Three muhurtas of contemplation leading to liberation."
    },
    {
        id: 16, sutra: 30, theme: "Becomes Shiva",
        sanskrit: "न तत्र शोको न पापं । स एव शिवः ।",
        hindi: "वहाँ न शोक, न पाप। वह स्वयं शिव है।",
        english: "There is no grief, no sin. He alone is Shiva.",
        simpleExplanation: "FINAL STATE: No sorrow, no sin—YOU BECOME SHIVA!",
        simpleExplanationHindi: "अंतिम अवस्था: न दुख, न पाप—तुम शिव बन जाते हो!",
        nanoBananaPrompt: "Becoming Shiva—beyond grief and sin."
    }
];

export const BHAVANA_METADATA = {
    id: "bhavana", name: "Bhavana", nameSanskrit: "भावनोपनिषद्",
    veda: "Atharva Veda", category: "Shakta/Sri Vidya", shlokaCount: 16, fullVerseCount: 34, sequenceNumber: 49,
    sriChakraMapping: {
        nineApertures: "Body = Sri Yantra",
        sevenDhatus: "Outer square",
        eightEmotions: "Eight Matrikas",
        fourteenNadis: "14 triangles",
        tenPranas: "10 outer triangles",
        bindu: "Self = Lalita"
    },
    deviWeapons: { bow: "Mind", arrows: "5 Senses", noose: "Attachment", goad: "Aversion" },
    liberationTime: "3 Muhurtas (144 minutes)"
};

export const getBhavanaSutra = (sutra: number) => BHAVANA_SHLOKAS.find(s => s.sutra === sutra);
