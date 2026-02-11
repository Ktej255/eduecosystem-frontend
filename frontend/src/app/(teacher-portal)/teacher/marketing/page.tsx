"use client";

import { useState } from "react";
import {
    Megaphone,
    Rocket,
    Ticket,
    Smartphone,
    Magnet,
    Users,
    BarChart3
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CampaignBlueprint from "@/components/teacher-portal/marketing/CampaignBlueprint";
import DiscountEngine from "@/components/teacher-portal/marketing/DiscountEngine";
import SocialPostPreviewer from "@/components/teacher-portal/marketing/SocialPostPreviewer";
import LeadMagnetBuilder from "@/components/teacher-portal/marketing/LeadMagnetBuilder";
import AffiliateDashboard from "@/components/teacher-portal/marketing/AffiliateDashboard";

export default function MarketingPage() {
    return (
        <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <Megaphone className="h-8 w-8 text-indigo-600" />
                    Growth Command Center
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Launch courses, manage campaigns, and grow your audience.
                </p>
            </div>

            {/* Main Tabs */}
            <Tabs defaultValue="campaigns" className="w-full space-y-6">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
                    <TabsTrigger value="campaigns" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Rocket className="h-4 w-4" />
                        <span className="hidden md:inline">Launchpad</span>
                        <span className="md:hidden">Launch</span>
                    </TabsTrigger>
                    <TabsTrigger value="discounts" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Ticket className="h-4 w-4" />
                        <span className="hidden md:inline">Coupons</span>
                        <span className="md:hidden">Codes</span>
                    </TabsTrigger>
                    <TabsTrigger value="social" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Smartphone className="h-4 w-4" />
                        <span className="hidden md:inline">Social Studio</span>
                        <span className="md:hidden">Social</span>
                    </TabsTrigger>
                    <TabsTrigger value="leads" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Magnet className="h-4 w-4" />
                        <span className="hidden md:inline">Lead Magnets</span>
                        <span className="md:hidden">Leads</span>
                    </TabsTrigger>
                    <TabsTrigger value="affiliates" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Users className="h-4 w-4" />
                        <span className="hidden md:inline">Affiliates</span>
                        <span className="md:hidden">Partners</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="campaigns" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Campaign Blueprint</h2>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Live</span>
                    </div>
                    <CampaignBlueprint />
                </TabsContent>

                <TabsContent value="discounts" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Discount Engine</h2>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Live</span>
                    </div>
                    <DiscountEngine />
                </TabsContent>

                <TabsContent value="social" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Social Post Previewer</h2>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Live</span>
                    </div>
                    <SocialPostPreviewer />
                </TabsContent>

                <TabsContent value="leads" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Lead Magnet Builder</h2>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Live</span>
                    </div>
                    <LeadMagnetBuilder />
                </TabsContent>

                <TabsContent value="affiliates" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Affiliate Dashboard</h2>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Live</span>
                    </div>
                    <AffiliateDashboard />
                </TabsContent>
            </Tabs>
        </div>
    );
}
