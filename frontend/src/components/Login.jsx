import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {useForm} from "react-hook-form";



const Login = () => {
    const [message , setMessage] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleGoogleSignIn =() =>{}
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center ">
      <div className="w-full max-w-sm mx-auto bg-white rounded-md shadow-md pt-6 px-8 mb-4 pb-8">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2 text-gray-500"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              id="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2 text-gray-500"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: "Password must include at least one letter and one number",
                },
              })}
              type="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Error Message */}
          {message && (
            <p className="text-red-500 text-xs mt-2 italic font-bold">{message}</p>
          )}

          {/* Submit Button */}
          <div>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded focus:outline-none px-8 py-2">
              Login
            </button>
          </div>
        </form>

        {/* Registration Link */}
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven't account? Please{" "}
          <Link
            to="/register"
            className="font-bold text-blue-400 hover:text-blue-700"
          >
            Register
          </Link>
        </p>

        {/* Google Sign In */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="rounded-sm w-full flex items-center justify-center bg-slate-700 hover:bg-blue-700 text-white font-bold px-4 py-2 focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">------</p>
      </div>
    </div>
  );
};

export default Login;
