"use client";


import Link from "next/link";
import { FaSearch, FaStar } from "react-icons/fa";
import MarketStats from "./MarketStats";
import NewsBlogForm from "./NewsBlogForm";

// تابع تبدیل اعداد به فارسی
const toPersianNumber = (number: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const CarBrands = () => {
 

  // داده‌های برندهای خودرو
  const carBrands = [
    {
      id: 1,
      name: "بنز",
      logo: "/images/gallery/benz.png",
      models: 18,
      rating: 4.6,
      link: "/cars/toyota",
    },
    {
      id: 2,
      name: "ام وی ام",
      logo: "/images/gallery/mvm.png",
      models: 6,
      rating: 3.5,
      link: "/cars/mvm",
    },
    {
      id: 3,
      name: "پاگانی",
      logo: "/images/gallery/pagani.png",
      models: 9,
      rating: 4.0,
      link: "/cars/renault",
    },
    {
      id: 4,
      name: "تویوتا",
      logo: "/images/gallery/toyota.png",
      models: 11,
      rating: 4.1,
      link: "/cars/peugeot",
    },
    {
      id: 5,
      name: "پورشه",
      logo: "/images/gallery/porsche.png",
      models: 20,
      rating: 4.8,
      link: "/cars/mercedes",
    },
    {
      id: 6,
      name: "جیپ",
      logo: "/images/gallery/jeep.png",
      models: 16,
      rating: 4.7,
      link: "/cars/bmw",
    },
    {
      id: 7,
      name: "فورد",
      logo: "/images/gallery/ford.png",
      models: 7,
      rating: 4.2,
      link: "/cars/geely",
    },
  ];

  // محتوای سایدبار
  const popularCars = [
    {
      id: 1,
      name: "شاهین پلاس",
      brand: "ایران خودرو",
      image: "/images/gallery/shahin-plus.jpg",
      price: "۱,۲۹۰,۰۰۰,۰۰۰ تومان",
      link: "#",
    },
    {
      id: 2,
      name: "تارا پلاس",
      brand: "ایران خودرو",
      image: "/images/gallery/shahin-plus.jpg",
      price: "۱,۴۵۰,۰۰۰,۰۰۰ تومان",
      link: "#",
    },
    {
      id: 3,
      name: "تیگو ۷ پرو",
      brand: "چری",
      image: "/images/gallery/shahin-plus.jpg",
      price: "۱,۸۲۰,۰۰۰,۰۰۰ تومان",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-8">
      <div className="mx-auto px-4">
        {/* هدر صفحه */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
            <span className="text-red-600">برندهای خودرو</span> در بازار ایران
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            بررسی کامل تمامی برندهای خودروی موجود در بازار ایران با جزئیات فنی،
            قیمت و نظرات کاربران
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* محتوای اصلی - 3/4 صفحه */}
          <div className="lg:w-3/4 w-full">
            {/* جستجو */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجوی برند خودرو..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            </div>

            {/* گرید برندها */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {carBrands.map((brand) => (
                <Link key={brand.id} href={brand.link} className="group block">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-red-200">
                    {/* لوگو و نام برند */}
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-20 h-20 overflow-hidden flex items-center justify-center">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="object-contain"
                        />
                      </div>

                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {brand.name}
                      </h3>
                    </div>

                    {/* اطلاعات آماری */}
                    <div className="space-y-3">
                      {/* رتبه‌بندی */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">امتیاز:</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-bold text-gray-900">
                            {brand.rating.toFixed(1)}
                          </span>
                          <FaStar className="text-yellow-400 text-sm" />
                        </div>
                      </div>

                      {/* تعداد مدل‌ها */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">مدل‌ها:</span>
                        <span className="text-sm font-bold text-gray-900">
                          {toPersianNumber(brand.models)} مدل
                        </span>
                      </div>

                      {/* وضعیت */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">وضعیت:</span>
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          فعال
                        </span>
                      </div>
                    </div>

                    {/* دکمه مشاهده */}
                    <button className="w-full mt-4 cursor-pointer whitespace-nowrap bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                      مشاهده مدل‌ها
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* سایدبار - 1/4 صفحه */}
          <div className="lg:w-1/4 w-full">
            <div className="space-y-6">
              {/* محبوب ترین خودروهای بازار */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  محبوب ترین خودروهای بازار
                </h3>
                <div className="space-y-4">
                  {popularCars.map((car) => (
                    <Link key={car.id} href={car.link} className="block group">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-16 h-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                            {car.name}
                          </h4>
                          <p className="text-xs text-gray-500">{car.brand}</p>
                          <p className="text-xs font-bold text-red-600 mt-1">
                            {car.price}
                          </p>
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

        @media (max-width: 1024px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        .custom-market-tabs .ant-tabs-nav {
          margin: 0;
        }

        .custom-market-tabs .ant-tabs-tab {
          padding: 8px 4px !important;
          margin: 0 2px !important;
        }

        .custom-market-tabs .ant-tabs-tab-btn {
          font-size: 12px;
          padding: 0 8px;
        }

        .custom-market-tabs .ant-tabs-ink-bar {
          background: #ce1a2a;
        }

        .custom-market-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #ce1a2a !important;
          font-weight: 600;
        }

        .custom-market-tabs .ant-tabs-tab:hover {
          color: #ce1a2a !important;
        }

        /* اسکرول بار سفارشی */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </div>
  );
};

export default CarBrands;
