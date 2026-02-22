"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
    children: ReactNode;
    name?: string;
}

interface State {
    hasError: boolean;
}

export default class ChartErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(`ChartErrorBoundary [${this.props.name || 'Unknown'}] caught error:`, error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center p-6 border-2 border-dashed border-destructive/20 rounded-2xl bg-destructive/5 text-center transition-colors">
                    <AlertCircle className="w-8 h-8 text-destructive mb-3" />
                    <h4 className="text-sm font-bold text-foreground mb-1">
                        {this.props.name || 'Visualization'} failed to load
                    </h4>
                    <p className="text-xs text-muted-foreground mb-4 max-w-[200px]">
                        There was an error rendering this data.
                    </p>
                    <button
                        onClick={this.handleReset}
                        className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-lg text-xs font-medium hover:bg-muted transition-colors"
                    >
                        <RefreshCw className="w-3 h-3" />
                        Retry
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
