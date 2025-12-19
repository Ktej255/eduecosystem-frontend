import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';
import api from '../../utils/api';
import { useAuth } from '../../context/auth';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

type Friend = {
    id: number;
    full_name: string;
    email: string;
};

export default function Social() {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        fetchFriends();
    }, []);

    const fetchFriends = async () => {
        try {
            const response = await api.get('/social/friends');
            setFriends(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }: { item: Friend }) => (
        <StyledTouchableOpacity className="bg-gray-800 mb-3 p-4 rounded-xl border border-gray-700 flex-row items-center">
            <StyledView className="w-12 h-12 bg-blue-600 rounded-full items-center justify-center mr-4">
                <StyledText className="text-white font-bold text-lg">
                    {item.full_name?.[0] || 'U'}
                </StyledText>
            </StyledView>
            <StyledView className="flex-1">
                <StyledText className="text-white font-bold text-lg">{item.full_name}</StyledText>
                <StyledText className="text-green-400 text-xs">Online</StyledText>
            </StyledView>
            <Link href={{ pathname: '/chat/[id]', params: { id: item.id, name: item.full_name } }} asChild>
                <StyledTouchableOpacity className="bg-gray-700 p-2 rounded-full">
                    <StyledText className="text-white text-xs">Chat</StyledText>
                </StyledTouchableOpacity>
            </Link>
        </StyledTouchableOpacity>
    );

    return (
        <StyledView className="flex-1 bg-gray-900 pt-12 px-4">
            <StyledText className="text-white text-2xl font-bold mb-6">Friends</StyledText>

            {loading ? (
                <ActivityIndicator size="large" color="#3b82f6" />
            ) : (
                <FlatList
                    data={friends}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={
                        <StyledText className="text-gray-400 text-center mt-10">No friends yet</StyledText>
                    }
                />
            )}
        </StyledView>
    );
}
