import { useState, useEffect } from "react";
import { CLASS_CONFIG as DEFAULT_CLASS_CONFIG } from "@/lib/journey/class-config";

export function useClassConfig() {
    const [config, setConfig] = useState(DEFAULT_CLASS_CONFIG);

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                // E.g. /api/v1/app-config/journey_classes
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/app-config/journey_classes`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.value) {
                        // Deep merge configs so that missing nested keys are preserved
                        setConfig(prev => ({
                            ...prev,
                            morning: { ...prev.morning, ...data.value.morning },
                            night: { ...prev.night, ...data.value.night },
                            graphotherapy: { ...prev.graphotherapy, ...data.value.graphotherapy },
                            pomodoro: { ...prev.pomodoro, ...data.value.pomodoro },
                            evening: { ...prev.evening, ...data.value.evening },
                        }));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch journey class configuration from backend", err);
            }
        };
        fetchConfig();
    }, []);

    return config;
}
