import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle } from 'lucide-react-native';

interface ChallengeCardProps {
    title: string;
    description: string;
    type: string;
    rewardCoins: number;
    progress: number;
    isCompleted: boolean;
    isClaimed: boolean;
    onClaim: () => void;
}

export const ChallengeCard = ({
    title,
    description,
    type,
    rewardCoins,
    progress,
    isCompleted,
    isClaimed,
    onClaim
}: ChallengeCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.typeTag}>
                    <Text style={[
                        styles.typeText,
                        type === 'daily' ? styles.dailyText : styles.weeklyText
                    ]}>
                        {type.toUpperCase()}
                    </Text>
                </View>
                <Text style={styles.rewardText}>+{rewardCoins} 🪙</Text>
            </View>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            <View style={styles.progressContainer}>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: `${Math.min(progress, 100)}%` }]} />
                </View>
                <Text style={styles.progressText}>{Math.round(progress)}%</Text>
            </View>

            {isCompleted && !isClaimed && (
                <TouchableOpacity style={styles.claimButton} onPress={onClaim}>
                    <Text style={styles.claimButtonText}>Claim Reward</Text>
                </TouchableOpacity>
            )}

            {isClaimed && (
                <View style={styles.claimedContainer}>
                    <CheckCircle size={16} color="#9CA3AF" />
                    <Text style={styles.claimedText}>Claimed</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F2937', // gray-800
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#374151',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    typeTag: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        backgroundColor: '#374151',
    },
    typeText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    dailyText: {
        color: '#60A5FA', // blue-400
    },
    weeklyText: {
        color: '#A78BFA', // purple-400
    },
    rewardText: {
        color: '#EAB308', // yellow-500
        fontWeight: 'bold',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        color: '#9CA3AF',
        fontSize: 14,
        marginBottom: 12,
    },
    progressContainer: {
        marginBottom: 12,
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#374151',
        borderRadius: 4,
        marginBottom: 4,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#EAB308',
        borderRadius: 4,
    },
    progressText: {
        color: '#9CA3AF',
        fontSize: 12,
        textAlign: 'right',
    },
    claimButton: {
        backgroundColor: '#16A34A', // green-600
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    claimButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    claimedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#111827',
        borderRadius: 8,
    },
    claimedText: {
        color: '#9CA3AF',
        marginLeft: 8,
        fontWeight: 'bold',
    },
});
