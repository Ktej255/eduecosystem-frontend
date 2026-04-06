
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export interface ChatMessage {
    id: string;
    role: 'user' | 'ai';
    content: string;
    timestamp: Date;
    sources?: string[];
}

export interface ChatContext {
    topicId?: number;
    topicTitle?: string;
    section?: string;
    vulnerabilityProfile?: string;
}

export const sendMessageToDrAmbedkar = async (message: string, history: ChatMessage[] = [], context?: ChatContext): Promise<ChatMessage> => {
    try {
        // Construct the context string
        let contextContext = "subject:polity";
        if (context?.topicTitle) {
            contextContext += `, topic:${context.topicTitle}`;
        }
        if (context?.topicId) {
            contextContext += `, topic_id:${context.topicId}`;
        }
        if (context?.vulnerabilityProfile) {
            contextContext += `, student_vulnerability_profile:[${context.vulnerabilityProfile}]`;
        }

        const response = await axios.post(`/api/ai-tutor`, {
            message: message,
            context_context: contextContext,
            history: history.map(msg => ({ role: msg.role, content: msg.content })) // Send history for stateful chat
        });

        return {
            id: Date.now().toString(),
            role: 'ai',
            content: response.data.answer || response.data.message || "I am processing your request.",
            timestamp: new Date(),
            sources: response.data.sources || []
        };

    } catch (error) {
        console.error("Error talking to Dr. Ambedkar:", error);

        // Smart Fallback for Demo (if Backend is offline)
        // Topic-aware fallback — works for ALL 95 chapters, not just Article 21
        const topicContext = context?.topicTitle
            ? `"${context.topicTitle}"`
            : "Indian Polity";

        return {
            id: Date.now().toString(),
            role: 'ai',
            content: `**Dr. Ambedkar is temporarily offline** (Backend API unreachable)\n\n` +
                `Your question was about **${topicContext}**.\n\n` +
                `While I reconnect, here are key UPSC pointers for this area:\n` +
                `- Focus on constitutional articles, landmark cases, and amendment history\n` +
                `- Laxmikanth Chapter: refer to the V2 Read section for quick revision\n` +
                `- For MCQs, use Level 1 → Level 2 → Level 3 progression\n\n` +
                `*Please try again in a moment. If this persists, the backend may need to be restarted.*`,
            timestamp: new Date()
        };
    }
};
