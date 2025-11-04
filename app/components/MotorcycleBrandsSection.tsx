"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MotorcycleBrand {
  id: number;
  image: string;
  alt: string;
  name: string;
}

interface MotorcyclePriceItem {
  id: number;
  brand: string;
  model: string;
  price: string;
  date: string;
  brandId: number;
}

interface MotorcycleBrandsSectionProps {
  brands?: MotorcycleBrand[];
  priceItems?: MotorcyclePriceItem[];
}

const MotorcycleBrandsSection = ({
  brands = [
    {
      id: 1,
      image: "/images/icons/logo-brand-1.png",
      alt: "آپریلیا",
      name: "آپریلیا",
    },
    {
      id: 2,
      image: "/images/icons/logo-brand-2.png",
      alt: "سوزوکی",
      name: "سوزوکی",
    },
    {
      id: 3,
      image: "/images/icons/logo-brand-3.png",
      alt: "باجاج",
      name: "باجاج",
    },
    {
      id: 4,
      image: "/images/icons/logo-brand-4.png",
      alt: "بنلی",
      name: "بنلی",
    },
    {
      id: 5,
      image: "/images/icons/logo-brand-5.png",
      alt: "کاوازاکی",
      name: "کاوازاکی",
    },
    {
      id: 6,
      image: "/images/icons/logo-brand-4.png",
      alt: "بنلی",
      name: "بنلی",
    },
  ],
}: MotorcycleBrandsSectionProps) => {
  const [activeBrand, setActiveBrand] = useState<number>(2);
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState<number>(5);
  const swiperRef = useRef<any>(null);

  // محاسبه تعداد گروه‌ها بر اساس تعداد برندها و اسلایدهای نمایش داده شده
  const totalGroups = Math.ceil(brands.length / currentSlidesPerView);

  const handleBrandClick = (brandId: number) => {
    setActiveBrand(brandId);
  };

  const handleGroupClick = (groupIndex: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const targetSlide = groupIndex * currentSlidesPerView;
      swiperRef.current.swiper.slideTo(targetSlide);
      setCurrentGroup(groupIndex);
    }
  };

  const handleSlideChange = (swiper: any) => {
    const realIndex = swiper.realIndex || swiper.activeIndex;
    const newGroup = Math.floor(realIndex / currentSlidesPerView);
    setCurrentGroup(newGroup);
  };

  const handleBreakpointChange = (swiper: any) => {
    // به‌روزرسانی تعداد اسلایدهای نمایش داده شده هنگام تغییر breakpoint
    const slidesPerView = swiper.params.slidesPerView;
    setCurrentSlidesPerView(slidesPerView);

    // محاسبه مجدد گروه فعلی
    const realIndex = swiper.realIndex || swiper.activeIndex;
    const newGroup = Math.floor(realIndex / slidesPerView);
    setCurrentGroup(newGroup);
  };

  // مقداردهی اولیه slidesPerView
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const initialSlidesPerView =
        swiperRef.current.swiper.params.slidesPerView;
      setCurrentSlidesPerView(initialSlidesPerView);
    }
  }, []);

  return (
    <div>
      <div className="mx-auto px-4 pb-5">
        {/* هدر بخش */}
        <div className="flex justify-between items-center">
          <div className="titleBox pink_Highlight">
            <h3 className="!text-[#292929] inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ffd6db]">
              موتورسیکلت
            </h3>
          </div>

          {/* Pagination گروهی پویا */}
          <div className="sm:flex hidden justify-end gap-1">
            {Array.from({ length: totalGroups }, (_, index) => (
              <button
                key={index}
                className={`custom-group-bullet ${
                  currentGroup === index ? "custom-group-bullet-active" : ""
                }`}
                onClick={() => handleGroupClick(index)}
                aria-label={`گروه ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center ">
          <div className="w-full lg:w-1/3 flex items-center justify-center pt-5">
            <img
              src="/images/gallery/motorcycle.png"
              alt="موتورسیکلت"
              className="w-80"
            />
          </div>
          <div className="w-full lg:w-2/3">
            {/* اسلایدر برندهای موتورسیکلت */}
            <div className="relative">
               {/* Pagination گروهی پویا */}
          <div className="sm:hidden flex justify-end gap-1 pb-4">
            {Array.from({ length: totalGroups }, (_, index) => (
              <button
                key={index}
                className={`custom-group-bullet ${
                  currentGroup === index ? "custom-group-bullet-active" : ""
                }`}
                onClick={() => handleGroupClick(index)}
                aria-label={`گروه ${index + 1}`}
              />
            ))}
          </div>
              <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                spaceBetween={28}
                slidesPerView={5}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 28,
                  },
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={handleSlideChange}
                onBreakpoint={handleBreakpointChange}
                className="motorcycle-brands-swiper"
                dir="rtl"
              >
                {brands.map((brand) => (
                  <SwiperSlide key={brand.id}>
                    <div
                      className={`brand-box flex flex-col items-center justify-between text-center p-5 !h-52 border border-gray-200 rounded-2xl relative bg-white cursor-pointer transition-all duration-300 hover:shadow-md hover:border-gray-300 `}
                      onClick={() => handleBrandClick(brand.id)}
                    >
                      <div className="w-full h-28 flex items-start justify-center">
                        <div className="h-20 flex items-center justify-center">
                          <Image
                            src={brand.image}
                            alt={brand.alt}
                            width={150}
                            height={150}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <h4
                        className={`text-sm font-bold absolute bottom-5 left-0 right-0 text-center !text-[#656565] `}
                      >
                        {brand.name}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .motorcycle-brands-swiper {
          padding: 0px 0px;
          margin: 0 5px;
        }

        .motorcycle-brands-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .motorcycle-brands-swiper .swiper-slide {
          height: auto;
        }

        .brand-box {
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .brand-box:hover {
          transform: translateY(-4px);
        }

        /* استایل‌های سفارشی برای Pagination گروهی */
        .custom-group-bullet {
          width: 8px;
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 2px;
          cursor: pointer;
          transition: all 300ms ease;
          border: none;
          outline: none;
        }

        .custom-group-bullet-active {
          background-color: #ce1a2a;
          width: 40px;
          border-radius: 2px;
        }

        .custom-group-bullet:hover {
          background-color: #ce1a2a;
          opacity: 0.7;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .motorcycle-brands-swiper {
            padding: 0px;
          }

          .custom-group-bullet {
            width: 6px;
            height: 6px;
          }

          .custom-group-bullet-active {
            width: 18px;
          }
        }

        @media (max-width: 480px) {
          .custom-group-bullet {
            width: 4px;
            height: 4px;
          }

          .custom-group-bullet-active {
            width: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default MotorcycleBrandsSection;
