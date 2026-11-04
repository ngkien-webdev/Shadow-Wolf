const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Update preloadMemberImages
code = code.replace(
    /function preloadMemberImages\(\)[\s\S]*?top3\.forEach\(m => \{[\s\S]*?\}\);[\s\S]*?\}/,
    `function preloadMemberImages() {
    if (!members || !members.length) return;
    
    // Nạp toàn bộ avatar vào RAM cache trong thời gian rỗi (Zero latency khi cuộn & tìm kiếm)
    const idleRunner = window.requestIdleCallback || ((fn) => setTimeout(fn, 120));
    idleRunner(() => {
        members.forEach(m => {
            const avatarUrl = getMemberAvatarImg(m);
            if (avatarUrl) {
                const img = new Image();
                img.decoding = 'async';
                img.src = avatarUrl;
            }
        });
    });

    // Nạp trước ảnh trận hình Top 5
    const top5 = members.slice(0, 5);
    top5.forEach(m => {
        if (m.image) {
            const img = new Image();
            img.decoding = 'async';
            img.src = m.image;
        }
    });
}`
);

// 2. Update initMysticStarfield star count and scrolling pause
code = code.replace(
    /const count = isMobile \? 65 : 125;/,
    'const count = isMobile ? 32 : 65;'
);

code = code.replace(
    /let isRunning = true;\r?\n\s*let lastTime = performance\.now\(\);/,
    `let isRunning = true;
    let lastTime = performance.now();
    let isScrolling = false;
    let scrollStopTimer = null;
    window.addEventListener('scroll', () => {
        isScrolling = true;
        if (scrollStopTimer) clearTimeout(scrollStopTimer);
        scrollStopTimer = setTimeout(() => {
            isScrolling = false;
            lastTime = performance.now();
        }, 90);
    }, { passive: true });`
);

