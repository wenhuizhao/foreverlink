import React, {  useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => {
  return ({
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
    field: {
      marginTop: '20px',
      flex: 1,
    }
  });
});

const ProfileInfo = ({user}) => {
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
  }, []);

  const updateProfile = async () => {
    console.log('updateprofile');
    const userId = jwt_decode(localStorage.getItem("token").replace('Bearer ', '')).sub;
    const resp = await axios.post(
      `${process.env.API_URL}/members/data/${userId}`,
      {
        user: {
          first_name: firstName,
          last_name: lastName,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      },
    );
  };

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item className={classes.titleContainer}>
          <Typography paragraph className={classes.title}>
            My profile
          </Typography>
        </Grid>

        <Grid item container direction="column" spacing={2}>
          <TextField
            className={classes.field}
            id="standard-number"
            label="Email"
            type="text"
            value={email}
            disabled
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.field}
            id="standard-number"
            label="First Name"
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.field}
            id="standard-number"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Grid item container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
              onClick={()=>updateProfile()}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileInfo;
