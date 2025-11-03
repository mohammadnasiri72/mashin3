import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsListSection = () => {
  const news = [
    {
      id: 1,
      image: "/images/gallery/saina.jpg",
      alt: "صدور مجوز تاکسی برای خودرو ساینا",
      title: "صدور مجوز تاکسی برای خودرو ساینا",
      link: "#",
      description:
        "مدیرعامل اتحادیه حمل و نقل مسافر شهری کشور از طی شدن فرآیند اخذ مجوز ساینا برای کاربری تاکسی خبر ...",
      date: "20 تیر 1402",
      commentCount: "بدون دیدگاه",
    },
    {
      id: 2,
      image: "/images/gallery/taxi.jpg",
      alt: "مشخص شدن رنگ تاکسی‌ های برقی",
      title: "مشخص شدن رنگ تاکسی‌ های برقی",
      link: "#",
      description:
        "مدیرعامل اتحادیه حمل و نقل مسافر شهری کشور از طی شدن فرآیند اخذ مجوز ساینا برای کاربری تاکسی خبر ...",
      date: "20 تیر 1402",
      commentCount: "بدون دیدگاه",
    },
    {
      id: 3,
      image: "/images/gallery/saina.jpg",
      alt: "صدور مجوز تاکسی برای خودرو ساینا",
      title: "صدور مجوز تاکسی برای خودرو ساینا",
      link: "#",
      description:
        "مدیرعامل اتحادیه حمل و نقل مسافر شهری کشور از طی شدن فرآیند اخذ مجوز ساینا برای کاربری تاکسی خبر ...",
      date: "20 تیر 1402",
      commentCount: "بدون دیدگاه",
    },
    {
      id: 4,
      image: "/images/gallery/taxi.jpg",
      alt: "مشخص شدن رنگ تاکسی‌ های برقی",
      title: "مشخص شدن رنگ تاکسی‌ های برقی",
      link: "#",
      description:
        "مدیرعامل اتحادیه حمل و نقل مسافر شهری کشور از طی شدن فرآیند اخذ مجوز ساینا برای کاربری تاکسی خبر ...",
      date: "20 تیر 1402",
      commentCount: "بدون دیدگاه",
    },
    {
      id: 5,
      image: "/images/gallery/saina.jpg",
      alt: "صدور مجوز تاکسی برای خودرو ساینا",
      title: "صدور مجوز تاکسی برای خودرو ساینا",
      link: "#",
      description:
        "مدیرعامل اتحادیه حمل و نقل مسافر شهری کشور از طی شدن فرآیند اخذ مجوز ساینا برای کاربری تاکسی خبر ...",
      date: "20 تیر 1402",
      commentCount: "بدون دیدگاه",
    },
    {
      id: 6,
      image: "/images/gallery/taxi.jpg",
      alt: "مشخص شدن رنگ تاکسی‌ های برقی",
      title: "مشخص شدن رنگ تاکسی‌ های برقی",
      link: "#",
      description:
        "مدیرعامل اتحادیه حمل و نقل مسافر شهری کشور از طی شدن فرآیند اخذ مجوز ساینا برای کاربری تاکسی خبر ...",
      date: "20 تیر 1402",
      commentCount: "بدون دیدگاه",
    },
  ];

  return (
    <div className="mb-5">
      <div className="mx-auto px-4">
        {/* هدر */}
        <div className="flex justify-between items-center mb-4">
          <div className="titleBox pink_Highlight">
            <h3 className="!text-[#292929] inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ffd6db]">
              لیست اخبار
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

        {/* لیست اخبار */}
        <div className="flex flex-wrap -mx-2">
          {news.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 px-2 mb-4">
              <div className="bg-white newsBox relative duration-300 cursor-pointer group hover:bg-linear-to-b hover:from-[#ff5363] hover:to-[#ce1a2a] rounded-2xl shadow-sm p-4 flex gap-4 hover:shadow-md transition-shadow">
                {/* تصویر */}
                <div className="w-36 flex-shrink-0 holographic-effect">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={128}
                      height={96}
                      className="w-full h-36 object-cover"
                    />
                  </div>
                </div>

                {/* محتوا */}
                <div className="flex-1">
                  <div className="flex flex-col justify-between items-start w-full h-full">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 text-xl group-hover:!text-white duration-300">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 mt-1 group-hover:!text-white duration-300">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500  w-full group-hover:!text-white duration-300">
                      <span>{item.date}</span>
                      <span>{item.commentCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsListSection;
