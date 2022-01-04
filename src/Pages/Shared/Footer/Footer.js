import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black px-3 md:px-0 py-10">
      <div className="container mx-auto border border-orange-300 p-5 rounded-xl">
        <div className="grid grid-cols-1 space-y-10 md:grid-cols-3 text-white py-5">
          <div>
            <h3 className="text-xl">Products & Services</h3>
            <ul className=" mt-5 md:mt-10">
              <li className="font-mono mb-3">Watches</li>
              <li className="font-mono mb-3">Glasses</li>
              <li className="font-mono mb-3">Jewelleries</li>
              <li className="font-mono">All Products</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">About Us</h3>
            <ul className="mt-5 md:mt-10">
              <li className="font-mono mb-3">Store Info</li>
              <li className="font-mono mb-3">Aftersell Services</li>
              <li className="font-mono mb-3">Privacy & Policy</li>
              <li className="font-mono">Career</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Contact Us</h3>
            <div>
              <form className="flex flex-col space-y-3 w-3/4 mt-5">
                <input
                  className="rounded-full p-2 italic text-sm font-mono"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
                <textarea
                  className="rounded-xl p-2 italic text-sm font-mono"
                  placeholder="Type your query..."
                  name=""
                  id=""
                  cols="1"
                  rows="3"
                ></textarea>
                <input
                  className="bg-red-400 hover:bg-red-500 cursor-pointer p-2 rounded-full"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-orange-300">
          <p className="text-white text-center mt-5">
            &copy; Copyright FashionStar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
