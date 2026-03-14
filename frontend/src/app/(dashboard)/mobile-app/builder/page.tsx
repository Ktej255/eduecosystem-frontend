"use client";

import React, { useState, useEffect } from "react";
import { 
  Smartphone, Save, ArrowLeft, Loader2, 
  Layout, Palette, Bell, Globe, Check 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { teacherSettingsService, AppConfig } from "@/lib/services/teacherSettingsService";
import { toast } from "sonner";

export default function MobileAppBuilderPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [config, setConfig] = useState<AppConfig>({
    appName: "My Academy",
    primaryColor: "#3B82F6",
    showHome: true,
    showCourses: true,
    showProfile: true,
    showCommunity: true
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const data = await teacherSettingsService.getAppConfig();
        setConfig(data || config);
      } finally {
        setLoading(false);
      }
    };
    fetchConfig();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await teacherSettingsService.saveAppConfig(config);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/teacher/dashboard">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-emerald-500" />
              Mobile App Builder
            </h1>
          </div>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-500"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
            {saving ? "Saving..." : "Save Configuration"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-emerald-400" />
                  General Identity
                </CardTitle>
                <CardDescription>Setup your app name and branding color.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>App Display Name</Label>
                  <Input 
                    value={config.appName}
                    onChange={(e) => setConfig({...config, appName: e.target.value})}
                    placeholder="e.g., Physics Masterclass"
                    className="bg-gray-800 border-gray-700 h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Brand Primary Color</Label>
                  <div className="flex gap-3">
                    <input 
                      type="color" 
                      value={config.primaryColor}
                      onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                      className="w-12 h-10 border-0 rounded bg-transparent cursor-pointer"
                    />
                    <Input 
                      value={config.primaryColor}
                      onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                      className="bg-gray-800 border-gray-700 h-10 font-mono"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layout className="h-5 w-5 text-emerald-400" />
                  App Navigation & Tabs
                </CardTitle>
                <CardDescription>Enable or disable visible modules in the mobile app.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { id: 'showHome', label: 'Home Feed', desc: 'Main personalized dashboard for students' },
                  { id: 'showCourses', label: 'Course Library', desc: 'Browse and watch purchased content' },
                  { id: 'showCommunity', label: 'Discussions', desc: 'Social interaction and q&a threads' },
                  { id: 'showProfile', label: 'Student Profile', desc: 'Account settings and progress tracking' }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch 
                      checked={(config as any)[item.id]} 
                      onCheckedChange={(val) => setConfig({...config, [item.id]: val})} 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5 text-emerald-400" />
                  Push Notifications (Optional)
                </CardTitle>
                <CardDescription>Connect to OneSignal or Firebase for push capabilities.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>OneSignal App ID</Label>
                  <Input 
                    value={config.oneSignalId || ""}
                    onChange={(e) => setConfig({...config, oneSignalId: e.target.value})}
                    placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">LIVE MOBILE PREVIEW</h3>
              <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="h-6 bg-black flex justify-between items-center px-6 pt-1">
                  <div className="text-[10px] text-white">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="p-4 border-b border-gray-800" style={{ backgroundColor: config.primaryColor }}>
                  <p className="text-white font-bold text-sm text-center">{config.appName}</p>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-black p-4 space-y-4">
                  <div className="aspect-video bg-gray-800 rounded-xl animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-800 rounded w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 bg-gray-800 rounded-lg"></div>
                    <div className="h-20 bg-gray-800 rounded-lg"></div>
                  </div>
                </div>

                {/* Tab Bar */}
                <div className="h-14 bg-gray-900 border-t border-gray-800 flex items-center justify-around px-2">
                  {config.showHome && <div className="w-6 h-6 rounded bg-white/10" style={{ borderColor: config.primaryColor, borderWidth: 1 }}></div>}
                  {config.showCourses && <div className="w-6 h-6 rounded bg-white/10"></div>}
                  {config.showCommunity && <div className="w-6 h-6 rounded bg-white/10"></div>}
                  {config.showProfile && <div className="w-6 h-6 rounded bg-white/10"></div>}
                </div>
                
                {/* Home Indicator */}
                <div className="h-6 bg-gray-900 flex justify-center items-center pb-2">
                  <div className="w-24 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
