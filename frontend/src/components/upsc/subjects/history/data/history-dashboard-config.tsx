import React from 'react';
import { Scroll, Globe, Calendar, Building2, Crown, Sword, Map } from 'lucide-react';
import { SubjectDashboardProps } from '../SubjectDashboardTemplate';
import EmpireMapViz from '../visuals/EmpireMapViz';
import HistoryTunnelViz from '../visuals/HistoryTunnelViz';
import { HISTORY_CONFIG } from './history-config';
import HistoryTimeline from '../HistoryTimeline';

export const HISTORY_DASHBOARD_CONFIG: SubjectDashboardProps = {
    subjectId: 'history',
    title: 'History',
    subtitle: 'Timeline of Civilizations & Imperial Dynasties',
    accentColor: 'amber',
    stats: [
        { label: 'Ancient Eras', value: '5 Stages', trend: 'Indus-Gupta', icon: <Building2 className="w-5 h-5 text-amber-500" /> },
        { label: 'Medieval Dynasties', value: '12 Major', trend: 'Sultanate-Mughal', icon: <Crown className="w-5 h-5 text-rose-500" /> },
        { label: 'Map Analytics', value: '15 Interactive', trend: 'Geo-Historical', icon: <Globe className="w-5 h-5 text-indigo-500" /> },
        { label: 'Timeline Events', value: '250+', trend: 'BC-Modern', icon: <Calendar className="w-5 h-5 text-purple-500" /> },
    ],
    visualizations: [
        { 
            id: 'empire-map', 
            label: 'Empire Map', 
            icon: <Map className="w-4 h-4" />, 
            description: 'Territorial Expansion Hub',
            component: <EmpireMapViz />
        },
        { 
            id: 'tunnel', 
            label: 'History Tunnel', 
            icon: <Scroll className="w-4 h-4" />, 
            description: 'Chronological Deep-Dive',
            component: <HistoryTunnelViz />
        },
    ],
    plannerConfig: HISTORY_CONFIG,
    flashcards: [], // Add if available
    timelineComponent: <HistoryTimeline config={HISTORY_CONFIG} onSelectTopic={() => { }} />
};
