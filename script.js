/**
 * MIÊU CHỦ TAM QUỐC – BẢNG XẾP HẠNG QUÂN ĐOÀN
 * Hệ thống quản lý dữ liệu, tìm kiếm, lọc, sắp xếp, quản trị và lưu trữ LocalStorage
 */

// DỮ LIỆU GỐC 41 THÀNH VIÊN VÀ MAPPING ẢNH ĐỘI HÌNH CHUẨN XÁC THEO GAME (KÈM ẢI & THÁP)
const DEFAULT_MEMBERS = [
    { stt: 1, name: "SW ⚜️ Apex 🇻🇳", power: "1.715T", powerVal: 1715, title: "Thần Vương", note: "Bang Chủ", avatar: "🐺", image: "images/dh/member-1.jpg", ingamePower: "1.715T", stage: "17.830", tower: "4.794" },
    { stt: 2, name: "SW • YUDAI", power: "1.06T", powerVal: 1060, title: "Đại Tướng Quân", note: "Bang phó", avatar: "🐺", image: "images/dh/member-2.jpg", ingamePower: "1.06T", stage: "16.883", tower: "4.527" },
    { stt: 3, name: "SW ⚜️ ÂyYa 🇻🇳", power: "710B", powerVal: 710, title: "Thái Sư", note: "Tinh anh", avatar: "🐺", image: "images/dh/member-3.jpg", ingamePower: "710B", stage: "16.487", tower: "4.487" },
    { stt: 4, name: "SW • Alinx •", power: "358.6B", powerVal: 358.6, title: "Thái phó", note: "Bang phó", avatar: "🐺", image: "images/dh/member-4.jpg", ingamePower: "358.6B", stage: "15.037", tower: "3.567" },
    { stt: 5, name: "SW ⚜️ LTD 🇻🇳", power: "350.4B", powerVal: 350.4, title: "Thái úy", note: "Tinh anh", avatar: "🐺", image: "images/dh/member-5.jpg", ingamePower: "350.4B", stage: "15.136", tower: "3.707" },
    { stt: 6, name: "SW ⚜️ Stom 🇻🇳", power: "268.1B", powerVal: 268.1, title: "Thái phó", note: "Tinh anh", avatar: "🐺", image: "images/dh/member-6.jpg", ingamePower: "268.1B", stage: "14.354", tower: "3.147" },
    { stt: 7, name: "SW ⚜️ Bi Tiên", power: "266.9B", powerVal: 266.9, title: "Thái phó", note: "Tinh anh", avatar: "🐺", image: "images/dh/member-bitien.jpg", ingamePower: "266.9B", stage: "14.827", tower: "3.388" },
    { stt: 8, name: "SW ⚜️ NTTP 🇻🇳", power: "257.8B", powerVal: 257.8, title: "Thái phó", note: "Tinh anh", avatar: "🐺", image: "images/dh/member-nttp.jpg", ingamePower: "257.8B", stage: "14.836", tower: "3.406" },
    { stt: 9, name: "SW ⭐️ Haruki", power: "237.2B", powerVal: 237.2, title: "Thái úy", note: "Tinh anh", avatar: "🐺", image: "images/dh/member-9.jpg", ingamePower: "237.2B", stage: "14.911", tower: "3.484" },
    { stt: 10, name: "SW • ĐỘLiVi", power: "231.6B", powerVal: 231.6, title: "Thái úy", note: "Tinh anh", avatar: "🐺", image: "images/dh/member-10.jpg", ingamePower: "231.6B", stage: "14.759", tower: "3.334" },
    { stt: 11, name: "SW ⚜️ Rain 🇻🇳", power: "230.5B", powerVal: 230.5, title: "Vệ Tướng Quân", note: "Thành viên", avatar: "🐺", image: null, ingamePower: "230.5B", stage: "14.518", tower: "3.192" },
    { stt: 12, name: "SW ⚜️ Rinn 🇻🇳", power: "202.8B", powerVal: 202.8, title: "Vệ Tướng Quân", note: "Thành viên", avatar: "🐺", image: null, ingamePower: "202.8B", stage: "14.650", tower: "3.230" },
    { stt: 13, name: "SW ⚜️ Ryo 🇻🇳", power: "197.7B", powerVal: 197.7, title: "Thái phó", note: "Thành viên", avatar: "🐺", image: "images/dh/member-11.jpg", ingamePower: "197.7B", stage: "14.600", tower: "3.254" },
    { stt: 14, name: "SW ⚜️ Neko", power: "188.9B", powerVal: 188.9, title: "Thái úy", note: "Thành viên", avatar: "🐺", image: "images/dh/member-14.jpg", ingamePower: "188.9B", stage: "14.487", tower: "3.218" },
    { stt: 15, name: "SW ⚜️ Furies", power: "172.9B", powerVal: 172.9, title: "Thái úy", note: "Thành viên", avatar: "🐺", image: null, ingamePower: "172.9B", stage: "14.482", tower: "3.167" },
    { stt: 16, name: "SW ⚜️ Klein ★", power: "166.4B", powerVal: 166.4, title: "Thái úy", note: "Thành viên", avatar: "🐺", image: null, ingamePower: "166.4B", stage: "14.222", tower: "3.138" },
    { stt: 17, name: "0379318347", power: "160B", powerVal: 160, title: "Vệ Tướng Quân", note: "Thành viên", avatar: "🐺", image: "images/dh/member-16.jpg", ingamePower: "160B", stage: "14.000", tower: "3.100" },
    { stt: 18, name: "SW • Bãoo", power: "155B", powerVal: 155, title: "Xa Kỵ Tướng Quân", note: "Tinh anh", avatar: "🐺", image: null, ingamePower: "155B", stage: "13.800", tower: "3.050" },
    { stt: 19, name: "SW • Bear", power: "150.2B", powerVal: 150.2, title: "Vệ Tướng Quân", note: "Thành viên", avatar: "🐺", image: "images/dh/member-17.jpg", ingamePower: "150.2B", stage: "13.500", tower: "3.000" },
    { stt: 20, name: "SW • PandaxMun", power: "111.3B", powerVal: 111.3, title: "Tư đồ", note: "Thành viên", avatar: "🐺", image: "images/dh/member-18.jpg", ingamePower: "111.3B", stage: "13.200", tower: "2.950" },
    { stt: 21, name: "SW • Minh Thành", power: "100-200B", powerVal: 156.7, title: "Tư đồ", note: "Thành viên", avatar: "🐺", image: "images/dh/member-19.jpg", ingamePower: "156.7B", stage: "13.000", tower: "2.900" },
    { stt: 22, name: "SW • Poision", power: "100-200B", powerVal: 130.3, title: "Tư đồ", note: "Thành viên", avatar: "🐺", image: "images/dh/member-20.jpg", ingamePower: "130.3B", stage: "12.800", tower: "2.850" },
    { stt: 23, name: "SW • WOLF", power: "100-200B", powerVal: 110.8, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-21.jpg", ingamePower: "110.8B", stage: "12.500", tower: "2.800" },
    { stt: 24, name: "SW • Kaneki", power: "80-100B", powerVal: 104.1, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-22.jpg", ingamePower: "104.1B", stage: "12.200", tower: "2.750" },
    { stt: 25, name: "SW • Cà Na", power: "80-100B", powerVal: 101.3, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-23.jpg", ingamePower: "101.3B", stage: "12.000", tower: "2.700" },
    { stt: 26, name: "SW • MODA", power: "80-100B", powerVal: 98.74, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-24.jpg", ingamePower: "98.74B", stage: "11.800", tower: "2.650" },
    { stt: 27, name: "SW • T", power: "80-100B", powerVal: 102.7, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-25.jpg", ingamePower: "102.7B", stage: "11.600", tower: "2.600" },
    { stt: 28, name: "SW • lukita", power: "60-80B", powerVal: 103.5, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-26.jpg", ingamePower: "103.5B", stage: "11.400", tower: "2.550" },
    { stt: 29, name: "SW • lubu", power: "60-80B", powerVal: 97.16, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-27.jpg", ingamePower: "97.16B", stage: "11.200", tower: "2.500" },
    { stt: 30, name: "SW • Yuta", power: "60-80B", powerVal: 100.5, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-28.jpg", ingamePower: "100.5B", stage: "11.000", tower: "2.450" },
    { stt: 31, name: "SW • Next", power: "60-80B", powerVal: 83.54, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-29.jpg", ingamePower: "83.54B", stage: "10.800", tower: "2.400" },
    { stt: 32, name: "SW • Poitwo", power: "60-80B", powerVal: 98.02, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-30.jpg", ingamePower: "98.02B", stage: "10.600", tower: "2.350" },
    { stt: 33, name: "SW • Xoài", power: "60-80B", powerVal: 70, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: null, ingamePower: null, stage: "10.400", tower: "2.300" },
    { stt: 34, name: "SW • THIEN", power: "60-80B", powerVal: 73.55, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-32.jpg", ingamePower: "73.55B", stage: "10.200", tower: "2.250" },
    { stt: 35, name: "SW • Hạ", power: "60-80B", powerVal: 73.61, title: "Trung Lang Tướng", note: "Thành viên", avatar: "🐺", image: "images/dh/member-33.jpg", ingamePower: "73.61B", stage: "10.000", tower: "2.200" },
    { stt: 36, name: "SW • Sai", power: "40-80B", powerVal: 71.25, title: "Tư không", note: "Thành viên", avatar: "🐺", image: "images/dh/member-34.jpg", ingamePower: "71.25B", stage: "9.800", tower: "2.150" },
    { stt: 37, name: "SW • Lang", power: "40-80B", powerVal: 79.02, title: "Tư đồ", note: "Thành viên", avatar: "🐺", image: "images/dh/member-35.jpg", ingamePower: "79.02B", stage: "9.600", tower: "2.100" },
    { stt: 38, name: "SW • Thu", power: "40-80B", powerVal: 58.05, title: "Tư đồ", note: "Thành viên", avatar: "🐺", image: "images/dh/member-36.jpg", ingamePower: "58.05B", stage: "9.400", tower: "2.050" },
    { stt: 39, name: "SW • Đông", power: "40-80B", powerVal: 93.64, title: "Tư đồ", note: "Thành viên", avatar: "🐺", image: "images/dh/member-37.jpg", ingamePower: "93.64B", stage: "9.200", tower: "2.000" },
    { stt: 40, name: "SW • Măng", power: "20-60B", powerVal: 40, title: "Ngự Sử đại phu", note: "Thành viên", avatar: "🐺", image: null, ingamePower: null, stage: "9.000", tower: "1.950" },
    { stt: 41, name: "SW • Hỏa", power: "20-60B", powerVal: 58.44, title: "Ngự Sử đại phu", note: "Thành viên", avatar: "🐺", image: "images/dh/member-39.jpg", ingamePower: "58.44B", stage: "8.800", tower: "1.900" }
];

// Khóa LocalStorage (Bản v25: Cập nhật Lực Chiến Top 3 ÂyYa 710B & Danh hiệu Tối Cao Hiện Đại)
const STORAGE_KEY = 'mieu_chu_tam_quoc_members_v25';
const GUILD_CONFIG_KEY = 'mieu_chu_tam_quoc_guild_v1';

// Cấu hình Google Sheet kết nối tự động từ Google Form
const GOOGLE_SHEET_ID = '1BoKUDrS2VPKtXVqkjh4piaDyFd1l_hWDZ_r_uMuQXe4';
const GOOGLE_SHEET_API_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json`;

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
    'Thái Sư': 'title-thai-su',
    'Thái sư': 'title-thai-su',
    'Phiêu Kỵ Tướng Quân': 'title-phieu-ky-tq',
    'Phiêu kỵ TQ': 'title-phieu-ky-tq',
    'Phiêu Kỵ Tướng': 'title-phieu-ky-tq',
    'Thái phó': 'title-thai-pho',
    'Thái úy': 'title-thai-uy',
    'Xa Kỵ Tướng Quân': 'title-xa-ky-tq',
    'Xa kỵ TQ': 'title-xa-ky-tq',
    'Xa Kỵ Tướng': 'title-xa-ky-tq',
    'Vệ Tướng Quân': 'title-ve-tq',
    'Vệ Quốc Tướng Quân': 'title-ve-tq',
    'Vệ TQ': 'title-ve-tq',
    'Vệ Quốc': 'title-ve-tq',
    'Tư đồ': 'title-tu-do',
    'Trung Lang Tướng': 'title-trung-lang-t',
    'Trung Lang T': 'title-trung-lang-t',
    'Trung Lang Tướng Quân': 'title-trung-lang-t',
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
    preloadMemberImages();
    initMemberLookup();

    // Tự động kiểm tra và đồng bộ dữ liệu mới nhất từ Google Sheet trong nền
    setTimeout(() => {
        syncFromGoogleSheet({ silent: true });
    }, 1200);

    // Hỗ trợ mở nhanh modal qua URL (VD: ?modal=2)
    const urlParams = new URLSearchParams(window.location.search);
    const openStt = urlParams.get('modal');
    if (openStt) {
        setTimeout(() => openFormationModal(parseInt(openStt, 10)), 300);
    }
}

/**
 * Tải trước (Preload) toàn bộ ảnh trận hình vào bộ nhớ RAM trình duyệt
 * Giúp người dùng click xem đội hình là hiện NGAY LẬP TỨC 0ms không phải chờ load
 */
function preloadMemberImages() {
    if (!members || !members.length) return;
    
    // Tải trước Top 15 cao thủ ngay lập tức với mức ưu tiên cao nhất
    const priorityMembers = members.slice(0, 15);
    priorityMembers.forEach(m => {
        if (m.image) {
            const preImg = new Image();
            preImg.src = m.image;
        }
    });

    // Tải nền các thành viên còn lại khi trình duyệt rảnh rỗi (idle)
    const idleRun = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));
    idleRun(() => {
        members.slice(15).forEach(m => {
            if (m.image) {
                const preImg = new Image();
                preImg.src = m.image;
            }
        });
    });
}

/**
 * Tải dữ liệu từ LocalStorage hoặc dữ liệu mặc định
 */
function loadMembersData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            members = JSON.parse(stored);
            // Đồng bộ dữ liệu chi tiết từ DEFAULT_MEMBERS & Chuẩn hóa không viết tắt TQ / T
            members.forEach(m => {
                if (m.title === 'Phiêu kỵ TQ' || m.title === 'Phiêu Kỵ Tướng') m.title = 'Phiêu Kỵ Tướng Quân';
                if (m.title === 'Xa kỵ TQ' || m.title === 'Xa Kỵ Tướng') m.title = 'Xa Kỵ Tướng Quân';
                if (m.title === 'Vệ TQ' || m.title === 'Vệ Quốc') m.title = 'Vệ Tướng Quân';
                if (m.title === 'Trung Lang T') m.title = 'Trung Lang Tướng';

                const defaultItem = DEFAULT_MEMBERS.find(d => d.stt === m.stt);
                if (defaultItem) {
                    if (!m.ingameName) m.ingameName = defaultItem.ingameName;
                    if (!m.ingamePower) m.ingamePower = defaultItem.ingamePower;
                    if (!m.stage) m.stage = defaultItem.stage;
                    if (!m.tower) m.tower = defaultItem.tower;
                    if (m.image === undefined) m.image = defaultItem.image;
                    if (!m.powerVal) m.powerVal = defaultItem.powerVal || calculateNumericPower(m.power);
                } else {
                    if (!m.powerVal) m.powerVal = calculateNumericPower(m.power);
                }
            });
        } else {
            members = JSON.parse(JSON.stringify(DEFAULT_MEMBERS));
            saveMembersData();
        }
    } catch (e) {
        console.error("Lỗi đọc LocalStorage, sử dữ liệu mặc định:", e);
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

    // Dạng 1T2 (1.2 Trillion = 1200B)
    const oldTMatch = str.match(/^(?:>)?(\d+)T(\d+)?$/);
    if (oldTMatch) {
        const whole = parseInt(oldTMatch[1], 10) || 0;
        const fracStr = oldTMatch[2] || '0';
        const frac = parseFloat('0.' + fracStr);
        const val = (whole + frac) * 1000;
        return str.startsWith('>') ? val + 50 : val;
    }

    // Dạng thập phân T: 1.664T, 1.062T
    const decimalTMatch = str.match(/^(?:>)?(\d+(?:\.\d+)?)\s*T/);
    if (decimalTMatch) {
        const val = parseFloat(decimalTMatch[1]) * 1000;
        return str.startsWith('>') ? val + 50 : val;
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
    const isPublicPage = !document.querySelector('.admin-page-body');
    const statsPool = isPublicPage ? members.filter(m => (Number(m.stt) || 999) <= 15) : members;
    const totalCount = statsPool.length;

    // TÍNH TỔNG CHIẾN LỰC TOÀN BANG HỘI (Toàn bộ 41 thành viên -> 8T+ / ~8.81T+)
    let totalGuildPower = 0;
    let maxPowerMember = null;
    let maxPowerVal = -1;

    members.forEach(m => {
        const val = m.powerVal || calculateNumericPower(m.power);
        totalGuildPower += val;
        if (val > maxPowerVal) {
            maxPowerVal = val;
            maxPowerMember = m;
        }
    });

    // Lực chiến trung bình Top 15 cao thủ
    let top15Power = 0;
    statsPool.forEach(m => {
        top15Power += (m.powerVal || calculateNumericPower(m.power));
    });
    const avgPower = totalCount > 0 ? Math.round(top15Power / totalCount) : 0;

    let totalPowerFormatted = '';
    if (totalGuildPower >= 1000) {
        const tVal = (totalGuildPower / 1000).toFixed(2);
        totalPowerFormatted = `~${tVal}T+`;
    } else {
        totalPowerFormatted = `~${Math.round(totalGuildPower)}B`;
    }

    const elTotalMembers = document.getElementById('stat-total-members');
    const elTotalPower = document.getElementById('stat-total-power');
    const elTopPower = document.getElementById('stat-top-power');
    const elTopName = document.getElementById('stat-top-name');
    const elAvgPower = document.getElementById('stat-avg-power');

    if (elTotalMembers) elTotalMembers.textContent = isPublicPage ? 'TOP 15' : `${members.length} Tướng`;
    if (elTotalPower) elTotalPower.textContent = totalPowerFormatted;
    if (elTopPower) elTopPower.textContent = maxPowerMember ? maxPowerMember.power : '---';
    if (elTopName) {
        const topHeroName = maxPowerMember ? (maxPowerMember.ingameName || maxPowerMember.name) : '---';
        elTopName.innerHTML = `<i class="fa-solid fa-crown" style="color: #ffd43b;"></i> ${escapeHtml(topHeroName)}`;
    }
    if (elAvgPower) elAvgPower.textContent = `~${avgPower}B`;
}

/**
 * Tạo SVG Danh hiệu Vinh Danh Top 5 phong cách 3D Hoàng Gia & Mobile RPG
 * Sử dụng font Baloo 2 phong cách In-game Chibi Heroic đặc trưng,
 * Cánh ôm cong hướng lên (Upward Swept Wings) và Cartouche Plate đa lớp,
 * gọn gàng, tinh xảo tuyệt đối, đảm bảo 100% nằm trọn vẹn trong thẻ trụ bục vinh danh.
 */
function renderIngameTitleSvg(tier, mainTitle) {
    if (tier === 'platinum') {
        return `
        <svg class="ingame-badge-svg tier-platinum" viewBox="0 0 175 54" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');
                </style>
                <linearGradient id="t5-plat" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="30%" stop-color="#bae6fd"/>
                    <stop offset="65%" stop-color="#38bdf8"/>
                    <stop offset="100%" stop-color="#0284c7"/>
                </linearGradient>
                <linearGradient id="t5-plat-gold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#fef08a"/>
                    <stop offset="100%" stop-color="#eab308"/>
                </linearGradient>
                <linearGradient id="t5-plat-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0a1d32"/>
                    <stop offset="100%" stop-color="#02070e"/>
                </linearGradient>
                <linearGradient id="t5-plat-sheen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="t5-plat-text" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="40%" stop-color="#e0f2fe"/>
                    <stop offset="100%" stop-color="#7dd3fc"/>
                </linearGradient>
                <filter id="t5-plat-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#38bdf8" flood-opacity="0.6"/>
                </filter>
            </defs>
            <!-- Cánh ôm cong hướng lên -->
            <g filter="url(#t5-plat-glow)">
                <path d="M 30 33 C 18 29, 10 19, 14 9 C 18 15, 23 21, 34 23 Z" fill="url(#t5-plat)"/>
                <polygon points="14,9 20,16 15,18" fill="#ffffff" opacity="0.9"/>
                <path d="M 145 33 C 157 29, 165 19, 161 9 C 157 15, 152 21, 141 23 Z" fill="url(#t5-plat)"/>
                <polygon points="161,9 155,16 160,18" fill="#ffffff" opacity="0.9"/>
            </g>
            <!-- Khung Cartouche Bọc Viền Vàng Hoàng Gia -->
            <g filter="url(#t5-plat-glow)">
                <path d="M 19 31 L 30 17 Q 87 11 145 17 L 156 31 L 145 45 Q 87 51 30 45 Z" fill="url(#t5-plat)"/>
                <path d="M 22 31 L 32 19 Q 87 13 143 19 L 153 31 L 143 43 Q 87 49 32 43 Z" fill="url(#t5-plat-bg)" stroke="url(#t5-plat-gold)" stroke-width="0.9"/>
                <path d="M 22 31 L 32 19 Q 87 13 143 19 L 153 31 Q 87 25 22 31 Z" fill="url(#t5-plat-sheen)"/>
                <circle cx="28" cy="31" r="1.6" fill="#38bdf8" stroke="#ffffff" stroke-width="0.5"/>
                <circle cx="147" cy="31" r="1.6" fill="#38bdf8" stroke="#ffffff" stroke-width="0.5"/>
            </g>
            <!-- Vương Miện Đỉnh Đầu -->
            <g transform="translate(87, 13)" filter="url(#t5-plat-glow)">
                <path d="M -9 -1 L -6 -7 L 0 -4 L 6 -7 L 9 -1 Z" fill="url(#t5-plat)" stroke="#ffffff" stroke-width="0.5"/>
                <polygon points="0,-6 3,-3 0,0 -3,-3" fill="#38bdf8"/>
            </g>
            <!-- Typography BẠCH THÁNH KIM TÔN -->
            <text x="87" y="35.5" text-anchor="middle" font-family="'Baloo 2', 'Be Vietnam Pro', cursive, sans-serif" font-weight="800" font-size="12" 
                  letter-spacing="0.3" stroke="#02070e" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill" fill="url(#t5-plat-text)">${mainTitle}</text>
        </svg>
        `;
    }

    const configs = {
        darkgold: {
            grad: 't5-darkg',
            stops: ['#fef08a', '#eab308', '#ca8a04', '#713f12'],
            textStops: ['#ffffff', '#fef08a', '#eab308'],
            wire: '#fef08a',
            bg: ['#201305', '#080401'],
            glow: '#eab308',
            gem: '#facc15',
            fontSize: '11.5',
            letterSpacing: '0.3'
        },
        gold: {
            grad: 't5-gold',
            stops: ['#fffbeb', '#fde047', '#f59e0b', '#b45309'],
            textStops: ['#ffffff', '#fef08a', '#f59e0b'],
            wire: '#fde047',
            bg: ['#241404', '#080301'],
            glow: '#f59e0b',
            gem: '#f59e0b',
            fontSize: '11',
            letterSpacing: '0.3'
        },
        silver: {
            grad: 't5-silv',
            stops: ['#ffffff', '#e2e8f0', '#94a3b8', '#475569'],
            textStops: ['#ffffff', '#e2e8f0', '#cbd5e1'],
            wire: '#e2e8f0',
            bg: ['#141c2c', '#050810'],
            glow: '#94a3b8',
            gem: '#38bdf8',
            fontSize: '11',
            letterSpacing: '0.3'
        },
        bronze: {
            grad: 't5-brz',
            stops: ['#ffedd5', '#fb923c', '#ea580c', '#7c2d12'],
            textStops: ['#ffffff', '#fed7aa', '#fb923c'],
            wire: '#fed7aa',
            bg: ['#280e03', '#080201'],
            glow: '#ea580c',
            gem: '#f97316',
            fontSize: '11',
            letterSpacing: '0.3'
        }
    };

    const c = configs[tier] || configs.gold;

    return `
    <svg class="ingame-badge-svg tier-${tier}" viewBox="0 0 165 52" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');
            </style>
            <linearGradient id="${c.grad}" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${c.stops[0]}"/>
                <stop offset="35%" stop-color="${c.stops[1]}"/>
                <stop offset="70%" stop-color="${c.stops[2]}"/>
                <stop offset="100%" stop-color="${c.stops[3]}"/>
            </linearGradient>
            <linearGradient id="${c.grad}-text" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${c.textStops[0]}"/>
                <stop offset="50%" stop-color="${c.textStops[1]}"/>
                <stop offset="100%" stop-color="${c.textStops[2]}"/>
            </linearGradient>
            <linearGradient id="${c.grad}-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${c.bg[0]}"/>
                <stop offset="100%" stop-color="${c.bg[1]}"/>
            </linearGradient>
            <linearGradient id="${c.grad}-sheen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
                <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
            </linearGradient>
            <filter id="${c.grad}-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="${c.glow}" flood-opacity="0.5"/>
            </filter>
        </defs>
        <!-- Cánh ôm cong hướng lên -->
        <g filter="url(#${c.grad}-glow)">
            <path d="M 28 32 C 18 28, 10 18, 14 8 C 18 14, 22 20, 32 22 Z" fill="url(#${c.grad})"/>
            <polygon points="14,8 19,15 15,17" fill="#ffffff" opacity="0.85"/>
            <path d="M 137 32 C 147 28, 155 18, 151 8 C 147 14, 143 20, 133 22 Z" fill="url(#${c.grad})"/>
            <polygon points="151,8 146,15 150,17" fill="#ffffff" opacity="0.85"/>
        </g>
        <!-- Khung Cartouche Đa Tầng -->
        <g filter="url(#${c.grad}-glow)">
            <path d="M 18 30 L 28 16 Q 82 10 137 16 L 147 30 L 137 44 Q 82 50 28 44 Z" fill="url(#${c.grad})"/>
            <path d="M 21 30 L 30 18 Q 82 12 135 18 L 144 30 L 135 42 Q 82 48 30 42 Z" fill="url(#${c.grad}-bg)" stroke="url(#${c.grad})" stroke-width="0.8"/>
            <path d="M 21 30 L 30 18 Q 82 12 135 18 L 144 30 Q 82 24 21 30 Z" fill="url(#${c.grad}-sheen)"/>
            <circle cx="26" cy="30" r="1.5" fill="${c.gem}" stroke="#ffffff" stroke-width="0.4"/>
            <circle cx="139" cy="30" r="1.5" fill="${c.gem}" stroke="#ffffff" stroke-width="0.4"/>
        </g>
        <!-- Huy hiệu Ngôi Sao Đỉnh Đầu -->
        <g transform="translate(82, 14)" filter="url(#${c.grad}-glow)">
            <polygon points="0,-6 4,-2 0,2 -4,-2" fill="url(#${c.grad})" stroke="#ffffff" stroke-width="0.5"/>
            <circle cx="0" cy="-2" r="1.2" fill="${c.gem}"/>
        </g>
        <!-- Typography Danh Hiệu -->
        <text x="82" y="34.5" text-anchor="middle" font-family="'Baloo 2', 'Be Vietnam Pro', cursive, sans-serif" font-weight="800" font-size="${c.fontSize}" 
              letter-spacing="${c.letterSpacing}" stroke="${c.bg[1]}" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill" fill="url(#${c.grad}-text)">${mainTitle}</text>
    </svg>
    `;
}

/**
 * Render Danh Hiệu Tối Cao eSports: APEX Vương Giả (Top 1)
 * Thiết kế phong cách 3D Imperial Grand Master, Cánh Rồng Vàng ôm cong hướng lên (Upward Swept Wings)
 * Cartouche ngọc Ruby 24K viền nổi, vương miện hoàng gia và typography Baloo 2 quyền lực rực rỡ.
 */
function renderApexVuongGiaSvg() {
    return `
    <svg class="modern-title-badge-svg badge-top1" viewBox="0 0 300 86" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');
        </style>
        <linearGradient id="p1-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="15%" stop-color="#fef08a"/>
          <stop offset="35%" stop-color="#facc15"/>
          <stop offset="60%" stop-color="#eab308"/>
          <stop offset="85%" stop-color="#ca8a04"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
        <linearGradient id="p1-ruby" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6b0e0e"/>
          <stop offset="40%" stop-color="#3c0606"/>
          <stop offset="100%" stop-color="#140101"/>
        </linearGradient>
        <linearGradient id="p1-text" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#fef08a"/>
          <stop offset="65%" stop-color="#facc15"/>
          <stop offset="100%" stop-color="#eab308"/>
        </linearGradient>
        <linearGradient id="p1-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
          <stop offset="45%" stop-color="#ffffff" stop-opacity="0.1"/>
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
        <filter id="p1-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.75"/>
        </filter>
      </defs>

      <!-- 1. Cặp Cánh Rồng Vàng Ôm Hướng Lên (Upward Swept Royal Wings) -->
      <g class="wings-upward" filter="url(#p1-glow)">
        <path d="M 46 54 C 30 48, 16 32, 22 14 C 30 26, 38 34, 52 38 C 40 30, 32 18, 42 6 C 46 18, 56 26, 70 32 Z" 
              fill="url(#p1-gold)"/>
        <polygon points="22,14 34,26 24,30" fill="#ffffff" opacity="0.85"/>
        <path d="M 254 54 C 270 48, 284 32, 278 14 C 270 26, 262 34, 248 38 C 260 30, 268 18, 258 6 C 254 18, 244 26, 230 32 Z" 
              fill="url(#p1-gold)"/>
        <polygon points="278,14 266,26 276,30" fill="#ffffff" opacity="0.85"/>
      </g>

      <!-- 2. Khung Bảng Hoàng Gia 24K Ruby Cartouche -->
      <g class="cartouche-base" filter="url(#p1-glow)">
        <path d="M 30 50 L 46 26 Q 150 17 254 26 L 270 50 L 254 74 Q 150 83 46 74 Z" 
              fill="url(#p1-gold)"/>
        <path d="M 34 50 L 49 29 Q 150 20 251 29 L 266 50 L 251 71 Q 150 80 49 71 Z" 
              fill="url(#p1-ruby)" stroke="url(#p1-gold)" stroke-width="1.2"/>
        <path d="M 40 50 L 54 32 Q 150 24 246 32 L 260 50 L 246 68 Q 150 76 54 68 Z" 
              fill="none" stroke="#fef08a" stroke-width="1.2" stroke-dasharray="10 3" opacity="0.9"/>
        <path d="M 34 50 L 49 29 Q 150 20 251 29 L 266 50 Q 150 42 34 50 Z" 
              fill="url(#p1-sheen)"/>
        <circle cx="48" cy="50" r="2.8" fill="#fef08a" stroke="#78350f" stroke-width="0.8"/>
        <circle cx="252" cy="50" r="2.8" fill="#fef08a" stroke="#78350f" stroke-width="0.8"/>
        <text x="64" y="55" font-size="13" fill="#facc15" text-anchor="middle">★</text>
        <text x="236" y="55" font-size="13" fill="#facc15" text-anchor="middle">★</text>
      </g>

      <!-- 3. Vương Miện Hoàng Đế Đỉnh Đầu (Imperial Crown & Ruby Gem) -->
      <g class="crown" transform="translate(150, 19)" filter="url(#p1-glow)">
        <path d="M -24 -2 L -16 -16 L 0 -9 L 16 -16 L 24 -2 L 14 5 L -14 5 Z" fill="url(#p1-gold)" stroke="#ffffff" stroke-width="0.8"/>
        <polygon points="0,-14 6,-7 0,0 -6,-7" fill="#dc2626" stroke="#ffffff" stroke-width="0.6"/>
        <circle cx="-14" cy="-4" r="2" fill="#fff"/>
        <circle cx="14" cy="-4" r="2" fill="#fff"/>
      </g>

      <!-- 4. Typography Hoàng Gia: APEX Vương Giả -->
      <text x="150" y="58" text-anchor="middle" font-family="'Baloo 2', 'Be Vietnam Pro', cursive, sans-serif" font-weight="800" font-size="23.5" 
            letter-spacing="0.6" stroke="#120101" stroke-width="5.5" stroke-linejoin="round" paint-order="stroke fill" fill="url(#p1-text)">APEX Vương Giả</text>
    </svg>`;
}

/**
 * Render Danh Hiệu Tối Cao eSports: Bá Chủ Kiêu Hùng (Top 2 - Yudai)
 * Thiết kế phong cách 3D Cyber-Knight Frost Diamond, Cánh Băng ôm cong hướng lên (Upward Swept Wings)
 * Cartouche đen huyền Obsidian đính ngọc Lam Bảo Sapphire & Song Kiếm thần phong.
 */
function renderBaChuKieuHungSvg() {
    return `
    <svg class="modern-title-badge-svg badge-top2" viewBox="0 0 280 82" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');
        </style>
        <linearGradient id="p2-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#bae6fd"/>
          <stop offset="50%" stop-color="#38bdf8"/>
          <stop offset="75%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#075985"/>
        </linearGradient>
        <linearGradient id="p2-gold-wire" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
        <linearGradient id="p2-text" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#e0f2fe"/>
          <stop offset="70%" stop-color="#7dd3fc"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="p2-dark-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#091b30"/>
          <stop offset="50%" stop-color="#040c17"/>
          <stop offset="100%" stop-color="#010408"/>
        </linearGradient>
        <linearGradient id="p2-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
          <stop offset="45%" stop-color="#ffffff" stop-opacity="0.08"/>
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
        <filter id="p2-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#38bdf8" flood-opacity="0.7"/>
        </filter>
      </defs>

      <!-- 1. Đôi cánh Phượng Hoàng Băng ôm cong hướng lên -->
      <g class="wings-upward" filter="url(#p2-glow)">
        <path d="M 40 50 C 26 44, 14 30, 20 14 C 26 24, 34 32, 46 36 C 36 28, 30 18, 38 8 C 42 18, 50 26, 62 32 Z" 
              fill="url(#p2-gold)"/>
        <polygon points="20,14 30,24 22,28" fill="#ffffff" opacity="0.85"/>
        <path d="M 240 50 C 254 44, 266 30, 260 14 C 254 24, 246 32, 234 36 C 244 28, 250 18, 242 8 C 238 18, 230 26, 218 32 Z" 
              fill="url(#p2-gold)"/>
        <polygon points="260,14 250,24 258,28" fill="#ffffff" opacity="0.85"/>
      </g>

      <!-- 2. Khung Tấm Bảng Cartouche Hoàng Gia -->
      <g class="cartouche-base" filter="url(#p2-glow)">
        <path d="M 26 48 L 42 26 Q 140 18 238 26 L 254 48 L 238 70 Q 140 78 42 70 Z" 
              fill="url(#p2-gold)"/>
        <path d="M 30 48 L 45 29 Q 140 21 235 29 L 250 48 L 235 67 Q 140 75 45 67 Z" 
              fill="url(#p2-dark-bg)" stroke="#38bdf8" stroke-width="1.2"/>
        <path d="M 36 48 L 49 32 Q 140 25 231 32 L 244 48 L 231 64 Q 140 71 49 64 Z" 
              fill="none" stroke="url(#p2-gold-wire)" stroke-width="1" opacity="0.85"/>
        <path d="M 30 48 L 45 29 Q 140 21 235 29 L 250 48 Q 140 40 30 48 Z" 
              fill="url(#p2-sheen)"/>
        <circle cx="44" cy="48" r="2.8" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8"/>
        <circle cx="236" cy="48" r="2.8" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8"/>
      </g>

      <!-- 3. Huy hiệu Đỉnh Đầu (Ngôi Sao Băng & Song Kiếm) -->
      <g class="crest" transform="translate(140, 20)" filter="url(#p2-glow)">
        <line x1="-22" y1="-5" x2="22" y2="8" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
        <line x1="22" y1="-5" x2="-22" y2="8" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
        <polygon points="0,-12 8,-4 0,3 -8,-4" fill="url(#p2-gold)" stroke="#ffffff" stroke-width="0.8"/>
        <circle cx="0" cy="-4" r="2.5" fill="#38bdf8"/>
      </g>

      <!-- 4. Typography: Bá Chủ Kiêu Hùng -->
      <text x="140" y="55" text-anchor="middle" font-family="'Baloo 2', 'Be Vietnam Pro', cursive, sans-serif" font-weight="800" font-size="21.5" 
            letter-spacing="0.5" stroke="#01060e" stroke-width="5" stroke-linejoin="round" paint-order="stroke fill" fill="url(#p2-text)">Bá Chủ Kiêu Hùng</text>
    </svg>`;
}

/**
 * Render Danh Hiệu Tối Cao eSports: Chiến Lang Thần Tam (Top 3 - ÂyYa)
 * Thiết kế phong cách 3D Solar Bronze-Gold, Cánh Lửa Đồng ôm cong hướng lên (Upward Swept Wings)
 * Cartouche Hổ Phách viền kim loại 3D đính ngọc Hồng Ngọc & Song Kiếm Lang Vương.
 */
function renderChienLangThanTamSvg() {
    return `
    <svg class="modern-title-badge-svg badge-top3" viewBox="0 0 280 82" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');
        </style>
        <linearGradient id="p3-bronze" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="20%" stop-color="#fed7aa"/>
          <stop offset="45%" stop-color="#fb923c"/>
          <stop offset="70%" stop-color="#ea580c"/>
          <stop offset="85%" stop-color="#c2410c"/>
          <stop offset="100%" stop-color="#7c2d12"/>
        </linearGradient>
        <linearGradient id="p3-text" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#ffedd5"/>
          <stop offset="65%" stop-color="#fdba74"/>
          <stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
        <linearGradient id="p3-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
        <linearGradient id="p3-dark-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a1005"/>
          <stop offset="50%" stop-color="#140602"/>
          <stop offset="100%" stop-color="#070201"/>
        </linearGradient>
        <linearGradient id="p3-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
          <stop offset="45%" stop-color="#ffffff" stop-opacity="0.08"/>
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
        <filter id="p3-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#f97316" flood-opacity="0.7"/>
        </filter>
      </defs>

      <!-- 1. Cặp Cánh Lửa Đồng Ôm Cong Hướng Lên -->
      <g class="wings-upward" filter="url(#p3-glow)">
        <path d="M 40 50 C 26 44, 14 30, 20 14 C 26 24, 34 32, 46 36 C 36 28, 30 18, 38 8 C 42 18, 50 26, 62 32 Z" 
              fill="url(#p3-bronze)"/>
        <polygon points="20,14 30,24 22,28" fill="#ffffff" opacity="0.85"/>
        <path d="M 240 50 C 254 44, 266 30, 260 14 C 254 24, 246 32, 234 36 C 244 28, 250 18, 242 8 C 238 18, 230 26, 218 32 Z" 
              fill="url(#p3-bronze)"/>
        <polygon points="260,14 250,24 258,28" fill="#ffffff" opacity="0.85"/>
      </g>

      <!-- 2. Khung Tấm Bảng Cartouche Đồng Hoàng Kim -->
      <g class="cartouche-base" filter="url(#p3-glow)">
        <path d="M 26 48 L 42 26 Q 140 18 238 26 L 254 48 L 238 70 Q 140 78 42 70 Z" 
              fill="url(#p3-bronze)"/>
        <path d="M 30 48 L 45 29 Q 140 21 235 29 L 250 48 L 235 67 Q 140 75 45 67 Z" 
              fill="url(#p3-dark-bg)" stroke="#fb923c" stroke-width="1.2"/>
        <path d="M 36 48 L 49 32 Q 140 25 231 32 L 244 48 L 231 64 Q 140 71 49 64 Z" 
              fill="none" stroke="url(#p3-accent)" stroke-width="1" opacity="0.85"/>
        <path d="M 30 48 L 45 29 Q 140 21 235 29 L 250 48 Q 140 40 30 48 Z" 
              fill="url(#p3-sheen)"/>
        <circle cx="44" cy="48" r="2.8" fill="#fb923c" stroke="#ffffff" stroke-width="0.8"/>
        <circle cx="236" cy="48" r="2.8" fill="#fb923c" stroke="#ffffff" stroke-width="0.8"/>
      </g>

      <!-- 3. Huy hiệu Đỉnh Đầu (Song Kiếm & Hổ Phách) -->
      <g class="crest" transform="translate(140, 20)" filter="url(#p3-glow)">
        <line x1="-22" y1="-5" x2="22" y2="8" stroke="#fb923c" stroke-width="2" stroke-linecap="round"/>
        <line x1="22" y1="-5" x2="-22" y2="8" stroke="#fb923c" stroke-width="2" stroke-linecap="round"/>
        <polygon points="0,-12 8,-4 0,3 -8,-4" fill="url(#p3-bronze)" stroke="#ffffff" stroke-width="0.8"/>
        <circle cx="0" cy="-4" r="2.5" fill="#ea580c"/>
      </g>

      <!-- 4. Typography: Chiến Lang Thần Tam -->
      <text x="140" y="55" text-anchor="middle" font-family="'Baloo 2', 'Be Vietnam Pro', cursive, sans-serif" font-weight="800" font-size="20.5" 
            letter-spacing="0.5" stroke="#120401" stroke-width="5" stroke-linejoin="round" paint-order="stroke fill" fill="url(#p3-text)">Chiến Lang Thần Tam</text>
    </svg>`;
}

/**
 * Hiển thị phân khu Vinh Danh Tối Cao Top 3 (Tam Đại Đỉnh Phong Bang Hội)
 * Nằm trên khu vực Top 5, vinh danh 3 thủ lĩnh tối cao với thẻ eSports hiện đại, góc viền công nghệ & hào quang rực rỡ
 */
function renderSupremeTop3() {
    const container = document.getElementById('supreme-cards-container');
    if (!container) return;

    const sortedForPodium = [...members].sort((a, b) => (a.stt || 0) - (b.stt || 0));
    const top1 = sortedForPodium[0];
    const top2 = sortedForPodium[1];
    const top3 = sortedForPodium[2];

    if (!top1 || !top2 || !top3) return;

    container.innerHTML = `
        <!-- TOP 2: Á QUÂN (BÊN TRÁI TOP 1) -->
        <div class="supreme-champ-card rank-2-supreme animate-fade-in" onclick="openFormationModal(${top2.stt})">
            <span class="card-corner corner-tl"></span>
            <span class="card-corner corner-tr"></span>
            <span class="card-corner corner-bl"></span>
            <span class="card-corner corner-br"></span>

            <div class="supreme-floating-crest">
                <i class="fa-solid fa-shield-halved"></i>
            </div>
            
            <div class="supreme-title-wrap">
                ${renderBaChuKieuHungSvg()}
            </div>

            <div class="supreme-avatar-container">
                <div class="supreme-avatar-ring"></div>
                <img src="images/logo.png" alt="${escapeHtml(top2.name)}" class="supreme-avatar-core">
            </div>

            <h3 class="supreme-member-name" title="${escapeHtml(top2.name)}">${escapeHtml(top2.name)}</h3>
            
            <div class="supreme-power-badge">
                <i class="fa-solid fa-bolt"></i> ${escapeHtml(top2.power)}
            </div>

            <div class="supreme-milestones">
                <span class="supreme-milestone-pill pill-stage"><i class="fa-solid fa-mountain"></i> Ải ${top2.stage || '16.883'}</span>
                <span class="supreme-milestone-pill pill-tower"><i class="fa-solid fa-chess-rook"></i> Tháp ${top2.tower || '4.527'}</span>
            </div>

            <div class="supreme-roles-row">
                <span class="member-title-badge ${TITLE_CLASSES[top2.title] || 'title-default'}">${escapeHtml(top2.title)}</span>
                <span class="member-note-badge ${NOTE_CLASSES[top2.note] || 'note-default'}">${escapeHtml(top2.note)}</span>
            </div>

            <button class="supreme-action-btn" onclick="event.stopPropagation(); openFormationModal(${top2.stt})">
                <i class="fa-solid fa-paw"></i> Xem Đội Hình
            </button>
        </div>

        <!-- TOP 1: QUÁN QUÂN CHÍ TÔN (CHÍNH GIỮA, NỔI BẬT NHẤT) -->
        <div class="supreme-champ-card rank-1-supreme animate-fade-in" onclick="openFormationModal(${top1.stt})">
            <span class="card-corner corner-tl"></span>
            <span class="card-corner corner-tr"></span>
            <span class="card-corner corner-bl"></span>
            <span class="card-corner corner-br"></span>

            <div class="supreme-floating-crest">
                <i class="fa-solid fa-crown"></i>
            </div>

            <div class="supreme-title-wrap">
                ${renderApexVuongGiaSvg()}
            </div>

            <div class="supreme-avatar-container">
                <div class="supreme-avatar-ring"></div>
                <img src="images/logo.png" alt="${escapeHtml(top1.name)}" class="supreme-avatar-core">
            </div>

            <h3 class="supreme-member-name" title="${escapeHtml(top1.name)}">${escapeHtml(top1.name)}</h3>
            
            <div class="supreme-power-badge">
                <i class="fa-solid fa-fire-flame-curved"></i> ${escapeHtml(top1.power)}
            </div>

            <div class="supreme-milestones">
                <span class="supreme-milestone-pill pill-stage"><i class="fa-solid fa-mountain"></i> Ải ${top1.stage || '17.830'}</span>
                <span class="supreme-milestone-pill pill-tower"><i class="fa-solid fa-chess-rook"></i> Tháp ${top1.tower || '4.794'}</span>
            </div>

            <div class="supreme-roles-row">
                <span class="member-title-badge ${TITLE_CLASSES[top1.title] || 'title-default'}">${escapeHtml(top1.title)}</span>
                <span class="member-note-badge ${NOTE_CLASSES[top1.note] || 'note-default'}">${escapeHtml(top1.note)}</span>
            </div>

            <button class="supreme-action-btn" onclick="event.stopPropagation(); openFormationModal(${top1.stt})">
                <i class="fa-solid fa-paw"></i> Chi Tiết Đội Hình
            </button>
        </div>

        <!-- TOP 3: QUÝ QUÂN (BÊN PHẢI TOP 1) -->
        <div class="supreme-champ-card rank-3-supreme animate-fade-in" onclick="openFormationModal(${top3.stt})">
            <span class="card-corner corner-tl"></span>
            <span class="card-corner corner-tr"></span>
            <span class="card-corner corner-bl"></span>
            <span class="card-corner corner-br"></span>

            <div class="supreme-floating-crest">
                <i class="fa-solid fa-award"></i>
            </div>

            <div class="supreme-title-wrap">
                ${renderChienLangThanTamSvg()}
            </div>

            <div class="supreme-avatar-container">
                <div class="supreme-avatar-ring"></div>
                <img src="images/logo.png" alt="${escapeHtml(top3.name)}" class="supreme-avatar-core">
            </div>

            <h3 class="supreme-member-name" title="${escapeHtml(top3.name)}">${escapeHtml(top3.name)}</h3>
            
            <div class="supreme-power-badge">
                <i class="fa-solid fa-award"></i> ${escapeHtml(top3.power)}
            </div>

            <div class="supreme-milestones">
                <span class="supreme-milestone-pill pill-stage"><i class="fa-solid fa-mountain"></i> Ải ${top3.stage || '16.487'}</span>
                <span class="supreme-milestone-pill pill-tower"><i class="fa-solid fa-chess-rook"></i> Tháp ${top3.tower || '4.487'}</span>
            </div>

            <div class="supreme-roles-row">
                <span class="member-title-badge ${TITLE_CLASSES[top3.title] || 'title-default'}">${escapeHtml(top3.title)}</span>
                <span class="member-note-badge ${NOTE_CLASSES[top3.note] || 'note-default'}">${escapeHtml(top3.note)}</span>
            </div>

            <button class="supreme-action-btn" onclick="event.stopPropagation(); openFormationModal(${top3.stt})">
                <i class="fa-solid fa-paw"></i> Xem Đội Hình
            </button>
        </div>
    `;
}

/**
 * Hiển thị bục vinh danh Top 5 (Podium Ngũ Đại Chiến Tướng)
 * Thứ tự trực quan từ trái qua phải: Top 4 (Bạch Ngân) | Top 2 (Hắc Kim) | Top 1 (Bạch Kim) | Top 3 (Hoàng Kim) | Top 5 (Xích Đồng)
 */
function renderPodium() {
    renderSupremeTop3();
    const podiumContainer = document.getElementById('top-podium-container');
    if (!podiumContainer) return;

    const sortedForPodium = [...members].sort((a, b) => (a.stt || 0) - (b.stt || 0));
    const top1 = sortedForPodium[0]; // Bạch Kim
    const top2 = sortedForPodium[1]; // Hắc Kim
    const top3 = sortedForPodium[2]; // Hoàng Kim
    const top4 = sortedForPodium[3]; // Bạch Ngân
    const top5 = sortedForPodium[4]; // Xích Đồng

    if (!top1) {
        podiumContainer.innerHTML = '<div class="empty-podium">Chưa có dữ liệu thành viên</div>';
        return;
    }

    podiumContainer.innerHTML = `
        <!-- TOP 4: BẠCH NGÂN (ORDER 1, BÊN TRÁI NGOÀI CÙNG) -->
        ${top4 ? `
        <div class="podium-card rank-4 animate-fade-in" onclick="openFormationModal(${top4.stt})">
            <div class="podium-pillar">
                <div class="podium-avatar-wrapper wrapper-silver">
                    <div class="podium-crown-badge silver">
                        <i class="fa-solid fa-medal"></i>
                    </div>
                    <div class="podium-avatar silver-glow wolf-podium-silver">
                        <div class="wolf-aura-burst aura-silver"></div>
                        <img src="images/logo.png" alt="Bạch Ngân Lang Tướng" class="podium-avatar-img wolf-avatar-emblem wolf-img-silver">
                    </div>
                </div>
                <div class="podium-rank-tag tag-silver"><i class="fa-solid fa-medal"></i> TOP 4</div>
                
                <!-- BỐ CỤC DANH HIỆU INGAME: BẠCH NGÂN LANG TƯỚNG -->
                <div class="ingame-title-plaque">
                    ${renderIngameTitleSvg('silver', 'Bạch Ngân Lang Tướng')}
                </div>

                <div class="podium-info">
                    <div class="podium-stage-tower">
                        <span class="stage-tag"><i class="fa-solid fa-mountain"></i> Ải ${top4.stage || '15.037'}</span>
                        <span class="tower-tag"><i class="fa-solid fa-chess-rook"></i> Tháp ${top4.tower || '3.567'}</span>
                    </div>
                    <h3 class="podium-name" title="${escapeHtml(top4.name)}">${escapeHtml(top4.name)}</h3>
                    <div class="podium-power"><i class="fa-solid fa-bolt"></i> ${escapeHtml(top4.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top4.title] || 'title-default'}">${escapeHtml(top4.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top4.note] || 'note-default'}">${escapeHtml(top4.note)}</span>
                    </div>
                </div>
                <button class="podium-view-btn" onclick="event.stopPropagation(); openFormationModal(${top4.stt})">
                    <i class="fa-solid fa-paw"></i> Xem Đội Hình
                </button>
            </div>
        </div>
        ` : ''}

        <!-- TOP 2: HẮC KIM (ORDER 2, BÊN TRÁI TOP 1) -->
        ${top2 ? `
        <div class="podium-card rank-2 animate-fade-in" onclick="openFormationModal(${top2.stt})">
            <div class="podium-pillar">
                <div class="podium-avatar-wrapper wrapper-darkgold">
                    <div class="podium-crown-badge darkgold">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div class="podium-avatar darkgold-glow wolf-podium-darkgold">
                        <div class="wolf-aura-burst aura-darkgold"></div>
                        <img src="images/logo.png" alt="Hắc Đế Thượng Tôn" class="podium-avatar-img wolf-avatar-emblem wolf-img-darkgold">
                    </div>
                </div>
                <div class="podium-rank-tag tag-darkgold"><i class="fa-solid fa-shield-halved"></i> TOP 2</div>
                
                <!-- BỐ CỤC DANH HIỆU INGAME: HẮC ĐẾ THƯỢNG TÔN -->
                <div class="ingame-title-plaque">
                    ${renderIngameTitleSvg('darkgold', 'Hắc Đế Thượng Tôn')}
                </div>

                <div class="podium-info">
                    <div class="podium-stage-tower">
                        <span class="stage-tag"><i class="fa-solid fa-mountain"></i> Ải ${top2.stage || '16.883'}</span>
                        <span class="tower-tag"><i class="fa-solid fa-chess-rook"></i> Tháp ${top2.tower || '4.527'}</span>
                    </div>
                    <h3 class="podium-name" title="${escapeHtml(top2.name)}">${escapeHtml(top2.name)}</h3>
                    <div class="podium-power"><i class="fa-solid fa-bolt"></i> ${escapeHtml(top2.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top2.title] || 'title-default'}">${escapeHtml(top2.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top2.note] || 'note-default'}">${escapeHtml(top2.note)}</span>
                    </div>
                </div>
                <button class="podium-view-btn" onclick="event.stopPropagation(); openFormationModal(${top2.stt})">
                    <i class="fa-solid fa-paw"></i> Xem Đội Hình
                </button>
            </div>
        </div>
        ` : ''}

        <!-- TOP 1: BẠCH KIM (ORDER 3, CHÍNH GIỮA, CAO NHẤT) -->
        <div class="podium-card rank-1 animate-fade-in" onclick="openFormationModal(${top1.stt})">
            <div class="podium-dragon-crest">
                <i class="fa-solid fa-crown platinum-crown"></i>
            </div>
            <div class="podium-pillar platinum-pillar">
                <div class="podium-avatar-wrapper wrapper-platinum">
                    <div class="podium-crown-badge platinum">
                        <i class="fa-solid fa-crown"></i>
                    </div>
                    <div class="podium-avatar platinum-glow wolf-podium-platinum">
                        <div class="wolf-aura-burst aura-platinum"></div>
                        <img src="images/logo.png" alt="Bạch Thánh Kim Tôn" class="podium-avatar-img wolf-avatar-emblem wolf-img-platinum">
                    </div>
                </div>
                <div class="podium-rank-tag tag-platinum"><i class="fa-solid fa-crown"></i> TOP 1</div>
                
                <!-- BỐ CỤC DANH HIỆU INGAME: BẠCH THÁNH KIM TÔN -->
                <div class="ingame-title-plaque">
                    ${renderIngameTitleSvg('platinum', 'Bạch Thánh Kim Tôn')}
                </div>

                <div class="podium-info">
                    <div class="podium-stage-tower">
                        <span class="stage-tag"><i class="fa-solid fa-mountain"></i> Ải ${top1.stage || '17.830'}</span>
                        <span class="tower-tag"><i class="fa-solid fa-chess-rook"></i> Tháp ${top1.tower || '4.794'}</span>
                    </div>
                    <h3 class="podium-name main-champion" title="${escapeHtml(top1.name)}">${escapeHtml(top1.name)}</h3>
                    <div class="podium-power platinum-power"><i class="fa-solid fa-fire-flame-curved"></i> ${escapeHtml(top1.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top1.title] || 'title-default'}">${escapeHtml(top1.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top1.note] || 'note-default'}">${escapeHtml(top1.note)}</span>
                    </div>
                </div>
                <button class="podium-view-btn platinum-btn" onclick="event.stopPropagation(); openFormationModal(${top1.stt})">
                    <i class="fa-solid fa-paw"></i> Chi Tiết Đội Hình
                </button>
            </div>
        </div>

        <!-- TOP 3: HOÀNG KIM (ORDER 4, BÊN PHẢI TOP 1) -->
        ${top3 ? `
        <div class="podium-card rank-3 animate-fade-in" onclick="openFormationModal(${top3.stt})">
            <div class="podium-pillar">
                <div class="podium-avatar-wrapper wrapper-gold">
                    <div class="podium-crown-badge gold">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div class="podium-avatar gold-glow wolf-podium-gold">
                        <div class="wolf-aura-burst aura-gold"></div>
                        <img src="images/logo.png" alt="Hoàng Kim Lang Tướng" class="podium-avatar-img wolf-avatar-emblem wolf-img-gold">
                    </div>
                </div>
                <div class="podium-rank-tag tag-gold"><i class="fa-solid fa-award"></i> TOP 3</div>
                
                <!-- BỐ CỤC DANH HIỆU INGAME: HOÀNG KIM LANG TƯỚNG -->
                <div class="ingame-title-plaque">
                    ${renderIngameTitleSvg('gold', 'Hoàng Kim Lang Tướng')}
                </div>

                <div class="podium-info">
                    <div class="podium-stage-tower">
                        <span class="stage-tag"><i class="fa-solid fa-mountain"></i> Ải ${top3.stage || '16.487'}</span>
                        <span class="tower-tag"><i class="fa-solid fa-chess-rook"></i> Tháp ${top3.tower || '4.487'}</span>
                    </div>
                    <h3 class="podium-name" title="${escapeHtml(top3.name)}">${escapeHtml(top3.name)}</h3>
                    <div class="podium-power"><i class="fa-solid fa-bolt"></i> ${escapeHtml(top3.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top3.title] || 'title-default'}">${escapeHtml(top3.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top3.note] || 'note-default'}">${escapeHtml(top3.note)}</span>
                    </div>
                </div>
                <button class="podium-view-btn" onclick="event.stopPropagation(); openFormationModal(${top3.stt})">
                    <i class="fa-solid fa-paw"></i> Xem Đội Hình
                </button>
            </div>
        </div>
        ` : ''}

        <!-- TOP 5: XÍCH ĐỒNG (ORDER 5, BÊN PHẢI NGOÀI CÙNG) -->
        ${top5 ? `
        <div class="podium-card rank-5 animate-fade-in" onclick="openFormationModal(${top5.stt})">
            <div class="podium-pillar">
                <div class="podium-avatar-wrapper wrapper-bronze">
                    <div class="podium-crown-badge bronze">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="podium-avatar bronze-glow wolf-podium-bronze">
                        <div class="wolf-aura-burst aura-bronze"></div>
                        <img src="images/logo.png" alt="Xích Đồng Lang Tướng" class="podium-avatar-img wolf-avatar-emblem wolf-img-bronze">
                    </div>
                </div>
                <div class="podium-rank-tag tag-bronze"><i class="fa-solid fa-star"></i> TOP 5</div>
                
                <!-- BỐ CỤC DANH HIỆU INGAME: XÍCH ĐỒNG LANG TƯỚNG -->
                <div class="ingame-title-plaque">
                    ${renderIngameTitleSvg('bronze', 'Xích Đồng Lang Tướng')}
                </div>

                <div class="podium-info">
                    <div class="podium-stage-tower">
                        <span class="stage-tag"><i class="fa-solid fa-mountain"></i> Ải ${top5.stage || '15.136'}</span>
                        <span class="tower-tag"><i class="fa-solid fa-chess-rook"></i> Tháp ${top5.tower || '3.707'}</span>
                    </div>
                    <h3 class="podium-name" title="${escapeHtml(top5.name)}">${escapeHtml(top5.name)}</h3>
                    <div class="podium-power"><i class="fa-solid fa-bolt"></i> ${escapeHtml(top5.power)}</div>
                    <div class="podium-badges">
                        <span class="member-title-badge ${TITLE_CLASSES[top5.title] || 'title-default'}">${escapeHtml(top5.title)}</span>
                        <span class="member-note-badge ${NOTE_CLASSES[top5.note] || 'note-default'}">${escapeHtml(top5.note)}</span>
                    </div>
                </div>
                <button class="podium-view-btn" onclick="event.stopPropagation(); openFormationModal(${top5.stt})">
                    <i class="fa-solid fa-paw"></i> Xem Đội Hình
                </button>
            </div>
        </div>
        ` : ''}
    `;
}

/**
 * Hiển thị các thẻ tên Thập Đại Tinh Anh (Top 6 - Top 15)
 */
function renderEliteCards() {
    const row1Container = document.getElementById('elite-cards-row-1');
    const searchResultsWrap = document.getElementById('elite-search-results-wrap');
    const filteredGrid = document.getElementById('elite-cards-filtered');
    const emptyState = document.getElementById('table-empty-state');

    if (!row1Container) return;

    // Kiểm tra xem người dùng có đang tìm kiếm hoặc lọc không
    const searchVal = (document.getElementById('search-input')?.value || '').trim();
    const titleFilter = document.getElementById('filter-title')?.value || 'all';
    const noteFilter = document.getElementById('filter-note')?.value || 'all';
    const powerTierFilter = document.getElementById('filter-power-tier')?.value || 'all';
    const isFiltered = searchVal !== '' || titleFilter !== 'all' || noteFilter !== 'all' || powerTierFilter !== 'all' || currentSort.column !== 'stt' || currentSort.direction !== 'asc';

    if (isFiltered) {
        const fixedContainer = document.getElementById('container-row-1');
        if (fixedContainer) fixedContainer.style.display = 'none';
        if (searchResultsWrap) searchResultsWrap.style.display = 'block';

        if (filteredMembers.length === 0) {
            if (filteredGrid) filteredGrid.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';
        if (filteredGrid) filteredGrid.innerHTML = filteredMembers.map(m => generateEliteCardHtml(m)).join('');
    } else {
        const fixedContainer = document.getElementById('container-row-1');
        if (fixedContainer) fixedContainer.style.display = 'block';
        if (searchResultsWrap) searchResultsWrap.style.display = 'none';
        if (emptyState) emptyState.style.display = 'none';

        const sortedTop15 = [...members].filter(m => (Number(m.stt) || 999) <= 15).sort((a, b) => (a.stt || 0) - (b.stt || 0));
        const eliteMembers = sortedTop15.filter(m => m.stt >= 6 && m.stt <= 15);

        row1Container.innerHTML = eliteMembers.map(m => generateEliteCardHtml(m)).join('');
    }
}

/**
 * Tạo HTML cho 1 thẻ tướng lĩnh tinh anh (Elite Name Card)
 */
function generateEliteCardHtml(m) {
    let shieldClass = 'rank-shield-silver';
    let shieldIcon = '<i class="fa-solid fa-shield"></i>';
    if (m.stt <= 8) {
        shieldClass = 'rank-shield-diamond';
        shieldIcon = '<i class="fa-solid fa-crown"></i>';
    } else if (m.stt <= 10) {
        shieldClass = 'rank-shield-gold';
        shieldIcon = '<i class="fa-solid fa-star"></i>';
    } else if (m.stt <= 15) {
        shieldClass = 'rank-shield-silver';
        shieldIcon = '<i class="fa-solid fa-shield"></i>';
    } else if (m.stt <= 25) {
        shieldClass = 'rank-shield-bronze';
        shieldIcon = '<i class="fa-solid fa-shield-halved"></i>';
    } else {
        shieldClass = 'rank-shield-steel';
        shieldIcon = '<i class="fa-solid fa-shield-cat"></i>';
    }

    const titleClass = TITLE_CLASSES[m.title] || 'title-default';
    const noteClass = NOTE_CLASSES[m.note] || 'note-default';
    const avatarImg = 'images/logo.png';
    const stageDisplay = m.stage || '14.500';
    const towerDisplay = m.tower || '3.200';
    const rankStr = m.stt < 10 ? '0' + m.stt : m.stt;

    return `
        <div class="elite-member-card" onclick="openFormationModal(${m.stt})">
            <span class="card-corner corner-tl"></span>
            <span class="card-corner corner-tr"></span>
            <span class="card-corner corner-bl"></span>
            <span class="card-corner corner-br"></span>

            <div class="elite-card-topbar">
                <span class="elite-rank-shield ${shieldClass}">
                    ${shieldIcon} #${rankStr}
                </span>
                <div class="elite-milestones-plate">
                    <span class="milestone-pill pill-stage" title="Vượt Ải"><i class="fa-solid fa-mountain"></i> ${stageDisplay}</span>
                    <span class="milestone-pill pill-tower" title="Leo Tháp"><i class="fa-solid fa-chess-rook"></i> ${towerDisplay}</span>
                </div>
            </div>

            <div class="elite-avatar-container">
                <div class="elite-avatar-ring">
                    <img src="${avatarImg}" alt="${escapeHtml(m.name)}" class="elite-avatar-img">
                </div>
            </div>

            <div class="elite-name-text" title="${escapeHtml(m.name)}">${escapeHtml(m.name)}</div>

            <div class="elite-power-card-box">
                <i class="fa-solid fa-bolt power-bolt-icon"></i>
                <span class="power-number-text">${escapeHtml(m.power)}</span>
            </div>

            <div class="elite-tags-row">
                <span class="tag-badge ${titleClass}">${escapeHtml(m.title)}</span>
                <span class="tag-badge ${noteClass}">${escapeHtml(m.note)}</span>
            </div>

            <button class="elite-action-btn" onclick="event.stopPropagation(); openFormationModal(${m.stt})">
                <i class="fa-solid fa-paw"></i> Xem Đội Hình
            </button>
        </div>
    `;
}

/**
 * Tìm kiếm & Lọc dữ liệu
 */
function applyFilterAndSort() {
    const isPublicPage = !document.querySelector('.admin-page-body');
    const searchVal = (document.getElementById('search-input')?.value || '').trim();
    const titleFilter = document.getElementById('filter-title')?.value || 'all';
    const noteFilter = document.getElementById('filter-note')?.value || 'all';
    const powerTierFilter = document.getElementById('filter-power-tier')?.value || 'all';

    // Trang công khai (index.html): CHỈ HIỂN THỊ TOP 15 CAO THỦ!
    const pool = isPublicPage ? members.filter(m => (Number(m.stt) || 999) <= 15) : members;

    filteredMembers = pool.filter(m => {
        // Tìm kiếm tên thành viên in-game
        if (searchVal) {
            const normalizedSearch = removeVietnameseTones(searchVal.toLowerCase());
            const normalizedName = removeVietnameseTones(m.name.toLowerCase());
            const normalizedTitle = removeVietnameseTones(m.title.toLowerCase());
            if (!normalizedName.includes(normalizedSearch) && 
                !normalizedTitle.includes(normalizedSearch)) {
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

        return true;
    });

    sortMembersData();
    currentPage = 1;
    renderEliteCards();
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
    renderEliteCards();
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
    pageItems.forEach((m, idx) => {
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

        let avatarBlock = '';
        if (rank === 1) {
            avatarBlock = `
                <div class="member-avatar avatar-rank-1" title="Top 1: Hoàng Kim Lang Vương">
                    <span class="rank-mini-crown gold"><i class="fa-solid fa-crown"></i></span>
                    <span class="wolf-avatar-icon wolf-icon-gold">🐺</span>
                    <span class="avatar-ring-glow ring-gold"></span>
                </div>
            `;
        } else if (rank === 2) {
            avatarBlock = `
                <div class="member-avatar avatar-rank-2" title="Top 2: Bạch Ngân Lang Tướng">
                    <span class="rank-mini-crown silver"><i class="fa-solid fa-shield-halved"></i></span>
                    <span class="wolf-avatar-icon wolf-icon-silver">🐺</span>
                    <span class="avatar-ring-glow ring-silver"></span>
                </div>
            `;
        } else if (rank === 3) {
            avatarBlock = `
                <div class="member-avatar avatar-rank-3" title="Top 3: Xích Đồng Lang Tướng">
                    <span class="rank-mini-crown bronze"><i class="fa-solid fa-award"></i></span>
                    <span class="wolf-avatar-icon wolf-icon-bronze">🐺</span>
                    <span class="avatar-ring-glow ring-bronze"></span>
                </div>
            `;
        } else {
            avatarBlock = `
                <div class="member-avatar avatar-normal">
                    <span class="wolf-avatar-icon">🐺</span>
                </div>
            `;
        }

        html += `
            <tr class="${rowClass}" style="--row-idx: ${idx};" data-stt="${m.stt}" onclick="handleRowClick(event, ${m.stt})">
                <!-- CỘT 1: STT -->
                <td class="col-stt">
                    <div class="stt-cell-content">
                        ${rankBadge}
                    </div>
                </td>

                <!-- CỘT 2: TÊN TƯỚNG IN-GAME -->
                <td class="col-name">
                    <div class="member-identity">
                        ${avatarBlock}
                        <div class="member-name-block">
                            <span class="member-name-text">${highlightMatch(m.name)}</span>
                            ${m.server ? `<span class="member-server-sub"><i class="fa-solid fa-server"></i> Server: ${escapeHtml(m.server)}</span>` : ''}
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
                            <i class="fa-solid fa-paw"></i>
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

    const isPublicTable = document.getElementById('rankings-table') && !document.querySelector('.admin-page-body');
    const totalPages = pageSize === 9999 ? 1 : Math.ceil(total / pageSize);
    const startIdx = (currentPage - 1) * pageSize + 1;
    const endIdx = pageSize === 9999 ? total : Math.min(currentPage * pageSize, total);

    if (paginationInfo) {
        if (isPublicTable) {
            paginationInfo.innerHTML = `Hiển thị <strong>${startIdx} - ${endIdx}</strong> trên <strong>${total}</strong> cao thủ bang hội (Top 15)`;
        } else {
            paginationInfo.innerHTML = `Hiển thị <strong>${startIdx} - ${endIdx}</strong> trên tổng <strong>${total}</strong> thành viên`;
        }
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
    const isPublicPage = !document.querySelector('.admin-page-body');
    const poolTotal = isPublicPage ? 15 : members.length;
    if (countBadge) {
        countBadge.textContent = `${filteredMembers.length}/${poolTotal}`;
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

    const btnSyncGoogleSheet = document.getElementById('btn-sync-google-sheet');
    if (btnSyncGoogleSheet) {
        btnSyncGoogleSheet.addEventListener('click', () => syncFromGoogleSheet({ silent: false }));
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
    const sample = '\uFEFFSTT,TÊN THÀNH VIÊN,LỰC CHIẾN,DANH HIỆU,GHI CHÚ\r\n1,SW ⚜️ Apex 🇻🇳,1.664T,Thần Vương,Bang Chủ\r\n2,SW • YUDAI,1.062T,Đại Tướng Quân,Bang phó\r\n3,SW ⚜️ Ây Ya 🇻🇳,680B,Thái Sư,Tinh anh\r\n';
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
 * ==========================================================================
 * TỰ ĐỘNG ĐỒNG BỘ TỪ GOOGLE SHEET / GOOGLE FORM
 * ==========================================================================
 */

/**
 * Chuyển đổi link Google Drive sang URL ảnh trực tiếp hiển thị được trên web
 */
function convertGoogleDriveUrl(url) {
    if (!url) return null;
    url = url.trim();
    if (!url) return null;

    // Nếu đã là link ảnh trực tiếp hoặc ảnh nội bộ
    if (url.startsWith('images/') || url.startsWith('data:image/')) return url;

    // Trích xuất File ID từ link Google Drive
    const match = url.match(/(?:id=|\/d\/|open\?id=)([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
        const fileId = match[1];
        // CDN Google UserContent thumbnail phân giải cao (w1600) hiển thị tức thì không cần đăng nhập
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
    }
    return url;
}

/**
 * Chuẩn hóa tên thành viên để so khớp thông minh (bỏ ký tự hoa lá, emoji, tiền tố SW...)
 */
function normalizeMemberName(str) {
    if (!str) return '';
    return str.toString()
        .toLowerCase()
        .replace(/^sw\s*[:•\-~_⚜️⭐️ღ\s]*/i, '')
        .replace(/[:•\-~_⚜️⭐️ღ🇻🇳]/g, '')
        .replace(/\s+/g, '')
        .trim();
}

/**
 * Tự động tìm vị trí các cột trong Google Sheet dựa trên từ khóa tiêu đề
 */
function mapGoogleSheetColumns(headerRow) {
    const colMap = { timestamp: -1, email: -1, name: -1, server: -1, power: -1, title: -1, note: -1, image: -1, stage: -1, tower: -1 };
    headerRow.forEach((val, idx) => {
        const text = (val || '').toString().toLowerCase().trim();
        if (text.includes('thời gian') || text.includes('timestamp')) colMap.timestamp = idx;
        else if (text.includes('email')) colMap.email = idx;
        else if (text.includes('tên') || text.includes('name') || text.includes('ingame')) colMap.name = idx;
        else if (text.includes('ải') || text.includes('ai') || text.includes('stage') || text.includes('màn')) colMap.stage = idx;
        else if (text.includes('tháp') || text.includes('thap') || text.includes('tower') || text.includes('tầng')) colMap.tower = idx;
        else if (text.includes('server')) colMap.server = idx;
        else if (text.includes('lực chiến') || text.includes('chiến lực') || text.includes('power')) colMap.power = idx;
        else if (text.includes('danh hiệu') || text.includes('title')) colMap.title = idx;
        else if (text.includes('chức vụ') || text.includes('role') || text.includes('ghi chú')) colMap.note = idx;
        else if (text.includes('ảnh') || text.includes('đội hình') || text.includes('screenshot') || text.includes('image')) colMap.image = idx;
    });
    return colMap;
}

/**
 * Đồng bộ dữ liệu mới nhất từ Google Sheet (kết nối trực tiếp từ Google Form)
 */
async function syncFromGoogleSheet(options = { silent: false }) {
    const syncBtns = document.querySelectorAll('.btn-sync-header, #btn-sync-google-sheet, #btn-sync-sheet-admin');
    syncBtns.forEach(btn => btn.classList.add('syncing'));

    try {
        const res = await fetch(GOOGLE_SHEET_API_URL);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

        const text = await res.text();
        const jsonStart = text.indexOf('{');
        const jsonEnd = text.lastIndexOf('}');
        if (jsonStart === -1 || jsonEnd === -1) throw new Error('Không đọc được dữ liệu JSON từ Google Sheet');

        const parsed = JSON.parse(text.substring(jsonStart, jsonEnd + 1));
        const rows = parsed.table?.rows || [];

        if (rows.length <= 1) {
            if (!options.silent) {
                showToast("Google Form hiện chưa có câu trả lời nào mới của thành viên!", "info");
            }
            return;
        }

        // Dòng đầu tiên là tiêu đề cột
        const headerRow = rows[0].c.map(cell => (cell ? cell.v : '') || '');
        const colMap = mapGoogleSheetColumns(headerRow);

        if (colMap.name === -1 || colMap.power === -1) {
            throw new Error("Không tìm thấy cột 'Tên' hoặc 'Lực chiến' trong Google Sheet!");
        }

        // Đọc tất cả các câu trả lời (từ dòng 2 trở đi)
        // Nếu một người gửi nhiều lần, lấy dòng gửi sau cùng (mới nhất)
        const latestSubmissions = new Map();
        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].c;
            if (!cells) continue;

            const name = cells[colMap.name]?.v?.toString().trim();
            if (!name) continue;

            const power = cells[colMap.power]?.v?.toString().trim() || '';
            const stage = colMap.stage !== -1 ? cells[colMap.stage]?.v?.toString().trim() : '';
            const tower = colMap.tower !== -1 ? cells[colMap.tower]?.v?.toString().trim() : '';
            const server = colMap.server !== -1 ? cells[colMap.server]?.v?.toString().trim() : '';
            const title = colMap.title !== -1 ? cells[colMap.title]?.v?.toString().trim() : '';
            const note = colMap.note !== -1 ? cells[colMap.note]?.v?.toString().trim() : '';
            const rawImg = colMap.image !== -1 ? cells[colMap.image]?.v?.toString().trim() : '';
            const image = convertGoogleDriveUrl(rawImg);

            const normKey = normalizeMemberName(name);
            latestSubmissions.set(normKey, {
                originalName: name,
                power,
                stage,
                tower,
                server,
                title,
                note,
                image
            });
        }

        if (latestSubmissions.size === 0) {
            if (!options.silent) {
                showToast("Chưa có thành viên nào nộp form!", "info");
            }
            return;
        }

        let updatedCount = 0;
        let addedCount = 0;

        // Cập nhật hoặc thêm thành viên vào danh sách
        latestSubmissions.forEach((sub, normKey) => {
            const existing = members.find(m => normalizeMemberName(m.name) === normKey);
            if (existing) {
                if (sub.power) {
                    existing.power = sub.power;
                    existing.powerVal = calculateNumericPower(sub.power);
                    existing.ingamePower = sub.power;
                }
                if (sub.stage) existing.stage = sub.stage;
                if (sub.tower) existing.tower = sub.tower;
                if (sub.server) existing.server = sub.server;
                if (sub.title) existing.title = sub.title;
                if (sub.note) existing.note = sub.note;
                if (sub.image) existing.image = sub.image;
                updatedCount++;
            } else {
                members.push({
                    stt: members.length + 1,
                    name: sub.originalName.startsWith('SW') ? sub.originalName : `SW ⚜️ ${sub.originalName}`,
                    power: sub.power || '0B',
                    powerVal: calculateNumericPower(sub.power || '0B'),
                    ingamePower: sub.power || '0B',
                    stage: sub.stage || '5000',
                    tower: sub.tower || '1000',
                    server: sub.server || null,
                    title: sub.title || 'Vệ Tướng Quân',
                    note: sub.note || 'Thành viên',
                    avatar: '🐺',
                    image: sub.image || null
                });
                addedCount++;
            }
        });

        // Tự động sắp xếp lại toàn bộ theo lực chiến giảm dần
        members.sort((a, b) => (b.powerVal || 0) - (a.powerVal || 0));
        members.forEach((m, idx) => { m.stt = idx + 1; });

        // Lưu vào LocalStorage
        saveMembersData();

        // Cập nhật giao diện
        updateGuildInfo();
        updateStats();
        renderPodium();
        applyFilterAndSort();
        preloadMemberImages();
        updateLastUpdatedTime();

        if (!options.silent) {
            showToast(`Đồng bộ thành công! Đã cập nhật ${updatedCount} thành viên, thêm mới ${addedCount} tướng!`, "success");
        } else {
            console.log(`[Google Sheet Auto-Sync] Cập nhật ${updatedCount} thành viên, thêm mới ${addedCount} tướng.`);
        }
    } catch (err) {
        console.error("Lỗi đồng bộ Google Sheet:", err);
        if (!options.silent) {
            showToast(`Lỗi đồng bộ: ${err.message}`, "error");
        }
    } finally {
        syncBtns.forEach(btn => btn.classList.remove('syncing'));
    }
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
    const modalStage = document.getElementById('formation-member-stage');
    const modalTower = document.getElementById('formation-member-tower');
    const modalServer = document.getElementById('formation-member-server');

    if (modalName) modalName.textContent = member.name;
    if (modalRank) modalRank.textContent = `Hạng #${member.stt}`;
    if (modalPower) modalPower.textContent = member.power;
    if (modalStage) {
        modalStage.innerHTML = `<i class="fa-solid fa-mountain"></i> Ải ${member.stage || '14.500'}`;
    }
    if (modalTower) {
        modalTower.innerHTML = `<i class="fa-solid fa-chess-rook"></i> Tháp ${member.tower || '3.200'}`;
    }
    if (modalServer) {
        modalServer.style.display = 'none';
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
    const screenshotLoader = document.getElementById('formation-screenshot-loader');

    if (member.image) {
        if (screenshotPlaceholder) screenshotPlaceholder.style.display = 'none';
        if (screenshotContainer) screenshotContainer.classList.add('has-active-image');

        if (screenshotImg) {
            screenshotImg.style.display = 'block';
            delete screenshotImg.dataset.triedFallback;
            screenshotImg.src = member.image;

            // Nếu ảnh đã tải xong trong cache RAM thì hiển thị ngay 0ms không giật lag hay nháy spinner
            if (screenshotImg.complete && screenshotImg.naturalWidth > 0) {
                screenshotImg.classList.add('loaded');
                if (screenshotLoader) screenshotLoader.classList.remove('active');
            } else {
                screenshotImg.classList.remove('loaded');
                if (screenshotLoader) screenshotLoader.classList.add('active');

                screenshotImg.onload = function() {
                    screenshotImg.classList.add('loaded');
                    if (screenshotLoader) screenshotLoader.classList.remove('active');
                };
                screenshotImg.onerror = function() {
                    // Fallback thông minh: nếu link thumbnail bị chặn, thử CDN lh3
                    if (member.image && member.image.includes('drive.google.com') && !screenshotImg.dataset.triedFallback) {
                        screenshotImg.dataset.triedFallback = 'true';
                        const fileId = member.image.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]+)/)?.[1];
                        if (fileId) {
                            screenshotImg.src = `https://lh3.googleusercontent.com/d/${fileId}`;
                            return;
                        }
                    }
                    if (screenshotLoader) screenshotLoader.classList.remove('active');
                    screenshotImg.style.display = 'none';
                    if (screenshotPlaceholder) screenshotPlaceholder.style.display = 'flex';
                };
            }
        }
    } else {
        if (screenshotLoader) screenshotLoader.classList.remove('active');
        if (screenshotImg) {
            screenshotImg.style.display = 'none';
            screenshotImg.classList.remove('loaded');
        }
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
        if (modalId === 'modal-formation-view') {
            const screenshotImg = document.getElementById('formation-screenshot-preview');
            const screenshotLoader = document.getElementById('formation-screenshot-loader');
            if (screenshotImg) screenshotImg.classList.remove('loaded');
            if (screenshotLoader) screenshotLoader.classList.remove('active');
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

/* ==========================================================================
   TRA CỨU THỨ HẠNG THÀNH VIÊN (DÀNH CHO ANH EM TOP DƯỚI & TOÀN BANG)
   ========================================================================== */
let isLowerRanksExpanded = false;

function initMemberLookup() {
    const lookupInput = document.getElementById('member-lookup-input');
    const clearBtn = document.getElementById('btn-lookup-clear');
    const toggleBtn = document.getElementById('btn-toggle-lower-ranks');

    if (!lookupInput) return;

    lookupInput.addEventListener('input', debounce(() => {
        handleLookupInput(lookupInput.value);
    }, 120));

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            lookupInput.value = '';
            clearBtn.style.display = 'none';
            handleLookupInput('');
            lookupInput.focus();
        });
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            toggleLowerRanksView();
        });
    }
}

function handleLookupInput(keyword) {
    const query = (keyword || '').trim();
    const clearBtn = document.getElementById('btn-lookup-clear');
    const initialWrap = document.getElementById('lookup-initial-state');
    const cardsGrid = document.getElementById('lookup-grid-cards');
    const emptyWrap = document.getElementById('lookup-empty-state');
    const queryEcho = document.getElementById('lookup-query-term');
    const counterText = document.getElementById('lookup-counter-text');
    const toggleText = document.getElementById('toggle-lower-text');

    if (clearBtn) {
        clearBtn.style.display = query ? 'flex' : 'none';
    }

    if (!query) {
        // Nếu ô tìm kiếm rỗng
        if (isLowerRanksExpanded) {
            renderLowerRanksGrid();
        } else {
            if (initialWrap) initialWrap.style.display = 'block';
            if (cardsGrid) cardsGrid.style.display = 'none';
            if (emptyWrap) emptyWrap.style.display = 'none';
            if (counterText) {
                counterText.innerHTML = '<i class="fa-solid fa-circle-info"></i> Bang hội có <strong>41</strong> thành viên. Gõ tên để tra cứu thứ hạng hiện tại của bạn.';
            }
            if (toggleText) toggleText.textContent = 'Xem tất cả Top 16 - 41';
        }
        return;
    }

    // Tra cứu trên toàn bộ 41 thành viên
    const normalizedQuery = removeVietnameseTones(query.toLowerCase());
    const queryNumber = parseInt(query.replace(/[^0-9]/g, ''), 10);

    const matches = members.filter(m => {
        // Khớp thứ hạng chính xác nếu người dùng gõ số
        if (!isNaN(queryNumber) && m.stt === queryNumber) return true;

        const normalizedName = removeVietnameseTones((m.name || '').toLowerCase());
        const normalizedTitle = removeVietnameseTones((m.title || '').toLowerCase());
        const normalizedNote = removeVietnameseTones((m.note || '').toLowerCase());

        return normalizedName.includes(normalizedQuery) ||
               normalizedTitle.includes(normalizedQuery) ||
               normalizedNote.includes(normalizedQuery);
    });

    // Sắp xếp theo thứ hạng tăng dần
    matches.sort((a, b) => (a.stt || 0) - (b.stt || 0));

    if (initialWrap) initialWrap.style.display = 'none';

    if (matches.length === 0) {
        if (cardsGrid) cardsGrid.style.display = 'none';
        if (emptyWrap) emptyWrap.style.display = 'block';
        if (queryEcho) queryEcho.textContent = query;
        if (counterText) {
            counterText.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: #f87171;"></i> Không tìm thấy thành viên nào khớp với "${escapeHtml(query)}"`;
        }
    } else {
        if (emptyWrap) emptyWrap.style.display = 'none';
        if (cardsGrid) {
            cardsGrid.style.display = 'grid';
            cardsGrid.innerHTML = matches.map(m => generateEliteCardHtml(m)).join('');
        }
        if (counterText) {
            counterText.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #4ade80;"></i> Tìm thấy <strong>${matches.length}</strong> thành viên phù hợp với "${escapeHtml(query)}"`;
        }
    }
}

function toggleLowerRanksView() {
    isLowerRanksExpanded = !isLowerRanksExpanded;
    const lookupInput = document.getElementById('member-lookup-input');
    const toggleText = document.getElementById('toggle-lower-text');

    if (isLowerRanksExpanded) {
        if (lookupInput) lookupInput.value = '';
        const clearBtn = document.getElementById('btn-lookup-clear');
        if (clearBtn) clearBtn.style.display = 'none';
        renderLowerRanksGrid();
        if (toggleText) toggleText.textContent = 'Thu gọn Top 16 - 41';
    } else {
        const initialWrap = document.getElementById('lookup-initial-state');
        const cardsGrid = document.getElementById('lookup-grid-cards');
        const emptyWrap = document.getElementById('lookup-empty-state');
        const counterText = document.getElementById('lookup-counter-text');

        if (initialWrap) initialWrap.style.display = 'block';
        if (cardsGrid) cardsGrid.style.display = 'none';
        if (emptyWrap) emptyWrap.style.display = 'none';
        if (counterText) {
            counterText.innerHTML = '<i class="fa-solid fa-circle-info"></i> Bang hội có <strong>41</strong> thành viên. Gõ tên để tra cứu thứ hạng hiện tại của bạn.';
        }
        if (toggleText) toggleText.textContent = 'Xem tất cả Top 16 - 41';
    }
}

function renderLowerRanksGrid() {
    const initialWrap = document.getElementById('lookup-initial-state');
    const cardsGrid = document.getElementById('lookup-grid-cards');
    const emptyWrap = document.getElementById('lookup-empty-state');
    const counterText = document.getElementById('lookup-counter-text');

    // Lọc thành viên từ hạng 16 trở lên
    const lowerRanks = members.filter(m => (m.stt || 0) >= 16).sort((a, b) => (a.stt || 0) - (b.stt || 0));

    if (initialWrap) initialWrap.style.display = 'none';
    if (emptyWrap) emptyWrap.style.display = 'none';

    if (cardsGrid) {
        cardsGrid.style.display = 'grid';
        cardsGrid.innerHTML = lowerRanks.map(m => generateEliteCardHtml(m)).join('');
    }

    if (counterText) {
        counterText.innerHTML = `<i class="fa-solid fa-users" style="color: var(--gold-300);"></i> Đang hiển thị toàn bộ <strong>${lowerRanks.length}</strong> anh em Top dưới (Hạng #16 đến #${lowerRanks[lowerRanks.length - 1]?.stt || 41})`;
    }
}

function quickLookupMember(name) {
    const lookupInput = document.getElementById('member-lookup-input');
    if (!lookupInput) return;
    lookupInput.value = name;
    handleLookupInput(name);
    lookupInput.focus();

    const section = document.getElementById('member-lookup-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}
