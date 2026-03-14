"use client";

import Link from "next/link";
import { Globe, LayoutTemplate, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const sections = [
    {
        title: "Website Pages",
        description: "Manage landing pages, course pages, and custom content for your website.",
        href: "/teacher/website/pages",
        icon: LayoutTemplate,
        color: "from-cyan-500 to-blue-600",
    },
    {
        title: "Website Builder",
        description: "Drag-and-drop builder to design and customize your website layout.",
        href: "/teacher/website/builder",
        icon: Palette,
        color: "from-purple-500 to-indigo-600",
    },
];

export default function WebsiteHubPage() {
    return (
        <div className="p-6 max-w-5xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Website Management</h1>
                    <p className="text-muted-foreground">Build, manage, and customize your online presence.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((s) => (
                    <Link key={s.href} href={s.href}>
                        <Card className="h-full cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden group relative">
                            <div className={`absolute top-0 right-0 p-16 rounded-full blur-3xl opacity-10 bg-gradient-to-r ${s.color} -mr-10 -mt-10 group-hover:opacity-20 transition-opacity`} />
                            <CardContent className="p-8 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${s.color} text-white flex items-center justify-center mb-5 shadow-lg`}>
                                    <s.icon className="h-7 w-7" />
                                </div>
                                <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{s.title}</CardTitle>
                                <CardDescription className="text-sm leading-relaxed">{s.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
