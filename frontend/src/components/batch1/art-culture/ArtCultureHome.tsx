"use client";

import React from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { ART_CULTURE_CONFIG } from './data/art-culture-config';

export default function ArtCultureHome() {
    return <SubjectPlanner config={ART_CULTURE_CONFIG} />;
}
