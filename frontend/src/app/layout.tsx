import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { ToastProvider } from "@/components/ui/Toast";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { ThemeProvider } from "@/components/theme-provider";
import AIChatWidget from "@/components/chat/AIChatWidget";
import BuildInfo from "@/components/BuildInfo";
import { BrandingProvider } from "@/contexts/BrandingContext";
import ServiceWorkerRegister from "@/components/pwa/ServiceWorkerRegister";
import { GamificationProvider } from "@/context/GamificationContext";
import { PurchaseProvider } from "@/context/PurchaseContext";
import { HabitProvider } from "@/context/HabitContext";
import { CommunityProvider } from "@/context/CommunityContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Organic Futurism Typography
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Holistic Learning Ecosystem",
  description: "AI-powered learning platform with wellness and gamification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <BrandingProvider>
              <AuthProvider>
                <ToastProvider>
                  <PurchaseProvider>
                    <GamificationProvider>
                      <HabitProvider>
                        <CommunityProvider>
                          <ServiceWorkerRegister />
                          {children}
                          <AIChatWidget />
                          <BuildInfo />
                        </CommunityProvider>
                      </HabitProvider>
                    </GamificationProvider>
                  </PurchaseProvider>
                </ToastProvider>
              </AuthProvider>
            </BrandingProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

