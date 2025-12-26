// Bhasma Jabala Upanishad Data (#50 in Muktika Canon)
// Source: Atharva Veda | Category: Shaiva
// Theme: Holy Ash (Vibhuti) - Preparation, Mantras, Tripundra
// Total: 17 Mantras across 2 Adhyayas

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface BhasmaJabalaDataEntry {
    id: number; mantra: number; adhyaya: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const BHASMA_JABALA_SHANTI_MANTRA = {
    sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम कानों से कल्याणकारी सुनें। शांति।",
    english: "OM! May we hear auspicious with our ears. OM Peace."
};

export const BHASMA_JABALA_SHLOKAS: BhasmaJabalaDataEntry[] = [
    {
        id: 1, mantra: 1, adhyaya: 1, theme: "Jabala Asks Shiva",
        sanskrit: "भुसुण्डो जाबालः महादेवं कैलासशिखरे प्रणिपत्य पप्रच्छ । विभूतिधारणविधिं नो ब्रूहि ।",
        hindi: "भुसुण्ड जाबाल ने कैलाश पर महादेव से पूछा: विभूति धारण की विधि बताइए।",
        english: "Bhusunda Jabala asked Mahadeva on Kailasa: Tell the rule of wearing Vibhuti.",
        simpleExplanation: "THE QUESTION: How to make, apply, and use SACRED ASH?",
        simpleExplanationHindi: "प्रश्न: पवित्र भस्म कैसे बनाएं, लगाएं, उपयोग करें?",
        nanoBananaPrompt: "Sage Jabala asking Shiva about Vibhuti on Mount Kailasa.",
        wordMeanings: [
            { sanskrit: "vibhūti", devanagari: "विभूति", hindi: "पवित्र भस्म", english: "sacred ash" }
        ]
    },
    {
        id: 2, mantra: 2, adhyaya: 1, theme: "Collect Cow Dung",
        sanskrit: "प्रातरुत्थाय शुचिः भूत्वा सद्योजातेन गोमयं संगृह्य ।",
        hindi: "प्रातः उठकर, पवित्र होकर, 'सद्योजातम्' मंत्र से गोमय (गोबर) संग्रह करें।",
        english: "Rising early, becoming pure, collect Cow Dung with 'Sadyojatam' mantra.",
        simpleExplanation: "START: Morning, purify yourself, chant mantra, collect cow dung!",
        simpleExplanationHindi: "शुरुआत: सुबह, शुद्ध हो, मंत्र जपो, गोबर इकट्ठा करो!",
        nanoBananaPrompt: "Collecting cow dung with sacred mantra at dawn."
    },
    {
        id: 3, mantra: 3, adhyaya: 1, theme: "Sacred Cows",
        sanskrit: "कपिलायाः गोमयं ग्राह्यम् । व्याधिहीनायाः वत्सायाः गोः पुरीषं ग्राह्यम् ।",
        hindi: "कपिला (सुनहरी) गाय का गोबर लें। गाय रोग-रहित, बछड़े वाली हो।",
        english: "Take dung of Kapila (golden) cow. Cow should be disease-free, with calf.",
        simpleExplanation: "BEST SOURCE: Golden cow, healthy, has a calf—ideal dung!",
        simpleExplanationHindi: "सर्वोत्तम स्रोत: सुनहरी गाय, स्वस्थ, बछड़े वाली—आदर्श गोबर!",
        nanoBananaPrompt: "Sacred Kapila cow with calf for holy ash."
    },
    {
        id: 4, mantra: 4, adhyaya: 1, theme: "Catch Before Ground",
        sanskrit: "भूमौ अपतितं गोमयं गृह्णीयात् ।",
        hindi: "गोबर जमीन पर गिरने से पहले पकड़ो।",
        english: "Catch the dung before it falls on the ground.",
        simpleExplanation: "PURITY RULE: Catch it mid-air! Don't let it touch ground!",
        simpleExplanationHindi: "शुद्धता नियम: हवा में पकड़ो! जमीन छूने मत दो!",
        nanoBananaPrompt: "Catching cow dung before it touches ground."
    },
    {
        id: 5, mantra: 5, adhyaya: 1, theme: "Make Balls and Dry",
        sanskrit: "गोमूत्रेण संशोध्य पिण्डं कृत्वा शुचौ देशे शोषयेत् ।",
        hindi: "गोमूत्र से शोधित करके, पिंड (गोले) बनाकर, पवित्र स्थान में सुखाएं।",
        english: "Purify with cow urine, make balls, dry in clean place.",
        simpleExplanation: "PROCESS: Mix with urine, form balls, sun-dry in clean spot!",
        simpleExplanationHindi: "प्रक्रिया: मूत्र मिलाओ, गोले बनाओ, साफ जगह धूप में सुखाओ!",
        nanoBananaPrompt: "Making cow dung balls and drying in sun."
    },
    {
        id: 6, mantra: 6, adhyaya: 1, theme: "Burn in Sacred Fire",
        sanskrit: "शुष्काणि गृहीत्वा शिवाग्नौ जुहुयात् ।",
        hindi: "सूखे पिंडों को शिवाग्नि में हवन करें।",
        english: "Take dried balls, offer into Shiva-Agni (Sacred Fire).",
        simpleExplanation: "FIRE RITUAL: Burn dried dung balls in sacred Shiva fire!",
        simpleExplanationHindi: "अग्नि कर्म: सूखे गोले पवित्र शिव अग्नि में जलाओ!",
        nanoBananaPrompt: "Burning cow dung balls in sacred fire (Viraja Homa)."
    },
    {
        id: 7, mantra: 7, adhyaya: 1, theme: "Panchabrahma Mantras",
        sanskrit: "'अघोरेभ्यः' मन्त्रेण अघोरकुम्भे । 'तत्पुरुषाय' मन्त्रेण तत्पुरुषकुम्भे । 'ईशानः' मन्त्रेण ईशानकुम्भे ।",
        hindi: "'अघोरेभ्यः' से अघोर कुंभ में। 'तत्पुरुषाय' से तत्पुरुष में। 'ईशानः' से ईशान में।",
        english: "With Aghorebhyah, Tatpurushaya, Ishanah mantras into respective vessels.",
        simpleExplanation: "5 FACE MANTRAS: Use Shiva's five-face mantras while burning!",
        simpleExplanationHindi: "5 मुख मंत्र: जलाते समय शिव के पंचमुख मंत्र बोलो!",
        nanoBananaPrompt: "Chanting Panchabrahma mantras during fire ritual."
    },
    {
        id: 8, mantra: 8, adhyaya: 1, theme: "Collect Bhasma",
        sanskrit: "शान्तेऽग्नौ भस्म संगृह्य 'अग्निरिति भस्म' मन्त्रेण अभिमन्त्र्य ।",
        hindi: "अग्नि शांत होने पर भस्म संग्रह कर 'अग्निरिति भस्म' मंत्र से अभिमंत्रित करें।",
        english: "When fire cools, collect Bhasma, consecrate with 'Agniriti Bhasma' mantra.",
        simpleExplanation: "COLLECT ASH: When fire cools, gather ash, chant 'Fire-is-Ash' mantra!",
        simpleExplanationHindi: "भस्म लो: अग्नि ठंडी हो तो राख इकट्ठी करो, 'अग्निरिति भस्म' जपो!",
        nanoBananaPrompt: "Collecting consecrated ash after fire ritual."
    },
    {
        id: 9, mantra: 9, adhyaya: 1, theme: "Bhasma Snana (Ash Bath)",
        sanskrit: "'ईशानः' शिरसि । 'तत्पुरुषः' मुखे । 'अघोरः' हृदये । 'वामदेवः' गुह्ये । 'सद्योजातः' पादयोः ।",
        hindi: "'ईशानः' सिर पर। 'तत्पुरुषः' मुख पर। 'अघोरः' हृदय। 'वामदेवः' गुह्य। 'सद्योजातः' पैरों पर।",
        english: "Ishanah on head, Tatpurushah on face, Aghorah on heart, Vamadevah on genitals, Sadyojatah on feet.",
        simpleExplanation: "FULL BODY: Head=Ishana, Face=Tatpurusha, Heart=Aghora, Below=Vamadeva, Feet=Sadyojata!",
        simpleExplanationHindi: "पूरा शरीर: सिर=ईशान, मुख=तत्पुरुष, हृदय=अघोर, नीचे=वामदेव, पैर=सद्योजात!",
        nanoBananaPrompt: "Bhasma Snana—ash applied with five-face mantras."
    },
    {
        id: 10, mantra: 10, adhyaya: 2, theme: "Tripundra Question",
        sanskrit: "भगवन् त्रिपुण्ड्रविधिं ब्रूहीति ।",
        hindi: "भगवन्! त्रिपुण्ड्र (तीन रेखाओं) की विधि बताइए।",
        english: "O Lord! Tell the rule of Tripundra (three lines).",
        simpleExplanation: "NEXT QUESTION: How to apply the THREE LINES?",
        simpleExplanationHindi: "अगला प्रश्न: तीन रेखाएं कैसे लगाएं?",
        nanoBananaPrompt: "Asking about Tripundra—the three sacred lines."
    },
    {
        id: 11, mantra: 11, adhyaya: 2, theme: "17 Locations",
        sanskrit: "ललाटादि आसप्तदशस्थानेषु तिस्रो रेखाः कुर्यात् ।",
        hindi: "ललाट से 17 स्थानों पर तीन रेखाएं बनाएं।",
        english: "Draw three lines in 17 places starting with forehead.",
        simpleExplanation: "17 SPOTS: Forehead + 16 other body parts = Tripundra everywhere!",
        simpleExplanationHindi: "17 स्थान: माथा + 16 अन्य अंग = हर जगह त्रिपुण्ड्र!",
        nanoBananaPrompt: "Tripundra applied on 17 body locations."
    },
    {
        id: 12, mantra: 12, adhyaya: 2, theme: "Main Locations",
        sanskrit: "ललाटे कण्ठे स्कन्धयोर्हृदये नाभौ पार्श्वयोः पृष्ठे च ।",
        hindi: "माथे, गले, कंधों, हृदय, नाभि, पसलियों, पीठ पर।",
        english: "Forehead, neck, shoulders, heart, navel, sides, back.",
        simpleExplanation: "MAIN SPOTS: Forehead, Throat, Shoulders, Heart, Navel, Sides, Back!",
        simpleExplanationHindi: "मुख्य स्थान: माथा, गला, कंधे, हृदय, नाभि, पसलियां, पीठ!",
        nanoBananaPrompt: "Main locations for Tripundra application."
    },
    {
        id: 13, mantra: 13, adhyaya: 2, theme: "Trinity in Lines",
        sanskrit: "प्रथमा रेखा ब्रह्मा । द्वितीया रेखा विष्णुः । तृतीया रेखा सदाशिवः ।",
        hindi: "पहली रेखा = ब्रह्मा। दूसरी = विष्णु। तीसरी = सदाशिव।",
        english: "First line = Brahma. Second = Vishnu. Third = Sadasiva.",
        simpleExplanation: "THREE LINES = TRINITY: Line 1=Creator, Line 2=Preserver, Line 3=Destroyer!",
        simpleExplanationHindi: "तीन रेखाएं = त्रिमूर्ति: रेखा 1=ब्रह्मा, रेखा 2=विष्णु, रेखा 3=शिव!",
        nanoBananaPrompt: "Three lines representing Brahma, Vishnu, Shiva."
    },
    {
        id: 14, mantra: 14, adhyaya: 2, theme: "Daily Routine",
        sanskrit: "प्रातःकाले जलेन । मध्यन्दिनकाले चन्दनेन । सायंकाले भस्मना ।",
        hindi: "प्रातः जल से। दोपहर चंदन से। सायं भस्म से।",
        english: "Morning with Water. Noon with Sandalwood. Evening with Ash.",
        simpleExplanation: "DAILY SCHEDULE: Morning=Water, Noon=Sandal, Evening=ASH!",
        simpleExplanationHindi: "दैनिक कार्यक्रम: सुबह=जल, दोपहर=चंदन, शाम=भस्म!",
        nanoBananaPrompt: "Daily Tripundra routine—water, sandal, ash."
    },
    {
        id: 15, mantra: 15, adhyaya: 2, theme: "Sannyasi Rule",
        sanskrit: "विशेषतः संन्यासिनाम् भस्मना विना न किञ्चिद् कुर्यात् ।",
        hindi: "विशेषकर संन्यासी भस्म बिना कुछ न करें।",
        english: "Especially Sannyasins should do nothing without Ash.",
        simpleExplanation: "MONKS RULE: Sannyasis must use ASH for EVERYTHING!",
        simpleExplanationHindi: "संन्यासी नियम: संन्यासी हर चीज के लिए भस्म उपयोग करें!",
        nanoBananaPrompt: "Sannyasi doing all rituals with sacred ash."
    },
    {
        id: 16, mantra: 16, adhyaya: 2, theme: "Shiva Sayujya",
        sanskrit: "य एतद्भस्मजाबालं अधीयते स शिवसायुज्यमेति । न स पुनरावर्तते ।",
        hindi: "जो इसका अध्ययन करे वह शिव-सायुज्य प्राप्त करे। वह नहीं लौटता।",
        english: "He who studies this attains Union with Shiva. He does not return.",
        simpleExplanation: "FINAL FRUIT: Study this = MERGE WITH SHIVA! No rebirth!",
        simpleExplanationHindi: "अंतिम फल: इसका अध्ययन = शिव में विलय! पुनर्जन्म नहीं!",
        nanoBananaPrompt: "Attaining union with Shiva through Bhasma knowledge."
    }
];

export const BHASMA_JABALA_METADATA = {
    id: "bhasma-jabala", name: "Bhasma Jabala", nameSanskrit: "भस्मजाबालोपनिषद्",
    veda: "Atharva Veda", category: "Shaiva", shlokaCount: 16, adhyayas: 2, sequenceNumber: 50,
    bhasmaPreparation: ["Kapila cow dung", "Catch before ground", "Mix with urine", "Form balls", "Dry", "Burn with mantras", "Collect ash"],
    bhasmaSnana: { head: "Ishanah", face: "Tatpurushah", heart: "Aghorah", genitals: "Vamadevah", feet: "Sadyojatah", body: "OM" },
    tripundra: { locations: 17, lines: { first: "Brahma", second: "Vishnu", third: "Sadasiva" } },
    dailyRoutine: { morning: "Water", noon: "Sandalwood", evening: "Ash" }
};

export const getBhasmaJabalaMantra = (mantra: number) => BHASMA_JABALA_SHLOKAS.find(s => s.mantra === mantra);
