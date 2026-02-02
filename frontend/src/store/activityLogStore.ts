import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type LogStatus = 'success' | 'warning' | 'error';
export type LogModule = 'content' | 'auth' | 'settings' | 'finance' | 'communication';

export interface LogEntry {
    id: string;
    action: string;
    description: string;
    user: string;
    role: string;
    ip: string;
    timestamp: string;
    status: LogStatus;
    module: LogModule;
}

interface ActivityLogState {
    logs: LogEntry[];
    addLog: (entry: Omit<LogEntry, 'id' | 'timestamp' | 'ip'>) => void;
    clearLogs: () => void;
}

export const useActivityLogStore = create<ActivityLogState>()(
    persist(
        (set) => ({
            logs: [
                {
                    id: 'log-initial',
                    action: 'System Initialized',
                    description: 'Eduecosystem Master Platform V2.0 live.',
                    user: 'System',
                    role: 'Core',
                    ip: '127.0.0.1',
                    timestamp: new Date().toISOString(),
                    status: 'success',
                    module: 'settings'
                }
            ],
            addLog: (entry) => set((state) => ({
                logs: [
                    {
                        ...entry,
                        id: `log-${Date.now()}`,
                        timestamp: new Date().toISOString(),
                        ip: '192.168.1.1' // Mocked client IP
                    },
                    ...state.logs
                ].slice(0, 100) // Keep last 100 logs
            })),
            clearLogs: () => set({ logs: [] })
        }),
        {
            name: 'eduecosystem-audit-logs',
        }
    )
);
