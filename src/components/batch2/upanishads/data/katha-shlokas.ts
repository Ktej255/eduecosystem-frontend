// Katha Upanishad (कठोपनिषद्) - The Complete 119 Verses
// Source: Krishna Yajur Veda (Katha School)
// Structure: 2 Adhyayas (Chapters), 6 Vallis (Sections)
// Theme: Dialogue between Nachiketa and Yama (Lord of Death)

export interface KathaDataEntry {
    id: number;
    valli: 1 | 2 | 3 | 4 | 5 | 6;
    adhyaya: 1 | 2;
    section: "The Story" | "First Boon" | "Second Boon" | "Third Boon - Part 1" | "Third Boon - Part 2" | "The Chariot" | "Final Teaching";
    sanskrit: string;
    transliteration?: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    theme?: string;
    nanoBananaPrompt: string;
}

// ==========================================
// ADHYAYA 1, VALLI 1: THE CURSE AND ARRIVAL
// ==========================================
export const kathaData: KathaDataEntry[] = [
    // Verse 1: The Sacrifice
    {
        id: 1,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "उशन्ह वै वाजश्रवसः सर्ववेदसं ददौ । तस्य ह नचिकेता नाम पुत्र आस ॥ १ ॥",
        hindi: "प्राचीन काल में वाजश्रवस (उद्दालक) के पुत्र ने स्वर्ग के फल की कामना से विश्वजित यज्ञ किया और अपनी सारी संपत्ति दान कर दी। उनका नचिकेता नाम का एक पुत्र था।",
        english: "Desirous of the fruit (of heaven), Vajashravas gave away all his possessions (in a sacrifice). He had a son named Nachiketa.",
        simpleExplanation: "The story begins with a transaction—giving to get something in return. This sets up the contrast between greed (father) and purity (son).",
        simpleExplanationHindi: "यह कहानी एक लेन-देन से शुरू होती है—बदले में कुछ पाने के लिए देना। यह लालच (पिता) और पवित्रता (पुत्र) के बीच का विरोधाभास स्थापित करती है।",
        theme: "The Sacrifice",
        nanoBananaPrompt: "An ancient Indian sacrifice arena with a rich king performing rituals near a fire, weak skeletal cows in background, tense atmosphere."
    },

    // Verse 2: The Awakening of Faith
    {
        id: 2,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "तँ ह कुमारँ सन्तं दक्षिणासु नीयमानासु श्रद्धाविवेश सोऽमन्यत ॥ २ ॥",
        hindi: "जब (पुरोहितों को) दक्षिणा दी जा रही थी, तब बालक नचिकेता के हृदय में 'श्रद्धा' (सत्य जानने की आस्तिक बुद्धि) का प्रवेश हुआ। उसने मन में विचार किया...",
        english: "As the gifts (cows) were being led away, Shraddha (Faith/Sincerity) entered into the young boy Nachiketa. He thought to himself...",
        simpleExplanation: "'Shraddha' is the most important word in the Upanishads. It is not just faith—it is the courage for Truth. Wisdom starts when you question the status quo.",
        simpleExplanationHindi: "'श्रद्धा' उपनिषदों का सबसे महत्वपूर्ण शब्द है। यह केवल विश्वास नहीं, बल्कि सत्य के लिए साहस है। बुद्धिमत्ता तब शुरू होती है जब आप यथास्थिति पर सवाल उठाते हैं।",
        theme: "Awakening of Faith",
        nanoBananaPrompt: "A young radiant boy with a glowing heart, watching weak cows being led away, questioning look, sacred fire in background."
    },

    // Verse 3: The Useless Cows
    {
        id: 3,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "पीतोदका जग्धतृणा दुग्धदोहा निरिन्द्रियाः । अनन्दा नाम ते लोकास्तान्स गच्छति ता ददत् ॥ ३ ॥",
        hindi: "(मेरे पिता ऐसी गायें दान कर रहे हैं) जिन्होंने पानी पी लिया है, घास खा ली है, जिनका दूध दोहा जा चुका है और जिनकी इन्द्रियां शिथिल हो गई हैं (बांझ हैं)। जो व्यक्ति ऐसा दान करता है, वह 'अनन्द' (सुख रहित) लोकों को जाता है।",
        english: "These cows have drunk their water, eaten their grass, yielded their milk for the last time, and are barren. Joyless (Ananda) are those worlds where he goes who gives such gifts.",
        simpleExplanation: "A critique of empty rituals. Spiritual currency requires sacrifice of something valuable, not something useless. You can't buy 'heaven' by donating 'garbage'.",
        simpleExplanationHindi: "खोखले कर्मकांड की आलोचना। आध्यात्मिक मुद्रा के लिए कुछ मूल्यवान का त्याग आवश्यक है, न कि बेकार चीज़ का। 'कचरा' दान करके 'स्वर्ग' नहीं खरीदा जा सकता।",
        theme: "The Useless Gift",
        nanoBananaPrompt: "Weak, skeletal, old cows with dry udders, symbolic of worthless sacrifice, dark atmosphere, hypocrisy exposed."
    },

    // Verse 4: The Question
    {
        id: 4,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "स होवाच पितरं तत कस्मै मां दास्यसीति । द्वितीयं तृतीयं तँ होवाच मृत्यवे त्वा ददामीति ॥ ४ ॥",
        hindi: "उसने अपने पिता से पूछा, 'हे पिता! (जब आप सब कुछ दान कर रहे हैं) तो मुझे किसे देंगे?' उसने दो बार, तीन बार पूछा। तब पिता ने (क्रोध में) कहा, 'मैं तुझे मृत्यु को देता हूँ!'",
        english: "He said to his father, 'Father, to whom will you give me?' He asked this a second and a third time. Then the father replied (in anger), 'Unto Death I give thee!'",
        simpleExplanation: "Nachiketa knew a son is the father's greatest wealth. To make his father's sacrifice complete, he offered himself. Words once spoken cannot be taken back.",
        simpleExplanationHindi: "नचिकेता जानता था कि पुत्र पिता की सबसे बड़ी संपत्ति है। पिता के यज्ञ को सफल बनाने के लिए उसने खुद को अर्पित किया। बोले गए शब्द वापस नहीं लिए जा सकते।",
        theme: "The Curse",
        nanoBananaPrompt: "Dramatic scene: angry king pointing at a calm young boy, sacrificial fire between them, Sanskrit text 'मृत्यवे त्वा ददामीति' floating in smoke."
    },

    // Verse 5: The Ranking
    {
        id: 5,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "बहूनामेमि प्रथमो बहूनामेमि मध्यमः । किँ स्विद्यमस्य कर्तव्यं यन्मयाद्य करिष्यति ॥ ५ ॥",
        hindi: "(नचिकेता सोचता है): बहुतों में मैं श्रेष्ठ (प्रथम) हूँ, और बहुतों में मैं मध्यम हूँ (मैं सबसे बुरा तो नहीं हूँ)। यमराज का ऐसा कौन सा कार्य है जो आज मेरे माध्यम से सिद्ध होगा?",
        english: "Among many I go as the first (the best); among many I go as the middle (average). What purpose of Yama (Death) is there that he will accomplish through me today?",
        simpleExplanation: "Self-Audit before death. Nachiketa realizes he has value and is not afraid to face his destiny. He questions his worth before the ultimate test.",
        simpleExplanationHindi: "मृत्यु से पहले आत्म-विश्लेषण। नचिकेता को अहसास है कि उसकी कीमत है और वह अपने भाग्य का सामना करने से नहीं डरता। वह अंतिम परीक्षा से पहले अपनी योग्यता पर सवाल उठाता है।",
        theme: "Self-Audit",
        nanoBananaPrompt: "Young boy in contemplation, looking at his own reflection, measuring his worth, cosmic scales in background."
    },

    // Verse 6: The Cycle of Crops
    {
        id: 6,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "अनुपश्य यथा पूर्वे प्रतिपश्य तथापरे । सस्यमिव मर्त्यः पच्यते सस्यमिवाजायते पुनः ॥ ६ ॥",
        hindi: "(पिता को शोक करते देख नचिकेता कहता है): पूर्वजों की ओर देखें और वर्तमान के लोगों को भी देखें। मनुष्य अनाज (फसल) की तरह पकता है और झड़ जाता है, और अनाज की तरह ही फिर से पैदा होता है।",
        english: "Look back at how our forefathers acted, and look around at how others act today. Like corn, the mortal ripens and falls; like corn, he is born again.",
        simpleExplanation: "The Law of Nature. Everything is cyclical. Why fear death if it is just a harvest? This is the doctrine of rebirth—life is a crop, death is not the end.",
        simpleExplanationHindi: "प्रकृति का नियम। सब कुछ चक्रीय है। मृत्यु से क्यों डरें जब यह केवल एक फसल है? यह पुनर्जन्म का सिद्धांत है—जीवन एक फसल है, मृत्यु अंत नहीं है।",
        theme: "Cycle of Life",
        nanoBananaPrompt: "Surreal art: golden wheat fields being harvested, human silhouettes rising from seeds, cycle of life visualization, spiritual journey."
    },

    // Verse 7: The Guest as Fire
    {
        id: 7,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "वैश्वानरः प्रविशत्यतिथिर्ब्राह्मणो गृहान् । तस्यैतां शान्तिं कुर्वन्ति हर वैवस्वतोदकम् ॥ ७ ॥",
        hindi: "ब्राह्मण अतिथि अग्नि (वैश्वानर) के समान गृहस्थ के घर में प्रवेश करता है। वे (सज्जन लोग) उसे जल देकर शांत करते हैं। हे वैवस्वत (यम)! आप भी (नचिकेता के लिए) जल लाएं।",
        english: "Like the fire (Vaishvanara), a Brahmana guest enters a house. The householders pacify him with water. O Son of Vivasvan (Yama), bring water (for Nachiketa).",
        simpleExplanation: "Treating a guest is like handling fire—neglect burns you, care warms you. Yama realizes his error in making Nachiketa wait.",
        simpleExplanationHindi: "अतिथि का स्वागत अग्नि को संभालने जैसा है—लापरवाही जलाती है, देखभाल गर्मी देती है। यम को अपनी गलती का अहसास होता है।",
        theme: "The Guest as Fire",
        nanoBananaPrompt: "A young boy radiating golden fire energy, standing at a dark doorway, Yama approaching with water vessel."
    },

    // Verse 8: The Cost of Neglect
    {
        id: 8,
        valli: 1,
        adhyaya: 1,
        section: "The Story",
        sanskrit: "आशाप्रतीक्षे सङ्गतं सूनृतां चेष्टापूर्ते पुत्रपशूँश्च सर्वान् । एतद्वृङ्क्ते पुरुषस्याल्पमेधसो यस्यानश्नन्वसति ब्राह्मणो गृहे ॥ ८ ॥",
        hindi: "जिस मूर्ख (अल्पबुद्धि) के घर में ब्राह्मण अतिथि भूखा रहता है, उसकी आशा, प्रतीक्षा, सत्संग का फल, वाणी की मिठास, यज्ञ और दान का पुण्य, पुत्र और पशु—यह सब नष्ट हो जाता है।",
        english: "Hope, expectation, friendship, sweet speech, sacrifices, philanthropic works, sons, and cattle—all these are destroyed for the man of little intelligence in whose house a Brahmana guest stays without eating.",
        simpleExplanation: "Neglecting a guest destroys all your accumulated merit. Hospitality is not optional—it's spiritual law.",
        simpleExplanationHindi: "अतिथि की उपेक्षा आपके सभी संचित पुण्यों को नष्ट कर देती है। आतिथ्य वैकल्पिक नहीं है—यह आध्यात्मिक नियम है।",
        theme: "Cost of Neglect",
        nanoBananaPrompt: "Dark scene showing wealth, sons, and cattle fading away like smoke from a house where a hungry guest waits."
    },

    // Verse 9: The Three Boons Offered
    {
        id: 9,
        valli: 1,
        adhyaya: 1,
        section: "First Boon",
        sanskrit: "तिस्रो रात्रीर्यदवात्सीर्गृहे मेऽनश्नन्ब्रह्मन्नतिथिर्नमस्यः । नमस्तेऽस्तु ब्रह्मन्स्वस्ति मेऽस्तु तस्मात्प्रति त्रीन्वरान्वृणीष्व ॥ ९ ॥",
        hindi: "(यम कहते हैं): हे ब्राह्मण! आप मेरे घर में तीन रातों तक बिना भोजन के रहे। आप वंदनीय अतिथि हैं। आपको नमस्कार है। मेरा कल्याण हो, इसलिए आप मुझसे तीन वर मांग लें।",
        english: "O Brahmana, since you have lived in my house for three nights without food, and you are a guest worthy of reverence—salutations to you, and may good befall me. Therefore, choose three boons (one for each night).",
        simpleExplanation: "Yama offers three boons—one for each night of neglect. The stage is set for the greatest spiritual dialogue in history.",
        simpleExplanationHindi: "यम तीन वर प्रदान करते हैं—उपेक्षा की प्रत्येक रात के लिए एक। इतिहास के सबसे महान आध्यात्मिक संवाद की भूमिका तैयार हो गई।",
        theme: "Three Boons Offered",
        nanoBananaPrompt: "Yama bowing respectfully to young Nachiketa, three golden orbs floating between them representing three boons."
    },

    // Verse 10: Boon 1 - Peace for Father
    {
        id: 10,
        valli: 1,
        adhyaya: 1,
        section: "First Boon",
        sanskrit: "शान्तसङ्कल्पः सुमना यथा स्याद्वीतमन्युर्गौतमो माभि मृत्यो । त्वत्प्रसृष्टं माभिवदेत्प्रतीत एतत्त्रयाणां प्रथमं वरं वृणे ॥ १० ॥",
        hindi: "(नचिकेता): हे मृत्यु! मेरे पिता गौतम (वाजश्रवस) मेरे प्रति शांत संकल्प वाले, प्रसन्नचित्त और क्रोध रहित हो जाएं। जब आप मुझे वापस भेजें, तो वे मुझे पहचान कर मुझसे प्रेम से बात करें।",
        english: "O Death, may my father Gautama be free from anxiety, calm of mind, and free from anger towards me. May he recognize and talk to me when I am sent back by you. This I choose as the first of the three boons.",
        simpleExplanation: "Nachiketa's first wish is selfless—peace for his father. He doesn't hold grudges. True seekers forgive first.",
        simpleExplanationHindi: "नचिकेता की पहली इच्छा निःस्वार्थ है—अपने पिता के लिए शांति। वह द्वेष नहीं रखता। सच्चे साधक पहले क्षमा करते हैं।",
        theme: "First Boon: Forgiveness",
        nanoBananaPrompt: "A father and son reuniting with golden light, the father's face transforming from anger to love."
    },

    // Verse 11: Yama Grants Boon 1
    {
        id: 11,
        valli: 1,
        adhyaya: 1,
        section: "First Boon",
        sanskrit: "यथा पुरस्ताद्भविता प्रतीत औद्दालकिारुणिर्मत्प्रसृष्टः । सुखँ रात्रीः शयिता वीतमन्युस्त्वां ददृशिवान्मृत्युमुखात्प्रमुक्तम् ॥ ११ ॥",
        hindi: "(यम): मेरे द्वारा मुक्त किए जाने पर, उद्दालक के पुत्र आरुणि (तुम्हारे पिता) तुम्हें पहले की तरह ही पहचानेंगे। तुम्हें मृत्यु के मुख से छूटा हुआ देखकर उनका क्रोध शांत हो जाएगा।",
        english: "By my permission, Auddalaki Aruni (your father) will recognize you as before. Seeing you released from the jaws of Death, he will be free from anger and will sleep peacefully at night.",
        simpleExplanation: "First boon granted. The family wound is healed before the deeper teaching begins.",
        simpleExplanationHindi: "पहला वर स्वीकृत। गहरी शिक्षा शुरू होने से पहले पारिवारिक घाव भर गया।",
        theme: "Boon 1 Granted",
        nanoBananaPrompt: "A peaceful sleeping father, dreaming of his son returning safely, moonlight through window."
    },

    // Verse 12: Boon 2 - The Fire Sacrifice
    {
        id: 12,
        valli: 1,
        adhyaya: 1,
        section: "Second Boon",
        sanskrit: "स्वर्गे लोके न भयं किञ्चनास्ति न तत्र त्वं न जरया बिभेति । उभे तीर्त्वाशनायापिपासे शोकातिगो मोदते स्वर्गलोके ॥ १२ ॥",
        hindi: "(नचिकेता): स्वर्ग लोक में कोई भय नहीं है। वहां (मृत्यु रूप में) आप भी नहीं हैं, और न ही कोई बुढ़ापे से डरता है। वहां भूख और प्यास दोनों को पार करके, जीव आनंद भोगता है।",
        english: "In the Heavenly World, there is no fear whatsoever. You (Death) are not there, nor does one fear old age. Having crossed both hunger and thirst, and being above sorrow, one rejoices in Heaven.",
        simpleExplanation: "Nachiketa describes heaven—a place without death, aging, hunger, or thirst. But is this the ultimate goal?",
        simpleExplanationHindi: "नचिकेता स्वर्ग का वर्णन करता है—एक ऐसा स्थान जहां मृत्यु, बुढ़ापा, भूख या प्यास नहीं है। लेकिन क्या यह अंतिम लक्ष्य है?",
        theme: "Description of Heaven",
        nanoBananaPrompt: "Celestial realm with no shadows, beings in eternal youth, free from hunger and sorrow."
    },

    // Verse 13: Request for the Fire Knowledge
    {
        id: 13,
        valli: 1,
        adhyaya: 1,
        section: "Second Boon",
        sanskrit: "स त्वमग्निँ स्वर्ग्यमध्येषि मृत्यो प्रब्रूहि तँ श्रद्दधानाय मह्यम् । स्वर्गलोका अमृतत्वं भजन्त एतद्द्वितीयेन वृणे वरेण ॥ १३ ॥",
        hindi: "हे मृत्यु! आप उस 'स्वर्ग' की प्राप्ति कराने वाली अग्नि विद्या को जानते हैं। मुझ श्रद्धालु को उसका उपदेश दीजिए। यह मैं दूसरे वर के रूप में मांगता हूँ।",
        english: "O Death, you know the Fire Sacrifice that leads to Heaven. Teach it to me, for I am full of faith. Through this, those in Heaven attain immortality. This I choose as my second boon.",
        simpleExplanation: "The second boon is for spiritual knowledge—the Nachiketa Fire ritual that leads to heaven.",
        simpleExplanationHindi: "दूसरा वर आध्यात्मिक ज्ञान के लिए है—नाचिकेता अग्नि अनुष्ठान जो स्वर्ग की ओर ले जाता है।",
        theme: "Second Boon Request",
        nanoBananaPrompt: "Nachiketa kneeling before Yama, a sacred fire diagram floating between them, golden light."
    },

    // Verse 14: Yama Teaches the Fire
    {
        id: 14,
        valli: 1,
        adhyaya: 1,
        section: "Second Boon",
        sanskrit: "प्र ते ब्रवीमि तदु मे निबोध स्वर्ग्यमग्निं नचिकेतः प्रजानन् । अनन्तलोकाप्तिमथो प्रतिष्ठां विद्धि त्वमेतं निहितं गुहायाम् ॥ १४ ॥",
        hindi: "(यम): हे नचिकेता! मैं स्वर्ग प्रदान करने वाली उस अग्नि को भली-भांति जानता हूँ और तुम्हें बताता हूँ। यह अग्नि अनंत लोक की प्राप्ति का साधन है, इसे बुद्धि रूपी गुफा में स्थित जानो।",
        english: "I know well the Fire conducive to Heaven, and I tell it to thee. Know this Fire to be the means of attaining the Infinite World, the support of the universe, and located in the hidden place (the heart/intellect).",
        simpleExplanation: "The secret fire is hidden in the cave of the heart. External rituals point to internal transformation.",
        simpleExplanationHindi: "गुप्त अग्नि हृदय की गुफा में छिपी है। बाहरी अनुष्ठान आंतरिक परिवर्तन की ओर इशारा करते हैं।",
        theme: "Fire Teaching",
        nanoBananaPrompt: "A glowing fire inside a cave-like heart, radiating wisdom light outward."
    },

    // Verse 15: The Lesson Verified
    {
        id: 15,
        valli: 1,
        adhyaya: 1,
        section: "Second Boon",
        sanskrit: "लोकादिमग्निं तमुवाच तस्मै या इष्टका यावतीर्वा यथा वा । स चापि तत्प्रत्यवदद्यथोक्तमथास्य मृत्युः पुनरेवाह तुष्टः ॥ १५ ॥",
        hindi: "यम ने उसे लोकों के आदि कारण उस अग्नि के बारे में बताया। नचिकेता ने वह सब वैसे का वैसा दोहरा दिया। इससे संतुष्ट होकर मृत्यु ने फिर कहा...",
        english: "Yama told him about that Fire, the source of the worlds, and what kind of bricks and how many were required. Nachiketa repeated it all exactly as taught. Then Death, being pleased, spoke again.",
        simpleExplanation: "Nachiketa proves he's a worthy student—he repeats the teaching perfectly. A good student makes the teacher want to give more.",
        simpleExplanationHindi: "नचिकेता साबित करता है कि वह योग्य शिष्य है—वह शिक्षा को पूर्णतः दोहराता है। एक अच्छा शिष्य गुरु को और देने की इच्छा जगाता है।",
        theme: "Perfect Student",
        nanoBananaPrompt: "Nachiketa reciting the fire ritual perfectly, Yama looking impressed and pleased."
    },

    // Verse 16: The Bonus Boon
    {
        id: 16,
        valli: 1,
        adhyaya: 1,
        section: "Second Boon",
        sanskrit: "तमब्रवीत्प्रीयमाणो महात्मा वरं तवेहाद्य ददामि भूयः । तवैव नाम्ना भवितायमग्निः सृङ्कां चेमामनेकरूपां गृहाण ॥ १६ ॥",
        hindi: "प्रसन्न होकर महात्मा (यम) ने कहा: मैं तुम्हें एक अतिरिक्त वर देता हूँ। आज से यह अग्नि तुम्हारे ही नाम (नाचिकेता अग्नि) से प्रसिद्ध होगी।",
        english: "High-souled Yama, being pleased, said: 'I give you here another boon today. This Fire will be known by your name indeed. And accept this multiform garland.'",
        simpleExplanation: "Bonus boon! The fire will be named after Nachiketa forever. Excellence earns rewards beyond what you ask.",
        simpleExplanationHindi: "बोनस वर! अग्नि को हमेशा के लिए नचिकेता का नाम दिया जाएगा। उत्कृष्टता आपकी मांग से अधिक पुरस्कार अर्जित करती है।",
        theme: "Bonus Boon",
        nanoBananaPrompt: "A sacred fire with 'Nachiketa' written in Sanskrit above it, eternal flame, legacy symbol."
    },

    // Verse 17: Result of the Fire
    {
        id: 17,
        valli: 1,
        adhyaya: 1,
        section: "Second Boon",
        sanskrit: "त्रिणाचिकेतस्त्रिभिरेत्य सन्धिं त्रिकर्मकृत्तरति जन्ममृत्यू । ब्रह्मजज्ञं देवमीड्यं विदित्वा निचाय्येमां शान्तिमत्यन्तमेति ॥ १७ ॥",
        hindi: "जो तीन बार 'नाचिकेता अग्नि' का अनुष्ठान करता है और तीन कर्म (यज्ञ, दान, तप) करता है, वह जन्म-मृत्यु को पार कर जाता है।",
        english: "He who performs the Nachiketa Fire three times, being united with the three, and performs the three acts (sacrifice, charity, austerity), crosses over birth and death.",
        simpleExplanation: "The Nachiketa Fire grants liberation from the cycle of birth and death—but this is still not the ultimate teaching.",
        simpleExplanationHindi: "नाचिकेता अग्नि जन्म-मृत्यु के चक्र से मुक्ति प्रदान करती है—लेकिन यह अभी भी अंतिम शिक्षा नहीं है।",
        theme: "Liberation Through Fire",
        nanoBananaPrompt: "A soul ascending from the cycle of birth-death wheel, breaking free through sacred fire."
    },

    // Verse 18: Closing the Second Boon
    {
        id: 18,
        valli: 1,
        adhyaya: 1,
        section: "Second Boon",
        sanskrit: "त्रिणाचिकेतस्त्रयमेतद्विदित्वा य एवं विद्वांश्चिनुते नाचिकेतम् । स मृत्युपाशान्पुरतः प्रणोद्य शोकातिगो मोदते स्वर्गलोके ॥ १८ ॥",
        hindi: "जो विद्वान इस अग्नि के तीन अंगों को जानकर नाचिकेता अग्नि का चयन करता है, वह मृत्यु के बंधनों को तोड़कर स्वर्गलोक में आनंद मनाता है।",
        english: "The wise man who, knowing the three, piles up the Nachiketa Fire, throws off the bonds of death even before the body falls, and overcoming sorrow, rejoices in Heaven.",
        simpleExplanation: "Second boon complete. Heaven is achieved. But Nachiketa wants MORE—the ultimate secret.",
        simpleExplanationHindi: "दूसरा वर पूर्ण। स्वर्ग प्राप्त हो गया। लेकिन नचिकेता और चाहता है—परम रहस्य।",
        theme: "Second Boon Complete",
        nanoBananaPrompt: "Nachiketa looking beyond heaven towards ultimate truth, not satisfied with celestial pleasures."
    },

    // Verse 19: Offering the Third Boon
    {
        id: 19,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 1",
        sanskrit: "एष तेऽग्निर्नचिकेतः स्वर्ग्यो यमवृणीथा द्वितीयेन वरेण । एतमग्निं तवैव प्रवक्ष्यन्ति जनासस्तृतीयं वरं नचिकेतो वृणीष्व ॥ १९ ॥",
        hindi: "हे नचिकेता! यह तुम्हारी स्वर्ग प्रदान करने वाली अग्नि है। लोग इस अग्नि को तुम्हारे ही नाम से पुकारेंगे। अब अपना तीसरा वर मांगो।",
        english: "This is thy Fire, O Nachiketa, which leads to Heaven. People will call this Fire by thy name alone. Now, O Nachiketa, choose the third boon.",
        simpleExplanation: "Yama confirms the second boon and invites the third. The stage is set for the ultimate question.",
        simpleExplanationHindi: "यम दूसरे वर की पुष्टि करते हैं और तीसरे के लिए आमंत्रित करते हैं। परम प्रश्न के लिए मंच तैयार है।",
        theme: "Third Boon Offered",
        nanoBananaPrompt: "Yama gesturing with open palms, offering the third boon, dramatic lighting, pivotal moment."
    },

    // Verse 20: Boon 3 - The Great Doubt
    {
        id: 20,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 1",
        sanskrit: "येयं प्रेते विचिकित्सा मनुष्येऽस्तीत्येके नायमस्तीति चैके । एतद्विद्यामनुशिष्टस्त्वयाहं वराणामेष वरस्तृतीयः ॥ २० ॥",
        hindi: "(नचिकेता): मनुष्य के मरने के बाद यह जो संदेह होता है—कुछ कहते हैं कि 'आत्मा रहती है' और कुछ कहते हैं कि 'नहीं रहती'। आप से सिखाया हुआ मैं इस रहस्य को जान लूँ।",
        english: "There is this doubt regarding a man when he is dead: some say 'He exists' (the Self remains), and others say 'He does not exist.' I would like to be instructed by thee in this knowledge.",
        simpleExplanation: "THE CORE QUESTION: Does consciousness survive death? This is the question that defines the entire Upanishad.",
        simpleExplanationHindi: "मुख्य प्रश्न: क्या चेतना मृत्यु के बाद बची रहती है? यह वह प्रश्न है जो पूरे उपनिषद को परिभाषित करता है।",
        theme: "The Ultimate Question",
        nanoBananaPrompt: "A soul hovering between existence and non-existence, question mark made of stars, profound mystery visual."
    },

    // Verse 21: Yama Refuses
    {
        id: 21,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 1",
        sanskrit: "देवैरत्रापि विचिकित्सितं पुरा न हि सुविज्ञेयमणुरेष धर्मः । अन्यं वरं नचिकेतो वृणीष्व मा मोपरोत्सीरति मा सृजैनम् ॥ २१ ॥",
        hindi: "(यम): इस विषय में पहले देवताओं को भी संदेह हुआ था। यह बहुत सूक्ष्म है। हे नचिकेता! कोई दूसरा वर मांग लो। मुझे इस वर से मुक्त करो।",
        english: "Even the gods of old had doubt on this point. It is not easily understood; subtle is this truth. Choose another boon, O Nachiketa. Do not press me; release me from this boon.",
        simpleExplanation: "Yama tries to avoid the question—even GODS don't fully understand this! The first temptation begins.",
        simpleExplanationHindi: "यम प्रश्न से बचने की कोशिश करते हैं—देवता भी इसे पूरी तरह नहीं समझते! पहला प्रलोभन शुरू होता है।",
        theme: "Yama Refuses",
        nanoBananaPrompt: "Yama backing away with hands raised, looking uncomfortable, the question too powerful even for Death."
    },

    // Verse 22: Nachiketa Insists
    {
        id: 22,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 1",
        sanskrit: "देवैरत्रापि विचिकित्सितं किल त्वं च मृत्यो यन्न सुविज्ञेयमात्थ । वक्ता चास्य त्वादृगन्यो न लभ्यो नान्यो वरस्तुल्य एतस्य कश्चित् ॥ २२ ॥",
        hindi: "(नचिकेता): हे मृत्यु! देवताओं को भी इसमें संदेह था। परंतु इसका वर्णन करने वाला आपके जैसा दूसरा कोई वक्ता नहीं। और इस वर के समान दूसरा कोई वर नहीं है।",
        english: "Indeed, even the gods had doubts, and you, O Death, say it is not easily understood. But another teacher like you cannot be found, nor is there any other boon equal to this.",
        simpleExplanation: "Nachiketa's logic: 'If even you can't teach it, who can? There's no better teacher, no better question.'",
        simpleExplanationHindi: "नचिकेता का तर्क: 'यदि आप भी नहीं सिखा सकते, तो कौन सिखा सकता है? कोई बेहतर शिक्षक नहीं, कोई बेहतर प्रश्न नहीं।'",
        theme: "Nachiketa Insists",
        nanoBananaPrompt: "Nachiketa standing firm, unshaken, finger pointing at Yama, determination in his eyes."
    },

    // Verse 23: Yama Offers Wealth
    {
        id: 23,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 1",
        sanskrit: "शतायुषः पुत्रपौत्रान्वृणीष्व बहून्पशून्हस्तिहिरण्यमश्वान् । भूमेर्महदायतनं वृणीष्व स्वयं च जीव शरदो यावदिच्छसि ॥ २३ ॥",
        hindi: "(यम): तुम सौ वर्ष की आयु वाले पुत्र और पौत्र मांग लो। बहुत से पशु, हाथी, सोना और घोड़े मांग लो। पृथ्वी का बहुत बड़ा साम्राज्य मांग लो।",
        english: "Choose sons and grandsons that shall live a hundred years, herds of cattle, elephants, gold, and horses. Choose a vast expanse of earth, and live yourself as many years as you desire.",
        simpleExplanation: "The TEMPTATION begins: Yama offers unlimited wealth, dynasty, and immortal life. Will Nachiketa fall?",
        simpleExplanationHindi: "प्रलोभन शुरू: यम असीमित धन, वंश और अमर जीवन प्रदान करते हैं। क्या नचिकेता गिरेगा?",
        theme: "Temptation: Wealth",
        nanoBananaPrompt: "Mountains of gold, elephants, horses, vast kingdoms materializing before Nachiketa, glittering temptation."
    },

    // Verse 24: More Temptations
    {
        id: 24,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 1",
        sanskrit: "एतत्तुल्यं यदि मन्यसे वरं वृणीष्व वित्तं चिरजीविकां च । महाभूमौ नचिकेस्त्वमेधि कामानां त्वा कामभाजं करोमि ॥ २४ ॥",
        hindi: "यदि तुम इसके समान कोई और वर मानते हो, तो धन और चिरकाल तक जीने का उपाय मांग लो। हे नचिकेता! मैं तुम्हें सभी कामनाओं का भोक्ता बना दूंगा।",
        english: "If you deem any other boon equal to this, choose that—wealth and long life. Be thou a ruler of the great earth, O Nachiketa; I will make thee the enjoyer of all desires.",
        simpleExplanation: "Yama escalates: 'I'll make you ruler of the ENTIRE EARTH and fulfill every desire!' Still not enough.",
        simpleExplanationHindi: "यम बढ़ाते हैं: 'मैं तुम्हें पूरी पृथ्वी का शासक बनाऊंगा और हर इच्छा पूरी करूंगा!' फिर भी पर्याप्त नहीं।",
        theme: "Temptation: Power",
        nanoBananaPrompt: "Nachiketa on a golden throne, the entire world as his kingdom, ultimate power offered."
    },

    // Verse 25: The Celestial Pleasures
    {
        id: 25,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 1",
        sanskrit: "ये ये कामा दुर्लभा मर्त्यलोके सर्वान्कामांशछन्दतः प्रार्थयस्व । इमा रामाः सरथाः सतूर्या न हीदृशा लम्भनीया मनुष्यैः । आभिर्मत्प्रत्ताभिः परिचारयस्व नचिकेतो मरणं मानुप्राक्षीः ॥ २५ ॥",
        hindi: "जो-जो कामनाएं मनुष्य लोक में दुर्लभ हैं, उन सबको मांग लो। ये स्वर्गीय अप्सराएं रथों और वाद्ययंत्रों के साथ हैं। लेकिन मृत्यु के बारे में मत पूछो।",
        english: "Whatever desires are difficult to obtain in the world of mortals, ask for them. These fair maidens with their chariots and music—such are not obtainable by men. Be served by them. O Nachiketa, do not ask about death.",
        simpleExplanation: "The FINAL temptation: Divine women, celestial pleasures, everything humans can't have. 'Just don't ask about death!'",
        simpleExplanationHindi: "अंतिम प्रलोभन: दिव्य स्त्रियां, स्वर्गीय सुख, वह सब जो मनुष्यों को नहीं मिल सकता। 'बस मृत्यु के बारे में मत पूछो!'",
        theme: "Temptation: Pleasure",
        nanoBananaPrompt: "Celestial maidens with chariots and music surrounding Nachiketa, ultimate sensory pleasure visualization."
    },

    // Verse 26: Nachiketa's Rejection
    {
        id: 26,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "श्वोभावा मर्त्यस्य यदन्तकैतत्सर्वेन्द्रियाणां जरयन्ति तेजः । अपि सर्वं जीवितमल्पमेव तवैव वाहास्तव नृत्यगीते ॥ २६ ॥",
        hindi: "(नचिकेता): हे अंतक (यम)! ये भोग 'कल तक रहने वाले' (अनित्य) हैं। ये सभी इन्द्रियों के तेज को क्षीण कर देते हैं। और सारा जीवन भी बहुत थोड़ा है। आपके ये वाहन और नृत्य-गान आप ही के पास रहें।",
        english: "O End-maker (Death), these things exist only until tomorrow. They wear out the vigor of all the senses. Even the longest life is very short indeed. Keep thy horses, thy dance, and song for thyself.",
        simpleExplanation: "THE ULTIMATE REJECTION: 'Keep your pleasures—they fade by tomorrow. Even 100 years is SHORT. I want ETERNAL truth.'",
        simpleExplanationHindi: "परम अस्वीकृति: 'अपने सुख अपने पास रखें—वे कल तक मुरझा जाएंगे। 100 साल भी कम है। मुझे शाश्वत सत्य चाहिए।'",
        theme: "The Great Rejection",
        nanoBananaPrompt: "Nachiketa pushing away golden treasures and celestial maidens, walking towards a simple light of truth."
    },

    // Verse 27: Wealth Cannot Satisfy
    {
        id: 27,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "न वित्तेन तर्पणीयो मनुष्यो लप्स्यामहे वित्तमद्राक्ष्म चेत्त्वा । जीविष्यामो यावदीशिष्यसि त्वं वरस्तु मे वरणियः स एव ॥ २७ ॥",
        hindi: "मनुष्य धन से कभी तृप्त नहीं हो सकता। और जब हमने आपको देख लिया, तो धन तो मिल ही जाएगा। इसलिए मेरा वर तो वही (आत्मज्ञान) है।",
        english: "Man is never satisfied with wealth. Shall we obtain wealth if we see thee? Shall we live as long as thou rulest? No, that boon alone is to be chosen by me.",
        simpleExplanation: "Nachiketa's logic: 'Wealth never satisfies. Having met Death himself, I've already conquered fear. Give me WISDOM.'",
        simpleExplanationHindi: "नचिकेता का तर्क: 'धन कभी संतुष्ट नहीं करता। मृत्यु से मिलकर, मैंने पहले ही भय पर विजय पा ली। मुझे ज्ञान दो।'",
        theme: "Wealth Cannot Satisfy",
        nanoBananaPrompt: "A man surrounded by infinite gold yet still empty and hungry, visualizing 'wealth never satisfies'."
    },

    // Verse 28: The Logic of Immortality
    {
        id: 28,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "अजीर्यताममृतानामुपेत्य जीर्यन्मर्त्यः क्वधःस्थः प्रजानन् । अभिध्यायन्वर्णरतिप्रमोदानतिदीर्घे जीविते को रमेत ॥ २८ ॥",
        hindi: "अजर और अमर देवताओं के पास पहुंचकर, कौन ऐसा बूढ़ा होने वाला मनुष्य होगा जो क्षणिक सुखों में रमेगा?",
        english: "Having approached the undecaying immortals, what decaying mortal would delight in a long life while contemplating the pleasures of beauty and love?",
        simpleExplanation: "Nachiketa's killer argument: 'When I can learn from immortals, why would I choose temporary pleasures?'",
        simpleExplanationHindi: "नचिकेता का निर्णायक तर्क: 'जब मैं अमरों से सीख सकता हूं, तो अस्थायी सुख क्यों चुनूं?'",
        theme: "Logic of Immortality",
        nanoBananaPrompt: "A mortal human looking up at eternal beings of light, choosing wisdom over fleeting pleasure."
    },

    // Verse 29: The Final Demand
    {
        id: 29,
        valli: 1,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "यस्मिन्निदं विचिकित्सन्ति मृत्यो यत्साम्पराये महति ब्रूहि नस्तत् । योऽयं वरो गूढमनुप्रविष्टो नान्यं तस्मान्नचिकेता वृणीते ॥ २९ ॥",
        hindi: "हे मृत्यु! जिस महान परलोक के विषय में यह संदेह है, उसे ही बताइए। यह वर जो अति गूढ़ है, इसके सिवा नचिकेता कोई दूसरा वर नहीं मांगता।",
        english: "Tell us that, O Death, about which they have this doubt regarding the great Hereafter. Nachiketa chooses no other boon than this, which penetrates into the hidden mystery.",
        simpleExplanation: "FINAL STAND: 'Tell me the mystery of death and the beyond. I choose NOTHING else.' Valli 1 ends with victory.",
        simpleExplanationHindi: "अंतिम स्थिति: 'मुझे मृत्यु और परलोक का रहस्य बताइए। मैं और कुछ नहीं चुनता।' वल्ली 1 विजय के साथ समाप्त।",
        theme: "The Final Demand",
        nanoBananaPrompt: "Nachiketa standing victorious, Yama bowing in respect, the greatest student meets the greatest test."
    },

    // ==========================================
    // ADHYAYA 1, VALLI 2: THE PATH OF WISDOM
    // ==========================================

    // Verse 1 (Valli 2): The Two Paths
    {
        id: 30,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "अन्यच्छ्रेयोऽन्यदुतैव प्रेयस्ते उभे नानार्थे पुरुषं सिनीतः । तयोः श्रेय आददानस्य साधु भवति हीयतेऽर्थाद्य उ प्रेयो वृणीते ॥ १ ॥",
        hindi: "(यम): 'श्रेय' (कल्याण/मोक्ष) अलग है और 'प्रेय' (प्रिय/भोग) अलग है। ये दोनों अलग-अलग उद्देश्यों वाले हैं और पुरुष को बांधते हैं। इनमें से जो 'श्रेय' को चुनता है, उसका कल्याण होता है।",
        english: "The Good (Shreyas) is one thing, and the Pleasant (Preyas) is another. Both of these, serving different ends, bind the man. It is well with him who chooses the Good; but he who chooses the Pleasant misses the true end.",
        simpleExplanation: "THE FUNDAMENTAL CHOICE: Every decision has two options—what feels good NOW vs what IS good for eternity. Choose wisely.",
        simpleExplanationHindi: "मौलिक चुनाव: हर निर्णय में दो विकल्प हैं—जो अभी अच्छा लगता है बनाम जो अनंत काल के लिए अच्छा है। बुद्धिमानी से चुनें।",
        theme: "Shreyas vs Preyas",
        nanoBananaPrompt: "A fork in the road: one path golden and easy leading to flames, another rocky but leading to light. Ultimate choice visualization."
    },

    // Verse 2 (Valli 2): The Choice of the Wise
    {
        id: 31,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "श्रेयश्च प्रेयश्च मनुष्यमेतस्तौ सम्परीत्य विविनक्ति धीरः । श्रेयो हि धीरोऽभिप्रेयसो वृणीते प्रेयो मन्दो योगक्षेमाद्वृणीते ॥ २ ॥",
        hindi: "श्रेय और प्रेय दोनों मनुष्य के पास आते हैं। धीर (बुद्धिमान) व्यक्ति उन दोनों की भली-भांति जांच करता है। धीर पुरुष प्रेय के मुकाबले श्रेय को चुनता है, जबकि मंदबुद्धि व्यक्ति शरीर के पोषण के लिए प्रेय को चुनता है।",
        english: "Both the Good and the Pleasant approach man. The wise man examines them thoroughly and distinguishes between them. The wise man prefers the Good over the Pleasant, while the simple-minded man chooses the Pleasant for material well-being.",
        simpleExplanation: "The wise EXAMINE before choosing. The fool grabs what glitters. Wisdom = the pause between stimulus and response.",
        simpleExplanationHindi: "बुद्धिमान चुनने से पहले जांच करते हैं। मूर्ख चमकती चीज़ पकड़ लेता है। बुद्धि = उत्तेजना और प्रतिक्रिया के बीच का विराम।",
        theme: "Wisdom's Choice",
        nanoBananaPrompt: "A wise sage examining two gems—one glittering fake, one dull but real diamond. Discernment visualization."
    },

    // Verse 3 (Valli 2): Nachiketa's Renunciation
    {
        id: 32,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "स त्वं प्रियान्प्रियरूपांश्च कामानभिध्यायन्नचिकेतोऽत्यस्राक्षीः । नैतां सृङ्कां वित्तमयीमवाप्तो यस्यां मज्जन्ति बहवो मनुष्याः ॥ ३ ॥",
        hindi: "हे नचिकेता! तुमने प्रिय लगने वाले और सुंदर रूप वाले भोगों का विचार करके उनका त्याग कर दिया है। तुम उस 'वित्तमयी श्रृंखला' (धन के फंदे) में नहीं फंसे जिसमें बहुत से लोग डूब जाते हैं।",
        english: "O Nachiketa, you have pondered over the pleasurable objects and rejected them. You have not accepted this chain of wealth in which many men sink.",
        simpleExplanation: "Yama praises Nachiketa: 'You saw the trap and avoided it.' Most people drown in the golden chain of wealth.",
        simpleExplanationHindi: "यम नचिकेता की प्रशंसा करते हैं: 'तुमने जाल देखा और बच गए।' अधिकांश लोग धन की सुनहरी जंजीर में डूब जाते हैं।",
        theme: "The Golden Chain",
        nanoBananaPrompt: "People drowning in golden chains while one boy walks on water above them, free from attachment."
    },

    // Verse 4 (Valli 2): Ignorance vs Knowledge
    {
        id: 33,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "दूरमेते विपरीते विषूची अविद्या या च विद्येति ज्ञाता । विद्याभीप्सिनं नचिकेतसं मन्ये न त्वा कामा बहवोऽलोलुपन्त ॥ ४ ॥",
        hindi: "अविद्या (भोग का मार्ग) और विद्या (ज्ञान का मार्ग)—ये दोनों बहुत दूर हैं, विपरीत हैं। मैं नचिकेता को 'विद्या' का अभिलाषी मानता हूँ, क्योंकि बहुत से भोग भी तुम्हें ललचा नहीं सके।",
        english: "Wide apart and leading to different ends are these two: Ignorance (Avidya) and what is known as Knowledge (Vidya). I regard Nachiketa to be aspiring for Knowledge, for many desires could not shake thee.",
        simpleExplanation: "Avidya and Vidya are OPPOSITE directions. Nachiketa chose Vidya because NO temptation could shake him.",
        simpleExplanationHindi: "अविद्या और विद्या विपरीत दिशाएं हैं। नचिकेता ने विद्या चुनी क्योंकि कोई प्रलोभन उसे हिला नहीं सका।",
        theme: "Vidya vs Avidya",
        nanoBananaPrompt: "Two roads diverging infinitely—one into darkness (Avidya), one into light (Vidya). Cosmic compass."
    },

    // Verse 5 (Valli 2): The Blind Leading the Blind
    {
        id: 34,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "अविद्यायामन्तरे वर्तमानाः स्वयं धीराः पण्डितं मन्यमानाः । दन्द्रम्यमाणा परियन्ति मूढा अन्धेनैव नीयमाना यथान्धाः ॥ ५ ॥",
        hindi: "अविद्या (अज्ञान) के भीतर रहने वाले, स्वयं को धीर और पंडित मानने वाले वे मूढ़ लोग बार-बार भटकते रहते हैं, जैसे अंधे के द्वारा ले जाए जाने वाले अंधे।",
        english: "Fools dwelling in darkness, wise in their own conceit, and puffed up with vain knowledge, go round and round staggering to and fro, like blind men led by the blind.",
        simpleExplanation: "The BLIND LEADING THE BLIND. People who think they're wise but aren't—leading others into the same pit.",
        simpleExplanationHindi: "अंधे अंधों को ले जा रहे हैं। जो लोग सोचते हैं कि वे बुद्धिमान हैं लेकिन नहीं हैं—दूसरों को उसी गड्ढे में ले जा रहे हैं।",
        theme: "Blind Leading Blind",
        nanoBananaPrompt: "A line of blindfolded people following each other in circles, falling into a pit one by one."
    },

    // Verse 6 (Valli 2): The Delusion of Wealth
    {
        id: 35,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "न साम्परायः प्रतिभाति बालं प्रमाद्यन्तं वित्तमोहेन मूढम् । अयं लोको नास्ति पर इति मानी पुनः पुनर्वशमापद्यते मे ॥ ६ ॥",
        hindi: "धन के मोह में पागल उस असावधान 'बालक' को परलोक नहीं सूझता। 'यह लोक ही है, परलोक कुछ नहीं'—ऐसा मानने वाला बार-बार मेरे (मृत्यु के) वश में आता है।",
        english: "The Hereafter never reveals itself to a person who is devoid of discrimination and heedless, being deluded by the glamour of wealth. 'This world alone exists, there is no other'—thinking thus, he falls again and again under my sway.",
        simpleExplanation: "Materialists who say 'YOLO—there's no afterlife' keep falling into Death's trap again and again.",
        simpleExplanationHindi: "भौतिकवादी जो कहते हैं 'बस यही जीवन है—कोई परलोक नहीं' बार-बार मृत्यु के जाल में गिरते रहते हैं।",
        theme: "Materialism's Trap",
        nanoBananaPrompt: "A person grabbing gold coins while falling into Death's mouth repeatedly, cycle of rebirth."
    },

    // Verse 7 (Valli 2): The Rarity of the Teacher
    {
        id: 36,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "श्रवणायापि बहुभिर्यो न लभ्यः शृण्वन्तोऽपि बहवो यं न विद्युः । आश्चर्यो वक्ता कुशलोऽस्य लब्धा आश्चर्यो ज्ञाता कुशलानुशिष्टः ॥ ७ ॥",
        hindi: "वह (आत्मतत्व) बहुत से लोगों को सुनने को भी नहीं मिलता; और बहुत से लोग सुनकर भी उसे नहीं जान पाते। इसका वर्णन करने वाला आश्चर्यजनक है, इसे प्राप्त करने वाला कुशल है।",
        english: "Many do not even get to hear of this Self; many, even while hearing, do not understand It. Wonderful is the expounder of the Self and efficient the receiver; wonderful is he who knows the Self when instructed by a capable teacher.",
        simpleExplanation: "RARE: A true teacher. RARER: A true student. RAREST: When both meet and transmission happens.",
        simpleExplanationHindi: "दुर्लभ: एक सच्चा शिक्षक। और दुर्लभ: एक सच्चा शिष्य। सबसे दुर्लभ: जब दोनों मिलते हैं और संप्रेषण होता है।",
        theme: "Rare Teacher & Student",
        nanoBananaPrompt: "A single flame passing from one candle to another in a vast darkness—rare transmission of knowledge."
    },

    // Verse 8 (Valli 2): Logic vs Awakening
    {
        id: 37,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "न नरेणावरेण प्रोक्त एष सुविज्ञेयो बहुधा चिन्त्यमानः । अनन्यप्रोक्ते गतिरत्र नास्त्यणीयान् ह्यतर्क्यमणुप्रमाणात् ॥ ८ ॥",
        hindi: "साधारण मनुष्य द्वारा बताए जाने पर यह (आत्मा) सुविज्ञेय नहीं है। जब तक 'अनन्य' (ब्रह्मनिष्ठ) गुरु द्वारा इसका उपदेश नहीं दिया जाता, तब तक इसमें गति नहीं होती। यह अणु से भी अणु है और तर्क का विषय नहीं है।",
        english: "This Self, when taught by an inferior man, is not easily understood, even though thought of in various ways. Unless taught by one who has become one with It, there is no way to understand It; for It is subtler than the subtle and beyond argument.",
        simpleExplanation: "You can't ARGUE your way to enlightenment. It's SUBTLER than logic. Only a realized teacher can transmit it.",
        simpleExplanationHindi: "आप तर्क से ज्ञान प्राप्त नहीं कर सकते। यह तर्क से भी सूक्ष्म है। केवल एक आत्मसाक्षात्कारी गुरु ही इसे संप्रेषित कर सकते हैं।",
        theme: "Beyond Logic",
        nanoBananaPrompt: "A philosopher's books burning while a silent master transmits light through his eyes to a student."
    },

    // Verse 9 (Valli 2): Faith over Argument
    {
        id: 38,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "नैषा तर्केण मतिरापनेया प्रोक्तान्येनैव सुज्ञानाय प्रेष्ठ । यां त्वमापः सत्यधृतिर्बतासि त्वादृङ्नो भूयान्नचिकेतः प्रष्टा ॥ ९ ॥",
        hindi: "हे प्रिय! यह बुद्धि तर्क से प्राप्त नहीं की जा सकती। किसी ज्ञानी द्वारा उपदेश किए जाने पर ही यह सुज्ञान होती है। तुम जिस धैर्य को प्राप्त हुए हो, वह अद्भुत है। हे नचिकेता! तुम्हारे जैसा शिष्य हमें सदा मिले।",
        english: "This wisdom cannot be obtained by reasoning. Only when taught by another (a wise teacher), O dearest one, does it lead to real knowledge. Thou hast obtained it. Thou art fixed in truth. May we find a questioner like thee, O Nachiketa!",
        simpleExplanation: "Yama's blessing: 'May I always find students like you!' The highest compliment from Death himself.",
        simpleExplanationHindi: "यम का आशीर्वाद: 'काश मुझे हमेशा तुम्हारे जैसे शिष्य मिलें!' मृत्यु की ओर से सर्वोच्च प्रशंसा।",
        theme: "Yama's Blessing",
        nanoBananaPrompt: "Yama blessing Nachiketa with folded hands, role reversal—Death honoring a mortal student."
    },

    // Verse 10 (Valli 2): Yama's Confession
    {
        id: 39,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "जानाम्यहं शेवधिरित्यनित्यं न ह्यध्रुवैः प्राप्यते हि ध्रुवं तत् । ततो मया नाचिकेताश्चितोऽग्निरनित्यैर्द्रव्यैः प्राप्तवानस्मि नित्यम् ॥ १० ॥",
        hindi: "(यम कहते हैं): मैं जानता हूँ कि यह 'निधि' (कर्मफल/स्वर्ग) अनित्य है, क्योंकि अनित्य वस्तुओं से वह 'नित्य' प्राप्त नहीं किया जा सकता। इसलिए मैंने 'नाचिकेता अग्नि' का चयन किया।",
        english: "I know that the treasure (of Karma) is impermanent; for that Permanent One is not obtained by impermanent things. Therefore, I piled the Nachiketa Fire with impermanent materials and have attained this (relatively) permanent position (as Death).",
        simpleExplanation: "Even DEATH confesses: 'I used temporary rituals to get my temporary position. The Eternal requires a different approach.'",
        simpleExplanationHindi: "मृत्यु भी स्वीकार करता है: 'मैंने अपनी अस्थायी स्थिति पाने के लिए अस्थायी अनुष्ठानों का उपयोग किया। शाश्वत के लिए अलग दृष्टिकोण चाहिए।'",
        theme: "Death's Confession",
        nanoBananaPrompt: "Yama looking at his own throne, realizing even his position is temporary compared to the Eternal."
    },

    // Verse 11 (Valli 2): Nachiketa's Superiority
    {
        id: 40,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "कामस्याप्तिं जगतः प्रतिष्ठां क्रतोरनन्त्यमभयस्य पारम् । स्तोममहदुरुगायं प्रतिष्ठां दृष्ट्वा धृत्या धीरो नचिकेतोऽत्यस्राक्षीः ॥ ११ ॥",
        hindi: "तुमने कामनाओं की पूर्ति, जगत का आधार, यज्ञ का अनंत फल, अभय का तट देखकर भी, हे नचिकेता! अपनी बुद्धि से उन सबको तिनके के समान त्याग दिया।",
        english: "Having seen the fulfillment of all desires, the support of the world, the endless fruit of rites, the other shore of fearlessness—O wise Nachiketa, thou hast firmly rejected them all.",
        simpleExplanation: "Nachiketa SAW everything—heaven, power, immortality—and STILL said 'Not enough. Give me the TRUTH.'",
        simpleExplanationHindi: "नचिकेता ने सब कुछ देखा—स्वर्ग, शक्ति, अमरता—और फिर भी कहा 'पर्याप्त नहीं। मुझे सत्य दो।'",
        theme: "Ultimate Discernment",
        nanoBananaPrompt: "Nachiketa standing on a mountain of treasures, looking beyond at a simple eternal light."
    },

    // Verse 12 (Valli 2): The Difficult Path (Yoga)
    {
        id: 41,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "तं दुर्दर्शं गूढमनुप्रविष्टं गुहाहितं गह्वरेष्ठं पुराणम् । अध्यात्मयोगाधिगमेन देवं मत्वा धीरो हर्षशोकौ जहाति ॥ १२ ॥",
        hindi: "उस दुर्दर्श (कठिनाई से दिखने वाले), गूढ़, हृदय की गुफा में छिपे हुए देव (आत्मा) को 'अध्यात्म योग' द्वारा जानकर, धीर पुरुष हर्ष और शोक दोनों को त्याग देता है।",
        english: "Realizing through 'Adhyatma Yoga' (meditation on the Self) that ancient, effulgent One, who is hard to see, hidden in the cave of the heart—the wise man leaves behind both joy and sorrow.",
        simpleExplanation: "The path is ADHYATMA YOGA—going inward. Find the Self in the cave of the heart. Then joy and sorrow both dissolve.",
        simpleExplanationHindi: "मार्ग अध्यात्म योग है—अंतर्मुख होना। हृदय की गुफा में आत्मा को खोजें। तब हर्ष और शोक दोनों विलीन हो जाते हैं।",
        theme: "Adhyatma Yoga",
        nanoBananaPrompt: "A yogi diving into a glowing cave within his own heart, discovering the eternal light inside."
    },

    // Verse 13 (Valli 2): The Essence of Dharma
    {
        id: 42,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "एतच्छ्रुत्वा सम्परिगृह्य मर्त्यः प्रवृह्य धर्म्यमणुमेतमाप्य । स मोदते मोदनीयं हि लब्ध्वा विवृतं सद्म नचिकेतसं मन्ये ॥ १३ ॥",
        hindi: "मनुष्य इसे सुनकर, अच्छी तरह ग्रहण करके, उस सूक्ष्म तत्व को पाकर आनंदित होता है। मैं मानता हूँ कि नचिकेता के लिए ब्रह्म का घर खुला है।",
        english: "Hearing this and grasping it well, separating that righteous Self from the body, and attaining that subtle One, the mortal rejoices, for he has obtained the source of joy. I think the abode of Brahman is open to Nachiketa.",
        simpleExplanation: "Yama declares: 'The door to Brahman is OPEN for you, Nachiketa!' The ultimate invitation.",
        simpleExplanationHindi: "यम घोषणा करते हैं: 'ब्रह्म का द्वार तुम्हारे लिए खुला है, नचिकेता!' परम निमंत्रण।",
        theme: "Door to Brahman",
        nanoBananaPrompt: "A massive golden door opening to infinite light, Nachiketa standing at the threshold."
    },

    // Verse 14 (Valli 2): The Main Question
    {
        id: 43,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "अन्यत्र धर्मादन्यत्राधर्मादन्यत्रास्मात्कृताकृतात् । अन्यत्र भूताच्च भव्याच्च यत्तत्पश्यसि तद्वद ॥ १४ ॥",
        hindi: "(नचिकेता): जो धर्म से अलग है और अधर्म से भी अलग है; जो किए हुए और न किए हुए से अलग है; जो भूत और भविष्य से भी परे है—जिसे आप ऐसा देखते हैं, उसे मुझे बताइए।",
        english: "Tell me that which thou seest as different from Dharma and Adharma, different from cause and effect, different from the past and the future.",
        simpleExplanation: "Nachiketa asks for the ULTIMATE: 'What is beyond good/evil, past/future, cause/effect?' The Absolute.",
        simpleExplanationHindi: "नचिकेता परम की मांग करता है: 'अच्छे/बुरे, अतीत/भविष्य, कारण/कार्य से परे क्या है?' परम तत्व।",
        theme: "The Absolute",
        nanoBananaPrompt: "A point of light beyond all dualities—beyond time, beyond karma, beyond everything."
    },

    // Verse 15 (Valli 2): The Answer is OM
    {
        id: 44,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "सर्वे वेदा यत्पदमामनन्ति तपांसि सर्वाणि च यद्वदन्ति । यदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदं सङ्ग्रहेण ब्रवीम्योमित्येतत् ॥ १५ ॥",
        hindi: "(यम): सारे वेद जिस पद का वर्णन करते हैं, सारी तपस्याएं जिसकी बात करती हैं, और जिसकी इच्छा करते हुए लोग ब्रह्मचर्य का पालन करते हैं—वह पद मैं तुम्हें संक्षेप में बताता हूँ: वह **'ॐ'** है।",
        english: "That Word which all the Vedas declare, which all austerities proclaim, desiring which people practice Brahmacharya—that Word I tell thee briefly: it is **OM**.",
        simpleExplanation: "THE ANSWER: OM. All Vedas point to it. All disciplines aim for it. OM is the name of the Absolute.",
        simpleExplanationHindi: "उत्तर: ॐ। सभी वेद इसकी ओर इशारा करते हैं। सभी साधनाएं इसके लिए हैं। ॐ परम तत्व का नाम है।",
        theme: "OM - The Answer",
        nanoBananaPrompt: "The symbol OM radiating infinite light, all scriptures and disciplines flowing towards it."
    },

    // Verse 16 (Valli 2): The Power of OM
    {
        id: 45,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "एतद्ध्येवाक्षरं ब्रह्म एतद्ध्येवाक्षरं परम् । एतद्ध्येवाक्षरं ज्ञात्वा यो यदिच्छति तस्य तत् ॥ १६ ॥",
        hindi: "यह अक्षर ही ब्रह्म है, यह अक्षर ही परम है। इस अक्षर को जानकर जो जिसकी इच्छा करता है, उसे वह मिल जाता है।",
        english: "This Syllable is, verily, Brahman. This Syllable is, verily, the Supreme. Knowing this Syllable, whatever one desires, one gets.",
        simpleExplanation: "OM = Brahman = The Supreme. Know OM truly, and all desires are fulfilled—because you realize you ARE everything.",
        simpleExplanationHindi: "ॐ = ब्रह्म = परम। ॐ को सच में जानो, और सभी इच्छाएं पूरी हो जाती हैं—क्योंकि आप अनुभव करते हैं कि आप ही सब कुछ हैं।",
        theme: "OM is Brahman",
        nanoBananaPrompt: "OM symbol dissolving into infinite Brahman, becoming everything and nothing simultaneously."
    },

    // Verse 17 (Valli 2): The Best Support
    {
        id: 46,
        valli: 2,
        adhyaya: 1,
        section: "Third Boon - Part 2",
        sanskrit: "एतदालम्बनं श्रेष्ठमेतदालम्बनं परम् । एतदालम्बनं ज्ञात्वा ब्रह्मलोके महीयते ॥ १७ ॥",
        hindi: "यह आलंबन (सहारा) श्रेष्ठ है, यह आलंबन परम है। इस आलंबन को जानकर मनुष्य ब्रह्मलोक में महिमा को प्राप्त होता है।",
        english: "This is the best support; this is the highest support. Knowing this support, one is worshipped in the world of Brahman.",
        simpleExplanation: "OM is the ultimate SUPPORT. When everything else fails, OM remains. The cosmic safety net.",
        simpleExplanationHindi: "ॐ परम सहारा है। जब बाकी सब विफल हो जाए, ॐ बना रहता है। ब्रह्मांडीय सुरक्षा जाल।",
        theme: "Ultimate Support",
        nanoBananaPrompt: "A person falling through space, caught by the vibration of OM—the ultimate safety net."
    },

    // Verse 18 (Valli 2): The Eternal Self - MOST FAMOUS VERSE
    {
        id: 47,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "न जायते म्रियते वा विपश्चिन्नायं कुतश्चिन्न बभूव कश्चित् । अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥ १८ ॥",
        hindi: "यह विपश्चित् (ज्ञानी आत्मा) न जन्म लेता है और न मरता है। न यह किसी से उत्पन्न हुआ है। यह अजन्मा, नित्य, शाश्वत और पुराण है। शरीर के मारे जाने पर भी यह नहीं मारा जाता।",
        english: "The knowing Self is not born; It does not die. It has not sprung from anything; nothing has sprung from It. Birthless, eternal, everlasting, and ancient, It is not killed when the body is killed.",
        simpleExplanation: "THE MOST FAMOUS VERSE (also in Bhagavad Gita 2.20): The Self is NEVER born, NEVER dies. Bodies fall, the Self remains.",
        simpleExplanationHindi: "सबसे प्रसिद्ध श्लोक (गीता 2.20 में भी): आत्मा कभी जन्म नहीं लेती, कभी मरती नहीं। शरीर गिरते हैं, आत्मा बनी रहती है।",
        theme: "Eternal Self",
        nanoBananaPrompt: "An indestructible brilliant light inside a body that is dissolving—the Self surviving death."
    },

    // Verse 19 (Valli 2): The Slayer and the Slain
    {
        id: 48,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "हन्ता चेन्मन्यते हन्तुं हतश्चेन्मन्यते हतम् । उभौ तौ न विजानीतो नायं हन्ति न हन्यते ॥ १९ ॥",
        hindi: "यदि मारने वाला सोचता है कि वह मारता है, और यदि मरने वाला सोचता है कि वह मारा गया है—तो वे दोनों ही नहीं जानते। न यह आत्मा मारता है और न यह मारा जाता है।",
        english: "If the killer thinks he kills, and if the killed thinks he is killed, neither of these two knows. The Self kills not, nor is It killed.",
        simpleExplanation: "Both killer and killed are WRONG. The Self neither kills nor can be killed. Only bodies interact; the Self is untouched.",
        simpleExplanationHindi: "मारने वाला और मरने वाला दोनों गलत हैं। आत्मा न मारती है न मारी जा सकती है। केवल शरीर संपर्क करते हैं; आत्मा अछूती है।",
        theme: "Beyond Death",
        nanoBananaPrompt: "A sword passing through a being of light without touching it—the Self untouched by violence."
    },

    // Verse 20 (Valli 2): Smaller than Small, Greater than Great
    {
        id: 49,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "अणोरणीयान्महतो महीयानात्मास्य जन्तोर्निहितो गुहायाम् । तमक्रतुः पश्यति वीतशोको धातुप्रसादान्महिमानमात्मनः ॥ २० ॥",
        hindi: "अणु से भी अणु और महान से भी महान, यह आत्मा हृदय रूपी गुफा में स्थित है। कामना रहित मनुष्य, इंद्रियों और मन की शांति से, उस आत्मा की महिमा को देखता है।",
        english: "Subtler than the subtle, greater than the great, the Self is seated in the heart of the creature. The desireless man sees the glory of the Self through the tranquillity of the senses and mind and becomes free from sorrow.",
        simpleExplanation: "SMALLER than an atom, BIGGER than the universe—the Self is both. Only the desireless can perceive it.",
        simpleExplanationHindi: "परमाणु से छोटा, ब्रह्मांड से बड़ा—आत्मा दोनों है। केवल इच्छा रहित ही इसे देख सकता है।",
        theme: "Infinite & Infinitesimal",
        nanoBananaPrompt: "An atom containing a universe, and a universe contained in an atom—the Self as both extremes."
    },

    // Verse 21 (Valli 2): The Paradox of Motion
    {
        id: 50,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "आसीनो दूरं व्रजति शयानो याति सर्वतः । कस्तं मदामदं देवं मदन्यो ज्ञातुमर्हति ॥ २१ ॥",
        hindi: "वह बैठे हुए भी दूर चला जाता है, और सोते हुए भी सब जगह जाता है। उस देव को मेरे सिवा और कौन जान सकता है?",
        english: "Sitting, He travels far; lying down, He goes everywhere. Who else but I am able to know that God who rejoices and rejoices not?",
        simpleExplanation: "The Self doesn't move, yet reaches everywhere. It doesn't act, yet does everything. The ultimate paradox.",
        simpleExplanationHindi: "आत्मा हिलती नहीं, फिर भी हर जगह पहुंचती है। कार्य नहीं करती, फिर भी सब कुछ करती है। परम विरोधाभास।",
        theme: "Motionless Mover",
        nanoBananaPrompt: "A still point at the center of a spinning galaxy—motionless yet the cause of all motion."
    },

    // Verse 22 (Valli 2): Bodiless in Bodies
    {
        id: 51,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "अशरीरं शरीरेषु अनवस्थेष्ववस्थितम् । महान्तं विभुमात्मानं मत्वा धीरो न शोचति ॥ २२ ॥",
        hindi: "शरीरों में अशरीर, और अस्थिर वस्तुओं में स्थिर—उस महान और व्यापक आत्मा को जानकर धीर पुरुष शोक नहीं करता।",
        english: "The wise man, knowing the Self as bodiless in the midst of bodies, and permanent in the midst of the impermanent, and as the Great and All-pervading One, does not grieve.",
        simpleExplanation: "The Self is BODILESS in bodies, PERMANENT in impermanent things. Know this = no more grief.",
        simpleExplanationHindi: "आत्मा शरीरों में अशरीर है, अस्थिर में स्थिर है। यह जानो = अब कोई शोक नहीं।",
        theme: "Bodiless Self",
        nanoBananaPrompt: "A ghost-like pure consciousness inhabiting a body, unaffected by the body's changes."
    },

    // Verse 23 (Valli 2): Not by Logic, but by Choice - KEY VERSE
    {
        id: 52,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन । यमेवैष वृणुते तेन लभ्यस्तस्यैष आत्मा विवृणुते तनूं स्वाम् ॥ २३ ॥",
        hindi: "यह आत्मा न प्रवचन से, न बुद्धि से, और न बहुत सुनने से प्राप्त किया जा सकता है। यह जिसे चुन लेता है, उसी के द्वारा यह प्राप्त किया जाता है। उसके प्रति यह आत्मा अपना स्वरूप प्रकट कर देता है।",
        english: "This Self cannot be attained by instruction, nor by intellect, nor by much hearing. He whom the Self chooses (or he who chooses the Self), by him alone is It attained. To him the Self reveals Its own nature.",
        simpleExplanation: "KEY VERSE: Not by study, not by intellect, not by listening. The Self CHOOSES whom to reveal itself to. Grace + Surrender.",
        simpleExplanationHindi: "मुख्य श्लोक: अध्ययन से नहीं, बुद्धि से नहीं, सुनने से नहीं। आत्मा चुनती है किसे अपने को प्रकट करना है। कृपा + समर्पण।",
        theme: "Grace of Self-Revelation",
        nanoBananaPrompt: "The Self as light choosing to illuminate a humble, surrendered seeker among many scholars."
    },

    // Verse 24 (Valli 2): Requirements for Knowledge
    {
        id: 53,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "नाविरतो दुश्चरितान्नाशान्तो नासमाहितः । नाशान्तमानसो वापि प्रज्ञानेनैनमाप्नुयात् ॥ २४ ॥",
        hindi: "जो दुराचार से विरत नहीं हुआ है, जो शांत नहीं है, जिसका मन एकाग्र नहीं है, और जिसका मन अशांत है—वह केवल 'ज्ञान' से इस आत्मा को प्राप्त नहीं कर सकता।",
        english: "He who has not turned away from wickedness, who is not tranquil, whose mind is not concentrated, and whose mind is not at peace, cannot attain this Self even by knowledge.",
        simpleExplanation: "PREREQUISITES: Stop wrongdoing. Be calm. Concentrate. Find inner peace. WITHOUT these, even knowledge won't reveal the Self.",
        simpleExplanationHindi: "पूर्व शर्तें: गलत काम बंद करो। शांत रहो। एकाग्र हो जाओ। आंतरिक शांति पाओ। इनके बिना, ज्ञान भी आत्मा को प्रकट नहीं करेगा।",
        theme: "Prerequisites for Knowledge",
        nanoBananaPrompt: "Four steps carved in stone: Stop Evil, Be Calm, Concentrate, Find Peace—leading to light."
    },

    // Verse 25 (Valli 2): The Consumer of All
    {
        id: 54,
        valli: 2,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "यस्य ब्रह्म च क्षत्रं च उभे भवत ओदनः । मृत्युर्यस्योपसेचनं क इत्था वेद यत्र सः ॥ २५ ॥",
        hindi: "जिसके लिए ब्राह्मण और क्षत्रिय दोनों भोजन बन जाते हैं, और मृत्यु जिसका 'उपसेचन' (चटनी) है—वह कहां और कैसा है, यह कौन जान सकता है?",
        english: "Of whom the Brahmana and the Kshatriya classes are (as it were) food, and Death itself is the condiment (pickle/sauce)—who thus knows where He is?",
        simpleExplanation: "The Absolute EATS everything—even Death is just a side dish! Who can measure such infinite power?",
        simpleExplanationHindi: "परम तत्व सब कुछ खा जाता है—मृत्यु भी केवल एक साइड डिश है! ऐसी अनंत शक्ति को कौन माप सकता है?",
        theme: "Consumer of All",
        nanoBananaPrompt: "A cosmic being consuming the entire universe including Death—the Absolute that devours all."
    },

    // ==========================================
    // ADHYAYA 1, VALLI 3: THE CHARIOT OF THE SOUL
    // ==========================================

    // Verse 1 (Valli 3): The Two Birds
    {
        id: 55,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "ऋतं पिबन्तौ सुकृतस्य लोके गुहां प्रविष्टौ परमे परार्धे । छायातपौ ब्रह्मविदो वदन्ति पञ्चाग्नयो ये च त्रिणाचिकेताः ॥ १ ॥",
        hindi: "अपने कर्मों के फल का पान करते हुए, ये दोनों (जीवात्मा और परमात्मा) बुद्धि रूपी गुफा में प्रविष्ट हैं। ब्रह्मवेत्ता उन्हें 'छाया' और 'आतप' (धूप) की तरह बताते हैं।",
        english: "Having entered the cavity of the heart, the two (Self and Ego) enjoy the reward of their good works. The knowers of Brahman call them 'Shadow' and 'Light.'",
        simpleExplanation: "Two birds on one tree: the Ego (experiencing) and the Self (witnessing). One eats the fruit, one watches.",
        simpleExplanationHindi: "एक पेड़ पर दो पक्षी: अहंकार (अनुभव करने वाला) और आत्मा (साक्षी)। एक फल खाता है, एक देखता है।",
        theme: "Two Birds",
        nanoBananaPrompt: "Two birds on a tree—one eating fruit (ego), one watching serenely (Self). Shadow and Light metaphor."
    },

    // Verse 2 (Valli 3): The Bridge to Fearlessness
    {
        id: 56,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "यः सेतुरीजानानामक्षरं ब्रह्म यत्परम् । अभयं तितीर्षतां पारं नाचिकेतं शकेमहि ॥ २ ॥",
        hindi: "हम उस 'नाचिकेता अग्नि' को जानने में समर्थ हों, जो यज्ञ करने वालों के लिए सेतु है; और उस 'अक्षर ब्रह्म' को भी जानें, जो भय से मुक्त होकर संसार को पार करने वालों के लिए अभय तट है।",
        english: "May we be able to master that Nachiketa Fire which is a bridge for sacrificers; and also that Supreme Brahman, which is the shore of fearlessness for those who wish to cross Samsara.",
        simpleExplanation: "The Nachiketa Fire is a BRIDGE to heaven; Brahman knowledge is the SHORE of fearlessness.",
        simpleExplanationHindi: "नाचिकेता अग्नि स्वर्ग का पुल है; ब्रह्म ज्ञान अभय का तट है।",
        theme: "Bridge to Freedom",
        nanoBananaPrompt: "A bridge of fire crossing an ocean of confusion, leading to a shore of pure light—fearlessness."
    },

    // Verse 3 (Valli 3): THE CHARIOT ANALOGY - MOST FAMOUS VERSE
    {
        id: 57,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "आत्मानँ रथिनं विद्धि शरीरँ रथमेव तु । बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥ ३ ॥",
        hindi: "आत्मा को रथी (रथ का स्वामी) जानो, और शरीर को रथ जानो। बुद्धि को सारथि (ड्राइवर) जानो, और मन को लगाम जानो।",
        english: "Know the Atman (Self) as the Lord of the Chariot, and the Body as the Chariot. Know the Intellect (Buddhi) as the Charioteer, and the Mind (Manas) as the Reins.",
        simpleExplanation: "THE CHARIOT METAPHOR: Self = Owner, Body = Chariot, Intellect = Driver, Mind = Reins. The most famous psychological model!",
        simpleExplanationHindi: "रथ रूपक: आत्मा = मालिक, शरीर = रथ, बुद्धि = चालक, मन = लगाम। सबसे प्रसिद्ध मनोवैज्ञानिक मॉडल!",
        theme: "The Chariot Metaphor",
        nanoBananaPrompt: "A golden chariot with labeled parts: Self as passenger, Intellect as driver, Mind as reins, Body as chariot."
    },

    // Verse 4 (Valli 3): The Horses and the Road
    {
        id: 58,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "इन्द्रियाणि हयानाहुर्विषयांस्तेषु गोचरान् । आत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुर्मनीषिणः ॥ ४ ॥",
        hindi: "इन्द्रियों को घोड़े कहा गया है, और विषयों (रूप, रस, गंध आदि) को उन घोड़ों के मार्ग कहा गया है। ज्ञानी कहते हैं कि शरीर, इन्द्रियां और मन से युक्त आत्मा ही 'भोक्ता' है।",
        english: "The senses, they say, are the horses; and their objects are the roads on which they run. The wise call the Self the 'Enjoyer' (Bhokta) when united with the body, senses, and mind.",
        simpleExplanation: "CONTINUING THE METAPHOR: Senses = Horses, Sense-Objects = Roads. The Self RIDES this vehicle of experience.",
        simpleExplanationHindi: "रूपक जारी: इन्द्रियां = घोड़े, विषय = रास्ते। आत्मा इस अनुभव के वाहन की सवारी करती है।",
        theme: "Horses and Roads",
        nanoBananaPrompt: "Five horses (senses) running on five roads (sight, sound, smell, taste, touch) pulling the chariot."
    },

    // Verse 5 (Valli 3): The Uncontrolled Mind
    {
        id: 59,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "यस्त्वविज्ञानवान्भवत्ययुक्तेन मनसा सदा । तस्येन्द्रियाण्यवश्यानि दुष्टाश्वा इव सारथेः ॥ ५ ॥",
        hindi: "जो (बुद्धि) विवेकहीन होती है और जिसका मन सदा अनियंत्रित रहता है, उसकी इन्द्रियां (घोड़े) वैसे ही बेकाबू हो जाती हैं जैसे सारथि के लिए दुष्ट घोड़े।",
        english: "He who has no discrimination and whose mind is always uncontrolled, his senses go out of control, like vicious horses for a charioteer.",
        simpleExplanation: "BAD DRIVER: No intellect + loose reins = wild horses! Your senses will drag you anywhere.",
        simpleExplanationHindi: "बुरा चालक: कोई बुद्धि नहीं + ढीली लगाम = जंगली घोड़े! आपकी इन्द्रियां आपको कहीं भी खींच ले जाएंगी।",
        theme: "Uncontrolled Senses",
        nanoBananaPrompt: "Wild horses pulling a crashing chariot with a helpless driver who lost the reins—chaos visualization."
    },

    // Verse 6 (Valli 3): The Controlled Mind
    {
        id: 60,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "यस्तु विज्ञानवान्भवति युक्तेन मनसा सदा । तस्येन्द्रियाणि वश्यानि सदश्वा इव सारथेः ॥ ६ ॥",
        hindi: "लेकिन जो (बुद्धि) विवेकवान होती है और जिसका मन सदा नियंत्रित रहता है, उसकी इन्द्रियां वैसे ही वश में रहती हैं जैसे सारथि के लिए अच्छे घोड़े।",
        english: "But he who has discrimination and whose mind is always controlled, his senses are under control, like good horses for a charioteer.",
        simpleExplanation: "GOOD DRIVER: Sharp intellect + firm reins = trained horses! Your senses obey YOUR direction.",
        simpleExplanationHindi: "अच्छा चालक: तीक्ष्ण बुद्धि + मजबूत लगाम = प्रशिक्षित घोड़े! आपकी इन्द्रियां आपकी दिशा का पालन करती हैं।",
        theme: "Controlled Senses",
        nanoBananaPrompt: "A skilled charioteer with well-trained horses moving gracefully in perfect harmony."
    },

    // Verse 7 (Valli 3): The Cycle of Rebirth
    {
        id: 61,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "यस्त्वविज्ञानवान्भवत्यमनस्कः सदाऽशुचिः । न स तत्पदमाप्नोति संसारं चाधिगच्छति ॥ ७ ॥",
        hindi: "जो (सारथि/बुद्धि) अविवेकी, लापरवाह और सदा अपवित्र रहता है, वह उस परम पद को प्राप्त नहीं करता, बल्कि संसार (जन्म-मृत्यु के चक्र) में पड़ता है।",
        english: "He who has no discrimination, who is mindless and always impure, does not attain that Goal, but enters into the cycle of births and deaths.",
        simpleExplanation: "RESULT OF BAD DRIVING: Miss the destination, crash into rebirth cycle again and again.",
        simpleExplanationHindi: "बुरी ड्राइविंग का परिणाम: गंतव्य चूक गए, बार-बार पुनर्जन्म चक्र में दुर्घटनाग्रस्त।",
        theme: "Rebirth Cycle",
        nanoBananaPrompt: "A chariot going in circles forever, never reaching the destination—the cycle of Samsara."
    },

    // Verse 8 (Valli 3): The Destination
    {
        id: 62,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "यस्तु विज्ञानवान्भवति समनस्कः सदा शुचिः । स तु तत्पदमाप्नोति यस्माद्भूयो न जायते ॥ ८ ॥",
        hindi: "किन्तु जो विवेकवान है, मन को वश में रखने वाला है और सदा पवित्र रहता है, वह उस पद को प्राप्त कर लेता है जहाँ से फिर जन्म नहीं लेना पड़ता।",
        english: "But he who has discrimination, who has a controlled mind and is always pure, attains that Goal from which he is not born again.",
        simpleExplanation: "RESULT OF GOOD DRIVING: Reach the destination—no more rebirth! Liberation achieved.",
        simpleExplanationHindi: "अच्छी ड्राइविंग का परिणाम: गंतव्य पर पहुंचे—अब पुनर्जन्म नहीं! मुक्ति प्राप्त।",
        theme: "Liberation",
        nanoBananaPrompt: "A chariot arriving at a brilliant destination of light, journey complete, no return needed."
    },

    // Verse 9 (Valli 3): The Supreme Abode - Vishnu Padam
    {
        id: 63,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "विज्ञानसारथिर्यस्तु मनःप्रग्रहवान्नरः । सोऽध्वनः पारमाप्नोति तद्विष्णोः परमं पदम् ॥ ९ ॥",
        hindi: "जिस मनुष्य की बुद्धि सारथि है और मन रूपी लगाम जिसके हाथ में है, वह संसार मार्ग के पार—उस 'विष्णु के परम पद' (मोक्ष) को प्राप्त कर लेता है।",
        english: "The man who has Intellect for his charioteer and holds the reins of the Mind, he reaches the end of the journey—that supreme abode of Vishnu (the All-Pervading).",
        simpleExplanation: "THE DESTINATION: Vishnu's Supreme Abode—the final resting place. Journey's end for the well-driven chariot.",
        simpleExplanationHindi: "गंतव्य: विष्णु का परम धाम—अंतिम विश्राम स्थल। अच्छी तरह चलाए गए रथ की यात्रा का अंत।",
        theme: "Vishnu's Abode",
        nanoBananaPrompt: "A chariot reaching a cosmic palace of infinite light—Vishnu's Supreme Abode, journey complete."
    },

    // Verse 10 (Valli 3): The Hierarchy of Existence
    {
        id: 64,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "इन्द्रियेभ्यः परा ह्यर्था अर्थेभ्यश्च परं मनः । मनसस्तु परा बुद्धिर्बुद्धेरात्मा महान्परः ॥ १० ॥",
        hindi: "इन्द्रियों से श्रेष्ठ उनके 'विषय' हैं; विषयों से श्रेष्ठ 'मन' है; मन से श्रेष्ठ 'बुद्धि' है; और बुद्धि से श्रेष्ठ 'महान आत्मा' (महत्तत्व) है।",
        english: "Beyond the senses are the objects; beyond the objects is the mind; beyond the mind is the intellect; beyond the intellect is the Great Self (Mahat).",
        simpleExplanation: "THE HIERARCHY: Senses < Objects < Mind < Intellect < Mahat (Cosmic Mind). Each level subtler than the last.",
        simpleExplanationHindi: "पदानुक्रम: इन्द्रियां < विषय < मन < बुद्धि < महत्। प्रत्येक स्तर पिछले से सूक्ष्म।",
        theme: "Hierarchy of Reality",
        nanoBananaPrompt: "A layered pyramid of consciousness—senses at bottom, rising to Mahat, ultimate reality at top."
    },

    // Verse 11 (Valli 3): The Ultimate Reality
    {
        id: 65,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "महतः परमव्यक्तमव्यक्तात्पुरुषः परः । पुरुषान्न परं किञ्चित्सा काष्ठा सा परा गतिः ॥ ११ ॥",
        hindi: "महत्तत्व से श्रेष्ठ 'अव्यक्त' (प्रकृति) है; और अव्यक्त से श्रेष्ठ 'पुरुष' (परम ब्रह्म) है। पुरुष से श्रेष्ठ कुछ भी नहीं है। वही पराकाष्ठा है, वही परम गति है।",
        english: "Beyond the Great Self is the Unmanifest (Avyakta); beyond the Unmanifest is the Purusha (Cosmic Spirit). Beyond the Purusha there is nothing; that is the End, that is the Supreme Goal.",
        simpleExplanation: "THE APEX: Mahat < Prakriti < PURUSHA. Beyond Purusha—NOTHING. That's the END, the ULTIMATE GOAL.",
        simpleExplanationHindi: "शिखर: महत् < प्रकृति < पुरुष। पुरुष से परे—कुछ नहीं। वही अंत है, परम लक्ष्य।",
        theme: "The Purusha",
        nanoBananaPrompt: "The ultimate point beyond all layers—Purusha as the final reality, nothing beyond."
    },

    // Verse 12 (Valli 3): The Hidden Self
    {
        id: 66,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "एष सर्वेषु भूतेषु गूढोऽत्मा न प्रकाशते । दृश्यते त्वग्र्यया बुद्ध्या सूक्ष्मया सूक्ष्मदर्शिभिः ॥ १२ ॥",
        hindi: "यह आत्मा सभी प्राणियों में छिपा हुआ है, इसलिए यह दिखाई नहीं देता। परन्तु सूक्ष्मदर्शी ज्ञानियों द्वारा अपनी एकाग्र और सूक्ष्म बुद्धि से इसे देखा जा सकता है।",
        english: "This Self, hidden in all beings, does not shine forth (visibly). But It is seen by subtle seers through their sharp and subtle intellect.",
        simpleExplanation: "The Self is HIDDEN in plain sight. Only those with SUBTLE vision can perceive it.",
        simpleExplanationHindi: "आत्मा सामने होते हुए भी छिपी है। केवल सूक्ष्म दृष्टि वाले ही इसे देख सकते हैं।",
        theme: "Hidden Self",
        nanoBananaPrompt: "A hidden light within all beings, visible only to those with special spiritual vision."
    },

    // Verse 13 (Valli 3): The Process of Yoga
    {
        id: 67,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "यच्छेद्वाङ्मनसी प्राज्ञस्तद्यच्छेज्ज्ञान आत्मनि । ज्ञानमात्मनि महति नियच्छेत्तद्यच्छेच्छान्त आत्मनि ॥ १३ ॥",
        hindi: "बुद्धिमान साधक को चाहिए कि वाणी (इन्द्रियों) का मन में निरोध करे; मन का बुद्धि में निरोध करे; बुद्धि का महत्तत्व में निरोध करे; और महत्तत्व को शांत-आत्मा में विलीन कर दे।",
        english: "The wise man should merge his speech (senses) into the mind; merge the mind into the Intellect; merge the Intellect into the Great Self; and merge the Great Self into the Peace-Self (Supreme Brahman).",
        simpleExplanation: "THE YOGA PROCESS: Senses → Mind → Intellect → Mahat → Supreme Peace. Systematic withdrawal to the Source.",
        simpleExplanationHindi: "योग प्रक्रिया: इन्द्रियां → मन → बुद्धि → महत् → परम शांति। स्रोत की ओर व्यवस्थित वापसी।",
        theme: "Yogic Withdrawal",
        nanoBananaPrompt: "Layers of consciousness folding inward like a flower closing, returning to the seed—the Source."
    },

    // Verse 14 (Valli 3): ARISE! AWAKE! - MOST FAMOUS VERSE
    {
        id: 68,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत । क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति ॥ १४ ॥",
        hindi: "उठो! जागो! और श्रेष्ठ गुरुओं के पास जाकर ज्ञान प्राप्त करो। ज्ञानी जन कहते हैं कि यह मार्ग उसी प्रकार कठिन है जैसे उस्तरे की तीखी धार पर चलना।",
        english: "Arise! Awake! Approach the great (teachers) and learn. Like the sharp edge of a razor is that path, so the wise say—hard to cross and difficult to tread.",
        simpleExplanation: "SWAMI VIVEKANANDA'S FAVORITE: Arise! Awake! Seek teachers! The path is sharp as a razor—but POSSIBLE.",
        simpleExplanationHindi: "स्वामी विवेकानंद का प्रिय: उठो! जागो! गुरुओं की खोज करो! मार्ग उस्तरे जैसा तीखा है—पर संभव है।",
        theme: "Arise! Awake!",
        nanoBananaPrompt: "A person awakening and walking on a razor's edge path towards light—difficult but possible."
    },

    // Verse 15 (Valli 3): Description of the Absolute
    {
        id: 69,
        valli: 3,
        adhyaya: 1,
        section: "The Chariot",
        sanskrit: "अशब्दमस्पर्शमरूपमव्ययं तथाऽरसं नित्यमगन्धवच्च यत् । अनाद्यनन्तं महतः परं ध्रुवं निचाय्य तन्मृत्युमुखात्प्रमुच्यते ॥ १५ ॥",
        hindi: "जो शब्द-रहित, स्पर्श-रहित, रूप-रहित, अविनाशी, तथा रस-रहित, गंध-रहित, नित्य, आदि-अंत से रहित, और महत्तत्व से भी श्रेष्ठ है—उसे जानकर मनुष्य मृत्यु से सदा के लिए मुक्त होता है।",
        english: "By realizing That which is soundless, touchless, formless, undecaying, tasteless, eternal, scentless; beginningless, endless, beyond the Great, and unchanging—one is freed from the jaws of death.",
        simpleExplanation: "THE ABSOLUTE: No sound, no touch, no form, no taste, no smell. Beyond time, beyond everything. Know THIS = Freedom from Death.",
        simpleExplanationHindi: "परम तत्व: न ध्वनि, न स्पर्श, न रूप, न स्वाद, न गंध। समय से परे, सब से परे। इसे जानो = मृत्यु से मुक्ति।",
        theme: "The Absolute",
        nanoBananaPrompt: "Pure existence beyond all senses—no form, no sound, just infinite unchanging presence."
    },

    // Verse 16 (Valli 3): The Fruit of Hearing
    {
        id: 70,
        valli: 3,
        adhyaya: 1,
        section: "Final Teaching",
        sanskrit: "नाचिकेतमुपाख्यानं मृत्युप्रोक्तं सनातनम् । उक्त्वा श्रुत्वा च मेधावी ब्रह्मलोके महीयते ॥ १६ ॥",
        hindi: "जो मेधावी मनुष्य मृत्यु द्वारा कहे गए इस सनातन 'नाचिकेता उपाख्यान' को कहता है या सुनता है, वह ब्रह्मलोक में महिमान्वित होता है।",
        english: "The wise man who recites or hears this ancient story of Nachiketa, told by Death, is glorified in the world of Brahman.",
        simpleExplanation: "FRUIT OF THIS TEACHING: Whoever shares or hears this Nachiketa story is glorified in Brahman's realm.",
        simpleExplanationHindi: "इस शिक्षा का फल: जो भी इस नचिकेता कथा को सुनाता या सुनता है, वह ब्रह्म लोक में महिमावान होता है।",
        theme: "Fruit of Learning",
        nanoBananaPrompt: "A person sharing the Nachiketa story, radiating light, honored in the realm of Brahman."
    },

    // Verse 17 (Valli 3): The Fruit of Recitation
    {
        id: 71,
        valli: 3,
        adhyaya: 1,
        section: "Final Teaching",
        sanskrit: "य इमं परमं गुह्यं श्रावयेद्ब्रह्मसंसदि । प्रयतः श्राद्धकाले वा तदानन्त्याय कल्पते तदानन्त्याय कल्पत इति ॥ १७ ॥",
        hindi: "जो कोई भी पवित्र होकर इस परम गोपनीय रहस्य को ब्राह्मणों की सभा में, या श्राद्ध के समय सुनाता है, वह अनंत फल देने वाला होता है। वह अनंत फल देने वाला होता है।",
        english: "Whoever, becoming pure, recites this supreme secret in an assembly of Brahmanas, or at the time of Shraddha, that ceremony secures for him infinite results. It secures infinite results.",
        simpleExplanation: "INFINITE MERIT: Reciting this at sacred gatherings yields INFINITE results. The verse repeats for emphasis!",
        simpleExplanationHindi: "अनंत पुण्य: पवित्र सभाओं में इसे पढ़ने से अनंत फल मिलता है। जोर देने के लिए पंक्ति दोहराई गई!",
        theme: "Infinite Results",
        nanoBananaPrompt: "Infinite ripples spreading from one recitation—endless merit multiplying forever."
    }
];

