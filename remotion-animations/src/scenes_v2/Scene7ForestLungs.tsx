import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { COLORS } from '../constants/paths';

const Tree: React.FC<{ progress: number, x: number, y: number, index: number }> = ({ progress, x, y, index }) => {
  const tilt = Math.sin(index + progress * 2) * 5;
  const opacity = interpolate(progress, [0.5, 0.8], [0.8, 0.2], { extrapolateRight: 'clamp' });
  const color = progress > 0.4 ? '#4a3000' : '#27ae60';

  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `rotate(${tilt}deg) scale(${1 - progress * 0.5})`,
      opacity: opacity,
    }}>
      <svg width="40" height="60" viewBox="0 0 40 60">
        <path d="M 20 0 L 40 40 L 30 40 L 38 55 L 2 55 L 10 40 L 0 40 Z" fill={color} />
        <rect x="18" y="55" width="4" height="5" fill="#3e2723" />
      </svg>
    </div>
  );
};

export const Scene7ForestLungs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Wither progress
  const wither = interpolate(frame, [100, 450], [0, 1]);

  // Gray fog
  const fogOpacity = interpolate(frame, [0, 450], [0, 0.6]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0f141a' }}>
      {/* Forest Grid */}
      {Array.from({ length: 40 }).map((_, i) => {
        const x = (i * 157) % 1920;
        const y = (i * 233) % 1080;
        // Staggered withering
        const treeWither = interpolate(frame, [10 + i * 5, 200 + i * 6], [0, 1], {
          extrapolateRight: 'clamp',
          extrapolateLeft: 'clamp'
        });
        return <Tree key={i} progress={treeWither} x={x} y={y} index={i} />;
      })}

      {/* Gray Fog Overlay */}
      <AbsoluteFill style={{
        backgroundColor: '#7f8c8d',
        opacity: fogOpacity,
        mixBlendMode: 'multiply'
      }} />

      {/* Smoke Particles */}
      {Array.from({ length: 15 }).map((_, i) => {
        const rise = (frame * 4 + i * 200) % 1200;
        return (
          <div key={i} style={{
            position: 'absolute',
            bottom: rise - 200,
            left: (i * 123) % 1920,
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(0,0,0,0.4), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }} />
        );
      })}

      {/* Text Indicator */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        border: '4px solid white',
        padding: '20px 40px',
        fontSize: 60,
        fontWeight: 'bold',
        opacity: interpolate(frame, [150, 180, 400, 450], [0, 1, 1, 0]),
      }}>
        BIOSPHERIC FAILURE
      </div>
    </AbsoluteFill>
  );
};
