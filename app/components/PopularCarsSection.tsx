"use client";

import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  link: string;
}

interface PopularCarsSectionProps {
  cars?: CarItem[];
}

const PopularCarsSection = ({
  cars = [
    {
      id: 1,
      image: "/images/gallery/auto-1.jpg",
      alt: "L-90",
      title: "L-90",
      link: "#",
    },
    {
      id: 2,
      image: "/images/gallery/auto-2.jpg",
      alt: "C200",
      title: "C200",
      link: "#",
    },
    {
      id: 3,
      image: "/images/gallery/auto-3.jpg",
      alt: "L-NX",
      title: "L-NX",
      link: "#",
    },
    {
      id: 4,
      image: "/images/gallery/auto-4.jpg",
      alt: "405 GLX",
      title: "405 GLX",
      link: "#",
    },
    {
      id: 5,
      image: "/images/gallery/auto-5.jpg",
      alt: "207",
      title: "207",
      link: "#",
    },
    {
      id: 6,
      image: "/images/gallery/auto-6.jpg",
      alt: "land crose",
      title: "land crose",
      link: "#",
    },
    {
      id: 7,
      image: "/images/gallery/auto-6.jpg",
      alt: "land crose",
      title: "land crose",
      link: "#",
    },
  ],
}: PopularCarsSectionProps) => {
  return (
    <div className="mb-5">
      <div className="mx-auto px-4">
        {/* هدر بخش */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          
           <div className="titleBox pink_Highlight">
            <h3 className="!text-[#292929] !font-bold inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ffd6db]">
               پربازدید ترین خودرو ها
            </h3>
          </div>

          <Link
            href="#"
            className="!text-[#ce1a2a] text-sm flex items-center gap-1"
          >
            نمایش بیشتر
            <FaArrowLeftLong />
          </Link>
        </div>

        {/* اسلایدر خودروها */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.5}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 5,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 6,
              centeredSlides: false,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="popular-cars-swiper"
          dir="rtl"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <Link href={car.link}>
                <div className="overflow-hidden rounded-2xl group h-40 relative">
                  <div className="relative aspect-4/3 w-full h-full">
                    <img
                      src={car.image}
                      alt={car.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Shadow Overlay */}
                  <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-t from-black to-transparent opacity-100 group-hover:h-full duration-300" />

                  {/* عنوان خودرو */}
                  <h4 className="absolute flex justify-end pl-3.5 group-hover:pl-6 duration-300 w-full bottom-10 left-0 !text-white font-bold text-sm">
                    {car.title}
                  </h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .popular-cars-swiper {
          padding: 10px 5px 30px 5px;
        }

        .popular-cars-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .auto-box {
          transition: all 0.3s ease;
        }

        .auto-box:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
};

export default PopularCarsSection;
