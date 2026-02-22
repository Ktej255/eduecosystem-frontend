import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic imports to avoid SSR issues with heavy viz libraries
const TechTreeViz = dynamic(() => import('@/components/batch1/science-tech/visualizations/TechTreeViz'), {
    loading: () => <div className="h-[400px] flex items-center justify-center bg-muted rounded-xl">Loading Tech Tree...</div>,
    ssr: false
});

const CarbonCycleViz = dynamic(() => import('@/components/batch1/environment/visualizations/CarbonCycleViz'), {
    loading: () => <div className="h-[400px] flex items-center justify-center bg-muted rounded-xl">Loading Carbon Cycle...</div>,
    ssr: false
});

const GeographyGlobe = dynamic(() => import('@/components/batch1/geography/3d/GeographyGlobe'), {
    loading: () => <div className="h-[400px] flex items-center justify-center bg-muted rounded-xl">Loading 3D Globe...</div>,
    ssr: false
});

const CircularFlowViz = dynamic(() => import('@/components/batch1/economy/visualizations/CircularFlowViz'), {
    loading: () => <div className="h-[400px] flex items-center justify-center bg-muted rounded-xl">Loading Economy Model...</div>,
    ssr: false
});

const PlateTectonicsViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/PlateTectonicsViz'), { ssr: false });
const InteriorEarthViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/InteriorEarthViz'), { ssr: false });
const AtmosphereViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/AtmosphereViz'), { ssr: false });
const OceanFloorViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/OceanFloorViz'), { ssr: false });
const OceanCurrentsViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/OceanCurrentsViz'), { ssr: false });
const GeologicalTimeScaleViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/GeologicalTimeScaleViz'), { ssr: false });
const VolcanoViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/VolcanoViz'), { ssr: false });
const RiverSystemViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/RiverSystemViz'), { ssr: false });
const MonsoonViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/MonsoonViz'), { ssr: false });
const GlacialViz = dynamic(() => import('@/components/batch1/geography/3d/simulations/GlacialViz'), { ssr: false });

// Map "bookId:chapterId" to Component
export const VISUALIZATION_REGISTRY: Record<string, React.ComponentType<any>> = {
    // Science & Tech
    'science-tech-tmh:1': TechTreeViz,
    'ncert-science-10:1': TechTreeViz,

    // Environment
    'pmf-ias:1': CarbonCycleViz,
    'shankar-ias:1': CarbonCycleViz,
    'ncert-biology-12:1': CarbonCycleViz,

    // Economy
    'ramesh-singh:1': CircularFlowViz,
    'sriram-ias:1': CircularFlowViz,

    // Geography
    'savinder-singh:1': GeographyGlobe,
    'gc-leong:1': GeographyGlobe,
    'ncert-geography-11:1': GeographyGlobe,
    'savinder-singh:2': PlateTectonicsViz,
    'interior-earth': InteriorEarthViz,
    'atmosphere-structure': AtmosphereViz,
    'geo-time-scale': GeologicalTimeScaleViz,
    'savinder-singh:3': VolcanoViz,
    'savinder-singh:4': GlacialViz,
    'savinder-singh:5': RiverSystemViz,
    'ncert-geography-11:4': MonsoonViz,
    'ocean-relief': OceanFloorViz,
    'ocean-currents': OceanCurrentsViz,
};

export const getVisualization = (bookId: string, chapterId: number) => {
    const key = `${bookId}:${chapterId}`;
    return VISUALIZATION_REGISTRY[key] || null;
};
