"use client";

import { MessageSquareText } from "lucide-react";
import CommunicationHub from "@/components/teacher-portal/communication/CommunicationHub";

export default function CommunicationPage() {
    return (
        <div className="p-6 h-[calc(100vh-60px)] flex flex-col box-border">
            <div className="mb-6 flex-shrink-0">
                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <MessageSquareText className="h-8 w-8 text-indigo-600" />
                    Unified Inbox
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Manage WhatsApp, Telegram, Email, and Social interactions in one place.
                </p>
            </div>

            <div className="flex-1 min-h-0">
                <CommunicationHub />
            </div>
        </div>
    );
}
