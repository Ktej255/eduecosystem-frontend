import React from 'react';
import { Series } from 'remotion';
import { SceneSystemThinking } from './SceneSystemThinking';
import { SceneFeedback } from './SceneFeedback';
import { SceneCauseChain } from './SceneCauseChain';
import { SceneTimeScale } from './SceneTimeScale';
import { SceneFramework } from './SceneFramework';
import { SceneRoadmap } from './SceneRoadmap';

export const Module0Composition: React.FC = () => {
  return (
    <Series className="series-wrapper">
      <Series.Sequence durationInFrames={200}>
        <SceneSystemThinking />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={150}>
        <SceneFeedback />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={150}>
        <SceneCauseChain />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={150}>
        <SceneTimeScale />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={150}>
        <SceneFramework />
      </Series.Sequence>
      
      <Series.Sequence durationInFrames={200}>
        <SceneRoadmap />
      </Series.Sequence>
    </Series>
  );
};
