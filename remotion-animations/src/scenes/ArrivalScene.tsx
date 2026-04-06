import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring, AbsoluteFill, Img, staticFile } from 'remotion';

export const ArrivalScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pushIn = interpolate(frame, [0, 300], [1, 1.15]);
  const blurValue = interpolate(frame, [0, 50], [10, 0]); // Motion blur fades out
  
  const flicker = Math.sin(frame * 0.5) > 0.8 ? 0.4 : 1; // Fluorescent flicker

  return (
    <AbsoluteFill className="grade-hospital" style={{ backgroundColor: '#011' }}>
      <Img 
        src={staticFile('assets/cinematic/emergency_room_motion_blur_png_1775144948155.png')}
        style={{
          transform: `scale(${pushIn})`,
          filter: `blur(${blurValue}px) brightness(${flicker})`,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Light Spike Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(255,255,255,0.4)',
        boxShadow: '0 0 40px rgba(255,255,255,0.8)',
        opacity: flicker === 0.4 ? 0.8 : 0.1,
      }} />
    </AbsoluteFill>
  );
};
