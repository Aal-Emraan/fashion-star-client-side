import React from "react";
import GlassesHome from "../Glasses/GlassesHome/GlassesHome";
import JewelleriesHome from "../Jewelaries/JewelariesHome/JewelleriesHome";
import WatchesHome from "../Watches/WatchesHome/WatchesHome";
import Banner from "./Banner/Banner";
import ExtraPart from "./ExtraPart/ExtraPart";

const Home = () => {
  return (
    <div>
      <Banner />
      <WatchesHome />
      <GlassesHome />
      <JewelleriesHome />
      <ExtraPart />
    </div>
  );
};

export default Home;
