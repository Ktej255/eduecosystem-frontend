"use client";

import { useState } from "react";
import {
    Ticket,
    Plus,
    Copy,
    Calendar,
    Users,
    Trash2,
    Percent,
    DollarSign,
    MoreHorizontal,
    Zap,
    TrendingDown,
    ArrowRight,
    Activity
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { toast } from "sonner";
import { useCouponStore, Coupon } from "@/store/couponStore";

export default function DiscountEngine() {
    const { coupons, addCoupon } = useCouponStore();
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    // Form State
    const [newCode, setNewCode] = useState("");
    const [discountType, setDiscountType] = useState("percentage");
    const [amount, setAmount] = useState("");
    const [maxUses, setMaxUses] = useState("");
    const [expiry, setExpiry] = useState("");

    // Autopilot State
    const [autopilotEnabled, setAutopilotEnabled] = useState(false);
    const [revenueStatus, setRevenueStatus] = useState<"stable" | "critical">("stable");

    const simulateRevenueDrop = () => {
        setRevenueStatus("critical");
    };

    const handleCreate = () => {
        const newCoupon: Coupon = {
            id: `c${Date.now()}`,
            code: newCode.toUpperCase(),
            type: discountType as "percentage" | "fixed_amount",
            value: Number(amount),
            usageCount: 0,
            maxUses: maxUses ? Number(maxUses) : null,
            status: "active",
            expiry: expiry || "No Expiry"
        };
        addCoupon(newCoupon);
        setIsCreateOpen(false);
        // Reset form
        setNewCode("");
        setAmount("");
        setMaxUses("");
        setExpiry("");
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active": return "bg-green-100 text-green-700 border-green-200";
            case "expired": return "bg-slate-100 text-slate-500 border-slate-200";
            case "depleted": return "bg-orange-100 text-orange-700 border-orange-200";
            default: return "bg-slate-100";
        }
    };

    const activateEmergencyBoost = () => {
        const boostCoupon: Coupon = {
            id: `boost-${Date.now()}`,
            code: "BOOST24",
            type: "percentage",
            value: 20,
            usageCount: 0,
            maxUses: 100,
            status: "active",
            expiry: "24 Hours"
        };
        addCoupon(boostCoupon);
        setRevenueStatus("stable");

        // Connectivity: Notify faculty that they should broadcast this
        toast.success("Emergency Coupon Generated!", {
            description: "Opening Omnichannel Broadcaster to notify students...",
            action: {
                label: "Send Now",
                onClick: () => console.log("Directing to Broadcaster with BOOST24")
            }
        });
    };

    return (
        <div className="space-y-6">
            {/* Revenue Autopilot Section */}
            <Card className="border-indigo-100 bg-gradient-to-r from-indigo-50 to-white dark:from-indigo-950/20 dark:to-slate-900 dark:border-indigo-900">
                <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-indigo-100 dark:border-indigo-900">
                            <Zap className={cn("h-6 w-6", autopilotEnabled ? "text-amber-500 fill-amber-500" : "text-slate-400")} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                Revenue Autopilot
                                {autopilotEnabled && <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200">Active</Badge>}
                            </h3>
                            <p className="text-xs text-slate-500">
                                Automatically trigger flash sales when daily revenue drops below target.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block text-right">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Daily Trend</div>
                            <div className={cn("text-lg font-bold flex items-center gap-1 justify-end", revenueStatus === "critical" ? "text-red-500" : "text-green-600")}>
                                {revenueStatus === "critical" ? <TrendingDown className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                                {revenueStatus === "critical" ? "-15% Target" : "On Track"}
                            </div>
                        </div>
                        <Switch checked={autopilotEnabled} onCheckedChange={setAutopilotEnabled} />
                    </div>
                </CardContent>

                {/* Emergency Action Panel (Visible only when Autopilot is ON) */}
                {autopilotEnabled && (
                    <div className="border-t border-indigo-100 dark:border-indigo-900 p-4 bg-white/50 dark:bg-slate-950/50">
                        {revenueStatus === "critical" ? (
                            <div className="flex items-center justify-between animate-in slide-in-from-top-2 duration-300">
                                <div className="flex items-start gap-3">
                                    <div className="h-2 w-2 mt-2 rounded-full bg-red-500 animate-pulse" />
                                    <div>
                                        <p className="text-sm font-semibold text-red-600">Revenue Alert Detected</p>
                                        <p className="text-xs text-slate-500">Daily goal missed by 15%. AI Suggests a 24-hour flash sale.</p>
                                    </div>
                                </div>
                                <Button size="sm" onClick={activateEmergencyBoost} className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-100 dark:shadow-none animate-pulse">
                                    Launch BOOST24 (+20% Off)
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-slate-400 italic">Monitoring revenue streams...</p>
                                <Button variant="ghost" size="sm" className="text-xs text-slate-400" onClick={simulateRevenueDrop}>
                                    (Simulate Drop)
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </Card>

            <Card className="col-span-1 border-slate-200 dark:border-slate-800">
                <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Ticket className="h-5 w-5 text-indigo-500" />
                            Discount Engine
                        </CardTitle>
                        <CardDescription>Manage coupons and promotional offers.</CardDescription>
                    </div>

                    <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                        <DialogTrigger asChild>
                            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                                <Plus className="h-4 w-4 mr-2" /> New Coupon
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Create New Coupon</DialogTitle>
                                <DialogDescription>
                                    Set the discount rules and limits for your new offer.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="code">Coupon Code</Label>
                                    <div className="relative">
                                        <Input
                                            id="code"
                                            value={newCode}
                                            onChange={(e) => setNewCode(e.target.value.toUpperCase())}
                                            placeholder="e.g. SUMMER30"
                                            className="uppercase font-mono tracking-wider pl-9"
                                            maxLength={10}
                                        />
                                        <Ticket className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label>Type</Label>
                                        <Select value={discountType} onValueChange={setDiscountType}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="percentage">Percentage (%)</SelectItem>
                                                <SelectItem value="fixed_amount">Fixed Amount (₹)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="amount">Value</Label>
                                        <div className="relative">
                                            <Input
                                                id="amount"
                                                type="number"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                placeholder="0"
                                                className="pl-8"
                                            />
                                            {discountType === 'percentage' ? (
                                                <Percent className="h-3 w-3 absolute left-3 top-3 text-slate-400" />
                                            ) : (
                                                <span className="absolute left-3 top-2.5 text-slate-400 text-sm">₹</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="limit">Usage Limit</Label>
                                        <Input
                                            id="limit"
                                            type="number"
                                            value={maxUses}
                                            onChange={(e) => setMaxUses(e.target.value)}
                                            placeholder="Unlimited"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="expiry">Expiry Date</Label>
                                        <Input
                                            id="expiry"
                                            type="date"
                                            value={expiry}
                                            onChange={(e) => setExpiry(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={handleCreate} disabled={!newCode || !amount} className="w-full bg-indigo-600 hover:bg-indigo-700">
                                    Launch Coupon
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {coupons.map((coupon) => (
                            <div key={coupon.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
                                        <Ticket className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-bold text-slate-800 dark:text-slate-100 font-mono tracking-wide">{coupon.code}</h4>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={() => navigator.clipboard.writeText(coupon.code)}
                                            >
                                                <Copy className="h-3 w-3 text-slate-400" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                                            <span className={cn("font-medium", coupon.type === 'percentage' ? "text-indigo-600" : "text-green-600")}>
                                                {coupon.type === 'percentage' ? `${coupon.value}% OFF` : `₹${coupon.value} OFF`}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Users className="h-3 w-3" />
                                                {coupon.usageCount} used {coupon.maxUses ? `/ ${coupon.maxUses}` : ''}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-1">
                                    <Badge variant="outline" className={cn("border capitalize", getStatusColor(coupon.status))}>
                                        {coupon.status}
                                    </Badge>
                                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {coupon.expiry}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
