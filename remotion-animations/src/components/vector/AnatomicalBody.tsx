import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from 'remotion';
import { PATHS, COLORS } from '../../constants/paths';

export const AnatomicalBody: React.FC<{ 
  stressedIndices: string[], 
  zoom?: number 
}> = ({ stressedIndices, zoom = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const beat = 1 + 0.05 * Math.sin(frame * 0.2);
  const breath = 1 + 0.03 * Math.sin(frame * 0.1);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: `scale(${zoom})`,
    }}>
      <svg width="600" height="800" viewBox="0 0 100 100">
        {/* Human Silhouette */}
        <path 
          d={PATHS.HUMAN_BODY} 
          fill="none" 
          stroke={COLORS.WHITE} 
          strokeWidth="0.5" 
          opacity="0.3" 
        />

        {/* Lungs (Breathing) */}
        <path d={PATHS.LUNG_L} fill={stressedIndices.includes('lungs') ? COLORS.RED : COLORS.TEAL} transform={`scale(${breath})`} transform-origin="45 40" />
        <path d={PATHS.LUNG_R} fill={stressedIndices.includes('lungs') ? COLORS.RED : COLORS.TEAL} transform={`scale(${breath})`} transform-origin="55 40" />

        {/* Heart (Beating) */}
        <path 
          d={PATHS.HEART} 
          fill={stressedIndices.includes('heart') ? COLORS.RED : COLORS.PINK} 
          transform={`scale(${beat})`} 
          transform-origin="50 40" 
        />

        {/* Kidneys */}
        <path 
          d={PATHS.KIDNEY_L} 
          fill={stressedIndices.includes('kidney') ? COLORS.RED : COLORS.PINK} 
          style={{ filter: stressedIndices.includes('kidney') ? 'drop-shadow(0 0 5px red)' : 'none' }}
        />
        <path 
          d={PATHS.KIDNEY_R} 
          fill={stressedIndices.includes('kidney') ? COLORS.RED : COLORS.PINK} 
          style={{ filter: stressedIndices.includes('kidney') ? 'drop-shadow(0 0 5px red)' : 'none' }}
        />

        {/* Brain */}
        <path 
          d={PATHS.BRAIN} 
          fill={stressedIndices.includes('brain') ? COLORS.FOG : COLORS.PINK} 
          opacity={stressedIndices.includes('brain') ? 0.4 : 1}
        />
      </svg>
    </div>
  );
};
