// Nada Bindu Upanishad (#39 in Muktika Canon) | Rig Veda | Yoga
// Theme: OM as Cosmic Bird, Inner Sound Meditation (Nada Anusandhana)
// Total: 20 key mantras from 56 verses

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface NadaBinduDataEntry {
    id: number; section: string; verse: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const NADABINDU_SHANTI_MANTRA = {
    sanskrit: "ॐ वाङ् मे मनसि प्रतिष्ठिता । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! मेरी वाणी मन में प्रतिष्ठित हो। शांति।",
    english: "OM! May my speech be established in my mind. OM Peace."
};

export const NADABINDU_SHLOKAS: NadaBinduDataEntry[] = [
    // Part 1: OM as Bird
    {
        id: 1, section: "OM-Bird", verse: 1, theme: "The Wings",
        sanskrit: "अकारो दक्षिणः पक्ष उकारस्तूत्तरः स्मृतः । मकारं पुच्छमित्याहुरर्धमात्रा तु मस्तकम् ॥",
        hindi: "'अ' दाहिना पंख, 'उ' बायां पंख, 'म' पूंछ, अर्धमात्रा (नाद) मस्तक।",
        english: "'A' is right wing, 'U' is left wing, 'M' is tail, Half-meter (Nada) is head.",
        simpleExplanation: "OM-BIRD: A=right wing, U=left wing, M=tail, Nada=head!",
        simpleExplanationHindi: "ॐ-पक्षी: अ=दायां पंख, उ=बायां, म=पूंछ, नाद=सिर!", nanoBananaPrompt: "OM as bird."
    },
    {
        id: 2, section: "OM-Bird", verse: 2, theme: "Body & Eyes",
        sanskrit: "धर्मोऽस्य दक्षिणं चक्षुरधर्मोऽथोपरः स्मृतः ।",
        hindi: "धर्म दाहिनी आँख, अधर्म बाईं आँख।",
        english: "Dharma is right eye, Adharma is left eye.",
        simpleExplanation: "EYES: Right=Dharma, Left=Adharma. Bird sees both!",
        simpleExplanationHindi: "आँखें: दाईं=धर्म, बाईं=अधर्म!", nanoBananaPrompt: "Bird's eyes—dharma/adharma."
    },
    {
        id: 3, section: "OM-Bird", verse: 3, theme: "The Lokas",
        sanskrit: "भूर्लोकः पादयुगलं भुवर्लोकोऽस्य जानुनी । सुवर्लोकः कटीदेशो नाभिदेशो महर्लयः ॥",
        hindi: "भूलोक=पैर, भुवर्लोक=घुटने, स्वर्लोक=कमर, महर्लोक=नाभि।",
        english: "Bhuloka=feet, Bhuvarloka=knees, Svarloka=waist, Maharloka=navel.",
        simpleExplanation: "LOKAS ON BIRD: Earth=feet, Sky=knees, Heaven=waist!",
        simpleExplanationHindi: "पक्षी पर लोक: भू=पैर, स्वर्ग=कमर!", nanoBananaPrompt: "Lokas mapped to bird."
    },
    {
        id: 4, section: "OM-Bird", verse: 4, theme: "Higher Lokas",
        sanskrit: "जनोलोकोऽस्य हृदयं कण्ठं चापि तपोमयम् । सत्यलोको व्यवस्थितः ॥",
        hindi: "जनलोक=हृदय, तपोलोक=कंठ, सत्यलोक=भौंहों के बीच।",
        english: "Janaloka=heart, Tapoloka=throat, Satyaloka=between eyebrows.",
        simpleExplanation: "HIGHER LOKAS: Janaloka=heart, Satyaloka=third eye!",
        simpleExplanationHindi: "उच्च लोक: जनलोक=हृदय, सत्यलोक=तीसरी आँख!", nanoBananaPrompt: "Higher lokas on bird."
    },
    {
        id: 5, section: "OM-Bird", verse: 5, theme: "Mount the Bird",
        sanskrit: "एष हंसः समारूढो न भिद्येत कदाचन ॥",
        hindi: "इस हंस (ॐ) पर सवार होने वाला कभी (कर्मों से) लिप्त नहीं होता।",
        english: "He who mounts this Hamsa (OM) is never affected by Karma.",
        simpleExplanation: "RIDE THE BIRD: Mount OM = Never bound by Karma!",
        simpleExplanationHindi: "पक्षी पर सवार: ॐ पर बैठो = कर्म-बंधन नहीं!", nanoBananaPrompt: "Riding the OM bird."
    },
    // Part 2: 12 Matras
    {
        id: 6, section: "Matras", verse: 7, theme: "1st Matra",
        sanskrit: "प्रथमायां तु मात्रायां स राजं सार्वभौमः प्रजायते ॥",
        hindi: "प्रथम मात्रा में प्राण छूटे तो चक्रवर्ती राजा।",
        english: "Prana departs in 1st Matra = Universal Emperor.",
        simpleExplanation: "1ST MATRA: Die here = reborn as World Emperor!",
        simpleExplanationHindi: "पहली मात्रा: यहाँ मरो = चक्रवर्ती बनो!", nanoBananaPrompt: "1st matra—emperor."
    },
    {
        id: 7, section: "Matras", verse: 11, theme: "12th Matra",
        sanskrit: "द्वादश्यां ब्रह्मलोकं तु परं प्राप्नोति संस्थितः ॥",
        hindi: "बारहवीं मात्रा में = परम ब्रह्मलोक।",
        english: "In 12th Matra = Supreme Brahmaloka.",
        simpleExplanation: "12TH MATRA: Die here = reach BRAHMALOKA!",
        simpleExplanationHindi: "बारहवीं मात्रा: ब्रह्मलोक!", nanoBananaPrompt: "12th matra—Brahmaloka."
    },
    // Part 3: Prarabdha
    {
        id: 8, section: "Jivanmukti", verse: 16, theme: "Snake Skin",
        sanskrit: "सर्पस्त्वचं विमुच्य वर्तते । तथा जीवनमुक्तोऽपि शरीरे वर्ततेऽशरीरः ॥",
        hindi: "सांप केंचुली छोड़कर रहता है; जीवनमुक्त शरीर में रहकर अशरीरी।",
        english: "Snake casts off skin; Jivanmukta lives in body yet bodiless.",
        simpleExplanation: "SNAKE SKIN: Like snake leaves skin, liberated stays in body but FREE!",
        simpleExplanationHindi: "सांप की केंचुली: शरीर में रहकर मुक्त!", nanoBananaPrompt: "Snake casting skin."
    },
    // Part 4: Nada Practice
    {
        id: 9, section: "Nada", verse: 20, theme: "The Technique",
        sanskrit: "सिद्धासनं समारूह्य षण्मुखीमुद्रयान्वितः । शृणुयाद्दक्षिणे कर्णे नादमन्तःस्थम् ॥",
        hindi: "सिद्धासन में षण्मुखी मुद्रा से दाहिने कान में आंतरिक नाद सुनो।",
        english: "In Siddhasana with Shanmukhi Mudra, listen to inner Sound in RIGHT EAR.",
        simpleExplanation: "TECHNIQUE: Siddhasana + close 6 gates + listen RIGHT EAR!",
        simpleExplanationHindi: "विधि: सिद्धासन + षण्मुखी + दायां कान सुनो!", nanoBananaPrompt: "Shanmukhi mudra—listening."
    },
    {
        id: 10, section: "Nada", verse: 21, theme: "Covers External",
        sanskrit: "अभ्यस्यमानो नादोऽयं बाह्यमावृणुते ध्वनिम् ।",
        hindi: "अभ्यास से यह नाद बाहरी ध्वनियों को ढक लेता है।",
        english: "With practice, this Sound covers all external sounds.",
        simpleExplanation: "PRACTICE: Inner sound DROWNS OUT external noise!",
        simpleExplanationHindi: "अभ्यास: भीतरी ध्वनि बाहरी को दबा देती!", nanoBananaPrompt: "Nada covering external."
    },
    {
        id: 11, section: "Nada", verse: 22, theme: "Progression",
        sanskrit: "श्रूयते प्रथमाभ्यासे नादो नानाविधो महान् । ततोऽभ्यासे सूक्ष्मसूक्ष्मकः ॥",
        hindi: "शुरू में अनेक तेज नाद; फिर सूक्ष्म से सूक्ष्मतर।",
        english: "Initially, various loud sounds; later subtler and subtler.",
        simpleExplanation: "PROGRESSION: First LOUD sounds, then SUBTLER and subtler!",
        simpleExplanationHindi: "प्रगति: पहले तेज, फिर सूक्ष्म!", nanoBananaPrompt: "Sounds becoming subtle."
    },
    {
        id: 12, section: "Nada", verse: 23, theme: "Beginning Sounds",
        sanskrit: "आदौ जलधिजीमूतभेरीनिर्झरसम्भवाः ।",
        hindi: "शुरू में: समुद्र, बादल, नगाड़ा, झरने की आवाजें।",
        english: "Initially: Ocean, Clouds, Kettledrum, Waterfalls.",
        simpleExplanation: "STAGE 1: Ocean roar, thunder, drums, waterfalls!",
        simpleExplanationHindi: "चरण 1: समुद्र, बादल, नगाड़ा, झरना!", nanoBananaPrompt: "Loud initial sounds."
    },
    {
        id: 13, section: "Nada", verse: 23, theme: "Middle Sounds",
        sanskrit: "मध्ये मर्दलशङ्खोत्या घण्टाकाहलजास्तथा ॥",
        hindi: "मध्य में: मृदंग, शंख, घंटा, काहल।",
        english: "Middle: Mardala drum, Conch, Bell, Horn.",
        simpleExplanation: "STAGE 2: Drums, conch, bells, horns!",
        simpleExplanationHindi: "चरण 2: ढोल, शंख, घंटा!", nanoBananaPrompt: "Middle sounds."
    },
    {
        id: 14, section: "Nada", verse: 24, theme: "End Sounds",
        sanskrit: "अन्ते तु किङ्किणीवंशवीणाभ्रमरनिःस्वनाः ।",
        hindi: "अंत में: घुंघरू, बांसुरी, वीणा, भंवरे की गुंजन।",
        english: "Finally: Tinkling bells, Flute, Vina, Bee-humming.",
        simpleExplanation: "STAGE 3: Anklet bells, flute, vina, BEE HUMMING!",
        simpleExplanationHindi: "चरण 3: घुंघरू, बांसुरी, वीणा, भंवरा!", nanoBananaPrompt: "Final subtle sounds."
    },
    {
        id: 15, section: "Nada", verse: 25, theme: "Go Subtler",
        sanskrit: "महति श्रूयमाणेऽपि तत्र सूक्ष्मात्सूक्ष्मतरं नादमेव परामर्शयेत् ॥",
        hindi: "तेज ध्वनि में भी, सूक्ष्म से सूक्ष्मतर नाद पर ध्यान दो।",
        english: "Even in loud sounds, focus on subtler and subtler.",
        simpleExplanation: "KEY: Even when loud, seek the SUBTLER within!",
        simpleExplanationHindi: "मुख्य: तेज में भी सूक्ष्म खोजो!", nanoBananaPrompt: "Seeking subtler."
    },
    // Part 5: Laya
    {
        id: 16, section: "Laya", verse: 29, theme: "Bee Analogy",
        sanskrit: "मकरन्दपिबन् भृङ्गो गन्धं नापेक्षते यथा । नादासक्तं तथा चित्तं विषयान्न हि काङ्क्षते ॥",
        hindi: "जैसे रस पीता भंवरा गंध नहीं चाहता, वैसे नाद-लीन चित्त विषय नहीं चाहता।",
        english: "Bee drinking honey ignores smell; mind in Nada ignores objects.",
        simpleExplanation: "BEE ANALOGY: Bee wants nectar not smell; mind wants Nada not objects!",
        simpleExplanationHindi: "भंवरा: रस चाहिए, गंध नहीं; मन को नाद चाहिए, विषय नहीं!", nanoBananaPrompt: "Bee drinking honey."
    },
    {
        id: 17, section: "Laya", verse: 30, theme: "Elephant Goad",
        sanskrit: "मनोमत्तगजेन्द्रस्य निशिताङ्कुशवैभवः ॥",
        hindi: "उन्मत्त हाथी (मन) के लिए यह नाद तीक्ष्ण अंकुश है।",
        english: "For the mad Elephant (Mind), this Sound is a sharp Goad.",
        simpleExplanation: "ELEPHANT GOAD: Nada controls wild elephant (mind)!",
        simpleExplanationHindi: "हाथी का अंकुश: नाद से मन नियंत्रित!", nanoBananaPrompt: "Goad for elephant-mind."
    },
    {
        id: 18, section: "Laya", verse: 41, theme: "Fire Analogy",
        sanskrit: "काष्ठे प्रवर्तितो वह्निः काष्ठेन सह शाम्यति । नादे प्रवर्तितं चित्तं नादेन सह लीयते ॥",
        hindi: "लकड़ी में आग, लकड़ी जलने पर शांत। नाद में चित्त, नाद शांत होने पर लीन।",
        english: "Fire in wood dies with wood; Mind in Nada dissolves with Nada.",
        simpleExplanation: "FIRE IN WOOD: Fire burns wood then dies; Mind rides Nada then dissolves!",
        simpleExplanationHindi: "लकड़ी में आग: आग लकड़ी जलाकर बुझी; मन नाद में लीन!", nanoBananaPrompt: "Fire dying with wood."
    },
    // Conclusion
    {
        id: 19, section: "Conclusion", verse: 46, theme: "Only Nada",
        sanskrit: "सर्वचिन्तां परित्यज्य नाद एवानुसन्धेयो योगसाम्राज्यमिच्छता ॥",
        hindi: "सब चिंता छोड़कर, योग-साम्राज्य चाहने वाले को केवल नाद का अनुसंधान करना चाहिए।",
        english: "Abandoning all thoughts, one desiring Yoga-kingdom should investigate NADA alone.",
        simpleExplanation: "FINAL INSTRUCTION: Drop all thoughts! ONLY investigate Nada!",
        simpleExplanationHindi: "अंतिम निर्देश: सब चिंता छोड़ो! केवल नाद खोजो!", nanoBananaPrompt: "Investigate only Nada."
    },
    {
        id: 20, section: "Conclusion", verse: 47, theme: "Beyond Nada",
        sanskrit: "नादोऽपि कल्पितो निराभासे तु न शब्दं न निःस्वनम् ॥",
        hindi: "नाद भी साधन मात्र है; निराभास में न शब्द है न ध्वनि—मौन ब्रह्म।",
        english: "Even Nada is conceptual; in Absolute, no sound nor silence—Silent Brahman.",
        simpleExplanation: "ULTIMATE: Even Nada is tool! Beyond = SILENT BRAHMAN!",
        simpleExplanationHindi: "परम: नाद भी साधन! परे = मौन ब्रह्म!", nanoBananaPrompt: "Beyond Nada—silence."
    }
];

export const NADABINDU_METADATA = {
    id: "nadabindu", name: "Nada Bindu", nameSanskrit: "नादबिन्दूपनिषद्",
    veda: "Rig Veda", category: "Yoga",
    shlokaCount: 20, sequenceNumber: 39,
    meaning: "The Point (Bindu) of Sound (Nada)",
    omBird: {
        rightWing: "A-kara", leftWing: "U-kara", tail: "M-kara", head: "Ardha-matra",
        rightEye: "Dharma", leftEye: "Adharma",
        feet: "Bhuloka", knees: "Bhuvarloka", waist: "Svarloka",
        navel: "Maharloka", heart: "Janaloka", throat: "Tapoloka", thirdEye: "Satyaloka"
    },
    soundProgression: {
        stage1_loud: ["Ocean", "Clouds/Thunder", "Kettledrum", "Waterfalls"],
        stage2_middle: ["Mardala drum", "Conch", "Bell", "Horn"],
        stage3_subtle: ["Tinkling bells", "Flute", "Vina", "Bee humming"]
    },
    keyTeachings: [
        "OM as Cosmic Bird (Hamsa) with 7 lokas mapped to body",
        "12 Matras of OM—from Emperor (1st) to Brahmaloka (12th)",
        "Jivanmukta like snake casting skin",
        "TECHNIQUE: Siddhasana + Shanmukhi Mudra + Right Ear",
        "Sound progression: Loud → Medium → Subtle",
        "Bee analogy: Mind wants Nada, ignores objects",
        "Elephant goad: Nada controls wild mind",
        "Fire analogy: Mind dissolves with Nada",
        "ULTIMATE: Even Nada is a tool; beyond is Silent Brahman"
    ]
};
