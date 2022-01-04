import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainProductBanner from './MainProductBanner/MainProductBanner';
import './MainProducts.css';

const MainProducts = () => {
    const [setValue] = React.useState([]);
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://thawing-plateau-57038.herokuapp.com/products')
            .then((result) => result.json())
            .then((data) => setAllProducts(data));
    }, [])
    return (
        <>
        <MainProductBanner></MainProductBanner>
            <div style={{ padding: "80px", paddingLeft: "90px",  }} className="card3">
        {allProducts.map((data) => (
          <Card
            className="card4"
            style={{ padding: "8px" }}
            sx={{ maxWidth: 345 }}
          >
            <CardMedia
              component="img"
              style={{ width: "330px", height: "310px" }}
              image={data.img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{color:"rgb(104, 79, 40)"}} size="large">${data.regular_price}.00</Button>
              <Rating
                style={{ paddingLeft: "110px",color:"rgb(104, 79, 40)" }}
                size="small"
                name="simple-controlled"
                value={data.average_rating}
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
                  to={`/jewelleries/${data._id}`}
                  style={{ paddingLeft: "13px" }}
                >
                  <Button className='pd' variant="outlined">Details</Button>
                </NavLink>
              </Grid>
              <Grid item xs={6}>
                <Button  className='pd' style={{}} variant="outlined">
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div>
            <h1>{allProducts.title}</h1>
        </>
    );
};

export default MainProducts;