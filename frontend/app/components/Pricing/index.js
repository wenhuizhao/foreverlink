import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'

import './style.scss'


const pricings = [
    {
        name: 'Single Licence',
        icon: 'flaticon-plane',
        price: 33,
        color: '#8268f7',
        items: ['Advance template option.', 'Visual page builder.', 'One click demo importer.', 'Lifetime free update.', '6 Months Premium Support .'],
        btn: 'Choose Single',
        bg: 'linear-gradient(to top, #6168f3, #c968ff)',
        className: 'single',
        id: 1,
    },
    {
        name: 'Multiple Licence',
        icon: 'flaticon-airplane',
        price: 69,
        color: '#00c5d7',
        items: ['Advance template option.', 'Visual page builder.', 'One click demo importer.', 'Lifetime free update.', '6 Months Premium Support .'],
        btn: 'Choose Multiple',
        className: 'multiple',
        bg: 'linear-gradient(to top, #00a7d5, #00ded8)',
        id: 2,
    },
    {
        name: 'Extended Licence',
        icon: 'flaticon-rocket-1',
        price: 59,
        color: '#fbb17a',
        items: ['Advance template option.', 'Visual page builder.', 'One click demo importer.', 'Lifetime free update.', '6 Months Premium Support .'],
        btn: 'Choose Extended',
        className: 'extended',
        bg: 'linear-gradient(to top, #f6d365, #fda085)',
        id: 1,
    },
]

const Pricing = () => {
    return (
        <Grid className="pricingArea ptb-104 bgGray">
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <SectionTitle
                        title="Our Pricing Plan"
                        subtitle="Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!"
                    />
                </Grid>
                {pricings.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Grid className={`pricingWrap ${item.className}`}>
                            <i className={`fi ${item.icon}`}></i>
                            <h3>{item.name}</h3>
                            <h2>
                                <span className="symble">$</span>
                                {item.price}
                                <span className="date" style={{ color: item.color }}>Per Month</span>
                            </h2>
                            <ul>
                                {item.items.map((list, i) => (
                                    <li key={i}><span style={{ background: item.color }}></span> {list}</li>
                                ))}
                            </ul>
                            <Button style={{ background: item.bg }} className="btn">{item.btn}</Button>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    )

}
export default injectIntl(Pricing)
