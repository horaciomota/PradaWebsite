import React from "react";
import "./index.css";

import HeroSection from "./Components/HeroSection";
import ProductsCard from "./Components/ProductsCard";
import OptionsSection from "./Components/OptionsSection";

const App = () => {
  return (
    <>
      <HeroSection />
      <main>
        <ProductsCard />
        <OptionsSection />
      </main>
    </>
  );
};

export default App;
