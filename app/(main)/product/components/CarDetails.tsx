"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// تابع تبدیل اعداد به فارسی
const toPersianNumber = (number: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { FaCalendarDays, FaCodeCompare, FaCommentDots } from "react-icons/fa6";

const CarDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const images = [
    "/images/gallery/image11.jpg",
    "/images/gallery/image11.jpg",
    "/images/gallery/image11.jpg",
    "/images/gallery/image11.jpg",
    "/images/gallery/image11.jpg",
  ];

  const specifications = [
    {
      icon: "/images/icons/speedometer-large.png",
      value: "۲۲۰ km/h",
      label: "حداکثر سرعت",
    },
    {
      icon: "/images/icons/fuel-large.png",
      value: "۱۳L/۱۰۰km",
      label: "مصرف سوخت",
    },
    {
      icon: "/images/icons/gearbox.png",
      value: "اتوماتیک 6سرعته دو کلاچه",
      label: "گیربکس",
    },
    {
      icon: "/images/icons/malfunction-indicador-large.png",
      value: "1476 cc",
      label: "حجم موتور",
    },
    {
      icon: "/images/icons/steering-wheel-large.png",
      value: "دیفرانسیل جلو",
      label: "انتقال نیرو",
    },
    {
      icon: "/images/icons/horse-power.png",
      value: "174/5500",
      label: "قدرت (اسب بخار / دور در دقیقه)",
    },
  ];

  const ratings = [
    { title: "ارزش خرید به نسبت قیمت", score: 9 },
    { title: "طراحی و ظاهر", score: 9 },
    { title: "امکانات و قابلیت ها", score: 7 },
  ];

  // Initialize Fancybox
  useEffect(() => {
    // Import fancybox CSS dynamically

    Fancybox.bind("[data-fancybox='gallery']", {
      // استفاده از تنظیمات معتبر Fancybox
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
      Thumbs: {
        type: "classic",
      },
      Images: {
        zoom: true,
      },
      Carousel: {
        infinite: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Increase z-index for fancybox
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .fancybox__container { 
        z-index: 999999 !important; 
      }
      .fancybox__backdrop {
        background: rgba(0, 0, 0, 0.8);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-5 bg-[#f4f4f4]">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Specifications */}
          <div className="lg:col-span-7">
            {/* Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white py-4 px-2 rounded-lg shadow-sm border border-gray-100 flex items-center"
                >
                  <div className="ml-3">
                    <Image
                      src={spec.icon}
                      alt={spec.label}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">
                      {spec.value}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {spec.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ratings */}
            <div className="bg-gray-50 py-3 rounded-lg flex md:flex-nowrap flex-wrap mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {ratings.map((rating, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                        {rating.title}
                      </span>
                      <span className="text-red-600 font-bold">
                        {toPersianNumber(rating.score)}/۱۰
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded-full ${
                            i < rating.score ? "bg-[#ce1a2a]" : "bg-[#e7abb1]"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-2 mr-2 bg-red-50 duration-300 rounded-lg text-[#ce1a2a] hover:bg-[#ce1a2a] hover:text-white transition-colors px-3 py-2 font-bold flex items-center justify-center mx-auto cursor-pointer whitespace-nowrap">
                <FaCommentDots className="ml-2" />
                نظر دادن
              </button>
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div className="lg:col-span-5 lg:-mt-[42%]">
            <div className="relative">
              {/* Quick Actions */}
              <div className="absolute left-full lg:translate-x-0 -translate-x-full top-0 mr-3 space-y-3 z-10 lg:z-0">
                {[
                  { icon: FaCodeCompare, text: "مقایسه کنید" },
                  { icon: FaStar, text: "امتیاز کاربران ۸ از ۱۰" },
                  { icon: FaCalendarDays, text: "سال ساخت 1400-1402" },
                ].map((action, index) => (
                  <div
                    key={index}
                    className="bg-[#ce1a2a] text-white px-4 py-2 text-xs text-center whitespace-nowrap"
                  >
                    <action.icon className="inline ml-1" />
                    {action.text}
                  </div>
                ))}
              </div>

              {/* Main Image Slider */}
              <div className="slider-productDetails h-full ">
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  speed={1700}
                  navigation={false}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper2 product-gallery-main"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <a
                        className="h-full block cursor-pointer"
                        href={image}
                        data-fancybox="gallery"
                        data-caption={`شاهین اتوماتیک ${index + 1}`}
                        aria-label="لینک گالری تصاویر"
                      >
                        <Image
                          className="w-full h-full border-4 border-[#ce1a2a]  object-cover"
                          src={image}
                          alt={`شاهین اتوماتیک ${index + 1}`}
                          width={600}
                          height={400}
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                        />
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnails Slider */}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  grabCursor={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper product-gallery-thumbs mt-3 !pb-10"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="cursor-pointer border-2 border-transparent overflow-hidden transition-all hover:!bg-[#ce1a2a] swiper-slide-thumb-active:border-red-600 z-50">
                        <Image
                          className="w-full h-full object-cover"
                          src={image}
                          alt={`شاهین اتوماتیک ${index + 1}`}
                          width={100}
                          height={75}
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .slider-productDetails {
          position: relative;
        }

        .product-gallery-main {
          overflow: hidden;
        }

        .product-gallery-thumbs {
          margin-top: 12px;
        }

        .product-gallery-thumbs .swiper-slide {
          opacity: 0.6;
          transition: opacity 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }

        .product-gallery-thumbs .swiper-slide-thumb-active {
          opacity: 1;
          border-color: #ce1a2a !important;
          background-color: #ce1a2a !important;
        }

        /* تنظیم سایز برای thumbnails */
        .product-gallery-thumbs .swiper-slide {
          width: 100px;
        }

        @media (max-width: 768px) {
          .product-gallery-thumbs .swiper-slide {
            width: 80px;
          }
        }

        @media (max-width: 480px) {
          .product-gallery-thumbs .swiper-slide {
            width: 70px;
          }
        }

        /* استایل‌های Swiper */
        .mySwiper2 {
          width: 100%;
        }

        .mySwiper {
          box-sizing: border-box;
          padding: 10px 0;
        }

        .mySwiper .swiper-slide {
          width: 25%;
          opacity: 0.4;
        }

        .mySwiper .swiper-slide-thumb-active {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .mySwiper2 {
          }

          .mySwiper {
          }
        }

        @media (max-width: 480px) {
          .mySwiper2 {
          }

          .mySwiper {
          }
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .specs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CarDetails;
