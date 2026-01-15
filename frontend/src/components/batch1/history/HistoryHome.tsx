"use client";

import React from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { HISTORY_CONFIG } from './data/history-config';

export default function HistoryHome() {
    return <SubjectPlanner config={HISTORY_CONFIG} />;
}
