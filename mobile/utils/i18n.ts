import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import translations
import en from '../locales/en/common.json';
import es from '../locales/es/common.json';
import fr from '../locales/fr/common.json';
import de from '../locales/de/common.json';
import hi from '../locales/hi/common.json';
import zh from '../locales/zh/common.json';

const resources = {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    de: { translation: de },
    hi: { translation: hi },
    zh: { translation: zh },
};

const LANGUAGE_KEY = 'user-language';

const initI18n = async () => {
    try {
        // Check for saved language
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

        // Get device language
        const deviceLanguage = Localization.getLocales()[0].languageCode;

        const languageToUse = savedLanguage || deviceLanguage || 'en';

        if (!i18n.isInitialized) {
            await i18n
                .use(initReactI18next)
                .init({
                    resources,
                    lng: languageToUse,
                    fallbackLng: 'en',
                    interpolation: {
                        escapeValue: false,
                    },
                    compatibilityJSON: 'v3' as any,
                });
        } else {
            await i18n.changeLanguage(languageToUse);
        }
    } catch (error) {
        console.error('Failed to init i18n:', error);
    }
};

export const changeLanguage = async (language: string) => {
    try {
        await i18n.changeLanguage(language);
        await AsyncStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
        console.error('Failed to change language:', error);
    }
};

// Initialize
initI18n();

export default i18n;
