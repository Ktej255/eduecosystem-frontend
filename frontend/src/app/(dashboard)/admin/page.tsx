"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Users, FileText, TrendingUp, Shield, BookOpen, BarChart3, Brain,
  GraduationCap, ExternalLink, Zap, Activity, ArrowRight, Search,
  Clock, CheckCircle2, Upload, AlertCircle, Eye, ChevronRight,
  Bell, Send, UserCheck, BookMarked, Target, Award
} from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";

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
  const [stats, setStats] = useState<any>(null);
  const [users, setUsers] = useState<UserData[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<"overview" | "teachers" | "students">("overview");

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      // Fetch admin stats
      try {
        const statsRes = await api.get("/admin/stats");
        setStats(statsRes.data);
      } catch (e) {
        console.error("Stats fetch failed:", e);
      }

      // Fetch all users
      try {
        const usersRes = await api.get("/admin/users?limit=200");
        setUsers(usersRes.data.users || []);
      } catch (e) {
        console.error("Users fetch failed:", e);
      }

      // Fetch test results summary
      try {
        const token = localStorage.getItem('token');
        const testRes = await fetch(`${API_BASE}/batch1/test-results/all`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (testRes.ok) {
          const data = await testRes.json();
          setTestResults(data);
        }
      } catch (e) {
        console.error("Test results fetch failed:", e);
      }
    } finally {
      setLoading(false);
    }
  };

  // Filter users by role
  const teachers = users.filter(u => u.role === "teacher" || u.role === "admin");
  const students = users.filter(u => u.role === "student");
  const batch1Students = students.filter(u => u.is_batch1_authorized);
  const rasStudents = students.filter(u => u.is_ras_authorized);
  const activeToday = students.filter(u => u.last_login && new Date(u.last_login).toDateString() === new Date().toDateString());

  // Filter by search
  const filteredStudents = students.filter(u =>
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (u.full_name && u.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/10">
                <Shield className="w-4 h-4" />
                Admin Control Center
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Welcome to EduEcosystem Admin 👋
              </h1>
              <p className="text-indigo-100">
                Manage teachers, students, content, and platform analytics
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="gap-2">
                <Bell className="h-4 w-4" />
                Announcements
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-4">
            <Users className="h-6 w-6 mb-2 opacity-80" />
            <p className="text-2xl font-bold">{students.length}</p>
            <p className="text-xs text-blue-100">Total Students</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
          <CardContent className="p-4">
            <Activity className="h-6 w-6 mb-2 opacity-80" />
            <p className="text-2xl font-bold">{activeToday.length}</p>
            <p className="text-xs text-emerald-100">Active Today</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <BookOpen className="h-6 w-6 mb-2 opacity-80" />
            <p className="text-2xl font-bold">{batch1Students.length}</p>
            <p className="text-xs text-purple-100">Batch 1</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-4">
            <Target className="h-6 w-6 mb-2 opacity-80" />
            <p className="text-2xl font-bold">{rasStudents.length}</p>
            <p className="text-xs text-orange-100">RAS Students</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0">
          <CardContent className="p-4">
            <Award className="h-6 w-6 mb-2 opacity-80" />
            <p className="text-2xl font-bold">{testResults.length}</p>
            <p className="text-xs text-pink-100">Tests Taken</p>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b pb-2">
        {["overview", "teachers", "students"].map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedTab(tab as any)}
            className="capitalize"
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Overview Tab */}
      {selectedTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Portal Access */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-indigo-600" />
                Quick Portal Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="/teacher/dashboard" target="_blank" className="block">
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500 text-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Teacher Portal</p>
                      <p className="text-xs text-gray-500">Upload content, view analytics</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </a>
              <a href="/student/dashboard" target="_blank" className="block">
                <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500 text-white">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Student Portal</p>
                      <p className="text-xs text-gray-500">View as student</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </a>
              <Link href="/crm" className="block">
                <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500 text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">CRM Dashboard</p>
                      <p className="text-xs text-gray-500">Leads & conversions</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Students */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-green-600" />
                Recent Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {students.slice(0, 5).map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                        {student.full_name?.[0] || student.email[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{student.full_name || student.email.split('@')[0]}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {student.is_batch1_authorized && (
                        <Badge variant="outline" className="text-xs bg-purple-50">B1</Badge>
                      )}
                      {student.is_ras_authorized && (
                        <Badge variant="outline" className="text-xs bg-orange-50">RAS</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Platform Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Platform Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total Users</span>
                <span className="font-bold">{stats?.users?.total || users.length}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Active Users</span>
                <span className="font-bold">{stats?.users?.active || 0}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Avg Streak</span>
                <span className="font-bold">{stats?.engagement?.avg_streak || 0} days</span>
              </div>
            </CardContent>
          </Card>

          {/* Management Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Link href="/admin/leads">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" /> Leads
                </Button>
              </Link>
              <Link href="/admin/user-management">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Shield className="h-4 w-4" /> User Mgmt
                </Button>
              </Link>
              <Link href="/admin/analytics">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <BarChart3 className="h-4 w-4" /> Analytics
                </Button>
              </Link>
              <Link href="/admin/drill/questions">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <BookOpen className="h-4 w-4" /> Drills
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Teachers Tab */}
      {selectedTab === "teachers" && (
        <Card>
          <CardHeader>
            <CardTitle>Teacher Management</CardTitle>
          </CardHeader>
          <CardContent>
            {teachers.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <GraduationCap className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No teachers registered yet</p>
                <p className="text-sm">Teachers will appear here once added</p>
              </div>
            ) : (
              <div className="space-y-3">
                {teachers.map((teacher) => (
                  <div key={teacher.id} className="flex items-center justify-between p-4 rounded-lg border hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
                        {teacher.full_name?.[0] || 'T'}
                      </div>
                      <div>
                        <p className="font-semibold">{teacher.full_name || teacher.email}</p>
                        <p className="text-sm text-gray-500">{teacher.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-emerald-100 text-emerald-700">{teacher.role}</Badge>
                      <Link href={`/admin/teachers/${teacher.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Students Tab */}
      {selectedTab === "students" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Student Management ({students.length})</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search students..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredStudents.slice(0, 20).map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 rounded-lg border hover:shadow-sm transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {student.full_name?.[0] || student.email[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium">{student.full_name || student.email.split('@')[0]}</p>
                      <p className="text-xs text-gray-500">{student.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {student.is_batch1_authorized && (
                        <Badge className="bg-purple-100 text-purple-700 text-xs">Batch 1</Badge>
                      )}
                      {student.is_ras_authorized && (
                        <Badge className="bg-orange-100 text-orange-700 text-xs">RAS</Badge>
                      )}
                    </div>
                    <div className="text-right text-xs text-gray-500 mr-3">
                      <p>🔥 {student.streak_days} days</p>
                      <p>💰 {student.coins} coins</p>
                    </div>
                    <Link href={`/admin/students/${student.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
              {filteredStudents.length > 20 && (
                <p className="text-center text-sm text-gray-500 py-2">
                  Showing 20 of {filteredStudents.length} students
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
