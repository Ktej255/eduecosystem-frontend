"use client";

import { useState } from "react";
import {
    AlertTriangle,
    TrendingDown,
    Mail,
    Phone,
    MoreHorizontal,
    UserX,
    Clock,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface StudentRiskProfile {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    attendance: number;
    avgScore: number;
    riskLevel: "critical" | "high" | "moderate";
    lastActive: string;
    courses: string[];
}

const mockAtRiskStudents: StudentRiskProfile[] = [
    {
        id: "s1",
        name: "Rohan Das",
        email: "rohan.d@example.com",
        attendance: 35,
        avgScore: 42,
        riskLevel: "critical",
        lastActive: "5 days ago",
        courses: ["Polity Batch 1", "CSAT"]
    },
    {
        id: "s2",
        name: "Priya Sharma",
        email: "priya.s@example.com",
        attendance: 45,
        avgScore: 38,
        riskLevel: "critical",
        lastActive: "2 days ago",
        courses: ["Geography Optional"]
    },
    {
        id: "s3",
        name: "Amit Kumar",
        email: "amit.k@example.com",
        attendance: 55,
        avgScore: 48,
        riskLevel: "high",
        lastActive: "1 day ago",
        courses: ["GS Foundation"]
    },
    {
        id: "s4",
        name: "Sneha Gupta",
        email: "sneha.g@example.com",
        attendance: 20,
        avgScore: 0,
        riskLevel: "critical",
        lastActive: "10 days ago",
        courses: ["Essay Writing"]
    }
];

export default function AtRiskDetector() {
    const [students, setStudents] = useState<StudentRiskProfile[]>(mockAtRiskStudents);
    const [contacted, setContacted] = useState<string[]>([]);

    const markContacted = (id: string) => {
        setContacted(prev => [...prev, id]);
    };

    const getRiskColor = (level: string) => {
        switch (level) {
            case "critical": return "bg-red-100 text-red-700 border-red-200";
            case "high": return "bg-orange-100 text-orange-700 border-orange-200";
            default: return "bg-yellow-100 text-yellow-700 border-yellow-200";
        }
    };

    return (
        <Card className="border-red-100 dark:border-red-900 shadow-sm bg-red-50/30 dark:bg-red-950/10">
            <CardHeader className="pb-3 border-b border-red-100 dark:border-red-900/30">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            At-Risk Students
                            <Badge variant="destructive" className="ml-2 h-5 text-xs">
                                {students.length} Critical
                            </Badge>
                        </CardTitle>
                        <CardDescription>
                            Students with attendance &lt; 50% or scores &lt; 40%
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="divide-y divide-red-100 dark:divide-red-900/30">
                    {students.map((student) => (
                        <div key={student.id} className="p-4 flex flex-col md:flex-row items-start md:items-center gap-4 hover:bg-card dark:hover:bg-slate-900 transition-colors">
                            {/* Student Info */}
                            <div className="flex items-center gap-3 min-w-[200px]">
                                <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                                    <AvatarImage src={student.avatar} />
                                    <AvatarFallback className="bg-red-100 text-red-600 font-bold">
                                        {student.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-semibold text-sm text-foreground">{student.name}</h4>
                                    <p className="text-xs text-muted-foreground">{student.email}</p>
                                </div>
                            </div>

                            {/* Risk Metrics */}
                            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Attendance</span>
                                    <div className="flex items-center gap-2">
                                        <Progress value={student.attendance} className="h-1.5 w-16 bg-red-100 [&>div]:bg-red-500" />
                                        <span className="text-xs font-bold text-red-600">{student.attendance}%</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Avg. Score</span>
                                    <div className="flex items-center gap-2">
                                        <TrendingDown className="h-3 w-3 text-red-500" />
                                        <span className="text-xs font-bold text-muted-foreground">{student.avgScore}%</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Last Active</span>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-3 w-3 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground dark:text-muted-foreground">{student.lastActive}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Risk Level</span>
                                    <Badge variant="outline" className={cn("text-[10px] h-5 border", getRiskColor(student.riskLevel))}>
                                        {student.riskLevel}
                                    </Badge>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 ml-auto mt-2 md:mt-0">
                                {contacted.includes(student.id) ? (
                                    <Button disabled variant="outline" size="sm" className="h-8 text-green-600 border-green-200 bg-green-50">
                                        <CheckCircle2 className="h-3 w-3 mr-2" /> Message Sent
                                    </Button>
                                ) : (
                                    <Button onClick={() => markContacted(student.id)} variant="default" size="sm" className="h-8 bg-red-600 hover:bg-red-700 shadow-sm">
                                        <Mail className="h-3 w-3 mr-2" /> Contact
                                    </Button>
                                )}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Intervention</DropdownMenuLabel>
                                        <DropdownMenuItem><Phone className="h-3 w-3 mr-2" /> Call Student</DropdownMenuItem>
                                        <DropdownMenuItem><UserX className="h-3 w-3 mr-2" /> Schedule 1-on-1</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
