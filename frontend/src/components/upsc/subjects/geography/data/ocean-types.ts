export interface OceanCurrent {
  id: string;
  name: string;
  type: 'warm' | 'cold';
  gyre: 'North Atlantic' | 'South Atlantic' | 'North Pacific' | 'South Pacific' | 'Indian Ocean' | 'Antarctic Circumpolar' | 'None';
  path: [number, number][]; // Array of [lat, lng] waypoints for the SVG path
  climate_effect: string;
  upsc_relevance: string;
}
