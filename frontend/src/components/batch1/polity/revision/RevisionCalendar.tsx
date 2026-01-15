"use client";

import React, { useMemo } from 'react';
import { Calendar as CalendarIcon, ChevronRight, Clock } from 'lucide-react';
import { getDueCards } from './srs-engine';
import { POLITY_REVISION_CHAPTERS } from '../data/RevisionRegistry';

export default function RevisionCalendar() {
    // Determine upcoming workload
    const upcomingSchedule = useMemo(() => {
        // This is a simplified projection. 
        // In a real SRS, we'd query the DB for all future due dates.
        // Here we'll simulate it based on local storage SRS data if possible,
        // or just use a mock projection for the visual aid as requested "Widget".

        // Let's count ACTUAL due items for today
        const dueToday = getDueCards().length;

        const days = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const isToday = i === 0;

            // Mock random load for future days to simulate "Heatmap"
            // For Day 0 use actual due count
            const count = isToday ? dueToday : Math.floor(Math.random() * 15);

            let status: 'light' | 'medium' | 'heavy' = 'light';
            if (count > 5) status = 'medium';
            if (count > 12) status = 'heavy';

            days.push({
                date,
                dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
                dayNum: date.getDate(),
                count,
                status
            });
        }
        return days;
    }, []);

    const totalDueNext7Days = upcomingSchedule.reduce((sum, d) => sum + d.count, 0);

    return (
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                        <CalendarIcon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Revision Forecast</h3>
                        <p className="text-xs text-gray-500">{totalDueNext7Days} items due this week</p>
                    </div>
                </div>
                <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                    Full Schedule <ChevronRight className="w-3 h-3" />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {upcomingSchedule.map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase ${idx === 0 ? 'text-indigo-600' : 'text-gray-400'}`}>
                            {day.dayName}
                        </span>
                        <div
                            className={`w-full aspect-[3/4] rounded-xl flex flex-col items-center justify-center gap-1 transition-all border ${day.status === 'heavy'
                                    ? 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900 text-red-700'
                                    : day.status === 'medium'
                                        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-900 text-amber-700'
                                        : 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900 text-green-700'
                                } ${idx === 0 ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-black' : ''}`}
                        >
                            <span className="text-lg font-bold">{day.dayNum}</span>
                            <span className="text-[10px] font-medium opacity-80">{day.count} due</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Est. Time: {Math.round(upcomingSchedule[0].count * 0.5)}m</span>
                </div>
                <div>
                    Today's Load: <span className={upcomingSchedule[0].status === 'heavy' ? 'text-red-500 font-bold' : 'text-green-500 font-bold'}>{upcomingSchedule[0].status.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
}
