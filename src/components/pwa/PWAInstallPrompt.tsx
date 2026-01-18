"use client"

import { useState, useEffect } from "react"
import { X, Download, Smartphone, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const DISMISS_KEY = 'edueco_pwa_install_dismissed'

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [showPrompt, setShowPrompt] = useState(false)
    const [isIOS, setIsIOS] = useState(false)
    const [isInstalled, setIsInstalled] = useState(false)

    useEffect(() => {
        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true)
            return
        }

        // Check if dismissed recently (within 7 days)
        const dismissedAt = localStorage.getItem(DISMISS_KEY)
        if (dismissedAt) {
            const daysSinceDismiss = (Date.now() - parseInt(dismissedAt)) / (1000 * 60 * 60 * 24)
            if (daysSinceDismiss < 7) return
        }

        // Detect iOS
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
        setIsIOS(isIOSDevice)

        // Listen for beforeinstallprompt (Chrome, Edge, Samsung Internet)
        const handler = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e as BeforeInstallPromptEvent)
            // Show after a delay
            setTimeout(() => setShowPrompt(true), 3000)
        }

        window.addEventListener('beforeinstallprompt', handler)

        // For iOS, show after delay if not installed
        if (isIOSDevice) {
            setTimeout(() => setShowPrompt(true), 5000)
        }

        return () => window.removeEventListener('beforeinstallprompt', handler)
    }, [])

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt()
            const { outcome } = await deferredPrompt.userChoice
            if (outcome === 'accepted') {
                setIsInstalled(true)
            }
            setDeferredPrompt(null)
        }
        setShowPrompt(false)
    }

    const handleDismiss = () => {
        localStorage.setItem(DISMISS_KEY, Date.now().toString())
        setShowPrompt(false)
    }

    if (isInstalled || !showPrompt) return null

    return (
        <div className={cn(
            "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50",
            "bg-gradient-to-r from-gray-900 to-indigo-950 rounded-2xl shadow-2xl shadow-indigo-500/20",
            "border border-indigo-500/30 p-4",
            "animate-in slide-in-from-bottom duration-500"
        )}>
            <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
            >
                <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white mb-1">Install Eduecosystem</h3>
                    <p className="text-gray-400 text-sm mb-3">
                        {isIOS
                            ? "Tap the share button and 'Add to Home Screen'"
                            : "Get quick access and offline support"
                        }
                    </p>

                    {isIOS ? (
                        <div className="flex items-center gap-2 text-xs text-indigo-300">
                            <span className="px-2 py-1 bg-indigo-500/20 rounded">1. Tap</span>
                            <Plus className="w-4 h-4" />
                            <span className="px-2 py-1 bg-indigo-500/20 rounded">2. Add to Home</span>
                        </div>
                    ) : (
                        <Button
                            onClick={handleInstall}
                            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm h-9"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Install App
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
