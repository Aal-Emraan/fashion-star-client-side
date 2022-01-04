import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import google from "../../img/google.png";
import facebook from "../../img/facebook.png";
import { useLocation, useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
const Register = () => {
  const { handleRegister } = useFirebase();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = useRef({});
  const location = useLocation();
  const navigate = useNavigate();
  password.current = watch("password", "");
  const onSubmit = data => {
    console.log('click', data);
    handleRegister({ name: data.name, email: data.email, password: data.password, location, navigate });
  }
  return (
    <div id="signup" className="min-h-screen bg-slate-400">
      <div className="container mx-auto">
        <div className="md:w-1/2 ml-auto py-10">
          <h1 className="text-white font-semibold text-6xl text-center mb-10">
            Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
            <input
              className="rounded-full p-5"
              type="text"
              placeholder="Full name..."
              {...register("name", { required: true })}
            />
            {
              errors.name && <div className="text-red-600">*This filed is required</div>
            }
            <input
              className="rounded-full p-5"
              type="email"
              placeholder="Your email..."
              {...register("email", { required: true })}
            />
            {
              errors.email && <div className="text-red-600">*This filed is required</div>
            }
            <input
              className="rounded-full p-5"
              type="password"
              placeholder="Password..."
              {...register("password", { required: true, minLength: 6 })}
            />
            {
              errors.password && <div className="text-red-600">*password must be 6 length</div>
            }
            <input
              className="rounded-full p-5"
              type="password"
              placeholder="Re-type password..."
              {...register("password2", {
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
            />
            {
              errors.password2 && <div className="text-red-600">*{errors.password2.message}</div>
            }
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
