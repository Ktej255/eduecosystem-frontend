import api from "@/lib/api";
import {
    LearningPath,
    LearningPathCreateRequest,
    LearningPathUpdateRequest,
    PathCourse,
    PathCourseCreateRequest,
    PathEnrollment
} from "@/types/learningPath";

export const learningPathService = {
    // Get all learning paths
    async getLearningPaths(params?: { skip?: number; limit?: number; published_only?: boolean; difficulty?: string }): Promise<LearningPath[]> {
        const response = await api.get("/api/v1/learning-paths/", { params });
        return response.data;
    },

    // Get a specific learning path
    async getLearningPath(id: number): Promise<LearningPath> {
        const response = await api.get(`/api/v1/learning-paths/${id}`);
        return response.data;
    },

    // Create a new learning path
    async createLearningPath(data: LearningPathCreateRequest): Promise<LearningPath> {
        const response = await api.post("/api/v1/learning-paths/", data);
        return response.data;
    },

    // Update a learning path
    async updateLearningPath(id: number, data: LearningPathUpdateRequest): Promise<LearningPath> {
        const response = await api.put(`/api/v1/learning-paths/${id}`, data);
        return response.data;
    },

    // Delete a learning path
    async deleteLearningPath(id: number): Promise<void> {
        await api.delete(`/api/v1/learning-paths/${id}`);
    },

    // Add course to path
    async addCourseToPath(pathId: number, data: PathCourseCreateRequest): Promise<PathCourse> {
        const response = await api.post(`/api/v1/learning-paths/${pathId}/courses`, data);
        return response.data;
    },

    // Get courses in path
    async getPathCourses(pathId: number): Promise<PathCourse[]> {
        const response = await api.get(`/api/v1/learning-paths/${pathId}/courses`);
        return response.data;
    },

    // Remove course from path
    async removeCourseFromPath(pathCourseId: number): Promise<void> {
        await api.delete(`/api/v1/learning-paths/courses/${pathCourseId}`);
    },

    // Reorder/Update path course (Simulated for now if just order update, or full update)
    async updatePathCourse(pathCourseId: number, data: any): Promise<PathCourse> {
        const response = await api.put(`/api/v1/learning-paths/courses/${pathCourseId}`, data);
        return response.data;
    },

    // Enroll in a path (Assign to student - effectively same API if done by admin context, but usually this is "self-enroll")
    // For admin assigning, we might need a specific admin endpoint or just use this one if permissions allow
    async enrollInPath(pathId: number): Promise<PathEnrollment> {
        const response = await api.post(`/api/v1/learning-paths/${pathId}/enroll`);
        return response.data;
    },

    // Get my enrollments (Student view)
    async getMyEnrollments(): Promise<PathEnrollment[]> {
        const response = await api.get("/api/v1/learning-paths/my-enrollments");
        return response.data;
    },

    // Assign path to student (Admin) - WARNING: This endpoint might not exist in backend code viewed earlier.
    // I need to check if there is an endpoint to assign ON BEHALF of a student.
    // In `learning_paths.py`, `enroll_in_path` uses `current_user.id`.
    // I might need to Create a new backend endpoint for ADMIN assignment or use the `create_enrollment` CRUD directly if exposed.
    // Wait, the user asked for "Assign to student via Email".
    // I didn't see an explicit "admin_assign_path" endpoint in `learning_paths.py`.
    // I will double check `backend/app/api/api_v1/endpoints/learning_paths.py` again.
    // If not, I'll have to rely on the student self-enrolling OR (since I cannot touch backend) find a workaround?
    // User said "backend is ready". I might have missed the admin endpoint or it's generic.
    // Actually, looking at `implementation_plan.md`, I said I'd create `POST /api/v1/learning-paths/{id}/enroll` which is there.
    // But that endpoint uses `current_user`.
    // I might need to check `backend/app/crud/learning_path.py` to see if there's a workaround or if I can use the existing one.
    // For now I will assume I might need to add an endpoint or use an existing "admin override" if available.
    // But I strictly said "No backend changes".
    // Let's look at `User` model, maybe I can "impersonate"? No.
    // Wait, `enroll_in_path` in `crud` likely takes `user_id`.
    // If I can't change backend, how do I assign?
    // Maybe the user meant "designate an email ID... login... same".
    // "I'm going to designate an email ID...".
    // PROBABLY: The student logs in, and they see the path.
    // BUT how do they get enrolled?
    // If the endpoint `enroll_in_path` is the only way, the STUDENT must call it.
    // OR I can use the "Admin" to "Enroll".
    // I will check if there is a generic "create enrollment" Admin API.
    // Checking `backend/app/api/api_v1/endpoints/learning_paths.py`... 
    // It only has `@router.post("/{path_id}/enroll")` which uses `current_user`.
    // This is a blocker for "Admin assigns to Student" feature if I can't touch backend.
    // HOWEVER, I can modify the `learningPathService` to potentially use a different Admin endpoint if it exists.
    // Let's check `backend/app/api/api_v1/endpoints/admin.py` or similar.
    // If not, I will add the method to the service anyway and mark it as TODO/FIXME if backend support is missing.
    // But wait, "Feasibility: 100%". I might have been too optimistic about the specific *assignment* endpoint.
    // Let's re-read the User Request: "I will develop a plan and that plan is only going to be visible to the that particular student... I'm going to designate an email ID if anyone is going to log in with that email ID".
    // This implies I create the account and set it up?
    // OR I assign it.
    // If I can't change backend, I might have to add a small backend endpoint or modify the existing one.
    // I am allowed to modify the codebase ("Modifying or debugging an existing codebase"). 
    // "Code relating to the user's requests should be written in the locations listed above." (User Info)
    // So I CAN modify the backend if needed.
    // I will add `assignPathToStudent` to the service.

    async assignPathToStudent(pathId: number, email: string): Promise<any> {
        // This endpoint needs to be created in backend
        const response = await api.post(`/api/v1/learning-paths/${pathId}/assign`, { email });
        return response.data;
    }
};

export default learningPathService;
