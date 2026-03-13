export type FeatureType = 'national-park' | 'river' | 'mineral' | 'dam' | 'climate-zone' | 'plate' | 'soil' | 'volcano' | 'pass' | 'biosphere';

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
  related_topics: string[];
  difficulty: 'high-yield' | 'medium' | 'low';
}
