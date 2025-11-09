// axiosConfig.js
import axios from 'axios';

// ایجاد instance اصلی
const axiosInstance = axios.create({
  baseURL: 'https://api3.aitest2.ir/',
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
    if (error.response?.status === 401) {
      // مدیریت خطای 401
      handleUnauthorizedError();
    }
    return Promise.reject(error);
  }
);

// تابع مدیریت خطای 401
const handleUnauthorizedError = () => {
  
};



export default axiosInstance;