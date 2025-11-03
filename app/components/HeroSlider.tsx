"use client";

import { Button } from "antd";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/images/gallery/main-slider-1.jpg",
    title: "واردات غول ژاپنی به ایران",
    buttonText: "نمایش بیشتر",
  },
  {
    id: 2,
    image: "/images/gallery/main-slider-1.jpg",
    title: "واردات غول ژاپنی به ایران",
    buttonText: "نمایش بیشتر",
  },
  {
    id: 3,
    image: "/images/gallery/main-slider-1.jpg",
    title: "واردات غول ژاپنی به ایران",
    buttonText: "نمایش بیشتر",
  },
];

export default function HeroSlider() {
  return (
    <div className="mb-8">
      <div className="container mx-auto px-4">
        <div className="main-slider rounded-2xl overflow-hidden relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            speed={1000}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-[400px] md:h-[400px] rounded-2xl"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full bg-amber-700">
                  <img
                    src="/images/gallery/main-slider-1.jpg"
                    alt={slide.title}
                    className="object-cover h-full"
                  />

                  {/* Content Overlay */}
                  <div className="absolute sm:right-8 right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="bg-[#e72b3bd3] !bg-opacity-50 p-6  rounded-2xl max-w-56 !backdrop-blur-sm">
                      <div className="inner-content">
                        <h2 className="!text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                          {slide.title}
                        </h2>
                        <Button
                          type="primary"
                          size="middle"
                          className="!bg-white !text-red-600 border-none font-semibold h-12 px-6 mt-2 hover:!bg-yellow-600 hover:!text-white"
                        >
                          {slide.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
