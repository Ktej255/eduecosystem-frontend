"use client";

import React, { useState } from "react";
import {
  Bell, Plus, MoreVertical, Eye, Edit, Trash2,
  Calendar, Clock, Search, ArrowLeft, Send, Users,
  CheckCircle2, AlertCircle, Info, Megaphone
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
  audience: string;
  sentDate: string;
  readCount: number;
  totalRecipients: number;
}

const mockAnnouncements: Announcement[] = [
  { id: "1", title: "New Batch 1 Content Available", message: "Day 5 materials have been uploaded. Check your dashboard for the latest content.", type: "success", audience: "Batch 1 Students", sentDate: "Jan 11, 2026", readCount: 234, totalRecipients: 280 },
  { id: "2", title: "Maintenance Scheduled", message: "The platform will be under maintenance on Sunday from 2 AM to 4 AM.", type: "warning", audience: "All Users", sentDate: "Jan 10, 2026", readCount: 456, totalRecipients: 500 },
  { id: "3", title: "Upcoming Live Class", message: "Don't miss the special session on Constitutional Amendments tomorrow at 7 PM.", type: "info", audience: "Batch 1 Students", sentDate: "Jan 9, 2026", readCount: 189, totalRecipients: 280 },
  { id: "4", title: "Important: Exam Date Announced", message: "The final assessment for Polity module is scheduled for January 20th.", type: "urgent", audience: "Batch 1 Students", sentDate: "Jan 8, 2026", readCount: 275, totalRecipients: 280 },
];

export default function AnnouncementsPage() {
  const [announcements] = useState(mockAnnouncements);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const filteredAnnouncements = announcements.filter(a =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeIcon = (type: Announcement['type']) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'urgent': return <Megaphone className="h-5 w-5 text-red-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getTypeBadge = (type: Announcement['type']) => {
    const styles = {
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      urgent: 'bg-red-100 text-red-700',
      info: 'bg-blue-100 text-blue-700'
    };
    return <Badge className={styles[type]}>{type}</Badge>;
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <Bell className="h-8 w-8 text-purple-600" />
            Announcements
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Create and manage announcements for your students
          </p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600">
              <Plus className="h-4 w-4 mr-2" />
              New Announcement
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Create Announcement</DialogTitle>
              <DialogDescription>
                Send a new announcement to your students
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="Announcement title..." className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Write your message..." className="mt-1" rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option value="info">Info</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Audience</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>All Users</option>
                    <option>Batch 1 Students</option>
                    <option>RAS Students</option>
                  </select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
              <Button className="bg-purple-600">
                <Send className="h-4 w-4 mr-2" />
                Send Announcement
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-0">
          <CardContent className="p-4">
            <p className="text-3xl font-bold">{announcements.length}</p>
            <p className="text-sm opacity-80">Total Sent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">
              {Math.round(announcements.reduce((sum, a) => sum + (a.readCount / a.totalRecipients), 0) / announcements.length * 100)}%
            </p>
            <p className="text-sm text-gray-500">Avg Read Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">
              {announcements.reduce((sum, a) => sum + a.readCount, 0)}
            </p>
            <p className="text-sm text-gray-500">Total Reads</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-orange-600">
              {announcements.filter(a => a.type === 'urgent').length}
            </p>
            <p className="text-sm text-gray-500">Urgent</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search announcements..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <Card key={announcement.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  {getTypeIcon(announcement.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        {announcement.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{announcement.message}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Eye className="h-4 w-4 mr-2" />View Details</DropdownMenuItem>
                        <DropdownMenuItem><Edit className="h-4 w-4 mr-2" />Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600"><Trash2 className="h-4 w-4 mr-2" />Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    {getTypeBadge(announcement.type)}
                    <span className="text-gray-500 flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {announcement.audience}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {announcement.sentDate}
                    </span>
                    <span className="text-gray-500">
                      {announcement.readCount}/{announcement.totalRecipients} read
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
