import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Sequence } from 'remotion';
import { EarthVector } from '../components/vector/EarthVector';
import { HeartbeatLine } from '../components/effects/HeartbeatLine';
import { COLORS } from '../constants/paths';

export const Scene8HeartbeatEarth: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Rapid heartbeat scale
  const heartbeat = Math.sin(frame / 3) * 0.05 + 1;
  const health = interpolate(frame, [0, 450], [1, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.NAVY }}>
      {/* Zoomed Earth Heart */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${1 + (1 - health) * 0.2 + heartbeat})`,
        width: 800,
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <EarthVector stressedIndices={['water', 'land', 'forest', 'atmosphere']} rotation={frame} />
      </div>

      {/* Heartbeat Lines (ECG) */}
      <AbsoluteFill style={{ top: '60%' }}>
        <HeartbeatLine color="#e74c3c" thickness={4} />
      </AbsoluteFill>
      <AbsoluteFill style={{ bottom: '20%' }}>
         <div style={{
           height: 200,
           width: '100%',
           overflow: 'hidden',
           position: 'relative'
         }}>
           <div style={{
             height: 2,
             width: '100%',
             background: 'rgba(255,0,0,0.2)',
             position: 'absolute',
             top: 100
           }} />
           <HeartbeatLine color="#e74c3c" thickness={2} />
         </div>
      </AbsoluteFill>

      {/* Digital Warning UI */}
      <div style={{
        position: 'absolute',
        top: 100,
        left: 100,
        color: '#f1c40f',
        fontFamily: 'monospace',
        fontSize: 24,
        background: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderLeft: '4px solid #f1c40f',
      }}>
        [ MONITORING PLANETARY VITAL SIGNS ]<br />
        HEART_RATE: {interpolate(frame, [0, 450], [72, 160], { extrapolateRight: 'clamp' }).toFixed(0)} BPM<br />
        STABILITY: {(health * 100).toFixed(1)}%<br />
        <span style={{ color: frame % 10 > 5 ? '#e74c3c' : 'transparent' }}>!!! ARRHYTHMIA DETECTED !!!</span>
      </div>
    </AbsoluteFill>
  );
};
