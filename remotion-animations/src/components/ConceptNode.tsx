import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { NodeEmergence } from '../utils/animations';
import { theme } from '../styles/theme';

interface ConceptNodeProps {
  title: string;
  color?: string;
  size?: number;
  position: { x: number; y: number };
  delay?: number;
}

export const ConceptNode: React.FC<ConceptNodeProps> = ({
  title,
  color = theme.colors.accentBlue,
  size = 120,
  position,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { scale, opacity } = NodeEmergence(frame, fps, delay);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y - size / 2,
        left: position.x - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: theme.colors.primary,
        border: `4px solid ${color}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamily,
        fontWeight: 'bold',
        fontSize: size * 0.2,
        textAlign: 'center',
        boxShadow: `0 0 40px ${color}80`,
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {title}
    </div>
  );
};
