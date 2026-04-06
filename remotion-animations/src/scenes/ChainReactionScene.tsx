import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, Sequence, spring } from 'remotion';

const GridItem: React.FC<{ label: string, status: string, color: string, children: React.ReactNode }> = ({ label, status, color, children }) => {
  const frame = useCurrentFrame();
  const scale = spring({ frame, fps: 30, from: 1.0, to: 1.08, config: { damping: 200 } });
  
  return (
    <div style={{
      flex: 1, 
      border: '1px solid rgba(255,255,255,0.1)', 
      background: '#000', 
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ transform: `scale(${scale})`, height: '100%', width: '100%' }}>
        {children}
      </div>
      <div style={{ position: 'absolute', top: 20, left: 20, color: 'white', fontFamily: 'monospace' }}>
        <div style={{ opacity: 0.6, fontSize: 16 }}>{label}</div>
        <div style={{ color, fontSize: 24, fontWeight: 'bold' }}>{status}</div>
      </div>
    </div>
  );
};

export const ChainReactionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="grade-hospital" style={{ backgroundColor: '#000', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
      
      {/* 1. KIDNEYS (0-750 frames) */}
      <Sequence from={0} durationInFrames={750}>
        <GridItem label="RENAL SYSTEM" status="FAILURE" color="#f88">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <path 
              d="M 50 20 Q 80 20 80 50 Q 80 80 50 80 Q 20 80 20 50 Q 20 20 50 20" 
              fill="#311" 
              opacity={interpolate(frame, [0, 100], [0, 0.4])}
              stroke="#f88" 
              strokeWidth="2" 
            />
            {/* Fluid spreading */}
            <circle cx="50" cy="50" r={interpolate(frame, [0, 300], [0, 40])} fill="#511" opacity={0.3} />
          </svg>
        </GridItem>
      </Sequence>

      {/* 2. LUNGS (150-750 frames) */}
      <Sequence from={150} durationInFrames={600}>
        <GridItem label="PULMONARY" status="EFFUSION" color="#8cf">
           <svg width="100%" height="100%" viewBox="0 0 100 100">
            <path d="M 30 20 Q 10 50 30 80 M 70 20 Q 90 50 70 80" stroke="#8cf" strokeWidth="2" fill="none" />
            <rect y={interpolate(frame, [150, 400], [100, 60])} width="100" height="40" fill="#246" opacity="0.3" />
          </svg>
        </GridItem>
      </Sequence>

      {/* 3. BLOOD PRESSURE (300-750 frames) */}
      <Sequence from={300} durationInFrames={450}>
        <GridItem label="HYPERTENSION" status="CRITICAL" color="#f44">
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div style={{ fontSize: 100, color: '#f44', fontWeight: 'bold' }}>
                {Math.floor(interpolate(frame, [300, 600], [140, 210]))}
              </div>
           </div>
        </GridItem>
      </Sequence>

      {/* 4. BRAIN/FOG (450-750 frames) */}
      <Sequence from={450} durationInFrames={300}>
        <GridItem label="NEUROLOGICAL" status="FOG" color="#ccc">
           <div style={{ backgroundColor: '#ccc', width: '100%', height: '100%', opacity: interpolate(frame, [450, 750], [0, 0.3]), filter: 'blur(40px)' }} />
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div style={{ fontSize: 40, color: 'white', opacity: interpolate(frame, [450, 550], [0, 1]) }}>???</div>
           </div>
        </GridItem>
      </Sequence>

    </AbsoluteFill>
  );
};
