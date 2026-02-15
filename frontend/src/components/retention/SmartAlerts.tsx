"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    AlertTriangle,
    Bell,
    Brain,
    Clock,
    Flame,
    TrendingDown,
    Zap,
    X,
    ChevronRight,
} from "lucide-react";

interface Alert {
    id: number;
    topicId: string;
    topicName: string;
    type: "critical" | "warning" | "reminder";
    message: string;
    daysOverdue?: number;
    retention: number;
}

interface SmartAlertsProps {
    alerts: Alert[];
    onDismiss?: (id: number) => void;
    onAction?: (topicId: string) => void;
}

export default function SmartAlerts({
    alerts,
    onDismiss,
    onAction,
}: SmartAlertsProps) {
    const getAlertStyle = (type: Alert["type"]) => {
        switch (type) {
            case "critical":
                return {
                    bg: "bg-gradient-to-r from-red-500/20 to-orange-500/20",
                    border: "border-red-500/50",
                    icon: Flame,
                    iconColor: "text-red-400",
                    pulse: true,
                };
            case "warning":
                return {
                    bg: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20",
                    border: "border-yellow-500/50",
                    icon: AlertTriangle,
                    iconColor: "text-yellow-400",
                    pulse: false,
                };
            case "reminder":
                return {
                    bg: "bg-gradient-to-r from-blue-500/20 to-indigo-500/20",
                    border: "border-blue-500/50",
                    icon: Clock,
                    iconColor: "text-blue-400",
                    pulse: false,
                };
        }
    };

    if (alerts.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800"
            >
                <div className="flex items-center justify-center gap-3 text-gray-400">
                    <Brain className="w-6 h-6 text-green-400" />
                    <span className="text-lg">All caught up! Your knowledge is strong.</span>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    >
                        <Bell className="w-5 h-5 text-indigo-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">Smart Alerts</h3>
                    <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                        {alerts.length}
                    </span>
                </div>
            </div>

            {/* Alert Cards */}
            <AnimatePresence>
                {alerts.map((alert, index) => {
                    const style = getAlertStyle(alert.type);
                    const Icon = style.icon;

                    return (
                        <motion.div
                            key={alert.id}
                            initial={{ opacity: 0, x: -50, height: 0 }}
                            animate={{ opacity: 1, x: 0, height: "auto" }}
                            exit={{ opacity: 0, x: 50, height: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                                p-4 rounded-xl ${style.bg} border ${style.border}
                                relative overflow-hidden
                            `}
                        >
                            {/* Pulse effect for critical */}
                            {style.pulse && (
                                <motion.div
                                    animate={{
                                        opacity: [0.5, 0, 0.5],
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="absolute inset-0 bg-red-500/10 pointer-events-none"
                                />
                            )}

                            <div className="flex items-start justify-between relative z-10">
                                <div className="flex items-start gap-3">
                                    <motion.div
                                        animate={
                                            style.pulse
                                                ? {
                                                    scale: [1, 1.2, 1],
                                                }
                                                : {}
                                        }
                                        transition={{
                                            duration: 0.5,
                                            repeat: style.pulse ? Infinity : 0,
                                            repeatDelay: 1,
                                        }}
                                        className={`w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center ${style.iconColor}`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.div>

                                    <div>
                                        <h4 className="text-white font-medium">
                                            {alert.topicName}
                                        </h4>
                                        <p className="text-sm text-gray-400 mt-0.5">
                                            {alert.message}
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span
                                                className={`text-sm font-medium ${alert.retention < 0.5
                                                    ? "text-red-400"
                                                    : alert.retention < 0.7
                                                        ? "text-yellow-400"
                                                        : "text-green-400"
                                                    }`}
                                            >
                                                {(alert.retention * 100).toFixed(0)}% retention
                                            </span>
                                            {alert.daysOverdue && alert.daysOverdue > 0 && (
                                                <span className="text-sm text-red-400 flex items-center gap-1">
                                                    <TrendingDown className="w-3 h-3" />
                                                    {alert.daysOverdue} days overdue
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => onAction?.(alert.topicId)}
                                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
                                    >
                                        <Zap className="w-3.5 h-3.5" />
                                        Review Now
                                    </motion.button>

                                    {onDismiss && (
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => onDismiss(alert.id)}
                                            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
