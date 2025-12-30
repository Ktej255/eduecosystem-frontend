// Amritanada Upanishad Data (#21 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Yoga
// Theme: Shadanga Yoga (Six-limbed Yoga), Nectar of Sound, Tarka (Inquiry)
// Total: 38 Mantras (condensed to 25 key verses)

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface AmritanadaDataEntry {
    id: number;
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
export const AMRITANADA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह हम दोनों की रक्षा करे। हम दोनों का पालन करे। हम साथ शक्ति अर्जित करें। हमारा अध्ययन तेजस्वी हो। हम द्वेष न करें।",
    english: "OM! May He protect us both. May He nourish us. May we generate energy together. May our study be brilliant. May we not hate each other. OM Peace."
};

export const AMRITANADA_SHLOKAS: AmritanadaDataEntry[] = [
    // PART 1: SCRIPTURE AND OM
    {
        id: 1, verse: 1,
        theme: "Discard the Torch",
        sanskrit: "शास्त्राण्यधीत्य मेधावी अभ्यस्य च पुनः पुनः । परमं ब्रह्माविज्ञाय उल्कावत्तान्युत्सृजेत् ॥",
        hindi: "मेधावी पुरुष शास्त्रों का अध्ययन और अभ्यास करे। परम ब्रह्म को जानकर, उन शास्त्रों को वैसे ही त्याग दे जैसे रास्ता मिलने पर मशाल को फेंक देते हैं।",
        english: "The wise man, having studied and practiced scriptures, realizing Supreme Brahman, should discard them like discarding a torch after finding the path.",
        simpleExplanation: "TORCH ANALOGY: Scriptures light the way. Once you FIND the path, drop the torch!",
        simpleExplanationHindi: "मशाल उपमा: शास्त्र रास्ता दिखाते हैं। रास्ता मिल जाए, तो मशाल छोड़ दो!",
        nanoBananaPrompt: "Seeker discarding a torch after finding the illuminated path to Brahman.",
        wordMeanings: [
            { sanskrit: "ulkā", devanagari: "उल्का", hindi: "मशाल", english: "torch" },
            { sanskrit: "utsṛjet", devanagari: "उत्सृजेत्", hindi: "त्याग दे", english: "should discard" }
        ]
    },
    {
        id: 2, verse: 2,
        theme: "Chariot of OM",
        sanskrit: "रथमोंकारमूर्ध्वस्थं पुरुषं रथिनां स्थितम् । विष्णुलोकं स गच्छेति न किञ्चिदपि शब्दयेत् ॥",
        hindi: "ओंकार को रथ बनाए, और पुरुष (आत्मा) को रथी (सारथी) बनाए। इस प्रकार वह विष्णु-लोक को जाता है। ध्यान में कुछ भी शब्द नहीं बोलना चाहिए।",
        english: "Making OM the chariot and the Self the charioteer, one goes to Vishnu-Loka. He should not utter any sound during this journey.",
        simpleExplanation: "OM = CHARIOT: Ride OM silently to reach Vishnu's realm! No words during meditation!",
        simpleExplanationHindi: "ॐ = रथ: ॐ पर चुपचाप सवार होकर विष्णु-लोक जाओ! ध्यान में कोई शब्द नहीं!",
        nanoBananaPrompt: "OM as a cosmic chariot carrying the soul silently to Vishnu-Loka.",
        wordMeanings: [
            { sanskrit: "ratha", devanagari: "रथ", hindi: "रथ", english: "chariot" },
            { sanskrit: "oṅkāra", devanagari: "ओंकार", hindi: "ॐ", english: "OM" },
            { sanskrit: "viṣṇuloka", devanagari: "विष्णुलोक", hindi: "विष्णु का लोक", english: "world of Vishnu" }
        ]
    },

    // PART 2: SHADANGA YOGA (THE SIX LIMBS)
    {
        id: 3, verse: 6,
        theme: "The Six Limbs of Yoga",
        sanskrit: "प्रत्याहारस्तथा ध्यानं प्राणायामोऽथ धारणा । तर्कश्चैव समाधिश्च षडङ्गो योग उच्यते ॥",
        hindi: "1. प्रत्याहार, 2. ध्यान, 3. प्राणायाम, 4. धारणा, 5. तर्क (Inquiry), और 6. समाधि—इसे षडंग (छह अंगों वाला) योग कहते हैं।",
        english: "Pratyahara, Dhyana, Pranayama, Dharana, Tarka (Inquiry), and Samadhi—this is called Six-Limbed Yoga.",
        simpleExplanation: "SHADANGA YOGA: 6 limbs (NOT 8 like Patanjali!) With special limb TARKA = Inquiry!",
        simpleExplanationHindi: "षडंग योग: 6 अंग (पतंजलि के 8 नहीं!) विशेष अंग तर्क = जिज्ञासा!",
        nanoBananaPrompt: "Six limbs of yoga arranged: Pratyahara, Dhyana, Pranayama, Dharana, Tarka, Samadhi.",
        wordMeanings: [
            { sanskrit: "ṣaḍaṅga", devanagari: "षडंग", hindi: "छह अंग", english: "six-limbed" },
            { sanskrit: "tarka", devanagari: "तर्क", hindi: "विचार/जिज्ञासा", english: "inquiry/reflection" },
            { sanskrit: "samādhi", devanagari: "समाधि", hindi: "समाधि", english: "absorption" }
        ]
    },
    {
        id: 4, verse: 7,
        theme: "Fire Purifies Ore",
        sanskrit: "यथा पर्वतधातूनां दह्यन्ते धमनान्मलाः । तथेन्द्रियकृता दोषा दह्यन्ते प्राणनिग्रहात् ॥",
        hindi: "जैसे आग में धोंकने से पर्वतीय धातुओं के मल जल जाते हैं, वैसे ही प्राणायाम से इन्द्रियों के दोष जल जाते हैं।",
        english: "Just as impurities of mountain ores are burned by blowing fire, so are sense defects burned by restraining Prana.",
        simpleExplanation: "PRANAYAMA = FIRE: Burns impurities like fire purifies gold ore!",
        simpleExplanationHindi: "प्राणायाम = अग्नि: अशुद्धियों को जलाता है जैसे आग सोने को शुद्ध करती है!",
        nanoBananaPrompt: "Pranayama as fire burning impurities from the mind like refining gold ore.",
        wordMeanings: [
            { sanskrit: "dhātu", devanagari: "धातु", hindi: "धातु/अयस्क", english: "ore/metal" },
            { sanskrit: "prāṇanigrahāt", devanagari: "प्राणनिग्रहात्", hindi: "प्राण नियंत्रण से", english: "by breath control" }
        ]
    },
    {
        id: 5, verse: 8,
        theme: "What Each Limb Burns",
        sanskrit: "प्राणायामैर्दहेद्दोषान् धारणाभिश्च किल्बिषम् । प्रत्याहारेण संसर्गान् ध्यानेनानीश्वरान् गुणान् ॥",
        hindi: "प्राणायाम से दोषों को जलाएं। धारणा से पापों को। प्रत्याहार से आसक्तियों को। ध्यान से अनीश्वर गुणों को जलाएं।",
        english: "By Pranayama, burn defects. By Dharana, sins. By Pratyahara, attachments. By Dhyana, ungodly qualities.",
        simpleExplanation: "EACH LIMB BURNS SOMETHING: Pranayama=defects, Dharana=sins, Pratyahara=attachments, Dhyana=bad qualities!",
        simpleExplanationHindi: "हर अंग कुछ जलाता है: प्राणायाम=दोष, धारणा=पाप, प्रत्याहार=आसक्ति, ध्यान=बुरे गुण!",
        nanoBananaPrompt: "Four limbs of yoga each burning different impurities—defects, sins, attachments, bad qualities.",
        wordMeanings: [
            { sanskrit: "doṣa", devanagari: "दोष", hindi: "दोष", english: "defects" },
            { sanskrit: "kilbiṣa", devanagari: "किल्बिष", hindi: "पाप", english: "sins" },
            { sanskrit: "saṃsarga", devanagari: "संसर्ग", hindi: "आसक्ति", english: "attachments" }
        ]
    },
    {
        id: 6, verse: 11,
        theme: "Three Parts of Breath",
        sanskrit: "रेचकः पूरकश्चैव कुम्भकश्चेति ते त्रयः ।",
        hindi: "प्राणायाम के तीन भेद हैं: रेचक (Exhalation), पूरक (Inhalation), और कुम्भक (Retention)।",
        english: "Rechaka, Puraka, and Kumbhaka—these are the three parts of Pranayama.",
        simpleExplanation: "THREE BREATHS: Rechaka=exhale, Puraka=inhale, Kumbhaka=hold. Master all three!",
        simpleExplanationHindi: "तीन श्वास: रेचक=बाहर, पूरक=अंदर, कुम्भक=रोकना। तीनों में महारत हासिल करो!",
        nanoBananaPrompt: "Three phases of breath: exhale, inhale, retention—the complete pranayama cycle.",
        wordMeanings: [
            { sanskrit: "recaka", devanagari: "रेचक", hindi: "श्वास बाहर", english: "exhalation" },
            { sanskrit: "pūraka", devanagari: "पूरक", hindi: "श्वास अंदर", english: "inhalation" },
            { sanskrit: "kumbhaka", devanagari: "कुम्भक", hindi: "श्वास रोकना", english: "retention" }
        ]
    },
    {
        id: 7, verse: 13,
        theme: "Sushumna Liberation",
        sanskrit: "ऊर्ध्वं नाड्या विनिर्भिद्य तथा प्राणेन गच्छति । अत ऊर्ध्वं विनिर्मुक्तः प्राणायामेन मुच्यते ॥",
        hindi: "सुषुम्ना नाड़ी को भेदकर, प्राण ऊपर की ओर जाता है। प्राणायाम द्वारा ऊपर मुक्त होकर, जीव संसार से छूट जाता है।",
        english: "Piercing through the Sushumna Nadi, Prana moves upward. Released upward through Pranayama, one is liberated.",
        simpleExplanation: "PIERCE SUSHUMNA: Prana rises UP through central channel = LIBERATION!",
        simpleExplanationHindi: "सुषुम्ना भेदो: प्राण केंद्रीय नाड़ी से ऊपर उठता है = मुक्ति!",
        nanoBananaPrompt: "Prana piercing through Sushumna nadi, rising upward to liberation.",
        wordMeanings: [
            { sanskrit: "nāḍī", devanagari: "नाड़ी", hindi: "नाड़ी/चैनल", english: "energy channel" },
            { sanskrit: "ūrdhva", devanagari: "ऊर्ध्व", hindi: "ऊपर", english: "upward" }
        ]
    },

    // PART 3: DEFINITIONS OF LIMBS
    {
        id: 8, verse: 15,
        theme: "Pratyahara Defined",
        sanskrit: "इन्द्रियाणीन्द्रियार्थेभ्यो यत्प्रत्याहरणं स्फुटम् । योगिनो योगयुक्तस्य प्रत्याहारः स उच्यते ॥",
        hindi: "योग-युक्त योगी का अपनी इन्द्रियों को इन्द्रिय-विषयों से स्पष्ट रूप से वापस खींच लेना—उसे प्रत्याहार कहते हैं।",
        english: "The clear withdrawal of senses from sense-objects by the Yogi established in Yoga—that is Pratyahara.",
        simpleExplanation: "PRATYAHARA: Pull senses BACK from objects! Like turtle pulling limbs into shell!",
        simpleExplanationHindi: "प्रत्याहार: इन्द्रियों को विषयों से वापस खींचो! जैसे कछुआ अंग समेटता है!",
        nanoBananaPrompt: "Yogi withdrawing senses from objects like turtle withdrawing into shell.",
        wordMeanings: [
            { sanskrit: "pratyāhāra", devanagari: "प्रत्याहार", hindi: "इन्द्रिय-निग्रह", english: "sense-withdrawal" },
            { sanskrit: "indriyārtha", devanagari: "इन्द्रियार्थ", hindi: "इन्द्रिय विषय", english: "sense objects" }
        ]
    },
    {
        id: 9, verse: 16,
        theme: "Dharana Defined",
        sanskrit: "हृदयपुण्डरीके तु यत्सुषिरं चेतसः पदम् । तस्मिन् संधारयेद्योगी धारणा सा विधीयते ॥",
        hindi: "हृदय-कमल के भीतर जो सुषिर (Space) है, जो चेतना का स्थान है—वहाँ योगी का मन को धारण करना उसे धारणा कहते हैं।",
        english: "In the space inside the Heart Lotus, seat of Consciousness—holding the mind there is Dharana.",
        simpleExplanation: "DHARANA: Focus mind in the CAVITY of Heart Lotus! That's concentration!",
        simpleExplanationHindi: "धारणा: हृदय कमल के छिद्र में मन लगाओ! यही एकाग्रता है!",
        nanoBananaPrompt: "Mind focused in the cavity of the heart lotus during dharana.",
        wordMeanings: [
            { sanskrit: "hṛdayapuṇḍarīka", devanagari: "हृदयपुण्डरीक", hindi: "हृदय कमल", english: "heart lotus" },
            { sanskrit: "suṣira", devanagari: "सुषिर", hindi: "छिद्र/खाली जगह", english: "cavity/space" }
        ]
    },
    {
        id: 10, verse: 17,
        theme: "Tarka Defined",
        sanskrit: "आगमेनानुमानेन ध्यानाभ्यासरसेन च । त्रिधा प्रकल्पयन् प्रज्ञां लभते योगमुत्तमम् ॥",
        hindi: "आगम (शास्त्र), अनुमान (Logic) और ध्यान-अभ्यास के रस द्वारा—इन तीन प्रकारों से प्रज्ञा को कल्पित करके, वह उत्तम योग प्राप्त करता है।",
        english: "By Scriptures, by Inference, and by joy of Meditation practice—cultivating wisdom in three ways, one attains Highest Yoga. This is Tarka.",
        simpleExplanation: "TARKA = THREE-WAY INQUIRY: Scripture + Logic + Experience = Ultimate Yoga!",
        simpleExplanationHindi: "तर्क = त्रिविध जिज्ञासा: शास्त्र + तर्क + अनुभव = परम योग!",
        nanoBananaPrompt: "Three paths of inquiry—scripture, logic, experience—leading to highest yoga.",
        wordMeanings: [
            { sanskrit: "āgama", devanagari: "आगम", hindi: "शास्त्र", english: "scripture" },
            { sanskrit: "anumāna", devanagari: "अनुमान", hindi: "तर्क", english: "inference/logic" },
            { sanskrit: "prajñā", devanagari: "प्रज्ञा", hindi: "बुद्धि", english: "wisdom" }
        ]
    },
    {
        id: 11, verse: 18,
        theme: "Dhyana Defined",
        sanskrit: "मनसो यत्तु सङ्कल्पं शून्यं कृत्वा विशेषतः । यत्तु तिष्ठति तद् ध्यानं नान्यद् ध्यानं विधीयते ॥",
        hindi: "मन के संकल्पों को विशेष रूप से शून्य करके, जो शेष रहता है—वही ध्यान है। इसके अलावा कुछ और ध्यान नहीं।",
        english: "Making the mind completely void of determinations, that state which remains—That is Dhyana. Nothing else is Meditation.",
        simpleExplanation: "DHYANA = EMPTINESS: Empty ALL thoughts. What remains IS meditation! Nothing else counts!",
        simpleExplanationHindi: "ध्यान = शून्यता: सब विचार खाली करो। जो बचे वही ध्यान! और कुछ नहीं!",
        nanoBananaPrompt: "Mind becoming completely empty of thoughts—pure meditation state.",
        wordMeanings: [
            { sanskrit: "saṅkalpa", devanagari: "संकल्प", hindi: "विचार/निश्चय", english: "determination/thought" },
            { sanskrit: "śūnya", devanagari: "शून्य", hindi: "खाली", english: "void/empty" }
        ]
    },
    {
        id: 12, verse: 19,
        theme: "Samadhi Defined",
        sanskrit: "नित्यं संधारयेद् बुद्धिं समाधौ स च मन्यते । यमः समाधिरित्युक्तः सोऽयमात्मा प्रकीर्तितः ॥",
        hindi: "समाधि में बुद्धि को नित्य धारण करना चाहिए। वह मानता है 'मैं ही वह आत्मा हूँ'—इसे समाधि कहा गया है।",
        english: "One should constantly hold intellect in Samadhi. Realizing 'I am That Self'—is called Samadhi.",
        simpleExplanation: "SAMADHI: Constantly hold 'I AM THAT SELF' knowing. That's the final state!",
        simpleExplanationHindi: "समाधि: 'मैं वह आत्मा हूँ' का निरंतर ज्ञान धारण करो। यही अंतिम अवस्था!",
        nanoBananaPrompt: "The state of Samadhi—constant realization 'I am the Self.'",
        wordMeanings: [
            { sanskrit: "samādhi", devanagari: "समाधि", hindi: "समाधि", english: "absorption" },
            { sanskrit: "ātmā", devanagari: "आत्मा", hindi: "आत्मा", english: "Self" }
        ]
    },
    {
        id: 13, verse: 20,
        theme: "Mind Sees Mind",
        sanskrit: "ध्यानं मनसि कर्तव्यं मनस्संवेद्य एव च । मनसा च मनः पश्यन् परं तत्त्वं प्रकाशते ॥",
        hindi: "ध्यान मन में करना चाहिए; वह मन से ही जानने योग्य है। मन के द्वारा मन को देखने पर परम-तत्व प्रकाशित हो जाता है।",
        english: "Meditation should be in the mind; known by the mind. Seeing Mind through mind, Supreme Truth shines forth.",
        simpleExplanation: "MIND SEES MIND: Use mind to see mind. Then the SUPREME TRUTH appears!",
        simpleExplanationHindi: "मन मन को देखे: मन से मन देखो। तब परम सत्य प्रकट होता है!",
        nanoBananaPrompt: "Mind observing itself, the Supreme Truth shining forth from within.",
        wordMeanings: [
            { sanskrit: "paraṃ tattva", devanagari: "परं तत्त्व", hindi: "परम सत्य", english: "supreme truth" },
            { sanskrit: "prakāśate", devanagari: "प्रकाशते", hindi: "प्रकाशित होता है", english: "shines forth" }
        ]
    },
    {
        id: 14, verse: 21,
        theme: "So'ham Realization",
        sanskrit: "विज्ञानं निश्चयं कृत्वा भूमौ तिष्ठति निश्चलम् । सोऽहमित्येव मोक्षार्थं मत्वात्मानं न सीदति ॥",
        hindi: "विज्ञान का निश्चय करके भूमि में निश्चल होकर स्थित रहे, और मोक्ष के लिए 'सोऽहम्' मानते हुए—वह दुख में नहीं डूबता।",
        english: "Having ascertained Wisdom, remaining immovable, realizing 'He am I' for Liberation—one does not grieve.",
        simpleExplanation: "SO'HAM = 'I AM THAT': Know this, stay steady, be FREE from all grief!",
        simpleExplanationHindi: "सोऽहम् = 'वह मैं हूँ': यह जानो, स्थिर रहो, सब दुख से मुक्त हो जाओ!",
        nanoBananaPrompt: "Yogi in steady realization of So'ham—'I am That'—free from all grief.",
        wordMeanings: [
            { sanskrit: "so'ham", devanagari: "सोऽहम्", hindi: "वह मैं हूँ", english: "I am That" },
            { sanskrit: "na sīdati", devanagari: "न सीदति", hindi: "दुखी नहीं होता", english: "does not grieve" }
        ]
    },

    // PART 4: ETHICS AND PRACTICE
    {
        id: 15, verse: 23,
        theme: "Non-Attachment Ethics",
        sanskrit: "अनात्मन्यात्मविज्ञानं सोऽहंमर्त्योऽस्मि देहभृत् । मातृवत्परदारांश्च परद्रव्याणि लोष्टवत् ॥",
        hindi: "अनात्मा (शरीर) में 'मैं नश्वर देहधारी हूँ' बुद्धि त्यागो। पराई स्त्री को माता समान, और दूसरे के धन को मिट्टी के ढेले समान समझो।",
        english: "Give up identifying Self with body. Treat another's wife as Mother, another's wealth as clod of earth.",
        simpleExplanation: "ETHICS: Other's wife = MOTHER. Other's wealth = MUD. Body = NOT you!",
        simpleExplanationHindi: "नैतिकता: पराई स्त्री = माता। पराया धन = मिट्टी। शरीर = तुम नहीं!",
        nanoBananaPrompt: "Ethical vision: seeing others' wife as mother, others' wealth as worthless mud.",
        wordMeanings: [
            { sanskrit: "mātrīvat", devanagari: "मातृवत्", hindi: "माता के समान", english: "like mother" },
            { sanskrit: "loṣṭavat", devanagari: "लोष्टवत्", hindi: "मिट्टी जैसा", english: "like a clod" }
        ]
    },
    {
        id: 16, verse: 24,
        theme: "See Self in All",
        sanskrit: "आत्मवत्सर्वभूतानि यः पश्यति स पश्यति । पिबन्तमिव चत्मानं विषयान्धूपसङ्कुलान् ॥",
        hindi: "जो सभी प्राणियों को अपनी आत्मा के समान देखता है, वही वास्तव में देखता है। विषयों को भोगते हुए भी वह आत्मा को अलिप्त देखता है।",
        english: "He who sees all beings as his own Self, he truly sees. Even consuming sense-objects, he sees the Self untouched.",
        simpleExplanation: "TRUE VISION: See all as your Self! Even while enjoying objects, Self stays PURE!",
        simpleExplanationHindi: "सच्ची दृष्टि: सबको अपनी आत्मा समझो! भोगते हुए भी आत्मा शुद्ध रहती है!",
        nanoBananaPrompt: "Yogi seeing all beings as Self, remaining untouched while in the world.",
        wordMeanings: [
            { sanskrit: "ātmavat", devanagari: "आत्मवत्", hindi: "आत्मा के समान", english: "like one's own Self" },
            { sanskrit: "sarvabhūtāni", devanagari: "सर्वभूतानि", hindi: "सब प्राणी", english: "all beings" }
        ]
    },

    // PART 5: CONCLUSION
    {
        id: 17, verse: 25,
        theme: "Butter in Milk",
        sanskrit: "सर्वव्यापिनमात्मानं क्षीरे सर्पिरिवार्पितम् । आत्मविद्यातपोमूलं तद्ब्रह्मोपनिषत्परम् ॥",
        hindi: "वह सर्वव्यापी आत्मा वैसे ही छिपा है जैसे दूध में घी। आत्मविद्या और तप जिसका मूल है—वह परम उपनिषद्-ब्रह्म है।",
        english: "The all-pervading Self is hidden like butter in milk. Rooted in Self-knowledge and Penance—That is Supreme Upanishadic Brahman.",
        simpleExplanation: "BUTTER IN MILK: Self hidden in all. Use knowledge + discipline to churn it out!",
        simpleExplanationHindi: "दूध में घी: आत्मा सबमें छिपी। ज्ञान + तप से इसे निकालो!",
        nanoBananaPrompt: "Self hidden in all beings like butter in milk, extracted through knowledge and discipline.",
        wordMeanings: [
            { sanskrit: "sarpis", devanagari: "सर्पिस्", hindi: "घी", english: "butter/ghee" },
            { sanskrit: "kṣīra", devanagari: "क्षीर", hindi: "दूध", english: "milk" }
        ]
    },
    {
        id: 18, verse: 26,
        theme: "Pot-Space Dissolution",
        sanskrit: "एवमेवात्मनात्मानं संनियच्छेद् विचक्षणः । एकीभूत्वा तदाकाशे घटवत्प्रविलीयते ॥",
        hindi: "इसी प्रकार बुद्धिमान पुरुष आत्मा द्वारा आत्मा को नियंत्रित करे। एक होकर, वह उस चिदाकाश में विलीन हो जाता है जैसे घड़े का आकाश महाकाश में।",
        english: "Thus the wise should restrain self by Self. Becoming One, he dissolves into that Ether like pot-space into total space.",
        simpleExplanation: "SPACE MERGES: Your space (soul) merges into TOTAL space (Brahman) when pot (body) breaks!",
        simpleExplanationHindi: "आकाश विलीन: तुम्हारा आकाश (आत्मा) कुल आकाश (ब्रह्म) में विलीन होता है जब घड़ा (शरीर) टूटता है!",
        nanoBananaPrompt: "Pot breaking, pot-space merging into infinite space—soul merging into Brahman.",
        wordMeanings: [
            { sanskrit: "ekībhūtva", devanagari: "एकीभूत्व", hindi: "एक होकर", english: "becoming one" },
            { sanskrit: "pravilīyate", devanagari: "प्रविलीयते", hindi: "विलीन होता है", english: "dissolves" }
        ]
    },
    {
        id: 19, verse: 34,
        theme: "Lamp in the Heart",
        sanskrit: "हृत्पुण्डरीकसुषिरं दीपवत्स्थं प्रतिष्ठितम् । तत्सदा भावयेदात्मा बन्धनात्प्रमुच्यते ॥",
        hindi: "हृदय-कमल के छिद्र में, जो दीपक की लौ की तरह स्थित है—उस आत्मा का सदा चिंतन करे। ऐसा करने से वह बंधनों से मुक्त हो जाता है।",
        english: "In the cavity of Heart Lotus, It stands like a lamp. Always contemplate That Self; one is freed from bondage.",
        simpleExplanation: "LAMP IN HEART: A steady flame burns in your heart. Focus on it = FREEDOM!",
        simpleExplanationHindi: "हृदय में दीपक: तुम्हारे हृदय में स्थिर लौ जलती है। उस पर ध्यान करो = मुक्ति!",
        nanoBananaPrompt: "A steady lamp flame burning in the heart lotus cavity—focus brings liberation.",
        wordMeanings: [
            { sanskrit: "dīpavat", devanagari: "दीपवत्", hindi: "दीपक की तरह", english: "like a lamp" },
            { sanskrit: "pramucyate", devanagari: "प्रमुच्यते", hindi: "मुक्त होता है", english: "is freed" }
        ]
    },
    {
        id: 20, verse: 36,
        theme: "Kaivalya Attained",
        sanskrit: "य एवं वेद स कैवल्यपदं अश्नुते स कैवल्यपदं अश्नुते ॥",
        hindi: "जो ऐसा जानता है, वह कैवल्य-पद (मोक्ष) को प्राप्त करता है। वह कैवल्य-पद को प्राप्त करता है।",
        english: "He who knows this attains the State of Kaivalya. He attains the State of Kaivalya.",
        simpleExplanation: "KAIVALYA = ULTIMATE LIBERATION! Know this truth and attain absolute freedom!",
        simpleExplanationHindi: "कैवल्य = परम मुक्ति! इस सत्य को जानो और पूर्ण स्वतंत्रता पाओ!",
        nanoBananaPrompt: "Soul attaining Kaivalya—the state of absolute liberation and oneness.",
        wordMeanings: [
            { sanskrit: "kaivalya", devanagari: "कैवल्य", hindi: "पूर्ण मोक्ष", english: "absolute liberation" },
            { sanskrit: "aśnute", devanagari: "अश्नुते", hindi: "प्राप्त करता है", english: "attains" }
        ]
    }
];

