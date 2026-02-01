// ... imports
import { useState } from "react";
import { Plus, FileEdit, Calendar, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function QuickCaptureFAB() {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        { label: "Log Idea", icon: Lightbulb, color: "bg-amber-500", onClick: () => console.log("Log Idea") },
        { label: "Schedule Class", icon: Calendar, color: "bg-blue-500", onClick: () => console.log("Schedule Class") },
        { label: "Add Note", icon: FileEdit, color: "bg-emerald-500", onClick: () => console.log("Add Note") },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
            {/* Expanded Actions */}
            <div className={cn(
                "flex flex-col gap-3 transition-all duration-300 ease-out",
                isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
            )}>
                {actions.map((action, index) => (
                    <div key={action.label} className="flex items-center gap-3 justify-end">
                        <span className="bg-slate-800 text-white text-xs px-2 py-1 rounded-md shadow-lg font-medium opacity-0 animate-in fade-in slide-in-from-right-4 duration-300 pointer-events-none" style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
                            {action.label}
                        </span>
                        <Button
                            size="icon"
                            className={cn(
                                "h-10 w-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110",
                                action.color
                            )}
                            onClick={() => {
                                action.onClick();
                                setIsOpen(false);
                            }}
                        >
                            <action.icon className="h-5 w-5 text-white" />
                        </Button>
                    </div>
                ))}
            </div>

            {/* Main Toggle Button */}
            <Button
                size="icon"
                className={cn(
                    "h-14 w-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95",
                    isOpen ? "bg-slate-800 rotate-45" : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Plus className="h-7 w-7 text-white" />
            </Button>
        </div>
    );
}
