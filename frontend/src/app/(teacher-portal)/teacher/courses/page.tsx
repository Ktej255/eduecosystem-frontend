"use client";

import { useState, useEffect, useCallback } from "react";
import {
    GraduationCap,
    Users,
    BookOpen,
    BarChart3,
    Clock,
    CheckCircle2,
    AlertCircle,
    MoreVertical,
    Eye,
    Pencil,
    Settings,
    Trash2,
    Plus,
    TrendingUp,
    Play,
    Loader2,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import api from "@/lib/api";
import CourseCreationWizard from "@/components/teacher-portal/courses/CourseCreationWizard";

interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail_url: string | null;
    total_enrollments: number;
    is_published: boolean;
    level: string;
    category: string;
    total_duration_minutes?: number;
    average_rating?: number;
    total_reviews?: number;
    created_at?: string;
}

function getStatusBadge(isPublished: boolean) {
    if (isPublished) {
        return <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">Published</Badge>;
    }
    return <Badge className="bg-amber-50 text-amber-700 border-amber-200">Draft</Badge>;
}

function getCompletionColor(percentage: number) {
    if (percentage >= 80) return "bg-emerald-500";
    if (percentage >= 50) return "bg-blue-500";
    return "bg-amber-500";
}

export default function MyCoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCourses = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get("/courses/");
            setCourses(response.data);
        } catch (err: any) {
            console.error("Failed to fetch courses:", err);
            setError("Failed to load courses. Please check your connection.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Stats computed from real data
    const courseStats = [
        { label: "Total Courses", value: courses.length.toString(), icon: BookOpen, color: "text-blue-600", bgColor: "bg-blue-100" },
        { label: "Total Students", value: courses.reduce((sum, c) => sum + (c.total_enrollments || 0), 0).toLocaleString(), icon: Users, color: "text-green-600", bgColor: "bg-green-100" },
        { label: "Published", value: courses.filter(c => c.is_published).length.toString(), icon: CheckCircle2, color: "text-emerald-600", bgColor: "bg-emerald-100" },
        { label: "Total Revenue", value: `₹${courses.reduce((sum, c) => sum + (c.price * (c.total_enrollments || 0)), 0).toLocaleString()}`, icon: TrendingUp, color: "text-amber-600", bgColor: "bg-amber-100" },
    ];

    return (
        <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <GraduationCap className="h-8 w-8 text-emerald-600" />
                        My Courses
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                        Create, manage, and track all your courses.
                    </p>
                </div>
                <CourseCreationWizard onCourseCreated={fetchCourses} />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {courseStats.map((stat) => (
                    <Card key={stat.label} className="border-slate-200 dark:border-slate-800">
                        <CardContent className="p-4 flex items-center gap-3">
                            <div className={`${stat.bgColor} p-2.5 rounded-lg`}>
                                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</p>
                                <p className="text-xs text-slate-500">{stat.label}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Course Grid */}
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
                    <span className="ml-3 text-slate-500">Loading courses...</span>
                </div>
            ) : error ? (
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
                    <CardContent className="p-6 flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        <div>
                            <p className="font-medium text-red-700 dark:text-red-400">{error}</p>
                            <Button variant="link" className="text-red-600 p-0 h-auto" onClick={fetchCourses}>
                                Retry
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ) : courses.length === 0 ? (
                <Card className="border-dashed border-2 border-slate-300 dark:border-slate-700">
                    <CardContent className="p-12 flex flex-col items-center justify-center text-center">
                        <BookOpen className="h-12 w-12 text-slate-400 mb-4" />
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">No courses yet</h3>
                        <p className="text-slate-500 mb-4">Get started by creating your first course. Our wizard will guide you through the process.</p>
                        <CourseCreationWizard onCourseCreated={fetchCourses} />
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Card key={course.id} className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                            {/* Course Thumbnail / Header */}
                            <div className="h-36 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                                <span className="text-5xl font-black text-white/30">{course.title?.charAt(0) || "C"}</span>
                                <div className="absolute top-3 right-3">
                                    {getStatusBadge(course.is_published)}
                                </div>
                            </div>

                            <CardContent className="p-4">
                                <h3 className="font-bold text-slate-800 dark:text-slate-100 line-clamp-2 mb-1">
                                    {course.title || "Untitled Course"}
                                </h3>
                                <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                                    {course.description || "No description yet."}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Users className="h-3.5 w-3.5" />
                                        <span>{course.total_enrollments || 0} students</span>
                                    </div>
                                    <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                                        ₹{course.price || 0}
                                    </div>
                                    {course.level && (
                                        <Badge variant="outline" className="text-[10px] capitalize">
                                            {course.level}
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="p-3 pt-0 flex gap-2">
                                <Button variant="outline" className="flex-1 h-8 text-xs" asChild>
                                    <Link href={`/lms/courses/${course.id}/edit`}>
                                        <Pencil className="mr-1.5 h-3 w-3" />
                                        Edit
                                    </Link>
                                </Button>
                                <Button className="flex-1 h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                                    <Link href={`/lms/courses/${course.id}`}>
                                        <Eye className="mr-1.5 h-3 w-3" />
                                        View
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
