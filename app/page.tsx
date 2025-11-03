import CarTypes from "./components/CarTypes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import NewsSection from "./components/NewsSection";
import PopularCars from "./components/PopularCars";

export default function Home() {
  return (
    <div className="page-wrapper min-h-screen bg-gray-50">
      <Header />

      <main className="content-box pt-4">
        {/* Banner Top */}
        <div className="bannerTop_wrap mb-8">
          <div className="container mx-auto px-4">
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

        {/* Popular Cars */}
        <PopularCars />
      </main>

      <Footer />
    </div>
  );
}
