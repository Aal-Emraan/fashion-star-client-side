import React, { useEffect, useState } from "react";
import "./Login.css";
import google from "../../img/google.png";
import facebook from "../../img/facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    alert("form submitted.");
    e.preventDefault();
  };

  return (
    <div id="login" className="min-h-screen">
      <div className="container mx-auto">
        <div className="md:w-1/2 py-10">
          <h1 className="text-white font-semibold text-6xl text-center mb-10">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              className="rounded-full p-5"
              type="email"
              name="email"
              placeholder="Your email..."
              id=""
            />
            <input
              className="rounded-full p-5"
              type="password"
              name="password"
              placeholder="password"
              id=""
            />
            <div className="flex justify-between px-5">
              <div>
                <input
                  className="mr-3"
                  type="checkbox"
                  name="Remember me"
                  id="remember_me"
                />
                <label className="text-white" htmlFor="remember_me">
                  Remember me
                </label>
              </div>
              <p className="text-white">Forget Password?</p>
            </div>
            <input
              id="submit"
              className=" rounded-full p-5 text-white text-2xl font-semibold cursor-pointer"
              type="submit"
              value="Login"
            />
          </form>
          <p className="text-white my-3 px-4 text-center">
            New user?{" "}
            <Link className="text-blue-500 font-semibold italic" to="/register">
              Register here
            </Link>
          </p>
          <p className="text-gray-200 text-center text-xl">
            ---------------------- OR -----------------------
          </p>
          <div className="flex justify-between mt-4 px-10">
            <button
              id="google"
              className="bg-white rounded-full p-3 border-2 flex items-center space-x-2"
            >
              <img src={google} alt="" width={20} />
              <span>Sign in with Google</span>
            </button>
            <button
              id="facebook"
              className="rounded-full p-3 bg-white flex items-center space-x-2"
            >
              <img src={facebook} alt="" width={20} />
              <span>Sign in with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
