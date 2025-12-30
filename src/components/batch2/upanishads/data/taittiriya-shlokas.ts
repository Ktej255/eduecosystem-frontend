// Taittiriya Upanishad Data
// Source: Krishna Yajur Veda | 3 Vallis (Chapters)
// Theme: Pancha Kosha (Five Sheaths), Convocation Address, Calculus of Bliss

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface TaittiriyaDataEntry {
    id: number;
    valli: number;
    anuvaka: number;
    theme: string;
    sanskrit: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
    wordMeanings?: WordMeaning[];
}

export const TAITTIRIYA_SHLOKAS: TaittiriyaDataEntry[] = [
    // ==========================================
    // VALLI 1: SHIKSHA VALLI (EDUCATION)
    // ==========================================

    {
        id: 1,
        valli: 1,
        anuvaka: 1,
        theme: "Peace Invocation",
        sanskrit: "शं नो मित्रः शं वरुणः । शं नो भवत्वर्यमा । शं न इन्द्रो बृहस्पतिः । शं नो विष्णुरुरुक्रमः । नमो ब्रह्मणे । नमस्ते वायो । त्वमेव प्रत्यक्षं ब्रह्मासि । ॐ शान्तिः शान्तिः शान्तिः ॥",
        hindi: "मित्र, वरुण, अर्यमा, इन्द्र, बृहस्पति, विष्णु—सब हमारे लिए कल्याणकारी हों। ब्रह्म को नमस्कार। वायु, तुम ही प्रत्यक्ष ब्रह्म हो। ॐ शांति, शांति, शांति।",
        english: "May Mitra, Varuna, Aryaman, Indra, Brihaspati, Vishnu be propitious to us. Salutations to Brahman. O Vayu, Thou art the visible Brahman. OM Peace, Peace, Peace.",
        simpleExplanation: "The opening prayer asking all cosmic forces for blessings. Vayu (breath/air) is called 'visible Brahman' since it's omnipresent.",
        simpleExplanationHindi: "आरंभिक प्रार्थना सभी ब्रह्मांडीय शक्तियों से आशीर्वाद मांगती है। वायु को 'प्रत्यक्ष ब्रह्म' कहा गया है।",
        nanoBananaPrompt: "Multiple cosmic deities blessing a student, with wind representing the visible Brahman.",
        wordMeanings: [
            { sanskrit: "pratyakṣa brahma", devanagari: "प्रत्यक्ष ब्रह्म", hindi: "दृश्य ब्रह्म", english: "visible Brahman" },
            { sanskrit: "śāntiḥ", devanagari: "शान्तिः", hindi: "शांति", english: "peace" }
        ]
    },
    {
        id: 2,
        valli: 1,
        anuvaka: 4,
        theme: "Prayer for Intelligence",
        sanskrit: "यश्छन्दसामृषभो विश्वरूपः । स मेन्द्रो मेधया स्पृणोतु । अमृतस्य देव धारणो भूयासम् । ब्रह्मणः कोशोऽसि मेधया पिहितः । श्रुतं मे गोपाय ॥",
        hindi: "वेदों में श्रेष्ठ (ओंकार) मुझे मेधा (बुद्धि) से भर दे। हे देव! मैं अमृतत्व का धारक बनूँ। आप ब्रह्म के कोश हैं। मेरे ज्ञान की रक्षा करें।",
        english: "May OM, the Supreme of the Vedas, strengthen me with wisdom. May I become a vessel of Immortality. You are the Sheath of Brahman. Protect what I have heard.",
        simpleExplanation: "A student's prayer for intelligence and memory—asking to become a vessel that holds immortal knowledge.",
        simpleExplanationHindi: "बुद्धि और स्मृति के लिए छात्र की प्रार्थना—अमृत ज्ञान धारण करने वाला पात्र बनने की माँग।",
        nanoBananaPrompt: "A student with an open head receiving wisdom light from OM symbol above.",
        wordMeanings: [
            { sanskrit: "medhā", devanagari: "मेधा", hindi: "बुद्धि", english: "intelligence/wisdom" },
            { sanskrit: "brahmaṇaḥ kośa", devanagari: "ब्रह्मणः कोश", hindi: "ब्रह्म का आवरण", english: "sheath of Brahman" }
        ]
    },
    {
        id: 3,
        valli: 1,
        anuvaka: 11,
        theme: "Convocation Address Part 1",
        sanskrit: "वेदमनूच्याचार्योऽन्तेवासिनमनुशास्ति । सत्यं वद । धर्मं चर । स्वाध्यायान्मा प्रमदः । आचार्याय प्रियं धनमाहृत्य प्रजातन्तुं मा व्यवच्छेत्सीः ॥",
        hindi: "वेद पढ़ाने के बाद, आचार्य शिष्य को उपदेश देते हैं: 'सत्य बोलो। धर्म का आचरण करो। स्वाध्याय में आलस्य मत करो। गुरु-दक्षिणा देकर, संतान परंपरा मत तोड़ो।'",
        english: "Having taught the Veda, the Teacher instructs: 'Speak Truth. Practice Dharma. Do not neglect Self-Study. After paying the Teacher, continue the family line.'",
        simpleExplanation: "THE FAMOUS GRADUATION SPEECH: The guru's final advice to students leaving the Gurukul—Speak truth, practice righteousness, keep learning!",
        simpleExplanationHindi: "प्रसिद्ध दीक्षांत भाषण: गुरुकुल छोड़ने वाले छात्रों को गुरु की अंतिम सलाह—सत्य बोलो, धर्म करो, सीखते रहो!",
        nanoBananaPrompt: "A guru giving final advice to graduating students at the edge of an ancient forest school.",
        wordMeanings: [
            { sanskrit: "satyaṃ vada", devanagari: "सत्यं वद", hindi: "सत्य बोलो", english: "speak truth" },
            { sanskrit: "dharmaṃ cara", devanagari: "धर्मं चर", hindi: "धर्म का आचरण करो", english: "practice righteousness" },
            { sanskrit: "svādhyāya", devanagari: "स्वाध्याय", hindi: "स्वाध्याय", english: "self-study" }
        ]
    },
    {
        id: 4,
        valli: 1,
        anuvaka: 11,
        theme: "Treat Parents as Gods",
        sanskrit: "मातृदेवो भव । पितृदेवो भव । आचार्यदेवो भव । अतिथिदेवो भव । यान्यनवद्यानि कर्माणि तानि सेवितव्यानि । नो इतराणि ॥",
        hindi: "माता को देवता मानो। पिता को देवता मानो। आचार्य को देवता मानो। अतिथि को देवता मानो। जो कर्म निर्दोष हैं, उन्हीं का सेवन करो, दूसरों का नहीं।",
        english: "Treat Mother as God. Treat Father as God. Treat Teacher as God. Treat Guest as God. Perform only blameless actions, not others.",
        simpleExplanation: "THE FOUR GODS: Mother, Father, Teacher, Guest—treat them as divine! Only do blameless actions.",
        simpleExplanationHindi: "चार देवता: माता, पिता, गुरु, अतिथि—उन्हें दिव्य मानो! केवल निर्दोष कर्म करो।",
        nanoBananaPrompt: "Four divine figures: Mother, Father, Teacher, and Guest, each radiating divine light.",
        wordMeanings: [
            { sanskrit: "mātṛ-devo bhava", devanagari: "मातृदेवो भव", hindi: "माता को देवता मानो", english: "treat mother as god" },
            { sanskrit: "atithi-devo bhava", devanagari: "अतिथिदेवो भव", hindi: "अतिथि को देवता मानो", english: "treat guest as god" },
            { sanskrit: "anavadya", devanagari: "अनवद्य", hindi: "निर्दोष", english: "blameless" }
        ]
    },
    {
        id: 5,
        valli: 1,
        anuvaka: 11,
        theme: "Give with Faith",
        sanskrit: "श्रद्धया देयम् । अश्रद्धयाऽदेयम् । श्रिया देयम् । ह्रिया देयम् । भिया देयम् । संविदा देयम् ॥",
        hindi: "श्रद्धा से देना चाहिए; बिना श्रद्धा के नहीं। सामर्थ्य के अनुसार, विनम्रता से, ईश्वर-भय से, मैत्री भाव से देना चाहिए।",
        english: "Give with Faith; do not give without faith. Give according to your means. Give with humility. Give with reverence. Give with sympathy.",
        simpleExplanation: "THE ART OF GIVING: Give with faith, according to your capacity, with humility, respect, and love.",
        simpleExplanationHindi: "देने की कला: श्रद्धा से, अपनी क्षमता के अनुसार, विनम्रता, सम्मान और प्रेम से दो।",
        nanoBananaPrompt: "Hands giving with golden light of faith, humility, and compassion radiating outward.",
        wordMeanings: [
            { sanskrit: "śraddhā", devanagari: "श्रद्धा", hindi: "श्रद्धा", english: "faith" },
            { sanskrit: "hrī", devanagari: "ह्री", hindi: "विनम्रता", english: "humility/modesty" }
        ]
    },

    // ==========================================
    // VALLI 2: BRAHMANANDA VALLI (BLISS)
    // ==========================================

    {
        id: 6,
        valli: 2,
        anuvaka: 0,
        theme: "Saha Navavatu (Famous Mantra)",
        sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
        hindi: "ॐ! वह हम दोनों (गुरु-शिष्य) की रक्षा करे। हम दोनों का पालन करे। हम साथ शक्ति प्राप्त करें। हमारा अध्ययन तेजमय हो। हम परस्पर द्वेष न करें।",
        english: "OM! May He protect us both. May He nourish us both. May we generate strength together. May our study be brilliant. May we not hate each other.",
        simpleExplanation: "THE FAMOUS 'SAHA NAVAVATU': Guru and student pray together for mutual protection, nourishment, energy, and harmony.",
        simpleExplanationHindi: "प्रसिद्ध 'सह नाववतु': गुरु और शिष्य एक साथ परस्पर रक्षा, पोषण, शक्ति और सामंजस्य के लिए प्रार्थना करते हैं।",
        nanoBananaPrompt: "A guru and student meditating together, surrounded by protective golden light.",
        wordMeanings: [
            { sanskrit: "saha nau avatu", devanagari: "सह नाववतु", hindi: "हम दोनों की रक्षा करे", english: "may He protect us both" },
            { sanskrit: "mā vidviṣāvahai", devanagari: "मा विद्विषावहै", hindi: "हम द्वेष न करें", english: "may we not hate each other" }
        ]
    },
    {
        id: 7,
        valli: 2,
        anuvaka: 1,
        theme: "Definition of Brahman",
        sanskrit: "सत्यं ज्ञानमनन्तं ब्रह्म । यो वेद निहितं गुहायां परमे व्योमन् । सोऽश्नुते सर्वान् कामान् सह ब्रह्मणा विपश्चितेति ॥",
        hindi: "ब्रह्म सत्य (Truth), ज्ञान (Knowledge), और अनंत (Infinite) है। जो उसे हृदय-गुफा में जानता है, वह सर्वज्ञ ब्रह्म के साथ सभी कामनाओं को भोगता है।",
        english: "Brahman is TRUTH, KNOWLEDGE, and INFINITY. He who knows Him in the cave of the heart enjoys all desires along with the Omniscient Brahman.",
        simpleExplanation: "THE DEFINITION: Brahman = Truth + Knowledge + Infinity. Know Him in your heart, and all desires are fulfilled!",
        simpleExplanationHindi: "परिभाषा: ब्रह्म = सत्य + ज्ञान + अनंत। उसे अपने हृदय में जानो, सभी इच्छाएं पूर्ण होती हैं!",
        nanoBananaPrompt: "Three words 'Truth, Knowledge, Infinity' merging into one radiant light in the heart.",
        wordMeanings: [
            { sanskrit: "satyam", devanagari: "सत्यम्", hindi: "सत्य", english: "truth" },
            { sanskrit: "jñānam", devanagari: "ज्ञानम्", hindi: "ज्ञान", english: "knowledge" },
            { sanskrit: "anantam", devanagari: "अनन्तम्", hindi: "अनंत", english: "infinite" }
        ]
    },
    {
        id: 8,
        valli: 2,
        anuvaka: 1,
        theme: "Evolution of Elements",
        sanskrit: "तस्मादात्मन आकाशः सम्भूतः । आकाशाद्वायुः । वायोरग्निः । अग्नेरापः । अद्भ्यः पृथिवी । पृथिव्या ओषधयः । ओषधीभ्योऽन्नम् । अन्नात्पुरुषः ॥",
        hindi: "उस आत्मा से आकाश उत्पन्न हुआ। आकाश से वायु। वायु से अग्नि। अग्नि से जल। जल से पृथ्वी। पृथ्वी से वनस्पति। वनस्पति से अन्न। अन्न से पुरुष (मनुष्य)।",
        english: "From that Self: Space → Air → Fire → Water → Earth → Herbs → Food → Man.",
        simpleExplanation: "EVOLUTION SEQUENCE: From Brahman emerges Space, then Air, Fire, Water, Earth, Plants, Food, and finally Man!",
        simpleExplanationHindi: "विकास क्रम: ब्रह्म से आकाश, फिर वायु, अग्नि, जल, पृथ्वी, पौधे, अन्न, और अंत में मनुष्य!",
        nanoBananaPrompt: "A cascading creation from pure light through space, air, fire, water, earth, plants to human.",
        wordMeanings: [
            { sanskrit: "ākāśa", devanagari: "आकाश", hindi: "आकाश", english: "space" },
            { sanskrit: "puruṣa", devanagari: "पुरुष", hindi: "मनुष्य", english: "man/person" }
        ]
    },
    {
        id: 9,
        valli: 2,
        anuvaka: 2,
        theme: "Kosha 1: Annamaya (Food)",
        sanskrit: "स वा एष पुरुषोऽन्नरसमयः । तस्माद्वा एतस्मादन्नरसमयात् । अन्योऽन्तर आत्मा प्राणमयः ॥",
        hindi: "यह पुरुष (शरीर) अन्न-रस-मय है। इस अन्नमय से भिन्न, भीतर एक अन्य आत्मा है जो प्राणमय है।",
        english: "This man consists of the essence of FOOD (Annamaya). Different from this, there is another inner Self of PRANA.",
        simpleExplanation: "SHEATH 1: The physical body is made of FOOD (Annamaya Kosha). But there's MORE inside!",
        simpleExplanationHindi: "कोश 1: भौतिक शरीर अन्न से बना है (अन्नमय कोश)। पर इसके अंदर और भी है!",
        nanoBananaPrompt: "The outermost layer of a human—the physical body made of food elements.",
        wordMeanings: [
            { sanskrit: "anna-rasa-maya", devanagari: "अन्नरसमय", hindi: "अन्न से बना", english: "made of food essence" },
            { sanskrit: "kośa", devanagari: "कोश", hindi: "आवरण/कोश", english: "sheath/layer" }
        ]
    },
    {
        id: 10,
        valli: 2,
        anuvaka: 2,
        theme: "Kosha 2: Pranamaya (Vital)",
        sanskrit: "तस्य प्राण एव शिरः । व्यानो दक्षिणः पक्षः । अपान उत्तरः पक्षः । आकाश आत्मा । पृथिवी पुच्छं प्रतिष्ठा ॥",
        hindi: "प्राणमय आत्मा का सिर 'प्राण' है; दाहिना पंख 'व्यान'; बायां पंख 'अपान'; 'आकाश' मध्य भाग; 'पृथ्वी' आधार है।",
        english: "The Pranamaya (Vital) Self has: Prana as head, Vyana as right wing, Apana as left wing, Space as trunk, Earth as support.",
        simpleExplanation: "SHEATH 2: Inside the food-body is the ENERGY body (Pranamaya Kosha)—the five pranas!",
        simpleExplanationHindi: "कोश 2: अन्नमय के अंदर ऊर्जा शरीर (प्राणमय कोश) है—पाँच प्राण!",
        nanoBananaPrompt: "A bird-shaped energy body with five pranas as its parts—head, wings, body, tail.",
        wordMeanings: [
            { sanskrit: "prāṇa-maya", devanagari: "प्राणमय", hindi: "प्राण से बना", english: "made of vital force" },
            { sanskrit: "pañca-prāṇa", devanagari: "पञ्चप्राण", hindi: "पाँच प्राण", english: "five vital airs" }
        ]
    },
    {
        id: 11,
        valli: 2,
        anuvaka: 3,
        theme: "Kosha 3: Manomaya (Mental)",
        sanskrit: "तस्माद्वा एतस्मात्प्राणमयात् । अन्योऽन्तर आत्मा मनोमयः । तेनैष पूर्णः ॥",
        hindi: "उस प्राणमय से भिन्न, भीतर एक अन्य आत्मा है जो मनोमय (Mental) है। उससे यह भरा हुआ है।",
        english: "Different from the Pranamaya, there is another inner Self of MIND (Manomaya). By that, this is filled.",
        simpleExplanation: "SHEATH 3: Inside the energy body is the MIND body (Manomaya Kosha)—thoughts and emotions!",
        simpleExplanationHindi: "कोश 3: ऊर्जा शरीर के अंदर मन का शरीर (मनोमय कोश) है—विचार और भावनाएं!",
        nanoBananaPrompt: "A mind-shaped layer inside the pranic body, filled with thoughts and emotions.",
        wordMeanings: [
            { sanskrit: "mano-maya", devanagari: "मनोमय", hindi: "मन से बना", english: "made of mind" }
        ]
    },
    {
        id: 12,
        valli: 2,
        anuvaka: 4,
        theme: "Kosha 4: Vijnanamaya (Intellect)",
        sanskrit: "तस्माद्वा एतस्मान्मनोमयात् । अन्योऽन्तर आत्मा विज्ञानमयः । तस्य श्रद्धैव शिरः । ऋतं दक्षिणः पक्षः । सत्यमुत्तरः पक्षः । योग आत्मा ॥",
        hindi: "उस मनोमय से भिन्न, भीतर विज्ञानमय आत्मा है। उसकी 'श्रद्धा' सिर है; 'ऋत' दाहिना पंख; 'सत्य' बायां पंख; 'योग' उसका मध्य है।",
        english: "Different from the Manomaya, there is the INTELLECT Self (Vijnanamaya). Faith is its head; Righteousness the right wing; Truth the left; Yoga its core.",
        simpleExplanation: "SHEATH 4: Inside the mind is the WISDOM body (Vijnanamaya Kosha)—discrimination, faith, truth!",
        simpleExplanationHindi: "कोश 4: मन के अंदर विवेक का शरीर (विज्ञानमय कोश) है—विवेक, श्रद्धा, सत्य!",
        nanoBananaPrompt: "A wisdom-shaped layer with Faith as head, Truth and Righteousness as wings, Yoga as heart.",
        wordMeanings: [
            { sanskrit: "vijñāna-maya", devanagari: "विज्ञानमय", hindi: "बुद्धि से बना", english: "made of intellect" },
            { sanskrit: "śraddhā", devanagari: "श्रद्धा", hindi: "श्रद्धा", english: "faith" }
        ]
    },
    {
        id: 13,
        valli: 2,
        anuvaka: 5,
        theme: "Kosha 5: Anandamaya (Bliss)",
        sanskrit: "तस्माद्वा एतस्माद्विज्ञानमयात् । अन्योऽन्तर आत्माऽऽनन्दमयः । तस्य प्रियमेव शिरः । मोदो दक्षिणः पक्षः । प्रमोद उत्तरः पक्षः । आनन्द आत्मा । ब्रह्म पुच्छं प्रतिष्ठा ॥",
        hindi: "उस विज्ञानमय से भिन्न, भीतर आनन्दमय आत्मा है। 'प्रिय' सिर है; 'मोद' दाहिना पंख; 'प्रमोद' बायां पंख; 'आनन्द' मध्य है; और ब्रह्म आधार है।",
        english: "Different from Vijnanamaya, there is the BLISS Self (Anandamaya). Love is head; Joy right wing; Delight left; Bliss the core; BRAHMAN is the support!",
        simpleExplanation: "SHEATH 5: Innermost is the BLISS body (Anandamaya Kosha)—and its support is BRAHMAN itself!",
        simpleExplanationHindi: "कोश 5: सबसे भीतर आनंद का शरीर (आनंदमय कोश) है—और इसका आधार स्वयं ब्रह्म है!",
        nanoBananaPrompt: "The innermost bliss sheath with love, joy, delight, supported by infinite Brahman light.",
        wordMeanings: [
            { sanskrit: "ānanda-maya", devanagari: "आनन्दमय", hindi: "आनंद से बना", english: "made of bliss" },
            { sanskrit: "brahma puccham", devanagari: "ब्रह्म पुच्छम्", hindi: "ब्रह्म आधार है", english: "Brahman is the support" }
        ]
    },
    {
        id: 14,
        valli: 2,
        anuvaka: 7,
        theme: "Raso Vai Sah (He is Bliss)",
        sanskrit: "रसो वै सः । रसं ह्येवायं लब्ध्वाऽऽनन्दी भवति । को ह्येवान्यात्कः प्राण्यात् । यदेष आकाश आनन्दो न स्यात् ॥",
        hindi: "वह (परमात्मा) ही 'रस' (Essence/Joy) है। इस रस को पाकर ही जीव आनंदित होता है। यदि हृदय आनंद से भरा न होता, तो कौन जीवित रहता?",
        english: "He is verily the RASA (Essence/Joy). Having obtained this Rasa, one becomes blissful. Who could live if this Space were not filled with Bliss?",
        simpleExplanation: "GOD = JUICE/ESSENCE/FLAVOR! All joy comes from Him. Without His bliss in your heart, you couldn't even breathe!",
        simpleExplanationHindi: "ईश्वर = रस/सार/स्वाद! सारा आनंद उससे आता है। उसका आनंद हृदय में न हो तो सांस भी नहीं ले सकते!",
        nanoBananaPrompt: "A cosmic essence/juice flowing from divine source into all hearts, causing joy.",
        wordMeanings: [
            { sanskrit: "rasaḥ vai saḥ", devanagari: "रसो वै सः", hindi: "वह ही रस है", english: "He is verily the Essence" }
        ]
    },
    {
        id: 15,
        valli: 2,
        anuvaka: 8,
        theme: "Calculus of Bliss",
        sanskrit: "सैषाऽऽनन्दस्य मीमांसा भवति । युवा स्यात्साधुयुवाऽध्यायकः दृढिष्ठो बलिष्ठः । तस्येयं पृथिवी सर्वा वित्तस्य पूर्णा स्यात् । स एको मानुष आनन्दः ॥",
        hindi: "यह आनंद की मीमांसा है: एक युवा, सज्जन, विद्वान, दृढ़, बलवान, जिसकी पूरी पृथ्वी धन से भरी हो—यह 'एक मानुष आनंद' है।",
        english: "This is the Analysis of Bliss: A young, good, learned, firm, strong man with the whole earth full of wealth = 1 Unit of Human Bliss.",
        simpleExplanation: "BLISS MATHEMATICS: Define '1 unit' of human joy. Then: 100x = divine level, 100^n x = Brahman's bliss!",
        simpleExplanationHindi: "आनंद गणित: '1 इकाई' मानव सुख परिभाषित करो। फिर: 100x = दिव्य स्तर, 100^n x = ब्रह्म का आनंद!",
        nanoBananaPrompt: "A mathematical pyramid showing human joy multiplying 100x at each divine level.",
        wordMeanings: [
            { sanskrit: "ānanda-mīmāṃsā", devanagari: "आनन्दमीमांसा", hindi: "आनंद की गणना", english: "analysis of bliss" },
            { sanskrit: "mānuṣa ānanda", devanagari: "मानुष आनन्द", hindi: "मानवीय आनंद", english: "human bliss" }
        ]
    },
    {
        id: 16,
        valli: 2,
        anuvaka: 9,
        theme: "Beyond Mind and Speech",
        sanskrit: "यतो वाचो निवर्तन्ते । अप्राप्य मनसा सह । आनन्दं ब्रह्मणो विद्वान् । न बिभेति कुतश्चनेति ॥",
        hindi: "जहाँ से वाणी मन के साथ, उसे न पाकर वापस लौट आती है—उस ब्रह्म के आनंद को जानने वाला कभी किसी से नहीं डरता।",
        english: "Whence words return along with the mind, not attaining It—he who knows that Bliss of Brahman fears nothing at all.",
        simpleExplanation: "BRAHMAN IS BEYOND WORDS AND MIND! But know His bliss, and you'll fear NOTHING ever.",
        simpleExplanationHindi: "ब्रह्म शब्द और मन से परे है! पर उसके आनंद को जानो, और किसी से कभी नहीं डरोगे।",
        nanoBananaPrompt: "Words and thoughts bouncing back from an infinite light, a fearless sage standing beside it.",
        wordMeanings: [
            { sanskrit: "yato vāco nivartante", devanagari: "यतो वाचो निवर्तन्ते", hindi: "जहाँ से वाणी लौट जाती है", english: "whence words return" },
            { sanskrit: "na bibheti", devanagari: "न बिभेति", hindi: "डरता नहीं", english: "fears not" }
        ]
    },

    // ==========================================
    // VALLI 3: BHRIGU VALLI (INVESTIGATION)
    // ==========================================

    {
        id: 17,
        valli: 3,
        anuvaka: 1,
        theme: "Bhrigu's Question",
        sanskrit: "भृगुर्वै वारुणिः वरुणं पितरमुपससार । अधीहि भगवो ब्रह्मेति । तस्मा एतत्प्रोवाच । यतो वा इमानि भूतानि जायन्ते । येन जातानि जीवन्ति । यत्प्रयन्त्यभिसंविशन्ति । तद्विजिज्ञासस्व । तद् ब्रह्मेति ॥",
        hindi: "भृगु ने पिता वरुण से कहा: 'मुझे ब्रह्म का उपदेश दीजिये।' वरुण ने कहा: 'जिससे सब उत्पन्न होते हैं, जिससे जीते हैं, जिसमें लीन होते हैं—उसे जानने की इच्छा करो। वही ब्रह्म है।'",
        english: "Bhrigu asked his father Varuna: 'Teach me Brahman.' Varuna said: 'That from which beings are born, by which they live, into which they return—seek to know That. That is Brahman.'",
        simpleExplanation: "THE DEFINITION: Brahman is the SOURCE, SUSTAINER, and DESTINATION of all beings!",
        simpleExplanationHindi: "परिभाषा: ब्रह्म सभी प्राणियों का स्रोत, पालक, और गंतव्य है!",
        nanoBananaPrompt: "A father sage pointing to a cycle—birth, life, death—all returning to one source.",
        wordMeanings: [
            { sanskrit: "yataḥ jāyante", devanagari: "यतः जायन्ते", hindi: "जिससे जन्मते हैं", english: "from which born" },
            { sanskrit: "yat prayanty abhisaṃviśanti", devanagari: "यत्प्रयन्त्यभिसंविशन्ति", hindi: "जिसमें लीन होते हैं", english: "into which they return" }
        ]
    },
    {
        id: 18,
        valli: 3,
        anuvaka: 2,
        theme: "Discovery: Food is Brahman",
        sanskrit: "स तपोऽतप्यत । स तपस्तप्त्वा । अन्नं ब्रह्मेति व्यजानात् ॥",
        hindi: "उसने तप किया। तप करके उसने जाना कि 'अन्न' (Matter) ही ब्रह्म है।",
        english: "He performed Tapas. Having performed Tapas, he realized: FOOD (Matter) is Brahman.",
        simpleExplanation: "FIRST DISCOVERY: Through meditation, Bhrigu realized the physical world (food/matter) is Brahman.",
        simpleExplanationHindi: "पहली खोज: ध्यान से भृगु ने जाना कि भौतिक जगत (अन्न/पदार्थ) ब्रह्म है।",
        nanoBananaPrompt: "A meditating sage realizing the physical world of food and matter is divine.",
        wordMeanings: [
            { sanskrit: "annaṃ brahma", devanagari: "अन्नं ब्रह्म", hindi: "अन्न ही ब्रह्म है", english: "Food is Brahman" }
        ]
    },
    {
        id: 19,
        valli: 3,
        anuvaka: 6,
        theme: "Final Discovery: Bliss is Brahman",
        sanskrit: "स तपोऽतप्यत । स तपस्तप्त्वा । आनन्दो ब्रह्मेति व्यजानात् । आनन्दाद्ध्येव खल्विमानि भूतानि जायन्ते । सैषा भार्गवी वारुणी विद्या ॥",
        hindi: "उसने तप किया। तप करके उसने जाना कि 'आनन्द' ही ब्रह्म है। आनंद से ही ये प्राणी उत्पन्न होते हैं। यह भार्गवी-वारुणी विद्या है।",
        english: "He performed Tapas. He realized: BLISS (Ananda) is Brahman. From Bliss, beings are born. This is the Bhargavi-Varuni Knowledge.",
        simpleExplanation: "FINAL DISCOVERY: After Food → Prana → Mind → Intellect, Bhrigu finally realized BLISS is Brahman!",
        simpleExplanationHindi: "अंतिम खोज: अन्न → प्राण → मन → बुद्धि के बाद, भृगु ने जाना आनंद ही ब्रह्म है!",
        nanoBananaPrompt: "A sage in final realization, surrounded by layers that peel away to reveal pure bliss.",
        wordMeanings: [
            { sanskrit: "ānandaṃ brahma", devanagari: "आनन्दं ब्रह्म", hindi: "आनंद ही ब्रह्म है", english: "Bliss is Brahman" },
            { sanskrit: "bhārgavī-vāruṇī vidyā", devanagari: "भार्गवी वारुणी विद्या", hindi: "भृगु-वरुण का ज्ञान", english: "Bhrigu-Varuna Knowledge" }
        ]
    },
    {
        id: 20,
        valli: 3,
        anuvaka: 10,
        theme: "Song of the Realized Soul",
        sanskrit: "अहमन्नमहमन्नमहमन्नम् । अहमन्नादोऽहमन्नादोऽहमन्नादः । अहं विश्वं भुवनमभ्यभवाम् । सुवर्न ज्योतीः ॥",
        hindi: "मैं ही अन्न हूँ! मैं ही अन्न हूँ! मैं ही खाने वाला हूँ! मैं इस सम्पूर्ण विश्व को व्याप्त करके स्थित हूँ। मेरा तेज सूर्य के समान है।",
        english: "I am FOOD! I am FOOD! I am the EATER of food! I have overcome the whole world. My light is like the Sun!",
        simpleExplanation: "THE ECSTATIC SONG: The realized sage sings—'I am both nourishment AND nourisher! I pervade all! I shine like the sun!'",
        simpleExplanationHindi: "परमानंद गीत: ज्ञानी गाता है—'मैं ही भोजन और भोक्ता दोनों हूँ! सब में व्याप्त हूँ! सूर्य जैसा चमकता हूँ!'",
        nanoBananaPrompt: "A radiant sage singing ecstatically, being both food and eater, pervading everything.",
        wordMeanings: [
            { sanskrit: "aham annam", devanagari: "अहमन्नम्", hindi: "मैं ही अन्न हूँ", english: "I am food" },
            { sanskrit: "aham annādaḥ", devanagari: "अहमन्नादः", hindi: "मैं ही खाने वाला हूँ", english: "I am the eater" },
            { sanskrit: "viśvaṃ bhuvanam abhyabhavām", devanagari: "विश्वं भुवनम् अभ्यभवाम्", hindi: "विश्व को व्याप्त किया", english: "I have overcome the world" }
        ]
    }
];

