import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import google from "../../img/google.png";
import facebook from "../../img/facebook.png";

const Register = () => {
  return (
    <div id="signup" className="min-h-screen bg-slate-400">
      <div className="container mx-auto">
        <div className="md:w-1/2 ml-auto py-10">
          <h1 className="text-white font-semibold text-6xl text-center mb-10">
            Register
          </h1>
          <form className="flex flex-col space-y-5">
            <input
              className="rounded-full p-5"
              type="text"
              name="Name"
              id=""
              placeholder="Full name..."
            />
            <input
              className="rounded-full p-5"
              type="email"
              name="Email"
              placeholder="Your email..."
              id=""
            />
            <input
              className="rounded-full p-5"
              type="password"
              name="Password"
              placeholder="Password..."
              id=""
            />
            <input
              className="rounded-full p-5"
              type="password"
              name="Password"
              placeholder="Re-type password..."
              id=""
            />
            <input
              className="rounded-full p-5 bg-gray-500 text-2xl text-white"
              type="submit"
              value="Register"
            />
          </form>
          <p className="text-white my-3 px-4 text-center">
            Already Registered?{" "}
            <Link className="text-blue-500 font-semibold italic" to="/login">
              Login here
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

export default Register;
