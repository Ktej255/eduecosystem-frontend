import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic imports to avoid SSR issues with heavy viz libraries
const TechTreeViz = dynamic(() => import('@/components/batch1/science-tech/visualizations/TechTreeViz'), {
    loading: () => <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-xl">Loading Tech Tree...</div>,
    ssr: false
});

const CarbonCycleViz = dynamic(() => import('@/components/batch1/environment/visualizations/CarbonCycleViz'), {
    loading: () => <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-xl">Loading Carbon Cycle...</div>,
    ssr: false
});

const GeographyGlobe = dynamic(() => import('@/components/batch1/geography/3d/GeographyGlobe'), {
    loading: () => <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-xl">Loading 3D Globe...</div>,
    ssr: false
});

// Map "bookId:chapterId" to Component
export const VISUALIZATION_REGISTRY: Record<string, React.ComponentType<any>> = {
    // Science & Tech
    'science-tech-tmh:1': TechTreeViz,
    'ncert-science-10:1': TechTreeViz,

    // Environment
    'pmf-ias:1': CarbonCycleViz,
    'shankar-ias:1': CarbonCycleViz,
    'ncert-biology-12:1': CarbonCycleViz,

    // Geography
    'savinder-singh:1': GeographyGlobe,
    'gc-leong:1': GeographyGlobe,
    'ncert-geography-11:1': GeographyGlobe,
};

export const getVisualization = (bookId: string, chapterId: number) => {
    const key = `${bookId}:${chapterId}`;
    return VISUALIZATION_REGISTRY[key] || null;
};
