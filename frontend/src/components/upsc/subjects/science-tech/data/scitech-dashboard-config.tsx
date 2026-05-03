import React from 'react';
import { Rocket, Sparkles, Microscope, Network, Globe2, Shield, Activity, Zap } from 'lucide-react';
import { SubjectDashboardProps } from '../SubjectDashboardTemplate';
import TechTreeViz from '../visualizations/TechTreeViz';
import SpaceOrbitViz from '../visualizations/OrbitSimulation';
import DefenseTechViz from '../visualizations/DefenseTechViz';
import { SCIENCE_TECH_CONFIG } from './science-tech-config';

export const SCITECH_DASHBOARD_CONFIG: SubjectDashboardProps = {
    subjectId: 'science-tech',
    title: 'Science & Tech',
    subtitle: 'Emerging Technologies & Space-Defense Ecosystems',
    accentColor: 'indigo',
    stats: [
        { label: 'Active Missions', value: 'Gaganyaan-1', trend: 'Operational', icon: <Rocket className="w-5 h-5 text-indigo-500" /> },
        { label: 'Focus Area', value: 'Generative AI', trend: 'Strategic', icon: <Sparkles className="w-5 h-5 text-purple-500" /> },
        { label: 'Bio-Discovery', value: 'CRISPR-V3', trend: 'Testing', icon: <Microscope className="w-5 h-5 text-rose-500" /> },
    ],
    visualizations: [
        { 
            id: 'tech-tree', 
            label: 'Tech Tree', 
            icon: <Network className="w-4 h-4" />, 
            description: 'Emerging Technologies Map',
            component: <TechTreeViz />
        },
        { 
            id: 'orbits', 
            label: 'Space Orbits', 
            icon: <Globe2 className="w-4 h-4" />, 
            description: 'Satellite Mechanics',
            component: <SpaceOrbitViz />
        },
        { 
            id: 'defense', 
            label: 'Defense Sys', 
            icon: <Shield className="w-4 h-4" />, 
            description: 'Missile Trajectories',
            component: <DefenseTechViz />
        },
    ],
    plannerConfig: SCIENCE_TECH_CONFIG,
    flashcards: [], // Add if available
};
