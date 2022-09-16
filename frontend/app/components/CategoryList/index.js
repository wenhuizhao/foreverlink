import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './style.scss'

const categorys = [
    {
        name: 'WordPress',
        value: '25',
        id: 1
    },
    {
        name: 'Graphic Item',
        value: '34',
        id: 2
    },
    {
        name: 'HTML Template',
        value: '50',
        id: 3
    },
    {
        name: 'Psd Template',
        value: '35',
        id: 4
    },
    {
        name: 'Plugins',
        value: '78',
        id: 5
    },
    {
        name: 'Audio',
        value: '80',
        id: 6
    },
    {
        name: 'Video',
        value: '100',
        id: 7
    },
    {
        name: 'Graphic Item',
        value: '75',
        id: 8
    },
    {
        name: 'Photos',
        value: '30',
        id: 9
    },
]

const CategoryList = ({ className }) => {
    return (
        <Grid className={className ? `${className} cetagoryWrap` : 'cetagoryWrap'}>
            <h3 className="cetagoryTitle">Categories</h3>
            <ul className="cetagoryList">
                {categorys.map((item, i) => (
                    <li key={i}>
                        <Link to="/product">
                            {item.name}
                            <span>{item.value}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </Grid>
    );
}

export default CategoryList;
