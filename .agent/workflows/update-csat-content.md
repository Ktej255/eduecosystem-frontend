---
description: How to update CSAT content in the Pomodoro Evening Session (Batch 1.1)
---

# CSAT Content Update Workflow for Pomodoro Evening Session

## Context & Important Rules

1. **IGNORE old 90-day schedule CSAT** - This is for the NEW Pomodoro schedule only
2. **Location**: Evening Session → After Flashcards & MCQs → CSAT (Hour 3)
3. **Day Mapping**: "January 1" or "Day 1" from user = Day 1 of Pomodoro Week 1
4. **Total Days**: 20 days (January 1-20 content maps to Pomodoro Weeks 1-3)

## Key Files to Update

### Primary CSAT Data Files:
1. **Main CSAT Page**: `src/app/(student-portal)/student/batch1/csat/page.tsx`
   - Contains `CSAT_MONTHS` array with monthly topics and sessions
   - Contains `QUESTIONS_DB` with practice questions by topic

2. **Month Detail Page**: `src/app/(student-portal)/student/batch1/csat/[month]/page.tsx`
   - Contains `CSAT_DATA` with detailed daily session titles
   - Contains `SAMPLE_QUESTIONS` with 15 practice questions per month/topic

### Evening Session Component:
- **Path**: `src/components/batch1/EveningSessionDayView.tsx`
- Hour 3 (8:00 PM - 9:00 PM) contains the CSAT block

## Data Structure Reference

### In `csat/page.tsx`:
```typescript
const CSAT_MONTHS = [
    {
        month: "January",       // Month name
        topic: "Topic Name",    // Main topic for the month
        sessions: [
            { day: 1, title: "Session Title", videoUrl: "", completed: false },
            // ... up to day 10
        ]
    }
];
```

### In `csat/[month]/page.tsx`:
```typescript
const CSAT_DATA: Record<string, {...}> = {
    january: {
        month: "January",
        topic: "Topic Name",
        sessions: [
            { day: 1, title: "Session Title" },
            // ... up to day 10
        ]
    }
};

const SAMPLE_QUESTIONS: Record<string, {...}[]> = {
    january: [
        { 
            id: 1, 
            question: "Question text?", 
            options: ["A", "B", "C", "D"], 
            correctAnswer: 0,  // 0-indexed
            explanation: "Why correct answer is correct"
        },
        // ... 15 questions per topic
    ]
};
```

## Day Mapping Table

| User Provides | Maps To |
|---------------|---------|
| Day 1 (Jan 1) | Week 1, Day 1 |
| Day 2 (Jan 2) | Week 1, Day 2 |
| Day 3 (Jan 3) | Week 1, Day 3 |
| Day 4 (Jan 4) | Week 1, Day 4 |
| Day 5 (Jan 5) | Week 1, Day 5 |
| Day 6 (Jan 6) | Week 1, Day 6 |
| Day 7 (Jan 7) | Week 2, Day 1 |
| Day 8 (Jan 8) | Week 2, Day 2 |
| ... | ... |
| Day 14 (Jan 14) | Week 2, Day 7 |
| Day 15 (Jan 15) | Week 3, Day 1 |
| ... | ... |
| Day 20 (Jan 20) | Week 3, Day 6 |

## Update Checklist

When user provides CSAT content for a day:

- [ ] Identify the day number from user's content
- [ ] Update session title in `CSAT_MONTHS` array (csat/page.tsx)
- [ ] Update session title in `CSAT_DATA` (csat/[month]/page.tsx)
- [ ] Add/update practice questions in `SAMPLE_QUESTIONS` if provided
- [ ] Ensure `id` values are unique and sequential
- [ ] Verify `correctAnswer` is 0-indexed (0=A, 1=B, 2=C, 3=D)

## Verification Steps

1. Run `npm run build` to check for TypeScript errors
2. Navigate to `/student/batch1/csat` and verify month displays correctly
3. Click into the month and verify session titles appear
4. Start a session and verify questions load properly
