const { useEffect } = require("react");
const { useState } = require("react");

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://thawing-plateau-57038.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products];
};

export default useProducts;
