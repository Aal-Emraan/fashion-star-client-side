import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Watches.css'


const WatchesSingle = (props) => {
    const {category, img, title, regular_price, discount_price, average_rating, _id} = props.product;
    // const discount = regular_price - discount_price;

    const detailsUrl = `/details/${_id}`

    return (
        <div className='single-product-home'>
            <div className=''>
                <img src={img} alt="ok" />
            </div>
            <div>
                <h3>{title}</h3>
                <div className='flex justify-center gap-3 pb-4'>
                <p className='regular'>${regular_price}</p>
                <p className='discount'>${discount_price}</p>
                </div>
                <div className='flex justify-center gap-3 pb-4'>
                <button className='product-btn'>ADD TO CARD</button>
                <NavLink to={detailsUrl}><button  className='product-btn'>BUY NOW</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default WatchesSingle;