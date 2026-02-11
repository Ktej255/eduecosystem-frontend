"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Map, Clock, CheckCircle2, AlertTriangle, User } from "lucide-react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function SecurityAlertsDashboard() {
    const [alerts, setAlerts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAlerts();
    }, []);

    const fetchAlerts = async () => {
        try {
            const token = localStorage.getItem("access_token");
            const res = await axios.get(`${API_URL}/api/v1/admin/security/alerts`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (Array.isArray(res.data)) {
                setAlerts(res.data);
            } else {
                setAlerts([]);
            }
        } catch (error) {
            console.error("Failed to fetch security alerts", error);
        } finally {
            setLoading(false);
        }
    };

    const resolveAlert = async (id: number) => {
        const notes = prompt("Enter resolution notes:");
        if (!notes) return;

        try {
            const token = localStorage.getItem("access_token");
            await axios.post(`${API_URL}/api/v1/admin/security/alerts/${id}/resolve?notes=${encodeURIComponent(notes)}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchAlerts();
        } catch (error) {
            alert("Failed to resolve alert");
        }
    };

    if (loading) return <div>Checking security vault...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <ShieldAlert className="text-red-500" />
                    Ghost Login Alerts
                </h2>
                <Badge variant="outline" className="border-red-500/50 text-red-500 animate-pulse">
                    {alerts.length} Critical Issues
                </Badge>
            </div>

            {alerts.length === 0 ? (
                <Card className="bg-black border-gray-800 text-center py-20">
                    <CardContent>
                        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4 opacity-20" />
                        <p className="text-gray-500">No suspicious login activity detected.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {alerts.map((alert) => (
                        <Card key={alert.id} className="bg-black border-red-900/30 hover:border-red-500/50 transition-colors">
                            <CardContent className="p-0">
                                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-800">
                                    {/* User Section */}
                                    <div className="p-4 md:w-1/4 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-red-950 flex items-center justify-center border border-red-500/30">
                                            <User className="text-red-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-200">{alert.user_name || "Unknown User"}</div>
                                            <div className="text-xs text-gray-500 truncate">{alert.user_email}</div>
                                        </div>
                                    </div>

                                    {/* Conflict Logins */}
                                    <div className="p-4 md:w-2/4 grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <div className="text-[10px] text-gray-500 uppercase font-bold flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> Login A
                                            </div>
                                            <div className="text-sm font-mono text-gray-300">{alert.login_a.ip}</div>
                                            <div className="text-[10px] text-gray-400">{new Date(alert.login_a.time).toLocaleString()}</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-[10px] text-red-500 uppercase font-bold flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> Conflict B
                                            </div>
                                            <div className="text-sm font-mono text-red-400 font-bold">{alert.login_b.ip}</div>
                                            <div className="text-[10px] text-red-400/70">{new Date(alert.login_b.time).toLocaleString()}</div>
                                        </div>
                                    </div>

                                    {/* Distance/Risk */}
                                    <div className="p-4 md:w-1/4 flex flex-col justify-between">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <Map className="w-4 h-4" /> ~{alert.distance_km}km
                                            </div>
                                            <div className="px-2 py-0.5 bg-red-500/20 text-red-500 text-[10px] font-black rounded uppercase tracking-widest">
                                                RISK: {alert.risk_score}/10
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                className="flex-1 text-[10px] uppercase font-bold"
                                                onClick={() => resolveAlert(alert.id)}
                                            >
                                                Resolve
                                            </Button>
                                            <Button size="sm" variant="outline" className="text-[10px] uppercase border-gray-700 bg-transparent">
                                                Ban Account
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
