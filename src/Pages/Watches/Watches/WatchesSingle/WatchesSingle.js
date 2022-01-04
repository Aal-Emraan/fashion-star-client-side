import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Watches.css'


const WatchesSingle = (props) => {
    const {category, img, title, regular_price, discount_price, average_rating, _id, free_home_delivery} = props.product;
    // const discount = regular_price - discount_price;

    let delivery;
    let deliverySt;

    if(free_home_delivery === "YES" && "Yes" && "yes"){
        delivery = "FREE DELIVERY"
        deliverySt = {
            color: "#379b70"
            
          };
    }
    else{
        delivery = "DELIVERY FEE: $4.99"
        deliverySt = {
            color: "#b36363"
            
        };
    }

    const detailsUrl = `/details/${_id}`

    return (
        <div className='single-product-home'>
            <div className=''>
                <img src={img} alt="ok" />
            </div>
            <div>
                <h3>{title}</h3>
                <div className='flex justify-center gap-3'>
                <p className='regular'>${regular_price}</p>
                <p className='discount'>${discount_price}</p>
                </div>

                <p style={deliverySt} className='delivery-text pb-4'>{delivery}</p>

                <div className='flex justify-center gap-3 pb-4'>
                <button className='product-btn'>ADD TO CARD</button>
                <NavLink to={detailsUrl}><button  className='product-btn'>BUY NOW</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default WatchesSingle;