// Metadata for Katha Upanishad
export const KATHA_METADATA = {
    id: "katha",
    name: "Katha",
    nameSanskrit: "कठोपनिषद्",
    veda: "Krishna Yajurveda",
    shlokaCount: 119,
    adhyayaCount: 2,
    valliCount: 6,
    meaning: "The Dialogue with Death",
    theme: "Nachiketa's Journey to Immortality",
    characters: {
        nachiketa: "Young seeker representing Shraddha (faith)",
        vajashravas: "Father representing hollow ritualism",
        yama: "Lord of Death, the ultimate Guru"
    },
    structure: [
        { adhyaya: 1, valli: 1, title: "The Curse & Arrival", verseRange: "1-29" },
        { adhyaya: 1, valli: 2, title: "The Three Boons", verseRange: "1-25" },
        { adhyaya: 1, valli: 3, title: "The Chariot Metaphor", verseRange: "1-17" },
        { adhyaya: 2, valli: 1, title: "The Indestructible Self", verseRange: "1-15" },
        { adhyaya: 2, valli: 2, title: "The Path of Liberation", verseRange: "1-15" },
        { adhyaya: 2, valli: 3, title: "The Final Teaching", verseRange: "1-18" }
    ],
    visualTheme: {
        primary: "#1e1b4b",    // Indigo-950 (Death's realm)
        secondary: "#fbbf24",  // Amber-400 (Fire/Wisdom)
        accent: "#f97316",     // Orange-500 (Sacrifice)
        gradient: "from-indigo-950 via-purple-900 to-slate-900"
    }
};

// Helper: Get verses by Valli
export const getKathaByValli = (valli: number) => kathaData.filter(v => v.valli === valli);

// Helper: Get verses by Adhyaya
export const getKathaByAdhyaya = (adhyaya: number) => kathaData.filter(v => v.adhyaya === adhyaya);
