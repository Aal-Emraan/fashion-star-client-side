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
    <div>
      <h1>this is all AllProducts</h1>
    </div>
  );
};

export default AllProducts;
