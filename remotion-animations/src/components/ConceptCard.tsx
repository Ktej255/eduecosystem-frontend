import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { theme } from '../styles/theme';

interface ConceptCardProps {
  title: string;
  definition: string;
  delay?: number;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ title, definition, delay = 0 }) => {
  const frame = useCurrentFrame();
  const delayedFrame = Math.max(0, frame - delay);
  const opacity = interpolate(delayedFrame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const translateY = interpolate(delayedFrame, [0, 20], [50, 0], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        width: 600,
        backgroundColor: theme.colors.primary,
        padding: 40,
        borderRadius: 20,
        boxShadow: `0 20px 40px rgba(0,0,0,0.5)`,
        border: `2px solid ${theme.colors.accentBlue}`,
        opacity,
        transform: `translateY(${translateY}px)`,
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 20, color: theme.colors.accentBlue }}>
        {title}
      </div>
      <div style={{ fontSize: 32, lineHeight: 1.5 }}>
        {definition}
      </div>
    </div>
  );
};
