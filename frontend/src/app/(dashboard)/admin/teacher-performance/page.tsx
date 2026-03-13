"use client";

import TeacherOversight from "@/components/admin/TeacherOversight";
import { UserCheck } from "lucide-react";

export default function TeacherPerformancePage() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight uppercase">
                        <UserCheck className="w-8 h-8 text-indigo-500" />
                        Teacher Oversight
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 font-medium">
                        Comprehensive performance tracking and scoring for all instructors.
                    </p>
                </div>
            </div>

            <TeacherOversight />
        </div>
    );
}
