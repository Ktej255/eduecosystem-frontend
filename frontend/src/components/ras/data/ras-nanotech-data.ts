import { RASQuestion } from "./ras-2024-data-part1";

export const NANOTECH_NOTES = {
    title: "Nanotechnology: Comprehensive Overview",
    sections: [
        {
            heading: "1. Introduction",
            content: "Nanotechnology deals with manipulating materials at the atomic/molecular scale (1-100 nm). 1 nm = 10^-9 m. Term coined by Norio Taniguchi (1974). Origin traces back to Richard Feynman's 1959 lecture 'There is Plenty of Room at the Bottom'."
        },
        {
            heading: "2. Historical Timeline",
            points: [
                "1959: Richard Feynman's lecture.",
                "1974: Term 'Nanotechnology' defined by Norio Taniguchi.",
                "1985: Discovery of Fullerenes (Buckyballs) by Rice University scientists (Nobel 1996).",
                "1986: K. Eric Drexler published 'Engines of Creation'.",
                "1991: Sumio Iijima discovered Carbon Nanotubes (CNTs).",
                "2006: James Tour developed the 'Nano-car'."
            ]
        },
        {
            heading: "3. Approaches",
            content: "Top-Down (breaking bulk material, e.g., Nano powders) vs Bottom-Up (assembling atoms, e.g., Nano robots). Bottom-up is more complex but offers precise control."
        },
        {
            heading: "4. Key Materials",
            points: [
                "Graphene: Single carbon layer, thinnest/strongest material, conductor.",
                "Fullerenes (C60): Spherical, used in drug delivery/superconductors.",
                "Carbon Nanotubes (CNTs): Cylindrical, high strength, used in composites/displays.",
                "Quantum Dots: Semiconductor particles with unique optical properties (Solar cells, Imaging)."
            ]
        },
        {
            heading: "5. India's Nano Mission",
            content: "Launched 2007 (NSTM). Nodal Agency: DST. Headed by Prof. C.N.R. Rao. India ranks 3rd individually in nanoscience publications. Achievements include Centers of Excellence at IITs/IISc and Nano Urea (IFFCO)."
        }
    ]
};

