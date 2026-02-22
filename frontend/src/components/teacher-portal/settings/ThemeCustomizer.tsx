"use client";

import { useState } from "react";
import {
    Palette,
    Check,
    Layout,
    Moon,
    Sun,
    Smartphone,
    Monitor,
    Save,
    RotateCcw
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const themes = [
    { id: "indigo", label: "Royal Indigo", color: "bg-indigo-600", activeColor: "ring-indigo-600", hex: "#4F46E5" },
    { id: "violet", label: "Electric Violet", color: "bg-violet-600", activeColor: "ring-violet-600", hex: "#7C3AED" },
    { id: "emerald", label: "Forest Emerald", color: "bg-emerald-600", activeColor: "ring-emerald-600", hex: "#059669" },
    { id: "rose", label: "Vibrant Rose", color: "bg-rose-600", activeColor: "ring-rose-600", hex: "#E11D48" },
    { id: "amber", label: "Golden Amber", color: "bg-amber-500", activeColor: "ring-amber-500", hex: "#F59E0B" },
    { id: "sky", label: "Ocean Sky", color: "bg-sky-500", activeColor: "ring-sky-500", hex: "#0EA5E9" },
    { id: "slate", label: "Professional Slate", color: "bg-slate-700", activeColor: "ring-slate-700", hex: "#334155" },
];

export default function ThemeCustomizer() {
    const [selectedTheme, setSelectedTheme] = useState(themes[0]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);

    const handleThemeChange = (themeId: string) => {
        const theme = themes.find(t => t.id === themeId);
        if (theme) {
            setSelectedTheme(theme);
            setHasChanges(true);
        }
    };

    const handleReset = () => {
        setSelectedTheme(themes[0]);
        setIsDarkMode(false);
        setHasChanges(false);
    };

    const handleSave = () => {
        setHasChanges(false);
        // Simulate save
        console.log("Saving theme:", selectedTheme.id);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Controls */}
            <div className="lg:col-span-4 space-y-6">
                <Card className="border-border">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Palette className="h-5 w-5 text-indigo-500" />
                            Brand Identity
                        </CardTitle>
                        <CardDescription>Customize the look and feel of your portal.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">Primary Brand Color</Label>
                            <div className="grid grid-cols-4 gap-3">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.id}
                                        onClick={() => handleThemeChange(theme.id)}
                                        className={cn(
                                            "h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:outline-none ring-2 ring-offset-2",
                                            theme.color,
                                            selectedTheme.id === theme.id ? theme.activeColor : "ring-transparent ring-offset-transparent"
                                        )}
                                        title={theme.label}
                                    >
                                        {selectedTheme.id === theme.id && <Check className="h-4 w-4 text-white" />}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                                <span className={cn("inline-block w-2 h-2 rounded-full", selectedTheme.color)}></span>
                                Selected: <span className="font-medium">{selectedTheme.label}</span>
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <Label className="text-sm font-medium">Appearance Mode</Label>
                                <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className={cn("h-7 w-7 p-0 rounded-md", !isDarkMode && "bg-card shadow text-foreground")}
                                        onClick={() => setIsDarkMode(false)}
                                    >
                                        <Sun className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className={cn("h-7 w-7 p-0 rounded-md", isDarkMode && "bg-slate-700 shadow text-white")}
                                        onClick={() => setIsDarkMode(true)}
                                    >
                                        <Moon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex gap-2">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={handleReset}
                                disabled={!hasChanges}
                            >
                                <RotateCcw className="h-4 w-4 mr-2" /> Reset
                            </Button>
                            <Button
                                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                                onClick={handleSave}
                                disabled={!hasChanges}
                            >
                                <Save className="h-4 w-4 mr-2" /> Save
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Live Preview */}
            <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground dark:text-muted-foreground flex items-center gap-2">
                        <Monitor className="h-4 w-4" /> Live Preview
                    </h3>
                    <Badge variant="outline" className="text-xs font-normal">Student View</Badge>
                </div>

                <div className={cn(
                    "rounded-xl overflow-hidden border border-border shadow-xl transition-all duration-300",
                    isDarkMode ? "bg-slate-950 text-slate-100 border-slate-800" : "bg-card text-foreground"
                )}>
                    {/* Fake Browser Header */}
                    <div className={cn(
                        "h-12 border-b flex items-center px-4 gap-4",
                        isDarkMode ? "bg-slate-900 border-slate-800" : "bg-muted border-slate-100"
                    )}>
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className={cn(
                            "flex-1 h-8 rounded-md flex items-center px-3 text-xs opacity-50",
                            isDarkMode ? "bg-slate-800" : "bg-card border border-border"
                        )}>
                            eduecosystem.com/student/dashboard
                        </div>
                    </div>

                    {/* Preview Content */}
                    <div className="p-8 space-y-8">
                        {/* Hero Section */}
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1 space-y-4">
                                <Badge className={cn("hover:opacity-90 transition-colors", selectedTheme.color)}>NEW COURSE</Badge>
                                <h1 className="text-3xl font-bold tracking-tight">Mastering Geography 2.0</h1>
                                <p className={isDarkMode ? "text-muted-foreground" : "text-muted-foreground"}>
                                    Unlock the secrets of the Earth with our comprehensive guide to physical and human geography.
                                </p>
                                <div className="flex gap-3 pt-2">
                                    <Button className={cn("text-white transition-colors", selectedTheme.color, `hover:opacity-90`)}>
                                        Enroll Now
                                    </Button>
                                    <Button variant="outline" className={isDarkMode ? "border-slate-800 hover:bg-slate-900" : ""}>
                                        View Syllabus
                                    </Button>
                                </div>
                            </div>
                            <div className={cn(
                                "w-full md:w-64 h-40 rounded-lg flex items-center justify-center relative overflow-hidden",
                                isDarkMode ? "bg-slate-900" : "bg-muted"
                            )}>
                                <div className={cn("absolute inset-0 opacity-10", selectedTheme.color)}></div>
                                <Layout className={cn("h-16 w-16 opacity-20", isDarkMode ? "text-white" : "text-black")} />
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold">Your Progress</h2>
                            <div className={cn(
                                "p-4 rounded-lg border",
                                isDarkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-muted"
                            )}>
                                <div className="flex justify-between items-center mb-2 text-sm">
                                    <span>Course Completion</span>
                                    <span className={cn("font-bold", `text-${selectedTheme.id}-600`)}>75%</span>
                                </div>
                                <div className={cn("h-2 w-full rounded-full", isDarkMode ? "bg-slate-800" : "bg-slate-200")}>
                                    <div className={cn("h-full rounded-full transition-all w-3/4", selectedTheme.color)}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
