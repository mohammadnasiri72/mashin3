import axios from "axios";
import { redirect } from "next/navigation";

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
   
    
    // استخراج status code
    const status = error.response?.status || 500;
    
    // هندل کردن خطا بر اساس status code
    handleErrorByStatusCode(status, error);
    
    return Promise.reject(error);
  }
);

// تابع مدیریت خطا بر اساس status code
const handleErrorByStatusCode = (status: number, error: any) => {
   
  if (typeof window === "undefined") return; // فقط در سمت کلاینت
  const errorMessages: { [key: number]: string } = {
    400: "درخواست نامعتبر است",
    401: "لطفاً مجدداً وارد شوید",
    403: "شما دسترسی به این بخش را ندارید", 
    404: "صفحه مورد نظر یافت نشد",
    500: "خطای داخلی سرور",
    502: "سرور در دسترس نیست",
    503: "سرویس موقتاً غیرفعال است",
    504: "اتصال timed out شد"
  };

  const message = errorMessages[status] || "خطای غیرمنتظره رخ داده است";
  
  // ذخیره اطلاعات خطا برای استفاده در صفحه error
  sessionStorage.setItem('errorInfo', JSON.stringify({
    status,
    message,
    originalError: error.message,
    timestamp: new Date().toISOString(),
    url: window.location.href
  }));
  
  // ریدایرکت به صفحه خطا
  window.location.href = `/error?status=${status}`;
};

// تابع مدیریت خطای 401 (اگر جداگانه نیاز دارید)
const handleUnauthorizedError = () => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem('errorInfo', JSON.stringify({
      status: 401,
      message: "لطفاً مجدداً وارد شوید",
      timestamp: new Date().toISOString()
    }));
    window.location.href = "/error?status=401";
  }
};

export default axiosInstance;