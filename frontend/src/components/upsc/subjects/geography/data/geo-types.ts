export type FeatureType = 
  | 'national-park' 
  | 'river' 
  | 'mineral' 
  | 'dam' 
  | 'climate-zone' 
  | 'plate' 
  | 'soil' 
  | 'volcano' 
  | 'pass' 
  | 'biosphere'
  | 'ramsar-site'
  | 'mountain-range'
  | 'peak'
  | 'unesco-site';

export interface GeoFeature {
  id: string;
  name: string;
  type: FeatureType;
  coordinates: { lat: number; lng: number };
  region: string;     // India state or world region
  description: string;
  characteristics: string[];
  upsc_relevance: string;
  pyq_years: number[];
  related_topics?: string[];
  difficulty: 'high-yield' | 'medium' | 'low';
  
  // NEW PROPERTIES FOR RIVER & CURRENT AFFAIRS UPGRADE:
  path?: [number, number][]; // Array of [longitude, latitude] for rendering the river line or mountain range
  in_news_24m?: boolean; // Flag to trigger UI alerts for recent current affairs
  news_context?: string; // Detailed explanation of the current event (e.g., floods, dam disputes)
  pyq_details?: string; // Granular detail on how the question was framed in the exam
  
  // ENTHUSIAST MULTIMEDIA:
  images?: string[]; // URLs/Paths to stunning visuals for the side panel

  // NEW VISUAL ENGINE PROPERTIES:
  basin?: 'Ganga' | 'Brahmaputra' | 'Indus' | 'Peninsular-East' | 'Peninsular-West' | 'Inland';
  river_hierarchy?: 'main' | 'tributary' | 'distributary';
  nodeType?: 'Origin' | 'Mouth' | 'Confluence'; // For node-specific rendering
}

