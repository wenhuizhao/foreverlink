import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import quoter from 'images/blogs/quoter.jpg'

const Quote = () => {
    return (
        <Grid className='quoteWrap'>
            <Grid className="quote">
                <i className="fi flaticon-quote"></i>
                <p>By integrating your entire application stack, from infrastructure and operations to ongoing maintenance and new development </p>
            </Grid>
            <Grid className="quoter">
                <Grid className="quoterImg">
                    <img src={quoter} alt="" />
                </Grid>
                <Grid className="quoterContent">
                    <h4>Jenefer Marvel</h4>
                    <p>CEO of Barbarah</p>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Quote;
