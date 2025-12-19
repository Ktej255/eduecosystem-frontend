import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface EmailPreferenceToggleProps {
    label: string;
    description?: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
    disabled?: boolean;
}

export const EmailPreferenceToggle = ({ 
    label, 
    description, 
    value, 
    onValueChange,
    disabled = false 
}: EmailPreferenceToggleProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.label}>{label}</Text>
                {description && <Text style={styles.description}>{description}</Text>}
            </View>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: '#374151', true: '#3B82F6' }}
                thumbColor={value ? '#60A5FA' : '#9CA3AF'}
                disabled={disabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#111827',
        borderBottomWidth: 1,
        borderBottomColor: '#374151',
    },
    textContainer: {
        flex: 1,
        marginRight: 16,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    description: {
        color: '#9CA3AF',
        fontSize: 14,
    },
});
