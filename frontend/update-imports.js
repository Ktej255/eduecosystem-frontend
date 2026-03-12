const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Replace components/upsc/ -> components/upsc/engine/
    content = content.replace(/@\/components\/upsc\//g, '@/components/upsc/engine/');

    // 2. Component/framework folders from batch1
    content = content.replace(/@\/components\/batch1\/components\//g, '@/components/upsc/common/components/');
    content = content.replace(/@\/components\/batch1\/framework\//g, '@/components/upsc/common/framework/');
    content = content.replace(/@\/components\/batch1\/analytics\//g, '@/components/upsc/infrastructure/analytics/');
    content = content.replace(/@\/components\/batch1\/flashcard\//g, '@/components/upsc/infrastructure/flashcard/');
    content = content.replace(/@\/components\/batch1\/gamification\//g, '@/components/upsc/infrastructure/gamification/');
    content = content.replace(/@\/components\/batch1\/qa\//g, '@/components/upsc/infrastructure/qa/');
    content = content.replace(/@\/components\/batch1\/revision\//g, '@/components/upsc/infrastructure/revision/');
    content = content.replace(/@\/components\/batch1\/workflow\//g, '@/components/upsc/infrastructure/workflow/');
    
    // 3. Move specific common root files
    content = content.replace(/@\/components\/batch1\/FocusPortal/g, '@/components/upsc/common/FocusPortal');
    content = content.replace(/@\/components\/batch1\/SubjectAccessGate/g, '@/components/upsc/common/SubjectAccessGate');
    content = content.replace(/@\/components\/batch1\/TestCredentialsCard/g, '@/components/upsc/common/TestCredentialsCard');
    
    // 4. Transform remainder of batch1 and batch1-1
    content = content.replace(/@\/components\/batch1-1\//g, '@/components/upsc/platform/');
    content = content.replace(/@\/components\/batch1\//g, '@/components/upsc/subjects/');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
    }
});

console.log(`Successfully updated imports in ${changedFiles} files.`);
