import React from 'react';
import { AbsoluteFill, useCurrentFrame, Sequence, spring, useVideoConfig, interpolate } from 'remotion';
import { AnatomicalBody } from '../components/vector/AnatomicalBody';
import { COLORS } from '../constants/paths';

export const Scene2BodyScan: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labels = [
    { text: "BRAIN", frame: 30, x: 200, y: 150 },
    { text: "LUNGS", frame: 60, x: 200, y: 350 },
    { text: "HEART", frame: 90, x: 700, y: 380 },
    { text: "KIDNEY", frame: 120, x: 700, y: 600 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.NAVY }}>
      <AnatomicalBody stressedIndices={[]} zoom={1.2} />
      
      {/* Staggered Labels */}
      {labels.map((label, i) => (
        <Sequence key={i} from={label.frame}>
          <div style={{
            position: 'absolute',
            top: label.y,
            left: label.x,
            color: 'white',
            fontFamily: 'monospace',
            opacity: interpolate(frame, [label.frame, label.frame + 20], [0, 1]),
            transform: `translateX(${interpolate(frame, [label.frame, label.frame + 20], [20, 0])}px)`,
          }}>
            <div style={{ fontSize: 24, letterSpacing: 2 }}>{label.text}</div>
            <div style={{ width: 100, height: 1, background: 'rgba(255,255,255,0.4)', marginTop: 5 }} />
          </div>
        </Sequence>
      ))}

      {/* Blood Flow Dots Animation (Simple version for Scene 2) */}
      <Sequence from={150}>
         {[0, 1, 2, 3, 4].map((i) => {
           const dotPos = interpolate((frame - 150 + i * 20) % 100, [0, 100], [0, 1]);
           return (
             <div key={i} style={{
               position: 'absolute',
               top: '40%',
               left: '50%',
               width: 6,
               height: 6,
               background: '#f00',
               borderRadius: '50%',
               transform: `translate(${Math.sin(dotPos * 6.28) * 100}px, ${Math.cos(dotPos * 6.28) * 150}px)`,
               opacity: 0.8,
             }} />
           );
         })}
      </Sequence>
    </AbsoluteFill>
  );
};
