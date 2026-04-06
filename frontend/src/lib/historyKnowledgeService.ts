import api from "./api";

export interface GraphNode {
    id: string;
    label: string;
    difficulty: string;
    exam_relevance: string;
    description?: string;
    subject_slug?: string;
    mastery?: number;
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

export const historyKnowledgeService = {
    /**
     * Fetch the full History Knowledge Graph.
     * Backend route: /api/v1/guided/knowledge-graph?subject_slug=history
     */
    getGraph: async (): Promise<KnowledgeGraphData> => {
        const response = await api.get(`/guided/knowledge-graph?subject_slug=history`);
        return response.data;
    },

    /**
     * Fetch the History Knowledge Graph with student-specific mastery.
     * Backend route: /api/v1/guided/student-knowledge-graph?subject_slug=history
     */
    getStudentGraph: async (): Promise<KnowledgeGraphData> => {
        const response = await api.get(`/guided/student-knowledge-graph?subject_slug=history`);
        return response.data;
    }
};

export default historyKnowledgeService;
