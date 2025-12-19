import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Award, Lock } from 'lucide-react-native';

interface AchievementCardProps {
    name: string;
    description: string;
    isUnlocked: boolean;
    coinReward: number;
}

export const AchievementCard = ({ name, description, isUnlocked, coinReward }: AchievementCardProps) => {
    return (
        <View style={[styles.container, isUnlocked ? styles.unlocked : styles.locked]}>
            <View style={[styles.iconContainer, isUnlocked ? styles.iconUnlocked : styles.iconLocked]}>
                {isUnlocked ? (
                    <Award size={24} color="#EAB308" /> // yellow-500
                ) : (
                    <Lock size={24} color="#6B7280" /> // gray-500
                )}
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, isUnlocked ? styles.textUnlocked : styles.textLocked]}>
                    {name}
                </Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.rewardContainer}>
                    <Text style={styles.rewardText}>+{coinReward} 🪙</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
    },
    unlocked: {
        backgroundColor: '#1F2937', // gray-800
        borderColor: '#EAB308', // yellow-500
    },
    locked: {
        backgroundColor: '#111827', // gray-900
        borderColor: '#374151', // gray-700
        opacity: 0.7,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    iconUnlocked: {
        backgroundColor: 'rgba(234, 179, 8, 0.2)',
    },
    iconLocked: {
        backgroundColor: '#374151',
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    textUnlocked: {
        color: '#FFFFFF',
    },
    textLocked: {
        color: '#9CA3AF',
    },
    description: {
        color: '#9CA3AF',
        fontSize: 14,
        marginBottom: 8,
    },
    rewardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rewardText: {
        color: '#EAB308',
        fontWeight: 'bold',
        fontSize: 12,
    },
});
