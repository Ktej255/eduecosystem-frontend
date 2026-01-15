"use client";

import React from 'react';
import SubjectPlanner from '../framework/SubjectPlanner';
import { ENVIRONMENT_CONFIG } from './data/environment-config';

export default function EnvironmentHome() {
    return <SubjectPlanner config={ENVIRONMENT_CONFIG} />;
}
