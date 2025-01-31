import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

export { App };
