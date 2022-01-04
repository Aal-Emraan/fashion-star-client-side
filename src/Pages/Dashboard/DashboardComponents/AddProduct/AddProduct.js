import { TextField } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (upData) => {
    upData.available_colors = upData.available_colors.split(",");
    // axios
    //   .put(`https://thawing-plateau-57038.herokuapp.com/products/${id}`, upData)
    //   .then((res) => console.log(res));
    // console.log(upData);
  };
  return (
    <div className="">
      <form
        className="flex items-between h-full flex-col space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("img", { required: true })}
          className="w-full bg-white rounded text-gray-200 italic"
          label="Image link"
          variant="standard"
        />

        <TextField
          {...register("title", { required: true })}
          className="w-full bg-white  rounded text-gray-200 italic"
          label="Title"
          variant="standard"
        />

        <div className="flex justify-between">
          <TextField
            {...register("category", { required: true })}
            className="  bg-white  rounded text-gray-200 italic text-sm"
            label="Category"
            variant="standard"
            sx={{ mt: 3 }}
          />
          <TextField
            {...register("for", { required: true })}
            className=" bg-white rounded text-gray-200 italic"
            label="For"
            variant="standard"
          />
        </div>

        <TextField
          {...register("description", { required: true })}
          className="w-full bg-white  rounded text-gray-200 italic"
          label="description"
          variant="standard"
        />
        <div className="flex justify-between">
          <TextField
            {...register("discount_price", { required: true })}
            className=" bg-white  rounded text-gray-200 italic text-sm"
            label="Discount price"
            variant="standard"
          />
          <TextField
            {...register("regular_price", { required: true })}
            className="bg-white  rounded text-gray-200 italic text-sm"
            label="Regular price"
            variant="standard"
          />
        </div>
        <div className="flex justify-between">
          <TextField
            {...register("free_home_delivery", { required: true })}
            className="bg-white  rounded text-gray-200 italic text-sm"
            label="Free home delivery"
            variant="standard"
          />
          <TextField
            InputProps={{ inputProps: { min: 0, max: 5 } }}
            type="number"
            {...register("average_rating", { required: true })}
            className="bg-white w-1/2 rounded text-gray-200 italic text-sm"
            label="Average rating"
            variant="standard"
          />
        </div>
        <div className="flex justify-between">
          <TextField
            InputProps={{ inputProps: { min: 1 } }}
            type="number"
            {...register("available_products", { required: true })}
            className="bg-white  rounded text-gray-200 italic text-sm"
            label="Total stock"
            variant="standard"
          />
          <TextField
            {...register("available_colors", { required: true })}
            className="bg-white  rounded text-gray-200 italic text-sm"
            label="Available colors"
            variant="standard"
          />
        </div>
        <Button sx={{ mt: 3 }} type="submit" variant="contained">
          Update
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
