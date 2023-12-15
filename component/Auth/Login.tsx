import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "@/redux/authSlice";
import { Dispatch } from "redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginAsync({ email, password }));
      console.log("Login Successful");
      toast.success("Login Succesfull");
      router.push("/");
    } catch (error) {
      console.log("Login failed");
      toast.error("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login to CodingHub</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
