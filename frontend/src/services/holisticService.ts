const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

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
    private getHeaders() {
        const token = localStorage.getItem('edueco_auth_token');
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
    }

    async getSkills(): Promise<SkillProgress[]> {
        const response = await fetch(`${API_BASE_URL}/holistic/skills`, {
            headers: this.getHeaders()
        });
        if (!response.ok) {
            throw new Error('Failed to fetch holistic skills');
        }
        return response.json();
    }

    async unlockSkill(skillId: string): Promise<{ message: string }> {
        const response = await fetch(`${API_BASE_URL}/holistic/skills/${skillId}/unlock`, {
            method: 'POST',
            headers: this.getHeaders()
        });
        if (!response.ok) {
            throw new Error('Failed to unlock skill');
        }
        return response.json();
    }
}

export const holisticService = new HolisticService();
