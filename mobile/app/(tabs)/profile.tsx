import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styled } from 'nativewind';
import { useAuth } from '../../context/auth';
import { useRouter } from 'expo-router';
import { LogOut, Mail, Award, CreditCard, Trophy } from 'lucide-react-native';
import LanguageSelector from '../../components/LanguageSelector';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

import { useTranslation } from 'react-i18next';

export default function Profile() {
    const { user, signOut } = useAuth();
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <StyledView className="flex-1 bg-gray-900 pt-12 px-4">
            <StyledView className="items-center mb-8">
                <StyledView className="w-24 h-24 bg-blue-600 rounded-full items-center justify-center mb-4 border-4 border-gray-800">
                    <StyledText className="text-white font-bold text-4xl">
                        {user?.full_name?.[0] || 'U'}
                    </StyledText>
                </StyledView>
                <StyledText className="text-white text-2xl font-bold">{user?.full_name}</StyledText>
                <StyledText className="text-gray-400">{user?.email}</StyledText>
            </StyledView>

            <StyledView className="space-y-4">
                <StyledTouchableOpacity
                    className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex-row items-center"
                    onPress={() => router.push('/gamification')}
                >
                    <Trophy size={24} color="#EAB308" />
                    <StyledText className="text-white font-bold ml-4 flex-1">Gamification Hub</StyledText>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex-row items-center">
                    <Award size={24} color="#9ca3af" />
                    <StyledText className="text-white font-bold ml-4 flex-1">My Certificates</StyledText>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex-row items-center">
                    <CreditCard size={24} color="#9ca3af" />
                    <StyledText className="text-white font-bold ml-4 flex-1">Billing & Subscription</StyledText>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity
                    className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex-row items-center"
                    onPress={() => router.push('/settings/email-preferences')}
                >
                    <Mail size={24} color="#06b6d4" />
                    <StyledText className="text-white font-bold ml-4 flex-1">Email Preferences</StyledText>
                </StyledTouchableOpacity>

                <StyledView className="mb-4">
                    <LanguageSelector />
                </StyledView>

                <StyledTouchableOpacity
                    className="bg-red-900/20 p-4 rounded-xl border border-red-900/50 flex-row items-center mt-4"
                    onPress={signOut}
                >
                    <LogOut size={24} color="#ef4444" />
                    <StyledText className="text-red-500 font-bold ml-4 flex-1">{t('common.logout')}</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
}
