"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    children: ReactNode;
    fallbackTitle?: string;
    fallbackMessage?: string;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        // Optional: Clear specific local storage keys if they are suspected culprits
        // localStorage.removeItem('batch11_active_tab');
        window.location.reload();
    };

    private handleGoHome = () => {
        window.location.href = '/student/dashboard';
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center bg-red-50 dark:bg-red-900/10 rounded-xl border-2 border-red-200 dark:border-red-800 m-4">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {this.props.fallbackTitle || "Something went wrong"}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
                        {this.props.fallbackMessage ||
                            "We encountered an unexpected error while loading this section. This might be due to a temporary glitch or a data issue."}
                    </p>

                    {this.state.error && (
                        <div className="w-full max-w-lg p-4 bg-black/5 rounded-lg mb-6 text-left overflow-auto max-h-40">
                            <p className="font-mono text-xs text-red-600 dark:text-red-400 font-bold">
                                Error: {this.state.error.toString()}
                            </p>
                            {this.state.errorInfo && (
                                <pre className="font-mono text-[10px] text-gray-500 mt-2 whitespace-pre-wrap">
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            )}
                        </div>
                    )}

                    <div className="flex gap-4">
                        <Button
                            onClick={this.handleGoHome}
                            variant="outline"
                            className="gap-2"
                        >
                            <Home className="w-4 h-4" />
                            Go to Dashboard
                        </Button>
                        <Button
                            onClick={this.handleReset}
                            className="bg-red-600 hover:bg-red-700 text-white gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Reload Page
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
