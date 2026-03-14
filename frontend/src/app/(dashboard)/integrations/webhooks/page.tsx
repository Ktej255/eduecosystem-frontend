"use client";

import React, { useState } from "react";
import {
  Webhook, ArrowLeft, Plus, CheckCircle2, XCircle,
  MoreVertical, History, Activity, AlertCircle, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { teacherSettingsService } from "@/lib/services/teacherSettingsService";
import { useEffect } from "react";

export default function WebhooksPage() {
  const [webhooks, setWebhooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [newWebhook, setNewWebhook] = useState({
    url: "",
    events: ["user.enrolled"]
  });

  const availableEvents = [
    "user.enrolled",
    "user.completed",
    "payment.succeeded",
    "payment.failed",
    "test.submitted",
    "refund.processed"
  ];

  useEffect(() => {
    loadWebhooks();
  }, []);

  const loadWebhooks = async () => {
    const data = await teacherSettingsService.getWebhooks();
    setWebhooks(data);
    setLoading(false);
  };

  const handleAddWebhook = async () => {
    if (!newWebhook.url) return;
    setIsSaving(true);
    try {
      await teacherSettingsService.saveWebhook(newWebhook);
      setShowAddDialog(false);
      loadWebhooks();
    } finally {
      setIsSaving(false);
    }
  };

  const toggleEvent = (event: string) => {
    setNewWebhook(prev => ({
      ...prev,
      events: prev.events.includes(event) 
        ? prev.events.filter(e => e !== event)
        : [...prev.events, event]
    }));
  };

  const recentDeliveries = [
    { id: "req_123", event: "user.enrolled", url: ".../enrolments", status: "success", code: 200, time: "2 mins ago" },
    { id: "req_124", event: "payment.succeeded", url: ".../payments", status: "success", code: 200, time: "15 mins ago" },
    { id: "req_125", event: "course.published", url: ".../notifications", status: "failed", code: 500, time: "1 hour ago" },
  ];

  if (loading) return <div className="p-8 text-center text-white">Loading Webhooks...</div>;

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
            <Webhook className="h-8 w-8 text-pink-500" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Developer Webhooks</h1>
            <p className="text-muted-foreground mt-1">
              Synchronize your systems with internal platform events.
            </p>
          </div>
        </div>
        <Button onClick={() => setShowAddDialog(true)} className="bg-pink-600 hover:bg-pink-500 font-bold shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Create New Endpoint
        </Button>
      </div>

      {/* Active Webhooks */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Active Listeners</CardTitle>
          <CardDescription>Remote destinations currently receiving push notifications.</CardDescription>
        </CardHeader>
        <CardContent>
          {webhooks.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-gray-700 rounded-xl">
              <Activity className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-muted-foreground">No active webhooks found. Start integrating now!</p>
            </div>
          ) : (
            <div className="rounded-xl border border-gray-800 overflow-hidden">
              <Table>
                <TableHeader className="bg-gray-800/50">
                  <TableRow className="border-gray-800">
                    <TableHead className="text-gray-400">Endpoint URL</TableHead>
                    <TableHead className="text-gray-400">Trigger Events</TableHead>
                    <TableHead className="text-gray-400">Status</TableHead>
                    <TableHead className="text-gray-400">Recent Pulse</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {webhooks.map((hook) => (
                    <TableRow key={hook.id} className="border-gray-800 hover:bg-gray-800/20">
                      <TableCell className="font-mono text-xs text-blue-400">
                        {hook.url}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1.5 flex-wrap">
                          {hook.events.map((e: string, i: number) => (
                            <Badge key={i} variant="outline" className="text-[10px] bg-gray-800 border-gray-700 text-gray-300 px-1.5 py-0">
                              {e}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${
                          hook.status === 'active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-gray-800 text-gray-500'
                        }`}>
                          {hook.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {hook.lastDelivery}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800 text-white">
                            <DropdownMenuLabel>Manage Hub</DropdownMenuLabel>
                            <DropdownMenuItem className="hover:bg-gray-800">Test Delivery</DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800">Review Logs</DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-800" />
                            <DropdownMenuItem className="text-rose-500 hover:bg-rose-500/10 font-bold">Destroy</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Activity (Live Feedback) */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-white">
              <Activity className="h-5 w-5 text-emerald-400" />
              Real-time Ingress
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">
              <History className="h-4 w-4 mr-2" />
              Full History
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDeliveries.map((log) => (
              <div key={log.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
                <div className="flex items-center gap-5">
                  <div className={`p-2.5 rounded-lg ${log.status === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                    }`}>
                    {log.status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-bold text-white flex items-center gap-3">
                      {log.event}
                      <span className={`text-[10px] font-mono px-1.5 rounded ${log.status === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                        {log.code}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground font-mono truncate max-w-[250px] mt-0.5">{log.url}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase">{log.time}</p>
                  <Button variant="link" size="sm" className="h-auto p-0 text-blue-400 hover:text-blue-300 text-xs">
                    Payload JSON
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Webhook Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Plus className="h-6 w-6 text-pink-500" />
              Attach Integration
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Where should we send your platform events?
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label className="text-sm font-bold">Payload URL</Label>
              <Input 
                placeholder="https://your-service.com/hooks/enrollment"
                value={newWebhook.url}
                onChange={e => setNewWebhook({...newWebhook, url: e.target.value})}
                className="bg-gray-800 border-gray-700 focus:ring-pink-500" 
              />
              <p className="text-[10px] text-muted-foreground italic">Must be an HTTPS endpoint.</p>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-bold flex justify-between">
                Event Selection
                <span className="text-[10px] text-pink-400 uppercase">{newWebhook.events.length} Selected</span>
              </Label>
              <div className="grid grid-cols-2 gap-2 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                {availableEvents.map(event => (
                  <div 
                    key={event}
                    onClick={() => toggleEvent(event)}
                    className={`p-2 rounded-lg border cursor-pointer transition-all flex items-center gap-2 ${
                      newWebhook.events.includes(event) 
                        ? 'bg-pink-500/10 border-pink-500/40 text-pink-400' 
                        : 'bg-gray-800 border-gray-700 text-gray-400'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full border ${newWebhook.events.includes(event) ? 'bg-pink-500 border-white' : 'border-gray-600'}`} />
                    <span className="text-[10px] font-mono">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)} className="border-gray-700 text-white hover:bg-gray-800">
              Discard
            </Button>
            <Button 
              className="bg-pink-600 hover:bg-pink-500 font-bold"
              onClick={handleAddWebhook}
              disabled={isSaving}
            >
              {isSaving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Plus className="h-4 w-4 mr-2" />}
              Deploy Listener
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
