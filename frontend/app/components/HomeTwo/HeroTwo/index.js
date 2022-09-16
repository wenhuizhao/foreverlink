import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core'
import './style.scss'

// images 
import bgImg from 'images/bg/hero.jpg'

const HeroTwo = () => {
    const [cetagory, setCetagory] = useState('all')
    const [search, setSearch] = useState('')
    return (
        <Grid
            style={{ background: `url(${bgImg}) no-repeat center center / cover` }}
            className="heroStyleTwo">
            <Grid container className="container" spacing={4}>
                <Grid item xs={12}>
                    <Grid className="heroContentTwo">
                        <h2>Start Your <span>Digital Marketplace</span> Today!</h2>
                        <p>The Biggest Marketplace for Digital Product & the powerful, template</p>
                        <form className="heroForm">
                            <TextField
                                select
                                value={cetagory}
                                onChange={(e) => setCetagory(e.target.value)}
                                classes={{
                                    root: 'heroSelectBox',
                                }}
                            >
                                <MenuItem selected value='all'>All</MenuItem>
                                <MenuItem value='html'>HTML</MenuItem>
                                <MenuItem value='PHP'>PHP</MenuItem>
                                <MenuItem value='wordpress'>Wordpress</MenuItem>
                            </TextField>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Get Started Now"
                            />
                            <Button>Search</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HeroTwo;
