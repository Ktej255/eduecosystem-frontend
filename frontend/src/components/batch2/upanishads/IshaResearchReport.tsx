"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Scale, History, Globe, Brain, Zap, Sun, GitMerge, FileText, ArrowRight } from "lucide-react";

interface ResearchSectionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ElementType;
}

const ResearchSection = ({ title, children, icon: Icon }: ResearchSectionProps) => {
    const IconComp = Icon as any;
    return (
        <div className="mb-12 relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500/50 to-transparent rounded-full" />
            <div className="flex items-center gap-3 mb-6">
                {IconComp && <IconComp className="w-6 h-6 text-amber-500" />}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 drop-shadow-md">{title}</h3>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-amber-50/90 font-light tracking-wide">
                {children}
            </div>
        </div>
    );
};

const HighlightBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-slate-900/80 border border-amber-500/20 rounded-2xl p-6 md:p-8 my-8 relative overflow-hidden group hover:bg-slate-800 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap className="w-24 h-24 text-amber-500" />
        </div>
        <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-amber-500/20 pb-2 inline-block">
            {title}
        </h4>
        <div className="relative z-10 space-y-4">
            {children}
        </div>
    </div>
);

const ComparisonTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-amber-500/20 shadow-2xl bg-slate-950">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-slate-900">
                    {headers.map((h, i) => (
                        <th key={i} className="p-4 text-amber-200 font-serif font-bold border-b border-amber-500/20 min-w-[150px] tracking-wide">
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-b border-amber-500/5 hover:bg-amber-500/5 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className="p-4 text-amber-50 border-r border-amber-500/5 last:border-r-0">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function IshaResearchReport({ lang }: { lang: "en" | "hi" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto space-y-16 pb-20"
        >
            {/* Header */}
            <div className="text-center space-y-6 border-b border-amber-500/10 pb-12">
                <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    Comprehensive Research Report
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-600 drop-shadow-sm">
                    {lang === "en" ? "The Isha Upanishad" : "ईशोपनिषद्"}
                </h2>
                <h3 className="text-xl md:text-2xl text-amber-200/60 font-serif italic max-w-3xl mx-auto">
                    {lang === "en"
                        ? "Historical Genesis, Socio-Economic Catalysts, and Philosophical Logic"
                        : "ऐतिहासिक उत्पत्ति, सामाजिक-आर्थिक उत्प्रेरक और दार्शनिक तर्क"}
                </h3>
            </div>

            {/* Introduction */}
            <ResearchSection title={lang === "en" ? "Introduction" : "परिचय"} icon={BookOpen}>
                <p>
                    {lang === "en"
                        ? "The Isha Upanishad, frequently referred to as the Ishavasya Upanishad or the Vajasaneyi Samhita Upanishad, represents one of the most significant and profound philosophical milestones in the history of human thought. Embedded as the fortieth and final chapter of the Shukla Yajurveda, it serves as the ultimate distillation of the Vedic spirit, transitioning the religious consciousness of ancient India from the externalized complexity of ritual sacrifice toward the internalized clarity of metaphysical realization."
                        : "ईशोपनिषद्, जिसे अक्सर ईशावास्योपनिषद् या वाजसनेयी संहिता उपनिषद् कहा जाता है, मानव विचार के इतिहास में सबसे महत्वपूर्ण और गहन दार्शनिक मील के पत्थरों में से एक है। शुक्ल यजुर्वेद के चालीसवें और अंतिम अध्याय के रूप में सन्निहित, यह वैदिक भावना के अंतिम आसवन के रूप में कार्य करता है, जो प्राचीन भारत की धार्मिक चेतना को अनुष्ठानिक यज्ञ की बाहरी जटिलता से आध्यात्मिक प्राप्ति की आंतरिक स्पष्टता की ओर स्थानांतरित करता है।"}
                </p>
                <HighlightBox title={lang === "en" ? "Key Significance" : "मुख्य महत्व"}>
                    <p className="italic text-amber-200">
                        {lang === "en"
                            ? "Comprising only eighteen verses in its most commonly studied recension, the brevity of the text belies its immense complexity, as it attempts to reconcile the seemingly irreconcilable polarities of life: action and renunciation, multiplicity and unity, and the immanent and the transcendent."
                            : "अपने सबसे सामान्य रूप से अध्ययन किए गए संस्करण में केवल अठारह श्लोक हैं, पर पाठ की संक्षिप्तता इसकी अत्यधिक जटिलता को छुपाती है, क्योंकि यह जीवन की प्रतीत होने वाली असंगत ध्रुवीयताओं को समेटने का प्रयास करता है: क्रिया और त्याग, बहुलता और एकता, और व्याप्त और अतीत।"}
                    </p>
                </HighlightBox>
            </ResearchSection>

            {/* Historical Genesis */}
            <ResearchSection title={lang === "en" ? "Historical Genesis" : "ऐतिहासिक उत्पत्ति"} icon={History}>
                <p>
                    {lang === "en"
                        ? "The historical emergence of the Isha Upanishad is inextricably linked to the evolution of the Yajurveda, specifically the 'White' or Shukla recension. Unlike many other primary Upanishads that are located within the Brahmanas (ritual commentaries) or Aranyakas (forest books), the Isha Upanishad is a Samhita Upanishad, meaning it is situated directly within the primary layer of the Vedic mantras."
                        : "ईशोपनिषद् का ऐतिहासिक उद्भव यजुर्वेद के विकास, विशेष रूप से 'श्वेत' या शुक्ल संस्करण से अटूट रूप से जुड़ा हुआ है। ब्राह्मणों (कर्मकांड भाष्य) या आरण्यकों (वन ग्रंथ) के भीतर स्थित कई अन्य प्राथमिक उपनिषदों के विपरीत, ईशोपनिषद् एक संहिता उपनिषद् है, जिसका अर्थ है कि यह सीधे वैदिक मंत्रों की प्राथमिक परत के भीतर स्थित है।"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-900 p-6 rounded-xl border border-amber-500/20 shadow-lg">
                        <div className="flex items-center gap-3 mb-3 text-amber-500 text-sm font-bold uppercase tracking-widest">
                            <Sun className="w-4 h-4" />
                            {lang === "en" ? "Revelation" : "रहस्योद्घाटन"}
                        </div>
                        <p className="text-sm text-amber-100/70">
                            {lang === "en"
                                ? "Revealed to sage Yajnavalkya by Aditya (Solar Deity) after breaking from Vaishampayana. Known as 'Shukla' (White) for its clear arrangement."
                                : "वैशम्पायन से अलग होने के बाद आदित्य (सौर देवता) द्वारा ऋषि याज्ञवल्क्य को प्रकट किया गया। अपनी स्पष्ट व्यवस्था के लिए 'शुक्ल' (श्वेत) के रूप में जाना जाता है।"}
                        </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-amber-500/20 shadow-lg">
                        <div className="flex items-center gap-3 mb-3 text-amber-500 text-sm font-bold uppercase tracking-widest">
                            <History className="w-4 h-4" />
                            {lang === "en" ? "Chronology" : "कालक्रम"}
                        </div>
                        <p className="text-sm text-amber-100/70">
                            {lang === "en"
                                ? "Likely composed between 1200 BCE and 800 BCE, coinciding with the Iron Age transition. Pre-Buddhist per metrical structure analysis."
                                : "संभवतः 1200 ईसा पूर्व और 800 ईसा पूर्व के बीच रचित, लौह युग के संक्रमण के साथ मेल खाता है। मीटर संरचना विश्लेषण के अनुसार बौद्ध पूर्व।"}
                        </p>
                    </div>
                </div>

                <h4 className="text-xl font-serif text-amber-200 mt-8 mb-4">
                    {lang === "en" ? "The Two Recensions" : "दो संस्करण"}
                </h4>
                <ComparisonTable
                    headers={lang === "en" ? ["Feature", "Kanva (VSK)", "Madhyandina (VSM)"] : ["विशेषता", "काण्व (VSK)", "माध्यन्दिन (VSM)"]}
                    rows={[
                        [
                            lang === "en" ? "Verse Count" : "श्लोक संख्या",
                            "18 Mantras",
                            "17 Mantras"
                        ],
                        [
                            lang === "en" ? "Region" : "क्षेत्र",
                            lang === "en" ? "Maharashtra, South" : "महाराष्ट्र, दक्षिण",
                            lang === "en" ? "North India" : "उत्तर भारत"
                        ],
                        [
                            lang === "en" ? "Focus" : "फोकस",
                            lang === "en" ? "Adi Shankara Focus" : "आदि शंकराचार्य द्वारा अनुसरित",
                            lang === "en" ? "Ends with 'Om Kham Brahma'" : "'ओम खम ब्रह्म' के साथ समाप्त"
                        ]
                    ]}
                />
            </ResearchSection>

            {/* Socio-Economic Context */}
            <ResearchSection title={lang === "en" ? "Socio-Economic Requirement" : "सामाजिक-आर्थिक आवश्यकता"} icon={Globe}>
                <p>
                    {lang === "en"
                        ? "The specific historical moment of the Isha Upanishad drove its logical necessity. The transition from semi-nomadic life to settled agrarian societies in the Gangetic plains created a crisis of ritualism."
                        : "ईशोपनिषद् के विशिष्ट ऐतिहासिक क्षण ने इसकी तार्किक आवश्यकता को प्रेरित किया। गंगा के मैदानों में अर्ध-खानाबदोश जीवन से बसे हुए कृषि समाजों में संक्रमण ने कर्मकांड का संकट पैदा कर दिया।"}
                </p>

                <div className="my-8 space-y-4">
                    <div className="flex gap-4 p-4 border-l-2 border-amber-500 bg-amber-500/5 rounded-r-lg">
                        <div className="min-w-[40px] text-2xl">🔥</div>
                        <div>
                            <h4 className="font-bold text-amber-200">{lang === "en" ? "Crisis of Ritualism" : "कर्मकांड का संकट"}</h4>
                            <p className="text-sm text-amber-100/70 mt-1">
                                {lang === "en"
                                    ? "Rituals (Yajna) became mechanical, expensive, and exclusive. The intelligentsia sought meaning beyond mere transactional sacrifices for material gain."
                                    : "यज्ञ यांत्रिक, महंगे और विशिष्ट हो गए। बुद्धिजीवियों ने भौतिक लाभ के लिए केवल लेनदेन संबंधी बलिदानों से परे अर्थ खोजा।"}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border-l-2 border-amber-500 bg-amber-500/5 rounded-r-lg">
                        <div className="min-w-[40px] text-2xl">🏙️</div>
                        <div>
                            <h4 className="font-bold text-amber-200">{lang === "en" ? "Urbanization & Property" : "शहरीकरण और संपत्ति"}</h4>
                            <p className="text-sm text-amber-100/70 mt-1">
                                {lang === "en"
                                    ? "With the Second Urbanization and surplus economy, a new tension arose: How to be spiritual amidst wealth? The Isha provided the logic of Stewardship."
                                    : "द्वितीय शहरीकरण और अधिशेष अर्थव्यवस्था के साथ, एक नया तनाव उत्पन्न हुआ: धन के बीच आध्यात्मिक कैसे बनें? ईशा ने 'ट्रस्टीशिप' (देखभाल) का तर्क प्रदान किया।"}
                            </p>
                        </div>
                    </div>
                </div>
            </ResearchSection>

            {/* Philosophical Logic */}
            <ResearchSection title={lang === "en" ? "Philosophical Logic" : "दार्शनिक तर्क"} icon={Brain}>
                <p>
                    {lang === "en"
                        ? "The logic of the Isha Upanishad is centered on the principle of 'Uncompromising Reconciliation.' It rejects the violent binary of choosing between the world and God."
                        : "ईशोपनिषद् का तर्क 'समझौतारहित मेल-मिलाप' के सिद्धांत पर केंद्रित है। यह दुनिया और ईश्वर के बीच चयन करने के हिंसक द्वंद्व को खारिज करता है।"}
                </p>

                <h4 className="text-xl font-serif text-amber-200 mt-8 mb-4">
                    {lang === "en" ? "Logic Flow of the Seer" : "ऋषि का तर्क प्रवाह"}
                </h4>
                <div className="space-y-2">
                    {[
                        { step: 1, title: "Vision of Inhabitation", desc: "Seeing Divine in all objects → Renunciation of Greed." },
                        { step: 2, title: "Consecration of Action", desc: "Work as worship → Freedom from Karma." },
                        { step: 3, title: "Realization of Paradox", desc: "Self is Moving & Unmoving → Beyond logic." },
                        { step: 4, title: "Universal Solidarity", desc: "Seeing Self in All → End of Hatred." },
                        { step: 5, title: "Synthesis of Knowledge", desc: "Vidya + Avidya → Crossing Death & Immortality." },
                        { step: 6, title: "Solar Breakthrough", desc: "Removing the Golden Lid → Seeing Truth." },
                        { step: 7, title: "Final Absorption", desc: "So'ham (I am He) → Merging with Agni." }
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-4 bg-slate-900 p-3 rounded-lg border border-amber-500/10 hover:border-amber-500/30 transition-all">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-amber-500 text-xs font-bold border border-amber-500/30">
                                {s.step}
                            </span>
                            <div>
                                <h5 className="text-amber-100 font-bold text-sm">{s.title}</h5>
                                <p className="text-amber-100/50 text-xs">{s.desc}</p>
                            </div>
                            {i !== 6 && <ArrowRight className="w-4 h-4 text-amber-500/20 ml-auto" />}
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <h4 className="text-xl font-serif text-amber-200 mb-4">
                        {lang === "en" ? "The Mathematical Logic of Shanti Mantra" : "शांति मंत्र का गणितीय तर्क"}
                    </h4>
                    <div className="bg-slate-950 p-8 rounded-2xl border border-amber-500/30 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 to-transparent pointer-events-none" />
                        <p className="text-2xl md:text-4xl font-serif text-amber-500 mb-4 relative z-10">
                            ∞ - ∞ = ∞
                        </p>
                        <p className="text-amber-100/80 italic relative z-10">
                            The Whole (Absolute) - The Whole (Creation) = The Whole (Absolute)
                        </p>
                        <p className="text-sm text-amber-100/60 mt-4 max-w-lg mx-auto leading-relaxed relative z-10">
                            {lang === "en"
                                ? "Creation is not a subtraction from the Divine. It is a spiritual expression that leaves the Source undiminished, like love or light."
                                : "सृष्टि ईश्वर से घटाव नहीं है। यह एक आध्यात्मिक अभिव्यक्ति है जो स्रोत को कम नहीं करती, जैसे प्रेम या प्रकाश।"}
                        </p>
                    </div>
                </div>
            </ResearchSection>

            {/* Conclusion */}
            <ResearchSection title={lang === "en" ? "Conclusion" : "निष्कर्ष"} icon={Scale}>
                <p>
                    {lang === "en"
                        ? "The Isha Upanishad remains a foundational text because it satisfies the human requirement for a philosophy that does not require the abandonment of life to find the Divine. Its historical introduction at the end of the Shukla Yajurveda Samhita was a logical necessity to resolve the crisis of ritualism."
                        : "ईशोपनिषद् एक आधारभूत पाठ बना हुआ है क्योंकि यह एक ऐसे दर्शन की मानवीय आवश्यकता को पूरा करता है जिसमें ईश्वर को पाने के लिए जीवन का त्याग करने की आवश्यकता नहीं होती है। शुक्ल यजुर्वेद संहिता के अंत में इसका ऐतिहासिक परिचय कर्मकांड के संकट को हल करने के लिए एक तार्किक आवश्यकता थी।"}
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 rounded-r-xl">
                    <p className="text-lg italic text-amber-200">
                        "{lang === "en"
                            ? "From the blind darkness of materialism to the face of Truth behind the golden veil, the Isha maps the ultimate journey of integration."
                            : "भौतिकवाद के अंधेरे से लेकर सुनहरे पर्दे के पीछे सत्य के चेहरे तक, ईशा एकीकरण की अंतिम यात्रा का नक्शा तैयार करती है।"}"
                    </p>
                </div>
            </ResearchSection>

            {/* Citation Footer */}
            <div className="border-t border-amber-500/10 pt-8 text-xs text-amber-500/30 text-center font-mono">
                Historical Genesis, Socio-Economic Catalysts, and Philosophical Logic Research Report • Based on standard academic & traditional sources.
            </div>
        </motion.div>
    );
}
