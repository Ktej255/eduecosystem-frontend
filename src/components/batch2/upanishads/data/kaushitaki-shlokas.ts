// Kaushitaki Upanishad Data (#25 in Muktika Canon)
// Source: Rig Veda | Category: Samanya
// Theme: Geography of Afterlife (Path of Gods), Prana is Brahman, Moon as Gate
// Total: 4 Adhyayas (Chapters) - Chapters 1-2 included here

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface KaushitakiDataEntry {
    id: number;
    adhyaya: number;
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
export const KAUSHITAKI_SHANTI_MANTRA = {
    sanskrit: "ॐ वाङ् मे मनसि प्रतिष्ठिता । मनो मे वाचि प्रतिष्ठितम् । आविरावीर्म एधि । वेदस्य म आणीस्थः । श्रुतं मे मा प्रहासीः । अनेनाधीतेनाहोरात्रान्सन्दधामि । ऋतं वदिष्यामि । सत्यं वदिष्यामि । तन्मामवतु । तद्वक्तारमवतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरी वाणी मन में प्रतिष्ठित हो। मेरा मन वाणी में प्रतिष्ठित हो। हे स्वप्रकाश ब्रह्म! प्रकट हो जाओ। मेरा सुना हुआ ज्ञान मुझे न छोड़े। मैं ऋत और सत्य कहूँगा। ॐ शांति, शांति, शांति।",
    english: "OM! May my speech be established in mind. May my mind be established in speech. O Self-manifest One, be revealed. May what I have heard not depart. I will speak Right and Truth. May That protect me. OM Peace, Peace, Peace."
};

export const KAUSHITAKI_SHLOKAS: KaushitakiDataEntry[] = [
    // Adhyaya 1: The Throne of Brahman (The Afterlife)
    {
        id: 1,
        adhyaya: 1,
        verse: 1,
        theme: "The Question of Afterlife",
        sanskrit: "चित्रो ह वै गार्ग्यायणिर्यक्ष्यमाण आरुणिं वव्रे । स ह पुत्रं श्वेतकेतुं प्रजिघाय याजयैति । तं हागतं पप्रच्छ गौतमस्य पुत्रोऽस्ति संवृतं लोके यस्मिन्मा धास्यसीति ।",
        hindi: "राजा चित्र ने यज्ञ कराने के लिए आरुणि को चुना। आरुणि ने पुत्र श्वेतकेतु को भेजा। चित्र ने पूछा: 'हे गौतम पुत्र! क्या कोई ऐसा गुप्त लोक है जहाँ तुम मुझे मरने के बाद स्थापित करोगे?'",
        english: "King Chitra, wishing to perform a sacrifice, chose Aruni. Aruni sent his son Shvetaketu. Chitra asked: 'O Son of Gautama! Is there a hidden world where you will place me after death?'",
        simpleExplanation: "THE BIG QUESTION: A king asks a priest—where will I go after death?",
        simpleExplanationHindi: "बड़ा प्रश्न: एक राजा पुरोहित से पूछता है—मृत्यु के बाद मैं कहाँ जाऊंगा?",
        nanoBananaPrompt: "A king asking a young priest about the destination after death.",
        wordMeanings: [
            { sanskrit: "saṃvṛta loka", devanagari: "संवृत लोक", hindi: "गुप्त लोक", english: "hidden world" }
        ]
    },
    {
        id: 2,
        adhyaya: 1,
        verse: 2,
        theme: "The Father Also Didn't Know",
        sanskrit: "स होवाच नाहमेतद्वेद हन्ताचार्यं पृच्छानीति । स ह पितरमासाद्य पप्रच्छ... स होवाच अहमप्येतन्न वेद... तौ ह पाणिं परिगृह्य चित्रस्य प्रतिचक्रमतुः ।",
        hindi: "श्वेतकेतु ने कहा: 'मैं नहीं जानता, आचार्य से पूछूंगा।' पिता ने भी कहा: 'मैं भी नहीं जानता। चलो, हम दोनों शिष्य बनकर चलें।' वे दोनों समिधा लेकर चित्र के पास गए।",
        english: "Shvetaketu said: 'I don't know, let me ask the Teacher.' Father said: 'I also don't know. Let us both go as students.' They both went to Chitra with fuel in hand.",
        simpleExplanation: "HUMILITY: Even the great teacher Uddalaka admits ignorance and goes as a student!",
        simpleExplanationHindi: "विनम्रता: महान गुरु उद्दालक भी अज्ञान स्वीकार कर शिष्य बनकर जाते हैं!",
        nanoBananaPrompt: "Father and son both going as humble students to learn from a king.",
        wordMeanings: [
            { sanskrit: "pāṇi parigṛhya", devanagari: "पाणि परिगृह्य", hindi: "हाथ में समिधा लेकर", english: "with fuel in hand" }
        ]
    },
    {
        id: 3,
        adhyaya: 1,
        verse: 3,
        theme: "The Moon is the Gate",
        sanskrit: "स होवाच... ये वै के चास्माल्लोकात्प्रयन्ति चन्द्रमसमेव ते सर्वे गच्छन्ति । एष हि स्वर्गद्वारं यच्चन्द्रमाः । तं यत्प्रत्याह तमतिसृजते य एनं न प्रत्याह तमिह वृष्टिर्भूत्वा वर्षति ।",
        hindi: "चित्र ने कहा: 'जो भी इस लोक से जाते हैं, सब पहले चन्द्रमा पर जाते हैं। चन्द्रमा ही स्वर्ग का द्वार है। जो उत्तर दे देता है, उसे आगे जाने देता है। जो नहीं दे पाता, उसे वृष्टि बनाकर पृथ्वी पर बरसा देता है।'",
        english: "Chitra said: 'Whoever departs from this world, all go to the Moon. The Moon is the Gate of Heaven. He who answers the Moon passes; he who cannot is rained down upon earth.'",
        simpleExplanation: "MOON = GATE OF HEAVEN: All souls go to Moon first. Pass the test = go forward. Fail = rain back!",
        simpleExplanationHindi: "चन्द्रमा = स्वर्ग का द्वार: सभी आत्माएं पहले चंद्रमा जाती हैं। परीक्षा पास = आगे। फेल = वापस बरसो!",
        nanoBananaPrompt: "The Moon as the Gate of Heaven—souls being tested before passing or raining back.",
        wordMeanings: [
            { sanskrit: "svargadvāra", devanagari: "स्वर्गद्वार", hindi: "स्वर्ग का द्वार", english: "gate of heaven" },
            { sanskrit: "vṛṣṭi", devanagari: "वृष्टि", hindi: "वर्षा", english: "rain" }
        ]
    },
    {
        id: 4,
        adhyaya: 1,
        verse: 4,
        theme: "Rebirth According to Karma",
        sanskrit: "स इह कीटो वा पतङ्गो वा शकुनिर्वा शार्दूलो वा सिंहो वा मत्स्यो वा परश्वा वा पुरुषो वा... प्रत्याजायते ।",
        hindi: "'वह बारिश बनकर गिरता है और यहाँ कीड़ा, पतंगा, पक्षी, बाघ, शेर, मछली, गैंडा या मनुष्य होकर अपने कर्मों के अनुसार पुनर्जन्म लेता है।'",
        english: "'He is reborn here as worm, insect, bird, tiger, lion, fish, rhinoceros, or man... according to his deeds and knowledge.'",
        simpleExplanation: "REBIRTH LADDER: Fail at Moon = reborn as worm, insect, animal, or human based on karma!",
        simpleExplanationHindi: "पुनर्जन्म सीढ़ी: चंद्रमा पर फेल = कीड़ा, कीट, पशु या मनुष्य बनो, कर्म अनुसार!",
        nanoBananaPrompt: "Souls raining down and being reborn as various creatures based on karma.",
        wordMeanings: [
            { sanskrit: "pratyājāyate", devanagari: "प्रत्याजायते", hindi: "पुनर्जन्म लेता है", english: "is reborn" }
        ]
    },
    {
        id: 5,
        adhyaya: 1,
        verse: 5,
        theme: "The Test: Who Are You?",
        sanskrit: "स आगतः पृच्छते कोऽसीति । तं प्रतिब्रूयात्... विचक्षणवती वागस्मि... त्वमस्मि इति । तं अतिसृजते ।",
        hindi: "'जब वह ज्ञानी वहाँ पहुँचता है, चन्द्रमा पूछता है: 'तुम कौन हो?' उसे उत्तर देना चाहिए: 'मैं विचक्षण वाणी हूँ... मैं तुम्हीं हूँ (Tvam Asmi)।' तब वह उसे आगे जाने देता है।'",
        english: "'When he arrives, the Moon asks: 'Who are you?' He should reply: 'I am Intelligent Speech... I am You (Tvam Asmi).' Then he lets him pass.'",
        simpleExplanation: "THE PASSWORD: 'I AM YOU!' (Tvam Asmi) = the right answer to pass the Moon's test!",
        simpleExplanationHindi: "पासवर्ड: 'मैं तुम्हीं हूँ!' (त्वमस्मि) = चंद्रमा की परीक्षा पास करने का सही उत्तर!",
        nanoBananaPrompt: "A soul answering the Moon's question 'Who are you?' with 'I am You.'",
        wordMeanings: [
            { sanskrit: "ko'si", devanagari: "कोऽसि", hindi: "तुम कौन हो", english: "who are you?" },
            { sanskrit: "tvam asmi", devanagari: "त्वमस्मि", hindi: "मैं तुम हूँ", english: "I am You" }
        ]
    },
    {
        id: 6,
        adhyaya: 1,
        verse: 6,
        theme: "The Path of Gods (Devayana)",
        sanskrit: "स एतं देवयानं पन्थानमासाद्य अग्निलोकमागच्छति स वायुलोकं स वरुणलोकं स आदित्यलोकं स इन्द्रलोकं स प्रजापतिलोकं स ब्रह्मलोकम् ।",
        hindi: "'वह देवयान मार्ग पर चलकर अग्निलोक, फिर वायुलोक, वरुणलोक, आदित्यलोक, इन्द्रलोक, प्रजापतिलोक, और अंत में ब्रह्मलोक पहुँचता है।'",
        english: "'Having entered the Path of Gods, he comes to World of Agni, then Vayu, Varuna, Aditya (Sun), Indra, Prajapati, and finally the World of Brahman.'",
        simpleExplanation: "DEVAYANA PATH: Agni → Vayu → Varuna → Sun → Indra → Prajapati → BRAHMALOKA!",
        simpleExplanationHindi: "देवयान मार्ग: अग्नि → वायु → वरुण → सूर्य → इंद्र → प्रजापति → ब्रह्मलोक!",
        nanoBananaPrompt: "A soul ascending through seven realms: Fire, Air, Water, Sun, Indra, Prajapati, Brahman.",
        wordMeanings: [
            { sanskrit: "devayāna", devanagari: "देवयान", hindi: "देवताओं का मार्ग", english: "path of gods" },
            { sanskrit: "brahmaloka", devanagari: "ब्रह्मलोक", hindi: "ब्रह्म का लोक", english: "world of Brahman" }
        ]
    },
    {
        id: 7,
        adhyaya: 1,
        verse: 7,
        theme: "The Throne of Brahman",
        sanskrit: "तस्य ह वा एतस्य ब्रह्मलोकस्य... अमितौजाः पर्यङ्कः... तस्मिन् ब्रह्मास्ते । तमित्त्थंवित्पादेनैव अग्रे आरोहति । तं ब्रह्मा पृच्छति कोऽसीति ।",
        hindi: "'उस ब्रह्मलोक में 'अमितौजा' (असीम शक्ति) नामक सिंहासन है। उस पर ब्रह्मा विराजमान हैं। ज्ञानी उस पर चढ़ता है। ब्रह्मा पूछते हैं: 'तुम कौन हो?''",
        english: "'In that Brahmaloka there is a Throne called 'Amitaujas' (Immeasurable Power). Brahman sits on it. The Knower steps onto it. Brahman asks: 'Who are you?''",
        simpleExplanation: "THE FINAL THRONE: 'Amitaujas' = Throne of Infinite Power. Brahman asks the final question!",
        simpleExplanationHindi: "अंतिम सिंहासन: 'अमितौजा' = असीम शक्ति का सिंहासन। ब्रह्मा अंतिम प्रश्न पूछते हैं!",
        nanoBananaPrompt: "A liberated soul stepping onto the Throne of Infinite Power before Brahman.",
        wordMeanings: [
            { sanskrit: "amitaujā", devanagari: "अमितौजा", hindi: "असीम शक्ति", english: "immeasurable power" },
            { sanskrit: "paryaṅka", devanagari: "पर्यङ्क", hindi: "सिंहासन/पलंग", english: "throne/couch" }
        ]
    },
    {
        id: 8,
        adhyaya: 1,
        verse: 8,
        theme: "The Ultimate Answer",
        sanskrit: "स प्रतिब्रूयात्... यस्त्वमसि सोऽहमस्मीति । तमाह केन पौष्णानि नामानि आप्नोतीति...",
        hindi: "'उसे उत्तर देना चाहिए: 'जो आप हैं, वही मैं हूँ।' ब्रह्मा कहते हैं: 'मेरा सत्य क्या है?' वह कहता है: 'ब्रह्म।' 'यह सब जगत किसका है?' 'वह मेरा ही है।''",
        english: "'He should reply: 'What You are, That am I.' Brahman asks: 'What is My Truth?' He answers: 'Brahman.' 'Whose is all this?' 'It is mine.''",
        simpleExplanation: "THE MAHAVAKYA: 'What You are, I am!' (Yas Tvam Asi So'ham Asmi) = LIBERATION!",
        simpleExplanationHindi: "महावाक्य: 'जो आप हैं, वही मैं हूँ!' = मुक्ति!",
        nanoBananaPrompt: "The soul declaring to Brahman: 'What You are, That am I'—complete unity.",
        wordMeanings: [
            { sanskrit: "yas tvam asi so'ham asmi", devanagari: "यस्त्वमसि सोऽहमस्मि", hindi: "जो आप हैं वही मैं हूँ", english: "what You are, That I am" }
        ]
    },
    // Adhyaya 2: Prana Vidya (The Worship of Life Force)
    {
        id: 9,
        adhyaya: 2,
        verse: 1,
        theme: "Prana is Brahman",
        sanskrit: "प्राणो ब्रह्मेति ह स्माह कौषीतकिः । तस्य ह वा एतस्य प्राणस्य ब्रह्मणो मनो दूतं चक्षुर्गोप्तृ श्रोत्रं संश्रावयितृ...",
        hindi: "कौषीतकि ऋषि ने कहा: 'प्राण ही ब्रह्म है।' उस प्राण रूपी ब्रह्म का 'मन' दूत है; 'आँख' रक्षक है; 'कान' घोषणा करने वाला है।",
        english: "Sage Kaushitaki said: 'PRANA IS BRAHMAN.' Of this Prana-Brahman, Mind is the messenger; Eye the protector; Ear the announcer.",
        simpleExplanation: "PRANA = BRAHMAN: Life-breath is God! Mind, Eye, Ear are its servants!",
        simpleExplanationHindi: "प्राण = ब्रह्म: प्राण ही ईश्वर है! मन, आँख, कान उसके सेवक हैं!",
        nanoBananaPrompt: "Prana as Brahman, with Mind, Eye, and Ear as its servants.",
        wordMeanings: [
            { sanskrit: "prāṇo brahma", devanagari: "प्राणो ब्रह्म", hindi: "प्राण ब्रह्म है", english: "Prana is Brahman" }
        ]
    },
    {
        id: 10,
        adhyaya: 2,
        verse: 2,
        theme: "Senses Serve Prana",
        sanskrit: "तस्मै वा एतस्मै प्राणाय ब्रह्मण एताः सर्वा देवता अयाचमानाय बलिं हरन्ति ।",
        hindi: "'इस प्राण रूपी ब्रह्म के लिए सभी देवता (इन्द्रियां) बिना मांगे ही बलि (अनुभव) लाते हैं।'",
        english: "'To this Prana-Brahman, all deities (senses) bring offerings unasked.'",
        simpleExplanation: "SENSES SERVE PRANA: All senses automatically offer their experiences to Prana!",
        simpleExplanationHindi: "इंद्रियां प्राण की सेवा करती हैं: सभी इंद्रियां स्वतः अपने अनुभव प्राण को अर्पित करती हैं!",
        nanoBananaPrompt: "All the senses bringing offerings to Prana without being asked.",
        wordMeanings: [
            { sanskrit: "bali", devanagari: "बलि", hindi: "बलि/अर्पण", english: "offering" }
        ]
    },
    {
        id: 11,
        adhyaya: 2,
        verse: 3,
        theme: "Speech and Breath Interchange",
        sanskrit: "यावद्वै पुरुषो भाषते न तावत्प्राणितुं शक्नोति वाचि तदा प्राणं जुहोति । यावद्वै पुरुषः प्राणिति न तावद्भाषितुं शक्नोति प्राणे तदा वाचं जुहोति ।",
        hindi: "'जब तक व्यक्ति बोलता है, तब तक सांस नहीं ले सकता—तब वह वाणी में प्राण की आहुति देता है। जब तक सांस लेता है, तब तक बोल नहीं सकता—तब प्राण में वाणी की आहुति देता है।'",
        english: "'As long as a man speaks, he cannot breathe—then he sacrifices Prana into Speech. As long as he breathes, he cannot speak—then he sacrifices Speech into Prana.'",
        simpleExplanation: "CONTINUOUS SACRIFICE: Speaking = offering breath. Breathing = offering speech. 24/7 yajna!",
        simpleExplanationHindi: "निरंतर यज्ञ: बोलना = सांस की आहुति। सांस लेना = वाणी की आहुति। 24/7 यज्ञ!",
        nanoBananaPrompt: "The continuous interchange between speech and breath as constant sacrifice.",
        wordMeanings: [
            { sanskrit: "juhoti", devanagari: "जुहोति", hindi: "आहुति देता है", english: "offers/sacrifices" }
        ]
    },
    {
        id: 12,
        adhyaya: 2,
        verse: 4,
        theme: "The Dying of Gods",
        sanskrit: "अथ अतो दैवाः परिमराः । एतद्वै ब्रह्म दीप्यते यदग्निर्ज्वलति । अथ एतन्म्रियते यन्न ज्वलति...",
        hindi: "'अब देवताओं के मरने का वर्णन। जब अग्नि जलती है, ब्रह्म दीप्त होता है। जब नहीं जलती, वह मर जाती है (और उसका तेज वायु में लीन होता है)।'",
        english: "'Now the Dying of Gods. When Fire burns, Brahman shines. When it doesn't burn, it dies (its energy goes into Air).'",
        simpleExplanation: "GODS DIE INTO EACH OTHER: Fire dies → Energy goes to Air → Air dies → goes to Sun... etc!",
        simpleExplanationHindi: "देवता एक दूसरे में लीन होते हैं: अग्नि मरती है → ऊर्जा वायु में → वायु मरती है → सूर्य में!",
        nanoBananaPrompt: "The cosmic cycle of elements dying into each other—fire into air, air into sun.",
        wordMeanings: [
            { sanskrit: "parimara", devanagari: "परिमर", hindi: "मरना/लीन होना", english: "dying/merging" }
        ]
    },
    {
        id: 13,
        adhyaya: 2,
        verse: 5,
        theme: "Prana is Supreme Good",
        sanskrit: "अथातो निःश्रेयसादानम् । प्राणो ब्रह्मेति ह स्माह कौषीतकिः...",
        hindi: "'अब निःश्रेयस (परम कल्याण) का ग्रहण। कौषीतकि कहते थे: 'प्राण ही ब्रह्म है।' जो ऐसा जानता है, वह श्रेष्ठता प्राप्त करता है।'",
        english: "'Now the Acceptance of Supreme Good. Kaushitaki said: 'Prana is Brahman.' He who knows this attains supremacy.'",
        simpleExplanation: "SUPREME GOOD: Know that Prana = Brahman = attain the highest!",
        simpleExplanationHindi: "परम कल्याण: जानो कि प्राण = ब्रह्म = सर्वोच्च प्राप्त करो!",
        nanoBananaPrompt: "Realizing Prana as Brahman and attaining the Supreme Good.",
        wordMeanings: [
            { sanskrit: "niḥśreyasa", devanagari: "निःश्रेयस", hindi: "परम कल्याण", english: "supreme good" }
        ]
    },
    {
        id: 14,
        adhyaya: 2,
        verse: 6,
        theme: "The Rite of Ekayam",
        sanskrit: "अथ अतः एकायम् ।",
        hindi: "'अब 'एकायम' (एक लक्ष्य) नामक उपासना है।' (यहाँ एक विशिष्ट अनुष्ठान का वर्णन है जिसमें साधक वाणी, प्राण आदि की उपासना करता है।)",
        english: "'Now the Ekayam (Rite of the One).' (Describes worshipping Speech, Breath, and Mind as variations of One Prana).",
        simpleExplanation: "EKAYAM RITE: Worship Speech, Breath, Mind as ONE—the one Prana!",
        simpleExplanationHindi: "एकायम विधि: वाणी, प्राण, मन की एक रूप में उपासना—एक प्राण!",
        nanoBananaPrompt: "The Ekayam rite—worshipping speech, breath, and mind as the One Prana.",
        wordMeanings: [
            { sanskrit: "ekāyam", devanagari: "एकायम्", hindi: "एक लक्ष्य", english: "the One Goal" }
        ]
    },
    // Adhyaya 3: The Revelation of Indra (Prana-Prajna)
    {
        id: 15,
        adhyaya: 3,
        verse: 1,
        theme: "Pratardana's Boon",
        sanskrit: "प्रतर्दनो ह वै दैवोदासिरिन्द्रस्य प्रियं धामोपजगाम युद्धेन च पौरुषेण च । तं हेन्द्र उवाच । प्रतर्दन वरं ते ददानीति । स होवाच प्रतर्दनस्त्वमेव वृणीष्व यं त्वं मनुष्याय हिततमं मन्यस इति ।",
        hindi: "दिवोदास के पुत्र प्रतर्दन युद्ध और पौरुष से इन्द्र के प्रिय धाम पहुँचे। इन्द्र ने कहा: 'वर मांगो।' प्रतर्दन ने कहा: 'आप स्वयं चुनें जो मनुष्यों के लिए सबसे हितकारी हो।'",
        english: "Pratardana, son of Divodasa, by fighting and virility reached Indra's abode. Indra said: 'Choose a boon.' Pratardana said: 'You choose what is most beneficial for humans.'",
        simpleExplanation: "HERO'S REWARD: The warrior asks Indra for the BEST boon for humanity!",
        simpleExplanationHindi: "योद्धा का पुरस्कार: योद्धा इंद्र से मानवता के लिए सर्वश्रेष्ठ वर मांगता है!",
        nanoBananaPrompt: "A warrior reaching Indra's abode and asking for the best boon for humanity.",
        wordMeanings: [
            { sanskrit: "hitatama", devanagari: "हिततम", hindi: "सबसे हितकारी", english: "most beneficial" }
        ]
    },
    {
        id: 16,
        adhyaya: 3,
        verse: 2,
        theme: "Know Me Alone",
        sanskrit: "स होवाचेन्द्रो... मामेव विजानीहि । एतदेवाहं मनुष्याय हिततमं मन्ये यन्मां विजानीयात् । त्रिशीर्षाणं त्वाष्ट्रमहनम्... तस्य मे तत्र न लोम च मा मीयते । स यो मां वेद न ह वै तस्य केनचन कर्मणा लोको मीयते न स्तेयेन न भ्रूणहत्यया...",
        hindi: "इन्द्र ने कहा: 'मुझे ही जानो। मैं सबसे हितकारी यही मानता हूँ। मैंने त्रिशीर्ष को मारा... फिर भी मेरा बाल बांका न हुआ। जो मुझे जानता है, उसका लोक किसी कर्म से नष्ट नहीं होता—न चोरी से, न भ्रूण-हत्या से।'",
        english: "Indra said: 'KNOW ME ALONE. This is most beneficial. I killed the three-headed... yet no hair of mine was harmed. He who knows Me—his world is not injured by any deed, not theft, not killing.'",
        simpleExplanation: "INDRA'S REVELATION: 'KNOW ME! Even I killed—yet unaffected. Know me = immune to karma!'",
        simpleExplanationHindi: "इंद्र का रहस्य: 'मुझे जानो! मैंने भी हत्या की—फिर भी अप्रभावित। मुझे जानो = कर्म से मुक्त!'",
        nanoBananaPrompt: "Indra revealing that knowing him makes one immune to all karma.",
        wordMeanings: [
            { sanskrit: "mām eva vijānīhi", devanagari: "मामेव विजानीहि", hindi: "मुझे ही जानो", english: "know Me alone" }
        ]
    },
    {
        id: 17,
        adhyaya: 3,
        verse: 3,
        theme: "Prana is Prajna",
        sanskrit: "स एष प्राण एव प्रज्ञात्मा तं मामायुरमृतमित्युपास्स्व । आयुः प्राणः प्राणो वा आयुः । यावद्ध्यस्मिन् शरीरे प्राणो वसति तावदायुः । प्राणेन ह्येवामुष्मिँल्लोकेऽमृतत्वमाप्नोति ।",
        hindi: "'मैं ही वह प्राण हूँ, जो प्रज्ञात्मा है। 'आयु' और 'अमृत' के रूप में मेरी उपासना करो। आयु ही प्राण है, प्राण ही आयु है। जब तक प्राण रहता है, तभी तक आयु है। प्राण से ही अमरता मिलती है।'",
        english: "'I am that PRANA who is PRAJNATMAN (Conscious Self). Worship Me as Life and Immortality. LIFE IS PRANA, PRANA IS LIFE. By Prana one attains immortality.'",
        simpleExplanation: "PRANA = PRAJNA: 'I am Consciousness-Self. Life IS breath, breath IS life. Worship me = Immortality!'",
        simpleExplanationHindi: "प्राण = प्रज्ञा: 'मैं चेतना-आत्मा हूँ। जीवन = सांस, सांस = जीवन। मेरी उपासना = अमरता!'",
        nanoBananaPrompt: "Indra revealing himself as Prana-Prajna, the source of life and immortality.",
        wordMeanings: [
            { sanskrit: "prajñātmā", devanagari: "प्रज्ञात्मा", hindi: "चेतना-आत्मा", english: "conscious Self" },
            { sanskrit: "āyuḥ prāṇaḥ", devanagari: "आयुः प्राणः", hindi: "आयु प्राण है", english: "life is Prana" }
        ]
    },
    {
        id: 18,
        adhyaya: 3,
        verse: 4,
        theme: "No Experience without Prajna",
        sanskrit: "प्रज्ञां वाचं समारूह्य वाचा सर्वाणि नामान्याप्नोति । प्रज्ञां चक्षुः समारूह्य चक्षुषा सर्वाणि रूपाण्याप्नोति । न हि प्रज्ञापेता वाङ्नाम किंचन प्रज्ञापयेत्...",
        hindi: "'प्रज्ञा वाणी पर सवार होकर सभी नाम प्राप्त करती है। प्रज्ञा आँख पर सवार होकर सभी रूप देखती है। प्रज्ञा के बिना वाणी किसी नाम को नहीं बता सकती—मन कहीं और था, मैंने नहीं सुना।'",
        english: "'Mounting Speech with Prajna, one obtains all names. Mounting Eye with Prajna, one sees all forms. Without Prajna, speech cannot convey any name—'My mind was elsewhere, I didn't hear.''",
        simpleExplanation: "CONSCIOUSNESS RIDES ALL: Prajna rides speech, eye, ear. Without it, nothing works!",
        simpleExplanationHindi: "चेतना सब पर सवार: प्रज्ञा वाणी, आँख, कान पर सवार। इसके बिना कुछ नहीं चलता!",
        nanoBananaPrompt: "Prajna (consciousness) riding on speech, eye, and ear to experience the world.",
        wordMeanings: [
            { sanskrit: "prajñā", devanagari: "प्रज्ञा", hindi: "बुद्धि/चेतना", english: "intelligence/consciousness" }
        ]
    },
    {
        id: 19,
        adhyaya: 3,
        verse: 5,
        theme: "The Lord of All",
        sanskrit: "एवमेवैता भूतमात्राः प्रज्ञामात्रास्वर्पिताः प्रज्ञामात्राः प्राणेऽर्पिताः । स एष प्राण एव प्रज्ञात्मा । आनन्दोऽजरोऽमृतः । एष लोकपाल एष लोकाधिपतिरेष सर्वेशः । स म आत्मेति विद्यात् ॥",
        hindi: "'भूत-मात्राएं प्रज्ञा-मात्राओं में, प्रज्ञा-मात्राएं प्राण में अर्पित हैं। वह प्राण ही प्रज्ञात्मा है। वह आनंद, अजर, अमर है। वही लोकपाल, लोकाधिपति, सर्वेश है। 'वह मेरा आत्मा है'—ऐसा जानो।'",
        english: "'Elements rest in Senses, Senses rest in PRANA. This Prana is Prajnatman—Bliss, Ageless, Immortal. He is Guardian, Ruler, Lord of All. 'He is my Self'—thus know.'",
        simpleExplanation: "THE CLIMAX: Prana = Prajnatman = Bliss, Ageless, Immortal, Lord of All = MY SELF!",
        simpleExplanationHindi: "चरमोत्कर्ष: प्राण = प्रज्ञात्मा = आनंद, अजर, अमर, सर्वेश = मेरा आत्मा!",
        nanoBananaPrompt: "The revelation: Prana-Prajna is Bliss, Ageless, Immortal, the Lord—and is your Self.",
        wordMeanings: [
            { sanskrit: "sarveśa", devanagari: "सर्वेश", hindi: "सबका ईश्वर", english: "Lord of All" },
            { sanskrit: "sa ma ātmeti vidyāt", devanagari: "स म आत्मेति विद्यात्", hindi: "वह मेरा आत्मा है जानो", english: "know 'He is my Self'" }
        ]
    },
    // Adhyaya 4: The Sleeping King (Gargya & Ajatashatru)
    {
        id: 20,
        adhyaya: 4,
        verse: 1,
        theme: "Gargya's Offer",
        sanskrit: "अथ ह वै गार्ग्यो बालाकिरनूचानः संस्पृष्ट आस । स ह काशिं वसन् संवदिष्यामीति ह अजातशत्रुं काश्यमेयाय । स होवाच ब्रह्म ते ब्रवाणीति ।",
        hindi: "प्रसिद्ध वेदाध्यायी गार्ग्य बालाकि था। वह काशी में राजा अजातशत्रु के पास गया और बोला: 'मैं तुम्हें ब्रह्म का उपदेश दूँ?'",
        english: "The learned Gargya Balaki came to King Ajatashatru of Kashi and said: 'Let me declare Brahman to you.'",
        simpleExplanation: "PROUD SCHOLAR: A famous pundit offers to teach a king about Brahman!",
        simpleExplanationHindi: "गर्वित पंडित: एक प्रसिद्ध पंडित राजा को ब्रह्म सिखाने की पेशकश करता है!",
        nanoBananaPrompt: "A proud scholar approaching a king to teach him about Brahman.",
        wordMeanings: [
            { sanskrit: "anūcāna", devanagari: "अनूचान", hindi: "वेद पढ़ा हुआ", english: "learned in Vedas" }
        ]
    },
    {
        id: 21,
        adhyaya: 4,
        verse: 2,
        theme: "16 Limited Definitions",
        sanskrit: "स होवाच बालाकिः य एवासावादित्ये पुरुषः... य एवासाश्चन्द्रमसि पुरुषः... (16 definitions rejected)",
        hindi: "बालाकि ने कहा: 'सूर्य में जो पुरुष है, चन्द्रमा में, बिजली में, आकाश में, वायु में, अग्नि में, जल में, दर्पण में, छाया में, प्रतिध्वनि में, शरीर में, दायीं आँख में, बायीं आँख में...' (सभी 16 परिभाषाएं सीमित थीं!)",
        english: "Balaki proposed: 'The Person in Sun, Moon, Lightning, Space, Air, Fire, Water, Mirror, Shadow, Echo, Body, Right Eye, Left Eye...' (All 16 definitions were limited!)",
        simpleExplanation: "16 FAILURES: Balaki proposes 16 definitions of Brahman—ALL rejected as limited!",
        simpleExplanationHindi: "16 असफलताएं: बालाकि ने 16 परिभाषाएं दीं—सभी सीमित मानकर अस्वीकृत!",
        nanoBananaPrompt: "A scholar proposing 16 different definitions of Brahman, all being limited.",
        wordMeanings: [
            { sanskrit: "puruṣa", devanagari: "पुरुष", hindi: "पुरुष/चेतना", english: "person/consciousness" }
        ]
    },
    {
        id: 22,
        adhyaya: 4,
        verse: 3,
        theme: "Balaki Falls Silent",
        sanskrit: "तत उ ह बालाकिस्तूष्णीमास । तं होवाचाजातशत्रुः एतावन्नु इति । नन्वेतावता ब्रह्म विदितं भवतीति ।",
        hindi: "तब बालाकि चुप हो गए। अजातशत्रु ने पूछा: 'बस इतना ही?' बालाकि: 'बस इतना ही।' अजातशत्रु: 'इतने से ब्रह्म नहीं जाना जा सकता।'",
        english: "Then Balaki became SILENT. Ajatashatru asked: 'Is that all?' Balaki: 'That is all.' Ajatashatru: 'By this much, Brahman is not known.'",
        simpleExplanation: "THE SCHOLAR SILENCED: After 16 attempts, the scholar admits defeat!",
        simpleExplanationHindi: "पंडित मौन: 16 प्रयासों के बाद, पंडित हार मान लेता है!",
        nanoBananaPrompt: "The proud scholar falling silent, admitting he doesn't know true Brahman.",
        wordMeanings: [
            { sanskrit: "tūṣṇīm āsa", devanagari: "तूष्णीमास", hindi: "चुप हो गया", english: "became silent" }
        ]
    },
    {
        id: 23,
        adhyaya: 4,
        verse: 4,
        theme: "The Sleeping Man",
        sanskrit: "तं होवाचाजातशत्रुः एहि व्येव त्वा ज्ञापयिष्यामीति । तौ ह सुप्तं पुरुषमीयतुः... तं यष्ट्याविचिक्षेप स तदोत्तस्थौ ।",
        hindi: "अजातशत्रु ने कहा: 'आओ, मैं तुम्हें स्पष्ट ज्ञान कराता हूँ।' वे दोनों एक सोए हुए पुरुष के पास गए। राजा ने उसे छड़ी से जगाया।",
        english: "Ajatashatru said: 'Come, I will make you know clearly.' They went to a sleeping man. The King pushed him with a stick and he woke up.",
        simpleExplanation: "THE PRACTICAL LESSON: The KING becomes teacher! They go to a sleeping man!",
        simpleExplanationHindi: "व्यावहारिक पाठ: राजा गुरु बनता है! वे एक सोए व्यक्ति के पास जाते हैं!",
        nanoBananaPrompt: "The king taking the scholar to a sleeping man as a practical teaching about consciousness.",
        wordMeanings: [
            { sanskrit: "supta puruṣa", devanagari: "सुप्त पुरुष", hindi: "सोता हुआ व्यक्ति", english: "sleeping man" }
        ]
    },
    {
        id: 24,
        adhyaya: 4,
        verse: 5,
        theme: "Where Was Consciousness?",
        sanskrit: "तं होवाचाजातशत्रुः यत्रैष एतत्सुप्तोऽभूत्... कुत एतदागादिति । तदु ह बालाकिर्न विजज्ञौ ।",
        hindi: "अजातशत्रु ने पूछा: 'जब यह सो रहा था, यह विज्ञानमय पुरुष कहाँ था? और जागने पर कहाँ से वापस आया?' बालाकि यह नहीं जानते थे।",
        english: "Ajatashatru asked: 'When he was asleep, where was this Conscious Person? From where did he return?' Balaki did not know.",
        simpleExplanation: "THE DEEP QUESTION: Where does consciousness GO during sleep? Balaki doesn't know!",
        simpleExplanationHindi: "गहरा प्रश्न: नींद में चेतना कहाँ जाती है? बालाकि नहीं जानता!",
        nanoBananaPrompt: "The profound question: where does consciousness go during deep sleep?",
        wordMeanings: [
            { sanskrit: "vijñānamaya puruṣa", devanagari: "विज्ञानमय पुरुष", hindi: "चेतना-पुरुष", english: "conscious person" }
        ]
    },
    {
        id: 25,
        adhyaya: 4,
        verse: 6,
        theme: "The Hita Nadis",
        sanskrit: "हिता नाम हृदयस्य नाड्यः... तासु तदा भवति । यदा सुप्तः स्वप्नं न कंचन पश्यति अथास्मिन् प्राण एवैकधा भवति ।",
        hindi: "अजातशत्रु ने कहा: 'हृदय की नाड़ियां जिन्हें 'हिता' कहते हैं, उनमें वह रहता है। जब वह सोता है और कोई सपना नहीं देखता, तब वह प्राण में एक हो जाता है।'",
        english: "Ajatashatru said: 'The arteries called Hita... in them he resides. When asleep seeing no dream, he becomes ONE in Prana.'",
        simpleExplanation: "THE ANSWER: During deep sleep, consciousness merges into ONE PRANA through Hita nadis!",
        simpleExplanationHindi: "उत्तर: गहरी नींद में, चेतना हिता नाड़ियों द्वारा एक प्राण में लीन हो जाती है!",
        nanoBananaPrompt: "Consciousness flowing through the Hita nadis and merging into Prana during sleep.",
        wordMeanings: [
            { sanskrit: "hitā nāḍī", devanagari: "हिता नाडी", hindi: "हिता नाड़ियां", english: "arteries called Hita" },
            { sanskrit: "ekadhā bhavati", devanagari: "एकधा भवति", hindi: "एक हो जाता है", english: "becomes one" }
        ]
    },
    {
        id: 26,
        adhyaya: 4,
        verse: 7,
        theme: "Spider and Sparks",
        sanskrit: "स यथा लूणनाभिस्तन्तुनोच्चरेत् । यथाग्नेः क्षुद्रा विस्फुलिङ्गा व्युच्चरन्ति । एवमेवास्मादात्मनः सर्वे प्राणाः सर्वे लोकाः सर्वे देवाः सर्वाणि भूतानि व्युच्चरन्ति । तस्योपनिषत् सत्यस्य सत्यमिति ॥",
        hindi: "'जैसे मकड़ी जाले के साथ निकलती है। जैसे अग्नि से चिंगारियां निकलती हैं। वैसे ही इस आत्मा से सभी प्राण, लोक, देवता और प्राणी निकलते हैं। उसका रहस्य है—'सत्य का सत्य।''",
        english: "'As a SPIDER moves out with its thread. As SPARKS come from fire. So from this Self come forth all Pranas, worlds, gods, beings. Its secret is: TRUTH OF TRUTH.'",
        simpleExplanation: "THE MAHAVAKYA: Like spider's web, like sparks from fire—all emerges from Self. Secret = TRUTH OF TRUTH!",
        simpleExplanationHindi: "महावाक्य: जैसे मकड़ी का जाला, जैसे अग्नि की चिंगारी—सब आत्मा से। रहस्य = सत्य का सत्य!",
        nanoBananaPrompt: "The Self as spider spinning out its web, as fire emitting sparks—the Truth of Truth.",
        wordMeanings: [
            { sanskrit: "lūṇanābhi", devanagari: "लूणनाभि", hindi: "मकड़ी", english: "spider" },
            { sanskrit: "visphuliṅga", devanagari: "विस्फुलिङ्ग", hindi: "चिंगारी", english: "sparks" },
            { sanskrit: "satyasya satya", devanagari: "सत्यस्य सत्य", hindi: "सत्य का सत्य", english: "Truth of Truth" }
        ]
    }
];

export const KAUSHITAKI_METADATA = {
    id: "kaushitaki",
    name: "Kaushitaki",
    nameSanskrit: "कौषीतकि उपनिषद्",
    alternateNames: ["Kaushitaki Brahmana Upanishad"],
    veda: "Rig Veda",
    category: "Samanya",
    shlokaCount: 26,
    adhyayaCount: 4,
    totalAdhyayas: 4,
    sequenceNumber: 25,
    meaning: "Belonging to Sage Kushitaka's School",
    keyTeachings: [
        "All souls go to the Moon first after death",
        "Moon is the Gate of Heaven—pass the test or rain back to earth",
        "The test: 'Who are you?' Answer: 'I am You' (Tvam Asmi)",
        "Path of Gods (Devayana): Agni → Vayu → Varuna → Sun → Indra → Prajapati → Brahmaloka",
        "Final answer: 'What You are, That am I'",
        "PRANA IS BRAHMAN—central teaching",
        "Indra's revelation: 'Know Me alone' = immunity from karma",
        "Prana = Prajna (Life = Consciousness)",
        "Prajna rides on all senses like a driver",
        "Prana-Prajna is Bliss, Ageless, Immortal, Lord of All",
        "During deep sleep, consciousness merges into Prana",
        "Like spider's web, like sparks from fire—all emerges from Self",
        "Secret name: 'TRUTH OF TRUTH' (Satyasya Satya)"
    ],
    famousVerses: {
        moonAsGate: { id: 3, adhyaya: 1, verse: 3 },
        tvamAsmi: { id: 5, adhyaya: 1, verse: 5 },
        devayanaPath: { id: 6, adhyaya: 1, verse: 6 },
        ultimateAnswer: { id: 8, adhyaya: 1, verse: 8 },
        pranaBrahman: { id: 9, adhyaya: 2, verse: 1 },
        knowMeAlone: { id: 16, adhyaya: 3, verse: 2 },
        pranaPrajna: { id: 17, adhyaya: 3, verse: 3 },
        lordOfAll: { id: 19, adhyaya: 3, verse: 5 },
        spiderSparks: { id: 26, adhyaya: 4, verse: 7 }
    },
    afterlifeGeography: {
        pathOfGods: ["Agni (Fire)", "Vayu (Air)", "Varuna (Water)", "Aditya (Sun)", "Indra", "Prajapati", "Brahmaloka"],
        pathOfFathers: "Rebirth through Moon → Rain → Earth"
    }
};
