import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { selectData } from '../../dataSlice/dataSlice';
import { useSelector } from 'react-redux'
import { Container, Grid } from '@mui/material';
import CartCard from '../../Pages/Cart/CartCard/CartCard'
const MyOrders = () => {
    const [allData, setAllData] = useState([]);
    const data = useSelector(selectData);
    useEffect(() => {
        axios.get(`https://fashionstar-5bdad.web.app/orders/${data.user.email}`)
            .then(res => setAllData(res.data))
    }, [])
    console.log(allData);
    return (
        <div className='min-h-screen'>
            <Container>
                <Grid container>
                    {
                        allData?.map(s => <Grid key={s?._id} xs={12}><CartCard orders data={s.cart}></CartCard></Grid>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default MyOrders;