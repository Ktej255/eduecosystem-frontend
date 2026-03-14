const fs = require('fs');
const path = require('path');

const filePath = path.resolve('d:/Graphology/Master Software/Eduecosystem/frontend/src/components/upsc/subjects/geography/data/mcqs/ncert-class12-india.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Function to find the index of the correct answer string in the options array
function replaceCorrectAnswer(match, optionsStr, correctAnswerStr) {
    // Parse options array strings
    const optionsRaw = optionsStr.split('\n').filter(line => line.includes('"')).map(line => {
        return line.trim().replace(/^"|"$/g, '').replace(/",?$/, '');
    });
    
    // Parse correct answer string
    const targetAnswer = correctAnswerStr.trim();
    
    let correctIndex = -1;
    for (let i = 0; i < optionsRaw.length; i++) {
        if (optionsRaw[i] === targetAnswer) {
            correctIndex = i;
            break;
        }
    }
    
    if (correctIndex !== -1) {
        return `options: [\n${optionsStr}\n        ],\n        correctAnswer: ${correctIndex},`;
    }
    
    console.log("Could not match:", targetAnswer);
    return match; // Return unchanged if not found
}

// Regex to capture options array and correctAnswer string
const regex = /options:\s*\[([\s\S]*?)\]\s*,\s*correctAnswer:\s*"([^"]+)"\s*,/g;

const newContent = content.replace(regex, replaceCorrectAnswer);

fs.writeFileSync(filePath, newContent);
console.log('Fixed correctAnswer indices.');
