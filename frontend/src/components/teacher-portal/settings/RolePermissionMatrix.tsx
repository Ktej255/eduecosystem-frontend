"use client";

import { useState } from "react";
import {
    Shield,
    Lock,
    Users,
    Save,
    RotateCcw,
    Check,
    AlertCircle
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// --- Mock Data ---

type PermissionId = "content_view" | "content_edit" | "content_publish" | "analytics_view" | "users_manage" | "finance_view";

interface Permission {
    id: PermissionId;
    label: string;
    category: "Content" | "Analytics" | "Administration";
    description: string;
}

interface Role {
    id: string;
    name: string;
    description: string;
    usersCount: number;
    color: string;
}

const permissions: Permission[] = [
    { id: "content_view", label: "View Content", category: "Content", description: "Read-only access to all course materials" },
    { id: "content_edit", label: "Edit Content", category: "Content", description: "Create and modify lessons, quizzes, and files" },
    { id: "content_publish", label: "Publish Courses", category: "Content", description: "Make content live for students" },
    { id: "analytics_view", label: "View Analytics", category: "Analytics", description: "Access student performance and engagement data" },
    { id: "users_manage", label: "Manage Users", category: "Administration", description: "Add/remove students and staff" },
    { id: "finance_view", label: "View Finance", category: "Administration", description: "Access revenue reports and payouts" },
];

const roles: Role[] = [
    { id: "admin", name: "Super Admin", description: "Full access", usersCount: 2, color: "bg-red-100 text-red-700" },
    { id: "instructor", name: "Lead Instructor", description: "Course management", usersCount: 5, color: "bg-indigo-100 text-indigo-700" },
    { id: "ta", name: "Teaching Asst.", description: "Support & grading", usersCount: 12, color: "bg-green-100 text-green-700" },
    { id: "guest", name: "Guest User", description: "Preview only", usersCount: 0, color: "bg-slate-100 text-slate-700" },
];

// Initial Matrix State
const initialMatrix: Record<string, PermissionId[]> = {
    admin: ["content_view", "content_edit", "content_publish", "analytics_view", "users_manage", "finance_view"],
    instructor: ["content_view", "content_edit", "content_publish", "analytics_view"],
    ta: ["content_view", "analytics_view"],
    guest: ["content_view"],
};

export default function RolePermissionMatrix() {
    const [matrix, setMatrix] = useState(initialMatrix);
    const [hasChanges, setHasChanges] = useState(false);

    const togglePermission = (roleId: string, permId: PermissionId) => {
        const currentPerms = matrix[roleId];
        let newPerms;

        if (currentPerms.includes(permId)) {
            newPerms = currentPerms.filter(id => id !== permId);
        } else {
            newPerms = [...currentPerms, permId];
        }

        setMatrix({ ...matrix, [roleId]: newPerms });
        setHasChanges(true);
    };

    const handleSave = () => {
        setHasChanges(false);
    };

    const handleReset = () => {
        setMatrix(initialMatrix);
        setHasChanges(false);
    };

    const categories = Array.from(new Set(permissions.map(p => p.category)));

    return (
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Shield className="h-5 w-5 text-indigo-500" />
                            Access Control Matrix
                        </CardTitle>
                        <CardDescription>Manage granular permissions for each user role.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={handleReset} disabled={!hasChanges} className="text-slate-500">
                            <RotateCcw className="h-4 w-4 mr-2" /> Reset
                        </Button>
                        <Button size="sm" onClick={handleSave} disabled={!hasChanges} className={hasChanges ? "bg-indigo-600 hover:bg-indigo-700" : ""}>
                            <Save className="h-4 w-4 mr-2" /> Save Changes
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
                            <th className="px-6 py-4 text-left font-medium text-slate-500 w-1/3 min-w-[200px]">Permission</th>
                            {roles.map(role => (
                                <th key={role.id} className="px-6 py-4 text-center min-w-[120px]">
                                    <div className="flex flex-col items-center gap-1">
                                        <Badge variant="secondary" className={role.color}>
                                            {role.name}
                                        </Badge>
                                        <span className="text-[10px] font-normal text-slate-400">
                                            {role.usersCount} users
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {categories.map(category => (
                            <>
                                <tr key={category} className="bg-slate-50/50 dark:bg-slate-900/20">
                                    <td colSpan={roles.length + 1} className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                                        {category}
                                    </td>
                                </tr>
                                {permissions.filter(p => p.category === category).map(perm => (
                                    <tr key={perm.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                        <td className="px-6 py-3">
                                            <div className="flex items-center gap-2 group cursor-help">
                                                <span className="font-medium text-slate-700 dark:text-slate-200">{perm.label}</span>
                                                <div title={perm.description}>
                                                    <AlertCircle className="h-3 w-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        </td>
                                        {roles.map(role => {
                                            const isChecked = matrix[role.id].includes(perm.id);
                                            const isLocked = role.id === 'admin' && perm.category === 'Administration'; // Prevent locking out admins

                                            return (
                                                <td key={`${role.id}-${perm.id}`} className="px-6 py-3 text-center">
                                                    <div className="flex justify-center">
                                                        <Checkbox
                                                            checked={isChecked}
                                                            onCheckedChange={() => !isLocked && togglePermission(role.id, perm.id)}
                                                            disabled={isLocked}
                                                            className={isLocked ? "opacity-50 cursor-not-allowed" : ""}
                                                        />
                                                    </div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </>
                        ))}
                    </tbody>
                </table>
            </CardContent>
            <CardFooter className="py-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Lock className="h-3 w-3" />
                    <span>Super Admin permissions cannot be revoked to prevent lockout.</span>
                </div>
            </CardFooter>
        </Card>
    );
}
