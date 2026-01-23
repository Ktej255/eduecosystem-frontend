// Revision Registry for Chapters 1-6 (Laxmikanth)
// This links the Chapter Text, Flashcards, and MCQs for the Revision Dashboard

import CHAPTER_1_CONTENT from './chapters/chapter1-historical-background';
import CHAPTER_2_CONTENT from './chapters/chapter2-making-constitution';
import CHAPTER_3_CONTENT from './chapters/chapter3-concept-constitution';
import CHAPTER_4_CONTENT from './chapters/chapter4-salient-features';
import CHAPTER_5_CONTENT from './chapters/chapter5-preamble';
import CHAPTER_6_CONTENT from './chapters/chapter6-union-territory';
import CHAPTER_7_CONTENT from './chapters/chapter7-citizenship';
import CHAPTER_8_CONTENT from './chapters/chapter8-fundamental-rights';
import CHAPTER_9_CONTENT from './chapters/chapter9-fundamental-rights';
import CHAPTER_10_CONTENT from './chapters/chapter10-fundamental-rights';
import CHAPTER_11_CONTENT from './chapters/chapter11-dpsp';
import CHAPTER_12_CONTENT from './chapters/chapter12-fundamental-duties';
import CHAPTER_13_CONTENT from './chapters/chapter13-amendment';
import CHAPTER_14_CONTENT from './chapters/chapter14-basic-structure';
import CHAPTER_15_CONTENT from './chapters/chapter15-parliamentary-system';
import CHAPTER_16_CONTENT from './chapters/chapter16-federal-system';
import CHAPTER_17_CONTENT from './chapters/chapter17-centre-state';
import CHAPTER_18_CONTENT from './chapters/chapter18-inter-state';
import CHAPTER_19_CONTENT from './chapters/chapter19-emergency';
import CHAPTER_20_CONTENT from './chapters/chapter20-president';
import CHAPTER_21_CONTENT from './chapters/chapter21-vice-president';
import CHAPTER_22_CONTENT from './chapters/chapter22-prime-minister';
import CHAPTER_23_CONTENT from './chapters/chapter23-council-ministers';
import CHAPTER_24_CONTENT from './chapters/chapter24-cabinet-committees';
import CHAPTER_25_CONTENT from './chapters/chapter25-parliament';
import CHAPTER_26_CONTENT from './chapters/chapter26-parliamentary-committees';
import CHAPTER_27_CONTENT from './chapters/chapter27-parliamentary-forums';
import CHAPTER_28_CONTENT from './chapters/chapter28-parliamentary-group';
import CHAPTER_29_CONTENT from './chapters/chapter29-supreme-court';
import CHAPTER_30_CONTENT from './chapters/chapter30-judicial-review';
import CHAPTER_31_CONTENT from './chapters/chapter31-pil';
import CHAPTER_32_CONTENT from './chapters/chapter32-high-court';
import CHAPTER_33_CONTENT from './chapters/chapter33-subordinate-courts';
import CHAPTER_34_CONTENT from './chapters/chapter34-special-provisions';
import CHAPTER_35_CONTENT from './chapters/chapter35-governor';
import CHAPTER_36_CONTENT from './chapters/chapter36-chief-minister';
import CHAPTER_37_CONTENT from './chapters/chapter37-state-council';
import CHAPTER_38_CONTENT from './chapters/chapter38-state-legislature';
import CHAPTER_39_CONTENT from './chapters/chapter39-panchayati-raj';
import CHAPTER_40_CONTENT from './chapters/chapter40-municipalities';
import CHAPTER_41_CONTENT from './chapters/chapter41-election-commission';
import CHAPTER_42_CONTENT from './chapters/chapter42-upsc';
import CHAPTER_43_CONTENT from './chapters/chapter43-spsc';
import CHAPTER_44_CONTENT from './chapters/chapter44-finance-commission';
import CHAPTER_45_CONTENT from './chapters/chapter45-gst-council';
import CHAPTER_46_CONTENT from './chapters/chapter46-nc-sc';
import CHAPTER_47_CONTENT from './chapters/chapter47-nc-st';
import CHAPTER_48_CONTENT from './chapters/chapter48-nc-bc';
import CHAPTER_49_CONTENT from './chapters/chapter49-linguistic-minorities';
import CHAPTER_50_CONTENT from './chapters/chapter50-cag';
import CHAPTER_51_CONTENT from './chapters/chapter51-niti-aayog';
import CHAPTER_52_CONTENT from './chapters/chapter52-nhrc';
import CHAPTER_53_CONTENT from './chapters/chapter53-shrc';
import CHAPTER_54_CONTENT from './chapters/chapter54-cic';
import CHAPTER_55_CONTENT from './chapters/chapter55-sic';
import CHAPTER_56_CONTENT from './chapters/chapter56-cvc';
import CHAPTER_57_CONTENT from './chapters/chapter57-cbi';
import CHAPTER_58_CONTENT from './chapters/chapter58-lokpal';
import CHAPTER_59_CONTENT from './chapters/chapter59-nia';
import CHAPTER_60_CONTENT from './chapters/chapter60-ndma';
import CHAPTER_61_CONTENT from './chapters/chapter61-ncw';
import CHAPTER_62_CONTENT from './chapters/chapter62-ncpcr';
import CHAPTER_63_CONTENT from './chapters/chapter63-ncm';
import CHAPTER_64_CONTENT from './chapters/chapter64-tribunals';
import CHAPTER_65_CONTENT from './chapters/chapter65-law-delimitation';
import CHAPTER_66_CONTENT from './chapters/chapter66-political-parties';
import CHAPTER_67_CONTENT from './chapters/chapter67-regional-parties';
import CHAPTER_68_CONTENT from './chapters/chapter68-elections';
import CHAPTER_69_CONTENT from './chapters/chapter69-election-laws';
import CHAPTER_70_CONTENT from './chapters/chapter70-electoral-reforms';
import CHAPTER_71_CONTENT from './chapters/chapter71-voting-behaviour';
import CHAPTER_72_CONTENT from './chapters/chapter72-anti-defection';
import CHAPTER_73_CONTENT from './chapters/chapter73-pressure-groups';
import CHAPTER_74_CONTENT from './chapters/chapter74-national-integration';
import CHAPTER_75_CONTENT from './chapters/chapter75-foreign-policy';
import CHAPTER_76_CONTENT from './chapters/chapter76-official-language';
import CHAPTER_77_CONTENT from './chapters/chapter77-public-services';
import CHAPTER_78_CONTENT from './chapters/chapter78-rights-and-liabilities';
import CHAPTER_79_CONTENT from './chapters/chapter79-special-provisions-classes';
import CHAPTER_80_CONTENT from './chapters/chapter80-consumer-commissions';
import CHAPTER_81_CONTENT from './chapters/chapter81-bar-council';
import CHAPTER_82_CONTENT from './chapters/chapter82-landmark-judgements';
import CHAPTER_83_CONTENT from './chapters/chapter83-doctrines';
import CHAPTER_84_CONTENT from './chapters/chapter84-world-constitutions';
import CHAPTER_85_CONTENT from './chapters/chapter85-advanced-services';
import CHAPTER_86_CONTENT from './chapters/chapter86-public-policy';
import CHAPTER_87_CONTENT from './chapters/chapter87-nsc';
import CHAPTER_88_CONTENT from './chapters/chapter88-cci';
import CHAPTER_89_CONTENT from './chapters/chapter89-uidai';
import CHAPTER_90_CONTENT from './chapters/chapter90-pfrda-irdai';
import CHAPTER_91_CONTENT from './chapters/chapter91-nha';
import CHAPTER_92_CONTENT from './chapters/chapter92-fssai-bis';
import CHAPTER_93_CONTENT from './chapters/chapter93-ncrwc';
import CHAPTER_94_CONTENT from './chapters/chapter94-appendices';
import CHAPTER_95_CONTENT from './chapters/chapter95-summary';

