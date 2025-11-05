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

export default function Home() {
  return (
    <div className="page-wrapper min-h-screen bg-[#f4f4f4]">
      <div className="content-box pt-4">
        {/* Banner Top */}
        <div className="bannerTop_wrap mb-8">
          <div className="mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="banner_box rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <a href="#">
                  <img
                    src="/images/gallery/banner-2.jpg"
                    alt="Banner"
                    className="w-full h-auto rounded-2xl transition-transform hover:scale-105"
                  />
                </a>
              </div>
              <div className="banner_box rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <a href="#">
                  <img
                    src="/images/gallery/banner-1.jpg"
                    alt="Banner"
                    className="w-full h-auto rounded-2xl transition-transform hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Slider */}
        <HeroSlider />

        {/* News and Comparison */}
        <NewsSection />

        {/* Car Types */}
        <CarTypes />

        {/* Video Banner Section */}
        <VideoBannerSection />

        {/* News List Section */}
        <NewsListSection />

        {/* Car Specs Section */}
        <CarSpecsSection />

        {/* Popular Cars Section */}
        <PopularCarsSection />

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
