import { TextField } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import DashboardCard from "../DashboardCard/DashboardCard";

const UpdateCard = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://thawing-plateau-57038.herokuapp.com/products/${id}`)
      .then((res) => setData(res.data));
  }, [id]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (upData) => {
    upData.available_colors = upData.available_colors.split(",");
    axios
      .put(`https://thawing-plateau-57038.herokuapp.com/products/${id}`, upData)
      .then((res) => console.log(res));
    console.log(upData);
  };
  // const { title, _id, img, description, available_colors, average_rating, regular_price, discount_price, category, free_home_delivery, for: typeFor, available_products } = data;
  return (
    <Grid container spacing={4}>
      {data && <DashboardCard update data={data}></DashboardCard>}
      <Grid className="h-full" item xs={12} md={6}>
        {data && (
          <form
            className="flex items-between h-full flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              defaultValue={data.img}
              {...register("img", { required: true })}
              className="w-full"
              label="Image link"
              variant="standard"
            />

            <TextField
              defaultValue={data.title}
              {...register("title", { required: true })}
              className="w-full"
              label="Title"
              variant="standard"
            />

            <div>
              <TextField
                defaultValue={data.category}
                {...register("category", { required: true })}
                className="w-1/2 "
                label="Category"
                variant="standard"
                sx={{ mt: 3 }}
              />
              <TextField
                defaultValue={data.for}
                {...register("for", { required: true })}
                className="w-1/2"
                label="For"
                variant="standard"
              />
            </div>

            <TextField
              defaultValue={data.description}
              {...register("description", { required: true })}
              className="w-full"
              label="description"
              variant="standard"
            />
            <div>
              <TextField
                defaultValue={data.discount_price}
                {...register("discount_price", { required: true })}
                className="w-1/2"
                label="Discount price"
                variant="standard"
              />
              <TextField
                defaultValue={data.regular_price}
                {...register("regular_price", { required: true })}
                className="w-1/2"
                label="Regular price"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                defaultValue={data.free_home_delivery}
                {...register("free_home_delivery", { required: true })}
                className="w-1/2"
                label="Free home delivery"
                variant="standard"
              />
              <TextField
                defaultValue={Math.ceil(data.average_rating)}
                InputProps={{ inputProps: { min: 0, max: 5 } }}
                type="number"
                {...register("average_rating", { required: true })}
                className="w-1/2"
                label="Average rating"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                defaultValue={data.available_products}
                InputProps={{ inputProps: { min: 1 } }}
                type="number"
                {...register("available_products", { required: true })}
                className="w-1/2"
                label="Total stock"
                variant="standard"
              />
              <TextField
                defaultValue={data?.available_colors.join()}
                {...register("available_colors", { required: true })}
                className="w-1/2"
                label="Available colors"
                variant="standard"
              />
            </div>
            <Button sx={{ mt: 3 }} type="submit" variant="contained">
              Update
            </Button>
          </form>
        )}
      </Grid>
    </Grid>
  );
};

export default UpdateCard;
