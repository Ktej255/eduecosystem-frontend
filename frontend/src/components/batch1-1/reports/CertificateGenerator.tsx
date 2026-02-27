"use client";

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Award, ShieldCheck } from "lucide-react";

interface CertificateGeneratorProps {
    studentName: string;
    courseName: string;
    completionDate: string;
    milestoneId: string;
}

export default function CertificateGenerator({ studentName, courseName, completionDate, milestoneId }: CertificateGeneratorProps) {
    const certificateRef = useRef<HTMLDivElement>(null);

    const generatePDF = async () => {
        if (!certificateRef.current) return;
        try {
            // dynamic import to avoid SSR issues
            const html2canvas = (await import('html2canvas')).default;
            const jsPDF = (await import('jspdf')).default;

            const canvas = await html2canvas(certificateRef.current, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`${studentName.replace(/\s+/g, '_')}_${milestoneId}_Certificate.pdf`);
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl p-6 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full text-blue-600 dark:text-blue-400">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-serif text-slate-800 dark:text-slate-200">Milestone Unlocked!</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">You have successfully mastered {courseName}. Here is your official certification.</p>
                    </div>
                </div>
                <Button onClick={generatePDF} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-blue-600/20 w-full sm:w-auto">
                    <Download className="w-5 h-5 mr-2" /> Download Full PDF
                </Button>
            </div>

            {/* Desktop Preview Container */}
            <div className="w-full max-w-4xl overflow-x-auto pb-4 custom-scrollbar">
                <div className="min-w-[1123px] shadow-2xl rounded border border-slate-200 bg-white" style={{ isolation: 'isolate' }}>

                    {/* The Actual Capturable Certificate */}
                    <div
                        ref={certificateRef}
                        className="relative w-[1123px] h-[794px] bg-white p-12 text-center overflow-hidden"
                        style={{
                            backgroundImage: 'radial-gradient(circle at center, #f8fafc 0%, #e2e8f0 100%)',
                        }}
                    >
                        {/* Decorative Borders */}
                        <div className="absolute inset-4 border-[12px] border-double border-slate-300 pointer-events-none"></div>
                        <div className="absolute inset-8 border-[1px] border-solid border-slate-400 pointer-events-none"></div>

                        {/* Corner Ornaments */}
                        <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-slate-400 pointer-events-none rounded-tl-xl"></div>
                        <div className="absolute top-10 right-10 w-16 h-16 border-t-4 border-r-4 border-slate-400 pointer-events-none rounded-tr-xl"></div>
                        <div className="absolute bottom-10 left-10 w-16 h-16 border-b-4 border-l-4 border-slate-400 pointer-events-none rounded-bl-xl"></div>
                        <div className="absolute bottom-10 right-10 w-16 h-16 border-b-4 border-r-4 border-slate-400 pointer-events-none rounded-br-xl"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center pt-24 h-full">
                            <Award className="w-24 h-24 text-blue-600 mb-6 drop-shadow-md" />
                            <h1 className="text-6xl font-black text-slate-800 font-serif tracking-widest uppercase mb-12">
                                Certificate of Mastery
                            </h1>

                            <p className="text-2xl text-slate-600 font-serif italic mb-6">
                                This is to certify that
                            </p>

                            <h2 className="text-5xl font-bold text-blue-900 border-b-2 border-slate-300 pb-4 px-12 mb-8 uppercase tracking-wider">
                                {studentName}
                            </h2>

                            <p className="text-2xl text-slate-600 font-serif italic mb-6 max-w-2xl leading-relaxed">
                                has successfully demonstrated elite comprehension and completed
                            </p>

                            <h3 className="text-4xl font-bold text-slate-800 mb-16 px-8 leading-snug tracking-wide">
                                {courseName}
                            </h3>

                            <div className="flex justify-between w-full px-24 mt-auto pb-12">
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-slate-800 text-xl border-b-2 border-slate-400 pb-2 mb-2 w-48 text-center">{completionDate}</p>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Date of Achievement</p>
                                </div>

                                <div className="w-24 h-24 rounded-full border-4 border-amber-500 bg-amber-50 flex items-center justify-center -mt-6 rotate-12 shadow-lg">
                                    <span className="font-bold text-amber-700 font-serif text-sm tracking-tighter text-center uppercase">Passed<br />Verified</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="text-3xl font-script text-slate-800 border-b-2 border-slate-400 pb-2 mb-2 w-48 text-center italic font-serif">Eduecosystem</div>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Authorized AI Engine</p>
                                </div>
                            </div>
                        </div>

                        {/* Watermark Logo Backing */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                            <Award className="w-[800px] h-[800px] text-slate-900" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
