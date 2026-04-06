import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, Sequence, Img, staticFile } from 'remotion';

const ParallelItem: React.FC<{ left: React.ReactNode, right: React.ReactNode, from: number, duration: number }> = ({ left, right, from, duration }) => {
  return (
    <Sequence from={from} durationInFrames={duration}>
        <AbsoluteFill style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1, borderRight: '1px solid rgba(255,255,255,0.2)', position: 'relative' }}>
                <AbsoluteFill className="grade-hospital">{left}</AbsoluteFill>
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
                <AbsoluteFill className="grade-earth">{right}</AbsoluteFill>
            </div>
        </AbsoluteFill>
    </Sequence>
  );
};

export const GlobalParallelScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      
      {/* 1. BLOOD PRESSURE vs OCEAN CURRENTS (0-150 frames) */}
      <ParallelItem 
        from={0} duration={150}
        left={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 80, color: '#f44' }}>180/110</div>}
        right={
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <path d="M 0 50 Q 50 10 100 50" stroke="cyan" strokeWidth="2" fill="none" opacity={0.3} />
                <path d="M 0 70 Q 50 30 100 70" stroke="cyan" strokeWidth="2" fill="none" opacity={0.2} />
                <path d="M 0 30 Q 50 -10 100 30" stroke="cyan" strokeWidth="2" fill="none" opacity={0.2} />
            </svg>
        }
      />

      {/* 2. LUNGS vs GLACIER MELT (150-300 frames) */}
      <ParallelItem 
        from={150} duration={150}
        left={<div style={{ backgroundColor: '#246', width: '100%', height: '40%', position: 'absolute', bottom: 0, opacity: 0.5 }} />}
        right={<div style={{ backgroundColor: '#fff', width: '100%', height: '40%', position: 'absolute', bottom: 0, opacity: 0.8, filter: 'blur(20px)' }} />}
      />

      {/* 3. GLASSY EYES vs DRIED EARTH (300-750 frames) */}
      <ParallelItem 
        from={300} duration={450}
        left={
            <Img 
                src={staticFile('assets/cinematic/doctor_scanner_eyes_png_1775144931934.png')} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        }
        right={
            <Img 
                src={staticFile('assets/cinematic/dried_cracked_earth_png_1775145009063.png')} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${interpolate(frame, [300, 750], [1.1, 1.25])})` }}
            />
        }
      />

    </AbsoluteFill>
  );
};
