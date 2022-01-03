import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './Details.css'
import RelatedDetails from './RelatedDetails/RelatedDetails';
const Details = () => {

    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [products] = useProducts();

    console.log(id);
    const selectedCategory = products.filter(product => product.category === details?.category);
    const selectedProducts = selectedCategory.filter(product => product.for === details?.for);
    const selectedProducts2 = selectedProducts.filter(selectedProduct => selectedProduct._id !== id);
    // const selectedProducts3 = selectedProducts2.filter(selectedProducts => selectedProducts.for !== details?.for);
    const productSlice = selectedProducts2.slice(0, 4)

    useEffect(()=>{
        const url = `http://localhost:5000/products/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data=>{
            setDetails(data)
        })
    }, [id]);
    
    const description = details?.description;
    const shortDescription = description?.slice(0, 200);

    return (
        <div style={{minHeight: '80vh'}}>
            <div className="details">
                <div className='details-header'>
                <h2>{details?.title}</h2>
                </div>
                <div className="main-details flex gap-4">
                    <div style={{width:'50%'}}>
                        <img style={{width: '550px'}} src={details.img} alt="" />
                    </div>
                    <div className='details-content' style={{width:'50%'}}>
                        <h4>{details?.title}</h4>
                        <div className='flex gap-5'>
                        <p className='reg-price'>${details?.regular_price}.00</p>
                        <p className='dis-price'>${details?.discount_price}.00</p>
                        </div>

                        <p>{details?.average_rating} <span>({details?.total_rating})</span></p>
                        <p className='short-des'>{shortDescription} ...</p>
                        
                        <div className='product-count flex gap-5 mb-7'>
                            <input type="number" />
                            <button>ADD TO CART</button>
                            <button>CHECKOUT</button>
                        </div>
                        
                        <h5 className='details-category'>FOR: <span className='details-span'>{details?.for}</span></h5>
                        <h5 className='details-category'>CATEGORY: <span className='details-span'>{details?.category}</span></h5>

                        <div>
                            {/* <h5>{details?.available_colors}</h5> */}
                        </div>
                    </div>
                </div>

                <div className='relate-products'>
                <h2>Related Products</h2>
                    <div className='related-product-div'>
                    
                    {
                    productSlice.map(product => <RelatedDetails
                                                            key={product._id}
                                                            product={product}
                                                            ></RelatedDetails>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;