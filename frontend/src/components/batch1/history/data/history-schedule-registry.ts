import { SPECTRUM_SCHEDULE, SPECTRUM_PHASES, getSpectrumDaySchedule } from './spectrum-schedule-data';
import { MEDIEVAL_SCHEDULE, MEDIEVAL_PHASES, getMedievalDaySchedule } from './medieval-schedule-data';
import { ANCIENT_SCHEDULE, ANCIENT_PHASES, getAncientDaySchedule } from './ancient-schedule-data';
import { ART_CULTURE_SCHEDULE, ART_CULTURE_PHASES, getArtCultureDaySchedule } from './art-culture-schedule-data';

export type HistorySection = 'modern' | 'medieval' | 'ancient' | 'art_culture';

export interface HistorySectionConfig {
    id: HistorySection;
    title: string;
    subtitle: string;
    description: string;
    brandColor: string;
    brandBg: string;
    accentColor: string;
    chaptersTotal: number;
    subject: string;
    schedule: any[];
    phases: any[];
    getToday: () => any;
}

export const HISTORY_PLAN_CONFIGS: Record<HistorySection, HistorySectionConfig> = {
    modern: {
        id: 'modern',
        title: "Modern History",
        subtitle: "Spectrum",
        description: "From Advent of Europeans to Independence (1757 - 1947).",
        brandColor: "indigo",
        brandBg: "#1a237e",
        accentColor: "indigo-400",
        chaptersTotal: 39,
        subject: "Modern History",
        schedule: SPECTRUM_SCHEDULE,
        phases: SPECTRUM_PHASES,
        getToday: getSpectrumDaySchedule
    },
    medieval: {
        id: 'medieval',
        title: "Medieval History",
        subtitle: "Satish Chandra",
        description: "From Early Medieval Era to the Decline of Mughals.",
        brandColor: "purple",
        brandBg: "#4a148c",
        accentColor: "purple-400",
        chaptersTotal: 18, // Total chapters in our 15-day plan
        subject: "Medieval History",
        schedule: MEDIEVAL_SCHEDULE,
        phases: MEDIEVAL_PHASES,
        getToday: getMedievalDaySchedule
    },
    ancient: {
        id: 'ancient',
        title: "Ancient History",
        subtitle: "RS Sharma",
        description: "From Stone Age to the Golden Age of Guptas.",
        brandColor: "amber",
        brandBg: "#795548",
        accentColor: "amber-400",
        chaptersTotal: 15,
        subject: "Ancient History",
        schedule: ANCIENT_SCHEDULE,
        phases: ANCIENT_PHASES,
        getToday: getAncientDaySchedule
    },
    art_culture: {
        id: 'art_culture',
        title: "Art & Culture",
        subtitle: "Nitin Singhania",
        description: "Visual Arts, Performing Arts, and Indian Philosophy.",
        brandColor: "emerald",
        brandBg: "#004d40",
        accentColor: "emerald-400",
        chaptersTotal: 15,
        subject: "Art & Culture",
        schedule: ART_CULTURE_SCHEDULE,
        phases: ART_CULTURE_PHASES,
        getToday: getArtCultureDaySchedule
    }
};
