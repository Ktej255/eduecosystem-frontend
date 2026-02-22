"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database } from "lucide-react";
import Link from 'next/link';

export default function ReportsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <Database className="w-16 h-16 text-blue-200 mb-4" />
            <h1 className="text-2xl font-bold mb-2">Reports & Indices</h1>
            <p className="text-muted-foreground mb-6">Data compilation in progress.</p>
            <Link href="/student/value-addition">
                <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
            </Link>
        </div>
    );
}
