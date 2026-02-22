"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from 'lucide-react';

export default function CSATReport() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <BrainCircuit className="h-8 w-8 text-indigo-500" />
                <div>
                    <CardTitle>CSAT Performance</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-8">
                    CSAT Analytics visualization coming soon.
                </p>
            </CardContent>
        </Card>
    );
}
