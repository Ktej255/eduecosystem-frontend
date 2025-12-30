// Devi Upanishad (#46 in Muktika Canon) | Atharva Veda | Shakta
// Theme: Devi Atharvashirsha - Goddess as Supreme Brahman
// Total: 20 key mantras from 32 verses

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface DeviDataEntry {
    id: number; section: string; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const DEVI_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम कानों से शुभ सुनें। शांति।",
    english: "OM! May we hear what is auspicious. OM Peace."
};

export const DEVI_SHLOKAS: DeviDataEntry[] = [
    // Part 1: The Revelation
    {
        id: 1, section: "Revelation", verse: 1, theme: "The Question",
        sanskrit: "ॐ सर्वे वै देवा देवीमुपतस्थुः । कासि त्वं महादेवीति ।",
        hindi: "सभी देवताओं ने देवी से पूछा: 'हे महादेवी! आप कौन हैं?'",
        english: "All Gods approached the Goddess: 'O Great Goddess! WHO ARE YOU?'",
        simpleExplanation: "THE QUESTION: All Gods ask the Goddess—WHO ARE YOU?",
        simpleExplanationHindi: "प्रश्न: सभी देव पूछते हैं—आप कौन हैं?", nanoBananaPrompt: "Gods asking the Goddess."
    },
    {
        id: 2, section: "Revelation", verse: 2, theme: "I Am Brahman",
        sanskrit: "साब्रवीत्—अहं ब्रह्मस्वरूपिणी । मत्तः प्रकृतिपुरुषात्मकं जगत् । शून्यं चाशून्यं च ।",
        hindi: "देवी बोलीं: 'मैं ब्रह्म-स्वरूपिणी हूँ। मुझसे प्रकृति-पुरुष जगत है। मैं शून्य और अशून्य हूँ।'",
        english: "She replied: 'I AM BRAHMAN. From Me, the Universe of Prakriti-Purusha. I am Void and Non-Void.'",
        simpleExplanation: "THE ANSWER: I AM BRAHMAN! Universe comes from ME!",
        simpleExplanationHindi: "उत्तर: मैं ब्रह्म हूँ! जगत मुझसे है!", nanoBananaPrompt: "Goddess declaring 'I am Brahman.'"
    },
    {
        id: 3, section: "Revelation", verse: 3, theme: "All Opposites",
        sanskrit: "अहमानन्दानानन्दौ । अहं विज्ञानाविज्ञाने । अहमेव अखिलं जगत् ।",
        hindi: "मैं आनंद और अनानंद। मैं विज्ञान और अविज्ञान। मैं ही संपूर्ण जगत हूँ।",
        english: "I am Bliss and Non-Bliss. I am Knowledge and Ignorance. I AM THE WHOLE UNIVERSE.",
        simpleExplanation: "ALL OPPOSITES: Bliss/pain, knowledge/ignorance—I am ALL!",
        simpleExplanationHindi: "सब विपरीत: सुख/दुख, ज्ञान/अज्ञान—मैं सब!", nanoBananaPrompt: "Goddess as all opposites."
    },
    {
        id: 4, section: "Revelation", verse: 4, theme: "Beyond Categories",
        sanskrit: "वेदोऽहमवेदोऽहम् । विद्याहमविद्याहम् । अजाहमनजाहम् ।",
        hindi: "मैं वेद और अवेद। मैं विद्या और अविद्या। मैं अजन्मी और जन्मी।",
        english: "I am Veda and Non-Veda. Knowledge and Ignorance. Unborn and Born.",
        simpleExplanation: "BEYOND ALL: Veda/non-Veda, born/unborn—ALL ME!",
        simpleExplanationHindi: "सबसे परे: वेद/अवेद, जन्म/अजन्मी—सब मैं!", nanoBananaPrompt: "Beyond categories."
    },
    {
        id: 5, section: "Revelation", verse: 5, theme: "Supporting All Gods",
        sanskrit: "अहं रुद्रेभिर्वसुभिश्चरामि । अहमादित्यैरुत विश्वदेवैः । अहमिन्द्राग्नी अहमश्विनावुभौ ।",
        hindi: "मैं रुद्रों-वसुओं में विचरती हूँ। आदित्य-विश्वेदेवों में हूँ। मैं इंद्र-अग्नि, दोनों अश्विनी।",
        english: "I move with Rudras, Vasus. With Adityas, All-Gods. I support Indra, Agni, Ashvins.",
        simpleExplanation: "SUPPORTING ALL: I move as Rudras, Vasus, Adityas—ALL GODS!",
        simpleExplanationHindi: "सब धारण: मैं रुद्र, वसु, आदित्य—सब देव!", nanoBananaPrompt: "Goddess as all gods."
    },
    {
        id: 6, section: "Revelation", verse: 6, theme: "Vishnu and Brahma",
        sanskrit: "अहं विष्णुमुरुक्रमं ब्रह्माणमुत प्रजापतिं दधामि ।",
        hindi: "मैं ही विष्णु, ब्रह्मा और प्रजापति को धारण करती हूँ।",
        english: "I support Vishnu, Brahma, and Prajapati.",
        simpleExplanation: "TRIMURTI SOURCE: I support Vishnu, Brahma, Prajapati!",
        simpleExplanationHindi: "त्रिमूर्ति स्रोत: विष्णु, ब्रह्मा, प्रजापति मुझसे!", nanoBananaPrompt: "Source of Trimurti."
    },
    // Part 2: Namaskara
    {
        id: 7, section: "Namaskara", verse: 8, theme: "Salutations",
        sanskrit: "नमो देव्यै महादेव्यै शिवायै सततं नमः । नमः प्रकृत्यै भद्रायै नियताः प्रणताः स्म ताम् ॥",
        hindi: "देवी, महादेवी, शिवा को नमस्कार। प्रकृति, भद्रा को नमस्कार।",
        english: "Salutations to Goddess, Great Goddess, Auspicious One. To Prakriti, Propitious One.",
        simpleExplanation: "SALUTATIONS: Devi! Mahadevi! Shiva! Prakriti! Bhadra!",
        simpleExplanationHindi: "नमस्कार: देवी! महादेवी! शिवा! प्रकृति! भद्रा!", nanoBananaPrompt: "Namaskar to Goddess."
    },
    {
        id: 8, section: "Namaskara", verse: 9, theme: "Durga Refuge",
        sanskrit: "तामग्निवर्णां तपसा ज्वलन्तीं दुर्गां देवीं शरणमहं प्रपद्ये ।",
        hindi: "अग्नि-वर्णा, तप से जलती दुर्गा देवी की शरण लेता हूँ।",
        english: "To Fire-colored, burning with Tapas—I take refuge in DURGA DEVI.",
        simpleExplanation: "DURGA REFUGE: Fire-colored, burning—I take refuge!",
        simpleExplanationHindi: "दुर्गा शरण: अग्नि-वर्णा, जलती—शरण!", nanoBananaPrompt: "Taking Durga's refuge."
    },
    {
        id: 9, section: "Namaskara", verse: 11, theme: "Nine Forms",
        sanskrit: "कालरात्रीं ब्रह्मस्तुतां वैष्णवीं स्कन्दमातरम् । सरस्वतीं अदितिं दक्षदुहितरं नमामः ॥",
        hindi: "कालरात्रि, वैष्णवी, स्कंदमाता, सरस्वती, अदिति, दक्षपुत्री को नमन।",
        english: "To Kalaratri, Vaishnavi, Skanda's Mother, Saraswati, Aditi, Daksha's daughter.",
        simpleExplanation: "NINE FORMS: Kalaratri, Vaishnavi, Saraswati, Aditi!",
        simpleExplanationHindi: "नौ रूप: कालरात्रि, वैष्णवी, सरस्वती!", nanoBananaPrompt: "Nine forms of Goddess."
    },
    {
        id: 10, section: "Namaskara", verse: 12, theme: "Mahalakshmi Gayatri",
        sanskrit: "महालक्ष्म्यै च विद्महे सर्वशक्त्यै च धीमहि । तन्नो देवी प्रचोदयात् ॥",
        hindi: "महालक्ष्मी को जानते हैं, सर्वशक्ति का ध्यान करते हैं। देवी प्रेरित करें।",
        english: "We know Mahalakshmi, we meditate on All-Power. May Goddess inspire us.",
        simpleExplanation: "DEVI GAYATRI: Mahalakshmi! All-Power! Inspire us!",
        simpleExplanationHindi: "देवी गायत्री: महालक्ष्मी! सर्वशक्ति! प्रेरित करें!", nanoBananaPrompt: "Mahalakshmi Gayatri."
    },
    // Part 3: Secret Mantras
    {
        id: 11, section: "Mantra", verse: 14, theme: "Panchadashi Encoded",
        sanskrit: "कामो योनिः कमला वज्रपाणिर्गुहा... पुरूच्येषा विश्वमातादिविद्योम् ॥",
        hindi: "काम (क), योनि (ए), कमला (ई), वज्रपाणि (ल), गुहा (ह्रीं)... यह विश्वमाता की आदि-विद्या।",
        english: "Kama (Ka), Yoni (E), Kamala (I), Vajrapani (La), Guha (Hrim)... World-Mother's Primal Knowledge.",
        simpleExplanation: "PANCHADASHI ENCODED: Ka-E-I-La-Hrim... World-Mother's secret!",
        simpleExplanationHindi: "पंचदशी कूट: क-ए-ई-ल-ह्रीं... विश्वमाता की विद्या!", nanoBananaPrompt: "Encoded Panchadashi."
    },
    {
        id: 12, section: "Mantra", verse: 15, theme: "Weapons of Goddess",
        sanskrit: "पाशाङ्कुशधनुर्बाणधरा एषा श्रीमहाविद्या । य एवं वेद स शोकं तरति ।",
        hindi: "पाश, अंकुश, धनुष, बाण धारिणी यह श्री महाविद्या। जो जाने, शोक पार करे।",
        english: "Holding Noose, Goad, Bow, Arrow—this is Sri Mahavidya. Knowing, one crosses grief.",
        simpleExplanation: "4 WEAPONS: Noose, Goad, Bow, Arrow = MAHAVIDYA! Know = cross sorrow!",
        simpleExplanationHindi: "4 अस्त्र: पाश, अंकुश, धनुष, बाण = महाविद्या!", nanoBananaPrompt: "Four sacred weapons."
    },
    {
        id: 13, section: "Mantra", verse: 16, theme: "Mother Protection",
        sanskrit: "नमस्ते अस्तु भगवति मातरस्मान् पाहि सर्वतः ।",
        hindi: "हे भगवती! नमस्कार। हे माता! सब ओर से रक्षा करो।",
        english: "Salutations, O Goddess! O Mother, protect us from all sides!",
        simpleExplanation: "PRAYER: O Mother! Protect us from ALL SIDES!",
        simpleExplanationHindi: "प्रार्थना: माँ! सब ओर से रक्षा करो!", nanoBananaPrompt: "Mother's protection."
    },
    // Part 4: She is All
    {
        id: 14, section: "Identity", verse: 17, theme: "She is All Gods",
        sanskrit: "सैषाष्टौ वसवः । सैषैकादश रुद्राः । सैषा द्वादशादित्याः ।",
        hindi: "वही आठ वसु। वही ग्यारह रुद्र। वही बारह आदित्य।",
        english: "She is the 8 Vasus. She is the 11 Rudras. She is the 12 Adityas.",
        simpleExplanation: "SHE IS ALL: 8 Vasus + 11 Rudras + 12 Adityas = GODDESS!",
        simpleExplanationHindi: "वही सब: 8 वसु + 11 रुद्र + 12 आदित्य = देवी!", nanoBananaPrompt: "Goddess as all deities."
    },
    {
        id: 15, section: "Identity", verse: 18, theme: "Three Gunas",
        sanskrit: "सैषा सत्त्वरजस्तमांसि । सैषा ब्रह्मविष्णुरुद्ररूपिणी ।",
        hindi: "वही सत्व, रज, तम। वही ब्रह्मा, विष्णु, रुद्र रूपिणी।",
        english: "She is Sattva, Rajas, Tamas. She is Brahma-Vishnu-Rudra form.",
        simpleExplanation: "3 GUNAS = HER! Brahma-Vishnu-Rudra = HER FORMS!",
        simpleExplanationHindi: "3 गुण = वही! ब्रह्मा-विष्णु-रुद्र = उनके रूप!", nanoBananaPrompt: "Three gunas as Goddess."
    },
    {
        id: 16, section: "Mantra", verse: 19, theme: "Hrim Bija Decoded",
        sanskrit: "वियदीकारसंयुक्तं वीतिहोत्रसमन्वितम् अर्धेन्दुलसितं देव्या बीजं सर्वार्थसाधकम् ॥",
        hindi: "वियत् (ह) + ईकार (ई) + वीतिहोत्र (र) + अर्धेन्दु (बिंदु) = ह्रीं। सर्वार्थ साधक।",
        english: "Sky (Ha) + I (Ee) + Fire (Ra) + Crescent (Bindu) = HRIM. Fulfills all desires.",
        simpleExplanation: "HRIM DECODED: Ha + Ee + Ra + Bindu = HRIM! Grants ALL!",
        simpleExplanationHindi: "ह्रीं कोड: ह + ई + र + बिंदु = ह्रीं! सब देता!", nanoBananaPrompt: "Hrim bija decoded."
    },
    // Part 5: Meditation Form
    {
        id: 17, section: "Dhyana", verse: 22, theme: "Form in Heart",
        sanskrit: "हृत्पुण्डरीकमध्यस्थां प्रातःसूर्यसमप्रभाम् । पाशाङ्कुशधरां सौम्यां त्रिनेत्रां रक्तवसनाम् ।",
        hindi: "हृदय-कमल में, प्रातः-सूर्य जैसी, पाश-अंकुश धारिणी, त्रिनेत्रा, लाल वस्त्रा।",
        english: "In Heart-Lotus, morning-sun radiance, holding Noose-Goad, Three-eyed, Red-robed.",
        simpleExplanation: "MEDITATE: In heart-lotus, red like sunrise, 3-eyed, 4 weapons!",
        simpleExplanationHindi: "ध्यान: हृदय-कमल, सूर्य जैसी, त्रिनेत्रा, 4 अस्त्र!", nanoBananaPrompt: "Goddess in heart-lotus."
    },
    // Part 6: Phala Shruti
    {
        id: 18, section: "Phala", verse: 26, theme: "Study Benefits",
        sanskrit: "य इमं अथर्वशीर्षं ब्राह्मणोऽधीते स व्यपोहतपाप्मा भवति ।",
        hindi: "जो इस अथर्वशीर्ष का अध्ययन करता है, वह पापमुक्त होता है।",
        english: "He who studies this Atharvashirsha becomes free from sins.",
        simpleExplanation: "BENEFIT: Study this = become SINLESS!",
        simpleExplanationHindi: "लाभ: यह पढ़ो = पापमुक्त!", nanoBananaPrompt: "Becoming sinless."
    },
    {
        id: 19, section: "Phala", verse: 27, theme: "Morning/Evening",
        sanskrit: "प्रातरधीयानो रात्रिकृतं पापं नाशयति । सायमधीयानो दिवसकृतं पापं नाशयति ।",
        hindi: "प्रातः पढ़ने से रात्रि-पाप नष्ट। सायं पढ़ने से दिन-पाप नष्ट।",
        english: "Morning recitation destroys night-sins. Evening recitation destroys day-sins.",
        simpleExplanation: "TIMING: Morning = night sins gone. Evening = day sins gone!",
        simpleExplanationHindi: "समय: प्रातः = रात्रि-पाप गया। सायं = दिन-पाप गया!", nanoBananaPrompt: "Sins destroyed morning/evening."
    },
    {
        id: 20, section: "Conclusion", verse: 32, theme: "Conclusion",
        sanskrit: "इति उपनिषत् ॥",
        hindi: "यही उपनिषद है।",
        english: "Thus ends the Upanishad.",
        simpleExplanation: "END: The Great Devi Atharvashirsha complete!",
        simpleExplanationHindi: "समाप्त: महान देवी अथर्वशीर्ष पूर्ण!", nanoBananaPrompt: "Upanishad conclusion."
    }
];

