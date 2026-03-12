"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon } from 'lucide-react';

export default function EveningReport() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Moon className="h-8 w-8 text-indigo-500" />
                <div>
                    <CardTitle>Evening Session Report</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-8">
                    Evening Session Analytics visualization coming soon.
                </p>
            </CardContent>
        </Card>
    );
}
