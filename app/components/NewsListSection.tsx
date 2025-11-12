import { extractTextFromHtml } from "@/utils/func";
import { mainDomainOld } from "@/utils/mainDomain";
import Link from "next/link";
import { FaCalendar, FaComments } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
const moment = require("moment-jalaali");


export const toPersianNumbers = (input: number | string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return input
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const formatPersianDate = (dateString: string): string => {
  try {
    const persianMonths = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];

    const date = moment(dateString);
    const day = toPersianNumbers(date.jDate());
    const month = persianMonths[date.jMonth()];
    const year = toPersianNumbers(date.jYear());

    return `${day} ${month} ${year}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return toPersianNumbers(dateString); // حتی در صورت خطا هم اعداد را فارسی کن
  }
};

const NewsListSection = ({ news }: { news: Items[] }) => {

 
  return (
    <div className="mb-5">
      <div className="mx-auto px-4">
        {/* هدر */}
        <div className="flex sm:flex-row flex-col justify-between items-center mb-4">
          <div className="mb-2! sm:w-auto w-full p-3 sm:bg-transparent bg-[#f6eced] rounded-xl flex sm:justify-start justify-center items-center">
            <h3 className="pb-0! mb-0! text-[#292929]! font-bold! inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 sm:after:bg-[#ffd6db]">
              لیست اخبار
            </h3>
          </div>

          <Link
            href="#"
            className="text-[#ce1a2a]! text-sm flex items-center gap-1"
          >
            نمایش بیشتر
            <FaArrowLeftLong />
          </Link>
        </div>

        {/* لیست اخبار */}
        <div className="flex flex-wrap -mx-2">
          {news.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 px-2 mb-4">
              <div className="bg-white relative duration-300 cursor-pointer group hover:bg-linear-to-b hover:from-[#ff5363] hover:to-[#ce1a2a] rounded-2xl shadow-sm p-4 flex sm:flex-row flex-col sm:items-stretch items-center gap-4 hover:shadow-md transition-shadow overflow-hidden">
                {/* تصویر */}
                <div className="w-36 h-36 shrink-0 holographic-effect">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={mainDomainOld + item.image}
                      alt={item.title}
                      className="w-full h-36 object-cover"
                    />
                  </div>
                </div>

                {/* محتوا */}
                <div className="flex-1">
                  <div className="flex flex-col justify-between items-start w-full h-full">
                    <div>
                      <h4 className="font-bold! text-[#222]! mb-2 line-clamp-2 text-lg group-hover:text-white! duration-300">
                        {item.title}
                      </h4>

                      <div className="text-gray-600 text-xs mb-3 line-clamp-3 mt-1 text-justify group-hover:text-white! duration-300">
                        {extractTextFromHtml(item.body)}
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500  w-full group-hover:text-white! duration-300 sm:mt-0 mt-3 ">
                      <div className="flex items-center gap-1">
                        <FaCalendar className="" />
                        <span> {formatPersianDate(item.created)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaComments />
                        <span>{item.visit}</span>
                        <span>دیدگاه</span>
                      </div>
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
