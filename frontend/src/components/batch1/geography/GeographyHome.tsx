"use client";

import { useState } from "react";
import TerraLabLayout from "./TerraLabLayout";
import GeographyGlobe from "./3d/GeographyGlobe";
import SyllabusListView from "./components/SyllabusListView";
import { MicroTopic } from "./data/geography-syllabus-data";
import LessonView from "./components/LessonView";
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
import { worldPopulationData } from "./content/human-population-data";
import { humanDevelopmentData } from "./content/human-development-data";
import { economicActivitiesData } from "./content/economic-activities-data";
import { transportTradeData } from "./content/transport-trade-data";
import { LessonContent } from "./content/types";

export default function GeographyHome() {
    // viewMode determines Map vs List. Lesson Mode is an overlay determined by lessonContent presence.
    const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
    const [lessonContent, setLessonContent] = useState<LessonContent | null>(null);
    const [activeModuleId, setActiveModuleId] = useState<string>('geomorphology');
    const [selectedTopic, setSelectedTopic] = useState<MicroTopic | null>(null);

    const handleStartLearning = (topic: MicroTopic) => {
        // Map topic ID to content
        let content: LessonContent | null = null;

        // Simple mapping registry
        switch (topic.id) {
            case 'origin-universe':
                content = ORIGIN_OF_UNIVERSE_CONTENT;
                break;
            case 'geo-time-scale':
                content = GEO_TIME_SCALE_CONTENT;
                break;
            case 'origin-earth':
                content = ORIGIN_OF_EARTH_CONTENT;
                break;
            case 'evolution-spheres':
                content = EVOLUTION_SPHERES_CONTENT;
                break;
            // Interior of Earth
            case 'sources-info':
            case 'seismic-waves':
            case 'earth-layers':
            case 'discontinuities':
                content = INTERIOR_EARTH_CONTENT;
                break;
            // Oceans & Continents
            case 'continental-drift':
            case 'convectional-current':
                content = CONTINENTAL_DRIFT_CONTENT;
                break;
            case 'sea-floor-spreading':
            case 'plate-tectonics':
            case 'plate-boundaries':
                content = PLATE_TECTONICS_CONTENT;
                break;
            // Endogenic Processes
            case 'diastrophism':
            case 'folding':
            case 'faulting':
                content = ENDOGENIC_PROCESSES_CONTENT;
                break;
            case 'volcanism':
                content = VOLCANISM_CONTENT;
                break;
            case 'earthquakes':
                content = EARTHQUAKE_CONTENT;
                break;
            // Exogenic Processes
            case 'weathering':
            case 'mass-movements':
            case 'soil-formation':
                content = EXOGENIC_PROCESSES_CONTENT;
                break;
            // Landforms
            case 'fluvial-landforms':
                content = FLUVIAL_LANDFORMS_CONTENT;
                break;
            case 'aeolian-landforms':
                content = AEOLIAN_LANDFORMS_CONTENT;
                break;
            case 'glacial-landforms':
                content = GLACIAL_LANDFORMS_CONTENT;
                break;
            case 'karst-topography':
            case 'coastal-landforms':
                content = COASTAL_KARST_CONTENT;
                break;
            // Module B: Climatology
            case 'atmosphere-structure':
            case 'composition':
            case 'layers':
                content = ATMOSPHERE_STRUCTURE_CONTENT;
                break;
            case 'insolation-heat':
            case 'insolation-factors':
            case 'heat-budget':
            case 'temp-distribution':
                content = INSOLATION_HEAT_CONTENT;
                break;
            case 'atmospheric-circulation':
            case 'pressure-belts':
            case 'planetary-winds':
            case 'jet-streams':
                content = ATMOSPHERIC_CIRCULATION_CONTENT;
                break;
            case 'water-atmosphere':
            case 'humidity':
            case 'condensation':
                content = WATER_ATMOSPHERE_CONTENT;
                break;
            case 'air-masses-cyclones':
            case 'air-masses':
            case 'tropical-cyclones':
                content = CYCLONES_CONTENT;
                break;
            case 'climatic-regions':
            case 'koppen':
                content = CLIMATIC_REGIONS_CONTENT;
                break;
            // Module C: Oceanography
            case 'ocean-relief':
            case 'major-relief':
            case 'minor-relief':
                content = OCEAN_RELIEF_CONTENT;
                break;
            case 'ocean-properties':
            case 'ocean-temp':
            case 'ocean-salinity':
            case 'ocean-density':
                content = OCEAN_PROPERTIES_CONTENT;
                break;
            case 'water-movement':
            case 'ocean-currents':
            case 'ocean-waves':
            case 'tides':
                content = WATER_MOVEMENT_CONTENT;
                break;
            case 'marine-resources':
            case 'coral-reefs':
            case 'resources':
            case 'unclos':
                content = MARINE_RESOURCES_CONTENT;
                break;
            // Module D: Indian Geography
            case 'lat-long':
            case 'frontiers':
            case 'ist':
            case 'india-location':
                content = indiaLocationData;
                break;
            case 'himalayas':
            case 'northern-plains':
            case 'peninsular-plateau':
            case 'coastal-plains-islands':
            case 'india-physiography':
                content = indiaPhysiographyData;
                break;
            case 'himalayan-rivers':
            case 'peninsular-rivers':
            case 'india-drainage':
                content = indiaDrainageData;
                break;
            case 'monsoon-origin':
            case 'seasons':
            case 'india-climate':
                content = indiaClimateData;
                break;
            case 'veg-types':
            case 'soil-types':
            case 'india-vegetation-soils':
                content = indiaVegetationData;
                break;
            // Module E: Human & Economic Geography
            case 'pop-distribution':
            case 'pop-growth':
            case 'pop-composition':
            case 'world-population':
                content = worldPopulationData;
                break;
            case 'migration-types':
            case 'hdi-concept':
            case 'human-development':
                content = humanDevelopmentData;
                break;
            case 'primary-activities':
            case 'secondary-activities':
            case 'tertiary-quaternary':
            case 'economic-activities':
                content = economicActivitiesData;
                break;
            case 'land-water-air-transport':
            case 'intl-trade-patterns':
            case 'transport-trade':
                content = transportTradeData;
                break;
            default:
                console.warn(`Content not found for topic: ${topic.id}`);
                break;
        }

        if (content) {
            setLessonContent(content);
            setSelectedTopic(null); // Close the GlassPane so it's not open when we return
        } else {
            console.log("Content coming soon");
        }
    };

    const handleCloseLesson = () => {
        setLessonContent(null);
    };

    return (
        <TerraLabLayout
            activeModuleId={activeModuleId}
            onModuleChange={setActiveModuleId}
            onStartLearning={handleStartLearning}
            selectedTopic={selectedTopic}
            onSelectTopic={setSelectedTopic}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
        >
            <div className="w-full h-full relative">
                {lessonContent ? (
                    <LessonView content={lessonContent} onClose={handleCloseLesson} />
                ) : viewMode === 'map' ? (
                    <>
                        <GeographyGlobe
                            activeModuleId={activeModuleId}
                            onSelectTopic={(topic) => {
                                // GeographyGlobe connects topic clicks to the layout state
                                setSelectedTopic(topic);
                            }}
                        />

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono pointer-events-none">
                            Terra-Lab v2.0 • Interactive Geosphere
                        </div>
                    </>
                ) : (
                    <SyllabusListView
                        activeModuleId={activeModuleId}
                        onSelectTopic={(topic) => {
                            setSelectedTopic(topic);
                        }}
                    />
                )}
            </div>
        </TerraLabLayout>
    );
}
