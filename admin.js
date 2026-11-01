/**
 * ADMIN CONTROLLER – MIÊU CHỦ TAM QUỐC
 * Hệ thống điều hành & quản trị dữ liệu chuyên dụng (admin.html)
 * Tài khoản: apex | Mật khẩu: 123
 */

let adminFilteredMembers = [];
let pendingImgBase64 = null;
let currentUploadStt = null;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('auth') === '1') {
        sessionStorage.setItem('mieu_chu_admin_auth', 'true');
    }
    if (checkAdminAuth()) {
        initAdminPage();
    }
});

/**
 * Kiểm tra trạng thái đăng nhập của Admin
 */
function checkAdminAuth() {
    const isAuth = sessionStorage.getItem('mieu_chu_admin_auth') === 'true';
    const overlay = document.getElementById('admin-login-overlay');
    const wrapper = document.getElementById('admin-main-wrapper');

    if (isAuth) {
        if (overlay) overlay.style.display = 'none';
        if (wrapper) wrapper.style.display = 'block';
        return true;
    } else {
        if (overlay) overlay.style.display = 'flex';
        if (wrapper) wrapper.style.display = 'none';
        return false;
    }
}

/**
 * Xử lý đăng nhập tài khoản Quản trị viên
 */
function handleAdminLogin(e) {
    e.preventDefault();
    const user = (document.getElementById('admin-login-user')?.value || '').trim();
    const pass = (document.getElementById('admin-login-pass')?.value || '').trim();
    const errEl = document.getElementById('admin-login-error');

    if (user === 'apex' && pass === '123') {
        sessionStorage.setItem('mieu_chu_admin_auth', 'true');
        if (errEl) errEl.style.display = 'none';

        const overlay = document.getElementById('admin-login-overlay');
        const wrapper = document.getElementById('admin-main-wrapper');
        if (overlay) overlay.style.display = 'none';
        if (wrapper) wrapper.style.display = 'block';

        initAdminPage();
        showToast("Đăng nhập quản trị thành công! Chào mừng Bang Chủ Apex.", "success");
    } else {
        if (errEl) {
            errEl.style.display = 'block';
            errEl.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Tài khoản hoặc mật khẩu không chính xác! (apex / 123)';
        }
        const box = document.querySelector('.admin-login-box');
        if (box) {
            box.classList.add('animate-shake');
            setTimeout(() => box.classList.remove('animate-shake'), 500);
        }
        showToast("Sai tài khoản hoặc mật khẩu quản trị!", "error");
    }
}

/**
 * Đăng xuất quản trị viên
 */
function adminLogout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất khỏi Trang Quản Trị?")) {
        sessionStorage.removeItem('mieu_chu_admin_auth');
        const overlay = document.getElementById('admin-login-overlay');
        const wrapper = document.getElementById('admin-main-wrapper');
        if (overlay) overlay.style.display = 'flex';
        if (wrapper) wrapper.style.display = 'none';
        showToast("Đã đăng xuất khỏi hệ thống quản trị.", "info");
    }
}

/**
 * Khởi tạo giao diện trang Admin sau khi đăng nhập thành công
 */
function initAdminPage() {
    loadMembersData();
    setupAdminEventListeners();
    updateAdminKPIs();
    applyAdminFilters();
}

/**
 * Cập nhật 4 thẻ KPI trên trang Admin
 */
function updateAdminKPIs() {
    const total = members.length;
    let hasImg = 0;
    let totalPower = 0;

    members.forEach(m => {
        if (m.image) hasImg++;
        totalPower += (m.powerVal || calculateNumericPower(m.power));
    });

    const missingImg = total - hasImg;
    const hasImgPct = total > 0 ? ((hasImg / total) * 100).toFixed(1) : 0;

    let totalPowerFormatted = '';
    if (totalPower >= 1000) {
        totalPowerFormatted = `~${(totalPower / 1000).toFixed(2)}T+`;
    } else {
        totalPowerFormatted = `~${Math.round(totalPower)}B`;
    }

    const elTotal = document.getElementById('kpi-total');
    const elHasImg = document.getElementById('kpi-has-img');
    const elHasImgPct = document.getElementById('kpi-has-img-pct');
    const elMissingImg = document.getElementById('kpi-missing-img');
    const elTotalPower = document.getElementById('kpi-total-power');

    if (elTotal) elTotal.textContent = total;
    if (elHasImg) elHasImg.textContent = hasImg;
    if (elHasImgPct) elHasImgPct.textContent = `Tỷ lệ: ${hasImgPct}%`;
    if (elMissingImg) elMissingImg.textContent = missingImg;
    if (elTotalPower) elTotalPower.textContent = totalPowerFormatted;
}

