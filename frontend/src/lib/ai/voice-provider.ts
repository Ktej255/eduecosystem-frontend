"use client";

/**
 * Voice Provider - Modular TTS engine for AI Avatar
 * 
 * Supports:
 * - Native: Browser Web Speech API (free, offline)
 * - Premium: External provider (ElevenLabs, etc.) via API key
 * 
 * Usage:
 *   const provider = getVoiceProvider();
 *   provider.speak("Hello world");
 *   provider.stop();
 */

export type VoiceMode = 'native' | 'premium';

interface VoiceProvider {
    mode: VoiceMode;
    speak: (text: string, onStart?: () => void, onEnd?: () => void) => void;
    stop: () => void;
    isSupported: () => boolean;
}

/**
 * Native Browser TTS Provider
 */
function createNativeProvider(): VoiceProvider {
    return {
        mode: 'native',

        speak(text, onStart, onEnd) {
            if (!window.speechSynthesis) return;

            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(text);

            // Find best available voice
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice =
                voices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) ||
                voices.find(v => v.lang.startsWith('en') && v.localService === false) ||
                voices[0];

            if (preferredVoice) utterance.voice = preferredVoice;

            utterance.rate = 0.85;
            utterance.pitch = 1.05;

            utterance.onstart = () => onStart?.();
            utterance.onend = () => onEnd?.();
            utterance.onerror = () => onEnd?.();

            window.speechSynthesis.speak(utterance);
        },

        stop() {
            window.speechSynthesis?.cancel();
        },

        isSupported() {
            return typeof window !== 'undefined' && 'speechSynthesis' in window;
        }
    };
}

/**
 * Premium TTS Provider (ElevenLabs-compatible)
 * 
 * Requires NEXT_PUBLIC_ELEVENLABS_API_KEY in environment.
 * Falls back to native if unavailable.
 */
function createPremiumProvider(): VoiceProvider {
    let currentAudio: HTMLAudioElement | null = null;

    return {
        mode: 'premium',

        async speak(text, onStart, onEnd) {
            const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;

            if (!apiKey) {
                console.warn("🔇 No ElevenLabs API key found, falling back to native TTS.");
                createNativeProvider().speak(text, onStart, onEnd);
                return;
            }

            try {
                onStart?.();

                const voiceId = process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID || 'pNInz6obpgDQGcFmaJgB'; // Default: Adam
                const response = await fetch(
                    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'xi-api-key': apiKey
                        },
                        body: JSON.stringify({
                            text,
                            model_id: 'eleven_monolingual_v1',
                            voice_settings: {
                                stability: 0.5,
                                similarity_boost: 0.75
                            }
                        })
                    }
                );

                if (!response.ok) {
                    throw new Error(`ElevenLabs API error: ${response.status}`);
                }

                const audioBlob = await response.blob();
                const audioUrl = URL.createObjectURL(audioBlob);

                currentAudio = new Audio(audioUrl);
                currentAudio.onended = () => {
                    URL.revokeObjectURL(audioUrl);
                    onEnd?.();
                };
                currentAudio.onerror = () => {
                    URL.revokeObjectURL(audioUrl);
                    onEnd?.();
                };
                currentAudio.play();
            } catch (error) {
                console.error("Premium TTS failed:", error);
                // Graceful fallback to native TTS
                createNativeProvider().speak(text, onStart, onEnd);
            }
        },

        stop() {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
        },

        isSupported() {
            return true; // Always supported, falls back to native
        }
    };
}

/**
 * Get the appropriate voice provider based on config
 */
export function getVoiceProvider(preferPremium = false): VoiceProvider {
    if (preferPremium && process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY) {
        return createPremiumProvider();
    }
    return createNativeProvider();
}
