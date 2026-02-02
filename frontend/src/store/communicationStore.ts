import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Channel = 'whatsapp' | 'telegram' | 'email' | 'system';

export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
    channel: Channel;
    status: 'received' | 'sent' | 'read';
    avatar?: string;
}

interface CommunicationState {
    messages: Message[];
    addMessage: (msg: Message) => void;
    broadcast: (content: string, channels: Channel[]) => void;
    markAsRead: (id: string) => void;
}

export const useCommunicationStore = create<CommunicationState>()(
    persist(
        (set) => ({
            messages: [
                {
                    id: 'm1',
                    sender: 'Rahul Sharma',
                    content: 'Can I get the Geography PDF for Batch 1?',
                    timestamp: new Date().toISOString(),
                    channel: 'whatsapp',
                    status: 'received',
                    avatar: '👤'
                },
                {
                    id: 'm2',
                    sender: 'System',
                    content: 'Welcome to Eduecosystem Master Platform.',
                    timestamp: new Date().toISOString(),
                    channel: 'system',
                    status: 'sent'
                }
            ],
            addMessage: (msg) => set((state) => ({
                messages: [msg, ...state.messages]
            })),
            broadcast: (content, channels) => {
                const newMessages: Message[] = channels.map(channel => ({
                    id: `b-${Date.now()}-${channel}`,
                    sender: 'Faculty (Broadcast)',
                    content,
                    timestamp: new Date().toISOString(),
                    channel,
                    status: 'sent'
                }));
                set((state) => ({
                    messages: [...newMessages, ...state.messages]
                }));
            },
            markAsRead: (id) => set((state) => ({
                messages: state.messages.map(m => m.id === id ? { ...m, status: 'read' as const } : m)
            }))
        }),
        {
            name: 'eduecosystem-communications',
        }
    )
);
