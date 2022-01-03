import React from "react";
import { NavLink } from "react-router-dom";
import './WatchesHome.css'


const WatchesHome = () => {


  return (
    <div className="min-h-screen home-watch-banner">
      <div className="">
        <div className="home-watch-content">
          <h2 className="home-watch-h2">Choose your favorite hand watch</h2>
          <h3 className="home-watch-h3">FashionStar Watch house</h3>
          <p style={{width: "44%"}}>A watch is very important to be punctual. If you use a watch you look smart and professional. Both men and women should use watch to be more professional.</p>
          <NavLink to="/watches"><button className="home-watch-btn">BROWSE ALL WATCHES</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default WatchesHome;