"use client";

import { useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export type Batch2EventType =
    | "upanishad_session_started"
    | "upanishad_session_completed"
    | "sadhana_session_done"
    | "journal_entry_saved"
    | "mala_round_done"
    | "mudra_practiced"
    | "dinacharya_step_done"
    | "sankalpa_signed"
    | "patrasadana_checked"
    | "sq_test_completed"
    | "upanishad_report_submitted";

export interface Batch2Event {
    id: string;
    type: Batch2EventType;
    timestamp: string;
    module?: string; // e.g., "Kena Upanishad", "Digital Mala", "SQ Test"
    text?: string; // e.g., Journal reflection, key learning
    gunas?: { sattva: number; rajas: number; tamas: number }; // Used for SQ Test and Internal Shifts
    duration?: number; // In minutes, for sessions
    data?: any; // Catch-all for extra data
}

const STORAGE_KEY = "batch2_events";

export function useBatch2Events() {
    const [events, setEvents] = useState<Batch2Event[]>([]);

    // Automatically load from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setEvents(JSON.parse(stored));
            }
        } catch (e) {
            console.error("Failed to load batch 2 events", e);
            setEvents([]);
        }
    }, []);

    // The primary action to log an event
    const logEvent = useCallback((
        type: Batch2EventType,
        payload: Omit<Partial<Batch2Event>, "id" | "type" | "timestamp">
    ) => {
        const newEvent: Batch2Event = {
            id: uuidv4(),
            type,
            timestamp: new Date().toISOString(),
            ...payload,
        };

        setEvents((prev) => {
            const updated = [newEvent, ...prev];
            // Persist to localStorage immediately
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            } catch (e) {
                console.error("Failed to save batch 2 event", e);
            }
            return updated;
        });

        // Fire a custom event for other tabs/components to update immediately if needed
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("batch2_events_updated", { detail: newEvent }));
        }

        return newEvent;
    }, []);

    // Helper to get events by type
    const getEventsByType = useCallback((type: Batch2EventType) => {
        return events.filter(e => e.type === type);
    }, [events]);

    // Clear all events (for testing or reset)
    const clearAllEvents = useCallback(() => {
        setEvents([]);
        localStorage.removeItem(STORAGE_KEY);
        if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("batch2_events_updated"));
        }
    }, []);

    // Listen to custom event for cross-component sync
    useEffect(() => {
        const handleSync = () => {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setEvents(JSON.parse(stored));
            } else {
                setEvents([]);
            }
        };
        window.addEventListener("batch2_events_updated", handleSync);
        return () => window.removeEventListener("batch2_events_updated", handleSync);
    }, []);

    return {
        events,
        logEvent,
        getEventsByType,
        clearAllEvents,
    };
}
