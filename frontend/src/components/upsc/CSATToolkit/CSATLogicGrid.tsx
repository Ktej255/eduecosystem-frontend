"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid3X3, Check, X, RotateCcw, Plus, Minus, Trash2, Info } from 'lucide-react';

export default function CSATLogicGrid() {
    const [gridSize, setGridSize] = useState(5);
    const [gridData, setGridData] = useState<Record<string, 'check' | 'cross' | null>>({});
    const [rowLabels, setRowLabels] = useState<string[]>(Array(5).fill('').map((_, i) => `Row ${i + 1}`));
    const [colLabels, setColLabels] = useState<string[]>(Array(5).fill('').map((_, i) => `Col ${i + 1}`));

    const toggleCell = (r: number, c: number) => {
        const key = `${r}-${c}`;
        const current = gridData[key];
        let next: 'check' | 'cross' | null = null;
        if (current === null || current === undefined) next = 'check';
        else if (current === 'check') next = 'cross';
        else next = null;
        
        setGridData({ ...gridData, [key]: next });
    };

    const resetGrid = () => {
        setGridData({});
    };

    const updateLabel = (type: 'row' | 'col', index: number, value: string) => {
        if (type === 'row') {
            const newLabels = [...rowLabels];
            newLabels[index] = value;
            setRowLabels(newLabels);
        } else {
            const newLabels = [...colLabels];
            newLabels[index] = value;
            setColLabels(newLabels);
        }
    };

    const handleGridSize = (delta: number) => {
        const newSize = Math.max(3, Math.min(8, gridSize + delta));
        if (newSize !== gridSize) {
            setGridSize(newSize);
            setRowLabels(Array(newSize).fill('').map((_, i) => rowLabels[i] || `Row ${i + 1}`));
            setColLabels(Array(newSize).fill('').map((_, i) => colLabels[i] || `Col ${i + 1}`));
            setGridData({});
        }
    };

    return (
        <div className="flex flex-col gap-6 h-full p-2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-muted/30 p-4 rounded-2xl border border-border">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Grid3X3 className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-md font-bold text-foreground">Logic Puzzle Workspace</h3>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Interactive Seating & Arrangement Grid</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-card border border-border rounded-xl p-1">
                        <button onClick={() => handleGridSize(-1)} className="p-1.5 hover:bg-muted rounded-lg transition-colors text-muted-foreground"><Minus className="w-3 h-3" /></button>
                        <span className="px-3 text-xs font-bold text-foreground">{gridSize}x{gridSize}</span>
                        <button onClick={() => handleGridSize(1)} className="p-1.5 hover:bg-muted rounded-lg transition-colors text-muted-foreground"><Plus className="w-3 h-3" /></button>
                    </div>
                    <button 
                        onClick={resetGrid}
                        className="flex items-center gap-2 px-3 py-2 bg-muted hover:bg-red-500/10 hover:text-red-500 text-muted-foreground rounded-xl text-xs font-bold transition-all border border-border"
                    >
                        <Trash2 className="w-3 h-3" /> CLEAR
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-auto custom-scrollbar p-4 bg-card dark:bg-[#0c0c0c] rounded-3xl border border-border shadow-inner">
                <div className="min-w-fit flex flex-col items-center justify-center">
                    {/* Grid Wrapper */}
                    <div className="grid isolation-auto" style={{ 
                        gridTemplateColumns: `120px repeat(${gridSize}, 64px)`,
                        gap: '4px'
                    }}>
                        {/* Top Left Corner */}
                        <div className="h-16 flex items-center justify-center text-[10px] font-black text-blue-600 italic bg-blue-500/5 rounded-tl-xl border border-blue-500/10 uppercase tracking-widest">
                            Solving...
                        </div>
                        
                        {/* Column Labels */}
                        {colLabels.map((l, i) => (
                            <div key={`col-${i}`} className="h-16 flex items-end justify-center pb-2">
                                <input 
                                    className="w-14 bg-transparent border-b border-border text-[10px] font-bold text-center text-muted-foreground focus:text-foreground focus:border-blue-600 outline-none transition-all"
                                    value={l}
                                    placeholder={`Col ${i+1}`}
                                    onChange={(e) => updateLabel('col', i, e.target.value)}
                                />
                            </div>
                        ))}

                        {/* Rows */}
                        {rowLabels.map((rl, rIndex) => (
                            <React.Fragment key={`row-frag-${rIndex}`}>
                                <div className="h-16 flex items-center pr-3 justify-end text-right">
                                    <input 
                                        className="w-full bg-transparent border-r border-border pr-2 text-[10px] font-bold text-muted-foreground focus:text-foreground focus:border-blue-600 outline-none transition-all"
                                        value={rl}
                                        placeholder={`Row ${rIndex+1}`}
                                        onChange={(e) => updateLabel('row', rIndex, e.target.value)}
                                    />
                                </div>
                                {Array(gridSize).fill(0).map((_, cIndex) => {
                                    const key = `${rIndex}-${cIndex}`;
                                    const val = gridData[key];
                                    return (
                                        <motion.div
                                            whileTap={{ scale: 0.9 }}
                                            key={key}
                                            onClick={() => toggleCell(rIndex, cIndex)}
                                            className={`h-16 w-16 border rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200
                                                ${val === 'check' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-500 shadow-sm' : 
                                                  val === 'cross' ? 'bg-red-500/10 border-red-500/50 text-red-500 shadow-sm' : 
                                                  'bg-muted/50 border-border/50 hover:bg-blue-500/5 hover:border-blue-500/30'}`}
                                        >
                                            {val === 'check' && <Check className="w-5 h-5 drop-shadow-md" />}
                                            {val === 'cross' && <X className="w-5 h-5 drop-shadow-md" />}
                                        </motion.div>
                                    );
                                })}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-blue-600/5 border border-blue-500/10 p-4 rounded-2xl flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                <p className="text-[11px] text-blue-700 dark:text-blue-400 leading-relaxed italic">
                    <strong>Tip:</strong> Label the rows and columns based on the puzzle variables (e.g. Names vs. Cities). 
                    Click once for 🟢 (Yes), twice for ❌ (No), and thrice to clear.
                </p>
            </div>
        </div>
    );
}

