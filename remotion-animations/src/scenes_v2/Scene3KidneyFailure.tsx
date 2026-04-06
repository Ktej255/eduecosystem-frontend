import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { AnatomicalBody } from '../components/vector/AnatomicalBody';
import { COLORS } from '../constants/paths';

export const Scene3KidneyFailure: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Stressed indices update based on frame
  const stressed = [];
  if (frame > 30) stressed.push('kidney');
  if (frame > 120) stressed.push('heart');
  if (frame > 210) stressed.push('lungs');
  if (frame > 300) stressed.push('brain');

  const flashRed = interpolate(frame % 30, [0, 15, 30], [0, 0.4, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.NAVY }}>
      <AnatomicalBody stressedIndices={stressed} zoom={1.3} />
      
      {/* Critical Red Flash Overlay */}
      {stressed.includes('kidney') && (
        <AbsoluteFill style={{
          background: `radial-gradient(circle, rgba(255,0,0,${flashRed}), transparent 80%)`,
          pointerEvents: 'none',
        }} />
      )}

      {/* Stress Propagation Lines */}
      {stressed.includes('heart') && (
        <svg width="100%" height="100%" viewBox="0 0 100 100">
           {/* Line from Kidney to Heart */}
           <path 
             d="M 42 55 L 50 40 M 58 55 L 50 40" 
             stroke="#f00" 
             strokeWidth="0.5" 
             strokeDasharray="4,2"
             opacity={interpolate(frame, [120, 150], [0, 0.8])}
           />
        </svg>
      )}

      {/* Warning Indicators */}
      {stressed.includes('heart') && (
        <div style={{ position: 'absolute', top: 380, right: 600, color: '#f44', fontSize: 32, fontWeight: 'bold' }}>⚡</div>
      )}
      {stressed.includes('lungs') && (
        <div style={{ position: 'absolute', top: 350, left: 600, color: '#8cf', fontSize: 32, fontWeight: 'bold' }}>💧</div>
      )}
    </AbsoluteFill>
  );
};
