import React from "react";
import './Watches.css'
import { NavLink } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import WatchesSingle from "./WatchesSingle/WatchesSingle";

const Watches = () => {
  const [products] = useProducts();
  return (
    <div className="min-h-screen">
      <div className="watches">
        <div className="watches-content">
        <div className="watches-title flex justify-between">
          <h2>Watches For You</h2>
          <NavLink to="/"><button className="watches-content-btn">Browse All Watches</button></NavLink>
        </div>

        <div className="Watches-products">
          {
            products.map(product => <WatchesSingle
                                                      key={product.title}
                                                      product={product}
                                                      ></WatchesSingle>)
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
