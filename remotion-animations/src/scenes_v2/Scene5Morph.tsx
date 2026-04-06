import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { PATHS, COLORS } from '../constants/paths';
import { EarthVector } from '../components/vector/EarthVector';

export const Scene5Morph: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Morph progress
  const morph = interpolate(frame, [0, 480], [0, 1], {
    extrapolateRight: 'clamp'
  });

  // Scale and Rotation
  const scale = interpolate(morph, [0, 1], [0.8, 1.2]);
  const blur = interpolate(morph, [0.4, 0.6], [0, 20]);
  const hue = interpolate(morph, [0, 1], [0, 180]); // Shift red to teal

  return (
    <AbsoluteFill style={{ 
      backgroundColor: COLORS.NAVY,
      filter: `blur(${blur}px)`
    }}>
      {/* Morphing Group */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        width: 600,
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* Human Silhouette Fade Out */}
        <div style={{ 
          opacity: 1 - morph,
          position: 'absolute'
        }}>
          <svg width="600" height="600" viewBox="0 0 100 100">
            <path d={PATHS.HUMAN_BODY} fill="white" />
          </svg>
        </div>

        {/* Earth Vector Fade In */}
        <div style={{ 
          opacity: morph,
          position: 'absolute'
        }}>
          <EarthVector stressedIndices={[]} rotation={frame} />
        </div>
      </div>

      {/* Connection Text */}
      <div style={{
        position: 'absolute',
        bottom: 100,
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: 40,
        fontFamily: 'monospace',
        opacity: interpolate(frame, [100, 200, 300], [0, 1, 0]),
      }}>
        ONE SYSTEM. ONE CRISIS.
      </div>
    </AbsoluteFill>
  );
};
