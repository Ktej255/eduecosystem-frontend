"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, AlertTriangle, Shield, CheckCircle, HelpCircle } from 'lucide-react';

type StepId = 'start' | 'detained' | 'public_duty' | 'court_order' | 'lower_court_pending' | 'lower_court_decided' | 'public_office';

interface Step {
    id: StepId;
    question: string;
    options: { label: string; next: StepId | 'HABEAS' | 'MANDAMUS' | 'PROHIBITION' | 'CERTIORARI' | 'QUO_WARRANTO' }[];
}

const STEPS: Record<string, Step> = {
    start: {
        id: 'start',
        question: "What's the situation?",
        options: [
            { label: 'Someone is illegally detained/arrested', next: 'detained' },
            { label: 'Official not doing their duty', next: 'public_duty' },
            { label: 'Lower Court issue', next: 'court_order' },
            { label: 'Illegal holding of Public Office', next: 'public_office' }
        ]
    },
    detained: { id: 'detained', question: '', options: [{ label: '', next: 'HABEAS' }] },
    public_duty: { id: 'public_duty', question: '', options: [{ label: '', next: 'MANDAMUS' }] },
    public_office: { id: 'public_office', question: '', options: [{ label: '', next: 'QUO_WARRANTO' }] },
    court_order: {
        id: 'court_order',
        question: "Is the case pending or already decided?",
        options: [
            { label: 'Pending (Stop it now)', next: 'lower_court_pending' },
            { label: 'Decided (Quash it)', next: 'lower_court_decided' }
        ]
    },
    lower_court_pending: { id: 'lower_court_pending', question: '', options: [{ label: '', next: 'PROHIBITION' }] },
    lower_court_decided: { id: 'lower_court_decided', question: '', options: [{ label: '', next: 'CERTIORARI' }] },
};

const WRITS_INFO = {
    HABEAS: {
        title: 'Habeas Corpus',
        meaning: 'To have the body of',
        desc: 'Order to produce the detainee. Safeguard against illegal detention.',
        icon: Shield
    },
    MANDAMUS: {
        title: 'Mandamus',
        meaning: 'We Command',
        desc: 'Order to public official to perform official duty.',
        icon: AlertTriangle
    },
    PROHIBITION: {
        title: 'Prohibition',
        meaning: 'To Forbid',
        desc: 'Higher court to Lower court: "Stop! You have no jurisdiction."',
        icon: ArrowDown
    },
    CERTIORARI: {
        title: 'Certiorari',
        meaning: 'To be certified',
        desc: 'Higher court to Lower court: "Quash this order" or "Transfer case to me."',
        icon: CheckCircle
    },
    QUO_WARRANTO: {
        title: 'Quo-Warranto',
        meaning: 'By what authority?',
        desc: 'Check legality of claim to public office.',
        icon: HelpCircle
    }
};

export default function WritsWizard() {
    const [currentStep, setCurrentStep] = useState<StepId>('start');
    const [result, setResult] = useState<keyof typeof WRITS_INFO | null>(null);

    const handleOption = (next: string) => {
        if (['HABEAS', 'MANDAMUS', 'PROHIBITION', 'CERTIORARI', 'QUO_WARRANTO'].includes(next)) {
            setResult(next as keyof typeof WRITS_INFO);
        } else {
            setCurrentStep(next as StepId);
        }
    };

    const reset = () => {
        setCurrentStep('start');
        setResult(null);
    };

    const stepData = STEPS[currentStep];

    return (
        <Card className="w-full bg-slate-900 border-4 border-slate-700 shadow-2xl overflow-hidden font-['Kalam'] text-white">
            <CardContent className="p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                {!result ? (
                    <div className="space-y-8 animate-in zoom-in">
                        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            {stepData.question}
                        </h2>
                        <div className="grid gap-4 max-w-md mx-auto">
                            {stepData.options.map((opt, i) => (
                                <Button
                                    key={i}
                                    onClick={() => handleOption(opt.next)}
                                    className="p-6 text-lg bg-slate-800 hover:bg-cyan-700 border-2 border-slate-600 rounded-xl"
                                >
                                    {opt.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in zoom-in">
                        <div className="w-24 h-24 mx-auto bg-cyan-500 rounded-full flex items-center justify-center text-foreground mb-4">
                            {React.createElement(WRITS_INFO[result].icon, { size: 48 })}
                        </div>
                        <h2 className="text-5xl font-black text-cyan-400">{WRITS_INFO[result].title}</h2>
                        <p className="text-xl text-slate-300 italic">"{WRITS_INFO[result].meaning}"</p>
                        <p className="max-w-md mx-auto text-lg font-bold border-l-4 border-cyan-500 pl-4 text-left bg-slate-800/50 p-4 rounded">
                            {WRITS_INFO[result].desc}
                        </p>
                        <Button onClick={reset} variant="secondary" className="mt-8">Start Over</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
