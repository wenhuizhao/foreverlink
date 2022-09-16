import React, { useState } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import Rating from 'react-rating'
import './style.scss'

// components 
import Profile from 'components/Profile/Loadable'
import Portfolio from 'components/Portfolio/Loadable'
import Followers from 'components/Followers/Loadable'
import Review from 'components/Review/Loadable'
// images 
import author from 'images/author.jpg'


const AuthorInfo = () => {
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <Grid className="authorInfoArea">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item lg={4} md={4} xs={12}>
                    <Grid className="authorImage">
                        <img src={author} alt="" />
                        <ul className="authorSocialLink">
                            <li><a className="twitter" href="#"><i className="ti-twitter-alt"></i></a></li>
                            <li><a className="facebook" href="#"><i className="ti-facebook"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="ti-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="ti-linkedin"></i></a></li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid className="authorInfoWrap">
                        <Grid className="authorInfo">
                            <h3>Robert William</h3>
                            <p>Member since June 2017</p>
                            <ul className="flowBtn">
                                <li><span className="flow">Follow</span></li>
                                <li><Button component="a" href="Javascript:vodi(0)"><i className="ti-facebook"></i></Button></li>
                                <li><Button component="a" href="Javascript:vodi(0)"><i className="ti-dribbble"></i></Button></li>
                            </ul>
                        </Grid>

                        <ul className="infoActionWrap">
                            <li>
                                <h4>26</h4>
                                <p>Total Item</p>
                            </li>
                            <li>
                                <h4>532</h4>
                                <p>Total Sale</p>
                            </li>
                            <li>
                                <Rating
                                    className="ratingIcon"
                                    emptySymbol="fa fa-star-o"
                                    fullSymbol="fa fa-star"
                                    initialRating={4.3}
                                    readonly
                                />
                                <span className="review">(08)</span>
                                <p>Author Ratings</p>
                            </li>
                        </ul>
                    </Grid>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        classes={{
                            root: 'tabWrap',
                            flexContainer: 'tabContainer',
                            indicator: 'tabIndicator'
                        }}
                    >
                        <Tab label="Profile" />
                        <Tab label="Portfolio" />
                        <Tab label="Followers" />
                        <Tab label="Following" />
                        <Tab label="Riview" />
                    </Tabs>
                    {value === 0 && <Profile />}
                    {value === 1 && <Portfolio />}
                    {value === 2 && <Followers />}
                    {value === 3 && <Followers />}
                    {value === 4 && <Review />}
                </Grid>
            </Grid>
        </Grid >
    )
}


export default AuthorInfo;
