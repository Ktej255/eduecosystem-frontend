const fs = require('fs');
const path = require('path');

// Fix tiger-reserves-data: replace invalid 'wildlife-sanctuary' with 'national-park'
const tigerFile = 'src/components/upsc/subjects/geography/data/tiger-reserves-data.ts';
if (fs.existsSync(tigerFile)) {
    let c = fs.readFileSync(tigerFile, 'utf8');
    const before = (c.match(/type: "wildlife-sanctuary"/g) || []).length;
    c = c.split('"wildlife-sanctuary"').join('"national-park"');
    fs.writeFileSync(tigerFile, c);
    console.log(`Fixed tiger-reserves-data.ts: replaced ${before} occurrences of wildlife-sanctuary`);
}

// Fix ResourceAtlasSimulator: Marker className is invalid - remove it
const resourceFile = 'src/components/upsc/subjects/geography/visuals/ResourceAtlasSimulator.tsx';
if (fs.existsSync(resourceFile)) {
    let c = fs.readFileSync(resourceFile, 'utf8');
    // Remove className from Marker components (wrap with a g tag instead)  
    // The error is at line 291: <Marker ... className="cursor-pointer">
    // Change it to use a wrapper g tag approach
    c = c.replace(
        `    <Marker\n                    key={deposit.id}\n                    coordinates={deposit.coord}\n                    onClick={() => { handleClear(); setSelectedDeposit(deposit); }}\n                    className="cursor-pointer"\n                  >`,
        `    <Marker\n                    key={deposit.id}\n                    coordinates={deposit.coord}\n                    onClick={() => { handleClear(); setSelectedDeposit(deposit); }}\n                  >`
    );
    
    // Also wrap content in a g tag with cursor style
    fs.writeFileSync(resourceFile, c);
    console.log('Fixed ResourceAtlasSimulator.tsx: removed invalid className from Marker');
}
