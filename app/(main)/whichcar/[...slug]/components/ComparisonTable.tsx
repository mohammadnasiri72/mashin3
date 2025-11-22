"use client";

import { Card, Row, Col, Tag, Avatar } from "antd";
import { mainDomainOld } from "@/utils/mainDomain";

interface ComparisonTableProps {
  car1: ItemsId;
  car2: ItemsId;
  comparisonTableData: {
    key: string;
    feature: string;
    car1: string;
    car2: string;
  }[];
}

function ComparisonTable({
  car1,
  car2,
  comparisonTableData,
}: ComparisonTableProps) {

  const numEN1 = car1.properties.find((e) => e.propertyId === 22654)?.value;
  const numEN2 = car2.properties.find((e) => e.propertyId === 22654)?.value;

  return (
    <div className="space-y-8">
      {/* هدر */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          📊 مقایسه مشخصات فنی
        </h2>
        <p className="text-gray-600 text-lg">
          بررسی تخصصی و مقایسه نقطه به نقطه
        </p>
      </div>

      {/* دو کارد کنار هم */}
      <Row gutter={[24, 24]}>
        {/* کارد خودرو اول */}
        <Col xs={24} md={12}>
          <Card
            className="shadow-xl border-2 border-emerald-200 hover:shadow-2xl transition-all duration-300 h-full"
            cover={
              <div className="relative p-6 bg-white">
                <img
                  src={mainDomainOld + car1.image}
                  alt={car1.title}
                  className="w-full h-80 object-contain"
                />
                {/* لوگوهای کوچک روی تصویر اصلی */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {car1.properties
                    ?.filter(
                      (prop: any) =>
                        prop.propertyKey.includes("logo") ||
                        prop.propertyKey.includes("brand")
                    )
                    .slice(0, 3)
                    .map((logoProp: any, index: number) => (
                      <Avatar
                        key={index}
                        size="small"
                        src={mainDomainOld + logoProp.value}
                        className="border-2 border-white shadow-lg"
                      />
                    ))}
                </div>
              </div>
            }
          >
            {/* هدر کارد */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                {car1.title}
              </h3>
              {/* عنوان انگلیسی */}
              {car1.properties?.find((prop: any) =>
                prop.propertyKey.includes("english_title")
              ) && (
                <p className="text-gray-500 text-sm">
                  {
                    car1.properties.find((prop: any) =>
                      prop.propertyKey.includes("english_title")
                    )?.value
                  }
                </p>
              )}
              {numEN1}
            </div>

            {/* لیست ویژگی‌ها */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {comparisonTableData.map((row, index) => (
                <div
                  key={row.key}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    index % 2 === 0
                      ? "bg-white border-gray-200"
                      : "bg-gray-50 border-gray-100"
                  } ${
                    row.car1 !== "---" &&
                    row.car2 !== "---" &&
                    row.car1 !== row.car2
                      ? "border-emerald-300 bg-emerald-25"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full ml-2 ${
                          row.car1 !== "---" &&
                          row.car2 !== "---" &&
                          row.car1 !== row.car2
                            ? "bg-red-500 animate-pulse"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <span className="font-semibold text-gray-800 text-sm">
                        {row.feature}
                      </span>
                    </div>
                    <span
                      className={`font-medium text-base ${
                        row.car1 !== "---"
                          ? "text-emerald-700"
                          : "text-gray-400 italic"
                      } ${
                        row.car1 !== "---" &&
                        row.car2 !== "---" &&
                        row.car1 !== row.car2
                          ? "text-emerald-600 font-bold"
                          : ""
                      }`}
                    >
                      {row.car1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>

        {/* کارد خودرو دوم */}
        <Col xs={24} md={12}>
          <Card
            className="shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 h-full"
            cover={
              <div className="relative p-6 bg-white">
                <img
                  src={mainDomainOld + car2.image}
                  alt={car2.title}
                  className="w-full h-80 object-contain"
                />
                {/* لوگوهای کوچک روی تصویر اصلی */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {car2.properties
                    ?.filter(
                      (prop: any) =>
                        prop.propertyKey.includes("logo") ||
                        prop.propertyKey.includes("brand")
                    )
                    .slice(0, 3)
                    .map((logoProp: any, index: number) => (
                      <Avatar
                        key={index}
                        size="small"
                        src={mainDomainOld + logoProp.value}
                        className="border-2 border-white shadow-lg"
                      />
                    ))}
                </div>
              </div>
            }
          >
            {/* هدر کارد */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {car2.title}
              </h3>
              {/* عنوان انگلیسی */}
              {car2.properties?.find((prop: any) =>
                prop.propertyKey.includes("english_title")
              ) && (
                <p className="text-gray-500 text-sm">
                  {
                    car2.properties.find((prop: any) =>
                      prop.propertyKey.includes("english_title")
                    )?.value
                  }
                </p>
              )}
             <span className=""> {numEN2}</span>
            </div>

            {/* لیست ویژگی‌ها */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {comparisonTableData.map((row, index) => (
                <div
                  key={row.key}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    index % 2 === 0
                      ? "bg-white border-gray-200"
                      : "bg-gray-50 border-gray-100"
                  } ${
                    row.car1 !== "---" &&
                    row.car2 !== "---" &&
                    row.car1 !== row.car2
                      ? "border-blue-300 bg-blue-25"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full ml-2 ${
                          row.car1 !== "---" &&
                          row.car2 !== "---" &&
                          row.car1 !== row.car2
                            ? "bg-red-500 animate-pulse"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <span className="font-semibold text-gray-800 text-sm">
                        {row.feature}
                      </span>
                    </div>
                    <span
                      className={`font-medium text-base ${
                        row.car2 !== "---"
                          ? "text-blue-700"
                          : "text-gray-400 italic"
                      } ${
                        row.car1 !== "---" &&
                        row.car2 !== "---" &&
                        row.car1 !== row.car2
                          ? "text-blue-600 font-bold"
                          : ""
                      }`}
                    >
                      {row.car2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      {/* خلاصه آماری */}
      <Card className="bg-linear-to-r from-gray-50 to-blue-50 border-0">
        <div className="flex justify-around items-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {
                comparisonTableData.filter(
                  (row) =>
                    row.car1 !== "---" &&
                    row.car2 !== "---" &&
                    row.car1 === row.car2
                ).length
              }
            </div>
            <div className="text-xs text-gray-600">ویژگی‌های مشترک</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {
                comparisonTableData.filter(
                  (row) =>
                    row.car1 !== "---" &&
                    row.car2 !== "---" &&
                    row.car1 !== row.car2
                ).length
              }
            </div>
            <div className="text-xs text-gray-600">ویژگی‌های متفاوت</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {comparisonTableData.length}
            </div>
            <div className="text-xs text-gray-600">کل ویژگی‌ها</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ComparisonTable;
