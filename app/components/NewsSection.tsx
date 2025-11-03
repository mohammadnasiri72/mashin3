import { CalendarOutlined, MessageOutlined } from "@ant-design/icons";
import { Card, Col, Row, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";

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
      <div className="container mx-auto px-4">
        <Row gutter={[24, 24]}>
          {/* Latest News */}
          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={16}>
                <div className="section_title mb-6">
                  <div className="titleBox pink_Highlight">
                    <h3 className="text-xl font-bold">آخرین اخبار</h3>
                  </div>
                </div>

                <Row gutter={[16, 16]}>
                  {newsItems.map((item) => (
                    <Col xs={24} md={12} key={item.id}>
                      <Card
                        hoverable
                        className="news-card rounded-2xl overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow"
                        cover={
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform hover:scale-105"
                            />
                            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <Tag
                                color="red"
                                className="border-none font-semibold"
                              >
                                <Link href="#" className="text-white">
                                  {item.title}
                                </Link>
                              </Tag>
                            </div>
                          </div>
                        }
                        bodyStyle={{ padding: "1rem" }}
                      >
                        <div className="flex justify-between items-center text-gray-500 text-sm">
                          <span>
                            <CalendarOutlined className="ml-1" />
                            {item.date}
                          </span>
                          <span>
                            <MessageOutlined className="ml-1" />
                            بدون دیدگاه
                          </span>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>

              {/* Latest Comparison */}
              <Col xs={24} md={8}>
                <div className="section_title mb-6">
                  <div className="titleBox pink_Highlight">
                    <h3 className="text-xl font-bold">آخرین مقایسه</h3>
                  </div>
                </div>

                {comparisonItems.map((item) => (
                  <Card
                    key={item.id}
                    hoverable
                    className="rounded-2xl overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow mb-4"
                    cover={
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <Tag
                            color="red"
                            className="border-none font-semibold"
                          >
                            <Link href="#" className="text-white">
                              {item.title}
                            </Link>
                          </Tag>
                        </div>
                      </div>
                    }
                    bodyStyle={{ padding: "1rem" }}
                  >
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                      <span>
                        <CalendarOutlined className="ml-1" />
                        {item.date}
                      </span>
                    </div>
                  </Card>
                ))}
              </Col>
            </Row>
          </Col>

          {/* Special Sales */}
          <Col xs={24} lg={8}>
            <div className="section_title mb-6">
              <div className="titleBox pink_Highlight">
                <h3 className="text-xl font-bold">فروش ویژه</h3>
              </div>
            </div>

            <Card className="rounded-2xl border-none shadow-sm">
              <div className="space-y-3">
                {specialSales.map((sale, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all cursor-pointer hover:bg-red-50 border-r-2 ${
                      index === 0
                        ? "bg-red-50 border-red-600"
                        : "bg-gray-50 border-transparent hover:border-red-600"
                    }`}
                  >
                    <Link
                      href="#"
                      className="text-gray-700 hover:text-red-600 font-medium block"
                    >
                      {sale}
                    </Link>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
