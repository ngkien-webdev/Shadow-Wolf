const { execSync } = require('child_process');
const path = require('path');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\katof\\.gemini\\antigravity\\brain\\b17fb8ad-97c7-407a-8c17-09e5989af1ee';

const outPanorama = path.join(artifactDir, 'panorama-full.png');
execSync(`"${edge}" --headless --disable-gpu --window-size=1600,4200 --screenshot="${outPanorama}" "file:///d:/BXH%20MDTQ/index.html"`);
console.log('Saved panorama-full.png');
