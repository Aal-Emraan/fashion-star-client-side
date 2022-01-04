import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <div className="bg-black px-3 md:px-0 sticky top-0 z-50 opacity-95">
      <nav className="container mx-auto py-5 flex justify-between items-center text-white">
        <div>
          <NavLink className="text-2xl md:text-4xl" to="/">
            FasionStar
          </NavLink>
        </div>
        <div className="hidden md:block">
          <div className="flex space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allproducts">All Products</NavLink>
            <NavLink to="/watches">Watches</NavLink>
            <NavLink to="/glasses">Glasses</NavLink>
            <NavLink to="/jewelleries">Jewelleries</NavLink>
            <NavLink to="/myorders">My Orders</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
