import { useCurrentFrame, useVideoConfig, AbsoluteFill, interpolate } from 'remotion';

export const MyAnimation = () => {
  const frame = useCurrentFrame();
  useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const translateY = interpolate(frame, [0, 30], [50, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a0a', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold'
      }}>
        Anti Gravity ✨
      </div>
    </AbsoluteFill>
  );
};
