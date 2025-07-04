import ContactusSection from "../components/ContactusSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <FeatureSection />
        <TestimonialsSection />
        <ContactusSection />
      </div>
    </>
  );
}
