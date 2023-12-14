import { useState, useEffect } from "react";
import { slides } from "../Data/CarouselData";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slides every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex justify-start">
      <div className="max-w-lg w-full mx-auto">
        {" "}
        {/* Adjust alignment by adding left padding */}
        <div className="flex items-center">
          <div className="w-full relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={slides[currentSlide].imageUrl}
                className="w-full md:h-auto md:max-h-80 lg:max-h-full"
                alt="Slide"
              />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
              <button
                onClick={prevSlide}
                className="text-white text-lg focus:outline-none"
              >
                &lt;
              </button>
              <button
                onClick={nextSlide}
                className="text-white text-lg focus:outline-none"
              >
                &gt;
              </button>
            </div>
            <p className="text-center text-white mt-2"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
