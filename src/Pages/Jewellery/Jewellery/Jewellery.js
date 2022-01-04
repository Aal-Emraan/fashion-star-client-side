import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import './Jewellery.css';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Jewellery = () => {
  const [setValue] = React.useState([]);
  // *******************************************DATA LOAD
  const [jewellerys, setJewellerys] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/jewellaries')
      .then(result => result.json())
      .then(data => setJewellerys(data))
  }, [])
  return (
    <>
      <div style={{ padding:"100px", paddingLeft:"90px",}} className='card'>
        {
          jewellerys.map(jewellery =>
            <Card   className="card2"  style={{ padding:"8px",}} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                style={{width:"330px", height:"310px"}}
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
                <Button size="large" >${jewellery.regular_price}</Button>
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
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <NavLink
                to={`/Jewellery/${jewellery._id}`}
                style={{paddingLeft:"13px"}}
              >
                <Button  variant="outlined">Details</Button>
              </NavLink>
                </Grid>
                <Grid item xs={6}>
                <Button style={{}} variant="outlined">Buy Now</Button>
                </Grid>
            </Grid>
             
            </Card>
          )
        }
      </div>
    </>
  );
};

export default Jewellery;