import React from 'react';
import { TransitionSeries, linearTiming, springTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { IntroScene } from '../scenes/IntroScene';
import { GeosphereScene } from '../scenes/GeosphereScene';
import { BiosphereScene } from '../scenes/BiosphereScene';

export const EarthLivingSystem: React.FC = () => {
    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={100}>
                <IntroScene />
            </TransitionSeries.Sequence>
            
            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: 30 })}
            />
            
            <TransitionSeries.Sequence durationInFrames={100}>
                <GeosphereScene />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={slide()}
                timing={springTiming({ config: { damping: 10 } })}
            />

            <TransitionSeries.Sequence durationInFrames={100}>
                <BiosphereScene />
            </TransitionSeries.Sequence>
        </TransitionSeries>
    );
};
