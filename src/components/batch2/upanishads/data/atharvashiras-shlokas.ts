// Atharvashiras Upanishad Data (#22 in Muktika Canon)
// Source: Atharva Veda | Category: Shaiva
// Theme: Rudra's Declaration of Divinity, Etymology of Divine Names, Pasupata Vrata (Ash Ritual)
// Total: 7 Khandas with ~30 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface AtharvashirasDataEntry {
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
export const ATHARVASHIRAS_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः । स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः । व्यशेम देवहितं यदायुः ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हे देवगण! हम कानों से कल्याणकारी वचन सुनें। यज्ञ करते हुए हम आँखों से कल्याणकारी दृश्य देखें। हमारे अंग और शरीर दृढ़ हों। ॐ शांति, शांति, शांति।",
    english: "OM! O Gods, may we hear what is auspicious. May we see what is auspicious. With strong limbs, may we enjoy the life allotted by the Gods. OM Peace, Peace, Peace."
};

export const ATHARVASHIRAS_SHLOKAS: AtharvashirasDataEntry[] = [
    // Khanda 1: The Revelation of Rudra
    {
        id: 1,
        khanda: 1,
        verse: 1,
        theme: "Who Are You?",
        sanskrit: "ॐ देवा ह वै स्वर्गं लोकमायंस्ते रुद्रमपृच्छन् को भवानिति ।",
        hindi: "ॐ। देवतागण स्वर्ग लोक में गए और उन्होंने रुद्र से पूछा: 'आप कौन हैं?' (Ko Bhavan?)",
        english: "OM. The Gods went to the Heavenly World and asked Rudra: 'Who are You?'",
        simpleExplanation: "THE GREAT QUESTION: The gods ask Rudra the ultimate question: 'WHO ARE YOU?'",
        simpleExplanationHindi: "महान प्रश्न: देवता रुद्र से परम प्रश्न पूछते हैं: 'आप कौन हैं?'",
        nanoBananaPrompt: "The gods in heaven asking Rudra the great question: Who are You?",
        wordMeanings: [
            { sanskrit: "ko bhavān", devanagari: "को भवान्", hindi: "आप कौन हैं", english: "Who are You?" },
            { sanskrit: "rudra", devanagari: "रुद्र", hindi: "रुद्र/शिव", english: "Rudra/Shiva" }
        ]
    },
    {
        id: 2,
        khanda: 1,
        verse: 2,
        theme: "I Alone Exist",
        sanskrit: "सोऽब्रवीदहमेकः प्रथममासं वर्तामि च भविष्यामि च नान्यः कश्चिन्मत्तो व्यतिरिक्त इति ।",
        hindi: "उन्होंने (रुद्र ने) कहा: 'मैं अकेला ही आरंभ में था; मैं ही अब हूँ; और मैं ही भविष्य में रहूँगा। मुझसे भिन्न कोई दूसरा नहीं है।'",
        english: "He replied: 'I alone was at the Beginning; I am now; and I will be. There is none other distinct from Me.'",
        simpleExplanation: "RUDRA'S ANSWER: 'I was, I am, I will be. NO ONE else exists apart from Me!'",
        simpleExplanationHindi: "रुद्र का उत्तर: 'मैं था, मैं हूँ, मैं रहूँगा। मुझसे अलग कोई नहीं!'",
        nanoBananaPrompt: "Rudra declaring: I alone was, am, and will be—none other exists.",
        wordMeanings: [
            { sanskrit: "eka", devanagari: "एक", hindi: "अकेला/एक", english: "one/alone" },
            { sanskrit: "prathamam", devanagari: "प्रथमम्", hindi: "पहले/आरंभ में", english: "at first/beginning" }
        ]
    },
    {
        id: 3,
        khanda: 1,
        verse: 3,
        theme: "I Am Everything",
        sanskrit: "सोऽन्तरादन्तरं प्राविशत् दिशश्चान्तरं प्राविशत् । सोऽहं नित्यानित्यः सोऽहं व्यक्ताव्यक्तः । सोऽहं ब्रह्माब्रह्म सोऽहं प्राञ्चः प्रत्यञ्चः । सोऽहं दक्षिणतः उदञ्चः । सोऽहमधश्चोर्ध्वं च दिशश्च विदिशश्च ।",
        hindi: "'वह मैं अंतर के भी अंतर में प्रवेश कर गया। मैं नित्य और अनित्य हूँ। मैं व्यक्त और अव्यक्त हूँ। मैं ब्रह्म और अब्रह्म हूँ। मैं पूर्व-पश्चिम, दक्षिण-उत्तर, नीचे-ऊपर, सभी दिशाएं और कोने हूँ।'",
        english: "'I entered the innermost. I am Eternal and Non-Eternal, Manifest and Unmanifest, Brahman and Non-Brahman. I am East, West, South, North, Below, Above, all Directions.'",
        simpleExplanation: "ALL OPPOSITES: I am eternal AND non-eternal, manifest AND unmanifest, ALL directions!",
        simpleExplanationHindi: "सभी विपरीत: मैं नित्य और अनित्य, व्यक्त और अव्यक्त, सभी दिशाएं हूँ!",
        nanoBananaPrompt: "Rudra as all directions, all opposites—eternal and temporal, manifest and hidden.",
        wordMeanings: [
            { sanskrit: "nitya-anitya", devanagari: "नित्यानित्य", hindi: "नित्य और अनित्य", english: "eternal and non-eternal" },
            { sanskrit: "vyakta-avyakta", devanagari: "व्यक्ताव्यक्त", hindi: "व्यक्त और अव्यक्त", english: "manifest and unmanifest" }
        ]
    },
    {
        id: 4,
        khanda: 1,
        verse: 4,
        theme: "All Forms Are Me",
        sanskrit: "सोऽहं पुमान् पुमांश्च स्त्रियश्च । सोऽहं सावित्र्यहं गायत्री । सोऽहं त्रिष्टुब्जगत्यनुष्टुप् च । सोऽहं छन्दोऽहं गार्हपत्यो दक्षिणाग्निराहवनीयः । अहमेव सत्यः । सोऽहं गौरहं गौरी । सोऽहमहं ज्येष्ठः । सोऽहं श्रेष्ठः । सोऽहं वरिष्ठः । सोऽहं आपः । सोऽहं तेजः ।",
        hindi: "'मैं पुरुष हूँ और स्त्रियाँ भी। मैं सावित्री, गायत्री हूँ। मैं त्रिष्टुप, जगती, अनुष्टुप छंद हूँ। मैं तीन अग्नियां हूँ। मैं ही सत्य हूँ। मैं गौ, गौरी हूँ। मैं ज्येष्ठ, श्रेष्ठ, वरिष्ठ हूँ। मैं जल और तेज हूँ।'",
        english: "'I am Man and Woman. I am Savitri and Gayatri. I am all meters. I am the three fires. I am Truth. I am Cow and Gauri. I am Eldest, Best, Chief. I am Water and Light.'",
        simpleExplanation: "ALL GENDERS, MANTRAS, FIRES: Male, Female, Gayatri, all meters, all fires, Water, Light = ME!",
        simpleExplanationHindi: "सभी लिंग, मंत्र, अग्नियां: पुरुष, स्त्री, गायत्री, सभी छंद, सभी अग्नियां, जल, तेज = मैं!",
        nanoBananaPrompt: "Rudra as male and female, all mantras, all sacred fires, water, and light.",
        wordMeanings: [
            { sanskrit: "gāyatrī", devanagari: "गायत्री", hindi: "गायत्री मंत्र", english: "Gayatri mantra" },
            { sanskrit: "satya", devanagari: "सत्य", hindi: "सत्य", english: "Truth" }
        ]
    },
    {
        id: 5,
        khanda: 1,
        verse: 5,
        theme: "All Vedas Are Me",
        sanskrit: "सोऽहमृग्यजुस्सामाथर्वाङ्गिरसः । सोऽहमक्षरमहं क्षरम् । सोऽहं गुह्यमहं गोप्यम् । सोऽहमरण्यमहं पुष्करम् । सोऽहं पवित्रम् । सोऽहमग्रं च मध्यं च बहिश्च । पुरस्ताज्ज्योतिरित्यहमेव सर्वेभ्यो मामेव सः ।",
        hindi: "'मैं ऋग्, यजुर्, साम और अथर्व वेद हूँ। मैं अक्षर और क्षर हूँ। मैं गुह्य और गोप्य हूँ। मैं वन और कमल हूँ। मैं पवित्र हूँ। मैं आदि, मध्य और अंत हूँ। जो सबके आगे ज्योति है—वह मैं ही हूँ।'",
        english: "'I am Rig, Yajur, Sama, Atharva Vedas. I am Imperishable and Perishable. I am Secret and Hidden. I am Forest and Lotus. I am Pure. I am Beginning, Middle, End. The Light before all is Me alone.'",
        simpleExplanation: "ALL VEDAS, ALL STATES: 4 Vedas, imperishable AND perishable, beginning-middle-end = ME!",
        simpleExplanationHindi: "सभी वेद, सभी अवस्थाएं: 4 वेद, अक्षर और क्षर, आदि-मध्य-अंत = मैं!",
        nanoBananaPrompt: "Rudra as the four Vedas, the imperishable and perishable, the light before all.",
        wordMeanings: [
            { sanskrit: "ṛg-yajus-sāma-atharva", devanagari: "ऋग्यजुस्सामाथर्व", hindi: "चार वेद", english: "four Vedas" },
            { sanskrit: "akṣara-kṣara", devanagari: "अक्षरक्षर", hindi: "अविनाशी-नाशवान", english: "imperishable-perishable" }
        ]
    },
    // Khanda 2: The Gods Realize Rudra
    {
        id: 6,
        khanda: 2,
        verse: 1,
        theme: "All Gods Are Rudra",
        sanskrit: "यो वै रुद्रः स भगवान् यश्च ब्रह्मा तस्मै वै नमोनमः । यो वै रुद्रः स भगवान् यश्च विष्णुस्तस्मै वै नमोनमः । यो वै रुद्रः स भगवान् यश्च स्कन्दस्तस्मै वै नमोनमः । यो वै रुद्रः स भगवान् यश्चेन्द्रस्तस्मै वै नमोनमः । यो वै रुद्रः स भगवान् यश्चाग्निस्तस्मै वै नमोनमः ।",
        hindi: "'जो रुद्र है, वही भगवान ब्रह्मा है; उसको नमस्कार। जो रुद्र है, वही विष्णु है; उसको नमस्कार। जो रुद्र है, वही स्कन्द है; उसको नमस्कार। जो रुद्र है, वही इन्द्र है; उसको नमस्कार। जो रुद्र है, वही अग्नि है; उसको नमस्कार।'",
        english: "'He who is Rudra, He is Brahma; salutations. He who is Rudra, He is Vishnu; salutations. He who is Rudra, He is Skanda; salutations. He who is Rudra, He is Indra; salutations. He who is Rudra, He is Agni; salutations.'",
        simpleExplanation: "ALL GODS = RUDRA: Brahma=Rudra, Vishnu=Rudra, Skanda=Rudra, Indra=Rudra, Agni=Rudra!",
        simpleExplanationHindi: "सभी देव = रुद्र: ब्रह्मा=रुद्र, विष्णु=रुद्र, स्कन्द=रुद्र, इंद्र=रुद्र, अग्नि=रुद्र!",
        nanoBananaPrompt: "Brahma, Vishnu, Skanda, Indra, Agni all revealed as Rudra—the gods bowing.",
        wordMeanings: [
            { sanskrit: "namo namaḥ", devanagari: "नमोनमः", hindi: "नमस्कार नमस्कार", english: "salutations, salutations" }
        ]
    },
    {
        id: 7,
        khanda: 2,
        verse: 2,
        theme: "Elements and Worlds Are Rudra",
        sanskrit: "यो वै रुद्रः स भगवान् यश्च वायुस्तस्मै वै नमोनमः । यो वै रुद्रः स भगवान् यश्च सूर्यस्तस्मै वै नमोनमः । यो वै रुद्रः स भगवान् यच्च भूस्तस्मै वै नमोनमः । यो वै रुद्रः स भगवान् यच्च महस्तस्मै वै नमोनमः ।",
        hindi: "'जो रुद्र है, वही वायु है... वही सूर्य है... वही भूः (पृथ्वी) है... वही महः (महर्लोक) है। उसको बार-बार नमस्कार।'",
        english: "'He who is Rudra, He is Vayu... Surya... Earth... Mahah. To Him salutations, salutations.'",
        simpleExplanation: "ELEMENTS = RUDRA: Air, Sun, Earth, all worlds = Rudra! Salutations!",
        simpleExplanationHindi: "तत्व = रुद्र: वायु, सूर्य, पृथ्वी, सभी लोक = रुद्र! नमस्कार!",
        nanoBananaPrompt: "The elements—air, sun, earth, and all worlds—revealed as manifestations of Rudra.",
        wordMeanings: [
            { sanskrit: "vāyu", devanagari: "वायु", hindi: "वायु/हवा", english: "wind/air" },
            { sanskrit: "sūrya", devanagari: "सूर्य", hindi: "सूर्य", english: "sun" }
        ]
    },
    // Khanda 3: The Universal Form
    {
        id: 8,
        khanda: 3,
        verse: 1,
        theme: "Bhuh Bhuvah Svah",
        sanskrit: "ॐ भूर्भुवःस्वस्तस्मै वै नमोनमः । यस्यैतदन्तं मध्यमं च शीर्षं तस्मै वै नमोनमः । विश्वं भूतं भव्यं च शीर्षं तस्मै वै नमोनमः ।",
        hindi: "'ॐ भूः भुवः स्वः—जो इन लोकों का स्वरूप है, उसे नमस्कार। जिसका यह जगत अंत, मध्य और शीर्ष है, उसे नमस्कार। विश्व, भूत और भविष्य जिसका मस्तक है, उसे नमस्कार।'",
        english: "'OM Bhuh Bhuvah Svah—to Him salutations. He whose End, Middle, Head is all this; whose Head is Universe, Past, Future—salutations.'",
        simpleExplanation: "THREE WORLDS: Bhuh-Bhuvah-Svah = His body. Past-Present-Future = His head!",
        simpleExplanationHindi: "तीन लोक: भूः-भुवः-स्वः = उसका शरीर। भूत-वर्तमान-भविष्य = उसका मस्तक!",
        nanoBananaPrompt: "Rudra as the three worlds, with past-present-future as His cosmic head.",
        wordMeanings: [
            { sanskrit: "bhūr-bhuvaḥ-svaḥ", devanagari: "भूर्भुवःस्वः", hindi: "तीन लोक", english: "three worlds" }
        ]
    },
    {
        id: 9,
        khanda: 3,
        verse: 2,
        theme: "Rudra is One",
        sanskrit: "एकोऽपि रुद्रो न द्वितीयाय तस्थे । तुरीयमिमं लोकमीशते पुरुषो योऽयमेकः ।",
        hindi: "'रुद्र एक ही है, दूसरे के लिए कोई स्थान नहीं। वह एक पुरुष ही इस तुरीय लोक और सभी लोकों पर शासन करता है।'",
        english: "'Rudra is One; there is no place for a second. This One Person rules the Fourth (Turiya) world and all.'",
        simpleExplanation: "ONE WITHOUT SECOND: Rudra is ONE. No room for any second! He rules Turiya!",
        simpleExplanationHindi: "एक अद्वितीय: रुद्र एक है। दूसरे के लिए जगह नहीं! वह तुरीय पर राज करता है!",
        nanoBananaPrompt: "The One Rudra ruling the fourth state (Turiya) and all worlds—no second exists.",
        wordMeanings: [
            { sanskrit: "eka", devanagari: "एक", hindi: "एक", english: "one" },
            { sanskrit: "turīya", devanagari: "तुरीय", hindi: "चौथा/तुरीय", english: "the fourth state" }
        ]
    },
    // Khanda 4: Etymology of Divine Names
    {
        id: 10,
        khanda: 4,
        verse: 1,
        theme: "Why 'OM'?",
        sanskrit: "अथ कस्मादुच्यते ॐ । यस्मादुच्चार्यमाण एव सर्वं शरीरं उन्नमयति । तस्मादुच्यते ॐ ।",
        hindi: "उसे 'ॐ' क्यों कहते हैं? क्योंकि उच्चारण करते ही वह सारे शरीर को ऊपर उठाता (Unnamayati) है। इसलिए 'ॐ' कहते हैं।",
        english: "Why 'OM'? Because when uttered, He elevates (Unnamayati) the whole body. Therefore 'OM'.",
        simpleExplanation: "OM = ELEVATION: When you say OM, your entire being is LIFTED UP!",
        simpleExplanationHindi: "ॐ = उत्थान: जब तुम ॐ बोलते हो, तुम्हारा पूरा अस्तित्व ऊपर उठता है!",
        nanoBananaPrompt: "The syllable OM elevating the entire body and spirit upward.",
        wordMeanings: [
            { sanskrit: "unnamayati", devanagari: "उन्नमयति", hindi: "ऊपर उठाता है", english: "elevates" }
        ]
    },
    {
        id: 11,
        khanda: 4,
        verse: 2,
        theme: "Why 'Pranava'?",
        sanskrit: "अथ कस्मादुच्यते प्रणवः । यस्मादुच्चार्यमाण एव ऋग्यजुस्सामाथर्वाङ्गिरसः ब्रह्म ब्राह्मणेभ्यः प्रणामयति । तस्मादुच्यते प्रणवः ।",
        hindi: "उसे 'प्रणव' क्यों कहते हैं? क्योंकि उच्चारण करते ही वह वेदों को ब्राह्मणों के प्रति प्रणाम कराता (Pranamayati) है। इसलिए 'प्रणव'।",
        english: "Why 'Pranava'? Because when uttered, He causes the Vedas to bow (Pranamayati) to the Brahmins. Therefore 'Pranava'.",
        simpleExplanation: "PRANAVA = BOWING: When uttered, all Vedic knowledge bows/is delivered!",
        simpleExplanationHindi: "प्रणव = प्रणाम: उच्चारण करने पर सभी वैदिक ज्ञान प्रणाम करता/पहुंचता है!",
        nanoBananaPrompt: "The Pranava causing all Vedic knowledge to bow and flow to the seeker.",
        wordMeanings: [
            { sanskrit: "praṇamayati", devanagari: "प्रणामयति", hindi: "प्रणाम कराता है", english: "causes to bow" }
        ]
    },
    {
        id: 12,
        khanda: 4,
        verse: 3,
        theme: "Why 'All-Pervading'?",
        sanskrit: "अथ कस्मादुच्यते सर्वव्यापी । यस्मादुच्चार्यमाण एव सर्वान् लोकान् व्याप्नोति स्नेहो यथा पललपिण्डं शान्तमूलमोतप्रोतमनुव्याप्तो व्यतिषक्तः । तस्मादुच्यते सर्वव्यापी ।",
        hindi: "उसे 'सर्वव्यापी' क्यों कहते हैं? क्योंकि उच्चारण करते ही वह सभी लोकों में व्याप्त हो जाता है—जैसे तेल तिल में व्याप्त होता है। इसलिए 'सर्वव्यापी'।",
        english: "Why 'All-Pervading'? Because when uttered, He pervades all worlds—like oil pervades sesame. Therefore 'All-Pervading'.",
        simpleExplanation: "ALL-PERVADING: He pervades everything like oil pervades sesame seeds!",
        simpleExplanationHindi: "सर्वव्यापी: वह सब में व्याप्त है जैसे तेल तिल में व्याप्त है!",
        nanoBananaPrompt: "The All-Pervading One permeating all worlds like oil in sesame seeds.",
        wordMeanings: [
            { sanskrit: "vyāpnoti", devanagari: "व्याप्नोति", hindi: "व्याप्त होता है", english: "pervades" },
            { sanskrit: "sneha", devanagari: "स्नेह", hindi: "तेल", english: "oil" }
        ]
    },
    {
        id: 13,
        khanda: 4,
        verse: 4,
        theme: "Why 'Infinite'?",
        sanskrit: "अथ कस्मादुच्यते अनन्तः । यस्मादुच्चार्यमाण एव आद्यन्तं नोपलभ्यते तिर्यगूर्ध्वमधस्ताच्च । तस्मादुच्यते अनन्तः ।",
        hindi: "उसे 'अनंत' क्यों कहते हैं? क्योंकि उच्चारण करने पर उसका आदि और अंत नहीं मिलता—न तिरछा, न ऊपर, न नीचे। इसलिए 'अनंत'।",
        english: "Why 'Infinite'? Because when uttered, no beginning or end is found—neither across, above, nor below. Therefore 'Infinite'.",
        simpleExplanation: "INFINITE: No beginning, no end—in any direction! THAT is why He is Ananta!",
        simpleExplanationHindi: "अनंत: कोई आदि नहीं, कोई अंत नहीं—किसी भी दिशा में! इसलिए वह अनंत है!",
        nanoBananaPrompt: "The Infinite One with no beginning or end in any direction.",
        wordMeanings: [
            { sanskrit: "ananta", devanagari: "अनन्त", hindi: "अनंत/असीम", english: "infinite/endless" }
        ]
    },
    {
        id: 14,
        khanda: 4,
        verse: 5,
        theme: "Why 'Tara' (Saviour)?",
        sanskrit: "अथ कस्मादुच्यते तारम् । यस्मादुच्चार्यमाण एव गर्भजन्मजरामरणसंसारमहाभयात् तारयति । तस्मादुच्यते तारम् ।",
        hindi: "उसे 'तार' क्यों कहते हैं? क्योंकि उच्चारण करते ही वह गर्भ, जन्म, बुढ़ापा, मृत्यु और संसार के महाभय से तार (Tarayati - पार करा) देता है। इसलिए 'तार'।",
        english: "Why 'Tara' (Saviour)? Because when uttered, He saves (Tarayati) from the great fear of womb, birth, old age, death, and Samsara. Therefore 'Tara'.",
        simpleExplanation: "TARA = SAVIOUR: Saves from womb, birth, old age, death, rebirth cycle!",
        simpleExplanationHindi: "तार = उद्धारक: गर्भ, जन्म, बुढ़ापा, मृत्यु, पुनर्जन्म चक्र से बचाता है!",
        nanoBananaPrompt: "The Tara (Saviour) rescuing souls from the cycle of birth, death, and rebirth.",
        wordMeanings: [
            { sanskrit: "tārayati", devanagari: "तारयति", hindi: "पार करता है/बचाता है", english: "saves/crosses over" }
        ]
    },
    {
        id: 15,
        khanda: 4,
        verse: 6,
        theme: "Why 'Shukla'?",
        sanskrit: "अथ कस्मादुच्यते शुक्लम् । यस्मादुच्चार्यमाण एव क्लेशं दुःखीभवति श्लथते । तस्मादुच्यते शुक्लम् ।",
        hindi: "उसे 'शुक्ल' क्यों कहते हैं? क्योंकि उच्चारण करते ही क्लेश और दुख शिथिल (Shlathate) हो जाते हैं। इसलिए 'शुक्ल'।",
        english: "Why 'Shukla'? Because when uttered, afflictions and sorrows wither away (Shlathate). Therefore 'Shukla'.",
        simpleExplanation: "SHUKLA = PURE WHITE: Afflictions and sorrows WITHER AWAY!",
        simpleExplanationHindi: "शुक्ल = श्वेत/शुद्ध: क्लेश और दुख मुरझा जाते हैं!",
        nanoBananaPrompt: "The pure white Shukla dissolving all afflictions and sorrows.",
        wordMeanings: [
            { sanskrit: "śukla", devanagari: "शुक्ल", hindi: "शुक्ल/श्वेत", english: "white/pure" },
            { sanskrit: "ślathate", devanagari: "श्लथते", hindi: "शिथिल होता है", english: "withers away" }
        ]
    },
    {
        id: 16,
        khanda: 4,
        verse: 7,
        theme: "Why 'Subtle'?",
        sanskrit: "अथ कस्मादुच्यते सूक्ष्मम् । यस्मादुच्चार्यमाण एव सूक्ष्मो भूत्वा शरीराण्यधितिष्ठति । तस्मादुच्यते सूक्ष्मम् ।",
        hindi: "उसे 'सूक्ष्म' क्यों कहते हैं? क्योंकि उच्चारण करते ही वह सूक्ष्म होकर शरीरों में प्रवेश करता है। इसलिए 'सूक्ष्म'।",
        english: "Why 'Subtle'? Because when uttered, becoming subtle, He resides in bodies. Therefore 'Subtle'.",
        simpleExplanation: "SUKSHMA = SUBTLE: He becomes so fine He enters and dwells in all bodies!",
        simpleExplanationHindi: "सूक्ष्म: वह इतना महीन हो जाता है कि सभी शरीरों में प्रवेश करता है!",
        nanoBananaPrompt: "The Subtle One becoming infinitely fine to dwell within all bodies.",
        wordMeanings: [
            { sanskrit: "sūkṣma", devanagari: "सूक्ष्म", hindi: "सूक्ष्म/महीन", english: "subtle/fine" }
        ]
    },
    {
        id: 17,
        khanda: 4,
        verse: 8,
        theme: "Why 'Vaidyuta' (Lightning)?",
        sanskrit: "अथ कस्मादुच्यते वैद्युतम् । यस्मादुच्चार्यमाण एव महति तमसि द्योतयति । तस्मादुच्यते वैद्युतम् ।",
        hindi: "उसे 'वैद्युत' क्यों कहते हैं? क्योंकि उच्चारण करते ही वह महान अंधकार में प्रकाश (Dyotayati) कर देता है। इसलिए 'वैद्युत'।",
        english: "Why 'Vaidyuta'? Because when uttered, He illumines (Dyotayati) the great darkness. Therefore 'Vaidyuta'.",
        simpleExplanation: "VAIDYUTA = LIGHTNING: He ILLUMINES the great darkness like lightning!",
        simpleExplanationHindi: "वैद्युत = बिजली: वह महान अंधकार को बिजली की तरह प्रकाशित करता है!",
        nanoBananaPrompt: "Lightning illuminating great darkness—Vaidyuta dispelling ignorance.",
        wordMeanings: [
            { sanskrit: "dyotayati", devanagari: "द्योतयति", hindi: "प्रकाशित करता है", english: "illumines" }
        ]
    },
    {
        id: 18,
        khanda: 4,
        verse: 9,
        theme: "Why 'Parabrahman'?",
        sanskrit: "अथ कस्मादुच्यते परब्रह्म । यस्मात्परं परं बृहद्बृहन्तं बृंहयति । तस्मादुच्यते परब्रह्म ।",
        hindi: "उसे 'परब्रह्म' क्यों कहते हैं? क्योंकि वह परे से भी परे है, वृहत् है, और सबको बढ़ाता (Brihmayati) है। इसलिए 'परब्रह्म'।",
        english: "Why 'Parabrahman'? Because He is higher than the high, Great, and causes expansion (Brihmayati). Therefore 'Parabrahman'.",
        simpleExplanation: "PARABRAHMAN: Higher than the highest! Great! Causes everything to EXPAND!",
        simpleExplanationHindi: "परब्रह्म: सबसे ऊँचे से भी ऊँचा! महान! सबको विस्तृत करता है!",
        nanoBananaPrompt: "The Parabrahman beyond all limits, causing all expansion and growth.",
        wordMeanings: [
            { sanskrit: "bṛṃhayati", devanagari: "बृंहयति", hindi: "बढ़ाता है/विस्तृत करता है", english: "expands" }
        ]
    },
    {
        id: 19,
        khanda: 4,
        verse: 10,
        theme: "Why 'One'?",
        sanskrit: "अथ कस्मादुच्यते एकः । यः सर्वान् प्राणान् सम्भक्ष्य सम्भक्षणेन अजः संसृजति विसृजति । तस्मादुच्यते एकः ।",
        hindi: "उसे 'एक' क्यों कहते हैं? क्योंकि वह सभी प्राणों को खाकर (समेटकर), अजन्मा होकर सृष्टि और विसर्जन करता है। इसलिए 'एक'।",
        english: "Why 'One'? Because having consumed all life-forces, He, the Unborn, creates and releases them again. Therefore 'One'.",
        simpleExplanation: "ONE: He withdraws all at pralaya, then creates again—ever Unborn, ever ONE!",
        simpleExplanationHindi: "एक: वह प्रलय में सब समेटता है, फिर सृष्टि करता है—सदा अजन्मा, सदा एक!",
        nanoBananaPrompt: "The One who withdraws all at dissolution and creates again—eternally Unborn.",
        wordMeanings: [
            { sanskrit: "aja", devanagari: "अज", hindi: "अजन्मा", english: "Unborn" }
        ]
    },
    {
        id: 20,
        khanda: 4,
        verse: 11,
        theme: "Why 'Rudra'?",
        sanskrit: "अथ कस्मादुच्यते रुद्रः । यस्मादृषिभिर्नान्यैर्भक्तैर्द्रुतस्य रूपमुपलभ्यते । तस्मादुच्यते रुद्रः ।",
        hindi: "उसे 'रुद्र' क्यों कहते हैं? क्योंकि ऋषियों और अनन्य भक्तों द्वारा ही उसका द्रुत (असली) रूप प्राप्त किया जाता है। इसलिए 'रुद्र'।",
        english: "Why 'Rudra'? Because His essential form is experienced only by seers and exclusive devotees. Therefore 'Rudra'.",
        simpleExplanation: "RUDRA: Only rishis and true devotees experience His real (Druta) form!",
        simpleExplanationHindi: "रुद्र: केवल ऋषि और सच्चे भक्त ही उसका असली (द्रुत) रूप अनुभव करते हैं!",
        nanoBananaPrompt: "Rudra's true form revealed only to rishis and devoted seekers.",
        wordMeanings: [
            { sanskrit: "druta", devanagari: "द्रुत", hindi: "द्रव/असली", english: "melting/essential" }
        ]
    },
    {
        id: 21,
        khanda: 4,
        verse: 12,
        theme: "Why 'Ishana'?",
        sanskrit: "अथ कस्मादुच्यते ईशानः । यः सर्वान् देवानीशते ईशनीभिः जनयति च । तस्मादुच्यते ईशानः ।",
        hindi: "उसे 'ईशान' क्यों कहते हैं? क्योंकि वह अपनी शक्तियों से सभी देवताओं पर शासन करता है और उन्हें उत्पन्न करता है। इसलिए 'ईशान'।",
        english: "Why 'Ishana'? Because He rules over all gods with His powers and creates them. Therefore 'Ishana'.",
        simpleExplanation: "ISHANA = RULER: He RULES all gods and CREATES them with His powers!",
        simpleExplanationHindi: "ईशान = शासक: वह सभी देवताओं पर राज करता है और उन्हें बनाता है!",
        nanoBananaPrompt: "Ishana ruling over and creating all the gods with His divine powers.",
        wordMeanings: [
            { sanskrit: "īśate", devanagari: "ईशते", hindi: "शासन करता है", english: "rules" }
        ]
    },
    {
        id: 22,
        khanda: 4,
        verse: 13,
        theme: "Why 'Bhagavan'?",
        sanskrit: "अथ कस्मादुच्यते भगवान् । यः सर्वान् भावान् निरीक्षत्यात्मज्ञानं च निरयति योगं गमयति । तस्मादुच्यते भगवान् ।",
        hindi: "उसे 'भगवान' क्यों कहते हैं? क्योंकि वह सभी भावों को देखता है, आत्मज्ञान प्रकट करता है और योग प्राप्त कराता है। इसलिए 'भगवान'।",
        english: "Why 'Bhagavan'? Because He perceives all, reveals Self-knowledge, and leads to Yoga. Therefore 'Bhagavan'.",
        simpleExplanation: "BHAGAVAN: Perceives ALL, reveals SELF-KNOWLEDGE, leads to YOGA!",
        simpleExplanationHindi: "भगवान: सब देखता है, आत्मज्ञान प्रकट करता है, योग तक पहुंचाता है!",
        nanoBananaPrompt: "Bhagavan perceiving all, revealing Self-knowledge, and leading souls to Yoga.",
        wordMeanings: [
            { sanskrit: "bhagavān", devanagari: "भगवान्", hindi: "भगवान", english: "the Lord" }
        ]
    },
    {
        id: 23,
        khanda: 4,
        verse: 14,
        theme: "Why 'Maheshvara'?",
        sanskrit: "अथ कस्मादुच्यते महेश्वरः । यः सर्वान् लोकान् संभक्ष्य संभक्षणेन अजः संसृजति विसृजति । तस्मादुच्यते महेश्वरः ।",
        hindi: "उसे 'महेश्वर' क्यों कहते हैं? क्योंकि वह सभी लोकों को प्रलय में खाकर, अजन्मा होकर सृष्टि और विसर्जन करता है। इसलिए 'महेश्वर'।",
        english: "Why 'Maheshvara'? Because having consumed all worlds, He, the Unborn, creates and releases again. Therefore 'Maheshvara'.",
        simpleExplanation: "MAHESHVARA = GREAT LORD: Consumes worlds at dissolution, creates again!",
        simpleExplanationHindi: "महेश्वर = महान ईश्वर: प्रलय में लोक समेटता है, फिर सृष्टि करता है!",
        nanoBananaPrompt: "Maheshvara consuming and recreating all worlds in the cosmic cycle.",
        wordMeanings: [
            { sanskrit: "maheśvara", devanagari: "महेश्वर", hindi: "महान ईश्वर", english: "Great Lord" }
        ]
    },
    {
        id: 24,
        khanda: 4,
        verse: 15,
        theme: "Why 'Mahadeva'?",
        sanskrit: "अथ कस्मादुच्यते महादेवः । यः सर्वान् भावान् परित्यज्य आत्मज्ञानयोगैश्वर्ये महति महीयते । तस्मादुच्यते महादेवः ।",
        hindi: "उसे 'महादेव' क्यों कहते हैं? क्योंकि वह सभी भावों को छोड़कर, आत्मज्ञान और योग के ऐश्वर्य में महान होकर पूजित होता है। इसलिए 'महादेव'।",
        english: "Why 'Mahadeva'? Because, abandoning all limited states, He revels in the Great Glory of Self-knowledge and Yoga. Therefore 'Mahadeva'.",
        simpleExplanation: "MAHADEVA = GREAT GOD: Revels in the glory of Self-knowledge and Yoga!",
        simpleExplanationHindi: "महादेव = महान देव: आत्मज्ञान और योग की महिमा में विराजता है!",
        nanoBananaPrompt: "Mahadeva reveling in the supreme glory of Self-knowledge and Yoga.",
        wordMeanings: [
            { sanskrit: "mahādeva", devanagari: "महादेव", hindi: "महान देव", english: "Great God" }
        ]
    },
    // Khanda 5: The Essential Character
    {
        id: 25,
        khanda: 5,
        verse: 1,
        theme: "Rudra's Character",
        sanskrit: "तदेतद्रुद्रचरितम् । एषो ह देवः प्रदिशोऽनु सर्वाः पूर्वो ह जातः स उ गर्भे अन्तः । स एव जातः स जनिष्यमाणः प्रत्यङ्जनांस्तिष्ठति सर्वतोमुखः ॥",
        hindi: "यह रुद्र का चरित्र है। यह देव सभी दिशाओं में व्याप्त है। वही पहले उत्पन्न हुआ, वही गर्भ में है। वही जन्मा है, वही जन्मेगा। वह सभी के भीतर स्थित है और सर्वतोमुख है।",
        english: "This is the character of Rudra. This God pervades all quarters. He was First Born; He is in the womb. He has been born; He will be born. He stands inside all, facing all sides.",
        simpleExplanation: "RUDRA'S NATURE: First born, in every womb, will be born again, inside everyone, faces all!",
        simpleExplanationHindi: "रुद्र का स्वभाव: पहले जन्मा, हर गर्भ में, फिर जन्मेगा, सबके भीतर, सर्वतोमुख!",
        nanoBananaPrompt: "Rudra pervading all directions, first born yet in every womb, facing all sides.",
        wordMeanings: [
            { sanskrit: "sarvatomukha", devanagari: "सर्वतोमुख", hindi: "सब ओर मुख वाला", english: "facing all directions" }
        ]
    },
    // Khanda 6: The Pasupata Vrata (Ash Ritual)
    {
        id: 26,
        khanda: 6,
        verse: 1,
        theme: "Everything is Ash",
        sanskrit: "ॐ अग्निरिति भस्म । वायुरिति भस्म । जलमिति भस्म । स्थलमिति भस्म । व्योमेति भस्म । सर्वं ह वा इदं भस्म । मन एतानि चक्षूंषि भस्म ।",
        hindi: "ॐ। अग्नि भस्म है। वायु भस्म है। जल भस्म है। पृथ्वी भस्म है। आकाश भस्म है। यह सब कुछ निश्चय ही भस्म है। मन और आँखें भी भस्म हैं।",
        english: "OM. Fire is Ash. Air is Ash. Water is Ash. Earth is Ash. Ether is Ash. All this is Ash. Mind and Eyes are Ash.",
        simpleExplanation: "ALL IS ASH: Fire, Air, Water, Earth, Space, Mind, Senses—ALL is ultimately ASH!",
        simpleExplanationHindi: "सब भस्म है: अग्नि, वायु, जल, पृथ्वी, आकाश, मन, इन्द्रियां—सब अंततः भस्म है!",
        nanoBananaPrompt: "The five elements, mind, and senses—all revealed as cosmic Ash (Bhasma).",
        wordMeanings: [
            { sanskrit: "bhasma", devanagari: "भस्म", hindi: "राख/भस्म", english: "ash" },
            { sanskrit: "pañcabhūta", devanagari: "पञ्चभूत", hindi: "पाँच तत्व", english: "five elements" }
        ]
    },
    {
        id: 27,
        khanda: 6,
        verse: 2,
        theme: "The Pasupata Vow",
        sanskrit: "अग्निरादित्यात् यद् भस्म तद् गृहीत्वा विमृज्याङ्गानि संस्पृशेत् । तस्माद्ब्रह्म तदेतत्पाशुपतं यद्भस्मनाङ्गानि संस्पृशेत् । तस्माद्ब्रह्म तदेतत्पाशुपतं पशुपाशविमोक्षणाय ।",
        hindi: "अग्नि से जो भस्म प्राप्त हो, उसे लेकर अंगों को पोंछे और स्पर्श करे। यह 'पाशुपत' व्रत है कि भस्म से अंगों का स्पर्श करें। यह पाशुपत व्रत पशु (जीव) को पाश (बंधन) से मुक्त करने के लिए है।",
        english: "Taking Ash from fire, one should wipe and touch the limbs. This is the Pasupata Vow—touching limbs with Ash. This is for liberation of Pashu (Soul) from Pasha (Bondage).",
        simpleExplanation: "PASUPATA VOW: Apply sacred ash to liberate the SOUL (Pashu) from BONDAGE (Pasha)!",
        simpleExplanationHindi: "पाशुपत व्रत: पवित्र भस्म लगाओ—आत्मा (पशु) को बंधन (पाश) से मुक्त करने के लिए!",
        nanoBananaPrompt: "A devotee applying sacred ash, liberating the soul (Pashu) from bondage (Pasha).",
        wordMeanings: [
            { sanskrit: "pāśupata", devanagari: "पाशुपत", hindi: "पशुपति संबंधी", english: "of Pashupati/Shiva" },
            { sanskrit: "paśu-pāśa", devanagari: "पशु-पाश", hindi: "जीव-बंधन", english: "soul-bondage" }
        ]
    },
    // Khanda 7: Phala Shruti
    {
        id: 28,
        khanda: 7,
        verse: 1,
        theme: "Purification by Study",
        sanskrit: "योऽथर्वशिरो ब्राह्मणोऽधीते सोऽग्निपूतो भवति स वायुपूतो भवति... स सत्यपूतो भवति स सर्वपूतो भवति ।",
        hindi: "जो साधक इस अथर्वशिर का अध्ययन करता है, वह अग्नि के समान पवित्र हो जाता है; वायु के समान पवित्र होता है... सत्य से पवित्र होता है; सबसे पवित्र हो जाता है।",
        english: "The seeker who studies this Atharvashiras becomes pure as Fire, pure as Air... pure as Truth; pure by all.",
        simpleExplanation: "TOTAL PURITY: Study this = become pure as Fire, Air, Truth—COMPLETELY PURE!",
        simpleExplanationHindi: "पूर्ण पवित्रता: इसका अध्ययन = अग्नि, वायु, सत्य जैसा पवित्र—पूर्णतः शुद्ध!",
        nanoBananaPrompt: "A seeker becoming pure as fire, air, and truth through studying this Upanishad.",
        wordMeanings: [
            { sanskrit: "pūta", devanagari: "पूत", hindi: "पवित्र", english: "pure" }
        ]
    },
    {
        id: 29,
        khanda: 7,
        verse: 2,
        theme: "Liberation by Single Recitation",
        sanskrit: "सकृज्जप्त्वा तु कैवल्यं लभते । ॐ सत्यम् । इत्युपनिषत् ॥",
        hindi: "इसका एक बार जप करने से ही वह कैवल्य (मोक्ष) प्राप्त कर लेता है। ॐ सत्य है। यही उपनिषद है।",
        english: "By reciting it once, he attains Kaivalya (Liberation). OM is Truth. Thus ends the Upanishad.",
        simpleExplanation: "ONE RECITATION = LIBERATION: Recite ONCE = attain Kaivalya! OM is Truth!",
        simpleExplanationHindi: "एक बार जप = मोक्ष: एक बार जपो = कैवल्य प्राप्त! ॐ सत्य है!",
        nanoBananaPrompt: "Liberation attained by a single sincere recitation—OM is Truth.",
        wordMeanings: [
            { sanskrit: "sakṛt", devanagari: "सकृत्", hindi: "एक बार", english: "once" },
            { sanskrit: "kaivalya", devanagari: "कैवल्य", hindi: "मोक्ष", english: "liberation" }
        ]
    }
];

