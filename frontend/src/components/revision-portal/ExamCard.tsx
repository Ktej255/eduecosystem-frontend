
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Trophy, Users } from "lucide-react";
import { ExamData } from "@/data/exams";
import { motion } from "framer-motion";

interface ExamCardProps {
    exam: ExamData;
    index: number;
}

export default function ExamCard({ exam, index }: ExamCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            <Link href={`/revision/${exam.id}`} className="flex flex-col h-full">
                {/* Image Placeholder or Gradient Header */}
                <div className={`h-32 w-full relative overflow-hidden ${exam.category === 'Civil Services' ? 'bg-gradient-to-r from-orange-100 to-amber-100' :
                        exam.category === 'Medical' ? 'bg-gradient-to-r from-emerald-100 to-teal-100' :
                            'bg-gradient-to-r from-blue-100 to-indigo-100'
                    }`}>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-neutral-600 shadow-sm border border-neutral-100">
                        {exam.category}
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-blue transition-colors">
                            {exam.shortName}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <h4 className="text-sm font-medium text-neutral-500 mb-3">{exam.name}</h4>

                    <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 mb-6 flex-1">
                        {exam.description}
                    </p>

                    <div className="space-y-3">
                        {exam.features.slice(0, 2).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center text-xs font-medium text-neutral-400">
                        <div className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            <span>25k+ Students</span>
                        </div>
                        <span className="text-primary-blue font-bold group-hover:underline decoration-wavy">
                            Explore Portal
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
