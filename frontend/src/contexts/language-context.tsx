"use client";
import { createContext, useContext, 
         useState, useEffect } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Dashboard
    "dashboard.welcome": "Welcome back",
    "dashboard.continue": "Continue Studying",
    "dashboard.myProgress": "My Progress",
    "dashboard.subjects": "My Subjects",
    "dashboard.openPortal": "Open AI Study Portal",
    "dashboard.meditation": "Meditation",
    "dashboard.graphotherapy": "Graphotherapy",
    "dashboard.planner": "Daily Planner",
    "dashboard.drill": "MCQ Drill",
    "dashboard.studyMode": "Study Mode",
    "dashboard.aiModeOn": "🤖 AI Mode ON",
    "dashboard.manualMode": "📚 Manual Mode",
    "dashboard.voiceActive": "Voice input, document intelligence, and smart search are active",
    "dashboard.day": "Day",
    "dashboard.jumpToModule": "Jump to Module",
    "dashboard.explore": "Explore",
    
    // AI Portal
    "portal.welcome": "What do you want to learn today",
    "portal.continue": "Continue where I left off",
    "portal.startNew": "Start something new",
    "portal.testMe": "Test my knowledge",
    "portal.placeholder": "Message your AI Tutor...",
    "portal.myProgress": "My Progress",
    "portal.currentTopic": "Current Topic",
    "portal.debateMode": "Debate Mode",
    "portal.debateOn": "⚔️ Debate ON",
    "portal.saveFeedback": "Send Feedback",
    "portal.captureThought": "Capture Thought",
    "portal.saveNote": "Save Note",
    "portal.shareTeacher": "Share with Teacher",
    "portal.cancel": "Cancel",
    "portal.isThisRight": "Is this what you understood?",
    "portal.yesSave": "Yes, save this",
    "portal.notQuite": "Not quite",
    "portal.typeThought": "Write your thought here...",
    "portal.feedbackSent": "Feedback sent to Tej Sir!",
    "portal.noteSaved": "Thought saved to your notes!",
    "portal.aiDisclaimer": "AI responses are generated to assist your learning and should be cross-verified.",
    
    // Navigation
    "nav.logout": "Logout",
    "nav.settings": "Settings",
    "nav.profile": "Profile",
    
    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.submit": "Submit",
    "common.back": "Back",
    "common.next": "Next",
    "common.complete": "Mark Complete",
  },
  hi: {
    // Dashboard
    "hi.dashboard.welcome": "वापस स्वागत है", // Note: The key in the provided text was just "dashboard.welcome" inside hi object. I'll stick to the keys.
    "dashboard.welcome": "वापस स्वागत है",
    "dashboard.continue": "पढ़ाई जारी रखें",
    "dashboard.myProgress": "मेरी प्रगति",
    "dashboard.subjects": "मेरे विषय",
    "dashboard.openPortal": "AI स्टडी पोर्टल खोलें",
    "dashboard.meditation": "ध्यान",
    "dashboard.graphotherapy": "ग्राफोथेरेपी",
    "dashboard.planner": "दैनिक योजनाकार",
    "dashboard.drill": "MCQ अभ्यास",
    "dashboard.studyMode": "अध्ययन मोड",
    "dashboard.aiModeOn": "🤖 AI मोड ऑन",
    "dashboard.manualMode": "📚 मैनुअल मोड",
    "dashboard.voiceActive": "वॉयस इनपुट, दस्तावेज़ इंटेलिजेंस और स्मार्ट खोज सक्रिय हैं",
    "dashboard.day": "दिन",
    "dashboard.jumpToModule": "मॉड्यूल पर जाएं",
    "dashboard.explore": "देखें",
    
    // AI Portal
    "portal.welcome": "आज आप क्या सीखना चाहते हैं",
    "portal.continue": "जहाँ छोड़ा था वहाँ से जारी रखें",
    "portal.startNew": "कुछ नया शुरू करें",
    "portal.testMe": "मेरी जाँच करें",
    "portal.placeholder": "अपने AI शिक्षक से पूछें...",
    "portal.myProgress": "मेरी प्रगति",
    "portal.currentTopic": "वर्तमान विषय",
    "portal.debateMode": "वाद-विवाद मोड",
    "portal.debateOn": "⚔️ वाद-विवाद ऑन",
    "portal.saveFeedback": "फीडबैक भेजें",
    "portal.captureThought": "विचार कैप्चर करें",
    "portal.saveNote": "नोट सेव करें",
    "portal.shareTeacher": "शिक्षक के साथ साझा करें",
    "portal.cancel": "रद्द करें",
    "portal.isThisRight": "क्या आपने यही समझा?",
    "portal.yesSave": "हाँ, यह सेव करें",
    "portal.notQuite": "नहीं, ठीक नहीं है",
    "portal.typeThought": "अपने विचार यहाँ लिखें...",
    "portal.feedbackSent": "तेज सर को फीडबैक भेज दिया गया!",
    "portal.noteSaved": "विचार आपके नोट्स में सेव कर लिया गया है!",
    "portal.aiDisclaimer": "AI उत्तर आपकी सीखने में सहायता के लिए उत्पन्न किए गए हैं और इन्हें क्रॉस-वेरिफाई किया जाना चाहिए।",
    
    // Navigation
    "nav.logout": "लॉग आउट",
    "nav.settings": "सेटिंग्स",
    "nav.profile": "प्रोफाइल",
    
    // Common
    "common.loading": "लोड हो रहा है...",
    "common.error": "कुछ गलत हो गया",
    "common.save": "सेव करें",
    "common.cancel": "रद्द करें",
    "common.submit": "जमा करें",
    "common.back": "वापस",
    "common.next": "आगे",
    "common.complete": "पूर्ण चिह्नित करें",
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ 
  children 
}: { children: React.ReactNode }) {
  const [language, setLanguageState] = 
    useState<Language>("en");
  
  useEffect(() => {
    // Load saved preference on mount
    const saved = localStorage.getItem(
      "eduecosystem_language") as Language;
    if (saved === "hi" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(
      "eduecosystem_language", lang);
  };
  
  const t = (key: string): string => {
    return translations[language][key] 
      || translations["en"][key] 
      || key;
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language, setLanguage, t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => 
  useContext(LanguageContext);
