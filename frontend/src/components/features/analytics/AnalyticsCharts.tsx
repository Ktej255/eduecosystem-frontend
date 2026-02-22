"use client";

import { Card } from "@/components/ui/card";
import {
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Zap,
  Award,
  Brain,
  Users,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

interface AnalyticsChartsProps {
  stats: any;
  detailedStats: any;
}

export default function AnalyticsCharts({
  stats,
  detailedStats,
}: AnalyticsChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Skills Radar Chart */}
      <Card className="bg-card border-border p-6 shadow-md transition-all">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
          <Brain className="mr-2 h-5 w-5 text-purple-500 dark:text-purple-400" />
          Cognitive Skills Profile
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={detailedStats?.skills || []}
            >
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 150]}
                tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
              />
              <Radar
                name="My Skills"
                dataKey="A"
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.5}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  color: "var(--foreground)"
                }}
                itemStyle={{ color: "var(--primary)" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Focus Trends Line Chart */}
      <Card className="bg-card border-border p-6 shadow-md transition-all">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-cyan-600 dark:text-cyan-400" />
          Focus Trends (Last 10 Sessions)
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={
                stats?.attention?.recent_scores?.map(
                  (score: number, i: number) => ({
                    name: `Session ${i + 1}`,
                    score,
                  }),
                ) || []
              }
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "var(--foreground)" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#06B6D4"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Comparative Analysis */}
      <Card className="bg-card border-border p-6 shadow-md transition-all">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
          <Users className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
          Comparative Analysis
        </h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Your Average Focus</span>
              <span className="text-foreground font-bold">
                {detailedStats?.comparative?.user_focus || 0}%
              </span>
            </div>
            <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{
                  width: `${detailedStats?.comparative?.user_focus || 0}%`,
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Global Average</span>
              <span className="text-foreground font-bold">
                {detailedStats?.comparative?.global_focus || 0}%
              </span>
            </div>
            <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-muted-foreground/30"
                style={{
                  width: `${detailedStats?.comparative?.global_focus || 0}%`,
                }}
              />
            </div>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-center text-muted-foreground">
              You are in the{" "}
              <span className="text-green-400 font-bold">
                Top {100 - (detailedStats?.comparative?.user_percentile || 0)}%
              </span>{" "}
              of all learners!
            </p>
          </div>
        </div>
      </Card>

      {/* Activity Heatmap (Simplified as Bar for now) */}
      <Card className="bg-card border-border p-6 shadow-md transition-all">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          Weekly Activity Volume
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={Object.entries(stats?.weekly_activity || {}).map(
                ([day, min]) => ({ name: day, minutes: min }),
              )}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "var(--foreground)" }}
              />
              <Legend />
              <Bar dataKey="minutes" fill="var(--primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