/**
 * Lọc và tìm kiếm tức thì trên trang Admin
 */
function applyAdminFilters() {
    const searchVal = (document.getElementById('admin-search-input')?.value || '').trim();
    const dhFilter = document.getElementById('admin-filter-dh')?.value || 'all';
    const titleFilter = document.getElementById('admin-filter-title')?.value || 'all';
    const noteFilter = document.getElementById('admin-filter-note')?.value || 'all';

    adminFilteredMembers = members.filter(m => {
        if (searchVal) {
            const normSearch = removeVietnameseTones(searchVal.toLowerCase());
            const normName = removeVietnameseTones(m.name.toLowerCase());
            const normTitle = removeVietnameseTones(m.title.toLowerCase());
            if (!normName.includes(normSearch) && !normTitle.includes(normSearch)) return false;
        }

        if (dhFilter === 'has-img' && !m.image) return false;
        if (dhFilter === 'missing-img' && m.image) return false;

        if (titleFilter !== 'all' && m.title.toLowerCase() !== titleFilter.toLowerCase()) return false;
        if (noteFilter !== 'all' && m.note.toLowerCase() !== noteFilter.toLowerCase()) return false;

        return true;
    });

    // Mặc định sắp xếp theo STT
    adminFilteredMembers.sort((a, b) => (Number(a.stt) || 0) - (Number(b.stt) || 0));

    renderAdminTable();

    const countEl = document.getElementById('admin-member-count');
    if (countEl) countEl.textContent = `${adminFilteredMembers.length}/${members.length}`;

    const infoEl = document.getElementById('admin-pagination-info');
    if (infoEl) infoEl.textContent = `Hiển thị ${adminFilteredMembers.length} trên tổng số ${members.length} tướng lĩnh bang hội`;
}

/**
 * Vẽ bảng quản trị thành viên
 */
