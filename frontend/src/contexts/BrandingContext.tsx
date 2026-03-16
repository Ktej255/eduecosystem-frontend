"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeConfig {
    primary_color?: string;
    font?: string;
}

interface BrandingData {
    organization_id: number | null;
    organization_name: string;
    logo_url: string;
    theme_config: ThemeConfig;
    hero_text: string;
    is_custom_domain: boolean;
}

interface BrandingContextType {
    branding: BrandingData | null;
    isLoading: boolean;
}

const defaultBranding: BrandingData = {
    organization_id: null,
    organization_name: "Eduecosystem",
    logo_url: "/logo.png",
    theme_config: { primary_color: "#6366f1" },
    hero_text: "Transform Your Mind Through Graphotherapy",
    is_custom_domain: false
};

const BrandingContext = createContext<BrandingContextType>({
    branding: defaultBranding,
    isLoading: true
});

export function BrandingProvider({ children }: { children: React.ReactNode }) {
    const [branding, setBranding] = useState<BrandingData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBranding = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/branding`);
                if (res.ok) {
                    const data = await res.json();
                    setBranding(data);

                    // Apply theme to CSS variables
                    if (data.theme_config?.primary_color) {
                        document.documentElement.style.setProperty('--brand-primary', data.theme_config.primary_color);
                    }
                } else {
                    setBranding(defaultBranding);
                }
            } catch (error) {
                console.error("Failed to fetch branding:", error);
                setBranding(defaultBranding);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBranding();
    }, []);

    return (
        <BrandingContext.Provider value={{ branding, isLoading }}>
            {children}
        </BrandingContext.Provider>
    );
}

export function useBranding() {
    return useContext(BrandingContext);
}
