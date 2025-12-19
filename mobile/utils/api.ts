import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: `${API_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add auth token
api.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            await SecureStore.deleteItemAsync('token');
            await SecureStore.deleteItemAsync('user');
            // Redirect to login (handled by AuthContext)
        }
        return Promise.reject(error);
    }
);

export default api;

// API methods
export const authAPI = {
    login: (email: string, password: string) =>
        api.post('/auth/login', { email, password }),

    register: (userData: { email: string; password: string; name: string }) =>
        api.post('/auth/register', userData),

    getProfile: () => api.get('/users/me'),
};

export const coursesAPI = {
    getAll: (params?: { category?: string; search?: string }) =>
        api.get('/lms/courses', { params }),

    getById: (id: number) => api.get(`/lms/courses/${id}`),

    enroll: (courseId: number) => api.post(`/lms/courses/${courseId}/enroll`),

    getMyCourses: () => api.get('/lms/enrollments/my-courses'),
};

export const lessonsAPI = {
    getById: (lessonId: number) => api.get(`/lms/lessons/${lessonId}`),

    markComplete: (lessonId: number) =>
        api.post(`/lms/lessons/${lessonId}/complete`),
};

export const quizzesAPI = {
    getById: (quizId: number) => api.get(`/lms/quizzes/${quizId}`),

    submit: (quizId: number, answers: Record<number, any>) =>
        api.post(`/lms/quizzes/${quizId}/submit`, { answers }),
};

export const progressAPI = {
    getCourseProgress: (courseId: number) =>
        api.get(`/lms/courses/${courseId}/progress`),

    getOverallProgress: () => api.get('/lms/progress'),
};

// Email Preferences API
export const getEmailPreferences = async () => {
    const response = await api.get('/email-notifications/preferences');
    return response.data;
};

export const updateEmailPreferences = async (preferences: any) => {
    const response = await api.patch('/email-notifications/preferences', preferences);
    return response.data;
};

export const resetEmailPreferences = async () => {
    const response = await api.put('/email-notifications/preferences/reset');
    return response.data;
};

// Live Class API
export const liveClassAPI = {
    getById: (id: number) => api.get(`/live-classes/${id}`),

    // Interactive features
    getPolls: (classId: number) =>
        api.get(`/live-class-interactive/classes/${classId}/polls`),

    votePoll: (pollId: number, optionIndex: number) =>
        api.post(`/live-class-interactive/polls/${pollId}/vote`, { option_index: optionIndex }),

    getQuestions: (classId: number) =>
        api.get(`/live-class-interactive/classes/${classId}/questions`),

    askQuestion: (classId: number, question: string) =>
        api.post(`/live-class-interactive/classes/${classId}/questions`, { question }),

    upvoteQuestion: (questionId: number) =>
        api.post(`/live-class-interactive/questions/${questionId}/upvote`),

    getChatHistory: (classId: number) =>
        api.get(`/live-class-interactive/classes/${classId}/chat`),

    sendChatMessage: (classId: number, message: string) =>
        api.post(`/live-class-interactive/classes/${classId}/chat`, { message }),
};

// Gamification API
export const gamificationAPI = {
    getLeaderboard: () => api.get('/gamification/leaderboard'),

    getShopItems: () => api.get('/gamification/shop/items'),

    purchaseItem: (itemId: number) =>
        api.post(`/gamification/shop/purchase?item_id=${itemId}`),

    getAchievements: () => api.get('/achievements'),

    getMyAchievements: () => api.get('/achievements/my'),

    getActiveChallenges: () => api.get('/challenges/active'),

    claimChallenge: (userChallengeId: number) =>
        api.post(`/challenges/${userChallengeId}/claim`),
};

// Discussions API
export const discussionsAPI = {
    getThreads: (courseId: number, params?: { category_id?: number; resolved?: boolean }) =>
        api.get(`/discussions/courses/${courseId}/threads`, { params }),

    getThread: (threadId: number) =>
        api.get(`/discussions/threads/${threadId}`),

    getPosts: (threadId: number) =>
        api.get(`/discussions/threads/${threadId}/posts`),

    createThread: (courseId: number, data: { title: string; content: string; category_id?: number }) =>
        api.post(`/discussions/courses/${courseId}/threads`, data),

    createPost: (threadId: number, content: string, parentId?: number) =>
        api.post(`/discussions/threads/${threadId}/posts`, { content, parent_id: parentId }),

    votePost: (postId: number, voteType: 'upvote' | 'downvote') =>
        api.post(`/discussions/posts/${postId}/vote`, { vote_type: voteType }),
};
