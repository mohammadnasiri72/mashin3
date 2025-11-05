import CarDetails from "./components/CarDetails";
import ContentTabs from "./components/ContentTabs";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";

export default function Product() {
  return (
    <>
      <HeroSection />
      <CarDetails />
      <FeaturesSection />
      <ContentTabs />
    </>
  );
}
