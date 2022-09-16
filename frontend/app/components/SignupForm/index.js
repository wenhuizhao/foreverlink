import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link,
} from '@material-ui/core';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const setToken = token => {
    localStorage.setItem('token', token);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      setErrorMessage('password does not match password confirmation');
      return;
    }
    try {
      const res = await axios
        .post(`${process.env.API_URL}/users`, {
          user: {
            email: username,
            password,
          },
        })
      if( res.headers.authorization) {
        setToken(res.headers.authorization);
      }
      history.push('/');
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
        ={' '}
        <Grid
          container
          item
          direction="column"
          justify="center"
          spacing={2}
          className="login-form"
        >
          <Paper
            variant="elevation"
            elevation={2}
            className="login-background"
          >
            <Grid item>
              <Typography component="h1" variant="h5" className="title">
                Sign Up
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className="error">
                {errorMessage}
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      type="email"
                      placeholder="Email"
                      fullWidth
                      name="username"
                      variant="outlined"
                      value={username}
                      onFocus={() => setErrorMessage('')}
                      onChange={event => {
                        setUsername(event.target.value);
                      }}
                      required
                      autoFocus
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      variant="outlined"
                      value={password}
                      onChange={event => {
                        setPassword(event.target.value);
                      }}
                      required
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      placeholder="Password confirmation"
                      fullWidth
                      name="passwordConfirmation"
                      variant="outlined"
                      value={passwordConfirmation}
                      onChange={event => {
                        setPasswordConfirmation(event.target.value);
                      }}
                      required
                    />
                  </Grid>
                  <Grid item container className="button-container">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button-block"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item>
              <Link href="/sign_in" variant="body2">
                Sign in
              </Link>
            </Grid>
            <Grid item>
              <Link href="/forgetpassword" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
          </Paper>
          ={' '}
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupForm;
