"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useGamification } from "./GamificationContext";

export interface Habit {
    id: number;
    name: string;
    icon: string;
    category: "mindfulness" | "study" | "health" | "productivity" | "other";
    currentStreak: number;
    coinsPerCompletion: number;
    lastCompletedDate: string | null; // ISO Date string YYYY-MM-DD
    reminderTime?: string;
    totalCompletions: number;
}

interface HabitContextType {
    habits: Habit[];
    addHabit: (habit: Omit<Habit, "id" | "currentStreak" | "lastCompletedDate" | "totalCompletions">) => void;
    deleteHabit: (id: number) => void;
    completeHabit: (id: number) => void;
    getHabitStatus: (id: number) => { isCompletedToday: boolean };
}

const HabitContext = createContext<HabitContextType | undefined>(undefined);

// Initial default habits if none exist
const DEFAULT_HABITS: Habit[] = [
    {
        id: 1,
        name: "Morning Meditation",
        icon: "🧘",
        category: "mindfulness",
        currentStreak: 0,
        coinsPerCompletion: 10,
        lastCompletedDate: null,
        reminderTime: "06:00",
        totalCompletions: 0
    },
    {
        id: 2,
        name: "Deep Work Session",
        icon: "⚡",
        category: "productivity",
        currentStreak: 0,
        coinsPerCompletion: 20,
        lastCompletedDate: null,
        reminderTime: "09:00",
        totalCompletions: 0
    },
    {
        id: 3,
        name: "Review Flashcards",
        icon: "📝",
        category: "study",
        currentStreak: 0,
        coinsPerCompletion: 15,
        lastCompletedDate: null,
        totalCompletions: 0
    }
];

export function HabitProvider({ children }: { children: React.ReactNode }) {
    const [habits, setHabits] = useState<Habit[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Connect to Gamification to award coins
    // Note: We'll need to check if useGamification is available (it might not be if this is at same level)
    // Safe to assume it is if wrapped correctly.
    // Safe to assume it is if wrapped correctly.
    const { addXP, addXp } = useGamification() || { addXP: () => { }, addXp: () => { } };

    // Load from LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem("user_habits");
        if (saved) {
            try {
                setHabits(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse habits", e);
                setHabits(DEFAULT_HABITS);
            }
        } else {
            setHabits(DEFAULT_HABITS);
        }
        setIsLoaded(true);
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("user_habits", JSON.stringify(habits));
        }
    }, [habits, isLoaded]);

    const addHabit = (newHabitData: Omit<Habit, "id" | "currentStreak" | "lastCompletedDate" | "totalCompletions">) => {
        const newHabit: Habit = {
            ...newHabitData,
            id: Date.now(),
            currentStreak: 0,
            lastCompletedDate: null,
            totalCompletions: 0
        };
        setHabits(prev => [...prev, newHabit]);
    };

    const deleteHabit = (id: number) => {
        setHabits(prev => prev.filter(h => h.id !== id));
    };

    const completeHabit = (id: number) => {
        const today = new Date().toISOString().split('T')[0];

        setHabits(prev => prev.map(h => {
            if (h.id !== id) return h;

            // Check if already completed today
            if (h.lastCompletedDate === today) return h;

            // Calculate streak
            // Simple logic: if completed yesterday, increment streak. Else reset to 1.
            // For now, let's just increment if not today. 
            // Better logic: Check if lastCompletedDate was yesterday.

            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            let newStreak = h.currentStreak;
            if (h.lastCompletedDate === yesterdayStr) {
                newStreak += 1;
            } else if (h.lastCompletedDate !== today) {
                newStreak = 1; // Reset or start new
                // Limitation: If they missed a day, streak resets. 
                // However, without historical data, we assume reset if not consecutive.
                // Wait, if last date was > 1 day ago, reset.
                // If last date was yesterday, incr.
                // If last date is null, 1.
            }

            // Award Rewards via Gamification Context
            // Use legacy addXp to support custom coin/point values mapped to XP for now
            if (addXp) addXp(h.coinsPerCompletion, `Completed habit: ${h.name}`);
            // Also trigger standard XP event if needed, but addXp handles it.

            return {
                ...h,
                lastCompletedDate: today,
                currentStreak: newStreak,
                totalCompletions: h.totalCompletions + 1
            };
        }));
    };

    const getHabitStatus = (id: number) => {
        const habit = habits.find(h => h.id === id);
        if (!habit) return { isCompletedToday: false };

        const today = new Date().toISOString().split('T')[0];
        return {
            isCompletedToday: habit.lastCompletedDate === today
        };
    };

    return (
        <HabitContext.Provider value={{ habits, addHabit, deleteHabit, completeHabit, getHabitStatus }}>
            {children}
        </HabitContext.Provider>
    );
}

export function useHabits() {
    const context = useContext(HabitContext);
    if (context === undefined) {
        throw new Error("useHabits must be used within a HabitProvider");
    }
    return context;
}
