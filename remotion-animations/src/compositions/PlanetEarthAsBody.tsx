import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig, useCurrentFrame, interpolate } from 'remotion';
import { NarrationEngine } from '../components/effects/NarrationEngine';
import { Scene1Arrival } from '../scenes_v2/Scene1Arrival';
import { Scene2BodyScan } from '../scenes_v2/Scene2BodyScan';
import { Scene3KidneyFailure } from '../scenes_v2/Scene3KidneyFailure';
import { Scene4Microscopic } from '../scenes_v2/Scene4Microscopic';
import { Scene5Morph } from '../scenes_v2/Scene5Morph';
import { Scene6EarthFailure } from '../scenes_v2/Scene6EarthFailure';
import { Scene7ForestLungs } from '../scenes_v2/Scene7ForestLungs';
import { Scene8HeartbeatEarth } from '../scenes_v2/Scene8HeartbeatEarth';
import { Scene9FadeToBlack } from '../scenes_v2/Scene9FadeToBlack';

export const PlanetEarthAsBody: React.FC = () => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* Cinematic Letterboxing */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, background: 'black', zIndex: 100 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'black', zIndex: 100 }} />

      {/* Main Narrative Scenes */}
      <Sequence from={0} durationInFrames={210}>
        <Scene1Arrival />
      </Sequence>

      <Sequence from={210} durationInFrames={330}>
        <Scene2BodyScan />
      </Sequence>

      <Sequence from={540} durationInFrames={360}>
        <Scene3KidneyFailure />
      </Sequence>

      <Sequence from={900} durationInFrames={300}>
        <Scene4Microscopic />
      </Sequence>

      <Sequence from={1200} durationInFrames={480}>
        <Scene5Morph />
      </Sequence>

      <Sequence from={1680} durationInFrames={720}>
        <Scene6EarthFailure />
      </Sequence>

      <Sequence from={2400} durationInFrames={450}>
        <Scene7ForestLungs />
      </Sequence>

      <Sequence from={2850} durationInFrames={450}>
        <Scene8HeartbeatEarth />
      </Sequence>

      <Sequence from={3300} durationInFrames={3000}> {/* Extended for full duration */}
        <Scene9FadeToBlack />
      </Sequence>

      {/* Global Narration Overlays */}
      <NarrationEngine 
        scene="planetEarthAsBody"
        currentFrame={frame}
      />

      {/* Grain / Film Scratch Overlay (Optional) */}
      <AbsoluteFill style={{
        opacity: 0.05,
        pointerEvents: 'none',
        background: `url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')`,
        mixBlendMode: 'overlay',
      }} />
    </AbsoluteFill>
  );
};
