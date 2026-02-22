"use client";

import React, { useState } from "react";
import {
  Users2, Share2, Gift, Copy, Check, Link2,
  TrendingUp, DollarSign, UserPlus, Settings,
  ArrowLeft, ExternalLink, Mail, BarChart3
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Referral {
  id: string;
  referrerName: string;
  referredName: string;
  status: 'pending' | 'converted' | 'paid';
  earnings: number;
  date: string;
}

const mockReferrals: Referral[] = [
  { id: "1", referrerName: "Amit Kumar", referredName: "Rohit Verma", status: "converted", earnings: 500, date: "Jan 11, 2026" },
  { id: "2", referrerName: "Priya Singh", referredName: "Neha Gupta", status: "paid", earnings: 500, date: "Jan 10, 2026" },
  { id: "3", referrerName: "Vikram Patel", referredName: "Sanjay Sharma", status: "pending", earnings: 0, date: "Jan 9, 2026" },
  { id: "4", referrerName: "Amit Kumar", referredName: "Kiran Rao", status: "converted", earnings: 500, date: "Jan 8, 2026" },
  { id: "5", referrerName: "Meera Joshi", referredName: "Arvind Singh", status: "paid", earnings: 500, date: "Jan 7, 2026" },
];

export default function ReferralsPage() {
  const [referrals] = useState(mockReferrals);
  const [copied, setCopied] = useState(false);

  const referralLink = "https://eduecosystem.com/ref/BATCH1-SPECIAL";

  const stats = {
    totalReferrals: 156,
    converted: 89,
    conversionRate: 57,
    totalPayout: 44500
  };

  const topReferrers = [
    { name: "Amit Kumar", referrals: 15, earnings: 7500 },
    { name: "Priya Singh", referrals: 12, earnings: 6000 },
    { name: "Vikram Patel", referrals: 10, earnings: 5000 },
    { name: "Meera Joshi", referrals: 8, earnings: 4000 },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-muted-foreground">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <Users2 className="h-8 w-8 text-pink-600" />
            Referrals
          </h1>
          <p className="text-muted-foreground dark:text-muted-foreground mt-1">
            Manage your referral program and track commissions
          </p>
        </div>
        <Button variant="outline">
          <Settings className="h-4 w-4 mr-2" />
          Program Settings
        </Button>
      </div>

      {/* Referral Link Card */}
      <Card className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Your Referral Link
              </h3>
              <p className="text-sm opacity-80 mt-1">Share this link to earn ₹500 per successful referral</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="flex-1 md:flex-none bg-card/20 rounded-lg px-4 py-2 flex items-center gap-2">
                <Link2 className="h-4 w-4" />
                <span className="text-sm truncate max-w-[200px]">{referralLink}</span>
              </div>
              <Button
                variant="secondary"
                onClick={handleCopy}
                className="bg-card text-pink-600 hover:bg-muted"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-5 text-center">
            <UserPlus className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-3xl font-bold">{stats.totalReferrals}</p>
            <p className="text-sm text-muted-foreground">Total Referrals</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <Users2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600">{stats.converted}</p>
            <p className="text-sm text-muted-foreground">Converted</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600">{stats.conversionRate}%</p>
            <p className="text-sm text-muted-foreground">Conversion Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-orange-600">₹{stats.totalPayout.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Payouts</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Referrers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-pink-600" />
              Top Referrers
            </CardTitle>
            <CardDescription>Best performing affiliates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topReferrers.map((referrer, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : idx === 2 ? 'bg-amber-700' : 'bg-gray-300'
                    }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium">{referrer.name}</p>
                    <p className="text-xs text-muted-foreground">{referrer.referrals} referrals</p>
                  </div>
                </div>
                <span className="font-bold text-green-600">₹{referrer.earnings.toLocaleString()}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Program Settings Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-muted-foreground" />
              Program Settings
            </CardTitle>
            <CardDescription>Current referral program configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-muted-foreground">Commission per referral</span>
              <span className="font-bold text-green-600">₹500</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-muted-foreground">Minimum payout</span>
              <span className="font-bold">₹1,000</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-muted-foreground">Cookie duration</span>
              <span className="font-bold">30 days</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-muted-foreground">Program status</span>
              <Badge className="bg-green-100 text-green-700">Active</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Referrals */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Referrals</CardTitle>
          <CardDescription>Latest referral activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Referrer</TableHead>
                  <TableHead>Referred User</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Earnings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referrals.map((ref) => (
                  <TableRow key={ref.id}>
                    <TableCell className="font-medium">{ref.referrerName}</TableCell>
                    <TableCell>{ref.referredName}</TableCell>
                    <TableCell className="text-muted-foreground">{ref.date}</TableCell>
                    <TableCell>
                      <Badge className={
                        ref.status === 'converted' ? 'bg-green-100 text-green-700' :
                          ref.status === 'paid' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                      }>
                        {ref.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {ref.earnings > 0 ? `₹${ref.earnings}` : '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
