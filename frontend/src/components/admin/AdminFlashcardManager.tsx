"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
    Plus, 
    Trash2, 
    ArrowLeft, 
    Save, 
    Loader2, 
    ChevronLeft, 
    ChevronRight,
    Edit2,
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

interface Flashcard {
    id: number;
    question: string;
    answer: string;
    explanation?: string;
    difficulty: number;
    source_type: string;
    created_at: string;
}

export default function AdminFlashcardManager() {
    const router = useRouter();
    const { toast } = useToast();

    // Data
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [total, setTotal] = useState(0);
    const [skip, setSkip] = useState(0);
    const limit = 20;
    const [isLoading, setIsLoading] = useState(true);

    // Edit state
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<Partial<Flashcard>>({});

    const fetchFlashcards = async () => {
        setIsLoading(true);
        try {
            const res = await api.get('/admin/cms/flashcards', { params: { skip, limit } });
            setFlashcards(res.data.items);
            setTotal(res.data.total);
        } catch (error) {
            console.error("Fetch failed:", error);
            toast({
                title: "Error",
                description: "Failed to load flashcards.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFlashcards();
    }, [skip]);

    const handleUpdate = async (id: number) => {
        try {
            await api.patch(`/admin/cms/flashcards/${id}`, editForm);
            setEditingId(null);
            fetchFlashcards();
            toast({ title: "Updated" });
        } catch (error) {
            toast({ title: "Update Failed", variant: "destructive" });
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this card?")) return;
        try {
            await api.delete(`/admin/cms/flashcards/${id}`);
            fetchFlashcards();
            toast({ title: "Deleted" });
        } catch (error) {
            toast({ title: "Delete Failed", variant: "destructive" });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8 min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={() => router.back()}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <div>
                        <h1 className="text-3xl font-black tracking-tight uppercase">Flashcard <span className="text-rose-600">HUB</span></h1>
                        <p className="text-muted-foreground text-sm">Managing AI & Manual Flashcards</p>
                    </div>
                </div>
                
                <Button className="bg-rose-600 hover:bg-rose-700">
                    <Plus className="w-4 h-4 mr-2" /> New Card
                </Button>
            </div>

            <div className="space-y-4">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="w-10 h-10 animate-spin text-rose-600" />
                    </div>
                ) : flashcards.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-slate-900 border-2 border-dashed rounded-3xl">
                        <p className="text-muted-foreground">No flashcards found.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {flashcards.map((f) => (
                                <Card key={f.id} className={`overflow-hidden transition-all ${editingId === f.id ? 'ring-2 ring-rose-500' : 'hover:shadow-md'}`}>
                                    <CardContent className="p-0">
                                        {editingId === f.id ? (
                                            <div className="p-6 space-y-4">
                                                <div className="space-y-2">
                                                    <Label>Question (Front)</Label>
                                                    <Textarea 
                                                        value={editForm.question} 
                                                        onChange={(e) => setEditForm({...editForm, question: e.target.value})}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Answer (Back)</Label>
                                                    <Textarea 
                                                        value={editForm.answer} 
                                                        onChange={(e) => setEditForm({...editForm, answer: e.target.value})}
                                                    />
                                                </div>
                                                <div className="flex justify-end gap-2 pt-2">
                                                    <Button variant="ghost" size="sm" onClick={() => setEditingId(null)}>Cancel</Button>
                                                    <Button className="bg-rose-600" size="sm" onClick={() => handleUpdate(f.id)}>
                                                        <Save className="w-4 h-4 mr-2" /> Save
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-6 flex flex-col h-full">
                                                <div className="flex justify-between items-start mb-4">
                                                    <Badge variant="outline" className="text-[10px] uppercase font-bold">
                                                        {f.source_type}
                                                    </Badge>
                                                    <div className="flex gap-2">
                                                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => { setEditingId(f.id); setEditForm(f); }}>
                                                            <Edit2 className="w-3.5 h-3.5" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="h-7 w-7 text-red-500" onClick={() => handleDelete(f.id)}>
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </Button>
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-4 flex-1">
                                                    <div>
                                                        <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Question</span>
                                                        <p className="text-md font-bold leading-tight mt-1">{f.question}</p>
                                                    </div>
                                                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                                        <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Answer</span>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{f.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between py-8">
                            <p className="text-sm text-muted-foreground">
                                Total <span className="font-bold text-foreground">{total}</span> cards
                            </p>
                            <div className="flex gap-2">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    disabled={skip === 0}
                                    onClick={() => setSkip(Math.max(0, skip - limit))}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    disabled={skip + limit >= total}
                                    onClick={() => setSkip(skip + limit)}
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
