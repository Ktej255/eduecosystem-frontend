import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { COLORS } from '../constants/paths';

export const Scene4Microscopic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Draw cells
  const cells = Array.from({ length: 40 }).map((_, i) => ({
    x: (i * 123) % 1920,
    y: (i * 234) % 1080,
    r: 40 + (i % 20),
    speed: 1 + (i % 3),
  }));

  const toxicOpacity = interpolate(frame, [0, 60], [0, 0.4]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a051a' }}>
      {/* Red Blood Cells */}
      {cells.map((cell, i) => {
        const moveX = Math.sin(frame / 60 + i) * 30;
        const moveY = (frame * cell.speed + i * 50) % 1200 - 100;
        return (
          <div key={i} style={{
            position: 'absolute',
            top: moveY,
            left: cell.x + moveX,
            width: cell.r,
            height: cell.r,
            background: 'radial-gradient(circle, #e74c3c, #c0392b)',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(192, 57, 43, 0.4)',
            opacity: 0.8,
          }} />
        );
      })}

      {/* Toxic Particles */}
      {Array.from({ length: 100 }).map((_, i) => {
        const fallY = (frame * 5 + i * 20) % 1200 - 100;
        return (
          <div key={i} style={{
            position: 'absolute',
            top: fallY,
            left: (i * 17) % 1920,
            width: 4,
            height: 4,
            background: '#2ecc71',
            borderRadius: '50%',
            opacity: toxicOpacity,
            filter: 'blur(2px)',
          }} />
        );
      })}

      {/* Warning Text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#e74c3c',
        fontFamily: 'monospace',
        fontSize: 80,
        fontWeight: 'bold',
        letterSpacing: 20,
        textAlign: 'center',
        opacity: interpolate(frame, [60, 90], [0, 1]),
      }}>
        BLOOD POISONING
      </div>
    </AbsoluteFill>
  );
};
