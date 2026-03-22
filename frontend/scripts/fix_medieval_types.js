const fs = require('fs');
const path = require('path');

const dir = 'src/components/upsc/subjects/history/data/medieval';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    // Fix: MEDIEVAL_CHAPTER_X_SUBTOPICS is typed as Question[] but holds Subtopic[] objects
    // The variable name/array contains subtopics (string IDs), not questions (number IDs)
    if (content.includes('SUBTOPICS: Question[]')) {
        content = content.replace(
            /export const MEDIEVAL_CHAPTER_\d+_SUBTOPICS: Question\[\]/g,
            (match) => match.replace('Question[]', 'Subtopic[]')
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed: ' + fullPath);
    }
});
