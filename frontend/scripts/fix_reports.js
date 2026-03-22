const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/upsc/platform/reports/Batch1DeepReport.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix Record definitions
content = content.replace(/Record<number, ChapterTestResult\[\]>/g, 'Record<string | number, ChapterTestResult[]>');

// 2. Fix mapping of chapterNumber and chapterId
content = content.replace(/chapterNumber: r\.chapterId/g, 'chapterNumber: r.chapterId as any');
content = content.replace(/chapterId: r\.chapterId/g, 'chapterId: r.chapterId as any');

// 3. Fix catch blocks
content = content.replace(/catch \{ \}/g, 'catch (e: any) { }');
content = content.replace(/catch \(e\) \{/g, 'catch (e: any) {');

// 4. Fix aggregateStats sorting and access
content = content.replace(/\(b\[1\] as number\)/g, '(b[1] as any)');
content = content.replace(/\(a\[1\] as number\)/g, '(a[1] as any)');

// 5. Fix ChapterMCQReport subject filter
content = content.replace(/\(c\.subject \|\| 'Polity'\)\.toLowerCase\(\) === selectedSubject/g, '(c.subject || "Polity").toLowerCase() === (selectedSubject as string)');

// 6. Fix ChapterReportDetail state
content = content.replace(/const \[allReports, setAllReports\] = useState<{ chapterId: number; reports: ChapterTestResult\[\], subject\?: string }\[\]>\(\[\]\);/g, 
    'const [allReports, setAllReports] = useState<{ chapterId: any; reports: ChapterTestResult[], subject?: string }[]>([]);');

// 7. Fix chapters array definition
content = content.replace(/const chapters: \{ chapterId: number; reports: ChapterTestResult\[\]; subject\?: string \}\[\] = \[\];/g,
    'const chapters: { chapterId: any; reports: ChapterTestResult[]; subject?: string }[] = [];');

// 8. Fix chapterId access in findIndex
content = content.replace(/c\.chapterId === parseInt\(cid\)/g, 'String(c.chapterId) === String(cid)');

// 9. Fix levels access in aggregatedStats
content = content.replace(/levelData\[level\]/g, '(levelData as any)[level]');

// 10. Fix confidenceData access
content = content.replace(/confidenceData\[q\.confidence\]/g, '(confidenceData as any)[q.confidence]');

// 11. Fix colors access in Confidence Analysis
content = content.replace(/colors\[level\]/g, '(colors as any)[level]');

fs.writeFileSync(filePath, content);
console.log('Fixed Batch1DeepReport.tsx');
