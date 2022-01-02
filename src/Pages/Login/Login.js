import React, { useEffect, useState } from "react";

const Login = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);
  return (
    <div>
      <h1>this is login</h1>
      <p>{products?.length}</p>
    </div>
  );
};

export default Login;
