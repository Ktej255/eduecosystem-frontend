"use client";

import React from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, AlertCircle, Database, Loader2, CheckCircle2 } from 'lucide-react';
import { useQuestionStore } from '@/store/useQuestionStore';
import { toast } from 'sonner';

export default function QuestionStagingTable() {
    const { 
        stagedQuestions, 
        setStagedQuestions, 
        isUploading, 
        commitBulkUpload,
        clearStagedQuestions 
    } = useQuestionStore();

    if (stagedQuestions.length === 0) return null;

    const handleDeleteRow = (index: number) => {
        const updated = [...stagedQuestions];
        updated.splice(index, 1);
        setStagedQuestions(updated);
    };

    const handleCommit = async () => {
        const result = await commitBulkUpload();
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Staging Area</h2>
                    <p className="text-muted-foreground">Review and fix your questions before saving to the bank.</p>
                </div>
                <div className="flex gap-3">
                    <Button 
                        variant="outline" 
                        onClick={clearStagedQuestions}
                        disabled={isUploading}
                    >
                        Discard All
                    </Button>
                    <Button 
                        className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none"
                        onClick={handleCommit}
                        disabled={isUploading}
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing & Tagging...
                            </>
                        ) : (
                            <>
                                <Database className="mr-2 h-4 w-4" />
                                Commit {stagedQuestions.length} Questions
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <div className="border border-border rounded-xl bg-card overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[400px]">Question</TableHead>
                            <TableHead>Options</TableHead>
                            <TableHead>Correct Answer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {stagedQuestions.map((question, idx) => {
                            const hasCorrect = question.options.some(opt => opt.is_correct);
                            const hasExplanation = !!question.explanation;
                            const isInvalid = !hasCorrect || !hasExplanation;

                            return (
                                <TableRow key={idx} className={isInvalid ? 'bg-red-50/50 dark:bg-red-950/10' : ''}>
                                    <TableCell className="font-medium align-top py-4">
                                        <div className="line-clamp-2" title={question.text}>
                                            {question.text}
                                        </div>
                                    </TableCell>
                                    <TableCell className="align-top py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {question.options.map((opt, i) => (
                                                <Badge key={i} variant={opt.is_correct ? 'default' : 'outline'} className={opt.is_correct ? 'bg-emerald-500 hover:bg-emerald-600' : 'text-[10px]'}>
                                                    {String.fromCharCode(65 + i)}
                                                </Badge>
                                            ))}
                                            <span className="text-xs text-muted-foreground ml-1">
                                                ({question.options.length} total)
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="align-top py-4">
                                        {hasCorrect ? (
                                            <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                                                <CheckCircle2 className="h-3 w-3" />
                                                Found
                                            </div>
                                        ) : (
                                            <div className="text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                                                <AlertCircle className="h-3 w-3" />
                                                Missing
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell className="align-top py-4">
                                        {!hasExplanation && (
                                            <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">No Explanation</Badge>
                                        )}
                                        {hasCorrect && hasExplanation && (
                                            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">Ready</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right align-top py-4">
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-8 w-8 text-muted-foreground hover:text-red-600"
                                            onClick={() => handleDeleteRow(idx)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
            
            {stagedQuestions.some(q => !q.options.some(o => o.is_correct)) && (
                <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900 rounded-xl flex gap-3 items-center">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-sm text-red-800 dark:text-red-400">
                        Some questions are missing a correct answer. These will be highlighted in red. Please fix your CSV or remove them.
                    </p>
                </div>
            )}
        </div>
    );
}
