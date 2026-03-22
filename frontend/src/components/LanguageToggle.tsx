"use client";
import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          language === "en"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("hi")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          language === "hi"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        हिं
      </button>
    </div>
  );
}
