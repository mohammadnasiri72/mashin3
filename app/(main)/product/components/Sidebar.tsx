import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Sidebar = () => {
  const shahinModels = [
    {
      image: "/images/gallery/shahin-s.jpg",
      title: "شاهین S",
      link: "#",
    },
    {
      image: "/images/gallery/shahin-g.jpg",
      title: "شاهین G",
      link: "#",
    },
    {
      image: "/images/gallery/shahin-automatic-cv.jpg",
      title: "شاهین اتوماتیک CVT",
      link: "#",
    },
    {
      image: "/images/gallery/shahin-plus.jpg",
      title: "شاهین پلاس",
      link: "#",
    },
  ];

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox='sidebar-gallery']", {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
      Thumbs: {
        type: "classic",
      },
      Images: {
        zoom: true,
      },
      Carousel: {
        infinite: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Increase z-index for fancybox
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .fancybox__container { 
        z-index: 999999 !important; 
      }
      .fancybox__backdrop {
        background: rgba(0, 0, 0, 0.8);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="sidebar space-y-6">
      {/* مدل‌های شاهین */}
      <div className="sidebar_widget bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="widget_title text-lg font-bold text-gray-900 !mb-3">
          <Link href="#" className="hover:text-red-600 transition-colors">
            مدل های شاهین
          </Link>
        </h3>

        <div className="space-y-4">
          {shahinModels.map((model, index) => (
            <div
              key={index}
              className="h-32 relative rounded-lg overflow-hidden group"
            >
              {/* استفاده از Link با legacyBehavior */}
              <Link href={model.link} legacyBehavior>
                <a className="block w-full h-full">
                  <a
                    href={model.image}
                    data-fancybox="sidebar-gallery"
                    data-caption={model.title}
                    aria-label={`بزرگنمایی تصویر ${model.title}`}
                    className="block w-full h-full"
                  >
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="w-full group-hover:scale-105 h-32 object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300"></div>

                    <div className="sm:w-auto w-full p-3 sm:bg-transparent bg-[#fff2] rounded-xl flex sm:justify-start justify-center items-center absolute left-0 bottom-0">
                      <h3 className="!pb-0 !mb-0 text-center !text-white !font-bold inline-block relative text-sm z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 sm:after:bg-[#5d5dff]">
                        {model.title}
                      </h3>
                    </div>
                  </a>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ماشین‌های رقبا */}
      <div className="sidebar_widget bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="widget_title text-lg font-bold text-gray-900 mb-3">
          <Link href="#" className="hover:text-red-600 transition-colors">
            ماشین های رقبا
          </Link>
        </h3>

        <div className="space-y-4">
          {shahinModels.map((model, index) => (
            <div
              key={index}
              className="item_wd relative rounded-lg overflow-hidden group"
            >
              {/* استفاده از Link با legacyBehavior */}
              <Link href={model.link} legacyBehavior>
                <a className="block w-full h-full">
                  <a
                    href={model.image}
                    data-fancybox="sidebar-gallery"
                    data-caption={model.title}
                    aria-label={`بزرگنمایی تصویر ${model.title}`}
                    className="block w-full h-full"
                  >
                    <Image
                      src={model.image}
                      alt={model.title}
                      width={300}
                      height={150}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300"></div>
                    <div className="sm:w-auto w-full p-3 sm:bg-transparent bg-[#fff2] rounded-xl flex sm:justify-start justify-center items-center absolute left-0 bottom-0">
                      <h3 className="!pb-0 !mb-0 text-center !text-white !font-bold inline-block relative text-sm z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 sm:after:bg-[#5d5dff]">
                        {model.title}
                      </h3>
                    </div>
                  </a>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Fancybox custom styles */
        .fancybox__toolbar {
          background: rgba(0, 0, 0, 0.5);
        }

        .fancybox__nav {
          --f-button-color: #fff;
          --f-button-hover-color: #ce1a2a;
        }

        .fancybox__thumbs {
          background: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
