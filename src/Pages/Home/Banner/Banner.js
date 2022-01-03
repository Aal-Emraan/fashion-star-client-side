import React from "react";
import "./Banner.css";
import braclet from "../../../img/braclet.jpg";
import sunglass from "../../../img/sunglass.jpg";
import watch from "../../../img/watch11.jpg";

const Banner = () => {
  return (
    <div id="banner" className="min-h-screen">
      <div className="container mx-auto text-white">
        <div className=" pt-16">
          <h1 className="text-6xl text-center mb-5 font-mono font-semibold">
            TAKE YOUR LUXURY TO THE NEXT LEVEL
          </h1>
          <h1 className="text-4xl text-center font-serif">
            WITH OUR WORLD CLASS
          </h1>
        </div>
        <div className="grid grid-cols-3 min-h-max gap-5 mt-10">
          <div id="div1" className="min-h-full ">
            <div data-aos="fade-right">
              <img
                className="opacity-80 scale-90 rounded-2xl hover:scale-110 duration-300 hover:opacity-100"
                src={braclet}
                alt=""
              />
            </div>
            <div className="py-3">
              <h2 className="text-3xl text-center font-serif">JEWELLERIES</h2>
            </div>
          </div>
          <div id="div2">
            <div>
              <img
                className="opacity-80 scale-90 rounded-2xl hover:scale-110 duration-300 hover:opacity-100"
                src={sunglass}
                alt=""
              />
            </div>
            <div className="py-3">
              <h2 className="text-3xl text-center font-serif">GLASSES</h2>
            </div>
          </div>
          <div>
            <div>
              <img
                className="opacity-80 scale-90 rounded-2xl hover:scale-110 duration-300 hover:opacity-100"
                src={watch}
                alt=""
              />
            </div>
            <div className="py-3">
              <h2 className="text-3xl text-center font-serif">WATCHES</h2>
            </div>
          </div>
        </div>
        <div
          id="discount"
          className=" p-10  italic rounded-xl relative top-16 opacity-90"
        >
          <h2 className="text-5xl text-center font-mono">
            GET 20% DISCOUNT ON YOUR FIRST PURCHASE!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
