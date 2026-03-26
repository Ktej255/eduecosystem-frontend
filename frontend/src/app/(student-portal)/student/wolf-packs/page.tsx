"use client";

import { useState, useEffect } from "react";
import { PackDashboard } from "@/components/groups/PackDashboard";
import { PackLeaderboard } from "@/components/groups/PackLeaderboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Users, Shield, Trophy } from "lucide-react";
import api from "@/lib/api";

export default function WolfPackHallPage() {
    const [myPack, setMyPack] = useState<any>(null);
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [packRes, leaderboardRes] = await Promise.all([
                api.get("/packs/my-pack").catch((err) => {
                    console.error("My Pack fetching failed:", err);
                    return { data: { is_assigned: false } };
                }),
                api.get("/packs/leaderboard").catch((err) => {
                    console.error("Leaderboard fetching failed:", err);
                    return { data: [] };
                })
            ]);
            
            // Check if response is the "User not assigned" structure
            if (packRes.data && (packRes.data.is_assigned === false || packRes.data.detail)) {
                setMyPack(null);
            } else {
                setMyPack(packRes.data);
            }
            
            setLeaderboard(leaderboardRes.data || []);
        } catch (error) {
            console.error("Failed to fetch Wolf Pack data:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-cyan-500">
                <Loader2 className="h-12 w-12 animate-spin mb-4" />
                <p className="text-muted-foreground font-medium">Entering the Pack Hall...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Shield className="h-8 w-8 text-cyan-500" />
                        <h1 className="text-4xl font-black text-white">Wolf Pack Hall</h1>
                    </div>
                    <p className="text-muted-foreground text-lg">Strength in numbers. Conquer the leaderboard with your pack.</p>
                </div>
            </div>

            {!myPack ? (
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl">
                    <Users className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-white mb-4">You haven't joined a pack yet</h2>
                    <p className="text-muted-foreground mb-8">Join a study group to be sorted into a Wolf Pack and start competing for glory!</p>
                    {/* Link to study groups or auto-suggest */}
                </div>
            ) : (
                <Tabs defaultValue="my-pack" className="w-full">
                    <TabsList className="bg-gray-900 border border-gray-800 p-1 mb-8">
                        <TabsTrigger value="my-pack" className="px-8 py-3 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
                            My Pack
                        </TabsTrigger>
                        <TabsTrigger value="leaderboard" className="px-8 py-3 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
                            Global Leaderboard
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="my-pack" className="mt-0 ring-0 outline-none">
                        <PackDashboard pack={myPack} />
                    </TabsContent>

                    <TabsContent value="leaderboard" className="mt-0 ring-0 outline-none">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <PackLeaderboard packs={leaderboard} />
                            <div className="space-y-6">
                                <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                        <Trophy className="h-5 w-5 text-amber-500" />
                                        Next Cycle: Weekly Reset
                                    </h3>
                                    <p className="text-sm text-muted-foreground">The Weekly House Championship ends in 3 days. The winning pack earns the <span className="text-cyan-400 font-bold">Resilience Badge</span> and 10,000 bonus coins shared among active members!</p>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                                    <h4 className="text-white font-bold mb-4">How it works?</h4>
                                    <ul className="space-y-4 text-sm">
                                        <li className="flex gap-3">
                                            <div className="h-5 w-5 rounded-full bg-cyan-600 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">1</div>
                                            <p className="text-muted-foreground">Complete lessons and quizzes to earn <span className="text-white font-bold">Learning Coins</span>.</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-5 w-5 rounded-full bg-cyan-600 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">2</div>
                                            <p className="text-muted-foreground">Your coins are automatically added to your <span className="text-white font-bold">Pack Points</span>.</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="h-5 w-5 rounded-full bg-cyan-600 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">3</div>
                                            <p className="text-muted-foreground">Climb the ranks to unlock exclusive badges and <span className="text-white font-bold">House Privileges</span>.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            )}
        </div>
    );
}
