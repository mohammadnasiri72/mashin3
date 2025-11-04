import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  href: string;
  text: string;
}

interface SocialMedia {
  href: string;
  icon: string;
  alt: string;
}

interface FooterProps {
  quickLinks?: {
    column1: FooterLink[];
    column2: FooterLink[];
    column3: FooterLink[];
  };
  socialMedias?: SocialMedia[];
}

const Footer = ({
  quickLinks = {
    column1: [
      { href: "#", text: "درباره ما" },
      { href: "#", text: "تماس با ما" },
      { href: "#", text: "خودرویاب" },
      { href: "#", text: "بهترین انتخاب" },
      { href: "#", text: "کدومو بخرم" },
      { href: "#", text: "راهنمای خرید" },
      { href: "#", text: "نکات آموزشی خودرو" },
      { href: "#", text: "فیلم تست و بررسی خودرو" },
    ],
    column2: [
      { href: "#", text: "واژگان فنی" },
      { href: "#", text: "نمایندگی ها" },
      { href: "#", text: "نظر سنجی" },
      { href: "#", text: "تویوتا" },
      { href: "#", text: "هوندا" },
      { href: "#", text: "رنو" },
      { href: "#", text: "هیوندای" },
      { href: "#", text: "قیمت موتور سیکلت" },
    ],
    column3: [
      { href: "#", text: "کیا" },
      { href: "#", text: "جک" },
      { href: "#", text: "جیلی" },
      { href: "#", text: "بنز" },
      { href: "#", text: "ب ام و" },
      { href: "#", text: "ام جی MG" },
      { href: "#", text: "ام وی ام MVM" },
    ],
  },
  socialMedias = [
    { href: "#", icon: "/images/icons/telegram.png", alt: "Telegram" },
    { href: "#", icon: "/images/icons/Instagram.png", alt: "Instagram" },
    { href: "#", icon: "/images/icons/YouTube.png", alt: "YouTube" },
    { href: "#", icon: "/images/icons/x-social-media.png", alt: "X" },
    { href: "#", icon: "/images/icons/Google_Plus.png", alt: "Google Plus" },
    { href: "#", icon: "/images/icons/Aparat.png", alt: "Aparat" },
    { href: "#", icon: "/images/icons/Facebook.png", alt: "Facebook" },
  ],
}: FooterProps) => {
  return (
    <div className="footer-wrap">
      {/* Main Footer */}
      <footer className="main-footer bg-white">
        {/* Widgets Section */}
        <div className="widgets-section py-8">
          <div className="mx-auto px-4 footer-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 footer-inner">
              {/* Footer Column - Logo and Info */}
              <div className="footer-column col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="logo-footer mb-4 !h-7 ">
                  <Link href="#" className="!h-7 bg-amber-500">
                    <img
                      src="/images/logo.png"
                      alt="ماشین3"
                      className="!h-7 w-auto"
                    />
                  </Link>
                </div>
                <p className="text-gray-600 text-sm leading-7 mb-6 text-justify">
                  ©کلیه حقوق این وب سایت متعلق به ماشین 3 مي باشد. پروانه تاسیس
                  واحد نشر دیجیتال : 1724112کد شامد : 1-4-65-704068-1-1 طراحی
                  سایت و بهینه سازی :
                  <Link
                    href="#"
                    className="!text-[#639700] hover:!text-[#0a58ca] duration-300 font-bold mr-1 inline-flex items-center"
                  >
                    ایده پویا
                    <Image
                      src="/images/icons/activeidea.png"
                      alt="ایده پویا"
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                  </Link>
                </p>

                <div className="rewards sm:flex p-5">
                  <div className="rw-item flex flex-col items-center text-center">
                    <Image
                      src="/images/gallery/award.png"
                      alt="جایزه"
                      width={80}
                      height={80}
                      className="mb-2"
                    />
                    <p className="text-black font-semibold text-sm mt-2">
                      برنده جشواره وب و موبایل <br />
                      به انتخاب مردم
                    </p>
                  </div>
                </div>
              </div>

               {/* Footer Column - Social Media */}
              <div className="footer-column col-span-12 sm:col-span-6 lg:hidden block ">
                <h4 className="!text-black text-lg !font-bold mb-4 sm:text-start text-center">
                  شبکه های اجتماعی
                </h4>

                <div>
                  <ul className="social-medias grid grid-cols-2 gap-2">
                    {socialMedias.map((social, index) => (
                      <li key={index}>
                        <Link
                          href={social.href}
                          className="bg-gray-100 rounded-lg p-2 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <img
                            src={social.icon}
                            alt={social.alt}
                            className="object-contain w-10 h-10"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Column - Quick Links */}
              <div className="footer-column col-span-12 lg:col-span-6 ft-lists-wrap">
                <h4 className="text-black text-[16px] !font-bold !mb-4 sm:text-start text-center">
                  دسترسی سریع
                </h4>

                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                  {/* Column 1 */}
                  <div className="col-span-1 sm:text-start text-center">
                    <ul className="space-y-5">
                      {quickLinks.column1.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="!text-[#292929] hover:!text-[#ce1a2a] transition-colors text-sm !font-semibold"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="col-span-1 sm:text-start text-center">
                    <ul className="space-y-5">
                      {quickLinks.column2.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="!text-[#292929] hover:!text-[#ce1a2a] transition-colors text-sm !font-semibold"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="col-span-1 sm:text-start text-center">
                    <ul className="space-y-5">
                      {quickLinks.column3.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="!text-[#292929] hover:!text-[#ce1a2a] transition-colors text-sm !font-semibold"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Column - Social Media */}
              <div className="footer-column col-span-12 md:col-span-2 lg:col-span-2 lg:block hidden">
                <h4 className="text-gray-900 text-lg font-bold mb-4">
                  شبکه های اجتماعی
                </h4>

                <div>
                  <ul className="social-medias grid grid-cols-2 gap-2">
                    {socialMedias.map((social, index) => (
                      <li key={index}>
                        <Link
                          href={social.href}
                          className="bg-gray-100 rounded-lg w-20 h-20 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <img
                            src={social.icon}
                            alt={social.alt}
                            className="object-contain"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom bg-[#ce1a2a] text-white !py-3">
          <div className="mx-auto px-4">
            <div className="row">
              <div className="copyright text-center text-xs">
                طبق ماده ۱۲ فصل سوم قانون جرائم رایانه هرگونه کپی برداری بدون
                ذکر منبع ممنوع بوده و پیگرد قانونی دارد.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
