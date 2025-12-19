import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Mail, Save, RotateCcw } from 'lucide-react-native';
import { getEmailPreferences, updateEmailPreferences, resetEmailPreferences } from '../../../utils/api';
import { EmailPreferenceToggle } from '../../../components/EmailPreferenceToggle';

export default function EmailPreferencesScreen() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [preferences, setPreferences] = useState<any>({
        email_notifications_enabled: true,
        enrollment_notifications: true,
        assignment_notifications: true,
        quiz_notifications: true,
        certificate_notifications: true,
        announcement_notifications: true,
        review_notifications: true,
        course_update_notifications: true,
    });

    useEffect(() => {
        fetchPreferences();
    }, []);

    const fetchPreferences = async () => {
        try {
            const data = await getEmailPreferences();
            setPreferences(data);
        } catch (error) {
            console.error('Failed to fetch email preferences', error);
            Alert.alert('Error', 'Failed to load email preferences');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await updateEmailPreferences(preferences);
            Alert.alert('Success', 'Email preferences saved successfully');
        } catch (error) {
            console.error('Failed to save preferences', error);
            Alert.alert('Error', 'Failed to save email preferences');
        } finally {
            setSaving(false);
        }
    };

    const handleReset = () => {
        Alert.alert(
            'Reset Preferences',
            'Are you sure you want to reset all email preferences to defaults?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Reset',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const data = await resetEmailPreferences();
                            setPreferences(data);
                            Alert.alert('Success', 'Preferences reset to defaults');
                        } catch (error) {
                            Alert.alert('Error', 'Failed to reset preferences');
                        }
                    },
                },
            ]
        );
    };

    const togglePreference = (key: string, value: boolean) => {
        setPreferences({ ...preferences, [key]: value });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3B82F6" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Email Preferences',
                    headerStyle: { backgroundColor: '#111827' },
                    headerTintColor: '#fff',
                }}
            />

            <ScrollView>
                {/* Master Toggle */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Mail size={20} color="#3B82F6" />
                        <Text style={styles.sectionTitle}>Email Notifications</Text>
                    </View>
                    <EmailPreferenceToggle
                        label="Enable All Email Notifications"
                        description="Master switch for all email notifications"
                        value={preferences.email_notifications_enabled}
                        onValueChange={(value) => togglePreference('email_notifications_enabled', value)}
                    />
                </View>

                {/* Individual Preferences */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Notification Types</Text>

                    <EmailPreferenceToggle
                        label="Course Enrollment"
                        description="Notifications when you enroll in a course"
                        value={preferences.enrollment_notifications}
                        onValueChange={(value) => togglePreference('enrollment_notifications', value)}
                        disabled={!preferences.email_notifications_enabled}
                    />

                    <EmailPreferenceToggle
                        label="Assignments"
                        description="Notifications about assignment submissions and grades"
                        value={preferences.assignment_notifications}
                        onValueChange={(value) => togglePreference('assignment_notifications', value)}
                        disabled={!preferences.email_notifications_enabled}
                    />

                    <EmailPreferenceToggle
                        label="Quizzes"
                        description="Notifications about quiz completions"
                        value={preferences.quiz_notifications}
                        onValueChange={(value) => togglePreference('quiz_notifications', value)}
                        disabled={!preferences.email_notifications_enabled}
                    />

                    <EmailPreferenceToggle
                        label="Certificates"
                        description="Notifications when you earn certificates"
                        value={preferences.certificate_notifications}
                        onValueChange={(value) => togglePreference('certificate_notifications', value)}
                        disabled={!preferences.email_notifications_enabled}
                    />

                    <EmailPreferenceToggle
                        label="Announcements"
                        description="Course and system announcements"
                        value={preferences.announcement_notifications}
                        onValueChange={(value) => togglePreference('announcement_notifications', value)}
                        disabled={!preferences.email_notifications_enabled}
                    />

                    <EmailPreferenceToggle
                        label="Reviews"
                        description="Notifications about course reviews"
                        value={preferences.review_notifications}
                        onValueChange={(value) => togglePreference('review_notifications', value)}
                        disabled={!preferences.email_notifications_enabled}
                    />

                    <EmailPreferenceToggle
                        label="Course Updates"
                        description="Notifications about course content updates"
                        value={preferences.course_update_notifications}
                        onValueChange={(value) => togglePreference('course_update_notifications', value)}
                        disabled={!preferences.email_notifications_enabled}
                    />
                </View>

                {/* Action Buttons */}
                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        style={[styles.saveButton, saving && styles.buttonDisabled]}
                        onPress={handleSave}
                        disabled={saving}
                    >
                        {saving ? (
                            <ActivityIndicator size="small" color="#FFFFFF" />
                        ) : (
                            <>
                                <Save size={20} color="#FFFFFF" />
                                <Text style={styles.saveButtonText}>Save Preferences</Text>
                            </>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={handleReset}
                    >
                        <RotateCcw size={20} color="#EF4444" />
                        <Text style={styles.resetButtonText}>Reset to Defaults</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#1F2937',
        gap: 8,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    actionsContainer: {
        padding: 16,
        gap: 12,
    },
    saveButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B82F6',
        paddingVertical: 14,
        borderRadius: 8,
        gap: 8,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resetButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2937',
        paddingVertical: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EF4444',
        gap: 8,
    },
    resetButtonText: {
        color: '#EF4444',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonDisabled: {
        opacity: 0.5,
    },
});