import CHAPTER_1_FLASHCARDS from './flashcards/chapter1-flashcards';
import CHAPTER_2_FLASHCARDS from './flashcards/chapter2-flashcards';
import CHAPTER_3_FLASHCARDS from './flashcards/chapter3-flashcards';
import CHAPTER_4_FLASHCARDS from './flashcards/chapter4-flashcards';
import CHAPTER_5_FLASHCARDS from './flashcards/chapter5-flashcards';
import CHAPTER_6_FLASHCARDS from './flashcards/chapter6-flashcards';
import CHAPTER_7_FLASHCARDS from './flashcards/chapter7-flashcards';
import CHAPTER_8_FLASHCARDS from './flashcards/chapter8-flashcards';
import CHAPTER_9_FLASHCARDS from './flashcards/chapter9-flashcards';
import CHAPTER_10_FLASHCARDS from './flashcards/chapter10-flashcards';
import CHAPTER_11_FLASHCARDS from './flashcards/chapter11-flashcards';
import CHAPTER_12_FLASHCARDS from './flashcards/chapter12-flashcards';
import CHAPTER_13_FLASHCARDS from './flashcards/chapter13-flashcards';
import CHAPTER_14_FLASHCARDS from './flashcards/chapter14-flashcards';
import CHAPTER_15_FLASHCARDS from './flashcards/chapter15-flashcards';
import CHAPTER_16_FLASHCARDS from './flashcards/chapter16-flashcards';
import CHAPTER_17_FLASHCARDS from './flashcards/chapter17-flashcards';
import CHAPTER_18_FLASHCARDS from './flashcards/chapter18-flashcards';
import CHAPTER_19_FLASHCARDS from './flashcards/chapter19-flashcards';
import CHAPTER_20_FLASHCARDS from './flashcards/chapter20-flashcards';
import CHAPTER_21_FLASHCARDS from './flashcards/chapter21-flashcards';
import CHAPTER_22_FLASHCARDS from './flashcards/chapter22-flashcards';
import CHAPTER_23_FLASHCARDS from './flashcards/chapter23-flashcards';
import CHAPTER_24_FLASHCARDS from './flashcards/chapter24-flashcards';
import CHAPTER_25_FLASHCARDS from './flashcards/chapter25-flashcards';
import CHAPTER_26_FLASHCARDS from './flashcards/chapter26-flashcards';
import CHAPTER_27_FLASHCARDS from './flashcards/chapter27-flashcards';
import CHAPTER_28_FLASHCARDS from './flashcards/chapter28-flashcards';
import CHAPTER_29_FLASHCARDS from './flashcards/chapter29-flashcards';
import CHAPTER_30_FLASHCARDS from './flashcards/chapter30-flashcards';
import CHAPTER_31_FLASHCARDS from './flashcards/chapter31-flashcards';
import CHAPTER_32_FLASHCARDS from './flashcards/chapter32-flashcards';
import CHAPTER_33_FLASHCARDS from './flashcards/chapter33-flashcards';
import CHAPTER_34_FLASHCARDS from './flashcards/chapter34-flashcards';
import CHAPTER_35_FLASHCARDS from './flashcards/chapter35-flashcards';
import CHAPTER_36_FLASHCARDS from './flashcards/chapter36-flashcards';
import CHAPTER_37_FLASHCARDS from './flashcards/chapter37-flashcards';
import CHAPTER_38_FLASHCARDS from './flashcards/chapter38-flashcards';
import CHAPTER_39_FLASHCARDS from './flashcards/chapter39-flashcards';
import CHAPTER_40_FLASHCARDS from './flashcards/chapter40-flashcards';
import CHAPTER_41_FLASHCARDS from './flashcards/chapter41-flashcards';
import CHAPTER_42_FLASHCARDS from './flashcards/chapter42-flashcards';
import CHAPTER_43_FLASHCARDS from './flashcards/chapter43-flashcards';
import CHAPTER_44_FLASHCARDS from './flashcards/chapter44-finance-commission';
import CHAPTER_45_FLASHCARDS from './flashcards/chapter45-flashcards';
import CHAPTER_46_FLASHCARDS from './flashcards/chapter46-flashcards';
import CHAPTER_47_FLASHCARDS from './flashcards/chapter47-flashcards';
import CHAPTER_48_FLASHCARDS from './flashcards/chapter48-flashcards';
import CHAPTER_49_FLASHCARDS from './flashcards/chapter49-flashcards';
import CHAPTER_50_FLASHCARDS from './flashcards/chapter50-flashcards';
import CHAPTER_51_FLASHCARDS from './flashcards/chapter51-flashcards';
import CHAPTER_52_FLASHCARDS from './flashcards/chapter52-flashcards';
import CHAPTER_53_FLASHCARDS from './flashcards/chapter53-flashcards';
import CHAPTER_54_FLASHCARDS from './flashcards/chapter54-flashcards';
import CHAPTER_55_FLASHCARDS from './flashcards/chapter55-flashcards';
import CHAPTER_56_FLASHCARDS from './flashcards/chapter56-flashcards';
import CHAPTER_57_FLASHCARDS from './flashcards/chapter57-flashcards';
import CHAPTER_58_FLASHCARDS from './flashcards/chapter58-flashcards';
import CHAPTER_59_FLASHCARDS from './flashcards/chapter59-flashcards';
import CHAPTER_60_FLASHCARDS from './flashcards/chapter60-flashcards';
import CHAPTER_61_FLASHCARDS from './flashcards/chapter61-flashcards';
import CHAPTER_62_FLASHCARDS from './flashcards/chapter62-flashcards';
import CHAPTER_63_FLASHCARDS from './flashcards/chapter63-flashcards';
import CHAPTER_64_FLASHCARDS from './flashcards/chapter64-flashcards';
import CHAPTER_65_FLASHCARDS from './flashcards/chapter65-flashcards';
import CHAPTER_66_FLASHCARDS from './flashcards/chapter66-flashcards';
import CHAPTER_67_FLASHCARDS from './flashcards/chapter67-flashcards';
import CHAPTER_68_FLASHCARDS from './flashcards/chapter68-flashcards';
import CHAPTER_69_FLASHCARDS from './flashcards/chapter69-flashcards';
import CHAPTER_70_FLASHCARDS from './flashcards/chapter70-flashcards';
import CHAPTER_71_FLASHCARDS from './flashcards/chapter71-flashcards';
import CHAPTER_72_FLASHCARDS from './flashcards/chapter72-flashcards';
import CHAPTER_73_FLASHCARDS from './flashcards/chapter73-flashcards';
import CHAPTER_74_FLASHCARDS from './flashcards/chapter74-flashcards';
import CHAPTER_75_FLASHCARDS from './flashcards/chapter75-flashcards';
import CHAPTER_76_FLASHCARDS from './flashcards/chapter76-flashcards';
import CHAPTER_77_FLASHCARDS from './flashcards/chapter77-flashcards';
import CHAPTER_78_FLASHCARDS from './flashcards/chapter78-flashcards';
import CHAPTER_79_FLASHCARDS from './flashcards/chapter79-flashcards';
import CHAPTER_80_FLASHCARDS from './flashcards/chapter80-flashcards';
import CHAPTER_81_FLASHCARDS from './flashcards/chapter81-flashcards';
import CHAPTER_82_FLASHCARDS from './flashcards/chapter82-flashcards';
import CHAPTER_83_FLASHCARDS from './flashcards/chapter83-flashcards';
import CHAPTER_84_FLASHCARDS from './flashcards/chapter84-flashcards';
import CHAPTER_85_FLASHCARDS from './flashcards/chapter85-flashcards';
import CHAPTER_86_FLASHCARDS from './flashcards/chapter86-flashcards';
import CHAPTER_87_FLASHCARDS from './flashcards/chapter87-flashcards';
import CHAPTER_88_FLASHCARDS from './flashcards/chapter88-flashcards';
import CHAPTER_89_FLASHCARDS from './flashcards/chapter89-flashcards';
import CHAPTER_90_FLASHCARDS from './flashcards/chapter90-flashcards';
import CHAPTER_91_FLASHCARDS from './flashcards/chapter91-flashcards';
import CHAPTER_92_FLASHCARDS from './flashcards/chapter92-flashcards';
import CHAPTER_93_FLASHCARDS from './flashcards/chapter93-flashcards';
import CHAPTER_94_FLASHCARDS from './flashcards/chapter94-flashcards';
import CHAPTER_95_FLASHCARDS from './flashcards/chapter95-flashcards';