export const DEVI_METADATA = {
    id: "devi", name: "Devi", nameSanskrit: "देव्युपनिषद्",
    alternateNames: ["Devi Atharvashirsha", "Devi Suktam"],
    veda: "Atharva Veda", category: "Shakta",
    shlokaCount: 20, sequenceNumber: 46,
    meaning: "The Upanishad of the Goddess",
    keyTeachings: [
        "All Gods ask: 'Who are You?'",
        "Goddess: 'I AM BRAHMAN'",
        "From Her: Prakriti (Matter) + Purusha (Consciousness)",
        "She is ALL OPPOSITES: Bliss/pain, knowledge/ignorance",
        "She supports ALL GODS: Rudras, Vasus, Adityas, Vishnu, Brahma",
        "NAMASKARA: Devi, Mahadevi, Shiva, Prakriti, Bhadra",
        "DURGA: Fire-colored, burning with Tapas",
        "NINE FORMS: Kalaratri, Vaishnavi, Saraswati, Aditi...",
        "MAHALAKSHMI GAYATRI encoded",
        "PANCHADASHI: Ka-E-I-La-Hrim encoded in twilight language",
        "4 WEAPONS: Noose, Goad, Bow, Arrow",
        "HRIM DECODED: Ha + Ee + Ra + Bindu",
        "SHE IS: 8 Vasus + 11 Rudras + 12 Adityas + 3 Gunas",
        "SHE IS: Brahma-Vishnu-Rudra",
        "MEDITATION: Heart-lotus, sunrise radiance, 3-eyed, red-robed",
        "PHALA: Morning recitation = night sins gone, Evening = day sins gone"
    ],
    famousVerses: {
        iAmBrahman: { verse: 2 },
        namaskarMantra: { verse: 8 },
        durgaRefuge: { verse: 9 },
        mahalakshmiGayatri: { verse: 12 },
        hrimBija: { verse: 19 }
    }
};
