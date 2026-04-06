import React from 'react';
import { useCurrentFrame } from 'remotion';
import { ConnectionDrawing } from '../utils/animations';
import { theme } from '../styles/theme';

interface ConnectionLineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  delay?: number;
  duration?: number;
  color?: string;
  strokeWidth?: number;
}

export const ConnectionLine: React.FC<ConnectionLineProps> = ({
  start,
  end,
  delay = 0,
  duration = 30,
  color = theme.colors.text,
  strokeWidth = 4,
}) => {
  const frame = useCurrentFrame();
  const progress = ConnectionDrawing(frame, duration, delay);

  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.sqrt(dx * dx + dy * dy);

  // Instead of strokeDasharray and strokeDashoffset, we can simply clip the path length
  // or use strokeDasharray properly.
  const strokeDashoffset = length * (1 - progress);

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={length}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </svg>
  );
};
