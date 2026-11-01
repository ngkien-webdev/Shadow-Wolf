const fs = require('fs');
const path = require('path');

const dir = 'd:/BXH MDTQ';

// Load assets
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf-8');
const adminHtml = fs.readFileSync(path.join(dir, 'admin.html'), 'utf-8');
const css = fs.readFileSync(path.join(dir, 'style.css'), 'utf-8');
const js = fs.readFileSync(path.join(dir, 'script.js'), 'utf-8');
const adminJs = fs.readFileSync(path.join(dir, 'admin.js'), 'utf-8');

// Base64 favicon for 100% portable display in browser tab
const faviconBase64 = 'data:image/png;base64,' + fs.readFileSync(path.join(dir, 'images/favicon.png')).toString('base64');

// 1. Build standalone.html (Public Leaderboard)
// IMPORTANT: Use function replacers (() => content) so JavaScript does NOT treat $& as special pattern
let standalone = html.replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${css}\n</style>`);
standalone = standalone.replace('<script src="script.js"></script>', () => `<script>\n${js}\n</script>`);
standalone = standalone.replace(/href="images\/favicon\.png"/g, () => `href="${faviconBase64}"`);
standalone = standalone.replace(/href="favicon\.ico"/g, () => `href="${faviconBase64}"`);
standalone = standalone.replace(/href="images\/favicon\.ico"/g, () => `href="${faviconBase64}"`);

fs.writeFileSync(path.join(dir, 'standalone.html'), standalone, 'utf-8');
console.log('standalone.html successfully built! Size:', fs.statSync(path.join(dir, 'standalone.html')).size, 'bytes');

// 2. Build standalone-admin.html (Admin Panel)
let standaloneAdmin = adminHtml.replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${css}\n</style>`);
standaloneAdmin = standaloneAdmin.replace('<script src="script.js"></script>', () => `<script>\n${js}\n</script>`);
standaloneAdmin = standaloneAdmin.replace('<script src="admin.js"></script>', () => `<script>\n${adminJs}\n</script>`);
standaloneAdmin = standaloneAdmin.replace(/href="images\/favicon\.png"/g, () => `href="${faviconBase64}"`);
standaloneAdmin = standaloneAdmin.replace(/href="favicon\.ico"/g, () => `href="${faviconBase64}"`);
standaloneAdmin = standaloneAdmin.replace(/href="images\/favicon\.ico"/g, () => `href="${faviconBase64}"`);

fs.writeFileSync(path.join(dir, 'standalone-admin.html'), standaloneAdmin, 'utf-8');
console.log('standalone-admin.html successfully built! Size:', fs.statSync(path.join(dir, 'standalone-admin.html')).size, 'bytes');
