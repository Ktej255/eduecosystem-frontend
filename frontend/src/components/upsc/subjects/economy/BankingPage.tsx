"use client";

import React from 'react';
import EconomyTopicViewer from './EconomyTopicViewer';
import { bankingSystem } from './data/chapters/banking-system';
import { bankingSystemMcqs } from './data/mcqs/banking-mcqs';
import { bankingSystemFlashcards } from './data/flashcards/banking-flashcards';
import MonetaryPolicyViz from './visualizations/MonetaryPolicyViz';

export default function BankingPage() {
    return (
        <EconomyTopicViewer
            content={bankingSystem}
            mcqs={bankingSystemMcqs}
            flashcards={bankingSystemFlashcards}
            visualization={<MonetaryPolicyViz />}
        />
    );
}
