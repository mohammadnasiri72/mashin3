import CarBrandPricesSection from "./components/CarBrandPricesSection";
import CarComparisonSection from "./components/CarComparisonSection";
import CarSpecsSection from "./components/CarSpecsSection";
import CarTypes from "./components/CarTypes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import NewsListSection from "./components/NewsListSection";
import NewsSection from "./components/NewsSection";
import PopularCarsSection from "./components/PopularCarsSection";
import VideoBannerSection from "./components/VideoBannerSection";

export default function Home() {
  return (
    <div className="page-wrapper min-h-screen bg-[#f4f4f4]">
      <Header />

      <main className="content-box pt-4">
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
      </main>

      <Footer />
    </div>
  );
}
