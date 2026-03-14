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
import TeacherOversight from "@/components/admin/TeacherOversight";
import StudentOversight from "@/components/admin/StudentOversight";

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

interface RecentEnrollment {
  id: number;
  user_name: string;
  user_email: string;
  course_title: string;
  amount: number;
  timestamp: string;
}

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "teachers" | "students" | "timeline" | "mindscape" | "security" | "nudges" | "metrics">("overview");
  const [users, setUsers] = useState<UserData[]>([]);
  const [recentResults, setRecentResults] = useState<TestResult[]>([]);
  const [recentEnrollments, setRecentEnrollments] = useState<RecentEnrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [healthData, setHealthData] = useState<any>(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalTests: 0,
    avgScore: 0,
    activeToday: 0,
    studySessionsThisWeek: 0,
    totalTeachers: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [overviewRes, enrollmentsRes, healthRes] = await Promise.all([
          api.get("/admin/overview"),
          api.get("/admin/recent-enrollments"),
          api.get("/executive/health").catch(() => ({ data: null }))
        ]);

        const overview = overviewRes.data;
        setStats({
          totalUsers: overview.users.total_students,
          activeUsers: overview.users.active_today,
          totalTests: overview.activity.total_tests_taken,
          avgScore: overview.activity.average_score,
          activeToday: overview.users.active_today,
          studySessionsThisWeek: overview.activity.study_sessions_this_week || 0,
          totalTeachers: overview.users.total_teachers || 0
        });

        setRecentEnrollments(enrollmentsRes.data);
        if (healthRes.data) setHealthData(healthRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    {stats.totalTeachers} teachers
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
                  <Progress value={stats.totalUsers > 0 ? Math.round((stats.activeUsers / stats.totalUsers) * 100) : 0} className="h-1 mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Tests Taken</CardTitle>
                  <FileText className="w-4 h-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalTests.toLocaleString()}</div>
                  <p className="text-xs text-blue-600 mt-1">~{Math.round(stats.totalTests / 7)} daily avg (7d)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Score</CardTitle>
                  <Award className="w-4 h-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.avgScore}%</div>
                  <p className="text-xs text-muted-foreground mt-1">{stats.studySessionsThisWeek} study sessions this week</p>
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
                  {recentEnrollments.length > 0 ? (
                    recentEnrollments.map((enr) => (
                      <div key={enr.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-100 text-indigo-700 rounded-full">
                            <UserCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">{enr.user_name}</p>
                            <p className="text-[10px] text-muted-foreground">{enr.course_title}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-black text-indigo-600">₹{enr.amount}</p>
                          <p className="text-[10px] text-muted-foreground">{new Date(enr.timestamp).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-muted-foreground italic text-center py-4">No recent enrollments found.</div>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Platform Health</span>
                    {healthData && (
                      <Badge className={`text-sm ${
                        healthData.grade === 'A' ? 'bg-green-100 text-green-700' :
                        healthData.grade === 'B' ? 'bg-blue-100 text-blue-700' :
                        healthData.grade === 'C' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        Grade {healthData.grade} — {healthData.score}/100
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {healthData ? (
                    <div className="space-y-3">
                      {Object.entries(healthData.components as Record<string, number>).map(([key, value]) => (
                        <div key={key}>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-medium capitalize">{key.replace(/_/g, ' ')}</span>
                            <span className={`font-bold ${
                              value >= 70 ? 'text-green-600' : value >= 40 ? 'text-amber-600' : 'text-red-600'
                            }`}>{value}%</span>
                          </div>
                          <Progress value={value} className="h-1.5" />
                        </div>
                      ))}
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                        <span className="text-xs text-muted-foreground">Trend:</span>
                        <Badge variant="outline" className={`text-[10px] ${
                          healthData.trend === 'improving' ? 'border-green-500 text-green-600' :
                          healthData.trend === 'declining' ? 'border-red-500 text-red-600' :
                          'border-gray-400 text-gray-500'
                        }`}>
                          {healthData.trend === 'improving' && '↑ '}
                          {healthData.trend === 'declining' && '↓ '}
                          {healthData.trend}
                        </Badge>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Loading health data...</span>
                      </div>
                    </div>
                  )}
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

        {selectedTab === "teachers" && <TeacherOversight />}
        {selectedTab === "students" && <StudentOversight />}
      </div>
    </div>
  );
}
