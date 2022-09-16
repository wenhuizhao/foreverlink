import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    message: {
      color: 'greed',
    },
    error: {
      color: 'red',
    },
  };
});

const LinkInfo = ({link}) => {
  return (
    <div>
      {link.url}
    </div>
  )
}

export default LinkInfo;