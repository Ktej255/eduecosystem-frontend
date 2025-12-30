// Yogatattva Upanishad Data (#41 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Yoga
// Theme: Four Types of Yoga, Ashtanga, Pancha Bhuta Dharana, Siddhis
// Total: 142 Mantras (Key sections extracted)

interface WordMeaning { sanskrit: string; devanagari: string; hindi: string; english: string; }

export interface YogatattvaDataEntry {
    id: number; mantra: number; theme: string;
    sanskrit: string; hindi: string; english: string;
    simpleExplanation: string; simpleExplanationHindi: string;
    nanoBananaPrompt: string; wordMeanings?: WordMeaning[];
}

export const YOGATATTVA_SHANTI_MANTRA = {
    sanskrit: "ॐ सह नाववतु । ॐ शान्तिः शान्तिः शान्तिः ॥",
    hindi: "ॐ! हम दोनों की रक्षा करे। शांति।",
    english: "OM! May He protect us both. OM Peace."
};

export const YOGATATTVA_SHLOKAS: YogatattvaDataEntry[] = [
    {
        id: 1, mantra: 1, theme: "Vishnu Teaches Brahma",
        sanskrit: "योगतत्त्वं प्रवक्ष्यामि योगिनां हितकाम्यया ।",
        hindi: "योगियों के हित के लिए योग-तत्व का वर्णन करूँगा।",
        english: "For the benefit of Yogis, I shall describe the Essence of Yoga.",
        simpleExplanation: "YOGA TATTVA: The ESSENCE of Yoga explained by Vishnu to Brahma!",
        simpleExplanationHindi: "योग तत्व: विष्णु द्वारा ब्रह्मा को समझाया योग का सार!",
        nanoBananaPrompt: "Vishnu teaching Brahma the essence of Yoga."
    },
    {
        id: 2, mantra: 4, theme: "Yoga + Jnana Required",
        sanskrit: "योगहीनं कथं ज्ञानं मोक्षदं भवति । योगो हि ज्ञानहीनस्तु न क्षमो मोक्षकर्मणि ॥",
        hindi: "योग बिना ज्ञान मोक्षदायी कैसे? ज्ञान बिना योग भी मोक्ष नहीं देता।",
        english: "How can Knowledge without Yoga grant liberation? Yoga without Knowledge cannot either.",
        simpleExplanation: "BOTH NEEDED: Yoga alone = incomplete. Jnana alone = incomplete. Need BOTH!",
        simpleExplanationHindi: "दोनों चाहिए: अकेला योग = अधूरा। अकेला ज्ञान = अधूरा। दोनों चाहिए!",
        nanoBananaPrompt: "Yoga and Jnana as two wings needed for liberation."
    },
    {
        id: 3, mantra: 19, theme: "Four Types of Yoga",
        sanskrit: "योगो हि बहुधा भिद्यते । मन्त्रयोगो लयश्चैव हठोऽसौ राजयोगतः ॥",
        hindi: "योग चार प्रकार: मंत्र योग, लय योग, हठ योग, राज योग।",
        english: "Yoga is four types: Mantra Yoga, Laya Yoga, Hatha Yoga, Raja Yoga.",
        simpleExplanation: "4 YOGAS: 1. Mantra 2. Laya (Absorption) 3. Hatha (Force) 4. Raja (King)!",
        simpleExplanationHindi: "4 योग: 1. मंत्र 2. लय (विलय) 3. हठ (बल) 4. राज (राजा)!",
        nanoBananaPrompt: "Four types of Yoga branching from one source.",
        wordMeanings: [
            { sanskrit: "mantra", devanagari: "मन्त्र", hindi: "मंत्र", english: "sacred formula" },
            { sanskrit: "laya", devanagari: "लय", hindi: "विलय", english: "absorption" },
            { sanskrit: "haṭha", devanagari: "हठ", hindi: "बल", english: "force" },
            { sanskrit: "rāja", devanagari: "राज", hindi: "राजा", english: "king" }
        ]
    },
    {
        id: 4, mantra: 23, theme: "Ashtanga Yoga",
        sanskrit: "यमश्च नियमश्चैव आसनं प्राणसंयमः । प्रत्याहारो धारणा च ध्यानं समाधिः अष्टाङ्गो योग उच्यते ॥",
        hindi: "यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, समाधि = अष्टांग योग।",
        english: "Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi = Eight Limbs.",
        simpleExplanation: "8 LIMBS: Restraint, Observance, Posture, Breath, Withdrawal, Focus, Meditation, Union!",
        simpleExplanationHindi: "8 अंग: यम, नियम, आसन, प्राण, प्रत्याहार, धारणा, ध्यान, समाधि!",
        nanoBananaPrompt: "Eight limbs of Yoga ascending like a ladder."
    },
    {
        id: 5, mantra: 41, theme: "Three Signs of Progress",
        sanskrit: "कनिष्ठो भवेत् स्वेदः कम्पो भवति मध्यमे । उत्तमे स्थानमाप्नोति ॥",
        hindi: "कनिष्ठ = पसीना। मध्यम = कंपन। उत्तम = उत्थान (Levitation)।",
        english: "Lowest = Perspiration. Middle = Trembling. Highest = Levitation.",
        simpleExplanation: "3 SIGNS: Beginner = Sweat. Middle = Shake. Master = FLOAT!",
        simpleExplanationHindi: "3 चिह्न: शुरुआती = पसीना। मध्यम = कंपन। उस्ताद = उड़ना!",
        nanoBananaPrompt: "Three stages—sweating, trembling, levitating."
    },
    {
        id: 6, mantra: 54, theme: "Pratyahara Definition",
        sanskrit: "इन्द्रियाणां बलादाहरणं तेषां प्रत्याहारः उच्यते ।",
        hindi: "इन्द्रियों को विषयों से बलपूर्वक खींचना = प्रत्याहार।",
        english: "Forcibly withdrawing senses from objects = Pratyahara.",
        simpleExplanation: "PRATYAHARA = FORCE WITHDRAWAL! Pull senses back from objects!",
        simpleExplanationHindi: "प्रत्याहार = बलपूर्वक वापसी! इन्द्रियों को विषयों से खींचो!",
        nanoBananaPrompt: "Senses being withdrawn like turtle into shell."
    },
    {
        id: 7, mantra: 60, theme: "Early Siddhis",
        sanskrit: "दूरश्रुतिर्दूरदृष्टिः अदृश्यकरणम् ।",
        hindi: "दूर-श्रवण, दूर-दृष्टि, अदृश्य होना।",
        english: "Clairaudience, Clairvoyance, Invisibility.",
        simpleExplanation: "SIDDHIS EMERGE: Distant hearing, Distant seeing, BECOMING INVISIBLE!",
        simpleExplanationHindi: "सिद्धियां उभरती हैं: दूर सुनना, दूर देखना, अदृश्य होना!",
        nanoBananaPrompt: "Yogi gaining clairvoyance and invisibility powers."
    },
    {
        id: 8, mantra: 84, theme: "Earth Dharana - Lam",
        sanskrit: "पृथिवी हेमप्रख्या ल-कारम् । पञ्चघटी धारयेत् । पृथिवीजयी भवति ।",
        hindi: "पृथ्वी = सोने जैसा, 'ल' बीज। 5 घटी धारणा = पृथ्वी विजय।",
        english: "Earth = Gold color, 'Lam' seed. Hold 5 Ghatis = Conquer Earth.",
        simpleExplanation: "EARTH (LAM): Meditate on GOLD, chant LAM = Earth cannot kill you!",
        simpleExplanationHindi: "पृथ्वी (लं): सोने पर ध्यान, लं जपो = पृथ्वी तुम्हें नहीं मार सकती!",
        nanoBananaPrompt: "Earth element—golden, Lam seed mantra."
    },
    {
        id: 9, mantra: 85, theme: "Water Dharana - Vam",
        sanskrit: "आपः कुन्देन्दुधवलाः व-कारम् । आप्नुयाज्जलजयम् ।",
        hindi: "जल = चांदी/सफेद, 'व' बीज। जल विजय।",
        english: "Water = White/Moon, 'Vam' seed. Conquer Water.",
        simpleExplanation: "WATER (VAM): Meditate on WHITE, chant VAM = Cannot drown!",
        simpleExplanationHindi: "जल (वं): सफेद पर ध्यान, वं जपो = डूब नहीं सकते!",
        nanoBananaPrompt: "Water element—white like moon, Vam seed."
    },
    {
        id: 10, mantra: 87, theme: "Fire Dharana - Ram",
        sanskrit: "वह्निः इन्द्रगोपसंकाशः र-कारम् । न वह्निना दाहः ।",
        hindi: "अग्नि = लाल, 'र' बीज। आग नहीं जलाती।",
        english: "Fire = Red, 'Ram' seed. Fire cannot burn.",
        simpleExplanation: "FIRE (RAM): Meditate on RED, chant RAM = Fire cannot burn you!",
        simpleExplanationHindi: "अग्नि (रं): लाल पर ध्यान, रं जपो = आग जला नहीं सकती!",
        nanoBananaPrompt: "Fire element—red, Ram seed mantra."
    },
    {
        id: 11, mantra: 89, theme: "Air Dharana - Yam",
        sanskrit: "वायुः भिन्नाञ्जननिभः य-कारम् । वायुजयी ।",
        hindi: "वायु = काजल जैसा, 'य' बीज। वायु विजय (उड़ना)।",
        english: "Air = Smoke/Black, 'Yam' seed. Conquer Air (Levitate).",
        simpleExplanation: "AIR (YAM): Meditate on SMOKE, chant YAM = You can FLY!",
        simpleExplanationHindi: "वायु (यं): धुएं पर ध्यान, यं जपो = तुम उड़ सकते हो!",
        nanoBananaPrompt: "Air element—smoke-colored, Yam seed, levitation."
    },
    {
        id: 12, mantra: 91, theme: "Space Dharana - Ham",
        sanskrit: "आकाशं स्वच्छतोयवत् ह-कारम् । न तस्य पातः ।",
        hindi: "आकाश = नीला/पारदर्शी, 'ह' बीज। पतन नहीं।",
        english: "Ether = Clear/Blue, 'Ham' seed. Cannot fall.",
        simpleExplanation: "SPACE (HAM): Meditate on BLUE/CLEAR, chant HAM = Cannot fall from sky!",
        simpleExplanationHindi: "आकाश (हं): नीले पर ध्यान, हं जपो = आकाश से गिर नहीं सकते!",
        nanoBananaPrompt: "Space element—crystal clear, Ham seed."
    },
    {
        id: 13, mantra: 99, theme: "Eight Great Siddhis",
        sanskrit: "अणिमा महिमा गरिमा लघिमा प्राप्तिः प्राकाम्यमीशित्वं वशित्वं चाष्टसिद्धयः ॥",
        hindi: "अणिमा, महिमा, गरिमा, लघिमा, प्राप्ति, प्राकाम्य, ईशित्व, वशित्व = अष्ट सिद्धियां।",
        english: "Anima, Mahima, Garima, Laghima, Prapti, Prakamya, Ishitva, Vashitva = Eight Siddhis.",
        simpleExplanation: "8 POWERS: Tiny, Huge, Heavy, Light, Get anything, Will anything, Control, Master!",
        simpleExplanationHindi: "8 शक्तियां: छोटा, विशाल, भारी, हल्का, पाना, इच्छा, नियंत्रण, स्वामित्व!",
        nanoBananaPrompt: "Eight Siddhis radiating from a yogi."
    },
    {
        id: 14, mantra: 112, theme: "Final Choice",
        sanskrit: "यदिच्छेत् देहमुत्स्रष्टुं परब्रह्मणि लीयते । नो चेत् खेचरो भूत्वा विहरेत् ।",
        hindi: "देह त्यागना चाहे तो ब्रह्म में विलय। नहीं तो खेचर होकर विचरो।",
        english: "To drop body = merge in Brahman. Else = become Sky-walker and roam.",
        simpleExplanation: "FINAL CHOICE: Die = merge in Brahman. Stay = become FLYING BEING!",
        simpleExplanationHindi: "अंतिम चुनाव: मरो = ब्रह्म में विलय। रहो = उड़ने वाले बनो!",
        nanoBananaPrompt: "Yogi choosing between merging in Brahman or becoming a Khechara."
    },
    {
        id: 15, mantra: 141, theme: "Just Practice",
        sanskrit: "यावन्नैव प्रविशति मरुन्मध्यमार्गे तावत्किं ज्ञानकथया । अभ्यासः क्रियते ॥",
        hindi: "जब तक प्राण सुषुम्ना में नहीं, ज्ञान बातों का क्या लाभ? अभ्यास करो।",
        english: "Until Prana enters Sushumna, what use is talking knowledge? PRACTICE!",
        simpleExplanation: "STOP TALKING, START DOING! All theory useless until Prana enters center!",
        simpleExplanationHindi: "बातें बंद करो, करना शुरू करो! प्राण केंद्र में आने तक सब सिद्धांत व्यर्थ!",
        nanoBananaPrompt: "Message: Stop talking—practice until Prana enters Sushumna."
    }
];

