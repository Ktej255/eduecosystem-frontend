"use client";

import React, { useState } from "react";
import {
  Users2, Share2, Gift, Copy, Check, Link2,
  TrendingUp, DollarSign, UserPlus, Settings,
  ArrowLeft, ExternalLink, Mail, BarChart3,
  Activity, RefreshCw, Loader2
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
import { fetchReferralStats, type ReferralStats } from "@/lib/services/teacherAnalyticsService";
import { teacherSettingsService } from "@/lib/services/teacherSettingsService";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useEffect } from "react";

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
  const [data, setData] = useState<ReferralStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const [settings, setSettings] = useState({
    commissionAmount: 500,
    minPayout: 1000,
    cookieDuration: 30,
    attributionLogic: "last_click",
    programStatus: "active",
    landingPageTitle: "Learn with me and get rewarded!",
    landingPageDescription: "Join our expert-led courses and jumpstart your career."
  });

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [stats, config] = await Promise.all([
          fetchReferralStats(),
          teacherSettingsService.getReferralSettings()
        ]);
        setData(stats);
        setSettings(config);
      } catch (error) {
        toast.error("Failed to load referral data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      await teacherSettingsService.saveReferralSettings(settings);
      setShowSettingsDialog(false);
    } finally {
      setIsSaving(false);
    }
  };

  const referralLink = data?.referralLink || `https://eduecosystem.com/ref/TEACHER-${settings.commissionAmount}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Referral link copied!");
  };

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
      </div>
    );
  }

  const { totalReferrals, converted, conversionRate, totalPayout, topReferrers, recentReferrals } = data;

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-2">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
            <Users2 className="h-8 w-8 text-pink-500" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              Referral Program
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 ml-2">LIVE</Badge>
            </h1>
            <p className="text-muted-foreground mt-1">
              Automate growth by incentivizing your best students.
            </p>
          </div>
        </div>
        <Button onClick={() => setShowSettingsDialog(true)} variant="outline" className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800">
          <Settings className="h-4 w-4 mr-2" />
          Configure Rewards
        </Button>
      </div>

      {/* Referral Link Card */}
      <Card className="bg-gradient-to-br from-pink-600 to-rose-700 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Share2 className="h-32 w-32" />
        </div>
        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Gift className="h-6 w-6" />
                Your Viral Loop
              </h3>
              <p className="opacity-90 max-w-md">
                Anyone who joins via this link earns a reward, and you pay 
                <span className="font-bold underline decoration-white/30 px-1">₹{settings.commissionAmount}</span> 
                per conversion.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="flex-1 md:flex-none border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center gap-3">
                <Link2 className="h-5 w-5 text-pink-200" />
                <span className="font-mono text-sm truncate max-w-[250px]">{referralLink}</span>
              </div>
              <Button
                variant="secondary"
                onClick={handleCopy}
                className="h-auto px-6 py-3 bg-white text-pink-600 hover:bg-pink-50 font-bold shadow-lg"
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Visits", val: totalReferrals, icon: ExternalLink, color: "text-blue-400" },
          { label: "Signed Up", val: converted, icon: UserPlus, color: "text-emerald-400" },
          { label: "CR%", val: `${conversionRate}%`, icon: TrendingUp, color: "text-purple-400" },
          { label: "Earnings Paid", val: `₹${totalPayout.toLocaleString()}`, icon: DollarSign, color: "text-amber-400" },
        ].map((stat) => (
          <Card key={stat.label} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-3`} />
              <p className="text-3xl font-bold text-white">{stat.val}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Referrers */}
        <Card className="md:col-span-2 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Leaderboard</CardTitle>
            <CardDescription>Reward your top performing students.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {topReferrers.map((referrer, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                    idx === 0 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-bold text-white">{referrer.name}</p>
                    <p className="text-xs text-muted-foreground italic">30 Day Cookie Active</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-400">₹{referrer.earnings.toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">{referrer.referrals} Sales</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Campaign Logic */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Viral Physics</CardTitle>
            <CardDescription>Referral attribution rules.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg"><Mail className="h-4 w-4 text-blue-400" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Notification Mode</p>
                  <p className="text-sm font-medium text-white">Instant Alert @ Lead</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg"><BarChart3 className="h-4 w-4 text-purple-400" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Attribution Logic</p>
                  <p className="text-sm font-medium text-white">{settings.attributionLogic.replace('_', ' ').toUpperCase()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg"><Copy className="h-4 w-4 text-emerald-400" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Cookie Visibility</p>
                  <p className="text-sm font-medium text-white">{settings.cookieDuration} Days</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full border-pink-500/30 text-pink-500 hover:bg-pink-500/10 mt-2">
              View Viral Tree
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Program Settings Dialog */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Settings className="h-6 w-6 text-pink-500" />
              Program Configuration
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Define rewards and landing page content for your referral program.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Commission (₹)</Label>
                <Input 
                  type="number"
                  value={settings.commissionAmount}
                  onChange={e => setSettings({...settings, commissionAmount: Number(e.target.value)})}
                  className="bg-gray-800 border-gray-700" 
                />
              </div>
              <div className="space-y-2">
                <Label>Cookie Duration (Days)</Label>
                <Input 
                  type="number"
                  value={settings.cookieDuration}
                  onChange={e => setSettings({...settings, cookieDuration: Number(e.target.value)})}
                  className="bg-gray-800 border-gray-700" 
                />
              </div>
            </div>

            <div className="space-y-4 p-4 rounded-xl bg-pink-500/5 border border-pink-500/20">
              <h4 className="text-sm font-bold text-pink-400 flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Landing Page Generator
              </h4>
              <div className="space-y-2">
                <Label className="text-xs opacity-70">Catchy Title</Label>
                <Input 
                  value={settings.landingPageTitle}
                  onChange={e => setSettings({...settings, landingPageTitle: e.target.value})}
                  className="bg-gray-900 border-gray-700" 
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs opacity-70">Hook Description</Label>
                <textarea 
                  value={settings.landingPageDescription}
                  onChange={e => setSettings({...settings, landingPageDescription: e.target.value})}
                  className="w-full h-20 bg-gray-900 border-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" 
                />
              </div>
            </div>

            <div className="space-y-2 text-center p-3 border border-dashed border-gray-700 rounded-lg">
              <p className="text-[10px] text-muted-foreground uppercase">Estimated CPA Cost</p>
              <p className="text-sm font-bold text-emerald-400">₹{settings.commissionAmount} Per Sale</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSettingsDialog(false)} className="border-gray-700 text-white">
              Cancel
            </Button>
            <Button 
              className="bg-pink-600 hover:bg-pink-500"
              onClick={handleSaveSettings}
              disabled={isSaving}
            >
              {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Settings className="h-4 w-4 mr-2" />}
              Update Program
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
                {recentReferrals.map((ref: any) => (
                  <TableRow key={ref.id}>
                    <TableCell className="font-medium">{ref.referrerName}</TableCell>
                    <TableCell>{ref.referredName}</TableCell>
                    <TableCell className="text-muted-foreground">{ref.date}</TableCell>
                    <TableCell>
                      <Badge className={
                        ref.status === 'converted' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                          ref.status === 'paid' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                            'bg-amber-500/10 text-amber-500 border-amber-500/20'
                      }>
                        {ref.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {ref.earnings > 0 ? `₹${ref.earnings.toLocaleString()}` : '-'}
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
