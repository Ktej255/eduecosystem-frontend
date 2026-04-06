import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { ConceptNode } from '../components/ConceptNode';
import { ConnectionLine } from '../components/ConnectionLine';
import { theme } from '../styles/theme';

export const SceneSystemThinking: React.FC = () => {
  const frame = useCurrentFrame();
  // Zoom out happens after human system is fully drawn (e.g. at frame 60)
  const scale = interpolate(frame, [60, 90], [1, 0.4], { extrapolateRight: 'clamp' });
  const translateY = interpolate(frame, [60, 90], [0, -200], { extrapolateRight: 'clamp' });

  // Human System Nodes
  const humanNodes = [
    { id: 'Brain', x: 960, y: 300, delay: 0 },
    { id: 'Heart', x: 960, y: 500, delay: 10 },
    { id: 'Lungs', x: 800, y: 450, delay: 20 },
    { id: 'Blood', x: 1120, y: 650, delay: 30 },
  ];

  // Earth System Nodes
  const earthNodes = [
    { id: 'Atmosphere', x: 960, y: 150, delay: 100 },
    { id: 'Hydrosphere', x: 500, y: 800, delay: 110 },
    { id: 'Lithosphere', x: 1420, y: 800, delay: 120 },
    { id: 'Biosphere', x: 960, y: 800, delay: 130 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <div style={{ position: 'absolute', top: 100, left: 100, color: theme.colors.text, fontSize: 60, fontFamily: theme.typography.fontFamily, fontWeight: 'bold' }}>
        System Thinking
      </div>

      <div style={{ transform: `scale(${scale}) translateY(${translateY}px)`, transformOrigin: 'center center', width: '100%', height: '100%', position: 'absolute' }}>
        {/* Human System Connections */}
        <ConnectionLine start={humanNodes[0]} end={humanNodes[1]} delay={15} />
        <ConnectionLine start={humanNodes[1]} end={humanNodes[2]} delay={25} />
        <ConnectionLine start={humanNodes[1]} end={humanNodes[3]} delay={35} />

        {/* Human System Nodes */}
        {humanNodes.map((node) => (
          <ConceptNode key={node.id} title={node.id} position={node} delay={node.delay} />
        ))}
        
        {/* Earth System Connections */}
        <ConnectionLine start={earthNodes[0]} end={earthNodes[1]} delay={115} color={theme.colors.accentGreen} />
        <ConnectionLine start={earthNodes[0]} end={earthNodes[2]} delay={125} color={theme.colors.accentGreen} />
        <ConnectionLine start={earthNodes[1]} end={earthNodes[3]} delay={135} color={theme.colors.accentGreen} />
        <ConnectionLine start={earthNodes[2]} end={earthNodes[3]} delay={145} color={theme.colors.accentGreen} />
        
        {/* Earth System Nodes */}
        {earthNodes.map((node) => (
          <ConceptNode key={node.id} title={node.id} position={node} delay={node.delay} color={theme.colors.accentGreen} size={180} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
