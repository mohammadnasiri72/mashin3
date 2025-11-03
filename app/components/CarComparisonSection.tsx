"use client";

import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ComparisonItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  link: string;
}

interface CarComparisonSectionProps {
  comparisons?: ComparisonItem[];
}

const CarComparisonSection = ({
  comparisons = [
    {
      id: 1,
      image: "/images/gallery/vs1.jpg",
      alt: "مقایسه سایپا شاهین با پژو 207i",
      title: "مقایسه سایپا شاهین با پژو 207i",
      link: "#",
    },
    {
      id: 2,
      image: "/images/gallery/vs2.jpg",
      alt: "مقایسه فیدلیتی و مزدا 3",
      title: "مقایسه فیدلیتی و مزدا 3",
      link: "#",
    },
    {
      id: 3,
      image: "/images/gallery/vs3.jpg",
      alt: "مقایسه جک S5 فیس لیفت با یواز پاتریوت",
      title: "مقایسه جک S5 فیس لیفت با یواز پاتریوت",
      link: "#",
    },
    {
      id: 4,
      image: "/images/gallery/vs4.jpg",
      alt: "مقایسه سایپا شاهین با پژو 207i",
      title: "مقایسه سایپا شاهین با پژو 207i",
      link: "#",
    },
    {
      id: 5,
      image: "/images/gallery/vs4.jpg",
      alt: "مقایسه سایپا شاهین با پژو 207i",
      title: "مقایسه سایپا شاهین با پژو 207i",
      link: "#",
    },
  ],
}: CarComparisonSectionProps) => {
  const [firstCarType, setFirstCarType] = useState("type_option-0");
  const [firstCarModel, setFirstCarModel] = useState("type_option-0");
  const [secondCarType, setSecondCarType] = useState("type_option-0");
  const [secondCarModel, setSecondCarModel] = useState("type_option-0");

  const handleCompare = () => {
    // منطق مقایسه خودروها
    console.log("مقایسه خودروها:", {
      firstCarType,
      firstCarModel,
      secondCarType,
      secondCarModel,
    });
  };

  return (
    <div className="py-3">
      <div className="mx-auto">
        {/* عنوان اصلی */}
        <h3 className="text-center text-2xl text-gray-900 font-bold !mb-4">
          مقایسه خودروهای بازار
        </h3>

        {/* بخش انتخاب خودروها */}
        <div className="w-full md:w-10/12 bg-[#ce1a2a] px-6 pt-6 pb-[350px] mx-auto rounded-2xl mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* خودرو اول */}
            <div className="w-full lg:w-2/5">
              <h4 className="!text-white text-sm font-medium pb-4 w-full">
                خودرو اول
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <select
                  value={firstCarType}
                  onChange={(e) => setFirstCarType(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="type_option-0" className="text-gray-900">
                    همه انواع خودرو
                  </option>
                  <option value="type_option-1" className="text-gray-900">
                    تست یک
                  </option>
                  <option value="type_option-2" className="text-gray-900">
                    تست دو
                  </option>
                </select>

                <select
                  value={firstCarModel}
                  onChange={(e) => setFirstCarModel(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="type_option-0" className="text-gray-900">
                    همه انواع خودرو
                  </option>
                  <option value="type_option-1" className="text-gray-900">
                    تست یک
                  </option>
                  <option value="type_option-2" className="text-gray-900">
                    تست دو
                  </option>
                </select>
              </div>
            </div>

            {/* خودرو دوم */}
            <div className="w-full lg:w-2/5">
              <h4 className="!text-white text-sm font-medium pb-4 w-full">
                خودرو دوم
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <select
                  value={secondCarType}
                  onChange={(e) => setSecondCarType(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="type_option-0" className="text-gray-900">
                    همه انواع خودرو
                  </option>
                  <option value="type_option-1" className="text-gray-900">
                    تست یک
                  </option>
                  <option value="type_option-2" className="text-gray-900">
                    تست دو
                  </option>
                </select>

                <select
                  value={secondCarModel}
                  onChange={(e) => setSecondCarModel(e.target.value)}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="type_option-0" className="text-gray-900">
                    همه انواع خودرو
                  </option>
                  <option value="type_option-1" className="text-gray-900">
                    تست یک
                  </option>
                  <option value="type_option-2" className="text-gray-900">
                    تست دو
                  </option>
                </select>
              </div>
            </div>

            {/* دکمه مقایسه */}
            <div className="w-full lg:w-1/5 flex items-end">
              <button
                onClick={handleCompare}
                className="w-full bg-white cursor-pointer button-wave-1 text-red-600 text-sm font-semibold py-3 rounded-xl transition-colors duration-300 relative overflow-hidden"
              >
                مقایسه
              </button>
            </div>
          </div>
        </div>
        {/* اسلایدر مقایسه‌ها */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="comparison-swiper -mt-[350px]"
          dir="rtl"
        >
          {comparisons.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="overflow-hidden">
                  <Link href={item.link}>
                    <div className="h-48 relative">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>

                <div className="p-4 text-center w-full">
                  <h3 className="text-sm !text-[#202020] font-medium">
                    <Link
                      href={item.link}
                      className="hover:!text-[#ce1a2a] !text-[#202020] transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .comparison-swiper {
          padding: 10px 5px 30px 5px;
        }

        .comparison-swiper .swiper-wrapper {
          align-items: stretch;
        }

        /* استایل برای select ها در حالت hover */
        select:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        /* استایل برای options */
        select option {
          background-color: white;
          color: #374151;
        }
      `}</style>
    </div>
  );
};

export default CarComparisonSection;
