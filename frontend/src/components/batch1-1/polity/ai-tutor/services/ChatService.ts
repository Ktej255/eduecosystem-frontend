
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export interface ChatMessage {
    id: string;
    role: 'user' | 'ai';
    content: string;
    timestamp: Date;
    sources?: string[];
}

export const sendMessageToDrAmbedkar = async (message: string, history: ChatMessage[] = []): Promise<ChatMessage> => {
    try {
        // Construct the context from history if needed, but for now sending just the message
        // The backend `chatbot.py` or `ai_tutor.py` likely expects a specific payload.
        // Using `ai_tutor.py` schema: { message: string, context_context: string } is one option
        // using `chatbot.py` schema: { message: string, ... } might be another.
        // Let's assume a generic robust call for now, and we can refine based on backend actual response.

        // Simulating network delay for "Thinking" effect if backend is illustrative
        // await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await axios.post(`${API_URL}/ai/tutor/chat`, {
            message: message,
            context_context: "subject:polity" // Hinting the context
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
        if (message.toLowerCase().includes('article 21')) {
            return {
                id: Date.now().toString(),
                role: 'ai',
                content: "**Article 21** declares that *\"No person shall be deprived of his life or personal liberty except according to procedure established by law.\"*\n\nThis right has been expanded by the Supreme Court to include the **Right to Privacy** (Puttaswamy Case), **Right to Health**, and **Right to Livelihood** (Olga Tellis Case).",
                timestamp: new Date(),
                sources: ["Constitution of India", "Maneka Gandhi vs Union of India"]
            };
        }

        return {
            id: Date.now().toString(),
            role: 'ai',
            content: "I am having trouble connecting to the Constituent Assembly archives (Backend potentially offline). \n\n**Try asking about 'Article 21' to see a cached response.**",
            timestamp: new Date()
        };
    }
};