export const NANOTECH_MCQS = [
    {
        id: 1001,
        question: {
            en: "Who coined the term 'Nanotechnology' in 1974?",
            hi: "1974 में 'नैनोप्रौद्योगिकी' (Nanotechnology) शब्द किसने गढ़ा था?"
        },
        options: {
            en: ["Richard Feynman", "Norio Taniguchi", "K. Eric Drexler", "Sumio Iijima"],
            hi: ["रिचर्ड फेनमैन", "नोरियो तानीगुची", "के. एरिक ड्रेक्सलर", "सुमियो आईजीमा"]
        },
        correctAnswer: 1,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "easy",
        explanation: {
            hi: "नोरियो तानीगुची ने 1974 में 'नैनोप्रौद्योगिकी' शब्द को परिभाषित किया था।"
        }
    },
    {
        id: 1002,
        question: {
            en: "Which approach creates nanomaterials by assembling them atom-by-atom?",
            hi: "कौन सा दृष्टिकोण परमाणु-दर-परमाणु (atom-by-atom) संयोजन करके नैनोसामग्री बनाता है?"
        },
        options: {
            en: ["Top-Down Approach", "Bottom-Up Approach", "Hybrid Approach", "Lithography"],
            hi: ["टॉप-डाउन दृष्टिकोण", "बॉटम-अप दृष्टिकोण", "हाइब्रिड दृष्टिकोण", "लिथोग्राफी"]
        },
        correctAnswer: 1,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "medium",
        explanation: {
            hi: "बॉटम-अप दृष्टिकोण में परमाणुओं या अणुओं को जोड़कर विशिष्ट संरचनाएं बनाई जाती हैं।"
        }
    },
    {
        id: 1003,
        question: {
            en: "What is 'Graphene'?",
            hi: "'ग्राफीन' (Graphene) क्या है?"
        },
        options: {
            en: ["A spherical carbon molecule", "A tailored nano-robot", "A single layer of carbon atoms in a hexagonal lattice", "A semiconductor quantum dot"],
            hi: ["एक गोलाकार कार्बन अणु", "एक विशेष नैनो-रोबोट", "हेक्सागोनल जालक में कार्बन परमाणुओं की एक एकल परत", "एक अर्धचालक क्वांटम डॉट"]
        },
        correctAnswer: 2,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "medium",
        explanation: {
            hi: "ग्राफीन कार्बन परमाणुओं की एक एकल परत है जो हेक्सागोनल जालक में व्यवस्थित होती है। यह सबसे पतला और मजबूत ज्ञात पदार्थ है।"
        }
    },
    {
        id: 1004,
        question: {
            en: "The 'Grey Goo' problem is associated with which potential risk of nanotechnology?",
            hi: "'ग्रे गू' (Grey Goo) समस्या नैनोप्रौद्योगिकी के किस संभावित जोखिम से जुड़ी है?"
        },
        options: {
            en: ["Toxicity of nanoparticles", "Self-replicating nanobots consuming matter", "High cost of production", "Privacy violation by nano-sensors"],
            hi: ["नैनोकणों की विषाक्तता", "स्व-प्रतिकृति (self-replicating) नैनोबॉट्स द्वारा पदार्थ का उपभोग", "उत्पादन की उच्च लागत", "नैनो-सेंसर द्वारा गोपनीयता का उल्लंघन"]
        },
        correctAnswer: 1,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "hard",
        explanation: {
            hi: "'ग्रे गू' एक काल्पनिक परिदृश्य है जहां स्व-प्रतिकृति करने वाले नैनोबॉट्स नियंत्रण से बाहर हो जाते हैं और पृथ्वी पर सभी पदार्थों का उपभोग कर लेते हैं।"
        }
    },
    {
        id: 1005,
        question: {
            en: "Which Indian organization launched the 'Nano Urea'?",
            hi: "किस भारतीय संगठन ने 'नैनो यूरिया' (Nano Urea) लॉन्च किया?"
        },
        options: {
            en: ["DRDO", "ISRO", "IFFCO", "CSIR"],
            hi: ["डीआरडीओ (DRDO)", "इसरो (ISRO)", "इफको (IFFCO)", "सीएसआईआर (CSIR)"]
        },
        correctAnswer: 2,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "medium",
        explanation: {
            hi: "IFFCO (इंडियन फार्मर्स फर्टिलाइजर को Cooperative लिमिटेड) ने दुनिया का पहला तरल नैनो यूरिया विकसित किया है।"
        }
    },
    {
        id: 1006,
        question: {
            en: "Quantum Dots are primarily used in which of the following?",
            hi: "क्दांटम डॉट्स (Quantum Dots) का उपयोग मुख्य रूप से निम्नलिखित में से किसमें किया जाता है?"
        },
        options: {
            en: ["Water purification", "Solar cells and Medical imaging", "Bulletproof vests", "Food packaging"],
            hi: ["जल शोधन", "सौर सेल और मेडिकल इमेजिंग", "बुलेटप्रूफ जैकेट", "खाद्य पैकेजिंग"]
        },
        correctAnswer: 1,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "medium",
        explanation: {
            hi: "क्दांटम डॉट्स अर्धचालक नैनोकण हैं जिनका उपयोग उनके अद्वितीय ऑप्टिकल गुणों के कारण सौर सेल और मेडिकल इमेजिंग (कैंसर का पता लगाने) में किया जाता है।"
        }
    },
    {
        id: 1007,
        question: {
            en: "Who heads the Nano Science and Technology Mission (NSTM) of India?",
            hi: "भारत के नैनो विज्ञान और प्रौद्योगिकी मिशन (NSTM) का नेतृत्व कौन करता है?"
        },
        options: {
            en: ["Prof. C.N.R. Rao", "Dr. K. Sivan", "Dr. R. Chidambaram", "Prof. Ashutosh Sharma"],
            hi: ["प्रो. सी.एन.आर. राव", "डॉ. के. सिवन", "डॉ. आर. चिदंबरम", "प्रो. आशुतोष शर्मा"]
        },
        correctAnswer: 0,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "medium",
        explanation: {
            hi: "प्रो. सी.एन.आर. राव भारत के नैनो मिशन और वैज्ञानिक सलाहकार परिषद के प्रमुख रहे हैं।"
        }
    },
    {
        id: 1008,
        question: {
            en: "Carbon Nanotubes (CNTs) were discovered by:",
            hi: "कार्बन नैनोट्यूब (CNTs) की खोज किसके द्वारा की गई थी?"
        },
        options: {
            en: ["Richard Feynman", "Harold Kroto", "Sumio Iijima", "Eric Drexler"],
            hi: ["रिचर्ड फेनमैन", "हेरोल्ड क्रोटो", "सुमियो आईजीमा", "एरिक ड्रेक्सलर"]
        },
        correctAnswer: 2,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "hard",
        explanation: {
            hi: "जापानी वैज्ञानिक सुमियो आईजीमा ने 1991 में कार्बन नैनोट्यूब की खोज की थी।"
        }
    },
    {
        id: 1009,
        question: {
            en: "Bio-NEMS (Bio-Nano-Electro-Mechanical Systems) refers to:",
            hi: "Bio-NEMS (बायो-नैनो-इलेक्ट्रो-मैकेनिकल सिस्टम) किसे संदर्भित करता है?"
        },
        options: {
            en: ["Nano-fertilizers", "Nano-robots for cellular surgery", "Nano-textiles", "Nano-filters for air"],
            hi: ["नैनो-उर्वरक", "सेलुलर सर्जरी के लिए नैनो-रोबोट", "नैनो-कपड़ा", "हवा के लिए नैनो-फिल्टर"]
        },
        correctAnswer: 1,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "hard",
        explanation: {
            hi: "Bio-NEMS नैनो-रोबोट को संदर्भित करता है जो बिना चीरा लगाए सेलुलर स्तर पर सर्जरी करने/कैंसर कोशिकाओं को नष्ट करने में सक्षम हैं।"
        }
    },
    {
        id: 1010,
        question: {
            en: "What is the primary nodal agency for the Nano Mission in India?",
            hi: "भारत में नैनो मिशन के लिए प्राथमिक नोडल एजेंसी कौन सी है?"
        },
        options: {
            en: ["DRDO", "Department of Space", "Department of Science and Technology (DST)", "Department of Biotechnology"],
            hi: ["डीआरडीओ", "अंतरिक्ष विभाग", "विज्ञान और प्रौद्योगिकी विभाग (DST)", "जैव प्रौद्योगिकी विभाग"]
        },
        correctAnswer: 2,
        topic: "Science & Technology",
        subtopic: "Nanotechnology",
        difficulty: "medium",
        explanation: {
            hi: "विज्ञान और प्रौद्योगिकी विभाग (DST) नैनो मिशन (NSTM) के कार्यान्वयन के लिए नोडल एजेंसी है जिसे 2007 में लॉन्च किया गया था।"
        }
    }
];

