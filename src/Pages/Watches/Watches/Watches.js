import React, { useEffect, useState } from "react";
import "./Watches.css";
import useProducts from "../../../Hooks/useProducts";
import "./Watches.css";
import WatchesSingle from "./WatchesSingle/WatchesSingle";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectData, setLoading, changeViewProducts, setViewProducts } from "../../../dataSlice/dataSlice";


const Watches = () => {

  const dispatch = useDispatch();
  const data = useSelector(selectData);
  
  useEffect(() => {
    dispatch(getProducts({ category: 'watch' }))
  }, []);

  console.log(data);

  const [products] = useProducts();
  // let selectedProducts = products;
  const [product, setProduct] = useState(products);
  console.log(products);

  useEffect(() => {
    setProduct(products);
  }, [products]);

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
                onClick={() => dispatch(setViewProducts({ type: 'all' }))}
                id="allProducts"
                className="watches-content-btn"
              >
                All Watches
              </button>
              <button
                onClick={() => dispatch(changeViewProducts({ for: 'men' }))}
                id="menProducts"
                className="watches-content-btn"
              >
                Men's Watches
              </button>
              <button
                onClick={() => dispatch(changeViewProducts({ for: 'women' }))}
                id="womenProducts"
                className="watches-content-btn"
              >
                Women's Watches
              </button>
              <button
                onClick={() => dispatch(changeViewProducts({ for: 'kid' }))}
                id="kidProducts"
                className="watches-content-btn"
              >
                Kid's All Watches
              </button>
            </div>
          </div>

          <div className="Watches-products">
            {data.viewProducts.map((product) => (
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
