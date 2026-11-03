const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\katof\\.gemini\\antigravity\\brain\\b17fb8ad-97c7-407a-8c17-09e5989af1ee';

let html = fs.readFileSync('index.html', 'utf-8');
// Expand lower ranks by default in test
html = html.replace('<script src="script.js"></script>', '<script src="script.js"></script><script>setTimeout(() => { if (typeof toggleLowerRanksView === "function") toggleLowerRanksView(); }, 300);</script>');
fs.writeFileSync('temp_test_lookup.html', html, 'utf-8');

const outLookup = path.join(artifactDir, 'test-lookup-unique-avatars.png');
execSync(`"${edge}" --headless --disable-gpu --window-size=1600,3200 --screenshot="${outLookup}" "file:///d:/BXH%20MDTQ/temp_test_lookup.html"`);
console.log('Saved test-lookup-unique-avatars.png');

fs.unlinkSync('temp_test_lookup.html');
