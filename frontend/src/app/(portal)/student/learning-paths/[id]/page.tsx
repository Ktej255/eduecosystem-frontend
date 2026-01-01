"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle, PlayCircle, Lock } from "lucide-react";
import learningPathService from "@/services/learningPathService";
import { LearningPath, PathCourse } from "@/types/learningPath";

export default function StudentPathViewPage() {
    const params = useParams();
    const pathId = params?.id as string;
    const [path, setPath] = useState<LearningPath | null>(null);
    const [courses, setCourses] = useState<PathCourse[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (pathId) {
            loadPath();
        }
    }, [pathId]);

    const loadPath = async () => {
        try {
            setLoading(true);
            const pathData = await learningPathService.getLearningPath(parseInt(pathId));
            setPath(pathData);
            if (pathData.path_courses) {
                setCourses(pathData.path_courses);
            }
        } catch (error) {
            console.error("Failed to load path", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-12 text-center text-gray-500">Loading plan...</div>;
    if (!path) return <div className="p-12 text-center text-red-500">Plan not found or access denied.</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-8">
            <Link
                href="/student/learning-paths"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to My Plans
            </Link>

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{path.title}</h1>
                <p className="text-gray-600 dark:text-gray-300">{path.description}</p>
            </div>

            {/* Curriculum */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Your Learning Path</h2>
                <div className="space-y-4">
                    {courses.map((item, index) => {
                        // Logic to check if previous course is completed would go here
                        // For now, assuming everything is accessible for simplicity
                        const isLocked = false;

                        return (
                            <div key={item.id} className={`group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 flex gap-4 transition-all ${isLocked ? 'opacity-75 bg-gray-50 dark:bg-gray-900' : 'hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700'}`}>
                                <div className="flex-shrink-0">
                                    <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg ${isLocked ? 'bg-gray-200 text-gray-400 dark:bg-gray-800' : 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30'}`}>
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
                                        {item.course?.title || `Course Module ${index + 1}`}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                                        {item.course?.description || "Course content description..."}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        {isLocked ? (
                                            <span className="flex items-center gap-1 text-sm text-gray-400">
                                                <Lock className="h-4 w-4" />
                                                Locked (Complete previous step)
                                            </span>
                                        ) : (
                                            <Link
                                                href={`/student/learn/course/${item.course_id || item.course?.slug || '#'}`}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                                            >
                                                <PlayCircle className="h-4 w-4" />
                                                Start Module
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
