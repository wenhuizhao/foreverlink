import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './style.scss'

const tags_item = ['Wordpress', 'HTML', 'CSS', 'Graphic Design', 'Audio', 'Template Develop', 'Plugin', 'PDS Template', 'Video', 'Photography']

const Tags = () => {
    return (
        <Grid className='tagsWrap'>
            <h3 className="cetagoryTitle">Tags</h3>
            <ul className="tagsItems">
                {tags_item.map((item, i) => (
                    <li key={i}><Button component={Link} to="/blog">{item}</Button></li>
                ))}
            </ul>
        </Grid>
    );
}

export default Tags;
