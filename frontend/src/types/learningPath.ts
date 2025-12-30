export interface LearningPath {
    id: number;
    title: string;
    description: string;
    slug: string;
    thumbnail_url?: string;
    cover_image_url?: string;
    difficulty_level: 'beginner' | 'intermediate' | 'advanced';
    estimated_duration_hours?: number;
    price?: number;
    is_published: boolean;
    creator_id: number;
    created_at: string;
    updated_at: string;
    path_courses?: PathCourse[];
    total_enrollments?: number;
}

export interface PathCourse {
    id: number;
    path_id: number;
    course_id: number;
    order_index: number;
    prerequisite_course_id?: number;
    is_required: boolean;
    course?: any; // Avoiding circular dependency for now, or use Course type if available
}

export interface PathEnrollment {
    id: number;
    path_id: number;
    student_id: number;
    current_course_id?: number;
    completed_courses: number;
    total_courses: number;
    progress_percentage: number;
    is_completed: boolean;
    completed_at?: string;
    enrolled_at: string;
    last_accessed_at: string;
    path?: LearningPath;
}

export interface LearningPathCreateRequest {
    title: string;
    description?: string;
    difficulty_level?: string;
    estimated_duration_hours?: number;
    thumbnail_url?: string;
    cover_image_url?: string;
    price?: number;
    is_published?: boolean;
}

export interface LearningPathUpdateRequest {
    title?: string;
    description?: string;
    difficulty_level?: string;
    estimated_duration_hours?: number;
    thumbnail_url?: string;
    cover_image_url?: string;
    price?: number;
    is_published?: boolean;
}

export interface PathCourseCreateRequest {
    path_id: number;
    course_id: number;
    order_index: number;
    prerequisite_course_id?: number;
    is_required?: boolean;
}
