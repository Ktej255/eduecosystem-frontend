"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
    Search, User, Target, BookOpen, 
    ChevronRight, Loader2, X, Command
} from "lucide-react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AdminGlobalSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.length >= 2) {
                performSearch();
            } else {
                setResults([]);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [query]);

    const performSearch = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/admin/global-search/search?q=${query}`);
            setResults(response.data);
            setIsOpen(true);
        } catch (error) {
            console.error("Global search failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative w-full max-w-md" ref={searchRef}>
            <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                <Input 
                    placeholder="Search anything... (Student, Lead, Course)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length >= 2 && setIsOpen(true)}
                    className="pl-10 bg-muted/50 border-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full h-9 text-sm"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded border bg-background text-[10px] font-medium text-muted-foreground">
                    <Command className="w-2 h-2" /> K
                </div>
            </div>

            {isOpen && (results.length > 0 || loading) && (
                <div className="absolute top-full mt-2 w-full bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-[100] overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="max-h-[400px] overflow-y-auto p-2">
                        {loading ? (
                            <div className="flex items-center justify-center p-8 gap-3">
                                <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                                <span className="text-xs text-muted-foreground">Scanning platform...</span>
                            </div>
                        ) : (
                            results.map((res, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        router.push(res.link);
                                        setIsOpen(false);
                                        setQuery("");
                                    }}
                                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left group"
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        res.type === 'USER' ? 'bg-indigo-500/10 text-indigo-400' :
                                        res.type === 'LEAD' ? 'bg-emerald-500/10 text-emerald-400' :
                                        'bg-amber-500/10 text-amber-400'
                                    }`}>
                                        {res.type === 'USER' && <User className="w-4 h-4" />}
                                        {res.type === 'LEAD' && <Target className="w-4 h-4" />}
                                        {res.type === 'COURSE' && <BookOpen className="w-4 h-4" />}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-slate-200 truncate">{res.title}</span>
                                            <span className="text-[8px] font-black uppercase opacity-50 tracking-widest">{res.category}</span>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground truncate">{res.subtitle}</p>
                                    </div>
                                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5" />
                                </button>
                            ))
                        )}
                    </div>
                    {results.length > 0 && (
                        <div className="bg-slate-950/50 p-2 border-t border-slate-800 flex justify-between items-center px-4">
                            <span className="text-[10px] text-muted-foreground italic">Found {results.length} results</span>
                            <span className="text-[10px] text-indigo-400 font-bold hover:underline cursor-pointer">Advanced Search</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
