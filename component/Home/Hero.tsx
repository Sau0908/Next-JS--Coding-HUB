import React from "react";
import Carousel from "./Carousel";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100">
      {/* Carousel */}
      <div className=" mt-6 md:w-1/2">
        <Carousel />
      </div>

      {/* Text Content */}
      <div className=" md:w-1/2 p-4 md:p-8">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif">
            Get World Class Course From World Class Mentors
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-sans leading-relaxed">
            Welcome to the Coding Hub, your gateway to mastering DSA,
            Development, and a plethora of technical skills. Here, we empower
            enthusiasts with the tools to unravel the complexities of Data
            Structures, Algorithms, and Development. In our vibrant community,
            we foster a passion for problem-solving and innovation. From the
            basics to advanced techniques, we nurture learning as a perpetual
            journey towards technical mastery. Join us in this dynamic space,
            where every keystroke unlocks new possibilities. At the Coding Hub,
            we don't just learn – we craft the future through the language of
            code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
