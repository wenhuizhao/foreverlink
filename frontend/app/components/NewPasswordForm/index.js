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

const NewPasswordForm = ({token}) => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  console.log('token', token);
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      setErrorMessage('password does not match password confirmation');
      return;
    }
    try {
      const res = await axios.put(`${process.env.API_URL}/users/password`, {
        user: {
          reset_password_token: token,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      history.push('/sign_in');
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
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
                <Typography component="h1" variant="h5">
                  Reset Password
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="error">
                  {errorMessage}
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
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
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button-block"
                    >
                      Submit
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewPasswordForm;
