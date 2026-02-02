"use client";

import React from 'react';
import { useCRMStore } from './store/CRMStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flame, ShoppingCart, Activity, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LeadWarmthTracker() {
    const { leads } = useCRMStore();

    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    Heat Map & Lead Warmth
                </CardTitle>
                <p className="text-xs text-neutral-500">Real-time engagement scoring based on drills, logins, and intent.</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {leads.map((lead, i) => (
                        <motion.div
                            key={lead.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                {/* Warmth Indicator */}
                                <div className={`
                                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2
                                    ${lead.status === 'Hot' ? 'bg-red-50 text-red-600 border-red-200' :
                                        lead.status === 'Warm' ? 'bg-orange-50 text-orange-600 border-orange-200' :
                                            'bg-blue-50 text-blue-600 border-blue-200'}
                                `}>
                                    {lead.warmthScore}
                                </div>

                                <div>
                                    <div className="font-bold text-sm text-neutral-800 dark:text-neutral-200">{lead.name}</div>
                                    <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                                        <Badge variant="outline" className={`
                                            h-4 px-1 rounded border-0 text-[10px] font-bold uppercase
                                            ${lead.status === 'Hot' ? 'bg-red-100 text-red-700' :
                                                lead.status === 'Warm' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-blue-100 text-blue-700'}
                                        `}>
                                            {lead.status}
                                        </Badge>
                                        <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> {lead.drillsCompleted} Drills</span>
                                        {lead.storeVisits > 0 && <span className="flex items-center gap-1 text-purple-500"><ShoppingCart className="w-3 h-3" /> {lead.storeVisits} Visits</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Flame Animation (Only for Hot leads) */}
                            {lead.status === 'Hot' && (
                                <Flame className="w-5 h-5 text-red-500 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
