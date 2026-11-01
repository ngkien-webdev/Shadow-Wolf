/**
 * MIÊU CHỦ TAM QUỐC – BẢNG XẾP HẠNG QUÂN ĐOÀN
 * Hệ thống quản lý dữ liệu, tìm kiếm, lọc, sắp xếp, quản trị và lưu trữ LocalStorage
 */

// DỮ LIỆU GỐC 41 THÀNH VIÊN VÀ MAPPING ẢNH ĐỘI HÌNH
const DEFAULT_MEMBERS = [
    { stt: 1, name: "•SW• Apex (Hhh)", power: ">1T2", powerVal: 1250, title: "Thần Vương", note: "Bang Chủ", avatar: "👑", image: "images/dh/member-1.jpg", ingamePower: "1.664T", server: "S 645" },
    { stt: 2, name: "•SW• Yudai (Sỹ)", power: "800-1T", powerVal: 900, title: "Đại Tướng Quân", note: "Bang phó", avatar: "⚔️", image: "images/dh/member-2.jpg", ingamePower: "1.036T", server: "S 657" },
    { stt: 3, name: "•BW• ẦyYa (Phi Long)", power: "400-600B", powerVal: 500, title: "Phiêu kỵ TQ", note: "Tinh anh", avatar: "🐉", image: "images/dh/member-3.jpg", ingamePower: "678B", server: "S 642" },
    { stt: 4, name: "•SW• ALINX (Hồng Nghĩa)", power: "200-400B", powerVal: 300, title: "Thái phó", note: "Bang phó", avatar: "🛡️", image: "images/dh/member-4.jpg", ingamePower: "358.3B", server: "S 645" },
    { stt: 5, name: "•SW• Luc T Du (Tùng)", power: "200-400B", powerVal: 300, title: "Thái úy", note: "Tinh anh", avatar: "⚡", image: "images/dh/member-5.jpg", ingamePower: "371B", server: "S 643" },
    { stt: 6, name: "•SW• XuTii (Xuân Tiền)", power: "200-400B", powerVal: 300, title: "Thái phó", note: "Tinh anh", avatar: "🔥", image: "images/dh/member-6.jpg", ingamePower: "258.5B", server: "S 645" },
    { stt: 7, name: "•SW• Bãoo (Tháii Bảo)", power: "200-400B", powerVal: 300, title: "Xa kỵ TQ", note: "Tinh anh", avatar: "🏹", image: null, ingamePower: null, server: null },
    { stt: 8, name: "•SW• NTTP (Triệu Đạt)", power: "200-400B", powerVal: 300, title: "Xa kỵ TQ", note: "Tinh anh", avatar: "🐎", image: "images/dh/member-8.jpg", ingamePower: "270B", server: "S 657" },
    { stt: 9, name: "•SW• Haruki (Ngọc Anh)", power: "200-400B", powerVal: 300, title: "Thái úy", note: "Tinh anh", avatar: "🌸", image: "images/dh/member-9.jpg", ingamePower: "232.5B", server: "S 656" },
    { stt: 10, name: "•SW• ĐộLiVi (Hoàng)", power: "200-400B", powerVal: 300, title: "Thái úy", note: "Tinh anh", avatar: "🐯", image: "images/dh/member-10.jpg", ingamePower: "231.8B", server: "S 657" },
    { stt: 11, name: "•SW• Chanh (Văn Phong)", power: "100-200B", powerVal: 150, title: "Thái phó", note: "Thành viên", avatar: "🍃", image: "images/dh/member-11.jpg", ingamePower: "197.6B", server: "S 645" },
    { stt: 12, name: "•SW• Rain (Nguyễn Hiếu)", power: "100-200B", powerVal: 150, title: "Vệ TQ", note: "Thành viên", avatar: "🌧️", image: null, ingamePower: null, server: null },
    { stt: 13, name: "•SW• Rin (Rin)", power: "100-200B", powerVal: 150, title: "Vệ TQ", note: "Thành viên", avatar: "✨", image: null, ingamePower: null, server: null },
    { stt: 14, name: "•SW• Neko", power: "100-200B", powerVal: 150, title: "Thái úy", note: "Thành viên", avatar: "🐱", image: "images/dh/member-14.jpg", ingamePower: "188.9B", server: "S 649" },
    { stt: 15, name: "•SW• Quýt (Huy Howi)", power: "100-200B", powerVal: 150, title: "Thái úy", note: "Thành viên", avatar: "🍊", image: null, ingamePower: null, server: null },
    { stt: 16, name: "•SW• Klein", power: "100-200B", powerVal: 150, title: "Vệ TQ", note: "Thành viên", avatar: "🔮", image: "images/dh/member-16.jpg", ingamePower: "170.3B", server: "S 642" },
    { stt: 17, name: "•SW• Bear (Chí Như)", power: "100-200B", powerVal: 150, title: "Vệ TQ", note: "Thành viên", avatar: "🐻", image: "images/dh/member-17.jpg", ingamePower: "150.2B", server: "S 649" },
    { stt: 18, name: "•SW• PandaxMun", power: "100-200B", powerVal: 150, title: "Tư đồ", note: "Thành viên", avatar: "🐼", image: "images/dh/member-18.jpg", ingamePower: "111.3B", server: "S 656" },
    { stt: 19, name: "•SW• Minh Thành (MT)", power: "100-200B", powerVal: 150, title: "Tư đồ", note: "Thành viên", avatar: "🦅", image: "images/dh/member-19.jpg", ingamePower: "156.7B", server: "S 659" },
    { stt: 20, name: "•SW• Poision (Trung)", power: "100-200B", powerVal: 150, title: "Tư đồ", note: "Thành viên", avatar: "☠️", image: "images/dh/member-20.jpg", ingamePower: "130.3B", server: "S 644" },
    { stt: 21, name: "•SW• WOLF", power: "100-200B", powerVal: 150, title: "Trung Lang T", note: "Thành viên", avatar: "🐺", image: "images/dh/member-21.jpg", ingamePower: "110.8B", server: "S 651" },
    { stt: 22, name: "•SW• Kaneki", power: "80-100B", powerVal: 90, title: "Trung Lang T", note: "Thành viên", avatar: "👺", image: "images/dh/member-22.jpg", ingamePower: "104.1B", server: "S 642" },
    { stt: 23, name: "•SW• Cà Na", power: "80-100B", powerVal: 90, title: "Trung Lang T", note: "Thành viên", avatar: "🌶️", image: "images/dh/member-23.jpg", ingamePower: "101.3B", server: "S 641" },
    { stt: 24, name: "•SW• MODA", power: "80-100B", powerVal: 90, title: "Trung Lang T", note: "Thành viên", avatar: "🎯", image: "images/dh/member-24.jpg", ingamePower: "98.74B", server: "S 650" },
    { stt: 25, name: "•SW• T", power: "80-100B", powerVal: 90, title: "Trung Lang T", note: "Thành viên", avatar: "⚡", image: "images/dh/member-25.jpg", ingamePower: "102.7B", server: "S 657" },
    { stt: 26, name: "•SW• lukita", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "🗡️", image: "images/dh/member-26.jpg", ingamePower: "103.5B", server: "S 647" },
    { stt: 27, name: "•SW• lubu", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "🔱", image: "images/dh/member-27.jpg", ingamePower: "97.16B", server: "S 650" },
    { stt: 28, name: "•SW• Yuta", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "💫", image: "images/dh/member-28.jpg", ingamePower: "100.5B", server: "S 650" },
    { stt: 29, name: "•SW• Next", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "⏩", image: "images/dh/member-29.jpg", ingamePower: "83.54B", server: "S 655" },
    { stt: 30, name: "•SW• Poitwo", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "🎯", image: "images/dh/member-30.jpg", ingamePower: "98.02B", server: "S 648" },
    { stt: 31, name: "•SW• Xoài", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "🥭", image: null, ingamePower: null, server: null },
    { stt: 32, name: "•SW• THIEN", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "🌤️", image: "images/dh/member-32.jpg", ingamePower: "73.55B", server: "S 657" },
    { stt: 33, name: "•SW• Hạ", power: "60-80B", powerVal: 70, title: "Trung Lang T", note: "Thành viên", avatar: "☀️", image: "images/dh/member-33.jpg", ingamePower: "73.61B", server: "S 642" },
    { stt: 34, name: "•SW• Sai (Sai)", power: "40-80B", powerVal: 60, title: "Tư không", note: "Thành viên", avatar: "🎨", image: "images/dh/member-34.jpg", ingamePower: "71.25B", server: "S 647" },
    { stt: 35, name: "•SW• Lang (Nhàn Ngô)", power: "40-80B", powerVal: 60, title: "Tư đồ", note: "Thành viên", avatar: "🌿", image: "images/dh/member-35.jpg", ingamePower: "79.02B", server: "S 641" },
    { stt: 36, name: "•SW• Thu", power: "40-80B", powerVal: 60, title: "Tư đồ", note: "Thành viên", avatar: "🍂", image: "images/dh/member-36.jpg", ingamePower: "58.05B", server: "S 644" },
    { stt: 37, name: "•SW• Đông", power: "40-80B", powerVal: 60, title: "Tư đồ", note: "Thành viên", avatar: "❄️", image: "images/dh/member-37.jpg", ingamePower: "93.64B", server: "S 646" },
    { stt: 38, name: "•SW• Măng", power: "20-60B", powerVal: 40, title: "Ngự Sử đại phu", note: "Thành viên", avatar: "🎋", image: null, ingamePower: null, server: null },
    { stt: 39, name: "•SW• Hỏa (Càn)", power: "20-60B", powerVal: 40, title: "Ngự Sử đại phu", note: "Thành viên", avatar: "🔥", image: "images/dh/member-39.jpg", ingamePower: "58.44B", server: "S 644" },
    { stt: 40, name: "•SW• Bưởi", power: "20-60B", powerVal: 40, title: "Ngự Sử đại phu", note: "Thành viên", avatar: "🍈", image: "images/dh/member-40.jpg", ingamePower: "46.65B", server: "S 649" },
    { stt: 41, name: "•SW• SUKY", power: "20-60B", powerVal: 40, title: "Ngự Sử đại phu", note: "Thành viên", avatar: "🌟", image: "images/dh/member-41.jpg", ingamePower: "39.19B", server: "S 652" }
];

