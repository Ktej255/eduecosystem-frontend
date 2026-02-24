import { useState, useCallback, useEffect } from 'react';
import { getLearningProgress, saveLearningProgress } from '../../../../services/progressStorage';
import { SadhanaProgress, StudentArchetype, DEFAULT_SADHANA_PROGRESS } from '../data/sadhana-data';

export function useSadhanaProgress() {
    const [progress, setProgress] = useState<SadhanaProgress>(DEFAULT_SADHANA_PROGRESS);

    // Initial load
    useEffect(() => {
        const fullProgress = getLearningProgress();
        if (fullProgress.sadhana) {
            setProgress(fullProgress.sadhana);
        }
    }, []);

    const updateSadhanaProgress = useCallback((updates: Partial<SadhanaProgress>) => {
        setProgress(prev => {
            const newProgress = { ...prev, ...updates };
            saveLearningProgress({ sadhana: newProgress });
            return newProgress;
        });
    }, []);

    // Mantra Counting
    const incrementCount = useCallback((sadhanaId: string, amount: number = 1) => {
        setProgress(prev => {
            const currentCounts = { ...prev.currentCounts };
            currentCounts[sadhanaId] = (currentCounts[sadhanaId] || 0) + amount;

            const updates: Partial<SadhanaProgress> = { currentCounts };

            // Logic: Auto-detect Archetype based on consistency
            // If they are regular (consistency > 80), mark as Discoverer
            // If they reset often, mark as Hopper

            const newProgress = { ...prev, ...updates };
            saveLearningProgress({ sadhana: newProgress });
            return newProgress;
        });
    }, []);

    // Sankalpa Management
    const signSankalpa = useCallback((sadhanaId: string) => {
        updateSadhanaProgress({ activeSadhanaId: sadhanaId });
    }, [updateSadhanaProgress]);

    const resetSankalpa = useCallback(() => {
        setProgress(prev => {
            const updates: Partial<SadhanaProgress> = {
                activeSadhanaId: null,
                sankalpaResets: prev.sankalpaResets + 1,
                // Behavioral trigger: Resetting 3+ times = Hopper
                archetype: (prev.sankalpaResets + 1) >= 3 ? 'Hopper' : prev.archetype
            };
            const newProgress = { ...prev, ...updates };
            saveLearningProgress({ sadhana: newProgress });
            return newProgress;
        });
    }, []);

    // Sri Suktam Streak Logic
    const updateSriSuktamPrep = useCallback(() => {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        setProgress(prev => {
            let newStreak = prev.sriSuktamPrepStreak;

            if (prev.lastSriSuktamActivity === yesterday) {
                newStreak += 1;
            } else if (prev.lastSriSuktamActivity !== today) {
                // EXPIATION TRIGGER: Streak broken. 
                // In a real app, we might trigger a Prayashchitta wizard here.
                newStreak = 1;
            }

            const updates: Partial<SadhanaProgress> = {
                sriSuktamPrepStreak: newStreak,
                lastSriSuktamActivity: today
            };
            const newProgress = { ...prev, ...updates };
            saveLearningProgress({ sadhana: newProgress });
            return newProgress;
        });
    }, []);

    // Skill Maturity
    const updateSkillMaturity = useCallback((skillId: string, maturity: 'Sapling' | 'Tree' | 'Orchard') => {
        setProgress(prev => {
            const skills = [...prev.skills];
            const skillIndex = skills.findIndex(s => s.skillId === skillId);

            if (skillIndex > -1) {
                skills[skillIndex] = { ...skills[skillIndex], maturity };
            } else {
                skills.push({ skillId, maturity, points: 0, lastPracticed: new Date().toISOString() });
            }

            const updates: Partial<SadhanaProgress> = { skills };
            const newProgress = { ...prev, ...updates };
            saveLearningProgress({ sadhana: newProgress });
            return newProgress;
        });
    }, []);

    return {
        progress,
        incrementCount,
        signSankalpa,
        resetSankalpa,
        updateSriSuktamPrep,
        updateSkillMaturity
    };
}
