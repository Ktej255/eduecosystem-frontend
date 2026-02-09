"use client";

import { useState } from "react";
import TerraLabLayout from "./TerraLabLayout";
import GeographyGlobe from "./3d/GeographyGlobe";
import GeographyDashboard from "./GeographyDashboard";
import GeographySchedule from "./GeographySchedule";
import SyllabusListView from "./components/SyllabusListView";
import LessonView from "./components/LessonView";
import { MicroTopic, GEOGRAPHY_SYLLABUS } from "./data/geography-syllabus-data";
import { Button } from "@/components/ui/button";
import { Compass, Globe, BookOpen, Layers, BarChart2, ArrowLeft, CalendarRange } from "lucide-react";
import { LessonContent } from "./content/types";

// Content Imports
import { ORIGIN_OF_UNIVERSE_CONTENT } from "./content/universe-data";
import { GEO_TIME_SCALE_CONTENT, ORIGIN_OF_EARTH_CONTENT, EVOLUTION_SPHERES_CONTENT } from "./content/earth-evolution-data";
import { INTERIOR_EARTH_CONTENT } from "./content/interior-earth-data";
import { CONTINENTAL_DRIFT_CONTENT, PLATE_TECTONICS_CONTENT } from "./content/oceans-continents-data";
import { ENDOGENIC_PROCESSES_CONTENT, VOLCANISM_CONTENT, EARTHQUAKE_CONTENT, EXOGENIC_PROCESSES_CONTENT } from "./content/geomorphic-processes-data";
import { FLUVIAL_LANDFORMS_CONTENT, AEOLIAN_LANDFORMS_CONTENT, GLACIAL_LANDFORMS_CONTENT, COASTAL_KARST_CONTENT } from "./content/landforms-data";
import { ATMOSPHERE_STRUCTURE_CONTENT, INSOLATION_HEAT_CONTENT } from "./content/climatology-data";
import { ATMOSPHERIC_CIRCULATION_CONTENT, WATER_ATMOSPHERE_CONTENT, CYCLONES_CONTENT, CLIMATIC_REGIONS_CONTENT } from "./content/climatology-advanced-data";
import { OCEAN_RELIEF_CONTENT, OCEAN_PROPERTIES_CONTENT } from "./content/oceanography-data";
import { WATER_MOVEMENT_CONTENT, MARINE_RESOURCES_CONTENT } from "./content/oceanography-advanced-data";
import { indiaLocationData } from "./content/india-location-data";
import { indiaPhysiographyData } from "./content/india-physiography-data";
import { indiaDrainageData } from "./content/india-drainage-data";
import { indiaClimateData } from "./content/india-climate-data";
import { indiaVegetationData } from "./content/india-vegetation-data";
// import { resourcesAgricultureData } from "./content/resources-agriculture-data"; // Missing
// import { industryTransportData } from "./content/industry-transport-data"; // Missing
import { worldPopulationData as worldPopData } from "./content/human-population-data";
import { humanDevelopmentData } from "./content/human-development-data";
import { economicActivitiesData } from "./content/economic-activities-data";
import { transportTradeData } from "./content/transport-trade-data";

interface GeographyHomeProps {
    initialModuleId?: string;
    initialView?: 'dashboard' | 'syllabus' | 'globe' | 'lesson';
}

