import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, Img, staticFile, Sequence } from 'remotion';

const ECGLine: React.FC<{ color: string }> = ({ color }) => {
  const frame = useCurrentFrame();
  const path = "M 0 50 L 20 50 L 25 30 L 30 70 L 35 50 L 55 50 L 60 10 L 65 90 L 70 50 L 100 50";
  const progress = interpolate(frame % 30, [0, 29], [0, 100]);
  
  return (
    <svg width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path 
        d={path} 
        fill="none" 
        stroke={color} 
        strokeWidth="1" 
        strokeDasharray="100"
        strokeDashoffset={100 - progress}
      />
    </svg>
  );
};

export const ObservationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="grade-hospital" style={{ backgroundColor: '#000' }}>
      {/* Sequence of Clinical Checks */}
      
      {/* 1. DOCTOR'S EYES SCANNING (0-150 frames) */}
      <Sequence from={0} durationInFrames={150}>
        <Img 
          src={staticFile('assets/cinematic/doctor_scanner_eyes_png_1775144931934.png')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${interpolate(frame, [0, 150], [1.1, 1.0])})`,
          }}
        />
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '60%',
          height: '2px',
          background: 'cyan',
          filter: 'blur(10px)',
          opacity: 0.1,
          transform: `translateY(${Math.sin(frame * 0.1) * 50}px)`,
        }} />
      </Sequence>

      {/* 2. BLOOD PRESSURE CUFF / GAUGE (150-300 frames) */}
      <Sequence from={150} durationInFrames={150}>
        <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            width: 300,
            height: 300,
            border: '4px solid #333',
            borderRadius: '50%',
            position: 'relative',
            background: 'linear-gradient(135deg, #222, #000)',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '80%',
              height: '4px',
              background: '#f44',
              transformOrigin: '0% 50%',
              transform: `rotate(${interpolate(frame, [150, 300], [0, 220])}deg)`,
            }} />
          </div>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: 20, color: 'white', fontSize: 40, fontFamily: 'monospace' }}>
            PRESSURE: {Math.floor(interpolate(frame, [150, 300], [110, 165]))} mmHg
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 3. ECG MONITOR (300-540 frames) */}
      <Sequence from={300} durationInFrames={240}>
        <AbsoluteFill style={{ padding: 100, display: 'flex', flexDirection: 'column', gap: 50 }}>
          <div style={{ color: '#0f0', fontSize: 32, fontFamily: 'monospace', textShadow: '0 0 10px #0f0' }}>ECG MONITOR - LEAD II</div>
          <ECGLine color="#0f0" />
          <div style={{ color: '#0f0', fontSize: 80, fontFamily: 'monospace' }}>
            HR: {Math.floor(interpolate(frame, [300, 540], [72, 105]))} BPM
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
