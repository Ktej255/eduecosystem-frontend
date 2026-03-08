import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, History } from 'lucide-react';
import { TimelineEvent } from './data/ancient-types-27';

interface TimelineProps {
    events: TimelineEvent[];
    chapterId: number;
}

const AncientHistoryTimeline: React.FC<TimelineProps> = ({ events, chapterId }) => {
    if (!events || events.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 bg-zinc-900/50 rounded-2xl border border-zinc-800 border-dashed">
                <History className="w-12 h-12 text-zinc-600 mb-4" />
                <p className="text-zinc-500 font-medium">Chronological timeline for Chapter {chapterId} is being visualized...</p>
                <p className="text-zinc-600 text-sm mt-2">Historical events will appear here in vertical sequence.</p>
            </div>
        );
    }

    return (
        <div className="relative py-8 px-4 sm:px-8">
            {/* The Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0 transform sm:-translate-x-1/2 hidden sm:block" />
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-800 sm:hidden" />

            <div className="space-y-12">
                {events.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
                            }`}
                    >
                        {/* Dot on the line */}
                        <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />

                        {/* Content Card */}
                        <div className={`w-full sm:w-[45%] pl-10 sm:pl-0 ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'
                            }`}>
                            <div className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-all group">
                                <div className={`flex items-center gap-2 mb-2 text-amber-500 font-bold ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                    }`}>
                                    <Calendar className="w-4 h-4" />
                                    <span>{item.year}</span>
                                </div>
                                <h4 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                                    {item.event}
                                </h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Space on the other side */}
                        <div className="hidden sm:block w-[45%]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AncientHistoryTimeline;
