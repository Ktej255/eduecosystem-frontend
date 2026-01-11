"use client";

import React, { useState } from "react";
import {
  GraduationCap, Search, Plus, MoreVertical,
  CheckCircle2, Mail, Trash2, Edit, Eye, Star, BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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

// Mock data for instructors
const mockInstructors = [
  { id: 1, name: "Dr. Rajesh Sharma", email: "rajesh@edueco.com", courses: 5, students: 234, rating: 4.8, status: "active" },
  { id: 2, name: "Prof. Meera Gupta", email: "meera@edueco.com", courses: 3, students: 156, rating: 4.9, status: "active" },
  { id: 3, name: "Amit Kumar", email: "amit@edueco.com", courses: 2, students: 89, rating: 4.6, status: "pending" },
];

export default function InstructorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [instructors] = useState(mockInstructors);

  const filteredInstructors = instructors.filter(i =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            Instructors
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage course instructors and their assignments
          </p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Instructor
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600">{instructors.length}</p>
              <p className="text-sm text-gray-500">Total Instructors</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {instructors.reduce((sum, i) => sum + i.courses, 0)}
              </p>
              <p className="text-sm text-gray-500">Total Courses</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                {instructors.reduce((sum, i) => sum + i.students, 0)}
              </p>
              <p className="text-sm text-gray-500">Total Students</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">
                {(instructors.reduce((sum, i) => sum + i.rating, 0) / instructors.length).toFixed(1)}
              </p>
              <p className="text-sm text-gray-500">Avg Rating</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search instructors..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Instructors Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Instructors</CardTitle>
          <CardDescription>View and manage instructor accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-center">Courses</TableHead>
                  <TableHead className="text-center">Students</TableHead>
                  <TableHead className="text-center">Rating</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInstructors.map((instructor) => (
                  <TableRow key={instructor.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
                          {instructor.name[0]}
                        </div>
                        <span className="font-medium">{instructor.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-500">{instructor.email}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <BookOpen className="h-4 w-4 text-blue-500" />
                        {instructor.courses}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{instructor.students}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        {instructor.rating}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {instructor.status === 'active' ? (
                        <Badge className="bg-green-100 text-green-700">Active</Badge>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
                      )}
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
                            Edit
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
        </CardContent>
      </Card>
    </div>
  );
}