function renderAdminTable() {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) return;

    if (adminFilteredMembers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);"><i class="fa-solid fa-magnifying-glass"></i> Không tìm thấy tướng lĩnh phù hợp với bộ lọc</td></tr>`;
        return;
    }

    let html = '';
    adminFilteredMembers.forEach(m => {
        const titleClass = TITLE_CLASSES[m.title] || 'title-default';
        const noteClass = NOTE_CLASSES[m.note] || 'note-default';

        // Cột ảnh đội hình
        const imgCell = m.image ? `
            <div class="admin-img-cell">
                <img src="${m.image}" alt="DH" class="admin-img-thumb" title="Nhấp để phóng to" onclick="previewLargeImage('${m.image}', '${escapeHtml(m.name)}')">
                <button class="btn-upload-dh" onclick="triggerQuickUpload(${m.stt})" title="Thay thế ảnh đội hình">
                    <i class="fa-solid fa-camera"></i> Đổi
                </button>
            </div>
        ` : `
            <button class="btn-upload-dh" style="background: rgba(239, 68, 68, 0.2); border-color: #ef4444; color: #fca5a5;" onclick="triggerQuickUpload(${m.stt})" title="Tải lên ảnh đội hình">
                <i class="fa-solid fa-plus"></i> Tải ảnh
            </button>
        `;

        html += `
            <tr class="member-row">
                <!-- 1. STT & NÚT ĐIỀU CHỈNH THỨ TỰ -->
                <td class="col-stt">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                        <span style="font-weight: 800; font-family: var(--font-heading); color: var(--gold-200); width: 25px; text-align: center;">${m.stt}</span>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <button class="rank-adjust-btn" onclick="moveMemberRank(${m.stt}, -1)" title="Nâng lên 1 hạng">▲</button>
                            <button class="rank-adjust-btn" onclick="moveMemberRank(${m.stt}, 1)" title="Hạ xuống 1 hạng">▼</button>
                        </div>
                    </div>
                </td>

                <!-- 2. ẢNH ĐỘI HÌNH -->
                <td>${imgCell}</td>

                <!-- 3. TÊN NHÂN VẬT & SERVER -->
                <td>
                    <div style="display: flex; flex-direction: column; gap: 2px;">
                        <strong style="color: #fff; font-size: 0.95rem;">${escapeHtml(m.name)}</strong>
                        <span style="font-size: 0.75rem; color: var(--text-muted);">${m.server ? `Server: ${m.server}` : 'Chưa cập nhật server'}</span>
                    </div>
                </td>

                <!-- 4. LỰC CHIẾN -->
                <td>
                    <div style="display: flex; flex-direction: column;">
                        <span style="color: var(--gold-200); font-family: var(--font-heading); font-weight: 700;">
                            <i class="fa-solid fa-bolt" style="color: #ffb703;"></i> ${escapeHtml(m.power)}
                        </span>
                        ${m.ingamePower ? `<span style="font-size: 0.72rem; color: var(--text-muted);">In-game: ${m.ingamePower}</span>` : ''}
                    </div>
                </td>

                <!-- 5. DANH HIỆU -->
                <td>
                    <span class="member-title-badge ${titleClass}">
                        ${escapeHtml(m.title)}
                    </span>
                </td>

                <!-- 6. CHỨC VỤ -->
                <td>
                    <span class="member-note-badge ${noteClass}">
                        ${escapeHtml(m.note)}
                    </span>
                </td>

                <!-- 7. THAO TÁC -->
                <td class="col-actions">
                    <div class="action-btn-group">
                        <button class="btn-action btn-edit" title="Sửa thông tin tướng" onclick="openAdminEditModal(${m.stt})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-action btn-delete" title="Xóa khỏi bang hội" onclick="openAdminDeleteModal(${m.stt})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

/**
 * Di chuyển thứ tự STT lên hoặc xuống
 */
function moveMemberRank(stt, dir) {
    const sorted = [...members].sort((a, b) => a.stt - b.stt);
    const index = sorted.findIndex(m => m.stt === stt);
    if (index === -1) return;

    const targetIndex = index + dir;
    if (targetIndex < 0 || targetIndex >= sorted.length) return;

    // Đổi chỗ STT của 2 phần tử
    const currentMember = sorted[index];
    const targetMember = sorted[targetIndex];

    const tempStt = currentMember.stt;
    currentMember.stt = targetMember.stt;
    targetMember.stt = tempStt;

    saveMembersData();
    updateAdminKPIs();
    applyAdminFilters();
    showToast(`Đã điều chỉnh thứ hạng của "${currentMember.name}"!`, "success");
}

/**
 * Tải ảnh nhanh trực tiếp từ dòng bảng
 */
function triggerQuickUpload(stt) {
    currentUploadStt = stt;
    let input = document.getElementById('admin-quick-file-input');
    if (!input) {
        input = document.createElement('input');
        input.type = 'file';
        input.id = 'admin-quick-file-input';
        input.accept = 'image/*';
        input.style.display = 'none';
        document.body.appendChild(input);
        input.addEventListener('change', handleQuickFileUpload);
    }
    input.click();
}

function handleQuickFileUpload(e) {
    const file = e.target.files[0];
    if (!file || !currentUploadStt) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const base64 = evt.target.result;
        const member = members.find(m => m.stt === currentUploadStt);
        if (member) {
            member.image = base64;
            saveMembersData();
            updateAdminKPIs();
            applyAdminFilters();
            showToast(`Đã cập nhật ảnh đội hình cho "${member.name}"!`, "success");
        }
        e.target.value = '';
    };
    reader.readAsDataURL(file);
}

/**
 * Xem ảnh phóng to
 */
function previewLargeImage(imgSrc, name) {
    const modal = document.getElementById('modal-preview-image');
    const imgEl = document.getElementById('preview-image-large');
    const titleEl = document.getElementById('preview-image-title');

    if (imgEl) imgEl.src = imgSrc;
    if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-shield-cat"></i> Đội Hình: ${name}`;
    openModal('modal-preview-image');
}

/**
 * Mở modal thêm tướng mới
 */
function openAdminAddModal() {
    currentEditingMember = null;
    pendingImgBase64 = null;

    document.getElementById('admin-modal-title').innerHTML = `<i class="fa-solid fa-user-plus"></i> Thêm Hùng Tướng Mới`;
    const form = document.getElementById('admin-member-form');
    if (form) form.reset();

    const nextStt = members.length > 0 ? Math.max(...members.map(m => m.stt || 0)) + 1 : 1;
    document.getElementById('admin-form-stt').value = nextStt;
    document.getElementById('admin-form-avatar').value = '⚔️';

    const preview = document.getElementById('admin-form-img-preview');
    if (preview) {
        preview.src = '';
        preview.style.display = 'none';
    }

    openModal('modal-admin-member');
}

/**
 * Mở modal sửa thông tin tướng
 */
function openAdminEditModal(stt) {
    const member = members.find(m => m.stt === stt);
    if (!member) return;

    currentEditingMember = member;
    pendingImgBase64 = null;

    document.getElementById('admin-modal-title').innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Cập Nhật Hùng Tướng #${member.stt}`;
    document.getElementById('admin-form-stt').value = member.stt;
    document.getElementById('admin-form-name').value = member.name;
    document.getElementById('admin-form-power').value = member.power;
    document.getElementById('admin-form-server').value = member.server || '';
    document.getElementById('admin-form-title').value = member.title;
    document.getElementById('admin-form-note').value = member.note;
    document.getElementById('admin-form-avatar').value = member.avatar || '⚔️';

    const preview = document.getElementById('admin-form-img-preview');
    if (member.image) {
        preview.src = member.image;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }

    openModal('modal-admin-member');
}

function handleAdminFormImgChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        pendingImgBase64 = evt.target.result;
        const preview = document.getElementById('admin-form-img-preview');
        if (preview) {
            preview.src = pendingImgBase64;
            preview.style.display = 'block';
        }
    };
    reader.readAsDataURL(file);
}

