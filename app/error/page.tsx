'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const [errorInfo, setErrorInfo] = useState<any>(null);

  useEffect(() => {
    const status = searchParams.get('status') || '500';
    const message = getErrorMessage(parseInt(status));

    setErrorInfo({
      status: parseInt(status),
      message,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : ''
    });
  }, [searchParams]);

  const getErrorMessage = (status: number): string => {
    const messages: { [key: number]: string } = {
      400: "درخواست نامعتبر است",
      401: "لطفاً مجدداً وارد شوید",
      403: "شما دسترسی به این بخش را ندارید", 
      404: "صفحه مورد نظر یافت نشد",
      500: "خطای داخلی سرور",
      502: "سرور در دسترس نیست",
      503: "سرویس موقتاً غیرفعال است",
      504: "اتصال timed out شد"
    };

    return messages[status] || "خطای غیرمنتظره رخ داده است";
  };

  if (!errorInfo) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">{errorInfo.status}</h1>
        <p className="text-xl mt-4">{errorInfo.message}</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
}