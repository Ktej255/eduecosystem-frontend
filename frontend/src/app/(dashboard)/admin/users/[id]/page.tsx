"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Mail, Shield, User, Users } from "lucide-react";
import api from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TeacherContextItem {
  teacher_id: number;
  teacher_name: string;
  teacher_email: string;
  course_count: number;
}

export default function AdminUserDetailPage() {
  const params = useParams();
  const userId = params.id as string;
  const [data, setData] = useState<any>(null);
  const [performance, setPerformance] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const userRes = await api.get(`/admin/users/${userId}`);
        setData(userRes.data);

        if (userRes.data.user?.role === "student") {
          const perfRes = await api.get(`/admin/students/${userId}/performance`);
          setPerformance(perfRes.data);
        }
      } catch (error) {
        console.error("Failed to load admin user detail:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [userId]);

  const user = data?.user;
  const teacherContext: TeacherContextItem[] = data?.teacher_context || [];
  const stats = useMemo(() => performance?.stats || null, [performance]);

  if (loading) {
    return <div className="p-10 text-center text-muted-foreground">Loading user detail...</div>;
  }

  if (!user) {
    return <div className="p-10 text-center text-muted-foreground">User not found.</div>;
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/admin/users">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <User className="w-7 h-7 text-indigo-600" />
            User Command View
          </h1>
          <p className="text-muted-foreground mt-1">
            Core account detail with portal ownership context.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{user.full_name || "Unnamed User"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border p-4">
              <p className="text-xs uppercase text-muted-foreground mb-1">Email</p>
              <p className="font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-600" />
                {user.email}
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-xs uppercase text-muted-foreground mb-1">Role</p>
              <div className="flex items-center gap-2">
                <Badge>{user.role}</Badge>
                {user.is_active ? <Badge variant="outline">Active</Badge> : <Badge variant="secondary">Inactive</Badge>}
              </div>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-xs uppercase text-muted-foreground mb-1">Last Login</p>
              <p className="font-medium">{user.last_login ? new Date(user.last_login).toLocaleString() : "Never"}</p>
            </div>
          </div>

          {user.role === "student" && stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border p-4">
                <p className="text-xs uppercase text-muted-foreground mb-1">Tests</p>
                <p className="text-2xl font-bold">{stats.total_tests}</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-xs uppercase text-muted-foreground mb-1">Average Score</p>
                <p className="text-2xl font-bold">{stats.average_score}%</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-xs uppercase text-muted-foreground mb-1">Study Time</p>
                <p className="text-2xl font-bold">{stats.total_study_time_minutes}m</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-xs uppercase text-muted-foreground mb-1">Streak</p>
                <p className="text-2xl font-bold">{stats.streak_days}</p>
              </div>
            </div>
          )}

          {user.role === "student" && (
            <div className="flex flex-wrap gap-2">
              <Link href={`/admin/students/${user.id}`}>
                <Button size="sm">Open Student Detail</Button>
              </Link>
              <Link href={`/admin/student-journey`}>
                <Button size="sm" variant="outline">Open Student Journey Search</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      {teacherContext.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Teacher Ownership Context
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teacherContext.map((teacher) => (
              <div key={teacher.teacher_id} className="rounded-xl border p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{teacher.teacher_name}</p>
                  <p className="text-sm text-muted-foreground">{teacher.teacher_email}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {teacher.course_count} connected course{teacher.course_count === 1 ? "" : "s"}
                  </p>
                </div>
                <Link href={`/admin/teachers/${teacher.teacher_id}`}>
                  <Button size="sm" variant="outline">
                    <Shield className="mr-2 h-4 w-4" />
                    Open Teacher
                  </Button>
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {performance?.test_results?.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-600" />
              Recent Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {performance.test_results.slice(0, 8).map((result: any) => (
              <div key={result.id} className="rounded-xl border p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">Cycle {result.cycle_id}, Day {result.day_number}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(result.timestamp).toLocaleString()}
                  </p>
                </div>
                <Badge variant="outline">
                  {result.correct_count}/{result.total_questions}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
