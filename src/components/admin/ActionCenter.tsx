"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminActionCenter() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="text-lg">Admin Action Center</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center p-6 text-gray-500 text-sm">
                    <p>Action Center is temporarily disabled.</p>
                    <p>This module is under development.</p>
                </div>
            </CardContent>
        </Card>
    )
}
