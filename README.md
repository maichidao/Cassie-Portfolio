# Cassie - Portfolio
Portfolio giới thiệu bản thân và các dự án cá nhân, xây dựng bằng React + Vite.

## Tính năng
 
- **Dark / Light mode** 
- **Điều hướng tự động theo scroll (scroll-spy)**
- **Trang giới thiệu (About)** 
- **Danh sách dự án (Projects)** 
- **Form liên hệ (Contact)** 

## Cài đặt & chạy dự án
  
### 1. Clone repository
```bash
git clone https://github.com/maichidao/Cassie-Portfolio
cd Cassie-Portfolio
```

### 2. Chạy Backend
 
```bash
cd backend
npm install
```
 
Tạo file `.env` trong thư mục `backend` với nội dung:
 
```
PORT=5000
```
Khởi động server:
```bash
npm run dev
```
 
Backend sẽ chạy tại: **http://localhost:5000**

### 3. Chạy Frontend
 
Mở terminal mới, **không tắt terminal Backend**:
 
```bash
cd my-react-portfolio
npm install lucide-react
npm run dev
```
 
Dự án sẽ chạy tại `http://localhost:5173`.

## 📁 Cấu trúc thư mục

```
Cassie-Portfolio/
├── my-react-portfolio/     # Frontend (ReactJS + Vite)
│   ├── src/
│   │   ├── assets/              # Ảnh, avatar
│   │   ├── components/          # Header, Hero,  About, Projects, ProjectCard, Contact, Footer
│   │   ├── css/                 # File CSS riêng cho từng component
│   │   ├── data/
│   │   │   ├── projects.js      # Dữ liệu các dự án hiển thị ở section Projects
│   │   │   └── useDarkMode.js   # Quản lý dark/light mode
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css            # CSS variables, font import, reset toàn cục
│   │   └── main.jsx
│   ├── public/
│   │   └── cv-mai-chi.pdf       # File CV để tải về
│   └── package.json
├── backend/                # Backend (Node.js + Express)
│   ├── data/
│   │   └── projects.json
│   ├── controllers/
│   │   └── projectController.js
│   ├── routes/
│   │   └── projectRoutes.js
│   ├── server.js
│   └── package.json
├── AI_PROMPTS.md
└── README.md
```