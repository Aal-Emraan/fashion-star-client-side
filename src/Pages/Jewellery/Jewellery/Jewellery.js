import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import "./Jewellery.css";
import { Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import JewelleryBanner from "../JewelleryBanner/JewelleryBanner";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../../dataSlice/dataSlice";
const Jewellery = () => {
  const [setValue] = React.useState([]);
  // *******************************************DATA LOAD
  const [jewellerys, setJewellerys] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://thawing-plateau-57038.herokuapp.com/jewellaries")
      .then((result) => result.json())
      .then((data) => setJewellerys(data));
  }, []);
  return (
    <>
      <JewelleryBanner></JewelleryBanner>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          paddingTop: "15px",
          color: "rgba(27, 27, 27, 0.7)",
        }}
      >
        <Typography style={{ fontWeight: "bold" }} variant="h4">
          Featured Collection
        </Typography>
        <Typography
          style={{ fontWeight: "bold", color: "rgba(68, 67, 67, 0.7)" }}
          variant="p"
        >
          Add featured products to weekly lineup
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-3 gap-5">
        {jewellerys.map((jewellery) => (
          <Card className="p-2 hover:bg-slate-50">
            <CardMedia
              component="img"
              style={{ width: "330px", height: "310px" }}
              image={jewellery.img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {jewellery.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {jewellery.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">${jewellery.regular_price}</Button>
              <Rating
                style={{ paddingLeft: "110px" }}
                size="small"
                name="simple-controlled"
                value={jewellery.average_rating}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </CardActions>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <NavLink
                  to={`/details/${jewellery._id}`}
                  style={{ paddingLeft: "13px" }}
                >
                  <Button variant="outlined">Details</Button>
                </NavLink>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={() => dispatch(addToCart(jewellery))} variant="outlined">
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Jewellery;
