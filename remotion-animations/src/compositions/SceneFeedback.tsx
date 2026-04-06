import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { ConceptNode } from '../components/ConceptNode';
import { ConceptCard } from '../components/ConceptCard';
import { theme } from '../styles/theme';

export const SceneFeedback: React.FC = () => {
  const frame = useCurrentFrame();

  const tempPosition = { x: 600, y: 500 };
  const icePosition = { x: 1320, y: 500 };

  const loopProgress = interpolate(frame, [30, 90], [0, 1], { extrapolateRight: 'clamp' });
  const strokeDashoffset = 1200 * (1 - loopProgress);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <div style={{ position: 'absolute', top: 100, left: 100, color: theme.colors.text, fontSize: 60, fontFamily: theme.typography.fontFamily, fontWeight: 'bold' }}>
        Feedback Loops
      </div>

      <ConceptNode title="Temp. Increase" position={tempPosition} delay={10} color={theme.colors.accentOrange} size={180} />
      <ConceptNode title="Ice Melting" position={icePosition} delay={20} color={theme.colors.accentBlue} size={180} />

      {/* Looping Arrows using SVG */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {/* Top Arc (Temp -> Ice) */}
        <path
          d={`M ${tempPosition.x} ${tempPosition.y - 120} Q 960 200, ${icePosition.x} ${icePosition.y - 120}`}
          fill="transparent"
          stroke={theme.colors.accentOrange}
          strokeWidth="8"
          strokeDasharray="1200"
          strokeDashoffset={strokeDashoffset}
        />
        {/* Bottom Arc (Ice -> Temp, amplifying loop) */}
        <path
          d={`M ${icePosition.x} ${icePosition.y + 120} Q 960 800, ${tempPosition.x} ${tempPosition.y + 120}`}
          fill="transparent"
          stroke={theme.colors.accentOrange}
          strokeWidth="8"
          strokeDasharray="1200"
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      <div style={{ position: 'absolute', bottom: 100, left: 660 }}>
        <ConceptCard title="Positive Feedback Loop" definition="A change in a system that amplifies itself, causing further change in the same direction." delay={50} />
      </div>

    </AbsoluteFill>
  );
};
