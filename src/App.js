import React from "react";
import "./index.css";

import HeroSection from "./Components/HeroSection";
import ProductsCard from "./Components/ProductsCard";
import OptionsSection from "./Components/OptionsSection";
import JeffGalery from "./Components/JeffGalery";

const App = () => {
  return (
    <>
      <HeroSection />
      <main>
        <ProductsCard />
        <OptionsSection />
        <JeffGalery/>
      </main>
    </>
  );
};

export default App;
