import React from 'react';
import { useCurrentFrame } from 'remotion';
import { ConceptHighlight } from '../utils/animations';
import { theme } from '../styles/theme';

interface HighlightTextProps {
  text: string;
  delay?: number;
  duration?: number;
}

export const HighlightText: React.FC<HighlightTextProps> = ({ text, delay = 0, duration = 30 }) => {
  const frame = useCurrentFrame();
  const pulse = ConceptHighlight(frame, duration, delay);

  const glowOpacity = pulse;

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* Glow layer */}
      <span
        style={{
          position: 'absolute',
          color: theme.colors.accentOrange,
          opacity: glowOpacity,
          textShadow: `0 0 20px ${theme.colors.accentOrange}`,
        }}
      >
        {text}
      </span>
      {/* Base text */}
      <span style={{ position: 'relative', color: theme.colors.accentOrange }}>
        {text}
      </span>
    </span>
  );
};
