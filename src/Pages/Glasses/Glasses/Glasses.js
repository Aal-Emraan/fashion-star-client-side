import React, { useEffect } from "react";
import GlassCard from '../GlassCard/GlassCard'
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from '@mui/material'
import { getWatches, selectData, setLoading } from "../../../dataSlice/dataSlice";

const Glasses = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData)

  useEffect(() => {
    dispatch(getWatches())
    console.log('sd');
    dispatch(setLoading(true))
  }, [])
  console.log(data);
  return (
    <div className="min-h-screen ">
      <div className="mt-5 py-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, debitis! Voluptates assumenda cupiditate ex est tempore illum dignissimos id porro minima nostrum, alias ut repudiandae ducimus quidem eos vero et?

      </div>
      <Container>
        <Grid container spacing={4}>
          {
            data.glasses.map(glass => <GlassCard data={glass}></GlassCard>)
          }
        </Grid>
      </Container>

    </div>
  );
};

export default Glasses;
