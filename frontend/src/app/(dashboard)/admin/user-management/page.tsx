"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Search, UserCheck, Shield, BookOpen, MoreVertical, Edit, Trash, Eye, CheckCircle2, XCircle } from "lucide-react";
import api from "@/lib/api";
import { format } from "date-fns";
import Link from "next/link";

interface User {
    id: number;
    email: string;
    full_name: string;
    role: string;
    is_active: boolean;
    created_at: string;
    last_login: string | null;
    is_batch1_authorized: boolean;
    is_ras_authorized: boolean;
}

export default function UserManagementPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterRole, setFilterRole] = useState<string>("all");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await api.get("/admin/users?limit=200");
            setUsers(res.data.users || []);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (userId: number, currentStatus: boolean) => {
        // Optimistic update
        setUsers(users.map(u => u.id === userId ? { ...u, is_active: !currentStatus } : u));
        try {
            await api.put(`/admin/users/${userId}/status`, { is_active: !currentStatus });
        } catch (error) {
            console.error("Failed to update status", error);
            // Revert
            setUsers(users.map(u => u.id === userId ? { ...u, is_active: currentStatus } : u));
        }
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = user?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (user?.full_name && user?.full_name.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesRole = filterRole === "all" || user?.role === filterRole;
        if (filterRole === "batch1") return matchesSearch && user?.is_batch1_authorized;

        return matchesSearch && matchesRole;
    });

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-muted-foreground">Manage student access, roles, and permissions.</p>
                </div>
                <Link href="/admin/users/create">
                    <Button>
                        <UserCheck className="mr-2 h-4 w-4" /> Add User
                    </Button>
                </Link>
            </div>

            <Card>
                <CardHeader className="pb-3 md:flex-row md:items-center justify-between gap-4">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name or email..."
                            className="pl-9"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex space-x-1 bg-muted p-1 rounded-lg">
                            {['all', 'student', 'teacher', 'admin', 'batch1'].map((role) => (
                                <button
                                    key={role}
                                    onClick={() => setFilterRole(role)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${filterRole === role
                                            ? 'bg-card shadow text-indigo-600'
                                            : 'text-muted-foreground hover:text-muted-foreground'
                                        }`}
                                >
                                    {role.charAt(0).toUpperCase() + role.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>User</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Access</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Joined</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">Loading users...</TableCell>
                                    </TableRow>
                                ) : filteredUsers.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">No users found.</TableCell>
                                    </TableRow>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <TableRow key={user?.id}>
                                            <TableCell>
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{user?.full_name || "N/A"}</span>
                                                    <span className="text-xs text-muted-foreground">{user?.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className={
                                                    user?.role === 'admin' ? 'bg-red-50 text-red-700' :
                                                        user?.role === 'teacher' ? 'bg-green-50 text-green-700' :
                                                            'bg-blue-50 text-blue-700'
                                                }>
                                                    {user?.role}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-1">
                                                    {user?.is_batch1_authorized && (
                                                        <Badge className="bg-purple-100 text-purple-700 text-[10px] pointer-events-none hover:bg-purple-100">Batch 1</Badge>
                                                    )}
                                                    {user?.is_ras_authorized && (
                                                        <Badge className="bg-orange-100 text-orange-700 text-[10px] pointer-events-none hover:bg-orange-100">RAS</Badge>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <button onClick={() => toggleStatus(user?.id, user?.is_active)}>
                                                    {user?.is_active ? (
                                                        <div className="flex items-center text-green-600 text-xs font-medium">
                                                            <CheckCircle2 className="h-4 w-4 mr-1" /> Active
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center text-muted-foreground text-xs font-medium">
                                                            <XCircle className="h-4 w-4 mr-1" /> Inactive
                                                        </div>
                                                    )}
                                                </button>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground text-xs">
                                                {user?.created_at ? format(new Date(user.created_at), 'MMM d, yyyy') : 'N/A'}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Link href={`/admin/users/${user?.id}`}>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
