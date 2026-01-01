"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, FileEdit, Shield, Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";
import api from "@/lib/api";

export default function AIWritingToolsPage() {
    const [essayText, setEssayText] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [activeTab, setActiveTab] = useState("grader");

    const handleGradeEssay = async () => {
        if (!essayText.trim()) return;
        setLoading(true);
        setResult(null);
        try {
            const res = await api.post("/ai-tools/grade-essay", {
                submission_id: 0,
                essay_text: essayText,
                rubric: {
                    content: 40,
                    structure: 30,
                    grammar: 20,
                    originality: 10
                },
                max_score: 100
            });
            setResult(res.data);
        } catch (error) {
            console.error("Grading failed:", error);
            setResult({ error: "Failed to grade. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const handleCheckPlagiarism = async () => {
        if (!essayText.trim()) return;
        setLoading(true);
        setResult(null);
        try {
            const res = await api.post("/ai-tools/check-plagiarism", {
                submission_id: 0,
                text: essayText,
                assignment_id: 0,
                threshold: 25.0
            });
            setResult(res.data);
        } catch (error) {
            console.error("Plagiarism check failed:", error);
            setResult({ error: "Failed to check. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex items-center gap-3 mb-2">
                <FileEdit className="h-8 w-8 text-purple-500" />
                <h1 className="text-4xl font-black text-white">AI Writing Tools</h1>
            </div>
            <p className="text-gray-400 text-lg">
                Improve your writing with AI-powered analysis. Grade essays and check for plagiarism.
            </p>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="bg-gray-900 border border-gray-800 p-1 mb-8">
                    <TabsTrigger value="grader" className="px-8 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white gap-2">
                        <Sparkles className="h-4 w-4" />
                        Essay Grader
                    </TabsTrigger>
                    <TabsTrigger value="plagiarism" className="px-8 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white gap-2">
                        <Shield className="h-4 w-4" />
                        Plagiarism Checker
                    </TabsTrigger>
                </TabsList>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white">Your Text</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Textarea
                                placeholder="Paste your essay or answer here..."
                                className="min-h-[300px] bg-gray-950 border-gray-700 text-white"
                                value={essayText}
                                onChange={(e) => setEssayText(e.target.value)}
                            />
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xs text-gray-500">{essayText.length} characters</span>
                                <Button
                                    onClick={activeTab === "grader" ? handleGradeEssay : handleCheckPlagiarism}
                                    disabled={loading || !essayText.trim()}
                                    className="bg-purple-600 hover:bg-purple-500"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                            Analyzing...
                                        </>
                                    ) : (
                                        activeTab === "grader" ? "Grade My Essay" : "Check Plagiarism"
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white">AI Analysis Result</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {!result && !loading && (
                                <div className="text-center py-12 text-gray-500">
                                    <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-30" />
                                    <p>Paste your text and click analyze to see results</p>
                                </div>
                            )}

                            {result && !result.error && activeTab === "grader" && (
                                <div className="space-y-6">
                                    <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-black rounded-xl border border-purple-500/20">
                                        <div className="text-5xl font-black text-purple-400">{result.score}<span className="text-2xl text-gray-500">/100</span></div>
                                        <p className="text-sm text-gray-400 mt-2">Overall Score</p>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                            Strengths
                                        </h4>
                                        <ul className="space-y-1 text-sm text-gray-400">
                                            {result.strengths?.map((s: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-green-500">•</span> {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-500" />
                                            Areas to Improve
                                        </h4>
                                        <ul className="space-y-1 text-sm text-gray-400">
                                            {result.improvements?.map((s: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-amber-500">•</span> {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {result && !result.error && activeTab === "plagiarism" && (
                                <div className="space-y-6">
                                    <div className={`text-center p-6 rounded-xl border ${result.is_plagiarized ? 'bg-red-900/30 border-red-500/30' : 'bg-green-900/30 border-green-500/30'}`}>
                                        <div className={`text-5xl font-black ${result.is_plagiarized ? 'text-red-400' : 'text-green-400'}`}>
                                            {result.originality_score?.toFixed(0)}%
                                        </div>
                                        <p className="text-sm text-gray-400 mt-2">Originality Score</p>
                                    </div>

                                    <div className={`p-4 rounded-lg ${result.is_plagiarized ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
                                        {result.is_plagiarized ? (
                                            <p className="font-medium">⚠️ Potential plagiarism detected ({result.similarity_percentage?.toFixed(1)}% similarity)</p>
                                        ) : (
                                            <p className="font-medium">✅ Your content appears to be original!</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {result?.error && (
                                <div className="text-center py-12 text-red-500">
                                    <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
                                    <p>{result.error}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </Tabs>
        </div>
    );
}
