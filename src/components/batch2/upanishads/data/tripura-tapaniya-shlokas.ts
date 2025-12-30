// Tripura Tapaniya Upanishad (#45 in Muktika Canon) | Atharva Veda | Shakta
// Theme: Sri Vidya, Panchadashi Mantra, Sri Chakra, Goddess Tripura Sundari
// Total: 5 Sections, 15 Mantras

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface TripuraTapaniyaDataEntry {
    id: number; section: number; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const TRIPURA_TAPANIYA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम कानों से शुभ सुनें। शांति।",
    english: "OM! May we hear what is auspicious. OM Peace."
};

export const TRIPURA_TAPANIYA_SHLOKAS: TripuraTapaniyaDataEntry[] = [
    // Section 1: Three Cities
    {
        id: 1, section: 1, verse: 1, theme: "The Three Cities",
        sanskrit: "इदं वै त्रिपुरं भूः भुवः स्वः ।",
        hindi: "यह त्रिपुर है—भूः (पृथ्वी), भुवः (अंतरिक्ष), स्वः (स्वर्ग)।",
        english: "This is TRIPURA—Bhuh (Earth), Bhuvah (Space), Svah (Heaven).",
        simpleExplanation: "TRIPURA = 3 CITIES: Earth + Atmosphere + Heaven!",
        simpleExplanationHindi: "त्रिपुर = 3 पुर: भू + भुवः + स्वः!", nanoBananaPrompt: "Three lokas as Tripura."
    },
    {
        id: 2, section: 1, verse: 2, theme: "The Light that Illuminates",
        sanskrit: "यदस्य पुरत्रयस्य दीपनं तदक्षरं परं ज्योतिः ।",
        hindi: "जो इन तीनों पुरों को प्रकाशित करता है—वह अक्षर परम ज्योति (देवी) है।",
        english: "That which illuminates these Three Cities is the Imperishable Supreme Light (Goddess).",
        simpleExplanation: "THE GODDESS = LIGHT illuminating all 3 worlds!",
        simpleExplanationHindi: "देवी = प्रकाश जो तीनों लोकों को जगाता!", nanoBananaPrompt: "Goddess as Supreme Light."
    },
    {
        id: 3, section: 1, verse: 3, theme: "Gayatri Connection",
        sanskrit: "तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।",
        hindi: "हम सविता के श्रेष्ठ भर्ग (तेज) का ध्यान करते हैं, जो हमारी बुद्धि प्रेरित करे।",
        english: "We meditate on that Adorable Glory of Divine Savitr, may He inspire our intellects.",
        simpleExplanation: "GAYATRI = Secret Shakti mantra! Divine Light inspiring minds!",
        simpleExplanationHindi: "गायत्री = गुप्त शक्ति मंत्र! दिव्य प्रकाश बुद्धि प्रेरित करे!", nanoBananaPrompt: "Gayatri as Shakti."
    },
    {
        id: 4, section: 1, verse: 4, theme: "Durga Connection",
        sanskrit: "स नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥",
        hindi: "वह अग्नि (शक्ति) हमें सभी दुर्गम स्थानों से पार ले जाए, जैसे नाव समुद्र पार कराती है।",
        english: "May that Fire carry us across all difficulties, as a boat crosses the ocean.",
        simpleExplanation: "DURGA = She who takes us across DURGA (difficulties)!",
        simpleExplanationHindi: "दुर्गा = दुर्गम से पार करने वाली!", nanoBananaPrompt: "Durga—boat crossing ocean."
    },
    {
        id: 5, section: 1, verse: 5, theme: "Definition of Tripura",
        sanskrit: "तस्माज्जाता भगवती त्रिपुरेति अभिधीयते ।",
        hindi: "उसी से उत्पन्न, वह भगवती 'त्रिपुरा' कहलाती हैं।",
        english: "Born from That, the Goddess is called 'TRIPURA'.",
        simpleExplanation: "TRIPURA SUNDARI = Beautiful in all 3 worlds! Born from Supreme Light!",
        simpleExplanationHindi: "त्रिपुरा = तीनों लोकों की सुंदरी! परम ज्योति से जन्मी!", nanoBananaPrompt: "Tripura Sundari named."
    },
    // Section 2: The Vidya (Panchadashi)
    {
        id: 6, section: 2, verse: 1, theme: "First Kuta - Vagbhava",
        sanskrit: "शक्तिराद्यं कामराजं ककारं ।",
        hindi: "आदि शक्ति कामराज है, 'क' कार। (क ए ई ल ह्रीं)।",
        english: "Primal Power is Kamaraja, letter 'Ka'. (Ka E I La Hrim).",
        simpleExplanation: "1ST KUTA: Ka E I La Hrim = VAGBHAVA (Speech)!",
        simpleExplanationHindi: "पहला कूट: क ए ई ल ह्रीं = वाग्भव!", nanoBananaPrompt: "Vagbhava Kuta."
    },
    {
        id: 7, section: 2, verse: 2, theme: "Second Kuta - Kamaraja",
        sanskrit: "एतद् वै त्रिपुरं विद्या हकारं ।",
        hindi: "यह त्रिपुर-विद्या है, 'ह' कार। (ह स क ह ल ह्रीं)।",
        english: "This is Tripura Knowledge, letter 'Ha'. (Ha Sa Ka Ha La Hrim).",
        simpleExplanation: "2ND KUTA: Ha Sa Ka Ha La Hrim = KAMARAJA (Desire)!",
        simpleExplanationHindi: "दूसरा कूट: ह स क ह ल ह्रीं = कामराज!", nanoBananaPrompt: "Kamaraja Kuta."
    },
    {
        id: 8, section: 2, verse: 3, theme: "Third Kuta - Shakti",
        sanskrit: "सकाराद्यं शक्तिबीजं सकारं ।",
        hindi: "'स' कार आदि शक्ति-बीज। (स क ल ह्रीं)।",
        english: "Shakti-seed beginning with 'Sa'. (Sa Ka La Hrim).",
        simpleExplanation: "3RD KUTA: Sa Ka La Hrim = SHAKTI (Power)!",
        simpleExplanationHindi: "तीसरा कूट: स क ल ह्रीं = शक्ति!", nanoBananaPrompt: "Shakti Kuta."
    },
    {
        id: 9, section: 2, verse: 4, theme: "The Supreme Bija",
        sanskrit: "हृल्लेखा परमा शक्तिः ।",
        hindi: "हृल्लेखा (ह्रीं) ही परम शक्ति।",
        english: "HRIM is the Supreme Power.",
        simpleExplanation: "HRIM = The Supreme! Heart of the entire mantra!",
        simpleExplanationHindi: "ह्रीं = परम! पूरे मंत्र का हृदय!", nanoBananaPrompt: "Hrim—Supreme Shakti."
    },
    // Section 3: Sri Chakra
    {
        id: 10, section: 3, verse: 1, theme: "The Yantra Structure",
        sanskrit: "त्रिकोणं मण्डलं चाष्टपत्रं षट्कोणसंयुक्तम् ।",
        hindi: "त्रिकोण, मंडल, आठ पंखुड़ियां, षट्कोण से युक्त।",
        english: "Triangle, Circle, Eight Petals, combined with Hexagon.",
        simpleExplanation: "SRI CHAKRA: Triangle + Circle + 8 Petals + 6-pointed Star!",
        simpleExplanationHindi: "श्री चक्र: त्रिकोण + वृत्त + 8 पंखुड़ी + षट्कोण!", nanoBananaPrompt: "Sri Chakra inner."
    },
    {
        id: 11, section: 3, verse: 2, theme: "Outer Structure",
        sanskrit: "विवृत्तं षोडशारं च वृत्तत्रयसमन्वितम् भूपुरैश्च युतम् ॥",
        hindi: "बाहर सोलह पंखुड़ियां, तीन वृत्त, और भूपुर (चौकोर)।",
        english: "Outside: Sixteen Petals, Three Circles, and Bhupura (Square).",
        simpleExplanation: "OUTER: 16 Petals + 3 Circles + Square Gate = MAHA CHAKRA!",
        simpleExplanationHindi: "बाहर: 16 पंखुड़ी + 3 वृत्त + चौकोर द्वार = महाचक्र!", nanoBananaPrompt: "Sri Chakra complete."
    },
    {
        id: 12, section: 3, verse: 3, theme: "The Central Point",
        sanskrit: "तस्य मध्ये कामकलां आवाहयेत् ।",
        hindi: "उसके मध्य (बिंदु) में काम-कला (त्रिपुरा सुंदरी) का आवाहन करें।",
        english: "In its center, invoke the Kama-Kala (Tripura Sundari).",
        simpleExplanation: "CENTER = BINDU: Invoke the Goddess in the central point!",
        simpleExplanationHindi: "केंद्र = बिंदु: देवी का आवाहन!", nanoBananaPrompt: "Bindu—the center."
    },
    // Section 4: Philosophy
    {
        id: 13, section: 4, verse: 1, theme: "Shiva-Shakti Unity",
        sanskrit: "सैव तुरीया । सा माया । शिवशक्तिरिति ख्याता ।",
        hindi: "वही तुरीया। वही माया। वही शिव-शक्ति नाम से विख्यात।",
        english: "She is Turiya. She is Maya. She is Shiva-Shakti.",
        simpleExplanation: "GODDESS = Turiya + Maya + Shiva-Shakti combined!",
        simpleExplanationHindi: "देवी = तुरीया + माया + शिव-शक्ति!", nanoBananaPrompt: "Shiva-Shakti unity."
    },
    {
        id: 14, section: 4, verse: 2, theme: "Advaita",
        sanskrit: "या कामकला स एव पुरुषः । यः पुरुषः सा एव कामकला । अद्वैतं परमं ब्रह्म ।",
        hindi: "जो कामकला वही पुरुष। जो पुरुष वही कामकला। अद्वैत परमब्रह्म।",
        english: "Kama-Kala is Purusha. Purusha is Kama-Kala. Non-dual Supreme Brahman.",
        simpleExplanation: "ADVAITA: Shakti = Shiva. Shiva = Shakti. ONE BRAHMAN!",
        simpleExplanationHindi: "अद्वैत: शक्ति = शिव। शिव = शक्ति। एक ब्रह्म!", nanoBananaPrompt: "Shakti-Shiva non-dual."
    },
    // Section 5: Fruit
    {
        id: 15, section: 5, verse: 1, theme: "The Fruit",
        sanskrit: "य एवं वेद स त्रिपुरस्याधिष्ठानं भवति । स सर्वं पश्यति । सोऽमृतत्वं च गच्छति ।",
        hindi: "जो ऐसा जानता है, वह त्रिपुर का अधिष्ठान बनता है। वह सबको देखता है। वह अमरता प्राप्त करता है।",
        english: "He who knows this becomes Tripura's Abode. He sees all. He attains Immortality.",
        simpleExplanation: "FRUIT: Know this = Become Goddess's abode, all-seeing, IMMORTAL!",
        simpleExplanationHindi: "फल: यह जानो = देवी का आधार बनो, सर्वज्ञ, अमर!", nanoBananaPrompt: "Attaining immortality."
    }
];

