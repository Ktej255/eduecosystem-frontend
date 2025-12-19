import { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { styled } from 'nativewind';
import { io, Socket } from 'socket.io-client';
import { useAuth } from '../../context/auth';
import api from '../../utils/api';
import { Send } from 'lucide-react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

type Message = {
    id: number;
    sender_id: number;
    receiver_id: number;
    message: string;
    created_at: string;
};

export default function Chat() {
    const { id, name } = useLocalSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState<Socket | null>(null);
    const { user } = useAuth();
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        // Connect to Socket.IO
        const newSocket = io('http://localhost:8000', {
            auth: { token: user?.id }, // In real app, pass actual token
            transports: ['websocket'],
        });

        newSocket.on('connect', () => {
            console.log('Connected to WebSocket');
        });

        newSocket.on('new_message', (msg: Message) => {
            if (msg.sender_id === Number(id) || msg.receiver_id === Number(id)) {
                setMessages((prev) => [...prev, msg]);
                scrollToBottom();
            }
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, [id]);

    useEffect(() => {
        fetchMessages();
    }, [id]);

    const fetchMessages = async () => {
        try {
            const response = await api.get(`/social/conversations/${id}`);
            setMessages(response.data);
            scrollToBottom();
        } catch (error) {
            console.error(error);
        }
    };

    const sendMessage = async () => {
        if (!newMessage.trim()) return;

        try {
            const response = await api.post('/social/messages', {
                receiver_id: Number(id),
                content: newMessage,
            });

            setMessages((prev) => [...prev, response.data]);
            setNewMessage('');
            scrollToBottom();
        } catch (error) {
            console.error(error);
        }
    };

    const scrollToBottom = () => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 100);
    };

    const renderItem = ({ item }: { item: Message }) => {
        const isMe = item.sender_id === user?.id;
        return (
            <StyledView className={`flex-row mb-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
                <StyledView
                    className={`max-w-[80%] p-3 rounded-xl ${isMe ? 'bg-blue-600 rounded-br-none' : 'bg-gray-800 rounded-bl-none'
                        }`}
                >
                    <StyledText className="text-white">{item.message}</StyledText>
                    <StyledText className={`text-[10px] mt-1 ${isMe ? 'text-blue-200' : 'text-gray-400'}`}>
                        {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </StyledText>
                </StyledView>
            </StyledView>
        );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-gray-900"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <Stack.Screen options={{
                headerShown: true,
                title: name as string || 'Chat',
                headerStyle: { backgroundColor: '#111827' },
                headerTintColor: '#fff',
            }} />

            <FlatList
                ref={flatListRef}
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ padding: 16 }}
                className="flex-1"
            />

            <StyledView className="p-4 bg-gray-800 border-t border-gray-700 flex-row items-center">
                <StyledTextInput
                    className="flex-1 bg-gray-900 text-white p-3 rounded-full border border-gray-700 mr-3"
                    placeholder="Type a message..."
                    placeholderTextColor="#6b7280"
                    value={newMessage}
                    onChangeText={setNewMessage}
                />
                <StyledTouchableOpacity
                    className="bg-blue-600 p-3 rounded-full"
                    onPress={sendMessage}
                >
                    <Send size={20} color="white" />
                </StyledTouchableOpacity>
            </StyledView>
        </KeyboardAvoidingView>
    );
}
