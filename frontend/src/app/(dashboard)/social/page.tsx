"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Users, Shield } from "lucide-react"
import api from "@/lib/api"

export default function SocialPage() {
    const [group, setGroup] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const res = await api.get("/groups/my-pack")
                setGroup(res.data)
            } catch (error) {
                console.error("Failed to fetch group", error)
            } finally {
                setLoading(false)
            }
        }
        fetchGroup()
    }, [])

    const joinPack = async () => {
        setLoading(true)
        try {
            const res = await api.post("/groups/join")
            setGroup(res.data)
        } catch (error) {
            console.error("Failed to join pack", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8 text-center">
            <h1 className="text-3xl font-bold text-white">Wolf Pack</h1>
            <p className="text-gray-400">Find your tribe. Grow together.</p>

            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : group ? (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 space-y-6 animate-in zoom-in">
                    <div className="mx-auto w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <Shield className="h-12 w-12 text-indigo-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">{group.name}</h2>
                        <p className="text-gray-400">{group.description}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {/* Placeholder for member avatars */}
                        {group.members.map((member: any, i: number) => (
                            <div key={i} className="bg-gray-800 p-4 rounded-lg">
                                <Users className="h-6 w-6 text-gray-500 mx-auto mb-2" />
                                <p className="text-sm font-bold text-white">{member.full_name}</p>
                                <p className="text-xs text-gray-400">{member.streak_days} Day Streak</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 space-y-6">
                    <Users className="h-16 w-16 text-gray-600 mx-auto" />
                    <h2 className="text-xl font-bold text-white">You are a Lone Wolf</h2>
                    <p className="text-gray-400">Join a pack to boost your consistency by 300%.</p>
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500" onClick={joinPack}>
                        Find My Pack
                    </Button>
                </div>
            )}
        </div>
    )
}
