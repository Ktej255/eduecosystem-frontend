import { Node, Edge } from '@xyflow/react';

export interface StepData {
    stepId: number;
    title: { en: string; hi: string };
    nodes: Node[];
    edges: Edge[];
}

export const STEP_VISUAL_DATA: Record<number, StepData> = {
    1: {
        stepId: 1,
        title: { en: "The Origin of Mantras", hi: "मंत्रों की उत्पत्ति" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Shiva's Mahatandava", titleHi: "शिव का महातांडव", descEn: "The primordial cosmic dance of creation and destruction.", descHi: "सृष्टि और विनाश का आदि लौकिक नृत्य।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "The Damaru", titleHi: "डमरू", descEn: "The divine instrument originating 70 million core sounds.", descHi: "7 करोड़ मूल ध्वनियों को उत्पन्न करने वाला दिव्य वाद्य यंत्र।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "14 Maheshvara Sutras", titleHi: "14 महेश्वर सूत्र", descEn: "The 57 letters forming the foundation of the Sanskrit language.", descHi: "संस्कृत भाषा के 57 अक्षरों का आधार।" } },

            { id: '4', type: 'custom', position: { x: 0, y: 450 }, data: { titleEn: "The 5 Elements", titleHi: "पंचतत्व", descEn: "Earth, Water, Fire, Wind, and Space (Prithvi, Jala, Tej, Vayu, Akash).", descHi: "पृथ्वी, जल, तेज, वायु, आकाश।" } },
            { id: '5', type: 'custom', position: { x: 250, y: 450 }, data: { titleEn: "The 3 Modes", titleHi: "त्रिगुण", descEn: "Sattva (Purity), Rajas (Action), Tamas (Ignorance).", descHi: "सत्त्व, रजस, तमस।" } },
            { id: '6', type: 'custom', position: { x: 500, y: 450 }, data: { titleEn: "The 4 Aspects of Mind", titleHi: "मन के 4 पहलू", descEn: "Manas, Buddhi, Citta, Ahamkara.", descHi: "मन, बुद्धि, चित्त, अहंकार।" } },

            { id: '7', type: 'custom', position: { x: 250, y: 600 }, data: { titleEn: "Kula-Akula Vichar", titleHi: "कुल-अकुल विचार", descEn: "Matching the elemental nature of the mantra to the practitioner.", descHi: "मंत्र की तत्वीय प्रकृति को साधक से मिलाना।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e3-5', source: '3', target: '5', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e3-6', source: '3', target: '6', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e4-7', source: '4', target: '7', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    2: {
        stepId: 2,
        title: { en: "Mantra Sadhana", hi: "मंत्र साधना" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Sonic Energy Inheritance", titleHi: "ध्वनि ऊर्जा विरासत", descEn: "Receiving the accumulated energy from previous masters of the lineage.", descHi: "परंपरा के पूर्व आचार्यों से संचित ऊर्जा प्राप्त करना।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Intense Utterance", titleHi: "तीव्र उच्चारण", descEn: "Practicing until your very being reverberates with the sound.", descHi: "तब तक अभ्यास करना जब तक आपका अस्तित्व ही ध्वनि से गूंज न उठे।" } },
            { id: '3', type: 'custom', position: { x: 0, y: 300 }, data: { titleEn: "Guru-Disciple Bond", titleHi: "गुरु-शिष्य बंधन", descEn: "The vital channel for authentic mantra transmission.", descHi: "प्रामाणिक मंत्र संचरण के लिए महत्वपूर्ण माध्यम।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 300 }, data: { titleEn: "Karma Synergy", titleHi: "कर्म तालमेल", descEn: "Mantras are not a substitute for doing the right earthly work.", descHi: "मंत्र सही सांसारिक कर्म का विकल्प नहीं हैं।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    3: {
        stepId: 3,
        title: { en: "Do Mantras Work?", hi: "क्या मंत्र काम करते हैं?" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "The 45th Sadhana", titleHi: "45वीं साधना", descEn: "The author's intensive 45th invocation at a mountain temple.", descHi: "एक पहाड़ी मंदिर में लेखक का गहन 45वां आह्वान।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Daily Routine", titleHi: "दिनचर्या", descEn: "2:30 AM wake up, 6-hour morning chant, midnight yajna.", descHi: "सुबह 2:30 बजे उठना, 6 घंटे सुबह का जप, आधी रात का यज्ञ।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Spiritual Markers", titleHi: "आध्यात्मिक संकेत", descEn: "Visions and encounters test resolve (e.g., snake encounters).", descHi: "दर्शन और मुठभेड़ संकल्प का परीक्षण करते हैं (जैसे, सांपों का सामना)।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Natural Fearlessness", titleHi: "सहज निडरता", descEn: "The ultimate symptom of genuine mantra siddhi.", descHi: "प्रामाणिक मंत्र सिद्धि का अंतिम लक्षण।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    4: {
        stepId: 4,
        title: { en: "Devotion and Faith", hi: "भक्ति और श्रद्धा" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "16 Critical Factors", titleHi: "16 महत्वपूर्ण कारक", descEn: "The complete checklist for mantra siddhi.", descHi: "मंत्र सिद्धि के लिए पूरी चेकलिस्ट।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Bhakti (Devotion)", titleHi: "भक्ति", descEn: "Emotional surrender to the chosen deity.", descHi: "इष्ट देवता के प्रति भावनात्मक समर्पण।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Shraddha (Faith)", titleHi: "श्रद्धा", descEn: "Unshakeable belief in the mantra's power.", descHi: "मंत्र की शक्ति में अटूट विश्वास।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Virya (Vigor)", titleHi: "वीर्य", descEn: "Mental and physical stamina for sustained practice.", descHi: "निरंतर अभ्यास के लिए मानसिक और शारीरिक सहनशक्ति।" } },
            { id: '5', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "The Triad of Success", titleHi: "सफलता का त्रिक", descEn: "Bhakti + Shraddha + Virya = Mantra Siddhi.", descHi: "भक्ति + श्रद्धा + वीर्य = मंत्र सिद्धि।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    5: {
        stepId: 5,
        title: { en: "Initiation", hi: "दीक्षा" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "4 Pillars of Sadhana", titleHi: "साधना के 4 स्तंभ", descEn: "Guru, Mantra, Devata, Sadhak — the essential quartet.", descHi: "गुरु, मंत्र, देवता, साधक — आवश्यक चतुर्थी।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Types of Gurus", titleHi: "गुरु के प्रकार", descEn: "Bodha, Vihita, Mantra-prada, Ishta.", descHi: "बोध, विहित, मंत्रप्रद, इष्ट।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Guru Examination", titleHi: "गुरु परीक्षण", descEn: "12 months of mutual observation before initiation.", descHi: "दीक्षा से पहले 12 महीने का पारस्परिक अवलोकन।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Diksha Ceremony", titleHi: "दीक्षा समारोह", descEn: "The formal transmission of mantra from Guru.", descHi: "गुरु से मंत्र का औपचारिक संचरण।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    6: {
        stepId: 6,
        title: { en: "Tenets of Discipleship", hi: "शिष्यत्व के सिद्धांत" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "10 Commandments", titleHi: "10 आज्ञाएँ", descEn: "The comprehensive code of conduct for a sincere disciple.", descHi: "एक सच्चे शिष्य के लिए व्यापक आचार संहिता।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Totakacharya's Story", titleHi: "तोटकाचार्य की कहानी", descEn: "How Shankara's dullest student became a master through pure devotion.", descHi: "शंकराचार्य का सबसे मंद शिष्य शुद्ध भक्ति से कैसे आचार्य बना।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Student-Guru Duties", titleHi: "शिष्य-गुरु कर्तव्य", descEn: "Service, obedience, trust — but also discernment.", descHi: "सेवा, आज्ञापालन, विश्वास — लेकिन विवेक भी।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    7: {
        stepId: 7,
        title: { en: "Daily Duties of an Adept", hi: "साधक के दैनिक कर्तव्य" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "9 Daily Steps", titleHi: "9 दैनिक चरण", descEn: "From waking at Brahma Muhurta to retiring at night.", descHi: "ब्रह्म मुहूर्त में जागने से लेकर रात को सोने तक।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "10 Dos", titleHi: "10 करणीय", descEn: "Positive habits for sattvic living.", descHi: "सात्विक जीवन के लिए सकारात्मक आदतें।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "10 Don'ts", titleHi: "10 अकरणीय", descEn: "Prohibitions that protect practice integrity.", descHi: "साधना की अखंडता की रक्षा करने वाले निषेध।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Earning Rightly", titleHi: "सही कमाई", descEn: "7 moral means of livelihood permitted during sadhana.", descHi: "साधना के दौरान अनुमत 7 नैतिक आजीविका साधन।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    8: {
        stepId: 8,
        title: { en: "Six Limbs of a Mantra", hi: "मंत्र के छह अंग (षडंग)" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Shadanga", titleHi: "षडंग", descEn: "Every mantra has 6 structural components.", descHi: "हर मंत्र में 6 संरचनात्मक घटक होते हैं।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Rishi (Seer)", titleHi: "ऋषि", descEn: "The original seer who cognized the mantra.", descHi: "मंत्र का मूल द्रष्टा ऋषि।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Chanda (Meter)", titleHi: "छंद", descEn: "The rhythmic meter governing pronunciation.", descHi: "उच्चारण का लयबद्ध छंद।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Devata (Deity)", titleHi: "देवता", descEn: "The presiding deity of the mantra.", descHi: "मंत्र के अधिष्ठाता देवता।" } },
            { id: '5', type: 'custom', position: { x: 0, y: 300 }, data: { titleEn: "Bija (Seed)", titleHi: "बीज", descEn: "The seed syllable containing the mantra's essence.", descHi: "मंत्र का सार रखने वाला बीज अक्षर।" } },
            { id: '6', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Shakti (Power)", titleHi: "शक्ति", descEn: "The inherent energy that activates the mantra.", descHi: "मंत्र को सक्रिय करने वाली अंतर्निहित ऊर्जा।" } },
            { id: '7', type: 'custom', position: { x: 500, y: 300 }, data: { titleEn: "Kilaka (Lock)", titleHi: "कीलक", descEn: "The lock that must be unlocked through practice.", descHi: "वह ताला जो अभ्यास से खुलना चाहिए।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-5', source: '1', target: '5', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-6', source: '1', target: '6', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-7', source: '1', target: '7', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    9: {
        stepId: 9,
        title: { en: "Selecting the Right Mantra", hi: "सही मंत्र का चयन" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Kula-Akula Chakra", titleHi: "कुल-अकुल चक्र", descEn: "The wheel of elemental compatibility.", descHi: "तात्विक अनुकूलता का चक्र।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Practitioner's Element", titleHi: "साधक का तत्व", descEn: "Determined from name, zodiac, and nakshatra.", descHi: "नाम, राशि और नक्षत्र से निर्धारित।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Mantra's Element", titleHi: "मंत्र का तत्व", descEn: "Calculated from the seed syllable.", descHi: "बीज अक्षर से गणना।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Compatibility Result", titleHi: "अनुकूलता परिणाम", descEn: "Friend, Neutral, or Enemy relationship.", descHi: "मित्र, तटस्थ, या शत्रु संबंध।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    10: {
        stepId: 10,
        title: { en: "Exceptions", hi: "अपवाद" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "10 Exemption Categories", titleHi: "10 छूट श्रेणियाँ", descEn: "Who is exempt from strict mantra discipline.", descHi: "सख्त मंत्र अनुशासन से किसे छूट है।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Siddha Mantras", titleHi: "सिद्ध मंत्र", descEn: "Already-awakened mantras needing no purification.", descHi: "पहले से जागृत मंत्र जिन्हें शोधन की आवश्यकता नहीं।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Women & Children", titleHi: "स्त्री और बालक", descEn: "Relaxed rules for women and young aspirants.", descHi: "महिलाओं और युवा साधकों के लिए शिथिल नियम।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Emergency Chanting", titleHi: "आपातकालीन जप", descEn: "Mantras chanted in crisis bypass all standard rules.", descHi: "संकट में किया गया जप सभी नियमों से परे है।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    11: {
        stepId: 11,
        title: { en: "Flaws in Mantras", hi: "मंत्रों में दोष" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "50 Mantra Flaws", titleHi: "50 मंत्र दोष", descEn: "The complete catalogue of possible defects.", descHi: "संभावित दोषों की पूरी सूची।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "6 Most Common", titleHi: "6 सबसे सामान्य", descEn: "Kilita, Stambhita, Mudrita, Grathita, Ruddha, Shishtha.", descHi: "कीलित, स्तम्भित, मुद्रित, ग्रथित, रुद्ध, शिष्ट।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Detection Methods", titleHi: "पहचान के तरीके", descEn: "How to diagnose which flaw affects your mantra.", descHi: "कैसे पहचानें कि कौन सा दोष आपके मंत्र को प्रभावित करता है।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    12: {
        stepId: 12,
        title: { en: "Correcting Flaws", hi: "दोषों का शोधन" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "5-Step Purification", titleHi: "5 चरण शोधन", descEn: "The sequential process to purify a flawed mantra.", descHi: "दोषपूर्ण मंत्र को शुद्ध करने की क्रमिक प्रक्रिया।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Mantra Shodhana", titleHi: "मंत्र शोधन", descEn: "Cleansing through specific rituals and recitations.", descHi: "विशिष्ट अनुष्ठान और पाठ से शुद्धिकरण।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Utkilana", titleHi: "उत्कीलन", descEn: "Removing the lock (kilaka) from a stuck mantra.", descHi: "अटके मंत्र से कीलक हटाना।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Mantra Dipana", titleHi: "मंत्र दीपन", descEn: "Re-igniting the mantra's dormant energy.", descHi: "मंत्र की निष्क्रिय ऊर्जा को पुनः प्रज्वलित करना।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    13: {
        stepId: 13,
        title: { en: "Infusing Life in a Mantra", hi: "मंत्र में प्राण प्रतिष्ठा" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "10 Samskaras of Mantra", titleHi: "मंत्र के 10 संस्कार", descEn: "Consecration rituals that transform sound into living power.", descHi: "ध्वनि को जीवित शक्ति में बदलने वाले संस्कार।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Janana (Birth)", titleHi: "जनन", descEn: "The birth-giving ceremony for the mantra.", descHi: "मंत्र का जन्म-संस्कार।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Dipana (Ignition)", titleHi: "दीपन", descEn: "Lighting the mantra's inner fire.", descHi: "मंत्र की आंतरिक अग्नि प्रज्वलित करना।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Abhisheka (Consecration)", titleHi: "अभिषेक", descEn: "Final ritual bathing that seals the mantra's life.", descHi: "मंत्र के जीवन को सील करने वाला अंतिम अभिषेक।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    14: {
        stepId: 14,
        title: { en: "How to Chant Your Mantra", hi: "मंत्र जप कैसे करें" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "4 Types of Japa", titleHi: "जप के 4 प्रकार", descEn: "From audible chanting to the highest silent state.", descHi: "सुनाई देने वाले जप से सर्वोच्च मौन अवस्था तक।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Vachika (Verbal)", titleHi: "वाचिक", descEn: "Audible chanting — the foundation for beginners.", descHi: "सुनाई देने वाला जप — शुरुआती लोगों के लिए आधार।" } },
            { id: '3', type: 'custom', position: { x: 175, y: 150 }, data: { titleEn: "Upamshu (Whisper)", titleHi: "उपांशु", descEn: "Lip movement without sound — 100x more powerful.", descHi: "बिना ध्वनि के होठों की गति — 100 गुना शक्तिशाली।" } },
            { id: '4', type: 'custom', position: { x: 350, y: 150 }, data: { titleEn: "Manasik (Mental)", titleHi: "मानसिक", descEn: "Purely mental — 1000x more powerful.", descHi: "पूर्णतया मानसिक — 1000 गुना शक्तिशाली।" } },
            { id: '5', type: 'custom', position: { x: 525, y: 150 }, data: { titleEn: "Ajapa (Spontaneous)", titleHi: "अजपा", descEn: "The mantra chants itself — the highest state.", descHi: "मंत्र स्वयं जप करता है — सर्वोच्च अवस्था।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-5', source: '1', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    15: {
        stepId: 15,
        title: { en: "Hurdles in Invocation", hi: "आह्वान में बाधाएँ" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Common Obstacles", titleHi: "सामान्य बाधाएँ", descEn: "What blocks progress even with correct practice.", descHi: "सही अभ्यास के बावजूद क्या प्रगति रोकती है।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Fear & Doubt", titleHi: "भय और संदेह", descEn: "The most dangerous inner enemies of the practitioner.", descHi: "साधक के सबसे खतरनाक आंतरिक शत्रु।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Impatience", titleHi: "अधीरता", descEn: "Expecting results before the required count is complete.", descHi: "आवश्यक संख्या पूर्ण होने से पहले परिणाम की अपेक्षा।" } },
            { id: '4', type: 'custom', position: { x: 0, y: 300 }, data: { titleEn: "Sharing Experiences", titleHi: "अनुभव बताना", descEn: "Revealing spiritual experiences dissipates their power.", descHi: "आध्यात्मिक अनुभव बताने से उनकी शक्ति क्षीण होती है।" } },
            { id: '5', type: 'custom', position: { x: 500, y: 300 }, data: { titleEn: "Natural Fearlessness", titleHi: "सहज निडरता", descEn: "The ultimate sign: obstacles transform into milestones.", descHi: "अंतिम संकेत: बाधाएँ मील के पत्थर में बदलती हैं।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    16: {
        stepId: 16,
        title: { en: "Invoking the Deity", hi: "देवता का आह्वान" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Pre-Japa Flow", titleHi: "जप-पूर्व प्रवाह", descEn: "The 9-step sequence to prepare the subtle body.", descHi: "सूक्ष्म शरीर को तैयार करने के लिए 9-चरणीय अनुक्रम।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Achamana & Marjana", titleHi: "आचमन और मार्जन", descEn: "Internal and external purification with water.", descHi: "जल से आंतरिक और बाहरी शुद्धिकरण।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Pranayama", titleHi: "प्राणायाम", descEn: "Regulating life force to still the mind.", descHi: "मन को स्थिर करने के लिए प्राण शक्ति का नियमन।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Dhyana (Meditation)", titleHi: "ध्यान", descEn: "Mental visualization of the deity's form.", descHi: "देवता के स्वरूप का मानसिक चित्रण।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    17: {
        stepId: 17,
        title: { en: "Nyasa", hi: "न्यास" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Body Consecration", titleHi: "अंग-न्यास", descEn: "Placing mantra energy into specific body parts.", descHi: "शरीर के विशिष्ट अंगों में मंत्र ऊर्जा स्थापित करना।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Kara Nyasa", titleHi: "कर न्यास", descEn: "Consecrating the fingers and palms.", descHi: "अंगुलियों और हथेलियों का पवित्रीकरण।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Anga Nyasa", titleHi: "अंग न्यास", descEn: "Consecrating the heart, head, and eyes.", descHi: "हृदय, सिर और आँखों का पवित्रीकरण।" } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Matrika Nyasa", titleHi: "मात्रिक न्यास", descEn: "Placing 50 letters across the entire physical frame.", descHi: "संपूर्ण शरीर पर 50 अक्षरों की स्थापना।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    18: {
        stepId: 18,
        title: { en: "Hand Locks (Mudras)", hi: "मुद्राएं" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Esoteric Mudras", titleHi: "गुप्त मुद्राएं", descEn: "Geometrical configurations of the hands.", descHi: "हाथों की ज्यामितीय आकृतियाँ।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Avahani Mudra", titleHi: "आवाहनी मुद्रा", descEn: "The invitation lock to call the deity.", descHi: "देवता का आह्वान करने के लिए मुद्रा।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Dhenu Mudra", titleHi: "धेनु मुद्रा", descEn: "The 'Cow' lock for providing immortality.", descHi: "अमृत प्रदान करने के लिए 'धेनु' मुद्रा।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Yoni Mudra", titleHi: "योनि मुद्रा", descEn: "The lock of ultimate cosmic stillness.", descHi: "परम लौकिक स्थिरता की मुद्रा।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    19: {
        stepId: 19,
        title: { en: "Purushcharana", hi: "पुरश्चरण" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "The Complete Engine", titleHi: "पूर्ण पुरश्चरण", descEn: "The five integral parts of an intensive sadhana.", descHi: "गहन साधना के पांच अभिन्न अंग।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Japa", titleHi: "जप", descEn: "Repetition of the mantra for the required count.", descHi: "आवश्यक संख्या तक मंत्र का जप।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Homa", titleHi: "होम", descEn: "1/10th of Japa count offered in fire.", descHi: "जप संख्या का 1/10 वां हिस्सा हवन में आहुति।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Tarpana", titleHi: "तर्पण", descEn: "1/10th of Homa offered as libation.", descHi: "होम का 1/10 वां हिस्सा तर्पण।" } },
            { id: '5', type: 'custom', position: { x: 250, y: 300 }, data: { titleEn: "Bhojana", titleHi: "भोजन", descEn: "Feeding practitioners to seal the siddhi.", descHi: "सिद्धि को पुख्ता करने के लिए साधकों को भोजन कराना।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    20: {
        stepId: 20,
        title: { en: "Ganesha Sadhana", hi: "गणेश साधना" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Removing Obstacles", titleHi: "विघ्नहर्ता", descEn: "Primary practice before any other path.", descHi: "किसी भी अन्य यात्रा से पहले प्राथमिक साधना।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "1.25 Lakh Chants", titleHi: "सवा लाख जप", descEn: "The standard count to awaken Ganapathi's power.", descHi: "गणपति की शक्ति जागृत करने के लिए मानक संख्या।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    21: {
        stepId: 21,
        title: { en: "Guru Sadhana", hi: "गुरु साधना" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Lineage Alignment", titleHi: "गुरु-परंपरा", descEn: "Connecting to the stream of ancient wisdom.", descHi: "प्राचीन ज्ञान की धारा से जुड़ना।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Inner Guide Awakening", titleHi: "आंतरिक गुरु", descEn: "Manifesting the guru's presence within the heart.", descHi: "हृदय में गुरु की उपस्थिति को प्रकट करना।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    22: {
        stepId: 22,
        title: { en: "Gayatri Sadhana", hi: "गायत्री साधना" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Supreme Wisdom", titleHi: "परम मेधा", descEn: "Mother of the Vedas; practice for pure intellect.", descHi: "वेदों की माता; शुद्ध बुद्धि के लिए साधना।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "3-Tier Progress", titleHi: "3-चरणीय प्रगति", descEn: "From 40 days to a 3-year intensive purushcharana.", descHi: "40 दिनों से लेकर 3 साल के गहन पुरश्चरण तक।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    23: {
        stepId: 23,
        title: { en: "Sri Suktam Sadhana", hi: "श्री सूक्त साधना" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Cosmic Abundance", titleHi: "लक्ष्मी प्राकट्य", descEn: "Invoking the creative energy of the universe.", descHi: "ब्रह्मांड की रचनात्मक ऊर्जा का आह्वान।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "960-Day Discipline", titleHi: "960-दिनीय अनुशासन", descEn: "The preparation required for the final ritual.", descHi: "अंतिम अनुष्ठान के लिए आवश्यक तैयारी।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "16-Night Ritual", titleHi: "16-रात्रिकालीन अनुष्ठान", descEn: "The high-intensity finish of the Sri Suktam path.", descHi: "श्री सूक्त मार्ग की उच्च-तीव्रता वाली पूर्णता।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    24: {
        stepId: 24,
        title: { en: "Rites of Atonement", hi: "प्रायश्चित" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Restoring Flow", titleHi: "सकल शोधन", descEn: "What to do when a sadhana is broken.", descHi: "साधना खंडित होने पर क्या करें।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "11 Methods", titleHi: "11 विधियाँ", descEn: "Varying degrees of expiation depending on the lapse.", descHi: "त्रुटि के आधार पर प्रायश्चित के विभिन्न स्तर।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    25: {
        stepId: 25,
        title: { en: "How to Make Fire Offerings", hi: "यज्ञ विधि" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Agni Yoga", titleHi: "अग्नि योग", descEn: "The technology of fire sacrifice.", descHi: "अग्नि यज्ञ की तकनीक।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Kunda Setup", titleHi: "कुण्ड निर्माण", descEn: "Geometrical alignment of the fire pit.", descHi: "अग्नि कुंड का ज्यामितीय विन्यास।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Samit & Ghrutam", titleHi: "समिधा और घृत", descEn: "The fuel and offerings for the sacred flame.", descHi: "पवित्र अग्नि के लिए ईंधन और आहुति।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    26: {
        stepId: 26,
        title: { en: "Types of Mantras", hi: "मंत्रों के प्रकार" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Functional Categories", titleHi: "मंत्र वर्गीकरण", descEn: "Classification by effect and nature.", descHi: "प्रभाव और प्रकृति के आधार पर वर्गीकरण।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Sattvic", titleHi: "सात्विक", descEn: "For liberation and self-realization.", descHi: "मुक्ति और आत्म-साक्षात्कार के लिए।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Rajasic", titleHi: "राजसिक", descEn: "For worldly prosperity and protection.", descHi: "सांसारिक समृद्धि और रक्षा के लिए।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Tamasic", titleHi: "तामसिक", descEn: "For conquering enemies and obstacles.", descHi: "शत्रुओं और बाधाओं पर विजय पाने के लिए।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    27: {
        stepId: 27,
        title: { en: "Flaws in a Mantra (Detailed)", hi: "मंत्र दोष (विस्तृत)" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "The 50 Blockages", titleHi: "50 अवरोध", descEn: "A deep dive into why mantras fail.", descHi: "मंत्र क्यों विफल होते हैं, इसका गहरा विश्लेषण।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Subtle Distortions", titleHi: "सूक्ष्म विकृतियाँ", descEn: "How incorrect vowels or meters create friction.", descHi: "गलत स्वर या छंद कैसे घर्षण पैदा करते हैं।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    28: {
        stepId: 28,
        title: { en: "16 Samskaras", hi: "16 संस्कार" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Life Consecration", titleHi: "जीवन संस्कार", descEn: "The 16 rites of the Sanatana lifecycle.", descHi: "सनातन जीवन चक्र के 16 संस्कार।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Janma (Birth)", titleHi: "जन्म", descEn: "Welcoming the soul into the physical body.", descHi: "आत्मा का भौतिक शरीर में स्वागत।" } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Upanayana (Initiation)", titleHi: "उपनयन", descEn: "Awakening the quest for knowledge.", descHi: "ज्ञान की खोज को जागृत करना।" } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Antyeshti (Transition)", titleHi: "अन्त्येष्टि", descEn: "The final offering of the body to fire.", descHi: "अग्नि को शरीर की अंतिम आहुति।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    29: {
        stepId: 29,
        title: { en: "16 Aspects of Sadhana", hi: "साधना के 16 पहलू" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Master Checklist", titleHi: "सफलता कारक", descEn: "Factors determining the speed of attainment.", descHi: "सिद्धि की गति निर्धारित करने वाले कारक।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "Shraddha & Virya", titleHi: "श्रद्धा और वीर्य", descEn: "The fuel of unshakeable faith and stamina.", descHi: "अटूट विश्वास और सहनशक्ति का ईंधन।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    30: {
        stepId: 30,
        title: { en: "Vedic Meters (Chanda)", hi: "छंद शास्त्र" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Sacred Prosody", titleHi: "छंद संरचना", descEn: "The rhythm governing cosmic vibration.", descHi: "लौकिक कंपन को नियंत्रित करने वाली लय।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Anushtubh", titleHi: "अनुष्टुप", descEn: "The 8-8-8-8 syllable common meter.", descHi: "8-8-8-8 अक्षरों का सामान्य छंद।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Trishtubh", titleHi: "त्रिष्टुप", descEn: "The 11-syllable rhythmic meter.", descHi: "11-अक्षरों वाला लयबद्ध छंद।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    },
    31: {
        stepId: 31,
        title: { en: "Arrangement of Pots", hi: "पात्रसादन" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Sacred Arrangement", titleHi: "पात्र विन्यास", descEn: "Precise placement of ritual vessels.", descHi: "अनुष्ठान पात्रों का सटीक विन्यास।" } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { titleEn: "5-Pot System", titleHi: "पंच-पात्र", descEn: "Arghya, Padya, Achamana, Snana, Punarachimana.", descHi: "अर्घ्य, पाद्य, आचमन, स्नान, पुनराचमन।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fbbf24', strokeWidth: 2 } },
        ]
    },
    32: {
        stepId: 32,
        title: { en: "Mantra Compatibility", hi: "मंत्र अनुकूलता" },
        nodes: [
            { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { titleEn: "Vedic Science", titleHi: "मंत्र विज्ञान", descEn: "The logic of sound-practitioner matching.", descHi: "ध्वनि-साधक मिलान का तर्क।" } },
            { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { titleEn: "Zodiac Match", hi: "राशि मिलान", descEn: "Alignment with celestial birth traits.", descHi: "आकाशीय जन्म लक्षणों के साथ संरेखण।" } },
            { id: '3', type: 'custom', position: { x: 500, y: 150 }, data: { titleEn: "Debt Algorithm", hi: "ऋण-शोधन", descEn: "Ensuring the mantra doesn't drain energy.", descHi: "यह सुनिश्चित करना कि मंत्र ऊर्जा का क्षय न करे।" } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 1.5 } },
        ]
    }
};
