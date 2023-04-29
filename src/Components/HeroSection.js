import React from "react";

import hero1 from "../Images/Hero2.jpg";
import hero2 from "../Images/Hero3.jpg";
import hero3 from "../Images/Hero1.jpg";

import Header from "./Header";

export default function HeroSection() {
  return (
    <>
      <Header />
      <section className="bg-gray-500 ">
        <div className="relative isolate ">
          <div class="flex flex-wrap lg:h-screen  ">
            {/* Hero Image 1 */}
            <div class="w-full lg:w-1/3  bg-gray-300">
              <img
                src={hero3}
                alt=""
                className="mx-auto object-cover object-right w-full h-full hidden lg:block"
              />
            </div>
            {/* Hero Image 1 */}
            <div class="w-full lg:w-1/3 bg-gray-400">
              <img
                src={hero1}
                alt=""
                className="mx-auto object-cover w-full h-full"
              />
            </div>
            {/* Hero Image 1 */}
            <div class="w-full lg:w-1/3 bg-gray-500 ">
              <img
                src={hero2}
                alt=""
                className="mx-auto object-cover w-full h-full hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
