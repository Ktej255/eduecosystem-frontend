import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, BookOpen, ChevronRight, FileText, Image as ImageIcon } from 'lucide-react';

interface ReadingMaterialProps {
    subtopicIds: string[];
    onComplete: () => void;
    dayId?: number;
}

// Placeholder data - in future this will come from a registry similar to Flashcards/MCQs
const READING_MATERIAL_DB: Record<string, { type: 'image' | 'pdf' | 'text', content: string, title: string }[]> = {
    '1.1': [
        { type: 'text', title: 'Introduction to Historical Background', content: 'The Company Rule (1773-1858) and The Crown Rule (1858-1947) laid the foundation of Indian administration.' }
    ]
    // Add more mappings here
};

export default function ReadingMaterial({ subtopicIds, onComplete, dayId }: ReadingMaterialProps) {
    const [page, setPage] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5); // Minimum read time of 5 seconds to prevent instant skipping
    const [canProceed, setCanProceed] = useState(false);

    // Aggregate materials for selected subtopics
    const materials = subtopicIds.flatMap(id => READING_MATERIAL_DB[id] || []).concat([
        // Default material if nothing specific found
        {
            type: 'text',
            title: 'Key Concepts Review',
            content: 'Review the provided charts and summary notes for this section. Ensure you understand the distinction between the concepts covered in the MCQs.'
        }
    ]);

    const currentMaterial = materials[page];
    const isLastPage = page === materials.length - 1;

    useEffect(() => {
        setCanProceed(false);
        setTimeLeft(5);
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setCanProceed(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [page]);

    const handleNext = () => {
        if (isLastPage) {
            onComplete();
        } else {
            setPage(prev => prev + 1);
        }
    };

    return (
        <div className="max-w-3xl mx-auto animate-in fade-in duration-300">
            <Card className="border-indigo-200 shadow-md">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-indigo-600" />
                            <CardTitle>Reading Material</CardTitle>
                        </div>
                        <span className="text-sm text-muted-foreground">
                            Page {page + 1} of {materials.length}
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="min-h-[300px] bg-muted rounded-lg p-6 border border-border flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            {currentMaterial.title}
                        </h3>

                        {currentMaterial.type === 'text' && (
                            <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-2xl">
                                {currentMaterial.content}
                            </p>
                        )}

                        {currentMaterial.type === 'image' && (
                            <div className="flex flex-col items-center">
                                <ImageIcon className="h-12 w-12 text-muted-foreground mb-2" />
                                <p className="text-muted-foreground">Image content would be displayed here</p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end items-center gap-4">
                        {!canProceed && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Reading... {timeLeft}s
                            </span>
                        )}
                        <Button
                            onClick={handleNext}
                            disabled={!canProceed}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[120px]"
                        >
                            {isLastPage ? 'Finish Reading' : 'Next Page'}
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
