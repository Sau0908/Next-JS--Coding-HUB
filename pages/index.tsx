import { Inter } from "next/font/google";
import Main from "@/component/Home/Main";
import { Provider } from "react-redux";
import store, { RootState } from "@/store/combineReducers";
import Login from "@/component/Auth/Login";
import Signup from "@/component/Auth/Signup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// Ensure you've imported your fonts correctly
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Main />;
}
