import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack } from 'expo-router';
import { Coins, Flame, Trophy, Medal, Target } from 'lucide-react-native';
import { gamificationAPI, authAPI } from '../../utils/api';
import { LeaderboardRow } from '../../components/LeaderboardRow';
import { AchievementCard } from '../../components/AchievementCard';
import { ChallengeCard } from '../../components/ChallengeCard';

export default function GamificationScreen() {
    const [activeTab, setActiveTab] = useState<'leaderboard' | 'achievements' | 'challenges'>('leaderboard');
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [userStats, setUserStats] = useState<any>(null);
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const [achievements, setAchievements] = useState<any[]>([]);
    const [myAchievements, setMyAchievements] = useState<any[]>([]);
    const [challenges, setChallenges] = useState<any[]>([]);

    const fetchData = async () => {
        try {
            const [userRes, lbRes, achRes, myAchRes, challRes] = await Promise.all([
                authAPI.getProfile(),
                gamificationAPI.getLeaderboard(),
                gamificationAPI.getAchievements(),
                gamificationAPI.getMyAchievements(),
                gamificationAPI.getActiveChallenges()
            ]);

            setUserStats(userRes.data);
            setLeaderboard(lbRes.data);
            setAchievements(achRes.data);
            setMyAchievements(myAchRes.data);
            setChallenges(challRes.data);
        } catch (error) {
            console.error('Failed to fetch gamification data', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const handleClaimChallenge = async (userChallengeId: number) => {
        try {
            await gamificationAPI.claimChallenge(userChallengeId);
            // Refresh data to show updated coins and status
            fetchData();
        } catch (error) {
            console.error('Failed to claim challenge', error);
        }
    };

    const isUnlocked = (achievementId: number) => {
        return myAchievements.some((a: any) => a.achievement_id === achievementId);
    };

    if (loading && !refreshing) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#EAB308" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title: 'Gamification Hub',
                headerStyle: { backgroundColor: '#111827' },
                headerTintColor: '#fff',
            }} />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#EAB308" />
                }
            >
                {/* Stats Header */}
                <View style={styles.statsHeader}>
                    <View style={styles.statItem}>
                        <Coins size={24} color="#EAB308" />
                        <Text style={styles.statValue}>{userStats?.coins || 0}</Text>
                        <Text style={styles.statLabel}>Coins</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Flame size={24} color="#F97316" />
                        <Text style={styles.statValue}>{userStats?.streak_days || 0}</Text>
                        <Text style={styles.statLabel}>Streak</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Trophy size={24} color="#A855F7" />
                        <Text style={styles.statValue}>
                            {myAchievements.length}/{achievements.length}
                        </Text>
                        <Text style={styles.statLabel}>Awards</Text>
                    </View>
                </View>

                {/* Tabs */}
                <View style={styles.tabsContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'leaderboard' && styles.activeTab]}
                        onPress={() => setActiveTab('leaderboard')}
                    >
                        <Medal size={20} color={activeTab === 'leaderboard' ? '#000' : '#9CA3AF'} />
                        <Text style={[styles.tabText, activeTab === 'leaderboard' && styles.activeTabText]}>Rank</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'achievements' && styles.activeTab]}
                        onPress={() => setActiveTab('achievements')}
                    >
                        <Trophy size={20} color={activeTab === 'achievements' ? '#000' : '#9CA3AF'} />
                        <Text style={[styles.tabText, activeTab === 'achievements' && styles.activeTabText]}>Awards</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'challenges' && styles.activeTab]}
                        onPress={() => setActiveTab('challenges')}
                    >
                        <Target size={20} color={activeTab === 'challenges' ? '#000' : '#9CA3AF'} />
                        <Text style={[styles.tabText, activeTab === 'challenges' && styles.activeTabText]}>Tasks</Text>
                    </TouchableOpacity>
                </View>

                {/* Content */}
                <View style={styles.contentContainer}>
                    {activeTab === 'leaderboard' && (
                        <View>
                            <View style={styles.leaderboardHeader}>
                                <Text style={styles.headerText}>Top Performers</Text>
                            </View>
                            {leaderboard.map((entry: any, index: number) => (
                                <LeaderboardRow
                                    key={entry.user_id}
                                    rank={index + 1}
                                    name={entry.full_name}
                                    coins={entry.coins}
                                    streak={entry.streak_days}
                                    isCurrentUser={entry.user_id === userStats?.id}
                                />
                            ))}
                        </View>
                    )}

                    {activeTab === 'achievements' && (
                        <View>
                            {achievements.map((achievement: any) => (
                                <AchievementCard
                                    key={achievement.id}
                                    name={achievement.name}
                                    description={achievement.description}
                                    coinReward={achievement.coin_reward}
                                    isUnlocked={isUnlocked(achievement.id)}
                                />
                            ))}
                        </View>
                    )}

                    {activeTab === 'challenges' && (
                        <View>
                            {challenges.length === 0 ? (
                                <Text style={styles.emptyText}>No active challenges right now.</Text>
                            ) : (
                                challenges.map((challenge: any) => (
                                    <ChallengeCard
                                        key={challenge.id}
                                        title={challenge.title}
                                        description={challenge.description}
                                        type={challenge.type}
                                        rewardCoins={challenge.reward_coins}
                                        progress={challenge.progress?.progress_percentage || 0}
                                        isCompleted={challenge.progress?.progress_percentage >= 100}
                                        isClaimed={challenge.progress?.reward_claimed}
                                        onClaim={() => handleClaimChallenge(challenge.id)} // Note: verify ID mapping
                                    />
                                ))
                            )}
                        </View>
                    )}
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
    scrollContent: {
        paddingBottom: 24,
    },
    statsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#111827',
        borderBottomWidth: 1,
        borderBottomColor: '#374151',
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 4,
    },
    statLabel: {
        color: '#9CA3AF',
        fontSize: 12,
    },
    statDivider: {
        width: 1,
        backgroundColor: '#374151',
    },
    tabsContainer: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#1F2937',
        borderWidth: 1,
        borderColor: '#374151',
        gap: 6,
    },
    activeTab: {
        backgroundColor: '#EAB308',
        borderColor: '#EAB308',
    },
    tabText: {
        color: '#9CA3AF',
        fontWeight: 'bold',
        fontSize: 12,
    },
    activeTabText: {
        color: '#000000',
    },
    contentContainer: {
        paddingHorizontal: 16,
    },
    leaderboardHeader: {
        marginBottom: 12,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyText: {
        color: '#9CA3AF',
        textAlign: 'center',
        marginTop: 20,
    },
});
