# Cargo Nhật Việt - Website Vận Chuyển Nhật Việt

Website giới thiệu dịch vụ vận chuyển hàng hóa từ Nhật Bản về Việt Nam. Được xây dựng với phong cách hiện đại, chuyên nghiệp và tối ưu cho thiết bị di động.

## Công nghệ sử dụng
- **React 18**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Lucide React** (Icons)
- **Motion** (Animations)

## Cấu trúc dự án
- `src/data/siteContent.js`: Chứa toàn bộ nội dung text của website. Dễ dàng chỉnh sửa mà không cần can thiệp vào code component.
- `src/components/layout`: Chứa các thành phần khung như Header, Footer.
- `src/components/ui`: Chứa các UI components dùng chung (Card, Table, Timeline, v.v.)
- `src/components/sections`: Chứa các khối nội dung lớn của trang web.
- `src/pages`: Chứa các trang chính (Home, Transport).

## Hướng dẫn phát triển

### 1. Cài đặt
```bash
npm install
```

### 2. Chạy môi trường phát triển
```bash
npm run dev
```

### 3. Build sản phẩm
```bash
npm run build
```

## Hướng dẫn Deploy lên GitHub Pages

1. Đảm bảo `base` trong `vite.config.js` đã được cấu hình đúng (mặc định là `/`).
2. Chạy `npm run build`.
3. Upload toàn bộ nội dung trong thư mục `dist` lên nhánh `gh-pages` hoặc thư mục root của repository.
4. File `404.html` đã được tạo sẵn để xử lý routing cho Single Page Application trên GitHub Pages.

## Cấu hình Custom Domain
1. Trên GitHub: Vào Settings > Pages > Custom domain. Nhập domain của bạn (ví dụ: `cargonhatviet.vn`).
2. Trên Route 53 (AWS):
   - Tạo bản ghi A trỏ đến các IP của GitHub Pages:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Tạo bản ghi CNAME cho `www` trỏ đến `<username>.github.io`.

## Chỉnh sửa nội dung
Mọi nội dung text, link tra cứu đơn hàng, địa chỉ kho, bảng giá đều nằm trong file `src/data/siteContent.js`. Bạn chỉ cần mở file này và thay đổi các giá trị tương ứng.
