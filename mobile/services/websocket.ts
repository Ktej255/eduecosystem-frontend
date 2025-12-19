/**
 * WebSocket Service for React Native
 * 
 * Handles WebSocket connections with automatic reconnection,
 * background handling, and network state awareness.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

export interface WebSocketMessage {
    type: string;
    [key: string]: any;
}

export type MessageHandler = (message: WebSocketMessage) => void;

class WebSocketService {
    private ws: WebSocket | null = null;
    private url: string | null = null;
    private token: string | null = null;
    private messageHandlers: Set<MessageHandler> = new Set();
    private reconnectAttempts = 0;
    private maxReconnectAttempts = 5;
    private reconnectInterval = 3000;
    private reconnectTimeout: NodeJS.Timeout | null = null;
    private intentionalClose = false;
    private messageQueue: WebSocketMessage[] = [];
    private isNetworkAvailable = true;

    constructor() {
        // Monitor network state
        NetInfo.addEventListener((state) => {
            this.isNetworkAvailable = state.isConnected ?? false;

            if (this.isNetworkAvailable && this.url && !this.isConnected()) {
                console.log('[WebSocket] Network restored, reconnecting...');
                this.reconnect();
            }
        });
    }

    /**
     * Connect to WebSocket endpoint
     */
    async connect(endpoint: string) {
        try {
            // Get auth token
            this.token = await AsyncStorage.getItem('accessToken');
            if (!this.token) {
                console.error('[WebSocket] No auth token available');
                return;
            }

            // Build WebSocket URL
            const apiUrl = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8000';
            const wsProtocol = apiUrl.startsWith('https') ? 'wss' : 'ws';
            const wsHost = apiUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
            this.url = `${wsProtocol}://${wsHost}${endpoint}?token=${this.token}`;

            this.intentionalClose = false;
            this.ws = new WebSocket(this.url);

            this.ws.onopen = () => {
                console.log('[WebSocket] Connected to', endpoint);
                this.reconnectAttempts = 0;

                // Send queued messages
                while (this.messageQueue.length > 0) {
                    const message = this.messageQueue.shift();
                    if (message && this.ws) {
                        this.ws.send(JSON.stringify(message));
                    }
                }
            };

            this.ws.onmessage = (event) => {
                try {
                    const message: WebSocketMessage = JSON.parse(event.data);

                    // Notify all handlers
                    this.messageHandlers.forEach((handler) => {
                        handler(message);
                    });
                } catch (error) {
                    console.error('[WebSocket] Failed to parse message:', error);
                }
            };

            this.ws.onclose = (event) => {
                console.log('[WebSocket] Disconnected', event.code, event.reason);
                this.ws = null;

                // Attempt reconnection if not intentional and network available
                if (
                    !this.intentionalClose &&
                    this.isNetworkAvailable &&
                    this.reconnectAttempts < this.maxReconnectAttempts
                ) {
                    this.reconnectAttempts += 1;
                    const delay = this.reconnectInterval * Math.pow(1.5, this.reconnectAttempts - 1);

                    console.log(
                        `[WebSocket] Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`
                    );

                    this.reconnectTimeout = setTimeout(() => {
                        this.connect(endpoint);
                    }, delay);
                } else if (this.reconnectAttempts >= this.maxReconnectAttempts) {
                    console.error('[WebSocket] Max reconnection attempts reached');
                }
            };

            this.ws.onerror = (error) => {
                console.error('[WebSocket] Error:', error);
            };
        } catch (error) {
            console.error('[WebSocket] Connection error:', error);
        }
    }

    /**
     * Disconnect from WebSocket
     */
    disconnect() {
        this.intentionalClose = true;

        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }

        if (this.ws) {
            this.ws.close(1000, 'Client disconnect');
            this.ws = null;
        }
    }

    /**
     * Manually trigger reconnection
     */
    reconnect() {
        if (this.url) {
            this.reconnectAttempts = 0;
            this.disconnect();

            // Extract endpoint from URL
            const match = this.url.match(/\/ws\/\S+(?=\?)/);
            if (match) {
                this.connect(match[0]);
            }
        }
    }

    /**
     * Send a message
     */
    send(message: WebSocketMessage) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        } else {
            // Queue message if not connected
            this.messageQueue.push(message);
        }
    }

    /**
     * Add message handler
     */
    addMessageHandler(handler: MessageHandler) {
        this.messageHandlers.add(handler);
    }

    /**
     * Remove message handler
     */
    removeMessageHandler(handler: MessageHandler) {
        this.messageHandlers.delete(handler);
    }

    /**
     * Check if connected
     */
    isConnected(): boolean {
        return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
    }

    /**
     * Get connection state
     */
    getState(): number {
        return this.ws?.readyState ?? WebSocket.CLOSED;
    }
}

