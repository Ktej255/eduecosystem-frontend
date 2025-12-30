// Aitareya Upanishad Data
// Source: Rig Veda | 3 Chapters, 5 Sections
// Theme: Creation, Entry of Consciousness, Three Births
// Mahavakya: "Prajnanam Brahma" (Consciousness is Brahman)

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface AitareyaDataEntry {
    id: number;
    chapter: number;
    section: number;
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

export const AITAREYA_SHLOKAS: AitareyaDataEntry[] = [
    // ==========================================
    // CHAPTER 1, SECTION 1: CREATION OF WORLDS
    // ==========================================

    {
        id: 1,
        chapter: 1,
        section: 1,
        verse: 1,
        theme: "The One Before Creation",
        sanskrit: "ॐ आत्मा वा इदमेक एवाग्र आसीन्नान्यत्किञ्चन मिषत् । स ईक्षत लोकान्नु सृजा इति ॥ १ ॥",
        hindi: "ॐ! सृष्टि से पहले केवल एक आत्मा ही था। कोई अन्य चेष्टा करने वाली वस्तु नहीं थी। उसने विचार किया: 'मैं लोकों की रचना करूँ।'",
        english: "OM! In the beginning, this was but the absolute Self alone. There was nothing else whatsoever that moved. He thought: 'Let me create the worlds.'",
        simpleExplanation: "BEFORE CREATION: Only ONE Self existed. Nothing else moved or lived. Then He THOUGHT—and creation began!",
        simpleExplanationHindi: "सृष्टि से पहले: केवल एक आत्मा था। कुछ और न था। फिर उसने सोचा—और सृष्टि शुरू हुई!",
        nanoBananaPrompt: "A single point of consciousness in pure darkness, about to think creation into existence.",
        wordMeanings: [
            { sanskrit: "ātmā ekaḥ eva", devanagari: "आत्मा एक एव", hindi: "केवल एक आत्मा", english: "Self alone" },
            { sanskrit: "īkṣata", devanagari: "ईक्षत", hindi: "विचार किया", english: "He thought/willed" }
        ]
    },
    {
        id: 2,
        chapter: 1,
        section: 1,
        verse: 2,
        theme: "The Four Worlds",
        sanskrit: "स इमांल्लोकानसृजत । अम्भो मरीचीर्मरमापः । अदोऽम्भः परेण दिवं द्यौः प्रतिष्ठा । अन्तरिक्षं मरीचयः । पृथिवी मरः । या अधस्तात्ता आपः ॥ २ ॥",
        hindi: "उसने इन लोकों की रचना की: अम्भस् (स्वर्ग से ऊपर), मरीचि (अंतरिक्ष), मर (पृथ्वी), और आपः (पाताल)।",
        english: "He created the worlds: Ambhas (Highest World), Marichi (Interspace), Mara (Earth/Death), and Apah (Subterranean Waters).",
        simpleExplanation: "FOUR WORLDS: Heaven above, Space, Earth (mortal), Waters below. Creation has layers!",
        simpleExplanationHindi: "चार लोक: ऊपर स्वर्ग, अंतरिक्ष, पृथ्वी (मृत्यु), नीचे जल। सृष्टि में परतें हैं!",
        nanoBananaPrompt: "Four stacked worlds—heavenly waters above, space, earth, and subterranean waters below.",
        wordMeanings: [
            { sanskrit: "ambhaḥ", devanagari: "अम्भः", hindi: "उच्चतम जल", english: "highest waters" },
            { sanskrit: "mara", devanagari: "मर", hindi: "मृत्युलोक/पृथ्वी", english: "earth/death realm" }
        ]
    },
    {
        id: 3,
        chapter: 1,
        section: 1,
        verse: 3,
        theme: "The Cosmic Person (Virat)",
        sanskrit: "स ईक्षतेमे नु लोका लोकपालान्नु सृजा इति । सोऽद्भ्य एव पुरुषं समुद्धृत्यामूर्छयत् ॥ ३ ॥",
        hindi: "उसने विचार किया: 'लोक बन गए, अब लोकपालों की रचना करूँ।' उसने जल से पुरुष (विराट रूप) को निकालकर आकार दिया।",
        english: "He thought: 'Here are the worlds; let me create the Guardians.' From the waters, He drew forth the Person (Cosmic Form) and gave Him shape.",
        simpleExplanation: "THE COSMIC BODY: After creating worlds, God created a COSMIC PERSON from the elements to guard them.",
        simpleExplanationHindi: "विराट शरीर: लोक बनाने के बाद, ईश्वर ने तत्वों से एक विराट पुरुष बनाया।",
        nanoBananaPrompt: "A cosmic giant being drawn from primordial waters, taking human-like form.",
        wordMeanings: [
            { sanskrit: "lokapālān", devanagari: "लोकपालान्", hindi: "लोकों के रक्षक", english: "guardians of worlds" },
            { sanskrit: "puruṣam", devanagari: "पुरुषम्", hindi: "विराट पुरुष", english: "Cosmic Person" }
        ]
    },
    {
        id: 4,
        chapter: 1,
        section: 1,
        verse: 4,
        theme: "Organs Manifest from Cosmic Person",
        sanskrit: "तमभ्यतपत्तस्याभितप्तस्य मुखं निरभिद्यत यथाण्डं मुखाद्वागग्निः नासिके प्राणो वायुः चक्षुषी सूर्यः कर्णौ दिशः त्वचो वनस्पतयः हृदयं चन्द्रमाः नाभिः मृत्युः ॥",
        hindi: "उसने तप किया। उसके मुख से वाणी और अग्नि, नासिका से प्राण और वायु, आँखों से सूर्य, कानों से दिशाएं, त्वचा से वनस्पति, हृदय से चन्द्रमा, नाभि से मृत्यु निकली।",
        english: "He brooded. Mouth burst forth—Speech and Fire. Nostrils—Breath and Air. Eyes—Sun. Ears—Quarters. Skin—Plants. Heart—Moon. Navel—Death.",
        simpleExplanation: "COSMIC BODY PARTS = COSMIC FORCES: Mouth=Fire, Eyes=Sun, Heart=Moon, Navel=Death!",
        simpleExplanationHindi: "विराट अंग = ब्रह्मांडीय शक्तियां: मुख=अग्नि, आँख=सूर्य, हृदय=चंद्र, नाभि=मृत्यु!",
        nanoBananaPrompt: "A cosmic being with sun as eyes, moon as heart, fire from mouth, wind from nose.",
        wordMeanings: [
            { sanskrit: "mukha → vāk → agni", devanagari: "मुख → वाक् → अग्नि", hindi: "मुख से वाणी से अग्नि", english: "mouth → speech → fire" },
            { sanskrit: "hṛdaya → candramā", devanagari: "हृदय → चन्द्रमा", hindi: "हृदय से चंद्रमा", english: "heart → moon" }
        ]
    },

    // ==========================================
    // CHAPTER 1, SECTION 2: ENTRY OF GODS
    // ==========================================

    {
        id: 5,
        chapter: 1,
        section: 2,
        verse: 1,
        theme: "Hunger of the Gods",
        sanskrit: "ता एता देवताः सृष्टा अस्मिन्महत्यर्णवे प्रापतन् । तमशनायापिपासाभ्यामन्ववार्जत् ॥",
        hindi: "वे रची गई देवता इस महान संसार-सागर में गिरे। ईश्वर ने उन्हें भूख और प्यास से युक्त कर दिया।",
        english: "These created gods fell into this great ocean (of Samsara). He subjected them to Hunger and Thirst.",
        simpleExplanation: "THE GODS NEED BODIES: Even gods fell into the world and became hungry! They needed physical homes.",
        simpleExplanationHindi: "देवताओं को शरीर चाहिए: देवता भी संसार में गिरे और भूखे हो गए! उन्हें भौतिक घर चाहिए था।",
        nanoBananaPrompt: "Gods falling into an ocean, becoming hungry and thirsty, seeking shelter.",
        wordMeanings: [
            { sanskrit: "aśanāyā-pipāsābhyām", devanagari: "अशनायापिपासाभ्याम्", hindi: "भूख और प्यास से", english: "with hunger and thirst" }
        ]
    },
    {
        id: 6,
        chapter: 1,
        section: 2,
        verse: 4,
        theme: "Human is the Masterpiece",
        sanskrit: "ताभ्यः पुरुषमानयत् ता अब्रुवन् सुकृतं बतेति पुरुषो वाव सुकृतम् । ता अब्रवीद्यथायतनं प्रविशतेति ॥",
        hindi: "वह उनके लिए एक पुरुष (मनुष्य) लाया। वे बोले: 'अहो! यह सुंदर कृति है!' पुरुष ही वास्तव में 'सुकृत' है। ईश्वर ने कहा: 'अपने-अपने स्थानों में प्रवेश करो।'",
        english: "He brought them a Human. They said: 'Well done! The Human is indeed a masterpiece!' He said: 'Enter your respective abodes.'",
        simpleExplanation: "HUMAN = MASTERPIECE: Gods rejected cow & horse bodies, but LOVED the human form! 'Sukritam' = Well-made!",
        simpleExplanationHindi: "मनुष्य = उत्कृष्ट कृति: देवताओं ने गाय-घोड़े को अस्वीकार किया, पर मानव शरीर पसंद किया! 'सुकृत' = सुंदर कृति!",
        nanoBananaPrompt: "Gods admiring a human form, calling it a masterpiece, preparing to enter it.",
        wordMeanings: [
            { sanskrit: "sukṛtam", devanagari: "सुकृतम्", hindi: "सुंदर कृति", english: "masterpiece/well-made" },
            { sanskrit: "yathāyatanam praviśata", devanagari: "यथायतनं प्रविशत", hindi: "अपने स्थानों में प्रवेश करो", english: "enter your abodes" }
        ]
    },
    {
        id: 7,
        chapter: 1,
        section: 2,
        verse: 5,
        theme: "Gods Enter the Body",
        sanskrit: "अग्निर्वाग्भूत्वा मुखं प्राविशद्वायुः प्राणो भूत्वा नासिके प्राविशदादित्यश्चक्षुर्भूत्वाक्षिणी प्राविशद्दिशः श्रोत्रं भूत्वा कर्णौ प्राविशन् चन्द्रमा मनो भूत्वा हृदयं प्राविशन्मृत्युरपानो भूत्वा नाभिं प्राविशत् ॥",
        hindi: "अग्नि वाणी बनकर मुख में, वायु प्राण बनकर नासिका में, सूर्य दृष्टि बनकर आँखों में, दिशाएं श्रवण बनकर कानों में, चन्द्रमा मन बनकर हृदय में, मृत्यु अपान बनकर नाभि में प्रविष्ट हुए।",
        english: "Fire became Speech and entered mouth. Air became Breath and entered nostrils. Sun became Sight and entered eyes. Moon became Mind and entered heart. Death became Apana and entered navel.",
        simpleExplanation: "THE POSSESSION: Fire lives in your tongue, Sun in your eyes, Moon in your heart! Your body hosts cosmic powers!",
        simpleExplanationHindi: "आवेश: अग्नि तुम्हारी जीभ में, सूर्य आँखों में, चंद्र हृदय में! तुम्हारा शरीर ब्रह्मांडीय शक्तियों का घर है!",
        nanoBananaPrompt: "A human body with fire in mouth, sun in eyes, moon in heart, death in navel.",
        wordMeanings: [
            { sanskrit: "agniḥ vāk bhūtvā", devanagari: "अग्निः वाक् भूत्वा", hindi: "अग्नि वाणी बनकर", english: "Fire becoming Speech" },
            { sanskrit: "candramā manaḥ bhūtvā", devanagari: "चन्द्रमा मनः भूत्वा", hindi: "चंद्र मन बनकर", english: "Moon becoming Mind" }
        ]
    },

    // ==========================================
    // CHAPTER 1, SECTION 3: ENTRY OF THE SELF
    // ==========================================

    {
        id: 8,
        chapter: 1,
        section: 3,
        verse: 12,
        theme: "God Enters Through the Crown",
        sanskrit: "स ईक्षत कथं न्विदं मदृते स्यादिति । स एतमेव सीमानं विदार्यैतया द्वारा प्रापद्यत । सैषा विदृतिर्नाम द्वास्तदेतन्नान्दनम् ॥",
        hindi: "उसने विचार किया: 'मेरे बिना यह कैसे रह सकता है?' उसने सिर की सीम (ब्रह्मरन्ध्र) को फाड़कर उस द्वार से प्रवेश किया। यह द्वार 'विदृति' और 'नान्दन' (आनंद स्थान) कहलाता है।",
        english: "He thought: 'How can this function without Me?' So, splitting the crown of the skull, He entered through that door. That door is called Vidriti (Cleft)—the Place of Bliss (Nandana).",
        simpleExplanation: "THE CROWN CHAKRA: God enters the body through the TOP of the head—the Brahmarandhra! That's the door to bliss!",
        simpleExplanationHindi: "ब्रह्मरन्ध्र: ईश्वर सिर के ऊपर से शरीर में प्रवेश करता है—यही आनंद का द्वार है!",
        nanoBananaPrompt: "Divine light entering a body through the crown of the head, the door of bliss.",
        wordMeanings: [
            { sanskrit: "sīmānam vidārya", devanagari: "सीमानं विदार्य", hindi: "सीम को चीरकर", english: "splitting the crown" },
            { sanskrit: "nāndanam", devanagari: "नान्दनम्", hindi: "आनंद स्थान", english: "place of bliss" }
        ]
    },
    {
        id: 9,
        chapter: 1,
        section: 3,
        verse: 14,
        theme: "Idandra (I Saw This)",
        sanskrit: "स एतमेव पुरुषं ब्रह्म ततममपश्यत् । इदमदर्शमिति । तस्मादिदन्द्रो नाम । तमिदन्द्रं सन्तमिन्द्र इत्याचक्षते परोक्षेण ॥",
        hindi: "उसने इस व्याप्त पुरुष (ब्रह्म) को देखा और कहा: 'इदमदर्शम्' (मैंने इसे देख लिया)। इसलिए उसका नाम 'इदन्द्र' है। लोग उसे परोक्ष रूप से 'इन्द्र' कहते हैं।",
        english: "He looked at this all-pervading Person and said: 'I have seen this (Idam-Adarsham).' So His name is Idandra. They call Him Indra indirectly. Gods love mystery!",
        simpleExplanation: "ETYMOLOGY: 'Indra' comes from 'Idam + Adarsham' = 'I saw THIS.' The Self sees itself! Gods love hidden meanings.",
        simpleExplanationHindi: "व्युत्पत्ति: 'इन्द्र' = 'इदम् + अदर्शम्' = 'मैंने यह देखा।' आत्मा खुद को देखती है! देवता रहस्य पसंद करते हैं।",
        nanoBananaPrompt: "The Self looking at itself and exclaiming 'I saw this!' becoming Indra.",
        wordMeanings: [
            { sanskrit: "idam adarśam", devanagari: "इदमदर्शम्", hindi: "मैंने इसे देखा", english: "I saw this" },
            { sanskrit: "parokṣa-priyāḥ", devanagari: "परोक्षप्रियाः", hindi: "रहस्य-प्रिय", english: "lovers of mystery" }
        ]
    },

    // ==========================================
    // CHAPTER 2: THE THREE BIRTHS
    // ==========================================

    {
        id: 10,
        chapter: 2,
        section: 1,
        verse: 1,
        theme: "First Birth (Conception)",
        sanskrit: "पुरुषे ह वा अयमादितो गर्भो भवति यदेतद्रेतः । तदेतत्सर्वेभ्योऽङ्गेभ्यस्तेजः सम्भूतमात्मन्येवात्मानं बिभर्ति । तद्यदा स्त्रियां सिञ्चत्यथैनज्जनयति तदस्य प्रथमं जन्म ॥",
        hindi: "पुरुष में पहले यह गर्भ रेतस के रूप में होता है—शरीर के सभी अंगों का तेज। जब वह इसे स्त्री में सींचता है, यह प्रथम जन्म है।",
        english: "In the man, the soul first becomes an embryo (seed)—the vigor from all limbs. When he pours this into womab, he gives it birth. This is the First Birth.",
        simpleExplanation: "FIRST BIRTH: The soul exists first as seed in the father—essence of his whole body. Conception = 1st birth!",
        simpleExplanationHindi: "प्रथम जन्म: आत्मा पहले पिता में बीज के रूप में—उसके पूरे शरीर का सार। गर्भाधान = पहला जन्म!",
        nanoBananaPrompt: "The essence of a man's body becoming a seed, the first birth of the soul.",
        wordMeanings: [
            { sanskrit: "prathamaṃ janma", devanagari: "प्रथमं जन्म", hindi: "पहला जन्म", english: "first birth" },
            { sanskrit: "retas", devanagari: "रेतस्", hindi: "वीर्य/बीज", english: "seed" }
        ]
    },
    {
        id: 11,
        chapter: 2,
        section: 1,
        verse: 4,
        theme: "Third Birth (Rebirth)",
        sanskrit: "स इतः प्रयन्नेव पुनर्जायते तदस्य तृतीयं जन्म ॥",
        hindi: "यहाँ से जाकर वह (पिता) फिर जन्म लेता है। यह उसका तृतीय जन्म है।",
        english: "Departing hence, he is born again. This is his Third Birth.",
        simpleExplanation: "THREE BIRTHS: 1) Conception in father, 2) Delivery from mother, 3) Rebirth after death! Cycle continues.",
        simpleExplanationHindi: "तीन जन्म: 1) पिता में गर्भाधान, 2) माता से जन्म, 3) मृत्यु के बाद पुनर्जन्म! चक्र चलता रहता है।",
        nanoBananaPrompt: "A cycle showing three births—seed, baby, and rebirth after death.",
        wordMeanings: [
            { sanskrit: "punar jāyate", devanagari: "पुनर्जायते", hindi: "फिर जन्म लेता है", english: "is born again" },
            { sanskrit: "tṛtīyaṃ janma", devanagari: "तृतीयं जन्म", hindi: "तीसरा जन्म", english: "third birth" }
        ]
    },
    {
        id: 12,
        chapter: 2,
        section: 1,
        verse: 5,
        theme: "Vamadeva's Realization",
        sanskrit: "गर्भे नु सन्नन्वेषामवेदमहं देवानां जनिमानि विश्वा । शतं मा पुर आयसीररक्षन्नधः श्येनो जवसा निरदीयम् ॥",
        hindi: "ऋषि वामदेव ने कहा: 'गर्भ में ही मैंने देवताओं के सभी जन्मों को जान लिया। सौ लोहे के किलों ने मुझे जकड़ा था, पर मैं बाज की तरह तेजी से निकल आया।'",
        english: "Sage Vamadeva said: 'While in the womb, I knew all births of the gods. A hundred iron citadels confined me, but like a Hawk, I broke forth swiftly.'",
        simpleExplanation: "WOMB ENLIGHTENMENT: Vamadeva realized truth WHILE IN THE WOMB! He escaped the iron cage of births like a hawk!",
        simpleExplanationHindi: "गर्भ में ज्ञान: वामदेव ने गर्भ में ही सत्य जाना! वह बाज की तरह जन्मों की लौह जेल से निकल गया!",
        nanoBananaPrompt: "A sage in the womb having cosmic visions, breaking free like a hawk from iron cages.",
        wordMeanings: [
            { sanskrit: "garbhe", devanagari: "गर्भे", hindi: "गर्भ में", english: "in the womb" },
            { sanskrit: "śyenaḥ", devanagari: "श्येनः", hindi: "बाज", english: "hawk" }
        ]
    },

    // ==========================================
    // CHAPTER 3: THE MAHAVAKYA
    // ==========================================

    {
        id: 13,
        chapter: 3,
        section: 1,
        verse: 1,
        theme: "The Inquiry into Self",
        sanskrit: "कोऽयमात्मेति वयमुपास्महे कतरः स आत्मा । येन वा पश्यति येन वा शृणोति येन वा विजानाति ॥",
        hindi: "'वह कौन सा आत्मा है जिसकी हम उपासना करें? वह कौन है जिसके द्वारा मनुष्य देखता है? सुनता है? जानता है?'",
        english: "'Who is this Self whom we worship? Which one is the Self? Is it that by which one sees? Or hears? Or knows?'",
        simpleExplanation: "THE GREAT QUESTION: Who is the REAL Self? Is it the seer? The hearer? The knower? What's behind all these?",
        simpleExplanationHindi: "महान प्रश्न: असली आत्मा कौन है? देखने वाला? सुनने वाला? जानने वाला? इन सबके पीछे क्या है?",
        nanoBananaPrompt: "A seeker asking: who sees? who hears? who knows? pointing to different senses.",
        wordMeanings: [
            { sanskrit: "kaḥ ayam ātmā", devanagari: "कोऽयमात्मा", hindi: "यह आत्मा कौन है", english: "who is this Self" }
        ]
    },
    {
        id: 14,
        chapter: 3,
        section: 1,
        verse: 2,
        theme: "All are Names of Consciousness",
        sanskrit: "यदेतद्धृदयं मनश्चैतत् । संज्ञानमाज्ञानं विज्ञानं प्रज्ञानं मेधा दृष्टिर्धृतिर्मतिर्मनीषा जूतिः स्मृतिः सङ्कल्पः कामो वश इति । सर्वाण्येवैतानि प्रज्ञानस्य नामधेयानि भवन्ति ॥",
        hindi: "यह हृदय और मन ही है। संज्ञान, आज्ञान, विज्ञान, प्रज्ञान, मेधा, दृष्टि, धृति, मति, स्मृति, संकल्प, काम, वश—ये सभी 'प्रज्ञान' के ही नाम हैं।",
        english: "It is the Heart and Mind. Perception, Understanding, Wisdom, Memory, Will, Desire, Control—all these are names of PRAJNANA (Consciousness).",
        simpleExplanation: "ALL IS CONSCIOUSNESS: Memory, will, thought, desire, understanding—ALL are just different names for ONE thing: Consciousness!",
        simpleExplanationHindi: "सब चेतना है: स्मृति, संकल्प, विचार, इच्छा, बुद्धि—सब एक ही चीज़ के नाम हैं: चेतना!",
        nanoBananaPrompt: "Multiple mental functions all radiating from one central consciousness.",
        wordMeanings: [
            { sanskrit: "prajñānasya nāmadheyāni", devanagari: "प्रज्ञानस्य नामधेयानि", hindi: "प्रज्ञान के नाम", english: "names of Consciousness" }
        ]
    },
    {
        id: 15,
        chapter: 3,
        section: 1,
        verse: 3,
        theme: "PRAJNANAM BRAHMA (The Mahavakya)",
        sanskrit: "एष ब्रह्मैष इन्द्र एष प्रजापतिरेते सर्वे देवाः । सर्वं तत्प्रज्ञानेत्रं प्रज्ञाने प्रतिष्ठितम् । प्रज्ञानेत्रो लोकः प्रज्ञा प्रतिष्ठा । प्रज्ञानं ब्रह्म ॥",
        hindi: "यह ब्रह्म है, यह इन्द्र है, यह प्रजापति है, यही सब देवता हैं। सब कुछ प्रज्ञा-नेत्र है और प्रज्ञा में प्रतिष्ठित है। लोक प्रज्ञा-नेत्र है। प्रज्ञा ही प्रतिष्ठा है। प्रज्ञानं ब्रह्म।",
        english: "This is Brahman, Indra, Prajapati, all gods. All is guided by Consciousness. The universe has Consciousness as its eye. CONSCIOUSNESS IS BRAHMAN (Prajnanam Brahma).",
        simpleExplanation: "THE THIRD MAHAVAKYA: 'PRAJNANAM BRAHMA' = CONSCIOUSNESS IS GOD! The aware-ing presence behind all experience IS Brahman!",
        simpleExplanationHindi: "तीसरा महावाक्य: 'प्रज्ञानं ब्रह्म' = चेतना ही ब्रह्म है! सभी अनुभवों के पीछे जानने वाली उपस्थिति ही ब्रह्म है!",
        nanoBananaPrompt: "The words 'Prajnanam Brahma' glowing, consciousness being revealed as Brahman.",
        wordMeanings: [
            { sanskrit: "prajñānaṃ brahma", devanagari: "प्रज्ञानं ब्रह्म", hindi: "चेतना ही ब्रह्म है", english: "Consciousness is Brahman" },
            { sanskrit: "prajñā pratiṣṭhā", devanagari: "प्रज्ञा प्रतिष्ठा", hindi: "प्रज्ञा ही आधार है", english: "Consciousness is the support" }
        ]
    },
    {
        id: 16,
        chapter: 3,
        section: 1,
        verse: 4,
        theme: "Becoming Immortal",
        sanskrit: "स एतेन प्राज्ञेनात्मनास्माल्लोकादुत्क्रम्य अमुष्मिन्स्वर्गे लोके सर्वान् कामानाप्त्वाऽमृतः समभवत् समभवत् ॥",
        hindi: "वह इस प्रज्ञान-आत्मा द्वारा इस लोक से ऊपर उठकर, दिव्य लोक में सभी कामनाओं को प्राप्त करके अमर हो गया। वह अमर हो गया।",
        english: "He, having transcended this world by means of this Conscious Self, obtained all desires in that heavenly world, and became Immortal. He became Immortal.",
        simpleExplanation: "THE FINAL RESULT: Realizing you ARE Consciousness = transcending the world = obtaining all = IMMORTALITY! Repeated twice for emphasis!",
        simpleExplanationHindi: "अंतिम परिणाम: जानना कि आप चेतना हो = संसार से ऊपर उठना = सब प्राप्त करना = अमरता! जोर देने के लिए दोहराया गया!",
        nanoBananaPrompt: "A soul rising through consciousness, transcending worlds, becoming immortal light.",
        wordMeanings: [
            { sanskrit: "amṛtaḥ samabhavat", devanagari: "अमृतः समभवत्", hindi: "अमर हो गया", english: "became immortal" }
        ]
    }
];

// Metadata
export const AITAREYA_METADATA = {
    id: "aitareya",
    name: "Aitareya",
    nameSanskrit: "ऐतरेयोपनिषद्",
    veda: "Rig Veda",
    shlokaCount: 16,  // 16 selected key verses
    chapterCount: 3,
    sectionCount: 5,
    mahavakya: {
        sanskrit: "प्रज्ञानं ब्रह्म",
        transliteration: "Prajñānam Brahma",
        meaning: "Consciousness is Brahman",
        verse: 15
    },
    themes: {
        chapter1: "Creation of Worlds and Entry of Gods",
        chapter2: "The Three Births of Man",
        chapter3: "The Definition of Self (Mahavakya)"
    },
    famousVerses: {
        mahavakya: { id: 15, chapter: 3, section: 1, verse: 3 },
        humanMasterpiece: { id: 6, chapter: 1, section: 2, verse: 4 },
        crownEntry: { id: 8, chapter: 1, section: 3, verse: 12 },
        vamadevaRealization: { id: 12, chapter: 2, section: 1, verse: 5 }
    }
};
