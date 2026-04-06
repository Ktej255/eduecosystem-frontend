import { interpolate, spring } from 'remotion';

export const NodeEmergence = (frame: number, fps: number, delay: number = 0) => {
  const delayedFrame = Math.max(0, frame - delay);
  const scale = spring({
    fps,
    frame: delayedFrame,
    config: {
      damping: 12,
      stiffness: 150,
      mass: 0.5,
    },
  });
  const opacity = interpolate(delayedFrame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return { scale, opacity };
};

export const ConnectionDrawing = (frame: number, duration: number, delay: number = 0) => {
  const delayedFrame = Math.max(0, frame - delay);
  const progress = interpolate(delayedFrame, [0, duration], [0, 1], {
    extrapolateRight: 'clamp',
  });
  return progress;
};

export const ConceptHighlight = (frame: number, duration: number, delay: number = 0) => {
  const delayedFrame = Math.max(0, frame - delay);
  // Pulse effect: goes 0 -> 1 -> 0
  const pulse = interpolate(delayedFrame, [0, duration / 2, duration], [0, 1, 0], {
    extrapolateRight: 'clamp',
  });
  return pulse;
};
