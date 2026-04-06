import { registerRoot } from 'remotion';
import { Root } from './Root';
import { loadFont } from '@remotion/google-fonts/Inter';

// Load Inter font before generating video
loadFont();

registerRoot(Root);
