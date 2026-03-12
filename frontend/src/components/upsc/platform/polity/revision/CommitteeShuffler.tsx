"use client";

import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';
import { COMMITTEE_DATA, COMMITTEE_INFO, CommitteeFact, CommitteeType } from '../data/committee-data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Trophy, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Draggable Fact Card
const DraggableFact = ({ fact }: { fact: CommitteeFact }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: fact.id,
        data: { type: fact.committee }
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="bg-card p-4 rounded-lg border-2 border-stone-200 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md hover:border-stone-400 hover:scale-105 transition-all w-full touch-none z-50 mb-3"
        >
            <div className="flex gap-3 items-start">
                <GripVertical className="text-stone-300 shrink-0 mt-1" size={20} />
                <p className="text-sm font-bold text-stone-700 leading-snug">{fact.text}</p>
            </div>
        </div>
    );
};

// Droppable Committee Bucket
const DroppableBucket = ({ type, items }: { type: CommitteeType, items: CommitteeFact[] }) => {
    const { setNodeRef, isOver } = useDroppable({
        id: type,
    });

    const info = COMMITTEE_INFO[type];

    return (
        <div
            ref={setNodeRef}
            className={`
        flex-1 min-h-[300px] rounded-xl border-4 transition-colors p-4 flex flex-col gap-2 relative overflow-hidden
        ${info.color}
        ${isOver ? 'ring-4 ring-offset-2 ring-stone-900 scale-[1.02]' : ''}
      `}
        >
            <div className="text-center font-black text-lg mb-4 uppercase tracking-wider border-b-2 border-dashed border-stone-900/20 pb-2">
                {info.title}
            </div>

            {/* Dropped Items */}
            {items.map(item => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card/80 backdrop-blur p-2 rounded shadow-sm text-xs font-bold border-l-4 border-stone-800"
                >
                    {item.text}
                </motion.div>
            ))}

            {items.length === 0 && !isOver && (
                <div className="absolute inset-0 flex items-center justify-center opacity-20 text-4xl font-black uppercase -rotate-12 pointer-events-none">
                    Drop Here
                </div>
            )}
        </div>
    );
};

export default function CommitteeShuffler() {
    const [pendingFacts, setPendingFacts] = useState<CommitteeFact[]>(() => {
        // Shuffle initially
        return [...COMMITTEE_DATA].sort(() => Math.random() - 0.5);
    });

    const [buckets, setBuckets] = useState<Record<CommitteeType, CommitteeFact[]>>({
        PAC: [],
        ESTIMATES: [],
        COPU: []
    });

    const [score, setScore] = useState(0);
    const [errors, setErrors] = useState(0);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) return;

        const factId = active.id as string;
        const fact = COMMITTEE_DATA.find(f => f.id === factId);
        const targetBucket = over.id as CommitteeType;

        if (!fact) return;

        if (fact.committee === targetBucket) {
            // Correct Drop
            setScore(s => s + 10);
            setBuckets(prev => ({
                ...prev,
                [targetBucket]: [...prev[targetBucket], fact]
            }));
            setPendingFacts(prev => prev.filter(f => f.id !== factId));
        } else {
            // Incorrect Drop
            setErrors(e => e + 1);
            // Optional: Shake animation or toast could be added here
            // For now, it simply snaps back (default dnd-kit behavior for unhandled drops)
        }
    };

    const handleReset = () => {
        setPendingFacts([...COMMITTEE_DATA].sort(() => Math.random() - 0.5));
        setBuckets({ PAC: [], ESTIMATES: [], COPU: [] });
        setScore(0);
        setErrors(0);
    };

    const isCompleted = pendingFacts.length === 0;

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Card className="w-full bg-stone-100 border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] font-['Kalam']">

                <div className="bg-stone-800 text-white p-4 flex justify-between items-center">
                    <h2 className="text-xl font-black flex items-center gap-2">
                        <Trophy className="text-amber-400" />
                        The Committee Shuffler
                    </h2>
                    <div className="flex gap-4 font-mono font-bold">
                        <div className="text-green-400">Score: {score}</div>
                        <div className="text-red-400">Mistakes: {errors}</div>
                    </div>
                </div>

                <CardContent className="p-6">

                    {/* Buckets Area */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <DroppableBucket type="PAC" items={buckets.PAC} />
                        <DroppableBucket type="ESTIMATES" items={buckets.ESTIMATES} />
                        <DroppableBucket type="COPU" items={buckets.COPU} />
                    </div>

                    {/* Fact Pool Area */}
                    <div className="bg-card rounded-xl border-dashed border-4 border-stone-300 p-6 min-h-[160px] relative">
                        <div className="absolute -top-3 left-4 bg-stone-200 px-3 py-1 rounded text-xs font-black text-stone-600 uppercase">
                            Fact Deck ({pendingFacts.length} remaining)
                        </div>

                        {isCompleted ? (
                            <div className="text-center py-4">
                                <h3 className="text-2xl font-black text-green-600 mb-2">🎉 All Sorted!</h3>
                                <Button onClick={handleReset} className="bg-stone-900 text-white">
                                    <RefreshCw size={16} className="mr-2" /> Play Again
                                </Button>
                            </div>
                        ) : (
                            <div className="max-w-md mx-auto">
                                {/* Show only the top card to avoid clutter, or maybe a few */}
                                {pendingFacts.slice(0, 1).map(fact => (
                                    <DraggableFact key={fact.id} fact={fact} />
                                ))}
                                {pendingFacts.length > 1 && (
                                    <div className="text-center text-xs font-bold text-stone-400 mt-2">
                                        + {pendingFacts.length - 1} more facts waiting...
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </CardContent>
            </Card>
        </DndContext>
    );
}
