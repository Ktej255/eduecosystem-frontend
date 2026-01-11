"use client";

import React from "react";
import {
    Puzzle, ArrowLeft, CheckCircle2, Plus,
    ExternalLink, Search, Filter, ShieldCheck,
    Zap, MessageSquare, Database, Video, CreditCard, Mail
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function IntegrationsPage() {
    const integrations = [
        { id: "1", name: "Slack", description: "Send notifications and updates to Slack channels", category: "Communication", icon: <MessageSquare className="h-6 w-6 text-purple-500" />, status: "connected" },
        { id: "2", name: "Zoom", description: "Schedule and manage live classes and meetings", category: "Video", icon: <Video className="h-6 w-6 text-blue-500" />, status: "connected" },
        { id: "3", name: "Stripe", description: "Process payments and manage subscriptions", category: "Finance", icon: <CreditCard className="h-6 w-6 text-indigo-500" />, status: "connected" },
        { id: "4", name: "Mailchimp", description: "Email marketing automation and campaigns", category: "Marketing", icon: <Mail className="h-6 w-6 text-yellow-500" />, status: "disconnected" },
        { id: "5", name: "Zapier", description: "Connect with 5000+ other apps", category: "Automation", icon: <Zap className="h-6 w-6 text-orange-500" />, status: "disconnected" },
        { id: "6", name: "Google Drive", description: "Store and sync course materials", category: "Storage", icon: <Database className="h-6 w-6 text-green-500" />, status: "disconnected" },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
            <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                        <Puzzle className="h-8 w-8 text-blue-600" />
                        Third Party Integrations
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Supercharge your platform by connecting with your favorite tools
                    </p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input placeholder="Search integrations..." className="pl-9" />
                    </div>
                    <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </Button>
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {['All', 'Communication', 'Finance', 'Marketing', 'Automation', 'Video', 'Storage'].map((cat, idx) => (
                    <Badge
                        key={idx}
                        variant={idx === 0 ? "default" : "outline"}
                        className="cursor-pointer px-4 py-1.5 text-sm whitespace-nowrap"
                    >
                        {cat}
                    </Badge>
                ))}
            </div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map((tool) => (
                    <Card key={tool.id} className="flex flex-col">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    {tool.icon}
                                </div>
                                {tool.status === 'connected' && (
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                                        <CheckCircle2 className="h-3 w-3 mr-1" />
                                        Connected
                                    </Badge>
                                )}
                            </div>
                            <CardTitle className="mt-4">{tool.name}</CardTitle>
                            <CardDescription>{tool.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {tool.description}
                            </p>
                        </CardContent>
                        <CardFooter className="pt-0">
                            {tool.status === 'connected' ? (
                                <Button variant="outline" className="w-full">
                                    Manage
                                </Button>
                            ) : (
                                <Button className="w-full">
                                    Connect
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Safe & Secure Banner */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-100 dark:border-blue-900">
                <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100">Secure & Verified Integrations</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300">All integrations are verified and secure. Your data is encrypted and protected.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
