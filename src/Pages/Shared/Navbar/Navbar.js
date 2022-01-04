import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { logout, selectData } from '../../../dataSlice/dataSlice'
import useFirebase from "../../../Hooks/useFirebase";
const Navbar = () => {
  const { handleSignOut } = useFirebase();
  // get cart value form redux
  const data = useSelector(selectData)
  return (
    <div className="bg-black sticky top-0 z-50 opacity-95">
      <nav className="container mx-auto py-5 flex justify-between items-center text-white">
        <div>
          <NavLink className="text-4xl" to="/">
            FasionStar
          </NavLink>
        </div>
        <div className="flex space-x-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allproducts">All Products</NavLink>
          <NavLink to="/watches">Watches</NavLink>
          <NavLink to="/glasses">Glasses</NavLink>
          <NavLink to="/jewelaries">Jewelaries</NavLink>
          {
            data.user.email && <NavLink to="/myorders">My Orders</NavLink>
          }
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/cart">
            <ShoppingCartIcon></ShoppingCartIcon>
            <sup className="text-red-400">{data.cart.length}</sup>
          </NavLink>
          {

            data?.user.email ? <button onClick={handleSignOut}>Logout</button> : <NavLink to="/login">Login</NavLink>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
