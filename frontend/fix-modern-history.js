const fs = require('fs');
const path = require('path');

const modernHistoryDir = path.join(__dirname, 'src', 'components', 'upsc', 'subjects', 'history', 'data', 'mcqs', 'modern');

// Regex to extract options A, B, C, D from a string
const extractOptions = (text) => {
    const options = ['', '', '', ''];
    const matchA = text.match(/A\.\s*(.*?)(?=\s*[B-D]\.|$)/s);
    const matchB = text.match(/B\.\s*(.*?)(?=\s*[C-D]\.|$)/s);
    const matchC = text.match(/C\.\s*(.*?)(?=\s*D\.\s*|$)/s);
    const matchD = text.match(/D\.\s*(.*?)(?=\n|\s*\*|$)/s);

    if (matchA) options[0] = matchA[1].trim();
    if (matchB) options[1] = matchB[1].trim();
    if (matchC) options[2] = matchC[1].trim();
    if (matchD) options[3] = matchD[1].trim();

    return options.some(opt => opt === '') ? null : options;
};

// Fix a single corrupted question object
const fixQuestion = (q) => {
    if (!q.id || !q.id.includes('NEW')) return q; // Only target the corrupted NEW ones

    const lastOptionBlob = q.options[q.options.length - 1];
    
    // Attempt to extract A, B, C, D from the blob
    const extracted = extractOptions(lastOptionBlob);
    
    if (extracted) {
        // We successfully extracted 4 options!
        q.options = extracted;
    } else {
        console.log(`Failed to cleanly extract options for ${q.id}`);
    }
    
    // Clean up explanations
    if (!q.explanation) q.explanation = "Explanation pending.";
    
    return q;
};


// Main process
const processFiles = () => {
    const files = fs.readdirSync(modernHistoryDir).filter(f => f.endsWith('.ts'));
    let totalFixed = 0;
    let totalCorrupted = 0;

    files.forEach(file => {
        const filePath = path.join(modernHistoryDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        // Regex updated to catch "export const chapter17MCQs: MCQ[] = ["
        const match = content.match(/export const (\w+)(?::\s*MCQ\[\])? = (\[[\s\S]*\]);/);
        
        if (!match) {
            console.log(`Skipping ${file} - could not match array format`);
            return;
        }

        const constName = match[1];
        const arrayString = match[2];

        try {
            const parsedArray = eval(`(${arrayString})`);

            let fixedCount = 0;
            const fixedArray = parsedArray.map(q => {
                if (q.id && q.id.includes('NEW')) {
                    totalCorrupted++;
                    const original = JSON.stringify(q);
                    const fixed = fixQuestion(q);
                    if (JSON.stringify(fixed) !== original) fixedCount++;
                    return fixed;
                }
                return q;
            });

            if (fixedCount > 0) {
                totalFixed += fixedCount;
                
                // Preserve imports/interfaces if they exist at the top
                const headerMatch = content.match(/^(import[\s\S]*?\n\n)?(?=export const)/);
                const header = headerMatch ? headerMatch[1] || '' : '';
                
                // Maintain the TypeScript type annotation if it was there
                const hasType = content.includes(': MCQ[]');
                const declaration = hasType ? `export const ${constName}: MCQ[] = ` : `export const ${constName} = `;
                
                const newContent = `${header}${declaration}${JSON.stringify(fixedArray, null, 4)};\n`;
                fs.writeFileSync(filePath, newContent, 'utf-8');
                console.log(`Fixed ${fixedCount} questions in ${file}`);
            }

        } catch (e) {
            console.log(`Error parsing ${file}: ${e.message}`);
        }
    });

    console.log(`Audit Fix Complete. Fixed ${totalFixed} out of ${totalCorrupted} corrupted questions.`);
};

processFiles();
