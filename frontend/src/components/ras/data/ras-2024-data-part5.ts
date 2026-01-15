import { RASQuestion } from './ras-2024-data-part1';

export const RAS_2024_PART5: RASQuestion[] = [
    {
        id: 101,
        subject: "Math",
        question: {
            en: "An amount of ₹ 66,300 is to be paid to three brothers Ram, Shyam and Ghanshyam in such a way that if their shares are invested at 10% simple interest then the amount received by them after 2, 3 and 4 years respectively remains equal. The share of Ram is:",
            hi: "₹ 66,300 की राशि तीन भाइयों राम, श्याम और घनश्याम को इस तरह से दी जानी है कि यदि उनके शेयरों का 10% साधारण ब्याज पर निवेश किया जाता है, तो क्रमशः 2, 3 और 4 वर्षों के बाद उनके द्वारा प्राप्त राशि बराबर रहती है। राम का हिस्सा है:"
        },
        options: {
            en: ["₹ 23,400", "₹ 23,200", "₹ 23,600", "₹ 23,800", "Question not attempted"],
            hi: ["₹ 23,400", "₹ 23,200", "₹ 23,600", "₹ 23,800", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 4
    },
    {
        id: 102,
        subject: "Math",
        question: {
            en: "The relationship between Mean, Mode and Median is:",
            hi: "माध्य, बहुलक और माध्यिका के बीच संबंध है:"
        },
        options: {
            en: ["Mode = 3 Median - 2 Mean", "Median = 3 Mode - 2 Mean", "Mean = 3 Median - 2 Mode", "Mode = 3 Mean - 2 Median", "Question not attempted"],
            hi: ["बहुलक = 3 माध्यिका - 2 माध्य", "माध्यिका = 3 बहुलक - 2 माध्य", "माध्य = 3 माध्यिका - 2 बहुलक", "बहुलक = 3 माध्य - 2 माध्यिका", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 103,
        subject: "Math",
        question: {
            en: "Calculate the median for the following data:\nClass Interval: 0-10, 10-20, 20-30, 30-40, 40-50\nFrequency: 4, 28, 42, 20, 6",
            hi: "निम्नलिखित डेटा के लिए माध्यिका की गणना करें:\nवर्ग अंतराल: 0-10, 10-20, 20-30, 30-40, 40-50\nआवृत्ति: 4, 28, 42, 20, 6"
        },
        options: {
            en: ["24.28", "25.28", "24.5", "25.5", "Question not attempted"],
            hi: ["24.28", "25.28", "24.5", "25.5", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1 // N=100. N/2 = 50. CF: 4, 32, 74. Median class 20-30. l=20, f=42, cf=32, h=10. Med = 20 + ((50-32)/42)*10 = 20 + 180/42 = 20 + 4.28 = 24.28.
    },
    {
        id: 104,
        subject: "Math",
        question: {
            en: "A student noted the number of cars passing through a spot on a road for 100 periods each of 3 minutes and summarised it in the table given below. Find the mode of the data.\nNumber of cars: 0-10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80\nFrequency: 7, 14, 13, 12, 20, 11, 15, 8",
            hi: "एक छात्र ने सड़क पर एक स्थान से गुजरने वाली कारों की संख्या को प्रत्येक 3 मिनट की 100 अवधियों के लिए नोट किया और इसे नीचे दी गई तालिका में संक्षेपित किया। डेटा का बहुलक ज्ञात कीजिए।\nकारों की संख्या: 0-10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80\nआवृत्ति: 7, 14, 13, 12, 20, 11, 15, 8"
        },
        options: {
            en: ["44.7", "34.7", "54.7", "64.7", "Question not attempted"],
            hi: ["44.7", "34.7", "54.7", "64.7", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1 // Max freq is 20 (40-50). Mode = l + (f1-f0)/(2f1-f0-f2) * h = 40 + (20-12)/(40-12-11) * 10 = 40 + 8/17 * 10 = 40 + 80/17 = 40 + 4.7 = 44.7.
    },
    {
        id: 105,
        subject: "Math",
        question: {
            en: "One card is drawn from a well shuffled deck of 52 cards. The probability that the card will be a red card 'OR' a black king is:",
            hi: "52 पत्तों की अच्छी तरह से फेंटे हुए डेक से एक पत्ता निकाला जाता है। प्रायिकता कि वह पत्ता एक लाल पत्ता 'या' एक काला बादशाह होगा:"
        },
        options: {
            en: ["28/52", "26/52", "2/52", "1/52", "Question not attempted"],
            hi: ["28/52", "26/52", "2/52", "1/52", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1 // Red cards = 26. Black kings = 2. Total favorable = 28. Prob = 28/52.
    },
    {
        id: 106,
        subject: "History of Rajasthan",
        question: {
            en: "Match List-I with List-II and select the correct answer using the codes given below:\nList-I (Academy) | List-II (Center)\nA. Rajasthan Sanskrit Academy | i. Bikaner\nB. Rajasthani Bhasha, Sahitya and Sanskriti Academy | ii. Jaipur\nC. Rajasthan Braj Bhasha Academy | iii. Udaipur\nD. Rajasthan Sahitya Academy | iv. Bharatpur",
            hi: "सूची-I को सूची-II से सुमेलित करें और नीचे दिए गए कूट का उपयोग करके सही उत्तर चुनें:\nसूची-I (अकादमी) | सूची-II (केंद्र)\nA. राजस्थान संस्कृत अकादमी | i. बीकानेर\nB. राजस्थानी भाषा, साहित्य एवं संस्कृति अकादमी | ii. जयपुर\nC. राजस्थान ब्रज भाषा अकादमी | iii. उदयपुर\nD. राजस्थान साहित्य अकादमी | iv. भरतपुर"
        },
        options: {
            en: ["A-i, B-ii, C-iv, D-iii", "A-ii, B-i, C-iv, D-iii", "A-iii, B-iv, C-ii, D-i", "A-iv, B-iii, C-i, D-ii", "Question not attempted"],
            hi: ["A-i, B-ii, C-iv, D-iii", "A-ii, B-i, C-iv, D-iii", "A-iii, B-iv, C-ii, D-i", "A-iv, B-iii, C-i, D-ii", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2 // Sanskrit - Jaipur, Rajasthani Bhasha - Bikaner, Braj - Jaipur/Bharatpur?, Sahitya - Udaipur.
    },
    {
        id: 107,
        subject: "History of Rajasthan",
        question: {
            en: "\"Pura-Uthan\" is related to the excavation of which site?",
            hi: "\"पुरा-उत्थान\" किस स्थल की खुदाई से संबंधित है?"
        },
        options: {
            en: ["Ahar", "Kalibangan", "Ganeshwar", "Bairath", "Question not attempted"],
            hi: ["आहड़", "कालीबंगा", "गणेश्वर", "बैराठ", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 108,
        subject: "History of Rajasthan",
        question: {
            en: "Which dynasty ruled over Mandelgarh (Bhilwara) and Ghatiyala (Jodhpur)?",
            hi: "किस राजवंश ने मांडलगढ़ (भीलवाड़ा) और घटियाला (जोधपुर) पर शासन किया?"
        },
        options: {
            en: ["Pratihara", "Chauhan", "Guhan", "Parmar", "Question not attempted"],
            hi: ["प्रतिहार", "चौहान", "गुहिल", "परमार", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 109,
        subject: "History of Rajasthan",
        question: {
            en: "Which archaeological site of Rajasthan is known as \"Adim Sanskriti ka Sangrahalaya\" (Museum of Primitive Culture)?",
            hi: "राजस्थान के किस पुरातात्विक स्थल को \"आदिम संस्कृति का संग्रहालय\" कहा जाता है?"
        },
        options: {
            en: ["Bagor", "Tilwara", "Ojhiyana", "Balathal", "Question not attempted"],
            hi: ["बागोर", "तिलवाड़ा", "ओझियाना", "बालाथल", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 110,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "Which school of Rajasthani Painting is famous for 'Pichhwai'?",
            hi: "राजस्थानी चित्रकला की कौन सी शैली 'पिछवाई' के लिए प्रसिद्ध है?"
        },
        options: {
            en: ["Mewar", "Marwar", "Hadoti", "Dhundhar", "Question not attempted"],
            hi: ["मेवाड़", "मारवाड़", "हाड़ौती", "ढूंढार", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1 // Nathdwara is a sub-school of Mewar.
    },
    {
        id: 111,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "Tejaji Cattle Fair is organized at which place in Rajasthan?",
            hi: "राजस्थान में तेजाजी पशु मेला किस स्थान पर आयोजित किया जाता है?"
        },
        options: {
            en: ["Merta City", "Parbatsar", "Gogave", "Tilwara", "Question not attempted"],
            hi: ["मेड़ता सिटी", "परबतसर", "गोगामेड़ी", "तिलवाड़ा", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 112,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "Saint Pipaji was a discipline of which Saint?",
            hi: "संत पीपाजी किस संत के शिष्य थे?"
        },
        options: {
            en: ["Ramananda", "Kabir", "Dadu Dayal", "Raidas", "Question not attempted"],
            hi: ["रामानंद", "कबीर", "दादू दयाल", "रैदास", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 113,
        subject: "History of Rajasthan",
        question: {
            en: "Major Burton was the Political Agent of which state during the revolt of 1857?",
            hi: "1857 के विद्रोह के दौरान मेजर बर्टन किस राज्य के पॉलिटिकल एजेंट थे?"
        },
        options: {
            en: ["Jodhpur", "Mewar", "Kota", "Jaipur", "Question not attempted"],
            hi: ["जोधपुर", "मेवाड़", "कोटा", "जयपुर", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 114,
        subject: "History of Rajasthan",
        question: {
            en: "Who was the founder of 'Dholpur Prajamandal'?",
            hi: "'धौलपुर प्रजामंडल' के संस्थापक कौन थे?"
        },
        options: {
            en: ["Kishori Lal Verma", "Jwala Prasad Jigyasu", "Master Adityendra", "Gopi Lal Yadav", "Question not attempted"],
            hi: ["किशोरी लाल वर्मा", "ज्वाला प्रसाद जिज्ञासु", "मास्टर आदित्येंद्र", "गोपी लाल यादव", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 115,
        subject: "History of Rajasthan",
        question: {
            en: "Matsya Sangh was inaugurated on:",
            hi: "मत्स्य संघ का उद्घाटन किस तारीख को हुआ था?"
        },
        options: {
            en: ["18 March, 1948", "25 March, 1948", "18 April, 1948", "30 March, 1949", "Question not attempted"],
            hi: ["18 मार्च, 1948", "25 मार्च, 1948", "18 अप्रैल, 1948", "30 मार्च, 1949", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 116,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "In which district of Rajasthan 'Sahariya' tribe mainly resides?",
            hi: "राजस्थान के किस जिले में 'सहरिया' जनजाति मुख्य रूप से निवास करती है?"
        },
        options: {
            en: ["Udaipur", "Sirohi", "Baran", "Dungarpur", "Question not attempted"],
            hi: ["उदयपुर", "सिरोही", "बारां", "डूंगरपुर", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 117,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "'Chhoti Teej' is celebrated in:",
            hi: "'छोटी तीज' कब मनाई जाती है?"
        },
        options: {
            en: ["Shravan Krishna Tritiya", "Shravan Shukla Tritiya", "Bhadrapada Krishna Tritiya", "Bhadrapada Shukla Tritiya", "Question not attempted"],
            hi: ["श्रावण कृष्ण तृतीया", "श्रावण शुक्ल तृतीया", "भाद्रपद कृष्ण तृतीया", "भाद्रपद शुक्ल तृतीया", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 118,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "'Rakhdi' is an ornament worn on which part of the body?",
            hi: "'रखड़ी' शरीर के किस भाग पर पहना जाने वाला आभूषण है?"
        },
        options: {
            en: ["Neck", "Ear", "Head", "Wrist", "Question not attempted"],
            hi: ["गला", "कान", "सिर", "कलाई", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 119,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "Which fort is known as 'Sonar Kila'?",
            hi: "किस किले को 'सोनार किला' के नाम से जाना जाता है?"
        },
        options: {
            en: ["Jalore Fort", "Jaisalmer Fort", "Junagarh Fort", "Jaigarh Fort", "Question not attempted"],
            hi: ["जालौर किला", "जैसलमेर किला", "जूनागढ़ किला", "जयगढ़ किला", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 120,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "Kiradu temples are located in:",
            hi: "किराडू मंदिर कहाँ स्थित हैं?"
        },
        options: {
            en: ["Barmer", "Jaisalmer", "Jodhpur", "Bikaner", "Question not attempted"],
            hi: ["बाड़मेर", "जैसलमेर", "जोधपुर", "बीकानेर", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 121,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "Gulabo is a famous dancer of which dance form?",
            hi: "गुलाबो किस नृत्य शैली की प्रसिद्ध नृत्यांगना हैं?"
        },
        options: {
            en: ["Ghoomar", "Kalbelia", "Bhavai", "Terah Tali", "Question not attempted"],
            hi: ["घूमर", "कालबेलिया", "भवई", "तेरह ताली", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 122,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "'Algoza' is a musical instrument of which type?",
            hi: "'अल्गोज़ा' किस प्रकार का वाद्य यंत्र है?"
        },
        options: {
            en: ["String (Tat)", "Wind (Sushir)", "Percussion (Avanaddh)", "Metal (Ghan)", "Question not attempted"],
            hi: ["तार (तत)", "हवा (सुशीर)", "ताल (अवनद्ध)", "धातु (घन)", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 2
    },
    {
        id: 123,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "'Dhundhari' dialect is primarily spoken in:",
            hi: "'ढूंढारी' बोली मुख्य रूप से कहाँ बोली जाती है?"
        },
        options: {
            en: ["Mewar", "Marwar", "Jaipur", "Hadoti", "Question not attempted"],
            hi: ["मेवाड़", "मारवाड़", "जयपुर", "हाड़ौती", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 3
    },
    {
        id: 124,
        subject: "Art & Culture of Rajasthan",
        question: {
            en: "Who is the author of the poem 'Leeltans'?",
            hi: "कविता 'लीलटांस' के लेखक कौन हैं?"
        },
        options: {
            en: ["Kanhaiyalal Sethia", "Vijaydan Detha", "Chandraisingh Birkaali", "Meghraj Mukul", "Question not attempted"],
            hi: ["कन्हैयालाल सेठिया", "विजयदान देथा", "चंद्रसिंह बिरकाली", "मेघराज मुकुल", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 1
    },
    {
        id: 125,
        subject: "Current Affairs of Rajasthan",
        question: {
            en: "Who among the following was awarded 'Rajasthan Ratna' in 2024?",
            hi: "निम्नलिखित में से किसे 2024 में 'राजस्थान रत्न' से सम्मानित किया गया?"
        },
        options: {
            en: ["Dalveer Bhandari", "Lakshmi Niwas Mittal", "Anil Agarwal", "All of the above", "Question not attempted"],
            hi: ["दलवीर भंडारी", "लक्ष्मी निवास मित्तल", "अनिल अग्रवाल", "उपरोक्त सभी", "प्रश्न अनुत्तरित"]
        },
        correctAnswer: 4 // Usually multiple awardees.
    }
];
