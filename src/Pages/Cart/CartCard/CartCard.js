import React from 'react';
import { Button, Grid, Rating } from '@mui/material'
import { useDispatch } from 'react-redux';
import { removeFormCart } from '../../../dataSlice/dataSlice';
import { NavLink } from 'react-router-dom';
const CartCard = props => {
    const {
        title,
        _id,
        img,
        description,
        available_colors,
        average_rating,
        regular_price,
        discount_price,
        category,
        free_home_delivery,
        for: typeFor,
        available_products } = props.data;
    const dispatch = useDispatch()
    return (
        <Grid sx={{ my: 3, py: 2 }} container spacing={3}>
            <Grid item xs={3}>
                <img className='w-full mb-4' src={img} alt="" />
            </Grid>
            <Grid item xs={6}>

                <h2 className='text-2xl font-semiBold  mt-4 mb-2 '>{title}</h2>
                <Rating
                    value={parseInt(average_rating)}
                    readOnly
                />

                <p className='text-sm py-2'>
                    {description?.slice(0, 200)}
                </p>
                <h2 className='mb-3'>${discount_price}</h2>
                {
                    props.orders && <h2 className='mb-3'>status: pending</h2>
                }
                {
                    free_home_delivery === 'yes' ? <div className='flex  items-center'>
                        <img className='w-16 mr-2' src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png" alt="" />
                        <h2 className='text-sm'>Free Next-day delivery</h2>
                    </div> : <div>
                        Delivery charge $4.99
                    </div>
                }

            </Grid>
            <Grid item xs={3}>
                <div className='h-full flex items-end '>
                    {
                        !props.orders && <div>
                            <Button className='hover:border hover:bg-red-500 border-red-300' onClick={() => dispatch(removeFormCart(_id))} sx={{ background: 'rgba(245,158,11,1)' }} variant='contained'>Remove Form cart</Button>
                            <Button component={NavLink} to={`/details/${_id}`} sx={{ background: 'rgba(245,158,11,1)', mt: 3 }} variant='contained'>see details</Button>
                        </div>
                    }

                </div>
            </Grid>

        </Grid>
    );
};

export default CartCard;