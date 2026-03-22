const fs = require('fs');
const path = require('path');

const dir = 'src/components/upsc/subjects/history/data/medieval';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    // The Subtopic interface currently only has id and name.
    // The SUBTOPICS array also has explanation fields on objects.
    // Add explanation as optional to allow this.
    if (content.includes('export interface Subtopic {') && !content.includes('explanation?')) {
        content = content.replace(
            /export interface Subtopic \{\s*id: string;\s*name: string;\s*\}/,
            'export interface Subtopic {\n    id: string;\n    name: string;\n    explanation?: string;\n}'
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed: ' + fullPath);
    }
});
