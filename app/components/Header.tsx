"use client";

import { Collapse } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { IoChevronDown, IoSearch } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  // هندل کردن اسکرول برای sticky header
  useEffect(() => {
    const handleScroll = () => {
      // بعد از 200 پیکسل اسکرول، هدر sticky شود
      const scrollThreshold = 200;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "خودروهای بازار",
      url: "#",
    },
    {
      title: "شرایط فروش خودرو",
      url: "#",
      children: [
        {
          title: "شرایط فروش نقدی",
          url: "#",
        },
        {
          title: "شرایط فروش اقساطی",
          url: "#",
        },
        {
          title: "فروش ویژه",
          url: "#",
        },
        {
          title: "پیش فروش خودرو",
          url: "#",
        },
      ],
    },
    {
      title: "قیمت خودرو",
      url: "#",
    },
    {
      title: "اخبار خودرو",
      url: "#",
      children: [
        {
          title: "اخبار روز خودرو",
          url: "#",
        },
        {
          title: "تحلیل بازار",
          url: "#",
        },
        {
          title: "تست رانندگی",
          url: "#",
        },
      ],
    },
    {
      title: "نکات آموزشی",
      url: "#",
    },
  ];

  interface MenuItem {
    title: string;
    url: string;
    children?: MenuItem[];
  }

  interface MobileMenuItemProps {
    item: MenuItem;
    onClose: () => void;
  }

  const MobileMenuItem = ({ item, onClose }: MobileMenuItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b border-gray-100 last:border-b-0">
        {item.children ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center cursor-pointer justify-between w-full py-4 text-gray-700 text-right text-sm font-medium"
            >
              <span>{item.title}</span>
              <IoChevronDown
                className={`text-gray-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <Collapse in={isOpen}>
              <div className="pr-4 pb-2">
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.url}
                    onClick={onClose}
                    className="block py-3 px-4 text-gray-600 hover:text-[#ce1a2a] rounded-lg text-sm"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </Collapse>
          </>
        ) : (
          <Link
            href={item.url}
            onClick={onClose}
            className="flex items-center justify-between w-full py-4 text-gray-700 text-right text-sm font-medium"
          >
            <span>{item.title}</span>
          </Link>
        )}
      </div>
    );
  };

  const menuItemMobileDrawer = (
    <div className="w-80 h-full bg-white flex flex-col pr-3">
      {/* Header با لوگو */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <Link
          href={"/"}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <Image
            src="/images/logo.png"
            alt="ماشین 3"
            width={120}
            height={50}
            className="max-w-32"
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-gray-500 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <FiX size={24} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item, index) => (
          <MobileMenuItem
            key={index}
            item={item}
            onClose={() => setIsMenuOpen(false)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={`sticky-header !z-[1001] ${isSticky ? "sticky-active" : ""}`}>
      {/* Main Header */}
      <header className={`header-main ${isSticky ? "sticky" : ""}`}>
        <div className="max-w-[1360px] mx-auto px-4 py-3">
          <div className="flex items-center">
            {/* Logo and Menu Section */}
            <div className="w-auto lg:w-2/3 xl:w-7/12 flex items-center">
              <div className="flex flex-wrap w-full items-center">
                {/* Logo */}
                <div className="w-full lg:w-2/12 xl:w-2/12 flex items-center lg:pr-4">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      alt="ماشین 3"
                      width={100}
                      height={50}
                      className="max-w-32"
                    />
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block lg:w-10/12 xl:w-10/12">
                  <nav className="flex items-center space-x-1 space-x-reverse">
                    {menuItems.map((item, index) => (
                      <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <Link
                          href={item.url}
                          className="flex items-center text-[13px] mx-1 whitespace-nowrap font-medium !text-[#222] hover:bg-[#ce1a2a] hover:!text-white rounded-lg px-3 py-2 duration-300 transition-all"
                        >
                          {item.title}
                          {item.children && (
                            <IoChevronDown className="mr-1 text-xs transition-transform duration-300 group-hover:rotate-180" />
                          )}
                        </Link>

                        {/* Dropdown Menu */}
                        {item.children && (
                          <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] py-2">
                              {item.children.map((child, childIndex) => (
                                <Link
                                  key={childIndex}
                                  href={child.url}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:!text-white hover:!bg-[#ce1a2a] transition-all duration-200 border-b border-gray-100 last:border-b-0"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Search and Login Section */}
            <div className="w-full lg:w-1/3 xl:w-5/12 flex items-center">
              <div className="flex items-center lg:justify-between justify-end w-full">
                {/* Search Box */}
                <div className="hidden lg:block flex-1 max-w-md">
                  <div className="bg-[#f1f2f4] rounded-lg px-4 py-2 flex items-center border border-transparent hover:border-gray-300 transition-all duration-300">
                    <IoSearch className="text-lg !text-[#656565]" />
                    <input
                      type="text"
                      className="bg-transparent text-[13px] w-full pr-2 outline-none placeholder-[#777] font-medium"
                      placeholder="دنبال چی میگردی؟"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <Link
                    href="#"
                    className="font-bold whitespace-nowrap !text-[#ce1a2a] text-[13px] px-5 py-2.5 rounded transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(206,26,42)]"
                  >
                    <div className="flex items-center gap-0.5">
                      <MdLogin className="text-lg"/>
                      <span>ورود</span>
                    </div>
                  </Link>

                  <Link
                    href="#"
                    className="bg-[#ce1a2a] !text-white font-bold text-[13px] px-5 py-2.5 rounded transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(206,26,42)] hover:bg-[#d1182b]"
                  >
                    ثبت‌نام
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className={`lg:hidden bg-[#ce1a2a] transition-all duration-300`}>
          <div className="flex items-center justify-between">
            {/* Search Box */}
            <div className="grow bg-[#d1182b] rounded-lg p-4 flex items-center mr-4">
              <IoSearch className="!text-white text-lg" />
              <input
                type="text"
                className="bg-transparent text-sm w-full pr-2 outline-none !text-white placeholder-white font-medium"
                placeholder="جستجو"
                required
              />
            </div>

            {/* Close Button */}
            <button
              className="!text-white cursor-pointer p-2 text-2xl hover:bg-[#d1182b] rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen((e) => !e)}
            >
              <TiThMenu className="text-3xl" />
            </button>
            <Drawer
              open={isMenuOpen}
              onClose={() => {
                setIsMenuOpen(false);
              }}
              anchor="right"
            >
              {menuItemMobileDrawer}
            </Drawer>
          </div>
        </div>
      </header>

      <style jsx global>{`
        .sticky-header {
          position: relative;
          z-index: 1000;
        }

        .header-main {
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header-main.sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          animation: slideDown 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        /* ایجاد فضای خالی برای زمانی که هدر sticky میشود */
        .sticky-active::before {
          content: '';
          display: block;
          height: 80px; /* ارتفاع هدر */
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* برای موبایل ارتفاع کمتر در نظر بگیریم */
        @media (max-width: 1024px) {
          .sticky-active::before {
            height: 120px; /* ارتفاع هدر در موبایل */
          }
        }

        /* بهبود استایل در حالت sticky */
        .header-main.sticky .header-main {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}