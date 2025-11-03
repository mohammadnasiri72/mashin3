import { Row, Col, Space } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const quickLinks = {
  'دسترسی سریع': [
    'درباره ما',
    'تماس با ما',
    'خودرویاب',
    'بهترین انتخاب',
    'کدومو بخرم',
    'راهنمای خرید'
  ],
  'برندها': [
    'تویوتا',
    'هوندا',
    'رنو',
    'هیوندای',
    'کیا',
    'جک'
  ],
  'برندهای خارجی': [
    'بنز',
    'ب ام و',
    'ام جی MG',
    'ام وی ام MVM',
    'جیلی',
    'لکسوس'
  ]
}

const socialMedias = [
  { name: 'telegram', icon: '/images/icons/telegram.png' },
  { name: 'instagram', icon: '/images/icons/Instagram.png' },
  { name: 'youtube', icon: '/images/icons/YouTube.png' },
  { name: 'twitter', icon: '/images/icons/x-social-media.png' },
  { name: 'google-plus', icon: '/images/icons/Google_Plus.png' },
  { name: 'aparat', icon: '/images/icons/Aparat.png' },
  { name: 'facebook', icon: '/images/icons/Facebook.png' }
]

export default function Footer() {
  return (
    <footer className="bg-white mt-20 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <Row gutter={[32, 32]}>
            {/* Logo and Info */}
            <Col xs={24} lg={6}>
              <div className="logo-footer mb-6">
                <Link href="/">
                  <Image 
                    src="/images/logo.png" 
                    alt="ماشین 3" 
                    width={110}
                    height={44}
                    className="max-w-[110px]"
                  />
                </Link>
              </div>
              <p className="text-gray-600 text-sm leading-7 mb-6">
                © کلیه حقوق این وب سایت متعلق به ماشین 3 مي باشد. 
                پروانه تاسیس واحد نشر دیجیتال : 1724112
                کد شامد : 1-4-65-704068-1-1
              </p>
              
              {/* Award Section */}
              <div className="rewards">
                <div className="rw_item text-center">
                  <Image 
                    src="/images/gallery/award.png" 
                    alt="جایزه" 
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <p className="text-gray-700 text-sm mt-2 font-semibold">
                    برنده جشواره وب و موبایل
                    <br />
                    به انتخاب مردم
                  </p>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col xs={24} lg={12}>
              <Row gutter={[16, 16]}>
                {Object.entries(quickLinks).map(([title, links]) => (
                  <Col xs={24} sm={8} key={title}>
                    <h4 className="text-lg font-bold mb-4 text-gray-800">{title}</h4>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link}>
                          <Link 
                            href="#" 
                            className="text-gray-600 hover:text-red-600 text-sm transition-colors block py-1"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Social Media */}
            <Col xs={24} lg={6}>
              <h4 className="text-lg font-bold mb-6 text-gray-800">شبکه های اجتماعی</h4>
              <div className="grid grid-cols-4 gap-3">
                {socialMedias.map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="bg-gray-100 rounded-lg p-3 flex items-center justify-center hover:bg-red-50 transition-colors group"
                  >
                    <Image 
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-white text-sm">
            طبق ماده ۱۲ فصل سوم قانون جرائم رایانه هرگونه کپی برداری بدون ذکر منبع ممنوع بوده و پیگرد قانونی دارد.
          </div>
        </div>
      </div>
    </footer>
  )
}