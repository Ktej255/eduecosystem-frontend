import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

const SCRIPT: Record<string, string[]> = {
  planetEarthAsBody: [
    "One system. One crisis.",
    "The human body is an ecosystem of organs.",
    "Mirrored in the systems of our planet.",
    "When one organ fails, the whole body suffers.",
    "When one system collapses, the Earth trembles.",
    "The system is one. Save the body. Save the world."
  ]
};

export const NarrationEngine: React.FC<{ 
  scene: string, 
  currentFrame: number 
}> = ({ scene, currentFrame }) => {
  const script = SCRIPT[scene] || [];
  
  // Calculate which line to show based on duration (assuming ~600 frames per line roughly)
  // For a more precise script, we would use frame ranges.
  // Standardizing on 600 frames per line for the 3.5m narrative.
  const lineIndex = Math.min(Math.floor(currentFrame / 600), script.length - 1);
  const text = script[lineIndex] || "";
  
  const frameInLine = currentFrame % 600;
  const opacity = interpolate(frameInLine, [0, 50, 500, 600], [0, 1, 1, 0]);

  return (
    <div style={{
      position: 'absolute',
      bottom: 120,
      width: '100%',
      textAlign: 'center',
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      fontFamily: 'monospace',
      letterSpacing: 4,
      textShadow: '0 0 20px rgba(0,0,0,0.8)',
      opacity
    }}>
      {text.toUpperCase()}
    </div>
  );
};