export const ATHARVASHIRAS_METADATA = {
    id: "atharvashiras",
    name: "Atharvashiras",
    nameSanskrit: "अथर्वशिर उपनिषद्",
    veda: "Atharva Veda",
    category: "Shaiva",
    shlokaCount: 29,
    khandaCount: 7,
    sequenceNumber: 22,
    meaning: "The Head of the Atharva Veda",
    keyTeachings: [
        "Rudra declares: 'I alone was, am, and will be'",
        "All gods (Brahma, Vishnu, Indra) are Rudra",
        "Etymology of divine names: OM, Pranava, Ananta, Tara, Rudra, Ishana, Mahadeva",
        "The Pasupata Vrata: Apply ash to liberate soul (Pashu) from bondage (Pasha)",
        "Fire, Air, Water, Earth, Space—ALL is Ash (Bhasma)",
        "One recitation = Kaivalya (Liberation)"
    ],
    famousVerses: {
        koBhavan: { id: 1, khanda: 1, verse: 1 },
        iAloneExist: { id: 2, khanda: 1, verse: 2 },
        allGodsRudra: { id: 6, khanda: 2, verse: 1 },
        rudraIsOne: { id: 9, khanda: 3, verse: 2 },
        allIsAsh: { id: 26, khanda: 6, verse: 1 },
        pashupataVow: { id: 27, khanda: 6, verse: 2 }
    },
    divineNameEtymologies: [
        { name: "OM", meaning: "Elevates (Unnamayati) the whole being" },
        { name: "Pranava", meaning: "Causes Vedas to bow (Pranamayati)" },
        { name: "Ananta", meaning: "No beginning or end in any direction" },
        { name: "Tara", meaning: "Saves (Tarayati) from birth-death cycle" },
        { name: "Shukla", meaning: "Afflictions wither away (Shlathate)" },
        { name: "Sukshma", meaning: "Becomes subtle, dwells in bodies" },
        { name: "Vaidyuta", meaning: "Illumines (Dyotayati) darkness" },
        { name: "Parabrahman", meaning: "Higher than high, causes expansion" },
        { name: "Rudra", meaning: "Real form known only by seers/devotees" },
        { name: "Ishana", meaning: "Rules (Ishate) all gods" },
        { name: "Bhagavan", meaning: "Reveals Self-knowledge, leads to Yoga" },
        { name: "Maheshvara", meaning: "Consumes and recreates all worlds" },
        { name: "Mahadeva", meaning: "Revels in glory of Self-knowledge" }
    ]
};
