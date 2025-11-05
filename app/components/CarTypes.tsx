"use client";

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
    <div className="mb-16 bg-cover bg-center">
      <div className=" mx-auto px-4 bg-position-[center_10px] typeCar_wrap ">
      
        <div className="!mb-2 p-3 sm:bg-transparent bg-[#f6eced] rounded-xl flex sm:justify-start justify-center items-center">
          <h3 className="!pb-0 !mb-0 !text-[#292929] !font-bold inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 sm:after:bg-[#ffd6db]">
            انتخاب نوع خودرو
          </h3>
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
