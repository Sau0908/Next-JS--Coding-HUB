import React from "react";
import CardsContainer from "./CardsContainer";
import Testimonials from "./Testimonials";

const YourComponent: React.FC = () => {
  const backgroundStylesOne = {
    backgroundImage: `url('https://img.freepik.com/free-vector/background-abstract-line-digital-gradient-luxury_483537-2356.jpg?w=826&t=st=1702586248~exp=1702586848~hmac=dbe1930ce0c34c52ebd7a9ad5eda3ab10edc15b94a4a2656b537e3e3ea5b3f2b')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="text-center px-4 py-6 sm:px-6 lg:px-8">
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
          WHY CODING-HUB?
        </h4>
        <h1 className="font-extrabold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
          Making learning easier and more convenient for you.
        </h1>
        <CardsContainer />
      </div>
      <div className="border-t-2 border-gray-400 my-4 sm:my-6 w-full"></div>
      <div className="text-center py-6 sm:py-8" style={backgroundStylesOne}>
        <div className="bg-black h-px w-1/2 mx-auto mb-3 sm:mb-4"></div>
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black">
          WHAT STUDENT SAYS
        </h4>
        <div className="bg-black h-px w-1/3 mx-auto mb-3 sm:mb-4"></div>
        <h1 className="font-extrabold text-base sm:text-lg lg:text-xl mb-3 sm:mb-6 text-black">
          Recent Reviews
        </h1>
        <div className="bg-black h-px w-1/5 mx-auto mb-3 sm:mb-4"></div>
        <Testimonials />
      </div>
    </div>
  );
};

export default YourComponent;