export const NANOTECH_FLASHCARDS = [
    {
        id: "nt-1",
        front: "Nanotechnology Scale",
        back: "1 to 100 nanometers. 1 nm = 10^-9 meters.",
        category: "Science"
    },
    {
        id: "nt-2",
        front: "Top-Down Approach",
        back: "Breaking down bulk material into nano-sized particles (e.g., Nano powders). Simpler but less control.",
        category: "Science"
    },
    {
        id: "nt-3",
        front: "Bottom-Up Approach",
        back: "Assembling materials atom-by-atom. More complex, highly effective (e.g., Nano robots).",
        category: "Science"
    },
    {
        id: "nt-4",
        front: "First Nano Lecture (1959)",
        back: "\"There is Plenty of Room at the Bottom\" by Richard Feynman.",
        category: "History"
    },
    {
        id: "nt-5",
        front: "Fullerenes",
        back: "Spherical cage-like carbon molecules (C60/Buckyballs). Used in drug delivery & superconductors.",
        category: "Materials"
    },
    {
        id: "nt-6",
        front: "NSTM Launch Year",
        back: "2007 (Nano Science and Technology Mission), India.",
        category: "India"
    },
    {
        id: "nt-7",
        front: "Grey Goo",
        back: "Hypothetical doomsday scenario where self-replicating nanobots consume all matter.",
        category: "Risks"
    },
    {
        id: "nt-8",
        front: "Nano Urea",
        back: "Developed by IFFCO. Liquid fertilizer increasing efficiency and reducing traditional urea use by 50%.",
        category: "Agriculture"
    }
];