// Khóa LocalStorage
const STORAGE_KEY = 'mieu_chu_tam_quoc_members_v2';
const GUILD_CONFIG_KEY = 'mieu_chu_tam_quoc_guild_v1';

// Trạng thái ứng dụng
let members = [];
let filteredMembers = [];
let currentPage = 1;
let pageSize = 20;
let currentSort = { column: 'stt', direction: 'asc' };
let isAdminMode = false;
let memberToDelete = null;
let currentEditingMember = null;
let activeFormationMember = null;

// Khởi tạo danh sách danh hiệu chuẩn & màu sắc
const TITLE_CLASSES = {
    'Thần Vương': 'title-than-vuong',
    'Đại Tướng Quân': 'title-dai-tuong-quan',
    'Phiêu kỵ TQ': 'title-phieu-ky-tq',
    'Phiêu Kỵ Tướng': 'title-phieu-ky-tq',
    'Thái phó': 'title-thai-pho',
    'Thái úy': 'title-thai-uy',
    'Xa kỵ TQ': 'title-xa-ky-tq',
    'Xa Kỵ Tướng': 'title-xa-ky-tq',
    'Vệ TQ': 'title-ve-tq',
    'Vệ Quốc': 'title-ve-tq',
    'Tư đồ': 'title-tu-do',
    'Trung Lang T': 'title-trung-lang-t',
    'Trung Lang Tướng': 'title-trung-lang-t',
    'Tư không': 'title-tu-khong',
    'Ngự Sử đại phu': 'title-ngu-su-dai-phu'
};

const NOTE_CLASSES = {
    'Bang Chủ': 'note-bang-chu',
    'Bang phó': 'note-bang-pho',
    'Bang Phó': 'note-bang-pho',
    'Tinh anh': 'note-tinh-anh',
    'Tinh Anh': 'note-tinh-anh',
    'Thành viên': 'note-thanh-vien',
    'Thành Viên': 'note-thanh-vien'
};

// Khởi chạy ứng dụng
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadMembersData();
    setupEventListeners();
    updateGuildInfo();
    updateStats();
    renderPodium();
    applyFilterAndSort();
    initLastUpdated();

    // Hỗ trợ mở nhanh modal qua URL (VD: ?modal=2)
    const urlParams = new URLSearchParams(window.location.search);
    const openStt = urlParams.get('modal');
    if (openStt) {
        setTimeout(() => openFormationModal(parseInt(openStt, 10)), 300);
    }
}

/**
 * Tải dữ liệu từ LocalStorage hoặc dữ liệu mặc định
 */
