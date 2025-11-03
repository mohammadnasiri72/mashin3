import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    image: "/images/gallery/img22.jpg",
    title: "فروش ویژه زامیاد 24",
    date: "۲۰ تیر ۱۴۰۲",
    comments: 0,
  },
  {
    id: 2,
    image: "/images/gallery/img33.jpg",
    title: "افزایش قیمت پژو 405",
    date: "۲۰ تیر ۱۴۰۲",
    comments: 0,
  },
];

const comparisonItems = [
  {
    id: 1,
    image: "/images/gallery/img11.jpg",
    title: "تویوتالندکروز vs بنز جی کلاس",
    date: "۲۰ تیر ۱۴۰۲",
  },
];

const specialSales = [
  "شروع فروش اقساطی وانت نیسان بنزینی",
  "لیست قیمت کارخانه محصولات ایران خودرو",
  "فروش ویژه مزدا 2000",
  "فروش ویژه پژو 206 اتومات",
];

export default function NewsSection() {
  return (
    <div className="mb-12">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full">
            <div className="section_title mb-6">
              <div className="!text-[#292929] inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ffd6db]">
                <h3 className="text-[22px] font-bold after:bg-[#ffd6db]">
                  آخرین اخبار
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              {newsItems.map((item) => (
                <div key={item.id} className="sm:w-1/2 w-full sm:px-2 pb-2">
                  <Card
                    hoverable
                    className=" !rounded-3xl h-64 overflow-hidden border-none shadow-sm group"
                    cover={
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover h-full group-hover:brightness-75 duration-300"
                        />
                        <div className="absolute !font-bold bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <span className="!text-white inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#292929]">
                            {item.title}
                          </span>
                        </div>
                        <div className="absolute top-3 left-3">
                          <div className="!text-white flex items-center gap-1 text-[10px]">
                            <FaCalendar className="" />
                            {item.date}
                          </div>
                        </div>
                      </div>
                    }
                  ></Card>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 w-full">
            <div className="section_title mb-6">
              <div className="!text-[#292929] inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ffd6db]">
                <h3 className="text-[22px] font-bold after:bg-[#ffd6db]">
                  آخرین مقایسه
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              {comparisonItems.map((item) => (
                <div key={item.id} className="w-full pb-2">
                  <Card
                    hoverable
                    className=" !rounded-3xl h-64 overflow-hidden border-none shadow-sm group"
                    cover={
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover h-full group-hover:brightness-75 duration-300"
                        />
                        <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 !font-bold">
                          <span className="!text-white inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ce1a2a]">
                            {item.title}
                          </span>
                        </div>
                        <div className="absolute top-3 left-3">
                          <div className="!text-white flex items-center gap-1 text-[10px]">
                            <FaCalendar className="" />
                            {item.date}
                          </div>
                        </div>
                      </div>
                    }
                  ></Card>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 w-full">
            <div className="section_title mb-6">
              <div className="!text-[#292929] inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ffd6db]">
                <h3 className="text-xl font-bold">فروش ویژه</h3>
              </div>
            </div>
            <div className="h-64 px-2">
              <div className="space-y-3">
                {specialSales.map((sale, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-sm group transition-all cursor-pointer bg-white hover:bg-[#ce1a2a] hover:!text-white border-r-2 duration-300 ${
                      index === 0 ? " border-[#ce1a2a]" : " border-transparent "
                    }`}
                  >
                    <Link
                      href="#"
                      className="!text-[#292929] duration-300 group-hover:!text-white font-medium block"
                    >
                      {sale}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
