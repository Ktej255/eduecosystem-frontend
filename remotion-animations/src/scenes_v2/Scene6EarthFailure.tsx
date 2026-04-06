import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { EarthVector } from '../components/vector/EarthVector';
import { COLORS } from '../constants/paths';

export const Scene6EarthFailure: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Progressively add stress to Earth
  const stressed = [];
  if (frame > 60) stressed.push('water'); // Ocean heating
  if (frame > 180) stressed.push('forest'); // Deforestation
  if (frame > 300) stressed.push('land'); // Desertification
  if (frame > 450) stressed.push('atmosphere'); // Pollution

  // Warning pulse
  const pulse = interpolate(frame % 45, [0, 22, 45], [0, 0.4, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.NAVY }}>
      <EarthVector stressedIndices={stressed} rotation={frame / 2} />
      
      {/* Global Warning Overlays */}
      <AbsoluteFill style={{
        background: `radial-gradient(circle, rgba(255, 100, 0, ${pulse}), transparent 80%)`,
        pointerEvents: 'none',
      }} />

      {/* Warning Text Staggered */}
      <div style={{
        position: 'absolute',
        top: 150,
        right: 150,
        color: '#f39c12',
        fontFamily: 'monospace',
        fontSize: 32,
        opacity: interpolate(frame, [60, 90], [0, 1]),
      }}>
        [ SYSTEM OVERHEAT ]
      </div>
      <div style={{
        position: 'absolute',
        bottom: 150,
        left: 150,
        color: '#e74c3c',
        fontFamily: 'monospace',
        fontSize: 32,
        opacity: interpolate(frame, [300, 330], [0, 1]),
      }}>
        [ METABOLIC COLLAPSE ]
      </div>

      {/* Toxic atmosphere dust */}
      {stressed.includes('atmosphere') && Array.from({ length: 50 }).map((_, i) => {
        const fallY = (frame * 3 + i * 40) % 1200 - 100;
        return (
          <div key={i} style={{
            position: 'absolute',
            top: fallY,
            left: (i * 23) % 1920,
            width: 2,
            height: 2,
            background: 'gray',
            opacity: 0.3,
          }} />
        );
      })}
    </AbsoluteFill>
  );
};
