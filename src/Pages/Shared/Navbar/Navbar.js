import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-400">
      <nav className="container mx-auto py-5 flex justify-between text-white font-semibold">
        <NavLink to="/">FasionStar</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allproducts">All Products</NavLink>
        <NavLink to="/watches">Watches</NavLink>
        <NavLink to="/glasses">Glasses</NavLink>
        <NavLink to="/jewelaries">Jewelaries</NavLink>
        <NavLink to="/myorders">My Orders</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