// Metadata
export const TAITTIRIYA_METADATA = {
    id: "taittiriya",
    name: "Taittiriya",
    nameSanskrit: "तैत्तिरीयोपनिषद्",
    veda: "Krishna Yajur Veda",
    shlokaCount: 20,  // 20 selected key passages
    valliCount: 3,
    vallis: {
        1: { name: "Shiksha Valli", theme: "Education & Ethics" },
        2: { name: "Brahmananda Valli", theme: "Bliss & Five Sheaths" },
        3: { name: "Bhrigu Valli", theme: "Investigation of Brahman" }
    },
    panchaKosha: {
        1: { name: "Annamaya", meaning: "Food Sheath", verse: 9 },
        2: { name: "Pranamaya", meaning: "Vital Sheath", verse: 10 },
        3: { name: "Manomaya", meaning: "Mental Sheath", verse: 11 },
        4: { name: "Vijnanamaya", meaning: "Intellect Sheath", verse: 12 },
        5: { name: "Anandamaya", meaning: "Bliss Sheath", verse: 13 }
    },
    famousVerses: {
        sahaNavavatu: { id: 6, valli: 2, anuvaka: 0 },
        convocationAddress: { id: 3, valli: 1, anuvaka: 11 },
        parentAsGod: { id: 4, valli: 1, anuvaka: 11 },
        brahmanDefinition: { id: 7, valli: 2, anuvaka: 1 },
        rasoVaiSah: { id: 14, valli: 2, anuvaka: 7 }
    }
};
