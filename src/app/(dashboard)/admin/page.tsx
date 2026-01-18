"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, TrendingUp, Shield, BookOpen, BarChart3, Brain, GraduationCap, ExternalLink, Zap, Activity, ArrowRight, AlertCircle, RefreshCw, Clock, CheckCircle2, Timer } from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";
import AdminActionCenter from "@/components/admin/ActionCenter";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [overview, setOverview] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStats();
    // Poll for live updates every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch both stats and overview in parallel
      const [statsResponse, overviewResponse] = await Promise.all([
        api.get("/admin/stats"),
        api.get("/admin/overview").catch(() => ({ data: null }))
      ]);
      setStats(statsResponse.data);
      setOverview(overviewResponse.data);
    } catch (error: any) {
      console.error("Failed to fetch admin stats:", error);
      setError(error.response?.data?.detail || error.message || "Failed to fetch admin data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 space-y-4">
        <AlertCircle className="w-16 h-16 text-red-500" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Failed to Load Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md text-center">{error}</p>
        <Button onClick={fetchStats} className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

        <div className="relative p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/10">
                <Shield className="w-4 h-4" />
                Admin Dashboard
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-display leading-tight text-white">
                Welcome to Admin Panel 👋
              </h1>
              <p className="text-indigo-100 text-lg">
                Platform overview and key metrics at a glance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Users</p>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats?.users?.total || 0}</h4>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Active Users</p>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats?.users?.active || 0}</h4>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Submissions</p>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats?.content?.submissions || 0}</h4>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Avg Coins</p>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats?.engagement?.avg_coins || 0}</h4>
          </div>
        </div>
      </div>

      {/* Portal Access Cards */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <ExternalLink className="h-5 w-5 text-indigo-600" />
          Quick Portal Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/teacher/dashboard" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500 hover:border-emerald-400">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">Content Management</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">👨‍🏫 Teacher Portal</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Upload videos, manage courses</p>
                  </div>
                  <ExternalLink className="h-6 w-6 text-emerald-500" />
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="/student/dashboard" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 hover:border-blue-400">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Learning Experience</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">🎓 Student Portal</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">View as a student would see</p>
                  </div>
                  <ExternalLink className="h-6 w-6 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="/teacher/batch1" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500 hover:border-indigo-400">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">Quick Upload</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">📚 UPSC Batch 1</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Upload Prelims videos</p>
                  </div>
                  <ExternalLink className="h-6 w-6 text-indigo-500" />
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>

      {/* Drill Management Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Drill Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/admin/drill/questions">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Drill Questions</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Manage Content</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/drill/analytics">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Drill Analytics</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">View Performance</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/drill/insights">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">AI Insights</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Grok Analysis</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* CRM & User Management Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">CRM & User Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/admin/leads">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Lead Management</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Manage Leads</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/marketing-automation">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5 text-orange-600" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Marketing Automation</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Drip Campaigns</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/user-management">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">User Management</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Permissions & Logs</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/analytics">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-3">
                  <BarChart3 className="h-5 w-5 text-rose-600" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Analytics</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">View Reports</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Strategic Command Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          Strategic Command
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/admin/ai-planning">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-t-4 border-t-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Strategic AI</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">AI Planning</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/development-history">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-t-4 border-t-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Engineering</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Dev History</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/performance">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-t-4 border-t-emerald-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-3">
                      <Activity className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">System Health</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Performance</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Quick Stats & Action Center Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AdminActionCenter />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-500" />
                System Health & Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Banned Users</span>
                    <span className="font-bold text-red-600">{stats?.users?.banned || 0}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">New This Week</span>
                    <span className="font-bold text-indigo-600">+{stats?.users?.new_this_week || 0}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Average Streak</span>
                    <span className="font-bold text-emerald-600">{stats?.engagement?.avg_streak || 0} days</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Shadow Sessions</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{stats?.content?.shadow_sessions || 0}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Total Groups</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{stats?.content?.groups || 0}</span>
                  </div>
                  <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">AI Performance</span>
                    </div>
                    <p className="text-xs text-indigo-600/80">System operation is at peak efficiency</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Student Activity Overview - Real-time data */}
      {overview && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-green-600" />
            Real-Time Student Activity
            {overview?.live && (
              <span className="ml-2 flex gap-2">
                {overview.live.studying > 0 && (
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] rounded-full animate-pulse border border-purple-200">
                    {overview.live.studying} Studying Live
                  </span>
                )}
                {overview.live.drilling > 0 && (
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded-full animate-pulse border border-blue-200">
                    {overview.live.drilling} Drilling Live
                  </span>
                )}
              </span>
            )}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Total Students</p>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{overview?.users?.total_students || 0}</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Active Today</p>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{overview?.users?.active_today || 0}</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Tests Taken</p>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{overview?.activity?.total_tests_taken || 0}</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <Timer className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Study Sessions (Week)</p>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{overview?.activity?.study_sessions_this_week || 0}</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Batch Authorization Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Batch 1 Authorized</span>
                  <span className="font-bold text-indigo-600">{overview?.batches?.batch1_authorized || 0}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">RAS Authorized</span>
                  <span className="font-bold text-emerald-600">{overview?.batches?.ras_authorized || 0}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Avg Test Score</span>
                  <span className="font-bold text-purple-600">{overview?.activity?.average_score || 0}%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

