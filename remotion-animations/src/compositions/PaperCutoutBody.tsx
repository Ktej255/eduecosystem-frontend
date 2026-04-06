import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { PATHS, COLORS } from '../constants/paths';
import { CutoutOrgan } from '../components/vector/CutoutOrgan';
import { FlowLine } from '../components/effects/FlowLine';

export const PaperCutoutBody: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 🎨 Palette
  const bg = COLORS.PAPER_CREAM;
  const bodyColor = COLORS.PAPER_TAN;
  
  // 📍 Organ Positions (Hub-and-Spoke Focal Point: Heart at 50, 40)
  const HEART_POS = { x: 50, y: 40 };
  const BRAIN_POS = { x: 50, y: 12 };
  const LUNG_L_POS = { x: 40, y: 38 };
  const LUNG_R_POS = { x: 60, y: 38 };
  const LIVER_POS = { x: 57, y: 48 };
  const KIDNEY_L_POS = { x: 40, y: 56 };
  const KIDNEY_R_POS = { x: 60, y: 56 };

  // ⏱️ Timeline Animations
  // Kidney shift to Gray (110-130)
  const kidneyColor = interpolate(frame, [110, 130], [8, 0]); // Index or logic? Let's use simple logic
  const currentKidneyColor = frame > 120 ? COLORS.PAPER_GRAY : COLORS.PINK;
  
  // Lung shift to Blue (130-145)
  const currentLungColor = frame > 135 ? COLORS.PAPER_BLUE : COLORS.TEAL;
  
  // Brain shift to Gray (145-150)
  const currentBrainColor = frame > 146 ? COLORS.PAPER_GRAY : COLORS.WHITE;

  // Heart Scale pulse (Stress phase 130+)
  const heartScale = frame > 130 
    ? interpolate(frame % 15, [0, 7, 15], [1, 1.2, 1]) 
    : 1;

  // 📍 5 Organ Node Points for Connections
  const ORGAN_NODES = [
    HEART_POS,      // 0
    BRAIN_POS,      // 1
    LUNG_L_POS,     // 2 (Using left lung as connection point)
    LIVER_POS,      // 3
    KIDNEY_L_POS,   // 4 (Using left kidney as connection point)
  ];

  const BODY_PAIRS: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 2], [1, 3], [1, 4],
    [2, 3], [2, 4],
    [3, 4]
  ];

  // Body Pop-in
  const bodyEntrance = spring({ frame, fps, config: { damping: 10 } });

  return (
    <AbsoluteFill style={{ backgroundColor: bg }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
        {/* Human Silhouette */}
        <path
          d={PATHS.HUMAN_BODY}
          fill={bodyColor}
          style={{
            transformOrigin: 'center',
            transform: `scale(${bodyEntrance})`,
            filter: 'drop-shadow(4px 4px 10px rgba(0,0,0,0.1))',
          }}
        />

        {/* Connection Lines (10 Pairs Drawn Sequentially) */}
        {BODY_PAIRS.map((pair, i) => {
          // Lines draw 1 by 1 between frames 30 and 80 (5 frames each)
          const drawStart = 30 + i * 5;
          const lineProgress = interpolate(frame, [drawStart, drawStart + 5], [0, 1], { 
            extrapolateLeft: 'clamp', 
            extrapolateRight: 'clamp' 
          });

          // Dot travels 1 by 1 between frames 80 and 110 (3 frames each)
          const dotStart = 80 + i * 3;
          let dotProgress = interpolate(frame, [dotStart, dotStart + 3], [0, 1], { 
            extrapolateLeft: 'clamp', 
            extrapolateRight: 'clamp' 
          });

          // Hide dot before and after its specific sequential travel window
          if (frame < dotStart || frame > dotStart + 3) {
             dotProgress = 0; 
          }

          // Kidney pulse amber (Kidney is node 4). Any line connected to node 4 pulses after frame 115.
          const isKidneyLine = pair[0] === 4 || pair[1] === 4;
          const pulse = isKidneyLine && frame > 115;

          return (
            <FlowLine 
              key={`body-pair-${i}`}
              from={ORGAN_NODES[pair[0]]} 
              to={ORGAN_NODES[pair[1]]} 
              progress={lineProgress} 
              dotProgress={dotProgress} 
              pulse={pulse} 
            />
          );
        })}

        {/* Organs */}
        {/* Heart */}
        <CutoutOrgan path={PATHS.HEART} color={COLORS.RED} delay={5} scale={heartScale} />
        
        {/* Brain */}
        <CutoutOrgan path={PATHS.BRAIN} color={currentBrainColor} delay={10} />
        
        {/* Lungs */}
        <CutoutOrgan path={PATHS.LUNG_L} color={currentLungColor} delay={15} />
        <CutoutOrgan path={PATHS.LUNG_R} color={currentLungColor} delay={15} />
        
        {/* Liver */}
        <CutoutOrgan path={PATHS.LIVER} color={COLORS.PAPER_BROWN} delay={20} />
        
        {/* Kidneys */}
        <CutoutOrgan path={PATHS.KIDNEY_L} color={currentKidneyColor} delay={25} />
        <CutoutOrgan path={PATHS.KIDNEY_R} color={currentKidneyColor} delay={25} />
      </svg>
    </AbsoluteFill>
  );
};
