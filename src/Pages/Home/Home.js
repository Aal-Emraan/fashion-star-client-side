import React from "react";
import GlassesHome from "../Glasses/GlassesHome/GlassesHome";
import JewelariesHome from "../Jewelaries/JewelariesHome/JewelariesHome";
import Header from "../Shared/Header/Header";
import WatchesHome from "../Watches/WatchesHome/WatchesHome";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <WatchesHome />
      <GlassesHome />
      <JewelariesHome />
    </div>
  );
};

export default Home;
