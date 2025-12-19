import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react-native';
import { changeLanguage } from '../utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGES = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
];

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);

    useEffect(() => {
        const loadLang = async () => {
            const saved = await AsyncStorage.getItem('user-language');
            if (saved) setCurrentLang(saved);
        };
        loadLang();
    }, []);

    const handleSelect = async (code: string) => {
        await changeLanguage(code);
        setCurrentLang(code);
        setVisible(false);
    };

    return (
        <>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                className="flex-row items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl"
            >
                <Globe size={20} color="#4b5563" />
                <Text className="ml-3 text-gray-700 dark:text-gray-200 font-medium flex-1">
                    {LANGUAGES.find(l => l.code === currentLang)?.nativeName || 'Language'}
                </Text>
                <Text className="text-gray-400 text-sm uppercase">{currentLang}</Text>
            </TouchableOpacity>

            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                    className="flex-1 justify-center items-center bg-black/50 p-4"
                >
                    <View className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-2xl overflow-hidden shadow-xl">
                        <View className="p-4 border-b border-gray-100 dark:border-gray-800">
                            <Text className="text-lg font-bold text-gray-900 dark:text-white text-center">
                                Select Language
                            </Text>
                        </View>

                        <FlatList
                            data={LANGUAGES}
                            keyExtractor={item => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleSelect(item.code)}
                                    className={`flex-row items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 ${currentLang === item.code ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                        }`}
                                >
                                    <View>
                                        <Text className={`text-base font-medium ${currentLang === item.code ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                                            }`}>
                                            {item.nativeName}
                                        </Text>
                                        <Text className="text-sm text-gray-500 dark:text-gray-400">
                                            {item.name}
                                        </Text>
                                    </View>
                                    {currentLang === item.code && (
                                        <Check size={20} color="#2563eb" />
                                    )}
                                </TouchableOpacity>
                            )}
                        />

                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                            className="p-4 bg-gray-50 dark:bg-gray-800"
                        >
                            <Text className="text-center text-gray-500 font-medium">Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
}
