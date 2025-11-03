'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import 'swiper/css'
import 'swiper/css/navigation'

const popularCars = [
  { name: 'L-90', image: '/images/gallery/auto-1.jpg' },
  { name: 'C200', image: '/images/gallery/auto-2.jpg' },
  { name: 'L-NX', image: '/images/gallery/auto-3.jpg' },
  { name: '405 GLX', image: '/images/gallery/auto-4.jpg' },
  { name: '207', image: '/images/gallery/auto-5.jpg' },
  { name: 'land crose', image: '/images/gallery/auto-6.jpg' },
]

export default function PopularCars() {
  return (
    <div className="mb-16">
      <div className="container mx-auto px-4">
        <div className="section_title mb-8">
          <div className="titleBox pink_Highlight">
            <h3 className="text-2xl font-bold">پربازدید ترین خودرو ها</h3>
          </div>
          <Button 
            type="link" 
            className="viewMore text-red-600 font-semibold hover:text-red-700"
            icon={<ArrowLeftOutlined />}
          >
            نمایش بیشتر
          </Button>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={true}
          loop={true}
          className="mview_slider"
        >
          {popularCars.map((car, index) => (
            <SwiperSlide key={index}>
              <Link href="#">
                <div className="auto_box rounded-2xl overflow-hidden relative group cursor-pointer">
                  <div className="relative h-40 md:h-48 overflow-hidden rounded-2xl">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg text-center">
                        {car.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}