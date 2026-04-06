import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface CutoutNodeProps {
  cx: number;
  cy: number;
  r: number;
  color: string;
  label?: string;
  delay?: number;
}

export const CutoutNode: React.FC<CutoutNodeProps> = ({ 
  cx, 
  cy, 
  r, 
  color, 
  label, 
  delay = 0 
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
    <g style={{ opacity: entrance, transform: `scale(${entrance})`, transformOrigin: `${cx}px ${cy}px` }}>
      {/* Circle Node */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={color}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="0.5"
        style={{
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
        }}
      />
      
      {/* Label */}
      {label && (
        <text
          x={cx}
          y={cy + r + 5}
          textAnchor="middle"
          fill="#5d4037"
          style={{
            fontFamily: 'monospace',
            fontSize: 3,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            opacity: interpolate(frame - delay - 10, [0, 10], [0, 1], { extrapolateLeft: 'clamp' }),
          }}
        >
          {label}
        </text>
      )}
    </g>
  );
};

import { interpolate } from 'remotion';
