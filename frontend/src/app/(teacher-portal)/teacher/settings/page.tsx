"use client";

import {
    Settings,
    Palette,
    Bell,
    ShieldAlert,
    Users,
    Lock
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ThemeCustomizer from "@/components/teacher-portal/settings/ThemeCustomizer";
import NotificationPreferences from "@/components/teacher-portal/settings/NotificationPreferences";
import AuditLogViewer from "@/components/teacher-portal/settings/AuditLogViewer";
import RolePermissionMatrix from "@/components/teacher-portal/settings/RolePermissionMatrix";

export default function SettingsPage() {
    return (
        <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <Settings className="h-8 w-8 text-indigo-600" />
                    System Settings
                </h1>
                <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                    Configure your platform preferences, security, and branding.
                </p>
            </div>

            {/* Main Tabs */}
            <Tabs defaultValue="theme" className="w-full space-y-6">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted rounded-xl">
                    <TabsTrigger value="theme" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-card data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Palette className="h-4 w-4" />
                        <span className="hidden md:inline">Theme & Brand</span>
                        <span className="md:hidden">Theme</span>
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-card data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Bell className="h-4 w-4" />
                        <span className="hidden md:inline">Notifications</span>
                        <span className="md:hidden">Alerts</span>
                    </TabsTrigger>
                    <TabsTrigger value="roles" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-card data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <Users className="h-4 w-4" />
                        <span className="hidden md:inline">Roles & Access</span>
                        <span className="md:hidden">Roles</span>
                    </TabsTrigger>
                    <TabsTrigger value="audit" className="flex items-center gap-2 py-3 md:py-2 data-[state=active]:bg-card data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-800 rounded-lg transition-all">
                        <ShieldAlert className="h-4 w-4" />
                        <span className="hidden md:inline">Audit Logs</span>
                        <span className="md:hidden">Audit</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="theme" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-foreground">Theme Customizer</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Live</span>
                    </div>
                    <ThemeCustomizer />
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-foreground">Notification Preferences</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Live</span>
                    </div>
                    <NotificationPreferences />
                </TabsContent>

                <TabsContent value="roles" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-foreground">Role & Permission Matrix</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Live</span>
                    </div>
                    <RolePermissionMatrix />
                </TabsContent>

                <TabsContent value="audit" className="space-y-4 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-foreground">System Audit Log</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Live</span>
                    </div>
                    <AuditLogViewer />
                </TabsContent>
            </Tabs>
        </div>
    );
}
