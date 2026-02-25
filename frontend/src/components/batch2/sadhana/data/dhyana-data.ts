export interface DhyanaShloka {
    shloka: {
        sanskrit: string;
        hindi: string;
        english: string;
    };
    mantra: string;
    themeColor: {
        bg: string;
        accent: string;
        button: string;
    };
}

export const DHYANA_DATA: Record<string, DhyanaShloka> = {
    ganesha: {
        shloka: {
            sanskrit: "गजाननं भूतगणादिसेवितं,\nकपित्थजम्बूफलचारुभक्षणम् ।\nउमासुतं शोकविनाशकारकं,\nनमामि विघ्नेश्वरपादपङ्कजम् ॥",
            hindi: "हाथी के समान मुख वाले, भूत-गणों से सेवित, कैथ और जामुन के फलों को चाव से खाने वाले, पार्वती के पुत्र और दुखों का विनाश करने वाले, विघ्नेश्वर के चरण कमलों में मैं नमस्कार करता हूँ।",
            english: "I bow to the lotus feet of Ganesha, the son of Uma, the destroyer of sorrow, served by the host of spirits, who eats the delicious Kapittha and Jambu fruits.",
        },
        mantra: "ॐ गं गणपतये नमः",
        themeColor: {
            bg: "bg-amber-950",
            accent: "bg-amber-500/10",
            button: "bg-amber-600 hover:bg-amber-500",
        }
    },
    guru: {
        shloka: {
            sanskrit: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।\nगुरुः साक्षात् परंब्रह्म तस्मै श्रीगुरवे नमः ॥",
            hindi: "गुरु ब्रह्मा हैं, गुरु विष्णु हैं, गुरु ही महेश्वर शिव हैं। गुरु ही साक्षात् परब्रह्म हैं, उन श्री गुरु को नमस्कार है।",
            english: "The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshwara. The Guru is the absolute Supreme Reality. Salutations to that Guru.",
        },
        mantra: "ॐ गुरुभ्यो नमः",
        themeColor: {
            bg: "bg-slate-900",
            accent: "bg-slate-500/10",
            button: "bg-slate-700 hover:bg-slate-600",
        }
    },
    gayatri: {
        shloka: {
            sanskrit: "ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥",
            hindi: "हम उस दिव्य सवितृ (सूर्य) देव के वरेण्य (वरिष्ठ) तेज का ध्यान करते हैं, जो हमारी बुद्धियों को प्रेरित करे।",
            english: "We meditate on the adorable glory of the radiant sun; may he inspire our intelligence.",
        },
        mantra: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
        themeColor: {
            bg: "bg-orange-950",
            accent: "bg-orange-500/10",
            button: "bg-orange-600 hover:bg-orange-500",
        }
    },
    "sri-suktam": {
        shloka: {
            sanskrit: "ॐ हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम् ।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥",
            hindi: "हे जातवेदा (अग्निदेव)! आप मेरे लिए उस हिरण्यवर्णा (स्वर्ण के समान रंग वाली), हरिणी (पापों को हरने वाली), सुवर्ण और रजत की माला धारण करने वाली, चन्द्र के समान प्रकाशमान और हिरण्मयी लक्ष्मी को बुलाएं।",
            english: "Invoke for me, O Agni, that Lakshmi, who is golden-hued, radiant like gold and silver, shining like the moon, and the source of all wealth.",
        },
        mantra: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः",
        themeColor: {
            bg: "bg-rose-950",
            accent: "bg-rose-500/10",
            button: "bg-rose-600 hover:bg-rose-500",
        }
    }
};
