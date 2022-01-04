import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, selectData } from '../../../dataSlice/dataSlice';
import GlassCard from '../../Glasses/GlassCard/GlassCard';
import { CircularProgress } from '@material-ui/core';
import DashboardCard from './DashboardCard/DashboardCard';
const AllProducts = () => {
    const data = useSelector(selectData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    if (data.loading) {
        return <div className='flex justify-center items-center'>
            <CircularProgress></CircularProgress>

        </div>
    }
    return (
        <div>
            <Grid container spacing={4}>
                {
                    data.viewProducts.map(glass => <DashboardCard key={glass._id} data={glass}></DashboardCard>)
                }

            </Grid>
        </div>
    );
};

export default AllProducts;