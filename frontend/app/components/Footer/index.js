import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ScrollTop from 'components/ScrollTop/Loadable';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import axios from 'axios';
import './style.scss';

// images
import logo from 'images/logo.png';

const Footer = props => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case 'string.required':
              err.message = 'email can not be Empty';
              break;
            case 'string.email':
              err.message = 'email must be a valid email';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
  };
  const validate = () => {
    const options = { abortEarly: false };
    const form = {
      email,
    };
    const { error } = Joi.validate(form, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const joinEmailList = async e => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setErrorMessage(error.email)
    } else {
      const res = await axios.post(
        `${process.env.API_URL}/feedbacks/email_list`,
        {
          email,
        },
      ).catch(err=>{
        if (err.response.status === 422) {
          toast.error("Email is already joined the list");
        }
        throw(err);
      });
      toast.success('Successfully Joined');
    }
  };
  return (
    <footer className="footerArea bgGray">
      <ScrollTop scrollStepInPx="50" delayInMs="16.66" />
      <Grid className="container" container spacing={4}>
        <Grid item xs={12}>
          <Grid className="newsleter">
            <h2>Follow us For ferther information</h2>
            <form action="#">
              <input
                placeholder="Enter Your Email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                  setErrorMessage('');
                }}
                type="text"
              />
              <Button onClick={e => joinEmailList(e)}>Subscribe</Button>
            </form>
            {errorMessage && (
              <Typography className="error">{errorMessage}</Typography>
            )}
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid className="footerLogo">
            <img src={logo} alt="" />
            <p>Own your permanent web page and domain </p>
            <ul className="socialMedia">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <p className="copyright">
            © 2019 MyForeverLink. All rights reserved
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default injectIntl(Footer);
