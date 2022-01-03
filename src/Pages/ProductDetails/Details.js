import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    return (
        <div style={{minHeight: '80vh'}}>
            <div className="details">
                <div className='details-header'>

                </div>
                <div className="main-details flex gap-4">
                    <div style={{width:'50%'}}>
                        <img src={details.img} alt="" />
                    </div>
                    <div style={{width:'50%'}}>
                        <div className='flex'>
                        <p>{details?.discount_price}</p>
                        <p>{details?.regular_price}</p>
                        </div>

                        <p>{details?.average_rating} <span>({details?.total_rating})</span></p>
                        <p>{details?.description}</p>
                        
                        <div className='flex'>
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