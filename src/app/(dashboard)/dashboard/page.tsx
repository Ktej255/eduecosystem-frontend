"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  MoreHorizontal,
  Calendar as CalendarIcon,
} from "lucide-react";
import Link from "next/link";
import AIAssistant from "@/components/ai-assistant";
import { useAuth } from "@/contexts/auth-context";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

const DashboardCharts = dynamic(() => import("@/components/dashboard/DashboardCharts"), {
  ssr: false,
  loading: () => <LoadingSkeleton variant="card" className="h-[400px]" />
});
import { useGameStats, useWolfPack, useTasks, useMyCourses } from "@/hooks/use-api";

import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { user } = useAuth();
  const { stats } = useGameStats();
  const { pack } = useWolfPack();
  const { tasks } = useTasks();
  const { courses, loading: coursesLoading } = useMyCourses();

  // Calculate stats
  const coursesInProgress = courses?.length || 0;
  // Mock study hours for now, or derive from stats if available
  const studyHours = stats?.total_study_hours || 12.5;
  const avgQuizScore = stats?.avg_quiz_score || 85;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className={cn("relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-lg", animations.fadeIn)}>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">
            Good evening, {user?.full_name || "Student"}
          </h1>
          <p className="text-blue-100 max-w-xl mb-6">
            Welcome back to your learning dashboard. You have {coursesInProgress} active courses and {tasks?.length || 0} pending tasks.
          </p>
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            View My Plan
          </Button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 bg-[url('https://illustrations.popsy.co/white/student-going-to-school.svg')] bg-no-repeat bg-contain bg-right-bottom" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className={cn(animations.cardEntry, animations.delay100)}>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Courses in Progress</p>
              <h3 className="text-2xl font-bold">{coursesInProgress}</h3>
            </div>
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card className={cn(animations.cardEntry, animations.delay200)}>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Study Hours</p>
              <h3 className="text-2xl font-bold">{studyHours}</h3>
            </div>
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </CardContent>
        </Card>
        <Card className={cn(animations.cardEntry, animations.delay300)}>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Avg. Quiz Score</p>
              <h3 className="text-2xl font-bold">{avgQuizScore}%</h3>
            </div>
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section - Lazy Loaded */}
      <div className={cn(animations.slideUp, animations.delay500)}>
        <DashboardCharts />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Continue Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coursesLoading ? (
                <p className="text-sm text-muted-foreground">Loading courses...</p>
              ) : courses && courses.length > 0 ? (
                courses.slice(0, 3).map((enrollment: any) => (
                  <div key={enrollment.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{enrollment.course?.title || "Course Title"}</h4>
                        <p className="text-xs text-muted-foreground">
                          {enrollment.progress_percentage || 0}% Complete
                        </p>
                      </div>
                    </div>
                    <Link href={`/lms/courses/${enrollment.course_id}`}>
                      <Button size="sm" variant="ghost">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No active courses. <Link href="/lms/courses" className="text-blue-500 hover:underline">Browse courses</Link></p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks && tasks.length > 0 ? (
                tasks.slice(0, 3).map((task: any, i: number) => (
                  <div key={i} className="flex items-start space-x-4 p-3 border-b last:border-0 border-border">
                    <div className="mt-1">
                      <div className={`h-2 w-2 rounded-full ${task.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{task.title}</h4>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        <span>{task.due_date ? new Date(task.due_date).toLocaleDateString() : "No due date"}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No upcoming tasks.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <AIAssistant />
    </div>
  );
}
