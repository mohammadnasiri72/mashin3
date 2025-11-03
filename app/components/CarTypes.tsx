'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css'

const carTypes = [
  { name: 'luxury', label: 'لوکس', image: '/images/gallery/luxury-car.png' },
  { name: 'sedan', label: 'سدان', image: '/images/gallery/sedan-car.png' },
  { name: 'truck', label: 'کامیون', image: '/images/gallery/truck.png' },
  { name: 'convertible', label: 'کابریولت', image: '/images/gallery/convertiibel-car.png' },
  { name: 'hybrid', label: 'هایبرید', image: '/images/gallery/hybrid-car.png' },
  { name: 'suv', label: 'شاسی بلند', image: '/images/gallery/suv-car.png' },
]

export default function CarTypes() {
  return (
    <div className="mb-16 typeCar_wrap bg-cover bg-center py-12" 
         style={{ backgroundImage: "url('/images/gallery/bg00.png')" }}>
      <div className="container mx-auto px-4">
        <div className="section_title mb-10">
          <div className="titleBox pink_Highlight">
            <h3 className="text-2xl font-bold">انتخاب نوع خودرو</h3>
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
                <Link href="#" className="block">
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="mb-4">
                      <Image
                        src={car.image}
                        alt={car.label}
                        width={80}
                        height={80}
                        className="mx-auto group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h4 className="text-gray-800 font-semibold group-hover:text-red-600 transition-colors">
                      {car.label}
                    </h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}