"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    Share2,
    Link,
    Copy,
    Check,
    Eye,
    EyeOff,
    Shield,
    Users,
    Flame,
    Trophy,
    Calendar,
    BarChart
} from "lucide-react"
import { getUserXP, getLevelIcon } from "@/lib/gamification/xp-engine"
import { getStreakInfo } from "@/lib/gamification/streak-tracker"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface ShareSettings {
    showXP: boolean
    showStreak: boolean
    showLevel: boolean
    showHeatmap: boolean
    showLeaderboardRank: boolean
}

export default function ShareProgressPage() {
    const [shareSettings, setShareSettings] = useState<ShareSettings>({
        showXP: true,
        showStreak: true,
        showLevel: true,
        showHeatmap: true,
        showLeaderboardRank: false
    })
    const [shareToken, setShareToken] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)
    const [isGenerating, setIsGenerating] = useState(false)

    const xpData = getUserXP()
    const streakData = getStreakInfo()

    const generateShareLink = async () => {
        setIsGenerating(true)
        // Simulate token generation (would be backend call in production)
        await new Promise(r => setTimeout(r, 800))
        const token = `share_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 8)}`

        // Store settings with token in localStorage (would be backend in production)
        localStorage.setItem(`shareSettings_${token}`, JSON.stringify({
            ...shareSettings,
            xp: xpData,
            streak: streakData
        }))

        setShareToken(token)
        setIsGenerating(false)
        toast.success("Share link generated!")
    }

    const copyToClipboard = () => {
        const url = `${window.location.origin}/shared/${shareToken}`
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        toast.success("Link copied!")
    }

    const shareUrl = shareToken ? `${typeof window !== 'undefined' ? window.location.origin : ''}/shared/${shareToken}` : null

    const toggleSetting = (key: keyof ShareSettings) => {
        setShareSettings(prev => ({ ...prev, [key]: !prev[key] }))
        setShareToken(null) // Invalidate existing token when settings change
    }

    return (
        <div className="container mx-auto py-8 px-4 max-w-2xl">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-xl shadow-indigo-500/20">
                    <Share2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black mb-2">Share Progress</h1>
                <p className="text-gray-400">Let parents or mentors track your learning journey</p>
            </div>

            {/* Preview Card */}
            <Card className="bg-gradient-to-br from-gray-900 to-indigo-950 border-indigo-500/30 rounded-3xl overflow-hidden mb-8">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Eye className="w-5 h-5 text-indigo-400" />
                        Preview
                    </CardTitle>
                    <CardDescription>What others will see</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        {shareSettings.showLevel && (
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                                <span className="text-3xl">{getLevelIcon(xpData.level)}</span>
                                <p className="text-white font-bold mt-1">Level {xpData.level}</p>
                            </div>
                        )}
                        {shareSettings.showXP && (
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                                <Trophy className="w-6 h-6 text-yellow-400 mx-auto" />
                                <p className="text-white font-bold mt-1">{xpData.totalXP.toLocaleString()} XP</p>
                            </div>
                        )}
                        {shareSettings.showStreak && (
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                                <Flame className={cn("w-6 h-6 mx-auto", streakData.currentStreak > 0 ? "text-orange-400" : "text-gray-600")} />
                                <p className="text-white font-bold mt-1">{streakData.currentStreak} Day Streak</p>
                            </div>
                        )}
                        {shareSettings.showHeatmap && (
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                                <Calendar className="w-6 h-6 text-emerald-400 mx-auto" />
                                <p className="text-white font-bold mt-1">Activity Heatmap</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Settings */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl mb-8">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="w-5 h-5 text-emerald-400" />
                        Privacy Controls
                    </CardTitle>
                    <CardDescription>Choose what to share</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {[
                        { key: 'showLevel' as const, label: 'Current Level', icon: Trophy },
                        { key: 'showXP' as const, label: 'Total XP', icon: BarChart },
                        { key: 'showStreak' as const, label: 'Daily Streak', icon: Flame },
                        { key: 'showHeatmap' as const, label: 'Activity Heatmap', icon: Calendar },
                        { key: 'showLeaderboardRank' as const, label: 'Leaderboard Rank', icon: Users },
                    ].map(({ key, label, icon: Icon }) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <Icon className="w-4 h-4 text-gray-400" />
                                <span className="font-medium">{label}</span>
                            </div>
                            <Switch
                                checked={shareSettings[key]}
                                onCheckedChange={() => toggleSetting(key)}
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Generate Link */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl">
                <CardContent className="pt-6">
                    {!shareToken ? (
                        <Button
                            onClick={generateShareLink}
                            className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-bold"
                            disabled={isGenerating}
                        >
                            {isGenerating ? (
                                "Generating..."
                            ) : (
                                <>
                                    <Link className="w-5 h-5 mr-2" />
                                    Generate Share Link
                                </>
                            )}
                        </Button>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <Input
                                    value={shareUrl || ''}
                                    readOnly
                                    className="bg-gray-800 border-gray-700 font-mono text-sm"
                                />
                                <Button
                                    onClick={copyToClipboard}
                                    className={cn(
                                        "shrink-0",
                                        copied ? "bg-emerald-600" : "bg-indigo-600 hover:bg-indigo-700"
                                    )}
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </Button>
                            </div>
                            <p className="text-xs text-gray-500 text-center">
                                This link is read-only and expires in 30 days
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
