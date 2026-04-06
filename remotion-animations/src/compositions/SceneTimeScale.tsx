import React from 'react';
import { AbsoluteFill } from 'remotion';
import { TimelineAxis } from '../components/TimelineAxis';
import { theme } from '../styles/theme';

export const SceneTimeScale: React.FC = () => {

  const timelineEvents = [
    { label: 'Deforestation', percentPosition: 20 },
    { label: 'Oil Spill', percentPosition: 40 },
    { label: 'Climate Change', percentPosition: 70 },
    { label: 'Species Extinction', percentPosition: 90 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <div style={{ position: 'absolute', top: 100, left: 100, color: theme.colors.text, fontSize: 60, fontFamily: theme.typography.fontFamily, fontWeight: 'bold' }}>
        Time Scale
      </div>
      
      <TimelineAxis events={timelineEvents} delay={15} />

    </AbsoluteFill>
  );
};
