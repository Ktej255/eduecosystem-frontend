const fs = require('fs');

const files = [
  'src/app/(dashboard)/admin/ai-debug/page.tsx',
  'src/app/(dashboard)/admin/drill/analytics/page.tsx',
  'src/app/(dashboard)/admin/drill/insights/page.tsx',
  'src/app/(dashboard)/admin/drill/questions/new/page.tsx',
  'src/app/(dashboard)/admin/drill/questions/page.tsx',
  'src/app/(dashboard)/admin/upsc/batch1/page.tsx',
  'src/app/(dashboard)/users/learners/page.tsx',
  'src/app/(graphotherapy-dashboard)/graphotherapy-dashboard/page.tsx',
  'src/app/(mobile-crm)/m/activities/page.tsx',
  'src/app/(mobile-crm)/m/check-in/page.tsx',
  'src/app/(student-portal)/student/batch1/analytics/page.tsx',
  'src/app/(student-portal)/student/batch1/progress/page.tsx',
  'src/app/(student-portal)/student/batch1-1/[weekId]/saturday-test/page.tsx',
  'src/app/(student-portal)/student/community/page.tsx',
  'src/app/(student-portal)/student/payment/status/page.tsx',
  'src/app/(student-portal)/student/upsc/[weekId]/saturday-test/page.tsx',
  'src/app/(student-portal)/student/upsc-store/page.tsx',
  'src/app/(teacher-portal)/teacher/batch1/page.tsx',
  'src/app/(teacher-portal)/teacher/content/page.tsx',
  'src/app/(teacher-portal)/teacher/students/page.tsx',
  'src/app/api/knowledge-atlas/save/route.ts'
];

files.forEach(f => {
  try {
    const t = fs.readFileSync(f, 'utf8');
    if (!t.includes('use client') && !t.includes('"use client"') && !t.includes("'use client'")) {
      console.log('[SERVER_COMPONENT_WITH_JSON_CALL]', f);
    }
  } catch(e) { /* ignore */ }
});