function handleAdminFormSubmit(e) {
    e.preventDefault();

    const stt = parseInt(document.getElementById('admin-form-stt').value, 10);
    const name = document.getElementById('admin-form-name').value.trim();
    const power = document.getElementById('admin-form-power').value.trim();
    const server = document.getElementById('admin-form-server').value.trim();
    const title = document.getElementById('admin-form-title').value.trim();
    const note = document.getElementById('admin-form-note').value.trim();
    const avatar = document.getElementById('admin-form-avatar').value.trim() || '⚔️';

    const powerVal = calculateNumericPower(power);

    if (currentEditingMember) {
        currentEditingMember.stt = stt;
        currentEditingMember.name = name;
        currentEditingMember.power = power;
        currentEditingMember.powerVal = powerVal;
        currentEditingMember.server = server;
        currentEditingMember.title = title;
        currentEditingMember.note = note;
        currentEditingMember.avatar = avatar;
        if (pendingImgBase64) {
            currentEditingMember.image = pendingImgBase64;
        }

        showToast(`Đã lưu thay đổi cho "${name}"!`, "success");
    } else {
        const newMember = {
            stt: stt,
            name: name,
            power: power,
            powerVal: powerVal,
            server: server,
            title: title,
            note: note,
            avatar: avatar,
            image: pendingImgBase64 || null
        };
        members.push(newMember);
        showToast(`Đã thêm thành viên mới "${name}"!`, "success");
    }

    saveMembersData();
    closeModal('modal-admin-member');
    updateAdminKPIs();
    applyAdminFilters();
}

function openAdminDeleteModal(stt) {
    const member = members.find(m => m.stt === stt);
    if (!member) return;

    memberToDelete = member;
    const nameSpan = document.getElementById('admin-delete-name');
    if (nameSpan) nameSpan.textContent = `${member.name} (STT #${member.stt})`;

    openModal('modal-delete-confirm');
}

function executeDeleteMember() {
    if (!memberToDelete) return;

    const name = memberToDelete.name;
    members = members.filter(m => m.stt !== memberToDelete.stt);
    saveMembersData();

    closeModal('modal-delete-confirm');
    memberToDelete = null;

    updateAdminKPIs();
    applyAdminFilters();
    showToast(`Đã xóa thành viên "${name}" thành công!`, "success");
}

/**
 * Tự động sắp xếp lại STT 1..N theo lực chiến cao nhất đến thấp nhất
 */
function autoRankByPower() {
    if (!confirm("Hệ thống sẽ tự động xếp hạng lại STT từ 1 đến hết theo Lực Chiến từ Cao xuống Thấp. Bạn có chắc chắn?")) {
        return;
    }

    members.forEach(m => {
        m.powerVal = calculateNumericPower(m.power);
    });

    members.sort((a, b) => b.powerVal - a.powerVal);

    members.forEach((m, idx) => {
        m.stt = idx + 1;
        if (m.stt === 1) m.avatar = '👑';
        else if (m.stt === 2) m.avatar = '⚔️';
        else if (m.stt === 3) m.avatar = '🐉';
    });

    saveMembersData();
    updateAdminKPIs();
    applyAdminFilters();
    showToast("Đã tự động sắp xếp lại STT toàn bộ bang hội theo Lực Chiến!", "success");
}

function setupAdminEventListeners() {
    const searchInput = document.getElementById('admin-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(() => {
            applyAdminFilters();
        }, 200));
    }

    const clearBtn = document.getElementById('admin-clear-search');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                applyAdminFilters();
            }
        });
    }

    ['admin-filter-dh', 'admin-filter-title', 'admin-filter-note'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => applyAdminFilters());
    });
}

function resetAdminFilters() {
    const search = document.getElementById('admin-search-input');
    if (search) search.value = '';
    ['admin-filter-dh', 'admin-filter-title', 'admin-filter-note'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });
    applyAdminFilters();
    showToast("Đã thiết lập lại bộ lọc quản trị!", "info");
}
