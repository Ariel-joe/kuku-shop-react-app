import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export { App };
