"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type UIMode = 'classic' | 'immersive';

interface Batch2UIContextType {
    mode: UIMode;
    setMode: (mode: UIMode) => void;
    toggleMode: () => void;
}

const Batch2UIContext = createContext<Batch2UIContextType>({
    mode: 'classic',
    setMode: () => { },
    toggleMode: () => { },
});

export const useBatch2UI = () => useContext(Batch2UIContext);

export const Batch2UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<UIMode>('classic');

    // Load preference from local storage on mount
    useEffect(() => {
        const savedMode = localStorage.getItem('batch2_ui_mode') as UIMode | null;
        if (savedMode === 'classic' || savedMode === 'immersive') {
            setMode(savedMode);
        }
    }, []);

    const handleSetMode = (newMode: UIMode) => {
        setMode(newMode);
        localStorage.setItem('batch2_ui_mode', newMode);

        // Add minimal global class for generic overrides if needed
        if (typeof document !== 'undefined') {
            if (newMode === 'immersive') {
                document.documentElement.classList.add('immersive-mode');
            } else {
                document.documentElement.classList.remove('immersive-mode');
            }
        }
    };

    const toggleMode = () => {
        handleSetMode(mode === 'classic' ? 'immersive' : 'classic');
    };

    return (
        <Batch2UIContext.Provider value={{ mode, setMode: handleSetMode, toggleMode }}>
            {children}
        </Batch2UIContext.Provider>
    );
};
