"use client";

import * as React from "react";
import {
    Calendar,
    CreditCard,
    Settings,
    User,
    LayoutDashboard,
    Mic,
    Activity,
    Zap,
    BookOpen,
    LogOut,
    Moon,
    Sun
} from "lucide-react";
import { useRouter } from "next/navigation";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";

export function GlobalCommandPalette() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Suggestions">
                    <CommandItem onSelect={() => runCommand(() => router.push("/student/dashboard"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Student Dashboard</span>
                        <CommandShortcut>⌘D</CommandShortcut>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Tools">
                    <CommandItem onSelect={() => runCommand(() => router.push("/student/meditation"))}>
                        <Moon className="mr-2 h-4 w-4" />
                        <span>Meditation Portal</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/student/graphotherapy/level/1"))}>
                        <Mic className="mr-2 h-4 w-4" />
                        <span>Graphotherapy (Voice Sync)</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/student/batch1/science-tech/tech-tree"))}>
                        <Zap className="mr-2 h-4 w-4" />
                        <span>Tech Tree (3D)</span>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="System">
                    <CommandItem onSelect={() => runCommand(() => console.log('Toggle Theme'))}>
                        <Sun className="mr-2 h-4 w-4" />
                        <span>Toggle Theme</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/admin/settings"))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
