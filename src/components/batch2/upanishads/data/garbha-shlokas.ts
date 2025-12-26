// Garbha Upanishad Data (#17 in Muktika Canon)
// Source: Krishna Yajur Veda | Category: Samanya (General/Medical)
// Theme: Embryology, Anatomy, Soul's Journey in Womb, Past-Life Memory
// Total: 6 Sections, 22 Mantras

export interface WordMeaning {
    sanskrit: string;
    devanagari: string;
    hindi: string;
    english: string;
}

export interface GarbhaDataEntry {
    id: number;
    section: number;
    mantra: string;
    theme: string;
    sanskrit: string;
    hindi: string;
    english: string;
    simpleExplanation: string;
    simpleExplanationHindi: string;
    nanoBananaPrompt: string;
    wordMeanings?: WordMeaning[];
}

export const GARBHA_SHLOKAS: GarbhaDataEntry[] = [
    // SHANTI MANTRA
    {
        id: 0, section: 0, mantra: "Shanti",
        theme: "Saha Navavatu",
        sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै । ॐ शान्तिः शान्तिः शान्तिः ॥",
        hindi: "ॐ! वह हम दोनों की रक्षा करे। हम दोनों का पालन करे। हम साथ मिलकर शक्ति प्राप्त करें। हमारा अध्ययन तेजस्वी हो। हम द्वेष न करें।",
        english: "OM! May He protect us both. May He nourish us. May we generate energy together. May our study be brilliant. May we not hate each other.",
        simpleExplanation: "GURU-STUDENT PRAYER: Protection, nourishment, energy, brilliance, harmony.",
        simpleExplanationHindi: "गुरु-शिष्य प्रार्थना: रक्षा, पोषण, शक्ति, तेज, सामंजस्य।",
        nanoBananaPrompt: "Guru and student meditating together in golden protective light."
    },

    // SECTION 1: COMPOSITION OF THE BODY
    {
        id: 1, section: 1, mantra: "1.1",
        theme: "Body Composition Formula",
        sanskrit: "ॐ पञ्चात्मकं पञ्चसु वर्तमानं षडाश्रयं षड्गुणयोगयुक्तम् । तत्सप्तधातु त्रिमलं द्वियोनि चतुर्विधाहारमयं शरीरम् ॥",
        hindi: "ॐ। यह शरीर पंचात्मक (पाँच तत्वों से बना) है; पाँच इन्द्रियों में विद्यमान; छह रस का आश्रय; छह गुणों से युक्त। यह सात धातुओं से बना, तीन मलों से युक्त, दो योनियों से उत्पन्न और चार प्रकार के आहार से पोषित है।",
        english: "OM. This body is composed of Five Elements; exists in five sense organs; depends on Six Tastes; has Six Qualities. It consists of Seven Tissues, Three Impurities, originates from Two Sources, and is sustained by Four kinds of Food.",
        simpleExplanation: "THE BODY FORMULA: 5 Elements + 5 Senses + 6 Tastes + 6 Qualities + 7 Tissues + 3 Wastes + 2 Seeds + 4 Foods!",
        simpleExplanationHindi: "शरीर सूत्र: 5 तत्व + 5 इन्द्रिय + 6 रस + 6 गुण + 7 धातु + 3 मल + 2 योनि + 4 आहार!",
        nanoBananaPrompt: "Human body as mathematical formula with 5 elements, 7 tissues, and cosmic proportions.",
        wordMeanings: [
            { sanskrit: "pañcātmaka", devanagari: "पञ्चात्मक", hindi: "पाँच तत्वों वाला", english: "five-elemented" },
            { sanskrit: "saptadhātu", devanagari: "सप्तधातु", hindi: "सात धातुएं", english: "seven tissues" },
            { sanskrit: "trimala", devanagari: "त्रिमल", hindi: "तीन मल", english: "three impurities" },
            { sanskrit: "dviyoni", devanagari: "द्वियोनि", hindi: "दो योनि", english: "two sources" }
        ]
    },
    {
        id: 2, section: 1, mantra: "1.2-1.3",
        theme: "Five Elements in Body",
        sanskrit: "पृथिव्यापस्तेजोवायुराकाशमिति । तत्र यत् कठिनं सा पृथिवी । यत् द्रवम् ता आपः । यत् उष्णम् तत् तेजः । यत् सञ्चरति स वायुः । यत् सुषिरम् तत् आकाशम् इत्युच्यते ।",
        hindi: "पृथ्वी, जल, तेज, वायु, आकाश। जो कठिन है वह पृथ्वी। जो द्रव है वह जल। जो उष्ण है वह तेज। जो संचरण करता है वह वायु। जो सुषिर (छिद्र) है उसे आकाश कहते हैं।",
        english: "Earth, Water, Fire, Air, Ether. That which is Hard is Earth. That which is Liquid is Water. That which is Hot is Fire. That which Moves is Air. That which is Hollow/Space is Ether.",
        simpleExplanation: "ELEMENTS IN YOU: Hard parts = Earth. Fluids = Water. Heat = Fire. Movement = Air. Spaces = Ether!",
        simpleExplanationHindi: "तुममें तत्व: कठोर = पृथ्वी। तरल = जल। गर्मी = अग्नि। गति = वायु। खाली जगह = आकाश!",
        nanoBananaPrompt: "Human body showing five elements: bones as earth, blood as water, heat as fire, breath as air, cavities as space.",
        wordMeanings: [
            { sanskrit: "kaṭhina", devanagari: "कठिन", hindi: "कठोर", english: "hard" },
            { sanskrit: "drava", devanagari: "द्रव", hindi: "तरल", english: "liquid" },
            { sanskrit: "suṣira", devanagari: "सुषिर", hindi: "छिद्र/खाली", english: "hollow/space" }
        ]
    },
    {
        id: 3, section: 1, mantra: "1.4",
        theme: "Functions of Elements",
        sanskrit: "तत्र पृथिवी धारणे । आपः पिण्डीकरणे । तेजः प्रकाशने । वायुः गमने । आकाशः अवकाशदाने ।",
        hindi: "पृथ्वी का कार्य धारण करना है। जल का कार्य पिंड बनाना (Cohesion) है। तेज का कार्य प्रकाशित करना है। वायु का कार्य गमन (Movement) है। आकाश का कार्य अवकाश (Space) देना है।",
        english: "Earth's function is Support. Water's is Consolidation. Fire's is Illumination. Air's is Movement. Ether's is Providing Space.",
        simpleExplanation: "ELEMENT JOBS: Earth=Support, Water=Bind, Fire=Illuminate, Air=Move, Space=Make Room!",
        simpleExplanationHindi: "तत्वों के काम: पृथ्वी=सहारा, जल=जोड़ना, अग्नि=रोशनी, वायु=गति, आकाश=जगह!",
        nanoBananaPrompt: "Five elements performing their cosmic functions in the human body.",
        wordMeanings: [
            { sanskrit: "dhāraṇa", devanagari: "धारण", hindi: "धारण करना", english: "support" },
            { sanskrit: "piṇḍīkaraṇa", devanagari: "पिण्डीकरण", hindi: "पिंड बनाना", english: "consolidation" }
        ]
    },
    {
        id: 4, section: 1, mantra: "1.5",
        theme: "Sense Organs & Elements",
        sanskrit: "पृथक् श्रोत्रे शब्दोपलब्धौ । त्वक् स्पर्शे । चक्षुषी रूपे । जिह्वा रसने । नासिका गन्धे । इत्युच्यते ।",
        hindi: "कान शब्द (आकाश) के लिए हैं। त्वचा स्पर्श (वायु) के लिए। आँखें रूप (अग्नि) के लिए। जीभ स्वाद (जल) के लिए। नाक गंध (पृथ्वी) के लिए।",
        english: "Ears are for Sound. Skin for Touch. Eyes for Form. Tongue for Taste. Nose for Smell.",
        simpleExplanation: "5 SENSES = 5 ELEMENTS: Ear-Space, Skin-Air, Eye-Fire, Tongue-Water, Nose-Earth!",
        simpleExplanationHindi: "5 इन्द्रियां = 5 तत्व: कान-आकाश, त्वचा-वायु, आँख-अग्नि, जीभ-जल, नाक-पृथ्वी!",
        nanoBananaPrompt: "Five sense organs connected to five cosmic elements.",
        wordMeanings: [
            { sanskrit: "śrotra", devanagari: "श्रोत्र", hindi: "कान", english: "ear" },
            { sanskrit: "cakṣuṣī", devanagari: "चक्षुषी", hindi: "आँखें", english: "eyes" }
        ]
    },

    // SECTION 2: EMBRYOLOGY
    {
        id: 5, section: 2, mantra: "2.1",
        theme: "Conception & First Month",
        sanskrit: "ऋतुकाले सम्प्रयोगादेकरात्रोषितं कललं भवति । सप्तरात्रोषितं बुद्बुदं भवति । अर्धमासाभ्यन्तरे पिण्डो भवति । मासाभ्यन्तरे कठिनो भवति ।",
        hindi: "ऋतुकाल में संयोग से: एक रात में 'कलल' (जैली) होता है। सात रात में 'बुदबुद' (बुलबुला) होता है। पंद्रह दिन में 'पिंड' बनता है। एक महीने में कठिन हो जाता है।",
        english: "Upon union at proper season: After 1 night = Nodule (Kalala). After 7 nights = Bubble (Budbuda). In 15 days = Lump (Pinda). In 1 month = Hardened.",
        simpleExplanation: "WEEK BY WEEK: Day 1=Jelly, Day 7=Bubble, Day 15=Lump, Day 30=Hard mass!",
        simpleExplanationHindi: "सप्ताह दर सप्ताह: दिन 1=जैली, दिन 7=बुलबुला, दिन 15=पिंड, दिन 30=कठोर!",
        nanoBananaPrompt: "Embryo development stages: jelly, bubble, lump, hardened mass in first month.",
        wordMeanings: [
            { sanskrit: "kalala", devanagari: "कलल", hindi: "जैली जैसा", english: "nodule/jelly" },
            { sanskrit: "budbuda", devanagari: "बुद्बुद", hindi: "बुलबुला", english: "bubble" }
        ]
    },
    {
        id: 6, section: 2, mantra: "2.2",
        theme: "Month-by-Month Formation",
        sanskrit: "मासद्वयेन शिरः सम्पद्यते । मासत्रयेण पादप्रदेशो भवति । अथ चतुर्थे मासे जठरकटिप्रदेशो भवति । पञ्चमे मासे पृष्ठवंशो भवति । षष्ठे मासे मुखनासिकाक्षिश्रोत्राणि भवन्ति ।",
        hindi: "2 महीने में सिर बनता है। 3 महीने में पैर बनते हैं। 4 महीने में पेट और कमर बनते हैं। 5 महीने में रीढ़ बनती है। 6 महीने में मुख, नाक, आँख, कान बनते हैं।",
        english: "Month 2=Head. Month 3=Feet. Month 4=Belly & Hips. Month 5=Spine. Month 6=Mouth, Nose, Eyes, Ears.",
        simpleExplanation: "FETUS TIMELINE: M2=Head, M3=Feet, M4=Belly, M5=Spine, M6=Face & Senses!",
        simpleExplanationHindi: "भ्रूण समयरेखा: म2=सिर, म3=पैर, म4=पेट, म5=रीढ़, म6=चेहरा और इन्द्रियां!",
        nanoBananaPrompt: "Month by month fetus development: head, feet, belly, spine, face forming.",
        wordMeanings: [
            { sanskrit: "śiraḥ", devanagari: "शिरः", hindi: "सिर", english: "head" },
            { sanskrit: "pṛṣṭhavaṃśa", devanagari: "पृष्ठवंश", hindi: "रीढ़ की हड्डी", english: "spine/backbone" }
        ]
    },
    {
        id: 7, section: 2, mantra: "2.3",
        theme: "Soul Enters",
        sanskrit: "सप्तमे मासे जीवेन संयुक्तो भवति । अष्टमे मासे सर्वसम्पूर्णो भवति ।",
        hindi: "सातवें महीने में वह जीव (आत्मा) से संयुक्त होता है। आठवें महीने में वह सर्व-संपूर्ण हो जाता है।",
        english: "In the 7th month, it becomes united with the Jiva (Soul). In the 8th month, it becomes complete in every way.",
        simpleExplanation: "MONTH 7: SOUL ENTERS! Month 8: Body complete! The body is now alive!",
        simpleExplanationHindi: "महीना 7: आत्मा प्रवेश! महीना 8: शरीर पूर्ण! शरीर अब जीवित है!",
        nanoBananaPrompt: "A luminous soul entering the fetus in the 7th month of pregnancy.",
        wordMeanings: [
            { sanskrit: "jīvena saṃyukta", devanagari: "जीवेन संयुक्त", hindi: "जीव से जुड़ा", english: "united with soul" },
            { sanskrit: "sarvasampūrṇa", devanagari: "सर्वसम्पूर्ण", hindi: "पूर्ण", english: "complete" }
        ]
    },
    {
        id: 8, section: 2, mantra: "2.4",
        theme: "Gender Determination",
        sanskrit: "पितू रेतोऽतिरेकात् पुरुषः । मातुः रेतोऽतिरेकात् स्त्रियो भवन्ति । उभयोर्बीजतुल्यत्वान्पुंसको भवति ।",
        hindi: "पिता के बीज की अधिकता से पुरुष (लड़का) होता है। माता के बीज की अधिकता से स्त्री (लड़की) होती है। दोनों के बीज समान होने पर नपुंसक होता है।",
        english: "Father's seed dominance = Male. Mother's seed dominance = Female. Equal seeds = Neuter.",
        simpleExplanation: "ANCIENT GENDER THEORY: Father's seed stronger = Boy. Mother's stronger = Girl. Equal = Neither!",
        simpleExplanationHindi: "प्राचीन लिंग सिद्धांत: पिता का बीज प्रबल = लड़का। माता का प्रबल = लड़की। समान = नपुंसक!",
        nanoBananaPrompt: "Two seeds combining—showing ancient theory of gender determination.",
        wordMeanings: [
            { sanskrit: "retas", devanagari: "रेतस्", hindi: "बीज", english: "seed" },
            { sanskrit: "atireka", devanagari: "अतिरेक", hindi: "अधिकता", english: "dominance" }
        ]
    },
    {
        id: 9, section: 2, mantra: "2.5",
        theme: "Twins & Disabilities",
        sanskrit: "व्याकुलितमनसो अन्धाः खञ्जाः कुब्जा वामना भवन्ति । अन्योन्यवायुपरिपीडितशुक्रद्वैध्यात् द्विधा तनुः स्यात् ततो युग्माः प्रजायन्ते ।",
        hindi: "माता-पिता का मन व्याकुल होने पर संतान अंधे, लंगड़े, कुबड़े या बौने होते हैं। वायु से शुक्र के दो भागों में बंटने पर जुड़वाँ पैदा होते हैं।",
        english: "If parents' minds are disturbed = child becomes blind, lame, hunchbacked, dwarf. If seed splits by Air = Twins are born.",
        simpleExplanation: "DISTURBED MIND = DISABILITIES. SPLIT SEED = TWINS! Ancient theory of birth conditions!",
        simpleExplanationHindi: "व्याकुल मन = विकलांगता। बीज विभाजन = जुड़वां! जन्म स्थितियों का प्राचीन सिद्धांत!",
        nanoBananaPrompt: "Seed splitting in two, creating twins—ancient embryology concept.",
        wordMeanings: [
            { sanskrit: "yugmāḥ", devanagari: "युग्माः", hindi: "जुड़वां", english: "twins" },
            { sanskrit: "vyākulita", devanagari: "व्याकुलित", hindi: "व्याकुल", english: "disturbed" }
        ]
    },

    // SECTION 3: CONSCIOUSNESS IN THE WOMB
    {
        id: 10, section: 3, mantra: "3.1",
        theme: "Ninth Month Remembrance",
        sanskrit: "अथ नवमे मासे सर्वलक्षणसम्पूर्णो भवति । पूर्वजातिं स्मरति । शुभाशुभं च कर्म विन्दति ।",
        hindi: "नवे महीने में वह सभी लक्षणों से पूर्ण हो जाता है। उसे पूर्व जन्म की याद आती है। उसे अपने शुभ और अशुभ कर्मों का ज्ञान हो जाता है।",
        english: "In the 9th month, he becomes complete. He remembers his Past Birth. He realizes his good and bad deeds.",
        simpleExplanation: "MONTH 9: FULL MEMORY! The baby remembers past lives and all karma in the womb!",
        simpleExplanationHindi: "महीना 9: पूर्ण स्मृति! शिशु को गर्भ में पिछले जन्म और सब कर्म याद आते हैं!",
        nanoBananaPrompt: "Fetus in 9th month with visions of past lives surrounding it.",
        wordMeanings: [
            { sanskrit: "pūrvajāti", devanagari: "पूर्वजाति", hindi: "पिछला जन्म", english: "past birth" },
            { sanskrit: "śubhāśubha karma", devanagari: "शुभाशुभ कर्म", hindi: "अच्छे-बुरे कर्म", english: "good and bad deeds" }
        ]
    },
    {
        id: 11, section: 3, mantra: "3.2",
        theme: "The Soul's Lament 1",
        sanskrit: "नानाजन्मसहस्रांणि भुक्तानि च मया पुरा । नानायोनिषु जातानि आहारा विविधा अशिताः । पीतानि विविधानि दुग्धानि ।",
        hindi: "(वह सोचता है): 'मैंने पहले हजारों जन्म भोगे हैं। मैं अनेक योनियों में पैदा हुआ। मैंने तरह-तरह के भोजन खाए और तरह-तरह के दूध पिए।'",
        english: "(He thinks): 'Thousands of births have I experienced. I have been born in various wombs. I have eaten various foods and drunk various kinds of milk.'",
        simpleExplanation: "PAST LIFE MEMORIES: 'I've had THOUSANDS of births! Many wombs! Many foods!'",
        simpleExplanationHindi: "पूर्व जन्म की यादें: 'मैंने हजारों जन्म लिए! कई योनियाँ! कई भोजन!'",
        nanoBananaPrompt: "Soul in womb remembering thousands of past lives in different forms.",
        wordMeanings: [
            { sanskrit: "nānājanma", devanagari: "नानाजन्म", hindi: "अनेक जन्म", english: "various births" },
            { sanskrit: "sahasrāṇi", devanagari: "सहस्राणि", hindi: "हजारों", english: "thousands" }
        ]
    },
    {
        id: 12, section: 3, mantra: "3.3",
        theme: "The Soul's Lament 2",
        sanskrit: "जातस्य एव मृतस्य च । जन्म चैव मृतस्य च । यत् मया परिजनस्य अर्थे कृतं कर्म शुभाशुभम् । एकाकी तेन दह्यामि गतास्ते फलभोगिनः ॥",
        hindi: "'मैं पैदा हुआ और मर गया; मरकर फिर पैदा हुआ। मैंने परिजनों के लिए जो कर्म किए, उनके कारण अब मैं अकेला जल रहा हूँ। वे तो फल भोगकर चले गए।'",
        english: "'Born and dead, born again. Whatever I did for my relatives—I am burning alone. They who enjoyed the fruits are gone.'",
        simpleExplanation: "KARMA IS PERSONAL: 'I did karma for family, but I BURN ALONE! They enjoyed and left!'",
        simpleExplanationHindi: "कर्म व्यक्तिगत है: 'मैंने परिवार के लिए कर्म किए, पर अकेला जलता हूँ! वे भोगकर चले गए!'",
        nanoBananaPrompt: "A soul burning alone with karma while family members have moved on.",
        wordMeanings: [
            { sanskrit: "ekākī dahyāmi", devanagari: "एकाकी दह्यामि", hindi: "अकेला जलता हूँ", english: "I burn alone" },
            { sanskrit: "parijana", devanagari: "परिजन", hindi: "परिवार", english: "relatives" }
        ]
    },
    {
        id: 13, section: 3, mantra: "3.4",
        theme: "Vow to Maheshwara",
        sanskrit: "अहो दुःखोदधौ मग्नो न पश्यामि प्रतिक्रियाम् । यदि योन्याः प्रमुच्येऽहं तत् प्रपद्ये महेश्वरम् ।",
        hindi: "'अहो! मैं दुख के सागर में डूबा हूँ और उपाय नहीं सूझता। यदि मैं इस गर्भ से मुक्त हुआ, तो महेश्वर (शिव) की शरण लूँगा।'",
        english: "'Alas! I am drowning in an ocean of sorrow and see no remedy. If I am released from this womb, I will take refuge in Maheshwara (Shiva).'",
        simpleExplanation: "THE VOW TO SHIVA: 'I'm drowning in sorrow! If I get out, I'll surrender to Shiva!'",
        simpleExplanationHindi: "शिव से प्रतिज्ञा: 'मैं दुख में डूब रहा! अगर निकला, तो शिव की शरण लूँगा!'",
        nanoBananaPrompt: "Fetus in ocean of sorrow, making a vow to Lord Shiva for liberation.",
        wordMeanings: [
            { sanskrit: "duḥkhodadhi", devanagari: "दुःखोदधि", hindi: "दुख का सागर", english: "ocean of sorrow" },
            { sanskrit: "prapadye", devanagari: "प्रपद्ये", hindi: "शरण लूँगा", english: "I will take refuge" }
        ]
    },
    {
        id: 14, section: 3, mantra: "3.5",
        theme: "Vow to Narayana",
        sanskrit: "यदि योन्याः प्रमुच्येऽहं तत् प्रपद्ये नारायणम् । अशुभक्षयकर्तारं फलमुक्तिप्रदायकम् ।",
        hindi: "'यदि मैं इस गर्भ से मुक्त हुआ, तो नारायण (विष्णु) की शरण लूँगा, जो अशुभ का नाश करते और मुक्ति देते हैं।'",
        english: "'If I am released from this womb, I will take refuge in Narayana, the destroyer of evil and the giver of Liberation.'",
        simpleExplanation: "THE VOW TO VISHNU: 'If I escape, I'll surrender to Narayana—He destroys evil and gives freedom!'",
        simpleExplanationHindi: "विष्णु से प्रतिज्ञा: 'अगर निकला, तो नारायण की शरण—वे बुराई नष्ट करते और मुक्ति देते हैं!'",
        nanoBananaPrompt: "Fetus making a vow to Lord Narayana for freedom and liberation.",
        wordMeanings: [
            { sanskrit: "aśubhakṣaya", devanagari: "अशुभक्षय", hindi: "अशुभ नाश", english: "destroyer of evil" },
            { sanskrit: "muktipradāyaka", devanagari: "मुक्तिप्रदायक", hindi: "मुक्ति देने वाला", english: "giver of liberation" }
        ]
    },
    {
        id: 15, section: 3, mantra: "3.6",
        theme: "Vow of Yoga",
        sanskrit: "यदि योन्याः प्रमुच्येऽहं तत् सांख्ययोगमभ्यसे । ब्रह्मणा वाऽथवा देवैः मुच्येऽहं गर्भसंकटात् ॥",
        hindi: "'यदि मैं इस गर्भ से मुक्त हुआ, तो सांख्य-योग का अभ्यास करूँगा। ब्रह्म या देवताओं द्वारा इस संकट से मुक्त हो जाऊँ!'",
        english: "'If I am released from this womb, I will practice Samkhya-Yoga. May I be released from this ordeal by Brahman or the Gods!'",
        simpleExplanation: "THE YOGA VOW: 'If I get out, I'll practice Yoga! May Brahman or Gods free me from this suffering!'",
        simpleExplanationHindi: "योग प्रतिज्ञा: 'अगर निकला, तो योग करूँगा! ब्रह्म या देवता इस कष्ट से मुक्त करें!'",
        nanoBananaPrompt: "Soul in womb vowing to practice Samkhya-Yoga after birth.",
        wordMeanings: [
            { sanskrit: "sāṅkhyayoga", devanagari: "सांख्ययोग", hindi: "सांख्य-योग", english: "Samkhya-Yoga" },
            { sanskrit: "garbhasaṅkaṭa", devanagari: "गर्भसंकट", hindi: "गर्भ का संकट", english: "ordeal of womb" }
        ]
    },

    // SECTION 4: BIRTH AND FORGETFULNESS
    {
        id: 16, section: 4, mantra: "4.1",
        theme: "The Birth Passage",
        sanskrit: "अथ योनिद्वारं सम्प्राप्तो यन्त्रेणेव प्रपीड्यमानः । महता दुःखेन जातो भवति ।",
        hindi: "फिर वह योनि-द्वार पर पहुँचता है, जहाँ उसे यंत्र की तरह दबाया जाता है। और वह महान कष्ट के साथ पैदा होता है।",
        english: "Then, reaching the door of the womb, being squeezed as if by a machine, he is born with great pain.",
        simpleExplanation: "BIRTH = CRUSHING: The baby is squeezed like through a machine—born with great pain!",
        simpleExplanationHindi: "जन्म = दबाव: शिशु यंत्र की तरह निचोड़ा जाता है—महान कष्ट से पैदा!",
        nanoBananaPrompt: "Baby being squeezed through birth canal like through a machine.",
        wordMeanings: [
            { sanskrit: "yantra", devanagari: "यन्त्र", hindi: "यंत्र/मशीन", english: "machine/press" },
            { sanskrit: "prapīḍyamāna", devanagari: "प्रपीड्यमान", hindi: "दबाया जाता", english: "being squeezed" }
        ]
    },
    {
        id: 17, section: 4, mantra: "4.2",
        theme: "Vaishnava Vayu - Forgetfulness",
        sanskrit: "ततः वैष्णवेन वायुना संस्पृष्टः तदा न स्मरति जन्ममरणम् । न च कर्म शुभाशुभम् ।",
        hindi: "तब वैष्णव वायु (माया की हवा) के स्पर्श से, वह जन्म-मरण को याद नहीं रखता। और न ही शुभ-अशुभ कर्म याद रहते हैं (सब भूल जाता है)।",
        english: "Then, touched by the Vaishnava Vayu (Breeze of Maya), he no longer remembers births, deaths, nor his good and bad deeds.",
        simpleExplanation: "MAYA WIND ERASES MEMORY! One touch of this wind and all vows, all past lives = FORGOTTEN!",
        simpleExplanationHindi: "माया वायु स्मृति मिटाती है! इस वायु के स्पर्श से सब प्रतिज्ञाएं, पूर्व जन्म = भूल गए!",
        nanoBananaPrompt: "Newborn touched by the wind of Maya, all past-life memories disappearing.",
        wordMeanings: [
            { sanskrit: "vaiṣṇava vāyu", devanagari: "वैष्णव वायु", hindi: "माया की वायु", english: "wind of Maya" },
            { sanskrit: "na smarati", devanagari: "न स्मरति", hindi: "याद नहीं करता", english: "does not remember" }
        ]
    },

    // SECTION 5: ANATOMY
    {
        id: 18, section: 5, mantra: "5.1",
        theme: "Three Fires in Body",
        sanskrit: "शरीरमिति कस्मात् । साक्षादग्नयो ह्यत्र श्रियन्ते । ज्ञानग्निः दर्शनाग्निः कोष्ठाग्निः इति ।",
        hindi: "इसे 'शरीर' क्यों कहते हैं? क्योंकि इसमें अग्नियाँ आश्रय लेती हैं—ज्ञानाग्नि, दर्शनाग्नि और कोष्ठाग्नि (जठराग्नि)।",
        english: "Why is it called 'Sharira'? Because fires reside in it—the Fire of Knowledge, the Fire of Sight, and the Fire of Digestion.",
        simpleExplanation: "THREE FIRES IN YOU: Knowledge-Fire (brain), Sight-Fire (eyes), Digestion-Fire (belly)!",
        simpleExplanationHindi: "तुममें तीन अग्नियां: ज्ञान-अग्नि (मस्तिष्क), दर्शन-अग्नि (आँखें), जठर-अग्नि (पेट)!",
        nanoBananaPrompt: "Three fires in human body: brain, eyes, and digestive fire.",
        wordMeanings: [
            { sanskrit: "jñānāgni", devanagari: "ज्ञानाग्नि", hindi: "ज्ञान की अग्नि", english: "fire of knowledge" },
            { sanskrit: "koṣṭhāgni", devanagari: "कोष्ठाग्नि", hindi: "जठराग्नि", english: "digestive fire" }
        ]
    },
    {
        id: 19, section: 5, mantra: "5.2",
        theme: "Body Count",
        sanskrit: "अथ शरीरे— १८० सन्धयः । १०९ स्नायुशतानि । ७०० सिराः । ५०० मज्जाः । ३६० अस्थीनि । ४१/२ कोटि रोमानि ।",
        hindi: "शरीर में: 180 संधियां (Joints)। 109 स्नायु। 700 शिराएं। 500 मज्जा। 360 हड्डियां। साढ़े चार करोड़ रोम।",
        english: "In the body: 180 Joints. 109 Ligaments. 700 Veins. 500 Marrows. 360 Bones. 45 Million Hairs.",
        simpleExplanation: "BODY CENSUS: 180 joints, 109 ligaments, 700 veins, 360 bones, 45 MILLION hairs!",
        simpleExplanationHindi: "शरीर गणना: 180 जोड़, 109 स्नायु, 700 नसें, 360 हड्डियां, साढ़े 4 करोड़ बाल!",
        nanoBananaPrompt: "Anatomical diagram with ancient counts: 180 joints, 360 bones, 700 veins.",
        wordMeanings: [
            { sanskrit: "sandhi", devanagari: "सन्धि", hindi: "जोड़", english: "joint" },
            { sanskrit: "asthi", devanagari: "अस्थि", hindi: "हड्डी", english: "bone" }
        ]
    },

    // SECTION 6: CONCLUSION
    {
        id: 20, section: 6, mantra: "6.1",
        theme: "Never Return to Womb",
        sanskrit: "सर्वं पैप्पलादं मोक्षशास्त्रं परिसमाप्तम् । पैप्पलादं मोक्षशास्त्रं योऽधीते स गर्भवासं न पुनरेति । स गर्भवासं न पुनरेतीति । ॐ सत्यं ओम् ॥",
        hindi: "यहाँ पिप्पलाद मुनि का मोक्ष-शास्त्र समाप्त होता है। जो इसका अध्ययन करता है, वह पुनः गर्भ में नहीं आता। वह पुनः गर्भ में नहीं आता। ॐ सत्य है।",
        english: "Here ends Sage Pippalada's Moksha-Shastra. He who studies this does not enter the womb again. He does not enter the womb again. OM is Truth.",
        simpleExplanation: "THE PROMISE: Study this text = NO MORE REBIRTHS! Never enter a womb again! OM is Truth!",
        simpleExplanationHindi: "वादा: इस ग्रंथ का अध्ययन करो = कोई पुनर्जन्म नहीं! फिर कभी गर्भ में नहीं! ॐ सत्य है!",
        nanoBananaPrompt: "A liberated soul ascending, never to return to the cycle of birth and womb.",
        wordMeanings: [
            { sanskrit: "garbhavāsa", devanagari: "गर्भवास", hindi: "गर्भ में निवास", english: "dwelling in womb" },
            { sanskrit: "na punar eti", devanagari: "न पुनरेति", hindi: "फिर नहीं आता", english: "does not return again" }
        ]
    }
];

