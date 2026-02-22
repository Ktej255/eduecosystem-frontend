"use client";

import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";

interface Lead {
    id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    source: string;
    status: string;
    created_at: string;
}

export default function FunnelLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const res = await api.get("/leads/funnel/list");
                setLeads(res.data);
            } catch (e) {
                console.error("Failed to fetch leads:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchLeads();
    }, []);

    if (loading) return <div className="p-8">Loading leads...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Graphotherapy Funnel Leads</h1>
                    <p className="text-muted-foreground">Users who submitted the analysis funnel</p>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                    {leads.length} Leads
                </Badge>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Submitted</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leads.map((lead) => (
                                <TableRow key={lead.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                            {lead.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-muted-foreground" />
                                            {lead.email}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-muted-foreground" />
                                            {lead.phone || "-"}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-muted-foreground" />
                                            {lead.address || "-"}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={lead.status === "new" ? "default" : "secondary"}>
                                            {lead.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(lead.created_at).toLocaleDateString()}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {leads.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                        No leads yet. Share your funnel link to get started!
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
