import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './style.scss'

const categorys = ['Best Sellers', 'Recent Products', 'Popular Products', 'Trending Products', 'Price (Low to High)', 'Price (High to Low)', 'Title (A - Z)', 'itle (Z - A)']

const RelatedCategory = () => {
    return (
        <Grid className="cetagoryWrap">
            <ul className="relatedCetagoryList">
                {categorys.map((item, i) => (
                    <li key={i}>
                        <Button component={Link} to="/product">{item}</Button>
                    </li>
                ))}
            </ul>
        </Grid>
    );
}

export default RelatedCategory;
