
import React from 'react';
import { ResumeData } from './data/sunita-data';
import { Mail, Phone, MapPin, Award, BookOpen, GraduationCap, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ModernResume({ data }: { data: ResumeData }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col items-center bg-neutral-100 min-h-screen p-8 print:p-0 print:bg-card">
            {/* Action Bar (Hidden in Print) */}
            <div className="w-full max-w-[210mm] flex justify-between items-center mb-8 print:hidden">
                <h1 className="text-2xl font-bold text-neutral-800">Master Resume Builder</h1>
                <Button onClick={handlePrint} className="bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl">
                    Download PDF / Print
                </Button>
            </div>

            {/* A4 Paper Container */}
            <div className="w-full max-w-[210mm] bg-card shadow-2xl print:shadow-none min-h-[297mm] relative overflow-hidden text-neutral-800">
                {/* Header Section */}
                <div className="bg-neutral-900 text-white p-12 print:bg-neutral-900 print:text-white print-color-adjust-exact">
                    <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{data.personal.name}</h1>
                    <p className="text-amber-500 text-lg font-medium tracking-wide mb-6">{data.personal.title}</p>

                    <div className="flex flex-wrap gap-6 text-sm text-neutral-300">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-amber-500" />
                            {data.personal.email}
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-amber-500" />
                            {data.personal.phone}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-amber-500" />
                            {data.personal.location}
                        </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-12 min-h-[800px]">
                    {/* Left Sidebar */}
                    <div className="col-span-4 bg-neutral-50 p-8 border-r border-neutral-200 print:bg-neutral-50 print:border-neutral-200 print-color-adjust-exact">
                        {/* Education */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-amber-500 pb-2 mb-4 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" /> Education
                            </h3>
                            <div className="space-y-4">
                                {data.education.map((edu, idx) => (
                                    <div key={idx}>
                                        <div className="font-bold text-neutral-800 text-sm">{edu.degree}</div>
                                        <div className="text-neutral-600 text-xs italic mb-0.5">{edu.institution}</div>
                                        <div className="text-neutral-400 text-xs">{edu.year}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-amber-500 pb-2 mb-4 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Competencies
                            </h3>
                            <div className="space-y-4">
                                {data.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="text-xs font-bold text-neutral-700 mb-1">{skill.category}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {skill.items.map((item, i) => (
                                                <span key={i} className="text-[10px] px-2 py-1 bg-card border border-neutral-200 rounded-full">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-amber-500 pb-2 mb-4 flex items-center gap-2">
                                <Languages className="w-4 h-4" /> Languages
                            </h3>
                            <div className="space-y-1">
                                {data.languages.map((lang, idx) => (
                                    <div key={idx} className="text-sm text-neutral-600 border-b border-neutral-200 pb-1 last:border-0">
                                        {lang}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Main Content */}
                    <div className="col-span-8 p-8">
                        {/* Summary */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-neutral-200 pb-2 mb-4">
                                Professional Profile
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {data.personal.summary}
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-neutral-200 pb-2 mb-4">
                                Professional Experience
                            </h3>
                            <div className="space-y-6">
                                {data.experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-4 border-l-2 border-neutral-100">
                                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-200" />
                                        <div className="flex justify-between items-start mb-1">
                                            <div className="font-bold text-neutral-900">{exp.role}</div>
                                            <div className="text-xs font-mono text-neutral-400 bg-neutral-50 px-2 py-1 rounded">{exp.duration}</div>
                                        </div>
                                        <div className="text-sm text-amber-600 font-medium mb-2">{exp.company}</div>
                                        <ul className="list-disc pl-4 space-y-1">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-xs text-neutral-600 leading-relaxed">
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-neutral-200 pb-2 mb-4 flex items-center gap-2">
                                <Award className="w-4 h-4 text-amber-500" /> Key Achievements
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {data.achievements.map((ach, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                        <div className="mt-1 min-w-[6px] min-h-[6px] rounded-full bg-amber-500" />
                                        <p className="text-xs text-neutral-700 font-medium leading-snug">{ach}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Decor */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 print:hidden" />
            </div>

            <style jsx global>{`
                @media print {
                    @page {
                        margin: 0;
                        size: auto;
                    }
                    body {
                        background: white;
                    }
                }
            `}</style>
        </div>
    );
}
