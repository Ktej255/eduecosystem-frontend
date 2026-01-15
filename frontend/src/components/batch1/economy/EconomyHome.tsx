"use client";

import React from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { ECONOMY_CONFIG } from './data/economy-config';

export default function EconomyHome() {
    return <SubjectPlanner config={ECONOMY_CONFIG} />;
}
