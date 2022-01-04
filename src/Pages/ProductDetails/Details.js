import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addToCart } from "../../dataSlice/dataSlice";
import useProducts from "../../Hooks/useProducts";
import "./Details.css";
import RelatedDetails from "./RelatedDetails/RelatedDetails";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [products] = useProducts();
  const dispatch = useDispatch()
  console.log(id);
  const selectedCategory = products.filter(
    (product) => product.category === details?.category
  );
  const selectedProducts = selectedCategory.filter(
    (product) => product.for === details?.for
  );
  const selectedProducts2 = selectedProducts.filter(
    (selectedProduct) => selectedProduct._id !== id
  );
  // const selectedProducts3 = selectedProducts2.filter(selectedProducts => selectedProducts.for !== details?.for);
  const productSlice = selectedProducts2.slice(0, 4);

  useEffect(() => {
    const url = `https://thawing-plateau-57038.herokuapp.com/products/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [id]);

  const description = details?.description;
  const shortDescription = description?.slice(0, 200);

  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="details mt-10">
        <div className="details-header p-3 shadow-md container mx-auto text-xl text-blue-600">
          <h2>{details?.title}</h2>
        </div>
        <div
          className="main-details grid grid-cols-1 md:grid-cols-2 shadow-md container
        mx-auto"
        >
          <div>
            <img src={details.img} alt="" />
          </div>
          <div className="details-content p-5">
            <h4 className="text-3xl font-semibold my-3 text-gray-800">
              {details?.title}
            </h4>
            <div className="flex gap-5 my-2 items-baseline mt-2">
              <p className="text-yellow-600 line-through">
                ${details?.regular_price}.00
              </p>
              <p className="text-xl font-semibold">
                ${details?.discount_price}.00
              </p>
            </div>

            <p className="flex items-center space-x-2">
              <Rating
                name="simple-controlled"
                value={parseInt(details?.average_rating)}
                readOnly
              />
              <span>({details?.total_rating})</span>
            </p>
            <p className="text-xl text-gray-600 my-6">{shortDescription} ...</p>

            <div className="flex space-x-5 text-white font-semibold">
              <button onClick={() => dispatch(addToCart())} className="bg-purple-400 p-2 rounded shadow-md">
                ADD TO CART
              </button>
              <button className="bg-purple-400 p-2 rounded shadow-md">
                <NavLink to='/cart'>CHECKOUT</NavLink>
              </button>
            </div>

            <h5 className="text-2xl border-b my-4 text-gray-800">
              For: <span className="">{details?.for}</span>
            </h5>
            <h5 className="text-2xl border-b my-4 text-gray-800">
              CATEGORY:{" "}
              <span className="details-span">{details?.category}</span>
            </h5>

            <div>{/* <h5>{details?.available_colors}</h5> */}</div>
          </div>
        </div>

        <div className="relate-products">
          <h2>Related Products</h2>
          <div className="related-product-div grid grid-cols-1 md:grid-cols-4 space-y-5">
            {productSlice.map((product) => (
              <RelatedDetails
                key={product._id}
                product={product}
              ></RelatedDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
