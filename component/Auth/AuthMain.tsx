import React from "react";
import { AiOutlineMail, AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithGoogleAsync } from "@/redux/authSlice";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthMain = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();
  const handleWithGoogle = async () => {
    try {
      await dispatch(signInWithGoogleAsync());
      toast.success("Login Success");
      router.push("/");
    } catch (error) {
      console.log("error");
      toast.error("Error Occurred!");
    }
  };
  const handleWithEmail = () => {
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Welcome to CodingHub</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleWithGoogle}
            className="relative w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <AiFillGoogleCircle size={30} />
            </span>
            Continue with Google
          </button>

          <button
            onClick={handleWithEmail}
            className="relative w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <AiOutlineMail size={30} />
            </span>
            Continue with Email
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?
            <Link href="/signup">
              {" "}
              <span className="font-bold"> Sign up</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthMain;
