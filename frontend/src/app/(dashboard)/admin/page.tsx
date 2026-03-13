"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Users, FileText, TrendingUp, Shield, BookOpen, BarChart3, Brain, Plus,
  GraduationCap, ExternalLink, Zap, Activity, ArrowRight, Search,
  Clock, CheckCircle2, Upload, AlertCircle, Eye, ChevronRight,
  Bell, Send, UserCheck, BookMarked, Target, Award, Calendar, Lock
} from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";
import ProjectTimeline from "@/components/admin/ProjectTimeline";
import { MindscapeDashboard } from "@/components/admin/MindscapeDashboard";
import { SecurityAlertsDashboard } from "@/components/admin/SecurityAlertsDashboard";
import { NudgeWorkflow } from "@/components/admin/NudgeWorkflow";
import { CodeMetricsDashboard } from "@/components/admin/CodeMetricsDashboard";

interface UserData {
  id: number;
  email: string;
  full_name: string;
  role: string;
  is_batch1_authorized: boolean;
  is_ras_authorized: boolean;
  last_login: string | null;
  is_active: boolean;
  coins: number;
  streak_days: number;
}

interface TestResult {
  id: number;
  user_id: number;
  score: number;
  total_questions: number;
  correct_count: number;
  timestamp: string;
}

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "teachers" | "students" | "timeline" | "mindscape" | "security" | "nudges" | "metrics">("overview");
  const [users, setUsers] = useState<UserData[]>([]);
  const [recentResults, setRecentResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalTests: 0,
    avgScore: 0
  });

  useEffect(() => {
    // Mock data for immediate display while API loads
    setStats({
      totalUsers: 1250,
      activeUsers: 843,
      totalTests: 15420,
      avgScore: 78.5
    });
    setLoading(false);
  }, []);

  const TabButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <Button
      variant={selectedTab === id ? "default" : "ghost"}
      onClick={() => setSelectedTab(id as any)}
      className={`flex items-center gap-2 ${selectedTab === id ? 'bg-indigo-600 hover:bg-indigo-700' : 'text-muted-foreground hover:text-indigo-600'}`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </Button>
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Shield className="w-8 h-8 text-indigo-600" />
            Admin Command Center
          </h1>
          <p className="text-muted-foreground mt-1">Manage users, content, and track platform health.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Operational
          </div>
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap gap-2 border-b pb-4 overflow-x-auto">
        <TabButton id="overview" label="Overview" icon={BarChart3} />
        <TabButton id="teachers" label="Teachers" icon={GraduationCap} />
        <TabButton id="students" label="Students" icon={Users} />
        <TabButton id="timeline" label="Timeline" icon={Clock} />
        <TabButton id="mindscape" label="Mindscape" icon={Brain} />
        <TabButton id="security" label="Security" icon={Shield} />
        <TabButton id="nudges" label="Nudges" icon={Zap} />
        <TabButton id="metrics" label="Code Metrics" icon={Activity} />
      </div>

      {/* Main Content Area */}
      <div className="min-h-[600px]">
        {selectedTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                  <Users className="w-4 h-4 text-indigo-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> +12% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Learners</CardTitle>
                  <Activity className="w-4 h-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</div>
                  <Progress value={67} className="h-1 mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Tests Taken</CardTitle>
                  <FileText className="w-4 h-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalTests.toLocaleString()}</div>
                  <p className="text-xs text-blue-600 mt-1">~150 daily avg</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Score</CardTitle>
                  <Award className="w-4 h-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.avgScore}%</div>
                  <p className="text-xs text-muted-foreground mt-1">Across all batches</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Enrollments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground italic text-center py-4">No recent enrollments available in this view.</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Database Latency</span>
                      <span className="text-sm text-green-600">24ms</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">API Uptime</span>
                      <span className="text-sm text-green-600">99.98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Storage Usage</span>
                      <span className="text-sm text-amber-600">45% (S3)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {selectedTab === "timeline" && <ProjectTimeline />}

        {selectedTab === "mindscape" && <MindscapeDashboard />}

        {selectedTab === "security" && <SecurityAlertsDashboard />}

        {selectedTab === "nudges" && <NudgeWorkflow />}

        {selectedTab === "metrics" && <CodeMetricsDashboard />}

        {/* Placeholders for other tabs */}
        {(selectedTab === "teachers" || selectedTab === "students") && (
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg bg-muted">
            <div className="text-center text-muted-foreground">
              <Lock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p>This module is currently restricted or under maintenance.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
