"use client";

import StudentOversight from "@/components/admin/StudentOversight";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminStudentsPage() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                        <Shield className="w-8 h-8 text-blue-600" />
                        Student Management
                    </h1>
                    <p className="text-muted-foreground mt-1">Comprehensive view of student journeys and engagement.</p>
                </div>
            </div>

            <StudentOversight />
        </div>
    );
}
