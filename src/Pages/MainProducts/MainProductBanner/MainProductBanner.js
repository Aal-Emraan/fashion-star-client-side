import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainProductBanner.css';

const MainProductBanner = () => {
    return (
        < >
        <Grid>
                
                <Grid style={{textAlign:"end", paddingRight:"10px",paddingTop:"40px", paddingBottom:"10px", display:"flex", justifyContent:"space-between"}}>
                <Typography  style={{paddingLeft:"15px", color:"rgb(53, 33, 1)"}} variant='h4'>𝒫𝑅𝒪𝒟𝒰𝒞𝒯𝒮</Typography>
               <div>
               <NavLink style={{paddingRight:'8px'}} to='/mainproducts'>
                    <Button style={{color:"white"}} className='pd' variant="outlined">ALL PRODUCTS</Button>
                </NavLink>
                <NavLink style={{paddingRight:'8px'}} to='/watches'>
                    <Button style={{color:"white"}} className='pd' variant="outlined">WATCHES</Button>
                </NavLink>
                <NavLink style={{paddingRight:'8px'}} to='/glasses'>
                    <Button style={{color:"white"}} className='pd' variant="outlined">GLASSES</Button>
                </NavLink>
                <NavLink style={{paddingRight:'8px'}} to='/jewelleries'>
                    <Button style={{color:"white"}} className='pd' variant="outlined">JEWELRY</Button>
                </NavLink>
               </div>
                </Grid>
            </Grid>
            <hr />
        </>
    );
};

export default MainProductBanner;