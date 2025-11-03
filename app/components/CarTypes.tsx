"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const carTypes = [
  { name: "luxury", label: "luxury", image: "/images/gallery/luxury-car.png" },
  { name: "sedan", label: "sedan", image: "/images/gallery/sedan-car.png" },
  { name: "truck", label: "truck", image: "/images/gallery/truck.png" },
  {
    name: "convertible",
    label: "convertible",
    image: "/images/gallery/convertiibel-car.png",
  },
  { name: "hybrid", label: "hybrid", image: "/images/gallery/hybrid-car.png" },
  { name: "suv", label: "suv", image: "/images/gallery/suv-car.png" },
];

export default function CarTypes() {
  return (
    <div className="mb-16  bg-cover bg-center">
      <div className=" mx-auto px-4 typeCar_wrap">
        <div className="section_title mb-10">
          <div className="titleBox pink_Highlight">
            <h3 className="!text-[#292929] inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ffd6db]">
              انتخاب نوع خودرو
            </h3>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="carType_slider"
        >
          {carTypes.map((car) => (
            <SwiperSlide key={car.name}>
              <div className="type_box text-center group">
                <Link href="#" className="flex flex-col items-center">
                  <div className=" p-2 duration-300">
                    <div className="">
                      <img
                        src={car.image}
                        alt={car.label}
                        
                        className="mx-auto object-contain"
                      />
                    </div>
                  </div>
                </Link>
                  <div className="text-gray-800 font-semibold group-hover:text-red-600">
                    {car.label}
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
