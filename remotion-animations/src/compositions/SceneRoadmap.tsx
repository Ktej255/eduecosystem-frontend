import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { ConceptNode } from '../components/ConceptNode';
import { theme } from '../styles/theme';
import { ConnectionLine } from '../components/ConnectionLine';

export const SceneRoadmap: React.FC = () => {
  const frame = useCurrentFrame();
  
  const nodes = [
    { title: 'Planet Systems', x: 400, y: 300, delay: 0 },
    { title: 'Living Systems', x: 800, y: 300, delay: 20 },
    { title: 'Human Impact', x: 1200, y: 300, delay: 40 },
    { title: 'Governance', x: 1600, y: 300, delay: 60 },
    { title: 'Future', x: 1000, y: 700, delay: 80 },
  ];

  const textOpacity = interpolate(frame, [100, 130], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <div style={{ position: 'absolute', top: 100, left: 100, color: theme.colors.text, fontSize: 60, fontFamily: theme.typography.fontFamily, fontWeight: 'bold' }}>
        Course Roadmap
      </div>

      {nodes.map((node, i) => {
        if (i === nodes.length - 1) return null;
        return (
          <ConnectionLine
            key={`line-${i}`}
            start={node}
            end={nodes[i + 1]}
            delay={node.delay + 10}
            color={theme.colors.accentOrange}
          />
        );
      })}
      
      <ConnectionLine
        start={nodes[1]}
        end={nodes[4]}
        delay={85}
        color={theme.colors.accentOrange}
      />
      <ConnectionLine
        start={nodes[2]}
        end={nodes[4]}
        delay={95}
        color={theme.colors.accentOrange}
      />

      {nodes.map((node) => (
        <ConceptNode
          key={node.title}
          title={node.title}
          position={node}
          delay={node.delay}
          color={theme.colors.accentOrange}
          size={160}
        />
      ))}

      <div style={{ 
        position: 'absolute', 
        bottom: 100, 
        left: 0, 
        width: '100%', 
        textAlign: 'center', 
        color: theme.colors.text, 
        fontSize: 48, 
        fontFamily: theme.typography.fontFamily, 
        opacity: textOpacity 
      }}>
        "After this course you will be able to explain any environmental event on Earth."
      </div>
    </AbsoluteFill>
  );
};
