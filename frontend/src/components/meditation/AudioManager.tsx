"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";

export interface AudioAssets {
    announcementUrl?: string;
    backgroundMusicUrl?: string;
    bellSoundUrl?: string;
}

interface AudioManagerProps {
    assets: AudioAssets;
    onAnnouncementEnd?: () => void;
    autoPlayBackground?: boolean;
    backgroundVolume?: number;
}

export interface AudioManagerRef {
    playAnnouncement: () => Promise<void>;
    playBell: () => Promise<void>;
    startBackgroundMusic: () => void;
    stopBackgroundMusic: () => void;
    fadeOutBackground: (duration?: number) => void;
    setBackgroundVolume: (volume: number) => void;
    pauseAll: () => void;
    resumeAll: () => void;
}

// Default audio URLs (can be replaced with actual uploads)
const DEFAULT_ASSETS = {
    bellSound: "/audio/meditation/temple-bell.mp3",
    backgroundMusic: "/audio/meditation/ambient-calm.mp3"
};

const AudioManager = React.forwardRef<AudioManagerRef, AudioManagerProps>(
    ({ assets, onAnnouncementEnd, autoPlayBackground = true, backgroundVolume = 0.3 }, ref) => {
        const announcementRef = useRef<HTMLAudioElement | null>(null);
        const backgroundRef = useRef<HTMLAudioElement | null>(null);
        const bellRef = useRef<HTMLAudioElement | null>(null);

        const [isBackgroundPlaying, setIsBackgroundPlaying] = useState(false);
        const [currentVolume, setCurrentVolume] = useState(backgroundVolume);

        // Initialize audio elements
        useEffect(() => {
            // Background music - loops
            if (assets.backgroundMusicUrl || DEFAULT_ASSETS.backgroundMusic) {
                backgroundRef.current = new Audio(assets.backgroundMusicUrl || DEFAULT_ASSETS.backgroundMusic);
                backgroundRef.current.loop = true;
                backgroundRef.current.volume = currentVolume;
            }

            // Bell sound
            bellRef.current = new Audio(assets.bellSoundUrl || DEFAULT_ASSETS.bellSound);
            bellRef.current.volume = 0.7;

            return () => {
                backgroundRef.current?.pause();
                announcementRef.current?.pause();
                bellRef.current?.pause();
            };
        }, []);

        // Update background audio source when assets change
        useEffect(() => {
            if (assets.announcementUrl) {
                announcementRef.current = new Audio(assets.announcementUrl);
                announcementRef.current.onended = () => {
                    onAnnouncementEnd?.();
                };
            }
        }, [assets.announcementUrl, onAnnouncementEnd]);

        // Play announcement voiceover
        const playAnnouncement = useCallback(async () => {
            if (!announcementRef.current) {
                // If no announcement audio, just call callback
                onAnnouncementEnd?.();
                return;
            }

            try {
                // Duck background music during announcement
                if (backgroundRef.current && isBackgroundPlaying) {
                    backgroundRef.current.volume = currentVolume * 0.3;
                }

                await announcementRef.current.play();

                // Restore background volume after announcement
                announcementRef.current.onended = () => {
                    if (backgroundRef.current && isBackgroundPlaying) {
                        backgroundRef.current.volume = currentVolume;
                    }
                    onAnnouncementEnd?.();
                };
            } catch (error) {
                console.error("Failed to play announcement:", error);
                onAnnouncementEnd?.();
            }
        }, [currentVolume, isBackgroundPlaying, onAnnouncementEnd]);

        // Play bell/chime sound
        const playBell = useCallback(async () => {
            if (!bellRef.current) return;

            try {
                bellRef.current.currentTime = 0;
                await bellRef.current.play();
            } catch (error) {
                console.error("Failed to play bell:", error);
            }
        }, []);

        // Start background music
        const startBackgroundMusic = useCallback(() => {
            if (!backgroundRef.current) return;

            backgroundRef.current.volume = currentVolume;
            backgroundRef.current.play()
                .then(() => setIsBackgroundPlaying(true))
                .catch((error) => console.error("Failed to start background music:", error));
        }, [currentVolume]);

        // Stop background music
        const stopBackgroundMusic = useCallback(() => {
            if (!backgroundRef.current) return;
            backgroundRef.current.pause();
            backgroundRef.current.currentTime = 0;
            setIsBackgroundPlaying(false);
        }, []);

        // Fade out background music
        const fadeOutBackground = useCallback((duration = 2000) => {
            if (!backgroundRef.current || !isBackgroundPlaying) return;

            const steps = 20;
            const stepDuration = duration / steps;
            const volumeStep = currentVolume / steps;
            let step = 0;

            const fadeInterval = setInterval(() => {
                step++;
                if (backgroundRef.current) {
                    backgroundRef.current.volume = Math.max(0, currentVolume - (volumeStep * step));
                }

                if (step >= steps) {
                    clearInterval(fadeInterval);
                    stopBackgroundMusic();
                }
            }, stepDuration);
        }, [currentVolume, isBackgroundPlaying, stopBackgroundMusic]);

        // Set background volume
        const setBackgroundVolume = useCallback((volume: number) => {
            const clampedVolume = Math.max(0, Math.min(1, volume));
            setCurrentVolume(clampedVolume);
            if (backgroundRef.current) {
                backgroundRef.current.volume = clampedVolume;
            }
        }, []);

        // Pause all audio
        const pauseAll = useCallback(() => {
            announcementRef.current?.pause();
            backgroundRef.current?.pause();
        }, []);

        // Resume all audio
        const resumeAll = useCallback(() => {
            if (isBackgroundPlaying) {
                backgroundRef.current?.play();
            }
        }, [isBackgroundPlaying]);

        // Expose methods via ref
        React.useImperativeHandle(ref, () => ({
            playAnnouncement,
            playBell,
            startBackgroundMusic,
            stopBackgroundMusic,
            fadeOutBackground,
            setBackgroundVolume,
            pauseAll,
            resumeAll
        }), [
            playAnnouncement,
            playBell,
            startBackgroundMusic,
            stopBackgroundMusic,
            fadeOutBackground,
            setBackgroundVolume,
            pauseAll,
            resumeAll
        ]);

        // Auto-start background music if enabled
        useEffect(() => {
            if (autoPlayBackground) {
                // Small delay to ensure audio context is ready
                const timeout = setTimeout(() => {
                    startBackgroundMusic();
                }, 500);
                return () => clearTimeout(timeout);
            }
        }, [autoPlayBackground, startBackgroundMusic]);

        // This component doesn't render anything visible
        return null;
    }
);

AudioManager.displayName = "AudioManager";

export default AudioManager;
