"use client";

import { useState } from "react";
import {
    Trophy,
    Zap,
    MessageCircle,
    Clock,
    BookOpen,
    Save,
    RotateCcw,
    Settings
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface PointRule {
    id: string;
    label: string;
    description: string;
    icon: any;
    defaultPoints: number;
    color: string;
}

const rules: PointRule[] = [
    { id: "login", label: "Daily Streaks", description: "Points for logging in consecutively", icon: Clock, defaultPoints: 10, color: "text-blue-500" },
    { id: "quiz", label: "Quiz Master", description: "Points per correct answer", icon: Zap, defaultPoints: 5, color: "text-amber-500" },
    { id: "complete", label: "Module Completion", description: "Finishing a video or chapter", icon: BookOpen, defaultPoints: 50, color: "text-green-500" },
    { id: "help", label: "Community Helper", description: "Answering a peer's doubt", icon: MessageCircle, defaultPoints: 20, color: "text-purple-500" },
];

export default function LeaderboardConfigurator() {
    const [config, setConfig] = useState<Record<string, number>>({
        login: 10,
        quiz: 5,
        complete: 50,
        help: 20
    });
    const [isSeasonActive, setIsSeasonActive] = useState(true);
    const [hasChanges, setHasChanges] = useState(false);

    const handleSliderChange = (id: string, value: number[]) => {
        setConfig(prev => ({ ...prev, [id]: value[0] }));
        setHasChanges(true);
    };

    const handleSave = () => {
        // Mock save
        setHasChanges(false);
    };

    const handleReset = () => {
        setConfig({
            login: 10,
            quiz: 5,
            complete: 50,
            help: 20
        });
        setHasChanges(false);
    };

    // calculate projected weekly score for an average student
    const projectedScore =
        (config.login * 7) +       // 7 logins
        (config.quiz * 20) +       // 20 questions
        (config.complete * 3) +    // 3 modules
        (config.help * 2);         // 2 helps

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
            {/* Config Panel */}
            <div className="md:col-span-8">
                <Card className="border-border">
                    <CardHeader className="pb-4 border-b border-slate-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-lg font-bold flex items-center gap-2">
                                    <Settings className="h-5 w-5 text-muted-foreground" />
                                    Karma Logic Engine
                                </CardTitle>
                                <CardDescription>Fine-tune how students earn XP and rank up.</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <Label htmlFor="season-mode" className="text-sm font-medium text-muted-foreground">Season 6 Active</Label>
                                <Switch id="season-mode" checked={isSeasonActive} onCheckedChange={setIsSeasonActive} />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">
                        {rules.map((rule) => (
                            <div key={rule.id} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-muted ${rule.color}`}>
                                            <rule.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm text-foreground">{rule.label}</h4>
                                            <p className="text-xs text-muted-foreground">{rule.description}</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="font-mono text-xs w-16 justify-center">
                                        {config[rule.id]} XP
                                    </Badge>
                                </div>
                                <Slider
                                    value={[config[rule.id]]}
                                    min={0}
                                    max={100}
                                    step={1}
                                    onValueChange={(val) => handleSliderChange(rule.id, val)}
                                    className="cursor-pointer"
                                />
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="bg-muted/50 flex justify-between py-3 border-t border-slate-100">
                        <Button variant="ghost" size="sm" onClick={handleReset} disabled={!hasChanges} className="text-muted-foreground">
                            <RotateCcw className="h-4 w-4 mr-2" /> Reset Defaults
                        </Button>
                        <Button size="sm" onClick={handleSave} disabled={!hasChanges} className={hasChanges ? "bg-indigo-600 hover:bg-indigo-700" : ""}>
                            <Save className="h-4 w-4 mr-2" /> Save Changes
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            {/* Preview Panel */}
            <div className="md:col-span-4">
                <Card className="h-full bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2 text-indigo-100">
                            <Trophy className="h-5 w-5 text-yellow-400" />
                            Impact Preview
                        </CardTitle>
                        <CardDescription className="text-indigo-200 text-xs">
                            Projected weekly earnings for an active student based on current settings.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center py-6">
                            <span className="text-5xl font-extrabold tracking-tight block mb-1">{projectedScore}</span>
                            <span className="text-sm font-medium text-indigo-200 uppercase tracking-widest">XP / Week</span>
                        </div>

                        <div className="space-y-3 bg-card/10 rounded-xl p-4 backdrop-blur-sm">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-2">Breakdown</h4>
                            <div className="flex justify-between text-sm">
                                <span className="text-indigo-100">Login Streak</span>
                                <span className="font-mono">{config.login * 7}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-indigo-100">Quizzes</span>
                                <span className="font-mono">{config.quiz * 20}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-indigo-100">Modules</span>
                                <span className="font-mono">{config.complete * 3}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-indigo-100">Peer Help</span>
                                <span className="font-mono">{config.help * 2}</span>
                            </div>
                        </div>

                        <div className="bg-yellow-400/20 rounded-lg p-3 border border-yellow-400/30">
                            <p className="text-xs text-yellow-200 leading-relaxed">
                                💡 <strong>Tip:</strong> Increasing "Community Helper" points by 10% usually boosts peer engagement by ~25%.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
