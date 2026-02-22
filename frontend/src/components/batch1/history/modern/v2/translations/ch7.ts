// Chapter 7: 1857 — The Great Revolt — Hindi Translation

export const ch7Translations = {
    en: {
        // Hero
        heroTitle: "1857: THE GREAT REVOLT",
        heroSubtitle: "--- THE FIRST WAR OF INDEPENDENCE ---",
        topSecretStamp: "TOP SECRET",
        telegramHeader: "WESTERN UNION TELEGRAPH CO.",
        telegramDate: "DATE: 11 MAY 1857",
        telegramBody: "URGENT ::: SEPOYS FROM MEERUT ENTERED DELHI STOP PROCLAIMED BAHADUR SHAH EMPEROR STOP CITY IN FLAMES STOP REVOLUTION HAS BEGUN STOP",
        telegramEnd: "END OF MESSAGE",

        // Causes
        causesTitle: "THE POWDER KEG (CAUSES)",
        economicTitle: "Economic Ruin",
        economicText: '"Peasants in debt, Artisans in ruin." Heavy taxation (Land Revenue) and destruction of traditional industry by British imports.',
        politicalTitle: "Political Slights",
        politicalItems: [
            { bold: "Doctrine of Lapse:", text: " Annexed Jhansi, Satara, etc." },
            { bold: "Nana Saheb:", text: " Pension refused (Baji Rao II's adopted son)." },
            { bold: "Zafar:", text: " Told to vacate Red Fort for Qutub." },
        ],
        religiousTitle: "Religious Fear",
        religiousText: "Fear of conversion by Missionaries. Interference in customs (Sati/Widow Remarriage).",
        religiousAct: "Religious Disabilities Act (1850):",
        religiousActText: " Allowed converts to inherit property.",
        militaryTitle: "Sepoy Grief",
        militaryText: "Required crossing sea (Loss of Caste). Lower pay and no promotions compared to British.",
        militaryAct: "General Service Enlistment Act (1856):",

        // Immediate
        sparkTitle: "The Immediate Spark",
        sparkStamp: "VERIFIED REPORT",
        sparkText: "Greased cartridges allegedly used Beef & Pig Fat. Must be bitten off. Offensive to both Hindus & Muslims.",
        sparkLabel: "The Enfield Rifle:",

        // Timeline
        timelineTitle: "THE TRAIL OF FIRE",
        timeline: [
            { place: "BARRACKPORE (Mar 29)", text: "Mangal Pandey attacked Lt. Baugh. Hanged on April 8. The first martyr." },
            { place: "MEERUT (May 10)", text: '3rd Native Cavalry revolts. Officers killed. Prisoners freed. "CHALO DILLI!" echo filled the air.' },
            { place: "DELHI (May 11)", text: "Bahadur Shah proclaimed Shahenshah-e-Hindustan. General Bakht Khan (Bareilly) took military control." },
        ],

        // Matchups
        matchupTitle: "BATTLEFIELD MATCHUPS",
        encounterStamp: "ENCOUNTER LOG",
        rebelLabel: "THE REBEL(S)",
        suppressorLabel: "THE SUPPRESSOR(S)",
        finalOutcome: "Final Outcome:",
        advisorLabel: "Advisor:",
        advisorBrain: "(The Brain behind planning)",
        hiddenHero: "Hidden Hero:",
        jhansiQuote: '"Main apni Jhansi nahi doongi!"',
        jhansiQuoteBy: "— Rani Laxmibai to General Rose",

        matchups: [
            { place: "Delhi", rebel: "Bahadur Shah / Bakht Khan", british: "John Nicholson & Lt. Hudson", fate: "Nicholson died in capture. Hudson killed princes. Zafar deported to Rangoon." },
            { place: "Kanpur", rebel: "Nana Saheb (Dhondhu Pant) & Tantia Tope", british: "Sir Colin Campbell & Sir Hugh Wheeler", fate: "Nana escaped to Nepal. Tantia betrayed by Man Singh & hanged (1859).", advisor: "Azimullah Khan (The Brain)" },
            { place: "Lucknow", rebel: "Begum Hazrat Mahal (for son Birjis Qadir)", british: "Henry Lawrence, Havelock, Outram, Campbell", fate: "Lawrence died at Residency. Begum escaped to Nepal." },
            { place: "Jhansi / Gwalior", rebel: "Rani Laxmibai & Tantia Tope", british: "Sir Hugh Rose", fate: "Rani died in Gwalior (June 1858). 'Only man among rebels' quote." },
            { place: "Bihar (Jagdishpur)", rebel: "Kunwar Singh & Amar Singh", british: "William Taylor & Vincent Eyre", fate: "Kunwar (80) died in 1858. Amar continued Guerilla war.", hidden: "Peer Ali (Bookseller of Patna) - Hanged by Taylor." },
            { place: "Faizabad", rebel: "Maulvi Ahmadullah (Danka Shah)", british: "Campbell / Gen. Hope Grant", fate: "Betrayed by Raja of Powain. Hanged. 50k Bounty." },
            { place: "Bareilly", rebel: "Khan Bahadur Khan", british: "Sir Colin Campbell", fate: "Set up own govt. Sentenced to death." },
            { place: "Allahabad", rebel: "Maulvi Liyaqat Ali", british: "Colonel Neill", fate: "Brutal suppression by Neill." },
        ],

        // Minor leaders
        minorTitle: "The Scattered Sparks (Minor Leaders)",
        minorLeaders: [
            { region: "Mathura", name: "Devi Singh" },
            { region: "Meerut", name: "Kadam Singh" },
            { region: "Gorakhpur", name: "Gajadhar Singh" },
            { region: "Rajasthan", name: "Jaidayal/Hardayal (Kota)" },
            { region: "Assam", name: "Diwan Maniram Datta" },
            { region: "Odisha", name: "Surendra Sai" },
        ],

        // Why failed
        failedTitle: "WHY IT FAILED?",
        loyalistsTitle: "The Loyalists",
        loyalistsText: "Scindia (Gwalior), Holkar (Indore), Nizam (Hyderabad), and Sikhs/Gurkhas helped the British.",
        loyalistsStamp: "Canning's Remark",
        loyalistsQuote: '"If the Scindia joins the mutiny, I shall pack my bags tomorrow." — Lord Canning.',
        splitTitle: "Internal Split",
        splitText: "Modern educated Indians did NOT support the revolt. They saw it as backward-looking feudalism.",
        splitLabel: "The Intelligentsia:",
        splitBullets: ["Poor Arms (Swords vs Enfield)", "Limited Reach (South/West quiet)"],

        unityBadge: "UNIQUE FEATURE",
        unityTitle: "HINDU-MUSLIM UNITY",
        unityQuote: '"In this instance we could not play off the Mohammedans against the Hindus"',
        unityQuoteBy: "— Aitchison (British Official)",
        unityPoints: [
            "Cow slaughter was banned in Delhi/UP by rebels.",
            "Zafar, a Muslim King, accepted by Hindu Chiefs as Emperor.",
            "Azimullah & Tantia Tope planned side-by-side.",
        ],

        // Impact
        impactTitle: "THE REFORMED TYRANNY (IMPACT)",
        actTitle: "Government of India Act",
        actItems: ["Company Rule Ended → Crown Power.", "Lord Canning: First Viceroy."],
        actOffice: "New Office:",
        actOfficeText: "Secretary of State + Council of India (15 members) based in London.",
        queensProc: "Queen's Proclamation",
        queensProcDate: "Nov 1, 1858",

        armyTitle: "Army Reorganization",
        peelStamp: "PEEL COMMISSION",
        bengalRatio: "Bengal Ratio",
        madrasRatio: "Madras Ratio",
        armyTheory: 'Theory: "Martial Races" (Sikhs/Gurkhas) recruited more. Non-Martial (Awadh/Bihar) de-prioritized.',
        act1861Title: "Act of 1861",
        act1861Text: "Representative starts. 3 Indians nominated (Patiala, Benaras, Dinkar Rao).",
        whiteMutiny: "White Mutiny (1859)",
        whiteMutinyText: "EIC European troops mutinied over transfer to Queen's Army without bonus.",

        // Historians
        historiansTitle: "THE HISTORIANS' VERDICT",
        historians: [
            { name: "V.D. Savarkar", book: "Book: The Indian War of Independence, 1857", view: '"It was the **First War of Independence**."' },
            { name: "R.C. Majumdar", book: "Book: The Sepoy Mutiny...", view: '"It was neither first, nor national, nor a war of independence."' },
            { name: "S.N. Sen", book: "Book: Eighteen Fifty-Seven", view: "Official historian of India. Took a balanced, objective view." },
        ],
        historiansExtra: ['Benjamin Disraeli: "National Rising"', 'Holmes: "Civilization vs Barbarism"', 'Outram: "A Mohammedan Conspiracy"'],

        // Footer
        tragicTitle: "THE TRAGIC END",
        tragicLeaders: [
            { name: "Bahadur Shah Zafar", fate: "Exiled to Rangoon (1858). Died 1862. Unfortunate burial away from beloved city." },
            { name: "Nana Saheb & Begum", fate: "Escaped to the Nepal jungles. Never captured. Remained a silent threat." },
            { name: "Kunwar Singh", fate: "Died of wounds (Apr 1858) after chopping his own gangrenous hand." },
        ],
        footerTelegraph: "--- THE ELECTRIC TELEGRAPH HAS SAVED INDIA --- (Lord Canning)",
        footerConclusion: "CHAPTER 7 CONCLUDED",
        footerSubtext: "The Smoke Clears. The Crown Emerges.",
    },

    hi: {
        // Hero
        heroTitle: "1857: महान विद्रोह",
        heroSubtitle: "--- प्रथम स्वतंत्रता संग्राम ---",
        topSecretStamp: "अत्यंत गोपनीय",
        telegramHeader: "वेस्टर्न यूनियन टेलीग्राफ़ कं.",
        telegramDate: "दिनांक: 11 मई 1857",
        telegramBody: "तत्काल ::: मेरठ से सिपाही दिल्ली पहुँचे रुको बहादुर शाह को सम्राट घोषित किया रुको शहर में आग रुको क्रांति शुरू हो गई रुको",
        telegramEnd: "संदेश समाप्त",

        // Causes
        causesTitle: "बारूद का पीपा (कारण)",
        economicTitle: "आर्थिक बर्बादी",
        economicText: '"किसान कर्ज़ में, शिल्पकार बर्बाद।" भारी कराधान (भू-राजस्व) और ब्रिटिश आयात से पारंपरिक उद्योग का विनाश।',
        politicalTitle: "राजनीतिक अपमान",
        politicalItems: [
            { bold: "व्यपगत का सिद्धांत:", text: " झाँसी, सतारा आदि अधिग्रहित।" },
            { bold: "नाना साहेब:", text: " पेंशन अस्वीकार (बाजी राव II के दत्तक पुत्र)।" },
            { bold: "ज़फ़र:", text: " लाल किला छोड़ कुतुब जाने को कहा।" },
        ],
        religiousTitle: "धार्मिक भय",
        religiousText: "मिशनरियों द्वारा धर्मांतरण का भय। रीति-रिवाजों में हस्तक्षेप (सती/विधवा पुनर्विवाह)।",
        religiousAct: "धार्मिक अक्षमता अधिनियम (1850):",
        religiousActText: " धर्मांतरितों को संपत्ति विरासत का अधिकार।",
        militaryTitle: "सिपाही की पीड़ा",
        militaryText: "समुद्र पार जाना अनिवार्य (जाति भ्रष्ट)। अंग्रेज़ों की तुलना में कम वेतन और पदोन्नति नहीं।",
        militaryAct: "सामान्य सेवा भर्ती अधिनियम (1856):",

        // Immediate
        sparkTitle: "तात्कालिक चिनगारी",
        sparkStamp: "सत्यापित रिपोर्ट",
        sparkText: "चर्बी लगे कारतूसों में कथित रूप से गाय और सुअर की चर्बी। काटकर लोड करना ज़रूरी। हिंदू और मुसलमान दोनों के लिए अपमानजनक।",
        sparkLabel: "एनफ़ील्ड राइफ़ल:",

        // Timeline
        timelineTitle: "आग की राह",
        timeline: [
            { place: "बैरकपुर (29 मार्च)", text: "मंगल पांडे ने लेफ्ट. बॉ पर हमला। 8 अप्रैल को फाँसी। प्रथम शहीद।" },
            { place: "मेरठ (10 मई)", text: 'तीसरी देशी घुड़सवार सेना ने विद्रोह किया। अधिकारी मारे गए। क़ैदी मुक्त। "चलो दिल्ली!" की गूँज।' },
            { place: "दिल्ली (11 मई)", text: "बहादुर शाह को शहंशाह-ए-हिंदुस्तान घोषित। जनरल बख्त ख़ान (बरेली) ने सैन्य नियंत्रण लिया।" },
        ],

        // Matchups
        matchupTitle: "युद्धक्षेत्र मुकाबले",
        encounterStamp: "मुठभेड़ रिकॉर्ड",
        rebelLabel: "विद्रोही",
        suppressorLabel: "दमनकर्ता",
        finalOutcome: "अंतिम परिणाम:",
        advisorLabel: "सलाहकार:",
        advisorBrain: "(योजना के पीछे का दिमाग)",
        hiddenHero: "छिपे नायक:",
        jhansiQuote: '"मैं अपनी झाँसी नहीं दूँगी!"',
        jhansiQuoteBy: "— रानी लक्ष्मीबाई, जनरल रोज़ से",

        matchups: [
            { place: "दिल्ली", rebel: "बहादुर शाह / बख्त ख़ान", british: "जॉन निकलसन व लेफ्ट. हडसन", fate: "निकलसन दिल्ली अभियान में मरे। हडसन ने शहज़ादों को मारा। ज़फ़र रंगून निर्वासित।" },
            { place: "कानपुर", rebel: "नाना साहेब (धोंडू पंत) व तांत्या टोपे", british: "सर कॉलिन कैंपबेल व सर ह्यू व्हीलर", fate: "नाना नेपाल भागे। तांत्या को मान सिंह ने धोखा दिया, फाँसी (1859)।", advisor: "अज़ीमुल्लाह ख़ान (दिमाग)" },
            { place: "लखनऊ", rebel: "बेगम हज़रत महल (पुत्र बिरजिस क़द्र हेतु)", british: "हेनरी लॉरेंस, हैवलॉक, आउट्रम, कैंपबेल", fate: "लॉरेंस रेसीडेंसी में मरे। बेगम नेपाल भागीं।" },
            { place: "झाँसी / ग्वालियर", rebel: "रानी लक्ष्मीबाई व तांत्या टोपे", british: "सर ह्यू रोज़", fate: "रानी ग्वालियर में वीरगति (जून 1858)। 'विद्रोहियों में एकमात्र मर्द' उक्ति।" },
            { place: "बिहार (जगदीशपुर)", rebel: "कुँवर सिंह व अमर सिंह", british: "विलियम टेलर व विन्सेंट आयर", fate: "कुँवर सिंह (80 वर्ष) 1858 में शहीद। अमर ने छापामार जारी रखा।", hidden: "पीर अली (पटना पुस्तक विक्रेता) — टेलर ने फाँसी दी।" },
            { place: "फ़ैज़ाबाद", rebel: "मौलवी अहमदुल्लाह (डंका शाह)", british: "कैंपबेल / जनरल होप ग्रांट", fate: "पोवैन के राजा ने विश्वासघात। फाँसी। 50 हज़ार इनाम।" },
            { place: "बरेली", rebel: "ख़ान बहादुर ख़ान", british: "सर कॉलिन कैंपबेल", fate: "अपनी सरकार बनाई। मृत्युदंड।" },
            { place: "इलाहाबाद", rebel: "मौलवी लियाक़त अली", british: "कर्नल नील", fate: "नील द्वारा क्रूर दमन।" },
        ],

        // Minor leaders
        minorTitle: "बिखरी चिनगारियाँ (छोटे नेता)",
        minorLeaders: [
            { region: "मथुरा", name: "देवी सिंह" },
            { region: "मेरठ", name: "कदम सिंह" },
            { region: "गोरखपुर", name: "गजाधर सिंह" },
            { region: "राजस्थान", name: "जयदयाल/हरदयाल (कोटा)" },
            { region: "असम", name: "दीवान मणिराम दत्ता" },
            { region: "ओडिशा", name: "सुरेन्द्र साई" },
        ],

        // Why failed
        failedTitle: "असफल क्यों?",
        loyalistsTitle: "वफ़ादार",
        loyalistsText: "सिंधिया (ग्वालियर), होल्कर (इंदौर), निज़ाम (हैदराबाद), और सिख/गोरखा अंग्रेज़ों के साथ रहे।",
        loyalistsStamp: "कैनिंग की टिप्पणी",
        loyalistsQuote: '"अगर सिंधिया विद्रोह में शामिल हो जाए, तो मैं कल बोरिया-बिस्तर बाँध लूँगा।" — लॉर्ड कैनिंग।',
        splitTitle: "आंतरिक विभाजन",
        splitText: "आधुनिक शिक्षित भारतीयों ने विद्रोह का समर्थन नहीं किया। उन्होंने इसे पिछड़ी सामंतवादी सोच माना।",
        splitLabel: "बुद्धिजीवी वर्ग:",
        splitBullets: ["कमज़ोर हथियार (तलवार बनाम एनफ़ील्ड)", "सीमित पहुँच (दक्षिण/पश्चिम शांत)"],

        unityBadge: "अनूठी विशेषता",
        unityTitle: "हिंदू-मुस्लिम एकता",
        unityQuote: '"इस बार हम मुसलमानों को हिंदुओं के विरुद्ध नहीं खड़ा कर सके"',
        unityQuoteBy: "— एचिसन (ब्रिटिश अधिकारी)",
        unityPoints: [
            "विद्रोहियों ने दिल्ली/UP में गोहत्या पर प्रतिबंध लगाया।",
            "ज़फ़र, मुस्लिम बादशाह, हिंदू सरदारों ने सम्राट माना।",
            "अज़ीमुल्लाह और तांत्या टोपे ने मिलकर योजना बनाई।",
        ],

        // Impact
        impactTitle: "सुधारा हुआ अत्याचार (प्रभाव)",
        actTitle: "भारत शासन अधिनियम",
        actItems: ["कंपनी शासन समाप्त → राजशाही सत्ता।", "लॉर्ड कैनिंग: प्रथम वायसराय।"],
        actOffice: "नया कार्यालय:",
        actOfficeText: "भारत सचिव + भारत परिषद (15 सदस्य) लंदन में।",
        queensProc: "रानी की घोषणा",
        queensProcDate: "1 नवंबर 1858",

        armyTitle: "सेना पुनर्गठन",
        peelStamp: "पील आयोग",
        bengalRatio: "बंगाल अनुपात",
        madrasRatio: "मद्रास अनुपात",
        armyTheory: 'सिद्धांत: "मार्शल नस्लें" (सिख/गोरखा) ज़्यादा भर्ती। गैर-मार्शल (अवध/बिहार) पीछे।',
        act1861Title: "1861 का अधिनियम",
        act1861Text: "प्रतिनिधित्व की शुरुआत। 3 भारतीय नामित (पटियाला, बनारस, दिनकर राव)।",
        whiteMutiny: "श्वेत विद्रोह (1859)",
        whiteMutinyText: "EIC के यूरोपीय सैनिकों ने बिना बोनस रानी की सेना में स्थानांतरण पर विद्रोह किया।",

        // Historians
        historiansTitle: "इतिहासकारों का निर्णय",
        historians: [
            { name: "वी.डी. सावरकर", book: "पुस्तक: The Indian War of Independence, 1857", view: '"यह प्रथम स्वतंत्रता संग्राम था।"' },
            { name: "आर.सी. मजूमदार", book: "पुस्तक: The Sepoy Mutiny...", view: '"यह न प्रथम था, न राष्ट्रीय, न स्वतंत्रता युद्ध।"' },
            { name: "एस.एन. सेन", book: "पुस्तक: Eighteen Fifty-Seven", view: "भारत के आधिकारिक इतिहासकार। संतुलित, वस्तुनिष्ठ दृष्टिकोण।" },
        ],
        historiansExtra: ['बेंजामिन डिज़रायली: "राष्ट्रीय उत्थान"', 'होम्स: "सभ्यता बनाम बर्बरता"', 'आउट्रम: "एक मुस्लिम षड्यंत्र"'],

        // Footer
        tragicTitle: "दुखद अंत",
        tragicLeaders: [
            { name: "बहादुर शाह ज़फ़र", fate: "रंगून निर्वासित (1858)। 1862 में मृत्यु। प्रिय शहर से दूर दुर्भाग्यपूर्ण दफ़न।" },
            { name: "नाना साहेब व बेगम", fate: "नेपाल के जंगलों में भागे। कभी पकड़े नहीं गए। मौन खतरा बने रहे।" },
            { name: "कुँवर सिंह", fate: "घावों से मृत्यु (अप्रैल 1858) — अपना सड़ा हाथ स्वयं काटा था।" },
        ],
        footerTelegraph: "--- विद्युत तार ने भारत बचाया --- (लॉर्ड कैनिंग)",
        footerConclusion: "अध्याय 7 समाप्त",
        footerSubtext: "धुआँ छँटता है। ताज उभरता है।",
    },
};
