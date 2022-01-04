import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { logout, selectData } from "../../../dataSlice/dataSlice";
import useFirebase from "../../../Hooks/useFirebase";
const Navbar = () => {
  const { handleSignOut } = useFirebase();
  // get cart value form redux
  const data = useSelector(selectData);
  return (
    <div className="bg-black px-3 md:px-0 sticky top-0 z-50 opacity-95">
      <nav className="container mx-auto py-5 flex justify-between items-center text-white">
        <div>
          <NavLink className="text-2xl md:text-4xl" to="/">
            <img className="w-full" src="https://i.ibb.co/JnwD7Bz/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="md:flex space-x-10 hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allproducts">All Products</NavLink>
          <NavLink to="/watches">Watches</NavLink>
          <NavLink to="/glasses">Glasses</NavLink>
          <NavLink to="/jewelaries">Jewelaries</NavLink>
          {data.user.email && <NavLink to="/myorders">My Orders</NavLink>}
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/cart">
            <ShoppingCartIcon></ShoppingCartIcon>
            <sup className="text-red-400">{data.cart.length}</sup>
          </NavLink>
          {data?.user.email ? (
            <button onClick={handleSignOut}>Logout</button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
        <div className=" md:hidden">
          <MenuIcon></MenuIcon>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
