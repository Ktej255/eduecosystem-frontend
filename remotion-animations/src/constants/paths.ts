/**
 * Planet Earth as a Body — SVG Path Constants
 * Programmatic vector data for the human anatomical model and simplified Earth continents.
 */

export const PATHS = {
  // Simplified Human Silhouette (centered in 100x100 viewBox)
  HUMAN_BODY: "M 50 5 C 45 5 42 8 42 12 C 42 16 45 20 50 20 C 55 20 58 16 58 12 C 58 8 55 5 50 5 Z M 40 22 C 35 22 30 25 30 35 L 30 55 C 30 60 33 62 35 62 L 40 62 L 40 95 C 40 98 42 100 45 100 L 55 100 C 58 100 60 98 60 95 L 60 62 L 65 62 C 67 62 70 60 70 55 L 70 35 C 70 25 65 22 60 22 Z",
  
  // Organs (approximate positions in human body)
  HEART: "M 50 35 C 45 32 40 35 40 40 C 40 45 50 55 50 55 C 50 55 60 45 60 40 C 60 35 55 32 50 35",
  KIDNEY_L: "M 42 50 Q 38 52 40 58 Q 42 62 44 58 Q 46 54 42 50",
  KIDNEY_R: "M 58 50 Q 62 52 60 58 Q 58 62 56 58 Q 54 54 58 50",
  LUNG_L: "M 45 30 Q 35 30 35 45 Q 35 55 45 50 Z",
  LUNG_R: "M 55 30 Q 65 30 65 45 Q 65 55 55 50 Z",
  BRAIN: "M 46 10 Q 50 5 54 10 L 54 15 Q 50 18 46 15 Z",
  LIVER: "M 52 42 Q 58 40 62 45 L 62 50 Q 58 55 52 52 Z",

  // Simplified Earth Continents (for Scene 5 reveal)
  EARTH_CIRCLE: "M 50 0 A 50 50 0 1 0 50 100 A 50 50 0 1 0 50 0",
  CONTINENT_AFRICA: "M 45 40 Q 55 40 60 55 Q 50 75 40 65 Z",
  CONTINENT_AMERICAS: "M 20 30 Q 35 30 30 50 L 25 70 Q 15 80 10 50 Z",
  CONTINENT_EURASIA: "M 40 20 Q 80 20 90 40 L 70 50 Q 50 55 40 40 Z",

  // Hospital Blueprint corridors
  BLUEPRINT_ER: "M 10 10 H 90 V 90 H 10 Z M 30 10 V 90 M 70 10 V 90 M 10 30 H 90 M 10 70 H 90",
};

export const COLORS = {
  // Cinematic Palette
  NAVY: "#0a0f2c",
  RED: "#c0392b",
  PINK: "#e8a598",
  BLUE: "#3498db",
  TEAL: "#1abc9c",
  AMBER: "#f39c12",
  WHITE: "#ffffff",
  FOG: "#cccccc",
  
  // Paper Cutout Palette
  PAPER_CREAM: "#FDFAEF",
  PAPER_TAN: "#E8DFD0",
  PAPER_BROWN: "#935116",
  PAPER_GRAY: "#7B7D7D",
  PAPER_BLUE: "#2E86C1",
};
