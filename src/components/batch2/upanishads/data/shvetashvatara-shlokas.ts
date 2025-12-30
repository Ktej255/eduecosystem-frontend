// Shvetashvatara Upanishad Data (#14 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Samanya (General)
// Theme: Maya-Mayin, Rudra/Shiva, Two Birds, Yoga, Bhakti
// Total: 6 Adhyayas (Chapters), 113 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface ShvetashvataraDataEntry {
    id: number;
    chapter: number;
    verse: string;
    theme: string;
    sanskrit: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
    wordMeanings?: WordMeaning[];
}

export const SHVETASHVATARA_SHLOKAS: ShvetashvataraDataEntry[] = [
    // SHANTI MANTRA
    {
        id: 0, chapter: 0, verse: "Shanti",
        theme: "Saha Navavatu",
        sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
        hindi: "ॐ! वह हम दोनों की रक्षा करे। हम दोनों का पालन करे। हम साथ मिलकर शक्ति प्राप्त करें। हमारा अध्ययन तेजस्वी हो। हम द्वेष न करें।",
        english: "OM! May He protect us both. May He nourish us. May we generate energy together. May our study be brilliant. May we not hate each other.",
        simpleExplanation: "GURU-STUDENT PRAYER: Protection, nourishment, energy, brilliance, harmony.",
        simpleExplanationHindi: "गुरु-शिष्य प्रार्थना: रक्षा, पोषण, शक्ति, तेज, सामंजस्य।",
        nanoBananaPrompt: "Guru and student meditating together in golden protective light."
    },

    // CHAPTER 1: INQUIRY INTO THE CAUSE
    {
        id: 1, chapter: 1, verse: "1.1",
        theme: "The Great Question",
        sanskrit: "ब्रह्मवादिनो वदन्ति । किं कारणं ब्रह्म कुतः स्म जाता जीवाम केन क्व च सम्प्रतिष्ठाः । अधिष्ठिताः केन सुखेतरेषु वर्तामहे ब्रह्मविदो व्यवस्थाम् ॥",
        hindi: "ब्रह्मवादियों ने कहा: 'जगत का मूल कारण क्या है? क्या वह ब्रह्म है? हम कहाँ से उत्पन्न हुए? किसके सहारे जीवित हैं? अंत में कहाँ लीन होंगे?'",
        english: "The students discuss: 'What is the Cause? Is it Brahman? From where are we born? By what do we live? Where do we rest at the end?'",
        simpleExplanation: "THE QUESTION: What causes everything? Where do we come from? Where do we go?",
        simpleExplanationHindi: "प्रश्न: सबका कारण क्या है? हम कहाँ से आए? कहाँ जाएंगे?",
        nanoBananaPrompt: "Seekers pondering the ultimate cause of existence."
    },
    {
        id: 2, chapter: 1, verse: "1.3",
        theme: "Devatatma Shakti",
        sanskrit: "ते ध्यानयोगानुगता अपश्यन् देवात्मशक्तिं स्वगुणैर्निगूढाम् । यः कारणानि निखिलानि तानि कालात्मयुक्तान्यधितिष्ठत्येकः ॥",
        hindi: "उन्होंने ध्यान-योग से उस 'देवात्म-शक्ति' को देखा, जो अपने गुणों से छिपी है। वह एक ही ईश्वर काल और आत्मा सहित सब कारणों पर शासन करता है।",
        english: "Practicing meditation, they realized the God-Self-Power hidden by its own qualities. The One rules all causes including Time and Soul.",
        simpleExplanation: "THROUGH MEDITATION: They saw the Divine Power behind everything!",
        simpleExplanationHindi: "ध्यान से: उन्होंने सबके पीछे दिव्य शक्ति देखी!",
        nanoBananaPrompt: "Meditators seeing the divine power hidden behind creation."
    },
    {
        id: 3, chapter: 1, verse: "1.6",
        theme: "Hamsa in Wheel",
        sanskrit: "सर्वाजीवे सर्वसंस्थे बृहन्ते अस्मिन् हंसो भ्राम्यते ब्रह्मचक्रे । पृथगात्मानं प्रेरितारं च मत्वा जुष्टस्ततस्तेनामृतत्वमेति ॥",
        hindi: "विशाल ब्रह्म-चक्र में, जहाँ सब जीते और मरते हैं, हंस (जीव) भटकता है। जब वह ईश्वर को जान लेता है, तब अमर हो जाता है।",
        english: "In this vast Wheel of Brahman, the Swan (Soul) flutters. But when blessed by the Mover (God), he attains Immortality.",
        simpleExplanation: "THE SWAN IN THE WHEEL: Soul wanders until it knows God, then becomes immortal!",
        simpleExplanationHindi: "चक्र में हंस: आत्मा भटकती है जब तक ईश्वर को नहीं जानती, फिर अमर!",
        nanoBananaPrompt: "A swan (soul) flying in a cosmic wheel, seeking the divine mover."
    },
    {
        id: 4, chapter: 1, verse: "1.10",
        theme: "End of Maya",
        sanskrit: "क्षरं प्रधानममृताक्षरं हरः क्षरात्मानावीशते देव एकः । तस्याभिध्यानाद्योजनात्तत्त्वभावात् भूयश्चान्ते विश्वमायान्निवृत्तिः ॥",
        hindi: "प्रधान (प्रकृति) क्षर है; हर (ईश्वर) अमृत और अक्षर है। वह देव प्रकृति और जीव पर शासन करता है। उसके ध्यान से माया की निवृत्ति होती है।",
        english: "Matter is perishable; God is immortal. One God rules both. By meditating on Him, Maya ceases.",
        simpleExplanation: "MEDITATE ON GOD: Maya ends when you focus on the Immortal Lord!",
        simpleExplanationHindi: "ईश्वर पर ध्यान करो: जब अमर प्रभु पर ध्यान करो, माया समाप्त!",
        nanoBananaPrompt: "Meditation dissolving the veil of Maya, revealing the immortal God."
    },
    {
        id: 5, chapter: 1, verse: "1.14",
        theme: "Fire-Stick Meditation",
        sanskrit: "स्वदेहमरणिं कृत्वा प्रणवं चोत्तरारणिम् । ध्याननिर्मथनाभ्यासाद्देवं पश्येन्निगूढवत् ॥",
        hindi: "अपने शरीर को नीचे की अरणि और ओंकार को ऊपर की अरणि बनाकर, ध्यान रूपी मंथन से उस छिपे देव को देखो।",
        english: "Making body the lower stick and OM the upper, through friction of meditation, see the hidden God like fire.",
        simpleExplanation: "BODY = LOWER STICK, OM = UPPER STICK: Rub with meditation, fire of God appears!",
        simpleExplanationHindi: "शरीर = नीचे की लकड़ी, ॐ = ऊपर की: ध्यान से रगड़ो, ईश्वर की अग्नि प्रकट!",
        nanoBananaPrompt: "Body as fire-stick, OM as upper stick, meditation creating divine fire."
    },

    // CHAPTER 2: YOGA OF MEDITATION
    {
        id: 6, chapter: 2, verse: "2.5",
        theme: "Children of Immortality",
        sanskrit: "युजे वां ब्रह्म पूर्व्यं नमोभिर्विश्लोक एतु पथ्येव सूरेः । शृण्वन्तु विश्वे अमृतस्य पुत्रा आ ये धामानि दिव्यानि तस्थुः ॥",
        hindi: "मैं तुम्हें प्राचीन ब्रह्म से जोड़ता हूँ। हे अमृत के पुत्रो! सब सुनो! जो दिव्य धामों में स्थित हैं, वे भी सुनें।",
        english: "I join you with ancient Brahman. Listen, O Children of Immortality! And those who dwell in celestial abodes!",
        simpleExplanation: "YOU ARE IMMORTAL! All souls are children of the Immortal One!",
        simpleExplanationHindi: "तुम अमर हो! सब आत्माएं अमृत की संतान हैं!",
        nanoBananaPrompt: "Souls as children of immortality, listening to the ancient teaching."
    },
    {
        id: 7, chapter: 2, verse: "2.8",
        theme: "Meditation Posture",
        sanskrit: "त्रिरुन्नतं स्थाप्य समं शरीरं हृदीन्द्रियाणि मनसा सन्निवेश्य । ब्रह्मोडुपेन प्रतरेत विद्वान् स्रोतांसि सर्वाणि भयावहानि ॥",
        hindi: "शरीर के तीन भागों (छाती, गर्दन, सिर) को सीधा रखकर, इन्द्रियों को हृदय में स्थिर करके, ब्रह्म-नौका (ॐ) से भय देने वाली धाराओं को पार करो।",
        english: "Hold body steady with chest, neck, head erect; withdraw senses to heart; cross fearful currents with the Raft of Brahman (OM).",
        simpleExplanation: "YOGA POSTURE: Sit straight, focus inward, cross the ocean of fear with OM!",
        simpleExplanationHindi: "योग आसन: सीधे बैठो, अंदर ध्यान करो, ॐ से भय का सागर पार करो!",
        nanoBananaPrompt: "Yogi sitting straight, crossing ocean of fear on the raft of OM."
    },
    {
        id: 8, chapter: 2, verse: "2.11",
        theme: "Signs of Progress",
        sanskrit: "नीहारधूमार्कानिलानलानां खद्योतविद्युत्स्फटिकशशिनाम् । एतानि रूपाणि पुरःसराणि ब्रह्मण्यभिव्यक्तिकराणि योगे ॥",
        hindi: "कोहरा, धुआँ, सूर्य, वायु, अग्नि, जुगनू, बिजली, स्फटिक, चन्द्रमा—ये रूप योग में ब्रह्म की अभिव्यक्ति से पहले दिखते हैं।",
        english: "Mist, smoke, sun, wind, fire, fireflies, lightning, crystal, moon—these forms appear before Brahman's revelation in Yoga.",
        simpleExplanation: "YOGA VISIONS: Mist, smoke, light, fireflies, lightning, crystal, moon = Signs of progress!",
        simpleExplanationHindi: "योग दर्शन: कोहरा, धुआँ, प्रकाश, जुगनू, बिजली, स्फटिक, चंद्र = प्रगति के चिन्ह!",
        nanoBananaPrompt: "Visions of mist, fire, lightning, moon appearing during deep meditation."
    },

    // CHAPTER 3: GLORY OF RUDRA
    {
        id: 9, chapter: 3, verse: "3.2",
        theme: "Eko Hi Rudrah",
        sanskrit: "एको हि रुद्रो न द्वितीयाय तस्थुः य इमांल्लोकानीशत ईशनीभिः । प्रत्यङ्जनांस्तिष्ठति सञ्चुकोचान्तकाले संसृज्य विश्वा भुवनानि गोपाः ॥",
        hindi: "निश्चय ही रुद्र एक ही है; दूसरे के लिए कोई स्थान नहीं। वह लोकों पर शासन करता है, सबके भीतर स्थित है, और अंत में सबको समेट लेता है।",
        english: "Truly Rudra is One; there is no place for a second. He rules all worlds, stands inside every being, and withdraws all at the end.",
        simpleExplanation: "RUDRA IS ONE! No second god exists. He creates, dwells within, and dissolves all!",
        simpleExplanationHindi: "रुद्र एक है! दूसरा कोई नहीं। वह रचता, भीतर रहता, और सबको समेटता है!",
        nanoBananaPrompt: "One Rudra creating, preserving within all beings, and dissolving at end."
    },
    {
        id: 10, chapter: 3, verse: "3.8",
        theme: "Beyond Death",
        sanskrit: "वेदाहमेतं पुरुषं महान्तमादित्यवर्णं तमसः परस्तात् । तमेव विदित्वाति मृत्युमेति नान्यः पन्था विद्यतेऽयनाय ॥",
        hindi: "मैं उस महान पुरुष को जानता हूँ जो सूर्य के समान प्रकाशवान और अंधकार से परे है। उसे जानकर ही मृत्यु पार होती है; कोई दूसरा मार्ग नहीं।",
        english: "I know that Great Person, sun-like, beyond darkness. Only by knowing Him does one pass over death; there is no other path.",
        simpleExplanation: "NO OTHER PATH! Know the Sun-like Being beyond darkness = Cross death!",
        simpleExplanationHindi: "कोई दूसरा मार्ग नहीं! अंधकार के पार सूर्य-समान को जानो = मृत्यु पार करो!",
        nanoBananaPrompt: "The radiant Purusha beyond darkness, the only path past death."
    },
    {
        id: 11, chapter: 3, verse: "3.13",
        theme: "Thumb-Sized Purusha",
        sanskrit: "अङ्गुष्ठमात्रः पुरुषोऽन्तरात्मा सदा जनानां हृदये सन्निविष्टः । हृदा मनीषा मनसाभिकॢप्तो य एतद्विदुरमृतास्ते भवन्ति ॥",
        hindi: "अंगूठे के माप वाला पुरुष, अंतरात्मा, सदा लोगों के हृदय में स्थित है। जो उसे हृदय और मन से जानते हैं, वे अमर होते हैं।",
        english: "The thumb-sized Person, the Inner Self, is always in the heart. Those who know Him through heart and mind become Immortal.",
        simpleExplanation: "THUMB-SIZED SELF IN YOUR HEART! Know it through heart and mind = Immortal!",
        simpleExplanationHindi: "अंगूठे जितनी आत्मा तुम्हारे हृदय में! हृदय और मन से जानो = अमर!",
        nanoBananaPrompt: "A thumb-sized luminous being residing in the heart of every person."
    },

    // CHAPTER 4: MAYA AND THE MAYIN
    {
        id: 12, chapter: 4, verse: "4.5",
        theme: "Prakriti and Soul",
        sanskrit: "अजामेकां लोहितशुक्लकृष्णां बह्वीः प्रजाः सृजमानां सरूपाः । अजो ह्येको जुषमाणोऽनुशेते जहात्येनां भुक्तभोगामजोऽन्यः ॥",
        hindi: "एक अजा (प्रकृति) है—लाल, सफेद, काले रंगों वाली। एक अज (जीव) उससे प्रेम करता है; दूसरा अज (मुक्त) उसे भोग कर छोड़ देता है।",
        english: "One Unborn Female (Nature) is red, white, black. One Unborn Male loves her; the other Unborn leaves her after enjoying.",
        simpleExplanation: "THREE-COLORED NATURE: One soul clings to her, the wise soul leaves after knowing!",
        simpleExplanationHindi: "तीन रंग वाली प्रकृति: एक आत्मा चिपकती है, ज्ञानी जानकर छोड़ देता है!",
        nanoBananaPrompt: "Nature as three-colored female, one soul attached, wise soul departing."
    },
    {
        id: 13, chapter: 4, verse: "4.6",
        theme: "Two Birds",
        sanskrit: "द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते । तयोरन्यः पिप्पलं स्वाद्वत्त्यनश्नन्नन्यो अभिचाकशीति ॥",
        hindi: "दो पक्षी, सदैव साथ रहने वाले मित्र, एक ही वृक्ष पर हैं। एक फल खाता है; दूसरा बिना खाए केवल देखता है।",
        english: "Two birds, inseparable friends, cling to the same tree. One eats the sweet fruit; the other looks on without eating.",
        simpleExplanation: "TWO BIRDS: One eats (enjoys world), one watches (God-consciousness). You are BOTH!",
        simpleExplanationHindi: "दो पक्षी: एक खाता है (भोगता है), एक देखता है (साक्षी)। तुम दोनों हो!",
        nanoBananaPrompt: "Two birds on one tree—one eating fruit, one watching serenely."
    },
    {
        id: 14, chapter: 4, verse: "4.9-10",
        theme: "Maya and Mayin",
        sanskrit: "अस्मान्मायी सृजते विश्वमेतत् तस्मिंश्चान्यो मायया सन्निरुद्धः ॥ मायां तु प्रकृतिं विद्यान्मायिनं च महेश्वरम् । तस्यावयवभूतैस्तु व्याप्तं सर्वमिदं जगत् ॥",
        hindi: "वह मायी (ईश्वर) इस विश्व को रचता है; उसमें दूसरा (जीव) माया से बंधा है। माया को प्रकृति जानो, और मायी को महेश्वर। यह जगत उसके अंगों से व्याप्त है।",
        english: "The Mayin creates this universe; another is bound in it by Maya. Know Nature as Maya, and the Great Lord as Mayin. The world is filled with His parts.",
        simpleExplanation: "MAYA = NATURE, MAYIN = GOD! God creates the net, soul gets caught. Know the difference!",
        simpleExplanationHindi: "माया = प्रकृति, मायी = ईश्वर! ईश्वर जाल बनाता है, जीव फंसता है। भेद जानो!",
        nanoBananaPrompt: "The Great Lord (Mayin) weaving Maya, souls caught in the cosmic net."
    },

    // CHAPTER 5: THE HIDDEN TRUTH
    {
        id: 15, chapter: 5, verse: "5.1",
        theme: "Vidya and Avidya",
        sanskrit: "द्वे अक्षरे ब्रह्मपरे त्वनन्ते विद्याविद्ये निहिते यत्र गूढे । क्षरं त्वविद्या ह्यमृतं तु विद्या विद्याविद्ये ईशते यस्तु सोऽन्यः ॥",
        hindi: "अनंत परब्रह्म में दो चीज़ें छिपी हैं—विद्या और अविद्या। अविद्या क्षर (नाशवान) है, विद्या अमृत है। जो दोनों पर शासन करता है, वह उनसे अन्य है।",
        english: "In the infinite Supreme Brahman, two things hide: Knowledge and Ignorance. Ignorance is perishable; Knowledge is immortal. He who rules both is different from them.",
        simpleExplanation: "TWO HIDDEN THINGS: Ignorance (perishable) and Knowledge (immortal). God rules both!",
        simpleExplanationHindi: "दो छिपी चीज़ें: अविद्या (नाशवान) और विद्या (अमर)। ईश्वर दोनों पर शासन करता है!",
        nanoBananaPrompt: "Knowledge and Ignorance hidden in Brahman, God ruling over both."
    },

    // CHAPTER 6: THE FINAL CONCLUSION
    {
        id: 16, chapter: 6, verse: "6.7",
        theme: "Maheshwara",
        sanskrit: "तमीश्वराणां परमं महेश्वरं तं देवतानां परमं च दैवतम् । पतिं पतीनां परमं परस्ताद् विदाम देवं भुवनेशमीड्यम् ॥",
        hindi: "हम उसे ईश्वरों का परम महेश्वर, देवताओं का परम दैवत, पतियों का परम पति जानते हैं। वह परे से भी परे, भुवनेश और स्तुति योग्य है।",
        english: "We know Him as the Supreme Lord of Lords, the Supreme Deity of Deities, the Master of Masters, higher than the high, the Ruler of the World.",
        simpleExplanation: "LORD OF LORDS! God of Gods! Master of Masters! The Highest of the High!",
        simpleExplanationHindi: "ईश्वरों का ईश्वर! देवों का देव! स्वामियों का स्वामी! सर्वोच्च!",
        nanoBananaPrompt: "The Supreme Lord above all lords, gods, and masters—the World Ruler."
    },
    {
        id: 17, chapter: 6, verse: "6.8",
        theme: "Para Shakti",
        sanskrit: "न तस्य कार्यं करणं च विद्यते न तत्समश्चाभ्यधिकश्च दृश्यते । परास्य शक्तिर्विविधैव श्रूयते स्वाभाविकी ज्ञानबलक्रिया च ॥",
        hindi: "उसका न कोई शरीर है न करण; न उसके समान कोई है न उससे अधिक। उसकी परा शक्ति विविध है; उसका ज्ञान, बल और क्रिया स्वाभाविक है।",
        english: "He has no body and no instrument; none equal or greater. His Supreme Power is manifold; His knowledge, strength, action are natural.",
        simpleExplanation: "NO EQUAL, NO GREATER! His power is infinite and natural! Knowledge, strength, action—all natural!",
        simpleExplanationHindi: "कोई समान नहीं, कोई बड़ा नहीं! उसकी शक्ति अनंत और स्वाभाविक! ज्ञान, बल, क्रिया—सब स्वाभाविक!",
        nanoBananaPrompt: "God with infinite natural power—no body, no equal, no greater."
    },
    {
        id: 18, chapter: 6, verse: "6.10",
        theme: "Spider Analogy",
        sanskrit: "यस्तन्तुनाभ इव तन्तुभिः प्रधानजैः स्वभावतः । देव एकः स्वमावृणोत् स नो दधातु ब्रह्माप्ययम् ॥",
        hindi: "जैसे मकड़ी अपने धागों से जाल बुनती है, वैसे ही जिस देव ने स्वभाव से अपने आप को प्रकृति के धागों से ढका है—वह हमें ब्रह्म-प्राप्ति दे।",
        english: "Like a spider covers itself with threads from its nature, the One God covers Himself with threads from Prakriti. May He grant us absorption in Brahman.",
        simpleExplanation: "SPIDER ANALOGY: God weaves the universe from Himself like spider weaves web!",
        simpleExplanationHindi: "मकड़ी उपमा: ईश्वर अपने से ब्रह्मांड बुनता है जैसे मकड़ी जाला बुनती है!",
        nanoBananaPrompt: "God as cosmic spider, weaving universe from His own nature."
    },
    {
        id: 19, chapter: 6, verse: "6.11",
        theme: "Eko Devah (One God)",
        sanskrit: "एको देवः सर्वभूतेषु गूढः सर्वव्यापी सर्वभूतान्तरात्मा । कर्माध्यक्षः सर्वभूताधिवासः साक्षी चेता केवलो निर्गुणश्च ॥",
        hindi: "एक ही देव सभी प्राणियों में छिपा है। वह सर्वव्यापी, सबकी अंतरात्मा, कर्मों का अध्यक्ष, सबमें निवासी, साक्षी, चेतन, केवल और निर्गुण है।",
        english: "One God hidden in all beings, all-pervading, Inner Self of all, Overseer of actions, Abode of all, Witness, Conscious, Absolute, without attributes.",
        simpleExplanation: "ONE GOD: Hidden in all, all-pervading, Inner Self, Witness, Conscious, Absolute, Attributeless!",
        simpleExplanationHindi: "एक ईश्वर: सबमें छिपा, सर्वव्यापी, अंतरात्मा, साक्षी, चेतन, केवल, निर्गुण!",
        nanoBananaPrompt: "One God hidden in all beings—witness, conscious, absolute, attributeless."
    },
    {
        id: 20, chapter: 6, verse: "6.13",
        theme: "Samkhya-Yoga",
        sanskrit: "नित्यो नित्यानां चेतनश्चेतनानामेको बहूनां यो विदधाति कामान् । तत्कारणं सांख्ययोगाधिगम्यं ज्ञात्वा देवं मुच्यते सर्वपाशैः ॥",
        hindi: "जो नित्यों में नित्य है, चेतनों में चेतन है; जो अकेला बहुतों की कामनाएं पूरी करता है। उस कारण को सांख्य और योग द्वारा जानकर, जीव सब बंधनों से मुक्त होता है।",
        english: "The Eternal among eternals, Conscious among conscious, One fulfilling desires of many. Knowing that Cause through Samkhya and Yoga, one is freed from all fetters.",
        simpleExplanation: "SAMKHYA + YOGA = FREEDOM! The Eternal of eternals, Conscious of conscious—know Him, be FREE!",
        simpleExplanationHindi: "सांख्य + योग = मुक्ति! नित्यों का नित्य, चेतनों का चेतन—उसे जानो, मुक्त हो जाओ!",
        nanoBananaPrompt: "The Eternal Conscious One, known through Samkhya and Yoga, freeing souls."
    },
    {
        id: 21, chapter: 6, verse: "6.14",
        theme: "Self-Luminous",
        sanskrit: "न तत्र सूर्यो भाति न चन्द्रतारकं नेमा विद्युतो भान्ति कुतोऽयमग्निः । तमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति ॥",
        hindi: "वहाँ न सूर्य चमकता है, न चन्द्रमा और तारे, न बिजली, तो अग्नि कहाँ से? उसी के चमकने से सब चमकता है; उसी के प्रकाश से यह सब प्रकाशित है।",
        english: "There the sun does not shine, nor moon and stars, nor lightning. How then fire? Him alone shining, all things shine. By His light, all this is lighted.",
        simpleExplanation: "THE ULTIMATE LIGHT: Sun, moon, stars, fire—all borrow light from HIM! He alone is Self-luminous!",
        simpleExplanationHindi: "परम प्रकाश: सूर्य, चंद्र, तारे, अग्नि—सब उससे प्रकाश लेते हैं! वही स्वयं-प्रकाश है!",
        nanoBananaPrompt: "The Self-luminous Being, from whose light sun, moon, and stars shine."
    },
    {
        id: 22, chapter: 6, verse: "6.18",
        theme: "Refuge",
        sanskrit: "यो ब्रह्माणं विदधाति पूर्वं यो वै वेदांश्च प्रहिणोति तस्मै । तं ह देवं आत्मबुद्धिप्रकाशं मुमुक्षुर्वै शरणमहं प्रपद्ये ॥",
        hindi: "जिसने ब्रह्मा को रचा और उन्हें वेद दिए; जो बुद्धि को प्रकाशित करने वाला देव है—मैं मोक्ष चाहने वाला उसकी शरण लेता हूँ।",
        english: "He who created Brahma and delivered Vedas to him—to that God who illumines intellect, I, desiring Liberation, go for Refuge.",
        simpleExplanation: "I TAKE REFUGE! He created Brahma, gave Vedas. I surrender for Liberation!",
        simpleExplanationHindi: "मैं शरण लेता हूँ! उसने ब्रह्मा को बनाया, वेद दिए। मुक्ति के लिए मैं समर्पित!",
        nanoBananaPrompt: "A seeker surrendering to the God who created Brahma and gave Vedas."
    },
    {
        id: 23, chapter: 6, verse: "6.23",
        theme: "Bhakti to God and Guru",
        sanskrit: "यस्य देवे परा भक्तिः यथा देवे तथा गुरौ । तस्यैते कथिता ह्यर्थाः प्रकाशन्ते महात्मनः प्रकाशन्ते महात्मनः ॥",
        hindi: "जिसकी ईश्वर में परम भक्ति है, और जैसी ईश्वर में है वैसी ही गुरु में—उसी के हृदय में ये रहस्य प्रकाशित होते हैं।",
        english: "He who has supreme Devotion to the Divine, and as much to the Guru—to him alone these truths shine forth. Shine forth.",
        simpleExplanation: "BHAKTI IS KEY! Devotion to God AND Guru equally = Truths SHINE in your heart!",
        simpleExplanationHindi: "भक्ति मुख्य है! ईश्वर और गुरु में समान भक्ति = सत्य हृदय में प्रकाशित!",
        nanoBananaPrompt: "Devotion to God and Guru equally—truths shining in the devoted heart."
    }
];