function loadMembersData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            members = JSON.parse(stored);
            // Đồng bộ ảnh từ DEFAULT_MEMBERS nếu bản lưu cũ chưa có field image
            members.forEach(m => {
                if (!m.powerVal) {
                    m.powerVal = calculateNumericPower(m.power);
                }
                const defaultItem = DEFAULT_MEMBERS.find(d => d.stt === m.stt);
                if (defaultItem && m.image === undefined) {
                    m.image = defaultItem.image;
                    m.ingamePower = defaultItem.ingamePower;
                    m.server = defaultItem.server;
                }
            });
        } else {
            members = JSON.parse(JSON.stringify(DEFAULT_MEMBERS));
            saveMembersData();
        }
    } catch (e) {
        console.error("Lỗi đọc LocalStorage, sử dụng dữ liệu mặc định:", e);
        members = JSON.parse(JSON.stringify(DEFAULT_MEMBERS));
    }
}

function saveMembersData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
    } catch (e) {
        console.error("Lỗi ghi LocalStorage:", e);
        showToast("Không thể lưu vào bộ nhớ cục bộ!", "error");
    }
}

/**
 * Chuẩn hóa giá trị lực chiến sang số tỷ (Billion)
 */
function calculateNumericPower(powerStr) {
    if (!powerStr) return 0;
    const str = String(powerStr).trim().toUpperCase();

    // Dạng khoảng VD: 800-1T, 400-600B, 20-60B
    if (str.includes('-')) {
        const parts = str.split('-');
        let p1 = parseFloat(parts[0].replace(/[^\d.]/g, '')) || 0;
        const p2Str = parts[1];
        let p2 = parseFloat(p2Str.replace(/[^\d.]/g, '')) || 0;
        if (parts[0].includes('T')) p1 = p1 * 1000;
        if (p2Str.includes('T')) p2 = p2 * 1000;
        return (p1 + p2) / 2;
    }

    // Dạng >1T2, >1.2T, 1T2, 2T
    if (str.includes('T')) {
        const match = str.match(/(?:>)?(\d+)(?:[T\.])(\d+)?/);
        if (match) {
            const whole = parseInt(match[1], 10) || 0;
            const fraction = match[2] ? parseInt(match[2], 10) : 0;
            const base = (whole * 1000) + (fraction >= 10 ? fraction * 10 : fraction * 100);
            return str.startsWith('>') ? base + 50 : base;
        }
    }

    const num = parseFloat(str.replace(/[^\d.]/g, ''));
    if (isNaN(num)) return 0;

    if (str.includes('T')) return num * 1000;
    if (str.includes('M')) return num / 1000;
    return num;
}

/**
 * Tính toán & cập nhật 4 thẻ thống kê
 */
function updateStats() {
    const totalCount = members.length;
    let totalPower = 0;
    let maxPowerMember = null;
    let maxPowerVal = -1;
    let withImageCount = 0;

    members.forEach(m => {
        const val = m.powerVal || calculateNumericPower(m.power);
        totalPower += val;
        if (val > maxPowerVal) {
            maxPowerVal = val;
            maxPowerMember = m;
        }
        if (m.image) withImageCount++;
    });

    const avgPower = totalCount > 0 ? Math.round(totalPower / totalCount) : 0;

    let totalPowerFormatted = '';
    if (totalPower >= 1000) {
        const tVal = (totalPower / 1000).toFixed(2);
        totalPowerFormatted = `~${tVal}T+`;
    } else {
        totalPowerFormatted = `~${Math.round(totalPower)}B`;
    }

    const elTotalMembers = document.getElementById('stat-total-members');
    const elTotalPower = document.getElementById('stat-total-power');
    const elTopPower = document.getElementById('stat-top-power');
    const elTopName = document.getElementById('stat-top-name');
    const elAvgPower = document.getElementById('stat-avg-power');
    const elWithImage = document.getElementById('stat-formation-count');

    if (elTotalMembers) elTotalMembers.textContent = totalCount;
    if (elTotalPower) elTotalPower.textContent = totalPowerFormatted;
    if (elTopPower) elTopPower.textContent = maxPowerMember ? maxPowerMember.power : '---';
    if (elTopName) elTopName.textContent = maxPowerMember ? maxPowerMember.name : '---';
    if (elAvgPower) elAvgPower.textContent = `~${avgPower}B`;
    if (elWithImage) elWithImage.textContent = `${withImageCount}/${totalCount}`;
}

/**
 * Hiển thị bục vinh danh Top 3 (Podium)
 */
