import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LeaderboardRowProps {
    rank: number;
    name: string;
    coins: number;
    streak: number;
    isCurrentUser: boolean;
}

export const LeaderboardRow = ({ rank, name, coins, streak, isCurrentUser }: LeaderboardRowProps) => {
    const getRankColor = (r: number) => {
        if (r === 1) return '#EAB308'; // Gold
        if (r === 2) return '#9CA3AF'; // Silver
        if (r === 3) return '#F97316'; // Bronze
        return '#6B7280'; // Gray
    };

    return (
        <View style={[styles.container, isCurrentUser && styles.currentUserContainer]}>
            <View style={[styles.rankContainer, { borderColor: getRankColor(rank) }]}>
                <Text style={[styles.rankText, { color: getRankColor(rank) }]}>#{rank}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>
                    {name} {isCurrentUser && <Text style={styles.youText}>(You)</Text>}
                </Text>
                <View style={styles.statsContainer}>
                    <Text style={styles.streakText}>🔥 {streak}</Text>
                </View>
            </View>

            <Text style={styles.coinsText}>{coins.toLocaleString()} 🪙</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#374151',
        backgroundColor: '#111827',
    },
    currentUserContainer: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)', // blue-500 with opacity
    },
    rankContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    rankText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    infoContainer: {
        flex: 1,
    },
    nameText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    youText: {
        color: '#3B82F6', // blue-500
        fontSize: 12,
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 4,
    },
    streakText: {
        color: '#F97316', // orange-500
        fontSize: 12,
        fontWeight: 'bold',
    },
    coinsText: {
        color: '#EAB308', // yellow-500
        fontWeight: 'bold',
        fontSize: 16,
    },
});
