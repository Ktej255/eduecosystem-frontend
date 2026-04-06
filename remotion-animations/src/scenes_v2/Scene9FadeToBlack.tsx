import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { EarthVector } from '../components/vector/EarthVector';
import { COLORS } from '../constants/paths';

export const Scene9FadeToBlack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade and scale
  const fade = interpolate(frame, [0, 100], [1, 0]);
  const scale = interpolate(frame, [0, 100], [1, 0.5]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.NAVY }}>
      {/* Dimmed Earth in distance */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity: fade,
      }}>
        <EarthVector stressedIndices={['water', 'land', 'forest', 'atmosphere']} rotation={frame} />
      </div>

      {/* Final Fade Plate */}
      <AbsoluteFill style={{
        backgroundColor: 'black',
        opacity: 1 - fade,
      }} />

      {/* Final Call to Action */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontFamily: 'monospace',
        textAlign: 'center',
        opacity: interpolate(frame, [100, 140], [0, 1]),
      }}>
        <div style={{ fontSize: 60, fontWeight: 'bold', borderBottom: '4px solid white', paddingBottom: 20 }}>THE SYSTEM IS ONE.</div>
        <div style={{ fontSize: 30, marginTop: 40, letterSpacing: 10 }}>SAVE THE BODY. SAVE THE WORLD.</div>
      </div>
    </AbsoluteFill>
  );
};
