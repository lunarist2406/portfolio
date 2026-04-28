# 🚀 My Creative Portfolio

Chào mừng bạn đến với repo Portfolio cá nhân của tôi! Đây là một ứng dụng web hiện đại, hiệu năng cao, được xây dựng để trình bày kỹ năng, các dự án và chứng chỉ chuyên môn của tôi.

## ✨ Tính năng nổi bật

* **⚡ Next.js 15+ (App Router):** Tối ưu hóa hiệu năng và SEO vượt trội.
* **🌍 Đa ngôn ngữ (i18n):** Hỗ trợ chuyển đổi ngôn ngữ linh hoạt (Tiếng Việt & Tiếng Anh).
* **🎨 Giao diện Dark Mode:** Thiết kế sang trọng với tông màu Đen & Vàng (Yellow-500) chủ đạo.
* **🎭 Hiệu ứng mượt mà:** Sử dụng **Framer Motion** cho các chuyển động scroll và hover đầy sinh động.
* **📱 Responsive Design:** Hiển thị hoàn hảo trên mọi thiết bị từ Mobile, Tablet đến Desktop.
* **📦 Thành phần UI:** Sử dụng bộ thư viện **Shadcn UI** & **Lucide Icons** cho các component tinh tế.

## 🛠️ Công nghệ sử dụng

* **Framework:** Next.js
* **Ngôn ngữ:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Dữ liệu:** JSON (Quản lý nội dung động cho Expertise, Certificates, Projects)
* **I18n:** `i18next` & `react-i18next`
* **Thư viện UI:** Shadcn/UI (Carousel, Card, Badge, v.v.)

## 📂 Cấu trúc thư mục chính

```text
src/
├── app/              # Cấu trúc App Router của Next.js
├── components/       # Các component UI dùng chung (Shadcn UI)
├── view/             # Các Section chính (About, Skills, Certificates, v.v.)
├── data/             # File JSON chứa nội dung dự án, chứng chỉ
├── types/            # Định nghĩa các interface TypeScript
└── i18n/             # Cấu hình đa ngôn ngữ (locales)
```

## 🚀 Bắt đầu

### 1. Clone dự án
```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

### 2. Cài đặt dependency
```bash
npm install
# hoặc
yarn install
```

### 3. Chạy môi trường Development
```bash
npm run dev
```
Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

## ⚙️ Cấu hình quan trọng

### Thêm Domain ảnh mới
Nếu bạn sử dụng ảnh từ các nguồn bên ngoài (như Bing hay Wordpress), hãy cập nhật vào `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-source.com',
    },
  ],
},
```

## 📄 Giấy phép
Dự án này thuộc quyền sở hữu cá nhân. Bạn có thể sử dụng mã nguồn này để tham khảo hoặc xây dựng portfolio riêng cho mình.

---

**Cảm ơn bạn đã ghé thăm Portfolio của tôi!** Nếu bạn thấy thú vị, hãy tặng tôi một ⭐️ nhé!

---

### Mẹo nhỏ cho bạn:
1. **Thay đổi thông tin:** Bạn chỉ cần chỉnh sửa các file trong `src/data/*.json` để cập nhật nội dung mà không cần can thiệp quá sâu vào code.
2. **Deploy:** Cách nhanh nhất là kết nối Github với **Vercel**. Nó sẽ tự động nhận diện dự án Next.js và deploy chỉ trong vài giây.