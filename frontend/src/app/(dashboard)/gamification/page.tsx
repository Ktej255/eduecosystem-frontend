"use client"

import { useState, useEffect } from "react"
import { Coins, Flame, Trophy, Medal } from "lucide-react"
import api from "@/lib/api"

interface LeaderboardEntry {
    user_id: number
    full_name: string
    coins: number
    streak_days: number
}

export default function GamificationPage() {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(null)
    const [activeTab, setActiveTab] = useState<"leaderboard" | "shop">("leaderboard")
    const [shopItems, setShopItems] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [lbRes, userRes, shopRes] = await Promise.all([
                    api.get("/gamification/leaderboard"),
                    api.get("/users/me"),
                    api.get("/gamification/shop/items")
                ])
                setLeaderboard(lbRes.data)
                setCurrentUser({
                    user_id: userRes.data.id,
                    full_name: userRes.data.full_name,
                    coins: userRes.data.coins,
                    streak_days: userRes.data.streak_days
                })
                setShopItems(shopRes.data)
            } catch (error) {
                console.error("Failed to fetch gamification data", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const handlePurchase = async (itemId: number, cost: number) => {
        if (!currentUser || currentUser.coins < cost) {
            alert("Not enough coins!")
            return
        }
        try {
            const res = await api.post(`/gamification/shop/purchase?item_id=${itemId}`)
            if (res.data.error) {
                alert(res.data.error)
            } else {
                alert(`Purchased ${res.data.item}!`)
                setCurrentUser({ ...currentUser, coins: res.data.new_balance })
            }
        } catch (error) {
            console.error("Purchase failed", error)
        }
    }

    return (
        <div className="p-8 space-y-8 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                    Gamification Hub
                </h1>
                <p className="text-gray-400 mt-2">Compete, Earn, and Upgrade.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-yellow-500/30 p-6 rounded-xl flex items-center space-x-4">
                    <div className="p-4 bg-yellow-500/10 rounded-full">
                        <Coins className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Total Coins</p>
                        <h3 className="text-3xl font-bold text-white">{currentUser?.coins || 0}</h3>
                    </div>
                </div>

                <div className="bg-gray-900 border border-orange-500/30 p-6 rounded-xl flex items-center space-x-4">
                    <div className="p-4 bg-orange-500/10 rounded-full">
                        <Flame className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Current Streak</p>
                        <h3 className="text-3xl font-bold text-white">{currentUser?.streak_days || 0} Days</h3>
                    </div>
                </div>

                <div className="bg-gray-900 border border-purple-500/30 p-6 rounded-xl flex items-center space-x-4">
                    <div className="p-4 bg-purple-500/10 rounded-full">
                        <Trophy className="h-8 w-8 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Global Rank</p>
                        <h3 className="text-3xl font-bold text-white">#1</h3>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center space-x-4 border-b border-gray-800 pb-4">
                <button
                    onClick={() => setActiveTab("leaderboard")}
                    className={`px-6 py-2 rounded-full font-bold transition ${activeTab === "leaderboard" ? "bg-yellow-500 text-black" : "text-gray-400 hover:text-white"}`}
                >
                    Leaderboard
                </button>
                <button
                    onClick={() => setActiveTab("shop")}
                    className={`px-6 py-2 rounded-full font-bold transition ${activeTab === "shop" ? "bg-yellow-500 text-black" : "text-gray-400 hover:text-white"}`}
                >
                    Rewards Shop
                </button>
            </div>

            {/* Content */}
            {activeTab === "leaderboard" ? (
                <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden animate-in fade-in">
                    <div className="p-6 border-b border-gray-800">
                        <h2 className="text-xl font-bold text-white flex items-center">
                            <Medal className="mr-2 h-5 w-5 text-yellow-500" />
                            Top Performers
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-800/50 text-gray-400 text-sm">
                                    <th className="p-4">Rank</th>
                                    <th className="p-4">Student</th>
                                    <th className="p-4 text-center">Streak</th>
                                    <th className="p-4 text-right">Coins</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {loading ? (
                                    <tr><td colSpan={4} className="p-8 text-center text-gray-500">Loading leaderboard...</td></tr>
                                ) : leaderboard.length === 0 ? (
                                    <tr><td colSpan={4} className="p-8 text-center text-gray-500">No data yet.</td></tr>
                                ) : (
                                    leaderboard.map((entry, index) => (
                                        <tr key={entry.user_id} className="hover:bg-gray-800/30 transition">
                                            <td className="p-4">
                                                <span className={`
                            inline-flex items-center justify-center w-8 h-8 rounded-full font-bold
                            ${index === 0 ? "bg-yellow-500/20 text-yellow-500" :
                                                        index === 1 ? "bg-gray-400/20 text-gray-400" :
                                                            index === 2 ? "bg-orange-500/20 text-orange-500" : "text-gray-500"}
                          `}>
                                                    {index + 1}
                                                </span>
                                            </td>
                                            <td className="p-4 font-medium text-white">
                                                {entry.full_name}
                                                {entry.user_id === currentUser?.user_id && <span className="ml-2 text-xs bg-cyan-500/20 text-cyan-500 px-2 py-0.5 rounded">You</span>}
                                            </td>
                                            <td className="p-4 text-center text-orange-400 font-mono">
                                                {entry.streak_days} 🔥
                                            </td>
                                            <td className="p-4 text-right font-bold text-yellow-500">
                                                {entry.coins.toLocaleString()} 🪙
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in">
                    {shopItems.map((item) => (
                        <div key={item.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-yellow-500/50 transition">
                            <div className="h-32 bg-black/50 rounded-lg mb-4 flex items-center justify-center text-4xl">
                                {item.type === "theme" ? "🎨" : item.type === "badge" ? "📛" : "🧪"}
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.name}</h3>
                            <p className="text-gray-400 text-sm mt-1 flex-1">{item.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-yellow-500 font-bold">{item.cost} 🪙</span>
                                <button
                                    onClick={() => handlePurchase(item.id, item.cost)}
                                    className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg text-sm"
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
