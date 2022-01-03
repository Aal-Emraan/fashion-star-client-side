import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const GlassesHome = () => {
  return (
    <div className="h-screen ">
      <div className="bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/sHqWtR6/photo-1577803645773-f96470509666.jpg')] h-full">

        <div style={{ backgroundColor: 'rgb(0 0 0 / 67%)' }} className="w-full h-full flex justify-center items-center">
          <div className="text-center ">
            <h2 className="text-6xl mb-4 text-gray-100 font-mono ">We have world best Glasses</h2>
            <h6 className="text-xl mb-4 text-gray-200 font-light">Find out your best glasses and get free home delivery in some glasses</h6>
            <Button component={NavLink} to='/glasses' variant="contained" color='error'>Browse All Products</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassesHome;
