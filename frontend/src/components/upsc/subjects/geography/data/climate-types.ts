export type MajorClimateGroup = 'A' | 'B' | 'C' | 'D' | 'E'; // Tropical, Dry, Temperate, Continental, Polar

export interface MonthlyStats {
  temp: number; // Celsius
  precip: number; // mm
}

export interface ClimateZone {
  id: string; // e.g. Af, Aw, Cs
  code: string;
  name: string; // e.g. Tropical Wet (Equatorial)
  group: MajorClimateGroup;
  description: string;
  regions: string[]; // List of real-world regions
  
  // Climatology features
  temp_range_annual: string;
  rainfall_annual: string;
  
  // Biological features
  natural_vegetation: string;
  key_wildlife: string;
  
  upsc_relevance: string;
  
  // For the Climograph component (averages for a representative city)
  climograph_city: string;
  monthly_data: MonthlyStats[];

  // Rough SVG paths or bounding box logic (Simplified for equirectangular map overlay)
  // For visual representation, we will use simplified SVG paths mapping the general latitude bands and continental coasts
  visual_paths: [number, number][][]; 
}
