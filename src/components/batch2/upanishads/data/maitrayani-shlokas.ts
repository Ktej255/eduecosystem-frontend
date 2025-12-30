// Maitrayani Upanishad Data (#24 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Samanya
// Theme: Pessimism of Body, Bhutatman vs Atman, Mind as Cause of Bondage/Liberation
// Total: 7 Prapathakas (Chapters) - Core 4 included here

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface MaitrayaniDataEntry {
    id: number;
    prapathaka: number;
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
export const MAITRAYANI_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह हम दोनों की रक्षा करे। हम दोनों का पालन करे। हम साथ मिलकर शक्ति अर्जित करें। हमारा अध्ययन तेजस्वी हो। हम परस्पर द्वेष न करें। ॐ शांति, शांति, शांति।",
    english: "OM! May He protect us both. May He nourish us both. May we work together. May our study be brilliant. May we not hate each other. OM Peace, Peace, Peace."
};

export const MAITRAYANI_SHLOKAS: MaitrayaniDataEntry[] = [
    // Prapathaka 1: The Disgust with the Body
    {
        id: 1,
        prapathaka: 1,
        verse: 1,
        theme: "King Brihadratha Renounces",
        sanskrit: "बृहद्रथो वै नाम राजा राज्ये ज्येष्ठं पुत्रं निधाय । इदं अशाश्वतं मन्यमानः वैराग्यं उपेतो अरण्यं निर्जगाम । स तत्र परमं तप आस्थापयत् ।",
        hindi: "बृहद्रथ नाम के राजा ने अपने राज्य पर ज्येष्ठ पुत्र को बिठाकर, इस संसार को अशाश्वत मानते हुए, वैराग्य प्राप्त कर वन में चले गए। वहाँ उन्होंने परम तप किया।",
        english: "King Brihadratha, placing his eldest son in the kingdom, considering this world transient, attained Detachment and went to the forest. There he performed supreme penance.",
        simpleExplanation: "THE KING'S RENUNCIATION: A king gives up his kingdom, seeing everything as impermanent!",
        simpleExplanationHindi: "राजा का त्याग: एक राजा अपना राज्य छोड़ देता है, सब कुछ अनित्य देखकर!",
        nanoBananaPrompt: "King Brihadratha leaving his throne for the forest, seeking eternal truth.",
        wordMeanings: [
            { sanskrit: "aśāśvata", devanagari: "अशाश्वत", hindi: "अनित्य/नश्वर", english: "transient/impermanent" },
            { sanskrit: "vairāgya", devanagari: "वैराग्य", hindi: "वैराग्य/विरक्ति", english: "detachment" }
        ]
    },
    {
        id: 2,
        prapathaka: 1,
        verse: 2,
        theme: "Sage Shakayanya Arrives",
        sanskrit: "आदित्यमीक्षमाण ऊर्ध्वबाहुस्तिष्ठति । अन्ते सहस्रस्य शाकायन्यर् मुनिरन्तिकमाजगाम । अग्निरिवातपन् ।",
        hindi: "वे बाहें ऊपर उठाकर, सूर्य की ओर देखते हुए खड़े रहे। एक हजार दिनों के बाद, शाकायन्य मुनि, अग्नि के समान तपते हुए, उनके पास आए।",
        english: "He stood with arms raised, gazing at the Sun. After a thousand days, Sage Shakayanya, glowing like fire, came near him.",
        simpleExplanation: "1000 DAYS OF PENANCE: After 1000 days of sun-gazing penance, a glowing sage appears!",
        simpleExplanationHindi: "1000 दिन की तपस्या: 1000 दिन की सूर्य-साधना के बाद, तेजस्वी मुनि प्रकट होते हैं!",
        nanoBananaPrompt: "A king doing sun-gazing penance, a fire-like sage approaching after 1000 days.",
        wordMeanings: [
            { sanskrit: "ūrdhvabāhu", devanagari: "ऊर्ध्वबाहु", hindi: "ऊपर उठी बाहें", english: "arms raised" },
            { sanskrit: "sahasra", devanagari: "सहस्र", hindi: "हजार", english: "thousand" }
        ]
    },
    {
        id: 3,
        prapathaka: 1,
        verse: 3,
        theme: "The King's Request",
        sanskrit: "स होवाच । उत्तिष्ठोत्तिष्ठ वरं वृणीष्वेति । स तस्मै नमस्कृत्योवाच । भगवन् नाहमात्मवित् । त्वं तत्त्वविच्छुश्रुमो वयं स त्वं नो ब्रूहीति ।",
        hindi: "मुनि ने कहा: 'उठो! वर मांगो।' राजा ने नमस्कार करके कहा: 'भगवन्! मैं आत्म-वित् नहीं हूँ। आप तत्व-वित् हैं, वह हमें बताएं।'",
        english: "Sage said: 'Arise! Choose a boon.' King bowed: 'Lord, I am not a Knower of Self. You are Knower of Truth. Please tell us.'",
        simpleExplanation: "THE REAL BOON: 'I don't want worldly boons—teach me the SELF!'",
        simpleExplanationHindi: "असली वरदान: 'मुझे सांसारिक वर नहीं चाहिए—मुझे आत्मा सिखाओ!'",
        nanoBananaPrompt: "The king refusing worldly boons, asking instead for knowledge of the Self.",
        wordMeanings: [
            { sanskrit: "ātmavit", devanagari: "आत्मवित्", hindi: "आत्म-ज्ञानी", english: "knower of Self" },
            { sanskrit: "tattvavit", devanagari: "तत्त्ववित्", hindi: "सत्य को जानने वाला", english: "knower of Truth" }
        ]
    },
    {
        id: 4,
        prapathaka: 1,
        verse: 4,
        theme: "A Difficult Question",
        sanskrit: "एतद्वृत्तं पुरस्ताद्दुःशक्यमेतत्प्रश्नं ऐक्ष्वाकान्यान्कामान्वृणीष्वेति । शाकायन्यस्य चरणावभिमृश्यमानो राजेमां गाथां जगाद ।",
        hindi: "मुनि ने कहा: 'हे इक्ष्वाकु वंशज! यह प्रश्न दुष्कर है। कोई अन्य कामना मांग लो।' शाकायन्य के चरणों को स्पर्श करते हुए राजा ने यह गाथा कही:",
        english: "Sage said: 'O Ikshvaku! This question is difficult. Choose other desires.' Touching the sage's feet, the King recited this verse:",
        simpleExplanation: "SAGE'S WARNING: 'This question is VERY hard. Ask for something else!' King insists...",
        simpleExplanationHindi: "मुनि की चेतावनी: 'यह प्रश्न बहुत कठिन है। कुछ और मांगो!' राजा जिद करता है...",
        nanoBananaPrompt: "The sage warning the question is difficult, but the king persists at his feet.",
        wordMeanings: [
            { sanskrit: "duḥśakya", devanagari: "दुःशक्य", hindi: "कठिन", english: "difficult" }
        ]
    },
    {
        id: 5,
        prapathaka: 1,
        verse: 5,
        theme: "The Body as Filth",
        sanskrit: "भगवन् अस्थिचर्मस्नायुमज्जामांसशुक्रशोणितशृङ्गातमूत्रपुरीषवातपित्तकफसंघाते दुर्गन्धे निःसारेऽस्मिन् शरीरे किं कामोपभोगैः ॥",
        hindi: "'हे भगवन्! हड्डी, चमड़ा, नसें, मज्जा, मांस, वीर्य, रक्त, कफ, आंसू, मल-मूत्र, वात, पित्त और कफ के समूह वाले; दुर्गंधयुक्त और निस्सार इस शरीर में काम-भोगों से क्या लाभ?'",
        english: "'Lord! In this body—foul-smelling aggregate of bone, skin, muscle, marrow, flesh, semen, blood, mucus, tears, feces, urine, wind, bile, phlegm—what is the use of desires?'",
        simpleExplanation: "BODY = FILTH: Bones, skin, blood, urine, feces—the body is DISGUSTING! Why desire?",
        simpleExplanationHindi: "शरीर = मैल: हड्डी, चमड़ा, रक्त, मूत्र, मल—शरीर घृणित है! इच्छा क्यों?",
        nanoBananaPrompt: "The body revealed as a collection of disgusting substances—bones, blood, waste.",
        wordMeanings: [
            { sanskrit: "durgandha", devanagari: "दुर्गन्ध", hindi: "बदबूदार", english: "foul-smelling" },
            { sanskrit: "niḥsāra", devanagari: "निःसार", hindi: "सारहीन", english: "substanceless" }
        ]
    },
    {
        id: 6,
        prapathaka: 1,
        verse: 6,
        theme: "Afflictions of the Body",
        sanskrit: "कामक्रोधलोभभयविषादेर्ष्यावियोगानिष्टसम्प्रयोगक्षुत्पिपासाजरामृत्युर्ोगशोकाद्यैरभिहते अस्मिन् शरीरे किं कामोपभोगैः ॥",
        hindi: "'काम, क्रोध, लोभ, भय, विषाद, ईर्ष्या, प्रिय से वियोग, अप्रिय से संयोग, भूख, प्यास, बुढ़ापा, मृत्यु, रोग और शोक से पीड़ित इस शरीर में भोगों से क्या लाभ?'",
        english: "'In this body afflicted by lust, anger, greed, fear, depression, jealousy, separation, union with unloved, hunger, thirst, old age, death, disease, sorrow—what use are desires?'",
        simpleExplanation: "SUFFERING LIST: Lust, anger, greed, fear, hunger, thirst, old age, death, disease—WHY DESIRE?",
        simpleExplanationHindi: "दुख सूची: काम, क्रोध, लोभ, भय, भूख, प्यास, बुढ़ापा, मृत्यु, रोग—इच्छा क्यों?",
        nanoBananaPrompt: "The body beset by afflictions—lust, anger, fear, disease, death surrounding it.",
        wordMeanings: [
            { sanskrit: "jarā-mṛtyu", devanagari: "जरामृत्यु", hindi: "बुढ़ापा-मृत्यु", english: "old age and death" }
        ]
    },
    {
        id: 7,
        prapathaka: 1,
        verse: 7,
        theme: "Even Kings Perish",
        sanskrit: "सर्वं चेदं क्षयिष्णु पश्यामो यथेमे दंशमशकादयः । अथ किमेतैर्वा परेऽन्ये महाधनुर्धराश्चक्रवर्तिनः... सुद्युम्न-भूरिद्युम्न-इन्द्रद्युम्न-कुवलयाश्व... निरोधं मेष्यायन्ते ।",
        hindi: "'हम इस सब को क्षयिष्णु देखते हैं, जैसे मक्खी-मच्छर मरते हैं। बड़े महाधनुर्धर चक्रवर्ती राजा—सुद्युम्न, भूरिद्युम्न, इन्द्रद्युम्न—सब चले गए।'",
        english: "'We see all perishing like gnats. Even great emperor archers—Sudyumna, Bhuridyumna, Indradyumna—have departed.'",
        simpleExplanation: "EMPERORS DIE: Even the greatest kings die like mosquitoes! All perishes!",
        simpleExplanationHindi: "सम्राट भी मरते हैं: महान राजा भी मच्छरों की तरह मरते हैं! सब नष्ट होता है!",
        nanoBananaPrompt: "Great emperors and warriors shown dying like gnats—all things perish.",
        wordMeanings: [
            { sanskrit: "kṣayiṣṇu", devanagari: "क्षयिष्णु", hindi: "नाशवान", english: "perishing" }
        ]
    },
    {
        id: 8,
        prapathaka: 1,
        verse: 8,
        theme: "Even Gods Perish",
        sanskrit: "अथ किमेतैर्वा परेऽन्ये गन्धर्वासुरयक्षराक्षसभूतगणपिशाचोरगग्रहादीनां निरोधं पश्यामः ।",
        hindi: "'इनकी बात क्या? हम गंधर्व, असुर, यक्ष, राक्षस, भूतगण, पिशाच, सांप और ग्रहों का भी विनाश देखते हैं।'",
        english: "'What of them? We see destruction of Gandharvas, Asuras, Yakshas, Rakshasas, spirits, goblins, serpents, planets.'",
        simpleExplanation: "EVEN CELESTIALS DIE: Gandharvas, Asuras, Yakshas, spirits—everyone perishes!",
        simpleExplanationHindi: "देवता भी मरते हैं: गंधर्व, असुर, यक्ष, भूत—सब नष्ट होते हैं!",
        nanoBananaPrompt: "Gandharvas, Asuras, Yakshas, spirits—all celestial beings also perish.",
        wordMeanings: [
            { sanskrit: "nirodha", devanagari: "निरोध", hindi: "विनाश", english: "destruction" }
        ]
    },
    {
        id: 9,
        prapathaka: 1,
        verse: 9,
        theme: "Cosmic Destruction",
        sanskrit: "अथ किमेतैर्वा शुष्यन्ति महार्णवाः शिक्सर्यन्ते शिखरिणः प्रचलन्ति ध्रुवस्य स्थानं... निमज्जति पृथिवी...",
        hindi: "'इनकी बात क्या? महासागर सूख जाते हैं; पर्वत गिर जाते हैं; ध्रुव का स्थान हिल जाता है; पृथ्वी डूब जाती है।'",
        english: "'What of these? Great oceans dry; mountains fall; Pole Star moves; Earth drowns.'",
        simpleExplanation: "COSMIC DESTRUCTION: Oceans dry! Mountains fall! Pole Star moves! Earth drowns!",
        simpleExplanationHindi: "ब्रह्मांडीय विनाश: महासागर सूखते हैं! पर्वत गिरते हैं! ध्रुव हिलता है! पृथ्वी डूबती है!",
        nanoBananaPrompt: "Cosmic destruction—oceans drying, mountains falling, Earth drowning.",
        wordMeanings: [
            { sanskrit: "dhruva", devanagari: "ध्रुव", hindi: "ध्रुव तारा", english: "Pole Star" }
        ]
    },
    {
        id: 10,
        prapathaka: 1,
        verse: 10,
        theme: "Frog in a Well",
        sanskrit: "सोऽहमस्मिन् संसारे किं कामोपभोगैः । उद्धर्तुमर्हसीत्यन्धौदपास्थो भेक इवाहमस्मिन् संसारे । भगवंस्त्वं नो गतिः ॥",
        hindi: "'ऐसे संसार में काम-भोगों से क्या लाभ? आप मेरा उद्धार करें! मैं अंधे कुएं में पड़े मेंढक की तरह हूँ। भगवन्! आप ही हमारी गति हैं।'",
        english: "'In such world, what use are desires? Uplift me! I am like a FROG IN A WATERLESS WELL. Lord, You are our Refuge.'",
        simpleExplanation: "FROG IN A WELL: 'I am STUCK like a frog in a dry well! SAVE ME!' The famous metaphor!",
        simpleExplanationHindi: "कुएं का मेंढक: 'मैं सूखे कुएं के मेंढक की तरह फंसा हूँ! मुझे बचाओ!' प्रसिद्ध रूपक!",
        nanoBananaPrompt: "A frog trapped in a waterless well—the soul stuck in Samsara seeking rescue.",
        wordMeanings: [
            { sanskrit: "andha-udapa-stha bheka", devanagari: "अन्धौदपास्थ भेक", hindi: "अंधे कुएं का मेंढक", english: "frog in waterless well" }
        ]
    },
    // Prapathaka 2: The Teaching of the Self
    {
        id: 11,
        prapathaka: 2,
        verse: 1,
        theme: "Sage Responds",
        sanskrit: "अथ भगवान् शाकायन्यः सुप्र्रीतोऽब्रवीद्राजानम् । महाराज बृहद्रथेक्ष्वाकुवंशध्वज... यं वा एतमात्मेति विदन्ति अयम्...",
        hindi: "तब भगवान शाकायन्य ने प्रसन्न होकर राजा से कहा: 'हे महाराज बृहद्रथ! इक्ष्वाकु वंश के ध्वज! जिसे वे आत्मा कहते हैं, वह यह है...'",
        english: "Then Lord Shakayanya, pleased, told the King: 'O Great King Brihadratha, flag of Ikshvaku race! That which they call Self is this...'",
        simpleExplanation: "TEACHING BEGINS: The pleased sage begins to reveal the nature of the Self!",
        simpleExplanationHindi: "शिक्षा शुरू: प्रसन्न मुनि आत्मा का स्वरूप बताना शुरू करते हैं!",
        nanoBananaPrompt: "The pleased sage beginning to teach the nature of the Self to the king.",
        wordMeanings: [
            { sanskrit: "suprīta", devanagari: "सुप्रीत", hindi: "अत्यंत प्रसन्न", english: "well pleased" }
        ]
    },
    {
        id: 12,
        prapathaka: 2,
        verse: 2,
        theme: "This is the Self",
        sanskrit: "अथ य एष उच्छ्वासविष्टम्भोर्ध्वमुत्क्रान्तो व्यजमानोऽवमनं तमोऽपहत्य... स एष आत्मेति होवाच । एतदमृतमभयमेतद् ब्रह्मेति ।",
        hindi: "'जो श्वास को रोककर ऊपर उठता है, अंधकार को हटाकर प्रकाश फैलाता है... यही आत्मा है। यही अमृत है, अभय है, यही ब्रह्म है।'",
        english: "'He who restraining breath rises upward, dispelling darkness... This is the Self. This is Immortal, Fearless. This is Brahman.'",
        simpleExplanation: "THE SELF DEFINED: Rising breath, dispelling darkness = SELF = Immortal, Fearless, Brahman!",
        simpleExplanationHindi: "आत्मा की परिभाषा: उठती श्वास, अंधकार हटाता = आत्मा = अमृत, अभय, ब्रह्म!",
        nanoBananaPrompt: "The Self as rising breath, dispelling darkness—immortal, fearless Brahman.",
        wordMeanings: [
            { sanskrit: "amṛta", devanagari: "अमृत", hindi: "अमर", english: "immortal" },
            { sanskrit: "abhaya", devanagari: "अभय", hindi: "निर्भय", english: "fearless" }
        ]
    },
    {
        id: 13,
        prapathaka: 2,
        verse: 3,
        theme: "Who Moves the Body?",
        sanskrit: "अथ खल्वियं ब्रह्मविद्या सर्वोपनिषद्विद्या वा... शरीदमचेतनं रथमिव अचेतनम् । तस्य प्रेरकः खलु भगवन् कः ?",
        hindi: "'यह ब्रह्मविद्या समस्त उपनिषदों की विद्या है... भगवन्! यह शरीर रथ के समान अचेतन है। इसका प्रेरक कौन है?'",
        english: "'This Brahma-Vidya is wisdom of all Upanishads... Lord, this body is insentient like a Chariot. Who is its Mover?'",
        simpleExplanation: "CHARIOT QUESTION: Body is like lifeless chariot—WHO DRIVES IT?",
        simpleExplanationHindi: "रथ का प्रश्न: शरीर निर्जीव रथ जैसा है—इसे कौन चलाता है?",
        nanoBananaPrompt: "The body as an inert chariot—who is the driver/mover within?",
        wordMeanings: [
            { sanskrit: "acetana", devanagari: "अचेतन", hindi: "जड़/निर्जीव", english: "insentient" },
            { sanskrit: "preraka", devanagari: "प्रेरक", hindi: "चालक", english: "mover/driver" }
        ]
    },
    {
        id: 14,
        prapathaka: 2,
        verse: 4,
        theme: "Prajapati's Story",
        sanskrit: "तस्मै स होवाच । प्रजापतिर्वा एकोऽग्रेऽतिष्ठत् । स नारमत ।",
        hindi: "मुनि ने कहा: 'आरंभ में प्रजापति अकेले थे। उन्हें अकेले सुख नहीं मिला।'",
        english: "He replied: 'Prajapati stood alone in beginning. He had no happiness alone.'",
        simpleExplanation: "CREATION'S REASON: Prajapati was alone, not happy. So He created!",
        simpleExplanationHindi: "सृष्टि का कारण: प्रजापति अकेले थे, सुखी नहीं। इसलिए उन्होंने सृष्टि की!",
        nanoBananaPrompt: "Prajapati alone in the beginning, finding no joy in solitude.",
        wordMeanings: [
            { sanskrit: "nāramata", devanagari: "नारमत", hindi: "सुख नहीं पाया", english: "had no happiness" }
        ]
    },
    {
        id: 15,
        prapathaka: 2,
        verse: 5,
        theme: "Entering the Body",
        sanskrit: "स आत्मानमभिध्यात्वा... शरीराणि ईक्षत । तानि चेतानि अप्राणानि... स एष प्रवेशाय स एतं एव सीमानं विदार्य एतया द्वारा प्रापद्यत ।",
        hindi: "'उन्होंने अपने स्वरूप का ध्यान करके शरीरों को देखा। वे अचेतन और प्राण-रहित थे। उसने सिर की सीम (ब्रह्मरन्ध्र) को फाड़कर प्रवेश किया।'",
        english: "'Meditating on Himself, He saw bodies. They were insentient, lifeless. He split the crown and entered through that door.'",
        simpleExplanation: "THE ENTRY POINT: Prajapati entered through BRAHMARANDHRA—the crown of head!",
        simpleExplanationHindi: "प्रवेश द्वार: प्रजापति ब्रह्मरंध्र से—सिर के शीर्ष से—प्रवेश किए!",
        nanoBananaPrompt: "Prajapati entering lifeless bodies through the Brahmarandhra (crown of head).",
        wordMeanings: [
            { sanskrit: "sīmā", devanagari: "सीमा", hindi: "सिर की मांग/ब्रह्मरंध्र", english: "crown/fontanelle" }
        ]
    },
    // Prapathaka 3: The Two Selves
    {
        id: 16,
        prapathaka: 3,
        verse: 1,
        theme: "The Elemental Self",
        sanskrit: "अन्तरात्मनः खलु भिदा मन्ताऽन्यो योऽयं भूतात्मा...",
        hindi: "'अंतरात्मा से भिन्न एक और 'आत्मा' माना गया है, जिसे 'भूतात्मा' (Elemental Self) कहते हैं।'",
        english: "'Different from Inner Self, there is another: the Bhutatman (Elemental Self)—affected by Gunas and elements.'",
        simpleExplanation: "TWO SELVES: Inner Self (Atman) vs Elemental Self (Bhutatman/Ego)!",
        simpleExplanationHindi: "दो आत्माएं: अंतरात्मा (आत्मा) बनाम भूतात्मा (अहंकार)!",
        nanoBananaPrompt: "The distinction between the inner Atman and the elemental Bhutatman (ego).",
        wordMeanings: [
            { sanskrit: "bhūtātmā", devanagari: "भूतात्मा", hindi: "भौतिक आत्मा/अहंकार", english: "elemental self/ego" },
            { sanskrit: "antarātmā", devanagari: "अन्तरात्मा", hindi: "अंतरात्मा", english: "inner self" }
        ]
    },
    {
        id: 17,
        prapathaka: 3,
        verse: 2,
        theme: "Bhutatman Suffers",
        sanskrit: "अथ अन्योऽत्र भूतात्मा योऽयं सितेनासितेन कर्मफलमश्नुते... सोऽयं अभिभूतो न प्रभुः...",
        hindi: "'यह भूतात्मा ही अच्छे और बुरे कर्मों के फल भोगता है। गुणों से अभिभूत होने पर, यह प्रभु नहीं रह पाता।'",
        english: "'This Bhutatman experiences fruits of good and bad karma. Being overpowered by Gunas, he is not the Master.'",
        simpleExplanation: "EGO SUFFERS: The Bhutatman reaps karma. Overpowered by Gunas, he loses mastership!",
        simpleExplanationHindi: "अहंकार दुख भोगता है: भूतात्मा कर्मफल भोगता है। गुणों से पराजित, वह स्वामी नहीं रहता!",
        nanoBananaPrompt: "The Bhutatman reaping karma, overpowered by the three Gunas.",
        wordMeanings: [
            { sanskrit: "sita-asita", devanagari: "सितासित", hindi: "अच्छा-बुरा", english: "white-black/good-bad" },
            { sanskrit: "abhibhūta", devanagari: "अभिभूत", hindi: "पराजित", english: "overpowered" }
        ]
    },
    {
        id: 18,
        prapathaka: 3,
        verse: 3,
        theme: "Like a Drunkard",
        sanskrit: "इतस्ततो धावमानः मत्त इव...",
        hindi: "'वह (भूतात्मा) इधर-उधर दौड़ता है, जैसे शराबी आदमी। गुणों के जाल में फंसकर मोहित हो जाता है।'",
        english: "'He runs here and there like a drunkard. Entangled in the net of Gunas, he becomes deluded.'",
        simpleExplanation: "DRUNK ON GUNAS: The ego runs about like a drunkard, lost in the web of Gunas!",
        simpleExplanationHindi: "गुणों का नशा: अहंकार शराबी की तरह भटकता है, गुणों के जाल में खोया!",
        nanoBananaPrompt: "The ego running around like a drunkard, caught in the net of the three Gunas.",
        wordMeanings: [
            { sanskrit: "matta", devanagari: "मत्त", hindi: "नशे में धुत", english: "intoxicated/drunk" }
        ]
    },
    {
        id: 19,
        prapathaka: 3,
        verse: 4,
        theme: "Bound Though Free",
        sanskrit: "सोऽयं खल्वात्मा प्रेरिते...",
        hindi: "'यद्यपि वह आत्मा वास्तव में प्रेरक ही है, फिर भी अज्ञान के कारण गुणों द्वारा बंध जाता है।'",
        english: "'Though this Self is the Mover, he is bound by Gunas due to ignorance.'",
        simpleExplanation: "PARADOX: The Self IS the Mover, yet appears bound due to ignorance!",
        simpleExplanationHindi: "विरोधाभास: आत्मा चालक है, फिर भी अज्ञान से बंधा दिखता है!",
        nanoBananaPrompt: "The paradox—the Self is the Mover yet appears bound by ignorance.",
        wordMeanings: [
            { sanskrit: "prerita", devanagari: "प्रेरित", hindi: "प्रेरक", english: "mover/impeller" }
        ]
    },
    {
        id: 20,
        prapathaka: 3,
        verse: 5,
        theme: "Tamas, Rajas, Sattva",
        sanskrit: "अथ यत्रैतदणीः सम्परिवर्तते... तमो वा इदमेकमासीत् तत्पश्चात् तत् परेणेरितं विषमत्वं प्रयात्येतद्वै रजो...",
        hindi: "'आरंभ में तमस ही था। फिर प्रेरित होकर वह रजस बना। फिर रजस प्रेरित होकर सत्व बना।'",
        english: "'In beginning was Tamas alone. Impelled, it became Rajas. Then Rajas became Sattva.'",
        simpleExplanation: "GUNA EVOLUTION: Tamas → Rajas → Sattva. Darkness → Activity → Light!",
        simpleExplanationHindi: "गुण क्रम: तमस → रजस → सत्व। अंधकार → क्रिया → प्रकाश!",
        nanoBananaPrompt: "The evolution of Gunas: from Tamas (darkness) to Rajas (activity) to Sattva (light).",
        wordMeanings: [
            { sanskrit: "tamas", devanagari: "तमस्", hindi: "अंधकार/जड़ता", english: "darkness/inertia" },
            { sanskrit: "rajas", devanagari: "रजस्", hindi: "क्रिया/गति", english: "activity/passion" },
            { sanskrit: "sattva", devanagari: "सत्त्व", hindi: "प्रकाश/शुद्धता", english: "light/purity" }
        ]
    },
    // Prapathaka 4: The Remedy
    {
        id: 21,
        prapathaka: 4,
        verse: 1,
        theme: "How to Be Free?",
        sanskrit: "स होवाच... भगवन् कथमस्य परित्याग इति ।",
        hindi: "राजा ने कहा: 'हे भगवन्! इस भूतात्मा का परित्याग (उद्धार) कैसे हो?'",
        english: "King asked: 'Lord! How can this Bhutatman be abandoned/redeemed?'",
        simpleExplanation: "THE KEY QUESTION: How do I get rid of this ego/Bhutatman?",
        simpleExplanationHindi: "मुख्य प्रश्न: मैं इस अहंकार/भूतात्मा से कैसे छुटकारा पाऊं?",
        nanoBananaPrompt: "The king asking the crucial question: How to be free from the ego?",
        wordMeanings: [
            { sanskrit: "parityāga", devanagari: "परित्याग", hindi: "त्याग", english: "abandonment" }
        ]
    },
    {
        id: 22,
        prapathaka: 4,
        verse: 2,
        theme: "Knowledge, Penance, Meditation",
        sanskrit: "यथोक्तं पुरस्तात्... विद्यया तपसा चिन्तया वोपलब्धुं शक्यः...",
        hindi: "'जैसा पहले कहा—विद्या (ज्ञान), तप और चिंता (ध्यान) द्वारा ब्रह्म को प्राप्त किया जा सकता है।'",
        english: "'As said before—by Knowledge, Penance, and Meditation, He can be apprehended.'",
        simpleExplanation: "THE PATH: Knowledge + Penance + Meditation = BRAHMAN!",
        simpleExplanationHindi: "मार्ग: ज्ञान + तप + ध्यान = ब्रह्म!",
        nanoBananaPrompt: "The three paths to Brahman: Knowledge, Penance, and Meditation.",
        wordMeanings: [
            { sanskrit: "vidyā", devanagari: "विद्या", hindi: "ज्ञान", english: "knowledge" },
            { sanskrit: "tapas", devanagari: "तपस्", hindi: "तप", english: "penance" },
            { sanskrit: "cintā", devanagari: "चिन्ता", hindi: "ध्यान", english: "meditation" }
        ]
    },
    {
        id: 23,
        prapathaka: 4,
        verse: 3,
        theme: "I Am Brahman",
        sanskrit: "ब्रह्मैवाहमस्मीत्येवं विदित्वा...",
        hindi: "'मैं ब्रह्म ही हूँ—ऐसा जानकर, आश्रमों के धर्म का पालन करते हुए, वह मुक्त हो जाता है।'",
        english: "'Realizing 'I am Brahman', fulfilling duties of his stage of life... he becomes liberated.'",
        simpleExplanation: "LIBERATION FORMULA: 'I AM BRAHMAN' + Dharma = LIBERATION!",
        simpleExplanationHindi: "मोक्ष सूत्र: 'मैं ब्रह्म हूँ' + धर्म = मोक्ष!",
        nanoBananaPrompt: "Realization of 'I am Brahman' while performing duties leading to liberation.",
        wordMeanings: [
            { sanskrit: "brahmaivāhamasmi", devanagari: "ब्रह्मैवाहमस्मि", hindi: "मैं ब्रह्म ही हूँ", english: "I am Brahman verily" }
        ]
    },
    {
        id: 24,
        prapathaka: 4,
        verse: 4,
        theme: "Mind is the Cause",
        sanskrit: "मन एव मनुष्याणां कारणं बन्धमोक्षयोः । बन्धाय विषयासक्तं मुक्त्यै निर्विषयं स्मृतम् ॥",
        hindi: "'मन ही मनुष्यों के बंधन और मोक्ष का कारण है। विषयों में आसक्त मन बंधन है; निर्विषय मन मुक्ति है।'",
        english: "'The MIND alone is the cause of bondage and liberation. Attached to objects it binds; free from objects it liberates.'",
        simpleExplanation: "THE FAMOUS VERSE: Mind attached = Bondage. Mind detached = Liberation!",
        simpleExplanationHindi: "प्रसिद्ध श्लोक: आसक्त मन = बंधन। विरक्त मन = मुक्ति!",
        nanoBananaPrompt: "The mind as cause of bondage when attached, liberation when detached.",
        wordMeanings: [
            { sanskrit: "bandha-mokṣa", devanagari: "बन्धमोक्ष", hindi: "बंधन-मोक्ष", english: "bondage-liberation" },
            { sanskrit: "nirviṣaya", devanagari: "निर्विषय", hindi: "विषय-रहित", english: "objectless" }
        ]
    },
    {
        id: 25,
        prapathaka: 4,
        verse: 5,
        theme: "Supreme Goal",
        sanskrit: "यदा पञ्चावतिष्ठन्ते ज्ञानानि मनसा सह... तामाहुः परमां गतिम् ॥",
        hindi: "'जब मन के साथ पाँचों ज्ञानेंद्रियां स्थिर हो जाती हैं... उसे परम गति कहते हैं।'",
        english: "'When five senses stand still with mind... that they call the Supreme Goal.'",
        simpleExplanation: "YOGA DEFINED: 5 senses + mind completely still = SUPREME GOAL!",
        simpleExplanationHindi: "योग की परिभाषा: 5 इंद्रियां + मन पूर्णतः स्थिर = परम गति!",
        nanoBananaPrompt: "Complete stillness of the five senses and mind—the Supreme Goal of Yoga.",
        wordMeanings: [
            { sanskrit: "paramā gati", devanagari: "परमा गति", hindi: "परम गति", english: "supreme goal" }
        ]
    }
];

