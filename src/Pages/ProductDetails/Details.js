import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
const Details = () => {

    const { id } = useParams();
    const [details, setDetails] = useState({});
    
    useEffect(()=>{
        const url = `http://localhost:5000/products/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data=>{
            setDetails(data)
        })
    }, [id]);
    
    console.log(details);
    const description = details?.description;
    // const shortDescription = description.slice(0, 200);
    return (
        <div style={{minHeight: '80vh'}}>
            <div className="details">
                <div className='details-header'>
                <h2>ok</h2>
                </div>
                <div className="main-details flex gap-4">
                    <div style={{width:'50%'}}>
                        <img src={details.img} alt="" />
                    </div>
                    <div className='details-content' style={{width:'50%'}}>
                        <h4>{details?.title}</h4>
                        <div className='flex gap-5'>
                        <p className='reg-price'>${details?.regular_price}.00</p>
                        <p className='dis-price'>${details?.discount_price}.00</p>
                        </div>

                        <p>{details?.average_rating} <span>({details?.total_rating})</span></p>
                        {/* <p className='short-des'>{shortDescription} ...</p> */}
                        <p className='short-des'>{description} ...</p>
                        
                        <div className='product-count flex gap-5'>
                            <input type="number" />
                            <button>ADD TO CART</button>
                        </div>
                        
                        <h5>FOR: <span>{details?.for}</span></h5>
                        <h5>CATEGORY: <span>{details?.category}</span></h5>

                        <div>
                            <h5>{details?.available_colors}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;