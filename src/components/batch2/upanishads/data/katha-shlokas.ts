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
