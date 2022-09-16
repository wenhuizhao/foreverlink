import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import './style.scss'

const featureds = [
    {
        title: 'Security Assurance',
        text: 'Our template architecture is designed for maximize security and prevent malware, Dos Attack other.',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        icon: 'flaticon-ui',
        id: 1
    },
    {
        title: 'Best Customer Support',
        text: 'Testing closely, we ship templates. Yet,but anything goes out of track, Support team is there to get it ',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        icon: 'flaticon-support',
        id: 2
    },
    {
        title: 'Great Quality template',
        text: 'We craft powerful templates to keep visitors engaged and maximize store sales extensively.',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        icon: 'flaticon-first',
        id: 3
    },
]

const Featured = () => {
    return (
        <Grid className="featuredArea ptb-104">
            <Grid container spacing={4} className="container">
                {featureds.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Grid className="featuredItem">
                            <i style={{ background: item.color }} className={`fi ${item.icon}`}></i>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default injectIntl(Featured)
