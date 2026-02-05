import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border-gray-400 border mt-10">
      {/* Hero Left Side */}
      <div className="flex justify-center items-center py-10 w-full sm:w-1/2 sm:py-0">
        <div>
          <div className="flex gap-2 items-center">
            <hr className=" w-8 md:w-11 h-0.5 bg-gray-500" />
            <p className="uppercase font-medium text-sm md:text-base">
              our bestsellers
            </p>
          </div>

          <h1 className="text-3xl prata-regular  sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          <div className="flex gap-2 uppercase items-center">
            <p className="font-semibolds text-sm md:text-base">Shop Now</p>
            <hr className="w-8 md:w-11 h-0.5 bg-gray-500" />
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img className="w-full sm:w-1/2" src={assets.belt} alt="" />
    </div>
  );
};

export default Hero;
