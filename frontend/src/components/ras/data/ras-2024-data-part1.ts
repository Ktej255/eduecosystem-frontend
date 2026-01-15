export interface RASQuestion {
    id: number;
    subject?: string;
    topic?: string;
    subtopic?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    question: {
        en: string;
        hi: string;
    };
    options: {
        en: string[];
        hi: string[];
    };
    correctAnswer: number;
    explanation?: {
        en?: string;
        hi: string;
    };
}

export const RAS_2024_PART1: RASQuestion[] = [
    {
        id: 1,
        subject: "Geography",
        question: {
            en: "The four segments of the Golden Quadrilateral join the following cities:\nA. Delhi - Mumbai\nB. Mumbai - Chennai\nC. Chennai - Kolkata\nD. Kolkata - Delhi\nConsider the length of the above segments in descending order and select the correct answer using the codes given below:",
            hi: "स्वर्णिम चतुर्भुज के चार खंड निम्नलिखित शहरों को जोड़ते हैं:\nA. दिल्ली - मुंबई\nB. मुंबई - चेन्नई\nC. चेन्नई - कोलकाता\nD. कोलकाता - दिल्ली\nउपर्युक्त खंडों की लंबाई को अवरोही क्रम में विचार करें और नीचे दिए गए कूट का उपयोग करके सही उत्तर चुनें:"
        },
        options: {
            en: ["C, D, A, B", "C, D, B, A", "D, C, B, A", "D, C, A, B", "Question not attempted"],
            hi: ["C, D, A, B", "C, D, B, A", "D, C, B, A", "D, C, A, B", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 2,
        subject: "Geography of Rajasthan",
        question: {
            en: "Consider the following statements:\nA. Luni Basin and Shekhawati region are the Sub-regions of Rajasthan Bangar.\nB. Ghaggar Plain covers mostly Hanumangarh and Ganganagar district.\nC. Nagaur uplands have salty lakes and inland drainage.\nD. Aravalli ranges are rich in all types of minerals.\nSelect the correct answer using the codes given below:",
            hi: "निम्नलिखित कथनों पर विचार करें:\nA. लूनी बेसिन और शेखावटी क्षेत्र राजस्थान बांगर के उप-क्षेत्र हैं।\nB. घग्घर का मैदान मुख्य रूप से हनुमानगढ़ और गंगानगर जिले को कवर करता है।\nC. नागौर उच्चभूमि में खारी झीलें और अंतर्देशीय जल निकासी है।\nD. अरावली पर्वतमाला सभी प्रकार के खनिजों में समृद्ध है।\nनीचे दिए गए कूट का उपयोग करके सही उत्तर चुनें:"
        },
        options: {
            en: ["A and B", "A, B and C", "B, C and D", "A, B, C and D", "Question not attempted"],
            hi: ["A और B", "A, B और C", "B, C और D", "A, B, C और D", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 3,
        subject: "Geography of Rajasthan",
        question: {
            en: "Which of the following group of districts of Rajasthan is correctly arranged in ascending order as per average rainfall during South-West Monsoon?",
            hi: "राजस्थान के निम्नलिखित जिलों के समूह में से कौन सा दक्षिण-पश्चिम मानसून के दौरान औसत वर्षा के अनुसार आरोही क्रम में सही ढंग से व्यवस्थित है?"
        },
        options: {
            en: ["Jalore, Jaipur, Kota", "Jaisalmer, Banswara, Rajsamand", "Nagaur, Dhaulpur, Ajmer", "Churu, Baran, Bhilwara", "Question not attempted"],
            hi: ["जालोर, जयपुर, कोटा", "जैसलमेर, बांसवाड़ा, राजसमंद", "नागौर, धौलपुर, अजमेर", "चूरू, बारां, भीलवाड़ा", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 4,
        subject: "General Knowledge",
        question: {
            en: "Which is not a correct match?\n(Power Plant — State)",
            hi: "कौन सा सुमेलित नहीं है?\n(पावर प्लांट — राज्य)"
        },
        options: {
            en: ["Kalpakkam — Tamil Nadu", "Kakrapar — Gujarat", "Kaiga — Tamil Nadu", "Narora — Uttar Pradesh", "Question not attempted"],
            hi: ["कलपक्कम — तमिलनाडु", "काकरापार — गुजरात", "कैगा — तमिलनाडु", "नरोरा — उत्तर प्रदेश", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 5,
        subject: "Geography of Rajasthan",
        question: {
            en: "Which type of soil is dominant in Jaipur, Dausa and Alwar districts?",
            hi: "जयपुर, दौसा और अलवर जिलों में किस प्रकार की मिट्टी की प्रधानता है?"
        },
        options: {
            en: ["Entisols", "Inceptisols", "Vertisols", "Alfisols", "Question not attempted"],
            hi: ["एंटिसोल", "इनसेप्टिसोल", "वर्टिसोल", "एल्फिसोल", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 4
    },
    {
        id: 6,
        subject: "Economy of Rajasthan",
        question: {
            en: "In the year 2021-22, contribution of Rajasthan in total production of Bajra in the country (in percentage) was:",
            hi: "वर्ष 2021-22 में, देश में बाजरा के कुल उत्पादन में राजस्थान का योगदान (प्रतिशत में) था:"
        },
        options: {
            en: ["46.30", "87.69", "38.98", "34.69", "Question not attempted"],
            hi: ["46.30", "87.69", "38.98", "34.69", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 7,
        subject: "Economy of Rajasthan",
        question: {
            en: "Medtech Medical Devices Park is located at:",
            hi: "मेडटेक मेडिकल डिवाइसेज पार्क कहाँ स्थित है:"
        },
        options: {
            en: ["Ganeshwar Extension, Sikar", "Maal Ki Toos, Udaipur", "Nainwa, Bundi", "Boranada, Jodhpur (undivided)", "Question not attempted"],
            hi: ["गणेश्वर एक्सटेंशन, सीकर", "माल की टूस, उदयपुर", "नैनवा, बूंदी", "बोरानाडा, जोधपुर (अविभाजित)", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 4
    },
    {
        id: 8,
        subject: "Geography of Rajasthan",
        question: {
            en: "In which district of Rajasthan 'Khadin' is a popular method of water conservation?",
            hi: "राजस्थान के किस जिले में 'खडीन' जल संरक्षण की एक लोकप्रिय विधि है?"
        },
        options: {
            en: ["Nagaur", "Bikaner", "Jaisalmer", "Pali", "Question not attempted"],
            hi: ["नागौर", "बीकानेर", "जैसलमेर", "पाली", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 9,
        subject: "Geography of Rajasthan",
        question: {
            en: "Match List-I with List-II and select the correct answer from the codes given below:\nList - I (District) | List - II (River)\nA. Udaipur | i. Sabi & Ruparel\nB. Bundi | ii. Gambhiri & Parvati\nC. Bharatpur | iii. Som & Jakham\nD. Alwar | iv. Kural",
            hi: "सूची-I को सूची-II से सुमेलित करें और नीचे दिए गए कूट से सही उत्तर चुनें:\nसूची - I (जिला) | सूची - II (नदी)\nA. उदयपुर | i. साबी और रूपारेल\nB. बूंदी | ii. गंभीरी और पार्वती\nC. भरतपुर | iii. सोम और जाखम\nD. अलवर | iv. कुराल"
        },
        options: {
            en: ["A-iii, B-iv, C-i, D-ii", "A-iv, B-iii, C-ii, D-i", "A-ii, B-iii, C-v, D-iv", "A-iii, B-iv, C-ii, D-i", "Question not attempted"],
            hi: ["A-iii, B-iv, C-i, D-ii", "A-iv, B-iii, C-ii, D-i", "A-ii, B-iii, C-v, D-iv", "A-iii, B-iv, C-ii, D-i", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 4
    },
    {
        id: 10,
        subject: "Geography of Rajasthan",
        question: {
            en: "At which of the following places, asbestos mines are located in Rajasthan?",
            hi: "राजस्थान में निम्न में से किस स्थान पर एस्बेस्टस की खदानें स्थित हैं?"
        },
        options: {
            en: ["Arjunpura and Piparda", "Kura and Mangol", "Karpura and Fatehgarh", "Depura and Dingri", "Question not attempted"],
            hi: ["अर्जुनपुरा और पीपर्डा", "कुरा और मंगोल", "करपुरा और फतेहगढ़", "डेपुरा और डिंगरी", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 11,
        subject: "Geography of Rajasthan",
        question: {
            en: "The most important resources of lignite in Rajasthan are located at:",
            hi: "राजस्थान में लिग्नाइट के सबसे महत्वपूर्ण संसाधन कहाँ स्थित हैं:"
        },
        options: {
            en: ["Palana, Agucha and Merta", "Palana, Kasnau and Jagpura", "Kapurdi, Merta and Kasnau", "Kapurdi, Palana and Jagpura", "Question not attempted"],
            hi: ["पलाना, आगूचा और मेड़ता", "पलाना, कसनाऊ और जगपुरा", "कपूरड़ी, मेड़ता और कसनाऊ", "कपूरड़ी, पलाना और जगपुरा", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 12,
        subject: "Geography of Rajasthan",
        question: {
            en: "Which is not a correct match?\n(Conservation Reserve as on May 2023 — District)",
            hi: "कौन सा सुमेलित नहीं है?\n(मई 2023 तक संरक्षण रिजर्व — जिला)"
        },
        options: {
            en: ["Rankhar — Jalore", "Mansamata — Jhunjhunu", "Sorsan — Bundi", "Hamirgarh — Bhilwara", "Question not attempted"],
            hi: ["रणखार — जालोर", "मनसामाता — झुंझुनू", "सोरसन — बूंदी", "हमीरगढ़ — भीलवाड़ा", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 13,
        subject: "Culture of Rajasthan",
        question: {
            en: "Mount Abu and Ranakpur are included in which tourist circuit?",
            hi: "माउंट आबू और रणकपुर किस पर्यटक सर्किट में शामिल हैं?"
        },
        options: {
            en: ["Dhundhar", "Shekhawati", "Godwar", "Mewar", "Question not attempted"],
            hi: ["ढूँढाड़", "शेखावटी", "गोडवाड़", "मेवाड़", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 14,
        subject: "History",
        question: {
            en: "The national executive of which political party called for the dissolution of the Constituent Assembly and its re-election by adult suffrage?",
            hi: "किस राजनीतिक दल की राष्ट्रीय कार्यकारिणी ने संविधान सभा को भंग करने और वयस्क मताधिकार द्वारा इसके पुनर्निर्वाचन का आह्वान किया?"
        },
        options: {
            en: ["Hindu Mahasabha", "Socialist Party", "Swaraj Party", "Muslim League", "Question not attempted"],
            hi: ["हिंदू महासभा", "सोशलिस्ट पार्टी", "स्वराज पार्टी", "मुस्लिम लीग", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 15,
        subject: "Demographics of Rajasthan",
        question: {
            en: "The correct descending order of districts in Rajasthan based on total literacy rate (census 2011) is:",
            hi: "कुल साक्षरता दर (जनगणना 2011) के आधार पर राजस्थान के जिलों का सही अवरोही क्रम है:"
        },
        options: {
            en: ["Jaipur, Jhunjhunu, Kota, Sikar, Alwar", "Kota, Jaipur, Jhunjhunu, Sikar, Alwar", "Jhunjhunu, Kota, Sikar, Jaipur, Alwar", "Kota, Jhunjhunu, Jaipur, Alwar, Sikar", "Question not attempted"],
            hi: ["जयपुर, झुंझुनू, कोटा, सीकर, अलवर", "कोटा, जयपुर, झुंझुनू, सीकर, अलवर", "झुंझुनू, कोटा, सीकर, जयपुर, अलवर", "कोटा, झुंझुनू, जयपुर, अलवर, सीकर", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 16,
        subject: "Polity",
        question: {
            en: "Fundamental Rights provided by which of the following groups of Articles are granted only to 'Citizens' of India?",
            hi: "निम्नलिखित में से किन अनुच्छेदों के समूह द्वारा प्रदान किए गए मौलिक अधिकार केवल भारत के 'नागरिकों' को दिए गए हैं?"
        },
        options: {
            en: ["Articles 14, 20, 23 and 30", "Articles 15, 21, 25 and 28", "Articles 20, 21, 25 and 30", "Articles 15, 16, 19 and 30", "Question not attempted"],
            hi: ["अनुच्छेद 14, 20, 23 और 30", "अनुच्छेद 15, 21, 25 और 28", "अनुच्छेद 20, 21, 25 और 30", "अनुच्छेद 15, 16, 19 और 30", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 4
    },
    {
        id: 17,
        subject: "Polity",
        question: {
            en: "In which year it was inserted in the Constitution of India that the State shall secure free legal aid to any citizen by reason of economic or other disabilities?",
            hi: "भारत के संविधान में किस वर्ष यह जोड़ा गया कि राज्य आर्थिक या अन्य अक्षमताओं के कारण किसी भी नागरिक को मुफ्त कानूनी सहायता सुरक्षित करेगा?"
        },
        options: {
            en: ["1978", "1976", "1975", "1979", "Question not attempted"],
            hi: ["1978", "1976", "1975", "1979", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 18,
        subject: "Polity",
        question: {
            en: "Match List-A with List-B and identify the correct answer from the codes given below:\nList-A (Case) | List-B (Amendment challenged)\nA. Indira Gandhi V. Raj Narain | i. 42nd Amendment\nB. Minerva Mills V. Union of India | ii. 52nd Amendment\nC. Kihoto Hollohan V. Zachillu | iii. 39th Amendment\nD. P. Sambamurthy V. State of A.P. | iv. 32nd Amendment",
            hi: "सूची-A को सूची-B से सुमेलित करें और नीचे दिए गए कूट से सही उत्तर पहचानें:\nसूची-A (केस) | सूची-B (संशोधन चुनौती)\nA. इंदिरा गांधी बनाम राज नारायण | i. 42वां संशोधन\nB. मिनर्वा मिल्स बनाम भारत संघ | ii. 52वां संशोधन\nC. किहोतो होलोहन बनाम जाचिलु | iii. 39वां संशोधन\nD. पी. संबमूर्ति बनाम ए.पी. राज्य | iv. 32वां संशोधन"
        },
        options: {
            en: ["A-iii, B-i, C-ii, D-iv", "A-ii, B-iii, C-i, D-iv", "A-iv, B-ii, C-iii, D-i", "A-iii, B-i, C-ii, D-iv", "Question not attempted"],
            hi: ["A-iii, B-i, C-ii, D-iv", "A-ii, B-iii, C-i, D-iv", "A-iv, B-ii, C-iii, D-i", "A-iii, B-i, C-ii, D-iv", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 19,
        subject: "Polity",
        question: {
            en: "Which of the following statement is incorrect regarding the election of the President of India?",
            hi: "भारत के राष्ट्रपति के चुनाव के संबंध में निम्नलिखित में से कौन सा कथन गलत है?"
        },
        options: {
            en: [
                "The President of India is elected by the members of an Electoral College consisting of (a) the elected members of both the Houses of Parliament and (b) the elected members of the Legislative Assemblies of the States and the Union Territories with Legislative Assembly.",
                "Value of vote for each of the members of the Electoral College is decided based on the population census of 1971 and it will continue to be so till population of the first census taken after the year 2026 have been published.",
                "The elections are held in accordance with the system of Proportional Representation by means of single transferable vote.",
                "Every elected member of the Legislative Assembly of a State shall have as many votes as there are multiples of one hundred in the quotient obtained by dividing the population of the State by the total number of the elected members of the Assembly.",
                "Question not attempted"
            ],
            hi: [
                "भारत के राष्ट्रपति का चुनाव एक निर्वाचक मंडल के सदस्यों द्वारा किया जाता है जिसमें (a) संसद के दोनों सदनों के निर्वाचित सदस्य और (b) राज्यों और केंद्र शासित प्रदेशों की विधानसभाओं के निर्वाचित सदस्य शामिल होते हैं।",
                "निर्वाचक मंडल के प्रत्येक सदस्य के वोट का मूल्य 1971 की जनगणना के आधार पर तय किया जाता है और यह वर्ष 2026 के बाद की पहली जनगणना के आंकड़े प्रकाशित होने तक जारी रहेगा।",
                "चुनाव एकल संक्रमणीय मत के माध्यम से आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार आयोजित किए जाते हैं।",
                "किसी राज्य की विधान सभा के प्रत्येक निर्वाचित सदस्य के पास उतने ही वोट होंगे जितने कि राज्य की जनसंख्या को विधानसभा के निर्वाचित सदस्यों की कुल संख्या से विभाजित करके प्राप्त भागफल में सौ के गुणक होंगे।",
                "प्रश्न अनुत्तरित"
            ]
        },
        correctAnswer: 4
    },
    {
        id: 20,
        subject: "Polity",
        question: {
            en: "Identify the correct statement regarding the Election Commission of India.",
            hi: "भारत के चुनाव आयोग के संबंध में सही कथन की पहचान करें।"
        },
        options: {
            en: [
                "Election Commission of India is a permanent Constitutional Body and it was established in accordance with the Constitution on 25th January, 1952.",
                "The concept of multi-member Commission has been in operation since 1995 with decision making power by majority vote.",
                "Under the Constitution, the Commission also has advisory jurisdiction in the matter of post election disqualification of sitting members of Parliament and State Legislatures.",
                "The President appoints Chief Election Commissioner and Election Commissioners and they have tenure of five years, or up to the age of 60 years, whichever is earlier.",
                "Question not attempted"
            ],
            hi: [
                "भारत का चुनाव आयोग एक स्थायी संवैधानिक निकाय है और इसकी स्थापना संविधान के अनुसार 25 जनवरी, 1952 को की गई थी।",
                "बहु-सदस्यीय आयोग की अवधारणा 1995 से बहुमत वोट द्वारा निर्णय लेने की शक्ति के साथ प्रचलन में है।",
                "संविधान के तहत, आयोग के पास संसद और राज्य विधानमंडलों के मौजूदा सदस्यों की चुनाव बाद की अयोग्यता के मामले में सलाहकार क्षेत्राधिकार भी है।",
                "राष्ट्रपति मुख्य चुनाव आयुक्त और चुनाव आयुक्तों की नियुक्ति करते हैं और उनका कार्यकाल पांच वर्ष, या 60 वर्ष की आयु तक, जो भी पहले हो, होता है।",
                "प्रश्न अनुत्तरित"
            ]
        },
        correctAnswer: 3
    },
    {
        id: 21,
        subject: "Polity",
        question: {
            en: "Which of the following statements regarding the powers of the speaker of Lok Sabha are correct?\n(i) The speaker presides over a joint sitting of both the houses of Parliament.\n(ii) When a Money Bill is transferred from the Lower House to the Upper House, the speaker shall endorse on the bill his certificate that it is a Money Bill.\n(iii) While a resolution for his removal is under consideration, the speaker shall neither preside nor take part in its proceedings.\n(iv) The speaker does not vote in the House except when there is equality of votes.\nCodes:",
            hi: "लोकसभा अध्यक्ष की शक्तियों के संबंध में निम्नलिखित में से कौन से कथन सही हैं?\n(i) अध्यक्ष संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता करता है।\n(ii) जब कोई मनी बिल निचले सदन से ऊपरी सदन में स्थानांतरित किया जाता है, तो अध्यक्ष बिल पर अपना प्रमाण पत्र पृष्ठांकित करेगा कि यह एक मनी बिल है।\n(iii) जबकि उसके निष्कासन का प्रस्ताव विचाराधीन है, अध्यक्ष न तो अध्यक्षता करेगा और न ही इसकी कार्यवाही में भाग लेगा।\n(iv) अध्यक्ष सदन में वोट नहीं देता है सिवाय तब जब वोटों की समानता हो।\nकूट:"
        },
        options: {
            en: ["Only (i) and (iii)", "Only (i) and (ii)", "Only (i), (ii) and (iv)", "Only (i), (ii) and (iii)", "Question not attempted"],
            hi: ["केवल (i) और (iii)", "केवल (i) और (ii)", "केवल (i), (ii) और (iv)", "केवल (i), (ii) और (iii)", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 22,
        subject: "Polity",
        question: {
            en: "Which of the following is a matter on which the Finance Commission notified by the Ministry of Finance on 31st December, 2023 shall not make its recommendation?",
            hi: "निम्नलिखित में से कौन सा वह मामला है जिस पर 31 दिसंबर, 2023 को वित्त मंत्रालय द्वारा अधिसूचित वित्त आयोग अपनी सिफारिश नहीं करेगा?"
        },
        options: {
            en: [
                "The distribution between the Union and the States of the net proceeds of taxes which are to be or may be divided between them under Chapter I Part XII of the Constitution.",
                "The principles which should govern the grants-in-aid of the revenues of the States out of the Consolidated Fund of India.",
                "The measures needed to augment the Consolidated Fund of a State to supplement the resources of the Panchayats and Municipalities.",
                "Review the present arrangements on Financing Climate Management initiatives.",
                "Question not attempted"
            ],
            hi: [
                "संघ और राज्यों के बीच करों की शुद्ध आय का वितरण जो संविधान के भाग XII के अध्याय I के तहत उनके बीच विभाजित किया जाना है या किया जा सकता है।",
                "वे सिद्धांत जो भारत की संचित निधि से राज्यों के राजस्व की सहायता अनुदान को नियंत्रित करते हैं।",
                "पंचायतों और नगर पालिकाओं के संसाधनों को पूरा करने के लिए राज्य की संचित निधि को बढ़ाने के लिए आवश्यक उपाय।",
                "जलवायु प्रबंधन पहलों के वित्तपोषण पर वर्तमान व्यवस्था की समीक्षा।",
                "प्रश्न अनुत्तरित"
            ]
        },
        correctAnswer: 4
    },
    {
        id: 23,
        subject: "Polity",
        question: {
            en: "Consider the following statements and identify the correct answer from the codes given below:\n(a) The Congress won 145 Lok Sabha seats in 2004 election.\n(b) The BJP won 133 Lok Sabha seats in 2004 election.\n(c) The CPI(M) won 48 Lok Sabha seats in 2004 election.\nCodes:",
            hi: "निम्नलिखित कथनों पर विचार करें और नीचे दिए गए कूट से सही उत्तर पहचानें:\n(a) कांग्रेस ने 2004 के चुनाव में 145 लोकसभा सीटें जीतीं।\n(b) भाजपा ने 2004 के चुनाव में 133 लोकसभा सीटें जीतीं।\n(c) माकपा ने 2004 के चुनाव में 48 लोकसभा सीटें जीतीं।\nकूट:"
        },
        options: {
            en: ["Only (a) is correct.", "Only (a) and (b) are correct.", "Only (b) and (c) are correct.", "Only (a) and (c) are correct.", "Question not attempted"],
            hi: ["केवल (a) सही है।", "केवल (a) और (b) सही हैं।", "केवल (b) और (c) सही हैं।", "केवल (a) और (c) सही हैं।", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 24,
        subject: "Polity",
        question: {
            en: "The Central Vigilance Commission was formed on the basis of the recommendations of which of the following committee?",
            hi: "केंद्रीय सतर्कता आयोग का गठन निम्नलिखित में से किस समिति की सिफारिशों के आधार पर किया गया था?"
        },
        options: {
            en: ["Santhanam Committee", "Kelkar Committee", "Swaran Singh Committee", "Bakshi Tek Chand Committee", "Question not attempted"],
            hi: ["संथानम समिति", "केलकर समिति", "स्वर्णिम सिंह समिति", "बख्शी टेक चंद समिति", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 25,
        subject: "Polity of Rajasthan",
        question: {
            en: "Which of the following Chief Minister faced President's Rule in Rajasthan for maximum number of times?",
            hi: "निम्नलिखित में से किस मुख्यमंत्री ने राजस्थान में सबसे अधिक बार राष्ट्रपति शासन का सामना किया?"
        },
        options: {
            en: ["Haridev Joshi", "Bhairon Singh Shekhawat", "Jai Narayan Vyas", "Shiv Charan Mathur", "Question not attempted"],
            hi: ["हरिदेव जोशी", "भैरों सिंह शेखावत", "जय नारायण व्यास", "शिव चरण माथुर", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    }
];
