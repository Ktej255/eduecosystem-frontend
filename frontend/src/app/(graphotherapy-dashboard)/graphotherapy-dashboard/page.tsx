"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight, Star, Flame, Trophy, Coins } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { TimeCapsule } from "@/components/graphotherapy/dashboard/TimeCapsule";
import { Level4OfferModal } from "@/components/graphotherapy/dashboard/Level4OfferModal";
import { useAuth } from "@/contexts/auth-context";

export default function GraphotherapyDashboard() {
    const { user } = useAuth(); // Assuming useAuth is imported
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        level: 1,
        day: 1,
        streak: 0,
        coins: 0,
        nextUnlock: false
    });

    const [showDay15Modal, setShowDay15Modal] = useState(false);
    const [showShopModal, setShowShopModal] = useState(false);
    const [showLevel4Modal, setShowLevel4Modal] = useState(false);

    useEffect(() => {
        const fetchOverview = async () => {
            // In a real app, use a proper API client (axios instance)
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/graphotherapy/overview`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (res.ok) {
                    const data = await res.json();
                    setStats(prev => ({
                        ...prev,
                        level: data.current_level,
                        day: data.current_day,
                        streak: data.total_streak,
                        coins: user?.coins || 0, // Use user context coins
                        nextUnlock: data.current_level < 4 && data.levels[data.current_level - 1].is_completed
                    }));

                    // Trigger Day 15 Logic (Real)
                    if (data.current_day === 15 && data.total_streak >= 15 && !localStorage.getItem('day15_reward_seen')) {
                        setShowDay15Modal(true);
                        localStorage.setItem('day15_reward_seen', 'true');
                    }
                }
            } catch (e) {
                console.error("Dashboard fetch failed", e);
            } finally {
                setLoading(false);
            }
        };

        if (user) fetchOverview();
    }, [user]);

    const handleUnlockLevel2 = async () => {
        // Real Purchase Call could go here
        alert("Validation Successful. Unlocking Level 2...");
        setShowDay15Modal(false);
        // Optimistic update
        setStats(prev => ({ ...prev, level: 2 }));
    };

    return (
        <div className="space-y-8">
            {/* Header Stats */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        Your Transformation Journey
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium">
                        Level {stats.level}: {stats.level === 1 ? "The Foundation" : "The Expansion"} • Day {stats.day}/30
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full border border-orange-100 font-bold">
                        <Flame className="w-5 h-5 fill-current" /> {stats.streak} Day Streak
                    </div>
                    <div
                        className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full border border-yellow-100 font-bold cursor-pointer hover:bg-yellow-100 transition-colors"
                        onClick={() => setShowShopModal(true)}
                    >
                        <Star className="w-5 h-5 fill-current" /> {stats.coins} Coins
                    </div>
                </div>
            </div>

            {/* Coin Shop Modal */}
            <Dialog open={showShopModal} onOpenChange={setShowShopModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-yellow-600">
                            <Star className="fill-yellow-600" /> Coin Shop
                        </DialogTitle>
                        <DialogDescription>Redeem your hard-earned consistency.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* Streak Freeze */}
                        <div className="flex items-center justify-between p-3 border rounded-xl hover:bg-slate-50 cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="bg-cyan-100 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">❄️</span>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Streak Freeze</div>
                                    <div className="text-xs text-gray-500">Protect your streak for 1 missed day.</div>
                                </div>
                            </div>
                            <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                                500 <Star className="w-3 h-3 ml-1 fill-yellow-600" />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Progress & Time Capsule */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
                    <div className="flex justify-between text-sm mb-2 text-gray-500">
                        <span>Progress</span>
                        <span>{Math.round((stats.day / 30) * 100)}%</span>
                    </div>
                    <Progress value={(stats.day / 30) * 100} className="h-3" />
                </div>
                <TimeCapsule />
            </div>

            {/* Level Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Level 1 */}
                <Card className={`border-2 shadow-sm transition-all ${stats.level === 1 ? 'border-purple-500 ring-4 ring-purple-50' : 'border-gray-200'}`}>
                    <CardHeader>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2 text-2xl">🌱</div>
                        <CardTitle>Level 1: Foundation</CardTitle>
                        <CardDescription>21 Days to Stability</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700" disabled={stats.level > 1}>
                            {stats.level > 1 ? "Completed" : "Continue Day " + stats.day} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Level 2 */}
                <Card className={`border-2 ${stats.level >= 2 ? 'border-blue-500 bg-white' : 'border-dashed border-gray-300 opacity-70'}`}>
                    <CardHeader>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${stats.level >= 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                            {stats.level >= 2 ? <Trophy className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                        </div>
                        <CardTitle>Level 2: Expansion</CardTitle>
                        <CardDescription>30 Days of Growth</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {stats.level >= 2 ? (
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Enter Level 2</Button>
                        ) : (
                            <Button disabled variant="outline" className="w-full">Locked</Button>
                        )}
                    </CardContent>
                </Card>

                {/* Level 3 */}
                <Card className="opacity-70 border-dashed border-2 bg-red-50/20">
                    <CardHeader>
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2 text-xl">🧬</div>
                        <CardTitle>Level 3: Vitality</CardTitle>
                        <CardDescription>Health Blueprint</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button disabled variant="outline" className="w-full">Locked</Button>
                    </CardContent>
                </Card>

                {/* Level 4 */}
                <Card className="opacity-100 border-dashed border-2 bg-amber-50/20 ring-2 ring-amber-400/20 cursor-pointer hover:ring-amber-400/50 transition-all">
                    <CardHeader>
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2 text-xl">👑</div>
                        <CardTitle>Level 4: Mastery</CardTitle>
                        <CardDescription>Become the Architect</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button
                            variant="outline"
                            className="w-full text-amber-700 border-amber-300 hover:bg-amber-100"
                            onClick={() => setShowLevel4Modal(true)}
                        >
                            Unlock Now
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Level4OfferModal
                isOpen={showLevel4Modal}
                onClose={() => setShowLevel4Modal(false)}
                onPurchase={() => {
                    alert("Redirecting to Secure Payment Gateway...");
                    setShowLevel4Modal(false);
                }}
            />

            {/* Day 15 Unlock Modal */}
            <Dialog open={showDay15Modal} onOpenChange={setShowDay15Modal}>
                <DialogContent className="sm:max-w-md bg-gradient-to-br from-indigo-900 to-purple-900 text-white border-none">
                    <DialogHeader>
                        <div className="mx-auto bg-amber-400 w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-bounce">
                            <Trophy className="w-8 h-8 text-indigo-900" />
                        </div>
                        <DialogTitle className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
                            Mid-Journey Reward Unlocked!
                        </DialogTitle>
                        <DialogDescription className="text-center text-indigo-200 text-lg">
                            You've hit a <strong>15-Day Streak!</strong> Your consistency has earned you a massive reward.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-indigo-300">Level 2 (Standard Price)</span>
                                <span className="line-through text-gray-400">₹5,000</span>
                            </div>
                            <div className="flex justify-between items-center mb-2 font-bold text-green-400">
                                <span>Streak Bonus (15 Days)</span>
                                <span>- ₹1,000</span>
                            </div>
                            <div className="flex justify-between items-center mb-4 font-bold text-amber-400">
                                <span className="flex items-center gap-2"><Coins className="w-4 h-4" /> Coin Redemption ({stats.coins})</span>
                                <span>- ₹150</span>
                            </div>
                            <div className="h-px bg-white/20 my-2"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-lg">Your Price</span>
                                <span className="text-3xl font-bold text-white">₹3,850</span>
                            </div>
                        </div>
                        <p className="text-xs text-center text-indigo-300">
                            Offer valid for 15 minutes. Unlock the "Neuro-Linguistic Integration" module now.
                        </p>
                    </div>

                    <DialogFooter className="flex-col gap-3">
                        <Button
                            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-indigo-900 font-bold h-12 text-lg shadow-lg shadow-amber-500/20"
                            onClick={handleUnlockLevel2}
                        >
                            Redeem & Unlock Level 2
                        </Button>
                        <Button variant="ghost" className="text-indigo-300 hover:text-white hover:bg-white/10" onClick={() => setShowDay15Modal(false)}>
                            No thanks, I'll continue Level 1
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
