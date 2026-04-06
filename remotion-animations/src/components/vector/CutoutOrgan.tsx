import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface CutoutOrganProps {
  path: string;
  color: string;
  delay?: number;
  scale?: number;
  opacity?: number;
}

export const CutoutOrgan: React.FC<CutoutOrganProps> = ({ 
  path, 
  color, 
  delay = 0, 
  scale = 1,
  opacity = 1 
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 12,
    },
  });

  return (
    <path
      d={path}
      fill={color}
      stroke="rgba(0,0,0,0.1)"
      strokeWidth="0.5"
      style={{
        opacity: opacity * entrance,
        transform: `scale(${scale * entrance})`,
        transformOrigin: 'center',
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
      }}
    />
  );
};
