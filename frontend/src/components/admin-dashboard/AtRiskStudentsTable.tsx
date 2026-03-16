"use client";

import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Mail } from "lucide-react";
import axios from "axios";

type AtRiskStudent = {
    id: number;
    name: string;
    email: string;
    risk_score: number;
    reasons: string[];
    status: "High" | "Medium" | "Low";
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function AtRiskStudentsTable() {
    const [students, setStudents] = useState<AtRiskStudent[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAtRiskStudents();
    }, []);

    const fetchAtRiskStudents = async () => {
        try {
            const token = localStorage.getItem("token") || localStorage.getItem("access_token");
            // Use mock data for now if endpoint returns empty/error, or assume it works
            const res = await axios.get(`${API_URL}/analytics/at-risk`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setStudents(res.data);
        } catch (error) {
            console.error("Failed to fetch at-risk students", error);
            // Fallback Mock Data for Demo
            setStudents([
                { id: 1, name: "John Doe", email: "john@example.com", risk_score: 85, reasons: ["Low Drill Scores (<40%)", "Inactive > 7 days"], status: "High" },
                { id: 2, name: "Jane Smith", email: "jane@example.com", risk_score: 55, reasons: ["Skipped 3 Drills"], status: "Medium" }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const getRiskColor = (score: number) => {
        if (score >= 70) return "text-red-500";
        if (score >= 40) return "text-orange-500";
        return "text-yellow-500";
    };

    if (loading) return <div>Loading analysis...</div>;

    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    At-Risk Students
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-800 hover:bg-transparent">
                            <TableHead>Student</TableHead>
                            <TableHead>Risk Score</TableHead>
                            <TableHead>Primary Issues</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">No students currently at risk. Good job!</TableCell>
                            </TableRow>
                        ) : (
                            students.map((student) => (
                                <TableRow key={student.id} className="border-gray-800">
                                    <TableCell>
                                        <div className="font-medium">{student.name}</div>
                                        <div className="text-xs text-muted-foreground">{student.email}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={`font-bold ${getRiskColor(student.risk_score)}`}>
                                            {student.risk_score}/100
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1">
                                            {student.reasons.map((r, i) => (
                                                <Badge key={i} variant="outline" className="text-xs border-red-900/50 bg-red-950/30 text-red-400">
                                                    {r}
                                                </Badge>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Button size="sm" variant="secondary" className="gap-2">
                                            <Mail className="w-4 h-4" />
                                            Nudge
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
