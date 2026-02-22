"use client";

import { HallOfMasters } from "@/components/dashboard/HallOfMasters";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function HallOfMastersPage() {
    return (
        <main className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-6 left-6 z-50">
                <Link href="/student">
                    <Button variant="ghost" className="text-white hover:bg-card/10 gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Return to Dashboard
                    </Button>
                </Link>
            </div>

            <HallOfMasters />

            <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-2">
                <div className="px-4 py-2 bg-card/5 backdrop-blur-md border border-white/10 rounded-lg text-right">
                    <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Global Ranking</p>
                    <p className="text-lg font-bold text-white">#1 K Tej</p>
                </div>
                <div className="px-4 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                    <p className="text-[10px] text-cyan-400 font-bold">LEGENDARY STATUS</p>
                </div>
            </div>
        </main>
    );
}
