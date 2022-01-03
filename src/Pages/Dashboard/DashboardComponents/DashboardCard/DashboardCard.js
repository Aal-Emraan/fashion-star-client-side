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
import { deleteProducts } from '../../../../dataSlice/dataSlice';
const DashboardCard = (props) => {
    const { title, _id, img, description, available_colors, average_rating, regular_price, discount_price, category, free_home_delivery, for: typeFor, available_products } = props?.data;
    const dispatch = useDispatch()
    const handleDelete = (_id) => {
        dispatch(deleteProducts({ _id }));
    }
    return (
        <Grid item sm={12} md={6}>
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    height="100"
                    image={img}
                    alt="product img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <div className=' mb-3 flex justify-between'>
                        <h4 >
                            Category: {category}
                        </h4>
                        <h4>
                            For: {typeFor}
                        </h4>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {description?.slice(0, 130)}
                    </Typography>
                    <div className="flex justify-between py-4">
                        <div className='flex'>
                            <h2 className='text-yellow-500 text-2xl mr-3'>${discount_price}</h2>
                            <h2 className='text-gray-500 line-through text-2xl'>${regular_price}</h2>

                        </div>
                        <Rating
                            name="simple-controlled"
                            value={average_rating}
                            readOnly
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            Home delivery: {free_home_delivery}
                        </div>
                        <div className='flex'>
                            {
                                available_colors?.map(color => <div key={color} style={{ background: color }} className='w-3 h-3 rounded-full opacity-60 ml-1'></div>)
                            }
                        </div>
                    </div>
                    <div>
                        Total stock: {available_products}
                    </div>
                </CardContent>
                {
                    props.update || <CardActions className='flex justify-between'>
                        <Button onClick={() => handleDelete(_id)}>Delete</Button>
                        <Button component={NavLink} to={`/dashboard/update/${_id}`}>Update</Button>
                    </CardActions>
                }
            </Card>
        </Grid>
    );
};

export default DashboardCard;