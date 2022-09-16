import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Card, CardContent, TextField } from '@material-ui/core';
import OrderItem from './OrderItem';
import axios from 'axios';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      position: 'relative',
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      textAlign: 'center',
    },
    productContainer: {
      flex: 1,
    },
    error: {
      color: 'red',
    }
  };
});

const OrderInfo = () => {
  const [orders, setOrders] = useState([]);
  const [subdomains, setSubdomains] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchOrderData = async () => {
      const resp = await axios
        .get(`${process.env.API_URL}/members/orders`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        })
        .catch(err => {
          if (err.response.status === 401) {
            console.log('401');
            history.push('/login');
          }
        });
      setOrders(resp.data);
      console.log(resp);
    };
    fetchOrderData();
  }, []);

  return (
    <div>
      <Grid container className={classes.title} spacing={5}>
        <Grid item className={classes.titleContainer}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            My Orders
          </Typography>
        </Grid>
        <Grid container item direction="column">
          {orders.length === 0 && (
            <Typography variant="body">You don't have any orders</Typography>
          )}
          {orders.map((order, index) => (
            <Grid
              container
              direction="column"
              className={classes.productContainer}
            >
              {order.order_items.map((item, itemIndex) => (
                <OrderItem
                  id={index * orders.length + itemIndex}
                  orderItem={item}
                />
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderInfo;