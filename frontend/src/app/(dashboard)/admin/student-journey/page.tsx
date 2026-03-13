"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ArrowRight, Loader2 } from "lucide-react";
import api from "@/lib/api";
import StudentJourneyView from "@/components/admin/StudentJourneyView";

export default function StudentJourneyPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);

    const fetchUsers = async () => {
        if (!searchQuery) return;
        try {
            setLoading(true);
            const res = await api.get(`/admin/users?search=${searchQuery}&limit=10`);
            setUsers(res.data.users || []);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    };

    if (selectedStudentId) {
        return (
            <div className="space-y-6">
                <Button 
                    variant="ghost" 
                    onClick={() => setSelectedStudentId(null)}
                    className="mb-4 text-slate-400 hover:text-white"
                >
                    ← Back to Search
                </Button>
                <StudentJourneyView studentId={selectedStudentId} />
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight uppercase">
                        <User className="w-8 h-8 text-indigo-500" />
                        Student Journey
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 font-medium">
                        Search for a student to view their cross-portal history and performance.
                    </p>
                </div>
            </div>

            <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-slate-950 border-b border-slate-800 p-6">
                    <div className="relative flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <Input 
                                placeholder="Search by name or email..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && fetchUsers()}
                                className="pl-10 bg-slate-950 border-slate-800 text-white rounded-xl h-12"
                            />
                        </div>
                        <Button 
                            onClick={fetchUsers}
                            className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 rounded-xl font-bold"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-800">
                        {users.length > 0 ? users.map((user) => (
                            <div key={user.id} className="p-6 hover:bg-white/5 transition-colors flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-indigo-400 font-bold">
                                        {user.full_name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{user.full_name || "N/A"}</p>
                                        <p className="text-xs text-slate-500 font-mono">{user.email}</p>
                                    </div>
                                </div>
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => setSelectedStudentId(user.id)}
                                    className="border-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 rounded-xl gap-2"
                                >
                                    View Journey <ArrowRight className="w-3 h-3" />
                                </Button>
                            </div>
                        )) : searchQuery && !loading ? (
                            <div className="p-20 text-center text-slate-500 italic">No students found matching your search.</div>
                        ) : (
                            <div className="p-20 text-center text-slate-600">Enter a student's name or email to begin reconstruction.</div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
