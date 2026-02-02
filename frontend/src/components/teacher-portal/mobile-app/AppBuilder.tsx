"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Upload, Palette, CheckCircle, RefreshCcw, Smartphone as MobileIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function AppBuilder() {
    const [appName, setAppName] = useState("EduMaster Academy");
    const [primaryColor, setPrimaryColor] = useState("#4f46e5");
    const [splashImage, setSplashImage] = useState<string | null>(null);
    const [isBuilding, setIsBuilding] = useState(false);

    const handleBuildRequest = () => {
        setIsBuilding(true);
        setTimeout(() => {
            setIsBuilding(false);
            toast.success("Build request sent! You will be notified when the APK is ready.");
        }, 3000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-6">
                <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-indigo-600">
                            <Palette className="w-5 h-5" />
                            App Appearance
                        </CardTitle>
                        <p className="text-xs text-neutral-500">Customize how your app looks on student devices.</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>App Name</Label>
                                <Input
                                    value={appName}
                                    onChange={(e) => setAppName(e.target.value)}
                                    placeholder="e.g. My Academy"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Primary Theme Color</Label>
                                <div className="flex gap-2">
                                    <Input
                                        type="color"
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className="w-12 h-10 p-1 cursor-pointer"
                                    />
                                    <Input
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className="uppercase"
                                        maxLength={7}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Splash Screen / Loading Screen</Label>
                            <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <Upload className="w-8 h-8 text-neutral-400 mb-2" />
                                <span className="text-sm font-medium text-neutral-600">Click to upload image</span>
                                <span className="text-xs text-neutral-400">1080x1920 recommended (PNG/JPG)</span>
                            </div>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg flex gap-3 text-sm text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30">
                            <div className="shrink-0 pt-0.5">⚠️</div>
                            <div>
                                <strong>Note:</strong> Changes to the App Icon or Name require a new Play Store submission.
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-emerald-600">
                            <RefreshCcw className="w-5 h-5" />
                            Build Generation
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h4 className="font-medium">Request New Build (v2.1.0)</h4>
                                <p className="text-sm text-neutral-500">Compile changes into a new APK/AAB file.</p>
                            </div>
                            <Button
                                onClick={handleBuildRequest}
                                disabled={isBuilding}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[140px]"
                            >
                                {isBuilding ? (
                                    <span className="flex items-center gap-2">
                                        <RefreshCcw className="w-4 h-4 animate-spin" /> Building...
                                    </span>
                                ) : (
                                    "Start Build"
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Live Preview */}
            <div className="lg:col-span-1 flex justify-center items-start pt-4">
                <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] shadow-2xl border-[8px] border-neutral-800 overflow-hidden">
                    {/* Status Bar */}
                    <div className="absolute top-0 w-full h-8 bg-black/20 z-20 flex justify-between items-center px-4 pt-1">
                        <span className="text-[10px] text-white font-medium">9:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-white/80 rounded-full" />
                            <div className="w-3 h-3 bg-white/80 rounded-full" />
                        </div>
                    </div>

                    {/* App Content Mock */}
                    <div className="w-full h-full bg-neutral-100 flex flex-col relative">
                        {/* Header */}
                        <div
                            className="h-20 pt-8 px-4 flex items-center shadow-sm z-10"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <div className="font-bold text-white text-lg">{appName}</div>
                        </div>

                        {/* Body */}
                        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                            <div className="h-32 rounded-xl bg-white shadow-sm p-4 animate-pulse">
                                <div className="h-4 w-2/3 bg-neutral-200 rounded mb-2" />
                                <div className="h-3 w-full bg-neutral-100 rounded" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-24 rounded-xl bg-white shadow-sm" />
                                <div className="h-24 rounded-xl bg-white shadow-sm" />
                            </div>
                            <div className="h-20 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-400 text-sm font-medium">
                                Upcoming Live Class
                            </div>
                        </div>

                        {/* Tab Bar */}
                        <div className="h-16 bg-white border-t flex justify-around items-center px-2">
                            <div className="p-2" style={{ color: primaryColor }}><MobileIcon className="w-5 h-5" /></div>
                            <div className="p-2 text-neutral-400"><Upload className="w-5 h-5" /></div>
                            <div className="p-2 text-neutral-400"><Palette className="w-5 h-5" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
