// Katha Upanishad Image Mapping
// Images will be generated for each verse or section

// Placeholder function - will be populated with actual image paths
export const getKathaShlokaImage = (verseId: number): string | null => {
    const imageMap: Record<number, string> = {
        // Valli 1: The Story
        // Images to be added as they are generated
    };

    return imageMap[verseId] || null;
};

// Section-level images for overview
export const KATHA_SECTION_IMAGES = {
    story: "/assets/upanishads/katha/story_nachiketa.png",
    yama: "/assets/upanishads/katha/yama_lord.png",
    fire: "/assets/upanishads/katha/sacred_fire.png",
    chariot: "/assets/upanishads/katha/chariot_metaphor.png",
    liberation: "/assets/upanishads/katha/liberation.png"
};

// Header background
export const KATHA_HEADER_BG = "/assets/upanishads/katha/katha_header_bg.png";
