import { useState, useEffect } from "react";
import { MEET_CONFIG as FALLBACK_MEET_CONFIG } from "@/config/meet-config";
import { API_BASE } from "@/lib/api";

export function useMeetConfig() {
    const [meetConfig, setMeetConfig] = useState(FALLBACK_MEET_CONFIG);

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const res = await fetch(`${API_BASE}/app-config/live_classes`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.value) {
                        setMeetConfig(prev => ({ ...prev, ...data.value }));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch live classes configuration from backend", err);
            }
        };
        fetchConfig();
    }, []);

    return meetConfig;
}
