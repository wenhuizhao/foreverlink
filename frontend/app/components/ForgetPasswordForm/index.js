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

const ForgetPasswordForm = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios
        .post(`${process.env.API_URL}/users/password`, {
          user: {
            email: username,
          },
        })
        .catch(err => {
          if (err.response.status === 422) {
            console.log('422');
            console.log(err)
            setErrorMessage('Invalid emai');
          } else {
            throw err;
          }
        });
      if (res) {
        setMessage(
          'Reset password instruction has sent to your email. Please check your email',
        );
      }
    } catch (err) {
      setErrorMessage('Something went wrong');
      console.log('error', err);
      console.log()
    }
  };

  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
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
                Forget Password
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{message}</Typography>
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
              <Link href="/sign_up" variant="body2">
                Sign up
              </Link>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgetPasswordForm;
