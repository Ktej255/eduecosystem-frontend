"use client";

import React from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { GEOGRAPHY_CONFIG } from './data/geography-config';

export default function GeographyHome() {
    return <SubjectPlanner config={GEOGRAPHY_CONFIG} />;
}
