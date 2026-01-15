export type NoiseType = 'white' | 'pink' | 'brown';

export class AmbientSoundManager {
    ctx: AudioContext | null = null;
    nodes: Record<NoiseType, { source: AudioBufferSourceNode; gain: GainNode } | null> = {
        white: null,
        pink: null,
        brown: null
    };
    masterGain: GainNode | null = null;
    isPlaying: boolean = false;

    init() {
        if (!this.ctx && typeof window !== 'undefined') {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
                this.masterGain = this.ctx.createGain();
                this.masterGain.connect(this.ctx.destination);
                this.masterGain.gain.value = 0.5; // Default master volume
            }
        }
        if (this.ctx?.state === 'suspended') {
            this.ctx.resume();
        }
    }

    createNoiseBuffer(type: NoiseType): AudioBuffer | null {
        if (!this.ctx) return null;
        const bufferSize = 2 * this.ctx.sampleRate; // 2 seconds buffer
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);

        if (type === 'white') {
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
        }
        else if (type === 'brown') {
            let lastOut = 0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                output[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = output[i];
                output[i] *= 3.5;
            }
        }
        else if (type === 'pink') {
            let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                b0 = 0.99886 * b0 + white * 0.0555179;
                b1 = 0.99332 * b1 + white * 0.0750759;
                b2 = 0.96900 * b2 + white * 0.1538520;
                b3 = 0.86650 * b3 + white * 0.3104856;
                b4 = 0.55000 * b4 + white * 0.5329522;
                b5 = -0.7616 * b5 - white * 0.0168980;
                output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
                output[i] *= 0.11;
                b6 = white * 0.115926;
            }
        }

        return buffer;
    }

    toggle(type: NoiseType, enable: boolean, volume: number = 0.5) {
        this.init();
        if (!this.ctx || !this.masterGain) return;

        // Stop existing if any
        if (this.nodes[type]) {
            try {
                this.nodes[type]?.source.stop();
                this.nodes[type]?.source.disconnect();
                this.nodes[type]?.gain.disconnect();
            } catch (e) { }
            this.nodes[type] = null;
        }

        if (enable) {
            const buffer = this.createNoiseBuffer(type);
            if (!buffer) return;

            const source = this.ctx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;

            const gainNode = this.ctx.createGain();
            gainNode.gain.value = volume;

            source.connect(gainNode);
            gainNode.connect(this.masterGain);

            source.start();
            this.nodes[type] = { source, gain: gainNode };
            this.isPlaying = true;
        }
    }

    setVolume(type: NoiseType, volume: number) {
        if (this.nodes[type]) {
            this.nodes[type]!.gain.gain.setValueAtTime(volume, this.ctx!.currentTime);
        }
    }

    stopAll() {
        (['white', 'pink', 'brown'] as NoiseType[]).forEach(t => this.toggle(t, false));
        this.isPlaying = false;
    }
}

export const ambientSoundManager = new AmbientSoundManager();
