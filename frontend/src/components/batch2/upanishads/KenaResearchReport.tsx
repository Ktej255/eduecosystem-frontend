"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Scale, History, Globe, Brain, Zap, Sun, GitMerge, FileText, ArrowRight, Eye, HelpCircle } from "lucide-react";

interface ResearchSectionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ElementType;
}

const ResearchSection = ({ title, children, icon: Icon }: ResearchSectionProps) => (
    <div className="mb-12 relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500/50 to-transparent rounded-full" />
        <div className="flex items-center gap-3 mb-6">
            {Icon && <Icon className="w-6 h-6 text-teal-500" />}
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-teal-100 drop-shadow-md">{title}</h3>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-teal-50/90 font-light tracking-wide">
            {children}
        </div>
    </div>
);

const HighlightBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-slate-900/80 border border-teal-500/20 rounded-2xl p-6 md:p-8 my-8 relative overflow-hidden group hover:bg-slate-800 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap className="w-24 h-24 text-teal-500" />
        </div>
        <h4 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-teal-500/20 pb-2 inline-block">
            {title}
        </h4>
        <div className="relative z-10 space-y-4">
            {children}
        </div>
    </div>
);

const ComparisonTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-teal-500/20 shadow-2xl bg-slate-950">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-slate-900">
                    {headers.map((h, i) => (
                        <th key={i} className="p-4 text-teal-200 font-serif font-bold border-b border-teal-500/20 min-w-[150px] tracking-wide">
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-b border-teal-500/5 hover:bg-teal-500/5 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className="p-4 text-teal-50 border-r border-teal-500/5 last:border-r-0">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function KenaResearchReport({ lang }: { lang: "en" | "hi" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto space-y-16 pb-20"
        >
            {/* Header */}
            <div className="text-center space-y-6 border-b border-teal-500/10 pb-12">
                <span className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-500 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-teal-500/20 shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                    Comprehensive Research Report
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 via-teal-400 to-teal-600 drop-shadow-sm">
                    {lang === "en" ? "The Kena Upanishad" : "केनोपनिषद्"}
                </h2>
                <h3 className="text-xl md:text-2xl text-teal-200/60 font-serif italic max-w-3xl mx-auto">
                    {lang === "en"
                        ? "Epistemological Inquiry, The Psychology of Perception, and The Yaksha Allegory"
                        : "ज्ञानमीमांसीय जिज्ञासा, धारणा का मनोविज्ञान, और यक्ष कथा"}
                </h3>
            </div>

            {/* Introduction */}
            <ResearchSection title={lang === "en" ? "Introduction" : "परिचय"} icon={BookOpen}>
                <p>
                    {lang === "en"
                        ? "The Kena Upanishad derives its name from its opening word 'Kena' (By whom?), immediately establishing its central theme: inquiry into the source of consciousness. Belonging to the Talavakara Brahmana of the Sama Veda, it is distinct for its precise psychological analysis of how we know what we know, and its dramatic allegory of the Gods and the Yaksha."
                        : "केनोपनिषद् का यह नाम इसके प्रारंभिक शब्द 'केन' (किसके द्वारा?) से लिया गया है, जो तुरंत इसके केंद्रीय विषय को स्थापित करता है: चेतना के स्रोत की जांच। सामवेद के तलवकार ब्राह्मण से संबंधित, यह इस बात के सटीक मनोवैज्ञानिक विश्लेषण के लिए विशिष्ट है कि हम जो जानते हैं उसे कैसे जानते हैं, और देवताओं और यक्ष की नाटकीय कथा के लिए।"}
                </p>
                <HighlightBox title={lang === "en" ? "Key Question" : "मुख्य प्रश्न"}>
                    <p className="italic text-teal-200">
                        {lang === "en"
                            ? "\"Kena isitam presitam manah?\" — By whom willed and directed does the mind light on its objects? By whom commanded does life the first, move? At whose will do men utter this speech? What god prompts the eye and the ear?"
                            : "\"केन इषितं प्रेषितं मनः?\" — किसके द्वारा इच्छा और निर्देशित होकर मन अपने विषयों पर प्रकाश डालता है? किसके आदेश से प्राण प्रथम बार गति करता है? किसकी इच्छा से मनुष्य यह वाणी बोलते हैं? कौन सा देवता आंख और कान को प्रेरित करता है?"}
                    </p>
                </HighlightBox>
            </ResearchSection>

            {/* Historical Context */}
            <ResearchSection title={lang === "en" ? "Historical Context" : "ऐतिहासिक संदर्भ"} icon={History}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-900 p-6 rounded-xl border border-teal-500/20 shadow-lg">
                        <div className="flex items-center gap-3 mb-3 text-teal-500 text-sm font-bold uppercase tracking-widest">
                            <History className="w-4 h-4" />
                            {lang === "en" ? "Vedic Lineage" : "वैदिक वंश"}
                        </div>
                        <p className="text-sm text-teal-100/70">
                            {lang === "en"
                                ? "Part of the Sama Veda (Jaiminiya sakha). The Upanishad forms the 9th chapter of the Talavakara Brahmana, bridging ritual chant (Saman) with philosophical inquiry."
                                : "सामवेद (जैमिनीय शाखा) का भाग। उपनिषद् तलवकार ब्राह्मण का 9वां अध्याय बनाता है, जो अनुष्ठानिक मंत्र (सामन) को दार्शनिक जिज्ञासा के साथ जोड़ता है।"}
                        </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-teal-500/20 shadow-lg">
                        <div className="flex items-center gap-3 mb-3 text-teal-500 text-sm font-bold uppercase tracking-widest">
                            <Brain className="w-4 h-4" />
                            {lang === "en" ? "Structure" : "संरचना"}
                        </div>
                        <p className="text-sm text-teal-100/70">
                            {lang === "en"
                                ? "Divided into four Khandas (sections). The first two are philosophical verse (metaphysics), and the last two are prose narrative (mythology/allegory)."
                                : "चार खंडों में विभाजित। पहले दो दार्शनिक श्लोक (तत्वमीमांसा) हैं, और अंतिम दो गद्य कथा (पौराणिक कथा/रूपक) हैं।"}
                        </p>
                    </div>
                </div>
            </ResearchSection>

            {/* Philosophical Logic */}
            <ResearchSection title={lang === "en" ? "Philosophical Analysis" : "दार्शनिक विश्लेषण"} icon={Brain}>
                <p>
                    {lang === "en"
                        ? "Kena Upanishad presents the 'Paradox of Knowledge'. It asserts that Brahman cannot be known as an object of perception because It is the Subject of all perception. If you think you know It, you don't. If you know you cannot know It (objectively), then you know It."
                        : "केनोपनिषद् 'ज्ञान का विरोधाभास' प्रस्तुत करता है। यह दावा करता है कि ब्रह्म को धारणा की वस्तु के रूप में नहीं जाना जा सकता क्योंकि वह सभी धारणाओं का विषय है। यदि आप सोचते हैं कि आप इसे जानते हैं, तो आप नहीं जानते। यदि आप जानते हैं कि आप इसे (वस्तुनिष्ठ रूप से) नहीं जान सकते, तो आप इसे जानते हैं।"}
                </p>

                <h4 className="text-xl font-serif text-teal-200 mt-8 mb-4">
                    {lang === "en" ? "The Subject-Object Reversal" : "विषय-वस्तु उलटफेर"}
                </h4>
                <ComparisonTable
                    headers={lang === "en" ? ["Instrument", "Function", "Limitation", "The Source"] : ["उपकरण", "कार्य", "सीमा", "स्रोत"]}
                    rows={[
                        [
                            lang === "en" ? "Eye" : "आंख",
                            lang === "en" ? "Sees forms" : "रूप देखती है",
                            lang === "en" ? "Cannot see the Seer" : "द्रष्टा को नहीं देख सकती",
                            lang === "en" ? "Eye of the Eye" : "आंख की आंख"
                        ],
                        [
                            lang === "en" ? "Ear" : "कान",
                            lang === "en" ? "Hears sounds" : "ध्वनियां सुनता है",
                            lang === "en" ? "Cannot hear the Hearer" : "श्रोता को नहीं सुन सकता",
                            lang === "en" ? "Ear of the Ear" : "कान का कान"
                        ],
                        [
                            lang === "en" ? "Mind" : "मन",
                            lang === "en" ? "Thinks thoughts" : "विचार सोचता है",
                            lang === "en" ? "Cannot think the Thinker" : "विचारक को नहीं सोच सकता",
                            lang === "en" ? "Mind of the Mind" : "मन का मन"
                        ]
                    ]}
                />
            </ResearchSection>

            {/* The Yaksha Allegory */}
            <ResearchSection title={lang === "en" ? "The Yaksha Allegory" : "यक्ष कथा - रूपक"} icon={GitMerge}>
                <p>
                    {lang === "en"
                        ? "The unique contribution of Kena is the story of the Yaksha (Spirit). It humbles the Vedic gods (Agni, Vayu, Indra) by showing that their powers (burning, blowing, ruling) are borrowed from Brahman."
                        : "केना का अनूठा योगदान यक्ष (आत्मा) की कहानी है। यह वैदिक देवताओं (अग्नि, वायु, इंद्र) को यह दिखाकर विनम्र करता है कि उनकी शक्तियां (जलाना, उड़ाना, शासन करना) ब्रह्म से उधार ली गई हैं।"}
                </p>
                <div className="space-y-4 my-8">
                    {[
                        { god: "Agni (Fire)", test: "Could not burn a straw", meaning: "Energy has no power without Consciousness." },
                        { god: "Vayu (Wind)", test: "Could not move a straw", meaning: "Motion has no force without Will." },
                        { god: "Indra (Mind)", test: "Spirit disappeared", meaning: "Ego cannot objectify the Truth. Truth vanishes when Ego approaches." },
                        { god: "Uma (Wisdom)", test: "Reveals Brahman", meaning: "Only Intuitive Wisdom (not Ego) can reveal the Truth." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 border-l-2 border-teal-500 bg-teal-500/5 rounded-r-lg hover:bg-teal-500/10 transition-colors">
                            <div className="min-w-[120px] font-bold text-teal-200">{item.god}</div>
                            <div className="text-teal-100/70">
                                <span className="text-teal-400 font-bold text-xs uppercase tracking-wider mr-2">{lang === "en" ? "TEST" : "परीक्षा"}:</span>
                                {item.test}
                                <div className="mt-1 text-sm italic opacity-60">{item.meaning}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </ResearchSection>

            {/* Conclusion */}
            <ResearchSection title={lang === "en" ? "Conclusion" : "निष्कर्ष"} icon={Scale}>
                <p>
                    {lang === "en"
                        ? "The Kena Upanishad moves us from the pride of empirical knowledge to the humility of intuitive realization. It teaches that while we cannot know God as an object, we are casually aware of Him in every moment of perception."
                        : "केनोपनिषद् हमें अनुभवजन्य ज्ञान के अहंकार से सहज ज्ञान युक्त प्राप्ति की विनम्रता की ओर ले जाती है। यह सिखाती है कि यद्यपि हम ईश्वर को एक वस्तु के रूप में नहीं जान सकते, हम धारणा के हर क्षण में उनके प्रति जागरूक हैं।"}
                </p>
            </ResearchSection>

            {/* Citation Footer */}
            <div className="border-t border-teal-500/10 pt-8 text-xs text-teal-500/30 text-center font-mono">
                Epistemological Inquiry Research Report • Based on standard academic & traditional sources.
            </div>
        </motion.div>
    );
}
