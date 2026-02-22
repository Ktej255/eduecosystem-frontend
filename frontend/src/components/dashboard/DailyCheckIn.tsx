"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sunrise, CheckCircle, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function DailyCheckIn() {
    const [checkedIn, setCheckedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const token = localStorage.getItem("token") || localStorage.getItem("access_token");
                if (!token) return;

                const res = await axios.get(`${API_URL}/api/v1/gamification/streaks`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const checkin = res.data.daily_checkin;
                if (checkin) {
                    const lastDate = new Date(checkin.last_active).toDateString();
                    const today = new Date().toDateString();
                    if (lastDate === today) {
                        setCheckedIn(true);
                        setStreak(checkin.current);
                    }
                }
            } catch (error) {
                console.error("Failed to check daily checkin status", error);
            }
        };
        checkStatus();
    }, []);

    const handleCheckIn = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token") || localStorage.getItem("access_token");
            const res = await axios.post(`${API_URL}/api/v1/gamification/activity/daily_checkin`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setCheckedIn(true);
            setStreak(res.data.current_streak);
            toast.success("Daily Sadhana Recorded! 🔥");
        } catch (error) {
            toast.error("Failed to check in");
        } finally {
            setLoading(false);
        }
    };

    const is5AMClub = () => {
        const hour = new Date().getHours();
        return hour >= 4 && hour < 6;
    };

    return (
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200 dark:border-orange-800">
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Sunrise className="w-5 h-5 text-orange-600" />
                    Daily Sadhana
                </CardTitle>
            </CardHeader>
            <CardContent>
                {checkedIn ? (
                    <div className="text-center py-2 space-y-2">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                        <p className="font-semibold text-green-700 dark:text-green-400">Checked In!</p>
                        <p className="text-xs text-muted-foreground">Streak: {streak} days</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                            {is5AMClub()
                                ? "You're up early! Join the 5AM Club."
                                : "Mark your daily progress."}
                        </p>
                        <Button
                            onClick={handleCheckIn}
                            disabled={loading}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Check In Now
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
