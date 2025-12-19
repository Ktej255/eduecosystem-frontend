const fs = require('fs-extra');
const path = require('path');
const config = require('./config');

const DIST_DIR = path.join(__dirname, '..'); // Root of BhagavadGita


function generateNavigation(navConfig) {
    let html = '<ul class="nav-menu">';

    for (const key in navConfig) {
        const item = navConfig[key];

        if (item.items) {
            // Dropdown
            html += `<li class="nav-item has-dropdown">
                <a href="#" class="nav-link">${item.title} ▾</a>
                <ul class="dropdown-menu">`;

            for (const subItem of item.items) {
                html += `<li><a href="${subItem.href}">${subItem.title}</a></li>`;
            }

            html += `</ul></li>`;
        } else {
            // Single Link
            html += `<li class="nav-item"><a href="${item.href}" class="nav-link">${item.title}</a></li>`;
        }
    }

    html += '</ul>';
    return html;
}

async function buildSite() {
    console.log('Starting build process...');

    // 1. Ensure directories exist (redundant but safe)
    // already done via command line, but good for portability


    // Load Raw Content
    const RAW_CONTENT_FILE = path.join(DIST_DIR, 'raw_content.txt');
    let rawContent = '';
    try {
        rawContent = fs.readFileSync(RAW_CONTENT_FILE, 'utf-8');
    } catch (e) {
        console.warn('No raw_content.txt found');
    }

    const navHtml = generateNavigation(config.navigation);

    // 2. Generate Pages
    for (const page of config.mappings) {
        console.log(`Generating ${page.newPath}...`);

        // Simple Content Injection Logic
        let pageContent = '[Content will be scraped and inserted here]';

        if (page.category === 'Home' && rawContent.includes('Brahma, Vishnu and Siva')) {
            const intro = rawContent.split('\n').filter(l => l.includes('Triangle') || l.includes('Triad') || l.includes('Sakthi')).join('<br>');
            pageContent = `
                <h2>Welcome to BhagavadGita</h2>
                <p>${intro}</p>
                <div class="features">
                    <h3>Most Popular</h3>
                    <ul>
                        <li><a href="/resources/ramakrishna-sayings.html">Sayings of Ramakrishna</a></li>
                        <li><a href="/yoga/kundalini.html">Kundalini Power</a></li>
                    </ul>
                </div>
             `;
        } else if (page.newPath.includes('ramakrishna-sayings')) {
            pageContent = '<h2>Sayings of Sri Ramakrishna</h2><ul>';
            const lines = rawContent.split('\n');
            let capturing = false;
            lines.forEach(line => {
                if (line.includes('SayingsOfRamakrishnaParamahamsa.pdf')) capturing = true;
                if (capturing && /^\d+\./.test(line.trim())) {
                    pageContent += `<li>${line.trim()}</li>`;
                }
            });
            pageContent += '</ul>';
        }

        const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.pageTitle}</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="container header-content">
            <div class="logo">
                <h1>BhagavadGita</h1>
            </div>
            <nav>
                ${navHtml}
            </nav>
        </div>
    </header>
    <main>
        <div class="container">
            <article class="page-content">
                <h1>${page.pageTitle}</h1>
                <p class="meta">Original source: <a href="${config.baseUrl}${page.originalUrl}" target="_blank">${page.originalUrl}</a></p>
                <div class="content-placeholder">
                    ${pageContent}
                </div>
            </article>
        </div>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2025 BhagavadGita Archive | Preserving Wisdom</p>
        </div>
    </footer>
</body>
</html>
    `;

        try {
            await fs.outputFile(path.join(DIST_DIR, page.newPath), content);
        } catch (err) {
            console.error(`Error writing ${page.newPath}`, err);
        }
    }

    // 3. Generate Sitemap (Basic)
    console.log('Generating sitemap.xml...');
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${config.mappings.map(p => `  <url>
    <loc>http://bhagavadgitausa.com/${p.newPath}</loc>
  </url>`).join('\n')}
</urlset>`;
    await fs.outputFile(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent);

    console.log('Build complete.');
}

buildSite();
