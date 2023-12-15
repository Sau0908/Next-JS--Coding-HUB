import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:order-last">
          <div className="text-lg font-semibold mb-4">CODING HUB</div>
          <div className="text-center lg:text-right">
            <p className="text-gray-400">123 Street, City, Country</p>
            <p className="text-gray-400">Email: xyz@abc.com</p>
            <p className="text-gray-400">Phone: +123456789</p>
          </div>
        </div>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:order-first">
          <li>
            <a href="#" className="block hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">
              Course
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
