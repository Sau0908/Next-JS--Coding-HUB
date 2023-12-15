import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { signUpAsync, signInWithGoogleAsync } from "@/redux/authSlice";
import { Dispatch } from "redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.length < 7) {
      console.error("Password should be at least 7 characters long.");
      toast.error("Password should be at least 7 characters long.");
      return;
    }

    try {
      dispatch(signUpAsync({ email: email, password: password }));

      console.log("signup Sucess");
      toast.success("Signup Success");
      router.push("/");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error Occured!");
    }
  };
  const handleGoogle = async () => {
    try {
      await dispatch(signInWithGoogleAsync());
      router.push("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Next
          </button>
          <button
            onClick={handleGoogle}
            className="relative w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <AiFillGoogleCircle size={30} />
            </span>
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?
            <Link href="/login">
              <span className="font-bold"> LogIn</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
