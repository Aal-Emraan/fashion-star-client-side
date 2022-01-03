import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Rating from '@material-ui/lab/Rating';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
const DashboardCard = (props) => {
    const { title, _id, img, description, available_colors, average_rating, regular_price } = props.data;
    const dispatch = useDispatch()
    return (
        <Grid item sm={12} md={6}>
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="product img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 130)}
                    </Typography>
                    <div className="flex justify-between py-4">
                        <h2 className='text-yellow-500 text-2xl'>${regular_price}</h2>
                        <Rating
                            name="simple-controlled"
                            value={average_rating}
                            readOnly
                        />
                    </div>
                </CardContent>
                <CardActions className='flex justify-between'>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default DashboardCard;