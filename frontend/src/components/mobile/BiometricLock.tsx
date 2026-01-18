"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Fingerprint, Lock, Unlock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export function BiometricLock() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if WebAuthn is supported
        if (window.PublicKeyCredential) {
            setIsSupported(true);
        }
        const savedState = localStorage.getItem("biometric_enabled");
        if (savedState === "true") setIsEnabled(true);
    }, []);

    const handleToggle = async (checked: boolean) => {
        if (checked) {
            // enable
            const success = await registerBiometric();
            if (success) {
                setIsEnabled(true);
                localStorage.setItem("biometric_enabled", "true");
                toast.success("Biometric Login Enabled");
            }
        } else {
            // disable
            setIsEnabled(false);
            localStorage.setItem("biometric_enabled", "false");
            toast.info("Biometric Login Disabled");
        }
    };

    const registerBiometric = async () => {
        try {
            // In a real app, challenge comes from server
            const challenge = new Uint8Array(32);
            window.crypto.getRandomValues(challenge);

            const publicKey: PublicKeyCredentialCreationOptions = {
                challenge,
                rp: {
                    name: "Eduecosystem",
                    id: window.location.hostname,
                },
                user: {
                    id: new Uint8Array(16),
                    name: "user@example.com",
                    displayName: "User Name",
                },
                pubKeyCredParams: [{ alg: -7, type: "public-key" }],
                authenticatorSelection: {
                    authenticatorAttachment: "platform", // FaceID / TouchID
                    userVerification: "required",
                },
                timeout: 60000,
            };

            await navigator.credentials.create({ publicKey });
            return true;
        } catch (error) {
            console.error("Biometric registration failed", error);
            toast.error("Biometric registration failed. Ensure your device supports FaceID/TouchID.");
            return false;
        }
    };

    const authenticate = async () => {
        try {
            const challenge = new Uint8Array(32);
            window.crypto.getRandomValues(challenge);

            const publicKey: PublicKeyCredentialRequestOptions = {
                challenge,
                rpId: window.location.hostname,
                userVerification: "required"
            };

            await navigator.credentials.get({ publicKey });
            setIsAuthenticated(true);
            toast.success("Identity Verified");
        } catch (error) {
            console.error("Auth failed", error);
            toast.error("Authentication failed");
        }
    };

    if (!isSupported) return null;

    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Fingerprint className="w-5 h-5 text-cyan-500" />
                    Biometric Security
                </CardTitle>
                <CardDescription>
                    Secure your vault with FaceID or TouchID.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">Enable Biometric Login</span>
                    </div>
                    <Switch checked={isEnabled} onCheckedChange={handleToggle} />
                </div>

                {isEnabled && (
                    <div className="p-4 bg-black/40 rounded-lg border border-gray-800 flex flex-col items-center justify-center gap-3">
                        <div className={`p-3 rounded-full ${isAuthenticated ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}>
                            {isAuthenticated ? <Unlock className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                        </div>
                        <p className="text-xs text-center text-gray-500">
                            {isAuthenticated ? "Session Secure & Verified" : "Verification Required for Sensitive Actions"}
                        </p>
                        {!isAuthenticated && (
                            <Button onClick={authenticate} variant="secondary" size="sm">
                                Verify Identity
                            </Button>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
