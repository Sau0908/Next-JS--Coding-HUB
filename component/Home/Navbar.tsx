import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "@/redux/authSlice";
import { Dispatch } from "redux";
import { RootState } from "@/store/combineReducers";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';

interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Course", link: "/#course" },
  { name: "Contact", link: "/#contact" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    try {
      dispatch(logoutAsync());
      toast.success("User Logout");
    } catch (error) {
      toast.error("Error Occured!");
    }
  };

  const checkAuth = () => {
    return isLoggedIn;
  };

  const isAuthenticated = checkAuth();

  const handleMenuItemClick = (link: string) => {
    if (!isAuthenticated && link !== "/" && link !== "/auth") {
      router.push("/auth");
    } else {
      const cleanUrl = link.replace("#", "");
      router.push(cleanUrl);
    }
  };

  return (
    <nav className="bg-gray-600 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-3xl font-bold tracking-wider cursor-pointer">
            CODING HUB
          </div>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.293 7.293a1 1 0 011.414-1.414L10 12.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.293 6.293a1 1 0 010 1.414L11.414 10l1.879 1.879a1 1 0 11-1.414 1.414L10 11.414l-1.879 1.879a1 1 0 11-1.414-1.414L8.586 10 6.707 8.121a1 1 0 111.414-1.414L10 8.586l1.879-1.879a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 lg:items-center flex-col lg:flex-row`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="mb-3 lg:mb-0">
              <div
                onClick={() => handleMenuItemClick(item.link)}
                className={`text-white text-xl cursor-pointer ${
                  (isAuthenticated || item.name === "Home") && isOpen
                    ? ""
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </div>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-white text-xl px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link href="/auth">
                <span className="text-white text-xl px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer shadow-md">
                  Login
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
