"use client";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard, TrendingUp, Users, DollarSign, BookOpen,
  ArrowUpRight, ArrowDownRight, Calendar, Clock, Target,
  BarChart3, PieChart, Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function ExecutiveDashboardPage() {
  const [dateRange, setDateRange] = useState("7d");

  // Mock executive metrics
  const metrics = {
    revenue: { value: "₹2,45,000", change: 12.5, trend: "up" },
    students: { value: "1,234", change: 8.2, trend: "up" },
    engagement: { value: "76%", change: -2.1, trend: "down" },
    completion: { value: "68%", change: 5.4, trend: "up" }
  };

  const topCourses = [
    { name: "UPSC Polity", students: 450, revenue: "₹67,500", progress: 85 },
    { name: "RAS Foundation", students: 320, revenue: "₹48,000", progress: 72 },
    { name: "Current Affairs", students: 280, revenue: "₹42,000", progress: 65 },
  ];

  const recentActivity = [
    { type: "enrollment", message: "25 new students enrolled in Batch 1", time: "2 hours ago" },
    { type: "completion", message: "Day 5 content uploaded successfully", time: "5 hours ago" },
    { type: "revenue", message: "₹15,000 received from course sales", time: "1 day ago" },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <LayoutDashboard className="h-8 w-8 text-indigo-600" />
            Executive Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            High-level overview of business performance
          </p>
        </div>
        <div className="flex gap-2">
          {["7d", "30d", "90d", "1y"].map((range) => (
            <Button
              key={range}
              variant={dateRange === range ? "default" : "outline"}
              size="sm"
              onClick={() => setDateRange(range)}
            >
              {range === "7d" ? "7 Days" : range === "30d" ? "30 Days" : range === "90d" ? "90 Days" : "1 Year"}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-80">Revenue</p>
                <p className="text-2xl font-bold mt-1">{metrics.revenue.value}</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +{metrics.revenue.change}%
                </div>
              </div>
              <DollarSign className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-80">Total Students</p>
                <p className="text-2xl font-bold mt-1">{metrics.students.value}</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +{metrics.students.change}%
                </div>
              </div>
              <Users className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-violet-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-80">Engagement</p>
                <p className="text-2xl font-bold mt-1">{metrics.engagement.value}</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                  {metrics.engagement.change}%
                </div>
              </div>
              <Activity className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-amber-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-80">Completion Rate</p>
                <p className="text-2xl font-bold mt-1">{metrics.completion.value}</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +{metrics.completion.change}%
                </div>
              </div>
              <Target className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Revenue chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-600" />
              Student Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <PieChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Distribution chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Courses & Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
            <CardDescription>Based on enrollment and revenue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCourses.map((course, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : 'bg-amber-700'
                    }`}>
                    #{idx + 1}
                  </div>
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-gray-500">{course.students} students</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{course.revenue}</p>
                  <Progress value={course.progress} className="w-20 h-2 mt-1" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest platform events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.type === 'enrollment' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'completion' ? 'bg-green-100 text-green-600' :
                      'bg-yellow-100 text-yellow-600'
                  }`}>
                  {activity.type === 'enrollment' ? <Users className="h-4 w-4" /> :
                    activity.type === 'completion' ? <BookOpen className="h-4 w-4" /> :
                      <DollarSign className="h-4 w-4" />}
                </div>
                <div>
                  <p className="text-sm">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
