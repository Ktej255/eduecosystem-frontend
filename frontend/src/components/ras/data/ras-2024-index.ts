import { RAS_2024_PART1, RASQuestion } from './ras-2024-data-part1';
import { RAS_2024_PART2 } from './ras-2024-data-part2';
import { RAS_2024_PART3 } from './ras-2024-data-part3';
import { RAS_2024_PART4 } from './ras-2024-data-part4';
import { RAS_2024_PART5 } from './ras-2024-data-part5';
import { RAS_2024_PART6 } from './ras-2024-data-part6';

export const RAS_2024_FULL_PAPER: RASQuestion[] = [
    ...RAS_2024_PART1,
    ...RAS_2024_PART2,
    ...RAS_2024_PART3,
    ...RAS_2024_PART4,
    ...RAS_2024_PART5,
    ...RAS_2024_PART6
];

export type { RASQuestion };
