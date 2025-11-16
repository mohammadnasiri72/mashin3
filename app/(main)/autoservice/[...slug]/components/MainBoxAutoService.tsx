"use client";

import { mainDomainOld } from "@/utils/mainDomain";
import { Card, Tabs, Tag, Divider } from "antd";
import { FaMapMarkerAlt, FaPhone, FaClock, FaCar, FaStar, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const { TabPane } = Tabs;

function MainBoxAutoService({ detailsAuto }: { detailsAuto: any }) {
  console.log(detailsAuto);

  // اطلاعات تماس نمونه (در حالت واقعی از properties یا API میاد)
  const contactInfo = {
    phone: "021-55223344",
    mobile: "09123456789",
    address: "یافت آباد، بلوار اصلی، جنب مترو یافت آباد",
    workingHours: "شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰\nپنجشنبه: ۸:۰۰ - ۱۴:۰۰",
    email: "info@neginkhodro.com",
    services: ["فروش خودرو", "خدمات پس از فروش", "گارانتی", "تعمیرات تخصصی"]
  };

  // تصاویر نمونه (در حالت واقعی از Attachment میاد)
  const galleryImages = [
    "/images/gallery/service-1.jpg",
    "/images/gallery/service-2.jpg",
    "/images/gallery/service-3.jpg",
    "/images/gallery/service-4.jpg"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* هدر صفحه */}
      <section 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/gallery/service-header.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center mb-4">
              <img 
                src={mainDomainOld + detailsAuto.image} 
                alt={detailsAuto.categoryTitle}
                className="w-16 h-16 rounded-lg bg-white p-2 mr-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default-logo.png';
                }}
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">{detailsAuto.title}</h1>
                <div className="flex items-center">
                  <Tag color="red" className="text-white font-medium">
                    {detailsAuto.categoryTitle}
                  </Tag>
                  <div className="flex items-center mr-4">
                    <FaStar className="text-yellow-400 ml-1" />
                    <span className="text-sm">۴.۵ (۱۲۴ نظر)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Breadcrumb */}
            <nav className="text-sm">
              <ol className="flex items-center space-x-2 space-x-reverse flex-wrap">
                {detailsAuto.breadcrumb?.map((item: any, index: number) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-red-200 transition-colors">
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-white">{item.title}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* سایدبار اطلاعات تماس */}
          <div className="lg:col-span-1">
            <Card className="rounded-xl shadow-lg sticky top-0">
              {/* لوگو و اطلاعات اصلی */}
              <div className="text-center mb-6">
                <img 
                  src={mainDomainOld + detailsAuto.image} 
                  alt={detailsAuto.categoryTitle}
                  className="w-32 h-32 mx-auto rounded-lg bg-gray-100 p-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default-logo.png';
                  }}
                />
                <h2 className="text-xl font-bold mt-4">{detailsAuto.title}</h2>
                <p className="text-gray-600 mt-2">{detailsAuto.categoryTitle}</p>
              </div>

              <Divider />

              {/* اطلاعات تماس */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-red-600 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">آدرس</p>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-red-600 ml-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">تلفن</p>
                    <p className="text-gray-600 text-sm mt-1">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaClock className="text-red-600 ml-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">ساعات کاری</p>
                    <p className="text-gray-600 text-sm mt-1 whitespace-pre-line">
                      {contactInfo.workingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-red-600 ml-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">ایمیل</p>
                    <p className="text-gray-600 text-sm mt-1">{contactInfo.email}</p>
                  </div>
                </div>
              </div>

              <Divider />

              {/* خدمات */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3">خدمات ارائه شده</h3>
                <div className="flex flex-wrap gap-2">
                  {contactInfo.services.map((service, index) => (
                    <Tag 
                      key={index} 
                      color="blue"
                      className="mb-2"
                    >
                      {service}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* دکمه‌های اقدام */}
              <div className="space-y-3 mt-6">
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center">
                  <FaPhone className="ml-2" />
                  تماس تلفنی
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                  <FaWhatsapp className="ml-2" />
                  ارتباط در واتساپ
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  مسیریابی
                </button>
              </div>
            </Card>
          </div>

          {/* محتوای اصلی */}
          <div className="lg:col-span-2">
            <Card className="rounded-xl shadow-lg">
              <Tabs defaultActiveKey="1" type="card" className="custom-tabs">
                <TabPane tab="معرفی نمایندگی" key="1">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">درباره نمایندگی</h3>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        نمایندگی {detailsAuto.title} با سال‌ها تجربه در زمینه فروش و خدمات پس از فروش خودروهای {detailsAuto.categoryTitle}، 
                        آماده ارائه خدمات تخصصی به مشتریان محترم می‌باشد. این نمایندگی با بهره‌گیری از کادری مجرب و تجهیزات پیشرفته، 
                        کلیه خدمات فروش، گارانتی و تعمیرات تخصصی را ارائه می‌نماید.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-bold text-blue-800 mb-2">ویژگی‌های ممتاز</h4>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                            کادر فنی مجرب و آموزش دیده
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                            استفاده از قطعات اورجینال
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                            گارانتی معتبر
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-2">خدمات ویژه</h4>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                            تست درایو رایگان
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                            مشاوره رایگان خرید
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                            خدمات سیار
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPane>

                <TabPane tab="گالری تصاویر" key="2">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`نمایندگی ${detailsAuto.title}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </TabPane>

                <TabPane tab="نظرات مشتریان" key="3">
                  <div className="space-y-6">
                    {/* آمار نظرات */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gray-800">۴.۵</div>
                          <div className="flex justify-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={`ml-1 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <div className="text-gray-600 text-sm mt-1">۱۲۴ نظر</div>
                        </div>
                        
                        <div className="flex-1 max-w-md">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center mb-2">
                              <span className="text-sm text-gray-600 w-8">{star}</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                <div 
                                  className="bg-yellow-400 h-2 rounded-full"
                                  style={{ width: `${star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '8%' : star === 2 ? '2%' : '0%'}` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 w-12">
                                {star === 5 ? '۷۰٪' : star === 4 ? '۲۰٪' : star === 3 ? '۸٪' : star === 2 ? '۲٪' : '۰٪'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* لیست نظرات */}
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-red-600 font-bold">م</span>
                              </div>
                              <div className="mr-3">
                                <p className="font-medium">محمد رضایی</p>
                                <p className="text-gray-500 text-sm">۱۴۰۳/۰۸/۱۵</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-yellow-400 ml-1">۴.۵</span>
                              <FaStar className="text-yellow-400" />
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            خدمات بسیار عالی و پرسنل مجرب. خودروی من رو در کوتاه‌ترین زمان تعمیر کردند. 
                            حتماً توصیه می‌کنم.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabPane>

                <TabPane tab="موقعیت مکانی" key="4">
                  <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-red-600" />
                      <p className="text-lg font-medium">نقشه نمایندگی</p>
                      <p className="text-sm mt-2">موقعیت مکانی روی نقشه نمایش داده می‌شود</p>
                      <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                        مشاهده در نقشه
                      </button>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-tabs .ant-tabs-tab {
          padding: 12px 24px;
          font-weight: 600;
        }
        
        .custom-tabs .ant-tabs-tab-active {
          background: #ce1a2a !important;
          border-color: #ce1a2a !important;
        }
        
        .custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: white !important;
        }
        
        .custom-tabs .ant-tabs-ink-bar {
          background: #ce1a2a;
        }
      `}</style>
    </div>
  );
}

export default MainBoxAutoService;