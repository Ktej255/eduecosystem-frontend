"use client";

import React, { useState, useEffect } from "react";
import { 
  Globe, ArrowLeft, Shield, CheckCircle2, 
  ExternalLink, Copy, Check, RefreshCcw, 
  AlertTriangle, Server 
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from "@/components/ui/alert";
import { teacherSettingsService } from "@/lib/services/teacherSettingsService";
import { toast } from "sonner";

export default function DomainPage() {
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState<any>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [newDomain, setNewDomain] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    const data = await teacherSettingsService.getDomainConfig();
    setConfig(data);
    setNewDomain(data.customDomain || "");
    setLoading(false);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
    toast.success("Copied to clipboard");
  };

  const handleSaveDomain = async () => {
    if (!newDomain) return;
    setIsSaving(true);
    try {
      await teacherSettingsService.saveDomainConfig({
        ...config,
        customDomain: newDomain,
        status: "pending"
      });
      loadConfig();
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-white">Loading Domain Config...</div>;

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-2">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
            <Globe className="h-8 w-8 text-pink-500" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Custom Domain</h1>
            <p className="text-muted-foreground mt-1">
              Connect your own domain to provide a branded experience.
            </p>
          </div>
        </div>
        <Badge className={`${
          config.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
        } border-current border px-4 py-1.5 text-xs font-bold`}>
          {config.status === 'active' ? 'SSL ACTIVE' : 'DNS PENDING'}
        </Badge>
      </div>

      {/* Main Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">Domain Settings</CardTitle>
              <CardDescription>Enter the domain you'd like to use for your academy.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="academy.yourdomain.com"
                    value={newDomain}
                    onChange={(e) => setNewDomain(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-700 text-white h-12"
                  />
                </div>
                <Button 
                  onClick={handleSaveDomain}
                  className="bg-pink-600 hover:bg-pink-500 h-12 px-8 font-bold"
                  disabled={isSaving || newDomain === config.customDomain}
                >
                  {isSaving ? <RefreshCcw className="h-4 w-4 animate-spin" /> : "Connect"}
                </Button>
              </div>

              {config.customDomain && (
                <Alert className="bg-blue-500/5 border-blue-500/20 text-blue-400">
                  <Shield className="h-4 w-4" />
                  <AlertTitle>SSL Auto-Provisioning</AlertTitle>
                  <AlertDescription className="text-xs">
                    Once DNS is verified, we will automatically generate an SSL certificate for <strong>{config.customDomain}</strong>.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* DNS Instructions */}
          {config.customDomain && (
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Server className="h-5 w-5 text-gray-400" />
                    DNS Configuration
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={loadConfig} className="text-xs text-pink-500">
                    <RefreshCcw className="h-3 w-3 mr-2" />
                    Check Propagation
                  </Button>
                </div>
                <CardDescription>Add the following record to your DNS provider (Cloudflare, GoDaddy, etc.)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl overflow-hidden border border-gray-800">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-800/50 text-gray-400 text-left">
                      <tr>
                        <th className="p-4 font-normal">Type</th>
                        <th className="p-4 font-normal">Name</th>
                        <th className="p-4 font-normal">Value</th>
                        <th className="p-4 w-[50px]"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900">
                      <tr className="border-t border-gray-800 hover:bg-white/5">
                        <td className="p-4"><Badge variant="outline" className="text-blue-400">{config.dnsType}</Badge></td>
                        <td className="p-4 text-white font-mono">{newDomain.split('.')[0] === 'www' ? 'www' : '@'}</td>
                        <td className="p-4 text-white font-mono break-all">{config.dnsValue}</td>
                        <td className="p-4">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => handleCopy(config.dnsValue, 'val')}
                          >
                            {copied === 'val' ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                    <p className="text-xs text-amber-200/70 leading-relaxed">
                      DNS changes can take up to 24-48 hours to propagate worldwide. 
                      Please do not remove your existing site until verification is complete.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Status Tracker */}
        <div className="space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-lg">Connection Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className={`p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 ${
                  config.customDomain ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gray-800 text-gray-600'
                }`}>
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Domain Added</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Primary host specified.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 ${
                  config.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gray-800 text-amber-500 animate-pulse'
                }`}>
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">DNS Verified</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Found record: {config.dnsValue.substring(0, 10)}...</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 ${
                  config.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gray-800 text-gray-600'
                }`}>
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">SSL Issued</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Secure connection ready.</p>
                </div>
              </div>

              {config.status === 'active' && (
                <Button variant="outline" className="w-full border-pink-500 text-pink-500 hover:bg-pink-500/10" asChild>
                  <a href={`https://${config.customDomain}`} target="_blank" rel="noreferrer">
                    Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-pink-900/20 border-gray-800">
            <CardContent className="p-6">
              <h4 className="font-bold text-white mb-2">Need Help?</h4>
              <p className="text-xs text-muted-foreground mb-4">
                Our support team can help you with DNS records if you're stuck.
              </p>
              <Button size="sm" variant="secondary" className="w-full">
                Open Support Ticket
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
