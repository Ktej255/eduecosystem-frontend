import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, FileText, Target, BookOpen, ChevronRight, CheckCircle2, History, Languages, Map } from "lucide-react";
import { HandwrittenNote } from "@/components/common/revision/HandwrittenNote";
import { ChronologyTimeline } from "@/components/common/revision/ChronologyTimeline";

interface Props {
    chapterNumber: string;
    isCompleted?: boolean;
    onComplete?: () => void;
}

export default function AncientHistoryModule1({ chapterNumber, isCompleted, onComplete }: Props) {
    const [activeTab, setActiveTab] = useState("overview");

    const timelineData = [
        { year: "Pre-3rd Cent BC", event: "Prakrit Lingua Franca", description: "Prakrit served as the lingua franca across major parts of India, peaking during Ashoka's reign." },
        { year: "4th-5th Cent AD", event: "Sanskrit Dominance", description: "Sanskrit emerged as the dominant state language, bridging the elite and influencing subsequent texts." },
        { year: "9th Cent AD", event: "Regional Languages", description: "Emergence of regional languages like Bengali, Assamese, and Odia alongside Apabhramsha." },
    ];

    return (
        <div className="space-y-6">
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-stone-100/50 p-1">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-stone-900 text-stone-600">
                        <FileText className="h-4 w-4 mr-2" />
                        3-Min Revision
                    </TabsTrigger>
                    <TabsTrigger value="concepts" className="data-[state=active]:bg-white data-[state=active]:text-stone-900 text-stone-600">
                        <Brain className="h-4 w-4 mr-2" />
                        UPSC Synthesis
                    </TabsTrigger>
                    <TabsTrigger value="prelims" className="data-[state=active]:bg-white data-[state=active]:text-stone-900 text-stone-600">
                        <Target className="h-4 w-4 mr-2" />
                        Prelims Hitlist
                    </TabsTrigger>
                </TabsList>

                {/* TAB 1: 3-MINUTE REVISION */}
                <TabsContent value="overview" className="mt-6 animation-fade-in">
                    <Card className="border-0 shadow-sm ring-1 ring-stone-200">
                        <CardHeader className="bg-stone-50 border-b border-stone-100">
                            <CardTitle className="flex items-center gap-2 text-xl text-stone-800">
                                <History className="h-5 w-5 text-amber-600" />
                                Core Narrative: Unity in Diversity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">

                            <p className="text-stone-700 leading-relaxed text-lg">
                                RS Sharma's first chapter fundamentally aims to prove one thesis: **India's history is a story of continuous synthesis**. Despite immense geographical and linguistic barriers, foreign elements (Aryans, Greeks, Scythians, Hunas, Turks) completely lost their original identity and merged inextricably into Indian society.
                            </p>

                            <HandwrittenNote
                                title="The Concept of Bharatavarsha"
                                content="The name 'Bharatavarsha' or 'The Land of Bharata' originated from the Bharata tribe (Rig Veda). Ancient texts called its inhabitants 'Bharatasantati'. It was the first conceptual realization of India as a single geographical and cultural unit."
                                styleType="marker"
                            />

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="space-y-3 bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                                    <div className="flex items-center gap-2 text-blue-800 font-semibold text-lg pb-2 border-b border-blue-200">
                                        <Languages className="h-5 w-5" />
                                        Linguistic Synthesis
                                    </div>
                                    <ul className="space-y-2 text-stone-700">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                            <span><strong>Indo-Aryan texts (Vedas)</strong> contain Munda and Dravidian terms.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                            <span><strong>Pali/Sanskrit texts</strong> heavily shaped early Tamil literature (Sangam).</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-3 bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                                    <div className="flex items-center gap-2 text-emerald-800 font-semibold text-lg pb-2 border-b border-emerald-200">
                                        <Map className="h-5 w-5" />
                                        Administrative Unity
                                    </div>
                                    <ul className="space-y-2 text-stone-700">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                                            <span>Kings sought universal dominion: **Chakravarti** (ruler from Himalayas to Sea).</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                                            <span>Ashoka, Samudragupta, and Chalukyas physically realized varied degrees of this political unity.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </TabsContent>

                {/* TAB 2: UPSC SYNTHESIS (Concepts & Timelines) */}
                <TabsContent value="concepts" className="mt-6 animation-fade-in">
                    <Card className="border-0 shadow-sm ring-1 ring-stone-200">
                        <CardHeader className="bg-stone-50 border-b border-stone-100">
                            <CardTitle className="flex items-center gap-2 text-xl text-stone-800">
                                <Brain className="h-5 w-5 text-purple-600" />
                                Chronological & Social Evolution
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">

                            <h3 className="font-bold text-stone-800 text-lg mb-4">The Evolution of the Lingua Franca</h3>
                            <ChronologyTimeline events={timelineData} />

                            <div className="mt-8">
                                <HandwrittenNote
                                    title="The Varna System's Role"
                                    content="Why did foreigners seamlessly assimilate? RS Sharma argues it was the 'Varna System'. Foreign conquerors (Greeks, Shakas, Hunas) were absorbed as 'Kshatriyas' (warrior class) by Brahmanical society, neutralizing their foreign identity and integrating them into the social hierarchy."
                                    styleType="cursive"
                                    className="bg-purple-50 border-purple-300"
                                />
                            </div>

                        </CardContent>
                    </Card>
                </TabsContent>

                {/* TAB 3: PRELIMS HITLIST */}
                <TabsContent value="prelims" className="mt-6 animation-fade-in">
                    <Card className="border-0 shadow-sm ring-1 ring-stone-200">
                        <CardHeader className="bg-stone-50 border-b border-stone-100">
                            <CardTitle className="flex items-center gap-2 text-xl text-stone-800">
                                <Target className="h-5 w-5 text-rose-600" />
                                Prelims-Specific Facts
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {[
                                    { f: "Who first called India 'Hind'? The Iranians.", type: "Etymology" },
                                    { f: "Who originated the term 'India'? The Greeks (Indos).", type: "Etymology" },
                                    { f: "Which text refers to the inhabitants of the subcontinent as 'Bharatasantati'? Visnu Purana.", type: "Literature" },
                                    { f: "Who was a 'Chakravarti'? A king whose domain extended from the Himalayas to the Sea.", type: "Terminology" },
                                    { f: "The Epics (Ramayana/Mahabharata) were originally compiled in which language? Sanskrit.", type: "Literature" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:bg-stone-50/80 transition-colors shadow-sm">
                                        <Badge variant="outline" className="bg-stone-100 shrink-0 text-stone-600 font-semibold">
                                            {item.type}
                                        </Badge>
                                        <span className="text-stone-800 font-medium">
                                            {item.f}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={onComplete}
                                    disabled={isCompleted}
                                    className={`px-8 py-6 rounded-xl font-bold transition-all ${isCompleted ? 'bg-green-500 text-white opacity-100' : 'bg-stone-800 hover:bg-stone-700 text-white'}`}
                                >
                                    {isCompleted ? (
                                        <><CheckCircle2 className="h-5 w-5 mr-2" /> Revision Mastered</>
                                    ) : (
                                        <><BookOpen className="h-5 w-5 mr-2" /> Complete Read Section</>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </div>
    );
}
