import React from "react";
import GlassesHome from "../Glasses/GlassesHome/GlassesHome";
// import JewelleryHome from "../Jewelaries/JewelariesHome/JewelleryHome";
import JewelleryHome from "../Jewellery/JewelleryHome/JewelleryHome";
import Header from "../Shared/Header/Header";
import WatchesHome from "../Watches/WatchesHome/WatchesHome";
import Banner from "./Banner/Banner";
import ExtraPart from "./ExtraPart/ExtraPart";

const Home = () => {
  return (
    <div>
      <Banner />
      <WatchesHome />
      <GlassesHome />
      <JewelleryHome />
      <ExtraPart />
    </div>
  );
};

export default Home;