// Metadata
export const SHVETASHVATARA_METADATA = {
    id: "shvetashvatara",
    name: "Shvetashvatara",
    nameSanskrit: "श्वेताश्वतरोपनिषद्",
    veda: "Krishna Yajur Veda",
    category: "Samanya",
    shlokaCount: 24,
    fullVerseCount: 113,
    sequenceNumber: 14,
    chapterCount: 6,
    chapters: {
        1: { name: "Inquiry into Cause", verses: 16, theme: "What is the Cause?" },
        2: { name: "Yoga of Meditation", verses: 17, theme: "Fire-stick, Children of Immortality" },
        3: { name: "Glory of Rudra", verses: 21, theme: "Eko Hi Rudrah, Purusha Suktam" },
        4: { name: "Maya and Mayin", verses: 22, theme: "Two Birds, Prakriti" },
        5: { name: "Hidden Truth", verses: 14, theme: "Vidya-Avidya, Kapila" },
        6: { name: "Final Conclusion", verses: 23, theme: "Maheshwara, Bhakti" }
    },
    keyTeachings: [
        "Eko Hi Rudrah: Only ONE Rudra exists",
        "Two Birds: Soul eats fruit, God watches",
        "Maya = Prakriti, Mayin = Maheshvara",
        "Fire-stick meditation: Body + OM = Divine fire",
        "Children of Immortality: All souls are immortal",
        "No other path: Know the Sun-like Being",
        "Bhakti: Devotion to God AND Guru equally"
    ],
    famousVerses: {
        childrenOfImmortality: { id: 6, chapter: 2, verse: "2.5" },
        ekoHiRudrah: { id: 9, chapter: 3, verse: "3.2" },
        noOtherPath: { id: 10, chapter: 3, verse: "3.8" },
        twoBirds: { id: 13, chapter: 4, verse: "4.6" },
        mayaDefinition: { id: 14, chapter: 4, verse: "4.9-10" },
        ekoDevah: { id: 19, chapter: 6, verse: "6.11" },
        selfLuminous: { id: 21, chapter: 6, verse: "6.14" },
        bhakti: { id: 23, chapter: 6, verse: "6.23" }
    }
};

export const getShvetashvataraVerse = (chapter: number, verse: string): ShvetashvataraDataEntry | undefined => {
    return SHVETASHVATARA_SHLOKAS.find(s => s.chapter === chapter && s.verse === verse);
};
