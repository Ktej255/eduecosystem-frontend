import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, ActivityIndicator, Alert } from 'react-native';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';
import { ChevronLeft, Mail, RotateCcw } from 'lucide-react-native';
import { getEmailPreferences, updateEmailPreferences, resetEmailPreferences } from '../../utils/api';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface EmailPreferences {
    enrollment_enabled: boolean;
    assignment_enabled: boolean;
    quiz_enabled: boolean;
    certificate_enabled: boolean;
    announcement_enabled: boolean;
    review_enabled: boolean;
    course_update_enabled: boolean;
    general_enabled: boolean;
    all_emails_enabled: boolean;
}

export default function EmailPreferencesScreen() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [preferences, setPreferences] = useState<EmailPreferences>({
        enrollment_enabled: true,
        assignment_enabled: true,
        quiz_enabled: true,
        certificate_enabled: true,
        announcement_enabled: true,
        review_enabled: true,
        course_update_enabled: true,
        general_enabled: true,
        all_emails_enabled: true,
    });

    useEffect(() => {
        loadPreferences();
    }, []);

    const loadPreferences = async () => {
        try {
            setLoading(true);
            const data = await getEmailPreferences();
            setPreferences(data);
        } catch (error) {
            Alert.alert('Error', 'Failed to load email preferences');
            console.error('Load preferences error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            await updateEmailPreferences(preferences);
            Alert.alert('Success', 'Email preferences saved successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to save preferences');
            console.error('Save preferences error:', error);
        } finally {
            setSaving(false);
        }
    };

    const handleReset = () => {
        Alert.alert(
            'Reset to Defaults',
            'Are you sure you want to reset all email preferences to default values?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Reset',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            setSaving(true);
                            const data = await resetEmailPreferences();
                            setPreferences(data);
                            Alert.alert('Success', 'Preferences reset to defaults');
                        } catch (error) {
                            Alert.alert('Error', 'Failed to reset preferences');
                            console.error('Reset preferences error:', error);
                        } finally {
                            setSaving(false);
                        }
                    },
                },
            ]
        );
    };

    const togglePreference = (key: keyof EmailPreferences) => {
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const toggleAll = () => {
        const newValue = !preferences.all_emails_enabled;
        setPreferences(prev => ({
            ...prev,
            all_emails_enabled: newValue,
            enrollment_enabled: newValue,
            assignment_enabled: newValue,
            quiz_enabled: newValue,
            certificate_enabled: newValue,
            announcement_enabled: newValue,
            review_enabled: newValue,
            course_update_enabled: newValue,
            general_enabled: newValue,
        }));
    };

    if (loading) {
        return (
            <StyledView className="flex-1 bg-gray-900 items-center justify-center">
                <ActivityIndicator size="large" color="#06b6d4" />
                <StyledText className="text-gray-400 mt-4">Loading preferences...</StyledText>
            </StyledView>
        );
    }

    return (
        <StyledView className="flex-1 bg-gray-900">
            {/* Header */}
            <StyledView className="pt-12 pb-4 px-4 bg-gray-800 border-b border-gray-700">
                <StyledView className="flex-row items-center mb-4">
                    <StyledTouchableOpacity onPress={() => router.back()} className="mr-4">
                        <ChevronLeft size={24} color="#ffffff" />
                    </StyledTouchableOpacity>
                    <Mail size={24} color="#06b6d4" />
                    <StyledText className="text-white text-xl font-bold ml-3">
                        Email Preferences
                    </StyledText>
                </StyledView>
                <StyledText className="text-gray-400 text-sm">
                    Manage your email notification settings
                </StyledText>
            </StyledView>

            <StyledScrollView className="flex-1 px-4 py-6">
                {/* Master Toggle */}
                <StyledView className="bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700">
                    <StyledView className="flex-row items-center justify-between">
                        <StyledView className="flex-1">
                            <StyledText className="text-white font-bold text-base mb-1">
                                All Email Notifications
                            </StyledText>
                            <StyledText className="text-gray-400 text-sm">
                                Toggle all email notifications on/off
                            </StyledText>
                        </StyledView>
                        <Switch
                            value={preferences.all_emails_enabled}
                            onValueChange={toggleAll}
                            trackColor={{ false: '#374151', true: '#06b6d4' }}
                            thumbColor={preferences.all_emails_enabled ? '#ffffff' : '#9ca3af'}
                        />
                    </StyledView>
                </StyledView>

                {/* Divider */}
                <StyledView className="h-px bg-gray-700 my-4" />

                {/* Individual Preferences */}
                <StyledView className="space-y-3">
                    <PreferenceItem
                        title="Course Enrollments"
                        description="Get notified when you enroll in courses"
                        value={preferences.enrollment_enabled}
                        onToggle={() => togglePreference('enrollment_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />

                    <PreferenceItem
                        title="Course Updates"
                        description="Notifications about course content changes"
                        value={preferences.course_update_enabled}
                        onToggle={() => togglePreference('course_update_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />

                    <PreferenceItem
                        title="Assignment Notifications"
                        description="Submissions and grading updates"
                        value={preferences.assignment_enabled}
                        onToggle={() => togglePreference('assignment_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />

                    <PreferenceItem
                        title="Quiz Results"
                        description="Get your quiz completion results"
                        value={preferences.quiz_enabled}
                        onToggle={() => togglePreference('quiz_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />

                    <PreferenceItem
                        title="Certificates"
                        description="Certificate generation notifications"
                        value={preferences.certificate_enabled}
                        onToggle={() => togglePreference('certificate_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />

                    <PreferenceItem
                        title="Course Announcements"
                        description="Important updates from instructors"
                        value={preferences.announcement_enabled}
                        onToggle={() => togglePreference('announcement_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />

                    <PreferenceItem
                        title="Course Reviews"
                        description="Notifications about course reviews"
                        value={preferences.review_enabled}
                        onToggle={() => togglePreference('review_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />

                    <PreferenceItem
                        title="General Updates"
                        description="Platform news and updates"
                        value={preferences.general_enabled}
                        onToggle={() => togglePreference('general_enabled')}
                        disabled={!preferences.all_emails_enabled}
                    />
                </StyledView>

                {/* Action Buttons */}
                <StyledView className="mt-8 mb-6 space-y-3">
                    <StyledTouchableOpacity
                        className="bg-cyan-600 rounded-xl p-4 items-center"
                        onPress={handleSave}
                        disabled={saving}
                    >
                        {saving ? (
                            <ActivityIndicator color="#ffffff" />
                        ) : (
                            <StyledText className="text-white font-bold text-base">
                                Save Changes
                            </StyledText>
                        )}
                    </StyledTouchableOpacity>

                    <StyledTouchableOpacity
                        className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex-row items-center justify-center"
                        onPress={handleReset}
                        disabled={saving}
                    >
                        <RotateCcw size={20} color="#9ca3af" />
                        <StyledText className="text-gray-300 font-semibold text-base ml-2">
                            Reset to Defaults
                        </StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
            </StyledScrollView>
        </StyledView>
    );
}

interface PreferenceItemProps {
    title: string;
    description: string;
    value: boolean;
    onToggle: () => void;
    disabled?: boolean;
}

function PreferenceItem({ title, description, value, onToggle, disabled }: PreferenceItemProps) {
    return (
        <StyledView className={`bg-gray-800 rounded-lg p-4 border ${disabled ? 'opacity-50' : ''} border-gray-700`}>
            <StyledView className="flex-row items-center justify-between">
                <StyledView className="flex-1 mr-3">
                    <StyledText className="text-white font-semibold text-base mb-1">
                        {title}
                    </StyledText>
                    <StyledText className="text-gray-400 text-sm">
                        {description}
                    </StyledText>
                </StyledView>
                <Switch
                    value={value}
                    onValueChange={onToggle}
                    disabled={disabled}
                    trackColor={{ false: '#374151', true: '#06b6d4' }}
                    thumbColor={value ? '#ffffff' : '#9ca3af'}
                />
            </StyledView>
        </StyledView>
    );
}