// Metadata
export const GARBHA_METADATA = {
    id: "garbha",
    name: "Garbha",
    nameSanskrit: "गर्भोपनिषद्",
    veda: "Krishna Yajur Veda",
    category: "Samanya",
    shlokaCount: 21,
    sequenceNumber: 17,
    sageSource: "Pippalada",
    sections: {
        1: { name: "Body Composition", mantras: "1.1-1.5", theme: "5 Elements, 7 Tissues, 3 Wastes" },
        2: { name: "Embryology", mantras: "2.1-2.5", theme: "Month-by-month fetus development" },
        3: { name: "Womb Consciousness", mantras: "3.1-3.6", theme: "Past-life memory, vows to God" },
        4: { name: "Birth & Forgetfulness", mantras: "4.1-4.2", theme: "Vaishnava Vayu erases memory" },
        5: { name: "Anatomy", mantras: "5.1-5.2", theme: "360 bones, 700 veins, 3 fires" },
        6: { name: "Conclusion", mantras: "6.1", theme: "Study = No more rebirth" }
    },
    keyTeachings: [
        "Body = 5 Elements + 7 Tissues + 3 Wastes + 2 Seeds + 4 Foods",
        "Month 7: Soul enters the fetus",
        "Month 9: Past-life memories return in womb",
        "Fetus makes vows to Shiva, Vishnu, Yoga—all forgotten at birth",
        "Vaishnava Vayu (Maya Wind) erases all memory at birth",
        "Study this text = Liberation from rebirth cycle"
    ],
    famousVerses: {
        bodyFormula: { id: 1, section: 1, mantra: "1.1" },
        soulEnters: { id: 7, section: 2, mantra: "2.3" },
        pastLifeMemory: { id: 10, section: 3, mantra: "3.1" },
        vocToShiva: { id: 13, section: 3, mantra: "3.4" },
        forgetfulness: { id: 17, section: 4, mantra: "4.2" },
        noMoreRebirth: { id: 20, section: 6, mantra: "6.1" }
    }
};

export const getGarbhaMantra = (section: number, mantra: string): GarbhaDataEntry | undefined => {
    return GARBHA_SHLOKAS.find(s => s.section === section && s.mantra === mantra);
};
