"use client";

import type { TabsProps } from "antd";
import { Pagination, Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCalendar, FaEye, FaBook, FaMotorcycle, FaCar, FaWrench } from "react-icons/fa";

// تابع تبدیل اعداد به فارسی با مدیریت مقدار undefined
const toPersianNumber = (number: number | undefined | null): string => {
  if (number === undefined || number === null) {
    return "۰";
  }
  
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const EducationCar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("all");

  // داده‌های نکات آموزشی
  const educationData = [
    {
      id: 1,
      title: "۱۰ نکته طلایی برای نگهداری از خودرو در زمستان",
      summary: "با رعایت این نکات ساده می‌توانید از خودروی خود در فصل سرما به خوبی محافظت کنید و از مشکلات رایج زمستانی جلوگیری نمایید.",
      image: "/images/education/winter-care.jpg",
      category: "maintenance" as const,
      date: "۱۴۰۲/۱۰/۱۵",
      time: "۱۰:۳۰",
      views: 3250,
      readTime: "۵ دقیقه",
      level: "مبتدی"
    },
    {
      id: 2,
      title: "آموزش کامل تعویض روغن موتور در ۷ مرحله",
      summary: "تعویض به موقع روغن موتور یکی از مهم‌ترین موارد نگهداری از خودرو است. در این آموزش با روش صحیح آن آشنا شوید.",
      image: "/images/education/oil-change.jpg",
      category: "maintenance" as const,
      date: "۱۴۰۲/۱۰/۱۴",
      time: "۱۴:۲۰",
      views: 2890,
      readTime: "۸ دقیقه",
      level: "متوسط"
    },
    {
      id: 3,
      title: "نحوه رانندگی ایمن با موتورسیکلت در جاده‌های بارانی",
      summary: "رانندگی با موتورسیکلت در شرایط بارانی نیاز به مهارت و رعایت نکات ایمنی خاص دارد. این مطلب را از دست ندهید.",
      image: "/images/education/motorcycle-rain.jpg",
      category: "motorcycle" as const,
      date: "۱۴۰۲/۱۰/۱۳",
      time: "۰۹:۱۵",
      views: 4100,
      readTime: "۶ دقیقه",
      level: "حرفه‌ای"
    },
    {
      id: 4,
      title: "شناسایی و رفع مشکلات common injection خودرو",
      summary: "با شایع‌ترین مشکلات سیستم انژکتوری خودرو آشنا شوید و روش‌های ساده برای تشخیص و رفع آن‌ها را یاد بگیرید.",
      image: "/images/education/injection-system.jpg",
      category: "technical" as const,
      date: "۱۴۰۲/۱۰/۱۲",
      time: "۱۶:۴۵",
      views: 2560,
      readTime: "۱۰ دقیقه",
      level: "متوسط"
    },
    {
      id: 5,
      title: "آموزش تنظیم فرمان موتورسیکلت در خانه",
      summary: "با ابزارهای ساده و طی چند مرحله می‌توانید فرمان موتورسیکلت خود را به راحتی تنظیم کنید.",
      image: "/images/education/motorcycle-handlebar.jpg",
      category: "motorcycle" as const,
      date: "۱۴۰۲/۱۰/۱۱",
      time: "۱۱:۱۰",
      views: 1980,
      readTime: "۴ دقیقه",
      level: "مبتدی"
    },
    {
      id: 6,
      title: "چگونه مصرف سوخت خودرو را تا ۲۰٪ کاهش دهیم؟",
      summary: "با رعایت این ۱۵ نکته ساده می‌توانید مصرف سوخت خودروی خود را به میزان قابل توجهی کاهش دهید.",
      image: "/images/education/fuel-saving.jpg",
      category: "driving" as const,
      date: "۱۴۰۲/۱۰/۱۰",
      time: "۱۳:۳۰",
      views: 5750,
      readTime: "۷ دقیقه",
      level: "مبتدی"
    },
    {
      id: 7,
      title: "بررسی فنی سیستم ترمز ABS و نحوه عملکرد آن",
      summary: "با سیستم ترمز ضد قفل (ABS) آشنا شوید و بدانید چگونه در شرایط اضطراری به کمک شما می‌آید.",
      image: "/images/education/abs-system.jpg",
      category: "technical" as const,
      date: "۱۴۰۲/۱۰/۰۹",
      time: "۱۵:۲۰",
      views: 3320,
      readTime: "۹ دقیقه",
      level: "متوسط"
    },
    {
      id: 8,
      title: "نکات ضروری برای سفرهای جاده‌ای با موتورسیکلت",
      summary: "اگر قصد سفر جاده‌ای با موتورسیکلت دارید، این نکات ایمنی و آماده‌سازی را حتما مطالعه کنید.",
      image: "/images/education/motorcycle-trip.jpg",
      category: "motorcycle" as const,
      date: "۱۴۰۲/۱۰/۰۸",
      time: "۰۸:۴۵",
      views: 2870,
      readTime: "۶ دقیقه",
      level: "متوسط"
    }
  ];

  // محبوب‌ترین مطالب آموزشی (بر اساس بازدید)
  const popularEducation = [...educationData]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  // مدیریت تب فعال از روی URL
  useEffect(() => {
    const tabFromUrl = searchParams.get("category") || "all";
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  // تغییر تب و آپدیت URL
  const handleTabChange = (key: string) => {
    setActiveTab(key);
    router.push(`/education?category=${key}`, { scroll: false });
  };

  // فیلتر مطالب بر اساس تب فعال
  const filteredEducation =
    activeTab === "all"
      ? educationData
      : educationData.filter((item) => item.category === activeTab);

  // تب‌های آنت دیزاین
  const tabItems: TabsProps["items"] = [
    {
      key: "all",
      label: (
        <div className="flex items-center gap-2">
          <FaBook />
          <span>همه نکات آموزشی</span>
        </div>
      ),
    },
    {
      key: "maintenance",
      label: (
        <div className="flex items-center gap-2">
          <FaWrench />
          <span>نگهداری و سرویس</span>
        </div>
      ),
    },
    {
      key: "technical",
      label: (
        <div className="flex items-center gap-2">
          <FaCar />
          <span>مطالب فنی خودرو</span>
        </div>
      ),
    },
    {
      key: "motorcycle",
      label: (
        <div className="flex items-center gap-2">
          <FaMotorcycle />
          <span>نکات موتورسیکلت</span>
        </div>
      ),
    },
    {
      key: "driving",
      label: (
        <div className="flex items-center gap-2">
          <FaCar />
          <span>آموزش رانندگی</span>
        </div>
      ),
    },
  ];

  // تابع برای نمایش سطح سختی
  const getLevelBadge = (level: string) => {
    const colors: { [key: string]: string } = {
      "مبتدی": "bg-green-100 text-green-800",
      "متوسط": "bg-yellow-100 text-yellow-800",
      "حرفه‌ای": "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[level] || "bg-gray-100 text-gray-800"}`}>
        {level}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-8">
      <div className="mx-auto px-4">
        {/* هدر صفحه */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-[#ce1a2a]">آموزش و نکات فنی</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            جامع‌ترین منبع آموزشی برای نگهداری، تعمیر و رانندگی حرفه‌ای با خودرو و موتورسیکلت
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* محتوای اصلی - 3/4 صفحه */}
          <div className="lg:w-3/4 w-full">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* تب‌های آموزشی */}
              <div className="mb-6">
                <Tabs
                  activeKey={activeTab}
                  onChange={handleTabChange}
                  items={tabItems}
                  className="custom-education-tabs"
                  tabBarStyle={{ marginBottom: 0 }}
                />
              </div>

              {/* لیست مطالب آموزشی */}
              <div className="space-y-6">
                {filteredEducation.map((item) => (
                  <Link key={item.id} href={`/education/${item.id}`}>
                    <article className="py-6 border-b border-gray-200 last:border-b-0 last:pb-0 group hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* تصویر مطلب */}
                        <div className="md:w-48 w-full h-32 shrink-0">
                          <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden relative">
                            <Image
                              src={item.image || "/images/placeholder.jpg"}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* نشانگر سطح */}
                            <div className="absolute top-2 left-2">
                              {getLevelBadge(item.level)}
                            </div>
                          </div>
                        </div>

                        {/* محتوای مطلب */}
                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#ce1a2a] transition-colors cursor-pointer">
                            {item.title}
                          </h2>

                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {item.summary}
                          </p>

                          {/* متا اطلاعات */}
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                            <div className="flex items-center gap-1">
                              <FaCalendar />
                              <span>{item.date}</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <FaEye className="w-3 h-3" />
                              <span>{toPersianNumber(item.views)} بازدید</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <span>زمان مطالعه: {item.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* صفحه بندی */}
              <div className="p-3 flex justify-center items-center mt-6">
                <Pagination
                  total={filteredEducation.length}
                  showSizeChanger={false}
                  defaultPageSize={6}
                  defaultCurrent={1}
                  showTotal={(total, range) => 
                    `نمایش ${toPersianNumber(range[0])}-${toPersianNumber(range[1])} از ${toPersianNumber(total)} مطلب`
                  }
                />
              </div>
            </div>
          </div>

          {/* سایدبار - 1/4 صفحه */}
          <div className="lg:w-1/4 w-full">
            <div className="space-y-6">
              {/* محبوب‌ترین مطالب */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  پرطرفدارترین آموزش‌ها
                </h3>
                <div className="space-y-4">
                  {popularEducation.map((item) => (
                    <Link
                      key={item.id}
                      href={`/education/${item.id}`}
                      className="block group"
                    >
                      <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                        <div className="w-16 h-12 bg-gray-200 rounded shrink-0 overflow-hidden relative">
                          <Image
                            src={item.image || "/images/placeholder.jpg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight group-hover:text-[#ce1a2a] transition-colors line-clamp-2">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">
                              {toPersianNumber(item.views)}
                            </span>
                            <FaEye className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500 mr-2">
                              {getLevelBadge(item.level)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* دسته‌بندی‌ها */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  دسته‌بندی موضوعات
                </h3>
                <div className="space-y-2">
                  {tabItems.slice(1).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => handleTabChange(tab.key!)}
                      className={`w-full text-right p-3 rounded-lg transition-colors ${
                        activeTab === tab.key 
                          ? "bg-red-100 text-[#ce1a2a] font-semibold" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{tab.label}</span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                          {toPersianNumber(
                            educationData.filter(item => item.category === tab.key).length
                          )}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* استایل‌های سفارشی */}
      <style jsx global>{`
        .container {
          max-width: 1200px;
        }

        .custom-education-tabs .ant-tabs-nav {
          margin-bottom: 1rem;
        }
        .custom-education-tabs .ant-tabs-tab {
          padding: 0.4rem;
          user-select: none !important;
        }

        .custom-education-tabs .ant-tabs-ink-bar {
          background: transparent;
        }

        .custom-education-tabs .ant-tabs-tab-active {
          background: #ce1a2a;
          user-select: none !important;
        }
        .custom-education-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #fff !important;
          user-select: none !important;
          font-weight: 600;
        }

        .custom-education-tabs .ant-tabs-tab:hover {
          color: #fff !important;
          background: #ce1a2a;
          user-select: none !important;
          transition: 0.4s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EducationCar;