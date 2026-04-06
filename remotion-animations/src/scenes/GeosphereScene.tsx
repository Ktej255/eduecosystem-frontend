import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const GeosphereScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  // Internal convection pulses
  const pulse = Math.sin(frame / 10) * 0.05 + 1;
  const seismic = spring({
    frame,
    fps,
    config: {
      stiffness: 100,
    },
  });

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#120505',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Geosphere Cross Section */}
      <div style={{
        width: 800 * seismic,
        height: 800 * seismic,
        borderRadius: '50%',
        background: 'conic-gradient(#ff4d00 0%, #ff8c00 10%, #ff4d00 25%, #8b0000 50%, #4a0000 75%, #ff4d00 100%)',
        boxShadow: '0 0 150px #ff4d0044, inset 0 0 100px #00000088',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        animation: 'convection 20s linear infinite',
      }}>
        {/* Core */}
        <div style={{
          width: 250 * pulse,
          height: 250 * pulse,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fff700 0%, #ffc400 40%, #ff6f00 100%)',
          boxShadow: '0 0 80px #fff70088',
        }} />

        {/* Tectonic Plate Lines */}
        <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.3 }} viewBox="0 0 100 100">
          <path d="M10,50 Q25,30 50,50 T90,50" stroke="#ff8c00" strokeWidth="0.5" fill="none" />
          <path d="M30,10 Q50,40 20,80" stroke="#ff8c00" strokeWidth="0.5" fill="none" />
          <path d="M70,15 Q60,45 85,85" stroke="#ff8c00" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Dynamic Overlay labels */}
      <div style={{
        position: 'absolute',
        top: 60,
        left: 60,
        color: '#ff8c00',
        fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [0, 30], [0, 1]),
      }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0, textShadow: '0 2px 10px #ff4d0055' }}>
            GEOSPHERE
          </h2>
          <div style={{ width: 60, height: 4, backgroundColor: '#ff4d00', marginTop: 10 }} />
          <p style={{ fontSize: 18, fontWeight: 300, color: '#ffcc00', marginTop: 10 }}>
            Mantle Convection & Tectonic Flux
          </p>
      </div>
    </div>
  );
};
