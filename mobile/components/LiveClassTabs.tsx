import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, RefreshControl, ActivityIndicator, Alert } from 'react-native';
import { styled } from 'nativewind';
import { MessageSquare, HelpCircle, BarChart2, Send, ThumbsUp } from 'lucide-react-native';
import { liveClassAPI } from '../utils/api';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface Tab {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const tabs: Tab[] = [
    { id: 'chat', label: 'Chat', icon: <MessageSquare size={20} color="#9ca3af" /> },
    { id: 'qa', label: 'Q&A', icon: <HelpCircle size={20} color="#9ca3af" /> },
    { id: 'polls', label: 'Polls', icon: <BarChart2 size={20} color="#9ca3af" /> },
];

export default function LiveClassTabs({ classId }: { classId: number }) {
    const [activeTab, setActiveTab] = useState('chat');
    const [messages, setMessages] = useState<any[]>([]);
    const [questions, setQuestions] = useState<any[]>([]);
    const [polls, setPolls] = useState<any[]>([]);
    const [messageInput, setMessageInput] = useState('');
    const [questionInput, setQuestionInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadData();
        // Poll for updates every 3 seconds
        const interval = setInterval(loadData, 3000);
        return () => clearInterval(interval);
    }, [classId]);

    const loadData = async () => {
        try {
            const [chatData, qaData, pollsData] = await Promise.all([
                liveClassAPI.getChatHistory(classId),
                liveClassAPI.getQuestions(classId),
                liveClassAPI.getPolls(classId),
            ]);
            setMessages(chatData.data || []);
            setQuestions(qaData.data || []);
            setPolls(pollsData.data || []);
        } catch (error) {
            console.error('Failed to load live class data:', error);
        }
    };

    const handleSendMessage = async () => {
        if (!messageInput.trim()) return;

        try {
            await liveClassAPI.sendChatMessage(classId, messageInput);
            setMessageInput('');
            loadData(); // Reload to show new message
        } catch (error) {
            Alert.alert('Error', 'Failed to send message');
        }
    };

    const handleAskQuestion = async () => {
        if (!questionInput.trim()) return;

        try {
            await liveClassAPI.askQuestion(classId, questionInput);
            setQuestionInput('');
            loadData(); // Reload to show new question
        } catch (error) {
            Alert.alert('Error', 'Failed to ask question');
        }
    };

    const handleUpvote = async (questionId: number) => {
        try {
            await liveClassAPI.upvoteQuestion(questionId);
            loadData(); // Reload to update upvote count
        } catch (error) {
            Alert.alert('Error', 'Failed to upvote question');
        }
    };

    const handleVote = async (pollId: number, optionIndex: number) => {
        try {
            await liveClassAPI.votePoll(pollId, optionIndex);
            Alert.alert('Success', 'Vote submitted!');
            loadData(); // Reload to update poll results
        } catch (error) {
            Alert.alert('Error', 'Failed to submit vote');
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    return (
        <StyledView className="flex-1">
            {/* Tab Bar */}
            <StyledView className="flex-row bg-gray-800 border-b border-gray-700">
                {tabs.map(tab => (
                    <StyledTouchableOpacity
                        key={tab.id}
                        className={`flex-1 items-center py-3 border-b-2 ${activeTab === tab.id ? 'border-cyan-500' : 'border-transparent'
                            }`}
                        onPress={() => setActiveTab(tab.id)}
                    >
                        <StyledView className="flex-row items-center">
                            {tab.icon}
                            <StyledText
                                className={`ml-2 font-semibold ${activeTab === tab.id ? 'text-cyan-500' : 'text-gray-400'
                                    }`}
                            >
                                {tab.label}
                            </StyledText>
                        </StyledView>
                    </StyledTouchableOpacity>
                ))}
            </StyledView>

            {/* Tab Content */}
            <StyledView className="flex-1 bg-gray-900">
                {activeTab === 'chat' && (
                    <ChatTab
                        messages={messages}
                        input={messageInput}
                        setInput={setMessageInput}
                        onSend={handleSendMessage}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                )}
                {activeTab === 'qa' && (
                    <QATab
                        questions={questions}
                        input={questionInput}
                        setInput={setQuestionInput}
                        onAsk={handleAskQuestion}
                        onUpvote={handleUpvote}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                )}
                {activeTab === 'polls' && (
                    <PollsTab
                        polls={polls}
                        onVote={handleVote}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                )}
            </StyledView>
        </StyledView>
    );
}

// Chat Tab Component
function ChatTab({ messages, input, setInput, onSend, refreshing, onRefresh }: any) {
    return (
        <StyledView className="flex-1">
            <FlatList
                data={messages}
                keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                renderItem={({ item }) => (
                    <StyledView className="px-4 py-2 border-b border-gray-800">
                        <StyledText className="text-cyan-500 font-semibold text-sm">
                            {item.user_name || 'Anonymous'}
                        </StyledText>
                        <StyledText className="text-white mt-1">{item.message}</StyledText>
                        <StyledText className="text-gray-500 text-xs mt-1">
                            {new Date(item.created_at).toLocaleTimeString()}
                        </StyledText>
                    </StyledView>
                )}
                style={{ flex: 1 }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#06b6d4" />}
                ListEmptyComponent={
                    <StyledView className="p-8 items-center">
                        <StyledText className="text-gray-500">No messages yet</StyledText>
                    </StyledView>
                }
            />
            <StyledView className="p-4 bg-gray-800 border-t border-gray-700 flex-row items-center">
                <StyledTextInput
                    className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700"
                    placeholder="Type your message..."
                    placeholderTextColor="#6b7280"
                    value={input}
                    onChangeText={setInput}
                    multiline
                    maxLength={500}
                />
                <StyledTouchableOpacity onPress={onSend} className="ml-3 bg-cyan-600 p-3 rounded-lg">
                    <Send size={20} color="#ffffff" />
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
}

// Q&A Tab Component
function QATab({ questions, input, setInput, onAsk, onUpvote, refreshing, onRefresh }: any) {
    return (
        <StyledView className="flex-1">
            <FlatList
                data={questions}
                keyExtractor={(item, index) => item.question_id?.toString() || index.toString()}
                renderItem={({ item }) => (
                    <StyledView className="px-4 py-4 border-b border-gray-800">
                        <StyledView className="flex-row">
                            <StyledTouchableOpacity
                                className="mr-3 items-center justify-center"
                                onPress={() => onUpvote(item.question_id)}
                            >
                                <ThumbsUp size={18} color="#06b6d4" />
                                <StyledText className="text-cyan-500 text-xs mt-1">{item.upvotes || 0}</StyledText>
                            </StyledTouchableOpacity>
                            <StyledView className="flex-1">
                                <StyledText className="text-white font-medium">{item.question}</StyledText>
                                <StyledText className="text-gray-500 text-xs mt-1">
                                    by {item.user_name || 'Anonymous'}
                                </StyledText>
                                {item.answer && (
                                    <StyledView className="mt-2 bg-gray-800 p-3 rounded-lg">
                                        <StyledText className="text-green-500 font-semibold text-xs mb-1">
                                            Instructor's Answer:
                                        </StyledText>
                                        <StyledText className="text-gray-300">{item.answer}</StyledText>
                                    </StyledView>
                                )}
                            </StyledView>
                        </StyledView>
                    </StyledView>
                )}
                style={{ flex: 1 }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#06b6d4" />}
                ListEmptyComponent={
                    <StyledView className="p-8 items-center">
                        <StyledText className="text-gray-500">No questions yet</StyledText>
                    </StyledView>
                }
            />
            <StyledView className="p-4 bg-gray-800 border-t border-gray-700 flex-row items-center">
                <StyledTextInput
                    className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700"
                    placeholder="Ask a question..."
                    placeholderTextColor="#6b7280"
                    value={input}
                    onChangeText={setInput}
                    multiline
                    maxLength={300}
                />
                <StyledTouchableOpacity onPress={onAsk} className="ml-3 bg-cyan-600 p-3 rounded-lg">
                    <Send size={20} color="#ffffff" />
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
}

// Polls Tab Component
function PollsTab({ polls, onVote, refreshing, onRefresh }: any) {
    const activePoll = polls.find((p: any) => p.status === 'active');

    return (
        <FlatList
            data={activePoll ? [activePoll] : polls}
            keyExtractor={(item, index) => item.poll_id?.toString() || index.toString()}
            renderItem={({ item }) => (
                <StyledView className="p-4 mx-4 my-2 bg-gray-800 rounded-lg border border-gray-700">
                    <StyledText className="text-white font-bold text-lg mb-3">{item.question}</StyledText>
                    <StyledView className="space-y-2">
                        {item.options?.map((option: string, index: number) => (
                            <StyledTouchableOpacity
                                key={index}
                                className={`p-3 rounded-lg border ${item.status === 'ended'
                                        ? 'border-gray-700 bg-gray-900'
                                        : 'border-cyan-600 bg-cyan-900/20'
                                    }`}
                                onPress={() => item.status !== 'ended' && onVote(item.poll_id, index)}
                                disabled={item.status === 'ended'}
                            >
                                <StyledText className="text-white">{option}</StyledText>
                            </StyledTouchableOpacity>
                        ))}
                    </StyledView>
                    <StyledView className="mt-3 px-2">
                        <StyledText className={`text-xs ${item.status === 'active' ? 'text-green-500' : 'text-gray-500'}`}>
                            {item.status === 'active' ? '● ACTIVE - Tap an option to vote' : '● Poll Ended'}
                        </StyledText>
                    </StyledView>
                </StyledView>
            )}
            style={{ flex: 1 }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#06b6d4" />}
            ListEmptyComponent={
                <StyledView className="p-8 items-center">
                    <StyledText className="text-gray-500">No polls available</StyledText>
                </StyledView>
            }
        />
    );
}
