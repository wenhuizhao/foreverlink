import React from 'react';
import './style.scss'
import { Grid } from '@material-ui/core';
const SingleTeam = ({ image, name, designation, social }) => {
    return (
        <Grid className="singleTeamWrap">
            <img src={image} alt="" />
            <h4>{name}</h4>
            <span>{designation}</span>
            <ul>
                {social.map((item, i) => (
                    <li key={i}>
                        <a href="Javascript:Void(0)"><i className={`fa ${item}`}></i></a>
                    </li>
                ))}
            </ul>
        </Grid>
    );
}

export default SingleTeam;
