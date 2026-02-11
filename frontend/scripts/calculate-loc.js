const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const extensions = ['.ts', '.tsx', '.js', '.jsx', '.css'];

function countLines(dir, metrics = { total: 0, byExtension: {}, byFeature: {} }) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            countLines(fullPath, metrics);
        } else {
            const ext = path.extname(file);
            if (extensions.includes(ext)) {
                const content = fs.readFileSync(fullPath, 'utf8');
                const lines = content.split('\n').length;

                metrics.total += lines;
                metrics.byExtension[ext] = (metrics.byExtension[ext] || 0) + lines;

                // Simple feature detection based on path
                if (fullPath.includes('history')) {
                    metrics.byFeature['History'] = (metrics.byFeature['History'] || 0) + lines;
                } else if (fullPath.includes('polity')) {
                    metrics.byFeature['Polity'] = (metrics.byFeature['Polity'] || 0) + lines;
                } else if (fullPath.includes('geography')) {
                    metrics.byFeature['Geography'] = (metrics.byFeature['Geography'] || 0) + lines;
                } else if (fullPath.includes('admin') || fullPath.includes('teacher')) {
                    metrics.byFeature['Admin/Teacher'] = (metrics.byFeature['Admin/Teacher'] || 0) + lines;
                } else if (fullPath.includes('csat')) {
                    metrics.byFeature['CSAT'] = (metrics.byFeature['CSAT'] || 0) + lines;
                } else {
                    metrics.byFeature['Shared/Core'] = (metrics.byFeature['Shared/Core'] || 0) + lines;
                }
            }
        }
    });

    return metrics;
}

const results = countLines(srcDir);
console.log(JSON.stringify(results, null, 2));
