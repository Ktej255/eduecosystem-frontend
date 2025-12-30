// Mundaka Upanishad Data
// Source: Atharva Veda | 3 Mundakas, 6 Khandas, 64 Verses
// Theme: Para Vidya vs Apara Vidya, Two Birds, Satyameva Jayate

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface MundakaDataEntry {
    id: number;
    mundaka: number;
    khanda: number;
    verse: number;
    theme: string;
    sanskrit: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
    wordMeanings?: WordMeaning[];
}

export const MUNDAKA_SHLOKAS: MundakaDataEntry[] = [
    // ==========================================
    // MUNDAKA 1, KHANDA 1: THE TWO KNOWLEDGES
    // ==========================================

    {
        id: 1,
        mundaka: 1,
        khanda: 1,
        verse: 1,
        theme: "The First Teacher",
        sanskrit: "ब्रह्मा देवानां प्रथमः सम्बभूव विश्वस्य कर्ता भुवनस्य गोप्ता । स ब्रह्मविद्यां सर्वविद्याप्रतिष्ठामथर्वाय ज्येष्ठपुत्राय प्राह ॥ १ ॥",
        hindi: "देवताओं में प्रथम 'ब्रह्मा' उत्पन्न हुए, जो विश्व के रचयिता और भुवन के रक्षक हैं। उन्होंने अपने ज्येष्ठ पुत्र 'अथर्वा' को ब्रह्मविद्या का उपदेश दिया।",
        english: "Brahma arose as the first among the gods, the Creator of the universe and Protector of the world. He taught the Knowledge of Brahman to his eldest son Atharva.",
        simpleExplanation: "Brahma, the Creator, passed down the ultimate knowledge to his son Atharva—the first link in the chain of wisdom.",
        simpleExplanationHindi: "ब्रह्मा ने अपने पुत्र अथर्वा को परम ज्ञान दिया—ज्ञान की श्रृंखला की पहली कड़ी।",
        nanoBananaPrompt: "Brahma teaching his son Atharva, passing a glowing orb of wisdom from hand to hand.",
        wordMeanings: [
            { sanskrit: "brahmā", devanagari: "ब्रह्मा", hindi: "ब्रह्मा", english: "Creator God" },
            { sanskrit: "brahma-vidyām", devanagari: "ब्रह्मविद्याम्", hindi: "ब्रह्म का ज्ञान", english: "Knowledge of Brahman" },
            { sanskrit: "atharvā", devanagari: "अथर्वा", hindi: "अथर्वा", english: "eldest son" }
        ]
    },
    {
        id: 2,
        mundaka: 1,
        khanda: 1,
        verse: 2,
        theme: "The Lineage",
        sanskrit: "अथर्वणे यां प्रवदेत ब्रह्माथर्वा तं पुरोवाचाङ्गिरे ब्रह्मविद्याम् । स भारद्वाजाय सत्यवाहाय प्राह भारद्वाजोऽङ्गिरसे परावराम् ॥ २ ॥",
        hindi: "ब्रह्मा ने अथर्वा को जो ब्रह्मविद्या बताई, वही अथर्वा ने अंगीर को बताई। अंगीर ने भारद्वाज सत्यवह को, और उन्होंने अंगिरस को दी।",
        english: "That Knowledge Brahma taught to Atharva, Atharva taught to Angir. He taught it to Satyavaha Bharadwaja, who taught it to Angiras.",
        simpleExplanation: "The knowledge passed through a chain: Brahma → Atharva → Angir → Bharadwaja → Angiras. This is the Guru Parampara.",
        simpleExplanationHindi: "ज्ञान एक श्रृंखला से गुज़रा: ब्रह्मा → अथर्वा → अंगीर → भारद्वाज → अंगिरस। यही गुरु परंपरा है।",
        nanoBananaPrompt: "A chain of sages passing a flame from one to another through generations.",
        wordMeanings: [
            { sanskrit: "paramparā", devanagari: "परम्परा", hindi: "परंपरा", english: "lineage" },
            { sanskrit: "angiras", devanagari: "अङ्गिरस्", hindi: "अंगिरस", english: "sage Angiras" }
        ]
    },
    {
        id: 3,
        mundaka: 1,
        khanda: 1,
        verse: 3,
        theme: "The Great Question",
        sanskrit: "शौनको ह वै महाशालोऽङ्गिरसं विधिवदुपसन्नः पप्रच्छ । कस्मिन्नु भगवो विज्ञाते सर्वमिदं विज्ञातं भवतीति ॥ ३ ॥",
        hindi: "महाशाल शौनक ने अंगिरस ऋषि से विधिवत पूछा: 'हे भगवन्! वह क्या है जिसके जान लेने पर यह सब कुछ जान लिया जाता है?'",
        english: "The great householder Shaunaka asked Angiras: 'What is that, knowing which, everything else becomes known?'",
        simpleExplanation: "THE CENTRAL QUESTION: Is there ONE thing whose knowledge reveals EVERYTHING? A 'Theory of Everything'?",
        simpleExplanationHindi: "मूल प्रश्न: क्या कोई एक चीज़ है जिसे जानने से सब कुछ पता चल जाए? एक 'सर्व का सिद्धांत'?",
        nanoBananaPrompt: "A student asking a sage the ultimate question, with a question mark transforming into the universe.",
        wordMeanings: [
            { sanskrit: "kasmin vijñāte", devanagari: "कस्मिन्विज्ञाते", hindi: "किसे जानने से", english: "knowing which" },
            { sanskrit: "sarvam vijñātam", devanagari: "सर्वं विज्ञातम्", hindi: "सब ज्ञात", english: "everything known" }
        ]
    },
    {
        id: 4,
        mundaka: 1,
        khanda: 1,
        verse: 4,
        theme: "Two Knowledges",
        sanskrit: "तस्मै स होवाच । द्वे विद्ये वेदितव्ये इति ह स्म यद्ब्रह्मविदो वदन्ति । परा चैवापरा च ॥ ४ ॥",
        hindi: "उन्होंने उत्तर दिया: 'ब्रह्मवेत्ता कहते हैं कि दो प्रकार की विद्याएं जाननी चाहिए—एक परा (Higher) और दूसरी अपरा (Lower)।'",
        english: "He replied: 'Two kinds of knowledge are to be known—the Higher (Para) and the Lower (Apara).'",
        simpleExplanation: "THE ANSWER: There are TWO types of knowledge. Lower = academic/ritual. Higher = spiritual/Brahman.",
        simpleExplanationHindi: "उत्तर: दो प्रकार का ज्ञान है। निम्न = शैक्षिक/अनुष्ठान। उच्च = आध्यात्मिक/ब्रह्म।",
        nanoBananaPrompt: "Two paths diverging—one leads to books and rituals, the other to a radiant light.",
        wordMeanings: [
            { sanskrit: "parā", devanagari: "परा", hindi: "उच्च", english: "Higher" },
            { sanskrit: "aparā", devanagari: "अपरा", hindi: "निम्न", english: "Lower" }
        ]
    },
    {
        id: 5,
        mundaka: 1,
        khanda: 1,
        verse: 5,
        theme: "Lower Knowledge Defined",
        sanskrit: "तत्रापरा ऋग्वेदो यजुर्वेदः सामवेदोऽथर्ववेदः शिक्षा कल्पो व्याकरणं निरुक्तं छन्दो ज्योतिषमिति । अथ परा यया तदक्षरमधिगम्यते ॥ ५ ॥",
        hindi: "'अपरा' विद्या: ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद, शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष। और 'परा' विद्या वह है जिससे अक्षर ब्रह्म का ज्ञान होता है।",
        english: "Lower Knowledge is the Four Vedas plus Phonetics, Rituals, Grammar, Etymology, Metrics, and Astronomy. Higher Knowledge is that by which the Imperishable is realized.",
        simpleExplanation: "SHOCKING: Even the FOUR VEDAS are 'lower' knowledge! The Higher is direct realization of the Imperishable.",
        simpleExplanationHindi: "चौंकाने वाला: चारों वेद भी 'निम्न' ज्ञान हैं! उच्च है अक्षर का प्रत्यक्ष साक्षात्कार।",
        nanoBananaPrompt: "Four Vedas as books below, a formless light (Akshara) above them all.",
        wordMeanings: [
            { sanskrit: "akṣaram", devanagari: "अक्षरम्", hindi: "अक्षर/अविनाशी", english: "Imperishable" },
            { sanskrit: "ṣaḍ-aṅga", devanagari: "षडङ्ग", hindi: "छह अंग", english: "six limbs of Vedas" }
        ]
    },
    {
        id: 6,
        mundaka: 1,
        khanda: 1,
        verse: 6,
        theme: "The Imperishable Described",
        sanskrit: "यत्तदद्रेश्यमग्राह्यमगोत्रमवर्णमचक्षुःश्रोत्रं तदपाणिपादम् । नित्यं विभुं सर्वगतं सुसूक्ष्मं तदव्ययं यद्भूतयोनिं परिपश्यन्ति धीराः ॥ ६ ॥",
        hindi: "जो अदृश्य, अग्राह्य, गोत्र-रहित, वर्ण-रहित, आँख-कान-हाथ-पैर रहित है; जो नित्य, व्यापक, सर्वगत, सूक्ष्म और अव्यय है—उसे ही धीर पुरुष 'भूतयोनि' के रूप में देखते हैं।",
        english: "That which is invisible, ungraspable, without lineage or color, without eyes, ears, hands or feet; Eternal, All-pervading, Omnipresent, Extremely Subtle—That the wise see as the Source of all beings.",
        simpleExplanation: "Brahman has NO physical attributes—no color, no form, no senses. Yet it is the SOURCE of everything.",
        simpleExplanationHindi: "ब्रह्म का कोई भौतिक गुण नहीं—न रंग, न रूप, न इंद्रियां। फिर भी यह सब का स्रोत है।",
        nanoBananaPrompt: "A formless, colorless radiance from which all forms and colors emerge.",
        wordMeanings: [
            { sanskrit: "adṛśyam", devanagari: "अदृश्यम्", hindi: "अदृश्य", english: "invisible" },
            { sanskrit: "bhūta-yonim", devanagari: "भूतयोनिम्", hindi: "सबका स्रोत", english: "source of beings" }
        ]
    },
    {
        id: 7,
        mundaka: 1,
        khanda: 1,
        verse: 7,
        theme: "Spider Analogy",
        sanskrit: "यथोर्णनाभिः सृजते गृह्णते च यथा पृथिव्यामोषधयः सम्भवन्ति । यथा सतः पुरुषात्केशलोमानि तथाक्षरात्सम्भवतीह विश्वम् ॥ ७ ॥",
        hindi: "जैसे मकड़ी जाले को निकालती और समेटती है; जैसे पृथ्वी से पौधे उगते हैं; जैसे शरीर से बाल निकलते हैं—वैसे ही अक्षर ब्रह्म से यह विश्व उत्पन्न होता है।",
        english: "As the Spider sends forth and draws back its web; as herbs grow from earth; as hair grows from a person—so does the Universe arise from the Imperishable.",
        simpleExplanation: "SPIDER ANALOGY: The universe comes OUT of Brahman (like web from spider) and goes BACK into it.",
        simpleExplanationHindi: "मकड़ी उपमा: ब्रह्मांड ब्रह्म से निकलता है (जैसे जाला मकड़ी से) और वापस उसी में जाता है।",
        nanoBananaPrompt: "A cosmic spider spinning a web that becomes the universe, then drawing it back in.",
        wordMeanings: [
            { sanskrit: "ūrṇa-nābhiḥ", devanagari: "ऊर्णनाभिः", hindi: "मकड़ी", english: "spider" },
            { sanskrit: "sṛjate gṛhṇate", devanagari: "सृजते गृह्णते", hindi: "बनाती और समेटती", english: "creates and withdraws" }
        ]
    },
    {
        id: 8,
        mundaka: 1,
        khanda: 1,
        verse: 8,
        theme: "Process of Creation",
        sanskrit: "तपसा चीयते ब्रह्म ततोऽन्नमभिजायते । अन्नात्प्राणो मनः सत्यं लोकाः कर्मसु चामृतम् ॥ ८ ॥",
        hindi: "तप से ब्रह्म विस्तार को प्राप्त होता है। उससे 'अन्न' उत्पन्न होता है। अन्न से प्राण, मन, सत्य (पंचभूत), लोक, और कर्मफल उत्पन्न होते हैं।",
        english: "By Tapas (Concentration), Brahman expands. From It, Food (Matter) is born. From Food: Prana, Mind, the Elements, the Worlds, and Immortality through Karma.",
        simpleExplanation: "Creation sequence: Brahman → Tapas → Matter → Prana → Mind → Elements → Worlds → Karma.",
        simpleExplanationHindi: "सृष्टि क्रम: ब्रह्म → तप → पदार्थ → प्राण → मन → तत्व → लोक → कर्म।",
        nanoBananaPrompt: "A cascading flow from pure light through matter, life, mind, and worlds.",
        wordMeanings: [
            { sanskrit: "tapasā", devanagari: "तपसा", hindi: "तप से", english: "by concentration" },
            { sanskrit: "annam", devanagari: "अन्नम्", hindi: "अन्न/पदार्थ", english: "food/matter" }
        ]
    },
    {
        id: 9,
        mundaka: 1,
        khanda: 1,
        verse: 9,
        theme: "All-Knowing Creator",
        sanskrit: "यः सर्वज्ञः सर्वविद्यस्य ज्ञानमयं तपः । तस्मादेतद्ब्रह्म नाम रूपमन्नं च जायते ॥ ९ ॥",
        hindi: "जो सर्वज्ञ और सर्ववित् है, जिसका तप ज्ञानमय है—उसी से ब्रह्मा, नाम, रूप और अन्न उत्पन्न होते हैं।",
        english: "He who knows all and perceives all, whose austerity is Knowledge—from Him are born Brahma (Hiranyagarbha), Name, Form, and Food.",
        simpleExplanation: "The All-Knowing One creates through KNOWLEDGE, not physical action. From Him come names and forms.",
        simpleExplanationHindi: "सर्वज्ञ ज्ञान से सृजन करता है, शारीरिक क्रिया से नहीं। उससे नाम और रूप आते हैं।",
        nanoBananaPrompt: "A cosmic being whose thoughts become names, forms, and the material world.",
        wordMeanings: [
            { sanskrit: "sarva-jñaḥ", devanagari: "सर्वज्ञः", hindi: "सर्वज्ञ", english: "all-knowing" },
            { sanskrit: "nāma-rūpam", devanagari: "नामरूपम्", hindi: "नाम-रूप", english: "name and form" }
        ]
    },

    // ==========================================
    // MUNDAKA 1, KHANDA 2: RITUALS VS WISDOM
    // ==========================================

    {
        id: 10,
        mundaka: 1,
        khanda: 2,
        verse: 1,
        theme: "Truth of Rituals",
        sanskrit: "तदेतत्सत्यं मन्त्रेषु कर्माणि कवयो यान्यपश्यंस्तानि त्रेतायां बहुधा सन्ततानि । तान्याचरथ नियतं सत्यकामा एष वः पन्थाः सुकृतस्य लोके ॥ १ ॥",
        hindi: "यह सत्य है: ऋषियों ने मंत्रों में जिन कर्मों को देखा, वे तीनों वेदों में विस्तृत हैं। हे सत्य-काम! तुम उनका आचरण करो। यह स्वर्ग का मार्ग है।",
        english: "This is the truth: The sacrificial works the sages saw in the hymns are elaborated in the three Vedas. Perform them constantly. This is your path to the world of good deeds.",
        simpleExplanation: "Rituals from the Vedas lead to heaven—but heaven is NOT the final goal. This is still 'lower' knowledge.",
        simpleExplanationHindi: "वेदों के अनुष्ठान स्वर्ग की ओर ले जाते हैं—पर स्वर्ग अंतिम लक्ष्य नहीं है। यह अभी भी 'निम्न' ज्ञान है।",
        nanoBananaPrompt: "Priests performing Vedic rituals with fire, a path leading to heavenly clouds.",
        wordMeanings: [
            { sanskrit: "satya-kāmāḥ", devanagari: "सत्यकामाः", hindi: "सत्य-इच्छुक", english: "desiring results" }
        ]
    },
    {
        id: 11,
        mundaka: 1,
        khanda: 2,
        verse: 7,
        theme: "The Frail Raft",
        sanskrit: "प्लवा ह्येते अदृढा यज्ञरूपा अष्टादशोक्तमवरं येषु कर्म । एतच्छ्रेयो येऽभिनन्दन्ति मूढा जरामृत्युं ते पुनरेवापि यन्ति ॥ ७ ॥",
        hindi: "ये यज्ञ रूपी नौकाएं अदृढ़ (कमजोर) हैं। जो मूढ़ लोग इसे ही श्रेय मानते हैं, वे बार-बार जरा और मृत्यु को प्राप्त होते हैं।",
        english: "Verily, these rafts of sacrifice are FRAIL. The fools who rejoice in this as the highest good fall again and again into old age and death.",
        simpleExplanation: "POWERFUL WARNING: Rituals are like WEAK boats—they cannot carry you to immortality. They lead to rebirth.",
        simpleExplanationHindi: "शक्तिशाली चेतावनी: अनुष्ठान कमजोर नावों जैसे हैं—वे आपको अमरता तक नहीं ले जा सकतीं।",
        nanoBananaPrompt: "A fragile raft sinking in the ocean while swimmers try to reach a distant shore.",
        wordMeanings: [
            { sanskrit: "plavāḥ adṛḍhāḥ", devanagari: "प्लवाः अदृढाः", hindi: "कमजोर नाव", english: "frail rafts" },
            { sanskrit: "jarā-mṛtyum", devanagari: "जरामृत्युम्", hindi: "बुढ़ापा-मृत्यु", english: "old age and death" }
        ]
    },
    {
        id: 12,
        mundaka: 1,
        khanda: 2,
        verse: 8,
        theme: "Blind Leading Blind",
        sanskrit: "अविद्यायामन्तरे वर्तमानाः स्वयं धीराः पण्डितं मन्यमानाः । जङ्घन्यमानाः परियन्ति मूढा अन्धेनैव नीयमाना यथान्धाः ॥ ८ ॥",
        hindi: "अविद्या में रहने वाले, स्वयं को बुद्धिमान और पंडित मानने वाले, वे मूढ़ लोग भटकते रहते हैं—जैसे अंधे द्वारा ले जाए जाने वाले अंधे।",
        english: "Fools dwelling in ignorance, yet imagining themselves wise and learned, go round in crooked ways—like the blind led by the blind.",
        simpleExplanation: "FAMOUS VERSE: Scholars who know only rituals are like BLIND people leading BLIND followers.",
        simpleExplanationHindi: "प्रसिद्ध श्लोक: जो विद्वान केवल अनुष्ठान जानते हैं, वे अंधों को ले जाने वाले अंधे हैं।",
        nanoBananaPrompt: "A line of blindfolded scholars leading each other in circles.",
        wordMeanings: [
            { sanskrit: "andhena nīyamānāḥ", devanagari: "अन्धेन नीयमानाः", hindi: "अंधे द्वारा ले जाया गया", english: "led by the blind" }
        ]
    },
    {
        id: 13,
        mundaka: 1,
        khanda: 2,
        verse: 10,
        theme: "The Rebirth Trap",
        sanskrit: "इष्टापूर्तं मन्यमाना वरिष्ठं नान्यच्छ्रेयो वेदयन्ते प्रमूढाः । नाकस्य पृष्ठे ते सुकृतेऽनुभूत्वेमं लोकं हीनतरं वा विशन्ति ॥ १० ॥",
        hindi: "वे मूढ़ लोग यज्ञ और समाज सेवा को ही श्रेष्ठ मानते हैं। स्वर्ग में पुण्य भोगकर, वे फिर इस लोक या निम्न योनियों में आते हैं।",
        english: "Thinking sacrifices and public works to be the highest, these deluded men know no other good. Having enjoyed heaven, they re-enter this world or an inferior one.",
        simpleExplanation: "Even GOOD karma (charity, rituals) only buys a TEMPORARY ticket to heaven. Then you fall back down.",
        simpleExplanationHindi: "अच्छा कर्म (दान, यज्ञ) भी स्वर्ग का केवल अस्थायी टिकट खरीदता है। फिर आप वापस गिरते हैं।",
        nanoBananaPrompt: "A soul enjoying heaven briefly, then falling back down into the cycle of rebirth.",
        wordMeanings: [
            { sanskrit: "nākasya pṛṣṭhe", devanagari: "नाकस्य पृष्ठे", hindi: "स्वर्ग में", english: "on the heights of heaven" }
        ]
    },
    {
        id: 14,
        mundaka: 1,
        khanda: 2,
        verse: 11,
        theme: "Path of Forest Sages",
        sanskrit: "तपःश्रद्धे ये ह्युपवसन्त्यरण्ये शान्ता विद्वांसो भैक्ष्यचर्यां चरन्तः । सूर्यद्वारेण ते विरजाः प्रयान्ति यत्रामृतः स पुरुषो ह्यव्ययात्मा ॥ ११ ॥",
        hindi: "जो शांत विद्वान वन में तप और श्रद्धा का सेवन करते हैं और भिक्षा से जीते हैं—वे सूर्य-द्वार से उस अमर पुरुष के पास जाते हैं।",
        english: "But those wise men of tranquil minds who live in the forest on alms, practicing penance—they depart through the Gate of the Sun to where the Immortal Person dwells.",
        simpleExplanation: "THE ALTERNATIVE: Forest hermits who practice austerity reach the IMMORTAL realm through the 'Sun Gate'.",
        simpleExplanationHindi: "विकल्प: तप करने वाले वन-ऋषि 'सूर्य द्वार' से अमर लोक पहुंचते हैं।",
        nanoBananaPrompt: "Hermits in a forest, a golden path leading through the sun to an immortal realm.",
        wordMeanings: [
            { sanskrit: "sūrya-dvāreṇa", devanagari: "सूर्यद्वारेण", hindi: "सूर्य द्वार से", english: "through the Gate of the Sun" }
        ]
    },
    {
        id: 15,
        mundaka: 1,
        khanda: 2,
        verse: 12,
        theme: "Seek a Guru",
        sanskrit: "परीक्ष्य लोकान्कर्मचितान्ब्राह्मणो निर्वेदमायान्नास्त्यकृतः कृतेन । तद्विज्ञानार्थं स गुरुमेवाभिगच्छेत् समित्पाणिः श्रोत्रियं ब्रह्मनिष्ठम् ॥ १२ ॥",
        hindi: "कर्मों से प्राप्त लोकों की नश्वरता को परखकर, ब्राह्मण को वैराग्य होना चाहिए। उस ज्ञान के लिए वह केवल उसी गुरु के पास जाए जो श्रोत्रिय और ब्रह्मनिष्ठ हो।",
        english: "Having examined the worlds gained by karma, let him arrive at Renunciation. To know That, let him approach a Guru who is learned in scriptures and established in Brahman.",
        simpleExplanation: "GURU STANDARD: First, become disillusioned with the world. Then find a Guru who KNOWS and LIVES in Brahman.",
        simpleExplanationHindi: "गुरु मानक: पहले, संसार से निराश हों। फिर उस गुरु को खोजें जो ब्रह्म को जानता और जीता हो।",
        nanoBananaPrompt: "A seeker with fuel in hand approaching a radiant guru in a forest ashram.",
        wordMeanings: [
            { sanskrit: "nirveda", devanagari: "निर्वेद", hindi: "वैराग्य", english: "renunciation/disillusionment" },
            { sanskrit: "brahma-niṣṭham", devanagari: "ब्रह्मनिष्ठम्", hindi: "ब्रह्म में स्थित", english: "established in Brahman" }
        ]
    },
    {
        id: 16,
        mundaka: 1,
        khanda: 2,
        verse: 13,
        theme: "Guru's Teaching",
        sanskrit: "तस्मै स विद्वानुपसन्नाय सम्यक्प्रशान्तचित्ताय शमान्विताय । येनाक्षरं पुरुषं वेद सत्यं प्रोवाच तां तत्त्वतो ब्रह्मविद्याम् ॥ १३ ॥",
        hindi: "उस विद्वान गुरु को चाहिए कि वह उस शांत चित्त और जितेन्द्रिय शिष्य को ब्रह्मविद्या का यथार्थ उपदेश दे।",
        english: "To that pupil who has approached respectfully, whose mind is at peace—the wise Teacher should truly teach that Knowledge of Brahman.",
        simpleExplanation: "The qualified STUDENT (peaceful, self-controlled) meets the qualified GURU. Then the TRUE teaching flows.",
        simpleExplanationHindi: "योग्य शिष्य (शांत, संयमित) योग्य गुरु से मिलता है। तब सच्ची शिक्षा प्रवाहित होती है।",
        nanoBananaPrompt: "A guru gently transmitting light to a peaceful student in meditation.",
        wordMeanings: [
            { sanskrit: "praśānta-cittāya", devanagari: "प्रशान्तचित्ताय", hindi: "शांत मन वाले को", english: "to one with peaceful mind" }
        ]
    },

    // ==========================================
    // MUNDAKA 2, KHANDA 1: THE SOURCE OF ALL
    // ==========================================

    {
        id: 17,
        mundaka: 2,
        khanda: 1,
        verse: 1,
        theme: "Fire and Sparks",
        sanskrit: "तदेतत्सत्यं यथा सुदीप्तात् पावकाद्विस्फुलिङ्गाः सहस्रशः प्रभवन्ते सरूपाः । तथाक्षराद्विविधाः सोम्य भावाः प्रजायन्ते तत्र चैवापियन्ति ॥ १ ॥",
        hindi: "जैसे प्रज्वलित अग्नि से उसी के समान हजारों चिंगारियां निकलती हैं; वैसे ही अक्षर ब्रह्म से जीव उत्पन्न होते हैं और उसी में लीन होते हैं।",
        english: "As from a blazing Fire thousands of sparks of the same nature issue forth; so from the Imperishable, manifold beings are born and merge back into Him.",
        simpleExplanation: "FIRE & SPARKS: All souls are like SPARKS from ONE cosmic fire. They come from Brahman and return to Brahman.",
        simpleExplanationHindi: "अग्नि और चिंगारी: सभी आत्माएं एक ब्रह्माण्डीय अग्नि की चिंगारियां हैं। वे ब्रह्म से आती हैं और वापस जाती हैं।",
        nanoBananaPrompt: "A great cosmic fire with thousands of sparks flying out and returning.",
        wordMeanings: [
            { sanskrit: "visphuliṅgāḥ", devanagari: "विस्फुलिङ्गाः", hindi: "चिंगारियां", english: "sparks" },
            { sanskrit: "sahasraśaḥ", devanagari: "सहस्रशः", hindi: "हजारों", english: "by thousands" }
        ]
    },
    {
        id: 18,
        mundaka: 2,
        khanda: 1,
        verse: 4,
        theme: "Cosmic Form (Virat)",
        sanskrit: "अग्निर्मूर्धा चक्षुषी चन्द्रसूर्यौ दिशः श्रोत्रे वाग्विवृताश्च वेदाः । वायुः प्राणो हृदयं विश्वमस्य पद्भ्यां पृथिवी ह्येष सर्वभूतान्तरात्मा ॥ ४ ॥",
        hindi: "अग्नि जिसका मस्तक है, चन्द्र-सूर्य आंखें हैं, दिशाएं कान हैं, वेद वाणी हैं, वायु प्राण है, विश्व हृदय है, पृथ्वी पैर हैं—वह सबकी अंतरात्मा है।",
        english: "Fire is His head, Sun and Moon His eyes, Quarters His ears, Vedas His speech, Wind His breath, Universe His heart, Earth His feet—He is the Inner Self of all beings.",
        simpleExplanation: "COSMIC BODY: The entire universe IS God's body. The sun/moon are eyes, earth is feet, space is ears!",
        simpleExplanationHindi: "विराट शरीर: पूरा ब्रह्मांड ईश्वर का शरीर है। सूर्य-चंद्र आंखें हैं, पृथ्वी पैर, आकाश कान!",
        nanoBananaPrompt: "A cosmic being whose body IS the universe—sun/moon as eyes, earth as feet.",
        wordMeanings: [
            { sanskrit: "sarva-bhūta-antarātmā", devanagari: "सर्वभूतान्तरात्मा", hindi: "सबकी अंतरात्मा", english: "Inner Self of all" }
        ]
    },
    {
        id: 19,
        mundaka: 2,
        khanda: 1,
        verse: 10,
        theme: "Knot of Ignorance",
        sanskrit: "पुरुष एवेदं विश्वं कर्म तपो ब्रह्म परामृतम् । एतद्यो वेद निहितं गुहायां सोऽविद्याग्रन्थिं विकिरतीह सोम्य ॥ १० ॥",
        hindi: "यह पुरुष ही यह समस्त विश्व है—कर्म, तप और परम अमृत ब्रह्म। जो हृदय-गुफा में इसे जानता है, वह यहीं अविद्या की गांठ को काट देता है।",
        english: "The Purusha alone is all this—Karma, Tapas, and Supreme Brahman. He who knows this in the cave of the heart cuts asunder the Knot of Ignorance here.",
        simpleExplanation: "THE KNOT: Ignorance is like a KNOT in your heart. Self-Knowledge CUTS it. Then you're FREE—in THIS life!",
        simpleExplanationHindi: "गांठ: अज्ञान हृदय में एक गांठ है। आत्मज्ञान इसे काटता है। फिर आप इसी जीवन में मुक्त!",
        nanoBananaPrompt: "A knot in the heart being cut by the sword of knowledge, releasing light.",
        wordMeanings: [
            { sanskrit: "avidyā-granthim", devanagari: "अविद्याग्रन्थिम्", hindi: "अज्ञान की गांठ", english: "knot of ignorance" },
            { sanskrit: "vikiratī", devanagari: "विकिरती", hindi: "काट देता है", english: "cuts asunder" }
        ]
    },

    // ==========================================
    // MUNDAKA 2, KHANDA 2: THE BOW AND ARROW
    // ==========================================

    {
        id: 20,
        mundaka: 2,
        khanda: 2,
        verse: 3,
        theme: "Bow Analogy",
        sanskrit: "धनुर्गृहीत्वौपनिषदं महास्त्रं शरं ह्युपासानिशितं सन्धयीत । आयम्य तद्भावगतेन चेतसा लक्ष्यं तदेवाक्षरं सोम्य विद्धि ॥ ३ ॥",
        hindi: "उपनिषद रूपी महान धनुष को लेकर, उपासना से पैना किया हुआ बाण चढ़ाओ। उस ब्रह्म के भाव में लीन चित्त से खींचकर, उस अक्षर लक्ष्य को बेध दो।",
        english: "Taking the BOW of the Upanishads, place on it the ARROW sharpened by meditation. Draw it with mind focused on That. Hit that Imperishable TARGET.",
        simpleExplanation: "FAMOUS ARCHERY ANALOGY: Upanishads = Bow, Meditation-sharpened mind = Arrow, Brahman = Target. SHOOT!",
        simpleExplanationHindi: "प्रसिद्ध धनुष उपमा: उपनिषद = धनुष, ध्यान-तीक्ष्ण मन = बाण, ब्रह्म = लक्ष्य। बेधो!",
        nanoBananaPrompt: "An archer drawing a bow made of scriptures, aiming at a radiant target.",
        wordMeanings: [
            { sanskrit: "dhanuḥ", devanagari: "धनुः", hindi: "धनुष", english: "bow" },
            { sanskrit: "śaram", devanagari: "शरम्", hindi: "बाण", english: "arrow" },
            { sanskrit: "lakṣyam", devanagari: "लक्ष्यम्", hindi: "लक्ष्य", english: "target" }
        ]
    },
    {
        id: 21,
        mundaka: 2,
        khanda: 2,
        verse: 4,
        theme: "OM is the Bow",
        sanskrit: "प्रणवो धनुः शरो ह्यात्मा ब्रह्म तल्लक्ष्यमुच्यते । अप्रमत्तेन वेद्धव्यं शरवत्तन्मयो भवेत् ॥ ४ ॥",
        hindi: "प्रणव (ॐ) धनुष है; आत्मा बाण है; ब्रह्म लक्ष्य है। सावधान होकर उसे बेधना चाहिए। जैसे बाण लक्ष्य में एक हो जाता है, वैसे ही तन्मय हो जाना चाहिए।",
        english: "OM is the Bow; the Atman is the Arrow; Brahman is the Target. Hit it undistracted—become one with It, as the arrow becomes one with the target.",
        simpleExplanation: "CLEARER: OM = Bow, YOUR SOUL = Arrow, BRAHMAN = Target. Become ONE with the target like arrow does!",
        simpleExplanationHindi: "स्पष्ट: ॐ = धनुष, आत्मा = बाण, ब्रह्म = लक्ष्य। बाण की तरह लक्ष्य में एक हो जाओ!",
        nanoBananaPrompt: "OM symbol as a bow, the soul as an arrow merging into a cosmic target.",
        wordMeanings: [
            { sanskrit: "praṇavaḥ", devanagari: "प्रणवः", hindi: "ओम", english: "OM" },
            { sanskrit: "tanmayaḥ", devanagari: "तन्मयः", hindi: "तल्लीन/एकाकार", english: "absorbed/one with" }
        ]
    },
    {
        id: 22,
        mundaka: 2,
        khanda: 2,
        verse: 5,
        theme: "Bridge to Immortality",
        sanskrit: "यस्मिन्द्यौः पृथिवी चान्तरिक्षमोतं मनः सह प्राणैश्च सर्वैः । तमेवैकं जानथ आत्मानमन्या वाचो विमुञ्चथ अमृतस्यैष सेतुः ॥ ५ ॥",
        hindi: "जिसमें आकाश, पृथ्वी, अंतरिक्ष और मन इन्द्रियों सहित बुने हैं—उस एक आत्मा को जानो; अन्य बातें छोड़ो। यही अमृतत्व का सेतु है।",
        english: "He in whom Sky, Earth, Space, and Mind with all senses are woven—know Him alone as the Self. Dismiss other words. He is the Bridge to Immortality.",
        simpleExplanation: "THE BRIDGE: Self-Knowledge is the BRIDGE to immortality. Stop all other talk. FOCUS on the ONE Self.",
        simpleExplanationHindi: "सेतु: आत्मज्ञान अमरता का पुल है। अन्य बातें छोड़ो। एक आत्मा पर ध्यान दो।",
        nanoBananaPrompt: "A bridge made of light crossing from the mortal world to an immortal realm.",
        wordMeanings: [
            { sanskrit: "amṛtasya setuḥ", devanagari: "अमृतस्य सेतुः", hindi: "अमृत का पुल", english: "bridge to immortality" }
        ]
    },
    {
        id: 23,
        mundaka: 2,
        khanda: 2,
        verse: 8,
        theme: "Breaking the Knot",
        sanskrit: "भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः । क्षीयन्ते चास्य कर्माणि तस्मिन्दृष्टे परावरे ॥ ८ ॥",
        hindi: "उस परावर ब्रह्म का साक्षात्कार होने पर, हृदय की ग्रंथि टूट जाती है; सभी संशय छिन्न हो जाते हैं; और संचित कर्म क्षीण हो जाते हैं।",
        english: "When He who is both High and Low is seen, the Knot of the Heart is broken, all Doubts are dispelled, and all Karmas are destroyed.",
        simpleExplanation: "THREE FREEDOMS on realization: (1) Heart's knot BREAKS, (2) All doubts VANISH, (3) All karma DISSOLVES.",
        simpleExplanationHindi: "तीन मुक्तियां: (1) हृदय की गांठ टूटती है, (2) सभी संशय मिटते हैं, (3) सभी कर्म नष्ट होते हैं।",
        nanoBananaPrompt: "A heart with a knot breaking open, doubts dispersing, karma chains dissolving.",
        wordMeanings: [
            { sanskrit: "hṛdaya-granthiḥ", devanagari: "हृदयग्रन्थिः", hindi: "हृदय की गांठ", english: "knot of the heart" },
            { sanskrit: "sarva-saṃśayāḥ", devanagari: "सर्वसंशयाः", hindi: "सभी संशय", english: "all doubts" }
        ]
    },
    {
        id: 24,
        mundaka: 2,
        khanda: 2,
        verse: 10,
        theme: "Light of Lights",
        sanskrit: "न तत्र सूर्यो भाति न चन्द्रतारकं नेमा विद्युतो भान्ति कुतोऽयमग्निः । तमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति ॥ १० ॥",
        hindi: "वहाँ न सूर्य चमकता है, न चन्द्र-तारे, न बिजली, तो अग्नि कहाँ से! उसी के चमकने से सब चमकता है; उसके प्रकाश से यह सब प्रकाशित होता है।",
        english: "There the sun does not shine, nor moon and stars, nor lightning—how then fire? Him alone shining, all things shine after Him. By His light, all this is lit.",
        simpleExplanation: "LIGHT OF LIGHTS: Sun & moon borrow their light FROM Him. He is the original LIGHT behind all lights.",
        simpleExplanationHindi: "ज्योतियों की ज्योति: सूर्य-चंद्र उससे प्रकाश लेते हैं। वह सभी प्रकाशों के पीछे मूल प्रकाश है।",
        nanoBananaPrompt: "Sun, moon, stars, and lightning all drawing light from one central radiance.",
        wordMeanings: [
            { sanskrit: "jyotiṣām jyotiḥ", devanagari: "ज्योतिषां ज्योतिः", hindi: "ज्योतियों की ज्योति", english: "light of lights" }
        ]
    },
    {
        id: 25,
        mundaka: 2,
        khanda: 2,
        verse: 11,
        theme: "Brahman is All",
        sanskrit: "ब्रह्मैवेदममृतं पुरस्ताद् ब्रह्म पश्चाद् ब्रह्म दक्षिणतश्चोत्तरेण । अधश्चोर्ध्वं च प्रसृतं ब्रह्मैवेदं विश्वमिदं वरिष्ठम् ॥ ११ ॥",
        hindi: "यह अमृत ब्रह्म ही आगे है, पीछे है, दायें-बायें है। नीचे और ऊपर भी ब्रह्म फैला है। यह समस्त विश्व वरिष्ठ ब्रह्म ही है।",
        english: "Brahman alone is in front, behind, right and left, below and above. This whole universe is nothing but Brahman, the Supreme.",
        simpleExplanation: "ALL DIRECTIONS ARE BRAHMAN: Front, back, left, right, up, down—everywhere you look, it's ONLY Brahman.",
        simpleExplanationHindi: "सभी दिशाएं ब्रह्म: आगे, पीछे, दाएं, बाएं, ऊपर, नीचे—जहां भी देखो, केवल ब्रह्म।",
        nanoBananaPrompt: "A being surrounded by infinite light in all six directions—all is Brahman.",
        wordMeanings: [
            { sanskrit: "sarvam idam", devanagari: "सर्वमिदम्", hindi: "यह सब", english: "all this" }
        ]
    },

    // ==========================================
    // MUNDAKA 3, KHANDA 1: TWO BIRDS & TRUTH
    // ==========================================

    {
        id: 26,
        mundaka: 3,
        khanda: 1,
        verse: 1,
        theme: "Two Birds (Most Famous)",
        sanskrit: "द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते । तयोरन्यः पिप्पलं स्वाद्वत्त्यनश्नन्नन्यो अभिचाकशीति ॥ १ ॥",
        hindi: "दो सुंदर पक्षी, सदैव साथ रहने वाले मित्र, एक ही वृक्ष पर बैठे हैं। उनमें से एक फल खाता है; दूसरा बिना खाए केवल देखता रहता है।",
        english: "Two birds, united companions, cling to the same tree. One of them eats the sweet fruit; the other looks on without eating.",
        simpleExplanation: "MOST FAMOUS VERSE: The two birds = Individual Soul (eating karma-fruits) and Supreme Soul (just watching).",
        simpleExplanationHindi: "सबसे प्रसिद्ध श्लोक: दो पक्षी = जीवात्मा (कर्मफल खाती) और परमात्मा (केवल देखता)।",
        nanoBananaPrompt: "Two birds on a tree—one eating fruits, one calmly watching.",
        wordMeanings: [
            { sanskrit: "suparṇau", devanagari: "सुपर्णौ", hindi: "दो पक्षी", english: "two birds" },
            { sanskrit: "sakhāyau", devanagari: "सखायौ", hindi: "मित्र", english: "companions" },
            { sanskrit: "abhicākaśīti", devanagari: "अभिचाकशीति", hindi: "देखता रहता है", english: "looks on" }
        ]
    },
    {
        id: 27,
        mundaka: 3,
        khanda: 1,
        verse: 2,
        theme: "Sorrow of the Eater",
        sanskrit: "समाने वृक्षे पुरुषो निमग्नोऽनीशया शोचति मुह्यमानः । जुष्टं यदा पश्यत्यन्यमीशमस्य महिमानमिति वीतशोकः ॥ २ ॥",
        hindi: "उसी वृक्ष पर जीव फंसा है और असमर्थ होकर शोक करता है। पर जब वह दूसरे ईश और उसकी महिमा को देखता है, तो शोक-रहित होता है।",
        english: "Seated on the same tree, the individual soul is deluded and grieves. But when he sees the Other—the Lord—and His glory, he becomes free from sorrow.",
        simpleExplanation: "SOLUTION TO SORROW: The eater-bird (you) suffers. When it SEES the watcher-bird (God within), suffering ENDS.",
        simpleExplanationHindi: "दुख का समाधान: खाने वाला पक्षी (आप) दुखी है। जब वह देखने वाले (भीतर के ईश्वर) को देखता है, दुख समाप्त।",
        nanoBananaPrompt: "A suffering bird suddenly noticing the calm watcher-bird beside it, becoming peaceful.",
        wordMeanings: [
            { sanskrit: "vīta-śokaḥ", devanagari: "वीतशोकः", hindi: "शोक-रहित", english: "free from sorrow" }
        ]
    },
    {
        id: 28,
        mundaka: 3,
        khanda: 1,
        verse: 3,
        theme: "Supreme Equality",
        sanskrit: "यदा पश्यः पश्यते रुक्मवर्णं कर्तारमीशं पुरुषं ब्रह्मयोनिम् । तदा विद्वान्पुण्यपापे विधूय निरञ्जनः परमं साम्यमुपैति ॥ ३ ॥",
        hindi: "जब साधक उस स्वर्णमय, ईश, ब्रह्मयोनि पुरुष को देखता है; तब वह पुण्य-पाप दोनों को झाड़कर, निर्मल होकर परम साम्य प्राप्त करता है।",
        english: "When the seer sees the Golden-hued Maker, the Lord, the Source of Brahma—then the wise one, shaking off good and evil, attains supreme equality with the Lord.",
        simpleExplanation: "EQUALITY WITH GOD: On seeing Him, you shake off BOTH good and bad karma. You become EQUAL to the Lord!",
        simpleExplanationHindi: "ईश्वर से समानता: उसे देखने पर, आप अच्छे और बुरे दोनों कर्म झाड़ देते हैं। आप प्रभु के समान बन जाते हैं!",
        nanoBananaPrompt: "A soul shedding layers of karma and becoming luminous, equal to the divine.",
        wordMeanings: [
            { sanskrit: "paramaṃ sāmyam", devanagari: "परमं साम्यम्", hindi: "परम समानता", english: "supreme equality" },
            { sanskrit: "nirañjanaḥ", devanagari: "निरञ्जनः", hindi: "निर्मल", english: "stainless" }
        ]
    },
    {
        id: 29,
        mundaka: 3,
        khanda: 1,
        verse: 6,
        theme: "Satyameva Jayate",
        sanskrit: "सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः । येनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत्सत्यस्य परमं निधानम् ॥ ६ ॥",
        hindi: "सत्य की ही जीत होती है, झूठ की नहीं। सत्य से ही देवयान मार्ग बना है, जिस पर आप्तकाम ऋषि उस सत्य के परम धाम को पहुंचते हैं।",
        english: "TRUTH ALONE TRIUMPHS, not untruth. By Truth is laid the Path of the Gods, by which sages travel to where that Supreme Abode of Truth is.",
        simpleExplanation: "INDIA'S NATIONAL MOTTO: 'Satyameva Jayate'—Truth alone wins. This is India's official emblem inscription!",
        simpleExplanationHindi: "भारत का राष्ट्रीय आदर्श वाक्य: 'सत्यमेव जयते'—सत्य ही जीतता है। यह भारत के राजचिह्न पर अंकित है!",
        nanoBananaPrompt: "The words 'Satyameva Jayate' in gold, with a path of light leading to truth.",
        wordMeanings: [
            { sanskrit: "satyam eva jayate", devanagari: "सत्यमेव जयते", hindi: "सत्य ही जीतता है", english: "Truth alone triumphs" },
            { sanskrit: "na anṛtam", devanagari: "नानृतम्", hindi: "झूठ नहीं", english: "not untruth" }
        ]
    },

    // ==========================================
    // MUNDAKA 3, KHANDA 2: FINAL LIBERATION
    // ==========================================

    {
        id: 30,
        mundaka: 3,
        khanda: 2,
        verse: 3,
        theme: "Not by Intellect",
        sanskrit: "नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन । यमेवैष वृणुते तेन लभ्यस्तस्यैष आत्मा विवृणुते तनूं स्वाम् ॥ ३ ॥",
        hindi: "यह आत्मा न प्रवचन से, न बुद्धि से, न बहुत सुनने से मिलता है। जिसे वह चुनता है, उसी को मिलता है। उसके प्रति आत्मा अपना स्वरूप प्रकट करता है।",
        english: "This Self cannot be attained by instruction, nor intellect, nor much hearing. He whom the Self chooses, by him alone is It attained. To him the Self reveals Its own nature.",
        simpleExplanation: "NOT BY KNOWLEDGE ALONE: You can't just READ or THINK your way to liberation. The Self reveals itself to whom it CHOOSES.",
        simpleExplanationHindi: "केवल ज्ञान से नहीं: आप केवल पढ़कर या सोचकर मोक्ष नहीं पा सकते। आत्मा जिसे चुनती है उसे ही प्रकट होती है।",
        nanoBananaPrompt: "A seeker surrounded by books but illuminated by a light from within that chooses to reveal itself.",
        wordMeanings: [
            { sanskrit: "vṛṇute", devanagari: "वृणुते", hindi: "चुनता है", english: "chooses" },
            { sanskrit: "vivṛṇute", devanagari: "विवृणुते", hindi: "प्रकट करता है", english: "reveals" }
        ]
    },
    {
        id: 31,
        mundaka: 3,
        khanda: 2,
        verse: 4,
        theme: "Strength Required",
        sanskrit: "नायमात्मा बलहीनेन लभ्यो न च प्रमादात्तपसो वाप्यलिङ्गात् । एतैरुपायैर्यतते यस्तु विद्वांस्तस्यैष आत्मा विशते ब्रह्मधाम ॥ ४ ॥",
        hindi: "बलहीन व्यक्ति इस आत्मा को नहीं पा सकता। न प्रमाद से, न बिना संन्यास के तप से। जो विद्वान इन उपायों से प्रयत्न करता है, उसकी आत्मा ब्रह्मधाम में प्रवेश करती है।",
        english: "This Self cannot be attained by one without strength, nor through heedlessness, nor austerity without renunciation. The wise who strives by these means—his Self enters Brahman.",
        simpleExplanation: "NO COWARDS ALLOWED: Liberation requires STRENGTH, not weakness. Alertness, not carelessness. Renunciation is key.",
        simpleExplanationHindi: "कायरों के लिए नहीं: मोक्ष के लिए शक्ति चाहिए, कमजोरी नहीं। सावधानी चाहिए, लापरवाही नहीं।",
        nanoBananaPrompt: "A strong, determined seeker climbing a mountain toward a radiant peak.",
        wordMeanings: [
            { sanskrit: "bala-hīnena", devanagari: "बलहीनेन", hindi: "बलहीन से", english: "by the weak" },
            { sanskrit: "brahma-dhāma", devanagari: "ब्रह्मधाम", hindi: "ब्रह्म का धाम", english: "abode of Brahman" }
        ]
    },
    {
        id: 32,
        mundaka: 3,
        khanda: 2,
        verse: 8,
        theme: "River-Ocean Merger",
        sanskrit: "यथा नद्यः स्यन्दमानाः समुद्रेस्तं गच्छन्ति नामरूपे विहाय । तथा विद्वान्नामरूपाद्विमुक्तः परात्परं पुरुषमुपैति दिव्यम् ॥ ८ ॥",
        hindi: "जैसे बहती नदियाँ नाम-रूप छोड़कर समुद्र में लीन हो जाती हैं; वैसे ही विद्वान नाम-रूप से मुक्त होकर उस परात्पर दिव्य पुरुष को प्राप्त होता है।",
        english: "As flowing rivers disappear into the ocean, losing name and form; so the wise, freed from name and form, attains the Supreme Divine Person.",
        simpleExplanation: "RIVER-OCEAN: Like rivers losing their names when they merge into the sea, liberated souls merge into Brahman.",
        simpleExplanationHindi: "नदी-सागर: जैसे नदियाँ सागर में मिलकर नाम खो देती हैं, मुक्त आत्माएं ब्रह्म में विलीन हो जाती हैं।",
        nanoBananaPrompt: "Rivers flowing into an infinite ocean, losing their separate identities.",
        wordMeanings: [
            { sanskrit: "nadyaḥ", devanagari: "नद्यः", hindi: "नदियाँ", english: "rivers" },
            { sanskrit: "samudre", devanagari: "समुद्रे", hindi: "समुद्र में", english: "into the ocean" },
            { sanskrit: "nāma-rūpe vihāya", devanagari: "नामरूपे विहाय", hindi: "नाम-रूप छोड़कर", english: "leaving name and form" }
        ]
    },
    {
        id: 33,
        mundaka: 3,
        khanda: 2,
        verse: 9,
        theme: "Becoming Brahman",
        sanskrit: "स यो ह वै तत् परमं ब्रह्म वेद ब्रह्मैव भवति नास्याब्रह्मवित्कुले भवति । तरति शोकं तरति पाप्मानं गुहाग्रन्थिभ्यो विमुक्तोऽमृतो भवति ॥ ९ ॥",
        hindi: "जो उस परम ब्रह्म को जानता है, वह ब्रह्म ही हो जाता है। उसके वंश में कोई ब्रह्म को न जानने वाला पैदा नहीं होता। वह शोक और पाप को पार कर, हृदय की गांठों से मुक्त होकर अमर हो जाता है।",
        english: "He who knows Supreme Brahman BECOMES Brahman indeed. In his lineage, none is born who knows not Brahman. He crosses sorrow, crosses sin, and freed from heart's knots, becomes Immortal.",
        simpleExplanation: "THE FINAL PROMISE: Know Brahman = BECOME Brahman! Your whole family lineage is elevated. Sorrow and sin END.",
        simpleExplanationHindi: "अंतिम वादा: ब्रह्म को जानो = ब्रह्म बन जाओ! आपका पूरा वंश उन्नत होता है। दुख और पाप समाप्त।",
        nanoBananaPrompt: "A soul becoming pure light, merging with the infinite, their family tree glowing.",
        wordMeanings: [
            { sanskrit: "brahma eva bhavati", devanagari: "ब्रह्मैव भवति", hindi: "ब्रह्म ही हो जाता है", english: "becomes Brahman" },
            { sanskrit: "amṛtaḥ bhavati", devanagari: "अमृतो भवति", hindi: "अमर हो जाता है", english: "becomes immortal" }
        ]
    }
];

// Metadata
export const MUNDAKA_METADATA = {
    id: "mundaka",
    name: "Mundaka",
    nameSanskrit: "मुण्डकोपनिषद्",
    veda: "Atharva Veda",
    shlokaCount: 33,  // 33 selected key verses (full Upanishad has 64)
    mundakaCount: 3,
    khandaCount: 6,
    meaning: "For the Shaven-Headed (Sannyasis)",
    theme: "Para Vidya vs Apara Vidya",
    famousVerses: {
        satyamevaJayate: { id: 29, mundaka: 3, khanda: 1, verse: 6 },
        twoBirds: { id: 26, mundaka: 3, khanda: 1, verse: 1 },
        theGreatQuestion: { id: 3, mundaka: 1, khanda: 1, verse: 3 },
        bowAndArrow: { id: 21, mundaka: 2, khanda: 2, verse: 4 },
        fireAndSparks: { id: 17, mundaka: 2, khanda: 1, verse: 1 },
        spiderAnalogy: { id: 7, mundaka: 1, khanda: 1, verse: 7 },
        riverOcean: { id: 32, mundaka: 3, khanda: 2, verse: 8 }
    }
};
