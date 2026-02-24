"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function JourneyNavigation() {
    const pathname = usePathname();
    const router = useRouter();

    // Only show the navigation if we are deeper than the root sadhana portal
    const isRoot = pathname === "/student/batch2/sadhana" || pathname === "/student/batch2/sadhana/";
    const isBatch2Root = pathname === "/student/batch2" || pathname === "/student/batch2/";

    // Don't render on entirely unrelated pages if this layout accidentally wraps them, though the layout will be specific to sadhana 
    if (isRoot || isBatch2Root) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-6 left-6 z-50 flex gap-2"
            >
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-sm border border-amber-200/50 text-amber-950 font-bold text-sm hover:bg-amber-50 hover:border-amber-400 transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 text-amber-600 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>
                <button
                    onClick={() => router.push("/student/batch2/sadhana")}
                    className="flex items-center justify-center px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-amber-200/50 text-amber-950 hover:bg-amber-50 hover:border-amber-400 transition-all gap-2 font-bold text-sm"
                    title="Return to Journey Map"
                >
                    <Map className="w-4 h-4 text-amber-600" />
                    Journey Map
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
