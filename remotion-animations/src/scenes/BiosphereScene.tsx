import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const BiosphereScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  // Growth pulse logic
  const pulse = Math.sin(frame / 6) * 0.03 + 1;
  const growth = spring({
    frame,
    fps,
    config: {
      damping: 10,
    },
  });

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#051205',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Background Life Energy (Simplified) */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 70% 30%, #00ff8811 0%, transparent 100%)',
        opacity: Math.sin(frame / 20) * 0.2 + 0.5,
      }} />

      {/* Biosphere Circle (Terra-formed globe) */}
      <div style={{
        width: 600 * growth,
        height: 600 * growth,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #00ff88 0%, #009e51 50%, #004d2b 100%)',
        boxShadow: '0 0 100px #00ff8833, inset 0 0 60px #000000aa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        transform: `scale(${pulse})`,
      }}>
        {/* Chlorophyll / Vegetation Pulse rings */}
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${100 + i * 20}%`,
            height: `${100 + i * 20}%`,
            border: '1px solid #00ff8822',
            borderRadius: '50%',
            opacity: interpolate(frame % 30, [0, 30], [0.5, 0]),
            transform: `scale(${interpolate(frame % 30, [0, 30], [1, 1.2])})`,
          }} />
        ))}
      </div>

      {/* Dynamic Overlay labels */}
      <div style={{
        position: 'absolute',
        top: 60,
        right: 60,
        color: '#00ff88',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'right',
        opacity: interpolate(frame, [0, 30], [0, 1]),
      }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0, textShadow: '0 2px 10px #00ff8855' }}>
            BIOSPHERE
          </h2>
          <div style={{ width: 60, height: 4, backgroundColor: '#00ff88', marginTop: 10, marginLeft: 'auto' }} />
          <p style={{ fontSize: 18, fontWeight: 300, color: '#9dffcc', marginTop: 10 }}>
            Carbon Cycles & Biodiversity Flux
          </p>
      </div>
    </div>
  );
};