export const MAITRAYANI_METADATA = {
    id: "maitrayani",
    name: "Maitrayani",
    nameSanskrit: "मैत्रायणी उपनिषद्",
    alternateNames: ["Maitri Upanishad", "Maitrayaniya Upanishad"],
    veda: "Krishna Yajur Veda",
    category: "Samanya",
    shlokaCount: 25,
    prapathakaCount: 4,
    sequenceNumber: 24,
    meaning: "Teaching of Sage Maitri",
    keyTeachings: [
        "King Brihadratha's intense pessimism about the body",
        "Body is filthy: bones, blood, feces, urine—what use is desire?",
        "Even emperors, Gandharvas, and oceans perish",
        "Famous metaphor: 'Frog in a waterless well' (Samsara)",
        "Two Selves: Antaratman (True Self) vs Bhutatman (Ego/Elemental Self)",
        "Bhutatman runs like a drunkard, bound by Gunas",
        "Evolution: Tamas → Rajas → Sattva",
        "Three paths: Knowledge + Penance + Meditation",
        "Famous verse: 'Mind is cause of bondage and liberation'",
        "When 5 senses + mind are still = Supreme Goal"
    ],
    famousVerses: {
        bodyAsFilth: { id: 5, prapathaka: 1, verse: 5 },
        frogInWell: { id: 10, prapathaka: 1, verse: 10 },
        twoSelves: { id: 16, prapathaka: 3, verse: 1 },
        drunkard: { id: 18, prapathaka: 3, verse: 3 },
        mindIsCause: { id: 24, prapathaka: 4, verse: 4 },
        supremeGoal: { id: 25, prapathaka: 4, verse: 5 }
    }
};
