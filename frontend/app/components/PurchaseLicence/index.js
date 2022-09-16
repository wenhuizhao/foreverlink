import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import './style.scss';
import { PayPalButton } from 'react-paypal-button-v2';
import axios from 'axios';

// const products = [
//   {
//     name: 'Basic',
//     list_price: '$69',
//     price: '$29',
//     id: 1,
//   },
//   {
//     name: 'Gold',
//     list_price: '$99',
//     price: '$59',
//     id: 2,
//   },
//   {
//     name: 'Platium',
//     list_price: '$299',
//     price: '$149',
//     id: 3,
//   },
// ];

const PurchaseLicence = () => {
  const [itemId, setItemId] = useState(1);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductData = async () => {
      const resp = await axios
        .get(`${process.env.API_URL}/products`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        })
      setProducts(resp.data);
      setProduct(resp.data[0]);
      console.log(resp);
    };
    fetchProductData();
  }, []);

  return (
    <Grid className="widgetWrap purchaseLicenceWrap">
      <h3>
        <i className="fi flaticon-bag" /> Purchase a Forever Site
      </h3>
      <ul className="purchaseLicenceList">
        {product.id && products.map((item, i) => (
          <li key={i}>
            <Button
              onClick={() => setProduct(item)}
              className={product.id === item.id ? 'active' : ''}
            >
              <span>{product.id === item.id ? 'active' : 'inactive'}</span>
              <span>{item.name}</span>
              <del>{item.list_price}</del>
              <h4>{item.price}</h4>
            </Button>
          </li>
        ))}
      </ul>
      {product === products[0] && (
        <Grid className="purchaseLicenceContent">
          <p>
            The purchase gives a permanent web page with your own domain.{' '}
          </p>
          <ul>
            <li>Webpage never die.</li>
            <li>Custom domain never down</li>
            <li>5MB storage for image stored forever!</li>
          </ul>
        </Grid>
      )}
      {product === products[1] && (
        <Grid className="purchaseLicenceContent">
          <p>
            The purchase entitles you to 5 years updates and product support.{' '}
          </p>
          <ul>
            <li>Webpage never die.</li>
            <li>Custom domain never down</li>
            <li>15MB storage for image stored forever!</li>
          </ul>
        </Grid>
      )}
      {product === products[2] && (
        <Grid className="purchaseLicenceContent">
          <p>
            The purchase entitles you to 20 years updates and product support.{' '}
          </p>
          <ul>
            <li>Webpage never die.</li>
            <li>Custom domain never down</li>
            <li>25MB storage for image stored forever!</li>
          </ul>
        </Grid>
      )}
      <div className="textCenter">
        <PayPalButton
          amount={(product || {}).price}
          createOrder={async (data, actions) => {
            const resp = await axios.post(
              `${process.env.API_URL}/paypal/create_order`,
              {
                paypal: {
                  amount: product.price,
                  product_id: product.id,
                  quantity: 1,
                },
              },
              {
                headers: {
                  Authorization: localStorage.getItem('token'),
                },
              },
            );
            console.log(resp);
            return resp.data.order_id;
            // return actions.order.create({
            //   purchase_units: [
            //     {
            //       amount: {
            //         currency_code: 'USD',
            //         value: product.price,
            //       },
            //     },
            //   ],
            // });
          }}
          onApprove={async (data, actions) => {
            console.log('onApprove');
            const resp = await axios.post(
              `${process.env.API_URL}/paypal/capture_order`,
              {
                order_id: data.orderID,
              },
              {
                headers: {
                  Authorization: localStorage.getItem('token'),
                },
              },
            );
            console.log(resp);
            if (resp.data.status === 'COMPLETED') {
              console.log('order completed');

            } else {
              console.log('order not completed');
            }
          }

          }
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={async (details, data) => {
            alert(
              'Transaction completed by ' + details.payer.name.given_name,
            );
            console.log('details', details);
            console.log('data', data);
            const resp = await axios.post(
              `${process.env.API_URL}/paypal/order_success`,
              {
                order_id: data.orderID,
                order_status: details.status,
              },
              {
                headers: {
                  Authorization: localStorage.getItem('token'),
                },
              },
            );
            console.log(resp);
            if (resp.data.status === 'COMPLETED') {
              console.log('order completed');

            } else {
              console.log('order not completed');
            }          
          }}
          // options={{
          //   clientId: process.env.CLIENT_ID,
          // }}
        />
        <Button
          component="a"
          href="Javascript:void(0)"
          className="btn btnNormal"
        >
          Preview
        </Button>
      </div>
    </Grid>
  );
};

export default PurchaseLicence;
