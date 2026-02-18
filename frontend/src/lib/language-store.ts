
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'hi';

interface LanguageState {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const TRANSLATIONS: Record<string, Record<Language, string>> = {
    'back_to_dashboard': {
        en: 'Back to Dashboard',
        hi: 'डैशबोर्ड पर वापस जाएं'
    },
    'chapter': {
        en: 'Chapter',
        hi: 'अध्याय'
    },
    'next_chapter': {
        en: 'Next Chapter',
        hi: 'अगला अध्याय'
    },
    'previous_chapter': {
        en: 'Previous Chapter',
        hi: ' पिछला अध्याय'
    },
    'mark_complete': {
        en: 'Mark Chapter as Complete',
        hi: 'अध्याय को पूर्ण चिह्नित करें'
    },
    'chapter_completed': {
        en: 'Chapter Completed',
        hi: 'अध्याय पूर्ण हुआ'
    },
    'master_notes': {
        en: 'Master Notes',
        hi: 'मास्टर नोट्स'
    },
    'coming_soon_hindi': {
        en: 'Hindi translation coming soon.',
        hi: 'हिंदी अनुवाद जल्द आ रहा है।'
    }
};

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set, get) => ({
            language: 'en',
            setLanguage: (lang) => set({ language: lang }),
            t: (key) => {
                const lang = get().language;
                return TRANSLATIONS[key]?.[lang] || key;
            }
        }),
        {
            name: 'language-storage',
        }
    )
);
