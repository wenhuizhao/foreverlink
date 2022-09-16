import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const setToken = token => {
    localStorage.setItem('token', token);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios
        .post(`${process.env.API_URL}/users/sign_in`, {
          user: {
            email: username,
            password,
          },
        })
        .catch(err => {
          if (err.response.status === 401) {
            console.log('401');
            setErrorMessage('Invalid email and password combination');
          }
          throw err;
        });
      setToken(res.headers.authorization);
      console.log('login', res.headers.authorization);
      history.push('/');
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
          <Grid
            item
            container
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
                  Sign in
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
                <Link to="/sign_up" variant="body2">
                  Sign up
                </Link>
              </Grid>
              <Grid item>
                <Link to="/forgetpassword" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
