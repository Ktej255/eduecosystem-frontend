import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background">
            <div className="relative flex items-center justify-center">
                <div className="absolute h-12 w-12 animate-ping rounded-full bg-indigo-500 opacity-20"></div>
                <Loader2 className="h-10 w-10 animate-spin text-indigo-600 dark:text-indigo-400" />
            </div>
            <p className="animate-pulse text-sm font-medium text-muted-foreground">
                Summoning the Guru...
            </p>
        </div>
    )
}
