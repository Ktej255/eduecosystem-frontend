"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import {
    PlayCircle,
    FileText,
    UploadCloud,
    CheckCircle2,
    ArrowRight,
    Camera
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FunnelWizard() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        address: ''
    });

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const totalSteps = 4;
    const progress = (step / totalSteps) * 100;

    const handleNext = () => setStep(prev => prev + 1);

    // STEP 1: VIDEO HOOK
    if (step === 1) {
        return (
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        Wait! Watch This First...
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Understanding how this 2-minute analysis works.
                    </p>
                </div>

                {/* Video Placeholder */}
                <div className="aspect-video bg-black rounded-2xl shadow-2xl flex items-center justify-center group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all z-10" />
                    <p className="absolute bottom-6 left-6 text-white font-medium z-10">
                        Analyzing Your Subconscious Map (0:45)
                    </p>
                </div>

                <div className="flex justify-center pt-6">
                    <Button size="lg" className="w-full md:w-1/2 h-14 text-xl bg-purple-600 hover:bg-purple-700 animate-bounce shadow-xl" onClick={handleNext}>
                        I've Watched It, Next Step <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        );
    }

    // STEP 2: PERSONAL DETAILS
    if (step === 2) {
        return (
            <Card className="max-w-xl mx-auto border-purple-200 shadow-xl animate-in slide-in-from-right-8 duration-300">
                <CardContent className="p-8 space-y-6">
                    <div className="space-y-2 text-center">
                        <FileText className="w-12 h-12 text-purple-600 mx-auto" />
                        <h2 className="text-2xl font-bold">Who are we analyzing?</h2>
                        <p className="text-gray-500">We need these details to send your personalized report.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input
                                placeholder="e.g. Rahul Sharma"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Email Address</Label>
                            <Input
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>WhatsApp Number</Label>
                            <Input
                                type="tel"
                                placeholder="+91 98765 43210"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Home Address (City/State)</Label>
                            <Textarea
                                placeholder="For regional linguistic analysis context..."
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleNext}
                            disabled={!formData.name || !formData.email}
                        >
                            Continue to Sample Submission
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    // STEP 3: INSTRUCTION & WRITING
    if (step === 3) {
        return (
            <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                        <FileText className="w-5 h-5 mr-2" />
                        Instructions:
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                        Please take 4 blank A4 sheets (unruled). Write the following paragraph in your natural handwriting using a ballpoint pen.
                        Do not use pencil.
                    </p>
                </div>

                <Card className="border-2 border-dashed border-gray-300 bg-gray-50 dark:bg-gray-900/50">
                    <CardContent className="p-8 text-center space-y-4">
                        <h4 className="font-serif text-2xl italic text-gray-700 dark:text-gray-300 leading-relaxed">
                            "The quick brown fox jumps over the lazy dog. I am writing this to understand myself better.
                            My handwriting is a reflection of my mind, and I am ready to change my strokes to change my life.
                            Success is waiting for me."
                        </h4>
                        <p className="text-sm text-gray-400 mt-4 uppercase tracking-widest">
                            (Write this at least 3-4 times on the pages)
                        </p>
                    </CardContent>
                </Card>

                <div className="flex justify-center">
                    <Button size="lg" onClick={handleNext} className="bg-purple-600 hover:bg-purple-700">
                        I Have Written It <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        );
    }

    // STEP 4: UPLOAD
    if (step === 4) {
        return (
            <Card className="max-w-xl mx-auto animate-in slide-in-from-right-8 duration-300">
                <CardContent className="p-8 space-y-8 text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Camera className="w-10 h-10 text-blue-600" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">Upload Your Samples</h2>
                        <p className="text-gray-500">Take clear photos of your 4 pages and upload them here.</p>
                    </div>

                    <div className="border-2 border-dashed border-blue-300 hover:border-blue-500 rounded-xl p-10 cursor-pointer transition-colors bg-blue-50/50">
                        <UploadCloud className="mx-auto h-12 w-12 text-blue-400" />
                        <span className="mt-2 block text-sm font-semibold text-blue-600">
                            Click to upload photos
                        </span>
                        <span className="mt-1 block text-xs text-gray-500">
                            JPG, PNG up to 10MB
                        </span>
                    </div>

                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 shadow-green-500/20 shadow-lg" onClick={() => router.push('/graphotherapy/funnel/complete')}>
                        <CheckCircle2 className="mr-2 w-5 h-5" /> Submit for Analysis
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return null;
}
