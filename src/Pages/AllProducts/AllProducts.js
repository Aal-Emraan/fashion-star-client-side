import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    fetch("https://thawing-plateau-57038.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  console.log(allProducts);
  return (
    <div className="min-h-screen text-white">
      <h1>this is all AllProducts {allProducts.length}</h1>
    </div>
  );
};

export default AllProducts;
