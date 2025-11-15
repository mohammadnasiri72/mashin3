// axiosConfig.js
import axios from "axios";

// ایجاد instance اصلی
const axiosInstance = axios.create({
  baseURL: "https://api3.aitest2.ir/",
  timeout: 10000,
});

// افزودن response interceptor برای هندل کردن خطاها
axiosInstance.interceptors.response.use(
  (response) => {
    // پاسخ موفق - بدون تغییر پاس داده میشه
    return response;
  },
  (error) => {
    // هندل کردن خطا
    handleUnauthorizedError();
    return Promise.reject(error);
  }
);

// تابع مدیریت خطای 401
const handleUnauthorizedError = () => {
  if (typeof window !== "undefined") {
    window.location.href = "/404";
  }
};

export default axiosInstance;
