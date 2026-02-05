import React from "react";
import {
  RiExchangeLine,
  RiShieldCheckFill,
  RiCustomerServiceFill,
} from "@remixicon/react";

const OurPolicy = () => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-center 
    items-center sm:items-start my-20"
    >
      <div>
        <RiExchangeLine size={40} className="mb-5 m-auto" />
        <p className="text-gray-800">Easy Exchange Policy</p>
        <p className="text-gray-500">We offer hassle free exchange policy</p>
      </div>
      <div>
        <RiShieldCheckFill size={40} className="mb-5 m-auto" />
        <p className="text-gray-800">7 Days Return Policy</p>
        <p className="text-gray-500">
          We provide 1 min free return policy <br />
          i.e samjine pani chamkine
        </p>
      </div>
      <div>
        <RiCustomerServiceFill size={40} className="mb-5 m-auto" />
        <p className="text-gray-800">Best customer support</p>
        <p className="text-gray-500">Will laugh at you if you call</p>
      </div>
    </div>
  );
};

export default OurPolicy;