code = code.replace(
    /function animateGalaxy\(currentTime\) \{\r?\n\s*if \(!isRunning\) return;/,
    `function animateGalaxy(currentTime) {
        if (!isRunning) return;
        if (isScrolling) {
            requestAnimationFrame(animateGalaxy);
            return;
        }`
);

// 3. Add loading="eager" decoding="async" fetchpriority="high" to renderSupremeTop3
code = code.replace(
    /<img src="\$\{getMemberAvatarImg\(top2\)\}" alt="\$\{escapeHtml\(top2\.name\)\}" class="supreme-avatar-core">/,
    '<img src="${getMemberAvatarImg(top2)}" alt="${escapeHtml(top2.name)}" class="supreme-avatar-core" loading="eager" decoding="async" fetchpriority="high">'
);
code = code.replace(
    /<img src="\$\{getMemberAvatarImg\(top1\)\}" alt="\$\{escapeHtml\(top1\.name\)\}" class="supreme-avatar-core">/,
    '<img src="${getMemberAvatarImg(top1)}" alt="${escapeHtml(top1.name)}" class="supreme-avatar-core" loading="eager" decoding="async" fetchpriority="high">'
);
code = code.replace(
    /<img src="\$\{getMemberAvatarImg\(top3\)\}" alt="\$\{escapeHtml\(top3\.name\)\}" class="supreme-avatar-core">/,
    '<img src="${getMemberAvatarImg(top3)}" alt="${escapeHtml(top3.name)}" class="supreme-avatar-core" loading="eager" decoding="async" fetchpriority="high">'
);

// Ingame title badges
code = code.replace(
    /<img src="images\/title-yudai-chien-de\.png" alt="Yudai Chiến Đế" class="supreme-ingame-title-img img-title-yudai" title="Danh Hiệu In-game: Yudai Chiến Đế">/,
    '<img src="images/title-yudai-chien-de.png" alt="Yudai Chiến Đế" class="supreme-ingame-title-img img-title-yudai" title="Danh Hiệu In-game: Yudai Chiến Đế" loading="eager" decoding="async">'
);
code = code.replace(
    /<img src="images\/title-apex-vuong-gia\.png" alt="APEX Vương Giả" class="supreme-ingame-title-img img-title-apex" title="Danh Hiệu In-game: APEX Vương Giả">/,
    '<img src="images/title-apex-vuong-gia.png" alt="APEX Vương Giả" class="supreme-ingame-title-img img-title-apex" title="Danh Hiệu In-game: APEX Vương Giả" loading="eager" decoding="async">'
);
code = code.replace(
    /<img src="images\/title-alyal-ba-khi\.png" alt="ALyaL Bá Khí" class="supreme-ingame-title-img img-title-ayya" title="Danh Hiệu In-game: ALyaL Bá Khí">/,
    '<img src="images/title-alyal-ba-khi.png" alt="ALyaL Bá Khí" class="supreme-ingame-title-img img-title-ayya" title="Danh Hiệu In-game: ALyaL Bá Khí" loading="eager" decoding="async">'
);

// 4. Add loading="eager" decoding="async" to renderPodium
code = code.replace(
    /class="podium-avatar-img wolf-avatar-emblem wolf-img-silver">/g,
    'class="podium-avatar-img wolf-avatar-emblem wolf-img-silver" loading="eager" decoding="async">'
);
code = code.replace(
    /class="podium-avatar-img wolf-avatar-emblem wolf-img-darkgold">/g,
    'class="podium-avatar-img wolf-avatar-emblem wolf-img-darkgold" loading="eager" decoding="async">'
);
code = code.replace(
    /class="podium-avatar-img wolf-avatar-emblem wolf-img-platinum">/g,
    'class="podium-avatar-img wolf-avatar-emblem wolf-img-platinum" loading="eager" decoding="async">'
);
code = code.replace(
    /class="podium-avatar-img wolf-avatar-emblem wolf-img-gold">/g,
    'class="podium-avatar-img wolf-avatar-emblem wolf-img-gold" loading="eager" decoding="async">'
);
code = code.replace(
    /class="podium-avatar-img wolf-avatar-emblem wolf-img-bronze">/g,
    'class="podium-avatar-img wolf-avatar-emblem wolf-img-bronze" loading="eager" decoding="async">'
);

// 5. Add loading="lazy" decoding="async" to generateEliteCardHtml
code = code.replace(
    /<img src="\$\{avatarImg\}" alt="\$\{escapeHtml\(m\.name\)\}" class="elite-avatar-img">/,
    '<img src="${avatarImg}" alt="${escapeHtml(m.name)}" class="elite-avatar-img" loading="lazy" decoding="async">'
);

// 6. Add loading="lazy" decoding="async" to renderTable
code = code.replace(
    /<img src="\$\{getMemberAvatarImg\(m\)\}" alt="\$\{escapeHtml\(m\.name\)\}" class="member-table-avatar-img">/,
    '<img src="${getMemberAvatarImg(m)}" alt="${escapeHtml(m.name)}" class="member-table-avatar-img" loading="lazy" decoding="async">'
);

// 7. Add loading="lazy" decoding="async" to generateFeaturedCharacterCardHtml
code = code.replace(
    /<img src="\$\{avatar\}" alt="\$\{escapeHtml\(m\.name\)\}" class="featured-avatar-img">/,
    '<img src="${avatar}" alt="${escapeHtml(m.name)}" class="featured-avatar-img" loading="lazy" decoding="async">'
);

// 8. Add decoding="async" to modalAvatar & screenshotImg
code = code.replace(
    /if \(modalAvatar\) \{\r?\n\s*modalAvatar\.src = getMemberAvatarImg\(member\);/,
    `if (modalAvatar) {
        modalAvatar.decoding = 'async';
        modalAvatar.src = getMemberAvatarImg(member);`
);

code = code.replace(
    /if \(screenshotImg\) \{\r?\n\s*screenshotImg\.style\.display = 'block';\r?\n\s*delete screenshotImg\.dataset\.triedFallback;\r?\n\s*screenshotImg\.src = member\.image;/,
    `if (screenshotImg) {
            screenshotImg.decoding = 'async';
            screenshotImg.style.display = 'block';
            delete screenshotImg.dataset.triedFallback;
            screenshotImg.src = member.image;`
);

fs.writeFileSync('script.js', code, 'utf8');
console.log('script.js successfully updated with image and scrolling performance optimizations!');

