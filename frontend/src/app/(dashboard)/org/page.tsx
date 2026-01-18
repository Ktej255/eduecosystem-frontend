"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SkillsMatrix } from "@/components/b2b/SkillsMatrix";
import { Users, BookOpen, Activity, Zap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function OrgDashboardPage() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const token = localStorage.getItem("token") || localStorage.getItem("access_token");
            const res = await axios.get(`${API_URL}/api/v1/b2b/orgs/dashboard`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setData(res.data);
        } catch (error) {
            console.error("Failed to fetch org dashboard", error);
            // Fallback or demo mode handled by backend
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading Organization Stats...</div>;
    if (!data) return <div className="p-8 text-center">Org Dashboard Unavailable.</div>;

    return (
        <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                        {data.org_name}
                    </h1>
                    <p className="text-gray-400">Corporate Training Portal</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-500">Invite Employees</Button>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <KPICard title="Total Employees" value={data.total_employees} icon={Users} color="text-blue-500" />
                <KPICard title="Active Learners" value={data.active_learners} icon={Activity} color="text-green-500" />
                <KPICard title="Avg Skill Score" value={`${data.avg_skill_score}%`} icon={Zap} color="text-yellow-500" />
                <KPICard title="Courses Completed" value="45" icon={BookOpen} color="text-purple-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Skills Matrix */}
                <SkillsMatrix data={data.skills_matrix} />

                {/* Engagement Chart Analysis */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                        <CardTitle>Learning Engagement (Weekly)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={[
                                { day: "Mon", active: 10 },
                                { day: "Tue", active: 45 },
                                { day: "Wed", active: 30 },
                                { day: "Thu", active: 55 },
                                { day: "Fri", active: 40 },
                                { day: "Sat", active: 15 },
                                { day: "Sun", active: 5 }
                            ]}>
                                <XAxis dataKey="day" stroke="#888888" />
                                <YAxis stroke="#888888" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                                    itemStyle={{ color: "#fff" }}
                                />
                                <Bar dataKey="active" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function KPICard({ title, value, icon: Icon, color }: any) {
    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-100">{value}</h3>
                </div>
                <div className={`p-3 rounded-full bg-gray-800 ${color}`}>
                    <Icon className="w-6 h-6" />
                </div>
            </CardContent>
        </Card>
    );
}
