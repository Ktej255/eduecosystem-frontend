"use client";

import React, { useState, useEffect } from "react";
import {
  Users, Search, Filter, Download, Mail, MoreVertical, Badge,
  CheckCircle2, XCircle, Calendar, Clock, TrendingUp, Eye,
  UserPlus, Trash2, Edit, Shield
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge as BadgeUI } from "@/components/ui/badge";
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
import { Progress } from "@/components/ui/progress";

interface Student {
  id: number;
  email: string;
  full_name: string;
  is_batch1_authorized: boolean;
  is_ras_authorized: boolean;
  streak_days: number;
  coins: number;
  created_at?: string;
  last_login?: string;
}

export default function LearnersPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBatch, setFilterBatch] = useState<'all' | 'batch1' | 'ras'>('all');

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE}/admin/users?role=student&limit=500`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setStudents(data.users || []);
      }
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter and search logic
  const filteredStudents = students.filter(s => {
    const matchesSearch =
      s.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch =
      filterBatch === 'all' ||
      (filterBatch === 'batch1' && s.is_batch1_authorized) ||
      (filterBatch === 'ras' && s.is_ras_authorized);
    return matchesSearch && matchesBatch;
  });

  // Stats
  const stats = {
    total: students.length,
    batch1: students.filter(s => s.is_batch1_authorized).length,
    ras: students.filter(s => s.is_ras_authorized).length,
    activeStreak: students.filter(s => s.streak_days > 0).length
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <Users className="h-8 w-8 text-blue-600" />
            Learners
          </h1>
          <p className="text-muted-foreground dark:text-muted-foreground mt-1">
            Manage all enrolled students and their access
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">Total Students</p>
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
              <Users className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">Batch 1</p>
                <p className="text-3xl font-bold">{stats.batch1}</p>
              </div>
              <Shield className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">RAS Students</p>
                <p className="text-3xl font-bold">{stats.ras}</p>
              </div>
              <TrendingUp className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">Active Streaks</p>
                <p className="text-3xl font-bold">{stats.activeStreak}</p>
              </div>
              <CheckCircle2 className="h-10 w-10 opacity-30" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterBatch === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterBatch('all')}
              >
                All
              </Button>
              <Button
                variant={filterBatch === 'batch1' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterBatch('batch1')}
                className={filterBatch === 'batch1' ? 'bg-purple-600' : ''}
              >
                Batch 1
              </Button>
              <Button
                variant={filterBatch === 'ras' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterBatch('ras')}
                className={filterBatch === 'ras' ? 'bg-orange-600' : ''}
              >
                RAS
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Students ({filteredStudents.length})</CardTitle>
          <CardDescription>View and manage student accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-center">Batches</TableHead>
                  <TableHead className="text-center">Streak</TableHead>
                  <TableHead className="text-center">Coins</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                          {student.full_name?.[0] || student.email[0].toUpperCase()}
                        </div>
                        <span className="font-medium">
                          {student.full_name || student.email.split('@')[0]}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{student.email}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-1">
                        {student.is_batch1_authorized && (
                          <BadgeUI className="bg-purple-100 text-purple-700 text-xs">B1</BadgeUI>
                        )}
                        {student.is_ras_authorized && (
                          <BadgeUI className="bg-orange-100 text-orange-700 text-xs">RAS</BadgeUI>
                        )}
                        {!student.is_batch1_authorized && !student.is_ras_authorized && (
                          <BadgeUI variant="outline" className="text-muted-foreground text-xs">None</BadgeUI>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-orange-500 font-medium">🔥 {student.streak_days}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-yellow-600 font-medium">🪙 {student.coins}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Access
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {filteredStudents.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No students found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
