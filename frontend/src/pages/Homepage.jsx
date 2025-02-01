import { HeroSection } from "../components/HeroSection";
import { FaqSection } from "../components/FaqSection";
import { BlogSection } from "../components/BlogSection";
import { Footer } from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FaqSection />
      <BlogSection />
      <Footer />
    </>
  );
};

export { Homepage };
