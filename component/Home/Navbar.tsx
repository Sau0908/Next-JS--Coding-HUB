import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "@/redux/authSlice";
import { Dispatch } from "redux";
import { RootState } from "@/store/combineReducers";
import { useRouter } from "next/router";

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
    dispatch(logoutAsync());
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
        <ul
          className={`hidden lg:flex space-x-4 items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex items-end space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleMenuItemClick(item.link)}
                  className={`text-white text-xl cursor-pointer ${
                    isAuthenticated || item.name === "Home"
                      ? ""
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </div>
              </li>
            ))}
          </div>
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
