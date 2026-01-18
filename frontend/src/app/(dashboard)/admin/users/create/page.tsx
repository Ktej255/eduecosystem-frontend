"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function CreateUserPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // TODO: Implement user creation API call
        setTimeout(() => {
            toast.success("User creation feature coming soon!");
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <div className="mb-8">
                <Link
                    href="/admin/users"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Users
                </Link>
                <div className="flex items-center gap-3">
                    <UserPlus className="h-8 w-8 text-indigo-600" />
                    <h1 className="text-3xl font-bold">Create User</h1>
                </div>
                <p className="text-gray-600 mt-2">Add a new user to the platform.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>User Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="••••••••" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Role</Label>
                                <select id="role" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                                    <option value="student">Student</option>
                                    <option value="instructor">Instructor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" asChild>
                                <Link href="/admin/users">Cancel</Link>
                            </Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? "Creating..." : "Create User"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
