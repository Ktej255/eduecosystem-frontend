"use client";

import { useState } from "react";
import {
    Bell,
    Mail,
    Smartphone,
    Save,
    RotateCcw,
    User,
    BookOpen,
    DollarSign,
    Shield
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- Mock Data ---

interface NotificationSetting {
    id: string;
    label: string;
    description: string;
    email: boolean;
    push: boolean;
    category: "account" | "course" | "finance" | "security";
}

const initialSettings: NotificationSetting[] = [
    // Course Activity
    { id: "new_enrollment", label: "New Student Enrollment", description: "When a new student joins your course", email: true, push: true, category: "course" },
    { id: "assignment_submission", label: "Assignment Submission", description: "When a student submits an assignment for review", email: false, push: true, category: "course" },
    { id: "course_comment", label: "New Comment/Question", description: "When a student posts a question in discussion", email: true, push: true, category: "course" },

    // Finance
    { id: "daily_revenue", label: "Daily Revenue Report", description: "Summary of daily earnings sent at 9 PM", email: true, push: false, category: "finance" },
    { id: "payout_processed", label: "Payout Processed", description: "When funds differ from your wallet", email: true, push: true, category: "finance" },

    // Account
    { id: "marketing_tips", label: "Marketing Tips", description: "Weekly tips to grow your audience", email: true, push: false, category: "account" },
    { id: "platform_updates", label: "Platform Updates", description: "New features and maintenance alerts", email: true, push: false, category: "account" },

    // Security
    { id: "new_login", label: "New Device Login", description: "Alert when your account is accessed from a new IP", email: true, push: true, category: "security" },
];

export default function NotificationPreferences() {
    const [settings, setSettings] = useState<NotificationSetting[]>(initialSettings);
    const [hasChanges, setHasChanges] = useState(false);

    const toggleSetting = (id: string, channel: "email" | "push") => {
        setSettings(settings.map(s =>
            s.id === id ? { ...s, [channel]: !s[channel] } : s
        ));
        setHasChanges(true);
    };

    const handleSave = () => {
        setHasChanges(false);
        // Simulate API call
        console.log("Saving settings...", settings);
    };

    const handleReset = () => {
        setSettings(initialSettings);
        setHasChanges(false);
    };

    const categories = [
        { id: "course", label: "Course Activity", icon: BookOpen, color: "text-indigo-600 bg-indigo-50" },
        { id: "finance", label: "Finance & Sales", icon: DollarSign, color: "text-green-600 bg-green-50" },
        { id: "security", label: "Security & Login", icon: Shield, color: "text-red-600 bg-red-50" },
        { id: "account", label: "Account & Updates", icon: User, color: "text-muted-foreground bg-muted" },
    ];

    return (
        <Card className="border-border shadow-sm max-w-4xl mx-auto">
            <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Bell className="h-5 w-5 text-indigo-500" />
                            Notification Preferences
                        </CardTitle>
                        <CardDescription>Manage how and when you want to be notified.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={handleReset} disabled={!hasChanges} className="text-muted-foreground">
                            <RotateCcw className="h-4 w-4 mr-2" /> Reset
                        </Button>
                        <Button size="sm" onClick={handleSave} disabled={!hasChanges} className={hasChanges ? "bg-indigo-600 hover:bg-indigo-700" : ""}>
                            <Save className="h-4 w-4 mr-2" /> Save Changes
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50/50/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        <div className="col-span-8 md:col-span-6">Alert Type</div>
                        <div className="col-span-2 md:col-span-3 text-center flex items-center justify-center gap-1">
                            <Mail className="h-3 w-3" /> Email
                        </div>
                        <div className="col-span-2 md:col-span-3 text-center flex items-center justify-center gap-1">
                            <Smartphone className="h-3 w-3" /> Push
                        </div>
                    </div>

                    {categories.map((category) => {
                        const categorySettings = settings.filter(s => s.category === category.id);
                        if (categorySettings.length === 0) return null;

                        return (
                            <div key={category.id}>
                                {/* Category Header */}
                                <div className="px-6 py-4 bg-card flex items-center gap-2">
                                    <div className={`p-1.5 rounded-md ${category.color}`}>
                                        <category.icon className="h-4 w-4" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">{category.label}</h3>
                                </div>

                                {/* Items */}
                                <div className="divide-y divide-slate-50 dark:divide-slate-900">
                                    {categorySettings.map((setting) => (
                                        <div key={setting.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-muted dark:hover:bg-slate-900/50 transition-colors">
                                            <div className="col-span-8 md:col-span-6 pr-4">
                                                <p className="font-medium text-muted-foreground text-sm">{setting.label}</p>
                                                <p className="text-xs text-muted-foreground mt-0.5">{setting.description}</p>
                                            </div>
                                            <div className="col-span-2 md:col-span-3 flex justify-center items-center">
                                                <Switch
                                                    checked={setting.email}
                                                    onCheckedChange={() => toggleSetting(setting.id, 'email')}
                                                />
                                            </div>
                                            <div className="col-span-2 md:col-span-3 flex justify-center items-center">
                                                <Switch
                                                    checked={setting.push}
                                                    onCheckedChange={() => toggleSetting(setting.id, 'push')}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
            <CardFooter className="py-6 bg-muted/10 border-t border-slate-100 flex justify-center text-xs text-muted-foreground text-center">
                <p>
                    Tip: Push notifications are sent to your mobile device via the EduTeacher App. <br />
                    Email notifications are sent to your registered address (t*********@example.com).
                </p>
            </CardFooter>
        </Card>
    );
}
