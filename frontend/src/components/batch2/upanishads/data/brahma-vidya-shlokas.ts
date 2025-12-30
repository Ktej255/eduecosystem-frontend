// Brahma Vidya Upanishad Data (#40 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Yoga
// Theme: Hamsa/Pranava meditation, Kundalini, 21,600 breaths
// Total: 71 Mantras (Key sections extracted)

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface BrahmaVidyaDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const BRAHMA_VIDYA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const BRAHMA_VIDYA_SHLOKAS: BrahmaVidyaDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "Declaration of Brahma Vidya",
        sanskrit: "अथ ब्रह्मविद्यां प्रवक्ष्यामि सर्वपापप्रणाशिनीम् ।",
        hindi: "अब मैं ब्रह्म-विद्या का वर्णन करूँगा जो सभी पापों का नाश करती है।",
        english: "Now I shall expound Brahma-Vidya which destroys all sins.",
        simpleExplanation: "BRAHMA VIDYA: The knowledge that DESTROYS ALL SINS!",
        simpleExplanationHindi: "ब्रह्म-विद्या: वह ज्ञान जो सभी पाप नष्ट करता है!",
        nanoBananaPrompt: "Divine knowledge destroying all sins like fire."
    },
    {
        id: 2, mantra: 5, theme: "Body = 96 Fingers",
        sanskrit: "षण्णवत्यङ्गुलायामे शरीरे समवस्थिते ॥",
        hindi: "शरीर का माप 96 अंगुल (Finger-breadths) है।",
        english: "The body measures 96 finger-breadths in length.",
        simpleExplanation: "BODY = 96 FINGERS: Ancient yogic measurement of the human body!",
        simpleExplanationHindi: "शरीर = 96 उंगलियां: मानव शरीर का प्राचीन योगिक माप!",
        nanoBananaPrompt: "Human body measured as 96 finger-breadths."
    },
    {
        id: 3, mantra: 6, theme: "Prana = 32 Fingers",
        sanskrit: "प्राणानां व्याप्तिरत्रैव द्वात्रिंशदङ्गुला स्मृता ।",
        hindi: "प्राणों की व्याप्ति 32 अंगुल मानी गई है।",
        english: "The extension of Prana is 32 finger-breadths.",
        simpleExplanation: "PRANA EXTENDS 32 FINGERS: Breath field around the body!",
        simpleExplanationHindi: "प्राण 32 उंगलियां फैलता है: शरीर के चारों ओर श्वास क्षेत्र!",
        nanoBananaPrompt: "Prana extending 32 fingers beyond the body."
    },
    {
        id: 4, mantra: 10, theme: "Navel Chakra - 12 Spokes",
        sanskrit: "नाभिचक्रमिति ख्यातं द्वादशारं प्रतिष्ठितम् ॥",
        hindi: "नाभि-चक्र में बारह आरों (Spokes) वाला चक्र है।",
        english: "The Navel Chakra has 12 spokes established there.",
        simpleExplanation: "NAVEL = 12 SPOKES: Manipura chakra with 12 petals!",
        simpleExplanationHindi: "नाभि = 12 पंखुड़ियां: मणिपुर चक्र 12 पंखुड़ियों वाला!",
        nanoBananaPrompt: "Navel chakra with 12 golden spokes."
    },
    {
        id: 5, mantra: 14, theme: "Hamsa Mantra - So'ham",
        sanskrit: "हकारेन बहिर्याति सकारेण विशेत्पुनः । हंस हंसेत्यमुं मन्त्रं जीवो जपति सर्वदा ॥",
        hindi: "'ह' से बाहर जाता है, 'स' से अंदर आता है। जीव सदा 'हंस-हंस' मंत्र जपता है।",
        english: "It goes out with 'Ha', enters with 'Sa'. The Jiva constantly chants 'Hamsa Hamsa'.",
        simpleExplanation: "HAMSA = BREATH! Every breath is HA (out) + SA (in) = SO'HAM = 'I am He'!",
        simpleExplanationHindi: "हंस = श्वास! हर श्वास है ह (बाहर) + स (अंदर) = सोऽहम् = 'वह मैं हूँ'!",
        nanoBananaPrompt: "Breath as Hamsa mantra—Ha going out, Sa coming in.",
        wordMeanings: [
            { sanskrit: "haṃsa", devanagari: "हंस", hindi: "हंस/आत्मा", english: "swan/self" }
        ]
    },
    {
        id: 6, mantra: 15, theme: "21,600 Breaths Daily",
        sanskrit: "षट्शतानि दिवारात्रौ सहस्राण्येकविंशतिः । एतत्संख्यान्वितं मन्त्रं जीवो जपति सर्वदा ॥",
        hindi: "दिन-रात में जीव 21,600 बार यह मंत्र जपता है।",
        english: "Day and night, the Jiva chants this mantra 21,600 times.",
        simpleExplanation: "21,600 BREATHS: You chant So'ham 21,600 times AUTOMATICALLY daily!",
        simpleExplanationHindi: "21,600 श्वास: तुम रोज स्वचालित रूप से 21,600 बार सोऽहम् जपते हो!",
        nanoBananaPrompt: "21,600 automatic So'ham mantras in one day."
    },
    {
        id: 7, mantra: 16, theme: "Ida Pingala Sushumna",
        sanskrit: "वामे इडा तु विज्ञेया दक्षिणे पिंगला स्मृता । तयोर्मध्ये तु या नाडी सुषुम्ना सा प्रकीर्तिता ॥",
        hindi: "बाईं ओर इड़ा, दाहिनी ओर पिंगला, बीच में सुषुम्ना।",
        english: "Ida on left, Pingala on right, Sushumna in the middle.",
        simpleExplanation: "THREE NADIS: Left=Moon(Ida), Right=Sun(Pingala), Center=Sushumna!",
        simpleExplanationHindi: "तीन नाड़ियां: बाएं=चंद्र(इड़ा), दाएं=सूर्य(पिंगला), मध्य=सुषुम्ना!",
        nanoBananaPrompt: "Three nadis—Ida, Pingala, Sushumna in the spine."
    },
    {
        id: 8, mantra: 19, theme: "Sun-Moon-Fire Spheres",
        sanskrit: "सूर्यमण्डलमध्यस्थं चन्द्रमण्डलमध्यगम् । वह्निमण्डलमध्यस्थं तेजस्तत्र विचिन्तयेत् ॥",
        hindi: "सूर्य-मंडल में चन्द्र-मंडल, उसमें वह्नि-मंडल। वहाँ तेज का चिंतन करे।",
        english: "Inside Sun sphere is Moon sphere; inside that is Fire sphere. Meditate on Light therein.",
        simpleExplanation: "THREE SPHERES: Sun > Moon > Fire > PURE LIGHT inside!",
        simpleExplanationHindi: "तीन मंडल: सूर्य > चंद्र > अग्नि > शुद्ध प्रकाश अंदर!",
        nanoBananaPrompt: "Nested spheres—sun, moon, fire, with light at center."
    },
    {
        id: 9, mantra: 21, theme: "OM = A-U-M = Three Vedas",
        sanskrit: "अकारं च उकारं च मकारं च प्रजापतिः । वेदत्रयं पूर्व प्रोक्तं प्रणवत्रयमेव च ॥",
        hindi: "'अ', 'उ', 'म' = प्रजापति = तीन वेद = तीन प्रणव।",
        english: "'A', 'U', 'M' are Prajapati, the three Vedas, the threefold Pranava.",
        simpleExplanation: "A-U-M: Three sounds = Three Vedas = Creator-Preserver-Destroyer!",
        simpleExplanationHindi: "अ-उ-म: तीन ध्वनियां = तीन वेद = सृष्टि-स्थिति-संहार!",
        nanoBananaPrompt: "A-U-M as three Vedas and three cosmic functions."
    },
    {
        id: 10, mantra: 22, theme: "A = Gold = Brahma",
        sanskrit: "सन्तप्तहाटकनिभं अकारं राजसं ब्रह्माणं परिकीर्तयेत् ॥",
        hindi: "'अ' को तप्त सोने जैसा, राजसी, ब्रह्मा रूप जानो।",
        english: "Visualize 'A' like molten Gold, Rajasic, as Brahma.",
        simpleExplanation: "A = GOLD = BRAHMA! First letter is creator energy!",
        simpleExplanationHindi: "अ = सोना = ब्रह्मा! पहला अक्षर सृष्टि ऊर्जा है!",
        nanoBananaPrompt: "Letter A glowing like molten gold—Brahma."
    },
    {
        id: 11, mantra: 25, theme: "U = White = Vishnu",
        sanskrit: "उकारं सात्त्विकं शुक्लं विष्ण्वाख्यं परिकीर्तयेत् ।",
        hindi: "'उ' को सात्विक, सफेद, विष्णु रूप जानो।",
        english: "Visualize 'U' as Sattvic, White, representing Vishnu.",
        simpleExplanation: "U = WHITE = VISHNU! Second letter is preserver energy!",
        simpleExplanationHindi: "उ = सफेद = विष्णु! दूसरा अक्षर पालन ऊर्जा है!",
        nanoBananaPrompt: "Letter U shining white—Vishnu."
    },
    {
        id: 12, mantra: 28, theme: "M = Black = Rudra",
        sanskrit: "मकारं तामसं कृष्णं रुद्रं तं परिकीर्तयेत् ।",
        hindi: "'म' को तामसिक, काला, रुद्र रूप जानो।",
        english: "Visualize 'M' as Tamasic, Black, representing Rudra.",
        simpleExplanation: "M = BLACK = RUDRA! Third letter is dissolution energy!",
        simpleExplanationHindi: "म = काला = रुद्र! तीसरा अक्षर संहार ऊर्जा है!",
        nanoBananaPrompt: "Letter M dark like dissolution—Rudra."
    },
    {
        id: 13, mantra: 40, theme: "Anahata - Unstruck Sound",
        sanskrit: "अनाहतध्वनियुतं हंसं यो वेद हृद्गतम् । स्वप्रकाशं चिदानन्दं स हंसस्तं विचिन्तयेत् ॥",
        hindi: "हृदय में अनाहत ध्वनि वाले, स्वप्रकाश, चिदानंद हंस को जानो।",
        english: "Know the Hamsa in heart with Anahata Sound, Self-luminous, Bliss.",
        simpleExplanation: "ANAHATA = UNSTRUCK SOUND: Cosmic sound in heart, Self-lit, Blissful!",
        simpleExplanationHindi: "अनाहत = बिना बजाई ध्वनि: हृदय में ब्रह्मांडीय ध्वनि, स्वप्रकाशित, आनंदमय!",
        nanoBananaPrompt: "Anahata—unstruck cosmic sound in the heart."
    },
    {
        id: 14, mantra: 50, theme: "Muladhara Triangle",
        sanskrit: "गुदमेढ्रान्तरे चक्रं आधारं त्रिकोणं वह्निरूपं प्रकाशकम् ॥",
        hindi: "गुदा और लिंग के बीच आधार चक्र में त्रिकोण, अग्नि रूप।",
        english: "Between anus and genital is Muladhara—a Triangle of Fire.",
        simpleExplanation: "MULADHARA = FIRE TRIANGLE: Base chakra = blazing triangle!",
        simpleExplanationHindi: "मूलाधार = अग्नि त्रिकोण: आधार चक्र = जलता त्रिकोण!",
        nanoBananaPrompt: "Muladhara chakra with fiery triangle at base."
    },
    {
        id: 15, mantra: 70, theme: "I Am Hamsa",
        sanskrit: "हंसो हंसोऽहमित्येवं हंसभावेन भावयेत् । सर्वं क्षेत्रं परित्यज्य हंसः शुद्धो निरामयः ॥",
        hindi: "'मैं हंस हूँ'—इस भाव से भावना करे। क्षेत्र त्यागकर शुद्ध हंस हो।",
        english: "'I am Hamsa'—contemplate thus. Abandoning all fields, become Pure Hamsa.",
        simpleExplanation: "I AM HAMSA! Drop body-identification, become the PURE SWAN!",
        simpleExplanationHindi: "मैं हंस हूँ! शरीर-पहचान छोड़ो, शुद्ध हंस बनो!",
        nanoBananaPrompt: "Yogi realizing 'I am Hamsa'—pure swan consciousness."
    }
];

export const BRAHMA_VIDYA_METADATA = {
    id: "brahma-vidya", name: "Brahma Vidya", nameSanskrit: "ब्रह्मविद्योपनिषद्",
    veda: "Krishna Yajur Veda", category: "Yoga", shlokaCount: 15, fullVerseCount: 71, sequenceNumber: 40,
    bodyMeasurements: { bodyLength: "96 angulas", pranaExtension: "32 angulas", navelSpokes: 12 },
    breathCount: { daily: 21600, mantra: "Hamsa/So'ham" },
    omComponents: { a: "Gold/Brahma/Rajas", u: "White/Vishnu/Sattva", m: "Black/Rudra/Tamas" }
};

export const getBrahmaVidyaMantra = (mantra: number) => BRAHMA_VIDYA_SHLOKAS.find(s => s.mantra === mantra);