function renderPodium() {
    const podiumContainer = document.getElementById('top-podium-container');
    if (!podiumContainer) return;

    const sortedForPodium = [...members].sort((a, b) => (a.stt || 0) - (b.stt || 0));
    const top1 = sortedForPodium[0];
    const top2 = sortedForPodium[1];
    const top3 = sortedForPodium[2];

    if (!top1) {
        podiumContainer.innerHTML = '<div class="empty-podium">Chưa có dữ liệu thành viên</div>';
        return;
    }

    podiumContainer.innerHTML = `
        <!-- TOP 2: Á QUÂN (BẠC) -->
        ${top2 ? `
        <div class="podium-card rank-2 animate-fade-in" onclick="openFormationModal(${top2.stt})">
            <div class="podium-pillar">
                <div class="podium-avatar-wrapper">
                    <div class="podium-crown-badge silver">
                        <i class="fa-solid fa-medal"></i>
                    </div>
                    <div class="podium-avatar silver-glow">
                        <span class="avatar-icon">${top2.avatar || '⚔️'}</span>
                    </div>
                    <div class="podium-rank-tag silver">HẠNG 2 • Á QUÂN</div>
                </div>
                <div class="podium-info">
                    <h3 class="podium-name" title="${escapeHtml(top2.name)}">${escapeHtml(top2.name)}</h3>
                    <div class="podium-power"><i class="fa-solid fa-bolt"></i> ${escapeHtml(top2.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top2.title] || 'title-default'}">${escapeHtml(top2.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top2.note] || 'note-default'}">${escapeHtml(top2.note)}</span>
                    </div>
                    <div class="podium-dh-status">
                        ${top2.image ? '<span class="status-dh-pill has-img"><i class="fa-solid fa-shield-cat"></i> Đã có đội hình</span>' : '<span class="status-dh-pill no-img"><i class="fa-solid fa-clock"></i> Chưa cập nhật</span>'}
                    </div>
                </div>
                <button class="podium-view-btn" onclick="event.stopPropagation(); openFormationModal(${top2.stt})">
                    <i class="fa-solid fa-shield-halved"></i> Xem Đội Hình
                </button>
            </div>
        </div>
        ` : ''}

        <!-- TOP 1: QUÁN QUÂN (VÀNG KIM - TRUNG TÂM) -->
        <div class="podium-card rank-1 animate-fade-in" onclick="openFormationModal(${top1.stt})">
            <div class="podium-dragon-crest">
                <i class="fa-solid fa-crown dragon-crown"></i>
            </div>
            <div class="podium-pillar gold-pillar">
                <div class="podium-avatar-wrapper">
                    <div class="podium-crown-badge gold">
                        <i class="fa-solid fa-crown"></i>
                    </div>
                    <div class="podium-avatar gold-glow">
                        <span class="avatar-icon">${top1.avatar || '👑'}</span>
                    </div>
                    <div class="podium-rank-tag gold">QUÁN QUÂN • TOP 1</div>
                </div>
                <div class="podium-info">
                    <h3 class="podium-name main-champion" title="${escapeHtml(top1.name)}">${escapeHtml(top1.name)}</h3>
                    <div class="podium-power gold-power"><i class="fa-solid fa-fire-flame-curved"></i> ${escapeHtml(top1.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top1.title] || 'title-default'}">${escapeHtml(top1.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top1.note] || 'note-default'}">${escapeHtml(top1.note)}</span>
                    </div>
                    <div class="podium-dh-status">
                        ${top1.image ? '<span class="status-dh-pill has-img"><i class="fa-solid fa-shield-cat"></i> Đã có đội hình</span>' : '<span class="status-dh-pill no-img"><i class="fa-solid fa-clock"></i> Chưa cập nhật</span>'}
                    </div>
                </div>
                <button class="podium-view-btn gold-btn" onclick="event.stopPropagation(); openFormationModal(${top1.stt})">
                    <i class="fa-solid fa-dragon"></i> Chi Tiết Đội Hình
                </button>
            </div>
        </div>

        <!-- TOP 3: QUÝ QUÂN (ĐỒNG) -->
        ${top3 ? `
        <div class="podium-card rank-3 animate-fade-in" onclick="openFormationModal(${top3.stt})">
            <div class="podium-pillar">
                <div class="podium-avatar-wrapper">
                    <div class="podium-crown-badge bronze">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div class="podium-avatar bronze-glow">
                        <span class="avatar-icon">${top3.avatar || '🐉'}</span>
                    </div>
                    <div class="podium-rank-tag bronze">HẠNG 3 • QUÝ QUÂN</div>
                </div>
                <div class="podium-info">
                    <h3 class="podium-name" title="${escapeHtml(top3.name)}">${escapeHtml(top3.name)}</h3>
                    <div class="podium-power"><i class="fa-solid fa-bolt"></i> ${escapeHtml(top3.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top3.title] || 'title-default'}">${escapeHtml(top3.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top3.note] || 'note-default'}">${escapeHtml(top3.note)}</span>
                    </div>
                    <div class="podium-dh-status">
                        ${top3.image ? '<span class="status-dh-pill has-img"><i class="fa-solid fa-shield-cat"></i> Đã có đội hình</span>' : '<span class="status-dh-pill no-img"><i class="fa-solid fa-clock"></i> Chưa cập nhật</span>'}
                    </div>
                </div>
                <button class="podium-view-btn" onclick="event.stopPropagation(); openFormationModal(${top3.stt})">
                    <i class="fa-solid fa-shield-halved"></i> Xem Đội Hình
                </button>
            </div>
        </div>
        ` : ''}
    `;
}

/**
 * Tìm kiếm & Lọc dữ liệu
 */
function applyFilterAndSort() {
    const searchVal = (document.getElementById('search-input')?.value || '').trim();
    const titleFilter = document.getElementById('filter-title')?.value || 'all';
    const noteFilter = document.getElementById('filter-note')?.value || 'all';
    const powerTierFilter = document.getElementById('filter-power-tier')?.value || 'all';
    const formationFilter = document.getElementById('filter-formation')?.value || 'all';

    filteredMembers = members.filter(m => {
        // Tìm kiếm tên
        if (searchVal) {
            const normalizedSearch = removeVietnameseTones(searchVal.toLowerCase());
            const normalizedName = removeVietnameseTones(m.name.toLowerCase());
            const normalizedTitle = removeVietnameseTones(m.title.toLowerCase());
            if (!normalizedName.includes(normalizedSearch) && !normalizedTitle.includes(normalizedSearch)) {
                return false;
            }
        }

        // Lọc danh hiệu
        if (titleFilter !== 'all') {
            if (m.title.toLowerCase() !== titleFilter.toLowerCase()) return false;
        }

        // Lọc ghi chú
        if (noteFilter !== 'all') {
            if (m.note.toLowerCase() !== noteFilter.toLowerCase()) return false;
        }

        // Lọc theo khoảng chiến lực
        if (powerTierFilter !== 'all') {
            const val = m.powerVal || calculateNumericPower(m.power);
            if (powerTierFilter === 'tier-1t' && val < 1000) return false;
            if (powerTierFilter === 'tier-400-1t' && (val < 400 || val >= 1000)) return false;
            if (powerTierFilter === 'tier-100-400' && (val < 100 || val >= 400)) return false;
            if (powerTierFilter === 'tier-60-100' && (val < 60 || val >= 100)) return false;
            if (powerTierFilter === 'tier-below-60' && val >= 60) return false;
        }

        // Lọc theo trạng thái ảnh đội hình
        if (formationFilter !== 'all') {
            if (formationFilter === 'has-image' && !m.image) return false;
            if (formationFilter === 'no-image' && m.image) return false;
        }

        return true;
    });

    sortMembersData();
    currentPage = 1;
    renderTable();
    renderPagination();
    updateFilterCounts();
}

/**
 * Sắp xếp dữ liệu
 */
function sortMembersData() {
    filteredMembers.sort((a, b) => {
        let valA, valB;
        if (currentSort.column === 'power') {
            valA = a.powerVal || calculateNumericPower(a.power);
            valB = b.powerVal || calculateNumericPower(b.power);
        } else if (currentSort.column === 'name') {
            valA = a.name.toLowerCase();
            valB = b.name.toLowerCase();
            return currentSort.direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
            valA = Number(a.stt) || 999;
            valB = Number(b.stt) || 999;
        }

        if (currentSort.direction === 'asc') {
            return valA > valB ? 1 : valA < valB ? -1 : 0;
        } else {
            return valA < valB ? 1 : valA > valB ? -1 : 0;
        }
    });
}

function setSorting(column, direction) {
    currentSort.column = column;
    currentSort.direction = direction;
    
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.col === column && btn.dataset.dir === direction) {
            btn.classList.add('active');
        }
    });

    sortMembersData();
    renderTable();
    renderPagination();
}

