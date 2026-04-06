import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, Img, staticFile, spring } from 'remotion';

export const PivotScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pushIn = interpolate(frame, [0, 210], [1.0, 1.25]);
  const contrast = interpolate(frame, [0, 100], [1.0, 1.3]);
  const saturation = interpolate(frame, [0, 210], [0.8, 0.2]); // Dramatic desaturation as it gets colder

  return (
    <AbsoluteFill className="grade-desaturated" style={{ backgroundColor: '#000' }}>
      <Img 
        src={staticFile('assets/cinematic/doctor_scanner_eyes_png_1775144931934.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${pushIn})`,
          filter: `contrast(${contrast}) saturate(${saturation})`,
        }}
      />
      {/* Side-lit Shadow Overlay */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.8), transparent)',
      }} />
      
      {/* Monitor Light Reflection on Right Side */}
      <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '30%',
          height: '100%',
          background: 'linear-gradient(-90deg, rgba(0,255,255,0.1), transparent)',
      }} />
    </AbsoluteFill>
  );
};
