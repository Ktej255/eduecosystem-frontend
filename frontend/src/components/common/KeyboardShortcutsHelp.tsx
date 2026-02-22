"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';
import { getShortcutsList } from '@/hooks/useKeyboardShortcuts';

interface KeyboardShortcutsHelpProps {
    context: 'flashcard' | 'mcq' | 'timer' | 'general';
    compact?: boolean;
}

export default function KeyboardShortcutsHelp({ context, compact = false }: KeyboardShortcutsHelpProps) {
    const shortcuts = getShortcutsList(context);

    if (compact) {
        return (
            <div className="text-xs text-muted-foreground flex items-center gap-2">
                <Keyboard className="h-3 w-3" />
                <span>
                    {shortcuts.slice(0, 2).map((s, i) => (
                        <span key={i}>
                            <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]">{s.key}</kbd>
                            <span className="mx-1">{s.description}</span>
                            {i < 1 && <span className="mx-2">|</span>}
                        </span>
                    ))}
                </span>
            </div>
        );
    }

    return (
        <Card className="bg-muted">
            <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Keyboard className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm text-muted-foreground dark:text-muted-foreground">
                        Keyboard Shortcuts
                    </span>
                </div>
                <div className="space-y-2">
                    {shortcuts.map((shortcut, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                            <kbd className="px-2 py-1 bg-card border rounded text-xs font-mono">
                                {shortcut.key}
                            </kbd>
                            <span className="text-muted-foreground dark:text-muted-foreground text-xs">
                                {shortcut.description}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
