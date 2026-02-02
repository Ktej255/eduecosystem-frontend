"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, DollarSign, Package, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ProductBuilder() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("notes");
    const [description, setDescription] = useState("");
    const [isPublishing, setIsPublishing] = useState(false);

    const handlePublish = () => {
        if (!title || !price || !category) {
            toast.error("Please complete all required fields");
            return;
        }

        setIsPublishing(true);
        // Simulate API call
        setTimeout(() => {
            toast.success("Product published to Marketplace!");
            setIsPublishing(false);
            // Reset form
            setTitle("");
            setPrice("");
            setDescription("");
        }, 2000);
    };

    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-600">
                    <Package className="w-5 h-5" />
                    Create Digital Product
                </CardTitle>
                <p className="text-xs text-neutral-500">Upload notes, eBooks, or courses to sell in the student marketplace.</p>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* File Upload Zone */}
                <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                        <Upload className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-300">Upload Product File</h3>
                    <p className="text-xs text-neutral-400 mt-1">PDF, EPUB, or ZIP (Max 50MB)</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Product Title</Label>
                        <Input
                            placeholder="e.g. Complete Polity Revision Notes"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Category</Label>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="notes">Lecture Notes</SelectItem>
                                    <SelectItem value="ebook">eBook</SelectItem>
                                    <SelectItem value="video">Video Course</SelectItem>
                                    <SelectItem value="test">Test Series</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Price (INR)</Label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                                <Input
                                    type="number"
                                    className="pl-9"
                                    placeholder="299"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                            placeholder="What will students learn from this?"
                            className="h-24"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Cover Image</Label>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                                <ImageIcon className="w-6 h-6 text-neutral-400" />
                            </div>
                            <Button variant="outline" size="sm">Choose Image</Button>
                        </div>
                    </div>
                </div>

                <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12"
                    onClick={handlePublish}
                    disabled={isPublishing}
                >
                    {isPublishing ? (
                        <span className="flex items-center gap-2 animate-pulse">
                            <CheckCircle className="w-5 h-5" /> Publishing...
                        </span>
                    ) : (
                        "Publish Product"
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}
