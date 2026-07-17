import { useState, useEffect } from "react";

/**
 * Custom hook quản lý chế độ Sáng/Tối (Dark/Light Mode).
 * - Đọc theme đã lưu từ localStorage khi khởi tạo (mặc định: "dark").
 * - Mỗi khi theme thay đổi, cập nhật attribute data-theme trên <body>
 *   và lưu lại vào localStorage để giữ nguyên khi reload trang.
 */
export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
