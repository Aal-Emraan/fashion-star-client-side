import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import './JewelleryBanner.css';

const JewelleryBanner = () => {
    return (
        <div>
            <Box style={{ padding: "20px" }} sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className='banner1' style={{ paddingLeft: "80px" }} item xs={6}>
                        <img src="https://cdn.shopify.com/s/files/1/0250/5169/3134/files/img1-top_545x.jpg?v=1562064570" alt="" />
                        <div className="overlay1">
                            <div className="content1">
                                <p className='animate__backInDown' style={{ color: "#6c757d", fontWeight:"bold", fontSize:"17px"  }}>BEAUTIFUL</p>
                                <h1  style={{ color: "black", fontWeight:"bold", fontSize:"30px"  }}> Wedding <br /> Rings</h1>
                                <Button style={{color:"#c29958", fontWeight:"bold"}}>Shop Now</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid className='banner2' item xs={6}>
                        <img src="https://cdn.shopify.com/s/files/1/0250/5169/3134/files/img2-top_545x.jpg?v=1562064662" alt="" />
                        <div className="overlay2">
                            <div className="content2">
                            <p className='animate__backInDown' style={{ color: "#6c757d", fontWeight:"bold", fontSize:"17px"  }}>BEAUTIFUL</p>
                                <h1  style={{ color: "black", fontWeight:"bold", fontSize:"30px"  }}> Tangerine Floral <br /> Earring</h1>
                                <Button style={{color:"#c29958", fontWeight:"bold"}}>Shop Now</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid className='banner3' style={{ paddingLeft: "80px" }} item xs={6}>
                        <img src="https://cdn.shopify.com/s/files/1/0250/5169/3134/files/img3-top_545x.jpg?v=1562064712" alt="" />
                        <div className="overlay3">
                            <div className="content3">
                            <p className='animate__backInDown' style={{ color: "#6c757d", fontWeight:"bold", fontSize:"17px"  }}>BEAUTIFUL</p>
                                <h1  style={{ color: "black", fontWeight:"bold", fontSize:"30px"  }}> Pearl <br /> Necklaces</h1>
                                <Button style={{color:"#c29958", fontWeight:"bold"}}>Shop Now</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid className='banner4' item xs={6}>
                        <img src="https://cdn.shopify.com/s/files/1/0250/5169/3134/files/img4-top_545x.jpg?v=1562064798" alt="" />
                        <div className="overlay4">
                            <div className="content4">
                            <p className='animate__backInDown' style={{ color: "#6c757d", fontWeight:"bold", fontSize:"17px"  }}>BEAUTIFUL</p>
                                <h1  style={{ color: "black", fontWeight:"bold", fontSize:"30px"  }}> Diamond <br /> Jewelry</h1>
                                <Button style={{color:"#c29958", fontWeight:"bold"}}>Shop Now</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default JewelleryBanner;