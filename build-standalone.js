const fs = require('fs');
const path = require('path');

const dir = __dirname;

// Load assets
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf-8');
const adminHtml = fs.readFileSync(path.join(dir, 'admin.html'), 'utf-8');
const css = fs.readFileSync(path.join(dir, 'style.css'), 'utf-8');
const js = fs.readFileSync(path.join(dir, 'script.js'), 'utf-8');
const adminJs = fs.readFileSync(path.join(dir, 'admin.js'), 'utf-8');
const chartJs = fs.existsSync(path.join(dir, 'chart.min.js')) ? fs.readFileSync(path.join(dir, 'chart.min.js'), 'utf-8') : '';

// Base64 favicon & logo for 100% portable display in browser tab
const faviconBase64 = 'data:image/png;base64,' + fs.readFileSync(path.join(dir, 'images/favicon.png')).toString('base64');
const logoBase64 = 'data:image/png;base64,' + fs.readFileSync(path.join(dir, 'images/logo.png')).toString('base64');

// Base64 avatars for 100% portable display
const avatarsDir = path.join(dir, 'images/avatars');
const avatarBase64List = [];
if (fs.existsSync(avatarsDir)) {
    const avatarFiles = fs.readdirSync(avatarsDir).filter(f => f.endsWith('.png'));
    avatarFiles.forEach(f => {
        const b64 = 'data:image/png;base64,' + fs.readFileSync(path.join(avatarsDir, f)).toString('base64');
        avatarBase64List.push({
            pattern: new RegExp(`images/avatars/${f.replace(/\\./g, '\\\\.')}`, 'g'),
            b64: b64
        });
    });
}

// Base64 In-game title badges
const titleBadges = [
    { file: 'images/title-apex-vuong-gia.png', regex: /images\/title-apex-vuong-gia\.png/g },
    { file: 'images/title-yudai-chien-de.png', regex: /images\/title-yudai-chien-de\.png/g },
    { file: 'images/title-alyal-ba-khi.png', regex: /images\/title-alyal-ba-khi\.png/g }
].map(t => ({
    regex: t.regex,
    b64: fs.existsSync(path.join(dir, t.file)) ? 'data:image/png;base64,' + fs.readFileSync(path.join(dir, t.file)).toString('base64') : ''
}));

// Base64 formation screenshots (100% portable offline display - no broken images on other devices)
const dhOptDir = path.join(dir, 'images/dh_opt');
const dhDir = fs.existsSync(dhOptDir) ? dhOptDir : path.join(dir, 'images/dh');
const dhBase64List = [];
if (fs.existsSync(dhDir)) {
    const dhFiles = fs.readdirSync(dhDir);
    dhFiles.forEach(f => {
        const ext = path.extname(f).toLowerCase();
        if (ext === '.jpg' || ext === '.png' || ext === '.jpeg') {
            const mime = ext === '.png' ? 'image/png' : 'image/jpeg';
            const b64 = `data:${mime};base64,` + fs.readFileSync(path.join(dhDir, f)).toString('base64');
            const baseName = f.replace(/\.[^.]+$/, '');
            dhBase64List.push({
                pattern: new RegExp(`images/dh/${baseName}\\.(jpg|png|jpeg)`, 'g'),
                b64: b64
            });
        }
    });
}

// 1. Build standalone.html (Public Leaderboard)
let standalone = html.replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${css}\n</style>`);
if (chartJs) {
    standalone = standalone.replace('<script src="chart.min.js"></script>', () => `<script>\n${chartJs}\n</script>`);
}
standalone = standalone.replace(/<script src="script\.js"[^>]*><\/script>/, () => `<script>\n${js}\n</script>`);
standalone = standalone.replace(/href="images\/favicon\.png"/g, () => `href="${faviconBase64}"`);
standalone = standalone.replace(/href="favicon\.ico"/g, () => `href="${faviconBase64}"`);
standalone = standalone.replace(/href="images\/favicon\.ico"/g, () => `href="${faviconBase64}"`);
standalone = standalone.replace(/images\/logo\.png/g, () => logoBase64);

avatarBase64List.forEach(({ pattern, b64 }) => {
    standalone = standalone.replace(pattern, () => b64);
});
titleBadges.forEach(({ regex, b64 }) => {
    if (b64) standalone = standalone.replace(regex, () => b64);
});
dhBase64List.forEach(({ pattern, b64 }) => {
    standalone = standalone.replace(pattern, () => b64);
});

fs.writeFileSync(path.join(dir, 'standalone.html'), standalone, 'utf-8');
console.log('standalone.html successfully built! Size:', fs.statSync(path.join(dir, 'standalone.html')).size, 'bytes');

// 2. Build standalone-admin.html (Admin Panel)
let standaloneAdmin = adminHtml.replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${css}\n</style>`);
standaloneAdmin = standaloneAdmin.replace('<script src="script.js"></script>', () => `<script>\n${js}\n</script>`);
standaloneAdmin = standaloneAdmin.replace('<script src="admin.js"></script>', () => `<script>\n${adminJs}\n</script>`);
standaloneAdmin = standaloneAdmin.replace(/href="images\/favicon\.png"/g, () => `href="${faviconBase64}"`);
standaloneAdmin = standaloneAdmin.replace(/href="favicon\.ico"/g, () => `href="${faviconBase64}"`);
standaloneAdmin = standaloneAdmin.replace(/href="images\/favicon\.ico"/g, () => `href="${faviconBase64}"`);
standaloneAdmin = standaloneAdmin.replace(/images\/logo\.png/g, () => logoBase64);

avatarBase64List.forEach(({ pattern, b64 }) => {
    standaloneAdmin = standaloneAdmin.replace(pattern, () => b64);
});
titleBadges.forEach(({ regex, b64 }) => {
    if (b64) standaloneAdmin = standaloneAdmin.replace(regex, () => b64);
});
dhBase64List.forEach(({ pattern, b64 }) => {
    standaloneAdmin = standaloneAdmin.replace(pattern, () => b64);
});

fs.writeFileSync(path.join(dir, 'standalone-admin.html'), standaloneAdmin, 'utf-8');
console.log('standalone-admin.html successfully built! Size:', fs.statSync(path.join(dir, 'standalone-admin.html')).size, 'bytes');
