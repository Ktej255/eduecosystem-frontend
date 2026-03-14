import api from "@/lib/api";

export interface SyllabusUnit {
  unit: string;
  chapters: string[];
}

export interface SocialContent {
  linkedin: string;
  twitter: string;
  instagram: string;
}

export const aiService = {
  /**
   * Generates a syllabus structure for a given subject and level.
   */
  generateSyllabus: async (subject: string, level: string): Promise<SyllabusUnit[]> => {
    try {
      const response = await api.post("/ai/generate-syllabus", { subject, level });
      return response.data.units || response.data; // Flexible for different backend response formats
    } catch (error) {
      console.error("AI Syllabus Generation failed:", error);
      throw error;
    }
  },

  /**
   * Parses an uploaded file to extract metadata, tags, and snippets.
   */
  analyzeDocument: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await api.post("/ai/analyze-document", formData);
      return response.data;
    } catch (error) {
      console.error("AI Document Analysis failed:", error);
      throw error;
    }
  },

  /**
   * Generates social content for a given topic.
   */
  generateSocialContent: async (topic: string): Promise<SocialContent> => {
    try {
      const response = await api.post("/ai-tools/generate-social-content", {
        topic,
        platforms: ["linkedin", "twitter", "instagram"],
        context: "UPSC preparation content"
      });
      return response.data;
    } catch (error) {
      console.error("AI Social Content Generation failed:", error);
      throw error;
    }
  }
};

export default aiService;
