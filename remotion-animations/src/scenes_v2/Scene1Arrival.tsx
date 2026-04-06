import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';
import { PATHS, COLORS } from '../constants/paths';

export const Scene1Arrival: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Stretcher movement
  const stretcherX = interpolate(frame, [30, 90], [-200, 960]);
  
  // Blueprint drawing effect
  const drawProgress = interpolate(frame, [0, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.NAVY }}>
      {/* Blueprint Floor Plan */}
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={PATHS.BLUEPRINT_ER}
          fill="none"
          stroke={COLORS.BLUE}
          strokeWidth="0.2"
          strokeDasharray="400"
          strokeDashoffset={400 * (1 - drawProgress)}
          opacity={0.4}
        />
      </svg>

      {/* Stretcher */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: `translate(${stretcherX}px, -50%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Patient Silhouette */}
        <svg width="100" height="40" viewBox="0 0 100 100">
          <path d={PATHS.HUMAN_BODY} fill="white" transform="rotate(90 50 50) scale(0.5)" />
        </svg>
        {/* Stretcher Base */}
        <div style={{ width: 120, height: 10, background: '#555', borderRadius: 5, position: 'relative' }}>
          <div style={{ width: 15, height: 15, borderRadius: '50%', background: '#333', position: 'absolute', bottom: -10, left: 10 }} />
          <div style={{ width: 15, height: 15, borderRadius: '50%', background: '#333', position: 'absolute', bottom: -10, right: 10 }} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
