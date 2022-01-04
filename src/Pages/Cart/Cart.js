import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCart, selectData } from "../../dataSlice/dataSlice";
import CartCard from "./CartCard/CartCard";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import axios from "axios";
const Cart = () => {
  const { cart: carts, user } = useSelector(selectData);
  const dispatch = useDispatch();
  let discount = 0;
  let normal_price = 0;
  let delivery = 0;
  carts.forEach(element => {
    discount += parseInt(element.discount_price);
    normal_price += parseInt(element.regular_price);
    if (element.free_home_delivery === 'no' || element.free_home_delivery === 'NO') {
      delivery += 4.99;
    }
  });
  const total_cost = discount + delivery;
  const handleClick = () => {
    let newData = [];
    for (let i = 0; i < carts.length; i++) {
      console.log(i);
      newData = [...newData, { cart: carts[i], user }]
    }
    console.log(newData);
    axios.post('http://localhost:5000/orders', newData)
      .then(res => {
        if (res.data.acknowledged) {
          dispatch(removeAllCart())
          alert('Successfully Orders')

        }
      })
  }
  return (
    <div className="min-h-screen ">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={8}>
            {/* banner */}
            <div>
              <img className='w-full' src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt="" />
            </div>
            <div className="shadow-lg px-4 mt-4">
              <h2 className="text-3xl py-3">Your shopping cart items total {carts.length}</h2>
              <hr />
              <div>
                {
                  carts.map(cart => <CartCard key={cart._id} data={cart}></CartCard>)
                }
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='h-full px-4 text-center'>
              <div className='shadow-lg p-2'>
                <h2 className="text-2xl">Subtotal ({carts.length} items): ${total_cost}</h2>
                <div className="flex justify-center">
                  <TableBody >
                    <TableRow  >
                      <TableCell align="left">Total Regular Price :</TableCell>
                      <TableCell align="left"  >${normal_price} </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell align="left">Total Discount Price :</TableCell>
                      <TableCell align="left">${discount} </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell align="left">Total Delivery Charge :</TableCell>
                      <TableCell align="left">${parseInt(delivery)} </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell align="left">Total Cost :</TableCell>
                      <TableCell align="left">${parseInt(total_cost)} </TableCell>
                    </TableRow>
                  </TableBody>
                </div>
                <Button onClick={handleClick} disabled={!carts.length} sx={{ mt: 4, width: '100%' }} variant='contained'>Pay ${parseInt(total_cost)}</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
