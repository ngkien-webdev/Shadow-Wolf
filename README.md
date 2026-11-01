# MIÊU CHỦ TAM QUỐC – HỆ THỐNG BẢNG XẾP HẠNG & QUẢN TRỊ BANG HỘI

Website Gaming Dashboard chuyên nghiệp dành cho **Bang Hội** trong game chiến thuật **Miêu Chủ Tam Quốc** (Server Bang Hội • Shadow Wolf).

---

## 🌟 TÍNH NĂNG HOÀN THIỆN THEO YÊU CẦU

### 1. Phân Quyền Rõ Ràng: Trang Công Khai vs. Trang Quản Trị
- **Trang Bảng Xếp Hạng Công Khai ([index.html](file:///d:/BXH%20MDTQ/index.html))**:
  - Dành riêng cho thành viên và khách chỉ xem bảng xếp hạng và tra cứu đội hình.
  - Loại bỏ hoàn toàn các nút tác vụ quản trị (không có sửa nhanh, không có xuất CSV hay thêm tướng trên trang này).
  - Góc trên cùng bên phải chỉ có duy nhất **Nút "Trang Quản Trị"** để quản trị viên truy cập.
  - Nhấp vào bất kỳ thành viên nào hoặc nút **"Xem Đội Hình"** để mở khung xem chi tiết trận hình.
- **Trang Quản Trị Chuyên Dụng ([admin.html](file:///d:/BXH%20MDTQ/admin.html))**:
  - **Cổng Đăng Nhập Bảo Mật (Login Gate)**: Bắt buộc xác thực tài khoản trước khi vào bảng điều khiển:
    - **Tài khoản**: `apex`
    - **Mật khẩu**: `123`
  - Quản lý toàn diện: Thêm tướng mới, sửa thông tin, xóa thành viên, tải lên/thay đổi ảnh đội hình, sắp xếp thứ tự thủ công (▲ ▼), tự động xếp STT theo Lực Chiến, xuất và nhập CSV, khôi phục dữ liệu gốc.
  - Có nút **"Đăng Xuất"** và nút **"Xem Bảng Xếp Hạng"**.

### 2. Chuẩn Hóa Danh Xưng: "SERVER BANG HỘI"
- Thay thế toàn bộ thuật ngữ từ "Quân Đoàn" sang **"Bang Hội"**:
  - `SERVER BANG HỘI`
  - `BẢNG XẾP HẠNG BANG HỘI`
  - `BANG HỘI SHADOW WOLF`
  - Thống kê: *Tổng Thành Viên Bang*, *Tổng Lực Chiến Bang Hội*, *Bang Chủ Tối Cao*.

### 3. Chuẩn Hóa & Cắt Khung Ảnh Đội Hình Chuẩn Game Card
- Toàn bộ **35 ảnh đội hình** trong `images/dh/` đã được crop tự động lấy đúng khung Thẻ Bài Cá Nhân (từ mục *"Thông tin cá nhân"* đến thanh thao tác *"Xóa bạn / Chặn / Tỉ thí / Miêu Trại"*), đúng theo chuẩn ảnh mẫu bạn cung cấp.
- Ảnh khi hiển thị trong popup sẽ to rõ, sắc nét, tập trung vào 5 vị tướng mèo xuất trận, cấp độ, sao thần, bảo vật và linh sủng.
- **6 thành viên chưa có ảnh** hiển thị rõ ràng nhãn: **`Chưa cập nhật đội hình`**:
  1. STT 7: `•SW• Bãoo (Tháii Bảo)`
  2. STT 12: `•SW• Rain (Nguyễn Hiếu)`
  3. STT 13: `•SW• Rin (Rin)`
  4. STT 15: `•SW• Quýt (Huy Howi)`
  5. STT 31: `•SW• Xoài`
  6. STT 38: `•SW• Măng`
- Quản trị viên chỉ cần bấm **"+ Tải ảnh"** trên trang `admin.html` khi có ảnh mới của 6 thành viên này.

### 4. Giao Diện Tươi Sáng & Gaming Chiến Thuật Tam Quốc
- Bảng màu tương phản cao, rực rỡ hoàng kim, đỏ đô Tam Quốc kết hợp xanh ngọc và tím đế vương.
- Hiệu ứng ánh kim, bục vinh danh Tam Đại Thống Soái (Top 1 Quán Quân, Top 2 Á Quân, Top 3 Quý Quân).
- Responsive hoàn hảo trên điện thoại, máy tính bảng và màn hình máy tính lớn.

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
d:\BXH MDTQ\
├── index.html            # Trang Bảng Xếp Hạng Bang Hội (Dành cho người xem)
├── admin.html            # Trang Quản Trị Tướng Lĩnh & Đội Hình (Bảo mật: apex / 123)
├── style.css             # CSS giao diện Gaming Tam Quốc tươi sáng, hiện đại
├── script.js             # Dữ liệu 41 tướng & bộ điều khiển hiển thị công khai
├── admin.js              # Mã điều khiển logic đăng nhập & quản trị dữ liệu
├── standalone.html       # Bản HTML đóng gói độc lập cho trang Bảng Xếp Hạng
├── standalone-admin.html # Bản HTML đóng gói độc lập cho trang Quản Trị
├── images/dh/            # 35 ảnh đội hình đã cắt chuẩn khung thẻ bài in-game
├── ing-DH/               # Thư mục ảnh chụp màn hình gốc
└── README.md             # Tài liệu dự án
```

---

## 🔑 THÔNG TIN ĐĂNG NHẬP QUẢN TRỊ

| Mục | Giá trị |
| :--- | :--- |
| **Đường dẫn** | [admin.html](file:///d:/BXH%20MDTQ/admin.html) hoặc nhấp nút **"Trang Quản Trị"** ở góc phải [index.html](file:///d:/BXH%20MDTQ/index.html) |
| **Tài khoản** | `apex` |
| **Mật khẩu** | `123` |
