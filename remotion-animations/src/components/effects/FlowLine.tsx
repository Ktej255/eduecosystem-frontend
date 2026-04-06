import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface FlowLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  progress: number; // 0 to 1
  dotProgress?: number; // 0 to 1
  color?: string;
  pulse?: boolean;
}

export const FlowLine: React.FC<FlowLineProps> = ({
  from,
  to,
  progress,
  dotProgress = 0,
  color = '#8d6e63', // Pencil-gray
  pulse = false,
}) => {
  const frame = useCurrentFrame();
  
  // Calculate line length for dash animation
  const length = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  
  // Amber pulse color
  const pulseOpacity = pulse ? interpolate(frame % 30, [0, 15, 30], [0.3, 1, 0.3]) : 1;
  const lineColor = pulse ? '#f39c12' : color;

  // Dot position
  const dotX = from.x + (to.x - from.x) * dotProgress;
  const dotY = from.y + (to.y - from.y) * dotProgress;

  return (
    <g>
      <path
        d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
        stroke={lineColor}
        strokeWidth="1"
        strokeDasharray={length}
        strokeDashoffset={length * (1 - progress)}
        strokeLinecap="round"
        fill="none"
        style={{
          opacity: pulseOpacity,
          filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))',
        }}
      />
      {dotProgress > 0 && dotProgress < 1 && (
        <circle
          cx={dotX}
          cy={dotY}
          r="1.5"
          fill="#f39c12"
          style={{
            filter: 'drop-shadow(0 0 5px #f39c12)',
          }}
        />
      )}
    </g>
  );
};
