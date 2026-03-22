const fs = require('fs');

const files = [
  'src/components/upsc/subjects/polity/data/mcqs/mcq-repository.ts',
  'src/components/upsc/subjects/polity/data/parliament-mcqs.ts',
  'src/components/upsc/subjects/polity/data/polity-pyqs.ts',
  'src/components/upsc/subjects/polity/data/tests/polity-paper1-jan31.ts',
  'src/components/upsc/subjects/polity/data/tests/polity-paper2-jan31.ts'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  
  let content = fs.readFileSync(f, 'utf8');
  
  // 1. Clean out existing correctAnswer properties to avoid duplicates
  content = content.replace(/correctAnswer:\s*[^,]+,\s*/g, '');
  content = content.replace(/correctAnswer:\s*[^,]+(?=\s*\})/g, '');
  
  // 2. Add correctIndex and correctAnswer perfectly
  content = content.replace(/correctIndex:\s*([^,]*),/g, (match, p1) => {
      const val = p1.trim() === '' ? '0' : p1.trim();
      return `correctIndex: ${val},\n        correctAnswer: ${val},`;
  });
  
  fs.writeFileSync(f, content);
  console.log('Processed ' + f);
});
