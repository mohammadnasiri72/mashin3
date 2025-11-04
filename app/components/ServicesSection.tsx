"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ServiceItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  step: number;
}

interface ServicesSectionProps {
  services?: ServiceItem[];
}

const ServicesSection = ({
  services = [
    {
      id: 1,
      image: "/images/gallery/service-1.jpg",
      alt: "کارواش در محل",
      title: "کارواش در محل",
      step: 1,
    },
    {
      id: 2,
      image: "/images/gallery/service-2.jpg",
      alt: "تعویض روغن",
      title: "تعویض روغن",
      step: 2,
    },
    {
      id: 3,
      image: "/images/gallery/service-3.jpg",
      alt: "شرکت های خودرویی",
      title: "شرکت های خودرویی",
      step: 3,
    },
    {
      id: 4,
      image: "/images/gallery/service-4.jpg",
      alt: "اپلیکیشن خودرو",
      title: "اپلیکیشن خودرو",
      step: 4,
    },
    {
      id: 5,
      image: "/images/gallery/service-1.jpg",
      alt: "کارواش در محل",
      title: "کارواش در محل",
      step: 1,
    },
  ],
}: ServicesSectionProps) => {
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState<number>(4);
  const swiperRef = useRef<any>(null);

  // محاسبه تعداد گروه‌ها بر اساس تعداد خدمات و اسلایدهای نمایش داده شده
  const totalGroups = Math.ceil(services.length / currentSlidesPerView);

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
    const slidesPerView = swiper.params.slidesPerView;
    setCurrentSlidesPerView(slidesPerView);

    const realIndex = swiper.realIndex || swiper.activeIndex;
    const newGroup = Math.floor(realIndex / slidesPerView);
    setCurrentGroup(newGroup);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const initialSlidesPerView =
        swiperRef.current.swiper.params.slidesPerView;
      setCurrentSlidesPerView(initialSlidesPerView);
    }
  }, []);

  return (
    <div className="mb-5 pt-3 pb-3">
      <div className="mx-auto px-4">
        {/* هدر بخش */}
        <div className="flex flex-wrap justify-between items-center mb-5 gap-4">
          <div className="titleBox pink_Highlight">
            <h3 className="!text-[#292929] !font-bold inline-block relative pl-2.5 text-[22px] z-10">
              خدمات
              <span className="text-[#ce1a2a]"> ماشین3 </span>
              <div className="absolute right-0 left-0 bottom-0 h-1/2 bg-[#ffd6db] -z-10" />
            </h3>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalGroups }, (_, index) => (
              <button
                key={index}
                className={`custom-pagination-bullet ${
                  currentGroup === index
                    ? "custom-pagination-bullet-active"
                    : ""
                }`}
                onClick={() => handleGroupClick(index)}
                aria-label={`صفحه ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* اسلایدر خدمات */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={handleSlideChange}
          onBreakpoint={handleBreakpointChange}
          className="services-swiper"
          dir="rtl"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-box overflow-hidden rounded-2xl !h-64 rounded-br-none relative group cursor-pointer bg-amber-400">
                {/* بخش تصویر */}
                <div className="img-box relative overflow-hidden !h-64">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="w-full !h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Shadow Overlay */}
                  <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* عنوان خدمت */}
                <h3 className="absolute bottom-10 right-14 !text-white text-xl font-black z-10">
                  {service.title}
                </h3>

                {/* شماره مرحله */}
                <div className="step-level absolute bottom-0 right-0 bg-gray-100 p-3 rounded-tl-2xl">
                  <span className="w-8 h-8 bg-[#ce1a2a] !text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {service.step}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .services-swiper {
          padding: 10px 5px 10px 5px;
        }

        .services-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .service-box {
          height: 100%;
          transition: all 0.3s ease;
        }

        .service-box:hover {
          transform: translateY(-4px);
        }

        /* استایل‌های سفارشی برای Pagination */
        .custom-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 2px;
          cursor: pointer;
          transition: all 300ms ease;
          border: none;
          outline: none;
        }

        .custom-pagination-bullet-active {
          background-color: #ce1a2a;
          width: 40px;
          border-radius: 2px;
        }

        .custom-pagination-bullet:hover {
          background-color: #ce1a2a;
          opacity: 0.7;
        }

        /* انیمیشن hover برای سایه */
        .img-box::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 0;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          bottom: 0;
          right: 0;
          transition: all 0.3s ease;
        }

        .service-box:hover .img-box::after {
          height: 100%;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .services-swiper {
            padding: 5px;
          }

          .custom-pagination-bullet {
            width: 6px;
            height: 6px;
          }

          .custom-pagination-bullet-active {
            width: 18px;
          }

          .service-box h3 {
            font-size: 18px;
            right: 12px;
            bottom: 12px;
          }

          .step-level {
            padding: 2px;
          }

          .step-level span {
            width: 6px;
            height: 6px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .custom-pagination-bullet {
            width: 4px;
            height: 4px;
          }

          .custom-pagination-bullet-active {
            width: 12px;
          }

          .service-box h3 {
            font-size: 16px;
            right: 10px;
            bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;