/**
 * Vẽ bảng xếp hạng
 */
function renderTable() {
    const tbody = document.getElementById('members-table-body');
    const emptyState = document.getElementById('table-empty-state');
    if (!tbody) return;

    if (filteredMembers.length === 0) {
        tbody.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = pageSize === 9999 ? filteredMembers.length : Math.min(startIdx + pageSize, filteredMembers.length);
    const pageItems = filteredMembers.slice(startIdx, endIdx);

    const maxPowerInAll = Math.max(...members.map(m => m.powerVal || calculateNumericPower(m.power)), 1250);

    let html = '';
    pageItems.forEach(m => {
        const rank = m.stt;
        const powerVal = m.powerVal || calculateNumericPower(m.power);
        const powerPercent = Math.min(Math.round((powerVal / maxPowerInAll) * 100), 100);

        let rowClass = 'member-row';
        let rankBadge = '';

        if (rank === 1) {
            rowClass += ' row-top-1';
            rankBadge = `
                <div class="rank-badge rank-gold">
                    <i class="fa-solid fa-crown"></i>
                    <span>1</span>
                </div>
            `;
        } else if (rank === 2) {
            rowClass += ' row-top-2';
            rankBadge = `
                <div class="rank-badge rank-silver">
                    <i class="fa-solid fa-medal"></i>
                    <span>2</span>
                </div>
            `;
        } else if (rank === 3) {
            rowClass += ' row-top-3';
            rankBadge = `
                <div class="rank-badge rank-bronze">
                    <i class="fa-solid fa-award"></i>
                    <span>3</span>
                </div>
            `;
        } else {
            rankBadge = `<div class="rank-badge rank-normal">${rank}</div>`;
        }

        const titleClass = TITLE_CLASSES[m.title] || 'title-default';
        const noteClass = NOTE_CLASSES[m.note] || 'note-default';

        // Badge trạng thái đội hình
        const formationBadge = m.image ? `
            <div class="formation-status-tag tag-ready" onclick="event.stopPropagation(); openFormationModal(${m.stt})">
                <span class="thumb-mini"><img src="${m.image}" alt="DH" loading="lazy"></span>
                <span><i class="fa-solid fa-shield-halved"></i> Đã có đội hình</span>
            </div>
        ` : `
            <div class="formation-status-tag tag-missing" onclick="event.stopPropagation(); openFormationModal(${m.stt})">
                <i class="fa-solid fa-triangle-exclamation"></i> Chưa cập nhật đội hình
            </div>
        `;

        html += `
            <tr class="${rowClass}" data-stt="${m.stt}" onclick="handleRowClick(event, ${m.stt})">
                <!-- CỘT 1: STT -->
                <td class="col-stt">
                    <div class="stt-cell-content">
                        ${rankBadge}
                    </div>
                </td>

                <!-- CỘT 2: TÊN THÀNH VIÊN & TRẠNG THÁI ĐỘI HÌNH -->
                <td class="col-name">
                    <div class="member-identity">
                        <div class="member-avatar ${rank <= 3 ? 'avatar-top' : ''}">
                            <span>${m.avatar || '⚔️'}</span>
                        </div>
                        <div class="member-name-block">
                            <span class="member-name-text">${highlightMatch(m.name)}</span>
                            <div class="member-sub-info-row">
                                ${formationBadge}
                            </div>
                        </div>
                    </div>
                </td>

                <!-- CỘT 3: LỰC CHIẾN -->
                <td class="col-power">
                    <div class="power-cell-wrapper">
                        <div class="power-value-tag">
                            <i class="fa-solid fa-bolt"></i>
                            <strong>${escapeHtml(m.power)}</strong>
                        </div>
                        <div class="power-bar-container" title="Chiến lực quy đổi: ~${Math.round(powerVal)}B">
                            <div class="power-bar-fill" style="width: ${powerPercent}%"></div>
                        </div>
                    </div>
                </td>

                <!-- CỘT 4: DANH HIỆU -->
                <td class="col-title">
                    <span class="member-title-badge ${titleClass}">
                        <i class="fa-solid fa-shield"></i> ${escapeHtml(m.title)}
                    </span>
                </td>

                <!-- CỘT 5: GHI CHÚ -->
                <td class="col-note">
                    <span class="member-note-badge ${noteClass}">
                        ${getNoteIcon(m.note)} ${escapeHtml(m.note)}
                    </span>
                </td>

                <!-- CỘT 6: CHI TIẾT & THAO TÁC -->
                <td class="col-actions">
                    <div class="action-btn-group">
                        <button class="btn-action btn-view ${m.image ? 'has-image-btn' : ''}" title="Xem chi tiết trận hình" onclick="event.stopPropagation(); openFormationModal(${m.stt})">
                            <i class="fa-solid fa-shield-cat"></i>
                        </button>
                        ${isAdminMode ? `
                            <button class="btn-action btn-edit" title="Chỉnh sửa thông tin" onclick="event.stopPropagation(); openEditModal(${m.stt})">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="btn-action btn-delete" title="Xóa thành viên" onclick="event.stopPropagation(); confirmDeleteMember(${m.stt})">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        ` : ''}
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

function getNoteIcon(note) {
    if (!note) return '';
    const n = note.toLowerCase();
    if (n.includes('chủ')) return '<i class="fa-solid fa-crown"></i>';
    if (n.includes('phó')) return '<i class="fa-solid fa-star"></i>';
    if (n.includes('tinh anh')) return '<i class="fa-solid fa-gem"></i>';
    return '<i class="fa-solid fa-user"></i>';
}

function highlightMatch(text) {
    const searchVal = (document.getElementById('search-input')?.value || '').trim();
    if (!searchVal) return escapeHtml(text);

    try {
        const regex = new RegExp(`(${escapeRegExp(searchVal)})`, 'gi');
        return escapeHtml(text).replace(regex, '<mark class="highlight-text">$1</mark>');
    } catch (e) {
        return escapeHtml(text);
    }
}

function handleRowClick(event, stt) {
    if (event.target.closest('button')) return;
    openFormationModal(stt);
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination-controls');
    const paginationInfo = document.getElementById('pagination-info');
    if (!paginationContainer) return;

    const total = filteredMembers.length;
    if (total === 0) {
        paginationContainer.innerHTML = '';
        if (paginationInfo) paginationInfo.textContent = 'Không có kết quả';
        return;
    }

    const totalPages = pageSize === 9999 ? 1 : Math.ceil(total / pageSize);
    const startIdx = (currentPage - 1) * pageSize + 1;
    const endIdx = pageSize === 9999 ? total : Math.min(currentPage * pageSize, total);

    if (paginationInfo) {
        paginationInfo.innerHTML = `Hiển thị <strong>${startIdx} - ${endIdx}</strong> trên tổng <strong>${total}</strong> thành viên`;
    }

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let html = `
        <button class="page-btn nav-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            <i class="fa-solid fa-chevron-left"></i> Trước
        </button>
    `;

    for (let p = 1; p <= totalPages; p++) {
        if (p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1)) {
            html += `
                <button class="page-btn ${p === currentPage ? 'active' : ''}" onclick="changePage(${p})">
                    ${p}
                </button>
            `;
        } else if (p === currentPage - 2 || p === currentPage + 2) {
            html += `<span class="page-dots">...</span>`;
        }
    }

    html += `
        <button class="page-btn nav-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Sau <i class="fa-solid fa-chevron-right"></i>
        </button>
    `;

    paginationContainer.innerHTML = html;
}

function changePage(newPage) {
    const totalPages = pageSize === 9999 ? 1 : Math.ceil(filteredMembers.length / pageSize);
    if (newPage < 1 || newPage > totalPages) return;
    currentPage = newPage;
    renderTable();
    renderPagination();

    const tableCard = document.querySelector('.table-card-wrapper');
    if (tableCard) {
        tableCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function updateFilterCounts() {
    const countBadge = document.getElementById('filtered-count-badge');
    if (countBadge) {
        countBadge.textContent = `${filteredMembers.length}/${members.length}`;
    }
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(() => {
            applyFilterAndSort();
        }, 200));
    }

    const clearSearchBtn = document.getElementById('btn-clear-search');
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                applyFilterAndSort();
                searchInput.focus();
            }
        });
    }

    ['filter-title', 'filter-note', 'filter-power-tier', 'filter-formation'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => applyFilterAndSort());
    });

    const pageSizeSelect = document.getElementById('page-size-select');
    if (pageSizeSelect) {
        pageSizeSelect.addEventListener('change', (e) => {
            pageSize = parseInt(e.target.value, 10);
            currentPage = 1;
            renderTable();
            renderPagination();
        });
    }

    const resetFilterBtn = document.getElementById('btn-reset-filters');
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', resetFilters);
    }

    const toggleAdminBtn = document.getElementById('toggle-admin-btn');
    if (toggleAdminBtn) {
        toggleAdminBtn.addEventListener('click', toggleAdminMode);
    }

    const btnAutoRank = document.getElementById('btn-auto-rank');
    if (btnAutoRank) {
        btnAutoRank.addEventListener('click', autoRankByPower);
    }

    const btnOpenAddModal = document.getElementById('btn-open-add-modal');
    if (btnOpenAddModal) {
        btnOpenAddModal.addEventListener('click', openAddModal);
    }

    const memberForm = document.getElementById('member-form');
    if (memberForm) {
        memberForm.addEventListener('submit', handleMemberFormSubmit);
    }

    const btnExportCSV = document.getElementById('btn-export-csv');
    if (btnExportCSV) {
        btnExportCSV.addEventListener('click', exportToCSV);
    }

    const btnOpenImport = document.getElementById('btn-open-import');
    if (btnOpenImport) {
        btnOpenImport.addEventListener('click', () => openModal('modal-import-csv'));
    }

    const csvFileInput = document.getElementById('csv-file-input');
    if (csvFileInput) {
        csvFileInput.addEventListener('change', handleCSVFileUpload);
    }

    const btnResetData = document.getElementById('btn-reset-default-data');
    if (btnResetData) {
        btnResetData.addEventListener('click', confirmResetDefaultData);
    }

    const editGuildNameBtn = document.getElementById('btn-edit-guild-name');
    if (editGuildNameBtn) {
        editGuildNameBtn.addEventListener('click', promptEditGuildName);
    }
}

function resetFilters() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    ['filter-title', 'filter-note', 'filter-power-tier', 'filter-formation'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });

    currentSort = { column: 'stt', direction: 'asc' };
    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.sort-btn[data-col="stt"]')?.classList.add('active');

    applyFilterAndSort();
    showToast("Đã thiết lập lại toàn bộ bộ lọc!", "info");
}

function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    const body = document.body;
    const adminToggleBtn = document.getElementById('toggle-admin-btn');
    const adminControlBar = document.getElementById('admin-control-bar');

    if (isAdminMode) {
        body.classList.add('admin-mode-active');
        if (adminToggleBtn) {
            adminToggleBtn.classList.add('active');
            adminToggleBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i> Đang Bật Quản Trị';
        }
        if (adminControlBar) adminControlBar.style.display = 'flex';
        showToast("Đã bật Chế độ Quản trị! Bạn có thể thêm, sửa, xóa thành viên.", "success");
    } else {
        body.classList.remove('admin-mode-active');
        if (adminToggleBtn) {
            adminToggleBtn.classList.remove('active');
            adminToggleBtn.innerHTML = '<i class="fa-solid fa-shield"></i> Chế Độ Quản Trị';
        }
        if (adminControlBar) adminControlBar.style.display = 'none';
        showToast("Đã tắt Chế độ Quản trị.", "info");
    }

    renderTable();
}

function openAddModal() {
    currentEditingMember = null;
    const modalTitle = document.getElementById('member-modal-title');
    const form = document.getElementById('member-form');
    if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-user-plus"></i> Thêm Hùng Tướng Mới';
    if (form) form.reset();

    const nextStt = members.length > 0 ? Math.max(...members.map(m => m.stt || 0)) + 1 : 1;
    const sttInput = document.getElementById('input-member-stt');
    if (sttInput) sttInput.value = nextStt;

    openModal('modal-member-form');
}

function openEditModal(stt) {
    const member = members.find(m => m.stt === stt);
    if (!member) return;

    currentEditingMember = member;
    const modalTitle = document.getElementById('member-modal-title');
    if (modalTitle) modalTitle.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Cập Nhật Hùng Tướng #${member.stt}`;

    document.getElementById('input-member-stt').value = member.stt;
    document.getElementById('input-member-name').value = member.name;
    document.getElementById('input-member-power').value = member.power;
    document.getElementById('input-member-title').value = member.title;
    document.getElementById('input-member-note').value = member.note;
    document.getElementById('input-member-avatar').value = member.avatar || '⚔️';

    openModal('modal-member-form');
}

function handleMemberFormSubmit(e) {
    e.preventDefault();

    const stt = parseInt(document.getElementById('input-member-stt').value, 10);
    const name = document.getElementById('input-member-name').value.trim();
    const power = document.getElementById('input-member-power').value.trim();
    const title = document.getElementById('input-member-title').value.trim();
    const note = document.getElementById('input-member-note').value.trim();
    const avatar = document.getElementById('input-member-avatar').value.trim() || '⚔️';

    if (!name || !power || !title || !note) {
        showToast("Vui lòng điền đầy đủ các thông tin bắt buộc!", "error");
        return;
    }

    const powerVal = calculateNumericPower(power);

    if (currentEditingMember) {
        currentEditingMember.stt = stt;
        currentEditingMember.name = name;
        currentEditingMember.power = power;
        currentEditingMember.powerVal = powerVal;
        currentEditingMember.title = title;
        currentEditingMember.note = note;
        currentEditingMember.avatar = avatar;

        showToast(`Đã cập nhật thông tin thành viên "${name}"!`, "success");
    } else {
        const existsStt = members.some(m => m.stt === stt);
        if (existsStt) {
            members.forEach(m => {
                if (m.stt >= stt) m.stt += 1;
            });
        }

        const newMember = {
            stt: stt,
            name: name,
            power: power,
            powerVal: powerVal,
            title: title,
            note: note,
            avatar: avatar,
            image: null
        };
        members.push(newMember);
        showToast(`Đã thêm thành viên "${name}" thành công!`, "success");
    }

    saveMembersData();
    closeModal('modal-member-form');
    updateStats();
    renderPodium();
    applyFilterAndSort();
    updateLastUpdatedTime();
}

function confirmDeleteMember(stt) {
    const member = members.find(m => m.stt === stt);
    if (!member) return;

    memberToDelete = member;
    const deleteNameSpan = document.getElementById('delete-member-name');
    if (deleteNameSpan) {
        deleteNameSpan.innerHTML = `<strong>${escapeHtml(member.name)}</strong> (STT: #${member.stt})`;
    }

    openModal('modal-delete-confirm');
}

function executeDeleteMember() {
    if (!memberToDelete) return;

    const deletedName = memberToDelete.name;
    members = members.filter(m => m.stt !== memberToDelete.stt);

    members.sort((a, b) => a.stt - b.stt);
    members.forEach((m, idx) => {
        m.stt = idx + 1;
    });

    saveMembersData();
    closeModal('modal-delete-confirm');
    memberToDelete = null;

    updateStats();
    renderPodium();
    applyFilterAndSort();
    updateLastUpdatedTime();

    showToast(`Đã xóa thành viên "${deletedName}" khỏi quân đoàn!`, "info");
}

function autoRankByPower() {
    if (!confirm("Bạn có chắc muốn tự động sắp xếp lại toàn bộ thứ hạng STT theo lực chiến từ cao xuống thấp không?")) {
        return;
    }

    members.sort((a, b) => {
        const valA = a.powerVal || calculateNumericPower(a.power);
        const valB = b.powerVal || calculateNumericPower(b.power);
        return valB - valA;
    });

    members.forEach((m, idx) => {
        m.stt = idx + 1;
    });

    saveMembersData();
    currentSort = { column: 'stt', direction: 'asc' };
    updateStats();
    renderPodium();
    applyFilterAndSort();
    updateLastUpdatedTime();

    showToast("Đã tự động sắp xếp và cập nhật lại thứ hạng STT thành công!", "success");
}

function exportToCSV() {
    try {
        let csvContent = '\uFEFF';
        csvContent += 'STT,TÊN THÀNH VIÊN,LỰC CHIẾN,DANH HIỆU,GHI CHÚ,TRẠNG THÁI ĐỘI HÌNH\r\n';

        const sorted = [...members].sort((a, b) => a.stt - b.stt);

        sorted.forEach(m => {
            const cleanName = `"${String(m.name).replace(/"/g, '""')}"`;
            const cleanPower = `"${String(m.power).replace(/"/g, '""')}"`;
            const cleanTitle = `"${String(m.title).replace(/"/g, '""')}"`;
            const cleanNote = `"${String(m.note).replace(/"/g, '""')}"`;
            const cleanDH = `"${m.image ? 'Đã có đội hình' : 'Chưa cập nhật'}"`;

            csvContent += `${m.stt},${cleanName},${cleanPower},${cleanTitle},${cleanNote},${cleanDH}\r\n`;
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        const dateStr = new Date().toISOString().slice(0, 10);
        link.setAttribute('download', `Bang_Xep_Hang_Mieu_Chu_Tam_Quoc_${dateStr}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showToast("Đã xuất file CSV thành công!", "success");
    } catch (e) {
        console.error("Lỗi xuất file:", e);
        showToast("Lỗi khi xuất file CSV!", "error");
    }
}

function handleCSVFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const content = event.target.result;
            const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);

            if (lines.length < 2) {
                showToast("File CSV không có dữ liệu hợp lệ!", "error");
                return;
            }

            const parsedMembers = [];
            for (let i = 1; i < lines.length; i++) {
                const cols = parseCSVLine(lines[i]);
                if (cols.length >= 4) {
                    const stt = parseInt(cols[0], 10) || i;
                    const name = cols[1] || `Thành viên ${i}`;
                    const power = cols[2] || '100B';
                    const title = cols[3] || 'Thành viên';
                    const note = cols[4] || 'Thành viên';

                    parsedMembers.push({
                        stt: stt,
                        name: name,
                        power: power,
                        powerVal: calculateNumericPower(power),
                        title: title,
                        note: note,
                        avatar: '⚔️',
                        image: null
                    });
                }
            }

            if (parsedMembers.length === 0) {
                showToast("Không tìm thấy dòng dữ liệu hợp lệ trong file!", "error");
                return;
            }

            if (confirm(`Tìm thấy ${parsedMembers.length} thành viên trong file CSV. Bạn có muốn ghi đè danh sách hiện tại không?`)) {
                members = parsedMembers;
                saveMembersData();
                closeModal('modal-import-csv');
                updateStats();
                renderPodium();
                applyFilterAndSort();
                updateLastUpdatedTime();
                showToast(`Đã nhập thành công ${parsedMembers.length} thành viên!`, "success");
            }
        } catch (err) {
            console.error("Lỗi đọc file CSV:", err);
            showToast("Định dạng file CSV không hợp lệ!", "error");
        }
    };
    reader.readAsText(file, 'UTF-8');
}

function parseCSVLine(text) {
    const result = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '"') {
            if (inQuotes && text[i + 1] === '"') {
                cur += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (c === ',' && !inQuotes) {
            result.push(cur.trim());
            cur = '';
        } else {
            cur += c;
        }
    }
    result.push(cur.trim());
    return result;
}

function downloadSampleCSV() {
    const sample = '\uFEFFSTT,TÊN THÀNH VIÊN,LỰC CHIẾN,DANH HIỆU,GHI CHÚ\r\n1,•SW• Apex (Hhh),>1T2,Thần Vương,Bang Chủ\r\n2,•SW• Yudai (Sỹ),800-1T,Đại Tướng Quân,Bang phó\r\n3,•BW• ẦyYa (Phi Long),400-600B,Phiêu kỵ TQ,Tinh anh\r\n';
    const blob = new Blob([sample], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mau_Danh_Sach_Quan_Doan.csv';
    link.click();
    URL.revokeObjectURL(url);
}

function confirmResetDefaultData() {
    if (confirm("Khôi phục toàn bộ danh sách về 41 thành viên và hình ảnh đội hình ban đầu?")) {
        members = JSON.parse(JSON.stringify(DEFAULT_MEMBERS));
        saveMembersData();
        updateStats();
        renderPodium();
        applyFilterAndSort();
        updateLastUpdatedTime();
        showToast("Đã khôi phục dữ liệu gốc 41 thành viên thành công!", "success");
    }
}

function promptEditGuildName() {
    const currentName = document.getElementById('guild-name-display')?.textContent || 'SHADOW WARRIORS';
    const newName = prompt("Nhập tên Quân Đoàn mới:", currentName);
    if (newName && newName.trim()) {
        const trimmed = newName.trim();
        const el = document.getElementById('guild-name-display');
        if (el) el.textContent = trimmed;
        localStorage.setItem(GUILD_CONFIG_KEY, JSON.stringify({ guildName: trimmed }));
        showToast(`Đã đổi tên quân đoàn thành "${trimmed}"!`, "success");
    }
}

function updateGuildInfo() {
    try {
        const stored = localStorage.getItem(GUILD_CONFIG_KEY);
        if (stored) {
            const data = JSON.parse(stored);
            if (data.guildName) {
                const el = document.getElementById('guild-name-display');
                if (el) el.textContent = data.guildName;
            }
        }
    } catch (e) {
        console.error("Lỗi đọc cấu hình quân đoàn:", e);
    }
}

function initLastUpdated() {
    const lastUpdatedEl = document.getElementById('last-updated-text');
    if (!lastUpdatedEl) return;
    const now = new Date();
    lastUpdatedEl.textContent = `Hôm nay, ${formatDateTime(now)}`;
}

function updateLastUpdatedTime() {
    const lastUpdatedEl = document.getElementById('last-updated-text');
    if (!lastUpdatedEl) return;
    const now = new Date();
    lastUpdatedEl.textContent = `Vừa xong, ${formatDateTime(now)}`;
}

function formatDateTime(d) {
    const pad = n => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())} - ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

/**
 * MODAL XEM CHI TIẾT ĐỘI HÌNH (Lineup / Formation)
 */
function openFormationModal(stt) {
    const member = members.find(m => m.stt === stt);
    if (!member) return;

    activeFormationMember = member;

    const modalName = document.getElementById('formation-member-name');
    const modalRank = document.getElementById('formation-member-rank');
    const modalPower = document.getElementById('formation-member-power');
    const modalTitle = document.getElementById('formation-member-title');
    const modalNote = document.getElementById('formation-member-note');
    const modalServer = document.getElementById('formation-member-server');

    if (modalName) modalName.textContent = member.name;
    if (modalRank) modalRank.textContent = `Hạng #${member.stt}`;
    if (modalPower) modalPower.textContent = member.power;
    if (modalServer) {
        modalServer.textContent = member.server ? `Server: ${member.server}` : 'Chưa rõ server';
    }
    if (modalTitle) {
        modalTitle.className = `member-title-badge ${TITLE_CLASSES[member.title] || 'title-default'}`;
        modalTitle.textContent = member.title;
    }
    if (modalNote) {
        modalNote.className = `member-note-badge ${NOTE_CLASSES[member.note] || 'note-default'}`;
        modalNote.textContent = member.note;
    }

    // Hiển thị hình ảnh thực tế hoặc thông báo chưa cập nhật
    const screenshotImg = document.getElementById('formation-screenshot-preview');
    const screenshotPlaceholder = document.getElementById('formation-screenshot-placeholder');
    const screenshotContainer = document.getElementById('formation-screenshot-container');

    if (member.image) {
        if (screenshotImg) {
            screenshotImg.src = member.image;
            screenshotImg.style.display = 'block';
        }
        if (screenshotPlaceholder) screenshotPlaceholder.style.display = 'none';
        if (screenshotContainer) screenshotContainer.classList.add('has-active-image');
    } else {
        if (screenshotImg) screenshotImg.style.display = 'none';
        if (screenshotPlaceholder) screenshotPlaceholder.style.display = 'flex';
        if (screenshotContainer) screenshotContainer.classList.remove('has-active-image');
    }

    openModal('modal-formation-view');
}

/**
 * Tải lên ảnh chụp màn hình đội hình
 */
function handleScreenshotUpload(event) {
    const file = event.target.files[0];
    if (!file || !activeFormationMember) return;

    if (!file.type.startsWith('image/')) {
        showToast("Vui lòng chọn file hình ảnh (PNG, JPG, WebP)!", "error");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64Data = e.target.result;
        activeFormationMember.image = base64Data;
        saveMembersData();

        const screenshotImg = document.getElementById('formation-screenshot-preview');
        const screenshotPlaceholder = document.getElementById('formation-screenshot-placeholder');
        if (screenshotImg) {
            screenshotImg.src = base64Data;
            screenshotImg.style.display = 'block';
        }
        if (screenshotPlaceholder) screenshotPlaceholder.style.display = 'none';

        updateStats();
        renderTable();
        showToast(`Đã lưu ảnh đội hình cho ${activeFormationMember.name}!`, "success");
    };
    reader.readAsDataURL(file);
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        const anyActive = document.querySelector('.modal-backdrop.active');
        if (!anyActive) {
            document.body.classList.remove('modal-open');
        }
    }
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
        e.target.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
        document.body.classList.remove('modal-open');
    }
});

function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const icons = {
        success: 'fa-circle-check',
        error: 'fa-triangle-exclamation',
        info: 'fa-circle-info'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type} animate-slide-in`;
    toast.innerHTML = `
        <i class="fa-solid ${icons[type] || 'fa-bell'} toast-icon"></i>
        <span class="toast-message">${escapeHtml(message)}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function removeVietnameseTones(str) {
    if (!str) return '';
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str;
}
