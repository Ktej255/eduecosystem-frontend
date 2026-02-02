"use client";

import React, { useState } from 'react';
import { Card, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, Star, Filter, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// Mock Products
const PRODUCTS = [
    {
        id: 1,
        title: "Polity: Laxmikanth Summarized",
        category: "Notes",
        price: 199,
        rating: 4.8,
        sales: 1200,
        image: "https://placehold.co/400x300/emerald/white?text=Polity",
        isOwned: false
    },
    {
        id: 2,
        title: "Geography: Mapping Mastery",
        category: "Video Course",
        price: 499,
        rating: 4.9,
        sales: 850,
        image: "https://placehold.co/400x300/blue/white?text=Geography",
        isOwned: true
    },
    {
        id: 3,
        title: "Modern History Timeline PDF",
        category: "eBook",
        price: 99,
        rating: 4.5,
        sales: 2300,
        image: "https://placehold.co/400x300/amber/white?text=History",
        isOwned: false
    },
    {
        id: 4,
        title: "CSAT Formulas Cheat Sheet",
        category: "Notes",
        price: 49,
        rating: 4.7,
        sales: 5000,
        image: "https://placehold.co/400x300/purple/white?text=CSAT",
        isOwned: false
    }
];

export default function StudentStorefront() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "All" || p.category === filter;
        return matchesSearch && matchesFilter;
    });

    const handleBuy = (productName: string) => {
        toast.success(`Purchased "${productName}"! Added to your library.`);
    };

    return (
        <div className="space-y-6">
            {/* Header & Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">LMS Marketplace</h1>
                    <p className="text-neutral-500">Premium resources to accelerate your preparation.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                        <Input
                            placeholder="Search resources..."
                            className="pl-9"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Filter className="w-4 h-4" /> Filters
                    </Button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border-neutral-200 dark:border-neutral-800">
                        <div className="h-40 bg-neutral-100 relative">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                            <Badge className="absolute top-2 right-2 bg-black/50 backdrop-blur text-white border-0">
                                {product.category}
                            </Badge>
                        </div>
                        <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between text-xs text-neutral-500">
                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star className="w-3 h-3 fill-current" /> {product.rating}
                                </div>
                                <span>{product.sales} students</span>
                            </div>
                            <h3 className="font-bold text-sm line-clamp-2 h-10">{product.title}</h3>
                            <div className="font-black text-lg">₹{product.price}</div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            {product.isOwned ? (
                                <Button variant="secondary" className="w-full gap-2 text-green-600 bg-green-50 hover:bg-green-100">
                                    <Download className="w-4 h-4" /> Download
                                </Button>
                            ) : (
                                <Button onClick={() => handleBuy(product.title)} className="w-full gap-2 bg-neutral-900 hover:bg-neutral-800 text-white">
                                    <ShoppingCart className="w-4 h-4" /> Buy Now
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
