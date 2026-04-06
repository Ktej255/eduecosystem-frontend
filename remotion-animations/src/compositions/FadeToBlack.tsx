import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { PaperCutoutEarthWeb } from './PaperCutoutEarthWeb';

export const FadeToBlack: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade the black overlay from 0 to 1 over 2 seconds (60 frames at 30fps)
  const blackOpacity = interpolate(
    frame,
    [0, 60],
    [0, 1],
    { 
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp' 
    }
  );

  return (
    <AbsoluteFill>
      {/* 
        We render the 'Earth Systems Web' diagram as the background to represent 
        the "previous scene content" that visually fades away.
      */}
      <PaperCutoutEarthWeb />

      {/* Fade Overlay */}
      <AbsoluteFill
        style={{
          backgroundColor: '#000000',
          opacity: blackOpacity,
          zIndex: 100, // Ensure it sits securely on top of everything
        }}
      />
    </AbsoluteFill>
  );
};
