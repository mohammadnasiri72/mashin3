"use client";

import type { TabsProps } from "antd";
import { Pagination, Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCalendar, FaEye } from "react-icons/fa";
import MarketStats from "../../carsbranding/componnents/MarketStats";
import NewsBlogForm from "../../carsbranding/componnents/NewsBlogForm";

// تابع تبدیل اعداد به فارسی
const toPersianNumber = (number: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const CarNews = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("all");

  // داده‌های اخبار
  const newsData = [
    {
      id: 1,
      title: "قیمت جدید شاهین پلاس در بازار اعلام شد",
      summary:
        "قیمت خودروی شاهین پلاس در بازار با افزایش ۲.۳ درصدی نسبت به هفته گذشته مواجه شده است.",
      image: "/images/gallery/shahin-plus.jpg",
      category: "market" as const,
      date: "۱۴۰۲/۱۰/۱۵",
      time: "۱۰:۳۰",
      views: 1250,
      readTime: "۳ دقیقه",
    },
    {
      id: 2,
      title: "شرایط پیش‌فروش جدید ایران خودرو برای نیمه دوم سال",
      summary:
        "ایران خودرو شرایط پیش‌فروش جدیدی برای محصولات خود در نیمه دوم سال ۱۴۰۲ اعلام کرد.",
      image: "/images/gallery/shahin-plus.jpg",
      category: "presale" as const,
      date: "۱۴۰۲/۱۰/۱۴",
      time: "۱۴:۲۰",
      views: 890,
      readTime: "۵ دقیقه",
    },
    {
      id: 3,
      title: "بررسی فنی شاهین پلاس؛ نقاط قوت و ضعف",
      summary:
        "در این بررسی فنی به نقاط قوت و ضعف خودروی شاهین پلاس می‌پردازیم.",
      image: "/images/gallery/shahin-plus.jpg",
      category: "review" as const,
      date: "۱۴۰۲/۱۰/۱۳",
      time: "۰۹:۱۵",
      views: 2100,
      readTime: "۸ دقیقه",
    },
    {
      id: 4,
      title: "تست ایمنی تارا پلاس با نتایج قابل توجه",
      summary:
        "تست ایمنی خودروی تارا پلاس نتایج بسیار خوبی را به همراه داشته است.",
      image: "/images/gallery/shahin-plus.jpg",
      category: "test" as const,
      date: "۱۴۰۲/۱۰/۱۲",
      time: "۱۶:۴۵",
      views: 1560,
      readTime: "۶ دقیقه",
    },
    {
      id: 5,
      title: "آغاز فروش فوق العاده سایپا در نمایشگاه تهران",
      summary:
        "شرکت سایپا فروش فوق‌العاده‌ای را در نمایشگاه بین‌المللی تهران آغاز کرد.",
      image: "/images/gallery/shahin-plus.jpg",
      category: "sale" as const,
      date: "۱۴۰۲/۱۰/۱۱",
      time: "۱۱:۱۰",
      views: 980,
      readTime: "۴ دقیقه",
    },
    {
      id: 6,
      title: "جدیدترین آگهی‌های خودرو در بازار",
      summary: "مروری بر جدیدترین آگهی‌های خودرو در بازار و قیمت‌های روز.",
      image: "/images/gallery/shahin-plus.jpg",
      category: "ads" as const,
      date: "۱۴۰۲/۱۰/۱۰",
      time: "۱۳:۳۰",
      views: 750,
      readTime: "۳ دقیقه",
    },
  ];

  // محبوب‌ترین اخبار (بر اساس بازدید)
  const popularNews = [...newsData]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  // مدیریت تب فعال از روی URL
  useEffect(() => {
    const tabFromUrl = searchParams.get("subject") || "all";
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  // تغییر تب و آپدیت URL
  const handleTabChange = (key: string) => {
    setActiveTab(key);
    router.push(`/news?subject=${key}`, { scroll: false });
  };

  // فیلتر اخبار بر اساس تب فعال
  const filteredNews =
    activeTab === "all"
      ? newsData
      : newsData.filter((news) => news.category === activeTab);

  // تب‌های آنت دیزاین
  const tabItems: TabsProps["items"] = [
    {
      key: "all",
      label: "همه اخبار خودرو",
    },
    {
      key: "sale",
      label: "شرایط فروش",
    },
    {
      key: "presale",
      label: "پیش فروش خودرو",
    },
    {
      key: "market",
      label: "اخبار بازار خودرو",
    },
    {
      key: "test",
      label: "تست خودرو",
    },
    {
      key: "review",
      label: "بررسی خودرو",
    },
    {
      key: "ads",
      label: "آگهی",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-8">
      <div className="mx-auto px-4">
        {/* هدر صفحه */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">اخبار خودرو</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            آخرین اخبار و تحلیل‌های بازار خودرو ایران
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* محتوای اصلی - 3/4 صفحه */}
          <div className="lg:w-3/4 w-full">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* تب‌های اخبار */}
              <div className="mb-6">
                <Tabs
                  activeKey={activeTab}
                  onChange={handleTabChange}
                  items={tabItems}
                  className="custom-news-tabs"
                  tabBarStyle={{ marginBottom: 0 }}
                />
              </div>

              {/* لیست اخبار */}
              <div className="space-y-6">
                {filteredNews.map((news) => (
                  <Link key={news.id} href={"#"}>
                    <article className="py-6! border-b! border-gray-200 last:border-b-0 last:pb-0 group">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* تصویر خبر */}
                        <div className="md:w-48 w-full h-32 shrink-0">
                          <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden relative">
                            <Image
                              src={news.image}
                              alt={news.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* محتوای خبر */}
                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors cursor-pointer">
                            {news.title}
                          </h2>

                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {news.summary}
                          </p>

                          {/* متا اطلاعات */}
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                            <div className="flex items-center gap-1">
                              <FaCalendar />
                              <span>{news.date}</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <FaEye className="w-3 h-3" />
                              <span>{toPersianNumber(news.views)} بازدید</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* صفحه بندی */}
              <div className="p-3 flex justify-center items-center">
                <Pagination
                  total={100}
                  showSizeChanger={false}
                  //   showTotal={(total) => `Total ${total} items`}
                  defaultPageSize={20}
                  defaultCurrent={1}
                />
              </div>
            </div>
          </div>

          {/* سایدبار - 1/4 صفحه */}
          <div className="lg:w-1/4 w-full">
            <div className="space-y-6">
              {/* محبوب‌ترین اخبار */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4! border-b pb-2">
                  محبوب‌ترین اخبار
                </h3>
                <div className="space-y-4">
                  {popularNews.map((news) => (
                    <Link
                      key={news.id}
                      href={`/news/${news.id}`}
                      className="block group"
                    >
                      <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#ce1a2a] hover:text-white! transition-colors">
                        <div className="w-16 h-12 bg-gray-200 rounded shrink-0 overflow-hidden">
                          <Image
                            src={news.image}
                            alt={news.title}
                            width={64}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight group-hover:!text-white transition-colors line-clamp-2">
                            {news.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 ">
                            <span className="text-xs text-gray-500 group-hover:!text-white">
                              {toPersianNumber(news.views)}
                            </span>
                            <FaEye className="w-3 h-3 text-gray-400 group-hover:!text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* آمار بازار */}
              <MarketStats />

              {/* خبرنامه */}
              <NewsBlogForm />
            </div>
          </div>
        </div>
      </div>

      {/* استایل‌های سفارشی */}
      <style jsx global>{`
        .container {
          max-width: 1200px;
        }

        .custom-news-tabs .ant-tabs-nav {
          margin-bottom: 1rem;
        }
        .custom-news-tabs .ant-tabs-tab {
          padding: 0.4rem;
          user-select: none !important;
        }

        .custom-news-tabs .ant-tabs-ink-bar {
          background: transparent;
        }

        .custom-news-tabs .ant-tabs-tab-active {
          background: #ce1a2a;
          user-select: none !important;
        }
        .custom-news-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #fff !important;
          user-select: none !important;
          font-weight: 600;
        }

        .custom-news-tabs .ant-tabs-tab:hover {
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

export default CarNews;
