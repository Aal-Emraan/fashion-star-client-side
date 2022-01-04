import {
  Button,
  CardContent,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JewelleryDetails = () => {
  const [setValue] = React.useState([]);
  const { id } = useParams();
  const [jeweller, setJeweller] = useState([]);
  useEffect(() => {
    fetch(`https://thawing-plateau-57038.herokuapp.com/jewelleries/${id}`)
      .then((res) => res.json())
      .then((data) => setJeweller(data));
  }, []);
  console.log(jeweller);
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img
            style={{ width: "550px", height: "400px" }}
            src={jeweller.img}
            alt=""
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {jeweller.title}
            </Typography>
            <Rating
              style={{ color: "#c29958" }}
              size="small"
              name="simple-controlled"
              value={jeweller.average_rating}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography style={{ paddingLeft: "70px" }} variant="p">
              Reviews {jeweller.total_rating}
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }} variant="p">
              Price:
            </Typography>
            <Typography
              style={{ paddingLeft: "8px" }}
              className="price-old"
              variant="p"
            >
              ${jeweller.regular_price}
            </Typography>
            <Typography
              className="price-regular"
              style={{ paddingLeft: "54px" }}
              variant="p"
            >
              ${jeweller.discount_price}
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }} variant="p">
              Availability:
            </Typography>
            <Typography variant="p" style={{ color: "#c29958" }}>
              {" "}
              {jeweller.available_products} left in stock
            </Typography>
            <Typography paragraph>{jeweller.description}</Typography>
            <Typography sx={{ fontWeight: "bold" }} variant="p">
              Free home delivery:
            </Typography>
            <Button style={{ color: "#c29958" }} variant="text">
              {jeweller.free_home_delivery}
            </Button>
            <br />
            <Button
              style={{ backgroundColor: "#c29958", width: "100%" }}
              variant="contained"
            >
              Add To Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default JewelleryDetails;
