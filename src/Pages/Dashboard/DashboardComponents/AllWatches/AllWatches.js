import { CircularProgress } from '@material-ui/core';
import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, selectData } from '../../../../dataSlice/dataSlice';
import GlassCard from '../../../Glasses/GlassCard/GlassCard';
import DashboardCard from '../DashboardCard/DashboardCard';

const AllWatches = () => {
    const data = useSelector(selectData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts({ category: 'watch' }))
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

export default AllWatches;