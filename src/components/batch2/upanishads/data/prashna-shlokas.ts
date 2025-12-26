export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface PrashnaDataEntry {
    id: number;
    prashna: 1 | 2 | 3 | 4 | 5 | 6;
    verse: number;
    sanskrit: string;
    hindi: string;
    english: string;
    theme: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
    wordMeanings?: WordMeaning[];
}

export const prashnaData: PrashnaDataEntry[] = [
    // ==========================================
    // PRASHNA 1: THE SOURCE OF CREATION
    // Questioner: Kabandhi Katyayana
    // ==========================================

    {
        id: 1,
        prashna: 1,
        verse: 1,
        theme: "The Arrival of the Seekers",
        sanskrit: "ॐ सुकेशा च भारद्वाजः शैव्यश्च सत्यकामः सौर्यायणी च गार्ग्यः कौसल्यश्चाश्वलायनो भार्गवो वैदर्भिः कबन्धी कात्यायनस्ते हैते ब्रह्मपरा ब्रह्मनिष्ठाः परं ब्रह्मान्वेषमाणा एष ह वै तत्सर्वं वक्ष्यतीति ते ह समित्पाणयो भगवन्तं पिप्पलादमुपसन्नाः ॥ १ ॥",
        hindi: "ॐ! भरद्वाज के पुत्र सुकेशा, शिवि के पुत्र सत्यकाम, सूर्य के वंशज गार्ग्य, अश्वल के पुत्र कौसल्य, विदर्भ के भार्गव, और कत्य के पुत्र कबन्धी—ये सभी ब्रह्म-परायण और ब्रह्म-निष्ठ थे। वे परम ब्रह्म की खोज कर रहे थे। 'यह गुरु हमें वह सब बताएंगे'—ऐसा सोचकर वे हाथ में समिधा लेकर भगवान पिप्पलाद के पास पहुँचे।",
        english: "Om! Sukesha, Satyakama, Gargya, Kousalya, Bhargava, and Kabandhi—devoted to Brahman and steadfast in Brahman—were searching for the Supreme. Thinking 'He will tell us everything,' they approached the Venerable Pippalada with sacrificial fuel in their hands.",
        simpleExplanation: "Six great seekers approach Guru Pippalada with humility (fuel in hand) to learn the Ultimate Truth.",
        simpleExplanationHindi: "छह महान साधक विनम्रता (हाथ में समिधा) के साथ परम सत्य जानने के लिए गुरु पिप्पलाद के पास पहुँचते हैं।",
        nanoBananaPrompt: "Six ascetics walking through a forest carrying bundles of wood, approaching a radiant sage sitting under a tree.",
        wordMeanings: [
            { sanskrit: "brahmaparāḥ", devanagari: "ब्रह्मपराः", hindi: "ब्रह्म परायण", english: "devoted to Brahman" },
            { sanskrit: "brahmanisṭhāḥ", devanagari: "ब्रह्मनिष्ठाः", hindi: "ब्रह्म में स्थिर", english: "established in Brahman" },
            { sanskrit: "samit-pāṇayaḥ", devanagari: "समित्पाणयः", hindi: "समिधा हाथ में लिए", english: "fuel in hands" },
            { sanskrit: "pippaladam", devanagari: "पिप्पलादम्", hindi: "पिप्पलाद को", english: "to Pippalada" },
            { sanskrit: "upasannāḥ", devanagari: "उपसन्नाः", hindi: "निकट आए", english: "approached" }
        ]
    },
    {
        id: 2,
        prashna: 1,
        verse: 2,
        theme: "The Penance",
        sanskrit: "तान्ह स ऋषिरुवाच भूय एव तपसा ब्रह्मचर्येण श्रद्धया संवत्सरं संवत्स्यथ यथाकामं प्रश्नान्पृच्छथ यदि विज्ञास्यामः सर्वं ह वो वक्ष्याम इति ॥ २ ॥",
        hindi: "उस ऋषि (पिप्पलाद) ने उनसे कहा: 'तुम लोग फिर से एक वर्ष तक तप, ब्रह्मचर्य और श्रद्धा के साथ यहाँ निवास करो। उसके बाद अपनी इच्छानुसार प्रश्न पूछना। यदि हम जानते होंगे, तो तुम्हें सब कुछ बता देंगे।'",
        english: "The Sage said: 'Live here again for a year with austerity, celibacy, and faith. Then ask questions as you please. If we know, we shall tell you everything.'",
        simpleExplanation: "Even advanced seekers must prepare! The Guru tests their patience and discipline for one full year before teaching.",
        simpleExplanationHindi: "उन्नत साधकों को भी तैयारी करनी पड़ती है! गुरु उपदेश देने से पहले एक साल तक उनके धैर्य और अनुशासन की परीक्षा लेते हैं।",
        nanoBananaPrompt: "Six students meditating in a forest ashram through varying seasons (rain, sun, winter), waiting for the master's teaching.",
        wordMeanings: [
            { sanskrit: "tapasā", devanagari: "तपसा", hindi: "तपस्या से", english: "by austerity" },
            { sanskrit: "brahmacaryena", devanagari: "ब्रह्मचर्येण", hindi: "ब्रह्मचर्य से", english: "by celibacy" },
            { sanskrit: "śraddhayā", devanagari: "श्रद्धया", hindi: "श्रद्धा से", english: "with faith" },
            { sanskrit: "saṁvatsaram", devanagari: "संवत्सरम्", hindi: "एक वर्ष", english: "one year" }
        ]
    },
    {
        id: 3,
        prashna: 1,
        verse: 3,
        theme: "The First Question",
        sanskrit: "अथ कबन्धी कात्यायन उपेत्य पप्रच्छ । भगवन् कुतो ह वा इमाः प्रजाः प्रजायन्त इति ॥ ३ ॥",
        hindi: "तब (एक वर्ष बाद) कात्यायन कबन्धी ने पास आकर पूछा: 'हे भगवन्! ये समस्त प्रजाएं (प्राणी) कहाँ से उत्पन्न होती हैं?'",
        english: "Then Kabandhi Katyayana approached and asked: 'Venerable Sir, whence are these creatures born?'",
        simpleExplanation: "QUESTION 1: The Origin of Life. Where do all these beings actually come from?",
        simpleExplanationHindi: "प्रश्न 1: जीवन की उत्पत्ति। ये सभी प्राणी वास्तव में कहाँ से आते हैं?",
        nanoBananaPrompt: "A student bowing respectfully to the sage, asking a question while pointing at the diverse life forms in the forest.",
        wordMeanings: [
            { sanskrit: "kutaḥ", devanagari: "कुतः", hindi: "कहाँ से", english: "from where" },
            { sanskrit: "prajāḥ", devanagari: "प्रजाः", hindi: "प्रजा/प्राणी", english: "creatures" },
            { sanskrit: "prajāyante", devanagari: "प्रजायन्ते", hindi: "उत्पन्न होते हैं", english: "are born" }
        ]
    },
    {
        id: 4,
        prashna: 1,
        verse: 4,
        theme: "Rayi and Prana",
        sanskrit: "तस्मै स होवाच प्रजाकामो वै प्रजापतिः स तपोऽतप्यत स तपस्तप्त्वा । स मिथुनमुत्पादयते रयिं च प्राणं चेत्येतौ मे बहुधा प्रजाः करिष्यत इति ॥ ४ ॥",
        hindi: "पिप्पलाद ने कहा: 'प्रजापति को प्रजा उत्पन्न करने की इच्छा हुई। उन्होंने तप किया और एक जोड़ा (Mithuna) उत्पन्न किया—रयि (पदार्थ) और प्राण (ऊर्जा)। यह सोचकर कि ये दोनों मेरे लिए बहुत प्रकार की प्रजा उत्पन्न करेंगे।'",
        english: "He replied: 'Prajapati performed meditation and created a pair—Rayi (Matter) and Prana (Energy)—thinking, \"These two will produce creatures for me in manifold ways.\"'",
        simpleExplanation: "Creation starts with a DUALITY: Matter (Rayi) and Energy (Prana). Like Shiva and Shakti, or Mass and Energy.",
        simpleExplanationHindi: "सृष्टि की शुरुआत द्वैत से होती है: पदार्थ (रयि) और ऊर्जा (प्राण)। शिव और शक्ति, या द्रव्यमान और ऊर्जा की तरह।",
        nanoBananaPrompt: "A cosmic explosion splitting into two streams: one stream of glowing golden light (Prana) and one stream of solid lunar matter (Rayi).",
        wordMeanings: [
            { sanskrit: "prajāpatiḥ", devanagari: "प्रजापतिः", hindi: "प्रजापति", english: "Lord of Creation" },
            { sanskrit: "mithunam", devanagari: "मिथुनम्", hindi: "जोड़ा", english: "pair" },
            { sanskrit: "rayim", devanagari: "रयिम्", hindi: "पदार्थ", english: "matter" },
            { sanskrit: "prāṇam", devanagari: "प्राणम्", hindi: "प्राण/ऊर्जा", english: "life-force" }
        ]
    },
    {
        id: 5,
        prashna: 1,
        verse: 5,
        theme: "Sun and Moon",
        sanskrit: "आदित्यो ह वै प्राणो रयिरेव चन्द्रमा रयिर्वा एतत्सर्वं यन्मूर्तं चामूर्तं च तस्मान्मूर्तिरेव रयिः ॥ ५ ॥",
        hindi: "आदित्य (सूर्य) ही प्राण है, और चन्द्रमा ही रयि (पदार्थ) है। वास्तव में, जो कुछ भी मूर्त (स्थूल) और अमूर्त (सूक्ष्म) है, वह सब रयि ही है। इसलिए मूर्ति ही रयि है।",
        english: "The Sun is Prana, and the Moon is Rayi (Matter). Indeed, all this—that which has form and that which is formless—is Rayi. Therefore, form itself is Rayi.",
        simpleExplanation: "Sun = Spirit/Life Force. Moon = Matter/Form. Everything with form is 'Food' for structure.",
        simpleExplanationHindi: "सूर्य = आत्मा/जीवन शक्ति। चंद्रमा = पदार्थ/रूप। रूप वाली हर चीज संरचना के लिए 'भोजन' है।",
        nanoBananaPrompt: "The Sun shining brightly representing Life, and the Moon glowing softly representing Matter, balancing each other in space.",
        wordMeanings: [
            { sanskrit: "ādityaḥ", devanagari: "आदित्यः", hindi: "सूर्य", english: "Sun" },
            { sanskrit: "prāṇaḥ", devanagari: "प्राणः", hindi: "प्राण", english: "life-force" },
            { sanskrit: "candramāḥ", devanagari: "चन्द्रमाः", hindi: "चंद्रमा", english: "Moon" },
            { sanskrit: "mūrtiḥ", devanagari: "मूर्तिः", hindi: "रूप/आकार", english: "form" }
        ]
    },
    {
        id: 6,
        prashna: 1,
        verse: 6,
        theme: "The Sun Enveloping All",
        sanskrit: "अथादित्य उदयन्यत्प्राचीं दिशं प्रविशति तेन प्राच्यान्प्राणान्रश्मिषु सन्निधत्ते । यद्दक्षिणां यत्प्रतीचीं यदुदीचीं यदधो यदूर्ध्वं यदन्तरा दिशो यत्सर्वं प्रकाशयति तेन सर्वान्प्राणान्रश्मिषु सन्निधत्ते ॥ ६ ॥",
        hindi: "जब सूर्य पूर्व में उदय होता है, तो वह अपनी किरणों में पूर्व के प्राणों को धारण करता है। जब वह अन्य सभी दिशाओं को प्रकाशित करता है, तो वह उन सभी प्राणों को अपनी किरणों में समेट लेता है।",
        english: "When the Sun rises in the East, he holds the eastern life-forces in his rays. Illuminating all directions, he acts as the support of all lives.",
        simpleExplanation: "The Sun embraces the whole world with its rays, giving life to every direction.",
        simpleExplanationHindi: "सूर्य अपनी किरणों से पूरी दुनिया को गले लगाता है और हर दिशा को जीवन देता है।",
        nanoBananaPrompt: "A sunrise illuminating a landscape, with golden rays reaching into every corner of the forest, mountains, and rivers.",
        wordMeanings: [
            { sanskrit: "udayan", devanagari: "उदयन्", hindi: "उदय होता", english: "rising" },
            { sanskrit: "prācīm diśam", devanagari: "प्राचीं दिशम्", hindi: "पूर्व दिशा", english: "eastern direction" },
            { sanskrit: "raśmiṣu", devanagari: "रश्मिषु", hindi: "किरणों में", english: "in rays" },
            { sanskrit: "prakāśayati", devanagari: "प्रकाशयति", hindi: "प्रकाशित करता है", english: "illuminates" }
        ]
    },
    {
        id: 7,
        prashna: 1,
        verse: 7,
        theme: "The Universal Life",
        sanskrit: "स एष वैश्वानरो विश्वरूपः प्राणोऽग्निरुदयते । तदेतदृचाभ्युक्तम् ॥ ७ ॥",
        hindi: "वह यह 'वैश्वानर', विश्वरूप, प्राण और अग्नि के रूप में उदय हो रहा है।",
        english: "He is the Vaishvanara (Universal Fire), the All-Formed, the Life-Breath, the Fire that rises.",
        simpleExplanation: "The Sun isn't just a physical ball of fire; it is the COSMIC FIRE (Vaishvanara) that digests and animates everything.",
        simpleExplanationHindi: "सूर्य केवल आग का गोला नहीं है; यह ब्रह्मांडीय अग्नि (वैश्वानर) है जो हर चीज को पचाती और जीवित करती है।",
        nanoBananaPrompt: "The sun appearing as a giant cosmic fire entity, with a face that looks upon the entire world.",
        wordMeanings: [
            { sanskrit: "vaiśvānaraḥ", devanagari: "वैश्वानरः", hindi: "वैश्वानर", english: "Universal Fire" },
            { sanskrit: "viśvarūpaḥ", devanagari: "विश्वरूपः", hindi: "विश्वरूप", english: "All-formed" },
            { sanskrit: "prāṇaḥ", devanagari: "प्राणः", hindi: "प्राण", english: "life-breath" },
            { sanskrit: "agniḥ", devanagari: "अग्निः", hindi: "अग्नि", english: "fire" }
        ]
    },
    {
        id: 8,
        prashna: 1,
        verse: 8,
        theme: "The Thousand-Rayed Sun",
        sanskrit: "विश्वरूपं हरिणं जातवेदसं परायणं ज्योतिरेकं तपन्तम् । सहस्ररश्मिः शतधा वर्तमानः प्राणः प्रजानामुदयत्येष सूर्यः ॥ ८ ॥",
        hindi: "उस विश्वरूप, हरिण, जातवेदा, सबके परम आश्रय, अद्वितीय ज्योति और तपते हुए सूर्य को देखो। यह सहस्र रश्मियों वाला प्राण के रूप में उदय हो रहा है।",
        english: "Behold the All-Formed, the Golden One, the Omniscient, the Supreme Resort. This Sun, with a thousand rays, rises as the Life of all creatures.",
        simpleExplanation: "A hymn to the Sun: Golden, Omniscient, Thousand-rayed, the very Life of all beings.",
        simpleExplanationHindi: "सूर्य की स्तुति: स्वर्ण, सर्वज्ञ, हजार किरणों वाला, सभी प्राणियों का जीवन।",
        nanoBananaPrompt: "A majestic, golden sun with exactly one thousand distinct rays, each ray touching a different living creature.",
        wordMeanings: [
            { sanskrit: "sahasraraśmiḥ", devanagari: "सहस्ररश्मिः", hindi: "हजार किरणों वाला", english: "thousand-rayed" },
            { sanskrit: "hariṇam", devanagari: "हरिणम्", hindi: "स्वर्ण/हरा", english: "golden" },
            { sanskrit: "jātavedasam", devanagari: "जातवेदसम्", hindi: "सर्वज्ञ", english: "omniscient" },
            { sanskrit: "sūryaḥ", devanagari: "सूर्यः", hindi: "सूर्य", english: "Sun" }
        ]
    },
    {
        id: 9,
        prashna: 1,
        verse: 9,
        theme: "The Year as Time",
        sanskrit: "संवत्सरो वै प्रजापतिस्तस्यायने दक्षिणं चोत्तरं च । तद्ये ह वै तदिष्टापूर्ते कृतमित्युपासते ते चान्द्रमसमेव लोकमभिजयन्ते । त एव पुनरावर्तन्ते तस्मादेते ऋषयः प्रजाकामा दक्षिणं प्रतिपद्यन्ते । एष ह वै रयिर्यः पितृयाणः ॥ ९ ॥",
        hindi: "संवत्सर (वर्ष) ही प्रजापति है। इसके दो मार्ग हैं—दक्षिण और उत्तर। जो 'इष्टापूर्त' (कर्मकांड) करते हैं, वे 'चंद्रलोक' (रयि) जाकर वापस लौटते हैं। यह 'दक्षिण मार्ग' है।",
        english: "The Year is Prajapati. It has two paths: South and North. Performers of rituals go to the Lunar World (Rayi) and return. This is the Path of the Fathers.",
        simpleExplanation: "THE TWO PATHS: Rituals bring you back (Recycling/Rebirth). This is the Southern Path of the Moon/Matter.",
        simpleExplanationHindi: "दो पथ: कर्मकांड आपको वापस लाते हैं (पुनर्जन्म)। यह चंद्रमा/पदार्थ का दक्षिणी पथ है।",
        nanoBananaPrompt: "A fork in the road of the cosmos: one path leading to a silvery moon (rebirth), the other to a golden sun (liberation).",
        wordMeanings: [
            { sanskrit: "saṁvatsaraḥ", devanagari: "संवत्सरः", hindi: "वर्ष", english: "year" },
            { sanskrit: "prajāpatiḥ", devanagari: "प्रजापतिः", hindi: "प्रजापति", english: "Lord of Creation" },
            { sanskrit: "dakṣiṇam", devanagari: "दक्षिणम्", hindi: "दक्षिण", english: "southern" },
            { sanskrit: "cāndramasam lokam", devanagari: "चान्द्रमसं लोकम्", hindi: "चंद्र लोक", english: "lunar world" },
            { sanskrit: "pitṛyāṇaḥ", devanagari: "पितृयाणः", hindi: "पितृयान", english: "path of fathers" }
        ]
    },
    {
        id: 10,
        prashna: 1,
        verse: 10,
        theme: "The Northern Path",
        sanskrit: "अथोत्तरेण तपसा ब्रह्मचर्येण श्रद्धया विद्ययात्मानमन्विष्यादित्यमभिजयन्ते । एतद्वै प्राणानावायतनमेतदमृतमभयमेतत्परायणमेतस्मान्न पुनरावर्तन्त इत्येष निरोधः । तदेष श्लोकः ॥ १० ॥",
        hindi: "परन्तु जो 'उत्तर मार्ग' से—तप, ब्रह्मचर्य और विद्या द्वारा—आत्मा को खोजते हैं, वे 'आदित्य' (सूर्य) को जीत लेते हैं। वहाँ से वे पुनः नहीं लौटते। यह मोक्ष है।",
        english: "But those who seek the Self through the Northern Path—by austerity and knowledge—attain the Sun. From there, they do not return. This is the end of rebirth.",
        simpleExplanation: "The Northern Path of the Sun leads to LIBERATION (No return). It requires Discipline and Knowledge, not just rituals.",
        simpleExplanationHindi: "सूर्य का उत्तरी पथ मुक्ति की ओर ले जाता है (वापसी नहीं)। इसके लिए केवल कर्मकांड नहीं, बल्कि अनुशासन और ज्ञान की आवश्यकता है।",
        nanoBananaPrompt: "Ascetics walking up a golden staircase of light towards the sun, disappearing into the brilliance.",
        wordMeanings: [
            { sanskrit: "uttareṇa", devanagari: "उत्तरेण", hindi: "उत्तर से", english: "by northern" },
            { sanskrit: "ādityaṃ", devanagari: "आदित्यम्", hindi: "सूर्य", english: "Sun" },
            { sanskrit: "amṛtam", devanagari: "अमृतम्", hindi: "अमरता", english: "immortality" },
            { sanskrit: "nirodhaḥ", devanagari: "निरोधः", hindi: "निरोध/अंत", english: "cessation/end" }
        ]
    },
    {
        id: 11,
        prashna: 1,
        verse: 11,
        theme: "Two Views of the Sun",
        sanskrit: "पञ्चपादं पितरं द्वादशाकृतिं दिव आहुः परे अर्धे पुरीषिणम् । अथेमे अन्य उ परे विचक्षणं सप्तचक्रे षडर आहुरर्पितमिति ॥ ११ ॥",
        hindi: "कुछ उसे पाँच पैरों (ऋतुओं) और बारह आकृतियों (महीनों) वाला 'पिता' कहते हैं। अन्य उसे सात पहियों और छह आरों वाले रथ में स्थित 'सर्वज्ञ' कहते हैं।",
        english: "Some call Him the Father with five feet (seasons) and twelve forms (months). Others speak of Him as the Omniscient One seated in a chariot with seven wheels.",
        simpleExplanation: "Time is cyclical. The Sun controls time through seasons (feet) and months (forms).",
        simpleExplanationHindi: "समय चक्रीय है। सूर्य ऋतुओं (पैर) और महीनों (रूप) के माध्यम से समय को नियंत्रित करता है।",
        nanoBananaPrompt: "A giant abstract clock or chariot wheel in the sky, representing the seasons and months, driven by the Sun.",
        wordMeanings: [
            { sanskrit: "pañcapādam", devanagari: "पञ्चपादम्", hindi: "पाँच पैरों वाला", english: "five-footed" },
            { sanskrit: "pitaram", devanagari: "पितरम्", hindi: "पिता", english: "father" },
            { sanskrit: "dvādaśākṛtim", devanagari: "द्वादशाकृतिम्", hindi: "बारह रूपों वाला", english: "twelve-formed" },
            { sanskrit: "saptacakre", devanagari: "सप्तचक्रे", hindi: "सात चक्रों वाले", english: "seven-wheeled" }
        ]
    },
    {
        id: 12,
        prashna: 1,
        verse: 12,
        theme: "The Month as Prajapati",
        sanskrit: "मासो वै प्रजापतिस्तस्य कृष्णपक्ष एव रयिः शुक्लः प्राणः । तस्मादेते ऋषयः शुक्ल इष्टं कुर्वन्तीतरे इतरस्मिन् ॥ १२ ॥",
        hindi: "मास ही प्रजापति है। कृष्ण पक्ष 'रयि' है और शुक्ल पक्ष 'प्राण' है। ऋषि शुक्ल पक्ष में शुभ कार्य करते हैं।",
        english: "The Month is Prajapati. Dark fortnight is Rayi; bright fortnight is Prana. Sages perform sacrifices in the bright fortnight.",
        simpleExplanation: "Even the month is split: Bright half = Energy/Prana. Dark half = Matter/Rayi.",
        simpleExplanationHindi: "महीना भी बंटा हुआ है: शुक्ल पक्ष = ऊर्जा/प्राण। कृष्ण पक्ष = पदार्थ/रयि।",
        nanoBananaPrompt: "A calendar page or moon phase cycle showing half darkness and half light, representing the two fortnights.",
        wordMeanings: [
            { sanskrit: "māsaḥ", devanagari: "मासः", hindi: "मास/महीना", english: "month" },
            { sanskrit: "kṛṣṇa-pakṣaḥ", devanagari: "कृष्णपक्षः", hindi: "कृष्ण पक्ष", english: "dark fortnight" },
            { sanskrit: "śuklaḥ", devanagari: "शुक्लः", hindi: "शुक्ल पक्ष", english: "bright fortnight" }
        ]
    },
    {
        id: 13,
        prashna: 1,
        verse: 13,
        theme: "Day and Night",
        sanskrit: "अहोरात्रो वै प्रजापतिस्तस्याहरेव प्राणो रात्रिरेव रयिः । प्राणं वा एते प्रस्कन्दन्ति ये दिवा रत्या संयुज्यन्ते । ब्रह्मचर्यमेव तद्यद्रात्रौ रत्या संयुज्यन्ते ॥ १३ ॥",
        hindi: "दिन 'प्राण' है और रात 'रयि' है। जो दिन में रति करते हैं, वे प्राण क्षीण करते हैं। रात में रति करना ही गृहस्थ का ब्रह्मचर्य है।",
        english: "Day is Prana and Night is Rayi. Those who unite by day waste their Prana. Union by night is Brahmacharya indeed.",
        simpleExplanation: "Biological rhythm: Day is for activity (Prana), Night is for rest/matter (Rayi). Misusing this drains life force.",
        simpleExplanationHindi: "जैविक लय: दिन गतिविधि (प्राण) के लिए है, रात आराम/पदार्थ (रयि) के लिए है। इसका दुरुपयोग जीवन शक्ति को समाप्त करता है।",
        nanoBananaPrompt: "The contrast between a bright, active sun-drenched day and a calm, sleeping starry night.",
        wordMeanings: [
            { sanskrit: "ahorātraḥ", devanagari: "अहोरात्रः", hindi: "दिन-रात", english: "day and night" },
            { sanskrit: "ahaḥ", devanagari: "अहः", hindi: "दिन", english: "day" },
            { sanskrit: "rātriḥ", devanagari: "रात्रिः", hindi: "रात", english: "night" },
            { sanskrit: "brahmacaryam", devanagari: "ब्रह्मचर्यम्", hindi: "ब्रह्मचर्य", english: "celibacy" }
        ]
    },
    {
        id: 14,
        prashna: 1,
        verse: 14,
        theme: "Food as Prajapati",
        sanskrit: "अन्नं वै प्रजापतिस्ततो ह वै तद्रेतस्तस्मादिमाः प्रजाः प्रजायन्त इति ॥ १४ ॥",
        hindi: "अन्न ही प्रजापति है। उससे वीर्य बनता है, और उसी से ये समस्त प्रजाएं उत्पन्न होती हैं।",
        english: "Food is Prajapati. From that comes the seed. From that are all these creatures born.",
        simpleExplanation: "Sun/Rain → Food → Seed → Life. We are all transformed food!",
        simpleExplanationHindi: "सूर्य/वर्षा → भोजन → बीज → जीवन। हम सब रूपांतरित भोजन ही हैं!",
        nanoBananaPrompt: "A cycle showing rain falling on fields, grain growing, food being eaten, and a child being born.",
        wordMeanings: [
            { sanskrit: "annam", devanagari: "अन्नम्", hindi: "अन्न/भोजन", english: "food" },
            { sanskrit: "retas", devanagari: "रेतस्", hindi: "वीर्य", english: "seed" },
            { sanskrit: "prajāḥ", devanagari: "प्रजाः", hindi: "प्रजा", english: "creatures" },
            { sanskrit: "prajāyante", devanagari: "प्रजायन्ते", hindi: "उत्पन्न होती हैं", english: "are born" }
        ]
    },
    {
        id: 15,
        prashna: 1,
        verse: 15,
        theme: "The Result of Prajapati Vrata",
        sanskrit: "तद्ये ह वै तत्प्रजापतिव्रतं चरन्ति ते मिथुनमुत्पादयन्ते । तेषामेवैष ब्रह्मलोको येषां तपो ब्रह्मचर्यं येषु सत्यं प्रतिष्ठितम् ॥ १५ ॥",
        hindi: "जो प्रजापति व्रत का पालन करते हैं, वे संतान उत्पन्न करते हैं। ब्रह्मलोक (स्वर्ग) उन्हीं का है जिनमें तप, ब्रह्मचर्य और सत्य है।",
        english: "Those who observe the Rule of Prajapati produce offspring. To them belongs this Brahma-World, who possess austerity, chastity, and truth.",
        simpleExplanation: "Following nature's laws creates life (offspring). But higher worlds require Truth and Austerity.",
        simpleExplanationHindi: "प्रकृति के नियमों का पालन जीवन (संतान) रचता है। लेकिन उच्च लोकों के लिए सत्य और तप की आवश्यकता होती है।",
        nanoBananaPrompt: "A happy family with children (fruit of nature) contrasted with sages glowing with inner light (fruit of truth).",
        wordMeanings: [
            { sanskrit: "prajāpati-vratam", devanagari: "प्रजापतिव्रतम्", hindi: "प्रजापति व्रत", english: "rule of Prajapati" },
            { sanskrit: "mithunam", devanagari: "मिथुनम्", hindi: "मिथुन/जोड़ा", english: "pair/offspring" },
            { sanskrit: "brahmacaryam", devanagari: "ब्रह्मचर्यम्", hindi: "ब्रह्मचर्य", english: "celibacy" },
            { sanskrit: "satyam", devanagari: "सत्यम्", hindi: "सत्य", english: "truth" }
        ]
    },
    {
        id: 16,
        prashna: 1,
        verse: 16,
        theme: "The Pure World",
        sanskrit: "तेषामसौ विरजो ब्रह्मलोको न येषु जिह्ममनृतं न माया चेति ॥ १६ ॥",
        hindi: "वह निर्मल ब्रह्मलोक उन्हीं का है, जिनमें न कपट है, न झूठ है, और न ही माया (छल) है।",
        english: "That stainless World of Brahman belongs to them in whom there is no crookedness, no falsehood, and no deception.",
        simpleExplanation: "Access Code to Truth: NO LIES, NO TRICKS, NO DECEIT. Purity is the key.",
        simpleExplanationHindi: "सत्य का प्रवेश कोड: कोई झूठ नहीं, कोई छल नहीं, कोई धोखा नहीं। पवित्रता ही कुंजी है।",
        nanoBananaPrompt: "A crystal clear lake reflecting the sky perfectly, representing a mind without the ripples of deceit.",
        wordMeanings: [
            { sanskrit: "virajaḥ", devanagari: "विरजः", hindi: "निर्मल", english: "stainless" },
            { sanskrit: "jihma", devanagari: "जिह्म", hindi: "कपट", english: "crookedness" },
            { sanskrit: "anṛtam", devanagari: "अनृतम्", hindi: "झूठ", english: "falsehood" },
            { sanskrit: "māyā", devanagari: "माया", hindi: "माया", english: "deception" }
        ]
    },

    // ==========================================
    // PRASHNA 2: THE SUPREMACY OF PRANA
    // Questioner: Bhargava of Vidarbha
    // ==========================================

    {
        id: 17,
        prashna: 2,
        verse: 1,
        theme: "The Second Question",
        sanskrit: "अथ हैनम् भार्गवो वैदर्भिः पप्रच्छ । भगवन् कत्येव देवाः प्रजां विधारयन्ते कतर एतत्प्रकाशयन्ते कः पुनरेषां वरिष्ठ इति ॥ १ ॥",
        hindi: "विदर्भ के भार्गव ने पूछा: 'हे भगवन्! कितनी शक्तियां शरीर को धारण करती हैं? कौन इसे प्रकाशित करते हैं? और उन सबमें वरिष्ठ (श्रेष्ठ) कौन है?'",
        english: "Bhargava asked: 'Sir, how many powers support the body? Which of them enlighten it? And who amongst them is the greatest?'",
        simpleExplanation: "QUESTION 2: Who runs the body? And who is the BOSS of the body?",
        simpleExplanationHindi: "प्रश्न 2: शरीर को कौन चलाता है? और शरीर का बॉस कौन है?",
        nanoBananaPrompt: "A diagram of the human body with glowing nodes representing different organs, asking 'Who is the ruler?'",
        wordMeanings: [
            { sanskrit: "devāḥ", devanagari: "देवाः", hindi: "देवता/शक्तियाँ", english: "powers/gods" },
            { sanskrit: "prajām", devanagari: "प्रजाम्", hindi: "शरीर", english: "body" },
            { sanskrit: "vidhārayanti", devanagari: "विधारयन्ति", hindi: "धारण करते हैं", english: "support" },
            { sanskrit: "variṣṭhaḥ", devanagari: "वरिष्ठः", hindi: "श्रेष्ठ", english: "greatest" }
        ]
    },
    {
        id: 18,
        prashna: 2,
        verse: 2,
        theme: "The List of Powers",
        sanskrit: "तस्मै स होवाच । आकाशो ह वा एष देवो वायुर्अग्निरापः पृथिवी वाङ्मनश्चक्षुः श्रोत्रं च । ते प्रकाश्याभिवदन्ति वयमेतद्बाणमवष्टभ्य विधारयामः ॥ २ ॥",
        hindi: "उन्होंने कहा: 'आकाश, वायु, अग्नि, जल, पृथ्वी, वाणी, मन, आँख और कान। उन सबने अहंकारपूर्वक कहा—हम ही इस शरीर को धारण किए हुए हैं।'",
        english: "He replied: 'Space, Air, Fire, Water, Earth, Speech, Mind, Eye, Ear. They bragged: \"We support this body and keep it together.\"'",
        simpleExplanation: "The Senses and Elements argued: 'I am the most important! Without me, nothing works!'",
        simpleExplanationHindi: "इन्द्रियों और तत्वों ने बहस की: 'मैं सबसे महत्वपूर्ण हूँ! मेरे बिना कुछ काम नहीं करता!'",
        nanoBananaPrompt: "Human organs (Eye, Ear, Mouth) and elements (Fire, Water) arguing in a circle like a parliamentary debate.",
        wordMeanings: [
            { sanskrit: "ākāśaḥ", devanagari: "आकाशः", hindi: "आकाश", english: "space" },
            { sanskrit: "vāyuḥ", devanagari: "वायुः", hindi: "वायु", english: "air" },
            { sanskrit: "agniḥ", devanagari: "अग्निः", hindi: "अग्नि", english: "fire" },
            { sanskrit: "bāṇam", devanagari: "बाणम्", hindi: "शरीर", english: "body" }
        ]
    },
    {
        id: 19,
        prashna: 2,
        verse: 3,
        theme: "Prana's Warning",
        sanskrit: "तान्वरिष्ठः प्राण उवाच । मा मोहमापद्यथ अहमेवैतत्पञ्चधात्मानं प्रविभज्य एतद्बाणमवष्टभ्य विधारयामीति । तेऽश्रद्दधाना बभूवुः ॥ ३ ॥",
        hindi: "तब वरिष्ठ 'प्राण' ने कहा: 'घमंड मत करो। मैं ही अपने आप को पांच भागों में बांटकर इस शरीर को धारण करता हूँ।' लेकिन उन्होंने विश्वास नहीं किया।",
        english: "Prana said: 'Do not be deluded. I alone, dividing myself fivefold, support this body.' But they did not believe him.",
        simpleExplanation: "Prana (Life Force) speaks up: 'Guys, relax. It's actually ME holding this all together.' The senses laughed.",
        simpleExplanationHindi: "प्राण (जीवन शक्ति) बोला: 'दोस्तों, शांत रहो। वास्तव में मैं ही इस सबको संभाले हुए हूँ।' इन्द्रियां हंस पड़ीं।",
        nanoBananaPrompt: "A glowing figure of Prana standing calmly while the other noisy elements point fingers and laugh.",
        wordMeanings: [
            { sanskrit: "variṣṭhaḥ prāṇaḥ", devanagari: "वरिष्ठः प्राणः", hindi: "श्रेष्ठ प्राण", english: "chief Prana" },
            { sanskrit: "pañcadhā", devanagari: "पञ्चधा", hindi: "पाँच भागों में", english: "fivefold" },
            { sanskrit: "aśraddadhānāḥ", devanagari: "अश्रद्दधानाः", hindi: "विश्वास नहीं किया", english: "did not believe" }
        ]
    },
    {
        id: 20,
        prashna: 2,
        verse: 4,
        theme: "The Demonstration",
        sanskrit: "सोऽभिमानादूर्ध्वमुत्क्रमत इव तस्मिन्नुत्क्रामत्यथेतरे सर्व एवोत्क्रामन्ते । तस्मिंश्च प्रतिष्ठमाने सर्व एव प्रतिष्ठन्ते । तद्यथा मक्षिका मधुकरराजानमुत्क्रामन्तं सर्वा एवोत्क्रामन्ते तस्मिंश्च प्रतिष्ठमाने सर्वा एव प्रतिष्ठन्त एवं वाङ्मनश्चक्षुः श्रोत्रं च ते प्रीताः प्राणं स्तुन्वन्ति ॥ ४ ॥",
        hindi: "प्राण ऊपर उठने लगा (शरीर छोड़ने का नाटक)। तो अन्य सभी उखड़ने लगीं; जब वह स्थिर हुआ, तो सब स्थिर हो गईं। जैसे रानी मधुमक्खी के उड़ने पर सब उड़ जाती हैं। तब सबने प्राण की स्तुति की।",
        english: "Prana rose up. When he rose, all rose; when he settled, all settled. Just as bees follow the Queen Bee. Pleased, the senses praised Prana.",
        simpleExplanation: "THE QUEEN BEE ANALOGY: When Prana leaves, the eyes can't see, ears can't hear. Prana is the King.",
        simpleExplanationHindi: "रानी मधुमक्खी का उदाहरण: जब प्राण जाता है, तो आँखें देख नहीं सकतीं, कान सुन नहीं सकते। प्राण ही राजा है।",
        nanoBananaPrompt: "A queen bee flying up with a swarm following her, juxtaposed with a soul lifting out of a body and senses fading.",
        wordMeanings: [
            { sanskrit: "makṣikāḥ", devanagari: "मक्षिकाः", hindi: "मधुमक्खियाँ", english: "bees" },
            { sanskrit: "madhukararājānam", devanagari: "मधुकरराजानम्", hindi: "रानी मधुमक्खी", english: "queen bee" },
            { sanskrit: "utkrāmante", devanagari: "उत्क्रामन्ते", hindi: "चले जाते हैं", english: "depart" }
        ]
    },
    {
        id: 21,
        prashna: 2,
        verse: 5,
        theme: "Prana is the Elements",
        sanskrit: "एषोऽग्निस्तपत्येष सूर्य एष पर्जन्यो मघवानेष वायुः । एष पृथिवी रयिर्देवः सदसच्चामृतं च यत् ॥ ५ ॥",
        hindi: "यह प्राण ही अग्नि है, यही सूर्य, बादल, इंद्र और वायु है। यही पृथ्वी और पदार्थ है। जो सत् और असत् है, वह सब प्राण ही है।",
        english: "'He burns as Fire, He is Sun, Rain, Indra, Wind, Earth and Matter. He is what is and what is not, and the Immortal.'",
        simpleExplanation: "Scientific fact: Everything is Energy (Prana). Fire, sun, rain, matter—all forms of the same Life Force.",
        simpleExplanationHindi: "वैज्ञानिक तथ्य: सब कुछ ऊर्जा (प्राण) है। अग्नि, सूर्य, वर्षा, पदार्थ—सभी उसी जीवन शक्ति के रूप हैं।",
        nanoBananaPrompt: "A shapeshifter entity morphing into Fire, then Sun, then Rain, then Rock—showing it is everything.",
        wordMeanings: [
            { sanskrit: "agniḥ", devanagari: "अग्निः", hindi: "अग्नि", english: "fire" },
            { sanskrit: "sūryaḥ", devanagari: "सूर्यः", hindi: "सूर्य", english: "sun" },
            { sanskrit: "parjanyaḥ", devanagari: "पर्जन्यः", hindi: "वर्षा", english: "rain" },
            { sanskrit: "sat-asat", devanagari: "सदसत्", hindi: "सत्-असत्", english: "existent-nonexistent" }
        ]
    },
    {
        id: 22,
        prashna: 2,
        verse: 6,
        theme: "Prana as the Hub",
        sanskrit: "अरा इव रथनाभौ प्राणे सर्वं प्रतिष्ठितम् । ऋचो यजूंषि सामानि यज्ञः क्षत्रं ब्रह्म च ॥ ६ ॥",
        hindi: "जैसे रथ के पहिए की नाभि में आरे टिके होते हैं, वैसे ही सब कुछ प्राण में प्रतिष्ठित है। वेद, यज्ञ, क्षत्रिय और ब्राह्मण—सब प्राण पर ही आधारित हैं।",
        english: "As spokes are fastened in the hub of a wheel, so is everything established in Prana—Vedas, Sacrifice, Warriors, and Priests.",
        simpleExplanation: "The Central Hub: Remove the hub (Prana), and the wheel of life (society, knowledge, action) collapses.",
        simpleExplanationHindi: "केंद्रीय धुरी: धुरी (प्राण) को हटा दें, और जीवन का पहिया (समाज, ज्ञान, क्रिया) ढह जाता है।",
        nanoBananaPrompt: "A chariot wheel with 'Prana' glowing in the center hub, and all other things (books, swords, fire) as spokes.",
        wordMeanings: [
            { sanskrit: "arāḥ", devanagari: "अराः", hindi: "आरे", english: "spokes" },
            { sanskrit: "rathanābhau", devanagari: "रथनाभौ", hindi: "रथ की नाभि", english: "hub of wheel" },
            { sanskrit: "ṛcaḥ", devanagari: "ऋचः", hindi: "ऋग्वेद", english: "Rig Veda" },
            { sanskrit: "yajñaḥ", devanagari: "यज्ञः", hindi: "यज्ञ", english: "sacrifice" }
        ]
    },
    {
        id: 23,
        prashna: 2,
        verse: 7,
        theme: "Prana as Life in the Womb",
        sanskrit: "प्रजापतिश्चरसि गर्भे त्वमेव प्रतिजायसे । तुभ्यं प्राण प्रजास्त्विमा बलिं हरन्ति यः प्राणैः प्रतितिष्ठसि ॥ ७ ॥",
        hindi: "हे प्राण! तुम ही गर्भ में विचरण करते हो और तुम ही जन्म लेते हो। ये प्रजाएं तुम्हें ही बलि प्रदान करती हैं।",
        english: "'O Prana, you move in the womb as the Lord of Creatures, and you are born again. Creatures bring offerings to you.'",
        simpleExplanation: "Prana is the intelligence growing the baby in the womb. It is the life in every new birth.",
        simpleExplanationHindi: "प्राण वह बुद्धिमत्ता है जो गर्भ में बच्चे को बढ़ाती है। यह हर नए जन्म में जीवन है।",
        nanoBananaPrompt: "A glowing fetus in a womb, pulsing with light, representing Prana creating a new form.",
        wordMeanings: [
            { sanskrit: "prajāpati", devanagari: "प्रजापति", hindi: "प्रजापति", english: "Lord of Creatures" },
            { sanskrit: "garbhe", devanagari: "गर्भे", hindi: "गर्भ में", english: "in the womb" },
            { sanskrit: "pratijāyase", devanagari: "प्रतिजायसे", hindi: "पुनर्जन्म लेते हो", english: "you are reborn" }
        ]
    },
    {
        id: 24,
        prashna: 2,
        verse: 8,
        theme: "Prana as the Messenger",
        sanskrit: "देवानामसि वह्नितमः पितृणां प्रथमा स्वधा । ऋषीणां चरितं सत्यमथर्वाङ्गिरसामसि ॥ ८ ॥",
        hindi: "तुम देवताओं की अग्नि हो। तुम पितरों की स्वधा हो। तुम ऋषियों का सत्य चरित्र हो।",
        english: "'You are the best carrier of oblations. You are the first offering to ancestors. You are the true spirit of the senses.'",
        simpleExplanation: "Prana is the bridge between the human and the divine.",
        simpleExplanationHindi: "प्राण मानव और परमात्मा के बीच का सेतु है।",
        nanoBananaPrompt: "A bridge of light connecting a person meditating on earth to the shining gods in the sky.",
        wordMeanings: [
            { sanskrit: "vahnitamaḥ", devanagari: "वह्नितमः", hindi: "श्रेष्ठ वाहक", english: "best carrier" },
            { sanskrit: "pitṛṇām svadhā", devanagari: "पितृणां स्वधा", hindi: "पितरों की स्वधा", english: "ancestors' offering" }
        ]
    },
    {
        id: 25,
        prashna: 2,
        verse: 9,
        theme: "Prana as Destroyer and Protector",
        sanskrit: "इन्द्रस्त्वं प्राण तेजसा रुद्रोऽसि परिरक्षिता । त्वमन्तरिक्षे चरसि सूर्यस्त्वं ज्योतिषां पतिः ॥ ९ ॥",
        hindi: "हे प्राण! तुम इन्द्र हो, रक्षक रुद्र हो। तुम अंतरिक्ष में विचरण करते हो; तुम ही सूर्य हो।",
        english: "'O Prana, you are Indra; you are Rudra the Protector. You move in the sky; you are the Sun, the Lord of Lights.'",
        simpleExplanation: "Prana is Power (Indra) and Protection (Rudra). It is the master of all lights.",
        simpleExplanationHindi: "प्राण शक्ति (इंद्र) और सुरक्षा (रुद्र) है। यह सभी ज्योतियों का स्वामी है।",
        nanoBananaPrompt: "Prana depicted as a dual entity: one side fierce weapon-wielding (Indra), the other side peaceful protector (Rudra).",
        wordMeanings: [
            { sanskrit: "indraḥ", devanagari: "इन्द्रः", hindi: "इंद्र", english: "Indra" },
            { sanskrit: "rudraḥ", devanagari: "रुद्रः", hindi: "रुद्र", english: "Rudra" },
            { sanskrit: "sūryaḥ", devanagari: "सूर्यः", hindi: "सूर्य", english: "Sun" },
            { sanskrit: "jyotiṣām patiḥ", devanagari: "ज्योतिषां पतिः", hindi: "ज्योतियों का स्वामी", english: "Lord of Lights" }
        ]
    },
    {
        id: 26,
        prashna: 2,
        verse: 10,
        theme: "Prana and Rain",
        sanskrit: "यदा त्वमभिवर्षस्यथेमाः प्राण ते प्रजाः । आनन्दरूपास्तिष्ठन्ति कामायान्नं भविष्यतीति ॥ १० ॥",
        hindi: "हे प्राण! जब तुम (बादल बनकर) बरसते हो, तब ये प्रजाएं आनंदित हो उठती हैं कि 'अन्न पैदा होगा' ।",
        english: "'When you pour down rain, O Prana, these creatures stand delightful, thinking, \"There will be food!\"'",
        simpleExplanation: "Life depends on rain. Rain depends on Prana (climatic cycles). No Prana = No Rain = No Food.",
        simpleExplanationHindi: "जीवन वर्षा पर निर्भर है। वर्षा प्राण (जलवायु चक्र) पर निर्भर है। प्राण नहीं = वर्षा नहीं = भोजन नहीं।",
        nanoBananaPrompt: "Dry cracked earth turning green and lush as miraculous rain begins to fall, people dancing in joy.",
        wordMeanings: [
            { sanskrit: "abhivarṣasi", devanagari: "अभिवर्षसि", hindi: "बरसते हो", english: "you rain" },
            { sanskrit: "ānanda-rūpāḥ", devanagari: "आनन्दरूपाः", hindi: "आनंदित", english: "joyful" },
            { sanskrit: "annam", devanagari: "अन्नम्", hindi: "भोजन", english: "food" }
        ]
    },
    {
        id: 27,
        prashna: 2,
        verse: 11,
        theme: "Prana is Pure",
        sanskrit: "व्रात्यस्त्वं प्राण एकर्षिरत्ता विश्वस्य सत्पतिः । वयमाद्यस्य दातारः पिता त्वं मातरिश्व नः ॥ ११ ॥",
        hindi: "हे प्राण! तुम 'व्रात्य' (स्वभाव से पवित्र) हो। तुम विश्व के भोक्ता हो। पिता तुम, वासु (वायु) तुम।",
        english: "'You are a Vratya (Naturally Pure), O Prana, the Eater, the Lord. We give you food. O Wind, you are our Father.'",
        simpleExplanation: "Prana needs no purification rituals; it is naturally pure (Vratya). It is the Father of all.",
        simpleExplanationHindi: "प्राण को किसी शुद्धि अनुष्ठान की आवश्यकता नहीं है; यह स्वाभाविक रूप से पवित्र (व्रात्य) है। यह सबका पिता है।",
        nanoBananaPrompt: "A pure white flame that needs no fuel, burning steadily in a void.",
        wordMeanings: [
            { sanskrit: "vrātyaḥ", devanagari: "व्रात्यः", hindi: "व्रात्य/स्वभावतः पवित्र", english: "naturally pure" },
            { sanskrit: "attā", devanagari: "अत्ता", hindi: "भोक्ता", english: "eater" },
            { sanskrit: "pitā", devanagari: "पिता", hindi: "पिता", english: "father" }
        ]
    },
    {
        id: 28,
        prashna: 2,
        verse: 12,
        theme: "Prayer for Peace",
        sanskrit: "या ते तनूर्वाचि प्रतिष्ठिता या श्रोत्रे या च चक्षुषि । या च मनसि सन्तता शिवां तां कुरु मोत्क्रमीः ॥ १२ ॥",
        hindi: "तुम्हारा जो रूप वाणी, कान, आँख और मन में है—उसे तुम 'शिव' (शांत) बनाओ। बाहर मत जाओ!",
        english: "'That form of yours established in Speech, Ear, Eye, and Mind—make that propitious. Do not depart!'",
        simpleExplanation: "The senses beg Prana: 'Please stay! And please keep us functioning peacefully. Don't leave us dead.'",
        simpleExplanationHindi: "इन्द्रियां प्राण से भीख मांगती हैं: 'कृपया रुको! और कृपया हमें शांति से काम करने दो। हमें मृत छोड़कर मत जाओ।'",
        nanoBananaPrompt: "Human figures bowing down to a central light within them, pleading with it to stay.",
        wordMeanings: [
            { sanskrit: "tanūḥ", devanagari: "तनूः", hindi: "रूप", english: "form" },
            { sanskrit: "śivām", devanagari: "शिवाम्", hindi: "शांत/मंगलमय", english: "propitious" },
            { sanskrit: "mā utkramīḥ", devanagari: "मोत्क्रमीः", hindi: "मत जाओ", english: "do not depart" }
        ]
    },
    {
        id: 29,
        prashna: 2,
        verse: 13,
        theme: "Conclusion",
        sanskrit: "प्राणस्येदं वशे सर्वं त्रिदिवे यत्प्रतिष्ठितम् । मातेव पुत्रान्रक्षस्व श्रीश्च प्रज्ञां च विधेहि न इति ॥ १३ ॥",
        hindi: "तीनों लोकों में जो कुछ भी है, सब प्राण के वश में है। माता की तरह हमारी रक्षा करो और हमें 'श्री' और 'प्रज्ञा' दो।",
        english: "'All this is under the control of Prana. Protect us as a mother protects her sons, and give us prosperity and wisdom.'",
        simpleExplanation: "Prana is the Universal Mother. Asking for wealth (Shri) and wisdom (Prajna) from the Life Force.",
        simpleExplanationHindi: "प्राण जगत जननी है। जीवन शक्ति से धन (श्री) और बुद्धि (प्रज्ञा) मांगना।",
        nanoBananaPrompt: "A cosmic mother figure made of light cradling the earth, bestowing golden coins (prosperity) and a book (wisdom).",
        wordMeanings: [
            { sanskrit: "vaśe", devanagari: "वशे", hindi: "वश में", english: "under control" },
            { sanskrit: "mātā", devanagari: "माता", hindi: "माता", english: "mother" },
            { sanskrit: "śrīḥ", devanagari: "श्रीः", hindi: "श्री/समृद्धि", english: "prosperity" },
            { sanskrit: "prajñā", devanagari: "प्रज्ञा", hindi: "प्रज्ञा", english: "wisdom" }
        ]
    },

    // ==========================================
    // PRASHNA 3: THE ORIGIN OF PRANA
    // Questioner: Kousalya
    // ==========================================

    {
        id: 30,
        prashna: 3,
        verse: 1,
        theme: "The Third Question",
        sanskrit: "अथ हैनम् कौसल्यश्चाश्वलायनः पप्रच्छ । भगवन् कुत एष प्राणो जायते कथमायात्यस्मिञ्शरीरे आत्मानं वा प्रविभज्य कथं प्रतिष्ठते केनोत्क्रमते कथं बाह्यमभिधत्ते कथमध्यात्ममिति ॥ १ ॥",
        hindi: "कौसल्य ने पूछा: 'हे भगवन्! यह प्राण कहाँ से उत्पन्न होता है? शरीर में कैसे आता है? कैसे विभाजित होता है? कैसे निकलता है?'",
        english: "Kousalya asked: 'Sir, from where is this Prana born? How does it come into this body? How does it distribute itself? How does it depart?'",
        simpleExplanation: "QUESTION 3: The Mechanics of Prana. We know Prana is great, but where does it come from? How does it work inside?",
        simpleExplanationHindi: "प्रश्न 3: प्राण की क्रियाविधि। हम जानते हैं कि प्राण महान है, लेकिन यह आता कहाँ से है? यह अंदर कैसे काम करता है?",
        nanoBananaPrompt: "A schematic blueprint of a human soul showing an arrow entering (birth), dividing (life), and leaving (death).",
        wordMeanings: [
            { sanskrit: "kutaḥ", devanagari: "कुतः", hindi: "कहाँ से", english: "from where" },
            { sanskrit: "jāyate", devanagari: "जायते", hindi: "उत्पन्न होता है", english: "is born" },
            { sanskrit: "utkramate", devanagari: "उत्क्रमते", hindi: "निकलता है", english: "departs" }
        ]
    },
    {
        id: 31,
        prashna: 3,
        verse: 2,
        theme: "The Guru's Appreciation",
        sanskrit: "तस्मै स होवाच अतिप्रश्नान्पृच्छसि ब्रह्मिष्ठोऽसीति तस्मात्तेऽहं ब्रवीमि ॥ २ ॥",
        hindi: "उन्होंने कहा: 'तुम बहुत कठिन (अति) प्रश्न पूछ रहे हो। तुम ब्रह्मवेत्ताओं में श्रेष्ठ हो, इसलिए मैं बताता हूँ।'",
        english: "He replied: 'You are asking transcendental questions. You are most devoted to Brahman; therefore, I will tell you.'",
        simpleExplanation: "Great questions deserve great answers. Pippalada is impressed by the depth of Kousalya's inquiry.",
        simpleExplanationHindi: "महान प्रश्न महान उत्तर के पात्र हैं। पिप्पलाद कौसल्य की जिज्ञासा की गहराई से प्रभावित हैं।",
        nanoBananaPrompt: "The Sage smiling warmly and nodding in approval at the student.",
        wordMeanings: [
            { sanskrit: "ati-praśnān", devanagari: "अतिप्रश्नान्", hindi: "अति कठिन प्रश्न", english: "transcendental questions" },
            { sanskrit: "brahmiṣṭhaḥ", devanagari: "ब्रह्मिष्ठः", hindi: "ब्रह्मवेत्ताओं में श्रेष्ठ", english: "most devoted to Brahman" }
        ]
    },
    {
        id: 32,
        prashna: 3,
        verse: 3,
        theme: "The Shadow Analogy",
        sanskrit: "आत्मन एष प्राणो जायते । यथैषा पुरुषे छायैतस्मिन्नेतदाततं मनोकृतेनायात्यस्मिञ्शरीरे ॥ ३ ॥",
        hindi: "यह प्राण आत्मा से उत्पन्न होता है। जैसे पुरुष की छाया, वैसे ही यह उस पर छाया हुआ है। यह मन के संकल्प से शरीर में आता है।",
        english: "Prana is born of the Self. As a shadow is cast by a person, so is this Prana spread over the Self. It enters via the Mind's karma.",
        simpleExplanation: "ORIGIN: Prana is the SHADOW of the Soul. It comes into a body because of your Mind (Karma/Desires).",
        simpleExplanationHindi: "उत्पत्ति: प्राण आत्मा की छाया है। यह आपके मन (कर्म/इच्छाओं) के कारण शरीर में आता है।",
        nanoBananaPrompt: "A person standing in light casting a shadow—the person is Atman, the shadow is Prana/Life.",
        wordMeanings: [
            { sanskrit: "ātmanḥ", devanagari: "आत्मनः", hindi: "आत्मा से", english: "from the Self" },
            { sanskrit: "chāyā", devanagari: "छाया", hindi: "छाया", english: "shadow" },
            { sanskrit: "manaḥ-kṛtena", devanagari: "मनःकृतेन", hindi: "मन द्वारा", english: "by the Mind's action" }
        ]
    },
    {
        id: 33,
        prashna: 3,
        verse: 4,
        theme: "The King Analogy",
        sanskrit: "यथा सम्राडेवाधिकृतान्विनियुङ्क्ते एतान्ग्रामानेतान्ग्रामानधितिष्ठस्वेति । एवमेवैष प्राण इतरान्प्राणान्पृथक्पृथगेव सन्निधत्ते ॥ ४ ॥",
        hindi: "जैसे सम्राट अधिकारियों को नियुक्त करता है, वैसे ही मुख्य प्राण अन्य प्राणों को अलग-अलग स्थानों पर नियुक्त करता है।",
        english: "As a Sovereign commands officials, 'You reside here, you there,' so does the Chief Prana appoint other Pranas.",
        simpleExplanation: "CEO Prana appoints managers (Apana, Samana, Vyana, Udana) to run different departments of the body.",
        simpleExplanationHindi: "CEO प्राण शरीर के विभिन्न विभागों को चलाने के लिए मैनेजरों (अपान, समान, व्यान, उदान) को नियुक्त करता है।",
        nanoBananaPrompt: "A king sitting on a throne pointing directions to four ministers, assigning them territories on a map.",
        wordMeanings: [
            { sanskrit: "samrāṭ", devanagari: "सम्राट्", hindi: "सम्राट", english: "sovereign" },
            { sanskrit: "adhikṛtān", devanagari: "अधिकृतान्", hindi: "अधिकारियों", english: "officials" },
            { sanskrit: "pṛthak pṛthak", devanagari: "पृथक् पृथक्", hindi: "अलग-अलग", english: "separately" }
        ]
    },
    {
        id: 34,
        prashna: 3,
        verse: 5,
        theme: "Apana and Prana",
        sanskrit: "पायूपस्थेऽपानं चक्षुःश्रोत्रे मुखनासिकाभ्यां प्राणः स्वयं प्रातिष्ठते । मध्ये तु समानः । एष ह्येतद्भुतमन्नं समं नयति तस्मादेताः सप्तार्चिषो भवन्ति ॥ ५ ॥",
        hindi: "अपान गुदा/उपस्थ में है। प्राण आँख/कान/नाक में है। मध्य में समान है, जो अन्न को पचाता है।",
        english: "Apana is in the excretion organs. Prana is in the eye, ear, mouth, nose. Samana is in the middle, digesting food.",
        simpleExplanation: "LOCATIONS: Prana (Head/Senses). Apana (Excretion/Reproduction). Samana (Digestion/Belly).",
        simpleExplanationHindi: "स्थान: प्राण (सिर/इंद्रियां)। अपान (मलत्याग/प्रजनन)। समान (पाचन/पेट)।",
        nanoBananaPrompt: "A thermal body scan showing heat map: Red in head (Prana), Yellow in belly (Samana), Blue in lower body (Apana).",
        wordMeanings: [
            { sanskrit: "apānaḥ", devanagari: "अपानः", hindi: "अपान", english: "downward breath" },
            { sanskrit: "samānaḥ", devanagari: "समानः", hindi: "समान", english: "equalizing breath" },
            { sanskrit: "saptārciṣaḥ", devanagari: "सप्तार्चिषः", hindi: "सात ज्वालाएं", english: "seven flames" }
        ]
    },
    {
        id: 35,
        prashna: 3,
        verse: 6,
        theme: "The Nerves and Vyana",
        sanskrit: "हृदि ह्येष आत्मा । अत्रैतदेकशतं नाडीनां... आसु व्यानश्चरति ॥ ६ ॥",
        hindi: "आत्मा हृदय में है। यहाँ १०१ नाड़ियां हैं... इन सब में 'व्यान' वायु विचरण करता है।",
        english: "The Self is in the heart. 101 nadis... In these moves the Vyana.",
        simpleExplanation: "Vyana is the CIRCULATION. It moves through 72,000 channels (nadis) radiating from the heart.",
        simpleExplanationHindi: "व्यान परिसंचरण है। यह हृदय से निकलने वाली 72,000 चैनलों (नाड़ियों) के माध्यम से चलता है।",
        nanoBananaPrompt: "A complex network of glowing veins (nadis) radiating from the heart to every inch of the body.",
        wordMeanings: [
            { sanskrit: "hṛdi", devanagari: "हृदि", hindi: "हृदय में", english: "in the heart" },
            { sanskrit: "nāḍīnām", devanagari: "नाडीनाम्", hindi: "नाड़ियों", english: "of nadis" },
            { sanskrit: "vyānaḥ", devanagari: "व्यानः", hindi: "व्यान", english: "pervading breath" }
        ]
    },
    {
        id: 36,
        prashna: 3,
        verse: 7,
        theme: "Udana - The Vertical Force",
        sanskrit: "अथैकयोर्ध्व उदानः पुण्येन पुण्यं लोकं नयति पापेन पापमुभाभ्यामेव मनुष्यलोकम् ॥ ७ ॥",
        hindi: "एक (सुषुम्ना) द्वारा 'उदान' ऊपर जाता है। पुण्य से पुण्य लोक, पाप से पाप लोक, और मिश्रित से मनुष्य लोक ले जाता है।",
        english: "Through one nerve rising upward, Udana leads to virtuous worlds by good deeds, sinful worlds by sin, and human world by mixed.",
        simpleExplanation: "Udana is the ELEVATOR. It takes you UP to heaven or DOWN to hell at the moment of death based on karma.",
        simpleExplanationHindi: "उदान लिफ्ट है। यह आपको कर्म के आधार पर मृत्यु के क्षण में ऊपर स्वर्ग या नीचे नरक ले जाता है।",
        nanoBananaPrompt: "A spiritual elevator shaft showing buttons for 'Swarga' (Up), 'Naraka' (Down), and 'Prithvi' (Ground Floor).",
        wordMeanings: [
            { sanskrit: "udānaḥ", devanagari: "उदानः", hindi: "उदान", english: "upward breath" },
            { sanskrit: "puṇyena puṇyam", devanagari: "पुण्येन पुण्यम्", hindi: "पुण्य से पुण्य लोक", english: "by virtue to virtuous world" },
            { sanskrit: "pāpena pāpam", devanagari: "पापेन पापम्", hindi: "पाप से पाप लोक", english: "by sin to sinful world" }
        ]
    },
    {
        id: 37,
        prashna: 3,
        verse: 8,
        theme: "Cosmic Correspondences",
        sanskrit: "आदित्यो ह वै बाह्यः प्राण उदयत्येष ह्येनं चाक्षुषं प्राणं अनुगृह्णानः । पृथिव्यां या देवता सैषा पुरुषस्यापानमवष्टभ्यान्तरा...",
        hindi: "आदित्य बाह्य प्राण है। पृथ्वी की देवता अपान को संभाले रखती है। आकाश समान है। वायु व्यान है।",
        english: "The Sun is external Prana. Earth controls Apana. Space is Samana. Air is Vyana.",
        simpleExplanation: "MICROCOSM = MACROCOSM. Your eye = Sun. Your down-force = Earth's Gravity. Your circulation = Wind.",
        simpleExplanationHindi: "पिंड = ब्रह्मांड। आपकी आँख = सूर्य। आपकी नीचे की शक्ति = पृथ्वी का गुरुत्वाकर्षण। आपका परिसंचरण = वायु।",
        nanoBananaPrompt: "Double exposure image showing a human body overlaid with the cosmos—Sun in eyes, Earth at feet, Wind in lungs.",
        wordMeanings: [
            { sanskrit: "ādityaḥ", devanagari: "आदित्यः", hindi: "सूर्य", english: "Sun" },
            { sanskrit: "pṛthivī", devanagari: "पृथिवी", hindi: "पृथ्वी", english: "Earth" },
            { sanskrit: "ākāśaḥ", devanagari: "आकाशः", hindi: "आकाश", english: "space" }
        ]
    },
    {
        id: 38,
        prashna: 3,
        verse: 9,
        theme: "Fire and Udana",
        sanskrit: "तेजो ह वा उदानस्तस्मादुपशान्ततेजाः । पुनर्भवमिन्द्रियैर्मनसि सम्पद्यमानैः ॥ ९ ॥",
        hindi: "तेज ही उदान है। जिसका तेज शांत (ठंडा) हो जाता है, वह पुनर्जन्म को प्राप्त होता है।",
        english: "The external Fire is Udana. He whose bodily heat extinguishes goes to rebirth.",
        simpleExplanation: "Death = Loss of Udana (Body Heat). When the fire goes out, the soul packs up to leave.",
        simpleExplanationHindi: "मृत्यु = उदान (शरीर की गर्मी) का नुकसान। जब आग बुझ जाती है, तो आत्मा जाने के लिए सामान बांध लेती है।",
        nanoBananaPrompt: "A candle flame flickering and going out, representing the cooling of the body at death.",
        wordMeanings: [
            { sanskrit: "tejaḥ", devanagari: "तेजः", hindi: "तेज/गर्मी", english: "heat/fire" },
            { sanskrit: "upaśānta-tejaḥ", devanagari: "उपशान्ततेजाः", hindi: "शांत तेज", english: "extinguished heat" },
            { sanskrit: "punarbhavam", devanagari: "पुनर्भवम्", hindi: "पुनर्जन्म", english: "rebirth" }
        ]
    },
    {
        id: 39,
        prashna: 3,
        verse: 10,
        theme: "The Process of Death",
        sanskrit: "यच्चित्तस्तेनैष प्राणमायाति प्राणस्तेजसा युक्तः । सहात्मना यथासङ्कल्पितं लोकं नयति ॥ १० ॥",
        hindi: "(मृत्यु के समय) जैसे विचार होते हैं, वैसे ही वह प्राण में प्रवेश करता है। प्राण, उदान के साथ आत्मा को संकल्पित लोक ले जाता है।",
        english: "Whatever his thought at death, with that he enters Prana. Prana leads him to the world fashioned by his desires.",
        simpleExplanation: "LAST THOUGHT MATTERS. Whatever you think of at the moment of death, that's where Udana takes you.",
        simpleExplanationHindi: "अंतिम विचार मायने रखता है। मृत्यु के क्षण में आप जो सोचते हैं, उदान आपको वहीं ले जाता है।",
        nanoBananaPrompt: "A person on a deathbed visualized with a thought bubble showing a destination, and their soul flying towards it.",
        wordMeanings: [
            { sanskrit: "cittam", devanagari: "चित्तम्", hindi: "चित्त/विचार", english: "thought" },
            { sanskrit: "saṅkalpitam", devanagari: "सङ्कल्पितम्", hindi: "संकल्पित", english: "desired" },
            { sanskrit: "lokam", devanagari: "लोकम्", hindi: "लोक", english: "world" }
        ]
    },
    {
        id: 40,
        prashna: 3,
        verse: 11,
        theme: "The Fruit of Knowledge",
        sanskrit: "य एवं विद्वान्प्राणं वेद न हास्य प्रजा हीयतेऽमृतो भवति । तदेष श्लोकः ॥ ११ ॥",
        hindi: "जो विद्वान प्राण को ऐसे जानता है, उसकी प्रजा नष्ट नहीं होती और वह अमर हो जाता है।",
        english: "The wise man who knows Prana thus—his offspring does not perish, and he becomes immortal.",
        simpleExplanation: "Knowing this secret of Promethean Fire (Prana) grants immortality and lasting lineage.",
        simpleExplanationHindi: "प्रोमेथियन अग्नि (प्राण) के इस रहस्य को जानकर अमरता और स्थायी वंश प्राप्त होता है।",
        nanoBananaPrompt: "A sage holding a flame of knowledge that never burns out, surrounded by generations of students/offspring.",
        wordMeanings: [
            { sanskrit: "vidvān", devanagari: "विद्वान्", hindi: "विद्वान", english: "wise one" },
            { sanskrit: "amṛtaḥ", devanagari: "अमृतः", hindi: "अमर", english: "immortal" }
        ]
    },
    {
        id: 41,
        prashna: 3,
        verse: 12,
        theme: "Summary Verse",
        sanskrit: "उत्पत्तिमायतिं स्थानं विभुत्वं चैव पञ्चधा । अध्यात्मं चैव प्राणस्य विज्ञायामृतमश्नुते... ॥ १२ ॥",
        hindi: "जो प्राण की उत्पत्ति, आगमन, स्थान, पांच प्रकार का प्रभुत्व और आध्यात्मिक रूप को जान लेता है, वह अमरता को प्राप्त करता है।",
        english: "Knowing origin, arrival, abode, fivefold sovereignty, and internal existence of Prana, one attains immortality.",
        simpleExplanation: "SUMMARY: Know Prana's Origin (Self), Arrival (Mind), Abode (Body spread), and Sovereignty = IMMORTALITY.",
        simpleExplanationHindi: "सारांश: प्राण की उत्पत्ति (आत्मा), आगमन (मन), निवास (शरीर का विस्तार), और संप्रभुता को जानो = अमरता।",
        nanoBananaPrompt: "A glowing diagram summarizing the 5 aspects of Prana, acting as a key to a door labeled 'Immortality'.",
        wordMeanings: [
            { sanskrit: "utpattim", devanagari: "उत्पत्तिम्", hindi: "उत्पत्ति", english: "origin" },
            { sanskrit: "vibhutvam", devanagari: "विभुत्वम्", hindi: "विभुत्व", english: "sovereignty" },
            { sanskrit: "amṛtam", devanagari: "अमृतम्", hindi: "अमृत", english: "immortality" }
        ]
    },
    // ==========================================
    // PRASHNA 4: THE MYSTERY OF SLEEP & DREAMS
    // Questioner: Gargya (Grandson of Surya)
    // ==========================================

    {
        id: 42,
        prashna: 4,
        verse: 1,
        theme: "The Fourth Question",
        sanskrit: "अथ हैनम् सौर्यायणी गार्ग्यः पप्रच्छ । भगवन् एतस्मिन् पुरुषे कानि स्वपन्ति कान्यस्मिन् जाग्रति कतर एष देवः स्वप्नान् पश्यति कस्यैतत् सुखं भवति कस्मिन् नु सर्वे सम्प्रतिष्ठिता भवन्तीति ॥ १ ॥",
        hindi: "तब सूर्य के पौत्र गार्ग्य ने उनसे पूछा: 'हे भगवन्! इस पुरुष (शरीर) में कौन सोते हैं? कौन इसमें जागते हैं? वह कौन सा देवता है जो सपने देखता है? यह (गहरी नींद का) सुख किसको होता है? और ये सब किसमें स्थित (लीन) होते हैं?'",
        english: "Then Gargya asked him: 'Venerable Sir, which are they that sleep in this person? Which are they that remain awake? Which is the god who sees dreams? Whose is this happiness (of deep sleep)? In whom are all these established?'",
        simpleExplanation: "QUESTION 4: A deep inquiry into Consciousness. Who sleeps? Who dreams? Who stays awake? Who enjoys sleep?",
        simpleExplanationHindi: "प्रश्न 4: चेतना की गहरी जांच। कौन सोता है? कौन सपना देखता है? कौन जागता रहता है? नींद का आनंद कौन लेता है?",
        nanoBananaPrompt: "A sleeping person with a visible dream bubble above their head, and a question mark glowing in their heart.",
        wordMeanings: [
            { sanskrit: "svapanti", devanagari: "स्वपन्ति", hindi: "सोते हैं", english: "sleep" },
            { sanskrit: "jāgrati", devanagari: "जाग्रति", hindi: "जागते हैं", english: "awake" },
            { sanskrit: "svapnān paśyati", devanagari: "स्वप्नान् पश्यति", hindi: "सपने देखता है", english: "sees dreams" }
        ]
    },
    {
        id: 43,
        prashna: 4,
        verse: 2,
        theme: "The Setting Sun",
        sanskrit: "तस्मै स होवाच । यथा गार्ग्य मरीचयोऽर्कस्यास्तं गच्छतः सर्व एतस्मिंस्तेजोमण्डल एकीभवन्ति । ताः पुनः पुनरुदयतः प्रचरन्त्येवं ह वै तत् सर्वं परे देवे मनस्येकीभवति ॥ २ ॥",
        hindi: "उन्होंने उत्तर दिया: 'हे गार्ग्य! जैसे डूबते हुए (अस्त होते हुए) सूर्य की किरणें उस तेज के गोले में एक हो जाती हैं, और जब वह फिर उगता है तो वे फिर फैल जाती हैं; वैसे ही यह सब (इन्द्रियां) उस सर्वोच्च देवता 'मन' में एक हो जाती हैं।",
        english: "He replied: 'O Gargya, just as the rays of the setting sun become one in that orb of light, and go forth again when he rises; so does all this become one in the supreme god, the Mind.'",
        simpleExplanation: "Sleep is like sunset. Just as sun rays withdraw into the sun disc, your senses withdraw into the Mind.",
        simpleExplanationHindi: "नींद सूर्यास्त की तरह है। जैसे सूर्य की किरणें सूर्य बिंब में समा जाती हैं, वैसे ही आपकी इंद्रियां मन में समा जाती हैं।",
        nanoBananaPrompt: "A sunset over the ocean where rays of light are being pulled back into the sun like magnetic strings.",
        wordMeanings: [
            { sanskrit: "marīcayaḥ", devanagari: "मरीचयः", hindi: "किरणें", english: "rays" },
            { sanskrit: "astam gacchataḥ", devanagari: "अस्तं गच्छतः", hindi: "अस्त होते", english: "setting" },
            { sanskrit: "ekībhavanti", devanagari: "एकीभवन्ति", hindi: "एक हो जाते हैं", english: "become one" }
        ]
    },
    {
        id: 44,
        prashna: 4,
        verse: 3,
        theme: "The Senses Sleep",
        sanskrit: "तेन तर्ह्येष पुरुषो न शृणोति न पश्यति न जिघ्रति न रसयते न स्पृशते नाभिवदते नादत्ते नानन्दयते न विसृजते नेयायते स्वपितीत्याचक्षते ॥ ३ ॥",
        hindi: "इसलिए उस समय (नींद में) यह पुरुष न सुनता है, न देखता है, न सूंघता है... तब लोग कहते हैं—'यह सो रहा है' ।",
        english: "Therefore, at that time, this person hears not, sees not, smells not... They say, 'He is sleeping.'",
        simpleExplanation: "When the Mind absorbs the senses, you are 'Offline'. No seeing, no hearing. Just sleep.",
        simpleExplanationHindi: "जब मन इंद्रियों को सोख लेता है, तो आप 'ऑफलाइन' हो जाते हैं। न देखना, न सुनना। बस नींद।",
        nanoBananaPrompt: "A person lying in bed with their sensory organs (eyes, ears) dimmed out or turned off like switches.",
        wordMeanings: [
            { sanskrit: "na śṛṇoti", devanagari: "न शृणोति", hindi: "नहीं सुनता", english: "does not hear" },
            { sanskrit: "na paśyati", devanagari: "न पश्यति", hindi: "नहीं देखता", english: "does not see" },
            { sanskrit: "svapiti", devanagari: "स्वपिति", hindi: "सोता है", english: "sleeps" }
        ]
    },
    {
        id: 45,
        prashna: 4,
        verse: 4,
        theme: "The Inner Fire Sacrifice",
        sanskrit: "प्राणाग्नय एवैतस्मिन् पुरे जाग्रति । गार्हपत्यो ह वा एषोऽपानो व्यानोऽन्वाहार्यपचनो यद्गार्हपत्यात् प्रणीयते प्रणयनादाहवनीयः प्राणः ॥ ४ ॥",
        hindi: "(जब सब सो जाते हैं), तब इस नगर (शरीर) में 'प्राण रूपी अग्नियां' ही जागती रहती हैं। 'अपान' गार्हपत्य अग्नि है; 'व्यान' अन्वाहार्यपचन (दक्षिणाग्नि) है; और 'प्राण' आहवनीय अग्नि है।",
        english: "The Fires of Prana alone remain awake in this city (body). Apana is the Garhapatya Fire... Prana is the Ahavaniya Fire.",
        simpleExplanation: "While you sleep, the 'Fire Ritual' of digestion and breathing continues. Prana never sleeps.",
        simpleExplanationHindi: "जब आप सोते हैं, तो पाचन और श्वास का 'अग्नि यज्ञ' जारी रहता है। प्राण कभी नहीं सोता।",
        nanoBananaPrompt: "A dark city (body) at night where only five sacred fires are burning brightly in the center square.",
        wordMeanings: [
            { sanskrit: "prāṇāgnayaḥ", devanagari: "प्राणाग्नयः", hindi: "प्राण अग्नियाँ", english: "fires of Prana" },
            { sanskrit: "jāgrati", devanagari: "जाग्रति", hindi: "जागती रहती हैं", english: "remain awake" },
            { sanskrit: "gārhapatyaḥ", devanagari: "गार्हपत्यः", hindi: "गार्हपत्य अग्नि", english: "householder's fire" }
        ]
    },
    {
        id: 46,
        prashna: 4,
        verse: 5,
        theme: "Breathing as Offering",
        sanskrit: "यदुच्छ्वासनिःश्वासावेतावाहुती समं नयतीति स समानः । मनो ह वाव यजमानः इष्टफलमेवोदानः स एनं यजमानमहरहर्ब्रह्म गमयति ॥ ५ ॥",
        hindi: "जो श्वास और निःश्वास रूपी दो आहुतियों को समान रूप से ले जाता है, वह 'समान' है। 'मन' ही यजमान है। और 'उदान' उस यज्ञ का फल है, क्योंकि वह इस यजमान (मन) को प्रतिदिन (गहरी नींद में) ब्रह्म तक ले जाता है।",
        english: "Because it balances the two oblations of inhalation and exhalation, it is Samana. The Mind is the Sacrificer. Udana leads him every day to Brahman.",
        simpleExplanation: "Every breath is an offering. Every night, Udana takes your mind to the battery charger (Brahman) for deep rest.",
        simpleExplanationHindi: "हर सांस एक आहुति है। हर रात, उदान आपके मन को गहरी विश्राम के लिए बैटरी चार्जर (ब्रह्म) के पास ले जाता है।",
        nanoBananaPrompt: "A priest (Mind) pouring offerings (Breath) into a fire, with smoke rising up to a golden realm (Brahman).",
        wordMeanings: [
            { sanskrit: "yajamānaḥ", devanagari: "यजमानः", hindi: "यजमान/यजक", english: "sacrificer" },
            { sanskrit: "brahma", devanagari: "ब्रह्म", hindi: "ब्रह्म", english: "Brahman" },
            { sanskrit: "gamayati", devanagari: "गमयति", hindi: "ले जाता है", english: "leads" }
        ]
    },
    {
        id: 47,
        prashna: 4,
        verse: 6,
        theme: "The Dream State (Swapna)",
        sanskrit: "अत्रैष देवः स्वप्ने महिमानमनुभवति । यद्दृष्टं दृष्टमनुपश्यति... दृष्टं चादृष्टं च... सर्वं पश्यति सर्वः पश्यति ॥ ६ ॥",
        hindi: "यहाँ (स्वप्न अवस्था में) यह देवता (मन) अपनी महिमा का अनुभव करता है। जो देखा है और जो नहीं देखा, सत और असत—वह सब कुछ देखता है; वह 'सब' बनकर देखता है।",
        english: "Here, in dreams, this god (Mind) experiences his glory. Seen and unseen, real and unreal—he sees it all; being All, he sees.",
        simpleExplanation: "In dreams, the Mind becomes the Creator. It replays memories and invents new worlds. It is limitless.",
        simpleExplanationHindi: "सपनों में, मन निर्माता बन जाता है। यह यादों को दोहराता है और नई दुनिया का आविष्कार करता है। यह असीम है।",
        nanoBananaPrompt: "A person's head opening up to reveal a vivid, surreal landscape of flying elephants and floating castles.",
        wordMeanings: [
            { sanskrit: "svapne", devanagari: "स्वप्ने", hindi: "स्वप्न में", english: "in dreams" },
            { sanskrit: "mahimānam", devanagari: "महिमानम्", hindi: "महिमा", english: "glory" },
            { sanskrit: "sarvaḥ paśyati", devanagari: "सर्वः पश्यति", hindi: "सब देखता है", english: "sees all" }
        ]
    },
    {
        id: 48,
        prashna: 4,
        verse: 7,
        theme: "Deep Sleep (Sushupti)",
        sanskrit: "स यदा तेजसाभिभूतो भवति अत्रैष देवः स्वप्नान्न पश्यति अथ तदैतस्मिन् शरीरे एतत्सुखं भवति ॥ ७ ॥",
        hindi: "परन्तु जब वह (मन) 'तेज' (पित्त/आत्म-ज्योति) से अभिभूत (पूरी तरह भर) जाता है, तब यह देवता सपने नहीं देखता। तब इस शरीर में वह (अखंड) सुख होता है।",
        english: "But when the mind is overpowered by Light (Tejas), then this god sees no dreams. Then, in this body, that happiness (of deep sleep) arises.",
        simpleExplanation: "DEEP SLEEP: When the Mind gets tired, it dissolves into pure Light. No dreams. Only Bliss.",
        simpleExplanationHindi: "गहरी नींद: जब मन थक जाता है, तो वह शुद्ध प्रकाश में विलीन हो जाता है। कोई सपना नहीं। केवल आनंद।",
        nanoBananaPrompt: "A chaotic dream swirl dissolving into a pure, calm, white light of deep peace.",
        wordMeanings: [
            { sanskrit: "tejasā abhibhūtaḥ", devanagari: "तेजसाभिभूतः", hindi: "तेज से अभिभूत", english: "overpowered by Light" },
            { sanskrit: "sukham", devanagari: "सुखम्", hindi: "सुख", english: "happiness/bliss" }
        ]
    },
    {
        id: 49,
        prashna: 4,
        verse: 8,
        theme: "The Bird Analogy",
        sanskrit: "स यथा सोम्य वयांसि वासोवृक्षं सम्प्रतिष्ठन्ते । एवं ह वै तत् सर्वं पर आत्मनि सम्प्रतिष्ठते ॥ ८ ॥",
        hindi: "हे सौम्य! जैसे पक्षी (शाम को) अपने बसेरे के वृक्ष की ओर लौटकर विश्राम करते हैं, वैसे ही यह सब कुछ (समस्त तत्व) उस परम आत्मा में प्रतिष्ठित (विश्राम) होता है।",
        english: "Just as birds, O dear one, fly to their tree for rest, even so, all these things rest in the Supreme Self.",
        simpleExplanation: "Just as birds return to their tree at night, our soul returns to the Supreme Self in deep sleep.",
        simpleExplanationHindi: "जैसे पक्षी रात में अपने पेड़ पर लौट आते हैं, वैसे ही हमारी आत्मा गहरी नींद में परमात्मा के पास लौट आती है।",
        nanoBananaPrompt: "A flock of birds flying back to a massive, glowing Banyan tree at sunset.",
        wordMeanings: [
            { sanskrit: "vayāṃsi", devanagari: "वयांसि", hindi: "पक्षी", english: "birds" },
            { sanskrit: "vāsovṛkṣam", devanagari: "वासोवृक्षम्", hindi: "बसेरे का वृक्ष", english: "roosting tree" },
            { sanskrit: "para ātmani", devanagari: "पर आत्मनि", hindi: "परम आत्मा में", english: "in Supreme Self" }
        ]
    },
    {
        id: 50,
        prashna: 4,
        verse: 9,
        theme: "The List of Elements",
        sanskrit: "पृथिवी च पृथिवीमात्रा चापश्चापोमात्रा च तेजश्च तेजोमात्रा... प्राणश्च विधारयितव्यं च ॥ ९ ॥",
        hindi: "पृथ्वी और गंध, जल और रस, अग्नि और रूप, वायु और स्पर्श... आँख और दृश्य... मन और मंतव्य... (यह सब आत्मा में लीन होता है)।",
        english: "Earth and smell, Water and taste, Fire and form, Air and touch... The Eye and sight... The Mind and thought... All rest in the Self.",
        simpleExplanation: "Everything gets packed up: The Elements, The Senses, The Mind. All go into the suitcase of the Self.",
        simpleExplanationHindi: "सब कुछ पैक हो जाता है: तत्व, इंद्रियां, मन। सब आत्मा के सूटकेस में चले जाते हैं।",
        nanoBananaPrompt: "A surreal image of mountains, rivers, and suns being folded up into a small glowing point of light."
    },
    {
        id: 51,
        prashna: 4,
        verse: 10,
        theme: "The Knower (Vijnana Atman)",
        sanskrit: "एष हि द्रष्टा स्प्रष्टा श्रोता घ्राता रसयिता मन्ता बोद्धा कर्ता विज्ञानात्मा पुरुषः । स परेऽक्षर आत्मनि सम्प्रतिष्ठते ॥ १० ॥",
        hindi: "यही तो वह दृष्टा, स्प्रष्टा, श्रोता, सूंघने वाला, मन्ता, बोद्धा, कर्ता और 'विज्ञान-आत्मा' पुरुष है। वह उस परम अक्षर आत्मा में प्रतिष्ठित होता है।",
        english: "He is indeed the Seer, Toucher, Hearer, Smeller, Thinker, Knower, Doer, the Vijnana Atman. He becomes established in the Supreme Undecaying Self.",
        simpleExplanation: "The real 'YOU' is the Knower (Vijnana Atman). In deep sleep, you (the drop) merge into the Ocean (Brahman).",
        simpleExplanationHindi: "असली 'आप' ज्ञाता (विज्ञान-आत्मा) हैं। गहरी नींद में, आप (बूंद) सागर (ब्रह्म) में विलीन हो जाते हैं।",
        nanoBananaPrompt: "A glowing silhouette of a person merging seamlessly into a vast, infinite ocean of light.",
        wordMeanings: [
            { sanskrit: "draṣṭā", devanagari: "द्रष्टा", hindi: "देखने वाला", english: "seer" },
            { sanskrit: "vijñānātmā", devanagari: "विज्ञानात्मा", hindi: "विज्ञान-आत्मा", english: "knowing Self" },
            { sanskrit: "pare akṣare ātmani", devanagari: "परे अक्षरे आत्मनि", hindi: "परम अक्षर आत्मा में", english: "in Supreme Undecaying Self" }
        ]
    },
    {
        id: 52,
        prashna: 4,
        verse: 11,
        theme: "The Fruit of This Knowledge",
        sanskrit: "परमेवाक्षरं प्रतिपद्यते स यो ह वै तदच्छायमशरीरमलोहितं शुभ्रमक्षरं वेद । यस्तु सोम्य स सर्वज्ञः सर्वो भवति तदेष श्लोकः ॥ ११ ॥",
        hindi: "जो उस छाया-रहित, शरीर-रहित, रंग-रहित, शुभ्र और अक्षर (ब्रह्म) को जानता है, वह उसे प्राप्त कर लेता है। वह सर्वज्ञ और 'सब कुछ' हो जाता है।",
        english: "He who knows that shadowless, bodiless, colorless, pure Undecaying Self attains the Supreme. He becomes All-knowing and All.",
        simpleExplanation: "Knowing the Self makes you Everything. You lose your limits and become Infinite.",
        simpleExplanationHindi: "स्वयं को जानना आपको 'सब कुछ' बना देता है। आप अपनी सीमाएं खो देते हैं और अनंत बन जाते हैं।",
        nanoBananaPrompt: "A transparent being filled with the cosmos (stars, galaxies) representing becoming 'The All'.",
        wordMeanings: [
            { sanskrit: "aśarīram", devanagari: "अशरीरम्", hindi: "शरीररहित", english: "bodiless" },
            { sanskrit: "akṣaram", devanagari: "अक्षरम्", hindi: "अक्षर", english: "undecaying" },
            { sanskrit: "sarvajñaḥ", devanagari: "सर्वज्ञः", hindi: "सर्वज्ञ", english: "all-knowing" }
        ]
    },

    // ==========================================
    // PRASHNA 5: THE POWER OF OM
    // Questioner: Satyakama of Shibi
    // ==========================================

    {
        id: 53,
        prashna: 5,
        verse: 1,
        theme: "The Fifth Question",
        sanskrit: "अथ हैनम् शैव्यः सत्यकामः पप्रच्छ । स यो ह वै तद् भगवन् मनुष्येषु प्रायणान्तमोङ्कारमभिध्यायीत । कतमं वाव स तेन लोकं जयतीति ॥ १ ॥",
        hindi: "सत्यकाम ने पूछा: 'हे भगवन्! यदि कोई मृत्यु तक 'ओंकार' (OM) का निरंतर ध्यान करता रहे, तो वह किस लोक को जीतता है?'",
        english: "Satyakama asked: 'Sir, if one meditates on OM until the end of his life, which world does he win by that?'",
        simpleExplanation: "QUESTION 5: The Ultimate Technique. What happens if I chant OM my entire life until death?",
        simpleExplanationHindi: "प्रश्न 5: परम तकनीक। अगर मैं जीवन भर मृत्यु तक ॐ का जप करूँ तो क्या होगा?",
        nanoBananaPrompt: "An old sage meditating with the symbol 'OM' glowing brightly in front of him."
    },
    {
        id: 54,
        prashna: 5,
        verse: 2,
        theme: "Higher and Lower Brahman",
        sanskrit: "तस्मै स होवाच । एतद्वै सत्यकाम परं चापरं च ब्रह्म यदोङ्कारः । तस्माद् विद्वानेतेनैवायतनेनैकतरमन्वेति ॥ २ ॥",
        hindi: "उन्होंने कहा: 'हे सत्यकाम! यह ओंकार ही पर-ब्रह्म (निराकार) और अपर-ब्रह्म (सगुण) दोनों है। विद्वान इसके सहारे किसी एक को पा लेता है।'",
        english: "He replied: 'O Satyakama, OM is verily both the Higher Brahman (Formless) and the Lower Brahman (Manifest). The wise attain either through this support.'",
        simpleExplanation: "OM is the Master Key. It represents BOTH the formed God (Rama/Krishna) and the Formless God (Energy).",
        simpleExplanationHindi: "ॐ मास्टर कुंजी है। यह सगुण ईश्वर (राम/कृष्ण) और निर्गुण ईश्वर (ऊर्जा) दोनों का प्रतिनिधित्व करता है।",
        nanoBananaPrompt: "The symbol OM acting as a bridge connecting a physical temple (Lower) to a pure white light (Higher).",
        wordMeanings: [
            { sanskrit: "param brahma", devanagari: "परं ब्रह्म", hindi: "पर ब्रह्म", english: "Higher Brahman" },
            { sanskrit: "aparam brahma", devanagari: "अपरं ब्रह्म", hindi: "अपर ब्रह्म", english: "Lower Brahman" },
            { sanskrit: "oṅkāraḥ", devanagari: "ओङ्कारः", hindi: "ओंकार", english: "the syllable OM" }
        ]
    },
    {
        id: 55,
        prashna: 5,
        verse: 3,
        theme: "Meditating on 'A' (1 Matra)",
        sanskrit: "स यद्येकमात्रमभिध्यायीत स तेनैव संवेदितस्तूर्णमेव जगत्यामभिसम्पद्यते । तमृचो मनुष्यलोकमुपनयन्ते... ॥ ३ ॥",
        hindi: "यदि वह एक मात्रा ('अ') का ध्यान करता है, तो वह शीघ्र ही पृथ्वी पर (मनुष्य रूप में) लौट आता है। ऋग्वेद की ऋचाएं उसे मनुष्य लोक लाती हैं।",
        english: "If he meditates on One Measure ('A'), he quickly returns to Earth. The Rig Veda leads him to the Human World.",
        simpleExplanation: "Level 1: Meditating on just the waking aspect ('A') brings you back as a great, virtuous Human.",
        simpleExplanationHindi: "स्तर 1: केवल जाग्रत पहलू ('अ') का ध्यान करने से आप एक महान, सदाचारी मनुष्य के रूप में वापस आते हैं।",
        nanoBananaPrompt: "A person meditating on the letter 'A', followed by an image of a king or great leader on Earth.",
        wordMeanings: [
            { sanskrit: "eka-mātram", devanagari: "एकमात्रम्", hindi: "एक मात्रा", english: "one measure" },
            { sanskrit: "manuṣya-lokam", devanagari: "मनुष्यलोकम्", hindi: "मनुष्य लोक", english: "human world" }
        ]
    },
    {
        id: 56,
        prashna: 5,
        verse: 4,
        theme: "Meditating on 'U' (2 Matras)",
        sanskrit: "अथ यदि द्विमात्रेण मनसि सम्पद्यते सोऽन्तरिक्षं यजुर्भिरुन्नीयते सोमलोकम् । स सोमलोके विभूतिमनुभूय पुनरावर्तते ॥ ४ ॥",
        hindi: "यदि वह दो मात्राओं ('अ' + 'उ') का ध्यान करता है, तो वह अंतरिक्ष के सोमलोक (चन्द्रलोक) जाता है। वहाँ ऐश्वर्य भोगकर लौट आता है।",
        english: "If he meditates on Two Measures ('A'+'U'), he goes to the Lunar World (Soma Loka). After experiencing power there, he returns.",
        simpleExplanation: "Level 2: Meditating on the Dream aspect ('U') takes you to Heaven (Moon). You enjoy, but you must RETURN.",
        simpleExplanationHindi: "स्तर 2: स्वप्न पहलू ('उ') का ध्यान आपको स्वर्ग (चंद्रमा) ले जाता है। आप आनंद लेते हैं, लेकिन आपको वापस आना होगा।",
        nanoBananaPrompt: "A spirit ascending to a silvery moon, enjoying a feast, and then falling back down to earth as rain.",
        wordMeanings: [
            { sanskrit: "dvi-mātreṇa", devanagari: "द्विमात्रेण", hindi: "दो मात्राओं से", english: "by two measures" },
            { sanskrit: "soma-lokam", devanagari: "सोमलोकम्", hindi: "सोम/चंद्र लोक", english: "lunar world" }
        ]
    },
    {
        id: 57,
        prashna: 5,
        verse: 5,
        theme: "Meditating on 'M' (3 Matras - Full AUM)",
        sanskrit: "यः पुनरेतं त्रिमात्रेणोमित्येतेनैवाक्षरेण परं पुरुषमभिध्यायीत स तेजसि सूर्ये सम्पन्नः । यथा पादोदरस्त्वचा विनिर्मुच्यत एवं ह वै स पाप्मना विनिर्मुक्तः... ॥ ५ ॥",
        hindi: "जो त्रि-मात्र ('अ+उ+म') द्वारा परम पुरुष का ध्यान करता है, वह सूर्य (तेज) में पहुँचता है। जैसे सांप केंचुली से छूटता है, वैसे ही वह पापों से मुक्त होकर ब्रह्मलोक जाता है।",
        english: "But he who meditates on the Full OM (Three Measures) enters the Sun. As a snake sheds its skin, he is freed from sin and goes to Brahma-World.",
        simpleExplanation: "Level 3: The Full OM takes you to the Sun (Source). Total liberation. Like a snake shedding old skin, you shed your limitations.",
        simpleExplanationHindi: "स्तर 3: पूर्ण ॐ आपको सूर्य (स्रोत) तक ले जाता है। पूर्ण मुक्ति। जैसे सांप पुरानी त्वचा उतारता है, वैसे ही आप अपनी सीमाओं को उतार फेंकते हैं।",
        nanoBananaPrompt: "A snake shedding its old skin, transforming into a being of pure golden light ascending to the sun.",
        wordMeanings: [
            { sanskrit: "tri-mātreṇa", devanagari: "त्रिमात्रेण", hindi: "तीन मात्राओं से", english: "by three measures" },
            { sanskrit: "param puruṣam", devanagari: "परं पुरुषम्", hindi: "परम पुरुष", english: "Supreme Person" },
            { sanskrit: "pādodaras tvacā", devanagari: "पादोदरस्त्वचा", hindi: "सांप की केंचुली", english: "snake's skin" }
        ]
    },
    {
        id: 58,
        prashna: 5,
        verse: 6,
        theme: "Harmony of Matras",
        sanskrit: "तिस्रो मात्रा मृत्युमत्यः प्रयुक्ता अन्योन्यसक्ता... क्रियासु... सम्यक्प्रयुक्तासु न कम्पते ज्ञः ॥ ६ ॥",
        hindi: "तीनों मात्राएं अलग-अलग नाशवान हैं। पर जब वे परस्पर जुड़ी और ठीक प्रयोग की जाती हैं, तो ज्ञानी विचलित नहीं होता।",
        english: "The three measures are mortal when separate. But when connected and used well, the knower does not tremble.",
        simpleExplanation: "Don't fragment your life. Integrate Waking, Dreaming, and Deep Sleep into one Continuous Awareness.",
        simpleExplanationHindi: "जीवन को खंडित मत करो। जाग्रत, स्वप्न और सुषुप्ति को एक निरंतर जागरूकता में एकीकृत करो।",
        nanoBananaPrompt: "Three separate threads (Red, Blue, White) being woven into a strong, single golden rope."
    },
    {
        id: 59,
        prashna: 5,
        verse: 7,
        theme: "Summary of Truth",
        sanskrit: "ऋग्भिरेतं यजुर्भिरन्तरिक्षं सामभिर्यत्तत्कवयो वेदयन्ते । तमोंकारेणैवायतनेनान्वेति विद्वान् यत्तच्छान्तमजरममृतमभयं परं चेति ॥ ७ ॥",
        hindi: "ऋग्वेद से यह लोक, यजुर्वेद से अंतरिक्ष, सामवेद से ब्रह्मलोक। विद्वान केवल ओंकार के सहारे उस शांत, अजर, अमर और अभय पद को पा लेता है।",
        english: "Rig leads here, Yajur to the middle, Sama to the Supreme. By OM alone, the wise attain the Peaceful, Unaging, Fearless Supreme.",
        simpleExplanation: "OM is the rocket ship. It takes you past Earth, past Space, straight to the Fearless center of Infinity.",
        simpleExplanationHindi: "ॐ रॉकेट जहाज है। यह आपको पृथ्वी से परे, अंतरिक्ष से परे, सीधे अनंत के निर्भय केंद्र तक ले जाता है।",
        nanoBananaPrompt: "A rocket shaped like the symbol OM blasting off from earth, passing the moon, and entering a dimension of golden silence."
    },

    // ==========================================
    // PRASHNA 6: THE SIXTEEN PARTS
    // Questioner: Sukesha of Bharadwaja
    // ==========================================

    {
        id: 60,
        prashna: 6,
        verse: 1,
        theme: "The Sixth Question",
        sanskrit: "अथ हैनम् सुकेशा भारद्वाजः पप्रच्छ । भगवन् हिरण्यनाभः कौसल्यो राजपुत्रो ... षोडशकलं भारद्वाज पुरुषं वेत्थ ... ॥ १ ॥",
        hindi: "सुकेशा ने पूछा: 'हे भगवन्! राजकुमार हिरण्यनाभ ने मुझसे पूछा था—क्या तुम 16 कलाओं वाले पुरुष को जानते हो? मैंने कहा नहीं। झूठ बोलने वाला जड़ से सूख जाता है। वह पुरुष कहाँ है?'",
        english: "Sukesha asked: 'Prince Hiranyanabha asked me about the Person with 16 Parts. I said I didn't know. A liar dries up from the roots. Where is that Person?'",
        simpleExplanation: "QUESTION 6: Where is God? (And a lesson on integrity: Better to say 'I don't know' than to lie and rot).",
        simpleExplanationHindi: "प्रश्न 6: भगवान कहाँ हैं? (और अखंडता पर एक पाठ: झूठ बोलने और सड़ने से बेहतर है 'मैं नहीं जानता' कहना)।",
        nanoBananaPrompt: "A prince asking a student a question. The student shaking his head 'no', visualizing a dying tree (representing a liar)."
    },
    {
        id: 61,
        prashna: 6,
        verse: 2,
        theme: "God is Within",
        sanskrit: "तस्मै स होवाच । इहैवान्तःशरीरे सोम्य स पुरुषो यस्मिन्नेताः षोडश कला प्रभवन्तीति ॥ २ ॥",
        hindi: "उन्होंने कहा: 'हे सौम्य! वह पुरुष यहाँ इस शरीर के भीतर ही है, जिससे ये सोलह कलाएं उत्पन्न होती हैं।'",
        english: "He replied: 'O dear one, that Person is HERE, inside this very body, in whom these sixteen parts arise.'",
        simpleExplanation: "Stop looking at the sky. The Divine Person is INSIDE your own body, right here, right now.",
        simpleExplanationHindi: "आसमान की ओर देखना बंद करो। दिव्य पुरुष आपके अपने शरीर के भीतर है, अभी, यहीं।",
        nanoBananaPrompt: "A silhouette of a person meditating, with a blindingly bright star glowing in the center of their chest.",
        wordMeanings: [
            { sanskrit: "iha eva", devanagari: "इहैव", hindi: "यहीं", english: "here only" },
            { sanskrit: "antaḥ-śarīre", devanagari: "अन्तःशरीरे", hindi: "शरीर के भीतर", english: "inside the body" },
            { sanskrit: "ṣoḍaśa kalāḥ", devanagari: "षोडश कलाः", hindi: "सोलह कलाएं", english: "sixteen parts" }
        ]
    },
    {
        id: 62,
        prashna: 6,
        verse: 3,
        theme: "The Creator's Thought",
        sanskrit: "स ईक्षाञ्चक्रे । कस्मिन्नहमुत्क्रान्त उत्क्रान्तो भविष्यामि कस्मिन्वा प्रतिष्ठिते प्रतिष्ठास्यामीति ॥ ३ ॥",
        hindi: "उसने (पुरुष ने) सोचा: 'किसके निकलने पर मैं निकल जाऊंगा? और किसके रहने पर मैं रहूँगा?'",
        english: "He reflected: 'What is it by whose departure I shall depart, and by whose staying I shall stay?'",
        simpleExplanation: "The Soul needed a vehicle. It asked: 'What instrumentality will allow me to experience existence?'",
        simpleExplanationHindi: "आत्मा को एक वाहन की आवश्यकता थी। इसने पूछा: 'कौन सी माध्यम मुझे अस्तित्व का अनुभव करने की अनुमति देगा?'",
        nanoBananaPrompt: "A glowing consciousness pondering over blueprints of the human body."
    },
    {
        id: 63,
        prashna: 6,
        verse: 4,
        theme: "Creation of 16 Parts",
        sanskrit: "स प्राणमसृजत प्राणाच्छ्रद्धां खं वायुर्ज्योतिरापः पृथिवीन्द्रियं मनः । अन्नमन्नाद्वीर्यं तपो मन्त्राः कर्म लोका लोकेषु च नाम च ॥ ४ ॥",
        hindi: "उसने प्राण रचा। प्राण से श्रद्धा, आकाश, वायु, तेज, जल, पृथ्वी, इन्द्रियां, मन... अन्न, वीर्य, तप, मंत्र, कर्म, लोक और नाम।",
        english: "He created Prana; from Prana, Faith, Space, Air, Fire, Water, Earth, Senses, Mind... Food, Strength, Austerity, Mantras, Karma, Worlds, and Name.",
        simpleExplanation: "The 16 Layers of Existence: Beginning with Life Force (Prana) and ending with Identity (Name).",
        simpleExplanationHindi: "अस्तित्व की 16 परतें: जीवन शक्ति (प्राण) से शुरू होकर पहचान (नाम) पर समाप्त होती हैं।",
        nanoBananaPrompt: "A concentric circle diagram expanding outwards from a center point, showing 16 layers of creation."
    },
    {
        id: 64,
        prashna: 6,
        verse: 5,
        theme: "The River Analogy",
        sanskrit: "स यथेमा नद्यः स्यन्दमानाः समुद्रायणाः समुद्रं प्राप्यास्तं गच्छन्ति... तथा ... कलाः पुरुषायणाः पुरुषं प्राप्यास्तं गच्छन्ति ... ॥ ५ ॥",
        hindi: "जैसे नदियां समुद्र में गिरकर अपना नाम-रूप खो देती हैं और केवल 'समुद्र' कहलाती हैं, वैसे ही दृष्टा की ये 16 कलाएं पुरुष में लीन होकर अपना नाम-रूप खो देती हैं।",
        english: "Just as rivers flowing into the ocean lose their name and form and are called 'Ocean', so do the 16 parts disappear into the Purusha.",
        simpleExplanation: "DISSOLUTION: When you find the Source, your separate identity (Name/Form) vanishes. You become the Ocean.",
        simpleExplanationHindi: "विलीनता: जब आप स्रोत को पा लेते हैं, तो आपकी अलग पहचान (नाम/रूप) गायब हो जाती है। आप सागर बन जाते हैं।",
        nanoBananaPrompt: "Many distinct rivers flowing into a vast ocean, where their individual borders dissolve completely.",
        wordMeanings: [
            { sanskrit: "nadyaḥ", devanagari: "नद्यः", hindi: "नदियाँ", english: "rivers" },
            { sanskrit: "samudram", devanagari: "समुद्रम्", hindi: "समुद्र", english: "ocean" },
            { sanskrit: "astam gacchanti", devanagari: "अस्तं गच्छन्ति", hindi: "विलीन हो जाती हैं", english: "they disappear" }
        ]
    },
    {
        id: 65,
        prashna: 6,
        verse: 6,
        theme: "Hub and Spokes (Again)",
        sanskrit: "अरा इव रथनाभौ कला यस्मिन्प्रतिष्ठिताः । तं वेद्यं पुरुषं वेद यथा मा वो मृत्युः परिव्यथा इति ॥ ६ ॥",
        hindi: "जैसे रथ के पहिए में आरे, वैसे ही जिसमें कलाएं प्रतिष्ठित हैं—उस 'जानने योग्य' पुरुष को जानो, ताकि मृत्यु तुम्हें कष्ट न दे।",
        english: "Know Him, in whom the parts are established like spokes in the hub, so that Death may not hurt you.",
        simpleExplanation: "The 16 parts are just spokes. The Self (Purusha) is the Hub. Hold on to the Hub, and the wheel won't crush you.",
        simpleExplanationHindi: "16 भाग तो बस आरे हैं। आत्मा (पुरुष) धुरी है। धुरी को पकड़ो, और पहिया तुम्हें कुचलेगा नहीं।",
        nanoBananaPrompt: "A person holding tightly to the luminous center (hub) of a spinning wheel, safe while the rim spins fast.",
        wordMeanings: [
            { sanskrit: "arāḥ", devanagari: "अराः", hindi: "आरे", english: "spokes" },
            { sanskrit: "rathanābhau", devanagari: "रथनाभौ", hindi: "रथ की नाभि", english: "hub of wheel" },
            { sanskrit: "mṛtyuḥ", devanagari: "मृत्युः", hindi: "मृत्यु", english: "death" }
        ]
    },
    {
        id: 66,
        prashna: 6,
        verse: 7,
        theme: "Pippalada's Farewell",
        sanskrit: "तान्होवाच एतावदेवाहमेतत् परं ब्रह्म वेद । नातः परमस्तीति ॥ ७ ॥",
        hindi: "पिप्पलाद ने कहा: 'मैं इस परम ब्रह्म के बारे में इतना ही जानता हूँ। इससे परे और कुछ नहीं है।'",
        english: "Pippalada said to them: 'Thus far, indeed, I know the Supreme Brahman. There is nothing higher than this.'",
        simpleExplanation: "The Master concludes: 'That's it. That is the highest Truth. Period.'",
        simpleExplanationHindi: "गुरु का निष्कर्ष: 'बस इतना ही। यही परम सत्य है। पूर्ण विराम।'",
        nanoBananaPrompt: "The sage raising his hand in blessing, indicating the completion of wisdom.",
        wordMeanings: [
            { sanskrit: "param brahma", devanagari: "परं ब्रह्म", hindi: "परम ब्रह्म", english: "Supreme Brahman" },
            { sanskrit: "na ataḥ param", devanagari: "नातः परम्", hindi: "इससे परे कुछ नहीं", english: "nothing higher than this" }
        ]
    },
    {
        id: 67,
        prashna: 6,
        verse: 8,
        theme: "The Students' Gratitude",
        sanskrit: "ते तमर्चयन्तस्त्वं हि नः पिता योऽस्माकमविद्यायाः परं पारं तारयसीति । नमः परमऋषिभ्यो नमः परमऋषिभ्यः ॥ ८ ॥",
        hindi: "शिष्यों ने उनकी पूजा की और कहा: 'आप ही हमारे पिता हैं, जो हमें अविद्या के पार ले गए हैं।' परम ऋषियों को नमस्कार!",
        english: "They worshipped him: 'You are indeed our Father who has taken us across the ocean of ignorance.' Salutations to the great Seers!",
        simpleExplanation: "Gratitude: A real Father gives you a body; a Guru gives you Immortality by taking you across the ocean of Ignorance.",
        simpleExplanationHindi: "कृतज्ञता: एक असली पिता आपको शरीर देता है; एक गुरु आपको अज्ञान के सागर के पार ले जाकर अमरता देता है।",
        nanoBananaPrompt: "Six students bowing down deeply to the Sage, with a background of a calm ocean and a sunrise."
    },
];

// Metadata for Prashna Upanishad
export const PRASHNA_METADATA = {
    id: "prashna",
    name: "Prashna",
    nameSanskrit: "प्रश्नोपनिषद्",
    veda: "Atharva Veda",
    shlokaCount: 67,
    adhyayaCount: 6, // 6 Questions
    description: "The Upanishad of Questions. Six seekers ask Sage Pippalada about the source of life, the nature of Prana, dream states, meditation on Om, and the nature of the Purusha.",
    descriptionHindi: "प्रश्नों का उपनिषद। छह साधक ऋषि पिप्पलाद से जीवन के स्रोत, प्राण के स्वरूप, स्वप्न अवस्था, ओम के ध्यान और पुरुष की प्रकृति के बारे में पूछते हैं।"
};

// Helper types/functions if needed similar to Katha
export const getPrashnaVerses = (questionNumber: number) => {
    return prashnaData.filter(entry => entry.prashna === questionNumber);
};
