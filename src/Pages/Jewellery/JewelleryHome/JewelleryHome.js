import React from 'react';
import { Link } from 'react-router-dom';
import './JewelleryHome.css';

const JewelleryHome = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="slide-1 hero-slider-content">
                <h2 style={{ fontSize: "50px", paddingTop: "220px", paddingLeft: "80px", color:"#3a3938" }} className="slide-title bn-title ">Family Jewellery  <br /> Collection</h2>
                <h4 className="slide-desc font-light" style={{ paddingTop: "0px", paddingLeft: "80px" , fontWeight:"100"}}>Designer Jewellery Necklaces-Bracelets-Earings</h4>
                <div style={{paddingTop: "30px",paddingLeft:"71px"}}>
                  <Link to='/Jewellery' className='header-btn' type='button'>VIEW JEWELLERY </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JewelleryHome;