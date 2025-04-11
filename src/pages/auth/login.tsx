import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="loginImage h-screen w-full flex items-center justify-center ">
      <div className="bg-white rounded-2xl shadow-lg p-8  w-[90%] max-w-md ">
        <h1
          className="text-[32px] font-black text-center text-[#002F19] leading-[100%]"
          style={{ fontFamily: "Satoshi" }}
        >
          Welcome Back!{" "}
        </h1>
        <p className="text-center text-sm text-gray-500 mt-4 mb-6">
          Lorem ipsum
        </p>
        <form action="">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className="pr-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  "
              />
              <span
                className="absolute inset-y-0 right-3 top-3 cursor-pointer text-gray-400"
                onClick={togglePassword}
              >
                {showPassword ? "🙈" : "👁️"}
                {/* Replace with an actual eye icon if using icon libraries */}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-5">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-900" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-black font-md hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="mt-20 w-full bg-[#001272] text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
