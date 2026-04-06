import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { theme } from '../styles/theme';

interface EventProps {
  label: string;
  percentPosition: number; // 0 to 100
}

interface TimelineAxisProps {
  delay?: number;
  events: EventProps[];
}

export const TimelineAxis: React.FC<TimelineAxisProps> = ({ delay = 0, events }) => {
  const frame = useCurrentFrame();
  const delayedFrame = Math.max(0, frame - delay);
  
  // Timeline expands over 60 frames
  const expansion = interpolate(delayedFrame, [0, 60], [0, 100], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ position: 'relative', width: '1200px', height: '100px', margin: '0 auto', top: 500 }}>
      {/* Main Axis Line */}
      <div
        style={{
          position: 'absolute',
          top: '50px',
          left: 0,
          height: '4px',
          backgroundColor: theme.colors.accentBlue,
          width: `${expansion}%`,
        }}
      />
      {/* Events */}
      {events.map((event, index) => {
        const isVisible = expansion >= event.percentPosition;
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${event.percentPosition}%`,
              top: '20px',
              opacity: isVisible ? 1 : 0,
              transform: `translateX(-50%)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{
              color: theme.colors.text, 
              fontFamily: theme.typography.fontFamily, 
              fontSize: 24, 
              whiteSpace: 'nowrap',
              marginBottom: 8
            }}>
              {event.label}
            </div>
            <div style={{
              width: 20, 
              height: 20, 
              borderRadius: '50%', 
              backgroundColor: theme.colors.accentGreen 
            }} />
          </div>
        );
      })}
    </div>
  );
};
