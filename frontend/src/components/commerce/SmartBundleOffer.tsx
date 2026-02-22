"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Tag, X, Sparkles, ArrowRight } from "lucide-react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type Product = {
    title: string;
    description: string;
    original_price: number;
    discounted_price: number;
    image_url: string;
};

type Offer = {
    id: string;
    type: string;
    reason: string;
    product: Product;
    expires_in_seconds: number;
    discount_code: string;
};

export function SmartBundleOffer() {
    const [offer, setOffer] = useState<Offer | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        fetchOffer();
    }, []);

    const fetchOffer = async () => {
        try {
            const token = localStorage.getItem("token") || localStorage.getItem("access_token");
            const res = await axios.get(`${API_URL}/api/v1/commerce/smart-bundle`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setOffer(res.data);
        } catch (error) {
            console.error("Failed to fetch smart offer", error);
            // Fallback for Demo
            //    setOffer({
            //      id: "demo",
            //      type: "smart_bundle",
            //      reason: "We noticed you're struggling with History. Let's fix that.",
            //      product: {
            //          title: "History Timestamp",
            //          description: "Never forget a date again. Complete visual timeline course.",
            //          original_price: 3999,
            //          discounted_price: 1999,
            //          image_url: ""
            //      },
            //      expires_in_seconds: 86400,
            //      discount_code: "SMART50"
            //    });
        }
    };

    if (!offer || !isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8"
            >
                <Card className="bg-gradient-to-r from-indigo-900 to-purple-900 border-purple-500 overflow-hidden relative shadow-2xl">
                    {/* Decorative Sparkles */}
                    <Sparkles className="absolute top-2 left-2 text-yellow-400 w-5 h-5 animate-pulse" />
                    <Sparkles className="absolute bottom-4 right-10 text-pink-400 w-4 h-4 animate-bounce" />

                    <CardContent className="p-0 flex flex-col md:flex-row relative z-10">
                        <div className="p-6 flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                                    <Timer className="w-3 h-3" />
                                    Limited Time Offer
                                </div>
                                <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-white">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1">{offer.product.title}</h3>
                            <p className="text-purple-200 text-sm mb-4">{offer.reason}</p>
                            <div className="text-muted-foreground text-xs mb-4">{offer.product.description}</div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-white">₹{offer.product.discounted_price}</span>
                                    <span className="text-muted-foreground line-through text-sm">₹{offer.product.original_price}</span>
                                </div>
                                <Button className="bg-card text-purple-900 hover:bg-muted font-bold">
                                    Unlock Bundle <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>

                        {/* Right Side / Image Placeholder */}
                        <div className="bg-purple-800/50 w-full md:w-1/3 p-6 flex items-center justify-center flex-col text-center border-l border-purple-700/50">
                            <Tag className="w-12 h-12 text-pink-400 mb-2" />
                            <div className="text-pink-300 font-mono text-sm">Use Code</div>
                            <div className="text-white font-bold text-xl tracking-widest border border-dashed border-pink-400/50 px-3 py-1 rounded mt-1">
                                {offer.discount_code}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
