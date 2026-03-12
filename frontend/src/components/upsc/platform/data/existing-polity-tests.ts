/**
 * Existing Polity Tests Registration
 * Briding the legacy Saturday Polity Test data into the new Saturday Test Registry.
 */

import { registerWeeklyTest, createSubjectBlock } from './saturday-test-registry';
import { 
    WEEK1_PAPER_1_QUESTIONS, 
    PAPER_2_QUESTIONS 
} from './saturday-test-data';

// Register Week 1
registerWeeklyTest({
    weekNumber: 1,
    title: "Week 1: UPSC 2026 Comprehensive Milestone",
    description: "Consolidated assessment of Week 1 Polity & Current Affairs.",
    subjects: [
        createSubjectBlock('polity', 'Indian Polity (Module 1)', WEEK1_PAPER_1_QUESTIONS, 120),
        createSubjectBlock('polity', 'Indian Polity (Module 2)', PAPER_2_QUESTIONS, 120)
    ],
    totalDuration: 240,
    totalQuestions: WEEK1_PAPER_1_QUESTIONS.length + PAPER_2_QUESTIONS.length,
    negativeMarking: true,
    negativeMarkRatio: 0.33
});

// Register Week 2 (Empty for now)
registerWeeklyTest({
    weekNumber: 2,
    title: "Week 2 Assessment",
    description: "Week 2 topics assessment.",
    subjects: [],
    totalDuration: 120,
    totalQuestions: 0,
    negativeMarking: true,
    negativeMarkRatio: 0.33
});

// Helper to get Paper 2 as well if needed (currently the page handles P1 and P2 separately)
// In the multi-subject future, Paper 1 and Paper 2 might be merged or handled as distinct configs.
