import React, { useState } from "react";
import "./Watches.css";
import useProducts from "../../../hooks/useProducts";
import WatchesSingle from "./WatchesSingle/WatchesSingle";

const Watches = () => {
  const [products] = useProducts();
  // let selectedProducts = products;
  const [product, setProduct] = useState(products);
  console.log(products);

  const allSelect = () => {
    // selectedProducts = products;
    setProduct(products);
  };

  const menSelect = () => {
    const selectedProducts = products.filter(
      (product) => product.for === "men"
    );
    setProduct(selectedProducts);
  };
  const womenSelect = () => {
    const selectedProducts = products.filter(
      (product) => product.for === "women"
    );
    setProduct(selectedProducts);
  };
  const kidSelect = () => {
    const selectedProducts = products.filter(
      (product) => product.for === "kid"
    );
    setProduct(selectedProducts);
  };

  return (
    <div className="min-h-screen">
      <div className="watches">
        <div className="watches-content">
          <div className="watches-title flex justify-between">
            <h2 style={{ width: "30%" }}>Watches For You</h2>
            <div style={{ width: "70%", textAlign: "end" }}>
              <button
                onClick={allSelect}
                id="allProducts"
                className="watches-content-btn"
              >
                All Watches
              </button>
              <button
                onClick={menSelect}
                id="menProducts"
                className="watches-content-btn"
              >
                Men's Watches
              </button>
              <button
                onClick={womenSelect}
                id="womenProducts"
                className="watches-content-btn"
              >
                Women's Watches
              </button>
              <button
                onClick={kidSelect}
                id="kidProducts"
                className="watches-content-btn"
              >
                Kid's All Watches
              </button>
            </div>
          </div>

          <div className="Watches-products">
            {product.map((product) => (
              <WatchesSingle
                key={product.title}
                product={product}
              ></WatchesSingle>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
