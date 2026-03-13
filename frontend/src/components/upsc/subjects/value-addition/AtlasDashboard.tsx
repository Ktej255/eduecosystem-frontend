"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trees, Mountain, Droplets, Zap, ChevronRight, Map, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function AtlasDashboard() {
    const maps = [
        {
            id: 'national-parks',
            title: 'National Parks',
            description: 'Interactive map of 106+ National Parks with flora, fauna and river data.',
            icon: Trees,
            href: '/student/upsc/value-addition/national-parks',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 dark:bg-emerald-900/20'
        },
        {
            id: 'biosphere-reserves',
            title: 'Biosphere Reserves',
            description: 'Registry of all 18 Biosphere Reserves and UNESCO MAB sites.',
            icon: Map,
            href: '/student/upsc/value-addition/biosphere-reserves',
            color: 'text-teal-600',
            bg: 'bg-teal-50 dark:bg-teal-900/20'
        },
        {
            id: 'wetlands',
            title: 'Ramsar Wetlands',
            description: 'Master list of 80+ Ramsar sites with ecological significance.',
            icon: Droplets,
            href: '/student/upsc/value-addition/wetlands',
            color: 'text-blue-600',
            bg: 'bg-blue-50 dark:bg-blue-900/20'
        },
        {
            id: 'wildlife-sanctuaries',
            title: 'Wildlife Sanctuaries',
            description: 'Critical sanctuaries and high-yielding locations for Prelims.',
            icon: Mountain,
            href: '/student/upsc/value-addition/wildlife-sanctuaries',
            color: 'text-amber-600',
            bg: 'bg-amber-50 dark:bg-amber-900/20'
        },
        {
            id: 'minerals',
            title: 'Mineral Resources',
            description: 'Distribution of critical minerals and industrial clusters in India.',
            icon: Zap,
            href: '/student/upsc/value-addition/minerals',
            color: 'text-orange-600',
            bg: 'bg-orange-50 dark:bg-orange-900/20'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/student/upsc/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Map className="h-6 w-6 text-emerald-600" />
                        Interactive Atlas Room
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Spatial intelligence modules for Geography and Environment.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {maps.map((item) => (
                    <Link key={item.id} href={item.href}>
                        <Card className="group hover:border-emerald-500 transition-all cursor-pointer h-full">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-emerald-600 transition-colors">
                                    Launch Module <ChevronRight className="w-4 h-4" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
