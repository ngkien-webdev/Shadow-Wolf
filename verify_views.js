const { execSync } = require('child_process');
const path = require('path');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\katof\\.gemini\\antigravity\\brain\\b17fb8ad-97c7-407a-8c17-09e5989af1ee';

// 1. Capture Top 3 default view
const outTop3 = path.join(artifactDir, 'tier-top3-view.png');
execSync(`"${edge}" --headless --disable-gpu --window-size=1600,2200 --screenshot="${outTop3}" "file:///d:/BXH%20MDTQ/index.html"`);
console.log('Saved tier-top3-view.png');


