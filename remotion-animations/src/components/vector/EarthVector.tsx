import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { PATHS, COLORS } from '../../constants/paths';

export const EarthVector: React.FC<{ 
  stressedIndices: string[], 
  zoom?: number,
  rotation?: number
}> = ({ stressedIndices, zoom = 1, rotation }) => {
  const frame = useCurrentFrame();
  const rotateValue = rotation ?? interpolate(frame, [0, 6300], [0, 360]);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: `scale(${zoom})`,
    }}>
      <svg width="600" height="600" viewBox="0 0 100 100">
        <defs>
          <clipPath id="earth-circle">
            <path d={PATHS.EARTH_CIRCLE} />
          </clipPath>
        </defs>

        {/* Ocean Background */}
        <path 
          d={PATHS.EARTH_CIRCLE} 
          fill={stressedIndices.includes('water') ? "#c0392b" : "#2980b9"} 
          opacity={stressedIndices.includes('water') ? 0.6 : 1}
        />

        {/* Continents (Rotating) */}
        <g transform={`rotate(${rotateValue} 50 50)`} clipPath="url(#earth-circle)">
          <path d={PATHS.CONTINENT_AFRICA} fill={stressedIndices.includes('forest') ? "#4a3000" : "#27ae60"} />
          <path d={PATHS.CONTINENT_AMERICAS} fill={stressedIndices.includes('forest') ? "#4a3000" : "#27ae60"} />
          <path d={PATHS.CONTINENT_EURASIA} fill={stressedIndices.includes('forest') ? "#4a3000" : "#27ae60"} />
          {stressedIndices.includes('land') && (
             <path d={PATHS.BLUEPRINT_ER} transform="scale(0.1)" stroke="red" strokeWidth="1" fill="none" opacity="0.3" />
          )}
        </g>
        
        {/* Outline */}
        <circle cx="50" cy="50" r="50" fill="none" stroke={COLORS.WHITE} strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
};
