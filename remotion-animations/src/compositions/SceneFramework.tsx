import React from 'react';
import { AbsoluteFill } from 'remotion';
import { ConceptNode } from '../components/ConceptNode';
import { theme } from '../styles/theme';
import { ConnectionLine } from '../components/ConnectionLine';

export const SceneFramework: React.FC = () => {

  const cx = 960;
  const cy = 540;
  const radius = 300;

  const hexNodes = [
    { title: 'WHAT', angle: 0, delay: 10 },
    { title: 'WHERE', angle: 60, delay: 20 },
    { title: 'WHEN', angle: 120, delay: 30 },
    { title: 'WHO', angle: 180, delay: 40 },
    { title: 'WHY', angle: 240, delay: 50 },
    { title: 'HOW', angle: 300, delay: 60 },
  ].map(node => ({
    title: node.title,
    delay: node.delay,
    x: cx + radius * Math.cos((node.angle * Math.PI) / 180),
    y: cy + radius * Math.sin((node.angle * Math.PI) / 180),
  }));

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <div style={{ position: 'absolute', top: 100, left: 100, color: theme.colors.text, fontSize: 60, fontFamily: theme.typography.fontFamily, fontWeight: 'bold' }}>
        Environmental Thinking Framework
      </div>
      
      {/* Central Node representing the Event */}
      <ConceptNode title="Event" position={{x: cx, y: cy}} delay={0} size={150} />

      {/* Connections from center to hexagonal nodes */}
      {hexNodes.map((node, i) => (
        <ConnectionLine key={`conn-${i}`} start={{x: cx, y: cy}} end={node} delay={node.delay} color={theme.colors.accentBlue} />
      ))}

      {/* Hexagonal Nodes */}
      {hexNodes.map((node) => (
        <ConceptNode
          key={node.title}
          title={node.title}
          position={node}
          delay={node.delay + 10}
          color={theme.colors.accentBlue}
          size={140}
        />
      ))}

    </AbsoluteFill>
  );
};
