import { Composition } from 'remotion';
import { MyAnimation } from './animations/MyAnimation';
import { Module0Composition } from './compositions/Module0';
import { EarthLivingSystem } from './components/EarthLivingSystem';
import { TheWholeBody } from './compositions/TheWholeBody';
import { PlanetEarthAsBody } from './compositions/PlanetEarthAsBody';
import { FadeToBlack } from './compositions/FadeToBlack';
import { VideoTextOverlay } from './compositions/VideoTextOverlay';
import { PaperCutoutSplitScreen } from './compositions/PaperCutoutSplitScreen';
import { PaperCutoutEarthWeb } from './compositions/PaperCutoutEarthWeb';
import { PaperCutoutBody } from './compositions/PaperCutoutBody';

export const Root = () => {
  return (
    <>
      <Composition
        id="FadeToBlack"
        component={FadeToBlack}
        durationInFrames={150} // 5 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="VideoTextOverlay"
        component={VideoTextOverlay}
        durationInFrames={150} // 5 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PaperCutoutSplitScreen"
        component={PaperCutoutSplitScreen}
        durationInFrames={150} // 5 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PaperCutoutEarthWeb"
        component={PaperCutoutEarthWeb}
        durationInFrames={150} // 5 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PaperCutoutBody"
        component={PaperCutoutBody}
        durationInFrames={150} // 5 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PlanetEarthAsBody"
        component={PlanetEarthAsBody}
        durationInFrames={6300} // 3.5 minutes @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TheWholeBody"
        component={TheWholeBody}
        durationInFrames={3600} // 120 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="EarthLivingSystem"
        component={EarthLivingSystem}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MyAnimation"
        component={MyAnimation}
        durationInFrames={150}   // 5 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Module0Composition"
        component={Module0Composition}
        durationInFrames={1000} // Total frames across all Series components
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
