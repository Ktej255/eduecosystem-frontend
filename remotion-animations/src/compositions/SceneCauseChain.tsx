import React from 'react';
import { AbsoluteFill } from 'remotion';
import { ConceptNode } from '../components/ConceptNode';
import { ConnectionLine } from '../components/ConnectionLine';
import { theme } from '../styles/theme';

export const SceneCauseChain: React.FC = () => {

  const nodes = [
    { title: 'Forest', x: 200, y: 500, delay: 0 },
    { title: 'Rainfall', x: 550, y: 500, delay: 20 },
    { title: 'Soil Erosion', x: 900, y: 500, delay: 40 },
    { title: 'River Sed.', x: 1250, y: 500, delay: 60 },
    { title: 'Flood', x: 1600, y: 500, delay: 80 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <div style={{ position: 'absolute', top: 100, left: 100, color: theme.colors.text, fontSize: 60, fontFamily: theme.typography.fontFamily, fontWeight: 'bold' }}>
        Cause Chain
      </div>
      
      {/* Connections plotted before nodes */}
      {nodes.map((node, i) => {
        if (i === nodes.length - 1) return null;
        return (
          <ConnectionLine
            key={`line-${i}`}
            start={node}
            end={nodes[i + 1]}
            delay={node.delay + 10}
            duration={20}
            color={theme.colors.accentGreen}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <ConceptNode
          key={node.title}
          title={node.title}
          position={node}
          delay={node.delay}
          color={theme.colors.accentGreen}
          size={160}
        />
      ))}
      
    </AbsoluteFill>
  );
};
