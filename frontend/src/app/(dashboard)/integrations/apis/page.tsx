"use client";

import React, { useState } from "react";
import {
  Key, ArrowLeft, Copy, Check, RefreshCw,
  ShieldAlert, Eye, EyeOff, Terminal, BookOpen,
  BarChart3, Clock
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ApiAccessPage() {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const apiKey = "sk_live_...********************";
  const fullKey = "sk_live_****************************************************************";

  const usageStats = [
    { endpoint: "/v1/courses", method: "GET", requests: 12500, errors: 45, latency: "120ms" },
    { endpoint: "/v1/students", method: "POST", requests: 3400, errors: 12, latency: "240ms" },
    { endpoint: "/v1/analytics", method: "GET", requests: 8900, errors: 23, latency: "180ms" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(fullKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <Terminal className="h-8 w-8 text-gray-700 dark:text-gray-300" />
            API Access
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your API keys and monitor usage
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BookOpen className="h-4 w-4 mr-2" />
            Documentation
          </Button>
          <Button>
            <Key className="h-4 w-4 mr-2" />
            Generate New Key
          </Button>
        </div>
      </div>

      {/* API Key Section */}
      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/10 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-orange-900 dark:text-orange-100 flex items-center gap-2">
            <ShieldAlert className="h-5 w-5" />
            Production API Key
          </CardTitle>
          <CardDescription className="text-orange-700 dark:text-orange-300">
            This key has full access to your account. Keep it secure and never share it publicly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={showKey ? fullKey : apiKey}
                readOnly
                className="font-mono bg-white dark:bg-gray-900 pr-10"
                type={showKey ? "text" : "password"}
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <Button variant="secondary" onClick={handleCopy} className="min-w-[100px]">
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <RefreshCw className="h-4 w-4 mr-2" />
              Roll Key
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <BarChart3 className="h-5 w-5" />
              <span>Total Requests (24h)</span>
            </div>
            <p className="text-3xl font-bold">24,500</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <ShieldAlert className="h-5 w-5" />
              <span>Error Rate</span>
            </div>
            <p className="text-3xl font-bold text-green-600">0.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Clock className="h-5 w-5" />
              <span>Avg Latency</span>
            </div>
            <p className="text-3xl font-bold">145ms</p>
          </CardContent>
        </Card>
      </div>

      {/* Endpoint Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Endpoint Usage</CardTitle>
          <CardDescription>Top endpoints by request volume</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Endpoint</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Requests</TableHead>
                <TableHead className="text-right">Error Rate</TableHead>
                <TableHead className="text-right">Latency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usageStats.map((stat, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-mono text-sm">{stat.endpoint}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{stat.method}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{stat.requests.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-green-600">{stat.errors} (0.1%)</TableCell>
                  <TableCell className="text-right">{stat.latency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
