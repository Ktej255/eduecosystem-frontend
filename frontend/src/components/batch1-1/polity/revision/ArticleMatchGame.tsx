"use client";

import React, { useState, useEffect } from 'react';
import { DndContext, DragOverlay, useDraggable, useDroppable, closestCenter } from '@dnd-kit/core';
import { ARTICLE_MEMORY_DATA, ArticleMemoryItem } from '../data/article-memory-data';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, RotateCcw, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Shuffle helper
const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export default function ArticleMatchGame({ onComplete }: { onComplete?: () => void }) {
    const [articles, setArticles] = useState<ArticleMemoryItem[]>([]);
    const [provisions, setProvisions] = useState<ArticleMemoryItem[]>([]);
    const [matches, setMatches] = useState<Record<string, string>>({}); // provId -> artId
    const [isComplete, setIsComplete] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    // Initialize Game (Pick 5 random pairs)
    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        const randomSelection = shuffle(ARTICLE_MEMORY_DATA).slice(0, 5);
        setArticles(shuffle(randomSelection));
        setProvisions(shuffle(randomSelection));
        setMatches({});
        setIsComplete(false);
    };

    const handleDragStart = (event: any) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (over && over.data.current.type === 'provision') {
            const articleId = active.id;
            const provisionId = over.id;

            // Check if correct match
            const article = ARTICLE_MEMORY_DATA.find(a => a.articleNumber === articleId);
            const provision = ARTICLE_MEMORY_DATA.find(p => p.provision === provisionId);

            if (article && provision && article.articleNumber === provision.articleNumber) {
                // Correct Match
                setMatches(prev => ({ ...prev, [provisionId]: articleId }));
            }
        }
        setActiveId(null);
    };

    // Check Win Condition
    useEffect(() => {
        if (provisions.length > 0 && Object.keys(matches).length === provisions.length) {
            setIsComplete(true);
            if (onComplete) onComplete();
        }
    }, [matches, provisions, onComplete]);

    return (
        <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="max-w-5xl mx-auto p-4 md:p-8 font-['Calibri'] relative">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Match the Articles</h2>
                        <p className="text-slate-500">Drag the Article Number to its correct Provision.</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-black text-blue-600 font-mono">
                            {Object.keys(matches).length} / 5
                        </div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Matches</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Draggable Articles Source */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300 min-h-[400px]">
                        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-wider flex items-center gap-2">
                            Article Numbers
                        </h3>
                        <div className="space-y-4">
                            {articles.map((item) => {
                                const isMatched = Object.values(matches).includes(item.articleNumber);
                                if (isMatched) return null; // Remove if matched

                                return (
                                    <DraggableArticle key={item.articleNumber} id={item.articleNumber} />
                                );
                            })}
                            {Object.keys(matches).length === 5 && (
                                <div className="h-full flex flex-col items-center justify-center text-slate-300">
                                    <CheckCircle2 size={48} className="mb-2 text-green-200" />
                                    <p>All Articles Placed!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Droppable Provisions Target */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-wider">
                            Provisions
                        </h3>
                        {provisions.map((item) => (
                            <DroppableProvision
                                key={item.provision}
                                id={item.provision}
                                matchedArticle={matches[item.provision]}
                            />
                        ))}
                    </div>
                </div>

                {/* Win Overlay */}
                <AnimatePresence>
                    {isComplete && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center rounded-3xl"
                        >
                            <div className="text-center p-8 bg-white shadow-2xl rounded-3xl border border-slate-100 ring-4 ring-blue-50">
                                <div className="inline-block p-4 bg-yellow-100 rounded-full text-yellow-600 mb-4">
                                    <Trophy size={48} />
                                </div>
                                <h2 className="text-4xl font-black text-slate-800 mb-2">Perfect Score!</h2>
                                <p className="text-slate-500 mb-6">You really know your Constitution.</p>
                                <Button size="lg" onClick={resetGame} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 rounded-full">
                                    <RotateCcw className="mr-2" /> Play Again
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <DragOverlay>
                    {activeId ? (
                        <div className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-2xl text-lg w-48 text-center cursor-grabbing transform scale-105 rotate-3">
                            Art. {activeId}
                        </div>
                    ) : null}
                </DragOverlay>

            </div>
        </DndContext>
    );
}

// --- Draggable Component ---
function DraggableArticle({ id }: { id: string }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
        data: { type: 'article' }
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 shadow-sm rounded-xl p-4 cursor-grab active:cursor-grabbing transition-colors flex items-center justify-between group">
            <span className="font-bold text-slate-700 group-hover:text-blue-700 text-lg">Article {id}</span>
            <span className="text-slate-300 group-hover:text-blue-300">::</span>
        </div>
    );
}

// --- Droppable Component ---
function DroppableProvision({ id, matchedArticle }: { id: string, matchedArticle?: string }) {
    const { setNodeRef, isOver } = useDroppable({
        id: id,
        data: { type: 'provision' },
        disabled: !!matchedArticle
    });

    return (
        <div
            ref={setNodeRef}
            className={`
                relative p-4 rounded-xl border-2 transition-all min-h-[80px] flex items-center
                ${matchedArticle
                    ? 'border-green-500 bg-green-50'
                    : isOver
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                        : 'border-slate-200 bg-white'
                }
            `}
        >
            <div className={`flex-1 text-sm font-medium ${matchedArticle ? 'text-green-800' : 'text-slate-700'}`}>
                {id}
            </div>

            {matchedArticle && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-4 bg-green-600 text-white font-bold py-1 px-3 rounded-lg text-sm shadow-sm"
                >
                    Art. {matchedArticle}
                </motion.div>
            )}

            {!matchedArticle && (
                <div className="ml-4 w-12 h-12 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs font-bold bg-slate-50">
                    DROP
                </div>
            )}
        </div>
    );
}
