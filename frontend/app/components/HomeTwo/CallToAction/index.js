import React from 'react';
import { Grid } from '@material-ui/core'
import './style.scss'

const CallToAction = () => {
    return (
        <Grid className="callToActionArea">
            <Grid container spacing={4} className="container">
                <Grid item md={4} sm={6} xs={12}>
                    <Grid className="callToActionWrap">
                        <h3 className="callToactionIcon">201+</h3>
                        <Grid className="callToactionContent">
                            <h4>Amazing Products</h4>
                            <p>We have the most wonderful product all over the world.</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Grid className="callToActionWrap">
                        <h3 className="callToactionIcon">150k</h3>
                        <Grid className="callToactionContent">
                            <h4>Total Downloads</h4>
                            <p>We have the most wonderful product all over the world.</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Grid className="callToActionWrap">
                        <h3 className="callToactionIcon">25k</h3>
                        <Grid className="callToactionContent">
                            <h4>Happy Customers</h4>
                            <p>We have the most wonderful product all over the world.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CallToAction;