export default function GeographyHome({ initialModuleId = 'geomorphology', initialView = 'dashboard' }: GeographyHomeProps) {
    const [view, setView] = useState<'dashboard' | 'syllabus' | 'globe' | 'lesson' | 'schedule'>(initialView);
    const [activeModuleId, setActiveModuleId] = useState<string>(initialModuleId);
    const [lessonContent, setLessonContent] = useState<LessonContent | null>(null);

    const handleStartLearning = (topic: MicroTopic) => {
        let content: LessonContent | null = null;

        // Content Mapping Strategy
        // We match topic IDs to imported content objects.
        // This is a simplified lookup for brevity.

        switch (topic.id) {
            // --- GEOMORPHOLOGY ---
            case 'origin-universe':
            case 'star-formation':
            case 'solar-system':
            case 'moon': content = ORIGIN_OF_UNIVERSE_CONTENT; break;

            case 'geo-time-scale':
            case 'origin-earth':
            case 'evolution-spheres': content = ORIGIN_OF_EARTH_CONTENT; break;

            case 'sources-info':
            case 'seismic-waves':
            case 'earth-layers':
            case 'discontinuities': content = INTERIOR_EARTH_CONTENT; break;

            case 'continental-drift':
            case 'convectional-current':
            case 'sea-floor-spreading':
            case 'plate-tectonics':
            case 'plate-boundaries': content = PLATE_TECTONICS_CONTENT; break;

            case 'diastrophism':
            case 'folding':
            case 'faulting': content = ENDOGENIC_PROCESSES_CONTENT; break;

            case 'volcanism': content = VOLCANISM_CONTENT; break;
            case 'earthquakes': content = EARTHQUAKE_CONTENT; break;

            case 'weathering':
            case 'mass-movements':
            case 'soil-formation': content = EXOGENIC_PROCESSES_CONTENT; break;

            case 'fluvial-landforms': content = FLUVIAL_LANDFORMS_CONTENT; break;
            case 'aeolian-landforms': content = AEOLIAN_LANDFORMS_CONTENT; break;
            case 'glacial-landforms': content = GLACIAL_LANDFORMS_CONTENT; break;
            case 'karst-topography':
            case 'coastal-landforms': content = COASTAL_KARST_CONTENT; break;

            // --- CLIMATOLOGY ---
            case 'atmosphere-structure':
            case 'composition':
            case 'layers': content = ATMOSPHERE_STRUCTURE_CONTENT; break;

            case 'insolation-heat':
            case 'insolation-factors':
            case 'heat-budget':
            case 'temp-distribution': content = INSOLATION_HEAT_CONTENT; break;

            case 'atmospheric-circulation':
            case 'pressure-belts':
            case 'planetary-winds':
            case 'secondary-winds':
            case 'local-winds':
            case 'jet-streams': content = ATMOSPHERIC_CIRCULATION_CONTENT; break;

            case 'water-atmosphere':
            case 'humidity':
            case 'condensation':
            case 'precipitation': content = WATER_ATMOSPHERE_CONTENT; break;

            case 'air-masses-cyclones':
            case 'air-masses':
            case 'fronts':
            case 'temperate-cyclones':
            case 'tropical-cyclones': content = CYCLONES_CONTENT; break;

            case 'climatic-regions':
            case 'koppen':
            case 'global-zones': content = CLIMATIC_REGIONS_CONTENT; break;

            // --- OCEANOGRAPHY ---
            case 'ocean-relief':
            case 'major-relief':
            case 'minor-relief': content = OCEAN_RELIEF_CONTENT; break;

            case 'ocean-properties':
            case 'ocean-temp':
            case 'ocean-salinity':
            case 'ocean-density': content = OCEAN_PROPERTIES_CONTENT; break;

            case 'water-movement':
            case 'ocean-currents':
            case 'ocean-waves':
            case 'tides': content = WATER_MOVEMENT_CONTENT; break;

            case 'marine-resources':
            case 'coral-reefs':
            case 'resources':
            case 'unclos': content = MARINE_RESOURCES_CONTENT; break;

            // --- INDIAN GEOGRAPHY ---
            case 'india-location':
            case 'lat-long':
            case 'frontiers':
            case 'ist': content = indiaLocationData; break;

            case 'india-physiography':
            case 'himalayas':
            case 'northern-plains':
            case 'peninsular-plateau':
            case 'coastal-plains-islands': content = indiaPhysiographyData; break;

            case 'india-drainage':
            case 'drainage-system':
            case 'himalayan-rivers':
            case 'peninsular-rivers': content = indiaDrainageData; break;

            case 'india-climate':
            case 'climate-monsoon':
            case 'monsoon-origin':
            case 'seasons': content = indiaClimateData; break;

            case 'india-vegetation-soils':
            case 'soils-vegetation':
            case 'veg-types':
            case 'soil-types': content = indiaVegetationData; break;

            // --- HUMAN GEOGRAPHY ---
            case 'world-population':
            case 'pop-distribution':
            case 'pop-growth':
            case 'pop-composition': content = worldPopData; break;

            case 'human-development':
            case 'migration-types':
            case 'hdi-concept': content = humanDevelopmentData; break;

            case 'economic-activities':
            case 'primary-activities':
            case 'secondary-activities':
            case 'tertiary-quaternary': content = economicActivitiesData; break;

            case 'transport-trade':
            case 'land-water-air-transport':
            case 'intl-trade-patterns': content = transportTradeData; break;

            default:
                // Fallback for sub-topics mapping to same parent content
                if (topic.id.startsWith('india-')) content = indiaLocationData;
                break;
        }

        if (content) {
            setLessonContent(content);
            setView('lesson');
        } else {
            console.log("No content found for", topic.id);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="p-2 bg-blue-600 rounded-xl text-white">
                            <Compass className="h-5 w-5 animate-spin-slow" />
                        </div>
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            TerraLab
                        </span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                        <Button
                            variant={view === 'dashboard' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setView('dashboard')}
                            className="gap-2 text-xs font-semibold"
                        >
                            <BarChart2 className="h-4 w-4" />
                            Dashboard
                        </Button>
                        <Button
                            variant={view === 'schedule' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setView('schedule')}
                            className="gap-2 text-xs font-semibold"
                        >
                            <CalendarRange className="h-4 w-4" />
                            Schedule
                        </Button>
                        <Button
                            variant={view === 'syllabus' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setView('syllabus')}
                            className="gap-2 text-xs font-semibold"
                        >
                            <Layers className="h-4 w-4" />
                            Syllabus
                        </Button>
                        <Button
                            variant={view === 'globe' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setView('globe')}
                            className="gap-2 text-xs font-semibold"
                        >
                            <Globe className="h-4 w-4" />
                            3D Globe
                        </Button>
                        <Button
                            variant='ghost'
                            size="sm"
                            onClick={() => window.location.href = '/student/batch1/current-affairs?subject=Geography'}
                            className="gap-2 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                        >
                            <BarChart2 className="h-4 w-4" />
                            Current Affairs
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container py-8">
                {/* View Switching */}
                {view === 'dashboard' && (
                    <GeographyDashboard />
                )}

                {view === 'schedule' && (
                    <GeographySchedule />
                )}

                {view === 'syllabus' && (
                    <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-8rem)]">
                        {/* Module Sidebar */}
                        <div className="lg:w-64 space-y-2 overflow-y-auto pr-2">
                            {GEOGRAPHY_SYLLABUS.map(module => (
                                <button
                                    key={module.id}
                                    onClick={() => setActiveModuleId(module.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium text-sm flex items-center gap-3 ${activeModuleId === module.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                                        }`}
                                >
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: module.color }} />
                                    {module.title}
                                </button>
                            ))}
                        </div>

                        {/* Syllabus List */}
                        <div className="flex-1 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                            <SyllabusListView
                                activeModuleId={activeModuleId}
                                onSelectTopic={handleStartLearning}
                            />
                        </div>
                    </div>
                )}

                {view === 'globe' && (
                    <div className="h-[calc(100vh-8rem)] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative">
                        <GeographyGlobe
                            activeModuleId={activeModuleId}
                            onSelectTopic={handleStartLearning}
                        />
                    </div>
                )}

                {view === 'lesson' && lessonContent && (
                    <div className="fixed inset-0 z-50 bg-white dark:bg-black">
                        <LessonView
                            content={lessonContent}
                            onClose={() => setView('syllabus')}
                        />
                    </div>
                )}
            </main>
        </div>
    );
}
