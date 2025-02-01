import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProductSection } from "../components/ProductSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";
import { BlogSection } from "../components/BlogSection";
import { Footer } from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductSection />
      <FaqSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </>
  );
};

export { Homepage };
