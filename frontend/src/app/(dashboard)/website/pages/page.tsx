"use client";

import React, { useState } from "react";
import {
  FileText, Plus, MoreVertical, Eye, Edit, Trash2,
  Globe, Home, Info, Phone, Search, ExternalLink,
  CheckCircle2, Clock, ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface WebPage {
  id: string;
  title: string;
  slug: string;
  status: 'published' | 'draft';
  lastUpdated: string;
  icon: React.ReactNode;
}

const mockPages: WebPage[] = [
  { id: "1", title: "Home Page", slug: "/", status: "published", lastUpdated: "2 days ago", icon: <Home className="h-5 w-5" /> },
  { id: "2", title: "About Us", slug: "/about", status: "published", lastUpdated: "1 week ago", icon: <Info className="h-5 w-5" /> },
  { id: "3", title: "Courses", slug: "/courses", status: "published", lastUpdated: "3 days ago", icon: <FileText className="h-5 w-5" /> },
  { id: "4", title: "Contact", slug: "/contact", status: "draft", lastUpdated: "5 days ago", icon: <Phone className="h-5 w-5" /> },
  { id: "5", title: "Privacy Policy", slug: "/privacy", status: "published", lastUpdated: "1 month ago", icon: <FileText className="h-5 w-5" /> },
  { id: "6", title: "Terms of Service", slug: "/terms", status: "published", lastUpdated: "1 month ago", icon: <FileText className="h-5 w-5" /> },
];

export default function WebsitePagesPage() {
  const [pages, setPages] = useState(mockPages);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPages = pages.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <Globe className="h-8 w-8 text-cyan-600" />
            Website Pages
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your website content pages
          </p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-600 to-blue-600">
          <Plus className="h-4 w-4 mr-2" />
          Create Page
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search pages..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPages.map((page) => (
          <Card key={page.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardContent className="p-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 flex items-center justify-center text-cyan-600">
                    {page.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{page.title}</h3>
                    <p className="text-sm text-gray-500">{page.slug}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex items-center justify-between">
                {page.status === 'published' ? (
                  <Badge className="bg-green-100 text-green-700">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Published
                  </Badge>
                ) : (
                  <Badge className="bg-yellow-100 text-yellow-700">
                    <Clock className="h-3 w-3 mr-1" />
                    Draft
                  </Badge>
                )}
                <span className="text-xs text-gray-400">Updated {page.lastUpdated}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPages.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500">No pages found</p>
          <Button className="mt-4" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Page
          </Button>
        </div>
      )}
    </div>
  );
}