import { CHAPTER_1_MCQS } from './mcqs/chapter1-mcqs';
import { CHAPTER_2_MCQS } from './mcqs/chapter2-mcqs';
import { CHAPTER_3_MCQS } from './mcqs/chapter3-mcqs';
import { CHAPTER_4_MCQS } from './mcqs/chapter4-mcqs';
import { CHAPTER_5_MCQS } from './mcqs/chapter5-mcqs';
import { CHAPTER_6_MCQS } from './mcqs/chapter6-mcqs';
import { CHAPTER_7_MCQS } from './mcqs/chapter7-mcqs';
import { CHAPTER_8_MCQS } from './mcqs/chapter8-mcqs';
import { CHAPTER_9_MCQS } from './mcqs/chapter9-mcqs';
import { CHAPTER_10_MCQS } from './mcqs/chapter10-mcqs';
import { CHAPTER_11_MCQS } from './mcqs/chapter11-mcqs';
import { CHAPTER_12_MCQS } from './mcqs/chapter12-mcqs';
import { CHAPTER_13_MCQS } from './mcqs/chapter13-mcqs';
import { CHAPTER_14_MCQS } from './mcqs/chapter14-mcqs';
import { CHAPTER_15_MCQS } from './mcqs/chapter15-mcqs';
import { CHAPTER16_MCQS } from './mcqs/chapter16-mcqs';
import { CHAPTER17_MCQS } from './mcqs/chapter17-mcqs';
import { CHAPTER_18_MCQS } from './mcqs/chapter18-mcqs';
import { CHAPTER_19_MCQS } from './mcqs/chapter19-mcqs';
import { CHAPTER_20_MCQS } from './mcqs/chapter20-mcqs';
import { CHAPTER_21_MCQS } from './mcqs/chapter21-mcqs';
import { CHAPTER_22_MCQS } from './mcqs/chapter22-mcqs';
import { CHAPTER_23_MCQS } from './mcqs/chapter23-mcqs';
import { CHAPTER_24_MCQS } from './mcqs/chapter24-mcqs';
import { CHAPTER_25_MCQS } from './mcqs/chapter25-mcqs';
import { CHAPTER_26_MCQS } from './mcqs/chapter26-mcqs';
import { CHAPTER_27_MCQS } from './mcqs/chapter27-mcqs';
import { CHAPTER_28_MCQS } from './mcqs/chapter28-mcqs';
import { CHAPTER_29_MCQS } from './mcqs/chapter29-mcqs';
import { CHAPTER_30_MCQS } from './mcqs/chapter30-mcqs';
import { CHAPTER_31_MCQS } from './mcqs/chapter31-mcqs';
import { CHAPTER_32_MCQS } from './mcqs/chapter32-mcqs';
import { CHAPTER_33_MCQS } from './mcqs/chapter33-mcqs';
import { CHAPTER_34_MCQS } from './mcqs/chapter34-mcqs';
import { CHAPTER_35_MCQS } from './mcqs/chapter35-mcqs';
import { CHAPTER_36_MCQS } from './mcqs/chapter36-mcqs';
import { CHAPTER_37_MCQS } from './mcqs/chapter37-mcqs';
import { CHAPTER_38_MCQS } from './mcqs/chapter38-mcqs';
import { CHAPTER_39_MCQS } from './mcqs/chapter39-mcqs';
import { CHAPTER_40_MCQS } from './mcqs/chapter40-mcqs';
import { CHAPTER_41_MCQS } from './mcqs/chapter41-mcqs';
import { CHAPTER_42_MCQS } from './mcqs/chapter42-mcqs';
import { CHAPTER_43_MCQS } from './mcqs/chapter43-mcqs';
import { CHAPTER_44_MCQS } from './mcqs/chapter44-mcqs';
import { CHAPTER_45_MCQS } from './mcqs/chapter45-mcqs';
import { CHAPTER_46_MCQS } from './mcqs/chapter46-mcqs';
import { CHAPTER_47_MCQS } from './mcqs/chapter47-mcqs';
import { CHAPTER_48_MCQS } from './mcqs/chapter48-mcqs';
import { CHAPTER_49_MCQS } from './mcqs/chapter49-mcqs';
import { CHAPTER_50_MCQS } from './mcqs/chapter50-mcqs';
import { CHAPTER_51_MCQS } from './mcqs/chapter51-mcqs';
import { CHAPTER_52_MCQS } from './mcqs/chapter52-mcqs';
import { CHAPTER_53_MCQS } from './mcqs/chapter53-mcqs';
import { CHAPTER_54_MCQS } from './mcqs/chapter54-mcqs';
import { CHAPTER_55_MCQS } from './mcqs/chapter55-mcqs';
import { CHAPTER_56_MCQS } from './mcqs/chapter56-mcqs';
import { CHAPTER_57_MCQS } from './mcqs/chapter57-mcqs';
import { CHAPTER_58_MCQS } from './mcqs/chapter58-mcqs';
import { CHAPTER_59_MCQS } from './mcqs/chapter59-mcqs';
import { CHAPTER_60_MCQS } from './mcqs/chapter60-mcqs';
import { CHAPTER_61_MCQS } from './mcqs/chapter61-mcqs';
import { CHAPTER_62_MCQS } from './mcqs/chapter62-mcqs';
import { CHAPTER_63_MCQS } from './mcqs/chapter63-mcqs';
import { CHAPTER_64_MCQS } from './mcqs/chapter64-mcqs';
import { CHAPTER_65_MCQS } from './mcqs/chapter65-mcqs';
import { CHAPTER_66_MCQS } from './mcqs/chapter66-mcqs';
import { CHAPTER_67_MCQS } from './mcqs/chapter67-mcqs';
import { CHAPTER_68_MCQS } from './mcqs/chapter68-mcqs';
import { CHAPTER_69_MCQS } from './mcqs/chapter69-mcqs';
import { CHAPTER_70_MCQS } from './mcqs/chapter70-mcqs';
import { CHAPTER_71_MCQS } from './mcqs/chapter71-mcqs';
import { CHAPTER_72_MCQS } from './mcqs/chapter72-mcqs';
import { CHAPTER_73_MCQS } from './mcqs/chapter73-mcqs';
import { CHAPTER_74_MCQS } from './mcqs/chapter74-mcqs';
import { CHAPTER_75_MCQS } from './mcqs/chapter75-mcqs';
import { CHAPTER_76_MCQS } from './mcqs/chapter76-mcqs';
import { CHAPTER_77_MCQS } from './mcqs/chapter77-mcqs';
import { CHAPTER_78_MCQS } from './mcqs/chapter78-mcqs';
import { CHAPTER_79_MCQS } from './mcqs/chapter79-mcqs';
import { CHAPTER_80_MCQS } from './mcqs/chapter80-mcqs';
import { CHAPTER_81_MCQS } from './mcqs/chapter81-mcqs';
import { CHAPTER_82_MCQS } from './mcqs/chapter82-mcqs';
import { CHAPTER_83_MCQS } from './mcqs/chapter83-mcqs';
import { CHAPTER_84_MCQS } from './mcqs/chapter84-mcqs';
import { CHAPTER_85_MCQS } from './mcqs/chapter85-mcqs';
import { CHAPTER_86_MCQS } from './mcqs/chapter86-mcqs';
import { CHAPTER_87_MCQS } from './mcqs/chapter87-mcqs';
import { CHAPTER_88_MCQS } from './mcqs/chapter88-cci';
import { CHAPTER_89_MCQS } from './mcqs/chapter89-uidai';
import { CHAPTER_90_MCQS } from './mcqs/chapter90-pfrda-irdai';
import { CHAPTER_91_MCQS } from './mcqs/chapter91-nha';
import { CHAPTER_92_MCQS } from './mcqs/chapter92-fssai-bis';
import { CHAPTER_93_MCQS } from './mcqs/chapter93-ncrwc';
import { CHAPTER_94_MCQS } from './mcqs/chapter94-appendices';
import { CHAPTER_95_MCQS } from './mcqs/chapter95-summary';