export const YOGATATTVA_METADATA = {
    id: "yogatattva", name: "Yogatattva", nameSanskrit: "योगतत्त्वोपनिषद्",
    veda: "Krishna Yajur Veda", category: "Yoga", shlokaCount: 15, fullVerseCount: 142, sequenceNumber: 41,
    fourYogas: ["Mantra Yoga", "Laya Yoga", "Hatha Yoga", "Raja Yoga"],
    ashtanga: ["Yama", "Niyama", "Asana", "Pranayama", "Pratyahara", "Dharana", "Dhyana", "Samadhi"],
    panchaBhutaDharana: [
        { element: "Earth", color: "Gold", bija: "Lam", location: "Heart" },
        { element: "Water", color: "White", bija: "Vam", location: "Throat" },
        { element: "Fire", color: "Red", bija: "Ram", location: "Palate" },
        { element: "Air", color: "Smoke", bija: "Yam", location: "Nose-tip" },
        { element: "Ether", color: "Clear", bija: "Ham", location: "Eyebrow" }
    ],
    ashtaSiddhis: ["Anima", "Mahima", "Garima", "Laghima", "Prapti", "Prakamya", "Ishitva", "Vashitva"]
};

export const getYogatattvaMantra = (mantra: number) => YOGATATTVA_SHLOKAS.find(s => s.mantra === mantra);
