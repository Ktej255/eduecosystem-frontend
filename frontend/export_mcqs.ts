import * as fs from 'fs';
import * as path from 'path';

// Helper to crawl directories
function getFiles(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else if (filePath.endsWith('.ts') && !filePath.includes('.d.ts') && !filePath.includes('types')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

async function main() {
    console.log("Starting MCQ export...");
    const basePath = path.join(process.cwd(), 'src', 'components');
    const allFiles = getFiles(basePath);
    
    let totalQuestions = 0;
    const allMcqs: any[] = [];
    
    // We only care about files that export arrays ending with _MCQS or containing 'mcqs'
    // But since dynamic imports might fail if the file imports React or local CSS (which Node can't run),
    // we use a regex approach in JS just to extract the objects if dynamic import fails.
    
    // Actually, dynamic import using tsx usually works as long as the file has no side effects 
    // like importing CSS or missing react.
    let failedFiles = 0;
    
    for (const file of allFiles) {
        // Skip obvious non-data files to save time
        if (!file.includes('mcqs') && !file.includes('chapter') && !file.includes('data')) continue;
        
        try {
            // tsx supports dynamic imports. For Windows, we need file:/// prefix
            const fileUrl = 'file:///' + file.replace(/\\/g, '/');
            const module = await import(fileUrl);
            for (const key in module) {
                if (Array.isArray(module[key])) {
                    const arr = module[key];
                    if (arr.length > 0 && arr[0].question && arr[0].options) {
                        arr.forEach(q => {
                            allMcqs.push({
                                ...q,
                                _sourceFile: file,
                                _exportName: key
                            });
                        });
                        totalQuestions += arr.length;
                        console.log(`Extracted ${arr.length} MCQs from ${path.basename(file)} (${key})`);
                    }
                }
            }
        } catch (e: any) {
            // If import fails (usually due to Next.js aliases like @/components or CSS imports)
            // We ignore it silently as most data files don't import problematic things
            if (failedFiles < 5) {
                console.error(`Failed to import ${file}:`, e.message);
            }
            failedFiles++;
        }
    }
    
    console.log(`\nSuccessfully extracted ${totalQuestions} MCQs total.`);
    console.log(`Failed to import ${failedFiles} files (likely UI components containing 'data' in name).`);
    
    fs.writeFileSync('all_mcqs_extracted.json', JSON.stringify(allMcqs, null, 2));
    console.log('Saved to all_mcqs_extracted.json');
}

main().catch(console.error);
