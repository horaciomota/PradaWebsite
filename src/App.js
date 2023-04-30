import React from "react";
import "./index.css";

import HeroSection from "./Components/HeroSection";
import ProductsCard from "./Components/ProductsCard";
import OptionsSection from "./Components/OptionsSection";
import JeffGalery from "./Components/JeffGalery";
import LatestNews from "./Components/LatestNews";
import OurColections from "./Components/OurColections";

const App = () => {
  return (
    <>
      <HeroSection />
      <main>
        <ProductsCard />
        <OptionsSection />
        <JeffGalery />
        <OurColections />
        <LatestNews />
      </main>
    </>
  );
};

export default App;
