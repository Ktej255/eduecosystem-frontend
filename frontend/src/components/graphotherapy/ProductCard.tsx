import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    price: string;
    duration?: string;
    features: string[];
    isPopular?: boolean;
    onBuy: () => void;
}

export default function ProductCard({
    title,
    description,
    price,
    duration,
    features,
    isPopular,
    onBuy
}: ProductCardProps) {
    return (
        <Card className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-purple-500 shadow-md scale-105 z-10' : 'border-gray-200'}`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Most Popular
                    </span>
                </div>
            )}

            <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-2">{description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
                <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</span>
                    {duration && <span className="text-gray-500 ml-2">/ {duration}</span>}
                </div>

                <ul className="space-y-3">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter>
                <Button onClick={onBuy} className={`w-full group ${isPopular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </CardFooter>
        </Card>
    );
}
