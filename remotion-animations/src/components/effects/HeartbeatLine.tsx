import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export const HeartbeatLine: React.FC<{ 
  color?: string, 
  thickness?: number 
}> = ({ color = "#3498db", thickness = 2 }) => {
  const frame = useCurrentFrame();
  
  const points = Array.from({ length: 120 }).map((_, i) => {
    const x = i * (1920 / 120);
    // Draw an ECG-like pulse every ~60 frames
    const cycle = (frame + i) % 60;
    let y = 50;
    if (cycle > 25 && cycle < 35) {
      y = 50 + (cycle % 2 === 0 ? -40 : 40) * Math.random();
    } else {
      y = 50 + Math.sin(i * 0.1) * 2;
    }
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="1920" height="100" style={{ position: 'absolute', bottom: 50 }}>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        opacity={interpolate(frame % 60, [0, 30, 60], [0.2, 0.8, 0.2])}
      />
    </svg>
  );
};
