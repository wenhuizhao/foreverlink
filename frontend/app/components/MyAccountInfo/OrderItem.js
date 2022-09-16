import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import axios from 'axios';
import LinkInfor from './LinkInfor';

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
    messag: {
      color: 'greed',
    },
    error: {
      color: 'red',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  };
});

const OrderItem = ({orderItem}) => {
  const [subdomain, setSubdomain] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [invalidSubdomain, setInvalidSubdomain] = useState(true);
  const classes = useStyles();
  const handleSubdomainChange = async event => {
    const value = event.target.value;
    setSubdomain(value);
    setErrorMessage('');
    if (event.target.value.length < 5) {
      setErrorMessage('name need to be at least 5 characters');
      setInvalidSubdomain(true);
      return;
    }
    const regex= /^[A-Za-z0-9_@\.#&+-]*$/;

    if (!regex.test(value)) {
      setErrorMessage(
        'Only alphanumeric and special characters such as _@./#&+- are allowed',
      );
      setInvalidSubdomain(true);
      return;
    }
    const resp = await axios.post(
      `${process.env.API_URL}/forever_links/check_subdomain`,
      {
        forever_link: {
          domain: orderItem.product.domain,
          subdomain: value,
        },
      },
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );
    if (resp.data.subdomain) {
      console.log('domain exist');
      setInvalidSubdomain(true);
      setErrorMessage(`${value} is already used`);
      return;
    }
    setInvalidSubdomain(false);
    console.log('valid');
    setMessage(`${value} is available`);
  };

  const handleClaimSubdomain = async () => {
    console.log('claim')
    setLoading(true);
    try {
      const resp = await axios.post(
        `${process.env.API_URL}/forever_links/claim_subdomain`,
        {
          forever_link: {
            order_item_id: orderItem.id,
            subdomain: subdomain,
          },
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        },
      ).catch(err => {
        if (err.response.status === 422) {
          console.log('422');
          setErrorMessage(err.response.data.error);
        }
        throw err;
      });
      setLoading(false);
    } catch(error) {
      setLoading(false);
      console.log(error)
    }
  };

  const showForeverLink = () => {
    console.log('show link')
  }
  return (
    <div>
      <Card className={classes.itemCard} variant="outlined">
        <CardContent>
          <Typography variant="h5">{orderItem.product.name}</Typography>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1">
                {orderItem.product.description}
              </Typography>
            </Grid>
            <Grid item>
              {orderItem.forever_link === null && (
                <Grid item>
                  <div>You have not chose your forever link</div>
                  <TextField
                    variant="outlined"
                    value={subdomain}
                    onChange={e => handleSubdomainChange(e)}
                  />
                  <Typography variant="h6" className="error">
                    {errorMessage}
                  </Typography>
                  <Typography variant="h6" className="message">
                    {message}
                  </Typography>
                </Grid>
              )}
              {orderItem.forever_link && (
                <Typography variant="h7">
                  {orderItem.forever_link.url}
                </Typography>
              )}
              <Grid item>
                {orderItem.forever_link === null && (
                  <Button variant="contained" color="primary" disabled={invalidSubdomain} onClick={()=>handleClaimSubdomain()}>
                    Claim Forever Link
                  
                  
                  </Button>
                )}
                {orderItem.forever_link && (
                  <Button variant="outlined" color="primary" onClick={()=>showForeverLink()}>View Forever Link</Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Backdrop
        className={classes.backdrop}
        open={loading}
        onClick={()=>setLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default OrderItem;