// Singleton instance
const webSocketService = new WebSocketService();

export default webSocketService;

/**
 * Discussion WebSocket Manager
 */
export class DiscussionWebSocket {
    private threadId: number;
    private service: WebSocketService;
    private onTyping?: (userId: number, username: string) => void;
    private onStopTyping?: (userId: number) => void;
    private onUserJoined?: (userId: number, username: string) => void;
    private onUserLeft?: (userId: number, username: string) => void;
    private messageHandler: MessageHandler;

    constructor(
        threadId: number,
        callbacks: {
            onTyping?: (userId: number, username: string) => void;
            onStopTyping?: (userId: number) => void;
            onUserJoined?: (userId: number, username: string) => void;
            onUserLeft?: (userId: number, username: string) => void;
        } = {}
    ) {
        this.threadId = threadId;
        this.service = webSocketService;
        this.onTyping = callbacks.onTyping;
        this.onStopTyping = callbacks.onStopTyping;
        this.onUserJoined = callbacks.onUserJoined;
        this.onUserLeft = callbacks.onUserLeft;

        this.messageHandler = (message: WebSocketMessage) => {
            switch (message.type) {
                case 'user_typing':
                    this.onTyping?.(message.user_id, message.username);
                    break;
                case 'user_stopped_typing':
                    this.onStopTyping?.(message.user_id);
                    break;
                case 'user_joined':
                    this.onUserJoined?.(message.user_id, message.user_name);
                    break;
                case 'user_left':
                    this.onUserLeft?.(message.user_id, message.user_name);
                    break;
            }
        };

        this.service.addMessageHandler(this.messageHandler);
    }

    async connect() {
        await this.service.connect(`/ws/discussions/${this.threadId}`);
    }

    disconnect() {
        this.service.removeMessageHandler(this.messageHandler);
        this.service.disconnect();
    }

    startTyping() {
        this.service.send({ type: 'typing' });
    }

    stopTyping() {
        this.service.send({ type: 'stop_typing' });
    }

    isConnected() {
        return this.service.isConnected();
    }
}

/**
 * Live Class WebSocket Manager
 */
export class LiveClassWebSocket {
    private sessionId: number;
    private service: WebSocketService;
    private onParticipantUpdate?: (count: number) => void;
    private onChatMessage?: (message: any) => void;
    private onReaction?: (userId: number, emoji: string) => void;
    private messageHandler: MessageHandler;

    constructor(
        sessionId: number,
        callbacks: {
            onParticipantUpdate?: (count: number) => void;
            onChatMessage?: (message: any) => void;
            onReaction?: (userId: number, emoji: string) => void;
        } = {}
    ) {
        this.sessionId = sessionId;
        this.service = webSocketService;
        this.onParticipantUpdate = callbacks.onParticipantUpdate;
        this.onChatMessage = callbacks.onChatMessage;
        this.onReaction = callbacks.onReaction;

        this.messageHandler = (message: WebSocketMessage) => {
            switch (message.type) {
                case 'connected':
                case 'participant_update':
                    this.onParticipantUpdate?.(message.participant_count);
                    break;
                case 'chat_message':
                    this.onChatMessage?.(message);
                    break;
                case 'reaction':
                    this.onReaction?.(message.user_id, message.emoji);
                    break;
            }
        };

        this.service.addMessageHandler(this.messageHandler);
    }

    async connect() {
        await this.service.connect(`/ws/live-class/${this.sessionId}`);
    }

    disconnect() {
        this.service.removeMessageHandler(this.messageHandler);
        this.service.disconnect();
    }

    sendChatMessage(text: string) {
        this.service.send({
            type: 'chat_message',
            message: text,
        });
    }

    sendReaction(emoji: string) {
        this.service.send({
            type: 'reaction',
            emoji,
        });
    }

    isConnected() {
        return this.service.isConnected();
    }
}
