import React from 'react';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { ArrivalScene } from '../scenes/ArrivalScene';
import { ObservationScene } from '../scenes/ObservationScene';
import { ChainReactionScene } from '../scenes/ChainReactionScene';
import { PivotScene } from '../scenes/PivotScene';
import { EarthRevealScene } from '../scenes/EarthRevealScene';
import { GlobalParallelScene } from '../scenes/GlobalParallelScene';
import { ClosingScene } from '../scenes/ClosingScene';

export const TheWholeBody: React.FC = () => {
  return (
    <div className="cinematic-container">
      {/* Letterbox Overlays */}
      <div className="cinematic-letterbox" />
      <div className="cinematic-letterbox cinematic-letterbox-bottom" />

      <TransitionSeries>
        {/* SCENE 1 — THE ARRIVAL (10s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <ArrivalScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* SCENE 2 — THE DOCTOR OBSERVES (18s) */}
        <TransitionSeries.Sequence durationInFrames={540}>
          <ObservationScene />
        </TransitionSeries.Sequence>

        {/* SCENE 3 — THE CHAIN REACTION (25s) */}
        <TransitionSeries.Sequence durationInFrames={750}>
          <ChainReactionScene />
        </TransitionSeries.Sequence>

        {/* SCENE 4 — THE PIVOT (7s) */}
        <TransitionSeries.Sequence durationInFrames={210}>
          <PivotScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 60 })}
        />

        {/* SCENE 5 — THE REVEAL (EARTH ENTERS) (12s) */}
        <TransitionSeries.Sequence durationInFrames={360}>
          <EarthRevealScene />
        </TransitionSeries.Sequence>

        {/* SCENE 6 — THE PARALLEL (25s) */}
        <TransitionSeries.Sequence durationInFrames={750}>
          <GlobalParallelScene />
        </TransitionSeries.Sequence>

        {/* SCENE 7 — THE CLOSING FRAME (10s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <ClosingScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </div>
  );
};
