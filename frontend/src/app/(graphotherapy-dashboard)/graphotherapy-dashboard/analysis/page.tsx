"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, CheckCircle2, Lock, Sparkles } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function AnalysisPage() {
    const [selectedType, setSelectedType] = useState("premium");
    const [isUploading, setIsUploading] = useState(false);

    const handleAnalysis = () => {
        setIsUploading(true);
        // Mock API call
        setTimeout(() => {
            setIsUploading(false);
            alert("Analysis Submitted! Your report is generating...");
        }, 2000);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                    New Analysis
                </h1>
                <p className="text-gray-500 mt-2">Select the depth of your scan.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upload Section */}
                <Card className="h-full border-dashed border-2 bg-slate-50 flex flex-col items-center justify-center p-12 text-center cursor-pointer hover:bg-slate-100 transition-colors">
                    <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                        <UploadCloud className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="font-medium text-lg text-slate-900">Upload Handwriting Sample</h3>
                    <p className="text-sm text-slate-500 mt-2 max-w-xs">
                        Ensure good lighting and white unlined paper. Max 5MB.
                    </p>
                </Card>

                {/* Configuration Section */}
                <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8 space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Select Report Logic</h3>
                            <RadioGroup defaultValue="premium" onValueChange={setSelectedType} className="space-y-4">
                                {/* Premium Option */}
                                <div className={`flex items-center space-x-4 border p-4 rounded-xl transition-all ${selectedType === 'premium' ? 'border-purple-600 bg-purple-50' : 'border-gray-200'}`}>
                                    <RadioGroupItem value="premium" id="r1" className="text-purple-600" />
                                    <Label htmlFor="r1" className="flex-1 cursor-pointer">
                                        <div className="font-bold text-gray-900">Premium Blueprint</div>
                                        <div className="text-xs text-gray-500">7-Dimension Psychological Profile</div>
                                    </Label>
                                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Most Popular</Badge>
                                </div>

                                {/* Health Option (Locked/Unlocked) */}
                                <div className={`flex items-center space-x-4 border p-4 rounded-xl transition-all ${selectedType === 'health' ? 'border-red-600 bg-red-50' : 'border-gray-200'}`}>
                                    <RadioGroupItem value="health" id="r2" disabled />
                                    <Label htmlFor="r2" className="flex-1 cursor-not-allowed opacity-60">
                                        <div className="font-bold text-gray-900 flex items-center gap-2">
                                            Advanced Health Audit <Lock className="w-3 h-3" />
                                        </div>
                                        <div className="text-xs text-gray-500">Requires Level 2 Completion</div>
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 flex gap-3">
                            <Sparkles className="w-5 h-5 shrink-0" />
                            <p>
                                <strong>AI Tip:</strong> Use a ballpoint pen for the best pressure analysis results in Premium reports.
                            </p>
                        </div>

                        <Button
                            className="w-full h-12 text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg"
                            onClick={handleAnalysis}
                            disabled={isUploading}
                        >
                            {isUploading ? "Scanning..." : "Generate Analysis"}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
