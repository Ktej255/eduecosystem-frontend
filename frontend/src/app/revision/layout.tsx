
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Global Revision Portal | Unlock Your Potential",
    description: "A customized revision portal for UPSC, NEET, JEE and more. Join the elite learning ecosystem.",
};

export default function RevisionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-grapho-cream dark:bg-neutral-900 text-foreground selection:bg-grapho-gold selection:text-white overflow-x-hidden">
            {/* Potentially a specific Header for Revision Portal could go here */}
            <main className="flex flex-col relative w-full">
                {children}
            </main>
            {/* Footer can be added here */}
        </div>
    );
}
