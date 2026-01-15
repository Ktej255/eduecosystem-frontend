"use client";

import React from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { SCIENCE_TECH_CONFIG } from './data/science-tech-config';

export default function ScienceTechHome() {
    return <SubjectPlanner config={SCIENCE_TECH_CONFIG} />;
}
