import api from "./api";

export interface GraphNode {
    id: string;
    label: string;
    difficulty: string;
    exam_relevance: string;
    module_order?: number;
    mastery?: number;
    status?: "strong" | "medium" | "weak" | "unstarted";
    context_nodes?: string[];
}

export interface GraphEdge {
    source: string;
    target: string;
    type: string;
}

export interface KnowledgeGraphData {
    nodes: GraphNode[];
    edges: GraphEdge[];
}

export interface WeakNode {
    node_id: string;
    node_name: string;
    mastery_score: number;
    attempt_count: number;
    difficulty: string;
    exam_relevance: string;
    module_id: number;
    suggestion: "watch_video" | "ai_conversation" | "practice_mcq";
    suggestion_text: string;
    last_activity?: string;
}

export interface RevisionItem {
    node_id: string;
    node_name: string;
    reason: string;
    mastery: number;
    estimated_minutes: number;
}

export interface RevisionPlan {
    date: string;
    student_id: number;
    total_minutes: number;
    item_count: number;
    plan: RevisionItem[];
}

export const knowledgeService = {
    /**
     * Fetch the full Knowledge Graph (Modern History, Environment, or Geography nodes).
     * Backend route: /api/v1/guided/knowledge-graph
     */
    getGraph: async (subject: string = "history"): Promise<KnowledgeGraphData> => {
        const response = await api.get(`/guided/knowledge-graph?subject_slug=${subject}`);
        return response.data;
    },

    /**
     * Fetch the Knowledge Graph with student-specific mastery.
     * Backend route: /api/v1/guided/student-knowledge-graph
     */
    getStudentGraph: async (subject: string = "history"): Promise<KnowledgeGraphData> => {
        const response = await api.get(`/guided/student-knowledge-graph?subject_slug=${subject}`);
        return response.data;
    },

    /**
     * Fetch weak nodes for remediation.
     * Backend route: /api/v1/guided/weak-nodes
     */
    getWeakNodes: async (subject: string = "history", threshold: number = 60): Promise<WeakNode[]> => {
        const response = await api.get(`/guided/weak-nodes?subject_slug=${subject}&threshold=${threshold}`);
        return response.data.weak_nodes;
    },

    /**
     * Fetch daily revision plan.
     * Backend route: /api/v1/guided/revision-plan
     */
    getRevisionPlan: async (subject: string = "history"): Promise<RevisionPlan> => {
        const response = await api.get(`/guided/revision-plan?subject_slug=${subject}`);
        return response.data;
    }
};
