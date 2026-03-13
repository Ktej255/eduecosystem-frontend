export type BoundaryType = 'divergent' | 'convergent-oo' | 'convergent-cc' | 'convergent-oc' | 'transform';

export type PlateSize = 'major' | 'minor';

export interface TectonicPlate {
  id: string;
  name: string;
  size: PlateSize;
  description: string;
  // A rough coordinate [lng, lat] to place the label on the map
  label_coord: [number, number];
}

export interface TectonicBoundary {
  id: string;
  name: string;
  type: BoundaryType;
  plates_involved: [string, string];
  path: [number, number][]; // SVG line coordinates [lng, lat]
  landforms: string[];
  description: string;
  upsc_relevance: string;
  is_ring_of_fire: boolean;
}

export interface GeoHazard {
  id: string;
  name: string;
  type: 'volcano' | 'earthquake' | 'trench' | 'ridge';
  coord: [number, number];
  description: string;
}
