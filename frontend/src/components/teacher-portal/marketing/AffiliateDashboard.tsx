"use client";

import { useState } from "react";
import {
    Users,
    DollarSign,
    TrendingUp,
    CheckCircle2,
    XCircle,
    MoreHorizontal,
    Search,
    CreditCard,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// --- Mock Data ---

interface Affiliate {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    status: "active" | "pending" | "rejected";
    sales: number;
    revenue: string;
    commission: string;
    lastActive: string;
}

const mockAffiliates: Affiliate[] = [
    {
        id: "a1",
        name: "Rahul Verma",
        email: "rahul.v@example.com",
        status: "active",
        sales: 42,
        revenue: "₹2,10,000",
        commission: "₹21,000",
        lastActive: "2 hours ago"
    },
    {
        id: "a2",
        name: "Priya Singh",
        email: "priya.s@example.com",
        status: "pending",
        sales: 0,
        revenue: "₹0",
        commission: "₹0",
        lastActive: "1 day ago"
    },
    {
        id: "a3",
        name: "Amit Kumar",
        email: "amit.k@example.com",
        status: "active",
        sales: 15,
        revenue: "₹75,000",
        commission: "₹7,500",
        lastActive: "3 days ago"
    },
    {
        id: "a4",
        name: "Sneha Gupta",
        email: "sneha.g@example.com",
        status: "rejected",
        sales: 0,
        revenue: "₹0",
        commission: "₹0",
        lastActive: "1 week ago"
    }
];

export default function AffiliateDashboard() {
    const [affiliates, setAffiliates] = useState<Affiliate[]>(mockAffiliates);
    const [searchTerm, setSearchTerm] = useState("");

    const handleStatusChange = (id: string, newStatus: Affiliate["status"]) => {
        setAffiliates(affiliates.map(a =>
            a.id === id ? { ...a, status: newStatus } : a
        ));
    };

    const getStatusParams = (status: string) => {
        switch (status) {
            case "active": return { color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle2 };
            case "pending": return { color: "bg-amber-100 text-amber-700 border-amber-200", icon: MoreHorizontal }; // Using generic icon for pending
            case "rejected": return { color: "bg-red-100 text-red-700 border-red-200", icon: XCircle };
            default: return { color: "bg-muted", icon: MoreHorizontal };
        }
    };

    const filteredAffiliates = affiliates.filter(a =>
        a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border bg-indigo-50/50 dark:bg-indigo-950/20">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-muted-foreground">Total Affiliate Revenue</span>
                            <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                <DollarSign className="h-4 w-4 text-indigo-600" />
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-foreground">₹2,85,000</div>
                        <div className="flex items-center text-xs text-green-600 mt-1">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            +12% from last month
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-muted-foreground">Pending Commissions</span>
                            <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                                <CreditCard className="h-4 w-4 text-amber-600" />
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-foreground">₹28,500</div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                            Due in 5 days
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-muted-foreground">Active Partners</span>
                            <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                                <Users className="h-4 w-4 text-green-600" />
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-foreground">24</div>
                        <div className="flex items-center text-xs text-green-600 mt-1">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            3 new this week
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Table */}
            <Card className="border-border">
                <CardHeader className="pb-4 border-b border-slate-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <CardTitle className="text-lg font-bold">Partner Management</CardTitle>
                            <CardDescription>Approve requests and track performance.</CardDescription>
                        </div>
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search partners..."
                                className="pl-9 bg-muted border-border focus-visible:ring-indigo-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4">Partner</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Sales</th>
                                    <th className="px-6 py-4 text-right">Revenue</th>
                                    <th className="px-6 py-4 text-right">Commission</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {filteredAffiliates.map((affiliate) => {
                                    const statusStyle = getStatusParams(affiliate.status);

                                    return (
                                        <tr key={affiliate.id} className="hover:bg-muted dark:hover:bg-slate-900/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-9 w-9 border border-border">
                                                        <AvatarImage src={affiliate.avatar} />
                                                        <AvatarFallback className="bg-indigo-100 text-indigo-700 font-bold">{affiliate.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-semibold text-foreground">{affiliate.name}</div>
                                                        <div className="text-xs text-muted-foreground">{affiliate.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge variant="outline" className={cn("capitalize border", statusStyle.color)}>
                                                    <statusStyle.icon className="h-3 w-3 mr-1" />
                                                    {affiliate.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-muted-foreground">
                                                {affiliate.sales}
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-muted-foreground">
                                                {affiliate.revenue}
                                            </td>
                                            <td className="px-6 py-4 text-right font-bold text-green-600">
                                                {affiliate.commission}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-muted-foreground">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Manage Partner</DropdownMenuLabel>
                                                        {affiliate.status === 'pending' && (
                                                            <>
                                                                <DropdownMenuItem onClick={() => handleStatusChange(affiliate.id, 'active')} className="text-green-600 focus:text-green-700 font-medium">
                                                                    <CheckCircle2 className="h-4 w-4 mr-2" /> Approve Request
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => handleStatusChange(affiliate.id, 'rejected')} className="text-red-600 focus:text-red-700">
                                                                    <XCircle className="h-4 w-4 mr-2" /> Reject Request
                                                                </DropdownMenuItem>
                                                            </>
                                                        )}
                                                        {affiliate.status === 'active' && (
                                                            <>
                                                                <DropdownMenuItem>
                                                                    <CreditCard className="h-4 w-4 mr-2" /> Pay Commission
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="text-red-600 focus:text-red-700">
                                                                    <XCircle className="h-4 w-4 mr-2" /> Deactivate
                                                                </DropdownMenuItem>
                                                            </>
                                                        )}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
