import { api } from "@/lib/api";

export interface SkillProgress {
    id: string;
    title: string;
    category: 'financial' | 'digital' | 'mindset' | 'personal';
    description: string;
    icon: string;
    color: string;
    isLocked: boolean;
    progress: number;
    status: 'locked' | 'unlocked' | 'in-progress' | 'mastered';
}

class HolisticService {
    async getSkills(): Promise<SkillProgress[]> {
        const response = await api.get('/holistic/skills');
        return response.data;
    }

    async unlockSkill(skillId: string): Promise<{ message: string }> {
        const response = await api.post(`/holistic/skills/${skillId}/unlock`);
        return response.data;
    }
}

export const holisticService = new HolisticService();
