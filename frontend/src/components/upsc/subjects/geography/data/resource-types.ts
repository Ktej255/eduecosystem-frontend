export type ResourceCategory = 'metallic' | 'non-metallic' | 'energy' | 'atomic';

export interface ResourceDeposit {
  id: string;
  name: string; // Name of the mine or specific deposit (e.g. "Kudremukh", "Jharia")
  type: string; // e.g., "Iron Ore", "Coal", "Uranium"
  category: ResourceCategory;
  state: string;
  coord: [number, number]; // [lng, lat]
  description: string;
  upsc_relevance: string;
  geological_period: string; // e.g., "Gondwana", "Tertiary", "Dharwar"
}

export interface MineralBelt {
  id: string;
  name: string;
  description: string;
  path: [number, number][]; // SVG polygon path mapping the belt roughly
  primary_resources: string[]; // e.g. ["Iron Ore", "Coal", "Manganese"]
  upsc_relevance: string;
}
