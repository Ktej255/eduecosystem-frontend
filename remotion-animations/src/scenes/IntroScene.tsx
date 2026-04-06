import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gentle zoom-in effect
  const scale = interpolate(frame, [0, 100], [0.8, 1.2], {
    extrapolateRight: 'clamp',
  });

  // Spring entrance for labels
  const opacity = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  });

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#000510',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}>
      {/* Background Stars (Simplified) */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle, #ffffff11 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
      }} />

      {/* Earth Silhouette (Glowy Circle) */}
      <div style={{
          transform: `scale(${scale})`,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00d2ff 0%, #3a7bd5 70%, #000 100%)',
          boxShadow: '0 0 100px #00d2ff55, inset 0 0 50px #000000aa',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Animated Atmosphere Ring */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '2px solid #00d2ff88',
          borderRadius: '50%',
          opacity: interpolate(frame, [0, 50], [0, 1]),
        }} />
      </div>

      {/* Narrative Text */}
      <div style={{
        position: 'absolute',
        bottom: 100,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        opacity,
        transform: `translateY(${interpolate(opacity, [0, 1], [20, 0])}px)`,
      }}>
        <h1 style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-0.02em', margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          EARTH
        </h1>
        <p style={{ fontSize: 24, fontWeight: 300, color: '#00d2ff', marginTop: 10 }}>
          AS A LIVING SYSTEM
        </p>
      </div>
    </div>
  );
};
