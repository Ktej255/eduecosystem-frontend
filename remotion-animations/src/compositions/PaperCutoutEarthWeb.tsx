import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { PATHS, COLORS } from '../constants/paths';
import { CutoutNode } from '../components/vector/CutoutNode';
import { FlowLine } from '../components/effects/FlowLine';

export const PaperCutoutEarthWeb: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 🎨 Palette
  const bg = COLORS.PAPER_CREAM;
  
  // 📍 Coordinates
  const EARTH = { x: 50, y: 50 };
  const NODES = [
    { name: 'Atmosphere', x: 50, y: 15, color: COLORS.WHITE },
    { name: 'Forest', x: 83.2, y: 39.2, color: COLORS.TEAL },
    { name: 'Ocean', x: 70.5, y: 78.3, color: COLORS.BLUE },
    { name: 'Glacier', x: 29.5, y: 78.3, color: COLORS.FOG },
    { name: 'Life', x: 16.8, y: 39.2, color: COLORS.PINK },
  ];

  // 🕸️ Web Connections (Every pair)
  const WEB_PAIRS: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 2], [1, 3], [1, 4],
    [2, 3], [2, 4],
    [3, 4]
  ];

  // ⏱️ Animation Timing
  // Hub Drawing (30-65) - 1 every 7 frames
  // Web Drawing (65-100) - 1 every 3.5 frames
  // Global Flow (100-150)

  // Simultaneous dot travel (100-150)
  const dotTravel = interpolate(frame, [105, 145], [0, 1], { 
    extrapolateLeft: 'clamp', 
    extrapolateRight: 'clamp' 
  });

  return (
    <AbsoluteFill style={{ backgroundColor: bg }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
        
        {/* Phase 1: Hub Lines (Earth -> Nodes) */}
        {NODES.map((node, i) => {
          const start = 30 + i * 7;
          const progress = interpolate(frame, [start, start + 7], [0, 1], { 
            extrapolateLeft: 'clamp', 
            extrapolateRight: 'clamp' 
          });
          return (
            <FlowLine 
              key={`hub-${i}`} 
              from={EARTH} 
              to={{ x: node.x, y: node.y }} 
              progress={progress} 
              dotProgress={dotTravel}
            />
          );
        })}

        {/* Phase 2: Web Lines (Node -> Node) */}
        {WEB_PAIRS.map((pair, i) => {
          const start = 65 + i * 3.5;
          const progress = interpolate(frame, [start, start + 3.5], [0, 1], { 
            extrapolateLeft: 'clamp', 
            extrapolateRight: 'clamp' 
          });
          return (
            <FlowLine 
              key={`web-${i}`} 
              from={{ x: NODES[pair[0]].x, y: NODES[pair[0]].y }} 
              to={{ x: NODES[pair[1]].x, y: NODES[pair[1]].y }} 
              progress={progress} 
              dotProgress={dotTravel}
              color="#d7ccc8" // Lighter thread for the web
            />
          );
        })}

        {/* Earth Center Instance */}
        <CutoutNode 
          cx={EARTH.x} 
          cy={EARTH.y} 
          r={10} 
          color={COLORS.PAPER_TAN} 
          label="EARTH" 
          delay={0}
        />

        {/* System Nodes */}
        {NODES.map((node, i) => (
          <CutoutNode 
            key={`node-${i}`} 
            cx={node.x} 
            cy={node.y} 
            r={5} 
            color={node.color} 
            label={node.name} 
            delay={5 + i * 3}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
};
