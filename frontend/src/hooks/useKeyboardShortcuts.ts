// useKeyboardShortcuts - Custom hook for keyboard navigation

import { useEffect, useCallback } from 'react';

export interface KeyboardShortcut {
    key: string;
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
    description: string;
    action: () => void;
}

/**
 * Hook for registering keyboard shortcuts
 */
export function useKeyboardShortcuts(
    shortcuts: KeyboardShortcut[],
    enabled: boolean = true
) {
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (!enabled) return;

        // Ignore if typing in an input/textarea
        if (
            event.target instanceof HTMLInputElement ||
            event.target instanceof HTMLTextAreaElement ||
            (event.target as HTMLElement).isContentEditable
        ) {
            return;
        }

        const matchingShortcut = shortcuts.find(shortcut => {
            const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase();
            const ctrlMatch = shortcut.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
            const shiftMatch = shortcut.shift ? event.shiftKey : !event.shiftKey;
            const altMatch = shortcut.alt ? event.altKey : !event.altKey;

            return keyMatch && ctrlMatch && shiftMatch && altMatch;
        });

        if (matchingShortcut) {
            event.preventDefault();
            matchingShortcut.action();
        }
    }, [shortcuts, enabled]);

    useEffect(() => {
        if (enabled) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [handleKeyDown, enabled]);
}

/**
 * Flashcard navigation shortcuts
 */
export function useFlashcardShortcuts(
    onFlip: () => void,
    onNext: () => void,
    onPrevious: () => void,
    onRating?: (rating: 'again' | 'hard' | 'good' | 'easy') => void,
    enabled: boolean = true
) {
    const shortcuts: KeyboardShortcut[] = [
        { key: ' ', description: 'Flip card', action: onFlip },
        { key: 'Enter', description: 'Flip card', action: onFlip },
        { key: 'ArrowRight', description: 'Next card', action: onNext },
        { key: 'ArrowLeft', description: 'Previous card', action: onPrevious },
        { key: 'n', description: 'Next card', action: onNext },
        { key: 'p', description: 'Previous card', action: onPrevious },
    ];

    if (onRating) {
        shortcuts.push(
            { key: '1', description: 'Rate: Again', action: () => onRating('again') },
            { key: '2', description: 'Rate: Hard', action: () => onRating('hard') },
            { key: '3', description: 'Rate: Good', action: () => onRating('good') },
            { key: '4', description: 'Rate: Easy', action: () => onRating('easy') }
        );
    }

    useKeyboardShortcuts(shortcuts, enabled);
}

/**
 * MCQ navigation shortcuts
 */
export function useMCQShortcuts(
    onSelectOption: (index: number) => void,
    onSubmit: () => void,
    onNext: () => void,
    enabled: boolean = true
) {
    const shortcuts: KeyboardShortcut[] = [
        { key: 'a', description: 'Select option A', action: () => onSelectOption(0) },
        { key: 'b', description: 'Select option B', action: () => onSelectOption(1) },
        { key: 'c', description: 'Select option C', action: () => onSelectOption(2) },
        { key: 'd', description: 'Select option D', action: () => onSelectOption(3) },
        { key: '1', description: 'Select option A', action: () => onSelectOption(0) },
        { key: '2', description: 'Select option B', action: () => onSelectOption(1) },
        { key: '3', description: 'Select option C', action: () => onSelectOption(2) },
        { key: '4', description: 'Select option D', action: () => onSelectOption(3) },
        { key: 'Enter', description: 'Submit answer', action: onSubmit },
        { key: 'ArrowRight', description: 'Next question', action: onNext },
    ];

    useKeyboardShortcuts(shortcuts, enabled);
}

/**
 * Timer control shortcuts
 */
export function useTimerShortcuts(
    onToggle: () => void,
    onReset: () => void,
    onSkip?: () => void,
    enabled: boolean = true
) {
    const shortcuts: KeyboardShortcut[] = [
        { key: ' ', description: 'Play/Pause timer', action: onToggle },
        { key: 'r', description: 'Reset timer', action: onReset },
    ];

    if (onSkip) {
        shortcuts.push({ key: 's', description: 'Skip', action: onSkip });
    }

    useKeyboardShortcuts(shortcuts, enabled);
}

/**
 * Global navigation shortcuts
 */
export function useGlobalShortcuts(
    enabled: boolean = true
) {
    const shortcuts: KeyboardShortcut[] = [
        {
            key: 'Escape', description: 'Close modal/exit', action: () => {
                // Trigger escape event for modals
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
            }
        },
        {
            key: '/', ctrl: true, description: 'Open search', action: () => {
                const searchInput = document.querySelector('[data-search-input]') as HTMLInputElement;
                searchInput?.focus();
            }
        },
    ];

    useKeyboardShortcuts(shortcuts, enabled);
}

/**
 * Component to display keyboard shortcuts help
 */
export function getShortcutsList(context: 'flashcard' | 'mcq' | 'timer' | 'general'): { key: string; description: string }[] {
    switch (context) {
        case 'flashcard':
            return [
                { key: 'Space / Enter', description: 'Flip card' },
                { key: '← / →', description: 'Previous / Next card' },
                { key: '1-4', description: 'Rate difficulty (SRS mode)' },
            ];
        case 'mcq':
            return [
                { key: 'A-D or 1-4', description: 'Select option' },
                { key: 'Enter', description: 'Submit answer' },
                { key: '→', description: 'Next question' },
            ];
        case 'timer':
            return [
                { key: 'Space', description: 'Play/Pause' },
                { key: 'R', description: 'Reset' },
                { key: 'S', description: 'Skip' },
            ];
        case 'general':
            return [
                { key: 'Esc', description: 'Close modal' },
                { key: 'Ctrl + /', description: 'Open search' },
            ];
    }
}