// Metadata
export const AMRITANADA_METADATA = {
    id: "amritanada",
    name: "Amritanada",
    nameSanskrit: "अमृतनादोपनिषद्",
    meaning: "Upanishad of the Nectar of Sound",
    veda: "Krishna Yajur Veda",
    category: "Yoga",
    shlokaCount: 20,
    fullVerseCount: 38,
    sequenceNumber: 21,
    parts: {
        1: { name: "Scripture and OM", verses: "1-5", theme: "Torch analogy, Chariot of OM" },
        2: { name: "Shadanga Yoga", verses: "6-14", theme: "Six limbs including Tarka" },
        3: { name: "Limb Definitions", verses: "15-21", theme: "Pratyahara, Dharana, Tarka, Dhyana, Samadhi" },
        4: { name: "Ethics", verses: "22-24", theme: "See all as Self, Non-attachment" },
        5: { name: "Conclusion", verses: "25-38", theme: "Butter in milk, Lamp in heart, Kaivalya" }
    },
    shadangaYoga: {
        definition: "Six-limbed Yoga (different from Patanjali's Ashtanga)",
        limbs: [
            { name: "Pratyahara", meaning: "Withdrawal of senses from objects" },
            { name: "Dhyana", meaning: "Making mind void of thoughts" },
            { name: "Pranayama", meaning: "Breath control: Rechaka, Puraka, Kumbhaka" },
            { name: "Dharana", meaning: "Concentration in Heart Lotus cavity" },
            { name: "Tarka", meaning: "Three-fold inquiry: Scripture + Logic + Experience" },
            { name: "Samadhi", meaning: "Constant realization 'I am That Self'" }
        ]
    },
    keyTeachings: [
        "Discard scriptures like torch after finding path",
        "OM is the chariot to Vishnu-Loka",
        "Shadanga Yoga: 6 limbs (not 8)",
        "Tarka = Scripture + Logic + Experience",
        "Dhyana = Mind completely empty of thoughts",
        "See all beings as your own Self",
        "Other's wife = Mother, Other's wealth = Mud",
        "Self hidden like butter in milk",
        "Lamp in heart cavity = Liberation"
    ],
    famousVerses: {
        torchAnalogy: { id: 1, verse: 1 },
        shadangaYoga: { id: 3, verse: 6 },
        tarkaDefinition: { id: 10, verse: 17 },
        dhyanaDefinition: { id: 11, verse: 18 },
        lampInHeart: { id: 19, verse: 34 },
        kaivalya: { id: 20, verse: 36 }
    }
};

export const getAmritanadaVerse = (verse: number): AmritanadaDataEntry | undefined => {
    return AMRITANADA_SHLOKAS.find(s => s.verse === verse);
};
