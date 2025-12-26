// Kaivalya Upanishad Data (#12 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Shaiva
// Theme: Path to Kaivalya (Aloneness/Liberation) through Tyaga and Shiva Meditation
// Total Mantras: 26

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface KaivalyaDataEntry {
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
export const KAIVALYA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! वह (परमात्मा) हम दोनों (गुरु और शिष्य) की रक्षा करे। वह हम दोनों का पालन करे। हम साथ मिलकर (ज्ञान प्राप्ति के लिए) शक्ति अर्जित करें। हमारा अध्ययन तेजस्वी हो। हम परस्पर द्वेष न करें। ॐ शांति, शांति, शांति।",
    english: "OM! May He protect us both. May He nourish us both. May we generate spiritual energy together. May our study be brilliant and effective. May there be no dispute between us. OM Peace, Peace, Peace."
};

export const KAIVALYA_SHLOKAS: KaivalyaDataEntry[] = [
    {
        id: 1,
        verse: 1,
        theme: "The Inquiry - Ashvalayana's Request",
        sanskrit: "ॐ। अथाश्वलायनो भगवन्तं परमेष्ठिनमुपसमेत्योवाच । अधीहि भगवन् ब्रह्मविद्यां वरिष्ठां सदा सद्भिः सेव्यमानां निगूढाम् । ययाऽचिरात्सर्वपापं व्यपोह्य परात्परं पुरुषं याति विद्वान् ॥ १ ॥",
        hindi: "ॐ। आश्वलायन ने भगवान परमेष्ठी (ब्रह्मा जी) के पास जाकर निवेदन किया: 'हे भगवन्! मुझे उस वरिष्ठ ब्रह्मविद्या का उपदेश दें, जो सदा सत्पुरुषों द्वारा सेवित और निगूढ़ है। जिसके द्वारा विद्वान शीघ्र ही समस्त पापों से मुक्त होकर परात्पर पुरुष को प्राप्त करता है।'",
        english: "OM. Sage Ashvalayana approached Lord Paramesthi (Brahma) and said: 'O Lord! Teach me that Supreme Knowledge of Brahman, always cultivated by the wise and hidden. By knowing which, the wise man quickly casts off all impurities and attains the Person who is higher than the high.'",
        simpleExplanation: "THE SUPREME SECRET: Even great sages approach higher masters for the ultimate hidden knowledge that leads to Liberation!",
        simpleExplanationHindi: "परम रहस्य: महान ऋषि भी मोक्ष की ओर ले जाने वाले परम गूढ़ ज्ञान के लिए उच्च गुरुओं के पास जाते हैं!",
        nanoBananaPrompt: "A sage approaching the Creator Brahma, humbly requesting the supreme secret knowledge.",
        wordMeanings: [
            { sanskrit: "nigūḍhām", devanagari: "निगूढाम्", hindi: "अत्यंत गुप्त", english: "most secret/hidden" },
            { sanskrit: "parātparam", devanagari: "परात्परम्", hindi: "श्रेष्ठ से श्रेष्ठ", english: "higher than the high" }
        ]
    },
    {
        id: 2,
        verse: 2,
        theme: "The Three Tools",
        sanskrit: "तस्मै स होवाच पितामहश्च श्रद्धाभक्तिध्यानयोगादवैहि ॥ २ ॥",
        hindi: "पितामह (ब्रह्मा) ने उनसे कहा: '(इस ब्रह्मविद्या को) तुम श्रद्धा, भक्ति और ध्यान-योग के द्वारा जानो।'",
        english: "To him, the Grandfather (Brahma) replied: 'Know this by means of Faith (Shraddha), Devotion (Bhakti), and Meditation (Dhyana-Yoga).'",
        simpleExplanation: "THE 3 KEYS: Faith opens the door, Devotion maintains it, Meditation enters the sanctum!",
        simpleExplanationHindi: "3 कुंजियां: श्रद्धा द्वार खोलती है, भक्ति बनाए रखती है, ध्यान गर्भगृह में प्रवेश कराता है!",
        nanoBananaPrompt: "Three keys: Faith (heart), Devotion (prayer), Meditation (stillness) opening a cosmic door.",
        wordMeanings: [
            { sanskrit: "śraddhā", devanagari: "श्रद्धा", hindi: "आस्था", english: "faith" },
            { sanskrit: "bhakti", devanagari: "भक्ति", hindi: "भक्ति", english: "devotion" },
            { sanskrit: "dhyānayoga", devanagari: "ध्यानयोग", hindi: "ध्यान योग", english: "meditation yoga" }
        ]
    },
    {
        id: 3,
        verse: 3,
        theme: "The Means - Renunciation",
        sanskrit: "न कर्मणा न प्रजया धनेन त्यागेनैके अमृतत्वमानशुः । परेण नाकं निहितं गुहायां विभ्राजते यद्यतयो विशन्ति ॥ ३ ॥",
        hindi: "न कर्म से, न संतान से, न धन से; केवल 'त्याग' से ही कुछ विरले लोगों ने अमरता प्राप्त की है। वह ब्रह्म जो स्वर्ग से भी परे है, हृदय गुफा में स्थित होकर चमक रहा है, जिसमें यति प्रवेश करते हैं।",
        english: "Not by work, nor by progeny, nor by wealth; but by Renunciation alone have some attained Immortality. That Truth which shines beyond the heavens, seated in the cave of the heart, is entered by the self-controlled ascetics.",
        simpleExplanation: "THE GREAT REJECTION: Rituals give temporary heaven, children give legacy, money gives comfort—but ONLY letting go = IMMORTALITY!",
        simpleExplanationHindi: "महान त्याग: कर्मकांड अस्थायी स्वर्ग देते हैं, संतान विरासत, धन आराम—पर केवल छोड़ना = अमरता!",
        nanoBananaPrompt: "Three things being released: ritual fire, children, gold coins. A figure rises free toward light.",
        wordMeanings: [
            { sanskrit: "tyāgena", devanagari: "त्यागेन", hindi: "त्याग से", english: "by renunciation" },
            { sanskrit: "amṛtatvam", devanagari: "अमृतत्वम्", hindi: "अमरता", english: "immortality" },
            { sanskrit: "guhāyām", devanagari: "गुहायाम्", hindi: "गुफा में", english: "in the cave (of heart)" }
        ]
    },
    {
        id: 4,
        verse: 4,
        theme: "The Purified Seekers",
        sanskrit: "वेदान्तविज्ञानसुनिश्चितार्थाः संन्यासयोगाद्यतयः शुद्धसत्त्वाः । ते ब्रह्मलोकेषु परान्तकाले परामृताः परिमुच्यन्ति सर्वे ॥ ४ ॥",
        hindi: "जिन्होंने वेदांत के विज्ञान से अर्थ को सुनिश्चित कर लिया है, और जो संन्यास-योग द्वारा शुद्ध-चित्त हो गए हैं—वे सभी यति अंत समय में ब्रह्मलोक में परम अमर होकर मुक्त हो जाते हैं।",
        english: "Those who have ascertained the meaning of the Vedanta knowledge, and who have purified their natures through the Yoga of Renunciation—they all, at the final departure, become immortal in the World of Brahman and are totally liberated.",
        simpleExplanation: "VEDANTA + SANNYASA = LIBERATION: Clear understanding of Vedanta + Renunciation practice = Total liberation at death!",
        simpleExplanationHindi: "वेदांत + संन्यास = मुक्ति: वेदांत की स्पष्ट समझ + त्याग अभ्यास = मृत्यु पर पूर्ण मुक्ति!",
        nanoBananaPrompt: "Purified seekers with shining auras ascending to Brahmaloka at the moment of their final departure.",
        wordMeanings: [
            { sanskrit: "vedāntavijñāna", devanagari: "वेदान्तविज्ञान", hindi: "वेदांत का ज्ञान", english: "knowledge of Vedanta" },
            { sanskrit: "śuddhasattvāḥ", devanagari: "शुद्धसत्त्वाः", hindi: "शुद्ध अंतःकरण वाले", english: "purified minds" }
        ]
    },
    {
        id: 5,
        verse: 5,
        theme: "The Method of Meditation",
        sanskrit: "विविक्तदेशे च सुखासनस्थः शुचिः समग्रीवशिरःशरीरः । अन्त्याश्रमस्थः सकलेन्द्रियाणि निरुध्य भक्त्या स्वगुरुं प्रणम्य ॥ ५ ॥",
        hindi: "एक एकांत स्थान में, सुखपूर्वक आसन पर बैठकर, पवित्र होकर, गर्दन, सिर और शरीर को सीधा रखकर; संन्यास आश्रम की मनोवृत्ति में स्थित होकर, सभी इन्द्रियों को रोककर, और भक्तिपूर्वक अपने गुरु को प्रणाम करके (ध्यान करें)।",
        english: "In a secluded place, sitting in a comfortable posture, pure, holding the neck, head, and body in a straight line; living in the mental attitude of a Renunciate, controlling all the senses, and bowing with devotion to one's Guru.",
        simpleExplanation: "MEDITATION SETUP: Secluded place + comfortable posture + straight spine + controlled senses + bow to Guru = Ready for deep meditation!",
        simpleExplanationHindi: "ध्यान सेटअप: एकांत + आरामदायक आसन + सीधी रीढ़ + नियंत्रित इन्द्रियां + गुरु प्रणाम = गहन ध्यान के लिए तैयार!",
        nanoBananaPrompt: "A meditator in perfect posture in a secluded forest, spine straight, bowing to their guru before meditation.",
        wordMeanings: [
            { sanskrit: "viviktadeśe", devanagari: "विविक्तदेशे", hindi: "एकांत स्थान में", english: "in a secluded place" },
            { sanskrit: "sukhāsana", devanagari: "सुखासन", hindi: "आरामदायक आसन", english: "comfortable posture" }
        ]
    },
    {
        id: 6,
        verse: 6,
        theme: "Heart Lotus Meditation",
        sanskrit: "हृत्पुण्डरीकं विरजं विशुद्धं विचिन्त्य मध्ये विशदं विशोकम् । अचिन्त्यमव्यक्तमनन्तरूपं शिवं प्रशान्तममृतं ब्रह्मयोनिम् ॥ ६ ॥",
        hindi: "(साधक) हृदय-कमल का चिंतन करे जो रजरहित और विशुद्ध है। उसके मध्य में जो विशद और शोक-रहित है; जो अचिन्त्य, अव्यक्त, अनन्तरूप, शिव, प्रशांत, अमर और ब्रह्म का कारण है।",
        english: "Meditate on the Heart-Lotus which is dustless (passionless) and pure. In its center, contemplate That which is clear, sorrowless, unthinkable, unmanifest, of infinite forms, Auspicious (Shiva), peaceful, immortal, and the source of Brahma.",
        simpleExplanation: "HEART LOTUS MEDITATION: Inside your heart is a pure lotus. At its center = Shiva = Source of ALL creation!",
        simpleExplanationHindi: "हृदय कमल ध्यान: तुम्हारे हृदय में शुद्ध कमल है। उसके केंद्र में = शिव = समस्त सृष्टि का स्रोत!",
        nanoBananaPrompt: "A glowing lotus in the heart center, with Shiva (peaceful, infinite) radiating from its core.",
        wordMeanings: [
            { sanskrit: "hṛtpuṇḍarīkam", devanagari: "हृत्पुण्डरीकम्", hindi: "हृदय कमल", english: "heart-lotus" },
            { sanskrit: "brahmayonim", devanagari: "ब्रह्मयोनिम्", hindi: "ब्रह्म का स्रोत", english: "source of Brahma" }
        ]
    },
    {
        id: 7,
        verse: 7,
        theme: "Vision of Shiva",
        sanskrit: "तदादिमध्यान्तविहीनमेकं विभुं चिदानन्दमरूपमद्भुतम् । उमासहायं परमेश्वरं प्रभुं त्रिलोचनं नीलकण्ठं प्रशान्तम् । ध्यात्वा मुनिर्गच्छति भूतयोनिं समस्तसाक्षिं तमसः परस्तात् ॥ ७ ॥",
        hindi: "जो आदि, मध्य और अंत से रहित है; जो एक, व्यापक, चिदानंद, अरूप और अद्भुत है। जो उमा के सहित है, परमेश्वर, प्रभु, त्रिलोचन, नीलकंठ और प्रशांत है। उसका ध्यान करके मुनि उस भूतयोनि को प्राप्त करता है, जो सबका साक्षी है और अंधकार से परे है।",
        english: "He who is without beginning, middle, or end; the One, All-pervading, of Consciousness and Bliss, Formless, Wonderful. The Lord with Uma, Supreme God, Three-eyed, Blue-throated, Peaceful. Meditating on Him, the Sage reaches the Source of all beings, the Witness of all, beyond darkness.",
        simpleExplanation: "SHIVA'S FORM: With Shakti (Uma), Three Eyes (Past/Present/Future), Blue Throat (swallowed world's poison)—meditate on Him to reach the Source!",
        simpleExplanationHindi: "शिव का स्वरूप: शक्ति (उमा) के साथ, तीन नेत्र, नीला कंठ—उनका ध्यान करके स्रोत तक पहुँचो!",
        nanoBananaPrompt: "Shiva with Uma, three eyes glowing, blue throat, radiating as the source of all creation.",
        wordMeanings: [
            { sanskrit: "umāsahāyam", devanagari: "उमासहायम्", hindi: "उमा के साथ", english: "with Uma as consort" },
            { sanskrit: "nīlakaṇṭham", devanagari: "नीलकण्ठम्", hindi: "नीले गले वाला", english: "blue-throated" },
            { sanskrit: "trilocanam", devanagari: "त्रिलोचनम्", hindi: "तीन नेत्रों वाला", english: "three-eyed" }
        ]
    },
    {
        id: 8,
        verse: 8,
        theme: "Universal Identity - All Gods are One",
        sanskrit: "स ब्रह्मा स शिवः स इन्द्रः सोऽक्षरः परमः स्वराट् । स एव विष्णुः स प्राणः स कालोऽग्निः स चन्द्रमाः ॥ ८ ॥",
        hindi: "वही ब्रह्मा है, वही शिव है, वही इन्द्र है, वही अक्षर, परम और स्वराट् है। वही विष्णु है, वही प्राण है, वही काल है, वही अग्नि है और वही चन्द्रमा है।",
        english: "He is Brahma, He is Shiva, He is Indra. He is the Imperishable, the Supreme, the Self-Luminous. He alone is Vishnu, He is Prana, He is Time, He is Fire, He is the Moon.",
        simpleExplanation: "END OF SECTARIANISM: Brahma, Vishnu, Shiva, Indra, Sun, Moon—ALL are ONE God in different costumes!",
        simpleExplanationHindi: "सम्प्रदायवाद का अंत: ब्रह्मा, विष्णु, शिव, इंद्र, सूर्य, चंद्र—सब एक ईश्वर अलग-अलग वेश में!",
        nanoBananaPrompt: "One light splitting into Brahma, Vishnu, Shiva, Indra, Sun, Moon—all emanating from one source.",
        wordMeanings: [
            { sanskrit: "svarāṭ", devanagari: "स्वराट्", hindi: "स्वयं प्रकाशित", english: "self-luminous" },
            { sanskrit: "akṣaraḥ", devanagari: "अक्षरः", hindi: "अविनाशी", english: "imperishable" }
        ]
    },
    {
        id: 9,
        verse: 9,
        theme: "The Only Path",
        sanskrit: "स एव सर्वं यद्भूतं यच्च भव्यं सनातनम् । ज्ञात्वा तं मृत्युमत्येति नान्यः पन्था विमुक्तये ॥ ९ ॥",
        hindi: "जो कुछ भूत (बीता हुआ) है और जो भव्य (भविष्य) है, वह सब सनातन पुरुष ही है। उसे जानकर मृत्यु को पार कर जाता है। मुक्ति के लिए इसके अलावा कोई दूसरा मार्ग नहीं है।",
        english: "He alone is all that was, and all that will be, the Eternal. Knowing Him, one crosses over Death. There is no other path to Liberation.",
        simpleExplanation: "NO OTHER PATH: Past, Present, Future—all is HIM. Know Him = Cross Death. NO other way exists!",
        simpleExplanationHindi: "कोई और रास्ता नहीं: भूत, वर्तमान, भविष्य—सब वही है। उसे जानो = मृत्यु पार करो!",
        nanoBananaPrompt: "A single path of light crossing over the ocean of death, with no alternative routes visible.",
        wordMeanings: [
            { sanskrit: "sanātanam", devanagari: "सनातनम्", hindi: "शाश्वत", english: "eternal" },
            { sanskrit: "vimuktaye", devanagari: "विमुक्तये", hindi: "मुक्ति के लिए", english: "for liberation" }
        ]
    },
    {
        id: 10,
        verse: 10,
        theme: "Seeing Self in All",
        sanskrit: "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि । सम्पश्यन् ब्रह्म परमं जायते नान्यहेतुना ॥ १० ॥",
        hindi: "सभी प्राणियों में अपनी आत्मा को देखकर, और अपनी आत्मा में सभी प्राणियों को देखकर—ऐसा देखने वाला उस परम ब्रह्म को प्राप्त होता है; किसी अन्य उपाय से नहीं।",
        english: "Seeing the Atman in all beings, and all beings in the Atman—one attains the Supreme Brahman; not by any other means.",
        simpleExplanation: "THE VISION: See yourself in everyone, everyone in yourself = You BECOME Brahman. No other way!",
        simpleExplanationHindi: "दृष्टि: सबमें खुद को देखो, खुद में सबको देखो = तुम ब्रह्म बन जाओगे!",
        nanoBananaPrompt: "A meditator seeing their own reflection in all beings around them, and all beings within themselves.",
        wordMeanings: [
            { sanskrit: "sarvabhūtastham", devanagari: "सर्वभूतस्थम्", hindi: "सभी प्राणियों में स्थित", english: "dwelling in all beings" },
            { sanskrit: "sampaśyan", devanagari: "सम्पश्यन्", hindi: "देखते हुए", english: "seeing" }
        ]
    },
    {
        id: 11,
        verse: 11,
        theme: "Fire Stick Analogy",
        sanskrit: "आत्मानमरणिं कृत्वा प्रणवं चोत्तरारणिम् । ज्ञाननिर्मथनाभ्यासात्पाशं दहति पण्डितः ॥ ११ ॥",
        hindi: "अपनी आत्मा को नीचे की अरणि बनाकर, और प्रणव (ओंकार) को ऊपर की अरणि बनाकर; ज्ञान रूपी मंथन के निरंतर अभ्यास से, पंडित अपने बंधन को जला डालता है।",
        english: "Making the Self the lower fire-stick and the syllable OM the upper fire-stick; by the constant friction of Knowledge, the wise man burns away the bonds.",
        simpleExplanation: "FRICTION = FIRE: Rub Self (lower) + OM (upper) together with Knowledge practice = BURN ALL CHAINS!",
        simpleExplanationHindi: "घर्षण = अग्नि: आत्मा (नीचे) + ॐ (ऊपर) को ज्ञान अभ्यास से रगड़ो = सारी जंजीरें जलाओ!",
        nanoBananaPrompt: "Two fire sticks (Self and OM) being rubbed together, creating the fire of knowledge burning chains.",
        wordMeanings: [
            { sanskrit: "araṇi", devanagari: "अरणि", hindi: "अग्नि उत्पन्न करने की लकड़ी", english: "fire-stick" },
            { sanskrit: "pāśam dahati", devanagari: "पाशं दहति", hindi: "बंधन जलाता है", english: "burns bondage" }
        ]
    },
    {
        id: 12,
        verse: 12,
        theme: "Waking State - Maya's Delusion",
        sanskrit: "स एव मायापरिमोहितात्मा शरीरमास्थाय करोति सर्वम् । स्त्रियन्नपानादिविचित्रभोगैः स एव जाग्रत्परितृप्तिमेति ॥ १२ ॥",
        hindi: "वह आत्मा माया से मोहित होकर शरीर धारण करता है और सब कर्म करता है। वही जाग्रत अवस्था में स्त्री, अन्न, पान आदि विचित्र भोगों के द्वारा तृप्ति को प्राप्त होता है।",
        english: "That Self, deluded by Maya, identifies with the body and performs all actions. In the waking state, he attains satisfaction through various enjoyments like women, food, and drink.",
        simpleExplanation: "WAKING STATE TRAP: Soul forgets itself, takes on a body, gets lost in pleasures—thinking THIS is reality!",
        simpleExplanationHindi: "जाग्रत अवस्था का जाल: आत्मा खुद को भूलती है, शरीर धारण करती है, भोगों में खोती है!",
        nanoBananaPrompt: "A soul wrapped in maya taking a body form, enjoying worldly pleasures thinking it's reality.",
        wordMeanings: [
            { sanskrit: "māyāparimohita", devanagari: "मायापरिमोहित", hindi: "माया से मोहित", english: "deluded by maya" },
            { sanskrit: "jāgrat", devanagari: "जाग्रत्", hindi: "जागृत अवस्था", english: "waking state" }
        ]
    },
    {
        id: 13,
        verse: 13,
        theme: "Dream and Deep Sleep States",
        sanskrit: "स्वप्ने स जीवः सुखदुःखभोक्ता स्वमायया कल्पितजीवलोके । सुषुप्तिकाले सकले विलीने तमोऽभिभूतः सुखरूपमेति ॥ १३ ॥",
        hindi: "स्वप्न अवस्था में, वह जीव अपनी ही माया द्वारा रचे गए लोक में सुख और दुख का भोक्ता होता है। सुषुप्ति के समय, जब सब कुछ विलीन हो जाता है और वह तमस से घिर जाता है, तब वह सुख रूप को प्राप्त होता है।",
        english: "In the dream state, that Jiva experiences happiness and misery in a world created by his own Maya. In deep sleep, when everything is dissolved and overpowered by Tamas, he experiences (ignorant) Bliss.",
        simpleExplanation: "THREE STATES: Waking = enjoying objects. Dream = enjoying mental creations. Deep Sleep = bliss in darkness!",
        simpleExplanationHindi: "तीन अवस्थाएं: जाग्रत = वस्तुओं का भोग। स्वप्न = मानसिक रचनाओं का भोग। सुषुप्ति = अंधकार में आनंद!",
        nanoBananaPrompt: "Three states shown: waking (world), dreaming (mind-created world), deep sleep (darkness with hidden bliss).",
        wordMeanings: [
            { sanskrit: "svapna", devanagari: "स्वप्न", hindi: "सपना", english: "dream" },
            { sanskrit: "suṣupti", devanagari: "सुषुप्ति", hindi: "गहरी नींद", english: "deep sleep" }
        ]
    },
    {
        id: 14,
        verse: 14,
        theme: "The Three Cities",
        sanskrit: "पुनश्च जन्मान्तरकर्मयोगात् स एव जीवः स्वपिति प्रबुद्धः । पुरत्रये क्रीडति यश्च जीवस्ततस्तु जातं सकलं विचित्रम् । आधारमानन्दमखण्डबोधं यस्मिँल्लयं याति पुरत्रयं च ॥ १४ ॥",
        hindi: "पूर्व जन्मों के कर्मों के योग से वही जीव सोता और जागता है। जो जीव तीन पुरों (जाग्रत, स्वप्न, सुषुप्ति) में खेलता है—उसी से यह विचित्र जगत उत्पन्न हुआ है। वह आधार है, आनंद है और अखंड बोध है, जिसमें ये तीनों पुर लय हो जाते हैं।",
        english: "Due to past karma, that same Jiva wakes and sleeps. The Jiva who sports in the three cities (states)—from Him has sprung all this diverse creation. He is the Substratum, the Bliss, the Indivisible Consciousness, in whom the three cities dissolve.",
        simpleExplanation: "THE PLAYER: Soul plays in 3 cities (wake/dream/sleep) due to karma. But all 3 dissolve into ONE Consciousness!",
        simpleExplanationHindi: "खिलाड़ी: आत्मा कर्म के कारण 3 पुरों में खेलती है। पर तीनों एक चेतना में विलीन होते हैं!",
        nanoBananaPrompt: "A soul playing in three cities (waking, dreaming, sleeping), all dissolving into one infinite consciousness.",
        wordMeanings: [
            { sanskrit: "puratraye", devanagari: "पुरत्रये", hindi: "तीन पुरों में", english: "in three cities" },
            { sanskrit: "akhaṇḍabodham", devanagari: "अखण्डबोधम्", hindi: "अखंड चेतना", english: "indivisible consciousness" }
        ]
    },
    {
        id: 15,
        verse: 15,
        theme: "Source of Creation",
        sanskrit: "एतस्माज्जायते प्राणो मनः सर्वेन्द्रियाणि च । खं वायुर्ज्योतिरापः पृथिवी विश्वस्य धारिणी ॥ १५ ॥",
        hindi: "उसी से प्राण, मन और सभी इन्द्रियां उत्पन्न होती हैं। उसी से आकाश, वायु, तेज, जल और विश्व को धारण करने वाली पृथ्वी उत्पन्न होती है।",
        english: "From Him are born the Prana, the Mind, and all the senses; Space, Air, Fire, Water, and the Earth that supports all.",
        simpleExplanation: "CREATION CASCADE: From ONE Source → Prana, Mind, Senses, then Space → Air → Fire → Water → Earth!",
        simpleExplanationHindi: "सृष्टि क्रम: एक स्रोत से → प्राण, मन, इन्द्रियां, फिर आकाश → वायु → अग्नि → जल → पृथ्वी!",
        nanoBananaPrompt: "From one light source emanating: prana, mind, senses, then cascading into space, air, fire, water, earth.",
        wordMeanings: [
            { sanskrit: "prāṇa", devanagari: "प्राण", hindi: "प्राण शक्ति", english: "life force" },
            { sanskrit: "pañcabhūta", devanagari: "पञ्चभूत", hindi: "पाँच तत्व", english: "five elements" }
        ]
    },
    {
        id: 16,
        verse: 16,
        theme: "Tat Tvam Asi - That Thou Art",
        sanskrit: "यत्परं ब्रह्म सर्वात्मा विश्वस्यायतनं महत् । सूक्ष्मात्सूक्ष्मतरं नित्यं तत्त्वमेव त्वमेव तत् ॥ १६ ॥",
        hindi: "जो परब्रह्म है, जो सबकी आत्मा है, जो विश्व का महान आयतन है; जो सूक्ष्म से भी सूक्ष्मतर और नित्य है—वह तुम ही हो, तुम ही वह हो।",
        english: "That which is the Supreme Brahman, the Self of all, the great Abode of the universe; subtler than the subtle, and Eternal—That Thou Art, Thou Art That.",
        simpleExplanation: "THE MAHAVAKYA: The infinite Brahman that holds the universe, subtler than atoms, eternal—YOU ARE THAT!",
        simpleExplanationHindi: "महावाक्य: वह अनंत ब्रह्म जो विश्व को धारण करता है, परमाणुओं से सूक्ष्म, शाश्वत—तुम वही हो!",
        nanoBananaPrompt: "An individual soul realizing it is identical with the infinite Brahman holding the entire universe.",
        wordMeanings: [
            { sanskrit: "tat tvam eva", devanagari: "तत्त्वमेव", hindi: "वह तुम ही हो", english: "that thou art" },
            { sanskrit: "sūkṣmāt sūkṣmataram", devanagari: "सूक्ष्मात्सूक्ष्मतरम्", hindi: "सूक्ष्म से सूक्ष्मतर", english: "subtler than subtle" }
        ]
    },
    {
        id: 17,
        verse: 17,
        theme: "The Illuminator",
        sanskrit: "जाग्रत्स्वप्नसुषुप्त्यादिप्रपञ्चं यत्प्रकाशते । तद्ब्रह्माहमिति ज्ञात्वा सर्वबन्धैः प्रमुच्यते ॥ १७ ॥",
        hindi: "जो जाग्रत, स्वप्न, सुषुप्ति आदि प्रपंच को प्रकाशित करता है—'वह ब्रह्म मैं हूँ', ऐसा जानकर मनुष्य सभी बंधनों से मुक्त हो जाता है।",
        english: "That which illumines the universe of waking, dreaming, sleeping, etc.—knowing 'I am That Brahman,' one is freed from all fetters.",
        simpleExplanation: "THE LIGHT BEHIND ALL: What illuminates waking, dream, and sleep? Knowing 'I AM THAT' = Freedom from all chains!",
        simpleExplanationHindi: "सबके पीछे का प्रकाश: क्या जाग्रत, स्वप्न और नींद को प्रकाशित करता है? 'मैं वही हूँ' = सब बंधनों से मुक्ति!",
        nanoBananaPrompt: "A single light illuminating three screens (waking, dreaming, sleeping), realizing 'I am that light.'",
        wordMeanings: [
            { sanskrit: "prakāśate", devanagari: "प्रकाशते", hindi: "प्रकाशित करता है", english: "illuminates" },
            { sanskrit: "aham brahmāsmi", devanagari: "अहं ब्रह्मास्मि", hindi: "मैं ब्रह्म हूँ", english: "I am Brahman" }
        ]
    },
    {
        id: 18,
        verse: 18,
        theme: "The Witness",
        sanskrit: "त्रिषु धामसु यद्भोग्यं भोक्ता भोगश्च यद्भवेत् । तेभ्यो विलक्षणः साक्षी चिन्मात्रोऽहं सदाशिवः ॥ १८ ॥",
        hindi: "तीनों धामों (अवस्थाओं) में जो कुछ भोग्य, भोक्ता और भोग है—उनसे विलक्षण, मैं साक्षी हूँ, केवल चैतन्य हूँ, और सदाशिव हूँ।",
        english: "Whatever is the object of enjoyment, the enjoyer, and the enjoyment in the three states—distinct from them, I am the Witness, the Pure Consciousness, the Eternal Good (Sadasiva).",
        simpleExplanation: "THE WITNESS IDENTITY: In all states there's object, enjoyer, experience. I am NONE of them—I am the WITNESS!",
        simpleExplanationHindi: "साक्षी पहचान: सभी अवस्थाओं में विषय, भोक्ता, अनुभव है। मैं इनमें से कोई नहीं—मैं साक्षी हूँ!",
        nanoBananaPrompt: "A witness consciousness observing all experiences in three states, untouched and ever-blissful.",
        wordMeanings: [
            { sanskrit: "sākṣī", devanagari: "साक्षी", hindi: "द्रष्टा", english: "witness" },
            { sanskrit: "cinmātra", devanagari: "चिन्मात्र", hindi: "केवल चेतना", english: "pure consciousness" }
        ]
    },
    {
        id: 19,
        verse: 19,
        theme: "I Am Brahman",
        sanskrit: "मय्येव सकलं जातं मयि सर्वं प्रतिष्ठितम् । मयि सर्वं लयं याति तद्ब्रह्माद्वयमस्म्यहम् ॥ १९ ॥",
        hindi: "मुझसे ही यह सब उत्पन्न हुआ है; मुझमें ही सब प्रतिष्ठित है; और मुझमें ही सब लय होता है। वह अद्वैत ब्रह्म मैं ही हूँ।",
        english: "In Me alone is everything born; in Me does everything rest; and in Me is everything dissolved. I am that Non-dual Brahman.",
        simpleExplanation: "THE ROAR OF REALIZATION: Creation, Preservation, Dissolution—all happen IN ME. I AM NON-DUAL BRAHMAN!",
        simpleExplanationHindi: "साक्षात्कार की गर्जना: सृष्टि, स्थिति, लय—सब मुझमें होता है। मैं अद्वैत ब्रह्म हूँ!",
        nanoBananaPrompt: "A meditator realizing: the entire universe—creation, existence, dissolution—happens within their consciousness.",
        wordMeanings: [
            { sanskrit: "advayam", devanagari: "अद्वयम्", hindi: "अद्वैत", english: "non-dual" },
            { sanskrit: "layam yāti", devanagari: "लयं याति", hindi: "विलीन होता है", english: "dissolves" }
        ]
    },
    {
        id: 20,
        verse: 20,
        theme: "Smaller and Greater",
        sanskrit: "अणोरणीयानहमेव तद्वन्महानहं विश्वमिदं विचित्रम् । पुरातनोऽहं पुरुषोऽहमीशो हिरण्मयोऽहं शिवरूपमस्मि ॥ २० ॥",
        hindi: "मैं अणु से भी अणु हूँ, और वैसे ही महान हूँ। मैं यह विचित्र विश्व हूँ। मैं पुरातन हूँ, मैं पुरुष हूँ, मैं ईश हूँ। मैं हिरण्मय हूँ और मैं शिव-रूप हूँ।",
        english: "I am smaller than the smallest, and likewise, I am the vastest. I am this amazing Universe. I am the Ancient One, the Person, the Lord. I am the Golden One, and I am of the form of Shiva.",
        simpleExplanation: "INFINITE IDENTITY: Smaller than atoms, bigger than universe! Ancient, Person, Lord, Golden, Shiva-form—ALL ME!",
        simpleExplanationHindi: "अनंत पहचान: परमाणुओं से छोटा, ब्रह्मांड से बड़ा! पुरातन, पुरुष, ईश, स्वर्णिम, शिव-रूप—सब मैं!",
        nanoBananaPrompt: "One being simultaneously as small as an atom and as vast as the universe, ancient and golden, Shiva-form.",
        wordMeanings: [
            { sanskrit: "aṇoḥ aṇīyān", devanagari: "अणोरणीयान्", hindi: "अणु से भी छोटा", english: "smaller than the smallest" },
            { sanskrit: "hiraṇmaya", devanagari: "हिरण्मय", hindi: "स्वर्णमय", english: "golden" }
        ]
    },
    {
        id: 21,
        verse: 21,
        theme: "Without Hands or Feet",
        sanskrit: "अपाणिपादोऽहमचिन्त्यशक्तिः पश्याम्यचक्षुः स शृणोम्यकर्णः । अहं विजानामि विविक्तरूपो न चास्ति वेत्ता मम चित्सदाहम् ॥ २१ ॥",
        hindi: "मेरे हाथ-पैर नहीं हैं, फिर भी मेरी शक्ति अचिन्त्य है। मैं बिना आँखों के देखता हूँ और बिना कानों के सुनता हूँ। मैं सबको जानता हूँ, लेकिन मुझे जानने वाला कोई नहीं है। मैं सदा चैतन्य हूँ।",
        english: "I am without hands and feet, yet of unthinkable power. I see without eyes, and I hear without ears. I know everything, but no one knows Me. I am always Pure Consciousness.",
        simpleExplanation: "THE PARADOX: No hands but acts, no eyes but sees, no ears but hears—PURE CONSCIOUSNESS doing all!",
        simpleExplanationHindi: "विरोधाभास: हाथ नहीं पर कार्य करता, आँखें नहीं पर देखता, कान नहीं पर सुनता—शुद्ध चेतना!",
        nanoBananaPrompt: "A formless light that sees without eyes, acts without hands, knows everything yet cannot be known.",
        wordMeanings: [
            { sanskrit: "apāṇipāda", devanagari: "अपाणिपाद", hindi: "हाथ-पैर रहित", english: "without hands and feet" },
            { sanskrit: "cit sadā aham", devanagari: "चित्सदाहम्", hindi: "मैं सदा चेतना हूँ", english: "I am always pure consciousness" }
        ]
    },
    {
        id: 22,
        verse: 22,
        theme: "Known Only by Vedas",
        sanskrit: "वेदैरनेकैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् । न पुण्यपापे मम नास्ति नाशो न जन्म देहेन्द्रियबुद्धिरस्ति ॥ २२ ॥",
        hindi: "अनेक वेदों द्वारा मैं ही जानने योग्य हूँ। मैं ही वेदांत का रचयिता हूँ और वेदों को जानने वाला हूँ। मेरे न पुण्य हैं और न पाप; मेरा नाश नहीं है। न मेरा जन्म है, न देह, न इन्द्रियां और न बुद्धि है।",
        english: "I alone am to be known through the various Vedas. I am the Maker of Vedanta and the Knower of the Vedas. To Me, there is neither merit nor sin; I suffer no destruction. I have no birth, no body, no senses, and no intellect.",
        simpleExplanation: "BEYOND KARMA: All Vedas point to ME. I made Vedanta. No merit, no sin, no death, no body, no mind—just ME!",
        simpleExplanationHindi: "कर्म से परे: सब वेद मुझी की ओर इशारा करते हैं। न पुण्य, न पाप, न मृत्यु, न शरीर—बस मैं!",
        nanoBananaPrompt: "All Vedic scriptures pointing to one truth beyond karma, birth, death, body, and mind.",
        wordMeanings: [
            { sanskrit: "vedāntakṛt", devanagari: "वेदान्तकृत्", hindi: "वेदांत रचयिता", english: "maker of Vedanta" },
            { sanskrit: "puṇyapāpa", devanagari: "पुण्यपाप", hindi: "पुण्य और पाप", english: "merit and sin" }
        ]
    },
    {
        id: 23,
        verse: 23,
        theme: "Beyond the Five Elements",
        sanskrit: "न भूमिरापो न च वह्निरस्ति न चानिलो मेऽस्ति न चाम्बरं च । एवं विदित्वा परमात्मरूपं गुहाशयं निष्कलमद्वितीयम् ॥ २३ ॥",
        hindi: "मेरे लिए न भूमि है, न जल है, न अग्नि है; न मेरे लिए वायु है और न आकाश है। इस प्रकार परमात्मा के रूप को जानकर—जो हृदय गुफा में स्थित है, कला-रहित है और अद्वितीय है...",
        english: "For Me, there is no Earth, no Water, no Fire, no Air, and no Ether. Thus knowing the nature of the Supreme Self, who dwells in the cave of the heart, who is partless and non-dual...",
        simpleExplanation: "BEYOND ELEMENTS: Earth, Water, Fire, Air, Space—NONE apply to Me! I am partless, one, in the heart-cave!",
        simpleExplanationHindi: "तत्वों से परे: पृथ्वी, जल, अग्नि, वायु, आकाश—कोई भी मुझ पर लागू नहीं! मैं अंशहीन, एक, हृदय-गुफा में!",
        nanoBananaPrompt: "A consciousness beyond all five elements, dwelling partless and non-dual in the heart-cave.",
        wordMeanings: [
            { sanskrit: "niṣkalam", devanagari: "निष्कलम्", hindi: "अंशरहित", english: "partless" },
            { sanskrit: "guhāśayam", devanagari: "गुहाशयम्", hindi: "गुफा में स्थित", english: "dwelling in cave" }
        ]
    },
    {
        id: 24,
        verse: 24,
        theme: "Attaining the Supreme",
        sanskrit: "समस्तसाक्षिं सदसद्विहीनं प्रयाति शुद्धं परमात्मरूपम् ॥ २४ ॥",
        hindi: "...जो सबका साक्षी है, और सत्-असत् से रहित है—साधक उस शुद्ध परमात्मा के स्वरूप को प्राप्त कर लेता है।",
        english: "...Who is the Witness of all, and free from both Being and Non-being—he attains the pure nature of the Supreme Self.",
        simpleExplanation: "THE GOAL: Witness of all, beyond existence and non-existence—attain THIS pure Supreme Self!",
        simpleExplanationHindi: "लक्ष्य: सबका साक्षी, अस्तित्व और अनस्तित्व से परे—इस शुद्ध परमात्मा को प्राप्त करो!",
        nanoBananaPrompt: "A seeker merging into the witness consciousness that is beyond all dualities of existence.",
        wordMeanings: [
            { sanskrit: "samastasākṣī", devanagari: "समस्तसाक्षी", hindi: "सबका साक्षी", english: "witness of all" },
            { sanskrit: "sadasadvihīnam", devanagari: "सदसद्विहीनम्", hindi: "सत्-असत् से रहित", english: "beyond being and non-being" }
        ]
    },
    {
        id: 25,
        verse: 25,
        theme: "Phala Shruti - Fruit of Reading",
        sanskrit: "यः शतरुद्रियमधीते सोऽग्निपूतो भवति स वायुपूतो भवति स आत्मपूतो भवति स सुरापानात्पूतो भवति स ब्रह्महत्यायाः पूतो भवति स सुवर्णस्तेयात्पूतो भवति स कृत्याकृत्यात्पूतो भवति । तस्मादविमुक्तमाश्रितो भवति ।",
        hindi: "जो इस शतरुद्रिय का अध्ययन करता है, वह अग्नि के समान पवित्र हो जाता है; वायु के समान पवित्र; आत्मा से पवित्र। वह मदिरापान के पाप से, ब्रह्महत्या से, सोने की चोरी से, कर्तव्य-अकर्तव्य त्रुटियों से मुक्त हो जाता है। वह अविमुक्त का आश्रित हो जाता है।",
        english: "He who studies this Shatarudriyam becomes pure as Fire, pure as Air, pure by the Self. He is cleansed from drinking alcohol, killing a Brahmin, stealing gold, sins of commission and omission. He becomes grounded in the Avimukta (Supreme).",
        simpleExplanation: "PURIFICATION POWER: Study this text = pure as fire + air + self! All major sins washed away!",
        simpleExplanationHindi: "शुद्धि शक्ति: इस ग्रंथ का अध्ययन = अग्नि + वायु + आत्मा जैसा शुद्ध! सभी बड़े पाप धुल जाते हैं!",
        nanoBananaPrompt: "A student being purified by fire, air, and self-light while reading the sacred text, all sins dissolving.",
        wordMeanings: [
            { sanskrit: "śatarudriyam", devanagari: "शतरुद्रियम्", hindi: "शतरुद्रीय", english: "this hymn to Rudra" },
            { sanskrit: "avimukta", devanagari: "अविमुक्त", hindi: "परमात्मा", english: "the ever-liberated (Supreme)" }
        ]
    },
    {
        id: 26,
        verse: 26,
        theme: "Kaivalya - Final Liberation",
        sanskrit: "एवं विदित्वा कैवल्यं फलमश्नुते कैवल्यं फलमश्नुते इति ॥ २६ ॥",
        hindi: "ऐसा जानकर, वह कैवल्य (मोक्ष) रूपी फल को प्राप्त करता है। वह कैवल्य फल को प्राप्त करता है।",
        english: "Knowing this, he attains the fruit of Kaivalya (Liberation). He attains the fruit of Kaivalya.",
        simpleExplanation: "THE FINAL FRUIT: Know all this = KAIVALYA (Absolute Aloneness/Liberation)! Said twice for emphasis!",
        simpleExplanationHindi: "अंतिम फल: यह सब जानो = कैवल्य (पूर्ण मुक्ति)! महत्व के लिए दो बार कहा गया!",
        nanoBananaPrompt: "A liberated soul in absolute aloneness (kaivalya), free from all bonds, radiating infinite peace.",
        wordMeanings: [
            { sanskrit: "kaivalyam", devanagari: "कैवल्यम्", hindi: "केवल्य/मोक्ष", english: "absolute liberation/aloneness" },
            { sanskrit: "phalam aśnute", devanagari: "फलमश्नुते", hindi: "फल प्राप्त करता है", english: "attains the fruit" }
        ]
    }
];

export const KAIVALYA_METADATA = {
    id: "kaivalya",
    name: "Kaivalya",
    nameSanskrit: "कैवल्योपनिषद्",
    veda: "Krishna Yajur Veda",
    category: "Shaiva",
    shlokaCount: 26,
    sequenceNumber: 12,
    meaning: "Aloneness/Absolute Liberation",
    keyTeachings: [
        "Faith + Bhakti + Dhyana = Path to Liberation",
        "Na Karmana: Not by works, only by Tyaga (Renunciation)",
        "Heart Lotus Meditation on Shiva",
        "All Gods are One (Sa Brahma Sa Shivah)",
        "Fire-Stick Analogy for Burning Bondage",
        "Tat Tvam Asi - That Thou Art",
        "Three States and the Witness Beyond",
        "Aham Brahmasmi - I Am Brahman"
    ],
    famousVerses: {
        naKarmana: { id: 3, verse: 3 },
        heartLotus: { id: 6, verse: 6 },
        saShivah: { id: 8, verse: 8 },
        tatTvamAsi: { id: 16, verse: 16 },
        ahamBrahma: { id: 19, verse: 19 },
        kaivalya: { id: 26, verse: 26 }
    }
};
