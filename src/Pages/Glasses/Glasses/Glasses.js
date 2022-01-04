import React, { useEffect } from "react";
import GlassCard from '../GlassCard/GlassCard'
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Button, CircularProgress } from '@mui/material'
import { getProducts, selectData, setLoading, changeViewProducts, setViewProducts } from "../../../dataSlice/dataSlice";

const Glasses = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData)

  useEffect(() => {
    dispatch(getProducts({ category: 'glass' }))
  }, []);
  if (data.loading) {
    return <div className="min-h-screen flex justify-center items-center" >
      <CircularProgress></CircularProgress>
    </div>
  }
  return (
    <div className="min-h-screen ">
      <Container>
        <div className="mt-5 py-5">
          <Button sx={{ mr: 2 }} variant="outlined" color="secondary" onClick={() => dispatch(setViewProducts({ type: 'all' }))}>All Products</Button>
          <Button sx={{ mr: 2 }} variant="outlined" color="secondary" onClick={() => dispatch(changeViewProducts({ for: 'men' }))}>Men</Button>
          <Button sx={{ mr: 2 }} variant="outlined" color="secondary" onClick={() => dispatch(changeViewProducts({ for: 'women' }))}>Women</Button>
          <Button sx={{ mr: 2 }} variant="outlined" color="secondary" onClick={() => dispatch(changeViewProducts({ for: 'kid' }))}>Kids</Button>

        </div>
        <Grid container spacing={4}>
          {
            data.viewProducts.map(glass => <GlassCard key={glass._id} data={glass}></GlassCard>)
          }
        </Grid>
      </Container>

    </div>
  );
};

export default Glasses;
