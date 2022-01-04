import React from "react";
import GlassesHome from "../Glasses/GlassesHome/GlassesHome";
import JewelleriesHome from "../Jewelaries/JewelariesHome/JewelleriesHome";
import WatchesHome from "../Watches/WatchesHome/WatchesHome";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <WatchesHome />
      <GlassesHome />
      <JewelleriesHome />
    </div>
  );
};

export default Home;
