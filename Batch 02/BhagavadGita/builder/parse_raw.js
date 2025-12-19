const fs = require('fs');
const path = require('path');

const RAW_FILE = path.join(__dirname, '../raw_content.txt');
const RAW_CONTENT = fs.readFileSync(RAW_FILE, 'utf-8');

function parse() {
    const lines = RAW_CONTENT.split('\n');
    const mappings = [];
    const contentSnippets = {};

    let currentSection = null;
    let sayingsBuffer = [];
    let collectingSayings = false;

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // 1. Detect Intro Content (Triad)
        if (trimmed.includes('Brahma, Vishnu and Siva make the Triad')) {
            contentSnippets['intro'] = trimmed;
        }

        // 2. Detect Gita Chapters
        // Pattern: BG01    BG Chapter 01 ...
        if (/^BG\d{2}/.test(trimmed)) {
            const match = trimmed.match(/^(BG\d{2})\s+(.*)$/);
            if (match) {
                const code = match[1];
                const title = match[2];
                // remove "BG Chapter XX" redundancy if needed
                mappings.push({
                    originalUrl: `/${code.toLowerCase()}.htm`, // Assuming
                    pageTitle: title,
                    newPath: `bhagavadgita/chapters/${code.toLowerCase()}.html`,
                    category: 'BhagavadGita',
                    type: 'chapter',
                    // extract chapter number
                    chapter: parseInt(code.replace('BG', ''), 10)
                });
            }
        }

        // 3. Detect Upanishads
        // Pattern: IsaUpanisad, or ending in Upanisad
        if (/Upanisad$/.test(trimmed) && !trimmed.includes('.pdf') && !trimmed.includes('.html')) {
            mappings.push({
                originalUrl: `/${trimmed}.htm`,
                pageTitle: trimmed,
                newPath: `upanishads/individual/${trimmed.toLowerCase().replace('upanisad', '-upanishad')}.html`,
                category: 'Upanishads',
                type: 'article'
            });
        }

        // 4. Detect Ramakrishna Sayings
        if (trimmed.includes("SayingsOfRamakrishnaParamahamsa.pdf")) {
            collectingSayings = true;
        }
        if (collectingSayings) {
            sayingsBuffer.push(trimmed);
        }
    });

    // Save Sayings
    contentSnippets['ramakrishna'] = sayingsBuffer.join('\n');

    console.log(JSON.stringify({ mappings, contentSnippets }, null, 2));
}

parse();
