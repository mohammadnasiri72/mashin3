"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarSpec {
  icon: string;
  value: string;
  label: string;
}

interface CarItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  link: string;
  specs: CarSpec[];
}

interface CarSpecsSectionProps {
  cars?: CarItem[];
}

const CarSpecsSection = ({
  cars = [
    {
      id: 1,
      image: "/images/gallery/img1.jpg",
      alt: "زامیاد ۲۴",
      title: "زامیاد ۲۴",
      link: "#",
      specs: [
        {
          icon: "/images/icons/speedometer.png",
          value: "۲۲۰ km/h",
          label: "حداکثر سرعت",
        },
        {
          icon: "/images/icons/fuel.png",
          value: "۱۳L/۱۰۰km",
          label: "مصرف سوخت",
        },
        {
          icon: "/images/icons/malfunction-indicador.png",
          value: "1476 cc",
          label: "حجم موتور",
        },
        {
          icon: "/images/icons/steering-wheel.png",
          value: "دیفرانسیل جلو",
          label: "انتقال نیرو",
        },
      ],
    },
    {
      id: 2,
      image: "/images/gallery/img1.jpg",
      alt: "زامیاد ۲۴",
      title: "زامیاد ۲۴",
      link: "#",
      specs: [
        {
          icon: "/images/icons/speedometer.png",
          value: "۲۲۰ km/h",
          label: "حداکثر سرعت",
        },
        {
          icon: "/images/icons/fuel.png",
          value: "۱۳L/۱۰۰km",
          label: "مصرف سوخت",
        },
        {
          icon: "/images/icons/malfunction-indicador.png",
          value: "1476 cc",
          label: "حجم موتور",
        },
        {
          icon: "/images/icons/steering-wheel.png",
          value: "دیفرانسیل جلو",
          label: "انتقال نیرو",
        },
      ],
    },
    {
      id: 3,
      image: "/images/gallery/img2.jpg",
      alt: "Benz G-Class",
      title: "Benz G-Class",
      link: "#",
      specs: [
        {
          icon: "/images/icons/speedometer.png",
          value: "۲۲۰ km/h",
          label: "حداکثر سرعت",
        },
        {
          icon: "/images/icons/fuel.png",
          value: "۱۳L/۱۰۰km",
          label: "مصرف سوخت",
        },
        {
          icon: "/images/icons/malfunction-indicador.png",
          value: "1476 cc",
          label: "حجم موتور",
        },
        {
          icon: "/images/icons/steering-wheel.png",
          value: "دیفرانسیل جلو",
          label: "انتقال نیرو",
        },
      ],
    },
    {
      id: 4,
      image: "/images/gallery/img3.jpg",
      alt: "Chevrolet Camaro",
      title: "Chevrolet Camaro",
      link: "#",
      specs: [
        {
          icon: "/images/icons/speedometer.png",
          value: "۲۲۰ km/h",
          label: "حداکثر سرعت",
        },
        {
          icon: "/images/icons/fuel.png",
          value: "۱۳L/۱۰۰km",
          label: "مصرف سوخت",
        },
        {
          icon: "/images/icons/malfunction-indicador.png",
          value: "1476 cc",
          label: "حجم موتور",
        },
        {
          icon: "/images/icons/steering-wheel.png",
          value: "دیفرانسیل جلو",
          label: "انتقال نیرو",
        },
      ],
    },
    {
      id: 5,
      image: "/images/gallery/img1.jpg",
      alt: "زامیاد ۲۴",
      title: "زامیاد ۲۴",
      link: "#",
      specs: [
        {
          icon: "/images/icons/speedometer.png",
          value: "۲۲۰ km/h",
          label: "حداکثر سرعت",
        },
        {
          icon: "/images/icons/fuel.png",
          value: "۱۳L/۱۰۰km",
          label: "مصرف سوخت",
        },
        {
          icon: "/images/icons/malfunction-indicador.png",
          value: "1476 cc",
          label: "حجم موتور",
        },
        {
          icon: "/images/icons/steering-wheel.png",
          value: "دیفرانسیل جلو",
          label: "انتقال نیرو",
        },
      ],
    },
  ],
}: CarSpecsSectionProps) => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="bg-white mb-5 pt-8 mt-24 shadow-sm relative">
      <div className="mx-auto">
        {/* هدر بخش */}
        <div className="flex flex-col-reverse lg:flex-row items-start ">
          {/* بخش عنوان و لوگو - سمت راست */}
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start lg:pr-8 order-2 lg:order-1">
            <div className="relative w-full flex justify-start lg:justify-center">
              <div className="absolute -top-20 lg:-top-24">
                <Image
                  src="/images/gallery/gear.png"
                  alt="مشخصات فنی خودرو"
                  width={160}
                  height={160}
                  className="w-52 lg:w-40 h-auto"
                />
              </div>
            </div>

            <div className="sm:mt-0 lg:mt-32 mt-32 text-center lg:text-center w-full">
              <h3 className="text-gray-900 text-lg">
                ماشین
                <br />
                <strong className="text-2xl font-bold">
                  و <span className="text-red-600">مشخصات فنی</span> خودرو
                </strong>
              </h3>

              {/* دکمه‌های ناوبری زیر متن */}
              <div className="flex gap-2 justify-center lg:justify-center mt-6">
                <button
                  onClick={handleNext}
                  className="w-10 h-10 cursor-pointer bg-[#c2c2c2] rounded-full flex items-center justify-center hover:bg-[#ce1a2a] !text-white transition-colors"
                >
                  <FaArrowRightLong />
                </button>
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 cursor-pointer bg-[#c2c2c2] rounded-full flex items-center justify-center hover:bg-[#ce1a2a] !text-white transition-colors"
                >
                  <FaArrowLeftLong />
                </button>
              </div>
            </div>
          </div>

          {/* بخش اسلایدر - سمت چپ */}
          <div
            dir="rtl"
            className="w-full lg:w-3/4 mb-8 lg:mb-0 order-1 lg:order-2"
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Navigation]}
              spaceBetween={16}
              slidesPerView={1.2}
              initialSlide={0} // شروع از اسلاید اول
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2.2,
                },
                1024: {
                  slidesPerView: 3.2,
                },
                1280: {
                  slidesPerView: 3.4,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="car-specs-swiper"
            >
              {cars.map((car) => (
                <SwiperSlide key={car.id}>
                  <div className="bg-gray-100 rounded-2xl p-4 h-full">
                    {/* تصویر خودرو */}
                    <div className="relative rounded-xl overflow-hidden mb-3">
                      <Link href={car.link}>
                        <div className="aspect-[2/1] relative">
                          <Image
                            src={car.image}
                            alt={car.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <div className="absolute bottom-2 right-2">
                        <div className="!text-white inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ce1a2a]">
                          <h3 className="text-xl font-bold !text-white">
                            {car.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* مشخصات فنی */}
                    <div className="grid grid-cols-2 gap-2">
                      {car.specs.map((spec, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-white rounded-lg p-2"
                        >
                          <div className="ml-2 flex-shrink-0">
                            <Image
                              src={spec.icon}
                              alt={spec.label}
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="text-xs">
                            <div className="font-bold text-gray-900">
                              {spec.value}
                            </div>
                            <div className="text-gray-500 text-[10px] mt-1">
                              {spec.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* دکمه نمایش بیشتر */}
                    <Link
                      href={car.link}
                      className="flex items-center justify-center gap-1 text-center py-2 !text-[#ce1a2a]  text-sm mt-3 rounded-lg  hover:bg-[#ce1a2a] hover:!text-white transition-colors duration-300 font-medium"
                    >
                      <span>نمایش بیشتر</span>
                      <FaArrowLeftLong className="" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .car-specs-swiper {
          padding: 10px 5px 30px 5px;
        }

        .car-specs-swiper .swiper-slide {
          direction: rtl; /* محتوای داخل اسلاید RTL */
        }

        /* مخفی کردن دکمه‌های پیشفرض سوییپر */
        .car-specs-swiper .swiper-button-next,
        .car-specs-swiper .swiper-button-prev {
          display: none;
        }

        /* رفع مشکل نصفه نمایش اسلایدها */
        .car-specs-swiper .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </div>
  );
};

export default CarSpecsSection;
