import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { testimonialData } from "../Data/TestimonialsData";

const Testimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change to 5000ms (5 seconds)

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  const currentTestimonial = testimonialData[currentTestimonialIndex];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mt-4 sm:mt-8 lg:mt-12 mb-4 sm:mb-8 lg:mb-16">
        <motion.div
          key={currentTestimonial.id}
          className="bg-gradient-to-r from-pink-200 to-purple-200 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg max-w-sm sm:max-w-md lg:max-w-lg w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-800 mb-4 text-sm sm:text-base lg:text-lg">
            {currentTestimonial.testimonial}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 fill-current text-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1l2.53 5.75h6.47l-4.96 4.63L17.32 18 10 14.27 2.68 18l1.98-6.62L.5 6.75h6.47L10 1z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <div className="text-right">
              <p className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                {currentTestimonial.course}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
