import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill, Img, staticFile, Sequence } from 'remotion';

export const ClosingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      
      {/* 1. DOCTOR'S HAND ON PATIENT'S HAND (0-150 frames) */}
      <Sequence from={0} durationInFrames={150}>
        <div className="grade-hospital" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}>
            <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="M 20 80 Q 50 20 80 80" stroke="white" strokeWidth="2" fill="none" opacity={0.3} />
                <path d="M 30 80 Q 50 40 70 80" stroke="white" strokeWidth="2" fill="none" opacity={0.5} />
            </svg>
            <div style={{ position: 'absolute', color: 'white', opacity: 0.1, fontSize: 10 }}>CARE / RESPONSIBILITY</div>
        </div>
      </Sequence>

      {/* 2. MATCH CUT TO AERIAL FOREST (150-300 frames) */}
      <Sequence from={150} durationInFrames={150}>
        <Img 
          src={staticFile('assets/cinematic/pristine_forest_aerial_png_1775144985246.png')}
          className="grade-earth"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${interpolate(frame, [150, 300], [1.1, 1.0])})`,
            opacity: interpolate(frame, [150, 180], [0, 1]),
          }}
        />
        {/* FINAL TITLE OVERLAY */}
        <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <div className="serif-title title-white" style={{ fontSize: 80, textAlign: 'center' }}>
                THE WHOLE BODY
                <div className="subtitle-minimal" style={{ fontSize: 32, marginTop: 20 }}>Planet Earth is the Patient.</div>
            </div>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
