import { getItem } from "@/services/Item/Item";
import CarAdsSection from "../components/CarAdsSection";
import CarBrandPricesSection from "../components/CarBrandPricesSection";
import CarComparisonSection from "../components/CarComparisonSection";
import CarFinderSection from "../components/CarFinderSection";
import CarSpecsSection from "../components/CarSpecsSection";
import CarTypes from "../components/CarTypes";
import HeroSlider from "../components/HeroSlider";
import MotorcycleBrandsSection from "../components/MotorcycleBrandsSection";
import NewsListSection from "../components/NewsListSection";
import NewsSection from "../components/NewsSection";
import PopularCarsSection from "../components/PopularCarsSection";
import ServicesSection from "../components/ServicesSection";
import VideoBannerSection from "../components/VideoBannerSection";

export default async function Home() {
  const slider: Items[] = await getItem({ TypeId: 6, langCode: "fa" });

  const news: Items[] = await getItem({
    TypeId: 5,
    langCode: "fa",
    PageIndex: 1,
    PageSize: 6,
  });
  const saleNews: Items[] = await getItem({
    TypeId: 5,
    langCode: "fa",
    CategoryIdArray: "6593",
    PageIndex: 1,
    PageSize: 4,
  });
  const lastCompare: Items[] = await getItem({
    TypeId: 1045,
    langCode: "fa",
    PageIndex: 1,
    PageSize: 1,
  });
  const segmentCars: Items[] = await getItem({
    TypeId: 1048,
    langCode: "fa",
  });
  const video: Items[] = await getItem({
    TypeId: 1028,
    langCode: "fa",
    PageIndex: 1,
    PageSize: 1,
  });
  const carSpecs: Items[] = await getItem({
    TypeId: 1042,
    langCode: "fa",
    PageIndex: 1,
    PageSize: 12,
  });
  const carView: Items[] = await getItem({
    TypeId: 1042,
    langCode: "fa",
    OrderBy: 5,
    PageIndex: 1,
    PageSize: 12,
  });

  return (
    <div className="page-wrapper min-h-screen bg-[#f4f4f4]">
      <div className="content-box pt-4">
        {/* Hero Slider */}
        <HeroSlider slider={slider} />

        {/* News and Comparison */}
        <NewsSection
          news={news.slice(0, 2)}
          saleNews={saleNews}
          lastCompare={lastCompare}
        />

        {/* Car Types */}
        <CarTypes segmentCars={segmentCars} />

        {/* Video Banner Section */}
        <VideoBannerSection video={video} />

        {/* News List Section */}
        <NewsListSection news={news} />

        {/* Car Specs Section */}
        <CarSpecsSection carSpecs={carSpecs} />

        {/* Popular Cars Section */}
        <PopularCarsSection carView={carView} />

        {/* Car Comparison Section */}
        <CarComparisonSection />

        {/* Car BrandPrices Section */}
        <CarBrandPricesSection />

        {/* Motorcycle Brands Section */}
        <MotorcycleBrandsSection />

        {/* Car Finder Section */}
        <CarFinderSection />

        {/* Car Ads Section */}
        <CarAdsSection />

        {/* Services Section */}
        <ServicesSection />
      </div>
    </div>
  );
}
