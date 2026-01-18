"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { offlineVault, VaultItem } from "@/services/offline-vault";
import { BiometricLock } from "@/components/mobile/BiometricLock";
import { Wifi, WifiOff, FileText, Video, Book, Trash2, Download } from "lucide-react";
import { toast } from "sonner";

export default function VaultPage() {
    const [items, setItems] = useState<VaultItem[]>([]);
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        loadVault();
        // Listen for online/offline status
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Initial check
        setIsOffline(!navigator.onLine);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    const loadVault = async () => {
        try {
            const data = await offlineVault.listVaultItems();
            setItems(data);
        } catch (e) {
            console.error(e);
        }
    };

    const deleteItem = async (id: string) => {
        await offlineVault.removeItem(id);
        loadVault();
        toast.success("Item removed from vault");
    };

    // Demo function to add test item
    const addTestItem = async () => {
        await offlineVault.saveToVault({
            id: `demo_${Date.now()}`,
            type: "pdf",
            title: "Constitution Notes (Offline)",
            content: "Mock Content",
            timestamp: Date.now()
        });
        loadVault();
        toast.success("Demo item saved to vault");
    };

    const getIcon = (type: string) => {
        switch (type) {
            case "pdf": return FileText;
            case "video": return Video;
            default: return Book;
        }
    };

    return (
        <div className="container mx-auto p-4 space-y-6 max-w-lg">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    Secure Vault
                    {isOffline ? <WifiOff className="text-red-500 w-5 h-5" /> : <Wifi className="text-green-500 w-5 h-5" />}
                </h1>
                <Badge variant={isOffline ? "destructive" : "secondary"}>
                    {isOffline ? "Offline Mode" : "Online"}
                </Badge>
            </div>

            <BiometricLock />

            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center text-lg">
                        <span>Downloaded Content</span>
                        <Button variant="ghost" size="sm" onClick={addTestItem}>
                            <Download className="w-4 h-4 mr-2" />
                            Save Test Item
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {items.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            Vault is empty. Download content to access it offline.
                        </div>
                    ) : (
                        items.map((item) => {
                            const Icon = getIcon(item.type);
                            return (
                                <div key={item.id} className="p-3 bg-gray-800 rounded-lg flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-gray-700 rounded text-cyan-500">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-gray-200">{item.title}</p>
                                            <p className="text-xs text-gray-500">{new Date(item.timestamp).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            );
                        })
                    )}
                </CardContent>
            </Card>

            {/* Simulation Helper */}
            {!isOffline && (
                <p className="text-xs text-gray-500 text-center">
                    Tip: Turn off your internet connection to test the offline capabilities fully.
                </p>
            )}
        </div>
    );
}
