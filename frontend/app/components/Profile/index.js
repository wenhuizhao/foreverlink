import React from 'react';
import { Grid } from '@material-ui/core'
import './style.scss'

// images 
import banner from 'images/profile.jpg'

const Profile = () => {
    return (
        <Grid className="profileWrap">
            <img src={banner} alt="" />
            <h4>Hello I am Robert William</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, </p>
            <p>you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
        </Grid>
    );
}

export default Profile;
