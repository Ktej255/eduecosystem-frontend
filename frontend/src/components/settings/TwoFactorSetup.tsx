"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Smartphone, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function TwoFactorSetup() {
    const [step, setStep] = useState<"initial" | "scan" | "verify" | "success">("initial");
    const [loading, setLoading] = useState(false);
    const [qrCode, setQrCode] = useState<string>("");
    const [secret, setSecret] = useState<string>("");
    const [verificationCode, setVerificationCode] = useState("");

    const startSetup = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token") || localStorage.getItem("access_token");
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/2fa/setup`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!res.ok) throw new Error("Failed to start setup");

            const data = await res.json();
            setQrCode(data.qr_code_url);
            setSecret(data.secret);
            setStep("scan");
        } catch (error) {
            toast.error("Could not generate QR code");
        } finally {
            setLoading(false);
        }
    };

    const verifyCode = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token") || localStorage.getItem("access_token");
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/2fa/verify`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: verificationCode,
                    secret: secret
                })
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.detail || "Invalid code");
            }

            setStep("success");
            toast.success("Two-Factor Authentication Enabled!");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    <CardTitle>Two-Factor Authentication</CardTitle>
                </div>
                <CardDescription>
                    Secure your account with TOTP (Google Authenticator, Authy)
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {step === "initial" && (
                    <div className="text-center space-y-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                            <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Add an extra layer of security to your account. You'll need an authenticator app to complete setup.
                        </p>
                        <Button onClick={startSetup} disabled={loading} className="w-full">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Enable 2FA
                        </Button>
                    </div>
                )}

                {step === "scan" && (
                    <div className="space-y-4 text-center">
                        <p className="text-sm font-medium">1. Scan this QR Code with your app</p>
                        <div className="flex justify-center border p-2 rounded-lg bg-white w-fit mx-auto">
                            {qrCode && <img src={qrCode} alt="2FA QR Code" className="w-48 h-48" />}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="code">2. Enter the 6-digit code</Label>
                            <Input
                                id="code"
                                placeholder="000 000"
                                className="text-center text-lg tracking-widest"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                maxLength={6}
                            />
                        </div>
                        <Button onClick={verifyCode} disabled={loading || getVerificationCode(verificationCode).length !== 6} className="w-full">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Verify & Enable
                        </Button>
                    </div>
                )}

                {step === "success" && (
                    <div className="text-center space-y-4 py-6">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                        <h3 className="text-xl font-bold">You're Secured!</h3>
                        <p className="text-gray-500">
                            Two-factor authentication is now enabled on your account.
                        </p>
                        <Button variant="outline" onClick={() => setStep("initial")} className="w-full">
                            Done
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

function getVerificationCode(code: string) {
    return code.replace(/\s/g, "");
}
