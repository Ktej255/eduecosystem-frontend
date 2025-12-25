export interface PrashnaDataEntry {
    id: number;
    prashna: 1 | 2 | 3 | 4 | 5 | 6;
    verse: number;
    sanskrit: string;
    hindi: string;
    english: string;
    theme: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
}

export const prashnaData: PrashnaDataEntry[] = [
    // ==========================================
    // PRASHNA 1: THE SOURCE OF CREATION
    // Questioner: Kabandhi Katyayana
    // ==========================================

    {
        id: 1,
        prashna: 1,
        verse: 1,
        theme: "The Arrival of the Seekers",
        sanskrit: "ॐ सुकेशा च भारद्वाजः शैव्यश्च सत्यकामः सौर्यायणी च गार्ग्यः कौसल्यश्चाश्वलायनो भार्गवो वैदर्भिः कबन्धी कात्यायनस्ते हैते ब्रह्मपरा ब्रह्मनिष्ठाः परं ब्रह्मान्वेषमाणा एष ह वै तत्सर्वं वक्ष्यतीति ते ह समित्पाणयो भगवन्तं पिप्पलादमुपसन्नाः ॥ १ ॥",
        hindi: "ॐ! भरद्वाज के पुत्र सुकेशा, शिवि के पुत्र सत्यकाम, सूर्य के वंशज गार्ग्य, अश्वल के पुत्र कौसल्य, विदर्भ के भार्गव, और कत्य के पुत्र कबन्धी—ये सभी ब्रह्म-परायण और ब्रह्म-निष्ठ थे। वे परम ब्रह्म की खोज कर रहे थे। 'यह गुरु हमें वह सब बताएंगे'—ऐसा सोचकर वे हाथ में समिधा लेकर भगवान पिप्पलाद के पास पहुँचे।",
        english: "Om! Sukesha, Satyakama, Gargya, Kousalya, Bhargava, and Kabandhi—devoted to Brahman and steadfast in Brahman—were searching for the Supreme. Thinking 'He will tell us everything,' they approached the Venerable Pippalada with sacrificial fuel in their hands.",
        simpleExplanation: "Six great seekers approach Guru Pippalada with humility (fuel in hand) to learn the Ultimate Truth.",
        simpleExplanationHindi: "छह महान साधक विनम्रता (हाथ में समिधा) के साथ परम सत्य जानने के लिए गुरु पिप्पलाद के पास पहुँचते हैं।",
        nanoBananaPrompt: "Six ascetics walking through a forest carrying bundles of wood, approaching a radiant sage sitting under a tree."
    },
    {
        id: 2,
        prashna: 1,
        verse: 2,
        theme: "The Penance",
        sanskrit: "तान्ह स ऋषिरुवाच भूय एव तपसा ब्रह्मचर्येण श्रद्धया संवत्सरं संवत्स्यथ यथाकामं प्रश्नान्पृच्छथ यदि विज्ञास्यामः सर्वं ह वो वक्ष्याम इति ॥ २ ॥",
        hindi: "उस ऋषि (पिप्पलाद) ने उनसे कहा: 'तुम लोग फिर से एक वर्ष तक तप, ब्रह्मचर्य और श्रद्धा के साथ यहाँ निवास करो। उसके बाद अपनी इच्छानुसार प्रश्न पूछना। यदि हम जानते होंगे, तो तुम्हें सब कुछ बता देंगे।'",
        english: "The Sage said: 'Live here again for a year with austerity, celibacy, and faith. Then ask questions as you please. If we know, we shall tell you everything.'",
        simpleExplanation: "Even advanced seekers must prepare! The Guru tests their patience and discipline for one full year before teaching.",
        simpleExplanationHindi: "उन्नत साधकों को भी तैयारी करनी पड़ती है! गुरु उपदेश देने से पहले एक साल तक उनके धैर्य और अनुशासन की परीक्षा लेते हैं।",
        nanoBananaPrompt: "Six students meditating in a forest ashram through varying seasons (rain, sun, winter), waiting for the master's teaching."
    },
    {
        id: 3,
        prashna: 1,
        verse: 3,
        theme: "The First Question",
        sanskrit: "अथ कबन्धी कात्यायन उपेत्य पप्रच्छ । भगवन् कुतो ह वा इमाः प्रजाः प्रजायन्त इति ॥ ३ ॥",
        hindi: "तब (एक वर्ष बाद) कात्यायन कबन्धी ने पास आकर पूछा: 'हे भगवन्! ये समस्त प्रजाएं (प्राणी) कहाँ से उत्पन्न होती हैं?'",
        english: "Then Kabandhi Katyayana approached and asked: 'Venerable Sir, whence are these creatures born?'",
        simpleExplanation: "QUESTION 1: The Origin of Life. Where do all these beings actually come from?",
        simpleExplanationHindi: "प्रश्न 1: जीवन की उत्पत्ति। ये सभी प्राणी वास्तव में कहाँ से आते हैं?",
        nanoBananaPrompt: "A student bowing respectfully to the sage, asking a question while pointing at the diverse life forms in the forest."
    },
    {
        id: 4,
        prashna: 1,
        verse: 4,
        theme: "Rayi and Prana",
        sanskrit: "तस्मै स होवाच प्रजाकामो वै प्रजापतिः स तपोऽतप्यत स तपस्तप्त्वा । स मिथुनमुत्पादयते रयिं च प्राणं चेत्येतौ मे बहुधा प्रजाः करिष्यत इति ॥ ४ ॥",
        hindi: "पिप्पलाद ने कहा: 'प्रजापति को प्रजा उत्पन्न करने की इच्छा हुई। उन्होंने तप किया और एक जोड़ा (Mithuna) उत्पन्न किया—रयि (पदार्थ) और प्राण (ऊर्जा)। यह सोचकर कि ये दोनों मेरे लिए बहुत प्रकार की प्रजा उत्पन्न करेंगे।'",
        english: "He replied: 'Prajapati performed meditation and created a pair—Rayi (Matter) and Prana (Energy)—thinking, \"These two will produce creatures for me in manifold ways.\"'",
        simpleExplanation: "Creation starts with a DUALITY: Matter (Rayi) and Energy (Prana). Like Shiva and Shakti, or Mass and Energy.",
        simpleExplanationHindi: "सृष्टि की शुरुआत द्वैत से होती है: पदार्थ (रयि) और ऊर्जा (प्राण)। शिव और शक्ति, या द्रव्यमान और ऊर्जा की तरह।",
        nanoBananaPrompt: "A cosmic explosion splitting into two streams: one stream of glowing golden light (Prana) and one stream of solid lunar matter (Rayi)."
    },
    {
        id: 5,
        prashna: 1,
        verse: 5,
        theme: "Sun and Moon",
        sanskrit: "आदित्यो ह वै प्राणो रयिरेव चन्द्रमा रयिर्वा एतत्सर्वं यन्मूर्तं चामूर्तं च तस्मान्मूर्तिरेव रयिः ॥ ५ ॥",
        hindi: "आदित्य (सूर्य) ही प्राण है, और चन्द्रमा ही रयि (पदार्थ) है। वास्तव में, जो कुछ भी मूर्त (स्थूल) और अमूर्त (सूक्ष्म) है, वह सब रयि ही है। इसलिए मूर्ति ही रयि है।",
        english: "The Sun is Prana, and the Moon is Rayi (Matter). Indeed, all this—that which has form and that which is formless—is Rayi. Therefore, form itself is Rayi.",
        simpleExplanation: "Sun = Spirit/Life Force. Moon = Matter/Form. Everything with form is 'Food' for structure.",
        simpleExplanationHindi: "सूर्य = आत्मा/जीवन शक्ति। चंद्रमा = पदार्थ/रूप। रूप वाली हर चीज संरचना के लिए 'भोजन' है।",
        nanoBananaPrompt: "The Sun shining brightly representing Life, and the Moon glowing softly representing Matter, balancing each other in space."
    },
    {
        id: 6,
        prashna: 1,
        verse: 6,
        theme: "The Sun Enveloping All",
        sanskrit: "अथादित्य उदयन्यत्प्राचीं दिशं प्रविशति तेन प्राच्यान्प्राणान्रश्मिषु सन्निधत्ते । यद्दक्षिणां यत्प्रतीचीं यदुदीचीं यदधो यदूर्ध्वं यदन्तरा दिशो यत्सर्वं प्रकाशयति तेन सर्वान्प्राणान्रश्मिषु सन्निधत्ते ॥ ६ ॥",
        hindi: "जब सूर्य पूर्व में उदय होता है, तो वह अपनी किरणों में पूर्व के प्राणों को धारण करता है। जब वह अन्य सभी दिशाओं को प्रकाशित करता है, तो वह उन सभी प्राणों को अपनी किरणों में समेट लेता है।",
        english: "When the Sun rises in the East, he holds the eastern life-forces in his rays. Illuminating all directions, he acts as the support of all lives.",
        simpleExplanation: "The Sun embraces the whole world with its rays, giving life to every direction.",
        simpleExplanationHindi: "सूर्य अपनी किरणों से पूरी दुनिया को गले लगाता है और हर दिशा को जीवन देता है।",
        nanoBananaPrompt: "A sunrise illuminating a landscape, with golden rays reaching into every corner of the forest, mountains, and rivers."
    },
    {
        id: 7,
        prashna: 1,
        verse: 7,
        theme: "The Universal Life",
        sanskrit: "स एष वैश्वानरो विश्वरूपः प्राणोऽग्निरुदयते । तदेतदृचाभ्युक्तम् ॥ ७ ॥",
        hindi: "वह यह 'वैश्वानर', विश्वरूप, प्राण और अग्नि के रूप में उदय हो रहा है।",
        english: "He is the Vaishvanara (Universal Fire), the All-Formed, the Life-Breath, the Fire that rises.",
        simpleExplanation: "The Sun isn't just a physical ball of fire; it is the COSMIC FIRE (Vaishvanara) that digests and animates everything.",
        simpleExplanationHindi: "सूर्य केवल आग का गोला नहीं है; यह ब्रह्मांडीय अग्नि (वैश्वानर) है जो हर चीज को पचाती और जीवित करती है।",
        nanoBananaPrompt: "The sun appearing as a giant cosmic fire entity, with a face that looks upon the entire world."
    },
    {
        id: 8,
        prashna: 1,
        verse: 8,
        theme: "The Thousand-Rayed Sun",
        sanskrit: "विश्वरूपं हरिणं जातवेदसं परायणं ज्योतिरेकं तपन्तम् । सहस्ररश्मिः शतधा वर्तमानः प्राणः प्रजानामुदयत्येष सूर्यः ॥ ८ ॥",
        hindi: "उस विश्वरूप, हरिण, जातवेदा, सबके परम आश्रय, अद्वितीय ज्योति और तपते हुए सूर्य को देखो। यह सहस्र रश्मियों वाला प्राण के रूप में उदय हो रहा है।",
        english: "Behold the All-Formed, the Golden One, the Omniscient, the Supreme Resort. This Sun, with a thousand rays, rises as the Life of all creatures.",
        simpleExplanation: "A hymn to the Sun: Golden, Omniscient, Thousand-rayed, the very Life of all beings.",
        simpleExplanationHindi: "सूर्य की स्तुति: स्वर्ण, सर्वज्ञ, हजार किरणों वाला, सभी प्राणियों का जीवन।",
        nanoBananaPrompt: "A majestic, golden sun with exactly one thousand distinct rays, each ray touching a different living creature."
    },
    {
        id: 9,
        prashna: 1,
        verse: 9,
        theme: "The Year as Time",
        sanskrit: "संवत्सरो वै प्रजापतिस्तस्यायने दक्षिणं चोत्तरं च । तद्ये ह वै तदिष्टापूर्ते कृतमित्युपासते ते चान्द्रमसमेव लोकमभिजयन्ते । त एव पुनरावर्तन्ते तस्मादेते ऋषयः प्रजाकामा दक्षिणं प्रतिपद्यन्ते । एष ह वै रयिर्यः पितृयाणः ॥ ९ ॥",
        hindi: "संवत्सर (वर्ष) ही प्रजापति है। इसके दो मार्ग हैं—दक्षिण और उत्तर। जो 'इष्टापूर्त' (कर्मकांड) करते हैं, वे 'चंद्रलोक' (रयि) जाकर वापस लौटते हैं। यह 'दक्षिण मार्ग' है।",
        english: "The Year is Prajapati. It has two paths: South and North. Performers of rituals go to the Lunar World (Rayi) and return. This is the Path of the Fathers.",
        simpleExplanation: "THE TWO PATHS: Rituals bring you back (Recycling/Rebirth). This is the Southern Path of the Moon/Matter.",
        simpleExplanationHindi: "दो पथ: कर्मकांड आपको वापस लाते हैं (पुनर्जन्म)। यह चंद्रमा/पदार्थ का दक्षिणी पथ है।",
        nanoBananaPrompt: "A fork in the road of the cosmos: one path leading to a silvery moon (rebirth), the other to a golden sun (liberation)."
    },
    {
        id: 10,
        prashna: 1,
        verse: 10,
        theme: "The Northern Path",
        sanskrit: "अथोत्तरेण तपसा ब्रह्मचर्येण श्रद्धया विद्ययात्मानमन्विष्यादित्यमभिजयन्ते । एतद्वै प्राणानावायतनमेतदमृतमभयमेतत्परायणमेतस्मान्न पुनरावर्तन्त इत्येष निरोधः । तदेष श्लोकः ॥ १० ॥",
        hindi: "परन्तु जो 'उत्तर मार्ग' से—तप, ब्रह्मचर्य और विद्या द्वारा—आत्मा को खोजते हैं, वे 'आदित्य' (सूर्य) को जीत लेते हैं। वहाँ से वे पुनः नहीं लौटते। यह मोक्ष है।",
        english: "But those who seek the Self through the Northern Path—by austerity and knowledge—attain the Sun. From there, they do not return. This is the end of rebirth.",
        simpleExplanation: "The Northern Path of the Sun leads to LIBERATION (No return). It requires Discipline and Knowledge, not just rituals.",
        simpleExplanationHindi: "सूर्य का उत्तरी पथ मुक्ति की ओर ले जाता है (वापसी नहीं)। इसके लिए केवल कर्मकांड नहीं, बल्कि अनुशासन और ज्ञान की आवश्यकता है।",
        nanoBananaPrompt: "Ascetics walking up a golden staircase of light towards the sun, disappearing into the brilliance."
    },
    {
        id: 11,
        prashna: 1,
        verse: 11,
        theme: "Two Views of the Sun",
        sanskrit: "पञ्चपादं पितरं द्वादशाकृतिं दिव आहुः परे अर्धे पुरीषिणम् । अथेमे अन्य उ परे विचक्षणं सप्तचक्रे षडर आहुरर्पितमिति ॥ ११ ॥",
        hindi: "कुछ उसे पाँच पैरों (ऋतुओं) और बारह आकृतियों (महीनों) वाला 'पिता' कहते हैं। अन्य उसे सात पहियों और छह आरों वाले रथ में स्थित 'सर्वज्ञ' कहते हैं।",
        english: "Some call Him the Father with five feet (seasons) and twelve forms (months). Others speak of Him as the Omniscient One seated in a chariot with seven wheels.",
        simpleExplanation: "Time is cyclical. The Sun controls time through seasons (feet) and months (forms).",
        simpleExplanationHindi: "समय चक्रीय है। सूर्य ऋतुओं (पैर) और महीनों (रूप) के माध्यम से समय को नियंत्रित करता है।",
        nanoBananaPrompt: "A giant abstract clock or chariot wheel in the sky, representing the seasons and months, driven by the Sun."
    },
    {
        id: 12,
        prashna: 1,
        verse: 12,
        theme: "The Month as Prajapati",
        sanskrit: "मासो वै प्रजापतिस्तस्य कृष्णपक्ष एव रयिः शुक्लः प्राणः । तस्मादेते ऋषयः शुक्ल इष्टं कुर्वन्तीतरे इतरस्मिन् ॥ १२ ॥",
        hindi: "मास ही प्रजापति है। कृष्ण पक्ष 'रयि' है और शुक्ल पक्ष 'प्राण' है। ऋषि शुक्ल पक्ष में शुभ कार्य करते हैं।",
        english: "The Month is Prajapati. Dark fortnight is Rayi; bright fortnight is Prana. Sages perform sacrifices in the bright fortnight.",
        simpleExplanation: "Even the month is split: Bright half = Energy/Prana. Dark half = Matter/Rayi.",
        simpleExplanationHindi: "महीना भी बंटा हुआ है: शुक्ल पक्ष = ऊर्जा/प्राण। कृष्ण पक्ष = पदार्थ/रयि।",
        nanoBananaPrompt: "A calendar page or moon phase cycle showing half darkness and half light, representing the two fortnights."
    },
    {
        id: 13,
        prashna: 1,
        verse: 13,
        theme: "Day and Night",
        sanskrit: "अहोरात्रो वै प्रजापतिस्तस्याहरेव प्राणो रात्रिरेव रयिः । प्राणं वा एते प्रस्कन्दन्ति ये दिवा रत्या संयुज्यन्ते । ब्रह्मचर्यमेव तद्यद्रात्रौ रत्या संयुज्यन्ते ॥ १३ ॥",
        hindi: "दिन 'प्राण' है और रात 'रयि' है। जो दिन में रति करते हैं, वे प्राण क्षीण करते हैं। रात में रति करना ही गृहस्थ का ब्रह्मचर्य है।",
        english: "Day is Prana and Night is Rayi. Those who unite by day waste their Prana. Union by night is Brahmacharya indeed.",
        simpleExplanation: "Biological rhythm: Day is for activity (Prana), Night is for rest/matter (Rayi). Misusing this drains life force.",
        simpleExplanationHindi: "जैविक लय: दिन गतिविधि (प्राण) के लिए है, रात आराम/पदार्थ (रयि) के लिए है। इसका दुरुपयोग जीवन शक्ति को समाप्त करता है।",
        nanoBananaPrompt: "The contrast between a bright, active sun-drenched day and a calm, sleeping starry night."
    },
    {
        id: 14,
        prashna: 1,
        verse: 14,
        theme: "Food as Prajapati",
        sanskrit: "अन्नं वै प्रजापतिस्ततो ह वै तद्रेतस्तस्मादिमाः प्रजाः प्रजायन्त इति ॥ १४ ॥",
        hindi: "अन्न ही प्रजापति है। उससे वीर्य बनता है, और उसी से ये समस्त प्रजाएं उत्पन्न होती हैं।",
        english: "Food is Prajapati. From that comes the seed. From that are all these creatures born.",
        simpleExplanation: "Sun/Rain → Food → Seed → Life. We are all transformed food!",
        simpleExplanationHindi: "सूर्य/वर्षा → भोजन → बीज → जीवन। हम सब रूपांतरित भोजन ही हैं!",
        nanoBananaPrompt: "A cycle showing rain falling on fields, grain growing, food being eaten, and a child being born."
    },
    {
        id: 15,
        prashna: 1,
        verse: 15,
        theme: "The Result of Prajapati Vrata",
        sanskrit: "तद्ये ह वै तत्प्रजापतिव्रतं चरन्ति ते मिथुनमुत्पादयन्ते । तेषामेवैष ब्रह्मलोको येषां तपो ब्रह्मचर्यं येषु सत्यं प्रतिष्ठितम् ॥ १५ ॥",
        hindi: "जो प्रजापति व्रत का पालन करते हैं, वे संतान उत्पन्न करते हैं। ब्रह्मलोक (स्वर्ग) उन्हीं का है जिनमें तप, ब्रह्मचर्य और सत्य है।",
        english: "Those who observe the Rule of Prajapati produce offspring. To them belongs this Brahma-World, who possess austerity, chastity, and truth.",
        simpleExplanation: "Following nature's laws creates life (offspring). But higher worlds require Truth and Austerity.",
        simpleExplanationHindi: "प्रकृति के नियमों का पालन जीवन (संतान) रचता है। लेकिन उच्च लोकों के लिए सत्य और तप की आवश्यकता होती है।",
        nanoBananaPrompt: "A happy family with children (fruit of nature) contrasted with sages glowing with inner light (fruit of truth)."
    },
    {
        id: 16,
        prashna: 1,
        verse: 16,
        theme: "The Pure World",
        sanskrit: "तेषामसौ विरजो ब्रह्मलोको न येषु जिह्ममनृतं न माया चेति ॥ १६ ॥",
        hindi: "वह निर्मल ब्रह्मलोक उन्हीं का है, जिनमें न कपट है, न झूठ है, और न ही माया (छल) है।",
        english: "That stainless World of Brahman belongs to them in whom there is no crookedness, no falsehood, and no deception.",
        simpleExplanation: "Access Code to Truth: NO LIES, NO TRICKS, NO DECEIT. Purity is the key.",
        simpleExplanationHindi: "सत्य का प्रवेश कोड: कोई झूठ नहीं, कोई छल नहीं, कोई धोखा नहीं। पवित्रता ही कुंजी है।",
        nanoBananaPrompt: "A crystal clear lake reflecting the sky perfectly, representing a mind without the ripples of deceit."
    },

    // ==========================================
    // PRASHNA 2: THE SUPREMACY OF PRANA
    // Questioner: Bhargava of Vidarbha
    // ==========================================

    {
        id: 17,
        prashna: 2,
        verse: 1,
        theme: "The Second Question",
        sanskrit: "अथ हैनम् भार्गवो वैदर्भिः पप्रच्छ । भगवन् कत्येव देवाः प्रजां विधारयन्ते कतर एतत्प्रकाशयन्ते कः पुनरेषां वरिष्ठ इति ॥ १ ॥",
        hindi: "विदर्भ के भार्गव ने पूछा: 'हे भगवन्! कितनी शक्तियां शरीर को धारण करती हैं? कौन इसे प्रकाशित करते हैं? और उन सबमें वरिष्ठ (श्रेष्ठ) कौन है?'",
        english: "Bhargava asked: 'Sir, how many powers support the body? Which of them enlighten it? And who amongst them is the greatest?'",
        simpleExplanation: "QUESTION 2: Who runs the body? And who is the BOSS of the body?",
        simpleExplanationHindi: "प्रश्न 2: शरीर को कौन चलाता है? और शरीर का बॉस कौन है?",
        nanoBananaPrompt: "A diagram of the human body with glowing nodes representing different organs, asking 'Who is the ruler?'"
    },
    {
        id: 18,
        prashna: 2,
        verse: 2,
        theme: "The List of Powers",
        sanskrit: "तस्मै स होवाच । आकाशो ह वा एष देवो वायुर्अग्निरापः पृथिवी वाङ्मनश्चक्षुः श्रोत्रं च । ते प्रकाश्याभिवदन्ति वयमेतद्बाणमवष्टभ्य विधारयामः ॥ २ ॥",
        hindi: "उन्होंने कहा: 'आकाश, वायु, अग्नि, जल, पृथ्वी, वाणी, मन, आँख और कान। उन सबने अहंकारपूर्वक कहा—हम ही इस शरीर को धारण किए हुए हैं।'",
        english: "He replied: 'Space, Air, Fire, Water, Earth, Speech, Mind, Eye, Ear. They bragged: \"We support this body and keep it together.\"'",
        simpleExplanation: "The Senses and Elements argued: 'I am the most important! Without me, nothing works!'",
        simpleExplanationHindi: "इन्द्रियों और तत्वों ने बहस की: 'मैं सबसे महत्वपूर्ण हूँ! मेरे बिना कुछ काम नहीं करता!'",
        nanoBananaPrompt: "Human organs (Eye, Ear, Mouth) and elements (Fire, Water) arguing in a circle like a parliamentary debate."
    },
    {
        id: 19,
        prashna: 2,
        verse: 3,
        theme: "Prana's Warning",
        sanskrit: "तान्वरिष्ठः प्राण उवाच । मा मोहमापद्यथ अहमेवैतत्पञ्चधात्मानं प्रविभज्य एतद्बाणमवष्टभ्य विधारयामीति । तेऽश्रद्दधाना बभूवुः ॥ ३ ॥",
        hindi: "तब वरिष्ठ 'प्राण' ने कहा: 'घमंड मत करो। मैं ही अपने आप को पांच भागों में बांटकर इस शरीर को धारण करता हूँ।' लेकिन उन्होंने विश्वास नहीं किया।",
        english: "Prana said: 'Do not be deluded. I alone, dividing myself fivefold, support this body.' But they did not believe him.",
        simpleExplanation: "Prana (Life Force) speaks up: 'Guys, relax. It's actually ME holding this all together.' The senses laughed.",
        simpleExplanationHindi: "प्राण (जीवन शक्ति) बोला: 'दोस्तों, शांत रहो। वास्तव में मैं ही इस सबको संभाले हुए हूँ।' इन्द्रियां हंस पड़ीं।",
        nanoBananaPrompt: "A glowing figure of Prana standing calmly while the other noisy elements point fingers and laugh."
    },
    {
        id: 20,
        prashna: 2,
        verse: 4,
        theme: "The Demonstration",
        sanskrit: "सोऽभिमानादूर्ध्वमुत्क्रमत इव तस्मिन्नुत्क्रामत्यथेतरे सर्व एवोत्क्रामन्ते । तस्मिंश्च प्रतिष्ठमाने सर्व एव प्रतिष्ठन्ते । तद्यथा मक्षिका मधुकरराजानमुत्क्रामन्तं सर्वा एवोत्क्रामन्ते तस्मिंश्च प्रतिष्ठमाने सर्वा एव प्रतिष्ठन्त एवं वाङ्मनश्चक्षुः श्रोत्रं च ते प्रीताः प्राणं स्तुन्वन्ति ॥ ४ ॥",
        hindi: "प्राण ऊपर उठने लगा (शरीर छोड़ने का नाटक)। तो अन्य सभी उखड़ने लगीं; जब वह स्थिर हुआ, तो सब स्थिर हो गईं। जैसे रानी मधुमक्खी के उड़ने पर सब उड़ जाती हैं। तब सबने प्राण की स्तुति की।",
        english: "Prana rose up. When he rose, all rose; when he settled, all settled. Just as bees follow the Queen Bee. Pleased, the senses praised Prana.",
        simpleExplanation: "THE QUEEN BEE ANALOGY: When Prana leaves, the eyes can't see, ears can't hear. Prana is the King.",
        simpleExplanationHindi: "रानी मधुमक्खी का उदाहरण: जब प्राण जाता है, तो आँखें देख नहीं सकतीं, कान सुन नहीं सकते। प्राण ही राजा है।",
        nanoBananaPrompt: "A queen bee flying up with a swarm following her, juxtaposed with a soul lifting out of a body and senses fading."
    },
    {
        id: 21,
        prashna: 2,
        verse: 5,
        theme: "Prana is the Elements",
        sanskrit: "एषोऽग्निस्तपत्येष सूर्य एष पर्जन्यो मघवानेष वायुः । एष पृथिवी रयिर्देवः सदसच्चामृतं च यत् ॥ ५ ॥",
        hindi: "यह प्राण ही अग्नि है, यही सूर्य, बादल, इंद्र और वायु है। यही पृथ्वी और पदार्थ है। जो सत् और असत् है, वह सब प्राण ही है।",
        english: "'He burns as Fire, He is Sun, Rain, Indra, Wind, Earth and Matter. He is what is and what is not, and the Immortal.'",
        simpleExplanation: "Scientific fact: Everything is Energy (Prana). Fire, sun, rain, matter—all forms of the same Life Force.",
        simpleExplanationHindi: "वैज्ञानिक तथ्य: सब कुछ ऊर्जा (प्राण) है। अग्नि, सूर्य, वर्षा, पदार्थ—सभी उसी जीवन शक्ति के रूप हैं।",
        nanoBananaPrompt: "A shapeshifter entity morphing into Fire, then Sun, then Rain, then Rock—showing it is everything."
    },
    {
        id: 22,
        prashna: 2,
        verse: 6,
        theme: "Prana as the Hub",
        sanskrit: "अरा इव रथनाभौ प्राणे सर्वं प्रतिष्ठितम् । ऋचो यजूंषि सामानि यज्ञः क्षत्रं ब्रह्म च ॥ ६ ॥",
        hindi: "जैसे रथ के पहिए की नाभि में आरे टिके होते हैं, वैसे ही सब कुछ प्राण में प्रतिष्ठित है। वेद, यज्ञ, क्षत्रिय और ब्राह्मण—सब प्राण पर ही आधारित हैं।",
        english: "As spokes are fastened in the hub of a wheel, so is everything established in Prana—Vedas, Sacrifice, Warriors, and Priests.",
        simpleExplanation: "The Central Hub: Remove the hub (Prana), and the wheel of life (society, knowledge, action) collapses.",
        simpleExplanationHindi: "केंद्रीय धुरी: धुरी (प्राण) को हटा दें, और जीवन का पहिया (समाज, ज्ञान, क्रिया) ढह जाता है।",
        nanoBananaPrompt: "A chariot wheel with 'Prana' glowing in the center hub, and all other things (books, swords, fire) as spokes."
    },
    {
        id: 23,
        prashna: 2,
        verse: 7,
        theme: "Prana as Life in the Womb",
        sanskrit: "प्रजापतिश्चरसि गर्भे त्वमेव प्रतिजायसे । तुभ्यं प्राण प्रजास्त्विमा बलिं हरन्ति यः प्राणैः प्रतितिष्ठसि ॥ ७ ॥",
        hindi: "हे प्राण! तुम ही गर्भ में विचरण करते हो और तुम ही जन्म लेते हो। ये प्रजाएं तुम्हें ही बलि प्रदान करती हैं।",
        english: "'O Prana, you move in the womb as the Lord of Creatures, and you are born again. Creatures bring offerings to you.'",
        simpleExplanation: "Prana is the intelligence growing the baby in the womb. It is the life in every new birth.",
        simpleExplanationHindi: "प्राण वह बुद्धिमत्ता है जो गर्भ में बच्चे को बढ़ाती है। यह हर नए जन्म में जीवन है।",
        nanoBananaPrompt: "A glowing fetus in a womb, pulsing with light, representing Prana creating a new form."
    },
    {
        id: 24,
        prashna: 2,
        verse: 8,
        theme: "Prana as the Messenger",
        sanskrit: "देवानामसि वह्नितमः पितृणां प्रथमा स्वधा । ऋषीणां चरितं सत्यमथर्वाङ्गिरसामसि ॥ ८ ॥",
        hindi: "तुम देवताओं की अग्नि हो। तुम पितरों की स्वधा हो। तुम ऋषियों का सत्य चरित्र हो।",
        english: "'You are the best carrier of oblations. You are the first offering to ancestors. You are the true spirit of the senses.'",
        simpleExplanation: "Prana is the bridge between the human and the divine.",
        simpleExplanationHindi: "प्राण मानव और परमात्मा के बीच का सेतु है।",
        nanoBananaPrompt: "A bridge of light connecting a person meditating on earth to the shining gods in the sky."
    },
    {
        id: 25,
        prashna: 2,
        verse: 9,
        theme: "Prana as Destroyer and Protector",
        sanskrit: "इन्द्रस्त्वं प्राण तेजसा रुद्रोऽसि परिरक्षिता । त्वमन्तरिक्षे चरसि सूर्यस्त्वं ज्योतिषां पतिः ॥ ९ ॥",
        hindi: "हे प्राण! तुम इन्द्र हो, रक्षक रुद्र हो। तुम अंतरिक्ष में विचरण करते हो; तुम ही सूर्य हो।",
        english: "'O Prana, you are Indra; you are Rudra the Protector. You move in the sky; you are the Sun, the Lord of Lights.'",
        simpleExplanation: "Prana is Power (Indra) and Protection (Rudra). It is the master of all lights.",
        simpleExplanationHindi: "प्राण शक्ति (इंद्र) और सुरक्षा (रुद्र) है। यह सभी ज्योतियों का स्वामी है।",
        nanoBananaPrompt: "Prana depicted as a dual entity: one side fierce weapon-wielding (Indra), the other side peaceful protector (Rudra)."
    },
    {
        id: 26,
        prashna: 2,
        verse: 10,
        theme: "Prana and Rain",
        sanskrit: "यदा त्वमभिवर्षस्यथेमाः प्राण ते प्रजाः । आनन्दरूपास्तिष्ठन्ति कामायान्नं भविष्यतीति ॥ १० ॥",
        hindi: "हे प्राण! जब तुम (बादल बनकर) बरसते हो, तब ये प्रजाएं आनंदित हो उठती हैं कि 'अन्न पैदा होगा' ।",
        english: "'When you pour down rain, O Prana, these creatures stand delightful, thinking, \"There will be food!\"'",
        simpleExplanation: "Life depends on rain. Rain depends on Prana (climatic cycles). No Prana = No Rain = No Food.",
        simpleExplanationHindi: "जीवन वर्षा पर निर्भर है। वर्षा प्राण (जलवायु चक्र) पर निर्भर है। प्राण नहीं = वर्षा नहीं = भोजन नहीं।",
        nanoBananaPrompt: "Dry cracked earth turning green and lush as miraculous rain begins to fall, people dancing in joy."
    },
    {
        id: 27,
        prashna: 2,
        verse: 11,
        theme: "Prana is Pure",
        sanskrit: "व्रात्यस्त्वं प्राण एकर्षिरत्ता विश्वस्य सत्पतिः । वयमाद्यस्य दातारः पिता त्वं मातरिश्व नः ॥ ११ ॥",
        hindi: "हे प्राण! तुम 'व्रात्य' (स्वभाव से पवित्र) हो। तुम विश्व के भोक्ता हो। पिता तुम, वासु (वायु) तुम।",
        english: "'You are a Vratya (Naturally Pure), O Prana, the Eater, the Lord. We give you food. O Wind, you are our Father.'",
        simpleExplanation: "Prana needs no purification rituals; it is naturally pure (Vratya). It is the Father of all.",
        simpleExplanationHindi: "प्राण को किसी शुद्धि अनुष्ठान की आवश्यकता नहीं है; यह स्वाभाविक रूप से पवित्र (व्रात्य) है। यह सबका पिता है।",
        nanoBananaPrompt: "A pure white flame that needs no fuel, burning steadily in a void."
    },
    {
        id: 28,
        prashna: 2,
        verse: 12,
        theme: "Prayer for Peace",
        sanskrit: "या ते तनूर्वाचि प्रतिष्ठिता या श्रोत्रे या च चक्षुषि । या च मनसि सन्तता शिवां तां कुरु मोत्क्रमीः ॥ १२ ॥",
        hindi: "तुम्हारा जो रूप वाणी, कान, आँख और मन में है—उसे तुम 'शिव' (शांत) बनाओ। बाहर मत जाओ!",
        english: "'That form of yours established in Speech, Ear, Eye, and Mind—make that propitious. Do not depart!'",
        simpleExplanation: "The senses beg Prana: 'Please stay! And please keep us functioning peacefully. Don't leave us dead.'",
        simpleExplanationHindi: "इन्द्रियां प्राण से भीख मांगती हैं: 'कृपया रुको! और कृपया हमें शांति से काम करने दो। हमें मृत छोड़कर मत जाओ।'",
        nanoBananaPrompt: "Human figures bowing down to a central light within them, pleading with it to stay."
    },
    {
        id: 29,
        prashna: 2,
        verse: 13,
        theme: "Conclusion",
        sanskrit: "प्राणस्येदं वशे सर्वं त्रिदिवे यत्प्रतिष्ठितम् । मातेव पुत्रान्रक्षस्व श्रीश्च प्रज्ञां च विधेहि न इति ॥ १३ ॥",
        hindi: "तीनों लोकों में जो कुछ भी है, सब प्राण के वश में है। माता की तरह हमारी रक्षा करो और हमें 'श्री' और 'प्रज्ञा' दो।",
        english: "'All this is under the control of Prana. Protect us as a mother protects her sons, and give us prosperity and wisdom.'",
        simpleExplanation: "Prana is the Universal Mother. Asking for wealth (Shri) and wisdom (Prajna) from the Life Force.",
        simpleExplanationHindi: "प्राण जगत जननी है। जीवन शक्ति से धन (श्री) और बुद्धि (प्रज्ञा) मांगना।",
        nanoBananaPrompt: "A cosmic mother figure made of light cradling the earth, bestowing golden coins (prosperity) and a book (wisdom)."
    },

    // ==========================================
    // PRASHNA 3: THE ORIGIN OF PRANA
    // Questioner: Kousalya
    // ==========================================

    {
        id: 30,
        prashna: 3,
        verse: 1,
        theme: "The Third Question",
        sanskrit: "अथ हैनम् कौसल्यश्चाश्वलायनः पप्रच्छ । भगवन् कुत एष प्राणो जायते कथमायात्यस्मिञ्शरीरे आत्मानं वा प्रविभज्य कथं प्रतिष्ठते केनोत्क्रमते कथं बाह्यमभिधत्ते कथमध्यात्ममिति ॥ १ ॥",
        hindi: "कौसल्य ने पूछा: 'हे भगवन्! यह प्राण कहाँ से उत्पन्न होता है? शरीर में कैसे आता है? कैसे विभाजित होता है? कैसे निकलता है?'",
        english: "Kousalya asked: 'Sir, from where is this Prana born? How does it come into this body? How does it distribute itself? How does it depart?'",
        simpleExplanation: "QUESTION 3: The Mechanics of Prana. We know Prana is great, but where does it come from? How does it work inside?",
        simpleExplanationHindi: "प्रश्न 3: प्राण की क्रियाविधि। हम जानते हैं कि प्राण महान है, लेकिन यह आता कहाँ से है? यह अंदर कैसे काम करता है?",
        nanoBananaPrompt: "A schematic blueprint of a human soul showing an arrow entering (birth), dividing (life), and leaving (death)."
    },
    {
        id: 31,
        prashna: 3,
        verse: 2,
        theme: "The Guru's Appreciation",
        sanskrit: "तस्मै स होवाच अतिप्रश्नान्पृच्छसि ब्रह्मिष्ठोऽसीति तस्मात्तेऽहं ब्रवीमि ॥ २ ॥",
        hindi: "उन्होंने कहा: 'तुम बहुत कठिन (अति) प्रश्न पूछ रहे हो। तुम ब्रह्मवेत्ताओं में श्रेष्ठ हो, इसलिए मैं बताता हूँ।'",
        english: "He replied: 'You are asking transcendental questions. You are most devoted to Brahman; therefore, I will tell you.'",
        simpleExplanation: "Great questions deserve great answers. Pippalada is impressed by the depth of Kousalya's inquiry.",
        simpleExplanationHindi: "महान प्रश्न महान उत्तर के पात्र हैं। पिप्पलाद कौसल्य की जिज्ञासा की गहराई से प्रभावित हैं।",
        nanoBananaPrompt: "The Sage smiling warmly and nodding in approval at the student."
    },
    {
        id: 32,
        prashna: 3,
        verse: 3,
        theme: "The Shadow Analogy",
        sanskrit: "आत्मन एष प्राणो जायते । यथैषा पुरुषे छायैतस्मिन्नेतदाततं मनोकृतेनायात्यस्मिञ्शरीरे ॥ ३ ॥",
        hindi: "यह प्राण आत्मा से उत्पन्न होता है। जैसे पुरुष की छाया, वैसे ही यह उस पर छाया हुआ है। यह मन के संकल्प से शरीर में आता है।",
        english: "Prana is born of the Self. As a shadow is cast by a person, so is this Prana spread over the Self. It enters via the Mind's karma.",
        simpleExplanation: "ORIGIN: Prana is the SHADOW of the Soul. It comes into a body because of your Mind (Karma/Desires).",
        simpleExplanationHindi: "उत्पत्ति: प्राण आत्मा की छाया है। यह आपके मन (कर्म/इच्छाओं) के कारण शरीर में आता है।",
        nanoBananaPrompt: "A person standing in light casting a shadow—the person is Atman, the shadow is Prana/Life."
    },
    {
        id: 33,
        prashna: 3,
        verse: 4,
        theme: "The King Analogy",
        sanskrit: "यथा सम्राडेवाधिकृतान्विनियुङ्क्ते एतान्ग्रामानेतान्ग्रामानधितिष्ठस्वेति । एवमेवैष प्राण इतरान्प्राणान्पृथक्पृथगेव सन्निधत्ते ॥ ४ ॥",
        hindi: "जैसे सम्राट अधिकारियों को नियुक्त करता है, वैसे ही मुख्य प्राण अन्य प्राणों को अलग-अलग स्थानों पर नियुक्त करता है।",
        english: "As a Sovereign commands officials, 'You reside here, you there,' so does the Chief Prana appoint other Pranas.",
        simpleExplanation: "CEO Prana appoints managers (Apana, Samana, Vyana, Udana) to run different departments of the body.",
        simpleExplanationHindi: "CEO प्राण शरीर के विभिन्न विभागों को चलाने के लिए मैनेजरों (अपान, समान, व्यान, उदान) को नियुक्त करता है।",
        nanoBananaPrompt: "A king sitting on a throne pointing directions to four ministers, assigning them territories on a map."
    },
    {
        id: 34,
        prashna: 3,
        verse: 5,
        theme: "Apana and Prana",
        sanskrit: "पायूपस्थेऽपानं चक्षुःश्रोत्रे मुखनासिकाभ्यां प्राणः स्वयं प्रातिष्ठते । मध्ये तु समानः । एष ह्येतद्भुतमन्नं समं नयति तस्मादेताः सप्तार्चिषो भवन्ति ॥ ५ ॥",
        hindi: "अपान गुदा/उपस्थ में है। प्राण आँख/कान/नाक में है। मध्य में समान है, जो अन्न को पचाता है।",
        english: "Apana is in the excretion organs. Prana is in the eye, ear, mouth, nose. Samana is in the middle, digesting food.",
        simpleExplanation: "LOCATIONS: Prana (Head/Senses). Apana (Excretion/Reproduction). Samana (Digestion/Belly).",
        simpleExplanationHindi: "स्थान: प्राण (सिर/इंद्रियां)। अपान (मलत्याग/प्रजनन)। समान (पाचन/पेट)।",
        nanoBananaPrompt: "A thermal body scan showing heat map: Red in head (Prana), Yellow in belly (Samana), Blue in lower body (Apana)."
    },
    {
        id: 35,
        prashna: 3,
        verse: 6,
        theme: "The Nerves and Vyana",
        sanskrit: "हृदि ह्येष आत्मा । अत्रैतदेकशतं नाडीनां... आसु व्यानश्चरति ॥ ६ ॥",
        hindi: "आत्मा हृदय में है। यहाँ १०१ नाड़ियां हैं... इन सब में 'व्यान' वायु विचरण करता है।",
        english: "The Self is in the heart. 101 nadis... In these moves the Vyana.",
        simpleExplanation: "Vyana is the CIRCULATION. It moves through 72,000 channels (nadis) radiating from the heart.",
        simpleExplanationHindi: "व्यान परिसंचरण है। यह हृदय से निकलने वाली 72,000 चैनलों (नाड़ियों) के माध्यम से चलता है।",
        nanoBananaPrompt: "A complex network of glowing veins (nadis) radiating from the heart to every inch of the body."
    },
    {
        id: 36,
        prashna: 3,
        verse: 7,
        theme: "Udana - The Vertical Force",
        sanskrit: "अथैकयोर्ध्व उदानः पुण्येन पुण्यं लोकं नयति पापेन पापमुभाभ्यामेव मनुष्यलोकम् ॥ ७ ॥",
        hindi: "एक (सुषुम्ना) द्वारा 'उदान' ऊपर जाता है। पुण्य से पुण्य लोक, पाप से पाप लोक, और मिश्रित से मनुष्य लोक ले जाता है।",
        english: "Through one nerve rising upward, Udana leads to virtuous worlds by good deeds, sinful worlds by sin, and human world by mixed.",
        simpleExplanation: "Udana is the ELEVATOR. It takes you UP to heaven or DOWN to hell at the moment of death based on karma.",
        simpleExplanationHindi: "उदान लिफ्ट है। यह आपको कर्म के आधार पर मृत्यु के क्षण में ऊपर स्वर्ग या नीचे नरक ले जाता है।",
        nanoBananaPrompt: "A spiritual elevator shaft showing buttons for 'Swarga' (Up), 'Naraka' (Down), and 'Prithvi' (Ground Floor)."
    },
    {
        id: 37,
        prashna: 3,
        verse: 8,
        theme: "Cosmic Correspondences",
        sanskrit: "आदित्यो ह वै बाह्यः प्राण उदयत्येष ह्येनं चाक्षुषं प्राणं अनुगृह्णानः । पृथिव्यां या देवता सैषा पुरुषस्यापानमवष्टभ्यान्तरा...",
        hindi: "आदित्य बाह्य प्राण है। पृथ्वी की देवता अपान को संभाले रखती है। आकाश समान है। वायु व्यान है।",
        english: "The Sun is external Prana. Earth controls Apana. Space is Samana. Air is Vyana.",
        simpleExplanation: "MICROCOSM = MACROCOSM. Your eye = Sun. Your down-force = Earth's Gravity. Your circulation = Wind.",
        simpleExplanationHindi: "पिंड = ब्रह्मांड। आपकी आँख = सूर्य। आपकी नीचे की शक्ति = पृथ्वी का गुरुत्वाकर्षण। आपका परिसंचरण = वायु।",
        nanoBananaPrompt: "Double exposure image showing a human body overlaid with the cosmos—Sun in eyes, Earth at feet, Wind in lungs."
    },
    {
        id: 38,
        prashna: 3,
        verse: 9,
        theme: "Fire and Udana",
        sanskrit: "तेजो ह वा उदानस्तस्मादुपशान्ततेजाः । पुनर्भवमिन्द्रियैर्मनसि सम्पद्यमानैः ॥ ९ ॥",
        hindi: "तेज ही उदान है। जिसका तेज शांत (ठंडा) हो जाता है, वह पुनर्जन्म को प्राप्त होता है।",
        english: "The external Fire is Udana. He whose bodily heat extinguishes goes to rebirth.",
        simpleExplanation: "Death = Loss of Udana (Body Heat). When the fire goes out, the soul packs up to leave.",
        simpleExplanationHindi: "मृत्यु = उदान (शरीर की गर्मी) का नुकसान। जब आग बुझ जाती है, तो आत्मा जाने के लिए सामान बांध लेती है।",
        nanoBananaPrompt: "A candle flame flickering and going out, representing the cooling of the body at death."
    },
    {
        id: 39,
        prashna: 3,
        verse: 10,
        theme: "The Process of Death",
        sanskrit: "यच्चित्तस्तेनैष प्राणमायाति प्राणस्तेजसा युक्तः । सहात्मना यथासङ्कल्पितं लोकं नयति ॥ १० ॥",
        hindi: "(मृत्यु के समय) जैसे विचार होते हैं, वैसे ही वह प्राण में प्रवेश करता है। प्राण, उदान के साथ आत्मा को संकल्पित लोक ले जाता है।",
        english: "Whatever his thought at death, with that he enters Prana. Prana leads him to the world fashioned by his desires.",
        simpleExplanation: "LAST THOUGHT MATTERS. Whatever you think of at the moment of death, that's where Udana takes you.",
        simpleExplanationHindi: "अंतिम विचार मायने रखता है। मृत्यु के क्षण में आप जो सोचते हैं, उदान आपको वहीं ले जाता है।",
        nanoBananaPrompt: "A person on a deathbed visualized with a thought bubble showing a destination, and their soul flying towards it."
    },
    {
        id: 40,
        prashna: 3,
        verse: 11,
        theme: "The Fruit of Knowledge",
        sanskrit: "य एवं विद्वान्प्राणं वेद न हास्य प्रजा हीयतेऽमृतो भवति । तदेष श्लोकः ॥ ११ ॥",
        hindi: "जो विद्वान प्राण को ऐसे जानता है, उसकी प्रजा नष्ट नहीं होती और वह अमर हो जाता है।",
        english: "The wise man who knows Prana thus—his offspring does not perish, and he becomes immortal.",
        simpleExplanation: "Knowing this secret of Promethean Fire (Prana) grants immortality and lasting lineage.",
        simpleExplanationHindi: "प्रोमेथियन अग्नि (प्राण) के इस रहस्य को जानकर अमरता और स्थायी वंश प्राप्त होता है।",
        nanoBananaPrompt: "A sage holding a flame of knowledge that never burns out, surrounded by generations of students/offspring."
    },
    {
        id: 41,
        prashna: 3,
        verse: 12,
        theme: "Summary Verse",
        sanskrit: "उत्पत्तिमायतिं स्थानं विभुत्वं चैव पञ्चधा । अध्यात्मं चैव प्राणस्य विज्ञायामृतमश्नुते... ॥ १२ ॥",
        hindi: "जो प्राण की उत्पत्ति, आगमन, स्थान, पांच प्रकार का प्रभुत्व और आध्यात्मिक रूप को जान लेता है, वह अमरता को प्राप्त करता है।",
        english: "Knowing origin, arrival, abode, fivefold sovereignty, and internal existence of Prana, one attains immortality.",
        simpleExplanation: "SUMMARY: Know Prana's Origin (Self), Arrival (Mind), Abode (Body spread), and Sovereignty = IMMORTALITY.",
        simpleExplanationHindi: "सारांश: प्राण की उत्पत्ति (आत्मा), आगमन (मन), निवास (शरीर का विस्तार), और संप्रभुता को जानो = अमरता।",
        nanoBananaPrompt: "A glowing diagram summarizing the 5 aspects of Prana, acting as a key to a door labeled 'Immortality'."
    }
];

// Metadata for Prashna Upanishad
export const PRASHNA_METADATA = {
    id: "prashna",
    name: "Prashna",
    nameSanskrit: "प्रश्नोपनिषद्",
    veda: "Atharva Veda",
    shlokaCount: 67,
    adhyayaCount: 6, // 6 Questions
    description: "The Upanishad of Questions. Six seekers ask Sage Pippalada about the source of life, the nature of Prana, dream states, meditation on Om, and the nature of the Purusha.",
    descriptionHindi: "प्रश्नों का उपनिषद। छह साधक ऋषि पिप्पलाद से जीवन के स्रोत, प्राण के स्वरूप, स्वप्न अवस्था, ओम के ध्यान और पुरुष की प्रकृति के बारे में पूछते हैं।"
};

// Helper types/functions if needed similar to Katha
export const getPrashnaVerses = (questionNumber: number) => {
    return prashnaData.filter(entry => entry.prashna === questionNumber);
};
