"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Book, FileText, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { getBookChapters } from '@/data/upsc-chapter-registry';

export default function UPSCGlobalSearch() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const hits: any[] = [];

        // Search Catalog
        UPSC_CATALOG.forEach(subject => {
            if (subject.title.toLowerCase().includes(lowerQuery)) {
                hits.push({ type: 'subject', title: subject.title, id: subject.id, url: `/student/upsc/${subject.id}` });
            }
            subject.books.forEach(book => {
                if (book.title.toLowerCase().includes(lowerQuery) || book.author?.toLowerCase().includes(lowerQuery)) {
                    hits.push({ type: 'book', title: book.title, subtitle: book.author, id: book.id, url: `/student/upsc/${subject.id}/${book.id}` });
                }

                // Search Chapters (Limit to top matches to avoid lag)
                if (query.length > 2) {
                    const chapters = getBookChapters(book.id);
                    chapters.forEach(ch => {
                        if (ch.title.toLowerCase().includes(lowerQuery)) {
                            hits.push({
                                type: 'chapter',
                                title: ch.title,
                                subtitle: `${book.title} • Ch ${ch.id}`,
                                id: ch.id,
                                url: `/student/upsc/${subject.id}/${book.id}/chapter/${ch.id}`
                            });
                        }
                    });
                }
            });
        });

        setResults(hits.slice(0, 10)); // Limit results
    }, [query]);

    const handleSelect = (url: string) => {
        setOpen(false);
        router.push(url);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="relative w-full max-w-xl cursor-pointer group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="block w-full pl-10 pr-3 py-3 border border-border rounded-xl leading-5 bg-card dark:bg-[#111] text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm group-hover:shadow-md transition-all">
                        Search books, chapters, or topics...
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-muted-foreground text-xs border border-border rounded px-1.5 py-0.5">Ctrl K</span>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-2xl bg-card dark:bg-[#111] overflow-hidden">
                <div className="flex items-center border-b border-border px-4">
                    <Search className="mr-2 h-5 w-5 text-muted-foreground" />
                    <Input
                        className="border-0 focus-visible:ring-0 px-0 py-4 text-lg bg-transparent"
                        placeholder="Type to search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                </div>
                <div className="max-h-[60vh] overflow-y-auto p-2">
                    {results.length === 0 && query && (
                        <p className="p-4 text-center text-muted-foreground">No results found.</p>
                    )}
                    {results.length === 0 && !query && (
                        <div className="p-8 text-center text-muted-foreground">
                            <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
                            <p>Search across 15+ books and 300+ chapters.</p>
                        </div>
                    )}
                    {results.map((result, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleSelect(result.url)}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted dark:hover:bg-gray-800 cursor-pointer transition-colors"
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                                ${result.type === 'book' ? 'bg-blue-100 text-blue-600' :
                                    result.type === 'chapter' ? 'bg-orange-100 text-orange-600' : 'bg-muted text-muted-foreground'}`}>
                                {result.type === 'book' && <Book className="w-5 h-5" />}
                                {result.type === 'chapter' && <FileText className="w-5 h-5" />}
                                {result.type === 'subject' && <Search className="w-5 h-5" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground truncate">{result.title}</h4>
                                {result.subtitle && <p className="text-xs text-muted-foreground truncate">{result.subtitle}</p>}
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
