"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Gift, Search, Trophy, Coins, Star, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

import api from "@/lib/api";

export default function RewardGranter() {
    const [searchQuery, setSearchQuery] = useState("");
    const [students, setStudents] = useState<any[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
    const [rewardType, setRewardType] = useState("coins");
    const [amount, setAmount] = useState("100");
    const [reason, setReason] = useState("");
    const [isGranting, setIsGranting] = useState(false);

    const handleSearch = async (query: string) => {
        setSearchQuery(query);
        if (query.length < 2) {
            setStudents([]);
            return;
        }
        try {
            const res = await api.get(`/admin/users?role=student&search=${query}`);
            setStudents(res.data.users || []);
        } catch (error) {
            console.error("Search failed");
        }
    };

    const handleGrant = async () => {
        if (!selectedStudent || !amount || !reason) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsGranting(true);
        try {
            await api.post("/gamification/grant-reward", {
                userId: selectedStudent.id,
                type: rewardType,
                amount: parseInt(amount),
                reason: reason
            });
            toast.success(`Granted ${amount} ${rewardType} to ${selectedStudent.full_name || selectedStudent.email}`);
            setSelectedStudent(null);
            setSearchQuery("");
            setReason("");
        } catch (error) {
            toast.error("Reward grant failed. Please try again.");
        } finally {
            setIsGranting(false);
        }
    };

    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-card dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-500">
                    <Gift className="w-5 h-5" />
                    Grant Rewards
                </CardTitle>
                <p className="text-xs text-neutral-500">Manually award coins or XP for exceptional performance.</p>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* Student Search */}
                <div className="space-y-2 relative">
                    <Label>Select Student</Label>
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                        <Input
    placeholder="Search by name..."
    className="pl-9"
    value={searchQuery}
    onChange={(e) => handleSearch(e.target.value)}
/>
</div>
{/* Dropdown Results */}
{searchQuery && !selectedStudent && students.length > 0 && (
<div className="absolute top-full left-0 w-full bg-card dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-10 mt-1 max-h-40 overflow-y-auto">
    {students.map(student => (
        <div
            key={student.id}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer flex items-center gap-2"
            onClick={() => {
                setSelectedStudent(student);
                setSearchQuery(student.full_name || student.email);
            }}
        >
            <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 flex items-center justify-center text-xs font-bold">
                {student.full_name?.[0] || student.email?.[0]}
            </div>
            <span className="text-sm">{student.full_name || student.email}</span>
        </div>
    ))}
</div>
)}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Reward Type</Label>
                        <Select value={rewardType} onValueChange={setRewardType}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="coins">
                                    <div className="flex items-center gap-2"><Coins className="w-4 h-4 text-yellow-500" /> Karma Coins</div>
                                </SelectItem>
                                <SelectItem value="xp">
                                    <div className="flex items-center gap-2"><Star className="w-4 h-4 text-blue-500" /> Experience (XP)</div>
                                </SelectItem>
                                <SelectItem value="badge">
                                    <div className="flex items-center gap-2"><Trophy className="w-4 h-4 text-orange-500" /> Special Badge</div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Amount</Label>
                        <Input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Reason / Note</Label>
                    <Input
                        placeholder="e.g. Exceptional leadership in group study..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </div>

                <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold"
                    onClick={handleGrant}
                    disabled={isGranting || !selectedStudent}
                >
                    {isGranting ? (
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 animate-bounce" /> Granting...
                        </div>
                    ) : (
                        "Grant Reward"
                    )}
                </Button>

                {/* Recent Grants Preview (Mock) */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <h4 className="text-xs font-bold text-neutral-500 uppercase mb-2">Recent Activity</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                            <span>S. Gupta</span>
                            <span className="text-green-600">+500 Coins (Quiz Helper)</span>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                            <span>R. Kumar</span>
                            <span className="text-blue-600">+200 XP (Streak Save)</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
