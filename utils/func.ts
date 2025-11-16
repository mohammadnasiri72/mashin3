const moment = require("moment-jalaali");

export const createMarkup = (html: string) => {
  return { __html: html };
};

export const toPersianNumbers = (input: number | string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return input
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

export const formatPersianDate = (dateString: string): string => {
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