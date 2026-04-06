import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { PATHS, COLORS } from '../constants/paths';
import { CutoutNode } from '../components/vector/CutoutNode';
import { CutoutOrgan } from '../components/vector/CutoutOrgan';
import { FlowLine } from '../components/effects/FlowLine';

export const PaperCutoutSplitScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 🎨 Palette
  const bg = COLORS.PAPER_CREAM;
  
  // ⏱️ Animation Timeline
  // 0-30: Entrance
  // 30-60: Draw lines
  // 60-150: Pulsing dots (Hold for 3s)
  
  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const lineProgress = interpolate(frame, [30, 60], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  
  // Dots pulse continuously from 60 onwards. One pulse takes 30 frames.
  const dotTravel = frame >= 60 ? interpolate((frame - 60) % 45, [0, 45], [0, 1]) : 0;
  // Fade out dots slightly during drawing phase or keep dotTravel 0
  const showDots = frame >= 60;

  // --- LEFT SIDE: BODY (0 to 100 viewBox space) ---
  const HEART_POS = { x: 50, y: 40 };
  const BRAIN_POS = { x: 50, y: 12 };
  const LUNG_L_POS = { x: 40, y: 38 };
  const LUNG_R_POS = { x: 60, y: 38 };
  const LIVER_POS = { x: 57, y: 48 };
  const KIDNEY_L_POS = { x: 40, y: 56 };
  const KIDNEY_R_POS = { x: 60, y: 56 };

  const BODY_CONNECTIONS = [
    { from: HEART_POS, to: BRAIN_POS },
    { from: HEART_POS, to: LUNG_L_POS },
    { from: HEART_POS, to: LUNG_R_POS },
    { from: HEART_POS, to: LIVER_POS },
    { from: HEART_POS, to: KIDNEY_L_POS },
    { from: HEART_POS, to: KIDNEY_R_POS },
  ];

  // --- RIGHT SIDE: EARTH (100 to 200 viewBox space) ---
  const EARTH = { x: 150, y: 50 };
  const EARTH_NODES = [
    { name: 'Atmosphere', x: 150, y: 15, color: COLORS.WHITE },
    { name: 'Forest', x: 183.2, y: 39.2, color: COLORS.TEAL },
    { name: 'Ocean', x: 170.5, y: 78.3, color: COLORS.BLUE },
    { name: 'Glacier', x: 129.5, y: 78.3, color: COLORS.FOG },
    { name: 'Life', x: 116.8, y: 39.2, color: COLORS.PINK },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: bg }}>
      <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }}>
        
        {/* === LEFT TRANSLATE GROUP === */}
        <g>
          {/* Body Silhouette */}
          <path
            d={PATHS.HUMAN_BODY}
            fill={COLORS.PAPER_TAN}
            style={{
              transformOrigin: '50px 50px',
              transform: `scale(${entrance})`,
              filter: 'drop-shadow(4px 4px 10px rgba(0,0,0,0.1))',
            }}
          />

          {/* Body Connections */}
          {BODY_CONNECTIONS.map((c, i) => (
            <FlowLine 
              key={`body-conn-${i}`}
              from={c.from}
              to={c.to}
              progress={lineProgress}
              dotProgress={showDots ? dotTravel : 0}
            />
          ))}

          {/* Organs */}
          <CutoutOrgan path={PATHS.HEART} color={COLORS.RED} delay={10} />
          <CutoutOrgan path={PATHS.BRAIN} color={COLORS.WHITE} delay={10} />
          <CutoutOrgan path={PATHS.LUNG_L} color={COLORS.TEAL} delay={10} />
          <CutoutOrgan path={PATHS.LUNG_R} color={COLORS.TEAL} delay={10} />
          <CutoutOrgan path={PATHS.LIVER} color={COLORS.PAPER_BROWN} delay={10} />
          <CutoutOrgan path={PATHS.KIDNEY_L} color={COLORS.PINK} delay={10} />
          <CutoutOrgan path={PATHS.KIDNEY_R} color={COLORS.PINK} delay={10} />
        </g>

        {/* === RIGHT TRANSLATE GROUP === */}
        <g>
          {/* Earth Connections */}
          {EARTH_NODES.map((node, i) => (
            <FlowLine 
              key={`earth-conn-${i}`}
              from={EARTH}
              to={{ x: node.x, y: node.y }}
              progress={lineProgress}
              dotProgress={showDots ? dotTravel : 0}
            />
          ))}

          {/* Web Mesh for Earth (Fade in slightly later) */}
          {(() => {
             const WEB_PAIRS: [number, number][] = [
               [0, 1], [0, 2], [0, 3], [0, 4],
               [1, 2], [1, 3], [1, 4],
               [2, 3], [2, 4], [3, 4]
             ];
             return WEB_PAIRS.map((pair, i) => (
               <FlowLine 
                 key={`earth-web-${i}`}
                 from={{ x: EARTH_NODES[pair[0]].x, y: EARTH_NODES[pair[0]].y }}
                 to={{ x: EARTH_NODES[pair[1]].x, y: EARTH_NODES[pair[1]].y }}
                 progress={interpolate(frame, [45, 75], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })}
                 dotProgress={showDots ? dotTravel : 0}
                 color="#d7ccc8"
               />
             ));
          })()}

          {/* Earth Nodes */}
          <CutoutNode 
            cx={EARTH.x} cy={EARTH.y} r={10} 
            color={COLORS.PAPER_TAN} label="EARTH" delay={10} 
          />
          {EARTH_NODES.map((node, i) => (
            <CutoutNode 
              key={`earth-node-${i}`}
              cx={node.x} cy={node.y} r={5} 
              color={node.color} label={node.name} delay={10} 
            />
          ))}
        </g>

        {/* === CENTER DIVIDER === */}
        <line 
          x1="100" y1="10" x2="100" y2="90" 
          stroke={COLORS.PAPER_GRAY} 
          strokeWidth="0.5"
          style={{
            opacity: interpolate(frame, [20, 40], [0, 0.4]),
            strokeDasharray: "2 2"
          }}
        />

      </svg>
    </AbsoluteFill>
  );
};
