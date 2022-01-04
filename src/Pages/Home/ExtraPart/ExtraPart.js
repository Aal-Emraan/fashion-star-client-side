import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const ExtraPart = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <img src="https://cdn.shopify.com/s/files/1/0250/5169/3134/files/img-bottom-banner_540x.jpg?v=1563081470" alt="" />
                    </Grid>
                    <Grid item xs>
                        <Typography style={{ fontWeight: "bold" }} variant='h5'>
                            Best seller product
                        </Typography>
                        <Grid item xs>
                            <img width='60px' src="https://cdn.shopify.com/s/files/1/0250/5169/3134/files/img-bottom-banner_540x.jpg?v=1563081470" alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ExtraPart;