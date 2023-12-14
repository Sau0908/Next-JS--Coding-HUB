import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 sm:my-4 md:my-4 lg:my-4 xl:my-4 bg-white transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <div className="w-full h-64 lg:h-72 overflow-hidden">
          <img
            className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-12 xl:h-12 rounded-full overflow-hidden shadow-md border-4 border-white">
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={title}
            />
          </div>
          <div className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-base mt-2">
            {title}
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg ">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-600"></div>
    </div>
  );
};

export default Card;
