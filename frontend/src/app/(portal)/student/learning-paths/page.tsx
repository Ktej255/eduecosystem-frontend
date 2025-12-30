"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, PlayCircle, CheckCircle } from "lucide-react";
import learningPathService from "@/services/learningPathService";
import { PathEnrollment } from "@/types/learningPath";

export default function MyPlansPage() {
    const [enrollments, setEnrollments] = useState<PathEnrollment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEnrollments();
    }, []);

    const loadEnrollments = async () => {
        try {
            setLoading(true);
            const data = await learningPathService.getMyEnrollments();
            setEnrollments(data);
        } catch (error) {
            console.error("Failed to load enrollments", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Customized Plans</h1>
                <p className="text-gray-500 dark:text-gray-400">Personalized learning paths assigned to you</p>
            </div>

            {loading ? (
                <div className="text-center py-12 text-gray-500">Loading your plans...</div>
            ) : enrollments.length === 0 ? (
                <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <BookOpen className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No Plans Assigned Yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto">
                        Your instructor hasn't assigned any customized learning paths to you yet.
                        Please contact your administrator if you are expecting one.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {enrollments.map((enrollment) => (
                        <div key={enrollment.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                                {enrollment.path?.thumbnail_url && (
                                    <img
                                        src={enrollment.path.thumbnail_url}
                                        alt={enrollment.path.title}
                                        className="w-full h-full object-cover opacity-50"
                                    />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <h3 className="text-xl font-bold text-white text-center shadow-black drop-shadow-md">
                                        {enrollment.path?.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Progress</span>
                                    <span className="font-medium text-indigo-600 dark:text-indigo-400">{Math.round(enrollment.progress_percentage)}%</span>
                                </div>

                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${enrollment.progress_percentage}%` }}
                                    />
                                </div>

                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {enrollment.completed_courses} / {enrollment.total_courses} Courses
                                    </span>
                                    {enrollment.is_completed ? (
                                        <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                            <CheckCircle className="h-4 w-4" />
                                            Completed
                                        </div>
                                    ) : (
                                        <Link
                                            href={`/student/learning-paths/${enrollment.path?.id || enrollment.path_id}`} // Assuming detailed view logic exists or just basic placeholder
                                            className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                                        >
                                            <PlayCircle className="h-4 w-4" />
                                            Continue
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
