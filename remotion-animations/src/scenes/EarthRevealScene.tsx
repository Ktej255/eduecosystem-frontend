import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, Img, staticFile, spring } from 'remotion';

export const EarthRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Orbital Push-in
  const pushIn = interpolate(frame, [0, 360], [1.0, 1.4], { extrapolateRight: 'clamp' });
  const rotate = interpolate(frame, [0, 360], [0, 5]); // Subtle slow rotation
  
  const opacity = interpolate(frame, [0, 30], [0, 1]); // Fade in from black

  return (
    <AbsoluteFill className="grade-earth" style={{ backgroundColor: '#000' }}>
      <Img 
        src={staticFile('assets/cinematic/earth_orbital_wide_png_1775144962610.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${pushIn}) rotate(${rotate}deg)`,
          opacity,
        }}
      />
      {/* Light Atmospheric Bloom */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, transparent 40%, rgba(0,255,255,0.05) 90%)',
          pointerEvents: 'none',
      }} />
    </AbsoluteFill>
  );
};
