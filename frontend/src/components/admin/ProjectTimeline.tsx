import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface Milestone {
    id?: number;
    date: string;
    title: string;
    description: string;
    status: "completed" | "in-progress" | "planned";
    tags: string[];
}

const milestones: Milestone[] = [
    {
        id: 37,
        date: "Feb 12, 2026",
        title: "Day 32 Content (Statutory Bodies & Elections)",
        description: "Deployed Bar Council, CCI, Regional Parties & Elections content.",
        status: "completed",
        tags: ["Content", "Day 32"]
    },
    {
        id: 36,
        date: "Feb 11, 2026",
        title: "Day 31 Content (Special Provisions)",
        description: "Deployed Special Provisions for Certain Classes content.",
        status: "completed",
        tags: ["Content", "Day 31"]
    },
    {
        id: 35,
        date: "Feb 10, 2026",
        title: "Day 30 Content (Public Services & Rights)",
        description: "Deployed Public Services and Govt Liability content.",
        status: "completed",
        tags: ["Content", "Day 30"]
    },
    {
        id: 34,
        date: "Feb 9, 2026",
        title: "Day 29 Content (Other Const Dimensions)",
        description: "Deployed Co-op Societies and Official Language content.",
        status: "completed",
        tags: ["Content", "Day 29"]
    },
    {
        id: 33,
        date: "Feb 8, 2026",
        title: "Day 28 Content (Sunday Mock Test 4)",
        description: "Deployed Week 1-4 Integration Content.",
        status: "completed",
        tags: ["Content", "Day 28"]
    },
    {
        id: 32,
        date: "Feb 7, 2026",
        title: "Day 27 Content (Saturday Revision)",
        description: "Deployed Week 4 Revision content.",
        status: "completed",
        tags: ["Content", "Day 27"]
    },
    {
        id: 31,
        date: "Feb 6, 2026",
        title: "Day 26 Content (Non-Const Bodies 4)",
        description: "Deployed Lokpal and Lokayuktas content.",
        status: "completed",
        tags: ["Content", "Day 26"]
    },
    {
        id: 30,
        date: "Feb 5, 2026",
        title: "Day 25 Content (Non-Const Bodies 3)",
        description: "Deployed CVC and CBI content.",
        status: "completed",
        tags: ["Content", "Day 25"]
    },
    {
        id: 29,
        date: "Feb 4, 2026",
        title: "Day 24 Content (Non-Const Bodies 2)",
        description: "Deployed Central and State Information Commissions content.",
        status: "completed",
        tags: ["Content", "Day 24"]
    },
    {
        id: 28,
        date: "Feb 3, 2026",
        title: "Day 23 Content (Non-Const Bodies 1)",
        description: "Deployed NHRC and SHRC content.",
        status: "completed",
        tags: ["Content", "Day 23"]
    },
    {
        id: 27,
        date: "Feb 2, 2026",
        title: "Day 22 Content (Const Bodies 3)",
        description: "Deployed Attorney General and Advocate General content.",
        status: "completed",
        tags: ["Content", "Day 22"]
    },
    {
        id: 26,
        date: "Feb 1, 2026",
        title: "Day 21 Content (Sunday Mock Test 3)",
        description: "Deployed Integrated Mock Test (Weeks 1, 2, & 3).",
        status: "completed",
        tags: ["Content", "Day 21"]
    },
    {
        id: 25,
        date: "Jan 31, 2026",
        title: "Day 20 Content (Saturday Revision)",
        description: "Deployed Week 3 Revision (Judiciary, Federal, Philosophy, Bodies).",
        status: "completed",
        tags: ["Content", "Day 20"]
    },
    {
        id: 24,
        date: "Jan 30, 2026",
        title: "Day 19 Content (Const Bodies 2)",
        description: "Deployed SPSC, Finance Commission, and NCSC/ST/BC content.",
        status: "completed",
        tags: ["Content", "Day 19"]
    },
    {
        id: 23,
        date: "Jan 29, 2026",
        title: "Day 18 Content (Const Bodies 1)",
        description: "Deployed Election Commission, CAG, and UPSC content.",
        status: "completed",
        tags: ["Content", "Day 18"]
    },
    {
        id: 22,
        date: "Jan 28, 2026",
        title: "Day 17 Content (Philosophy Ext)",
        description: "Deployed DPSP (Ch 9) and Fundamental Duties (Ch 10).",
        status: "completed",
        tags: ["Content", "Day 17"]
    },
    {
        id: 21,
        date: "Jan 27, 2026",
        title: "Day 16 Content (GST & NITI)",
        description: "Deployed GST Council (Art 279A) and NITI Aayog content.",
        status: "completed",
        tags: ["Content", "Day 16"]
    },
    {
        id: 20,
        date: "Jan 26, 2026",
        title: "Day 15 Content (Judiciary Ext)",
        description: "Deployed Subordinate Courts, Tribunals, Judicial Review, and PIL.",
        status: "completed",
        tags: ["Content", "Day 15"]
    },
    {
        id: 19,
        date: "Jan 25, 2026",
        title: "Day 14 Content (Sunday Mock Test)",
        description: "Deployed Week 1 & 2 Integrated Mock Test (All Topics).",
        status: "completed",
        tags: ["Content", "Day 14"]
    },
    {
        id: 18,
        date: "Jan 24, 2026",
        title: "Day 13 Content (Saturday Revision)",
        description: "Deployed Week 2 Revision: Parliament, Judiciary, State Legislature.",
        status: "completed",
        tags: ["Content", "Day 13"]
    },
    {
        id: 17,
        date: "Jan 23, 2026",
        title: "Day 12 Content (State Legislature)",
        description: "Deployed State Legislature (Ch 36): Vidhan Sabha, Vidhan Parishad, Art 169.",
        status: "completed",
        tags: ["Content", "Day 12"]
    },
    {
        id: 16,
        date: "Jan 22, 2026",
        title: "Day 11 Content (Integrated Judiciary)",
        description: "Deployed Judiciary: Supreme Court, High Courts, and Subordinate Courts.",
        status: "completed",
        tags: ["Content", "Day 11"]
    },
    {
        id: 15,
        date: "Jan 21, 2026",
        title: "Day 10 Content (Committees & Forums)",
        description: "Deployed Parliament Part 3: Financial & Standing Committees, Forums.",
        status: "completed",
        tags: ["Content", "Day 10"]
    },
    {
        id: 14,
        date: "Jan 20, 2026",
        title: "Day 9 Content (Parliament Part 2)",
        description: "Deployed Parliament Part 2: Legislative Procedure, Bills (Money/Financial), and Budget.",
        status: "completed",
        tags: ["Content", "Day 9"]
    },
    {
        id: 13,
        date: "Jan 19, 2026",
        title: "Day 8 Content (Parliament Part 1)",
        description: "Deployed Week 2 Content: Parliament (Organization, Composition, Sessions).",
        status: "completed",
        tags: ["Content", "Day 8"]
    },
    {
        id: 12,
        date: "Jan 18, 2026",
        title: "Day 7 Content (Sunday Revision)",
        description: "Deployed Sunday Revision content (Distinctions & Conceptual MCQs).",
        status: "completed",
        tags: ["Content", "Day 7"]
    },
    {
        id: 11,
        date: "Jan 17, 2026",
        title: "Day 6 Content (Week 1 Revision)",
        description: "Deployed 20 Revision Flashcards and 60 Mixed MCQs for Week 1 Mock Test.",
        status: "completed",
        tags: ["Content", "Day 6"]
    },
    {
        id: 10,
        date: "Jan 16, 2026",
        title: "Day 5 Content (Mirror Executives)",
        description: "Deployed 20 Flashcards and 60 MCQs for Ch 20, 21, 31, 32, 33 (PM, CM, Governor, Councils).",
        status: "completed",
        tags: ["Content", "Day 5"]
    },
    {
        id: 9,
        date: "Jan 15, 2026",
        title: "Day 4 Content (President & VP)",
        description: "Deployed 20 Flashcards and 60 MCQs for Ch 18 & 19. Added subtopics to registry.",
        status: "completed",
        tags: ["Content", "Day 4"]
    },
    {
        id: 8,
        date: "Jan 13, 2026",
        title: "Day 2 Content (Centre-State Relations)",
        description: "Deployed 20 Flashcards and 60 MCQs for Chapter 15. Content mapped to Day 2 Evening Session.",
        status: "completed",
        tags: ["Content", "Day 2"]
    },
    {
        id: 7,
        date: "Jan 12, 2026",
        title: "Global Funnels & Pomodoro Polish",
        description: "Launched dedicated landing pages for Meditation, UPSC, and Batch 2. Implemented strict Pomodoro timers (15s Flashcards, 60s MCQs).",
        status: "completed",
        tags: ["Frontend", "Marketing", "UX"]
    },
    {
        date: "Jan 12, 2026",
        title: "Batch 2 (Upanishads) Foundation",
        description: "Created the data structure and reader interface for the Upanishads Canon.",
        status: "completed",
        tags: ["Content", "Batch 2"]
    },
    {
        date: "Jan 11, 2026",
        title: "Graphotherapy Module",
        description: "Full implementation of Graphotherapy analysis funnel and dashboard integration.",
        status: "completed",
        tags: ["Feature", "Graphotherapy"]
    },
    {
        date: "Jan 10, 2026",
        title: "CSAT & PDF Tools",
        description: "Integrated CSAT Practice sessions. Built PDF Optimizer tools for NotebookLM workflow.",
        status: "completed",
        tags: ["Tools", "CSAT"]
    },
    {
        id: 7,
        date: "Jan 12, 2026",
        title: "Phase 14-17: Global Pages & Content Polish",
        description: "Launched Global Landing Pages for Meditation, UPSC, and Self-Learning. Implemented 60-Question Timer logic and seeded Week 1 Content.",
        status: "completed",
        tags: ["Frontend", "Content", "Launch"]
    },
    {
        id: 6,
        date: "Jan 11, 2026",
        title: "Phase 12: Admin & User Management",
        description: "Deployed AI-powered voice recording and analysis for Flashcards.",
        status: "completed",
        tags: ["AI", "Flashcards"]
    },
    {
        date: "Jan 05, 2026",
        title: "Voice Analysis Engine",
        description: "Deployed AI-powered voice recording and analysis for Flashcards.",
        status: "completed",
        tags: ["AI", "Flashcards"]
    },
    {
        date: "Jan 02, 2026",
        title: "Batch 1.1 Revision Portal",
        description: "Official launch of the Batch 1.1 Revision Portal with Day 1-9 content mapping.",
        status: "completed",
        tags: ["Launch", "Batch 1"]
    },
    {
        date: "Dec 25, 2025",
        title: "Admin & Teacher Portals",
        description: "Released V1 of the Admin Dashboard and Teacher Content Upload Portal.",
        status: "completed",
        tags: ["Admin", "Teacher"]
    },
    {
        date: "Dec 15, 2025",
        title: "Auth & RBAC System",
        description: "Implemented secure Authentication, SSO, and Role-Based Access Control.",
        status: "completed",
        tags: ["Security", "Auth"]
    },
    {
        date: "Dec 01, 2025",
        title: "Frontend Architecture",
        description: "Setup Next.js 14, TailwindCSS, and Component Design System.",
        status: "completed",
        tags: ["Architecture", "Design"]
    },
    {
        date: "Nov 20, 2025",
        title: "Project Inception",
        description: "Initial scoping, requirements gathering, and repository initialization.",
        status: "completed",
        tags: ["Planning"]
    }
];

export default function ProjectTimeline() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-indigo-600" />
                    Project Timeline & Milestones
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative pl-8 border-l-2 border-border space-y-8 my-4">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="relative">
                            {/* Dot on line */}
                            <div className={`absolute -left-[41px] p-1 rounded-full bg-card border-2 ${milestone.status === 'completed' ? 'border-green-500 text-green-500' :
                                milestone.status === 'in-progress' ? 'border-blue-500 text-blue-500' : 'border-border text-muted-foreground'
                                }`}>
                                {milestone.status === 'completed' ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                                <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
                                <span className="text-sm font-medium text-muted-foreground font-mono">{milestone.date}</span>
                            </div>

                            <p className="text-muted-foreground dark:text-muted-foreground mb-2 max-w-2xl">{milestone.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {milestone.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