export const TRIPURA_TAPANIYA_METADATA = {
    id: "tripura-tapaniya", name: "Tripura Tapaniya", nameSanskrit: "त्रिपुरतापिन्युपनिषद्",
    veda: "Atharva Veda", category: "Shakta",
    shlokaCount: 15, sectionCount: 5, sequenceNumber: 45,
    meaning: "The Upanishad that Illuminates the Three Cities/Goddess Tripura",
    panchadashiMantra: {
        kuta1_vagbhava: "क ए ई ल ह्रीं (Ka E I La Hrim)",
        kuta2_kamaraja: "ह स क ह ल ह्रीं (Ha Sa Ka Ha La Hrim)",
        kuta3_shakti: "स क ल ह्रीं (Sa Ka La Hrim)",
        full: "Ka E I La Hrim, Ha Sa Ka Ha La Hrim, Sa Ka La Hrim"
    },
    sriChakra: {
        innermost: "Bindu (Central Point)",
        triangle: "Central Triangle (Yoni)",
        hexagon: "Two interlocking triangles (Shiva-Shakti)",
        eightPetals: "8 Petal Lotus",
        sixteenPetals: "16 Petal Lotus",
        threeCircles: "3 Enclosing Circles",
        outermost: "Bhupura (Square with 4 Gates)"
    },
    keyTeachings: [
        "TRIPURA = Three Worlds (Bhuh, Bhuvah, Svah)",
        "Goddess Tripura Sundari = Light illuminating all 3 worlds",
        "Gayatri secretly encodes Sri Vidya",
        "PANCHADASHI MANTRA = 15 syllables in 3 Kutas",
        "  Kuta 1 (Vagbhava) = Speech",
        "  Kuta 2 (Kamaraja) = Desire",
        "  Kuta 3 (Shakti) = Power",
        "HRIM = Supreme Bija at heart of mantra",
        "SRI CHAKRA = Bindu → Triangle → Hexagon → 8 Petals → 16 Petals → 3 Circles → Bhupura",
        "Goddess = Turiya = Maya = Shiva-Shakti",
        "ADVAITA: Shakti IS Shiva, Shiva IS Shakti = One Brahman",
        "FRUIT: Become Goddess's abode, omniscient, immortal"
    ]
};
