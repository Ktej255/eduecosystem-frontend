export interface MainsQuestion {
    id: string;
    paper: string; // "Paper I", "Paper II", etc.
    subject: string;
    topic: string;
    marks: number;
    wordLimit: number;
    question: {
        en: string;
        hi: string;
    };
    keyPoints: {
        en: string[];
        hi: string[];
    };
    modelAnswer?: {
        en: string;
        hi: string;
    }
}

export const RAS_MAINS_QUESTIONS: MainsQuestion[] = [
    {
        id: "Q1",
        paper: "Paper II",
        subject: "Science & Technology",
        topic: "Nano Technology",
        marks: 10,
        wordLimit: 100,
        question: {
            en: "Discuss the potential applications of Nanotechnology in the field of medicine and health care.",
            hi: "चिकित्सा और स्वास्थ्य देखभाल के क्षेत्र में नैनो तकनीक के संभावित अनुप्रयोगों पर चर्चा करें।"
        },
        keyPoints: {
            en: [
                "Targeted Drug Delivery (Nanobots)",
                "Early Disease Detection (Nanosensors)",
                "Tissue Engineering",
                "Antimicrobial Coatings (Silver Nanoparticles)",
                "Cancer Treatment (Hyperthermia)"
            ],
            hi: [
                "लक्षित दवा वितरण (नैनोबॉट्स)",
                "प्रारंभिक रोग का पता लगाना (नैनोसेंसर)",
                "ऊतक इंजीनियरिंग",
                "रोगाणुरोधी कोटिंग्स (चांदी नैनोकण)",
                " कैंसर उपचार (हाइपरथर्मिया)"
            ]
        }
    },
    {
        id: "Q2",
        paper: "Paper II",
        subject: "Science & Technology",
        topic: "Space Technology",
        marks: 5,
        wordLimit: 50,
        question: {
            en: "What is the difference between PSLV and GSLV launch vehicles?",
            hi: "PSLV और GSLV प्रक्षेपण यानों के बीच क्या अंतर है?"
        },
        keyPoints: {
            en: [
                "PSLV: Polar Satellite Launch Vehicle (4 stages)",
                "GSLV: Geosynchronous Satellite Launch Vehicle (3 stages with Cryogenic)",
                "Payload Capacity difference",
                "Orbit types (Pole-to-Pole vs Geostationary)"
            ],
            hi: [
                "PSLV: ध्रुवीय उपग्रह प्रक्षेपण यान (4 चरण)",
                "GSLV: भू-समकालिक उपग्रह प्रक्षेपण यान (क्रायोजेनिक सहित 3 चरण)",
                "पेलोड क्षमता में अंतर",
                "कक्षा के प्रकार (ध्रुव-से-ध्रुव बनाम भूस्थैतिक)"
            ]
        }
    },
    {
        id: "Q3",
        paper: "Paper I",
        subject: "History",
        topic: "Rajasthan Culture",
        marks: 2,
        wordLimit: 15,
        question: {
            en: "Name two folk deities (Lok Devta) of Rajasthan worshipped as 'Panch Pir'.",
            hi: "राजस्थान के किन्हीं दो लोक देवताओं के नाम बताइए जिन्हें 'पंच पीर' के रूप में पूजा जाता है।"
        },
        keyPoints: {
            en: [
                "Ramdevji",
                "Gogaji",
                "PabuJi",
                "HadbuJi",
                "Mangalia MehaJi"
            ],
            hi: [
                "रामदेवजी",
                "गोगाजी",
                "पाबूजी",
                "हड़बूजी",
                "मेहाजी मांगलिया"
            ]
        }
    }
];