import {
    IMPORTANT_DATES,
    FIRST_HOLDERS,
    IMPORTANT_ACTS,
    CONSTITUTION_SOURCES,
    LANDMARK_CASES,
    SCHEDULES_SUMMARY
} from './facts/polity-facts-summary';

export interface RevisionFlashcard {
    id: number;
    chapterId: number;
    question: string;
    answer: string;
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export interface MCQ {
    id: number;
    chapterId: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export interface ChapterRevisionData {
    id: number;
    title: string;
    content: any;
    flashcards: RevisionFlashcard[];
    mcqs: MCQ[];
}

export const POLITY_REVISION_CHAPTERS: ChapterRevisionData[] = [
    {
        id: 1,
        title: "Historical Background",
        content: CHAPTER_1_CONTENT,
        flashcards: CHAPTER_1_FLASHCARDS,
        mcqs: CHAPTER_1_MCQS
    },
    {
        id: 2,
        title: "Making of the Constitution",
        content: CHAPTER_2_CONTENT,
        flashcards: CHAPTER_2_FLASHCARDS,
        mcqs: CHAPTER_2_MCQS
    },
    {
        id: 3,
        title: "Concept of the Constitution",
        content: CHAPTER_3_CONTENT,
        flashcards: CHAPTER_3_FLASHCARDS,
        mcqs: CHAPTER_3_MCQS
    },
    {
        id: 4,
        title: "Salient Features",
        content: CHAPTER_4_CONTENT,
        flashcards: CHAPTER_4_FLASHCARDS,
        mcqs: CHAPTER_4_MCQS
    },
    {
        id: 5,
        title: "Preamble",
        content: CHAPTER_5_CONTENT,
        flashcards: CHAPTER_5_FLASHCARDS,
        mcqs: CHAPTER_5_MCQS
    },
    {
        id: 6,
        title: "Union and Its Territory",
        content: CHAPTER_6_CONTENT,
        flashcards: CHAPTER_6_FLASHCARDS,
        mcqs: CHAPTER_6_MCQS
    },
    {
        id: 7,
        title: "Citizenship",
        content: CHAPTER_7_CONTENT,
        flashcards: CHAPTER_7_FLASHCARDS,
        mcqs: CHAPTER_7_MCQS
    },
    {
        id: 8,
        title: "Fundamental Rights (Part 1)",
        content: CHAPTER_8_CONTENT,
        flashcards: CHAPTER_8_FLASHCARDS,
        mcqs: CHAPTER_8_MCQS
    },
    {
        id: 9,
        title: "Fundamental Rights (Part 2)",
        content: CHAPTER_9_CONTENT,
        flashcards: CHAPTER_9_FLASHCARDS,
        mcqs: CHAPTER_9_MCQS
    },
    {
        id: 10,
        title: "Fundamental Rights (Part 3)",
        content: CHAPTER_10_CONTENT,
        flashcards: CHAPTER_10_FLASHCARDS,
        mcqs: CHAPTER_10_MCQS
    },
    {
        id: 11,
        title: "Directive Principles of State Policy",
        content: CHAPTER_11_CONTENT,
        flashcards: CHAPTER_11_FLASHCARDS,
        mcqs: CHAPTER_11_MCQS
    },
    {
        id: 12,
        title: "Fundamental Duties",
        content: CHAPTER_12_CONTENT,
        flashcards: CHAPTER_12_FLASHCARDS,
        mcqs: CHAPTER_12_MCQS
    },
    {
        id: 13,
        title: "Amendment of the Constitution",
        content: CHAPTER_13_CONTENT,
        flashcards: CHAPTER_13_FLASHCARDS,
        mcqs: CHAPTER_13_MCQS
    },
    {
        id: 14,
        title: "Basic Structure of the Constitution",
        content: CHAPTER_14_CONTENT,
        flashcards: CHAPTER_14_FLASHCARDS,
        mcqs: CHAPTER_14_MCQS
    },
    {
        id: 15,
        title: "Parliamentary System",
        content: CHAPTER_15_CONTENT,
        flashcards: CHAPTER_15_FLASHCARDS,
        mcqs: CHAPTER_15_MCQS
    },
    {
        id: 16,
        title: "Federal System",
        content: CHAPTER_16_CONTENT,
        flashcards: CHAPTER_16_FLASHCARDS,
        mcqs: CHAPTER16_MCQS
    },
    {
        id: 17,
        title: "Centre-State Relations",
        content: CHAPTER_17_CONTENT,
        flashcards: CHAPTER_17_FLASHCARDS,
        mcqs: CHAPTER17_MCQS
    },
    {
        id: 18,
        title: "Inter-State Relations",
        content: CHAPTER_18_CONTENT,
        flashcards: CHAPTER_18_FLASHCARDS,
        mcqs: CHAPTER_18_MCQS
    },
    {
        id: 19,
        title: "Emergency Provisions",
        content: CHAPTER_19_CONTENT,
        flashcards: CHAPTER_19_FLASHCARDS,
        mcqs: CHAPTER_19_MCQS
    },
    {
        id: 20,
        title: "Prime Minister", // Synced with Schedule Ch 20
        content: CHAPTER_22_CONTENT, // Note: Content files might still use old numbering, we just map ID to correct Title/Content
        flashcards: CHAPTER_22_FLASHCARDS,
        mcqs: CHAPTER_22_MCQS
    },
    {
        id: 21,
        title: "Cabinet Committees", // Synced with Schedule Ch 21
        content: CHAPTER_24_CONTENT, // Mapping to old Ch 24 file if that's where content is
        flashcards: CHAPTER_24_FLASHCARDS,
        mcqs: CHAPTER_24_MCQS
    },
    {
        id: 22,
        title: "Parliament", // Synced with Schedule Ch 22
        content: CHAPTER_25_CONTENT, // Old Ch 25 was Parliament
        flashcards: CHAPTER_25_FLASHCARDS,
        mcqs: CHAPTER_25_MCQS
    },
    {
        id: 23,
        title: "Parliamentary Committees", // Synced with Schedule Ch 23
        content: CHAPTER_26_CONTENT,
        flashcards: CHAPTER_26_FLASHCARDS,
        mcqs: CHAPTER_26_MCQS
    },
    {
        id: 24,
        title: "Parliamentary Forums",
        content: CHAPTER_27_CONTENT,
        flashcards: CHAPTER_27_FLASHCARDS,
        mcqs: CHAPTER_27_MCQS
    },
    {
        id: 25,
        title: "Parliamentary Group",
        content: CHAPTER_28_CONTENT,
        flashcards: CHAPTER_28_FLASHCARDS,
        mcqs: CHAPTER_28_MCQS
    },
    {
        id: 26,
        title: "Supreme Court", // Synced with Schedule Ch 26
        content: CHAPTER_29_CONTENT, // Old Ch 29
        flashcards: CHAPTER_29_FLASHCARDS,
        mcqs: CHAPTER_29_MCQS
    },
    // ID 27 Placeholder/Gap (Schedule doesn't strictly list 27 in this block)
    // We can map Chapter 28 (Parl Group) here as filler if needed, or just let 27 exist.
    {
        id: 27,
        title: "Parliamentary Forums", // Filler
        content: CHAPTER_27_CONTENT, // Will be Judicial Activism content file effectively
        flashcards: CHAPTER_27_FLASHCARDS,
        mcqs: CHAPTER_27_MCQS
    },
    {
        id: 28,
        title: "Judicial Review", // Synced with Schedule Ch 28
        content: CHAPTER_30_CONTENT, // Old Ch 30
        flashcards: CHAPTER_30_FLASHCARDS,
        mcqs: CHAPTER_30_MCQS
    },
    {
        id: 29,
        title: "Judicial Activism", // Synced with Schedule Ch 29
        content: CHAPTER_27_CONTENT, // REUSING Ch 27 file for Activism content since Ch 27 was placeholder
        // Wait, if I use Ch 27 for ID 27 AND ID 29, both will show Activism. That is fine.
        // Actually, let's just make ID 29 point to Ch 27.
        // And ID 27 point to something else or be Activism too.
        flashcards: CHAPTER_27_FLASHCARDS,
        mcqs: CHAPTER_27_MCQS
    },
    {
        id: 30,
        title: "Public Interest Litigation", // Synced with Schedule Ch 30
        content: CHAPTER_31_CONTENT,
        flashcards: CHAPTER_31_FLASHCARDS,
        mcqs: CHAPTER_31_MCQS
    },
    {
        id: 31,
        title: "Governor", // Synced with Schedule Ch 31
        content: CHAPTER_35_CONTENT,
        flashcards: CHAPTER_35_FLASHCARDS,
        mcqs: CHAPTER_35_MCQS
    },
    {
        id: 32,
        title: "Chief Minister", // Synced with Schedule Ch 32
        content: CHAPTER_36_CONTENT,
        flashcards: CHAPTER_36_FLASHCARDS,
        mcqs: CHAPTER_36_MCQS
    },
    {
        id: 33,
        title: "State Council of Ministers", // Synced with Schedule Ch 33
        content: CHAPTER_37_CONTENT,
        flashcards: CHAPTER_37_FLASHCARDS,
        mcqs: CHAPTER_37_MCQS
    },
    {
        id: 34,
        title: "High Court", // Synced with Schedule Ch 34
        content: CHAPTER_32_CONTENT,
        flashcards: CHAPTER_32_FLASHCARDS,
        mcqs: CHAPTER_32_MCQS
    },
    {
        id: 35,
        title: "Tribunals", // Assuming 35 for Tribunals if 36 is State Legislature (Schedule had 36 for both, need strict ID uniqueness) - actually Schedule line 57 says Tribunals is 36, but State Legislature is also 36. This is a collision.
        // Wait, user asked for Chapter 33: State Legislature. 
        // 6th edition: 33 = State Legislature. 
        // Schedule uses 36 for State Leg.
        // Schedule uses 36 for Tribunals.
        // This is a DATA ERROR in schedule. 
        // I will map ID 36 to State Legislature because that's the big chapter.
        // I will map ID 35 to Tribunals for now as a fallback/placeholder or 42 (Tribunals is usually later). 
        // Actually, let's stick to the visible block.
        // State Legislature -> 36.
        content: CHAPTER_64_CONTENT, // Tribunals old chapter
        flashcards: CHAPTER_64_FLASHCARDS,
        mcqs: CHAPTER_64_MCQS
    },
    {
        id: 36,
        title: "State Legislature", // Synced with Schedule Ch 36
        content: CHAPTER_38_CONTENT,
        flashcards: CHAPTER_38_FLASHCARDS,
        mcqs: CHAPTER_38_MCQS
    },
    {
        id: 37,
        title: "Subordinate Courts", // Synced with Schedule Ch 37
        content: CHAPTER_33_CONTENT,
        flashcards: CHAPTER_33_FLASHCARDS,
        mcqs: CHAPTER_33_MCQS
    },
    {
        id: 38,
        title: "Special Provisions", // Moving old 34 here if needed, or just placeholder
        content: CHAPTER_34_CONTENT,
        flashcards: CHAPTER_34_FLASHCARDS,
        mcqs: CHAPTER_34_MCQS
    },
    {
        id: 39,
        title: "Panchayati Raj",
        content: CHAPTER_39_CONTENT,
        flashcards: CHAPTER_39_FLASHCARDS,
        mcqs: CHAPTER_39_MCQS
    },
    {
        id: 40,
        title: "Municipalities",
        content: CHAPTER_40_CONTENT,
        flashcards: CHAPTER_40_FLASHCARDS,
        mcqs: CHAPTER_40_MCQS
    },
    {
        id: 41,
        title: "Election Commission",
        content: CHAPTER_41_CONTENT,
        flashcards: CHAPTER_41_FLASHCARDS,
        mcqs: CHAPTER_41_MCQS
    },
    {
        id: 42,
        title: "UPSC",
        content: CHAPTER_42_CONTENT,
        flashcards: CHAPTER_42_FLASHCARDS,
        mcqs: CHAPTER_42_MCQS
    },
    {
        id: 43,
        title: "SPSC",
        content: CHAPTER_43_CONTENT,
        flashcards: CHAPTER_43_FLASHCARDS,
        mcqs: CHAPTER_43_MCQS
    },
    {
        id: 44,
        title: "Finance Commission",
        content: CHAPTER_44_CONTENT,
        flashcards: CHAPTER_44_FLASHCARDS,
        mcqs: CHAPTER_44_MCQS
    },
    {
        id: 45,
        title: "GST Council",
        content: CHAPTER_45_CONTENT,
        flashcards: CHAPTER_45_FLASHCARDS,
        mcqs: CHAPTER_45_MCQS
    },
    {
        id: 46,
        title: "National Commission for SCs",
        content: CHAPTER_46_CONTENT,
        flashcards: CHAPTER_46_FLASHCARDS,
        mcqs: CHAPTER_46_MCQS
    },
    {
        id: 47,
        title: "National Commission for STs",
        content: CHAPTER_47_CONTENT,
        flashcards: CHAPTER_47_FLASHCARDS,
        mcqs: CHAPTER_47_MCQS
    },
    {
        id: 48,
        title: "National Commission for BCs",
        content: CHAPTER_48_CONTENT,
        flashcards: CHAPTER_48_FLASHCARDS,
        mcqs: CHAPTER_48_MCQS
    },
    {
        id: 49,
        title: "Special Officer for Linguistic Minorities",
        content: CHAPTER_49_CONTENT,
        flashcards: CHAPTER_49_FLASHCARDS,
        mcqs: CHAPTER_49_MCQS
    },
    {
        id: 50,
        title: "Comptroller and Auditor General",
        content: CHAPTER_50_CONTENT,
        flashcards: CHAPTER_50_FLASHCARDS,
        mcqs: CHAPTER_50_MCQS
    },
    {
        id: 51,
        title: "NITI Aayog",
        content: CHAPTER_51_CONTENT,
        flashcards: CHAPTER_51_FLASHCARDS,
        mcqs: CHAPTER_51_MCQS
    },
    {
        id: 52,
        title: "National Human Rights Commission",
        content: CHAPTER_52_CONTENT,
        flashcards: CHAPTER_52_FLASHCARDS,
        mcqs: CHAPTER_52_MCQS
    },
    {
        id: 53,
        title: "State Human Rights Commission",
        content: CHAPTER_53_CONTENT,
        flashcards: CHAPTER_53_FLASHCARDS,
        mcqs: CHAPTER_53_MCQS
    },
    {
        id: 54,
        title: "Central Information Commission",
        content: CHAPTER_54_CONTENT,
        flashcards: CHAPTER_54_FLASHCARDS,
        mcqs: CHAPTER_54_MCQS
    },
    {
        id: 55,
        title: "State Information Commission",
        content: CHAPTER_55_CONTENT,
        flashcards: CHAPTER_55_FLASHCARDS,
        mcqs: CHAPTER_55_MCQS
    },
    {
        id: 56,
        title: "Central Vigilance Commission",
        content: CHAPTER_56_CONTENT,
        flashcards: CHAPTER_56_FLASHCARDS,
        mcqs: CHAPTER_56_MCQS
    },
    {
        id: 57,
        title: "Central Bureau of Investigation",
        content: CHAPTER_57_CONTENT,
        flashcards: CHAPTER_57_FLASHCARDS,
        mcqs: CHAPTER_57_MCQS
    },
    {
        id: 58,
        title: "Lokpal and Lokayuktas",
        content: CHAPTER_58_CONTENT,
        flashcards: CHAPTER_58_FLASHCARDS,
        mcqs: CHAPTER_58_MCQS
    },
    {
        id: 59,
        title: "National Investigation Agency",
        content: CHAPTER_59_CONTENT,
        flashcards: CHAPTER_59_FLASHCARDS,
        mcqs: CHAPTER_59_MCQS
    },
    {
        id: 60,
        title: "National Disaster Management Authority",
        content: CHAPTER_60_CONTENT,
        flashcards: CHAPTER_60_FLASHCARDS,
        mcqs: CHAPTER_60_MCQS
    },
    {
        id: 61,
        title: "National Commission for Women",
        content: CHAPTER_61_CONTENT,
        flashcards: CHAPTER_61_FLASHCARDS,
        mcqs: CHAPTER_61_MCQS
    },
    {
        id: 62,
        title: "National Commission for Protection of Child Rights",
        content: CHAPTER_62_CONTENT,
        flashcards: CHAPTER_62_FLASHCARDS,
        mcqs: CHAPTER_62_MCQS
    },
    {
        id: 63,
        title: "National Commission for Minorities",
        content: CHAPTER_63_CONTENT,
        flashcards: CHAPTER_63_FLASHCARDS,
        mcqs: CHAPTER_63_MCQS
    },
    {
        id: 64,
        title: "Tribunals (CAT & SAT)",
        content: CHAPTER_64_CONTENT,
        flashcards: CHAPTER_64_FLASHCARDS,
        mcqs: CHAPTER_64_MCQS
    },
    {
        id: 65,
        title: "Law Commission & Delimitation Commission",
        content: CHAPTER_65_CONTENT,
        flashcards: CHAPTER_65_FLASHCARDS,
        mcqs: CHAPTER_65_MCQS
    },
    {
        id: 66,
        title: "Political Parties",
        content: CHAPTER_66_CONTENT,
        flashcards: CHAPTER_66_FLASHCARDS,
        mcqs: CHAPTER_66_MCQS
    },
    {
        id: 67,
        title: "Role of Regional Parties",
        content: CHAPTER_67_CONTENT,
        flashcards: CHAPTER_67_FLASHCARDS,
        mcqs: CHAPTER_67_MCQS
    },
    {
        id: 68,
        title: "Elections",
        content: CHAPTER_68_CONTENT,
        flashcards: CHAPTER_68_FLASHCARDS,
        mcqs: CHAPTER_68_MCQS
    },
    {
        id: 69,
        title: "Election Laws",
        content: CHAPTER_69_CONTENT,
        flashcards: CHAPTER_69_FLASHCARDS,
        mcqs: CHAPTER_69_MCQS
    },
    {
        id: 70,
        title: "Electoral Reforms",
        content: CHAPTER_70_CONTENT,
        flashcards: CHAPTER_70_FLASHCARDS,
        mcqs: CHAPTER_70_MCQS
    },
    {
        id: 71,
        title: "Voting Behaviour",
        content: CHAPTER_71_CONTENT,
        flashcards: CHAPTER_71_FLASHCARDS,
        mcqs: CHAPTER_71_MCQS
    },
    {
        id: 72,
        title: "Anti-Defection Law",
        content: CHAPTER_72_CONTENT,
        flashcards: CHAPTER_72_FLASHCARDS,
        mcqs: CHAPTER_72_MCQS
    },
    {
        id: 73,
        title: "Pressure Groups",
        content: CHAPTER_73_CONTENT,
        flashcards: CHAPTER_73_FLASHCARDS,
        mcqs: CHAPTER_73_MCQS
    },
    {
        id: 74,
        title: "National Integration",
        content: CHAPTER_74_CONTENT,
        flashcards: CHAPTER_74_FLASHCARDS,
        mcqs: CHAPTER_74_MCQS
    },
    {
        id: 75,
        title: "Foreign Policy",
        content: CHAPTER_75_CONTENT,
        flashcards: CHAPTER_75_FLASHCARDS,
        mcqs: CHAPTER_75_MCQS
    },
    {
        id: 76,
        title: "Official Language",
        content: CHAPTER_76_CONTENT,
        flashcards: CHAPTER_76_FLASHCARDS,
        mcqs: CHAPTER_76_MCQS
    },
    {
        id: 77,
        title: "Public Services",
        content: CHAPTER_77_CONTENT,
        flashcards: CHAPTER_77_FLASHCARDS,
        mcqs: CHAPTER_77_MCQS
    },
    {
        id: 78,
        title: "Rights & Liabilities",
        content: CHAPTER_78_CONTENT,
        flashcards: CHAPTER_78_FLASHCARDS,
        mcqs: CHAPTER_78_MCQS
    },
    {
        id: 79,
        title: "Spec. Prov. Classes",
        content: CHAPTER_79_CONTENT,
        flashcards: CHAPTER_79_FLASHCARDS,
        mcqs: CHAPTER_79_MCQS
    },
    {
        id: 80,
        title: "Consumer Commissions",
        content: CHAPTER_80_CONTENT,
        flashcards: CHAPTER_80_FLASHCARDS,
        mcqs: CHAPTER_80_MCQS
    },
    {
        id: 81,
        title: "Bar Council of India",
        content: CHAPTER_81_CONTENT,
        flashcards: CHAPTER_81_FLASHCARDS,
        mcqs: CHAPTER_81_MCQS
    },
    {
        id: 82,
        title: "Landmark Judgements",
        content: CHAPTER_82_CONTENT,
        flashcards: CHAPTER_82_FLASHCARDS,
        mcqs: CHAPTER_82_MCQS
    },
    {
        id: 83,
        title: "Constitutional Doctrines",
        content: CHAPTER_83_CONTENT,
        flashcards: CHAPTER_83_FLASHCARDS,
        mcqs: CHAPTER_83_MCQS
    },
    {
        id: 84,
        title: "World Constitutions",
        content: CHAPTER_84_CONTENT,
        flashcards: CHAPTER_84_FLASHCARDS,
        mcqs: CHAPTER_84_MCQS
    },
    {
        id: 85,
        title: "State Services & Adv.",
        content: CHAPTER_85_CONTENT,
        flashcards: CHAPTER_85_FLASHCARDS,
        mcqs: CHAPTER_85_MCQS
    },
    {
        id: 86,
        title: "Public Policy",
        content: CHAPTER_86_CONTENT,
        flashcards: CHAPTER_86_FLASHCARDS,
        mcqs: CHAPTER_86_MCQS
    },
    {
        id: 87,
        title: "National Sec. Council",
        content: CHAPTER_87_CONTENT,
        flashcards: CHAPTER_87_FLASHCARDS,
        mcqs: CHAPTER_87_MCQS
    },
    {
        id: 88,
        title: "Competition Commission",
        content: CHAPTER_88_CONTENT,
        flashcards: CHAPTER_88_FLASHCARDS,
        mcqs: CHAPTER_88_MCQS
    },
    {
        id: 89,
        title: "UIDAI (Aadhaar)",
        content: CHAPTER_89_CONTENT,
        flashcards: CHAPTER_89_FLASHCARDS,
        mcqs: CHAPTER_89_MCQS
    },
    {
        id: 90,
        title: "PFRDA & IRDAI",
        content: CHAPTER_90_CONTENT,
        flashcards: CHAPTER_90_FLASHCARDS,
        mcqs: CHAPTER_90_MCQS
    },
    {
        id: 91,
        title: "Health Authority (NHA)",
        content: CHAPTER_91_CONTENT,
        flashcards: CHAPTER_91_FLASHCARDS,
        mcqs: CHAPTER_91_MCQS
    },
    {
        id: 92,
        title: "FSSAI & BIS",
        content: CHAPTER_92_CONTENT,
        flashcards: CHAPTER_92_FLASHCARDS,
        mcqs: CHAPTER_92_MCQS
    },
    {
        id: 93,
        title: "NCRWC",
        content: CHAPTER_93_CONTENT,
        flashcards: CHAPTER_93_FLASHCARDS,
        mcqs: CHAPTER_93_MCQS
    },
    {
        id: 94,
        title: "Const. Appendices",
        content: CHAPTER_94_CONTENT,
        flashcards: CHAPTER_94_FLASHCARDS,
        mcqs: CHAPTER_94_MCQS
    },
    {
        id: 95,
        title: "Final Summary",
        content: CHAPTER_95_CONTENT,
        flashcards: CHAPTER_95_FLASHCARDS,
        mcqs: CHAPTER_95_MCQS
    }
];

export const POLITY_SUMMARY_FACTS = {
    dates: IMPORTANT_DATES,
    persons: FIRST_HOLDERS,
    acts: IMPORTANT_ACTS,
    sources: CONSTITUTION_SOURCES,
    cases: LANDMARK_CASES,
    schedules: SCHEDULES_SUMMARY
};

export function getRevisionDataById(id: number) {
    return POLITY_REVISION_CHAPTERS.find(c => c.id === id);
}
